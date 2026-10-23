import {c as Et, r as X1, t as Z1, a as at, g as Df, j as w, u as Cr, b as er, f as Rf, R as no, d as G, e as po, C as Q1, h as zn, i as ri, k as ca, l as _r, m as ii, n as J1, L as e0, o as Nf, p as ai, q as Fn, D as go, s as mo, v as xo, w as yo, x as vo, y as n0, B as zt, z as bo, A as Mf, X as jf, E as Ff, F as zf, G as yc, H as t0, I as r0, U as i0, J as a0} from "./index-1b63b24c.js";
import {T as wo, a as _o, b as So, f as fa, c as ko, u as nr, C as l0, M as o0, d as Bf, L as Ji, e as $l, W as Tn, g as s0, h as u0, i as c0, j as f0, A as h0, P as p0, k as d0, H as g0} from "./ProjectsWidget-52d7941a.js";
const m0 = Et("Bell", [["path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
    key: "1qo2s2"
}], ["path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
    key: "qgo35s"
}]])
  , x0 = Et("Calendar", [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    ry: "2",
    key: "eu3xkr"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "2",
    y2: "6",
    key: "m3sa8f"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "2",
    y2: "6",
    key: "18kwsl"
}], ["line", {
    x1: "3",
    x2: "21",
    y1: "10",
    y2: "10",
    key: "xt86sb"
}]])
  , y0 = Et("ChevronLeft", [["polyline", {
    points: "15 18 9 12 15 6",
    key: "kvxz59"
}]])
  , $f = Et("Clock5", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 14.5 16",
    key: "1pcbox"
}]])
  , v0 = Et("Dot", [["circle", {
    cx: "12.1",
    cy: "12.1",
    r: "1",
    key: "18d7e5"
}]])
  , b0 = Et("Link", [["path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
    key: "1cjeqo"
}], ["path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
    key: "19qd67"
}]])
  , vc = Et("Megaphone", [["path", {
    d: "m3 11 18-5v12L3 14v-3z",
    key: "n962bs"
}], ["path", {
    d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
    key: "1yl0tm"
}]])
  , w0 = Et("ShieldAlert", [["path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    key: "3xmgem"
}], ["path", {
    d: "M12 8v4",
    key: "1got3b"
}], ["path", {
    d: "M12 16h.01",
    key: "1drbdi"
}]])
  , _0 = Et("Users2", [["path", {
    d: "M14 19a6 6 0 0 0-12 0",
    key: "vej9p1"
}], ["circle", {
    cx: "8",
    cy: "9",
    r: "4",
    key: "143rtg"
}], ["path", {
    d: "M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8",
    key: "hqbn22"
}]]);
function Jr(n) {
    return X1(1, arguments),
    Z1(n).getTime() > Date.now()
}
function S0(n, i) {
    const r = i || {};
    return (n[n.length - 1] === "" ? [...n, ""] : n).join((r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")).trim()
}
const k0 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u
  , C0 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u
  , E0 = {};
function bc(n, i) {
    return ((i || E0).jsx ? C0 : k0).test(n)
}
const A0 = /[ \t\n\f\r]/g;
function T0(n) {
    return typeof n == "object" ? n.type === "text" ? wc(n.value) : !1 : wc(n)
}
function wc(n) {
    return n.replace(A0, "") === ""
}
class li {
    constructor(i, r, l) {
        this.property = i,
        this.normal = r,
        l && (this.space = l)
    }
}
li.prototype.property = {};
li.prototype.normal = {};
li.prototype.space = null;
function Uf(n, i) {
    const r = {}
      , l = {};
    let o = -1;
    for (; ++o < n.length; )
        Object.assign(r, n[o].property),
        Object.assign(l, n[o].normal);
    return new li(r,l,i)
}
function to(n) {
    return n.toLowerCase()
}
class Zn {
    constructor(i, r) {
        this.property = i,
        this.attribute = r
    }
}
Zn.prototype.space = null;
Zn.prototype.boolean = !1;
Zn.prototype.booleanish = !1;
Zn.prototype.overloadedBoolean = !1;
Zn.prototype.number = !1;
Zn.prototype.commaSeparated = !1;
Zn.prototype.spaceSeparated = !1;
Zn.prototype.commaOrSpaceSeparated = !1;
Zn.prototype.mustUseProperty = !1;
Zn.prototype.defined = !1;
let I0 = 0;
const ce = tr()
  , Qe = tr()
  , Hf = tr()
  , F = tr()
  , Pe = tr()
  , Sr = tr()
  , Mn = tr();
function tr() {
    return 2 ** ++I0
}
const ro = Object.freeze(Object.defineProperty({
    __proto__: null,
    boolean: ce,
    booleanish: Qe,
    commaOrSpaceSeparated: Mn,
    commaSeparated: Sr,
    number: F,
    overloadedBoolean: Hf,
    spaceSeparated: Pe
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ul = Object.keys(ro);
class Co extends Zn {
    constructor(i, r, l, o) {
        let s = -1;
        if (super(i, r),
        _c(this, "space", o),
        typeof l == "number")
            for (; ++s < Ul.length; ) {
                const c = Ul[s];
                _c(this, Ul[s], (l & ro[c]) === ro[c])
            }
    }
}
Co.prototype.defined = !0;
function _c(n, i, r) {
    r && (n[i] = r)
}
const O0 = {}.hasOwnProperty;
function Er(n) {
    const i = {}
      , r = {};
    let l;
    for (l in n.properties)
        if (O0.call(n.properties, l)) {
            const o = n.properties[l]
              , s = new Co(l,n.transform(n.attributes || {}, l),o,n.space);
            n.mustUseProperty && n.mustUseProperty.includes(l) && (s.mustUseProperty = !0),
            i[l] = s,
            r[to(l)] = l,
            r[to(s.attribute)] = l
        }
    return new li(i,r,n.space)
}
const Wf = Er({
    space: "xlink",
    transform(n, i) {
        return "xlink:" + i.slice(5).toLowerCase()
    },
    properties: {
        xLinkActuate: null,
        xLinkArcRole: null,
        xLinkHref: null,
        xLinkRole: null,
        xLinkShow: null,
        xLinkTitle: null,
        xLinkType: null
    }
})
  , qf = Er({
    space: "xml",
    transform(n, i) {
        return "xml:" + i.slice(3).toLowerCase()
    },
    properties: {
        xmlLang: null,
        xmlBase: null,
        xmlSpace: null
    }
});
function Gf(n, i) {
    return i in n ? n[i] : i
}
function Vf(n, i) {
    return Gf(n, i.toLowerCase())
}
const Kf = Er({
    space: "xmlns",
    attributes: {
        xmlnsxlink: "xmlns:xlink"
    },
    transform: Vf,
    properties: {
        xmlns: null,
        xmlnsXLink: null
    }
})
  , Yf = Er({
    transform(n, i) {
        return i === "role" ? i : "aria-" + i.slice(4).toLowerCase()
    },
    properties: {
        ariaActiveDescendant: null,
        ariaAtomic: Qe,
        ariaAutoComplete: null,
        ariaBusy: Qe,
        ariaChecked: Qe,
        ariaColCount: F,
        ariaColIndex: F,
        ariaColSpan: F,
        ariaControls: Pe,
        ariaCurrent: null,
        ariaDescribedBy: Pe,
        ariaDetails: null,
        ariaDisabled: Qe,
        ariaDropEffect: Pe,
        ariaErrorMessage: null,
        ariaExpanded: Qe,
        ariaFlowTo: Pe,
        ariaGrabbed: Qe,
        ariaHasPopup: null,
        ariaHidden: Qe,
        ariaInvalid: null,
        ariaKeyShortcuts: null,
        ariaLabel: null,
        ariaLabelledBy: Pe,
        ariaLevel: F,
        ariaLive: null,
        ariaModal: Qe,
        ariaMultiLine: Qe,
        ariaMultiSelectable: Qe,
        ariaOrientation: null,
        ariaOwns: Pe,
        ariaPlaceholder: null,
        ariaPosInSet: F,
        ariaPressed: Qe,
        ariaReadOnly: Qe,
        ariaRelevant: null,
        ariaRequired: Qe,
        ariaRoleDescription: Pe,
        ariaRowCount: F,
        ariaRowIndex: F,
        ariaRowSpan: F,
        ariaSelected: Qe,
        ariaSetSize: F,
        ariaSort: null,
        ariaValueMax: F,
        ariaValueMin: F,
        ariaValueNow: F,
        ariaValueText: null,
        role: null
    }
})
  , L0 = Er({
    space: "html",
    attributes: {
        acceptcharset: "accept-charset",
        classname: "class",
        htmlfor: "for",
        httpequiv: "http-equiv"
    },
    transform: Vf,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
        abbr: null,
        accept: Sr,
        acceptCharset: Pe,
        accessKey: Pe,
        action: null,
        allow: null,
        allowFullScreen: ce,
        allowPaymentRequest: ce,
        allowUserMedia: ce,
        alt: null,
        as: null,
        async: ce,
        autoCapitalize: null,
        autoComplete: Pe,
        autoFocus: ce,
        autoPlay: ce,
        blocking: Pe,
        capture: null,
        charSet: null,
        checked: ce,
        cite: null,
        className: Pe,
        cols: F,
        colSpan: null,
        content: null,
        contentEditable: Qe,
        controls: ce,
        controlsList: Pe,
        coords: F | Sr,
        crossOrigin: null,
        data: null,
        dateTime: null,
        decoding: null,
        default: ce,
        defer: ce,
        dir: null,
        dirName: null,
        disabled: ce,
        download: Hf,
        draggable: Qe,
        encType: null,
        enterKeyHint: null,
        fetchPriority: null,
        form: null,
        formAction: null,
        formEncType: null,
        formMethod: null,
        formNoValidate: ce,
        formTarget: null,
        headers: Pe,
        height: F,
        hidden: ce,
        high: F,
        href: null,
        hrefLang: null,
        htmlFor: Pe,
        httpEquiv: Pe,
        id: null,
        imageSizes: null,
        imageSrcSet: null,
        inert: ce,
        inputMode: null,
        integrity: null,
        is: null,
        isMap: ce,
        itemId: null,
        itemProp: Pe,
        itemRef: Pe,
        itemScope: ce,
        itemType: Pe,
        kind: null,
        label: null,
        lang: null,
        language: null,
        list: null,
        loading: null,
        loop: ce,
        low: F,
        manifest: null,
        max: null,
        maxLength: F,
        media: null,
        method: null,
        min: null,
        minLength: F,
        multiple: ce,
        muted: ce,
        name: null,
        nonce: null,
        noModule: ce,
        noValidate: ce,
        onAbort: null,
        onAfterPrint: null,
        onAuxClick: null,
        onBeforeMatch: null,
        onBeforePrint: null,
        onBeforeToggle: null,
        onBeforeUnload: null,
        onBlur: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onContextLost: null,
        onContextMenu: null,
        onContextRestored: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFormData: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLanguageChange: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadEnd: null,
        onLoadStart: null,
        onMessage: null,
        onMessageError: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRejectionHandled: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onScrollEnd: null,
        onSecurityPolicyViolation: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onSlotChange: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnhandledRejection: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onWheel: null,
        open: ce,
        optimum: F,
        pattern: null,
        ping: Pe,
        placeholder: null,
        playsInline: ce,
        popover: null,
        popoverTarget: null,
        popoverTargetAction: null,
        poster: null,
        preload: null,
        readOnly: ce,
        referrerPolicy: null,
        rel: Pe,
        required: ce,
        reversed: ce,
        rows: F,
        rowSpan: F,
        sandbox: Pe,
        scope: null,
        scoped: ce,
        seamless: ce,
        selected: ce,
        shadowRootDelegatesFocus: ce,
        shadowRootMode: null,
        shape: null,
        size: F,
        sizes: null,
        slot: null,
        span: F,
        spellCheck: Qe,
        src: null,
        srcDoc: null,
        srcLang: null,
        srcSet: null,
        start: F,
        step: null,
        style: null,
        tabIndex: F,
        target: null,
        title: null,
        translate: null,
        type: null,
        typeMustMatch: ce,
        useMap: null,
        value: Qe,
        width: F,
        wrap: null,
        align: null,
        aLink: null,
        archive: Pe,
        axis: null,
        background: null,
        bgColor: null,
        border: F,
        borderColor: null,
        bottomMargin: F,
        cellPadding: null,
        cellSpacing: null,
        char: null,
        charOff: null,
        classId: null,
        clear: null,
        code: null,
        codeBase: null,
        codeType: null,
        color: null,
        compact: ce,
        declare: ce,
        event: null,
        face: null,
        frame: null,
        frameBorder: null,
        hSpace: F,
        leftMargin: F,
        link: null,
        longDesc: null,
        lowSrc: null,
        marginHeight: F,
        marginWidth: F,
        noResize: ce,
        noHref: ce,
        noShade: ce,
        noWrap: ce,
        object: null,
        profile: null,
        prompt: null,
        rev: null,
        rightMargin: F,
        rules: null,
        scheme: null,
        scrolling: Qe,
        standby: null,
        summary: null,
        text: null,
        topMargin: F,
        valueType: null,
        version: null,
        vAlign: null,
        vLink: null,
        vSpace: F,
        allowTransparency: null,
        autoCorrect: null,
        autoSave: null,
        disablePictureInPicture: ce,
        disableRemotePlayback: ce,
        prefix: null,
        property: null,
        results: F,
        security: null,
        unselectable: null
    }
})
  , P0 = Er({
    space: "svg",
    attributes: {
        accentHeight: "accent-height",
        alignmentBaseline: "alignment-baseline",
        arabicForm: "arabic-form",
        baselineShift: "baseline-shift",
        capHeight: "cap-height",
        className: "class",
        clipPath: "clip-path",
        clipRule: "clip-rule",
        colorInterpolation: "color-interpolation",
        colorInterpolationFilters: "color-interpolation-filters",
        colorProfile: "color-profile",
        colorRendering: "color-rendering",
        crossOrigin: "crossorigin",
        dataType: "datatype",
        dominantBaseline: "dominant-baseline",
        enableBackground: "enable-background",
        fillOpacity: "fill-opacity",
        fillRule: "fill-rule",
        floodColor: "flood-color",
        floodOpacity: "flood-opacity",
        fontFamily: "font-family",
        fontSize: "font-size",
        fontSizeAdjust: "font-size-adjust",
        fontStretch: "font-stretch",
        fontStyle: "font-style",
        fontVariant: "font-variant",
        fontWeight: "font-weight",
        glyphName: "glyph-name",
        glyphOrientationHorizontal: "glyph-orientation-horizontal",
        glyphOrientationVertical: "glyph-orientation-vertical",
        hrefLang: "hreflang",
        horizAdvX: "horiz-adv-x",
        horizOriginX: "horiz-origin-x",
        horizOriginY: "horiz-origin-y",
        imageRendering: "image-rendering",
        letterSpacing: "letter-spacing",
        lightingColor: "lighting-color",
        markerEnd: "marker-end",
        markerMid: "marker-mid",
        markerStart: "marker-start",
        navDown: "nav-down",
        navDownLeft: "nav-down-left",
        navDownRight: "nav-down-right",
        navLeft: "nav-left",
        navNext: "nav-next",
        navPrev: "nav-prev",
        navRight: "nav-right",
        navUp: "nav-up",
        navUpLeft: "nav-up-left",
        navUpRight: "nav-up-right",
        onAbort: "onabort",
        onActivate: "onactivate",
        onAfterPrint: "onafterprint",
        onBeforePrint: "onbeforeprint",
        onBegin: "onbegin",
        onCancel: "oncancel",
        onCanPlay: "oncanplay",
        onCanPlayThrough: "oncanplaythrough",
        onChange: "onchange",
        onClick: "onclick",
        onClose: "onclose",
        onCopy: "oncopy",
        onCueChange: "oncuechange",
        onCut: "oncut",
        onDblClick: "ondblclick",
        onDrag: "ondrag",
        onDragEnd: "ondragend",
        onDragEnter: "ondragenter",
        onDragExit: "ondragexit",
        onDragLeave: "ondragleave",
        onDragOver: "ondragover",
        onDragStart: "ondragstart",
        onDrop: "ondrop",
        onDurationChange: "ondurationchange",
        onEmptied: "onemptied",
        onEnd: "onend",
        onEnded: "onended",
        onError: "onerror",
        onFocus: "onfocus",
        onFocusIn: "onfocusin",
        onFocusOut: "onfocusout",
        onHashChange: "onhashchange",
        onInput: "oninput",
        onInvalid: "oninvalid",
        onKeyDown: "onkeydown",
        onKeyPress: "onkeypress",
        onKeyUp: "onkeyup",
        onLoad: "onload",
        onLoadedData: "onloadeddata",
        onLoadedMetadata: "onloadedmetadata",
        onLoadStart: "onloadstart",
        onMessage: "onmessage",
        onMouseDown: "onmousedown",
        onMouseEnter: "onmouseenter",
        onMouseLeave: "onmouseleave",
        onMouseMove: "onmousemove",
        onMouseOut: "onmouseout",
        onMouseOver: "onmouseover",
        onMouseUp: "onmouseup",
        onMouseWheel: "onmousewheel",
        onOffline: "onoffline",
        onOnline: "ononline",
        onPageHide: "onpagehide",
        onPageShow: "onpageshow",
        onPaste: "onpaste",
        onPause: "onpause",
        onPlay: "onplay",
        onPlaying: "onplaying",
        onPopState: "onpopstate",
        onProgress: "onprogress",
        onRateChange: "onratechange",
        onRepeat: "onrepeat",
        onReset: "onreset",
        onResize: "onresize",
        onScroll: "onscroll",
        onSeeked: "onseeked",
        onSeeking: "onseeking",
        onSelect: "onselect",
        onShow: "onshow",
        onStalled: "onstalled",
        onStorage: "onstorage",
        onSubmit: "onsubmit",
        onSuspend: "onsuspend",
        onTimeUpdate: "ontimeupdate",
        onToggle: "ontoggle",
        onUnload: "onunload",
        onVolumeChange: "onvolumechange",
        onWaiting: "onwaiting",
        onZoom: "onzoom",
        overlinePosition: "overline-position",
        overlineThickness: "overline-thickness",
        paintOrder: "paint-order",
        panose1: "panose-1",
        pointerEvents: "pointer-events",
        referrerPolicy: "referrerpolicy",
        renderingIntent: "rendering-intent",
        shapeRendering: "shape-rendering",
        stopColor: "stop-color",
        stopOpacity: "stop-opacity",
        strikethroughPosition: "strikethrough-position",
        strikethroughThickness: "strikethrough-thickness",
        strokeDashArray: "stroke-dasharray",
        strokeDashOffset: "stroke-dashoffset",
        strokeLineCap: "stroke-linecap",
        strokeLineJoin: "stroke-linejoin",
        strokeMiterLimit: "stroke-miterlimit",
        strokeOpacity: "stroke-opacity",
        strokeWidth: "stroke-width",
        tabIndex: "tabindex",
        textAnchor: "text-anchor",
        textDecoration: "text-decoration",
        textRendering: "text-rendering",
        transformOrigin: "transform-origin",
        typeOf: "typeof",
        underlinePosition: "underline-position",
        underlineThickness: "underline-thickness",
        unicodeBidi: "unicode-bidi",
        unicodeRange: "unicode-range",
        unitsPerEm: "units-per-em",
        vAlphabetic: "v-alphabetic",
        vHanging: "v-hanging",
        vIdeographic: "v-ideographic",
        vMathematical: "v-mathematical",
        vectorEffect: "vector-effect",
        vertAdvY: "vert-adv-y",
        vertOriginX: "vert-origin-x",
        vertOriginY: "vert-origin-y",
        wordSpacing: "word-spacing",
        writingMode: "writing-mode",
        xHeight: "x-height",
        playbackOrder: "playbackorder",
        timelineBegin: "timelinebegin"
    },
    transform: Gf,
    properties: {
        about: Mn,
        accentHeight: F,
        accumulate: null,
        additive: null,
        alignmentBaseline: null,
        alphabetic: F,
        amplitude: F,
        arabicForm: null,
        ascent: F,
        attributeName: null,
        attributeType: null,
        azimuth: F,
        bandwidth: null,
        baselineShift: null,
        baseFrequency: null,
        baseProfile: null,
        bbox: null,
        begin: null,
        bias: F,
        by: null,
        calcMode: null,
        capHeight: F,
        className: Pe,
        clip: null,
        clipPath: null,
        clipPathUnits: null,
        clipRule: null,
        color: null,
        colorInterpolation: null,
        colorInterpolationFilters: null,
        colorProfile: null,
        colorRendering: null,
        content: null,
        contentScriptType: null,
        contentStyleType: null,
        crossOrigin: null,
        cursor: null,
        cx: null,
        cy: null,
        d: null,
        dataType: null,
        defaultAction: null,
        descent: F,
        diffuseConstant: F,
        direction: null,
        display: null,
        dur: null,
        divisor: F,
        dominantBaseline: null,
        download: ce,
        dx: null,
        dy: null,
        edgeMode: null,
        editable: null,
        elevation: F,
        enableBackground: null,
        end: null,
        event: null,
        exponent: F,
        externalResourcesRequired: null,
        fill: null,
        fillOpacity: F,
        fillRule: null,
        filter: null,
        filterRes: null,
        filterUnits: null,
        floodColor: null,
        floodOpacity: null,
        focusable: null,
        focusHighlight: null,
        fontFamily: null,
        fontSize: null,
        fontSizeAdjust: null,
        fontStretch: null,
        fontStyle: null,
        fontVariant: null,
        fontWeight: null,
        format: null,
        fr: null,
        from: null,
        fx: null,
        fy: null,
        g1: Sr,
        g2: Sr,
        glyphName: Sr,
        glyphOrientationHorizontal: null,
        glyphOrientationVertical: null,
        glyphRef: null,
        gradientTransform: null,
        gradientUnits: null,
        handler: null,
        hanging: F,
        hatchContentUnits: null,
        hatchUnits: null,
        height: null,
        href: null,
        hrefLang: null,
        horizAdvX: F,
        horizOriginX: F,
        horizOriginY: F,
        id: null,
        ideographic: F,
        imageRendering: null,
        initialVisibility: null,
        in: null,
        in2: null,
        intercept: F,
        k: F,
        k1: F,
        k2: F,
        k3: F,
        k4: F,
        kernelMatrix: Mn,
        kernelUnitLength: null,
        keyPoints: null,
        keySplines: null,
        keyTimes: null,
        kerning: null,
        lang: null,
        lengthAdjust: null,
        letterSpacing: null,
        lightingColor: null,
        limitingConeAngle: F,
        local: null,
        markerEnd: null,
        markerMid: null,
        markerStart: null,
        markerHeight: null,
        markerUnits: null,
        markerWidth: null,
        mask: null,
        maskContentUnits: null,
        maskUnits: null,
        mathematical: null,
        max: null,
        media: null,
        mediaCharacterEncoding: null,
        mediaContentEncodings: null,
        mediaSize: F,
        mediaTime: null,
        method: null,
        min: null,
        mode: null,
        name: null,
        navDown: null,
        navDownLeft: null,
        navDownRight: null,
        navLeft: null,
        navNext: null,
        navPrev: null,
        navRight: null,
        navUp: null,
        navUpLeft: null,
        navUpRight: null,
        numOctaves: null,
        observer: null,
        offset: null,
        onAbort: null,
        onActivate: null,
        onAfterPrint: null,
        onBeforePrint: null,
        onBegin: null,
        onCancel: null,
        onCanPlay: null,
        onCanPlayThrough: null,
        onChange: null,
        onClick: null,
        onClose: null,
        onCopy: null,
        onCueChange: null,
        onCut: null,
        onDblClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragEnter: null,
        onDragExit: null,
        onDragLeave: null,
        onDragOver: null,
        onDragStart: null,
        onDrop: null,
        onDurationChange: null,
        onEmptied: null,
        onEnd: null,
        onEnded: null,
        onError: null,
        onFocus: null,
        onFocusIn: null,
        onFocusOut: null,
        onHashChange: null,
        onInput: null,
        onInvalid: null,
        onKeyDown: null,
        onKeyPress: null,
        onKeyUp: null,
        onLoad: null,
        onLoadedData: null,
        onLoadedMetadata: null,
        onLoadStart: null,
        onMessage: null,
        onMouseDown: null,
        onMouseEnter: null,
        onMouseLeave: null,
        onMouseMove: null,
        onMouseOut: null,
        onMouseOver: null,
        onMouseUp: null,
        onMouseWheel: null,
        onOffline: null,
        onOnline: null,
        onPageHide: null,
        onPageShow: null,
        onPaste: null,
        onPause: null,
        onPlay: null,
        onPlaying: null,
        onPopState: null,
        onProgress: null,
        onRateChange: null,
        onRepeat: null,
        onReset: null,
        onResize: null,
        onScroll: null,
        onSeeked: null,
        onSeeking: null,
        onSelect: null,
        onShow: null,
        onStalled: null,
        onStorage: null,
        onSubmit: null,
        onSuspend: null,
        onTimeUpdate: null,
        onToggle: null,
        onUnload: null,
        onVolumeChange: null,
        onWaiting: null,
        onZoom: null,
        opacity: null,
        operator: null,
        order: null,
        orient: null,
        orientation: null,
        origin: null,
        overflow: null,
        overlay: null,
        overlinePosition: F,
        overlineThickness: F,
        paintOrder: null,
        panose1: null,
        path: null,
        pathLength: F,
        patternContentUnits: null,
        patternTransform: null,
        patternUnits: null,
        phase: null,
        ping: Pe,
        pitch: null,
        playbackOrder: null,
        pointerEvents: null,
        points: null,
        pointsAtX: F,
        pointsAtY: F,
        pointsAtZ: F,
        preserveAlpha: null,
        preserveAspectRatio: null,
        primitiveUnits: null,
        propagate: null,
        property: Mn,
        r: null,
        radius: null,
        referrerPolicy: null,
        refX: null,
        refY: null,
        rel: Mn,
        rev: Mn,
        renderingIntent: null,
        repeatCount: null,
        repeatDur: null,
        requiredExtensions: Mn,
        requiredFeatures: Mn,
        requiredFonts: Mn,
        requiredFormats: Mn,
        resource: null,
        restart: null,
        result: null,
        rotate: null,
        rx: null,
        ry: null,
        scale: null,
        seed: null,
        shapeRendering: null,
        side: null,
        slope: null,
        snapshotTime: null,
        specularConstant: F,
        specularExponent: F,
        spreadMethod: null,
        spacing: null,
        startOffset: null,
        stdDeviation: null,
        stemh: null,
        stemv: null,
        stitchTiles: null,
        stopColor: null,
        stopOpacity: null,
        strikethroughPosition: F,
        strikethroughThickness: F,
        string: null,
        stroke: null,
        strokeDashArray: Mn,
        strokeDashOffset: null,
        strokeLineCap: null,
        strokeLineJoin: null,
        strokeMiterLimit: F,
        strokeOpacity: F,
        strokeWidth: null,
        style: null,
        surfaceScale: F,
        syncBehavior: null,
        syncBehaviorDefault: null,
        syncMaster: null,
        syncTolerance: null,
        syncToleranceDefault: null,
        systemLanguage: Mn,
        tabIndex: F,
        tableValues: null,
        target: null,
        targetX: F,
        targetY: F,
        textAnchor: null,
        textDecoration: null,
        textRendering: null,
        textLength: null,
        timelineBegin: null,
        title: null,
        transformBehavior: null,
        type: null,
        typeOf: Mn,
        to: null,
        transform: null,
        transformOrigin: null,
        u1: null,
        u2: null,
        underlinePosition: F,
        underlineThickness: F,
        unicode: null,
        unicodeBidi: null,
        unicodeRange: null,
        unitsPerEm: F,
        values: null,
        vAlphabetic: F,
        vMathematical: F,
        vectorEffect: null,
        vHanging: F,
        vIdeographic: F,
        version: null,
        vertAdvY: F,
        vertOriginX: F,
        vertOriginY: F,
        viewBox: null,
        viewTarget: null,
        visibility: null,
        width: null,
        widths: null,
        wordSpacing: null,
        writingMode: null,
        x: null,
        x1: null,
        x2: null,
        xChannelSelector: null,
        xHeight: F,
        y: null,
        y1: null,
        y2: null,
        yChannelSelector: null,
        z: null,
        zoomAndPan: null
    }
})
  , D0 = /^data[-\w.:]+$/i
  , Sc = /-[a-z]/g
  , R0 = /[A-Z]/g;
function N0(n, i) {
    const r = to(i);
    let l = i
      , o = Zn;
    if (r in n.normal)
        return n.property[n.normal[r]];
    if (r.length > 4 && r.slice(0, 4) === "data" && D0.test(i)) {
        if (i.charAt(4) === "-") {
            const s = i.slice(5).replace(Sc, j0);
            l = "data" + s.charAt(0).toUpperCase() + s.slice(1)
        } else {
            const s = i.slice(4);
            if (!Sc.test(s)) {
                let c = s.replace(R0, M0);
                c.charAt(0) !== "-" && (c = "-" + c),
                i = "data" + c
            }
        }
        o = Co
    }
    return new o(l,i)
}
function M0(n) {
    return "-" + n.toLowerCase()
}
function j0(n) {
    return n.charAt(1).toUpperCase()
}
const F0 = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink"
}
  , z0 = Uf([qf, Wf, Kf, Yf, L0], "html")
  , Eo = Uf([qf, Wf, Kf, Yf, P0], "svg");
function B0(n) {
    return n.join(" ").trim()
}
var Xf = {}
  , kc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g
  , $0 = /\n/g
  , U0 = /^\s*/
  , H0 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/
  , W0 = /^:\s*/
  , q0 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/
  , G0 = /^[;\s]*/
  , V0 = /^\s+|\s+$/g
  , K0 = `
`
  , Cc = "/"
  , Ec = "*"
  , Jt = ""
  , Y0 = "comment"
  , X0 = "declaration"
  , Z0 = function(n, i) {
    if (typeof n != "string")
        throw new TypeError("First argument must be a string");
    if (!n)
        return [];
    i = i || {};
    var r = 1
      , l = 1;
    function o(I) {
        var N = I.match($0);
        N && (r += N.length);
        var $ = I.lastIndexOf(K0);
        l = ~$ ? I.length - $ : l + I.length
    }
    function s() {
        var I = {
            line: r,
            column: l
        };
        return function(N) {
            return N.position = new c(I),
            g(),
            N
        }
    }
    function c(I) {
        this.start = I,
        this.end = {
            line: r,
            column: l
        },
        this.source = i.source
    }
    c.prototype.content = n;
    function f(I) {
        var N = new Error(i.source + ":" + r + ":" + l + ": " + I);
        if (N.reason = I,
        N.filename = i.source,
        N.line = r,
        N.column = l,
        N.source = n,
        !i.silent)
            throw N
    }
    function p(I) {
        var N = I.exec(n);
        if (N) {
            var $ = N[0];
            return o($),
            n = n.slice($.length),
            N
        }
    }
    function g() {
        p(U0)
    }
    function x(I) {
        var N;
        for (I = I || []; N = y(); )
            N !== !1 && I.push(N);
        return I
    }
    function y() {
        var I = s();
        if (!(Cc != n.charAt(0) || Ec != n.charAt(1))) {
            for (var N = 2; Jt != n.charAt(N) && (Ec != n.charAt(N) || Cc != n.charAt(N + 1)); )
                ++N;
            if (N += 2,
            Jt === n.charAt(N - 1))
                return f("End of comment missing");
            var $ = n.slice(2, N - 2);
            return l += 2,
            o($),
            n = n.slice(N),
            l += 2,
            I({
                type: Y0,
                comment: $
            })
        }
    }
    function k() {
        var I = s()
          , N = p(H0);
        if (N) {
            if (y(),
            !p(W0))
                return f("property missing ':'");
            var $ = p(q0)
              , M = I({
                type: X0,
                property: Ac(N[0].replace(kc, Jt)),
                value: $ ? Ac($[0].replace(kc, Jt)) : Jt
            });
            return p(G0),
            M
        }
    }
    function v() {
        var I = [];
        x(I);
        for (var N; N = k(); )
            N !== !1 && (I.push(N),
            x(I));
        return I
    }
    return g(),
    v()
};
function Ac(n) {
    return n ? n.replace(V0, Jt) : Jt
}
var Q0 = at && at.__importDefault || function(n) {
    return n && n.__esModule ? n : {
        default: n
    }
}
;
Object.defineProperty(Xf, "__esModule", {
    value: !0
});
var J0 = Q0(Z0);
function ev(n, i) {
    var r = null;
    if (!n || typeof n != "string")
        return r;
    var l = (0,
    J0.default)(n)
      , o = typeof i == "function";
    return l.forEach(function(s) {
        if (s.type === "declaration") {
            var c = s.property
              , f = s.value;
            o ? i(c, f, s) : f && (r = r || {},
            r[c] = f)
        }
    }),
    r
}
var Tc = Xf.default = ev;
const nv = Tc.default || Tc
  , Zf = Qf("end")
  , Ao = Qf("start");
function Qf(n) {
    return i;
    function i(r) {
        const l = r && r.position && r.position[n] || {};
        if (typeof l.line == "number" && l.line > 0 && typeof l.column == "number" && l.column > 0)
            return {
                line: l.line,
                column: l.column,
                offset: typeof l.offset == "number" && l.offset > -1 ? l.offset : void 0
            }
    }
}
function tv(n) {
    const i = Ao(n)
      , r = Zf(n);
    if (i && r)
        return {
            start: i,
            end: r
        }
}
function ei(n) {
    return !n || typeof n != "object" ? "" : "position" in n || "type" in n ? Ic(n.position) : "start" in n || "end" in n ? Ic(n) : "line" in n || "column" in n ? io(n) : ""
}
function io(n) {
    return Oc(n && n.line) + ":" + Oc(n && n.column)
}
function Ic(n) {
    return io(n && n.start) + "-" + io(n && n.end)
}
function Oc(n) {
    return n && typeof n == "number" ? n : 1
}
class dn extends Error {
    constructor(i, r, l) {
        super(),
        typeof r == "string" && (l = r,
        r = void 0);
        let o = ""
          , s = {}
          , c = !1;
        if (r && ("line" in r && "column" in r ? s = {
            place: r
        } : "start" in r && "end" in r ? s = {
            place: r
        } : "type" in r ? s = {
            ancestors: [r],
            place: r.position
        } : s = {
            ...r
        }),
        typeof i == "string" ? o = i : !s.cause && i && (c = !0,
        o = i.message,
        s.cause = i),
        !s.ruleId && !s.source && typeof l == "string") {
            const p = l.indexOf(":");
            p === -1 ? s.ruleId = l : (s.source = l.slice(0, p),
            s.ruleId = l.slice(p + 1))
        }
        if (!s.place && s.ancestors && s.ancestors) {
            const p = s.ancestors[s.ancestors.length - 1];
            p && (s.place = p.position)
        }
        const f = s.place && "start" in s.place ? s.place.start : s.place;
        this.ancestors = s.ancestors || void 0,
        this.cause = s.cause || void 0,
        this.column = f ? f.column : void 0,
        this.fatal = void 0,
        this.file,
        this.message = o,
        this.line = f ? f.line : void 0,
        this.name = ei(s.place) || "1:1",
        this.place = s.place || void 0,
        this.reason = this.message,
        this.ruleId = s.ruleId || void 0,
        this.source = s.source || void 0,
        this.stack = c && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : "",
        this.actual,
        this.expected,
        this.note,
        this.url
    }
}
dn.prototype.file = "";
dn.prototype.name = "";
dn.prototype.reason = "";
dn.prototype.message = "";
dn.prototype.stack = "";
dn.prototype.column = void 0;
dn.prototype.line = void 0;
dn.prototype.ancestors = void 0;
dn.prototype.cause = void 0;
dn.prototype.fatal = void 0;
dn.prototype.place = void 0;
dn.prototype.ruleId = void 0;
dn.prototype.source = void 0;
const To = {}.hasOwnProperty
  , rv = new Map
  , iv = /[A-Z]/g
  , av = /-([a-z])/g
  , lv = new Set(["table", "tbody", "thead", "tfoot", "tr"])
  , ov = new Set(["td", "th"])
  , Jf = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function sv(n, i) {
    if (!i || i.Fragment === void 0)
        throw new TypeError("Expected `Fragment` in options");
    const r = i.filePath || void 0;
    let l;
    if (i.development) {
        if (typeof i.jsxDEV != "function")
            throw new TypeError("Expected `jsxDEV` in options when `development: true`");
        l = mv(r, i.jsxDEV)
    } else {
        if (typeof i.jsx != "function")
            throw new TypeError("Expected `jsx` in production options");
        if (typeof i.jsxs != "function")
            throw new TypeError("Expected `jsxs` in production options");
        l = gv(r, i.jsx, i.jsxs)
    }
    const o = {
        Fragment: i.Fragment,
        ancestors: [],
        components: i.components || {},
        create: l,
        elementAttributeNameCase: i.elementAttributeNameCase || "react",
        evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
        filePath: r,
        ignoreInvalidStyle: i.ignoreInvalidStyle || !1,
        passKeys: i.passKeys !== !1,
        passNode: i.passNode || !1,
        schema: i.space === "svg" ? Eo : z0,
        stylePropertyNameCase: i.stylePropertyNameCase || "dom",
        tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
    }
      , s = eh(o, n, void 0);
    return s && typeof s != "string" ? s : o.create(n, o.Fragment, {
        children: s || void 0
    }, void 0)
}
function eh(n, i, r) {
    if (i.type === "element")
        return uv(n, i, r);
    if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
        return cv(n, i);
    if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
        return hv(n, i, r);
    if (i.type === "mdxjsEsm")
        return fv(n, i);
    if (i.type === "root")
        return pv(n, i, r);
    if (i.type === "text")
        return dv(n, i)
}
function uv(n, i, r) {
    const l = n.schema;
    let o = l;
    i.tagName.toLowerCase() === "svg" && l.space === "html" && (o = Eo,
    n.schema = o),
    n.ancestors.push(i);
    const s = th(n, i.tagName, !1)
      , c = xv(n, i);
    let f = Oo(n, i);
    return lv.has(i.tagName) && (f = f.filter(function(p) {
        return typeof p == "string" ? !T0(p) : !0
    })),
    nh(n, c, s, i),
    Io(c, f),
    n.ancestors.pop(),
    n.schema = l,
    n.create(i, s, c, r)
}
function cv(n, i) {
    if (i.data && i.data.estree && n.evaluater) {
        const l = i.data.estree.body[0];
        return l.type,
        n.evaluater.evaluateExpression(l.expression)
    }
    ti(n, i.position)
}
function fv(n, i) {
    if (i.data && i.data.estree && n.evaluater)
        return n.evaluater.evaluateProgram(i.data.estree);
    ti(n, i.position)
}
function hv(n, i, r) {
    const l = n.schema;
    let o = l;
    i.name === "svg" && l.space === "html" && (o = Eo,
    n.schema = o),
    n.ancestors.push(i);
    const s = i.name === null ? n.Fragment : th(n, i.name, !0)
      , c = yv(n, i)
      , f = Oo(n, i);
    return nh(n, c, s, i),
    Io(c, f),
    n.ancestors.pop(),
    n.schema = l,
    n.create(i, s, c, r)
}
function pv(n, i, r) {
    const l = {};
    return Io(l, Oo(n, i)),
    n.create(i, n.Fragment, l, r)
}
function dv(n, i) {
    return i.value
}
function nh(n, i, r, l) {
    typeof r != "string" && r !== n.Fragment && n.passNode && (i.node = l)
}
function Io(n, i) {
    if (i.length > 0) {
        const r = i.length > 1 ? i : i[0];
        r && (n.children = r)
    }
}
function gv(n, i, r) {
    return l;
    function l(o, s, c, f) {
        const g = Array.isArray(c.children) ? r : i;
        return f ? g(s, c, f) : g(s, c)
    }
}
function mv(n, i) {
    return r;
    function r(l, o, s, c) {
        const f = Array.isArray(s.children)
          , p = Ao(l);
        return i(o, s, c, f, {
            columnNumber: p ? p.column - 1 : void 0,
            fileName: n,
            lineNumber: p ? p.line : void 0
        }, void 0)
    }
}
function xv(n, i) {
    const r = {};
    let l, o;
    for (o in i.properties)
        if (o !== "children" && To.call(i.properties, o)) {
            const s = vv(n, o, i.properties[o]);
            if (s) {
                const [c,f] = s;
                n.tableCellAlignToStyle && c === "align" && typeof f == "string" && ov.has(i.tagName) ? l = f : r[c] = f
            }
        }
    if (l) {
        const s = r.style || (r.style = {});
        s[n.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = l
    }
    return r
}
function yv(n, i) {
    const r = {};
    for (const l of i.attributes)
        if (l.type === "mdxJsxExpressionAttribute")
            if (l.data && l.data.estree && n.evaluater) {
                const s = l.data.estree.body[0];
                s.type;
                const c = s.expression;
                c.type;
                const f = c.properties[0];
                f.type,
                Object.assign(r, n.evaluater.evaluateExpression(f.argument))
            } else
                ti(n, i.position);
        else {
            const o = l.name;
            let s;
            if (l.value && typeof l.value == "object")
                if (l.value.data && l.value.data.estree && n.evaluater) {
                    const f = l.value.data.estree.body[0];
                    f.type,
                    s = n.evaluater.evaluateExpression(f.expression)
                } else
                    ti(n, i.position);
            else
                s = l.value === null ? !0 : l.value;
            r[o] = s
        }
    return r
}
function Oo(n, i) {
    const r = [];
    let l = -1;
    const o = n.passKeys ? new Map : rv;
    for (; ++l < i.children.length; ) {
        const s = i.children[l];
        let c;
        if (n.passKeys) {
            const p = s.type === "element" ? s.tagName : s.type === "mdxJsxFlowElement" || s.type === "mdxJsxTextElement" ? s.name : void 0;
            if (p) {
                const g = o.get(p) || 0;
                c = p + "-" + g,
                o.set(p, g + 1)
            }
        }
        const f = eh(n, s, c);
        f !== void 0 && r.push(f)
    }
    return r
}
function vv(n, i, r) {
    const l = N0(n.schema, i);
    if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
        if (Array.isArray(r) && (r = l.commaSeparated ? S0(r) : B0(r)),
        l.property === "style") {
            let o = typeof r == "object" ? r : bv(n, String(r));
            return n.stylePropertyNameCase === "css" && (o = wv(o)),
            ["style", o]
        }
        return [n.elementAttributeNameCase === "react" && l.space ? F0[l.property] || l.property : l.attribute, r]
    }
}
function bv(n, i) {
    const r = {};
    try {
        nv(i, l)
    } catch (o) {
        if (!n.ignoreInvalidStyle) {
            const s = o
              , c = new dn("Cannot parse `style` attribute",{
                ancestors: n.ancestors,
                cause: s,
                ruleId: "style",
                source: "hast-util-to-jsx-runtime"
            });
            throw c.file = n.filePath || void 0,
            c.url = Jf + "#cannot-parse-style-attribute",
            c
        }
    }
    return r;
    function l(o, s) {
        let c = o;
        c.slice(0, 2) !== "--" && (c.slice(0, 4) === "-ms-" && (c = "ms-" + c.slice(4)),
        c = c.replace(av, Sv)),
        r[c] = s
    }
}
function th(n, i, r) {
    let l;
    if (!r)
        l = {
            type: "Literal",
            value: i
        };
    else if (i.includes(".")) {
        const o = i.split(".");
        let s = -1, c;
        for (; ++s < o.length; ) {
            const f = bc(o[s]) ? {
                type: "Identifier",
                name: o[s]
            } : {
                type: "Literal",
                value: o[s]
            };
            c = c ? {
                type: "MemberExpression",
                object: c,
                property: f,
                computed: !!(s && f.type === "Literal"),
                optional: !1
            } : f
        }
        l = c
    } else
        l = bc(i) && !/^[a-z]/.test(i) ? {
            type: "Identifier",
            name: i
        } : {
            type: "Literal",
            value: i
        };
    if (l.type === "Literal") {
        const o = l.value;
        return To.call(n.components, o) ? n.components[o] : o
    }
    if (n.evaluater)
        return n.evaluater.evaluateExpression(l);
    ti(n)
}
function ti(n, i) {
    const r = new dn("Cannot handle MDX estrees without `createEvaluater`",{
        ancestors: n.ancestors,
        place: i,
        ruleId: "mdx-estree",
        source: "hast-util-to-jsx-runtime"
    });
    throw r.file = n.filePath || void 0,
    r.url = Jf + "#cannot-handle-mdx-estrees-without-createevaluater",
    r
}
function wv(n) {
    const i = {};
    let r;
    for (r in n)
        To.call(n, r) && (i[_v(r)] = n[r]);
    return i
}
function _v(n) {
    let i = n.replace(iv, kv);
    return i.slice(0, 3) === "ms-" && (i = "-" + i),
    i
}
function Sv(n, i) {
    return i.toUpperCase()
}
function kv(n) {
    return "-" + n.toLowerCase()
}
const Hl = {
    action: ["form"],
    cite: ["blockquote", "del", "ins", "q"],
    data: ["object"],
    formAction: ["button", "input"],
    href: ["a", "area", "base", "link"],
    icon: ["menuitem"],
    itemId: null,
    manifest: ["html"],
    ping: ["a", "area"],
    poster: ["video"],
    src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
}
  , Cv = {};
function Ev(n, i) {
    const r = i || Cv
      , l = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0
      , o = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
    return rh(n, l, o)
}
function rh(n, i, r) {
    if (Av(n)) {
        if ("value" in n)
            return n.type === "html" && !r ? "" : n.value;
        if (i && "alt" in n && n.alt)
            return n.alt;
        if ("children" in n)
            return Lc(n.children, i, r)
    }
    return Array.isArray(n) ? Lc(n, i, r) : ""
}
function Lc(n, i, r) {
    const l = [];
    let o = -1;
    for (; ++o < n.length; )
        l[o] = rh(n[o], i, r);
    return l.join("")
}
function Av(n) {
    return !!(n && typeof n == "object")
}
const Pc = document.createElement("i");
function Lo(n) {
    const i = "&" + n + ";";
    Pc.innerHTML = i;
    const r = Pc.textContent;
    return r.charCodeAt(r.length - 1) === 59 && n !== "semi" || r === i ? !1 : r
}
function dt(n, i, r, l) {
    const o = n.length;
    let s = 0, c;
    if (i < 0 ? i = -i > o ? 0 : o + i : i = i > o ? o : i,
    r = r > 0 ? r : 0,
    l.length < 1e4)
        c = Array.from(l),
        c.unshift(i, r),
        n.splice(...c);
    else
        for (r && n.splice(i, r); s < l.length; )
            c = l.slice(s, s + 1e4),
            c.unshift(i, 0),
            n.splice(...c),
            s += 1e4,
            i += 1e4
}
function Xn(n, i) {
    return n.length > 0 ? (dt(n, n.length, 0, i),
    n) : i
}
const Dc = {}.hasOwnProperty;
function Tv(n) {
    const i = {};
    let r = -1;
    for (; ++r < n.length; )
        Iv(i, n[r]);
    return i
}
function Iv(n, i) {
    let r;
    for (r in i) {
        const o = (Dc.call(n, r) ? n[r] : void 0) || (n[r] = {})
          , s = i[r];
        let c;
        if (s)
            for (c in s) {
                Dc.call(o, c) || (o[c] = []);
                const f = s[c];
                Ov(o[c], Array.isArray(f) ? f : f ? [f] : [])
            }
    }
}
function Ov(n, i) {
    let r = -1;
    const l = [];
    for (; ++r < i.length; )
        (i[r].add === "after" ? n : l).push(i[r]);
    dt(n, 0, 0, l)
}
function ih(n, i) {
    const r = Number.parseInt(n, i);
    return r < 9 || r === 11 || r > 13 && r < 32 || r > 126 && r < 160 || r > 55295 && r < 57344 || r > 64975 && r < 65008 || (r & 65535) === 65535 || (r & 65535) === 65534 || r > 1114111 ? "�" : String.fromCodePoint(r)
}
function kr(n) {
    return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
const pt = Bt(/[A-Za-z]/)
  , jn = Bt(/[\dA-Za-z]/)
  , Lv = Bt(/[#-'*+\--9=?A-Z^-~]/);
function ao(n) {
    return n !== null && (n < 32 || n === 127)
}
const lo = Bt(/\d/)
  , Pv = Bt(/[\dA-Fa-f]/)
  , Dv = Bt(/[!-/:-@[-`{-~]/);
function ae(n) {
    return n !== null && n < -2
}
function In(n) {
    return n !== null && (n < 0 || n === 32)
}
function _e(n) {
    return n === -2 || n === -1 || n === 32
}
const Rv = Bt(/\p{P}|\p{S}/u)
  , Nv = Bt(/\s/);
function Bt(n) {
    return i;
    function i(r) {
        return r !== null && r > -1 && n.test(String.fromCharCode(r))
    }
}
function Ar(n) {
    const i = [];
    let r = -1
      , l = 0
      , o = 0;
    for (; ++r < n.length; ) {
        const s = n.charCodeAt(r);
        let c = "";
        if (s === 37 && jn(n.charCodeAt(r + 1)) && jn(n.charCodeAt(r + 2)))
            o = 2;
        else if (s < 128)
            /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) || (c = String.fromCharCode(s));
        else if (s > 55295 && s < 57344) {
            const f = n.charCodeAt(r + 1);
            s < 56320 && f > 56319 && f < 57344 ? (c = String.fromCharCode(s, f),
            o = 1) : c = "�"
        } else
            c = String.fromCharCode(s);
        c && (i.push(n.slice(l, r), encodeURIComponent(c)),
        l = r + o + 1,
        c = ""),
        o && (r += o,
        o = 0)
    }
    return i.join("") + n.slice(l)
}
function De(n, i, r, l) {
    const o = l ? l - 1 : Number.POSITIVE_INFINITY;
    let s = 0;
    return c;
    function c(p) {
        return _e(p) ? (n.enter(r),
        f(p)) : i(p)
    }
    function f(p) {
        return _e(p) && s++ < o ? (n.consume(p),
        f) : (n.exit(r),
        i(p))
    }
}
const Mv = {
    tokenize: jv
};
function jv(n) {
    const i = n.attempt(this.parser.constructs.contentInitial, l, o);
    let r;
    return i;
    function l(f) {
        if (f === null) {
            n.consume(f);
            return
        }
        return n.enter("lineEnding"),
        n.consume(f),
        n.exit("lineEnding"),
        De(n, i, "linePrefix")
    }
    function o(f) {
        return n.enter("paragraph"),
        s(f)
    }
    function s(f) {
        const p = n.enter("chunkText", {
            contentType: "text",
            previous: r
        });
        return r && (r.next = p),
        r = p,
        c(f)
    }
    function c(f) {
        if (f === null) {
            n.exit("chunkText"),
            n.exit("paragraph"),
            n.consume(f);
            return
        }
        return ae(f) ? (n.consume(f),
        n.exit("chunkText"),
        s) : (n.consume(f),
        c)
    }
}
const Fv = {
    tokenize: zv
}
  , Rc = {
    tokenize: Bv
};
function zv(n) {
    const i = this
      , r = [];
    let l = 0, o, s, c;
    return f;
    function f(z) {
        if (l < r.length) {
            const J = r[l];
            return i.containerState = J[1],
            n.attempt(J[0].continuation, p, g)(z)
        }
        return g(z)
    }
    function p(z) {
        if (l++,
        i.containerState._closeFlow) {
            i.containerState._closeFlow = void 0,
            o && W();
            const J = i.events.length;
            let Y = J, P;
            for (; Y--; )
                if (i.events[Y][0] === "exit" && i.events[Y][1].type === "chunkFlow") {
                    P = i.events[Y][1].end;
                    break
                }
            M(l);
            let V = J;
            for (; V < i.events.length; )
                i.events[V][1].end = Object.assign({}, P),
                V++;
            return dt(i.events, Y + 1, 0, i.events.slice(J)),
            i.events.length = V,
            g(z)
        }
        return f(z)
    }
    function g(z) {
        if (l === r.length) {
            if (!o)
                return k(z);
            if (o.currentConstruct && o.currentConstruct.concrete)
                return I(z);
            i.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack)
        }
        return i.containerState = {},
        n.check(Rc, x, y)(z)
    }
    function x(z) {
        return o && W(),
        M(l),
        k(z)
    }
    function y(z) {
        return i.parser.lazy[i.now().line] = l !== r.length,
        c = i.now().offset,
        I(z)
    }
    function k(z) {
        return i.containerState = {},
        n.attempt(Rc, v, I)(z)
    }
    function v(z) {
        return l++,
        r.push([i.currentConstruct, i.containerState]),
        k(z)
    }
    function I(z) {
        if (z === null) {
            o && W(),
            M(0),
            n.consume(z);
            return
        }
        return o = o || i.parser.flow(i.now()),
        n.enter("chunkFlow", {
            contentType: "flow",
            previous: s,
            _tokenizer: o
        }),
        N(z)
    }
    function N(z) {
        if (z === null) {
            $(n.exit("chunkFlow"), !0),
            M(0),
            n.consume(z);
            return
        }
        return ae(z) ? (n.consume(z),
        $(n.exit("chunkFlow")),
        l = 0,
        i.interrupt = void 0,
        f) : (n.consume(z),
        N)
    }
    function $(z, J) {
        const Y = i.sliceStream(z);
        if (J && Y.push(null),
        z.previous = s,
        s && (s.next = z),
        s = z,
        o.defineSkip(z.start),
        o.write(Y),
        i.parser.lazy[z.start.line]) {
            let P = o.events.length;
            for (; P--; )
                if (o.events[P][1].start.offset < c && (!o.events[P][1].end || o.events[P][1].end.offset > c))
                    return;
            const V = i.events.length;
            let pe = V, ie, me;
            for (; pe--; )
                if (i.events[pe][0] === "exit" && i.events[pe][1].type === "chunkFlow") {
                    if (ie) {
                        me = i.events[pe][1].end;
                        break
                    }
                    ie = !0
                }
            for (M(l),
            P = V; P < i.events.length; )
                i.events[P][1].end = Object.assign({}, me),
                P++;
            dt(i.events, pe + 1, 0, i.events.slice(V)),
            i.events.length = P
        }
    }
    function M(z) {
        let J = r.length;
        for (; J-- > z; ) {
            const Y = r[J];
            i.containerState = Y[1],
            Y[0].exit.call(i, n)
        }
        r.length = z
    }
    function W() {
        o.write([null]),
        s = void 0,
        o = void 0,
        i.containerState._closeFlow = void 0
    }
}
function Bv(n, i, r) {
    return De(n, n.attempt(this.parser.constructs.document, i, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}
function Nc(n) {
    if (n === null || In(n) || Nv(n))
        return 1;
    if (Rv(n))
        return 2
}
function Po(n, i, r) {
    const l = [];
    let o = -1;
    for (; ++o < n.length; ) {
        const s = n[o].resolveAll;
        s && !l.includes(s) && (i = s(i, r),
        l.push(s))
    }
    return i
}
const oo = {
    name: "attention",
    tokenize: Uv,
    resolveAll: $v
};
function $v(n, i) {
    let r = -1, l, o, s, c, f, p, g, x;
    for (; ++r < n.length; )
        if (n[r][0] === "enter" && n[r][1].type === "attentionSequence" && n[r][1]._close) {
            for (l = r; l--; )
                if (n[l][0] === "exit" && n[l][1].type === "attentionSequence" && n[l][1]._open && i.sliceSerialize(n[l][1]).charCodeAt(0) === i.sliceSerialize(n[r][1]).charCodeAt(0)) {
                    if ((n[l][1]._close || n[r][1]._open) && (n[r][1].end.offset - n[r][1].start.offset) % 3 && !((n[l][1].end.offset - n[l][1].start.offset + n[r][1].end.offset - n[r][1].start.offset) % 3))
                        continue;
                    p = n[l][1].end.offset - n[l][1].start.offset > 1 && n[r][1].end.offset - n[r][1].start.offset > 1 ? 2 : 1;
                    const y = Object.assign({}, n[l][1].end)
                      , k = Object.assign({}, n[r][1].start);
                    Mc(y, -p),
                    Mc(k, p),
                    c = {
                        type: p > 1 ? "strongSequence" : "emphasisSequence",
                        start: y,
                        end: Object.assign({}, n[l][1].end)
                    },
                    f = {
                        type: p > 1 ? "strongSequence" : "emphasisSequence",
                        start: Object.assign({}, n[r][1].start),
                        end: k
                    },
                    s = {
                        type: p > 1 ? "strongText" : "emphasisText",
                        start: Object.assign({}, n[l][1].end),
                        end: Object.assign({}, n[r][1].start)
                    },
                    o = {
                        type: p > 1 ? "strong" : "emphasis",
                        start: Object.assign({}, c.start),
                        end: Object.assign({}, f.end)
                    },
                    n[l][1].end = Object.assign({}, c.start),
                    n[r][1].start = Object.assign({}, f.end),
                    g = [],
                    n[l][1].end.offset - n[l][1].start.offset && (g = Xn(g, [["enter", n[l][1], i], ["exit", n[l][1], i]])),
                    g = Xn(g, [["enter", o, i], ["enter", c, i], ["exit", c, i], ["enter", s, i]]),
                    g = Xn(g, Po(i.parser.constructs.insideSpan.null, n.slice(l + 1, r), i)),
                    g = Xn(g, [["exit", s, i], ["enter", f, i], ["exit", f, i], ["exit", o, i]]),
                    n[r][1].end.offset - n[r][1].start.offset ? (x = 2,
                    g = Xn(g, [["enter", n[r][1], i], ["exit", n[r][1], i]])) : x = 0,
                    dt(n, l - 1, r - l + 3, g),
                    r = l + g.length - x - 2;
                    break
                }
        }
    for (r = -1; ++r < n.length; )
        n[r][1].type === "attentionSequence" && (n[r][1].type = "data");
    return n
}
function Uv(n, i) {
    const r = this.parser.constructs.attentionMarkers.null
      , l = this.previous
      , o = Nc(l);
    let s;
    return c;
    function c(p) {
        return s = p,
        n.enter("attentionSequence"),
        f(p)
    }
    function f(p) {
        if (p === s)
            return n.consume(p),
            f;
        const g = n.exit("attentionSequence")
          , x = Nc(p)
          , y = !x || x === 2 && o || r.includes(p)
          , k = !o || o === 2 && x || r.includes(l);
        return g._open = !!(s === 42 ? y : y && (o || !k)),
        g._close = !!(s === 42 ? k : k && (x || !y)),
        i(p)
    }
}
function Mc(n, i) {
    n.column += i,
    n.offset += i,
    n._bufferIndex += i
}
const Hv = {
    name: "autolink",
    tokenize: Wv
};
function Wv(n, i, r) {
    let l = 0;
    return o;
    function o(v) {
        return n.enter("autolink"),
        n.enter("autolinkMarker"),
        n.consume(v),
        n.exit("autolinkMarker"),
        n.enter("autolinkProtocol"),
        s
    }
    function s(v) {
        return pt(v) ? (n.consume(v),
        c) : g(v)
    }
    function c(v) {
        return v === 43 || v === 45 || v === 46 || jn(v) ? (l = 1,
        f(v)) : g(v)
    }
    function f(v) {
        return v === 58 ? (n.consume(v),
        l = 0,
        p) : (v === 43 || v === 45 || v === 46 || jn(v)) && l++ < 32 ? (n.consume(v),
        f) : (l = 0,
        g(v))
    }
    function p(v) {
        return v === 62 ? (n.exit("autolinkProtocol"),
        n.enter("autolinkMarker"),
        n.consume(v),
        n.exit("autolinkMarker"),
        n.exit("autolink"),
        i) : v === null || v === 32 || v === 60 || ao(v) ? r(v) : (n.consume(v),
        p)
    }
    function g(v) {
        return v === 64 ? (n.consume(v),
        x) : Lv(v) ? (n.consume(v),
        g) : r(v)
    }
    function x(v) {
        return jn(v) ? y(v) : r(v)
    }
    function y(v) {
        return v === 46 ? (n.consume(v),
        l = 0,
        x) : v === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail",
        n.enter("autolinkMarker"),
        n.consume(v),
        n.exit("autolinkMarker"),
        n.exit("autolink"),
        i) : k(v)
    }
    function k(v) {
        if ((v === 45 || jn(v)) && l++ < 63) {
            const I = v === 45 ? k : y;
            return n.consume(v),
            I
        }
        return r(v)
    }
}
const ha = {
    tokenize: qv,
    partial: !0
};
function qv(n, i, r) {
    return l;
    function l(s) {
        return _e(s) ? De(n, o, "linePrefix")(s) : o(s)
    }
    function o(s) {
        return s === null || ae(s) ? i(s) : r(s)
    }
}
const ah = {
    name: "blockQuote",
    tokenize: Gv,
    continuation: {
        tokenize: Vv
    },
    exit: Kv
};
function Gv(n, i, r) {
    const l = this;
    return o;
    function o(c) {
        if (c === 62) {
            const f = l.containerState;
            return f.open || (n.enter("blockQuote", {
                _container: !0
            }),
            f.open = !0),
            n.enter("blockQuotePrefix"),
            n.enter("blockQuoteMarker"),
            n.consume(c),
            n.exit("blockQuoteMarker"),
            s
        }
        return r(c)
    }
    function s(c) {
        return _e(c) ? (n.enter("blockQuotePrefixWhitespace"),
        n.consume(c),
        n.exit("blockQuotePrefixWhitespace"),
        n.exit("blockQuotePrefix"),
        i) : (n.exit("blockQuotePrefix"),
        i(c))
    }
}
function Vv(n, i, r) {
    const l = this;
    return o;
    function o(c) {
        return _e(c) ? De(n, s, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c) : s(c)
    }
    function s(c) {
        return n.attempt(ah, i, r)(c)
    }
}
function Kv(n) {
    n.exit("blockQuote")
}
const lh = {
    name: "characterEscape",
    tokenize: Yv
};
function Yv(n, i, r) {
    return l;
    function l(s) {
        return n.enter("characterEscape"),
        n.enter("escapeMarker"),
        n.consume(s),
        n.exit("escapeMarker"),
        o
    }
    function o(s) {
        return Dv(s) ? (n.enter("characterEscapeValue"),
        n.consume(s),
        n.exit("characterEscapeValue"),
        n.exit("characterEscape"),
        i) : r(s)
    }
}
const oh = {
    name: "characterReference",
    tokenize: Xv
};
function Xv(n, i, r) {
    const l = this;
    let o = 0, s, c;
    return f;
    function f(y) {
        return n.enter("characterReference"),
        n.enter("characterReferenceMarker"),
        n.consume(y),
        n.exit("characterReferenceMarker"),
        p
    }
    function p(y) {
        return y === 35 ? (n.enter("characterReferenceMarkerNumeric"),
        n.consume(y),
        n.exit("characterReferenceMarkerNumeric"),
        g) : (n.enter("characterReferenceValue"),
        s = 31,
        c = jn,
        x(y))
    }
    function g(y) {
        return y === 88 || y === 120 ? (n.enter("characterReferenceMarkerHexadecimal"),
        n.consume(y),
        n.exit("characterReferenceMarkerHexadecimal"),
        n.enter("characterReferenceValue"),
        s = 6,
        c = Pv,
        x) : (n.enter("characterReferenceValue"),
        s = 7,
        c = lo,
        x(y))
    }
    function x(y) {
        if (y === 59 && o) {
            const k = n.exit("characterReferenceValue");
            return c === jn && !Lo(l.sliceSerialize(k)) ? r(y) : (n.enter("characterReferenceMarker"),
            n.consume(y),
            n.exit("characterReferenceMarker"),
            n.exit("characterReference"),
            i)
        }
        return c(y) && o++ < s ? (n.consume(y),
        x) : r(y)
    }
}
const jc = {
    tokenize: Qv,
    partial: !0
}
  , Fc = {
    name: "codeFenced",
    tokenize: Zv,
    concrete: !0
};
function Zv(n, i, r) {
    const l = this
      , o = {
        tokenize: Y,
        partial: !0
    };
    let s = 0, c = 0, f;
    return p;
    function p(P) {
        return g(P)
    }
    function g(P) {
        const V = l.events[l.events.length - 1];
        return s = V && V[1].type === "linePrefix" ? V[2].sliceSerialize(V[1], !0).length : 0,
        f = P,
        n.enter("codeFenced"),
        n.enter("codeFencedFence"),
        n.enter("codeFencedFenceSequence"),
        x(P)
    }
    function x(P) {
        return P === f ? (c++,
        n.consume(P),
        x) : c < 3 ? r(P) : (n.exit("codeFencedFenceSequence"),
        _e(P) ? De(n, y, "whitespace")(P) : y(P))
    }
    function y(P) {
        return P === null || ae(P) ? (n.exit("codeFencedFence"),
        l.interrupt ? i(P) : n.check(jc, N, J)(P)) : (n.enter("codeFencedFenceInfo"),
        n.enter("chunkString", {
            contentType: "string"
        }),
        k(P))
    }
    function k(P) {
        return P === null || ae(P) ? (n.exit("chunkString"),
        n.exit("codeFencedFenceInfo"),
        y(P)) : _e(P) ? (n.exit("chunkString"),
        n.exit("codeFencedFenceInfo"),
        De(n, v, "whitespace")(P)) : P === 96 && P === f ? r(P) : (n.consume(P),
        k)
    }
    function v(P) {
        return P === null || ae(P) ? y(P) : (n.enter("codeFencedFenceMeta"),
        n.enter("chunkString", {
            contentType: "string"
        }),
        I(P))
    }
    function I(P) {
        return P === null || ae(P) ? (n.exit("chunkString"),
        n.exit("codeFencedFenceMeta"),
        y(P)) : P === 96 && P === f ? r(P) : (n.consume(P),
        I)
    }
    function N(P) {
        return n.attempt(o, J, $)(P)
    }
    function $(P) {
        return n.enter("lineEnding"),
        n.consume(P),
        n.exit("lineEnding"),
        M
    }
    function M(P) {
        return s > 0 && _e(P) ? De(n, W, "linePrefix", s + 1)(P) : W(P)
    }
    function W(P) {
        return P === null || ae(P) ? n.check(jc, N, J)(P) : (n.enter("codeFlowValue"),
        z(P))
    }
    function z(P) {
        return P === null || ae(P) ? (n.exit("codeFlowValue"),
        W(P)) : (n.consume(P),
        z)
    }
    function J(P) {
        return n.exit("codeFenced"),
        i(P)
    }
    function Y(P, V, pe) {
        let ie = 0;
        return me;
        function me(se) {
            return P.enter("lineEnding"),
            P.consume(se),
            P.exit("lineEnding"),
            X
        }
        function X(se) {
            return P.enter("codeFencedFence"),
            _e(se) ? De(P, U, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(se) : U(se)
        }
        function U(se) {
            return se === f ? (P.enter("codeFencedFenceSequence"),
            ye(se)) : pe(se)
        }
        function ye(se) {
            return se === f ? (ie++,
            P.consume(se),
            ye) : ie >= c ? (P.exit("codeFencedFenceSequence"),
            _e(se) ? De(P, Se, "whitespace")(se) : Se(se)) : pe(se)
        }
        function Se(se) {
            return se === null || ae(se) ? (P.exit("codeFencedFence"),
            V(se)) : pe(se)
        }
    }
}
function Qv(n, i, r) {
    const l = this;
    return o;
    function o(c) {
        return c === null ? r(c) : (n.enter("lineEnding"),
        n.consume(c),
        n.exit("lineEnding"),
        s)
    }
    function s(c) {
        return l.parser.lazy[l.now().line] ? r(c) : i(c)
    }
}
const Wl = {
    name: "codeIndented",
    tokenize: eb
}
  , Jv = {
    tokenize: nb,
    partial: !0
};
function eb(n, i, r) {
    const l = this;
    return o;
    function o(g) {
        return n.enter("codeIndented"),
        De(n, s, "linePrefix", 4 + 1)(g)
    }
    function s(g) {
        const x = l.events[l.events.length - 1];
        return x && x[1].type === "linePrefix" && x[2].sliceSerialize(x[1], !0).length >= 4 ? c(g) : r(g)
    }
    function c(g) {
        return g === null ? p(g) : ae(g) ? n.attempt(Jv, c, p)(g) : (n.enter("codeFlowValue"),
        f(g))
    }
    function f(g) {
        return g === null || ae(g) ? (n.exit("codeFlowValue"),
        c(g)) : (n.consume(g),
        f)
    }
    function p(g) {
        return n.exit("codeIndented"),
        i(g)
    }
}
function nb(n, i, r) {
    const l = this;
    return o;
    function o(c) {
        return l.parser.lazy[l.now().line] ? r(c) : ae(c) ? (n.enter("lineEnding"),
        n.consume(c),
        n.exit("lineEnding"),
        o) : De(n, s, "linePrefix", 4 + 1)(c)
    }
    function s(c) {
        const f = l.events[l.events.length - 1];
        return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? i(c) : ae(c) ? o(c) : r(c)
    }
}
const tb = {
    name: "codeText",
    tokenize: ab,
    resolve: rb,
    previous: ib
};
function rb(n) {
    let i = n.length - 4, r = 3, l, o;
    if ((n[r][1].type === "lineEnding" || n[r][1].type === "space") && (n[i][1].type === "lineEnding" || n[i][1].type === "space")) {
        for (l = r; ++l < i; )
            if (n[l][1].type === "codeTextData") {
                n[r][1].type = "codeTextPadding",
                n[i][1].type = "codeTextPadding",
                r += 2,
                i -= 2;
                break
            }
    }
    for (l = r - 1,
    i++; ++l <= i; )
        o === void 0 ? l !== i && n[l][1].type !== "lineEnding" && (o = l) : (l === i || n[l][1].type === "lineEnding") && (n[o][1].type = "codeTextData",
        l !== o + 2 && (n[o][1].end = n[l - 1][1].end,
        n.splice(o + 2, l - o - 2),
        i -= l - o - 2,
        l = o + 2),
        o = void 0);
    return n
}
function ib(n) {
    return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}
function ab(n, i, r) {
    let l = 0, o, s;
    return c;
    function c(y) {
        return n.enter("codeText"),
        n.enter("codeTextSequence"),
        f(y)
    }
    function f(y) {
        return y === 96 ? (n.consume(y),
        l++,
        f) : (n.exit("codeTextSequence"),
        p(y))
    }
    function p(y) {
        return y === null ? r(y) : y === 32 ? (n.enter("space"),
        n.consume(y),
        n.exit("space"),
        p) : y === 96 ? (s = n.enter("codeTextSequence"),
        o = 0,
        x(y)) : ae(y) ? (n.enter("lineEnding"),
        n.consume(y),
        n.exit("lineEnding"),
        p) : (n.enter("codeTextData"),
        g(y))
    }
    function g(y) {
        return y === null || y === 32 || y === 96 || ae(y) ? (n.exit("codeTextData"),
        p(y)) : (n.consume(y),
        g)
    }
    function x(y) {
        return y === 96 ? (n.consume(y),
        o++,
        x) : o === l ? (n.exit("codeTextSequence"),
        n.exit("codeText"),
        i(y)) : (s.type = "codeTextData",
        g(y))
    }
}
function sh(n) {
    const i = {};
    let r = -1, l, o, s, c, f, p, g;
    for (; ++r < n.length; ) {
        for (; r in i; )
            r = i[r];
        if (l = n[r],
        r && l[1].type === "chunkFlow" && n[r - 1][1].type === "listItemPrefix" && (p = l[1]._tokenizer.events,
        s = 0,
        s < p.length && p[s][1].type === "lineEndingBlank" && (s += 2),
        s < p.length && p[s][1].type === "content"))
            for (; ++s < p.length && p[s][1].type !== "content"; )
                p[s][1].type === "chunkText" && (p[s][1]._isInFirstContentOfListItem = !0,
                s++);
        if (l[0] === "enter")
            l[1].contentType && (Object.assign(i, lb(n, r)),
            r = i[r],
            g = !0);
        else if (l[1]._container) {
            for (s = r,
            o = void 0; s-- && (c = n[s],
            c[1].type === "lineEnding" || c[1].type === "lineEndingBlank"); )
                c[0] === "enter" && (o && (n[o][1].type = "lineEndingBlank"),
                c[1].type = "lineEnding",
                o = s);
            o && (l[1].end = Object.assign({}, n[o][1].start),
            f = n.slice(o, r),
            f.unshift(l),
            dt(n, o, r - o + 1, f))
        }
    }
    return !g
}
function lb(n, i) {
    const r = n[i][1]
      , l = n[i][2];
    let o = i - 1;
    const s = []
      , c = r._tokenizer || l.parser[r.contentType](r.start)
      , f = c.events
      , p = []
      , g = {};
    let x, y, k = -1, v = r, I = 0, N = 0;
    const $ = [N];
    for (; v; ) {
        for (; n[++o][1] !== v; )
            ;
        s.push(o),
        v._tokenizer || (x = l.sliceStream(v),
        v.next || x.push(null),
        y && c.defineSkip(v.start),
        v._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = !0),
        c.write(x),
        v._isInFirstContentOfListItem && (c._gfmTasklistFirstContentOfListItem = void 0)),
        y = v,
        v = v.next
    }
    for (v = r; ++k < f.length; )
        f[k][0] === "exit" && f[k - 1][0] === "enter" && f[k][1].type === f[k - 1][1].type && f[k][1].start.line !== f[k][1].end.line && (N = k + 1,
        $.push(N),
        v._tokenizer = void 0,
        v.previous = void 0,
        v = v.next);
    for (c.events = [],
    v ? (v._tokenizer = void 0,
    v.previous = void 0) : $.pop(),
    k = $.length; k--; ) {
        const M = f.slice($[k], $[k + 1])
          , W = s.pop();
        p.unshift([W, W + M.length - 1]),
        dt(n, W, 2, M)
    }
    for (k = -1; ++k < p.length; )
        g[I + p[k][0]] = I + p[k][1],
        I += p[k][1] - p[k][0] - 1;
    return g
}
const ob = {
    tokenize: cb,
    resolve: ub
}
  , sb = {
    tokenize: fb,
    partial: !0
};
function ub(n) {
    return sh(n),
    n
}
function cb(n, i) {
    let r;
    return l;
    function l(f) {
        return n.enter("content"),
        r = n.enter("chunkContent", {
            contentType: "content"
        }),
        o(f)
    }
    function o(f) {
        return f === null ? s(f) : ae(f) ? n.check(sb, c, s)(f) : (n.consume(f),
        o)
    }
    function s(f) {
        return n.exit("chunkContent"),
        n.exit("content"),
        i(f)
    }
    function c(f) {
        return n.consume(f),
        n.exit("chunkContent"),
        r.next = n.enter("chunkContent", {
            contentType: "content",
            previous: r
        }),
        r = r.next,
        o
    }
}
function fb(n, i, r) {
    const l = this;
    return o;
    function o(c) {
        return n.exit("chunkContent"),
        n.enter("lineEnding"),
        n.consume(c),
        n.exit("lineEnding"),
        De(n, s, "linePrefix")
    }
    function s(c) {
        if (c === null || ae(c))
            return r(c);
        const f = l.events[l.events.length - 1];
        return !l.parser.constructs.disable.null.includes("codeIndented") && f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? i(c) : n.interrupt(l.parser.constructs.flow, r, i)(c)
    }
}
function uh(n, i, r, l, o, s, c, f, p) {
    const g = p || Number.POSITIVE_INFINITY;
    let x = 0;
    return y;
    function y(M) {
        return M === 60 ? (n.enter(l),
        n.enter(o),
        n.enter(s),
        n.consume(M),
        n.exit(s),
        k) : M === null || M === 32 || M === 41 || ao(M) ? r(M) : (n.enter(l),
        n.enter(c),
        n.enter(f),
        n.enter("chunkString", {
            contentType: "string"
        }),
        N(M))
    }
    function k(M) {
        return M === 62 ? (n.enter(s),
        n.consume(M),
        n.exit(s),
        n.exit(o),
        n.exit(l),
        i) : (n.enter(f),
        n.enter("chunkString", {
            contentType: "string"
        }),
        v(M))
    }
    function v(M) {
        return M === 62 ? (n.exit("chunkString"),
        n.exit(f),
        k(M)) : M === null || M === 60 || ae(M) ? r(M) : (n.consume(M),
        M === 92 ? I : v)
    }
    function I(M) {
        return M === 60 || M === 62 || M === 92 ? (n.consume(M),
        v) : v(M)
    }
    function N(M) {
        return !x && (M === null || M === 41 || In(M)) ? (n.exit("chunkString"),
        n.exit(f),
        n.exit(c),
        n.exit(l),
        i(M)) : x < g && M === 40 ? (n.consume(M),
        x++,
        N) : M === 41 ? (n.consume(M),
        x--,
        N) : M === null || M === 32 || M === 40 || ao(M) ? r(M) : (n.consume(M),
        M === 92 ? $ : N)
    }
    function $(M) {
        return M === 40 || M === 41 || M === 92 ? (n.consume(M),
        N) : N(M)
    }
}
function ch(n, i, r, l, o, s) {
    const c = this;
    let f = 0, p;
    return g;
    function g(v) {
        return n.enter(l),
        n.enter(o),
        n.consume(v),
        n.exit(o),
        n.enter(s),
        x
    }
    function x(v) {
        return f > 999 || v === null || v === 91 || v === 93 && !p || v === 94 && !f && "_hiddenFootnoteSupport" in c.parser.constructs ? r(v) : v === 93 ? (n.exit(s),
        n.enter(o),
        n.consume(v),
        n.exit(o),
        n.exit(l),
        i) : ae(v) ? (n.enter("lineEnding"),
        n.consume(v),
        n.exit("lineEnding"),
        x) : (n.enter("chunkString", {
            contentType: "string"
        }),
        y(v))
    }
    function y(v) {
        return v === null || v === 91 || v === 93 || ae(v) || f++ > 999 ? (n.exit("chunkString"),
        x(v)) : (n.consume(v),
        p || (p = !_e(v)),
        v === 92 ? k : y)
    }
    function k(v) {
        return v === 91 || v === 92 || v === 93 ? (n.consume(v),
        f++,
        y) : y(v)
    }
}
function fh(n, i, r, l, o, s) {
    let c;
    return f;
    function f(k) {
        return k === 34 || k === 39 || k === 40 ? (n.enter(l),
        n.enter(o),
        n.consume(k),
        n.exit(o),
        c = k === 40 ? 41 : k,
        p) : r(k)
    }
    function p(k) {
        return k === c ? (n.enter(o),
        n.consume(k),
        n.exit(o),
        n.exit(l),
        i) : (n.enter(s),
        g(k))
    }
    function g(k) {
        return k === c ? (n.exit(s),
        p(c)) : k === null ? r(k) : ae(k) ? (n.enter("lineEnding"),
        n.consume(k),
        n.exit("lineEnding"),
        De(n, g, "linePrefix")) : (n.enter("chunkString", {
            contentType: "string"
        }),
        x(k))
    }
    function x(k) {
        return k === c || k === null || ae(k) ? (n.exit("chunkString"),
        g(k)) : (n.consume(k),
        k === 92 ? y : x)
    }
    function y(k) {
        return k === c || k === 92 ? (n.consume(k),
        x) : x(k)
    }
}
function ni(n, i) {
    let r;
    return l;
    function l(o) {
        return ae(o) ? (n.enter("lineEnding"),
        n.consume(o),
        n.exit("lineEnding"),
        r = !0,
        l) : _e(o) ? De(n, l, r ? "linePrefix" : "lineSuffix")(o) : i(o)
    }
}
const hb = {
    name: "definition",
    tokenize: db
}
  , pb = {
    tokenize: gb,
    partial: !0
};
function db(n, i, r) {
    const l = this;
    let o;
    return s;
    function s(v) {
        return n.enter("definition"),
        c(v)
    }
    function c(v) {
        return ch.call(l, n, f, r, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(v)
    }
    function f(v) {
        return o = kr(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1)),
        v === 58 ? (n.enter("definitionMarker"),
        n.consume(v),
        n.exit("definitionMarker"),
        p) : r(v)
    }
    function p(v) {
        return In(v) ? ni(n, g)(v) : g(v)
    }
    function g(v) {
        return uh(n, x, r, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(v)
    }
    function x(v) {
        return n.attempt(pb, y, y)(v)
    }
    function y(v) {
        return _e(v) ? De(n, k, "whitespace")(v) : k(v)
    }
    function k(v) {
        return v === null || ae(v) ? (n.exit("definition"),
        l.parser.defined.push(o),
        i(v)) : r(v)
    }
}
function gb(n, i, r) {
    return l;
    function l(f) {
        return In(f) ? ni(n, o)(f) : r(f)
    }
    function o(f) {
        return fh(n, s, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(f)
    }
    function s(f) {
        return _e(f) ? De(n, c, "whitespace")(f) : c(f)
    }
    function c(f) {
        return f === null || ae(f) ? i(f) : r(f)
    }
}
const mb = {
    name: "hardBreakEscape",
    tokenize: xb
};
function xb(n, i, r) {
    return l;
    function l(s) {
        return n.enter("hardBreakEscape"),
        n.consume(s),
        o
    }
    function o(s) {
        return ae(s) ? (n.exit("hardBreakEscape"),
        i(s)) : r(s)
    }
}
const yb = {
    name: "headingAtx",
    tokenize: bb,
    resolve: vb
};
function vb(n, i) {
    let r = n.length - 2, l = 3, o, s;
    return n[l][1].type === "whitespace" && (l += 2),
    r - 2 > l && n[r][1].type === "whitespace" && (r -= 2),
    n[r][1].type === "atxHeadingSequence" && (l === r - 1 || r - 4 > l && n[r - 2][1].type === "whitespace") && (r -= l + 1 === r ? 2 : 4),
    r > l && (o = {
        type: "atxHeadingText",
        start: n[l][1].start,
        end: n[r][1].end
    },
    s = {
        type: "chunkText",
        start: n[l][1].start,
        end: n[r][1].end,
        contentType: "text"
    },
    dt(n, l, r - l + 1, [["enter", o, i], ["enter", s, i], ["exit", s, i], ["exit", o, i]])),
    n
}
function bb(n, i, r) {
    let l = 0;
    return o;
    function o(x) {
        return n.enter("atxHeading"),
        s(x)
    }
    function s(x) {
        return n.enter("atxHeadingSequence"),
        c(x)
    }
    function c(x) {
        return x === 35 && l++ < 6 ? (n.consume(x),
        c) : x === null || In(x) ? (n.exit("atxHeadingSequence"),
        f(x)) : r(x)
    }
    function f(x) {
        return x === 35 ? (n.enter("atxHeadingSequence"),
        p(x)) : x === null || ae(x) ? (n.exit("atxHeading"),
        i(x)) : _e(x) ? De(n, f, "whitespace")(x) : (n.enter("atxHeadingText"),
        g(x))
    }
    function p(x) {
        return x === 35 ? (n.consume(x),
        p) : (n.exit("atxHeadingSequence"),
        f(x))
    }
    function g(x) {
        return x === null || x === 35 || In(x) ? (n.exit("atxHeadingText"),
        f(x)) : (n.consume(x),
        g)
    }
}
const wb = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
  , zc = ["pre", "script", "style", "textarea"]
  , _b = {
    name: "htmlFlow",
    tokenize: Eb,
    resolveTo: Cb,
    concrete: !0
}
  , Sb = {
    tokenize: Tb,
    partial: !0
}
  , kb = {
    tokenize: Ab,
    partial: !0
};
function Cb(n) {
    let i = n.length;
    for (; i-- && !(n[i][0] === "enter" && n[i][1].type === "htmlFlow"); )
        ;
    return i > 1 && n[i - 2][1].type === "linePrefix" && (n[i][1].start = n[i - 2][1].start,
    n[i + 1][1].start = n[i - 2][1].start,
    n.splice(i - 2, 2)),
    n
}
function Eb(n, i, r) {
    const l = this;
    let o, s, c, f, p;
    return g;
    function g(_) {
        return x(_)
    }
    function x(_) {
        return n.enter("htmlFlow"),
        n.enter("htmlFlowData"),
        n.consume(_),
        y
    }
    function y(_) {
        return _ === 33 ? (n.consume(_),
        k) : _ === 47 ? (n.consume(_),
        s = !0,
        N) : _ === 63 ? (n.consume(_),
        o = 3,
        l.interrupt ? i : S) : pt(_) ? (n.consume(_),
        c = String.fromCharCode(_),
        $) : r(_)
    }
    function k(_) {
        return _ === 45 ? (n.consume(_),
        o = 2,
        v) : _ === 91 ? (n.consume(_),
        o = 5,
        f = 0,
        I) : pt(_) ? (n.consume(_),
        o = 4,
        l.interrupt ? i : S) : r(_)
    }
    function v(_) {
        return _ === 45 ? (n.consume(_),
        l.interrupt ? i : S) : r(_)
    }
    function I(_) {
        const Ue = "CDATA[";
        return _ === Ue.charCodeAt(f++) ? (n.consume(_),
        f === Ue.length ? l.interrupt ? i : U : I) : r(_)
    }
    function N(_) {
        return pt(_) ? (n.consume(_),
        c = String.fromCharCode(_),
        $) : r(_)
    }
    function $(_) {
        if (_ === null || _ === 47 || _ === 62 || In(_)) {
            const Ue = _ === 47
              , tn = c.toLowerCase();
            return !Ue && !s && zc.includes(tn) ? (o = 1,
            l.interrupt ? i(_) : U(_)) : wb.includes(c.toLowerCase()) ? (o = 6,
            Ue ? (n.consume(_),
            M) : l.interrupt ? i(_) : U(_)) : (o = 7,
            l.interrupt && !l.parser.lazy[l.now().line] ? r(_) : s ? W(_) : z(_))
        }
        return _ === 45 || jn(_) ? (n.consume(_),
        c += String.fromCharCode(_),
        $) : r(_)
    }
    function M(_) {
        return _ === 62 ? (n.consume(_),
        l.interrupt ? i : U) : r(_)
    }
    function W(_) {
        return _e(_) ? (n.consume(_),
        W) : me(_)
    }
    function z(_) {
        return _ === 47 ? (n.consume(_),
        me) : _ === 58 || _ === 95 || pt(_) ? (n.consume(_),
        J) : _e(_) ? (n.consume(_),
        z) : me(_)
    }
    function J(_) {
        return _ === 45 || _ === 46 || _ === 58 || _ === 95 || jn(_) ? (n.consume(_),
        J) : Y(_)
    }
    function Y(_) {
        return _ === 61 ? (n.consume(_),
        P) : _e(_) ? (n.consume(_),
        Y) : z(_)
    }
    function P(_) {
        return _ === null || _ === 60 || _ === 61 || _ === 62 || _ === 96 ? r(_) : _ === 34 || _ === 39 ? (n.consume(_),
        p = _,
        V) : _e(_) ? (n.consume(_),
        P) : pe(_)
    }
    function V(_) {
        return _ === p ? (n.consume(_),
        p = null,
        ie) : _ === null || ae(_) ? r(_) : (n.consume(_),
        V)
    }
    function pe(_) {
        return _ === null || _ === 34 || _ === 39 || _ === 47 || _ === 60 || _ === 61 || _ === 62 || _ === 96 || In(_) ? Y(_) : (n.consume(_),
        pe)
    }
    function ie(_) {
        return _ === 47 || _ === 62 || _e(_) ? z(_) : r(_)
    }
    function me(_) {
        return _ === 62 ? (n.consume(_),
        X) : r(_)
    }
    function X(_) {
        return _ === null || ae(_) ? U(_) : _e(_) ? (n.consume(_),
        X) : r(_)
    }
    function U(_) {
        return _ === 45 && o === 2 ? (n.consume(_),
        Be) : _ === 60 && o === 1 ? (n.consume(_),
        Ee) : _ === 62 && o === 4 ? (n.consume(_),
        Re) : _ === 63 && o === 3 ? (n.consume(_),
        S) : _ === 93 && o === 5 ? (n.consume(_),
        Te) : ae(_) && (o === 6 || o === 7) ? (n.exit("htmlFlowData"),
        n.check(Sb, Ie, ye)(_)) : _ === null || ae(_) ? (n.exit("htmlFlowData"),
        ye(_)) : (n.consume(_),
        U)
    }
    function ye(_) {
        return n.check(kb, Se, Ie)(_)
    }
    function Se(_) {
        return n.enter("lineEnding"),
        n.consume(_),
        n.exit("lineEnding"),
        se
    }
    function se(_) {
        return _ === null || ae(_) ? ye(_) : (n.enter("htmlFlowData"),
        U(_))
    }
    function Be(_) {
        return _ === 45 ? (n.consume(_),
        S) : U(_)
    }
    function Ee(_) {
        return _ === 47 ? (n.consume(_),
        c = "",
        $e) : U(_)
    }
    function $e(_) {
        if (_ === 62) {
            const Ue = c.toLowerCase();
            return zc.includes(Ue) ? (n.consume(_),
            Re) : U(_)
        }
        return pt(_) && c.length < 8 ? (n.consume(_),
        c += String.fromCharCode(_),
        $e) : U(_)
    }
    function Te(_) {
        return _ === 93 ? (n.consume(_),
        S) : U(_)
    }
    function S(_) {
        return _ === 62 ? (n.consume(_),
        Re) : _ === 45 && o === 2 ? (n.consume(_),
        S) : U(_)
    }
    function Re(_) {
        return _ === null || ae(_) ? (n.exit("htmlFlowData"),
        Ie(_)) : (n.consume(_),
        Re)
    }
    function Ie(_) {
        return n.exit("htmlFlow"),
        i(_)
    }
}
function Ab(n, i, r) {
    const l = this;
    return o;
    function o(c) {
        return ae(c) ? (n.enter("lineEnding"),
        n.consume(c),
        n.exit("lineEnding"),
        s) : r(c)
    }
    function s(c) {
        return l.parser.lazy[l.now().line] ? r(c) : i(c)
    }
}
function Tb(n, i, r) {
    return l;
    function l(o) {
        return n.enter("lineEnding"),
        n.consume(o),
        n.exit("lineEnding"),
        n.attempt(ha, i, r)
    }
}
const Ib = {
    name: "htmlText",
    tokenize: Ob
};
function Ob(n, i, r) {
    const l = this;
    let o, s, c;
    return f;
    function f(S) {
        return n.enter("htmlText"),
        n.enter("htmlTextData"),
        n.consume(S),
        p
    }
    function p(S) {
        return S === 33 ? (n.consume(S),
        g) : S === 47 ? (n.consume(S),
        Y) : S === 63 ? (n.consume(S),
        z) : pt(S) ? (n.consume(S),
        pe) : r(S)
    }
    function g(S) {
        return S === 45 ? (n.consume(S),
        x) : S === 91 ? (n.consume(S),
        s = 0,
        I) : pt(S) ? (n.consume(S),
        W) : r(S)
    }
    function x(S) {
        return S === 45 ? (n.consume(S),
        v) : r(S)
    }
    function y(S) {
        return S === null ? r(S) : S === 45 ? (n.consume(S),
        k) : ae(S) ? (c = y,
        Ee(S)) : (n.consume(S),
        y)
    }
    function k(S) {
        return S === 45 ? (n.consume(S),
        v) : y(S)
    }
    function v(S) {
        return S === 62 ? Be(S) : S === 45 ? k(S) : y(S)
    }
    function I(S) {
        const Re = "CDATA[";
        return S === Re.charCodeAt(s++) ? (n.consume(S),
        s === Re.length ? N : I) : r(S)
    }
    function N(S) {
        return S === null ? r(S) : S === 93 ? (n.consume(S),
        $) : ae(S) ? (c = N,
        Ee(S)) : (n.consume(S),
        N)
    }
    function $(S) {
        return S === 93 ? (n.consume(S),
        M) : N(S)
    }
    function M(S) {
        return S === 62 ? Be(S) : S === 93 ? (n.consume(S),
        M) : N(S)
    }
    function W(S) {
        return S === null || S === 62 ? Be(S) : ae(S) ? (c = W,
        Ee(S)) : (n.consume(S),
        W)
    }
    function z(S) {
        return S === null ? r(S) : S === 63 ? (n.consume(S),
        J) : ae(S) ? (c = z,
        Ee(S)) : (n.consume(S),
        z)
    }
    function J(S) {
        return S === 62 ? Be(S) : z(S)
    }
    function Y(S) {
        return pt(S) ? (n.consume(S),
        P) : r(S)
    }
    function P(S) {
        return S === 45 || jn(S) ? (n.consume(S),
        P) : V(S)
    }
    function V(S) {
        return ae(S) ? (c = V,
        Ee(S)) : _e(S) ? (n.consume(S),
        V) : Be(S)
    }
    function pe(S) {
        return S === 45 || jn(S) ? (n.consume(S),
        pe) : S === 47 || S === 62 || In(S) ? ie(S) : r(S)
    }
    function ie(S) {
        return S === 47 ? (n.consume(S),
        Be) : S === 58 || S === 95 || pt(S) ? (n.consume(S),
        me) : ae(S) ? (c = ie,
        Ee(S)) : _e(S) ? (n.consume(S),
        ie) : Be(S)
    }
    function me(S) {
        return S === 45 || S === 46 || S === 58 || S === 95 || jn(S) ? (n.consume(S),
        me) : X(S)
    }
    function X(S) {
        return S === 61 ? (n.consume(S),
        U) : ae(S) ? (c = X,
        Ee(S)) : _e(S) ? (n.consume(S),
        X) : ie(S)
    }
    function U(S) {
        return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? r(S) : S === 34 || S === 39 ? (n.consume(S),
        o = S,
        ye) : ae(S) ? (c = U,
        Ee(S)) : _e(S) ? (n.consume(S),
        U) : (n.consume(S),
        Se)
    }
    function ye(S) {
        return S === o ? (n.consume(S),
        o = void 0,
        se) : S === null ? r(S) : ae(S) ? (c = ye,
        Ee(S)) : (n.consume(S),
        ye)
    }
    function Se(S) {
        return S === null || S === 34 || S === 39 || S === 60 || S === 61 || S === 96 ? r(S) : S === 47 || S === 62 || In(S) ? ie(S) : (n.consume(S),
        Se)
    }
    function se(S) {
        return S === 47 || S === 62 || In(S) ? ie(S) : r(S)
    }
    function Be(S) {
        return S === 62 ? (n.consume(S),
        n.exit("htmlTextData"),
        n.exit("htmlText"),
        i) : r(S)
    }
    function Ee(S) {
        return n.exit("htmlTextData"),
        n.enter("lineEnding"),
        n.consume(S),
        n.exit("lineEnding"),
        $e
    }
    function $e(S) {
        return _e(S) ? De(n, Te, "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : Te(S)
    }
    function Te(S) {
        return n.enter("htmlTextData"),
        c(S)
    }
}
const Do = {
    name: "labelEnd",
    tokenize: Mb,
    resolveTo: Nb,
    resolveAll: Rb
}
  , Lb = {
    tokenize: jb
}
  , Pb = {
    tokenize: Fb
}
  , Db = {
    tokenize: zb
};
function Rb(n) {
    let i = -1;
    for (; ++i < n.length; ) {
        const r = n[i][1];
        (r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") && (n.splice(i + 1, r.type === "labelImage" ? 4 : 2),
        r.type = "data",
        i++)
    }
    return n
}
function Nb(n, i) {
    let r = n.length, l = 0, o, s, c, f;
    for (; r--; )
        if (o = n[r][1],
        s) {
            if (o.type === "link" || o.type === "labelLink" && o._inactive)
                break;
            n[r][0] === "enter" && o.type === "labelLink" && (o._inactive = !0)
        } else if (c) {
            if (n[r][0] === "enter" && (o.type === "labelImage" || o.type === "labelLink") && !o._balanced && (s = r,
            o.type !== "labelLink")) {
                l = 2;
                break
            }
        } else
            o.type === "labelEnd" && (c = r);
    const p = {
        type: n[s][1].type === "labelLink" ? "link" : "image",
        start: Object.assign({}, n[s][1].start),
        end: Object.assign({}, n[n.length - 1][1].end)
    }
      , g = {
        type: "label",
        start: Object.assign({}, n[s][1].start),
        end: Object.assign({}, n[c][1].end)
    }
      , x = {
        type: "labelText",
        start: Object.assign({}, n[s + l + 2][1].end),
        end: Object.assign({}, n[c - 2][1].start)
    };
    return f = [["enter", p, i], ["enter", g, i]],
    f = Xn(f, n.slice(s + 1, s + l + 3)),
    f = Xn(f, [["enter", x, i]]),
    f = Xn(f, Po(i.parser.constructs.insideSpan.null, n.slice(s + l + 4, c - 3), i)),
    f = Xn(f, [["exit", x, i], n[c - 2], n[c - 1], ["exit", g, i]]),
    f = Xn(f, n.slice(c + 1)),
    f = Xn(f, [["exit", p, i]]),
    dt(n, s, n.length, f),
    n
}
function Mb(n, i, r) {
    const l = this;
    let o = l.events.length, s, c;
    for (; o--; )
        if ((l.events[o][1].type === "labelImage" || l.events[o][1].type === "labelLink") && !l.events[o][1]._balanced) {
            s = l.events[o][1];
            break
        }
    return f;
    function f(k) {
        return s ? s._inactive ? y(k) : (c = l.parser.defined.includes(kr(l.sliceSerialize({
            start: s.end,
            end: l.now()
        }))),
        n.enter("labelEnd"),
        n.enter("labelMarker"),
        n.consume(k),
        n.exit("labelMarker"),
        n.exit("labelEnd"),
        p) : r(k)
    }
    function p(k) {
        return k === 40 ? n.attempt(Lb, x, c ? x : y)(k) : k === 91 ? n.attempt(Pb, x, c ? g : y)(k) : c ? x(k) : y(k)
    }
    function g(k) {
        return n.attempt(Db, x, y)(k)
    }
    function x(k) {
        return i(k)
    }
    function y(k) {
        return s._balanced = !0,
        r(k)
    }
}
function jb(n, i, r) {
    return l;
    function l(y) {
        return n.enter("resource"),
        n.enter("resourceMarker"),
        n.consume(y),
        n.exit("resourceMarker"),
        o
    }
    function o(y) {
        return In(y) ? ni(n, s)(y) : s(y)
    }
    function s(y) {
        return y === 41 ? x(y) : uh(n, c, f, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(y)
    }
    function c(y) {
        return In(y) ? ni(n, p)(y) : x(y)
    }
    function f(y) {
        return r(y)
    }
    function p(y) {
        return y === 34 || y === 39 || y === 40 ? fh(n, g, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(y) : x(y)
    }
    function g(y) {
        return In(y) ? ni(n, x)(y) : x(y)
    }
    function x(y) {
        return y === 41 ? (n.enter("resourceMarker"),
        n.consume(y),
        n.exit("resourceMarker"),
        n.exit("resource"),
        i) : r(y)
    }
}
function Fb(n, i, r) {
    const l = this;
    return o;
    function o(f) {
        return ch.call(l, n, s, c, "reference", "referenceMarker", "referenceString")(f)
    }
    function s(f) {
        return l.parser.defined.includes(kr(l.sliceSerialize(l.events[l.events.length - 1][1]).slice(1, -1))) ? i(f) : r(f)
    }
    function c(f) {
        return r(f)
    }
}
function zb(n, i, r) {
    return l;
    function l(s) {
        return n.enter("reference"),
        n.enter("referenceMarker"),
        n.consume(s),
        n.exit("referenceMarker"),
        o
    }
    function o(s) {
        return s === 93 ? (n.enter("referenceMarker"),
        n.consume(s),
        n.exit("referenceMarker"),
        n.exit("reference"),
        i) : r(s)
    }
}
const Bb = {
    name: "labelStartImage",
    tokenize: $b,
    resolveAll: Do.resolveAll
};
function $b(n, i, r) {
    const l = this;
    return o;
    function o(f) {
        return n.enter("labelImage"),
        n.enter("labelImageMarker"),
        n.consume(f),
        n.exit("labelImageMarker"),
        s
    }
    function s(f) {
        return f === 91 ? (n.enter("labelMarker"),
        n.consume(f),
        n.exit("labelMarker"),
        n.exit("labelImage"),
        c) : r(f)
    }
    function c(f) {
        return f === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? r(f) : i(f)
    }
}
const Ub = {
    name: "labelStartLink",
    tokenize: Hb,
    resolveAll: Do.resolveAll
};
function Hb(n, i, r) {
    const l = this;
    return o;
    function o(c) {
        return n.enter("labelLink"),
        n.enter("labelMarker"),
        n.consume(c),
        n.exit("labelMarker"),
        n.exit("labelLink"),
        s
    }
    function s(c) {
        return c === 94 && "_hiddenFootnoteSupport" in l.parser.constructs ? r(c) : i(c)
    }
}
const ql = {
    name: "lineEnding",
    tokenize: Wb
};
function Wb(n, i) {
    return r;
    function r(l) {
        return n.enter("lineEnding"),
        n.consume(l),
        n.exit("lineEnding"),
        De(n, i, "linePrefix")
    }
}
const ia = {
    name: "thematicBreak",
    tokenize: qb
};
function qb(n, i, r) {
    let l = 0, o;
    return s;
    function s(g) {
        return n.enter("thematicBreak"),
        c(g)
    }
    function c(g) {
        return o = g,
        f(g)
    }
    function f(g) {
        return g === o ? (n.enter("thematicBreakSequence"),
        p(g)) : l >= 3 && (g === null || ae(g)) ? (n.exit("thematicBreak"),
        i(g)) : r(g)
    }
    function p(g) {
        return g === o ? (n.consume(g),
        l++,
        p) : (n.exit("thematicBreakSequence"),
        _e(g) ? De(n, f, "whitespace")(g) : f(g))
    }
}
const An = {
    name: "list",
    tokenize: Kb,
    continuation: {
        tokenize: Yb
    },
    exit: Zb
}
  , Gb = {
    tokenize: Qb,
    partial: !0
}
  , Vb = {
    tokenize: Xb,
    partial: !0
};
function Kb(n, i, r) {
    const l = this
      , o = l.events[l.events.length - 1];
    let s = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0
      , c = 0;
    return f;
    function f(v) {
        const I = l.containerState.type || (v === 42 || v === 43 || v === 45 ? "listUnordered" : "listOrdered");
        if (I === "listUnordered" ? !l.containerState.marker || v === l.containerState.marker : lo(v)) {
            if (l.containerState.type || (l.containerState.type = I,
            n.enter(I, {
                _container: !0
            })),
            I === "listUnordered")
                return n.enter("listItemPrefix"),
                v === 42 || v === 45 ? n.check(ia, r, g)(v) : g(v);
            if (!l.interrupt || v === 49)
                return n.enter("listItemPrefix"),
                n.enter("listItemValue"),
                p(v)
        }
        return r(v)
    }
    function p(v) {
        return lo(v) && ++c < 10 ? (n.consume(v),
        p) : (!l.interrupt || c < 2) && (l.containerState.marker ? v === l.containerState.marker : v === 41 || v === 46) ? (n.exit("listItemValue"),
        g(v)) : r(v)
    }
    function g(v) {
        return n.enter("listItemMarker"),
        n.consume(v),
        n.exit("listItemMarker"),
        l.containerState.marker = l.containerState.marker || v,
        n.check(ha, l.interrupt ? r : x, n.attempt(Gb, k, y))
    }
    function x(v) {
        return l.containerState.initialBlankLine = !0,
        s++,
        k(v)
    }
    function y(v) {
        return _e(v) ? (n.enter("listItemPrefixWhitespace"),
        n.consume(v),
        n.exit("listItemPrefixWhitespace"),
        k) : r(v)
    }
    function k(v) {
        return l.containerState.size = s + l.sliceSerialize(n.exit("listItemPrefix"), !0).length,
        i(v)
    }
}
function Yb(n, i, r) {
    const l = this;
    return l.containerState._closeFlow = void 0,
    n.check(ha, o, s);
    function o(f) {
        return l.containerState.furtherBlankLines = l.containerState.furtherBlankLines || l.containerState.initialBlankLine,
        De(n, i, "listItemIndent", l.containerState.size + 1)(f)
    }
    function s(f) {
        return l.containerState.furtherBlankLines || !_e(f) ? (l.containerState.furtherBlankLines = void 0,
        l.containerState.initialBlankLine = void 0,
        c(f)) : (l.containerState.furtherBlankLines = void 0,
        l.containerState.initialBlankLine = void 0,
        n.attempt(Vb, i, c)(f))
    }
    function c(f) {
        return l.containerState._closeFlow = !0,
        l.interrupt = void 0,
        De(n, n.attempt(An, i, r), "linePrefix", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f)
    }
}
function Xb(n, i, r) {
    const l = this;
    return De(n, o, "listItemIndent", l.containerState.size + 1);
    function o(s) {
        const c = l.events[l.events.length - 1];
        return c && c[1].type === "listItemIndent" && c[2].sliceSerialize(c[1], !0).length === l.containerState.size ? i(s) : r(s)
    }
}
function Zb(n) {
    n.exit(this.containerState.type)
}
function Qb(n, i, r) {
    const l = this;
    return De(n, o, "listItemPrefixWhitespace", l.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);
    function o(s) {
        const c = l.events[l.events.length - 1];
        return !_e(s) && c && c[1].type === "listItemPrefixWhitespace" ? i(s) : r(s)
    }
}
const Bc = {
    name: "setextUnderline",
    tokenize: ew,
    resolveTo: Jb
};
function Jb(n, i) {
    let r = n.length, l, o, s;
    for (; r--; )
        if (n[r][0] === "enter") {
            if (n[r][1].type === "content") {
                l = r;
                break
            }
            n[r][1].type === "paragraph" && (o = r)
        } else
            n[r][1].type === "content" && n.splice(r, 1),
            !s && n[r][1].type === "definition" && (s = r);
    const c = {
        type: "setextHeading",
        start: Object.assign({}, n[o][1].start),
        end: Object.assign({}, n[n.length - 1][1].end)
    };
    return n[o][1].type = "setextHeadingText",
    s ? (n.splice(o, 0, ["enter", c, i]),
    n.splice(s + 1, 0, ["exit", n[l][1], i]),
    n[l][1].end = Object.assign({}, n[s][1].end)) : n[l][1] = c,
    n.push(["exit", c, i]),
    n
}
function ew(n, i, r) {
    const l = this;
    let o;
    return s;
    function s(g) {
        let x = l.events.length, y;
        for (; x--; )
            if (l.events[x][1].type !== "lineEnding" && l.events[x][1].type !== "linePrefix" && l.events[x][1].type !== "content") {
                y = l.events[x][1].type === "paragraph";
                break
            }
        return !l.parser.lazy[l.now().line] && (l.interrupt || y) ? (n.enter("setextHeadingLine"),
        o = g,
        c(g)) : r(g)
    }
    function c(g) {
        return n.enter("setextHeadingLineSequence"),
        f(g)
    }
    function f(g) {
        return g === o ? (n.consume(g),
        f) : (n.exit("setextHeadingLineSequence"),
        _e(g) ? De(n, p, "lineSuffix")(g) : p(g))
    }
    function p(g) {
        return g === null || ae(g) ? (n.exit("setextHeadingLine"),
        i(g)) : r(g)
    }
}
const nw = {
    tokenize: tw
};
function tw(n) {
    const i = this
      , r = n.attempt(ha, l, n.attempt(this.parser.constructs.flowInitial, o, De(n, n.attempt(this.parser.constructs.flow, o, n.attempt(ob, o)), "linePrefix")));
    return r;
    function l(s) {
        if (s === null) {
            n.consume(s);
            return
        }
        return n.enter("lineEndingBlank"),
        n.consume(s),
        n.exit("lineEndingBlank"),
        i.currentConstruct = void 0,
        r
    }
    function o(s) {
        if (s === null) {
            n.consume(s);
            return
        }
        return n.enter("lineEnding"),
        n.consume(s),
        n.exit("lineEnding"),
        i.currentConstruct = void 0,
        r
    }
}
const rw = {
    resolveAll: ph()
}
  , iw = hh("string")
  , aw = hh("text");
function hh(n) {
    return {
        tokenize: i,
        resolveAll: ph(n === "text" ? lw : void 0)
    };
    function i(r) {
        const l = this
          , o = this.parser.constructs[n]
          , s = r.attempt(o, c, f);
        return c;
        function c(x) {
            return g(x) ? s(x) : f(x)
        }
        function f(x) {
            if (x === null) {
                r.consume(x);
                return
            }
            return r.enter("data"),
            r.consume(x),
            p
        }
        function p(x) {
            return g(x) ? (r.exit("data"),
            s(x)) : (r.consume(x),
            p)
        }
        function g(x) {
            if (x === null)
                return !0;
            const y = o[x];
            let k = -1;
            if (y)
                for (; ++k < y.length; ) {
                    const v = y[k];
                    if (!v.previous || v.previous.call(l, l.previous))
                        return !0
                }
            return !1
        }
    }
}
function ph(n) {
    return i;
    function i(r, l) {
        let o = -1, s;
        for (; ++o <= r.length; )
            s === void 0 ? r[o] && r[o][1].type === "data" && (s = o,
            o++) : (!r[o] || r[o][1].type !== "data") && (o !== s + 2 && (r[s][1].end = r[o - 1][1].end,
            r.splice(s + 2, o - s - 2),
            o = s + 2),
            s = void 0);
        return n ? n(r, l) : r
    }
}
function lw(n, i) {
    let r = 0;
    for (; ++r <= n.length; )
        if ((r === n.length || n[r][1].type === "lineEnding") && n[r - 1][1].type === "data") {
            const l = n[r - 1][1]
              , o = i.sliceStream(l);
            let s = o.length, c = -1, f = 0, p;
            for (; s--; ) {
                const g = o[s];
                if (typeof g == "string") {
                    for (c = g.length; g.charCodeAt(c - 1) === 32; )
                        f++,
                        c--;
                    if (c)
                        break;
                    c = -1
                } else if (g === -2)
                    p = !0,
                    f++;
                else if (g !== -1) {
                    s++;
                    break
                }
            }
            if (f) {
                const g = {
                    type: r === n.length || p || f < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: l.end.line,
                        column: l.end.column - f,
                        offset: l.end.offset - f,
                        _index: l.start._index + s,
                        _bufferIndex: s ? c : l.start._bufferIndex + c
                    },
                    end: Object.assign({}, l.end)
                };
                l.end = Object.assign({}, g.start),
                l.start.offset === l.end.offset ? Object.assign(l, g) : (n.splice(r, 0, ["enter", g, i], ["exit", g, i]),
                r += 2)
            }
            r++
        }
    return n
}
function ow(n, i, r) {
    let l = Object.assign(r ? Object.assign({}, r) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    const o = {}
      , s = [];
    let c = []
      , f = [];
    const p = {
        consume: W,
        enter: z,
        exit: J,
        attempt: V(Y),
        check: V(P),
        interrupt: V(P, {
            interrupt: !0
        })
    }
      , g = {
        previous: null,
        code: null,
        containerState: {},
        events: [],
        parser: n,
        sliceStream: v,
        sliceSerialize: k,
        now: I,
        defineSkip: N,
        write: y
    };
    let x = i.tokenize.call(g, p);
    return i.resolveAll && s.push(i),
    g;
    function y(X) {
        return c = Xn(c, X),
        $(),
        c[c.length - 1] !== null ? [] : (pe(i, 0),
        g.events = Po(s, g.events, g),
        g.events)
    }
    function k(X, U) {
        return uw(v(X), U)
    }
    function v(X) {
        return sw(c, X)
    }
    function I() {
        const {line: X, column: U, offset: ye, _index: Se, _bufferIndex: se} = l;
        return {
            line: X,
            column: U,
            offset: ye,
            _index: Se,
            _bufferIndex: se
        }
    }
    function N(X) {
        o[X.line] = X.column,
        me()
    }
    function $() {
        let X;
        for (; l._index < c.length; ) {
            const U = c[l._index];
            if (typeof U == "string")
                for (X = l._index,
                l._bufferIndex < 0 && (l._bufferIndex = 0); l._index === X && l._bufferIndex < U.length; )
                    M(U.charCodeAt(l._bufferIndex));
            else
                M(U)
        }
    }
    function M(X) {
        x = x(X)
    }
    function W(X) {
        ae(X) ? (l.line++,
        l.column = 1,
        l.offset += X === -3 ? 2 : 1,
        me()) : X !== -1 && (l.column++,
        l.offset++),
        l._bufferIndex < 0 ? l._index++ : (l._bufferIndex++,
        l._bufferIndex === c[l._index].length && (l._bufferIndex = -1,
        l._index++)),
        g.previous = X
    }
    function z(X, U) {
        const ye = U || {};
        return ye.type = X,
        ye.start = I(),
        g.events.push(["enter", ye, g]),
        f.push(ye),
        ye
    }
    function J(X) {
        const U = f.pop();
        return U.end = I(),
        g.events.push(["exit", U, g]),
        U
    }
    function Y(X, U) {
        pe(X, U.from)
    }
    function P(X, U) {
        U.restore()
    }
    function V(X, U) {
        return ye;
        function ye(Se, se, Be) {
            let Ee, $e, Te, S;
            return Array.isArray(Se) ? Ie(Se) : "tokenize" in Se ? Ie([Se]) : Re(Se);
            function Re(je) {
                return Qn;
                function Qn(ln) {
                    const _n = ln !== null && je[ln]
                      , Ne = ln !== null && je.null
                      , Ve = [...Array.isArray(_n) ? _n : _n ? [_n] : [], ...Array.isArray(Ne) ? Ne : Ne ? [Ne] : []];
                    return Ie(Ve)(ln)
                }
            }
            function Ie(je) {
                return Ee = je,
                $e = 0,
                je.length === 0 ? Be : _(je[$e])
            }
            function _(je) {
                return Qn;
                function Qn(ln) {
                    return S = ie(),
                    Te = je,
                    je.partial || (g.currentConstruct = je),
                    je.name && g.parser.constructs.disable.null.includes(je.name) ? tn() : je.tokenize.call(U ? Object.assign(Object.create(g), U) : g, p, Ue, tn)(ln)
                }
            }
            function Ue(je) {
                return X(Te, S),
                se
            }
            function tn(je) {
                return S.restore(),
                ++$e < Ee.length ? _(Ee[$e]) : Be
            }
        }
    }
    function pe(X, U) {
        X.resolveAll && !s.includes(X) && s.push(X),
        X.resolve && dt(g.events, U, g.events.length - U, X.resolve(g.events.slice(U), g)),
        X.resolveTo && (g.events = X.resolveTo(g.events, g))
    }
    function ie() {
        const X = I()
          , U = g.previous
          , ye = g.currentConstruct
          , Se = g.events.length
          , se = Array.from(f);
        return {
            restore: Be,
            from: Se
        };
        function Be() {
            l = X,
            g.previous = U,
            g.currentConstruct = ye,
            g.events.length = Se,
            f = se,
            me()
        }
    }
    function me() {
        l.line in o && l.column < 2 && (l.column = o[l.line],
        l.offset += o[l.line] - 1)
    }
}
function sw(n, i) {
    const r = i.start._index
      , l = i.start._bufferIndex
      , o = i.end._index
      , s = i.end._bufferIndex;
    let c;
    if (r === o)
        c = [n[r].slice(l, s)];
    else {
        if (c = n.slice(r, o),
        l > -1) {
            const f = c[0];
            typeof f == "string" ? c[0] = f.slice(l) : c.shift()
        }
        s > 0 && c.push(n[o].slice(0, s))
    }
    return c
}
function uw(n, i) {
    let r = -1;
    const l = [];
    let o;
    for (; ++r < n.length; ) {
        const s = n[r];
        let c;
        if (typeof s == "string")
            c = s;
        else
            switch (s) {
            case -5:
                {
                    c = "\r";
                    break
                }
            case -4:
                {
                    c = `
`;
                    break
                }
            case -3:
                {
                    c = `\r
`;
                    break
                }
            case -2:
                {
                    c = i ? " " : "	";
                    break
                }
            case -1:
                {
                    if (!i && o)
                        continue;
                    c = " ";
                    break
                }
            default:
                c = String.fromCharCode(s)
            }
        o = s === -2,
        l.push(c)
    }
    return l.join("")
}
const cw = {
    42: An,
    43: An,
    45: An,
    48: An,
    49: An,
    50: An,
    51: An,
    52: An,
    53: An,
    54: An,
    55: An,
    56: An,
    57: An,
    62: ah
}
  , fw = {
    91: hb
}
  , hw = {
    [-2]: Wl,
    [-1]: Wl,
    32: Wl
}
  , pw = {
    35: yb,
    42: ia,
    45: [Bc, ia],
    60: _b,
    61: Bc,
    95: ia,
    96: Fc,
    126: Fc
}
  , dw = {
    38: oh,
    92: lh
}
  , gw = {
    [-5]: ql,
    [-4]: ql,
    [-3]: ql,
    33: Bb,
    38: oh,
    42: oo,
    60: [Hv, Ib],
    91: Ub,
    92: [mb, lh],
    93: Do,
    95: oo,
    96: tb
}
  , mw = {
    null: [oo, rw]
}
  , xw = {
    null: [42, 95]
}
  , yw = {
    null: []
}
  , vw = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: xw,
    contentInitial: fw,
    disable: yw,
    document: cw,
    flow: pw,
    flowInitial: hw,
    insideSpan: mw,
    string: dw,
    text: gw
}, Symbol.toStringTag, {
    value: "Module"
}));
function bw(n) {
    const r = Tv([vw, ...(n || {}).extensions || []])
      , l = {
        defined: [],
        lazy: {},
        constructs: r,
        content: o(Mv),
        document: o(Fv),
        flow: o(nw),
        string: o(iw),
        text: o(aw)
    };
    return l;
    function o(s) {
        return c;
        function c(f) {
            return ow(l, s, f)
        }
    }
}
function ww(n) {
    for (; !sh(n); )
        ;
    return n
}
const $c = /[\0\t\n\r]/g;
function _w() {
    let n = 1, i = "", r = !0, l;
    return o;
    function o(s, c, f) {
        const p = [];
        let g, x, y, k, v;
        for (s = i + (typeof s == "string" ? s.toString() : new TextDecoder(c || void 0).decode(s)),
        y = 0,
        i = "",
        r && (s.charCodeAt(0) === 65279 && y++,
        r = void 0); y < s.length; ) {
            if ($c.lastIndex = y,
            g = $c.exec(s),
            k = g && g.index !== void 0 ? g.index : s.length,
            v = s.charCodeAt(k),
            !g) {
                i = s.slice(y);
                break
            }
            if (v === 10 && y === k && l)
                p.push(-3),
                l = void 0;
            else
                switch (l && (p.push(-5),
                l = void 0),
                y < k && (p.push(s.slice(y, k)),
                n += k - y),
                v) {
                case 0:
                    {
                        p.push(65533),
                        n++;
                        break
                    }
                case 9:
                    {
                        for (x = Math.ceil(n / 4) * 4,
                        p.push(-2); n++ < x; )
                            p.push(-1);
                        break
                    }
                case 10:
                    {
                        p.push(-4),
                        n = 1;
                        break
                    }
                default:
                    l = !0,
                    n = 1
                }
            y = k + 1
        }
        return f && (l && p.push(-5),
        i && p.push(i),
        p.push(null)),
        p
    }
}
const Sw = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function kw(n) {
    return n.replace(Sw, Cw)
}
function Cw(n, i, r) {
    if (i)
        return i;
    if (r.charCodeAt(0) === 35) {
        const o = r.charCodeAt(1)
          , s = o === 120 || o === 88;
        return ih(r.slice(s ? 2 : 1), s ? 16 : 10)
    }
    return Lo(r) || n
}
const dh = {}.hasOwnProperty;
function Ew(n, i, r) {
    return typeof i != "string" && (r = i,
    i = void 0),
    Aw(r)(ww(bw(r).document().write(_w()(n, i, !0))))
}
function Aw(n) {
    const i = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
            autolink: s(Jn),
            autolinkProtocol: ie,
            autolinkEmail: ie,
            atxHeading: s(Ke),
            blockQuote: s(_n),
            characterEscape: ie,
            characterReference: ie,
            codeFenced: s(Ne),
            codeFencedFenceInfo: c,
            codeFencedFenceMeta: c,
            codeIndented: s(Ne, c),
            codeText: s(Ve, c),
            codeTextData: ie,
            data: ie,
            codeFlowValue: ie,
            definition: s(He),
            definitionDestinationString: c,
            definitionLabelString: c,
            definitionTitleString: c,
            emphasis: s(rr),
            hardBreakEscape: s(Bn),
            hardBreakTrailing: s(Bn),
            htmlFlow: s(fn, c),
            htmlFlowData: ie,
            htmlText: s(fn, c),
            htmlTextData: ie,
            image: s(mn),
            label: c,
            link: s(Jn),
            listItem: s(gt),
            listItemValue: k,
            listOrdered: s($t, y),
            listUnordered: s($t),
            paragraph: s(xn),
            reference: _,
            referenceString: c,
            resourceDestinationString: c,
            resourceTitleString: c,
            setextHeading: s(Ke),
            strong: s(lt),
            thematicBreak: s(Lr)
        },
        exit: {
            atxHeading: p(),
            atxHeadingSequence: Y,
            autolink: p(),
            autolinkEmail: ln,
            autolinkProtocol: Qn,
            blockQuote: p(),
            characterEscapeValue: me,
            characterReferenceMarkerHexadecimal: tn,
            characterReferenceMarkerNumeric: tn,
            characterReferenceValue: je,
            codeFenced: p($),
            codeFencedFence: N,
            codeFencedFenceInfo: v,
            codeFencedFenceMeta: I,
            codeFlowValue: me,
            codeIndented: p(M),
            codeText: p(se),
            codeTextData: me,
            data: me,
            definition: p(),
            definitionDestinationString: J,
            definitionLabelString: W,
            definitionTitleString: z,
            emphasis: p(),
            hardBreakEscape: p(U),
            hardBreakTrailing: p(U),
            htmlFlow: p(ye),
            htmlFlowData: me,
            htmlText: p(Se),
            htmlTextData: me,
            image: p(Ee),
            label: Te,
            labelText: $e,
            lineEnding: X,
            link: p(Be),
            listItem: p(),
            listOrdered: p(),
            listUnordered: p(),
            paragraph: p(),
            referenceString: Ue,
            resourceDestinationString: S,
            resourceTitleString: Re,
            resource: Ie,
            setextHeading: p(pe),
            setextHeadingLineSequence: V,
            setextHeadingText: P,
            strong: p(),
            thematicBreak: p()
        }
    };
    gh(i, (n || {}).mdastExtensions || []);
    const r = {};
    return l;
    function l(O) {
        let B = {
            type: "root",
            children: []
        };
        const Q = {
            stack: [B],
            tokenStack: [],
            config: i,
            enter: f,
            exit: g,
            buffer: c,
            resume: x,
            data: r
        }
          , ee = [];
        let be = -1;
        for (; ++be < O.length; )
            if (O[be][1].type === "listOrdered" || O[be][1].type === "listUnordered")
                if (O[be][0] === "enter")
                    ee.push(be);
                else {
                    const Je = ee.pop();
                    be = o(O, Je, be)
                }
        for (be = -1; ++be < O.length; ) {
            const Je = i[O[be][0]];
            dh.call(Je, O[be][1].type) && Je[O[be][1].type].call(Object.assign({
                sliceSerialize: O[be][2].sliceSerialize
            }, Q), O[be][1])
        }
        if (Q.tokenStack.length > 0) {
            const Je = Q.tokenStack[Q.tokenStack.length - 1];
            (Je[1] || Uc).call(Q, void 0, Je[0])
        }
        for (B.position = {
            start: Ft(O.length > 0 ? O[0][1].start : {
                line: 1,
                column: 1,
                offset: 0
            }),
            end: Ft(O.length > 0 ? O[O.length - 2][1].end : {
                line: 1,
                column: 1,
                offset: 0
            })
        },
        be = -1; ++be < i.transforms.length; )
            B = i.transforms[be](B) || B;
        return B
    }
    function o(O, B, Q) {
        let ee = B - 1, be = -1, Je = !1, on, sn, et, ot;
        for (; ++ee <= Q; ) {
            const de = O[ee];
            switch (de[1].type) {
            case "listUnordered":
            case "listOrdered":
            case "blockQuote":
                {
                    de[0] === "enter" ? be++ : be--,
                    ot = void 0;
                    break
                }
            case "lineEndingBlank":
                {
                    de[0] === "enter" && (on && !ot && !be && !et && (et = ee),
                    ot = void 0);
                    break
                }
            case "linePrefix":
            case "listItemValue":
            case "listItemMarker":
            case "listItemPrefix":
            case "listItemPrefixWhitespace":
                break;
            default:
                ot = void 0
            }
            if (!be && de[0] === "enter" && de[1].type === "listItemPrefix" || be === -1 && de[0] === "exit" && (de[1].type === "listUnordered" || de[1].type === "listOrdered")) {
                if (on) {
                    let qe = ee;
                    for (sn = void 0; qe--; ) {
                        const rn = O[qe];
                        if (rn[1].type === "lineEnding" || rn[1].type === "lineEndingBlank") {
                            if (rn[0] === "exit")
                                continue;
                            sn && (O[sn][1].type = "lineEndingBlank",
                            Je = !0),
                            rn[1].type = "lineEnding",
                            sn = qe
                        } else if (!(rn[1].type === "linePrefix" || rn[1].type === "blockQuotePrefix" || rn[1].type === "blockQuotePrefixWhitespace" || rn[1].type === "blockQuoteMarker" || rn[1].type === "listItemIndent"))
                            break
                    }
                    et && (!sn || et < sn) && (on._spread = !0),
                    on.end = Object.assign({}, sn ? O[sn][1].start : de[1].end),
                    O.splice(sn || ee, 0, ["exit", on, de[2]]),
                    ee++,
                    Q++
                }
                if (de[1].type === "listItemPrefix") {
                    const qe = {
                        type: "listItem",
                        _spread: !1,
                        start: Object.assign({}, de[1].start),
                        end: void 0
                    };
                    on = qe,
                    O.splice(ee, 0, ["enter", qe, de[2]]),
                    ee++,
                    Q++,
                    et = void 0,
                    ot = !0
                }
            }
        }
        return O[B][1]._spread = Je,
        Q
    }
    function s(O, B) {
        return Q;
        function Q(ee) {
            f.call(this, O(ee), ee),
            B && B.call(this, ee)
        }
    }
    function c() {
        this.stack.push({
            type: "fragment",
            children: []
        })
    }
    function f(O, B, Q) {
        this.stack[this.stack.length - 1].children.push(O),
        this.stack.push(O),
        this.tokenStack.push([B, Q]),
        O.position = {
            start: Ft(B.start),
            end: void 0
        }
    }
    function p(O) {
        return B;
        function B(Q) {
            O && O.call(this, Q),
            g.call(this, Q)
        }
    }
    function g(O, B) {
        const Q = this.stack.pop()
          , ee = this.tokenStack.pop();
        if (ee)
            ee[0].type !== O.type && (B ? B.call(this, O, ee[0]) : (ee[1] || Uc).call(this, O, ee[0]));
        else
            throw new Error("Cannot close `" + O.type + "` (" + ei({
                start: O.start,
                end: O.end
            }) + "): it’s not open");
        Q.position.end = Ft(O.end)
    }
    function x() {
        return Ev(this.stack.pop())
    }
    function y() {
        this.data.expectingFirstListItemValue = !0
    }
    function k(O) {
        if (this.data.expectingFirstListItemValue) {
            const B = this.stack[this.stack.length - 2];
            B.start = Number.parseInt(this.sliceSerialize(O), 10),
            this.data.expectingFirstListItemValue = void 0
        }
    }
    function v() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.lang = O
    }
    function I() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.meta = O
    }
    function N() {
        this.data.flowCodeInside || (this.buffer(),
        this.data.flowCodeInside = !0)
    }
    function $() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.value = O.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
        this.data.flowCodeInside = void 0
    }
    function M() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.value = O.replace(/(\r?\n|\r)$/g, "")
    }
    function W(O) {
        const B = this.resume()
          , Q = this.stack[this.stack.length - 1];
        Q.label = B,
        Q.identifier = kr(this.sliceSerialize(O)).toLowerCase()
    }
    function z() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.title = O
    }
    function J() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.url = O
    }
    function Y(O) {
        const B = this.stack[this.stack.length - 1];
        if (!B.depth) {
            const Q = this.sliceSerialize(O).length;
            B.depth = Q
        }
    }
    function P() {
        this.data.setextHeadingSlurpLineEnding = !0
    }
    function V(O) {
        const B = this.stack[this.stack.length - 1];
        B.depth = this.sliceSerialize(O).codePointAt(0) === 61 ? 1 : 2
    }
    function pe() {
        this.data.setextHeadingSlurpLineEnding = void 0
    }
    function ie(O) {
        const Q = this.stack[this.stack.length - 1].children;
        let ee = Q[Q.length - 1];
        (!ee || ee.type !== "text") && (ee = At(),
        ee.position = {
            start: Ft(O.start),
            end: void 0
        },
        Q.push(ee)),
        this.stack.push(ee)
    }
    function me(O) {
        const B = this.stack.pop();
        B.value += this.sliceSerialize(O),
        B.position.end = Ft(O.end)
    }
    function X(O) {
        const B = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            const Q = B.children[B.children.length - 1];
            Q.position.end = Ft(O.end),
            this.data.atHardBreak = void 0;
            return
        }
        !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(B.type) && (ie.call(this, O),
        me.call(this, O))
    }
    function U() {
        this.data.atHardBreak = !0
    }
    function ye() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.value = O
    }
    function Se() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.value = O
    }
    function se() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.value = O
    }
    function Be() {
        const O = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const B = this.data.referenceType || "shortcut";
            O.type += "Reference",
            O.referenceType = B,
            delete O.url,
            delete O.title
        } else
            delete O.identifier,
            delete O.label;
        this.data.referenceType = void 0
    }
    function Ee() {
        const O = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const B = this.data.referenceType || "shortcut";
            O.type += "Reference",
            O.referenceType = B,
            delete O.url,
            delete O.title
        } else
            delete O.identifier,
            delete O.label;
        this.data.referenceType = void 0
    }
    function $e(O) {
        const B = this.sliceSerialize(O)
          , Q = this.stack[this.stack.length - 2];
        Q.label = kw(B),
        Q.identifier = kr(B).toLowerCase()
    }
    function Te() {
        const O = this.stack[this.stack.length - 1]
          , B = this.resume()
          , Q = this.stack[this.stack.length - 1];
        if (this.data.inReference = !0,
        Q.type === "link") {
            const ee = O.children;
            Q.children = ee
        } else
            Q.alt = B
    }
    function S() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.url = O
    }
    function Re() {
        const O = this.resume()
          , B = this.stack[this.stack.length - 1];
        B.title = O
    }
    function Ie() {
        this.data.inReference = void 0
    }
    function _() {
        this.data.referenceType = "collapsed"
    }
    function Ue(O) {
        const B = this.resume()
          , Q = this.stack[this.stack.length - 1];
        Q.label = B,
        Q.identifier = kr(this.sliceSerialize(O)).toLowerCase(),
        this.data.referenceType = "full"
    }
    function tn(O) {
        this.data.characterReferenceType = O.type
    }
    function je(O) {
        const B = this.sliceSerialize(O)
          , Q = this.data.characterReferenceType;
        let ee;
        Q ? (ee = ih(B, Q === "characterReferenceMarkerNumeric" ? 10 : 16),
        this.data.characterReferenceType = void 0) : ee = Lo(B);
        const be = this.stack.pop();
        be.value += ee,
        be.position.end = Ft(O.end)
    }
    function Qn(O) {
        me.call(this, O);
        const B = this.stack[this.stack.length - 1];
        B.url = this.sliceSerialize(O)
    }
    function ln(O) {
        me.call(this, O);
        const B = this.stack[this.stack.length - 1];
        B.url = "mailto:" + this.sliceSerialize(O)
    }
    function _n() {
        return {
            type: "blockquote",
            children: []
        }
    }
    function Ne() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        }
    }
    function Ve() {
        return {
            type: "inlineCode",
            value: ""
        }
    }
    function He() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        }
    }
    function rr() {
        return {
            type: "emphasis",
            children: []
        }
    }
    function Ke() {
        return {
            type: "heading",
            depth: 0,
            children: []
        }
    }
    function Bn() {
        return {
            type: "break"
        }
    }
    function fn() {
        return {
            type: "html",
            value: ""
        }
    }
    function mn() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        }
    }
    function Jn() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        }
    }
    function $t(O) {
        return {
            type: "list",
            ordered: O.type === "listOrdered",
            start: null,
            spread: O._spread,
            children: []
        }
    }
    function gt(O) {
        return {
            type: "listItem",
            spread: O._spread,
            checked: null,
            children: []
        }
    }
    function xn() {
        return {
            type: "paragraph",
            children: []
        }
    }
    function lt() {
        return {
            type: "strong",
            children: []
        }
    }
    function At() {
        return {
            type: "text",
            value: ""
        }
    }
    function Lr() {
        return {
            type: "thematicBreak"
        }
    }
}
function Ft(n) {
    return {
        line: n.line,
        column: n.column,
        offset: n.offset
    }
}
function gh(n, i) {
    let r = -1;
    for (; ++r < i.length; ) {
        const l = i[r];
        Array.isArray(l) ? gh(n, l) : Tw(n, l)
    }
}
function Tw(n, i) {
    let r;
    for (r in i)
        if (dh.call(i, r))
            switch (r) {
            case "canContainEols":
                {
                    const l = i[r];
                    l && n[r].push(...l);
                    break
                }
            case "transforms":
                {
                    const l = i[r];
                    l && n[r].push(...l);
                    break
                }
            case "enter":
            case "exit":
                {
                    const l = i[r];
                    l && Object.assign(n[r], l);
                    break
                }
            }
}
function Uc(n, i) {
    throw n ? new Error("Cannot close `" + n.type + "` (" + ei({
        start: n.start,
        end: n.end
    }) + "): a different token (`" + i.type + "`, " + ei({
        start: i.start,
        end: i.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + ei({
        start: i.start,
        end: i.end
    }) + ") is still open")
}
function Iw(n) {
    const i = this;
    i.parser = r;
    function r(l) {
        return Ew(l, {
            ...i.data("settings"),
            ...n,
            extensions: i.data("micromarkExtensions") || [],
            mdastExtensions: i.data("fromMarkdownExtensions") || []
        })
    }
}
function Ow(n, i) {
    const r = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: n.wrap(n.all(i), !0)
    };
    return n.patch(i, r),
    n.applyData(i, r)
}
function Lw(n, i) {
    const r = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
    };
    return n.patch(i, r),
    [n.applyData(i, r), {
        type: "text",
        value: `
`
    }]
}
function Pw(n, i) {
    const r = i.value ? i.value + `
` : ""
      , l = {};
    i.lang && (l.className = ["language-" + i.lang]);
    let o = {
        type: "element",
        tagName: "code",
        properties: l,
        children: [{
            type: "text",
            value: r
        }]
    };
    return i.meta && (o.data = {
        meta: i.meta
    }),
    n.patch(i, o),
    o = n.applyData(i, o),
    o = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [o]
    },
    n.patch(i, o),
    o
}
function Dw(n, i) {
    const r = {
        type: "element",
        tagName: "del",
        properties: {},
        children: n.all(i)
    };
    return n.patch(i, r),
    n.applyData(i, r)
}
function Rw(n, i) {
    const r = {
        type: "element",
        tagName: "em",
        properties: {},
        children: n.all(i)
    };
    return n.patch(i, r),
    n.applyData(i, r)
}
function Nw(n, i) {
    const r = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-"
      , l = String(i.identifier).toUpperCase()
      , o = Ar(l.toLowerCase())
      , s = n.footnoteOrder.indexOf(l);
    let c, f = n.footnoteCounts.get(l);
    f === void 0 ? (f = 0,
    n.footnoteOrder.push(l),
    c = n.footnoteOrder.length) : c = s + 1,
    f += 1,
    n.footnoteCounts.set(l, f);
    const p = {
        type: "element",
        tagName: "a",
        properties: {
            href: "#" + r + "fn-" + o,
            id: r + "fnref-" + o + (f > 1 ? "-" + f : ""),
            dataFootnoteRef: !0,
            ariaDescribedBy: ["footnote-label"]
        },
        children: [{
            type: "text",
            value: String(c)
        }]
    };
    n.patch(i, p);
    const g = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [p]
    };
    return n.patch(i, g),
    n.applyData(i, g)
}
function Mw(n, i) {
    const r = {
        type: "element",
        tagName: "h" + i.depth,
        properties: {},
        children: n.all(i)
    };
    return n.patch(i, r),
    n.applyData(i, r)
}
function jw(n, i) {
    if (n.options.allowDangerousHtml) {
        const r = {
            type: "raw",
            value: i.value
        };
        return n.patch(i, r),
        n.applyData(i, r)
    }
}
function mh(n, i) {
    const r = i.referenceType;
    let l = "]";
    if (r === "collapsed" ? l += "[]" : r === "full" && (l += "[" + (i.label || i.identifier) + "]"),
    i.type === "imageReference")
        return [{
            type: "text",
            value: "![" + i.alt + l
        }];
    const o = n.all(i)
      , s = o[0];
    s && s.type === "text" ? s.value = "[" + s.value : o.unshift({
        type: "text",
        value: "["
    });
    const c = o[o.length - 1];
    return c && c.type === "text" ? c.value += l : o.push({
        type: "text",
        value: l
    }),
    o
}
function Fw(n, i) {
    const r = String(i.identifier).toUpperCase()
      , l = n.definitionById.get(r);
    if (!l)
        return mh(n, i);
    const o = {
        src: Ar(l.url || ""),
        alt: i.alt
    };
    l.title !== null && l.title !== void 0 && (o.title = l.title);
    const s = {
        type: "element",
        tagName: "img",
        properties: o,
        children: []
    };
    return n.patch(i, s),
    n.applyData(i, s)
}
function zw(n, i) {
    const r = {
        src: Ar(i.url)
    };
    i.alt !== null && i.alt !== void 0 && (r.alt = i.alt),
    i.title !== null && i.title !== void 0 && (r.title = i.title);
    const l = {
        type: "element",
        tagName: "img",
        properties: r,
        children: []
    };
    return n.patch(i, l),
    n.applyData(i, l)
}
function Bw(n, i) {
    const r = {
        type: "text",
        value: i.value.replace(/\r?\n|\r/g, " ")
    };
    n.patch(i, r);
    const l = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [r]
    };
    return n.patch(i, l),
    n.applyData(i, l)
}
function $w(n, i) {
    const r = String(i.identifier).toUpperCase()
      , l = n.definitionById.get(r);
    if (!l)
        return mh(n, i);
    const o = {
        href: Ar(l.url || "")
    };
    l.title !== null && l.title !== void 0 && (o.title = l.title);
    const s = {
        type: "element",
        tagName: "a",
        properties: o,
        children: n.all(i)
    };
    return n.patch(i, s),
    n.applyData(i, s)
}
function Uw(n, i) {
    const r = {
        href: Ar(i.url)
    };
    i.title !== null && i.title !== void 0 && (r.title = i.title);
    const l = {
        type: "element",
        tagName: "a",
        properties: r,
        children: n.all(i)
    };
    return n.patch(i, l),
    n.applyData(i, l)
}
function Hw(n, i, r) {
    const l = n.all(i)
      , o = r ? Ww(r) : xh(i)
      , s = {}
      , c = [];
    if (typeof i.checked == "boolean") {
        const x = l[0];
        let y;
        x && x.type === "element" && x.tagName === "p" ? y = x : (y = {
            type: "element",
            tagName: "p",
            properties: {},
            children: []
        },
        l.unshift(y)),
        y.children.length > 0 && y.children.unshift({
            type: "text",
            value: " "
        }),
        y.children.unshift({
            type: "element",
            tagName: "input",
            properties: {
                type: "checkbox",
                checked: i.checked,
                disabled: !0
            },
            children: []
        }),
        s.className = ["task-list-item"]
    }
    let f = -1;
    for (; ++f < l.length; ) {
        const x = l[f];
        (o || f !== 0 || x.type !== "element" || x.tagName !== "p") && c.push({
            type: "text",
            value: `
`
        }),
        x.type === "element" && x.tagName === "p" && !o ? c.push(...x.children) : c.push(x)
    }
    const p = l[l.length - 1];
    p && (o || p.type !== "element" || p.tagName !== "p") && c.push({
        type: "text",
        value: `
`
    });
    const g = {
        type: "element",
        tagName: "li",
        properties: s,
        children: c
    };
    return n.patch(i, g),
    n.applyData(i, g)
}
function Ww(n) {
    let i = !1;
    if (n.type === "list") {
        i = n.spread || !1;
        const r = n.children;
        let l = -1;
        for (; !i && ++l < r.length; )
            i = xh(r[l])
    }
    return i
}
function xh(n) {
    const i = n.spread;
    return i ?? n.children.length > 1
}
function qw(n, i) {
    const r = {}
      , l = n.all(i);
    let o = -1;
    for (typeof i.start == "number" && i.start !== 1 && (r.start = i.start); ++o < l.length; ) {
        const c = l[o];
        if (c.type === "element" && c.tagName === "li" && c.properties && Array.isArray(c.properties.className) && c.properties.className.includes("task-list-item")) {
            r.className = ["contains-task-list"];
            break
        }
    }
    const s = {
        type: "element",
        tagName: i.ordered ? "ol" : "ul",
        properties: r,
        children: n.wrap(l, !0)
    };
    return n.patch(i, s),
    n.applyData(i, s)
}
function Gw(n, i) {
    const r = {
        type: "element",
        tagName: "p",
        properties: {},
        children: n.all(i)
    };
    return n.patch(i, r),
    n.applyData(i, r)
}
function Vw(n, i) {
    const r = {
        type: "root",
        children: n.wrap(n.all(i))
    };
    return n.patch(i, r),
    n.applyData(i, r)
}
function Kw(n, i) {
    const r = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: n.all(i)
    };
    return n.patch(i, r),
    n.applyData(i, r)
}
function Yw(n, i) {
    const r = n.all(i)
      , l = r.shift()
      , o = [];
    if (l) {
        const c = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: n.wrap([l], !0)
        };
        n.patch(i.children[0], c),
        o.push(c)
    }
    if (r.length > 0) {
        const c = {
            type: "element",
            tagName: "tbody",
            properties: {},
            children: n.wrap(r, !0)
        }
          , f = Ao(i.children[1])
          , p = Zf(i.children[i.children.length - 1]);
        f && p && (c.position = {
            start: f,
            end: p
        }),
        o.push(c)
    }
    const s = {
        type: "element",
        tagName: "table",
        properties: {},
        children: n.wrap(o, !0)
    };
    return n.patch(i, s),
    n.applyData(i, s)
}
function Xw(n, i, r) {
    const l = r ? r.children : void 0
      , s = (l ? l.indexOf(i) : 1) === 0 ? "th" : "td"
      , c = r && r.type === "table" ? r.align : void 0
      , f = c ? c.length : i.children.length;
    let p = -1;
    const g = [];
    for (; ++p < f; ) {
        const y = i.children[p]
          , k = {}
          , v = c ? c[p] : void 0;
        v && (k.align = v);
        let I = {
            type: "element",
            tagName: s,
            properties: k,
            children: []
        };
        y && (I.children = n.all(y),
        n.patch(y, I),
        I = n.applyData(y, I)),
        g.push(I)
    }
    const x = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: n.wrap(g, !0)
    };
    return n.patch(i, x),
    n.applyData(i, x)
}
function Zw(n, i) {
    const r = {
        type: "element",
        tagName: "td",
        properties: {},
        children: n.all(i)
    };
    return n.patch(i, r),
    n.applyData(i, r)
}
const Hc = 9
  , Wc = 32;
function Qw(n) {
    const i = String(n)
      , r = /\r?\n|\r/g;
    let l = r.exec(i)
      , o = 0;
    const s = [];
    for (; l; )
        s.push(qc(i.slice(o, l.index), o > 0, !0), l[0]),
        o = l.index + l[0].length,
        l = r.exec(i);
    return s.push(qc(i.slice(o), o > 0, !1)),
    s.join("")
}
function qc(n, i, r) {
    let l = 0
      , o = n.length;
    if (i) {
        let s = n.codePointAt(l);
        for (; s === Hc || s === Wc; )
            l++,
            s = n.codePointAt(l)
    }
    if (r) {
        let s = n.codePointAt(o - 1);
        for (; s === Hc || s === Wc; )
            o--,
            s = n.codePointAt(o - 1)
    }
    return o > l ? n.slice(l, o) : ""
}
function Jw(n, i) {
    const r = {
        type: "text",
        value: Qw(String(i.value))
    };
    return n.patch(i, r),
    n.applyData(i, r)
}
function e_(n, i) {
    const r = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
    };
    return n.patch(i, r),
    n.applyData(i, r)
}
const n_ = {
    blockquote: Ow,
    break: Lw,
    code: Pw,
    delete: Dw,
    emphasis: Rw,
    footnoteReference: Nw,
    heading: Mw,
    html: jw,
    imageReference: Fw,
    image: zw,
    inlineCode: Bw,
    linkReference: $w,
    link: Uw,
    listItem: Hw,
    list: qw,
    paragraph: Gw,
    root: Vw,
    strong: Kw,
    table: Yw,
    tableCell: Zw,
    tableRow: Xw,
    text: Jw,
    thematicBreak: e_,
    toml: ea,
    yaml: ea,
    definition: ea,
    footnoteDefinition: ea
};
function ea() {}
const yh = -1
  , pa = 0
  , la = 1
  , oa = 2
  , Ro = 3
  , No = 4
  , Mo = 5
  , jo = 6
  , vh = 7
  , bh = 8
  , Gc = typeof self == "object" ? self : globalThis
  , t_ = (n, i) => {
    const r = (o, s) => (n.set(s, o),
    o)
      , l = o => {
        if (n.has(o))
            return n.get(o);
        const [s,c] = i[o];
        switch (s) {
        case pa:
        case yh:
            return r(c, o);
        case la:
            {
                const f = r([], o);
                for (const p of c)
                    f.push(l(p));
                return f
            }
        case oa:
            {
                const f = r({}, o);
                for (const [p,g] of c)
                    f[l(p)] = l(g);
                return f
            }
        case Ro:
            return r(new Date(c), o);
        case No:
            {
                const {source: f, flags: p} = c;
                return r(new RegExp(f,p), o)
            }
        case Mo:
            {
                const f = r(new Map, o);
                for (const [p,g] of c)
                    f.set(l(p), l(g));
                return f
            }
        case jo:
            {
                const f = r(new Set, o);
                for (const p of c)
                    f.add(l(p));
                return f
            }
        case vh:
            {
                const {name: f, message: p} = c;
                return r(new Gc[f](p), o)
            }
        case bh:
            return r(BigInt(c), o);
        case "BigInt":
            return r(Object(BigInt(c)), o)
        }
        return r(new Gc[s](c), o)
    }
    ;
    return l
}
  , Vc = n => t_(new Map, n)(0)
  , wr = ""
  , {toString: r_} = {}
  , {keys: i_} = Object
  , Zr = n => {
    const i = typeof n;
    if (i !== "object" || !n)
        return [pa, i];
    const r = r_.call(n).slice(8, -1);
    switch (r) {
    case "Array":
        return [la, wr];
    case "Object":
        return [oa, wr];
    case "Date":
        return [Ro, wr];
    case "RegExp":
        return [No, wr];
    case "Map":
        return [Mo, wr];
    case "Set":
        return [jo, wr]
    }
    return r.includes("Array") ? [la, r] : r.includes("Error") ? [vh, r] : [oa, r]
}
  , na = ([n,i]) => n === pa && (i === "function" || i === "symbol")
  , a_ = (n, i, r, l) => {
    const o = (c, f) => {
        const p = l.push(c) - 1;
        return r.set(f, p),
        p
    }
      , s = c => {
        if (r.has(c))
            return r.get(c);
        let[f,p] = Zr(c);
        switch (f) {
        case pa:
            {
                let x = c;
                switch (p) {
                case "bigint":
                    f = bh,
                    x = c.toString();
                    break;
                case "function":
                case "symbol":
                    if (n)
                        throw new TypeError("unable to serialize " + p);
                    x = null;
                    break;
                case "undefined":
                    return o([yh], c)
                }
                return o([f, x], c)
            }
        case la:
            {
                if (p)
                    return o([p, [...c]], c);
                const x = []
                  , y = o([f, x], c);
                for (const k of c)
                    x.push(s(k));
                return y
            }
        case oa:
            {
                if (p)
                    switch (p) {
                    case "BigInt":
                        return o([p, c.toString()], c);
                    case "Boolean":
                    case "Number":
                    case "String":
                        return o([p, c.valueOf()], c)
                    }
                if (i && "toJSON" in c)
                    return s(c.toJSON());
                const x = []
                  , y = o([f, x], c);
                for (const k of i_(c))
                    (n || !na(Zr(c[k]))) && x.push([s(k), s(c[k])]);
                return y
            }
        case Ro:
            return o([f, c.toISOString()], c);
        case No:
            {
                const {source: x, flags: y} = c;
                return o([f, {
                    source: x,
                    flags: y
                }], c)
            }
        case Mo:
            {
                const x = []
                  , y = o([f, x], c);
                for (const [k,v] of c)
                    (n || !(na(Zr(k)) || na(Zr(v)))) && x.push([s(k), s(v)]);
                return y
            }
        case jo:
            {
                const x = []
                  , y = o([f, x], c);
                for (const k of c)
                    (n || !na(Zr(k))) && x.push(s(k));
                return y
            }
        }
        const {message: g} = c;
        return o([f, {
            name: p,
            message: g
        }], c)
    }
    ;
    return s
}
  , Kc = (n, {json: i, lossy: r}={}) => {
    const l = [];
    return a_(!(i || r), !!i, new Map, l)(n),
    l
}
  , sa = typeof structuredClone == "function" ? (n, i) => i && ("json" in i || "lossy" in i) ? Vc(Kc(n, i)) : structuredClone(n) : (n, i) => Vc(Kc(n, i));
function l_(n, i) {
    const r = [{
        type: "text",
        value: "↩"
    }];
    return i > 1 && r.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{
            type: "text",
            value: String(i)
        }]
    }),
    r
}
function o_(n, i) {
    return "Back to reference " + (n + 1) + (i > 1 ? "-" + i : "")
}
function s_(n) {
    const i = typeof n.options.clobberPrefix == "string" ? n.options.clobberPrefix : "user-content-"
      , r = n.options.footnoteBackContent || l_
      , l = n.options.footnoteBackLabel || o_
      , o = n.options.footnoteLabel || "Footnotes"
      , s = n.options.footnoteLabelTagName || "h2"
      , c = n.options.footnoteLabelProperties || {
        className: ["sr-only"]
    }
      , f = [];
    let p = -1;
    for (; ++p < n.footnoteOrder.length; ) {
        const g = n.footnoteById.get(n.footnoteOrder[p]);
        if (!g)
            continue;
        const x = n.all(g)
          , y = String(g.identifier).toUpperCase()
          , k = Ar(y.toLowerCase());
        let v = 0;
        const I = []
          , N = n.footnoteCounts.get(y);
        for (; N !== void 0 && ++v <= N; ) {
            I.length > 0 && I.push({
                type: "text",
                value: " "
            });
            let W = typeof r == "string" ? r : r(p, v);
            typeof W == "string" && (W = {
                type: "text",
                value: W
            }),
            I.push({
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + i + "fnref-" + k + (v > 1 ? "-" + v : ""),
                    dataFootnoteBackref: "",
                    ariaLabel: typeof l == "string" ? l : l(p, v),
                    className: ["data-footnote-backref"]
                },
                children: Array.isArray(W) ? W : [W]
            })
        }
        const $ = x[x.length - 1];
        if ($ && $.type === "element" && $.tagName === "p") {
            const W = $.children[$.children.length - 1];
            W && W.type === "text" ? W.value += " " : $.children.push({
                type: "text",
                value: " "
            }),
            $.children.push(...I)
        } else
            x.push(...I);
        const M = {
            type: "element",
            tagName: "li",
            properties: {
                id: i + "fn-" + k
            },
            children: n.wrap(x, !0)
        };
        n.patch(g, M),
        f.push(M)
    }
    if (f.length !== 0)
        return {
            type: "element",
            tagName: "section",
            properties: {
                dataFootnotes: !0,
                className: ["footnotes"]
            },
            children: [{
                type: "element",
                tagName: s,
                properties: {
                    ...sa(c),
                    id: "footnote-label"
                },
                children: [{
                    type: "text",
                    value: o
                }]
            }, {
                type: "text",
                value: `
`
            }, {
                type: "element",
                tagName: "ol",
                properties: {},
                children: n.wrap(f, !0)
            }, {
                type: "text",
                value: `
`
            }]
        }
}
const wh = function(n) {
    if (n == null)
        return h_;
    if (typeof n == "function")
        return da(n);
    if (typeof n == "object")
        return Array.isArray(n) ? u_(n) : c_(n);
    if (typeof n == "string")
        return f_(n);
    throw new Error("Expected function, string, or object as test")
};
function u_(n) {
    const i = [];
    let r = -1;
    for (; ++r < n.length; )
        i[r] = wh(n[r]);
    return da(l);
    function l(...o) {
        let s = -1;
        for (; ++s < i.length; )
            if (i[s].apply(this, o))
                return !0;
        return !1
    }
}
function c_(n) {
    const i = n;
    return da(r);
    function r(l) {
        const o = l;
        let s;
        for (s in n)
            if (o[s] !== i[s])
                return !1;
        return !0
    }
}
function f_(n) {
    return da(i);
    function i(r) {
        return r && r.type === n
    }
}
function da(n) {
    return i;
    function i(r, l, o) {
        return !!(p_(r) && n.call(this, r, typeof l == "number" ? l : void 0, o || void 0))
    }
}
function h_() {
    return !0
}
function p_(n) {
    return n !== null && typeof n == "object" && "type" in n
}
const _h = []
  , d_ = !0
  , Yc = !1
  , g_ = "skip";
function m_(n, i, r, l) {
    let o;
    typeof i == "function" && typeof r != "function" ? (l = r,
    r = i) : o = i;
    const s = wh(o)
      , c = l ? -1 : 1;
    f(n, void 0, [])();
    function f(p, g, x) {
        const y = p && typeof p == "object" ? p : {};
        if (typeof y.type == "string") {
            const v = typeof y.tagName == "string" ? y.tagName : typeof y.name == "string" ? y.name : void 0;
            Object.defineProperty(k, "name", {
                value: "node (" + (p.type + (v ? "<" + v + ">" : "")) + ")"
            })
        }
        return k;
        function k() {
            let v = _h, I, N, $;
            if ((!i || s(p, g, x[x.length - 1] || void 0)) && (v = x_(r(p, x)),
            v[0] === Yc))
                return v;
            if ("children" in p && p.children) {
                const M = p;
                if (M.children && v[0] !== g_)
                    for (N = (l ? M.children.length : -1) + c,
                    $ = x.concat(M); N > -1 && N < M.children.length; ) {
                        const W = M.children[N];
                        if (I = f(W, N, $)(),
                        I[0] === Yc)
                            return I;
                        N = typeof I[1] == "number" ? I[1] : N + c
                    }
            }
            return v
        }
    }
}
function x_(n) {
    return Array.isArray(n) ? n : typeof n == "number" ? [d_, n] : n == null ? _h : [n]
}
function Sh(n, i, r, l) {
    let o, s, c;
    typeof i == "function" && typeof r != "function" ? (s = void 0,
    c = i,
    o = r) : (s = i,
    c = r,
    o = l),
    m_(n, s, f, o);
    function f(p, g) {
        const x = g[g.length - 1]
          , y = x ? x.children.indexOf(p) : void 0;
        return c(p, y, x)
    }
}
const so = {}.hasOwnProperty
  , y_ = {};
function v_(n, i) {
    const r = i || y_
      , l = new Map
      , o = new Map
      , s = new Map
      , c = {
        ...n_,
        ...r.handlers
    }
      , f = {
        all: g,
        applyData: w_,
        definitionById: l,
        footnoteById: o,
        footnoteCounts: s,
        footnoteOrder: [],
        handlers: c,
        one: p,
        options: r,
        patch: b_,
        wrap: S_
    };
    return Sh(n, function(x) {
        if (x.type === "definition" || x.type === "footnoteDefinition") {
            const y = x.type === "definition" ? l : o
              , k = String(x.identifier).toUpperCase();
            y.has(k) || y.set(k, x)
        }
    }),
    f;
    function p(x, y) {
        const k = x.type
          , v = f.handlers[k];
        if (so.call(f.handlers, k) && v)
            return v(f, x, y);
        if (f.options.passThrough && f.options.passThrough.includes(k)) {
            if ("children" in x) {
                const {children: N, ...$} = x
                  , M = sa($);
                return M.children = f.all(x),
                M
            }
            return sa(x)
        }
        return (f.options.unknownHandler || __)(f, x, y)
    }
    function g(x) {
        const y = [];
        if ("children" in x) {
            const k = x.children;
            let v = -1;
            for (; ++v < k.length; ) {
                const I = f.one(k[v], x);
                if (I) {
                    if (v && k[v - 1].type === "break" && (!Array.isArray(I) && I.type === "text" && (I.value = Xc(I.value)),
                    !Array.isArray(I) && I.type === "element")) {
                        const N = I.children[0];
                        N && N.type === "text" && (N.value = Xc(N.value))
                    }
                    Array.isArray(I) ? y.push(...I) : y.push(I)
                }
            }
        }
        return y
    }
}
function b_(n, i) {
    n.position && (i.position = tv(n))
}
function w_(n, i) {
    let r = i;
    if (n && n.data) {
        const l = n.data.hName
          , o = n.data.hChildren
          , s = n.data.hProperties;
        if (typeof l == "string")
            if (r.type === "element")
                r.tagName = l;
            else {
                const c = "children" in r ? r.children : [r];
                r = {
                    type: "element",
                    tagName: l,
                    properties: {},
                    children: c
                }
            }
        r.type === "element" && s && Object.assign(r.properties, sa(s)),
        "children" in r && r.children && o !== null && o !== void 0 && (r.children = o)
    }
    return r
}
function __(n, i) {
    const r = i.data || {}
      , l = "value" in i && !(so.call(r, "hProperties") || so.call(r, "hChildren")) ? {
        type: "text",
        value: i.value
    } : {
        type: "element",
        tagName: "div",
        properties: {},
        children: n.all(i)
    };
    return n.patch(i, l),
    n.applyData(i, l)
}
function S_(n, i) {
    const r = [];
    let l = -1;
    for (i && r.push({
        type: "text",
        value: `
`
    }); ++l < n.length; )
        l && r.push({
            type: "text",
            value: `
`
        }),
        r.push(n[l]);
    return i && n.length > 0 && r.push({
        type: "text",
        value: `
`
    }),
    r
}
function Xc(n) {
    let i = 0
      , r = n.charCodeAt(i);
    for (; r === 9 || r === 32; )
        i++,
        r = n.charCodeAt(i);
    return n.slice(i)
}
function Zc(n, i) {
    const r = v_(n, i)
      , l = r.one(n, void 0)
      , o = s_(r)
      , s = Array.isArray(l) ? {
        type: "root",
        children: l
    } : l || {
        type: "root",
        children: []
    };
    return o && s.children.push({
        type: "text",
        value: `
`
    }, o),
    s
}
function k_(n, i) {
    return n && "run" in n ? async function(r, l) {
        const o = Zc(r, {
            file: l,
            ...i
        });
        await n.run(o, l)
    }
    : function(r, l) {
        return Zc(r, {
            file: l,
            ...i || n
        })
    }
}
function Qc(n) {
    if (n)
        throw n
}
var aa = Object.prototype.hasOwnProperty
  , kh = Object.prototype.toString
  , Jc = Object.defineProperty
  , ef = Object.getOwnPropertyDescriptor
  , nf = function(i) {
    return typeof Array.isArray == "function" ? Array.isArray(i) : kh.call(i) === "[object Array]"
}
  , tf = function(i) {
    if (!i || kh.call(i) !== "[object Object]")
        return !1;
    var r = aa.call(i, "constructor")
      , l = i.constructor && i.constructor.prototype && aa.call(i.constructor.prototype, "isPrototypeOf");
    if (i.constructor && !r && !l)
        return !1;
    var o;
    for (o in i)
        ;
    return typeof o > "u" || aa.call(i, o)
}
  , rf = function(i, r) {
    Jc && r.name === "__proto__" ? Jc(i, r.name, {
        enumerable: !0,
        configurable: !0,
        value: r.newValue,
        writable: !0
    }) : i[r.name] = r.newValue
}
  , af = function(i, r) {
    if (r === "__proto__")
        if (aa.call(i, r)) {
            if (ef)
                return ef(i, r).value
        } else
            return;
    return i[r]
}
  , C_ = function n() {
    var i, r, l, o, s, c, f = arguments[0], p = 1, g = arguments.length, x = !1;
    for (typeof f == "boolean" && (x = f,
    f = arguments[1] || {},
    p = 2),
    (f == null || typeof f != "object" && typeof f != "function") && (f = {}); p < g; ++p)
        if (i = arguments[p],
        i != null)
            for (r in i)
                l = af(f, r),
                o = af(i, r),
                f !== o && (x && o && (tf(o) || (s = nf(o))) ? (s ? (s = !1,
                c = l && nf(l) ? l : []) : c = l && tf(l) ? l : {},
                rf(f, {
                    name: r,
                    newValue: n(x, c, o)
                })) : typeof o < "u" && rf(f, {
                    name: r,
                    newValue: o
                }));
    return f
};
const Gl = Df(C_);
function uo(n) {
    if (typeof n != "object" || n === null)
        return !1;
    const i = Object.getPrototypeOf(n);
    return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n)
}
function E_() {
    const n = []
      , i = {
        run: r,
        use: l
    };
    return i;
    function r(...o) {
        let s = -1;
        const c = o.pop();
        if (typeof c != "function")
            throw new TypeError("Expected function as last argument, not " + c);
        f(null, ...o);
        function f(p, ...g) {
            const x = n[++s];
            let y = -1;
            if (p) {
                c(p);
                return
            }
            for (; ++y < o.length; )
                (g[y] === null || g[y] === void 0) && (g[y] = o[y]);
            o = g,
            x ? A_(x, f)(...g) : c(null, ...g)
        }
    }
    function l(o) {
        if (typeof o != "function")
            throw new TypeError("Expected `middelware` to be a function, not " + o);
        return n.push(o),
        i
    }
}
function A_(n, i) {
    let r;
    return l;
    function l(...c) {
        const f = n.length > c.length;
        let p;
        f && c.push(o);
        try {
            p = n.apply(this, c)
        } catch (g) {
            const x = g;
            if (f && r)
                throw x;
            return o(x)
        }
        f || (p && p.then && typeof p.then == "function" ? p.then(s, o) : p instanceof Error ? o(p) : s(p))
    }
    function o(c, ...f) {
        r || (r = !0,
        i(c, ...f))
    }
    function s(c) {
        o(null, c)
    }
}
const ht = {
    basename: T_,
    dirname: I_,
    extname: O_,
    join: L_,
    sep: "/"
};
function T_(n, i) {
    if (i !== void 0 && typeof i != "string")
        throw new TypeError('"ext" argument must be a string');
    oi(n);
    let r = 0, l = -1, o = n.length, s;
    if (i === void 0 || i.length === 0 || i.length > n.length) {
        for (; o--; )
            if (n.codePointAt(o) === 47) {
                if (s) {
                    r = o + 1;
                    break
                }
            } else
                l < 0 && (s = !0,
                l = o + 1);
        return l < 0 ? "" : n.slice(r, l)
    }
    if (i === n)
        return "";
    let c = -1
      , f = i.length - 1;
    for (; o--; )
        if (n.codePointAt(o) === 47) {
            if (s) {
                r = o + 1;
                break
            }
        } else
            c < 0 && (s = !0,
            c = o + 1),
            f > -1 && (n.codePointAt(o) === i.codePointAt(f--) ? f < 0 && (l = o) : (f = -1,
            l = c));
    return r === l ? l = c : l < 0 && (l = n.length),
    n.slice(r, l)
}
function I_(n) {
    if (oi(n),
    n.length === 0)
        return ".";
    let i = -1, r = n.length, l;
    for (; --r; )
        if (n.codePointAt(r) === 47) {
            if (l) {
                i = r;
                break
            }
        } else
            l || (l = !0);
    return i < 0 ? n.codePointAt(0) === 47 ? "/" : "." : i === 1 && n.codePointAt(0) === 47 ? "//" : n.slice(0, i)
}
function O_(n) {
    oi(n);
    let i = n.length, r = -1, l = 0, o = -1, s = 0, c;
    for (; i--; ) {
        const f = n.codePointAt(i);
        if (f === 47) {
            if (c) {
                l = i + 1;
                break
            }
            continue
        }
        r < 0 && (c = !0,
        r = i + 1),
        f === 46 ? o < 0 ? o = i : s !== 1 && (s = 1) : o > -1 && (s = -1)
    }
    return o < 0 || r < 0 || s === 0 || s === 1 && o === r - 1 && o === l + 1 ? "" : n.slice(o, r)
}
function L_(...n) {
    let i = -1, r;
    for (; ++i < n.length; )
        oi(n[i]),
        n[i] && (r = r === void 0 ? n[i] : r + "/" + n[i]);
    return r === void 0 ? "." : P_(r)
}
function P_(n) {
    oi(n);
    const i = n.codePointAt(0) === 47;
    let r = D_(n, !i);
    return r.length === 0 && !i && (r = "."),
    r.length > 0 && n.codePointAt(n.length - 1) === 47 && (r += "/"),
    i ? "/" + r : r
}
function D_(n, i) {
    let r = "", l = 0, o = -1, s = 0, c = -1, f, p;
    for (; ++c <= n.length; ) {
        if (c < n.length)
            f = n.codePointAt(c);
        else {
            if (f === 47)
                break;
            f = 47
        }
        if (f === 47) {
            if (!(o === c - 1 || s === 1))
                if (o !== c - 1 && s === 2) {
                    if (r.length < 2 || l !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
                        if (r.length > 2) {
                            if (p = r.lastIndexOf("/"),
                            p !== r.length - 1) {
                                p < 0 ? (r = "",
                                l = 0) : (r = r.slice(0, p),
                                l = r.length - 1 - r.lastIndexOf("/")),
                                o = c,
                                s = 0;
                                continue
                            }
                        } else if (r.length > 0) {
                            r = "",
                            l = 0,
                            o = c,
                            s = 0;
                            continue
                        }
                    }
                    i && (r = r.length > 0 ? r + "/.." : "..",
                    l = 2)
                } else
                    r.length > 0 ? r += "/" + n.slice(o + 1, c) : r = n.slice(o + 1, c),
                    l = c - o - 1;
            o = c,
            s = 0
        } else
            f === 46 && s > -1 ? s++ : s = -1
    }
    return r
}
function oi(n) {
    if (typeof n != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(n))
}
const R_ = {
    cwd: N_
};
function N_() {
    return "/"
}
function co(n) {
    return !!(n !== null && typeof n == "object" && "href" in n && n.href && "protocol" in n && n.protocol && n.auth === void 0)
}
function M_(n) {
    if (typeof n == "string")
        n = new URL(n);
    else if (!co(n)) {
        const i = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + n + "`");
        throw i.code = "ERR_INVALID_ARG_TYPE",
        i
    }
    if (n.protocol !== "file:") {
        const i = new TypeError("The URL must be of scheme file");
        throw i.code = "ERR_INVALID_URL_SCHEME",
        i
    }
    return j_(n)
}
function j_(n) {
    if (n.hostname !== "") {
        const l = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw l.code = "ERR_INVALID_FILE_URL_HOST",
        l
    }
    const i = n.pathname;
    let r = -1;
    for (; ++r < i.length; )
        if (i.codePointAt(r) === 37 && i.codePointAt(r + 1) === 50) {
            const l = i.codePointAt(r + 2);
            if (l === 70 || l === 102) {
                const o = new TypeError("File URL path must not include encoded / characters");
                throw o.code = "ERR_INVALID_FILE_URL_PATH",
                o
            }
        }
    return decodeURIComponent(i)
}
const Vl = ["history", "path", "basename", "stem", "extname", "dirname"];
class Ch {
    constructor(i) {
        let r;
        i ? co(i) ? r = {
            path: i
        } : typeof i == "string" || F_(i) ? r = {
            value: i
        } : r = i : r = {},
        this.cwd = R_.cwd(),
        this.data = {},
        this.history = [],
        this.messages = [],
        this.value,
        this.map,
        this.result,
        this.stored;
        let l = -1;
        for (; ++l < Vl.length; ) {
            const s = Vl[l];
            s in r && r[s] !== void 0 && r[s] !== null && (this[s] = s === "history" ? [...r[s]] : r[s])
        }
        let o;
        for (o in r)
            Vl.includes(o) || (this[o] = r[o])
    }
    get basename() {
        return typeof this.path == "string" ? ht.basename(this.path) : void 0
    }
    set basename(i) {
        Yl(i, "basename"),
        Kl(i, "basename"),
        this.path = ht.join(this.dirname || "", i)
    }
    get dirname() {
        return typeof this.path == "string" ? ht.dirname(this.path) : void 0
    }
    set dirname(i) {
        lf(this.basename, "dirname"),
        this.path = ht.join(i || "", this.basename)
    }
    get extname() {
        return typeof this.path == "string" ? ht.extname(this.path) : void 0
    }
    set extname(i) {
        if (Kl(i, "extname"),
        lf(this.dirname, "extname"),
        i) {
            if (i.codePointAt(0) !== 46)
                throw new Error("`extname` must start with `.`");
            if (i.includes(".", 1))
                throw new Error("`extname` cannot contain multiple dots")
        }
        this.path = ht.join(this.dirname, this.stem + (i || ""))
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(i) {
        co(i) && (i = M_(i)),
        Yl(i, "path"),
        this.path !== i && this.history.push(i)
    }
    get stem() {
        return typeof this.path == "string" ? ht.basename(this.path, this.extname) : void 0
    }
    set stem(i) {
        Yl(i, "stem"),
        Kl(i, "stem"),
        this.path = ht.join(this.dirname || "", i + (this.extname || ""))
    }
    fail(i, r, l) {
        const o = this.message(i, r, l);
        throw o.fatal = !0,
        o
    }
    info(i, r, l) {
        const o = this.message(i, r, l);
        return o.fatal = void 0,
        o
    }
    message(i, r, l) {
        const o = new dn(i,r,l);
        return this.path && (o.name = this.path + ":" + o.name,
        o.file = this.path),
        o.fatal = !1,
        this.messages.push(o),
        o
    }
    toString(i) {
        return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(i || void 0).decode(this.value)
    }
}
function Kl(n, i) {
    if (n && n.includes(ht.sep))
        throw new Error("`" + i + "` cannot be a path: did not expect `" + ht.sep + "`")
}
function Yl(n, i) {
    if (!n)
        throw new Error("`" + i + "` cannot be empty")
}
function lf(n, i) {
    if (!n)
        throw new Error("Setting `" + i + "` requires `path` to be set too")
}
function F_(n) {
    return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n)
}
const z_ = function(n) {
    const l = this.constructor.prototype
      , o = l[n]
      , s = function() {
        return o.apply(s, arguments)
    };
    Object.setPrototypeOf(s, l);
    const c = Object.getOwnPropertyNames(o);
    for (const f of c) {
        const p = Object.getOwnPropertyDescriptor(o, f);
        p && Object.defineProperty(s, f, p)
    }
    return s
}
  , B_ = {}.hasOwnProperty;
class Fo extends z_ {
    constructor() {
        super("copy"),
        this.Compiler = void 0,
        this.Parser = void 0,
        this.attachers = [],
        this.compiler = void 0,
        this.freezeIndex = -1,
        this.frozen = void 0,
        this.namespace = {},
        this.parser = void 0,
        this.transformers = E_()
    }
    copy() {
        const i = new Fo;
        let r = -1;
        for (; ++r < this.attachers.length; ) {
            const l = this.attachers[r];
            i.use(...l)
        }
        return i.data(Gl(!0, {}, this.namespace)),
        i
    }
    data(i, r) {
        return typeof i == "string" ? arguments.length === 2 ? (Ql("data", this.frozen),
        this.namespace[i] = r,
        this) : B_.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (Ql("data", this.frozen),
        this.namespace = i,
        this) : this.namespace
    }
    freeze() {
        if (this.frozen)
            return this;
        const i = this;
        for (; ++this.freezeIndex < this.attachers.length; ) {
            const [r,...l] = this.attachers[this.freezeIndex];
            if (l[0] === !1)
                continue;
            l[0] === !0 && (l[0] = void 0);
            const o = r.call(i, ...l);
            typeof o == "function" && this.transformers.use(o)
        }
        return this.frozen = !0,
        this.freezeIndex = Number.POSITIVE_INFINITY,
        this
    }
    parse(i) {
        this.freeze();
        const r = ta(i)
          , l = this.parser || this.Parser;
        return Xl("parse", l),
        l(String(r), r)
    }
    process(i, r) {
        const l = this;
        return this.freeze(),
        Xl("process", this.parser || this.Parser),
        Zl("process", this.compiler || this.Compiler),
        r ? o(void 0, r) : new Promise(o);
        function o(s, c) {
            const f = ta(i)
              , p = l.parse(f);
            l.run(p, f, function(x, y, k) {
                if (x || !y || !k)
                    return g(x);
                const v = y
                  , I = l.stringify(v, k);
                H_(I) ? k.value = I : k.result = I,
                g(x, k)
            });
            function g(x, y) {
                x || !y ? c(x) : s ? s(y) : r(void 0, y)
            }
        }
    }
    processSync(i) {
        let r = !1, l;
        return this.freeze(),
        Xl("processSync", this.parser || this.Parser),
        Zl("processSync", this.compiler || this.Compiler),
        this.process(i, o),
        sf("processSync", "process", r),
        l;
        function o(s, c) {
            r = !0,
            Qc(s),
            l = c
        }
    }
    run(i, r, l) {
        of(i),
        this.freeze();
        const o = this.transformers;
        return !l && typeof r == "function" && (l = r,
        r = void 0),
        l ? s(void 0, l) : new Promise(s);
        function s(c, f) {
            const p = ta(r);
            o.run(i, p, g);
            function g(x, y, k) {
                const v = y || i;
                x ? f(x) : c ? c(v) : l(void 0, v, k)
            }
        }
    }
    runSync(i, r) {
        let l = !1, o;
        return this.run(i, r, s),
        sf("runSync", "run", l),
        o;
        function s(c, f) {
            Qc(c),
            o = f,
            l = !0
        }
    }
    stringify(i, r) {
        this.freeze();
        const l = ta(r)
          , o = this.compiler || this.Compiler;
        return Zl("stringify", o),
        of(i),
        o(i, l)
    }
    use(i, ...r) {
        const l = this.attachers
          , o = this.namespace;
        if (Ql("use", this.frozen),
        i != null)
            if (typeof i == "function")
                p(i, r);
            else if (typeof i == "object")
                Array.isArray(i) ? f(i) : c(i);
            else
                throw new TypeError("Expected usable value, not `" + i + "`");
        return this;
        function s(g) {
            if (typeof g == "function")
                p(g, []);
            else if (typeof g == "object")
                if (Array.isArray(g)) {
                    const [x,...y] = g;
                    p(x, y)
                } else
                    c(g);
            else
                throw new TypeError("Expected usable value, not `" + g + "`")
        }
        function c(g) {
            if (!("plugins" in g) && !("settings" in g))
                throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            f(g.plugins),
            g.settings && (o.settings = Gl(!0, o.settings, g.settings))
        }
        function f(g) {
            let x = -1;
            if (g != null)
                if (Array.isArray(g))
                    for (; ++x < g.length; ) {
                        const y = g[x];
                        s(y)
                    }
                else
                    throw new TypeError("Expected a list of plugins, not `" + g + "`")
        }
        function p(g, x) {
            let y = -1
              , k = -1;
            for (; ++y < l.length; )
                if (l[y][0] === g) {
                    k = y;
                    break
                }
            if (k === -1)
                l.push([g, ...x]);
            else if (x.length > 0) {
                let[v,...I] = x;
                const N = l[k][1];
                uo(N) && uo(v) && (v = Gl(!0, N, v)),
                l[k] = [g, v, ...I]
            }
        }
    }
}
const $_ = new Fo().freeze();
function Xl(n, i) {
    if (typeof i != "function")
        throw new TypeError("Cannot `" + n + "` without `parser`")
}
function Zl(n, i) {
    if (typeof i != "function")
        throw new TypeError("Cannot `" + n + "` without `compiler`")
}
function Ql(n, i) {
    if (i)
        throw new Error("Cannot call `" + n + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}
function of(n) {
    if (!uo(n) || typeof n.type != "string")
        throw new TypeError("Expected node, got `" + n + "`")
}
function sf(n, i, r) {
    if (!r)
        throw new Error("`" + n + "` finished async. Use `" + i + "` instead")
}
function ta(n) {
    return U_(n) ? n : new Ch(n)
}
function U_(n) {
    return !!(n && typeof n == "object" && "message" in n && "messages" in n)
}
function H_(n) {
    return typeof n == "string" || W_(n)
}
function W_(n) {
    return !!(n && typeof n == "object" && "byteLength" in n && "byteOffset" in n)
}
const q_ = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md"
  , uf = []
  , cf = {
    allowDangerousHtml: !0
}
  , G_ = /^(https?|ircs?|mailto|xmpp)$/i
  , V_ = [{
    from: "astPlugins",
    id: "remove-buggy-html-in-markdown-parser"
}, {
    from: "allowDangerousHtml",
    id: "remove-buggy-html-in-markdown-parser"
}, {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
}, {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
}, {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
}, {
    from: "escapeHtml",
    id: "remove-buggy-html-in-markdown-parser"
}, {
    from: "includeElementIndex",
    id: "#remove-includeelementindex"
}, {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
}, {
    from: "linkTarget",
    id: "remove-linktarget"
}, {
    from: "plugins",
    id: "change-plugins-to-remarkplugins",
    to: "remarkPlugins"
}, {
    from: "rawSourcePos",
    id: "#remove-rawsourcepos"
}, {
    from: "renderers",
    id: "change-renderers-to-components",
    to: "components"
}, {
    from: "source",
    id: "change-source-to-children",
    to: "children"
}, {
    from: "sourcePos",
    id: "#remove-sourcepos"
}, {
    from: "transformImageUri",
    id: "#add-urltransform",
    to: "urlTransform"
}, {
    from: "transformLinkUri",
    id: "#add-urltransform",
    to: "urlTransform"
}];
function Eh(n) {
    const i = n.allowedElements
      , r = n.allowElement
      , l = n.children || ""
      , o = n.className
      , s = n.components
      , c = n.disallowedElements
      , f = n.rehypePlugins || uf
      , p = n.remarkPlugins || uf
      , g = n.remarkRehypeOptions ? {
        ...n.remarkRehypeOptions,
        ...cf
    } : cf
      , x = n.skipHtml
      , y = n.unwrapDisallowed
      , k = n.urlTransform || K_
      , v = $_().use(Iw).use(p).use(k_, g).use(f)
      , I = new Ch;
    typeof l == "string" && (I.value = l);
    for (const W of V_)
        Object.hasOwn(n, W.from) && ("" + W.from + (W.to ? "use `" + W.to + "` instead" : "remove it") + q_ + W.id,
        void 0);
    const N = v.parse(I);
    let $ = v.runSync(N, I);
    return o && ($ = {
        type: "element",
        tagName: "div",
        properties: {
            className: o
        },
        children: $.type === "root" ? $.children : [$]
    }),
    Sh($, M),
    sv($, {
        Fragment: w.Fragment,
        components: s,
        ignoreInvalidStyle: !0,
        jsx: w.jsx,
        jsxs: w.jsxs,
        passKeys: !0,
        passNode: !0
    });
    function M(W, z, J) {
        if (W.type === "raw" && J && typeof z == "number")
            return x ? J.children.splice(z, 1) : J.children[z] = {
                type: "text",
                value: W.value
            },
            z;
        if (W.type === "element") {
            let Y;
            for (Y in Hl)
                if (Object.hasOwn(Hl, Y) && Object.hasOwn(W.properties, Y)) {
                    const P = W.properties[Y]
                      , V = Hl[Y];
                    (V === null || V.includes(W.tagName)) && (W.properties[Y] = k(String(P || ""), Y, W))
                }
        }
        if (W.type === "element") {
            let Y = i ? !i.includes(W.tagName) : c ? c.includes(W.tagName) : !1;
            if (!Y && r && typeof z == "number" && (Y = !r(W, z, J)),
            Y && J && typeof z == "number")
                return y && W.children ? J.children.splice(z, 1, ...W.children) : J.children.splice(z, 1),
                z
        }
    }
}
function K_(n) {
    const i = n.indexOf(":")
      , r = n.indexOf("?")
      , l = n.indexOf("#")
      , o = n.indexOf("/");
    return i === -1 || o !== -1 && i > o || r !== -1 && i > r || l !== -1 && i > l || G_.test(n.slice(0, i)) ? n : ""
}
const ff = ({announcement: n}) => {
    const {primaryCampus: i} = Cr()
      , {title: r, publishedAt: l, author: o, text: s} = n
      , c = new Date(l);
    return w.jsxs("div", {
        className: "w-full flex flex-row gap-8 py-4 px-8 items-center",
        children: [w.jsx(vc, {
            strokeWidth: 1,
            size: 35,
            className: "text-legacy-main hidden lg:block"
        }), w.jsxs("div", {
            className: "flex flex-col text-sm w-full gap-1",
            children: [w.jsxs("div", {
                className: "flex flex-row gap-4",
                children: [w.jsx(vc, {
                    strokeWidth: 1,
                    size: 35,
                    className: "text-legacy-main lg:hidden"
                }), w.jsxs("div", {
                    className: "flex flex-col lg:flex-row justify-between w-full",
                    children: [w.jsx("div", {
                        className: "text-legacy-main font-bold uppercase",
                        children: r
                    }), w.jsx("div", {
                        className: "text-neutral-600",
                        children: w.jsx(wo, {
                            delayDuration: 0,
                            children: w.jsxs(_o, {
                                children: [w.jsx(So, {
                                    className: "cursor-default",
                                    children: w.jsxs("span", {
                                        className: "flex flex-row items-center gap-2 ",
                                        children: [w.jsx($f, {
                                            size: 15
                                        }), w.jsxs("span", {
                                            children: [fa(er(c, i == null ? void 0 : i.timeZone), {
                                                addSuffix: !0
                                            }), " by ", o]
                                        })]
                                    })
                                }), w.jsx(ko, {
                                    side: "left",
                                    className: "bg-ft-gray text-white",
                                    children: Rf(c)
                                })]
                            })
                        })
                    })]
                })]
            }), w.jsx(Eh, {
                children: s == null ? void 0 : s.toString()
            })]
        })]
    })
}
;
var Y_ = Object.defineProperty
  , X_ = Object.defineProperties
  , Z_ = Object.getOwnPropertyDescriptors
  , hf = Object.getOwnPropertySymbols
  , Q_ = Object.prototype.hasOwnProperty
  , J_ = Object.prototype.propertyIsEnumerable
  , eS = Math.pow
  , pf = (n, i, r) => i in n ? Y_(n, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : n[i] = r
  , wn = (n, i) => {
    for (var r in i || (i = {}))
        Q_.call(i, r) && pf(n, r, i[r]);
    if (hf)
        for (var r of hf(i))
            J_.call(i, r) && pf(n, r, i[r]);
    return n
}
  , fo = (n, i) => X_(n, Z_(i))
  , nS = (n, i, r) => {
    const [l,o] = G.useState()
      , s = G.useRef(r);
    return G.useEffect( () => {
        s.current = r
    }
    , [r]),
    G.useEffect( () => {
        const c = n == null ? void 0 : n.current
          , f = i == null ? void 0 : i.current;
        if (!window.IntersectionObserver || !c || !f)
            return;
        const p = new IntersectionObserver(g => {
            g.forEach(x => {
                o(x),
                s.current(x)
            }
            )
        }
        ,{
            threshold: [.05, .95],
            root: f
        });
        return p.observe(c),
        () => p.disconnect()
    }
    , [n, i]),
    l
}
  , tS = (n, i) => `${i ? 100 / (3 * n) : 100 / n}%`
  , rS = (n, i, r, l, o, s, c, f, p, g, x) => {
    const y = x ?? tS(n, l)
      , k = r ? 1 : 0
      , v = s === "fade" ? 200 : 500;
    let I = "auto";
    return p && (g ? I = "100%" : r ? I = "auto" : I = "0"),
    {
        width: y,
        height: I,
        padding: `0 ${o ? o / 2 : 0}px`,
        transition: s ? `${c || v}ms ease 0s` : void 0,
        transform: s === "zoom" ? `scale(${i && r ? 1 : f || .85})` : void 0,
        opacity: s === "fade" ? k : 1
    }
}
  , iS = (n, i, r) => r === "prev-cloned" ? n - i : r === "next-cloned" ? n + i : n
  , aS = ({count: n, children: i, index: r, isCurrentSlide: l, typeOfSlide: o, wrapAround: s, cellSpacing: c, slideWidth: f, animation: p, speed: g, zoomScale: x, onVisibleSlideHeightChange: y, adaptiveHeight: k, initializedAdaptiveHeight: v, updateIOEntry: I, id: N, carouselRef: $}) => {
    var M;
    const W = s ? iS(r, n, o) : r
      , z = G.useRef(null)
      , J = nS(z, $, ie => {
        I(N, (ie == null ? void 0 : ie.intersectionRatio) >= .95)
    }
    )
      , Y = !!(J != null && J.isIntersecting)
      , P = ((M = J == null ? void 0 : J.intersectionRatio) != null ? M : 1) >= .95
      , V = G.useRef(!1);
    G.useEffect( () => {
        var ie;
        const me = z.current;
        if (me) {
            const X = (ie = me.getBoundingClientRect()) == null ? void 0 : ie.height
              , U = V.current;
            Y && !U ? y(W, X) : !Y && U && y(W, null),
            V.current = Y
        }
    }
    , [W, Y, y]);
    const pe = l && P ? " slide-current" : "";
    return w.jsx("div", fo(wn({
        ref: z
    }, {
        inert: P ? void 0 : "true"
    }), {
        className: `slide${pe}${o ? ` ${o}` : ""}${P ? " slide-visible" : ""}`,
        style: rS(n, l, P, s, c, p, g, x, k, v, f),
        children: i
    }))
}
  , lS = aS
  , oS = {
    position: "absolute",
    width: "1px",
    height: "1px",
    overflow: "hidden",
    padding: 0,
    margin: "-1px",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0
}
  , sS = ({message: n, ariaLive: i="polite"}) => w.jsx("div", {
    "aria-live": i,
    "aria-atomic": "true",
    style: oS,
    tabIndex: -1,
    children: n
})
  , uS = ({currentSlide: n, count: i}) => `Slide ${n + 1} of ${i}`
  , cS = sS
  , df = (n, i, r, l, o, s, c) => i ? r + o : r >= l - 1 || c === "left" && r >= l - s ? r : n === "remainder" && c === "left" ? Math.min(r + o, l - s) : Math.min(r + o, l - 1)
  , gf = (n, i, r, l, o, s) => i ? r - l : r <= 0 || s === "right" && r <= o - 1 ? r : n === "remainder" && s === "right" ? Math.max(r - l, o - 1) : Math.max(r - l, 0)
  , fS = (n, i, r, l, o, s, c) => {
    if (n !== void 0)
        return n;
    const f = ga(i, l, c, r, !1, o);
    return s ? f[f.length - 1] : f[0]
}
  , Ah = (n, i) => (n % i + i) % i
  , Th = n => ({
    border: 0,
    background: "rgba(0,0,0,0.4)",
    color: "white",
    padding: 10,
    textTransform: "uppercase",
    opacity: n ? .3 : 1,
    cursor: n ? "not-allowed" : "pointer"
})
  , hS = ({cellAlign: n, currentSlide: i, slidesToShow: r, wrapAround: l}) => l ? !1 : i === 0 || n === "right" && i <= r - 1
  , pS = ({previousSlide: n, defaultControlsConfig: {prevButtonClassName: i, prevButtonStyle: r={}, prevButtonText: l, prevButtonOnClick: o}, onUserNavigation: s, previousDisabled: c}) => {
    const f = p => {
        o == null || o(p),
        !p.defaultPrevented && (s(p),
        p.preventDefault(),
        n())
    }
    ;
    return w.jsx("button", {
        className: i,
        style: wn(wn({}, Th(c)), r),
        disabled: c,
        onClick: f,
        "aria-label": "previous",
        type: "button",
        children: l || "Prev"
    })
}
  , dS = ({cellAlign: n, currentSlide: i, slideCount: r, slidesToShow: l, wrapAround: o}) => o ? !1 : i >= r - 1 || n === "left" && i >= r - l
  , gS = ({nextSlide: n, defaultControlsConfig: {nextButtonClassName: i, nextButtonStyle: r={}, nextButtonText: l, nextButtonOnClick: o}, nextDisabled: s, onUserNavigation: c}) => {
    const f = p => {
        o == null || o(p),
        !p.defaultPrevented && (c(p),
        p.preventDefault(),
        n())
    }
    ;
    return w.jsx("button", {
        className: i,
        style: wn(wn({}, Th(s)), r),
        disabled: s,
        onClick: f,
        "aria-label": "next",
        type: "button",
        children: l || "Next"
    })
}
  , ga = (n, i, r, l, o, s) => {
    const c = []
      , f = i <= 0 ? 1 : i;
    if (o) {
        for (let p = 0; p < n; p += f)
            c.push(p);
        return c
    }
    if (s === "center") {
        for (let p = 0; p < n - 1; p += f)
            c.push(p);
        return n > 0 && c.push(n - 1),
        c
    }
    if (s === "left") {
        if (l >= n)
            return [0];
        const p = n - l;
        for (let g = 0; g < p; g += f)
            c.push(g);
        return r === "remainder" ? c.push(p) : c.push(c[c.length - 1] + f),
        c
    }
    if (s === "right") {
        if (l >= n)
            return [n - 1];
        const p = l - 1;
        if (r === "remainder") {
            for (let g = p; g < n - 1; g += f)
                c.push(g);
            c.push(n - 1)
        } else {
            for (let g = n - 1; g > p; g -= f)
                c.push(g);
            c.push(c[c.length - 1] - f),
            c.reverse()
        }
        return c
    }
    return c
}
  , mS = ({pagingDotsIndices: n, defaultControlsConfig: {pagingDotsContainerClassName: i, pagingDotsClassName: r, pagingDotsStyle: l={}, pagingDotsOnClick: o}, currentSlide: s, onUserNavigation: c, slideCount: f, goToSlide: p}) => {
    const g = {
        position: "relative",
        top: -10,
        display: "flex",
        margin: 0,
        padding: 0,
        listStyleType: "none"
    }
      , x = G.useCallback(k => ({
        cursor: "pointer",
        opacity: k ? 1 : .5,
        background: "transparent",
        border: "none",
        fill: "black"
    }), [])
      , y = Ah(s, f);
    return w.jsx("ul", {
        className: i,
        style: g,
        children: n.map( (k, v) => {
            const I = y === k || y < k && (v === 0 || y > n[v - 1]);
            return w.jsx("li", {
                className: I ? "paging-item active" : "paging-item",
                children: w.jsx("button", {
                    className: r,
                    type: "button",
                    style: wn(wn({}, x(I)), l),
                    onClick: N => {
                        o == null || o(N),
                        !N.defaultPrevented && (c(N),
                        p(k))
                    }
                    ,
                    "aria-label": `slide ${k + 1} bullet`,
                    "aria-selected": I,
                    children: w.jsx("svg", {
                        className: "paging-dot",
                        width: "6",
                        height: "6",
                        "aria-hidden": "true",
                        focusable: "false",
                        viewBox: "0 0 6 6",
                        children: w.jsx("circle", {
                            cx: "3",
                            cy: "3",
                            r: "3"
                        })
                    })
                })
            }, k)
        }
        )
    })
}
  , xS = (n, i, r, l) => {
    const [o,s] = G.useState(1)
      , c = G.useRef(Date.now())
      , f = G.useRef()
      , p = G.useRef(!0)
      , g = G.useRef(null)
      , x = g.current === null || g.current === r || l ? o : 0;
    return G.useEffect( () => {
        if (g.current = r,
        p.current) {
            p.current = !1;
            return
        }
        if (l)
            return;
        c.current = Date.now(),
        s(0);
        const y = () => {
            f.current = requestAnimationFrame( () => {
                const k = Date.now()
                  , v = Math.min(1, (k - c.current) / n);
                s(v),
                v < 1 ? y() : f.current = void 0
            }
            )
        }
        ;
        return y(),
        () => {
            f.current !== void 0 && (cancelAnimationFrame(f.current),
            s(1))
        }
    }
    , [r, n, l]),
    {
        isAnimating: x !== 1,
        value: i(x)
    }
}
  , ho = (n, i, r, l, o) => {
    const s = o ? 3 * i : i
      , c = 100 / s;
    let f = o ? -100 / 3 : 0;
    if (l === "right" && r > 1) {
        const g = r - 1;
        f += c * g
    }
    if (l === "center" && r > 1) {
        const x = (r - 1) / 2;
        f += c * x
    }
    const p = 100 / s * n;
    return f - p
}
  , Ih = no.forwardRef( ({animation: n, animationDistance: i, cellAlign: r, children: l, currentSlide: o, disableAnimation: s, disableEdgeSwiping: c, draggedOffset: f, easing: p, edgeEasing: g, isDragging: x, scrollMode: y, slideCount: k, slidesToScroll: v, slidesToShow: I, speed: N, wrapAround: $, slideWidth: M, setIsAnimating: W}, z) => {
    const J = $ ? 3 * k : k
      , Y = M ? `calc(${M} * ${J})` : `${J * 100 / I}%`
      , P = [k, I, r, $]
      , V = ga(k, v, y, I, $, r);
    let pe = `${f}px`;
    if (x && c && !$) {
        const Se = [V[0], V[V.length - 1]].map(se => ho(se, ...P));
        pe = `clamp(${Se[1]}%, ${f}px, ${Se[0]}%)`
    }
    const ie = ho(o, ...P)
      , me = !c && !$ && (o === V[0] && i < 0 || o === V[V.length - 1] && i > 0)
      , {value: X, isAnimating: U} = xS(N, me ? g : p, o + i, x || s || n === "fade");
    let ye;
    if (x || ie !== 0 || U)
        if (x)
            ye = `translateX(${pe})`;
        else {
            const Se = U ? (1 - X) * i : 0;
            ye = `translateX(calc(${ie}% - ${Se}px))`
        }
    return G.useEffect( () => {
        W(U)
    }
    , [U, W]),
    w.jsx("div", {
        ref: z,
        className: "slider-list",
        style: {
            width: Y,
            textAlign: "left",
            userSelect: "auto",
            transform: ye,
            display: "flex"
        },
        children: l
    })
}
);
Ih.displayName = "SliderList";
var yS = {
    position: "absolute",
    display: "flex",
    zIndex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
}
  , vS = n => {
    let i;
    switch (n) {
    case "TopLeft":
    case "TopCenter":
    case "TopRight":
        i = "flex-start";
        break;
    case "CenterLeft":
    case "CenterCenter":
    case "CenterRight":
        i = "center";
        break;
    case "BottomLeft":
    case "BottomCenter":
    case "BottomRight":
        i = "flex-end";
        break
    }
    let r;
    switch (n) {
    case "TopLeft":
    case "CenterLeft":
    case "BottomLeft":
        r = "flex-start";
        break;
    case "TopCenter":
    case "CenterCenter":
    case "BottomCenter":
        r = "center";
        break;
    case "TopRight":
    case "CenterRight":
    case "BottomRight":
        r = "flex-end";
        break
    }
    return {
        alignItems: i,
        justifyContent: r
    }
}
  , bS = n => wn(wn({}, vS(n)), yS)
  , wS = [{
    funcName: "renderTopLeftControls",
    key: "TopLeft"
}, {
    funcName: "renderTopCenterControls",
    key: "TopCenter"
}, {
    funcName: "renderTopRightControls",
    key: "TopRight"
}, {
    funcName: "renderCenterLeftControls",
    key: "CenterLeft"
}, {
    funcName: "renderCenterCenterControls",
    key: "CenterCenter"
}, {
    funcName: "renderCenterRightControls",
    key: "CenterRight"
}, {
    funcName: "renderBottomLeftControls",
    key: "BottomLeft"
}, {
    funcName: "renderBottomCenterControls",
    key: "BottomCenter"
}, {
    funcName: "renderBottomRightControls",
    key: "BottomRight"
}]
  , _S = (n, i, r, l, o, s, c) => {
    if (n.withoutControls)
        return null;
    const f = fo(wn({}, n), {
        currentSlide: r,
        slideCount: i
    })
      , p = dS(f)
      , g = hS(f)
      , x = ga(i, c, n.scrollMode, n.slidesToShow, n.wrapAround, n.cellAlign);
    return wS.map(y => {
        var k;
        return !n[y.funcName] || typeof n[y.funcName] != "function" ? w.jsx(G.Fragment, {}, y.funcName) : w.jsx("div", {
            style: fo(wn({}, bS(y.key)), {
                pointerEvents: "none"
            }),
            children: w.jsx("div", {
                className: [`slider-control-${y.key.toLowerCase()}`, n.defaultControlsConfig.containerClassName || ""].join(" ").trim(),
                style: {
                    pointerEvents: "auto"
                },
                children: (k = n[y.funcName]) == null ? void 0 : k.call(n, {
                    cellAlign: n.cellAlign,
                    cellSpacing: n.cellSpacing,
                    currentSlide: r,
                    defaultControlsConfig: n.defaultControlsConfig || {},
                    pagingDotsIndices: x,
                    goToSlide: l,
                    nextDisabled: p,
                    nextSlide: o,
                    onUserNavigation: n.onUserNavigation,
                    previousDisabled: g,
                    previousSlide: s,
                    scrollMode: n.scrollMode,
                    slideCount: i,
                    slidesToScroll: c,
                    slidesToShow: n.slidesToShow || 1,
                    vertical: n.vertical,
                    wrapAround: n.wrapAround
                })
            })
        }, y.funcName)
    }
    )
}
  , SS = _S
  , mf = n => eS(n - 1, 3) + 1
  , kS = {
    adaptiveHeight: !1,
    adaptiveHeightAnimation: !0,
    afterSlide: () => {}
    ,
    autoplay: !1,
    autoplayInterval: 3e3,
    autoplayReverse: !1,
    beforeSlide: () => {}
    ,
    cellAlign: "left",
    cellSpacing: 0,
    defaultControlsConfig: {},
    disableAnimation: !1,
    disableEdgeSwiping: !1,
    dragging: !0,
    dragThreshold: .5,
    easing: mf,
    edgeEasing: mf,
    enableKeyboardControls: !1,
    frameAriaLabel: "carousel-slider",
    keyCodeConfig: {
        nextSlide: [39, 68, 38, 87],
        previousSlide: [37, 65, 40, 83],
        firstSlide: [81],
        lastSlide: [69],
        pause: [32]
    },
    onDragStart: () => {}
    ,
    onDrag: () => {}
    ,
    onDragEnd: () => {}
    ,
    onUserNavigation: () => {}
    ,
    pauseOnHover: !0,
    renderAnnounceSlideMessage: uS,
    renderBottomCenterControls: n => w.jsx(mS, wn({}, n)),
    renderCenterLeftControls: n => w.jsx(pS, wn({}, n)),
    renderCenterRightControls: n => w.jsx(gS, wn({}, n)),
    scrollMode: "page",
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    style: {},
    swiping: !0,
    vertical: !1,
    withoutControls: !1,
    wrapAround: !1,
    children: w.jsx(w.Fragment, {})
}
  , CS = kS
  , ES = n => {
    const [i,r] = G.useState(n)
      , l = G.useRef(n)
      , o = G.useCallback(s => {
        l.current = s,
        r(s)
    }
    , []);
    return [i, o, l]
}
  , AS = (n, i, r) => {
    const [l,o,s] = ES([])
      , [c,f] = G.useState(!1)
      , p = G.useCallback( (x, y) => {
        const k = s.current;
        let v;
        y === null ? v = k.filter(I => I.slideIndex !== x) : v = [...k, {
            slideIndex: x,
            height: y
        }],
        o(v),
        v.length >= Math.min(r, Math.ceil(i)) && f(!0)
    }
    , [r, o, i, s])
      , g = G.useMemo( () => n && c ? `${Math.max(0, ...l.map(y => y.height))}px` : "auto", [n, c, l]);
    return {
        handleVisibleSlideHeightChange: p,
        frameHeight: g,
        initializedAdaptiveHeight: c
    }
}
  , TS = n => {
    const i = G.useRef(null);
    return G.useEffect( () => {
        n && (typeof n == "function" ? n(i.current) : n.current = i.current)
    }
    , [n]),
    i
}
  , zo = no.forwardRef( (n, i) => {
    const r = n
      , {adaptiveHeight: l, adaptiveHeightAnimation: o, afterSlide: s, animation: c, autoplay: f, autoplayInterval: p, autoplayReverse: g, beforeSlide: x, cellAlign: y, cellSpacing: k, children: v, className: I, disableAnimation: N, dragging: $, dragThreshold: M, enableKeyboardControls: W, frameAriaLabel: z, keyCodeConfig: J, onDrag: Y, onDragEnd: P, onDragStart: V, onUserNavigation: pe, pauseOnHover: ie, renderAnnounceSlideMessage: me, scrollMode: X, slideIndex: U, slidesToScroll: ye, slidesToShow: Se, slideWidth: se, speed: Be, style: Ee, swiping: $e, wrapAround: Te, zoomScale: S} = r
      , Re = no.Children.toArray(v).filter(Boolean)
      , Ie = Re.length
      , _ = se || ye === "auto" ? "left" : y
      , Ue = ye === "auto" ? "remainder" : X
      , [tn,je] = G.useState(new Map)
      , Qn = Array.from(tn).filter( ([,Z]) => Z).length
      , [ln,_n] = G.useState(Qn)
      , Ne = se ? ln : Se
      , Ve = c === "fade" ? Ne : ye === "auto" ? Math.max(ln, 1) : ye
      , [He,rr] = G.useState( () => fS(U, Ie, Ne, Ve, _, g, Ue))
      , [Ke,Bn] = G.useState(!1)
      , [fn,mn] = G.useState(!1)
      , [Jn,$t] = G.useState(0)
      , [gt,xn] = G.useState(0)
      , [lt,At] = G.useState(!1)
      , Lr = G.useCallback( (Z, Oe) => {
        !!tn.get(Z) !== Oe && je(Fe => {
            const Ze = new Map(Fe);
            return Ze.set(Z, Oe),
            Ze
        }
        )
    }
    , [tn])
      , O = G.useRef(!1);
    G.useEffect( () => {
        fn && (O.current = !0),
        fn || lt || (O.current || _n(Qn),
        O.current = !1)
    }
    , [lt, fn, Qn]);
    const B = G.useRef(null)
      , Q = G.useRef(0)
      , ee = G.useRef(null)
      , be = G.useRef(null)
      , Je = G.useRef()
      , on = G.useRef(null)
      , sn = G.useRef(!0)
      , et = G.useCallback(Z => {
        Z && Z.querySelectorAll(".slider-list img").forEach(Oe => Oe.setAttribute("draggable", "false")),
        ee.current = Z
    }
    , []);
    G.useEffect( () => (sn.current = !0,
    () => {
        sn.current = !1
    }
    ), []);
    const de = TS(i) || be
      , qe = G.useCallback(Z => {
        if (!ee.current || !de.current)
            return;
        const Oe = Ah(Z, Ie)
          , Fe = Z !== He;
        Fe && x(He, Oe);
        const Ze = ee.current.getBoundingClientRect().left - de.current.getBoundingClientRect().left
          , st = ee.current.offsetWidth;
        let lr = ho(Oe, Ie, Ne, _, Te) / 100 * st;
        if (Te) {
            const Ut = st / 3;
            Z < 0 && (lr += Ut),
            Z >= Ie && (lr -= Ut)
        }
        xn(lr - Ze),
        Fe && (rr(Oe),
        setTimeout( () => {
            sn.current && s(Oe)
        }
        , N ? 40 : Be || 500))
    }
    , [s, x, de, _, He, N, Be, Ie, Ne, Te])
      , rn = G.useCallback( () => {
        const Z = df(Ue, Te, He, Ie, Ve, Ne, _);
        He !== Z && qe(Z)
    }
    , [_, He, qe, Ve, Ue, Ie, Ne, Te])
      , ir = G.useCallback( () => {
        const Z = gf(Ue, Te, He, Ve, Ne, _);
        He !== Z && qe(Z)
    }
    , [_, He, qe, Ve, Ue, Ne, Te])
      , si = G.useRef(U);
    G.useEffect( () => {
        U !== void 0 && U !== si.current && !g && (qe(U),
        si.current = U)
    }
    , [U, g, qe]),
    G.useEffect( () => {
        let Z = null;
        return Ke && (Z = Date.now()),
        () => {
            Z !== null && on.current !== null && (on.current += Date.now() - Z)
        }
    }
    , [Ke]),
    G.useEffect( () => {
        if (f && !Ke) {
            const Z = on.current !== null ? p - (Date.now() - on.current) : p;
            Je.current = setTimeout( () => {
                on.current = Date.now(),
                g ? ir() : rn()
            }
            , Z)
        }
        return f && Ke && clearTimeout(Je.current),
        () => {
            clearTimeout(Je.current)
        }
    }
    , [Ke, f, p, g, ir, rn]);
    const wa = Z => {
        let Oe = null;
        if (Object.keys(J).forEach(Fe => {
            var Ze;
            (Ze = J[Fe]) != null && Ze.includes(Z.keyCode) && (Oe = Fe)
        }
        ),
        Oe !== null)
            switch (Z.preventDefault(),
            Z.stopPropagation(),
            Oe) {
            case "nextSlide":
                pe(Z),
                rn();
                break;
            case "previousSlide":
                pe(Z),
                ir();
                break;
            case "firstSlide":
            case "lastSlide":
                {
                    pe(Z);
                    const Fe = ga(Ie, Ve, Ue, Ne, Te, _);
                    qe(Oe === "firstSlide" ? Fe[0] : Fe[Fe.length - 1]);
                    break
                }
            case "pause":
                Bn(Fe => !Fe);
                break
            }
    }
      , $n = G.useRef([])
      , Pr = Z => {
        if (!fn || !de.current)
            return;
        mn(!1);
        let Oe = 0;
        if ($n.current.length > 1) {
            const Ht = $n.current[0]
              , fi = $n.current[$n.current.length - 1]
              , Ta = fi.time - Ht.time
              , Ia = 9
              , Oa = .92;
            let Tt = Ia * Math.abs((fi.pos - Ht.pos) / Ta);
            for (; Math.abs(Tt) > 1; )
                Oe += Tt,
                Tt *= Oa
        }
        $n.current = [];
        const Fe = Math.abs(Jn) + Math.abs(Oe);
        P(Z),
        B.current = null,
        $t(0);
        const Ze = de.current.offsetWidth * Math.min(1, Ve / Ne)
          , st = Ze * M;
        if (Fe < st) {
            qe(He);
            return
        }
        const Ut = Ne >= 2 * Ve ? 1 + Math.floor((Fe - st) / Ze) : 1;
        let mt = He;
        for (let Ht = 0; Ht < Ut; Ht += 1)
            Jn > 0 ? mt = df(Ue, Te, mt, Ie, Ve, Ne, _) : mt = gf(Ue, Te, mt, Ve, Ne, _);
        mt !== He && pe(Z),
        qe(mt)
    }
      , _a = G.useCallback(Z => {
        !$e || !ee.current || !de.current || (mn(!0),
        Q.current = ee.current.getBoundingClientRect().left - de.current.getBoundingClientRect().left,
        V(Z))
    }
    , [de, V, $e])
      , ar = G.useCallback(Z => {
        if (!fn)
            return;
        const Oe = B.current === null
          , Fe = B.current !== null ? Z - B.current : 0
          , Ze = Jn + Fe
          , st = Date.now();
        for (; $n.current.length > 0 && !(st - $n.current[0].time <= 100); )
            $n.current.shift();
        $n.current.push({
            pos: Ze,
            time: st
        }),
        Oe || $t(Ze),
        B.current = Z
    }
    , [fn, Jn])
      , Sa = G.useCallback(Z => {
        if (!fn || !de.current)
            return;
        V(Z);
        const Oe = de.current.offsetWidth - Z.touches[0].pageX;
        ar(Oe)
    }
    , [fn, de, ar, V])
      , ka = G.useCallback(Z => {
        !$ || !ee.current || !de.current || (mn(!0),
        Q.current = ee.current.getBoundingClientRect().left - de.current.getBoundingClientRect().left,
        V(Z))
    }
    , [de, $, V])
      , ui = G.useCallback(Z => {
        if (!fn || !de.current)
            return;
        Y(Z);
        const Oe = Z.clientX - de.current.getBoundingClientRect().left
          , Fe = de.current.offsetWidth - Oe;
        ar(Fe)
    }
    , [de, fn, ar, Y])
      , ci = Z => {
        Z.preventDefault(),
        Pr(Z)
    }
      , Ca = G.useCallback( () => {
        ie && Bn(!0)
    }
    , [ie])
      , Ea = G.useCallback( () => {
        ie && Bn(!1)
    }
    , [ie])
      , {frameHeight: Dr, handleVisibleSlideHeightChange: Aa, initializedAdaptiveHeight: Rr} = AS(l, Ne, Ie)
      , Nr = Z => Re.map( (Fe, Ze) => w.jsx(lS, {
        id: `${Z}-${Ze}`,
        count: Ie,
        index: Ze,
        isCurrentSlide: He === Ze,
        typeOfSlide: Z,
        wrapAround: Te,
        cellSpacing: k,
        animation: c,
        speed: Be,
        zoomScale: S,
        onVisibleSlideHeightChange: Aa,
        slideWidth: se,
        updateIOEntry: Lr,
        adaptiveHeight: l,
        initializedAdaptiveHeight: Rr,
        carouselRef: de,
        children: Fe
    }, `${Z}-${Ze}`));
    return w.jsxs("div", {
        className: "slider-container",
        style: {
            position: "relative"
        },
        onMouseEnter: Ca,
        onMouseLeave: Ea,
        children: [w.jsx(cS, {
            ariaLive: f && !Ke ? "off" : "polite",
            message: me({
                currentSlide: He,
                count: Ie
            })
        }), SS(r, Ie, He, qe, rn, ir, Ve), w.jsx("div", {
            className: ["slider-frame", I || ""].join(" ").trim(),
            style: wn({
                overflow: "hidden",
                width: "100%",
                position: "relative",
                outline: "none",
                touchAction: "pan-y",
                height: Dr,
                transition: o ? "height 300ms ease-in-out" : void 0,
                willChange: "height",
                userSelect: "none"
            }, Ee),
            "aria-label": z,
            role: "region",
            tabIndex: W ? 0 : -1,
            onKeyDown: W ? wa : void 0,
            ref: de,
            onMouseUp: ci,
            onMouseDown: ka,
            onMouseMove: ui,
            onMouseLeave: ci,
            onTouchStart: _a,
            onTouchEnd: Pr,
            onTouchMove: Sa,
            children: w.jsxs(Ih, {
                animationDistance: gt,
                cellAlign: _,
                currentSlide: He,
                disableEdgeSwiping: r.disableEdgeSwiping,
                draggedOffset: Q.current - Jn,
                disableAnimation: N,
                easing: r.easing,
                edgeEasing: r.edgeEasing,
                isDragging: fn,
                ref: et,
                scrollMode: Ue,
                animation: c,
                slideCount: Ie,
                slidesToScroll: Ve,
                slidesToShow: Ne,
                speed: Be,
                slideWidth: se,
                wrapAround: Te,
                setIsAnimating: At,
                children: [Te ? Nr("prev-cloned") : null, Nr(), Te ? Nr("next-cloned") : null]
            })
        })]
    })
}
);
zo.defaultProps = CS;
zo.displayName = "Carousel";
const IS = ({children: n, ...i}) => w.jsx(zo, {
    ...i,
    renderCenterLeftControls: null,
    renderCenterRightControls: null,
    renderBottomLeftControls: OS,
    renderBottomRightControls: LS,
    renderBottomCenterControls: PS,
    className: po("hover:cursor-grab ", i.className),
    children: n
})
  , OS = n => w.jsx("button", {
    type: "button",
    onClick: n.previousSlide,
    disabled: n.previousDisabled,
    "aria-label": "Previous slide",
    className: "ml-8",
    children: w.jsx(y0, {
        size: 25,
        strokeWidth: 4,
        className: n.previousDisabled ? "text-zinc-200" : "text-zinc-600"
    })
})
  , LS = n => w.jsx("button", {
    type: "button",
    onClick: n.nextSlide,
    disabled: n.nextDisabled,
    "aria-label": "Next slide",
    className: "mr-8",
    children: w.jsx(Q1, {
        size: 25,
        strokeWidth: 4,
        className: n.nextDisabled ? "text-zinc-200" : "text-zinc-600"
    })
})
  , PS = n => w.jsx("ul", {
    className: "flex p-0 list-none",
    children: n.pagingDotsIndices.map(i => w.jsx("li", {
        children: w.jsx("button", {
            type: "button",
            onClick: () => n.goToSlide(i),
            "aria-label": `Go to slide ${i + 1}`,
            "aria-selected": n.currentSlide === i,
            children: w.jsx(v0, {
                size: 25,
                strokeWidth: 4,
                className: n.currentSlide === i ? "text-zinc-600" : "text-zinc-200"
            })
        })
    }, i))
})
  , DS = () => {
    const {user: n} = zn();
    return ri({
        queryKey: ["v2", "announcements"],
        queryFn: async () => {
            const l = new URL("/api/v1/users/me/announcements","https://intrapy.intra.42.fr")
              , o = new Headers;
            o.append("Content-Type", "application/json"),
            o.append("Authorization", `Bearer ${(n == null ? void 0 : n.access_token) || ""}`);
            const s = await fetch(l, {
                headers: o,
                method: "GET"
            })
              , c = await s.json();
            if (!s.ok)
                throw new Error(`Error while fetching announcements: ${s.status} - ${s.statusText} - ${c.detail}`);
            return ca(c)
        }
        ,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1
    })
}
  , RS = () => {
    const {data: n} = DS()
      , r = [{
        announcement: {
            id: 0,
            title: "Maintenance",
            author: "42 tech team",
            text: `# Maintenance Announcement

Dear students,

We want to inform you about an upcoming maintenance.

- June 18th from 6:00 PM to 9:00 PM (UTC)

During the vast majority of this period, Intranet and Apply services won’t be available.

We appreciate your understanding.

`,
            publishedAt: "2025/6/11"
        },
        startDate: new Date(Date.UTC(2025, 5, 11, 8, 0, 0)),
        endDate: new Date(Date.UTC(2025, 5, 18, 23, 0, 0))
    }]
      , l = new Date
      , o = [...r.filter(s => l >= s.startDate && l < s.endDate).map(s => s.announcement), ...n || []];
    return !o || o.length === 0 ? null : w.jsx("div", {
        children: o.length === 1 ? w.jsx("div", {
            className: "border-b-2 border-legacy-main",
            children: w.jsx(ff, {
                announcement: o[0]
            })
        }) : w.jsx(IS, {
            wrapAround: !0,
            autoplay: !0,
            autoplayInterval: 1e4,
            className: "border-b-2 border-legacy-main pb-4",
            children: o.map(s => w.jsx(ff, {
                announcement: s
            }, s.id))
        })
    })
}
  , NS = ({reason: n, endAt: i}) => {
    const r = i && new Date(i)
      , {primaryCampus: l} = Cr()
      , o = (l == null ? void 0 : l.timeZone) || Intl.DateTimeFormat().resolvedOptions().timeZone;
    return w.jsxs("div", {
        className: "w-full p-8 border-b-2 flex flex-row gap-4 border-b-legacy-main items-center close",
        children: [w.jsx(w0, {
            size: 32,
            className: "text-legacy-destructive"
        }), w.jsxs("div", {
            className: "text-md flex flex-col gap-2",
            children: [w.jsxs("p", {
                children: ["You won't be able to access intranet's resources because of the following reason : ", w.jsx("span", {
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })]
            }), r && w.jsxs("p", {
                children: [w.jsx("span", {
                    children: "You will be unclose "
                }), w.jsx(wo, {
                    delayDuration: 0,
                    children: w.jsxs(_o, {
                        children: [w.jsx(So, {
                            children: w.jsx("span", {
                                className: "font-bold",
                                children: fa(_r(r), {
                                    addSuffix: !0
                                })
                            })
                        }), w.jsx(ko, {
                            className: "bg-zinc-800 text-white",
                            children: Rf(r)
                        })]
                    })
                }), w.jsxs("span", {
                    className: "md:hidden",
                    children: [" (", r.toLocaleTimeString(void 0, {
                        timeZone: o,
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    }), ") "]
                })]
            })]
        })]
    })
}
  , MS = "/api/v1"
  , jS = (n, i) => {
    try {
        const {detail: r} = JSON.parse(n);
        return typeof r == "string" ? r : i
    } catch {
        return i
    }
}
  , Oh = async (n, {method: i, accessToken: r}) => {
    const l = new URL(`${MS}${n}`,"https://nosedive.42.fr")
      , o = new Headers;
    o.append("Content-Type", "application/json"),
    o.append("Authorization", `Bearer ${r || ""}`);
    const s = await fetch(l.toString(), {
        headers: o,
        method: i
    })
      , c = await s.text();
    if (!s.ok)
        throw new Error(`Nosedive ${i} ${n}: ${s.status} ${jS(c, s.statusText)}`);
    return c ? JSON.parse(c) : null
}
  , Lh = ["nosedive", "surveys"]
  , FS = ({survey_id: n, kind: i, mandatory: r, tally: l}) => {
    const {hidden_fields: o, ...s} = l.options ?? {};
    return {
        surveyId: n,
        kind: i,
        mandatory: r,
        tally: {
            formId: l.form_id,
            options: l.options === void 0 ? void 0 : {
                ...s,
                hiddenFields: o
            }
        }
    }
}
  , zS = n => n.map(FS)
  , BS = ({enabled: n=!0}={}) => {
    const {user: i} = zn();
    return ri({
        queryKey: Lh,
        queryFn: async () => await Oh("/users/surveys", {
            method: "GET",
            accessToken: i == null ? void 0 : i.access_token
        }) ?? [],
        select: zS,
        enabled: n,
        retry: () => !1,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1
    })
}
  , $S = () => {
    const {user: n} = zn()
      , i = ii();
    return nr({
        mutationFn: async r => {
            await Oh(`/users/surveys/${encodeURIComponent(r)}/seen`, {
                method: "POST",
                accessToken: n == null ? void 0 : n.access_token
            })
        }
        ,
        retry: () => !1,
        onSuccess: async () => {
            await i.invalidateQueries({
                queryKey: Lh
            })
        }
        ,
        throwOnError: !1
    })
}
  , US = () => {
    const {data: n} = BS()
      , {mutate: i} = $S()
      , {openPopup: r} = J1()
      , [l,o] = G.useState(!1)
      , s = G.useRef(new Set);
    return G.useEffect( () => {
        l || !n || n.forEach(c => {
            !(c != null && c.tally.formId) || !c.tally.options || s.current.has(c.surveyId) || (s.current.add(c.surveyId),
            r(c.tally.formId, {
                ...c.tally.options,
                onOpen: () => {
                    i(c.surveyId)
                }
                ,
                onClose: () => {
                    setTimeout( () => {
                        document.body.style.removeProperty("overflow"),
                        o(!0)
                    }
                    , 100)
                }
            }))
        }
        )
    }
    , [l, n, r, i]),
    null
}
;
var HS = Array.isArray
  , ma = HS
  , WS = typeof at == "object" && at && at.Object === Object && at
  , qS = WS
  , GS = qS
  , VS = typeof self == "object" && self && self.Object === Object && self
  , KS = GS || VS || Function("return this")()
  , Bo = KS
  , YS = Bo
  , XS = YS.Symbol
  , xa = XS
  , xf = xa
  , Ph = Object.prototype
  , ZS = Ph.hasOwnProperty
  , QS = Ph.toString
  , Qr = xf ? xf.toStringTag : void 0;
function JS(n) {
    var i = ZS.call(n, Qr)
      , r = n[Qr];
    try {
        n[Qr] = void 0;
        var l = !0
    } catch {}
    var o = QS.call(n);
    return l && (i ? n[Qr] = r : delete n[Qr]),
    o
}
var ek = JS
  , nk = Object.prototype
  , tk = nk.toString;
function rk(n) {
    return tk.call(n)
}
var ik = rk
  , yf = xa
  , ak = ek
  , lk = ik
  , ok = "[object Null]"
  , sk = "[object Undefined]"
  , vf = yf ? yf.toStringTag : void 0;
function uk(n) {
    return n == null ? n === void 0 ? sk : ok : vf && vf in Object(n) ? ak(n) : lk(n)
}
var $o = uk;
function ck(n) {
    return n != null && typeof n == "object"
}
var Uo = ck
  , fk = $o
  , hk = Uo
  , pk = "[object Symbol]";
function dk(n) {
    return typeof n == "symbol" || hk(n) && fk(n) == pk
}
var Ho = dk
  , gk = ma
  , mk = Ho
  , xk = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
  , yk = /^\w*$/;
function vk(n, i) {
    if (gk(n))
        return !1;
    var r = typeof n;
    return r == "number" || r == "symbol" || r == "boolean" || n == null || mk(n) ? !0 : yk.test(n) || !xk.test(n) || i != null && n in Object(i)
}
var bk = vk;
function wk(n) {
    var i = typeof n;
    return n != null && (i == "object" || i == "function")
}
var Dh = wk
  , _k = $o
  , Sk = Dh
  , kk = "[object AsyncFunction]"
  , Ck = "[object Function]"
  , Ek = "[object GeneratorFunction]"
  , Ak = "[object Proxy]";
function Tk(n) {
    if (!Sk(n))
        return !1;
    var i = _k(n);
    return i == Ck || i == Ek || i == kk || i == Ak
}
var Ik = Tk
  , Ok = Bo
  , Lk = Ok["__core-js_shared__"]
  , Pk = Lk
  , Jl = Pk
  , bf = function() {
    var n = /[^.]+$/.exec(Jl && Jl.keys && Jl.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : ""
}();
function Dk(n) {
    return !!bf && bf in n
}
var Rk = Dk
  , Nk = Function.prototype
  , Mk = Nk.toString;
function jk(n) {
    if (n != null) {
        try {
            return Mk.call(n)
        } catch {}
        try {
            return n + ""
        } catch {}
    }
    return ""
}
var Fk = jk
  , zk = Ik
  , Bk = Rk
  , $k = Dh
  , Uk = Fk
  , Hk = /[\\^$.*+?()[\]{}|]/g
  , Wk = /^\[object .+?Constructor\]$/
  , qk = Function.prototype
  , Gk = Object.prototype
  , Vk = qk.toString
  , Kk = Gk.hasOwnProperty
  , Yk = RegExp("^" + Vk.call(Kk).replace(Hk, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Xk(n) {
    if (!$k(n) || Bk(n))
        return !1;
    var i = zk(n) ? Yk : Wk;
    return i.test(Uk(n))
}
var Zk = Xk;
function Qk(n, i) {
    return n == null ? void 0 : n[i]
}
var Jk = Qk
  , eC = Zk
  , nC = Jk;
function tC(n, i) {
    var r = nC(n, i);
    return eC(r) ? r : void 0
}
var Wo = tC
  , rC = Wo
  , iC = rC(Object, "create")
  , ya = iC
  , wf = ya;
function aC() {
    this.__data__ = wf ? wf(null) : {},
    this.size = 0
}
var lC = aC;
function oC(n) {
    var i = this.has(n) && delete this.__data__[n];
    return this.size -= i ? 1 : 0,
    i
}
var sC = oC
  , uC = ya
  , cC = "__lodash_hash_undefined__"
  , fC = Object.prototype
  , hC = fC.hasOwnProperty;
function pC(n) {
    var i = this.__data__;
    if (uC) {
        var r = i[n];
        return r === cC ? void 0 : r
    }
    return hC.call(i, n) ? i[n] : void 0
}
var dC = pC
  , gC = ya
  , mC = Object.prototype
  , xC = mC.hasOwnProperty;
function yC(n) {
    var i = this.__data__;
    return gC ? i[n] !== void 0 : xC.call(i, n)
}
var vC = yC
  , bC = ya
  , wC = "__lodash_hash_undefined__";
function _C(n, i) {
    var r = this.__data__;
    return this.size += this.has(n) ? 0 : 1,
    r[n] = bC && i === void 0 ? wC : i,
    this
}
var SC = _C
  , kC = lC
  , CC = sC
  , EC = dC
  , AC = vC
  , TC = SC;
function Tr(n) {
    var i = -1
      , r = n == null ? 0 : n.length;
    for (this.clear(); ++i < r; ) {
        var l = n[i];
        this.set(l[0], l[1])
    }
}
Tr.prototype.clear = kC;
Tr.prototype.delete = CC;
Tr.prototype.get = EC;
Tr.prototype.has = AC;
Tr.prototype.set = TC;
var IC = Tr;
function OC() {
    this.__data__ = [],
    this.size = 0
}
var LC = OC;
function PC(n, i) {
    return n === i || n !== n && i !== i
}
var DC = PC
  , RC = DC;
function NC(n, i) {
    for (var r = n.length; r--; )
        if (RC(n[r][0], i))
            return r;
    return -1
}
var va = NC
  , MC = va
  , jC = Array.prototype
  , FC = jC.splice;
function zC(n) {
    var i = this.__data__
      , r = MC(i, n);
    if (r < 0)
        return !1;
    var l = i.length - 1;
    return r == l ? i.pop() : FC.call(i, r, 1),
    --this.size,
    !0
}
var BC = zC
  , $C = va;
function UC(n) {
    var i = this.__data__
      , r = $C(i, n);
    return r < 0 ? void 0 : i[r][1]
}
var HC = UC
  , WC = va;
function qC(n) {
    return WC(this.__data__, n) > -1
}
var GC = qC
  , VC = va;
function KC(n, i) {
    var r = this.__data__
      , l = VC(r, n);
    return l < 0 ? (++this.size,
    r.push([n, i])) : r[l][1] = i,
    this
}
var YC = KC
  , XC = LC
  , ZC = BC
  , QC = HC
  , JC = GC
  , eE = YC;
function Ir(n) {
    var i = -1
      , r = n == null ? 0 : n.length;
    for (this.clear(); ++i < r; ) {
        var l = n[i];
        this.set(l[0], l[1])
    }
}
Ir.prototype.clear = XC;
Ir.prototype.delete = ZC;
Ir.prototype.get = QC;
Ir.prototype.has = JC;
Ir.prototype.set = eE;
var nE = Ir
  , tE = Wo
  , rE = Bo
  , iE = tE(rE, "Map")
  , aE = iE
  , _f = IC
  , lE = nE
  , oE = aE;
function sE() {
    this.size = 0,
    this.__data__ = {
        hash: new _f,
        map: new (oE || lE),
        string: new _f
    }
}
var uE = sE;
function cE(n) {
    var i = typeof n;
    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null
}
var fE = cE
  , hE = fE;
function pE(n, i) {
    var r = n.__data__;
    return hE(i) ? r[typeof i == "string" ? "string" : "hash"] : r.map
}
var ba = pE
  , dE = ba;
function gE(n) {
    var i = dE(this, n).delete(n);
    return this.size -= i ? 1 : 0,
    i
}
var mE = gE
  , xE = ba;
function yE(n) {
    return xE(this, n).get(n)
}
var vE = yE
  , bE = ba;
function wE(n) {
    return bE(this, n).has(n)
}
var _E = wE
  , SE = ba;
function kE(n, i) {
    var r = SE(this, n)
      , l = r.size;
    return r.set(n, i),
    this.size += r.size == l ? 0 : 1,
    this
}
var CE = kE
  , EE = uE
  , AE = mE
  , TE = vE
  , IE = _E
  , OE = CE;
function Or(n) {
    var i = -1
      , r = n == null ? 0 : n.length;
    for (this.clear(); ++i < r; ) {
        var l = n[i];
        this.set(l[0], l[1])
    }
}
Or.prototype.clear = EE;
Or.prototype.delete = AE;
Or.prototype.get = TE;
Or.prototype.has = IE;
Or.prototype.set = OE;
var LE = Or
  , Rh = LE
  , PE = "Expected a function";
function qo(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
        throw new TypeError(PE);
    var r = function() {
        var l = arguments
          , o = i ? i.apply(this, l) : l[0]
          , s = r.cache;
        if (s.has(o))
            return s.get(o);
        var c = n.apply(this, l);
        return r.cache = s.set(o, c) || s,
        c
    };
    return r.cache = new (qo.Cache || Rh),
    r
}
qo.Cache = Rh;
var DE = qo
  , RE = DE
  , NE = 500;
function ME(n) {
    var i = RE(n, function(l) {
        return r.size === NE && r.clear(),
        l
    })
      , r = i.cache;
    return i
}
var jE = ME
  , FE = jE
  , zE = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
  , BE = /\\(\\)?/g
  , $E = FE(function(n) {
    var i = [];
    return n.charCodeAt(0) === 46 && i.push(""),
    n.replace(zE, function(r, l, o, s) {
        i.push(o ? s.replace(BE, "$1") : l || r)
    }),
    i
})
  , UE = $E;
function HE(n, i) {
    for (var r = -1, l = n == null ? 0 : n.length, o = Array(l); ++r < l; )
        o[r] = i(n[r], r, n);
    return o
}
var WE = HE
  , Sf = xa
  , qE = WE
  , GE = ma
  , VE = Ho
  , KE = 1 / 0
  , kf = Sf ? Sf.prototype : void 0
  , Cf = kf ? kf.toString : void 0;
function Nh(n) {
    if (typeof n == "string")
        return n;
    if (GE(n))
        return qE(n, Nh) + "";
    if (VE(n))
        return Cf ? Cf.call(n) : "";
    var i = n + "";
    return i == "0" && 1 / n == -KE ? "-0" : i
}
var YE = Nh
  , XE = YE;
function ZE(n) {
    return n == null ? "" : XE(n)
}
var QE = ZE
  , JE = ma
  , eA = bk
  , nA = UE
  , tA = QE;
function rA(n, i) {
    return JE(n) ? n : eA(n, i) ? [n] : nA(tA(n))
}
var iA = rA
  , aA = Ho
  , lA = 1 / 0;
function oA(n) {
    if (typeof n == "string" || aA(n))
        return n;
    var i = n + "";
    return i == "0" && 1 / n == -lA ? "-0" : i
}
var sA = oA
  , uA = iA
  , cA = sA;
function fA(n, i) {
    i = uA(i, n);
    for (var r = 0, l = i.length; n != null && r < l; )
        n = n[cA(i[r++])];
    return r && r == l ? n : void 0
}
var hA = fA
  , pA = hA;
function dA(n, i, r) {
    var l = n == null ? void 0 : pA(n, i);
    return l === void 0 ? r : l
}
var gA = dA
  , mA = gA;
function xA(n, i) {
    for (var r = -1, l = i.length, o = Array(l), s = n == null; ++r < l; )
        o[r] = s ? void 0 : mA(n, i[r]);
    return o
}
var yA = xA;
function vA(n, i) {
    for (var r = -1, l = i.length, o = n.length; ++r < l; )
        n[o + r] = i[r];
    return n
}
var bA = vA
  , wA = $o
  , _A = Uo
  , SA = "[object Arguments]";
function kA(n) {
    return _A(n) && wA(n) == SA
}
var CA = kA
  , Ef = CA
  , EA = Uo
  , Mh = Object.prototype
  , AA = Mh.hasOwnProperty
  , TA = Mh.propertyIsEnumerable
  , IA = Ef(function() {
    return arguments
}()) ? Ef : function(n) {
    return EA(n) && AA.call(n, "callee") && !TA.call(n, "callee")
}
  , OA = IA
  , Af = xa
  , LA = OA
  , PA = ma
  , Tf = Af ? Af.isConcatSpreadable : void 0;
function DA(n) {
    return PA(n) || LA(n) || !!(Tf && n && n[Tf])
}
var RA = DA
  , NA = bA
  , MA = RA;
function jh(n, i, r, l, o) {
    var s = -1
      , c = n.length;
    for (r || (r = MA),
    o || (o = []); ++s < c; ) {
        var f = n[s];
        i > 0 && r(f) ? i > 1 ? jh(f, i - 1, r, l, o) : NA(o, f) : l || (o[o.length] = f)
    }
    return o
}
var jA = jh
  , FA = jA;
function zA(n) {
    var i = n == null ? 0 : n.length;
    return i ? FA(n, 1) : []
}
var BA = zA;
function $A(n, i, r) {
    switch (r.length) {
    case 0:
        return n.call(i);
    case 1:
        return n.call(i, r[0]);
    case 2:
        return n.call(i, r[0], r[1]);
    case 3:
        return n.call(i, r[0], r[1], r[2])
    }
    return n.apply(i, r)
}
var UA = $A
  , HA = UA
  , If = Math.max;
function WA(n, i, r) {
    return i = If(i === void 0 ? n.length - 1 : i, 0),
    function() {
        for (var l = arguments, o = -1, s = If(l.length - i, 0), c = Array(s); ++o < s; )
            c[o] = l[i + o];
        o = -1;
        for (var f = Array(i + 1); ++o < i; )
            f[o] = l[o];
        return f[i] = r(c),
        HA(n, this, f)
    }
}
var qA = WA;
function GA(n) {
    return function() {
        return n
    }
}
var VA = GA
  , KA = Wo
  , YA = function() {
    try {
        var n = KA(Object, "defineProperty");
        return n({}, "", {}),
        n
    } catch {}
}()
  , XA = YA;
function ZA(n) {
    return n
}
var QA = ZA
  , JA = VA
  , Of = XA
  , eT = QA
  , nT = Of ? function(n, i) {
    return Of(n, "toString", {
        configurable: !0,
        enumerable: !1,
        value: JA(i),
        writable: !0
    })
}
: eT
  , tT = nT
  , rT = 800
  , iT = 16
  , aT = Date.now;
function lT(n) {
    var i = 0
      , r = 0;
    return function() {
        var l = aT()
          , o = iT - (l - r);
        if (r = l,
        o > 0) {
            if (++i >= rT)
                return arguments[0]
        } else
            i = 0;
        return n.apply(void 0, arguments)
    }
}
var oT = lT
  , sT = tT
  , uT = oT
  , cT = uT(sT)
  , fT = cT
  , hT = BA
  , pT = qA
  , dT = fT;
function gT(n) {
    return dT(pT(n, void 0, hT), n + "")
}
var mT = gT
  , xT = yA
  , yT = mT
  , vT = yT(xT)
  , bT = vT;
const wT = Df(bT)
  , Fh = G.createContext(void 0)
  , zh = ({children: n, event: i}) => {
    const r = (p, g) => {
        const x = new Date(p)
          , k = new Date(g).getTime() - x.getTime()
          , v = Math.floor(k / (1e3 * 60 * 60))
          , I = Math.floor((k - v * 1e3 * 60 * 60) / (1e3 * 60));
        return v >= 24 ? `${Math.floor(v / 24)}d` : I === 0 ? `${v}h` : `${v}h${I}`
    }
      , l = (p, g) => {
        if (!g)
            return null;
        const x = new Date(p);
        return new Date(x.getTime() - g * 60 * 60 * 1e3)
    }
      , o = p => wT({
        pedago: "#ED8179",
        ruch: "#ED8179",
        piscine: "#ED8179",
        exam: "#ED8179",
        partnership: "#ED8179",
        meet: "#00babc",
        conference: "#00babc",
        meet_up: "#00babc",
        event: "#00babc",
        association: "#a2b3e5",
        speedworking: "#39D88F",
        hackathon: "#39D88F",
        workshop: "#39D88F",
        challenge: "#39D88F",
        other: "#c0c0c0",
        extern: "#c0c0c0"
    }, p)[0] ?? "#c0c0c0"
      , s = r(i.beginAt, i.endAt)
      , c = l(i.beginAt, i.unsubscriptionDelay)
      , f = {
        event: i,
        duration: s,
        color: o(i.kind),
        allowedDateForUnsubscription: c
    };
    return w.jsx(Fh.Provider, {
        value: f,
        children: n
    })
}
  , gn = () => {
    const n = G.useContext(Fh);
    if (!n)
        throw new Error("useAgendaContext must be used within an AgendaContextProvider");
    return n
}
  , ra = ({children: n, icon: i}) => w.jsxs("div", {
    className: "flex gap-0.5 flex-row items-center",
    children: [i, n]
})
  , Bh = () => {
    const {primaryCampus: n} = Cr()
      , {event: {beginAt: i, location: r, nbrSubscribers: l, maxSubscribers: o}, duration: s} = gn();
    return w.jsxs(w.Fragment, {
        children: [w.jsx(ra, {
            icon: w.jsx(x0, {
                size: 16
            }),
            children: w.jsx("p", {
                children: s
            })
        }), w.jsx(ra, {
            icon: w.jsx(l0, {
                size: 18
            }),
            children: w.jsx("p", {
                children: fa(er(new Date(i), n == null ? void 0 : n.timeZone), {
                    addSuffix: !0
                })
            })
        }), r && w.jsx(ra, {
            icon: w.jsx(o0, {
                size: 18
            }),
            children: w.jsx("p", {
                children: r
            })
        }), o && w.jsx(ra, {
            icon: w.jsx(_0, {
                size: 18
            }),
            children: w.jsxs("p", {
                children: [l, "/", o]
            })
        })]
    })
}
  , _T = () => {
    const {color: n, allowedDateForUnsubscription: i} = gn();
    return w.jsxs("div", {
        className: "flex flex-col w-full",
        children: [w.jsx("div", {
            className: "flex-wrap text-xs flex flex-row justify-center gap-10 h-10 text-white",
            style: {
                backgroundColor: e0(n, -20)
            },
            children: w.jsx(Bh, {})
        }), i && w.jsx("div", {
            className: "flex flex-row justify-center items-center gap-10 h-10 text-white bg-orange-400",
            children: w.jsxs("span", {
                children: ["Subscriptions can no longer be cancelled after ", Nf(i)]
            })
        })]
    })
}
  , ST = () => {
    const {event: {description: n, kind: i}, color: r} = gn();
    return w.jsxs("div", {
        className: "p-4 overflow-x-scroll max-h-96",
        style: {
            scrollbarWidth: "thin",
            scrollbarColor: `${r} transparent`
        },
        children: [w.jsx(Eh, {
            className: "prose",
            children: n
        }), i === "exam" && w.jsx("p", {
            className: "font-bold",
            children: "Please control that you are registered to both the event and the project in order to attend an exam."
        })]
    })
}
  , kT = () => {
    const {event: {kind: n, name: i, beginAt: r}} = gn()
      , {primaryCampus: l} = Cr()
      , o = (l == null ? void 0 : l.timeZone) || Intl.DateTimeFormat().resolvedOptions().timeZone;
    return w.jsxs(w.Fragment, {
        children: [w.jsx("p", {
            className: "text-center uppercase text-white/70",
            children: n
        }), w.jsx("h4", {
            className: "text-center uppercase text-white text-xl",
            children: i
        }), w.jsx("p", {
            className: "text-center text-white text-xs",
            children: _r(new Date(r)).toLocaleTimeString(void 0, {
                timeZone: o,
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            })
        })]
    })
}
  , CT = () => {
    const {user: n} = zn()
      , {event: {id: i, kind: r}} = gn()
      , {isStaff: l} = ai()
      , o = r === "exam" ? "exams" : "events"
      , s = r === "exam" ? "exams_users" : "events_users"
      , c = ii();
    return nr({
        mutationFn: async () => {
            const g = new URL(`/${o}/${i}/${s}.json`,"https://profile.intra.42.fr")
              , x = new Headers;
            x.append("Content-Type", "application/json"),
            x.append("Authorization", `Bearer ${n == null ? void 0 : n.access_token}`),
            l && x.append("X-Staff", "true");
            const y = await fetch(g, {
                method: "POST",
                headers: x
            })
              , k = await y.json();
            if (!y.ok)
                throw new Error(`Error while subscribing: ${y.status} - ${y.statusText}`);
            return k
        }
        ,
        onSuccess: g => {
            c.setQueryData(["v2", "events"], x => x == null ? void 0 : x.map(y => y.id !== i ? y : {
                ...y,
                eventsUserId: g.id,
                isSubscribed: !0,
                nbrSubscribers: (y.nbrSubscribers ?? 0) + 1
            })),
            Fn({
                description: "Subscribed",
                className: "bg-legacy-main text-white border border-legacy-main/80",
                duration: 2e3
            })
        }
        ,
        onError: () => {
            Fn({
                description: "Error",
                className: "bg-red-500 text-white border border-red-500/80",
                duration: 2e3
            })
        }
    })
}
  , ET = () => {
    const {user: n} = zn()
      , {event: {id: i, kind: r, eventsUserId: l}} = gn()
      , {isStaff: o} = ai()
      , s = r === "exam" ? "exams" : "events"
      , c = r === "exam" ? "exams_users" : "events_users"
      , f = ii();
    return nr({
        mutationFn: async () => {
            const x = new URL(`/${s}/${i}/${c}/${l}.json`,"https://profile.intra.42.fr")
              , y = new Headers;
            y.append("Content-Type", "application/json"),
            y.append("Authorization", `Bearer ${n == null ? void 0 : n.access_token}`),
            o && y.append("X-Staff", "true");
            const k = await fetch(x, {
                method: "DELETE",
                headers: y
            })
              , v = await k.json();
            if (!k.ok)
                throw new Error(`Error while unsubscribing: ${k.status} - ${k.statusText}`);
            return v
        }
        ,
        onSuccess: () => {
            f.setQueryData(["v2", "events"], x => x == null ? void 0 : x.map(y => y.id !== i ? y : {
                ...y,
                isSubscribed: !1,
                nbrSubscribers: (y.nbrSubscribers ?? 0) - 1,
                eventsUserId: null
            })),
            Fn({
                description: "Unsubscribed",
                className: "bg-legacy-main text-white border border-legacy-main/80",
                duration: 2e3
            })
        }
        ,
        onError: () => {
            Fn({
                description: "Error",
                className: "bg-red-500 text-white border border-red-500/80",
                duration: 2e3
            })
        }
    })
}
  , AT = () => {
    const {user: n} = zn()
      , {event: {id: i, waitlistId: r, usersWaitlistId: l}} = gn()
      , {isStaff: o} = ai()
      , s = ii();
    return nr({
        mutationFn: async () => {
            const p = new URL(`/waitlist/${r}/users_waitlists/${l}.json`,"https://profile.intra.42.fr")
              , g = new Headers;
            g.append("Content-Type", "application/json"),
            g.append("Authorization", `Bearer ${n == null ? void 0 : n.access_token}`),
            o && g.append("X-Staff", "true");
            const x = await fetch(p, {
                method: "DELETE",
                headers: g
            })
              , y = await x.json();
            if (!x.ok)
                throw new Error(`Error while unwaitlisting: ${x.status} - ${x.statusText}`);
            return y
        }
        ,
        onSuccess: () => {
            s.setQueryData(["v2", "events"], p => p == null ? void 0 : p.map(g => g.id !== i ? g : {
                ...g,
                isWaitlisted: !1,
                eventsUserId: null
            })),
            Fn({
                description: "Unsubscribed",
                className: "bg-legacy-main text-white border border-legacy-main/80",
                duration: 2e3
            })
        }
        ,
        onError: () => {
            Fn({
                description: "Error",
                className: "bg-red-500 text-white border border-red-500/80",
                duration: 2e3
            })
        }
    })
}
  , TT = () => {
    const {user: n} = zn()
      , {event: {id: i, waitlistId: r}} = gn()
      , {isStaff: l} = ai()
      , o = ii();
    return nr({
        mutationFn: async () => {
            const f = new URL(`/waitlist/${r}/users_waitlists.json`,"https://profile.intra.42.fr")
              , p = new Headers;
            p.append("Content-Type", "application/json"),
            p.append("Authorization", `Bearer ${(n == null ? void 0 : n.access_token) || ""}`),
            l && p.append("X-Staff", "true");
            const g = await fetch(f, {
                method: "POST",
                headers: p,
                body: JSON.stringify({
                    users_waitlist: {
                        user_id: n == null ? void 0 : n.profile.user_id
                    }
                })
            })
              , x = await g.json();
            if (!g.ok)
                throw new Error(`Error while waitlisting: ${g.status} - ${g.statusText}`);
            return x
        }
        ,
        onSuccess: f => {
            o.setQueryData(["v2", "events"], p => p == null ? void 0 : p.map(g => g.id !== i ? g : {
                ...g,
                isWaitlisted: !0,
                eventsUserId: f.id
            })),
            Fn({
                description: "Waitlisted",
                className: "bg-legacy-main text-white border border-legacy-main/80",
                duration: 2e3
            })
        }
        ,
        onError: () => {
            Fn({
                description: "Error",
                className: "bg-red-500 text-white border border-red-500/80",
                duration: 2e3
            })
        }
    })
}
  , IT = () => {
    const {primaryCampus: n} = Cr()
      , {event: {nbrSubscribers: i, maxSubscribers: r, waitlistId: l, isSubscribed: o, isWaitlisted: s, beginAt: c, endAt: f, id: p}, color: g, allowedDateForUnsubscription: x} = gn()
      , {mutateAsync: y, isPending: k} = CT()
      , {mutateAsync: v, isPending: I} = ET()
      , {mutateAsync: N, isPending: $} = TT()
      , {mutateAsync: M, isPending: W} = AT()
      , z = i || 0
      , J = !!(!r || r && r > 0 && z < r) && Jr(er(new Date(c), n == null ? void 0 : n.timeZone))
      , Y = !!(l && r && r > 0 && z >= r && !o)
      , P = !!(o && Jr(er(new Date(c), n == null ? void 0 : n.timeZone)) && (!x || Jr(er(new Date(x), n == null ? void 0 : n.timeZone))))
      , V = () => y()
      , pe = () => v()
      , ie = () => N()
      , me = () => M()
      , X = () => {
        const U = [];
        return Jr(er(new Date(f))) ? (J && !o && U.push(w.jsxs(zt, {
            variant: "legacy_primary",
            className: "text-white",
            onClick: V,
            disabled: k,
            children: [k && w.jsx(Ji, {
                className: "animate-spin mr-1"
            }), "Subscribe"]
        }, "subscribe")),
        Y && !s && U.push(w.jsxs(zt, {
            variant: "secondary",
            className: "bg-orange-400 hover:bg-orange-400/80 text-white",
            onClick: ie,
            disabled: $,
            children: [$ && w.jsx(Ji, {
                className: "animate-spin mr-1"
            }), "Subscribe to Waitlist"]
        }, "waitlist")),
        Y && s && U.push(w.jsxs(zt, {
            variant: "secondary",
            className: "bg-orange-400 hover:bg-orange-400/80 text-white",
            onClick: me,
            disabled: W,
            children: [W && w.jsx(Ji, {
                className: "animate-spin mr-1"
            }), "Unsubscribe from Waitlist"]
        }, "unwaitlist")),
        P && U.push(w.jsxs(zt, {
            variant: "legacy_destructive",
            className: "text-white",
            onClick: pe,
            disabled: I,
            children: [I && w.jsx(Ji, {
                className: "animate-spin mr-1"
            }), "Unsubscribe"]
        }, "unsubscribe")),
        U) : [w.jsx(zt, {
            variant: "legacy_primary",
            className: "text-white",
            children: w.jsx("a", {
                href: `https://projects.intra.42.fr/events/${p}/feedbacks/new`,
                children: "Feedback"
            })
        }, "feedback")]
    }
    ;
    return w.jsxs(w.Fragment, {
        children: [w.jsx(yo, {
            className: "rounded-t-sm p-4 flex align-center justify-center ",
            style: {
                backgroundColor: g
            },
            children: w.jsx(kT, {})
        }), w.jsx(_T, {}), w.jsx(ST, {}), w.jsx("hr", {}), w.jsxs(vo, {
            className: "p-2 flex-row justify-end space-x-2",
            children: [w.jsx(n0, {
                asChild: !0,
                children: w.jsx(zt, {
                    variant: "outline",
                    children: "Close"
                })
            }), X()]
        })]
    })
}
  , $h = ({name: n, modal: i=Bf()}) => {
    const {open: r, onOpenChange: l} = i
      , {color: o} = gn();
    return w.jsxs(go, {
        open: r,
        onOpenChange: l,
        children: [w.jsx(mo, {
            className: po("border grow text-base", n ? "text-legacy-main" : "text-white"),
            style: {
                backgroundColor: n ? "" : o
            },
            children: n || "See More"
        }), w.jsx(xo, {
            className: "p-0 gap-0",
            children: w.jsx(IT, {})
        })]
    })
}
  , OT = () => {
    const {color: n} = gn();
    return w.jsx("div", {
        className: "flex flex-row gap-4 flex-wrap",
        style: {
            color: n
        },
        children: w.jsx(Bh, {})
    })
}
  , LT = ({visible: n, modal: i}) => {
    const {event: {id: r, kind: l}, color: o} = gn()
      , s = () => {
        const c = new URL(`/${l === "exam" ? "exams" : "events"}/${r}`,"https://profile.intra.42.fr").toString();
        navigator.clipboard.writeText(c),
        Fn({
            description: "URL Copied",
            className: "bg-legacy-main text-white border border-legacy-main/80",
            duration: 2e3
        })
    }
    ;
    return w.jsxs("div", {
        className: po("absolute top-0 left-0 w-full h-full flex flex-row justify-between ", n ? "opacity-100" : "opacity-0"),
        children: [w.jsx($h, {
            modal: i
        }), w.jsx("button", {
            className: "border grow grid place-items-center",
            style: {
                backgroundColor: o
            },
            onClick: s,
            children: w.jsx(b0, {
                stroke: "white"
            })
        })]
    })
}
  , PT = () => {
    const {event: {beginAt: n}, color: i} = gn();
    return w.jsxs("div", {
        className: "w-20 pt-2 pb-4 flex-shrink-0 flex flex-col justify-center text-white flex-grow-0 m-0 font-thin",
        style: {
            backgroundColor: i
        },
        children: [w.jsx("div", {
            className: "text-sm",
            children: $l(_r(new Date(n)), "eee")
        }), w.jsx("div", {
            className: "font-bold text-lg",
            children: $l(_r(new Date(n)), "d")
        }), w.jsx("div", {
            children: $l(_r(new Date(n)), "MMMM")
        })]
    })
}
  , DT = () => {
    const {event: {maxSubscribers: n, nbrSubscribers: i, isSubscribed: r}, color: l} = gn()
      , o = () => {
        const c = n && (i || 0) >= n;
        if (r)
            return "registered";
        if (c)
            return "full"
    }
    ;
    return w.jsx("div", {
        className: "absolute right-0 top-0.5 text-xs px-1 uppercase",
        style: {
            color: l
        },
        children: o()
    })
}
;
var ua = {
    exports: {}
};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ua.exports;
(function(n, i) {
    (function() {
        var r, l = "4.17.21", o = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", p = "__lodash_hash_undefined__", g = 500, x = "__lodash_placeholder__", y = 1, k = 2, v = 4, I = 1, N = 2, $ = 1, M = 2, W = 4, z = 8, J = 16, Y = 32, P = 64, V = 128, pe = 256, ie = 512, me = 30, X = "...", U = 800, ye = 16, Se = 1, se = 2, Be = 3, Ee = 1 / 0, $e = 9007199254740991, Te = 17976931348623157e292, S = 0 / 0, Re = 4294967295, Ie = Re - 1, _ = Re >>> 1, Ue = [["ary", V], ["bind", $], ["bindKey", M], ["curry", z], ["curryRight", J], ["flip", ie], ["partial", Y], ["partialRight", P], ["rearg", pe]], tn = "[object Arguments]", je = "[object Array]", Qn = "[object AsyncFunction]", ln = "[object Boolean]", _n = "[object Date]", Ne = "[object DOMException]", Ve = "[object Error]", He = "[object Function]", rr = "[object GeneratorFunction]", Ke = "[object Map]", Bn = "[object Number]", fn = "[object Null]", mn = "[object Object]", Jn = "[object Promise]", $t = "[object Proxy]", gt = "[object RegExp]", xn = "[object Set]", lt = "[object String]", At = "[object Symbol]", Lr = "[object Undefined]", O = "[object WeakMap]", B = "[object WeakSet]", Q = "[object ArrayBuffer]", ee = "[object DataView]", be = "[object Float32Array]", Je = "[object Float64Array]", on = "[object Int8Array]", sn = "[object Int16Array]", et = "[object Int32Array]", ot = "[object Uint8Array]", de = "[object Uint8ClampedArray]", qe = "[object Uint16Array]", rn = "[object Uint32Array]", ir = /\b__p \+= '';/g, si = /\b(__p \+=) '' \+/g, wa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, $n = /&(?:amp|lt|gt|quot|#39);/g, Pr = /[&<>"']/g, _a = RegExp($n.source), ar = RegExp(Pr.source), Sa = /<%-([\s\S]+?)%>/g, ka = /<%([\s\S]+?)%>/g, ui = /<%=([\s\S]+?)%>/g, ci = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ca = /^\w*$/, Ea = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dr = /[\\^$.*+?()[\]{}|]/g, Aa = RegExp(Dr.source), Rr = /^\s+/, Nr = /\s/, Z = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Oe = /\{\n\/\* \[wrapped with (.+)\] \*/, Fe = /,? & /, Ze = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, st = /[()=,{}\[\]\/\s]/, lr = /\\(\\)?/g, Ut = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, mt = /\w*$/, Ht = /^[-+]0x[0-9a-f]+$/i, fi = /^0b[01]+$/i, Ta = /^\[object .+?Constructor\]$/, Ia = /^0o[0-7]+$/i, Oa = /^(?:0|[1-9]\d*)$/, Go = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Tt = /($^)/, Uh = /['\n\r\u2028\u2029\\]/g, hi = "\\ud800-\\udfff", Hh = "\\u0300-\\u036f", Wh = "\\ufe20-\\ufe2f", qh = "\\u20d0-\\u20ff", Vo = Hh + Wh + qh, Ko = "\\u2700-\\u27bf", Yo = "a-z\\xdf-\\xf6\\xf8-\\xff", Gh = "\\xac\\xb1\\xd7\\xf7", Vh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Kh = "\\u2000-\\u206f", Yh = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Xo = "A-Z\\xc0-\\xd6\\xd8-\\xde", Zo = "\\ufe0e\\ufe0f", Qo = Gh + Vh + Kh + Yh, La = "['’]", Xh = "[" + hi + "]", Jo = "[" + Qo + "]", pi = "[" + Vo + "]", es = "\\d+", Zh = "[" + Ko + "]", ns = "[" + Yo + "]", ts = "[^" + hi + Qo + es + Ko + Yo + Xo + "]", Pa = "\\ud83c[\\udffb-\\udfff]", Qh = "(?:" + pi + "|" + Pa + ")", rs = "[^" + hi + "]", Da = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ra = "[\\ud800-\\udbff][\\udc00-\\udfff]", or = "[" + Xo + "]", is = "\\u200d", as = "(?:" + ns + "|" + ts + ")", Jh = "(?:" + or + "|" + ts + ")", ls = "(?:" + La + "(?:d|ll|m|re|s|t|ve))?", os = "(?:" + La + "(?:D|LL|M|RE|S|T|VE))?", ss = Qh + "?", us = "[" + Zo + "]?", ep = "(?:" + is + "(?:" + [rs, Da, Ra].join("|") + ")" + us + ss + ")*", np = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", tp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", cs = us + ss + ep, rp = "(?:" + [Zh, Da, Ra].join("|") + ")" + cs, ip = "(?:" + [rs + pi + "?", pi, Da, Ra, Xh].join("|") + ")", ap = RegExp(La, "g"), lp = RegExp(pi, "g"), Na = RegExp(Pa + "(?=" + Pa + ")|" + ip + cs, "g"), op = RegExp([or + "?" + ns + "+" + ls + "(?=" + [Jo, or, "$"].join("|") + ")", Jh + "+" + os + "(?=" + [Jo, or + as, "$"].join("|") + ")", or + "?" + as + "+" + ls, or + "+" + os, tp, np, es, rp].join("|"), "g"), sp = RegExp("[" + is + hi + Vo + Zo + "]"), up = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, cp = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], fp = -1, Me = {};
        Me[be] = Me[Je] = Me[on] = Me[sn] = Me[et] = Me[ot] = Me[de] = Me[qe] = Me[rn] = !0,
        Me[tn] = Me[je] = Me[Q] = Me[ln] = Me[ee] = Me[_n] = Me[Ve] = Me[He] = Me[Ke] = Me[Bn] = Me[mn] = Me[gt] = Me[xn] = Me[lt] = Me[O] = !1;
        var Le = {};
        Le[tn] = Le[je] = Le[Q] = Le[ee] = Le[ln] = Le[_n] = Le[be] = Le[Je] = Le[on] = Le[sn] = Le[et] = Le[Ke] = Le[Bn] = Le[mn] = Le[gt] = Le[xn] = Le[lt] = Le[At] = Le[ot] = Le[de] = Le[qe] = Le[rn] = !0,
        Le[Ve] = Le[He] = Le[O] = !1;
        var hp = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s"
        }
          , pp = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , dp = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }
          , gp = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , mp = parseFloat
          , xp = parseInt
          , fs = typeof at == "object" && at && at.Object === Object && at
          , yp = typeof self == "object" && self && self.Object === Object && self
          , un = fs || yp || Function("return this")()
          , Ma = i && !i.nodeType && i
          , Wt = Ma && !0 && n && !n.nodeType && n
          , hs = Wt && Wt.exports === Ma
          , ja = hs && fs.process
          , Un = function() {
            try {
                var E = Wt && Wt.require && Wt.require("util").types;
                return E || ja && ja.binding && ja.binding("util")
            } catch {}
        }()
          , ps = Un && Un.isArrayBuffer
          , ds = Un && Un.isDate
          , gs = Un && Un.isMap
          , ms = Un && Un.isRegExp
          , xs = Un && Un.isSet
          , ys = Un && Un.isTypedArray;
        function On(E, L, T) {
            switch (T.length) {
            case 0:
                return E.call(L);
            case 1:
                return E.call(L, T[0]);
            case 2:
                return E.call(L, T[0], T[1]);
            case 3:
                return E.call(L, T[0], T[1], T[2])
            }
            return E.apply(L, T)
        }
        function vp(E, L, T, q) {
            for (var le = -1, we = E == null ? 0 : E.length; ++le < we; ) {
                var en = E[le];
                L(q, en, T(en), E)
            }
            return q
        }
        function Hn(E, L) {
            for (var T = -1, q = E == null ? 0 : E.length; ++T < q && L(E[T], T, E) !== !1; )
                ;
            return E
        }
        function bp(E, L) {
            for (var T = E == null ? 0 : E.length; T-- && L(E[T], T, E) !== !1; )
                ;
            return E
        }
        function vs(E, L) {
            for (var T = -1, q = E == null ? 0 : E.length; ++T < q; )
                if (!L(E[T], T, E))
                    return !1;
            return !0
        }
        function It(E, L) {
            for (var T = -1, q = E == null ? 0 : E.length, le = 0, we = []; ++T < q; ) {
                var en = E[T];
                L(en, T, E) && (we[le++] = en)
            }
            return we
        }
        function di(E, L) {
            var T = E == null ? 0 : E.length;
            return !!T && sr(E, L, 0) > -1
        }
        function Fa(E, L, T) {
            for (var q = -1, le = E == null ? 0 : E.length; ++q < le; )
                if (T(L, E[q]))
                    return !0;
            return !1
        }
        function ze(E, L) {
            for (var T = -1, q = E == null ? 0 : E.length, le = Array(q); ++T < q; )
                le[T] = L(E[T], T, E);
            return le
        }
        function Ot(E, L) {
            for (var T = -1, q = L.length, le = E.length; ++T < q; )
                E[le + T] = L[T];
            return E
        }
        function za(E, L, T, q) {
            var le = -1
              , we = E == null ? 0 : E.length;
            for (q && we && (T = E[++le]); ++le < we; )
                T = L(T, E[le], le, E);
            return T
        }
        function wp(E, L, T, q) {
            var le = E == null ? 0 : E.length;
            for (q && le && (T = E[--le]); le--; )
                T = L(T, E[le], le, E);
            return T
        }
        function Ba(E, L) {
            for (var T = -1, q = E == null ? 0 : E.length; ++T < q; )
                if (L(E[T], T, E))
                    return !0;
            return !1
        }
        var _p = $a("length");
        function Sp(E) {
            return E.split("")
        }
        function kp(E) {
            return E.match(Ze) || []
        }
        function bs(E, L, T) {
            var q;
            return T(E, function(le, we, en) {
                if (L(le, we, en))
                    return q = we,
                    !1
            }),
            q
        }
        function gi(E, L, T, q) {
            for (var le = E.length, we = T + (q ? 1 : -1); q ? we-- : ++we < le; )
                if (L(E[we], we, E))
                    return we;
            return -1
        }
        function sr(E, L, T) {
            return L === L ? Mp(E, L, T) : gi(E, ws, T)
        }
        function Cp(E, L, T, q) {
            for (var le = T - 1, we = E.length; ++le < we; )
                if (q(E[le], L))
                    return le;
            return -1
        }
        function ws(E) {
            return E !== E
        }
        function _s(E, L) {
            var T = E == null ? 0 : E.length;
            return T ? Ha(E, L) / T : S
        }
        function $a(E) {
            return function(L) {
                return L == null ? r : L[E]
            }
        }
        function Ua(E) {
            return function(L) {
                return E == null ? r : E[L]
            }
        }
        function Ss(E, L, T, q, le) {
            return le(E, function(we, en, Ae) {
                T = q ? (q = !1,
                we) : L(T, we, en, Ae)
            }),
            T
        }
        function Ep(E, L) {
            var T = E.length;
            for (E.sort(L); T--; )
                E[T] = E[T].value;
            return E
        }
        function Ha(E, L) {
            for (var T, q = -1, le = E.length; ++q < le; ) {
                var we = L(E[q]);
                we !== r && (T = T === r ? we : T + we)
            }
            return T
        }
        function Wa(E, L) {
            for (var T = -1, q = Array(E); ++T < E; )
                q[T] = L(T);
            return q
        }
        function Ap(E, L) {
            return ze(L, function(T) {
                return [T, E[T]]
            })
        }
        function ks(E) {
            return E && E.slice(0, Ts(E) + 1).replace(Rr, "")
        }
        function Ln(E) {
            return function(L) {
                return E(L)
            }
        }
        function qa(E, L) {
            return ze(L, function(T) {
                return E[T]
            })
        }
        function Mr(E, L) {
            return E.has(L)
        }
        function Cs(E, L) {
            for (var T = -1, q = E.length; ++T < q && sr(L, E[T], 0) > -1; )
                ;
            return T
        }
        function Es(E, L) {
            for (var T = E.length; T-- && sr(L, E[T], 0) > -1; )
                ;
            return T
        }
        function Tp(E, L) {
            for (var T = E.length, q = 0; T--; )
                E[T] === L && ++q;
            return q
        }
        var Ip = Ua(hp)
          , Op = Ua(pp);
        function Lp(E) {
            return "\\" + gp[E]
        }
        function Pp(E, L) {
            return E == null ? r : E[L]
        }
        function ur(E) {
            return sp.test(E)
        }
        function Dp(E) {
            return up.test(E)
        }
        function Rp(E) {
            for (var L, T = []; !(L = E.next()).done; )
                T.push(L.value);
            return T
        }
        function Ga(E) {
            var L = -1
              , T = Array(E.size);
            return E.forEach(function(q, le) {
                T[++L] = [le, q]
            }),
            T
        }
        function As(E, L) {
            return function(T) {
                return E(L(T))
            }
        }
        function Lt(E, L) {
            for (var T = -1, q = E.length, le = 0, we = []; ++T < q; ) {
                var en = E[T];
                (en === L || en === x) && (E[T] = x,
                we[le++] = T)
            }
            return we
        }
        function mi(E) {
            var L = -1
              , T = Array(E.size);
            return E.forEach(function(q) {
                T[++L] = q
            }),
            T
        }
        function Np(E) {
            var L = -1
              , T = Array(E.size);
            return E.forEach(function(q) {
                T[++L] = [q, q]
            }),
            T
        }
        function Mp(E, L, T) {
            for (var q = T - 1, le = E.length; ++q < le; )
                if (E[q] === L)
                    return q;
            return -1
        }
        function jp(E, L, T) {
            for (var q = T + 1; q--; )
                if (E[q] === L)
                    return q;
            return q
        }
        function cr(E) {
            return ur(E) ? zp(E) : _p(E)
        }
        function nt(E) {
            return ur(E) ? Bp(E) : Sp(E)
        }
        function Ts(E) {
            for (var L = E.length; L-- && Nr.test(E.charAt(L)); )
                ;
            return L
        }
        var Fp = Ua(dp);
        function zp(E) {
            for (var L = Na.lastIndex = 0; Na.test(E); )
                ++L;
            return L
        }
        function Bp(E) {
            return E.match(Na) || []
        }
        function $p(E) {
            return E.match(op) || []
        }
        var Up = function E(L) {
            L = L == null ? un : fr.defaults(un.Object(), L, fr.pick(un, cp));
            var T = L.Array
              , q = L.Date
              , le = L.Error
              , we = L.Function
              , en = L.Math
              , Ae = L.Object
              , Va = L.RegExp
              , Hp = L.String
              , Wn = L.TypeError
              , xi = T.prototype
              , Wp = we.prototype
              , hr = Ae.prototype
              , yi = L["__core-js_shared__"]
              , vi = Wp.toString
              , Ce = hr.hasOwnProperty
              , qp = 0
              , Is = function() {
                var e = /[^.]+$/.exec(yi && yi.keys && yi.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }()
              , bi = hr.toString
              , Gp = vi.call(Ae)
              , Vp = un._
              , Kp = Va("^" + vi.call(Ce).replace(Dr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
              , wi = hs ? L.Buffer : r
              , Pt = L.Symbol
              , _i = L.Uint8Array
              , Os = wi ? wi.allocUnsafe : r
              , Si = As(Ae.getPrototypeOf, Ae)
              , Ls = Ae.create
              , Ps = hr.propertyIsEnumerable
              , ki = xi.splice
              , Ds = Pt ? Pt.isConcatSpreadable : r
              , jr = Pt ? Pt.iterator : r
              , qt = Pt ? Pt.toStringTag : r
              , Ci = function() {
                try {
                    var e = Xt(Ae, "defineProperty");
                    return e({}, "", {}),
                    e
                } catch {}
            }()
              , Yp = L.clearTimeout !== un.clearTimeout && L.clearTimeout
              , Xp = q && q.now !== un.Date.now && q.now
              , Zp = L.setTimeout !== un.setTimeout && L.setTimeout
              , Ei = en.ceil
              , Ai = en.floor
              , Ka = Ae.getOwnPropertySymbols
              , Qp = wi ? wi.isBuffer : r
              , Rs = L.isFinite
              , Jp = xi.join
              , ed = As(Ae.keys, Ae)
              , nn = en.max
              , hn = en.min
              , nd = q.now
              , td = L.parseInt
              , Ns = en.random
              , rd = xi.reverse
              , Ya = Xt(L, "DataView")
              , Fr = Xt(L, "Map")
              , Xa = Xt(L, "Promise")
              , pr = Xt(L, "Set")
              , zr = Xt(L, "WeakMap")
              , Br = Xt(Ae, "create")
              , Ti = zr && new zr
              , dr = {}
              , id = Zt(Ya)
              , ad = Zt(Fr)
              , ld = Zt(Xa)
              , od = Zt(pr)
              , sd = Zt(zr)
              , Ii = Pt ? Pt.prototype : r
              , $r = Ii ? Ii.valueOf : r
              , Ms = Ii ? Ii.toString : r;
            function d(e) {
                if (Ge(e) && !oe(e) && !(e instanceof xe)) {
                    if (e instanceof qn)
                        return e;
                    if (Ce.call(e, "__wrapped__"))
                        return ju(e)
                }
                return new qn(e)
            }
            var gr = function() {
                function e() {}
                return function(t) {
                    if (!We(t))
                        return {};
                    if (Ls)
                        return Ls(t);
                    e.prototype = t;
                    var a = new e;
                    return e.prototype = r,
                    a
                }
            }();
            function Oi() {}
            function qn(e, t) {
                this.__wrapped__ = e,
                this.__actions__ = [],
                this.__chain__ = !!t,
                this.__index__ = 0,
                this.__values__ = r
            }
            d.templateSettings = {
                escape: Sa,
                evaluate: ka,
                interpolate: ui,
                variable: "",
                imports: {
                    _: d
                }
            },
            d.prototype = Oi.prototype,
            d.prototype.constructor = d,
            qn.prototype = gr(Oi.prototype),
            qn.prototype.constructor = qn;
            function xe(e) {
                this.__wrapped__ = e,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = Re,
                this.__views__ = []
            }
            function ud() {
                var e = new xe(this.__wrapped__);
                return e.__actions__ = Sn(this.__actions__),
                e.__dir__ = this.__dir__,
                e.__filtered__ = this.__filtered__,
                e.__iteratees__ = Sn(this.__iteratees__),
                e.__takeCount__ = this.__takeCount__,
                e.__views__ = Sn(this.__views__),
                e
            }
            function cd() {
                if (this.__filtered__) {
                    var e = new xe(this);
                    e.__dir__ = -1,
                    e.__filtered__ = !0
                } else
                    e = this.clone(),
                    e.__dir__ *= -1;
                return e
            }
            function fd() {
                var e = this.__wrapped__.value()
                  , t = this.__dir__
                  , a = oe(e)
                  , u = t < 0
                  , h = a ? e.length : 0
                  , m = Sg(0, h, this.__views__)
                  , b = m.start
                  , C = m.end
                  , A = C - b
                  , D = u ? C : b - 1
                  , R = this.__iteratees__
                  , j = R.length
                  , H = 0
                  , K = hn(A, this.__takeCount__);
                if (!a || !u && h == A && K == A)
                    return lu(e, this.__actions__);
                var te = [];
                e: for (; A-- && H < K; ) {
                    D += t;
                    for (var fe = -1, re = e[D]; ++fe < j; ) {
                        var ge = R[fe]
                          , ve = ge.iteratee
                          , Rn = ge.type
                          , bn = ve(re);
                        if (Rn == se)
                            re = bn;
                        else if (!bn) {
                            if (Rn == Se)
                                continue e;
                            break e
                        }
                    }
                    te[H++] = re
                }
                return te
            }
            xe.prototype = gr(Oi.prototype),
            xe.prototype.constructor = xe;
            function Gt(e) {
                var t = -1
                  , a = e == null ? 0 : e.length;
                for (this.clear(); ++t < a; ) {
                    var u = e[t];
                    this.set(u[0], u[1])
                }
            }
            function hd() {
                this.__data__ = Br ? Br(null) : {},
                this.size = 0
            }
            function pd(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0,
                t
            }
            function dd(e) {
                var t = this.__data__;
                if (Br) {
                    var a = t[e];
                    return a === p ? r : a
                }
                return Ce.call(t, e) ? t[e] : r
            }
            function gd(e) {
                var t = this.__data__;
                return Br ? t[e] !== r : Ce.call(t, e)
            }
            function md(e, t) {
                var a = this.__data__;
                return this.size += this.has(e) ? 0 : 1,
                a[e] = Br && t === r ? p : t,
                this
            }
            Gt.prototype.clear = hd,
            Gt.prototype.delete = pd,
            Gt.prototype.get = dd,
            Gt.prototype.has = gd,
            Gt.prototype.set = md;
            function xt(e) {
                var t = -1
                  , a = e == null ? 0 : e.length;
                for (this.clear(); ++t < a; ) {
                    var u = e[t];
                    this.set(u[0], u[1])
                }
            }
            function xd() {
                this.__data__ = [],
                this.size = 0
            }
            function yd(e) {
                var t = this.__data__
                  , a = Li(t, e);
                if (a < 0)
                    return !1;
                var u = t.length - 1;
                return a == u ? t.pop() : ki.call(t, a, 1),
                --this.size,
                !0
            }
            function vd(e) {
                var t = this.__data__
                  , a = Li(t, e);
                return a < 0 ? r : t[a][1]
            }
            function bd(e) {
                return Li(this.__data__, e) > -1
            }
            function wd(e, t) {
                var a = this.__data__
                  , u = Li(a, e);
                return u < 0 ? (++this.size,
                a.push([e, t])) : a[u][1] = t,
                this
            }
            xt.prototype.clear = xd,
            xt.prototype.delete = yd,
            xt.prototype.get = vd,
            xt.prototype.has = bd,
            xt.prototype.set = wd;
            function yt(e) {
                var t = -1
                  , a = e == null ? 0 : e.length;
                for (this.clear(); ++t < a; ) {
                    var u = e[t];
                    this.set(u[0], u[1])
                }
            }
            function _d() {
                this.size = 0,
                this.__data__ = {
                    hash: new Gt,
                    map: new (Fr || xt),
                    string: new Gt
                }
            }
            function Sd(e) {
                var t = Hi(this, e).delete(e);
                return this.size -= t ? 1 : 0,
                t
            }
            function kd(e) {
                return Hi(this, e).get(e)
            }
            function Cd(e) {
                return Hi(this, e).has(e)
            }
            function Ed(e, t) {
                var a = Hi(this, e)
                  , u = a.size;
                return a.set(e, t),
                this.size += a.size == u ? 0 : 1,
                this
            }
            yt.prototype.clear = _d,
            yt.prototype.delete = Sd,
            yt.prototype.get = kd,
            yt.prototype.has = Cd,
            yt.prototype.set = Ed;
            function Vt(e) {
                var t = -1
                  , a = e == null ? 0 : e.length;
                for (this.__data__ = new yt; ++t < a; )
                    this.add(e[t])
            }
            function Ad(e) {
                return this.__data__.set(e, p),
                this
            }
            function Td(e) {
                return this.__data__.has(e)
            }
            Vt.prototype.add = Vt.prototype.push = Ad,
            Vt.prototype.has = Td;
            function tt(e) {
                var t = this.__data__ = new xt(e);
                this.size = t.size
            }
            function Id() {
                this.__data__ = new xt,
                this.size = 0
            }
            function Od(e) {
                var t = this.__data__
                  , a = t.delete(e);
                return this.size = t.size,
                a
            }
            function Ld(e) {
                return this.__data__.get(e)
            }
            function Pd(e) {
                return this.__data__.has(e)
            }
            function Dd(e, t) {
                var a = this.__data__;
                if (a instanceof xt) {
                    var u = a.__data__;
                    if (!Fr || u.length < o - 1)
                        return u.push([e, t]),
                        this.size = ++a.size,
                        this;
                    a = this.__data__ = new yt(u)
                }
                return a.set(e, t),
                this.size = a.size,
                this
            }
            tt.prototype.clear = Id,
            tt.prototype.delete = Od,
            tt.prototype.get = Ld,
            tt.prototype.has = Pd,
            tt.prototype.set = Dd;
            function js(e, t) {
                var a = oe(e)
                  , u = !a && Qt(e)
                  , h = !a && !u && jt(e)
                  , m = !a && !u && !h && vr(e)
                  , b = a || u || h || m
                  , C = b ? Wa(e.length, Hp) : []
                  , A = C.length;
                for (var D in e)
                    (t || Ce.call(e, D)) && !(b && (D == "length" || h && (D == "offset" || D == "parent") || m && (D == "buffer" || D == "byteLength" || D == "byteOffset") || _t(D, A))) && C.push(D);
                return C
            }
            function Fs(e) {
                var t = e.length;
                return t ? e[ol(0, t - 1)] : r
            }
            function Rd(e, t) {
                return Wi(Sn(e), Kt(t, 0, e.length))
            }
            function Nd(e) {
                return Wi(Sn(e))
            }
            function Za(e, t, a) {
                (a !== r && !rt(e[t], a) || a === r && !(t in e)) && vt(e, t, a)
            }
            function Ur(e, t, a) {
                var u = e[t];
                (!(Ce.call(e, t) && rt(u, a)) || a === r && !(t in e)) && vt(e, t, a)
            }
            function Li(e, t) {
                for (var a = e.length; a--; )
                    if (rt(e[a][0], t))
                        return a;
                return -1
            }
            function Md(e, t, a, u) {
                return Dt(e, function(h, m, b) {
                    t(u, h, a(h), b)
                }),
                u
            }
            function zs(e, t) {
                return e && ct(t, an(t), e)
            }
            function jd(e, t) {
                return e && ct(t, Cn(t), e)
            }
            function vt(e, t, a) {
                t == "__proto__" && Ci ? Ci(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: a,
                    writable: !0
                }) : e[t] = a
            }
            function Qa(e, t) {
                for (var a = -1, u = t.length, h = T(u), m = e == null; ++a < u; )
                    h[a] = m ? r : Pl(e, t[a]);
                return h
            }
            function Kt(e, t, a) {
                return e === e && (a !== r && (e = e <= a ? e : a),
                t !== r && (e = e >= t ? e : t)),
                e
            }
            function Gn(e, t, a, u, h, m) {
                var b, C = t & y, A = t & k, D = t & v;
                if (a && (b = h ? a(e, u, h, m) : a(e)),
                b !== r)
                    return b;
                if (!We(e))
                    return e;
                var R = oe(e);
                if (R) {
                    if (b = Cg(e),
                    !C)
                        return Sn(e, b)
                } else {
                    var j = pn(e)
                      , H = j == He || j == rr;
                    if (jt(e))
                        return uu(e, C);
                    if (j == mn || j == tn || H && !h) {
                        if (b = A || H ? {} : Tu(e),
                        !C)
                            return A ? dg(e, jd(b, e)) : pg(e, zs(b, e))
                    } else {
                        if (!Le[j])
                            return h ? e : {};
                        b = Eg(e, j, C)
                    }
                }
                m || (m = new tt);
                var K = m.get(e);
                if (K)
                    return K;
                m.set(e, b),
                rc(e) ? e.forEach(function(re) {
                    b.add(Gn(re, t, a, re, e, m))
                }) : nc(e) && e.forEach(function(re, ge) {
                    b.set(ge, Gn(re, t, a, ge, e, m))
                });
                var te = D ? A ? yl : xl : A ? Cn : an
                  , fe = R ? r : te(e);
                return Hn(fe || e, function(re, ge) {
                    fe && (ge = re,
                    re = e[ge]),
                    Ur(b, ge, Gn(re, t, a, ge, e, m))
                }),
                b
            }
            function Fd(e) {
                var t = an(e);
                return function(a) {
                    return Bs(a, e, t)
                }
            }
            function Bs(e, t, a) {
                var u = a.length;
                if (e == null)
                    return !u;
                for (e = Ae(e); u--; ) {
                    var h = a[u]
                      , m = t[h]
                      , b = e[h];
                    if (b === r && !(h in e) || !m(b))
                        return !1
                }
                return !0
            }
            function $s(e, t, a) {
                if (typeof e != "function")
                    throw new Wn(c);
                return Yr(function() {
                    e.apply(r, a)
                }, t)
            }
            function Hr(e, t, a, u) {
                var h = -1
                  , m = di
                  , b = !0
                  , C = e.length
                  , A = []
                  , D = t.length;
                if (!C)
                    return A;
                a && (t = ze(t, Ln(a))),
                u ? (m = Fa,
                b = !1) : t.length >= o && (m = Mr,
                b = !1,
                t = new Vt(t));
                e: for (; ++h < C; ) {
                    var R = e[h]
                      , j = a == null ? R : a(R);
                    if (R = u || R !== 0 ? R : 0,
                    b && j === j) {
                        for (var H = D; H--; )
                            if (t[H] === j)
                                continue e;
                        A.push(R)
                    } else
                        m(t, j, u) || A.push(R)
                }
                return A
            }
            var Dt = du(ut)
              , Us = du(el, !0);
            function zd(e, t) {
                var a = !0;
                return Dt(e, function(u, h, m) {
                    return a = !!t(u, h, m),
                    a
                }),
                a
            }
            function Pi(e, t, a) {
                for (var u = -1, h = e.length; ++u < h; ) {
                    var m = e[u]
                      , b = t(m);
                    if (b != null && (C === r ? b === b && !Dn(b) : a(b, C)))
                        var C = b
                          , A = m
                }
                return A
            }
            function Bd(e, t, a, u) {
                var h = e.length;
                for (a = ue(a),
                a < 0 && (a = -a > h ? 0 : h + a),
                u = u === r || u > h ? h : ue(u),
                u < 0 && (u += h),
                u = a > u ? 0 : ac(u); a < u; )
                    e[a++] = t;
                return e
            }
            function Hs(e, t) {
                var a = [];
                return Dt(e, function(u, h, m) {
                    t(u, h, m) && a.push(u)
                }),
                a
            }
            function cn(e, t, a, u, h) {
                var m = -1
                  , b = e.length;
                for (a || (a = Tg),
                h || (h = []); ++m < b; ) {
                    var C = e[m];
                    t > 0 && a(C) ? t > 1 ? cn(C, t - 1, a, u, h) : Ot(h, C) : u || (h[h.length] = C)
                }
                return h
            }
            var Ja = gu()
              , Ws = gu(!0);
            function ut(e, t) {
                return e && Ja(e, t, an)
            }
            function el(e, t) {
                return e && Ws(e, t, an)
            }
            function Di(e, t) {
                return It(t, function(a) {
                    return St(e[a])
                })
            }
            function Yt(e, t) {
                t = Nt(t, e);
                for (var a = 0, u = t.length; e != null && a < u; )
                    e = e[ft(t[a++])];
                return a && a == u ? e : r
            }
            function qs(e, t, a) {
                var u = t(e);
                return oe(e) ? u : Ot(u, a(e))
            }
            function yn(e) {
                return e == null ? e === r ? Lr : fn : qt && qt in Ae(e) ? _g(e) : Ng(e)
            }
            function nl(e, t) {
                return e > t
            }
            function $d(e, t) {
                return e != null && Ce.call(e, t)
            }
            function Ud(e, t) {
                return e != null && t in Ae(e)
            }
            function Hd(e, t, a) {
                return e >= hn(t, a) && e < nn(t, a)
            }
            function tl(e, t, a) {
                for (var u = a ? Fa : di, h = e[0].length, m = e.length, b = m, C = T(m), A = 1 / 0, D = []; b--; ) {
                    var R = e[b];
                    b && t && (R = ze(R, Ln(t))),
                    A = hn(R.length, A),
                    C[b] = !a && (t || h >= 120 && R.length >= 120) ? new Vt(b && R) : r
                }
                R = e[0];
                var j = -1
                  , H = C[0];
                e: for (; ++j < h && D.length < A; ) {
                    var K = R[j]
                      , te = t ? t(K) : K;
                    if (K = a || K !== 0 ? K : 0,
                    !(H ? Mr(H, te) : u(D, te, a))) {
                        for (b = m; --b; ) {
                            var fe = C[b];
                            if (!(fe ? Mr(fe, te) : u(e[b], te, a)))
                                continue e
                        }
                        H && H.push(te),
                        D.push(K)
                    }
                }
                return D
            }
            function Wd(e, t, a, u) {
                return ut(e, function(h, m, b) {
                    t(u, a(h), m, b)
                }),
                u
            }
            function Wr(e, t, a) {
                t = Nt(t, e),
                e = Pu(e, t);
                var u = e == null ? e : e[ft(Kn(t))];
                return u == null ? r : On(u, e, a)
            }
            function Gs(e) {
                return Ge(e) && yn(e) == tn
            }
            function qd(e) {
                return Ge(e) && yn(e) == Q
            }
            function Gd(e) {
                return Ge(e) && yn(e) == _n
            }
            function qr(e, t, a, u, h) {
                return e === t ? !0 : e == null || t == null || !Ge(e) && !Ge(t) ? e !== e && t !== t : Vd(e, t, a, u, qr, h)
            }
            function Vd(e, t, a, u, h, m) {
                var b = oe(e)
                  , C = oe(t)
                  , A = b ? je : pn(e)
                  , D = C ? je : pn(t);
                A = A == tn ? mn : A,
                D = D == tn ? mn : D;
                var R = A == mn
                  , j = D == mn
                  , H = A == D;
                if (H && jt(e)) {
                    if (!jt(t))
                        return !1;
                    b = !0,
                    R = !1
                }
                if (H && !R)
                    return m || (m = new tt),
                    b || vr(e) ? Cu(e, t, a, u, h, m) : bg(e, t, A, a, u, h, m);
                if (!(a & I)) {
                    var K = R && Ce.call(e, "__wrapped__")
                      , te = j && Ce.call(t, "__wrapped__");
                    if (K || te) {
                        var fe = K ? e.value() : e
                          , re = te ? t.value() : t;
                        return m || (m = new tt),
                        h(fe, re, a, u, m)
                    }
                }
                return H ? (m || (m = new tt),
                wg(e, t, a, u, h, m)) : !1
            }
            function Kd(e) {
                return Ge(e) && pn(e) == Ke
            }
            function rl(e, t, a, u) {
                var h = a.length
                  , m = h
                  , b = !u;
                if (e == null)
                    return !m;
                for (e = Ae(e); h--; ) {
                    var C = a[h];
                    if (b && C[2] ? C[1] !== e[C[0]] : !(C[0] in e))
                        return !1
                }
                for (; ++h < m; ) {
                    C = a[h];
                    var A = C[0]
                      , D = e[A]
                      , R = C[1];
                    if (b && C[2]) {
                        if (D === r && !(A in e))
                            return !1
                    } else {
                        var j = new tt;
                        if (u)
                            var H = u(D, R, A, e, t, j);
                        if (!(H === r ? qr(R, D, I | N, u, j) : H))
                            return !1
                    }
                }
                return !0
            }
            function Vs(e) {
                if (!We(e) || Og(e))
                    return !1;
                var t = St(e) ? Kp : Ta;
                return t.test(Zt(e))
            }
            function Yd(e) {
                return Ge(e) && yn(e) == gt
            }
            function Xd(e) {
                return Ge(e) && pn(e) == xn
            }
            function Zd(e) {
                return Ge(e) && Xi(e.length) && !!Me[yn(e)]
            }
            function Ks(e) {
                return typeof e == "function" ? e : e == null ? En : typeof e == "object" ? oe(e) ? Zs(e[0], e[1]) : Xs(e) : mc(e)
            }
            function il(e) {
                if (!Kr(e))
                    return ed(e);
                var t = [];
                for (var a in Ae(e))
                    Ce.call(e, a) && a != "constructor" && t.push(a);
                return t
            }
            function Qd(e) {
                if (!We(e))
                    return Rg(e);
                var t = Kr(e)
                  , a = [];
                for (var u in e)
                    u == "constructor" && (t || !Ce.call(e, u)) || a.push(u);
                return a
            }
            function al(e, t) {
                return e < t
            }
            function Ys(e, t) {
                var a = -1
                  , u = kn(e) ? T(e.length) : [];
                return Dt(e, function(h, m, b) {
                    u[++a] = t(h, m, b)
                }),
                u
            }
            function Xs(e) {
                var t = bl(e);
                return t.length == 1 && t[0][2] ? Ou(t[0][0], t[0][1]) : function(a) {
                    return a === e || rl(a, e, t)
                }
            }
            function Zs(e, t) {
                return _l(e) && Iu(t) ? Ou(ft(e), t) : function(a) {
                    var u = Pl(a, e);
                    return u === r && u === t ? Dl(a, e) : qr(t, u, I | N)
                }
            }
            function Ri(e, t, a, u, h) {
                e !== t && Ja(t, function(m, b) {
                    if (h || (h = new tt),
                    We(m))
                        Jd(e, t, b, a, Ri, u, h);
                    else {
                        var C = u ? u(kl(e, b), m, b + "", e, t, h) : r;
                        C === r && (C = m),
                        Za(e, b, C)
                    }
                }, Cn)
            }
            function Jd(e, t, a, u, h, m, b) {
                var C = kl(e, a)
                  , A = kl(t, a)
                  , D = b.get(A);
                if (D) {
                    Za(e, a, D);
                    return
                }
                var R = m ? m(C, A, a + "", e, t, b) : r
                  , j = R === r;
                if (j) {
                    var H = oe(A)
                      , K = !H && jt(A)
                      , te = !H && !K && vr(A);
                    R = A,
                    H || K || te ? oe(C) ? R = C : Ye(C) ? R = Sn(C) : K ? (j = !1,
                    R = uu(A, !0)) : te ? (j = !1,
                    R = cu(A, !0)) : R = [] : Xr(A) || Qt(A) ? (R = C,
                    Qt(C) ? R = lc(C) : (!We(C) || St(C)) && (R = Tu(A))) : j = !1
                }
                j && (b.set(A, R),
                h(R, A, u, m, b),
                b.delete(A)),
                Za(e, a, R)
            }
            function Qs(e, t) {
                var a = e.length;
                if (a)
                    return t += t < 0 ? a : 0,
                    _t(t, a) ? e[t] : r
            }
            function Js(e, t, a) {
                t.length ? t = ze(t, function(m) {
                    return oe(m) ? function(b) {
                        return Yt(b, m.length === 1 ? m[0] : m)
                    }
                    : m
                }) : t = [En];
                var u = -1;
                t = ze(t, Ln(ne()));
                var h = Ys(e, function(m, b, C) {
                    var A = ze(t, function(D) {
                        return D(m)
                    });
                    return {
                        criteria: A,
                        index: ++u,
                        value: m
                    }
                });
                return Ep(h, function(m, b) {
                    return hg(m, b, a)
                })
            }
            function eg(e, t) {
                return eu(e, t, function(a, u) {
                    return Dl(e, u)
                })
            }
            function eu(e, t, a) {
                for (var u = -1, h = t.length, m = {}; ++u < h; ) {
                    var b = t[u]
                      , C = Yt(e, b);
                    a(C, b) && Gr(m, Nt(b, e), C)
                }
                return m
            }
            function ng(e) {
                return function(t) {
                    return Yt(t, e)
                }
            }
            function ll(e, t, a, u) {
                var h = u ? Cp : sr
                  , m = -1
                  , b = t.length
                  , C = e;
                for (e === t && (t = Sn(t)),
                a && (C = ze(e, Ln(a))); ++m < b; )
                    for (var A = 0, D = t[m], R = a ? a(D) : D; (A = h(C, R, A, u)) > -1; )
                        C !== e && ki.call(C, A, 1),
                        ki.call(e, A, 1);
                return e
            }
            function nu(e, t) {
                for (var a = e ? t.length : 0, u = a - 1; a--; ) {
                    var h = t[a];
                    if (a == u || h !== m) {
                        var m = h;
                        _t(h) ? ki.call(e, h, 1) : cl(e, h)
                    }
                }
                return e
            }
            function ol(e, t) {
                return e + Ai(Ns() * (t - e + 1))
            }
            function tg(e, t, a, u) {
                for (var h = -1, m = nn(Ei((t - e) / (a || 1)), 0), b = T(m); m--; )
                    b[u ? m : ++h] = e,
                    e += a;
                return b
            }
            function sl(e, t) {
                var a = "";
                if (!e || t < 1 || t > $e)
                    return a;
                do
                    t % 2 && (a += e),
                    t = Ai(t / 2),
                    t && (e += e);
                while (t);
                return a
            }
            function he(e, t) {
                return Cl(Lu(e, t, En), e + "")
            }
            function rg(e) {
                return Fs(br(e))
            }
            function ig(e, t) {
                var a = br(e);
                return Wi(a, Kt(t, 0, a.length))
            }
            function Gr(e, t, a, u) {
                if (!We(e))
                    return e;
                t = Nt(t, e);
                for (var h = -1, m = t.length, b = m - 1, C = e; C != null && ++h < m; ) {
                    var A = ft(t[h])
                      , D = a;
                    if (A === "__proto__" || A === "constructor" || A === "prototype")
                        return e;
                    if (h != b) {
                        var R = C[A];
                        D = u ? u(R, A, C) : r,
                        D === r && (D = We(R) ? R : _t(t[h + 1]) ? [] : {})
                    }
                    Ur(C, A, D),
                    C = C[A]
                }
                return e
            }
            var tu = Ti ? function(e, t) {
                return Ti.set(e, t),
                e
            }
            : En
              , ag = Ci ? function(e, t) {
                return Ci(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Nl(t),
                    writable: !0
                })
            }
            : En;
            function lg(e) {
                return Wi(br(e))
            }
            function Vn(e, t, a) {
                var u = -1
                  , h = e.length;
                t < 0 && (t = -t > h ? 0 : h + t),
                a = a > h ? h : a,
                a < 0 && (a += h),
                h = t > a ? 0 : a - t >>> 0,
                t >>>= 0;
                for (var m = T(h); ++u < h; )
                    m[u] = e[u + t];
                return m
            }
            function og(e, t) {
                var a;
                return Dt(e, function(u, h, m) {
                    return a = t(u, h, m),
                    !a
                }),
                !!a
            }
            function Ni(e, t, a) {
                var u = 0
                  , h = e == null ? u : e.length;
                if (typeof t == "number" && t === t && h <= _) {
                    for (; u < h; ) {
                        var m = u + h >>> 1
                          , b = e[m];
                        b !== null && !Dn(b) && (a ? b <= t : b < t) ? u = m + 1 : h = m
                    }
                    return h
                }
                return ul(e, t, En, a)
            }
            function ul(e, t, a, u) {
                var h = 0
                  , m = e == null ? 0 : e.length;
                if (m === 0)
                    return 0;
                t = a(t);
                for (var b = t !== t, C = t === null, A = Dn(t), D = t === r; h < m; ) {
                    var R = Ai((h + m) / 2)
                      , j = a(e[R])
                      , H = j !== r
                      , K = j === null
                      , te = j === j
                      , fe = Dn(j);
                    if (b)
                        var re = u || te;
                    else
                        D ? re = te && (u || H) : C ? re = te && H && (u || !K) : A ? re = te && H && !K && (u || !fe) : K || fe ? re = !1 : re = u ? j <= t : j < t;
                    re ? h = R + 1 : m = R
                }
                return hn(m, Ie)
            }
            function ru(e, t) {
                for (var a = -1, u = e.length, h = 0, m = []; ++a < u; ) {
                    var b = e[a]
                      , C = t ? t(b) : b;
                    if (!a || !rt(C, A)) {
                        var A = C;
                        m[h++] = b === 0 ? 0 : b
                    }
                }
                return m
            }
            function iu(e) {
                return typeof e == "number" ? e : Dn(e) ? S : +e
            }
            function Pn(e) {
                if (typeof e == "string")
                    return e;
                if (oe(e))
                    return ze(e, Pn) + "";
                if (Dn(e))
                    return Ms ? Ms.call(e) : "";
                var t = e + "";
                return t == "0" && 1 / e == -Ee ? "-0" : t
            }
            function Rt(e, t, a) {
                var u = -1
                  , h = di
                  , m = e.length
                  , b = !0
                  , C = []
                  , A = C;
                if (a)
                    b = !1,
                    h = Fa;
                else if (m >= o) {
                    var D = t ? null : yg(e);
                    if (D)
                        return mi(D);
                    b = !1,
                    h = Mr,
                    A = new Vt
                } else
                    A = t ? [] : C;
                e: for (; ++u < m; ) {
                    var R = e[u]
                      , j = t ? t(R) : R;
                    if (R = a || R !== 0 ? R : 0,
                    b && j === j) {
                        for (var H = A.length; H--; )
                            if (A[H] === j)
                                continue e;
                        t && A.push(j),
                        C.push(R)
                    } else
                        h(A, j, a) || (A !== C && A.push(j),
                        C.push(R))
                }
                return C
            }
            function cl(e, t) {
                return t = Nt(t, e),
                e = Pu(e, t),
                e == null || delete e[ft(Kn(t))]
            }
            function au(e, t, a, u) {
                return Gr(e, t, a(Yt(e, t)), u)
            }
            function Mi(e, t, a, u) {
                for (var h = e.length, m = u ? h : -1; (u ? m-- : ++m < h) && t(e[m], m, e); )
                    ;
                return a ? Vn(e, u ? 0 : m, u ? m + 1 : h) : Vn(e, u ? m + 1 : 0, u ? h : m)
            }
            function lu(e, t) {
                var a = e;
                return a instanceof xe && (a = a.value()),
                za(t, function(u, h) {
                    return h.func.apply(h.thisArg, Ot([u], h.args))
                }, a)
            }
            function fl(e, t, a) {
                var u = e.length;
                if (u < 2)
                    return u ? Rt(e[0]) : [];
                for (var h = -1, m = T(u); ++h < u; )
                    for (var b = e[h], C = -1; ++C < u; )
                        C != h && (m[h] = Hr(m[h] || b, e[C], t, a));
                return Rt(cn(m, 1), t, a)
            }
            function ou(e, t, a) {
                for (var u = -1, h = e.length, m = t.length, b = {}; ++u < h; ) {
                    var C = u < m ? t[u] : r;
                    a(b, e[u], C)
                }
                return b
            }
            function hl(e) {
                return Ye(e) ? e : []
            }
            function pl(e) {
                return typeof e == "function" ? e : En
            }
            function Nt(e, t) {
                return oe(e) ? e : _l(e, t) ? [e] : Mu(ke(e))
            }
            var sg = he;
            function Mt(e, t, a) {
                var u = e.length;
                return a = a === r ? u : a,
                !t && a >= u ? e : Vn(e, t, a)
            }
            var su = Yp || function(e) {
                return un.clearTimeout(e)
            }
            ;
            function uu(e, t) {
                if (t)
                    return e.slice();
                var a = e.length
                  , u = Os ? Os(a) : new e.constructor(a);
                return e.copy(u),
                u
            }
            function dl(e) {
                var t = new e.constructor(e.byteLength);
                return new _i(t).set(new _i(e)),
                t
            }
            function ug(e, t) {
                var a = t ? dl(e.buffer) : e.buffer;
                return new e.constructor(a,e.byteOffset,e.byteLength)
            }
            function cg(e) {
                var t = new e.constructor(e.source,mt.exec(e));
                return t.lastIndex = e.lastIndex,
                t
            }
            function fg(e) {
                return $r ? Ae($r.call(e)) : {}
            }
            function cu(e, t) {
                var a = t ? dl(e.buffer) : e.buffer;
                return new e.constructor(a,e.byteOffset,e.length)
            }
            function fu(e, t) {
                if (e !== t) {
                    var a = e !== r
                      , u = e === null
                      , h = e === e
                      , m = Dn(e)
                      , b = t !== r
                      , C = t === null
                      , A = t === t
                      , D = Dn(t);
                    if (!C && !D && !m && e > t || m && b && A && !C && !D || u && b && A || !a && A || !h)
                        return 1;
                    if (!u && !m && !D && e < t || D && a && h && !u && !m || C && a && h || !b && h || !A)
                        return -1
                }
                return 0
            }
            function hg(e, t, a) {
                for (var u = -1, h = e.criteria, m = t.criteria, b = h.length, C = a.length; ++u < b; ) {
                    var A = fu(h[u], m[u]);
                    if (A) {
                        if (u >= C)
                            return A;
                        var D = a[u];
                        return A * (D == "desc" ? -1 : 1)
                    }
                }
                return e.index - t.index
            }
            function hu(e, t, a, u) {
                for (var h = -1, m = e.length, b = a.length, C = -1, A = t.length, D = nn(m - b, 0), R = T(A + D), j = !u; ++C < A; )
                    R[C] = t[C];
                for (; ++h < b; )
                    (j || h < m) && (R[a[h]] = e[h]);
                for (; D--; )
                    R[C++] = e[h++];
                return R
            }
            function pu(e, t, a, u) {
                for (var h = -1, m = e.length, b = -1, C = a.length, A = -1, D = t.length, R = nn(m - C, 0), j = T(R + D), H = !u; ++h < R; )
                    j[h] = e[h];
                for (var K = h; ++A < D; )
                    j[K + A] = t[A];
                for (; ++b < C; )
                    (H || h < m) && (j[K + a[b]] = e[h++]);
                return j
            }
            function Sn(e, t) {
                var a = -1
                  , u = e.length;
                for (t || (t = T(u)); ++a < u; )
                    t[a] = e[a];
                return t
            }
            function ct(e, t, a, u) {
                var h = !a;
                a || (a = {});
                for (var m = -1, b = t.length; ++m < b; ) {
                    var C = t[m]
                      , A = u ? u(a[C], e[C], C, a, e) : r;
                    A === r && (A = e[C]),
                    h ? vt(a, C, A) : Ur(a, C, A)
                }
                return a
            }
            function pg(e, t) {
                return ct(e, wl(e), t)
            }
            function dg(e, t) {
                return ct(e, Eu(e), t)
            }
            function ji(e, t) {
                return function(a, u) {
                    var h = oe(a) ? vp : Md
                      , m = t ? t() : {};
                    return h(a, e, ne(u, 2), m)
                }
            }
            function mr(e) {
                return he(function(t, a) {
                    var u = -1
                      , h = a.length
                      , m = h > 1 ? a[h - 1] : r
                      , b = h > 2 ? a[2] : r;
                    for (m = e.length > 3 && typeof m == "function" ? (h--,
                    m) : r,
                    b && vn(a[0], a[1], b) && (m = h < 3 ? r : m,
                    h = 1),
                    t = Ae(t); ++u < h; ) {
                        var C = a[u];
                        C && e(t, C, u, m)
                    }
                    return t
                })
            }
            function du(e, t) {
                return function(a, u) {
                    if (a == null)
                        return a;
                    if (!kn(a))
                        return e(a, u);
                    for (var h = a.length, m = t ? h : -1, b = Ae(a); (t ? m-- : ++m < h) && u(b[m], m, b) !== !1; )
                        ;
                    return a
                }
            }
            function gu(e) {
                return function(t, a, u) {
                    for (var h = -1, m = Ae(t), b = u(t), C = b.length; C--; ) {
                        var A = b[e ? C : ++h];
                        if (a(m[A], A, m) === !1)
                            break
                    }
                    return t
                }
            }
            function gg(e, t, a) {
                var u = t & $
                  , h = Vr(e);
                function m() {
                    var b = this && this !== un && this instanceof m ? h : e;
                    return b.apply(u ? a : this, arguments)
                }
                return m
            }
            function mu(e) {
                return function(t) {
                    t = ke(t);
                    var a = ur(t) ? nt(t) : r
                      , u = a ? a[0] : t.charAt(0)
                      , h = a ? Mt(a, 1).join("") : t.slice(1);
                    return u[e]() + h
                }
            }
            function xr(e) {
                return function(t) {
                    return za(dc(pc(t).replace(ap, "")), e, "")
                }
            }
            function Vr(e) {
                return function() {
                    var t = arguments;
                    switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0],t[1]);
                    case 3:
                        return new e(t[0],t[1],t[2]);
                    case 4:
                        return new e(t[0],t[1],t[2],t[3]);
                    case 5:
                        return new e(t[0],t[1],t[2],t[3],t[4]);
                    case 6:
                        return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
                    case 7:
                        return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
                    }
                    var a = gr(e.prototype)
                      , u = e.apply(a, t);
                    return We(u) ? u : a
                }
            }
            function mg(e, t, a) {
                var u = Vr(e);
                function h() {
                    for (var m = arguments.length, b = T(m), C = m, A = yr(h); C--; )
                        b[C] = arguments[C];
                    var D = m < 3 && b[0] !== A && b[m - 1] !== A ? [] : Lt(b, A);
                    if (m -= D.length,
                    m < a)
                        return wu(e, t, Fi, h.placeholder, r, b, D, r, r, a - m);
                    var R = this && this !== un && this instanceof h ? u : e;
                    return On(R, this, b)
                }
                return h
            }
            function xu(e) {
                return function(t, a, u) {
                    var h = Ae(t);
                    if (!kn(t)) {
                        var m = ne(a, 3);
                        t = an(t),
                        a = function(C) {
                            return m(h[C], C, h)
                        }
                    }
                    var b = e(t, a, u);
                    return b > -1 ? h[m ? t[b] : b] : r
                }
            }
            function yu(e) {
                return wt(function(t) {
                    var a = t.length
                      , u = a
                      , h = qn.prototype.thru;
                    for (e && t.reverse(); u--; ) {
                        var m = t[u];
                        if (typeof m != "function")
                            throw new Wn(c);
                        if (h && !b && Ui(m) == "wrapper")
                            var b = new qn([],!0)
                    }
                    for (u = b ? u : a; ++u < a; ) {
                        m = t[u];
                        var C = Ui(m)
                          , A = C == "wrapper" ? vl(m) : r;
                        A && Sl(A[0]) && A[1] == (V | z | Y | pe) && !A[4].length && A[9] == 1 ? b = b[Ui(A[0])].apply(b, A[3]) : b = m.length == 1 && Sl(m) ? b[C]() : b.thru(m)
                    }
                    return function() {
                        var D = arguments
                          , R = D[0];
                        if (b && D.length == 1 && oe(R))
                            return b.plant(R).value();
                        for (var j = 0, H = a ? t[j].apply(this, D) : R; ++j < a; )
                            H = t[j].call(this, H);
                        return H
                    }
                })
            }
            function Fi(e, t, a, u, h, m, b, C, A, D) {
                var R = t & V
                  , j = t & $
                  , H = t & M
                  , K = t & (z | J)
                  , te = t & ie
                  , fe = H ? r : Vr(e);
                function re() {
                    for (var ge = arguments.length, ve = T(ge), Rn = ge; Rn--; )
                        ve[Rn] = arguments[Rn];
                    if (K)
                        var bn = yr(re)
                          , Nn = Tp(ve, bn);
                    if (u && (ve = hu(ve, u, h, K)),
                    m && (ve = pu(ve, m, b, K)),
                    ge -= Nn,
                    K && ge < D) {
                        var Xe = Lt(ve, bn);
                        return wu(e, t, Fi, re.placeholder, a, ve, Xe, C, A, D - ge)
                    }
                    var it = j ? a : this
                      , Ct = H ? it[e] : e;
                    return ge = ve.length,
                    C ? ve = Mg(ve, C) : te && ge > 1 && ve.reverse(),
                    R && A < ge && (ve.length = A),
                    this && this !== un && this instanceof re && (Ct = fe || Vr(Ct)),
                    Ct.apply(it, ve)
                }
                return re
            }
            function vu(e, t) {
                return function(a, u) {
                    return Wd(a, e, t(u), {})
                }
            }
            function zi(e, t) {
                return function(a, u) {
                    var h;
                    if (a === r && u === r)
                        return t;
                    if (a !== r && (h = a),
                    u !== r) {
                        if (h === r)
                            return u;
                        typeof a == "string" || typeof u == "string" ? (a = Pn(a),
                        u = Pn(u)) : (a = iu(a),
                        u = iu(u)),
                        h = e(a, u)
                    }
                    return h
                }
            }
            function gl(e) {
                return wt(function(t) {
                    return t = ze(t, Ln(ne())),
                    he(function(a) {
                        var u = this;
                        return e(t, function(h) {
                            return On(h, u, a)
                        })
                    })
                })
            }
            function Bi(e, t) {
                t = t === r ? " " : Pn(t);
                var a = t.length;
                if (a < 2)
                    return a ? sl(t, e) : t;
                var u = sl(t, Ei(e / cr(t)));
                return ur(t) ? Mt(nt(u), 0, e).join("") : u.slice(0, e)
            }
            function xg(e, t, a, u) {
                var h = t & $
                  , m = Vr(e);
                function b() {
                    for (var C = -1, A = arguments.length, D = -1, R = u.length, j = T(R + A), H = this && this !== un && this instanceof b ? m : e; ++D < R; )
                        j[D] = u[D];
                    for (; A--; )
                        j[D++] = arguments[++C];
                    return On(H, h ? a : this, j)
                }
                return b
            }
            function bu(e) {
                return function(t, a, u) {
                    return u && typeof u != "number" && vn(t, a, u) && (a = u = r),
                    t = kt(t),
                    a === r ? (a = t,
                    t = 0) : a = kt(a),
                    u = u === r ? t < a ? 1 : -1 : kt(u),
                    tg(t, a, u, e)
                }
            }
            function $i(e) {
                return function(t, a) {
                    return typeof t == "string" && typeof a == "string" || (t = Yn(t),
                    a = Yn(a)),
                    e(t, a)
                }
            }
            function wu(e, t, a, u, h, m, b, C, A, D) {
                var R = t & z
                  , j = R ? b : r
                  , H = R ? r : b
                  , K = R ? m : r
                  , te = R ? r : m;
                t |= R ? Y : P,
                t &= ~(R ? P : Y),
                t & W || (t &= ~($ | M));
                var fe = [e, t, h, K, j, te, H, C, A, D]
                  , re = a.apply(r, fe);
                return Sl(e) && Du(re, fe),
                re.placeholder = u,
                Ru(re, e, t)
            }
            function ml(e) {
                var t = en[e];
                return function(a, u) {
                    if (a = Yn(a),
                    u = u == null ? 0 : hn(ue(u), 292),
                    u && Rs(a)) {
                        var h = (ke(a) + "e").split("e")
                          , m = t(h[0] + "e" + (+h[1] + u));
                        return h = (ke(m) + "e").split("e"),
                        +(h[0] + "e" + (+h[1] - u))
                    }
                    return t(a)
                }
            }
            var yg = pr && 1 / mi(new pr([, -0]))[1] == Ee ? function(e) {
                return new pr(e)
            }
            : Fl;
            function _u(e) {
                return function(t) {
                    var a = pn(t);
                    return a == Ke ? Ga(t) : a == xn ? Np(t) : Ap(t, e(t))
                }
            }
            function bt(e, t, a, u, h, m, b, C) {
                var A = t & M;
                if (!A && typeof e != "function")
                    throw new Wn(c);
                var D = u ? u.length : 0;
                if (D || (t &= ~(Y | P),
                u = h = r),
                b = b === r ? b : nn(ue(b), 0),
                C = C === r ? C : ue(C),
                D -= h ? h.length : 0,
                t & P) {
                    var R = u
                      , j = h;
                    u = h = r
                }
                var H = A ? r : vl(e)
                  , K = [e, t, a, u, h, R, j, m, b, C];
                if (H && Dg(K, H),
                e = K[0],
                t = K[1],
                a = K[2],
                u = K[3],
                h = K[4],
                C = K[9] = K[9] === r ? A ? 0 : e.length : nn(K[9] - D, 0),
                !C && t & (z | J) && (t &= ~(z | J)),
                !t || t == $)
                    var te = gg(e, t, a);
                else
                    t == z || t == J ? te = mg(e, t, C) : (t == Y || t == ($ | Y)) && !h.length ? te = xg(e, t, a, u) : te = Fi.apply(r, K);
                var fe = H ? tu : Du;
                return Ru(fe(te, K), e, t)
            }
            function Su(e, t, a, u) {
                return e === r || rt(e, hr[a]) && !Ce.call(u, a) ? t : e
            }
            function ku(e, t, a, u, h, m) {
                return We(e) && We(t) && (m.set(t, e),
                Ri(e, t, r, ku, m),
                m.delete(t)),
                e
            }
            function vg(e) {
                return Xr(e) ? r : e
            }
            function Cu(e, t, a, u, h, m) {
                var b = a & I
                  , C = e.length
                  , A = t.length;
                if (C != A && !(b && A > C))
                    return !1;
                var D = m.get(e)
                  , R = m.get(t);
                if (D && R)
                    return D == t && R == e;
                var j = -1
                  , H = !0
                  , K = a & N ? new Vt : r;
                for (m.set(e, t),
                m.set(t, e); ++j < C; ) {
                    var te = e[j]
                      , fe = t[j];
                    if (u)
                        var re = b ? u(fe, te, j, t, e, m) : u(te, fe, j, e, t, m);
                    if (re !== r) {
                        if (re)
                            continue;
                        H = !1;
                        break
                    }
                    if (K) {
                        if (!Ba(t, function(ge, ve) {
                            if (!Mr(K, ve) && (te === ge || h(te, ge, a, u, m)))
                                return K.push(ve)
                        })) {
                            H = !1;
                            break
                        }
                    } else if (!(te === fe || h(te, fe, a, u, m))) {
                        H = !1;
                        break
                    }
                }
                return m.delete(e),
                m.delete(t),
                H
            }
            function bg(e, t, a, u, h, m, b) {
                switch (a) {
                case ee:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                        return !1;
                    e = e.buffer,
                    t = t.buffer;
                case Q:
                    return !(e.byteLength != t.byteLength || !m(new _i(e), new _i(t)));
                case ln:
                case _n:
                case Bn:
                    return rt(+e, +t);
                case Ve:
                    return e.name == t.name && e.message == t.message;
                case gt:
                case lt:
                    return e == t + "";
                case Ke:
                    var C = Ga;
                case xn:
                    var A = u & I;
                    if (C || (C = mi),
                    e.size != t.size && !A)
                        return !1;
                    var D = b.get(e);
                    if (D)
                        return D == t;
                    u |= N,
                    b.set(e, t);
                    var R = Cu(C(e), C(t), u, h, m, b);
                    return b.delete(e),
                    R;
                case At:
                    if ($r)
                        return $r.call(e) == $r.call(t)
                }
                return !1
            }
            function wg(e, t, a, u, h, m) {
                var b = a & I
                  , C = xl(e)
                  , A = C.length
                  , D = xl(t)
                  , R = D.length;
                if (A != R && !b)
                    return !1;
                for (var j = A; j--; ) {
                    var H = C[j];
                    if (!(b ? H in t : Ce.call(t, H)))
                        return !1
                }
                var K = m.get(e)
                  , te = m.get(t);
                if (K && te)
                    return K == t && te == e;
                var fe = !0;
                m.set(e, t),
                m.set(t, e);
                for (var re = b; ++j < A; ) {
                    H = C[j];
                    var ge = e[H]
                      , ve = t[H];
                    if (u)
                        var Rn = b ? u(ve, ge, H, t, e, m) : u(ge, ve, H, e, t, m);
                    if (!(Rn === r ? ge === ve || h(ge, ve, a, u, m) : Rn)) {
                        fe = !1;
                        break
                    }
                    re || (re = H == "constructor")
                }
                if (fe && !re) {
                    var bn = e.constructor
                      , Nn = t.constructor;
                    bn != Nn && "constructor" in e && "constructor" in t && !(typeof bn == "function" && bn instanceof bn && typeof Nn == "function" && Nn instanceof Nn) && (fe = !1)
                }
                return m.delete(e),
                m.delete(t),
                fe
            }
            function wt(e) {
                return Cl(Lu(e, r, Bu), e + "")
            }
            function xl(e) {
                return qs(e, an, wl)
            }
            function yl(e) {
                return qs(e, Cn, Eu)
            }
            var vl = Ti ? function(e) {
                return Ti.get(e)
            }
            : Fl;
            function Ui(e) {
                for (var t = e.name + "", a = dr[t], u = Ce.call(dr, t) ? a.length : 0; u--; ) {
                    var h = a[u]
                      , m = h.func;
                    if (m == null || m == e)
                        return h.name
                }
                return t
            }
            function yr(e) {
                var t = Ce.call(d, "placeholder") ? d : e;
                return t.placeholder
            }
            function ne() {
                var e = d.iteratee || Ml;
                return e = e === Ml ? Ks : e,
                arguments.length ? e(arguments[0], arguments[1]) : e
            }
            function Hi(e, t) {
                var a = e.__data__;
                return Ig(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map
            }
            function bl(e) {
                for (var t = an(e), a = t.length; a--; ) {
                    var u = t[a]
                      , h = e[u];
                    t[a] = [u, h, Iu(h)]
                }
                return t
            }
            function Xt(e, t) {
                var a = Pp(e, t);
                return Vs(a) ? a : r
            }
            function _g(e) {
                var t = Ce.call(e, qt)
                  , a = e[qt];
                try {
                    e[qt] = r;
                    var u = !0
                } catch {}
                var h = bi.call(e);
                return u && (t ? e[qt] = a : delete e[qt]),
                h
            }
            var wl = Ka ? function(e) {
                return e == null ? [] : (e = Ae(e),
                It(Ka(e), function(t) {
                    return Ps.call(e, t)
                }))
            }
            : zl
              , Eu = Ka ? function(e) {
                for (var t = []; e; )
                    Ot(t, wl(e)),
                    e = Si(e);
                return t
            }
            : zl
              , pn = yn;
            (Ya && pn(new Ya(new ArrayBuffer(1))) != ee || Fr && pn(new Fr) != Ke || Xa && pn(Xa.resolve()) != Jn || pr && pn(new pr) != xn || zr && pn(new zr) != O) && (pn = function(e) {
                var t = yn(e)
                  , a = t == mn ? e.constructor : r
                  , u = a ? Zt(a) : "";
                if (u)
                    switch (u) {
                    case id:
                        return ee;
                    case ad:
                        return Ke;
                    case ld:
                        return Jn;
                    case od:
                        return xn;
                    case sd:
                        return O
                    }
                return t
            }
            );
            function Sg(e, t, a) {
                for (var u = -1, h = a.length; ++u < h; ) {
                    var m = a[u]
                      , b = m.size;
                    switch (m.type) {
                    case "drop":
                        e += b;
                        break;
                    case "dropRight":
                        t -= b;
                        break;
                    case "take":
                        t = hn(t, e + b);
                        break;
                    case "takeRight":
                        e = nn(e, t - b);
                        break
                    }
                }
                return {
                    start: e,
                    end: t
                }
            }
            function kg(e) {
                var t = e.match(Oe);
                return t ? t[1].split(Fe) : []
            }
            function Au(e, t, a) {
                t = Nt(t, e);
                for (var u = -1, h = t.length, m = !1; ++u < h; ) {
                    var b = ft(t[u]);
                    if (!(m = e != null && a(e, b)))
                        break;
                    e = e[b]
                }
                return m || ++u != h ? m : (h = e == null ? 0 : e.length,
                !!h && Xi(h) && _t(b, h) && (oe(e) || Qt(e)))
            }
            function Cg(e) {
                var t = e.length
                  , a = new e.constructor(t);
                return t && typeof e[0] == "string" && Ce.call(e, "index") && (a.index = e.index,
                a.input = e.input),
                a
            }
            function Tu(e) {
                return typeof e.constructor == "function" && !Kr(e) ? gr(Si(e)) : {}
            }
            function Eg(e, t, a) {
                var u = e.constructor;
                switch (t) {
                case Q:
                    return dl(e);
                case ln:
                case _n:
                    return new u(+e);
                case ee:
                    return ug(e, a);
                case be:
                case Je:
                case on:
                case sn:
                case et:
                case ot:
                case de:
                case qe:
                case rn:
                    return cu(e, a);
                case Ke:
                    return new u;
                case Bn:
                case lt:
                    return new u(e);
                case gt:
                    return cg(e);
                case xn:
                    return new u;
                case At:
                    return fg(e)
                }
            }
            function Ag(e, t) {
                var a = t.length;
                if (!a)
                    return e;
                var u = a - 1;
                return t[u] = (a > 1 ? "& " : "") + t[u],
                t = t.join(a > 2 ? ", " : " "),
                e.replace(Z, `{
/* [wrapped with ` + t + `] */
`)
            }
            function Tg(e) {
                return oe(e) || Qt(e) || !!(Ds && e && e[Ds])
            }
            function _t(e, t) {
                var a = typeof e;
                return t = t ?? $e,
                !!t && (a == "number" || a != "symbol" && Oa.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
            function vn(e, t, a) {
                if (!We(a))
                    return !1;
                var u = typeof t;
                return (u == "number" ? kn(a) && _t(t, a.length) : u == "string" && t in a) ? rt(a[t], e) : !1
            }
            function _l(e, t) {
                if (oe(e))
                    return !1;
                var a = typeof e;
                return a == "number" || a == "symbol" || a == "boolean" || e == null || Dn(e) ? !0 : Ca.test(e) || !ci.test(e) || t != null && e in Ae(t)
            }
            function Ig(e) {
                var t = typeof e;
                return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
            }
            function Sl(e) {
                var t = Ui(e)
                  , a = d[t];
                if (typeof a != "function" || !(t in xe.prototype))
                    return !1;
                if (e === a)
                    return !0;
                var u = vl(a);
                return !!u && e === u[0]
            }
            function Og(e) {
                return !!Is && Is in e
            }
            var Lg = yi ? St : Bl;
            function Kr(e) {
                var t = e && e.constructor
                  , a = typeof t == "function" && t.prototype || hr;
                return e === a
            }
            function Iu(e) {
                return e === e && !We(e)
            }
            function Ou(e, t) {
                return function(a) {
                    return a == null ? !1 : a[e] === t && (t !== r || e in Ae(a))
                }
            }
            function Pg(e) {
                var t = Ki(e, function(u) {
                    return a.size === g && a.clear(),
                    u
                })
                  , a = t.cache;
                return t
            }
            function Dg(e, t) {
                var a = e[1]
                  , u = t[1]
                  , h = a | u
                  , m = h < ($ | M | V)
                  , b = u == V && a == z || u == V && a == pe && e[7].length <= t[8] || u == (V | pe) && t[7].length <= t[8] && a == z;
                if (!(m || b))
                    return e;
                u & $ && (e[2] = t[2],
                h |= a & $ ? 0 : W);
                var C = t[3];
                if (C) {
                    var A = e[3];
                    e[3] = A ? hu(A, C, t[4]) : C,
                    e[4] = A ? Lt(e[3], x) : t[4]
                }
                return C = t[5],
                C && (A = e[5],
                e[5] = A ? pu(A, C, t[6]) : C,
                e[6] = A ? Lt(e[5], x) : t[6]),
                C = t[7],
                C && (e[7] = C),
                u & V && (e[8] = e[8] == null ? t[8] : hn(e[8], t[8])),
                e[9] == null && (e[9] = t[9]),
                e[0] = t[0],
                e[1] = h,
                e
            }
            function Rg(e) {
                var t = [];
                if (e != null)
                    for (var a in Ae(e))
                        t.push(a);
                return t
            }
            function Ng(e) {
                return bi.call(e)
            }
            function Lu(e, t, a) {
                return t = nn(t === r ? e.length - 1 : t, 0),
                function() {
                    for (var u = arguments, h = -1, m = nn(u.length - t, 0), b = T(m); ++h < m; )
                        b[h] = u[t + h];
                    h = -1;
                    for (var C = T(t + 1); ++h < t; )
                        C[h] = u[h];
                    return C[t] = a(b),
                    On(e, this, C)
                }
            }
            function Pu(e, t) {
                return t.length < 2 ? e : Yt(e, Vn(t, 0, -1))
            }
            function Mg(e, t) {
                for (var a = e.length, u = hn(t.length, a), h = Sn(e); u--; ) {
                    var m = t[u];
                    e[u] = _t(m, a) ? h[m] : r
                }
                return e
            }
            function kl(e, t) {
                if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
                    return e[t]
            }
            var Du = Nu(tu)
              , Yr = Zp || function(e, t) {
                return un.setTimeout(e, t)
            }
              , Cl = Nu(ag);
            function Ru(e, t, a) {
                var u = t + "";
                return Cl(e, Ag(u, jg(kg(u), a)))
            }
            function Nu(e) {
                var t = 0
                  , a = 0;
                return function() {
                    var u = nd()
                      , h = ye - (u - a);
                    if (a = u,
                    h > 0) {
                        if (++t >= U)
                            return arguments[0]
                    } else
                        t = 0;
                    return e.apply(r, arguments)
                }
            }
            function Wi(e, t) {
                var a = -1
                  , u = e.length
                  , h = u - 1;
                for (t = t === r ? u : t; ++a < t; ) {
                    var m = ol(a, h)
                      , b = e[m];
                    e[m] = e[a],
                    e[a] = b
                }
                return e.length = t,
                e
            }
            var Mu = Pg(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""),
                e.replace(Ea, function(a, u, h, m) {
                    t.push(h ? m.replace(lr, "$1") : u || a)
                }),
                t
            });
            function ft(e) {
                if (typeof e == "string" || Dn(e))
                    return e;
                var t = e + "";
                return t == "0" && 1 / e == -Ee ? "-0" : t
            }
            function Zt(e) {
                if (e != null) {
                    try {
                        return vi.call(e)
                    } catch {}
                    try {
                        return e + ""
                    } catch {}
                }
                return ""
            }
            function jg(e, t) {
                return Hn(Ue, function(a) {
                    var u = "_." + a[0];
                    t & a[1] && !di(e, u) && e.push(u)
                }),
                e.sort()
            }
            function ju(e) {
                if (e instanceof xe)
                    return e.clone();
                var t = new qn(e.__wrapped__,e.__chain__);
                return t.__actions__ = Sn(e.__actions__),
                t.__index__ = e.__index__,
                t.__values__ = e.__values__,
                t
            }
            function Fg(e, t, a) {
                (a ? vn(e, t, a) : t === r) ? t = 1 : t = nn(ue(t), 0);
                var u = e == null ? 0 : e.length;
                if (!u || t < 1)
                    return [];
                for (var h = 0, m = 0, b = T(Ei(u / t)); h < u; )
                    b[m++] = Vn(e, h, h += t);
                return b
            }
            function zg(e) {
                for (var t = -1, a = e == null ? 0 : e.length, u = 0, h = []; ++t < a; ) {
                    var m = e[t];
                    m && (h[u++] = m)
                }
                return h
            }
            function Bg() {
                var e = arguments.length;
                if (!e)
                    return [];
                for (var t = T(e - 1), a = arguments[0], u = e; u--; )
                    t[u - 1] = arguments[u];
                return Ot(oe(a) ? Sn(a) : [a], cn(t, 1))
            }
            var $g = he(function(e, t) {
                return Ye(e) ? Hr(e, cn(t, 1, Ye, !0)) : []
            })
              , Ug = he(function(e, t) {
                var a = Kn(t);
                return Ye(a) && (a = r),
                Ye(e) ? Hr(e, cn(t, 1, Ye, !0), ne(a, 2)) : []
            })
              , Hg = he(function(e, t) {
                var a = Kn(t);
                return Ye(a) && (a = r),
                Ye(e) ? Hr(e, cn(t, 1, Ye, !0), r, a) : []
            });
            function Wg(e, t, a) {
                var u = e == null ? 0 : e.length;
                return u ? (t = a || t === r ? 1 : ue(t),
                Vn(e, t < 0 ? 0 : t, u)) : []
            }
            function qg(e, t, a) {
                var u = e == null ? 0 : e.length;
                return u ? (t = a || t === r ? 1 : ue(t),
                t = u - t,
                Vn(e, 0, t < 0 ? 0 : t)) : []
            }
            function Gg(e, t) {
                return e && e.length ? Mi(e, ne(t, 3), !0, !0) : []
            }
            function Vg(e, t) {
                return e && e.length ? Mi(e, ne(t, 3), !0) : []
            }
            function Kg(e, t, a, u) {
                var h = e == null ? 0 : e.length;
                return h ? (a && typeof a != "number" && vn(e, t, a) && (a = 0,
                u = h),
                Bd(e, t, a, u)) : []
            }
            function Fu(e, t, a) {
                var u = e == null ? 0 : e.length;
                if (!u)
                    return -1;
                var h = a == null ? 0 : ue(a);
                return h < 0 && (h = nn(u + h, 0)),
                gi(e, ne(t, 3), h)
            }
            function zu(e, t, a) {
                var u = e == null ? 0 : e.length;
                if (!u)
                    return -1;
                var h = u - 1;
                return a !== r && (h = ue(a),
                h = a < 0 ? nn(u + h, 0) : hn(h, u - 1)),
                gi(e, ne(t, 3), h, !0)
            }
            function Bu(e) {
                var t = e == null ? 0 : e.length;
                return t ? cn(e, 1) : []
            }
            function Yg(e) {
                var t = e == null ? 0 : e.length;
                return t ? cn(e, Ee) : []
            }
            function Xg(e, t) {
                var a = e == null ? 0 : e.length;
                return a ? (t = t === r ? 1 : ue(t),
                cn(e, t)) : []
            }
            function Zg(e) {
                for (var t = -1, a = e == null ? 0 : e.length, u = {}; ++t < a; ) {
                    var h = e[t];
                    u[h[0]] = h[1]
                }
                return u
            }
            function $u(e) {
                return e && e.length ? e[0] : r
            }
            function Qg(e, t, a) {
                var u = e == null ? 0 : e.length;
                if (!u)
                    return -1;
                var h = a == null ? 0 : ue(a);
                return h < 0 && (h = nn(u + h, 0)),
                sr(e, t, h)
            }
            function Jg(e) {
                var t = e == null ? 0 : e.length;
                return t ? Vn(e, 0, -1) : []
            }
            var em = he(function(e) {
                var t = ze(e, hl);
                return t.length && t[0] === e[0] ? tl(t) : []
            })
              , nm = he(function(e) {
                var t = Kn(e)
                  , a = ze(e, hl);
                return t === Kn(a) ? t = r : a.pop(),
                a.length && a[0] === e[0] ? tl(a, ne(t, 2)) : []
            })
              , tm = he(function(e) {
                var t = Kn(e)
                  , a = ze(e, hl);
                return t = typeof t == "function" ? t : r,
                t && a.pop(),
                a.length && a[0] === e[0] ? tl(a, r, t) : []
            });
            function rm(e, t) {
                return e == null ? "" : Jp.call(e, t)
            }
            function Kn(e) {
                var t = e == null ? 0 : e.length;
                return t ? e[t - 1] : r
            }
            function im(e, t, a) {
                var u = e == null ? 0 : e.length;
                if (!u)
                    return -1;
                var h = u;
                return a !== r && (h = ue(a),
                h = h < 0 ? nn(u + h, 0) : hn(h, u - 1)),
                t === t ? jp(e, t, h) : gi(e, ws, h, !0)
            }
            function am(e, t) {
                return e && e.length ? Qs(e, ue(t)) : r
            }
            var lm = he(Uu);
            function Uu(e, t) {
                return e && e.length && t && t.length ? ll(e, t) : e
            }
            function om(e, t, a) {
                return e && e.length && t && t.length ? ll(e, t, ne(a, 2)) : e
            }
            function sm(e, t, a) {
                return e && e.length && t && t.length ? ll(e, t, r, a) : e
            }
            var um = wt(function(e, t) {
                var a = e == null ? 0 : e.length
                  , u = Qa(e, t);
                return nu(e, ze(t, function(h) {
                    return _t(h, a) ? +h : h
                }).sort(fu)),
                u
            });
            function cm(e, t) {
                var a = [];
                if (!(e && e.length))
                    return a;
                var u = -1
                  , h = []
                  , m = e.length;
                for (t = ne(t, 3); ++u < m; ) {
                    var b = e[u];
                    t(b, u, e) && (a.push(b),
                    h.push(u))
                }
                return nu(e, h),
                a
            }
            function El(e) {
                return e == null ? e : rd.call(e)
            }
            function fm(e, t, a) {
                var u = e == null ? 0 : e.length;
                return u ? (a && typeof a != "number" && vn(e, t, a) ? (t = 0,
                a = u) : (t = t == null ? 0 : ue(t),
                a = a === r ? u : ue(a)),
                Vn(e, t, a)) : []
            }
            function hm(e, t) {
                return Ni(e, t)
            }
            function pm(e, t, a) {
                return ul(e, t, ne(a, 2))
            }
            function dm(e, t) {
                var a = e == null ? 0 : e.length;
                if (a) {
                    var u = Ni(e, t);
                    if (u < a && rt(e[u], t))
                        return u
                }
                return -1
            }
            function gm(e, t) {
                return Ni(e, t, !0)
            }
            function mm(e, t, a) {
                return ul(e, t, ne(a, 2), !0)
            }
            function xm(e, t) {
                var a = e == null ? 0 : e.length;
                if (a) {
                    var u = Ni(e, t, !0) - 1;
                    if (rt(e[u], t))
                        return u
                }
                return -1
            }
            function ym(e) {
                return e && e.length ? ru(e) : []
            }
            function vm(e, t) {
                return e && e.length ? ru(e, ne(t, 2)) : []
            }
            function bm(e) {
                var t = e == null ? 0 : e.length;
                return t ? Vn(e, 1, t) : []
            }
            function wm(e, t, a) {
                return e && e.length ? (t = a || t === r ? 1 : ue(t),
                Vn(e, 0, t < 0 ? 0 : t)) : []
            }
            function _m(e, t, a) {
                var u = e == null ? 0 : e.length;
                return u ? (t = a || t === r ? 1 : ue(t),
                t = u - t,
                Vn(e, t < 0 ? 0 : t, u)) : []
            }
            function Sm(e, t) {
                return e && e.length ? Mi(e, ne(t, 3), !1, !0) : []
            }
            function km(e, t) {
                return e && e.length ? Mi(e, ne(t, 3)) : []
            }
            var Cm = he(function(e) {
                return Rt(cn(e, 1, Ye, !0))
            })
              , Em = he(function(e) {
                var t = Kn(e);
                return Ye(t) && (t = r),
                Rt(cn(e, 1, Ye, !0), ne(t, 2))
            })
              , Am = he(function(e) {
                var t = Kn(e);
                return t = typeof t == "function" ? t : r,
                Rt(cn(e, 1, Ye, !0), r, t)
            });
            function Tm(e) {
                return e && e.length ? Rt(e) : []
            }
            function Im(e, t) {
                return e && e.length ? Rt(e, ne(t, 2)) : []
            }
            function Om(e, t) {
                return t = typeof t == "function" ? t : r,
                e && e.length ? Rt(e, r, t) : []
            }
            function Al(e) {
                if (!(e && e.length))
                    return [];
                var t = 0;
                return e = It(e, function(a) {
                    if (Ye(a))
                        return t = nn(a.length, t),
                        !0
                }),
                Wa(t, function(a) {
                    return ze(e, $a(a))
                })
            }
            function Hu(e, t) {
                if (!(e && e.length))
                    return [];
                var a = Al(e);
                return t == null ? a : ze(a, function(u) {
                    return On(t, r, u)
                })
            }
            var Lm = he(function(e, t) {
                return Ye(e) ? Hr(e, t) : []
            })
              , Pm = he(function(e) {
                return fl(It(e, Ye))
            })
              , Dm = he(function(e) {
                var t = Kn(e);
                return Ye(t) && (t = r),
                fl(It(e, Ye), ne(t, 2))
            })
              , Rm = he(function(e) {
                var t = Kn(e);
                return t = typeof t == "function" ? t : r,
                fl(It(e, Ye), r, t)
            })
              , Nm = he(Al);
            function Mm(e, t) {
                return ou(e || [], t || [], Ur)
            }
            function jm(e, t) {
                return ou(e || [], t || [], Gr)
            }
            var Fm = he(function(e) {
                var t = e.length
                  , a = t > 1 ? e[t - 1] : r;
                return a = typeof a == "function" ? (e.pop(),
                a) : r,
                Hu(e, a)
            });
            function Wu(e) {
                var t = d(e);
                return t.__chain__ = !0,
                t
            }
            function zm(e, t) {
                return t(e),
                e
            }
            function qi(e, t) {
                return t(e)
            }
            var Bm = wt(function(e) {
                var t = e.length
                  , a = t ? e[0] : 0
                  , u = this.__wrapped__
                  , h = function(m) {
                    return Qa(m, e)
                };
                return t > 1 || this.__actions__.length || !(u instanceof xe) || !_t(a) ? this.thru(h) : (u = u.slice(a, +a + (t ? 1 : 0)),
                u.__actions__.push({
                    func: qi,
                    args: [h],
                    thisArg: r
                }),
                new qn(u,this.__chain__).thru(function(m) {
                    return t && !m.length && m.push(r),
                    m
                }))
            });
            function $m() {
                return Wu(this)
            }
            function Um() {
                return new qn(this.value(),this.__chain__)
            }
            function Hm() {
                this.__values__ === r && (this.__values__ = ic(this.value()));
                var e = this.__index__ >= this.__values__.length
                  , t = e ? r : this.__values__[this.__index__++];
                return {
                    done: e,
                    value: t
                }
            }
            function Wm() {
                return this
            }
            function qm(e) {
                for (var t, a = this; a instanceof Oi; ) {
                    var u = ju(a);
                    u.__index__ = 0,
                    u.__values__ = r,
                    t ? h.__wrapped__ = u : t = u;
                    var h = u;
                    a = a.__wrapped__
                }
                return h.__wrapped__ = e,
                t
            }
            function Gm() {
                var e = this.__wrapped__;
                if (e instanceof xe) {
                    var t = e;
                    return this.__actions__.length && (t = new xe(this)),
                    t = t.reverse(),
                    t.__actions__.push({
                        func: qi,
                        args: [El],
                        thisArg: r
                    }),
                    new qn(t,this.__chain__)
                }
                return this.thru(El)
            }
            function Vm() {
                return lu(this.__wrapped__, this.__actions__)
            }
            var Km = ji(function(e, t, a) {
                Ce.call(e, a) ? ++e[a] : vt(e, a, 1)
            });
            function Ym(e, t, a) {
                var u = oe(e) ? vs : zd;
                return a && vn(e, t, a) && (t = r),
                u(e, ne(t, 3))
            }
            function Xm(e, t) {
                var a = oe(e) ? It : Hs;
                return a(e, ne(t, 3))
            }
            var Zm = xu(Fu)
              , Qm = xu(zu);
            function Jm(e, t) {
                return cn(Gi(e, t), 1)
            }
            function ex(e, t) {
                return cn(Gi(e, t), Ee)
            }
            function nx(e, t, a) {
                return a = a === r ? 1 : ue(a),
                cn(Gi(e, t), a)
            }
            function qu(e, t) {
                var a = oe(e) ? Hn : Dt;
                return a(e, ne(t, 3))
            }
            function Gu(e, t) {
                var a = oe(e) ? bp : Us;
                return a(e, ne(t, 3))
            }
            var tx = ji(function(e, t, a) {
                Ce.call(e, a) ? e[a].push(t) : vt(e, a, [t])
            });
            function rx(e, t, a, u) {
                e = kn(e) ? e : br(e),
                a = a && !u ? ue(a) : 0;
                var h = e.length;
                return a < 0 && (a = nn(h + a, 0)),
                Zi(e) ? a <= h && e.indexOf(t, a) > -1 : !!h && sr(e, t, a) > -1
            }
            var ix = he(function(e, t, a) {
                var u = -1
                  , h = typeof t == "function"
                  , m = kn(e) ? T(e.length) : [];
                return Dt(e, function(b) {
                    m[++u] = h ? On(t, b, a) : Wr(b, t, a)
                }),
                m
            })
              , ax = ji(function(e, t, a) {
                vt(e, a, t)
            });
            function Gi(e, t) {
                var a = oe(e) ? ze : Ys;
                return a(e, ne(t, 3))
            }
            function lx(e, t, a, u) {
                return e == null ? [] : (oe(t) || (t = t == null ? [] : [t]),
                a = u ? r : a,
                oe(a) || (a = a == null ? [] : [a]),
                Js(e, t, a))
            }
            var ox = ji(function(e, t, a) {
                e[a ? 0 : 1].push(t)
            }, function() {
                return [[], []]
            });
            function sx(e, t, a) {
                var u = oe(e) ? za : Ss
                  , h = arguments.length < 3;
                return u(e, ne(t, 4), a, h, Dt)
            }
            function ux(e, t, a) {
                var u = oe(e) ? wp : Ss
                  , h = arguments.length < 3;
                return u(e, ne(t, 4), a, h, Us)
            }
            function cx(e, t) {
                var a = oe(e) ? It : Hs;
                return a(e, Yi(ne(t, 3)))
            }
            function fx(e) {
                var t = oe(e) ? Fs : rg;
                return t(e)
            }
            function hx(e, t, a) {
                (a ? vn(e, t, a) : t === r) ? t = 1 : t = ue(t);
                var u = oe(e) ? Rd : ig;
                return u(e, t)
            }
            function px(e) {
                var t = oe(e) ? Nd : lg;
                return t(e)
            }
            function dx(e) {
                if (e == null)
                    return 0;
                if (kn(e))
                    return Zi(e) ? cr(e) : e.length;
                var t = pn(e);
                return t == Ke || t == xn ? e.size : il(e).length
            }
            function gx(e, t, a) {
                var u = oe(e) ? Ba : og;
                return a && vn(e, t, a) && (t = r),
                u(e, ne(t, 3))
            }
            var mx = he(function(e, t) {
                if (e == null)
                    return [];
                var a = t.length;
                return a > 1 && vn(e, t[0], t[1]) ? t = [] : a > 2 && vn(t[0], t[1], t[2]) && (t = [t[0]]),
                Js(e, cn(t, 1), [])
            })
              , Vi = Xp || function() {
                return un.Date.now()
            }
            ;
            function xx(e, t) {
                if (typeof t != "function")
                    throw new Wn(c);
                return e = ue(e),
                function() {
                    if (--e < 1)
                        return t.apply(this, arguments)
                }
            }
            function Vu(e, t, a) {
                return t = a ? r : t,
                t = e && t == null ? e.length : t,
                bt(e, V, r, r, r, r, t)
            }
            function Ku(e, t) {
                var a;
                if (typeof t != "function")
                    throw new Wn(c);
                return e = ue(e),
                function() {
                    return --e > 0 && (a = t.apply(this, arguments)),
                    e <= 1 && (t = r),
                    a
                }
            }
            var Tl = he(function(e, t, a) {
                var u = $;
                if (a.length) {
                    var h = Lt(a, yr(Tl));
                    u |= Y
                }
                return bt(e, u, t, a, h)
            })
              , Yu = he(function(e, t, a) {
                var u = $ | M;
                if (a.length) {
                    var h = Lt(a, yr(Yu));
                    u |= Y
                }
                return bt(t, u, e, a, h)
            });
            function Xu(e, t, a) {
                t = a ? r : t;
                var u = bt(e, z, r, r, r, r, r, t);
                return u.placeholder = Xu.placeholder,
                u
            }
            function Zu(e, t, a) {
                t = a ? r : t;
                var u = bt(e, J, r, r, r, r, r, t);
                return u.placeholder = Zu.placeholder,
                u
            }
            function Qu(e, t, a) {
                var u, h, m, b, C, A, D = 0, R = !1, j = !1, H = !0;
                if (typeof e != "function")
                    throw new Wn(c);
                t = Yn(t) || 0,
                We(a) && (R = !!a.leading,
                j = "maxWait" in a,
                m = j ? nn(Yn(a.maxWait) || 0, t) : m,
                H = "trailing" in a ? !!a.trailing : H);
                function K(Xe) {
                    var it = u
                      , Ct = h;
                    return u = h = r,
                    D = Xe,
                    b = e.apply(Ct, it),
                    b
                }
                function te(Xe) {
                    return D = Xe,
                    C = Yr(ge, t),
                    R ? K(Xe) : b
                }
                function fe(Xe) {
                    var it = Xe - A
                      , Ct = Xe - D
                      , xc = t - it;
                    return j ? hn(xc, m - Ct) : xc
                }
                function re(Xe) {
                    var it = Xe - A
                      , Ct = Xe - D;
                    return A === r || it >= t || it < 0 || j && Ct >= m
                }
                function ge() {
                    var Xe = Vi();
                    if (re(Xe))
                        return ve(Xe);
                    C = Yr(ge, fe(Xe))
                }
                function ve(Xe) {
                    return C = r,
                    H && u ? K(Xe) : (u = h = r,
                    b)
                }
                function Rn() {
                    C !== r && su(C),
                    D = 0,
                    u = A = h = C = r
                }
                function bn() {
                    return C === r ? b : ve(Vi())
                }
                function Nn() {
                    var Xe = Vi()
                      , it = re(Xe);
                    if (u = arguments,
                    h = this,
                    A = Xe,
                    it) {
                        if (C === r)
                            return te(A);
                        if (j)
                            return su(C),
                            C = Yr(ge, t),
                            K(A)
                    }
                    return C === r && (C = Yr(ge, t)),
                    b
                }
                return Nn.cancel = Rn,
                Nn.flush = bn,
                Nn
            }
            var yx = he(function(e, t) {
                return $s(e, 1, t)
            })
              , vx = he(function(e, t, a) {
                return $s(e, Yn(t) || 0, a)
            });
            function bx(e) {
                return bt(e, ie)
            }
            function Ki(e, t) {
                if (typeof e != "function" || t != null && typeof t != "function")
                    throw new Wn(c);
                var a = function() {
                    var u = arguments
                      , h = t ? t.apply(this, u) : u[0]
                      , m = a.cache;
                    if (m.has(h))
                        return m.get(h);
                    var b = e.apply(this, u);
                    return a.cache = m.set(h, b) || m,
                    b
                };
                return a.cache = new (Ki.Cache || yt),
                a
            }
            Ki.Cache = yt;
            function Yi(e) {
                if (typeof e != "function")
                    throw new Wn(c);
                return function() {
                    var t = arguments;
                    switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                    }
                    return !e.apply(this, t)
                }
            }
            function wx(e) {
                return Ku(2, e)
            }
            var _x = sg(function(e, t) {
                t = t.length == 1 && oe(t[0]) ? ze(t[0], Ln(ne())) : ze(cn(t, 1), Ln(ne()));
                var a = t.length;
                return he(function(u) {
                    for (var h = -1, m = hn(u.length, a); ++h < m; )
                        u[h] = t[h].call(this, u[h]);
                    return On(e, this, u)
                })
            })
              , Il = he(function(e, t) {
                var a = Lt(t, yr(Il));
                return bt(e, Y, r, t, a)
            })
              , Ju = he(function(e, t) {
                var a = Lt(t, yr(Ju));
                return bt(e, P, r, t, a)
            })
              , Sx = wt(function(e, t) {
                return bt(e, pe, r, r, r, t)
            });
            function kx(e, t) {
                if (typeof e != "function")
                    throw new Wn(c);
                return t = t === r ? t : ue(t),
                he(e, t)
            }
            function Cx(e, t) {
                if (typeof e != "function")
                    throw new Wn(c);
                return t = t == null ? 0 : nn(ue(t), 0),
                he(function(a) {
                    var u = a[t]
                      , h = Mt(a, 0, t);
                    return u && Ot(h, u),
                    On(e, this, h)
                })
            }
            function Ex(e, t, a) {
                var u = !0
                  , h = !0;
                if (typeof e != "function")
                    throw new Wn(c);
                return We(a) && (u = "leading" in a ? !!a.leading : u,
                h = "trailing" in a ? !!a.trailing : h),
                Qu(e, t, {
                    leading: u,
                    maxWait: t,
                    trailing: h
                })
            }
            function Ax(e) {
                return Vu(e, 1)
            }
            function Tx(e, t) {
                return Il(pl(t), e)
            }
            function Ix() {
                if (!arguments.length)
                    return [];
                var e = arguments[0];
                return oe(e) ? e : [e]
            }
            function Ox(e) {
                return Gn(e, v)
            }
            function Lx(e, t) {
                return t = typeof t == "function" ? t : r,
                Gn(e, v, t)
            }
            function Px(e) {
                return Gn(e, y | v)
            }
            function Dx(e, t) {
                return t = typeof t == "function" ? t : r,
                Gn(e, y | v, t)
            }
            function Rx(e, t) {
                return t == null || Bs(e, t, an(t))
            }
            function rt(e, t) {
                return e === t || e !== e && t !== t
            }
            var Nx = $i(nl)
              , Mx = $i(function(e, t) {
                return e >= t
            })
              , Qt = Gs(function() {
                return arguments
            }()) ? Gs : function(e) {
                return Ge(e) && Ce.call(e, "callee") && !Ps.call(e, "callee")
            }
              , oe = T.isArray
              , jx = ps ? Ln(ps) : qd;
            function kn(e) {
                return e != null && Xi(e.length) && !St(e)
            }
            function Ye(e) {
                return Ge(e) && kn(e)
            }
            function Fx(e) {
                return e === !0 || e === !1 || Ge(e) && yn(e) == ln
            }
            var jt = Qp || Bl
              , zx = ds ? Ln(ds) : Gd;
            function Bx(e) {
                return Ge(e) && e.nodeType === 1 && !Xr(e)
            }
            function $x(e) {
                if (e == null)
                    return !0;
                if (kn(e) && (oe(e) || typeof e == "string" || typeof e.splice == "function" || jt(e) || vr(e) || Qt(e)))
                    return !e.length;
                var t = pn(e);
                if (t == Ke || t == xn)
                    return !e.size;
                if (Kr(e))
                    return !il(e).length;
                for (var a in e)
                    if (Ce.call(e, a))
                        return !1;
                return !0
            }
            function Ux(e, t) {
                return qr(e, t)
            }
            function Hx(e, t, a) {
                a = typeof a == "function" ? a : r;
                var u = a ? a(e, t) : r;
                return u === r ? qr(e, t, r, a) : !!u
            }
            function Ol(e) {
                if (!Ge(e))
                    return !1;
                var t = yn(e);
                return t == Ve || t == Ne || typeof e.message == "string" && typeof e.name == "string" && !Xr(e)
            }
            function Wx(e) {
                return typeof e == "number" && Rs(e)
            }
            function St(e) {
                if (!We(e))
                    return !1;
                var t = yn(e);
                return t == He || t == rr || t == Qn || t == $t
            }
            function ec(e) {
                return typeof e == "number" && e == ue(e)
            }
            function Xi(e) {
                return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $e
            }
            function We(e) {
                var t = typeof e;
                return e != null && (t == "object" || t == "function")
            }
            function Ge(e) {
                return e != null && typeof e == "object"
            }
            var nc = gs ? Ln(gs) : Kd;
            function qx(e, t) {
                return e === t || rl(e, t, bl(t))
            }
            function Gx(e, t, a) {
                return a = typeof a == "function" ? a : r,
                rl(e, t, bl(t), a)
            }
            function Vx(e) {
                return tc(e) && e != +e
            }
            function Kx(e) {
                if (Lg(e))
                    throw new le(s);
                return Vs(e)
            }
            function Yx(e) {
                return e === null
            }
            function Xx(e) {
                return e == null
            }
            function tc(e) {
                return typeof e == "number" || Ge(e) && yn(e) == Bn
            }
            function Xr(e) {
                if (!Ge(e) || yn(e) != mn)
                    return !1;
                var t = Si(e);
                if (t === null)
                    return !0;
                var a = Ce.call(t, "constructor") && t.constructor;
                return typeof a == "function" && a instanceof a && vi.call(a) == Gp
            }
            var Ll = ms ? Ln(ms) : Yd;
            function Zx(e) {
                return ec(e) && e >= -$e && e <= $e
            }
            var rc = xs ? Ln(xs) : Xd;
            function Zi(e) {
                return typeof e == "string" || !oe(e) && Ge(e) && yn(e) == lt
            }
            function Dn(e) {
                return typeof e == "symbol" || Ge(e) && yn(e) == At
            }
            var vr = ys ? Ln(ys) : Zd;
            function Qx(e) {
                return e === r
            }
            function Jx(e) {
                return Ge(e) && pn(e) == O
            }
            function ey(e) {
                return Ge(e) && yn(e) == B
            }
            var ny = $i(al)
              , ty = $i(function(e, t) {
                return e <= t
            });
            function ic(e) {
                if (!e)
                    return [];
                if (kn(e))
                    return Zi(e) ? nt(e) : Sn(e);
                if (jr && e[jr])
                    return Rp(e[jr]());
                var t = pn(e)
                  , a = t == Ke ? Ga : t == xn ? mi : br;
                return a(e)
            }
            function kt(e) {
                if (!e)
                    return e === 0 ? e : 0;
                if (e = Yn(e),
                e === Ee || e === -Ee) {
                    var t = e < 0 ? -1 : 1;
                    return t * Te
                }
                return e === e ? e : 0
            }
            function ue(e) {
                var t = kt(e)
                  , a = t % 1;
                return t === t ? a ? t - a : t : 0
            }
            function ac(e) {
                return e ? Kt(ue(e), 0, Re) : 0
            }
            function Yn(e) {
                if (typeof e == "number")
                    return e;
                if (Dn(e))
                    return S;
                if (We(e)) {
                    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                    e = We(t) ? t + "" : t
                }
                if (typeof e != "string")
                    return e === 0 ? e : +e;
                e = ks(e);
                var a = fi.test(e);
                return a || Ia.test(e) ? xp(e.slice(2), a ? 2 : 8) : Ht.test(e) ? S : +e
            }
            function lc(e) {
                return ct(e, Cn(e))
            }
            function ry(e) {
                return e ? Kt(ue(e), -$e, $e) : e === 0 ? e : 0
            }
            function ke(e) {
                return e == null ? "" : Pn(e)
            }
            var iy = mr(function(e, t) {
                if (Kr(t) || kn(t)) {
                    ct(t, an(t), e);
                    return
                }
                for (var a in t)
                    Ce.call(t, a) && Ur(e, a, t[a])
            })
              , oc = mr(function(e, t) {
                ct(t, Cn(t), e)
            })
              , Qi = mr(function(e, t, a, u) {
                ct(t, Cn(t), e, u)
            })
              , ay = mr(function(e, t, a, u) {
                ct(t, an(t), e, u)
            })
              , ly = wt(Qa);
            function oy(e, t) {
                var a = gr(e);
                return t == null ? a : zs(a, t)
            }
            var sy = he(function(e, t) {
                e = Ae(e);
                var a = -1
                  , u = t.length
                  , h = u > 2 ? t[2] : r;
                for (h && vn(t[0], t[1], h) && (u = 1); ++a < u; )
                    for (var m = t[a], b = Cn(m), C = -1, A = b.length; ++C < A; ) {
                        var D = b[C]
                          , R = e[D];
                        (R === r || rt(R, hr[D]) && !Ce.call(e, D)) && (e[D] = m[D])
                    }
                return e
            })
              , uy = he(function(e) {
                return e.push(r, ku),
                On(sc, r, e)
            });
            function cy(e, t) {
                return bs(e, ne(t, 3), ut)
            }
            function fy(e, t) {
                return bs(e, ne(t, 3), el)
            }
            function hy(e, t) {
                return e == null ? e : Ja(e, ne(t, 3), Cn)
            }
            function py(e, t) {
                return e == null ? e : Ws(e, ne(t, 3), Cn)
            }
            function dy(e, t) {
                return e && ut(e, ne(t, 3))
            }
            function gy(e, t) {
                return e && el(e, ne(t, 3))
            }
            function my(e) {
                return e == null ? [] : Di(e, an(e))
            }
            function xy(e) {
                return e == null ? [] : Di(e, Cn(e))
            }
            function Pl(e, t, a) {
                var u = e == null ? r : Yt(e, t);
                return u === r ? a : u
            }
            function yy(e, t) {
                return e != null && Au(e, t, $d)
            }
            function Dl(e, t) {
                return e != null && Au(e, t, Ud)
            }
            var vy = vu(function(e, t, a) {
                t != null && typeof t.toString != "function" && (t = bi.call(t)),
                e[t] = a
            }, Nl(En))
              , by = vu(function(e, t, a) {
                t != null && typeof t.toString != "function" && (t = bi.call(t)),
                Ce.call(e, t) ? e[t].push(a) : e[t] = [a]
            }, ne)
              , wy = he(Wr);
            function an(e) {
                return kn(e) ? js(e) : il(e)
            }
            function Cn(e) {
                return kn(e) ? js(e, !0) : Qd(e)
            }
            function _y(e, t) {
                var a = {};
                return t = ne(t, 3),
                ut(e, function(u, h, m) {
                    vt(a, t(u, h, m), u)
                }),
                a
            }
            function Sy(e, t) {
                var a = {};
                return t = ne(t, 3),
                ut(e, function(u, h, m) {
                    vt(a, h, t(u, h, m))
                }),
                a
            }
            var ky = mr(function(e, t, a) {
                Ri(e, t, a)
            })
              , sc = mr(function(e, t, a, u) {
                Ri(e, t, a, u)
            })
              , Cy = wt(function(e, t) {
                var a = {};
                if (e == null)
                    return a;
                var u = !1;
                t = ze(t, function(m) {
                    return m = Nt(m, e),
                    u || (u = m.length > 1),
                    m
                }),
                ct(e, yl(e), a),
                u && (a = Gn(a, y | k | v, vg));
                for (var h = t.length; h--; )
                    cl(a, t[h]);
                return a
            });
            function Ey(e, t) {
                return uc(e, Yi(ne(t)))
            }
            var Ay = wt(function(e, t) {
                return e == null ? {} : eg(e, t)
            });
            function uc(e, t) {
                if (e == null)
                    return {};
                var a = ze(yl(e), function(u) {
                    return [u]
                });
                return t = ne(t),
                eu(e, a, function(u, h) {
                    return t(u, h[0])
                })
            }
            function Ty(e, t, a) {
                t = Nt(t, e);
                var u = -1
                  , h = t.length;
                for (h || (h = 1,
                e = r); ++u < h; ) {
                    var m = e == null ? r : e[ft(t[u])];
                    m === r && (u = h,
                    m = a),
                    e = St(m) ? m.call(e) : m
                }
                return e
            }
            function Iy(e, t, a) {
                return e == null ? e : Gr(e, t, a)
            }
            function Oy(e, t, a, u) {
                return u = typeof u == "function" ? u : r,
                e == null ? e : Gr(e, t, a, u)
            }
            var cc = _u(an)
              , fc = _u(Cn);
            function Ly(e, t, a) {
                var u = oe(e)
                  , h = u || jt(e) || vr(e);
                if (t = ne(t, 4),
                a == null) {
                    var m = e && e.constructor;
                    h ? a = u ? new m : [] : We(e) ? a = St(m) ? gr(Si(e)) : {} : a = {}
                }
                return (h ? Hn : ut)(e, function(b, C, A) {
                    return t(a, b, C, A)
                }),
                a
            }
            function Py(e, t) {
                return e == null ? !0 : cl(e, t)
            }
            function Dy(e, t, a) {
                return e == null ? e : au(e, t, pl(a))
            }
            function Ry(e, t, a, u) {
                return u = typeof u == "function" ? u : r,
                e == null ? e : au(e, t, pl(a), u)
            }
            function br(e) {
                return e == null ? [] : qa(e, an(e))
            }
            function Ny(e) {
                return e == null ? [] : qa(e, Cn(e))
            }
            function My(e, t, a) {
                return a === r && (a = t,
                t = r),
                a !== r && (a = Yn(a),
                a = a === a ? a : 0),
                t !== r && (t = Yn(t),
                t = t === t ? t : 0),
                Kt(Yn(e), t, a)
            }
            function jy(e, t, a) {
                return t = kt(t),
                a === r ? (a = t,
                t = 0) : a = kt(a),
                e = Yn(e),
                Hd(e, t, a)
            }
            function Fy(e, t, a) {
                if (a && typeof a != "boolean" && vn(e, t, a) && (t = a = r),
                a === r && (typeof t == "boolean" ? (a = t,
                t = r) : typeof e == "boolean" && (a = e,
                e = r)),
                e === r && t === r ? (e = 0,
                t = 1) : (e = kt(e),
                t === r ? (t = e,
                e = 0) : t = kt(t)),
                e > t) {
                    var u = e;
                    e = t,
                    t = u
                }
                if (a || e % 1 || t % 1) {
                    var h = Ns();
                    return hn(e + h * (t - e + mp("1e-" + ((h + "").length - 1))), t)
                }
                return ol(e, t)
            }
            var zy = xr(function(e, t, a) {
                return t = t.toLowerCase(),
                e + (a ? hc(t) : t)
            });
            function hc(e) {
                return Rl(ke(e).toLowerCase())
            }
            function pc(e) {
                return e = ke(e),
                e && e.replace(Go, Ip).replace(lp, "")
            }
            function By(e, t, a) {
                e = ke(e),
                t = Pn(t);
                var u = e.length;
                a = a === r ? u : Kt(ue(a), 0, u);
                var h = a;
                return a -= t.length,
                a >= 0 && e.slice(a, h) == t
            }
            function $y(e) {
                return e = ke(e),
                e && ar.test(e) ? e.replace(Pr, Op) : e
            }
            function Uy(e) {
                return e = ke(e),
                e && Aa.test(e) ? e.replace(Dr, "\\$&") : e
            }
            var Hy = xr(function(e, t, a) {
                return e + (a ? "-" : "") + t.toLowerCase()
            })
              , Wy = xr(function(e, t, a) {
                return e + (a ? " " : "") + t.toLowerCase()
            })
              , qy = mu("toLowerCase");
            function Gy(e, t, a) {
                e = ke(e),
                t = ue(t);
                var u = t ? cr(e) : 0;
                if (!t || u >= t)
                    return e;
                var h = (t - u) / 2;
                return Bi(Ai(h), a) + e + Bi(Ei(h), a)
            }
            function Vy(e, t, a) {
                e = ke(e),
                t = ue(t);
                var u = t ? cr(e) : 0;
                return t && u < t ? e + Bi(t - u, a) : e
            }
            function Ky(e, t, a) {
                e = ke(e),
                t = ue(t);
                var u = t ? cr(e) : 0;
                return t && u < t ? Bi(t - u, a) + e : e
            }
            function Yy(e, t, a) {
                return a || t == null ? t = 0 : t && (t = +t),
                td(ke(e).replace(Rr, ""), t || 0)
            }
            function Xy(e, t, a) {
                return (a ? vn(e, t, a) : t === r) ? t = 1 : t = ue(t),
                sl(ke(e), t)
            }
            function Zy() {
                var e = arguments
                  , t = ke(e[0]);
                return e.length < 3 ? t : t.replace(e[1], e[2])
            }
            var Qy = xr(function(e, t, a) {
                return e + (a ? "_" : "") + t.toLowerCase()
            });
            function Jy(e, t, a) {
                return a && typeof a != "number" && vn(e, t, a) && (t = a = r),
                a = a === r ? Re : a >>> 0,
                a ? (e = ke(e),
                e && (typeof t == "string" || t != null && !Ll(t)) && (t = Pn(t),
                !t && ur(e)) ? Mt(nt(e), 0, a) : e.split(t, a)) : []
            }
            var e1 = xr(function(e, t, a) {
                return e + (a ? " " : "") + Rl(t)
            });
            function n1(e, t, a) {
                return e = ke(e),
                a = a == null ? 0 : Kt(ue(a), 0, e.length),
                t = Pn(t),
                e.slice(a, a + t.length) == t
            }
            function t1(e, t, a) {
                var u = d.templateSettings;
                a && vn(e, t, a) && (t = r),
                e = ke(e),
                t = Qi({}, t, u, Su);
                var h = Qi({}, t.imports, u.imports, Su), m = an(h), b = qa(h, m), C, A, D = 0, R = t.interpolate || Tt, j = "__p += '", H = Va((t.escape || Tt).source + "|" + R.source + "|" + (R === ui ? Ut : Tt).source + "|" + (t.evaluate || Tt).source + "|$", "g"), K = "//# sourceURL=" + (Ce.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++fp + "]") + `
`;
                e.replace(H, function(re, ge, ve, Rn, bn, Nn) {
                    return ve || (ve = Rn),
                    j += e.slice(D, Nn).replace(Uh, Lp),
                    ge && (C = !0,
                    j += `' +
__e(` + ge + `) +
'`),
                    bn && (A = !0,
                    j += `';
` + bn + `;
__p += '`),
                    ve && (j += `' +
((__t = (` + ve + `)) == null ? '' : __t) +
'`),
                    D = Nn + re.length,
                    re
                }),
                j += `';
`;
                var te = Ce.call(t, "variable") && t.variable;
                if (!te)
                    j = `with (obj) {
` + j + `
}
`;
                else if (st.test(te))
                    throw new le(f);
                j = (A ? j.replace(ir, "") : j).replace(si, "$1").replace(wa, "$1;"),
                j = "function(" + (te || "obj") + `) {
` + (te ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (C ? ", __e = _.escape" : "") + (A ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + j + `return __p
}`;
                var fe = gc(function() {
                    return we(m, K + "return " + j).apply(r, b)
                });
                if (fe.source = j,
                Ol(fe))
                    throw fe;
                return fe
            }
            function r1(e) {
                return ke(e).toLowerCase()
            }
            function i1(e) {
                return ke(e).toUpperCase()
            }
            function a1(e, t, a) {
                if (e = ke(e),
                e && (a || t === r))
                    return ks(e);
                if (!e || !(t = Pn(t)))
                    return e;
                var u = nt(e)
                  , h = nt(t)
                  , m = Cs(u, h)
                  , b = Es(u, h) + 1;
                return Mt(u, m, b).join("")
            }
            function l1(e, t, a) {
                if (e = ke(e),
                e && (a || t === r))
                    return e.slice(0, Ts(e) + 1);
                if (!e || !(t = Pn(t)))
                    return e;
                var u = nt(e)
                  , h = Es(u, nt(t)) + 1;
                return Mt(u, 0, h).join("")
            }
            function o1(e, t, a) {
                if (e = ke(e),
                e && (a || t === r))
                    return e.replace(Rr, "");
                if (!e || !(t = Pn(t)))
                    return e;
                var u = nt(e)
                  , h = Cs(u, nt(t));
                return Mt(u, h).join("")
            }
            function s1(e, t) {
                var a = me
                  , u = X;
                if (We(t)) {
                    var h = "separator" in t ? t.separator : h;
                    a = "length" in t ? ue(t.length) : a,
                    u = "omission" in t ? Pn(t.omission) : u
                }
                e = ke(e);
                var m = e.length;
                if (ur(e)) {
                    var b = nt(e);
                    m = b.length
                }
                if (a >= m)
                    return e;
                var C = a - cr(u);
                if (C < 1)
                    return u;
                var A = b ? Mt(b, 0, C).join("") : e.slice(0, C);
                if (h === r)
                    return A + u;
                if (b && (C += A.length - C),
                Ll(h)) {
                    if (e.slice(C).search(h)) {
                        var D, R = A;
                        for (h.global || (h = Va(h.source, ke(mt.exec(h)) + "g")),
                        h.lastIndex = 0; D = h.exec(R); )
                            var j = D.index;
                        A = A.slice(0, j === r ? C : j)
                    }
                } else if (e.indexOf(Pn(h), C) != C) {
                    var H = A.lastIndexOf(h);
                    H > -1 && (A = A.slice(0, H))
                }
                return A + u
            }
            function u1(e) {
                return e = ke(e),
                e && _a.test(e) ? e.replace($n, Fp) : e
            }
            var c1 = xr(function(e, t, a) {
                return e + (a ? " " : "") + t.toUpperCase()
            })
              , Rl = mu("toUpperCase");
            function dc(e, t, a) {
                return e = ke(e),
                t = a ? r : t,
                t === r ? Dp(e) ? $p(e) : kp(e) : e.match(t) || []
            }
            var gc = he(function(e, t) {
                try {
                    return On(e, r, t)
                } catch (a) {
                    return Ol(a) ? a : new le(a)
                }
            })
              , f1 = wt(function(e, t) {
                return Hn(t, function(a) {
                    a = ft(a),
                    vt(e, a, Tl(e[a], e))
                }),
                e
            });
            function h1(e) {
                var t = e == null ? 0 : e.length
                  , a = ne();
                return e = t ? ze(e, function(u) {
                    if (typeof u[1] != "function")
                        throw new Wn(c);
                    return [a(u[0]), u[1]]
                }) : [],
                he(function(u) {
                    for (var h = -1; ++h < t; ) {
                        var m = e[h];
                        if (On(m[0], this, u))
                            return On(m[1], this, u)
                    }
                })
            }
            function p1(e) {
                return Fd(Gn(e, y))
            }
            function Nl(e) {
                return function() {
                    return e
                }
            }
            function d1(e, t) {
                return e == null || e !== e ? t : e
            }
            var g1 = yu()
              , m1 = yu(!0);
            function En(e) {
                return e
            }
            function Ml(e) {
                return Ks(typeof e == "function" ? e : Gn(e, y))
            }
            function x1(e) {
                return Xs(Gn(e, y))
            }
            function y1(e, t) {
                return Zs(e, Gn(t, y))
            }
            var v1 = he(function(e, t) {
                return function(a) {
                    return Wr(a, e, t)
                }
            })
              , b1 = he(function(e, t) {
                return function(a) {
                    return Wr(e, a, t)
                }
            });
            function jl(e, t, a) {
                var u = an(t)
                  , h = Di(t, u);
                a == null && !(We(t) && (h.length || !u.length)) && (a = t,
                t = e,
                e = this,
                h = Di(t, an(t)));
                var m = !(We(a) && "chain" in a) || !!a.chain
                  , b = St(e);
                return Hn(h, function(C) {
                    var A = t[C];
                    e[C] = A,
                    b && (e.prototype[C] = function() {
                        var D = this.__chain__;
                        if (m || D) {
                            var R = e(this.__wrapped__)
                              , j = R.__actions__ = Sn(this.__actions__);
                            return j.push({
                                func: A,
                                args: arguments,
                                thisArg: e
                            }),
                            R.__chain__ = D,
                            R
                        }
                        return A.apply(e, Ot([this.value()], arguments))
                    }
                    )
                }),
                e
            }
            function w1() {
                return un._ === this && (un._ = Vp),
                this
            }
            function Fl() {}
            function _1(e) {
                return e = ue(e),
                he(function(t) {
                    return Qs(t, e)
                })
            }
            var S1 = gl(ze)
              , k1 = gl(vs)
              , C1 = gl(Ba);
            function mc(e) {
                return _l(e) ? $a(ft(e)) : ng(e)
            }
            function E1(e) {
                return function(t) {
                    return e == null ? r : Yt(e, t)
                }
            }
            var A1 = bu()
              , T1 = bu(!0);
            function zl() {
                return []
            }
            function Bl() {
                return !1
            }
            function I1() {
                return {}
            }
            function O1() {
                return ""
            }
            function L1() {
                return !0
            }
            function P1(e, t) {
                if (e = ue(e),
                e < 1 || e > $e)
                    return [];
                var a = Re
                  , u = hn(e, Re);
                t = ne(t),
                e -= Re;
                for (var h = Wa(u, t); ++a < e; )
                    t(a);
                return h
            }
            function D1(e) {
                return oe(e) ? ze(e, ft) : Dn(e) ? [e] : Sn(Mu(ke(e)))
            }
            function R1(e) {
                var t = ++qp;
                return ke(e) + t
            }
            var N1 = zi(function(e, t) {
                return e + t
            }, 0)
              , M1 = ml("ceil")
              , j1 = zi(function(e, t) {
                return e / t
            }, 1)
              , F1 = ml("floor");
            function z1(e) {
                return e && e.length ? Pi(e, En, nl) : r
            }
            function B1(e, t) {
                return e && e.length ? Pi(e, ne(t, 2), nl) : r
            }
            function $1(e) {
                return _s(e, En)
            }
            function U1(e, t) {
                return _s(e, ne(t, 2))
            }
            function H1(e) {
                return e && e.length ? Pi(e, En, al) : r
            }
            function W1(e, t) {
                return e && e.length ? Pi(e, ne(t, 2), al) : r
            }
            var q1 = zi(function(e, t) {
                return e * t
            }, 1)
              , G1 = ml("round")
              , V1 = zi(function(e, t) {
                return e - t
            }, 0);
            function K1(e) {
                return e && e.length ? Ha(e, En) : 0
            }
            function Y1(e, t) {
                return e && e.length ? Ha(e, ne(t, 2)) : 0
            }
            return d.after = xx,
            d.ary = Vu,
            d.assign = iy,
            d.assignIn = oc,
            d.assignInWith = Qi,
            d.assignWith = ay,
            d.at = ly,
            d.before = Ku,
            d.bind = Tl,
            d.bindAll = f1,
            d.bindKey = Yu,
            d.castArray = Ix,
            d.chain = Wu,
            d.chunk = Fg,
            d.compact = zg,
            d.concat = Bg,
            d.cond = h1,
            d.conforms = p1,
            d.constant = Nl,
            d.countBy = Km,
            d.create = oy,
            d.curry = Xu,
            d.curryRight = Zu,
            d.debounce = Qu,
            d.defaults = sy,
            d.defaultsDeep = uy,
            d.defer = yx,
            d.delay = vx,
            d.difference = $g,
            d.differenceBy = Ug,
            d.differenceWith = Hg,
            d.drop = Wg,
            d.dropRight = qg,
            d.dropRightWhile = Gg,
            d.dropWhile = Vg,
            d.fill = Kg,
            d.filter = Xm,
            d.flatMap = Jm,
            d.flatMapDeep = ex,
            d.flatMapDepth = nx,
            d.flatten = Bu,
            d.flattenDeep = Yg,
            d.flattenDepth = Xg,
            d.flip = bx,
            d.flow = g1,
            d.flowRight = m1,
            d.fromPairs = Zg,
            d.functions = my,
            d.functionsIn = xy,
            d.groupBy = tx,
            d.initial = Jg,
            d.intersection = em,
            d.intersectionBy = nm,
            d.intersectionWith = tm,
            d.invert = vy,
            d.invertBy = by,
            d.invokeMap = ix,
            d.iteratee = Ml,
            d.keyBy = ax,
            d.keys = an,
            d.keysIn = Cn,
            d.map = Gi,
            d.mapKeys = _y,
            d.mapValues = Sy,
            d.matches = x1,
            d.matchesProperty = y1,
            d.memoize = Ki,
            d.merge = ky,
            d.mergeWith = sc,
            d.method = v1,
            d.methodOf = b1,
            d.mixin = jl,
            d.negate = Yi,
            d.nthArg = _1,
            d.omit = Cy,
            d.omitBy = Ey,
            d.once = wx,
            d.orderBy = lx,
            d.over = S1,
            d.overArgs = _x,
            d.overEvery = k1,
            d.overSome = C1,
            d.partial = Il,
            d.partialRight = Ju,
            d.partition = ox,
            d.pick = Ay,
            d.pickBy = uc,
            d.property = mc,
            d.propertyOf = E1,
            d.pull = lm,
            d.pullAll = Uu,
            d.pullAllBy = om,
            d.pullAllWith = sm,
            d.pullAt = um,
            d.range = A1,
            d.rangeRight = T1,
            d.rearg = Sx,
            d.reject = cx,
            d.remove = cm,
            d.rest = kx,
            d.reverse = El,
            d.sampleSize = hx,
            d.set = Iy,
            d.setWith = Oy,
            d.shuffle = px,
            d.slice = fm,
            d.sortBy = mx,
            d.sortedUniq = ym,
            d.sortedUniqBy = vm,
            d.split = Jy,
            d.spread = Cx,
            d.tail = bm,
            d.take = wm,
            d.takeRight = _m,
            d.takeRightWhile = Sm,
            d.takeWhile = km,
            d.tap = zm,
            d.throttle = Ex,
            d.thru = qi,
            d.toArray = ic,
            d.toPairs = cc,
            d.toPairsIn = fc,
            d.toPath = D1,
            d.toPlainObject = lc,
            d.transform = Ly,
            d.unary = Ax,
            d.union = Cm,
            d.unionBy = Em,
            d.unionWith = Am,
            d.uniq = Tm,
            d.uniqBy = Im,
            d.uniqWith = Om,
            d.unset = Py,
            d.unzip = Al,
            d.unzipWith = Hu,
            d.update = Dy,
            d.updateWith = Ry,
            d.values = br,
            d.valuesIn = Ny,
            d.without = Lm,
            d.words = dc,
            d.wrap = Tx,
            d.xor = Pm,
            d.xorBy = Dm,
            d.xorWith = Rm,
            d.zip = Nm,
            d.zipObject = Mm,
            d.zipObjectDeep = jm,
            d.zipWith = Fm,
            d.entries = cc,
            d.entriesIn = fc,
            d.extend = oc,
            d.extendWith = Qi,
            jl(d, d),
            d.add = N1,
            d.attempt = gc,
            d.camelCase = zy,
            d.capitalize = hc,
            d.ceil = M1,
            d.clamp = My,
            d.clone = Ox,
            d.cloneDeep = Px,
            d.cloneDeepWith = Dx,
            d.cloneWith = Lx,
            d.conformsTo = Rx,
            d.deburr = pc,
            d.defaultTo = d1,
            d.divide = j1,
            d.endsWith = By,
            d.eq = rt,
            d.escape = $y,
            d.escapeRegExp = Uy,
            d.every = Ym,
            d.find = Zm,
            d.findIndex = Fu,
            d.findKey = cy,
            d.findLast = Qm,
            d.findLastIndex = zu,
            d.findLastKey = fy,
            d.floor = F1,
            d.forEach = qu,
            d.forEachRight = Gu,
            d.forIn = hy,
            d.forInRight = py,
            d.forOwn = dy,
            d.forOwnRight = gy,
            d.get = Pl,
            d.gt = Nx,
            d.gte = Mx,
            d.has = yy,
            d.hasIn = Dl,
            d.head = $u,
            d.identity = En,
            d.includes = rx,
            d.indexOf = Qg,
            d.inRange = jy,
            d.invoke = wy,
            d.isArguments = Qt,
            d.isArray = oe,
            d.isArrayBuffer = jx,
            d.isArrayLike = kn,
            d.isArrayLikeObject = Ye,
            d.isBoolean = Fx,
            d.isBuffer = jt,
            d.isDate = zx,
            d.isElement = Bx,
            d.isEmpty = $x,
            d.isEqual = Ux,
            d.isEqualWith = Hx,
            d.isError = Ol,
            d.isFinite = Wx,
            d.isFunction = St,
            d.isInteger = ec,
            d.isLength = Xi,
            d.isMap = nc,
            d.isMatch = qx,
            d.isMatchWith = Gx,
            d.isNaN = Vx,
            d.isNative = Kx,
            d.isNil = Xx,
            d.isNull = Yx,
            d.isNumber = tc,
            d.isObject = We,
            d.isObjectLike = Ge,
            d.isPlainObject = Xr,
            d.isRegExp = Ll,
            d.isSafeInteger = Zx,
            d.isSet = rc,
            d.isString = Zi,
            d.isSymbol = Dn,
            d.isTypedArray = vr,
            d.isUndefined = Qx,
            d.isWeakMap = Jx,
            d.isWeakSet = ey,
            d.join = rm,
            d.kebabCase = Hy,
            d.last = Kn,
            d.lastIndexOf = im,
            d.lowerCase = Wy,
            d.lowerFirst = qy,
            d.lt = ny,
            d.lte = ty,
            d.max = z1,
            d.maxBy = B1,
            d.mean = $1,
            d.meanBy = U1,
            d.min = H1,
            d.minBy = W1,
            d.stubArray = zl,
            d.stubFalse = Bl,
            d.stubObject = I1,
            d.stubString = O1,
            d.stubTrue = L1,
            d.multiply = q1,
            d.nth = am,
            d.noConflict = w1,
            d.noop = Fl,
            d.now = Vi,
            d.pad = Gy,
            d.padEnd = Vy,
            d.padStart = Ky,
            d.parseInt = Yy,
            d.random = Fy,
            d.reduce = sx,
            d.reduceRight = ux,
            d.repeat = Xy,
            d.replace = Zy,
            d.result = Ty,
            d.round = G1,
            d.runInContext = E,
            d.sample = fx,
            d.size = dx,
            d.snakeCase = Qy,
            d.some = gx,
            d.sortedIndex = hm,
            d.sortedIndexBy = pm,
            d.sortedIndexOf = dm,
            d.sortedLastIndex = gm,
            d.sortedLastIndexBy = mm,
            d.sortedLastIndexOf = xm,
            d.startCase = e1,
            d.startsWith = n1,
            d.subtract = V1,
            d.sum = K1,
            d.sumBy = Y1,
            d.template = t1,
            d.times = P1,
            d.toFinite = kt,
            d.toInteger = ue,
            d.toLength = ac,
            d.toLower = r1,
            d.toNumber = Yn,
            d.toSafeInteger = ry,
            d.toString = ke,
            d.toUpper = i1,
            d.trim = a1,
            d.trimEnd = l1,
            d.trimStart = o1,
            d.truncate = s1,
            d.unescape = u1,
            d.uniqueId = R1,
            d.upperCase = c1,
            d.upperFirst = Rl,
            d.each = qu,
            d.eachRight = Gu,
            d.first = $u,
            jl(d, function() {
                var e = {};
                return ut(d, function(t, a) {
                    Ce.call(d.prototype, a) || (e[a] = t)
                }),
                e
            }(), {
                chain: !1
            }),
            d.VERSION = l,
            Hn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                d[e].placeholder = d
            }),
            Hn(["drop", "take"], function(e, t) {
                xe.prototype[e] = function(a) {
                    a = a === r ? 1 : nn(ue(a), 0);
                    var u = this.__filtered__ && !t ? new xe(this) : this.clone();
                    return u.__filtered__ ? u.__takeCount__ = hn(a, u.__takeCount__) : u.__views__.push({
                        size: hn(a, Re),
                        type: e + (u.__dir__ < 0 ? "Right" : "")
                    }),
                    u
                }
                ,
                xe.prototype[e + "Right"] = function(a) {
                    return this.reverse()[e](a).reverse()
                }
            }),
            Hn(["filter", "map", "takeWhile"], function(e, t) {
                var a = t + 1
                  , u = a == Se || a == Be;
                xe.prototype[e] = function(h) {
                    var m = this.clone();
                    return m.__iteratees__.push({
                        iteratee: ne(h, 3),
                        type: a
                    }),
                    m.__filtered__ = m.__filtered__ || u,
                    m
                }
            }),
            Hn(["head", "last"], function(e, t) {
                var a = "take" + (t ? "Right" : "");
                xe.prototype[e] = function() {
                    return this[a](1).value()[0]
                }
            }),
            Hn(["initial", "tail"], function(e, t) {
                var a = "drop" + (t ? "" : "Right");
                xe.prototype[e] = function() {
                    return this.__filtered__ ? new xe(this) : this[a](1)
                }
            }),
            xe.prototype.compact = function() {
                return this.filter(En)
            }
            ,
            xe.prototype.find = function(e) {
                return this.filter(e).head()
            }
            ,
            xe.prototype.findLast = function(e) {
                return this.reverse().find(e)
            }
            ,
            xe.prototype.invokeMap = he(function(e, t) {
                return typeof e == "function" ? new xe(this) : this.map(function(a) {
                    return Wr(a, e, t)
                })
            }),
            xe.prototype.reject = function(e) {
                return this.filter(Yi(ne(e)))
            }
            ,
            xe.prototype.slice = function(e, t) {
                e = ue(e);
                var a = this;
                return a.__filtered__ && (e > 0 || t < 0) ? new xe(a) : (e < 0 ? a = a.takeRight(-e) : e && (a = a.drop(e)),
                t !== r && (t = ue(t),
                a = t < 0 ? a.dropRight(-t) : a.take(t - e)),
                a)
            }
            ,
            xe.prototype.takeRightWhile = function(e) {
                return this.reverse().takeWhile(e).reverse()
            }
            ,
            xe.prototype.toArray = function() {
                return this.take(Re)
            }
            ,
            ut(xe.prototype, function(e, t) {
                var a = /^(?:filter|find|map|reject)|While$/.test(t)
                  , u = /^(?:head|last)$/.test(t)
                  , h = d[u ? "take" + (t == "last" ? "Right" : "") : t]
                  , m = u || /^find/.test(t);
                h && (d.prototype[t] = function() {
                    var b = this.__wrapped__
                      , C = u ? [1] : arguments
                      , A = b instanceof xe
                      , D = C[0]
                      , R = A || oe(b)
                      , j = function(ge) {
                        var ve = h.apply(d, Ot([ge], C));
                        return u && H ? ve[0] : ve
                    };
                    R && a && typeof D == "function" && D.length != 1 && (A = R = !1);
                    var H = this.__chain__
                      , K = !!this.__actions__.length
                      , te = m && !H
                      , fe = A && !K;
                    if (!m && R) {
                        b = fe ? b : new xe(this);
                        var re = e.apply(b, C);
                        return re.__actions__.push({
                            func: qi,
                            args: [j],
                            thisArg: r
                        }),
                        new qn(re,H)
                    }
                    return te && fe ? e.apply(this, C) : (re = this.thru(j),
                    te ? u ? re.value()[0] : re.value() : re)
                }
                )
            }),
            Hn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                var t = xi[e]
                  , a = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                  , u = /^(?:pop|shift)$/.test(e);
                d.prototype[e] = function() {
                    var h = arguments;
                    if (u && !this.__chain__) {
                        var m = this.value();
                        return t.apply(oe(m) ? m : [], h)
                    }
                    return this[a](function(b) {
                        return t.apply(oe(b) ? b : [], h)
                    })
                }
            }),
            ut(xe.prototype, function(e, t) {
                var a = d[t];
                if (a) {
                    var u = a.name + "";
                    Ce.call(dr, u) || (dr[u] = []),
                    dr[u].push({
                        name: t,
                        func: a
                    })
                }
            }),
            dr[Fi(r, M).name] = [{
                name: "wrapper",
                func: r
            }],
            xe.prototype.clone = ud,
            xe.prototype.reverse = cd,
            xe.prototype.value = fd,
            d.prototype.at = Bm,
            d.prototype.chain = $m,
            d.prototype.commit = Um,
            d.prototype.next = Hm,
            d.prototype.plant = qm,
            d.prototype.reverse = Gm,
            d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = Vm,
            d.prototype.first = d.prototype.head,
            jr && (d.prototype[jr] = Wm),
            d
        }
          , fr = Up();
        Wt ? ((Wt.exports = fr)._ = fr,
        Ma._ = fr) : un._ = fr
    }
    ).call(at)
}
)(ua, ua.exports);
var eo = ua.exports;
const RT = () => {
    const {event: {name: n, kind: i, description: r}, color: l} = gn();
    return w.jsxs("div", {
        children: [w.jsx("b", {
            className: "inline-block text-xl pr-4",
            style: {
                color: l
            },
            children: eo.capitalize(i.replace("_", " "))
        }), w.jsx("div", {
            className: "inline-block text-sm",
            children: eo.truncate(n, {
                length: 60,
                separator: " "
            })
        }), i === "exam" && w.jsx("div", {
            className: "block text-xs",
            children: eo.truncate(r.replace("This session concerns only the following exams", "For"), {
                length: 60,
                separator: " "
            })
        })]
    })
}
  , NT = () => {
    const [n,i] = G.useState(!1)
      , r = Bf()
      , {color: l} = gn()
      , o = s => {
        r.open || (s.type === "click" ? i(!1) : i(s.type === "mouseenter"))
    }
    ;
    return w.jsxs("div", {
        className: "relative clear-both m-1 border rounded text-center flex items-stretch flex-row justify-stretch",
        style: {
            borderColor: l
        },
        children: [w.jsx(DT, {}), w.jsx(PT, {}), w.jsxs("div", {
            className: "relative flex-shrink flex-grow flex items-stretch flex-col justify-around break-all text-left pr-1 pt-1 pb-4 pl-4",
            onMouseEnter: o,
            onMouseLeave: o,
            onClick: o,
            children: [w.jsx(RT, {}), w.jsx(OT, {}), w.jsx(LT, {
                visible: n,
                modal: r
            })]
        })]
    })
}
  , MT = () => {
    const {user: n} = zn();
    return ri({
        queryKey: ["v2", "events"],
        queryFn: async () => {
            const l = new URL("/api/v1/users/me/events","https://intrapy.intra.42.fr")
              , o = new Headers;
            o.append("Content-Type", "application/json"),
            o.append("Authorization", `Bearer ${(n == null ? void 0 : n.access_token) || ""}`);
            const s = await fetch(l, {
                headers: o,
                method: "GET"
            })
              , c = await s.json();
            if (!s.ok)
                throw new Error(`Error while fetching events: ${s.status} - ${s.statusText} - ${c.detail}`);
            return ca(c)
        }
        ,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1
    })
}
  , jT = () => {
    const {data: n, isLoading: i} = MT()
      , {isLoading: r} = bo();
    return w.jsx("div", {
        className: "flex flex-col gap-1 mt-2",
        children: i || r ? w.jsx(Mf, {}) : n && n.map(l => w.jsx(zh, {
            event: l,
            children: w.jsx(NT, {})
        }, l.id))
    })
}
  , FT = () => {
    const n = [{
        name: "all events",
        path: "https://profile.intra.42.fr/events"
    }, {
        name: "Event marks",
        path: "https://profile.intra.42.fr/events/marks"
    }];
    return w.jsxs(Tn, {
        name: "agenda",
        children: [w.jsxs(Tn.Header, {
            children: [w.jsx(Tn.Title, {
                children: "Agenda"
            }), w.jsx(Tn.Links, {
                children: n.map(i => w.jsx(Tn.Link, {
                    url: i.path,
                    children: i.name
                }, i.path))
            })]
        }), w.jsx(Tn.Content, {
            children: w.jsx(jT, {})
        })]
    })
}
  , zT = () => {
    const {user: n} = zn();
    return nr({
        mutationFn: async l => {
            const o = new URL(`/scale_teams/${l}.json`,"https://projects.intra.42.fr")
              , s = await fetch(o, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${n == null ? void 0 : n.access_token}`
                }
            });
            if (!s.ok)
                throw new Error(`Error while canceling: ${s.status} - ${s.statusText}`)
        }
        ,
        onSuccess: () => {
            Fn({
                description: "Canceled",
                className: "bg-legacy-main text-white border border-legacy-main/80",
                duration: 2e3
            })
        }
        ,
        onError: () => {
            Fn({
                description: "Error",
                className: "bg-red-500 text-white border border-red-500/80",
                duration: 2e3
            })
        }
    })
}
  , BT = ({id: n}) => {
    const {mutateAsync: i} = zT()
      , r = async () => {
        await i(n)
    }
    ;
    return w.jsxs(go, {
        children: [w.jsx(mo, {
            children: w.jsx(jf, {
                className: "text-legacy-destructive"
            })
        }), w.jsxs(xo, {
            children: [w.jsxs(yo, {
                children: [w.jsx(Ff, {
                    children: "Are you sure absolutely sure?"
                }), w.jsxs(zf, {
                    children: [w.jsx("p", {
                        children: "You're about to cancel this evaluation, forever."
                    }), w.jsxs("p", {
                        children: ["This action is irreversible, and ", w.jsx("b", {
                            className: "font-bold",
                            children: "you will lose an evaluation point."
                        })]
                    }), w.jsxs("p", {
                        className: "text-legacy-destructive",
                        children: ["Remember, this action ", w.jsx("b", {
                            className: "font-bold",
                            children: "does not cancel your slot."
                        })]
                    })]
                })]
            }), w.jsx(vo, {
                children: w.jsx(zt, {
                    onClick: r,
                    variant: "legacy_destructive",
                    children: "Yes, I'm sure"
                })
            })]
        })]
    })
}
  , Lf = ({past: n, date: i}) => w.jsx(wo, {
    children: w.jsxs(_o, {
        children: [w.jsx(So, {
            children: w.jsxs("div", {
                className: "flex gap-1 items-center",
                children: [n ? w.jsx(m0, {
                    fill: "black",
                    size: 15
                }) : w.jsx($f, {
                    size: 15
                }), fa(i, {
                    addSuffix: !0
                })]
            })
        }), w.jsx(ko, {
            className: "bg-ft-gray text-white",
            children: Nf(i)
        })]
    })
})
  , $T = () => {
    const {user: n} = zn();
    return nr({
        mutationFn: async l => {
            const o = new URL(`/scale_teams/${l}/truanted.json`,"https://projects.intra.42.fr").toString()
              , s = await fetch(o, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${n == null ? void 0 : n.access_token}`
                }
            });
            if (!s.ok)
                throw new Error(`Error while truanting: ${s.status} - ${s.statusText}`)
        }
        ,
        onSuccess: () => {
            Fn({
                description: "Reported as absent",
                className: "bg-legacy-main text-white border border-legacy-main/80",
                duration: 2e3
            })
        }
        ,
        onError: () => {
            Fn({
                description: "Error",
                className: "bg-red-500 text-white border border-red-500/80",
                duration: 2e3
            })
        }
    })
}
  , UT = ({id: n}) => {
    const {mutateAsync: i} = $T()
      , r = async () => {
        await i(n)
    }
    ;
    return w.jsxs(go, {
        children: [w.jsx(mo, {
            children: w.jsx(jf, {
                className: "text-legacy-destructive"
            })
        }), w.jsxs(xo, {
            children: [w.jsxs(yo, {
                children: [w.jsx(Ff, {
                    children: "Are you sure absolutely sure? 2"
                }), w.jsxs(zf, {
                    children: [w.jsx("p", {
                        children: "You're about to set the user as missing. That means that the evaluation is cancelled, forever."
                    }), w.jsx("p", {
                        className: "text-legacy-destructive",
                        children: "This action is irreversible, try to call the concerned person before doing it."
                    })]
                })]
            }), w.jsx(vo, {
                children: w.jsx(zt, {
                    onClick: r,
                    variant: "legacy_destructive",
                    children: "Yes, I'm sure"
                })
            })]
        })]
    })
}
  , HT = ({id: n, user: i, kind: r, projectName: l, beginAt: o, canCancel: s, canReport: c}) => {
    const {primaryCampus: f} = Cr()
      , p = er(new Date(o), f == null ? void 0 : f.timeZone)
      , g = y => y ? w.jsx("a", {
        href: `/users/${y}`,
        className: "text-legacy-main hover:text-black",
        children: y
    }) : "someone"
      , x = y => Jr(y) ? w.jsxs("span", {
        children: ["You will evaluate ", g(i), " on ", l]
    }) : w.jsxs("span", {
        children: ["You are ready to evaluate ", g(i), " on ", l, " (", w.jsx(Lf, {
            past: !0,
            date: y
        }), " )"]
    });
    return w.jsxs("div", {
        className: "flex justify-between w-full items-center",
        children: [w.jsx("div", {
            className: "py-2",
            children: r === "evaluator" ? x(p) : w.jsxs("span", {
                children: ["You will be evaluated by ", g(i), " on ", l]
            })
        }), w.jsxs("div", {
            className: "flex flex-row",
            children: [yc(p) && r === "evaluator" ? w.jsx("a", {
                className: "text-legacy-main",
                href: `https://projects.intra.42.fr/scale_teams/${n}/edit`,
                children: "Begin Evaluation"
            }) : w.jsx(Lf, {
                past: yc(p),
                date: p
            }), c && w.jsx(UT, {
                id: n
            }), s && w.jsx(BT, {
                id: n
            })]
        })]
    })
}
  , WT = ({name: n, endAt: i}) => {
    const r = new Date
      , l = s0(_r(new Date(i)), 3);
    return w.jsxs("div", {
        className: "flex flex-row justify-between",
        children: [w.jsxs("div", {
            children: [u0(r, l), " left to feedback"]
        }), w.jsx("div", {
            children: w.jsx($h, {
                name: n
            })
        })]
    })
}
  , qT = () => {
    const {user: n} = zn();
    return ri({
        queryKey: ["v2", "scale_teams"],
        queryFn: async () => {
            const l = new URL("/api/v1/users/me/scale_teams","https://intrapy.intra.42.fr")
              , o = new Headers;
            o.append("Content-Type", "application/json"),
            o.append("Authorization", `Bearer ${(n == null ? void 0 : n.access_token) || ""}`);
            const s = await fetch(l, {
                headers: o,
                method: "GET"
            })
              , c = await s.json();
            if (!s.ok)
                throw new Error(`Error while fetching scale teams: ${s.status} - ${s.statusText} - ${c.detail}`);
            return ca(c)
        }
        ,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1
    })
}
  , GT = () => {
    const {user: n} = zn();
    return ri({
        queryKey: ["v2", "events", "unfeedbacked"],
        queryFn: async () => {
            const l = new URL("/api/v1/users/me/events/unfeedbacked","https://intrapy.intra.42.fr")
              , o = new Headers;
            o.append("Content-Type", "application/json"),
            o.append("Authorization", `Bearer ${(n == null ? void 0 : n.access_token) || ""}`);
            const s = await fetch(l, {
                headers: o,
                method: "GET"
            })
              , c = await s.json();
            if (!s.ok)
                throw new Error(`Error while fetching events: ${s.status} - ${s.statusText} - ${c.detail}`);
            return ca(c)
        }
        ,
        refetchOnMount: !1,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1
    })
}
  , VT = () => {
    const {data: n} = qT()
      , {data: i} = GT();
    return w.jsxs(w.Fragment, {
        children: [i && i.map( (r, l) => w.jsx(zh, {
            event: r,
            children: w.jsx(WT, {
                ...r
            })
        }, l)), n && n.map( (r, l) => w.jsx(HT, {
            ...r
        }, l))]
    })
}
  , KT = () => {
    var o;
    const {user: n} = zn()
      , {userId: i} = t0()
      , r = i || ((o = n == null ? void 0 : n.profile) == null ? void 0 : o.user_id) || "0"
      , {data: l} = r0(r.toString());
    return w.jsxs(Tn, {
        name: "evaluations",
        children: [w.jsxs(Tn.Header, {
            children: [w.jsx(Tn.Title, {
                children: "Pending evaluations"
            }), w.jsxs(Tn.Links, {
                children: [w.jsx(Tn.Toggle, {}), w.jsx(Tn.Link, {
                    url: `https://projects.intra.42.fr/users/${l == null ? void 0 : l.login}/feedbacks`,
                    children: "Feedback Logs"
                }), w.jsx(Tn.Link, {
                    url: "https://profile.intra.42.fr/slots",
                    children: "Manage slots"
                })]
            })]
        }), w.jsx(Tn.Content, {
            children: w.jsx(VT, {})
        })]
    })
}
  , YT = () => {
    const {isLoading: n} = ai();
    return n ? w.jsx("div", {
        className: "flex items-center bg-zinc-50 text-xs gap-0.5 md:gap-4 md:p-4",
        children: w.jsx(Mf, {})
    }) : w.jsxs(c0, {
        children: [w.jsx(FT, {}), w.jsx(KT, {}), w.jsx(f0, {}), w.jsx(h0, {
            small: !0
        }), w.jsx(p0, {})]
    })
}
  , Pf = ({close: n, user: i}) => {
    const {isLoading: r} = bo();
    return r || !i ? w.jsx(w.Fragment, {}) : i.isActive && !n ? w.jsx(w.Fragment, {}) : w.jsx(NS, {
        reason: (n == null ? void 0 : n.reason) || "You have no active cursus. Please, contact your pedagogical team.",
        endAt: n == null ? void 0 : n.endAt
    })
}
  , QT = () => {
    const {loggedUser: n} = bo()
      , i = n == null ? void 0 : n.close;
    return w.jsx(i0, {
        children: w.jsx(a0, {
            children: w.jsxs(d0, {
                children: [w.jsx(g0, {}), w.jsx(RS, {}), n != null && n.isActive ? w.jsxs(w.Fragment, {
                    children: [w.jsx(US, {}), w.jsx(Pf, {
                        close: i,
                        user: n
                    }), w.jsx(YT, {})]
                }) : w.jsx(Pf, {
                    close: i,
                    user: n
                })]
            })
        })
    })
}
;
export {QT as default};
