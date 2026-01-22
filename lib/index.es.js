import H, { useMemo as X, useState as V, useRef as k, useEffect as Te, forwardRef as or, useContext as Ne, useImperativeHandle as ir, useLayoutEffect as lt, useCallback as le, createContext as Ja, memo as ze, createElement as el, Component as tl } from "react";
import sl, { createPortal as hs } from "react-dom";
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _n = { exports: {} }, Xt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function nl() {
  if (kr) return Xt;
  kr = 1;
  var e = H, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, c) {
    var d, u = {}, h = null, g = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l) n.call(l, d) && !o.hasOwnProperty(d) && (u[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) u[d] === void 0 && (u[d] = l[d]);
    return { $$typeof: t, type: a, key: h, ref: g, props: u, _owner: r.current };
  }
  return Xt.Fragment = s, Xt.jsx = i, Xt.jsxs = i, Xt;
}
var Qt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function rl() {
  return Hr || (Hr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = H, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), f = Symbol.iterator, C = "@@iterator";
    function p(w) {
      if (w === null || typeof w != "object")
        return null;
      var N = f && w[f] || w[C];
      return typeof N == "function" ? N : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(w) {
      {
        for (var N = arguments.length, Y = new Array(N > 1 ? N - 1 : 0), ee = 1; ee < N; ee++)
          Y[ee - 1] = arguments[ee];
        b("error", w, Y);
      }
    }
    function b(w, N, Y) {
      {
        var ee = m.ReactDebugCurrentFrame, ue = ee.getStackAddendum();
        ue !== "" && (N += "%s", Y = Y.concat([ue]));
        var pe = Y.map(function(ce) {
          return String(ce);
        });
        pe.unshift("Warning: " + N), Function.prototype.apply.call(console[w], console, pe);
      }
    }
    var y = !1, F = !1, S = !1, P = !1, W = !1, O;
    O = Symbol.for("react.module.reference");
    function L(w) {
      return !!(typeof w == "string" || typeof w == "function" || w === n || w === o || W || w === r || w === c || w === d || P || w === g || y || F || S || typeof w == "object" && w !== null && (w.$$typeof === h || w.$$typeof === u || w.$$typeof === i || w.$$typeof === a || w.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      w.$$typeof === O || w.getModuleId !== void 0));
    }
    function D(w, N, Y) {
      var ee = w.displayName;
      if (ee)
        return ee;
      var ue = N.displayName || N.name || "";
      return ue !== "" ? Y + "(" + ue + ")" : Y;
    }
    function G(w) {
      return w.displayName || "Context";
    }
    function T(w) {
      if (w == null)
        return null;
      if (typeof w.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
        return w.displayName || w.name || null;
      if (typeof w == "string")
        return w;
      switch (w) {
        case n:
          return "Fragment";
        case s:
          return "Portal";
        case o:
          return "Profiler";
        case r:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case a:
            var N = w;
            return G(N) + ".Consumer";
          case i:
            var Y = w;
            return G(Y._context) + ".Provider";
          case l:
            return D(w, w.render, "ForwardRef");
          case u:
            var ee = w.displayName || null;
            return ee !== null ? ee : T(w.type) || "Memo";
          case h: {
            var ue = w, pe = ue._payload, ce = ue._init;
            try {
              return T(ce(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, x = 0, E, A, R, _, B, $, Z;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function z() {
      {
        if (x === 0) {
          E = console.log, A = console.info, R = console.warn, _ = console.error, B = console.group, $ = console.groupCollapsed, Z = console.groupEnd;
          var w = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: w,
            log: w,
            warn: w,
            error: w,
            group: w,
            groupCollapsed: w,
            groupEnd: w
          });
        }
        x++;
      }
    }
    function q() {
      {
        if (x--, x === 0) {
          var w = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, w, {
              value: E
            }),
            info: I({}, w, {
              value: A
            }),
            warn: I({}, w, {
              value: R
            }),
            error: I({}, w, {
              value: _
            }),
            group: I({}, w, {
              value: B
            }),
            groupCollapsed: I({}, w, {
              value: $
            }),
            groupEnd: I({}, w, {
              value: Z
            })
          });
        }
        x < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = m.ReactCurrentDispatcher, se;
    function ye(w, N, Y) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (ue) {
            var ee = ue.stack.trim().match(/\n( *(at )?)/);
            se = ee && ee[1] || "";
          }
        return `
` + se + w;
      }
    }
    var Fe = !1, ne;
    {
      var Se = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Se();
    }
    function Le(w, N) {
      if (!w || Fe)
        return "";
      {
        var Y = ne.get(w);
        if (Y !== void 0)
          return Y;
      }
      var ee;
      Fe = !0;
      var ue = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = Q.current, Q.current = null, z();
      try {
        if (N) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (_e) {
              ee = _e;
            }
            Reflect.construct(w, [], ce);
          } else {
            try {
              ce.call();
            } catch (_e) {
              ee = _e;
            }
            w.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            ee = _e;
          }
          w();
        }
      } catch (_e) {
        if (_e && ee && typeof _e.stack == "string") {
          for (var ie = _e.stack.split(`
`), Be = ee.stack.split(`
`), Pe = ie.length - 1, Ee = Be.length - 1; Pe >= 1 && Ee >= 0 && ie[Pe] !== Be[Ee]; )
            Ee--;
          for (; Pe >= 1 && Ee >= 0; Pe--, Ee--)
            if (ie[Pe] !== Be[Ee]) {
              if (Pe !== 1 || Ee !== 1)
                do
                  if (Pe--, Ee--, Ee < 0 || ie[Pe] !== Be[Ee]) {
                    var Ke = `
` + ie[Pe].replace(" at new ", " at ");
                    return w.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", w.displayName)), typeof w == "function" && ne.set(w, Ke), Ke;
                  }
                while (Pe >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        Fe = !1, Q.current = pe, q(), Error.prepareStackTrace = ue;
      }
      var It = w ? w.displayName || w.name : "", Rt = It ? ye(It) : "";
      return typeof w == "function" && ne.set(w, Rt), Rt;
    }
    function ae(w, N, Y) {
      return Le(w, !1);
    }
    function he(w) {
      var N = w.prototype;
      return !!(N && N.isReactComponent);
    }
    function fe(w, N, Y) {
      if (w == null)
        return "";
      if (typeof w == "function")
        return Le(w, he(w));
      if (typeof w == "string")
        return ye(w);
      switch (w) {
        case c:
          return ye("Suspense");
        case d:
          return ye("SuspenseList");
      }
      if (typeof w == "object")
        switch (w.$$typeof) {
          case l:
            return ae(w.render);
          case u:
            return fe(w.type, N, Y);
          case h: {
            var ee = w, ue = ee._payload, pe = ee._init;
            try {
              return fe(pe(ue), N, Y);
            } catch {
            }
          }
        }
      return "";
    }
    var Re = Object.prototype.hasOwnProperty, re = {}, me = m.ReactDebugCurrentFrame;
    function ve(w) {
      if (w) {
        var N = w._owner, Y = fe(w.type, w._source, N ? N.type : null);
        me.setExtraStackFrame(Y);
      } else
        me.setExtraStackFrame(null);
    }
    function De(w, N, Y, ee, ue) {
      {
        var pe = Function.call.bind(Re);
        for (var ce in w)
          if (pe(w, ce)) {
            var ie = void 0;
            try {
              if (typeof w[ce] != "function") {
                var Be = Error((ee || "React class") + ": " + Y + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              ie = w[ce](N, ce, ee, Y, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Pe) {
              ie = Pe;
            }
            ie && !(ie instanceof Error) && (ve(ue), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ee || "React class", Y, ce, typeof ie), ve(null)), ie instanceof Error && !(ie.message in re) && (re[ie.message] = !0, ve(ue), v("Failed %s type: %s", Y, ie.message), ve(null));
          }
      }
    }
    var Ae = Array.isArray;
    function Ve(w) {
      return Ae(w);
    }
    function Yt(w) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, Y = N && w[Symbol.toStringTag] || w.constructor.name || "Object";
        return Y;
      }
    }
    function St(w) {
      try {
        return Zt(w), !1;
      } catch {
        return !0;
      }
    }
    function Zt(w) {
      return "" + w;
    }
    function ws(w) {
      if (St(w))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yt(w)), Zt(w);
    }
    var qt = m.ReactCurrentOwner, we = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ke, vs;
    function Oa(w) {
      if (Re.call(w, "ref")) {
        var N = Object.getOwnPropertyDescriptor(w, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return w.ref !== void 0;
    }
    function Ga(w) {
      if (Re.call(w, "key")) {
        var N = Object.getOwnPropertyDescriptor(w, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return w.key !== void 0;
    }
    function Ba(w, N) {
      typeof w.ref == "string" && qt.current;
    }
    function Wa(w, N) {
      {
        var Y = function() {
          ke || (ke = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        Y.isReactWarning = !0, Object.defineProperty(w, "key", {
          get: Y,
          configurable: !0
        });
      }
    }
    function Na(w, N) {
      {
        var Y = function() {
          vs || (vs = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        Y.isReactWarning = !0, Object.defineProperty(w, "ref", {
          get: Y,
          configurable: !0
        });
      }
    }
    var Va = function(w, N, Y, ee, ue, pe, ce) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: w,
        key: N,
        ref: Y,
        props: ce,
        // Record the component responsible for creating this element.
        _owner: pe
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ue
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function _a(w, N, Y, ee, ue) {
      {
        var pe, ce = {}, ie = null, Be = null;
        Y !== void 0 && (ws(Y), ie = "" + Y), Ga(N) && (ws(N.key), ie = "" + N.key), Oa(N) && (Be = N.ref, Ba(N, ue));
        for (pe in N)
          Re.call(N, pe) && !we.hasOwnProperty(pe) && (ce[pe] = N[pe]);
        if (w && w.defaultProps) {
          var Pe = w.defaultProps;
          for (pe in Pe)
            ce[pe] === void 0 && (ce[pe] = Pe[pe]);
        }
        if (ie || Be) {
          var Ee = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
          ie && Wa(ce, Ee), Be && Na(ce, Ee);
        }
        return Va(w, ie, Be, ue, ee, qt.current, ce);
      }
    }
    var fn = m.ReactCurrentOwner, Pr = m.ReactDebugCurrentFrame;
    function Mt(w) {
      if (w) {
        var N = w._owner, Y = fe(w.type, w._source, N ? N.type : null);
        Pr.setExtraStackFrame(Y);
      } else
        Pr.setExtraStackFrame(null);
    }
    var pn;
    pn = !1;
    function Cn(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function Er() {
      {
        if (fn.current) {
          var w = T(fn.current.type);
          if (w)
            return `

Check the render method of \`` + w + "`.";
        }
        return "";
      }
    }
    function za(w) {
      return "";
    }
    var Tr = {};
    function $a(w) {
      {
        var N = Er();
        if (!N) {
          var Y = typeof w == "string" ? w : w.displayName || w.name;
          Y && (N = `

Check the top-level render call using <` + Y + ">.");
        }
        return N;
      }
    }
    function Mr(w, N) {
      {
        if (!w._store || w._store.validated || w.key != null)
          return;
        w._store.validated = !0;
        var Y = $a(N);
        if (Tr[Y])
          return;
        Tr[Y] = !0;
        var ee = "";
        w && w._owner && w._owner !== fn.current && (ee = " It was passed a child from " + T(w._owner.type) + "."), Mt(w), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Y, ee), Mt(null);
      }
    }
    function Ir(w, N) {
      {
        if (typeof w != "object")
          return;
        if (Ve(w))
          for (var Y = 0; Y < w.length; Y++) {
            var ee = w[Y];
            Cn(ee) && Mr(ee, N);
          }
        else if (Cn(w))
          w._store && (w._store.validated = !0);
        else if (w) {
          var ue = p(w);
          if (typeof ue == "function" && ue !== w.entries)
            for (var pe = ue.call(w), ce; !(ce = pe.next()).done; )
              Cn(ce.value) && Mr(ce.value, N);
        }
      }
    }
    function ja(w) {
      {
        var N = w.type;
        if (N == null || typeof N == "string")
          return;
        var Y;
        if (typeof N == "function")
          Y = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === u))
          Y = N.propTypes;
        else
          return;
        if (Y) {
          var ee = T(N);
          De(Y, w.props, "prop", ee, w);
        } else if (N.PropTypes !== void 0 && !pn) {
          pn = !0;
          var ue = T(N);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ua(w) {
      {
        for (var N = Object.keys(w.props), Y = 0; Y < N.length; Y++) {
          var ee = N[Y];
          if (ee !== "children" && ee !== "key") {
            Mt(w), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ee), Mt(null);
            break;
          }
        }
        w.ref !== null && (Mt(w), v("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
      }
    }
    var Lr = {};
    function Ar(w, N, Y, ee, ue, pe) {
      {
        var ce = L(w);
        if (!ce) {
          var ie = "";
          (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Be = za();
          Be ? ie += Be : ie += Er();
          var Pe;
          w === null ? Pe = "null" : Ve(w) ? Pe = "array" : w !== void 0 && w.$$typeof === t ? (Pe = "<" + (T(w.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : Pe = typeof w, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Pe, ie);
        }
        var Ee = _a(w, N, Y, ue, pe);
        if (Ee == null)
          return Ee;
        if (ce) {
          var Ke = N.children;
          if (Ke !== void 0)
            if (ee)
              if (Ve(Ke)) {
                for (var It = 0; It < Ke.length; It++)
                  Ir(Ke[It], w);
                Object.freeze && Object.freeze(Ke);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ir(Ke, w);
        }
        if (Re.call(N, "key")) {
          var Rt = T(w), _e = Object.keys(N).filter(function(Qa) {
            return Qa !== "key";
          }), mn = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lr[Rt + mn]) {
            var Xa = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, mn, Rt, Xa, Rt), Lr[Rt + mn] = !0;
          }
        }
        return w === n ? Ua(Ee) : ja(Ee), Ee;
      }
    }
    function Ka(w, N, Y) {
      return Ar(w, N, Y, !0);
    }
    function Ya(w, N, Y) {
      return Ar(w, N, Y, !1);
    }
    var Za = Ya, qa = Ka;
    Qt.Fragment = n, Qt.jsx = Za, Qt.jsxs = qa;
  }()), Qt;
}
process.env.NODE_ENV === "production" ? _n.exports = nl() : _n.exports = rl();
var M = _n.exports;
const tt = ({
  title: e = "",
  to: t = null,
  height: s = null,
  size: n = "default",
  color: r = "blue",
  icon: o,
  children: i,
  onClick: a,
  disabled: l = !1,
  variant: c = "elevated",
  className: d = "",
  style: u
}) => {
  const h = !!o, g = !!i, f = !!e, C = [
    "s-btn",
    `s-btn--size-${n}`,
    c !== "elevated" && `s-btn--variant-${c}`,
    l && "s-btn--disabled",
    d
  ].filter(Boolean).join(" "), p = {
    height: s ? `${s}px` : void 0,
    ...u
  }, m = {
    className: C,
    style: p,
    "data-s-color": r,
    onClick: a,
    disabled: l
  };
  return /* @__PURE__ */ M.jsxs("button", { ...m, children: [
    h && !g && !f && /* @__PURE__ */ M.jsx("span", { className: "v-btn__prepend", children: /* @__PURE__ */ M.jsx("i", { className: `mdi ${o}` }) }),
    (f || g) && /* @__PURE__ */ M.jsxs("span", { className: "v-btn__content", children: [
      e,
      i
    ] })
  ] });
}, Gm = ({
  onClickRefresh: e,
  refreshDate: t = /* @__PURE__ */ new Date(),
  refreshDateTitle: s = "기준일자"
}) => {
  const n = X(() => {
    const r = t.getFullYear(), o = (t.getMonth() + 1).toString().padStart(2, "0"), i = t.getDate().toString().padStart(2, "0"), a = t.getHours().toString().padStart(2, "0"), l = t.getMinutes().toString().padStart(2, "0"), c = t.getSeconds().toString().padStart(2, "0");
    return `${r}-${o}-${i} ${a}:${l}:${c}`;
  }, [t]);
  return /* @__PURE__ */ M.jsxs("span", { className: "position-relative refresh-time-wrapper", children: [
    /* @__PURE__ */ M.jsxs("span", { className: "refresh-time", children: [
      s,
      " : ",
      n
    ] }),
    /* @__PURE__ */ M.jsx(
      "img",
      {
        className: "cursor-pointer ml-1 refresh-icon",
        height: "16",
        width: "16",
        src: "/assets/images/icon_refresh.svg",
        alt: "refresh",
        onClick: e,
        style: { cursor: "pointer" }
      }
    )
  ] });
}, Bm = ({
  titleName: e = "",
  modelValue: t = !1,
  multiLine: s = !0,
  color: n = "#036EB8",
  height: r = "48px",
  width: o = "450px",
  timeout: i = 5e3,
  isClose: a = !0,
  alertStyle: l = {},
  onUpdateModelValue: c,
  children: d
}) => {
  const [u, h] = V(t), [g, f] = V(48), [C, p] = V(!1), [m, v] = V(!1), b = k(null), y = X(() => s ? `${Math.max(g, 48)}px` : typeof r == "number" ? `${r}px` : r, [s, g, r]), F = X(() => u ? s ? m : !0 : !1, [u, s, m]), S = async () => {
    if (!(!b.current || !u || C)) {
      p(!0), v(!1);
      try {
        await new Promise((I) => setTimeout(I, 100));
        const L = b.current.scrollHeight, T = Math.max(48, L + 26);
        Math.abs(T - g) > 2 && f(T), v(!0);
      } finally {
        p(!1);
      }
    }
  }, P = (L) => {
    h(L), c == null || c(L), v(!1);
  }, W = () => {
    h(!1), c == null || c(!1);
  };
  Te(() => {
    h(t), t ? s ? (v(!1), setTimeout(() => {
      S();
    }, 300)) : v(!0) : v(!1);
  }, [t, s]), Te(() => {
    u && s && (v(!1), setTimeout(() => {
      S();
    }, 300));
  }, [e, u, s]), Te(() => {
    if (u && i > 0) {
      const L = setTimeout(() => {
        P(!1);
      }, i);
      return () => clearTimeout(L);
    }
  }, [u, i]);
  const O = {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1e3,
    minWidth: "600px",
    backgroundColor: n,
    color: "white",
    padding: "12px 16px",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    height: y,
    width: typeof o == "number" ? `${o}px` : o,
    ...l
  };
  return /* @__PURE__ */ M.jsxs("div", { className: "s-alert", children: [
    F && /* @__PURE__ */ M.jsx("div", { style: O, children: /* @__PURE__ */ M.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
      /* @__PURE__ */ M.jsxs("div", { style: { display: "flex", alignItems: "center", flex: 1 }, children: [
        d,
        /* @__PURE__ */ M.jsx(
          "pre",
          {
            ref: b,
            className: "s-alert__title",
            style: { width: typeof o == "number" ? `${o}px` : o },
            children: e
          }
        )
      ] }),
      a && /* @__PURE__ */ M.jsx(
        tt,
        {
          color: "#fff",
          variant: "text",
          onClick: W,
          style: { marginLeft: "16px" },
          children: "Close"
        }
      )
    ] }) }),
    u && !F && /* @__PURE__ */ M.jsx("div", { className: "s-alert__hidden-measure", children: /* @__PURE__ */ M.jsx(
      "pre",
      {
        ref: b,
        className: "s-alert__title",
        style: { width: typeof o == "number" ? `${o}px` : o },
        children: e
      }
    ) })
  ] });
}, wn = (e, t) => (s = {}) => /* @__PURE__ */ M.jsx(
  "svg",
  {
    width: s.width || "100%",
    height: s.height || "100%",
    viewBox: e,
    fill: s.fill || "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: s.className,
    style: s.style,
    children: t.map((n, r) => /* @__PURE__ */ M.jsx(
      "path",
      {
        fillRule: n.fillRule,
        clipRule: n.clipRule,
        d: n.d,
        fill: n.fill || "currentColor"
      },
      r
    ))
  }
), Or = {
  save: wn("0 0 25 24", [
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.17739 2H5.16881C3.55139 2 2.24023 3.31115 2.24023 4.92857V19.0714C2.24023 20.6888 3.55139 22 5.16881 22H19.3117C20.9291 22 22.2402 20.6888 22.2402 19.0714V8.29883C22.2402 7.52212 21.9317 6.77723 21.3825 6.22802L18.0122 2.85777C17.463 2.30855 16.7181 2 15.9414 2L7.17773 2C7.17762 2 7.1775 2 7.17739 2ZM6.17773 4L6.17773 6.375C6.17773 7.5486 7.12913 8.5 8.30273 8.5L16.1777 8.5C17.3513 8.5 18.3027 7.5486 18.3027 6.375V5.97671L19.9683 7.64224L20.6754 6.93513L19.9683 7.64224C20.1424 7.81638 20.2402 8.05256 20.2402 8.29884V19.0714C20.2402 19.5843 19.8245 20 19.3117 20H18.3027V14.8125C18.3027 13.6389 17.3513 12.6875 16.1777 12.6875H8.30273C7.12913 12.6875 6.17773 13.6389 6.17773 14.8125V19.875C6.17773 19.9173 6.18036 19.9591 6.18547 20H5.16881C4.65596 20 4.24023 19.5843 4.24023 19.0714V4.92857C4.24023 4.41572 4.65596 4 5.16881 4H6.17773ZM8.17 20H16.3027V14.8125C16.3027 14.7435 16.2468 14.6875 16.1777 14.6875H8.30273C8.2337 14.6875 8.17773 14.7435 8.17773 14.8125V19.875C8.17773 19.9173 8.1751 19.9591 8.17 20ZM16.304 4.07374C16.3032 4.09071 16.3027 4.10781 16.3027 4.125V6.375C16.3027 6.44404 16.2468 6.5 16.1777 6.5L8.30273 6.5C8.2337 6.5 8.17773 6.44403 8.17773 6.375L8.17773 4H15.9414C16.0672 4 16.1904 4.02554 16.304 4.07374Z",
      fill: "currentColor"
    }
  ]),
  delete: wn("0 0 25 24", [
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.24023 4.05882C8.24023 2.97639 9.08258 2 10.2402 2H14.2402C15.3979 2 16.2402 2.97639 16.2402 4.05882V5.11765C16.2402 5.13729 16.24 5.1569 16.2394 5.17647H20.2402C20.7925 5.17647 21.2402 5.62419 21.2402 6.17647C21.2402 6.72876 20.7925 7.17647 20.2402 7.17647H19.2394C19.24 7.19604 19.2402 7.21565 19.2402 7.23529V18.8824C19.2402 20.5496 17.9502 22 16.2402 22H8.24023C6.5303 22 5.24023 20.5496 5.24023 18.8824V7.23529C5.24023 7.21565 5.24051 7.19604 5.24106 7.17647H4.24023C3.68795 7.17647 3.24023 6.72876 3.24023 6.17647C3.24023 5.62419 3.68795 5.17647 4.24023 5.17647H8.24106C8.24051 5.1569 8.24023 5.13729 8.24023 5.11765V4.05882ZM7.25735 7.17647C7.25006 7.18579 7.24023 7.2047 7.24023 7.23529V18.8824C7.24023 19.5542 7.74103 20 8.24023 20H16.2402C16.7394 20 17.2402 19.5542 17.2402 18.8824V7.23529C17.2402 7.2047 17.2304 7.18579 17.2231 7.17647H7.25735ZM10.2574 4C10.2501 4.00932 10.2402 4.02823 10.2402 4.05882V5.11765C10.2402 5.14824 10.2501 5.16715 10.2574 5.17647H14.2231C14.2304 5.16715 14.2402 5.14824 14.2402 5.11765V4.05882C14.2402 4.02823 14.2304 4.00932 14.2231 4H10.2574ZM10.2402 9.41177C10.7925 9.41177 11.2402 9.85948 11.2402 10.4118V16.7647C11.2402 17.317 10.7925 17.7647 10.2402 17.7647C9.68795 17.7647 9.24023 17.317 9.24023 16.7647V10.4118C9.24023 9.85948 9.68795 9.41177 10.2402 9.41177ZM14.2402 9.41177C14.7925 9.41177 15.2402 9.85948 15.2402 10.4118V16.7647C15.2402 17.317 14.7925 17.7647 14.2402 17.7647C13.6879 17.7647 13.2402 17.317 13.2402 16.7647V10.4118C13.2402 9.85948 13.6879 9.41177 14.2402 9.41177Z",
      fill: "currentColor"
    }
  ]),
  "expand-more": wn("0 0 24 24", [
    {
      d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
      fill: "currentColor"
    }
  ])
}, it = ({
  name: e,
  size: t = 24,
  color: s = "currentColor",
  className: n = "",
  ...r
}) => {
  const o = X(() => {
    const l = Or[e] || Or["expand-more"];
    return l || null;
  }, [e]), i = {
    width: typeof t == "number" ? `${t}px` : t,
    height: typeof t == "number" ? `${t}px` : t,
    color: s
  }, a = X(() => {
    const l = ["s-icon"];
    return n && l.push(n), l.join(" ");
  }, [n]);
  return o ? /* @__PURE__ */ M.jsx(o, { className: a, style: i, ...r }) : null;
}, Wm = ({
  placeholder: e = "파일을 선택하세요",
  modelValue: t = null,
  errorMessages: s = [],
  btnDisabled: n = !1,
  hideDetails: r = "auto",
  buttonText: o = "파일 찾기",
  accept: i = "*",
  onUpdateModelValue: a
}) => {
  const l = k(null), [c, d] = V(null), [u, h] = V(null);
  Te(() => {
    t instanceof File ? (d(t), h(t.name)) : typeof t == "string" && h(t);
  }, [t]);
  const g = (C) => {
    var m;
    const p = ((m = C.target.files) == null ? void 0 : m[0]) || null;
    d(p), h((p == null ? void 0 : p.name) || null), a == null || a(p);
  }, f = () => {
    var C;
    (C = l.current) == null || C.click();
  };
  return /* @__PURE__ */ M.jsxs("div", { className: "s-file-input", children: [
    /* @__PURE__ */ M.jsx(
      "input",
      {
        ref: l,
        type: "file",
        className: "d-none",
        onChange: g,
        accept: i,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ M.jsx(
      "input",
      {
        type: "text",
        value: u || "",
        readOnly: !0,
        placeholder: e,
        style: {
          padding: "8px 12px",
          border: s.length > 0 ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "14px",
          flex: 1,
          backgroundColor: "#f5f5f5"
        }
      }
    ),
    s.length > 0 && r !== !0 && /* @__PURE__ */ M.jsx("div", { style: { color: "red", fontSize: "12px", marginTop: "4px" }, children: s[0] }),
    /* @__PURE__ */ M.jsxs(tt, { height: 30, variant: "outlined", disabled: n, onClick: f, children: [
      /* @__PURE__ */ M.jsx(it, { name: "file", size: 16, className: "mr-1" }),
      o
    ] })
  ] });
}, Nm = ({
  title: e = "",
  className: t = "",
  modalWidth: s = "",
  modalHeight: n = "",
  modelValue: r = !1,
  isWhite: o = !1,
  popupCardClass: i = "",
  hideHeader: a = !1,
  teleportId: l = "destination",
  size: c = "medium",
  languageCode: d = "ko",
  mode: u = null,
  changeMode: h,
  onClose: g,
  onCancel: f,
  onSave: C,
  onEdit: p,
  onUpdate: m,
  hideSaveButton: v = !1,
  hideEditButton: b = !1,
  hideCloseButton: y = !1,
  hideCancelButton: F = !1,
  onUpdateModelValue: S,
  onFetch: P,
  children: W,
  buttons: O,
  headerBtnAppend: L,
  footer: D
}) => {
  const G = {
    ko: { save: "저장", update: "수정", close: "닫기", cancel: "취소" },
    en: { save: "Save", update: "Update", close: "Close", cancel: "Cancel" }
  }, T = u === "new", I = u === "detail", x = u === "update", E = G[d], A = X(() => {
    const ne = ["s-modal"];
    return typeof t == "string" ? ne.push(t) : typeof t == "object" && ne.push(...Object.keys(t).filter((Se) => t[Se])), ne.join(" ");
  }, [t]), R = {
    "data-size": c
  }, _ = (ne) => {
    if (ne) {
      document.body.style.overflow = "hidden";
      const Se = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${Se}px`;
    } else
      document.body.style.overflow = "", document.body.style.paddingRight = "";
  };
  Te(() => (r ? (P == null || P(), _(!0)) : _(!1), () => {
    _(!1);
  }), [r, P]);
  const B = () => {
    S == null || S(!1);
  }, $ = () => {
    B();
  }, Z = () => {
    if (!h)
      throw Error("Not found changeMode");
    f == null || f(), u === "update" ? h("detail") : B();
  }, U = () => {
    g == null || g(), B();
  }, z = () => {
    m == null || m();
  }, q = () => {
    u === "detail" && (h == null || h("update")), p == null || p();
  }, Q = {
    display: r ? "flex" : "none"
  }, se = {
    width: s || void 0,
    height: n || void 0,
    minHeight: n || void 0
  };
  if (!r)
    return null;
  const ye = /* @__PURE__ */ M.jsx(
    "div",
    {
      className: A,
      style: Q,
      ...R,
      onClick: (ne) => {
        ne.target === ne.currentTarget && B();
      },
      children: /* @__PURE__ */ M.jsxs("div", { className: `s-modal__card ${i}`, style: se, onClick: (ne) => ne.stopPropagation(), children: [
        !a && /* @__PURE__ */ M.jsxs("div", { className: `s-modal__title ${o ? "s-modal__title--light" : "s-modal__title--dark"}`, children: [
          /* @__PURE__ */ M.jsx("span", { children: e }),
          /* @__PURE__ */ M.jsxs("div", { className: "button-wrapper", children: [
            L,
            /* @__PURE__ */ M.jsx(
              "i",
              {
                className: "mdi mdi-close",
                style: { color: o ? "#1A3350" : "#fff", cursor: "pointer" },
                onClick: $
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ M.jsx("div", { className: "s-modal__content-wrapper", children: /* @__PURE__ */ M.jsx("div", { className: "s-modal__content", children: W }) }),
        /* @__PURE__ */ M.jsx("div", { className: "s-modal__footer", children: D || O || /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
          (T || !b && I || x) && /* @__PURE__ */ M.jsxs("div", { className: "s-modal__footer__positive", children: [
            !v && T && /* @__PURE__ */ M.jsxs(tt, { onClick: C, children: [
              /* @__PURE__ */ M.jsx(it, { name: "save", size: 16, className: "mr-1" }),
              E.save
            ] }),
            !b && I && /* @__PURE__ */ M.jsxs(tt, { onClick: q, children: [
              /* @__PURE__ */ M.jsx(it, { name: "edit", size: 16, className: "mr-1" }),
              E.update
            ] }),
            !v && x && /* @__PURE__ */ M.jsxs(tt, { onClick: z, children: [
              /* @__PURE__ */ M.jsx(it, { name: "edit", size: 16, className: "mr-1" }),
              E.save
            ] })
          ] }),
          (!y && I || !F && (T || x)) && /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
            !y && I && /* @__PURE__ */ M.jsxs(tt, { variant: "outlined", onClick: U, children: [
              /* @__PURE__ */ M.jsx(it, { name: "close", size: 16, className: "mr-1" }),
              E.close
            ] }),
            !F && (T || x) && /* @__PURE__ */ M.jsxs(tt, { variant: "outlined", onClick: Z, children: [
              /* @__PURE__ */ M.jsx(it, { name: "close", size: 16, className: "mr-1" }),
              E.cancel
            ] })
          ] })
        ] }) })
      ] })
    }
  ), Fe = document.getElementById(l);
  return Fe ? hs(ye, Fe) : ye;
}, Vm = ({
  contents: e = "",
  modelValue: t = !1,
  teleportId: s = "destination",
  confirmButtonText: n = "확인",
  cancelButtonText: r = "취소",
  noCancel: o = !1,
  onUpdateModelValue: i,
  onClickConfirm: a,
  onClickCancel: l
}) => {
  Te(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [t]);
  const c = (f) => {
    i == null || i(f);
  }, d = () => {
    a == null || a(), c(!1);
  }, u = () => {
    l == null || l(), c(!1);
  };
  if (!t)
    return null;
  const h = /* @__PURE__ */ M.jsx(
    "div",
    {
      className: "s-confirm-modal",
      onClick: (f) => {
        f.target === f.currentTarget && c(!1);
      },
      children: /* @__PURE__ */ M.jsxs("div", { onClick: (f) => f.stopPropagation(), children: [
        /* @__PURE__ */ M.jsx("div", { className: "s-confirm-modal__text", children: e }),
        /* @__PURE__ */ M.jsxs("div", { className: "button-wrapper", children: [
          /* @__PURE__ */ M.jsxs(tt, { variant: "elevated", color: "blue", onClick: d, children: [
            /* @__PURE__ */ M.jsx(it, { name: "check", size: 16, className: "mr-1" }),
            n
          ] }),
          !o && /* @__PURE__ */ M.jsxs(tt, { variant: "outlined", color: "blue", onClick: u, children: [
            /* @__PURE__ */ M.jsx(it, { name: "close", size: 16, className: "mr-1" }),
            r
          ] })
        ] })
      ] })
    }
  ), g = document.getElementById(s);
  return g ? hs(h, g) : h;
}, _m = ({
  title: e = null,
  text: t = null,
  titleWidth: s = null,
  maxWidth: n = 500
}) => {
  const [r, o] = V(!1), i = X(() => t || e, [t, e]), a = X(
    () => s ? `${s}px` : "",
    [s]
  ), l = {
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    marginBottom: "8px",
    padding: "8px 12px",
    backgroundColor: "rgba(0, 0, 0, 0.87)",
    color: "white",
    borderRadius: "4px",
    fontSize: "12px",
    whiteSpace: "normal",
    wordBreak: "break-word",
    maxWidth: typeof n == "number" ? `${n}px` : n,
    zIndex: 1e3,
    pointerEvents: "none"
  };
  return /* @__PURE__ */ M.jsxs(
    "span",
    {
      className: "d-inline-block text-truncate",
      style: {
        position: "relative",
        maxWidth: a
      },
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      children: [
        e,
        r && i && /* @__PURE__ */ M.jsx("span", { style: l, children: i })
      ]
    }
  );
}, ol = ({
  size: e = 50,
  width: t = 6
}) => {
  const n = 2 * Math.PI * 20, r = X(() => 20 / (1 - t / e) * 2, [e, t]), o = X(() => t / e * r, [e, t, r]), i = {
    height: `${e}px`,
    width: `${e}px`,
    "--stroke-width": `${t}px`
  };
  return /* @__PURE__ */ M.jsxs("div", { className: "s-progress-circular", style: i, children: [
    /* @__PURE__ */ M.jsx("svg", { style: { width: 0, height: 0, position: "absolute" }, "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ M.jsxs("linearGradient", { id: "gradientColor", children: [
      /* @__PURE__ */ M.jsx("stop", { offset: "0%", stopColor: "#1B75BB" }),
      /* @__PURE__ */ M.jsx("stop", { offset: "100%", stopColor: "#7C0F80" })
    ] }) }),
    /* @__PURE__ */ M.jsxs(
      "svg",
      {
        className: "s-progress-circular__wrapper",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${r} ${r}`,
        children: [
          /* @__PURE__ */ M.jsx(
            "circle",
            {
              className: "s-progress-circular__underlay",
              cx: "50%",
              cy: "50%",
              fill: "transparent",
              r: 20,
              style: {
                strokeWidth: o,
                strokeDasharray: n,
                strokeDashoffset: 0
              }
            }
          ),
          /* @__PURE__ */ M.jsx(
            "circle",
            {
              className: "s-progress-circular__overlay",
              fill: "transparent",
              cx: "50%",
              cy: "50%",
              r: 20,
              style: {
                strokeWidth: o,
                strokeDasharray: n,
                strokeDashoffset: 0
              }
            }
          )
        ]
      }
    )
  ] });
}, zm = ({
  loadingMessage: e = "Check-loading",
  modelValue: t = !1,
  teleportId: s = "destination"
}) => {
  Te(() => (t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [t]);
  const n = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    display: t ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    marginTop: "68px",
    height: "calc(100% - 68px)"
  }, r = /* @__PURE__ */ M.jsx("div", { className: "custom-overlay", style: n, children: /* @__PURE__ */ M.jsxs("div", { className: "s-loading", children: [
    /* @__PURE__ */ M.jsx("div", { className: "s-loading__message", children: e }),
    /* @__PURE__ */ M.jsx("div", { className: "s-loading__spinner", children: /* @__PURE__ */ M.jsx(ol, {}) }),
    /* @__PURE__ */ M.jsx("div", { className: "s-loading__text", children: "Please wait..." })
  ] }) }), o = document.getElementById(s);
  return o ? hs(r, o) : r;
}, $m = ({ stages: e = [] }) => {
  const [t, s] = V([]), n = (c) => {
    s((d) => d.indexOf(c) === -1 ? [...d, c] : d.filter((h) => h !== c));
  }, r = (c) => ({
    "stage-header--completed": c.status === "completed",
    "stage-header--in-progress": c.status === "in-progress",
    "stage-header--pending": c.status === "pending",
    "stage-header--delayed": c.status === "delayed"
  }), o = (c) => ({
    "sub-stage-item--completed": c.status === "completed",
    "sub-stage-item--in-progress": c.status === "in-progress",
    "sub-stage-item--pending": c.status === "pending",
    "sub-stage-item--delayed": c.status === "delayed"
  }), i = (c) => {
    switch (c) {
      case "completed":
        return "mdi-check-circle";
      case "in-progress":
        return "mdi-progress-clock";
      default:
        return "mdi-circle-outline";
    }
  }, a = (c) => {
    switch (c) {
      case "completed":
        return "#00BA88";
      case "in-progress":
        return "#1297F2";
      default:
        return "#9E9E9E";
    }
  }, l = (c) => {
    switch (c) {
      case "completed":
        return "#00BA88";
      case "in-progress":
        return "#1297F2";
      default:
        return "#6C6C6C";
    }
  };
  return /* @__PURE__ */ M.jsx("div", { className: "progress-stages", children: e.map((c, d) => /* @__PURE__ */ M.jsxs("div", { className: "stage-item", children: [
    /* @__PURE__ */ M.jsx("div", { className: `stage-header ${Object.entries(r(c)).filter(([u, h]) => h).map(([u]) => u).join(" ")}`, children: /* @__PURE__ */ M.jsxs("div", { className: "d-flex align-center", children: [
      /* @__PURE__ */ M.jsx(
        "i",
        {
          className: `mdi ${i(c.status)} mr-2`,
          style: { color: a(c.status), fontSize: "20px" }
        }
      ),
      /* @__PURE__ */ M.jsx("span", { className: "stage-title", children: c.title })
    ] }) }),
    /* @__PURE__ */ M.jsx("div", { className: "sub-stages", children: (c.subStages || []).map((u, h) => {
      var C, p;
      const g = `${d}-${h}`, f = t.includes(g);
      return /* @__PURE__ */ M.jsxs(
        "div",
        {
          className: `sub-stage-item ${Object.entries(o(u)).filter(([m, v]) => v).map(([m]) => m).join(" ")}`,
          children: [
            /* @__PURE__ */ M.jsxs("div", { className: "d-flex align-center justify-space-between", children: [
              /* @__PURE__ */ M.jsx("span", { style: { color: l(u.status) }, children: u.title }),
              ((C = u.children) == null ? void 0 : C.length) && /* @__PURE__ */ M.jsx(
                "i",
                {
                  className: `mdi ${f ? "mdi-chevron-up" : "mdi-chevron-down"}`,
                  style: { cursor: "pointer", fontSize: "20px" },
                  onClick: () => n(g)
                }
              )
            ] }),
            f && ((p = u.children) == null ? void 0 : p.length) && /* @__PURE__ */ M.jsx("div", { className: "sub-stage-children", children: u.children.map((m, v) => /* @__PURE__ */ M.jsx(
              "div",
              {
                className: `sub-stage-child ${Object.entries(o(m)).filter(([b, y]) => y).map(([b]) => b).join(" ")}`,
                children: m.title
              },
              v
            )) })
          ]
        },
        g
      );
    }) })
  ] }, d)) });
}, jm = ({
  user: e = { name: "-" },
  menuItems: t = [],
  className: s = {},
  onClickMenuItem: n,
  children: r
}) => {
  const [o, i] = V(!1), [a, l] = V({ top: 0, left: 0 }), c = (u) => {
    const h = u.currentTarget.getBoundingClientRect();
    l({
      top: h.bottom + 5,
      left: h.left
    }), i(!o);
  }, d = (u) => {
    n == null || n(u), i(!1);
  };
  return /* @__PURE__ */ M.jsxs("div", { className: "s-avatar", children: [
    /* @__PURE__ */ M.jsx("div", { className: "s-user-name", onClick: c, children: /* @__PURE__ */ M.jsx("div", { className: `s-user-name__text ${s != null && s.fontWhite ? "fontWhite" : ""}`, children: e.name }) }),
    o && /* @__PURE__ */ M.jsx(
      "div",
      {
        className: "s-avatar-menu__list",
        style: {
          position: "fixed",
          top: `${a.top}px`,
          left: `${a.left}px`,
          zIndex: 1e3,
          backgroundColor: "white",
          border: "1px solid #e0e0e0",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          minWidth: "150px"
        },
        children: t.filter((u) => !u.visable).map((u, h) => /* @__PURE__ */ M.jsx(
          "div",
          {
            className: "s-avatar-menu__item",
            onClick: () => d(u.value),
            style: {
              padding: "12px 16px",
              cursor: "pointer",
              borderBottom: h < t.length - 1 ? "1px solid #f0f0f0" : "none"
            },
            onMouseEnter: (g) => {
              g.currentTarget.style.backgroundColor = "#f5f5f5";
            },
            onMouseLeave: (g) => {
              g.currentTarget.style.backgroundColor = "white";
            },
            children: u.title
          },
          h
        ))
      }
    ),
    r
  ] });
}, Um = ({
  src: e = "",
  srcUrl: t,
  lazySrc: s,
  lazySrcUrl: n,
  publicPath: r = "",
  alt: o,
  aspectRatio: i,
  cover: a = !1,
  eager: l = !1,
  gradient: c,
  options: d,
  sizes: u,
  srcset: h,
  transition: g = "fade-transition",
  width: f,
  className: C = {},
  bind: p = {},
  onError: m,
  onLoad: v,
  onLoadStart: b,
  children: y
}) => {
  const [F, S] = V(!1), [P, W] = V(!1), O = X(() => t || (e ? r ? `${r}/${e}` : `/assets/images/${e}` : ""), [e, t, r]), L = X(() => {
    if (n)
      return n;
    if (s)
      return r ? `${r}/${s}` : `/assets/images/${s}`;
  }, [s, n, r]), D = (R) => {
    S(!0), v == null || v(R);
  }, G = (R) => {
    W(!0), m == null || m(R);
  }, T = (R) => {
    b == null || b(R);
  }, I = {
    position: "relative",
    width: f ? typeof f == "number" ? `${f}px` : f : "100%",
    aspectRatio: i ? typeof i == "number" ? i.toString() : i : void 0,
    overflow: "hidden"
  }, x = {
    width: "100%",
    height: a ? "100%" : "auto",
    objectFit: a ? "cover" : "contain",
    backgroundImage: c ? `linear-gradient(${c})` : void 0,
    opacity: F ? 1 : 0,
    transition: g ? `opacity ${g}` : void 0
  }, E = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f0f0",
    display: F ? "none" : "block"
  }, A = ["s-img", ...Object.keys(C).filter((R) => C[R])].join(" ");
  return /* @__PURE__ */ M.jsxs("div", { className: A, style: I, ...p, children: [
    L && !F && /* @__PURE__ */ M.jsx(
      "img",
      {
        src: L,
        alt: o,
        style: E,
        onError: G
      }
    ),
    !P && O && /* @__PURE__ */ M.jsx(
      "img",
      {
        src: O,
        alt: o,
        style: x,
        sizes: u,
        srcSet: h,
        onLoad: D,
        onError: G,
        onLoadStart: T,
        loading: l ? "eager" : "lazy"
      }
    ),
    y
  ] });
};
var gs = class {
  constructor() {
    this.allSyncListeners = /* @__PURE__ */ new Map(), this.allAsyncListeners = /* @__PURE__ */ new Map(), this.globalSyncListeners = /* @__PURE__ */ new Set(), this.globalAsyncListeners = /* @__PURE__ */ new Set(), this.asyncFunctionsQueue = [], this.scheduled = !1, this.firedEvents = {};
  }
  setFrameworkOverrides(e) {
    this.frameworkOverrides = e;
  }
  getListeners(e, t, s) {
    const n = t ? this.allAsyncListeners : this.allSyncListeners;
    let r = n.get(e);
    return !r && s && (r = /* @__PURE__ */ new Set(), n.set(e, r)), r;
  }
  noRegisteredListenersExist() {
    return this.allSyncListeners.size === 0 && this.allAsyncListeners.size === 0 && this.globalSyncListeners.size === 0 && this.globalAsyncListeners.size === 0;
  }
  addEventListener(e, t, s = !1) {
    this.getListeners(e, s, !0).add(t);
  }
  removeEventListener(e, t, s = !1) {
    const n = this.getListeners(e, s, !1);
    n && (n.delete(t), n.size === 0 && (s ? this.allAsyncListeners : this.allSyncListeners).delete(e));
  }
  addGlobalListener(e, t = !1) {
    this.getGlobalListeners(t).add(e);
  }
  removeGlobalListener(e, t = !1) {
    this.getGlobalListeners(t).delete(e);
  }
  dispatchEvent(e) {
    const t = e;
    this.dispatchToListeners(t, !0), this.dispatchToListeners(t, !1), this.firedEvents[t.type] = !0;
  }
  dispatchEventOnce(e) {
    this.firedEvents[e.type] || this.dispatchEvent(e);
  }
  dispatchToListeners(e, t) {
    const s = e.type;
    if (t && "event" in e) {
      const a = e.event;
      a instanceof Event && (e.eventPath = a.composedPath());
    }
    const { frameworkOverrides: n } = this, r = (a) => {
      const l = n ? () => n.wrapIncoming(a) : a;
      t ? this.dispatchAsync(l) : l();
    }, o = this.getListeners(s, t, !1);
    if (((o == null ? void 0 : o.size) ?? 0) > 0) {
      const a = new Set(o);
      for (const l of a)
        o != null && o.has(l) && r(() => l(e));
    }
    const i = this.getGlobalListeners(t);
    if (i.size > 0) {
      const a = new Set(i);
      for (const l of a)
        r(() => l(s, e));
    }
  }
  getGlobalListeners(e) {
    return e ? this.globalAsyncListeners : this.globalSyncListeners;
  }
  // this gets called inside the grid's thread, for each event that it
  // wants to set async. the grid then batches the events into one setTimeout()
  // because setTimeout() is an expensive operation. ideally we would have
  // each event in it's own setTimeout(), but we batch for performance.
  dispatchAsync(e) {
    if (this.asyncFunctionsQueue.push(e), !this.scheduled) {
      const t = () => {
        window.setTimeout(this.flushAsyncQueue.bind(this), 0);
      };
      this.frameworkOverrides ? this.frameworkOverrides.wrapIncoming(t) : t(), this.scheduled = !0;
    }
  }
  // this happens in the next VM turn only, and empties the queue of events
  flushAsyncQueue() {
    this.scheduled = !1;
    const e = this.asyncFunctionsQueue.slice();
    this.asyncFunctionsQueue = [], e.forEach((t) => t());
  }
};
function il(e, t) {
  return t;
}
function Go(e) {
  return (e == null ? void 0 : e.getLocaleTextFunc()) ?? il;
}
function zt(e, t, s) {
  s == null || typeof s == "string" && s == "" ? Bo(e, t) : bt(e, t, s);
}
function bt(e, t, s) {
  e.setAttribute(Wo(t), s.toString());
}
function Bo(e, t) {
  e.removeAttribute(Wo(t));
}
function Wo(e) {
  return `aria-${e}`;
}
function Gr(e, t) {
  t ? e.setAttribute("role", t) : e.removeAttribute("role");
}
function al(e) {
  let t;
  return e === "asc" ? t = "ascending" : e === "desc" ? t = "descending" : e === "mixed" ? t = "other" : t = "none", t;
}
function ll(e) {
  return e.getAttribute("aria-label");
}
function No(e, t) {
  zt(e, "label", t);
}
function Br(e, t) {
  zt(e, "labelledby", t);
}
function Vo(e, t) {
  zt(e, "live", t);
}
function cl(e, t) {
  zt(e, "atomic", t);
}
function dl(e, t) {
  zt(e, "relevant", t);
}
function _o(e, t) {
  zt(e, "hidden", t);
}
function ul(e, t) {
  bt(e, "expanded", t);
}
function hl(e, t) {
  bt(e, "rowcount", t);
}
function gl(e, t) {
  bt(e, "rowindex", t);
}
function fl(e, t) {
  bt(e, "colcount", t);
}
function zo(e, t) {
  bt(e, "colindex", t);
}
function pl(e, t) {
  bt(e, "colspan", t);
}
function Cl(e, t) {
  bt(e, "sort", t);
}
function ml(e) {
  Bo(e, "sort");
}
function wl(e, t) {
  return t === void 0 ? e("ariaIndeterminate", "indeterminate") : t === !0 ? e("ariaChecked", "checked") : e("ariaUnchecked", "unchecked");
}
var vn, bn, yn, Sn, zn, $n, Rn;
function ar() {
  return vn === void 0 && (vn = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), vn;
}
function $o() {
  return bn === void 0 && (bn = /(firefox)/i.test(navigator.userAgent)), bn;
}
function jo() {
  return yn === void 0 && (yn = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)), yn;
}
function rs() {
  return Sn === void 0 && (Sn = /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1), Sn;
}
function Wr(e) {
  if (!e)
    return null;
  const t = e.tabIndex, s = e.getAttribute("tabIndex");
  return t === -1 && (s === null || s === "" && !$o()) ? null : t.toString();
}
function vl() {
  if (Rn !== void 0)
    return Rn;
  if (!document.body)
    return -1;
  let e = 1e6;
  const t = $o() ? 6e6 : 1e9, s = document.createElement("div");
  for (document.body.appendChild(s); ; ) {
    const n = e * 2;
    if (s.style.height = n + "px", n > t || s.clientHeight !== n)
      break;
    e = n;
  }
  return document.body.removeChild(s), Rn = e, e;
}
function bl() {
  return $n == null && Uo(), $n;
}
function Uo() {
  const e = document.body, t = document.createElement("div");
  t.style.width = t.style.height = "100px", t.style.opacity = "0", t.style.overflow = "scroll", t.style.msOverflowStyle = "scrollbar", t.style.position = "absolute", e.appendChild(t);
  let s = t.offsetWidth - t.clientWidth;
  s === 0 && t.clientWidth === 0 && (s = null), t.parentNode && t.parentNode.removeChild(t), s != null && ($n = s, zn = s === 0);
}
function Ko() {
  return zn == null && Uo(), zn;
}
var yl = "[tabindex], input, select, button, textarea, [href]", Yo = "[disabled], .ag-disabled:not(.ag-button), .ag-disabled *";
function lr(e) {
  const t = Element.prototype.matches || Element.prototype.msMatchesSelector, n = t.call(e, "input, select, button, textarea"), r = t.call(e, Yo), o = $t(e);
  return n && !r && o;
}
function Me(e, t, s = {}) {
  const { skipAriaHidden: n } = s;
  e.classList.toggle("ag-hidden", !t), n || _o(e, !t);
}
function Sl(e, t, s = {}) {
  const { skipAriaHidden: n } = s;
  e.classList.toggle("ag-invisible", !t), n || _o(e, !t);
}
function Zo(e, t) {
  const s = "disabled", n = t ? (o) => o.setAttribute(s, "") : (o) => o.removeAttribute(s);
  n(e);
  const r = e.querySelectorAll("input") ?? [];
  for (const o of r)
    n(o);
}
function Ht(e, t, s) {
  let n = 0;
  for (; e; ) {
    if (e.classList.contains(t))
      return !0;
    if (e = e.parentElement, typeof s == "number") {
      if (++n > s)
        break;
    } else if (e === s)
      break;
  }
  return !1;
}
function en(e) {
  const {
    height: t,
    width: s,
    borderTopWidth: n,
    borderRightWidth: r,
    borderBottomWidth: o,
    borderLeftWidth: i,
    paddingTop: a,
    paddingRight: l,
    paddingBottom: c,
    paddingLeft: d,
    marginTop: u,
    marginRight: h,
    marginBottom: g,
    marginLeft: f,
    boxSizing: C
  } = window.getComputedStyle(e);
  return {
    height: parseFloat(t || "0"),
    width: parseFloat(s || "0"),
    borderTopWidth: parseFloat(n || "0"),
    borderRightWidth: parseFloat(r || "0"),
    borderBottomWidth: parseFloat(o || "0"),
    borderLeftWidth: parseFloat(i || "0"),
    paddingTop: parseFloat(a || "0"),
    paddingRight: parseFloat(l || "0"),
    paddingBottom: parseFloat(c || "0"),
    paddingLeft: parseFloat(d || "0"),
    marginTop: parseFloat(u || "0"),
    marginRight: parseFloat(h || "0"),
    marginBottom: parseFloat(g || "0"),
    marginLeft: parseFloat(f || "0"),
    boxSizing: C
  };
}
function qo(e) {
  const t = en(e);
  return t.boxSizing === "border-box" ? t.height - t.paddingTop - t.paddingBottom : t.height;
}
function Gs(e) {
  const t = en(e);
  return t.boxSizing === "border-box" ? t.width - t.paddingLeft - t.paddingRight : t.width;
}
function Rl(e) {
  const t = e.getBoundingClientRect(), { borderTopWidth: s, borderLeftWidth: n, borderRightWidth: r, borderBottomWidth: o } = en(e);
  return {
    top: t.top + (s || 0),
    left: t.left + (n || 0),
    right: t.right + (r || 0),
    bottom: t.bottom + (o || 0)
  };
}
function Bs(e, t) {
  let s = e.scrollLeft;
  return t && (s = Math.abs(s)), s;
}
function Ws(e, t, s) {
  s && (t *= -1), e.scrollLeft = t;
}
function fs(e) {
  for (; e && e.firstChild; )
    e.removeChild(e.firstChild);
}
function jn(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function Xo(e) {
  return !!e.offsetParent;
}
function $t(e) {
  const t = e;
  return t.checkVisibility ? t.checkVisibility({ checkVisibilityCSS: !0 }) : !(!Xo(e) || window.getComputedStyle(e).visibility !== "visible");
}
function cr(e) {
  const t = document.createElement("div");
  return t.innerHTML = (e || "").trim(), t.firstChild;
}
function xl(e) {
  return e.clientWidth < e.scrollWidth;
}
function Fl(e) {
  return e.clientHeight < e.scrollHeight;
}
function Qo(e, t) {
  t === "flex" ? (e.style.removeProperty("width"), e.style.removeProperty("minWidth"), e.style.removeProperty("maxWidth"), e.style.flex = "1 1 auto") : pt(e, t);
}
function pt(e, t) {
  t = Jo(t), e.style.width = t, e.style.maxWidth = t, e.style.minWidth = t;
}
function xn(e, t) {
  t = Jo(t), e.style.height = t, e.style.maxHeight = t, e.style.minHeight = t;
}
function Jo(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function ei(e) {
  return e instanceof Node || e instanceof HTMLElement;
}
function Ot(e, t, s) {
  s == null || s === "" ? e.removeAttribute(t) : e.setAttribute(t, s.toString());
}
function jt(e, t, s) {
  const r = gi(e).ResizeObserver, o = r ? new r(s) : null;
  return o == null || o.observe(t), () => o == null ? void 0 : o.disconnect();
}
function yt(e, t) {
  const s = gi(e);
  s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.webkitRequestAnimationFrame ? s.webkitRequestAnimationFrame(t) : s.setTimeout(t, 0);
}
var ti = "data-ref", Fn;
function Nr() {
  return Fn ?? (Fn = document.createTextNode(" ")), Fn.cloneNode();
}
function Ct(e) {
  const { attrs: t, children: s, cls: n, ref: r, role: o, tag: i } = e, a = document.createElement(i);
  if (n && (a.className = n), r && a.setAttribute(ti, r), o && a.setAttribute("role", o), t)
    for (const l of Object.keys(t))
      a.setAttribute(l, t[l]);
  if (s)
    if (typeof s == "string")
      a.textContent = s;
    else {
      let l = !0;
      for (const c of s)
        c && (typeof c == "string" ? (a.appendChild(document.createTextNode(c)), l = !1) : (l && (a.appendChild(Nr()), l = !1), a.append(Ct(c)), a.appendChild(Nr())));
    }
  return a;
}
var Vr = {};
function si(e, t) {
  Vr[t] || (e(), Vr[t] = !0);
}
function Ns(e, t, ...s) {
  e.get("debug") && console.log("AG Grid: " + t, ...s);
}
function Dl(e, ...t) {
  si(() => console.warn("AG Grid: " + e, ...t), e + (t == null ? void 0 : t.join("")));
}
function os(e, ...t) {
  si(() => console.error("AG Grid: " + e, ...t), e + (t == null ? void 0 : t.join("")));
}
var Pl = {
  pending: !1,
  funcs: []
}, El = {
  pending: !1,
  funcs: []
};
function Un(e, t = "setTimeout", s) {
  const n = t === "raf" ? El : Pl;
  if (n.funcs.push(e), n.pending)
    return;
  n.pending = !0;
  const r = () => {
    const o = n.funcs.slice();
    n.funcs.length = 0, n.pending = !1, o.forEach((i) => i());
  };
  t === "raf" ? yt(s, r) : window.setTimeout(r, 0);
}
function ts(e, t, s) {
  let n;
  return function(...r) {
    const o = this;
    window.clearTimeout(n), n = window.setTimeout(function() {
      e.isAlive() && t.apply(o, r);
    }, s);
  };
}
function _r(e, t) {
  let s = 0;
  return function(...n) {
    const r = this, o = Date.now();
    o - s < t || (s = o, e.apply(r, n));
  };
}
function Tl(e, t, s = 100, n) {
  const r = Date.now();
  let o = null, i = !1;
  const a = () => {
    const l = Date.now() - r > s;
    (e() || l) && (t(), i = !0, o != null && (window.clearInterval(o), o = null));
  };
  a(), i || (o = window.setInterval(a, 10));
}
function Dt(e) {
  return e == null || e === "" ? null : e;
}
function te(e) {
  return e != null && e !== "";
}
function Ie(e) {
  return !te(e);
}
function Kn(e) {
  return e != null && typeof e.toString == "function" ? e.toString() : null;
}
function Ml(e, t, s = !1) {
  const n = e == null, r = t == null;
  if (e && e.toNumber && (e = e.toNumber()), t && t.toNumber && (t = t.toNumber()), n && r)
    return 0;
  if (n)
    return -1;
  if (r)
    return 1;
  function o(i, a) {
    return i > a ? 1 : i < a ? -1 : 0;
  }
  if (typeof e != "string" || !s)
    return o(e, t);
  try {
    return e.localeCompare(t);
  } catch {
    return o(e, t);
  }
}
var ni = "https://www.ag-grid.com", be = "33.3.2", zr = 2e3, $r = 100, ri = "_version_", oi = `${ni}/javascript-data-grid`;
function Il(e) {
  oi = e;
}
function ii(e, t, s) {
  return [Ol(e, t, s)];
}
function dr(e, t, s, n) {
  e(`error #${t}`, ...ii(t, s, n));
}
function Ll(e) {
  if (!e)
    return String(e);
  const t = {};
  for (const s of Object.keys(e))
    typeof e[s] != "object" && typeof e[s] != "function" && (t[s] = e[s]);
  return JSON.stringify(t);
}
function Al(e) {
  let t = e;
  return e instanceof Error ? t = e.toString() : typeof e == "object" && (t = Ll(e)), t;
}
function Yn(e, t) {
  return `${e}?${t.toString()}`;
}
function kl(e, t, s) {
  const n = Array.from(t.entries()).sort((o, i) => i[1].length - o[1].length);
  let r = Yn(e, t);
  for (const [o, i] of n) {
    if (o === ri)
      continue;
    const a = r.length - s;
    if (a <= 0)
      break;
    const l = "...", c = a + l.length, d = i.length - c > $r ? i.slice(0, i.length - c) + l : i.slice(0, $r) + l;
    t.set(o, d), r = Yn(e, t);
  }
  return r;
}
function Hl(e, t) {
  const s = new URLSearchParams();
  if (s.append(ri, be), t)
    for (const o of Object.keys(t))
      s.append(o, Al(t[o]));
  const n = `${oi}/errors/${e}`, r = Yn(n, s);
  return r.length <= zr ? r : kl(n, s, zr);
}
var Ol = (e, t, s) => {
  const n = Hl(e, t);
  return `${s ? s + ` 
` : ""}Visit ${n}${s ? "" : ` 
  Alternatively register the ValidationModule to see the full message in the console.`}`;
};
function oe(...e) {
  dr(Dl, e[0], e[1]);
}
function je(...e) {
  dr(os, e[0], e[1]);
}
function ss(e, t, s) {
  dr(os, e, t, s);
}
function Gl(e, t) {
  const s = t[0];
  return `error #${s} ` + ii(s, t[1], e).join(" ");
}
function ai(...e) {
  return Gl(void 0, e);
}
function li(e, t) {
  return e.get("rowModelType") === t;
}
function tn(e, t) {
  return li(e, "clientSide");
}
function ur(e, t) {
  return li(e, "serverSide");
}
function We(e, t) {
  return e.get("domLayout") === t;
}
function ci(e) {
  return Yl(e) !== void 0;
}
function di(e) {
  return typeof e.get("getRowHeight") == "function";
}
function Bl(e, t) {
  return t ? !e.get("enableStrictPivotColumnOrder") : e.get("maintainColumnOrder");
}
function Wl(e, t, s = !1, n) {
  const { gos: r, environment: o } = e;
  if (n == null && (n = o.getDefaultRowHeight()), di(r)) {
    if (s)
      return { height: n, estimated: !0 };
    const l = {
      node: t,
      data: t.data
    }, c = r.getCallback("getRowHeight")(l);
    if (Zn(c))
      return c === 0 && oe(23), { height: Math.max(1, c), estimated: !1 };
  }
  if (t.detail && r.get("masterDetail"))
    return Nl(r);
  const i = r.get("rowHeight");
  return { height: i && Zn(i) ? i : n, estimated: !1 };
}
function Nl(e) {
  if (e.get("detailRowAutoHeight"))
    return { height: 1, estimated: !1 };
  const t = e.get("detailRowHeight");
  return Zn(t) ? { height: t, estimated: !1 } : { height: 300, estimated: !1 };
}
function ui(e) {
  const { environment: t, gos: s } = e, n = s.get("rowHeight");
  if (!n || Ie(n))
    return t.getDefaultRowHeight();
  const r = t.refreshRowHeightVariable();
  return r !== -1 ? r : (oe(24), t.getDefaultRowHeight());
}
function Zn(e) {
  return !isNaN(e) && typeof e == "number" && isFinite(e);
}
function hi(e, t, s) {
  const n = t[e.getDomDataKey()];
  return n ? n[s] : void 0;
}
function Wt(e, t, s, n) {
  const r = e.getDomDataKey();
  let o = t[r];
  Ie(o) && (o = {}, t[r] = o), o[s] = n;
}
function rt(e) {
  const { gos: t, eGridDiv: s } = e;
  let n = null;
  const r = t.get("getDocument");
  return r && te(r) ? n = r() : s && (n = s.ownerDocument), n && te(n) ? n : document;
}
function gi(e) {
  return rt(e).defaultView || window;
}
function as(e) {
  return e.eGridDiv.getRootNode();
}
function Oe(e) {
  return as(e).activeElement;
}
function hr(e) {
  let t = null, s = null;
  try {
    t = rt(e).fullscreenElement;
  } catch {
  } finally {
    t || (t = as(e));
    const n = t.querySelector("body");
    n ? s = n : t instanceof ShadowRoot ? s = t : t instanceof Document ? s = t == null ? void 0 : t.documentElement : s = t;
  }
  return s;
}
function Vl(e) {
  const t = hr(e);
  return (t == null ? void 0 : t.clientWidth) ?? (window.innerHeight || -1);
}
function _l(e) {
  const t = hr(e);
  return (t == null ? void 0 : t.clientHeight) ?? (window.innerHeight || -1);
}
function zl(e, t, s) {
  const r = e.getBoundingClientRect().height, o = Vl(s) - 2, i = _l(s) - 2;
  if (!e.offsetParent)
    return;
  const l = Rl(e.offsetParent), { clientY: c, clientX: d } = t;
  let u = c - l.top - r / 2, h = d - l.left - 10;
  const g = rt(s), f = g.defaultView || window, C = f.pageYOffset || g.documentElement.scrollTop, p = f.pageXOffset || g.documentElement.scrollLeft;
  o > 0 && h + e.clientWidth > o + p && (h = o + p - e.clientWidth), h < 0 && (h = 0), i > 0 && u + e.clientHeight > i + C && (u = i + C - e.clientHeight), u < 0 && (u = 0), e.style.left = `${h}px`, e.style.top = `${u}px`;
}
function $l(e) {
  const t = Oe(e);
  return t === null || t === rt(e).body;
}
function gr(e) {
  return e.get("ensureDomOrder") ? !1 : e.get("animateRows");
}
function fi(e) {
  return !(e.get("paginateChildRows") || e.get("groupHideOpenParents") || We(e, "print"));
}
function at(e) {
  const t = e.get("autoGroupColumnDef");
  return !(t != null && t.comparator) && !e.get("treeData");
}
function pi(e, t) {
  return t ? !1 : e.get("groupDisplayType") === "groupRows";
}
function jl(e, t, s) {
  return !!t.group && !t.footer && pi(e, s);
}
function Ul(e) {
  return (e == null ? void 0 : e.checkboxes) ?? !0;
}
function Kl(e) {
  if (typeof e == "object")
    return e.checkboxLocation ?? "selectionColumn";
}
function ls(e) {
  const t = e.get("cellSelection");
  return t !== void 0 ? !!t : e.get("enableRangeSelection");
}
function Yl(e) {
  const t = "beanName" in e && e.beanName === "gos" ? e.get("rowSelection") : e.rowSelection;
  if (typeof t == "string")
    switch (t) {
      case "multiple":
        return "multiRow";
      case "single":
        return "singleRow";
      default:
        return;
    }
  switch (t == null ? void 0 : t.mode) {
    case "multiRow":
    case "singleRow":
      return t.mode;
    default:
      return;
  }
}
function Zl(e, t = !0) {
  const s = e.get("rowSelection");
  return typeof s != "object" ? t ? "all" : void 0 : s.mode === "multiRow" ? s.selectAll : "all";
}
function Vs(e) {
  return e.get("columnMenu") === "legacy";
}
function ql(e) {
  return !e || e.length < 2 ? e : "on" + e[0].toUpperCase() + e.substring(1);
}
function Xl(e, t, s) {
  typeof e != "object" && (e = {});
  const n = { ...e };
  return s.forEach((r) => {
    const o = t[r];
    typeof o < "u" && (n[r] = o);
  }), n;
}
function Ql(e, t) {
  if (!e)
    return;
  const s = {};
  let n = !1;
  if (Object.keys(e).forEach((i) => {
    s[i] = e[i], n = !0;
  }), !n)
    return;
  const r = {
    type: "gridOptionsChanged",
    options: s
  };
  t.dispatchEvent(r);
  const o = {
    type: "componentStateChanged",
    ...s
  };
  t.dispatchEvent(o);
}
function ge(e, t) {
  return e.addGridCommonParams(t);
}
var Ci = "__ag_Grid_Stop_Propagation", Jl = ["touchstart", "touchend", "touchmove", "touchcancel", "scroll"], ec = ["wheel"], Dn = {};
function _s(e) {
  e[Ci] = !0;
}
function mt(e) {
  return e[Ci] === !0;
}
var mi = /* @__PURE__ */ (() => {
  const e = {
    select: "input",
    change: "input",
    submit: "form",
    reset: "form",
    error: "img",
    load: "img",
    abort: "img"
  };
  return (s) => {
    if (typeof Dn[s] == "boolean")
      return Dn[s];
    const n = document.createElement(e[s] || "div");
    return s = "on" + s, Dn[s] = s in n;
  };
})();
function wi(e, t, s) {
  let n = t;
  for (; n; ) {
    const r = hi(e, n, s);
    if (r)
      return r;
    n = n.parentElement;
  }
  return null;
}
function tc(e, t, s, n) {
  const r = vi(s);
  let o;
  r != null && (o = { passive: r }), e && e.addEventListener && e.addEventListener(t, s, n, o);
}
var vi = (e) => {
  const t = Jl.includes(e), s = ec.includes(e);
  if (t)
    return !0;
  if (s)
    return !1;
}, K = class {
  constructor() {
    this.destroyFunctions = [], this.destroyed = !1, this.__v_skip = !0, this.propertyListenerId = 0, this.lastChangeSetIdLookup = {}, this.isAlive = () => !this.destroyed;
  }
  preWireBeans(e) {
    this.beans = e, this.stubContext = e.context, this.eventSvc = e.eventSvc, this.gos = e.gos;
  }
  // this was a test constructor niall built, when active, it prints after 5 seconds all beans/components that are
  // not destroyed. to use, create a new grid, then api.destroy() before 5 seconds. then anything that gets printed
  // points to a bean or component that was not properly disposed of.
  // constructor() {
  //     setTimeout(()=> {
  //         if (this.isAlive()) {
  //             let prototype: any = Object.getPrototypeOf(this);
  //             const constructor: any = prototype.constructor;
  //             const constructorString = constructor.toString();
  //             const beanName = constructorString.substring(9, constructorString.indexOf("("));
  //             console.log('is alive ' + beanName);
  //         }
  //     }, 5000);
  // }
  destroy() {
    const { destroyFunctions: e } = this;
    for (let t = 0; t < e.length; t++)
      e[t]();
    e.length = 0, this.destroyed = !0, this.dispatchLocalEvent({ type: "destroyed" });
  }
  // The typing of AgEventListener<any, any, any> is not ideal, but it's the best we can do at the moment to enable
  // eventSvc to have the best typing at the expense of BeanStub local events
  /** Add a local event listener against this BeanStub */
  addEventListener(e, t, s) {
    this.localEventService || (this.localEventService = new gs()), this.localEventService.addEventListener(e, t, s);
  }
  /** Remove a local event listener from this BeanStub */
  removeEventListener(e, t, s) {
    var n;
    (n = this.localEventService) == null || n.removeEventListener(e, t, s);
  }
  dispatchLocalEvent(e) {
    var t;
    (t = this.localEventService) == null || t.dispatchEvent(e);
  }
  addManagedElementListeners(e, t) {
    return this._setupListeners(e, t);
  }
  addManagedEventListeners(e) {
    return this._setupListeners(this.eventSvc, e);
  }
  addManagedListeners(e, t) {
    return this._setupListeners(e, t);
  }
  _setupListeners(e, t) {
    const s = [];
    for (const n of Object.keys(t)) {
      const r = t[n];
      r && s.push(this._setupListener(e, n, r));
    }
    return s;
  }
  _setupListener(e, t, s) {
    if (this.destroyed)
      return () => null;
    let n;
    return sc(e) ? (e.__addEventListener(t, s), n = () => (e.__removeEventListener(t, s), null)) : (e instanceof HTMLElement ? tc(this.beans.frameworkOverrides, e, t, s) : e.addEventListener(t, s), n = () => (e.removeEventListener(t, s), null)), this.destroyFunctions.push(n), () => (n(), this.destroyFunctions = this.destroyFunctions.filter((r) => r !== n), null);
  }
  /**
   * Setup a managed property listener for the given GridOption property.
   * However, stores the destroy function in the beanStub so that if this bean
   * is a component the destroy function will be called when the component is destroyed
   * as opposed to being cleaned up only when the GridOptionsService is destroyed.
   */
  setupGridOptionListener(e, t) {
    const { gos: s } = this;
    s.addPropertyEventListener(e, t);
    const n = () => (s.removePropertyEventListener(e, t), null);
    return this.destroyFunctions.push(n), () => (n(), this.destroyFunctions = this.destroyFunctions.filter((r) => r !== n), null);
  }
  /**
   * Setup a managed property listener for the given GridOption property.
   * @param event GridOption property to listen to changes for.
   * @param listener Listener to run when property value changes
   */
  addManagedPropertyListener(e, t) {
    return this.destroyed ? () => null : this.setupGridOptionListener(e, t);
  }
  /**
   * Setup managed property listeners for the given set of GridOption properties.
   * The listener will be run if any of the property changes but will only run once if
   * multiple of the properties change within the same framework lifecycle event.
   * Works on the basis that GridOptionsService updates all properties *before* any property change events are fired.
   * @param events Array of GridOption properties to listen for changes too.
   * @param listener Shared listener to run if any of the properties change
   */
  addManagedPropertyListeners(e, t) {
    if (this.destroyed)
      return;
    const s = e.join("-") + this.propertyListenerId++, n = (r) => {
      if (r.changeSet) {
        if (r.changeSet && r.changeSet.id === this.lastChangeSetIdLookup[s])
          return;
        this.lastChangeSetIdLookup[s] = r.changeSet.id;
      }
      const o = {
        type: "gridPropertyChanged",
        changeSet: r.changeSet,
        source: r.source
      };
      t(o);
    };
    e.forEach((r) => this.setupGridOptionListener(r, n));
  }
  getLocaleTextFunc() {
    return Go(this.beans.localeSvc);
  }
  addDestroyFunc(e) {
    this.isAlive() ? this.destroyFunctions.push(e) : e();
  }
  /** doesn't throw an error if `bean` is undefined */
  createOptionalManagedBean(e, t) {
    return e ? this.createManagedBean(e, t) : void 0;
  }
  createManagedBean(e, t) {
    const s = this.createBean(e, t);
    return this.addDestroyFunc(this.destroyBean.bind(this, e, t)), s;
  }
  createBean(e, t, s) {
    return (t || this.stubContext).createBean(e, s);
  }
  /**
   * Destroys a bean and returns undefined to support destruction and clean up in a single line.
   * this.dateComp = this.context.destroyBean(this.dateComp);
   */
  destroyBean(e, t) {
    return (t || this.stubContext).destroyBean(e);
  }
  /**
   * Destroys an array of beans and returns an empty array to support destruction and clean up in a single line.
   * this.dateComps = this.context.destroyBeans(this.dateComps);
   */
  destroyBeans(e, t) {
    return (t || this.stubContext).destroyBeans(e);
  }
};
function sc(e) {
  return e.__addEventListener !== void 0;
}
var nc = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function rc(e, t) {
  if (e != null) {
    if (Array.isArray(e)) {
      for (let s = 0; s < e.length; s++)
        t(s.toString(), e[s]);
      return;
    }
    for (const s of Object.keys(e))
      t(s, e[s]);
  }
}
function Ue(e, t, s = !0, n = !1) {
  te(t) && rc(t, (r, o) => {
    if (nc.has(r))
      return;
    let i = e[r];
    i !== o && (n && i == null && o != null && typeof o == "object" && o.constructor === Object && (i = {}, e[r] = i), jr(o) && jr(i) && !Array.isArray(i) ? Ue(i, o, s, n) : (s || o !== void 0) && (e[r] = o));
  });
}
function Es(e, t, s) {
  if (!t || !e)
    return;
  if (!s)
    return e[t];
  const n = t.split(".");
  let r = e;
  for (let o = 0; o < n.length; o++) {
    if (r == null)
      return;
    r = r[n[o]];
  }
  return r;
}
function jr(e) {
  return typeof e == "object" && e !== null;
}
var oc = /[&<>"']/g, ic = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function sn(e) {
  return (e == null ? void 0 : e.toString().toString()) ?? null;
}
function Ts(e) {
  var t;
  return ((t = sn(e)) == null ? void 0 : t.replace(oc, (s) => ic[s])) ?? null;
}
var ac = {
  resizable: !0,
  sortable: !0
}, lc = 0;
function bi() {
  return lc++;
}
function wt(e) {
  return e instanceof fr;
}
var fr = class extends K {
  constructor(e, t, s, n) {
    super(), this.colDef = e, this.userProvidedColDef = t, this.colId = s, this.primary = n, this.isColumn = !0, this.instanceId = bi(), this.autoHeaderHeight = null, this.moving = !1, this.menuVisible = !1, this.lastLeftPinned = !1, this.firstRightPinned = !1, this.filterActive = !1, this.colEventSvc = new gs(), this.tooltipEnabled = !1, this.rowGroupActive = !1, this.pivotActive = !1, this.aggregationActive = !1, this.flex = null, this.colIdSanitised = Ts(s);
  }
  destroy() {
    var e;
    super.destroy(), (e = this.beans.rowSpanSvc) == null || e.deregister(this);
  }
  getInstanceId() {
    return this.instanceId;
  }
  setState() {
    const {
      colDef: e,
      beans: { sortSvc: t, pinnedCols: s, colFlex: n }
    } = this;
    t == null || t.initCol(this);
    const r = e.hide;
    r !== void 0 ? this.visible = !r : this.visible = !e.initialHide, s == null || s.initCol(this), n == null || n.initCol(this);
  }
  // gets called when user provides an alternative colDef, eg
  setColDef(e, t, s) {
    var r;
    const n = e.spanRows !== this.colDef.spanRows;
    this.colDef = e, this.userProvidedColDef = t, this.initMinAndMaxWidths(), this.initDotNotation(), this.initTooltip(), n && ((r = this.beans.rowSpanSvc) == null || r.deregister(this), this.initRowSpan()), this.dispatchColEvent("colDefChanged", s);
  }
  getUserProvidedColDef() {
    return this.userProvidedColDef;
  }
  getParent() {
    return this.parent;
  }
  getOriginalParent() {
    return this.originalParent;
  }
  // this is done after constructor as it uses gridOptionsService
  postConstruct() {
    this.setState(), this.initMinAndMaxWidths(), this.resetActualWidth("gridInitializing"), this.initDotNotation(), this.initTooltip(), this.initRowSpan();
  }
  initDotNotation() {
    const {
      gos: e,
      colDef: { field: t, tooltipField: s }
    } = this, n = e.get("suppressFieldDotNotation");
    this.fieldContainsDots = te(t) && t.indexOf(".") >= 0 && !n, this.tooltipFieldContainsDots = te(s) && s.indexOf(".") >= 0 && !n;
  }
  initMinAndMaxWidths() {
    const e = this.colDef;
    this.minWidth = e.minWidth ?? this.beans.environment.getDefaultColumnMinWidth(), this.maxWidth = e.maxWidth ?? Number.MAX_SAFE_INTEGER;
  }
  initTooltip() {
    var e;
    (e = this.beans.tooltipSvc) == null || e.initCol(this);
  }
  initRowSpan() {
    var e;
    this.colDef.spanRows && ((e = this.beans.rowSpanSvc) == null || e.register(this));
  }
  resetActualWidth(e) {
    const t = this.calculateColInitialWidth(this.colDef);
    this.setActualWidth(t, e, !0);
  }
  calculateColInitialWidth(e) {
    let t;
    const s = e.width, n = e.initialWidth;
    return s != null ? t = s : n != null ? t = n : t = 200, Math.max(Math.min(t, this.maxWidth), this.minWidth);
  }
  isEmptyGroup() {
    return !1;
  }
  isRowGroupDisplayed(e) {
    var t;
    return ((t = this.beans.showRowGroupCols) == null ? void 0 : t.isRowGroupDisplayed(this, e)) ?? !1;
  }
  isPrimary() {
    return this.primary;
  }
  isFilterAllowed() {
    return !!this.colDef.filter;
  }
  isFieldContainsDots() {
    return this.fieldContainsDots;
  }
  isTooltipEnabled() {
    return this.tooltipEnabled;
  }
  isTooltipFieldContainsDots() {
    return this.tooltipFieldContainsDots;
  }
  getHighlighted() {
    return this.highlighted;
  }
  __addEventListener(e, t) {
    this.colEventSvc.addEventListener(e, t);
  }
  __removeEventListener(e, t) {
    this.colEventSvc.removeEventListener(e, t);
  }
  /**
   * PUBLIC USE ONLY: for internal use within AG Grid use the `__addEventListener` and `__removeEventListener` methods.
   */
  addEventListener(e, t) {
    var n, r, o;
    this.frameworkEventListenerService = (r = (n = this.beans.frameworkOverrides).createLocalEventListenerWrapper) == null ? void 0 : r.call(
      n,
      this.frameworkEventListenerService,
      this.colEventSvc
    );
    const s = ((o = this.frameworkEventListenerService) == null ? void 0 : o.wrap(e, t)) ?? t;
    this.colEventSvc.addEventListener(e, s);
  }
  /**
   * PUBLIC USE ONLY: for internal use within AG Grid use the `__addEventListener` and `__removeEventListener` methods.
   */
  removeEventListener(e, t) {
    var n;
    const s = ((n = this.frameworkEventListenerService) == null ? void 0 : n.unwrap(e, t)) ?? t;
    this.colEventSvc.removeEventListener(e, s);
  }
  createColumnFunctionCallbackParams(e) {
    return ge(this.gos, {
      node: e,
      data: e.data,
      column: this,
      colDef: this.colDef
    });
  }
  isSuppressNavigable(e) {
    var t;
    return ((t = this.beans.cellNavigation) == null ? void 0 : t.isSuppressNavigable(this, e)) ?? !1;
  }
  isCellEditable(e) {
    var t;
    return ((t = this.beans.editSvc) == null ? void 0 : t.isCellEditable(this, e)) ?? !1;
  }
  isSuppressFillHandle() {
    return !!this.colDef.suppressFillHandle;
  }
  isAutoHeight() {
    return !!this.colDef.autoHeight;
  }
  isAutoHeaderHeight() {
    return !!this.colDef.autoHeaderHeight;
  }
  isRowDrag(e) {
    return this.isColumnFunc(e, this.colDef.rowDrag);
  }
  isDndSource(e) {
    return this.isColumnFunc(e, this.colDef.dndSource);
  }
  isCellCheckboxSelection(e) {
    var t;
    return ((t = this.beans.selectionSvc) == null ? void 0 : t.isCellCheckboxSelection(this, e)) ?? !1;
  }
  isSuppressPaste(e) {
    var t;
    return this.isColumnFunc(e, ((t = this.colDef) == null ? void 0 : t.suppressPaste) ?? null);
  }
  isResizable() {
    return !!this.getColDefValue("resizable");
  }
  /** Get value from ColDef or default if it exists. */
  getColDefValue(e) {
    return this.colDef[e] ?? ac[e];
  }
  isColumnFunc(e, t) {
    if (typeof t == "boolean")
      return t;
    if (typeof t == "function") {
      const s = this.createColumnFunctionCallbackParams(e);
      return t(s);
    }
    return !1;
  }
  createColumnEvent(e, t) {
    return ge(this.gos, {
      type: e,
      column: this,
      columns: [this],
      source: t
    });
  }
  isMoving() {
    return this.moving;
  }
  getSort() {
    return this.sort;
  }
  isSortable() {
    return !!this.getColDefValue("sortable");
  }
  /** @deprecated v32 use col.getSort() === 'asc */
  isSortAscending() {
    return this.sort === "asc";
  }
  /** @deprecated v32 use col.getSort() === 'desc */
  isSortDescending() {
    return this.sort === "desc";
  }
  /** @deprecated v32 use col.getSort() === undefined */
  isSortNone() {
    return Ie(this.sort);
  }
  /** @deprecated v32 use col.getSort() !== undefined */
  isSorting() {
    return te(this.sort);
  }
  getSortIndex() {
    return this.sortIndex;
  }
  isMenuVisible() {
    return this.menuVisible;
  }
  getAggFunc() {
    return this.aggFunc;
  }
  getLeft() {
    return this.left;
  }
  getOldLeft() {
    return this.oldLeft;
  }
  getRight() {
    return this.left + this.actualWidth;
  }
  setLeft(e, t) {
    this.oldLeft = this.left, this.left !== e && (this.left = e, this.dispatchColEvent("leftChanged", t));
  }
  isFilterActive() {
    return this.filterActive;
  }
  /** @deprecated v33 Use `api.isColumnHovered(column)` instead. */
  isHovered() {
    var e;
    return oe(261), !!((e = this.beans.colHover) != null && e.isHovered(this));
  }
  setFirstRightPinned(e, t) {
    this.firstRightPinned !== e && (this.firstRightPinned = e, this.dispatchColEvent("firstRightPinnedChanged", t));
  }
  setLastLeftPinned(e, t) {
    this.lastLeftPinned !== e && (this.lastLeftPinned = e, this.dispatchColEvent("lastLeftPinnedChanged", t));
  }
  isFirstRightPinned() {
    return this.firstRightPinned;
  }
  isLastLeftPinned() {
    return this.lastLeftPinned;
  }
  isPinned() {
    return this.pinned === "left" || this.pinned === "right";
  }
  isPinnedLeft() {
    return this.pinned === "left";
  }
  isPinnedRight() {
    return this.pinned === "right";
  }
  getPinned() {
    return this.pinned;
  }
  setVisible(e, t) {
    const s = e === !0;
    this.visible !== s && (this.visible = s, this.dispatchColEvent("visibleChanged", t)), this.dispatchStateUpdatedEvent("hide");
  }
  isVisible() {
    return this.visible;
  }
  isSpanHeaderHeight() {
    return !this.getColDef().suppressSpanHeaderHeight;
  }
  getColumnGroupPaddingInfo() {
    let e = this.getParent();
    if (!e || !e.isPadding())
      return { numberOfParents: 0, isSpanningTotal: !1 };
    const t = e.getPaddingLevel() + 1;
    let s = !0;
    for (; e; ) {
      if (!e.isPadding()) {
        s = !1;
        break;
      }
      e = e.getParent();
    }
    return { numberOfParents: t, isSpanningTotal: s };
  }
  getColDef() {
    return this.colDef;
  }
  getDefinition() {
    return this.colDef;
  }
  getColumnGroupShow() {
    return this.colDef.columnGroupShow;
  }
  getColId() {
    return this.colId;
  }
  getId() {
    return this.colId;
  }
  getUniqueId() {
    return this.colId;
  }
  getActualWidth() {
    return this.actualWidth;
  }
  getAutoHeaderHeight() {
    return this.autoHeaderHeight;
  }
  /** Returns true if the header height has changed */
  setAutoHeaderHeight(e) {
    const t = e !== this.autoHeaderHeight;
    return this.autoHeaderHeight = e, t;
  }
  createBaseColDefParams(e) {
    return ge(this.gos, {
      node: e,
      data: e.data,
      colDef: this.colDef,
      column: this
    });
  }
  getColSpan(e) {
    if (Ie(this.colDef.colSpan))
      return 1;
    const t = this.createBaseColDefParams(e), s = this.colDef.colSpan(t);
    return Math.max(s, 1);
  }
  getRowSpan(e) {
    if (Ie(this.colDef.rowSpan))
      return 1;
    const t = this.createBaseColDefParams(e), s = this.colDef.rowSpan(t);
    return Math.max(s, 1);
  }
  setActualWidth(e, t, s = !1) {
    e = Math.max(e, this.minWidth), e = Math.min(e, this.maxWidth), this.actualWidth !== e && (this.actualWidth = e, this.flex != null && t !== "flex" && t !== "gridInitializing" && (this.flex = null), s || this.fireColumnWidthChangedEvent(t)), this.dispatchStateUpdatedEvent("width");
  }
  fireColumnWidthChangedEvent(e) {
    this.dispatchColEvent("widthChanged", e);
  }
  isGreaterThanMax(e) {
    return e > this.maxWidth;
  }
  getMinWidth() {
    return this.minWidth;
  }
  getMaxWidth() {
    return this.maxWidth;
  }
  getFlex() {
    return this.flex;
  }
  isRowGroupActive() {
    return this.rowGroupActive;
  }
  isPivotActive() {
    return this.pivotActive;
  }
  isAnyFunctionActive() {
    return this.isPivotActive() || this.isRowGroupActive() || this.isValueActive();
  }
  isAnyFunctionAllowed() {
    return this.isAllowPivot() || this.isAllowRowGroup() || this.isAllowValue();
  }
  isValueActive() {
    return this.aggregationActive;
  }
  isAllowPivot() {
    return this.colDef.enablePivot === !0;
  }
  isAllowValue() {
    return this.colDef.enableValue === !0;
  }
  isAllowRowGroup() {
    return this.colDef.enableRowGroup === !0;
  }
  dispatchColEvent(e, t, s) {
    const n = this.createColumnEvent(e, t);
    s && Ue(n, s), this.colEventSvc.dispatchEvent(n);
  }
  dispatchStateUpdatedEvent(e) {
    this.colEventSvc.dispatchEvent({
      type: "columnStateUpdated",
      key: e
    });
  }
};
function He(e) {
  return e instanceof Ms;
}
var Ms = class extends K {
  constructor(e, t, s, n) {
    super(), this.colGroupDef = e, this.groupId = t, this.padding = s, this.level = n, this.isColumn = !1, this.expandable = !1, this.instanceId = bi(), this.expandableListenerRemoveCallback = null, this.expanded = !!(e != null && e.openByDefault);
  }
  destroy() {
    this.expandableListenerRemoveCallback && this.reset(null, void 0), super.destroy();
  }
  reset(e, t) {
    this.colGroupDef = e, this.level = t, this.originalParent = null, this.expandableListenerRemoveCallback && this.expandableListenerRemoveCallback(), this.children = void 0, this.expandable = void 0;
  }
  getInstanceId() {
    return this.instanceId;
  }
  getOriginalParent() {
    return this.originalParent;
  }
  getLevel() {
    return this.level;
  }
  isVisible() {
    return this.children ? this.children.some((e) => e.isVisible()) : !1;
  }
  isPadding() {
    return this.padding;
  }
  setExpanded(e) {
    this.expanded = e === void 0 ? !1 : e, this.dispatchLocalEvent({ type: "expandedChanged" });
  }
  isExpandable() {
    return this.expandable;
  }
  isExpanded() {
    return this.expanded;
  }
  getGroupId() {
    return this.groupId;
  }
  getId() {
    return this.getGroupId();
  }
  setChildren(e) {
    this.children = e;
  }
  getChildren() {
    return this.children;
  }
  getColGroupDef() {
    return this.colGroupDef;
  }
  getLeafColumns() {
    const e = [];
    return this.addLeafColumns(e), e;
  }
  forEachLeafColumn(e) {
    if (this.children)
      for (const t of this.children)
        wt(t) ? e(t) : He(t) && t.forEachLeafColumn(e);
  }
  addLeafColumns(e) {
    this.children && this.children.forEach((t) => {
      wt(t) ? e.push(t) : He(t) && t.addLeafColumns(e);
    });
  }
  getColumnGroupShow() {
    const e = this.colGroupDef;
    if (e)
      return e.columnGroupShow;
  }
  // need to check that this group has at least one col showing when both expanded and contracted.
  // if not, then we don't allow expanding and contracting on this group
  setupExpandable() {
    this.setExpandable(), this.expandableListenerRemoveCallback && this.expandableListenerRemoveCallback();
    const e = this.onColumnVisibilityChanged.bind(this);
    this.getLeafColumns().forEach((t) => t.__addEventListener("visibleChanged", e)), this.expandableListenerRemoveCallback = () => {
      this.getLeafColumns().forEach((t) => t.__removeEventListener("visibleChanged", e)), this.expandableListenerRemoveCallback = null;
    };
  }
  setExpandable() {
    if (this.isPadding())
      return;
    let e = !1, t = !1, s = !1;
    const n = this.findChildrenRemovingPadding();
    for (let o = 0, i = n.length; o < i; o++) {
      const a = n[o];
      if (!a.isVisible())
        continue;
      const l = a.getColumnGroupShow();
      l === "open" ? (e = !0, s = !0) : l === "closed" ? (t = !0, s = !0) : (e = !0, t = !0);
    }
    const r = e && t && s;
    this.expandable !== r && (this.expandable = r, this.dispatchLocalEvent({ type: "expandableChanged" }));
  }
  findChildrenRemovingPadding() {
    const e = [], t = (s) => {
      s.forEach((n) => {
        He(n) && n.isPadding() ? t(n.children) : e.push(n);
      });
    };
    return t(this.children), e;
  }
  onColumnVisibilityChanged() {
    this.setExpandable();
  }
}, cc = {
  numericColumn: {
    headerClass: "ag-right-aligned-header",
    cellClass: "ag-right-aligned-cell"
  },
  rightAligned: {
    headerClass: "ag-right-aligned-header",
    cellClass: "ag-right-aligned-cell"
  }
};
function Ur(e, t, s) {
  const n = {}, r = e.gos;
  return Object.assign(n, r.get("defaultColGroupDef")), Object.assign(n, t), r.validateColDef(n, s), n;
}
var dc = class {
  constructor() {
    this.existingKeys = {};
  }
  addExistingKeys(e) {
    for (let t = 0; t < e.length; t++)
      this.existingKeys[e[t]] = !0;
  }
  getUniqueKey(e, t) {
    e = Kn(e);
    let s = 0;
    for (; ; ) {
      let n = e ?? t;
      if (n ? s !== 0 && (n += "_" + s) : n = s, !this.existingKeys[n]) {
        const r = String(n);
        return e && s > 0 && oe(273, { providedId: e, usedId: r }), this.existingKeys[r] = !0, r;
      }
      s++;
    }
  }
};
function Ce(e) {
  if (e != null && e.length)
    return e[e.length - 1];
}
function nn(e, t, s) {
  return e == null && t == null ? !0 : e != null && t != null && e.length === t.length && e.every((n, r) => t[r] === n);
}
function bs(e, t) {
  if (e)
    for (const s of e)
      t(s);
}
function vt(e, t) {
  const s = e.indexOf(t);
  s >= 0 && e.splice(s, 1);
}
function Kr(e, t, s) {
  for (let n = 0; n < t.length; n++)
    vt(e, t[n]);
  for (let n = t.length - 1; n >= 0; n--)
    e.splice(s, 0, t[n]);
}
var rn = "ag-Grid-AutoColumn", uc = "ag-Grid-SelectionColumn", hc = "ag-Grid-RowNumbersColumn";
function gc(e) {
  const t = [], s = (n) => {
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      wt(o) ? t.push(o) : He(o) && s(o.getChildren());
    }
  };
  return s(e), t;
}
function Lt(e) {
  return e.reduce((t, s) => t + s.getActualWidth(), 0);
}
function Yr(e, t, s) {
  const n = {};
  if (!t)
    return;
  ct(null, t, (o) => {
    n[o.getInstanceId()] = o;
  }), s && ct(null, s, (o) => {
    n[o.getInstanceId()] = null;
  });
  const r = Object.values(n).filter((o) => o != null);
  e.context.destroyBeans(r);
}
function fc(e) {
  return e.getId().startsWith(rn);
}
function yi(e) {
  const t = typeof e == "string" ? e : "getColId" in e ? e.getColId() : e.colId;
  return (t == null ? void 0 : t.startsWith(uc)) ?? !1;
}
function is(e) {
  const t = typeof e == "string" ? e : "getColId" in e ? e.getColId() : e.colId;
  return (t == null ? void 0 : t.startsWith(hc)) ?? !1;
}
function zs(e) {
  let t = [];
  return e instanceof Array ? t = e : typeof e == "string" && (t = e.split(",")), t;
}
function Is(e) {
  return e === "gridOptionsUpdated" ? "gridOptionsChanged" : e;
}
function pc(e, t) {
  const s = e === t, n = e.getColDef() === t, r = e.getColId() == t;
  return s || n || r;
}
var Cc = (e, t) => (s, n) => {
  const r = {
    value1: void 0,
    value2: void 0
  };
  let o = !1;
  return e && (e[s] !== void 0 && (r.value1 = e[s], o = !0), te(n) && e[n] !== void 0 && (r.value2 = e[n], o = !0)), !o && t && (t[s] !== void 0 && (r.value1 = t[s]), te(n) && t[n] !== void 0 && (r.value2 = t[n])), r;
};
function mc(e, t = null, s, n, r) {
  const o = new dc(), { existingCols: i, existingGroups: a, existingColKeys: l } = wc(n);
  o.addExistingKeys(l);
  const c = Si(
    e,
    t,
    0,
    s,
    i,
    o,
    a,
    r
  ), { colGroupSvc: d } = e, u = (d == null ? void 0 : d.findMaxDepth(c, 0)) ?? 0, h = d ? d.balanceColumnTree(c, 0, u, o) : c;
  return ct(null, h, (f, C) => {
    He(f) && f.setupExpandable(), f.originalParent = C;
  }), {
    columnTree: h,
    treeDepth: u
  };
}
function wc(e) {
  const t = [], s = [], n = [];
  return e && ct(null, e, (r) => {
    if (He(r)) {
      const o = r;
      s.push(o);
    } else {
      const o = r;
      n.push(o.getId()), t.push(o);
    }
  }), { existingCols: t, existingGroups: s, existingColKeys: n };
}
function Si(e, t, s, n, r, o, i, a) {
  if (!t)
    return [];
  const { colGroupSvc: l } = e, c = new Array(t.length);
  for (let d = 0; d < c.length; d++) {
    const u = t[d];
    l && xc(u) ? c[d] = l.createProvidedColumnGroup(
      n,
      u,
      s,
      r,
      o,
      i,
      a
    ) : c[d] = vc(e, n, u, r, o, a);
  }
  return c;
}
function vc(e, t, s, n, r, o) {
  var l;
  const i = yc(s, n);
  i && (n == null || n.splice(i.idx, 1));
  let a = i == null ? void 0 : i.column;
  if (a) {
    const c = qn(e, s, a.getColId());
    a.setColDef(c, s, o), bc(e, a, c, o);
  } else {
    const c = r.getUniqueKey(s.colId, s.field), d = qn(e, s, c);
    a = new fr(d, s, c, t), e.context.createBean(a);
  }
  return (l = e.dataTypeSvc) == null || l.addColumnListeners(a), a;
}
function Ri(e, t, s, n, r, o, i, a) {
  const { sortSvc: l, pinnedCols: c, colFlex: d } = e;
  s !== void 0 && t.setVisible(!s, a), l && (l.updateColSort(t, n, a), r !== void 0 && l.setColSortIndex(t, r)), o !== void 0 && (c == null || c.setColPinned(t, o)), i !== void 0 && (d == null || d.setColFlex(t, i));
}
function bc(e, t, s, n) {
  Ri(
    e,
    t,
    s.hide,
    s.sort,
    s.sortIndex,
    s.pinned,
    s.flex,
    n
  );
  const r = t.getFlex();
  if (!(r != null && r > 0))
    if (s.width != null)
      t.setActualWidth(s.width, n);
    else {
      const o = t.getActualWidth();
      t.setActualWidth(o, n);
    }
}
function yc(e, t) {
  if (t)
    for (let s = 0; s < t.length; s++) {
      const n = t[s].getUserProvidedColDef();
      if (!n)
        continue;
      if (e.colId != null) {
        if (t[s].getId() === e.colId)
          return { idx: s, column: t[s] };
        continue;
      }
      if (e.field != null) {
        if (n.field === e.field)
          return { idx: s, column: t[s] };
        continue;
      }
      if (n === e)
        return { idx: s, column: t[s] };
    }
}
function qn(e, t, s, n) {
  const { gos: r, dataTypeSvc: o } = e, i = {}, a = r.get("defaultColDef");
  Ue(i, a, !1, !0);
  const l = Sc(e, i, t, s);
  l && Rc(e, l, i), Ue(i, t, !1, !0);
  const c = r.get("autoGroupColumnDef"), d = at(r);
  return t.rowGroup && c && d && Ue(
    i,
    { sort: c.sort, initialSort: c.initialSort },
    !1,
    !0
  ), o == null || o.validateColDef(i), r.validateColDef(i, s, n), i;
}
function Sc(e, t, s, n) {
  var i;
  const r = (i = e.dataTypeSvc) == null ? void 0 : i.updateColDefAndGetColumnType(t, s, n), o = s.type ?? r ?? t.type;
  return t.type = o, o ? zs(o) : void 0;
}
function Rc(e, t, s) {
  if (!t.length)
    return;
  const n = Object.assign({}, cc), r = e.gos.get("columnTypes") || {};
  for (const o of Object.keys(r)) {
    const i = r[o];
    o in n ? oe(34, { key: o }) : (i.type && oe(35), n[o] = i);
  }
  t.forEach((o) => {
    const i = n[o.trim()];
    i ? Ue(s, i, !1, !0) : oe(36, { t: o });
  });
}
function xc(e) {
  return e.children !== void 0;
}
function ct(e, t, s) {
  if (t)
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      He(r) && ct(r, r.getChildren(), s), s(r, e);
    }
}
function xi(e, t) {
  const s = [], n = [], r = [];
  return e.forEach((i) => {
    const a = i.getColDef().lockPosition;
    a === "right" ? r.push(i) : a === "left" || a === !0 ? s.push(i) : n.push(i);
  }), t.get("enableRtl") ? [...r, ...n, ...s] : [...s, ...n, ...r];
}
function Fi(e, t) {
  let s = !0;
  return ct(null, t, (n) => {
    if (!He(n))
      return;
    const r = n, o = r.getColGroupDef();
    if (!(o && o.marryChildren))
      return;
    const a = [];
    r.getLeafColumns().forEach((h) => {
      const g = e.indexOf(h);
      a.push(g);
    });
    const l = Math.max.apply(Math, a), c = Math.min.apply(Math, a), d = l - c, u = r.getLeafColumns().length - 1;
    d > u && (s = !1);
  }), s;
}
function Di(e, t) {
  if (!e || e.length == 0)
    return;
  const s = t(e[0]);
  for (let n = 1; n < e.length; n++)
    if (s !== t(e[n]))
      return;
  return s;
}
function Pi(e, t, s) {
  if (!t.length)
    return;
  const n = t.length === 1 ? t[0] : null, r = Di(t, (o) => o.getPinned());
  e.dispatchEvent({
    type: "columnPinned",
    // mistake in typing, 'undefined' should be allowed, as 'null' means 'not pinned'
    pinned: r ?? null,
    columns: t,
    column: n,
    source: s
  });
}
function Fc(e, t, s) {
  if (!t.length)
    return;
  const n = t.length === 1 ? t[0] : null, r = Di(t, (o) => o.isVisible());
  e.dispatchEvent({
    type: "columnVisible",
    visible: r,
    columns: t,
    column: n,
    source: s
  });
}
function Dc(e, t, s, n) {
  e.dispatchEvent({
    type: t,
    columns: s,
    column: s && s.length == 1 ? s[0] : null,
    source: n
  });
}
function $s(e, t, s, n, r = null) {
  t != null && t.length && e.dispatchEvent({
    type: "columnResized",
    columns: t,
    column: t.length === 1 ? t[0] : null,
    flexColumns: r,
    finished: s,
    source: n
  });
}
function Ei(e, t, s) {
  var F;
  const {
    colModel: n,
    rowGroupColsSvc: r,
    pivotColsSvc: o,
    autoColSvc: i,
    selectionColSvc: a,
    colAnimation: l,
    visibleCols: c,
    pivotResultCols: d,
    environment: u,
    valueColsSvc: h,
    eventSvc: g,
    gos: f
  } = e, C = n.getColDefCols() ?? [], p = a == null ? void 0 : a.getColumns();
  if (!(C != null && C.length) && !(p != null && p.length))
    return !1;
  if (t != null && t.state && !t.state.forEach)
    return oe(32), !1;
  const m = (S, P, W, O, L) => {
    if (!S)
      return;
    const D = Cc(P, t.defaultState), G = D("flex").value1;
    if (Ri(
      e,
      S,
      D("hide").value1,
      D("sort").value1,
      D("sortIndex").value1,
      D("pinned").value1,
      G,
      s
    ), G == null) {
      const T = D("width").value1;
      if (T != null) {
        const I = S.getColDef().minWidth ?? u.getDefaultColumnMinWidth();
        I != null && T >= I && S.setActualWidth(T, s);
      }
    }
    L || !S.isPrimary() || (h == null || h.syncColumnWithState(S, s, D), r == null || r.syncColumnWithState(S, s, D, W), o == null || o.syncColumnWithState(S, s, D, O));
  }, v = (S, P, W) => {
    var $, Z;
    const O = Ti(e, s), L = P.slice(), D = {}, G = {}, T = [], I = [], x = [];
    let E = 0;
    const A = (r == null ? void 0 : r.columns.slice()) ?? [], R = (o == null ? void 0 : o.columns.slice()) ?? [];
    S.forEach((U) => {
      const z = U.colId;
      if (z.startsWith(rn)) {
        T.push(U), x.push(U);
        return;
      }
      if (yi(z)) {
        I.push(U), x.push(U);
        return;
      }
      const Q = W(z);
      Q ? (m(Q, U, D, G, !1), vt(L, Q)) : (x.push(U), E += 1);
    });
    const _ = (U) => m(U, null, D, G, !1);
    L.forEach(_), r == null || r.sortColumns(qr.bind(r, D, A)), o == null || o.sortColumns(qr.bind(o, G, R)), n.refreshCols(!1);
    const B = (U, z, q = []) => {
      z.forEach((Q) => {
        const se = U(Q.colId);
        vt(q, se), m(se, Q, null, null, !0);
      }), q.forEach(_);
    };
    return B(
      (U) => (i == null ? void 0 : i.getColumn(U)) ?? null,
      T,
      ($ = i == null ? void 0 : i.getColumns()) == null ? void 0 : $.slice()
    ), B(
      (U) => (a == null ? void 0 : a.getColumn(U)) ?? null,
      I,
      (Z = a == null ? void 0 : a.getColumns()) == null ? void 0 : Z.slice()
    ), Ec(t, n, f), c.refresh(s), g.dispatchEvent({
      type: "columnEverythingChanged",
      source: s
    }), O(), { unmatchedAndAutoStates: x, unmatchedCount: E };
  };
  l == null || l.start();
  let { unmatchedAndAutoStates: b, unmatchedCount: y } = v(
    t.state || [],
    C,
    (S) => n.getColDefCol(S)
  );
  if (b.length > 0 || te(t.defaultState)) {
    const S = ((F = d == null ? void 0 : d.getPivotResultCols()) == null ? void 0 : F.list) ?? [];
    y = v(
      b,
      S,
      (P) => (d == null ? void 0 : d.getPivotResultCol(P)) ?? null
    ).unmatchedCount;
  }
  return l == null || l.finish(), y === 0;
}
function Ti(e, t) {
  const { rowGroupColsSvc: s, pivotColsSvc: n, valueColsSvc: r, colModel: o, sortSvc: i, eventSvc: a } = e, l = {
    rowGroupColumns: (s == null ? void 0 : s.columns.slice()) ?? [],
    pivotColumns: (n == null ? void 0 : n.columns.slice()) ?? [],
    valueColumns: (r == null ? void 0 : r.columns.slice()) ?? []
  }, c = Zr(e), d = {};
  return c.forEach((u) => {
    d[u.colId] = u;
  }), () => {
    const u = (S, P, W, O) => {
      const L = P.map(O), D = W.map(O);
      if (nn(L, D))
        return;
      const T = new Set(P);
      W.forEach((x) => {
        T.delete(x) || T.add(x);
      });
      const I = [...T];
      a.dispatchEvent({
        type: S,
        columns: I,
        column: I.length === 1 ? I[0] : null,
        source: t
      });
    }, h = (S) => {
      const P = [];
      return o.forAllCols((W) => {
        const O = d[W.getColId()];
        O && S(O, W) && P.push(W);
      }), P;
    }, g = (S) => S.getColId();
    u(
      "columnRowGroupChanged",
      l.rowGroupColumns,
      (s == null ? void 0 : s.columns) ?? [],
      g
    ), u(
      "columnPivotChanged",
      l.pivotColumns,
      (n == null ? void 0 : n.columns) ?? [],
      g
    );
    const C = h((S, P) => {
      const W = S.aggFunc != null, O = W != P.isValueActive(), L = W && S.aggFunc != P.getAggFunc();
      return O || L;
    });
    C.length > 0 && Dc(a, "columnValueChanged", C, t), $s(a, h((S, P) => S.width != P.getActualWidth()), !0, t), Pi(a, h((S, P) => S.pinned != P.getPinned()), t), Fc(a, h((S, P) => S.hide == P.isVisible()), t);
    const y = h((S, P) => S.sort != P.getSort() || S.sortIndex != P.getSortIndex());
    y.length > 0 && (i == null || i.dispatchSortChangedEvents(t, y));
    const F = Zr(e);
    Mc(c, F, t, o, a);
  };
}
function Zr(e) {
  const { colModel: t, rowGroupColsSvc: s, pivotColsSvc: n } = e, r = t.getColDefCols();
  if (Ie(r) || !t.isAlive())
    return [];
  const o = s == null ? void 0 : s.columns, i = n == null ? void 0 : n.columns, a = [], l = (d) => {
    const u = d.isRowGroupActive() && o ? o.indexOf(d) : null, h = d.isPivotActive() && i ? i.indexOf(d) : null, g = d.isValueActive() ? d.getAggFunc() : null, f = d.getSort() != null ? d.getSort() : null, C = d.getSortIndex() != null ? d.getSortIndex() : null;
    a.push({
      colId: d.getColId(),
      width: d.getActualWidth(),
      hide: !d.isVisible(),
      pinned: d.getPinned(),
      sort: f,
      sortIndex: C,
      aggFunc: g,
      rowGroup: d.isRowGroupActive(),
      rowGroupIndex: u,
      pivot: d.isPivotActive(),
      pivotIndex: h,
      flex: d.getFlex() ?? null
    });
  };
  t.forAllCols((d) => l(d));
  const c = new Map(
    t.getCols().map((d, u) => [d.getColId(), u])
  );
  return a.sort((d, u) => {
    const h = c.has(d.colId) ? c.get(d.colId) : -1, g = c.has(u.colId) ? c.get(u.colId) : -1;
    return h - g;
  }), a;
}
function Pc(e) {
  const t = (f, C) => f ?? C ?? null, s = e.getColDef(), n = t(s.sort, s.initialSort), r = t(s.sortIndex, s.initialSortIndex), o = t(s.hide, s.initialHide), i = t(s.pinned, s.initialPinned), a = t(s.width, s.initialWidth), l = t(s.flex, s.initialFlex);
  let c = t(s.rowGroupIndex, s.initialRowGroupIndex), d = t(s.rowGroup, s.initialRowGroup);
  c == null && (d == null || d == !1) && (c = null, d = null);
  let u = t(s.pivotIndex, s.initialPivotIndex), h = t(s.pivot, s.initialPivot);
  u == null && (h == null || h == !1) && (u = null, h = null);
  const g = t(s.aggFunc, s.initialAggFunc);
  return {
    colId: e.getColId(),
    sort: n,
    sortIndex: r,
    hide: o,
    pinned: i,
    width: a,
    flex: l,
    rowGroup: d,
    rowGroupIndex: c,
    pivot: h,
    pivotIndex: u,
    aggFunc: g
  };
}
function Ec(e, t, s) {
  if (!e.applyOrder || !e.state)
    return;
  const n = [];
  e.state.forEach((r) => {
    r.colId != null && n.push(r.colId);
  }), Tc(t.cols, n, t, s);
}
function Tc(e, t, s, n) {
  if (e == null)
    return;
  let r = [];
  const o = {};
  t.forEach((a) => {
    if (o[a])
      return;
    const l = e.map[a];
    l && (r.push(l), o[a] = !0);
  });
  let i = 0;
  if (e.list.forEach((a) => {
    const l = a.getColId();
    if (o[l] != null)
      return;
    l.startsWith(rn) ? r.splice(i++, 0, a) : r.push(a);
  }), r = xi(r, n), !Fi(r, s.getColTree())) {
    oe(39);
    return;
  }
  e.list = r;
}
function Mc(e, t, s, n, r) {
  const o = {};
  t.forEach((d) => o[d.colId] = d);
  const i = {};
  e.forEach((d) => {
    o[d.colId] && (i[d.colId] = !0);
  });
  const a = e.filter((d) => i[d.colId]), l = t.filter((d) => i[d.colId]), c = [];
  l.forEach((d, u) => {
    const h = a && a[u];
    if (h && h.colId !== d.colId) {
      const g = n.getCol(h.colId);
      g && c.push(g);
    }
  }), c.length && r.dispatchEvent({
    type: "columnMoved",
    columns: c,
    column: c.length === 1 ? c[0] : null,
    finished: !0,
    source: s
  });
}
var qr = (e, t, s, n) => {
  const r = e[s.getId()], o = e[n.getId()], i = r != null, a = o != null;
  if (i && a)
    return r - o;
  if (i)
    return -1;
  if (a)
    return 1;
  const l = t.indexOf(s), c = t.indexOf(n), d = l >= 0, u = c >= 0;
  return d && u ? l - c : d ? -1 : 1;
}, Ic = class extends K {
  constructor() {
    super(...arguments), this.beanName = "colModel", this.pivotMode = !1, this.ready = !1, this.changeEventsDispatching = !1;
  }
  postConstruct() {
    this.pivotMode = this.gos.get("pivotMode"), this.addManagedPropertyListeners(
      ["groupDisplayType", "treeData", "treeDataDisplayType", "groupHideOpenParents"],
      (e) => this.refreshAll(Is(e.source))
    ), this.addManagedPropertyListeners(
      ["defaultColDef", "defaultColGroupDef", "columnTypes", "suppressFieldDotNotation"],
      this.recreateColumnDefs.bind(this)
    ), this.addManagedPropertyListener(
      "pivotMode",
      (e) => this.setPivotMode(this.gos.get("pivotMode"), Is(e.source))
    );
  }
  // called from SyncService, when grid has finished initialising
  createColsFromColDefs(e) {
    var v, b, y;
    const { beans: t } = this, {
      valueCache: s,
      colAutosize: n,
      rowGroupColsSvc: r,
      pivotColsSvc: o,
      valueColsSvc: i,
      visibleCols: a,
      colViewport: l,
      eventSvc: c
    } = t, d = this.colDefs ? Ti(t, e) : void 0;
    s == null || s.expire();
    const u = (v = this.colDefCols) == null ? void 0 : v.list, h = (b = this.colDefCols) == null ? void 0 : b.tree, g = mc(t, this.colDefs, !0, h, e);
    Yr(t, (y = this.colDefCols) == null ? void 0 : y.tree, g.columnTree);
    const f = g.columnTree, C = g.treeDepth, p = gc(f), m = {};
    p.forEach((F) => m[F.getId()] = F), this.colDefCols = { tree: f, treeDepth: C, list: p, map: m }, r == null || r.extractCols(e, u), o == null || o.extractCols(e, u), i == null || i.extractCols(e, u), this.ready = !0, this.refreshCols(!0), a.refresh(e), l.checkViewportColumns(), c.dispatchEvent({
      type: "columnEverythingChanged",
      source: e
    }), d && (this.changeEventsDispatching = !0, d(), this.changeEventsDispatching = !1), c.dispatchEvent({
      type: "newColumnsLoaded",
      source: e
    }), e === "gridInitializing" && (n == null || n.applyAutosizeStrategy());
  }
  // called from: buildAutoGroupColumns (events 'groupDisplayType', 'treeData', 'treeDataDisplayType', 'groupHideOpenParents')
  // createColsFromColDefs (recreateColumnDefs, setColumnsDefs),
  // setPivotMode, applyColumnState,
  // functionColsService.setPrimaryColList, functionColsService.updatePrimaryColList,
  // pivotResultCols.setPivotResultCols
  refreshCols(e) {
    var C;
    if (!this.colDefCols)
      return;
    const t = (C = this.cols) == null ? void 0 : C.tree;
    this.saveColOrder();
    const {
      autoColSvc: s,
      selectionColSvc: n,
      rowNumbersSvc: r,
      quickFilter: o,
      pivotResultCols: i,
      showRowGroupCols: a,
      rowAutoHeight: l,
      visibleCols: c,
      colViewport: d,
      eventSvc: u
    } = this.beans, h = this.selectCols(i, this.colDefCols);
    this.createColumnsForService([s, n, r], h);
    const g = Bl(this.gos, this.showingPivotResult);
    (!e || g) && this.restoreColOrder(h), this.positionLockedCols(h), a == null || a.refresh(), o == null || o.refreshCols(), this.setColSpanActive(), l == null || l.setAutoHeightActive(h), c.clear(), d.clear(), !nn(t, this.cols.tree) && u.dispatchEvent({
      type: "gridColumnsChanged"
    });
  }
  createColumnsForService(e, t) {
    for (const s of e)
      s && (s.createColumns(t, (n) => {
        this.lastOrder = n(this.lastOrder), this.lastPivotOrder = n(this.lastPivotOrder);
      }), s.addColumns(t));
  }
  selectCols(e, t) {
    const s = (e == null ? void 0 : e.getPivotResultCols()) ?? null;
    this.showingPivotResult = s != null;
    const { map: n, list: r, tree: o, treeDepth: i } = s ?? t;
    return this.cols = {
      list: r.slice(),
      map: { ...n },
      tree: o.slice(),
      treeDepth: i
    }, s && (s.list.some((l) => {
      var c;
      return ((c = this.cols) == null ? void 0 : c.map[l.getColId()]) !== void 0;
    }) || (this.lastPivotOrder = null)), this.cols;
  }
  getColsToShow() {
    var n;
    if (!this.cols)
      return [];
    const e = this.isPivotMode() && !this.showingPivotResult, t = (n = this.beans.valueColsSvc) == null ? void 0 : n.columns;
    return this.cols.list.filter((r) => {
      const o = fc(r);
      if (e) {
        const i = t == null ? void 0 : t.includes(r);
        return o || i;
      } else
        return o || r.isVisible();
    });
  }
  // on events 'groupDisplayType', 'treeData', 'treeDataDisplayType', 'groupHideOpenParents'
  refreshAll(e) {
    this.ready && (this.refreshCols(!1), this.beans.visibleCols.refresh(e));
  }
  setColsVisible(e, t = !1, s) {
    Ei(
      this.beans,
      {
        state: e.map((n) => ({
          colId: typeof n == "string" ? n : n.getColId(),
          hide: !t
        }))
      },
      s
    );
  }
  /**
   * Restores provided columns order to the previous order in this.lastPivotOrder / this.lastOrder
   * If columns are not in the last order:
   *  - Check column groups, and apply column after the last column in the lowest shared group
   *  - If no sibling is found, apply the column at the end of the cols
   */
  restoreColOrder(e) {
    const t = this.showingPivotResult ? this.lastPivotOrder : this.lastOrder;
    if (!t)
      return;
    const s = t.filter((u) => e.map[u.getId()] != null);
    if (s.length === 0)
      return;
    if (s.length === e.list.length) {
      e.list = s;
      return;
    }
    const n = (u) => {
      const h = u.getOriginalParent();
      return h ? h.getChildren().length > 1 ? !0 : n(h) : !1;
    };
    if (!s.some((u) => n(u))) {
      const u = new Set(s);
      for (const h of e.list)
        u.has(h) || s.push(h);
      e.list = s;
      return;
    }
    const r = /* @__PURE__ */ new Map();
    for (let u = 0; u < s.length; u++) {
      const h = s[u];
      r.set(h, u);
    }
    const o = e.list.filter((u) => !r.has(u));
    if (o.length === 0) {
      e.list = s;
      return;
    }
    const i = (u, h) => {
      const g = h ? h.getOriginalParent() : u.getOriginalParent();
      if (!g)
        return null;
      let f = null, C = null;
      for (const p of g.getChildren())
        if (!(p === h || p === u)) {
          if (p instanceof fr) {
            const m = r.get(p);
            if (m == null)
              continue;
            (f == null || f < m) && (f = m, C = p);
            continue;
          }
          p.forEachLeafColumn((m) => {
            const v = r.get(m);
            v != null && (f == null || f < v) && (f = v, C = m);
          });
        }
      return C ?? i(u, g);
    }, a = [], l = /* @__PURE__ */ new Map();
    for (const u of o) {
      const h = i(u, null);
      if (h == null) {
        a.push(u);
        continue;
      }
      const g = l.get(h);
      g === void 0 ? l.set(h, u) : Array.isArray(g) ? g.push(u) : l.set(h, [g, u]);
    }
    const c = new Array(e.list.length);
    let d = c.length - 1;
    for (let u = a.length - 1; u >= 0; u--)
      c[d--] = a[u];
    for (let u = s.length - 1; u >= 0; u--) {
      const h = s[u], g = l.get(h);
      if (g)
        if (Array.isArray(g))
          for (let f = g.length - 1; f >= 0; f--) {
            const C = g[f];
            c[d--] = C;
          }
        else
          c[d--] = g;
      c[d--] = h;
    }
    e.list = c;
  }
  positionLockedCols(e) {
    e.list = xi(e.list, this.gos);
  }
  saveColOrder() {
    var e, t;
    this.showingPivotResult ? this.lastPivotOrder = ((e = this.cols) == null ? void 0 : e.list) ?? null : this.lastOrder = ((t = this.cols) == null ? void 0 : t.list) ?? null;
  }
  getColumnDefs() {
    var e, t;
    return this.colDefCols ? (t = this.beans.colDefFactory) == null ? void 0 : t.getColumnDefs(
      this.colDefCols.list,
      this.showingPivotResult,
      this.lastOrder,
      ((e = this.cols) == null ? void 0 : e.list) ?? []
    ) : void 0;
  }
  setColSpanActive() {
    var e;
    this.colSpanActive = !!((e = this.cols) != null && e.list.some((t) => t.getColDef().colSpan != null));
  }
  isPivotMode() {
    return this.pivotMode;
  }
  setPivotMode(e, t) {
    if (e === this.pivotMode || (this.pivotMode = e, !this.ready))
      return;
    this.refreshCols(!1);
    const { visibleCols: s, eventSvc: n } = this.beans;
    s.refresh(t), n.dispatchEvent({
      type: "columnPivotModeChanged"
    });
  }
  // + clientSideRowModel
  isPivotActive() {
    var t;
    const e = (t = this.beans.pivotColsSvc) == null ? void 0 : t.columns;
    return this.pivotMode && !!(e != null && e.length);
  }
  // called when dataTypes change
  recreateColumnDefs(e) {
    var s;
    if (!this.cols)
      return;
    (s = this.beans.autoColSvc) == null || s.updateColumns(e);
    const t = Is(e.source);
    this.createColsFromColDefs(t);
  }
  setColumnDefs(e, t) {
    this.colDefs = e, this.createColsFromColDefs(t);
  }
  destroy() {
    var e;
    Yr(this.beans, (e = this.colDefCols) == null ? void 0 : e.tree), super.destroy();
  }
  getColTree() {
    var e;
    return ((e = this.cols) == null ? void 0 : e.tree) ?? [];
  }
  // + columnSelectPanel
  getColDefColTree() {
    var e;
    return ((e = this.colDefCols) == null ? void 0 : e.tree) ?? [];
  }
  // + clientSideRowController -> sorting, building quick filter text
  // + headerRenderer -> sorting (clearing icon)
  getColDefCols() {
    var e;
    return ((e = this.colDefCols) == null ? void 0 : e.list) ?? null;
  }
  // + moveColumnController
  getCols() {
    var e;
    return ((e = this.cols) == null ? void 0 : e.list) ?? [];
  }
  forAllCols(e) {
    var r, o, i, a;
    const { pivotResultCols: t, autoColSvc: s, selectionColSvc: n } = this.beans;
    bs((r = this.colDefCols) == null ? void 0 : r.list, e), bs((o = s == null ? void 0 : s.columns) == null ? void 0 : o.list, e), bs((i = n == null ? void 0 : n.columns) == null ? void 0 : i.list, e), bs((a = t == null ? void 0 : t.getPivotResultCols()) == null ? void 0 : a.list, e);
  }
  getColsForKeys(e) {
    return e ? e.map((t) => this.getCol(t)).filter((t) => t != null) : [];
  }
  getColDefCol(e) {
    var t;
    return (t = this.colDefCols) != null && t.list ? this.getColFromCollection(e, this.colDefCols) : null;
  }
  getCol(e) {
    return e == null ? null : this.getColFromCollection(e, this.cols);
  }
  /**
   * Get column exclusively by ID.
   *
   * Note getCol/getColFromCollection have poor performance when col has been removed.
   */
  getColById(e) {
    var t;
    return ((t = this.cols) == null ? void 0 : t.map[e]) ?? null;
  }
  getColFromCollection(e, t) {
    var r, o;
    if (t == null)
      return null;
    const { map: s, list: n } = t;
    if (typeof e == "string" && s[e])
      return s[e];
    for (let i = 0; i < n.length; i++)
      if (pc(n[i], e))
        return n[i];
    return ((r = this.beans.autoColSvc) == null ? void 0 : r.getColumn(e)) ?? ((o = this.beans.selectionColSvc) == null ? void 0 : o.getColumn(e)) ?? null;
  }
}, Lc = class {
  constructor() {
    this.existingIds = {};
  }
  getInstanceIdForKey(e) {
    const t = this.existingIds[e];
    let s;
    return typeof t != "number" ? s = 0 : s = t + 1, this.existingIds[e] = s, s;
  }
}, Ut = class extends K {
};
function on(e, t, s) {
  return s && e.addDestroyFunc(() => t.destroyBean(s)), s ?? e;
}
var ps = class {
  constructor(e) {
    this.cssClassStates = {}, this.getGui = e;
  }
  toggleCss(e, t) {
    var n;
    if (!e)
      return;
    if (e.indexOf(" ") >= 0) {
      const r = (e || "").split(" ");
      if (r.length > 1) {
        r.forEach((o) => this.toggleCss(o, t));
        return;
      }
    }
    this.cssClassStates[e] !== t && e.length && ((n = this.getGui()) == null || n.classList.toggle(e, t), this.cssClassStates[e] = t);
  }
}, Ac = 0, de = null, ut = class extends K {
  constructor(e, t) {
    super(), this.suppressDataRefValidation = !1, this.displayed = !0, this.visible = !0, this.compId = Ac++, this.cssManager = new ps(() => this.eGui), this.componentSelectors = new Map((t ?? []).map((s) => [s.selector, s])), e && this.setTemplate(e);
  }
  preConstruct() {
    var t, s, n;
    this.wireTemplate(this.getGui());
    const e = "component-" + ((s = (t = Object.getPrototypeOf(this)) == null ? void 0 : t.constructor) == null ? void 0 : s.name);
    (n = this.css) == null || n.forEach((r) => this.beans.environment.addGlobalCSS(r, e));
  }
  wireTemplate(e, t) {
    e && this.gos && (this.applyElementsToComponent(e), this.createChildComponentsFromTags(e, t));
  }
  getCompId() {
    return this.compId;
  }
  getDataRefAttribute(e) {
    return e.getAttribute ? e.getAttribute(ti) : null;
  }
  applyElementsToComponent(e, t, s, n = null) {
    if (t === void 0 && (t = this.getDataRefAttribute(e)), t) {
      const r = this[t];
      if (r === de)
        this[t] = n ?? e;
      else {
        const o = s && s[t];
        if (!this.suppressDataRefValidation && !o)
          throw new Error(`data-ref: ${t} on ${this.constructor.name} with ${r}`);
      }
    }
  }
  // for registered components only, eg creates AgCheckbox instance from ag-checkbox HTML tag
  createChildComponentsFromTags(e, t) {
    const s = [];
    for (const n of e.childNodes ?? [])
      s.push(n);
    s.forEach((n) => {
      if (!(n instanceof HTMLElement))
        return;
      const r = this.createComponentFromElement(
        n,
        (o) => {
          const i = o.getGui();
          if (i)
            for (const a of n.attributes ?? [])
              i.setAttribute(a.name, a.value);
        },
        t
      );
      if (r) {
        if (r.addItems && n.children.length) {
          this.createChildComponentsFromTags(n, t);
          const o = Array.prototype.slice.call(n.children);
          r.addItems(o);
        }
        this.swapComponentForNode(r, e, n);
      } else n.childNodes && this.createChildComponentsFromTags(n, t);
    });
  }
  createComponentFromElement(e, t, s) {
    const n = e.nodeName, r = this.getDataRefAttribute(e), o = n.indexOf("AG-") === 0, i = o ? this.componentSelectors.get(n) : null;
    let a = null;
    if (i) {
      const l = s && r ? s[r] : void 0;
      a = new i.component(l), a.setParentComponent(this), this.createBean(a, null, t);
    } else if (o)
      throw new Error(`selector: ${n}`);
    return this.applyElementsToComponent(e, r, s, a), a;
  }
  swapComponentForNode(e, t, s) {
    const n = e.getGui();
    t.replaceChild(n, s), t.insertBefore(document.createComment(s.nodeName), n), this.addDestroyFunc(this.destroyBean.bind(this, e));
  }
  activateTabIndex(e) {
    const t = this.gos.get("tabIndex");
    e || (e = []), e.length || e.push(this.getGui()), e.forEach((s) => s.setAttribute("tabindex", t.toString()));
  }
  setTemplate(e, t, s) {
    let n;
    typeof e == "string" || e == null ? n = cr(e) : n = Ct(e), this.setTemplateFromElement(n, t, s);
  }
  setTemplateFromElement(e, t, s, n = !1) {
    if (this.eGui = e, this.suppressDataRefValidation = n, t)
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        this.componentSelectors.set(o.selector, o);
      }
    this.wireTemplate(e, s);
  }
  getGui() {
    return this.eGui;
  }
  getFocusableElement() {
    return this.eGui;
  }
  getAriaElement() {
    return this.getFocusableElement();
  }
  setParentComponent(e) {
    this.parentComponent = e;
  }
  getParentComponent() {
    return this.parentComponent;
  }
  // this method is for older code, that wants to provide the gui element,
  // it is not intended for this to be in ag-Stack
  setGui(e) {
    this.eGui = e;
  }
  queryForHtmlElement(e) {
    return this.eGui.querySelector(e);
  }
  getContainerAndElement(e, t) {
    let s = t;
    return e == null ? null : (s || (s = this.eGui), ei(e) ? {
      element: e,
      parent: s
    } : {
      element: e.getGui(),
      parent: s
    });
  }
  prependChild(e, t) {
    const { element: s, parent: n } = this.getContainerAndElement(e, t) || {};
    !s || !n || n.insertAdjacentElement("afterbegin", s);
  }
  appendChild(e, t) {
    const { element: s, parent: n } = this.getContainerAndElement(e, t) || {};
    !s || !n || n.appendChild(s);
  }
  isDisplayed() {
    return this.displayed;
  }
  setVisible(e, t = {}) {
    if (e !== this.visible) {
      this.visible = e;
      const { skipAriaHidden: s } = t;
      Sl(this.eGui, e, { skipAriaHidden: s });
    }
  }
  setDisplayed(e, t = {}) {
    if (e !== this.displayed) {
      this.displayed = e;
      const { skipAriaHidden: s } = t;
      Me(this.eGui, e, { skipAriaHidden: s });
      const n = {
        type: "displayChanged",
        visible: this.displayed
      };
      this.dispatchLocalEvent(n);
    }
  }
  destroy() {
    this.parentComponent && (this.parentComponent = void 0), super.destroy();
  }
  addGuiEventListener(e, t, s) {
    this.eGui.addEventListener(e, t, s), this.addDestroyFunc(() => this.eGui.removeEventListener(e, t));
  }
  addCss(e) {
    this.cssManager.toggleCss(e, !0);
  }
  removeCss(e) {
    this.cssManager.toggleCss(e, !1);
  }
  toggleCss(e, t) {
    this.cssManager.toggleCss(e, t);
  }
  registerCSS(e) {
    this.css || (this.css = []), this.css.push(e);
  }
}, Xe = class ns {
  constructor(t) {
    this.status = 0, this.resolution = null, this.waiters = [], t(
      (s) => this.onDone(s),
      (s) => this.onReject(s)
    );
  }
  static all(t) {
    return t.length ? new ns((s) => {
      let n = t.length;
      const r = new Array(n);
      t.forEach((o, i) => {
        o.then((a) => {
          r[i] = a, n--, n === 0 && s(r);
        });
      });
    }) : ns.resolve();
  }
  static resolve(t = null) {
    return new ns((s) => s(t));
  }
  then(t) {
    return new ns((s) => {
      this.status === 1 ? s(t(this.resolution)) : this.waiters.push((n) => s(t(n)));
    });
  }
  onDone(t) {
    this.status = 1, this.resolution = t, this.waiters.forEach((s) => s(t));
  }
  onReject(t) {
  }
};
function kc(e) {
  return e ? e.prototype && "getGui" in e.prototype : !1;
}
function Hc(e, t, s, n) {
  const { name: r } = s;
  let o, i, a, l, c, d;
  if (t) {
    const u = t, h = u[r + "Selector"], g = h ? h(n) : null, f = (C) => {
      typeof C == "string" ? o = C : C != null && C !== !0 && (e.isFrameworkComponent(C) ? a = C : i = C);
    };
    g ? (f(g.component), l = g.params, c = g.popup, d = g.popupPosition) : f(u[r]);
  }
  return { compName: o, jsComp: i, fwComp: a, paramsFromSelector: l, popupFromSelector: c, popupPositionFromSelector: d };
}
var Oc = class extends K {
  constructor() {
    super(...arguments), this.beanName = "userCompFactory";
  }
  wireBeans(e) {
    this.agCompUtils = e.agCompUtils, this.registry = e.registry, this.frameworkCompWrapper = e.frameworkCompWrapper, this.gridOptions = e.gridOptions;
  }
  getCompDetailsFromGridOptions(e, t, s, n = !1) {
    return this.getCompDetails(this.gridOptions, e, t, s, n);
  }
  getCompDetails(e, t, s, n, r = !1) {
    var v;
    const { name: o, cellRenderer: i } = t;
    let { compName: a, jsComp: l, fwComp: c, paramsFromSelector: d, popupFromSelector: u, popupPositionFromSelector: h } = Hc(this.beans.frameworkOverrides, e, t, n), g;
    const f = (b) => {
      const y = this.registry.getUserComponent(o, b);
      y && (l = y.componentFromFramework ? void 0 : y.component, c = y.componentFromFramework ? y.component : void 0, g = y.params);
    };
    if (a != null && f(a), l == null && c == null && s != null && f(s), l && i && !kc(l) && (l = (v = this.agCompUtils) == null ? void 0 : v.adaptFunction(t, l)), !l && !c) {
      const { validation: b } = this.beans;
      r && (a !== s || !s) ? a ? b != null && b.isProvidedUserComp(a) || je(50, { compName: a }) : s ? b || je(260, {
        ...this.gos.getModuleErrorParams(),
        propName: o,
        compName: s
      }) : je(216, { name: o }) : s && !b && je(146, { comp: s });
      return;
    }
    const C = this.mergeParams(e, t, n, d, g), p = l == null, m = l ?? c;
    return {
      componentFromFramework: p,
      componentClass: m,
      params: C,
      type: t,
      popupFromSelector: u,
      popupPositionFromSelector: h,
      newAgStackInstance: () => this.newAgStackInstance(m, p, C, t)
    };
  }
  newAgStackInstance(e, t, s, n) {
    var a;
    const r = !t;
    let o;
    r ? o = new e() : o = this.frameworkCompWrapper.wrap(
      e,
      n.mandatoryMethods,
      n.optionalMethods,
      n
    ), this.createBean(o);
    const i = (a = o.init) == null ? void 0 : a.call(o, s);
    return i == null ? Xe.resolve(o) : i.then(() => o);
  }
  /**
   * merges params with application provided params
   * used by Floating Filter
   */
  mergeParams(e, t, s, n = null, r) {
    const o = { ...s, ...r }, i = e, a = i && i[t.name + "Params"];
    if (typeof a == "function") {
      const l = a(s);
      Ue(o, l);
    } else typeof a == "object" && Ue(o, a);
    return Ue(o, n), o;
  }
}, Gc = {
  name: "dragAndDropImageComponent",
  mandatoryMethods: ["setIcon", "setLabel"]
}, Bc = { name: "headerComponent", optionalMethods: ["refresh"] }, Wc = { name: "innerHeaderComponent" }, Nc = { name: "innerHeaderGroupComponent" }, Vc = { name: "headerGroupComponent" }, _c = {
  name: "cellRenderer",
  optionalMethods: ["refresh", "afterGuiAttached"],
  cellRenderer: !0
}, zc = { name: "loadingCellRenderer", cellRenderer: !0 }, $c = { name: "loadingOverlayComponent", optionalMethods: ["refresh"] }, jc = { name: "noRowsOverlayComponent", optionalMethods: ["refresh"] }, Uc = {
  name: "fullWidthCellRenderer",
  optionalMethods: ["refresh", "afterGuiAttached"],
  cellRenderer: !0
}, Kc = { name: "loadingCellRenderer", cellRenderer: !0 }, Yc = {
  name: "groupRowRenderer",
  optionalMethods: ["afterGuiAttached"],
  cellRenderer: !0
}, Zc = { name: "detailCellRenderer", optionalMethods: ["refresh"], cellRenderer: !0 };
function qc(e, t) {
  return e.getCompDetailsFromGridOptions(Gc, "agDragAndDropImage", t, !0);
}
function Xc(e, t, s) {
  return e.getCompDetails(t, Bc, "agColumnHeader", s);
}
function Qc(e, t, s) {
  return e.getCompDetails(t, Wc, void 0, s);
}
function Jc(e, t) {
  const s = t.columnGroup.getColGroupDef();
  return e.getCompDetails(s, Vc, "agColumnGroupHeader", t);
}
function ed(e, t, s) {
  return e.getCompDetails(t, Nc, void 0, s);
}
function td(e, t) {
  return e.getCompDetailsFromGridOptions(Uc, void 0, t, !0);
}
function sd(e, t) {
  return e.getCompDetailsFromGridOptions(Kc, "agLoadingCellRenderer", t, !0);
}
function nd(e, t) {
  return e.getCompDetailsFromGridOptions(Yc, "agGroupRowRenderer", t, !0);
}
function rd(e, t) {
  return e.getCompDetailsFromGridOptions(Zc, "agDetailCellRenderer", t, !0);
}
function Xr(e, t, s) {
  return e.getCompDetails(t, _c, void 0, s);
}
function od(e, t, s) {
  return e.getCompDetails(t, zc, "agSkeletonCellRenderer", s, !0);
}
function id(e, t) {
  return e.getCompDetailsFromGridOptions($c, "agLoadingOverlay", t, !0);
}
function ad(e, t) {
  return e.getCompDetailsFromGridOptions(jc, "agNoRowsOverlay", t, !0);
}
var Mi = /* @__PURE__ */ new Set(), js = {}, Pt = {}, Ls, Ii = !1, Li = !1, ld = !1;
function cd(e) {
  const [t, s] = e.version.split(".") || [], [n, r] = Ls.split(".") || [];
  return t === n && s === r;
}
function dd(e) {
  Ls || (Ls = e.version);
  const t = (s) => `You are using incompatible versions of AG Grid modules. Major and minor versions should always match across modules. ${s} Please update all modules to the same version.`;
  if (e.version ? cd(e) || os(
    t(
      `'${e.moduleName}' is version ${e.version} but the other modules are version ${Ls}.`
    )
  ) : os(t(`'${e.moduleName}' is incompatible.`)), e.validate) {
    const s = e.validate();
    s.isValid || os(`${s.message}`);
  }
}
function Xn(e, t, s = !1) {
  s || (Ii = !0), dd(e);
  const n = e.rowModels ?? ["all"];
  Mi.add(e);
  let r;
  t !== void 0 ? (Li = !0, Pt[t] === void 0 && (Pt[t] = {}), r = Pt[t]) : r = js, n.forEach((o) => {
    r[o] === void 0 && (r[o] = {}), r[o][e.moduleName] = e;
  }), e.dependsOn && e.dependsOn.forEach((o) => Xn(o, t, s));
}
function ud(e) {
  delete Pt[e];
}
function Qn(e, t, s) {
  const n = (r) => {
    var o, i, a;
    return !!((o = js[r]) != null && o[e]) || !!((a = (i = Pt[t]) == null ? void 0 : i[r]) != null && a[e]);
  };
  return n(s) || n("all");
}
function Ai() {
  return Li;
}
function hd(e, t) {
  const s = Pt[e] ?? {};
  return [
    ...Object.values(js.all ?? {}),
    ...Object.values(s.all ?? {}),
    ...Object.values(js[t] ?? {}),
    ...Object.values(s[t] ?? {})
  ];
}
function gd() {
  return new Set(Mi);
}
function fd(e, t) {
  const s = Pt[e] ?? {};
  return [...Object.values(s.all ?? {}), ...Object.values(s[t] ?? {})];
}
function pd() {
  return Ii;
}
function Cd() {
  return ld;
}
var md = class {
  constructor(e) {
    this.beans = {}, this.createdBeans = [], this.destroyed = !1, !(!e || !e.beanClasses) && (this.beanDestroyComparator = e.beanDestroyComparator, this.init(e));
  }
  init(e) {
    var t;
    for (const s of Object.keys(e.providedBeanInstances))
      this.beans[s] = e.providedBeanInstances[s];
    e.beanClasses.forEach((s) => {
      const n = new s();
      n.beanName ? this.beans[n.beanName] = n : console.error(`Bean ${s.name} is missing beanName`), this.createdBeans.push(n);
    }), (t = e.derivedBeans) == null || t.forEach((s) => {
      const { beanName: n, bean: r } = s(this);
      this.beans[n] = r, this.createdBeans.push(r);
    }), e.beanInitComparator && this.createdBeans.sort(e.beanInitComparator), this.initBeans(this.createdBeans);
  }
  getBeanInstances() {
    return Object.values(this.beans);
  }
  createBean(e, t) {
    if (!e)
      throw Error("null bean");
    return this.initBeans([e], t), e;
  }
  initBeans(e, t) {
    e.forEach((s) => {
      var n, r;
      (n = s.preWireBeans) == null || n.call(s, this.beans), (r = s.wireBeans) == null || r.call(s, this.beans);
    }), e.forEach((s) => {
      var n;
      return (n = s.preConstruct) == null ? void 0 : n.call(s);
    }), t && e.forEach(t), e.forEach((s) => {
      var n;
      return (n = s.postConstruct) == null ? void 0 : n.call(s);
    });
  }
  getBeans() {
    return this.beans;
  }
  getBean(e) {
    return this.beans[e];
  }
  destroy() {
    if (this.destroyed)
      return;
    this.destroyed = !0;
    const e = this.getBeanInstances();
    this.beanDestroyComparator && e.sort(this.beanDestroyComparator), this.destroyBeans(e), this.beans = {}, this.createdBeans = [];
  }
  /**
   * Destroys a bean and returns undefined to support destruction and clean up in a single line.
   * this.dateComp = this.context.destroyBean(this.dateComp);
   */
  destroyBean(e) {
    var t;
    (t = e == null ? void 0 : e.destroy) == null || t.call(e);
  }
  /**
   * Destroys an array of beans and returns an empty array to support destruction and clean up in a single line.
   * this.dateComps = this.context.destroyBeans(this.dateComps);
   */
  destroyBeans(e) {
    if (e)
      for (let t = 0; t < e.length; t++)
        this.destroyBean(e[t]);
    return [];
  }
  isDestroyed() {
    return this.destroyed;
  }
}, wd = class extends md {
  init(e) {
    this.gridId = e.gridId, this.beans.context = this, this.destroyCallback = e.destroyCallback, super.init(e);
  }
  destroy() {
    var e;
    super.destroy(), ud(this.gridId), (e = this.destroyCallback) == null || e.call(this);
  }
  getGridId() {
    return this.gridId;
  }
}, vd = "ag-column-first", bd = "ag-column-last";
function ki(e, t, s, n) {
  return Ie(e) ? [] : Sd(e.headerClass, e, t, s, n);
}
function Hi(e, t, s) {
  e.toggleCss(vd, s.isColAtEdge(t, "first")), e.toggleCss(bd, s.isColAtEdge(t, "last"));
}
function yd(e, t, s, n) {
  return ge(t, {
    // bad naming, as colDef here can be a group or a column,
    // however most people won't appreciate the difference,
    // so keeping it as colDef to avoid confusion.
    colDef: e,
    column: s,
    columnGroup: n
  });
}
function Sd(e, t, s, n, r) {
  if (Ie(e))
    return [];
  let o;
  if (typeof e == "function") {
    const i = yd(t, s, n, r);
    o = e(i);
  } else
    o = e;
  return typeof o == "string" ? [o] : Array.isArray(o) ? [...o] : [];
}
function Rd(e) {
  return !!(e.rowPinned && e.pinnedSibling);
}
var j = {
  BACKSPACE: "Backspace",
  TAB: "Tab",
  ENTER: "Enter",
  ESCAPE: "Escape",
  SPACE: " ",
  LEFT: "ArrowLeft",
  UP: "ArrowUp",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown",
  DELETE: "Delete",
  F2: "F2",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  PAGE_HOME: "Home",
  PAGE_END: "End",
  // these should be used with `event.code` instead of `event.key`
  // as `event.key` changes when non-latin keyboards are used
  A: "KeyA",
  C: "KeyC",
  D: "KeyD",
  V: "KeyV",
  X: "KeyX",
  Y: "KeyY",
  Z: "KeyZ"
}, Jn = !1, Us = 0;
function xd(e) {
  Us > 0 || (e.addEventListener("keydown", Ks), e.addEventListener("mousedown", Ks));
}
function Fd(e) {
  Us > 0 || (e.removeEventListener("keydown", Ks), e.removeEventListener("mousedown", Ks));
}
function Ks(e) {
  const t = Jn, s = e.type === "keydown";
  s && (e.ctrlKey || e.metaKey || e.altKey) || t !== s && (Jn = s);
}
function Dd(e) {
  const t = rt(e);
  return xd(t), Us++, () => {
    Us--, Fd(t);
  };
}
function Pd() {
  return Jn;
}
function Gt(e, t, s = !1) {
  const n = yl;
  let r = Yo;
  t && (r += ", " + t), s && (r += ', [tabindex="-1"]');
  const o = Array.prototype.slice.apply(e.querySelectorAll(n)).filter((l) => $t(l)), i = Array.prototype.slice.apply(e.querySelectorAll(r));
  return i.length ? ((l, c) => l.filter((d) => c.indexOf(d) === -1))(o, i) : o;
}
function Ys(e, t = !1, s = !1, n = !1) {
  const r = Gt(
    e,
    n ? ".ag-tab-guard" : null,
    s
  ), o = t ? Ce(r) : r[0];
  return o ? (o.focus({ preventScroll: !0 }), !0) : !1;
}
function an(e, t, s, n) {
  const r = Gt(t, null), o = Oe(e);
  let i;
  i = r.indexOf(o);
  const a = i + (n ? -1 : 1);
  return a < 0 || a >= r.length ? null : r[a];
}
function Ed(e, t = 5) {
  let s = 0;
  for (; e && Wr(e) === null && ++s <= t; )
    e = e.parentElement;
  return Wr(e) === null ? null : e;
}
function Et(e) {
  var t;
  return e.gos.get("suppressHeaderFocus") || !!((t = e.overlays) != null && t.isExclusive());
}
function pr(e) {
  var t;
  return e.gos.get("suppressCellFocus") || !!((t = e.overlays) != null && t.isExclusive());
}
function cs(e, t, s = !1) {
  const n = e.ctrlsSvc.get("gridCtrl");
  return !s && n.focusNextInnerContainer(t) ? !0 : ((s || !t && !n.isDetailGrid()) && n.forceFocusOutOfContainer(t), !1);
}
function Td(e, t = !1) {
  return e === j.DELETE ? !0 : !t && e === j.BACKSPACE ? jo() : !1;
}
var Md = class extends K {
  constructor(e, t, s, n) {
    super(), this.cellCtrl = e, this.rowNode = s, this.rowCtrl = n, this.beans = t;
  }
  init() {
    this.eGui = this.cellCtrl.eGui;
  }
  onKeyDown(e) {
    const t = e.key;
    switch (t) {
      case j.ENTER:
        this.onEnterKeyDown(e);
        break;
      case j.F2:
        this.onF2KeyDown(e);
        break;
      case j.ESCAPE:
        this.onEscapeKeyDown(e);
        break;
      case j.TAB:
        this.onTabKeyDown(e);
        break;
      case j.BACKSPACE:
      case j.DELETE:
        this.onBackspaceOrDeleteKeyDown(t, e);
        break;
      case j.DOWN:
      case j.UP:
      case j.RIGHT:
      case j.LEFT:
        this.onNavigationKeyDown(e, t);
        break;
    }
  }
  onNavigationKeyDown(e, t) {
    var s;
    if (!this.cellCtrl.editing) {
      if (e.shiftKey && this.cellCtrl.isRangeSelectionEnabled())
        this.onShiftRangeSelect(e);
      else {
        const n = this.cellCtrl.getFocusedCellPosition();
        (s = this.beans.navigation) == null || s.navigateToNextCell(e, t, n, !0);
      }
      e.preventDefault();
    }
  }
  onShiftRangeSelect(e) {
    const { rangeSvc: t, navigation: s } = this.beans;
    if (!t)
      return;
    const n = t.extendLatestRangeInDirection(e);
    n && (s == null || s.ensureCellVisible(n));
  }
  onTabKeyDown(e) {
    var t;
    (t = this.beans.navigation) == null || t.onTabKeyDown(this.cellCtrl, e);
  }
  onBackspaceOrDeleteKeyDown(e, t) {
    var l;
    const { cellCtrl: s, beans: n, rowNode: r } = this, { gos: o, rangeSvc: i, eventSvc: a } = n;
    if (!s.editing) {
      if (a.dispatchEvent({ type: "keyShortcutChangedCellStart" }), Td(e, o.get("enableCellEditingOnBackspace"))) {
        if (i && ls(o))
          i.clearCellRangeCellValues({ dispatchWrapperEvents: !0, wrapperEventSource: "deleteKey" });
        else if (s.isCellEditable()) {
          const { column: c } = s, d = this.beans.valueSvc.getDeleteValue(c, r);
          r.setDataValue(c, d, "cellClear");
        }
      } else
        (l = n.editSvc) == null || l.startRowOrCellEdit(s, e, t);
      a.dispatchEvent({ type: "keyShortcutChangedCellEnd" });
    }
  }
  onEnterKeyDown(e) {
    var n, r, o;
    const { cellCtrl: t, beans: s } = this;
    if (t.editing || this.rowCtrl.editing)
      (n = this.beans.editSvc) == null || n.stopRowOrCellEdit(t, !1, !1, e.shiftKey);
    else if (s.gos.get("enterNavigatesVertically")) {
      const i = e.shiftKey ? j.UP : j.DOWN;
      (r = s.navigation) == null || r.navigateToNextCell(null, i, t.cellPosition, !1);
    } else
      (o = s.editSvc) == null || o.startRowOrCellEdit(t, j.ENTER, e), t.editing && e.preventDefault();
  }
  onF2KeyDown(e) {
    var n;
    const { cellCtrl: t, beans: s } = this;
    t.editing || (n = s.editSvc) == null || n.startRowOrCellEdit(t, j.F2, e);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onEscapeKeyDown(e) {
    var n;
    const { cellCtrl: t, beans: s } = this;
    t.editing && ((n = s.editSvc) == null || n.stopRowOrCellEdit(t, !0));
  }
  processCharacter(e) {
    var r;
    if (e.target !== this.eGui || this.cellCtrl.editing)
      return;
    const n = e.key;
    n === j.SPACE ? this.onSpaceKeyDown(e) : (r = this.beans.editSvc) != null && r.startRowOrCellEdit(this.cellCtrl, n, e) && e.preventDefault();
  }
  onSpaceKeyDown(e) {
    var s;
    const { gos: t } = this.beans;
    !this.cellCtrl.editing && ci(t) && ((s = this.beans.selectionSvc) == null || s.handleSelectionEvent(e, this.rowNode, "spaceKey")), e.preventDefault();
  }
  destroy() {
    super.destroy();
  }
}, Id = class extends K {
  constructor(e, t, s) {
    super(), this.cellCtrl = e, this.column = s, this.beans = t;
  }
  onMouseEvent(e, t) {
    if (!mt(t))
      switch (e) {
        case "click":
          this.onCellClicked(t);
          break;
        case "mousedown":
        case "touchstart":
          this.onMouseDown(t);
          break;
        case "dblclick":
          this.onCellDoubleClicked(t);
          break;
        case "mouseout":
          this.onMouseOut(t);
          break;
        case "mouseover":
          this.onMouseOver(t);
          break;
      }
  }
  onCellClicked(e) {
    var c;
    if ((c = this.beans.touchSvc) != null && c.handleCellDoubleClick(this, e))
      return;
    const { eventSvc: t, rangeSvc: s, gos: n, editSvc: r } = this.beans, o = e.ctrlKey || e.metaKey;
    s && o && s.getCellRangeCount(this.cellCtrl.cellPosition) > 1 && s.intersectLastRange(!0);
    const i = this.cellCtrl.createEvent(e, "cellClicked");
    t.dispatchEvent(i);
    const a = this.column.getColDef();
    a.onCellClicked && window.setTimeout(() => {
      this.beans.frameworkOverrides.wrapOutgoing(() => {
        a.onCellClicked(i);
      });
    }, 0), (n.get("singleClickEdit") || a.singleClickEdit) && !n.get("suppressClickEdit") && !(e.shiftKey && (s == null ? void 0 : s.getCellRanges().length) != 0) && (r == null || r.startRowOrCellEdit(this.cellCtrl, void 0, e));
  }
  onCellDoubleClicked(e) {
    const { column: t, beans: s, cellCtrl: n } = this, { eventSvc: r, frameworkOverrides: o, gos: i, editSvc: a } = s, l = t.getColDef(), c = n.createEvent(e, "cellDoubleClicked");
    r.dispatchEvent(c), typeof l.onCellDoubleClicked == "function" && window.setTimeout(() => {
      o.wrapOutgoing(() => {
        l.onCellDoubleClicked(c);
      });
    }, 0), !i.get("singleClickEdit") && !i.get("suppressClickEdit") && (a == null || a.startRowOrCellEdit(n, null, e));
  }
  onMouseDown(e) {
    const { ctrlKey: t, metaKey: s, shiftKey: n } = e, r = e.target, { cellCtrl: o, beans: i } = this, { eventSvc: a, rangeSvc: l, rowNumbersSvc: c, focusSvc: d, gos: u } = i;
    if (this.isRightClickInExistingRange(e))
      return;
    const h = l && !l.isEmpty(), g = this.containsWidget(r), { cellPosition: f } = o, C = is(f.column);
    if (c && C && !c.handleMouseDownOnCell(f, e)) {
      l && e.preventDefault(), e.stopImmediatePropagation();
      return;
    }
    if (!n || !h) {
      const m = u.get("enableCellTextSelection") && e.defaultPrevented, v = (ar() || m) && !o.editing && !lr(r) && !g;
      o.focusCell(v);
    }
    if (n && h && !d.isCellFocused(f)) {
      e.preventDefault();
      const p = d.getFocusedCell();
      if (p) {
        const { column: m, rowIndex: v, rowPinned: b } = p, y = i.rowRenderer.getRowByPosition({ rowIndex: v, rowPinned: b }), F = y == null ? void 0 : y.getCellCtrl(m);
        F != null && F.editing && F.stopEditing(), d.setFocusedCell({
          column: m,
          rowIndex: v,
          rowPinned: b,
          forceBrowserFocus: !0,
          preventScrollOnBrowserFocus: !0
        });
      }
    }
    if (!g) {
      if (l)
        if (C && e.preventDefault(), n)
          l.extendLatestRangeToCell(f);
        else {
          const p = t || s;
          l.setRangeToCell(f, p);
        }
      a.dispatchEvent(this.cellCtrl.createEvent(e, "cellMouseDown"));
    }
  }
  isRightClickInExistingRange(e) {
    const { rangeSvc: t } = this.beans;
    if (t) {
      const s = t.isCellInAnyRange(this.cellCtrl.cellPosition), n = e.button === 2 || e.ctrlKey && this.beans.gos.get("allowContextMenuWithControlKey");
      if (s && n)
        return !0;
    }
    return !1;
  }
  containsWidget(e) {
    return Ht(e, "ag-selection-checkbox", 3) || Ht(e, "ag-drag-handle", 3);
  }
  onMouseOut(e) {
    if (this.mouseStayingInsideCell(e))
      return;
    const { eventSvc: t, colHover: s } = this.beans;
    t.dispatchEvent(this.cellCtrl.createEvent(e, "cellMouseOut")), s == null || s.clearMouseOver();
  }
  onMouseOver(e) {
    if (this.mouseStayingInsideCell(e))
      return;
    const { eventSvc: t, colHover: s } = this.beans;
    t.dispatchEvent(this.cellCtrl.createEvent(e, "cellMouseOver")), s == null || s.setMouseOver([this.column]);
  }
  mouseStayingInsideCell(e) {
    if (!e.target || !e.relatedTarget)
      return !1;
    const t = this.cellCtrl.eGui, s = t.contains(e.target), n = t.contains(e.relatedTarget);
    return s && n;
  }
  destroy() {
    super.destroy();
  }
}, Ld = class extends K {
  constructor(e, t) {
    super(), this.cellCtrl = e, this.beans = t, this.column = e.column, this.rowNode = e.rowNode;
  }
  setupRowSpan() {
    this.rowSpan = this.column.getRowSpan(this.rowNode), this.addManagedListeners(this.beans.eventSvc, { newColumnsLoaded: () => this.onNewColumnsLoaded() });
  }
  init() {
    this.eSetLeft = this.cellCtrl.getRootElement(), this.eContent = this.cellCtrl.eGui;
    const e = this.cellCtrl.getCellSpan();
    if (e || (this.setupColSpan(), this.setupRowSpan()), this.onLeftChanged(), this.onWidthChanged(), e || this._legacyApplyRowSpan(), e) {
      const t = this.refreshSpanHeight.bind(this, e);
      t(), this.addManagedListeners(this.beans.eventSvc, {
        paginationChanged: t,
        recalculateRowBounds: t,
        pinnedHeightChanged: t
      });
    }
  }
  refreshSpanHeight(e) {
    const t = e.getCellHeight();
    t != null && (this.eContent.style.height = `${t}px`);
  }
  onNewColumnsLoaded() {
    const e = this.column.getRowSpan(this.rowNode);
    this.rowSpan !== e && (this.rowSpan = e, this._legacyApplyRowSpan(!0));
  }
  onDisplayColumnsChanged() {
    const e = this.getColSpanningList();
    nn(this.colsSpanning, e) || (this.colsSpanning = e, this.onWidthChanged(), this.onLeftChanged());
  }
  setupColSpan() {
    this.column.getColDef().colSpan != null && (this.colsSpanning = this.getColSpanningList(), this.addManagedListeners(this.beans.eventSvc, {
      // because we are col spanning, a reorder of the cols can change what cols we are spanning over
      displayedColumnsChanged: this.onDisplayColumnsChanged.bind(this),
      // because we are spanning over multiple cols, we check for width any time any cols width changes.
      // this is expensive - really we should be explicitly checking only the cols we are spanning over
      // instead of every col, however it would be tricky code to track the cols we are spanning over, so
      // because hardly anyone will be using colSpan, am favouring this easier way for more maintainable code.
      displayedColumnsWidthChanged: this.onWidthChanged.bind(this)
    }));
  }
  onWidthChanged() {
    if (!this.eContent)
      return;
    const e = this.getCellWidth();
    this.eContent.style.width = `${e}px`;
  }
  getCellWidth() {
    return this.colsSpanning ? this.colsSpanning.reduce((e, t) => e + t.getActualWidth(), 0) : this.column.getActualWidth();
  }
  getColSpanningList() {
    const { column: e, rowNode: t } = this, s = e.getColSpan(t), n = [];
    if (s === 1)
      n.push(e);
    else {
      let r = e;
      const o = e.getPinned();
      for (let i = 0; r && i < s && (n.push(r), r = this.beans.visibleCols.getColAfter(r), !(!r || Ie(r) || o !== r.getPinned())); i++)
        ;
    }
    return n;
  }
  onLeftChanged() {
    if (!this.eSetLeft)
      return;
    const e = this.modifyLeftForPrintLayout(this.getCellLeft());
    this.eSetLeft.style.left = e + "px";
  }
  getCellLeft() {
    let e;
    return this.beans.gos.get("enableRtl") && this.colsSpanning ? e = Ce(this.colsSpanning) : e = this.column, e.getLeft();
  }
  modifyLeftForPrintLayout(e) {
    if (!this.cellCtrl.printLayout || this.column.getPinned() === "left")
      return e;
    const { visibleCols: t } = this.beans, s = t.getColsLeftWidth();
    if (this.column.getPinned() === "right") {
      const n = t.bodyWidth;
      return s + n + (e || 0);
    }
    return s + (e || 0);
  }
  _legacyApplyRowSpan(e) {
    if (this.rowSpan === 1 && !e)
      return;
    const s = ui(this.beans) * this.rowSpan;
    this.eContent.style.height = `${s}px`, this.eContent.style.zIndex = "1";
  }
  // overriding to make public, as we don't dispose this bean via context
  destroy() {
    super.destroy();
  }
}, Ad = "ag-cell", kd = "ag-cell-auto-height", Hd = "ag-cell-normal-height", Od = "ag-cell-focus", Gd = "ag-cell-first-right-pinned", Bd = "ag-cell-last-left-pinned", Wd = "ag-cell-not-inline-editing", Nd = "ag-cell-wrap-text", Zs = "cellCtrl";
function Oi(e, t) {
  return wi(e, t, Zs);
}
var Vd = 0, As = class extends K {
  constructor(e, t, s, n) {
    super(), this.column = e, this.rowNode = t, this.rowCtrl = n, this.rangeFeature = void 0, this.rowResizeFeature = void 0, this.positionFeature = void 0, this.customStyleFeature = void 0, this.tooltipFeature = void 0, this.mouseListener = void 0, this.keyboardListener = void 0, this.suppressRefreshCell = !1, this.onCompAttachedFuncs = [], this.onEditorAttachedFuncs = [], this.focusEventWhileNotReady = null, this.hasBeenFocused = !1, this.beans = s;
    const { colId: r } = e;
    this.instanceId = r + "-" + Vd++, this.createCellPosition(), this.updateAndFormatValue(!1);
  }
  addFeatures() {
    var n;
    const { beans: e } = this;
    this.positionFeature = new Ld(this, e), this.customStyleFeature = (n = e.cellStyles) == null ? void 0 : n.createCellCustomStyleFeature(this, e), this.mouseListener = new Id(this, e, this.column), this.keyboardListener = new Md(this, e, this.rowNode, this.rowCtrl), this.column.isTooltipEnabled() && this.enableTooltipFeature();
    const { rangeSvc: t } = e;
    t && ls(e.gos) && (this.rangeFeature = t.createCellRangeFeature(e, this)), is(this.column) && (this.rowResizeFeature = this.beans.rowNumbersSvc.createRowNumbersRowResizerFeature(e, this));
  }
  isCellSpanning() {
    return !1;
  }
  getCellSpan() {
  }
  removeFeatures() {
    const e = this.beans.context;
    this.positionFeature = e.destroyBean(this.positionFeature), this.customStyleFeature = e.destroyBean(this.customStyleFeature), this.mouseListener = e.destroyBean(this.mouseListener), this.keyboardListener = e.destroyBean(this.keyboardListener), this.rangeFeature = e.destroyBean(this.rangeFeature), this.rowResizeFeature = e.destroyBean(this.rowResizeFeature), this.disableTooltipFeature();
  }
  enableTooltipFeature(e, t) {
    var s;
    this.tooltipFeature = (s = this.beans.tooltipSvc) == null ? void 0 : s.enableCellTooltipFeature(this, e, t);
  }
  disableTooltipFeature() {
    this.tooltipFeature = this.beans.context.destroyBean(this.tooltipFeature);
  }
  setComp(e, t, s, n, r, o, i) {
    var a, l, c, d, u, h, g;
    this.comp = e, this.eGui = t, this.printLayout = r, i ?? (i = this), this.addDomData(i), this.addFeatures(), i.addDestroyFunc(() => this.removeFeatures()), this.onSuppressCellFocusChanged(this.beans.gos.get("suppressCellFocus")), this.setupFocus(), this.applyStaticCssClasses(), this.setWrapText(), this.onFirstRightPinnedChanged(), this.onLastLeftPinnedChanged(), this.onColumnHover(), this.setupControlComps(), this.setupAutoHeight(n, i), this.refreshFirstAndLastStyles(), this.refreshAriaColIndex(), (a = this.positionFeature) == null || a.init(), (l = this.customStyleFeature) == null || l.setComp(e), (c = this.tooltipFeature) == null || c.refreshTooltip(), (d = this.keyboardListener) == null || d.init(), (u = this.rangeFeature) == null || u.setComp(e), (h = this.rowResizeFeature) == null || h.refreshRowResizer(), o && this.isCellEditable() ? (g = this.beans.editSvc) == null || g.startEditing(this) : this.showValue(!1, !0), this.onCompAttachedFuncs.length && (this.onCompAttachedFuncs.forEach((f) => f()), this.onCompAttachedFuncs = []);
  }
  setupAutoHeight(e, t) {
    var s;
    this.isAutoHeight = ((s = this.beans.rowAutoHeight) == null ? void 0 : s.setupCellAutoHeight(this, e, t)) ?? !1;
  }
  getCellAriaRole() {
    return this.column.getColDef().cellAriaRole ?? "gridcell";
  }
  isCellRenderer() {
    const e = this.column.getColDef();
    return e.cellRenderer != null || e.cellRendererSelector != null;
  }
  getValueToDisplay() {
    return this.valueFormatted ?? this.value;
  }
  showValue(e, t) {
    var u, h, g;
    const { beans: s, column: n, rowNode: r, rangeFeature: o } = this, { userCompFactory: i } = s, a = this.getValueToDisplay();
    let l;
    const c = r.stub && ((u = r.groupData) == null ? void 0 : u[n.getId()]) == null, d = n.getColDef();
    if (c || this.isCellRenderer()) {
      const f = this.createCellRendererParams();
      !c || is(n) ? l = Xr(i, d, f) : l = od(i, d, f);
    }
    if (!l && !c && ((h = s.findSvc) != null && h.isMatch(r, n))) {
      const f = this.createCellRendererParams();
      l = Xr(
        i,
        { ...n.getColDef(), cellRenderer: "agFindCellRenderer" },
        f
      );
    }
    this.comp.setRenderDetails(l, a, e), !t && o && yt(s, () => o == null ? void 0 : o.refreshHandle()), (g = this.rowResizeFeature) == null || g.refreshRowResizer();
  }
  setupControlComps() {
    const e = this.column.getColDef();
    this.includeSelection = this.isIncludeControl(this.isCheckboxSelection(e), !0), this.includeRowDrag = this.isIncludeControl(e.rowDrag), this.includeDndSource = this.isIncludeControl(e.dndSource), this.comp.setIncludeSelection(this.includeSelection), this.comp.setIncludeDndSource(this.includeDndSource), this.comp.setIncludeRowDrag(this.includeRowDrag);
  }
  isForceWrapper() {
    return this.beans.gos.get("enableCellTextSelection") || this.column.isAutoHeight();
  }
  /**
   * Wrapper providing general conditions under which control elements (e.g. checkboxes and drag handles)
   * are rendered for a particular cell.
   * @param value Whether to render the control in the specific context of the caller
   * @param allowManuallyPinned Whether manually pinned rows are permitted this form of control element
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  isIncludeControl(e, t = !1) {
    return (this.rowNode.rowPinned == null || t && Rd(this.rowNode)) && !!e;
  }
  isCheckboxSelection(e) {
    const { rowSelection: t, groupDisplayType: s } = this.beans.gridOptions, n = Kl(t), r = yi(this.column);
    return s === "custom" && n !== "selectionColumn" && r ? !1 : e.checkboxSelection || r && typeof t == "object" && Ul(t);
  }
  refreshShouldDestroy() {
    const e = this.column.getColDef(), t = this.includeSelection != this.isIncludeControl(this.isCheckboxSelection(e), !0), s = this.includeRowDrag != this.isIncludeControl(e.rowDrag), n = this.includeDndSource != this.isIncludeControl(e.dndSource), r = this.isAutoHeight != this.column.isAutoHeight();
    return t || s || n || r;
  }
  onPopupEditorClosed() {
    var e;
    this.editing && ((e = this.beans.editSvc) == null || e.stopRowOrCellEdit(this));
  }
  /**
   * Ends the Cell Editing
   * @param cancel `True` if the edit process is being canceled.
   * @returns `True` if the value of the `GridCell` has been updated, otherwise `False`.
   */
  stopEditing(e = !1) {
    var t;
    return ((t = this.beans.editSvc) == null ? void 0 : t.stopEditing(this, e)) ?? !1;
  }
  createCellRendererParams() {
    const {
      value: e,
      valueFormatted: t,
      column: s,
      rowNode: n,
      comp: r,
      eGui: o,
      beans: { valueSvc: i, gos: a }
    } = this;
    return ge(a, {
      value: e,
      valueFormatted: t,
      getValue: () => i.getValueForDisplay(s, n).value,
      setValue: (c) => i.setValue(n, s, c),
      formatValue: this.formatValue.bind(this),
      data: n.data,
      node: n,
      pinned: s.getPinned(),
      colDef: s.getColDef(),
      column: s,
      refreshCell: this.refreshCell.bind(this),
      eGridCell: o,
      eParentOfValue: r.getParentOfValue(),
      registerRowDragger: (c, d, u, h) => this.registerRowDragger(c, d, h),
      setTooltip: (c, d) => {
        var u;
        a.assertModuleRegistered("Tooltip", 3), this.tooltipFeature && this.disableTooltipFeature(), this.enableTooltipFeature(c, d), (u = this.tooltipFeature) == null || u.refreshTooltip();
      }
    });
  }
  onCellChanged(e) {
    e.column === this.column && this.refreshCell({});
  }
  refreshOrDestroyCell(e) {
    var t;
    this.refreshShouldDestroy() ? (t = this.rowCtrl) == null || t.recreateCell(this) : this.refreshCell(e);
  }
  // + stop editing {forceRefresh: true, suppressFlash: true}
  // + event cellChanged {}
  // + cellRenderer.params.refresh() {} -> method passes 'as is' to the cellRenderer, so params could be anything
  // + rowCtrl: event dataChanged {suppressFlash: !update, newData: !update}
  // + rowCtrl: api refreshCells() {animate: true/false}
  // + rowRenderer: api softRefreshView() {}
  refreshCell(e) {
    var c, d, u, h, g, f;
    if (this.suppressRefreshCell || this.editing)
      return;
    const t = this.column.getColDef(), s = e != null && !!e.newData, n = e != null && !!e.suppressFlash, r = t.field == null && t.valueGetter == null && t.showRowGroup == null, o = e && e.forceRefresh || r || s, i = !!this.comp, a = this.updateAndFormatValue(i), l = o || a;
    if (i) {
      if (l) {
        this.showValue(s, !1);
        const C = (c = this.beans.filterManager) == null ? void 0 : c.isSuppressFlashingCellsBecauseFiltering();
        !n && !C && t.enableCellChangeFlash && ((d = this.beans.cellFlashSvc) == null || d.flashCell(this)), (u = this.customStyleFeature) == null || u.applyUserStyles(), (h = this.customStyleFeature) == null || h.applyClassesFromColDef();
      }
      (g = this.tooltipFeature) == null || g.refreshTooltip(), (f = this.customStyleFeature) == null || f.applyCellClassRules();
    }
  }
  isCellEditable() {
    return this.column.isCellEditable(this.rowNode);
  }
  formatValue(e) {
    return this.callValueFormatter(e) ?? e;
  }
  callValueFormatter(e) {
    return this.beans.valueSvc.formatValue(this.column, this.rowNode, e);
  }
  updateAndFormatValue(e) {
    const t = this.value, s = this.valueFormatted, { value: n, valueFormatted: r } = this.beans.valueSvc.getValueForDisplay(this.column, this.rowNode, !0);
    return this.value = n, this.valueFormatted = r, e ? !this.valuesAreEqual(t, this.value) || this.valueFormatted != s : !0;
  }
  valuesAreEqual(e, t) {
    const s = this.column.getColDef();
    return s.equals ? s.equals(e, t) : e === t;
  }
  addDomData(e) {
    const t = this.eGui;
    Wt(this.beans.gos, t, Zs, this), e.addDestroyFunc(() => Wt(this.beans.gos, t, Zs, null));
  }
  createEvent(e, t) {
    const { rowNode: s, column: n, value: r, beans: o } = this;
    return ge(o.gos, {
      type: t,
      node: s,
      data: s.data,
      value: r,
      column: n,
      colDef: n.getColDef(),
      rowPinned: s.rowPinned,
      event: e,
      rowIndex: s.rowIndex
    });
  }
  processCharacter(e) {
    var t;
    (t = this.keyboardListener) == null || t.processCharacter(e);
  }
  onKeyDown(e) {
    var t;
    (t = this.keyboardListener) == null || t.onKeyDown(e);
  }
  onMouseEvent(e, t) {
    var s;
    (s = this.mouseListener) == null || s.onMouseEvent(e, t);
  }
  getColSpanningList() {
    return this.positionFeature.getColSpanningList();
  }
  onLeftChanged() {
    var e;
    this.comp && ((e = this.positionFeature) == null || e.onLeftChanged());
  }
  onDisplayedColumnsChanged() {
    this.eGui && (this.refreshAriaColIndex(), this.refreshFirstAndLastStyles());
  }
  refreshFirstAndLastStyles() {
    const { comp: e, column: t, beans: s } = this;
    Hi(e, t, s.visibleCols);
  }
  refreshAriaColIndex() {
    const e = this.beans.visibleCols.getAriaColIndex(this.column);
    zo(this.eGui, e);
  }
  onWidthChanged() {
    var e;
    return (e = this.positionFeature) == null ? void 0 : e.onWidthChanged();
  }
  getRowPosition() {
    const { rowIndex: e, rowPinned: t } = this.cellPosition;
    return {
      rowIndex: e,
      rowPinned: t
    };
  }
  updateRangeBordersIfRangeCount() {
    var e;
    this.comp && ((e = this.rangeFeature) == null || e.updateRangeBordersIfRangeCount());
  }
  onCellSelectionChanged() {
    var e;
    this.comp && ((e = this.rangeFeature) == null || e.onCellSelectionChanged());
  }
  isRangeSelectionEnabled() {
    return this.rangeFeature != null;
  }
  focusCell(e = !1) {
    this.beans.focusSvc.setFocusedCell({
      ...this.getFocusedCellPosition(),
      forceBrowserFocus: e
    });
  }
  /**
   * Restores focus to the cell, if it should have it
   * @param waitForRender if the cell has just setComp, it may not be rendered yet, so we wait for the next render
   */
  restoreFocus(e = !1) {
    if (!this.comp || this.editing || !this.isCellFocused() || !this.beans.focusSvc.shouldTakeFocus())
      return;
    const t = () => {
      if (!this.isAlive())
        return;
      const s = this.comp.getFocusableElement();
      this.isCellFocused() && s.focus({ preventScroll: !0 });
    };
    if (e) {
      setTimeout(t, 0);
      return;
    }
    t();
  }
  onRowIndexChanged() {
    var e, t;
    this.createCellPosition(), this.onCellFocused(), this.restoreFocus(), (e = this.rangeFeature) == null || e.onCellSelectionChanged(), (t = this.rowResizeFeature) == null || t.refreshRowResizer();
  }
  onSuppressCellFocusChanged(e) {
    const t = this.eGui;
    t && (is(this.column) && (e = !0), Ot(t, "tabindex", e ? void 0 : -1));
  }
  onFirstRightPinnedChanged() {
    if (!this.comp)
      return;
    const e = this.column.isFirstRightPinned();
    this.comp.toggleCss(Gd, e);
  }
  onLastLeftPinnedChanged() {
    if (!this.comp)
      return;
    const e = this.column.isLastLeftPinned();
    this.comp.toggleCss(Bd, e);
  }
  /**
   * Returns whether cell is focused by the focusSvc, overridden by spannedCellCtrl
   */
  checkCellFocused() {
    return this.beans.focusSvc.isCellFocused(this.cellPosition);
  }
  isCellFocused() {
    const e = this.checkCellFocused();
    return this.hasBeenFocused || (this.hasBeenFocused = e), e;
  }
  setupFocus() {
    this.restoreFocus(!0), this.onCellFocused(this.focusEventWhileNotReady ?? void 0);
  }
  onCellFocused(e) {
    var r;
    const { beans: t } = this;
    if (pr(t))
      return;
    if (!this.comp) {
      e && (this.focusEventWhileNotReady = e);
      return;
    }
    const s = this.isCellFocused();
    if (this.comp.toggleCss(Od, s), s && e && e.forceBrowserFocus) {
      let o = this.comp.getFocusableElement();
      if (this.editing) {
        const i = Gt(o, null, !0);
        i.length && (o = i[0]);
      }
      o.focus({ preventScroll: !!e.preventScrollOnBrowserFocus });
    }
    const n = t.gos.get("editType") === "fullRow";
    !s && !n && this.editing && ((r = t.editSvc) == null || r.stopRowOrCellEdit(this)), s && this.rowCtrl.announceDescription();
  }
  createCellPosition() {
    const { rowIndex: e, rowPinned: t } = this.rowNode;
    this.cellPosition = {
      rowIndex: e,
      rowPinned: Dt(t),
      column: this.column
    };
  }
  setInlineEditingCss() {
    var e;
    (e = this.beans.editSvc) == null || e.setInlineEditingCss(this.rowCtrl);
  }
  // CSS Classes that only get applied once, they never change
  applyStaticCssClasses() {
    const { comp: e } = this;
    e.toggleCss(Ad, !0), e.toggleCss(Wd, !0);
    const t = this.column.isAutoHeight() == !0;
    e.toggleCss(kd, t), e.toggleCss(Hd, !t);
  }
  onColumnHover() {
    var e;
    (e = this.beans.colHover) == null || e.onCellColumnHover(this.column, this.comp);
  }
  onColDefChanged() {
    var e;
    this.comp && (this.column.isTooltipEnabled() ? (this.disableTooltipFeature(), this.enableTooltipFeature()) : this.disableTooltipFeature(), this.setWrapText(), this.editing ? (e = this.beans.editSvc) == null || e.handleColDefChanged(this) : this.refreshOrDestroyCell({ forceRefresh: !0, suppressFlash: !0 }));
  }
  setWrapText() {
    const e = this.column.getColDef().wrapText == !0;
    this.comp.toggleCss(Nd, e);
  }
  dispatchCellContextMenuEvent(e) {
    const t = this.column.getColDef(), s = this.createEvent(e, "cellContextMenu"), { beans: n } = this;
    n.eventSvc.dispatchEvent(s), t.onCellContextMenu && window.setTimeout(() => {
      n.frameworkOverrides.wrapOutgoing(() => {
        t.onCellContextMenu(s);
      });
    }, 0);
  }
  getCellRenderer() {
    var e;
    return ((e = this.comp) == null ? void 0 : e.getCellRenderer()) ?? null;
  }
  destroy() {
    this.onCompAttachedFuncs = [], this.onEditorAttachedFuncs = [], this.isCellFocused() && this.hasBrowserFocus() && this.beans.focusSvc.attemptToRecoverFocus(), super.destroy();
  }
  hasBrowserFocus() {
    var e;
    return ((e = this.eGui) == null ? void 0 : e.contains(Oe(this.beans))) ?? !1;
  }
  createSelectionCheckbox() {
    var t;
    const e = (t = this.beans.selectionSvc) == null ? void 0 : t.createCheckboxSelectionComponent();
    if (e)
      return this.beans.context.createBean(e), e.init({ rowNode: this.rowNode, column: this.column }), e;
  }
  createDndSource() {
    const e = this.beans.registry.createDynamicBean(
      "dndSourceComp",
      !1,
      this.rowNode,
      this.column,
      this.eGui
    );
    return e && this.beans.context.createBean(e), e;
  }
  registerRowDragger(e, t, s) {
    if (this.customRowDragComp) {
      this.customRowDragComp.setDragElement(e, t);
      return;
    }
    const n = this.createRowDragComp(e, t, s);
    n && (this.customRowDragComp = n, this.addDestroyFunc(() => {
      this.beans.context.destroyBean(n), this.customRowDragComp = null;
    }));
  }
  createRowDragComp(e, t, s) {
    var r;
    const n = (r = this.beans.rowDragSvc) == null ? void 0 : r.createRowDragCompForCell(
      this.rowNode,
      this.column,
      () => this.value,
      e,
      t,
      s
    );
    if (n)
      return this.beans.context.createBean(n), n;
  }
  cellEditorAttached() {
    this.onEditorAttachedFuncs.forEach((e) => e()), this.onEditorAttachedFuncs = [];
  }
  setFocusedCellPosition(e) {
  }
  getFocusedCellPosition() {
    return this.cellPosition;
  }
  // used by spannedCellCtrl
  refreshAriaRowIndex() {
  }
  /**
   * Returns the root element of the cell, could be a span container rather than the cell element.
   * @returns The root element of the cell.
   */
  getRootElement() {
    return this.eGui;
  }
}, Gi = "__ag_grid_instance";
function Bi(e, t) {
  t[Gi] = e.gridInstanceId;
}
function ds(e, t) {
  return _d(e, t.target);
}
function _d(e, t) {
  let s = t;
  for (; s; ) {
    const n = s[Gi];
    if (te(n))
      return n === e.gridInstanceId;
    s = s.parentElement;
  }
  return !1;
}
function zd(e, t) {
  var s;
  return ((s = Oi(e, t.target)) == null ? void 0 : s.getFocusedCellPosition()) ?? null;
}
var $d = class extends K {
  constructor() {
    super(...arguments), this.beanName = "dragAndDrop", this.dragSourceAndParamsList = [], this.dropTargets = [];
  }
  wireBeans(e) {
    this.ctrlsSvc = e.ctrlsSvc, this.dragSvc = e.dragSvc, this.environment = e.environment, this.userCompFactory = e.userCompFactory;
  }
  addDragSource(e, t = !1) {
    const s = {
      eElement: e.eElement,
      dragStartPixels: e.dragStartPixels,
      onDragStart: this.onDragStart.bind(this, e),
      onDragStop: this.onDragStop.bind(this),
      onDragging: this.onDragging.bind(this),
      onDragCancel: this.onDragCancel.bind(this),
      includeTouch: t
    };
    this.dragSourceAndParamsList.push({ params: s, dragSource: e }), this.dragSvc.addDragSource(s);
  }
  getDragAndDropImageComponent() {
    const { dragAndDropImageComp: e } = this;
    return !e || !e.comp ? null : e.comp;
  }
  removeDragSource(e) {
    const { dragSourceAndParamsList: t, dragSvc: s } = this, n = t.find((r) => r.dragSource === e);
    n && (s.removeDragSource(n.params), vt(t, n));
  }
  destroy() {
    const { dragSourceAndParamsList: e, dragSvc: t, dropTargets: s } = this;
    e.forEach((n) => t.removeDragSource(n.params)), e.length = 0, s.length = 0, this.clearDragAndDropProperties(), super.destroy();
  }
  nudge() {
    this.dragging && this.onDragging(this.eventLastTime, !0);
  }
  onDragStart(e, t) {
    var s;
    this.dragging = !0, this.dragSource = e, this.eventLastTime = t, this.dragItem = e.getDragItem(), (s = e.onDragStarted) == null || s.call(e), this.createDragAndDropImageComponent();
  }
  onDragStop(e) {
    var s, n;
    (n = (s = this.dragSource) == null ? void 0 : s.onDragStopped) == null || n.call(s);
    const { lastDropTarget: t } = this;
    if (t != null && t.onDragStop) {
      const r = this.createDropTargetEvent(t, e, null, null, !1);
      t.onDragStop(r);
    }
    this.clearDragAndDropProperties();
  }
  onDragCancel() {
    var s;
    const { dragSource: e, lastDropTarget: t } = this;
    (s = e == null ? void 0 : e.onDragCancelled) == null || s.call(e), t != null && t.onDragCancel && t.onDragCancel(
      this.createDropTargetEvent(t, this.eventLastTime, null, null, !1)
    ), this.clearDragAndDropProperties();
  }
  clearDragAndDropProperties() {
    this.eventLastTime = null, this.dragging = !1, this.lastDropTarget = void 0, this.dragItem = null, this.dragSource = null, this.removeDragAndDropImageComponent();
  }
  onDragging(e, t = !1) {
    var d, u;
    const s = this.getHorizontalDirection(e), n = this.getVerticalDirection(e);
    this.eventLastTime = e, this.positionDragAndDropImageComp(e);
    const r = this.dropTargets.filter((h) => this.isMouseOnDropTarget(e, h)), o = this.findCurrentDropTarget(e, r), { lastDropTarget: i, dragSource: a, dragAndDropImageComp: l, dragItem: c } = this;
    if (o !== i) {
      if (this.leaveLastTargetIfExists(e, s, n, t), i !== null && o === null && ((d = a == null ? void 0 : a.onGridExit) == null || d.call(a, c)), i === null && o !== null && ((u = a == null ? void 0 : a.onGridEnter) == null || u.call(a, c)), this.enterDragTargetIfExists(o, e, s, n, t), o && l) {
        const { comp: h, promise: g } = l;
        h ? h.setIcon(o.getIconName ? o.getIconName() : null, !1) : g.then((f) => {
          f && f.setIcon(o.getIconName ? o.getIconName() : null, !1);
        });
      }
      this.lastDropTarget = o;
    } else if (o && o.onDragging) {
      const h = this.createDropTargetEvent(o, e, s, n, t);
      o.onDragging(h);
    }
  }
  getAllContainersFromDropTarget(e) {
    const t = e.getSecondaryContainers ? e.getSecondaryContainers() : null, s = [[e.getContainer()]];
    return t ? s.concat(t) : s;
  }
  // checks if the mouse is on the drop target. it checks eContainer and eSecondaryContainers
  isMouseOnDropTarget(e, t) {
    const s = this.getAllContainersFromDropTarget(t);
    let n = !1;
    const r = (a, l) => {
      for (const c of l) {
        const { width: d, height: u, left: h, right: g, top: f, bottom: C } = c.getBoundingClientRect();
        if (d === 0 || u === 0)
          return !1;
        const p = a.clientX >= h && a.clientX < g, m = a.clientY >= f && a.clientY < C;
        if (!p || !m)
          return !1;
      }
      return !0;
    };
    for (const a of s)
      if (r(e, a)) {
        n = !0;
        break;
      }
    const { eElement: o, type: i } = this.dragSource;
    return t.targetContainsSource && !t.getContainer().contains(o) ? !1 : n && t.isInterestedIn(i, o);
  }
  findCurrentDropTarget(e, t) {
    const s = t.length;
    if (s === 0)
      return null;
    if (s === 1)
      return t[0];
    const r = as(this.beans).elementsFromPoint(e.clientX, e.clientY);
    for (const o of r)
      for (const i of t)
        if (this.getAllContainersFromDropTarget(i).flatMap((l) => l).indexOf(o) !== -1)
          return i;
    return null;
  }
  enterDragTargetIfExists(e, t, s, n, r) {
    if (e && e.onDragEnter) {
      const o = this.createDropTargetEvent(
        e,
        t,
        s,
        n,
        r
      );
      e.onDragEnter(o);
    }
  }
  leaveLastTargetIfExists(e, t, s, n) {
    const { lastDropTarget: r } = this;
    if (!r)
      return;
    if (r.onDragLeave) {
      const i = this.createDropTargetEvent(
        r,
        e,
        t,
        s,
        n
      );
      r.onDragLeave(i);
    }
    const o = this.getDragAndDropImageComponent();
    o && o.setIcon(null, !1);
  }
  addDropTarget(e) {
    this.dropTargets.push(e);
  }
  removeDropTarget(e) {
    this.dropTargets = this.dropTargets.filter((t) => t.getContainer() !== e.getContainer());
  }
  hasExternalDropZones() {
    return this.dropTargets.some((e) => e.external);
  }
  findExternalZone(e) {
    return this.dropTargets.filter((s) => s.external).find((s) => s.getContainer() === e.getContainer()) || null;
  }
  isDropZoneWithinThisGrid(e) {
    const s = this.ctrlsSvc.getGridBodyCtrl().eGridBody, { dropZoneTarget: n } = e;
    return s.contains(n);
  }
  getHorizontalDirection(e) {
    var n;
    const t = (n = this.eventLastTime) == null ? void 0 : n.clientX, s = e.clientX;
    return t === s ? null : t > s ? "left" : "right";
  }
  getVerticalDirection(e) {
    var n;
    const t = (n = this.eventLastTime) == null ? void 0 : n.clientY, s = e.clientY;
    return t === s ? null : t > s ? "up" : "down";
  }
  createDropTargetEvent(e, t, s, n, r) {
    const o = e.getContainer(), i = o.getBoundingClientRect(), { dragItem: a, dragSource: l, gos: c } = this, d = t.clientX - i.left, u = t.clientY - i.top;
    return ge(c, {
      event: t,
      x: d,
      y: u,
      vDirection: n,
      hDirection: s,
      dragSource: l,
      fromNudge: r,
      dragItem: a,
      dropZoneTarget: o
    });
  }
  positionDragAndDropImageComp(e) {
    const t = this.getDragAndDropImageComponent();
    t && zl(t.getGui(), e, this.beans);
  }
  removeDragAndDropImageComponent() {
    var t;
    const { dragAndDropImageComp: e } = this;
    if (e) {
      const { comp: s } = e;
      if (s) {
        const n = s.getGui();
        (t = this.dragAndDropImageParent) == null || t.removeChild(n), this.destroyBean(s);
      }
    }
    this.dragAndDropImageComp = null;
  }
  createDragAndDropImageComponent() {
    const { dragSource: e, gos: t, userCompFactory: s } = this;
    if (!e)
      return;
    const n = qc(
      s,
      ge(t, {
        dragSource: e
      })
    );
    if (!n)
      return;
    const r = n.newAgStackInstance();
    this.dragAndDropImageComp = {
      promise: r
    }, r.then((o) => {
      !o || !this.isAlive() || (this.processDragAndDropImageComponent(o), this.dragAndDropImageComp.comp = o);
    });
  }
  processDragAndDropImageComponent(e) {
    const { dragSource: t, environment: s } = this;
    if (!t)
      return;
    const n = e.getGui();
    n.style.setProperty("position", "absolute"), n.style.setProperty("z-index", "9999"), Bi(this.gos, n), s.applyThemeClasses(n), e.setIcon(null, !1);
    let { dragItemName: r } = t;
    typeof r == "function" && (r = r()), e.setLabel(r || ""), n.style.top = "20px", n.style.left = "20px";
    const o = hr(this.beans);
    this.dragAndDropImageParent = o, o ? o.appendChild(n) : oe(54);
  }
  registerGridDropTarget(e, t) {
    const s = {
      getContainer: e,
      isInterestedIn: (n) => n === 1 || n === 0,
      getIconName: () => "notAllowed"
    };
    this.addDropTarget(s), t.addDestroyFunc(() => this.removeDropTarget(s));
  }
};
function jd(e, t) {
  const s = e.column === t.column, n = e.rowPinned === t.rowPinned, r = e.rowIndex === t.rowIndex;
  return s && n && r;
}
function Ud(e, t) {
  switch (e.rowPinned) {
    case "top":
      if (t.rowPinned !== "top")
        return !0;
      break;
    case "bottom":
      if (t.rowPinned !== "bottom")
        return !1;
      break;
    default:
      if (te(t.rowPinned))
        return t.rowPinned !== "top";
      break;
  }
  return e.rowIndex < t.rowIndex;
}
function Kd(e) {
  let t = 0, s;
  const { pinnedRowModel: n, rowModel: r, pageBounds: o } = e;
  return n != null && n.getPinnedTopRowCount() ? s = "top" : r.getRowCount() ? (s = null, t = o.getFirstRow()) : n != null && n.getPinnedBottomRowCount() && (s = "bottom"), s === void 0 ? null : { rowIndex: t, rowPinned: s };
}
function Yd(e) {
  let t, s = null;
  const { pinnedRowModel: n, pageBounds: r } = e, o = n == null ? void 0 : n.getPinnedBottomRowCount(), i = n == null ? void 0 : n.getPinnedTopRowCount();
  return o ? (s = "bottom", t = o - 1) : e.rowModel.getRowCount() ? (s = null, t = r.getLastRow()) : i && (s = "top", t = i - 1), t === void 0 ? null : { rowIndex: t, rowPinned: s };
}
function Wi(e, t) {
  var s, n;
  switch (t.rowPinned) {
    case "top":
      return (s = e.pinnedRowModel) == null ? void 0 : s.getPinnedTopRow(t.rowIndex);
    case "bottom":
      return (n = e.pinnedRowModel) == null ? void 0 : n.getPinnedBottomRow(t.rowIndex);
    default:
      return e.rowModel.getRow(t.rowIndex);
  }
}
function ys(e, t) {
  var r;
  const s = (r = e.spannedRowRenderer) == null ? void 0 : r.getCellByPosition(t);
  if (s)
    return s;
  const n = e.rowRenderer.getRowByPosition(t);
  return n ? n.getCellCtrl(t.column) : null;
}
function qs(e, t) {
  const { rowIndex: s, rowPinned: n } = t, { pageBounds: r, pinnedRowModel: o, rowModel: i } = e;
  if (s === 0)
    return n === "top" ? null : n === "bottom" && i.isRowsToRender() ? { rowIndex: r.getLastRow(), rowPinned: null } : o != null && o.isRowsToRender("top") ? { rowIndex: o.getPinnedTopRowCount() - 1, rowPinned: "top" } : null;
  const a = n ? void 0 : i.getRow(s);
  return Ni(e, a, !0) ?? { rowIndex: s - 1, rowPinned: n };
}
function Qr(e, t) {
  const { rowIndex: s, rowPinned: n } = t, { pageBounds: r, pinnedRowModel: o, rowModel: i } = e;
  if (Zd(e, t))
    return n === "bottom" ? null : n === "top" && i.isRowsToRender() ? { rowIndex: r.getFirstRow(), rowPinned: null } : o != null && o.isRowsToRender("bottom") ? { rowIndex: 0, rowPinned: "bottom" } : null;
  const a = n ? void 0 : i.getRow(s);
  return Ni(e, a) ?? { rowIndex: s + 1, rowPinned: n };
}
function Ni(e, t, s) {
  const { gos: n, rowRenderer: r } = e;
  if (!(t != null && t.sticky) || !fi(n))
    return;
  const o = s ? r.getStickyTopRowCtrls() : r.getStickyBottomRowCtrls();
  let i;
  for (let a = 0; a < o.length; a++)
    if (o[a].rowNode.rowIndex === t.rowIndex) {
      i = o[a + (s ? -1 : 1)];
      break;
    }
  return i ? { rowIndex: i.rowNode.rowIndex, rowPinned: null } : void 0;
}
function Zd(e, t) {
  const { rowPinned: s, rowIndex: n } = t, { pinnedRowModel: r, pageBounds: o } = e;
  return s === "top" ? ((r == null ? void 0 : r.getPinnedTopRowCount()) ?? 0) - 1 <= n : s === "bottom" ? ((r == null ? void 0 : r.getPinnedBottomRowCount()) ?? 0) - 1 <= n : o.getLastRow() <= n;
}
var qd = class {
  constructor(e, t) {
    this.active = !0, this.nodeIdsToColumns = {}, this.mapToItems = {}, this.keepingColumns = e, this.pathRoot = {
      rowNode: t,
      children: null
    }, this.mapToItems[t.id] = this.pathRoot;
  }
  depthFirstSearchChangedPath(e, t) {
    const { rowNode: s, children: n } = e;
    if (n)
      for (let r = 0; r < n.length; ++r)
        this.depthFirstSearchChangedPath(n[r], t);
    t(s);
  }
  depthFirstSearchEverything(e, t, s) {
    const n = e.childrenAfterGroup;
    if (n)
      for (let r = 0, o = n.length; r < o; ++r) {
        const i = n[r];
        i.childrenAfterGroup ? this.depthFirstSearchEverything(i, t, s) : s && t(i);
      }
    t(e);
  }
  // traverseLeafNodes -> used when NOT doing changed path, ie traversing everything. the callback
  // will be called for child nodes in addition to parent nodes.
  forEachChangedNodeDepthFirst(e, t = !1, s = !1) {
    this.active && !s ? this.depthFirstSearchChangedPath(this.pathRoot, e) : this.depthFirstSearchEverything(this.pathRoot.rowNode, e, t);
  }
  executeFromRootNode(e) {
    e(this.pathRoot.rowNode);
  }
  createPathItems(e) {
    let t = e, s = 0;
    for (; !this.mapToItems[t.id]; ) {
      const n = {
        rowNode: t,
        children: null
      };
      this.mapToItems[t.id] = n, s++, t = t.parent;
    }
    return s;
  }
  populateColumnsMap(e, t) {
    if (!this.keepingColumns || !t)
      return;
    let s = e;
    for (; s; )
      this.nodeIdsToColumns[s.id] || (this.nodeIdsToColumns[s.id] = {}), t.forEach((n) => this.nodeIdsToColumns[s.id][n.getId()] = !0), s = s.parent;
  }
  linkPathItems(e, t) {
    let s = e;
    for (let n = 0; n < t; n++) {
      const r = this.mapToItems[s.id], o = this.mapToItems[s.parent.id];
      o.children || (o.children = []), o.children.push(r), s = s.parent;
    }
  }
  // called by
  // 1) change detection (provides cols) and
  // 2) groupStage if doing transaction update (doesn't provide cols)
  addParentNode(e, t) {
    if (!e || e.isRowPinned())
      return;
    const s = this.createPathItems(e);
    this.linkPathItems(e, s), this.populateColumnsMap(e, t);
  }
  canSkip(e) {
    return this.active && !this.mapToItems[e.id];
  }
  getValueColumnsForNode(e, t) {
    if (!this.keepingColumns)
      return t;
    const s = this.nodeIdsToColumns[e.id];
    return t.filter((r) => s[r.getId()]);
  }
  getNotValueColumnsForNode(e, t) {
    if (!this.keepingColumns)
      return null;
    const s = this.nodeIdsToColumns[e.id];
    return t.filter((r) => !s[r.getId()]);
  }
};
function Vi(e, t, s) {
  if (s === 0)
    return !1;
  const n = Math.abs(e.clientX - t.clientX), r = Math.abs(e.clientY - t.clientY);
  return Math.max(n, r) <= s;
}
var Xd = class extends K {
  constructor() {
    super(...arguments), this.beanName = "dragSvc", this.dragEndFunctions = [], this.dragSources = [];
  }
  destroy() {
    const { dragSources: e } = this;
    e.forEach(this.removeListener.bind(this)), e.length = 0, super.destroy();
  }
  removeListener(e) {
    const t = e.dragSource.eElement, s = e.mouseDownListener;
    if (t.removeEventListener("mousedown", s), e.touchEnabled) {
      const n = e.touchStartListener;
      t.removeEventListener("touchstart", n, { passive: !0 });
    }
  }
  removeDragSource(e) {
    const { dragSources: t } = this, s = t.find((n) => n.dragSource === e);
    s && (this.removeListener(s), vt(t, s));
  }
  addDragSource(e) {
    const t = this.onMouseDown.bind(this, e), { eElement: s, includeTouch: n, stopPropagationForTouch: r } = e;
    s.addEventListener("mousedown", t);
    let o = null;
    const i = this.gos.get("suppressTouch");
    n && !i && (o = (a) => {
      lr(a.target) || (r && a.stopPropagation(), this.onTouchStart(e, a));
    }, s.addEventListener("touchstart", o, { passive: !1 })), this.dragSources.push({
      dragSource: e,
      mouseDownListener: t,
      touchStartListener: o,
      touchEnabled: !!n
    });
  }
  // gets called whenever mouse down on any drag source
  onTouchStart(e, t) {
    this.currentDragParams = e, this.dragging = !1;
    const s = t.touches[0];
    this.touchLastTime = s, this.touchStart = s;
    const n = (l) => this.onTouchMove(l, e.eElement), r = (l) => this.onTouchUp(l, e.eElement), o = (l) => {
      l.cancelable && l.preventDefault();
    }, i = t.target, a = [
      // Prevents the page document from moving while we are dragging items around.
      // preventDefault needs to be called in the touchmove listener and never inside the
      // touchstart, because using touchstart causes the click event to be cancelled on touch devices.
      {
        target: as(this.beans),
        type: "touchmove",
        listener: o,
        options: { passive: !1 }
      },
      { target: i, type: "touchmove", listener: n, options: { passive: !0 } },
      { target: i, type: "touchend", listener: r, options: { passive: !0 } },
      { target: i, type: "touchcancel", listener: r, options: { passive: !0 } }
    ];
    this.addTemporaryEvents(a), e.dragStartPixels === 0 && this.onCommonMove(s, this.touchStart, e.eElement);
  }
  // gets called whenever mouse down on any drag source
  onMouseDown(e, t) {
    const s = t;
    if (e.skipMouseEvent && e.skipMouseEvent(t) || s._alreadyProcessedByDragService || (s._alreadyProcessedByDragService = !0, t.button !== 0))
      return;
    this.shouldPreventMouseEvent(t) && t.preventDefault(), this.currentDragParams = e, this.dragging = !1, this.mouseStartEvent = t, this.startTarget = t.target;
    const n = (c) => this.onMouseMove(c, e.eElement), r = (c) => this.onMouseUp(c, e.eElement), o = (c) => c.preventDefault(), i = (c) => {
      c.key === j.ESCAPE && this.cancelDrag(e.eElement);
    }, a = as(this.beans), l = [
      { target: a, type: "mousemove", listener: n },
      { target: a, type: "mouseup", listener: r },
      { target: a, type: "contextmenu", listener: o },
      { target: a, type: "keydown", listener: i }
    ];
    this.addTemporaryEvents(l), e.dragStartPixels === 0 && this.onMouseMove(t, e.eElement);
  }
  addTemporaryEvents(e) {
    e.forEach((t) => {
      const { target: s, type: n, listener: r, options: o } = t;
      s.addEventListener(n, r, o);
    }), this.dragEndFunctions.push(() => {
      e.forEach((t) => {
        const { target: s, type: n, listener: r, options: o } = t;
        s.removeEventListener(n, r, o);
      });
    });
  }
  // returns true if the event is close to the original event by X pixels either vertically or horizontally.
  // we only start dragging after X pixels so this allows us to know if we should start dragging yet.
  isEventNearStartEvent(e, t) {
    const { dragStartPixels: s } = this.currentDragParams, n = te(s) ? s : 4;
    return Vi(e, t, n);
  }
  getFirstActiveTouch(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].identifier === this.touchStart.identifier)
        return e[t];
    return null;
  }
  onCommonMove(e, t, s) {
    var n;
    if (!this.dragging) {
      if (this.isEventNearStartEvent(e, t))
        return;
      if (this.dragging = !0, this.eventSvc.dispatchEvent({
        type: "dragStarted",
        target: s
      }), this.currentDragParams.onDragStart(t), !this.currentDragParams) {
        this.dragging = !1;
        return;
      }
      this.currentDragParams.onDragging(t);
    }
    (n = this.currentDragParams) == null || n.onDragging(e);
  }
  onTouchMove(e, t) {
    const s = this.getFirstActiveTouch(e.touches);
    s && this.onCommonMove(s, this.touchStart, t);
  }
  // only gets called after a mouse down - as this is only added after mouseDown
  // and is removed when mouseUp happens
  onMouseMove(e, t) {
    var s;
    ar() && ((s = rt(this.beans).getSelection()) == null || s.removeAllRanges()), this.shouldPreventMouseEvent(e) && e.preventDefault(), this.onCommonMove(e, this.mouseStartEvent, t);
  }
  shouldPreventMouseEvent(e) {
    const { gos: t } = this, s = t.get("enableCellTextSelection"), n = e.type === "mousemove", r = (o) => {
      const i = o.target, a = i == null ? void 0 : i.tagName.toLocaleLowerCase();
      return !!(a != null && a.match("^a$|textarea|input|select|button"));
    };
    return (
      // when `isEnableCellTextSelect` is `true`, we need to preventDefault on mouseMove
      // to avoid the grid text being selected while dragging components.
      s && n && e.cancelable && ds(t, e) && !r(e)
    );
  }
  onTouchUp(e, t) {
    let s = this.getFirstActiveTouch(e.changedTouches);
    s || (s = this.touchLastTime), this.onUpCommon(s, t);
  }
  onMouseUp(e, t) {
    this.onUpCommon(e, t);
  }
  onUpCommon(e, t) {
    this.dragging && (this.dragging = !1, this.currentDragParams.onDragStop(e), this.eventSvc.dispatchEvent({
      type: "dragStopped",
      target: t
    })), this.resetDragProperties();
  }
  cancelDrag(e) {
    var t, s;
    this.eventSvc.dispatchEvent({
      type: "dragCancelled",
      target: e
    }), (s = (t = this.currentDragParams) == null ? void 0 : t.onDragCancel) == null || s.call(t), this.resetDragProperties();
  }
  resetDragProperties() {
    this.mouseStartEvent = null, this.startTarget = null, this.touchStart = null, this.touchLastTime = null, this.currentDragParams = null;
    const { dragEndFunctions: e } = this;
    e.forEach((t) => t()), e.length = 0;
  }
};
function _i(e, t) {
  return e + "_" + t;
}
function xe(e) {
  return e instanceof zi;
}
var zi = class extends K {
  constructor(e, t, s, n) {
    super(), this.providedColumnGroup = e, this.groupId = t, this.partId = s, this.pinned = n, this.isColumn = !1, this.displayedChildren = [], this.autoHeaderHeight = null, this.parent = null;
  }
  // as the user is adding and removing columns, the groups are recalculated.
  // this reset clears out all children, ready for children to be added again
  reset() {
    this.parent = null, this.children = null, this.displayedChildren = null;
  }
  getParent() {
    return this.parent;
  }
  getUniqueId() {
    return _i(this.groupId, this.partId);
  }
  isEmptyGroup() {
    return this.displayedChildren.length === 0;
  }
  isMoving() {
    const e = this.getProvidedColumnGroup().getLeafColumns();
    return !e || e.length === 0 ? !1 : e.every((t) => t.isMoving());
  }
  checkLeft() {
    if (this.displayedChildren.forEach((e) => {
      xe(e) && e.checkLeft();
    }), this.displayedChildren.length > 0)
      if (this.gos.get("enableRtl")) {
        const t = Ce(this.displayedChildren).getLeft();
        this.setLeft(t);
      } else {
        const e = this.displayedChildren[0].getLeft();
        this.setLeft(e);
      }
    else
      this.setLeft(null);
  }
  getLeft() {
    return this.left;
  }
  getOldLeft() {
    return this.oldLeft;
  }
  setLeft(e) {
    this.oldLeft = this.left, this.left !== e && (this.left = e, this.dispatchLocalEvent({ type: "leftChanged" }));
  }
  getPinned() {
    return this.pinned;
  }
  getGroupId() {
    return this.groupId;
  }
  getPartId() {
    return this.partId;
  }
  getActualWidth() {
    var t;
    let e = 0;
    return (t = this.displayedChildren) == null || t.forEach((s) => {
      e += s.getActualWidth();
    }), e;
  }
  isResizable() {
    if (!this.displayedChildren)
      return !1;
    let e = !1;
    return this.displayedChildren.forEach((t) => {
      t.isResizable() && (e = !0);
    }), e;
  }
  getMinWidth() {
    let e = 0;
    return this.displayedChildren.forEach((t) => {
      e += t.getMinWidth();
    }), e;
  }
  addChild(e) {
    this.children || (this.children = []), this.children.push(e);
  }
  getDisplayedChildren() {
    return this.displayedChildren;
  }
  getLeafColumns() {
    const e = [];
    return this.addLeafColumns(e), e;
  }
  getDisplayedLeafColumns() {
    const e = [];
    return this.addDisplayedLeafColumns(e), e;
  }
  getDefinition() {
    return this.providedColumnGroup.getColGroupDef();
  }
  getColGroupDef() {
    return this.providedColumnGroup.getColGroupDef();
  }
  isPadding() {
    return this.providedColumnGroup.isPadding();
  }
  isExpandable() {
    return this.providedColumnGroup.isExpandable();
  }
  isExpanded() {
    return this.providedColumnGroup.isExpanded();
  }
  setExpanded(e) {
    this.providedColumnGroup.setExpanded(e);
  }
  isAutoHeaderHeight() {
    var e;
    return !!((e = this.getColGroupDef()) != null && e.autoHeaderHeight);
  }
  getAutoHeaderHeight() {
    return this.autoHeaderHeight;
  }
  /** Returns true if the header height has changed */
  setAutoHeaderHeight(e) {
    const t = e !== this.autoHeaderHeight;
    return this.autoHeaderHeight = e, t;
  }
  addDisplayedLeafColumns(e) {
    this.displayedChildren.forEach((t) => {
      wt(t) ? e.push(t) : xe(t) && t.addDisplayedLeafColumns(e);
    });
  }
  addLeafColumns(e) {
    this.children.forEach((t) => {
      wt(t) ? e.push(t) : xe(t) && t.addLeafColumns(e);
    });
  }
  getChildren() {
    return this.children;
  }
  getColumnGroupShow() {
    return this.providedColumnGroup.getColumnGroupShow();
  }
  getProvidedColumnGroup() {
    return this.providedColumnGroup;
  }
  getPaddingLevel() {
    const e = this.getParent();
    return !this.isPadding() || !e || !e.isPadding() ? 0 : 1 + e.getPaddingLevel();
  }
  calculateDisplayedColumns() {
    this.displayedChildren = [];
    let e = this;
    for (; e != null && e.isPadding(); )
      e = e.getParent();
    if (!(e ? e.getProvidedColumnGroup().isExpandable() : !1)) {
      this.displayedChildren = this.children, this.dispatchLocalEvent({ type: "displayedChildrenChanged" });
      return;
    }
    this.children.forEach((s) => {
      if (xe(s) && (!s.displayedChildren || !s.displayedChildren.length))
        return;
      switch (s.getColumnGroupShow()) {
        case "open":
          e.getProvidedColumnGroup().isExpanded() && this.displayedChildren.push(s);
          break;
        case "closed":
          e.getProvidedColumnGroup().isExpanded() || this.displayedChildren.push(s);
          break;
        default:
          this.displayedChildren.push(s);
          break;
      }
    }), this.dispatchLocalEvent({ type: "displayedChildrenChanged" });
  }
}, Qd = "ag-focus-managed", ln = class extends K {
  constructor(e, t = {}) {
    super(), this.eFocusable = e, this.callbacks = t, this.callbacks = {
      shouldStopEventPropagation: () => !1,
      onTabKeyDown: (s) => {
        if (s.defaultPrevented)
          return;
        const n = an(this.beans, this.eFocusable, !1, s.shiftKey);
        n && (n.focus(), s.preventDefault());
      },
      ...t
    };
  }
  postConstruct() {
    const {
      eFocusable: e,
      callbacks: { onFocusIn: t, onFocusOut: s }
    } = this;
    e.classList.add(Qd), this.addKeyDownListeners(e), t && this.addManagedElementListeners(e, { focusin: t }), s && this.addManagedElementListeners(e, { focusout: s });
  }
  addKeyDownListeners(e) {
    this.addManagedElementListeners(e, {
      keydown: (t) => {
        if (t.defaultPrevented || mt(t))
          return;
        const { callbacks: s } = this;
        if (s.shouldStopEventPropagation(t)) {
          _s(t);
          return;
        }
        t.key === j.TAB ? s.onTabKeyDown(t) : s.handleKeyDown && s.handleKeyDown(t);
      }
    });
  }
}, ks = {
  AUTO_HEIGHT: "ag-layout-auto-height",
  NORMAL: "ag-layout-normal",
  PRINT: "ag-layout-print"
}, Cr = class extends K {
  constructor(e) {
    super(), this.view = e;
  }
  postConstruct() {
    this.addManagedPropertyListener("domLayout", this.updateLayoutClasses.bind(this)), this.updateLayoutClasses();
  }
  updateLayoutClasses() {
    const e = this.gos.get("domLayout"), t = {
      autoHeight: e === "autoHeight",
      normal: e === "normal",
      print: e === "print"
    }, s = t.autoHeight ? ks.AUTO_HEIGHT : t.print ? ks.PRINT : ks.NORMAL;
    this.view.updateLayoutClasses(s, t);
  }
}, ht = "Viewport", Jr = "fakeVScrollComp", eo = [
  "fakeHScrollComp",
  "centerHeader",
  "topCenter",
  "bottomCenter",
  "stickyTopCenter",
  "stickyBottomCenter"
], to = 100, Pn = 150, Jd = class extends K {
  constructor(e) {
    super(), this.clearRetryListenerFncs = [], this.lastScrollSource = [null, null], this.scrollLeft = -1, this.nextScrollTop = -1, this.scrollTop = -1, this.lastOffsetHeight = -1, this.lastScrollTop = -1, this.lastIsHorizontalScrollShowing = !1, this.scrollTimer = 0, this.isVerticalPositionInvalidated = !0, this.isHorizontalPositionInvalidated = !0, this.eBodyViewport = e, this.resetLastHScrollDebounced = ts(
      this,
      () => this.lastScrollSource[
        1
        /* Horizontal */
      ] = null,
      Pn
    ), this.resetLastVScrollDebounced = ts(
      this,
      () => this.lastScrollSource[
        0
        /* Vertical */
      ] = null,
      Pn
    );
  }
  wireBeans(e) {
    this.ctrlsSvc = e.ctrlsSvc, this.animationFrameSvc = e.animationFrameSvc, this.visibleCols = e.visibleCols;
  }
  destroy() {
    super.destroy(), this.clearRetryListenerFncs = [], window.clearTimeout(this.scrollTimer);
  }
  postConstruct() {
    this.enableRtl = this.gos.get("enableRtl");
    const e = this.invalidateVerticalScroll.bind(this), t = this.invalidateHorizontalScroll.bind(this);
    this.addManagedEventListeners({
      displayedColumnsWidthChanged: this.onDisplayedColumnsWidthChanged.bind(this),
      gridSizeChanged: e,
      // We only invalidate horizontal scrolling when the viewport switches
      // between scrollable and non-scrollable, avoiding unnecessary
      // invalidation on every gridSizeChanged event. If more properties
      // require invalidation, read/write DOM cycles may be needed.
      scrollGapChanged: t
    }), this.addManagedElementListeners(this.eBodyViewport, {
      scroll: e
    }), this.ctrlsSvc.whenReady(this, (s) => {
      this.centerRowsCtrl = s.center, this.onDisplayedColumnsWidthChanged(), this.addScrollListener();
    });
  }
  invalidateHorizontalScroll() {
    this.isHorizontalPositionInvalidated = !0;
  }
  invalidateVerticalScroll() {
    this.isVerticalPositionInvalidated = !0;
  }
  addScrollListener() {
    this.addHorizontalScrollListeners(), this.addVerticalScrollListeners();
  }
  addHorizontalScrollListeners() {
    this.addManagedElementListeners(this.centerRowsCtrl.eViewport, {
      scroll: this.onHScroll.bind(this, ht)
    });
    for (const e of eo) {
      const t = this.ctrlsSvc.get(e);
      this.registerScrollPartner(t, this.onHScroll.bind(this, e));
    }
  }
  addVerticalScrollListeners() {
    const e = this.ctrlsSvc.get("fakeVScrollComp"), t = this.gos.get("debounceVerticalScrollbar"), s = t ? ts(this, this.onVScroll.bind(this, ht), to) : this.onVScroll.bind(this, ht), n = t ? ts(this, this.onVScroll.bind(this, Jr), to) : this.onVScroll.bind(this, Jr);
    this.addManagedElementListeners(this.eBodyViewport, { scroll: s }), this.registerScrollPartner(e, n);
  }
  registerScrollPartner(e, t) {
    e.onScrollCallback(t);
  }
  onDisplayedColumnsWidthChanged() {
    this.enableRtl && this.horizontallyScrollHeaderCenterAndFloatingCenter();
  }
  horizontallyScrollHeaderCenterAndFloatingCenter(e) {
    this.centerRowsCtrl != null && (e === void 0 && (e = this.centerRowsCtrl.getCenterViewportScrollLeft()), this.setScrollLeftForAllContainersExceptCurrent(Math.abs(e)));
  }
  setScrollLeftForAllContainersExceptCurrent(e) {
    for (const t of [...eo, ht]) {
      if (this.lastScrollSource[
        1
        /* Horizontal */
      ] === t)
        continue;
      const s = this.getViewportForSource(t);
      Ws(s, e, this.enableRtl);
    }
  }
  getViewportForSource(e) {
    return e === ht ? this.centerRowsCtrl.eViewport : this.ctrlsSvc.get(e).eViewport;
  }
  isControllingScroll(e, t) {
    return this.lastScrollSource[t] == null ? (t === 0 ? this.lastScrollSource[0] = e : this.lastScrollSource[1] = e, !0) : this.lastScrollSource[t] === e;
  }
  onHScroll(e) {
    if (!this.isControllingScroll(
      e,
      1
      /* Horizontal */
    ))
      return;
    const t = this.centerRowsCtrl.eViewport, { scrollLeft: s } = t;
    if (this.shouldBlockScrollUpdate(1, s, !0))
      return;
    const n = Bs(this.getViewportForSource(e), this.enableRtl);
    this.doHorizontalScroll(n), this.resetLastHScrollDebounced();
  }
  onVScroll(e) {
    if (!this.isControllingScroll(
      e,
      0
      /* Vertical */
    ))
      return;
    let t;
    if (e === ht ? t = this.eBodyViewport.scrollTop : t = this.ctrlsSvc.get("fakeVScrollComp").getScrollPosition(), this.shouldBlockScrollUpdate(0, t, !0))
      return;
    const { animationFrameSvc: s } = this;
    s == null || s.setScrollTop(t), this.nextScrollTop = t, e === ht ? this.ctrlsSvc.get("fakeVScrollComp").setScrollPosition(t) : this.eBodyViewport.scrollTop = t, s != null && s.active ? s.schedule() : this.scrollGridIfNeeded(!0), this.resetLastVScrollDebounced();
  }
  doHorizontalScroll(e) {
    const t = this.ctrlsSvc.get("fakeHScrollComp").getScrollPosition();
    this.scrollLeft === e && e === t || (this.scrollLeft = e, this.fireScrollEvent(
      1
      /* Horizontal */
    ), this.horizontallyScrollHeaderCenterAndFloatingCenter(e), this.centerRowsCtrl.onHorizontalViewportChanged(!0));
  }
  fireScrollEvent(e) {
    const t = {
      type: "bodyScroll",
      direction: e === 1 ? "horizontal" : "vertical",
      left: this.scrollLeft,
      top: this.scrollTop
    };
    this.eventSvc.dispatchEvent(t), window.clearTimeout(this.scrollTimer), this.scrollTimer = window.setTimeout(() => {
      this.scrollTimer = 0, this.eventSvc.dispatchEvent({
        ...t,
        type: "bodyScrollEnd"
      });
    }, Pn);
  }
  shouldBlockScrollUpdate(e, t, s = !1) {
    return s && !rs() ? !1 : e === 0 ? this.shouldBlockVerticalScroll(t) : this.shouldBlockHorizontalScroll(t);
  }
  shouldBlockVerticalScroll(e) {
    const t = qo(this.eBodyViewport), { scrollHeight: s } = this.eBodyViewport;
    return e < 0 || e + t > s;
  }
  shouldBlockHorizontalScroll(e) {
    const t = this.centerRowsCtrl.getCenterWidth(), { scrollWidth: s } = this.centerRowsCtrl.eViewport;
    if (this.enableRtl) {
      if (e > 0)
        return !0;
    } else if (e < 0)
      return !0;
    return Math.abs(e) + t > s;
  }
  redrawRowsAfterScroll() {
    this.fireScrollEvent(
      0
      /* Vertical */
    );
  }
  // this is to cater for AG-3274, where grid is removed from the dom and then inserted back in again.
  // (which happens with some implementations of tabbing). this can result in horizontal scroll getting
  // reset back to the left, however no scroll event is fired. so we need to get header to also scroll
  // back to the left to be kept in sync.
  // adding and removing the grid from the DOM both resets the scroll position and
  // triggers a resize event, so notify listeners if the scroll position has changed
  checkScrollLeft() {
    this.scrollLeft !== this.centerRowsCtrl.getCenterViewportScrollLeft() && this.onHScroll(ht);
  }
  scrollGridIfNeeded(e = !1) {
    const t = this.scrollTop != this.nextScrollTop;
    return t && (this.scrollTop = this.nextScrollTop, e && this.invalidateVerticalScroll(), this.redrawRowsAfterScroll()), t;
  }
  // called by scrollHorizontally method and alignedGridsService
  setHorizontalScrollPosition(e, t = !1) {
    const n = this.centerRowsCtrl.eViewport.scrollWidth - this.centerRowsCtrl.getCenterWidth();
    !t && this.shouldBlockScrollUpdate(1, e) && (this.enableRtl ? e = e > 0 ? 0 : n : e = Math.min(Math.max(e, 0), n)), Ws(this.centerRowsCtrl.eViewport, Math.abs(e), this.enableRtl), this.doHorizontalScroll(e);
  }
  setVerticalScrollPosition(e) {
    this.invalidateVerticalScroll(), this.eBodyViewport.scrollTop = e;
  }
  getVScrollPosition() {
    if (!this.isVerticalPositionInvalidated) {
      const { lastOffsetHeight: s, lastScrollTop: n } = this;
      return {
        top: n,
        bottom: n + s
      };
    }
    this.isVerticalPositionInvalidated = !1;
    const { scrollTop: e, offsetHeight: t } = this.eBodyViewport;
    return this.lastScrollTop = e, this.lastOffsetHeight = t, {
      top: e,
      bottom: e + t
    };
  }
  /** Get an approximate scroll position that returns the last real value read.
   * This is useful for avoiding repeated DOM reads that force the browser to recalculate styles.
   * This can have big performance improvements but may not be 100% accurate so only use if this is acceptable.
   */
  getApproximateVScollPosition() {
    return this.lastScrollTop >= 0 && this.lastOffsetHeight >= 0 ? {
      top: this.scrollTop,
      bottom: this.scrollTop + this.lastOffsetHeight
    } : this.getVScrollPosition();
  }
  getHScrollPosition() {
    return this.centerRowsCtrl.getHScrollPosition();
  }
  isHorizontalScrollShowing() {
    return this.isHorizontalPositionInvalidated && (this.lastIsHorizontalScrollShowing = this.centerRowsCtrl.isHorizontalScrollShowing(), this.isHorizontalPositionInvalidated = !1), this.lastIsHorizontalScrollShowing;
  }
  // called by the headerRootComp and moveColumnController
  scrollHorizontally(e) {
    const t = this.centerRowsCtrl.eViewport.scrollLeft;
    return this.setHorizontalScrollPosition(t + e), this.centerRowsCtrl.eViewport.scrollLeft - t;
  }
  // gets called by rowRenderer when new data loaded, as it will want to scroll to the top
  scrollToTop() {
    this.eBodyViewport.scrollTop = 0;
  }
  // Valid values for position are bottom, middle and top
  ensureNodeVisible(e, t = null) {
    const { rowModel: s } = this.beans, n = s.getRowCount();
    let r = -1;
    for (let o = 0; o < n; o++) {
      const i = s.getRow(o);
      if (typeof e == "function") {
        if (i && e(i)) {
          r = o;
          break;
        }
      } else if (e === i || e === i.data) {
        r = o;
        break;
      }
    }
    r >= 0 && this.ensureIndexVisible(r, t);
  }
  // Valid values for position are bottom, middle and top
  // position should be {'top','middle','bottom', or undefined/null}.
  // if undefined/null, then the grid will to the minimal amount of scrolling,
  // eg if grid needs to scroll up, it scrolls until row is on top,
  //    if grid needs to scroll down, it scrolls until row is on bottom,
  //    if row is already in view, grid does not scroll
  ensureIndexVisible(e, t, s = 0) {
    if (We(this.gos, "print"))
      return;
    const { rowModel: n } = this.beans, r = n.getRowCount();
    if (typeof e != "number" || e < 0 || e >= r) {
      oe(88, { index: e });
      return;
    }
    this.clearRetryListeners();
    const { frameworkOverrides: o, pageBounds: i, rowContainerHeight: a, rowRenderer: l } = this.beans;
    o.wrapIncoming(() => {
      var f, C;
      const c = this.ctrlsSvc.getGridBodyCtrl(), d = n.getRow(e);
      let u, h, g = 0;
      this.invalidateVerticalScroll();
      do {
        const { stickyTopHeight: p, stickyBottomHeight: m } = c, v = d.rowTop, b = d.rowHeight, y = i.getPixelOffset(), F = d.rowTop - y, S = F + d.rowHeight, P = this.getVScrollPosition(), W = a.divStretchOffset, O = P.top + W, L = P.bottom + W, D = L - O, G = a.getScrollPositionForPixel(F), T = a.getScrollPositionForPixel(S - D), I = Math.min((G + T) / 2, F), x = O + p > F, E = L - m < S;
        let A = null;
        t === "top" ? A = G - p : t === "bottom" ? A = T + m : t === "middle" ? A = I : x ? A = G - p : E && (A = T + m), A !== null && (this.setVerticalScrollPosition(A), l.redraw({ afterScroll: !0 })), u = v !== d.rowTop || b !== d.rowHeight, h = p !== c.stickyTopHeight || m !== c.stickyBottomHeight, g++;
      } while ((u || h) && g < 10);
      if ((f = this.animationFrameSvc) == null || f.flushAllFrames(), s < 10 && (d != null && d.stub || !((C = this.beans.rowAutoHeight) != null && C.areRowsMeasured()))) {
        const p = this.getVScrollPosition().top;
        this.clearRetryListenerFncs = this.addManagedEventListeners({
          bodyScroll: () => {
            const m = this.getVScrollPosition().top;
            p !== m && this.clearRetryListeners();
          },
          modelUpdated: () => {
            this.clearRetryListeners(), !(e >= n.getRowCount()) && this.ensureIndexVisible(e, t, s + 1);
          }
        });
      }
    });
  }
  clearRetryListeners() {
    this.clearRetryListenerFncs.forEach((e) => e()), this.clearRetryListenerFncs = [];
  }
  ensureColumnVisible(e, t = "auto") {
    const { colModel: s, frameworkOverrides: n } = this.beans, r = s.getCol(e);
    if (!r || r.isPinned() || !this.visibleCols.isColDisplayed(r))
      return;
    const o = this.getPositionedHorizontalScroll(r, t);
    n.wrapIncoming(() => {
      var i;
      o !== null && this.centerRowsCtrl.setCenterViewportScrollLeft(o), this.centerRowsCtrl.onHorizontalViewportChanged(), (i = this.animationFrameSvc) == null || i.flushAllFrames();
    });
  }
  getPositionedHorizontalScroll(e, t) {
    const { columnBeforeStart: s, columnAfterEnd: n } = this.isColumnOutsideViewport(e), r = this.centerRowsCtrl.getCenterWidth() < e.getActualWidth(), o = this.centerRowsCtrl.getCenterWidth(), i = this.enableRtl;
    let a = (i ? s : n) || r, l = i ? n : s;
    t !== "auto" && (a = t === "start", l = t === "end");
    const c = t === "middle";
    if (a || l || c) {
      const { colLeft: d, colMiddle: u, colRight: h } = this.getColumnBounds(e);
      return c ? u - o / 2 : a ? i ? h : d : i ? d - o : h - o;
    }
    return null;
  }
  isColumnOutsideViewport(e) {
    const { start: t, end: s } = this.getViewportBounds(), { colLeft: n, colRight: r } = this.getColumnBounds(e), o = this.enableRtl, i = o ? t > r : s < r, a = o ? s < n : t > n;
    return { columnBeforeStart: i, columnAfterEnd: a };
  }
  getColumnBounds(e) {
    const t = this.enableRtl, s = this.visibleCols.bodyWidth, n = e.getActualWidth(), r = e.getLeft(), o = t ? -1 : 1, i = t ? s - r : r, a = i + n * o, l = i + n / 2 * o;
    return { colLeft: i, colMiddle: l, colRight: a };
  }
  getViewportBounds() {
    const e = this.centerRowsCtrl.getCenterWidth(), t = this.centerRowsCtrl.getCenterViewportScrollLeft(), s = t, n = e + t;
    return { start: s, end: n, width: e };
  }
}, mr = class extends K {
  constructor(e, t = !1) {
    super(), this.callback = e, this.addSpacer = t;
  }
  postConstruct() {
    const e = this.setWidth.bind(this);
    this.addManagedPropertyListener("domLayout", e), this.addManagedEventListeners({
      columnContainerWidthChanged: e,
      displayedColumnsChanged: e,
      leftPinnedWidthChanged: e
    }), this.addSpacer && this.addManagedEventListeners({
      rightPinnedWidthChanged: e,
      scrollVisibilityChanged: e,
      scrollbarWidthChanged: e
    }), this.setWidth();
  }
  setWidth() {
    const e = We(this.gos, "print"), { visibleCols: t, scrollVisibleSvc: s } = this.beans, n = t.bodyWidth, r = t.getColsLeftWidth(), o = t.getDisplayedColumnsRightWidth();
    let i;
    e ? i = n + r + o : (i = n, this.addSpacer && (this.gos.get("enableRtl") ? r : o) === 0 && s.verticalScrollShowing && (i += s.getScrollbarWidth())), this.callback(i);
  }
}, eu = class extends K {
  constructor(e) {
    super(), this.centerContainerCtrl = e;
  }
  wireBeans(e) {
    this.scrollVisibleSvc = e.scrollVisibleSvc;
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, (e) => {
      this.gridBodyCtrl = e.gridBodyCtrl, this.listenForResize();
    }), this.addManagedEventListeners({ scrollbarWidthChanged: this.onScrollbarWidthChanged.bind(this) }), this.addManagedPropertyListeners(["alwaysShowHorizontalScroll", "alwaysShowVerticalScroll"], () => {
      this.checkViewportAndScrolls();
    });
  }
  listenForResize() {
    const { beans: e, centerContainerCtrl: t, gridBodyCtrl: s } = this, n = () => {
      yt(e, () => {
        this.onCenterViewportResized();
      });
    };
    t.registerViewportResizeListener(n), s.registerBodyViewportResizeListener(n);
  }
  onScrollbarWidthChanged() {
    this.checkViewportAndScrolls();
  }
  onCenterViewportResized() {
    if (this.scrollVisibleSvc.updateScrollGap(), this.centerContainerCtrl.isViewportInTheDOMTree()) {
      const { pinnedCols: e, colFlex: t } = this.beans;
      e == null || e.keepPinnedColumnsNarrowerThanViewport(), this.checkViewportAndScrolls();
      const s = this.centerContainerCtrl.getCenterWidth();
      s !== this.centerWidth && (this.centerWidth = s, t == null || t.refreshFlexedColumns({
        viewportWidth: this.centerWidth,
        updateBodyWidths: !0,
        fireResizedEvent: !0
      }));
    } else
      this.bodyHeight = 0;
  }
  // gets called every time the viewport size changes. we use this to check visibility of scrollbars
  // in the grid panel, and also to check size and position of viewport for row and column virtualisation.
  checkViewportAndScrolls() {
    this.updateScrollVisibleService(), this.checkBodyHeight(), this.onHorizontalViewportChanged(), this.gridBodyCtrl.scrollFeature.checkScrollLeft();
  }
  getBodyHeight() {
    return this.bodyHeight;
  }
  checkBodyHeight() {
    const e = this.gridBodyCtrl.eBodyViewport, t = qo(e);
    this.bodyHeight !== t && (this.bodyHeight = t, this.eventSvc.dispatchEvent({
      type: "bodyHeightChanged"
    }));
  }
  updateScrollVisibleService() {
    this.updateScrollVisibleServiceImpl(), setTimeout(this.updateScrollVisibleServiceImpl.bind(this), 500);
  }
  updateScrollVisibleServiceImpl() {
    const e = {
      horizontalScrollShowing: this.centerContainerCtrl.isHorizontalScrollShowing(),
      verticalScrollShowing: this.gridBodyCtrl.isVerticalScrollShowing()
    };
    this.scrollVisibleSvc.setScrollsVisible(e);
  }
  // this gets called whenever a change in the viewport, so we can inform column controller it has to work
  // out the virtual columns again. gets called from following locations:
  // + ensureColVisible, scroll, init, layoutChanged, displayedColumnsChanged
  onHorizontalViewportChanged() {
    const e = this.centerContainerCtrl.getCenterWidth(), t = this.centerContainerCtrl.getViewportScrollLeft();
    this.beans.colViewport.setScrollPosition(e, t);
  }
};
function so(e) {
  if (e.group)
    return e.level;
  const t = e.parent;
  return t ? t.level + 1 : 0;
}
var tu = 0, Xs = "renderedRow", er = class extends K {
  constructor(e, t, s, n, r) {
    var o;
    super(), this.rowNode = e, this.useAnimationFrameForCreate = n, this.printLayout = r, this.allRowGuis = [], this.active = !0, this.centerCellCtrls = { list: [], map: {} }, this.leftCellCtrls = { list: [], map: {} }, this.rightCellCtrls = { list: [], map: {} }, this.slideInAnimation = {
      left: !1,
      center: !1,
      right: !1,
      fullWidth: !1
    }, this.fadeInAnimation = {
      left: !1,
      center: !1,
      right: !1,
      fullWidth: !1
    }, this.rowDragComps = [], this.lastMouseDownOnDragger = !1, this.emptyStyle = {}, this.updateColumnListsPending = !1, this.rowId = null, this.businessKey = null, this.beans = t, this.gos = t.gos, this.paginationPage = ((o = t.pagination) == null ? void 0 : o.getCurrentPage()) ?? 0, this.suppressRowTransform = this.gos.get("suppressRowTransform"), this.instanceId = e.id + "-" + tu++, this.rowId = Ts(e.id), this.initRowBusinessKey(), this.rowFocused = t.focusSvc.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned), this.rowLevel = so(this.rowNode), this.setRowType(), this.setAnimateFlags(s), this.rowStyles = this.processStylesFromGridOptions(), this.addListeners();
  }
  initRowBusinessKey() {
    this.businessKeyForNodeFunc = this.gos.get("getBusinessKeyForNode"), this.updateRowBusinessKey();
  }
  updateRowBusinessKey() {
    if (typeof this.businessKeyForNodeFunc != "function")
      return;
    const e = this.businessKeyForNodeFunc(this.rowNode);
    this.businessKey = Ts(e);
  }
  updateGui(e, t) {
    e === "left" ? this.leftGui = t : e === "right" ? this.rightGui = t : e === "fullWidth" ? this.fullWidthGui = t : this.centerGui = t;
  }
  setComp(e, t, s, n) {
    var u;
    const { context: r, focusSvc: o } = this.beans;
    n = on(this, r, n);
    const i = { rowComp: e, element: t, containerType: s, compBean: n };
    this.allRowGuis.push(i), this.updateGui(s, i), this.initialiseRowComp(i);
    const a = this.rowNode, l = this.rowType === "FullWidthLoading" || a.stub, c = !a.data && this.beans.rowModel.getType() === "infinite";
    !l && !c && !a.rowPinned && this.beans.rowRenderer.dispatchFirstDataRenderedEvent();
    const d = (u = this.fullWidthGui) == null ? void 0 : u.element;
    d && !this.editing && o.isRowFocused(a.rowIndex, a.rowPinned) && o.shouldTakeFocus() && setTimeout(() => d.focus({ preventScroll: !0 }), 0);
  }
  unsetComp(e) {
    this.allRowGuis = this.allRowGuis.filter((t) => t.containerType !== e), this.updateGui(e, void 0);
  }
  isCacheable() {
    return this.rowType === "FullWidthDetail" && this.gos.get("keepDetailRows");
  }
  setCached(e) {
    const t = e ? "none" : "";
    this.allRowGuis.forEach((s) => s.element.style.display = t);
  }
  initialiseRowComp(e) {
    const t = this.gos;
    this.onSuppressCellFocusChanged(this.beans.gos.get("suppressCellFocus")), this.listenOnDomOrder(e), this.onRowHeightChanged(e), this.updateRowIndexes(e), this.setFocusedClasses(e), this.setStylesFromGridOptions(!1, e), ci(t) && this.rowNode.selectable && this.onRowSelected(e), this.updateColumnLists(!this.useAnimationFrameForCreate);
    const s = e.rowComp;
    this.getInitialRowClasses(e.containerType).forEach((r) => s.toggleCss(r, !0)), this.executeSlideAndFadeAnimations(e), this.rowNode.group && ul(e.element, this.rowNode.expanded == !0), this.setRowCompRowId(s), this.setRowCompRowBusinessKey(s), Wt(t, e.element, Xs, this), e.compBean.addDestroyFunc(() => Wt(t, e.element, Xs, null)), this.useAnimationFrameForCreate ? this.beans.animationFrameSvc.createTask(
      this.addHoverFunctionality.bind(this, e),
      this.rowNode.rowIndex,
      "p2",
      !1
    ) : this.addHoverFunctionality(e), this.isFullWidth() && this.setupFullWidth(e), t.get("rowDragEntireRow") && this.addRowDraggerToRow(e), this.useAnimationFrameForCreate && this.beans.animationFrameSvc.addDestroyTask(() => {
      this.isAlive() && e.rowComp.toggleCss("ag-after-created", !0);
    }), this.executeProcessRowPostCreateFunc();
  }
  setRowCompRowBusinessKey(e) {
    this.businessKey != null && e.setRowBusinessKey(this.businessKey);
  }
  setRowCompRowId(e) {
    const t = Ts(this.rowNode.id);
    this.rowId = t, t != null && e.setRowId(t);
  }
  executeSlideAndFadeAnimations(e) {
    const { containerType: t } = e;
    this.slideInAnimation[t] && (Un(() => {
      this.onTopChanged();
    }), this.slideInAnimation[t] = !1), this.fadeInAnimation[t] && (Un(() => {
      e.rowComp.toggleCss("ag-opacity-zero", !1);
    }), this.fadeInAnimation[t] = !1);
  }
  addRowDraggerToRow(e) {
    var n;
    const t = (n = this.beans.rowDragSvc) == null ? void 0 : n.createRowDragCompForRow(this.rowNode, e.element);
    if (!t)
      return;
    const s = this.createBean(t, this.beans.context);
    this.rowDragComps.push(s), e.compBean.addDestroyFunc(() => {
      this.rowDragComps = this.rowDragComps.filter((r) => r !== s), this.destroyBean(s, this.beans.context);
    });
  }
  setupFullWidth(e) {
    const t = this.getPinnedForContainer(e.containerType), s = this.createFullWidthCompDetails(e.element, t);
    e.rowComp.showFullWidth(s);
  }
  getFullWidthCellRenderers() {
    var e, t;
    return this.gos.get("embedFullWidthRows") ? this.allRowGuis.map((s) => {
      var n;
      return (n = s == null ? void 0 : s.rowComp) == null ? void 0 : n.getFullWidthCellRenderer();
    }) : [(t = (e = this.fullWidthGui) == null ? void 0 : e.rowComp) == null ? void 0 : t.getFullWidthCellRenderer()];
  }
  executeProcessRowPostCreateFunc() {
    const e = this.gos.getCallback("processRowPostCreate");
    if (!e || !this.areAllContainersReady())
      return;
    const t = {
      // areAllContainersReady asserts that centerGui is not null
      eRow: this.centerGui.element,
      ePinnedLeftRow: this.leftGui ? this.leftGui.element : void 0,
      ePinnedRightRow: this.rightGui ? this.rightGui.element : void 0,
      node: this.rowNode,
      rowIndex: this.rowNode.rowIndex,
      addRenderedRowListener: this.addEventListener.bind(this)
    };
    e(t);
  }
  areAllContainersReady() {
    const {
      leftGui: e,
      centerGui: t,
      rightGui: s,
      beans: { visibleCols: n }
    } = this, r = !!e || !n.isPinningLeft(), o = !!t, i = !!s || !n.isPinningRight();
    return r && o && i;
  }
  isNodeFullWidthCell() {
    if (this.rowNode.detail)
      return !0;
    const e = this.beans.gos.getCallback("isFullWidthRow");
    return e ? e({ rowNode: this.rowNode }) : !1;
  }
  setRowType() {
    const e = this.rowNode.stub && !this.gos.get("suppressServerSideFullWidthLoadingRow") && !this.gos.get("groupHideOpenParents"), t = this.isNodeFullWidthCell(), s = this.gos.get("masterDetail") && this.rowNode.detail, n = this.beans.colModel.isPivotMode(), r = jl(this.gos, this.rowNode, n);
    e ? this.rowType = "FullWidthLoading" : s ? this.rowType = "FullWidthDetail" : t ? this.rowType = "FullWidth" : r ? this.rowType = "FullWidthGroup" : this.rowType = "Normal";
  }
  updateColumnLists(e = !1, t = !1) {
    if (this.isFullWidth())
      return;
    const { animationFrameSvc: s } = this.beans;
    if (!(s != null && s.active) || e || this.printLayout) {
      this.updateColumnListsImpl(t);
      return;
    }
    this.updateColumnListsPending || (s.createTask(
      () => {
        this.active && this.updateColumnListsImpl(!0);
      },
      this.rowNode.rowIndex,
      "p1",
      !1
    ), this.updateColumnListsPending = !0);
  }
  /**
   * Overridden by SpannedRowCtrl
   */
  getNewCellCtrl(e) {
    var s;
    if (!((s = this.beans.rowSpanSvc) != null && s.isCellSpanning(e, this.rowNode)))
      return new As(e, this.rowNode, this.beans, this);
  }
  /**
   * Overridden by SpannedRowCtrl, if span context changes cell needs rebuilt
   */
  isCorrectCtrlForSpan(e) {
    var t;
    return !((t = this.beans.rowSpanSvc) != null && t.isCellSpanning(e.column, this.rowNode));
  }
  createCellCtrls(e, t, s = null) {
    const n = {
      list: [],
      map: {}
    }, r = (c, d, u) => {
      u != null ? n.list.splice(u, 0, d) : n.list.push(d), n.map[c] = d;
    }, o = [];
    for (const c of t) {
      const d = c.getInstanceId();
      let u = e.map[d];
      u && !this.isCorrectCtrlForSpan(u) && (u.destroy(), u = void 0), u || (u = this.getNewCellCtrl(c)), u && r(d, u);
    }
    for (const c of e.list) {
      const d = c.column.getInstanceId();
      if (n.map[d] != null)
        continue;
      !this.isCellEligibleToBeRemoved(c, s) ? o.push([d, c]) : c.destroy();
    }
    if (o.length)
      for (const [c, d] of o) {
        const u = n.list.findIndex((g) => g.column.getLeft() > d.column.getLeft()), h = u === -1 ? void 0 : Math.max(u - 1, 0);
        r(c, d, h);
      }
    const { focusSvc: i, visibleCols: a } = this.beans, l = i.getFocusedCell();
    if (l && l.column.getPinned() == s) {
      const c = l.column.getInstanceId();
      if (!n.map[c] && a.allCols.includes(l.column)) {
        const u = this.createFocusedCellCtrl();
        if (u) {
          const h = n.list.findIndex((f) => f.column.getLeft() > u.column.getLeft()), g = h === -1 ? void 0 : Math.max(h - 1, 0);
          r(c, u, g);
        }
      }
    }
    return n;
  }
  /**
   * Creates a new cell ctrl for the focused cell, if this is the correct row ctrl.
   * @returns a CellCtrl for the focused cell, if required.
   */
  createFocusedCellCtrl() {
    const { focusSvc: e, rowSpanSvc: t } = this.beans, s = e.getFocusedCell();
    if (!s)
      return;
    const n = t == null ? void 0 : t.getCellSpan(s.column, this.rowNode);
    if (n) {
      if (n.firstNode !== this.rowNode || !n.doesSpanContain(s))
        return;
    } else if (!e.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned))
      return;
    return this.getNewCellCtrl(s.column);
  }
  updateColumnListsImpl(e) {
    this.updateColumnListsPending = !1, this.createAllCellCtrls(), this.setCellCtrls(e);
  }
  setCellCtrls(e) {
    this.allRowGuis.forEach((t) => {
      const s = this.getCellCtrlsForContainer(t.containerType);
      t.rowComp.setCellCtrls(s, e);
    });
  }
  getCellCtrlsForContainer(e) {
    switch (e) {
      case "left":
        return this.leftCellCtrls.list;
      case "right":
        return this.rightCellCtrls.list;
      case "fullWidth":
        return [];
      case "center":
        return this.centerCellCtrls.list;
    }
  }
  createAllCellCtrls() {
    const e = this.beans.colViewport, t = this.beans.visibleCols;
    if (this.printLayout)
      this.centerCellCtrls = this.createCellCtrls(this.centerCellCtrls, t.allCols), this.leftCellCtrls = { list: [], map: {} }, this.rightCellCtrls = { list: [], map: {} };
    else {
      const s = e.getColsWithinViewport(this.rowNode);
      this.centerCellCtrls = this.createCellCtrls(this.centerCellCtrls, s);
      const n = t.getLeftColsForRow(this.rowNode);
      this.leftCellCtrls = this.createCellCtrls(this.leftCellCtrls, n, "left");
      const r = t.getRightColsForRow(this.rowNode);
      this.rightCellCtrls = this.createCellCtrls(this.rightCellCtrls, r, "right");
    }
  }
  isCellEligibleToBeRemoved(e, t) {
    const { column: r } = e;
    if (r.getPinned() != t || !this.isCorrectCtrlForSpan(e))
      return !0;
    const { editing: o } = e, { visibleCols: i } = this.beans, a = e.isCellFocused();
    return o || a ? !(i.allCols.indexOf(r) >= 0) : !0;
  }
  getDomOrder() {
    return this.gos.get("ensureDomOrder") || We(this.gos, "print");
  }
  listenOnDomOrder(e) {
    const t = () => {
      e.rowComp.setDomOrder(this.getDomOrder());
    };
    e.compBean.addManagedPropertyListeners(["domLayout", "ensureDomOrder"], t);
  }
  setAnimateFlags(e) {
    if (this.rowNode.sticky || !e)
      return;
    const t = te(this.rowNode.oldRowTop), { visibleCols: s } = this.beans, n = s.isPinningLeft(), r = s.isPinningRight();
    if (t) {
      const { slideInAnimation: o } = this;
      if (this.isFullWidth() && !this.gos.get("embedFullWidthRows")) {
        o.fullWidth = !0;
        return;
      }
      o.center = !0, o.left = n, o.right = r;
    } else {
      const { fadeInAnimation: o } = this;
      if (this.isFullWidth() && !this.gos.get("embedFullWidthRows")) {
        o.fullWidth = !0;
        return;
      }
      o.center = !0, o.left = n, o.right = r;
    }
  }
  isFullWidth() {
    return this.rowType !== "Normal";
  }
  refreshFullWidth() {
    const e = (i, a) => i ? i.rowComp.refreshFullWidth(() => this.createFullWidthCompDetails(i.element, a).params) : !0, t = e(this.fullWidthGui, null), s = e(this.centerGui, null), n = e(this.leftGui, "left"), r = e(this.rightGui, "right");
    return t && s && n && r;
  }
  addListeners() {
    var e;
    this.addManagedListeners(this.rowNode, {
      heightChanged: () => this.onRowHeightChanged(),
      rowSelected: () => this.onRowSelected(),
      rowIndexChanged: this.onRowIndexChanged.bind(this),
      topChanged: this.onTopChanged.bind(this),
      ...((e = this.beans.expansionSvc) == null ? void 0 : e.getRowExpandedListeners(this)) ?? {}
    }), this.rowNode.detail && this.addManagedListeners(this.rowNode.parent, { dataChanged: this.onRowNodeDataChanged.bind(this) }), this.addManagedListeners(this.rowNode, {
      dataChanged: this.onRowNodeDataChanged.bind(this),
      cellChanged: this.postProcessCss.bind(this),
      rowHighlightChanged: this.onRowNodeHighlightChanged.bind(this),
      draggingChanged: this.postProcessRowDragging.bind(this),
      uiLevelChanged: this.onUiLevelChanged.bind(this),
      rowPinned: this.onRowPinned.bind(this)
    }), this.addManagedListeners(this.beans.eventSvc, {
      paginationPixelOffsetChanged: this.onPaginationPixelOffsetChanged.bind(this),
      heightScaleChanged: this.onTopChanged.bind(this),
      displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this),
      virtualColumnsChanged: this.onVirtualColumnsChanged.bind(this),
      cellFocused: this.onCellFocusChanged.bind(this),
      cellFocusCleared: this.onCellFocusChanged.bind(this),
      paginationChanged: this.onPaginationChanged.bind(this),
      modelUpdated: this.refreshFirstAndLastRowStyles.bind(this),
      columnMoved: () => this.updateColumnLists()
    }), this.beans.rowSpanSvc && this.addManagedListeners(this.beans.rowSpanSvc, {
      spannedCellsUpdated: ({ pinned: t }) => {
        t && !this.rowNode.rowPinned || this.updateColumnLists();
      }
    }), this.addDestroyFunc(() => {
      this.rowDragComps = this.destroyBeans(this.rowDragComps, this.beans.context), this.tooltipFeature = this.destroyBean(this.tooltipFeature, this.beans.context);
    }), this.addManagedPropertyListeners(
      ["rowStyle", "getRowStyle", "rowClass", "getRowClass", "rowClassRules"],
      this.postProcessCss.bind(this)
    ), this.addManagedPropertyListener("rowDragEntireRow", () => {
      if (this.gos.get("rowDragEntireRow")) {
        this.allRowGuis.forEach((s) => {
          this.addRowDraggerToRow(s);
        });
        return;
      }
      this.rowDragComps = this.destroyBeans(this.rowDragComps, this.beans.context);
    }), this.addListenersForCellComps();
  }
  addListenersForCellComps() {
    this.addManagedListeners(this.rowNode, {
      rowIndexChanged: () => {
        this.getAllCellCtrls().forEach((e) => e.onRowIndexChanged());
      },
      cellChanged: (e) => {
        this.getAllCellCtrls().forEach((t) => t.onCellChanged(e));
      }
    });
  }
  /** Should only ever be triggered on source rows (i.e. not on pinned siblings) */
  onRowPinned() {
    for (const e of this.allRowGuis)
      e.rowComp.toggleCss("ag-row-pinned-source", !!this.rowNode.pinnedSibling);
  }
  onRowNodeDataChanged(e) {
    if (this.isFullWidth() !== !!this.isNodeFullWidthCell()) {
      this.beans.rowRenderer.redrawRow(this.rowNode);
      return;
    }
    if (this.isFullWidth()) {
      this.refreshFullWidth() || this.beans.rowRenderer.redrawRow(this.rowNode);
      return;
    }
    this.getAllCellCtrls().forEach(
      (s) => s.refreshCell({
        suppressFlash: !e.update,
        newData: !e.update
      })
    ), this.allRowGuis.forEach((s) => {
      this.setRowCompRowId(s.rowComp), this.updateRowBusinessKey(), this.setRowCompRowBusinessKey(s.rowComp);
    }), this.onRowSelected(), this.postProcessCss();
  }
  postProcessCss() {
    this.setStylesFromGridOptions(!0), this.postProcessClassesFromGridOptions(), this.postProcessRowClassRules(), this.postProcessRowDragging();
  }
  onRowNodeHighlightChanged() {
    const e = this.rowNode.highlighted;
    this.allRowGuis.forEach((t) => {
      const s = e === "Above", n = e === "Below";
      t.rowComp.toggleCss("ag-row-highlight-above", s), t.rowComp.toggleCss("ag-row-highlight-below", n);
    });
  }
  postProcessRowDragging() {
    const e = this.rowNode.dragging;
    this.allRowGuis.forEach((t) => t.rowComp.toggleCss("ag-row-dragging", e));
  }
  onDisplayedColumnsChanged() {
    var e;
    this.updateColumnLists(!0), (e = this.beans.rowAutoHeight) == null || e.requestCheckAutoHeight();
  }
  onVirtualColumnsChanged() {
    this.updateColumnLists(!1, !0);
  }
  getRowPosition() {
    return {
      rowPinned: Dt(this.rowNode.rowPinned),
      rowIndex: this.rowNode.rowIndex
    };
  }
  onKeyboardNavigate(e) {
    const t = this.findFullWidthInfoForEvent(e);
    if (!t)
      return;
    const { rowGui: s, column: n } = t;
    if (!(s.element === e.target))
      return;
    const i = this.rowNode, { focusSvc: a, navigation: l } = this.beans, c = a.getFocusedCell(), d = {
      rowIndex: i.rowIndex,
      rowPinned: i.rowPinned,
      column: (c == null ? void 0 : c.column) ?? n
    };
    l == null || l.navigateToNextCell(e, e.key, d, !0), e.preventDefault();
  }
  onTabKeyDown(e) {
    var a;
    if (e.defaultPrevented || mt(e))
      return;
    const t = this.allRowGuis.find(
      (l) => l.element.contains(e.target)
    ), s = t ? t.element : null, n = s === e.target, r = Oe(this.beans);
    let o = !1;
    s && r && (o = s.contains(r) && r.classList.contains("ag-cell"));
    let i = null;
    !n && !o && (i = an(this.beans, s, !1, e.shiftKey)), (this.isFullWidth() && n || !i) && ((a = this.beans.navigation) == null || a.onTabKeyDown(this, e));
  }
  getFullWidthElement() {
    return this.fullWidthGui ? this.fullWidthGui.element : null;
  }
  getRowYPosition() {
    var t;
    const e = (t = this.allRowGuis.find((s) => $t(s.element))) == null ? void 0 : t.element;
    return e ? e.getBoundingClientRect().top : 0;
  }
  onSuppressCellFocusChanged(e) {
    const t = this.isFullWidth() && e ? void 0 : -1;
    this.allRowGuis.forEach((s) => {
      Ot(s.element, "tabindex", t);
    });
  }
  onFullWidthRowFocused(e) {
    var r, o, i;
    const t = this.rowNode, s = e ? this.isFullWidth() && e.rowIndex === t.rowIndex && e.rowPinned == t.rowPinned : !1;
    let n;
    if (this.fullWidthGui)
      n = this.fullWidthGui.element;
    else {
      const a = this.beans.colModel.getCol(e == null ? void 0 : e.column), l = a == null ? void 0 : a.pinned;
      l ? n = l === "right" ? (r = this.rightGui) == null ? void 0 : r.element : (o = this.leftGui) == null ? void 0 : o.element : n = (i = this.centerGui) == null ? void 0 : i.element;
    }
    n && (n.classList.toggle("ag-full-width-focus", s), s && (e != null && e.forceBrowserFocus) && n.focus({ preventScroll: !0 }));
  }
  recreateCell(e) {
    this.centerCellCtrls = this.removeCellCtrl(this.centerCellCtrls, e), this.leftCellCtrls = this.removeCellCtrl(this.leftCellCtrls, e), this.rightCellCtrls = this.removeCellCtrl(this.rightCellCtrls, e), e.destroy(), this.updateColumnLists();
  }
  removeCellCtrl(e, t) {
    const s = {
      list: [],
      map: {}
    };
    return e.list.forEach((n) => {
      n !== t && (s.list.push(n), s.map[n.column.getInstanceId()] = n);
    }), s;
  }
  onMouseEvent(e, t) {
    switch (e) {
      case "dblclick":
        this.onRowDblClick(t);
        break;
      case "click":
        this.onRowClick(t);
        break;
      case "touchstart":
      case "mousedown":
        this.onRowMouseDown(t);
        break;
    }
  }
  createRowEvent(e, t) {
    const { rowNode: s } = this;
    return ge(this.gos, {
      type: e,
      node: s,
      data: s.data,
      rowIndex: s.rowIndex,
      rowPinned: s.rowPinned,
      event: t
    });
  }
  createRowEventWithSource(e, t) {
    const s = this.createRowEvent(e, t);
    return s.source = this, s;
  }
  onRowDblClick(e) {
    mt(e) || this.beans.eventSvc.dispatchEvent(this.createRowEventWithSource("rowDoubleClicked", e));
  }
  findFullWidthInfoForEvent(e) {
    if (!e)
      return;
    const t = this.findFullWidthRowGui(e.target), s = this.getColumnForFullWidth(t);
    if (!(!t || !s))
      return { rowGui: t, column: s };
  }
  findFullWidthRowGui(e) {
    return this.allRowGuis.find((t) => t.element.contains(e));
  }
  getColumnForFullWidth(e) {
    const { visibleCols: t } = this.beans;
    switch (e == null ? void 0 : e.containerType) {
      case "center":
        return t.centerCols[0];
      case "left":
        return t.leftCols[0];
      case "right":
        return t.rightCols[0];
      default:
        return t.allCols[0];
    }
  }
  onRowMouseDown(e) {
    if (this.lastMouseDownOnDragger = Ht(e.target, "ag-row-drag", 3), !this.isFullWidth())
      return;
    const t = this.rowNode, { rangeSvc: s, focusSvc: n } = this.beans;
    s == null || s.removeAllCellRanges();
    const r = this.findFullWidthInfoForEvent(e);
    if (!r)
      return;
    const { rowGui: o, column: i } = r, a = o.element, l = e.target;
    let c = e.defaultPrevented || ar();
    a && a.contains(l) && lr(l) && (c = !1), n.setFocusedCell({
      rowIndex: t.rowIndex,
      column: i,
      rowPinned: t.rowPinned,
      forceBrowserFocus: c
    });
  }
  onRowClick(e) {
    if (mt(e) || this.lastMouseDownOnDragger)
      return;
    const { eventSvc: s, selectionSvc: n } = this.beans;
    s.dispatchEvent(this.createRowEventWithSource("rowClicked", e)), n == null || n.handleSelectionEvent(e, this.rowNode, "rowClicked");
  }
  setupDetailRowAutoHeight(e) {
    var t;
    this.rowType === "FullWidthDetail" && ((t = this.beans.masterDetailSvc) == null || t.setupDetailRowAutoHeight(this, e));
  }
  createFullWidthCompDetails(e, t) {
    const { gos: s, rowNode: n } = this, r = ge(s, {
      fullWidth: !0,
      data: n.data,
      node: n,
      value: n.key,
      valueFormatted: n.key,
      // these need to be taken out, as part of 'afterAttached' now
      eGridCell: e,
      eParentOfValue: e,
      pinned: t,
      addRenderedRowListener: this.addEventListener.bind(this),
      // This is not on the type of ICellRendererParams
      registerRowDragger: (i, a, l, c) => this.addFullWidthRowDragging(i, a, l, c),
      setTooltip: (i, a) => {
        s.assertModuleRegistered("Tooltip", 3), this.refreshRowTooltip(i, a);
      }
    }), o = this.beans.userCompFactory;
    switch (this.rowType) {
      case "FullWidthDetail":
        return rd(o, r);
      case "FullWidthGroup": {
        const { value: i, valueFormatted: a } = this.beans.valueSvc.getValueForDisplay(void 0, this.rowNode, !0);
        return r.value = i, r.valueFormatted = a, nd(o, r);
      }
      case "FullWidthLoading":
        return sd(o, r);
      default:
        return td(o, r);
    }
  }
  refreshRowTooltip(e, t) {
    var s;
    this.fullWidthGui && (this.tooltipFeature = (s = this.beans.tooltipSvc) == null ? void 0 : s.refreshRowTooltip(
      this.tooltipFeature,
      this,
      e,
      t
    ));
  }
  addFullWidthRowDragging(e, t, s = "", n) {
    const { rowDragSvc: r, context: o } = this.beans;
    if (!r || !this.isFullWidth())
      return;
    const i = r.createRowDragComp(
      () => s,
      this.rowNode,
      void 0,
      e,
      t,
      n
    );
    this.createBean(i, o), this.addDestroyFunc(() => {
      this.destroyBean(i, o);
    });
  }
  onUiLevelChanged() {
    const e = so(this.rowNode);
    if (this.rowLevel != e) {
      const t = "ag-row-level-" + e, s = "ag-row-level-" + this.rowLevel;
      this.allRowGuis.forEach((n) => {
        n.rowComp.toggleCss(t, !0), n.rowComp.toggleCss(s, !1);
      });
    }
    this.rowLevel = e;
  }
  isFirstRowOnPage() {
    return this.rowNode.rowIndex === this.beans.pageBounds.getFirstRow();
  }
  isLastRowOnPage() {
    return this.rowNode.rowIndex === this.beans.pageBounds.getLastRow();
  }
  refreshFirstAndLastRowStyles() {
    const e = this.isFirstRowOnPage(), t = this.isLastRowOnPage();
    this.firstRowOnPage !== e && (this.firstRowOnPage = e, this.allRowGuis.forEach((s) => s.rowComp.toggleCss("ag-row-first", e))), this.lastRowOnPage !== t && (this.lastRowOnPage = t, this.allRowGuis.forEach((s) => s.rowComp.toggleCss("ag-row-last", t)));
  }
  getAllCellCtrls() {
    return this.leftCellCtrls.list.length === 0 && this.rightCellCtrls.list.length === 0 ? this.centerCellCtrls.list : [...this.centerCellCtrls.list, ...this.leftCellCtrls.list, ...this.rightCellCtrls.list];
  }
  postProcessClassesFromGridOptions() {
    var t;
    const e = [];
    (t = this.beans.rowStyleSvc) == null || t.processClassesFromGridOptions(e, this.rowNode), e.length && e.forEach((s) => {
      this.allRowGuis.forEach((n) => n.rowComp.toggleCss(s, !0));
    });
  }
  postProcessRowClassRules() {
    var e;
    (e = this.beans.rowStyleSvc) == null || e.processRowClassRules(
      this.rowNode,
      (t) => {
        this.allRowGuis.forEach((s) => s.rowComp.toggleCss(t, !0));
      },
      (t) => {
        this.allRowGuis.forEach((s) => s.rowComp.toggleCss(t, !1));
      }
    );
  }
  setStylesFromGridOptions(e, t) {
    e && (this.rowStyles = this.processStylesFromGridOptions()), this.forEachGui(t, (s) => s.rowComp.setUserStyles(this.rowStyles));
  }
  getPinnedForContainer(e) {
    return e === "left" || e === "right" ? e : null;
  }
  getInitialRowClasses(e) {
    var a, l;
    const t = this.getPinnedForContainer(e), s = this.isFullWidth(), { rowNode: n, beans: r } = this, o = [];
    o.push("ag-row"), o.push(this.rowFocused ? "ag-row-focus" : "ag-row-no-focus"), this.fadeInAnimation[e] && o.push("ag-opacity-zero"), o.push(n.rowIndex % 2 === 0 ? "ag-row-even" : "ag-row-odd"), n.isRowPinned() && (o.push("ag-row-pinned"), (a = r.pinnedRowModel) != null && a.isManual() && o.push("ag-row-pinned-manual")), !n.isRowPinned() && n.pinnedSibling && o.push("ag-row-pinned-source"), n.isSelected() && o.push("ag-row-selected"), n.footer && o.push("ag-row-footer"), o.push("ag-row-level-" + this.rowLevel), n.stub && o.push("ag-row-loading"), s && o.push("ag-full-width-row"), (l = r.expansionSvc) == null || l.addExpandedCss(o, n), n.dragging && o.push("ag-row-dragging");
    const { rowStyleSvc: i } = r;
    return i && (i.processClassesFromGridOptions(o, n), i.preProcessRowClassRules(o, n)), o.push(this.printLayout ? "ag-row-position-relative" : "ag-row-position-absolute"), this.isFirstRowOnPage() && o.push("ag-row-first"), this.isLastRowOnPage() && o.push("ag-row-last"), s && (t === "left" && o.push("ag-cell-last-left-pinned"), t === "right" && o.push("ag-cell-first-right-pinned")), o;
  }
  processStylesFromGridOptions() {
    var e;
    return ((e = this.beans.rowStyleSvc) == null ? void 0 : e.processStylesFromGridOptions(this.rowNode)) ?? this.emptyStyle;
  }
  onRowSelected(e) {
    var t;
    (t = this.beans.selectionSvc) == null || t.onRowCtrlSelected(
      this,
      (s) => {
        (s === this.centerGui || s === this.fullWidthGui) && this.announceDescription();
      },
      e
    );
  }
  announceDescription() {
    var e;
    (e = this.beans.selectionSvc) == null || e.announceAriaRowSelection(this.rowNode);
  }
  addHoverFunctionality(e) {
    if (!this.active)
      return;
    const { element: t, compBean: s } = e, { rowNode: n, beans: r, gos: o } = this;
    s.addManagedListeners(t, {
      mouseenter: () => n.dispatchRowEvent("mouseEnter"),
      mouseleave: () => n.dispatchRowEvent("mouseLeave")
    }), s.addManagedListeners(n, {
      mouseEnter: () => {
        var i;
        !((i = r.dragSvc) != null && i.dragging) && !o.get("suppressRowHoverHighlight") && (t.classList.add("ag-row-hover"), n.setHovered(!0));
      },
      mouseLeave: () => {
        this.resetHoveredStatus(t);
      }
    });
  }
  resetHoveredStatus(e) {
    const t = e ? [e] : this.allRowGuis.map((s) => s.element);
    for (const s of t)
      s.classList.remove("ag-row-hover");
    this.rowNode.setHovered(!1);
  }
  // for animation, we don't want to animate entry or exit to a very far away pixel,
  // otherwise the row would move so fast, it would appear to disappear. so this method
  // moves the row closer to the viewport if it is far away, so the row slide in / out
  // at a speed the user can see.
  roundRowTopToBounds(e) {
    const t = this.beans.ctrlsSvc.getScrollFeature().getApproximateVScollPosition(), s = this.applyPaginationOffset(t.top, !0) - 100, n = this.applyPaginationOffset(t.bottom, !0) + 100;
    return Math.min(Math.max(s, e), n);
  }
  forEachGui(e, t) {
    e ? t(e) : this.allRowGuis.forEach(t);
  }
  isRowRendered() {
    return this.allRowGuis.length > 0;
  }
  onRowHeightChanged(e) {
    if (this.rowNode.rowHeight == null)
      return;
    const t = this.rowNode.rowHeight, s = this.beans.environment.getDefaultRowHeight(), r = di(this.gos) ? Wl(this.beans, this.rowNode).height : void 0, o = r ? `${Math.min(s, r) - 2}px` : void 0;
    this.forEachGui(e, (i) => {
      i.element.style.height = `${t}px`, o && i.element.style.setProperty("--ag-line-height", o);
    });
  }
  // note - this is NOT called by context, as we don't wire / unwire the CellComp for performance reasons.
  destroyFirstPass(e = !1) {
    var n;
    this.active = !1;
    const { rowNode: t } = this;
    if (!e && gr(this.gos) && !t.sticky)
      if (t.rowTop != null) {
        const o = this.roundRowTopToBounds(t.rowTop);
        this.setRowTop(o);
      } else
        this.allRowGuis.forEach((o) => o.rowComp.toggleCss("ag-opacity-zero", !0));
    (n = this.fullWidthGui) != null && n.element.contains(Oe(this.beans)) && this.beans.focusSvc.attemptToRecoverFocus(), t.setHovered(!1);
    const s = this.createRowEvent("virtualRowRemoved");
    this.dispatchLocalEvent(s), this.beans.eventSvc.dispatchEvent(s), super.destroy();
  }
  destroySecondPass() {
    var t;
    this.allRowGuis.length = 0, (t = this.beans.editSvc) == null || t.stopRowEditing(this);
    const e = (s) => (s.list.forEach((n) => n.destroy()), { list: [], map: {} });
    this.centerCellCtrls = e(this.centerCellCtrls), this.leftCellCtrls = e(this.leftCellCtrls), this.rightCellCtrls = e(this.rightCellCtrls);
  }
  setFocusedClasses(e) {
    this.forEachGui(e, (t) => {
      t.rowComp.toggleCss("ag-row-focus", this.rowFocused), t.rowComp.toggleCss("ag-row-no-focus", !this.rowFocused);
    });
  }
  onCellFocusChanged() {
    const { focusSvc: e, editSvc: t } = this.beans, s = e.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned);
    s !== this.rowFocused && (this.rowFocused = s, this.setFocusedClasses()), !s && this.editing && (t == null || t.stopRowEditing(this, !1));
  }
  onPaginationChanged() {
    var t;
    const e = ((t = this.beans.pagination) == null ? void 0 : t.getCurrentPage()) ?? 0;
    this.paginationPage !== e && (this.paginationPage = e, this.onTopChanged()), this.refreshFirstAndLastRowStyles();
  }
  onTopChanged() {
    this.setRowTop(this.rowNode.rowTop);
  }
  onPaginationPixelOffsetChanged() {
    this.onTopChanged();
  }
  // applies pagination offset, eg if on second page, and page height is 500px, then removes
  // 500px from the top position, so a row with rowTop 600px is displayed at location 100px.
  // reverse will take the offset away rather than add.
  applyPaginationOffset(e, t = !1) {
    if (this.rowNode.isRowPinned() || this.rowNode.sticky)
      return e;
    const s = this.beans.pageBounds.getPixelOffset();
    return e + s * (t ? 1 : -1);
  }
  setRowTop(e) {
    if (!this.printLayout && te(e)) {
      const t = this.applyPaginationOffset(e), r = `${this.rowNode.isRowPinned() || this.rowNode.sticky ? t : this.beans.rowContainerHeight.getRealPixelPosition(t)}px`;
      this.setRowTopStyle(r);
    }
  }
  // the top needs to be set into the DOM element when the element is created, not updated afterwards.
  // otherwise the transition would not work, as it would be transitioning from zero (the unset value).
  // for example, suppose a row that is outside the viewport, then user does a filter to remove other rows
  // and this row now appears in the viewport, and the row moves up (ie it was under the viewport and not rendered,
  // but now is in the viewport) then a new RowComp is created, however it should have it's position initialised
  // to below the viewport, so the row will appear to animate up. if we didn't set the initial position at creation
  // time, the row would animate down (ie from position zero).
  getInitialRowTop(e) {
    return this.suppressRowTransform ? this.getInitialRowTopShared(e) : void 0;
  }
  getInitialTransform(e) {
    return this.suppressRowTransform ? void 0 : `translateY(${this.getInitialRowTopShared(e)})`;
  }
  getInitialRowTopShared(e) {
    if (this.printLayout)
      return "";
    const t = this.rowNode;
    let s;
    if (t.sticky)
      s = t.stickyRowTop;
    else {
      const n = this.slideInAnimation[e] ? this.roundRowTopToBounds(t.oldRowTop) : t.rowTop, r = this.applyPaginationOffset(n);
      s = t.isRowPinned() ? r : this.beans.rowContainerHeight.getRealPixelPosition(r);
    }
    return s + "px";
  }
  setRowTopStyle(e) {
    this.allRowGuis.forEach(
      (t) => this.suppressRowTransform ? t.rowComp.setTop(e) : t.rowComp.setTransform(`translateY(${e})`)
    );
  }
  getCellCtrl(e, t = !1) {
    let s = null;
    return this.getAllCellCtrls().forEach((n) => {
      n.column == e && (s = n);
    }), s != null || t || this.getAllCellCtrls().forEach((n) => {
      n.getColSpanningList().indexOf(e) >= 0 && (s = n);
    }), s;
  }
  onRowIndexChanged() {
    this.rowNode.rowIndex != null && (this.onCellFocusChanged(), this.updateRowIndexes(), this.postProcessCss());
  }
  updateRowIndexes(e) {
    var o, i;
    const t = this.rowNode.getRowIndexString();
    if (t === null)
      return;
    const s = (((o = this.beans.ctrlsSvc.getHeaderRowContainerCtrl()) == null ? void 0 : o.getRowCount()) ?? 0) + (((i = this.beans.filterManager) == null ? void 0 : i.getHeaderRowCount()) ?? 0), n = this.rowNode.rowIndex % 2 === 0, r = s + this.rowNode.rowIndex + 1;
    this.forEachGui(e, (a) => {
      a.rowComp.setRowIndex(t), a.rowComp.toggleCss("ag-row-even", n), a.rowComp.toggleCss("ag-row-odd", !n), gl(a.element, r);
    });
  }
};
function su(e) {
  var s;
  return e.altKey || e.ctrlKey || e.metaKey ? !1 : ((s = e.key) == null ? void 0 : s.length) === 1;
}
function no(e, t, s, n, r) {
  const o = n ? n.getColDef().suppressKeyboardEvent : void 0;
  if (!o)
    return !1;
  const i = ge(e, {
    event: t,
    editing: r,
    column: n,
    node: s,
    data: s.data,
    colDef: n.getColDef()
  });
  return !!(o && o(i));
}
function nu(e) {
  const { pinnedRowModel: t, rowModel: s } = e, [n, r] = [
    (t == null ? void 0 : t.isEmpty("top")) ?? !0,
    (t == null ? void 0 : t.isEmpty("bottom")) ?? !0
  ], o = n ? null : "top";
  let i, a;
  r ? (i = null, a = s.getRowCount() - 1) : (i = "bottom", a = (t == null ? void 0 : t.getPinnedBottomRowCount()) ?? -1);
  const { visibleCols: l, rangeSvc: c } = e, d = l.allCols;
  !c || !(d != null && d.length) || c.setCellRange({
    rowStartIndex: 0,
    rowStartPinned: o,
    rowEndIndex: a,
    rowEndPinned: i
  });
}
var ru = 65, ou = 67, iu = 86, au = 68, lu = 90, cu = 89;
function du(e) {
  const { keyCode: t } = e;
  let s;
  switch (t) {
    case ru:
      s = j.A;
      break;
    case ou:
      s = j.C;
      break;
    case iu:
      s = j.V;
      break;
    case au:
      s = j.D;
      break;
    case lu:
      s = j.Z;
      break;
    case cu:
      s = j.Y;
      break;
    default:
      s = e.code;
  }
  return s;
}
var uu = class extends K {
  constructor(e) {
    super(), this.element = e;
  }
  postConstruct() {
    var e;
    this.addKeyboardListeners(), this.addMouseListeners(), (e = this.beans.touchSvc) == null || e.mockRowContextMenu(this);
  }
  addKeyboardListeners() {
    const e = "keydown", t = this.processKeyboardEvent.bind(this, e);
    this.addManagedElementListeners(this.element, { [e]: t });
  }
  addMouseListeners() {
    ["dblclick", "contextmenu", "mouseover", "mouseout", "click", mi("touchstart") ? "touchstart" : "mousedown"].forEach((s) => {
      const n = this.processMouseEvent.bind(this, s);
      this.addManagedElementListeners(this.element, { [s]: n });
    });
  }
  processMouseEvent(e, t) {
    var r;
    if (!ds(this.gos, t) || mt(t))
      return;
    const { cellCtrl: s, rowCtrl: n } = this.getControlsForEventTarget(t.target);
    e === "contextmenu" ? (s != null && s.column && s.dispatchCellContextMenuEvent(t), (r = this.beans.contextMenuSvc) == null || r.handleContextMenuMouseEvent(t, void 0, n, s)) : (s && s.onMouseEvent(e, t), n && n.onMouseEvent(e, t));
  }
  getControlsForEventTarget(e) {
    const { gos: t } = this;
    return {
      cellCtrl: Oi(t, e),
      rowCtrl: wi(t, e, Xs)
    };
  }
  processKeyboardEvent(e, t) {
    const { cellCtrl: s, rowCtrl: n } = this.getControlsForEventTarget(t.target);
    t.defaultPrevented || (s ? this.processCellKeyboardEvent(s, e, t) : n && n.isFullWidth() && this.processFullWidthRowKeyboardEvent(n, e, t));
  }
  processCellKeyboardEvent(e, t, s) {
    var a;
    const { rowNode: n, column: r, editing: o } = e;
    !no(
      this.gos,
      s,
      n,
      r,
      o
    ) && t === "keydown" && (!o && ((a = this.beans.navigation) != null && a.handlePageScrollingKey(s)) || e.onKeyDown(s), this.doGridOperations(s, e.editing), su(s) && e.processCharacter(s)), t === "keydown" && this.eventSvc.dispatchEvent(e.createEvent(s, "cellKeyDown"));
  }
  processFullWidthRowKeyboardEvent(e, t, s) {
    const { rowNode: n } = e, { focusSvc: r, navigation: o } = this.beans, i = r.getFocusedCell(), a = i && i.column;
    if (!no(this.gos, s, n, a, !1)) {
      const c = s.key;
      if (t === "keydown")
        switch (c) {
          case j.PAGE_HOME:
          case j.PAGE_END:
          case j.PAGE_UP:
          case j.PAGE_DOWN:
            o == null || o.handlePageScrollingKey(s, !0);
            break;
          case j.LEFT:
          case j.RIGHT:
            if (!this.gos.get("embedFullWidthRows"))
              break;
          case j.UP:
          case j.DOWN:
            e.onKeyboardNavigate(s);
            break;
          case j.TAB:
            e.onTabKeyDown(s);
            break;
        }
    }
    t === "keydown" && this.eventSvc.dispatchEvent(e.createRowEvent("cellKeyDown", s));
  }
  doGridOperations(e, t) {
    if (!e.ctrlKey && !e.metaKey || t || !ds(this.gos, e))
      return;
    const s = du(e), { clipboardSvc: n, undoRedo: r } = this.beans;
    if (s === j.A)
      return this.onCtrlAndA(e);
    if (s === j.C)
      return this.onCtrlAndC(n, e);
    if (s === j.D)
      return this.onCtrlAndD(n, e);
    if (s === j.V)
      return this.onCtrlAndV(n, e);
    if (s === j.X)
      return this.onCtrlAndX(n, e);
    if (s === j.Y)
      return this.onCtrlAndY(r);
    if (s === j.Z)
      return this.onCtrlAndZ(r, e);
  }
  onCtrlAndA(e) {
    const {
      beans: { rowModel: t, rangeSvc: s, selectionSvc: n },
      gos: r
    } = this;
    s && ls(r) && t.isRowsToRender() ? nu(this.beans) : n && (n == null || n.selectAllRowNodes({ source: "keyboardSelectAll", selectAll: Zl(r) })), e.preventDefault();
  }
  onCtrlAndC(e, t) {
    if (!e || this.gos.get("enableCellTextSelection"))
      return;
    const { cellCtrl: s, rowCtrl: n } = this.getControlsForEventTarget(t.target);
    s != null && s.editing || n != null && n.editing || (t.preventDefault(), e.copyToClipboard());
  }
  onCtrlAndX(e, t) {
    if (!e || this.gos.get("enableCellTextSelection") || this.gos.get("suppressCutToClipboard"))
      return;
    const { cellCtrl: s, rowCtrl: n } = this.getControlsForEventTarget(t.target);
    s != null && s.editing || n != null && n.editing || (t.preventDefault(), e.cutToClipboard(void 0, "ui"));
  }
  onCtrlAndV(e, t) {
    const { cellCtrl: s, rowCtrl: n } = this.getControlsForEventTarget(t.target);
    s != null && s.editing || n != null && n.editing || e && !this.gos.get("suppressClipboardPaste") && e.pasteFromClipboard();
  }
  onCtrlAndD(e, t) {
    e && !this.gos.get("suppressClipboardPaste") && e.copyRangeDown(), t.preventDefault();
  }
  onCtrlAndZ(e, t) {
    !this.gos.get("undoRedoCellEditing") || !e || (t.preventDefault(), t.shiftKey ? e.redo("ui") : e.undo("ui"));
  }
  onCtrlAndY(e) {
    e == null || e.redo("ui");
  }
}, $i = class extends K {
  constructor(e, t) {
    super(), this.eContainer = e, this.eViewport = t;
  }
  postConstruct() {
    this.addManagedEventListeners({
      rowContainerHeightChanged: this.onHeightChanged.bind(this, this.beans.rowContainerHeight)
    });
  }
  onHeightChanged(e) {
    const t = e.uiContainerHeight, s = t != null ? `${t}px` : "";
    this.eContainer.style.height = s, this.eViewport && (this.eViewport.style.height = s);
  }
}, Ss = (e) => e.topRowCtrls, Rs = (e) => e.getStickyTopRowCtrls(), xs = (e) => e.getStickyBottomRowCtrls(), Fs = (e) => e.bottomRowCtrls, Ds = (e) => e.allRowCtrls, En = (e) => e.getCtrls("top"), Tn = (e) => e.getCtrls("center"), Mn = (e) => e.getCtrls("bottom"), hu = {
  center: {
    type: "center",
    name: "center-cols",
    getRowCtrls: Ds,
    getSpannedRowCtrls: Tn
  },
  left: {
    type: "left",
    name: "pinned-left-cols",
    pinnedType: "left",
    getRowCtrls: Ds,
    getSpannedRowCtrls: Tn
  },
  right: {
    type: "right",
    name: "pinned-right-cols",
    pinnedType: "right",
    getRowCtrls: Ds,
    getSpannedRowCtrls: Tn
  },
  fullWidth: {
    type: "fullWidth",
    name: "full-width",
    fullWidth: !0,
    getRowCtrls: Ds
  },
  topCenter: {
    type: "center",
    name: "floating-top",
    getRowCtrls: Ss,
    getSpannedRowCtrls: En
  },
  topLeft: {
    type: "left",
    name: "pinned-left-floating",
    container: "ag-pinned-left-floating-top",
    pinnedType: "left",
    getRowCtrls: Ss,
    getSpannedRowCtrls: En
  },
  topRight: {
    type: "right",
    name: "pinned-right-floating",
    container: "ag-pinned-right-floating-top",
    pinnedType: "right",
    getRowCtrls: Ss,
    getSpannedRowCtrls: En
  },
  topFullWidth: {
    type: "fullWidth",
    name: "floating-top-full-width",
    fullWidth: !0,
    getRowCtrls: Ss
  },
  stickyTopCenter: {
    type: "center",
    name: "sticky-top",
    getRowCtrls: Rs
  },
  stickyTopLeft: {
    type: "left",
    name: "pinned-left-sticky-top",
    container: "ag-pinned-left-sticky-top",
    pinnedType: "left",
    getRowCtrls: Rs
  },
  stickyTopRight: {
    type: "right",
    name: "pinned-right-sticky-top",
    container: "ag-pinned-right-sticky-top",
    pinnedType: "right",
    getRowCtrls: Rs
  },
  stickyTopFullWidth: {
    type: "fullWidth",
    name: "sticky-top-full-width",
    fullWidth: !0,
    getRowCtrls: Rs
  },
  stickyBottomCenter: {
    type: "center",
    name: "sticky-bottom",
    getRowCtrls: xs
  },
  stickyBottomLeft: {
    type: "left",
    name: "pinned-left-sticky-bottom",
    container: "ag-pinned-left-sticky-bottom",
    pinnedType: "left",
    getRowCtrls: xs
  },
  stickyBottomRight: {
    type: "right",
    name: "pinned-right-sticky-bottom",
    container: "ag-pinned-right-sticky-bottom",
    pinnedType: "right",
    getRowCtrls: xs
  },
  stickyBottomFullWidth: {
    type: "fullWidth",
    name: "sticky-bottom-full-width",
    fullWidth: !0,
    getRowCtrls: xs
  },
  bottomCenter: {
    type: "center",
    name: "floating-bottom",
    getRowCtrls: Fs,
    getSpannedRowCtrls: Mn
  },
  bottomLeft: {
    type: "left",
    name: "pinned-left-floating-bottom",
    container: "ag-pinned-left-floating-bottom",
    pinnedType: "left",
    getRowCtrls: Fs,
    getSpannedRowCtrls: Mn
  },
  bottomRight: {
    type: "right",
    name: "pinned-right-floating-bottom",
    container: "ag-pinned-right-floating-bottom",
    pinnedType: "right",
    getRowCtrls: Fs,
    getSpannedRowCtrls: Mn
  },
  bottomFullWidth: {
    type: "fullWidth",
    name: "floating-bottom-full-width",
    fullWidth: !0,
    getRowCtrls: Fs
  }
};
function ji(e) {
  return `ag-${Cs(e).name}-viewport`;
}
function Hs(e) {
  const t = Cs(e);
  return t.container ?? `ag-${t.name}-container`;
}
function gu(e) {
  return `ag-${Cs(e).name}-spanned-cells-container`;
}
function Cs(e) {
  return hu[e];
}
var fu = ["topCenter", "topLeft", "topRight"], pu = ["bottomCenter", "bottomLeft", "bottomRight"], Cu = ["center", "left", "right"], mu = ["center", "left", "right", "fullWidth"], wu = ["stickyTopCenter", "stickyBottomCenter", "center", "topCenter", "bottomCenter"], vu = ["left", "bottomLeft", "topLeft", "stickyTopLeft", "stickyBottomLeft"], bu = ["right", "bottomRight", "topRight", "stickyTopRight", "stickyBottomRight"], Ui = ["stickyTopCenter", "stickyTopLeft", "stickyTopRight"], Ki = ["stickyBottomCenter", "stickyBottomLeft", "stickyBottomRight"], yu = [
  ...Ui,
  "stickyTopFullWidth",
  ...Ki,
  "stickyBottomFullWidth"
], Su = [
  ...fu,
  ...pu,
  ...Cu,
  ...Ui,
  ...Ki
], Ru = class extends K {
  constructor(e) {
    super(), this.name = e, this.visible = !0, this.EMPTY_CTRLS = [], this.options = Cs(e);
  }
  postConstruct() {
    this.enableRtl = this.gos.get("enableRtl"), this.forContainers(["center"], () => {
      this.viewportSizeFeature = this.createManagedBean(new eu(this)), this.addManagedEventListeners({
        stickyTopOffsetChanged: this.onStickyTopOffsetChanged.bind(this)
      });
    });
  }
  onStickyTopOffsetChanged(e) {
    this.comp.setOffsetTop(`${e.offset}px`);
  }
  registerWithCtrlsService() {
    this.options.fullWidth || this.beans.ctrlsSvc.register(this.name, this);
  }
  forContainers(e, t) {
    e.indexOf(this.name) >= 0 && t();
  }
  setComp(e, t, s, n) {
    this.comp = e, this.eContainer = t, this.eSpannedContainer = s, this.eViewport = n, this.createManagedBean(new uu(this.eViewport ?? this.eContainer)), this.addPreventScrollWhileDragging(), this.listenOnDomOrder();
    const { pinnedCols: r, rangeSvc: o } = this.beans, i = () => this.onPinnedWidthChanged();
    this.forContainers(vu, () => {
      this.pinnedWidthFeature = this.createOptionalManagedBean(
        r == null ? void 0 : r.createPinnedWidthFeature(!0, this.eContainer, this.eSpannedContainer)
      ), this.addManagedEventListeners({ leftPinnedWidthChanged: i });
    }), this.forContainers(bu, () => {
      this.pinnedWidthFeature = this.createOptionalManagedBean(
        r == null ? void 0 : r.createPinnedWidthFeature(!1, this.eContainer, this.eSpannedContainer)
      ), this.addManagedEventListeners({ rightPinnedWidthChanged: i });
    }), this.forContainers(
      mu,
      () => this.createManagedBean(
        new $i(this.eContainer, this.name === "center" ? n : void 0)
      )
    ), o && this.forContainers(
      Su,
      () => this.createManagedBean(o.createDragListenerFeature(this.eContainer))
    ), this.forContainers(
      wu,
      () => this.createManagedBean(new mr((a) => this.comp.setContainerWidth(`${a}px`)))
    ), this.visible = this.isContainerVisible(), this.addListeners(), this.registerWithCtrlsService();
  }
  onScrollCallback(e) {
    this.addManagedElementListeners(this.eViewport, { scroll: e });
  }
  addListeners() {
    const { spannedRowRenderer: e, gos: t } = this.beans, s = this.onDisplayedColumnsChanged.bind(this);
    this.addManagedEventListeners({
      displayedColumnsChanged: s,
      displayedColumnsWidthChanged: s,
      displayedRowsChanged: (n) => this.onDisplayedRowsChanged(n.afterScroll)
    }), s(), this.onDisplayedRowsChanged(), e && this.options.getSpannedRowCtrls && t.get("enableCellSpan") && this.addManagedListeners(e, {
      spannedRowsUpdated: () => {
        const n = this.options.getSpannedRowCtrls(e);
        n && this.comp.setSpannedRowCtrls(n, !1);
      }
    });
  }
  listenOnDomOrder() {
    if (yu.indexOf(this.name) >= 0) {
      this.comp.setDomOrder(!0);
      return;
    }
    const t = () => {
      const s = this.gos.get("ensureDomOrder"), n = We(this.gos, "print");
      this.comp.setDomOrder(s || n);
    };
    this.addManagedPropertyListener("domLayout", t), t();
  }
  onDisplayedColumnsChanged() {
    this.forContainers(["center"], () => this.onHorizontalViewportChanged());
  }
  // this methods prevents the grid views from being scrolled while the dragService is being used
  // eg. the view should not scroll up and down while dragging rows using the rowDragComp.
  addPreventScrollWhileDragging() {
    const { dragSvc: e } = this.beans;
    if (!e)
      return;
    const t = (s) => {
      e.dragging && s.cancelable && s.preventDefault();
    };
    this.eContainer.addEventListener("touchmove", t, { passive: !1 }), this.addDestroyFunc(() => this.eContainer.removeEventListener("touchmove", t));
  }
  // this gets called whenever a change in the viewport, so we can inform column controller it has to work
  // out the virtual columns again. gets called from following locations:
  // + ensureColVisible, scroll, init, layoutChanged, displayedColumnsChanged
  onHorizontalViewportChanged(e = !1) {
    const t = this.getCenterWidth(), s = this.getCenterViewportScrollLeft();
    this.beans.colViewport.setScrollPosition(t, s, e);
  }
  hasHorizontalScrollGap() {
    return this.eContainer.clientWidth - this.eViewport.clientWidth < 0;
  }
  hasVerticalScrollGap() {
    return this.eContainer.clientHeight - this.eViewport.clientHeight < 0;
  }
  getCenterWidth() {
    return Gs(this.eViewport);
  }
  getCenterViewportScrollLeft() {
    return Bs(this.eViewport, this.enableRtl);
  }
  registerViewportResizeListener(e) {
    const t = jt(this.beans, this.eViewport, e);
    this.addDestroyFunc(() => t());
  }
  isViewportInTheDOMTree() {
    return Xo(this.eViewport);
  }
  getViewportScrollLeft() {
    return Bs(this.eViewport, this.enableRtl);
  }
  isHorizontalScrollShowing() {
    return this.gos.get("alwaysShowHorizontalScroll") || xl(this.eViewport);
  }
  setHorizontalScroll(e) {
    this.comp.setHorizontalScroll(e);
  }
  getHScrollPosition() {
    return {
      left: this.eViewport.scrollLeft,
      right: this.eViewport.scrollLeft + this.eViewport.offsetWidth
    };
  }
  setCenterViewportScrollLeft(e) {
    Ws(this.eViewport, e, this.enableRtl);
  }
  isContainerVisible() {
    return !(this.options.pinnedType != null) || !!this.pinnedWidthFeature && this.pinnedWidthFeature.getWidth() > 0;
  }
  onPinnedWidthChanged() {
    const e = this.isContainerVisible();
    this.visible != e && (this.visible = e, this.onDisplayedRowsChanged());
  }
  onDisplayedRowsChanged(e = !1) {
    const t = this.options.getRowCtrls(this.beans.rowRenderer);
    if (!this.visible || t.length === 0) {
      this.comp.setRowCtrls({ rowCtrls: this.EMPTY_CTRLS });
      return;
    }
    const s = We(this.gos, "print"), r = this.gos.get("embedFullWidthRows") || s, o = t.filter((i) => {
      const a = i.isFullWidth();
      return this.options.fullWidth ? !r && a : r || !a;
    });
    this.comp.setRowCtrls({ rowCtrls: o, useFlushSync: e });
  }
}, xu = "ag-force-vertical-scroll", Fu = "ag-selectable", Du = "ag-column-moving", Pu = class extends K {
  constructor() {
    super(...arguments), this.stickyTopHeight = 0, this.stickyBottomHeight = 0;
  }
  wireBeans(e) {
    this.ctrlsSvc = e.ctrlsSvc, this.colModel = e.colModel, this.scrollVisibleSvc = e.scrollVisibleSvc, this.pinnedRowModel = e.pinnedRowModel, this.filterManager = e.filterManager, this.rowGroupColsSvc = e.rowGroupColsSvc;
  }
  setComp(e, t, s, n, r, o, i) {
    var a, l;
    this.comp = e, this.eGridBody = t, this.eBodyViewport = s, this.eTop = n, this.eBottom = r, this.eStickyTop = o, this.eStickyBottom = i, this.eCenterColsViewport = s.querySelector(`.${ji("center")}`), this.eFullWidthContainer = s.querySelector(`.${Hs("fullWidth")}`), this.eStickyTopFullWidthContainer = o.querySelector(
      `.${Hs("stickyTopFullWidth")}`
    ), this.eStickyBottomFullWidthContainer = i.querySelector(
      `.${Hs("stickyBottomFullWidth")}`
    ), this.setCellTextSelection(this.gos.get("enableCellTextSelection")), this.addManagedPropertyListener(
      "enableCellTextSelection",
      (c) => this.setCellTextSelection(c.currentValue)
    ), this.createManagedBean(new Cr(this.comp)), this.scrollFeature = this.createManagedBean(new Jd(s)), (a = this.beans.rowDragSvc) == null || a.setupRowDrag(s, this), this.setupRowAnimationCssClass(), this.addEventListeners(), this.addFocusListeners([n, s, r, o, i]), this.setGridRootRole(), this.onGridColumnsChanged(), this.addBodyViewportListener(), this.setFloatingHeights(), this.disableBrowserDragging(), this.addStopEditingWhenGridLosesFocus(), this.updateScrollingClasses(), (l = this.filterManager) == null || l.setupAdvFilterHeaderComp(n), this.ctrlsSvc.register("gridBodyCtrl", this);
  }
  addEventListeners() {
    const e = this.setFloatingHeights.bind(this), t = this.setGridRootRole.bind(this), s = this.toggleRowResizeStyles.bind(this);
    this.addManagedEventListeners({
      gridColumnsChanged: this.onGridColumnsChanged.bind(this),
      scrollVisibilityChanged: this.onScrollVisibilityChanged.bind(this),
      scrollGapChanged: this.updateScrollingClasses.bind(this),
      pinnedRowDataChanged: e,
      pinnedHeightChanged: e,
      pinnedRowsChanged: e,
      headerHeightChanged: this.setStickyTopOffsetTop.bind(this),
      columnRowGroupChanged: t,
      columnPivotChanged: t,
      rowResizeStarted: s,
      rowResizeEnded: s
    }), this.addManagedPropertyListener("treeData", t);
  }
  toggleRowResizeStyles(e) {
    const t = e.type === "rowResizeStarted";
    this.eBodyViewport.classList.toggle("ag-prevent-animation", t);
  }
  onGridColumnsChanged() {
    const e = this.beans.colModel.getCols();
    this.comp.setColumnCount(e.length);
  }
  onScrollVisibilityChanged() {
    const { scrollVisibleSvc: e } = this, t = e.verticalScrollShowing;
    this.setVerticalScrollPaddingVisible(t), this.setStickyWidth(t), this.setStickyBottomOffsetBottom();
    const s = t && e.getScrollbarWidth() || 0, n = Ko() ? 16 : 0, r = `calc(100% + ${s + n}px)`;
    yt(this.beans, () => this.comp.setBodyViewportWidth(r)), this.updateScrollingClasses();
  }
  setGridRootRole() {
    const { rowGroupColsSvc: e, colModel: t } = this;
    let s = this.gos.get("treeData");
    if (!s) {
      const n = t.isPivotMode();
      s = (e ? e.columns.length : 0) >= (n ? 2 : 1);
    }
    this.comp.setGridRootRole(s ? "treegrid" : "grid");
  }
  addFocusListeners(e) {
    e.forEach((t) => {
      this.addManagedElementListeners(t, {
        focusin: (s) => {
          const { target: n } = s, r = Ht(n, "ag-root", t);
          t.classList.toggle("ag-has-focus", !r);
        },
        focusout: (s) => {
          const { target: n, relatedTarget: r } = s, o = t.contains(r), i = Ht(
            r,
            "ag-root",
            t
          );
          Ht(n, "ag-root", t) || (!o || i) && t.classList.remove("ag-has-focus");
        }
      });
    });
  }
  // used by ColumnAnimationService
  setColumnMovingCss(e) {
    this.comp.setColumnMovingCss(Du, e);
  }
  setCellTextSelection(e = !1) {
    this.comp.setCellSelectableCss(Fu, e);
  }
  updateScrollingClasses() {
    const {
      eGridBody: { classList: e },
      scrollVisibleSvc: t
    } = this;
    e.toggle("ag-body-vertical-content-no-gap", !t.verticalScrollGap), e.toggle("ag-body-horizontal-content-no-gap", !t.horizontalScrollGap);
  }
  // if we do not do this, then the user can select a pic in the grid (eg an image in a custom cell renderer)
  // and then that will start the browser native drag n' drop, which messes up with our own drag and drop.
  disableBrowserDragging() {
    this.addManagedElementListeners(this.eGridBody, {
      dragstart: (e) => {
        if (e.target instanceof HTMLImageElement)
          return e.preventDefault(), !1;
      }
    });
  }
  addStopEditingWhenGridLosesFocus() {
    var e;
    (e = this.beans.editSvc) == null || e.addStopEditingWhenGridLosesFocus([
      this.eBodyViewport,
      this.eBottom,
      this.eTop,
      this.eStickyTop,
      this.eStickyBottom
    ]);
  }
  updateRowCount() {
    var r, o;
    const e = (((r = this.ctrlsSvc.getHeaderRowContainerCtrl()) == null ? void 0 : r.getRowCount()) ?? 0) + (((o = this.filterManager) == null ? void 0 : o.getHeaderRowCount()) ?? 0), { rowModel: t } = this.beans, s = t.isLastRowIndexKnown() ? t.getRowCount() : -1, n = s === -1 ? -1 : e + s;
    this.comp.setRowCount(n);
  }
  registerBodyViewportResizeListener(e) {
    this.comp.registerBodyViewportResizeListener(e);
  }
  setVerticalScrollPaddingVisible(e) {
    const t = e ? "scroll" : "hidden";
    this.comp.setPinnedTopBottomOverflowY(t);
  }
  isVerticalScrollShowing() {
    const e = this.gos.get("alwaysShowVerticalScroll"), t = e ? xu : null, s = We(this.gos, "normal");
    return this.comp.setAlwaysVerticalScrollClass(t, e), e || s && Fl(this.eBodyViewport);
  }
  setupRowAnimationCssClass() {
    const { rowContainerHeight: e, environment: t } = this.beans;
    let s = t.sizesMeasured;
    const n = () => {
      const r = s && gr(this.gos) && !e.stretching, o = r ? "ag-row-animation" : "ag-row-no-animation";
      this.comp.setRowAnimationCssOnBodyViewport(o, r);
    };
    n(), this.addManagedEventListeners({ heightScaleChanged: n }), this.addManagedPropertyListener("animateRows", n), this.addManagedEventListeners({
      gridStylesChanged: () => {
        !s && t.sizesMeasured && (s = !0, n());
      }
    });
  }
  addBodyViewportListener() {
    const {
      eBodyViewport: e,
      eStickyTop: t,
      eStickyBottom: s,
      eTop: n,
      eBottom: r,
      beans: { popupSvc: o, touchSvc: i }
    } = this, a = this.onBodyViewportContextMenu.bind(this);
    this.addManagedElementListeners(e, { contextmenu: a }), i == null || i.mockBodyContextMenu(this, a), this.addManagedElementListeners(e, {
      wheel: this.onBodyViewportWheel.bind(this, o)
    });
    const l = this.onStickyWheel.bind(this);
    for (const d of [t, s, n, r])
      this.addManagedElementListeners(d, { wheel: l });
    const c = this.onHorizontalWheel.bind(this);
    for (const d of ["left", "right", "topLeft", "topRight", "bottomLeft", "bottomRight"])
      this.addManagedElementListeners(this.ctrlsSvc.get(d).eContainer, {
        wheel: c
      });
    this.addFullWidthContainerWheelListener();
  }
  addFullWidthContainerWheelListener() {
    this.addManagedElementListeners(this.eFullWidthContainer, {
      wheel: (e) => this.onFullWidthContainerWheel(e)
    });
  }
  onFullWidthContainerWheel(e) {
    const { deltaX: t, deltaY: s, shiftKey: n } = e;
    (n || Math.abs(t) > Math.abs(s)) && ds(this.gos, e) && this.scrollGridBodyToMatchEvent(e);
  }
  onStickyWheel(e) {
    const { deltaY: t } = e;
    e.preventDefault(), this.scrollVertically(t);
  }
  onHorizontalWheel(e) {
    const { deltaX: t, deltaY: s, shiftKey: n } = e;
    (n || Math.abs(t) > Math.abs(s)) && this.scrollGridBodyToMatchEvent(e);
  }
  scrollGridBodyToMatchEvent(e) {
    const { deltaX: t, deltaY: s } = e;
    e.preventDefault(), this.eCenterColsViewport.scrollBy({ left: t || s });
  }
  onBodyViewportContextMenu(e, t, s) {
    var r;
    if (!e && !s)
      return;
    this.gos.get("preventDefaultOnContextMenu") && (e || s).preventDefault();
    const { target: n } = e || t;
    (n === this.eBodyViewport || n === this.ctrlsSvc.get("center").eViewport) && ((r = this.beans.contextMenuSvc) == null || r.showContextMenu({
      mouseEvent: e,
      touchEvent: s,
      value: null,
      anchorToElement: this.eGridBody,
      source: "ui"
    }));
  }
  onBodyViewportWheel(e, t) {
    this.gos.get("suppressScrollWhenPopupsAreOpen") && e != null && e.hasAnchoredPopup() && t.preventDefault();
  }
  // called by rowDragFeature
  scrollVertically(e) {
    const t = this.eBodyViewport.scrollTop;
    return this.scrollFeature.setVerticalScrollPosition(t + e), this.eBodyViewport.scrollTop - t;
  }
  setFloatingHeights() {
    const {
      pinnedRowModel: e,
      beans: { environment: t }
    } = this, s = e == null ? void 0 : e.getPinnedTopTotalHeight(), n = e == null ? void 0 : e.getPinnedBottomTotalHeight(), r = t.getPinnedRowBorderWidth(), o = t.getRowBorderWidth(), i = r - o, a = s ? i + s : 0, l = n ? i + n : 0;
    this.comp.setTopHeight(a), this.comp.setBottomHeight(l), this.comp.setTopInvisible(a <= 0), this.comp.setBottomInvisible(l <= 0), this.setStickyTopOffsetTop(), this.setStickyBottomOffsetBottom();
  }
  setStickyTopHeight(e = 0) {
    this.comp.setStickyTopHeight(`${e}px`), this.stickyTopHeight = e;
  }
  setStickyBottomHeight(e = 0) {
    this.comp.setStickyBottomHeight(`${e}px`), this.stickyBottomHeight = e;
  }
  setStickyWidth(e) {
    if (!e)
      this.comp.setStickyTopWidth("100%"), this.comp.setStickyBottomWidth("100%");
    else {
      const t = this.scrollVisibleSvc.getScrollbarWidth();
      this.comp.setStickyTopWidth(`calc(100% - ${t}px)`), this.comp.setStickyBottomWidth(`calc(100% - ${t}px)`);
    }
  }
  setStickyTopOffsetTop() {
    var r, o;
    const t = this.ctrlsSvc.get("gridHeaderCtrl").headerHeight + (((r = this.filterManager) == null ? void 0 : r.getHeaderHeight()) ?? 0), s = ((o = this.pinnedRowModel) == null ? void 0 : o.getPinnedTopTotalHeight()) ?? 0;
    let n = 0;
    t > 0 && (n += t), s > 0 && (n += s), n > 0 && (n += 1), this.comp.setStickyTopTop(`${n}px`);
  }
  setStickyBottomOffsetBottom() {
    const { pinnedRowModel: e, scrollVisibleSvc: t, comp: s } = this, n = (e == null ? void 0 : e.getPinnedBottomTotalHeight()) ?? 0, o = t.horizontalScrollShowing && t.getScrollbarWidth() || 0, i = n + o;
    s.setStickyBottomBottom(`${i}px`);
  }
}, Yi = class extends ut {
  constructor(e, t) {
    super(), this.direction = t, this.eViewport = de, this.eContainer = de, this.hideTimeout = 0, this.setTemplate(e);
  }
  postConstruct() {
    this.addManagedEventListeners({
      scrollVisibilityChanged: this.onScrollVisibilityChanged.bind(this)
    }), this.onScrollVisibilityChanged(), this.toggleCss("ag-apple-scrollbar", jo() || rs());
  }
  destroy() {
    super.destroy(), window.clearTimeout(this.hideTimeout);
  }
  initialiseInvisibleScrollbar() {
    this.invisibleScrollbar === void 0 && (this.invisibleScrollbar = Ko(), this.invisibleScrollbar && (this.hideAndShowInvisibleScrollAsNeeded(), this.addActiveListenerToggles()));
  }
  addActiveListenerToggles() {
    const e = this.getGui(), t = () => this.toggleCss("ag-scrollbar-active", !0), s = () => this.toggleCss("ag-scrollbar-active", !1);
    this.addManagedListeners(e, {
      mouseenter: t,
      mousedown: t,
      touchstart: t,
      mouseleave: s,
      touchend: s
    });
  }
  onScrollVisibilityChanged() {
    this.invisibleScrollbar === void 0 && this.initialiseInvisibleScrollbar(), yt(this.beans, () => this.setScrollVisible());
  }
  hideAndShowInvisibleScrollAsNeeded() {
    this.addManagedEventListeners({
      bodyScroll: (e) => {
        e.direction === this.direction && (this.hideTimeout && (window.clearTimeout(this.hideTimeout), this.hideTimeout = 0), this.toggleCss("ag-scrollbar-scrolling", !0));
      },
      bodyScrollEnd: () => {
        this.hideTimeout = window.setTimeout(() => {
          this.toggleCss("ag-scrollbar-scrolling", !1), this.hideTimeout = 0;
        }, 400);
      }
    });
  }
  attemptSettingScrollPosition(e) {
    const t = this.eViewport;
    Tl(
      () => $t(t),
      () => this.setScrollPosition(e),
      100
    );
  }
  onScrollCallback(e) {
    this.addManagedElementListeners(this.eViewport, { scroll: e });
  }
}, Eu = {
  tag: "div",
  cls: "ag-body-horizontal-scroll",
  attrs: { "aria-hidden": "true" },
  children: [
    { tag: "div", ref: "eLeftSpacer", cls: "ag-horizontal-left-spacer" },
    {
      tag: "div",
      ref: "eViewport",
      cls: "ag-body-horizontal-scroll-viewport",
      children: [{ tag: "div", ref: "eContainer", cls: "ag-body-horizontal-scroll-container" }]
    },
    { tag: "div", ref: "eRightSpacer", cls: "ag-horizontal-right-spacer" }
  ]
}, Tu = class extends Yi {
  constructor() {
    super(Eu, "horizontal"), this.eLeftSpacer = de, this.eRightSpacer = de, this.setScrollVisibleDebounce = 0;
  }
  wireBeans(e) {
    this.visibleCols = e.visibleCols, this.scrollVisibleSvc = e.scrollVisibleSvc;
  }
  postConstruct() {
    super.postConstruct();
    const e = this.setFakeHScrollSpacerWidths.bind(this);
    this.addManagedEventListeners({
      displayedColumnsChanged: e,
      displayedColumnsWidthChanged: e,
      pinnedRowDataChanged: this.refreshCompBottom.bind(this)
    }), this.addManagedPropertyListener("domLayout", e), this.beans.ctrlsSvc.register("fakeHScrollComp", this), this.createManagedBean(new mr((t) => this.eContainer.style.width = `${t}px`)), this.addManagedPropertyListeners(["suppressHorizontalScroll"], this.onScrollVisibilityChanged.bind(this));
  }
  destroy() {
    window.clearTimeout(this.setScrollVisibleDebounce), super.destroy();
  }
  initialiseInvisibleScrollbar() {
    this.invisibleScrollbar === void 0 && (this.enableRtl = this.gos.get("enableRtl"), super.initialiseInvisibleScrollbar(), this.invisibleScrollbar && this.refreshCompBottom());
  }
  refreshCompBottom() {
    var t;
    if (!this.invisibleScrollbar)
      return;
    const e = ((t = this.beans.pinnedRowModel) == null ? void 0 : t.getPinnedBottomTotalHeight()) ?? 0;
    this.getGui().style.bottom = `${e}px`;
  }
  onScrollVisibilityChanged() {
    super.onScrollVisibilityChanged(), this.setFakeHScrollSpacerWidths();
  }
  setFakeHScrollSpacerWidths() {
    const e = this.scrollVisibleSvc.verticalScrollShowing;
    let t = this.visibleCols.getDisplayedColumnsRightWidth();
    const s = !this.enableRtl && e, n = this.scrollVisibleSvc.getScrollbarWidth();
    s && (t += n), pt(this.eRightSpacer, t), this.eRightSpacer.classList.toggle("ag-scroller-corner", t <= n);
    let r = this.visibleCols.getColsLeftWidth();
    this.enableRtl && e && (r += n), pt(this.eLeftSpacer, r), this.eLeftSpacer.classList.toggle("ag-scroller-corner", r <= n);
  }
  setScrollVisible() {
    const e = this.scrollVisibleSvc.horizontalScrollShowing, t = this.invisibleScrollbar, s = this.gos.get("suppressHorizontalScroll"), n = e && this.scrollVisibleSvc.getScrollbarWidth() || 0, o = s ? 0 : n === 0 && t ? 16 : n, i = () => {
      this.setScrollVisibleDebounce = 0, this.toggleCss("ag-scrollbar-invisible", t), xn(this.getGui(), o), xn(this.eViewport, o), xn(this.eContainer, o), o || this.eContainer.style.setProperty("min-height", "1px"), this.setVisible(e, { skipAriaHidden: !0 });
    };
    window.clearTimeout(this.setScrollVisibleDebounce), e ? this.setScrollVisibleDebounce = window.setTimeout(i, 100) : i();
  }
  getScrollPosition() {
    return Bs(this.eViewport, this.enableRtl);
  }
  setScrollPosition(e) {
    $t(this.eViewport) || this.attemptSettingScrollPosition(e), Ws(this.eViewport, e, this.enableRtl);
  }
}, Mu = {
  tag: "div",
  cls: "ag-body-vertical-scroll",
  attrs: { "aria-hidden": "true" },
  children: [
    {
      tag: "div",
      ref: "eViewport",
      cls: "ag-body-vertical-scroll-viewport",
      children: [{ tag: "div", ref: "eContainer", cls: "ag-body-vertical-scroll-container" }]
    }
  ]
}, Iu = class extends Yi {
  constructor() {
    super(Mu, "vertical");
  }
  postConstruct() {
    super.postConstruct(), this.createManagedBean(new $i(this.eContainer));
    const { ctrlsSvc: e } = this.beans;
    e.register("fakeVScrollComp", this), this.addManagedEventListeners({
      rowContainerHeightChanged: this.onRowContainerHeightChanged.bind(this, e)
    });
  }
  setScrollVisible() {
    const { scrollVisibleSvc: e } = this.beans, t = e.verticalScrollShowing, s = this.invisibleScrollbar, n = t && e.getScrollbarWidth() || 0, r = n === 0 && s ? 16 : n;
    this.toggleCss("ag-scrollbar-invisible", s), pt(this.getGui(), r), pt(this.eViewport, r), pt(this.eContainer, r), this.setDisplayed(t, { skipAriaHidden: !0 });
  }
  onRowContainerHeightChanged(e) {
    const s = e.getGridBodyCtrl().eBodyViewport, n = this.getScrollPosition(), r = s.scrollTop;
    n != r && this.setScrollPosition(r, !0);
  }
  getScrollPosition() {
    return this.eViewport.scrollTop;
  }
  setScrollPosition(e, t) {
    !t && !$t(this.eViewport) && this.attemptSettingScrollPosition(e), this.eViewport.scrollTop = e;
  }
};
function Lu(e) {
  return e.cols ? e.cols.treeDepth + 1 : -1;
}
function st(e) {
  var t;
  return ((t = e.ctrlsSvc.getHeaderRowContainerCtrl()) == null ? void 0 : t.getRowCount()) ?? 0;
}
function wr(e) {
  const t = [], s = e.ctrlsSvc.getHeaderRowContainerCtrls();
  for (const n of s) {
    if (!n)
      continue;
    const r = n.getGroupRowCount() || 0;
    for (let o = 0; o < r; o++) {
      const i = n.getGroupRowCtrlAtIndex(o), a = t[o];
      if (i) {
        const l = Au(e, i);
        (a == null || l > a) && (t[o] = l);
      }
    }
  }
  return t;
}
function Au(e, t) {
  let n = e.colModel.isPivotMode() ? Hu(e) : qi(e);
  const r = t.getHeaderCellCtrls();
  for (const o of r) {
    const { column: i } = o, a = i.getAutoHeaderHeight();
    a != null && a > n && i.isAutoHeaderHeight() && (n = a);
  }
  return n;
}
function vr(e) {
  let s = e.colModel.isPivotMode() ? ku(e) : cn(e);
  return e.colModel.forAllCols((n) => {
    const r = n.getAutoHeaderHeight();
    r != null && r > s && n.isAutoHeaderHeight() && (s = r);
  }), s;
}
function cn(e) {
  return e.gos.get("headerHeight") ?? e.environment.getDefaultHeaderHeight();
}
function Zi(e) {
  return e.gos.get("floatingFiltersHeight") ?? cn(e);
}
function qi(e) {
  return e.gos.get("groupHeaderHeight") ?? cn(e);
}
function ku(e) {
  return e.gos.get("pivotHeaderHeight") ?? cn(e);
}
function Hu(e) {
  return e.gos.get("pivotGroupHeaderHeight") ?? qi(e);
}
var Ou = class extends K {
  setComp(e, t, s) {
    this.comp = e, this.eGui = t;
    const { beans: n } = this, { headerNavigation: r, touchSvc: o, ctrlsSvc: i } = n;
    r && this.createManagedBean(
      new ln(s, {
        onTabKeyDown: this.onTabKeyDown.bind(this),
        handleKeyDown: this.handleKeyDown.bind(this),
        onFocusOut: this.onFocusOut.bind(this)
      })
    ), this.addManagedEventListeners({
      columnPivotModeChanged: this.onPivotModeChanged.bind(this, n),
      displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this, n)
    }), this.onPivotModeChanged(n), this.setupHeaderHeight();
    const a = this.onHeaderContextMenu.bind(this);
    this.addManagedElementListeners(this.eGui, { contextmenu: a }), o == null || o.mockHeaderContextMenu(this, a), i.register("gridHeaderCtrl", this);
  }
  setupHeaderHeight() {
    const e = this.setHeaderHeight.bind(this);
    e(), this.addManagedPropertyListeners(
      [
        "headerHeight",
        "pivotHeaderHeight",
        "groupHeaderHeight",
        "pivotGroupHeaderHeight",
        "floatingFiltersHeight"
      ],
      e
    ), this.addManagedEventListeners({
      displayedColumnsChanged: e,
      columnHeaderHeightChanged: e,
      // add this to the animation frame to avoid a feedback loop
      columnGroupHeaderHeightChanged: () => yt(this.beans, () => e()),
      gridStylesChanged: e,
      advancedFilterEnabledChanged: e
    });
  }
  setHeaderHeight() {
    var o;
    const { beans: e } = this;
    let t = 0;
    const s = wr(e).reduce((i, a) => i + a, 0), n = vr(e);
    if ((o = e.filterManager) != null && o.hasFloatingFilters() && (t += Zi(e)), t += s, t += n, this.headerHeight === t)
      return;
    this.headerHeight = t;
    const r = `${t + 1}px`;
    this.comp.setHeightAndMinHeight(r), this.eventSvc.dispatchEvent({
      type: "headerHeightChanged"
    });
  }
  onPivotModeChanged(e) {
    const t = e.colModel.isPivotMode();
    this.comp.toggleCss("ag-pivot-on", t), this.comp.toggleCss("ag-pivot-off", !t);
  }
  onDisplayedColumnsChanged(e) {
    const s = e.visibleCols.allCols.some((n) => n.isSpanHeaderHeight());
    this.comp.toggleCss("ag-header-allow-overflow", s);
  }
  onTabKeyDown(e) {
    const t = this.gos.get("enableRtl"), s = e.shiftKey, n = s !== t ? "LEFT" : "RIGHT", { beans: r } = this, { headerNavigation: o, focusSvc: i } = r;
    (o.navigateHorizontally(n, !0, e) || !s && i.focusOverlay(!1) || cs(r, s, !0)) && e.preventDefault();
  }
  handleKeyDown(e) {
    let t = null;
    const { headerNavigation: s } = this.beans;
    switch (e.key) {
      case j.LEFT:
        t = "LEFT";
      case j.RIGHT: {
        te(t) || (t = "RIGHT"), s.navigateHorizontally(t, !1, e) && e.preventDefault();
        break;
      }
      case j.UP:
        t = "UP";
      case j.DOWN: {
        te(t) || (t = "DOWN"), s.navigateVertically(t, null, e) && e.preventDefault();
        break;
      }
      default:
        return;
    }
  }
  onFocusOut(e) {
    const { relatedTarget: t } = e, { eGui: s, beans: n } = this;
    !t && s.contains(Oe(n)) || s.contains(t) || (n.focusSvc.focusedHeader = null);
  }
  onHeaderContextMenu(e, t, s) {
    var i;
    const { menuSvc: n, ctrlsSvc: r } = this.beans;
    if (!e && !s || !(n != null && n.isHeaderContextMenuEnabled()))
      return;
    const { target: o } = e ?? t;
    (o === this.eGui || o === ((i = r.getHeaderRowContainerCtrl()) == null ? void 0 : i.eViewport)) && n.showHeaderContextMenu(void 0, e, s);
  }
}, Xi = class extends K {
  constructor(e, t, s, n) {
    super(), this.columnOrGroup = e, this.eCell = t, this.colsSpanning = n, this.columnOrGroup = e, this.ariaEl = t.querySelector("[role=columnheader]") || t, this.beans = s;
  }
  setColsSpanning(e) {
    this.colsSpanning = e, this.onLeftChanged();
  }
  getColumnOrGroup() {
    const { beans: e, colsSpanning: t } = this;
    return e.gos.get("enableRtl") && t ? Ce(t) : this.columnOrGroup;
  }
  postConstruct() {
    const e = this.onLeftChanged.bind(this);
    this.addManagedListeners(this.columnOrGroup, { leftChanged: e }), this.setLeftFirstTime(), this.addManagedEventListeners({ displayedColumnsWidthChanged: e }), this.addManagedPropertyListener("domLayout", e);
  }
  setLeftFirstTime() {
    const { gos: e, colAnimation: t } = this.beans, s = e.get("suppressColumnMoveAnimation"), n = te(this.columnOrGroup.getOldLeft());
    (t == null ? void 0 : t.isActive()) && n && !s ? this.animateInLeft() : this.onLeftChanged();
  }
  animateInLeft() {
    const e = this.getColumnOrGroup(), t = this.modifyLeftForPrintLayout(e, e.getOldLeft()), s = this.modifyLeftForPrintLayout(e, e.getLeft());
    this.setLeft(t), this.actualLeft = s, this.beans.colAnimation.executeNextVMTurn(() => {
      this.actualLeft === s && this.setLeft(s);
    });
  }
  onLeftChanged() {
    const e = this.getColumnOrGroup(), t = e.getLeft();
    this.actualLeft = this.modifyLeftForPrintLayout(e, t), this.setLeft(this.actualLeft);
  }
  modifyLeftForPrintLayout(e, t) {
    const { gos: s, visibleCols: n } = this.beans;
    if (!We(s, "print") || e.getPinned() === "left")
      return t;
    const o = n.getColsLeftWidth();
    if (e.getPinned() === "right") {
      const i = n.bodyWidth;
      return o + i + t;
    }
    return o + t;
  }
  setLeft(e) {
    if (te(e) && (this.eCell.style.left = `${e}px`), xe(this.columnOrGroup)) {
      const t = this.columnOrGroup.getLeafColumns();
      if (!t.length)
        return;
      t.length > 1 && pl(this.ariaEl, t.length);
    }
  }
}, Gu = 0, Qi = "headerCtrl", Ji = class extends K {
  constructor(e, t) {
    super(), this.column = e, this.rowCtrl = t, this.resizeToggleTimeout = 0, this.resizeMultiplier = 1, this.resizeFeature = null, this.lastFocusEvent = null, this.dragSource = null, this.instanceId = e.getUniqueId() + "-" + Gu++;
  }
  postConstruct() {
    const e = this.refreshTabIndex.bind(this);
    this.addManagedPropertyListeners(["suppressHeaderFocus"], e), this.addManagedEventListeners({
      overlayExclusiveChanged: e
    });
  }
  shouldStopEventPropagation(e) {
    const { headerRowIndex: t, column: s } = this.beans.focusSvc.focusedHeader, n = s.getDefinition(), r = n && n.suppressHeaderKeyboardEvent;
    if (!te(r))
      return !1;
    const o = ge(this.gos, {
      colDef: n,
      column: s,
      headerRowIndex: t,
      event: e
    });
    return !!r(o);
  }
  getWrapperHasFocus() {
    return Oe(this.beans) === this.eGui;
  }
  setGui(e, t) {
    this.eGui = e, this.addDomData(t), t.addManagedListeners(this.beans.eventSvc, {
      displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this)
    }), t.addManagedElementListeners(this.eGui, {
      focus: this.onGuiFocus.bind(this)
    }), this.onDisplayedColumnsChanged(), this.refreshTabIndex();
  }
  refreshHeaderStyles() {
    const e = this.column.getDefinition();
    if (!e)
      return;
    const { headerStyle: t } = e;
    let s;
    if (typeof t == "function") {
      const n = this.getHeaderClassParams();
      s = t(n);
    } else
      s = t;
    s && this.comp.setUserStyles(s);
  }
  onGuiFocus() {
    this.eventSvc.dispatchEvent({
      type: "headerFocused",
      column: this.column
    });
  }
  setupAutoHeight(e) {
    const { wrapperElement: t, checkMeasuringCallback: s, compBean: n } = e, { beans: r } = this, o = (u) => {
      if (!this.isAlive() || !n.isAlive())
        return;
      const { paddingTop: h, paddingBottom: g, borderBottomWidth: f, borderTopWidth: C } = en(this.eGui), p = h + g + f + C, v = t.offsetHeight + p;
      if (u < 5) {
        const b = rt(r), y = !b || !b.contains(t), F = v == 0;
        if (y || F) {
          Un(() => o(u + 1), "raf", r);
          return;
        }
      }
      this.setColHeaderHeight(this.column, v);
    };
    let i = !1, a;
    const l = () => {
      const u = this.column.isAutoHeaderHeight();
      u && !i && c(), !u && i && d();
    }, c = () => {
      i = !0, o(0), this.comp.toggleCss("ag-header-cell-auto-height", !0), a = jt(this.beans, t, () => o(0));
    }, d = () => {
      i = !1, a && a(), this.comp.toggleCss("ag-header-cell-auto-height", !1), a = void 0;
    };
    l(), n.addDestroyFunc(() => d()), n.addManagedListeners(this.column, { widthChanged: () => i && o(0) }), n.addManagedEventListeners({
      sortChanged: () => {
        i && window.setTimeout(() => o(0));
      }
    }), s && s(l);
  }
  onDisplayedColumnsChanged() {
    const { comp: e, column: t, beans: s, eGui: n } = this;
    !e || !t || !n || (Hi(e, t, s.visibleCols), zo(n, s.visibleCols.getAriaColIndex(t)));
  }
  addResizeAndMoveKeyboardListeners(e) {
    e.addManagedListeners(this.eGui, {
      keydown: this.onGuiKeyDown.bind(this),
      keyup: this.onGuiKeyUp.bind(this)
    });
  }
  refreshTabIndex() {
    const e = Et(this.beans);
    this.eGui && Ot(this.eGui, "tabindex", e ? null : "-1");
  }
  onGuiKeyDown(e) {
    var o;
    const t = Oe(this.beans), s = e.key === j.LEFT || e.key === j.RIGHT;
    if (this.isResizing && (e.preventDefault(), e.stopImmediatePropagation()), // if elements within the header are focused, we don't process the event
    t !== this.eGui || // if shiftKey and altKey are not pressed, it's cell navigation so we don't process the event
    !e.shiftKey && !e.altKey || ((this.isResizing || s) && (e.preventDefault(), e.stopImmediatePropagation()), !s))
      return;
    const r = e.key === j.LEFT !== this.gos.get("enableRtl") ? "left" : "right";
    if (e.altKey) {
      this.isResizing = !0, this.resizeMultiplier += 1;
      const i = this.getViewportAdjustedResizeDiff(e);
      this.resizeHeader(i, e.shiftKey), (o = this.resizeFeature) == null || o.toggleColumnResizing(!0);
    } else
      this.moveHeader(r);
  }
  moveHeader(e) {
    var t;
    (t = this.beans.colMoves) == null || t.moveHeader(e, this.eGui, this.column, this.rowCtrl.pinned, this);
  }
  getViewportAdjustedResizeDiff(e) {
    const t = this.getResizeDiff(e), { pinnedCols: s } = this.beans;
    return s ? s.getHeaderResizeDiff(t, this.column) : t;
  }
  getResizeDiff(e) {
    const { gos: t, column: s } = this;
    let n = e.key === j.LEFT !== t.get("enableRtl");
    const r = s.getPinned(), o = t.get("enableRtl");
    return r && o !== (r === "right") && (n = !n), (n ? -1 : 1) * this.resizeMultiplier;
  }
  onGuiKeyUp() {
    this.isResizing && (this.resizeToggleTimeout && (window.clearTimeout(this.resizeToggleTimeout), this.resizeToggleTimeout = 0), this.isResizing = !1, this.resizeMultiplier = 1, this.resizeToggleTimeout = window.setTimeout(() => {
      var e;
      (e = this.resizeFeature) == null || e.toggleColumnResizing(!1);
    }, 150));
  }
  handleKeyDown(e) {
    const t = this.getWrapperHasFocus();
    switch (e.key) {
      case j.PAGE_DOWN:
      case j.PAGE_UP:
      case j.PAGE_HOME:
      case j.PAGE_END:
        t && e.preventDefault();
    }
  }
  addDomData(e) {
    const t = Qi, { eGui: s, gos: n } = this;
    Wt(n, s, t, this), e.addDestroyFunc(() => Wt(n, s, t, null));
  }
  focus(e) {
    const { eGui: t } = this;
    return t ? (this.lastFocusEvent = e || null, t.focus(), !0) : !1;
  }
  focusThis() {
    this.beans.focusSvc.focusedHeader = { headerRowIndex: this.rowCtrl.rowIndex, column: this.column };
  }
  removeDragSource() {
    var e;
    this.dragSource && ((e = this.beans.dragAndDrop) == null || e.removeDragSource(this.dragSource), this.dragSource = null);
  }
  handleContextMenuMouseEvent(e, t, s) {
    const n = e ?? t, { menuSvc: r, gos: o } = this.beans;
    o.get("preventDefaultOnContextMenu") && n.preventDefault(), r != null && r.isHeaderContextMenuEnabled(s) && r.showHeaderContextMenu(s, e, t), this.dispatchColumnMouseEvent("columnHeaderContextMenu", s);
  }
  dispatchColumnMouseEvent(e, t) {
    this.eventSvc.dispatchEvent({
      type: e,
      column: t
    });
  }
  setColHeaderHeight(e, t) {
    if (!e.setAutoHeaderHeight(t))
      return;
    const { eventSvc: s } = this;
    e.isColumn ? s.dispatchEvent({
      type: "columnHeaderHeightChanged",
      column: e,
      columns: [e],
      source: "autosizeColumnHeaderHeight"
    }) : s.dispatchEvent({
      type: "columnGroupHeaderHeightChanged",
      columnGroup: e,
      source: "autosizeColumnGroupHeaderHeight"
    });
  }
  clearComponent() {
    this.removeDragSource(), this.resizeFeature = null, this.comp = null, this.eGui = null;
  }
  destroy() {
    super.destroy(), this.column = null, this.lastFocusEvent = null, this.rowCtrl = null;
  }
}, Bu = class extends Ji {
  constructor() {
    super(...arguments), this.refreshFunctions = {}, this.userHeaderClasses = /* @__PURE__ */ new Set(), this.ariaDescriptionProperties = /* @__PURE__ */ new Map();
  }
  setComp(e, t, s, n, r) {
    this.comp = e;
    const { rowCtrl: o, column: i, beans: a } = this, { colResize: l, context: c, colHover: d, rangeSvc: u } = a, h = on(this, c, r);
    this.setGui(t, h), this.updateState(), this.setupWidth(h), this.setupMovingCss(h), this.setupMenuClass(h), this.setupSortableClass(h), this.setupWrapTextClass(), this.refreshSpanHeaderHeight(), this.setupAutoHeight({
      wrapperElement: n,
      checkMeasuringCallback: (f) => this.setRefreshFunction("measuring", f),
      compBean: h
    }), this.addColumnHoverListener(h), this.setupFilterClass(h), this.setupStylesFromColDef(), this.setupClassesFromColDef(), this.setupTooltip(), this.addActiveHeaderMouseListeners(h), this.setupSelectAll(h), this.setupUserComp(), this.refreshAria(), l ? this.resizeFeature = h.createManagedBean(
      l.createResizeFeature(o.pinned, i, s, e, this)
    ) : Me(s, !1), d == null || d.createHoverFeature(h, [i], t), u == null || u.createRangeHighlightFeature(h, i, e), h.createManagedBean(new Xi(i, t, a)), h.createManagedBean(
      new ln(t, {
        shouldStopEventPropagation: (f) => this.shouldStopEventPropagation(f),
        onTabKeyDown: () => null,
        handleKeyDown: this.handleKeyDown.bind(this),
        onFocusIn: this.onFocusIn.bind(this),
        onFocusOut: this.onFocusOut.bind(this)
      })
    ), this.addResizeAndMoveKeyboardListeners(h), h.addManagedPropertyListeners(
      ["suppressMovableColumns", "suppressMenuHide", "suppressAggFuncInHeader", "enableAdvancedFilter"],
      () => this.refresh()
    ), h.addManagedListeners(i, { colDefChanged: () => this.refresh() }), h.addManagedListeners(i, { headerHighlightChanged: this.onHeaderHighlightChanged.bind(this) });
    const g = () => this.checkDisplayName();
    h.addManagedEventListeners({
      columnValueChanged: g,
      columnRowGroupChanged: g,
      columnPivotChanged: g,
      headerHeightChanged: this.onHeaderHeightChanged.bind(this)
    }), h.addDestroyFunc(() => {
      this.refreshFunctions = {}, this.selectAllFeature = null, this.dragSourceElement = void 0, this.userCompDetails = null, this.userHeaderClasses.clear(), this.ariaDescriptionProperties.clear(), this.clearComponent();
    });
  }
  resizeHeader(e, t) {
    var s;
    (s = this.beans.colResize) == null || s.resizeHeader(this.column, e, t);
  }
  getHeaderClassParams() {
    const { column: e, beans: t } = this, s = e.colDef;
    return ge(t.gos, {
      colDef: s,
      column: e,
      floatingFilter: !1
    });
  }
  setupUserComp() {
    const e = this.lookupUserCompDetails();
    e && this.setCompDetails(e);
  }
  setCompDetails(e) {
    this.userCompDetails = e, this.comp.setUserCompDetails(e);
  }
  lookupUserCompDetails() {
    const e = this.createParams(), t = this.column.getColDef();
    return Xc(this.beans.userCompFactory, t, e);
  }
  createParams() {
    const { menuSvc: e, sortSvc: t, colFilter: s, gos: n } = this.beans;
    return ge(n, {
      column: this.column,
      displayName: this.displayName,
      enableSorting: this.column.isSortable(),
      enableMenu: this.menuEnabled,
      enableFilterButton: this.openFilterEnabled && !!(e != null && e.isHeaderFilterButtonEnabled(this.column)),
      enableFilterIcon: !!s && (!this.openFilterEnabled || Vs(this.gos)),
      showColumnMenu: (o, i) => {
        e == null || e.showColumnMenu({
          column: this.column,
          buttonElement: o,
          positionBy: "button",
          onClosedCallback: i
        });
      },
      showColumnMenuAfterMouseClick: (o, i) => {
        e == null || e.showColumnMenu({
          column: this.column,
          mouseEvent: o,
          positionBy: "mouse",
          onClosedCallback: i
        });
      },
      showFilter: (o) => {
        e == null || e.showFilterMenu({
          column: this.column,
          buttonElement: o,
          containerType: "columnFilter",
          positionBy: "button"
        });
      },
      progressSort: (o) => {
        t == null || t.progressSort(this.column, !!o, "uiColumnSorted");
      },
      setSort: (o, i) => {
        t == null || t.setSortForColumn(this.column, o, !!i, "uiColumnSorted");
      },
      eGridHeader: this.eGui,
      setTooltip: (o, i) => {
        n.assertModuleRegistered("Tooltip", 3), this.setupTooltip(o, i);
      }
    });
  }
  setupSelectAll(e) {
    const { selectionSvc: t } = this.beans;
    t && (this.selectAllFeature = e.createManagedBean(t.createSelectAllFeature(this.column)), this.selectAllFeature.setComp(this));
  }
  getSelectAllGui() {
    var e;
    return (e = this.selectAllFeature) == null ? void 0 : e.getCheckboxGui();
  }
  handleKeyDown(e) {
    var t;
    super.handleKeyDown(e), e.key === j.SPACE && ((t = this.selectAllFeature) == null || t.onSpaceKeyDown(e)), e.key === j.ENTER && this.onEnterKeyDown(e), e.key === j.DOWN && e.altKey && this.showMenuOnKeyPress(e, !1);
  }
  onEnterKeyDown(e) {
    var t;
    e.ctrlKey || e.metaKey ? this.showMenuOnKeyPress(e, !0) : this.sortable && ((t = this.beans.sortSvc) == null || t.progressSort(this.column, e.shiftKey, "uiColumnSorted"));
  }
  showMenuOnKeyPress(e, t) {
    const s = this.comp.getUserCompInstance();
    ro(s) && s.onMenuKeyboardShortcut(t) && e.preventDefault();
  }
  onFocusIn(e) {
    this.eGui.contains(e.relatedTarget) || (this.focusThis(), this.announceAriaDescription()), Pd() && this.setActiveHeader(!0);
  }
  onFocusOut(e) {
    this.eGui.contains(e.relatedTarget) || this.setActiveHeader(!1);
  }
  setupTooltip(e, t) {
    var s;
    this.tooltipFeature = (s = this.beans.tooltipSvc) == null ? void 0 : s.setupHeaderTooltip(
      this.tooltipFeature,
      this,
      e,
      t
    );
  }
  setupStylesFromColDef() {
    this.setRefreshFunction("headerStyles", this.refreshHeaderStyles.bind(this)), this.refreshHeaderStyles();
  }
  setupClassesFromColDef() {
    const e = () => {
      const t = this.column.getColDef(), s = ki(t, this.gos, this.column, null), n = this.userHeaderClasses;
      this.userHeaderClasses = new Set(s), s.forEach((r) => {
        n.has(r) ? n.delete(r) : this.comp.toggleCss(r, !0);
      }), n.forEach((r) => this.comp.toggleCss(r, !1));
    };
    this.setRefreshFunction("headerClasses", e), e();
  }
  setDragSource(e) {
    var t;
    this.dragSourceElement = e, this.removeDragSource(), !(!e || !this.draggable) && (this.dragSource = ((t = this.beans.colMoves) == null ? void 0 : t.setDragSourceForHeader(e, this.column, this.displayName)) ?? null);
  }
  updateState() {
    const { menuSvc: e } = this.beans;
    this.menuEnabled = !!(e != null && e.isColumnMenuInHeaderEnabled(this.column)), this.openFilterEnabled = !!(e != null && e.isFilterMenuInHeaderEnabled(this.column)), this.sortable = this.column.isSortable(), this.displayName = this.calculateDisplayName(), this.draggable = this.workOutDraggable();
  }
  setRefreshFunction(e, t) {
    this.refreshFunctions[e] = t;
  }
  refresh() {
    this.updateState(), this.refreshHeaderComp(), this.refreshAria(), Object.values(this.refreshFunctions).forEach((e) => e());
  }
  refreshHeaderComp() {
    const e = this.lookupUserCompDetails();
    if (!e)
      return;
    (this.comp.getUserCompInstance() != null && this.userCompDetails.componentClass == e.componentClass ? this.attemptHeaderCompRefresh(e.params) : !1) ? this.setDragSource(this.dragSourceElement) : this.setCompDetails(e);
  }
  attemptHeaderCompRefresh(e) {
    const t = this.comp.getUserCompInstance();
    return !t || !t.refresh ? !1 : t.refresh(e);
  }
  calculateDisplayName() {
    return this.beans.colNames.getDisplayNameForColumn(this.column, "header", !0);
  }
  checkDisplayName() {
    this.displayName !== this.calculateDisplayName() && this.refresh();
  }
  workOutDraggable() {
    const e = this.column.getColDef();
    return !!(!this.gos.get("suppressMovableColumns") && !e.suppressMovable && !e.lockPosition) || !!e.enableRowGroup || !!e.enablePivot;
  }
  setupWidth(e) {
    const t = () => {
      const s = this.column.getActualWidth();
      this.comp.setWidth(`${s}px`);
    };
    e.addManagedListeners(this.column, { widthChanged: t }), t();
  }
  setupMovingCss(e) {
    const t = () => {
      this.comp.toggleCss("ag-header-cell-moving", this.column.isMoving());
    };
    e.addManagedListeners(this.column, { movingChanged: t }), t();
  }
  setupMenuClass(e) {
    const t = () => {
      var s;
      (s = this.comp) == null || s.toggleCss("ag-column-menu-visible", this.column.isMenuVisible());
    };
    e.addManagedListeners(this.column, { menuVisibleChanged: t }), t();
  }
  setupSortableClass(e) {
    const t = () => {
      this.comp.toggleCss("ag-header-cell-sortable", !!this.sortable);
    };
    t(), this.setRefreshFunction("updateSortable", t), e.addManagedEventListeners({ sortChanged: this.refreshAriaSort.bind(this) });
  }
  setupFilterClass(e) {
    const t = () => {
      const s = this.column.isFilterActive();
      this.comp.toggleCss("ag-header-cell-filtered", s), this.refreshAria();
    };
    e.addManagedListeners(this.column, { filterActiveChanged: t }), t();
  }
  setupWrapTextClass() {
    const e = () => {
      const t = !!this.column.getColDef().wrapHeaderText;
      this.comp.toggleCss("ag-header-cell-wrap-text", t);
    };
    e(), this.setRefreshFunction("wrapText", e);
  }
  onHeaderHighlightChanged() {
    const e = this.column.getHighlighted(), t = e === 0, s = e === 1;
    this.comp.toggleCss("ag-header-highlight-before", t), this.comp.toggleCss("ag-header-highlight-after", s);
  }
  onDisplayedColumnsChanged() {
    super.onDisplayedColumnsChanged(), this.isAlive() && this.onHeaderHeightChanged();
  }
  onHeaderHeightChanged() {
    this.refreshSpanHeaderHeight();
  }
  refreshSpanHeaderHeight() {
    const { eGui: e, column: t, comp: s, beans: n } = this, r = wr(this.beans), o = r.reduce((d, u) => d += u, 0) === 0;
    if (s.toggleCss("ag-header-parent-hidden", o), !t.isSpanHeaderHeight()) {
      e.style.removeProperty("top"), e.style.removeProperty("height"), s.toggleCss("ag-header-span-height", !1), s.toggleCss("ag-header-span-total", !1);
      return;
    }
    const { numberOfParents: i, isSpanningTotal: a } = this.column.getColumnGroupPaddingInfo();
    s.toggleCss("ag-header-span-height", i > 0);
    const l = vr(n);
    if (i === 0) {
      s.toggleCss("ag-header-span-total", !1), e.style.setProperty("top", "0px"), e.style.setProperty("height", `${l}px`);
      return;
    }
    s.toggleCss("ag-header-span-total", a);
    let c = 0;
    for (let d = 0; d < i; d++)
      c += r[r.length - 1 - d];
    e.style.setProperty("top", `${-c}px`), e.style.setProperty("height", `${l + c}px`);
  }
  refreshAriaSort() {
    var e;
    if (this.sortable) {
      const t = this.getLocaleTextFunc(), s = ((e = this.beans.sortSvc) == null ? void 0 : e.getDisplaySortForColumn(this.column)) || null;
      this.comp.setAriaSort(al(s)), this.setAriaDescriptionProperty("sort", t("ariaSortableColumn", "Press ENTER to sort"));
    } else
      this.comp.setAriaSort(), this.setAriaDescriptionProperty("sort", null);
  }
  refreshAriaMenu() {
    if (this.menuEnabled) {
      const e = this.getLocaleTextFunc();
      this.setAriaDescriptionProperty("menu", e("ariaMenuColumn", "Press ALT DOWN to open column menu"));
    } else
      this.setAriaDescriptionProperty("menu", null);
  }
  refreshAriaFilterButton() {
    if (this.openFilterEnabled && !Vs(this.gos)) {
      const e = this.getLocaleTextFunc();
      this.setAriaDescriptionProperty(
        "filterButton",
        e("ariaFilterColumn", "Press CTRL ENTER to open filter")
      );
    } else
      this.setAriaDescriptionProperty("filterButton", null);
  }
  refreshAriaFiltered() {
    const e = this.getLocaleTextFunc();
    this.column.isFilterActive() ? this.setAriaDescriptionProperty("filter", e("ariaColumnFiltered", "Column Filtered")) : this.setAriaDescriptionProperty("filter", null);
  }
  setAriaDescriptionProperty(e, t) {
    t != null ? this.ariaDescriptionProperties.set(e, t) : this.ariaDescriptionProperties.delete(e);
  }
  announceAriaDescription() {
    var t;
    if (!this.eGui.contains(Oe(this.beans)))
      return;
    const e = Array.from(this.ariaDescriptionProperties.keys()).sort((s, n) => s === "filter" ? -1 : n.charCodeAt(0) - s.charCodeAt(0)).map((s) => this.ariaDescriptionProperties.get(s)).join(". ");
    (t = this.beans.ariaAnnounce) == null || t.announceValue(e, "columnHeader");
  }
  refreshAria() {
    this.refreshAriaSort(), this.refreshAriaMenu(), this.refreshAriaFilterButton(), this.refreshAriaFiltered();
  }
  addColumnHoverListener(e) {
    var t;
    (t = this.beans.colHover) == null || t.addHeaderColumnHoverListener(e, this.comp, this.column);
  }
  addActiveHeaderMouseListeners(e) {
    const t = (r) => this.handleMouseOverChange(r.type === "mouseenter"), s = () => {
      this.setActiveHeader(!0), this.dispatchColumnMouseEvent("columnHeaderClicked", this.column);
    }, n = (r) => this.handleContextMenuMouseEvent(r, void 0, this.column);
    e.addManagedListeners(this.eGui, {
      mouseenter: t,
      mouseleave: t,
      click: s,
      contextmenu: n
    });
  }
  handleMouseOverChange(e) {
    this.setActiveHeader(e), this.eventSvc.dispatchEvent({
      type: e ? "columnHeaderMouseOver" : "columnHeaderMouseLeave",
      column: this.column
    });
  }
  setActiveHeader(e) {
    this.comp.toggleCss("ag-header-active", e);
  }
  getAnchorElementForMenu(e) {
    const t = this.comp.getUserCompInstance();
    return ro(t) ? t.getAnchorElementForMenu(e) : this.eGui;
  }
  destroy() {
    this.tooltipFeature = this.destroyBean(this.tooltipFeature), super.destroy();
  }
};
function ro(e) {
  return typeof (e == null ? void 0 : e.getAnchorElementForMenu) == "function" && typeof e.onMenuKeyboardShortcut == "function";
}
var Wu = 0, In = class extends K {
  constructor(e, t, s) {
    super(), this.rowIndex = e, this.pinned = t, this.type = s, this.instanceId = Wu++, this.allCtrls = [];
    const n = s == "group" ? "ag-header-row-column-group" : s == "filter" ? "ag-header-row-column-filter" : "ag-header-row-column";
    this.headerRowClass = `ag-header-row ${n}`;
  }
  postConstruct() {
    this.isPrintLayout = We(this.gos, "print"), this.isEnsureDomOrder = this.gos.get("ensureDomOrder");
  }
  /** Checks that every header cell that is currently visible has been rendered.
   * Can only be false under some circumstances when using React
   */
  areCellsRendered() {
    return this.comp ? this.allCtrls.every((e) => e.eGui != null) : !1;
  }
  /**
   *
   * @param comp Proxy to the actual component
   * @param initCompState Should the component be initialised with the current state of the controller. Default: true
   */
  setComp(e, t, s = !0) {
    this.comp = e, t = on(this, this.beans.context, t), s && (this.onRowHeightChanged(), this.onVirtualColumnsChanged()), this.setWidth(), this.addEventListeners(t);
  }
  getAriaRowIndex() {
    return this.rowIndex + 1;
  }
  addEventListeners(e) {
    const t = this.onRowHeightChanged.bind(this), s = this.onDisplayedColumnsChanged.bind(this);
    e.addManagedEventListeners({
      columnResized: this.setWidth.bind(this),
      displayedColumnsChanged: s,
      virtualColumnsChanged: (n) => this.onVirtualColumnsChanged(n.afterScroll),
      columnGroupHeaderHeightChanged: t,
      columnHeaderHeightChanged: t,
      gridStylesChanged: t,
      advancedFilterEnabledChanged: t
    }), e.addManagedPropertyListener("domLayout", s), e.addManagedPropertyListener("ensureDomOrder", (n) => this.isEnsureDomOrder = n.currentValue), e.addManagedPropertyListeners(
      [
        "headerHeight",
        "pivotHeaderHeight",
        "groupHeaderHeight",
        "pivotGroupHeaderHeight",
        "floatingFiltersHeight"
      ],
      t
    );
  }
  onDisplayedColumnsChanged() {
    this.isPrintLayout = We(this.gos, "print"), this.onVirtualColumnsChanged(), this.setWidth(), this.onRowHeightChanged();
  }
  setWidth() {
    const e = this.getWidthForRow();
    this.comp.setWidth(`${e}px`);
  }
  getWidthForRow() {
    const { visibleCols: e } = this.beans;
    return this.isPrintLayout ? this.pinned != null ? 0 : e.getContainerWidth("right") + e.getContainerWidth("left") + e.getContainerWidth(null) : e.getContainerWidth(this.pinned);
  }
  onRowHeightChanged() {
    const { topOffset: e, rowHeight: t } = this.getTopAndHeight();
    this.comp.setTop(e + "px"), this.comp.setHeight(t + "px");
  }
  getTopAndHeight() {
    const { filterManager: e } = this.beans, t = [], s = wr(this.beans), n = vr(this.beans);
    t.push(...s), t.push(n), e != null && e.hasFloatingFilters() && t.push(Zi(this.beans));
    let r = 0;
    for (let i = 0; i < this.rowIndex; i++)
      r += t[i];
    const o = t[this.rowIndex];
    return { topOffset: r, rowHeight: o };
  }
  onVirtualColumnsChanged(e = !1) {
    const t = this.getUpdatedHeaderCtrls(), s = this.isEnsureDomOrder || this.isPrintLayout;
    this.comp.setHeaderCtrls(t, s, e);
  }
  /**
   * Recycles the header cell ctrls and creates new ones for the columns in the viewport
   * @returns The updated header cell ctrls
   */
  getUpdatedHeaderCtrls() {
    const e = this.ctrlsById;
    this.ctrlsById = /* @__PURE__ */ new Map();
    const t = this.getColumnsInViewport();
    for (const n of t)
      this.recycleAndCreateHeaderCtrls(n, this.ctrlsById, e);
    const s = (n) => {
      const { focusSvc: r, visibleCols: o } = this.beans;
      return r.isHeaderWrapperFocused(n) ? o.isVisible(n.column) : !1;
    };
    if (e)
      for (const [n, r] of e)
        s(r) ? this.ctrlsById.set(n, r) : this.destroyBean(r);
    return this.allCtrls = Array.from(this.ctrlsById.values()), this.allCtrls;
  }
  /** Get the current header cell ctrls */
  getHeaderCellCtrls() {
    return this.allCtrls;
  }
  recycleAndCreateHeaderCtrls(e, t, s) {
    if (e.isEmptyGroup())
      return;
    const n = e.getUniqueId();
    let r;
    if (s && (r = s.get(n), s.delete(n)), r && r.column != e && (this.destroyBean(r), r = void 0), r == null)
      switch (this.type) {
        case "filter": {
          r = this.createBean(
            this.beans.registry.createDynamicBean(
              "headerFilterCellCtrl",
              !0,
              e,
              this
            )
          );
          break;
        }
        case "group":
          r = this.createBean(
            this.beans.registry.createDynamicBean(
              "headerGroupCellCtrl",
              !0,
              e,
              this
            )
          );
          break;
        default:
          r = this.createBean(new Bu(e, this));
          break;
      }
    t.set(n, r);
  }
  getColumnsInViewport() {
    return this.isPrintLayout ? this.getColumnsInViewportPrintLayout() : this.getColumnsInViewportNormalLayout();
  }
  getColumnsInViewportPrintLayout() {
    if (this.pinned != null)
      return [];
    let e = [];
    const t = this.getActualDepth(), { colViewport: s } = this.beans;
    return ["left", null, "right"].forEach((n) => {
      const r = s.getHeadersToRender(n, t);
      e = e.concat(r);
    }), e;
  }
  getActualDepth() {
    return this.type == "filter" ? this.rowIndex - 1 : this.rowIndex;
  }
  getColumnsInViewportNormalLayout() {
    return this.beans.colViewport.getHeadersToRender(this.pinned, this.getActualDepth());
  }
  focusHeader(e, t) {
    const s = this.allCtrls.find((r) => r.column == e);
    return s ? s.focus(t) : !1;
  }
  destroy() {
    this.allCtrls = this.destroyBeans(this.allCtrls), this.ctrlsById = void 0, super.destroy();
  }
}, Nu = class extends K {
  constructor(e) {
    super(), this.pinned = e, this.hidden = !1, this.includeFloatingFilter = !1, this.groupsRowCtrls = [];
  }
  setComp(e, t) {
    this.comp = e, this.eViewport = t;
    const { pinnedCols: s, ctrlsSvc: n, colModel: r, colMoves: o, filterManager: i } = this.beans;
    this.setupCenterWidth(), s == null || s.setupHeaderPinnedWidth(this), this.setupDragAndDrop(o, this.eViewport);
    const a = this.onDisplayedColumnsChanged.bind(this, i);
    this.addManagedEventListeners({
      gridColumnsChanged: this.onGridColumnsChanged.bind(this),
      displayedColumnsChanged: a,
      advancedFilterEnabledChanged: a
    });
    const l = `${typeof this.pinned == "string" ? this.pinned : "center"}Header`;
    n.register(l, this), r.ready && this.refresh();
  }
  getAllCtrls() {
    const e = [...this.groupsRowCtrls];
    return this.columnsRowCtrl && e.push(this.columnsRowCtrl), this.filtersRowCtrl && e.push(this.filtersRowCtrl), e;
  }
  refresh(e = !1) {
    const { focusSvc: t, colModel: s, filterManager: n } = this.beans;
    let r = 0;
    const o = t.getFocusHeaderToUseAfterRefresh(), i = () => {
      const d = Lu(s) - 1;
      this.groupsRowCtrls = this.destroyBeans(this.groupsRowCtrls);
      for (let u = 0; u < d; u++) {
        const h = this.createBean(new In(r++, this.pinned, "group"));
        this.groupsRowCtrls.push(h);
      }
    }, a = () => {
      const d = r++, u = !this.hidden && (this.columnsRowCtrl == null || !e || this.columnsRowCtrl.rowIndex !== d);
      (u || this.hidden) && (this.columnsRowCtrl = this.destroyBean(this.columnsRowCtrl)), u && (this.columnsRowCtrl = this.createBean(new In(d, this.pinned, "column")));
    }, l = () => {
      this.includeFloatingFilter = !!(n != null && n.hasFloatingFilters()) && !this.hidden;
      const d = () => {
        this.filtersRowCtrl = this.destroyBean(this.filtersRowCtrl);
      };
      if (!this.includeFloatingFilter) {
        d();
        return;
      }
      const u = r++;
      if (this.filtersRowCtrl) {
        const h = this.filtersRowCtrl.rowIndex !== u;
        (!e || h) && d();
      }
      this.filtersRowCtrl || (this.filtersRowCtrl = this.createBean(new In(u, this.pinned, "filter")));
    };
    i(), a(), l();
    const c = this.getAllCtrls();
    this.comp.setCtrls(c), this.restoreFocusOnHeader(t, o);
  }
  getHeaderCtrlForColumn(e) {
    const t = (s) => s == null ? void 0 : s.getHeaderCellCtrls().find((n) => n.column === e);
    if (wt(e))
      return t(this.columnsRowCtrl);
    if (this.groupsRowCtrls.length !== 0)
      for (let s = 0; s < this.groupsRowCtrls.length; s++) {
        const n = t(this.groupsRowCtrls[s]);
        if (n)
          return n;
      }
  }
  getHtmlElementForColumnHeader(e) {
    var t;
    return ((t = this.getHeaderCtrlForColumn(e)) == null ? void 0 : t.eGui) ?? null;
  }
  getRowType(e) {
    var t;
    return (t = this.getAllCtrls()[e]) == null ? void 0 : t.type;
  }
  focusHeader(e, t, s) {
    const r = this.getAllCtrls()[e];
    return r ? r.focusHeader(t, s) : !1;
  }
  getGroupRowCount() {
    return this.groupsRowCtrls.length;
  }
  getGroupRowCtrlAtIndex(e) {
    return this.groupsRowCtrls[e];
  }
  getRowCount() {
    return this.groupsRowCtrls.length + (this.columnsRowCtrl ? 1 : 0) + (this.filtersRowCtrl ? 1 : 0);
  }
  setHorizontalScroll(e) {
    this.comp.setViewportScrollLeft(e);
  }
  onScrollCallback(e) {
    this.addManagedElementListeners(this.eViewport, { scroll: e });
  }
  destroy() {
    this.filtersRowCtrl = this.destroyBean(this.filtersRowCtrl), this.columnsRowCtrl = this.destroyBean(this.columnsRowCtrl), this.groupsRowCtrls = this.destroyBeans(this.groupsRowCtrls), super.destroy();
  }
  setupDragAndDrop(e, t) {
    const s = e == null ? void 0 : e.createBodyDropTarget(this.pinned, t);
    s && this.createManagedBean(s);
  }
  restoreFocusOnHeader(e, t) {
    if (!t)
      return;
    const { column: s } = t;
    s.getPinned() == this.pinned && e.focusHeaderPosition({ headerPosition: t });
  }
  // grid cols have changed - this also means the number of rows in the header can have
  // changed. so we remove all the old rows and insert new ones for a complete refresh
  onGridColumnsChanged() {
    this.refresh(!0);
  }
  onDisplayedColumnsChanged(e) {
    const t = !!(e != null && e.hasFloatingFilters()) && !this.hidden;
    this.includeFloatingFilter !== t && this.refresh(!0);
  }
  setupCenterWidth() {
    this.pinned == null && this.createManagedBean(new mr((e) => this.comp.setCenterWidth(`${e}px`), !0));
  }
}, ea = class extends ut {
  constructor() {
    super();
  }
}, Vu = {
  tag: "span",
  cls: "ag-overlay-loading-center",
  attrs: { "aria-live": "polite", "aria-atomic": "true" }
}, _u = class extends ea {
  init() {
    var t;
    const e = Dt((t = this.gos.get("overlayLoadingTemplate")) == null ? void 0 : t.trim());
    if (this.setTemplate(e ?? Vu), !e) {
      const s = this.getLocaleTextFunc();
      setTimeout(() => {
        this.getGui().textContent = s("loadingOoo", "Loading...");
      });
    }
  }
}, zu = { tag: "span", cls: "ag-overlay-no-rows-center" }, $u = class extends ea {
  init() {
    var t;
    const e = Dt((t = this.gos.get("overlayNoRowsTemplate")) == null ? void 0 : t.trim());
    if (this.setTemplate(e ?? zu), !e) {
      const s = this.getLocaleTextFunc();
      setTimeout(() => {
        this.getGui().textContent = s("noRowsToShow", "No Rows To Show");
      });
    }
  }
};
function ju(e, t, s) {
  const n = dn(e, t, s);
  if (n) {
    const { className: o } = n;
    if (typeof o == "string" && o.indexOf("ag-icon") > -1 || typeof o == "object" && o["ag-icon"])
      return n;
  }
  const r = Ct({ tag: "span" });
  return r.appendChild(n), r;
}
function dn(e, t, s) {
  var o;
  let n = null;
  e === "smallDown" ? oe(262) : e === "smallLeft" ? oe(263) : e === "smallRight" && oe(264);
  const r = s && s.getColDef().icons;
  if (r && (n = r[e]), t.gos && !n) {
    const i = t.gos.get("icons");
    i && (n = i[e]);
  }
  if (n) {
    let i;
    if (typeof n == "function")
      i = n();
    else if (typeof n == "string")
      i = n;
    else {
      oe(38, { iconName: e });
      return;
    }
    if (typeof i == "string")
      return cr(i);
    if (ei(i))
      return i;
    oe(133, { iconName: e });
    return;
  } else {
    const i = t.registry.getIcon(e);
    return i || (o = t.validation) == null || o.validateIcon(e), Ct({
      tag: "span",
      cls: `ag-icon ag-icon-${i ?? e}`,
      role: "presentation",
      attrs: { unselectable: "on" }
    });
  }
}
var Uu = (
  /*css*/
  ".ag-dnd-ghost{align-items:center;background-color:var(--ag-drag-and-drop-image-background-color);border:var(--ag-drag-and-drop-image-border);border-radius:var(--ag-border-radius);box-shadow:var(--ag-drag-and-drop-image-shadow);color:var(--ag-text-color);cursor:move;display:flex;font-weight:500;gap:var(--ag-cell-widget-spacing);height:var(--ag-header-height);overflow:hidden;padding-left:var(--ag-cell-horizontal-padding);padding-right:var(--ag-cell-horizontal-padding);text-overflow:ellipsis;transform:translateY(calc(var(--ag-spacing)*2));white-space:nowrap}"
), Ku = {
  tag: "div",
  children: [
    {
      tag: "div",
      ref: "eGhost",
      cls: "ag-dnd-ghost ag-unselectable",
      children: [
        { tag: "span", ref: "eIcon", cls: "ag-dnd-ghost-icon ag-shake-left-to-right" },
        { tag: "div", ref: "eLabel", cls: "ag-dnd-ghost-label" }
      ]
    }
  ]
}, Yu = class extends ut {
  constructor() {
    super(), this.dragSource = null, this.eIcon = de, this.eLabel = de, this.eGhost = de, this.registerCSS(Uu);
  }
  postConstruct() {
    const e = (t) => ju(t, this.beans, null);
    this.dropIconMap = {
      pinned: e("columnMovePin"),
      hide: e("columnMoveHide"),
      move: e("columnMoveMove"),
      left: e("columnMoveLeft"),
      right: e("columnMoveRight"),
      group: e("columnMoveGroup"),
      aggregate: e("columnMoveValue"),
      pivot: e("columnMovePivot"),
      notAllowed: e("dropNotAllowed")
    };
  }
  init(e) {
    this.dragSource = e.dragSource, this.setTemplate(Ku), this.beans.environment.applyThemeClasses(this.eGhost);
  }
  destroy() {
    this.dragSource = null, super.destroy();
  }
  setIcon(e, t) {
    const { eIcon: s, dragSource: n, dropIconMap: r, gos: o } = this;
    fs(s);
    let i = null;
    e || (e = n != null && n.getDefaultIconName ? n.getDefaultIconName() : "notAllowed"), i = r[e], s.classList.toggle("ag-shake-left-to-right", t), !(i === r.hide && o.get("suppressDragLeaveHidesColumns")) && i && s.appendChild(i);
  }
  setLabel(e) {
    this.eLabel.textContent = e;
  }
}, Zu = (
  /*css*/
  ".ag-label{white-space:nowrap}:where(.ag-ltr) .ag-label{margin-right:var(--ag-spacing)}:where(.ag-rtl) .ag-label{margin-left:var(--ag-spacing)}:where(.ag-label-align-right) .ag-label{order:1}:where(.ag-ltr) :where(.ag-label-align-right) .ag-label{margin-left:var(--ag-spacing)}:where(.ag-rtl) :where(.ag-label-align-right) .ag-label{margin-right:var(--ag-spacing)}.ag-label-align-right>*{flex:none}.ag-label-align-top{align-items:flex-start;flex-direction:column;>*{align-self:stretch}}.ag-label-ellipsis{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(.ag-label-align-top) .ag-label{margin-bottom:calc(var(--ag-spacing)*.5)}"
), qu = class extends ut {
  constructor(e, t, s) {
    super(t, s), this.labelSeparator = "", this.labelAlignment = "left", this.disabled = !1, this.label = "", this.config = e || {}, this.registerCSS(Zu);
  }
  postConstruct() {
    this.addCss("ag-labeled"), this.eLabel.classList.add("ag-label");
    const { labelSeparator: e, label: t, labelWidth: s, labelAlignment: n, disabled: r } = this.config;
    r != null && this.setDisabled(r), e != null && this.setLabelSeparator(e), t != null && this.setLabel(t), s != null && this.setLabelWidth(s), this.setLabelAlignment(n || this.labelAlignment), this.refreshLabel();
  }
  refreshLabel() {
    const { label: e, eLabel: t } = this;
    fs(t), typeof e == "string" ? t.innerText = e + this.labelSeparator : e && t.appendChild(e), e === "" ? (Me(t, !1), Gr(t, "presentation")) : (Me(t, !0), Gr(t, null));
  }
  setLabelSeparator(e) {
    return this.labelSeparator === e ? this : (this.labelSeparator = e, this.label != null && this.refreshLabel(), this);
  }
  getLabelId() {
    const e = this.eLabel;
    return e.id = e.id || `ag-${this.getCompId()}-label`, e.id;
  }
  getLabel() {
    return this.label;
  }
  setLabel(e) {
    return this.label === e ? this : (this.label = e, this.refreshLabel(), this);
  }
  setLabelAlignment(e) {
    const s = this.getGui().classList;
    return s.toggle("ag-label-align-left", e === "left"), s.toggle("ag-label-align-right", e === "right"), s.toggle("ag-label-align-top", e === "top"), this;
  }
  setLabelEllipsis(e) {
    return this.eLabel.classList.toggle("ag-label-ellipsis", e), this;
  }
  setLabelWidth(e) {
    return this.label == null ? this : (Qo(this.eLabel, e), this);
  }
  setDisabled(e) {
    e = !!e;
    const t = this.getGui();
    return Zo(t, e), t.classList.toggle("ag-disabled", e), this.disabled = e, this;
  }
  isDisabled() {
    return !!this.disabled;
  }
}, Xu = class extends qu {
  constructor(e, t, s, n) {
    super(e, t, s), this.className = n;
  }
  postConstruct() {
    super.postConstruct();
    const { width: e, value: t, onValueChange: s } = this.config;
    e != null && this.setWidth(e), t != null && this.setValue(t), s != null && this.onValueChange(s), this.className && this.addCss(this.className), this.refreshAriaLabelledBy();
  }
  setLabel(e) {
    return super.setLabel(e), this.refreshAriaLabelledBy(), this;
  }
  refreshAriaLabelledBy() {
    const e = this.getAriaElement(), t = this.getLabelId(), s = this.getLabel();
    s == null || s == "" || ll(e) !== null ? Br(e, "") : Br(e, t ?? "");
  }
  setAriaLabel(e) {
    return No(this.getAriaElement(), e), this.refreshAriaLabelledBy(), this;
  }
  onValueChange(e) {
    return this.addManagedListeners(this, { fieldValueChanged: () => e(this.getValue()) }), this;
  }
  getWidth() {
    return this.getGui().clientWidth;
  }
  setWidth(e) {
    return pt(this.getGui(), e), this;
  }
  getPreviousValue() {
    return this.previousValue;
  }
  getValue() {
    return this.value;
  }
  setValue(e, t) {
    return this.value === e ? this : (this.previousValue = this.value, this.value = e, t || this.dispatchLocalEvent({ type: "fieldValueChanged" }), this);
  }
};
function Qu(e) {
  return {
    tag: "div",
    role: "presentation",
    children: [
      { tag: "div", ref: "eLabel", cls: "ag-input-field-label" },
      {
        tag: "div",
        ref: "eWrapper",
        cls: "ag-wrapper ag-input-wrapper",
        role: "presentation",
        children: [{ tag: e, ref: "eInput", cls: "ag-input-field-input" }]
      }
    ]
  };
}
var Ju = class extends Xu {
  constructor(e, t, s = "text", n = "input") {
    super(e, (e == null ? void 0 : e.template) ?? Qu(n), [], t), this.inputType = s, this.displayFieldTag = n, this.eLabel = de, this.eWrapper = de, this.eInput = de;
  }
  postConstruct() {
    super.postConstruct(), this.setInputType();
    const { eLabel: e, eWrapper: t, eInput: s, className: n } = this;
    e.classList.add(`${n}-label`), t.classList.add(`${n}-input-wrapper`), s.classList.add(`${n}-input`), this.addCss("ag-input-field"), s.id = s.id || `ag-${this.getCompId()}-input`;
    const { inputName: r, inputWidth: o } = this.config;
    r != null && this.setInputName(r), o != null && this.setInputWidth(o), this.addInputListeners(), this.activateTabIndex([s]);
  }
  addInputListeners() {
    this.addManagedElementListeners(this.eInput, { input: (e) => this.setValue(e.target.value) });
  }
  setInputType() {
    this.displayFieldTag === "input" && this.eInput.setAttribute("type", this.inputType);
  }
  getInputElement() {
    return this.eInput;
  }
  setInputWidth(e) {
    return Qo(this.eWrapper, e), this;
  }
  setInputName(e) {
    return this.getInputElement().setAttribute("name", e), this;
  }
  getFocusableElement() {
    return this.eInput;
  }
  setMaxLength(e) {
    const t = this.eInput;
    return t.maxLength = e, this;
  }
  setInputPlaceholder(e) {
    return Ot(this.eInput, "placeholder", e), this;
  }
  setInputAriaLabel(e) {
    return No(this.eInput, e), this.refreshAriaLabelledBy(), this;
  }
  setDisabled(e) {
    return Zo(this.eInput, e), super.setDisabled(e);
  }
  setAutoComplete(e) {
    if (e === !0)
      Ot(this.eInput, "autocomplete", null);
    else {
      const t = typeof e == "string" ? e : "off";
      Ot(this.eInput, "autocomplete", t);
    }
    return this;
  }
}, eh = class extends Ju {
  constructor(e, t = "ag-checkbox", s = "checkbox") {
    super(e, t, s), this.labelAlignment = "right", this.selected = !1, this.readOnly = !1, this.passive = !1;
  }
  postConstruct() {
    super.postConstruct();
    const { readOnly: e, passive: t } = this.config;
    typeof e == "boolean" && this.setReadOnly(e), typeof t == "boolean" && this.setPassive(t);
  }
  addInputListeners() {
    this.addManagedElementListeners(this.eInput, { click: this.onCheckboxClick.bind(this) }), this.addManagedElementListeners(this.eLabel, { click: this.toggle.bind(this) });
  }
  getNextValue() {
    return this.selected === void 0 ? !0 : !this.selected;
  }
  setPassive(e) {
    this.passive = e;
  }
  isReadOnly() {
    return this.readOnly;
  }
  setReadOnly(e) {
    this.eWrapper.classList.toggle("ag-disabled", e), this.eInput.disabled = e, this.readOnly = e;
  }
  setDisabled(e) {
    return this.eWrapper.classList.toggle("ag-disabled", e), super.setDisabled(e);
  }
  toggle() {
    if (this.eInput.disabled)
      return;
    const e = this.isSelected(), t = this.getNextValue();
    this.passive ? this.dispatchChange(t, e) : this.setValue(t);
  }
  getValue() {
    return this.isSelected();
  }
  setValue(e, t) {
    return this.refreshSelectedClass(e), this.setSelected(e, t), this;
  }
  setName(e) {
    const t = this.getInputElement();
    return t.name = e, this;
  }
  isSelected() {
    return this.selected;
  }
  setSelected(e, t) {
    if (this.isSelected() === e)
      return;
    this.previousValue = this.isSelected(), e = this.selected = typeof e == "boolean" ? e : void 0;
    const s = this.eInput;
    s.checked = e, s.indeterminate = e === void 0, t || this.dispatchChange(this.selected, this.previousValue);
  }
  dispatchChange(e, t, s) {
    this.dispatchLocalEvent({ type: "fieldValueChanged", selected: e, previousValue: t, event: s });
    const n = this.getInputElement();
    this.eventSvc.dispatchEvent({
      type: "checkboxChanged",
      id: n.id,
      name: n.name,
      selected: e,
      previousValue: t
    });
  }
  onCheckboxClick(e) {
    if (this.passive || this.eInput.disabled)
      return;
    const t = this.isSelected(), s = this.selected = e.target.checked;
    this.refreshSelectedClass(s), this.dispatchChange(s, t, e);
  }
  refreshSelectedClass(e) {
    const t = this.eWrapper.classList;
    t.toggle("ag-checked", e === !0), t.toggle("ag-indeterminate", e == null);
  }
}, th = {
  selector: "AG-CHECKBOX",
  component: eh
}, sh = (
  /*css*/
  ".ag-checkbox-cell{height:100%}"
), nh = {
  tag: "div",
  cls: "ag-cell-wrapper ag-checkbox-cell",
  role: "presentation",
  children: [
    {
      tag: "ag-checkbox",
      ref: "eCheckbox",
      role: "presentation"
    }
  ]
}, rh = class extends ut {
  constructor() {
    super(nh, [th]), this.eCheckbox = de, this.registerCSS(sh);
  }
  init(e) {
    this.refresh(e);
    const { eCheckbox: t, beans: s } = this, n = t.getInputElement();
    n.setAttribute("tabindex", "-1"), Vo(n, "polite"), this.addManagedListeners(n, {
      click: (r) => {
        if (_s(r), t.isDisabled())
          return;
        const o = t.getValue();
        this.onCheckboxChanged(o);
      },
      dblclick: (r) => {
        _s(r);
      }
    }), this.addManagedElementListeners(e.eGridCell, {
      keydown: (r) => {
        if (r.key === j.SPACE && !t.isDisabled()) {
          e.eGridCell === Oe(s) && t.toggle();
          const o = t.getValue();
          this.onCheckboxChanged(o), r.preventDefault();
        }
      }
    });
  }
  refresh(e) {
    return this.params = e, this.updateCheckbox(e), !0;
  }
  updateCheckbox(e) {
    let t, s = !0;
    const { value: n, column: r, node: o } = e;
    if (o.group && r)
      if (typeof n == "boolean")
        t = n;
      else {
        const u = r.getColId();
        u.startsWith(rn) ? t = n == null || n === "" ? void 0 : n === "true" : o.aggData && o.aggData[u] !== void 0 ? t = n ?? void 0 : s = !1;
      }
    else
      t = n ?? void 0;
    const { eCheckbox: i } = this;
    if (!s) {
      i.setDisplayed(!1);
      return;
    }
    i.setValue(t);
    const a = e.disabled ?? !(r != null && r.isCellEditable(o));
    i.setDisabled(a);
    const l = this.getLocaleTextFunc(), c = wl(l, t), d = a ? c : `${l("ariaToggleCellValue", "Press SPACE to toggle cell value")} (${c})`;
    i.setInputAriaLabel(d);
  }
  onCheckboxChanged(e) {
    const { eventSvc: t, params: s } = this, { column: n, node: r, value: o } = s, i = {
      column: n,
      colDef: n.getColDef(),
      data: r.data,
      node: r,
      rowIndex: r.rowIndex,
      rowPinned: r.rowPinned,
      value: o
    };
    t.dispatchEvent({
      type: "cellEditingStarted",
      ...i
    });
    const a = r.setDataValue(n, e, "edit");
    t.dispatchEvent({
      type: "cellEditingStopped",
      ...i,
      oldValue: o,
      newValue: e,
      valueChanged: a
    }), a || this.updateCheckbox(s);
  }
};
function oo(e, t) {
  return e.toString().padStart(t, "0");
}
function io(e, t = !0, s = "-") {
  if (!e)
    return null;
  let n = [e.getFullYear(), e.getMonth() + 1, e.getDate()].map((r) => oo(r, 2)).join(s);
  return t && (n += " " + [e.getHours(), e.getMinutes(), e.getSeconds()].map((r) => oo(r, 2)).join(":")), n;
}
function ao(e) {
  if (!e)
    return null;
  const [t, s] = e.split(" ");
  if (!t)
    return null;
  const n = t.split("-").map((u) => parseInt(u, 10));
  if (n.filter((u) => !isNaN(u)).length !== 3)
    return null;
  const [r, o, i] = n, a = new Date(r, o - 1, i);
  if (a.getFullYear() !== r || a.getMonth() !== o - 1 || a.getDate() !== i)
    return null;
  if (!s || s === "00:00:00")
    return a;
  const [l, c, d] = s.split(":").map((u) => parseInt(u, 10));
  return l >= 0 && l < 24 && a.setHours(l), c >= 0 && c < 60 && a.setMinutes(c), d >= 0 && d < 60 && a.setSeconds(d), a;
}
var Ln = {
  TAB_GUARD: "ag-tab-guard",
  TAB_GUARD_TOP: "ag-tab-guard-top",
  TAB_GUARD_BOTTOM: "ag-tab-guard-bottom"
}, oh = class extends K {
  constructor(e) {
    super(), this.skipTabGuardFocus = !1, this.forcingFocusOut = !1, this.allowFocus = !1;
    const {
      comp: t,
      eTopGuard: s,
      eBottomGuard: n,
      focusTrapActive: r,
      forceFocusOutWhenTabGuardsAreEmpty: o,
      isFocusableContainer: i,
      focusInnerElement: a,
      onFocusIn: l,
      onFocusOut: c,
      shouldStopEventPropagation: d,
      onTabKeyDown: u,
      handleKeyDown: h,
      isEmpty: g,
      eFocusableElement: f
    } = e;
    this.comp = t, this.eTopGuard = s, this.eBottomGuard = n, this.providedFocusInnerElement = a, this.eFocusableElement = f, this.focusTrapActive = !!r, this.forceFocusOutWhenTabGuardsAreEmpty = !!o, this.isFocusableContainer = !!i, this.providedFocusIn = l, this.providedFocusOut = c, this.providedShouldStopEventPropagation = d, this.providedOnTabKeyDown = u, this.providedHandleKeyDown = h, this.providedIsEmpty = g;
  }
  postConstruct() {
    this.createManagedBean(
      new ln(this.eFocusableElement, {
        shouldStopEventPropagation: () => this.shouldStopEventPropagation(),
        onTabKeyDown: (e) => this.onTabKeyDown(e),
        handleKeyDown: (e) => this.handleKeyDown(e),
        onFocusIn: (e) => this.onFocusIn(e),
        onFocusOut: (e) => this.onFocusOut(e)
      })
    ), this.activateTabGuards(), [this.eTopGuard, this.eBottomGuard].forEach(
      (e) => this.addManagedElementListeners(e, { focus: this.onFocus.bind(this) })
    );
  }
  handleKeyDown(e) {
    this.providedHandleKeyDown && this.providedHandleKeyDown(e);
  }
  tabGuardsAreActive() {
    return !!this.eTopGuard && this.eTopGuard.hasAttribute("tabIndex");
  }
  shouldStopEventPropagation() {
    return this.providedShouldStopEventPropagation ? this.providedShouldStopEventPropagation() : !1;
  }
  activateTabGuards() {
    if (this.forcingFocusOut)
      return;
    const e = this.gos.get("tabIndex");
    this.comp.setTabIndex(e.toString());
  }
  deactivateTabGuards() {
    this.comp.setTabIndex();
  }
  onFocus(e) {
    if (this.isFocusableContainer && !this.eFocusableElement.contains(e.relatedTarget) && !this.allowFocus) {
      this.findNextElementOutsideAndFocus(e.target === this.eBottomGuard);
      return;
    }
    if (this.skipTabGuardFocus) {
      this.skipTabGuardFocus = !1;
      return;
    }
    if (this.forceFocusOutWhenTabGuardsAreEmpty && (this.providedIsEmpty ? this.providedIsEmpty() : Gt(this.eFocusableElement, ".ag-tab-guard").length === 0)) {
      this.findNextElementOutsideAndFocus(e.target === this.eBottomGuard);
      return;
    }
    if (this.isFocusableContainer && this.eFocusableElement.contains(e.relatedTarget))
      return;
    const t = e.target === this.eBottomGuard;
    !(this.providedFocusInnerElement ? this.providedFocusInnerElement(t) : this.focusInnerElement(t)) && this.forceFocusOutWhenTabGuardsAreEmpty && this.findNextElementOutsideAndFocus(e.target === this.eBottomGuard);
  }
  findNextElementOutsideAndFocus(e) {
    var l;
    const t = rt(this.beans), s = Gt(t.body, null, !0), n = s.indexOf(e ? this.eTopGuard : this.eBottomGuard);
    if (n === -1)
      return;
    let r, o;
    e ? (r = 0, o = n) : (r = n + 1, o = s.length);
    const i = s.slice(r, o), a = this.gos.get("tabIndex");
    i.sort((c, d) => {
      const u = parseInt(c.getAttribute("tabindex") || "0"), h = parseInt(d.getAttribute("tabindex") || "0");
      return h === a ? 1 : u === a ? -1 : u === 0 ? 1 : h === 0 ? -1 : u - h;
    }), (l = i[e ? i.length - 1 : 0]) == null || l.focus();
  }
  onFocusIn(e) {
    this.focusTrapActive || this.forcingFocusOut || (this.providedFocusIn && this.providedFocusIn(e), this.isFocusableContainer || this.deactivateTabGuards());
  }
  onFocusOut(e) {
    this.focusTrapActive || (this.providedFocusOut && this.providedFocusOut(e), this.eFocusableElement.contains(e.relatedTarget) || this.activateTabGuards());
  }
  onTabKeyDown(e) {
    if (this.providedOnTabKeyDown) {
      this.providedOnTabKeyDown(e);
      return;
    }
    if (this.focusTrapActive || e.defaultPrevented)
      return;
    const t = this.tabGuardsAreActive();
    t && this.deactivateTabGuards();
    const s = this.getNextFocusableElement(e.shiftKey);
    t && setTimeout(() => this.activateTabGuards(), 0), s && (s.focus(), e.preventDefault());
  }
  focusInnerElement(e = !1) {
    const t = Gt(this.eFocusableElement);
    return this.tabGuardsAreActive() && (t.splice(0, 1), t.splice(t.length - 1, 1)), t.length ? (t[e ? t.length - 1 : 0].focus({ preventScroll: !0 }), !0) : !1;
  }
  getNextFocusableElement(e) {
    return an(this.beans, this.eFocusableElement, !1, e);
  }
  forceFocusOutOfContainer(e = !1) {
    if (this.forcingFocusOut)
      return;
    const t = e ? this.eTopGuard : this.eBottomGuard;
    this.activateTabGuards(), this.skipTabGuardFocus = !0, this.forcingFocusOut = !0, t.focus(), window.setTimeout(() => {
      this.forcingFocusOut = !1, this.activateTabGuards();
    });
  }
  isTabGuard(e, t) {
    return e === this.eTopGuard && !t || e === this.eBottomGuard && (t ?? !0);
  }
  setAllowFocus(e) {
    this.allowFocus = e;
  }
}, At = class {
  constructor(e, t = !1) {
    this.DOUBLE_TAP_MILLIS = 500, this.destroyFuncs = [], this.touching = !1, this.localEventService = new gs(), this.preventMouseClick = t;
    const s = this.onTouchStart.bind(this), n = this.onTouchMove.bind(this), r = this.onTouchEnd.bind(this);
    e.addEventListener("touchstart", s, { passive: !0 }), e.addEventListener("touchmove", n, { passive: !0 }), e.addEventListener("touchend", r, { passive: !1 }), this.destroyFuncs.push(() => {
      e.removeEventListener("touchstart", s, { passive: !0 }), e.removeEventListener("touchmove", n, { passive: !0 }), e.removeEventListener("touchend", r, { passive: !1 });
    });
  }
  getActiveTouch(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].identifier === this.touchStart.identifier)
        return e[t];
    return null;
  }
  addEventListener(e, t) {
    this.localEventService.addEventListener(e, t);
  }
  removeEventListener(e, t) {
    this.localEventService.removeEventListener(e, t);
  }
  onTouchStart(e) {
    if (this.touching)
      return;
    this.touchStart = e.touches[0], this.touching = !0, this.moved = !1;
    const t = this.touchStart;
    window.setTimeout(() => {
      const s = this.touchStart === t;
      if (this.touching && s && !this.moved) {
        this.moved = !0;
        const n = {
          type: "longTap",
          touchStart: this.touchStart,
          touchEvent: e
        };
        this.localEventService.dispatchEvent(n);
      }
    }, 500);
  }
  onTouchMove(e) {
    if (!this.touching)
      return;
    const t = this.getActiveTouch(e.touches);
    if (!t)
      return;
    !Vi(t, this.touchStart, 4) && (this.moved = !0);
  }
  onTouchEnd(e) {
    if (this.touching) {
      if (!this.moved) {
        const t = {
          type: "tap",
          touchStart: this.touchStart
        };
        this.localEventService.dispatchEvent(t), this.checkForDoubleTap();
      }
      this.preventMouseClick && e.cancelable && e.preventDefault(), this.touching = !1;
    }
  }
  checkForDoubleTap() {
    const e = Date.now();
    if (this.lastTapTime && this.lastTapTime > 0)
      if (e - this.lastTapTime > this.DOUBLE_TAP_MILLIS) {
        const s = {
          type: "doubleTap",
          touchStart: this.touchStart
        };
        this.localEventService.dispatchEvent(s), this.lastTapTime = null;
      } else
        this.lastTapTime = e;
    else
      this.lastTapTime = e;
  }
  destroy() {
    this.destroyFuncs.forEach((e) => e());
  }
}, ta = class {
  constructor(e = "javascript") {
    this.frameworkName = e, this.renderingEngine = "vanilla", this.batchFrameworkComps = !1, this.wrapIncoming = (t) => t(), this.wrapOutgoing = (t) => t(), this.baseDocLink = `${ni}/${this.frameworkName}-data-grid`, Il(this.baseDocLink);
  }
  setInterval(e, t) {
    return new Xe((s) => {
      s(window.setInterval(e, t));
    });
  }
  // for Vanilla JS, we just add the event to the element
  addEventListener(e, t, s, n) {
    let r = {};
    if (typeof n == "object" ? r = n : typeof n == "boolean" && (r = { capture: n }), r.passive == null) {
      const o = vi(t);
      o != null && (r.passive = o);
    }
    e.addEventListener(t, s, r);
  }
  frameworkComponent(e) {
    return null;
  }
  isFrameworkComponent(e) {
    return !1;
  }
  getDocLink(e) {
    return `${this.baseDocLink}${e ? `/${e}` : ""}`;
  }
};
function ih(e) {
  return {
    beanName: "gridApi",
    bean: e.getBean("apiFunctionSvc").api
  };
}
var ah = [
  // Validate license first
  "licenseManager",
  // core beans only
  "environment",
  "eventSvc",
  "gos",
  "paginationAutoPageSizeSvc",
  "apiFunctionSvc",
  "gridApi",
  "registry",
  "agCompUtils",
  "userCompFactory",
  "rowContainerHeight",
  "horizontalResizeSvc",
  "localeSvc",
  "pinnedRowModel",
  "dragSvc",
  "colGroupSvc",
  "visibleCols",
  "popupSvc",
  "selectionSvc",
  "colFilter",
  "quickFilter",
  "filterManager",
  "colModel",
  "headerNavigation",
  "pageBounds",
  "pagination",
  "pageBoundsListener",
  "rowSpanSvc",
  "stickyRowSvc",
  "rowRenderer",
  "expressionSvc",
  "alignedGridsSvc",
  "navigation",
  "valueCache",
  "valueSvc",
  "autoWidthCalc",
  "filterMenuFactory",
  "dragAndDrop",
  "focusSvc",
  "cellNavigation",
  "cellStyles",
  "scrollVisibleSvc",
  "sortSvc",
  "colHover",
  "colAnimation",
  "autoColSvc",
  "selectionColSvc",
  "changeDetectionSvc",
  "animationFrameSvc",
  "undoRedo",
  "colDefFactory",
  "rowStyleSvc",
  "rowNodeBlockLoader",
  "rowNodeSorter",
  "ctrlsSvc",
  "pinnedCols",
  "dataTypeSvc",
  "syncSvc",
  "overlays",
  "stateSvc",
  "expansionSvc",
  "apiEventSvc",
  "ariaAnnounce",
  "menuSvc",
  "colMoves",
  "colAutosize",
  "colFlex",
  "colResize",
  "pivotColsSvc",
  "valueColsSvc",
  "rowGroupColsSvc",
  "funcColsSvc",
  "colNames",
  "colViewport",
  "pivotResultCols",
  "showRowGroupCols",
  "validation"
  // Have validations run last
], lo = Object.fromEntries(
  ah.map((e, t) => [e, t])
);
function lh(e, t) {
  const s = (e.beanName ? lo[e.beanName] : void 0) ?? Number.MAX_SAFE_INTEGER, n = (t.beanName ? lo[t.beanName] : void 0) ?? Number.MAX_SAFE_INTEGER;
  return s - n;
}
function ch(e, t) {
  return (e == null ? void 0 : e.beanName) === "gridDestroySvc" ? -1 : (t == null ? void 0 : t.beanName) === "gridDestroySvc" ? 1 : 0;
}
var dh = class extends K {
  constructor() {
    super(...arguments), this.additionalFocusableContainers = /* @__PURE__ */ new Set();
  }
  setComp(e, t, s) {
    this.view = e, this.eGridHostDiv = t, this.eGui = s, this.eGui.setAttribute("grid-id", this.beans.context.getGridId());
    const { dragAndDrop: n, ctrlsSvc: r } = this.beans;
    n == null || n.registerGridDropTarget(() => this.eGui, this), Bi(this.gos, t), this.createManagedBean(new Cr(this.view)), this.view.setRtlClass(this.gos.get("enableRtl") ? "ag-rtl" : "ag-ltr");
    const o = jt(this.beans, this.eGridHostDiv, this.onGridSizeChanged.bind(this));
    this.addDestroyFunc(() => o()), r.register("gridCtrl", this);
  }
  isDetailGrid() {
    var t;
    const e = Ed(this.getGui());
    return ((t = e == null ? void 0 : e.getAttribute("row-id")) == null ? void 0 : t.startsWith("detail")) || !1;
  }
  getOptionalSelectors() {
    var t, s, n, r;
    const e = this.beans;
    return {
      paginationSelector: (t = e.pagination) == null ? void 0 : t.getPaginationSelector(),
      gridHeaderDropZonesSelector: e.registry.getSelector("AG-GRID-HEADER-DROP-ZONES"),
      sideBarSelector: (s = e.sideBar) == null ? void 0 : s.getSelector(),
      statusBarSelector: (n = e.registry) == null ? void 0 : n.getSelector("AG-STATUS-BAR"),
      watermarkSelector: (r = e.licenseManager) == null ? void 0 : r.getWatermarkSelector()
    };
  }
  onGridSizeChanged() {
    this.eventSvc.dispatchEvent({
      type: "gridSizeChanged",
      clientWidth: this.eGridHostDiv.clientWidth,
      clientHeight: this.eGridHostDiv.clientHeight
    });
  }
  destroyGridUi() {
    this.view.destroyGridUi();
  }
  getGui() {
    return this.eGui;
  }
  setResizeCursor(e) {
    this.view.setCursor(e ? "ew-resize" : null);
  }
  disableUserSelect(e) {
    this.view.setUserSelect(e ? "none" : null);
  }
  focusNextInnerContainer(e) {
    const t = this.getFocusableContainers(), { indexWithFocus: s, nextIndex: n } = this.getNextFocusableIndex(t, e);
    if (n < 0 || n >= t.length)
      return !1;
    if (n === 0) {
      if (s > 0) {
        const { visibleCols: r, focusSvc: o } = this.beans, i = r.allCols, a = Ce(i);
        if (o.focusGridView({ column: a, backwards: !0 }))
          return !0;
      }
      return !1;
    }
    return this.focusContainer(t[n], e);
  }
  focusInnerElement(e) {
    const t = this.gos.getCallback("focusGridInnerElement");
    if (t && t({ fromBottom: !!e }))
      return !0;
    const s = this.getFocusableContainers(), { focusSvc: n, visibleCols: r } = this.beans, o = r.allCols;
    if (e) {
      if (s.length > 1)
        return this.focusContainer(Ce(s), e);
      const i = Ce(o);
      if (n.focusGridView({ column: i, backwards: e }))
        return !0;
    }
    if (this.gos.get("headerHeight") === 0 || Et(this.beans)) {
      if (n.focusGridView({ column: o[0], backwards: e }))
        return !0;
      for (let i = 1; i < s.length; i++)
        if (Ys(s[i].getGui(), e))
          return !0;
      return !1;
    }
    return n.focusFirstHeader();
  }
  forceFocusOutOfContainer(e = !1) {
    this.view.forceFocusOutOfContainer(e);
  }
  addFocusableContainer(e) {
    this.additionalFocusableContainers.add(e);
  }
  removeFocusableContainer(e) {
    this.additionalFocusableContainers.delete(e);
  }
  allowFocusForNextCoreContainer(e) {
    var o;
    const t = this.view.getFocusableContainers(), { nextIndex: s, indexWithFocus: n } = this.getNextFocusableIndex(t, e);
    if (n === -1 || s < 0 || s >= t.length)
      return;
    const r = t[s];
    (o = r.setAllowFocus) == null || o.call(r, !0), setTimeout(() => {
      var i;
      (i = r.setAllowFocus) == null || i.call(r, !1);
    });
  }
  isFocusable() {
    var t, s;
    const e = this.beans;
    return !pr(e) || !Et(e) || !!((s = (t = e.sideBar) == null ? void 0 : t.comp) != null && s.isDisplayed());
  }
  getNextFocusableIndex(e, t) {
    const s = Oe(this.beans), n = e.findIndex((o) => o.getGui().contains(s)), r = n + (t ? -1 : 1);
    return {
      indexWithFocus: n,
      nextIndex: r
    };
  }
  focusContainer(e, t) {
    var n, r;
    (n = e.setAllowFocus) == null || n.call(e, !0);
    const s = Ys(e.getGui(), t, !1, !0);
    return (r = e.setAllowFocus) == null || r.call(e, !1), s;
  }
  getFocusableContainers() {
    return [...this.view.getFocusableContainers(), ...this.additionalFocusableContainers];
  }
  destroy() {
    this.additionalFocusableContainers.clear(), super.destroy();
  }
}, J = (e, t) => {
  for (const s of Object.keys(t))
    t[s] = e;
  return t;
}, co = {
  dispatchEvent: "CommunityCore",
  // this is always registered
  ...J("CommunityCore", {
    destroy: 0,
    getGridId: 0,
    getGridOption: 0,
    isDestroyed: 0,
    setGridOption: 0,
    updateGridOptions: 0,
    isModuleRegistered: 0
  }),
  ...J("GridState", {
    getState: 0
  }),
  ...J("SharedRowSelection", {
    setNodesSelected: 0,
    selectAll: 0,
    deselectAll: 0,
    selectAllFiltered: 0,
    deselectAllFiltered: 0,
    selectAllOnCurrentPage: 0,
    deselectAllOnCurrentPage: 0,
    getSelectedNodes: 0,
    getSelectedRows: 0
  }),
  ...J("RowApi", {
    redrawRows: 0,
    setRowNodeExpanded: 0,
    getRowNode: 0,
    addRenderedRowListener: 0,
    getRenderedNodes: 0,
    forEachNode: 0,
    getFirstDisplayedRowIndex: 0,
    getLastDisplayedRowIndex: 0,
    getDisplayedRowAtIndex: 0,
    getDisplayedRowCount: 0
  }),
  ...J("ScrollApi", {
    getVerticalPixelRange: 0,
    getHorizontalPixelRange: 0,
    ensureColumnVisible: 0,
    ensureIndexVisible: 0,
    ensureNodeVisible: 0
  }),
  ...J("KeyboardNavigation", {
    getFocusedCell: 0,
    clearFocusedCell: 0,
    setFocusedCell: 0,
    tabToNextCell: 0,
    tabToPreviousCell: 0,
    setFocusedHeader: 0
  }),
  ...J("EventApi", {
    addEventListener: 0,
    addGlobalListener: 0,
    removeEventListener: 0,
    removeGlobalListener: 0
  }),
  ...J("ValueCache", {
    expireValueCache: 0
  }),
  ...J("CellApi", {
    getCellValue: 0
  }),
  ...J("SharedMenu", {
    showColumnMenu: 0,
    hidePopupMenu: 0
  }),
  ...J("Sort", {
    onSortChanged: 0
  }),
  ...J("PinnedRow", {
    getPinnedTopRowCount: 0,
    getPinnedBottomRowCount: 0,
    getPinnedTopRow: 0,
    getPinnedBottomRow: 0,
    forEachPinnedRow: 0
  }),
  ...J("Overlay", {
    showLoadingOverlay: 0,
    showNoRowsOverlay: 0,
    hideOverlay: 0
  }),
  ...J("RenderApi", {
    setGridAriaProperty: 0,
    refreshCells: 0,
    refreshHeader: 0,
    isAnimationFrameQueueEmpty: 0,
    flushAllAnimationFrames: 0,
    getSizesForCurrentTheme: 0,
    getCellRendererInstances: 0
  }),
  ...J("HighlightChanges", {
    flashCells: 0
  }),
  ...J("RowDrag", {
    addRowDropZone: 0,
    removeRowDropZone: 0,
    getRowDropZoneParams: 0
  }),
  ...J("ColumnApi", {
    getColumnDefs: 0,
    getColumnDef: 0,
    getDisplayNameForColumn: 0,
    getColumn: 0,
    getColumns: 0,
    applyColumnState: 0,
    getColumnState: 0,
    resetColumnState: 0,
    isPinning: 0,
    isPinningLeft: 0,
    isPinningRight: 0,
    getDisplayedColAfter: 0,
    getDisplayedColBefore: 0,
    setColumnsVisible: 0,
    setColumnsPinned: 0,
    getAllGridColumns: 0,
    getDisplayedLeftColumns: 0,
    getDisplayedCenterColumns: 0,
    getDisplayedRightColumns: 0,
    getAllDisplayedColumns: 0,
    getAllDisplayedVirtualColumns: 0
  }),
  ...J("ColumnAutoSize", {
    sizeColumnsToFit: 0,
    autoSizeColumns: 0,
    autoSizeAllColumns: 0
  }),
  ...J("ColumnGroup", {
    setColumnGroupOpened: 0,
    getColumnGroup: 0,
    getProvidedColumnGroup: 0,
    getDisplayNameForColumnGroup: 0,
    getColumnGroupState: 0,
    setColumnGroupState: 0,
    resetColumnGroupState: 0,
    getLeftDisplayedColumnGroups: 0,
    getCenterDisplayedColumnGroups: 0,
    getRightDisplayedColumnGroups: 0,
    getAllDisplayedColumnGroups: 0
  }),
  ...J("ColumnMove", {
    moveColumnByIndex: 0,
    moveColumns: 0
  }),
  ...J("ColumnResize", {
    setColumnWidths: 0
  }),
  ...J("ColumnHover", {
    isColumnHovered: 0
  }),
  ...J("EditCore", {
    getCellEditorInstances: 0,
    getEditingCells: 0,
    stopEditing: 0,
    startEditingCell: 0
  }),
  ...J("UndoRedoEdit", {
    undoCellEditing: 0,
    redoCellEditing: 0,
    getCurrentUndoSize: 0,
    getCurrentRedoSize: 0
  }),
  ...J("FilterCore", {
    isAnyFilterPresent: 0,
    onFilterChanged: 0
  }),
  ...J("ColumnFilter", {
    isColumnFilterPresent: 0,
    getColumnFilterInstance: 0,
    destroyFilter: 0,
    setFilterModel: 0,
    getFilterModel: 0,
    getColumnFilterModel: 0,
    setColumnFilterModel: 0,
    showColumnFilter: 0
  }),
  ...J("QuickFilter", {
    isQuickFilterPresent: 0,
    getQuickFilter: 0,
    resetQuickFilter: 0
  }),
  ...J("Find", {
    findGetActiveMatch: 0,
    findGetTotalMatches: 0,
    findGoTo: 0,
    findNext: 0,
    findPrevious: 0,
    findGetNumMatches: 0,
    findGetParts: 0,
    findClearActive: 0,
    findRefresh: 0
  }),
  ...J("Pagination", {
    paginationIsLastPageFound: 0,
    paginationGetPageSize: 0,
    paginationGetCurrentPage: 0,
    paginationGetTotalPages: 0,
    paginationGetRowCount: 0,
    paginationGoToNextPage: 0,
    paginationGoToPreviousPage: 0,
    paginationGoToFirstPage: 0,
    paginationGoToLastPage: 0,
    paginationGoToPage: 0
  }),
  ...J("CsrmSsrmSharedApi", {
    expandAll: 0,
    collapseAll: 0,
    onRowHeightChanged: 0
  }),
  ...J("SsrmInfiniteSharedApi", {
    setRowCount: 0,
    getCacheBlockState: 0,
    isLastRowIndexKnown: 0
  }),
  ...J("ClientSideRowModelApi", {
    onGroupExpandedOrCollapsed: 0,
    refreshClientSideRowModel: 0,
    isRowDataEmpty: 0,
    forEachLeafNode: 0,
    forEachNodeAfterFilter: 0,
    forEachNodeAfterFilterAndSort: 0,
    resetRowHeights: 0,
    applyTransaction: 0,
    applyTransactionAsync: 0,
    flushAsyncTransactions: 0,
    getBestCostNodeSelection: 0
  }),
  ...J("CsvExport", {
    getDataAsCsv: 0,
    exportDataAsCsv: 0
  }),
  ...J("InfiniteRowModel", {
    refreshInfiniteCache: 0,
    purgeInfiniteCache: 0,
    getInfiniteRowCount: 0
  }),
  ...J("AdvancedFilter", {
    getAdvancedFilterModel: 0,
    setAdvancedFilterModel: 0,
    showAdvancedFilterBuilder: 0,
    hideAdvancedFilterBuilder: 0
  }),
  ...J("IntegratedCharts", {
    getChartModels: 0,
    getChartRef: 0,
    getChartImageDataURL: 0,
    downloadChart: 0,
    openChartToolPanel: 0,
    closeChartToolPanel: 0,
    createRangeChart: 0,
    createPivotChart: 0,
    createCrossFilterChart: 0,
    updateChart: 0,
    restoreChart: 0
  }),
  ...J("Clipboard", {
    copyToClipboard: 0,
    cutToClipboard: 0,
    copySelectedRowsToClipboard: 0,
    copySelectedRangeToClipboard: 0,
    copySelectedRangeDown: 0,
    pasteFromClipboard: 0
  }),
  ...J("ExcelExport", {
    getDataAsExcel: 0,
    exportDataAsExcel: 0,
    getSheetDataForExcel: 0,
    getMultipleSheetsAsExcel: 0,
    exportMultipleSheetsAsExcel: 0
  }),
  ...J("SharedMasterDetail", {
    addDetailGridInfo: 0,
    removeDetailGridInfo: 0,
    getDetailGridInfo: 0,
    forEachDetailGridInfo: 0
  }),
  ...J("ContextMenu", {
    showContextMenu: 0
  }),
  ...J("ColumnMenu", {
    showColumnChooser: 0,
    hideColumnChooser: 0
  }),
  ...J("CellSelection", {
    getCellRanges: 0,
    addCellRange: 0,
    clearRangeSelection: 0,
    clearCellSelection: 0
  }),
  ...J("SharedRowGrouping", {
    setRowGroupColumns: 0,
    removeRowGroupColumns: 0,
    addRowGroupColumns: 0,
    getRowGroupColumns: 0,
    moveRowGroupColumn: 0
  }),
  ...J("SharedAggregation", {
    addAggFuncs: 0,
    clearAggFuncs: 0,
    setColumnAggFunc: 0
  }),
  ...J("SharedPivot", {
    isPivotMode: 0,
    getPivotResultColumn: 0,
    setValueColumns: 0,
    getValueColumns: 0,
    removeValueColumns: 0,
    addValueColumns: 0,
    setPivotColumns: 0,
    removePivotColumns: 0,
    addPivotColumns: 0,
    getPivotColumns: 0,
    setPivotResultColumns: 0,
    getPivotResultColumns: 0
  }),
  ...J("ServerSideRowModelApi", {
    getServerSideSelectionState: 0,
    setServerSideSelectionState: 0,
    applyServerSideTransaction: 0,
    applyServerSideTransactionAsync: 0,
    applyServerSideRowData: 0,
    retryServerSideLoads: 0,
    flushServerSideAsyncTransactions: 0,
    refreshServerSide: 0,
    getServerSideGroupLevelState: 0
  }),
  ...J("SideBar", {
    isSideBarVisible: 0,
    setSideBarVisible: 0,
    setSideBarPosition: 0,
    openToolPanel: 0,
    closeToolPanel: 0,
    getOpenedToolPanel: 0,
    refreshToolPanel: 0,
    isToolPanelShowing: 0,
    getToolPanelInstance: 0,
    getSideBar: 0
  }),
  ...J("StatusBar", {
    getStatusPanel: 0
  })
}, An = {
  isDestroyed: () => !0,
  destroy() {
  },
  preConstruct() {
  },
  postConstruct() {
  },
  preWireBeans() {
  },
  wireBeans() {
  }
}, uh = (e, t) => e.eventSvc.dispatchEvent(t), sa = class {
};
Reflect.defineProperty(sa, "name", { value: "GridApi" });
var hh = class extends K {
  constructor() {
    super(), this.beanName = "apiFunctionSvc", this.api = new sa(), this.fns = {
      ...An,
      // dispatchEvent is used by frameworks, also used by aligned grids to identify a grid api instance
      dispatchEvent: uh
    }, this.preDestroyLink = "";
    const { api: e } = this;
    for (const t of Object.keys(co))
      e[t] = this.makeApi(t)[t];
  }
  postConstruct() {
    this.preDestroyLink = this.beans.frameworkOverrides.getDocLink("grid-lifecycle/#grid-pre-destroyed");
  }
  addFunction(e, t) {
    var r;
    const { fns: s, beans: n } = this;
    s !== An && (s[e] = ((r = n == null ? void 0 : n.validation) == null ? void 0 : r.validateApiFunction(e, t)) ?? t);
  }
  makeApi(e) {
    return {
      [e]: (...t) => {
        const {
          beans: s,
          fns: { [e]: n }
        } = this;
        return n ? n(s, ...t) : this.apiNotFound(e);
      }
    };
  }
  apiNotFound(e) {
    const { beans: t, gos: s, preDestroyLink: n } = this;
    if (!t)
      oe(26, { fnName: e, preDestroyLink: n });
    else {
      const r = co[e];
      s.assertModuleRegistered(r, `api.${e}`) && oe(27, { fnName: e, module: r });
    }
  }
  destroy() {
    super.destroy(), this.fns = An, this.beans = null;
  }
};
function gh(e) {
  return e.context.getGridId();
}
function fh(e) {
  e.gridDestroySvc.destroy();
}
function ph(e) {
  return e.gridDestroySvc.destroyCalled;
}
function Ch(e, t) {
  return e.gos.get(t);
}
function mh(e, t, s) {
  na(e, { [t]: s });
}
function na(e, t) {
  e.gos.updateGridOptions({ options: t });
}
function wh(e, t) {
  const s = t.replace(/Module$/, "");
  return e.gos.isModuleRegistered(s);
}
var vh = class extends K {
  constructor() {
    super(...arguments), this.beanName = "horizontalResizeSvc";
  }
  addResizeBar(e) {
    const t = {
      dragStartPixels: e.dragStartPixels || 0,
      eElement: e.eResizeBar,
      onDragStart: this.onDragStart.bind(this, e),
      onDragStop: this.onDragStop.bind(this, e),
      onDragging: this.onDragging.bind(this, e),
      onDragCancel: this.onDragStop.bind(this, e),
      includeTouch: !0,
      stopPropagationForTouch: !0
    }, { dragSvc: s } = this.beans;
    return s.addDragSource(t), () => s.removeDragSource(t);
  }
  onDragStart(e, t) {
    this.dragStartX = t.clientX, this.setResizeIcons();
    const s = t instanceof MouseEvent && t.shiftKey === !0;
    e.onResizeStart(s);
  }
  setResizeIcons() {
    const e = this.beans.ctrlsSvc.get("gridCtrl");
    e.setResizeCursor(!0), e.disableUserSelect(!0);
  }
  onDragStop(e) {
    e.onResizeEnd(this.resizeAmount), this.resetIcons();
  }
  resetIcons() {
    const e = this.beans.ctrlsSvc.get("gridCtrl");
    e.setResizeCursor(!1), e.disableUserSelect(!1);
  }
  onDragging(e, t) {
    this.resizeAmount = t.clientX - this.dragStartX, e.onResizing(this.resizeAmount);
  }
}, ra = {
  moduleName: "Drag",
  version: be,
  beans: [Xd]
}, bh = {
  moduleName: "SharedDragAndDrop",
  version: be,
  beans: [$d],
  dependsOn: [ra],
  userComponents: {
    agDragAndDropImage: Yu
  },
  icons: {
    // shown on drag and drop image component icon while dragging column to the side of the grid to pin
    columnMovePin: "pin",
    // shown on drag and drop image component icon while dragging over part of the page that is not a drop zone
    columnMoveHide: "eye-slash",
    // shown on drag and drop image component icon while dragging columns to reorder
    columnMoveMove: "arrows",
    // animating icon shown when dragging a column to the right of the grid causes horizontal scrolling
    columnMoveLeft: "left",
    // animating icon shown when dragging a column to the left of the grid causes horizontal scrolling
    columnMoveRight: "right",
    // shown on drag and drop image component icon while dragging over Row Groups drop zone
    columnMoveGroup: "group",
    // shown on drag and drop image component icon while dragging over Values drop zone
    columnMoveValue: "aggregation",
    // shown on drag and drop image component icon while dragging over pivot drop zone
    columnMovePivot: "pivot",
    // shown on drag and drop image component icon while dragging over drop zone that doesn't support it, e.g.
    // string column over aggregation drop zone
    dropNotAllowed: "not-allowed",
    // drag handle used to pick up draggable rows
    rowDrag: "grip"
  }
}, yh = {
  moduleName: "HorizontalResize",
  version: be,
  beans: [vh],
  dependsOn: [ra]
}, Sh = (
  /*css*/
  ":where(.ag-ltr) :where(.ag-column-moving){.ag-cell,.ag-header-cell,.ag-spanned-cell-wrapper{transition:left .2s}.ag-header-group-cell{transition:left .2s,width .2s}}:where(.ag-rtl) :where(.ag-column-moving){.ag-cell,.ag-header-cell,.ag-spanned-cell-wrapper{transition:right .2s}.ag-header-group-cell{transition:right .2s,width .2s}}"
), Rh = class extends K {
  constructor() {
    super(...arguments), this.beanName = "colAnimation", this.executeNextFuncs = [], this.executeLaterFuncs = [], this.active = !1, this.activeNext = !1, this.suppressAnimation = !1, this.animationThreadCount = 0;
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, (e) => this.gridBodyCtrl = e.gridBodyCtrl);
  }
  isActive() {
    return this.active && !this.suppressAnimation;
  }
  setSuppressAnimation(e) {
    this.suppressAnimation = e;
  }
  start() {
    if (this.active)
      return;
    const { gos: e } = this;
    e.get("suppressColumnMoveAnimation") || e.get("enableRtl") || (this.ensureAnimationCssClassPresent(), this.active = !0, this.activeNext = !0);
  }
  finish() {
    this.active && this.flush(
      () => this.activeNext = !1,
      () => this.active = !1
    );
  }
  executeNextVMTurn(e) {
    this.activeNext ? this.executeNextFuncs.push(e) : e();
  }
  executeLaterVMTurn(e) {
    this.active ? this.executeLaterFuncs.push(e) : e();
  }
  ensureAnimationCssClassPresent() {
    this.animationThreadCount++;
    const e = this.animationThreadCount, { gridBodyCtrl: t } = this;
    t.setColumnMovingCss(!0), this.executeLaterFuncs.push(() => {
      this.animationThreadCount === e && t.setColumnMovingCss(!1);
    });
  }
  flush(e, t) {
    const { executeNextFuncs: s, executeLaterFuncs: n } = this;
    if (s.length === 0 && n.length === 0) {
      e(), t();
      return;
    }
    const r = (o) => {
      for (; o.length; ) {
        const i = o.pop();
        i && i();
      }
    };
    this.beans.frameworkOverrides.wrapIncoming(() => {
      window.setTimeout(() => {
        e(), r(s);
      }, 0), window.setTimeout(() => {
        t(), r(n);
      }, 200);
    });
  }
};
function xh(e, t, s) {
  var n;
  (n = e.colMoves) == null || n.moveColumnByIndex(t, s, "api");
}
function Fh(e, t, s) {
  var n;
  (n = e.colMoves) == null || n.moveColumns(t, s, "api");
}
var Dh = class extends K {
  constructor(e) {
    super(), this.pinned = e, this.columnsToAggregate = [], this.columnsToGroup = [], this.columnsToPivot = [];
  }
  /** Callback for when drag enters */
  onDragEnter(e) {
    if (this.clearColumnsList(), this.gos.get("functionsReadOnly"))
      return;
    const t = e.dragItem.columns;
    t && t.forEach((s) => {
      s.isPrimary() && (s.isAnyFunctionActive() || (s.isAllowValue() ? this.columnsToAggregate.push(s) : s.isAllowRowGroup() ? this.columnsToGroup.push(s) : s.isAllowPivot() && this.columnsToPivot.push(s)));
    });
  }
  getIconName() {
    return this.columnsToAggregate.length + this.columnsToGroup.length + this.columnsToPivot.length > 0 ? this.pinned ? "pinned" : "move" : null;
  }
  /** Callback for when drag leaves */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDragLeave(e) {
    this.clearColumnsList();
  }
  clearColumnsList() {
    this.columnsToAggregate.length = 0, this.columnsToGroup.length = 0, this.columnsToPivot.length = 0;
  }
  /** Callback for when dragging */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDragging(e) {
  }
  /** Callback for when drag stops */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDragStop(e) {
    const { valueColsSvc: t, rowGroupColsSvc: s, pivotColsSvc: n } = this.beans;
    this.columnsToAggregate.length > 0 && (t == null || t.addColumns(this.columnsToAggregate, "toolPanelDragAndDrop")), this.columnsToGroup.length > 0 && (s == null || s.addColumns(this.columnsToGroup, "toolPanelDragAndDrop")), this.columnsToPivot.length > 0 && (n == null || n.addColumns(this.columnsToPivot, "toolPanelDragAndDrop"));
  }
  onDragCancel() {
    this.clearColumnsList();
  }
};
function Ph(e, t) {
  !t || t.length <= 1 || t.filter((n) => e.indexOf(n) < 0).length > 0 || t.sort((n, r) => {
    const o = e.indexOf(n), i = e.indexOf(r);
    return o - i;
  });
}
function oa(e) {
  const { isFromHeader: t, fromLeft: s, xPosition: n, fromEnter: r, fakeEvent: o, pinned: i, gos: a, colModel: l, colMoves: c, visibleCols: d } = e;
  let { allMovingColumns: u } = e;
  if (t) {
    const F = [];
    u.forEach((S) => {
      var O;
      let P = null, W = S.getParent();
      for (; W != null && W.getDisplayedLeafColumns().length === 1; )
        P = W, W = W.getParent();
      P != null ? (!!((O = P.getColGroupDef()) != null && O.marryChildren) ? (
        // when marry children is true, we also have to move hidden
        // columns within the group, so grab them from the `providedColumnGroup`
        P.getProvidedColumnGroup().getLeafColumns()
      ) : P.getLeafColumns()).forEach((G) => {
        F.includes(G) || F.push(G);
      }) : F.includes(S) || F.push(S);
    }), u = F;
  }
  const h = u.slice();
  Ph(l.getCols(), h);
  const g = Ih({
    movingCols: h,
    draggingRight: s,
    xPosition: n,
    pinned: i,
    gos: a,
    colModel: l,
    visibleCols: d
  }), f = Eh(h, l);
  if (g.length === 0)
    return;
  const C = g[0];
  let p = f !== null && !r;
  if (t && (p = f !== null), p && !o && (!s && C >= f || s && C <= f))
    return;
  const m = d.allCols, v = [];
  let b = null;
  for (let F = 0; F < g.length; F++) {
    const S = g[F], P = c.getProposedColumnOrder(h, S);
    if (!c.doesOrderPassRules(P))
      continue;
    const W = P.filter((L) => m.includes(L));
    if (b === null)
      b = W;
    else if (!nn(W, b))
      break;
    const O = Th(P);
    v.push({ move: S, fragCount: O });
  }
  if (v.length === 0)
    return;
  v.sort((F, S) => F.fragCount - S.fragCount);
  const y = v[0].move;
  if (!(y > l.getCols().length - u.length))
    return { columns: u, toIndex: y };
}
function ia(e) {
  const { columns: t, toIndex: s } = oa(e) || {}, { finished: n, colMoves: r } = e;
  return !t || s == null ? null : (r.moveColumns(t, s, "uiColumnMoved", n), n ? null : { columns: t, toIndex: s });
}
function Eh(e, t) {
  const s = t.getCols(), n = e.map((l) => s.indexOf(l)).sort((l, c) => l - c), r = n[0];
  return Ce(n) - r !== n.length - 1 ? null : r;
}
function Th(e) {
  function t(n) {
    const r = [];
    let o = n.getOriginalParent();
    for (; o != null; )
      r.push(o), o = o.getOriginalParent();
    return r;
  }
  let s = 0;
  for (let n = 0; n < e.length - 1; n++) {
    let r = t(e[n]), o = t(e[n + 1]);
    [r, o] = r.length > o.length ? [r, o] : [o, r], r.forEach((i) => {
      o.indexOf(i) === -1 && s++;
    });
  }
  return s;
}
function Mh(e, t) {
  switch (t) {
    case "left":
      return e.leftCols;
    case "right":
      return e.rightCols;
    default:
      return e.centerCols;
  }
}
function Ih(e) {
  const { movingCols: t, draggingRight: s, xPosition: n, pinned: r, gos: o, colModel: i, visibleCols: a } = e;
  if (o.get("suppressMovableColumns") || t.some((b) => b.getColDef().suppressMovable))
    return [];
  const c = Mh(a, r), d = i.getCols(), u = c.filter((b) => t.includes(b)), h = c.filter((b) => !t.includes(b)), g = d.filter((b) => !t.includes(b));
  let f = 0, C = n;
  if (s) {
    let b = 0;
    u.forEach((y) => b += y.getActualWidth()), C -= b;
  }
  if (C > 0) {
    for (let b = 0; b < h.length; b++) {
      const y = h[b];
      if (C -= y.getActualWidth(), C < 0)
        break;
      f++;
    }
    s && f++;
  }
  let p;
  if (f > 0) {
    const b = h[f - 1];
    p = g.indexOf(b) + 1;
  } else
    p = g.indexOf(h[0]), p === -1 && (p = 0);
  const m = [p], v = (b, y) => b - y;
  if (s) {
    let b = p + 1;
    const y = d.length - 1;
    for (; b <= y; )
      m.push(b), b++;
    m.sort(v);
  } else {
    let b = p;
    const y = d.length - 1;
    let F = d[b];
    for (; b <= y && c.indexOf(F) < 0; )
      b++, m.push(b), F = d[b];
    b = p - 1;
    const S = 0;
    for (; b >= S; )
      m.push(b), b--;
    m.sort(v).reverse();
  }
  return m;
}
function tr(e) {
  var c;
  const { pinned: t, fromKeyboard: s, gos: n, ctrlsSvc: r, useHeaderRow: o, skipScrollPadding: i } = e;
  let a = (c = r.getHeaderRowContainerCtrl(t)) == null ? void 0 : c.eViewport, { x: l } = e;
  return a ? (s && (l -= a.getBoundingClientRect().left), n.get("enableRtl") && (o && (a = a.querySelector(".ag-header-row")), l = a.clientWidth - l), t == null && !i && (l += r.get("center").getCenterViewportScrollLeft()), l) : 0;
}
function kn(e, t) {
  for (const s of e)
    s.moving = t, s.dispatchColEvent("movingChanged", "uiColumnMoved");
}
var uo = 7, sr = 100, Ps = sr / 2, Lh = 5, Ah = 100, kh = class extends K {
  constructor(e) {
    super(), this.pinned = e, this.needToMoveLeft = !1, this.needToMoveRight = !1, this.lastMovedInfo = null, this.isCenterContainer = !te(e);
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, (e) => {
      this.gridBodyCon = e.gridBodyCtrl;
    });
  }
  getIconName() {
    const { pinned: e, lastDraggingEvent: t } = this, { dragItem: s } = t || {}, n = (s == null ? void 0 : s.columns) ?? [];
    for (const r of n) {
      const o = r.getPinned();
      if (r.getColDef().lockPinned) {
        if (o == e)
          return "move";
        continue;
      }
      const i = s == null ? void 0 : s.containerType;
      if (i === e || !e)
        return "move";
      if (e && (!o || i !== e))
        return "pinned";
    }
    return "notAllowed";
  }
  onDragEnter(e) {
    const t = e.dragItem, s = t.columns;
    if (e.dragSource.type === 0)
      this.setColumnsVisible(s, !0, "uiColumnDragged");
    else {
      const r = t.visibleState, o = (s || []).filter((i) => r[i.getId()]);
      this.setColumnsVisible(o, !0, "uiColumnDragged");
    }
    this.gos.get("suppressMoveWhenColumnDragging") || this.attemptToPinColumns(s, this.pinned), this.onDragging(e, !0, !0);
  }
  onDragging(e = this.lastDraggingEvent, t = !1, s = !1, n = !1) {
    const { gos: r, ctrlsSvc: o } = this.beans, i = r.get("suppressMoveWhenColumnDragging");
    if (n && !i) {
      this.finishColumnMoving();
      return;
    }
    if (this.lastDraggingEvent = e, !e || !n && Ie(e.hDirection))
      return;
    const a = tr({
      x: e.x,
      pinned: this.pinned,
      gos: r,
      ctrlsSvc: o
    });
    t || this.checkCenterForScrolling(a), i ? this.handleColumnDragWhileSuppressingMovement(e, t, s, a, n) : this.handleColumnDragWhileAllowingMovement(e, t, s, a, n);
  }
  onDragLeave() {
    this.ensureIntervalCleared(), this.clearHighlighted(), this.updateDragItemContainerType(), this.lastMovedInfo = null;
  }
  onDragStop() {
    this.onDragging(this.lastDraggingEvent, !1, !0, !0), this.ensureIntervalCleared(), this.lastMovedInfo = null;
  }
  onDragCancel() {
    this.clearHighlighted(), this.ensureIntervalCleared(), this.lastMovedInfo = null;
  }
  setColumnsVisible(e, t, s) {
    if (!e)
      return;
    const n = e.filter((r) => !r.getColDef().lockVisible);
    this.beans.colModel.setColsVisible(n, t, s);
  }
  finishColumnMoving() {
    this.clearHighlighted();
    const e = this.lastMovedInfo;
    if (!e)
      return;
    const { columns: t, toIndex: s } = e;
    this.beans.colMoves.moveColumns(t, s, "uiColumnMoved", !0);
  }
  updateDragItemContainerType() {
    const { lastDraggingEvent: e } = this;
    if (this.gos.get("suppressMoveWhenColumnDragging") || !e)
      return;
    const t = e.dragItem;
    t && (t.containerType = this.pinned);
  }
  handleColumnDragWhileSuppressingMovement(e, t, s, n, r) {
    const o = this.getAllMovingColumns(e, !0);
    if (r) {
      const i = this.isAttemptingToPin(o);
      i && this.attemptToPinColumns(o, void 0, !0);
      const { fromLeft: a, xPosition: l } = this.getNormalisedXPositionInfo(o, i) || {};
      if (a == null || l == null) {
        this.finishColumnMoving();
        return;
      }
      this.moveColumnsAfterHighlight({
        allMovingColumns: o,
        xPosition: l,
        fromEnter: t,
        fakeEvent: s,
        fromLeft: a
      });
    } else {
      if (!this.beans.dragAndDrop.isDropZoneWithinThisGrid(e))
        return;
      this.highlightHoveredColumn(o, n);
    }
  }
  handleColumnDragWhileAllowingMovement(e, t, s, n, r) {
    const o = this.getAllMovingColumns(e), i = this.normaliseDirection(e.hDirection) === "right", a = e.dragSource.type === 1, l = this.getMoveColumnParams({
      allMovingColumns: o,
      isFromHeader: a,
      xPosition: n,
      fromLeft: i,
      fromEnter: t,
      fakeEvent: s
    }), c = ia({ ...l, finished: r });
    c && (this.lastMovedInfo = c);
  }
  getAllMovingColumns(e, t = !1) {
    const s = e.dragSource.getDragItem();
    let n = null;
    t ? (n = s.columnsInSplit, n || (n = s.columns)) : n = s.columns;
    const r = (o) => o.getColDef().lockPinned ? o.getPinned() == this.pinned : !0;
    return n ? n.filter(r) : [];
  }
  getMoveColumnParams(e) {
    const { allMovingColumns: t, isFromHeader: s, xPosition: n, fromLeft: r, fromEnter: o, fakeEvent: i } = e, { gos: a, colModel: l, colMoves: c, visibleCols: d } = this.beans;
    return {
      allMovingColumns: t,
      isFromHeader: s,
      fromLeft: r,
      xPosition: n,
      pinned: this.pinned,
      fromEnter: o,
      fakeEvent: i,
      gos: a,
      colModel: l,
      colMoves: c,
      visibleCols: d
    };
  }
  highlightHoveredColumn(e, t) {
    var d;
    const { gos: s, colModel: n } = this.beans, r = s.get("enableRtl"), o = n.getCols().filter((u) => u.isVisible() && u.getPinned() === this.pinned);
    let i = null, a = null, l = null;
    for (const u of o) {
      if (a = u.getActualWidth(), i = this.getNormalisedColumnLeft(u, 0, r), i != null) {
        const h = i + a;
        if (i <= t && h >= t) {
          l = u;
          break;
        }
      }
      i = null, a = null;
    }
    if (l)
      e.indexOf(l) !== -1 && (l = null);
    else {
      for (let u = o.length - 1; u >= 0; u--) {
        const h = o[u], g = o[u].getParent();
        if (!g) {
          l = h;
          break;
        }
        const f = g == null ? void 0 : g.getDisplayedLeafColumns();
        if (f.length) {
          l = Ce(f);
          break;
        }
      }
      if (!l)
        return;
      i = this.getNormalisedColumnLeft(l, 0, r), a = l.getActualWidth();
    }
    if (((d = this.lastHighlightedColumn) == null ? void 0 : d.column) !== l && this.clearHighlighted(), l == null || i == null || a == null)
      return;
    let c;
    t - i < a / 2 !== r ? c = 0 : c = 1, ho(l, c), this.lastHighlightedColumn = { column: l, position: c };
  }
  getNormalisedXPositionInfo(e, t) {
    const { gos: s, visibleCols: n } = this.beans, r = s.get("enableRtl"), { firstMovingCol: o, column: i, position: a } = this.getColumnMoveAndTargetInfo(
      e,
      t,
      r
    );
    if (!o || !i || a == null)
      return;
    const l = n.allCols, c = l.indexOf(o), d = l.indexOf(i), u = a === 0 !== r, h = c < d || c === d && !u;
    let g = 0;
    if (u ? h && (g -= 1) : h || (g += 1), d + g === c)
      return;
    const f = l[d + g];
    if (!f)
      return;
    const C = this.getNormalisedColumnLeft(f, 20, r);
    return { fromLeft: h, xPosition: C };
  }
  getColumnMoveAndTargetInfo(e, t, s) {
    const n = this.lastHighlightedColumn || {}, { firstMovingCol: r, lastMovingCol: o } = Hh(e);
    if (!r || !o || n.column || !t)
      return {
        firstMovingCol: r,
        ...n
      };
    const a = this.getPinDirection() === "left";
    return {
      firstMovingCol: r,
      position: a ? 1 : 0,
      column: a !== s ? r : o
    };
  }
  normaliseDirection(e) {
    if (this.gos.get("enableRtl"))
      switch (e) {
        case "left":
          return "right";
        case "right":
          return "left";
      }
    return e;
  }
  getNormalisedColumnLeft(e, t, s) {
    const { gos: n, ctrlsSvc: r } = this.beans, o = e.getLeft();
    if (o == null)
      return null;
    const i = e.getActualWidth();
    return tr({
      x: s ? o + i - t : o + t,
      pinned: e.getPinned(),
      useHeaderRow: s,
      skipScrollPadding: !0,
      gos: n,
      ctrlsSvc: r
    });
  }
  isAttemptingToPin(e) {
    const t = this.needToMoveLeft || this.needToMoveRight, s = this.failedMoveAttempts > uo;
    return t && s || e.some((n) => n.getPinned() !== this.pinned);
  }
  moveColumnsAfterHighlight(e) {
    const { allMovingColumns: t, xPosition: s, fromEnter: n, fakeEvent: r, fromLeft: o } = e, i = this.getMoveColumnParams({
      allMovingColumns: t,
      isFromHeader: !0,
      xPosition: s,
      fromLeft: o,
      fromEnter: n,
      fakeEvent: r
    }), { columns: a, toIndex: l } = oa(i) || {};
    a && l != null && (this.lastMovedInfo = {
      columns: a,
      toIndex: l
    }), this.finishColumnMoving();
  }
  clearHighlighted() {
    const { lastHighlightedColumn: e } = this;
    e && (ho(e.column, null), this.lastHighlightedColumn = null);
  }
  checkCenterForScrolling(e) {
    if (!this.isCenterContainer)
      return;
    const t = this.beans.ctrlsSvc.get("center"), s = t.getCenterViewportScrollLeft(), n = s + t.getCenterWidth();
    let r, o;
    this.gos.get("enableRtl") ? (r = e < s + Ps, o = e > n - Ps) : (o = e < s + Ps, r = e > n - Ps), this.needToMoveRight = r, this.needToMoveLeft = o, o || r ? this.ensureIntervalStarted() : this.ensureIntervalCleared();
  }
  ensureIntervalStarted() {
    var e;
    this.movingIntervalId || (this.intervalCount = 0, this.failedMoveAttempts = 0, this.movingIntervalId = window.setInterval(this.moveInterval.bind(this), Ah), (e = this.beans.dragAndDrop.getDragAndDropImageComponent()) == null || e.setIcon(this.needToMoveLeft ? "left" : "right", !0));
  }
  ensureIntervalCleared() {
    var e;
    this.movingIntervalId && (window.clearInterval(this.movingIntervalId), this.movingIntervalId = null, this.failedMoveAttempts = 0, (e = this.beans.dragAndDrop.getDragAndDropImageComponent()) == null || e.setIcon(this.getIconName(), !1));
  }
  moveInterval() {
    var n, r;
    let e;
    this.intervalCount++, e = 10 + this.intervalCount * Lh, e > sr && (e = sr);
    let t = null;
    const s = this.gridBodyCon.scrollFeature;
    if (this.needToMoveLeft ? t = s.scrollHorizontally(-e) : this.needToMoveRight && (t = s.scrollHorizontally(e)), t !== 0)
      this.onDragging(this.lastDraggingEvent), this.failedMoveAttempts = 0;
    else {
      this.failedMoveAttempts++;
      const { pinnedCols: o, dragAndDrop: i, gos: a } = this.beans;
      if (this.failedMoveAttempts <= uo + 1 || !o)
        return;
      if ((n = i.getDragAndDropImageComponent()) == null || n.setIcon("pinned", !1), !a.get("suppressMoveWhenColumnDragging")) {
        const l = (r = this.lastDraggingEvent) == null ? void 0 : r.dragItem.columns;
        this.attemptToPinColumns(l, void 0, !0);
      }
    }
  }
  getPinDirection() {
    if (this.needToMoveLeft || this.pinned === "left")
      return "left";
    if (this.needToMoveRight || this.pinned === "right")
      return "right";
  }
  attemptToPinColumns(e, t, s = !1) {
    const n = (e || []).filter((i) => !i.getColDef().lockPinned);
    if (!n.length)
      return 0;
    s && (t = this.getPinDirection());
    const { pinnedCols: r, dragAndDrop: o } = this.beans;
    return r == null || r.setColsPinned(n, t, "uiColumnDragged"), s && o.nudge(), n.length;
  }
  destroy() {
    super.destroy(), this.lastDraggingEvent = null, this.clearHighlighted(), this.lastMovedInfo = null;
  }
};
function ho(e, t) {
  e.highlighted !== t && (e.highlighted = t, e.dispatchColEvent("headerHighlightChanged", "uiColumnMoved"));
}
function Hh(e) {
  const t = e.length;
  let s, n;
  for (let r = 0; r < t; r++) {
    if (!s) {
      const o = e[r];
      o.getLeft() != null && (s = o);
    }
    if (!n) {
      const o = e[t - 1 - r];
      o.getLeft() != null && (n = o);
    }
    if (s && n)
      break;
  }
  return { firstMovingCol: s, lastMovingCol: n };
}
var Oh = class extends K {
  constructor(e, t) {
    super(), this.pinned = e, this.eContainer = t;
  }
  postConstruct() {
    const { ctrlsSvc: e, dragAndDrop: t } = this.beans, s = this.pinned;
    e.whenReady(this, (n) => {
      let r;
      const o = n.gridBodyCtrl.eBodyViewport;
      switch (s) {
        case "left":
          r = [
            [o, n.left.eContainer],
            [n.bottomLeft.eContainer],
            [n.topLeft.eContainer]
          ];
          break;
        case "right":
          r = [
            [o, n.right.eContainer],
            [n.bottomRight.eContainer],
            [n.topRight.eContainer]
          ];
          break;
        default:
          r = [
            [o, n.center.eViewport],
            [n.bottomCenter.eViewport],
            [n.topCenter.eViewport]
          ];
          break;
      }
      this.eSecondaryContainers = r;
    }), this.moveColumnFeature = this.createManagedBean(new kh(s)), this.bodyDropPivotTarget = this.createManagedBean(new Dh(s)), t.addDropTarget(this), this.addDestroyFunc(() => t.removeDropTarget(this));
  }
  isInterestedIn(e) {
    return e === 1 || e === 0 && this.gos.get("allowDragFromColumnsToolPanel");
  }
  getSecondaryContainers() {
    return this.eSecondaryContainers;
  }
  getContainer() {
    return this.eContainer;
  }
  getIconName() {
    return this.currentDropListener.getIconName();
  }
  // we want to use the bodyPivotTarget if the user is dragging columns in from the toolPanel
  // and we are in pivot mode, as it has to logic to set pivot/value/group on the columns when
  // dropped into the grid's body.
  isDropColumnInPivotMode(e) {
    return this.beans.colModel.isPivotMode() && e.dragSource.type === 0;
  }
  onDragEnter(e) {
    this.currentDropListener = this.isDropColumnInPivotMode(e) ? this.bodyDropPivotTarget : this.moveColumnFeature, this.currentDropListener.onDragEnter(e);
  }
  onDragLeave(e) {
    this.currentDropListener.onDragLeave(e);
  }
  onDragging(e) {
    this.currentDropListener.onDragging(e);
  }
  onDragStop(e) {
    this.currentDropListener.onDragStop(e);
  }
  onDragCancel() {
    this.currentDropListener.onDragCancel();
  }
}, Gh = class extends K {
  constructor() {
    super(...arguments), this.beanName = "colMoves";
  }
  moveColumnByIndex(e, t, s) {
    const n = this.beans.colModel.getCols();
    if (!n)
      return;
    const r = n[e];
    this.moveColumns([r], t, s);
  }
  moveColumns(e, t, s, n = !0) {
    const { colModel: r, colAnimation: o, visibleCols: i, eventSvc: a } = this.beans, l = r.getCols();
    if (!l)
      return;
    if (t > l.length - e.length) {
      oe(30, { toIndex: t });
      return;
    }
    o == null || o.start();
    const c = r.getColsForKeys(e);
    this.doesMovePassRules(c, t) && (Kr(r.getCols(), c, t), i.refresh(s), a.dispatchEvent({
      type: "columnMoved",
      columns: c,
      column: c.length === 1 ? c[0] : null,
      toIndex: t,
      finished: n,
      source: s
    })), o == null || o.finish();
  }
  doesMovePassRules(e, t) {
    const s = this.getProposedColumnOrder(e, t);
    return this.doesOrderPassRules(s);
  }
  doesOrderPassRules(e) {
    const { colModel: t, gos: s } = this.beans;
    return !(!Fi(e, t.getColTree()) || !((r) => {
      const o = (c) => c ? c === "left" || c === !0 ? -1 : 1 : 0, i = s.get("enableRtl");
      let a = i ? 1 : -1, l = !0;
      return r.forEach((c) => {
        const d = o(c.getColDef().lockPosition);
        i ? d > a && (l = !1) : d < a && (l = !1), a = d;
      }), l;
    })(e));
  }
  getProposedColumnOrder(e, t) {
    const n = this.beans.colModel.getCols().slice();
    return Kr(n, e, t), n;
  }
  createBodyDropTarget(e, t) {
    return new Oh(e, t);
  }
  moveHeader(e, t, s, n, r) {
    const { ctrlsSvc: o, gos: i, colModel: a, visibleCols: l, focusSvc: c } = this.beans, d = t.getBoundingClientRect(), u = d.left, h = xe(s), g = h ? d.width : s.getActualWidth(), f = e === "left" !== i.get("enableRtl"), C = tr({
      x: f ? u - 20 : u + g + 20,
      pinned: n,
      fromKeyboard: !0,
      gos: i,
      ctrlsSvc: o
    }), p = c.focusedHeader;
    ia({
      allMovingColumns: h ? s.getLeafColumns() : [s],
      isFromHeader: !0,
      fromLeft: e === "right",
      xPosition: C,
      pinned: n,
      fromEnter: !1,
      fakeEvent: !1,
      gos: i,
      colModel: a,
      colMoves: this,
      visibleCols: l,
      finished: !0
    });
    let m;
    if (h) {
      const v = s.getDisplayedLeafColumns();
      m = f ? v[0] : Ce(v);
    } else
      m = s;
    if (o.getScrollFeature().ensureColumnVisible(m, "auto"), (!r.isAlive() || i.get("ensureDomOrder")) && p) {
      let v;
      if (h) {
        const b = s.getGroupId(), y = s.getLeafColumns();
        if (!y.length)
          return;
        const F = y[0].getParent();
        if (!F)
          return;
        v = Bh(F, b);
      } else
        v = s;
      v && c.focusHeaderPosition({
        headerPosition: {
          ...p,
          column: v
        }
      });
    }
  }
  setDragSourceForHeader(e, t, s) {
    const { gos: n, colModel: r, dragAndDrop: o, visibleCols: i } = this.beans;
    let a = !n.get("suppressDragLeaveHidesColumns");
    const l = xe(t), c = l ? t.getProvidedColumnGroup().getLeafColumns() : [t], u = {
      type: 1,
      eElement: e,
      getDefaultIconName: () => a ? "hide" : "notAllowed",
      getDragItem: l ? () => Nh(t, i.allCols) : () => Wh(t),
      dragItemName: s,
      onDragStarted: () => {
        a = !n.get("suppressDragLeaveHidesColumns"), kn(c, !0);
      },
      onDragStopped: () => kn(c, !1),
      onDragCancelled: () => kn(c, !1),
      onGridEnter: (h) => {
        if (a) {
          const { columns: g = [], visibleState: f } = h ?? {}, C = l ? (m) => !f || f[m.getColId()] : () => !0, p = g.filter(
            (m) => !m.getColDef().lockVisible && C(m)
          );
          r.setColsVisible(p, !0, "uiColumnMoved");
        }
      },
      onGridExit: (h) => {
        var g;
        if (a) {
          const f = ((g = h == null ? void 0 : h.columns) == null ? void 0 : g.filter((C) => !C.getColDef().lockVisible)) || [];
          r.setColsVisible(f, !1, "uiColumnMoved");
        }
      }
    };
    return o.addDragSource(u, !0), u;
  }
};
function Bh(e, t) {
  for (; e; ) {
    if (e.getGroupId() === t)
      return e;
    e = e.getParent();
  }
}
function Wh(e) {
  const t = {};
  return t[e.getId()] = e.isVisible(), {
    columns: [e],
    visibleState: t,
    containerType: e.pinned
  };
}
function Nh(e, t) {
  var a;
  const s = e.getProvidedColumnGroup().getLeafColumns(), n = {};
  s.forEach((l) => n[l.getId()] = l.isVisible());
  const r = [];
  t.forEach((l) => {
    s.indexOf(l) >= 0 && (r.push(l), vt(s, l));
  }), s.forEach((l) => r.push(l));
  const o = [], i = e.getLeafColumns();
  for (const l of r)
    i.indexOf(l) !== -1 && o.push(l);
  return {
    columns: r,
    columnsInSplit: o,
    visibleState: n,
    containerType: (a = o[0]) == null ? void 0 : a.pinned
  };
}
var Vh = {
  moduleName: "ColumnMove",
  version: be,
  beans: [Gh, Rh],
  apiFunctions: {
    moveColumnByIndex: xh,
    moveColumns: Fh
  },
  dependsOn: [bh],
  css: [Sh]
}, _h = class extends K {
  constructor() {
    super(...arguments), this.beanName = "autoWidthCalc";
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, (e) => {
      this.centerRowContainerCtrl = e.center;
    });
  }
  // this is the trick: we create a dummy container and clone all the cells
  // into the dummy, then check the dummy's width. then destroy the dummy
  // as we don't need it any more.
  // drawback: only the cells visible on the screen are considered
  getPreferredWidthForColumn(e, t) {
    const s = this.getHeaderCellForColumn(e);
    if (!s)
      return -1;
    const n = this.beans.rowRenderer.getAllCellsNotSpanningForColumn(e);
    return t || n.push(s), this.getPreferredWidthForElements(n);
  }
  getPreferredWidthForColumnGroup(e) {
    const t = this.getHeaderCellForColumn(e);
    return t ? this.getPreferredWidthForElements([t]) : -1;
  }
  getPreferredWidthForElements(e, t) {
    const s = document.createElement("form");
    s.style.position = "fixed";
    const n = this.centerRowContainerCtrl.eContainer;
    e.forEach((o) => this.cloneItemIntoDummy(o, s)), n.appendChild(s);
    const r = s.offsetWidth;
    return n.removeChild(s), t = t ?? this.gos.get("autoSizePadding"), r + t;
  }
  getHeaderCellForColumn(e) {
    let t = null;
    return this.beans.ctrlsSvc.getHeaderRowContainerCtrls().forEach((s) => {
      const n = s.getHtmlElementForColumnHeader(e);
      n != null && (t = n);
    }), t;
  }
  cloneItemIntoDummy(e, t) {
    const s = e.cloneNode(!0);
    s.style.width = "", s.style.position = "static", s.style.left = "";
    const n = document.createElement("div"), r = n.classList;
    ["ag-header-cell", "ag-header-group-cell"].some((a) => s.classList.contains(a)) ? (r.add("ag-header", "ag-header-row"), n.style.position = "static") : r.add("ag-row");
    let i = e.parentElement;
    for (; i; ) {
      if (["ag-header-row", "ag-row"].some((l) => i.classList.contains(l))) {
        for (let l = 0; l < i.classList.length; l++) {
          const c = i.classList[l];
          c != "ag-row-position-absolute" && r.add(c);
        }
        break;
      }
      i = i.parentElement;
    }
    n.appendChild(s), t.appendChild(n);
  }
}, zh = {
  moduleName: "AutoWidth",
  version: be,
  beans: [_h]
};
function $h(e, t, s = !0, n = "api") {
  var r;
  (r = e.colResize) == null || r.setColumnWidths(t, !1, s, n);
}
var jh = class extends K {
  constructor(e, t, s, n) {
    super(), this.comp = e, this.eResize = t, this.pinned = s, this.columnGroup = n;
  }
  postConstruct() {
    if (!this.columnGroup.isResizable()) {
      this.comp.setResizableDisplayed(!1);
      return;
    }
    const { horizontalResizeSvc: e, gos: t, colAutosize: s } = this.beans, n = e.addResizeBar({
      eResizeBar: this.eResize,
      onResizeStart: this.onResizeStart.bind(this),
      onResizing: this.onResizing.bind(this, !1),
      onResizeEnd: this.onResizing.bind(this, !0)
    });
    this.addDestroyFunc(n), !t.get("suppressAutoSize") && s && this.addDestroyFunc(
      s.addColumnGroupResize(
        this.eResize,
        this.columnGroup,
        () => this.resizeLeafColumnsToFit("uiColumnResized")
      )
    );
  }
  onResizeStart(e) {
    const {
      columnsToResize: t,
      resizeStartWidth: s,
      resizeRatios: n,
      groupAfterColumns: r,
      groupAfterStartWidth: o,
      groupAfterRatios: i
    } = this.getInitialValues(e);
    this.resizeCols = t, this.resizeStartWidth = s, this.resizeRatios = n, this.resizeTakeFromCols = r, this.resizeTakeFromStartWidth = o, this.resizeTakeFromRatios = i, this.toggleColumnResizing(!0);
  }
  onResizing(e, t, s = "uiColumnResized") {
    const n = this.normaliseDragChange(t), r = this.resizeStartWidth + n;
    this.resizeColumnsFromLocalValues(r, s, e);
  }
  getInitialValues(e) {
    var l;
    const t = (c) => c.reduce((d, u) => d + u.getActualWidth(), 0), s = (c, d) => c.map((u) => u.getActualWidth() / d), n = this.getColumnsToResize(), r = t(n), o = s(n, r), i = {
      columnsToResize: n,
      resizeStartWidth: r,
      resizeRatios: o
    };
    let a = null;
    if (e && (a = ((l = this.beans.colGroupSvc) == null ? void 0 : l.getGroupAtDirection(this.columnGroup, "After")) ?? null), a) {
      const c = a.getDisplayedLeafColumns(), d = i.groupAfterColumns = c.filter(
        (h) => h.isResizable()
      ), u = i.groupAfterStartWidth = t(d);
      i.groupAfterRatios = s(d, u);
    } else
      i.groupAfterColumns = void 0, i.groupAfterStartWidth = void 0, i.groupAfterRatios = void 0;
    return i;
  }
  resizeLeafColumnsToFit(e) {
    const t = this.beans.autoWidthCalc.getPreferredWidthForColumnGroup(this.columnGroup), s = this.getInitialValues();
    t > s.resizeStartWidth && this.resizeColumns(s, t, e, !0);
  }
  resizeColumnsFromLocalValues(e, t, s = !0) {
    if (!this.resizeCols || !this.resizeRatios)
      return;
    const n = {
      columnsToResize: this.resizeCols,
      resizeStartWidth: this.resizeStartWidth,
      resizeRatios: this.resizeRatios,
      groupAfterColumns: this.resizeTakeFromCols,
      groupAfterStartWidth: this.resizeTakeFromStartWidth,
      groupAfterRatios: this.resizeTakeFromRatios
    };
    this.resizeColumns(n, e, t, s);
  }
  resizeColumns(e, t, s, n = !0) {
    var u;
    const {
      columnsToResize: r,
      resizeStartWidth: o,
      resizeRatios: i,
      groupAfterColumns: a,
      groupAfterStartWidth: l,
      groupAfterRatios: c
    } = e, d = [];
    if (d.push({
      columns: r,
      ratios: i,
      width: t
    }), a) {
      const h = t - o;
      d.push({
        columns: a,
        ratios: c,
        width: l - h
      });
    }
    (u = this.beans.colResize) == null || u.resizeColumnSets({
      resizeSets: d,
      finished: n,
      source: s
    }), n && this.toggleColumnResizing(!1);
  }
  toggleColumnResizing(e) {
    this.comp.toggleCss("ag-column-resizing", e);
  }
  getColumnsToResize() {
    return this.columnGroup.getDisplayedLeafColumns().filter((t) => t.isResizable());
  }
  // optionally inverts the drag, depending on pinned and RTL
  // note - this method is duplicated in RenderedHeaderCell - should refactor out?
  normaliseDragChange(e) {
    let t = e;
    return this.gos.get("enableRtl") ? this.pinned !== "left" && (t *= -1) : this.pinned === "right" && (t *= -1), t;
  }
  destroy() {
    super.destroy(), this.resizeCols = void 0, this.resizeRatios = void 0, this.resizeTakeFromCols = void 0, this.resizeTakeFromRatios = void 0;
  }
}, Uh = class extends K {
  constructor(e, t, s, n, r) {
    super(), this.pinned = e, this.column = t, this.eResize = s, this.comp = n, this.ctrl = r;
  }
  postConstruct() {
    const e = [];
    let t, s;
    const n = () => {
      if (Me(this.eResize, t), !t)
        return;
      const { horizontalResizeSvc: i, colAutosize: a } = this.beans, l = i.addResizeBar({
        eResizeBar: this.eResize,
        onResizeStart: this.onResizeStart.bind(this),
        onResizing: this.onResizing.bind(this, !1),
        onResizeEnd: this.onResizing.bind(this, !0)
      });
      e.push(l), s && a && e.push(a.addColumnAutosize(this.eResize, this.column));
    }, r = () => {
      e.forEach((i) => i()), e.length = 0;
    }, o = () => {
      const i = this.column.isResizable(), a = !this.gos.get("suppressAutoSize") && !this.column.getColDef().suppressAutoSize;
      (i !== t || a !== s) && (t = i, s = a, r(), n());
    };
    o(), this.addDestroyFunc(r), this.ctrl.setRefreshFunction("resize", o);
  }
  onResizing(e, t) {
    const { column: s, lastResizeAmount: n, resizeStartWidth: r, beans: o } = this, i = this.normaliseResizeAmount(t), a = r + i, l = [{ key: s, newWidth: a }], { pinnedCols: c, ctrlsSvc: d, colResize: u } = o;
    if (this.column.getPinned()) {
      const h = (c == null ? void 0 : c.leftWidth) ?? 0, g = (c == null ? void 0 : c.rightWidth) ?? 0, f = Gs(d.getGridBodyCtrl().eBodyViewport) - 50;
      if (h + g + (i - n) > f)
        return;
    }
    this.lastResizeAmount = i, u == null || u.setColumnWidths(l, this.resizeWithShiftKey, e, "uiColumnResized"), e && this.toggleColumnResizing(!1);
  }
  onResizeStart(e) {
    this.resizeStartWidth = this.column.getActualWidth(), this.lastResizeAmount = 0, this.resizeWithShiftKey = e, this.toggleColumnResizing(!0);
  }
  toggleColumnResizing(e) {
    this.comp.toggleCss("ag-column-resizing", e);
  }
  // optionally inverts the drag, depending on pinned and RTL
  // note - this method is duplicated in RenderedHeaderGroupCell - should refactor out?
  normaliseResizeAmount(e) {
    let t = e;
    const s = this.pinned !== "left", n = this.pinned === "right";
    return this.gos.get("enableRtl") ? s && (t *= -1) : n && (t *= -1), t;
  }
}, Kh = class extends K {
  constructor() {
    super(...arguments), this.beanName = "colResize";
  }
  setColumnWidths(e, t, s, n) {
    const r = [], { colModel: o, gos: i, visibleCols: a } = this.beans;
    e.forEach((l) => {
      const c = o.getColDefCol(l.key) || o.getCol(l.key);
      if (!c)
        return;
      if (r.push({
        width: l.newWidth,
        ratios: [1],
        columns: [c]
      }), i.get("colResizeDefault") === "shift" && (t = !t), t) {
        const u = a.getColAfter(c);
        if (!u)
          return;
        const h = c.getActualWidth() - l.newWidth, g = u.getActualWidth() + h;
        r.push({
          width: g,
          ratios: [1],
          columns: [u]
        });
      }
    }), r.length !== 0 && this.resizeColumnSets({
      resizeSets: r,
      finished: s,
      source: n
    });
  }
  // method takes sets of columns and resizes them. either all sets will be resized, or nothing
  // be resized. this is used for example when user tries to resize a group and holds shift key,
  // then both the current group (grows), and the adjacent group (shrinks), will get resized,
  // so that's two sets for this method.
  resizeColumnSets(e) {
    const { resizeSets: t, finished: s, source: n } = e;
    if (!(!t || t.every((d) => Yh(d)))) {
      if (s) {
        const d = t && t.length > 0 ? t[0].columns : null;
        $s(this.eventSvc, d, s, n);
      }
      return;
    }
    const o = [], i = [];
    t.forEach((d) => {
      const { width: u, columns: h, ratios: g } = d, f = {}, C = {};
      h.forEach((v) => i.push(v));
      let p = !0, m = 0;
      for (; p; ) {
        if (m++, m > 1e3) {
          je(31);
          break;
        }
        p = !1;
        const v = [];
        let b = 0, y = u;
        h.forEach((S, P) => {
          if (C[S.getId()])
            y -= f[S.getId()];
          else {
            v.push(S);
            const O = g[P];
            b += O;
          }
        });
        const F = 1 / b;
        v.forEach((S, P) => {
          const W = P === v.length - 1;
          let O;
          W ? O = y : (O = Math.round(g[P] * u * F), y -= O);
          const L = S.getMinWidth(), D = S.getMaxWidth();
          O < L ? (O = L, C[S.getId()] = !0, p = !0) : D > 0 && O > D && (O = D, C[S.getId()] = !0, p = !0), f[S.getId()] = O;
        });
      }
      h.forEach((v) => {
        const b = f[v.getId()];
        v.getActualWidth() !== b && (v.setActualWidth(b, n), o.push(v));
      });
    });
    const a = o.length > 0;
    let l = [];
    if (a) {
      const { colFlex: d, visibleCols: u, colViewport: h } = this.beans;
      l = (d == null ? void 0 : d.refreshFlexedColumns({
        resizingCols: i,
        skipSetLeft: !0
      })) ?? [], u.setLeftValues(n), u.updateBodyWidths(), h.checkViewportColumns();
    }
    const c = i.concat(l);
    (a || s) && $s(this.eventSvc, c, s, n, l);
  }
  resizeHeader(e, t, s) {
    if (!e.isResizable())
      return;
    const n = e.getActualWidth(), r = e.getMinWidth(), o = e.getMaxWidth(), i = Math.min(Math.max(n + t, r), o);
    this.setColumnWidths([{ key: e, newWidth: i }], s, !0, "uiColumnResized");
  }
  createResizeFeature(e, t, s, n, r) {
    return new Uh(e, t, s, n, r);
  }
  createGroupResizeFeature(e, t, s, n) {
    return new jh(e, t, s, n);
  }
};
function Yh(e) {
  const { columns: t, width: s } = e;
  let n = 0, r = 0, o = !0;
  t.forEach((l) => {
    const c = l.getMinWidth();
    n += c || 0;
    const d = l.getMaxWidth();
    d > 0 ? r += d : o = !1;
  });
  const i = s >= n, a = !o || s <= r;
  return i && a;
}
var Zh = {
  moduleName: "ColumnResize",
  version: be,
  beans: [Kh],
  apiFunctions: {
    setColumnWidths: $h
  },
  dependsOn: [yh, zh]
}, qh = class extends K {
  constructor(e, t) {
    super(), this.removeChildListenersFuncs = [], this.columnGroup = t, this.comp = e;
  }
  postConstruct() {
    this.addListenersToChildrenColumns(), this.addManagedListeners(this.columnGroup, {
      displayedChildrenChanged: this.onDisplayedChildrenChanged.bind(this)
    }), this.onWidthChanged(), this.addDestroyFunc(this.removeListenersOnChildrenColumns.bind(this));
  }
  addListenersToChildrenColumns() {
    this.removeListenersOnChildrenColumns();
    const e = this.onWidthChanged.bind(this);
    this.columnGroup.getLeafColumns().forEach((t) => {
      t.__addEventListener("widthChanged", e), t.__addEventListener("visibleChanged", e), this.removeChildListenersFuncs.push(() => {
        t.__removeEventListener("widthChanged", e), t.__removeEventListener("visibleChanged", e);
      });
    });
  }
  removeListenersOnChildrenColumns() {
    this.removeChildListenersFuncs.forEach((e) => e()), this.removeChildListenersFuncs = [];
  }
  onDisplayedChildrenChanged() {
    this.addListenersToChildrenColumns(), this.onWidthChanged();
  }
  onWidthChanged() {
    const e = this.columnGroup.getActualWidth();
    this.comp.setWidth(`${e}px`), this.comp.toggleCss("ag-hidden", e === 0);
  }
}, Xh = class extends Ji {
  constructor() {
    super(...arguments), this.onSuppressColMoveChange = () => {
      !this.isAlive() || this.isSuppressMoving() ? this.removeDragSource() : this.dragSource || this.setDragSource(this.eGui);
    };
  }
  setComp(e, t, s, n, r) {
    const { column: o, beans: i } = this, { context: a, colNames: l, colHover: c, rangeSvc: d, colResize: u } = i;
    this.comp = e, r = on(this, a, r), this.setGui(t, r), this.displayName = l.getDisplayNameForColumnGroup(o, "header"), this.refreshHeaderStyles(), this.addClasses(), this.setupMovingCss(r), this.setupExpandable(r), this.setupTooltip(), this.setupAutoHeight({
      wrapperElement: n,
      compBean: r
    }), this.setupUserComp(), this.addHeaderMouseListeners(r), this.addManagedPropertyListener("groupHeaderHeight", this.refreshMaxHeaderHeight.bind(this)), this.refreshMaxHeaderHeight();
    const h = this.rowCtrl.pinned, g = o.getProvidedColumnGroup().getLeafColumns();
    c == null || c.createHoverFeature(r, g, t), d == null || d.createRangeHighlightFeature(r, o, e), r.createManagedBean(new Xi(o, t, i)), r.createManagedBean(new qh(e, o)), u ? this.resizeFeature = r.createManagedBean(
      u.createGroupResizeFeature(e, s, h, o)
    ) : e.setResizableDisplayed(!1), r.createManagedBean(
      new ln(t, {
        shouldStopEventPropagation: this.shouldStopEventPropagation.bind(this),
        onTabKeyDown: () => {
        },
        handleKeyDown: this.handleKeyDown.bind(this),
        onFocusIn: this.onFocusIn.bind(this)
      })
    ), this.addHighlightListeners(r, g), r.addManagedPropertyListener("suppressMovableColumns", this.onSuppressColMoveChange), this.addResizeAndMoveKeyboardListeners(r), r.addDestroyFunc(() => this.clearComponent());
  }
  getHeaderClassParams() {
    const { column: e, beans: t } = this, s = e.getDefinition();
    return ge(t.gos, {
      colDef: s,
      columnGroup: e,
      floatingFilter: !1
    });
  }
  refreshMaxHeaderHeight() {
    const { gos: e, comp: t } = this, s = e.get("groupHeaderHeight");
    s != null ? s === 0 ? t.setHeaderWrapperHidden(!0) : t.setHeaderWrapperMaxHeight(s) : (t.setHeaderWrapperHidden(!1), t.setHeaderWrapperMaxHeight(null));
  }
  addHighlightListeners(e, t) {
    if (this.beans.gos.get("suppressMoveWhenColumnDragging"))
      for (const s of t)
        e.addManagedListeners(s, {
          headerHighlightChanged: this.onLeafColumnHighlightChanged.bind(this, s)
        });
  }
  onLeafColumnHighlightChanged(e) {
    const t = this.column.getDisplayedLeafColumns(), s = t[0] === e, n = Ce(t) === e;
    if (!s && !n)
      return;
    const r = e.getHighlighted(), o = !!this.rowCtrl.getHeaderCellCtrls().find((l) => l.column.isMoving());
    let i = !1, a = !1;
    if (o) {
      const l = this.beans.gos.get("enableRtl"), c = r === 1, d = r === 0;
      s && (l ? a = c : i = d), n && (l ? i = d : a = c);
    }
    this.comp.toggleCss("ag-header-highlight-before", i), this.comp.toggleCss("ag-header-highlight-after", a);
  }
  resizeHeader(e, t) {
    const { resizeFeature: s } = this;
    if (!s)
      return;
    const n = s.getInitialValues(t);
    s.resizeColumns(n, n.resizeStartWidth + e, "uiColumnResized", !0);
  }
  resizeLeafColumnsToFit(e) {
    var t;
    (t = this.resizeFeature) == null || t.resizeLeafColumnsToFit(e);
  }
  setupUserComp() {
    const { colGroupSvc: e, userCompFactory: t, gos: s, enterpriseMenuFactory: n } = this.beans, r = this.column, o = r.getProvidedColumnGroup(), i = ge(s, {
      displayName: this.displayName,
      columnGroup: r,
      setExpanded: (l) => {
        e.setColumnGroupOpened(o, l, "gridInitializing");
      },
      setTooltip: (l, c) => {
        s.assertModuleRegistered("Tooltip", 3), this.setupTooltip(l, c);
      },
      showColumnMenu: (l, c) => n == null ? void 0 : n.showMenuAfterButtonClick(
        o,
        l,
        "columnMenu",
        c
      ),
      showColumnMenuAfterMouseClick: (l, c) => n == null ? void 0 : n.showMenuAfterMouseEvent(
        o,
        l,
        "columnMenu",
        c
      ),
      eGridHeader: this.eGui
    }), a = Jc(t, i);
    a && this.comp.setUserCompDetails(a);
  }
  addHeaderMouseListeners(e) {
    const t = (r) => this.handleMouseOverChange(r.type === "mouseenter"), s = () => this.dispatchColumnMouseEvent("columnHeaderClicked", this.column.getProvidedColumnGroup()), n = (r) => this.handleContextMenuMouseEvent(r, void 0, this.column.getProvidedColumnGroup());
    e.addManagedListeners(this.eGui, {
      mouseenter: t,
      mouseleave: t,
      click: s,
      contextmenu: n
    });
  }
  handleMouseOverChange(e) {
    this.eventSvc.dispatchEvent({
      type: e ? "columnHeaderMouseOver" : "columnHeaderMouseLeave",
      column: this.column.getProvidedColumnGroup()
    });
  }
  setupTooltip(e, t) {
    var s;
    this.tooltipFeature = (s = this.beans.tooltipSvc) == null ? void 0 : s.setupHeaderGroupTooltip(
      this.tooltipFeature,
      this,
      e,
      t
    );
  }
  setupExpandable(e) {
    const t = this.column.getProvidedColumnGroup();
    this.refreshExpanded();
    const s = this.refreshExpanded.bind(this);
    e.addManagedListeners(t, {
      expandedChanged: s,
      expandableChanged: s
    });
  }
  refreshExpanded() {
    const { column: e } = this;
    this.expandable = e.isExpandable();
    const t = e.isExpanded();
    this.expandable ? this.comp.setAriaExpanded(t ? "true" : "false") : this.comp.setAriaExpanded(void 0), this.refreshHeaderStyles();
  }
  addClasses() {
    const { column: e } = this, t = e.getColGroupDef(), s = ki(t, this.gos, null, e);
    e.isPadding() ? (s.push("ag-header-group-cell-no-group"), e.getLeafColumns().every((r) => r.isSpanHeaderHeight()) && s.push("ag-header-span-height")) : (s.push("ag-header-group-cell-with-group"), t != null && t.wrapHeaderText && s.push("ag-header-cell-wrap-text")), s.forEach((n) => this.comp.toggleCss(n, !0));
  }
  setupMovingCss(e) {
    const { column: t } = this, n = t.getProvidedColumnGroup().getLeafColumns(), r = () => this.comp.toggleCss("ag-header-cell-moving", t.isMoving());
    n.forEach((o) => {
      e.addManagedListeners(o, { movingChanged: r });
    }), r();
  }
  onFocusIn(e) {
    this.eGui.contains(e.relatedTarget) || this.focusThis();
  }
  handleKeyDown(e) {
    super.handleKeyDown(e);
    const t = this.getWrapperHasFocus();
    if (!(!this.expandable || !t) && e.key === j.ENTER) {
      const s = this.column, n = !s.isExpanded();
      this.beans.colGroupSvc.setColumnGroupOpened(
        s.getProvidedColumnGroup(),
        n,
        "uiColumnExpanded"
      );
    }
  }
  // unlike columns, this will only get called once, as we don't react on props on column groups
  // (we will always destroy and recreate this comp if something changes)
  setDragSource(e) {
    var t;
    !this.isAlive() || this.isSuppressMoving() || (this.removeDragSource(), e && (this.dragSource = ((t = this.beans.colMoves) == null ? void 0 : t.setDragSourceForHeader(e, this.column, this.displayName)) ?? null));
  }
  isSuppressMoving() {
    return this.gos.get("suppressMovableColumns") || this.column.getLeafColumns().some((e) => e.getColDef().suppressMovable || e.getColDef().lockPosition);
  }
  destroy() {
    this.tooltipFeature = this.destroyBean(this.tooltipFeature), super.destroy();
  }
};
function Qh(e, t, s) {
  var n;
  (n = e.colGroupSvc) == null || n.setColumnGroupOpened(t, s, "api");
}
function Jh(e, t, s) {
  var n;
  return ((n = e.colGroupSvc) == null ? void 0 : n.getColumnGroup(t, s)) ?? null;
}
function eg(e, t) {
  var s;
  return ((s = e.colGroupSvc) == null ? void 0 : s.getProvidedColGroup(t)) ?? null;
}
function tg(e, t, s) {
  return e.colNames.getDisplayNameForColumnGroup(t, s) || "";
}
function sg(e) {
  var t;
  return ((t = e.colGroupSvc) == null ? void 0 : t.getColumnGroupState()) ?? [];
}
function ng(e, t) {
  var s;
  (s = e.colGroupSvc) == null || s.setColumnGroupState(t, "api");
}
function rg(e) {
  var t;
  (t = e.colGroupSvc) == null || t.resetColumnGroupState("api");
}
function og(e) {
  return e.visibleCols.treeLeft;
}
function ig(e) {
  return e.visibleCols.treeCenter;
}
function ag(e) {
  return e.visibleCols.treeRight;
}
function lg(e) {
  return e.visibleCols.getAllTrees();
}
function cg(e, t) {
  for (let s = 0; s < t.length; s++) {
    const n = e.indexOf(t[s]);
    n >= 0 && (e[n] = e[e.length - 1], e.pop());
  }
}
var dg = class extends K {
  constructor() {
    super(...arguments), this.beanName = "visibleCols", this.colsAndGroupsMap = {}, this.leftCols = [], this.rightCols = [], this.centerCols = [], this.allCols = [], this.bodyWidth = 0, this.leftWidth = 0, this.rightWidth = 0, this.isBodyWidthDirty = !0;
  }
  refresh(e, t = !1) {
    const { colFlex: s, colModel: n, colGroupSvc: r, colViewport: o, selectionColSvc: i } = this.beans;
    t || this.buildTrees(n, r), r == null || r.updateOpenClosedVisibility(), this.leftCols = Hn(this.treeLeft), this.centerCols = Hn(this.treeCenter), this.rightCols = Hn(this.treeRight), i == null || i.refreshVisibility(this.leftCols, this.centerCols, this.rightCols), this.joinColsAriaOrder(n), this.joinCols(), this.setLeftValues(e), this.autoHeightCols = this.allCols.filter((a) => a.isAutoHeight()), s == null || s.refreshFlexedColumns(), this.updateBodyWidths(), o.checkViewportColumns(!1), this.setFirstRightAndLastLeftPinned(n, this.leftCols, this.rightCols, e), this.eventSvc.dispatchEvent({
      type: "displayedColumnsChanged",
      source: e
    });
  }
  // after setColumnWidth or updateGroupsAndPresentedCols
  updateBodyWidths() {
    const e = Lt(this.centerCols), t = Lt(this.leftCols), s = Lt(this.rightCols);
    this.isBodyWidthDirty = this.bodyWidth !== e, (this.bodyWidth !== e || this.leftWidth !== t || this.rightWidth !== s) && (this.bodyWidth = e, this.leftWidth = t, this.rightWidth = s, this.eventSvc.dispatchEvent({
      type: "columnContainerWidthChanged"
    }), this.eventSvc.dispatchEvent({
      type: "displayedColumnsWidthChanged"
    }));
  }
  // sets the left pixel position of each column
  setLeftValues(e) {
    this.setLeftValuesOfCols(e), this.setLeftValuesOfGroups();
  }
  setFirstRightAndLastLeftPinned(e, t, s, n) {
    let r, o;
    this.gos.get("enableRtl") ? (r = t ? t[0] : null, o = s ? Ce(s) : null) : (r = t ? Ce(t) : null, o = s ? s[0] : null), e.getCols().forEach((i) => {
      i.setLastLeftPinned(i === r, n), i.setFirstRightPinned(i === o, n);
    });
  }
  buildTrees(e, t) {
    const s = e.getColsToShow(), n = s.filter((l) => l.getPinned() == "left"), r = s.filter((l) => l.getPinned() == "right"), o = s.filter((l) => l.getPinned() != "left" && l.getPinned() != "right"), i = new Lc(), a = (l) => t ? t.createColumnGroups(l) : l.columns;
    this.treeLeft = a({
      columns: n,
      idCreator: i,
      pinned: "left",
      oldDisplayedGroups: this.treeLeft
    }), this.treeRight = a({
      columns: r,
      idCreator: i,
      pinned: "right",
      oldDisplayedGroups: this.treeRight
    }), this.treeCenter = a({
      columns: o,
      idCreator: i,
      pinned: null,
      oldDisplayedGroups: this.treeCenter
    }), this.updateColsAndGroupsMap();
  }
  clear() {
    this.leftCols = [], this.rightCols = [], this.centerCols = [], this.allCols = [], this.ariaOrderColumns = [];
  }
  joinColsAriaOrder(e) {
    const t = e.getCols(), s = [], n = [], r = [];
    for (const o of t) {
      const i = o.getPinned();
      i ? i === !0 || i === "left" ? s.push(o) : r.push(o) : n.push(o);
    }
    this.ariaOrderColumns = s.concat(n).concat(r);
  }
  getAriaColIndex(e) {
    let t;
    return xe(e) ? t = e.getLeafColumns()[0] : t = e, this.ariaOrderColumns.indexOf(t) + 1;
  }
  setLeftValuesOfGroups() {
    [this.treeLeft, this.treeRight, this.treeCenter].forEach((e) => {
      e.forEach((t) => {
        xe(t) && t.checkLeft();
      });
    });
  }
  setLeftValuesOfCols(e) {
    const { colModel: t } = this.beans;
    if (!t.getColDefCols())
      return;
    const n = t.getCols().slice(0), r = this.gos.get("enableRtl");
    [this.leftCols, this.rightCols, this.centerCols].forEach((o) => {
      if (r) {
        let i = Lt(o);
        o.forEach((a) => {
          i -= a.getActualWidth(), a.setLeft(i, e);
        });
      } else {
        let i = 0;
        o.forEach((a) => {
          a.setLeft(i, e), i += a.getActualWidth();
        });
      }
      cg(n, o);
    }), n.forEach((o) => {
      o.setLeft(null, e);
    });
  }
  joinCols() {
    this.gos.get("enableRtl") ? this.allCols = this.rightCols.concat(this.centerCols).concat(this.leftCols) : this.allCols = this.leftCols.concat(this.centerCols).concat(this.rightCols);
  }
  getAllTrees() {
    return this.treeLeft && this.treeRight && this.treeCenter ? this.treeLeft.concat(this.treeCenter).concat(this.treeRight) : null;
  }
  // gridPanel -> ensureColumnVisible
  isColDisplayed(e) {
    return this.allCols.indexOf(e) >= 0;
  }
  getLeftColsForRow(e) {
    const {
      leftCols: t,
      beans: { colModel: s }
    } = this;
    return s.colSpanActive ? this.getColsForRow(e, t) : t;
  }
  getRightColsForRow(e) {
    const {
      rightCols: t,
      beans: { colModel: s }
    } = this;
    return s.colSpanActive ? this.getColsForRow(e, t) : t;
  }
  getColsForRow(e, t, s, n) {
    const r = [];
    let o = null;
    for (let i = 0; i < t.length; i++) {
      const a = t[i], l = t.length - i, c = Math.min(a.getColSpan(e), l), d = [a];
      if (c > 1) {
        const h = c - 1;
        for (let g = 1; g <= h; g++)
          d.push(t[i + g]);
        i += h;
      }
      let u;
      s ? (u = !1, d.forEach((h) => {
        s(h) && (u = !0);
      })) : u = !0, u && (r.length === 0 && o && (n && n(a)) && r.push(o), r.push(a)), o = a;
    }
    return r;
  }
  getContainerWidth(e) {
    switch (e) {
      case "left":
        return this.leftWidth;
      case "right":
        return this.rightWidth;
      default:
        return this.bodyWidth;
    }
  }
  getColBefore(e) {
    const t = this.allCols, s = t.indexOf(e);
    return s > 0 ? t[s - 1] : null;
  }
  isPinningLeft() {
    return this.leftCols.length > 0;
  }
  isPinningRight() {
    return this.rightCols.length > 0;
  }
  updateColsAndGroupsMap() {
    this.colsAndGroupsMap = {};
    const e = (t) => {
      this.colsAndGroupsMap[t.getUniqueId()] = t;
    };
    Tt(this.treeCenter, !1, e), Tt(this.treeLeft, !1, e), Tt(this.treeRight, !1, e);
  }
  isVisible(e) {
    return this.colsAndGroupsMap[e.getUniqueId()] === e;
  }
  getFirstColumn() {
    const e = this.gos.get("enableRtl"), t = ["leftCols", "centerCols", "rightCols"];
    e && t.reverse();
    for (let s = 0; s < t.length; s++) {
      const n = this[t[s]];
      if (n.length)
        return e ? Ce(n) : n[0];
    }
    return null;
  }
  // used by:
  // + rowRenderer -> for navigation
  getColAfter(e) {
    const t = this.allCols, s = t.indexOf(e);
    return s < t.length - 1 ? t[s + 1] : null;
  }
  // used by:
  // + angularGrid -> setting pinned body width
  // note: this should be cached
  getColsLeftWidth() {
    return Lt(this.leftCols);
  }
  // note: this should be cached
  getDisplayedColumnsRightWidth() {
    return Lt(this.rightCols);
  }
  isColAtEdge(e, t) {
    const s = this.allCols;
    if (!s.length)
      return !1;
    const n = t === "first";
    let r;
    if (xe(e)) {
      const o = e.getDisplayedLeafColumns();
      if (!o.length)
        return !1;
      r = n ? o[0] : Ce(o);
    } else
      r = e;
    return (n ? s[0] : Ce(s)) === r;
  }
};
function Tt(e, t, s) {
  if (e)
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (xe(r)) {
        const o = t ? r.getDisplayedChildren() : r.getChildren();
        Tt(o, t, s);
      }
      s(r);
    }
}
function Hn(e) {
  const t = [];
  return Tt(e, !0, (s) => {
    wt(s) && t.push(s);
  }), t;
}
var ug = class extends K {
  constructor() {
    super(...arguments), this.beanName = "colGroupSvc";
  }
  getColumnGroupState() {
    const e = [], t = this.beans.colModel.getColTree();
    return ct(null, t, (s) => {
      He(s) && e.push({
        groupId: s.getGroupId(),
        open: s.isExpanded()
      });
    }), e;
  }
  resetColumnGroupState(e) {
    const t = this.beans.colModel.getColDefColTree();
    if (!t)
      return;
    const s = [];
    ct(null, t, (n) => {
      if (He(n)) {
        const r = n.getColGroupDef(), o = {
          groupId: n.getGroupId(),
          open: r ? r.openByDefault : void 0
        };
        s.push(o);
      }
    }), this.setColumnGroupState(s, e);
  }
  setColumnGroupState(e, t) {
    const { colModel: s, colAnimation: n, visibleCols: r, eventSvc: o } = this.beans;
    if (!s.getColTree().length)
      return;
    n == null || n.start();
    const a = [];
    e.forEach((l) => {
      const c = l.groupId, d = l.open, u = this.getProvidedColGroup(c);
      u && u.isExpanded() !== d && (u.setExpanded(d), a.push(u));
    }), r.refresh(t, !0), a.length && o.dispatchEvent({
      type: "columnGroupOpened",
      columnGroup: a.length === 1 ? a[0] : void 0,
      columnGroups: a
    }), n == null || n.finish();
  }
  // called by headerRenderer - when a header is opened or closed
  setColumnGroupOpened(e, t, s) {
    let n;
    He(e) ? n = e.getId() : n = e || "", this.setColumnGroupState([{ groupId: n, open: t }], s);
  }
  getProvidedColGroup(e) {
    let t = null;
    return ct(null, this.beans.colModel.getColTree(), (s) => {
      He(s) && s.getId() === e && (t = s);
    }), t;
  }
  getGroupAtDirection(e, t) {
    const s = e.getProvidedColumnGroup().getLevel() + e.getPaddingLevel(), n = e.getDisplayedLeafColumns(), r = t === "After" ? Ce(n) : n[0], o = `getCol${t}`;
    for (; ; ) {
      const i = this.beans.visibleCols[o](r);
      if (!i)
        return null;
      const a = this.getColGroupAtLevel(i, s);
      if (a !== e)
        return a;
    }
  }
  getColGroupAtLevel(e, t) {
    let s = e.getParent(), n, r;
    for (; n = s.getProvidedColumnGroup().getLevel(), r = s.getPaddingLevel(), !(n + r <= t); )
      s = s.getParent();
    return s;
  }
  updateOpenClosedVisibility() {
    const e = this.beans.visibleCols.getAllTrees();
    Tt(e, !1, (t) => {
      xe(t) && t.calculateDisplayedColumns();
    });
  }
  // returns the group with matching colId and instanceId. If instanceId is missing,
  // matches only on the colId.
  getColumnGroup(e, t) {
    if (!e)
      return null;
    if (xe(e))
      return e;
    const s = this.beans.visibleCols.getAllTrees(), n = typeof t == "number";
    let r = null;
    return Tt(s, !1, (o) => {
      if (xe(o)) {
        const i = o;
        let a;
        n ? a = e === i.getGroupId() && t === i.getPartId() : a = e === i.getGroupId(), a && (r = i);
      }
    }), r;
  }
  createColumnGroups(e) {
    const { columns: t, idCreator: s, pinned: n, oldDisplayedGroups: r, isStandaloneStructure: o } = e, i = this.mapOldGroupsById(r), a = [];
    let l = t;
    for (; l.length; ) {
      const c = l;
      l = [];
      let d = 0;
      const u = (h) => {
        const g = d;
        d = h;
        const f = c[g], p = (xe(f) ? f.getProvidedColumnGroup() : f).getOriginalParent();
        if (p == null) {
          for (let v = g; v < h; v++)
            a.push(c[v]);
          return;
        }
        const m = this.createColumnGroup(
          p,
          s,
          i,
          n,
          o
        );
        for (let v = g; v < h; v++)
          m.addChild(c[v]);
        l.push(m);
      };
      for (let h = 1; h < c.length; h++) {
        const g = c[h], C = (xe(g) ? g.getProvidedColumnGroup() : g).getOriginalParent(), p = c[d], v = (xe(p) ? p.getProvidedColumnGroup() : p).getOriginalParent();
        C !== v && u(h);
      }
      d < c.length && u(c.length);
    }
    return o || this.setupParentsIntoCols(a, null), a;
  }
  createProvidedColumnGroup(e, t, s, n, r, o, i) {
    const a = r.getUniqueKey(t.groupId || null, null), l = Ur(this.beans, t, a), c = new Ms(l, a, !1, s);
    this.createBean(c);
    const d = this.findExistingGroup(t, o);
    d && o.splice(d.idx, 1);
    const u = d == null ? void 0 : d.group;
    u && c.setExpanded(u.isExpanded());
    const h = Si(
      this.beans,
      l.children,
      s + 1,
      e,
      n,
      r,
      o,
      i
    );
    return c.setChildren(h), c;
  }
  balanceColumnTree(e, t, s, n) {
    const r = [];
    for (let o = 0; o < e.length; o++) {
      const i = e[o];
      if (He(i)) {
        const a = i, l = this.balanceColumnTree(
          a.getChildren(),
          t + 1,
          s,
          n
        );
        a.setChildren(l), r.push(a);
      } else {
        let a, l;
        for (let c = s - 1; c >= t; c--) {
          const d = n.getUniqueKey(null, null), u = Ur(this.beans, null, d), h = new Ms(u, d, !0, t);
          this.createBean(h), l && l.setChildren([h]), l = h, a || (a = l);
        }
        if (a && l)
          if (r.push(a), e.some((d) => He(d))) {
            l.setChildren([i]);
            continue;
          } else {
            l.setChildren(e);
            break;
          }
        r.push(i);
      }
    }
    return r;
  }
  findDepth(e) {
    let t = 0, s = e;
    for (; s && s[0] && He(s[0]); )
      t++, s = s[0].getChildren();
    return t;
  }
  findMaxDepth(e, t) {
    let s = t;
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (He(r)) {
        const o = r, i = this.findMaxDepth(o.getChildren(), t + 1);
        s < i && (s = i);
      }
    }
    return s;
  }
  /**
   * Inserts dummy group columns in the hierarchy above auto-generated columns
   * in order to ensure auto-generated columns are leaf nodes (and therefore are
   * displayed correctly)
   */
  balanceTreeForAutoCols(e, t) {
    const s = [];
    return e.forEach((n) => {
      let r = n;
      for (let o = t - 1; o >= 0; o--) {
        const i = new Ms(null, `FAKE_PATH_${n.getId()}}_${o}`, !0, o);
        this.createBean(i), i.setChildren([r]), r.originalParent = i, r = i;
      }
      t === 0 && (n.originalParent = null), s.push(r);
    }), s;
  }
  findExistingGroup(e, t) {
    if (e.groupId != null)
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (r.getColGroupDef() && r.getId() === e.groupId)
          return { idx: n, group: r };
      }
  }
  createColumnGroup(e, t, s, n, r) {
    const o = e.getGroupId(), i = t.getInstanceIdForKey(o), a = _i(o, i);
    let l = s[a];
    return l && l.getProvidedColumnGroup() !== e && (l = null), te(l) ? l.reset() : (l = new zi(e, o, i, n), r || this.createBean(l)), l;
  }
  // returns back a 2d map of ColumnGroup as follows: groupId -> instanceId -> ColumnGroup
  mapOldGroupsById(e) {
    const t = {}, s = (n) => {
      n.forEach((r) => {
        if (xe(r)) {
          const o = r;
          t[r.getUniqueId()] = o, s(o.getChildren());
        }
      });
    };
    return e && s(e), t;
  }
  setupParentsIntoCols(e, t) {
    e.forEach((s) => {
      if (s.parent = t, xe(s)) {
        const n = s;
        this.setupParentsIntoCols(n.getChildren(), n);
      }
    });
  }
}, hg = {
  moduleName: "ColumnGroup",
  version: be,
  dynamicBeans: { headerGroupCellCtrl: Xh },
  beans: [ug],
  apiFunctions: {
    getAllDisplayedColumnGroups: lg,
    getCenterDisplayedColumnGroups: ig,
    getColumnGroup: Jh,
    getColumnGroupState: sg,
    getDisplayNameForColumnGroup: tg,
    getLeftDisplayedColumnGroups: og,
    getProvidedColumnGroup: eg,
    getRightDisplayedColumnGroups: ag,
    resetColumnGroupState: rg,
    setColumnGroupOpened: Qh,
    setColumnGroupState: ng
  }
}, gg = {
  moduleName: "CheckboxCellRenderer",
  version: be,
  userComponents: {
    agCheckboxCellRenderer: rh
  }
}, fg = class extends K {
  constructor() {
    super(...arguments), this.beanName = "colFlex";
  }
  refreshFlexedColumns(e = {}) {
    const t = e.source ?? "flex";
    e.viewportWidth != null && (this.flexViewportWidth = e.viewportWidth);
    const s = this.flexViewportWidth;
    if (!s)
      return [];
    const { visibleCols: n } = this.beans, r = n.centerCols;
    let o = -1;
    if (e.resizingCols) {
      const f = new Set(e.resizingCols);
      for (let C = r.length - 1; C >= 0; C--)
        if (f.has(r[C])) {
          o = C;
          break;
        }
    }
    let i = !1;
    const a = r.map((f, C) => {
      const p = f.getFlex(), m = p != null && p > 0 && C > o;
      return i || (i = m), {
        col: f,
        isFlex: m,
        flex: Math.max(0, p ?? 0),
        initialSize: f.getActualWidth(),
        min: f.getMinWidth(),
        max: f.getMaxWidth(),
        targetSize: 0
      };
    });
    if (!i)
      return [];
    let l = a.length, c = a.reduce((f, C) => f + C.flex, 0), d = s;
    const u = (f, C) => {
      f.frozenSize = C, f.col.setActualWidth(C, t), d -= C, c -= f.flex, l -= 1;
    }, h = (f) => f.frozenSize != null;
    for (const f of a)
      f.isFlex || u(f, f.initialSize);
    for (; l > 0; ) {
      const f = Math.round(c < 1 ? d * c : d);
      let C, p = 0, m = 0;
      for (const y of a) {
        if (h(y))
          continue;
        C = y, m += f * (y.flex / c);
        const F = m - p, S = Math.round(F);
        y.targetSize = S, p += S;
      }
      C && (C.targetSize += f - p);
      let v = 0;
      for (const y of a) {
        if (h(y))
          continue;
        const F = y.targetSize, S = Math.min(Math.max(F, y.min), y.max);
        v += S - F, y.violationType = S === F ? void 0 : S < F ? "max" : "min", y.targetSize = S;
      }
      const b = v === 0 ? "all" : v > 0 ? "min" : "max";
      for (const y of a)
        h(y) || (b === "all" || y.violationType === b) && u(y, y.targetSize);
    }
    e.skipSetLeft || n.setLeftValues(t), e.updateBodyWidths && n.updateBodyWidths();
    const g = a.filter((f) => f.isFlex && !f.violationType).map((f) => f.col);
    if (e.fireResizedEvent) {
      const f = a.filter((p) => p.initialSize !== p.frozenSize).map((p) => p.col), C = a.filter((p) => p.flex).map((p) => p.col);
      $s(this.eventSvc, f, !0, t, C);
    }
    return g;
  }
  initCol(e) {
    const { flex: t, initialFlex: s } = e.colDef;
    t !== void 0 ? e.flex = t : s !== void 0 && (e.flex = s);
  }
  // this method should only be used by the colModel to
  // change flex when required by the applyColumnState method.
  setColFlex(e, t) {
    e.flex = t ?? null, e.dispatchStateUpdatedEvent("flex");
  }
}, pg = class extends K {
  constructor() {
    super(...arguments), this.beanName = "dataTypeSvc", this.dataTypeDefinitions = {}, this.isPendingInference = !1, this.isColumnTypeOverrideInDataTypeDefinitions = !1, this.columnStateUpdatesPendingInference = {}, this.columnStateUpdateListenerDestroyFuncs = [];
  }
  wireBeans(e) {
    this.colModel = e.colModel;
  }
  postConstruct() {
    this.processDataTypeDefinitions(), this.addManagedPropertyListener("dataTypeDefinitions", (e) => {
      this.processDataTypeDefinitions(), this.colModel.recreateColumnDefs(e);
    });
  }
  processDataTypeDefinitions() {
    const e = this.getDefaultDataTypes(), t = {};
    this.dataTypeDefinitions = t;
    const s = {};
    this.formatValueFuncs = s;
    const n = (i) => (a) => {
      const { column: l, node: c, value: d } = a;
      let u = l.getColDef().valueFormatter;
      return u === i.groupSafeValueFormatter && (u = i.valueFormatter), this.beans.valueSvc.formatValue(l, c, d, u);
    };
    for (const i of Object.keys(e)) {
      const a = e[i], l = {
        ...a,
        groupSafeValueFormatter: po(a, this.gos)
      };
      t[i] = l, s[i] = n(l);
    }
    const r = this.gos.get("dataTypeDefinitions") ?? {}, o = {};
    this.dataTypeMatchers = o;
    for (const i of Object.keys(r)) {
      const a = r[i], l = this.processDataTypeDefinition(
        a,
        r,
        [i],
        e
      );
      l && (t[i] = l, a.dataTypeMatcher && (o[i] = a.dataTypeMatcher), s[i] = n(l));
    }
    this.checkObjectValueHandlers(e), ["dateString", "text", "number", "boolean", "date"].forEach((i) => {
      const a = o[i];
      a && delete o[i], o[i] = a ?? e[i].dataTypeMatcher;
    });
  }
  processDataTypeDefinition(e, t, s, n) {
    let r;
    const o = e.extendsDataType;
    if (e.columnTypes && (this.isColumnTypeOverrideInDataTypeDefinitions = !0), e.extendsDataType === e.baseDataType) {
      let i = n[o];
      const a = t[o];
      if (i && a && (i = a), !fo(e, i, o))
        return;
      r = go(i, e);
    } else {
      if (s.includes(o)) {
        oe(44);
        return;
      }
      const i = t[o];
      if (!fo(e, i, o))
        return;
      const a = this.processDataTypeDefinition(
        i,
        t,
        [...s, o],
        n
      );
      if (!a)
        return;
      r = go(a, e);
    }
    return {
      ...r,
      groupSafeValueFormatter: po(r, this.gos)
    };
  }
  updateColDefAndGetColumnType(e, t, s) {
    let { cellDataType: n } = t;
    const { field: r } = t;
    if (n === void 0 && (n = e.cellDataType), (n == null || n === !0) && (n = this.canInferCellDataType(e, t) ? this.inferCellDataType(r, s) : !1), !n) {
      e.cellDataType = !1;
      return;
    }
    const o = this.dataTypeDefinitions[n];
    if (!o) {
      oe(47, { cellDataType: n });
      return;
    }
    return e.cellDataType = n, o.groupSafeValueFormatter && (e.valueFormatter = o.groupSafeValueFormatter), o.valueParser && (e.valueParser = o.valueParser), o.suppressDefaultProperties || this.setColDefPropertiesForBaseDataType(e, n, o, s), o.columnTypes;
  }
  addColumnListeners(e) {
    if (!this.isPendingInference)
      return;
    const t = this.columnStateUpdatesPendingInference[e.getColId()];
    if (!t)
      return;
    const s = (n) => {
      t.add(n.key);
    };
    e.__addEventListener("columnStateUpdated", s), this.columnStateUpdateListenerDestroyFuncs.push(
      () => e.__removeEventListener("columnStateUpdated", s)
    );
  }
  canInferCellDataType(e, t) {
    const { gos: s } = this;
    if (!tn(s))
      return !1;
    const n = { cellRenderer: !0, valueGetter: !0, valueParser: !0, refData: !0 };
    if (On(t, n))
      return !1;
    const r = t.type === null ? e.type : t.type;
    if (r) {
      const o = s.get("columnTypes") ?? {};
      if (zs(r).some((a) => {
        const l = o[a.trim()];
        return l && On(l, n);
      }))
        return !1;
    }
    return !On(e, n);
  }
  inferCellDataType(e, t) {
    if (!e)
      return;
    let s;
    const n = this.getInitialData();
    if (n) {
      const r = e.indexOf(".") >= 0 && !this.gos.get("suppressFieldDotNotation");
      s = Es(n, e, r);
    } else
      this.initWaitForRowData(t);
    if (s != null)
      return Object.keys(this.dataTypeMatchers).find((r) => this.dataTypeMatchers[r](s)) ?? "object";
  }
  getInitialData() {
    var t;
    const e = this.gos.get("rowData");
    if (e != null && e.length)
      return e[0];
    if (this.initialData)
      return this.initialData;
    {
      const s = (t = this.beans.rowModel.rootNode) == null ? void 0 : t.allLeafChildren;
      if (s != null && s.length)
        return s[0].data;
    }
    return null;
  }
  initWaitForRowData(e) {
    if (this.columnStateUpdatesPendingInference[e] = /* @__PURE__ */ new Set(), this.isPendingInference)
      return;
    this.isPendingInference = !0;
    const t = this.isColumnTypeOverrideInDataTypeDefinitions, { colAutosize: s, eventSvc: n } = this.beans;
    t && s && (s.shouldQueueResizeOperations = !0);
    const [r] = this.addManagedEventListeners({
      rowDataUpdateStarted: (o) => {
        const { firstRowData: i } = o;
        i && (r == null || r(), this.isPendingInference = !1, this.processColumnsPendingInference(i, t), this.columnStateUpdatesPendingInference = {}, t && (s == null || s.processResizeOperations()), n.dispatchEvent({
          type: "dataTypesInferred"
        }));
      }
    });
  }
  processColumnsPendingInference(e, t) {
    this.initialData = e;
    const s = [];
    this.destroyColumnStateUpdateListeners();
    const n = {}, r = {};
    for (const o of Object.keys(this.columnStateUpdatesPendingInference)) {
      const i = this.columnStateUpdatesPendingInference[o], a = this.colModel.getCol(o);
      if (!a)
        return;
      const l = a.getColDef();
      if (!this.resetColDefIntoCol(a, "cellDataTypeInferred"))
        return;
      const c = a.getColDef();
      if (t && c.type && c.type !== l.type) {
        const d = mg(a, i);
        d.rowGroup && d.rowGroupIndex == null && (n[o] = d), d.pivot && d.pivotIndex == null && (r[o] = d), s.push(d);
      }
    }
    t && s.push(
      ...this.generateColumnStateForRowGroupAndPivotIndexes(
        n,
        r
      )
    ), s.length && Ei(this.beans, { state: s }, "cellDataTypeInferred"), this.initialData = null;
  }
  generateColumnStateForRowGroupAndPivotIndexes(e, t) {
    const s = {}, { rowGroupColsSvc: n, pivotColsSvc: r } = this.beans;
    return n == null || n.restoreColumnOrder(s, e), r == null || r.restoreColumnOrder(s, t), Object.values(s);
  }
  resetColDefIntoCol(e, t) {
    const s = e.getUserProvidedColDef();
    if (!s)
      return !1;
    const n = qn(this.beans, s, e.getColId());
    return e.setColDef(n, s, t), !0;
  }
  checkObjectValueHandlers(e) {
    const t = this.dataTypeDefinitions.object, s = e.object;
    this.hasObjectValueParser = t.valueParser !== s.valueParser, this.hasObjectValueFormatter = t.valueFormatter !== s.valueFormatter;
  }
  getDateStringTypeDefinition(e) {
    const { dateString: t } = this.dataTypeDefinitions;
    return e ? this.getDataTypeDefinition(e) ?? t : t;
  }
  getDateParserFunction(e) {
    return this.getDateStringTypeDefinition(e).dateParser;
  }
  getDateFormatterFunction(e) {
    return this.getDateStringTypeDefinition(e).dateFormatter;
  }
  getDataTypeDefinition(e) {
    const t = e.getColDef();
    if (t.cellDataType)
      return this.dataTypeDefinitions[t.cellDataType];
  }
  getBaseDataType(e) {
    var t;
    return (t = this.getDataTypeDefinition(e)) == null ? void 0 : t.baseDataType;
  }
  checkType(e, t) {
    var n;
    if (t == null)
      return !0;
    const s = (n = this.getDataTypeDefinition(e)) == null ? void 0 : n.dataTypeMatcher;
    return s ? s(t) : !0;
  }
  validateColDef(e) {
    const t = (s) => oe(48, { property: s });
    if (e.cellDataType === "object") {
      const { object: s } = this.dataTypeDefinitions;
      e.valueFormatter === s.groupSafeValueFormatter && !this.hasObjectValueFormatter && t("Formatter"), e.editable && e.valueParser === s.valueParser && !this.hasObjectValueParser && t("Parser");
    }
  }
  getFormatValue(e) {
    return this.formatValueFuncs[e];
  }
  isColPendingInference(e) {
    return this.isPendingInference && !!this.columnStateUpdatesPendingInference[e];
  }
  setColDefPropertiesForBaseDataType(e, t, s, n) {
    var o;
    const r = this.formatValueFuncs[t];
    switch (s.baseDataType) {
      case "number": {
        e.cellEditor = "agNumberCellEditor";
        break;
      }
      case "boolean": {
        e.cellEditor = "agCheckboxCellEditor", e.cellRenderer = "agCheckboxCellRenderer", e.getFindText = () => null, e.suppressKeyboardEvent = (i) => !!i.colDef.editable && i.event.key === j.SPACE;
        break;
      }
      case "date": {
        e.cellEditor = "agDateCellEditor", e.keyCreator = r;
        break;
      }
      case "dateString": {
        e.cellEditor = "agDateStringCellEditor", e.keyCreator = r;
        break;
      }
      case "object": {
        e.cellEditorParams = {
          useFormatter: !0
        }, e.comparator = (i, a) => {
          const l = this.colModel.getColDefCol(n), c = l == null ? void 0 : l.getColDef();
          if (!l || !c)
            return 0;
          const d = i == null ? "" : r({ column: l, node: null, value: i }), u = a == null ? "" : r({ column: l, node: null, value: a });
          return d === u ? 0 : d > u ? 1 : -1;
        }, e.keyCreator = r;
        break;
      }
    }
    (o = this.beans.filterManager) == null || o.setColDefPropertiesForDataType(e, s, r);
  }
  getDefaultDataTypes() {
    const e = (s) => !!s.match("^\\d{4}-\\d{2}-\\d{2}$"), t = this.getLocaleTextFunc();
    return {
      number: {
        baseDataType: "number",
        // can be empty space with legacy copy
        valueParser: (s) => {
          var n, r;
          return ((r = (n = s.newValue) == null ? void 0 : n.trim) == null ? void 0 : r.call(n)) === "" ? null : Number(s.newValue);
        },
        valueFormatter: (s) => s.value == null ? "" : typeof s.value != "number" || isNaN(s.value) ? t("invalidNumber", "Invalid Number") : String(s.value),
        dataTypeMatcher: (s) => typeof s == "number"
      },
      text: {
        baseDataType: "text",
        valueParser: (s) => s.newValue === "" ? null : Kn(s.newValue),
        dataTypeMatcher: (s) => typeof s == "string"
      },
      boolean: {
        baseDataType: "boolean",
        valueParser: (s) => {
          var n, r;
          return s.newValue == null ? s.newValue : ((r = (n = s.newValue) == null ? void 0 : n.trim) == null ? void 0 : r.call(n)) === "" ? null : String(s.newValue).toLowerCase() === "true";
        },
        valueFormatter: (s) => s.value == null ? "" : String(s.value),
        dataTypeMatcher: (s) => typeof s == "boolean"
      },
      date: {
        baseDataType: "date",
        valueParser: (s) => ao(s.newValue == null ? null : String(s.newValue)),
        valueFormatter: (s) => s.value == null ? "" : !(s.value instanceof Date) || isNaN(s.value.getTime()) ? t("invalidDate", "Invalid Date") : io(s.value, !1) ?? "",
        dataTypeMatcher: (s) => s instanceof Date
      },
      dateString: {
        baseDataType: "dateString",
        dateParser: (s) => ao(s) ?? void 0,
        dateFormatter: (s) => io(s ?? null, !1) ?? void 0,
        valueParser: (s) => e(String(s.newValue)) ? s.newValue : null,
        valueFormatter: (s) => e(String(s.value)) ? s.value : "",
        dataTypeMatcher: (s) => typeof s == "string" && e(s)
      },
      object: {
        baseDataType: "object",
        valueParser: () => null,
        valueFormatter: (s) => Kn(s.value) ?? ""
      }
    };
  }
  destroyColumnStateUpdateListeners() {
    this.columnStateUpdateListenerDestroyFuncs.forEach((e) => e()), this.columnStateUpdateListenerDestroyFuncs = [];
  }
  destroy() {
    this.dataTypeDefinitions = {}, this.dataTypeMatchers = {}, this.formatValueFuncs = {}, this.columnStateUpdatesPendingInference = {}, this.destroyColumnStateUpdateListeners(), super.destroy();
  }
};
function go(e, t) {
  const s = {
    ...e,
    ...t
  };
  return e.columnTypes && t.columnTypes && t.appendColumnTypes && (s.columnTypes = [
    ...zs(e.columnTypes),
    ...zs(t.columnTypes)
  ]), s;
}
function fo(e, t, s) {
  return t ? t.baseDataType !== e.baseDataType ? (oe(46), !1) : !0 : (oe(45, { parentCellDataType: s }), !1);
}
function po(e, t) {
  if (e.valueFormatter)
    return (s) => {
      var n, r;
      if ((n = s.node) != null && n.group) {
        const o = (s.colDef.pivotValueColumn ?? s.column).getAggFunc();
        if (o) {
          if (o === "first" || o === "last")
            return e.valueFormatter(s);
          if (e.baseDataType === "number" && o !== "count") {
            if (typeof s.value == "number")
              return e.valueFormatter(s);
            if (typeof s.value == "object") {
              if (!s.value)
                return;
              if ("toNumber" in s.value)
                return e.valueFormatter({
                  ...s,
                  value: s.value.toNumber()
                });
              if ("value" in s.value)
                return e.valueFormatter({
                  ...s,
                  value: s.value.value
                });
            }
          }
          return;
        }
        if (t.get("groupDisplayType") === "groupRows" && !t.get("treeData"))
          return;
      } else if (t.get("groupHideOpenParents") && s.column.isRowGroupActive() && typeof s.value == "string" && !((r = e.dataTypeMatcher) != null && r.call(e, s.value)))
        return;
      return e.valueFormatter(s);
    };
}
function Cg(e, t, s, n) {
  if (!t[s])
    return !1;
  const r = e[s];
  return r === null ? (t[s] = !1, !1) : n === void 0 ? !!r : r === n;
}
function On(e, t) {
  return [
    ["cellRenderer", "agSparklineCellRenderer"],
    ["valueGetter", void 0],
    ["valueParser", void 0],
    ["refData", void 0]
  ].some(
    ([s, n]) => Cg(e, t, s, n)
  );
}
function mg(e, t) {
  const s = Pc(e);
  return t.forEach((n) => {
    delete s[n], n === "rowGroup" ? delete s.rowGroupIndex : n === "pivot" && delete s.pivotIndex;
  }), s;
}
var wg = {
  moduleName: "DataType",
  version: be,
  beans: [pg],
  dependsOn: [gg]
}, vg = {
  moduleName: "ColumnFlex",
  version: be,
  beans: [fg]
};
function bg(e) {
  if (!e || e == null)
    return null;
  const t = /([a-z])([A-Z])/g, s = /([A-Z]+)([A-Z])([a-z])/g;
  return e.replace(t, "$1 $2").replace(s, "$1 $2$3").replace(/\./g, " ").split(" ").map((r) => r.substring(0, 1).toUpperCase() + (r.length > 1 ? r.substring(1, r.length) : "")).join(" ");
}
var yg = class extends K {
  constructor() {
    super(...arguments), this.beanName = "colNames";
  }
  getDisplayNameForColumn(e, t, s = !1) {
    if (!e)
      return null;
    const n = this.getHeaderName(e.getColDef(), e, null, null, t), { aggColNameSvc: r } = this.beans;
    return s && r ? r.getHeaderName(e, n) : n;
  }
  getDisplayNameForProvidedColumnGroup(e, t, s) {
    const n = t == null ? void 0 : t.getColGroupDef();
    return n ? this.getHeaderName(n, null, e, t, s) : null;
  }
  getDisplayNameForColumnGroup(e, t) {
    return this.getDisplayNameForProvidedColumnGroup(e, e.getProvidedColumnGroup(), t);
  }
  // location is where the column is going to appear, ie who is calling us
  getHeaderName(e, t, s, n, r) {
    var i;
    const o = e.headerValueGetter;
    if (o) {
      const a = ge(this.gos, {
        colDef: e,
        column: t,
        columnGroup: s,
        providedColumnGroup: n,
        location: r
      });
      return typeof o == "function" ? o(a) : typeof o == "string" ? ((i = this.beans.expressionSvc) == null ? void 0 : i.evaluate(o, a)) ?? null : "";
    } else {
      if (e.headerName != null)
        return e.headerName;
      if (e.field)
        return bg(e.field);
    }
    return "";
  }
}, Sg = class extends K {
  constructor() {
    super(...arguments), this.beanName = "colViewport", this.colsWithinViewport = [], this.headerColsWithinViewport = [], this.colsWithinViewportHash = "", this.rowsOfHeadersToRenderLeft = {}, this.rowsOfHeadersToRenderRight = {}, this.rowsOfHeadersToRenderCenter = {};
  }
  wireBeans(e) {
    this.visibleCols = e.visibleCols, this.colModel = e.colModel;
  }
  postConstruct() {
    this.suppressColumnVirtualisation = this.gos.get("suppressColumnVirtualisation");
  }
  setScrollPosition(e, t, s = !1) {
    const { visibleCols: n } = this, r = n.isBodyWidthDirty;
    if (!(e === this.scrollWidth && t === this.scrollPosition && !r)) {
      if (this.scrollWidth = e, this.scrollPosition = t, n.isBodyWidthDirty = !0, this.gos.get("enableRtl")) {
        const i = n.bodyWidth;
        this.viewportLeft = i - t - e, this.viewportRight = i - t;
      } else
        this.viewportLeft = t, this.viewportRight = e + t;
      this.colModel.ready && this.checkViewportColumns(s);
    }
  }
  getHeadersToRender(e, t) {
    let s;
    switch (e) {
      case "left":
        s = this.rowsOfHeadersToRenderLeft[t];
        break;
      case "right":
        s = this.rowsOfHeadersToRenderRight[t];
        break;
      default:
        s = this.rowsOfHeadersToRenderCenter[t];
        break;
    }
    return s || [];
  }
  extractViewportColumns() {
    const e = this.visibleCols.centerCols;
    this.isColumnVirtualisationSuppressed() ? (this.colsWithinViewport = e, this.headerColsWithinViewport = e) : (this.colsWithinViewport = e.filter(this.isColumnInRowViewport.bind(this)), this.headerColsWithinViewport = e.filter(this.isColumnInHeaderViewport.bind(this)));
  }
  isColumnVirtualisationSuppressed() {
    return this.suppressColumnVirtualisation || this.viewportRight === 0;
  }
  clear(e) {
    this.rowsOfHeadersToRenderLeft = {}, this.rowsOfHeadersToRenderRight = {}, this.rowsOfHeadersToRenderCenter = {}, e || (this.colsWithinViewportHash = "");
  }
  isColumnInHeaderViewport(e) {
    return e.isAutoHeaderHeight() || Rg(e) ? !0 : this.isColumnInRowViewport(e);
  }
  isColumnInRowViewport(e) {
    if (e.isAutoHeight())
      return !0;
    const t = e.getLeft() || 0, s = t + e.getActualWidth(), n = this.viewportLeft - 200, r = this.viewportRight + 200, o = t < n && s < n, i = t > r && s > r;
    return !o && !i;
  }
  // used by Grid API only
  getViewportColumns() {
    const { leftCols: e, rightCols: t } = this.visibleCols;
    return this.colsWithinViewport.concat(e).concat(t);
  }
  // + rowRenderer
  // if we are not column spanning, this just returns back the virtual centre columns,
  // however if we are column spanning, then different rows can have different virtual
  // columns, so we have to work out the list for each individual row.
  getColsWithinViewport(e) {
    if (!this.colModel.colSpanActive)
      return this.colsWithinViewport;
    const t = (o) => {
      const i = o.getLeft();
      return te(i) && i > this.viewportLeft;
    }, s = this.isColumnVirtualisationSuppressed() ? void 0 : this.isColumnInRowViewport.bind(this), { visibleCols: n } = this, r = n.centerCols;
    return n.getColsForRow(e, r, s, t);
  }
  // checks what columns are currently displayed due to column virtualisation. dispatches an event
  // if the list of columns has changed.
  // + setColumnWidth(), setViewportPosition(), setColumnDefs(), sizeColumnsToFit()
  checkViewportColumns(e = !1) {
    this.extractViewport() && this.eventSvc.dispatchEvent({
      type: "virtualColumnsChanged",
      afterScroll: e
    });
  }
  calculateHeaderRows() {
    this.clear(!0);
    const e = {}, { leftCols: t, rightCols: s, treeLeft: n, treeRight: r, treeCenter: o } = this.visibleCols;
    this.headerColsWithinViewport.concat(t).concat(s).forEach((l) => e[l.getId()] = !0);
    const a = (l, c, d) => {
      let u = !1;
      for (let h = 0; h < l.length; h++) {
        const g = l[h];
        let f = !1;
        if (wt(g))
          f = e[g.getId()] === !0;
        else {
          const p = g.getDisplayedChildren();
          p && (f = a(p, c, d + 1));
        }
        f && (u = !0, c[d] || (c[d] = []), c[d].push(g));
      }
      return u;
    };
    a(n, this.rowsOfHeadersToRenderLeft, 0), a(r, this.rowsOfHeadersToRenderRight, 0), a(o, this.rowsOfHeadersToRenderCenter, 0);
  }
  extractViewport() {
    const e = (n) => `${n.getId()}-${n.getPinned() || "normal"}`;
    this.extractViewportColumns();
    const t = this.getViewportColumns().map(e).join("#"), s = this.colsWithinViewportHash !== t;
    return s && (this.colsWithinViewportHash = t, this.calculateHeaderRows()), s;
  }
};
function Rg(e) {
  for (; e; ) {
    if (e.isAutoHeaderHeight())
      return !0;
    e = e.getParent();
  }
  return !1;
}
var xg = class extends K {
  constructor() {
    super(...arguments), this.beanName = "agCompUtils";
  }
  adaptFunction(e, t) {
    if (!e.cellRenderer)
      return null;
    class s {
      refresh() {
        return !1;
      }
      getGui() {
        return this.eGui;
      }
      init(r) {
        const o = t(r), i = typeof o;
        if (i === "string" || i === "number" || i === "boolean") {
          this.eGui = cr("<span>" + o + "</span>");
          return;
        }
        if (o == null) {
          this.eGui = Ct({ tag: "span" });
          return;
        }
        this.eGui = o;
      }
    }
    return s;
  }
}, Fg = {
  moduleName: "CellRendererFunction",
  version: be,
  beans: [xg]
}, Dg = class extends K {
  constructor() {
    super(...arguments), this.beanName = "registry", this.agGridDefaults = {}, this.agGridDefaultParams = {}, this.jsComps = {}, this.dynamicBeans = {}, this.selectors = {}, this.icons = {};
  }
  postConstruct() {
    const e = this.gos.get("components");
    if (e != null)
      for (const t of Object.keys(e))
        this.jsComps[t] = e[t];
  }
  registerModule(e) {
    const { icons: t, userComponents: s, dynamicBeans: n, selectors: r } = e;
    if (s) {
      const o = (i, a, l) => {
        this.agGridDefaults[i] = a, l && (this.agGridDefaultParams[i] = l);
      };
      for (const i of Object.keys(s)) {
        const a = s[i];
        typeof a == "object" ? o(i, a.classImp, a.params) : o(i, a);
      }
    }
    if (n)
      for (const o of Object.keys(n))
        this.dynamicBeans[o] = n[o];
    if (r == null || r.forEach((o) => {
      this.selectors[o.selector] = o;
    }), t)
      for (const o of Object.keys(t))
        this.icons[o] = t[o];
  }
  getUserComponent(e, t) {
    var a;
    const s = (l, c, d) => ({
      componentFromFramework: c,
      component: l,
      params: d
    }), { frameworkOverrides: n } = this.beans, r = n.frameworkComponent(t, this.gos.get("components"));
    if (r != null)
      return s(r, !0);
    const o = this.jsComps[t];
    if (o) {
      const l = n.isFrameworkComponent(o);
      return s(o, l);
    }
    const i = this.agGridDefaults[t];
    return i ? s(i, !1, this.agGridDefaultParams[t]) : ((a = this.beans.validation) == null || a.missingUserComponent(e, t, this.agGridDefaults, this.jsComps), null);
  }
  createDynamicBean(e, t, ...s) {
    const n = this.dynamicBeans[e];
    if (n == null) {
      if (t)
        throw new Error(ai(256));
      return;
    }
    return new n(...s);
  }
  getSelector(e) {
    return this.selectors[e];
  }
  getIcon(e) {
    return this.icons[e];
  }
}, Pg = 23, Eg = class extends K {
  constructor() {
    super(...arguments), this.beanName = "ctrlsSvc", this.params = {}, this.ready = !1, this.readyCallbacks = [];
  }
  postConstruct() {
    var e, t;
    this.addEventListener(
      "ready",
      () => {
        this.updateReady(), this.ready && (this.readyCallbacks.forEach((s) => s(this.params)), this.readyCallbacks.length = 0);
      },
      ((t = (e = this.beans.frameworkOverrides).runWhenReadyAsync) == null ? void 0 : t.call(e)) ?? !1
    );
  }
  updateReady() {
    const e = Object.values(this.params);
    this.ready = e.length === Pg && e.every((t) => (t == null ? void 0 : t.isAlive()) ?? !1);
  }
  whenReady(e, t) {
    this.ready ? t(this.params) : this.readyCallbacks.push(t), e.addDestroyFunc(() => {
      const s = this.readyCallbacks.indexOf(t);
      s >= 0 && this.readyCallbacks.splice(s, 1);
    });
  }
  register(e, t) {
    this.params[e] = t, this.updateReady(), this.ready && this.dispatchLocalEvent({ type: "ready" }), t.addDestroyFunc(() => {
      this.updateReady();
    });
  }
  get(e) {
    return this.params[e];
  }
  getGridBodyCtrl() {
    return this.params.gridBodyCtrl;
  }
  getHeaderRowContainerCtrls() {
    const { leftHeader: e, centerHeader: t, rightHeader: s } = this.params;
    return [e, s, t];
  }
  getHeaderRowContainerCtrl(e) {
    const t = this.params;
    switch (e) {
      case "left":
        return t.leftHeader;
      case "right":
        return t.rightHeader;
      default:
        return t.centerHeader;
    }
  }
  getScrollFeature() {
    return this.getGridBodyCtrl().scrollFeature;
  }
}, Tg = (
  /*css*/
  ':where(.ag-root-wrapper,.ag-popup,.ag-dnd-ghost,.ag-chart),:where(.ag-root-wrapper,.ag-popup,.ag-dnd-ghost,.ag-chart) :where([class^=ag-]){box-sizing:border-box;&:after,&:before{box-sizing:border-box}&:where(div,span,label):focus-visible{box-shadow:inset var(--ag-focus-shadow);outline:none}}:where(.ag-root-wrapper,.ag-popup,.ag-dnd-ghost,.ag-chart) :where([class^=ag-]) ::-ms-clear{display:none}.ag-aria-description-container{border:0;z-index:9999;clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.ag-hidden{display:none!important}.ag-invisible{visibility:hidden!important}.ag-unselectable{-webkit-user-select:none;-moz-user-select:none;user-select:none}.ag-selectable{-webkit-user-select:text;-moz-user-select:text;user-select:text}.ag-tab-guard{display:block;height:0;position:absolute;width:0}:where(.ag-virtual-list-viewport) .ag-tab-guard{position:sticky}.ag-tab-guard-top{top:1px}.ag-tab-guard-bottom{bottom:1px}.ag-shake-left-to-right{animation-direction:alternate;animation-duration:.2s;animation-iteration-count:infinite;animation-name:ag-shake-left-to-right}@keyframes ag-shake-left-to-right{0%{padding-left:6px;padding-right:2px}to{padding-left:2px;padding-right:6px}}.ag-body-horizontal-scroll-viewport,.ag-body-vertical-scroll-viewport,.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport,.ag-virtual-list-viewport{flex:1 1 auto;height:100%;min-width:0;overflow:hidden;position:relative}.ag-viewport{position:relative}.ag-spanning-container{position:absolute;top:0;z-index:1}.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport{overflow-x:auto;-ms-overflow-style:none!important;scrollbar-width:none!important;&::-webkit-scrollbar{display:none!important}}.ag-body-viewport{display:flex;overflow-x:hidden;&:where(.ag-layout-normal){overflow-y:auto;-webkit-overflow-scrolling:touch}}.ag-floating-bottom-container,.ag-floating-top-container,.ag-sticky-bottom-container,.ag-sticky-top-container{min-height:1px}.ag-center-cols-viewport{min-height:100%;width:100%}.ag-body-horizontal-scroll-viewport{overflow-x:scroll}.ag-body-vertical-scroll-viewport{overflow-y:scroll}.ag-virtual-list-viewport{overflow:auto;width:100%}.ag-body-container,.ag-body-horizontal-scroll-container,.ag-body-vertical-scroll-container,.ag-center-cols-container,.ag-floating-bottom-container,.ag-floating-bottom-full-width-container,.ag-floating-top-container,.ag-full-width-container,.ag-header-container,.ag-pinned-left-cols-container,.ag-pinned-right-cols-container,.ag-sticky-bottom-container,.ag-sticky-top-container,.ag-virtual-list-container{position:relative}.ag-floating-bottom-container,.ag-floating-top-container,.ag-header-container,.ag-pinned-left-floating-bottom,.ag-pinned-left-floating-top,.ag-pinned-right-floating-bottom,.ag-pinned-right-floating-top,.ag-sticky-bottom-container,.ag-sticky-top-container{height:100%;white-space:nowrap}.ag-center-cols-container,.ag-pinned-right-cols-container{display:block}.ag-body-horizontal-scroll-container{height:100%}.ag-body-vertical-scroll-container{width:100%}.ag-floating-bottom-full-width-container,.ag-floating-top-full-width-container,.ag-full-width-container,.ag-sticky-bottom-full-width-container,.ag-sticky-top-full-width-container{pointer-events:none;position:absolute;top:0}:where(.ag-ltr) .ag-floating-bottom-full-width-container,:where(.ag-ltr) .ag-floating-top-full-width-container,:where(.ag-ltr) .ag-full-width-container,:where(.ag-ltr) .ag-sticky-bottom-full-width-container,:where(.ag-ltr) .ag-sticky-top-full-width-container{left:0}:where(.ag-rtl) .ag-floating-bottom-full-width-container,:where(.ag-rtl) .ag-floating-top-full-width-container,:where(.ag-rtl) .ag-full-width-container,:where(.ag-rtl) .ag-sticky-bottom-full-width-container,:where(.ag-rtl) .ag-sticky-top-full-width-container{right:0}.ag-full-width-container{width:100%}.ag-floating-bottom-full-width-container,.ag-floating-top-full-width-container{display:inline-block;height:100%;overflow:hidden;width:100%}.ag-virtual-list-container{overflow:hidden}.ag-body{display:flex;flex:1 1 auto;flex-direction:row!important;min-height:0;position:relative}.ag-body-horizontal-scroll,.ag-body-vertical-scroll{display:flex;min-height:0;min-width:0;position:relative;&:where(.ag-scrollbar-invisible){bottom:0;position:absolute;&:where(.ag-apple-scrollbar){opacity:0;transition:opacity .4s;visibility:hidden;&:where(.ag-scrollbar-scrolling,.ag-scrollbar-active){opacity:1;visibility:visible}}}}.ag-body-horizontal-scroll{width:100%;&:where(.ag-scrollbar-invisible){left:0;right:0}}.ag-body-vertical-scroll{height:100%;&:where(.ag-scrollbar-invisible){top:0;z-index:10}}:where(.ag-ltr) .ag-body-vertical-scroll{&:where(.ag-scrollbar-invisible){right:0}}:where(.ag-rtl) .ag-body-vertical-scroll{&:where(.ag-scrollbar-invisible){left:0}}.ag-force-vertical-scroll{overflow-y:scroll!important}.ag-horizontal-left-spacer,.ag-horizontal-right-spacer{height:100%;min-width:0;overflow-x:scroll;&:where(.ag-scroller-corner){overflow-x:hidden}}:where(.ag-row-animation) .ag-row{transition:transform .4s,top .4s,opacity .2s;&:where(.ag-after-created){transition:transform .4s,top .4s,height .4s,opacity .2s}}:where(.ag-row-animation.ag-prevent-animation) .ag-row{transition:none!important;&:where(.ag-row.ag-after-created){transition:none!important}}:where(.ag-row-no-animation) .ag-row{transition:none}.ag-row-loading{align-items:center;display:flex}.ag-row-position-absolute{position:absolute}.ag-row-position-relative{position:relative}.ag-full-width-row{overflow:hidden;pointer-events:all}.ag-row-inline-editing{z-index:1}.ag-row-dragging{z-index:2}.ag-stub-cell{align-items:center;display:flex}.ag-cell{display:inline-block;height:100%;position:absolute;white-space:nowrap;&:focus-visible{box-shadow:none}}.ag-cell-value{flex:1 1 auto}.ag-cell-value,.ag-group-value{overflow:hidden;text-overflow:ellipsis}.ag-cell-wrap-text{white-space:normal;word-break:break-word}:where(.ag-cell) .ag-icon{display:inline-block;vertical-align:middle}.ag-floating-top{display:flex;overflow:hidden;position:relative;white-space:nowrap;width:100%}:where(.ag-floating-top:not(.ag-invisible)){border-bottom:var(--ag-pinned-row-border)}.ag-floating-bottom{display:flex;overflow:hidden;position:relative;white-space:nowrap;width:100%}:where(.ag-floating-bottom:not(.ag-invisible)){border-top:var(--ag-pinned-row-border)}.ag-sticky-bottom,.ag-sticky-top{background-color:var(--ag-background-color);display:flex;height:0;overflow:hidden;position:absolute;width:100%;z-index:1}.ag-opacity-zero{opacity:0!important}.ag-cell-label-container{align-items:center;display:flex;flex-direction:row-reverse;height:100%;justify-content:space-between;width:100%}:where(.ag-right-aligned-header){.ag-cell-label-container{flex-direction:row}.ag-header-cell-text{text-align:end}}.ag-column-group-icons{display:block;>*{cursor:pointer}}:where(.ag-ltr){direction:ltr;.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row}}:where(.ag-rtl){direction:rtl;text-align:right;.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row-reverse}.ag-icon-contracted,.ag-icon-expanded,.ag-icon-tree-closed{display:block}}:where(.ag-rtl){.ag-icon-contracted,.ag-icon-expanded,.ag-icon-tree-closed{transform:rotate(180deg)}}:where(.ag-rtl){.ag-icon-contracted,.ag-icon-expanded,.ag-icon-tree-closed{transform:rotate(-180deg)}}.ag-measurement-container{height:0;overflow:hidden;visibility:hidden;width:0}.ag-measurement-element-border{display:inline-block;&:before{border-left:var(--ag-internal-measurement-border);content:"";display:block}}.ag-group{position:relative;width:100%}.ag-group-title-bar{align-items:center;display:flex;padding:var(--ag-spacing)}.ag-group-title{display:inline;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(.ag-group-title-bar) .ag-group-title{cursor:default}.ag-group-toolbar{align-items:center;display:flex;padding:var(--ag-spacing)}.ag-group-container{display:flex}.ag-disabled .ag-group-container{pointer-events:none}.ag-disabled-group-container,.ag-disabled-group-title-bar{opacity:.5}.ag-group-container-horizontal{flex-flow:row wrap}.ag-group-container-vertical{flex-direction:column}.ag-group-title-bar-icon{cursor:pointer;flex:none}:where(.ag-ltr) .ag-group-title-bar-icon{margin-right:var(--ag-spacing)}:where(.ag-rtl) .ag-group-title-bar-icon{margin-left:var(--ag-spacing)}:where(.ag-group-item-alignment-stretch) .ag-group-item{align-items:stretch}:where(.ag-group-item-alignment-start) .ag-group-item{align-items:flex-start}:where(.ag-group-item-alignment-end) .ag-group-item{align-items:flex-end}.ag-popup-child{top:0;z-index:5;&:where(:not(.ag-tooltip-custom)){box-shadow:var(--ag-popup-shadow)}}.ag-popup-editor{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ag-large-text-input{display:block}:where(.ag-ltr) .ag-row:not(.ag-row-level-0) .ag-pivot-leaf-group{margin-left:var(--ag-row-group-indent-size)}:where(.ag-rtl) .ag-row:not(.ag-row-level-0) .ag-pivot-leaf-group{margin-right:var(--ag-row-group-indent-size)}:where(.ag-ltr) .ag-row-group-leaf-indent{margin-left:calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size))}:where(.ag-rtl) .ag-row-group-leaf-indent{margin-right:calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size))}.ag-value-change-delta{padding:0 2px}.ag-value-change-delta-up{color:var(--ag-value-change-delta-up-color)}.ag-value-change-delta-down{color:var(--ag-value-change-delta-down-color)}.ag-value-change-value{background-color:transparent;border-radius:1px;padding-left:1px;padding-right:1px;transition:background-color 1s}.ag-value-change-value-highlight{background-color:var(--ag-value-change-value-highlight-background-color);transition:background-color .1s}.ag-cell-data-changed{background-color:var(--ag-value-change-value-highlight-background-color)!important}.ag-cell-data-changed-animation{background-color:transparent}.ag-cell-highlight{background-color:var(--ag-range-selection-highlight-color)!important}.ag-row,.ag-spanned-row{color:var(--ag-cell-text-color);font-family:var(--ag-cell-font-family);font-size:var(--ag-data-font-size);white-space:nowrap;--ag-internal-content-line-height:calc(min(var(--ag-row-height), var(--ag-line-height, 1000px)) - var(--ag-internal-row-border-width, 1px) - 2px)}.ag-row{background-color:var(--ag-background-color);border-bottom:var(--ag-row-border);height:var(--ag-row-height);width:100%}:where(.ag-body-vertical-content-no-gap>div>div>div,.ag-body-vertical-content-no-gap>div>div>div>div)>.ag-row-last{border-bottom-color:transparent}.ag-sticky-bottom{border-top:var(--ag-row-border);box-sizing:content-box!important}.ag-group-contracted,.ag-group-expanded{cursor:pointer}.ag-cell,.ag-full-width-row .ag-cell-wrapper.ag-row-group{border:1px solid transparent;line-height:var(--ag-internal-content-line-height);-webkit-font-smoothing:subpixel-antialiased}:where(.ag-ltr) .ag-cell{border-right:var(--ag-column-border)}:where(.ag-rtl) .ag-cell{border-left:var(--ag-column-border)}.ag-spanned-cell-wrapper{background-color:var(--ag-background-color);position:absolute}.ag-spanned-cell-wrapper>.ag-spanned-cell{display:block;position:relative}:where(.ag-ltr) :where(.ag-body-horizontal-content-no-gap) .ag-column-last{border-right-color:transparent}:where(.ag-rtl) :where(.ag-body-horizontal-content-no-gap) .ag-column-last{border-left-color:transparent}.ag-cell-wrapper{align-items:center;display:flex;>:where(:not(.ag-cell-value,.ag-group-value)){align-items:center;display:flex;height:var(--ag-internal-content-line-height)}&:where(.ag-row-group){align-items:flex-start}:where(.ag-full-width-row) &:where(.ag-row-group){align-items:center;height:100%}}:where(.ag-ltr) .ag-cell-wrapper{padding-left:calc(var(--ag-indentation-level)*var(--ag-row-group-indent-size))}:where(.ag-rtl) .ag-cell-wrapper{padding-right:calc(var(--ag-indentation-level)*var(--ag-row-group-indent-size))}:where(.ag-cell-wrap-text:not(.ag-cell-auto-height)) .ag-cell-wrapper{align-items:normal;height:100%;:where(.ag-cell-value){height:100%}}:where(.ag-ltr) .ag-row>.ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}:where(.ag-rtl) .ag-row>.ag-cell-wrapper.ag-row-group{padding-right:calc(var(--ag-cell-horizontal-padding) + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}.ag-cell-focus:not(.ag-cell-range-selected):focus-within,.ag-cell-range-single-cell,.ag-cell-range-single-cell.ag-cell-range-handle,.ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),.ag-context-menu-open .ag-full-width-row.ag-row-focus .ag-cell-wrapper.ag-row-group,.ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group{border:1px solid;border-color:var(--ag-range-selection-border-color);border-style:var(--ag-range-selection-border-style);outline:initial}.ag-full-width-row.ag-row-focus:focus{box-shadow:none}:where(.ag-ltr) .ag-group-contracted,:where(.ag-ltr) .ag-group-expanded,:where(.ag-ltr) .ag-row-drag,:where(.ag-ltr) .ag-selection-checkbox{margin-right:var(--ag-cell-widget-spacing)}:where(.ag-rtl) .ag-group-contracted,:where(.ag-rtl) .ag-group-expanded,:where(.ag-rtl) .ag-row-drag,:where(.ag-rtl) .ag-selection-checkbox{margin-left:var(--ag-cell-widget-spacing)}:where(.ag-ltr) .ag-group-child-count{margin-left:3px}:where(.ag-rtl) .ag-group-child-count{margin-right:3px}.ag-row-highlight-above:after,.ag-row-highlight-below:after{background-color:var(--ag-range-selection-border-color);content:"";height:1px;position:absolute;width:calc(100% - 1px)}:where(.ag-ltr) .ag-row-highlight-above:after,:where(.ag-ltr) .ag-row-highlight-below:after{left:1px}:where(.ag-rtl) .ag-row-highlight-above:after,:where(.ag-rtl) .ag-row-highlight-below:after{right:1px}.ag-row-highlight-above:after{top:0}.ag-row-highlight-below:after{bottom:0}.ag-row-odd{background-color:var(--ag-odd-row-background-color)}.ag-row-selected:before{background-color:var(--ag-selected-row-background-color);content:"";display:block;inset:0;pointer-events:none;position:absolute}.ag-row-hover.ag-full-width-row.ag-row-group:before,.ag-row-hover:not(.ag-full-width-row):before{background-color:var(--ag-row-hover-color);content:"";display:block;inset:0;pointer-events:none;position:absolute}.ag-row-hover.ag-row-selected:before{background-color:var(--ag-row-hover-color);background-image:linear-gradient(var(--ag-selected-row-background-color),var(--ag-selected-row-background-color))}.ag-row.ag-full-width-row.ag-row-group>*{position:relative}.ag-column-hover{background-color:var(--ag-column-hover-color)}.ag-header-range-highlight{background-color:var(--ag-range-header-highlight-color)}.ag-right-aligned-cell{font-variant-numeric:tabular-nums}:where(.ag-ltr) .ag-right-aligned-cell{text-align:right}:where(.ag-rtl) .ag-right-aligned-cell{text-align:left}.ag-right-aligned-cell .ag-cell-value,.ag-right-aligned-cell .ag-group-value{margin-left:auto}:where(.ag-ltr) .ag-cell:not(.ag-cell-inline-editing),:where(.ag-ltr) .ag-full-width-row .ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level));padding-right:calc(var(--ag-cell-horizontal-padding) - 1px)}:where(.ag-rtl) .ag-cell:not(.ag-cell-inline-editing),:where(.ag-rtl) .ag-full-width-row .ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px);padding-right:calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}.ag-row>.ag-cell-wrapper{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px);padding-right:calc(var(--ag-cell-horizontal-padding) - 1px)}.ag-row-dragging{cursor:move;opacity:.5}.ag-details-row{background-color:var(--ag-background-color);padding:calc(var(--ag-spacing)*3.75)}.ag-layout-auto-height,.ag-layout-print{.ag-center-cols-container,.ag-center-cols-viewport{min-height:150px}}.ag-overlay-loading-wrapper{background-color:var(--ag-modal-overlay-background-color)}.ag-skeleton-container{align-content:center;height:100%;width:100%}.ag-skeleton-effect{animation:ag-skeleton-loading 1.5s ease-in-out .5s infinite;background-color:var(--ag-row-loading-skeleton-effect-color);border-radius:.25rem;height:1em;width:100%}:where(.ag-ltr) .ag-right-aligned-cell .ag-skeleton-effect{margin-left:auto}:where(.ag-rtl) .ag-right-aligned-cell .ag-skeleton-effect{margin-right:auto}@keyframes ag-skeleton-loading{0%{opacity:1}50%{opacity:.4}to{opacity:1}}.ag-loading{align-items:center;display:flex;height:100%}:where(.ag-ltr) .ag-loading{padding-left:var(--ag-cell-horizontal-padding)}:where(.ag-rtl) .ag-loading{padding-right:var(--ag-cell-horizontal-padding)}:where(.ag-ltr) .ag-loading-icon{padding-right:var(--ag-cell-widget-spacing)}:where(.ag-rtl) .ag-loading-icon{padding-left:var(--ag-cell-widget-spacing)}.ag-icon-loading{animation-duration:1s;animation-iteration-count:infinite;animation-name:spin;animation-timing-function:linear}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ag-input-wrapper,.ag-picker-field-wrapper{align-items:center;display:flex;flex:1 1 auto;line-height:normal;position:relative}.ag-input-field{align-items:center;display:flex;flex-direction:row}.ag-input-field-input:where(:not([type=checkbox],[type=radio])){flex:1 1 auto;min-width:0;width:100%}.ag-header{background-color:var(--ag-header-background-color);border-bottom:var(--ag-header-row-border);color:var(--ag-header-text-color);display:flex;font-family:var(--ag-header-font-family);font-size:var(--ag-header-font-size);font-weight:var(--ag-header-font-weight);overflow:hidden;white-space:nowrap;width:100%}.ag-header-row{height:var(--ag-header-height);position:absolute}.ag-floating-filter-button-button,.ag-header-cell-filter-button,.ag-header-cell-menu-button,.ag-header-expand-icon,.ag-panel-title-bar-button,:where(.ag-header-cell-sortable) .ag-header-cell-label{cursor:pointer}:where(.ag-ltr) .ag-header-expand-icon{margin-left:4px}:where(.ag-rtl) .ag-header-expand-icon{margin-right:4px}.ag-header-row:where(:not(:first-child)){:where(.ag-header-cell:not(.ag-header-span-height.ag-header-span-total,.ag-header-parent-hidden),.ag-header-group-cell.ag-header-group-cell-with-group){border-top:var(--ag-header-row-border)}}.ag-header-row:where(:not(.ag-header-row-column-group)){overflow:hidden}:where(.ag-header.ag-header-allow-overflow) .ag-header-row{overflow:visible}.ag-header-cell{display:inline-flex;overflow:hidden}.ag-header-group-cell{contain:paint;display:flex}.ag-header-cell,.ag-header-group-cell{align-items:center;gap:var(--ag-cell-widget-spacing);height:100%;padding:0 var(--ag-cell-horizontal-padding);position:absolute}@property --ag-internal-moving-color{syntax:"<color>";inherits:false;initial-value:transparent}@property --ag-internal-hover-color{syntax:"<color>";inherits:false;initial-value:transparent}.ag-header-cell:where(:not(.ag-floating-filter)),.ag-header-group-cell{&:before{background-image:linear-gradient(var(--ag-internal-hover-color),var(--ag-internal-hover-color)),linear-gradient(var(--ag-internal-moving-color),var(--ag-internal-moving-color));content:"";inset:0;position:absolute;--ag-internal-moving-color:transparent;--ag-internal-hover-color:transparent;transition:--ag-internal-moving-color var(--ag-header-cell-background-transition-duration),--ag-internal-hover-color var(--ag-header-cell-background-transition-duration)}&:where(:hover):before{--ag-internal-hover-color:var(--ag-header-cell-hover-background-color)}&:where(.ag-header-cell-moving):before{--ag-internal-moving-color:var(--ag-header-cell-moving-background-color);--ag-internal-hover-color:var(--ag-header-cell-hover-background-color)}}:where(.ag-header-cell:not(.ag-floating-filter) *,.ag-header-group-cell *){position:relative;z-index:1}.ag-header-cell-menu-button:where(:not(.ag-header-menu-always-show)){opacity:0;transition:opacity .2s}.ag-header-cell-filter-button,:where(.ag-header-cell.ag-header-active) .ag-header-cell-menu-button{opacity:1}.ag-header-cell-label,.ag-header-group-cell-label{align-items:center;align-self:stretch;display:flex;flex:1 1 auto;overflow:hidden;padding:5px 0}:where(.ag-ltr) .ag-sort-indicator-icon{padding-left:var(--ag-spacing)}:where(.ag-rtl) .ag-sort-indicator-icon{padding-right:var(--ag-spacing)}.ag-header-cell-label{text-overflow:ellipsis}.ag-header-group-cell-label.ag-sticky-label{flex:none;max-width:100%;overflow:visible;position:sticky}:where(.ag-ltr) .ag-header-group-cell-label.ag-sticky-label{left:var(--ag-cell-horizontal-padding)}:where(.ag-rtl) .ag-header-group-cell-label.ag-sticky-label{right:var(--ag-cell-horizontal-padding)}.ag-header-cell-text,.ag-header-group-text{overflow:hidden;text-overflow:ellipsis}.ag-header-cell-text{word-break:break-word}.ag-header-cell-comp-wrapper{width:100%}:where(.ag-header-group-cell) .ag-header-cell-comp-wrapper{display:flex}:where(.ag-header-cell:not(.ag-header-cell-auto-height)) .ag-header-cell-comp-wrapper{align-items:center;display:flex;height:100%}.ag-header-cell-wrap-text .ag-header-cell-comp-wrapper{white-space:normal}.ag-header-cell-comp-wrapper-limited-height>*{overflow:hidden}:where(.ag-right-aligned-header) .ag-header-cell-label{flex-direction:row-reverse}:where(.ag-ltr) :where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-label-icon,.ag-header-menu-icon{margin-left:var(--ag-spacing)}}:where(.ag-rtl) :where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-label-icon,.ag-header-menu-icon{margin-right:var(--ag-spacing)}}:where(.ag-ltr) :where(.ag-header-cell.ag-right-aligned-header){.ag-header-label-icon,.ag-header-menu-icon{margin-right:var(--ag-spacing)}}:where(.ag-rtl) :where(.ag-header-cell.ag-right-aligned-header){.ag-header-label-icon,.ag-header-menu-icon{margin-left:var(--ag-spacing)}}.ag-header-cell:after,.ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{content:"";height:var(--ag-header-column-border-height);position:absolute;top:calc(50% - var(--ag-header-column-border-height)*.5);z-index:1}:where(.ag-ltr) .ag-header-cell:after,:where(.ag-ltr) .ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{border-right:var(--ag-header-column-border);right:0}:where(.ag-rtl) .ag-header-cell:after,:where(.ag-rtl) .ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{border-left:var(--ag-header-column-border);left:0}.ag-header-highlight-after:after,.ag-header-highlight-before:after{background-color:var(--ag-accent-color);content:"";height:100%;position:absolute;width:1px}:where(.ag-ltr) .ag-header-highlight-before:after{left:0}:where(.ag-rtl) .ag-header-highlight-before:after{right:0}:where(.ag-ltr) .ag-header-highlight-after:after{right:0;:where(.ag-pinned-left-header) &{right:1px}}:where(.ag-rtl) .ag-header-highlight-after:after{left:0;:where(.ag-pinned-left-header) &{left:1px}}.ag-header-cell-resize{align-items:center;cursor:ew-resize;display:flex;height:100%;position:absolute;top:0;width:8px;z-index:2;&:after{background-color:var(--ag-header-column-resize-handle-color);content:"";height:var(--ag-header-column-resize-handle-height);position:absolute;top:calc(50% - var(--ag-header-column-resize-handle-height)*.5);width:var(--ag-header-column-resize-handle-width);z-index:1}}:where(.ag-ltr) .ag-header-cell-resize{right:-3px;&:after{left:calc(50% - var(--ag-header-column-resize-handle-width))}}:where(.ag-rtl) .ag-header-cell-resize{left:-3px;&:after{right:calc(50% - var(--ag-header-column-resize-handle-width))}}:where(.ag-header-cell.ag-header-span-height) .ag-header-cell-resize:after{height:calc(100% - var(--ag-spacing)*4);top:calc(var(--ag-spacing)*2)}.ag-header-group-cell-no-group:where(.ag-header-span-height){display:none}.ag-sort-indicator-container{display:flex;gap:var(--ag-spacing)}.ag-layout-print{&.ag-body{display:block;height:unset}&.ag-root-wrapper{display:inline-block}.ag-body-horizontal-scroll,.ag-body-vertical-scroll{display:none}&.ag-force-vertical-scroll{overflow-y:visible!important}}@media print{.ag-root-wrapper.ag-layout-print{display:table;.ag-body-horizontal-scroll-viewport,.ag-body-viewport,.ag-center-cols-container,.ag-center-cols-viewport,.ag-root,.ag-root-wrapper-body,.ag-virtual-list-viewport{display:block!important;height:auto!important;overflow:hidden!important}.ag-cell,.ag-row{-moz-column-break-inside:avoid;break-inside:avoid}}}ag-grid,ag-grid-angular{display:block}.ag-chart,.ag-dnd-ghost,.ag-popup,.ag-root-wrapper{cursor:default;line-height:normal;white-space:normal;-webkit-font-smoothing:antialiased;background-color:var(--ag-background-color);color:var(--ag-text-color);color-scheme:var(--ag-browser-color-scheme);font-family:var(--ag-font-family);font-size:var(--ag-font-size);--ag-indentation-level:0}.ag-root-wrapper{border:var(--ag-wrapper-border);border-radius:var(--ag-wrapper-border-radius);display:flex;flex-direction:column;overflow:hidden;position:relative;&.ag-layout-normal{height:100%}}.ag-root-wrapper-body{display:flex;flex-direction:row;&.ag-layout-normal{flex:1 1 auto;height:0;min-height:0}}.ag-root{display:flex;flex-direction:column;position:relative;&.ag-layout-auto-height,&.ag-layout-normal{flex:1 1 auto;overflow:hidden;width:0}&.ag-layout-normal{height:100%}}.ag-drag-handle{color:var(--ag-drag-handle-color);cursor:grab}.ag-list-item,.ag-virtual-list-item{height:var(--ag-list-item-height)}.ag-virtual-list-item{position:absolute;width:100%}.ag-select-list{background-color:var(--ag-picker-list-background-color);border:var(--ag-picker-list-border);border-radius:var(--ag-border-radius);box-shadow:var(--ag-dropdown-shadow);overflow:hidden auto}.ag-list-item{align-items:center;display:flex;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;&.ag-active-item{background-color:var(--ag-row-hover-color)}}.ag-select-list-item{cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none;:where(span){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}:where(.ag-ltr) .ag-select-list-item{padding-left:calc(var(--ag-cell-horizontal-padding)/2)}:where(.ag-rtl) .ag-select-list-item{padding-right:calc(var(--ag-cell-horizontal-padding)/2)}.ag-list-item-hovered:after{background-color:var(--ag-accent-color);content:"";height:1px;left:0;position:absolute;right:0}.ag-item-highlight-top:after{top:0}.ag-item-highlight-bottom:after{bottom:0}:where(.ag-icon):before{align-items:center;background-color:currentcolor;color:inherit;content:"";display:flex;font-family:inherit;font-size:var(--ag-icon-size);font-style:normal;font-variant:normal;height:var(--ag-icon-size);justify-content:center;line-height:var(--ag-icon-size);-webkit-mask-size:contain;mask-size:contain;text-transform:none;width:var(--ag-icon-size)}.ag-icon{background-position:50%;background-repeat:no-repeat;background-size:contain;color:var(--ag-icon-color);display:block;height:var(--ag-icon-size);position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:var(--ag-icon-size)}.ag-column-select-column-group-readonly,.ag-column-select-column-readonly,.ag-disabled,[disabled]{.ag-icon{opacity:.5}&.ag-icon-grip{opacity:.35}}.ag-column-select-column-readonly{&.ag-icon-grip,.ag-icon-grip{opacity:.35}}.ag-chart-menu-icon,.ag-chart-settings-next,.ag-chart-settings-prev,.ag-column-group-icons,.ag-column-select-header-icon,.ag-filter-toolpanel-expand,.ag-floating-filter-button-button,.ag-group-title-bar-icon,.ag-header-cell-filter-button,.ag-header-cell-menu-button,.ag-header-expand-icon,.ag-panel-title-bar-button,.ag-panel-title-bar-button-icon,.ag-set-filter-group-icons,:where(.ag-group-contracted) .ag-icon,:where(.ag-group-expanded) .ag-icon{background-color:var(--ag-icon-button-background-color);border-radius:var(--ag-icon-button-border-radius);box-shadow:0 0 0 var(--ag-icon-button-background-spread) var(--ag-icon-button-background-color);color:var(--ag-icon-button-color);&:hover{background-color:var(--ag-icon-button-hover-background-color);box-shadow:0 0 0 var(--ag-icon-button-background-spread) var(--ag-icon-button-hover-background-color);color:var(--ag-icon-button-hover-color)}}.ag-filter-active{background-image:linear-gradient(var(--ag-icon-button-active-background-color),var(--ag-icon-button-active-background-color));border-radius:1px;outline:solid var(--ag-icon-button-background-spread) var(--ag-icon-button-active-background-color);position:relative;&:after{background-color:var(--ag-accent-color);border-radius:50%;content:"";height:6px;position:absolute;top:-1px;width:6px}:where(.ag-icon-filter){clip-path:path("M8,0C8,4.415 11.585,8 16,8L16,16L0,16L0,0L8,0Z");color:var(--ag-icon-button-active-color)}}:where(.ag-ltr) .ag-filter-active{&:after{right:-1px}}:where(.ag-rtl) .ag-filter-active{&:after{left:-1px}}.ag-menu{background-color:var(--ag-menu-background-color);border:var(--ag-menu-border);border-radius:var(--ag-border-radius);box-shadow:var(--ag-menu-shadow);color:var(--ag-menu-text-color);max-height:100%;overflow-y:auto}.ag-menu,.ag-resizer{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.ag-resizer{pointer-events:none;z-index:1}:where(.ag-resizer){&.ag-resizer-topLeft{cursor:nwse-resize;height:5px;left:0;top:0;width:5px}&.ag-resizer-top{cursor:ns-resize;height:5px;left:5px;right:5px;top:0}&.ag-resizer-topRight{cursor:nesw-resize;height:5px;right:0;top:0;width:5px}&.ag-resizer-right{bottom:5px;cursor:ew-resize;right:0;top:5px;width:5px}&.ag-resizer-bottomRight{bottom:0;cursor:nwse-resize;height:5px;right:0;width:5px}&.ag-resizer-bottom{bottom:0;cursor:ns-resize;height:5px;left:5px;right:5px}&.ag-resizer-bottomLeft{bottom:0;cursor:nesw-resize;height:5px;left:0;width:5px}&.ag-resizer-left{bottom:5px;cursor:ew-resize;left:0;top:5px;width:5px}}'
), ko, Ho, br = typeof window != "object" || !((Ho = (ko = window == null ? void 0 : window.document) == null ? void 0 : ko.fonts) != null && Ho.forEach), Nt = (e, t, s, n, r, o) => {
  if (br)
    return;
  n && (e = `@layer ${CSS.escape(n)} { ${e} }`);
  let i = Bt.map.get(t);
  if (i || (i = [], Bt.map.set(t, i)), i.find((d) => d.css === e))
    return;
  const a = document.createElement("style");
  o && a.setAttribute("nonce", o), a.dataset.agGlobalCss = s, a.textContent = e;
  const l = { css: e, el: a, priority: r };
  let c;
  for (const d of i) {
    if (d.priority > r)
      break;
    c = d;
  }
  if (c) {
    c.el.insertAdjacentElement("afterend", a);
    const d = i.indexOf(c);
    i.splice(d + 1, 0, l);
  } else
    t.insertBefore(a, t.querySelector(":not(title, meta)")), i.push(l);
}, aa = (e, t, s) => {
  Nt(Tg, e, "core", t, 0, s), Array.from(gd()).sort((n, r) => n.moduleName.localeCompare(r.moduleName)).forEach(
    (n) => {
      var r;
      return (r = n.css) == null ? void 0 : r.forEach(
        (o) => Nt(o, e, `module-${n.moduleName}`, t, 0, s)
      );
    }
  );
}, Mg = (e) => {
  Bt.grids.add(e);
}, Ig = (e) => {
  if (Bt.grids.delete(e), Bt.grids.size === 0) {
    Bt.map = /* @__PURE__ */ new WeakMap();
    for (const t of document.head.querySelectorAll("style[data-ag-global-css]"))
      t.remove();
  }
}, Co, Bt = (Co = typeof window == "object" ? window : {}).agStyleInjectionState ?? (Co.agStyleInjectionState = {
  map: /* @__PURE__ */ new WeakMap(),
  grids: /* @__PURE__ */ new Set()
}), dt = (e) => new la(e), gt = "$default", Lg = 0, la = class {
  constructor({ feature: e, params: t, modeParams: s = {}, css: n, cssImports: r }) {
    this.feature = e, this.css = n, this.cssImports = r, this.modeParams = {
      // NOTE: it's important that default is defined first, putting it
      // first in iteration order, because when merging params the default
      // params override any prior modal params, so modal params in this
      // part need to come after default params to prevent them from being
      // immediately overridden.
      [gt]: {
        ...s[gt] ?? {},
        ...t ?? {}
      },
      ...s
    };
  }
  use(e, t, s) {
    let n = this._inject;
    if (n == null) {
      let { css: r } = this;
      if (r) {
        const o = `ag-theme-${this.feature ?? "part"}-${++Lg}`;
        typeof r == "function" && (r = r()), r = `:where(.${o}) {
${r}
}
`;
        for (const i of this.cssImports ?? [])
          r = `@import url(${JSON.stringify(i)});
${r}`;
        n = { css: r, class: o };
      } else
        n = !1;
      this._inject = n;
    }
    return n && e && Nt(n.css, e, n.class, t, 1, s), n ? n.class : !1;
  }
}, Ag = (e) => e.replace(/[A-Z]/g, (t) => `-${t}`).toLowerCase(), ca = (e) => `--ag-${Ag(e)}`, nt = (e) => `var(${ca(e)})`, kg = (e, t, s) => Math.max(t, Math.min(s, e)), Hg = (e) => {
  const t = /* @__PURE__ */ new Map();
  return (s) => {
    const n = s;
    return t.has(n) || t.set(n, e(s)), t.get(n);
  };
}, et = (e) => ({ ref: "accentColor", mix: e }), Ye = (e) => ({ ref: "foregroundColor", mix: e }), Qe = (e) => ({
  ref: "foregroundColor",
  mix: e,
  onto: "backgroundColor"
}), Og = (e) => ({
  ref: "foregroundColor",
  mix: e,
  onto: "headerBackgroundColor"
}), $e = { ref: "backgroundColor" }, Jt = { ref: "foregroundColor" }, ft = { ref: "accentColor" }, Qs = {
  backgroundColor: "#fff",
  foregroundColor: "#181d1f",
  borderColor: Ye(0.15),
  chromeBackgroundColor: Qe(0.02),
  browserColorScheme: "light"
}, Gg = {
  ...Qs,
  textColor: Jt,
  accentColor: "#2196f3",
  invalidColor: "#e02525",
  wrapperBorder: !0,
  rowBorder: !0,
  headerRowBorder: !0,
  footerRowBorder: {
    ref: "rowBorder"
  },
  columnBorder: {
    style: "solid",
    width: 1,
    color: "transparent"
  },
  headerColumnBorder: !1,
  headerColumnBorderHeight: "100%",
  pinnedColumnBorder: !0,
  pinnedRowBorder: !0,
  sidePanelBorder: !0,
  sideBarPanelWidth: 250,
  sideBarBackgroundColor: {
    ref: "chromeBackgroundColor"
  },
  sideButtonBarBackgroundColor: {
    ref: "sideBarBackgroundColor"
  },
  sideButtonBarTopPadding: 0,
  sideButtonSelectedUnderlineWidth: 2,
  sideButtonSelectedUnderlineColor: "transparent",
  sideButtonSelectedUnderlineTransitionDuration: 0,
  sideButtonBackgroundColor: "transparent",
  sideButtonTextColor: { ref: "textColor" },
  sideButtonHoverBackgroundColor: { ref: "sideButtonBackgroundColor" },
  sideButtonHoverTextColor: { ref: "sideButtonTextColor" },
  sideButtonSelectedBackgroundColor: $e,
  sideButtonSelectedTextColor: { ref: "sideButtonTextColor" },
  sideButtonBorder: "solid 1px transparent",
  sideButtonSelectedBorder: !0,
  sideButtonLeftPadding: { ref: "spacing" },
  sideButtonRightPadding: { ref: "spacing" },
  sideButtonVerticalPadding: { calc: "spacing * 3" },
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen-Sans",
    "Ubuntu",
    "Cantarell",
    "Helvetica Neue",
    "sans-serif"
  ],
  headerBackgroundColor: {
    ref: "chromeBackgroundColor"
  },
  headerFontFamily: {
    ref: "fontFamily"
  },
  cellFontFamily: {
    ref: "fontFamily"
  },
  headerFontWeight: 500,
  headerFontSize: {
    ref: "fontSize"
  },
  dataFontSize: {
    ref: "fontSize"
  },
  headerTextColor: {
    ref: "textColor"
  },
  headerCellHoverBackgroundColor: "transparent",
  headerCellMovingBackgroundColor: { ref: "headerCellHoverBackgroundColor" },
  headerCellBackgroundTransitionDuration: "0.2s",
  cellTextColor: {
    ref: "textColor"
  },
  subtleTextColor: {
    ref: "textColor",
    mix: 0.5
  },
  rangeSelectionBorderStyle: "solid",
  rangeSelectionBorderColor: ft,
  rangeSelectionBackgroundColor: et(0.2),
  rangeSelectionChartBackgroundColor: "#0058FF1A",
  rangeSelectionChartCategoryBackgroundColor: "#00FF841A",
  rangeSelectionHighlightColor: et(0.5),
  rangeHeaderHighlightColor: Og(0.08),
  rowNumbersSelectedColor: et(0.5),
  rowHoverColor: et(0.08),
  columnHoverColor: et(0.05),
  selectedRowBackgroundColor: et(0.12),
  modalOverlayBackgroundColor: {
    ref: "backgroundColor",
    mix: 0.66
  },
  oddRowBackgroundColor: $e,
  borderRadius: 4,
  wrapperBorderRadius: 8,
  cellHorizontalPadding: {
    calc: "spacing * 2 * cellHorizontalPaddingScale"
  },
  cellWidgetSpacing: {
    calc: "spacing * 1.5"
  },
  cellHorizontalPaddingScale: 1,
  rowGroupIndentSize: {
    calc: "cellWidgetSpacing + iconSize"
  },
  valueChangeDeltaUpColor: "#43a047",
  valueChangeDeltaDownColor: "#e53935",
  valueChangeValueHighlightBackgroundColor: "#16a08580",
  spacing: 8,
  fontSize: 14,
  rowHeight: {
    calc: "max(iconSize, dataFontSize) + spacing * 3.25 * rowVerticalPaddingScale"
  },
  rowVerticalPaddingScale: 1,
  headerHeight: {
    calc: "max(iconSize, dataFontSize) + spacing * 4 * headerVerticalPaddingScale"
  },
  headerVerticalPaddingScale: 1,
  popupShadow: "0 0 16px #00000026",
  cardShadow: "0 1px 4px 1px #00000018",
  dropdownShadow: { ref: "cardShadow" },
  dragAndDropImageBackgroundColor: $e,
  dragAndDropImageBorder: !0,
  dragAndDropImageShadow: {
    ref: "popupShadow"
  },
  dragHandleColor: Ye(0.7),
  focusShadow: {
    spread: 3,
    color: et(0.5)
  },
  headerColumnResizeHandleHeight: "30%",
  headerColumnResizeHandleWidth: 2,
  headerColumnResizeHandleColor: {
    ref: "borderColor"
  },
  widgetContainerHorizontalPadding: {
    calc: "spacing * 1.5"
  },
  widgetContainerVerticalPadding: {
    calc: "spacing * 1.5"
  },
  widgetHorizontalSpacing: {
    calc: "spacing * 1.5"
  },
  widgetVerticalSpacing: {
    ref: "spacing"
  },
  listItemHeight: {
    calc: "max(iconSize, dataFontSize) + widgetVerticalSpacing"
  },
  iconSize: 16,
  iconColor: "inherit",
  iconButtonColor: { ref: "iconColor" },
  iconButtonBackgroundColor: "transparent",
  iconButtonBackgroundSpread: 4,
  iconButtonBorderRadius: 1,
  iconButtonHoverColor: { ref: "iconButtonColor" },
  iconButtonHoverBackgroundColor: Ye(0.1),
  iconButtonActiveColor: ft,
  iconButtonActiveBackgroundColor: et(0.28),
  iconButtonActiveIndicatorColor: ft,
  toggleButtonWidth: 28,
  toggleButtonHeight: 18,
  toggleButtonOnBackgroundColor: ft,
  toggleButtonOffBackgroundColor: Qe(0.3),
  toggleButtonSwitchBackgroundColor: $e,
  toggleButtonSwitchInset: 2,
  menuBorder: {
    color: Ye(0.2)
  },
  menuBackgroundColor: Qe(0.03),
  menuTextColor: Qe(0.95),
  menuShadow: {
    ref: "popupShadow"
  },
  menuSeparatorColor: {
    ref: "borderColor"
  },
  setFilterIndentSize: {
    ref: "iconSize"
  },
  chartMenuPanelWidth: 260,
  chartMenuLabelColor: Ye(0.8),
  dialogShadow: {
    ref: "popupShadow"
  },
  cellEditingBorder: {
    color: ft
  },
  cellEditingShadow: { ref: "cardShadow" },
  dialogBorder: {
    color: Ye(0.2)
  },
  panelBackgroundColor: $e,
  panelTitleBarBackgroundColor: {
    ref: "headerBackgroundColor"
  },
  panelTitleBarIconColor: {
    ref: "headerTextColor"
  },
  panelTitleBarTextColor: {
    ref: "headerTextColor"
  },
  panelTitleBarFontWeight: {
    ref: "headerFontWeight"
  },
  panelTitleBarBorder: !0,
  columnSelectIndentSize: {
    ref: "iconSize"
  },
  toolPanelSeparatorBorder: !0,
  tooltipBackgroundColor: {
    ref: "chromeBackgroundColor"
  },
  tooltipTextColor: {
    ref: "textColor"
  },
  tooltipBorder: !0,
  columnDropCellBackgroundColor: Ye(0.07),
  columnDropCellTextColor: {
    ref: "textColor"
  },
  columnDropCellDragHandleColor: {
    ref: "textColor"
  },
  columnDropCellBorder: {
    color: Ye(0.13)
  },
  selectCellBackgroundColor: Ye(0.07),
  selectCellBorder: {
    color: Ye(0.13)
  },
  advancedFilterBuilderButtonBarBorder: !0,
  advancedFilterBuilderIndentSize: {
    calc: "spacing * 2 + iconSize"
  },
  advancedFilterBuilderJoinPillColor: "#f08e8d",
  advancedFilterBuilderColumnPillColor: "#a6e194",
  advancedFilterBuilderOptionPillColor: "#f3c08b",
  advancedFilterBuilderValuePillColor: "#85c0e4",
  findMatchColor: Jt,
  findMatchBackgroundColor: "#ffff00",
  findActiveMatchColor: Jt,
  findActiveMatchBackgroundColor: "#ffa500",
  filterToolPanelGroupIndent: {
    ref: "spacing"
  },
  rowLoadingSkeletonEffectColor: Ye(0.15),
  statusBarLabelColor: Jt,
  statusBarLabelFontWeight: 500,
  statusBarValueColor: Jt,
  statusBarValueFontWeight: 500,
  pinnedSourceRowTextColor: {
    ref: "textColor"
  },
  pinnedSourceRowBackgroundColor: {
    ref: "backgroundColor"
  },
  pinnedSourceRowFontWeight: 600,
  pinnedRowFontWeight: 600,
  pinnedRowBackgroundColor: {
    ref: "backgroundColor"
  },
  pinnedRowTextColor: {
    ref: "textColor"
  }
}, Bg = (
  /*css*/
  ":where(.ag-button){background:none;border:none;color:inherit;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0;text-indent:inherit;text-shadow:inherit;text-transform:inherit;word-spacing:inherit;&:disabled{cursor:default}&:focus-visible{box-shadow:var(--ag-focus-shadow);outline:none}}.ag-standard-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--ag-button-background-color);border:var(--ag-button-border);border-radius:var(--ag-button-border-radius);color:var(--ag-button-text-color);cursor:pointer;font-weight:var(--ag-button-font-weight);padding:var(--ag-button-vertical-padding) var(--ag-button-horizontal-padding);&:hover{background-color:var(--ag-button-hover-background-color);border:var(--ag-button-hover-border);color:var(--ag-button-hover-text-color)}&:active{background-color:var(--ag-button-active-background-color);border:var(--ag-button-active-border);color:var(--ag-button-active-text-color)}&:disabled{background-color:var(--ag-button-disabled-background-color);border:var(--ag-button-disabled-border);color:var(--ag-button-disabled-text-color)}}"
), Wg = {
  buttonTextColor: "inherit",
  buttonFontWeight: "normal",
  buttonBackgroundColor: "transparent",
  buttonBorder: !1,
  buttonBorderRadius: { ref: "borderRadius" },
  buttonHorizontalPadding: { calc: "spacing * 2" },
  buttonVerticalPadding: { ref: "spacing" },
  buttonHoverTextColor: { ref: "buttonTextColor" },
  buttonHoverBackgroundColor: { ref: "buttonBackgroundColor" },
  buttonHoverBorder: { ref: "buttonBorder" },
  buttonActiveTextColor: { ref: "buttonHoverTextColor" },
  buttonActiveBackgroundColor: { ref: "buttonHoverBackgroundColor" },
  buttonActiveBorder: { ref: "buttonHoverBorder" },
  buttonDisabledTextColor: { ref: "inputDisabledTextColor" },
  buttonDisabledBackgroundColor: { ref: "inputDisabledBackgroundColor" },
  buttonDisabledBorder: { ref: "inputDisabledBorder" }
}, Ng = () => dt({
  feature: "buttonStyle",
  params: {
    ...Wg,
    buttonBackgroundColor: $e,
    buttonBorder: !0,
    buttonHoverBackgroundColor: { ref: "rowHoverColor" },
    buttonActiveBorder: { color: ft }
  },
  css: Bg
}), Vg = /* @__PURE__ */ Ng(), _g = (
  /*css*/
  ".ag-column-drop-vertical-empty-message{align-items:center;border:1px dashed;border-color:var(--ag-border-color);display:flex;inset:0;justify-content:center;margin:calc(var(--ag-spacing)*1.5) calc(var(--ag-spacing)*2);overflow:hidden;padding:calc(var(--ag-spacing)*2);position:absolute}"
), zg = () => dt({
  feature: "columnDropStyle",
  css: _g
}), da = /* @__PURE__ */ zg(), $g = [
  "colorScheme",
  "color",
  "length",
  "scale",
  "borderStyle",
  "border",
  "shadow",
  "image",
  "fontFamily",
  "fontWeight",
  "duration"
], jg = Hg((e) => (e = e.toLowerCase(), $g.find((t) => e.endsWith(t.toLowerCase())) ?? "length")), un = (e) => typeof e == "object" && (e != null && e.ref) ? nt(e.ref) : typeof e == "string" ? e : typeof e == "number" ? String(e) : !1, yr = (e) => {
  if (typeof e == "string")
    return e;
  if (e && "ref" in e) {
    const t = nt(e.ref);
    return e.mix == null ? t : `color-mix(in srgb, ${e.onto ? nt(e.onto) : "transparent"}, ${t} ${kg(e.mix * 100, 0, 100)}%)`;
  }
  return !1;
}, Ug = un, kt = (e) => typeof e == "string" ? e : typeof e == "number" ? `${e}px` : e && "calc" in e ? `calc(${e.calc.replace(/ ?[*/+] ?/g, " $& ").replace(/-?\b[a-z][a-z0-9]*\b(?![-(])/gi, (s) => s[0] === "-" ? s : ` ${nt(s)} `)})` : e && "ref" in e ? nt(e.ref) : !1, Kg = un, Yg = (e, t) => typeof e == "string" ? e : e === !0 ? "solid 1px var(--ag-border-color)" : e === !1 ? t === "columnBorder" ? "solid 1px transparent" : "none" : e && "ref" in e ? nt(e.ref) : ua(e.style ?? "solid") + " " + kt(e.width ?? 1) + " " + yr(e.color ?? { ref: "borderColor" }), Zg = (e) => typeof e == "string" ? e : e === !1 ? "none" : e && "ref" in e ? nt(e.ref) : [
  kt(e.offsetX ?? 0),
  kt(e.offsetY ?? 0),
  kt(e.radius ?? 0),
  kt(e.spread ?? 0),
  yr(e.color ?? { ref: "foregroundColor" })
].join(" "), ua = un, ha = (e) => typeof e == "string" ? e.includes(",") ? e : mo(e) : e && "googleFont" in e ? ha(e.googleFont) : e && "ref" in e ? nt(e.ref) : Array.isArray(e) ? e.map((t) => (typeof t == "object" && "googleFont" in t && (t = t.googleFont), mo(t))).join(", ") : !1, mo = (e) => (
  // don't quote var() expressions or quote safe identifier names, so that
  // people can specify fonts like sans-serif which are keywords not strings,
  // or var(--my-var)
  /^[\w-]+$|\w\(/.test(e) ? e : JSON.stringify(e)
), qg = un, ga = (e) => typeof e == "string" ? e : e && "url" in e ? `url(${JSON.stringify(e.url)})` : e && "svg" in e ? ga({ url: `data:image/svg+xml,${encodeURIComponent(e.svg)}` }) : e && "ref" in e ? nt(e.ref) : !1, Xg = (e, t) => typeof e == "string" ? e : typeof e == "number" ? (e >= 10 && je(104, { value: e, param: t }), `${e}s`) : e && "ref" in e ? nt(e.ref) : !1, Qg = {
  color: yr,
  colorScheme: Ug,
  length: kt,
  scale: Kg,
  border: Yg,
  borderStyle: ua,
  shadow: Zg,
  image: ga,
  fontFamily: ha,
  fontWeight: qg,
  duration: Xg
}, Jg = (e, t) => {
  const s = jg(e);
  return Qg[s](t, e);
}, ef = () => new fa().withPart(Vg).withPart(da), fa = class pa {
  constructor(t = []) {
    this.parts = t;
  }
  withPart(t) {
    return typeof t == "function" && (t = t()), t instanceof la ? new pa([...this.parts, t]) : (ss(259, { part: t }, "Invalid part"), this);
  }
  withoutPart(t) {
    return this.withPart(dt({ feature: t }));
  }
  withParams(t, s = gt) {
    return this.withPart(
      dt({
        modeParams: { [s]: t }
      })
    );
  }
  /**
   * Called by a grid instance when it starts using the theme. This installs
   * the theme's parts into document head, or the shadow DOM if the provided
   * container is within a shadow root.
   */
  _startUse({ styleContainer: t, cssLayer: s, nonce: n, loadThemeGoogleFonts: r }) {
    if (br)
      return;
    sf(), aa(t, s, n);
    const o = tf(this);
    if (o.length > 0)
      for (const i of o)
        r && rf(i, n);
    for (const i of this.parts)
      i.use(t, s, n);
  }
  /**
   * Return CSS that that applies the params of this theme to elements with
   * the provided class name
   */
  _getCssClass() {
    return this._cssClassCache ?? (this._cssClassCache = wo(this.parts).map((t) => t.use(void 0, void 0, void 0)).filter(Boolean).join(" "));
  }
  _getModeParams() {
    let t = this._paramsCache;
    if (!t) {
      const s = {
        // NOTE: defining the default mode here is important, it ensures
        // that the default mode is first in iteration order, which puts
        // it first in outputted CSS, allowing other modes to override it
        [gt]: { ...Gg }
      };
      for (const n of wo(this.parts))
        for (const r of Object.keys(n.modeParams)) {
          const o = n.modeParams[r];
          if (o) {
            const i = s[r] ?? (s[r] = {}), a = /* @__PURE__ */ new Set();
            for (const l of Object.keys(o)) {
              const c = o[l];
              c !== void 0 && (i[l] = c, a.add(l));
            }
            if (r === gt)
              for (const l of Object.keys(s)) {
                const c = s[l];
                if (l !== gt)
                  for (const d of a)
                    delete c[d];
              }
          }
        }
      this._paramsCache = t = s;
    }
    return t;
  }
  /**
   * Return the CSS chunk that is inserted into the grid DOM, and will
   * therefore be removed automatically when the grid is destroyed or it
   * starts to use a new theme.
   *
   * @param className a unique class name on the grid wrapper used to scope the returned CSS to the grid instance
   */
  _getPerGridCss(t) {
    const s = "##SELECTOR##";
    let n = this._paramsCssCache;
    if (!n) {
      let r = "", o = "";
      const i = this._getModeParams();
      for (const l of Object.keys(i)) {
        const c = i[l];
        if (l !== gt) {
          const u = `:where([data-ag-theme-mode="${typeof CSS == "object" ? CSS.escape(l) : l}"]) & {
`;
          r += u, o += u;
        }
        for (const d of Object.keys(c).sort()) {
          const u = c[d], h = Jg(d, u);
          if (h === !1)
            je(107, { key: d, value: u });
          else {
            const g = ca(d), f = g.replace("--ag-", "--ag-inherited-");
            r += `	${g}: var(${f}, ${h});
`, o += `	${f}: var(${g});
`;
          }
        }
        l !== gt && (r += `}
`, o += `}
`);
      }
      let a = `${s} {
${r}}
`;
      a += `:has(> ${s}):not(${s}) {
${o}}
`, this._paramsCssCache = n = a;
    }
    return n.replaceAll(s, `:where(.${t})`);
  }
}, wo = (e) => {
  const t = /* @__PURE__ */ new Map();
  for (const n of e)
    t.set(n.feature, n);
  const s = [];
  for (const n of e)
    (!n.feature || t.get(n.feature) === n) && s.push(n);
  return s;
}, tf = (e) => {
  const t = /* @__PURE__ */ new Set(), s = (o) => {
    if (Array.isArray(o))
      o.forEach(s);
    else {
      const i = o == null ? void 0 : o.googleFont;
      typeof i == "string" && t.add(i);
    }
  };
  return Object.values(e._getModeParams()).flatMap((o) => Object.values(o)).forEach(s), Array.from(t).sort();
}, vo = !1, sf = () => {
  if (!vo) {
    vo = !0;
    for (const e of Array.from(document.head.querySelectorAll('style[data-ag-scope="legacy"]')))
      e.remove();
  }
}, nf = /* @__PURE__ */ new Set(), rf = async (e, t) => {
  nf.add(e);
  const s = `@import url('https://${of}/css2?family=${encodeURIComponent(e)}:wght@100;200;300;400;500;600;700;800;900&display=swap');
`;
  Nt(s, document.head, `googleFont:${e}`, void 0, 0, t);
}, of = "fonts.googleapis.com", af = (
  /*css*/
  '.ag-checkbox-input-wrapper,.ag-radio-button-input-wrapper{background-color:var(--ag-checkbox-unchecked-background-color);border:solid var(--ag-checkbox-border-width) var(--ag-checkbox-unchecked-border-color);flex:none;height:var(--ag-icon-size);position:relative;width:var(--ag-icon-size);:where(input){-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:block;height:var(--ag-icon-size);margin:0;opacity:0;width:var(--ag-icon-size)}&:after{content:"";display:block;inset:0;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;pointer-events:none;position:absolute}&:where(.ag-checked){background-color:var(--ag-checkbox-checked-background-color);border-color:var(--ag-checkbox-checked-border-color);&:after{background-color:var(--ag-checkbox-checked-shape-color)}}&:where(:focus-within,:active){box-shadow:var(--ag-focus-shadow)}&:where(.ag-disabled){filter:grayscale();opacity:.5}}.ag-checkbox-input-wrapper{border-radius:var(--ag-checkbox-border-radius);&:where(.ag-checked):after{-webkit-mask-image:var(--ag-checkbox-checked-shape-image);mask-image:var(--ag-checkbox-checked-shape-image)}&:where(.ag-indeterminate){background-color:var(--ag-checkbox-indeterminate-background-color);border-color:var(--ag-checkbox-indeterminate-border-color);&:after{background-color:var(--ag-checkbox-indeterminate-shape-color);-webkit-mask-image:var(--ag-checkbox-indeterminate-shape-image);mask-image:var(--ag-checkbox-indeterminate-shape-image)}}}.ag-radio-button-input-wrapper{border-radius:100%;&:where(.ag-checked):after{-webkit-mask-image:var(--ag-radio-checked-shape-image);mask-image:var(--ag-radio-checked-shape-image)}}'
), lf = () => dt({
  feature: "checkboxStyle",
  params: {
    checkboxBorderWidth: 1,
    checkboxBorderRadius: {
      ref: "borderRadius"
    },
    checkboxUncheckedBackgroundColor: $e,
    checkboxUncheckedBorderColor: Qe(0.3),
    checkboxCheckedBackgroundColor: ft,
    checkboxCheckedBorderColor: { ref: "checkboxCheckedBackgroundColor" },
    checkboxCheckedShapeImage: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" fill="none"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M1 3.5 3.5 6l5-5"/></svg>'
    },
    checkboxCheckedShapeColor: $e,
    checkboxIndeterminateBackgroundColor: Qe(0.3),
    checkboxIndeterminateBorderColor: { ref: "checkboxIndeterminateBackgroundColor" },
    checkboxIndeterminateShapeImage: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none"><rect width="10" height="2" fill="#000" rx="1"/></svg>'
    },
    checkboxIndeterminateShapeColor: $e,
    radioCheckedShapeImage: {
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none"><circle cx="3" cy="3" r="3" fill="#000"/></svg>'
    }
  },
  css: af
}), cf = /* @__PURE__ */ lf(), Ca = () => ({
  ...Qs,
  backgroundColor: "hsl(217, 0%, 17%)",
  foregroundColor: "#FFF",
  chromeBackgroundColor: Qe(0.05),
  rowHoverColor: et(0.15),
  selectedRowBackgroundColor: et(0.2),
  menuBackgroundColor: Qe(0.1),
  browserColorScheme: "dark",
  popupShadow: "0 0px 20px #000A",
  cardShadow: "0 1px 4px 1px #000A",
  advancedFilterBuilderJoinPillColor: "#7a3a37",
  advancedFilterBuilderColumnPillColor: "#355f2d",
  advancedFilterBuilderOptionPillColor: "#5a3168",
  advancedFilterBuilderValuePillColor: "#374c86",
  findMatchColor: $e,
  findActiveMatchColor: $e,
  checkboxUncheckedBorderColor: Qe(0.4),
  toggleButtonOffBackgroundColor: Qe(0.4)
}), df = () => ({
  ...Ca(),
  backgroundColor: "#1f2836"
}), uf = () => dt({
  feature: "colorScheme",
  params: Qs,
  modeParams: {
    light: Qs,
    dark: Ca(),
    "dark-blue": df()
  }
}), hf = /* @__PURE__ */ uf(), ma = {
  aggregation: '<path d="M18 7V4H6l6 8-6 8h12v-3"/>',
  arrows: '<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/>',
  asc: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  cancel: '<path d="m18 6-12 12"/><path d="m6 6 12 12"/>',
  chart: '<line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>',
  "color-picker": '<path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"/>',
  columns: '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>',
  contracted: '<path d="m9 18 6-6-6-6"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  cross: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  csv: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/>',
  cut: '<circle cx="6" cy="6" r="3"/><path d="M8.12 8.12 12 12"/><path d="M20 4 8.12 15.88"/><circle cx="6" cy="18" r="3"/><path d="M14.8 14.8 20 20"/>',
  desc: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  down: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  excel: '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/>',
  expanded: '<path d="m15 18-6-6 6-6"/>',
  "eye-slash": '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  filter: '<path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/>',
  first: '<path d="m17 18-6-6 6-6"/><path d="M7 6v12"/>',
  group: '<path d="M16 12H3"/><path d="M16 18H3"/><path d="M10 6H3"/><path d="M21 18V8a2 2 0 0 0-2-2h-5"/><path d="m16 8-2-2 2-2"/>',
  last: '<path d="m7 18 6-6-6-6"/><path d="M17 6v12"/>',
  left: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  linked: '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/>',
  loading: '<line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/>',
  maximize: '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/>',
  menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  "menu-alt": '<circle cx="12" cy="5" r="0.75" fill="#D9D9D9"/><circle cx="12" cy="12" r="0.75" fill="#D9D9D9"/><circle cx="12" cy="19" r="0.75" fill="#D9D9D9"/>',
  minimize: '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" x2="21" y1="10" y2="3"/><line x1="3" x2="10" y1="21" y2="14"/>',
  minus: '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>',
  next: '<path d="m9 18 6-6-6-6"/>',
  none: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
  "not-allowed": '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
  paste: '<path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"/><path d="m17 10 4 4-4 4"/>',
  pin: '<line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/>',
  pivot: '<path d="M15 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M21 9H3"/><path d="M21 15H3"/>',
  plus: '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>',
  previous: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  save: '<path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/>',
  "small-left": '<path d="m15 18-6-6 6-6"/>',
  "small-right": '<path d="m9 18 6-6-6-6"/>',
  tick: '<path d="M20 6 9 17l-5-5"/>',
  "tree-closed": '<path d="m9 18 6-6-6-6"/>',
  "tree-indeterminate": '<path d="M5 12h14"/>',
  "tree-open": '<path d="m6 9 6 6 6-6"/>',
  unlinked: '<path d="M9 17H7A5 5 0 0 1 7 7"/><path d="M15 7h2a5 5 0 0 1 4 8"/><line x1="8" x2="12" y1="12" y2="12"/><line x1="2" x2="22" y1="2" y2="22"/>',
  up: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  grip: '<circle cx="5" cy="8" r="0.5"/><circle cx="12" cy="8" r="0.5"/><circle cx="19" cy="8" r="0.5"/><circle cx="5" cy="16" r="0.5"/><circle cx="12" cy="16" r="0.5"/><circle cx="19" cy="16" r="0.5"/><g stroke="none" fill="currentColor"><circle cx="5" cy="8" r="1"/><circle cx="12" cy="8" r="1"/><circle cx="19" cy="8" r="1"/><circle cx="5" cy="16" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="19" cy="16" r="1"/></g>',
  settings: '<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>'
}, wa = {
  "column-arrow": '<svg xmlns="http://www.w3.org/2000/svg" class="ag-icon" fill="none" viewBox="0 0 32 32"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 26C0 28.2092 1.79086 30 4 30H14C16.2091 30 18 28.2092 18 26V15H25.8786L24.4394 16.4393C23.8536 17.0251 23.8536 17.9749 24.4394 18.5607C25.0252 19.1464 25.9748 19.1464 26.5606 18.5607L30.5606 14.5607C31.1464 13.9749 31.1464 13.0251 30.5606 12.4393L26.5606 8.43934C25.9748 7.85356 25.0252 7.85356 24.4394 8.43934C23.8536 9.02512 23.8536 9.97488 24.4394 10.5607L25.8786 12H18V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V26ZM14 5H10.5V12H15V6C15 5.44772 14.5523 5 14 5ZM4 5H7.5V12H3V6C3 5.44772 3.44772 5 4 5ZM10.5 15H15V26C15 26.5522 14.5523 27 14 27H10.5V15ZM4 27H7.5V15H3V26C3 26.5522 3.44772 27 4 27Z" fill="currentColor"/></svg>',
  "small-down": '<svg xmlns="http://www.w3.org/2000/svg" class="ag-icon" fill="black" stroke="none" viewBox="0 0 32 32"><path d="M7.334 10.667 16 21.334l8.667-10.667H7.334Z"/></svg>',
  "small-up": '<svg xmlns="http://www.w3.org/2000/svg" class="ag-icon" fill="black" stroke="none" viewBox="0 0 32 32"><path d="M7.334 21.333 16 10.666l8.667 10.667H7.334Z"/></svg>',
  "pinned-top": '<svg xmlns="http://www.w3.org/2000/svg" class="ag-icon" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M12.53 3.72A.75.75 0 0 1 12 5H4a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .53.22ZM3.269 10.744a.75.75 0 0 1 .2-.524l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L8.75 8.56V14a.75.75 0 0 1-1.5 0V8.56l-2.72 2.72a.75.75 0 0 1-1.26-.536Z"/></svg>',
  "pinned-bottom": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="ag-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M3.47 12.28A.75.75 0 0 1 4 11h8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.53-.22ZM12.731 5.256a.75.75 0 0 1-.2.524l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V2a.75.75 0 0 1 1.5 0v5.44l2.72-2.72a.75.75 0 0 1 1.26.536Z"/></svg>',
  "un-pin": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" class="ag-icon" viewBox="0 0 16 16"><path fill="currentColor" d="M8 11a.75.75 0 0 0-.75.75v3.333a.75.75 0 1 0 1.5 0V11.75A.75.75 0 0 0 8 11Z"/><path fill="currentColor" d="M13.11 1.436a.75.75 0 0 0-1.22-.872l-10 14a.75.75 0 1 0 1.22.872L5.207 12.5h7.376a.75.75 0 0 0 .75-.75v-1.174a2.08 2.08 0 0 0-1.153-1.863l-1.185-.599-.005-.002a.58.58 0 0 1-.323-.522V5.165a2.083 2.083 0 0 0 1.854-2.904l.589-.825Zm-3.943 5.52v.634a2.08 2.08 0 0 0 1.153 1.863l1.185.6.005.002a.58.58 0 0 1 .323.522V11H6.28l2.887-4.044ZM9.277 1H5.25a2.084 2.084 0 0 0-.083 4.165v1.676l1.5-2.132v-.292a.75.75 0 0 0-.75-.75H5.25a.584.584 0 0 1 0-1.167h2.972L9.277 1Z"/></svg>'
}, gf = (e = {}) => {
  let t = "";
  for (const s of [...Object.keys(ma), ...Object.keys(wa)]) {
    const n = ff(s, e.strokeWidth);
    t += `.ag-icon-${s}::before { mask-image: url('data:image/svg+xml,${encodeURIComponent(n)}'); }
`;
  }
  return t;
}, ff = (e, t = 1.5) => {
  const s = wa[e];
  if (s)
    return s;
  const n = ma[e];
  if (!n)
    throw new Error(`Missing icon data for ${e}`);
  return `<svg xmlns="http://www.w3.org/2000/svg" class="ag-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-width="${t}" viewBox="0 0 24 24"><style>* { vector-effect: non-scaling-stroke; }</style>` + n + "</svg>";
}, pf = (e = {}) => dt({
  feature: "iconSet",
  css: () => gf(e)
}), Cf = /* @__PURE__ */ pf(), mf = (
  /*css*/
  ':where(.ag-input-field-input[type=number]:not(.ag-number-field-input-stepper)){-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}}.ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){background-color:var(--ag-input-background-color);border:var(--ag-input-border);border-radius:var(--ag-input-border-radius);color:var(--ag-input-text-color);font-family:inherit;font-size:inherit;line-height:inherit;margin:0;min-height:var(--ag-input-height);padding:0;&:where(:disabled){background-color:var(--ag-input-disabled-background-color);border:var(--ag-input-disabled-border);color:var(--ag-input-disabled-text-color)}&:where(:focus){background-color:var(--ag-input-focus-background-color);border:var(--ag-input-focus-border);box-shadow:var(--ag-input-focus-shadow);color:var(--ag-input-focus-text-color);outline:none}&:where(:invalid){background-color:var(--ag-input-invalid-background-color);border:var(--ag-input-invalid-border);color:var(--ag-input-invalid-text-color)}&:where(.invalid){background-color:var(--ag-input-invalid-background-color);border:var(--ag-input-invalid-border);color:var(--ag-input-invalid-text-color)}&::-moz-placeholder{color:var(--ag-input-placeholder-text-color)}&::placeholder{color:var(--ag-input-placeholder-text-color)}}:where(.ag-ltr) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding-left:var(--ag-input-padding-start)}:where(.ag-rtl) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding-right:var(--ag-input-padding-start)}:where(.ag-column-select-header-filter-wrapper,.ag-filter-toolpanel-search,.ag-mini-filter,.ag-filter-filter){.ag-input-wrapper:before{background-color:currentcolor;color:var(--ag-input-icon-color);content:"";display:block;height:12px;-webkit-mask-image:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==");mask-image:url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;opacity:.5;position:absolute;width:12px}}:where(.ag-ltr) :where(.ag-column-select-header-filter-wrapper,.ag-filter-toolpanel-search,.ag-mini-filter,.ag-filter-filter){.ag-input-wrapper:before{margin-left:var(--ag-spacing)}.ag-number-field-input,.ag-text-field-input{padding-left:calc(var(--ag-spacing)*1.5 + 12px)}}:where(.ag-rtl) :where(.ag-column-select-header-filter-wrapper,.ag-filter-toolpanel-search,.ag-mini-filter,.ag-filter-filter){.ag-input-wrapper:before{margin-right:var(--ag-spacing)}.ag-number-field-input,.ag-text-field-input{padding-right:calc(var(--ag-spacing)*1.5 + 12px)}}'
), wf = (
  /*css*/
  ".ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){&:focus{box-shadow:var(--ag-focus-shadow)}}"
), vf = {
  inputBackgroundColor: "transparent",
  inputBorder: !1,
  inputBorderRadius: 0,
  inputTextColor: {
    ref: "textColor"
  },
  inputPlaceholderTextColor: {
    ref: "inputTextColor",
    mix: 0.5
  },
  inputPaddingStart: 0,
  inputHeight: {
    calc: "max(iconSize, fontSize) + spacing * 2"
  },
  inputFocusBackgroundColor: {
    ref: "inputBackgroundColor"
  },
  inputFocusBorder: {
    ref: "inputBorder"
  },
  inputFocusShadow: "none",
  inputFocusTextColor: {
    ref: "inputTextColor"
  },
  inputDisabledBackgroundColor: {
    ref: "inputBackgroundColor"
  },
  inputDisabledBorder: {
    ref: "inputBorder"
  },
  inputDisabledTextColor: {
    ref: "inputTextColor"
  },
  inputInvalidBackgroundColor: {
    ref: "inputBackgroundColor"
  },
  inputInvalidBorder: {
    ref: "inputBorder"
  },
  inputInvalidTextColor: {
    ref: "inputTextColor"
  },
  inputIconColor: {
    ref: "inputTextColor"
  },
  pickerButtonBorder: !1,
  pickerButtonFocusBorder: { ref: "inputFocusBorder" },
  pickerButtonBackgroundColor: { ref: "backgroundColor" },
  pickerButtonFocusBackgroundColor: { ref: "backgroundColor" },
  pickerListBorder: !1,
  pickerListBackgroundColor: { ref: "backgroundColor" }
}, bf = () => dt({
  feature: "inputStyle",
  params: {
    ...vf,
    inputBackgroundColor: $e,
    inputBorder: !0,
    inputBorderRadius: {
      ref: "borderRadius"
    },
    inputPaddingStart: {
      ref: "spacing"
    },
    inputFocusBorder: {
      color: ft
    },
    inputFocusShadow: {
      ref: "focusShadow"
    },
    inputDisabledBackgroundColor: Qe(0.06),
    inputDisabledTextColor: {
      ref: "textColor",
      mix: 0.5
    },
    inputInvalidBorder: {
      color: { ref: "invalidColor" }
    },
    pickerButtonBorder: !0,
    pickerListBorder: !0
  },
  css: () => mf + wf
}), yf = /* @__PURE__ */ bf(), Sf = (
  /*css*/
  '.ag-tabs-header{background-color:var(--ag-tab-bar-background-color);border-bottom:var(--ag-tab-bar-border);display:flex;flex:1;gap:var(--ag-tab-spacing);padding:var(--ag-tab-bar-top-padding) var(--ag-tab-bar-horizontal-padding) 0}.ag-tabs-header-wrapper{display:flex}.ag-tabs-close-button-wrapper{align-items:center;border:0;display:flex;padding:var(--ag-spacing)}:where(.ag-ltr) .ag-tabs-close-button-wrapper{border-right:1px solid var(--ag-border-color)}:where(.ag-rtl) .ag-tabs-close-button-wrapper{border-left:1px solid var(--ag-border-color)}.ag-tabs-close-button{background-color:unset;border:0;cursor:pointer;padding:0}.ag-tab{align-items:center;background-color:var(--ag-tab-background-color);border-left:var(--ag-tab-selected-border-width) solid transparent;border-right:var(--ag-tab-selected-border-width) solid transparent;color:var(--ag-tab-text-color);cursor:pointer;display:flex;flex:1;justify-content:center;padding:var(--ag-tab-top-padding) var(--ag-tab-horizontal-padding) var(--ag-tab-bottom-padding);position:relative;&:hover{background-color:var(--ag-tab-hover-background-color);color:var(--ag-tab-hover-text-color)}&.ag-tab-selected{background-color:var(--ag-tab-selected-background-color);color:var(--ag-tab-selected-text-color)}&:after{background-color:var(--ag-tab-selected-underline-color);bottom:0;content:"";display:block;height:var(--ag-tab-selected-underline-width);left:0;opacity:0;position:absolute;right:0;transition:opacity var(--ag-tab-selected-underline-transition-duration)}&.ag-tab-selected:after{opacity:1}}:where(.ag-ltr) .ag-tab{&.ag-tab-selected{&:where(:not(:first-of-type)){border-left-color:var(--ag-tab-selected-border-color)}&:where(:not(:last-of-type)){border-right-color:var(--ag-tab-selected-border-color)}}}:where(.ag-rtl) .ag-tab{&.ag-tab-selected{&:where(:not(:first-of-type)){border-right-color:var(--ag-tab-selected-border-color)}&:where(:not(:last-of-type)){border-left-color:var(--ag-tab-selected-border-color)}}}'
), Rf = {
  tabBarBackgroundColor: "transparent",
  tabBarHorizontalPadding: 0,
  tabBarTopPadding: 0,
  tabBackgroundColor: "transparent",
  tabTextColor: {
    ref: "textColor"
  },
  tabHorizontalPadding: {
    ref: "spacing"
  },
  tabTopPadding: {
    ref: "spacing"
  },
  tabBottomPadding: {
    ref: "spacing"
  },
  tabSpacing: "0",
  tabHoverBackgroundColor: {
    ref: "tabBackgroundColor"
  },
  tabHoverTextColor: {
    ref: "tabTextColor"
  },
  tabSelectedBackgroundColor: {
    ref: "tabBackgroundColor"
  },
  tabSelectedTextColor: {
    ref: "tabTextColor"
  },
  tabSelectedBorderWidth: 1,
  tabSelectedBorderColor: "transparent",
  tabSelectedUnderlineColor: "transparent",
  tabSelectedUnderlineWidth: 0,
  tabSelectedUnderlineTransitionDuration: 0,
  tabBarBorder: !1
}, xf = () => dt({
  feature: "tabStyle",
  params: {
    ...Rf,
    tabBarBorder: !0,
    tabBarBackgroundColor: Ye(0.05),
    tabTextColor: {
      ref: "textColor",
      mix: 0.7
    },
    tabSelectedTextColor: {
      ref: "textColor"
    },
    tabHoverTextColor: {
      ref: "textColor"
    },
    tabSelectedBorderColor: {
      ref: "borderColor"
    },
    tabSelectedBackgroundColor: $e
  },
  css: Sf
}), Ff = /* @__PURE__ */ xf(), Df = () => ef().withPart(cf).withPart(hf).withPart(Cf).withPart(Ff).withPart(yf).withPart(da).withParams({
  fontFamily: [
    { googleFont: "IBM Plex Sans" },
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen-Sans",
    "Ubuntu"
  ]
}), Pf = /* @__PURE__ */ Df(), Ef = {
  cssName: "--ag-cell-horizontal-padding",
  changeKey: "cellHorizontalPaddingChanged",
  defaultValue: 16
}, Tf = {
  cssName: "--ag-indentation-level",
  changeKey: "indentationLevelChanged",
  defaultValue: 0,
  noWarn: !0,
  cacheDefault: !0
}, Mf = {
  cssName: "--ag-row-group-indent-size",
  changeKey: "rowGroupIndentSizeChanged",
  defaultValue: 0
}, bo = {
  cssName: "--ag-row-height",
  changeKey: "rowHeightChanged",
  defaultValue: 42
}, yo = {
  cssName: "--ag-header-height",
  changeKey: "headerHeightChanged",
  defaultValue: 48
}, So = {
  cssName: "--ag-list-item-height",
  changeKey: "listItemHeightChanged",
  defaultValue: 24
}, Gn = {
  cssName: "--ag-row-border",
  changeKey: "rowBorderWidthChanged",
  defaultValue: 1,
  border: !0
}, Ro = {
  cssName: "--ag-pinned-row-border",
  changeKey: "pinnedRowBorderWidthChanged",
  defaultValue: 1,
  border: !0
}, If = 0, Lf = class extends K {
  constructor() {
    super(...arguments), this.beanName = "environment", this.sizeEls = /* @__PURE__ */ new Map(), this.lastKnownValues = /* @__PURE__ */ new Map(), this.sizesMeasured = !1, this.paramsClass = `ag-theme-params-${++If}`, this.globalCSS = [];
  }
  wireBeans(e) {
    const { eGridDiv: t, gridOptions: s } = e;
    this.eGridDiv = t, this.eStyleContainer = s.themeStyleContainer ?? (t.getRootNode() === document ? document.head : t), this.cssLayer = s.themeCssLayer, this.styleNonce = s.styleNonce;
  }
  postConstruct() {
    this.addManagedPropertyListener("theme", () => this.handleThemeGridOptionChange()), this.handleThemeGridOptionChange(), this.addManagedPropertyListener("rowHeight", () => this.refreshRowHeightVariable()), this.getSizeEl(bo), this.getSizeEl(yo), this.getSizeEl(So), this.getSizeEl(Gn), this.getSizeEl(Ro), this.refreshRowBorderWidthVariable(), this.addDestroyFunc(() => Ig(this)), this.mutationObserver = new MutationObserver(() => {
      this.fireGridStylesChangedEvent("themeChanged");
    }), this.addDestroyFunc(() => this.mutationObserver.disconnect());
  }
  getPinnedRowBorderWidth() {
    return this.getCSSVariablePixelValue(Ro);
  }
  getRowBorderWidth() {
    return this.getCSSVariablePixelValue(Gn);
  }
  getDefaultRowHeight() {
    return this.getCSSVariablePixelValue(bo);
  }
  getDefaultHeaderHeight() {
    return this.getCSSVariablePixelValue(yo);
  }
  getDefaultCellHorizontalPadding() {
    return this.getCSSVariablePixelValue(Ef);
  }
  getCellPaddingLeft() {
    const e = this.getDefaultCellHorizontalPadding(), t = this.getCSSVariablePixelValue(Tf), s = this.getCSSVariablePixelValue(Mf);
    return e - 1 + s * t;
  }
  getCellPadding() {
    const e = this.getDefaultCellHorizontalPadding() - 1;
    return this.getCellPaddingLeft() + e;
  }
  getDefaultColumnMinWidth() {
    return Math.min(36, this.getDefaultRowHeight());
  }
  getDefaultListItemHeight() {
    return this.getCSSVariablePixelValue(So);
  }
  applyThemeClasses(e) {
    const { gridTheme: t } = this;
    let s = "";
    if (t)
      s = `${this.paramsClass} ${t._getCssClass()}`;
    else {
      this.mutationObserver.disconnect();
      let n = this.eGridDiv;
      for (; n; ) {
        let r = !1;
        for (const o of Array.from(n.classList))
          o.startsWith("ag-theme-") && (r = !0, s = s ? `${s} ${o}` : o);
        r && this.mutationObserver.observe(n, {
          attributes: !0,
          attributeFilter: ["class"]
        }), n = n.parentElement;
      }
    }
    for (const n of Array.from(e.classList))
      n.startsWith("ag-theme-") && e.classList.remove(n);
    if (s) {
      const n = e.className;
      e.className = n + (n ? " " : "") + s;
    }
  }
  refreshRowHeightVariable() {
    const { eGridDiv: e } = this, t = e.style.getPropertyValue("--ag-line-height").trim(), s = this.gos.get("rowHeight");
    if (s == null || isNaN(s) || !isFinite(s))
      return t !== null && e.style.setProperty("--ag-line-height", null), -1;
    const n = `${s}px`;
    return t != n ? (e.style.setProperty("--ag-line-height", n), s) : t != "" ? parseFloat(t) : -1;
  }
  addGlobalCSS(e, t) {
    this.gridTheme ? Nt(e, this.eStyleContainer, t, this.cssLayer, 0, this.styleNonce) : this.globalCSS.push([e, t]);
  }
  getCSSVariablePixelValue(e) {
    const t = this.lastKnownValues.get(e);
    if (t != null)
      return t;
    const s = this.measureSizeEl(e);
    return s === "detached" || s === "no-styles" ? (e.cacheDefault && this.lastKnownValues.set(e, e.defaultValue), e.defaultValue) : (this.lastKnownValues.set(e, s), s);
  }
  measureSizeEl(e) {
    const t = this.getSizeEl(e);
    if (t.offsetParent == null)
      return "detached";
    const s = t.offsetWidth;
    return s === Bn ? "no-styles" : (this.sizesMeasured = !0, s);
  }
  getMeasurementContainer() {
    let e = this.eMeasurementContainer;
    return e || (e = this.eMeasurementContainer = Ct({ tag: "div", cls: "ag-measurement-container" }), this.eGridDiv.appendChild(e)), e;
  }
  getSizeEl(e) {
    let t = this.sizeEls.get(e);
    if (t)
      return t;
    const s = this.getMeasurementContainer();
    t = Ct({ tag: "div" });
    const { border: n, noWarn: r } = e;
    n ? (t.className = "ag-measurement-element-border", t.style.setProperty(
      "--ag-internal-measurement-border",
      `var(${e.cssName}, solid ${Bn}px)`
    )) : t.style.width = `var(${e.cssName}, ${Bn}px)`, s.appendChild(t), this.sizeEls.set(e, t);
    let o = this.measureSizeEl(e);
    o === "no-styles" && !r && oe(9, { variable: e });
    const i = jt(this.beans, t, () => {
      const a = this.measureSizeEl(e);
      a === "detached" || a === "no-styles" || (this.lastKnownValues.set(e, a), a !== o && (o = a, this.fireGridStylesChangedEvent(e.changeKey)));
    });
    return this.addDestroyFunc(() => i()), t;
  }
  fireGridStylesChangedEvent(e) {
    e === "rowBorderWidthChanged" && this.refreshRowBorderWidthVariable(), this.eventSvc.dispatchEvent({
      type: "gridStylesChanged",
      [e]: !0
    });
  }
  refreshRowBorderWidthVariable() {
    const e = this.getCSSVariablePixelValue(Gn);
    this.eGridDiv.style.setProperty("--ag-internal-row-border-width", `${e}px`);
  }
  handleThemeGridOptionChange() {
    const { gos: e, eGridDiv: t, globalCSS: s, gridTheme: n } = this, r = e.get("theme");
    let o;
    if (r === "legacy")
      o = void 0;
    else {
      const i = r ?? Pf;
      i instanceof fa ? o = i : je(240, { theme: i });
    }
    if (o !== n) {
      if (o) {
        Mg(this), aa(this.eStyleContainer, this.cssLayer, this.styleNonce);
        for (const [a, l] of s)
          Nt(a, this.eStyleContainer, l, this.cssLayer, 0, this.styleNonce);
        s.length = 0;
      }
      this.gridTheme = o, o == null || o._startUse({
        loadThemeGoogleFonts: e.get("loadThemeGoogleFonts"),
        styleContainer: this.eStyleContainer,
        cssLayer: this.cssLayer,
        nonce: this.styleNonce
      });
      let i = this.eParamsStyle;
      if (!i) {
        i = this.eParamsStyle = Ct({ tag: "style" });
        const a = this.gos.get("styleNonce");
        a && i.setAttribute("nonce", a), t.appendChild(i);
      }
      br || (i.textContent = (o == null ? void 0 : o._getPerGridCss(this.paramsClass)) || ""), this.applyThemeClasses(t), this.fireGridStylesChangedEvent("themeChanged");
    }
    o && getComputedStyle(this.getMeasurementContainer()).getPropertyValue("--ag-legacy-styles-loaded") && je(r ? 106 : 239);
  }
}, Bn = 15538, Af = class extends K {
  constructor() {
    super(...arguments), this.beanName = "eventSvc", this.globalSvc = new gs();
  }
  postConstruct() {
    const { globalListener: e, globalSyncListener: t } = this.beans;
    e && this.addGlobalListener(e, !0), t && this.addGlobalListener(t, !1);
  }
  addEventListener(e, t, s) {
    this.globalSvc.addEventListener(e, t, s);
  }
  removeEventListener(e, t, s) {
    this.globalSvc.removeEventListener(e, t, s);
  }
  addGlobalListener(e, t = !1) {
    this.globalSvc.addGlobalListener(e, t);
  }
  removeGlobalListener(e, t = !1) {
    this.globalSvc.removeGlobalListener(e, t);
  }
  /** @deprecated DO NOT FIRE LOCAL EVENTS OFF THE EVENT SERVICE */
  dispatchLocalEvent() {
  }
  dispatchEvent(e) {
    this.globalSvc.dispatchEvent(ge(this.gos, e));
  }
  dispatchEventOnce(e) {
    this.globalSvc.dispatchEventOnce(ge(this.gos, e));
  }
};
function va(e) {
  return e ? e.getLeafColumns().some((t) => t.isSpanHeaderHeight()) : !1;
}
function nr(e, t) {
  let s;
  if (xe(e) && va(e) && e.isPadding()) {
    const n = e;
    s = n.getLeafColumns()[0];
    let r = s;
    for (; r !== n; )
      t++, r = r.getParent();
  }
  return {
    column: s || e,
    headerRowIndex: t
  };
}
var kf = class extends K {
  constructor() {
    super(...arguments), this.beanName = "headerNavigation", this.currentHeaderRowWithoutSpan = -1;
  }
  postConstruct() {
    const e = this.beans;
    e.ctrlsSvc.whenReady(this, (s) => {
      this.gridBodyCon = s.gridBodyCtrl;
    });
    const t = rt(e);
    this.addManagedElementListeners(t, {
      mousedown: () => {
        this.currentHeaderRowWithoutSpan = -1;
      }
    });
  }
  getHeaderPositionForColumn(e, t) {
    let s;
    const { colModel: n, colGroupSvc: r, ctrlsSvc: o } = this.beans;
    if (typeof e == "string" ? (s = n.getCol(e), s || (s = (r == null ? void 0 : r.getColumnGroup(e)) ?? null)) : s = e, !s)
      return null;
    const i = o.getHeaderRowContainerCtrl(), a = i == null ? void 0 : i.getAllCtrls(), l = Ce(a || []).type === "filter", c = st(this.beans) - 1;
    let d = -1, u = s;
    for (; u; )
      d++, u = u.getParent();
    let h = d;
    return t && l && h === c - 1 && h++, h === -1 ? null : {
      headerRowIndex: h,
      column: s
    };
  }
  /*
   * This method navigates grid header vertically
   * @return {boolean} true to preventDefault on the event that caused this navigation.
   */
  navigateVertically(e, t, s) {
    const n = this.beans.focusSvc;
    if (t || (t = n.focusedHeader), !t)
      return !1;
    const { headerRowIndex: r } = t, o = t.column, i = st(this.beans), a = e === "UP", l = this.getHeaderRowType(r);
    let {
      headerRowIndex: c,
      column: d,
      headerRowIndexWithoutSpan: u
    } = a ? Hf(l, o, r) : Of(l, o, r), h = !1;
    return c < 0 && (c = 0, d = o, h = !0), c >= i ? (c = -1, this.currentHeaderRowWithoutSpan = -1) : u !== void 0 && (this.currentHeaderRowWithoutSpan = u), !h && !d ? !1 : n.focusHeaderPosition({
      headerPosition: { headerRowIndex: c, column: d },
      allowUserOverride: !0,
      event: s
    });
  }
  /*
   * This method navigates grid header horizontally
   * @return {boolean} true to preventDefault on the event that caused this navigation.
   */
  navigateHorizontally(e, t = !1, s) {
    const { focusSvc: n, gos: r } = this.beans, o = n.focusedHeader;
    let i, a;
    this.currentHeaderRowWithoutSpan !== -1 ? o.headerRowIndex = this.currentHeaderRowWithoutSpan : this.currentHeaderRowWithoutSpan = o.headerRowIndex, e === "LEFT" !== r.get("enableRtl") ? (a = "Before", i = this.findHeader(o, a)) : (a = "After", i = this.findHeader(o, a));
    const l = r.getCallback("tabToNextHeader");
    if (t && l) {
      const c = n.focusHeaderPositionFromUserFunc({
        userFunc: l,
        headerPosition: i,
        direction: a
      });
      if (c) {
        const { headerRowIndex: d } = n.focusedHeader || {};
        d != null && d != o.headerRowIndex && (this.currentHeaderRowWithoutSpan = d);
      }
      return c;
    }
    return i || !t ? n.focusHeaderPosition({
      headerPosition: i,
      direction: a,
      fromTab: t,
      allowUserOverride: !0,
      event: s
    }) : this.focusNextHeaderRow(o, a, s);
  }
  focusNextHeaderRow(e, t, s) {
    const n = e.headerRowIndex;
    let r = null, o;
    const i = this.beans;
    if (t === "Before" ? n > 0 && (o = n - 1, this.currentHeaderRowWithoutSpan -= 1, r = this.findColAtEdgeForHeaderRow(o, "end")) : (o = n + 1, this.currentHeaderRowWithoutSpan < st(i) ? this.currentHeaderRowWithoutSpan += 1 : this.currentHeaderRowWithoutSpan = -1, r = this.findColAtEdgeForHeaderRow(o, "start")), !r)
      return !1;
    const { column: a, headerRowIndex: l } = nr(
      r.column,
      r == null ? void 0 : r.headerRowIndex
    );
    return i.focusSvc.focusHeaderPosition({
      headerPosition: { column: a, headerRowIndex: l },
      direction: t,
      fromTab: !0,
      allowUserOverride: !0,
      event: s
    });
  }
  scrollToColumn(e, t = "After") {
    if (e.getPinned())
      return;
    let s;
    if (xe(e)) {
      const n = e.getDisplayedLeafColumns();
      s = t === "Before" ? Ce(n) : n[0];
    } else
      s = e;
    this.gridBodyCon.scrollFeature.ensureColumnVisible(s);
  }
  findHeader(e, t) {
    let s, n;
    const { colGroupSvc: r, visibleCols: o } = this.beans;
    if (xe(e.column) ? s = (r == null ? void 0 : r.getGroupAtDirection(e.column, t)) ?? void 0 : (n = `getCol${t}`, s = o[n](e.column)), !s)
      return;
    const { headerRowIndex: i } = e;
    if (this.getHeaderRowType(i) !== "filter") {
      const c = [s];
      for (; s.getParent(); )
        s = s.getParent(), c.push(s);
      s = c[Math.max(0, c.length - 1 - i)];
    }
    const { column: a, headerRowIndex: l } = nr(s, i);
    return {
      column: a,
      headerRowIndex: l
    };
  }
  getHeaderRowType(e) {
    const t = this.beans.ctrlsSvc.getHeaderRowContainerCtrl();
    if (t)
      return t.getRowType(e);
  }
  findColAtEdgeForHeaderRow(e, t) {
    const { visibleCols: s, ctrlsSvc: n, colGroupSvc: r } = this.beans, o = s.allCols, i = o[t === "start" ? 0 : o.length - 1];
    if (!i)
      return;
    const a = n.getHeaderRowContainerCtrl(i.getPinned()), l = a == null ? void 0 : a.getRowType(e);
    if (l == "group") {
      const c = r == null ? void 0 : r.getColGroupAtLevel(i, e);
      return {
        headerRowIndex: e,
        column: c
      };
    }
    return {
      // if type==null, means the header level didn't exist
      headerRowIndex: l == null ? -1 : e,
      column: i
    };
  }
};
function Hf(e, t, s) {
  const n = e === "filter", r = e === "column";
  let o = n ? t : t.getParent(), i = s - 1, a = i;
  if (r && va(t.getParent())) {
    for (; o && o.isPadding(); )
      o = o.getParent(), i--;
    a = i, i < 0 && (o = t, i = s, a = void 0);
  }
  return { column: o, headerRowIndex: i, headerRowIndexWithoutSpan: a };
}
function Of(e, t, s, n = "After") {
  let r = t, o = s + 1;
  const i = o;
  if (e === "group") {
    const a = t.getDisplayedLeafColumns(), l = n === "After" ? a[0] : Ce(a), c = [];
    let d = l;
    for (; d.getParent() !== t; )
      d = d.getParent(), c.push(d);
    if (r = l, l.isSpanHeaderHeight())
      for (let u = c.length - 1; u >= 0; u--) {
        const h = c[u];
        if (!h.isPadding()) {
          r = h;
          break;
        }
        o++;
      }
    else
      r = Ce(c), r || (r = l);
  }
  return { column: r, headerRowIndex: o, headerRowIndexWithoutSpan: i };
}
var Gf = class extends K {
  constructor() {
    super(...arguments), this.beanName = "focusSvc", this.focusFallbackTimeout = null, this.needsFocusRestored = !1;
  }
  wireBeans(e) {
    this.colModel = e.colModel, this.visibleCols = e.visibleCols, this.rowRenderer = e.rowRenderer, this.navigation = e.navigation, this.filterManager = e.filterManager, this.overlays = e.overlays;
  }
  postConstruct() {
    const e = this.clearFocusedCell.bind(this);
    this.addManagedEventListeners({
      columnPivotModeChanged: e,
      newColumnsLoaded: this.onColumnEverythingChanged.bind(this),
      columnGroupOpened: e,
      columnRowGroupChanged: e
    }), this.addDestroyFunc(Dd(this.beans));
  }
  attemptToRecoverFocus() {
    this.needsFocusRestored = !0, this.focusFallbackTimeout != null && clearTimeout(this.focusFallbackTimeout), this.focusFallbackTimeout = window.setTimeout(this.setFocusRecovered.bind(this), 100);
  }
  setFocusRecovered() {
    this.needsFocusRestored = !1, this.focusFallbackTimeout != null && (clearTimeout(this.focusFallbackTimeout), this.focusFallbackTimeout = null);
  }
  /**
   * Specifies whether to take focus, as grid either already has focus, or lost it due
   * to a destroyed cell
   * @returns true if the grid should re-take focus, otherwise false
   */
  shouldTakeFocus() {
    return this.gos.get("suppressFocusAfterRefresh") ? (this.setFocusRecovered(), !1) : this.needsFocusRestored ? (this.setFocusRecovered(), !0) : this.doesRowOrCellHaveBrowserFocus();
  }
  onColumnEverythingChanged() {
    if (!this.focusedCell)
      return;
    const e = this.focusedCell.column, t = this.colModel.getCol(e.getId());
    e !== t && this.clearFocusedCell();
  }
  // we check if the browser is focusing something, and if it is, and
  // it's the cell we think is focused, then return the cell. so this
  // methods returns the cell if a) we think it has focus and b) the
  // browser thinks it has focus. this then returns nothing if we
  // first focus a cell, then second click outside the grid, as then the
  // grid cell will still be focused as far as the grid is concerned,
  // however the browser focus will have moved somewhere else.
  getFocusCellToUseAfterRefresh() {
    const { gos: e, focusedCell: t } = this;
    return e.get("suppressFocusAfterRefresh") || e.get("suppressCellFocus") || !t || !this.doesRowOrCellHaveBrowserFocus() ? null : t;
  }
  getFocusHeaderToUseAfterRefresh() {
    return this.gos.get("suppressFocusAfterRefresh") || !this.focusedHeader || !this.isDomDataPresentInHierarchy(Oe(this.beans), Qi) ? null : this.focusedHeader;
  }
  /**
   * Check for both cells and rows, as a row might be destroyed and the dom data removed before the cell if the
   * row is animating out.
   */
  doesRowOrCellHaveBrowserFocus() {
    const e = Oe(this.beans);
    return this.isDomDataPresentInHierarchy(e, Zs) ? !0 : this.isDomDataPresentInHierarchy(e, Xs);
  }
  isDomDataPresentInHierarchy(e, t) {
    let s = e;
    for (; s; ) {
      if (hi(this.gos, s, t))
        return !0;
      s = s.parentNode;
    }
    return !1;
  }
  getFocusedCell() {
    return this.focusedCell;
  }
  getFocusEventParams(e) {
    const { rowIndex: t, rowPinned: s, column: n } = e, r = {
      rowIndex: t,
      rowPinned: s,
      column: n,
      isFullWidthCell: !1
    }, o = this.rowRenderer.getRowByPosition({ rowIndex: t, rowPinned: s });
    return o && (r.isFullWidthCell = o.isFullWidth()), r;
  }
  clearFocusedCell() {
    if (this.focusedCell == null)
      return;
    const e = this.getFocusEventParams(this.focusedCell);
    this.focusedCell = null, this.eventSvc.dispatchEvent({
      type: "cellFocusCleared",
      ...e
    });
  }
  setFocusedCell(e) {
    this.setFocusRecovered();
    const { column: t, rowIndex: s, rowPinned: n, forceBrowserFocus: r = !1, preventScrollOnBrowserFocus: o = !1 } = e, i = this.colModel.getCol(t);
    if (!i) {
      this.focusedCell = null;
      return;
    }
    this.focusedCell = {
      rowIndex: s,
      rowPinned: Dt(n),
      column: i
    }, this.eventSvc.dispatchEvent({
      type: "cellFocused",
      ...this.getFocusEventParams(this.focusedCell),
      forceBrowserFocus: r,
      preventScrollOnBrowserFocus: o
    });
  }
  isCellFocused(e) {
    return this.focusedCell == null ? !1 : jd(e, this.focusedCell);
  }
  isHeaderWrapperFocused(e) {
    if (this.focusedHeader == null)
      return !1;
    const {
      column: t,
      rowCtrl: { rowIndex: s, pinned: n }
    } = e, { column: r, headerRowIndex: o } = this.focusedHeader;
    return t === r && s === o && n == r.getPinned();
  }
  focusHeaderPosition(e) {
    var l;
    if (this.setFocusRecovered(), Et(this.beans))
      return !1;
    const { direction: t, fromTab: s, allowUserOverride: n, event: r, fromCell: o, rowWithoutSpanValue: i } = e;
    let { headerPosition: a } = e;
    if (o && ((l = this.filterManager) != null && l.isAdvFilterHeaderActive()))
      return this.focusAdvancedFilter(a);
    if (n) {
      const c = this.focusedHeader, d = st(this.beans);
      if (s) {
        const u = this.gos.getCallback("tabToNextHeader");
        u && (a = this.getHeaderPositionFromUserFunc({
          userFunc: u,
          direction: t,
          currentPosition: c,
          headerPosition: a,
          headerRowCount: d
        }));
      } else {
        const u = this.gos.getCallback("navigateToNextHeader");
        if (u && r) {
          const h = {
            key: r.key,
            previousHeaderPosition: c,
            nextHeaderPosition: a,
            headerRowCount: d,
            event: r
          };
          a = u(h);
        }
      }
    }
    return a ? this.focusProvidedHeaderPosition({
      headerPosition: a,
      direction: t,
      event: r,
      fromCell: o,
      rowWithoutSpanValue: i
    }) : !1;
  }
  focusHeaderPositionFromUserFunc(e) {
    if (Et(this.beans))
      return !1;
    const { userFunc: t, headerPosition: s, direction: n, event: r } = e, o = this.focusedHeader, i = st(this.beans), a = this.getHeaderPositionFromUserFunc({
      userFunc: t,
      direction: n,
      currentPosition: o,
      headerPosition: s,
      headerRowCount: i
    });
    return !!a && this.focusProvidedHeaderPosition({
      headerPosition: a,
      direction: n,
      event: r
    });
  }
  getHeaderPositionFromUserFunc(e) {
    const { userFunc: t, direction: s, currentPosition: n, headerPosition: r, headerRowCount: o } = e, a = t({
      backwards: s === "Before",
      previousHeaderPosition: n,
      nextHeaderPosition: r,
      headerRowCount: o
    });
    return a === !0 ? n : a === !1 ? null : a;
  }
  focusProvidedHeaderPosition(e) {
    const { headerPosition: t, direction: s, fromCell: n, rowWithoutSpanValue: r, event: o } = e, { column: i, headerRowIndex: a } = t, { filterManager: l, ctrlsSvc: c, headerNavigation: d } = this.beans;
    if (a === -1)
      return l != null && l.isAdvFilterHeaderActive() ? this.focusAdvancedFilter(t) : this.focusGridView({ column: i, event: o });
    d == null || d.scrollToColumn(i, s);
    const u = c.getHeaderRowContainerCtrl(i.getPinned()), h = (u == null ? void 0 : u.focusHeader(t.headerRowIndex, i, o)) || !1;
    return d && h && (r != null || n) && (d.currentHeaderRowWithoutSpan = r ?? -1), h;
  }
  focusFirstHeader() {
    var n;
    if ((n = this.overlays) != null && n.isExclusive() && this.focusOverlay())
      return !0;
    let e = this.visibleCols.allCols[0];
    if (!e)
      return !1;
    const { colGroupSvc: t } = this.beans;
    t && e.getParent() && (e = t.getColGroupAtLevel(e, 0));
    const s = nr(e, 0);
    return this.focusHeaderPosition({
      headerPosition: s,
      rowWithoutSpanValue: 0
    });
  }
  focusLastHeader(e) {
    var n;
    if ((n = this.overlays) != null && n.isExclusive() && this.focusOverlay(!0))
      return !0;
    const t = st(this.beans) - 1, s = Ce(this.visibleCols.allCols);
    return this.focusHeaderPosition({
      headerPosition: { headerRowIndex: t, column: s },
      rowWithoutSpanValue: -1,
      event: e
    });
  }
  focusPreviousFromFirstCell(e) {
    var t;
    return (t = this.filterManager) != null && t.isAdvFilterHeaderActive() ? this.focusAdvancedFilter(null) : this.focusLastHeader(e);
  }
  isAnyCellFocused() {
    return !!this.focusedCell;
  }
  isRowFocused(e, t) {
    return this.focusedCell == null ? !1 : this.focusedCell.rowIndex === e && this.focusedCell.rowPinned === Dt(t);
  }
  focusOverlay(e) {
    var s, n;
    const t = ((s = this.overlays) == null ? void 0 : s.isVisible()) && ((n = this.overlays.eWrapper) == null ? void 0 : n.getGui());
    return !!t && Ys(t, e);
  }
  focusGridView(e) {
    var o, i, a, l, c, d;
    const { backwards: t = !1, canFocusOverlay: s = !0, event: n } = e;
    if ((o = this.overlays) != null && o.isExclusive())
      return s && this.focusOverlay(t);
    if (pr(this.beans))
      return t && !Et(this.beans) ? this.focusLastHeader() : s && this.focusOverlay(t) ? !0 : t ? !1 : cs(this.beans, t);
    const r = t ? Yd(this.beans) : Kd(this.beans);
    if (r) {
      const u = e.column ?? ((i = this.focusedHeader) == null ? void 0 : i.column), { rowIndex: h, rowPinned: g } = r, f = Wi(this.beans, r);
      if (!u || !f || h == null)
        return !1;
      if (u.isSuppressNavigable(f)) {
        const C = this.gos.get("enableRtl");
        let p;
        return !n || n.key === j.TAB ? p = C ? j.LEFT : j.RIGHT : p = n.key, (a = this.beans.navigation) == null || a.navigateToNextCell(
          null,
          p,
          { rowIndex: h, column: u, rowPinned: g || null },
          !0
        ), !0;
      }
      if ((l = this.navigation) == null || l.ensureCellVisible({ rowIndex: h, column: u, rowPinned: g }), t) {
        const C = this.rowRenderer.getRowByPosition(r);
        if (C != null && C.isFullWidth() && ((c = this.navigation) != null && c.tryToFocusFullWidthRow(r, t)))
          return !0;
      }
      return this.setFocusedCell({
        rowIndex: h,
        column: u,
        rowPinned: Dt(g),
        forceBrowserFocus: !0
      }), (d = this.beans.rangeSvc) == null || d.setRangeToCell({ rowIndex: h, rowPinned: g, column: u }), !0;
    }
    return !!(s && this.focusOverlay(t) || t && this.focusLastHeader());
  }
  focusAdvancedFilter(e) {
    var t;
    return this.advFilterFocusColumn = e == null ? void 0 : e.column, ((t = this.beans.advancedFilter) == null ? void 0 : t.getCtrl().focusHeaderComp()) ?? !1;
  }
  focusNextFromAdvancedFilter(e, t) {
    var n;
    const s = (t ? void 0 : this.advFilterFocusColumn) ?? ((n = this.visibleCols.allCols) == null ? void 0 : n[0]);
    return e ? this.focusHeaderPosition({
      headerPosition: {
        column: s,
        headerRowIndex: st(this.beans) - 1
      }
    }) : this.focusGridView({ column: s });
  }
  clearAdvancedFilterColumn() {
    this.advFilterFocusColumn = void 0;
  }
}, Bf = class extends K {
  constructor() {
    super(...arguments), this.beanName = "scrollVisibleSvc";
  }
  wireBeans(e) {
    this.ctrlsSvc = e.ctrlsSvc, this.colAnimation = e.colAnimation;
  }
  postConstruct() {
    this.getScrollbarWidth(), this.addManagedEventListeners({
      displayedColumnsChanged: this.updateScrollVisible.bind(this),
      displayedColumnsWidthChanged: this.updateScrollVisible.bind(this)
    });
  }
  updateScrollVisible() {
    const { colAnimation: e } = this;
    e != null && e.isActive() ? e.executeLaterVMTurn(() => {
      e.executeLaterVMTurn(() => this.updateScrollVisibleImpl());
    }) : this.updateScrollVisibleImpl();
  }
  updateScrollVisibleImpl() {
    var s;
    const e = this.ctrlsSvc.get("center");
    if (!e || (s = this.colAnimation) != null && s.isActive())
      return;
    const t = {
      horizontalScrollShowing: e.isHorizontalScrollShowing(),
      verticalScrollShowing: this.verticalScrollShowing
    };
    this.setScrollsVisible(t), this.updateScrollGap();
  }
  updateScrollGap() {
    const e = this.ctrlsSvc.get("center"), t = e.hasHorizontalScrollGap(), s = e.hasVerticalScrollGap();
    (this.horizontalScrollGap !== t || this.verticalScrollGap !== s) && (this.horizontalScrollGap = t, this.verticalScrollGap = s, this.eventSvc.dispatchEvent({
      type: "scrollGapChanged"
    }));
  }
  setScrollsVisible(e) {
    (this.horizontalScrollShowing !== e.horizontalScrollShowing || this.verticalScrollShowing !== e.verticalScrollShowing) && (this.horizontalScrollShowing = e.horizontalScrollShowing, this.verticalScrollShowing = e.verticalScrollShowing, this.eventSvc.dispatchEvent({
      type: "scrollVisibilityChanged"
    }));
  }
  // the user might be using some non-standard scrollbar, eg a scrollbar that has zero
  // width and overlays (like the Safari scrollbar, but presented in Chrome). so we
  // allow the user to provide the scroll width before we work it out.
  getScrollbarWidth() {
    if (this.scrollbarWidth == null) {
      const e = this.gos.get("scrollbarWidth"), s = typeof e == "number" && e >= 0 ? e : bl();
      s != null && (this.scrollbarWidth = s, this.eventSvc.dispatchEvent({
        type: "scrollbarWidthChanged"
      }));
    }
    return this.scrollbarWidth;
  }
}, Wf = class extends K {
  constructor() {
    super(...arguments), this.beanName = "gridDestroySvc", this.destroyCalled = !1;
  }
  destroy() {
    var n;
    if (this.destroyCalled)
      return;
    const { stateSvc: e, ctrlsSvc: t, context: s } = this.beans;
    this.eventSvc.dispatchEvent({
      type: "gridPreDestroyed",
      state: (e == null ? void 0 : e.getState()) ?? {}
    }), this.destroyCalled = !0, (n = t.get("gridCtrl")) == null || n.destroyGridUi(), s.destroy(), super.destroy();
  }
}, Nf = /* @__PURE__ */ new Set(["gridPreDestroyed", "fillStart", "pasteStart"]), Vf = {
  suppressContextMenu: !1,
  preventDefaultOnContextMenu: !1,
  allowContextMenuWithControlKey: !1,
  suppressMenuHide: !0,
  enableBrowserTooltips: !1,
  tooltipTrigger: "hover",
  tooltipShowDelay: 2e3,
  tooltipHideDelay: 1e4,
  tooltipMouseTrack: !1,
  tooltipShowMode: "standard",
  tooltipInteraction: !1,
  copyHeadersToClipboard: !1,
  copyGroupHeadersToClipboard: !1,
  clipboardDelimiter: "	",
  suppressCopyRowsToClipboard: !1,
  suppressCopySingleCellRanges: !1,
  suppressLastEmptyLineOnPaste: !1,
  suppressClipboardPaste: !1,
  suppressClipboardApi: !1,
  suppressCutToClipboard: !1,
  maintainColumnOrder: !1,
  enableStrictPivotColumnOrder: !1,
  suppressFieldDotNotation: !1,
  allowDragFromColumnsToolPanel: !1,
  suppressMovableColumns: !1,
  suppressColumnMoveAnimation: !1,
  suppressMoveWhenColumnDragging: !1,
  suppressDragLeaveHidesColumns: !1,
  suppressRowGroupHidesColumns: !1,
  suppressAutoSize: !1,
  autoSizePadding: 20,
  skipHeaderOnAutoSize: !1,
  singleClickEdit: !1,
  suppressClickEdit: !1,
  readOnlyEdit: !1,
  stopEditingWhenCellsLoseFocus: !1,
  enterNavigatesVertically: !1,
  enterNavigatesVerticallyAfterEdit: !1,
  enableCellEditingOnBackspace: !1,
  undoRedoCellEditing: !1,
  undoRedoCellEditingLimit: 10,
  suppressCsvExport: !1,
  suppressExcelExport: !1,
  cacheQuickFilter: !1,
  includeHiddenColumnsInQuickFilter: !1,
  excludeChildrenWhenTreeDataFiltering: !1,
  enableAdvancedFilter: !1,
  includeHiddenColumnsInAdvancedFilter: !1,
  enableCharts: !1,
  masterDetail: !1,
  keepDetailRows: !1,
  keepDetailRowsCount: 10,
  detailRowAutoHeight: !1,
  tabIndex: 0,
  rowBuffer: 10,
  valueCache: !1,
  valueCacheNeverExpires: !1,
  enableCellExpressions: !1,
  suppressTouch: !1,
  suppressFocusAfterRefresh: !1,
  suppressBrowserResizeObserver: !1,
  suppressPropertyNamesCheck: !1,
  suppressChangeDetection: !1,
  debug: !1,
  suppressLoadingOverlay: !1,
  suppressNoRowsOverlay: !1,
  pagination: !1,
  paginationPageSize: 100,
  paginationPageSizeSelector: !0,
  paginationAutoPageSize: !1,
  paginateChildRows: !1,
  suppressPaginationPanel: !1,
  pivotMode: !1,
  pivotPanelShow: "never",
  pivotDefaultExpanded: 0,
  pivotSuppressAutoColumn: !1,
  suppressExpandablePivotGroups: !1,
  functionsReadOnly: !1,
  suppressAggFuncInHeader: !1,
  alwaysAggregateAtRootLevel: !1,
  aggregateOnlyChangedColumns: !1,
  suppressAggFilteredOnly: !1,
  removePivotHeaderRowWhenSingleValueColumn: !1,
  animateRows: !0,
  cellFlashDuration: 500,
  cellFadeDuration: 1e3,
  allowShowChangeAfterFilter: !1,
  domLayout: "normal",
  ensureDomOrder: !1,
  enableRtl: !1,
  suppressColumnVirtualisation: !1,
  suppressMaxRenderedRowRestriction: !1,
  suppressRowVirtualisation: !1,
  rowDragManaged: !1,
  suppressRowDrag: !1,
  suppressMoveWhenRowDragging: !1,
  rowDragEntireRow: !1,
  rowDragMultiRow: !1,
  embedFullWidthRows: !1,
  groupDisplayType: "singleColumn",
  groupDefaultExpanded: 0,
  groupMaintainOrder: !1,
  groupSelectsChildren: !1,
  groupSuppressBlankHeader: !1,
  groupSelectsFiltered: !1,
  showOpenedGroup: !1,
  groupRemoveSingleChildren: !1,
  groupRemoveLowestSingleChildren: !1,
  groupHideOpenParents: !1,
  groupAllowUnbalanced: !1,
  rowGroupPanelShow: "never",
  suppressMakeColumnVisibleAfterUnGroup: !1,
  treeData: !1,
  rowGroupPanelSuppressSort: !1,
  suppressGroupRowsSticky: !1,
  rowModelType: "clientSide",
  asyncTransactionWaitMillis: 50,
  suppressModelUpdateAfterUpdateTransaction: !1,
  cacheOverflowSize: 1,
  infiniteInitialRowCount: 1,
  serverSideInitialRowCount: 1,
  cacheBlockSize: 100,
  maxBlocksInCache: -1,
  maxConcurrentDatasourceRequests: 2,
  blockLoadDebounceMillis: 0,
  purgeClosedRowNodes: !1,
  serverSideSortAllLevels: !1,
  serverSideOnlyRefreshFilteredGroups: !1,
  serverSidePivotResultFieldSeparator: "_",
  viewportRowModelPageSize: 5,
  viewportRowModelBufferSize: 5,
  alwaysShowHorizontalScroll: !1,
  alwaysShowVerticalScroll: !1,
  debounceVerticalScrollbar: !1,
  suppressHorizontalScroll: !1,
  suppressScrollOnNewData: !1,
  suppressScrollWhenPopupsAreOpen: !1,
  suppressAnimationFrame: !1,
  suppressMiddleClickScrolls: !1,
  suppressPreventDefaultOnMouseWheel: !1,
  rowMultiSelectWithClick: !1,
  suppressRowDeselection: !1,
  suppressRowClickSelection: !1,
  suppressCellFocus: !1,
  suppressHeaderFocus: !1,
  suppressMultiRangeSelection: !1,
  enableCellTextSelection: !1,
  enableRangeSelection: !1,
  enableRangeHandle: !1,
  enableFillHandle: !1,
  fillHandleDirection: "xy",
  suppressClearOnFillReduction: !1,
  accentedSort: !1,
  unSortIcon: !1,
  suppressMultiSort: !1,
  alwaysMultiSort: !1,
  suppressMaintainUnsortedOrder: !1,
  suppressRowHoverHighlight: !1,
  suppressRowTransform: !1,
  columnHoverHighlight: !1,
  deltaSort: !1,
  enableGroupEdit: !1,
  groupLockGroupColumns: 0,
  serverSideEnableClientSideSort: !1,
  suppressServerSideFullWidthLoadingRow: !1,
  pivotMaxGeneratedColumns: -1,
  columnMenu: "new",
  reactiveCustomComponents: !0,
  suppressSetFilterByDefault: !1,
  rowNumbers: !1
}, es = (e, t) => ({
  tag: "span",
  ref: `eSort${e}`,
  cls: `ag-sort-indicator-icon ag-sort-${t} ag-hidden`,
  attrs: { "aria-hidden": "true" }
}), _f = {
  tag: "span",
  cls: "ag-sort-indicator-container",
  children: [
    es("Order", "order"),
    es("Asc", "ascending-icon"),
    es("Desc", "descending-icon"),
    es("Mixed", "mixed-icon"),
    es("None", "none-icon")
  ]
}, Sr = class extends ut {
  constructor(e) {
    super(), this.eSortOrder = de, this.eSortAsc = de, this.eSortDesc = de, this.eSortMixed = de, this.eSortNone = de, e || this.setTemplate(_f);
  }
  attachCustomElements(e, t, s, n, r) {
    this.eSortOrder = e, this.eSortAsc = t, this.eSortDesc = s, this.eSortMixed = n, this.eSortNone = r;
  }
  setupSort(e, t = !1) {
    if (this.column = e, this.suppressOrder = t, this.setupMultiSortIndicator(), !e.isSortable() && !e.getColDef().showRowGroup)
      return;
    this.addInIcon("sortAscending", this.eSortAsc, e), this.addInIcon("sortDescending", this.eSortDesc, e), this.addInIcon("sortUnSort", this.eSortNone, e);
    const s = this.updateIcons.bind(this), n = this.onSortChanged.bind(this);
    this.addManagedPropertyListener("unSortIcon", s), this.addManagedEventListeners({
      newColumnsLoaded: s,
      // Watch global events, as row group columns can effect their display column.
      sortChanged: n,
      // when grouping changes so can sort indexes and icons
      columnRowGroupChanged: n
    }), this.onSortChanged();
  }
  addInIcon(e, t, s) {
    if (t == null)
      return;
    const n = dn(e, this.beans, s);
    n && t.appendChild(n);
  }
  onSortChanged() {
    this.updateIcons(), this.suppressOrder || this.updateSortOrder();
  }
  updateIcons() {
    const { eSortAsc: e, eSortDesc: t, eSortNone: s, column: n, gos: r, beans: o } = this, i = o.sortSvc.getDisplaySortForColumn(n);
    if (e && Me(e, i === "asc", { skipAriaHidden: !0 }), t && Me(t, i === "desc", { skipAriaHidden: !0 }), s) {
      const a = !n.getColDef().unSortIcon && !r.get("unSortIcon"), l = i == null;
      Me(s, !a && l, { skipAriaHidden: !0 });
    }
  }
  setupMultiSortIndicator() {
    const { eSortMixed: e, column: t, gos: s } = this;
    this.addInIcon("sortUnSort", e, t);
    const n = t.getColDef().showRowGroup;
    at(s) && n && (this.addManagedEventListeners({
      // Watch global events, as row group columns can effect their display column.
      sortChanged: this.updateMultiSortIndicator.bind(this),
      // when grouping changes so can sort indexes and icons
      columnRowGroupChanged: this.updateMultiSortIndicator.bind(this)
    }), this.updateMultiSortIndicator());
  }
  updateMultiSortIndicator() {
    const { eSortMixed: e, beans: t, column: s } = this;
    if (e) {
      const n = t.sortSvc.getDisplaySortForColumn(s) === "mixed";
      Me(e, n, { skipAriaHidden: !0 });
    }
  }
  // we listen here for global sort events, NOT column sort events, as we want to do this
  // when sorting has been set on all column (if we listened just for our col (where we
  // set the asc / desc icons) then it's possible other cols are yet to get their sorting state.
  updateSortOrder() {
    const {
      eSortOrder: e,
      column: t,
      beans: { sortSvc: s }
    } = this;
    if (!e)
      return;
    const n = s.getColumnsWithSortingOrdered(), r = s.getDisplaySortIndexForColumn(t) ?? -1, o = n.some(
      (a) => s.getDisplaySortIndexForColumn(a) ?? !1
    ), i = r >= 0 && o;
    Me(e, i, { skipAriaHidden: !0 }), r >= 0 ? e.textContent = (r + 1).toString() : fs(e);
  }
}, zf = {
  selector: "AG-SORT-INDICATOR",
  component: Sr
}, $f = ["asc", "desc", null], jf = class extends K {
  constructor() {
    super(...arguments), this.beanName = "sortSvc";
  }
  progressSort(e, t, s) {
    const n = this.getNextSortDirection(e);
    this.setSortForColumn(e, n, t, s);
  }
  progressSortFromEvent(e, t) {
    const n = this.gos.get("multiSortKey") === "ctrl" ? t.ctrlKey || t.metaKey : t.shiftKey;
    this.progressSort(e, n, "uiColumnSorted");
  }
  setSortForColumn(e, t, s, n) {
    var d;
    t !== "asc" && t !== "desc" && (t = null);
    const { gos: r, showRowGroupCols: o } = this.beans, i = at(r);
    let a = [e];
    if (i && e.getColDef().showRowGroup) {
      const u = (d = o == null ? void 0 : o.getSourceColumnsForGroupColumn) == null ? void 0 : d.call(o, e), h = u == null ? void 0 : u.filter((g) => g.isSortable());
      h && (a = [e, ...h]);
    }
    a.forEach((u) => this.setColSort(u, t, n));
    const l = (s || r.get("alwaysMultiSort")) && !r.get("suppressMultiSort"), c = [];
    if (!l) {
      const u = this.clearSortBarTheseColumns(a, n);
      c.push(...u);
    }
    this.updateSortIndex(e), c.push(...a), this.dispatchSortChangedEvents(n, c);
  }
  updateSortIndex(e) {
    const { gos: t, colModel: s, showRowGroupCols: n } = this.beans, r = at(t), o = n == null ? void 0 : n.getShowRowGroupCol(e.getId()), i = r && o || e, a = this.getColumnsWithSortingOrdered();
    s.forAllCols((d) => this.setColSortIndex(d, null));
    const l = a.filter((d) => r && d.getColDef().showRowGroup ? !1 : d !== i);
    (i.getSort() ? [...l, i] : l).forEach((d, u) => this.setColSortIndex(d, u));
  }
  // gets called by API, so if data changes, use can call this, which will end up
  // working out the sort order again of the rows.
  onSortChanged(e, t) {
    this.dispatchSortChangedEvents(e, t);
  }
  isSortActive() {
    let e = !1;
    return this.beans.colModel.forAllCols((t) => {
      t.getSort() && (e = !0);
    }), e;
  }
  dispatchSortChangedEvents(e, t) {
    const s = {
      type: "sortChanged",
      source: e
    };
    t && (s.columns = t), this.eventSvc.dispatchEvent(s);
  }
  clearSortBarTheseColumns(e, t) {
    const s = [];
    return this.beans.colModel.forAllCols((n) => {
      e.includes(n) || (n.getSort() && s.push(n), this.setColSort(n, void 0, t));
    }), s;
  }
  getNextSortDirection(e) {
    const t = e.getColDef().sortingOrder ?? this.gos.get("sortingOrder") ?? $f, s = t.indexOf(e.getSort()), n = s < 0, r = s == t.length - 1;
    return n || r ? t[0] : t[s + 1];
  }
  /**
   * @returns a map of sort indexes for every sorted column, if groups sort primaries then they will have equivalent indices
   */
  getIndexedSortMap() {
    const { gos: e, colModel: t, showRowGroupCols: s, rowGroupColsSvc: n } = this.beans;
    let r = [];
    if (t.forAllCols((c) => {
      c.getSort() && r.push(c);
    }), t.isPivotMode()) {
      const c = at(e);
      r = r.filter((d) => {
        const u = !!d.getAggFunc(), h = !d.isPrimary(), g = c ? s == null ? void 0 : s.getShowRowGroupCol(d.getId()) : d.getColDef().showRowGroup;
        return u || h || g;
      });
    }
    const o = (n == null ? void 0 : n.columns.filter((c) => !!c.getSort())) ?? [], i = {};
    r.forEach((c, d) => i[c.getId()] = d), r.sort((c, d) => {
      const u = c.getSortIndex(), h = d.getSortIndex();
      if (u != null && h != null)
        return u - h;
      if (u == null && h == null) {
        const g = i[c.getId()], f = i[d.getId()];
        return g > f ? 1 : -1;
      } else return h == null ? -1 : 1;
    });
    const a = at(e) && !!o.length;
    a && (r = [
      ...new Set(
        // if linked sorting, replace all columns with the display group column for index purposes, and ensure uniqueness
        r.map((c) => (s == null ? void 0 : s.getShowRowGroupCol(c.getId())) ?? c)
      )
    ]);
    const l = /* @__PURE__ */ new Map();
    return r.forEach((c, d) => l.set(c, d)), a && o.forEach((c) => {
      const d = s.getShowRowGroupCol(c.getId());
      l.set(c, l.get(d));
    }), l;
  }
  getColumnsWithSortingOrdered() {
    return [...this.getIndexedSortMap().entries()].sort(([, e], [, t]) => e - t).map(([e]) => e);
  }
  // used by server side row models, to sent sort to server
  getSortModel() {
    return this.getColumnsWithSortingOrdered().filter((e) => e.getSort()).map((e) => ({
      sort: e.getSort(),
      colId: e.getId()
    }));
  }
  getSortOptions() {
    return this.getColumnsWithSortingOrdered().filter((e) => e.getSort()).map((e) => ({
      sort: e.getSort(),
      column: e
    }));
  }
  canColumnDisplayMixedSort(e) {
    const t = at(this.gos), s = !!e.getColDef().showRowGroup;
    return t && s;
  }
  getDisplaySortForColumn(e) {
    var i;
    const t = (i = this.beans.showRowGroupCols) == null ? void 0 : i.getSourceColumnsForGroupColumn(e);
    if (!this.canColumnDisplayMixedSort(e) || !(t != null && t.length))
      return e.getSort();
    const n = e.getColDef().field != null || !!e.getColDef().valueGetter ? [e, ...t] : t, r = n[0].getSort();
    return n.every((a) => a.getSort() == r) ? r : "mixed";
  }
  getDisplaySortIndexForColumn(e) {
    return this.getIndexedSortMap().get(e);
  }
  setupHeader(e, t, s) {
    let n = 0;
    e.addManagedListeners(t, {
      movingChanged: () => {
        n = Date.now();
      }
    }), s && e.addManagedElementListeners(s, {
      click: (o) => {
        const i = t.isMoving(), l = Date.now() - n < 50;
        i || l || this.progressSortFromEvent(t, o);
      }
    });
    const r = () => {
      var i;
      const o = t.getSort();
      if (e.toggleCss("ag-header-cell-sorted-asc", o === "asc"), e.toggleCss("ag-header-cell-sorted-desc", o === "desc"), e.toggleCss("ag-header-cell-sorted-none", !o), t.getColDef().showRowGroup) {
        const a = (i = this.beans.showRowGroupCols) == null ? void 0 : i.getSourceColumnsForGroupColumn(t), c = !(a == null ? void 0 : a.every(
          (d) => t.getSort() == d.getSort()
        ));
        e.toggleCss("ag-header-cell-sorted-mixed", c);
      }
    };
    e.addManagedEventListeners({
      sortChanged: r,
      columnRowGroupChanged: r
    });
  }
  initCol(e) {
    const { sort: t, initialSort: s, sortIndex: n, initialSortIndex: r } = e.colDef;
    t !== void 0 ? (t === "asc" || t === "desc") && (e.sort = t) : (s === "asc" || s === "desc") && (e.sort = s), n !== void 0 ? n !== null && (e.sortIndex = n) : r !== null && (e.sortIndex = r);
  }
  updateColSort(e, t, s) {
    t !== void 0 && (t === "desc" || t === "asc" ? this.setColSort(e, t, s) : this.setColSort(e, void 0, s));
  }
  setColSort(e, t, s) {
    e.sort !== t && (e.sort = t, e.dispatchColEvent("sortChanged", s)), e.dispatchStateUpdatedEvent("sort");
  }
  setColSortIndex(e, t) {
    e.sortIndex = t, e.dispatchStateUpdatedEvent("sortIndex");
  }
  createSortIndicator(e) {
    return new Sr(e);
  }
  getSortIndicatorSelector() {
    return zf;
  }
}, Wn = {
  agSetColumnFilter: "SetFilter",
  agSetColumnFloatingFilter: "SetFilter",
  agMultiColumnFilter: "MultiFilter",
  agMultiColumnFloatingFilter: "MultiFilter",
  agGroupColumnFilter: "GroupFilter",
  agGroupColumnFloatingFilter: "GroupFilter",
  agGroupCellRenderer: "GroupCellRenderer",
  agGroupRowRenderer: "GroupCellRenderer",
  agRichSelect: "RichSelect",
  agRichSelectCellEditor: "RichSelect",
  agDetailCellRenderer: "SharedMasterDetail",
  agSparklineCellRenderer: "Sparklines",
  agDragAndDropImage: "SharedDragAndDrop",
  agColumnHeader: "ColumnHeaderComp",
  agColumnGroupHeader: "ColumnGroupHeaderComp",
  agSortIndicator: "Sort",
  agAnimateShowChangeCellRenderer: "HighlightChanges",
  agAnimateSlideCellRenderer: "HighlightChanges",
  agLoadingCellRenderer: "LoadingCellRenderer",
  agSkeletonCellRenderer: "SkeletonCellRenderer",
  agCheckboxCellRenderer: "CheckboxCellRenderer",
  agLoadingOverlay: "Overlay",
  agNoRowsOverlay: "Overlay",
  agTooltipComponent: "Tooltip",
  agReadOnlyFloatingFilter: "CustomFilter",
  agTextColumnFilter: "TextFilter",
  agNumberColumnFilter: "NumberFilter",
  agDateColumnFilter: "DateFilter",
  agDateInput: "DateFilter",
  agTextColumnFloatingFilter: "TextFilter",
  agNumberColumnFloatingFilter: "NumberFilter",
  agDateColumnFloatingFilter: "DateFilter",
  agCellEditor: "TextEditor",
  agSelectCellEditor: "SelectEditor",
  agTextCellEditor: "TextEditor",
  agNumberCellEditor: "NumberEditor",
  agDateCellEditor: "DateEditor",
  agDateStringCellEditor: "DateEditor",
  agCheckboxCellEditor: "CheckboxEditor",
  agLargeTextCellEditor: "LargeTextEditor",
  agMenuItem: "MenuItem",
  agColumnsToolPanel: "ColumnsToolPanel",
  agFiltersToolPanel: "FiltersToolPanel",
  agAggregationComponent: "StatusBar",
  agSelectedRowCountComponent: "StatusBar",
  agTotalRowCountComponent: "StatusBar",
  agFilteredRowCountComponent: "StatusBar",
  agTotalAndFilteredRowCountComponent: "StatusBar",
  agFindCellRenderer: "Find"
}, Uf = {
  aggFunc: "SharedAggregation",
  autoHeight: "RowAutoHeight",
  cellClass: "CellStyle",
  cellClassRules: "CellStyle",
  cellEditor: ({ cellEditor: e, editable: t }) => t ? typeof e == "string" ? Wn[e] ?? "CustomEditor" : "CustomEditor" : null,
  cellRenderer: ({ cellRenderer: e }) => typeof e != "string" ? null : Wn[e],
  cellStyle: "CellStyle",
  columnChooserParams: "ColumnMenu",
  contextMenuItems: "ContextMenu",
  dndSource: "DragAndDrop",
  dndSourceOnRowDrag: "DragAndDrop",
  editable: ({ editable: e, cellEditor: t }) => e && !t ? "TextEditor" : null,
  enableCellChangeFlash: "HighlightChanges",
  enablePivot: "SharedPivot",
  enableRowGroup: "SharedRowGrouping",
  enableValue: "SharedAggregation",
  filter: ({ filter: e }) => e && typeof e != "string" && typeof e != "boolean" ? "CustomFilter" : typeof e == "string" ? Wn[e] ?? "ColumnFilter" : "ColumnFilter",
  floatingFilter: "ColumnFilter",
  getQuickFilterText: "QuickFilter",
  headerTooltip: "Tooltip",
  mainMenuItems: "ColumnMenu",
  menuTabs: (e) => {
    var s;
    const t = ["columnsMenuTab", "generalMenuTab"];
    return (s = e.menuTabs) != null && s.some((n) => t.includes(n)) ? "ColumnMenu" : null;
  },
  pivot: "SharedPivot",
  pivotIndex: "SharedPivot",
  rowDrag: "RowDrag",
  rowGroup: "SharedRowGrouping",
  rowGroupIndex: "SharedRowGrouping",
  tooltipField: "Tooltip",
  tooltipValueGetter: "Tooltip",
  spanRows: "CellSpan"
}, Kf = {
  alignedGrids: "AlignedGrids",
  allowContextMenuWithControlKey: "ContextMenu",
  autoSizeStrategy: "ColumnAutoSize",
  cellSelection: "CellSelection",
  columnHoverHighlight: "ColumnHover",
  datasource: "InfiniteRowModel",
  doesExternalFilterPass: "ExternalFilter",
  editType: "EditCore",
  enableAdvancedFilter: "AdvancedFilter",
  enableCellSpan: "CellSpan",
  enableCharts: "IntegratedCharts",
  enableRangeSelection: "CellSelection",
  enableRowPinning: "PinnedRow",
  findSearchValue: "Find",
  getContextMenuItems: "ContextMenu",
  getLocaleText: "Locale",
  getMainMenuItems: "ColumnMenu",
  getRowClass: "RowStyle",
  getRowStyle: "RowStyle",
  groupTotalRow: "SharedRowGrouping",
  grandTotalRow: "SharedRowGrouping",
  initialState: "GridState",
  isExternalFilterPresent: "ExternalFilter",
  isRowPinnable: "PinnedRow",
  localeText: "Locale",
  masterDetail: "SharedMasterDetail",
  pagination: "Pagination",
  pinnedBottomRowData: "PinnedRow",
  pinnedTopRowData: "PinnedRow",
  pivotMode: "SharedPivot",
  pivotPanelShow: "RowGroupingPanel",
  quickFilterText: "QuickFilter",
  rowClass: "RowStyle",
  rowClassRules: "RowStyle",
  rowData: "ClientSideRowModel",
  rowDragManaged: "RowDrag",
  rowGroupPanelShow: "RowGroupingPanel",
  rowNumbers: "RowNumbers",
  rowSelection: "SharedRowSelection",
  rowStyle: "RowStyle",
  serverSideDatasource: "ServerSideRowModel",
  sideBar: "SideBar",
  statusBar: "StatusBar",
  treeData: "SharedTreeData",
  undoRedoCellEditing: "UndoRedoEdit",
  valueCache: "ValueCache",
  viewportDatasource: "ViewportRowModel"
}, Yf = 0, Zf = 0, qf = class extends K {
  constructor() {
    super(...arguments), this.beanName = "gos", this.domDataKey = "__AG_" + Math.random().toString(), this.gridInstanceId = Zf++, this.gridReadyFired = !1, this.queueEvents = [], this.propEventSvc = new gs(), this.globalEventHandlerFactory = (e) => (t, s) => {
      if (!this.isAlive())
        return;
      const n = Nf.has(t);
      if (n && !e || !n && e)
        return;
      const r = (o, i) => {
        const a = this.gridOptions[ql(o)];
        typeof a == "function" && this.beans.frameworkOverrides.wrapOutgoing(() => a(i));
      };
      if (this.gridReadyFired)
        r(t, s);
      else if (t === "gridReady") {
        r(t, s), this.gridReadyFired = !0;
        for (const o of this.queueEvents)
          r(o.eventName, o.event);
        this.queueEvents = [];
      } else
        this.queueEvents.push({ eventName: t, event: s });
    };
  }
  wireBeans(e) {
    this.gridOptions = e.gridOptions, this.validation = e.validation, this.api = e.gridApi, this.gridId = e.context.getGridId();
  }
  // This is quicker then having code call gridOptionsService.get('context')
  get gridOptionsContext() {
    return this.gridOptions.context;
  }
  postConstruct() {
    this.validateGridOptions(this.gridOptions), this.eventSvc.addGlobalListener(this.globalEventHandlerFactory().bind(this), !0), this.eventSvc.addGlobalListener(this.globalEventHandlerFactory(!0).bind(this), !1), this.propEventSvc.setFrameworkOverrides(this.beans.frameworkOverrides), this.addManagedEventListeners({
      gridOptionsChanged: ({ options: e }) => {
        this.updateGridOptions({ options: e, force: !0, source: "gridOptionsUpdated" });
      }
    });
  }
  destroy() {
    super.destroy(), this.queueEvents = [];
  }
  /**
   * Get the raw value of the GridOptions property provided.
   * @param property
   */
  get(e) {
    return this.gridOptions[e] ?? Vf[e];
  }
  /**
   * Get the GridOption callback but wrapped so that the common params of api and context are automatically applied to the params.
   * @param property GridOption callback properties based on the fact that this property has a callback with params extending AgGridCommon
   */
  getCallback(e) {
    return this.mergeGridCommonParams(this.gridOptions[e]);
  }
  /**
   * Returns `true` if a value has been specified for this GridOption.
   * @param property GridOption property
   */
  exists(e) {
    return te(this.gridOptions[e]);
  }
  /**
   * Wrap the user callback and attach the api and context to the params object on the way through.
   * @param callback User provided callback
   * @returns Wrapped callback where the params object not require api and context
   */
  mergeGridCommonParams(e) {
    return e && ((s) => e(this.addGridCommonParams(s)));
  }
  updateGridOptions({
    options: e,
    force: t,
    source: s = "api"
  }) {
    const n = { id: Yf++, properties: [] }, r = [], { gridOptions: o, validation: i } = this;
    for (const a of Object.keys(e)) {
      const l = e[a];
      i == null || i.warnOnInitialPropertyUpdate(s, a);
      const c = t || typeof l == "object" && s === "api", d = o[a];
      if (c || d !== l) {
        o[a] = l;
        const u = {
          type: a,
          currentValue: l,
          previousValue: d,
          changeSet: n,
          source: s
        };
        r.push(u);
      }
    }
    this.validateGridOptions(this.gridOptions), n.properties = r.map((a) => a.type), r.forEach((a) => {
      Ns(this, `Updated property ${a.type} from`, a.previousValue, " to ", a.currentValue), this.propEventSvc.dispatchEvent(a);
    });
  }
  addPropertyEventListener(e, t) {
    this.propEventSvc.addEventListener(e, t);
  }
  removePropertyEventListener(e, t) {
    this.propEventSvc.removeEventListener(e, t);
  }
  getDomDataKey() {
    return this.domDataKey;
  }
  /** Prefer _addGridCommonParams from gridOptionsUtils for bundle size savings */
  addGridCommonParams(e) {
    return e.api = this.api, e.context = this.gridOptionsContext, e;
  }
  validateOptions(e, t) {
    for (const s of Object.keys(e)) {
      const n = e[s];
      if (n == null || n === !1)
        continue;
      let r = t[s];
      typeof r == "function" && (r = r(e, this.gridOptions, this.beans)), r && this.assertModuleRegistered(r, s);
    }
  }
  validateGridOptions(e) {
    var t;
    this.validateOptions(e, Kf), (t = this.validation) == null || t.processGridOptions(e);
  }
  validateColDef(e, t, s) {
    var n, r;
    (s || !((n = this.beans.dataTypeSvc) != null && n.isColPendingInference(t))) && (this.validateOptions(e, Uf), (r = this.validation) == null || r.validateColDef(e));
  }
  assertModuleRegistered(e, t) {
    const s = Array.isArray(e) ? e.some((n) => this.isModuleRegistered(n)) : this.isModuleRegistered(e);
    return s || je(200, {
      ...this.getModuleErrorParams(),
      moduleName: e,
      reasonOrId: t
    }), s;
  }
  getModuleErrorParams() {
    return {
      gridId: this.gridId,
      gridScoped: Ai(),
      rowModelType: this.get("rowModelType"),
      isUmd: Cd()
    };
  }
  isModuleRegistered(e) {
    return Qn(e, this.gridId, this.get("rowModelType"));
  }
};
function ba(e) {
  const t = { "aria-hidden": "true" };
  return {
    tag: "div",
    cls: "ag-cell-label-container",
    role: "presentation",
    children: [
      {
        tag: "span",
        ref: "eMenu",
        cls: "ag-header-icon ag-header-cell-menu-button",
        attrs: t
      },
      {
        tag: "span",
        ref: "eFilterButton",
        cls: "ag-header-icon ag-header-cell-filter-button",
        attrs: t
      },
      {
        tag: "div",
        ref: "eLabel",
        cls: "ag-header-cell-label",
        role: "presentation",
        children: [
          { tag: "span", ref: "eText", cls: "ag-header-cell-text" },
          {
            tag: "span",
            ref: "eFilter",
            cls: "ag-header-icon ag-header-label-icon ag-filter-icon",
            attrs: t
          },
          e ? { tag: "ag-sort-indicator", ref: "eSortIndicator" } : null
        ]
      }
    ]
  };
}
var Xf = ba(!0), Qf = ba(!1), Jf = class extends ut {
  constructor() {
    super(...arguments), this.eFilter = de, this.eFilterButton = de, this.eSortIndicator = de, this.eMenu = de, this.eLabel = de, this.eText = de, this.eSortOrder = de, this.eSortAsc = de, this.eSortDesc = de, this.eSortMixed = de, this.eSortNone = de, this.isLoadingInnerComponent = !1;
  }
  refresh(e) {
    var s, n, r;
    const t = this.params;
    if (this.params = e, this.workOutTemplate(e, !!((s = this.beans) != null && s.sortSvc)) != this.currentTemplate || this.workOutShowMenu() != this.currentShowMenu || e.enableSorting != this.currentSort || this.currentSuppressMenuHide != null && this.shouldSuppressMenuHide() != this.currentSuppressMenuHide || t.enableFilterButton != e.enableFilterButton || t.enableFilterIcon != e.enableFilterIcon)
      return !1;
    if (this.innerHeaderComponent) {
      const o = { ...e };
      Ue(o, e.innerHeaderComponentParams), (r = (n = this.innerHeaderComponent).refresh) == null || r.call(n, o);
    } else
      this.setDisplayName(e);
    return !0;
  }
  workOutTemplate(e, t) {
    const s = e.template;
    return s ? s != null && s.trim ? s.trim() : s : t ? Xf : Qf;
  }
  init(e) {
    this.params = e;
    const { sortSvc: t, touchSvc: s, rowNumbersSvc: n, userCompFactory: r } = this.beans, o = t == null ? void 0 : t.getSortIndicatorSelector();
    this.currentTemplate = this.workOutTemplate(e, !!o), this.setTemplate(this.currentTemplate, o ? [o] : void 0), s == null || s.setupForHeader(this), this.setMenu(), this.setupSort(), n == null || n.setupForHeader(this), this.setupFilterIcon(), this.setupFilterButton(), this.workOutInnerHeaderComponent(r, e), this.setDisplayName(e);
  }
  workOutInnerHeaderComponent(e, t) {
    const s = Qc(e, t, t);
    s && (this.isLoadingInnerComponent = !0, s.newAgStackInstance().then((n) => {
      this.isLoadingInnerComponent = !1, n && (this.isAlive() ? (this.innerHeaderComponent = n, this.eText && this.eText.appendChild(n.getGui())) : this.destroyBean(n));
    }));
  }
  setDisplayName(e) {
    const { displayName: t } = e, s = this.currentDisplayName;
    this.currentDisplayName = t, !(!this.eText || s === t || this.innerHeaderComponent || this.isLoadingInnerComponent) && (this.eText.textContent = sn(t));
  }
  addInIcon(e, t, s) {
    const n = dn(e, this.beans, s);
    n && t.appendChild(n);
  }
  workOutShowMenu() {
    var e;
    return this.params.enableMenu && !!((e = this.beans.menuSvc) != null && e.isHeaderMenuButtonEnabled());
  }
  shouldSuppressMenuHide() {
    var e;
    return !!((e = this.beans.menuSvc) != null && e.isHeaderMenuButtonAlwaysShowEnabled());
  }
  setMenu() {
    if (!this.eMenu)
      return;
    if (this.currentShowMenu = this.workOutShowMenu(), !this.currentShowMenu) {
      jn(this.eMenu), this.eMenu = void 0;
      return;
    }
    const { gos: e, eMenu: t, params: s } = this, n = Vs(e);
    this.addInIcon(n ? "menu" : "menuAlt", t, s.column), t.classList.toggle("ag-header-menu-icon", !n);
    const r = this.shouldSuppressMenuHide();
    this.currentSuppressMenuHide = r, this.addManagedElementListeners(t, { click: () => this.showColumnMenu(this.eMenu) }), this.toggleMenuAlwaysShow(r);
  }
  toggleMenuAlwaysShow(e) {
    var t;
    (t = this.eMenu) == null || t.classList.toggle("ag-header-menu-always-show", e);
  }
  showColumnMenu(e) {
    const { currentSuppressMenuHide: t, params: s } = this;
    t || this.toggleMenuAlwaysShow(!0), s.showColumnMenu(e, () => {
      t || this.toggleMenuAlwaysShow(!1);
    });
  }
  onMenuKeyboardShortcut(e) {
    var l;
    const { params: t, gos: s, beans: n, eMenu: r, eFilterButton: o } = this, i = t.column, a = Vs(s);
    if (e && !a) {
      if ((l = n.menuSvc) != null && l.isFilterMenuInHeaderEnabled(i))
        return t.showFilter(o ?? r ?? this.getGui()), !0;
    } else if (t.enableMenu)
      return this.showColumnMenu(r ?? o ?? this.getGui()), !0;
    return !1;
  }
  setupSort() {
    const { sortSvc: e } = this.beans;
    if (!e)
      return;
    const { enableSorting: t, column: s } = this.params;
    if (this.currentSort = t, !this.eSortIndicator) {
      this.eSortIndicator = this.createBean(e.createSortIndicator(!0));
      const { eSortIndicator: n, eSortOrder: r, eSortAsc: o, eSortDesc: i, eSortMixed: a, eSortNone: l } = this;
      n.attachCustomElements(r, o, i, a, l);
    }
    this.eSortIndicator.setupSort(s), this.currentSort && e.setupHeader(this, s, this.eLabel);
  }
  setupFilterIcon() {
    const { eFilter: e, params: t } = this;
    if (!e)
      return;
    const s = () => {
      const n = t.column.isFilterActive();
      Me(e, n, { skipAriaHidden: !0 });
    };
    this.configureFilter(t.enableFilterIcon, e, s, "filterActive");
  }
  setupFilterButton() {
    const { eFilterButton: e, params: t } = this;
    if (!e)
      return;
    this.configureFilter(
      t.enableFilterButton,
      e,
      this.onFilterChangedButton.bind(this),
      "filter"
    ) ? this.addManagedElementListeners(e, {
      click: () => t.showFilter(e)
    }) : this.eFilterButton = void 0;
  }
  configureFilter(e, t, s, n) {
    if (!e)
      return jn(t), !1;
    const r = this.params.column;
    return this.addInIcon(n, t, r), this.addManagedListeners(r, { filterChanged: s }), s(), !0;
  }
  onFilterChangedButton() {
    const e = this.params.column.isFilterActive();
    this.eFilterButton.classList.toggle("ag-filter-active", e);
  }
  getAnchorElementForMenu(e) {
    const { eFilterButton: t, eMenu: s } = this;
    return e ? t ?? s ?? this.getGui() : s ?? t ?? this.getGui();
  }
  destroy() {
    super.destroy(), this.innerHeaderComponent && (this.destroyBean(this.innerHeaderComponent), this.innerHeaderComponent = void 0);
  }
}, ep = {
  tag: "div",
  cls: "ag-header-group-cell-label",
  role: "presentation",
  children: [
    { tag: "span", ref: "agLabel", cls: "ag-header-group-text", role: "presentation" },
    { tag: "span", ref: "agOpened", cls: "ag-header-icon ag-header-expand-icon ag-header-expand-icon-expanded" },
    { tag: "span", ref: "agClosed", cls: "ag-header-icon ag-header-expand-icon ag-header-expand-icon-collapsed" }
  ]
}, tp = class extends ut {
  constructor() {
    super(ep), this.agOpened = de, this.agClosed = de, this.agLabel = de, this.isLoadingInnerComponent = !1;
  }
  init(e) {
    const { userCompFactory: t, touchSvc: s } = this.beans;
    this.params = e, this.checkWarnings(), this.workOutInnerHeaderGroupComponent(t, e), this.setupLabel(e), this.addGroupExpandIcon(e), this.setupExpandIcons(), s == null || s.setupForHeaderGroup(this);
  }
  checkWarnings() {
    this.params.template && oe(89);
  }
  workOutInnerHeaderGroupComponent(e, t) {
    const s = ed(e, t, t);
    s && (this.isLoadingInnerComponent = !0, s.newAgStackInstance().then((n) => {
      this.isLoadingInnerComponent = !1, n && (this.isAlive() ? (this.innerHeaderGroupComponent = n, this.agLabel.appendChild(n.getGui())) : this.destroyBean(n));
    }));
  }
  setupExpandIcons() {
    const {
      agOpened: e,
      agClosed: t,
      params: { columnGroup: s },
      beans: n
    } = this;
    this.addInIcon("columnGroupOpened", e), this.addInIcon("columnGroupClosed", t);
    const r = (l) => {
      if (mt(l))
        return;
      const c = !s.isExpanded();
      n.colGroupSvc.setColumnGroupOpened(
        s.getProvidedColumnGroup(),
        c,
        "uiColumnExpanded"
      );
    };
    this.addTouchAndClickListeners(n, t, r), this.addTouchAndClickListeners(n, e, r);
    const o = (l) => {
      _s(l);
    };
    this.addManagedElementListeners(t, { dblclick: o }), this.addManagedElementListeners(e, { dblclick: o }), this.addManagedElementListeners(this.getGui(), { dblclick: r }), this.updateIconVisibility();
    const i = s.getProvidedColumnGroup(), a = this.updateIconVisibility.bind(this);
    this.addManagedListeners(i, {
      expandedChanged: a,
      expandableChanged: a
    });
  }
  addTouchAndClickListeners(e, t, s) {
    var n;
    (n = e.touchSvc) == null || n.setupForHeaderGroupElement(this, t, s), this.addManagedElementListeners(t, { click: s });
  }
  updateIconVisibility() {
    const {
      agOpened: e,
      agClosed: t,
      params: { columnGroup: s }
    } = this;
    if (s.isExpandable()) {
      const n = s.isExpanded();
      Me(e, n), Me(t, !n);
    } else
      Me(e, !1), Me(t, !1);
  }
  addInIcon(e, t) {
    const s = dn(e, this.beans, null);
    s && t.appendChild(s);
  }
  addGroupExpandIcon(e) {
    if (!e.columnGroup.isExpandable()) {
      const { agOpened: t, agClosed: s } = this;
      Me(t, !1), Me(s, !1);
      return;
    }
  }
  setupLabel(e) {
    var r;
    const { displayName: t, columnGroup: s } = e, n = this.innerHeaderGroupComponent || this.isLoadingInnerComponent;
    te(t) && !n && (this.agLabel.textContent = sn(t)), this.toggleCss("ag-sticky-label", !((r = s.getColGroupDef()) != null && r.suppressStickyLabel));
  }
  destroy() {
    super.destroy(), this.innerHeaderGroupComponent && (this.destroyBean(this.innerHeaderGroupComponent), this.innerHeaderGroupComponent = void 0);
  }
}, sp = {
  moduleName: "ColumnHeaderComp",
  version: be,
  userComponents: {
    agColumnHeader: Jf
  },
  icons: {
    // button to launch legacy column menu
    menu: "menu",
    // button to launch new enterprise column menu
    menuAlt: "menu-alt"
  }
}, np = {
  moduleName: "ColumnGroupHeaderComp",
  version: be,
  userComponents: {
    agColumnGroupHeader: tp
  },
  icons: {
    // header column group shown when expanded (click to contract)
    columnGroupOpened: "expanded",
    // header column group shown when contracted (click to expand)
    columnGroupClosed: "contracted"
  }
}, rp = class extends K {
  constructor() {
    super(...arguments), this.beanName = "animationFrameSvc", this.p1 = { list: [], sorted: !1 }, this.p2 = { list: [], sorted: !1 }, this.f1 = { list: [], sorted: !1 }, this.destroyTasks = [], this.ticking = !1, this.scrollGoingDown = !0, this.lastScrollTop = 0, this.taskCount = 0;
  }
  setScrollTop(e) {
    this.scrollGoingDown = e >= this.lastScrollTop, e === 0 && (this.scrollGoingDown = !0), this.lastScrollTop = e;
  }
  postConstruct() {
    this.active = !this.gos.get("suppressAnimationFrame"), this.batchFrameworkComps = this.beans.frameworkOverrides.batchFrameworkComps;
  }
  // this method is for our AG Grid sanity only - if animation frames are turned off,
  // then no place in the code should be looking to add any work to be done in animation
  // frames. this stops bugs - where some code is asking for a frame to be executed
  // when it should not.
  verify() {
    this.active === !1 && oe(92);
  }
  createTask(e, t, s, n) {
    this.verify();
    let r = s;
    n && this.batchFrameworkComps && (r = "f1");
    const o = { task: e, index: t, createOrder: ++this.taskCount };
    this.addTaskToList(this[r], o), this.schedule();
  }
  addTaskToList(e, t) {
    e.list.push(t), e.sorted = !1;
  }
  sortTaskList(e) {
    if (e.sorted)
      return;
    const t = this.scrollGoingDown ? 1 : -1;
    e.list.sort(
      (s, n) => s.index !== n.index ? t * (n.index - s.index) : n.createOrder - s.createOrder
    ), e.sorted = !0;
  }
  addDestroyTask(e) {
    this.verify(), this.destroyTasks.push(e), this.schedule();
  }
  executeFrame(e) {
    const { p1: t, p2: s, f1: n, destroyTasks: r, beans: o } = this, { ctrlsSvc: i, frameworkOverrides: a } = o, l = t.list, c = s.list, d = n.list, u = Date.now();
    let h = 0;
    const g = e <= 0, f = i.getScrollFeature();
    for (; g || h < e; ) {
      if (!f.scrollGridIfNeeded()) {
        let p;
        if (l.length)
          this.sortTaskList(t), p = l.pop().task;
        else if (c.length)
          this.sortTaskList(s), p = c.pop().task;
        else if (d.length)
          a.wrapOutgoing(() => {
            for (; (g || h < e) && !f.scrollGridIfNeeded(); ) {
              if (d.length)
                this.sortTaskList(n), p = d.pop().task, p();
              else
                break;
              h = Date.now() - u;
            }
          }), p = () => {
          };
        else if (r.length)
          p = r.pop();
        else
          break;
        p();
      }
      h = Date.now() - u;
    }
    l.length || c.length || d.length || r.length ? this.requestFrame() : this.ticking = !1;
  }
  flushAllFrames() {
    this.active && this.executeFrame(-1);
  }
  schedule() {
    this.active && (this.ticking || (this.ticking = !0, this.requestFrame()));
  }
  requestFrame() {
    const e = this.executeFrame.bind(this, 60);
    yt(this.beans, e);
  }
  isQueueEmpty() {
    return !this.ticking;
  }
}, op = {
  moduleName: "AnimationFrame",
  version: be,
  beans: [rp]
}, ip = class extends K {
  constructor() {
    super(...arguments), this.beanName = "touchSvc";
  }
  mockBodyContextMenu(e, t) {
    this.mockContextMenu(e, e.eBodyViewport, t);
  }
  mockHeaderContextMenu(e, t) {
    this.mockContextMenu(e, e.eGui, t);
  }
  mockRowContextMenu(e) {
    if (!rs())
      return;
    const t = (s, n, r) => {
      var a;
      const { rowCtrl: o, cellCtrl: i } = e.getControlsForEventTarget((r == null ? void 0 : r.target) ?? null);
      i != null && i.column && i.dispatchCellContextMenuEvent(r ?? null), (a = this.beans.contextMenuSvc) == null || a.handleContextMenuMouseEvent(void 0, r, o, i);
    };
    this.mockContextMenu(e, e.element, t);
  }
  handleCellDoubleClick(e, t) {
    return (() => {
      if (!rs() || mi("dblclick"))
        return !1;
      const n = Date.now(), r = n - e.lastIPadMouseClickEvent < 200;
      return e.lastIPadMouseClickEvent = n, r;
    })() ? (e.onCellDoubleClicked(t), t.preventDefault(), !0) : !1;
  }
  setupForHeader(e) {
    const { gos: t, sortSvc: s, menuSvc: n } = this.beans;
    if (t.get("suppressTouch"))
      return;
    const { params: r, eMenu: o, eFilterButton: i } = e, a = new At(e.getGui(), !0), l = e.shouldSuppressMenuHide(), c = l && te(o) && r.enableMenu, d = c ? new At(o, !0) : a;
    if (r.enableMenu || n != null && n.isHeaderContextMenuEnabled(r.column)) {
      const u = c ? "tap" : "longTap", h = (g) => r.showColumnMenuAfterMouseClick(g.touchStart);
      e.addManagedListeners(d, { [u]: h });
    }
    if (r.enableSorting) {
      const u = (h) => {
        const g = h.touchStart.target;
        l && (o != null && o.contains(g) || i != null && i.contains(g)) || s == null || s.progressSort(r.column, !1, "uiColumnSorted");
      };
      e.addManagedListeners(a, { tap: u });
    }
    if (r.enableFilterButton && i) {
      const u = new At(i, !0);
      e.addManagedListeners(u, {
        tap: () => r.showFilter(i)
      }), e.addDestroyFunc(() => u.destroy());
    }
    e.addDestroyFunc(() => a.destroy()), c && e.addDestroyFunc(() => d.destroy());
  }
  setupForHeaderGroup(e) {
    var s;
    const t = e.params;
    if ((s = this.beans.menuSvc) != null && s.isHeaderContextMenuEnabled(
      t.columnGroup.getProvidedColumnGroup()
    )) {
      const n = new At(t.eGridHeader, !0), r = (o) => t.showColumnMenuAfterMouseClick(o.touchStart);
      e.addManagedListeners(n, { longTap: r }), e.addDestroyFunc(() => n.destroy());
    }
  }
  setupForHeaderGroupElement(e, t, s) {
    const n = new At(t, !0);
    e.addManagedListeners(n, { tap: s }), e.addDestroyFunc(() => n.destroy());
  }
  mockContextMenu(e, t, s) {
    if (!rs())
      return;
    const n = new At(t), r = (o) => {
      ds(this.gos, o.touchEvent) && s(void 0, o.touchStart, o.touchEvent);
    };
    e.addManagedListeners(n, { longTap: r }), e.addDestroyFunc(() => n.destroy());
  }
}, ap = {
  moduleName: "Touch",
  version: be,
  beans: [ip]
}, lp = class extends K {
  constructor() {
    super(...arguments), this.beanName = "cellNavigation";
  }
  wireBeans(e) {
    this.rowSpanSvc = e.rowSpanSvc;
  }
  // returns null if no cell to focus on, ie at the end of the grid
  getNextCellToFocus(e, t, s = !1) {
    return s ? this.getNextCellToFocusWithCtrlPressed(e, t) : this.getNextCellToFocusWithoutCtrlPressed(e, t);
  }
  getNextCellToFocusWithCtrlPressed(e, t) {
    const s = e === j.UP, n = e === j.DOWN, r = e === j.LEFT;
    let o, i;
    const { pageBounds: a, gos: l, visibleCols: c } = this.beans;
    if (s || n)
      i = s ? a.getFirstRow() : a.getLastRow(), o = t.column;
    else {
      const d = l.get("enableRtl");
      i = t.rowIndex, o = (r !== d ? c.allCols : [...c.allCols].reverse()).find(
        (h) => this.isCellGoodToFocusOn({
          rowIndex: i,
          rowPinned: null,
          column: h
        })
      );
    }
    return o ? {
      rowIndex: i,
      rowPinned: null,
      column: o
    } : null;
  }
  getNextCellToFocusWithoutCtrlPressed(e, t) {
    let s = t, n = !1;
    for (; !n; ) {
      switch (e) {
        case j.UP:
          s = this.getCellAbove(s);
          break;
        case j.DOWN:
          s = this.getCellBelow(s);
          break;
        case j.RIGHT:
          s = this.gos.get("enableRtl") ? this.getCellToLeft(s) : this.getCellToRight(s);
          break;
        case j.LEFT:
          s = this.gos.get("enableRtl") ? this.getCellToRight(s) : this.getCellToLeft(s);
          break;
        default:
          s = null, oe(8, { key: e });
          break;
      }
      s ? n = this.isCellGoodToFocusOn(s) : n = !0;
    }
    return s;
  }
  isCellGoodToFocusOn(e) {
    const t = e.column;
    let s;
    const { pinnedRowModel: n, rowModel: r } = this.beans;
    switch (e.rowPinned) {
      case "top":
        s = n == null ? void 0 : n.getPinnedTopRow(e.rowIndex);
        break;
      case "bottom":
        s = n == null ? void 0 : n.getPinnedBottomRow(e.rowIndex);
        break;
      default:
        s = r.getRow(e.rowIndex);
        break;
    }
    return s ? !this.isSuppressNavigable(t, s) : !1;
  }
  getCellToLeft(e) {
    if (!e)
      return null;
    const t = this.beans.visibleCols.getColBefore(e.column);
    return t ? {
      rowIndex: e.rowIndex,
      column: t,
      rowPinned: e.rowPinned
    } : null;
  }
  getCellToRight(e) {
    if (!e)
      return null;
    const t = this.beans.visibleCols.getColAfter(e.column);
    return t ? {
      rowIndex: e.rowIndex,
      column: t,
      rowPinned: e.rowPinned
    } : null;
  }
  getCellBelow(e) {
    var n;
    if (!e)
      return null;
    const t = ((n = this.rowSpanSvc) == null ? void 0 : n.getCellEnd(e)) ?? e, s = Qr(this.beans, t);
    return s ? {
      rowIndex: s.rowIndex,
      column: e.column,
      rowPinned: s.rowPinned
    } : null;
  }
  getCellAbove(e) {
    var n;
    if (!e)
      return null;
    const t = ((n = this.rowSpanSvc) == null ? void 0 : n.getCellStart(e)) ?? e, s = qs(this.beans, {
      rowIndex: t.rowIndex,
      rowPinned: t.rowPinned
    });
    return s ? {
      rowIndex: s.rowIndex,
      column: e.column,
      rowPinned: s.rowPinned
    } : null;
  }
  getNextTabbedCell(e, t) {
    return t ? this.getNextTabbedCellBackwards(e) : this.getNextTabbedCellForwards(e);
  }
  getNextTabbedCellForwards(e) {
    const { visibleCols: t, pagination: s } = this.beans, n = t.allCols;
    let r = e.rowIndex, o = e.rowPinned, i = t.getColAfter(e.column);
    if (!i) {
      i = n[0];
      const a = Qr(this.beans, e);
      if (Ie(a) || !a.rowPinned && !((s == null ? void 0 : s.isRowInPage(a.rowIndex)) ?? !0))
        return null;
      r = a ? a.rowIndex : null, o = a ? a.rowPinned : null;
    }
    return { rowIndex: r, column: i, rowPinned: o };
  }
  getNextTabbedCellBackwards(e) {
    const { beans: t } = this, { visibleCols: s, pagination: n } = t, r = s.allCols;
    let o = e.rowIndex, i = e.rowPinned, a = s.getColBefore(e.column);
    if (!a) {
      a = Ce(r);
      const l = qs(t, { rowIndex: e.rowIndex, rowPinned: e.rowPinned });
      if (Ie(l) || !l.rowPinned && !((n == null ? void 0 : n.isRowInPage(l.rowIndex)) ?? !0))
        return null;
      o = l ? l.rowIndex : null, i = l ? l.rowPinned : null;
    }
    return { rowIndex: o, column: a, rowPinned: i };
  }
  isSuppressNavigable(e, t) {
    const { suppressNavigable: s } = e.colDef;
    if (typeof s == "boolean")
      return s;
    if (typeof s == "function") {
      const n = e.createColumnFunctionCallbackParams(t);
      return s(n);
    }
    return !1;
  }
};
function cp(e) {
  return e.focusSvc.getFocusedCell();
}
function dp(e) {
  return e.focusSvc.clearFocusedCell();
}
function up(e, t, s, n) {
  e.focusSvc.setFocusedCell({ rowIndex: t, column: s, rowPinned: n, forceBrowserFocus: !0 });
}
function hp(e, t) {
  var s;
  return ((s = e.navigation) == null ? void 0 : s.tabToNextCell(!1, t)) ?? !1;
}
function gp(e, t) {
  var s;
  return ((s = e.navigation) == null ? void 0 : s.tabToNextCell(!0, t)) ?? !1;
}
function fp(e, t, s = !1) {
  var r;
  const n = (r = e.headerNavigation) == null ? void 0 : r.getHeaderPositionForColumn(t, s);
  n && e.focusSvc.focusHeaderPosition({ headerPosition: n });
}
var pp = class extends K {
  constructor() {
    super(), this.beanName = "navigation", this.onPageDown = _r(this.onPageDown, 100), this.onPageUp = _r(this.onPageUp, 100);
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, (e) => {
      this.gridBodyCon = e.gridBodyCtrl;
    });
  }
  handlePageScrollingKey(e, t = !1) {
    const s = e.key, n = e.altKey, r = e.ctrlKey || e.metaKey, o = !!this.beans.rangeSvc && e.shiftKey, i = zd(this.gos, e);
    let a = !1;
    switch (s) {
      case j.PAGE_HOME:
      case j.PAGE_END:
        !r && !n && (this.onHomeOrEndKey(s), a = !0);
        break;
      case j.LEFT:
      case j.RIGHT:
      case j.UP:
      case j.DOWN:
        if (!i)
          return !1;
        r && !n && !o && (this.onCtrlUpDownLeftRight(s, i), a = !0);
        break;
      case j.PAGE_DOWN:
      case j.PAGE_UP:
        !r && !n && (a = this.handlePageUpDown(s, i, t));
        break;
    }
    return a && e.preventDefault(), a;
  }
  handlePageUpDown(e, t, s) {
    return s && (t = this.beans.focusSvc.getFocusedCell()), t ? (e === j.PAGE_UP ? this.onPageUp(t) : this.onPageDown(t), !0) : !1;
  }
  navigateTo(e) {
    const { scrollIndex: t, scrollType: s, scrollColumn: n, focusIndex: r, focusColumn: o } = e, { scrollFeature: i } = this.gridBodyCon;
    te(n) && !n.isPinned() && i.ensureColumnVisible(n), te(t) && i.ensureIndexVisible(t, s), e.isAsync || i.ensureIndexVisible(r);
    const { focusSvc: a, rangeSvc: l } = this.beans;
    a.setFocusedCell({
      rowIndex: r,
      column: o,
      rowPinned: null,
      forceBrowserFocus: !0
    }), l == null || l.setRangeToCell({ rowIndex: r, rowPinned: null, column: o });
  }
  // this method is throttled, see the `constructor`
  onPageDown(e) {
    const t = this.beans, s = Nn(t), n = this.getViewportHeight(), { pageBounds: r, rowModel: o, rowAutoHeight: i } = t, a = r.getPixelOffset(), l = s.top + n, c = o.getRowIndexAtPixel(l + a);
    i != null && i.active ? this.navigateToNextPageWithAutoHeight(e, c) : this.navigateToNextPage(e, c);
  }
  // this method is throttled, see the `constructor`
  onPageUp(e) {
    const t = this.beans, s = Nn(t), { pageBounds: n, rowModel: r, rowAutoHeight: o } = t, i = n.getPixelOffset(), a = s.top, l = r.getRowIndexAtPixel(a + i);
    o != null && o.active ? this.navigateToNextPageWithAutoHeight(e, l, !0) : this.navigateToNextPage(e, l, !0);
  }
  navigateToNextPage(e, t, s = !1) {
    const { pageBounds: n, rowModel: r } = this.beans, o = this.getViewportHeight(), i = n.getFirstRow(), a = n.getLastRow(), l = n.getPixelOffset(), c = r.getRow(e.rowIndex), d = s ? (
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      (c == null ? void 0 : c.rowHeight) - o - l
    ) : o - l, u = (c == null ? void 0 : c.rowTop) + d;
    let h = r.getRowIndexAtPixel(u + l);
    if (h === e.rowIndex) {
      const f = s ? -1 : 1;
      t = h = e.rowIndex + f;
    }
    let g;
    s ? (g = "bottom", h < i && (h = i), t < i && (t = i)) : (g = "top", h > a && (h = a), t > a && (t = a)), this.isRowTallerThanView(r.getRow(h)) && (t = h, g = "top"), this.navigateTo({
      scrollIndex: t,
      scrollType: g,
      scrollColumn: null,
      focusIndex: h,
      focusColumn: e.column
    });
  }
  navigateToNextPageWithAutoHeight(e, t, s = !1) {
    this.navigateTo({
      scrollIndex: t,
      scrollType: s ? "bottom" : "top",
      scrollColumn: null,
      focusIndex: t,
      focusColumn: e.column
    }), setTimeout(() => {
      const n = this.getNextFocusIndexForAutoHeight(e, s);
      this.navigateTo({
        scrollIndex: t,
        scrollType: s ? "bottom" : "top",
        scrollColumn: null,
        focusIndex: n,
        focusColumn: e.column,
        isAsync: !0
      });
    }, 50);
  }
  getNextFocusIndexForAutoHeight(e, t = !1) {
    const s = t ? -1 : 1, n = this.getViewportHeight(), { pageBounds: r, rowModel: o } = this.beans, i = r.getLastRow();
    let a = 0, l = e.rowIndex;
    for (; l >= 0 && l <= i; ) {
      const c = o.getRow(l);
      if (c) {
        const d = c.rowHeight ?? 0;
        if (a + d > n)
          break;
        a += d;
      }
      l += s;
    }
    return Math.max(0, Math.min(l, i));
  }
  getViewportHeight() {
    const e = this.beans, t = Nn(e), s = this.beans.scrollVisibleSvc.getScrollbarWidth();
    let n = t.bottom - t.top;
    return e.ctrlsSvc.get("center").isHorizontalScrollShowing() && (n -= s), n;
  }
  isRowTallerThanView(e) {
    if (!e)
      return !1;
    const t = e.rowHeight;
    return typeof t != "number" ? !1 : t > this.getViewportHeight();
  }
  onCtrlUpDownLeftRight(e, t) {
    const s = this.beans.cellNavigation.getNextCellToFocus(e, t, !0), { rowIndex: n } = s, r = s.column;
    this.navigateTo({
      scrollIndex: n,
      scrollType: null,
      scrollColumn: r,
      focusIndex: n,
      focusColumn: r
    });
  }
  // home brings focus to top left cell, end brings focus to bottom right, grid scrolled to bring
  // same cell into view (which means either scroll all the way up, or all the way down).
  onHomeOrEndKey(e) {
    const t = e === j.PAGE_HOME, { visibleCols: s, pageBounds: n, rowModel: r } = this.beans, o = s.allCols, i = t ? n.getFirstRow() : n.getLastRow(), a = r.getRow(i);
    if (!a)
      return;
    const l = (t ? o : [...o].reverse()).find(
      (c) => !c.isSuppressNavigable(a)
    );
    l && this.navigateTo({
      scrollIndex: i,
      scrollType: null,
      scrollColumn: l,
      focusIndex: i,
      focusColumn: l
    });
  }
  // result of keyboard event
  onTabKeyDown(e, t) {
    const s = t.shiftKey, n = this.tabToNextCellCommon(e, s, t), r = this.beans, { ctrlsSvc: o, pageBounds: i, focusSvc: a, gos: l } = r;
    if (n !== !1) {
      n ? t.preventDefault() : n === null && o.get("gridCtrl").allowFocusForNextCoreContainer(s);
      return;
    }
    if (s) {
      const { rowIndex: c, rowPinned: d } = e.getRowPosition();
      (d ? c === 0 : c === i.getFirstRow()) && (l.get("headerHeight") === 0 || Et(r) ? cs(r, !0, !0) : (t.preventDefault(), a.focusPreviousFromFirstCell(t)));
    } else
      e instanceof As && e.focusCell(!0), (!s && a.focusOverlay(!1) || cs(r, s)) && t.preventDefault();
  }
  // comes from API
  tabToNextCell(e, t) {
    const s = this.beans, { focusSvc: n, rowRenderer: r } = s, o = n.getFocusedCell();
    if (!o)
      return !1;
    let i = ys(s, o);
    return !i && (i = r.getRowByPosition(o), !i || !i.isFullWidth()) ? !1 : !!this.tabToNextCellCommon(i, e, t);
  }
  tabToNextCellCommon(e, t, s) {
    let n = e.editing;
    if (!n && e instanceof As) {
      const i = e.rowCtrl;
      i && (n = i.editing);
    }
    let r;
    return n ? this.gos.get("editType") === "fullRow" ? r = this.moveToNextEditingRow(e, t, s) : r = this.moveToNextEditingCell(e, t, s) : r = this.moveToNextCellNotEditing(e, t, s), r === null ? r : r || !!this.beans.focusSvc.focusedHeader;
  }
  // returns null if no navigation should be performed
  moveToNextEditingCell(e, t, s = null) {
    var o;
    const n = e.cellPosition;
    e.eGui.focus(), e.stopEditing();
    const r = this.findNextCellToFocusOn(n, t, !0);
    return r === !1 ? null : r == null ? !1 : ((o = this.beans.editSvc) == null || o.startEditing(r, null, !0, s), r.focusCell(!1), !0);
  }
  // returns null if no navigation should be performed
  moveToNextEditingRow(e, t, s = null) {
    const n = e.cellPosition, r = this.findNextCellToFocusOn(n, t, !0);
    if (r === !1)
      return null;
    if (r == null)
      return !1;
    const o = r.cellPosition, i = this.isCellEditable(n), a = this.isCellEditable(o), l = o && n.rowIndex === o.rowIndex && n.rowPinned === o.rowPinned, { editSvc: c, rowEditSvc: d } = this.beans;
    if (i && (c == null || c.setFocusOutOnEditor(e)), !l) {
      const u = e.rowCtrl;
      c == null || c.stopRowEditing(u);
      const h = r.rowCtrl;
      d == null || d.startEditing(h, void 0, void 0, s);
    }
    return a ? (c == null || c.setFocusInOnEditor(r), r.focusCell()) : r.focusCell(!0), !0;
  }
  // returns null if no navigation should be performed
  moveToNextCellNotEditing(e, t, s) {
    const n = this.beans.visibleCols.allCols;
    let r;
    if (e instanceof er) {
      if (r = {
        ...e.getRowPosition(),
        column: t ? n[0] : Ce(n)
      }, this.gos.get("embedFullWidthRows") && s) {
        const i = e.findFullWidthInfoForEvent(s);
        i && (r.column = i.column);
      }
    } else
      r = e.getFocusedCellPosition();
    const o = this.findNextCellToFocusOn(r, t, !1);
    if (o === !1)
      return null;
    if (o instanceof As)
      o.focusCell(!0);
    else if (o)
      return this.tryToFocusFullWidthRow(o, t);
    return te(o);
  }
  /**
   * called by the cell, when tab is pressed while editing.
   * @return: RenderedCell when navigation successful, false if navigation should not be performed, otherwise null
   */
  findNextCellToFocusOn(e, t, s) {
    let n = e;
    const r = this.beans, { cellNavigation: o, gos: i, focusSvc: a, rowRenderer: l, rangeSvc: c } = r;
    for (; ; ) {
      e !== n && (e = n), t || (n = this.getLastCellOfColSpan(n)), n = o.getNextTabbedCell(n, t);
      const d = i.getCallback("tabToNextCell");
      if (te(d)) {
        const f = d({
          backwards: t,
          editing: s,
          previousCellPosition: e,
          nextCellPosition: n || null
        });
        if (f === !0)
          n = e;
        else {
          if (f === !1)
            return !1;
          n = {
            rowIndex: f.rowIndex,
            column: f.column,
            rowPinned: f.rowPinned
          };
        }
      }
      if (!n)
        return null;
      if (n.rowIndex < 0) {
        const g = st(r);
        return a.focusHeaderPosition({
          headerPosition: {
            headerRowIndex: g + n.rowIndex,
            column: n.column
          },
          fromCell: !0
        }), null;
      }
      const u = i.get("editType") === "fullRow";
      if (s && !u && !this.isCellEditable(n))
        continue;
      this.ensureCellVisible(n);
      const h = ys(r, n);
      if (!h) {
        const g = l.getRowByPosition(n);
        if (!g || !g.isFullWidth() || s)
          continue;
        return { ...g.getRowPosition(), column: n == null ? void 0 : n.column };
      }
      if (!o.isSuppressNavigable(h.column, h.rowNode))
        return h.setFocusedCellPosition(n), c == null || c.setRangeToCell(n), h;
    }
  }
  isCellEditable(e) {
    const t = this.lookupRowNodeForCell(e);
    return t ? e.column.isCellEditable(t) : !1;
  }
  lookupRowNodeForCell({ rowIndex: e, rowPinned: t }) {
    const { pinnedRowModel: s, rowModel: n } = this.beans;
    return t === "top" ? s == null ? void 0 : s.getPinnedTopRow(e) : t === "bottom" ? s == null ? void 0 : s.getPinnedBottomRow(e) : n.getRow(e);
  }
  // we use index for rows, but column object for columns, as the next column (by index) might not
  // be visible (header grouping) so it's not reliable, so using the column object instead.
  navigateToNextCell(e, t, s, n) {
    let r = s, o = !1;
    const i = this.beans, { cellNavigation: a, focusSvc: l, gos: c } = i;
    for (; r && (r === s || !this.isValidNavigateCell(r)); )
      c.get("enableRtl") ? t === j.LEFT && (r = this.getLastCellOfColSpan(r)) : t === j.RIGHT && (r = this.getLastCellOfColSpan(r)), r = a.getNextCellToFocus(t, r), o = Ie(r);
    if (o && e && e.key === j.UP && (r = {
      rowIndex: -1,
      rowPinned: null,
      column: s.column
    }), n) {
      const u = c.getCallback("navigateToNextCell");
      if (te(u)) {
        const g = u({
          key: t,
          previousCellPosition: s,
          nextCellPosition: r || null,
          event: e
        });
        te(g) ? r = {
          rowPinned: g.rowPinned,
          rowIndex: g.rowIndex,
          column: g.column
        } : r = null;
      }
    }
    if (!r)
      return;
    if (r.rowIndex < 0) {
      const u = st(i);
      l.focusHeaderPosition({
        headerPosition: { headerRowIndex: u + r.rowIndex, column: s.column },
        event: e || void 0,
        fromCell: !0
      });
      return;
    }
    const d = this.getNormalisedPosition(r);
    d ? this.focusPosition(d) : this.tryToFocusFullWidthRow(r);
  }
  getNormalisedPosition(e) {
    var n;
    if (!!((n = this.beans.spannedRowRenderer) != null && n.getCellByPosition(e)))
      return e;
    this.ensureCellVisible(e);
    const s = ys(this.beans, e);
    return s ? (e = s.getFocusedCellPosition(), this.ensureCellVisible(e), e) : null;
  }
  tryToFocusFullWidthRow(e, t) {
    const { visibleCols: s, rowRenderer: n, focusSvc: r, eventSvc: o } = this.beans, i = s.allCols, a = n.getRowByPosition(e);
    if (!a || !a.isFullWidth())
      return !1;
    const l = r.getFocusedCell(), c = {
      rowIndex: e.rowIndex,
      rowPinned: e.rowPinned,
      column: e.column || (t ? Ce(i) : i[0])
    };
    this.focusPosition(c);
    const d = t ?? (l != null && Ud(c, l));
    return o.dispatchEvent({
      type: "fullWidthRowFocused",
      rowIndex: c.rowIndex,
      rowPinned: c.rowPinned,
      column: c.column,
      isFullWidthCell: !0,
      fromBelow: d
    }), !0;
  }
  focusPosition(e) {
    const { focusSvc: t, rangeSvc: s } = this.beans;
    t.setFocusedCell({
      rowIndex: e.rowIndex,
      column: e.column,
      rowPinned: e.rowPinned,
      forceBrowserFocus: !0
    }), s == null || s.setRangeToCell(e);
  }
  isValidNavigateCell(e) {
    return !!Wi(this.beans, e);
  }
  getLastCellOfColSpan(e) {
    const t = ys(this.beans, e);
    if (!t)
      return e;
    const s = t.getColSpanningList();
    return s.length === 1 ? e : {
      rowIndex: e.rowIndex,
      column: Ce(s),
      rowPinned: e.rowPinned
    };
  }
  ensureCellVisible(e) {
    const t = fi(this.gos), s = this.beans.rowModel.getRow(e.rowIndex), n = t && (s == null ? void 0 : s.sticky), { scrollFeature: r } = this.gridBodyCon;
    !n && Ie(e.rowPinned) && r.ensureIndexVisible(e.rowIndex), e.column.isPinned() || r.ensureColumnVisible(e.column);
  }
};
function Nn(e) {
  return e.ctrlsSvc.getScrollFeature().getVScrollPosition();
}
var Cp = {
  moduleName: "KeyboardNavigation",
  version: be,
  beans: [pp, lp, kf],
  apiFunctions: {
    getFocusedCell: cp,
    clearFocusedCell: dp,
    setFocusedCell: up,
    setFocusedHeader: fp,
    tabToNextCell: hp,
    tabToPreviousCell: gp
  }
}, mp = class extends K {
  constructor() {
    super(...arguments), this.beanName = "pageBoundsListener";
  }
  postConstruct() {
    this.addManagedEventListeners({
      modelUpdated: this.onModelUpdated.bind(this),
      recalculateRowBounds: this.calculatePages.bind(this)
    }), this.onModelUpdated();
  }
  onModelUpdated(e) {
    this.calculatePages(), this.eventSvc.dispatchEvent({
      type: "paginationChanged",
      animate: (e == null ? void 0 : e.animate) ?? !1,
      newData: (e == null ? void 0 : e.newData) ?? !1,
      newPage: (e == null ? void 0 : e.newPage) ?? !1,
      newPageSize: (e == null ? void 0 : e.newPageSize) ?? !1,
      keepRenderedRows: (e == null ? void 0 : e.keepRenderedRows) ?? !1
    });
  }
  calculatePages() {
    const { pageBounds: e, pagination: t, rowModel: s } = this.beans;
    t ? t.calculatePages() : e.calculateBounds(0, s.getRowCount() - 1);
  }
}, wp = class extends K {
  constructor() {
    super(...arguments), this.beanName = "pageBounds", this.pixelOffset = 0;
  }
  getFirstRow() {
    var e;
    return ((e = this.topRowBounds) == null ? void 0 : e.rowIndex) ?? -1;
  }
  getLastRow() {
    var e;
    return ((e = this.bottomRowBounds) == null ? void 0 : e.rowIndex) ?? -1;
  }
  getCurrentPageHeight() {
    const { topRowBounds: e, bottomRowBounds: t } = this;
    return !e || !t ? 0 : Math.max(t.rowTop + t.rowHeight - e.rowTop, 0);
  }
  getCurrentPagePixelRange() {
    const { topRowBounds: e, bottomRowBounds: t } = this, s = (e == null ? void 0 : e.rowTop) ?? 0, n = t ? t.rowTop + t.rowHeight : 0;
    return { pageFirstPixel: s, pageLastPixel: n };
  }
  calculateBounds(e, t) {
    const { rowModel: s } = this.beans, n = s.getRowBounds(e);
    n && (n.rowIndex = e), this.topRowBounds = n;
    const r = s.getRowBounds(t);
    r && (r.rowIndex = t), this.bottomRowBounds = r, this.calculatePixelOffset();
  }
  getPixelOffset() {
    return this.pixelOffset;
  }
  calculatePixelOffset() {
    var t;
    const e = ((t = this.topRowBounds) == null ? void 0 : t.rowTop) ?? 0;
    this.pixelOffset !== e && (this.pixelOffset = e, this.eventSvc.dispatchEvent({ type: "paginationPixelOffsetChanged" }));
  }
}, vp = (
  /*css*/
  ".ag-pinned-left-floating-bottom,.ag-pinned-left-floating-top,.ag-pinned-right-floating-bottom,.ag-pinned-right-floating-top{min-width:0;overflow:hidden;position:relative}.ag-pinned-left-sticky-top,.ag-pinned-right-sticky-top{height:100%;overflow:hidden;position:relative}.ag-sticky-bottom-full-width-container,.ag-sticky-top-full-width-container{height:100%;overflow:hidden;width:100%}.ag-pinned-left-header,.ag-pinned-right-header{display:inline-block;height:100%;overflow:hidden;position:relative}.ag-body-horizontal-scroll:not(.ag-scrollbar-invisible){.ag-horizontal-left-spacer:not(.ag-scroller-corner){border-right:var(--ag-pinned-column-border)}.ag-horizontal-right-spacer:not(.ag-scroller-corner){border-left:var(--ag-pinned-column-border)}}.ag-pinned-right-header{border-left:var(--ag-pinned-column-border)}.ag-pinned-left-header{border-right:var(--ag-pinned-column-border)}.ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left,.ag-cell-range-single-cell,.ag-cell-focus:not(.ag-cell-range-selected):focus-within){border-left:var(--ag-pinned-column-border)}.ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right,.ag-cell-range-single-cell,.ag-cell-focus:not(.ag-cell-range-selected):focus-within){border-right:var(--ag-pinned-column-border)}.ag-pinned-left-header .ag-header-cell-resize:after{left:calc(50% - var(--ag-header-column-resize-handle-width))}.ag-pinned-right-header .ag-header-cell-resize:after{left:50%}.ag-pinned-left-header .ag-header-cell-resize{right:-3px}.ag-pinned-right-header .ag-header-cell-resize{left:-3px}"
), bp = class extends K {
  constructor(e, t) {
    super(), this.isLeft = e, this.elements = t, this.getWidth = e ? () => this.beans.pinnedCols.leftWidth : () => this.beans.pinnedCols.rightWidth;
  }
  postConstruct() {
    this.addManagedEventListeners({
      [`${this.isLeft ? "left" : "right"}PinnedWidthChanged`]: this.onPinnedWidthChanged.bind(this)
    });
  }
  onPinnedWidthChanged() {
    const e = this.getWidth(), t = e > 0;
    for (const s of this.elements)
      s && (Me(s, t), pt(s, e));
  }
}, yp = class extends K {
  constructor() {
    super(...arguments), this.beanName = "pinnedCols";
  }
  postConstruct() {
    this.beans.ctrlsSvc.whenReady(this, (t) => {
      this.gridBodyCtrl = t.gridBodyCtrl;
    });
    const e = this.checkContainerWidths.bind(this);
    this.addManagedEventListeners({
      displayedColumnsChanged: e,
      displayedColumnsWidthChanged: e
    }), this.addManagedPropertyListener("domLayout", e);
  }
  checkContainerWidths() {
    const { gos: e, visibleCols: t, eventSvc: s } = this.beans, n = We(e, "print"), r = n ? 0 : t.getColsLeftWidth(), o = n ? 0 : t.getDisplayedColumnsRightWidth();
    r != this.leftWidth && (this.leftWidth = r, s.dispatchEvent({ type: "leftPinnedWidthChanged" })), o != this.rightWidth && (this.rightWidth = o, s.dispatchEvent({ type: "rightPinnedWidthChanged" }));
  }
  keepPinnedColumnsNarrowerThanViewport() {
    const e = this.gridBodyCtrl.eBodyViewport, t = Gs(e);
    if (t <= 50)
      return;
    const s = this.getPinnedColumnsOverflowingViewport(t - 50), n = this.gos.getCallback("processUnpinnedColumns"), { columns: r, hasLockedPinned: o } = s;
    let i = r;
    !i.length && !o || (n && (i = n({
      columns: i,
      viewportWidth: t
    })), !(!i || !i.length) && (i = i.filter((a) => !is(a)), this.setColsPinned(i, null, "viewportSizeFeature")));
  }
  createPinnedWidthFeature(e, ...t) {
    return new bp(e, t);
  }
  setColsPinned(e, t, s) {
    const { colModel: n, colAnimation: r, visibleCols: o, gos: i } = this.beans;
    if (!n.cols || !(e != null && e.length))
      return;
    if (We(i, "print")) {
      oe(37);
      return;
    }
    r == null || r.start();
    let a;
    t === !0 || t === "left" ? a = "left" : t === "right" ? a = "right" : a = null;
    const l = [];
    e.forEach((c) => {
      if (!c)
        return;
      const d = n.getCol(c);
      d && d.getPinned() !== a && (this.setColPinned(d, a), l.push(d));
    }), l.length && (o.refresh(s), Pi(this.eventSvc, l, s)), r == null || r.finish();
  }
  initCol(e) {
    const { pinned: t, initialPinned: s } = e.colDef;
    t !== void 0 ? this.setColPinned(e, t) : this.setColPinned(e, s);
  }
  setColPinned(e, t) {
    t === !0 || t === "left" ? e.pinned = "left" : t === "right" ? e.pinned = "right" : e.pinned = null, e.dispatchStateUpdatedEvent("pinned");
  }
  setupHeaderPinnedWidth(e) {
    const { scrollVisibleSvc: t } = this.beans;
    if (e.pinned == null)
      return;
    const s = e.pinned === "left", n = e.pinned === "right";
    e.hidden = !0;
    const r = () => {
      const o = s ? this.leftWidth : this.rightWidth;
      if (o == null)
        return;
      const i = o == 0, a = e.hidden !== i, l = this.gos.get("enableRtl"), c = t.getScrollbarWidth(), u = t.verticalScrollShowing && (l && s || !l && n) ? o + c : o;
      e.comp.setPinnedContainerWidth(`${u}px`), e.comp.setDisplayed(!i), a && (e.hidden = i, e.refresh());
    };
    e.addManagedEventListeners({
      leftPinnedWidthChanged: r,
      rightPinnedWidthChanged: r,
      scrollVisibilityChanged: r,
      scrollbarWidthChanged: r
    });
  }
  getHeaderResizeDiff(e, t) {
    if (t.getPinned()) {
      const { leftWidth: n, rightWidth: r } = this, o = Gs(this.beans.ctrlsSvc.getGridBodyCtrl().eBodyViewport) - 50;
      if (n + r + e > o)
        if (o > n + r)
          e = o - n - r;
        else
          return 0;
    }
    return e;
  }
  getPinnedColumnsOverflowingViewport(e) {
    const t = this.rightWidth ?? 0, s = this.leftWidth ?? 0, n = t + s;
    let r = !1;
    if (n < e)
      return { columns: [], hasLockedPinned: r };
    const { visibleCols: o } = this.beans, i = [...o.leftCols], a = [...o.rightCols];
    let l = 0, c = 0;
    const d = 0, u = [];
    let h = n - d - e;
    for (; (c < i.length || l < a.length) && h > 0; ) {
      if (l < a.length) {
        const g = a[l++];
        if (g.colDef.lockPinned) {
          r = !0;
          continue;
        }
        h -= g.getActualWidth(), u.push(g);
      }
      if (c < i.length && h > 0) {
        const g = i[c++];
        if (g.colDef.lockPinned) {
          r = !0;
          continue;
        }
        h -= g.getActualWidth(), u.push(g);
      }
    }
    return { columns: u, hasLockedPinned: r };
  }
}, Sp = {
  moduleName: "PinnedColumn",
  version: be,
  beans: [yp],
  css: [vp]
}, Rp = class extends K {
  constructor() {
    super(), this.beanName = "ariaAnnounce", this.descriptionContainer = null, this.pendingAnnouncements = /* @__PURE__ */ new Map(), this.lastAnnouncement = "", this.updateAnnouncement = ts(this, this.updateAnnouncement.bind(this), 200);
  }
  postConstruct() {
    const e = this.beans, t = rt(e), s = this.descriptionContainer = t.createElement("div");
    s.classList.add("ag-aria-description-container"), Vo(s, "polite"), dl(s, "additions text"), cl(s, !0), e.eGridDiv.appendChild(s);
  }
  /**
   * @param key used for debouncing calls
   */
  announceValue(e, t) {
    this.pendingAnnouncements.set(t, e), this.updateAnnouncement();
  }
  updateAnnouncement() {
    if (!this.descriptionContainer)
      return;
    const e = Array.from(this.pendingAnnouncements.values()).join(". ");
    this.pendingAnnouncements.clear(), this.descriptionContainer.textContent = "", setTimeout(() => {
      if (this.isAlive() && this.descriptionContainer) {
        let t = e;
        this.lastAnnouncement === t && (t = `${t}.`), this.lastAnnouncement = t, this.descriptionContainer.textContent = t;
      }
    }, 50);
  }
  destroy() {
    var t;
    super.destroy();
    const { descriptionContainer: e } = this;
    e && (fs(e), (t = e.parentElement) == null || t.removeChild(e)), this.descriptionContainer = null, this.pendingAnnouncements.clear();
  }
}, xp = {
  moduleName: "Aria",
  version: be,
  beans: [Rp]
};
function Fp(e) {
  var t;
  (t = e.overlays) == null || t.showLoadingOverlay();
}
function Dp(e) {
  var t;
  (t = e.overlays) == null || t.showNoRowsOverlay();
}
function Pp(e) {
  var t;
  (t = e.overlays) == null || t.hideOverlay();
}
var Ep = (
  /*css*/
  ".ag-overlay{inset:0;pointer-events:none;position:absolute;z-index:2}.ag-overlay-panel,.ag-overlay-wrapper{display:flex;height:100%;width:100%}.ag-overlay-wrapper{align-items:center;flex:none;justify-content:center;text-align:center}.ag-overlay-loading-wrapper{pointer-events:all}.ag-overlay-loading-center{background:var(--ag-background-color);border:1px solid var(--ag-border-color);border-radius:var(--ag-border-radius);box-shadow:var(--ag-popup-shadow);padding:var(--ag-spacing)}"
), Tp = {
  tag: "div",
  cls: "ag-overlay",
  role: "presentation",
  children: [
    {
      tag: "div",
      cls: "ag-overlay-panel",
      role: "presentation",
      children: [{ tag: "div", ref: "eOverlayWrapper", cls: "ag-overlay-wrapper", role: "presentation" }]
    }
  ]
}, ya = class extends ut {
  constructor() {
    super(Tp), this.eOverlayWrapper = de, this.activePromise = null, this.activeOverlay = null, this.updateListenerDestroyFunc = null, this.activeCssClass = null, this.elToFocusAfter = null, this.registerCSS(Ep);
  }
  handleKeyDown(e) {
    if (e.key !== j.TAB || e.defaultPrevented || mt(e))
      return;
    const t = this.beans;
    if (an(t, this.eOverlayWrapper, !1, e.shiftKey))
      return;
    let n = !1;
    e.shiftKey ? n = t.focusSvc.focusGridView({
      column: Ce(t.visibleCols.allCols),
      backwards: !0,
      canFocusOverlay: !1
    }) : n = cs(t, !1), n && e.preventDefault();
  }
  updateLayoutClasses(e, t) {
    const s = this.eOverlayWrapper.classList, { AUTO_HEIGHT: n, NORMAL: r, PRINT: o } = ks;
    s.toggle(n, t.autoHeight), s.toggle(r, t.normal), s.toggle(o, t.print);
  }
  postConstruct() {
    this.createManagedBean(new Cr(this)), this.setDisplayed(!1, { skipAriaHidden: !0 }), this.beans.overlays.setOverlayWrapperComp(this), this.addManagedElementListeners(this.getFocusableElement(), { keydown: this.handleKeyDown.bind(this) });
  }
  setWrapperTypeClass(e) {
    const t = this.eOverlayWrapper.classList;
    this.activeCssClass && t.toggle(this.activeCssClass, !1), this.activeCssClass = e, t.toggle(e, !0);
  }
  showOverlay(e, t, s, n) {
    if (this.setWrapperTypeClass(t), this.destroyActiveOverlay(), this.elToFocusAfter = null, this.activePromise = e, !!e) {
      if (this.setDisplayed(!0, { skipAriaHidden: !0 }), s && this.isGridFocused()) {
        const r = Oe(this.beans);
        r && !$l(this.beans) && (this.elToFocusAfter = r);
      }
      e.then((r) => {
        if (this.activePromise !== e) {
          this.activeOverlay !== r && (this.destroyBean(r), r = null);
          return;
        }
        if (this.activePromise = null, !!r) {
          if (this.activeOverlay !== r && (this.eOverlayWrapper.appendChild(r.getGui()), this.activeOverlay = r, n)) {
            const o = r;
            this.updateListenerDestroyFunc = this.addManagedPropertyListener(n, ({ currentValue: i }) => {
              var a;
              (a = o.refresh) == null || a.call(o, ge(this.gos, { ...i ?? {} }));
            });
          }
          s && this.isGridFocused() && Ys(this.eOverlayWrapper);
        }
      });
    }
  }
  updateOverlayWrapperPaddingTop(e) {
    this.eOverlayWrapper.style.setProperty("padding-top", `${e}px`);
  }
  destroyActiveOverlay() {
    var n;
    this.activePromise = null;
    const e = this.activeOverlay;
    if (!e)
      return;
    let t = this.elToFocusAfter;
    this.activeOverlay = null, this.elToFocusAfter = null, t && !this.isGridFocused() && (t = null);
    const s = this.updateListenerDestroyFunc;
    s && (s(), this.updateListenerDestroyFunc = null), this.destroyBean(e), fs(this.eOverlayWrapper), (n = t == null ? void 0 : t.focus) == null || n.call(t, { preventScroll: !0 });
  }
  hideOverlay() {
    this.destroyActiveOverlay(), this.setDisplayed(!1, { skipAriaHidden: !0 });
  }
  isGridFocused() {
    const e = Oe(this.beans);
    return !!e && this.beans.eGridDiv.contains(e);
  }
  destroy() {
    this.elToFocusAfter = null, this.destroyActiveOverlay(), this.beans.overlays.setOverlayWrapperComp(void 0), super.destroy();
  }
}, Mp = {
  selector: "AG-OVERLAY-WRAPPER",
  component: ya
}, Ip = class extends K {
  constructor() {
    super(...arguments), this.beanName = "overlays", this.state = 0, this.showInitialOverlay = !0, this.wrapperPadding = 0;
  }
  postConstruct() {
    this.isClientSide = tn(this.gos), this.isServerSide = !this.isClientSide && ur(this.gos);
    const e = () => this.updateOverlayVisibility();
    this.addManagedEventListeners({
      newColumnsLoaded: e,
      rowDataUpdated: e,
      gridSizeChanged: this.refreshWrapperPadding.bind(this),
      rowCountReady: () => {
        this.showInitialOverlay = !1, this.updateOverlayVisibility();
      }
    }), this.addManagedPropertyListener("loading", e);
  }
  setOverlayWrapperComp(e) {
    this.eWrapper = e, this.updateOverlayVisibility();
  }
  /** Returns true if the overlay is visible. */
  isVisible() {
    return this.state !== 0 && !!this.eWrapper;
  }
  /** Returns true if the overlay is visible and is exclusive (popup over the grid) */
  isExclusive() {
    return this.state === 1 && !!this.eWrapper;
  }
  showLoadingOverlay() {
    this.showInitialOverlay = !1;
    const e = this.gos, t = e.get("loading");
    !t && (t !== void 0 || e.get("suppressLoadingOverlay")) || this.doShowLoadingOverlay();
  }
  showNoRowsOverlay() {
    this.showInitialOverlay = !1;
    const e = this.gos;
    e.get("loading") || e.get("suppressNoRowsOverlay") || this.doShowNoRowsOverlay();
  }
  hideOverlay() {
    if (this.showInitialOverlay = !1, this.gos.get("loading")) {
      oe(99);
      return;
    }
    this.doHideOverlay();
  }
  getOverlayWrapperSelector() {
    return Mp;
  }
  getOverlayWrapperCompClass() {
    return ya;
  }
  updateOverlayVisibility() {
    if (!this.eWrapper) {
      this.state = 0;
      return;
    }
    const {
      state: e,
      isClientSide: t,
      isServerSide: s,
      beans: { gos: n, colModel: r, rowModel: o }
    } = this;
    let i = this.gos.get("loading");
    i !== void 0 && (this.showInitialOverlay = !1), this.showInitialOverlay && i === void 0 && !n.get("suppressLoadingOverlay") && (i = !n.get("columnDefs") || !r.ready || !n.get("rowData") && t), i ? e !== 1 && this.doShowLoadingOverlay() : (this.showInitialOverlay = !1, t && o.isEmpty() && !n.get("suppressNoRowsOverlay") ? e !== 2 && this.doShowNoRowsOverlay() : (e === 1 || !s && e !== 0) && this.doHideOverlay());
  }
  doShowLoadingOverlay() {
    this.eWrapper && (this.state = 1, this.showOverlay(
      id(this.beans.userCompFactory, ge(this.gos, {})),
      "ag-overlay-loading-wrapper",
      "loadingOverlayComponentParams"
    ), this.updateExclusive());
  }
  doShowNoRowsOverlay() {
    this.eWrapper && (this.state = 2, this.showOverlay(
      ad(this.beans.userCompFactory, ge(this.gos, {})),
      "ag-overlay-no-rows-wrapper",
      "noRowsOverlayComponentParams"
    ), this.updateExclusive());
  }
  doHideOverlay() {
    this.eWrapper && (this.state = 0, this.eWrapper.hideOverlay(), this.updateExclusive());
  }
  showOverlay(e, t, s) {
    var r;
    const n = (e == null ? void 0 : e.newAgStackInstance()) ?? null;
    (r = this.eWrapper) == null || r.showOverlay(n, t, this.isExclusive(), s), this.refreshWrapperPadding();
  }
  updateExclusive() {
    const e = this.exclusive;
    this.exclusive = this.isExclusive(), this.exclusive !== e && this.eventSvc.dispatchEvent({
      type: "overlayExclusiveChanged"
    });
  }
  refreshWrapperPadding() {
    const e = this.eWrapper;
    if (!e)
      return;
    let t = 0;
    if (this.state === 2) {
      const s = this.beans.ctrlsSvc.get("gridHeaderCtrl");
      t = (s == null ? void 0 : s.headerHeight) || 0;
    } else this.wrapperPadding !== 0 && (t = 0);
    this.wrapperPadding !== t && (this.wrapperPadding = t, e.updateOverlayWrapperPaddingTop(t));
  }
}, Lp = {
  moduleName: "Overlay",
  version: be,
  userComponents: {
    agLoadingOverlay: _u,
    agNoRowsOverlay: $u
  },
  apiFunctions: {
    showLoadingOverlay: Fp,
    showNoRowsOverlay: Dp,
    hideOverlay: Pp
  },
  beans: [Ip]
}, Ap = class extends K {
  constructor() {
    super(...arguments), this.beanName = "rowContainerHeight", this.scrollY = 0, this.uiBodyHeight = 0;
  }
  postConstruct() {
    this.addManagedEventListeners({ bodyHeightChanged: this.updateOffset.bind(this) }), this.maxDivHeight = vl(), Ns(this.gos, "RowContainerHeightService - maxDivHeight = " + this.maxDivHeight);
  }
  updateOffset() {
    if (!this.stretching)
      return;
    const e = this.beans.ctrlsSvc.getScrollFeature().getVScrollPosition().top, t = this.getUiBodyHeight();
    (e !== this.scrollY || t !== this.uiBodyHeight) && (this.scrollY = e, this.uiBodyHeight = t, this.calculateOffset());
  }
  calculateOffset() {
    this.setUiContainerHeight(this.maxDivHeight), this.pixelsToShave = this.modelHeight - this.uiContainerHeight, this.maxScrollY = this.uiContainerHeight - this.uiBodyHeight;
    const e = this.scrollY / this.maxScrollY, t = e * this.pixelsToShave;
    Ns(
      this.gos,
      `RowContainerHeightService - Div Stretch Offset = ${t} (${this.pixelsToShave} * ${e})`
    ), this.setDivStretchOffset(t);
  }
  setUiContainerHeight(e) {
    e !== this.uiContainerHeight && (this.uiContainerHeight = e, this.eventSvc.dispatchEvent({ type: "rowContainerHeightChanged" }));
  }
  clearOffset() {
    this.setUiContainerHeight(this.modelHeight), this.pixelsToShave = 0, this.setDivStretchOffset(0);
  }
  setDivStretchOffset(e) {
    const t = typeof e == "number" ? Math.floor(e) : null;
    this.divStretchOffset !== t && (this.divStretchOffset = t, this.eventSvc.dispatchEvent({ type: "heightScaleChanged" }));
  }
  setModelHeight(e) {
    this.modelHeight = e, this.stretching = e != null && // null happens when in print layout
    this.maxDivHeight > 0 && e > this.maxDivHeight, this.stretching ? this.calculateOffset() : this.clearOffset();
  }
  getRealPixelPosition(e) {
    return e - this.divStretchOffset;
  }
  getUiBodyHeight() {
    const e = this.beans.ctrlsSvc.getScrollFeature().getVScrollPosition();
    return e.bottom - e.top;
  }
  getScrollPositionForPixel(e) {
    if (this.pixelsToShave <= 0)
      return e;
    const t = this.modelHeight - this.getUiBodyHeight(), s = e / t;
    return this.maxScrollY * s;
  }
}, kp = 400, Hp = class extends K {
  constructor() {
    super(...arguments), this.beanName = "rowRenderer", this.destroyFuncsForColumnListeners = [], this.rowCtrlsByRowIndex = {}, this.zombieRowCtrls = {}, this.allRowCtrls = [], this.topRowCtrls = [], this.bottomRowCtrls = [], this.refreshInProgress = !1, this.dataFirstRenderedFired = !1, this.setupRangeSelectionListeners = () => {
      const e = () => {
        this.getAllCellCtrls().forEach((o) => o.onCellSelectionChanged());
      }, t = () => {
        this.getAllCellCtrls().forEach((o) => o.updateRangeBordersIfRangeCount());
      }, s = () => {
        this.eventSvc.addEventListener("cellSelectionChanged", e), this.eventSvc.addEventListener("columnMoved", t), this.eventSvc.addEventListener("columnPinned", t), this.eventSvc.addEventListener("columnVisible", t);
      }, n = () => {
        this.eventSvc.removeEventListener("cellSelectionChanged", e), this.eventSvc.removeEventListener("columnMoved", t), this.eventSvc.removeEventListener("columnPinned", t), this.eventSvc.removeEventListener("columnVisible", t);
      };
      this.addDestroyFunc(() => n()), this.addManagedPropertyListeners(["enableRangeSelection", "cellSelection"], () => {
        ls(this.gos) ? s() : n();
      }), ls(this.gos) && s();
    };
  }
  wireBeans(e) {
    this.pageBounds = e.pageBounds, this.colModel = e.colModel, this.pinnedRowModel = e.pinnedRowModel, this.rowModel = e.rowModel, this.focusSvc = e.focusSvc, this.rowContainerHeight = e.rowContainerHeight, this.ctrlsSvc = e.ctrlsSvc;
  }
  postConstruct() {
    this.ctrlsSvc.whenReady(this, (e) => {
      this.gridBodyCtrl = e.gridBodyCtrl, this.initialise();
    });
  }
  initialise() {
    this.addManagedEventListeners({
      paginationChanged: this.onPageLoaded.bind(this),
      pinnedRowDataChanged: this.onPinnedRowDataChanged.bind(this),
      pinnedRowsChanged: this.onPinnedRowsChanged.bind(this),
      displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this),
      bodyScroll: this.onBodyScroll.bind(this),
      bodyHeightChanged: this.redraw.bind(this, {})
    }), this.addManagedPropertyListeners(["domLayout", "embedFullWidthRows"], () => this.onDomLayoutChanged()), this.addManagedPropertyListeners(["suppressMaxRenderedRowRestriction", "rowBuffer"], () => this.redraw()), this.addManagedPropertyListener("suppressCellFocus", (n) => this.onSuppressCellFocusChanged(n.currentValue)), this.addManagedPropertyListeners(
      [
        "groupSuppressBlankHeader",
        "getBusinessKeyForNode",
        "fullWidthCellRenderer",
        "fullWidthCellRendererParams",
        "suppressStickyTotalRow",
        "groupRowRenderer",
        "groupRowRendererParams",
        // maybe only needs to refresh FW rows...
        "loadingCellRenderer",
        "loadingCellRendererParams",
        "detailCellRenderer",
        "detailCellRendererParams",
        "enableRangeSelection",
        "enableCellTextSelection"
      ],
      () => this.redrawRows()
    ), this.addManagedPropertyListener("cellSelection", ({ currentValue: n, previousValue: r }) => {
      (!r && n || r && !n) && this.redrawRows();
    });
    const { stickyRowSvc: e, gos: t, showRowGroupCols: s } = this.beans;
    if (s && this.addManagedPropertyListener("showOpenedGroup", () => {
      const n = s.getShowRowGroupCols();
      n.length && this.refreshCells({ columns: n, force: !0 });
    }), e)
      this.stickyRowFeature = e.createStickyRowFeature(
        this,
        this.createRowCon.bind(this),
        this.destroyRowCtrls.bind(this)
      );
    else {
      const n = this.gridBodyCtrl;
      n.setStickyTopHeight(0), n.setStickyBottomHeight(0);
    }
    this.registerCellEventListeners(), this.initialiseCache(), this.printLayout = We(t, "print"), this.embedFullWidthRows = this.printLayout || t.get("embedFullWidthRows"), this.redrawAfterModelUpdate();
  }
  initialiseCache() {
    if (this.gos.get("keepDetailRows")) {
      const e = this.getKeepDetailRowsCount(), t = e ?? 3;
      this.cachedRowCtrls = new Op(t);
    }
  }
  getKeepDetailRowsCount() {
    return this.gos.get("keepDetailRowsCount");
  }
  getStickyTopRowCtrls() {
    var e;
    return ((e = this.stickyRowFeature) == null ? void 0 : e.stickyTopRowCtrls) ?? [];
  }
  getStickyBottomRowCtrls() {
    var e;
    return ((e = this.stickyRowFeature) == null ? void 0 : e.stickyBottomRowCtrls) ?? [];
  }
  updateAllRowCtrls() {
    var n;
    const e = Object.values(this.rowCtrlsByRowIndex), t = Object.values(this.zombieRowCtrls), s = ((n = this.cachedRowCtrls) == null ? void 0 : n.getEntries()) ?? [];
    t.length > 0 || s.length > 0 ? this.allRowCtrls = [...e, ...t, ...s] : this.allRowCtrls = e;
  }
  /**
   * Checks if the cell is rendered or not. Also returns true if row ctrl is present but has not rendered
   * cells yet.
   * @returns true if cellCtrl is present, or if the row is present but has not rendered rows yet
   */
  isCellBeingRendered(e, t) {
    var r;
    const s = this.rowCtrlsByRowIndex[e];
    return !t || !s ? !!s : s.isFullWidth() ? !0 : !!((r = this.beans.spannedRowRenderer) == null ? void 0 : r.getCellByPosition({ rowIndex: e, column: t, rowPinned: null })) || !!s.getCellCtrl(t) || !s.isRowRendered();
  }
  /**
   * Notifies all row and cell controls of any change in focused cell.
   * @param event cell focused event
   */
  updateCellFocus(e) {
    this.getAllCellCtrls().forEach((t) => t.onCellFocused(e)), this.getFullWidthRowCtrls().forEach((t) => t.onFullWidthRowFocused(e));
  }
  /**
   * Called when a new cell is focused in the grid
   * - if the focused cell isn't rendered; re-draw rows to dry to render it
   * - subsequently updates all cell and row controls with the new focused cell
   * @param event cell focused event
   */
  onCellFocusChanged(e) {
    if (e && e.rowIndex != null && !e.rowPinned) {
      const t = this.beans.colModel.getCol(e.column) ?? void 0;
      this.isCellBeingRendered(e.rowIndex, t) || this.redraw();
    }
    this.updateCellFocus(e);
  }
  onSuppressCellFocusChanged(e) {
    this.getAllCellCtrls().forEach((t) => t.onSuppressCellFocusChanged(e)), this.getFullWidthRowCtrls().forEach((t) => t.onSuppressCellFocusChanged(e));
  }
  // in a clean design, each cell would register for each of these events. however when scrolling, all the cells
  // registering and de-registering for events is a performance bottleneck. so we register here once and inform
  // all active cells.
  registerCellEventListeners() {
    this.addManagedEventListeners({
      cellFocused: (e) => this.onCellFocusChanged(e),
      cellFocusCleared: () => this.updateCellFocus(),
      flashCells: (e) => {
        const { cellFlashSvc: t } = this.beans;
        t && this.getAllCellCtrls().forEach((s) => t.onFlashCells(s, e));
      },
      columnHoverChanged: () => {
        this.getAllCellCtrls().forEach((e) => e.onColumnHover());
      },
      displayedColumnsChanged: () => {
        this.getAllCellCtrls().forEach((e) => e.onDisplayedColumnsChanged());
      },
      displayedColumnsWidthChanged: () => {
        this.printLayout && this.getAllCellCtrls().forEach((e) => e.onLeftChanged());
      }
    }), this.setupRangeSelectionListeners(), this.refreshListenersToColumnsForCellComps(), this.addManagedEventListeners({
      gridColumnsChanged: this.refreshListenersToColumnsForCellComps.bind(this)
    }), this.addDestroyFunc(this.removeGridColumnListeners.bind(this));
  }
  // executes all functions in destroyFuncsForColumnListeners and then clears the list
  removeGridColumnListeners() {
    this.destroyFuncsForColumnListeners.forEach((e) => e()), this.destroyFuncsForColumnListeners.length = 0;
  }
  // this function adds listeners onto all the grid columns, which are the column that we could have cellComps for.
  // when the grid columns change, we add listeners again. in an ideal design, each CellComp would just register to
  // the column it belongs to on creation, however this was a bottleneck with the number of cells, so do it here
  // once instead.
  refreshListenersToColumnsForCellComps() {
    this.removeGridColumnListeners(), this.colModel.getCols().forEach((t) => {
      const s = (l) => {
        this.getAllCellCtrls().forEach((c) => {
          c.column === t && l(c);
        });
      }, n = () => {
        s((l) => l.onLeftChanged());
      }, r = () => {
        s((l) => l.onWidthChanged());
      }, o = () => {
        s((l) => l.onFirstRightPinnedChanged());
      }, i = () => {
        s((l) => l.onLastLeftPinnedChanged());
      }, a = () => {
        s((l) => l.onColDefChanged());
      };
      t.__addEventListener("leftChanged", n), t.__addEventListener("widthChanged", r), t.__addEventListener("firstRightPinnedChanged", o), t.__addEventListener("lastLeftPinnedChanged", i), t.__addEventListener("colDefChanged", a), this.destroyFuncsForColumnListeners.push(() => {
        t.__removeEventListener("leftChanged", n), t.__removeEventListener("widthChanged", r), t.__removeEventListener("firstRightPinnedChanged", o), t.__removeEventListener("lastLeftPinnedChanged", i), t.__removeEventListener("colDefChanged", a);
      });
    });
  }
  onDomLayoutChanged() {
    const e = We(this.gos, "print"), t = e || this.gos.get("embedFullWidthRows"), s = t !== this.embedFullWidthRows || this.printLayout !== e;
    this.printLayout = e, this.embedFullWidthRows = t, s && this.redrawAfterModelUpdate({ domLayoutChanged: !0 });
  }
  // for row models that have datasources, when we update the datasource, we need to force the rowRenderer
  // to redraw all rows. otherwise the old rows from the old datasource will stay displayed.
  datasourceChanged() {
    this.firstRenderedRow = 0, this.lastRenderedRow = -1;
    const e = Object.keys(this.rowCtrlsByRowIndex);
    this.removeRowCtrls(e);
  }
  onPageLoaded(e) {
    const t = {
      recycleRows: e.keepRenderedRows,
      animate: e.animate,
      newData: e.newData,
      newPage: e.newPage,
      // because this is a model updated event (not pinned rows), we
      // can skip updating the pinned rows. this is needed so that if user
      // is doing transaction updates, the pinned rows are not getting constantly
      // trashed - or editing cells in pinned rows are not refreshed and put into read mode
      onlyBody: !0
    };
    this.redrawAfterModelUpdate(t);
  }
  /**
   * @param column AgColumn
   * @returns An array with HTMLElement for every cell of the column passed as param.
   * If the cell is spanning across multiple columns, it only returns the html element
   * if the column passed is the first column of the span (used for auto width calculation).
   */
  getAllCellsNotSpanningForColumn(e) {
    const t = [];
    return this.getAllRowCtrls().forEach((s) => {
      var r;
      const n = (r = s.getCellCtrl(e, !0)) == null ? void 0 : r.eGui;
      n && t.push(n);
    }), t;
  }
  refreshFloatingRowComps(e = !0) {
    this.refreshFloatingRows(this.topRowCtrls, "top", e), this.refreshFloatingRows(this.bottomRowCtrls, "bottom", e);
  }
  /**
   * Determines which row controllers need to be destroyed and re-created vs which ones can
   * be re-used.
   *
   * This is operation is to pinned/floating rows as `this.recycleRows` is to normal/body rows.
   *
   * All `RowCtrl` instances in `rowCtrls` that don't correspond to `RowNode` instances in `rowNodes` are destroyed.
   * All `RowNode` instances in `rowNodes` that don't correspond to `RowCtrl` instances in `rowCtrls` are created.
   * All instances in `rowCtrls` must be in the same order as their corresponding nodes in `rowNodes`.
   *
   * @param rowCtrls The list of existing row controllers
   * @param rowNodes The canonical list of row nodes that should have associated controllers
   */
  refreshFloatingRows(e, t, s) {
    const { pinnedRowModel: n, beans: r, printLayout: o } = this, i = Object.fromEntries(e.map((l) => [l.rowNode.id, l]));
    n == null || n.forEachPinnedRow(t, (l, c) => {
      const d = e[c];
      d && n.getPinnedRowById(d.rowNode.id, t) === void 0 && (d.destroyFirstPass(), d.destroySecondPass()), l.id in i && s ? (e[c] = i[l.id], delete i[l.id]) : e[c] = new er(l, r, !1, !1, o);
    });
    const a = (t === "top" ? n == null ? void 0 : n.getPinnedTopRowCount() : n == null ? void 0 : n.getPinnedBottomRowCount()) ?? 0;
    e.length = a;
  }
  onPinnedRowDataChanged() {
    const e = {
      recycleRows: !0
    };
    this.redrawAfterModelUpdate(e);
  }
  onPinnedRowsChanged() {
    this.redrawAfterModelUpdate({ recycleRows: !0 });
  }
  redrawRow(e, t = !1) {
    var s, n;
    if (e.sticky)
      (s = this.stickyRowFeature) == null || s.refreshStickyNode(e);
    else if ((n = this.cachedRowCtrls) != null && n.has(e)) {
      this.cachedRowCtrls.removeRow(e);
      return;
    } else {
      const r = (o) => {
        const i = o[e.rowIndex];
        i && i.rowNode === e && (i.destroyFirstPass(), i.destroySecondPass(), o[e.rowIndex] = this.createRowCon(e, !1, !1));
      };
      switch (e.rowPinned) {
        case "top":
          r(this.topRowCtrls);
          break;
        case "bottom":
          r(this.bottomRowCtrls);
          break;
        default:
          r(this.rowCtrlsByRowIndex), this.updateAllRowCtrls();
      }
    }
    t || this.dispatchDisplayedRowsChanged(!1);
  }
  redrawRows(e) {
    if (e != null) {
      e == null || e.forEach((s) => this.redrawRow(s, !0)), this.dispatchDisplayedRowsChanged(!1);
      return;
    }
    this.redrawAfterModelUpdate();
  }
  // gets called from:
  // +) initialisation (in registerGridComp) params = null
  // +) onDomLayoutChanged, params = null
  // +) onPageLoaded, recycleRows, animate, newData, newPage from event, onlyBody=true
  // +) onPinnedRowDataChanged, recycleRows = true
  // +) redrawRows (from Grid API), recycleRows = true/false
  redrawAfterModelUpdate(e = {}) {
    var a;
    this.getLockOnRefresh();
    const t = (a = this.beans.focusSvc) == null ? void 0 : a.getFocusCellToUseAfterRefresh();
    this.updateContainerHeights(), this.scrollToTopIfNewData(e);
    const s = !e.domLayoutChanged && !!e.recycleRows, n = e.animate && gr(this.gos), r = s ? this.getRowsToRecycle() : null;
    s || this.removeAllRowComps(), this.workOutFirstAndLastRowsToRender();
    const { stickyRowFeature: o, gos: i } = this;
    if (o) {
      o.checkStickyRows();
      const l = o.extraTopHeight + o.extraBottomHeight;
      l && this.updateContainerHeights(l);
    }
    this.recycleRows(r, n), this.gridBodyCtrl.updateRowCount(), e.onlyBody || this.refreshFloatingRowComps(i.get("enableRowPinning") ? s : void 0), this.dispatchDisplayedRowsChanged(), t != null && this.restoreFocusedCell(t), this.releaseLockOnRefresh();
  }
  scrollToTopIfNewData(e) {
    var n;
    const t = e.newData || e.newPage, s = this.gos.get("suppressScrollOnNewData");
    t && !s && (this.gridBodyCtrl.scrollFeature.scrollToTop(), (n = this.stickyRowFeature) == null || n.resetOffsets());
  }
  updateContainerHeights(e = 0) {
    const { rowContainerHeight: t } = this;
    if (this.printLayout) {
      t.setModelHeight(null);
      return;
    }
    let s = this.pageBounds.getCurrentPageHeight();
    s === 0 && (s = 1), t.setModelHeight(s + e);
  }
  getLockOnRefresh() {
    var e, t;
    if (this.refreshInProgress)
      throw new Error(ai(252));
    this.refreshInProgress = !0, (t = (e = this.beans.frameworkOverrides).getLockOnRefresh) == null || t.call(e);
  }
  releaseLockOnRefresh() {
    var e, t;
    this.refreshInProgress = !1, (t = (e = this.beans.frameworkOverrides).releaseLockOnRefresh) == null || t.call(e);
  }
  isRefreshInProgress() {
    return this.refreshInProgress;
  }
  // sets the focus to the provided cell, if the cell is provided. this way, the user can call refresh without
  // worry about the focus been lost. this is important when the user is using keyboard navigation to do edits
  // and the cellEditor is calling 'refresh' to get other cells to update (as other cells might depend on the
  // edited cell).
  restoreFocusedCell(e) {
    if (!e)
      return;
    const t = this.beans.focusSvc, s = this.findPositionToFocus(e);
    if (!s) {
      t.focusHeaderPosition({
        headerPosition: {
          headerRowIndex: st(this.beans) - 1,
          column: e.column
        }
      });
      return;
    }
    if (e.rowIndex !== s.rowIndex || e.rowPinned != s.rowPinned) {
      t.setFocusedCell({
        ...s,
        preventScrollOnBrowserFocus: !0,
        forceBrowserFocus: !0
      });
      return;
    }
    t.doesRowOrCellHaveBrowserFocus() || this.updateCellFocus(
      ge(this.gos, {
        ...s,
        forceBrowserFocus: !0,
        preventScrollOnBrowserFocus: !0,
        type: "cellFocused"
      })
    );
  }
  findPositionToFocus(e) {
    const { pagination: t, pageBounds: s } = this.beans;
    let n = e;
    for (n.rowPinned == null && t && s && !t.isRowInPage(n.rowIndex) && (n = { rowPinned: null, rowIndex: s.getFirstRow() }); n; ) {
      if (n.rowPinned == null && s)
        if (n.rowIndex < s.getFirstRow()) {
          if (n = qs(this.beans, { rowPinned: null, rowIndex: 0 }), !n)
            return null;
        } else n.rowIndex > s.getLastRow() && (n = { rowPinned: null, rowIndex: s.getLastRow() });
      const r = this.getRowByPosition(n);
      if (r != null && r.isAlive())
        return { ...r.getRowPosition(), column: e.column };
      n = qs(this.beans, n);
    }
    return null;
  }
  getAllCellCtrls() {
    const e = [], t = this.getAllRowCtrls(), s = t.length;
    for (let n = 0; n < s; n++) {
      const r = t[n].getAllCellCtrls(), o = r.length;
      for (let i = 0; i < o; i++)
        e.push(r[i]);
    }
    return e;
  }
  getAllRowCtrls() {
    const { spannedRowRenderer: e } = this.beans, t = this.getStickyTopRowCtrls(), s = this.getStickyBottomRowCtrls();
    return [
      ...this.topRowCtrls,
      ...this.bottomRowCtrls,
      ...t,
      ...s,
      ...(e == null ? void 0 : e.getCtrls("top")) ?? [],
      ...(e == null ? void 0 : e.getCtrls("bottom")) ?? [],
      ...(e == null ? void 0 : e.getCtrls("center")) ?? [],
      ...Object.values(this.rowCtrlsByRowIndex)
    ];
  }
  addRenderedRowListener(e, t, s) {
    const n = this.rowCtrlsByRowIndex[t];
    n && n.addEventListener(e, s);
  }
  refreshCells(e = {}) {
    const t = {
      forceRefresh: e.force,
      newData: !1,
      suppressFlash: e.suppressFlash
    };
    for (const s of this.getCellCtrls(e.rowNodes, e.columns))
      s.refreshOrDestroyCell(t);
    this.refreshFullWidth(e.rowNodes);
  }
  refreshFullWidth(e) {
    if (!e)
      return;
    let t = !1;
    for (const s of this.getRowCtrls(e)) {
      if (!s.isFullWidth())
        continue;
      s.refreshFullWidth() || (t = !0, this.redrawRow(s.rowNode, !0));
    }
    t && this.dispatchDisplayedRowsChanged(!1);
  }
  /**
   * @param rowNodes if provided, returns the RowCtrls for the provided rowNodes. otherwise returns all RowCtrls.
   */
  getRowCtrls(e) {
    const t = xo(e), s = this.getAllRowCtrls();
    return !e || !t ? s : s.filter((n) => {
      const r = n.rowNode;
      return Fo(r, t);
    });
  }
  // returns CellCtrl's that match the provided rowNodes and columns. eg if one row node
  // and two columns provided, that identifies 4 cells, so 4 CellCtrl's returned.
  getCellCtrls(e, t) {
    let s;
    te(t) && (s = {}, t.forEach((r) => {
      const o = this.colModel.getCol(r);
      te(o) && (s[o.getId()] = !0);
    }));
    const n = [];
    return this.getRowCtrls(e).forEach((r) => {
      r.getAllCellCtrls().forEach((o) => {
        const i = o.column.getId();
        s && !s[i] || n.push(o);
      });
    }), n;
  }
  destroy() {
    this.removeAllRowComps(!0), super.destroy();
  }
  removeAllRowComps(e = !1) {
    var s;
    const t = Object.keys(this.rowCtrlsByRowIndex);
    this.removeRowCtrls(t, e), (s = this.stickyRowFeature) == null || s.destroyStickyCtrls();
  }
  getRowsToRecycle() {
    const e = [];
    for (const s of Object.keys(this.rowCtrlsByRowIndex))
      this.rowCtrlsByRowIndex[s].rowNode.id == null && e.push(s);
    this.removeRowCtrls(e);
    const t = {};
    for (const s of Object.values(this.rowCtrlsByRowIndex)) {
      const n = s.rowNode;
      t[n.id] = s;
    }
    return this.rowCtrlsByRowIndex = {}, t;
  }
  // takes array of row indexes
  removeRowCtrls(e, t = !1) {
    e.forEach((s) => {
      const n = this.rowCtrlsByRowIndex[s];
      n && (n.destroyFirstPass(t), n.destroySecondPass()), delete this.rowCtrlsByRowIndex[s];
    });
  }
  onBodyScroll(e) {
    e.direction === "vertical" && this.redraw({ afterScroll: !0 });
  }
  // gets called when rows don't change, but viewport does, so after:
  // 1) height of grid body changes, ie number of displayed rows has changed
  // 2) grid scrolled to new position
  // 3) ensure index visible (which is a scroll)
  redraw(e = {}) {
    const { focusSvc: t, animationFrameSvc: s } = this.beans, { afterScroll: n } = e;
    let r;
    const o = this.stickyRowFeature;
    o && (r = (t == null ? void 0 : t.getFocusCellToUseAfterRefresh()) || void 0);
    const i = this.firstRenderedRow, a = this.lastRenderedRow;
    this.workOutFirstAndLastRowsToRender();
    let l = !1;
    if (o) {
      l = o.checkStickyRows();
      const d = o.extraTopHeight + o.extraBottomHeight;
      d && this.updateContainerHeights(d);
    }
    const c = this.firstRenderedRow !== i || this.lastRenderedRow !== a;
    if (!(n && !l && !c) && (this.getLockOnRefresh(), this.recycleRows(null, !1, n), this.releaseLockOnRefresh(), this.dispatchDisplayedRowsChanged(n && !l), r != null)) {
      const d = t == null ? void 0 : t.getFocusCellToUseAfterRefresh();
      r != null && d == null && (s == null || s.flushAllFrames(), this.restoreFocusedCell(r));
    }
  }
  removeRowCompsNotToDraw(e, t) {
    const s = {};
    e.forEach((o) => s[o] = !0);
    const r = Object.keys(this.rowCtrlsByRowIndex).filter((o) => !s[o]);
    this.removeRowCtrls(r, t);
  }
  calculateIndexesToDraw(e) {
    var i, a;
    const t = [];
    for (let l = this.firstRenderedRow; l <= this.lastRenderedRow; l++)
      t.push(l);
    const s = this.beans.pagination, n = (a = (i = this.beans.focusSvc) == null ? void 0 : i.getFocusedCell()) == null ? void 0 : a.rowIndex;
    n != null && (n < this.firstRenderedRow || n > this.lastRenderedRow) && (!s || s.isRowInPage(n)) && n < this.rowModel.getRowCount() && t.push(n);
    const r = (l) => {
      const c = l.rowNode.rowIndex;
      c == null || c === n || (c < this.firstRenderedRow || c > this.lastRenderedRow) && this.doNotUnVirtualiseRow(l) && t.push(c);
    };
    for (const l of Object.values(this.rowCtrlsByRowIndex))
      r(l);
    if (e)
      for (const l of Object.values(e))
        r(l);
    t.sort((l, c) => l - c);
    const o = [];
    for (let l = 0; l < t.length; l++) {
      const c = t[l], d = this.rowModel.getRow(c);
      d && !d.sticky && o.push(c);
    }
    return o;
  }
  recycleRows(e, t = !1, s = !1) {
    const n = this.calculateIndexesToDraw(e);
    if ((this.printLayout || s) && (t = !1), this.removeRowCompsNotToDraw(n, !t), n.forEach((r) => {
      this.createOrUpdateRowCtrl(r, e, t, s);
    }), e) {
      const { animationFrameSvc: r } = this.beans;
      (r == null ? void 0 : r.active) && s && !this.printLayout ? r.addDestroyTask(() => {
        this.destroyRowCtrls(e, t), this.updateAllRowCtrls(), this.dispatchDisplayedRowsChanged();
      }) : this.destroyRowCtrls(e, t);
    }
    this.updateAllRowCtrls();
  }
  dispatchDisplayedRowsChanged(e = !1) {
    this.eventSvc.dispatchEvent({
      type: "displayedRowsChanged",
      afterScroll: e
    });
  }
  onDisplayedColumnsChanged() {
    const { visibleCols: e } = this.beans, t = e.isPinningLeft(), s = e.isPinningRight();
    (this.pinningLeft !== t || s !== this.pinningRight) && (this.pinningLeft = t, this.pinningRight = s, this.embedFullWidthRows && this.redrawFullWidthEmbeddedRows());
  }
  // when embedding, what gets showed in each section depends on what is pinned. eg if embedding group expand / collapse,
  // then it should go into the pinned left area if pinning left, or the center area if not pinning.
  redrawFullWidthEmbeddedRows() {
    const e = [];
    this.getFullWidthRowCtrls().forEach((t) => {
      const s = t.rowNode.rowIndex;
      e.push(s.toString());
    }), this.refreshFloatingRowComps(), this.removeRowCtrls(e), this.redraw({ afterScroll: !0 });
  }
  getFullWidthRowCtrls(e) {
    const t = xo(e);
    return this.getAllRowCtrls().filter((s) => {
      if (!s.isFullWidth())
        return !1;
      const n = s.rowNode;
      return !(t != null && !Fo(n, t));
    });
  }
  createOrUpdateRowCtrl(e, t, s, n) {
    let r, o = this.rowCtrlsByRowIndex[e];
    if (o || (r = this.rowModel.getRow(e), te(r) && te(t) && t[r.id] && r.alreadyRendered && (o = t[r.id], t[r.id] = null)), !o)
      if (r || (r = this.rowModel.getRow(e)), te(r))
        o = this.createRowCon(r, s, n);
      else
        return;
    return r && (r.alreadyRendered = !0), this.rowCtrlsByRowIndex[e] = o, o;
  }
  destroyRowCtrls(e, t) {
    const s = [];
    if (e) {
      for (const n of Object.values(e))
        if (n) {
          if (this.cachedRowCtrls && n.isCacheable()) {
            this.cachedRowCtrls.addRow(n);
            continue;
          }
          if (n.destroyFirstPass(!t), t) {
            const r = n.instanceId;
            this.zombieRowCtrls[r] = n, s.push(() => {
              n.destroySecondPass(), delete this.zombieRowCtrls[r];
            });
          } else
            n.destroySecondPass();
        }
    }
    t && (s.push(() => {
      this.updateAllRowCtrls(), this.dispatchDisplayedRowsChanged();
    }), window.setTimeout(() => s.forEach((n) => n()), kp));
  }
  getRowBuffer() {
    return this.gos.get("rowBuffer");
  }
  getRowBufferInPixels() {
    const e = this.getRowBuffer(), t = ui(this.beans);
    return e * t;
  }
  workOutFirstAndLastRowsToRender() {
    const { rowContainerHeight: e, pageBounds: t, rowModel: s } = this;
    e.updateOffset();
    let n, r;
    if (!s.isRowsToRender())
      n = 0, r = -1;
    else if (this.printLayout)
      this.beans.environment.refreshRowHeightVariable(), n = t.getFirstRow(), r = t.getLastRow();
    else {
      const d = this.getRowBufferInPixels(), u = this.ctrlsSvc.getScrollFeature(), h = this.gos.get("suppressRowVirtualisation");
      let g = !1, f, C;
      do {
        const y = t.getPixelOffset(), { pageFirstPixel: F, pageLastPixel: S } = t.getCurrentPagePixelRange(), P = e.divStretchOffset, W = u.getVScrollPosition(), O = W.top, L = W.bottom;
        h ? (f = F + P, C = S + P) : (f = Math.max(O + y - d, F) + P, C = Math.min(L + y + d, S) + P), this.firstVisibleVPixel = Math.max(O + y, F) + P, this.lastVisibleVPixel = Math.min(L + y, S) + P, g = this.ensureAllRowsInRangeHaveHeightsCalculated(f, C);
      } while (g);
      let p = s.getRowIndexAtPixel(f), m = s.getRowIndexAtPixel(C);
      const v = t.getFirstRow(), b = t.getLastRow();
      p < v && (p = v), m > b && (m = b), n = p, r = m;
    }
    const o = We(this.gos, "normal"), i = this.gos.get("suppressMaxRenderedRowRestriction"), a = Math.max(this.getRowBuffer(), 500);
    o && !i && r - n > a && (r = n + a);
    const l = n !== this.firstRenderedRow, c = r !== this.lastRenderedRow;
    (l || c) && (this.firstRenderedRow = n, this.lastRenderedRow = r, this.eventSvc.dispatchEvent({
      type: "viewportChanged",
      firstRow: n,
      lastRow: r
    }));
  }
  /**
   * This event will only be fired once, and is queued until after the browser next renders.
   * This allows us to fire an event during the start of the render cycle, when we first see data being rendered
   * but not execute the event until all of the data has finished being rendered to the dom.
   */
  dispatchFirstDataRenderedEvent() {
    this.dataFirstRenderedFired || (this.dataFirstRenderedFired = !0, yt(this.beans, () => {
      this.beans.eventSvc.dispatchEvent({
        type: "firstDataRendered",
        firstRow: this.firstRenderedRow,
        lastRow: this.lastRenderedRow
      });
    }));
  }
  ensureAllRowsInRangeHaveHeightsCalculated(e, t) {
    var a, l;
    const s = (a = this.pinnedRowModel) == null ? void 0 : a.ensureRowHeightsValid(), n = (l = this.stickyRowFeature) == null ? void 0 : l.ensureRowHeightsValid(), { pageBounds: r, rowModel: o } = this, i = o.ensureRowHeightsValid(
      e,
      t,
      r.getFirstRow(),
      r.getLastRow()
    );
    return (i || n) && this.eventSvc.dispatchEvent({
      type: "recalculateRowBounds"
    }), n || i || s ? (this.updateContainerHeights(), !0) : !1;
  }
  // check that none of the rows to remove are editing or focused as:
  // a) if editing, we want to keep them, otherwise the user will loose the context of the edit,
  //    eg user starts editing, enters some text, then scrolls down and then up, next time row rendered
  //    the edit is reset - so we want to keep it rendered.
  // b) if focused, we want ot keep keyboard focus, so if user ctrl+c, it goes to clipboard,
  //    otherwise the user can range select and drag (with focus cell going out of the viewport)
  //    and then ctrl+c, nothing will happen if cell is removed from dom.
  // c) if detail record of master detail, as users complained that the context of detail rows
  //    was getting lost when detail row out of view. eg user expands to show detail row,
  //    then manipulates the detail panel (eg sorts the detail grid), then context is lost
  //    after detail panel is scrolled out of / into view.
  doNotUnVirtualiseRow(e) {
    const n = e.rowNode, r = this.focusSvc.isRowFocused(n.rowIndex, n.rowPinned), o = e.editing, i = n.detail;
    return r || o || i ? !!this.isRowPresent(n) : !1;
  }
  isRowPresent(e) {
    var t;
    return this.rowModel.isRowPresent(e) ? ((t = this.beans.pagination) == null ? void 0 : t.isRowInPage(e.rowIndex)) ?? !0 : !1;
  }
  createRowCon(e, t, s) {
    var i, a;
    const n = ((i = this.cachedRowCtrls) == null ? void 0 : i.getRow(e)) ?? null;
    if (n)
      return n;
    const r = s && !this.printLayout && !!((a = this.beans.animationFrameSvc) != null && a.active);
    return new er(e, this.beans, t, r, this.printLayout);
  }
  getRenderedNodes() {
    const e = Object.values(this.rowCtrlsByRowIndex).map((n) => n.rowNode), t = this.getStickyTopRowCtrls().map((n) => n.rowNode), s = this.getStickyBottomRowCtrls().map((n) => n.rowNode);
    return [...t, ...e, ...s];
  }
  getRowByPosition(e) {
    let t;
    const { rowIndex: s } = e;
    switch (e.rowPinned) {
      case "top":
        t = this.topRowCtrls[s];
        break;
      case "bottom":
        t = this.bottomRowCtrls[s];
        break;
      default:
        t = this.rowCtrlsByRowIndex[s], t || (t = this.getStickyTopRowCtrls().find((n) => n.rowNode.rowIndex === s) || null, t || (t = this.getStickyBottomRowCtrls().find((n) => n.rowNode.rowIndex === s) || null));
        break;
    }
    return t;
  }
  // returns true if any row between startIndex and endIndex is rendered. used by
  // SSRM or IRM, as they don't want to purge visible blocks from cache.
  isRangeInRenderedViewport(e, t) {
    if (e == null || t == null)
      return !1;
    const n = e > this.lastRenderedRow;
    return !(t < this.firstRenderedRow) && !n;
  }
}, Op = class {
  constructor(e) {
    this.entriesMap = {}, this.entriesList = [], this.maxCount = e;
  }
  addRow(e) {
    if (this.entriesMap[e.rowNode.id] = e, this.entriesList.push(e), e.setCached(!0), this.entriesList.length > this.maxCount) {
      const t = this.entriesList[0];
      t.destroyFirstPass(), t.destroySecondPass(), this.removeFromCache(t);
    }
  }
  getRow(e) {
    if (e == null || e.id == null)
      return null;
    const t = this.entriesMap[e.id];
    return t ? (this.removeFromCache(t), t.setCached(!1), t.rowNode != e ? null : t) : null;
  }
  has(e) {
    return this.entriesMap[e.id] != null;
  }
  removeRow(e) {
    const t = e.id, s = this.entriesMap[t];
    delete this.entriesMap[t], vt(this.entriesList, s);
  }
  removeFromCache(e) {
    const t = e.rowNode.id;
    delete this.entriesMap[t], vt(this.entriesList, e);
  }
  getEntries() {
    return this.entriesList;
  }
};
function xo(e) {
  if (!e)
    return;
  const t = {
    top: {},
    bottom: {},
    normal: {}
  };
  return e.forEach((s) => {
    const n = s.id;
    switch (s.rowPinned) {
      case "top":
        t.top[n] = s;
        break;
      case "bottom":
        t.bottom[n] = s;
        break;
      default:
        t.normal[n] = s;
        break;
    }
  }), t;
}
function Fo(e, t) {
  const s = e.id;
  switch (e.rowPinned) {
    case "top":
      return t.top[s] != null;
    case "bottom":
      return t.bottom[s] != null;
    default:
      return t.normal[s] != null;
  }
}
var Gp = class extends K {
  constructor() {
    super(...arguments), this.beanName = "rowNodeSorter";
  }
  postConstruct() {
    const { gos: e } = this;
    this.isAccentedSort = e.get("accentedSort"), this.primaryColumnsSortGroups = at(e), this.addManagedPropertyListener(
      "accentedSort",
      (t) => this.isAccentedSort = t.currentValue
    ), this.addManagedPropertyListener(
      "autoGroupColumnDef",
      () => this.primaryColumnsSortGroups = at(e)
    );
  }
  doFullSort(e, t) {
    const s = e.map((n, r) => ({
      currentPos: r,
      rowNode: n
    }));
    return s.sort(this.compareRowNodes.bind(this, t)), s.map((n) => n.rowNode);
  }
  compareRowNodes(e, t, s) {
    const n = t.rowNode, r = s.rowNode;
    for (let o = 0, i = e.length; o < i; o++) {
      const a = e[o], l = a.sort === "desc", c = this.getValue(n, a.column), d = this.getValue(r, a.column);
      let u;
      const h = this.getComparator(a, n);
      if (h ? u = h(c, d, n, r, l) : u = Ml(c, d, this.isAccentedSort), !isNaN(u) && u !== 0)
        return a.sort === "asc" ? u : u * -1;
    }
    return t.currentPos - s.currentPos;
  }
  getComparator(e, t) {
    const s = e.column, n = s.getColDef().comparator;
    if (n != null)
      return n;
    if (!s.getColDef().showRowGroup)
      return;
    const r = !t.group && s.getColDef().field;
    if (!r)
      return;
    const o = this.beans.colModel.getColDefCol(r);
    if (o)
      return o.getColDef().comparator;
  }
  getValue(e, t) {
    var a, l;
    const { valueSvc: s, colModel: n, showRowGroupCols: r, gos: o } = this.beans;
    if (!this.primaryColumnsSortGroups)
      return s.getValue(t, e, !1);
    if (e.rowGroupColumn === t) {
      if (pi(o, n.isPivotActive())) {
        const u = (a = e.allLeafChildren) == null ? void 0 : a[0];
        return u ? s.getValue(t, u, !1) : void 0;
      }
      const d = r == null ? void 0 : r.getShowRowGroupCol(t.getId());
      return d ? (l = e.groupData) == null ? void 0 : l[d.getId()] : void 0;
    }
    if (!(e.group && t.getColDef().showRowGroup))
      return s.getValue(t, e, !1);
  }
};
function Bp(e) {
  var t;
  (t = e.sortSvc) == null || t.onSortChanged("api");
}
var Wp = {
  moduleName: "Sort",
  version: be,
  beans: [jf, Gp],
  apiFunctions: {
    onSortChanged: Bp
  },
  userComponents: {
    agSortIndicator: Sr
  },
  icons: {
    // show on column header when column is sorted ascending
    sortAscending: "asc",
    // show on column header when column is sorted descending
    sortDescending: "desc",
    // show on column header when column has no sort, only when enabled with gridOptions.unSortIcon=true
    sortUnSort: "none"
  }
}, Np = class extends K {
  constructor() {
    super(...arguments), this.beanName = "syncSvc", this.waitingForColumns = !1;
  }
  postConstruct() {
    this.addManagedPropertyListener("columnDefs", (e) => this.setColumnDefs(e));
  }
  start() {
    this.beans.ctrlsSvc.whenReady(this, () => {
      const e = this.gos.get("columnDefs");
      e ? this.setColumnsAndData(e) : this.waitingForColumns = !0, this.gridReady();
    });
  }
  setColumnsAndData(e) {
    const { colModel: t, rowModel: s } = this.beans;
    t.setColumnDefs(e ?? [], "gridInitializing"), s.start();
  }
  gridReady() {
    const { eventSvc: e, gos: t } = this;
    e.dispatchEvent({
      type: "gridReady"
    }), Ns(t, `initialised successfully, enterprise = ${t.isModuleRegistered("EnterpriseCore")}`);
  }
  setColumnDefs(e) {
    const t = this.gos.get("columnDefs");
    if (t) {
      if (this.waitingForColumns) {
        this.waitingForColumns = !1, this.setColumnsAndData(t);
        return;
      }
      this.beans.colModel.setColumnDefs(t, Is(e.source));
    }
  }
}, Vp = "paste", _p = class extends K {
  constructor() {
    super(...arguments), this.beanName = "changeDetectionSvc", this.clientSideRowModel = null;
  }
  postConstruct() {
    const { gos: e, rowModel: t } = this.beans;
    tn(e) && (this.clientSideRowModel = t), this.addManagedEventListeners({ cellValueChanged: this.onCellValueChanged.bind(this) });
  }
  onCellValueChanged(e) {
    const { gos: t, rowRenderer: s } = this.beans;
    if (e.source === Vp || t.get("suppressChangeDetection"))
      return;
    const n = e.node, r = [n], o = this.clientSideRowModel, i = o == null ? void 0 : o.rootNode;
    if (i && !n.isRowPinned()) {
      const a = t.get("aggregateOnlyChangedColumns"), l = new qd(a, i);
      l.addParentNode(n.parent, [e.column]), o.doAggregate(l), l.forEachChangedNodeDepthFirst((c) => {
        r.push(c), c.sibling && r.push(c.sibling);
      });
    }
    s.refreshCells({ rowNodes: r });
  }
}, zp = class extends K {
  constructor() {
    super(...arguments), this.beanName = "expressionSvc", this.cache = {};
  }
  evaluate(e, t) {
    if (typeof e == "string")
      return this.evaluateExpression(e, t);
    je(15, { expression: e });
  }
  evaluateExpression(e, t) {
    try {
      return this.createExpressionFunction(e)(
        t.value,
        t.context,
        t.oldValue,
        t.newValue,
        t.value,
        t.node,
        t.data,
        t.colDef,
        t.rowIndex,
        t.api,
        t.getValue,
        t.column,
        t.columnGroup
      );
    } catch (s) {
      return je(16, { expression: e, params: t, e: s }), null;
    }
  }
  createExpressionFunction(e) {
    const t = this.cache;
    if (t[e])
      return t[e];
    const s = this.createFunctionBody(e), n = new Function(
      "x, ctx, oldValue, newValue, value, node, data, colDef, rowIndex, api, getValue, column, columnGroup",
      s
    );
    return t[e] = n, n;
  }
  createFunctionBody(e) {
    return e.indexOf("return") >= 0 ? e : "return " + e + ";";
  }
}, $p = {
  moduleName: "Expression",
  version: be,
  beans: [zp]
}, jp = {
  moduleName: "ChangeDetection",
  version: be,
  beans: [_p]
}, Up = class extends K {
  constructor() {
    super(...arguments), this.beanName = "valueSvc", this.initialised = !1, this.isSsrm = !1;
  }
  wireBeans(e) {
    this.expressionSvc = e.expressionSvc, this.colModel = e.colModel, this.valueCache = e.valueCache, this.dataTypeSvc = e.dataTypeSvc;
  }
  postConstruct() {
    this.initialised || this.init();
  }
  init() {
    this.executeValueGetter = this.valueCache ? this.executeValueGetterWithValueCache.bind(this) : this.executeValueGetterWithoutValueCache.bind(this), this.isSsrm = ur(this.gos), this.cellExpressions = this.gos.get("enableCellExpressions"), this.isTreeData = this.gos.get("treeData"), this.initialised = !0;
    const e = (t) => this.callColumnCellValueChangedHandler(t);
    this.eventSvc.addEventListener("cellValueChanged", e, !0), this.addDestroyFunc(() => this.eventSvc.removeEventListener("cellValueChanged", e, !0)), this.addManagedPropertyListener("treeData", (t) => this.isTreeData = t.currentValue);
  }
  /**
   * Use this function to get a displayable cell value.
   * The values from this function are not used for sorting, filtering, or aggregation purposes.
   * Handles: groupHideOpenParents, showOpenedGroup and groupSuppressBlankHeader behaviours
   */
  getValueForDisplay(e, t, s = !1, n = !1) {
    const { showRowGroupColValueSvc: r } = this.beans, o = !e && t.group, i = e == null ? void 0 : e.colDef.showRowGroup, a = !this.isTreeData || t.footer;
    if (r && a && (o || i)) {
      const f = r.getGroupValue(t, e);
      if (f == null)
        return {
          value: null,
          valueFormatted: null
        };
      if (!s)
        return {
          value: f.value,
          valueFormatted: null
        };
      const C = r.formatAndPrefixGroupColValue(f, e, n);
      return {
        value: f.value,
        valueFormatted: C
      };
    }
    if (!e)
      return {
        value: t.key,
        valueFormatted: null
      };
    const l = t.leafGroup && this.colModel.isPivotMode(), c = t.group && t.expanded && !t.footer && !l, d = this.gos.get("groupSuppressBlankHeader") || !t.sibling, u = c && !d, h = this.getValue(e, t, u), g = s && !(n && e.colDef.useValueFormatterForExport === !1);
    return {
      value: h,
      valueFormatted: g ? this.formatValue(e, t, h) : null
    };
  }
  getValue(e, t, s = !1) {
    var f;
    if (this.initialised || this.init(), !t)
      return;
    const n = e.getColDef(), r = n.field, o = e.getColId(), i = t.data;
    let a;
    const l = n.showRowGroup;
    if (typeof l == "string" && (((f = this.beans.rowGroupColsSvc) == null ? void 0 : f.getColumnIndex(l)) ?? -1) > t.level)
      return null;
    const c = typeof l != "string" || !t.group, d = t.groupData && o in t.groupData, u = !s && t.aggData && t.aggData[o] !== void 0, h = this.isSsrm && s && !!e.getColDef().aggFunc, g = this.isSsrm && t.footer && t.field && (e.getColDef().showRowGroup === !0 || e.getColDef().showRowGroup === t.field);
    if (this.isTreeData && u)
      a = t.aggData[o];
    else if (this.isTreeData && n.valueGetter)
      a = this.executeValueGetter(n.valueGetter, i, e, t);
    else if (this.isTreeData && r && i)
      a = Es(i, r, e.isFieldContainsDots());
    else if (d)
      a = t.groupData[o];
    else if (u)
      a = t.aggData[o];
    else if (n.valueGetter) {
      if (!c)
        return a;
      a = this.executeValueGetter(n.valueGetter, i, e, t);
    } else if (g)
      a = Es(i, t.field, e.isFieldContainsDots());
    else if (r && i && !h) {
      if (!c)
        return a;
      a = Es(i, r, e.isFieldContainsDots());
    }
    if (this.cellExpressions && typeof a == "string" && a.indexOf("=") === 0) {
      const C = a.substring(1);
      a = this.executeValueGetter(C, i, e, t);
    }
    return a;
  }
  parseValue(e, t, s, n) {
    var i;
    const r = e.getColDef(), o = r.valueParser;
    if (te(o)) {
      const a = ge(this.gos, {
        node: t,
        data: t == null ? void 0 : t.data,
        oldValue: n,
        newValue: s,
        colDef: r,
        column: e
      });
      return typeof o == "function" ? o(a) : (i = this.expressionSvc) == null ? void 0 : i.evaluate(o, a);
    }
    return s;
  }
  getDeleteValue(e, t) {
    return te(e.getColDef().valueParser) ? this.parseValue(e, t, "", this.getValueForDisplay(e, t).value) ?? null : null;
  }
  formatValue(e, t, s, n, r = !0) {
    let o = null, i;
    const a = e.getColDef();
    if (n ? i = n : r && (i = a.valueFormatter), i) {
      const l = ge(this.gos, {
        value: s,
        node: t,
        data: t ? t.data : null,
        colDef: a,
        column: e
      });
      typeof i == "function" ? o = i(l) : o = this.expressionSvc ? this.expressionSvc.evaluate(i, l) : null;
    } else if (a.refData)
      return a.refData[s] || "";
    return o == null && Array.isArray(s) && (o = s.join(", ")), o;
  }
  /**
   * Sets the value of a GridCell
   * @param rowNode The `RowNode` to be updated
   * @param colKey The `Column` to be updated
   * @param newValue The new value to be set
   * @param eventSource The event source
   * @returns `True` if the value has been updated, otherwise`False`.
   */
  setValue(e, t, s, n) {
    var d, u;
    const r = this.colModel.getColDefCol(t);
    if (!e || !r)
      return !1;
    Ie(e.data) && (e.data = {});
    const { field: o, valueSetter: i } = r.getColDef();
    if (Ie(o) && Ie(i))
      return oe(17), !1;
    if (this.dataTypeSvc && !this.dataTypeSvc.checkType(r, s))
      return oe(135), !1;
    const a = ge(this.gos, {
      node: e,
      data: e.data,
      oldValue: this.getValue(r, e),
      newValue: s,
      colDef: r.getColDef(),
      column: r
    });
    a.newValue = s;
    let l;
    if (te(i) ? typeof i == "function" ? l = i(a) : l = (d = this.expressionSvc) == null ? void 0 : d.evaluate(i, a) : l = this.setValueUsingField(e.data, o, s, r.isFieldContainsDots()), l === void 0 && (l = !0), !l)
      return !1;
    e.resetQuickFilterAggregateText(), (u = this.valueCache) == null || u.onDataChanged();
    const c = this.getValue(r, e);
    return this.eventSvc.dispatchEvent({
      type: "cellValueChanged",
      event: null,
      rowIndex: e.rowIndex,
      rowPinned: e.rowPinned,
      column: a.column,
      colDef: a.colDef,
      data: e.data,
      node: e,
      oldValue: a.oldValue,
      newValue: c,
      value: c,
      source: n
    }), !0;
  }
  callColumnCellValueChangedHandler(e) {
    const t = e.colDef.onCellValueChanged;
    typeof t == "function" && this.beans.frameworkOverrides.wrapOutgoing(() => {
      t({
        node: e.node,
        data: e.data,
        oldValue: e.oldValue,
        newValue: e.newValue,
        colDef: e.colDef,
        column: e.column,
        api: e.api,
        context: e.context
      });
    });
  }
  setValueUsingField(e, t, s, n) {
    if (!t)
      return !1;
    let r = !1;
    if (!n)
      r = e[t] === s, r || (e[t] = s);
    else {
      const o = t.split(".");
      let i = e;
      for (; o.length > 0 && i; ) {
        const a = o.shift();
        o.length === 0 ? (r = i[a] === s, r || (i[a] = s)) : i = i[a];
      }
    }
    return !r;
  }
  executeValueGetterWithValueCache(e, t, s, n) {
    const r = s.getColId(), o = this.valueCache.getValue(n, r);
    if (o !== void 0)
      return o;
    const i = this.executeValueGetterWithoutValueCache(e, t, s, n);
    return this.valueCache.setValue(n, r, i), i;
  }
  executeValueGetterWithoutValueCache(e, t, s, n) {
    var i;
    const r = ge(this.gos, {
      data: t,
      node: n,
      column: s,
      colDef: s.getColDef(),
      getValue: this.getValueCallback.bind(this, n)
    });
    let o;
    return typeof e == "function" ? o = e(r) : o = (i = this.expressionSvc) == null ? void 0 : i.evaluate(e, r), o;
  }
  getValueCallback(e, t) {
    const s = this.colModel.getColDefCol(t);
    return s ? this.getValue(s, e) : null;
  }
  // used by row grouping and pivot, to get key for a row. col can be a pivot col or a row grouping col
  getKeyForNode(e, t) {
    const s = this.getValue(e, t), n = e.getColDef().keyCreator;
    let r = s;
    if (n) {
      const o = ge(this.gos, {
        value: s,
        colDef: e.getColDef(),
        column: e,
        node: t,
        data: t.data
      });
      r = n(o);
    }
    return typeof r == "string" || r == null || (r = String(r), r === "[object Object]" && oe(121)), r;
  }
}, Kp = {
  moduleName: "CommunityCore",
  version: be,
  beans: [
    Wf,
    hh,
    Dg,
    Oc,
    Ap,
    dg,
    Af,
    qf,
    Ic,
    wp,
    mp,
    Hp,
    Up,
    Gf,
    Lf,
    Bf,
    Eg,
    Np,
    yg,
    Sg
  ],
  icons: {
    // icon on select dropdowns (select cell editor, charts tool panels)
    selectOpen: "small-down",
    /** @deprecated v33 */
    smallDown: "small-down",
    /** @deprecated v33 */
    colorPicker: "color-picker",
    /** @deprecated v33 */
    smallUp: "small-up",
    /** @deprecated v33 */
    checkboxChecked: "small-up",
    /** @deprecated v33 */
    checkboxIndeterminate: "checkbox-indeterminate",
    /** @deprecated v33 */
    checkboxUnchecked: "checkbox-unchecked",
    /** @deprecated v33 */
    radioButtonOn: "radio-button-on",
    /** @deprecated v33 */
    radioButtonOff: "radio-button-off",
    /** @deprecated v33 */
    smallLeft: "small-left",
    /** @deprecated v33 */
    smallRight: "small-right"
  },
  apiFunctions: {
    getGridId: gh,
    destroy: fh,
    isDestroyed: ph,
    getGridOption: Ch,
    setGridOption: mh,
    updateGridOptions: na,
    isModuleRegistered: wh
  },
  dependsOn: [
    wg,
    Vh,
    Zh,
    Wp,
    sp,
    hg,
    np,
    Lp,
    jp,
    op,
    Cp,
    Sp,
    xp,
    ap,
    Fg,
    vg,
    $p
  ]
}, Yp = () => `No AG Grid modules are registered! It is recommended to start with all Community features via the AllCommunityModule:
                    
    import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
    
    ModuleRegistry.registerModules([ AllCommunityModule ]);
    `;
function Zp({
  moduleName: e,
  rowModelType: t
}) {
  return `To use the ${e}Module you must set the gridOption "rowModelType='${t}'"`;
}
var Rr = class xt {
  /**
   * @param providedOptions
   * @returns Shallow copy of the provided options with global options merged in.
   */
  static applyGlobalGridOptions(t) {
    if (!xt.gridOptions)
      return { ...t };
    let s = {};
    return Ue(s, xt.gridOptions, !0, !0), xt.mergeStrategy === "deep" ? Ue(s, t, !0, !0) : s = { ...s, ...t }, xt.gridOptions.context && (s.context = xt.gridOptions.context), t.context && (xt.mergeStrategy === "deep" && s.context && Ue(t.context, s.context, !0, !0), s.context = t.context), s;
  }
};
Rr.gridOptions = void 0;
Rr.mergeStrategy = "shallow";
var Sa = Rr;
function qp(e) {
  var t;
  return (t = Sa.gridOptions) == null ? void 0 : t[e];
}
var Xp = 1, Qp = class {
  create(e, t, s, n, r, o) {
    const i = Sa.applyGlobalGridOptions(t), a = i.gridId ?? String(Xp++), l = this.getRegisteredModules(r, a, i.rowModelType), c = this.createBeansList(i.rowModelType, l, a), d = this.createProvidedBeans(e, i, r);
    if (!c)
      return;
    const u = {
      providedBeanInstances: d,
      beanClasses: c,
      gridId: a,
      beanInitComparator: lh,
      beanDestroyComparator: ch,
      derivedBeans: [ih],
      destroyCallback: o
    }, h = new wd(u);
    return this.registerModuleFeatures(h, l), s(h), h.getBean("syncSvc").start(), n && n(h), h.getBean("gridApi");
  }
  getRegisteredModules(e, t, s) {
    var n;
    return Xn(Kp, void 0, !0), (n = e == null ? void 0 : e.modules) == null || n.forEach((r) => Xn(r, t)), hd(t, Do(s));
  }
  registerModuleFeatures(e, t) {
    const s = e.getBean("registry"), n = e.getBean("apiFunctionSvc");
    t.forEach((r) => {
      s.registerModule(r);
      const o = r.apiFunctions;
      o && Object.keys(o).forEach((a) => {
        n == null || n.addFunction(a, o[a]);
      });
    });
  }
  createProvidedBeans(e, t, s) {
    let n = s ? s.frameworkOverrides : null;
    Ie(n) && (n = new ta());
    const r = {
      gridOptions: t,
      eGridDiv: e,
      globalListener: s ? s.globalListener : null,
      globalSyncListener: s ? s.globalSyncListener : null,
      frameworkOverrides: n
    };
    return s && s.providedBeanInstances && Object.assign(r, s.providedBeanInstances), r;
  }
  createBeansList(e, t, s) {
    const n = {
      clientSide: "ClientSideRowModel",
      infinite: "InfiniteRowModel",
      serverSide: "ServerSideRowModel",
      viewport: "ViewportRowModel"
    }, r = Do(e), o = n[r];
    if (!o) {
      ss(201, { rowModelType: r }, `Unknown rowModelType ${r}.`);
      return;
    }
    if (!pd()) {
      ss(272, void 0, Yp());
      return;
    }
    if (!e) {
      const a = Object.entries(n).filter(
        ([l, c]) => Qn(c, s, l)
      );
      if (a.length == 1) {
        const [l, c] = a[0];
        if (l !== r) {
          const d = {
            moduleName: c,
            rowModelType: l
          };
          ss(275, d, Zp(d));
          return;
        }
      }
    }
    if (!Qn(o, s, r)) {
      ss(
        200,
        {
          reasonOrId: `rowModelType = '${r}'`,
          moduleName: o,
          gridScoped: Ai(),
          gridId: s,
          rowModelType: r
        },
        `Missing module ${o}Module for rowModelType ${r}.`
      );
      return;
    }
    const i = /* @__PURE__ */ new Set();
    return t.forEach((a) => {
      var l;
      return (l = a.beans) == null ? void 0 : l.forEach((c) => i.add(c));
    }), Array.from(i);
  }
};
function Do(e) {
  return e ?? "clientSide";
}
var Jp = class {
  wrap(e, t, s, n) {
    const r = this.createWrapper(e, n);
    return t == null || t.forEach((o) => {
      this.createMethod(r, o, !0);
    }), s == null || s.forEach((o) => {
      this.createMethod(r, o, !1);
    }), r;
  }
  createMethod(e, t, s) {
    e.addMethod(t, this.createMethodProxy(e, t, s));
  }
  createMethodProxy(e, t, s) {
    return function() {
      return e.hasMethod(t) ? e.callMethod(t, arguments) : (s && oe(49, { methodName: t }), null);
    };
  }
}, Ge = H.createContext({}), ms = (e, t, s, n) => {
  if (!e || e.componentFromFramework || t.isDestroyed())
    return;
  const o = e.newAgStackInstance();
  let i, a, l = !1;
  return o.then((c) => {
    if (l) {
      t.destroyBean(c);
      return;
    }
    i = c, a = i.getGui(), s.appendChild(a), Po(n, i);
  }), () => {
    var c;
    l = !0, i && ((c = a == null ? void 0 : a.parentElement) == null || c.removeChild(a), t.destroyBean(i), n && Po(n, void 0));
  };
}, Po = (e, t) => {
  if (e)
    if (e instanceof Function)
      e(t);
    else {
      const s = e;
      s.current = t;
    }
}, Ze = (...e) => e.filter((s) => s != null && s !== "").join(" "), qe = class Ra {
  constructor(...t) {
    this.classesMap = {}, t.forEach((s) => {
      this.classesMap[s] = !0;
    });
  }
  setClass(t, s) {
    if (!!this.classesMap[t] == s)
      return this;
    const r = new Ra();
    return r.classesMap = { ...this.classesMap }, r.classesMap[t] = s, r;
  }
  toString() {
    return Object.keys(this.classesMap).filter((s) => this.classesMap[s]).join(" ");
  }
}, Kt = (e) => {
  const t = () => typeof Symbol == "function" && Symbol.for, s = () => t() ? Symbol.for("react.memo") : 60115;
  return typeof e == "function" && !(e.prototype && e.prototype.isReactComponent) || typeof e == "object" && e.$$typeof === s();
}, Oo, rr = (Oo = H.version) == null ? void 0 : Oo.split(".")[0], eC = rr === "16" || rr === "17";
function tC() {
  return rr === "19";
}
var Os = !1;
function sC(e) {
  return Os || setTimeout(() => Os = !1, 0), Os = !0, e();
}
var us = (e, t) => {
  !eC && e && !Os ? sl.flushSync(t) : t();
};
function Js(e, t, s) {
  if (t == null || e == null)
    return t;
  if (e === t || t.length === 0 && e.length === 0)
    return e;
  if (s || e.length === 0 && t.length > 0 || e.length > 0 && t.length === 0)
    return t;
  const n = [], r = [], o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    i.set(l.instanceId, l);
  }
  for (let a = 0; a < e.length; a++) {
    const l = e[a];
    o.set(l.instanceId, l), i.has(l.instanceId) && n.push(l);
  }
  for (let a = 0; a < t.length; a++) {
    const l = t[a], c = l.instanceId;
    o.has(c) || r.push(l);
  }
  return n.length === e.length && r.length === 0 ? e : n.length === 0 && r.length === t.length ? t : n.length === 0 ? r : r.length === 0 ? n : [...n, ...r];
}
var xa = or((e, t) => {
  var A;
  const { registry: s, context: n } = Ne(Ge), r = k(null), o = k(null), i = k(null), a = k(null), l = k(null), c = k(), [d, u] = V(), [h, g] = V(), [f, C] = V(), [p, m] = V(() => new qe()), [v, b] = V(() => new qe("ag-hidden")), [y, F] = V(() => new qe("ag-hidden")), [S, P] = V(() => new qe("ag-invisible"));
  ir(t, () => ({
    // force new instance when grid tries to refresh
    refresh() {
      return !1;
    }
  })), lt(() => ms(d, n, o.current), [d]);
  const W = le((R) => {
    if (r.current = R, !R) {
      c.current = n.destroyBean(c.current);
      return;
    }
    const _ = {
      setInnerRenderer: ($, Z) => {
        u($), C(Z);
      },
      setChildCount: ($) => g($),
      toggleCss: ($, Z) => m((U) => U.setClass($, Z)),
      setContractedDisplayed: ($) => F((Z) => Z.setClass("ag-hidden", !$)),
      setExpandedDisplayed: ($) => b((Z) => Z.setClass("ag-hidden", !$)),
      setCheckboxVisible: ($) => P((Z) => Z.setClass("ag-invisible", !$)),
      setCheckboxSpacing: ($) => P((Z) => Z.setClass("ag-group-checkbox-spacing", $))
    }, B = s.createDynamicBean("groupCellRendererCtrl", !0);
    B && (c.current = n.createBean(B), c.current.init(
      _,
      R,
      i.current,
      a.current,
      l.current,
      xa,
      e
    ));
  }, []), O = X(() => `ag-cell-wrapper ${p.toString()}`, [p]), L = X(() => `ag-group-expanded ${v.toString()}`, [v]), D = X(
    () => `ag-group-contracted ${y.toString()}`,
    [y]
  ), G = X(() => `ag-group-checkbox ${S.toString()}`, [S]), T = d && d.componentFromFramework, I = T ? d.componentClass : void 0, x = d == null && f != null, E = sn(f);
  return /* @__PURE__ */ H.createElement(
    "span",
    {
      className: O,
      ref: W,
      ...e.colDef ? {} : { role: (A = c.current) == null ? void 0 : A.getCellAriaRole() }
    },
    /* @__PURE__ */ H.createElement("span", { className: L, ref: a }),
    /* @__PURE__ */ H.createElement("span", { className: D, ref: l }),
    /* @__PURE__ */ H.createElement("span", { className: G, ref: i }),
    /* @__PURE__ */ H.createElement("span", { className: "ag-group-value", ref: o }, x && /* @__PURE__ */ H.createElement(H.Fragment, null, E), T && /* @__PURE__ */ H.createElement(I, { ...d.params })),
    /* @__PURE__ */ H.createElement("span", { className: "ag-group-child-count" }, h)
  );
}), Eo = xa, xr = Ja({
  setMethods: () => {
  }
}), nC = (e) => {
  const { initialProps: t, addUpdateCallback: s, CustomComponentClass: n, setMethods: r } = e, [{ key: o, ...i }, a] = V(t);
  return Te(() => {
    s((l) => a(l));
  }, []), /* @__PURE__ */ H.createElement(xr.Provider, { value: { setMethods: r } }, /* @__PURE__ */ H.createElement(n, { key: o, ...i }));
}, rC = ze(nC), oC = 0;
function To() {
  return `agPortalKey_${++oC}`;
}
var Fa = class {
  constructor(e, t, s, n) {
    this.portal = null, this.oldPortal = null, this.reactComponent = e, this.portalManager = t, this.componentType = s, this.suppressFallbackMethods = !!n, this.statelessComponent = this.isStateless(this.reactComponent), this.key = To(), this.portalKey = To(), this.instanceCreated = this.isStatelessComponent() ? Xe.resolve(!1) : new Xe((r) => {
      this.resolveInstanceCreated = r;
    });
  }
  getGui() {
    return this.eParentElement;
  }
  /** `getGui()` returns the parent element. This returns the actual root element. */
  getRootElement() {
    return this.eParentElement.firstChild;
  }
  destroy() {
    this.componentInstance && typeof this.componentInstance.destroy == "function" && this.componentInstance.destroy();
    const e = this.portal;
    e && this.portalManager.destroyPortal(e);
  }
  createParentElement(e) {
    const t = this.portalManager.getComponentWrappingElement(), s = document.createElement(t || "div");
    return s.classList.add("ag-react-container"), e.reactContainer = s, s;
  }
  statelessComponentRendered() {
    return this.eParentElement.childElementCount > 0 || this.eParentElement.childNodes.length > 0;
  }
  getFrameworkComponentInstance() {
    return this.componentInstance;
  }
  isStatelessComponent() {
    return this.statelessComponent;
  }
  getReactComponentName() {
    return this.reactComponent.name;
  }
  getMemoType() {
    return this.hasSymbol() ? Symbol.for("react.memo") : 60115;
  }
  hasSymbol() {
    return typeof Symbol == "function" && Symbol.for;
  }
  isStateless(e) {
    return typeof e == "function" && !(e.prototype && e.prototype.isReactComponent) || typeof e == "object" && e.$$typeof === this.getMemoType();
  }
  hasMethod(e) {
    const t = this.getFrameworkComponentInstance();
    return !!t && t[e] != null || this.fallbackMethodAvailable(e);
  }
  callMethod(e, t) {
    const s = this.getFrameworkComponentInstance();
    if (this.isStatelessComponent())
      return this.fallbackMethod(e, t && t[0] ? t[0] : {});
    if (!s) {
      setTimeout(() => this.callMethod(e, t));
      return;
    }
    const n = s[e];
    if (n)
      return n.apply(s, t);
    if (this.fallbackMethodAvailable(e))
      return this.fallbackMethod(e, t && t[0] ? t[0] : {});
  }
  addMethod(e, t) {
    this[e] = t;
  }
  init(e) {
    return this.eParentElement = this.createParentElement(e), this.createOrUpdatePortal(e), new Xe((t) => this.createReactComponent(t));
  }
  createOrUpdatePortal(e) {
    this.isStatelessComponent() || (this.ref = (t) => {
      var s;
      this.componentInstance = t, (s = this.resolveInstanceCreated) == null || s.call(this, !0), this.resolveInstanceCreated = void 0;
    }, e.ref = this.ref), this.reactElement = this.createElement(this.reactComponent, { ...e, key: this.key }), this.portal = hs(
      this.reactElement,
      this.eParentElement,
      this.portalKey
      // fixed deltaRowModeRefreshCompRenderer
    );
  }
  createElement(e, t) {
    return el(e, t);
  }
  createReactComponent(e) {
    this.portalManager.mountReactPortal(this.portal, this, e);
  }
  rendered() {
    return this.isStatelessComponent() && this.statelessComponentRendered() || !!(!this.isStatelessComponent() && this.getFrameworkComponentInstance());
  }
  /*
   * fallback methods - these will be invoked if a corresponding instance method is not present
   * for example if refresh is called and is not available on the component instance, then refreshComponent on this
   * class will be invoked instead
   *
   * Currently only refresh is supported
   */
  refreshComponent(e) {
    this.oldPortal = this.portal, this.createOrUpdatePortal(e), this.portalManager.updateReactPortal(this.oldPortal, this.portal);
  }
  fallbackMethod(e, t) {
    const s = this[`${e}Component`];
    if (!this.suppressFallbackMethods && s)
      return s.bind(this)(t);
  }
  fallbackMethodAvailable(e) {
    return this.suppressFallbackMethods ? !1 : !!this[`${e}Component`];
  }
};
function Fr(e, t, s) {
  e.forEach((n) => {
    const r = t[n];
    r && (s[n] = r);
  });
}
var Je = class extends Fa {
  constructor() {
    super(...arguments), this.awaitUpdateCallback = new Xe((e) => {
      this.resolveUpdateCallback = e;
    }), this.wrapperComponent = rC;
  }
  init(e) {
    return this.sourceParams = e, super.init(this.getProps());
  }
  addMethod() {
  }
  getInstance() {
    return this.instanceCreated.then(() => this.componentInstance);
  }
  getFrameworkComponentInstance() {
    return this;
  }
  createElement(e, t) {
    return super.createElement(this.wrapperComponent, {
      initialProps: t,
      CustomComponentClass: e,
      setMethods: (s) => this.setMethods(s),
      addUpdateCallback: (s) => {
        this.updateCallback = () => (s(this.getProps()), new Xe((n) => {
          setTimeout(() => {
            n();
          });
        })), this.resolveUpdateCallback();
      }
    });
  }
  setMethods(e) {
    this.providedMethods = e, Fr(this.getOptionalMethods(), this.providedMethods, this);
  }
  getOptionalMethods() {
    return [];
  }
  getProps() {
    return {
      ...this.sourceParams,
      key: this.key,
      ref: this.ref
    };
  }
  refreshProps() {
    return this.updateCallback ? this.updateCallback() : new Xe(
      (e) => this.awaitUpdateCallback.then(() => {
        this.updateCallback().then(() => e());
      })
    );
  }
}, iC = class extends Je {
  refresh(e) {
    return this.sourceParams = e, this.refreshProps(), !0;
  }
}, aC = class extends Je {
  constructor() {
    super(...arguments), this.date = null, this.onDateChange = (e) => this.updateDate(e);
  }
  getDate() {
    return this.date;
  }
  setDate(e) {
    this.date = e, this.refreshProps();
  }
  refresh(e) {
    this.sourceParams = e, this.refreshProps();
  }
  getOptionalMethods() {
    return ["afterGuiAttached", "setInputPlaceholder", "setInputAriaLabel", "setDisabled"];
  }
  updateDate(e) {
    this.setDate(e), this.sourceParams.onDateChanged();
  }
  getProps() {
    const e = super.getProps();
    return e.date = this.date, e.onDateChange = this.onDateChange, delete e.onDateChanged, e;
  }
}, lC = class extends Je {
  constructor() {
    super(...arguments), this.label = "", this.icon = null, this.shake = !1;
  }
  setIcon(e, t) {
    this.icon = e, this.shake = t, this.refreshProps();
  }
  setLabel(e) {
    this.label = e, this.refreshProps();
  }
  getProps() {
    const e = super.getProps(), { label: t, icon: s, shake: n } = this;
    return e.label = t, e.icon = s, e.shake = n, e;
  }
}, cC = class extends Je {
  constructor() {
    super(...arguments), this.model = null, this.onModelChange = (e) => this.updateModel(e), this.onUiChange = () => this.sourceParams.filterModifiedCallback(), this.expectingNewMethods = !0, this.hasBeenActive = !1, this.awaitSetMethodsCallback = new Xe((e) => {
      this.resolveSetMethodsCallback = e;
    });
  }
  isFilterActive() {
    return this.model != null;
  }
  doesFilterPass(e) {
    return this.providedMethods.doesFilterPass(e);
  }
  getModel() {
    return this.model;
  }
  setModel(e) {
    return this.expectingNewMethods = !0, this.model = e, this.hasBeenActive || (this.hasBeenActive = this.isFilterActive()), this.refreshProps();
  }
  refresh(e) {
    return this.sourceParams = e, this.refreshProps(), !0;
  }
  afterGuiAttached(e) {
    var s;
    const t = this.providedMethods;
    t ? (s = t.afterGuiAttached) == null || s.call(t, e) : this.awaitSetMethodsCallback.then(() => {
      var n, r;
      return (r = (n = this.providedMethods) == null ? void 0 : n.afterGuiAttached) == null ? void 0 : r.call(n, e);
    });
  }
  getOptionalMethods() {
    return ["afterGuiAttached", "afterGuiDetached", "onNewRowsLoaded", "getModelAsString", "onAnyFilterChanged"];
  }
  setMethods(e) {
    var t;
    this.expectingNewMethods === !1 && this.hasBeenActive && ((t = this.providedMethods) == null ? void 0 : t.doesFilterPass) !== (e == null ? void 0 : e.doesFilterPass) && setTimeout(() => {
      this.sourceParams.filterChangedCallback();
    }), this.expectingNewMethods = !1, super.setMethods(e), this.resolveSetMethodsCallback();
  }
  updateModel(e) {
    this.setModel(e).then(() => this.sourceParams.filterChangedCallback());
  }
  getProps() {
    const e = super.getProps();
    return e.model = this.model, e.onModelChange = this.onModelChange, e.onUiChange = this.onUiChange, delete e.filterChangedCallback, delete e.filterModifiedCallback, e;
  }
};
function Da(e, t) {
  e.parentFilterInstance((s) => {
    (s.setModel(t) || Xe.resolve()).then(() => {
      e.filterParams.filterChangedCallback();
    });
  });
}
var dC = class {
  constructor(e, t) {
    this.floatingFilterParams = e, this.refreshProps = t, this.model = null, this.onModelChange = (s) => this.updateModel(s);
  }
  getProps() {
    return {
      ...this.floatingFilterParams,
      model: this.model,
      onModelChange: this.onModelChange
    };
  }
  onParentModelChanged(e) {
    this.model = e, this.refreshProps();
  }
  refresh(e) {
    this.floatingFilterParams = e, this.refreshProps();
  }
  setMethods(e) {
    Fr(this.getOptionalMethods(), e, this);
  }
  getOptionalMethods() {
    return ["afterGuiAttached"];
  }
  updateModel(e) {
    this.model = e, this.refreshProps(), Da(this.floatingFilterParams, e);
  }
}, uC = class extends Je {
  constructor() {
    super(...arguments), this.model = null, this.onModelChange = (e) => this.updateModel(e);
  }
  onParentModelChanged(e) {
    this.model = e, this.refreshProps();
  }
  refresh(e) {
    this.sourceParams = e, this.refreshProps();
  }
  getOptionalMethods() {
    return ["afterGuiAttached"];
  }
  updateModel(e) {
    this.model = e, this.refreshProps(), Da(this.sourceParams, e);
  }
  getProps() {
    const e = super.getProps();
    return e.model = this.model, e.onModelChange = this.onModelChange, e;
  }
}, hC = class extends Je {
  refresh(e) {
    return this.sourceParams = e, this.refreshProps(), !0;
  }
}, gC = class extends Je {
  refresh(e) {
    this.sourceParams = e, this.refreshProps();
  }
}, fC = class extends Je {
  constructor() {
    super(...arguments), this.active = !1, this.expanded = !1, this.onActiveChange = (e) => this.updateActive(e);
  }
  setActive(e) {
    this.awaitSetActive(e);
  }
  setExpanded(e) {
    this.expanded = e, this.refreshProps();
  }
  getOptionalMethods() {
    return ["select", "configureDefaults"];
  }
  awaitSetActive(e) {
    return this.active = e, this.refreshProps();
  }
  updateActive(e) {
    const t = this.awaitSetActive(e);
    e && t.then(() => this.sourceParams.onItemActivated());
  }
  getProps() {
    const e = super.getProps();
    return e.active = this.active, e.expanded = this.expanded, e.onActiveChange = this.onActiveChange, delete e.onItemActivated, e;
  }
}, pC = class extends Je {
  refresh(e) {
    this.sourceParams = e, this.refreshProps();
  }
}, CC = class extends Je {
  refresh(e) {
    return this.sourceParams = e, this.refreshProps(), !0;
  }
}, mC = class extends Je {
  constructor() {
    super(...arguments), this.onStateChange = (e) => this.updateState(e);
  }
  refresh(e) {
    return this.sourceParams = e, this.refreshProps(), !0;
  }
  getState() {
    return this.state;
  }
  updateState(e) {
    this.state = e, this.refreshProps(), this.sourceParams.onStateUpdated();
  }
  getProps() {
    const e = super.getProps();
    return e.state = this.state, e.onStateChange = this.onStateChange, e;
  }
};
function Dr() {
  oe(231);
}
var wC = 1e3, vC = class {
  constructor(e, t, s) {
    this.destroyed = !1, this.portals = [], this.hasPendingPortalUpdate = !1, this.wrappingElement = t || "div", this.refresher = e, this.maxComponentCreationTimeMs = s || wC;
  }
  getPortals() {
    return this.portals;
  }
  destroy() {
    this.destroyed = !0;
  }
  destroyPortal(e) {
    this.portals = this.portals.filter((t) => t !== e), this.batchUpdate();
  }
  getComponentWrappingElement() {
    return this.wrappingElement;
  }
  mountReactPortal(e, t, s) {
    this.portals = [...this.portals, e], this.waitForInstance(t, s), this.batchUpdate();
  }
  updateReactPortal(e, t) {
    this.portals[this.portals.indexOf(e)] = t, this.batchUpdate();
  }
  batchUpdate() {
    this.hasPendingPortalUpdate || (setTimeout(() => {
      this.destroyed || (this.refresher(), this.hasPendingPortalUpdate = !1);
    }), this.hasPendingPortalUpdate = !0);
  }
  waitForInstance(e, t, s = Date.now()) {
    if (this.destroyed) {
      t(null);
      return;
    }
    if (e.rendered())
      t(e);
    else {
      if (Date.now() - s >= this.maxComponentCreationTimeMs && !this.hasPendingPortalUpdate) {
        us(!0, () => this.refresher()), e.rendered() && t(e);
        return;
      }
      window.setTimeout(() => {
        this.waitForInstance(e, t, s);
      });
    }
  }
}, bC = ({ ctrl: e }) => {
  const t = e.isAlive(), { context: s } = Ne(Ge), n = t ? e.column.getColId() : void 0, [r, o] = V(), [i, a] = V(), l = k(), c = k(null), d = k(null), u = k(null), h = k(), g = k();
  t && !g.current && (g.current = new ps(() => c.current));
  const f = le((v) => {
    var F;
    if (c.current = v, l.current = v ? s.createBean(new Ut()) : s.destroyBean(l.current), !v || !e.isAlive())
      return;
    const b = {
      setWidth: (S) => {
        c.current && (c.current.style.width = S);
      },
      toggleCss: (S, P) => g.current.toggleCss(S, P),
      setUserStyles: (S) => a(S),
      setAriaSort: (S) => {
        c.current && (S ? Cl(c.current, S) : ml(c.current));
      },
      setUserCompDetails: (S) => o(S),
      getUserCompInstance: () => h.current || void 0
    };
    e.setComp(b, v, d.current, u.current, l.current);
    const y = e.getSelectAllGui();
    y && ((F = d.current) == null || F.insertAdjacentElement("afterend", y), l.current.addDestroyFunc(() => y.remove()));
  }, []);
  lt(
    () => ms(r, s, u.current, h),
    [r]
  ), Te(() => {
    e.setDragSource(c.current);
  }, [r]);
  const C = X(() => !!((r == null ? void 0 : r.componentFromFramework) && Kt(r.componentClass)), [r]), p = r && r.componentFromFramework, m = r && r.componentClass;
  return /* @__PURE__ */ H.createElement("div", { ref: f, style: i, className: "ag-header-cell", "col-id": n, role: "columnheader" }, /* @__PURE__ */ H.createElement("div", { ref: d, className: "ag-header-cell-resize", role: "presentation" }), /* @__PURE__ */ H.createElement("div", { ref: u, className: "ag-header-cell-comp-wrapper", role: "presentation" }, p && C && /* @__PURE__ */ H.createElement(m, { ...r.params }), p && !C && /* @__PURE__ */ H.createElement(m, { ...r.params, ref: h })));
}, yC = ze(bC), SC = ({ ctrl: e }) => {
  const { context: t, gos: s } = Ne(Ge), [n, r] = V(), [o, i] = V(
    () => new qe("ag-header-cell", "ag-floating-filter")
  ), [a, l] = V(() => new qe()), [c, d] = V(
    () => new qe("ag-floating-filter-button", "ag-hidden")
  ), [u, h] = V("false"), [g, f] = V(), [, C] = V(1), p = k(), m = k(null), v = k(null), b = k(null), y = k(null), F = k(), S = k(), P = (R) => {
    R != null && F.current && F.current(R);
  }, W = le((R) => {
    if (m.current = R, p.current = R ? t.createBean(new Ut()) : t.destroyBean(p.current), !R)
      return;
    S.current = new Xe((B) => {
      F.current = B;
    });
    const _ = {
      toggleCss: (B, $) => i((Z) => Z.setClass(B, $)),
      setUserStyles: (B) => r(B),
      addOrRemoveBodyCssClass: (B, $) => l((Z) => Z.setClass(B, $)),
      setButtonWrapperDisplayed: (B) => {
        d(($) => $.setClass("ag-hidden", !B)), h(B ? "false" : "true");
      },
      setWidth: (B) => {
        m.current && (m.current.style.width = B);
      },
      setCompDetails: (B) => f(B),
      getFloatingFilterComp: () => S.current ? S.current : null,
      setMenuIcon: (B) => {
        var $;
        return ($ = y.current) == null ? void 0 : $.appendChild(B);
      }
    };
    e.setComp(_, R, y.current, v.current, p.current);
  }, []);
  lt(
    () => ms(g, t, v.current, P),
    [g]
  );
  const O = X(() => o.toString(), [o]), L = X(() => a.toString(), [a]), D = X(() => c.toString(), [c]), G = X(() => !!(g && g.componentFromFramework && Kt(g.componentClass)), [g]), T = X(() => s.get("reactiveCustomComponents"), []), I = X(() => {
    if (g)
      if (T) {
        const R = new dC(
          g.params,
          () => C((_) => _ + 1)
        );
        return P(R), R;
      } else g.componentFromFramework && Dr();
  }, [g]), x = I == null ? void 0 : I.getProps(), E = g && g.componentFromFramework, A = g && g.componentClass;
  return /* @__PURE__ */ H.createElement("div", { ref: W, style: n, className: O, role: "gridcell" }, /* @__PURE__ */ H.createElement("div", { ref: v, className: L, role: "presentation" }, E && !T && /* @__PURE__ */ H.createElement(A, { ...g.params, ref: G ? () => {
  } : P }), E && T && /* @__PURE__ */ H.createElement(
    xr.Provider,
    {
      value: {
        setMethods: (R) => I.setMethods(R)
      }
    },
    /* @__PURE__ */ H.createElement(A, { ...x })
  )), /* @__PURE__ */ H.createElement(
    "div",
    {
      ref: b,
      "aria-hidden": u,
      className: D,
      role: "presentation"
    },
    /* @__PURE__ */ H.createElement(
      "button",
      {
        ref: y,
        type: "button",
        className: "ag-button ag-floating-filter-button-button",
        tabIndex: -1
      }
    )
  ));
}, RC = ze(SC), xC = ({ ctrl: e }) => {
  const { context: t } = Ne(Ge), [s, n] = V(), [r, o] = V(() => new qe()), [i, a] = V(() => new qe()), [l, c] = V("false"), [d, u] = V(), [h, g] = V(), f = X(() => e.column.getUniqueId(), []), C = k(), p = k(null), m = k(null), v = k(null), b = k(), y = le((L) => {
    if (p.current = L, C.current = L ? t.createBean(new Ut()) : t.destroyBean(C.current), !L)
      return;
    const D = {
      setWidth: (G) => {
        p.current && (p.current.style.width = G);
      },
      toggleCss: (G, T) => o((I) => I.setClass(G, T)),
      setUserStyles: (G) => n(G),
      setHeaderWrapperHidden: (G) => {
        const T = v.current;
        T && (G ? T.style.setProperty("display", "none") : T.style.removeProperty("display"));
      },
      setHeaderWrapperMaxHeight: (G) => {
        const T = v.current;
        T && (G != null ? T.style.setProperty("max-height", `${G}px`) : T.style.removeProperty("max-height"), T.classList.toggle("ag-header-cell-comp-wrapper-limited-height", G != null));
      },
      setUserCompDetails: (G) => g(G),
      setResizableDisplayed: (G) => {
        a((T) => T.setClass("ag-hidden", !G)), c(G ? "false" : "true");
      },
      setAriaExpanded: (G) => u(G),
      getUserCompInstance: () => b.current || void 0
    };
    e.setComp(D, L, m.current, v.current, C.current);
  }, []);
  lt(() => ms(h, t, v.current), [h]), Te(() => {
    p.current && e.setDragSource(p.current);
  }, [h]);
  const F = X(() => !!((h == null ? void 0 : h.componentFromFramework) && Kt(h.componentClass)), [h]), S = X(() => "ag-header-group-cell " + r.toString(), [r]), P = X(
    () => "ag-header-cell-resize " + i.toString(),
    [i]
  ), W = h && h.componentFromFramework, O = h && h.componentClass;
  return /* @__PURE__ */ H.createElement(
    "div",
    {
      ref: y,
      style: s,
      className: S,
      "col-id": f,
      role: "columnheader",
      "aria-expanded": d
    },
    /* @__PURE__ */ H.createElement("div", { ref: v, className: "ag-header-cell-comp-wrapper", role: "presentation" }, W && F && /* @__PURE__ */ H.createElement(O, { ...h.params }), W && !F && /* @__PURE__ */ H.createElement(O, { ...h.params, ref: b })),
    /* @__PURE__ */ H.createElement("div", { ref: m, "aria-hidden": l, className: P })
  );
}, FC = ze(xC), DC = ({ ctrl: e }) => {
  const { context: t } = Ne(Ge), { topOffset: s, rowHeight: n } = X(() => e.getTopAndHeight(), []), r = e.getAriaRowIndex(), o = e.headerRowClass, [i, a] = V(() => n + "px"), [l, c] = V(() => s + "px"), d = k(null), u = k(null), [h, g] = V(() => e.getUpdatedHeaderCtrls()), f = k(), C = k(null), p = le((b) => {
    if (C.current = b, f.current = b ? t.createBean(new Ut()) : t.destroyBean(f.current), !b)
      return;
    const y = {
      setHeight: (F) => a(F),
      setTop: (F) => c(F),
      setHeaderCtrls: (F, S, P) => {
        u.current = d.current, d.current = F;
        const W = Js(u.current, F, S);
        W !== u.current && us(P, () => g(W));
      },
      setWidth: (F) => {
        C.current && (C.current.style.width = F);
      }
    };
    e.setComp(y, f.current, !1);
  }, []), m = X(
    () => ({
      height: i,
      top: l
    }),
    [i, l]
  ), v = le((b) => {
    switch (e.type) {
      case "group":
        return /* @__PURE__ */ H.createElement(FC, { ctrl: b, key: b.instanceId });
      case "filter":
        return /* @__PURE__ */ H.createElement(RC, { ctrl: b, key: b.instanceId });
      default:
        return /* @__PURE__ */ H.createElement(yC, { ctrl: b, key: b.instanceId });
    }
  }, []);
  return /* @__PURE__ */ H.createElement("div", { ref: p, className: o, role: "row", style: m, "aria-rowindex": r }, h.map(v));
}, PC = ze(DC), EC = ({ pinned: e }) => {
  const [t, s] = V(!0), [n, r] = V([]), { context: o } = Ne(Ge), i = k(null), a = k(null), l = k(), c = e === "left", d = e === "right", u = !c && !d, h = le((C) => {
    if (i.current = C, l.current = C ? o.createBean(new Nu(e)) : o.destroyBean(l.current), !C)
      return;
    const p = {
      setDisplayed: s,
      setCtrls: (m) => r(m),
      // centre only
      setCenterWidth: (m) => {
        a.current && (a.current.style.width = m);
      },
      setViewportScrollLeft: (m) => {
        i.current && (i.current.scrollLeft = m);
      },
      // pinned only
      setPinnedContainerWidth: (m) => {
        i.current && (i.current.style.width = m, i.current.style.minWidth = m, i.current.style.maxWidth = m);
      }
    };
    l.current.setComp(p, i.current);
  }, []), g = t ? "" : "ag-hidden", f = () => n.map((C) => /* @__PURE__ */ H.createElement(PC, { ctrl: C, key: C.instanceId }));
  return /* @__PURE__ */ H.createElement(H.Fragment, null, c && /* @__PURE__ */ H.createElement(
    "div",
    {
      ref: h,
      className: "ag-pinned-left-header " + g,
      "aria-hidden": !t,
      role: "rowgroup"
    },
    f()
  ), d && /* @__PURE__ */ H.createElement(
    "div",
    {
      ref: h,
      className: "ag-pinned-right-header " + g,
      "aria-hidden": !t,
      role: "rowgroup"
    },
    f()
  ), u && /* @__PURE__ */ H.createElement("div", { ref: h, className: "ag-header-viewport " + g, role: "presentation", tabIndex: -1 }, /* @__PURE__ */ H.createElement("div", { ref: a, className: "ag-header-container", role: "rowgroup" }, f())));
}, Vn = ze(EC), TC = () => {
  const [e, t] = V(() => new qe()), [s, n] = V(), { context: r } = Ne(Ge), o = k(null), i = k(), a = le((d) => {
    if (o.current = d, i.current = d ? r.createBean(new Ou()) : r.destroyBean(i.current), !d)
      return;
    const u = {
      toggleCss: (h, g) => t((f) => f.setClass(h, g)),
      setHeightAndMinHeight: (h) => n(h)
    };
    i.current.setComp(u, d, d);
  }, []), l = X(() => "ag-header " + e.toString(), [e]), c = X(
    () => ({
      height: s,
      minHeight: s
    }),
    [s]
  );
  return /* @__PURE__ */ H.createElement("div", { ref: a, className: l, style: c, role: "presentation" }, /* @__PURE__ */ H.createElement(Vn, { pinned: "left" }), /* @__PURE__ */ H.createElement(Vn, { pinned: null }), /* @__PURE__ */ H.createElement(Vn, { pinned: "right" }));
}, MC = ze(TC), IC = (e, t) => {
  Te(() => {
    const s = t.current;
    if (s) {
      const n = s.parentElement;
      if (n) {
        const r = document.createComment(e);
        return n.insertBefore(r, s), () => {
          n.removeChild(r);
        };
      }
    }
  }, [e]);
}, Ft = IC, LC = class {
  constructor(e, t) {
    this.cellEditorParams = e, this.refreshProps = t, this.instanceCreated = new Xe((s) => {
      this.resolveInstanceCreated = s;
    }), this.onValueChange = (s) => this.updateValue(s), this.value = e.value;
  }
  getProps() {
    return {
      ...this.cellEditorParams,
      initialValue: this.cellEditorParams.value,
      value: this.value,
      onValueChange: this.onValueChange
    };
  }
  getValue() {
    return this.value;
  }
  refresh(e) {
    this.cellEditorParams = e, this.refreshProps();
  }
  setMethods(e) {
    Fr(this.getOptionalMethods(), e, this);
  }
  getInstance() {
    return this.instanceCreated.then(() => this.componentInstance);
  }
  setRef(e) {
    var t;
    this.componentInstance = e, (t = this.resolveInstanceCreated) == null || t.call(this), this.resolveInstanceCreated = void 0;
  }
  getOptionalMethods() {
    return ["isCancelBeforeStart", "isCancelAfterEnd", "focusIn", "focusOut", "afterGuiAttached"];
  }
  updateValue(e) {
    this.value = e, this.refreshProps();
  }
}, AC = (e) => {
  const t = k(e), s = k(), n = k(!1), r = k(!1), [, o] = V(0);
  n.current && (r.current = !0), Te(() => (n.current || (s.current = t.current(), n.current = !0), o((i) => i + 1), () => {
    var i;
    r.current && ((i = s.current) == null || i.call(s));
  }), []);
}, kC = (e) => {
  const [t, s] = V(), n = Ne(Ge), { context: r, popupSvc: o, localeSvc: i, gos: a, editSvc: l } = n, { editDetails: c, cellCtrl: d, eParentCell: u } = e;
  return AC(() => {
    var P, W;
    const { compDetails: h } = c, g = a.get("stopEditingWhenCellsLoseFocus"), f = r.createBean(l.createPopupEditorWrapper(h.params)), C = f.getGui();
    if (e.jsChildComp) {
      const O = e.jsChildComp.getGui();
      O && C.appendChild(O);
    }
    const { column: p, rowNode: m } = d, v = {
      column: p,
      rowNode: m,
      type: "popupCellEditor",
      eventSource: u,
      ePopup: C,
      position: c.popupPosition,
      keepWithinBounds: !0
    }, b = o == null ? void 0 : o.positionPopupByComponent.bind(o, v), y = Go(i), F = o == null ? void 0 : o.addPopup({
      modal: g,
      eChild: C,
      closeOnEsc: !0,
      closedCallback: () => {
        d.onPopupEditorClosed();
      },
      anchorToElement: u,
      positionCallback: b,
      ariaLabel: y("ariaLabelCellEditor", "Cell Editor")
    }), S = F ? F.hideFunc : void 0;
    return s(f), (W = (P = e.jsChildComp) == null ? void 0 : P.afterGuiAttached) == null || W.call(P), () => {
      S == null || S(), r.destroyBean(f);
    };
  }), lt(() => () => {
    d.isCellFocused() && (t != null && t.getGui().contains(Oe(n))) && u.focus({ preventScroll: !0 });
  }, [t]), /* @__PURE__ */ H.createElement(H.Fragment, null, t && e.wrappedContent && hs(e.wrappedContent, t.getGui()));
}, Mo = ze(kC), HC = (e, t, s, n, r, o) => {
  const { context: i } = Ne(Ge), a = le(() => {
    const l = r.current;
    if (!l)
      return;
    const c = l.getGui();
    c && c.parentElement && c.parentElement.removeChild(c), i.destroyBean(l), r.current = void 0;
  }, []);
  Te(() => {
    const l = e != null, c = (e == null ? void 0 : e.compDetails) && !e.compDetails.componentFromFramework, d = t && s == null;
    if (!(l && c && !d)) {
      a();
      return;
    }
    const h = e.compDetails;
    if (r.current) {
      const f = r.current, p = f.refresh != null && e.force == !1 ? f.refresh(h.params) : !1;
      if (p === !0 || p === void 0)
        return;
      a();
    }
    h.newAgStackInstance().then((f) => {
      if (!f)
        return;
      const C = f.getGui();
      if (!C)
        return;
      (t ? s : o.current).appendChild(C), r.current = f;
    });
  }, [e, t, n]), Te(() => a, []);
}, OC = HC, GC = (e, t, s) => {
  const { compProxy: n } = e;
  s(n);
  const r = n.getProps(), o = Kt(t);
  return /* @__PURE__ */ H.createElement(
    xr.Provider,
    {
      value: {
        setMethods: (i) => n.setMethods(i)
      }
    },
    o ? /* @__PURE__ */ H.createElement(t, { ...r }) : /* @__PURE__ */ H.createElement(t, { ...r, ref: (i) => n.setRef(i) })
  );
}, Io = (e, t, s) => {
  const n = e.compProxy;
  return /* @__PURE__ */ H.createElement(H.Fragment, null, n ? GC(e, t, s) : /* @__PURE__ */ H.createElement(t, { ...e.compDetails.params, ref: s }));
}, BC = (e, t, s, n, r) => {
  const o = e.compDetails, i = o.componentClass, a = o.componentFromFramework && !e.popup, l = o.componentFromFramework && e.popup, c = !o.componentFromFramework && e.popup;
  return /* @__PURE__ */ H.createElement(H.Fragment, null, a && Io(e, i, t), l && /* @__PURE__ */ H.createElement(
    Mo,
    {
      editDetails: e,
      cellCtrl: n,
      eParentCell: s,
      wrappedContent: Io(e, i, t)
    }
  ), c && r && /* @__PURE__ */ H.createElement(
    Mo,
    {
      editDetails: e,
      cellCtrl: n,
      eParentCell: s,
      jsChildComp: r
    }
  ));
}, WC = (e, t, s, n, r, o, i) => {
  const { compDetails: a, value: l } = e, c = !a, d = a && a.componentFromFramework, u = a && a.componentClass, h = l != null && l.toString ? l.toString() : l, g = () => /* @__PURE__ */ H.createElement(H.Fragment, null, c && /* @__PURE__ */ H.createElement(H.Fragment, null, h), d && !o && /* @__PURE__ */ H.createElement(u, { ...a.params, key: t, ref: n }), d && o && /* @__PURE__ */ H.createElement(u, { ...a.params, key: t }));
  return /* @__PURE__ */ H.createElement(H.Fragment, null, r ? /* @__PURE__ */ H.createElement("span", { role: "presentation", id: `cell-${s}`, className: "ag-cell-value", ref: i }, g()) : g());
}, NC = ({
  cellCtrl: e,
  printLayout: t,
  editingRow: s
}) => {
  const n = Ne(Ge), { context: r } = n, {
    column: { colIdSanitised: o },
    instanceId: i
  } = e, a = k(), [l, c] = V(
    () => e.isCellRenderer() ? void 0 : { compDetails: void 0, value: e.getValueToDisplay(), force: !1 }
  ), [d, u] = V(), [h, g] = V(1), [f, C] = V(), [p, m] = V(!1), [v, b] = V(!1), [y, F] = V(!1), [S, P] = V(), W = X(() => e.isForceWrapper(), [e]), O = X(() => e.getCellAriaRole(), [e]), L = k(null), D = k(null), G = k(null), T = k(), I = k(), x = k(), E = k([]), A = k(), [R, _] = V(0), B = le((ae) => {
    A.current = ae, _((he) => he + 1);
  }, []), $ = l != null && (p || y || v), Z = W || $, U = le(
    (ae) => {
      if (I.current = ae, ae) {
        const he = ae.isCancelBeforeStart && ae.isCancelBeforeStart();
        setTimeout(() => {
          he ? (e.stopEditing(!0), e.focusCell(!0)) : e.cellEditorAttached();
        });
      }
    },
    [e]
  ), z = k();
  z.current || (z.current = new ps(() => L.current)), OC(l, Z, A.current, R, T, L);
  const q = k();
  lt(() => {
    var me;
    const ae = q.current, he = l;
    if (q.current = l, ae == null || ae.compDetails == null || he == null || he.compDetails == null)
      return;
    const fe = ae.compDetails, Re = he.compDetails;
    if (fe.componentClass != Re.componentClass || ((me = G.current) == null ? void 0 : me.refresh) == null)
      return;
    G.current.refresh(Re.params) != !0 && g((ve) => ve + 1);
  }, [l]), lt(() => {
    if (!(d && !d.compDetails.componentFromFramework))
      return;
    const he = d.compDetails, fe = d.popup === !0, Re = he.newAgStackInstance();
    return Re.then((re) => {
      if (!re)
        return;
      const me = re.getGui();
      if (U(re), !fe) {
        const ve = (W ? x : L).current;
        ve == null || ve.appendChild(me), re.afterGuiAttached && re.afterGuiAttached();
      }
      P(re);
    }), () => {
      Re.then((re) => {
        var ve;
        const me = re.getGui();
        r.destroyBean(re), U(void 0), P(void 0), (ve = me == null ? void 0 : me.parentElement) == null || ve.removeChild(me);
      });
    };
  }, [d]);
  const Q = le(
    (ae) => {
      if (x.current = ae, !ae) {
        E.current.forEach((fe) => fe()), E.current = [];
        return;
      }
      const he = (fe) => {
        if (fe) {
          const Re = fe.getGui();
          ae.insertAdjacentElement("afterbegin", Re), E.current.push(() => {
            r.destroyBean(fe), jn(Re);
          });
        }
        return fe;
      };
      if (p) {
        const fe = e.createSelectionCheckbox();
        he(fe);
      }
      y && he(e.createDndSource()), v && he(e.createRowDragComp());
    },
    [e, r, y, v, p]
  ), se = le(() => {
    const ae = !e.isCellSpanning() || D.current, he = L.current;
    if (a.current = he ? r.createBean(new Ut()) : r.destroyBean(a.current), !he || !ae || !e)
      return;
    const fe = {
      toggleCss: (re, me) => z.current.toggleCss(re, me),
      setUserStyles: (re) => C(re),
      getFocusableElement: () => L.current,
      setIncludeSelection: (re) => m(re),
      setIncludeRowDrag: (re) => b(re),
      setIncludeDndSource: (re) => F(re),
      getCellEditor: () => I.current || null,
      getCellRenderer: () => G.current ?? T.current,
      getParentOfValue: () => A.current ?? x.current ?? L.current,
      setRenderDetails: (re, me, ve) => {
        c((De) => (De == null ? void 0 : De.compDetails) !== re || (De == null ? void 0 : De.value) !== me || (De == null ? void 0 : De.force) !== ve ? {
          value: me,
          compDetails: re,
          force: ve
        } : De);
      },
      setEditDetails: (re, me, ve, De) => {
        if (re) {
          let Ae;
          De ? Ae = new LC(
            re.params,
            () => g((Ve) => Ve + 1)
          ) : re.componentFromFramework && Dr(), u({
            compDetails: re,
            popup: me,
            popupPosition: ve,
            compProxy: Ae
          }), me || c(void 0);
        } else
          e.hasBrowserFocus() && fe.getFocusableElement().focus({ preventScroll: !0 }), u((Ve) => {
            Ve != null && Ve.compProxy && (I.current = void 0);
          });
      }
    }, Re = x.current || void 0;
    e.setComp(
      fe,
      he,
      D.current ?? void 0,
      Re,
      t,
      s,
      a.current
    );
  }, []), ye = le((ae) => {
    L.current = ae, se();
  }, []), Fe = le((ae) => {
    D.current = ae, se();
  }, []), ne = X(() => {
    var he;
    return !!(((he = l == null ? void 0 : l.compDetails) == null ? void 0 : he.componentFromFramework) && Kt(l.compDetails.componentClass));
  }, [l]);
  lt(() => {
    L.current && (z.current.toggleCss("ag-cell-value", !Z), z.current.toggleCss("ag-cell-inline-editing", !!d && !d.popup), z.current.toggleCss("ag-cell-popup-editing", !!d && !!d.popup), z.current.toggleCss("ag-cell-not-inline-editing", !d || !!d.popup), e.setInlineEditingCss());
  });
  const Se = () => /* @__PURE__ */ H.createElement(H.Fragment, null, l != null && WC(
    l,
    h,
    i,
    G,
    Z,
    ne,
    B
  ), d != null && BC(d, U, L.current, e, S)), Le = () => /* @__PURE__ */ H.createElement("div", { ref: ye, style: f, role: O, "col-id": o }, Z ? /* @__PURE__ */ H.createElement("div", { className: "ag-cell-wrapper", role: "presentation", ref: Q }, Se()) : Se());
  return e.isCellSpanning() ? /* @__PURE__ */ H.createElement("div", { ref: Fe, className: "ag-spanned-cell-wrapper", role: "presentation" }, Le()) : Le();
}, VC = ze(NC), _C = ({ rowCtrl: e, containerType: t }) => {
  const { context: s, gos: n } = Ne(Ge), r = k(), o = k(e.getDomOrder()), i = e.isFullWidth(), a = e.rowNode.displayed, [l, c] = V(
    () => a ? e.rowNode.getRowIndexString() : null
  ), [d, u] = V(() => e.rowId), [h, g] = V(() => e.businessKey), [f, C] = V(() => e.rowStyles), p = k(null), m = k(null), [v, b] = V(() => null), [y, F] = V(), [S, P] = V(
    () => a ? e.getInitialRowTop(t) : void 0
  ), [W, O] = V(
    () => a ? e.getInitialTransform(t) : void 0
  ), L = k(null), D = k(), G = k(!1), [T, I] = V(0);
  Te(() => {
    var q;
    if (G.current || !y || T > 10)
      return;
    const z = (q = L.current) == null ? void 0 : q.firstChild;
    z ? (e.setupDetailRowAutoHeight(z), G.current = !0) : I((Q) => Q + 1);
  }, [y, T]);
  const x = k();
  x.current || (x.current = new ps(() => L.current));
  const E = le((z) => {
    if (L.current = z, r.current = z ? s.createBean(new Ut()) : s.destroyBean(r.current), !z) {
      e.unsetComp(t);
      return;
    }
    if (!e.isAlive())
      return;
    const q = {
      // the rowTop is managed by state, instead of direct style manipulation by rowCtrl (like all the other styles)
      // as we need to have an initial value when it's placed into he DOM for the first time, for animation to work.
      setTop: P,
      setTransform: O,
      // i found using React for managing classes at the row level was to slow, as modifying classes caused a lot of
      // React code to execute, so avoiding React for managing CSS Classes made the grid go much faster.
      toggleCss: (Q, se) => x.current.toggleCss(Q, se),
      setDomOrder: (Q) => o.current = Q,
      setRowIndex: c,
      setRowId: u,
      setRowBusinessKey: g,
      setUserStyles: C,
      // if we don't maintain the order, then cols will be ripped out and into the dom
      // when cols reordered, which would stop the CSS transitions from working
      setCellCtrls: (Q, se) => {
        m.current = p.current, p.current = Q;
        const ye = Js(m.current, Q, o.current);
        ye !== m.current && us(se, () => b(ye));
      },
      showFullWidth: (Q) => F(Q),
      getFullWidthCellRenderer: () => D.current,
      refreshFullWidth: (Q) => $.current ? (F((se) => ({
        ...se,
        params: Q()
      })), !0) : !D.current || !D.current.refresh ? !1 : D.current.refresh(Q())
    };
    e.setComp(q, z, t, r.current);
  }, []);
  lt(
    () => ms(y, s, L.current, D),
    [y]
  );
  const A = X(() => {
    const z = { top: S, transform: W };
    return Object.assign(z, f), z;
  }, [S, W, f]), R = i && (y == null ? void 0 : y.componentFromFramework), _ = !i && v != null, B = X(() => !!((y == null ? void 0 : y.componentFromFramework) && Kt(y.componentClass)), [y]), $ = k(!1);
  Te(() => {
    $.current = B && !!y && !!n.get("reactiveCustomComponents");
  }, [B, y]);
  const Z = () => v == null ? void 0 : v.map((z) => /* @__PURE__ */ H.createElement(
    VC,
    {
      cellCtrl: z,
      editingRow: e.editing,
      printLayout: e.printLayout,
      key: z.instanceId
    }
  )), U = () => {
    const z = y.componentClass;
    return /* @__PURE__ */ H.createElement(H.Fragment, null, B ? /* @__PURE__ */ H.createElement(z, { ...y.params }) : /* @__PURE__ */ H.createElement(z, { ...y.params, ref: D }));
  };
  return /* @__PURE__ */ H.createElement(
    "div",
    {
      ref: E,
      role: "row",
      style: A,
      "row-index": l,
      "row-id": d,
      "row-business-key": h
    },
    _ && Z(),
    R && U()
  );
}, Lo = ze(_C), zC = ({ name: e }) => {
  const { context: t, gos: s } = Ne(Ge), n = X(() => Cs(e), [e]), r = k(null), o = k(null), i = k(null), a = k([]), l = k([]), [c, d] = V(() => []), u = !!s.get("enableCellSpan") && !!n.getSpannedRowCtrls, h = k([]), g = k([]), [f, C] = V(() => []), p = k(!1), m = k(), v = X(() => Ze("ag-viewport", ji(e)), [e]), b = X(() => Ze(Hs(e)), [e]), y = X(() => Ze("ag-spanning-container", gu(e)), [e]), F = n.type === "center" || u, S = F ? r : o;
  Ft(" AG Row Container " + e + " ", S);
  const P = le(() => {
    const x = !F || r.current != null, E = o.current != null, A = !u || i.current != null;
    return x && E && A;
  }, []), W = le(() => r.current == null && o.current == null && i.current == null, []), O = le(() => {
    if (W() && (m.current = t.destroyBean(m.current)), P()) {
      const x = (R) => {
        const _ = Js(
          l.current,
          a.current,
          p.current
        );
        _ !== l.current && (l.current = _, us(R, () => d(_)));
      }, E = (R) => {
        const _ = Js(
          g.current,
          h.current,
          p.current
        );
        _ !== g.current && (g.current = _, us(R, () => C(_)));
      }, A = {
        setHorizontalScroll: (R) => {
          r.current && (r.current.scrollLeft = R);
        },
        setViewportHeight: (R) => {
          r.current && (r.current.style.height = R);
        },
        setRowCtrls: ({ rowCtrls: R, useFlushSync: _ }) => {
          const B = !!_ && a.current.length > 0 && R.length > 0;
          a.current = R, x(B);
        },
        setSpannedRowCtrls: (R, _) => {
          const B = !!_ && h.current.length > 0 && R.length > 0;
          h.current = R, E(B);
        },
        setDomOrder: (R) => {
          p.current != R && (p.current = R, x(!1));
        },
        setContainerWidth: (R) => {
          o.current && (o.current.style.width = R);
        },
        setOffsetTop: (R) => {
          o.current && (o.current.style.transform = `translateY(${R})`);
        }
      };
      m.current = t.createBean(new Ru(e)), m.current.setComp(
        A,
        o.current,
        i.current ?? void 0,
        r.current
      );
    }
  }, [P, W]), L = le(
    (x) => {
      o.current = x, O();
    },
    [O]
  ), D = le(
    (x) => {
      i.current = x, O();
    },
    [O]
  ), G = le(
    (x) => {
      r.current = x, O();
    },
    [O]
  ), T = () => /* @__PURE__ */ H.createElement("div", { className: b, ref: L, role: "rowgroup" }, c.map((x) => /* @__PURE__ */ H.createElement(Lo, { rowCtrl: x, containerType: n.type, key: x.instanceId })));
  if (!F)
    return T();
  const I = () => u && /* @__PURE__ */ H.createElement("div", { className: y, ref: D, role: "rowgroup" }, f.map((x) => /* @__PURE__ */ H.createElement(Lo, { rowCtrl: x, containerType: n.type, key: x.instanceId })));
  return /* @__PURE__ */ H.createElement("div", { className: v, ref: G, role: "presentation" }, T(), I());
}, $C = ze(zC), jC = () => {
  const e = Ne(Ge), { context: t, overlays: s } = e, [n, r] = V(""), [o, i] = V(0), [a, l] = V(0), [c, d] = V("0px"), [u, h] = V("0px"), [g, f] = V("100%"), [C, p] = V("0px"), [m, v] = V("0px"), [b, y] = V("100%"), [F, S] = V(!0), [P, W] = V(!0), [O, L] = V(null), [D, G] = V(""), [T, I] = V(null), [x, E] = V("ag-layout-normal"), A = k();
  A.current || (A.current = new ps(() => R.current));
  const R = k(null), _ = k(null), B = k(null), $ = k(null), Z = k(null), U = k(null), z = k(null), q = k([]), Q = k([]);
  Ft(" AG Grid Body ", R), Ft(" AG Pinned Top ", _), Ft(" AG Sticky Top ", B), Ft(" AG Middle ", U), Ft(" AG Pinned Bottom ", z);
  const se = le((Ae) => {
    if (R.current = Ae, !Ae) {
      q.current = t.destroyBeans(q.current), Q.current.forEach((we) => we()), Q.current = [];
      return;
    }
    if (!t)
      return;
    const Ve = (we, ke) => {
      we.appendChild(ke), Q.current.push(() => we.removeChild(ke));
    }, Yt = (we) => {
      const ke = t.createBean(new we());
      return q.current.push(ke), ke;
    }, St = (we, ke, vs) => {
      Ve(we, document.createComment(vs)), Ve(we, Yt(ke).getGui());
    };
    St(Ae, Tu, " AG Fake Horizontal Scroll ");
    const Zt = s == null ? void 0 : s.getOverlayWrapperCompClass();
    Zt && St(Ae, Zt, " AG Overlay Wrapper "), Z.current && St(Z.current, Iu, " AG Fake Vertical Scroll ");
    const ws = {
      setRowAnimationCssOnBodyViewport: r,
      setColumnCount: (we) => {
        R.current && fl(R.current, we);
      },
      setRowCount: (we) => {
        R.current && hl(R.current, we);
      },
      setTopHeight: i,
      setBottomHeight: l,
      setStickyTopHeight: d,
      setStickyTopTop: h,
      setStickyTopWidth: f,
      setTopInvisible: S,
      setBottomInvisible: W,
      setColumnMovingCss: (we, ke) => A.current.toggleCss(we, ke),
      updateLayoutClasses: E,
      setAlwaysVerticalScrollClass: L,
      setPinnedTopBottomOverflowY: G,
      setCellSelectableCss: (we, ke) => I(ke ? we : null),
      setBodyViewportWidth: (we) => {
        U.current && (U.current.style.width = we);
      },
      registerBodyViewportResizeListener: (we) => {
        if (U.current) {
          const ke = jt(e, U.current, we);
          Q.current.push(() => ke());
        }
      },
      setStickyBottomHeight: p,
      setStickyBottomBottom: v,
      setStickyBottomWidth: y,
      setGridRootRole: (we) => Ae.setAttribute("role", we)
    }, qt = t.createBean(new Pu());
    q.current.push(qt), qt.setComp(
      ws,
      Ae,
      U.current,
      _.current,
      z.current,
      B.current,
      $.current
    );
  }, []), ye = X(() => Ze("ag-root", "ag-unselectable", x), [x]), Fe = X(
    () => Ze(
      "ag-body-viewport",
      n,
      x,
      O,
      T
    ),
    [n, x, O, T]
  ), ne = X(() => Ze("ag-body", x), [x]), Se = X(
    () => Ze("ag-floating-top", F ? "ag-invisible" : null, T),
    [T, F]
  ), Le = X(() => Ze("ag-sticky-top", T), [T]), ae = X(
    () => Ze("ag-sticky-bottom", C === "0px" ? "ag-invisible" : null, T),
    [T, C]
  ), he = X(
    () => Ze("ag-floating-bottom", P ? "ag-invisible" : null, T),
    [T, P]
  ), fe = X(
    () => ({
      height: o,
      minHeight: o,
      overflowY: D
    }),
    [o, D]
  ), Re = X(
    () => ({
      height: c,
      top: u,
      width: g
    }),
    [c, u, g]
  ), re = X(
    () => ({
      height: C,
      bottom: m,
      width: b
    }),
    [C, m, b]
  ), me = X(
    () => ({
      height: a,
      minHeight: a,
      overflowY: D
    }),
    [a, D]
  ), ve = (Ae) => /* @__PURE__ */ H.createElement($C, { name: Ae, key: `${Ae}-container` }), De = ({
    section: Ae,
    children: Ve,
    className: Yt,
    style: St
  }) => /* @__PURE__ */ H.createElement("div", { ref: Ae, className: Yt, role: "presentation", style: St }, Ve.map(ve));
  return /* @__PURE__ */ H.createElement("div", { ref: se, className: ye }, /* @__PURE__ */ H.createElement(MC, null), De({
    section: _,
    className: Se,
    style: fe,
    children: ["topLeft", "topCenter", "topRight", "topFullWidth"]
  }), /* @__PURE__ */ H.createElement("div", { className: ne, ref: Z, role: "presentation" }, De({
    section: U,
    className: Fe,
    children: ["left", "center", "right", "fullWidth"]
  })), De({
    section: B,
    className: Le,
    style: Re,
    children: ["stickyTopLeft", "stickyTopCenter", "stickyTopRight", "stickyTopFullWidth"]
  }), De({
    section: $,
    className: ae,
    style: re,
    children: ["stickyBottomLeft", "stickyBottomCenter", "stickyBottomRight", "stickyBottomFullWidth"]
  }), De({
    section: z,
    className: he,
    style: me,
    children: ["bottomLeft", "bottomCenter", "bottomRight", "bottomFullWidth"]
  }));
}, UC = ze(jC), KC = (e, t) => {
  const { children: s, eFocusableElement: n, onTabKeyDown: r, gridCtrl: o, forceFocusOutWhenTabGuardsAreEmpty: i, isEmpty: a } = e, { context: l } = Ne(Ge), c = k(null), d = k(null), u = k(), h = (m) => {
    const v = m == null ? void 0 : parseInt(m, 10).toString();
    [c, d].forEach((b) => {
      var y, F;
      v === void 0 ? (y = b.current) == null || y.removeAttribute("tabindex") : (F = b.current) == null || F.setAttribute("tabindex", v);
    });
  };
  ir(t, () => ({
    forceFocusOutOfContainer(m) {
      var v;
      (v = u.current) == null || v.forceFocusOutOfContainer(m);
    }
  }));
  const g = le(() => {
    const m = c.current, v = d.current;
    if (!m && !v) {
      u.current = l.destroyBean(u.current);
      return;
    }
    if (m && v) {
      const b = {
        setTabIndex: h
      };
      u.current = l.createBean(
        new oh({
          comp: b,
          eTopGuard: m,
          eBottomGuard: v,
          eFocusableElement: n,
          onTabKeyDown: r,
          forceFocusOutWhenTabGuardsAreEmpty: i,
          focusInnerElement: (y) => o.focusInnerElement(y),
          isEmpty: a
        })
      );
    }
  }, []), f = le(
    (m) => {
      c.current = m, g();
    },
    [g]
  ), C = le(
    (m) => {
      d.current = m, g();
    },
    [g]
  ), p = (m) => {
    const v = m === "top" ? Ln.TAB_GUARD_TOP : Ln.TAB_GUARD_BOTTOM;
    return /* @__PURE__ */ H.createElement(
      "div",
      {
        className: `${Ln.TAB_GUARD} ${v}`,
        role: "presentation",
        ref: m === "top" ? f : C
      }
    );
  };
  return /* @__PURE__ */ H.createElement(H.Fragment, null, p("top"), s, p("bottom"));
}, YC = or(KC), ZC = ze(YC), qC = ({ context: e }) => {
  const [t, s] = V(""), [n, r] = V(""), [o, i] = V(null), [a, l] = V(null), [c, d] = V(!1), [u, h] = V(), g = k(), f = k(null), C = k(), [p, m] = V(null), v = k(() => {
  }), b = k(), y = k([]), F = le(() => {
  }, []), S = X(() => e.isDestroyed() ? null : e.getBeans(), [e]);
  Ft(" AG Grid ", f);
  const P = le((T) => {
    if (f.current = T, g.current = T ? e.createBean(new dh()) : e.destroyBean(g.current), !T || e.isDestroyed())
      return;
    const I = g.current;
    v.current = I.focusInnerElement.bind(I);
    const x = {
      destroyGridUi: () => {
      },
      // do nothing, as framework users destroy grid by removing the comp
      setRtlClass: s,
      forceFocusOutOfContainer: (E) => {
        var A, R;
        if (!E && ((A = b.current) != null && A.isDisplayed())) {
          b.current.forceFocusOutOfContainer(E);
          return;
        }
        (R = C.current) == null || R.forceFocusOutOfContainer(E);
      },
      updateLayoutClasses: r,
      getFocusableContainers: () => {
        var R;
        const E = [], A = (R = f.current) == null ? void 0 : R.querySelector(".ag-root");
        return A && E.push({ getGui: () => A }), y.current.forEach((_) => {
          _.isDisplayed() && E.push(_);
        }), E;
      },
      setCursor: i,
      setUserSelect: l
    };
    I.setComp(x, T, T), d(!0);
  }, []);
  Te(() => {
    const T = g.current, I = f.current;
    if (!u || !S || !T || !p || !I)
      return;
    const x = [], {
      watermarkSelector: E,
      paginationSelector: A,
      sideBarSelector: R,
      statusBarSelector: _,
      gridHeaderDropZonesSelector: B
    } = T.getOptionalSelectors(), $ = [];
    if (B) {
      const U = e.createBean(new B.component()), z = U.getGui();
      I.insertAdjacentElement("afterbegin", z), $.push(z), x.push(U);
    }
    if (R) {
      const U = e.createBean(new R.component()), z = U.getGui(), q = p.querySelector(".ag-tab-guard-bottom");
      q && (q.insertAdjacentElement("beforebegin", z), $.push(z)), x.push(U), y.current.push(U);
    }
    const Z = (U) => {
      const z = e.createBean(new U()), q = z.getGui();
      return I.insertAdjacentElement("beforeend", q), $.push(q), x.push(z), z;
    };
    if (_ && Z(_.component), A) {
      const U = Z(A.component);
      b.current = U, y.current.push(U);
    }
    return E && Z(E.component), () => {
      e.destroyBeans(x), $.forEach((U) => {
        var z;
        (z = U.parentElement) == null || z.removeChild(U);
      });
    };
  }, [u, p, S]);
  const W = X(
    () => Ze("ag-root-wrapper", t, n),
    [t, n]
  ), O = X(
    () => Ze("ag-root-wrapper-body", "ag-focus-managed", n),
    [n]
  ), L = X(
    () => ({
      userSelect: a ?? "",
      WebkitUserSelect: a ?? "",
      cursor: o ?? ""
    }),
    [a, o]
  ), D = le((T) => {
    C.current = T, h(T !== null);
  }, []), G = le(() => {
    var T;
    return !((T = g.current) != null && T.isFocusable());
  }, []);
  return /* @__PURE__ */ H.createElement("div", { ref: P, className: W, style: L, role: "presentation" }, /* @__PURE__ */ H.createElement("div", { className: O, ref: m, role: "presentation" }, c && p && S && /* @__PURE__ */ H.createElement(Ge.Provider, { value: S }, /* @__PURE__ */ H.createElement(
    ZC,
    {
      ref: D,
      eFocusableElement: p,
      onTabKeyDown: F,
      gridCtrl: g.current,
      forceFocusOutWhenTabGuardsAreEmpty: !0,
      isEmpty: G
    },
    // we wait for initialised before rending the children, so GridComp has created and registered with it's
    // GridCtrl before we create the child GridBodyComp. Otherwise the GridBodyComp would initialise first,
    // before we have set the the Layout CSS classes, causing the GridBodyComp to render rows to a grid that
    // doesn't have it's height specified, which would result if all the rows getting rendered (and if many rows,
    // hangs the UI)
    /* @__PURE__ */ H.createElement(UC, null)
  ))));
}, XC = ze(qC), QC = class extends K {
  wireBeans(e) {
    this.ctrlsSvc = e.ctrlsSvc;
  }
  areHeaderCellsRendered() {
    return this.ctrlsSvc.getHeaderRowContainerCtrls().every((e) => e.getAllCtrls().every((t) => t.areCellsRendered()));
  }
}, Pa = {
  setGridApi: void 0,
  maxComponentCreationTimeMs: void 0,
  children: void 0
}, JC = {
  gridOptions: void 0,
  modules: void 0,
  containerStyle: void 0,
  className: void 0,
  passGridApi: void 0,
  componentWrappingElement: void 0,
  ...Pa
}, Ea = new Set(Object.keys(JC)), em = new Set(Object.keys(Pa)), Ta = (e) => {
  var p;
  const t = k(), s = k(null), n = k(null), r = k([]), o = k([]), i = k(e), a = k(), l = k(), c = k(!1), [d, u] = V(void 0), [, h] = V(0), g = le((m) => {
    if (s.current = m, !m) {
      r.current.forEach((D) => D()), r.current.length = 0;
      return;
    }
    const v = e.modules || [];
    n.current || (n.current = new vC(
      () => h((D) => D + 1),
      e.componentWrappingElement,
      e.maxComponentCreationTimeMs
    ), r.current.push(() => {
      var D;
      (D = n.current) == null || D.destroy(), n.current = null;
    }));
    const b = Xl(
      e.gridOptions,
      e,
      Object.keys(e).filter((D) => !Ea.has(D))
    ), y = () => {
      if (c.current) {
        const D = () => {
          var T;
          return (T = a.current) != null && T.shouldQueueUpdates() ? void 0 : o.current.shift();
        };
        let G = D();
        for (; G; )
          G(), G = D();
      }
    }, F = new rm(y);
    a.current = F;
    const S = new QC(), P = {
      providedBeanInstances: {
        frameworkCompWrapper: new sm(
          n.current,
          b.reactiveCustomComponents ?? qp("reactiveCustomComponents") ?? !0
        ),
        renderStatus: S
      },
      modules: v,
      frameworkOverrides: F,
      setThemeOnGridDiv: !0
    }, W = (D) => {
      u(D), D.createBean(S), r.current.push(() => {
        D.destroy();
      }), D.getBean("ctrlsSvc").whenReady(
        {
          addDestroyFunc: (G) => {
            r.current.push(G);
          }
        },
        () => {
          var T;
          if (D.isDestroyed())
            return;
          const G = t.current;
          G && ((T = e.passGridApi) == null || T.call(e, G));
        }
      );
    }, O = (D) => {
      D.getBean("ctrlsSvc").whenReady(
        {
          addDestroyFunc: (G) => {
            r.current.push(G);
          }
        },
        () => {
          o.current.forEach((G) => G()), o.current.length = 0, c.current = !0;
        }
      );
    }, L = new Qp();
    b.gridId ?? (b.gridId = l.current), t.current = L.create(
      m,
      b,
      W,
      O,
      P
    ), r.current.push(() => {
      t.current = void 0;
    }), t.current && (l.current = t.current.getGridId());
  }, []), f = X(() => ({
    height: "100%",
    ...e.containerStyle || {}
  }), [e.containerStyle]), C = le((m) => {
    var v;
    c.current && !((v = a.current) != null && v.shouldQueueUpdates()) ? m() : o.current.push(m);
  }, []);
  return Te(() => {
    const m = tm(i.current, e);
    i.current = e, C(() => {
      t.current && Ql(m, t.current);
    });
  }, [e]), /* @__PURE__ */ H.createElement("div", { style: f, className: e.className, ref: g }, d && !d.isDestroyed() ? /* @__PURE__ */ H.createElement(XC, { context: d }) : null, ((p = n.current) == null ? void 0 : p.getPortals()) ?? null);
};
function tm(e, t) {
  const s = {};
  return Object.keys(t).forEach((n) => {
    if (Ea.has(n)) {
      em.has(n) && oe(274, { prop: n });
      return;
    }
    const r = t[n];
    e[n] !== r && (s[n] = r);
  }), s;
}
var sm = class extends Jp {
  constructor(e, t) {
    super(), this.parent = e, this.reactiveCustomComponents = t;
  }
  createWrapper(e, t) {
    if (this.reactiveCustomComponents) {
      const r = ((o) => {
        switch (o) {
          case "filter":
            return cC;
          case "floatingFilterComponent":
            return uC;
          case "dateComponent":
            return aC;
          case "dragAndDropImageComponent":
            return lC;
          case "loadingOverlayComponent":
            return gC;
          case "noRowsOverlayComponent":
            return pC;
          case "statusPanel":
            return CC;
          case "toolPanel":
            return mC;
          case "menuItem":
            return fC;
          case "cellRenderer":
            return iC;
          case "innerHeaderComponent":
            return hC;
        }
      })(t.name);
      if (r)
        return new r(e, this.parent, t);
    } else
      switch (t.name) {
        case "filter":
        case "floatingFilterComponent":
        case "dateComponent":
        case "dragAndDropImageComponent":
        case "loadingOverlayComponent":
        case "noRowsOverlayComponent":
        case "statusPanel":
        case "toolPanel":
        case "menuItem":
        case "cellRenderer":
          Dr();
          break;
      }
    const s = !t.cellRenderer && t.name !== "toolPanel";
    return new Fa(e, this.parent, t, s);
  }
}, nm = or((e, t) => {
  const s = Ne(Ge), { registry: n, context: r, gos: o, rowModel: i } = s, [a, l] = V(() => new qe()), [c, d] = V(() => new qe()), [u, h] = V(), [g, f] = V(), C = k(), p = k(null), m = k(), v = X(
    () => fd(e.api.getGridId(), (u == null ? void 0 : u.rowModelType) ?? "clientSide"),
    [e]
  ), b = X(() => a.toString() + " ag-details-row", [a]), y = X(() => c.toString() + " ag-details-grid", [c]);
  t && ir(t, () => ({
    refresh() {
      var P;
      return ((P = C.current) == null ? void 0 : P.refresh()) ?? !1;
    }
  })), e.template && oe(230);
  const F = le((P) => {
    var L;
    if (p.current = P, !P) {
      C.current = r.destroyBean(C.current), (L = m.current) == null || L.call(m);
      return;
    }
    const W = {
      toggleCss: (D, G) => l((T) => T.setClass(D, G)),
      toggleDetailGridCss: (D, G) => d((T) => T.setClass(D, G)),
      setDetailGrid: (D) => h(D),
      setRowData: (D) => f(D),
      getGui: () => p.current
    }, O = n.createDynamicBean("detailCellRendererCtrl", !0);
    if (O && (r.createBean(O), O.init(W, e), C.current = O, o.get("detailRowAutoHeight"))) {
      const D = () => {
        if (p.current == null)
          return;
        const G = p.current.clientHeight;
        G != null && G > 0 && setTimeout(() => {
          e.node.setRowHeight(G), (tn(o) || ur(o)) && i.onRowHeightChanged();
        }, 0);
      };
      m.current = jt(s, P, D), D();
    }
  }, []), S = le((P) => {
    var W;
    (W = C.current) == null || W.registerDetailWithMaster(P);
  }, []);
  return /* @__PURE__ */ H.createElement("div", { className: b, ref: F }, u && /* @__PURE__ */ H.createElement(
    Ta,
    {
      className: y,
      ...u,
      modules: v,
      rowData: g,
      passGridApi: S
    }
  ));
}), rm = class extends ta {
  constructor(e) {
    super("react"), this.processQueuedUpdates = e, this.queueUpdates = !1, this.renderingEngine = "react", this.frameworkComponents = {
      agGroupCellRenderer: Eo,
      agGroupRowRenderer: Eo,
      agDetailCellRenderer: nm
    }, this.wrapIncoming = (t, s) => s === "ensureVisible" ? sC(t) : t();
  }
  frameworkComponent(e) {
    return this.frameworkComponents[e];
  }
  isFrameworkComponent(e) {
    if (!e)
      return !1;
    const t = e.prototype;
    return !(t && "getGui" in t);
  }
  getLockOnRefresh() {
    this.queueUpdates = !0;
  }
  releaseLockOnRefresh() {
    this.queueUpdates = !1, this.processQueuedUpdates();
  }
  shouldQueueUpdates() {
    return this.queueUpdates;
  }
  runWhenReadyAsync() {
    return tC();
  }
}, om = class extends tl {
  constructor() {
    super(...arguments), this.apiListeners = [], this.setGridApi = (e) => {
      this.api = e, this.apiListeners.forEach((t) => t(e));
    };
  }
  registerApiListener(e) {
    this.apiListeners.push(e);
  }
  componentWillUnmount() {
    this.apiListeners.length = 0;
  }
  render() {
    return /* @__PURE__ */ H.createElement(Ta, { ...this.props, passGridApi: this.setGridApi });
  }
};
const Km = ({
  headers: e = [],
  items: t = [],
  itemValue: s = "id",
  showSelect: n = !1,
  returnObject: r = !1,
  selected: o = [],
  selectStrategy: i = "multiple",
  loading: a = !1,
  hover: l = !0,
  showExpand: c = !1,
  disableSort: d = !1,
  expanded: u = [],
  expandOnClick: h = !1,
  fixedHeader: g = !1,
  height: f,
  currentPage: C = 1,
  itemsPerPage: p = 10,
  search: m = "",
  noDataText: v = "데이터가 없습니다.",
  hideFooter: b = !1,
  pageCnt: y = 1,
  options: F,
  resizable: S = !0,
  fixedTable: P = !1,
  tooltip: W = !1,
  footers: O,
  onUpdateModelValue: L,
  onUpdateOptions: D,
  onUpdateExpanded: G,
  onSortBy: T,
  children: I,
  ...x
}) => {
  const E = k(null), A = X(() => {
    const z = [];
    return n && z.push({
      headerName: "",
      field: "select",
      checkboxSelection: i === "multiple",
      headerCheckboxSelection: i === "multiple",
      width: 50,
      pinned: "left",
      resizable: S,
      sortable: !1,
      cellRenderer: (q) => q.node.selectable === !1 ? null : /* @__PURE__ */ M.jsx(
        "input",
        {
          type: "checkbox",
          checked: q.node.isSelected(),
          onChange: (Q) => {
            q.node.setSelected(Q.target.checked);
          }
        }
      )
    }), e.forEach((q) => {
      z.push({
        headerName: q.title || q.value || q.key,
        field: q.key,
        sortable: !d && q.sortable !== !1,
        resizable: S,
        width: typeof q.width == "number" ? q.width : void 0,
        flex: typeof q.width == "string" ? 1 : void 0,
        cellStyle: {
          textAlign: q.align === "end" || q.align === "right" ? "right" : q.align === "center" ? "center" : "left"
        },
        headerClass: `header-cell header-align-${q.align || "left"}`,
        cellRenderer: (Q) => {
          const se = Q.value;
          return se == null || se === "" ? "-" : se;
        }
      });
    }), z;
  }, [e, n, d, S, i]), R = X(() => ({
    resizable: S,
    sortable: !d
  }), [S, d]), _ = X(() => ({
    rowSelection: n ? i === "single" ? "single" : "multiple" : void 0,
    suppressRowClickSelection: !h,
    animateRows: !0,
    rowHeight: 42,
    headerHeight: 36,
    pagination: !b,
    paginationPageSize: p,
    paginationPageSizeSelector: !1,
    suppressCellFocus: !0,
    onSelectionChanged: (z) => {
      if (L) {
        const q = z.api.getSelectedRows();
        L(q);
      }
    },
    onSortChanged: (z) => {
      const q = z.api.getColumnState().filter((Q) => Q.sort).map((Q) => ({
        colId: Q.colId,
        sort: Q.sort
      }));
      T && T(q);
    },
    onRowClicked: () => {
    },
    getRowStyle: (z) => {
      if (l && z.node.rowIndex !== void 0)
        return {
          cursor: "pointer"
        };
    },
    noRowsOverlayComponent: () => /* @__PURE__ */ M.jsx("div", { className: "text-center no-data", style: { padding: "20px" }, children: v })
  }), [
    n,
    i,
    h,
    b,
    p,
    l,
    c,
    v,
    L,
    T
  ]), B = X(() => t || [], [t]), $ = le((z) => {
    o && o.length > 0 && o.forEach((q) => {
      const Q = r ? q : q[s];
      z.api.forEachNode((se) => {
        (r ? se.data : se.data[s]) === Q && se.setSelected(!0);
      });
    });
  }, [o, r, s]), Z = {
    height: f ? typeof f == "number" ? `${f}px` : f : "400px",
    width: "100%"
  }, U = X(() => {
    const z = ["ag-theme-alpine", "s-data-table"];
    return d && z.push("disable-sort"), P && z.push("fixed-table"), S || z.push("no-vertical-lines"), z.join(" ");
  }, [d, P, S]);
  return /* @__PURE__ */ M.jsxs("div", { className: U, style: Z, ...x, children: [
    /* @__PURE__ */ M.jsx(
      om,
      {
        ref: E,
        columnDefs: A,
        defaultColDef: R,
        rowData: B,
        gridOptions: _,
        onGridReady: $,
        loading: a
      }
    ),
    I
  ] });
}, Ym = ({
  title: e = "",
  description: t = "",
  elevation: s,
  outlined: n = !0,
  shadowed: r = !0,
  onClick: o,
  children: i
}) => {
  const a = {
    padding: "24px",
    borderRadius: "4px",
    border: n ? "1px solid #e0e0e0" : "none",
    boxShadow: r ? "0 2px 4px rgba(0,0,0,0.1)" : "none"
  };
  return /* @__PURE__ */ M.jsx("div", { className: "s-empty", children: /* @__PURE__ */ M.jsxs("div", { className: "s-empty__card", style: a, children: [
    e && /* @__PURE__ */ M.jsx("div", { className: "s-empty__card-title", children: e }),
    /* @__PURE__ */ M.jsx("div", { className: "s-empty__card-content", children: o ? /* @__PURE__ */ M.jsx(
      "button",
      {
        onClick: o,
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#007bff",
          fontSize: "18px",
          padding: 0
        },
        children: t
      }
    ) : /* @__PURE__ */ M.jsx("span", { children: t }) }),
    i
  ] }) });
}, Zm = ({
  title: e,
  titleBold: t = !1,
  children: s
}) => {
  const [n, r] = V(!1), [o, i] = V("0px"), a = k(null), l = () => {
    a.current && (n ? (i(`${a.current.scrollHeight}px`), requestAnimationFrame(() => {
      i("0px"), r(!1);
    })) : (i(`${a.current.scrollHeight}px`), r(!0)));
  }, c = () => {
    n && i("auto");
  };
  return /* @__PURE__ */ M.jsxs("div", { className: "s-accordion-wrapper", children: [
    /* @__PURE__ */ M.jsxs("div", { className: `title ${t ? "title-bold" : ""}`, children: [
      e,
      /* @__PURE__ */ M.jsx(
        "i",
        {
          className: `mdi ${n ? "mdi-chevron-down" : "mdi-chevron-right"} s-accordion-icon`,
          onClick: l
        }
      )
    ] }),
    /* @__PURE__ */ M.jsx(
      "div",
      {
        ref: a,
        className: "s-accordion-contents",
        style: { height: o },
        onTransitionEnd: c,
        children: s
      }
    )
  ] });
}, qm = ({
  label: e = "",
  disabled: t = !1,
  list: s = [],
  whiteList: n = [],
  selectedList: r = [],
  iconName: o = "manage"
}) => {
  const [i, a] = V(!1), l = k(null), c = k(null);
  Te(() => {
    const h = (g) => {
      l.current && c.current && !l.current.contains(g.target) && !c.current.contains(g.target) && a(!1);
    };
    return i && document.addEventListener("mousedown", h), () => {
      document.removeEventListener("mousedown", h);
    };
  }, [i]);
  const d = (h) => {
    if (!n.includes(h.actionCode || "") || h.disabled === !0) return !0;
    const f = r.length;
    switch (h.type) {
      case "multiple":
        return f === 0;
      case "single":
        return f !== 1;
      case "none":
      case null:
      case void 0:
        return !1;
      default:
        return !1;
    }
  }, u = async (h) => {
    var g;
    d(h) || (await ((g = h.onClick) == null ? void 0 : g.call(h)), a(!1));
  };
  return s.length === 0 ? null : /* @__PURE__ */ M.jsxs("div", { className: "s-dropdown-button", children: [
    /* @__PURE__ */ M.jsx("div", { ref: c, children: /* @__PURE__ */ M.jsxs(
      tt,
      {
        disabled: t,
        onClick: () => a(!i),
        className: "d-flex align-center",
        children: [
          /* @__PURE__ */ M.jsx(it, { name: o, size: 16, className: "mr-1" }),
          e
        ]
      }
    ) }),
    i && /* @__PURE__ */ M.jsx("div", { ref: l, className: "s-dropdown-button__menu", children: s.map((h, g) => /* @__PURE__ */ M.jsx(
      "div",
      {
        className: `s-dropdown-button__item ${d(h) ? "disabled" : ""}`,
        onClick: () => u(h),
        children: h.label
      },
      (h == null ? void 0 : h.actionCode) || g
    )) })
  ] });
};
var Ma = { exports: {} };
(function(e, t) {
  (function(s, n) {
    e.exports = n();
  })(Vt, function() {
    var s = 1e3, n = 6e4, r = 36e5, o = "millisecond", i = "second", a = "minute", l = "hour", c = "day", d = "week", u = "month", h = "quarter", g = "year", f = "date", C = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
      var x = ["th", "st", "nd", "rd"], E = I % 100;
      return "[" + I + (x[(E - 20) % 10] || x[E] || x[0]) + "]";
    } }, b = function(I, x, E) {
      var A = String(I);
      return !A || A.length >= x ? I : "" + Array(x + 1 - A.length).join(E) + I;
    }, y = { s: b, z: function(I) {
      var x = -I.utcOffset(), E = Math.abs(x), A = Math.floor(E / 60), R = E % 60;
      return (x <= 0 ? "+" : "-") + b(A, 2, "0") + ":" + b(R, 2, "0");
    }, m: function I(x, E) {
      if (x.date() < E.date()) return -I(E, x);
      var A = 12 * (E.year() - x.year()) + (E.month() - x.month()), R = x.clone().add(A, u), _ = E - R < 0, B = x.clone().add(A + (_ ? -1 : 1), u);
      return +(-(A + (E - R) / (_ ? R - B : B - R)) || 0);
    }, a: function(I) {
      return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
    }, p: function(I) {
      return { M: u, y: g, w: d, d: c, D: f, h: l, m: a, s: i, ms: o, Q: h }[I] || String(I || "").toLowerCase().replace(/s$/, "");
    }, u: function(I) {
      return I === void 0;
    } }, F = "en", S = {};
    S[F] = v;
    var P = "$isDayjsObject", W = function(I) {
      return I instanceof G || !(!I || !I[P]);
    }, O = function I(x, E, A) {
      var R;
      if (!x) return F;
      if (typeof x == "string") {
        var _ = x.toLowerCase();
        S[_] && (R = _), E && (S[_] = E, R = _);
        var B = x.split("-");
        if (!R && B.length > 1) return I(B[0]);
      } else {
        var $ = x.name;
        S[$] = x, R = $;
      }
      return !A && R && (F = R), R || !A && F;
    }, L = function(I, x) {
      if (W(I)) return I.clone();
      var E = typeof x == "object" ? x : {};
      return E.date = I, E.args = arguments, new G(E);
    }, D = y;
    D.l = O, D.i = W, D.w = function(I, x) {
      return L(I, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var G = function() {
      function I(E) {
        this.$L = O(E.locale, null, !0), this.parse(E), this.$x = this.$x || E.x || {}, this[P] = !0;
      }
      var x = I.prototype;
      return x.parse = function(E) {
        this.$d = function(A) {
          var R = A.date, _ = A.utc;
          if (R === null) return /* @__PURE__ */ new Date(NaN);
          if (D.u(R)) return /* @__PURE__ */ new Date();
          if (R instanceof Date) return new Date(R);
          if (typeof R == "string" && !/Z$/i.test(R)) {
            var B = R.match(p);
            if (B) {
              var $ = B[2] - 1 || 0, Z = (B[7] || "0").substring(0, 3);
              return _ ? new Date(Date.UTC(B[1], $, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, Z)) : new Date(B[1], $, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, Z);
            }
          }
          return new Date(R);
        }(E), this.init();
      }, x.init = function() {
        var E = this.$d;
        this.$y = E.getFullYear(), this.$M = E.getMonth(), this.$D = E.getDate(), this.$W = E.getDay(), this.$H = E.getHours(), this.$m = E.getMinutes(), this.$s = E.getSeconds(), this.$ms = E.getMilliseconds();
      }, x.$utils = function() {
        return D;
      }, x.isValid = function() {
        return this.$d.toString() !== C;
      }, x.isSame = function(E, A) {
        var R = L(E);
        return this.startOf(A) <= R && R <= this.endOf(A);
      }, x.isAfter = function(E, A) {
        return L(E) < this.startOf(A);
      }, x.isBefore = function(E, A) {
        return this.endOf(A) < L(E);
      }, x.$g = function(E, A, R) {
        return D.u(E) ? this[A] : this.set(R, E);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(E, A) {
        var R = this, _ = !!D.u(A) || A, B = D.p(E), $ = function(Fe, ne) {
          var Se = D.w(R.$u ? Date.UTC(R.$y, ne, Fe) : new Date(R.$y, ne, Fe), R);
          return _ ? Se : Se.endOf(c);
        }, Z = function(Fe, ne) {
          return D.w(R.toDate()[Fe].apply(R.toDate("s"), (_ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ne)), R);
        }, U = this.$W, z = this.$M, q = this.$D, Q = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case g:
            return _ ? $(1, 0) : $(31, 11);
          case u:
            return _ ? $(1, z) : $(0, z + 1);
          case d:
            var se = this.$locale().weekStart || 0, ye = (U < se ? U + 7 : U) - se;
            return $(_ ? q - ye : q + (6 - ye), z);
          case c:
          case f:
            return Z(Q + "Hours", 0);
          case l:
            return Z(Q + "Minutes", 1);
          case a:
            return Z(Q + "Seconds", 2);
          case i:
            return Z(Q + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(E) {
        return this.startOf(E, !1);
      }, x.$set = function(E, A) {
        var R, _ = D.p(E), B = "set" + (this.$u ? "UTC" : ""), $ = (R = {}, R[c] = B + "Date", R[f] = B + "Date", R[u] = B + "Month", R[g] = B + "FullYear", R[l] = B + "Hours", R[a] = B + "Minutes", R[i] = B + "Seconds", R[o] = B + "Milliseconds", R)[_], Z = _ === c ? this.$D + (A - this.$W) : A;
        if (_ === u || _ === g) {
          var U = this.clone().set(f, 1);
          U.$d[$](Z), U.init(), this.$d = U.set(f, Math.min(this.$D, U.daysInMonth())).$d;
        } else $ && this.$d[$](Z);
        return this.init(), this;
      }, x.set = function(E, A) {
        return this.clone().$set(E, A);
      }, x.get = function(E) {
        return this[D.p(E)]();
      }, x.add = function(E, A) {
        var R, _ = this;
        E = Number(E);
        var B = D.p(A), $ = function(z) {
          var q = L(_);
          return D.w(q.date(q.date() + Math.round(z * E)), _);
        };
        if (B === u) return this.set(u, this.$M + E);
        if (B === g) return this.set(g, this.$y + E);
        if (B === c) return $(1);
        if (B === d) return $(7);
        var Z = (R = {}, R[a] = n, R[l] = r, R[i] = s, R)[B] || 1, U = this.$d.getTime() + E * Z;
        return D.w(U, this);
      }, x.subtract = function(E, A) {
        return this.add(-1 * E, A);
      }, x.format = function(E) {
        var A = this, R = this.$locale();
        if (!this.isValid()) return R.invalidDate || C;
        var _ = E || "YYYY-MM-DDTHH:mm:ssZ", B = D.z(this), $ = this.$H, Z = this.$m, U = this.$M, z = R.weekdays, q = R.months, Q = R.meridiem, se = function(ne, Se, Le, ae) {
          return ne && (ne[Se] || ne(A, _)) || Le[Se].slice(0, ae);
        }, ye = function(ne) {
          return D.s($ % 12 || 12, ne, "0");
        }, Fe = Q || function(ne, Se, Le) {
          var ae = ne < 12 ? "AM" : "PM";
          return Le ? ae.toLowerCase() : ae;
        };
        return _.replace(m, function(ne, Se) {
          return Se || function(Le) {
            switch (Le) {
              case "YY":
                return String(A.$y).slice(-2);
              case "YYYY":
                return D.s(A.$y, 4, "0");
              case "M":
                return U + 1;
              case "MM":
                return D.s(U + 1, 2, "0");
              case "MMM":
                return se(R.monthsShort, U, q, 3);
              case "MMMM":
                return se(q, U);
              case "D":
                return A.$D;
              case "DD":
                return D.s(A.$D, 2, "0");
              case "d":
                return String(A.$W);
              case "dd":
                return se(R.weekdaysMin, A.$W, z, 2);
              case "ddd":
                return se(R.weekdaysShort, A.$W, z, 3);
              case "dddd":
                return z[A.$W];
              case "H":
                return String($);
              case "HH":
                return D.s($, 2, "0");
              case "h":
                return ye(1);
              case "hh":
                return ye(2);
              case "a":
                return Fe($, Z, !0);
              case "A":
                return Fe($, Z, !1);
              case "m":
                return String(Z);
              case "mm":
                return D.s(Z, 2, "0");
              case "s":
                return String(A.$s);
              case "ss":
                return D.s(A.$s, 2, "0");
              case "SSS":
                return D.s(A.$ms, 3, "0");
              case "Z":
                return B;
            }
            return null;
          }(ne) || B.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(E, A, R) {
        var _, B = this, $ = D.p(A), Z = L(E), U = (Z.utcOffset() - this.utcOffset()) * n, z = this - Z, q = function() {
          return D.m(B, Z);
        };
        switch ($) {
          case g:
            _ = q() / 12;
            break;
          case u:
            _ = q();
            break;
          case h:
            _ = q() / 3;
            break;
          case d:
            _ = (z - U) / 6048e5;
            break;
          case c:
            _ = (z - U) / 864e5;
            break;
          case l:
            _ = z / r;
            break;
          case a:
            _ = z / n;
            break;
          case i:
            _ = z / s;
            break;
          default:
            _ = z;
        }
        return R ? _ : D.a(_);
      }, x.daysInMonth = function() {
        return this.endOf(u).$D;
      }, x.$locale = function() {
        return S[this.$L];
      }, x.locale = function(E, A) {
        if (!E) return this.$L;
        var R = this.clone(), _ = O(E, A, !0);
        return _ && (R.$L = _), R;
      }, x.clone = function() {
        return D.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, I;
    }(), T = G.prototype;
    return L.prototype = T, [["$ms", o], ["$s", i], ["$m", a], ["$H", l], ["$W", c], ["$M", u], ["$y", g], ["$D", f]].forEach(function(I) {
      T[I[1]] = function(x) {
        return this.$g(x, I[0], I[1]);
      };
    }), L.extend = function(I, x) {
      return I.$i || (I(x, G, L), I.$i = !0), L;
    }, L.locale = O, L.isDayjs = W, L.unix = function(I) {
      return L(1e3 * I);
    }, L.en = S[F], L.Ls = S, L.p = {}, L;
  });
})(Ma);
var im = Ma.exports;
const ot = /* @__PURE__ */ _t(im);
var Ia = { exports: {} };
(function(e, t) {
  (function(s, n) {
    e.exports = n();
  })(Vt, function() {
    return function(s, n) {
      n.prototype.isSameOrAfter = function(r, o) {
        return this.isSame(r, o) || this.isAfter(r, o);
      };
    };
  });
})(Ia);
var am = Ia.exports;
const lm = /* @__PURE__ */ _t(am);
var La = { exports: {} };
(function(e, t) {
  (function(s, n) {
    e.exports = n();
  })(Vt, function() {
    return function(s, n) {
      n.prototype.isSameOrBefore = function(r, o) {
        return this.isSame(r, o) || this.isBefore(r, o);
      };
    };
  });
})(La);
var cm = La.exports;
const dm = /* @__PURE__ */ _t(cm);
var Aa = { exports: {} };
(function(e, t) {
  (function(s, n) {
    e.exports = n();
  })(Vt, function() {
    var s = "minute", n = /[+-]\d\d(?::?\d\d)?/g, r = /([+-]|\d\d)/g;
    return function(o, i, a) {
      var l = i.prototype;
      a.utc = function(C) {
        var p = { date: C, utc: !0, args: arguments };
        return new i(p);
      }, l.utc = function(C) {
        var p = a(this.toDate(), { locale: this.$L, utc: !0 });
        return C ? p.add(this.utcOffset(), s) : p;
      }, l.local = function() {
        return a(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var c = l.parse;
      l.parse = function(C) {
        C.utc && (this.$u = !0), this.$utils().u(C.$offset) || (this.$offset = C.$offset), c.call(this, C);
      };
      var d = l.init;
      l.init = function() {
        if (this.$u) {
          var C = this.$d;
          this.$y = C.getUTCFullYear(), this.$M = C.getUTCMonth(), this.$D = C.getUTCDate(), this.$W = C.getUTCDay(), this.$H = C.getUTCHours(), this.$m = C.getUTCMinutes(), this.$s = C.getUTCSeconds(), this.$ms = C.getUTCMilliseconds();
        } else d.call(this);
      };
      var u = l.utcOffset;
      l.utcOffset = function(C, p) {
        var m = this.$utils().u;
        if (m(C)) return this.$u ? 0 : m(this.$offset) ? u.call(this) : this.$offset;
        if (typeof C == "string" && (C = function(F) {
          F === void 0 && (F = "");
          var S = F.match(n);
          if (!S) return null;
          var P = ("" + S[0]).match(r) || ["-", 0, 0], W = P[0], O = 60 * +P[1] + +P[2];
          return O === 0 ? 0 : W === "+" ? O : -O;
        }(C), C === null)) return this;
        var v = Math.abs(C) <= 16 ? 60 * C : C, b = this;
        if (p) return b.$offset = v, b.$u = C === 0, b;
        if (C !== 0) {
          var y = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (b = this.local().add(v + y, s)).$offset = v, b.$x.$localOffset = y;
        } else b = this.utc();
        return b;
      };
      var h = l.format;
      l.format = function(C) {
        var p = C || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return h.call(this, p);
      }, l.valueOf = function() {
        var C = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * C;
      }, l.isUTC = function() {
        return !!this.$u;
      }, l.toISOString = function() {
        return this.toDate().toISOString();
      }, l.toString = function() {
        return this.toDate().toUTCString();
      };
      var g = l.toDate;
      l.toDate = function(C) {
        return C === "s" && this.$offset ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : g.call(this);
      };
      var f = l.diff;
      l.diff = function(C, p, m) {
        if (C && this.$u === C.$u) return f.call(this, C, p, m);
        var v = this.local(), b = a(C).local();
        return f.call(v, b, p, m);
      };
    };
  });
})(Aa);
var um = Aa.exports;
const hm = /* @__PURE__ */ _t(um);
var ka = { exports: {} };
(function(e, t) {
  (function(s, n) {
    e.exports = n();
  })(Vt, function() {
    var s = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
    return function(r, o, i) {
      var a, l = function(h, g, f) {
        f === void 0 && (f = {});
        var C = new Date(h), p = function(m, v) {
          v === void 0 && (v = {});
          var b = v.timeZoneName || "short", y = m + "|" + b, F = n[y];
          return F || (F = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: m, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: b }), n[y] = F), F;
        }(g, f);
        return p.formatToParts(C);
      }, c = function(h, g) {
        for (var f = l(h, g), C = [], p = 0; p < f.length; p += 1) {
          var m = f[p], v = m.type, b = m.value, y = s[v];
          y >= 0 && (C[y] = parseInt(b, 10));
        }
        var F = C[3], S = F === 24 ? 0 : F, P = C[0] + "-" + C[1] + "-" + C[2] + " " + S + ":" + C[4] + ":" + C[5] + ":000", W = +h;
        return (i.utc(P).valueOf() - (W -= W % 1e3)) / 6e4;
      }, d = o.prototype;
      d.tz = function(h, g) {
        h === void 0 && (h = a);
        var f, C = this.utcOffset(), p = this.toDate(), m = p.toLocaleString("en-US", { timeZone: h }), v = Math.round((p - new Date(m)) / 1e3 / 60), b = 15 * -Math.round(p.getTimezoneOffset() / 15) - v;
        if (!Number(b)) f = this.utcOffset(0, g);
        else if (f = i(m, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(b, !0), g) {
          var y = f.utcOffset();
          f = f.add(C - y, "minute");
        }
        return f.$x.$timezone = h, f;
      }, d.offsetName = function(h) {
        var g = this.$x.$timezone || i.tz.guess(), f = l(this.valueOf(), g, { timeZoneName: h }).find(function(C) {
          return C.type.toLowerCase() === "timezonename";
        });
        return f && f.value;
      };
      var u = d.startOf;
      d.startOf = function(h, g) {
        if (!this.$x || !this.$x.$timezone) return u.call(this, h, g);
        var f = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return u.call(f, h, g).tz(this.$x.$timezone, !0);
      }, i.tz = function(h, g, f) {
        var C = f && g, p = f || g || a, m = c(+i(), p);
        if (typeof h != "string") return i(h).tz(p);
        var v = function(S, P, W) {
          var O = S - 60 * P * 1e3, L = c(O, W);
          if (P === L) return [O, P];
          var D = c(O -= 60 * (L - P) * 1e3, W);
          return L === D ? [O, L] : [S - 60 * Math.min(L, D) * 1e3, Math.max(L, D)];
        }(i.utc(h, C).valueOf(), m, p), b = v[0], y = v[1], F = i(b).utcOffset(y);
        return F.$x.$timezone = p, F;
      }, i.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, i.tz.setDefault = function(h) {
        a = h;
      };
    };
  });
})(ka);
var gm = ka.exports;
const fm = /* @__PURE__ */ _t(gm);
var Ha = { exports: {} };
(function(e, t) {
  (function(s, n) {
    e.exports = n();
  })(Vt, function() {
    var s = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d/, o = /\d\d/, i = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, l = {}, c = function(p) {
      return (p = +p) + (p > 68 ? 1900 : 2e3);
    }, d = function(p) {
      return function(m) {
        this[p] = +m;
      };
    }, u = [/[+-]\d\d:?(\d\d)?|Z/, function(p) {
      (this.zone || (this.zone = {})).offset = function(m) {
        if (!m || m === "Z") return 0;
        var v = m.match(/([+-]|\d\d)/g), b = 60 * v[1] + (+v[2] || 0);
        return b === 0 ? 0 : v[0] === "+" ? -b : b;
      }(p);
    }], h = function(p) {
      var m = l[p];
      return m && (m.indexOf ? m : m.s.concat(m.f));
    }, g = function(p, m) {
      var v, b = l.meridiem;
      if (b) {
        for (var y = 1; y <= 24; y += 1) if (p.indexOf(b(y, 0, m)) > -1) {
          v = y > 12;
          break;
        }
      } else v = p === (m ? "pm" : "PM");
      return v;
    }, f = { A: [a, function(p) {
      this.afternoon = g(p, !1);
    }], a: [a, function(p) {
      this.afternoon = g(p, !0);
    }], Q: [r, function(p) {
      this.month = 3 * (p - 1) + 1;
    }], S: [r, function(p) {
      this.milliseconds = 100 * +p;
    }], SS: [o, function(p) {
      this.milliseconds = 10 * +p;
    }], SSS: [/\d{3}/, function(p) {
      this.milliseconds = +p;
    }], s: [i, d("seconds")], ss: [i, d("seconds")], m: [i, d("minutes")], mm: [i, d("minutes")], H: [i, d("hours")], h: [i, d("hours")], HH: [i, d("hours")], hh: [i, d("hours")], D: [i, d("day")], DD: [o, d("day")], Do: [a, function(p) {
      var m = l.ordinal, v = p.match(/\d+/);
      if (this.day = v[0], m) for (var b = 1; b <= 31; b += 1) m(b).replace(/\[|\]/g, "") === p && (this.day = b);
    }], w: [i, d("week")], ww: [o, d("week")], M: [i, d("month")], MM: [o, d("month")], MMM: [a, function(p) {
      var m = h("months"), v = (h("monthsShort") || m.map(function(b) {
        return b.slice(0, 3);
      })).indexOf(p) + 1;
      if (v < 1) throw new Error();
      this.month = v % 12 || v;
    }], MMMM: [a, function(p) {
      var m = h("months").indexOf(p) + 1;
      if (m < 1) throw new Error();
      this.month = m % 12 || m;
    }], Y: [/[+-]?\d+/, d("year")], YY: [o, function(p) {
      this.year = c(p);
    }], YYYY: [/\d{4}/, d("year")], Z: u, ZZ: u };
    function C(p) {
      var m, v;
      m = p, v = l && l.formats;
      for (var b = (p = m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, D, G) {
        var T = G && G.toUpperCase();
        return D || v[G] || s[G] || v[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(I, x, E) {
          return x || E.slice(1);
        });
      })).match(n), y = b.length, F = 0; F < y; F += 1) {
        var S = b[F], P = f[S], W = P && P[0], O = P && P[1];
        b[F] = O ? { regex: W, parser: O } : S.replace(/^\[|\]$/g, "");
      }
      return function(L) {
        for (var D = {}, G = 0, T = 0; G < y; G += 1) {
          var I = b[G];
          if (typeof I == "string") T += I.length;
          else {
            var x = I.regex, E = I.parser, A = L.slice(T), R = x.exec(A)[0];
            E.call(D, R), L = L.replace(R, "");
          }
        }
        return function(_) {
          var B = _.afternoon;
          if (B !== void 0) {
            var $ = _.hours;
            B ? $ < 12 && (_.hours += 12) : $ === 12 && (_.hours = 0), delete _.afternoon;
          }
        }(D), D;
      };
    }
    return function(p, m, v) {
      v.p.customParseFormat = !0, p && p.parseTwoDigitYear && (c = p.parseTwoDigitYear);
      var b = m.prototype, y = b.parse;
      b.parse = function(F) {
        var S = F.date, P = F.utc, W = F.args;
        this.$u = P;
        var O = W[1];
        if (typeof O == "string") {
          var L = W[2] === !0, D = W[3] === !0, G = L || D, T = W[2];
          D && (T = W[2]), l = this.$locale(), !L && T && (l = v.Ls[T]), this.$d = function(A, R, _, B) {
            try {
              if (["x", "X"].indexOf(R) > -1) return new Date((R === "X" ? 1e3 : 1) * A);
              var $ = C(R)(A), Z = $.year, U = $.month, z = $.day, q = $.hours, Q = $.minutes, se = $.seconds, ye = $.milliseconds, Fe = $.zone, ne = $.week, Se = /* @__PURE__ */ new Date(), Le = z || (Z || U ? 1 : Se.getDate()), ae = Z || Se.getFullYear(), he = 0;
              Z && !U || (he = U > 0 ? U - 1 : Se.getMonth());
              var fe, Re = q || 0, re = Q || 0, me = se || 0, ve = ye || 0;
              return Fe ? new Date(Date.UTC(ae, he, Le, Re, re, me, ve + 60 * Fe.offset * 1e3)) : _ ? new Date(Date.UTC(ae, he, Le, Re, re, me, ve)) : (fe = new Date(ae, he, Le, Re, re, me, ve), ne && (fe = B(fe).week(ne).toDate()), fe);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(S, O, P, v), this.init(), T && T !== !0 && (this.$L = this.locale(T).$L), G && S != this.format(O) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
        } else if (O instanceof Array) for (var I = O.length, x = 1; x <= I; x += 1) {
          W[1] = O[x - 1];
          var E = v.apply(this, W);
          if (E.isValid()) {
            this.$d = E.$d, this.$L = E.$L, this.init();
            break;
          }
          x === I && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else y.call(this, F);
      };
    };
  });
})(Ha);
var pm = Ha.exports;
const Cm = /* @__PURE__ */ _t(pm);
ot.extend(hm);
ot.extend(fm);
ot.extend(Cm);
ot.extend(lm);
ot.extend(dm);
const mm = ["YYYY-MM-DD", "YYYY/MM/DD", "YYYYMMDD", "YYYY-MM-DD HH:mm:ss", "YYYY-MM-DDTHH:mm:ss"];
let hn = "Asia/Seoul";
const gn = "YYYY-MM-DD";
function wm(e) {
  e.timezone && (hn = e.timezone);
}
const vm = (e) => {
  const t = ot(e);
  return t.isValid() ? t : null;
};
function bm(e = gn) {
  return ot().tz(hn).format(e);
}
function ym(e, t, s, n = gn) {
  return ot(e).tz(hn).add(t, s).format(n);
}
function Sm(e, t = gn) {
  return e ? ot(e).tz(hn).format(t) : (console.error("날짜를 입력해주세요."), null);
}
function Rm(e, t = mm) {
  if (typeof e != "string" || !t || t.length === 0)
    return !1;
  for (const s of t)
    if (ot(e, s, !0).isValid())
      return !0;
  return !1;
}
const Xm = {
  defaultDateFormat: gn,
  setDateConfig: wm,
  parseDate: vm,
  getCurrentDate: bm,
  calculateDate: ym,
  getFormattedDate: Sm,
  isValidDateFormat: Rm
}, xm = /^[a-zA-Z]+$/, Fm = /^[a-zA-Z0-9-]+$/, Dm = /[^a-zA-Z0-9!@#$%^&*(),.?":;{}|<>~`'[\]\\/\-_+=]/g, Pm = /[\u3131-\u318E\uAC00-\uD7A3]/g, Em = /(?:www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(?:\.[a-zA-Z]{2,})?$/, Tm = { REG_ALLOW_ENG: xm, REG_ALLOW_ENG_NUM_HYPHEN: Fm, REG_ALLOW_ENG_NUM_AND_SPECIAL_CHARS: Dm, REG_ALLOW_KOR: Pm, REG_DOMAIN: Em }, Mm = [void 0, null, "", "undefined"], Im = (e) => {
  var s;
  const t = (s = e == null ? void 0 : e.toString()) == null ? void 0 : s.trim();
  return !!Mm.includes(t);
}, Lm = (e) => {
  if (typeof e != "string")
    throw Error("Invalid stringData type");
  return e.replace(Tm.REG_ALLOW_KOR, "");
}, Am = (e, t) => e.replace(/{([a-zA-Z]+)}/g, (s, n) => t[n]), Qm = {
  isEmpty: Im,
  removeKoreanCharacters: Lm,
  resolvePathVariable: Am
}, Ao = ["get", "post", "put", "delete", "patch"], km = (e, t, s) => {
  let n = e;
  return t || (n = n.replace(/\/accounts\/\{accountId\}/, "")), s || (n = n.replace(/\/tenants\/\{tenantId\}/, "")), n = n.replace(/\{(\w+)\}/g, (r, o) => ({
    accountId: t,
    tenantId: s
  })[o] ?? `{${o}}`), n;
}, Jm = (e, t, s, n) => {
  if (!Ao.includes(t))
    throw new Error(`Unsupported HTTP method: ${t}. Supported methods are: ${Ao.join(", ")}`);
  return (r, ...o) => {
    const i = km(r, s, n);
    return e[t](i, ...o);
  };
}, ew = Object.freeze({
  SERVICE_GROUP_UUID: "STRATO_SG_UUID",
  SERVICE_GROUP_NAME: "STRATO_SG_NAME",
  PROJECT: "STRATO_INFRA_PROJECT",
  // project
  PER_PAGES: "STRATO_PER_PAGES"
}), tw = Object.freeze({
  STRATO_SERVICE_MENUS: "STRATO_SG_MENUS",
  STRATO_INFRA_MENU: "STRATO_INFRA_MENU",
  STRATO_INFRA_MENU_FLAT: "STRATO_INFRA_MENU_FLAT",
  STRATO_TENANT_SELECTABLE: "STRATO_TENANT_SELECTABLE"
}), sw = Object.freeze({
  LOCAL_ACCESS: "local_access_token",
  LOCAL_REFRESH: "local_refresh_token"
}), nw = {
  SLIDE_PANEL: "SLIDE_PANEL"
}, rw = Object.freeze([
  { text: "10", value: 10 },
  { text: "15", value: 15 },
  { text: "20", value: 20 }
]);
export {
  nw as COMPONENT_KEY,
  ew as LOCALSTORAGE_KEY,
  rw as PER_PAGES,
  Zm as SAccordionMenu,
  Bm as SAlert,
  jm as SAvatar,
  tt as SBtn,
  Vm as SConfirm,
  Km as SDataTable,
  qm as SDropdownButton,
  tw as SESSIONSTORAGE_KEY,
  Ym as SEmpty,
  Wm as SFileInputBtn,
  zm as SGlobalProgress,
  it as SIcon,
  Um as SImg,
  Nm as SModal,
  ol as SProgressCircular,
  $m as SProgressStages,
  Gm as SRefreshBtn,
  _m as SSimpleTooltip,
  sw as TOKEN_KEY,
  Xm as dateUtil,
  Tm as regexUtil,
  Jm as standardApi,
  Qm as stringUtil
};
