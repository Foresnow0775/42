var Br = (t, e, r) => {
    if (!e.has(t))
        throw TypeError("Cannot " + r)
}
;
var Q = (t, e, r) => (Br(t, e, "read from private field"),
r ? r.call(t) : e.get(t))
  , tt = (t, e, r) => {
    if (e.has(t))
        throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(t) : e.set(t, r)
}
  , st = (t, e, r, n) => (Br(t, e, "write to private field"),
n ? n.call(t, r) : e.set(t, r),
r);
var lt = (t, e, r) => (Br(t, e, "access private method"),
r);
import {Z as Mi, a0 as Pi, a1 as Un, a2 as ki, a3 as Oa, m as vt, d, a4 as Di, c as Ne, r as P, t as j, a5 as ja, a6 as Fn, $ as Ut, a7 as gt, N as dn, _ as N, O as xe, a8 as fn, a9 as hn, aa as Ea, ab as Ai, T as br, Q as cr, ac as mn, ad as pn, K as ve, M as X, j as i, e as G, i as at, k as ht, h as ge, ae as re, af as Ii, ag as Ri, f as oe, ah as _a, ai as Na, aj as Ma, ak as Pa, al as ka, am as Da, a as F, an as vn, ao as Li, u as Ft, A as bt, y as Wn, B as Vn, D as Ui, s as Bn, v as Fi, b as wr, G as Wi, ap as Hn, z as Vi, p as wt, aq as Bi, P as At, ar as Aa, as as Hi, at as qi, au as qn, av as zi, V as Yi, aw as Ia, ax as Ra, ay as Gi, az as Ki, aA as Xi, aB as Qi, aC as Zi, aD as Ji, aE as es, q as mt, aF as La, H as xr, I as Ua} from "./index-1b63b24c.js";
var Ye, Ge, we, Fe, ft, ir, Lt, Yr, Ca, ts = (Ca = class extends Mi {
    constructor(e, r) {
        super();
        tt(this, ft);
        tt(this, Lt);
        tt(this, Ye, void 0);
        tt(this, Ge, void 0);
        tt(this, we, void 0);
        tt(this, Fe, void 0);
        st(this, Ye, e),
        this.setOptions(r),
        this.bindMethods(),
        lt(this, ft, ir).call(this)
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(e) {
        var n;
        const r = this.options;
        this.options = Q(this, Ye).defaultMutationOptions(e),
        Pi(r, this.options) || Q(this, Ye).getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: Q(this, we),
            observer: this
        }),
        r != null && r.mutationKey && this.options.mutationKey && Un(r.mutationKey) !== Un(this.options.mutationKey) ? this.reset() : (n = Q(this, we)) == null || n.setOptions(this.options)
    }
    onUnsubscribe() {
        var e;
        this.hasListeners() || (e = Q(this, we)) == null || e.removeObserver(this)
    }
    onMutationUpdate(e) {
        lt(this, ft, ir).call(this),
        lt(this, Lt, Yr).call(this, e)
    }
    getCurrentResult() {
        return Q(this, Ge)
    }
    reset() {
        var e;
        (e = Q(this, we)) == null || e.removeObserver(this),
        st(this, we, void 0),
        lt(this, ft, ir).call(this),
        lt(this, Lt, Yr).call(this)
    }
    mutate(e, r) {
        var n;
        return st(this, Fe, r),
        (n = Q(this, we)) == null || n.removeObserver(this),
        st(this, we, Q(this, Ye).getMutationCache().build(Q(this, Ye), this.options)),
        Q(this, we).addObserver(this),
        Q(this, we).execute(e)
    }
}
,
Ye = new WeakMap,
Ge = new WeakMap,
we = new WeakMap,
Fe = new WeakMap,
ft = new WeakSet,
ir = function() {
    var r;
    const e = ((r = Q(this, we)) == null ? void 0 : r.state) ?? ki();
    st(this, Ge, {
        ...e,
        isPending: e.status === "pending",
        isSuccess: e.status === "success",
        isError: e.status === "error",
        isIdle: e.status === "idle",
        mutate: this.mutate,
        reset: this.reset
    })
}
,
Lt = new WeakSet,
Yr = function(e) {
    Oa.batch( () => {
        var r, n, a, o, s, l, c, u;
        if (Q(this, Fe) && this.hasListeners()) {
            const f = Q(this, Ge).variables
              , g = Q(this, Ge).context;
            (e == null ? void 0 : e.type) === "success" ? ((n = (r = Q(this, Fe)).onSuccess) == null || n.call(r, e.data, f, g),
            (o = (a = Q(this, Fe)).onSettled) == null || o.call(a, e.data, null, f, g)) : (e == null ? void 0 : e.type) === "error" && ((l = (s = Q(this, Fe)).onError) == null || l.call(s, e.error, f, g),
            (u = (c = Q(this, Fe)).onSettled) == null || u.call(c, void 0, e.error, f, g))
        }
        this.listeners.forEach(f => {
            f(Q(this, Ge))
        }
        )
    }
    )
}
,
Ca);
function yr(t, e) {
    const r = vt(e)
      , [n] = d.useState( () => new ts(r,t));
    d.useEffect( () => {
        n.setOptions(t)
    }
    , [n, t]);
    const a = d.useSyncExternalStore(d.useCallback(s => n.subscribe(Oa.batchCalls(s)), [n]), () => n.getCurrentResult(), () => n.getCurrentResult())
      , o = d.useCallback( (s, l) => {
        n.mutate(s, l).catch(rs)
    }
    , [n]);
    if (a.error && Di(n.options.throwOnError, [a.error]))
        throw a.error;
    return {
        ...a,
        mutate: o,
        mutateAsync: a.mutate
    }
}
function rs() {}
const zn = Ne("ArrowRight", [["line", {
    x1: "5",
    x2: "19",
    y1: "12",
    y2: "12",
    key: "13b5wn"
}], ["polyline", {
    points: "12 5 19 12 12 19",
    key: "sfr3i6"
}]])
  , ns = Ne("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["polyline", {
    points: "22 4 12 14.01 9 11.01",
    key: "6xbx8j"
}]])
  , as = Ne("ChevronDown", [["polyline", {
    points: "6 9 12 15 18 9",
    key: "1do0m2"
}]])
  , _m = Ne("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]])
  , os = Ne("Ghost", [["path", {
    d: "M9 10h.01",
    key: "qbtxuw"
}], ["path", {
    d: "M15 10h.01",
    key: "1qmjsl"
}], ["path", {
    d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
    key: "uwwb07"
}]])
  , Nm = Ne("Loader2", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]])
  , is = Ne("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]])
  , ss = Ne("MapPin", [["path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
    key: "2oe9fu"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]])
  , ls = Ne("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]])
  , cs = Ne("Triangle", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
    key: "c3ski4"
}]])
  , us = Ne("UserCog", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["circle", {
    cx: "19",
    cy: "11",
    r: "2",
    key: "1rxg02"
}], ["path", {
    d: "M19 8v1",
    key: "1iffrw"
}], ["path", {
    d: "M19 13v1",
    key: "z4xc62"
}], ["path", {
    d: "m21.6 9.5-.87.5",
    key: "6lxupl"
}], ["path", {
    d: "m17.27 12-.87.5",
    key: "1rwhxx"
}], ["path", {
    d: "m21.6 12.5-.87-.5",
    key: "agvc9a"
}], ["path", {
    d: "m17.27 10-.87-.5",
    key: "12d57s"
}]]);
function se(t) {
    if (t === null || t === !0 || t === !1)
        return NaN;
    var e = Number(t);
    return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
}
function ds(t, e) {
    P(2, arguments);
    var r = j(t)
      , n = se(e);
    return isNaN(n) ? new Date(NaN) : (n && r.setDate(r.getDate() + n),
    r)
}
function Fa(t, e) {
    P(2, arguments);
    var r = j(t)
      , n = se(e);
    if (isNaN(n))
        return new Date(NaN);
    if (!n)
        return r;
    var a = r.getDate()
      , o = new Date(r.getTime());
    o.setMonth(r.getMonth() + n + 1, 0);
    var s = o.getDate();
    return a >= s ? o : (r.setFullYear(o.getFullYear(), o.getMonth(), a),
    r)
}
function fs(t, e) {
    if (P(2, arguments),
    !e || ja(e) !== "object")
        return new Date(NaN);
    var r = e.years ? se(e.years) : 0
      , n = e.months ? se(e.months) : 0
      , a = e.weeks ? se(e.weeks) : 0
      , o = e.days ? se(e.days) : 0
      , s = e.hours ? se(e.hours) : 0
      , l = e.minutes ? se(e.minutes) : 0
      , c = e.seconds ? se(e.seconds) : 0
      , u = j(t)
      , f = n || r ? Fa(u, n + r * 12) : u
      , g = o || a ? ds(f, o + a * 7) : f
      , m = l + s * 60
      , p = c + m * 60
      , h = p * 1e3
      , v = new Date(g.getTime() + h);
    return v
}
function hs(t, e) {
    P(2, arguments);
    var r = j(t).getTime()
      , n = se(e);
    return new Date(r + n)
}
var ms = {};
function xt() {
    return ms
}
function nt(t) {
    var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return e.setUTCFullYear(t.getFullYear()),
    t.getTime() - e.getTime()
}
var ps = 864e5;
function sr(t, e) {
    P(2, arguments);
    var r = Fn(t)
      , n = Fn(e)
      , a = r.getTime() - nt(r)
      , o = n.getTime() - nt(n);
    return Math.round((a - o) / ps)
}
function kt(t, e) {
    P(2, arguments);
    var r = j(t)
      , n = j(e)
      , a = r.getTime() - n.getTime();
    return a < 0 ? -1 : a > 0 ? 1 : a
}
function vs(t) {
    return P(1, arguments),
    t instanceof Date || ja(t) === "object" && Object.prototype.toString.call(t) === "[object Date]"
}
function gs(t) {
    if (P(1, arguments),
    !vs(t) && typeof t != "number")
        return !1;
    var e = j(t);
    return !isNaN(Number(e))
}
function bs(t, e) {
    P(2, arguments);
    var r = j(t)
      , n = j(e)
      , a = r.getFullYear() - n.getFullYear()
      , o = r.getMonth() - n.getMonth();
    return a * 12 + o
}
function Yn(t, e) {
    var r = t.getFullYear() - e.getFullYear() || t.getMonth() - e.getMonth() || t.getDate() - e.getDate() || t.getHours() - e.getHours() || t.getMinutes() - e.getMinutes() || t.getSeconds() - e.getSeconds() || t.getMilliseconds() - e.getMilliseconds();
    return r < 0 ? -1 : r > 0 ? 1 : r
}
function Qt(t, e) {
    P(2, arguments);
    var r = j(t)
      , n = j(e)
      , a = Yn(r, n)
      , o = Math.abs(sr(r, n));
    r.setDate(r.getDate() - a * o);
    var s = +(Yn(r, n) === -a)
      , l = a * (o - s);
    return l === 0 ? 0 : l
}
function ws(t, e) {
    return P(2, arguments),
    j(t).getTime() - j(e).getTime()
}
var Gn = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
}
  , xs = "trunc";
function ys(t) {
    return t ? Gn[t] : Gn[xs]
}
function $s(t) {
    P(1, arguments);
    var e = j(t);
    return e.setHours(23, 59, 59, 999),
    e
}
function ur(t) {
    P(1, arguments);
    var e = j(t)
      , r = e.getMonth();
    return e.setFullYear(e.getFullYear(), r + 1, 0),
    e.setHours(23, 59, 59, 999),
    e
}
function Ts(t) {
    P(1, arguments);
    var e = j(t);
    return $s(e).getTime() === ur(e).getTime()
}
function Wa(t, e) {
    P(2, arguments);
    var r = j(t), n = j(e), a = kt(r, n), o = Math.abs(bs(r, n)), s;
    if (o < 1)
        s = 0;
    else {
        r.getMonth() === 1 && r.getDate() > 27 && r.setDate(30),
        r.setMonth(r.getMonth() - a * o);
        var l = kt(r, n) === -a;
        Ts(j(t)) && o === 1 && kt(t, n) === 1 && (l = !1),
        s = a * (o - Number(l))
    }
    return s === 0 ? 0 : s
}
function Ss(t, e, r) {
    P(2, arguments);
    var n = ws(t, e) / 1e3;
    return ys(r == null ? void 0 : r.roundingMethod)(n)
}
function Cs(t, e) {
    var r;
    P(1, arguments);
    var n = t || {}
      , a = j(n.start)
      , o = j(n.end)
      , s = o.getTime();
    if (!(a.getTime() <= s))
        throw new RangeError("Invalid interval");
    var l = []
      , c = a;
    c.setHours(0, 0, 0, 0);
    var u = Number((r = e == null ? void 0 : e.step) !== null && r !== void 0 ? r : 1);
    if (u < 1 || isNaN(u))
        throw new RangeError("`options.step` must be a number greater than 1");
    for (; c.getTime() <= s; )
        l.push(j(c)),
        c.setDate(c.getDate() + u),
        c.setHours(0, 0, 0, 0);
    return l
}
function Os(t) {
    P(1, arguments);
    var e = t || {}
      , r = j(e.start)
      , n = j(e.end)
      , a = n.getTime()
      , o = [];
    if (!(r.getTime() <= a))
        throw new RangeError("Invalid interval");
    var s = r;
    for (s.setHours(0, 0, 0, 0),
    s.setDate(1); s.getTime() <= a; )
        o.push(j(s)),
        s.setMonth(s.getMonth() + 1);
    return o
}
function Gr(t) {
    P(1, arguments);
    var e = j(t);
    return e.setDate(1),
    e.setHours(0, 0, 0, 0),
    e
}
function js(t, e) {
    P(2, arguments);
    var r = se(e);
    return hs(t, -r)
}
var Es = 864e5;
function _s(t) {
    P(1, arguments);
    var e = j(t)
      , r = e.getTime();
    e.setUTCMonth(0, 1),
    e.setUTCHours(0, 0, 0, 0);
    var n = e.getTime()
      , a = r - n;
    return Math.floor(a / Es) + 1
}
function dr(t) {
    P(1, arguments);
    var e = 1
      , r = j(t)
      , n = r.getUTCDay()
      , a = (n < e ? 7 : 0) + n - e;
    return r.setUTCDate(r.getUTCDate() - a),
    r.setUTCHours(0, 0, 0, 0),
    r
}
function Va(t) {
    P(1, arguments);
    var e = j(t)
      , r = e.getUTCFullYear()
      , n = new Date(0);
    n.setUTCFullYear(r + 1, 0, 4),
    n.setUTCHours(0, 0, 0, 0);
    var a = dr(n)
      , o = new Date(0);
    o.setUTCFullYear(r, 0, 4),
    o.setUTCHours(0, 0, 0, 0);
    var s = dr(o);
    return e.getTime() >= a.getTime() ? r + 1 : e.getTime() >= s.getTime() ? r : r - 1
}
function Ns(t) {
    P(1, arguments);
    var e = Va(t)
      , r = new Date(0);
    r.setUTCFullYear(e, 0, 4),
    r.setUTCHours(0, 0, 0, 0);
    var n = dr(r);
    return n
}
var Ms = 6048e5;
function Ps(t) {
    P(1, arguments);
    var e = j(t)
      , r = dr(e).getTime() - Ns(e).getTime();
    return Math.round(r / Ms) + 1
}
function fr(t, e) {
    var r, n, a, o, s, l, c, u;
    P(1, arguments);
    var f = xt()
      , g = se((r = (n = (a = (o = e == null ? void 0 : e.weekStartsOn) !== null && o !== void 0 ? o : e == null || (s = e.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : f.weekStartsOn) !== null && n !== void 0 ? n : (c = f.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && r !== void 0 ? r : 0);
    if (!(g >= 0 && g <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = j(t)
      , p = m.getUTCDay()
      , h = (p < g ? 7 : 0) + p - g;
    return m.setUTCDate(m.getUTCDate() - h),
    m.setUTCHours(0, 0, 0, 0),
    m
}
function Ba(t, e) {
    var r, n, a, o, s, l, c, u;
    P(1, arguments);
    var f = j(t)
      , g = f.getUTCFullYear()
      , m = xt()
      , p = se((r = (n = (a = (o = e == null ? void 0 : e.firstWeekContainsDate) !== null && o !== void 0 ? o : e == null || (s = e.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : m.firstWeekContainsDate) !== null && n !== void 0 ? n : (c = m.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
    if (!(p >= 1 && p <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var h = new Date(0);
    h.setUTCFullYear(g + 1, 0, p),
    h.setUTCHours(0, 0, 0, 0);
    var v = fr(h, e)
      , b = new Date(0);
    b.setUTCFullYear(g, 0, p),
    b.setUTCHours(0, 0, 0, 0);
    var y = fr(b, e);
    return f.getTime() >= v.getTime() ? g + 1 : f.getTime() >= y.getTime() ? g : g - 1
}
function ks(t, e) {
    var r, n, a, o, s, l, c, u;
    P(1, arguments);
    var f = xt()
      , g = se((r = (n = (a = (o = e == null ? void 0 : e.firstWeekContainsDate) !== null && o !== void 0 ? o : e == null || (s = e.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : f.firstWeekContainsDate) !== null && n !== void 0 ? n : (c = f.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && r !== void 0 ? r : 1)
      , m = Ba(t, e)
      , p = new Date(0);
    p.setUTCFullYear(m, 0, g),
    p.setUTCHours(0, 0, 0, 0);
    var h = fr(p, e);
    return h
}
var Ds = 6048e5;
function As(t, e) {
    P(1, arguments);
    var r = j(t)
      , n = fr(r, e).getTime() - ks(r, e).getTime();
    return Math.round(n / Ds) + 1
}
function U(t, e) {
    for (var r = t < 0 ? "-" : "", n = Math.abs(t).toString(); n.length < e; )
        n = "0" + n;
    return r + n
}
var Is = {
    y: function(e, r) {
        var n = e.getUTCFullYear()
          , a = n > 0 ? n : 1 - n;
        return U(r === "yy" ? a % 100 : a, r.length)
    },
    M: function(e, r) {
        var n = e.getUTCMonth();
        return r === "M" ? String(n + 1) : U(n + 1, 2)
    },
    d: function(e, r) {
        return U(e.getUTCDate(), r.length)
    },
    a: function(e, r) {
        var n = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (r) {
        case "a":
        case "aa":
            return n.toUpperCase();
        case "aaa":
            return n;
        case "aaaaa":
            return n[0];
        case "aaaa":
        default:
            return n === "am" ? "a.m." : "p.m."
        }
    },
    h: function(e, r) {
        return U(e.getUTCHours() % 12 || 12, r.length)
    },
    H: function(e, r) {
        return U(e.getUTCHours(), r.length)
    },
    m: function(e, r) {
        return U(e.getUTCMinutes(), r.length)
    },
    s: function(e, r) {
        return U(e.getUTCSeconds(), r.length)
    },
    S: function(e, r) {
        var n = r.length
          , a = e.getUTCMilliseconds()
          , o = Math.floor(a * Math.pow(10, n - 3));
        return U(o, r.length)
    }
};
const qe = Is;
var ct = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
}
  , Rs = {
    G: function(e, r, n) {
        var a = e.getUTCFullYear() > 0 ? 1 : 0;
        switch (r) {
        case "G":
        case "GG":
        case "GGG":
            return n.era(a, {
                width: "abbreviated"
            });
        case "GGGGG":
            return n.era(a, {
                width: "narrow"
            });
        case "GGGG":
        default:
            return n.era(a, {
                width: "wide"
            })
        }
    },
    y: function(e, r, n) {
        if (r === "yo") {
            var a = e.getUTCFullYear()
              , o = a > 0 ? a : 1 - a;
            return n.ordinalNumber(o, {
                unit: "year"
            })
        }
        return qe.y(e, r)
    },
    Y: function(e, r, n, a) {
        var o = Ba(e, a)
          , s = o > 0 ? o : 1 - o;
        if (r === "YY") {
            var l = s % 100;
            return U(l, 2)
        }
        return r === "Yo" ? n.ordinalNumber(s, {
            unit: "year"
        }) : U(s, r.length)
    },
    R: function(e, r) {
        var n = Va(e);
        return U(n, r.length)
    },
    u: function(e, r) {
        var n = e.getUTCFullYear();
        return U(n, r.length)
    },
    Q: function(e, r, n) {
        var a = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (r) {
        case "Q":
            return String(a);
        case "QQ":
            return U(a, 2);
        case "Qo":
            return n.ordinalNumber(a, {
                unit: "quarter"
            });
        case "QQQ":
            return n.quarter(a, {
                width: "abbreviated",
                context: "formatting"
            });
        case "QQQQQ":
            return n.quarter(a, {
                width: "narrow",
                context: "formatting"
            });
        case "QQQQ":
        default:
            return n.quarter(a, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    q: function(e, r, n) {
        var a = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (r) {
        case "q":
            return String(a);
        case "qq":
            return U(a, 2);
        case "qo":
            return n.ordinalNumber(a, {
                unit: "quarter"
            });
        case "qqq":
            return n.quarter(a, {
                width: "abbreviated",
                context: "standalone"
            });
        case "qqqqq":
            return n.quarter(a, {
                width: "narrow",
                context: "standalone"
            });
        case "qqqq":
        default:
            return n.quarter(a, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    M: function(e, r, n) {
        var a = e.getUTCMonth();
        switch (r) {
        case "M":
        case "MM":
            return qe.M(e, r);
        case "Mo":
            return n.ordinalNumber(a + 1, {
                unit: "month"
            });
        case "MMM":
            return n.month(a, {
                width: "abbreviated",
                context: "formatting"
            });
        case "MMMMM":
            return n.month(a, {
                width: "narrow",
                context: "formatting"
            });
        case "MMMM":
        default:
            return n.month(a, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    L: function(e, r, n) {
        var a = e.getUTCMonth();
        switch (r) {
        case "L":
            return String(a + 1);
        case "LL":
            return U(a + 1, 2);
        case "Lo":
            return n.ordinalNumber(a + 1, {
                unit: "month"
            });
        case "LLL":
            return n.month(a, {
                width: "abbreviated",
                context: "standalone"
            });
        case "LLLLL":
            return n.month(a, {
                width: "narrow",
                context: "standalone"
            });
        case "LLLL":
        default:
            return n.month(a, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    w: function(e, r, n, a) {
        var o = As(e, a);
        return r === "wo" ? n.ordinalNumber(o, {
            unit: "week"
        }) : U(o, r.length)
    },
    I: function(e, r, n) {
        var a = Ps(e);
        return r === "Io" ? n.ordinalNumber(a, {
            unit: "week"
        }) : U(a, r.length)
    },
    d: function(e, r, n) {
        return r === "do" ? n.ordinalNumber(e.getUTCDate(), {
            unit: "date"
        }) : qe.d(e, r)
    },
    D: function(e, r, n) {
        var a = _s(e);
        return r === "Do" ? n.ordinalNumber(a, {
            unit: "dayOfYear"
        }) : U(a, r.length)
    },
    E: function(e, r, n) {
        var a = e.getUTCDay();
        switch (r) {
        case "E":
        case "EE":
        case "EEE":
            return n.day(a, {
                width: "abbreviated",
                context: "formatting"
            });
        case "EEEEE":
            return n.day(a, {
                width: "narrow",
                context: "formatting"
            });
        case "EEEEEE":
            return n.day(a, {
                width: "short",
                context: "formatting"
            });
        case "EEEE":
        default:
            return n.day(a, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    e: function(e, r, n, a) {
        var o = e.getUTCDay()
          , s = (o - a.weekStartsOn + 8) % 7 || 7;
        switch (r) {
        case "e":
            return String(s);
        case "ee":
            return U(s, 2);
        case "eo":
            return n.ordinalNumber(s, {
                unit: "day"
            });
        case "eee":
            return n.day(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "eeeee":
            return n.day(o, {
                width: "narrow",
                context: "formatting"
            });
        case "eeeeee":
            return n.day(o, {
                width: "short",
                context: "formatting"
            });
        case "eeee":
        default:
            return n.day(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    c: function(e, r, n, a) {
        var o = e.getUTCDay()
          , s = (o - a.weekStartsOn + 8) % 7 || 7;
        switch (r) {
        case "c":
            return String(s);
        case "cc":
            return U(s, r.length);
        case "co":
            return n.ordinalNumber(s, {
                unit: "day"
            });
        case "ccc":
            return n.day(o, {
                width: "abbreviated",
                context: "standalone"
            });
        case "ccccc":
            return n.day(o, {
                width: "narrow",
                context: "standalone"
            });
        case "cccccc":
            return n.day(o, {
                width: "short",
                context: "standalone"
            });
        case "cccc":
        default:
            return n.day(o, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    i: function(e, r, n) {
        var a = e.getUTCDay()
          , o = a === 0 ? 7 : a;
        switch (r) {
        case "i":
            return String(o);
        case "ii":
            return U(o, r.length);
        case "io":
            return n.ordinalNumber(o, {
                unit: "day"
            });
        case "iii":
            return n.day(a, {
                width: "abbreviated",
                context: "formatting"
            });
        case "iiiii":
            return n.day(a, {
                width: "narrow",
                context: "formatting"
            });
        case "iiiiii":
            return n.day(a, {
                width: "short",
                context: "formatting"
            });
        case "iiii":
        default:
            return n.day(a, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    a: function(e, r, n) {
        var a = e.getUTCHours()
          , o = a / 12 >= 1 ? "pm" : "am";
        switch (r) {
        case "a":
        case "aa":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "aaa":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "aaaaa":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "aaaa":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    b: function(e, r, n) {
        var a = e.getUTCHours(), o;
        switch (a === 12 ? o = ct.noon : a === 0 ? o = ct.midnight : o = a / 12 >= 1 ? "pm" : "am",
        r) {
        case "b":
        case "bb":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "bbb":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "bbbbb":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "bbbb":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    B: function(e, r, n) {
        var a = e.getUTCHours(), o;
        switch (a >= 17 ? o = ct.evening : a >= 12 ? o = ct.afternoon : a >= 4 ? o = ct.morning : o = ct.night,
        r) {
        case "B":
        case "BB":
        case "BBB":
            return n.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "BBBBB":
            return n.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "BBBB":
        default:
            return n.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    h: function(e, r, n) {
        if (r === "ho") {
            var a = e.getUTCHours() % 12;
            return a === 0 && (a = 12),
            n.ordinalNumber(a, {
                unit: "hour"
            })
        }
        return qe.h(e, r)
    },
    H: function(e, r, n) {
        return r === "Ho" ? n.ordinalNumber(e.getUTCHours(), {
            unit: "hour"
        }) : qe.H(e, r)
    },
    K: function(e, r, n) {
        var a = e.getUTCHours() % 12;
        return r === "Ko" ? n.ordinalNumber(a, {
            unit: "hour"
        }) : U(a, r.length)
    },
    k: function(e, r, n) {
        var a = e.getUTCHours();
        return a === 0 && (a = 24),
        r === "ko" ? n.ordinalNumber(a, {
            unit: "hour"
        }) : U(a, r.length)
    },
    m: function(e, r, n) {
        return r === "mo" ? n.ordinalNumber(e.getUTCMinutes(), {
            unit: "minute"
        }) : qe.m(e, r)
    },
    s: function(e, r, n) {
        return r === "so" ? n.ordinalNumber(e.getUTCSeconds(), {
            unit: "second"
        }) : qe.s(e, r)
    },
    S: function(e, r) {
        return qe.S(e, r)
    },
    X: function(e, r, n, a) {
        var o = a._originalDate || e
          , s = o.getTimezoneOffset();
        if (s === 0)
            return "Z";
        switch (r) {
        case "X":
            return Xn(s);
        case "XXXX":
        case "XX":
            return rt(s);
        case "XXXXX":
        case "XXX":
        default:
            return rt(s, ":")
        }
    },
    x: function(e, r, n, a) {
        var o = a._originalDate || e
          , s = o.getTimezoneOffset();
        switch (r) {
        case "x":
            return Xn(s);
        case "xxxx":
        case "xx":
            return rt(s);
        case "xxxxx":
        case "xxx":
        default:
            return rt(s, ":")
        }
    },
    O: function(e, r, n, a) {
        var o = a._originalDate || e
          , s = o.getTimezoneOffset();
        switch (r) {
        case "O":
        case "OO":
        case "OOO":
            return "GMT" + Kn(s, ":");
        case "OOOO":
        default:
            return "GMT" + rt(s, ":")
        }
    },
    z: function(e, r, n, a) {
        var o = a._originalDate || e
          , s = o.getTimezoneOffset();
        switch (r) {
        case "z":
        case "zz":
        case "zzz":
            return "GMT" + Kn(s, ":");
        case "zzzz":
        default:
            return "GMT" + rt(s, ":")
        }
    },
    t: function(e, r, n, a) {
        var o = a._originalDate || e
          , s = Math.floor(o.getTime() / 1e3);
        return U(s, r.length)
    },
    T: function(e, r, n, a) {
        var o = a._originalDate || e
          , s = o.getTime();
        return U(s, r.length)
    }
};
function Kn(t, e) {
    var r = t > 0 ? "-" : "+"
      , n = Math.abs(t)
      , a = Math.floor(n / 60)
      , o = n % 60;
    if (o === 0)
        return r + String(a);
    var s = e || "";
    return r + String(a) + s + U(o, 2)
}
function Xn(t, e) {
    if (t % 60 === 0) {
        var r = t > 0 ? "-" : "+";
        return r + U(Math.abs(t) / 60, 2)
    }
    return rt(t, e)
}
function rt(t, e) {
    var r = e || ""
      , n = t > 0 ? "-" : "+"
      , a = Math.abs(t)
      , o = U(Math.floor(a / 60), 2)
      , s = U(a % 60, 2);
    return n + o + r + s
}
const Ls = Rs;
var Qn = function(e, r) {
    switch (e) {
    case "P":
        return r.date({
            width: "short"
        });
    case "PP":
        return r.date({
            width: "medium"
        });
    case "PPP":
        return r.date({
            width: "long"
        });
    case "PPPP":
    default:
        return r.date({
            width: "full"
        })
    }
}
  , Ha = function(e, r) {
    switch (e) {
    case "p":
        return r.time({
            width: "short"
        });
    case "pp":
        return r.time({
            width: "medium"
        });
    case "ppp":
        return r.time({
            width: "long"
        });
    case "pppp":
    default:
        return r.time({
            width: "full"
        })
    }
}
  , Us = function(e, r) {
    var n = e.match(/(P+)(p+)?/) || []
      , a = n[1]
      , o = n[2];
    if (!o)
        return Qn(e, r);
    var s;
    switch (a) {
    case "P":
        s = r.dateTime({
            width: "short"
        });
        break;
    case "PP":
        s = r.dateTime({
            width: "medium"
        });
        break;
    case "PPP":
        s = r.dateTime({
            width: "long"
        });
        break;
    case "PPPP":
    default:
        s = r.dateTime({
            width: "full"
        });
        break
    }
    return s.replace("{{date}}", Qn(a, r)).replace("{{time}}", Ha(o, r))
}
  , Fs = {
    p: Ha,
    P: Us
};
const Ws = Fs;
var Vs = ["D", "DD"]
  , Bs = ["YY", "YYYY"];
function Hs(t) {
    return Vs.indexOf(t) !== -1
}
function qs(t) {
    return Bs.indexOf(t) !== -1
}
function Zn(t, e, r) {
    if (t === "YYYY")
        throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "YY")
        throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "D")
        throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "DD")
        throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
}
var zs = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , Ys = function(e, r, n) {
    var a, o = zs[e];
    return typeof o == "string" ? a = o : r === 1 ? a = o.one : a = o.other.replace("{{count}}", r.toString()),
    n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + a : a + " ago" : a
};
const Gs = Ys;
function Hr(t) {
    return function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , r = e.width ? String(e.width) : t.defaultWidth
          , n = t.formats[r] || t.formats[t.defaultWidth];
        return n
    }
}
var Ks = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , Xs = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , Qs = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , Zs = {
    date: Hr({
        formats: Ks,
        defaultWidth: "full"
    }),
    time: Hr({
        formats: Xs,
        defaultWidth: "full"
    }),
    dateTime: Hr({
        formats: Qs,
        defaultWidth: "full"
    })
};
const Js = Zs;
var el = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , tl = function(e, r, n, a) {
    return el[e]
};
const rl = tl;
function jt(t) {
    return function(e, r) {
        var n = r != null && r.context ? String(r.context) : "standalone", a;
        if (n === "formatting" && t.formattingValues) {
            var o = t.defaultFormattingWidth || t.defaultWidth
              , s = r != null && r.width ? String(r.width) : o;
            a = t.formattingValues[s] || t.formattingValues[o]
        } else {
            var l = t.defaultWidth
              , c = r != null && r.width ? String(r.width) : t.defaultWidth;
            a = t.values[c] || t.values[l]
        }
        var u = t.argumentCallback ? t.argumentCallback(e) : e;
        return a[u]
    }
}
var nl = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , al = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , ol = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , il = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , sl = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , ll = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , cl = function(e, r) {
    var n = Number(e)
      , a = n % 100;
    if (a > 20 || a < 10)
        switch (a % 10) {
        case 1:
            return n + "st";
        case 2:
            return n + "nd";
        case 3:
            return n + "rd"
        }
    return n + "th"
}
  , ul = {
    ordinalNumber: cl,
    era: jt({
        values: nl,
        defaultWidth: "wide"
    }),
    quarter: jt({
        values: al,
        defaultWidth: "wide",
        argumentCallback: function(e) {
            return e - 1
        }
    }),
    month: jt({
        values: ol,
        defaultWidth: "wide"
    }),
    day: jt({
        values: il,
        defaultWidth: "wide"
    }),
    dayPeriod: jt({
        values: sl,
        defaultWidth: "wide",
        formattingValues: ll,
        defaultFormattingWidth: "wide"
    })
};
const dl = ul;
function Et(t) {
    return function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , n = r.width
          , a = n && t.matchPatterns[n] || t.matchPatterns[t.defaultMatchWidth]
          , o = e.match(a);
        if (!o)
            return null;
        var s = o[0], l = n && t.parsePatterns[n] || t.parsePatterns[t.defaultParseWidth], c = Array.isArray(l) ? hl(l, function(g) {
            return g.test(s)
        }) : fl(l, function(g) {
            return g.test(s)
        }), u;
        u = t.valueCallback ? t.valueCallback(c) : c,
        u = r.valueCallback ? r.valueCallback(u) : u;
        var f = e.slice(s.length);
        return {
            value: u,
            rest: f
        }
    }
}
function fl(t, e) {
    for (var r in t)
        if (t.hasOwnProperty(r) && e(t[r]))
            return r
}
function hl(t, e) {
    for (var r = 0; r < t.length; r++)
        if (e(t[r]))
            return r
}
function ml(t) {
    return function(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , n = e.match(t.matchPattern);
        if (!n)
            return null;
        var a = n[0]
          , o = e.match(t.parsePattern);
        if (!o)
            return null;
        var s = t.valueCallback ? t.valueCallback(o[0]) : o[0];
        s = r.valueCallback ? r.valueCallback(s) : s;
        var l = e.slice(a.length);
        return {
            value: s,
            rest: l
        }
    }
}
var pl = /^(\d+)(th|st|nd|rd)?/i
  , vl = /\d+/i
  , gl = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , bl = {
    any: [/^b/i, /^(a|c)/i]
}
  , wl = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , xl = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , yl = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , $l = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , Tl = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , Sl = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , Cl = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , Ol = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , jl = {
    ordinalNumber: ml({
        matchPattern: pl,
        parsePattern: vl,
        valueCallback: function(e) {
            return parseInt(e, 10)
        }
    }),
    era: Et({
        matchPatterns: gl,
        defaultMatchWidth: "wide",
        parsePatterns: bl,
        defaultParseWidth: "any"
    }),
    quarter: Et({
        matchPatterns: wl,
        defaultMatchWidth: "wide",
        parsePatterns: xl,
        defaultParseWidth: "any",
        valueCallback: function(e) {
            return e + 1
        }
    }),
    month: Et({
        matchPatterns: yl,
        defaultMatchWidth: "wide",
        parsePatterns: $l,
        defaultParseWidth: "any"
    }),
    day: Et({
        matchPatterns: Tl,
        defaultMatchWidth: "wide",
        parsePatterns: Sl,
        defaultParseWidth: "any"
    }),
    dayPeriod: Et({
        matchPatterns: Cl,
        defaultMatchWidth: "any",
        parsePatterns: Ol,
        defaultParseWidth: "any"
    })
};
const El = jl;
var _l = {
    code: "en-US",
    formatDistance: Gs,
    formatLong: Js,
    formatRelative: rl,
    localize: dl,
    match: El,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
const gn = _l;
var Nl = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , Ml = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , Pl = /^'([^]*?)'?$/
  , kl = /''/g
  , Dl = /[a-zA-Z]/;
function $r(t, e, r) {
    var n, a, o, s, l, c, u, f, g, m, p, h, v, b, y, x, w, T;
    P(2, arguments);
    var _ = String(e)
      , R = xt()
      , k = (n = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : R.locale) !== null && n !== void 0 ? n : gn
      , W = se((o = (s = (l = (c = r == null ? void 0 : r.firstWeekContainsDate) !== null && c !== void 0 ? c : r == null || (u = r.locale) === null || u === void 0 || (f = u.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && l !== void 0 ? l : R.firstWeekContainsDate) !== null && s !== void 0 ? s : (g = R.locale) === null || g === void 0 || (m = g.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
    if (!(W >= 1 && W <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var J = se((p = (h = (v = (b = r == null ? void 0 : r.weekStartsOn) !== null && b !== void 0 ? b : r == null || (y = r.locale) === null || y === void 0 || (x = y.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && v !== void 0 ? v : R.weekStartsOn) !== null && h !== void 0 ? h : (w = R.locale) === null || w === void 0 || (T = w.options) === null || T === void 0 ? void 0 : T.weekStartsOn) !== null && p !== void 0 ? p : 0);
    if (!(J >= 0 && J <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!k.localize)
        throw new RangeError("locale must contain localize property");
    if (!k.formatLong)
        throw new RangeError("locale must contain formatLong property");
    var ee = j(t);
    if (!gs(ee))
        throw new RangeError("Invalid time value");
    var de = nt(ee)
      , ne = js(ee, de)
      , K = {
        firstWeekContainsDate: W,
        weekStartsOn: J,
        locale: k,
        _originalDate: ee
    }
      , fe = _.match(Ml).map(function(D) {
        var Y = D[0];
        if (Y === "p" || Y === "P") {
            var te = Ws[Y];
            return te(D, k.formatLong)
        }
        return D
    }).join("").match(Nl).map(function(D) {
        if (D === "''")
            return "'";
        var Y = D[0];
        if (Y === "'")
            return Al(D);
        var te = Ls[Y];
        if (te)
            return !(r != null && r.useAdditionalWeekYearTokens) && qs(D) && Zn(D, e, String(t)),
            !(r != null && r.useAdditionalDayOfYearTokens) && Hs(D) && Zn(D, e, String(t)),
            te(ne, D, k.localize, K);
        if (Y.match(Dl))
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + Y + "`");
        return D
    }).join("");
    return fe
}
function Al(t) {
    var e = t.match(Pl);
    return e ? e[1].replace(kl, "'") : t
}
function bn(t, e) {
    if (t == null)
        throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t
}
function qa(t) {
    return bn({}, t)
}
var Jn = 1440
  , Il = 2520
  , qr = 43200
  , Rl = 86400;
function Ll(t, e, r) {
    var n, a;
    P(2, arguments);
    var o = xt()
      , s = (n = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : o.locale) !== null && n !== void 0 ? n : gn;
    if (!s.formatDistance)
        throw new RangeError("locale must contain formatDistance property");
    var l = kt(t, e);
    if (isNaN(l))
        throw new RangeError("Invalid time value");
    var c = bn(qa(r), {
        addSuffix: !!(r != null && r.addSuffix),
        comparison: l
    }), u, f;
    l > 0 ? (u = j(e),
    f = j(t)) : (u = j(t),
    f = j(e));
    var g = Ss(f, u), m = (nt(f) - nt(u)) / 1e3, p = Math.round((g - m) / 60), h;
    if (p < 2)
        return r != null && r.includeSeconds ? g < 5 ? s.formatDistance("lessThanXSeconds", 5, c) : g < 10 ? s.formatDistance("lessThanXSeconds", 10, c) : g < 20 ? s.formatDistance("lessThanXSeconds", 20, c) : g < 40 ? s.formatDistance("halfAMinute", 0, c) : g < 60 ? s.formatDistance("lessThanXMinutes", 1, c) : s.formatDistance("xMinutes", 1, c) : p === 0 ? s.formatDistance("lessThanXMinutes", 1, c) : s.formatDistance("xMinutes", p, c);
    if (p < 45)
        return s.formatDistance("xMinutes", p, c);
    if (p < 90)
        return s.formatDistance("aboutXHours", 1, c);
    if (p < Jn) {
        var v = Math.round(p / 60);
        return s.formatDistance("aboutXHours", v, c)
    } else {
        if (p < Il)
            return s.formatDistance("xDays", 1, c);
        if (p < qr) {
            var b = Math.round(p / Jn);
            return s.formatDistance("xDays", b, c)
        } else if (p < Rl)
            return h = Math.round(p / qr),
            s.formatDistance("aboutXMonths", h, c)
    }
    if (h = Wa(f, u),
    h < 12) {
        var y = Math.round(p / qr);
        return s.formatDistance("xMonths", y, c)
    } else {
        var x = h % 12
          , w = Math.floor(h / 12);
        return x < 3 ? s.formatDistance("aboutXYears", w, c) : x < 9 ? s.formatDistance("overXYears", w, c) : s.formatDistance("almostXYears", w + 1, c)
    }
}
var ea = 1e3 * 60
  , hr = 60 * 24
  , ta = hr * 30
  , ra = hr * 365;
function Ul(t, e, r) {
    var n, a, o;
    P(2, arguments);
    var s = xt()
      , l = (n = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : s.locale) !== null && n !== void 0 ? n : gn;
    if (!l.formatDistance)
        throw new RangeError("locale must contain localize.formatDistance property");
    var c = kt(t, e);
    if (isNaN(c))
        throw new RangeError("Invalid time value");
    var u = bn(qa(r), {
        addSuffix: !!(r != null && r.addSuffix),
        comparison: c
    }), f, g;
    c > 0 ? (f = j(e),
    g = j(t)) : (f = j(t),
    g = j(e));
    var m = String((o = r == null ? void 0 : r.roundingMethod) !== null && o !== void 0 ? o : "round"), p;
    if (m === "floor")
        p = Math.floor;
    else if (m === "ceil")
        p = Math.ceil;
    else if (m === "round")
        p = Math.round;
    else
        throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
    var h = g.getTime() - f.getTime(), v = h / ea, b = nt(g) - nt(f), y = (h - b) / ea, x = r == null ? void 0 : r.unit, w;
    if (x ? w = String(x) : v < 1 ? w = "second" : v < 60 ? w = "minute" : v < hr ? w = "hour" : y < ta ? w = "day" : y < ra ? w = "month" : w = "year",
    w === "second") {
        var T = p(h / 1e3);
        return l.formatDistance("xSeconds", T, u)
    } else if (w === "minute") {
        var _ = p(v);
        return l.formatDistance("xMinutes", _, u)
    } else if (w === "hour") {
        var R = p(v / 60);
        return l.formatDistance("xHours", R, u)
    } else if (w === "day") {
        var k = p(y / hr);
        return l.formatDistance("xDays", k, u)
    } else if (w === "month") {
        var W = p(y / ta);
        return W === 12 && x !== "month" ? l.formatDistance("xYears", 1, u) : l.formatDistance("xMonths", W, u)
    } else if (w === "year") {
        var J = p(y / ra);
        return l.formatDistance("xYears", J, u)
    }
    throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")
}
function Tr(t, e) {
    return P(1, arguments),
    Ll(t, Date.now(), e)
}
function Fl(t, e) {
    return P(1, arguments),
    Ul(t, Date.now(), e)
}
function Wl(t, e) {
    P(2, arguments);
    var r = j(t)
      , n = j(e);
    return r.getTime() < n.getTime()
}
const [Sr,Mm] = Ut("Tooltip", [gt])
  , wn = gt()
  , Vl = "TooltipProvider"
  , Bl = 700
  , Kr = "tooltip.open"
  , [Hl,xn] = Sr(Vl)
  , ql = t => {
    const {__scopeTooltip: e, delayDuration: r=Bl, skipDelayDuration: n=300, disableHoverableContent: a=!1, children: o} = t
      , [s,l] = d.useState(!0)
      , c = d.useRef(!1)
      , u = d.useRef(0);
    return d.useEffect( () => {
        const f = u.current;
        return () => window.clearTimeout(f)
    }
    , []),
    d.createElement(Hl, {
        scope: e,
        isOpenDelayed: s,
        delayDuration: r,
        onOpen: d.useCallback( () => {
            window.clearTimeout(u.current),
            l(!1)
        }
        , []),
        onClose: d.useCallback( () => {
            window.clearTimeout(u.current),
            u.current = window.setTimeout( () => l(!0), n)
        }
        , [n]),
        isPointerInTransitRef: c,
        onPointerInTransitChange: d.useCallback(f => {
            c.current = f
        }
        , []),
        disableHoverableContent: a
    }, o)
}
  , yn = "Tooltip"
  , [zl,Cr] = Sr(yn)
  , Yl = t => {
    const {__scopeTooltip: e, children: r, open: n, defaultOpen: a=!1, onOpenChange: o, disableHoverableContent: s, delayDuration: l} = t
      , c = xn(yn, t.__scopeTooltip)
      , u = wn(e)
      , [f,g] = d.useState(null)
      , m = br()
      , p = d.useRef(0)
      , h = s ?? c.disableHoverableContent
      , v = l ?? c.delayDuration
      , b = d.useRef(!1)
      , [y=!1,x] = cr({
        prop: n,
        defaultProp: a,
        onChange: k => {
            k ? (c.onOpen(),
            document.dispatchEvent(new CustomEvent(Kr))) : c.onClose(),
            o == null || o(k)
        }
    })
      , w = d.useMemo( () => y ? b.current ? "delayed-open" : "instant-open" : "closed", [y])
      , T = d.useCallback( () => {
        window.clearTimeout(p.current),
        b.current = !1,
        x(!0)
    }
    , [x])
      , _ = d.useCallback( () => {
        window.clearTimeout(p.current),
        x(!1)
    }
    , [x])
      , R = d.useCallback( () => {
        window.clearTimeout(p.current),
        p.current = window.setTimeout( () => {
            b.current = !0,
            x(!0)
        }
        , v)
    }
    , [v, x]);
    return d.useEffect( () => () => window.clearTimeout(p.current), []),
    d.createElement(mn, u, d.createElement(zl, {
        scope: e,
        contentId: m,
        open: y,
        stateAttribute: w,
        trigger: f,
        onTriggerChange: g,
        onTriggerEnter: d.useCallback( () => {
            c.isOpenDelayed ? R() : T()
        }
        , [c.isOpenDelayed, R, T]),
        onTriggerLeave: d.useCallback( () => {
            h ? _() : window.clearTimeout(p.current)
        }
        , [_, h]),
        onOpen: T,
        onClose: _,
        disableHoverableContent: h
    }, r))
}
  , na = "TooltipTrigger"
  , Gl = d.forwardRef( (t, e) => {
    const {__scopeTooltip: r, ...n} = t
      , a = Cr(na, r)
      , o = xn(na, r)
      , s = wn(r)
      , l = d.useRef(null)
      , c = xe(e, l, a.onTriggerChange)
      , u = d.useRef(!1)
      , f = d.useRef(!1)
      , g = d.useCallback( () => u.current = !1, []);
    return d.useEffect( () => () => document.removeEventListener("pointerup", g), [g]),
    d.createElement(pn, N({
        asChild: !0
    }, s), d.createElement(ve.button, N({
        "aria-describedby": a.open ? a.contentId : void 0,
        "data-state": a.stateAttribute
    }, n, {
        ref: c,
        onPointerMove: X(t.onPointerMove, m => {
            m.pointerType !== "touch" && !f.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(),
            f.current = !0)
        }
        ),
        onPointerLeave: X(t.onPointerLeave, () => {
            a.onTriggerLeave(),
            f.current = !1
        }
        ),
        onPointerDown: X(t.onPointerDown, () => {
            u.current = !0,
            document.addEventListener("pointerup", g, {
                once: !0
            })
        }
        ),
        onFocus: X(t.onFocus, () => {
            u.current || a.onOpen()
        }
        ),
        onBlur: X(t.onBlur, a.onClose),
        onClick: X(t.onClick, a.onClose)
    })))
}
)
  , Kl = "TooltipPortal"
  , [Pm,Xl] = Sr(Kl, {
    forceMount: void 0
})
  , It = "TooltipContent"
  , Ql = d.forwardRef( (t, e) => {
    const r = Xl(It, t.__scopeTooltip)
      , {forceMount: n=r.forceMount, side: a="top", ...o} = t
      , s = Cr(It, t.__scopeTooltip);
    return d.createElement(dn, {
        present: n || s.open
    }, s.disableHoverableContent ? d.createElement(za, N({
        side: a
    }, o, {
        ref: e
    })) : d.createElement(Zl, N({
        side: a
    }, o, {
        ref: e
    })))
}
)
  , Zl = d.forwardRef( (t, e) => {
    const r = Cr(It, t.__scopeTooltip)
      , n = xn(It, t.__scopeTooltip)
      , a = d.useRef(null)
      , o = xe(e, a)
      , [s,l] = d.useState(null)
      , {trigger: c, onClose: u} = r
      , f = a.current
      , {onPointerInTransitChange: g} = n
      , m = d.useCallback( () => {
        l(null),
        g(!1)
    }
    , [g])
      , p = d.useCallback( (h, v) => {
        const b = h.currentTarget
          , y = {
            x: h.clientX,
            y: h.clientY
        }
          , x = ec(y, b.getBoundingClientRect())
          , w = tc(y, x)
          , T = rc(v.getBoundingClientRect())
          , _ = ac([...w, ...T]);
        l(_),
        g(!0)
    }
    , [g]);
    return d.useEffect( () => () => m(), [m]),
    d.useEffect( () => {
        if (c && f) {
            const h = b => p(b, f)
              , v = b => p(b, c);
            return c.addEventListener("pointerleave", h),
            f.addEventListener("pointerleave", v),
            () => {
                c.removeEventListener("pointerleave", h),
                f.removeEventListener("pointerleave", v)
            }
        }
    }
    , [c, f, p, m]),
    d.useEffect( () => {
        if (s) {
            const h = v => {
                const b = v.target
                  , y = {
                    x: v.clientX,
                    y: v.clientY
                }
                  , x = (c == null ? void 0 : c.contains(b)) || (f == null ? void 0 : f.contains(b))
                  , w = !nc(y, s);
                x ? m() : w && (m(),
                u())
            }
            ;
            return document.addEventListener("pointermove", h),
            () => document.removeEventListener("pointermove", h)
        }
    }
    , [c, f, s, u, m]),
    d.createElement(za, N({}, t, {
        ref: o
    }))
}
)
  , [Jl,km] = Sr(yn, {
    isInside: !1
})
  , za = d.forwardRef( (t, e) => {
    const {__scopeTooltip: r, children: n, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: s, ...l} = t
      , c = Cr(It, r)
      , u = wn(r)
      , {onClose: f} = c;
    return d.useEffect( () => (document.addEventListener(Kr, f),
    () => document.removeEventListener(Kr, f)), [f]),
    d.useEffect( () => {
        if (c.trigger) {
            const g = m => {
                const p = m.target;
                p != null && p.contains(c.trigger) && f()
            }
            ;
            return window.addEventListener("scroll", g, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", g, {
                capture: !0
            })
        }
    }
    , [c.trigger, f]),
    d.createElement(fn, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: g => g.preventDefault(),
        onDismiss: f
    }, d.createElement(hn, N({
        "data-state": c.stateAttribute
    }, u, l, {
        ref: e,
        style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        }
    }), d.createElement(Ea, null, n), d.createElement(Jl, {
        scope: r,
        isInside: !0
    }, d.createElement(Ai, {
        id: c.contentId,
        role: "tooltip"
    }, a || n))))
}
);
function ec(t, e) {
    const r = Math.abs(e.top - t.y)
      , n = Math.abs(e.bottom - t.y)
      , a = Math.abs(e.right - t.x)
      , o = Math.abs(e.left - t.x);
    switch (Math.min(r, n, a, o)) {
    case o:
        return "left";
    case a:
        return "right";
    case r:
        return "top";
    case n:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function tc(t, e, r=5) {
    const n = [];
    switch (e) {
    case "top":
        n.push({
            x: t.x - r,
            y: t.y + r
        }, {
            x: t.x + r,
            y: t.y + r
        });
        break;
    case "bottom":
        n.push({
            x: t.x - r,
            y: t.y - r
        }, {
            x: t.x + r,
            y: t.y - r
        });
        break;
    case "left":
        n.push({
            x: t.x + r,
            y: t.y - r
        }, {
            x: t.x + r,
            y: t.y + r
        });
        break;
    case "right":
        n.push({
            x: t.x - r,
            y: t.y - r
        }, {
            x: t.x - r,
            y: t.y + r
        });
        break
    }
    return n
}
function rc(t) {
    const {top: e, right: r, bottom: n, left: a} = t;
    return [{
        x: a,
        y: e
    }, {
        x: r,
        y: e
    }, {
        x: r,
        y: n
    }, {
        x: a,
        y: n
    }]
}
function nc(t, e) {
    const {x: r, y: n} = t;
    let a = !1;
    for (let o = 0, s = e.length - 1; o < e.length; s = o++) {
        const l = e[o].x
          , c = e[o].y
          , u = e[s].x
          , f = e[s].y;
        c > n != f > n && r < (u - l) * (n - c) / (f - c) + l && (a = !a)
    }
    return a
}
function ac(t) {
    const e = t.slice();
    return e.sort( (r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0),
    oc(e)
}
function oc(t) {
    if (t.length <= 1)
        return t.slice();
    const e = [];
    for (let n = 0; n < t.length; n++) {
        const a = t[n];
        for (; e.length >= 2; ) {
            const o = e[e.length - 1]
              , s = e[e.length - 2];
            if ((o.x - s.x) * (a.y - s.y) >= (o.y - s.y) * (a.x - s.x))
                e.pop();
            else
                break
        }
        e.push(a)
    }
    e.pop();
    const r = [];
    for (let n = t.length - 1; n >= 0; n--) {
        const a = t[n];
        for (; r.length >= 2; ) {
            const o = r[r.length - 1]
              , s = r[r.length - 2];
            if ((o.x - s.x) * (a.y - s.y) >= (o.y - s.y) * (a.x - s.x))
                r.pop();
            else
                break
        }
        r.push(a)
    }
    return r.pop(),
    e.length === 1 && r.length === 1 && e[0].x === r[0].x && e[0].y === r[0].y ? e : e.concat(r)
}
const ic = ql
  , sc = Yl
  , lc = Gl
  , Ya = Ql
  , je = ic
  , Ee = sc
  , _e = lc
  , Te = d.forwardRef( ({className: t, sideOffset: e=4, ...r}, n) => i.jsx(Ya, {
    ref: n,
    sideOffset: e,
    className: G("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1", t),
    ...r
}));
Te.displayName = Ya.displayName;
const cc = t => {
    if (t)
        return {
            ...ht(t.coalitions_user),
            ...ht(t.coalitions_user.coalition),
            blocId: t.available_blocs[0].id,
            cursusId: t.available_blocs[0].cursus_id
        }
}
  , uc = (t, e) => at({
    queryKey: ["v2", "coalition", e],
    queryFn: async () => {
        if (!t || !e)
            throw new Error("No id provided");
        const a = new URL(`users/${t}/coalitions?cursus=${e}`,"https://profile.intra.42.fr")
          , o = new Headers;
        o.append("Content-Type", "application/json");
        const s = await fetch(a, {
            headers: o,
            method: "GET",
            credentials: "include"
        })
          , l = await s.json();
        if (!s.ok)
            throw new Error(`Error while fetching coalition: ${s.status} - ${s.statusText} - ${l.detail}`);
        return cc(l)
    }
    ,
    enabled: !!t && !!e,
    refetchOnMount: !1,
    refetchOnWindowFocus: !1,
    refetchOnReconnect: !1
})
  , dc = t => {
    const {user: e} = ge();
    return at({
        queryKey: ["v2", "cursus"],
        queryFn: async () => {
            var c;
            if (!t)
                throw new Error("No id provided");
            const a = new URL(`/api/v1/users/${t.toString()}/cursus`,"https://intrapy.intra.42.fr")
              , o = new Headers;
            o.append("Content-Type", "application/json"),
            o.append("Authorization", `Bearer ${(e == null ? void 0 : e.access_token) || ""}`);
            const s = await fetch(a, {
                headers: o,
                method: "GET"
            })
              , l = await s.json();
            if (!s.ok)
                throw new Error(((c = l.detail[0]) == null ? void 0 : c.msg) || l.detail);
            return ht(l)
        }
        ,
        enabled: !!t,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1
    })
}
  , Xr = d.createContext({
    cursus: [],
    selectedCursus: void 0,
    selectedCoalition: void 0,
    isLoading: !1,
    selectCursusFromId: t => {}
})
  , Dm = ({children: t}) => {
    const {user: e} = re()
      , r = vt()
      , [n,a] = d.useState()
      , [o,s] = d.useState()
      , {data: l, isLoading: c} = dc(e.id)
      , {data: u, isLoading: f} = uc(e.id, n == null ? void 0 : n.slug)
      , m = {
        cursus: l || [],
        selectedCursus: n,
        selectedCoalition: o,
        selectCursusFromId: p => {
            if (!l)
                return;
            const h = l.find(v => v.id === p);
            h && (a(h),
            r.refetchQueries({
                queryKey: ["v2", "coalition", h.slug]
            }),
            r.setQueryData(["v2", "cursus"], v => {
                const b = [...v]
                  , y = b.findIndex(x => x.id === p);
                return b.unshift(b.splice(y, 1)[0]),
                b
            }
            ))
        }
        ,
        isLoading: c || f
    };
    return d.useEffect( () => {
        l && l.length > 0 && a(l[0]),
        s(u)
    }
    , [l, u]),
    i.jsx(Xr.Provider, {
        value: m,
        children: t
    })
}
  , Se = () => {
    if (!d.useContext(Xr) || !d.useContext(Ii))
        throw new Error("useCursusContext must be used within a CursusContextProvider and UserProfileContextProvider");
    return d.useContext(Xr)
}
  , aa = ({children: t, link: e}) => i.jsx("div", {
    className: "py-3 px-4 hover:text-legacy-main",
    children: i.jsx("a", {
        href: e,
        children: t
    })
})
  , fc = () => {
    const {user: {login: t}, isOnAProfile: e} = re();
    return i.jsxs(i.Fragment, {
        children: [i.jsx(aa, {
            link: `https://projects.intra.42.fr/projects/graph?login=${t}`,
            children: i.jsx(Ri, {
                className: "fill-white stroke-white hover:fill-legacy-main hover:stroke-legacy-main",
                width: 25
            })
        }), !e && i.jsx(aa, {
            link: "https://profile.intra.42.fr/users/me/edit",
            children: i.jsx(us, {})
        })]
    })
}
;
function hc(t) {
    var h;
    const e = t.milestones
      , r = new Date(t.cursusBeginDate)
      , n = new Date(e.slice(-1)[0].deadline)
      , a = Qt(n, r);
    function o(v, b) {
        const y = Wa(ur(b), Gr(v))
          , x = sr(b, v) + 1
          , w = sr(ur(v), v) + 1
          , T = sr(b, Gr(b)) + 1
          , _ = w / x * 100
          , R = T / x * 100
          , k = (100 - _ - R) / y
          , W = Os({
            start: v,
            end: b
        });
        return W.map( (ee, de) => {
            const ne = $r(ee, "MMM");
            let K;
            return de === 0 ? K = Math.round(_) : de === W.length - 1 ? K = Math.round(R) : K = Math.round(k),
            {
                monthLabel: ne,
                monthPercentage: K
            }
        }
        )
    }
    const l = e.sort( (v, b) => v.level - b.level).map( (v, b) => {
        const {level: y, deadline: x, validatedAt: w} = v
          , T = e[b - 1]
          , _ = b === 0 ? r : T && T.validatedAt ? new Date(T.validatedAt) : T && new Date(T.deadline)
          , R = w ? new Date(w) : new Date(x)
          , k = Qt(R, _)
          , W = !!w
          , J = Math.round(k / a * 100);
        return {
            level: y,
            percentage: J,
            isValidated: W,
            beginAt: _,
            endAt: R
        }
    }
    )
      , u = Qt(new Date, r)
      , f = Math.round(u / a * 100)
      , g = (h = t.paceSpeedUp) == null ? void 0 : h.deadline
      , m = g ? Math.round(Qt(new Date(g), r) / a * 100) : void 0
      , p = o(new Date(t.cursusBeginDate), new Date(t.etaEndOfCursus));
    return {
        completionPercentage: f,
        timeBetweenDeadlines: l,
        speedUpPercentage: m,
        months: p
    }
}
const mc = ({months: t, timeBetweenDeadlines: e, completionPercentage: r, speedUpPercentage: n, speedUpDeadline: a, deadline: o}) => i.jsxs("div", {
    className: "w-[300%] xl:w-full h-full ",
    children: [i.jsx("div", {
        className: "flex text-white px-5 w-full justify-between items-center h-[40%]",
        children: t.map( (s, l) => i.jsx("div", {
            style: {
                width: `${s.monthPercentage}%`
            },
            children: s.monthLabel
        }, s.monthLabel + l))
    }), i.jsx("div", {
        className: "h-[0px] border-b border-b-legacy-main-border w-[98%]"
    }), i.jsxs("div", {
        className: "h-[59%] pt-2 xl:pt-4  px-5 flex flex-col justify-between",
        children: [i.jsx("div", {
            className: "w-full flex gap-2",
            children: e.map(s => i.jsx(je, {
                children: i.jsxs(Ee, {
                    children: [i.jsx(_e, {
                        asChild: !0,
                        children: i.jsxs("div", {
                            className: G("h-10 rounded flex items-center cursor-pointer", s.isValidated ? "bg-legacy-main" : "bg-legacy-main-muted", s.percentage > 3 ? "pl-2" : "justify-center"),
                            style: {
                                width: `${s.percentage}%`
                            },
                            children: [i.jsx("div", {
                                className: "flex items-center h-4 w-4 rounded-full justify-center bg-[hsla(0,_0%,_100%,_0.35)]",
                                children: s.isValidated && i.jsx("span", {
                                    className: "text-lg text-white",
                                    children: "✓"
                                })
                            }), s.percentage > 3 && i.jsx(i.Fragment, {
                                children: i.jsx("span", {
                                    className: G("pl-2 text-lg text-white whitespace-nowrap", s.isValidated && "font-bold"),
                                    children: s.percentage > 12 ? `Milestone ${s.level}` : s.percentage > 5 ? `M.${s.level}` : `${s.level}`
                                })
                            })]
                        })
                    }), i.jsxs(Te, {
                        side: "bottom",
                        className: "bg-ft-gray text-white text-center",
                        children: [i.jsxs("p", {
                            children: ["Begin at: ", oe(s.beginAt)]
                        }), i.jsxs("p", {
                            children: [s.isValidated ? i.jsx("span", {
                                children: "End at"
                            }) : i.jsx("span", {
                                children: "Deadline at"
                            }), ":  ", oe(s.endAt)]
                        })]
                    })]
                })
            }, s.level))
        }), i.jsxs("div", {
            className: "flex w-full",
            children: [i.jsx("div", {
                style: {
                    paddingLeft: `${r}%`
                }
            }), i.jsxs("div", {
                className: "flex flex-col items-center -mt-20 xl:-mt-28 -mb-2 ",
                children: [i.jsx("div", {
                    className: "rounded-full mr-0 h-3 w-3 bg-red-500"
                }), i.jsx("div", {
                    className: "w-[2px] mr-0 h-full bg-red-500"
                })]
            })]
        }), n && a && i.jsx(je, {
            children: i.jsxs(Ee, {
                children: [i.jsx(_e, {
                    children: i.jsxs("div", {
                        className: "flex w-full",
                        children: [i.jsx("div", {
                            style: {
                                paddingLeft: `${n}%`
                            }
                        }), i.jsxs("div", {
                            className: "flex flex-col items-center -mt-20 mb-2 ",
                            children: [i.jsx("div", {
                                className: "w-[2px] mr-0 h-full bg-[#5C8F8F]"
                            }), i.jsx(cs, {
                                className: "-mt-1",
                                size: 18,
                                fill: "#5C8F8F",
                                stroke: "#5C8F8F"
                            })]
                        })]
                    })
                }), i.jsx(Te, {
                    side: "bottom",
                    className: "bg-ft-gray text-white text-center",
                    children: i.jsxs(i.Fragment, {
                        children: [i.jsxs("p", {
                            children: ["Possibility to Pace up from: ", oe(new Date(o))]
                        }), i.jsxs("p", {
                            children: ["Possibility to pace up to: ", oe(new Date(a))]
                        })]
                    })
                })]
            })
        })]
    })]
})
  , pc = ({profile: t}) => {
    var o;
    const {completionPercentage: e, timeBetweenDeadlines: r, months: n, speedUpPercentage: a} = hc(t);
    return i.jsx("div", {
        className: "w-full h-4/5 xl:h-full  justify-center flex overflow-scroll xl:overflow-hidden -mb-3 flex-col",
        children: i.jsx(mc, {
            months: n,
            timeBetweenDeadlines: r,
            completionPercentage: e,
            speedUpPercentage: a,
            speedUpDeadline: (o = t.paceSpeedUp) == null ? void 0 : o.deadline,
            deadline: t.deadline
        })
    })
}
  , oa = ({date: t}) => i.jsx("div", {
    className: "font-bold",
    children: oe(new Date(t))
})
  , vc = ({profile: t}) => i.jsxs("div", {
    className: "h-36 bg-[rgb(23,23,23)] flex flex-col items-center xl:flex-row ",
    children: [i.jsxs("div", {
        className: "xl:w-1/5 border-b-[1px] xl:border-r-[1px] border-[hsla(0,_0%,_20%,_1)] xl:h-full h-1/3 w-full flex xl:flex-col items-center justify-center gap-5 text-white text-xl",
        children: [i.jsx("div", {
            className: "whitespace-nowrap xl:pt-2",
            children: "Common Core ETA:"
        }), t.endOfCursusMaxDeadline ? i.jsx(je, {
            children: i.jsxs(Ee, {
                children: [i.jsx(_e, {
                    children: i.jsx(oa, {
                        date: t.etaEndOfCursus
                    })
                }), i.jsx(Te, {
                    side: "bottom",
                    className: "bg-ft-gray text-white text-center",
                    children: i.jsxs(i.Fragment, {
                        children: ["Pace 24 max deadline: ", i.jsx("span", {
                            className: "text-red-500",
                            children: oe(new Date(t.endOfCursusMaxDeadline))
                        })]
                    })
                })]
            })
        }) : i.jsx(oa, {
            date: t.etaEndOfCursus
        })]
    }), i.jsx(pc, {
        profile: t
    })]
})
  , Zt = ({icon: t, children: e}) => i.jsxs("div", {
    className: "flex flex-row items-center gap-1",
    children: [i.jsx(t, {
        size: 15,
        className: "mr-2"
    }), i.jsx("div", {
        className: "text-white",
        children: e
    })]
})
  , Ga = "Popover"
  , [Ka,Am] = Ut(Ga, [gt])
  , $n = gt()
  , [gc,yt] = Ka(Ga)
  , bc = t => {
    const {__scopePopover: e, children: r, open: n, defaultOpen: a, onOpenChange: o, modal: s=!1} = t
      , l = $n(e)
      , c = d.useRef(null)
      , [u,f] = d.useState(!1)
      , [g=!1,m] = cr({
        prop: n,
        defaultProp: a,
        onChange: o
    });
    return d.createElement(mn, l, d.createElement(gc, {
        scope: e,
        contentId: br(),
        triggerRef: c,
        open: g,
        onOpenChange: m,
        onOpenToggle: d.useCallback( () => m(p => !p), [m]),
        hasCustomAnchor: u,
        onCustomAnchorAdd: d.useCallback( () => f(!0), []),
        onCustomAnchorRemove: d.useCallback( () => f(!1), []),
        modal: s
    }, r))
}
  , wc = "PopoverTrigger"
  , xc = d.forwardRef( (t, e) => {
    const {__scopePopover: r, ...n} = t
      , a = yt(wc, r)
      , o = $n(r)
      , s = xe(e, a.triggerRef)
      , l = d.createElement(ve.button, N({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a.open,
        "aria-controls": a.contentId,
        "data-state": Za(a.open)
    }, n, {
        ref: s,
        onClick: X(t.onClick, a.onOpenToggle)
    }));
    return a.hasCustomAnchor ? l : d.createElement(pn, N({
        asChild: !0
    }, o), l)
}
)
  , Xa = "PopoverPortal"
  , [yc,$c] = Ka(Xa, {
    forceMount: void 0
})
  , Tc = t => {
    const {__scopePopover: e, forceMount: r, children: n, container: a} = t
      , o = yt(Xa, e);
    return d.createElement(yc, {
        scope: e,
        forceMount: r
    }, d.createElement(dn, {
        present: r || o.open
    }, d.createElement(_a, {
        asChild: !0,
        container: a
    }, n)))
}
  , Rt = "PopoverContent"
  , Sc = d.forwardRef( (t, e) => {
    const r = $c(Rt, t.__scopePopover)
      , {forceMount: n=r.forceMount, ...a} = t
      , o = yt(Rt, t.__scopePopover);
    return d.createElement(dn, {
        present: n || o.open
    }, o.modal ? d.createElement(Cc, N({}, a, {
        ref: e
    })) : d.createElement(Oc, N({}, a, {
        ref: e
    })))
}
)
  , Cc = d.forwardRef( (t, e) => {
    const r = yt(Rt, t.__scopePopover)
      , n = d.useRef(null)
      , a = xe(e, n)
      , o = d.useRef(!1);
    return d.useEffect( () => {
        const s = n.current;
        if (s)
            return Na(s)
    }
    , []),
    d.createElement(Ma, {
        as: Pa,
        allowPinchZoom: !0
    }, d.createElement(Qa, N({}, t, {
        ref: a,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: X(t.onCloseAutoFocus, s => {
            var l;
            s.preventDefault(),
            o.current || (l = r.triggerRef.current) === null || l === void 0 || l.focus()
        }
        ),
        onPointerDownOutside: X(t.onPointerDownOutside, s => {
            const l = s.detail.originalEvent
              , c = l.button === 0 && l.ctrlKey === !0
              , u = l.button === 2 || c;
            o.current = u
        }
        , {
            checkForDefaultPrevented: !1
        }),
        onFocusOutside: X(t.onFocusOutside, s => s.preventDefault(), {
            checkForDefaultPrevented: !1
        })
    })))
}
)
  , Oc = d.forwardRef( (t, e) => {
    const r = yt(Rt, t.__scopePopover)
      , n = d.useRef(!1)
      , a = d.useRef(!1);
    return d.createElement(Qa, N({}, t, {
        ref: e,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: o => {
            var s;
            if ((s = t.onCloseAutoFocus) === null || s === void 0 || s.call(t, o),
            !o.defaultPrevented) {
                var l;
                n.current || (l = r.triggerRef.current) === null || l === void 0 || l.focus(),
                o.preventDefault()
            }
            n.current = !1,
            a.current = !1
        }
        ,
        onInteractOutside: o => {
            var s, l;
            (s = t.onInteractOutside) === null || s === void 0 || s.call(t, o),
            o.defaultPrevented || (n.current = !0,
            o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
            const c = o.target;
            ((l = r.triggerRef.current) === null || l === void 0 ? void 0 : l.contains(c)) && o.preventDefault(),
            o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault()
        }
    }))
}
)
  , Qa = d.forwardRef( (t, e) => {
    const {__scopePopover: r, trapFocus: n, onOpenAutoFocus: a, onCloseAutoFocus: o, disableOutsidePointerEvents: s, onEscapeKeyDown: l, onPointerDownOutside: c, onFocusOutside: u, onInteractOutside: f, ...g} = t
      , m = yt(Rt, r)
      , p = $n(r);
    return ka(),
    d.createElement(Da, {
        asChild: !0,
        loop: !0,
        trapped: n,
        onMountAutoFocus: a,
        onUnmountAutoFocus: o
    }, d.createElement(fn, {
        asChild: !0,
        disableOutsidePointerEvents: s,
        onInteractOutside: f,
        onEscapeKeyDown: l,
        onPointerDownOutside: c,
        onFocusOutside: u,
        onDismiss: () => m.onOpenChange(!1)
    }, d.createElement(hn, N({
        "data-state": Za(m.open),
        role: "dialog",
        id: m.contentId
    }, p, g, {
        ref: e,
        style: {
            ...g.style,
            "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
            "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
        }
    }))))
}
);
function Za(t) {
    return t ? "open" : "closed"
}
const jc = bc
  , Ec = xc
  , _c = Tc
  , Ja = Sc
  , Tn = jc
  , Sn = Ec
  , Or = d.forwardRef( ({className: t, align: e="center", sideOffset: r=4, ...n}, a) => i.jsx(_c, {
    children: i.jsx(Ja, {
        ref: a,
        align: e,
        sideOffset: r,
        className: G("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t),
        ...n
    })
}));
Or.displayName = Ja.displayName;
const Nc = ({text: t, children: e}) => i.jsxs(Tn, {
    children: [i.jsx(Sn, {
        className: "cursor-default",
        children: e
    }), i.jsx(Or, {
        side: "left",
        className: "bg-ft-gray text-white text-center px-3 py-1.5 w-20",
        children: t
    })]
})
  , Mc = ({text: t, children: e}) => i.jsx(je, {
    delayDuration: 0,
    children: i.jsxs(Ee, {
        children: [i.jsx(_e, {
            className: "cursor-default",
            children: e
        }), i.jsx(Te, {
            side: "left",
            className: "bg-ft-gray text-white",
            children: t
        })]
    })
});
var $ = {}
  , Qr = {
    exports: {}
};
(function(t, e) {
    (function(r, n) {
        var a = "1.0.37"
          , o = ""
          , s = "?"
          , l = "function"
          , c = "undefined"
          , u = "object"
          , f = "string"
          , g = "major"
          , m = "model"
          , p = "name"
          , h = "type"
          , v = "vendor"
          , b = "version"
          , y = "architecture"
          , x = "console"
          , w = "mobile"
          , T = "tablet"
          , _ = "smarttv"
          , R = "wearable"
          , k = "embedded"
          , W = 500
          , J = "Amazon"
          , ee = "Apple"
          , de = "ASUS"
          , ne = "BlackBerry"
          , K = "Browser"
          , fe = "Chrome"
          , D = "Edge"
          , Y = "Firefox"
          , te = "Google"
          , De = "Huawei"
          , $e = "LG"
          , Ze = "Microsoft"
          , Je = "Motorola"
          , Ve = "Opera"
          , Be = "Samsung"
          , Ae = "Sharp"
          , Ie = "Sony"
          , Re = "Xiaomi"
          , C = "Zebra"
          , B = "Facebook"
          , ie = "Chromium OS"
          , H = "Mac OS"
          , V = function(M, L) {
            var E = {};
            for (var q in M)
                L[q] && L[q].length % 2 === 0 ? E[q] = L[q].concat(M[q]) : E[q] = M[q];
            return E
        }
          , A = function(M) {
            for (var L = {}, E = 0; E < M.length; E++)
                L[M[E].toUpperCase()] = M[E];
            return L
        }
          , me = function(M, L) {
            return typeof M === f ? ae(L).indexOf(ae(M)) !== -1 : !1
        }
          , ae = function(M) {
            return M.toLowerCase()
        }
          , Ot = function(M) {
            return typeof M === f ? M.replace(/[^\d\.]/g, o).split(".")[0] : n
        }
          , et = function(M, L) {
            if (typeof M === f)
                return M = M.replace(/^\s\s*/, o),
                typeof L === c ? M : M.substring(0, W)
        }
          , Le = function(M, L) {
            for (var E = 0, q, He, Me, I, O, Pe; E < L.length && !O; ) {
                var Vr = L[E]
                  , Ln = L[E + 1];
                for (q = He = 0; q < Vr.length && !O && Vr[q]; )
                    if (O = Vr[q++].exec(M),
                    O)
                        for (Me = 0; Me < Ln.length; Me++)
                            Pe = O[++He],
                            I = Ln[Me],
                            typeof I === u && I.length > 0 ? I.length === 2 ? typeof I[1] == l ? this[I[0]] = I[1].call(this, Pe) : this[I[0]] = I[1] : I.length === 3 ? typeof I[1] === l && !(I[1].exec && I[1].test) ? this[I[0]] = Pe ? I[1].call(this, Pe, I[2]) : n : this[I[0]] = Pe ? Pe.replace(I[1], I[2]) : n : I.length === 4 && (this[I[0]] = Pe ? I[3].call(this, Pe.replace(I[1], I[2])) : n) : this[I] = Pe || n;
                E += 2
            }
        }
          , Wr = function(M, L) {
            for (var E in L)
                if (typeof L[E] === u && L[E].length > 0) {
                    for (var q = 0; q < L[E].length; q++)
                        if (me(L[E][q], M))
                            return E === s ? n : E
                } else if (me(L[E], M))
                    return E === s ? n : E;
            return M
        }
          , Ni = {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/"
        }
          , In = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        }
          , Rn = {
            browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [b, [p, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [b, [p, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [p, b], [/opios[\/ ]+([\w\.]+)/i], [b, [p, Ve + " Mini"]], [/\bopr\/([\w\.]+)/i], [b, [p, Ve]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [b, [p, "Baidu"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [p, b], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [b, [p, "UC" + K]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [b, [p, "WeChat"]], [/konqueror\/([\w\.]+)/i], [b, [p, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [b, [p, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [b, [p, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [b, [p, "Smart Lenovo " + K]], [/(avast|avg)\/([\w\.]+)/i], [[p, /(.+)/, "$1 Secure " + K], b], [/\bfocus\/([\w\.]+)/i], [b, [p, Y + " Focus"]], [/\bopt\/([\w\.]+)/i], [b, [p, Ve + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [b, [p, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [b, [p, "Dolphin"]], [/coast\/([\w\.]+)/i], [b, [p, Ve + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [b, [p, "MIUI " + K]], [/fxios\/([-\w\.]+)/i], [b, [p, Y]], [/\bqihu|(qi?ho?o?|360)browser/i], [[p, "360 " + K]], [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i], [[p, /(.+)/, "$1 " + K], b], [/samsungbrowser\/([\w\.]+)/i], [b, [p, Be + " Internet"]], [/(comodo_dragon)\/([\w\.]+)/i], [[p, /_/g, " "], b], [/metasr[\/ ]?([\d\.]+)/i], [b, [p, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[p, "Sogou Mobile"], b], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i], [p, b], [/(lbbrowser)/i, /\[(linkedin)app\]/i], [p], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[p, B], b], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [p, b], [/\bgsa\/([\w\.]+) .*safari\//i], [b, [p, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [b, [p, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [b, [p, fe + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[p, fe + " WebView"], b], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [b, [p, "Android " + K]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [p, b], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [b, [p, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [b, p], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [p, [b, Wr, Ni]], [/(webkit|khtml)\/([\w\.]+)/i], [p, b], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[p, "Netscape"], b], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [b, [p, Y + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [p, b], [/(cobalt)\/([\w\.]+)/i], [p, [b, /master.|lts./, ""]]],
            cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[y, "amd64"]], [/(ia32(?=;))/i], [[y, ae]], [/((?:i[346]|x)86)[;\)]/i], [[y, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[y, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[y, "armhf"]], [/windows (ce|mobile); ppc;/i], [[y, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[y, /ower/, o, ae]], [/(sun4\w)[;\)]/i], [[y, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[y, ae]]],
            device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [m, [v, Be], [h, T]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [m, [v, Be], [h, w]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [m, [v, ee], [h, w]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [m, [v, ee], [h, T]], [/(macintosh);/i], [m, [v, ee]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [m, [v, Ae], [h, w]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [m, [v, De], [h, T]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [m, [v, De], [h, w]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[m, /_/g, " "], [v, Re], [h, w]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[m, /_/g, " "], [v, Re], [h, T]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [m, [v, "OPPO"], [h, w]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [m, [v, "Vivo"], [h, w]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [m, [v, "Realme"], [h, w]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [m, [v, Je], [h, w]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [m, [v, Je], [h, T]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [m, [v, $e], [h, T]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [m, [v, $e], [h, w]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [m, [v, "Lenovo"], [h, T]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[m, /_/g, " "], [v, "Nokia"], [h, w]], [/(pixel c)\b/i], [m, [v, te], [h, T]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [m, [v, te], [h, w]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [m, [v, Ie], [h, w]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[m, "Xperia Tablet"], [v, Ie], [h, T]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [m, [v, "OnePlus"], [h, w]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [m, [v, J], [h, T]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[m, /(.+)/g, "Fire Phone $1"], [v, J], [h, w]], [/(playbook);[-\w\),; ]+(rim)/i], [m, v, [h, T]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [m, [v, ne], [h, w]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [m, [v, de], [h, T]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [m, [v, de], [h, w]], [/(nexus 9)/i], [m, [v, "HTC"], [h, T]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [v, [m, /_/g, " "], [h, w]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [m, [v, "Acer"], [h, T]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [m, [v, "Meizu"], [h, w]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [m, [v, "Ulefone"], [h, w]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [v, m, [h, w]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [v, m, [h, T]], [/(surface duo)/i], [m, [v, Ze], [h, T]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [m, [v, "Fairphone"], [h, w]], [/(u304aa)/i], [m, [v, "AT&T"], [h, w]], [/\bsie-(\w*)/i], [m, [v, "Siemens"], [h, w]], [/\b(rct\w+) b/i], [m, [v, "RCA"], [h, T]], [/\b(venue[\d ]{2,7}) b/i], [m, [v, "Dell"], [h, T]], [/\b(q(?:mv|ta)\w+) b/i], [m, [v, "Verizon"], [h, T]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [m, [v, "Barnes & Noble"], [h, T]], [/\b(tm\d{3}\w+) b/i], [m, [v, "NuVision"], [h, T]], [/\b(k88) b/i], [m, [v, "ZTE"], [h, T]], [/\b(nx\d{3}j) b/i], [m, [v, "ZTE"], [h, w]], [/\b(gen\d{3}) b.+49h/i], [m, [v, "Swiss"], [h, w]], [/\b(zur\d{3}) b/i], [m, [v, "Swiss"], [h, T]], [/\b((zeki)?tb.*\b) b/i], [m, [v, "Zeki"], [h, T]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[v, "Dragon Touch"], m, [h, T]], [/\b(ns-?\w{0,9}) b/i], [m, [v, "Insignia"], [h, T]], [/\b((nxa|next)-?\w{0,9}) b/i], [m, [v, "NextBook"], [h, T]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[v, "Voice"], m, [h, w]], [/\b(lvtel\-)?(v1[12]) b/i], [[v, "LvTel"], m, [h, w]], [/\b(ph-1) /i], [m, [v, "Essential"], [h, w]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [m, [v, "Envizen"], [h, T]], [/\b(trio[-\w\. ]+) b/i], [m, [v, "MachSpeed"], [h, T]], [/\btu_(1491) b/i], [m, [v, "Rotor"], [h, T]], [/(shield[\w ]+) b/i], [m, [v, "Nvidia"], [h, T]], [/(sprint) (\w+)/i], [v, m, [h, w]], [/(kin\.[onetw]{3})/i], [[m, /\./g, " "], [v, Ze], [h, w]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [m, [v, C], [h, T]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [m, [v, C], [h, w]], [/smart-tv.+(samsung)/i], [v, [h, _]], [/hbbtv.+maple;(\d+)/i], [[m, /^/, "SmartTV"], [v, Be], [h, _]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[v, $e], [h, _]], [/(apple) ?tv/i], [v, [m, ee + " TV"], [h, _]], [/crkey/i], [[m, fe + "cast"], [v, te], [h, _]], [/droid.+aft(\w+)( bui|\))/i], [m, [v, J], [h, _]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [m, [v, Ae], [h, _]], [/(bravia[\w ]+)( bui|\))/i], [m, [v, Ie], [h, _]], [/(mitv-\w{5}) bui/i], [m, [v, Re], [h, _]], [/Hbbtv.*(technisat) (.*);/i], [v, m, [h, _]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[v, et], [m, et], [h, _]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[h, _]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [v, m, [h, x]], [/droid.+; (shield) bui/i], [m, [v, "Nvidia"], [h, x]], [/(playstation [345portablevi]+)/i], [m, [v, Ie], [h, x]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [m, [v, Ze], [h, x]], [/((pebble))app/i], [v, m, [h, R]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [m, [v, ee], [h, R]], [/droid.+; (glass) \d/i], [m, [v, te], [h, R]], [/droid.+; (wt63?0{2,3})\)/i], [m, [v, C], [h, R]], [/(quest( 2| pro)?)/i], [m, [v, B], [h, R]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [v, [h, k]], [/(aeobc)\b/i], [m, [v, J], [h, k]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [m, [h, w]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [m, [h, T]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[h, T]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[h, w]], [/(android[-\w\. ]{0,9});.+buil/i], [m, [v, "Generic"]]],
            engine: [[/windows.+ edge\/([\w\.]+)/i], [b, [p, D + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [b, [p, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [p, b], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [b, p]],
            os: [[/microsoft (windows) (vista|xp)/i], [p, b], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [p, [b, Wr, In]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[b, Wr, In], [p, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[b, /_/g, "."], [p, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[p, H], [b, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [b, p], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [p, b], [/\(bb(10);/i], [b, [p, ne]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [b, [p, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [b, [p, Y + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [b, [p, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [b, [p, "watchOS"]], [/crkey\/([\d\.]+)/i], [b, [p, fe + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[p, ie], b], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [p, b], [/(sunos) ?([\w\.\d]*)/i], [[p, "Solaris"], b], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [p, b]]
        }
          , Oe = function(M, L) {
            if (typeof M === u && (L = M,
            M = n),
            !(this instanceof Oe))
                return new Oe(M,L).getResult();
            var E = typeof r !== c && r.navigator ? r.navigator : n
              , q = M || (E && E.userAgent ? E.userAgent : o)
              , He = E && E.userAgentData ? E.userAgentData : n
              , Me = L ? V(Rn, L) : Rn
              , I = E && E.userAgent == q;
            return this.getBrowser = function() {
                var O = {};
                return O[p] = n,
                O[b] = n,
                Le.call(O, q, Me.browser),
                O[g] = Ot(O[b]),
                I && E && E.brave && typeof E.brave.isBrave == l && (O[p] = "Brave"),
                O
            }
            ,
            this.getCPU = function() {
                var O = {};
                return O[y] = n,
                Le.call(O, q, Me.cpu),
                O
            }
            ,
            this.getDevice = function() {
                var O = {};
                return O[v] = n,
                O[m] = n,
                O[h] = n,
                Le.call(O, q, Me.device),
                I && !O[h] && He && He.mobile && (O[h] = w),
                I && O[m] == "Macintosh" && E && typeof E.standalone !== c && E.maxTouchPoints && E.maxTouchPoints > 2 && (O[m] = "iPad",
                O[h] = T),
                O
            }
            ,
            this.getEngine = function() {
                var O = {};
                return O[p] = n,
                O[b] = n,
                Le.call(O, q, Me.engine),
                O
            }
            ,
            this.getOS = function() {
                var O = {};
                return O[p] = n,
                O[b] = n,
                Le.call(O, q, Me.os),
                I && !O[p] && He && He.platform != "Unknown" && (O[p] = He.platform.replace(/chrome os/i, ie).replace(/macos/i, H)),
                O
            }
            ,
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }
            ,
            this.getUA = function() {
                return q
            }
            ,
            this.setUA = function(O) {
                return q = typeof O === f && O.length > W ? et(O, W) : O,
                this
            }
            ,
            this.setUA(q),
            this
        };
        Oe.VERSION = a,
        Oe.BROWSER = A([p, b, g]),
        Oe.CPU = A([y]),
        Oe.DEVICE = A([m, v, h, x, w, _, T, R, k]),
        Oe.ENGINE = Oe.OS = A([p, b]),
        t.exports && (e = t.exports = Oe),
        e.UAParser = Oe;
        var it = typeof r !== c && (r.jQuery || r.Zepto);
        if (it && !it.ua) {
            var Xt = new Oe;
            it.ua = Xt.getResult(),
            it.ua.get = function() {
                return Xt.getUA()
            }
            ,
            it.ua.set = function(M) {
                Xt.setUA(M);
                var L = Xt.getResult();
                for (var E in L)
                    it.ua[E] = L[E]
            }
        }
    }
    )(typeof window == "object" ? window : F)
}
)(Qr, Qr.exports);
var Pc = Qr.exports;
Object.defineProperty($, "__esModule", {
    value: !0
});
function kc(t) {
    return t && typeof t == "object" && "default" in t ? t.default : t
}
var ce = d
  , z = kc(ce)
  , eo = Pc
  , Ke = new eo
  , ue = Ke.getBrowser()
  , Dc = Ke.getCPU()
  , ye = Ke.getDevice()
  , Cn = Ke.getEngine()
  , Xe = Ke.getOS()
  , Wt = Ke.getUA()
  , to = function(e) {
    return Ke.setUA(e)
}
  , Vt = function(e) {
    if (!e) {
        console.error("No userAgent string was provided");
        return
    }
    var r = new eo(e);
    return {
        UA: r,
        browser: r.getBrowser(),
        cpu: r.getCPU(),
        device: r.getDevice(),
        engine: r.getEngine(),
        os: r.getOS(),
        ua: r.getUA(),
        setUserAgent: function(a) {
            return r.setUA(a)
        }
    }
}
  , ro = Object.freeze({
    ClientUAInstance: Ke,
    browser: ue,
    cpu: Dc,
    device: ye,
    engine: Cn,
    os: Xe,
    ua: Wt,
    setUa: to,
    parseUserAgent: Vt
});
function ia(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Ac(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? ia(Object(r), !0).forEach(function(n) {
            Lc(t, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ia(Object(r)).forEach(function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return t
}
function Dt(t) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dt = function(e) {
        return typeof e
    }
    : Dt = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ,
    Dt(t)
}
function Ic(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function sa(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n)
    }
}
function Rc(t, e, r) {
    return e && sa(t.prototype, e),
    r && sa(t, r),
    t
}
function Lc(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r,
    t
}
function Zr() {
    return Zr = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
    }
    ,
    Zr.apply(this, arguments)
}
function Uc(t, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }),
    e && en(t, e)
}
function Jr(t) {
    return Jr = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    Jr(t)
}
function en(t, e) {
    return en = Object.setPrototypeOf || function(n, a) {
        return n.__proto__ = a,
        n
    }
    ,
    en(t, e)
}
function Fc(t, e) {
    if (t == null)
        return {};
    var r = {}, n = Object.keys(t), a, o;
    for (o = 0; o < n.length; o++)
        a = n[o],
        !(e.indexOf(a) >= 0) && (r[a] = t[a]);
    return r
}
function Ce(t, e) {
    if (t == null)
        return {};
    var r = Fc(t, e), n, a;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        for (a = 0; a < o.length; a++)
            n = o[a],
            !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
    }
    return r
}
function lr(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function Wc(t, e) {
    if (e && (typeof e == "object" || typeof e == "function"))
        return e;
    if (e !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return lr(t)
}
function Vc(t, e) {
    return Bc(t) || Hc(t, e) || qc(t, e) || zc()
}
function Bc(t) {
    if (Array.isArray(t))
        return t
}
function Hc(t, e) {
    var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r != null) {
        var n = [], a = !0, o = !1, s, l;
        try {
            for (r = r.call(t); !(a = (s = r.next()).done) && (n.push(s.value),
            !(e && n.length === e)); a = !0)
                ;
        } catch (c) {
            o = !0,
            l = c
        } finally {
            try {
                !a && r.return != null && r.return()
            } finally {
                if (o)
                    throw l
            }
        }
        return n
    }
}
function qc(t, e) {
    if (t) {
        if (typeof t == "string")
            return la(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name),
        r === "Map" || r === "Set")
            return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return la(t, e)
    }
}
function la(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++)
        n[r] = t[r];
    return n
}
function zc() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
var le = {
    Mobile: "mobile",
    Tablet: "tablet",
    SmartTv: "smarttv",
    Console: "console",
    Wearable: "wearable",
    Embedded: "embedded",
    Browser: void 0
}
  , pe = {
    Chrome: "Chrome",
    Firefox: "Firefox",
    Opera: "Opera",
    Yandex: "Yandex",
    Safari: "Safari",
    InternetExplorer: "Internet Explorer",
    Edge: "Edge",
    Chromium: "Chromium",
    Ie: "IE",
    MobileSafari: "Mobile Safari",
    EdgeChromium: "Edge Chromium",
    MIUI: "MIUI Browser",
    SamsungBrowser: "Samsung Browser"
}
  , $t = {
    IOS: "iOS",
    Android: "Android",
    WindowsPhone: "Windows Phone",
    Windows: "Windows",
    MAC_OS: "Mac OS"
}
  , Yc = {
    isMobile: !1,
    isTablet: !1,
    isBrowser: !1,
    isSmartTV: !1,
    isConsole: !1,
    isWearable: !1
}
  , Gc = function(e) {
    switch (e) {
    case le.Mobile:
        return {
            isMobile: !0
        };
    case le.Tablet:
        return {
            isTablet: !0
        };
    case le.SmartTv:
        return {
            isSmartTV: !0
        };
    case le.Console:
        return {
            isConsole: !0
        };
    case le.Wearable:
        return {
            isWearable: !0
        };
    case le.Browser:
        return {
            isBrowser: !0
        };
    case le.Embedded:
        return {
            isEmbedded: !0
        };
    default:
        return Yc
    }
}
  , Kc = function(e) {
    return to(e)
}
  , S = function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "none";
    return e || r
}
  , On = function() {
    return typeof window < "u" && (window.navigator || navigator) ? window.navigator || navigator : !1
}
  , jn = function(e) {
    var r = On();
    return r && r.platform && (r.platform.indexOf(e) !== -1 || r.platform === "MacIntel" && r.maxTouchPoints > 1 && !window.MSStream)
}
  , Xc = function(e, r, n, a, o) {
    return {
        isBrowser: e,
        browserMajorVersion: S(r.major),
        browserFullVersion: S(r.version),
        browserName: S(r.name),
        engineName: S(n.name),
        engineVersion: S(n.version),
        osName: S(a.name),
        osVersion: S(a.version),
        userAgent: S(o)
    }
}
  , ca = function(e, r, n, a) {
    return Ac({}, e, {
        vendor: S(r.vendor),
        model: S(r.model),
        os: S(n.name),
        osVersion: S(n.version),
        ua: S(a)
    })
}
  , Qc = function(e, r, n, a) {
    return {
        isSmartTV: e,
        engineName: S(r.name),
        engineVersion: S(r.version),
        osName: S(n.name),
        osVersion: S(n.version),
        userAgent: S(a)
    }
}
  , Zc = function(e, r, n, a) {
    return {
        isConsole: e,
        engineName: S(r.name),
        engineVersion: S(r.version),
        osName: S(n.name),
        osVersion: S(n.version),
        userAgent: S(a)
    }
}
  , Jc = function(e, r, n, a) {
    return {
        isWearable: e,
        engineName: S(r.name),
        engineVersion: S(r.version),
        osName: S(n.name),
        osVersion: S(n.version),
        userAgent: S(a)
    }
}
  , eu = function(e, r, n, a, o) {
    return {
        isEmbedded: e,
        vendor: S(r.vendor),
        model: S(r.model),
        engineName: S(n.name),
        engineVersion: S(n.version),
        osName: S(a.name),
        osVersion: S(a.version),
        userAgent: S(o)
    }
};
function tu(t) {
    var e = t ? Vt(t) : ro
      , r = e.device
      , n = e.browser
      , a = e.engine
      , o = e.os
      , s = e.ua
      , l = Gc(r.type)
      , c = l.isBrowser
      , u = l.isMobile
      , f = l.isTablet
      , g = l.isSmartTV
      , m = l.isConsole
      , p = l.isWearable
      , h = l.isEmbedded;
    if (c)
        return Xc(c, n, a, o, s);
    if (g)
        return Qc(g, a, o, s);
    if (m)
        return Zc(m, a, o, s);
    if (u || f)
        return ca(l, r, o, s);
    if (p)
        return Jc(p, a, o, s);
    if (h)
        return eu(h, r, a, o, s)
}
var no = function(e) {
    var r = e.type;
    return r === le.Mobile
}
  , ao = function(e) {
    var r = e.type;
    return r === le.Tablet
}
  , oo = function(e) {
    var r = e.type;
    return r === le.Mobile || r === le.Tablet
}
  , io = function(e) {
    var r = e.type;
    return r === le.SmartTv
}
  , mr = function(e) {
    var r = e.type;
    return r === le.Browser
}
  , so = function(e) {
    var r = e.type;
    return r === le.Wearable
}
  , lo = function(e) {
    var r = e.type;
    return r === le.Console
}
  , co = function(e) {
    var r = e.type;
    return r === le.Embedded
}
  , uo = function(e) {
    var r = e.vendor;
    return S(r)
}
  , fo = function(e) {
    var r = e.model;
    return S(r)
}
  , ho = function(e) {
    var r = e.type;
    return S(r, "browser")
}
  , mo = function(e) {
    var r = e.name;
    return r === $t.Android
}
  , po = function(e) {
    var r = e.name;
    return r === $t.Windows
}
  , vo = function(e) {
    var r = e.name;
    return r === $t.MAC_OS
}
  , go = function(e) {
    var r = e.name;
    return r === $t.WindowsPhone
}
  , bo = function(e) {
    var r = e.name;
    return r === $t.IOS
}
  , wo = function(e) {
    var r = e.version;
    return S(r)
}
  , xo = function(e) {
    var r = e.name;
    return S(r)
}
  , yo = function(e) {
    var r = e.name;
    return r === pe.Chrome
}
  , $o = function(e) {
    var r = e.name;
    return r === pe.Firefox
}
  , To = function(e) {
    var r = e.name;
    return r === pe.Chromium
}
  , pr = function(e) {
    var r = e.name;
    return r === pe.Edge
}
  , So = function(e) {
    var r = e.name;
    return r === pe.Yandex
}
  , Co = function(e) {
    var r = e.name;
    return r === pe.Safari || r === pe.MobileSafari
}
  , Oo = function(e) {
    var r = e.name;
    return r === pe.MobileSafari
}
  , jo = function(e) {
    var r = e.name;
    return r === pe.Opera
}
  , Eo = function(e) {
    var r = e.name;
    return r === pe.InternetExplorer || r === pe.Ie
}
  , _o = function(e) {
    var r = e.name;
    return r === pe.MIUI
}
  , No = function(e) {
    var r = e.name;
    return r === pe.SamsungBrowser
}
  , Mo = function(e) {
    var r = e.version;
    return S(r)
}
  , Po = function(e) {
    var r = e.major;
    return S(r)
}
  , ko = function(e) {
    var r = e.name;
    return S(r)
}
  , Do = function(e) {
    var r = e.name;
    return S(r)
}
  , Ao = function(e) {
    var r = e.version;
    return S(r)
}
  , Io = function() {
    var e = On()
      , r = e && e.userAgent && e.userAgent.toLowerCase();
    return typeof r == "string" ? /electron/.test(r) : !1
}
  , ut = function(e) {
    return typeof e == "string" && e.indexOf("Edg/") !== -1
}
  , Ro = function() {
    var e = On();
    return e && (/iPad|iPhone|iPod/.test(e.platform) || e.platform === "MacIntel" && e.maxTouchPoints > 1) && !window.MSStream
}
  , ke = function() {
    return jn("iPad")
}
  , Lo = function() {
    return jn("iPhone")
}
  , Uo = function() {
    return jn("iPod")
}
  , Fo = function(e) {
    return S(e)
};
function Wo(t) {
    var e = t || ro
      , r = e.device
      , n = e.browser
      , a = e.os
      , o = e.engine
      , s = e.ua;
    return {
        isSmartTV: io(r),
        isConsole: lo(r),
        isWearable: so(r),
        isEmbedded: co(r),
        isMobileSafari: Oo(n) || ke(),
        isChromium: To(n),
        isMobile: oo(r) || ke(),
        isMobileOnly: no(r),
        isTablet: ao(r) || ke(),
        isBrowser: mr(r),
        isDesktop: mr(r),
        isAndroid: mo(a),
        isWinPhone: go(a),
        isIOS: bo(a) || ke(),
        isChrome: yo(n),
        isFirefox: $o(n),
        isSafari: Co(n),
        isOpera: jo(n),
        isIE: Eo(n),
        osVersion: wo(a),
        osName: xo(a),
        fullBrowserVersion: Mo(n),
        browserVersion: Po(n),
        browserName: ko(n),
        mobileVendor: uo(r),
        mobileModel: fo(r),
        engineName: Do(o),
        engineVersion: Ao(o),
        getUA: Fo(s),
        isEdge: pr(n) || ut(s),
        isYandex: So(n),
        deviceType: ho(r),
        isIOS13: Ro(),
        isIPad13: ke(),
        isIPhone13: Lo(),
        isIPod13: Uo(),
        isElectron: Io(),
        isEdgeChromium: ut(s),
        isLegacyEdge: pr(n) && !ut(s),
        isWindows: po(a),
        isMacOs: vo(a),
        isMIUI: _o(n),
        isSamsungBrowser: No(n)
    }
}
var Vo = io(ye)
  , Bo = lo(ye)
  , Ho = so(ye)
  , ru = co(ye)
  , nu = Oo(ue) || ke()
  , au = To(ue)
  , jr = oo(ye) || ke()
  , qo = no(ye)
  , zo = ao(ye) || ke()
  , Yo = mr(ye)
  , ou = mr(ye)
  , Go = mo(Xe)
  , Ko = go(Xe)
  , Xo = bo(Xe) || ke()
  , iu = yo(ue)
  , su = $o(ue)
  , lu = Co(ue)
  , cu = jo(ue)
  , Qo = Eo(ue)
  , uu = wo(Xe)
  , du = xo(Xe)
  , fu = Mo(ue)
  , hu = Po(ue)
  , mu = ko(ue)
  , pu = uo(ye)
  , vu = fo(ye)
  , gu = Do(Cn)
  , bu = Ao(Cn)
  , wu = Fo(Wt)
  , xu = pr(ue) || ut(Wt)
  , yu = So(ue)
  , $u = ho(ye)
  , Tu = Ro()
  , Su = ke()
  , Cu = Lo()
  , Ou = Uo()
  , ju = Io()
  , Eu = ut(Wt)
  , _u = pr(ue) && !ut(Wt)
  , Nu = po(Xe)
  , Mu = vo(Xe)
  , Pu = _o(ue)
  , ku = No(ue)
  , Du = function(e) {
    if (!e || typeof e != "string") {
        console.error("No valid user agent string was provided");
        return
    }
    var r = Vt(e)
      , n = r.device
      , a = r.browser
      , o = r.os
      , s = r.engine
      , l = r.ua;
    return Wo({
        device: n,
        browser: a,
        os: o,
        engine: s,
        ua: l
    })
}
  , Au = function(e) {
    var r = e.renderWithFragment
      , n = e.children
      , a = Ce(e, ["renderWithFragment", "children"]);
    return Go ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , Iu = function(e) {
    var r = e.renderWithFragment
      , n = e.children
      , a = Ce(e, ["renderWithFragment", "children"]);
    return Yo ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , Ru = function(e) {
    var r = e.renderWithFragment
      , n = e.children
      , a = Ce(e, ["renderWithFragment", "children"]);
    return Qo ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , Lu = function(e) {
    var r = e.renderWithFragment
      , n = e.children
      , a = Ce(e, ["renderWithFragment", "children"]);
    return Xo ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , Uu = function(e) {
    var r = e.renderWithFragment
      , n = e.children
      , a = Ce(e, ["renderWithFragment", "children"]);
    return jr ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , Fu = function(e) {
    var r = e.renderWithFragment
      , n = e.children
      , a = Ce(e, ["renderWithFragment", "children"]);
    return zo ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , Wu = function(e) {
    var r = e.renderWithFragment
      , n = e.children
      , a = Ce(e, ["renderWithFragment", "children"]);
    return Ko ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , Vu = function(e) {
    var r = e.renderWithFragment
      , n = e.children;
    e.viewClassName,
    e.style;
    var a = Ce(e, ["renderWithFragment", "children", "viewClassName", "style"]);
    return qo ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , Bu = function(e) {
    var r = e.renderWithFragment
      , n = e.children
      , a = Ce(e, ["renderWithFragment", "children"]);
    return Vo ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , Hu = function(e) {
    var r = e.renderWithFragment
      , n = e.children
      , a = Ce(e, ["renderWithFragment", "children"]);
    return Bo ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , qu = function(e) {
    var r = e.renderWithFragment
      , n = e.children
      , a = Ce(e, ["renderWithFragment", "children"]);
    return Ho ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", a, n) : null
}
  , zu = function(e) {
    var r = e.renderWithFragment
      , n = e.children;
    e.viewClassName,
    e.style;
    var a = e.condition
      , o = Ce(e, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
    return a ? r ? z.createElement(ce.Fragment, null, n) : z.createElement("div", o, n) : null
};
function Yu(t) {
    return function(e) {
        Uc(r, e);
        function r(n) {
            var a;
            return Ic(this, r),
            a = Wc(this, Jr(r).call(this, n)),
            a.isEventListenerAdded = !1,
            a.handleOrientationChange = a.handleOrientationChange.bind(lr(a)),
            a.onOrientationChange = a.onOrientationChange.bind(lr(a)),
            a.onPageLoad = a.onPageLoad.bind(lr(a)),
            a.state = {
                isLandscape: !1,
                isPortrait: !1
            },
            a
        }
        return Rc(r, [{
            key: "handleOrientationChange",
            value: function() {
                this.isEventListenerAdded || (this.isEventListenerAdded = !0);
                var a = window.innerWidth > window.innerHeight ? 90 : 0;
                this.setState({
                    isPortrait: a === 0,
                    isLandscape: a === 90
                })
            }
        }, {
            key: "onOrientationChange",
            value: function() {
                this.handleOrientationChange()
            }
        }, {
            key: "onPageLoad",
            value: function() {
                this.handleOrientationChange()
            }
        }, {
            key: "componentDidMount",
            value: function() {
                (typeof window > "u" ? "undefined" : Dt(window)) !== void 0 && jr && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(),
                window.addEventListener("load", this.onPageLoad, !1)),
                window.addEventListener("resize", this.onOrientationChange, !1))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("resize", this.onOrientationChange, !1)
            }
        }, {
            key: "render",
            value: function() {
                return z.createElement(t, Zr({}, this.props, {
                    isLandscape: this.state.isLandscape,
                    isPortrait: this.state.isPortrait
                }))
            }
        }]),
        r
    }(z.Component)
}
function Gu() {
    var t = ce.useState(function() {
        var o = window.innerWidth > window.innerHeight ? 90 : 0;
        return {
            isPortrait: o === 0,
            isLandscape: o === 90,
            orientation: o === 0 ? "portrait" : "landscape"
        }
    })
      , e = Vc(t, 2)
      , r = e[0]
      , n = e[1]
      , a = ce.useCallback(function() {
        var o = window.innerWidth > window.innerHeight ? 90 : 0
          , s = {
            isPortrait: o === 0,
            isLandscape: o === 90,
            orientation: o === 0 ? "portrait" : "landscape"
        };
        r.orientation !== s.orientation && n(s)
    }, [r.orientation]);
    return ce.useEffect(function() {
        return (typeof window > "u" ? "undefined" : Dt(window)) !== void 0 && jr && (a(),
        window.addEventListener("load", a, !1),
        window.addEventListener("resize", a, !1)),
        function() {
            window.removeEventListener("resize", a, !1),
            window.removeEventListener("load", a, !1)
        }
    }, [a]),
    r
}
function Zo(t) {
    var e = t || window.navigator.userAgent;
    return Vt(e)
}
function Ku(t) {
    var e = t || window.navigator.userAgent
      , r = Zo(e)
      , n = Wo(r);
    return [n, r]
}
$.AndroidView = Au;
$.BrowserTypes = pe;
$.BrowserView = Iu;
$.ConsoleView = Hu;
$.CustomView = zu;
$.IEView = Ru;
$.IOSView = Lu;
$.MobileOnlyView = Vu;
$.MobileView = Uu;
$.OsTypes = $t;
$.SmartTVView = Bu;
$.TabletView = Fu;
$.WearableView = qu;
$.WinPhoneView = Wu;
$.browserName = mu;
$.browserVersion = hu;
$.deviceDetect = tu;
$.deviceType = $u;
$.engineName = gu;
$.engineVersion = bu;
$.fullBrowserVersion = fu;
$.getSelectorsByUserAgent = Du;
$.getUA = wu;
$.isAndroid = Go;
$.isBrowser = Yo;
$.isChrome = iu;
$.isChromium = au;
$.isConsole = Bo;
$.isDesktop = ou;
$.isEdge = xu;
$.isEdgeChromium = Eu;
$.isElectron = ju;
$.isEmbedded = ru;
$.isFirefox = su;
$.isIE = Qo;
$.isIOS = Xo;
$.isIOS13 = Tu;
$.isIPad13 = Su;
$.isIPhone13 = Cu;
$.isIPod13 = Ou;
$.isLegacyEdge = _u;
$.isMIUI = Pu;
$.isMacOs = Mu;
var En = $.isMobile = jr;
$.isMobileOnly = qo;
$.isMobileSafari = nu;
$.isOpera = cu;
$.isSafari = lu;
$.isSamsungBrowser = ku;
$.isSmartTV = Vo;
$.isTablet = zo;
$.isWearable = Ho;
$.isWinPhone = Ko;
$.isWindows = Nu;
$.isYandex = yu;
$.mobileModel = vu;
$.mobileVendor = pu;
$.osName = du;
$.osVersion = uu;
$.parseUserAgent = Vt;
$.setUserAgent = Kc;
$.useDeviceData = Zo;
$.useDeviceSelectors = Ku;
$.useMobileOrientation = Gu;
$.withOrientationChange = Yu;
const Jt = ({text: t, children: e}) => vn("(max-width: 576px)") || En ? i.jsx(Nc, {
    text: t,
    children: e
}) : i.jsx(Mc, {
    text: t,
    children: e
})
  , Qe = () => {
    const {selectedCoalition: t} = Se();
    return (t == null ? void 0 : t.color) ?? "hsl(var(--legacy-main))"
}
  , ua = ({to: t, children: e}) => i.jsx("div", {
    className: "flex flex-row items-center gap-1",
    children: i.jsx(Li, {
        to: t,
        className: "hover:underline decoration-[hsl(var(--legacy-main)]",
        style: {
            color: Qe()
        },
        children: e
    })
})
  , Xu = () => {
    const {user: {phone: t, email: e, dataErasureDate: r}} = re()
      , {primaryCampus: n} = Ft()
      , {isLoading: a} = re();
    return i.jsx("div", {
        className: "bg-ft-gray/50 border border-ft-gray-border w-full h-full justify-center rounded-xl flex py-6 xl:py-0",
        children: a ? i.jsx(bt, {}) : i.jsxs("div", {
            className: "flex flex-col justify-center gap-4",
            children: [t && i.jsx(Jt, {
                text: "Phone",
                children: i.jsx(Zt, {
                    icon: ls,
                    children: i.jsx(ua, {
                        to: `tel:${t}`,
                        children: t ?? "Hidden"
                    })
                })
            }), i.jsx(Jt, {
                text: "Mail",
                children: i.jsx(Zt, {
                    icon: is,
                    children: i.jsx(ua, {
                        to: `mailto:${e}`,
                        children: e
                    })
                })
            }), i.jsx(Jt, {
                text: "Campus",
                children: i.jsx(Zt, {
                    icon: ss,
                    children: n && n.name
                })
            }), r && i.jsx(Jt, {
                text: "Personal data erasure date",
                children: i.jsx(Zt, {
                    icon: os,
                    children: oe(new Date(r))
                })
            })]
        })
    })
}
  , Qu = () => {
    const t = vt()
      , {user: e} = ge();
    return yr({
        mutationFn: async a => {
            var f;
            const o = new URL("/api/v1/users/me/pace_speed_up","https://pace-system.42.fr")
              , s = new Headers;
            s.append("Content-Type", "application/json"),
            s.append("Authorization", `Bearer ${e == null ? void 0 : e.access_token}`);
            const l = JSON.stringify({
                should_speed_up: a
            })
              , c = await fetch(o, {
                headers: s,
                method: "POST",
                body: l
            })
              , u = await c.json();
            if (!c.ok)
                throw new Error(((f = u.detail[0]) == null ? void 0 : f.msg) || u.detail);
            return u
        }
        ,
        onSuccess: () => {
            t.invalidateQueries({
                queryKey: ["pace", "profile"]
            })
        }
    })
}
  , Zu = ({profile: t}) => {
    var n, a;
    const {mutateAsync: e} = Qu();
    async function r(o) {
        await e(o)
    }
    return i.jsxs("div", {
        className: "text-white w-full",
        children: [i.jsx("div", {
            className: "h-12 flex items-center justify-center bg-black font-bold rounded",
            children: "Do you want to speed up your curriculum?"
        }), i.jsxs("div", {
            className: "flex flex-col gap-5 items-center py-5",
            children: [i.jsxs("div", {
                className: "flex flex-col items-center",
                children: [i.jsx("p", {
                    children: " We have detected that you are progressing faster than expected."
                }), i.jsxs("p", {
                    children: ["You can adjust your milestones deadlines and end of common core date to fit your actual speed.", " "]
                })]
            }), i.jsx("div", {
                className: "w-full",
                children: i.jsxs("div", {
                    className: "flex w-full justify-evenly",
                    children: [i.jsxs("div", {
                        className: "w-1/2 flex flex-col items-center",
                        children: [i.jsxs("div", {
                            className: "font-bold",
                            children: ["Milestone ", t.milestone, " deadline"]
                        }), i.jsxs("div", {
                            className: "flex",
                            children: [i.jsx("span", {
                                className: "text-white/50",
                                children: oe(new Date(t.deadline))
                            }), i.jsx(zn, {
                                className: "text-legacy-main"
                            }), " ", t.paceSpeedUp && oe(new Date((n = t.paceSpeedUp) == null ? void 0 : n.deadline))]
                        })]
                    }), i.jsxs("div", {
                        className: "w-1/2 flex flex-col items-center",
                        children: [i.jsx("div", {
                            className: "font-bold",
                            children: "Common Core ETA"
                        }), i.jsxs("div", {
                            className: "flex",
                            children: [i.jsx("span", {
                                className: "text-white/50",
                                children: oe(new Date(t.etaEndOfCursus))
                            }), i.jsx(zn, {
                                className: "text-legacy-main"
                            }), t.paceSpeedUp && oe(new Date((a = t.paceSpeedUp) == null ? void 0 : a.commonCoreEtaCompletion))]
                        })]
                    })]
                })
            }), i.jsxs("div", {
                className: "w-full flex justify-center items-center",
                children: [i.jsx(Wn, {
                    asChild: !0,
                    children: i.jsx(Vn, {
                        className: "mr-3 capitalize bg-transparent border border-white hover:bg-transparent",
                        type: "button",
                        onClick: () => r(!1),
                        children: "No thanks"
                    })
                }), i.jsx(Wn, {
                    asChild: !0,
                    children: i.jsx(Vn, {
                        type: "button",
                        onClick: () => r(!0),
                        className: "capitalize bg-legacy-main hover:bg-legacy-main",
                        children: "Yes, let's speed up !"
                    })
                })]
            })]
        })]
    })
}
  , Ju = () => {
    const [t,e] = d.useState(!1);
    return {
        open: t,
        onOpenChange: () => e(!t),
        setOpen: e
    }
}
  , ed = ({profile: t}) => {
    const {open: e, onOpenChange: r} = Ju();
    return i.jsx("div", {
        className: "",
        children: i.jsxs(Ui, {
            open: e,
            onOpenChange: r,
            children: [i.jsxs("div", {
                className: "flex justify-end w-full",
                children: [i.jsx(Bn, {
                    asChild: !0,
                    className: "flex",
                    children: i.jsxs("button", {
                        className: "w-full h-[100px] flex flex-col",
                        children: [i.jsx("div", {
                            className: "h-2/3 w-full flex items-center justify-center font-bold",
                            children: "Speed up ?"
                        }), i.jsx("div", {
                            className: "h-1/3 bg-legacy-main w-full flex items-center rounded-b-md justify-center",
                            children: "More info"
                        })]
                    })
                }), i.jsx(Bn, {
                    asChild: !0,
                    className: "mb-2 lg:hidden"
                })]
            }), i.jsx(Fi, {
                className: "sm:max-w-[700px] p-0 sm:p-0 bg-[rgba(35,_35,_35,_1)] flex flex-col items-center w-full sm:max-h-screen",
                children: i.jsx(Zu, {
                    profile: t
                })
            })]
        })
    })
}
  , td = t => {
    const e = fs(new Date, {
        months: 2
    });
    return Wl(t, e)
}
  , rd = ({alumni: {deadline: t, maxDeadline: e}, color: r}) => {
    const {primaryCampus: n} = Ft()
      , a = wr(new Date(t), n == null ? void 0 : n.timeZone);
    return i.jsx(je, {
        children: i.jsxs(Ee, {
            children: [i.jsx(_e, {
                children: i.jsx("div", {
                    className: "text-gray-400",
                    children: td(a) ? i.jsxs(i.Fragment, {
                        children: [Fl(a, {
                            unit: "day"
                        }), " left before alumnization"]
                    }) : i.jsxs(i.Fragment, {
                        children: [Tr(a), " left before alumnization"]
                    })
                })
            }), i.jsxs(Te, {
                className: "flex flex-row gap-2 bg-ft-gray text-white",
                children: [i.jsx("span", {
                    children: "Max Alumnization Deadline:"
                }), i.jsx("span", {
                    style: {
                        color: r ?? "hsl(var(--legacy-main))"
                    },
                    children: oe(new Date(e))
                })]
            })]
        })
    })
}
  , nd = t => {
    const {user: e} = ge();
    return at({
        queryKey: ["v2", "alumni"],
        queryFn: async () => {
            var c;
            if (!t)
                throw new Error("No id provided");
            const a = new URL(`/api/v1/alumni_auto/${t.toString()}`,"https://alumni-management.42.fr")
              , o = new Headers;
            o.append("Content-Type", "application/json"),
            o.append("Authorization", `Bearer ${(e == null ? void 0 : e.access_token) || ""}`);
            const s = await fetch(a, {
                headers: o,
                method: "GET"
            })
              , l = await s.json();
            if (!s.ok)
                throw new Error(((c = l.detail[0]) == null ? void 0 : c.msg) || l.detail);
            return ht(l)
        }
        ,
        enabled: !!t,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1
    })
}
  , ad = ({color: t}) => {
    const {user: {id: e}} = re()
      , {data: r, isError: n, isLoading: a} = nd(e);
    return n ? i.jsx("div", {
        className: "text-destructive",
        children: "The countdown is unavailable."
    }) : a ? i.jsx(bt, {}) : i.jsxs(i.Fragment, {
        children: [r && r.status !== "banned" && i.jsxs("div", {
            children: [i.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [i.jsx("p", {
                    className: "text-5xl",
                    style: {
                        color: t ?? "hsl(var(--legacy-main))"
                    },
                    children: new Date(r.deadline).toLocaleDateString()
                }), i.jsx(rd, {
                    alumni: r,
                    color: t
                })]
            }), i.jsx("a", {
                href: "https://meta.intra.42.fr/articles/alumni",
                children: i.jsx("button", {
                    className: "w-full bg-legacy-main rounded-xl p-2 mt-8",
                    children: "Learn more about benefits"
                })
            })]
        }), r && r.status === "banned" && i.jsx("div", {
            className: "text-red-400 text-xl",
            children: "Following your campus decision, you are currently ineligible for Alumnization. You cannot become an Alumni, access Alumni benefits, or use 42 resources. If you would like to appeal this decision, please contact your campus Pedago."
        })]
    })
}
  , od = () => {
    const {user: {alumnizedAt: t}} = re();
    return i.jsx(je, {
        children: i.jsxs(Ee, {
            children: [i.jsx(_e, {
                className: "text-legacy-main text-4xl",
                children: "You're now an Alumni!"
            }), i.jsx(Te, {
                className: "bg-ft-gray text-white",
                children: t && oe(new Date(t))
            })]
        })
    })
}
  , id = () => {
    const {user: {alumnizedAt: t}} = re();
    return i.jsxs("div", {
        className: "w-full flex flex-col h-full space-y-3 justify-center items-center",
        children: [i.jsx("h3", {
            className: "text-2xl font-bold",
            children: "Alumnization"
        }), i.jsx("div", {
            className: "w-full px-8",
            children: t ? i.jsx(od, {}) : i.jsx(ad, {
                color: Qe()
            })
        })]
    })
}
  , sd = ({blackholedAt: t}) => {
    const {primaryCampus: e} = Ft()
      , r = Wi(new Date(t))
      , n = r ? "You've been absorbed by the Black Hole." : oe(new Date(t));
    return i.jsx("div", {
        className: "text-xl",
        children: i.jsx("span", {
            className: r ? "text-red-500" : "text-legacy-main",
            title: Tr(wr(new Date(t), e == null ? void 0 : e.timeZone), {
                addSuffix: !0
            }),
            children: n
        })
    })
}
  , ld = () => {
    const {selectedCursus: t} = Se();
    return !t || !t.blackholedAt ? null : i.jsxs("div", {
        className: "flex flex-col items-center justify-center",
        children: [i.jsx("h3", {
            className: "text-xl font-bold",
            style: {
                color: Qe()
            },
            children: i.jsx("span", {
                children: "Blackhole Absorption"
            })
        }), i.jsx(sd, {
            blackholedAt: t.blackholedAt
        })]
    })
}
  , cd = ({title: t}) => {
    const {selectedCursus: e} = Se();
    if (!e || !e.freezeUntil)
        return null;
    const r = e.freezeUntil;
    return i.jsxs("div", {
        className: "flex flex-col items-center justify-center",
        children: [i.jsxs("h3", {
            className: "text-xl",
            style: {
                color: Qe()
            },
            children: [t, " Deactivation"]
        }), i.jsx("div", {
            className: "text-2xl",
            children: i.jsx(je, {
                children: i.jsxs(Ee, {
                    children: [i.jsxs(_e, {
                        children: [Tr(wr(new Date(r)), {
                            addSuffix: !1
                        }), " Left"]
                    }), i.jsx(Te, {
                        className: "bg-ft-gray text-white",
                        children: oe(new Date(r))
                    })]
                })
            })
        })]
    })
}
;
var tn = {}
  , Er = {}
  , Bt = {}
  , Ht = {}
  , _t = {}
  , be = {};
(function(t) {
    var e = F && F.__assign || function() {
        return e = Object.assign || function(u) {
            for (var f, g = 1, m = arguments.length; g < m; g++) {
                f = arguments[g];
                for (var p in f)
                    Object.prototype.hasOwnProperty.call(f, p) && (u[p] = f[p])
            }
            return u
        }
        ,
        e.apply(this, arguments)
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.UNITS_META = t.UNITS = t.UNITS_META_MAP = t.UNITS_META_MAP_LITERAL = t.ZERO = void 0;
    var r = 1e3
      , n = r * 60
      , a = n * 60
      , o = a * 24
      , s = o * 7
      , l = o * 365
      , c = l / 12;
    t.ZERO = Object.freeze({
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    }),
    t.UNITS_META_MAP_LITERAL = {
        years: {
            milliseconds: l,
            months: 12,
            dateGetter: function(u) {
                return u.getFullYear()
            },
            ISOCharacter: "Y",
            ISOPrecision: "period"
        },
        months: {
            milliseconds: c,
            months: 1,
            dateGetter: function(u) {
                return u.getMonth()
            },
            ISOCharacter: "M",
            ISOPrecision: "period"
        },
        weeks: {
            milliseconds: s,
            dateGetter: function() {
                return 0
            },
            ISOCharacter: "W",
            ISOPrecision: "period",
            stringifyConvertTo: "days"
        },
        days: {
            milliseconds: o,
            dateGetter: function(u) {
                return u.getDate()
            },
            ISOCharacter: "D",
            ISOPrecision: "period"
        },
        hours: {
            milliseconds: a,
            dateGetter: function(u) {
                return u.getHours()
            },
            ISOCharacter: "H",
            ISOPrecision: "time"
        },
        minutes: {
            milliseconds: n,
            dateGetter: function(u) {
                return u.getMinutes()
            },
            ISOCharacter: "M",
            ISOPrecision: "time"
        },
        seconds: {
            milliseconds: r,
            dateGetter: function(u) {
                return u.getSeconds()
            },
            ISOCharacter: "S",
            ISOPrecision: "time"
        },
        milliseconds: {
            milliseconds: 1,
            dateGetter: function(u) {
                return u.getMilliseconds()
            },
            stringifyConvertTo: "seconds"
        }
    },
    t.UNITS_META_MAP = t.UNITS_META_MAP_LITERAL,
    t.UNITS = Object.freeze(["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"]),
    t.UNITS_META = Object.freeze(t.UNITS.map(function(u) {
        return e(e({}, t.UNITS_META_MAP[u]), {
            unit: u
        })
    }))
}
)(be);
var Nt = {}, Mt = {}, da;
function qt() {
    if (da)
        return Mt;
    da = 1;
    var t = F && F.__assign || function() {
        return t = Object.assign || function(a) {
            for (var o, s = 1, l = arguments.length; s < l; s++) {
                o = arguments[s];
                for (var c in o)
                    Object.prototype.hasOwnProperty.call(o, c) && (a[c] = o[c])
            }
            return a
        }
        ,
        t.apply(this, arguments)
    }
    ;
    Object.defineProperty(Mt, "__esModule", {
        value: !0
    }),
    Mt.negate = void 0;
    var e = be
      , r = We()
      , n = function(a) {
        var o = t({}, (0,
        r.parse)(a));
        return e.UNITS.forEach(function(s) {
            o[s] = o[s] === 0 ? 0 : -o[s]
        }),
        o
    };
    return Mt.negate = n,
    Mt
}
var _r = {};
Object.defineProperty(_r, "__esModule", {
    value: !0
});
_r.isNegativelySigned = void 0;
var ud = function(t) {
    return t < 0 || Object.is(t, -0)
};
_r.isNegativelySigned = ud;
var fa;
function dd() {
    if (fa)
        return Nt;
    fa = 1;
    var t = F && F.__assign || function() {
        return t = Object.assign || function(f) {
            for (var g, m = 1, p = arguments.length; m < p; m++) {
                g = arguments[m];
                for (var h in g)
                    Object.prototype.hasOwnProperty.call(g, h) && (f[h] = g[h])
            }
            return f
        }
        ,
        t.apply(this, arguments)
    }
    ;
    Object.defineProperty(Nt, "__esModule", {
        value: !0
    }),
    Nt.parseISODuration = void 0;
    var e = be
      , r = qt()
      , n = _r
      , a = "(?:[,.](\\d{1,3})\\d*)?"
      , o = function(f) {
        return "(?:(-?\\d+)".concat(f, ")?")
    }
      , s = function(f, g) {
        return function(m) {
            var p = m.match(f);
            if (!p)
                return null;
            var h = p[1] === "-"
              , v = p.slice(2);
            if (v.every(function(x) {
                return x === void 0
            }))
                return null;
            var b = v.map(function(x, w) {
                x = x ?? "0";
                var T = w === v.length - 1;
                return Number(T ? x.padEnd(3, "0") : x)
            })
              , y = t({}, e.ZERO);
            return g.forEach(function(x, w) {
                y[x] = b[w]
            }),
            (0,
            n.isNegativelySigned)(y.seconds) && (y.milliseconds *= -1),
            h ? (0,
            r.negate)(y) : y
        }
    }
      , l = s(new RegExp(["^(-)?P", "(\\d{4})", "-?", "(\\d{2})", "-?", "(\\d{2})", "T", "(\\d{2})", ":?", "(\\d{2})", ":?", "(\\d{2})", a, "$"].join("")), ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"])
      , c = s(new RegExp(["^(-)?P", o("Y"), o("M"), o("W"), o("D"), "(?:T", o("H"), o("M"), o("".concat(a, "S")), ")?$"].join("")), ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"])
      , u = function(f) {
        var g = c(f) || l(f);
        if (g === null)
            throw new SyntaxError('Failed to parse duration. "'.concat(f, '" is not a valid ISO duration string.'));
        return g
    };
    return Nt.parseISODuration = u,
    Nt
}
var Nr = {};
Object.defineProperty(Nr, "__esModule", {
    value: !0
});
Nr.validate = void 0;
var fd = be
  , hd = function(t) {
    Object.keys(t).forEach(function(e) {
        if (!fd.UNITS.includes(e))
            throw new TypeError('Unexpected property "'.concat(e, '" on Duration object.'));
        if (!Number.isInteger(t[e]))
            throw new TypeError('Property "'.concat(e, '" must be a an integer. Received ').concat(t[e], "."))
    })
};
Nr.validate = hd;
var Mr = {}
  , rn = F && F.__assign || function() {
    return rn = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
            e = arguments[r];
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
        }
        return t
    }
    ,
    rn.apply(this, arguments)
}
;
Object.defineProperty(Mr, "__esModule", {
    value: !0
});
Mr.cleanDurationObject = void 0;
var md = be
  , pd = function(t) {
    var e = rn({}, t);
    return md.UNITS.forEach(function(r) {
        e[r] === 0 && (e[r] = 0)
    }),
    e
};
Mr.cleanDurationObject = pd;
var ha;
function We() {
    if (ha)
        return _t;
    ha = 1;
    var t = F && F.__assign || function() {
        return t = Object.assign || function(l) {
            for (var c, u = 1, f = arguments.length; u < f; u++) {
                c = arguments[u];
                for (var g in c)
                    Object.prototype.hasOwnProperty.call(c, g) && (l[g] = c[g])
            }
            return l
        }
        ,
        t.apply(this, arguments)
    }
    ;
    Object.defineProperty(_t, "__esModule", {
        value: !0
    }),
    _t.parse = void 0;
    var e = be
      , r = dd()
      , n = Nr
      , a = Mr
      , o = function(l) {
        return typeof l == "string" ? (0,
        r.parseISODuration)(l) : typeof l == "number" ? t(t({}, e.ZERO), {
            milliseconds: l
        }) : t(t({}, e.ZERO), l)
    }
      , s = function(l) {
        var c = o(l);
        return (0,
        n.validate)(c),
        (0,
        a.cleanDurationObject)(c)
    };
    return _t.parse = s,
    _t
}
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.toYears = t.toMonths = t.toWeeks = t.toDays = t.toHours = t.toMinutes = t.toSeconds = t.toUnit = t.toMilliseconds = void 0;
    var e = We()
      , r = be
      , n = function(s) {
        var l = (0,
        e.parse)(s);
        return r.UNITS_META.reduce(function(c, u) {
            var f = u.unit
              , g = u.milliseconds;
            return c + l[f] * g
        }, 0)
    };
    t.toMilliseconds = n;
    var a = function(s, l) {
        return (0,
        t.toMilliseconds)(s) / r.UNITS_META_MAP[l].milliseconds
    };
    t.toUnit = a;
    var o = function(s) {
        return function(l) {
            return (0,
            t.toUnit)(l, s)
        }
    };
    t.toSeconds = o("seconds"),
    t.toMinutes = o("minutes"),
    t.toHours = o("hours"),
    t.toDays = o("days"),
    t.toWeeks = o("weeks"),
    t.toMonths = o("months"),
    t.toYears = o("years")
}
)(Ht);
Object.defineProperty(Bt, "__esModule", {
    value: !0
});
Bt.isNegative = void 0;
var vd = Ht
  , gd = function(t) {
    return (0,
    vd.toMilliseconds)(t) < 0
};
Bt.isNegative = gd;
Object.defineProperty(Er, "__esModule", {
    value: !0
});
Er.abs = void 0;
var bd = Bt
  , wd = qt()
  , xd = We()
  , yd = function(t) {
    return (0,
    bd.isNegative)(t) ? (0,
    wd.negate)(t) : (0,
    xd.parse)(t)
};
Er.abs = yd;
var zt = {}
  , Jo = {};
(function(t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.addMonths = t.getDaysInMonth = void 0;
    var e = function(n) {
        var a = n.getMonth()
          , o = new Date(0);
        return o.setFullYear(n.getFullYear(), a + 1, 0),
        o.setHours(0, 0, 0, 0),
        o.getDate()
    };
    t.getDaysInMonth = e;
    var r = function(n, a) {
        var o = n.getMonth() + a
          , s = new Date(0);
        s.setFullYear(n.getFullYear(), o, 1),
        s.setHours(0, 0, 0, 0);
        var l = (0,
        t.getDaysInMonth)(s);
        n.setMonth(o, Math.min(l, n.getDate()))
    };
    t.addMonths = r
}
)(Jo);
Object.defineProperty(zt, "__esModule", {
    value: !0
});
zt.apply = void 0;
var $d = Jo
  , Td = We()
  , Sd = function(t, e) {
    var r = new Date(t)
      , n = (0,
    Td.parse)(e)
      , a = n.years
      , o = n.months
      , s = n.weeks
      , l = n.days
      , c = n.hours
      , u = n.minutes
      , f = n.seconds
      , g = n.milliseconds;
    return (0,
    $d.addMonths)(r, a * 12 + o),
    r.setDate(r.getDate() + s * 7 + l),
    r.setHours(r.getHours() + c, r.getMinutes() + u, r.getSeconds() + f, r.getMilliseconds() + g),
    r
};
zt.apply = Sd;
var Yt = {}
  , nn = F && F.__assign || function() {
    return nn = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
            e = arguments[r];
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
        }
        return t
    }
    ,
    nn.apply(this, arguments)
}
;
Object.defineProperty(Yt, "__esModule", {
    value: !0
});
Yt.between = void 0;
var ma = be
  , Cd = function(t, e) {
    var r = new Date(t)
      , n = new Date(e)
      , a = nn({}, ma.ZERO);
    return ma.UNITS_META.forEach(function(o) {
        var s = o.unit
          , l = o.dateGetter;
        a[s] = l(n) - l(r)
    }),
    a
};
Yt.between = Cd;
var Gt = {};
Object.defineProperty(Gt, "__esModule", {
    value: !0
});
Gt.isZero = void 0;
var Od = Ht
  , jd = function(t) {
    return (0,
    Od.toMilliseconds)(t) === 0
};
Gt.isZero = jd;
var Pr = {}
  , dt = F && F.__assign || function() {
    return dt = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
            e = arguments[r];
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
        }
        return t
    }
    ,
    dt.apply(this, arguments)
}
  , Ed = F && F.__rest || function(t, e) {
    var r = {};
    for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
            e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
    return r
}
;
Object.defineProperty(Pr, "__esModule", {
    value: !0
});
Pr.normalize = void 0;
var _n = be
  , _d = Yt
  , Nd = zt
  , pa = Ht
  , Md = We()
  , ei = function(t, e) {
    return function(r, n) {
        var a = dt({}, r);
        return t.forEach(function(o) {
            var s = e(o);
            a[o] = ~~(n / s),
            n -= a[o] * s
        }),
        a
    }
}
  , Pd = ei(["years", "months"], function(t) {
    return _n.UNITS_META_MAP_LITERAL[t].months
})
  , kd = ei(["days", "hours", "minutes", "seconds", "milliseconds"], function(t) {
    return _n.UNITS_META_MAP_LITERAL[t].milliseconds
})
  , Dd = function(t) {
    var e = (0,
    Md.parse)(t)
      , r = e.years
      , n = e.months
      , a = e.weeks
      , o = e.days
      , s = Ed(e, ["years", "months", "weeks", "days"])
      , l = dt({}, _n.ZERO);
    return l = Pd(l, (0,
    pa.toMonths)({
        years: r,
        months: n
    })),
    l = kd(l, (0,
    pa.toMilliseconds)(dt(dt({}, s), {
        days: o + a * 7
    }))),
    l
}
  , Ad = function(t, e) {
    var r = e != null ? (0,
    _d.between)(e, (0,
    Nd.apply)(e, t)) : t;
    return Dd(r)
};
Pr.normalize = Ad;
var kr = {}
  , Kt = {}
  , an = F && F.__assign || function() {
    return an = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
            e = arguments[r];
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
        }
        return t
    }
    ,
    an.apply(this, arguments)
}
;
Object.defineProperty(Kt, "__esModule", {
    value: !0
});
Kt.sum = void 0;
var va = be
  , Id = We()
  , Rd = function() {
    for (var t = [], e = 0; e < arguments.length; e++)
        t[e] = arguments[e];
    var r = an({}, va.ZERO);
    return t.map(Id.parse).forEach(function(n) {
        va.UNITS.forEach(function(a) {
            r[a] += n[a]
        })
    }),
    r
};
Kt.sum = Rd;
var Ld = F && F.__spreadArray || function(t, e, r) {
    if (r || arguments.length === 2)
        for (var n = 0, a = e.length, o; n < a; n++)
            (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)),
            o[n] = e[n]);
    return t.concat(o || Array.prototype.slice.call(e))
}
;
Object.defineProperty(kr, "__esModule", {
    value: !0
});
kr.subtract = void 0;
var Ud = qt()
  , Fd = Kt
  , Wd = function(t) {
    for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
    return Fd.sum.apply(void 0, Ld([t], e.map(Ud.negate), !1))
};
kr.subtract = Wd;
var Dr = {}
  , Ar = {}
  , on = F && F.__assign || function() {
    return on = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
            e = arguments[r];
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
        }
        return t
    }
    ,
    on.apply(this, arguments)
}
;
Object.defineProperty(Ar, "__esModule", {
    value: !0
});
Ar.getUnitCount = void 0;
var Vd = be
  , Bd = We()
  , Hd = function(t) {
    var e = on({}, (0,
    Bd.parse)(t))
      , r = 0;
    return Vd.UNITS.forEach(function(n) {
        e[n] !== 0 && r++
    }),
    r
};
Ar.getUnitCount = Hd;
var Ir = {};
Object.defineProperty(Ir, "__esModule", {
    value: !0
});
Ir.checkAllUnitsNegative = void 0;
var qd = qt()
  , zd = We()
  , Yd = be
  , Gd = function(t) {
    var e = (0,
    zd.parse)(t)
      , r = !1
      , n = !1;
    return Yd.UNITS.forEach(function(a) {
        var o = e[a];
        o < 0 ? n = !0 : o > 0 && (r = !0)
    }),
    n && !r ? {
        isAllNegative: !0,
        maybeAbsDuration: (0,
        qd.negate)(e)
    } : {
        isAllNegative: !1,
        maybeAbsDuration: e
    }
};
Ir.checkAllUnitsNegative = Gd;
var sn = F && F.__assign || function() {
    return sn = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
            e = arguments[r];
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
        }
        return t
    }
    ,
    sn.apply(this, arguments)
}
;
Object.defineProperty(Dr, "__esModule", {
    value: !0
});
Dr.toString = void 0;
var Kd = Gt
  , Xd = Ar
  , er = be
  , Qd = Ir
  , ga = function(t, e) {
    return t.join("").replace(/\./g, e)
}
  , Zd = function(t, e) {
    e === void 0 && (e = {});
    var r = sn({
        decimalDelimiter: ","
    }, e);
    if ((0,
    Kd.isZero)(t))
        return "P0D";
    var n = (0,
    Qd.checkAllUnitsNegative)(t)
      , a = n.maybeAbsDuration
      , o = n.isAllNegative;
    if ((0,
    Xd.getUnitCount)(a) === 1 && a.weeks !== 0)
        return "P".concat(a.weeks, "W");
    var s = {
        period: [],
        time: []
    };
    er.UNITS_META.forEach(function(c) {
        var u = c.unit
          , f = c.stringifyConvertTo;
        if (f != null) {
            var g = a[u] * er.UNITS_META_MAP[u].milliseconds;
            a[f] += g / er.UNITS_META_MAP[f].milliseconds,
            a[u] = 0
        }
    }),
    er.UNITS_META.forEach(function(c) {
        var u = c.unit
          , f = c.ISOPrecision
          , g = c.ISOCharacter
          , m = a[u];
        f != null && m !== 0 && s[f].push("".concat(m).concat(g))
    });
    var l = "P".concat(ga(s.period, r.decimalDelimiter));
    return s.time.length && (l += "T".concat(ga(s.time, r.decimalDelimiter))),
    o && (l = "-".concat(l)),
    l
};
Dr.toString = Zd;
var ti = {};
Object.defineProperty(ti, "__esModule", {
    value: !0
});
(function(t) {
    var e = F && F.__createBinding || (Object.create ? function(a, o, s, l) {
        l === void 0 && (l = s);
        var c = Object.getOwnPropertyDescriptor(o, s);
        (!c || ("get" in c ? !o.__esModule : c.writable || c.configurable)) && (c = {
            enumerable: !0,
            get: function() {
                return o[s]
            }
        }),
        Object.defineProperty(a, l, c)
    }
    : function(a, o, s, l) {
        l === void 0 && (l = s),
        a[l] = o[s]
    }
    )
      , r = F && F.__exportStar || function(a, o) {
        for (var s in a)
            s !== "default" && !Object.prototype.hasOwnProperty.call(o, s) && e(o, a, s)
    }
    ;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.UNITS = void 0,
    r(Er, t),
    r(zt, t),
    r(Yt, t),
    r(Bt, t),
    r(Gt, t),
    r(qt(), t),
    r(Pr, t),
    r(We(), t),
    r(kr, t),
    r(Kt, t),
    r(Dr, t),
    r(Ht, t),
    r(ti, t);
    var n = be;
    Object.defineProperty(t, "UNITS", {
        enumerable: !0,
        get: function() {
            return n.UNITS
        }
    })
}
)(tn);
const Pt = ({value: t}) => i.jsxs("div", {
    className: "flex flex-row items-center -mr-52 text-left",
    children: [i.jsx("p", {
        className: "mr-2 text-sm",
        children: t
    }), i.jsx("div", {
        className: "w-full border-t border-dotted -pr-52 h-[1px]"
    })]
})
  , tr = ({wording: t, classname: e}) => i.jsx("div", {
    className: G("mx-1.5 w-10 h-0 text-xs xl:whitespace-nowrap", e),
    children: t
})
  , Jd = t => {
    const {user: e} = ge();
    return at({
        queryKey: ["attendance", "summary"],
        queryFn: async () => {
            if (!t)
                throw new Error("No id provided");
            const a = new URL(`/api/v1/attendance/${t.toString()}/summary`,"https://edtrax.42.fr")
              , o = new Headers;
            o.append("Content-Type", "application/json"),
            o.append("Authorization", `Bearer ${(e == null ? void 0 : e.access_token) || ""}`);
            const s = await fetch(a, {
                headers: o,
                method: "GET"
            })
              , l = await s.json();
            if (!s.ok)
                throw new Error(`Error while fetching attendance: ${s.status} - ${s.statusText} - ${l.detail}`);
            return l.weeks
        }
        ,
        enabled: !!t,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1
    })
}
  , rr = ({total: t}) => {
    const e = Math.floor(tn.toHours(tn.parse(t)))
      , r = Math.min(e / 60 * 100, 100);
    return i.jsx(je, {
        children: i.jsxs(Ee, {
            children: [i.jsx(_e, {
                asChild: !0,
                children: i.jsx("div", {
                    className: "mx-2.5 w-8 rounded-3xl h-full bg-legacy-main-muted cursor-pointer hover:bg-legacy-main",
                    style: {
                        height: `${r}%`
                    }
                })
            }), i.jsx(Te, {
                side: "bottom",
                className: "bg-ft-gray text-white",
                children: `${e}H`
            })]
        })
    })
}
  , ef = () => {
    const {user: {id: t}} = re()
      , {data: e, isLoading: r} = Jd(t);
    return r ? i.jsx(bt, {}) : i.jsx("div", {
        className: "h-full w-3/5 pb-6",
        children: e ? i.jsxs("div", {
            className: "h-full w-full flex",
            children: [i.jsxs("div", {
                className: "flex flex-col w-10 justify-evenly",
                children: [i.jsx(Pt, {
                    value: "60h"
                }), i.jsx(Pt, {
                    value: "45h"
                }), i.jsx(Pt, {
                    value: "30h"
                }), i.jsx(Pt, {
                    value: "15h"
                }), i.jsx("div", {
                    className: "pl-2",
                    children: i.jsx(Pt, {
                        value: "0h"
                    })
                })]
            }), i.jsxs("div", {
                className: "flex flex-col h-full w-full",
                children: [i.jsxs("div", {
                    className: "h-full pt-7 flex flex-wrap-reverse",
                    children: [i.jsx(rr, {
                        total: e[3].total
                    }), i.jsx(rr, {
                        total: e[2].total
                    }), i.jsx(rr, {
                        total: e[1].total
                    }), i.jsx(rr, {
                        total: e[0].total
                    })]
                }), i.jsxs("div", {
                    className: "h-8 flex pt-1",
                    children: [i.jsx(tr, {
                        wording: "W-4"
                    }), i.jsx(tr, {
                        wording: "W-2"
                    }), i.jsx(tr, {
                        wording: "W-1"
                    }), i.jsx(tr, {
                        classname: "xl:mr-4",
                        wording: "Last week"
                    })]
                })]
            })]
        }) : i.jsx("div", {
            className: "flex justify-center items-center h-full",
            children: i.jsx("p", {
                className: "text-xl font-bold",
                children: "Temporarily unavailable"
            })
        })
    })
}
  , tf = ({date: t, showDate: e=!0, title: r, content: n, textSize: a="text-xl", textColor: o="text-legacy-main"}) => {
    const {primaryCampus: s} = Ft();
    return i.jsxs("div", {
        className: "flex justify-center  items-center",
        children: [i.jsx("div", {
            className: "text-base",
            style: {
                color: Qe()
            },
            children: r
        }), i.jsx("div", {
            className: "tracking-wider",
            children: i.jsx(je, {
                children: i.jsxs(Ee, {
                    delayDuration: 200,
                    children: [i.jsx(_e, {
                        asChild: !0,
                        children: i.jsxs("div", {
                            className: G("flex flex-col", o),
                            children: [i.jsx("div", {
                                className: a,
                                children: e && oe(new Date(t))
                            }), i.jsx("div", {
                                className: "text-xl",
                                children: n
                            })]
                        })
                    }), i.jsx(Te, {
                        className: "bg-ft-gray text-white",
                        children: i.jsx("p", {
                            children: Tr(wr(new Date(t), s == null ? void 0 : s.timeZone), {
                                addSuffix: !0
                            })
                        })
                    })]
                })
            })
        })]
    })
}
  , rf = ({daysSinceBegin: t, milestoneDuration: e, probationaryPeriod: r}) => {
    const n = Math.min(Math.round(t / e * 100), 100)
      , a = 135
      , o = 8
      , s = (a - o) / 2
      , l = 2 * Math.PI * s
      , c = l - n / 100 * l;
    return i.jsxs("svg", {
        width: a,
        height: a,
        children: [i.jsx("circle", {
            cx: a / 2,
            cy: a / 2,
            r: s,
            strokeWidth: o,
            fill: "none",
            className: r ? "stroke-[hsla(29,_73%,_61%,_0.3)]" : "stroke-[hsla(180,_100%,_37%,_0.3)]"
        }), i.jsx("path", {
            className: r ? "stroke-red-500" : "stroke-legacy-main",
            strokeWidth: o,
            fill: "none",
            strokeLinecap: "round",
            strokeDasharray: l,
            strokeDashoffset: c,
            d: `M ${a / 2}, ${a / 2 - s} a ${s},${s} 0 1,1 0,${2 * s} a ${s},${s} 0 1,1 0,-${2 * s}`
        }), i.jsx("text", {
            x: a / 2,
            y: a / 2,
            className: r ? "fill-red-500" : "fill-legacy-main",
            textAnchor: "middle",
            alignmentBaseline: "middle",
            fontSize: o * 3,
            fontWeight: "bold",
            children: `${t} days`
        }), i.jsx("text", {
            x: a / 2,
            y: a / 2 + o * 2 + 20 / 2,
            className: "fill-gray-400",
            textAnchor: "middle",
            alignmentBaseline: "middle",
            fontSize: o * 2,
            fontWeight: "semi-bold",
            children: `On ${e}`
        })]
    })
}
  , nf = ({profile: {deadline: t, etaEndOfCursus: e, probationaryPeriod: r, cursusBeginDate: n, milestones: a, pace: o}}) => {
    if (r && (Hn(new Date(t)) || Hn(new Date(e))))
        return i.jsx(tf, {
            date: new Date(t),
            showDate: !1,
            title: "",
            content: "You've been absorbed by the Black Hole.",
            textColor: "text-red-500"
        });
    const l = a == null ? void 0 : a.reduce( (g, m) => m.validatedAt && (!g || !g.validatedAt || m.validatedAt > g.validatedAt) ? m : g, null)
      , c = (l == null ? void 0 : l.validatedAt) || n
      , u = Math.floor((new Date().getTime() - new Date(c).getTime()) / (24 * 60 * 60 * 1e3))
      , f = Math.floor((new Date(t).getTime() - new Date(c).getTime()) / (24 * 60 * 60 * 1e3));
    return i.jsxs("div", {
        className: "w-full h-full",
        children: [i.jsxs("div", {
            className: "h-[20%] flex border-b-[1px] border-neutral-600 pr-16",
            children: [o && i.jsxs("div", {
                className: "flex flex-col items-center justify-center px-6 border-r-[1px] border-neutral-600 leading-5",
                children: [i.jsx("span", {
                    className: "font-semibold",
                    children: "Pace"
                }), i.jsx("span", {
                    children: o
                })]
            }), i.jsxs("div", {
                className: "text-left w-full flex items-center justify-between pl-2",
                children: [r ? i.jsx("span", {
                    children: "Blackholed at :"
                }) : i.jsx("span", {
                    children: "Milestone Deadline :"
                }), i.jsx("span", {
                    className: `font-bold ${r && "text-red-500"}`,
                    children: `${oe(new Date(t))}`
                })]
            })]
        }), i.jsxs("div", {
            className: "flex flex-row h-full w-full items-center",
            children: [i.jsxs("div", {
                className: "w-2/5 flex flex-col items-center gap-3 pb-9",
                children: [i.jsx("p", {
                    children: "Elapsed time"
                }), i.jsx(rf, {
                    daysSinceBegin: u,
                    milestoneDuration: f,
                    probationaryPeriod: r
                })]
            }), i.jsx(ef, {})]
        })]
    })
}
  , af = ({profile: t, legacy: e}) => {
    const [r,n] = d.useState(0)
      , {selectedCursus: a} = Se();
    return d.useEffect( () => {
        a && a.freezeUntil && n(1)
    }
    , [a]),
    a ? i.jsxs("div", {
        className: "flex h-full flex-col space-x-2 pb-8",
        children: [(a == null ? void 0 : a.freezeUntil) && i.jsxs("div", {
            className: "flex flex-row gap-3 text-2xl justify-center",
            children: [i.jsx("button", {
                className: G("hover:underline hover:underline-offset-[12px] hover:text-legacy-main", r == 0 && " text-legacy-main underline underline-offset-[12px]"),
                onClick: () => n(0),
                children: e ? "BLACKHOLE" : "MILESTONES"
            }), i.jsx("button", {
                className: G("hover:underline hover:underline-offset-[12px] hover:text-legacy-main", r == 1 && " text-legacy-main underline underline-offset-[12px]"),
                onClick: () => n(1),
                children: e ? "A.G.U" : "FREEZE"
            })]
        }), i.jsx("div", {
            className: "flex flex-col gap-3 w-full h-full justify-center",
            children: r == 0 ? e ? i.jsx(ld, {}) : t && i.jsx(nf, {
                profile: t
            }) : i.jsx(cd, {
                title: e ? "A.G.U" : "Freeze"
            })
        })]
    }) : null
}
  , of = ({profile: t, legacy: e}) => {
    const {selectedCursus: r} = Se()
      , {isLoading: n} = Vi()
      , {isLoading: a} = wt();
    if (!r)
        return null;
    const {blackholedAt: o, id: s} = r || {}
      , l = s === 21
      , c = (t == null ? void 0 : t.isActivated) && (t == null ? void 0 : t.deadline) || o;
    return !l && !c ? null : i.jsx("div", {
        className: "flex flex-col w-full h-full border border-ft-gray-border bg-ft-gray/50 text-center rounded-xl",
        children: a || n ? i.jsx(bt, {}) : i.jsxs(i.Fragment, {
            children: [c && i.jsx(af, {
                profile: t,
                legacy: e
            }), l && !c && i.jsx(id, {})]
        })
    })
}
  , sf = t => i.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 26,
    height: 46,
    fill: "none",
    ...t,
    children: i.jsx("path", {
        fill: t.fill,
        d: "M0 27V0h35.5v27L13 45.5 0 34.5Z"
    })
});
var lf = globalThis && globalThis.__read || function(t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r)
        return t;
    var n = r.call(t), a, o = [], s;
    try {
        for (; (e === void 0 || e-- > 0) && !(a = n.next()).done; )
            o.push(a.value)
    } catch (l) {
        s = {
            error: l
        }
    } finally {
        try {
            a && !a.done && (r = n.return) && r.call(n)
        } finally {
            if (s)
                throw s.error
        }
    }
    return o
}
  , cf = function(t) {
    var e = t.split(/ ?; ?/);
    return e.reduce(function(r, n) {
        var a = lf(n.split(/ ?: ?/), 2)
          , o = a[0]
          , s = a[1];
        return o && s && (r[o.replace(/-(\w)/g, function(l, c) {
            return c.toUpperCase()
        })] = Number.isNaN(Number(s)) ? s : Number(s)),
        r
    }, {})
};
function uf(t) {
    t === void 0 && (t = 6);
    for (var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", r = "", n = t; n > 0; --n)
        r += e[Math.round(Math.random() * (e.length - 1))];
    return r
}
var df = ["br", "col", "colgroup", "dl", "hr", "iframe", "img", "input", "link", "menuitem", "meta", "ol", "param", "select", "table", "tbody", "tfoot", "thead", "tr", "ul", "wbr"]
  , ba = {
    "accept-charset": "acceptCharset",
    acceptcharset: "acceptCharset",
    accesskey: "accessKey",
    allowfullscreen: "allowFullScreen",
    autocapitalize: "autoCapitalize",
    autocomplete: "autoComplete",
    autocorrect: "autoCorrect",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    autosave: "autoSave",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    charset: "charSet",
    class: "className",
    classid: "classID",
    classname: "className",
    colspan: "colSpan",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controlslist: "controlsList",
    crossorigin: "crossOrigin",
    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
    datetime: "dateTime",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    enctype: "encType",
    for: "htmlFor",
    formmethod: "formMethod",
    formaction: "formAction",
    formenctype: "formEncType",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    hreflang: "hrefLang",
    htmlfor: "htmlFor",
    httpequiv: "httpEquiv",
    "http-equiv": "httpEquiv",
    icon: "icon",
    innerhtml: "innerHTML",
    inputmode: "inputMode",
    itemid: "itemID",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    keyparams: "keyParams",
    keytype: "keyType",
    marginwidth: "marginWidth",
    marginheight: "marginHeight",
    maxlength: "maxLength",
    mediagroup: "mediaGroup",
    minlength: "minLength",
    nomodule: "noModule",
    novalidate: "noValidate",
    playsinline: "playsInline",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    referrerpolicy: "referrerPolicy",
    rowspan: "rowSpan",
    spellcheck: "spellCheck",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    tabindex: "tabIndex",
    typemustmatch: "typeMustMatch",
    usemap: "useMap",
    accentheight: "accentHeight",
    "accent-height": "accentHeight",
    alignmentbaseline: "alignmentBaseline",
    "alignment-baseline": "alignmentBaseline",
    allowreorder: "allowReorder",
    arabicform: "arabicForm",
    "arabic-form": "arabicForm",
    attributename: "attributeName",
    attributetype: "attributeType",
    autoreverse: "autoReverse",
    basefrequency: "baseFrequency",
    baselineshift: "baselineShift",
    "baseline-shift": "baselineShift",
    baseprofile: "baseProfile",
    calcmode: "calcMode",
    capheight: "capHeight",
    "cap-height": "capHeight",
    clippath: "clipPath",
    "clip-path": "clipPath",
    clippathunits: "clipPathUnits",
    cliprule: "clipRule",
    "clip-rule": "clipRule",
    colorinterpolation: "colorInterpolation",
    "color-interpolation": "colorInterpolation",
    colorinterpolationfilters: "colorInterpolationFilters",
    "color-interpolation-filters": "colorInterpolationFilters",
    colorprofile: "colorProfile",
    "color-profile": "colorProfile",
    colorrendering: "colorRendering",
    "color-rendering": "colorRendering",
    contentscripttype: "contentScriptType",
    contentstyletype: "contentStyleType",
    diffuseconstant: "diffuseConstant",
    dominantbaseline: "dominantBaseline",
    "dominant-baseline": "dominantBaseline",
    edgemode: "edgeMode",
    enablebackground: "enableBackground",
    "enable-background": "enableBackground",
    externalresourcesrequired: "externalResourcesRequired",
    fillopacity: "fillOpacity",
    "fill-opacity": "fillOpacity",
    fillrule: "fillRule",
    "fill-rule": "fillRule",
    filterres: "filterRes",
    filterunits: "filterUnits",
    floodopacity: "floodOpacity",
    "flood-opacity": "floodOpacity",
    floodcolor: "floodColor",
    "flood-color": "floodColor",
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontsizeadjust: "fontSizeAdjust",
    "font-size-adjust": "fontSizeAdjust",
    fontstretch: "fontStretch",
    "font-stretch": "fontStretch",
    fontstyle: "fontStyle",
    "font-style": "fontStyle",
    fontvariant: "fontVariant",
    "font-variant": "fontVariant",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    glyphname: "glyphName",
    "glyph-name": "glyphName",
    glyphorientationhorizontal: "glyphOrientationHorizontal",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphorientationvertical: "glyphOrientationVertical",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphref: "glyphRef",
    gradienttransform: "gradientTransform",
    gradientunits: "gradientUnits",
    horizadvx: "horizAdvX",
    "horiz-adv-x": "horizAdvX",
    horizoriginx: "horizOriginX",
    "horiz-origin-x": "horizOriginX",
    imagerendering: "imageRendering",
    "image-rendering": "imageRendering",
    kernelmatrix: "kernelMatrix",
    kernelunitlength: "kernelUnitLength",
    keypoints: "keyPoints",
    keysplines: "keySplines",
    keytimes: "keyTimes",
    lengthadjust: "lengthAdjust",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    lightingcolor: "lightingColor",
    "lighting-color": "lightingColor",
    limitingconeangle: "limitingConeAngle",
    markerend: "markerEnd",
    "marker-end": "markerEnd",
    markerheight: "markerHeight",
    markermid: "markerMid",
    "marker-mid": "markerMid",
    markerstart: "markerStart",
    "marker-start": "markerStart",
    markerunits: "markerUnits",
    markerwidth: "markerWidth",
    maskcontentunits: "maskContentUnits",
    maskunits: "maskUnits",
    numoctaves: "numOctaves",
    overlineposition: "overlinePosition",
    "overline-position": "overlinePosition",
    overlinethickness: "overlineThickness",
    "overline-thickness": "overlineThickness",
    paintorder: "paintOrder",
    "paint-order": "paintOrder",
    "panose-1": "panose1",
    pathlength: "pathLength",
    patterncontentunits: "patternContentUnits",
    patterntransform: "patternTransform",
    patternunits: "patternUnits",
    pointerevents: "pointerEvents",
    "pointer-events": "pointerEvents",
    pointsatx: "pointsAtX",
    pointsaty: "pointsAtY",
    pointsatz: "pointsAtZ",
    preservealpha: "preserveAlpha",
    preserveaspectratio: "preserveAspectRatio",
    primitiveunits: "primitiveUnits",
    refx: "refX",
    refy: "refY",
    renderingintent: "renderingIntent",
    "rendering-intent": "renderingIntent",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur",
    requiredextensions: "requiredExtensions",
    requiredfeatures: "requiredFeatures",
    shaperendering: "shapeRendering",
    "shape-rendering": "shapeRendering",
    specularconstant: "specularConstant",
    specularexponent: "specularExponent",
    spreadmethod: "spreadMethod",
    startoffset: "startOffset",
    stddeviation: "stdDeviation",
    stitchtiles: "stitchTiles",
    stopcolor: "stopColor",
    "stop-color": "stopColor",
    stopopacity: "stopOpacity",
    "stop-opacity": "stopOpacity",
    strikethroughposition: "strikethroughPosition",
    "strikethrough-position": "strikethroughPosition",
    strikethroughthickness: "strikethroughThickness",
    "strikethrough-thickness": "strikethroughThickness",
    strokedasharray: "strokeDasharray",
    "stroke-dasharray": "strokeDasharray",
    strokedashoffset: "strokeDashoffset",
    "stroke-dashoffset": "strokeDashoffset",
    strokelinecap: "strokeLinecap",
    "stroke-linecap": "strokeLinecap",
    strokelinejoin: "strokeLinejoin",
    "stroke-linejoin": "strokeLinejoin",
    strokemiterlimit: "strokeMiterlimit",
    "stroke-miterlimit": "strokeMiterlimit",
    strokewidth: "strokeWidth",
    "stroke-width": "strokeWidth",
    strokeopacity: "strokeOpacity",
    "stroke-opacity": "strokeOpacity",
    suppresscontenteditablewarning: "suppressContentEditableWarning",
    suppresshydrationwarning: "suppressHydrationWarning",
    surfacescale: "surfaceScale",
    systemlanguage: "systemLanguage",
    tablevalues: "tableValues",
    targetx: "targetX",
    targety: "targetY",
    textanchor: "textAnchor",
    "text-anchor": "textAnchor",
    textdecoration: "textDecoration",
    "text-decoration": "textDecoration",
    textlength: "textLength",
    textrendering: "textRendering",
    "text-rendering": "textRendering",
    underlineposition: "underlinePosition",
    "underline-position": "underlinePosition",
    underlinethickness: "underlineThickness",
    "underline-thickness": "underlineThickness",
    unicodebidi: "unicodeBidi",
    "unicode-bidi": "unicodeBidi",
    unicoderange: "unicodeRange",
    "unicode-range": "unicodeRange",
    unitsperem: "unitsPerEm",
    "units-per-em": "unitsPerEm",
    unselectable: "unselectable",
    valphabetic: "vAlphabetic",
    "v-alphabetic": "vAlphabetic",
    vectoreffect: "vectorEffect",
    "vector-effect": "vectorEffect",
    vertadvy: "vertAdvY",
    "vert-adv-y": "vertAdvY",
    vertoriginx: "vertOriginX",
    "vert-origin-x": "vertOriginX",
    vertoriginy: "vertOriginY",
    "vert-origin-y": "vertOriginY",
    vhanging: "vHanging",
    "v-hanging": "vHanging",
    videographic: "vIdeographic",
    "v-ideographic": "vIdeographic",
    viewbox: "viewBox",
    viewtarget: "viewTarget",
    vmathematical: "vMathematical",
    "v-mathematical": "vMathematical",
    wordspacing: "wordSpacing",
    "word-spacing": "wordSpacing",
    writingmode: "writingMode",
    "writing-mode": "writingMode",
    xchannelselector: "xChannelSelector",
    xheight: "xHeight",
    "x-height": "xHeight",
    xlinkactuate: "xlinkActuate",
    "xlink:actuate": "xlinkActuate",
    xlinkarcrole: "xlinkArcrole",
    "xlink:arcrole": "xlinkArcrole",
    xlinkhref: "xlinkHref",
    "xlink:href": "xlinkHref",
    xlinkrole: "xlinkRole",
    "xlink:role": "xlinkRole",
    xlinkshow: "xlinkShow",
    "xlink:show": "xlinkShow",
    xlinktitle: "xlinkTitle",
    "xlink:title": "xlinkTitle",
    xlinktype: "xlinkType",
    "xlink:type": "xlinkType",
    xmlbase: "xmlBase",
    "xml:base": "xmlBase",
    xmllang: "xmlLang",
    "xml:lang": "xmlLang",
    "xml:space": "xmlSpace",
    xmlnsxlink: "xmlnsXlink",
    "xmlns:xlink": "xmlnsXlink",
    xmlspace: "xmlSpace",
    ychannelselector: "yChannelSelector",
    zoomandpan: "zoomAndPan",
    onblur: "onBlur",
    onchange: "onChange",
    onclick: "onClick",
    oncontextmenu: "onContextMenu",
    ondoubleclick: "onDoubleClick",
    ondrag: "onDrag",
    ondragend: "onDragEnd",
    ondragenter: "onDragEnter",
    ondragexit: "onDragExit",
    ondragleave: "onDragLeave",
    ondragover: "onDragOver",
    ondragstart: "onDragStart",
    ondrop: "onDrop",
    onerror: "onError",
    onfocus: "onFocus",
    oninput: "onInput",
    oninvalid: "onInvalid",
    onkeydown: "onKeyDown",
    onkeypress: "onKeyPress",
    onkeyup: "onKeyUp",
    onload: "onLoad",
    onmousedown: "onMouseDown",
    onmouseenter: "onMouseEnter",
    onmouseleave: "onMouseLeave",
    onmousemove: "onMouseMove",
    onmouseout: "onMouseOut",
    onmouseover: "onMouseOver",
    onmouseup: "onMouseUp",
    onscroll: "onScroll",
    onsubmit: "onSubmit",
    ontouchcancel: "onTouchCancel",
    ontouchend: "onTouchEnd",
    ontouchmove: "onTouchMove",
    ontouchstart: "onTouchStart",
    onwheel: "onWheel"
}
  , vr = globalThis && globalThis.__assign || function() {
    return vr = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
            e = arguments[r];
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
        }
        return t
    }
    ,
    vr.apply(this, arguments)
}
  , ri = globalThis && globalThis.__read || function(t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r)
        return t;
    var n = r.call(t), a, o = [], s;
    try {
        for (; (e === void 0 || e-- > 0) && !(a = n.next()).done; )
            o.push(a.value)
    } catch (l) {
        s = {
            error: l
        }
    } finally {
        try {
            a && !a.done && (r = n.return) && r.call(n)
        } finally {
            if (s)
                throw s.error
        }
    }
    return o
}
  , ni = globalThis && globalThis.__spreadArray || function(t, e, r) {
    if (r || arguments.length === 2)
        for (var n = 0, a = e.length, o; n < a; n++)
            (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)),
            o[n] = e[n]);
    return t.concat(o || Array.prototype.slice.call(e))
}
;
function ff(t, e) {
    var r = {
        key: e
    };
    if (t instanceof Element) {
        var n = t.getAttribute("class");
        n && (r.className = n),
        ni([], ri(t.attributes), !1).forEach(function(a) {
            switch (a.name) {
            case "class":
                break;
            case "style":
                r[a.name] = cf(a.value);
                break;
            case "allowfullscreen":
            case "allowpaymentrequest":
            case "async":
            case "autofocus":
            case "autoplay":
            case "checked":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "formnovalidate":
            case "hidden":
            case "ismap":
            case "itemscope":
            case "loop":
            case "multiple":
            case "muted":
            case "nomodule":
            case "novalidate":
            case "open":
            case "readonly":
            case "required":
            case "reversed":
            case "selected":
            case "typemustmatch":
                r[ba[a.name] || a.name] = !0;
                break;
            default:
                r[ba[a.name] || a.name] = a.value
            }
        })
    }
    return r
}
function hf(t, e, r) {
    var n = ni([], ri(t), !1).map(function(a, o) {
        return Nn(a, vr(vr({}, r), {
            index: o,
            level: e + 1
        }))
    }).filter(Boolean);
    return n.length ? n : null
}
function mf(t) {
    return /[a-z]+[A-Z]+[a-z]+/.test(t) ? t : t.toLowerCase()
}
function Nn(t, e) {
    var r;
    if (e === void 0 && (e = {}),
    !t || !(t instanceof Node))
        return null;
    var n = e.actions
      , a = n === void 0 ? [] : n
      , o = e.index
      , s = o === void 0 ? 0 : o
      , l = e.level
      , c = l === void 0 ? 0 : l
      , u = e.randomKey
      , f = t
      , g = "".concat(c, "-").concat(s)
      , m = [];
    if (u && c === 0 && (g = "".concat(uf(), "-").concat(g)),
    Array.isArray(a) && a.forEach(function(v) {
        v.condition(f, g, c) && (typeof v.pre == "function" && (f = v.pre(f, g, c),
        f instanceof Node || (f = t)),
        typeof v.post == "function" && m.push(v.post(f, g, c)))
    }),
    m.length)
        return m;
    switch (f.nodeType) {
    case 1:
        return d.createElement(mf(f.nodeName), ff(f, g), hf(f.childNodes, c, e));
    case 3:
        {
            var p = ((r = f.nodeValue) === null || r === void 0 ? void 0 : r.toString()) || "";
            if (/^\s+$/.test(p) && !/[\u00A0\u202F]/.test(p))
                return null;
            if (!f.parentNode)
                return p;
            var h = f.parentNode.nodeName.toLowerCase();
            return df.includes(h) ? (/\S/.test(p) && console.warn("A textNode is not allowed inside '".concat(h, `'. Your text "`).concat(p, '" will be ignored')),
            null) : p
        }
    case 8:
        return null;
    default:
        return null
    }
}
function pf(t, e) {
    if (e === void 0 && (e = {}),
    !t || typeof t != "string")
        return null;
    var r = e.nodeOnly
      , n = r === void 0 ? !1 : r
      , a = e.selector
      , o = a === void 0 ? "body > *" : a
      , s = e.type
      , l = s === void 0 ? "text/html" : s;
    try {
        var c = new DOMParser
          , u = c.parseFromString(t, l)
          , f = u.querySelector(o);
        if (!(f instanceof Node))
            throw new TypeError("Error parsing input");
        return n ? f : Nn(f, e)
    } catch {}
    return null
}
function wa(t, e) {
    return e === void 0 && (e = {}),
    typeof t == "string" ? pf(t, e) : t instanceof Node ? Nn(t, e) : null
}
var ai = {
    exports: {}
};
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(t) {
    (function() {
        var e = !!(typeof window < "u" && window.document && window.document.createElement)
          , r = {
            canUseDOM: e,
            canUseWorkers: typeof Worker < "u",
            canUseEventListeners: e && !!(window.addEventListener || window.attachEvent),
            canUseViewport: e && !!window.screen
        };
        t.exports ? t.exports = r : window.ExecutionEnvironment = r
    }
    )()
}
)(ai);
var vf = ai.exports
  , he = {
    IDLE: "idle",
    LOADING: "loading",
    LOADED: "loaded",
    FAILED: "failed",
    READY: "ready",
    UNSUPPORTED: "unsupported"
};
function zr() {
    return vf.canUseDOM
}
function gf() {
    return bf() && typeof window < "u" && window !== null
}
function bf() {
    if (!document)
        return !1;
    var t = document.createElement("div");
    t.innerHTML = "<svg />";
    var e = t.firstChild;
    return !!e && e.namespaceURI === "http://www.w3.org/2000/svg"
}
function wf(t) {
    return t[Math.floor(Math.random() * t.length)]
}
function xf(t) {
    for (var e = "abcdefghijklmnopqrstuvwxyz", r = "1234567890", n = "".concat(e).concat(e.toUpperCase()).concat(r), a = "", o = 0; o < t; o++)
        a += wf(n);
    return a
}
function yf(t) {
    for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
    var n = {};
    for (var a in t)
        ({}).hasOwnProperty.call(t, a) && (e.includes(a) || (n[a] = t[a]));
    return n
}
var $f = globalThis && globalThis.__extends || function() {
    var t = function(e, r) {
        return t = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(n, a) {
            n.__proto__ = a
        }
        || function(n, a) {
            for (var o in a)
                Object.prototype.hasOwnProperty.call(a, o) && (n[o] = a[o])
        }
        ,
        t(e, r)
    };
    return function(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        t(e, r);
        function n() {
            this.constructor = e
        }
        e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
    }
}()
  , ln = globalThis && globalThis.__assign || function() {
    return ln = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) {
            e = arguments[r];
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a])
        }
        return t
    }
    ,
    ln.apply(this, arguments)
}
  , Tf = globalThis && globalThis.__awaiter || function(t, e, r, n) {
    function a(o) {
        return o instanceof r ? o : new r(function(s) {
            s(o)
        }
        )
    }
    return new (r || (r = Promise))(function(o, s) {
        function l(f) {
            try {
                u(n.next(f))
            } catch (g) {
                s(g)
            }
        }
        function c(f) {
            try {
                u(n.throw(f))
            } catch (g) {
                s(g)
            }
        }
        function u(f) {
            f.done ? o(f.value) : a(f.value).then(l, c)
        }
        u((n = n.apply(t, e || [])).next())
    }
    )
}
  , Sf = globalThis && globalThis.__generator || function(t, e) {
    var r = {
        label: 0,
        sent: function() {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, n, a, o, s;
    return s = {
        next: l(0),
        throw: l(1),
        return: l(2)
    },
    typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
    }
    ),
    s;
    function l(u) {
        return function(f) {
            return c([u, f])
        }
    }
    function c(u) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; s && (s = 0,
        u[0] && (r = 0)),
        r; )
            try {
                if (n = 1,
                a && (o = u[0] & 2 ? a.return : u[0] ? a.throw || ((o = a.return) && o.call(a),
                0) : a.next) && !(o = o.call(a, u[1])).done)
                    return o;
                switch (a = 0,
                o && (u = [u[0] & 2, o.value]),
                u[0]) {
                case 0:
                case 1:
                    o = u;
                    break;
                case 4:
                    return r.label++,
                    {
                        value: u[1],
                        done: !1
                    };
                case 5:
                    r.label++,
                    a = u[1],
                    u = [0];
                    continue;
                case 7:
                    u = r.ops.pop(),
                    r.trys.pop();
                    continue;
                default:
                    if (o = r.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
                        r.label = u[1];
                        break
                    }
                    if (u[0] === 6 && r.label < o[1]) {
                        r.label = o[1],
                        o = u;
                        break
                    }
                    if (o && r.label < o[2]) {
                        r.label = o[2],
                        r.ops.push(u);
                        break
                    }
                    o[2] && r.ops.pop(),
                    r.trys.pop();
                    continue
                }
                u = e.call(t, r)
            } catch (f) {
                u = [6, f],
                a = 0
            } finally {
                n = o = 0
            }
        if (u[0] & 5)
            throw u[1];
        return {
            value: u[0] ? u[1] : void 0,
            done: !0
        }
    }
}
  , xa = globalThis && globalThis.__read || function(t, e) {
    var r = typeof Symbol == "function" && t[Symbol.iterator];
    if (!r)
        return t;
    var n = r.call(t), a, o = [], s;
    try {
        for (; (e === void 0 || e-- > 0) && !(a = n.next()).done; )
            o.push(a.value)
    } catch (l) {
        s = {
            error: l
        }
    } finally {
        try {
            a && !a.done && (r = n.return) && r.call(n)
        } finally {
            if (s)
                throw s.error
        }
    }
    return o
}
  , Cf = globalThis && globalThis.__spreadArray || function(t, e, r) {
    if (r || arguments.length === 2)
        for (var n = 0, a = e.length, o; n < a; n++)
            (o || !(n in e)) && (o || (o = Array.prototype.slice.call(e, 0, n)),
            o[n] = e[n]);
    return t.concat(o || Array.prototype.slice.call(e))
}
  , ze = Object.create(null)
  , Of = function(t) {
    $f(e, t);
    function e(r) {
        var n = t.call(this, r) || this;
        return Object.defineProperty(n, "hash", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        Object.defineProperty(n, "isActive", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(n, "isInitialized", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        Object.defineProperty(n, "handleError", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: function(a) {
                var o = n.props.onError
                  , s = a.message === "Browser does not support SVG" ? he.UNSUPPORTED : he.FAILED;
                n.isActive && n.setState({
                    status: s
                }, function() {
                    typeof o == "function" && o(a)
                })
            }
        }),
        Object.defineProperty(n, "handleLoad", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: function(a, o) {
                o === void 0 && (o = !1),
                n.isActive && n.setState({
                    content: a,
                    hasCache: o,
                    status: he.LOADED
                }, n.getElement)
            }
        }),
        Object.defineProperty(n, "request", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: function() {
                return Tf(n, void 0, void 0, function() {
                    var a, o, s, l, c, u, f, g, m, p, v, h, v;
                    return Sf(this, function(b) {
                        switch (b.label) {
                        case 0:
                            a = this.props,
                            o = a.cacheRequests,
                            s = a.fetchOptions,
                            l = a.src,
                            o && (ze[l] = {
                                content: "",
                                status: he.LOADING
                            }),
                            b.label = 1;
                        case 1:
                            return b.trys.push([1, 4, , 5]),
                            [4, fetch(l, s)];
                        case 2:
                            if (c = b.sent(),
                            u = c.headers.get("content-type"),
                            f = xa((u || "").split(/ ?; ?/), 1),
                            g = f[0],
                            c.status > 299)
                                throw new Error("Not found");
                            if (!["image/svg+xml", "text/plain"].some(function(y) {
                                return g.includes(y)
                            }))
                                throw new Error("Content type isn't valid: ".concat(g));
                            return [4, c.text()];
                        case 3:
                            return m = b.sent(),
                            p = this.props.src,
                            l !== p ? (ze[l].status === he.LOADING && delete ze[l],
                            [2]) : (this.handleLoad(m),
                            o && (v = ze[l],
                            v && (v.content = m,
                            v.status = he.LOADED)),
                            [3, 5]);
                        case 4:
                            return h = b.sent(),
                            this.handleError(h),
                            o && (v = ze[l],
                            v && delete ze[l]),
                            [3, 5];
                        case 5:
                            return [2]
                        }
                    })
                })
            }
        }),
        n.state = {
            content: "",
            element: null,
            hasCache: !!r.cacheRequests && !!ze[r.src],
            status: he.IDLE
        },
        n.hash = r.uniqueHash || xf(8),
        n
    }
    return Object.defineProperty(e.prototype, "componentDidMount", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function() {
            if (this.isActive = !0,
            !(!zr() || this.isInitialized)) {
                var r = this.state.status
                  , n = this.props.src;
                try {
                    if (r === he.IDLE) {
                        if (!gf())
                            throw new Error("Browser does not support SVG");
                        if (!n)
                            throw new Error("Missing src");
                        this.load()
                    }
                } catch (a) {
                    this.handleError(a)
                }
                this.isInitialized = !0
            }
        }
    }),
    Object.defineProperty(e.prototype, "componentDidUpdate", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(r, n) {
            if (zr()) {
                var a = this.state
                  , o = a.hasCache
                  , s = a.status
                  , l = this.props
                  , c = l.onLoad
                  , u = l.src;
                if (n.status !== he.READY && s === he.READY && c && c(u, o),
                r.src !== u) {
                    if (!u) {
                        this.handleError(new Error("Missing src"));
                        return
                    }
                    this.load()
                }
            }
        }
    }),
    Object.defineProperty(e.prototype, "componentWillUnmount", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function() {
            this.isActive = !1
        }
    }),
    Object.defineProperty(e.prototype, "getElement", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function() {
            try {
                var r = this.getNode()
                  , n = wa(r);
                if (!n || !d.isValidElement(n))
                    throw new Error("Could not convert the src to a React element");
                this.setState({
                    element: n,
                    status: he.READY
                })
            } catch (a) {
                this.handleError(new Error(a.message))
            }
        }
    }),
    Object.defineProperty(e.prototype, "getNode", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function() {
            var r = this.props
              , n = r.description
              , a = r.title;
            try {
                var o = this.processSVG()
                  , s = wa(o, {
                    nodeOnly: !0
                });
                if (!s || !(s instanceof SVGSVGElement))
                    throw new Error("Could not convert the src to a DOM Node");
                var l = this.updateSVGAttributes(s);
                if (n) {
                    var c = l.querySelector("desc");
                    c && c.parentNode && c.parentNode.removeChild(c);
                    var u = document.createElementNS("http://www.w3.org/2000/svg", "desc");
                    u.innerHTML = n,
                    l.prepend(u)
                }
                if (typeof a < "u") {
                    var f = l.querySelector("title");
                    if (f && f.parentNode && f.parentNode.removeChild(f),
                    a) {
                        var g = document.createElementNS("http://www.w3.org/2000/svg", "title");
                        g.innerHTML = a,
                        l.prepend(g)
                    }
                }
                return l
            } catch (m) {
                return this.handleError(m)
            }
        }
    }),
    Object.defineProperty(e.prototype, "load", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function() {
            var r = this;
            this.isActive && this.setState({
                content: "",
                element: null,
                hasCache: !1,
                status: he.LOADING
            }, function() {
                var n = r.props
                  , a = n.cacheRequests
                  , o = n.src
                  , s = a && ze[o];
                if (s && s.status === he.LOADED) {
                    r.handleLoad(s.content, !0);
                    return
                }
                var l = o.match(/^data:image\/svg[^,]*?(;base64)?,(.*)/u), c;
                if (l ? c = l[1] ? window.atob(l[2]) : decodeURIComponent(l[2]) : o.includes("<svg") && (c = o),
                c) {
                    r.handleLoad(c);
                    return
                }
                r.request()
            })
        }
    }),
    Object.defineProperty(e.prototype, "processSVG", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function() {
            var r = this.state.content
              , n = this.props.preProcessor;
            return n ? n(r) : r
        }
    }),
    Object.defineProperty(e.prototype, "updateSVGAttributes", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(r) {
            var n = this
              , a = this.props
              , o = a.baseURL
              , s = o === void 0 ? "" : o
              , l = a.uniquifyIDs
              , c = ["id", "href", "xlink:href", "xlink:role", "xlink:arcrole"]
              , u = ["href", "xlink:href"]
              , f = function(g, m) {
                return u.includes(g) && (m ? !m.includes("#") : !1)
            };
            return l && Cf([], xa(r.children), !1).forEach(function(g) {
                if (g.attributes && g.attributes.length) {
                    var m = Object.values(g.attributes).map(function(p) {
                        var h = p
                          , v = p.value.match(/url\((.*?)\)/);
                        return v && v[1] && (h.value = p.value.replace(v[0], "url(".concat(s).concat(v[1], "__").concat(n.hash, ")"))),
                        h
                    });
                    c.forEach(function(p) {
                        var h = m.find(function(v) {
                            return v.name === p
                        });
                        h && !f(p, h.value) && (h.value = "".concat(h.value, "__").concat(n.hash))
                    })
                }
                return g.children.length ? n.updateSVGAttributes(g) : g
            }),
            r
        }
    }),
    Object.defineProperty(e.prototype, "render", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function() {
            var r = this.state
              , n = r.element
              , a = r.status
              , o = this.props
              , s = o.children
              , l = s === void 0 ? null : s
              , c = o.innerRef
              , u = o.loader
              , f = u === void 0 ? null : u
              , g = yf(this.props, "baseURL", "cacheRequests", "children", "description", "fetchOptions", "innerRef", "loader", "onError", "onLoad", "preProcessor", "src", "title", "uniqueHash", "uniquifyIDs");
            return zr() ? n ? d.cloneElement(n, ln({
                ref: c
            }, g)) : [he.UNSUPPORTED, he.FAILED].includes(a) ? l : f : f
        }
    }),
    Object.defineProperty(e, "defaultProps", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
            cacheRequests: !0,
            uniquifyIDs: !1
        }
    }),
    e
}(d.PureComponent);
const oi = Of
  , jf = () => {
    const {selectedCursus: t, selectedCoalition: e} = Se();
    if (!t || !e)
        return i.jsx(i.Fragment, {});
    const {color: r, imageUrl: n, blocId: a, id: o} = {
        ...e
    }
      , s = n ? `https://profile.intra.42.fr/blocs/${a}/coalitions/${o}` : ""
      , l = n ? 100 : 0;
    return i.jsx("a", {
        href: s,
        children: i.jsxs("div", {
            className: "grid place-items-center",
            children: [i.jsx(sf, {
                fill: r ?? "#000",
                opacity: l
            }), i.jsx(oi, {
                src: n ?? "",
                fill: "#ffffff",
                stroke: "#ffffff",
                className: "absolute fill-white stroke-white",
                width: 20,
                opacity: l
            })]
        })
    })
}
  , ii = "Progress"
  , Rr = 100
  , [Ef,Im] = Ut(ii)
  , [_f,Nf] = Ef(ii)
  , si = d.forwardRef( (t, e) => {
    const {__scopeProgress: r, value: n, max: a, getValueLabel: o=kf, ...s} = t
      , l = cn(a) ? a : Rr
      , c = ci(n, l) ? n : null
      , u = gr(c) ? o(c, l) : void 0;
    return d.createElement(_f, {
        scope: r,
        value: c,
        max: l
    }, d.createElement(ve.div, N({
        "aria-valuemax": l,
        "aria-valuemin": 0,
        "aria-valuenow": gr(c) ? c : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": li(c, l),
        "data-value": c ?? void 0,
        "data-max": l
    }, s, {
        ref: e
    })))
}
);
si.propTypes = {
    max(t, e, r) {
        const n = t[e]
          , a = String(n);
        return n && !cn(n) ? new Error(Df(a, r)) : null
    },
    value(t, e, r) {
        const n = t[e]
          , a = String(n)
          , o = cn(t.max) ? t.max : Rr;
        return n != null && !ci(n, o) ? new Error(Af(a, r)) : null
    }
};
const Mf = "ProgressIndicator"
  , Pf = d.forwardRef( (t, e) => {
    var r;
    const {__scopeProgress: n, ...a} = t
      , o = Nf(Mf, n);
    return d.createElement(ve.div, N({
        "data-state": li(o.value, o.max),
        "data-value": (r = o.value) !== null && r !== void 0 ? r : void 0,
        "data-max": o.max
    }, a, {
        ref: e
    }))
}
);
function kf(t, e) {
    return `${Math.round(t / e * 100)}%`
}
function li(t, e) {
    return t == null ? "indeterminate" : t === e ? "complete" : "loading"
}
function gr(t) {
    return typeof t == "number"
}
function cn(t) {
    return gr(t) && !isNaN(t) && t > 0
}
function ci(t, e) {
    return gr(t) && !isNaN(t) && t <= e && t >= 0
}
function Df(t, e) {
    return `Invalid prop \`max\` of value \`${t}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Rr}\`.`
}
function Af(t, e) {
    return `Invalid prop \`value\` of value \`${t}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Rr} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`
}
const If = si
  , Rf = Pf;
function Lf(t) {
    const e = d.useRef({
        value: t,
        previous: t
    });
    return d.useMemo( () => (e.current.value !== t && (e.current.previous = e.current.value,
    e.current.value = t),
    e.current.previous), [t])
}
const Uf = [" ", "Enter", "ArrowUp", "ArrowDown"]
  , Ff = [" ", "Enter"]
  , Lr = "Select"
  , [Ur,Mn,Wf] = Bi(Lr)
  , [Tt,Rm] = Ut(Lr, [Wf, gt])
  , Pn = gt()
  , [Vf,ot] = Tt(Lr)
  , [Bf,Hf] = Tt(Lr)
  , qf = t => {
    const {__scopeSelect: e, children: r, open: n, defaultOpen: a, onOpenChange: o, value: s, defaultValue: l, onValueChange: c, dir: u, name: f, autoComplete: g, disabled: m, required: p} = t
      , h = Pn(e)
      , [v,b] = d.useState(null)
      , [y,x] = d.useState(null)
      , [w,T] = d.useState(!1)
      , _ = zi(u)
      , [R=!1,k] = cr({
        prop: n,
        defaultProp: a,
        onChange: o
    })
      , [W,J] = cr({
        prop: s,
        defaultProp: l,
        onChange: c
    })
      , ee = d.useRef(null)
      , de = v ? !!v.closest("form") : !0
      , [ne,K] = d.useState(new Set)
      , fe = Array.from(ne).map(D => D.props.value).join(";");
    return d.createElement(mn, h, d.createElement(Vf, {
        required: p,
        scope: e,
        trigger: v,
        onTriggerChange: b,
        valueNode: y,
        onValueNodeChange: x,
        valueNodeHasChildren: w,
        onValueNodeHasChildrenChange: T,
        contentId: br(),
        value: W,
        onValueChange: J,
        open: R,
        onOpenChange: k,
        dir: _,
        triggerPointerDownPosRef: ee,
        disabled: m
    }, d.createElement(Ur.Provider, {
        scope: e
    }, d.createElement(Bf, {
        scope: t.__scopeSelect,
        onNativeOptionAdd: d.useCallback(D => {
            K(Y => new Set(Y).add(D))
        }
        , []),
        onNativeOptionRemove: d.useCallback(D => {
            K(Y => {
                const te = new Set(Y);
                return te.delete(D),
                te
            }
            )
        }
        , [])
    }, r)), de ? d.createElement(hi, {
        key: fe,
        "aria-hidden": !0,
        required: p,
        tabIndex: -1,
        name: f,
        autoComplete: g,
        value: W,
        onChange: D => J(D.target.value),
        disabled: m
    }, W === void 0 ? d.createElement("option", {
        value: ""
    }) : null, Array.from(ne)) : null))
}
  , zf = "SelectTrigger"
  , Yf = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, disabled: n=!1, ...a} = t
      , o = Pn(r)
      , s = ot(zf, r)
      , l = s.disabled || n
      , c = xe(e, s.onTriggerChange)
      , u = Mn(r)
      , [f,g,m] = mi(h => {
        const v = u().filter(x => !x.disabled)
          , b = v.find(x => x.value === s.value)
          , y = pi(v, h, b);
        y !== void 0 && s.onValueChange(y.value)
    }
    )
      , p = () => {
        l || (s.onOpenChange(!0),
        m())
    }
    ;
    return d.createElement(pn, N({
        asChild: !0
    }, o), d.createElement(ve.button, N({
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": fi(s.value) ? "" : void 0
    }, a, {
        ref: c,
        onClick: X(a.onClick, h => {
            h.currentTarget.focus()
        }
        ),
        onPointerDown: X(a.onPointerDown, h => {
            const v = h.target;
            v.hasPointerCapture(h.pointerId) && v.releasePointerCapture(h.pointerId),
            h.button === 0 && h.ctrlKey === !1 && (p(),
            s.triggerPointerDownPosRef.current = {
                x: Math.round(h.pageX),
                y: Math.round(h.pageY)
            },
            h.preventDefault())
        }
        ),
        onKeyDown: X(a.onKeyDown, h => {
            const v = f.current !== "";
            !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && g(h.key),
            !(v && h.key === " ") && Uf.includes(h.key) && (p(),
            h.preventDefault())
        }
        )
    })))
}
)
  , Gf = "SelectValue"
  , Kf = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, className: n, style: a, children: o, placeholder: s="", ...l} = t
      , c = ot(Gf, r)
      , {onValueNodeHasChildrenChange: u} = c
      , f = o !== void 0
      , g = xe(e, c.onValueNodeChange);
    return At( () => {
        u(f)
    }
    , [u, f]),
    d.createElement(ve.span, N({}, l, {
        ref: g,
        style: {
            pointerEvents: "none"
        }
    }), fi(c.value) ? d.createElement(d.Fragment, null, s) : o)
}
)
  , Xf = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, children: n, ...a} = t;
    return d.createElement(ve.span, N({
        "aria-hidden": !0
    }, a, {
        ref: e
    }), n || "▼")
}
)
  , Qf = t => d.createElement(_a, N({
    asChild: !0
}, t))
  , pt = "SelectContent"
  , Zf = d.forwardRef( (t, e) => {
    const r = ot(pt, t.__scopeSelect)
      , [n,a] = d.useState();
    if (At( () => {
        a(new DocumentFragment)
    }
    , []),
    !r.open) {
        const o = n;
        return o ? Aa.createPortal(d.createElement(ui, {
            scope: t.__scopeSelect
        }, d.createElement(Ur.Slot, {
            scope: t.__scopeSelect
        }, d.createElement("div", null, t.children))), o) : null
    }
    return d.createElement(Jf, N({}, t, {
        ref: e
    }))
}
)
  , Ue = 10
  , [ui,Fr] = Tt(pt)
  , Jf = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, position: n="item-aligned", onCloseAutoFocus: a, onEscapeKeyDown: o, onPointerDownOutside: s, side: l, sideOffset: c, align: u, alignOffset: f, arrowPadding: g, collisionBoundary: m, collisionPadding: p, sticky: h, hideWhenDetached: v, avoidCollisions: b, ...y} = t
      , x = ot(pt, r)
      , [w,T] = d.useState(null)
      , [_,R] = d.useState(null)
      , k = xe(e, C => T(C))
      , [W,J] = d.useState(null)
      , [ee,de] = d.useState(null)
      , ne = Mn(r)
      , [K,fe] = d.useState(!1)
      , D = d.useRef(!1);
    d.useEffect( () => {
        if (w)
            return Na(w)
    }
    , [w]),
    ka();
    const Y = d.useCallback(C => {
        const [B,...ie] = ne().map(A => A.ref.current)
          , [H] = ie.slice(-1)
          , V = document.activeElement;
        for (const A of C)
            if (A === V || (A == null || A.scrollIntoView({
                block: "nearest"
            }),
            A === B && _ && (_.scrollTop = 0),
            A === H && _ && (_.scrollTop = _.scrollHeight),
            A == null || A.focus(),
            document.activeElement !== V))
                return
    }
    , [ne, _])
      , te = d.useCallback( () => Y([W, w]), [Y, W, w]);
    d.useEffect( () => {
        K && te()
    }
    , [K, te]);
    const {onOpenChange: De, triggerPointerDownPosRef: $e} = x;
    d.useEffect( () => {
        if (w) {
            let C = {
                x: 0,
                y: 0
            };
            const B = H => {
                var V, A, me, ae;
                C = {
                    x: Math.abs(Math.round(H.pageX) - ((V = (A = $e.current) === null || A === void 0 ? void 0 : A.x) !== null && V !== void 0 ? V : 0)),
                    y: Math.abs(Math.round(H.pageY) - ((me = (ae = $e.current) === null || ae === void 0 ? void 0 : ae.y) !== null && me !== void 0 ? me : 0))
                }
            }
              , ie = H => {
                C.x <= 10 && C.y <= 10 ? H.preventDefault() : w.contains(H.target) || De(!1),
                document.removeEventListener("pointermove", B),
                $e.current = null
            }
            ;
            return $e.current !== null && (document.addEventListener("pointermove", B),
            document.addEventListener("pointerup", ie, {
                capture: !0,
                once: !0
            })),
            () => {
                document.removeEventListener("pointermove", B),
                document.removeEventListener("pointerup", ie, {
                    capture: !0
                })
            }
        }
    }
    , [w, De, $e]),
    d.useEffect( () => {
        const C = () => De(!1);
        return window.addEventListener("blur", C),
        window.addEventListener("resize", C),
        () => {
            window.removeEventListener("blur", C),
            window.removeEventListener("resize", C)
        }
    }
    , [De]);
    const [Ze,Je] = mi(C => {
        const B = ne().filter(V => !V.disabled)
          , ie = B.find(V => V.ref.current === document.activeElement)
          , H = pi(B, C, ie);
        H && setTimeout( () => H.ref.current.focus())
    }
    )
      , Ve = d.useCallback( (C, B, ie) => {
        const H = !D.current && !ie;
        (x.value !== void 0 && x.value === B || H) && (J(C),
        H && (D.current = !0))
    }
    , [x.value])
      , Be = d.useCallback( () => w == null ? void 0 : w.focus(), [w])
      , Ae = d.useCallback( (C, B, ie) => {
        const H = !D.current && !ie;
        (x.value !== void 0 && x.value === B || H) && de(C)
    }
    , [x.value])
      , Ie = n === "popper" ? ya : eh
      , Re = Ie === ya ? {
        side: l,
        sideOffset: c,
        align: u,
        alignOffset: f,
        arrowPadding: g,
        collisionBoundary: m,
        collisionPadding: p,
        sticky: h,
        hideWhenDetached: v,
        avoidCollisions: b
    } : {};
    return d.createElement(ui, {
        scope: r,
        content: w,
        viewport: _,
        onViewportChange: R,
        itemRefCallback: Ve,
        selectedItem: W,
        onItemLeave: Be,
        itemTextRefCallback: Ae,
        focusSelectedItem: te,
        selectedItemText: ee,
        position: n,
        isPositioned: K,
        searchRef: Ze
    }, d.createElement(Ma, {
        as: Pa,
        allowPinchZoom: !0
    }, d.createElement(Da, {
        asChild: !0,
        trapped: x.open,
        onMountAutoFocus: C => {
            C.preventDefault()
        }
        ,
        onUnmountAutoFocus: X(a, C => {
            var B;
            (B = x.trigger) === null || B === void 0 || B.focus({
                preventScroll: !0
            }),
            C.preventDefault()
        }
        )
    }, d.createElement(fn, {
        asChild: !0,
        disableOutsidePointerEvents: !0,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: C => C.preventDefault(),
        onDismiss: () => x.onOpenChange(!1)
    }, d.createElement(Ie, N({
        role: "listbox",
        id: x.contentId,
        "data-state": x.open ? "open" : "closed",
        dir: x.dir,
        onContextMenu: C => C.preventDefault()
    }, y, Re, {
        onPlaced: () => fe(!0),
        ref: k,
        style: {
            display: "flex",
            flexDirection: "column",
            outline: "none",
            ...y.style
        },
        onKeyDown: X(y.onKeyDown, C => {
            const B = C.ctrlKey || C.altKey || C.metaKey;
            if (C.key === "Tab" && C.preventDefault(),
            !B && C.key.length === 1 && Je(C.key),
            ["ArrowUp", "ArrowDown", "Home", "End"].includes(C.key)) {
                let H = ne().filter(V => !V.disabled).map(V => V.ref.current);
                if (["ArrowUp", "End"].includes(C.key) && (H = H.slice().reverse()),
                ["ArrowUp", "ArrowDown"].includes(C.key)) {
                    const V = C.target
                      , A = H.indexOf(V);
                    H = H.slice(A + 1)
                }
                setTimeout( () => Y(H)),
                C.preventDefault()
            }
        }
        )
    }))))))
}
)
  , eh = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, onPlaced: n, ...a} = t
      , o = ot(pt, r)
      , s = Fr(pt, r)
      , [l,c] = d.useState(null)
      , [u,f] = d.useState(null)
      , g = xe(e, k => f(k))
      , m = Mn(r)
      , p = d.useRef(!1)
      , h = d.useRef(!0)
      , {viewport: v, selectedItem: b, selectedItemText: y, focusSelectedItem: x} = s
      , w = d.useCallback( () => {
        if (o.trigger && o.valueNode && l && u && v && b && y) {
            const k = o.trigger.getBoundingClientRect()
              , W = u.getBoundingClientRect()
              , J = o.valueNode.getBoundingClientRect()
              , ee = y.getBoundingClientRect();
            if (o.dir !== "rtl") {
                const V = ee.left - W.left
                  , A = J.left - V
                  , me = k.left - A
                  , ae = k.width + me
                  , Ot = Math.max(ae, W.width)
                  , et = window.innerWidth - Ue
                  , Le = qn(A, [Ue, et - Ot]);
                l.style.minWidth = ae + "px",
                l.style.left = Le + "px"
            } else {
                const V = W.right - ee.right
                  , A = window.innerWidth - J.right - V
                  , me = window.innerWidth - k.right - A
                  , ae = k.width + me
                  , Ot = Math.max(ae, W.width)
                  , et = window.innerWidth - Ue
                  , Le = qn(A, [Ue, et - Ot]);
                l.style.minWidth = ae + "px",
                l.style.right = Le + "px"
            }
            const de = m()
              , ne = window.innerHeight - Ue * 2
              , K = v.scrollHeight
              , fe = window.getComputedStyle(u)
              , D = parseInt(fe.borderTopWidth, 10)
              , Y = parseInt(fe.paddingTop, 10)
              , te = parseInt(fe.borderBottomWidth, 10)
              , De = parseInt(fe.paddingBottom, 10)
              , $e = D + Y + K + De + te
              , Ze = Math.min(b.offsetHeight * 5, $e)
              , Je = window.getComputedStyle(v)
              , Ve = parseInt(Je.paddingTop, 10)
              , Be = parseInt(Je.paddingBottom, 10)
              , Ae = k.top + k.height / 2 - Ue
              , Ie = ne - Ae
              , Re = b.offsetHeight / 2
              , C = b.offsetTop + Re
              , B = D + Y + C
              , ie = $e - B;
            if (B <= Ae) {
                const V = b === de[de.length - 1].ref.current;
                l.style.bottom = "0px";
                const A = u.clientHeight - v.offsetTop - v.offsetHeight
                  , me = Math.max(Ie, Re + (V ? Be : 0) + A + te)
                  , ae = B + me;
                l.style.height = ae + "px"
            } else {
                const V = b === de[0].ref.current;
                l.style.top = "0px";
                const me = Math.max(Ae, D + v.offsetTop + (V ? Ve : 0) + Re) + ie;
                l.style.height = me + "px",
                v.scrollTop = B - Ae + v.offsetTop
            }
            l.style.margin = `${Ue}px 0`,
            l.style.minHeight = Ze + "px",
            l.style.maxHeight = ne + "px",
            n == null || n(),
            requestAnimationFrame( () => p.current = !0)
        }
    }
    , [m, o.trigger, o.valueNode, l, u, v, b, y, o.dir, n]);
    At( () => w(), [w]);
    const [T,_] = d.useState();
    At( () => {
        u && _(window.getComputedStyle(u).zIndex)
    }
    , [u]);
    const R = d.useCallback(k => {
        k && h.current === !0 && (w(),
        x == null || x(),
        h.current = !1)
    }
    , [w, x]);
    return d.createElement(th, {
        scope: r,
        contentWrapper: l,
        shouldExpandOnScrollRef: p,
        onScrollButtonChange: R
    }, d.createElement("div", {
        ref: c,
        style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: T
        }
    }, d.createElement(ve.div, N({}, a, {
        ref: g,
        style: {
            boxSizing: "border-box",
            maxHeight: "100%",
            ...a.style
        }
    }))))
}
)
  , ya = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, align: n="start", collisionPadding: a=Ue, ...o} = t
      , s = Pn(r);
    return d.createElement(hn, N({}, s, o, {
        ref: e,
        align: n,
        collisionPadding: a,
        style: {
            boxSizing: "border-box",
            ...o.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
    }))
}
)
  , [th,rh] = Tt(pt, {})
  , $a = "SelectViewport"
  , nh = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, ...n} = t
      , a = Fr($a, r)
      , o = rh($a, r)
      , s = xe(e, a.onViewportChange)
      , l = d.useRef(0);
    return d.createElement(d.Fragment, null, d.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
        }
    }), d.createElement(Ur.Slot, {
        scope: r
    }, d.createElement(ve.div, N({
        "data-radix-select-viewport": "",
        role: "presentation"
    }, n, {
        ref: s,
        style: {
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...n.style
        },
        onScroll: X(n.onScroll, c => {
            const u = c.currentTarget
              , {contentWrapper: f, shouldExpandOnScrollRef: g} = o;
            if (g != null && g.current && f) {
                const m = Math.abs(l.current - u.scrollTop);
                if (m > 0) {
                    const p = window.innerHeight - Ue * 2
                      , h = parseFloat(f.style.minHeight)
                      , v = parseFloat(f.style.height)
                      , b = Math.max(h, v);
                    if (b < p) {
                        const y = b + m
                          , x = Math.min(p, y)
                          , w = y - x;
                        f.style.height = x + "px",
                        f.style.bottom === "0px" && (u.scrollTop = w > 0 ? w : 0,
                        f.style.justifyContent = "flex-end")
                    }
                }
            }
            l.current = u.scrollTop
        }
        )
    }))))
}
)
  , ah = "SelectGroup"
  , [Lm,oh] = Tt(ah)
  , ih = "SelectLabel"
  , sh = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, ...n} = t
      , a = oh(ih, r);
    return d.createElement(ve.div, N({
        id: a.id
    }, n, {
        ref: e
    }))
}
)
  , un = "SelectItem"
  , [lh,di] = Tt(un)
  , ch = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, value: n, disabled: a=!1, textValue: o, ...s} = t
      , l = ot(un, r)
      , c = Fr(un, r)
      , u = l.value === n
      , [f,g] = d.useState(o ?? "")
      , [m,p] = d.useState(!1)
      , h = xe(e, y => {
        var x;
        return (x = c.itemRefCallback) === null || x === void 0 ? void 0 : x.call(c, y, n, a)
    }
    )
      , v = br()
      , b = () => {
        a || (l.onValueChange(n),
        l.onOpenChange(!1))
    }
    ;
    if (n === "")
        throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
    return d.createElement(lh, {
        scope: r,
        value: n,
        disabled: a,
        textId: v,
        isSelected: u,
        onItemTextChange: d.useCallback(y => {
            g(x => {
                var w;
                return x || ((w = y == null ? void 0 : y.textContent) !== null && w !== void 0 ? w : "").trim()
            }
            )
        }
        , [])
    }, d.createElement(Ur.ItemSlot, {
        scope: r,
        value: n,
        disabled: a,
        textValue: f
    }, d.createElement(ve.div, N({
        role: "option",
        "aria-labelledby": v,
        "data-highlighted": m ? "" : void 0,
        "aria-selected": u && m,
        "data-state": u ? "checked" : "unchecked",
        "aria-disabled": a || void 0,
        "data-disabled": a ? "" : void 0,
        tabIndex: a ? void 0 : -1
    }, s, {
        ref: h,
        onFocus: X(s.onFocus, () => p(!0)),
        onBlur: X(s.onBlur, () => p(!1)),
        onPointerUp: X(s.onPointerUp, b),
        onPointerMove: X(s.onPointerMove, y => {
            if (a) {
                var x;
                (x = c.onItemLeave) === null || x === void 0 || x.call(c)
            } else
                y.currentTarget.focus({
                    preventScroll: !0
                })
        }
        ),
        onPointerLeave: X(s.onPointerLeave, y => {
            if (y.currentTarget === document.activeElement) {
                var x;
                (x = c.onItemLeave) === null || x === void 0 || x.call(c)
            }
        }
        ),
        onKeyDown: X(s.onKeyDown, y => {
            var x;
            ((x = c.searchRef) === null || x === void 0 ? void 0 : x.current) !== "" && y.key === " " || (Ff.includes(y.key) && b(),
            y.key === " " && y.preventDefault())
        }
        )
    }))))
}
)
  , nr = "SelectItemText"
  , uh = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, className: n, style: a, ...o} = t
      , s = ot(nr, r)
      , l = Fr(nr, r)
      , c = di(nr, r)
      , u = Hf(nr, r)
      , [f,g] = d.useState(null)
      , m = xe(e, y => g(y), c.onItemTextChange, y => {
        var x;
        return (x = l.itemTextRefCallback) === null || x === void 0 ? void 0 : x.call(l, y, c.value, c.disabled)
    }
    )
      , p = f == null ? void 0 : f.textContent
      , h = d.useMemo( () => d.createElement("option", {
        key: c.value,
        value: c.value,
        disabled: c.disabled
    }, p), [c.disabled, c.value, p])
      , {onNativeOptionAdd: v, onNativeOptionRemove: b} = u;
    return At( () => (v(h),
    () => b(h)), [v, b, h]),
    d.createElement(d.Fragment, null, d.createElement(ve.span, N({
        id: c.textId
    }, o, {
        ref: m
    })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? Aa.createPortal(o.children, s.valueNode) : null)
}
)
  , dh = "SelectItemIndicator"
  , fh = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, ...n} = t;
    return di(dh, r).isSelected ? d.createElement(ve.span, N({
        "aria-hidden": !0
    }, n, {
        ref: e
    })) : null
}
)
  , hh = d.forwardRef( (t, e) => {
    const {__scopeSelect: r, ...n} = t;
    return d.createElement(ve.div, N({
        "aria-hidden": !0
    }, n, {
        ref: e
    }))
}
);
function fi(t) {
    return t === "" || t === void 0
}
const hi = d.forwardRef( (t, e) => {
    const {value: r, ...n} = t
      , a = d.useRef(null)
      , o = xe(e, a)
      , s = Lf(r);
    return d.useEffect( () => {
        const l = a.current
          , c = window.HTMLSelectElement.prototype
          , f = Object.getOwnPropertyDescriptor(c, "value").set;
        if (s !== r && f) {
            const g = new Event("change",{
                bubbles: !0
            });
            f.call(l, r),
            l.dispatchEvent(g)
        }
    }
    , [s, r]),
    d.createElement(Hi, {
        asChild: !0
    }, d.createElement("select", N({}, n, {
        ref: o,
        defaultValue: r
    })))
}
);
hi.displayName = "BubbleSelect";
function mi(t) {
    const e = qi(t)
      , r = d.useRef("")
      , n = d.useRef(0)
      , a = d.useCallback(s => {
        const l = r.current + s;
        e(l),
        function c(u) {
            r.current = u,
            window.clearTimeout(n.current),
            u !== "" && (n.current = window.setTimeout( () => c(""), 1e3))
        }(l)
    }
    , [e])
      , o = d.useCallback( () => {
        r.current = "",
        window.clearTimeout(n.current)
    }
    , []);
    return d.useEffect( () => () => window.clearTimeout(n.current), []),
    [r, a, o]
}
function pi(t, e, r) {
    const a = e.length > 1 && Array.from(e).every(u => u === e[0]) ? e[0] : e
      , o = r ? t.indexOf(r) : -1;
    let s = mh(t, Math.max(o, 0));
    a.length === 1 && (s = s.filter(u => u !== r));
    const c = s.find(u => u.textValue.toLowerCase().startsWith(a.toLowerCase()));
    return c !== r ? c : void 0
}
function mh(t, e) {
    return t.map( (r, n) => t[(e + n) % t.length])
}
const ph = qf
  , vi = Yf
  , vh = Kf
  , gh = Xf
  , bh = Qf
  , gi = Zf
  , wh = nh
  , bi = sh
  , wi = ch
  , xh = uh
  , yh = fh
  , xi = hh
  , yi = ph
  , $i = vh
  , kn = d.forwardRef( ({className: t, children: e, ...r}, n) => i.jsxs(vi, {
    ref: n,
    className: G("flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
    ...r,
    children: [e, i.jsx(gh, {
        asChild: !0,
        children: i.jsx(as, {
            className: "h-4 w-4 opacity-50"
        })
    })]
}));
kn.displayName = vi.displayName;
const Dn = d.forwardRef( ({className: t, children: e, position: r="popper", ...n}, a) => i.jsx(bh, {
    children: i.jsx(gi, {
        ref: a,
        className: G("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80", r === "popper" && "translate-y-1", t),
        position: r,
        ...n,
        children: i.jsx(wh, {
            className: G("p-1", r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: e
        })
    })
}));
Dn.displayName = gi.displayName;
const $h = d.forwardRef( ({className: t, ...e}, r) => i.jsx(bi, {
    ref: r,
    className: G("py-1.5 pl-8 pr-2 text-sm font-semibold", t),
    ...e
}));
$h.displayName = bi.displayName;
const An = d.forwardRef( ({className: t, children: e, ...r}, n) => i.jsxs(wi, {
    ref: n,
    className: G("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t),
    ...r,
    children: [i.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: i.jsx(yh, {
            children: i.jsx(Yi, {
                className: "h-4 w-4"
            })
        })
    }), i.jsx(xh, {
        children: e
    })]
}));
An.displayName = wi.displayName;
const Th = d.forwardRef( ({className: t, ...e}, r) => i.jsx(xi, {
    ref: r,
    className: G("-mx-1 my-1 h-px bg-muted", t),
    ...e
}));
Th.displayName = xi.displayName;
const Sh = () => {
    const {selectedCursus: t, cursus: e, selectCursusFromId: r} = Se();
    if (!t)
        return i.jsx("span", {
            children: "No cursus"
        });
    const {id: n, name: a, grade: o} = t
      , s = (c, u) => u ? `${u} at ${c}` : c
      , l = c => {
        r(parseInt(c))
    }
    ;
    return i.jsx("div", {
        children: e && e.length > 1 ? i.jsxs(yi, {
            onValueChange: c => l(c),
            value: `${n}`,
            children: [i.jsx(kn, {
                className: "border-none px-1 h-6 rounded drop-shadow-m focus:ring-0 focus:ring-offset-0",
                children: i.jsx($i, {
                    children: s(a, o)
                })
            }), i.jsx(Dn, {
                children: e.map( (c, u) => i.jsx(An, {
                    typeof: "number",
                    value: `${c.id}`,
                    children: s(c.name, c.grade)
                }, u))
            })]
        }) : i.jsx(i.Fragment, {
            children: s(a, o)
        })
    })
}
  , Ch = () => {
    const {selectedCursus: t} = Se()
      , {user: {login: e}} = re()
      , [r,n] = d.useState(0);
    d.useEffect( () => {
        if (!t)
            return;
        const s = setTimeout( () => n(t.progress), 300);
        return () => clearTimeout(s)
    }
    , [t]);
    const a = s => (s < 10 ? "0" : "") + s
      , o = t ? a(t.level) : 0;
    return i.jsxs("div", {
        className: "px-8 flex flex-row gap-2 items-end",
        children: [i.jsx("h1", {
            className: "text-4xl font-bold drop-shadow-md leading-1 h-8",
            children: o
        }), i.jsxs("div", {
            className: "w-full flex flex-col justify-between",
            children: [i.jsxs("div", {
                className: "flex flex-row font-bold justify-between text-sm drop-shadow-md mb-1 items-center",
                children: [i.jsxs("div", {
                    className: "drop-shadow-md",
                    children: [a(r), "%"]
                }), i.jsx(Sh, {})]
            }), i.jsx("a", {
                href: `https://profile.intra.42.fr/users/${e}/experiences/cursus_id/${t == null ? void 0 : t.id}`,
                children: i.jsx(If, {
                    className: "w-full h-2.5 rounded drop-shadow-md relative overflow-hidden bg-secondary",
                    value: r,
                    style: {
                        transform: "translateZ(0)"
                    },
                    children: i.jsx(Rf, {
                        className: "h-full w-full flex-1 transition duration-1000 ease-out",
                        style: {
                            transform: `translateX(-${100 - (r || 0)}%)`,
                            backgroundColor: Qe()
                        }
                    })
                })
            })]
        })]
    })
}
  , Oh = Ia("inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
            secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
            destructive: "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function jh({className: t, variant: e, ...r}) {
    return i.jsx("div", {
        className: G(Oh({
            variant: e
        }), t),
        ...r
    })
}
const Eh = () => {
    const {user: {groups: t}} = re();
    return i.jsx("div", {
        className: "py-2 flex gap-2 w-full overflow-x-auto",
        style: {
            scrollbarColor: `${Qe()} transparent`,
            scrollbarWidth: "thin"
        },
        children: t && t.map( (e, r) => i.jsx(jh, {
            className: "flex-shrink-0 mx-1 px-3.5 py-1.5 rounded border shadow-base",
            style: {
                backgroundColor: e.color,
                borderColor: e.color
            },
            children: e.name.toUpperCase()
        }, r))
    })
}
  , _h = t => i.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 10,
    height: 10,
    fill: "none",
    ...t,
    children: i.jsx("circle", {
        cx: 5,
        cy: 5,
        r: 4,
        fill: t.fill,
        stroke: t.stroke
    })
})
  , Nh = t => i.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 22,
    height: "auto",
    fill: "#FFF",
    viewBox: "0 0 625 625",
    ...t,
    children: i.jsx("path", {
        d: "m10 207l38 30-36 69c-18 32 13 63 33 74 19 11 50 12 78 12l51-83 38 21-66-123-135 1m6 169l82 152c17 21 48 26 80 25h87v-144l-165-1c-26 2-59-4-85-32m517-280l-45 19-43-65c-19-31-61-19-80-7-19 12-34 38-48 62l48 85-37 23 140 2 65-119zm-151-77l-173-2c-26 4-46 29-61 58l-42 76 126 70 81-143c11-23 32-50 69-58m8 586l5-48 78-6c37-2 46-44 45-67-1-22-16-48-31-72l-97.16.925-3-43-69 122 73 114m140-94l85-150c9-25-3-54-21-81l-46-74-122 76 86 140c15 21 28 52 17 89z"
    })
})
  , Mh = () => {
    const {user: {location: t}} = re()
      , e = t ? "#B8F170" : "#FFB526"
      , r = t ? "#10742C" : "#A57416";
    return i.jsxs("div", {
        className: "text-sm flex flex-row items-center gap-1",
        children: [i.jsx(_h, {
            fill: e,
            stroke: r
        }), i.jsx("div", {
            className: G("drop-shadow-md", t ? "text-white" : "text-gray-300 italic"),
            children: t ?? "unavailable"
        })]
    })
}
  , Ph = () => {
    const {user: {profilePicture: t}} = re();
    return i.jsx("div", {
        className: "grid place-items-center",
        children: i.jsx("div", {
            className: "w-52 h-52 text-black md:w-40 md:h-40 lg:h-28 lg:w-28 bg-cover bg-no-repeat bg-center rounded-full bg-gray-300 border-2 shadow-base",
            style: {
                backgroundImage: `url(${t})`,
                borderColor: Qe()
            }
        })
    })
}
  , kh = "AlertDialog"
  , [Dh,Um] = Ut(kh, [Ra])
  , St = Ra()
  , Ah = t => {
    const {__scopeAlertDialog: e, ...r} = t
      , n = St(e);
    return d.createElement(Gi, N({}, n, r, {
        modal: !0
    }))
}
  , Ih = d.forwardRef( (t, e) => {
    const {__scopeAlertDialog: r, ...n} = t
      , a = St(r);
    return d.createElement(Ki, N({}, a, n, {
        ref: e
    }))
}
)
  , Rh = t => {
    const {__scopeAlertDialog: e, ...r} = t
      , n = St(e);
    return d.createElement(Xi, N({}, n, r))
}
  , Lh = d.forwardRef( (t, e) => {
    const {__scopeAlertDialog: r, ...n} = t
      , a = St(r);
    return d.createElement(Qi, N({}, a, n, {
        ref: e
    }))
}
)
  , Ti = "AlertDialogContent"
  , [Uh,Fm] = Dh(Ti)
  , Fh = d.forwardRef( (t, e) => {
    const {__scopeAlertDialog: r, children: n, ...a} = t
      , o = St(r)
      , s = d.useRef(null)
      , l = xe(e, s)
      , c = d.useRef(null);
    return d.createElement(Zi, {
        contentName: Ti,
        titleName: Wh,
        docsSlug: "alert-dialog"
    }, d.createElement(Uh, {
        scope: r,
        cancelRef: c
    }, d.createElement(Ji, N({
        role: "alertdialog"
    }, o, a, {
        ref: l,
        onOpenAutoFocus: X(a.onOpenAutoFocus, u => {
            var f;
            u.preventDefault(),
            (f = c.current) === null || f === void 0 || f.focus({
                preventScroll: !0
            })
        }
        ),
        onPointerDownOutside: u => u.preventDefault(),
        onInteractOutside: u => u.preventDefault()
    }), d.createElement(Ea, null, n), !1)))
}
)
  , Wh = "AlertDialogTitle"
  , Vh = d.forwardRef( (t, e) => {
    const {__scopeAlertDialog: r, ...n} = t
      , a = St(r);
    return d.createElement(es, N({}, a, n, {
        ref: e
    }))
}
)
  , Bh = Ah
  , Ta = Ih
  , Hh = Rh
  , qh = Lh
  , zh = Fh
  , Yh = Vh
  , Gh = () => {
    const {user: t} = ge()
      , e = vt()
      , {isStaff: r} = wt()
      , {user: {userDataId: n}} = re()
      , {selectedCursus: a} = Se()
      , {primaryCampus: o} = Ft();
    return yr({
        mutationFn: async c => {
            if (!o)
                throw new Error("No campus specified.");
            const u = new URL(`/user_data/${n}/give_correction_point.json`,"https://profile.intra.42.fr")
              , f = new Headers;
            f.append("Content-Type", "application/json"),
            f.append("Authorization", `Bearer ${(t == null ? void 0 : t.access_token) || ""}`),
            r && f.append("X-Staff", "true");
            const g = await fetch(u.toString(), {
                method: "POST",
                headers: f,
                body: JSON.stringify({
                    campus_id: o.id,
                    cursus_slug: a == null ? void 0 : a.slug,
                    correction_point: c
                })
            });
            if (!g.ok)
                throw new Error(`Error while giving points: ${g.status} - ${g.statusText}`)
        }
        ,
        onSuccess: (c, u) => {
            e.setQueryData(["v2", "user"], f => ({
                ...f,
                evaluationPoints: (f == null ? void 0 : f.evaluationPoints) - u
            })),
            mt({
                description: "Points successfully given!",
                className: "bg-legacy-main text-white border border-legacy-main/50",
                duration: 2e3
            })
        }
        ,
        onError: () => {
            mt({
                description: "Error while giving points",
                className: "bg-red-500 text-white border border-red-500/50 z-100",
                duration: 2e5
            })
        }
        ,
        onSettled: () => {
            e.invalidateQueries({
                queryKey: ["v2", "cursus"]
            })
        }
    })
}
  , Kh = () => {
    const {user: {evaluationPoints: t}} = re()
      , e = 5
      , r = Array.from(new Set([1, 2, 3, 4, 5, 10, t - e]))
      , [n,a] = d.useState()
      , [o,s] = d.useState(!1)
      , l = u => {
        a(u.target.value)
    }
      , {mutateAsync: c} = Gh();
    return i.jsx(i.Fragment, {
        children: i.jsxs(Bh, {
            open: o,
            onOpenChange: s,
            children: [i.jsx(Ta, {
                children: i.jsx(Nh, {})
            }), i.jsxs(Hh, {
                children: [i.jsx(qh, {
                    className: "alert-dialog-overlay"
                }), i.jsx(zh, {
                    className: "alert-dialog-content",
                    children: i.jsxs("form", {
                        onSubmit: u => {
                            c(Number(n)).then( () => s(!1)),
                            u.preventDefault()
                        }
                        ,
                        children: [i.jsxs("span", {
                            className: "flex flex-col",
                            children: [i.jsx(Yh, {
                                className: "alert-dialog-title font-bold",
                                children: "Give evaluation points"
                            }), i.jsxs("legend", {
                                children: [i.jsxs("p", {
                                    children: ["If you have more than ", e, " evaluation points, you now have the possibility to give them back to the 42 pool!"]
                                }), i.jsx("br", {}), i.jsx("p", {
                                    children: "That will make you more easily eligible to make new evaluations, and it will also make the sales happen sooner."
                                }), i.jsx("p", {
                                    className: "font-bold",
                                    children: "You won't be able to get them back."
                                }), i.jsx("br", {}), i.jsx("p", {
                                    children: "Select the number of points you wish to give away:"
                                }), i.jsx("span", {
                                    className: "separator"
                                })]
                            }), i.jsx("fieldset", {
                                className: "flex gap-4 flex-row justify-around flex-wrap",
                                children: r.map(u => {
                                    if (t - u >= e)
                                        return i.jsxs("span", {
                                            children: [i.jsx("label", {
                                                htmlFor: u.toString(),
                                                className: `rounded-full bg-legacy-main font-semibold text-white cursor-pointer ${n === u.toString() ? "selected" : ""}`,
                                                children: u
                                            }), i.jsx("input", {
                                                type: "radio",
                                                value: u,
                                                name: u.toString(),
                                                id: u.toString(),
                                                className: "hidden",
                                                onChange: l,
                                                checked: n === u.toString()
                                            })]
                                        }, u)
                                }
                                )
                            })]
                        }), i.jsxs("span", {
                            className: "flex justify-end gap-25",
                            children: [i.jsx(Ta, {
                                asChild: !0,
                                children: i.jsx("button", {
                                    className: "button bg-gray-400",
                                    children: "Cancel"
                                })
                            }), i.jsx("button", {
                                type: "submit",
                                className: "button bg-black",
                                disabled: !n,
                                children: "Donate"
                            })]
                        })]
                    })
                })]
            })]
        })
    })
}
  , Xh = ({name: t, value: e}) => e == null ? null : e < 1e3 ? i.jsxs("div", {
    children: [i.jsx("b", {
        className: "pr-1",
        children: t
    }), i.jsx("span", {
        className: "text-xs",
        children: e
    })]
}) : i.jsxs(Tn, {
    children: [i.jsxs(Sn, {
        className: "cursor-default",
        children: [i.jsx("b", {
            className: "pr-1",
            children: t
        }), i.jsx("span", {
            className: "text-xs",
            children: La(e)
        })]
    }), i.jsx(Or, {
        className: "bg-ft-gray text-white text-center px-3 py-1.5 w-20",
        children: e.toString()
    })]
})
  , Qh = ({name: t, value: e}) => e == null ? null : e < 1e3 ? i.jsxs("div", {
    children: [i.jsx("b", {
        className: "pr-1",
        children: t
    }), i.jsx("span", {
        className: "text-xs",
        children: e
    })]
}) : i.jsx(je, {
    delayDuration: 0,
    children: i.jsxs(Ee, {
        children: [i.jsxs(_e, {
            className: "cursor-default",
            children: [i.jsx("b", {
                className: "pr-1",
                children: t
            }), i.jsx("span", {
                className: "text-xs",
                children: La(e)
            })]
        }), i.jsx(Te, {
            className: "bg-ft-gray text-white",
            children: e.toString()
        })]
    })
})
  , ar = ({name: t, value: e}) => vn("(max-width: 576px)") || En ? i.jsx(Xh, {
    name: t,
    value: e
}) : i.jsx(Qh, {
    name: t,
    value: e
})
  , Zh = () => {
    const {user: {wallet: t, evaluationPoints: e}, isOnAProfile: r} = re()
      , {selectedCursus: n, selectedCoalition: a} = Se();
    return i.jsx("div", {
        className: "flex flex-row",
        children: i.jsxs("div", {
            className: "w-full border-t border-t-neutral-600 bg-ft-gray flex flex-row justify-around px-4 py-2 shadow-text-base rounded-b-xl",
            children: [i.jsx(ar, {
                name: "₳",
                value: t
            }), n && a && i.jsxs(i.Fragment, {
                children: [i.jsx(ar, {
                    name: "Rank",
                    value: a.rank
                }), i.jsx(ar, {
                    name: "Score",
                    value: a.score
                })]
            }), i.jsxs("div", {
                className: "flex flex-row space-x-3",
                children: [i.jsx(ar, {
                    name: "Ev.P",
                    value: e
                }), (n == null ? void 0 : n.canGivePoints) && !r && i.jsx(Kh, {})]
            })]
        })
    })
}
  , Jh = () => {
    const {user: t} = ge()
      , {isStaff: e} = wt()
      , r = vt();
    return yr({
        mutationFn: async () => {
            const o = new URL("/titles_users/unselected","https://profile.intra.42.fr")
              , s = new Headers;
            s.append("Content-Type", "application/json"),
            s.append("Authorization", `Bearer ${(t == null ? void 0 : t.access_token) || ""}`),
            e && s.append("X-Staff", "true");
            const l = await fetch(o.toString(), {
                method: "POST",
                headers: s
            });
            if (!l.ok)
                throw new Error(`Error while selecting title: ${l.status} - ${l.statusText}`)
        }
        ,
        onMutate: () => {
            r.setQueryData(["v2", "user"], o => {
                var s;
                return {
                    ...o,
                    titles: (s = o == null ? void 0 : o.titles) == null ? void 0 : s.map(l => ({
                        ...l,
                        selected: !1
                    }))
                }
            }
            )
        }
        ,
        onSuccess: () => {
            mt({
                description: "Title reset",
                className: "bg-legacy-main text-white border border-legacy-main/50",
                duration: 2e3
            })
        }
        ,
        onError: () => {
            mt({
                description: "Error while selecting title",
                className: "bg-red-500 text-white border border-red-500/50",
                duration: 2e3
            })
        }
    })
}
  , em = () => {
    const {user: t} = ge()
      , {isStaff: e} = wt()
      , r = vt();
    return yr({
        mutationFn: async o => {
            const s = new URL(`/titles_users/${o}/selected`,"https://profile.intra.42.fr")
              , l = new Headers;
            l.append("Content-Type", "application/json"),
            l.append("Authorization", `Bearer ${(t == null ? void 0 : t.access_token) || ""}`),
            e && l.append("X-Staff", "true");
            const c = await fetch(s.toString(), {
                method: "GET",
                headers: l
            });
            if (!c.ok)
                throw new Error(`Error while selecting title: ${c.status} - ${c.statusText}`)
        }
        ,
        onMutate: o => {
            r.setQueryData(["v2", "user"], s => {
                var l;
                return {
                    ...s,
                    titles: (l = s == null ? void 0 : s.titles) == null ? void 0 : l.map(c => c.titleUserId === o ? {
                        ...c,
                        selected: !0
                    } : {
                        ...c,
                        selected: !1
                    })
                }
            }
            )
        }
        ,
        onSuccess: () => {
            mt({
                description: "Title selected",
                className: "bg-legacy-main text-white border border-legacy-main/50",
                duration: 2e3
            })
        }
        ,
        onError: () => {
            mt({
                description: "Error while selecting title",
                className: "bg-red-500 text-white border border-red-500/50",
                duration: 2e3
            })
        }
    })
}
  , tm = (t, e) => {
    const r = t.find(n => n.selected);
    return [{
        id: 0,
        titleUserId: 0,
        name: e,
        selected: !r
    }, ...t]
}
  , rm = () => {
    const {isOnAProfile: t, user: {titles: e, displayedLogin: r, login: n}} = re()
      , a = tm(e, n)
      , o = a.find(g => g.selected)
      , [s,l] = d.useState("h-6")
      , {mutateAsync: c} = em()
      , {mutateAsync: u} = Jh()
      , f = async g => {
        g === 0 ? u() : await c(g)
    }
    ;
    return d.useEffect( () => {
        const g = o == null ? void 0 : o.name.length;
        g && g > 30 ? l("h-12 md:h-6") : l("h-8 md:h-6")
    }
    , [o]),
    i.jsx(i.Fragment, {
        children: a.length > 1 && !t && o ? i.jsx("p", {
            className: "text-sm",
            children: i.jsxs(yi, {
                onValueChange: g => f(parseInt(g)),
                value: `${o.titleUserId}`,
                children: [i.jsx(kn, {
                    className: G("border-none px-1 rounded drop-shadow-md focus:ring-1 focus:ring-offset-1", s),
                    children: i.jsx($i, {
                        children: o.name
                    })
                }), i.jsx(Dn, {
                    children: a.map( (g, m) => i.jsx(An, {
                        typeof: "number",
                        value: `${g.titleUserId}`,
                        children: g.name
                    }, m))
                })]
            })
        }) : i.jsx("p", {
            className: "text-sm",
            children: r || n
        })
    })
}
  , nm = () => {
    const {user: {firstName: t, lastName: e}} = re()
      , {isLoading: r} = wt();
    return i.jsx("div", {
        className: "border border-neutral-600 bg-ft-gray/50 rounded-xl relative flex flex-col w-full sm:gap-3 justify-between",
        children: r ? i.jsx(bt, {}) : i.jsxs(i.Fragment, {
            children: [i.jsx("div", {
                className: "absolute left-4 top-0",
                children: i.jsx(jf, {})
            }), i.jsx("div", {
                className: "absolute px-2 py-1 border rounded-full border-neutral-600 bg-ft-gray top-2 right-4",
                children: i.jsx(Mh, {})
            }), i.jsxs("div", {
                className: "pl-7 pt-8 flex flex-col lg:flex-row",
                children: [i.jsx(Ph, {}), i.jsxs("div", {
                    className: "lg:pl-2 overflow-hidden",
                    children: [i.jsxs("h2", {
                        className: "text-2xl font-bold text-center py-4 lg:text-left lg:py-0 drop-shadow-md",
                        children: [t, " ", e]
                    }), i.jsx(rm, {}), i.jsx(Eh, {})]
                })]
            }), i.jsxs("div", {
                className: "flex flex-col gap-6 lg:gap-4",
                children: [i.jsx(Ch, {}), i.jsx(Zh, {})]
            })]
        })
    })
}
  , Wm = () => {
    const {isOnAProfile: t, paceData: e} = re()
      , {selectedCoalition: r} = Se()
      , n = r == null ? void 0 : r.coverUrl
      , a = !(e != null && e.isActivated) || !(e != null && e.deadline) && !(e != null && e.etaEndOfCursus)
      , o = !!(e != null && e.paceSpeedUp);
    return i.jsxs("div", {
        children: [i.jsx("header", {
            className: "w-full xl:h-72 bg-center bg-cover bg-ft-black flex xl:flex-row text-white",
            style: {
                backgroundImage: `url(${n})`
            },
            children: i.jsxs("div", {
                className: "md:px-8 py-4 w-full flex flex-col lg:flex-row gap-6 md:gap-8",
                children: [i.jsx(nm, {}), e && i.jsx(of, {
                    profile: e,
                    legacy: a
                }), i.jsxs("div", {
                    className: "flex flex-col w-full h-full gap-4",
                    children: [i.jsxs("div", {
                        className: "h-1/2 w-full flex gap-3 flex-col xl:flex-row",
                        children: [!t && e && !a && o && i.jsx("div", {
                            className: "h-full w-full xl:w-2/3 bg-ft-gray/50 border-2 border-legacy-main rounded-xl",
                            children: i.jsx(ed, {
                                profile: e
                            })
                        }), i.jsx("div", {
                            className: `border border-ft-gray-border bg-ft-gray/50 rounded-xl flex justify-center items-center ${o ? "w-full xl:w-1/3" : "w-full"}`,
                            children: i.jsx(fc, {})
                        })]
                    }), i.jsx(Xu, {})]
                })]
            })
        }), i.jsx("div", {
            children: !a && e && i.jsx(vc, {
                profile: e
            })
        })]
    })
}
  , am = t => {
    const {user: e} = ge();
    return at({
        queryKey: ["v2", "achievements"],
        queryFn: async () => {
            var c;
            if (!t)
                throw new Error("No id provided");
            const a = new URL(`/api/v1/users/${t}/achievements`,"https://intrapy.intra.42.fr")
              , o = new Headers;
            o.append("Content-Type", "application/json"),
            o.append("Authorization", `Bearer ${(e == null ? void 0 : e.access_token) || ""}`);
            const s = await fetch(a, {
                headers: o,
                method: "GET"
            })
              , l = await s.json();
            if (!s.ok)
                throw new Error(((c = l.detail[0]) == null ? void 0 : c.msg) || l.detail);
            return ht(l)
        }
        ,
        enabled: !!t,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1
    })
}
  , om = ({number: t, small: e, data: r}) => {
    var g;
    const {user: n} = ge()
      , {userId: a} = xr()
      , o = a || ((g = n == null ? void 0 : n.profile) == null ? void 0 : g.user_id) || "0"
      , {data: s} = am(o.toString())
      , l = r || s
      , c = d.useRef(null)
      , [u,f] = d.useState(!1);
    return d.useEffect( () => {
        const m = new ResizeObserver(p => {
            for (const h of p)
                f(h.contentRect.width < 600)
        }
        );
        return c.current && m.observe(c.current),
        () => {
            c.current && m.unobserve(c.current)
        }
    }
    , []),
    i.jsx("div", {
        ref: c,
        className: G("grid gap-4 mt-4 w-full grid-cols-1 auto-rows-auto", e || u ? "grid-cols-1" : "md:grid-cols-2"),
        children: l && l.slice(0, t || 3).map( (m, p) => i.jsxs("div", {
            className: G("w-full border-2 border-neutral-200 flex flex-row justify-between rounded-sm", e ? "h-20" : "h-24"),
            children: [i.jsxs("div", {
                className: "p-3 flex flex-row justify-between w-full items-center",
                children: [i.jsxs("div", {
                    className: "flex flex-col",
                    children: [i.jsx("h1", {
                        className: "text-base font-medium leading-none",
                        children: m.name
                    }), i.jsx("p", {
                        className: "text-xs max-h-10 overflow-y-auto text-neutral-400 pt-2",
                        style: {
                            scrollbarWidth: "none"
                        },
                        children: m.description
                    })]
                }), !e && i.jsxs("div", {
                    className: "pt-1 flex flex-row gap-1",
                    children: [i.jsx("div", {
                        children: i.jsx(ns, {
                            stroke: "hsl(var(--legacy-main))"
                        })
                    }), i.jsxs("div", {
                        children: [i.jsx("p", {
                            className: "font-bold text-legacy-main",
                            children: "Achieved"
                        }), i.jsx("p", {
                            children: $r(new Date(m.achievedAt), "d LLL YYY")
                        })]
                    })]
                })]
            }), i.jsx("div", {
                className: "bg-zinc-100 w-20 grid place-items-center",
                children: i.jsx(oi, {
                    src: m.svg,
                    height: 45,
                    widths: 45
                })
            })]
        }, m.name + m.achievedAt + p))
    })
}
  , im = ({children: t}) => {
    const {show: e} = Ct();
    return e ? i.jsx("div", {
        className: "h-full",
        children: t
    }) : null
}
  , sm = ({children: t}) => (Ct(),
i.jsx("div", {
    className: "flex flex-col gap-1 md:flex-row place-items-center justify-between mb-2",
    children: t
}))
  , lm = ({url: t, children: e}) => (Ct(),
i.jsx("a", {
    href: t,
    className: "text-center text-legacy-main bg-transparent border border-legacy-main py-1.5 px-2 cursor-pointer text-xs uppercase",
    children: e
}))
  , cm = ({children: t}) => (Ct(),
i.jsx("div", {
    className: "flex flex-row gap-2",
    children: t
}))
  , um = ({children: t}) => (Ct(),
i.jsx("div", {
    className: "font-bold text-black uppercase text-sm",
    children: t
}))
  , dm = () => {
    const {show: t, toggleWidget: e} = Ct();
    return i.jsx("div", {
        onClick: e,
        className: "text-center text-legacy-main bg-transparent border border-legacy-main py-1.5 px-1 cursor-pointer text-xs uppercase",
        children: t ? "Hide" : "Show"
    })
}
  , fm = Ia("bg-white md:h-96 overflow-y-auto", {
    variants: {
        variant: {
            default: "md:drop-shadow-md md:rounded-lg p-6",
            inline: "p-4 md:rounded-r-lg"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Z = ({name: t, children: e, variant: r}) => i.jsx(hm, {
    value: {
        name: t
    },
    children: i.jsx("div", {
        className: G(fm({
            variant: r
        })),
        children: i.jsx("div", {
            className: "flex flex-col w-full h-full",
            children: e
        })
    })
});
Z.Header = sm;
Z.Title = um;
Z.Links = cm;
Z.Link = lm;
Z.Content = im;
Z.Toggle = dm;
const Si = d.createContext(null)
  , hm = ({value: t, children: e}) => {
    const [r,n] = d.useState(!0)
      , a = () => {
        localStorage.setItem(t.name, JSON.stringify(!r)),
        n(!r)
    }
    ;
    return d.useEffect( () => {
        const o = localStorage.getItem(t.name);
        o && n(JSON.parse(o))
    }
    , []),
    i.jsx(Si.Provider, {
        value: {
            ...t,
            show: r,
            toggleWidget: a
        },
        children: e
    })
}
  , Ct = () => {
    const t = d.useContext(Si);
    if (!t)
        throw new Error("Widget.* component must be rendered as child of Widget component");
    return t
}
  , Vm = ({children: t}) => i.jsx("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 bg-zinc-50 text-xs gap-0.5 md:gap-4 md:p-4",
    children: t
})
  , Bm = ({number: t, small: e, variant: r, data: n}) => {
    var c;
    const {user: a} = ge()
      , {userId: o} = xr()
      , s = o || ((c = a == null ? void 0 : a.profile) == null ? void 0 : c.user_id) || "0"
      , {data: l} = Ua(s.toString());
    return i.jsxs(Z, {
        name: "achievements",
        variant: r || "default",
        children: [i.jsxs(Z.Header, {
            children: [i.jsx(Z.Title, {
                children: "Last achievements"
            }), i.jsx(Z.Links, {
                children: i.jsx(Z.Link, {
                    url: `https://profile.intra.42.fr/users/${l == null ? void 0 : l.login}/achievements`,
                    children: "See all achievements"
                })
            })]
        }), i.jsx(Z.Content, {
            children: i.jsx(om, {
                number: t,
                small: e,
                data: n
            })
        })]
    })
}
  , Ci = d.createContext({
    stats: {},
    color: "#00babc"
})
  , mm = ({children: t, stats: e, color: r}) => {
    const n = {
        stats: e,
        color: r
    };
    return i.jsx(Ci.Provider, {
        value: n,
        children: t
    })
}
  , Oi = () => d.useContext(Ci);
function pm(t, e) {
    const r = parseInt(t.slice(1, 3), 16)
      , n = parseInt(t.slice(3, 5), 16)
      , a = parseInt(t.slice(5, 7), 16);
    return e ? `rgba(${r}, ${n}, ${a}, ${e})` : `rgb(${r}, ${n}, ${a})`
}
function ji(t) {
    const e = t.split(".")[0]
      , [r,n,a] = e.split(":");
    return {
        hours: r,
        minutes: n,
        seconds: a
    }
}
function Ei(t) {
    if (!t)
        return null;
    const {hours: e, minutes: r} = ji(t);
    return `${e.padStart(2, "0")}H${r.padStart(2, "0")}`
}
function vm(t, e) {
    if (!t || !e)
        return;
    const {hours: r, minutes: n, seconds: a} = ji(t)
      , s = (parseInt(r) * 3600 + parseInt(n) * 60 + parseInt(a)) * 100 / (24 * 60 * 60);
    return pm(e, String(s / 100))
}
const _i = ({value: t, color: e}) => i.jsx("div", {
    className: G(t ? "bg-slate-50" : "", "w-4 h-4 flex justify-center text-center leading-5"),
    style: {
        backgroundColor: e
    },
    children: t
})
  , gm = ({value: t, dayStats: e, color: r}) => i.jsx(je, {
    delayDuration: 0,
    children: i.jsxs(Ee, {
        delayDuration: 250,
        children: [i.jsx(_e, {
            className: "cursor-default",
            children: i.jsx(_i, {
                value: t,
                color: r
            })
        }), i.jsx(Te, {
            children: Ei(e)
        })]
    })
})
  , bm = ({value: t, dayStats: e, color: r}) => i.jsxs(Tn, {
    children: [i.jsx(Sn, {
        className: "cursor-default",
        children: i.jsx(_i, {
            value: t,
            color: r
        })
    }), i.jsx(Or, {
        children: Ei(e)
    })]
})
  , wm = ({value: t, dayStats: e, color: r}) => vn("(max-width: 576px)") || En ? i.jsx(bm, {
    value: t,
    dayStats: e,
    color: r
}) : i.jsx(gm, {
    value: t,
    dayStats: e,
    color: r
})
  , Sa = ({value: t, colspan: e, dayStats: r="00:00:00"}) => {
    const {color: n} = Oi();
    return i.jsx("td", {
        className: G("text-xs border-white border", t && "cursor-pointer"),
        colSpan: e ?? 1,
        children: i.jsx(wm, {
            value: t,
            dayStats: r,
            color: vm(r, n)
        })
    })
}
  , xm = ({firstDayOfMonth: t}) => {
    const {stats: e} = Oi()
      , r = ur(t)
      , n = Cs({
        start: t,
        end: r
    }).reduce( (a, o, s) => {
        !o.getDay() && s && a.push([void 0, void 0, void 0, void 0, void 0, void 0, void 0]);
        const l = a[a.length - 1];
        return l[o.getDay()] = o,
        a
    }
    , [[void 0, void 0, void 0, void 0, void 0, void 0, void 0]]);
    return i.jsx(i.Fragment, {
        children: n.map( (a, o) => i.jsx("tr", {
            children: a.map( (s, l) => s ? i.jsx(Sa, {
                dayStats: e[$r(s, "yyyy-MM-dd")],
                value: s.getDate().toString()
            }, s.toString()) : i.jsx(Sa, {
                colspan: 7 - a.length
            }, l))
        }, o.toString()))
    })
}
  , or = ({monthDelta: t}) => {
    const e = Fa(Gr(new Date), t);
    return i.jsx("div", {
        className: "flex flex-row items-center justify-center w-1/2 2k:w-full",
        children: i.jsxs("table", {
            className: "table-fixed",
            children: [i.jsx("thead", {
                children: i.jsx("tr", {
                    children: i.jsx("th", {
                        className: "font-bold py-2",
                        colSpan: 7,
                        children: $r(e, "MMM")
                    })
                })
            }), i.jsx("tbody", {
                children: i.jsx(xm, {
                    firstDayOfMonth: e
                })
            })]
        })
    })
}
  , ym = ({color: t, stats: e}) => i.jsx("div", {
    className: "flex w-full h-full",
    children: i.jsx(mm, {
        stats: e,
        color: t,
        children: i.jsxs("div", {
            className: G("flex flex-row flex-wrap w-full", "2k:grid 2k:grid-rows-1 2k:grid-cols-4 2k:gap-4", "justify-around items-start"),
            children: [i.jsx(or, {
                monthDelta: -3
            }), i.jsx(or, {
                monthDelta: -2
            }), i.jsx(or, {
                monthDelta: -1
            }), i.jsx(or, {
                monthDelta: 0
            })]
        })
    })
})
  , $m = t => {
    const {user: e} = ge()
      , {isStaff: r} = wt();
    return at({
        queryKey: ["locations", "stats"],
        queryFn: async () => {
            const o = new URL(`/users/${t}/locations_stats/`,"https://translate.intra.42.fr")
              , s = new Headers;
            s.append("Content-Type", "application/json"),
            s.append("credentials", "include"),
            s.append("Authorization", `Bearer ${(e == null ? void 0 : e.access_token) || ""}`),
            r && s.append("X-Staff", "true");
            const l = await fetch(o.toString(), {
                headers: s,
                method: "GET",
                credentials: "include"
            })
              , c = await l.json();
            if (!l.ok)
                throw new Error(`Error while fetching locations stats: ${l.status} - ${l.statusText} - ${c.detail}`);
            return c
        }
    })
}
  , Tm = () => {
    var s;
    const {user: t} = ge()
      , {userId: e} = xr()
      , r = e || ((s = t == null ? void 0 : t.profile) == null ? void 0 : s.user_id) || "0"
      , {data: n, isError: a, isLoading: o} = $m(r.toString());
    return a ? i.jsx("div", {
        children: "Something went wrong"
    }) : o ? i.jsx(bt, {}) : n ? i.jsx(i.Fragment, {
        children: !a && n && i.jsx(ym, {
            stats: n,
            color: "#00babc"
        })
    }) : null
}
  , Hm = () => i.jsxs(Z, {
    name: "locations",
    children: [i.jsx(Z.Header, {
        children: i.jsx(Z.Title, {
            children: "Logtime"
        })
    }), i.jsx(Z.Content, {
        children: i.jsx(Tm, {})
    })]
})
  , Sm = ({slug: t, displayName: e, login: r}) => {
    const n = new URL(`/${t}/${r}`,"https://projects.intra.42.fr");
    return i.jsx("li", {
        className: "block hover:bg-zinc-100 focus:bg-zinc-100",
        children: i.jsx("a", {
            href: n.toString(),
            className: G("block px-2.5 py-2 font-medium hover:text-teal-700 text-legacy-main"),
            children: e
        })
    })
}
  , Cm = (t, e) => {
    const {user: r} = ge();
    return at({
        queryKey: ["v2", "projects", "ongoing", e],
        queryFn: async () => {
            var u;
            if (!t || !e)
                throw new Error("No id provided");
            const o = new URL(`/api/v1/users/${t}/projects/ongoing?cursus_id=${e}`,"https://intrapy.intra.42.fr")
              , s = new Headers;
            s.append("Content-Type", "application/json"),
            s.append("Authorization", `Bearer ${(r == null ? void 0 : r.access_token) || ""}`);
            const l = await fetch(o, {
                headers: s,
                method: "GET"
            })
              , c = await l.json();
            if (!l.ok)
                throw new Error(((u = c.detail[0]) == null ? void 0 : u.msg) || c.detail);
            return ht(c)
        }
        ,
        enabled: !!t && !!e,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1
    })
}
  , Om = () => {
    const {user: t} = re()
      , {selectedCursus: e} = Se()
      , r = e == null ? void 0 : e.id
      , {data: n} = Cm(t == null ? void 0 : t.id, r);
    return i.jsx("ul", {
        className: "flex flex-col gap-1",
        children: n && (n == null ? void 0 : n.map( ({projectSlug: a, projectName: o}) => i.jsx(Sm, {
            login: t == null ? void 0 : t.login,
            slug: a,
            displayName: o
        }, a)))
    })
}
  , qm = () => {
    var s;
    const {user: t} = ge()
      , {userId: e} = xr()
      , r = e || ((s = t == null ? void 0 : t.profile) == null ? void 0 : s.user_id) || "0"
      , {data: n} = Ua(r.toString())
      , a = "https://profile.intra.42.fr"
      , o = [{
        name: "Evaluation logs",
        path: new URL(`/users/${n == null ? void 0 : n.login}/correction_point_historics`,a).toString()
    }, {
        name: "Feedback logs",
        path: new URL(`/users/${n == null ? void 0 : n.login}/feedbacks`,"https://projects.intra.42.fr").toString()
    }, {
        name: "Quests",
        path: new URL(`/users/${n == null ? void 0 : n.login}/quests`,a).toString()
    }];
    return i.jsxs(Z, {
        name: "projects",
        children: [i.jsxs(Z.Header, {
            children: [i.jsx(Z.Title, {
                children: "Projects"
            }), i.jsx(Z.Links, {
                children: o.map(l => i.jsx(Z.Link, {
                    url: l.path,
                    children: l.name
                }, l.path))
            })]
        }), i.jsx(Z.Content, {
            children: i.jsx(Om, {})
        })]
    })
}
;
export {Bm as A, _m as C, Wm as H, Nm as L, ss as M, qm as P, je as T, Z as W, Ee as a, _e as b, Te as c, Ju as d, $r as e, Tr as f, ds as g, Ll as h, Vm as i, Hm as j, Dm as k, Se as l, as as m, am as n, yr as u};
