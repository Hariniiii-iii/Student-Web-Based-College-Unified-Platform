(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[78933], {

    /***/
    246540: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(148454);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var N = __c.N;
            var z = __c.z;
            var y = __c.y;
            var hBd = function(a) {
                __c.u(a.length > 0);
                let b, c;
                for (const d of a) {
                    if (d.format === 5)
                        return d;
                    d.format === 3 && (b = d);
                    d.format === 1 && (c = d)
                }
                return y(b ?? c)
            }
              , iBd = async function(a, b, c) {
                const d = (0,
                __c.ob)()();
                try {
                    const e = __c.Kr(b.fontWeight ?? "normal", b.fontStyle === "italic")
                      , [f] = d.r(await d.s(a.Fa.$J([c])));
                    y(f, "Font not found: {}", c.id);
                    const g = f.fonts.find(l => l.style === e) ?? f.fonts[0];
                    y(g, "Font metadata not found: {} (FontStyle={})", c.id, e);
                    const h = hBd(g.files).url
                      , k = d.r(await d.s(a.fetchData(h)));
                    return {
                        name: f.name,
                        fontWeight: __c.Ir(g.style),
                        fontStyle: __c.Jr(g.style) ? "italic" : "normal",
                        font: {
                            id: __c.tp(c),
                            data: k,
                            filename: y(h.split("/").pop())
                        }
                    }
                } finally {
                    d.s()
                }
            }
              , jBd = function(a, b) {
                a.p$ = b
            }
              , kBd = function(a) {
                const b = c => {
                    a.yf.isPlaying() && !a.disposed && (c = a.TI.tick(c),
                    c.frameChanged && a.p$?.(c.currentFrame),
                    a.GA = requestAnimationFrame(__c.v4.wrap(b)))
                }
                ;
                a.GA = requestAnimationFrame(__c.v4.wrap(b))
            }
              , lBd = function(a) {
                const {children: b, enumValues: c, ...d} = a;
                return {
                    ...d,
                    children: __c.b5(b).map(e => lBd(e)),
                    enumValues: __c.b5(c)
                }
            }
              , nBd = async function(a, b, c, d) {
                const e = (0,
                __c.N4)()();
                try {
                    const f = y(b.getContext("2d"), "Cavalry shared renderer requires a 2D context on the target canvas");
                    e.r(await e.s(a.A7(c, d)));
                    const g = a.module.CavalryRenderer.MakeShared(a.yf, f, c, d);
                    if (!g.ok)
                        throw Error(`Cavalry MakeShared failed: ${g.error}`);
                    return new mBd(a.yf,g.value,b,a.A7)
                } finally {
                    e.s()
                }
            }
              , oBd = function({C: a}) {
                return __c.nq({
                    top: 0,
                    left: 0,
                    width: a.width,
                    height: a.height
                })
            }
              , vBd = function() {
                const [a,b] = pBd(qBd)
                  , c = rBd(null);
                return {
                    ref: sBd(d => {
                        c.current?.();
                        c.current = null;
                        if (d != null) {
                            var e = y(d.parentElement)
                              , f = () => {
                                const l = tBd(e);
                                b(m => m.Fd === l.Fd && m.ee === l.ee ? m : l)
                            }
                            ;
                            f();
                            d = uBd(d);
                            if (d != null) {
                                var g = d.parentElement
                                  , h = g != null ? new ResizeObserver( () => {
                                    f()
                                }
                                ) : void 0;
                                h?.observe(g);
                                var k = new MutationObserver( () => {
                                    f()
                                }
                                );
                                k.observe(d, {
                                    attributes: !0,
                                    attributeFilter: ["style"]
                                });
                                c.current = () => {
                                    h?.disconnect();
                                    k.disconnect()
                                }
                            }
                        }
                    }
                    , []),
                    ...a
                }
            }
              , tBd = function(a) {
                const b = a.getBoundingClientRect()
                  , c = a.offsetWidth;
                a = a.offsetHeight;
                return c === 0 || a === 0 || b.width === 0 || b.height === 0 ? qBd : {
                    Fd: b.width / c,
                    ee: b.height / a
                }
            }
              , uBd = function(a) {
                for (a = a.parentElement; a != null; ) {
                    if (getComputedStyle(a).transform !== "none")
                        return a;
                    a = a.parentElement
                }
                return null
            }
              , i7 = function(a) {
                return a != null && typeof a === "object" && "ref"in a ? a.ref : a
            }
              , wBd = function(a) {
                switch (a.type) {
                case "bool":
                case "int":
                case "double":
                case "string":
                case "richtext":
                case "enum":
                    return {
                        kind: "value",
                        value: a.value
                    };
                case "int2":
                case "double2":
                    var b = i7(a.value);
                    return {
                        kind: "value",
                        value: {
                            x: b.x.value,
                            y: b.y.value
                        }
                    };
                case "double3":
                    return b = i7(a.value),
                    {
                        kind: "value",
                        value: {
                            x: b.x.value,
                            y: b.y.value,
                            z: b.z.value
                        }
                    };
                case "double4":
                    return b = i7(a.value),
                    {
                        kind: "value",
                        value: {
                            x: b.x.value,
                            y: b.y.value,
                            z: b.z.value,
                            w: b.w.value
                        }
                    };
                case "font":
                    break;
                case "color":
                    a = i7(a.value);
                    if (a.type === "solid")
                        return b = i7(a.value),
                        {
                            kind: "value",
                            value: {
                                r: b.r,
                                g: b.g,
                                b: b.b,
                                a: b.a
                            }
                        };
                    const c = a.Ha;
                    a = [];
                    for (b of c.Vc) {
                        if (b == null)
                            continue;
                        const d = i7(b.color);
                        a.push({
                            color: {
                                r: d.r,
                                g: d.g,
                                b: d.b,
                                a: d.a
                            },
                            position: b.position
                        })
                    }
                    switch (c.type) {
                    case "linear":
                        return {
                            kind: "gradient",
                            Vc: a,
                            XDa: {
                                attrId: "rotation",
                                value: c.rotation
                            }
                        };
                    case "radial":
                        return b = i7(c.center),
                        {
                            kind: "gradient",
                            Vc: a,
                            XDa: {
                                attrId: "offset",
                                value: {
                                    x: b.x,
                                    y: b.y
                                }
                            }
                        };
                    default:
                        throw new z(c);
                    }
                default:
                    throw new z(a);
                }
            }
              , yBd = function(a, b) {
                a.Kma?.();
                a.container = b;
                b.appendChild(a.canvas);
                a.Kma = xBd( () => {
                    const c = a.C.width
                      , d = a.C.height
                      , e = a.container;
                    e != null && (e.style.width = `${c}px`,
                    e.style.height = `${d}px`,
                    a.canvas.width = c,
                    a.canvas.height = d,
                    a.canvas.style.width = `${c}px`,
                    a.canvas.style.height = `${d}px`)
                }
                )
            }
              , zBd = function(a) {
                return xBd( () => {
                    const b = a.C.Af.ref;
                    if (b)
                        switch (a.status.type) {
                        case "engine_ready":
                            a.loadScene(b);
                            break;
                        case "scene_ready":
                            a.status.xQ !== b.resource.xQ && a.loadScene(b);
                            break;
                        case "engine_loading":
                        case "scene_loading":
                        case "error":
                            break;
                        default:
                            throw new z(a.status);
                        }
                }
                )
            }
              , ABd = async function(a, b) {
                const c = j7()();
                try {
                    try {
                        c.r(await c.s(a.factory.initialize())),
                        b === a.XU && k7( () => {
                            a.status = {
                                type: "engine_ready"
                            }
                        }
                        )
                    } catch (d) {
                        c.r(),
                        b === a.XU && (a.J.Db(d, {
                            Zd: "Failed to initialize Cavalry engine"
                        }),
                        k7( () => {
                            a.status = {
                                type: "error",
                                message: __c.L("4CbRVQ")
                            }
                        }
                        ))
                    }
                } finally {
                    c.s()
                }
            }
              , BBd = async function(a, b) {
                const c = j7()();
                try {
                    const d = c.r(await c.s(nBd(b, a.canvas, a.C.width, a.C.height)));
                    d.TI.render();
                    d.dispose()
                } finally {
                    c.s()
                }
            }
              , CBd = function(a, b, c, d) {
                __c.x(a.Tda == null);
                a.Tda = xBd( () => {
                    var e = b.attributes;
                    for (const h of e) {
                        if (h == null)
                            continue;
                        const k = wBd(i7(h.definition));
                        if (k != null)
                            for (const l of h.refs)
                                if (l != null) {
                                    e = c;
                                    var f = l.layerId
                                      , g = l.attrId;
                                    switch (k.kind) {
                                    case "value":
                                        e.setAttribute(f, g, k.value);
                                        break;
                                    case "gradient":
                                        e.setAttributeArray(f, g, k.Vc);
                                        k.XDa && e.setAttribute(f, k.XDa.attrId, k.XDa.value);
                                        break;
                                    default:
                                        throw new z(k);
                                    }
                                }
                    }
                    d?.()
                }
                )
            }
              , DBd = function(a, b) {
                __c.x(a.Wla == null);
                const c = l7( () => a.C.uf.tv, e => b.setLoop(e), {
                    fireImmediately: !0
                })
                  , d = l7( () => a.C.uf.playbackRate, e => b.setCompTimeMultiplier(e), {
                    fireImmediately: !0
                });
                a.Wla = () => {
                    c();
                    d()
                }
            }
              , FBd = function(a) {
                return k7( () => {
                    a.ba?.kind !== "cavalry" && (a.ba = new EBd);
                    return a.ba
                }
                )
            }
              , KBd = function(a) {
                return GBd( () => {
                    const b = a.data.C.Af.ref?.type
                      , c = HBd( () => {
                        switch (b) {
                        case void 0:
                            return IBd;
                        case "cavalry":
                            return JBd(a);
                        default:
                            throw new z(b);
                        }
                    }
                    , [b]);
                    return m7("div", {
                        className: "_2SiIgg",
                        children: c != null && m7(c, {})
                    })
                }
                )
            }
              , JBd = function(a) {
                const b = a.J
                  , c = a.uz
                  , d = a.data
                  , e = a.Lb
                  , f = d.C
                  , g = d.local
                  , h = new LBd(b,a.HKa,e,d)
                  , k = MBd({
                    data: d,
                    Lb: e,
                    TNb: h
                })
                  , l = new NBd(b,c,f,g)
                  , m = new OBd(b,c,f,g);
                return function() {
                    PBd( () => {
                        h.initialize();
                        return () => {
                            h.dispose()
                        }
                    }
                    , []);
                    PBd( () => l.init(), []);
                    PBd( () => m.init(), []);
                    return m7("div", {
                        className: "_6WyfQA",
                        children: m7(k, {})
                    })
                }
            }
              , mBd = class {
                resize(a, b) {
                    this.canvas.width = a;
                    this.canvas.height = b;
                    this.canvas.style.width = `${a}px`;
                    this.canvas.style.height = `${b}px`;
                    this.A7(a, b);
                    this.TI.resize(a, b);
                    this.TI.render()
                }
                play() {
                    this.yf.isPlaying() || (this.yf.play(),
                    kBd(this))
                }
                stop() {
                    this.yf.stop();
                    this.GA != null && (cancelAnimationFrame(this.GA),
                    this.GA = null)
                }
                toggle() {
                    this.yf.isPlaying() ? this.stop() : this.play()
                }
                setCompTimeMultiplier(a) {
                    this.yf.setCompTimeMultiplier(a)
                }
                setPlaybackMode(a) {
                    this.yf.setPlaybackMode(a)
                }
                setFrame(a) {
                    this.stop();
                    this.yf.setFrame(a);
                    this.TI.render();
                    this.p$?.(a)
                }
                cq() {
                    return this.yf.getFrame()
                }
                isPlaying() {
                    return this.yf.isPlaying()
                }
                incrementFrame() {
                    this.stop();
                    this.yf.incrementFrame();
                    var a = this.yf.getFrame();
                    this.TI.render();
                    this.p$?.(a)
                }
                getPlaybackMode() {
                    return this.yf.getPlaybackMode()
                }
                setLoop(a) {
                    this.yf.setLoop(a === 2)
                }
                isLooping() {
                    return this.yf.isLooping()
                }
                itemAt(a, b) {
                    return this.TI.itemAt(a, b)
                }
                setHighlightStyle(a) {
                    this.TI.setHighlightStyle(a)
                }
                highlightItem(a) {
                    this.TI.highlightItem(a)
                }
                dispose() {
                    this.disposed = !0;
                    this.p$ = void 0;
                    this.stop();
                    this.TI.delete()
                }
                constructor(a, b, c, d) {
                    this.yf = a;
                    this.TI = b;
                    this.canvas = c;
                    this.A7 = d;
                    this.GA = null;
                    this.disposed = !1
                }
            }
              , QBd = class {
                getControlCentreAttributes(a) {
                    return __c.b5(this.yf.getControlCentreAttributes(a))
                }
                getAttributeDefinition(a, b) {
                    a = this.yf.getAttributeDefinition(a, b);
                    return lBd(a)
                }
                getAttributeName(a, b) {
                    return this.yf.getAttributeName(a, b)
                }
                setAttribute(a, b, c) {
                    this.yf.setAttribute(a, b, c)
                }
                getAttribute(a, b) {
                    return this.yf.getAttribute(a, b)
                }
                getAttributeArray(a, b) {
                    return this.yf.getAttributeArray(a, b)
                }
                setAttributeArray(a, b, c) {
                    this.yf.setAttributeArray(a, b, c)
                }
                getLayerType(a) {
                    return this.yf.getLayerType(a)
                }
                setAttributeFont(a, b, c) {
                    this.yf.setAttributeFont(a, b, c)
                }
                setAttributeFontByProperties(a, b, c) {
                    this.yf.setAttributeFontByProperties(a, b, c)
                }
                getEnumDisplayNames(a, b) {
                    return this.yf.getEnumDisplayNames(a, b).then(__c.v4.wrap(c => c.ok ? (0,
                    __c.ya)(c.value) : (0,
                    __c.Aa)(c.error)))
                }
                constructor(a) {
                    this.yf = a
                }
            }
              , j7 = __webpack_require__(929846)._;
            var n7 = __webpack_require__(1193)
              , o7 = n7.EW
              , xBd = n7.fm
              , k7 = n7.h5
              , l7 = n7.mJ
              , p7 = n7.sH
              , RBd = n7.XI;
            var q7 = __webpack_require__(978109)
              , SBd = q7.memo
              , sBd = q7.useCallback
              , PBd = q7.useEffect
              , TBd = q7.useLayoutEffect
              , HBd = q7.useMemo
              , rBd = q7.useRef
              , pBd = q7.useState;
            var UBd = __webpack_require__(296713)
              , VBd = UBd.Fragment
              , m7 = UBd.jsx
              , WBd = UBd.jsxs;
            var XBd = __webpack_require__
              , YBd = XBd(208463)
              , ZBd = XBd.n_x(YBd)();
            var GBd = __webpack_require__(613814).PA;
            var $Bd = __webpack_require__(815703).F;
            var NBd = class {
                static G(a) {
                    N(a, {
                        hhb: o7,
                        jQa: o7
                    })
                }
                get hhb() {
                    const a = this.data.Af.ref?.attributes;
                    if (a == null)
                        return [];
                    const b = [];
                    for (const c of a)
                        c.definition.ref.type === "font" && b.push([c.definition.ref, [...c.refs]]);
                    return b
                }
                get jQa() {
                    const a = this.hhb;
                    if (a.length !== 0) {
                        var b = a[0][0]
                          , c = [];
                        for (const [e,f] of a) {
                            if (d == null && e.fontFamily != null) {
                                b = e;
                                var d = __c.xp(e.fontFamily)
                            }
                            c.push(...f)
                        }
                        return d == null ? void 0 : [b, d, c]
                    }
                }
                init() {
                    const a = l7( () => {
                        const b = this.local.ba?.kind === "cavalry" ? this.local.ba : void 0
                          , c = this.jQa;
                        return [c, b?.scene, b?.attributes, c?.[0].fontWeight, c?.[0].fontStyle]
                    }
                    , async ([b,c,d]) => {
                        const e = j7()();
                        try {
                            if (b != null && c != null && d != null) {
                                var [f,g,h] = b;
                                try {
                                    const {fontWeight: l, fontStyle: m, font: n} = e.r(await e.s(iBd(this.uz, f, g)));
                                    if (c === (this.local.ba?.kind === "cavalry" ? this.local.ba : void 0)?.scene) {
                                        c.writeFile(n.filename, n.data);
                                        c.loadFont(n.id, n.filename);
                                        var k = {
                                            family: n.id,
                                            weight: __c.Hr(l) ?? 400,
                                            slant: m === "italic" ? aCd : bCd
                                        };
                                        k7( () => {
                                            for (const {layerId: p, attrId: q} of h)
                                                d.setAttributeFontByProperties(p, q, k)
                                        }
                                        )
                                    }
                                } catch (l) {
                                    e.r(),
                                    this.J.Db(l, {
                                        Zd: "Failed to load font"
                                    })
                                }
                            }
                        } finally {
                            e.s()
                        }
                    }
                    );
                    return () => {
                        a()
                    }
                }
                constructor(a, b, c, d) {
                    this.J = a;
                    this.uz = b;
                    this.data = c;
                    this.local = d;
                    NBd.G(this)
                }
            }
              , bCd = 0
              , aCd = 1;
            var OBd = class {
                static G(a) {
                    N(a, {
                        Gpb: o7
                    })
                }
                get Gpb() {
                    const a = this.data.Af.ref?.oJa;
                    return a == null ? [] : Array.from(a.media.values())
                }
                init() {
                    const a = l7( () => [this.Gpb, (this.local.ba?.kind === "cavalry" ? this.local.ba : void 0)?.scene], async ([b,c]) => {
                        const d = j7()();
                        try {
                            if (b.length !== 0 && c != null)
                                try {
                                    const e = d.r(await d.s(this.uz.yCa(b)));
                                    if (c === (this.local.ba?.kind === "cavalry" ? this.local.ba : void 0)?.scene)
                                        for (const {assetId: f, filename: g, data: h} of e)
                                            c.writeFile(g, h),
                                            c.replaceImageAsset(g, f)
                                } catch (e) {
                                    d.r(),
                                    this.J.Db(e, {
                                        Zd: "Failed to load media"
                                    })
                                }
                        } finally {
                            d.s()
                        }
                    }
                    );
                    return () => {
                        a()
                    }
                }
                constructor(a, b, c, d) {
                    this.J = a;
                    this.uz = b;
                    this.data = c;
                    this.local = d;
                    OBd.G(this)
                }
            }
            ;
            var cCd = () => {
                const {ref: a, Fd: b, ee: c} = vBd();
                return {
                    ref: a,
                    style: b !== 1 || c !== 1 ? {
                        width: `${b * 100}%`,
                        height: `${c * 100}%`,
                        transform: `scale(${1 / b}, ${1 / c})`,
                        transformOrigin: "0 0"
                    } : {}
                }
            }
              , qBd = {
                Fd: 1,
                ee: 1
            };
            var MBd = ({data: a, Lb: b, TNb: c}) => GBd( () => {
                const d = c.status
                  , {ref: e, style: f} = cCd()
                  , g = b === 30
                  , h = sBd(k => {
                    k != null ? yBd(c, k) : (c.Kma?.(),
                    c.Kma = void 0,
                    c.canvas.parentElement && c.canvas.parentElement.removeChild(c.canvas),
                    c.container = void 0)
                }
                , []);
                TBd( () => zBd(c), []);
                return m7("div", {
                    ref: __c.ce(h, e),
                    className: "oDxhiA",
                    children: g && m7("div", {
                        className: "xXKQUw",
                        style: f,
                        children: m7(dCd, {
                            status: d,
                            A1: a.local.uf.A1
                        })
                    })
                })
            }
            )
              , dCd = ({status: a, A1: b}) => WBd(VBd, {
                children: [a.type === "error" && m7(eCd, {
                    message: a.message
                }), a.type === "engine_loading" && m7(fCd, {}), a.type === "scene_loading" && m7(fCd, {}), a.type === "engine_ready" && m7(gCd, {}), a.type === "scene_ready" && b && m7(hCd, {})]
            })
              , eCd = ({message: a}) => m7("div", {
                className: ZBd("Va7zIg", "yjMMPQ"),
                children: m7("div", {
                    className: "XDTWXA",
                    children: a
                })
            })
              , fCd = () => m7("div", {
                className: "bWgs_Q",
                "data-testid": "cavalry-canvas-loading-overlay"
            })
              , gCd = () => m7("div", {
                className: ZBd("Va7zIg", "oAL2qw"),
                children: m7("div", {
                    children: __c.L("K6CJpA")
                })
            })
              , hCd = () => m7("div", {
                className: ZBd("Va7zIg", "dgTDDA"),
                children: m7("div", {
                    children: __c.L("Wkb1+A")
                })
            });
            var EBd = class {
                static G(a) {
                    N(a, {
                        scene: p7.ref,
                        ce: p7.ref,
                        attributes: p7.ref,
                        wha: p7.ref
                    })
                }
                constructor() {
                    this.kind = (EBd.G(this),
                    "cavalry");
                    this.wha = void 0
                }
            }
            ;
            var LBd = class {
                static G(a) {
                    N(a, {
                        status: p7.ref,
                        dispose: RBd,
                        wha: RBd
                    })
                }
                initialize() {
                    const a = ++this.XU;
                    ABd(this, a)
                }
                createCanvas() {
                    const a = document.createElement("canvas");
                    a.id = __c.sa();
                    return a
                }
                dispose() {
                    this.XU++;
                    this.Tda?.();
                    this.Tda = void 0;
                    this.Wla?.();
                    this.Wla = void 0;
                    this.Kma?.();
                    this.Kma = void 0;
                    this.canvas.parentElement && this.canvas.parentElement.removeChild(this.canvas);
                    this.container = void 0
                }
                async loadScene(a) {
                    const b = j7()();
                    try {
                        const e = this.XU
                          , f = a.resource;
                        k7( () => {
                            this.status = {
                                type: "scene_loading"
                            }
                        }
                        );
                        try {
                            const g = (new TextEncoder).encode(f.data).buffer
                              , h = b.r(await b.s(this.factory.loadScene(`${f.xQ}.cv`, g)));
                            if (e === this.XU) {
                                this.Tda?.();
                                this.Tda = void 0;
                                this.Wla?.();
                                this.Wla = void 0;
                                var c = new QBd(h.yf);
                                if (this.Lb !== 30)
                                    CBd(this, a, c, () => {
                                        BBd(this, h).catch($Bd.wrap(k => {
                                            this.J.Db(k, {
                                                Zd: "Failed to render single frame"
                                            })
                                        }
                                        ))
                                    }
                                    ),
                                    k7( () => {
                                        this.status = {
                                            type: "scene_ready",
                                            xQ: f.xQ
                                        }
                                    }
                                    );
                                else {
                                    var d = b.r(await b.s(nBd(h, this.canvas, this.C.width, this.C.height)));
                                    e !== this.XU ? d.dispose() : (this.local.ce?.dispose?.(),
                                    k7( () => {
                                        this.local.scene = h;
                                        this.local.attributes = c;
                                        this.local.ce = d;
                                        this.local.wha = () => this.wha(d);
                                        jBd(d, this.p$(d))
                                    }
                                    ),
                                    CBd(this, a, c),
                                    DBd(this, d),
                                    k7( () => {
                                        this.uf.A1 = !1;
                                        this.C.uf.autoplay ? (this.MXa.reset(),
                                        d.play()) : d.TI.render();
                                        const k = this.uf;
                                        k.L1a = h.getStartFrame();
                                        k.kPa = h.getEndFrame();
                                        k.currentFrame = d.cq();
                                        k.isPlaying = d.isPlaying();
                                        k.cwa = d.yf.getFPS()
                                    }
                                    ),
                                    k7( () => {
                                        this.status = {
                                            type: "scene_ready",
                                            xQ: f.xQ
                                        }
                                    }
                                    ))
                                }
                            }
                        } catch (g) {
                            b.r(),
                            e === this.XU && (this.J.Db(g, {
                                Zd: "Failed to load scene"
                            }),
                            k7( () => {
                                this.status = {
                                    type: "error",
                                    message: __c.L("YSP0tA")
                                }
                            }
                            ))
                        }
                    } finally {
                        b.s()
                    }
                }
                wha(a) {
                    this.MXa.reset({
                        ksa: 5E3
                    });
                    this.uf.A1 = !1;
                    a.play();
                    this.uf.isPlaying = a.isPlaying()
                }
                constructor(a, b, c, d) {
                    this.J = a;
                    this.factory = b;
                    this.Lb = c;
                    this.status = (LBd.G(this),
                    {
                        type: "engine_loading"
                    });
                    this.XU = 0;
                    this.MXa = new iCd;
                    this.p$ = e => RBd(f => {
                        const g = this.uf;
                        g.currentFrame = f;
                        g.isPlaying = e.isPlaying();
                        f = this.MXa;
                        if (f.done)
                            f = !1;
                        else {
                            f.frameCount++;
                            var h = f.now() - f.startTime
                              , k = h >= f.ksa;
                            f.frameCount >= f.VKa || k ? (f.done = !0,
                            k = e.yf.getFPS(),
                            h /= 1E3,
                            f = h > 0 ? f.frameCount / h : 0,
                            f = k > 0 && (k > 0 ? f / k : -1) < .4) : f = !1
                        }
                        f && (e.stop(),
                        g.isPlaying = !1,
                        g.A1 = !0)
                    }
                    );
                    this.canvas = this.createCanvas();
                    this.C = d.C;
                    this.local = FBd(d.local);
                    this.uf = d.local.uf
                }
            }
              , iCd = class {
                reset(a) {
                    this.frameCount = 0;
                    this.startTime = this.now();
                    this.done = !1;
                    this.VKa = a?.VKa ?? 30;
                    this.ksa = a?.ksa ?? 2E3
                }
                constructor() {
                    this.now = () => performance.now();
                    this.startTime = this.frameCount = 0;
                    this.done = !1;
                    this.VKa = 30;
                    this.ksa = 2E3
                }
            }
            ;
            var IBd = () => m7("div", {
                className: "Vdyz_w",
                children: WBd("svg", {
                    className: "H5o7Ug",
                    viewBox: "0 0 320 240",
                    xmlns: "http://www.w3.org/2000/svg",
                    "aria-hidden": "true",
                    preserveAspectRatio: "xMidYMid meet",
                    children: [m7("circle", {
                        cx: "58",
                        cy: "46",
                        r: "14",
                        fill: "#7ed957"
                    }), m7("rect", {
                        x: "44",
                        y: "62",
                        width: "32",
                        height: "124",
                        rx: "16",
                        fill: "none",
                        stroke: "#7ed957",
                        strokeWidth: "6"
                    }), m7("circle", {
                        cx: "146",
                        cy: "90",
                        r: "32",
                        fill: "none",
                        stroke: "#ffd83d",
                        strokeWidth: "6"
                    }), m7("path", {
                        d: "M232 50 L274 122 L190 122 Z",
                        fill: "none",
                        stroke: "#1a1a1a",
                        strokeWidth: "6",
                        strokeLinejoin: "round"
                    }), m7("rect", {
                        x: "60",
                        y: "156",
                        width: "108",
                        height: "36",
                        rx: "18",
                        fill: "none",
                        stroke: "#1a1a1a",
                        strokeWidth: "6"
                    }), m7("rect", {
                        x: "184",
                        y: "148",
                        width: "32",
                        height: "32",
                        fill: "#7ed957"
                    })]
                })
            });
            var jCd = class {
                static G(a) {
                    N(a, {
                        wTb: o7,
                        currentFrame: p7.ref,
                        DTa: p7.ref,
                        L1a: p7.ref,
                        kPa: p7.ref,
                        cwa: p7.ref,
                        gU: p7.ref,
                        seeking: p7.ref,
                        A1: p7.ref
                    })
                }
                get wTb() {
                    return Math.max(0, this.kPa - this.L1a)
                }
                get isPlaying() {
                    return this.DTa
                }
                set isPlaying(a) {
                    (this.DTa = a) && !this.gU && (this.gU = !0)
                }
                constructor() {
                    this.currentFrame = (jCd.G(this),
                    0);
                    this.DTa = !1;
                    this.cwa = this.kPa = this.L1a = 0;
                    this.A1 = this.gU = !1
                }
            }
              , kCd = class {
                static G(a) {
                    N(a, {
                        Bk: p7.ref
                    })
                }
                constructor() {
                    this.Bk = (kCd.G(this),
                    void 0)
                }
            }
              , lCd = class {
                static G(a) {
                    N(a, {
                        selected: p7.ref,
                        uf: p7.ref,
                        ba: p7.ref
                    })
                }
                constructor(a) {
                    this.selected = (lCd.G(this),
                    void 0);
                    this.uf = new jCd;
                    this.selected = a
                }
            }
            ;
            var mCd = __c.ry()( ({Ly: {J: a}, ig: b}) => {
                const c = new kCd
                  , d = b.HKa
                  , e = b.uz
                  , f = a.Wd("motion_graphic");
                a = SBd(function({data: g, Ma: {Lb: h}}) {
                    const k = HBd( () => KBd({
                        HKa: d,
                        J: f,
                        uz: e,
                        data: g,
                        Lb: h
                    }), [g, h]);
                    return m7(k, {})
                });
                return {
                    metadata: {
                        type: "motion_graphic",
                        name: "Motion Graphic"
                    },
                    BD: () => new lCd(!1),
                    C: __c.qy(a),
                    Vj: oBd,
                    exports: {
                        configuration: c,
                        uz: e
                    }
                }
            }
            );
            __c.zld = {
                Xd: __c.prd,
                Sk: mCd,
                Yd: __c.lrd
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/1593586e043a901c.js.map
