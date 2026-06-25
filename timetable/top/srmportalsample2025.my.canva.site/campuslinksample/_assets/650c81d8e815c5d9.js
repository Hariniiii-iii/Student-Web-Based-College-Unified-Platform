(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[27560], {

    /***/
    566675: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(148454);
        __web_req__(397704);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var H = __c.H;
            var z = __c.z;
            var wvd = function(a, b) {
                return {
                    ...b,
                    files: b.files.map(c => ({
                        ...c,
                        url: vvd(a, c.url)
                    })),
                    GW: b.GW?.map(c => ({
                        ...c,
                        url: vvd(a, c.url)
                    })),
                    kwb: b.kwb?.map(c => ({
                        ...c,
                        url: vvd(a, c.url)
                    }))
                }
            }
              , xvd = function(a, b) {
                return {
                    ...b,
                    fonts: b.fonts.map(c => wvd(a, c))
                }
            }
              , vvd = function(a, b) {
                b = new URL(b);
                b.pathname = `/_framed/${encodeURIComponent(a.Ro.qe)}${b.pathname}`;
                return b.toString()
            }
              , yvd = function(a, b) {
                b = new URL(b);
                b.pathname = `/_framed/${encodeURIComponent(a.Ro.qe)}${b.pathname}`;
                return b.toString()
            }
              , zvd = function(a) {
                const b = __c.y(a.oT);
                return {
                    append: c => {
                        const d = b.last(f => f.selector === c.selector && f.operation.type === c.operation.type);
                        if (d != null)
                            a: switch (c.operation.type) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                                var e = c;
                                break a;
                            default:
                                throw new z(c.operation);
                            }
                        else
                            e = c;
                        d != null && b.delete(d);
                        b.append(e)
                    }
                    ,
                    toArray: () => b.toArray()
                }
            }
              , Dvd = function(a) {
                switch (a.type) {
                case 1:
                    return new __c.Jsd({
                        color: a.color
                    });
                case 2:
                    return new __c.Msd({
                        Ia: a.Ia,
                        Oa: a.Oa
                    });
                case 4:
                    return new __c.Osd({
                        rotation: a.rotation
                    });
                case 5:
                    return new __c.Rsd({
                        scale: a.scale
                    });
                case 3:
                    return new Avd({
                        vE: new __c.O5({
                            id: a.vE.id,
                            version: a.vE.version
                        })
                    });
                case 6:
                    return new __c.Tsd({
                        html: __c.km.Rb.serialize(__c.km.snapshot(a.html))
                    });
                case 7:
                    return Bvd.vg({
                        href: a.href
                    });
                case 8:
                    return new Cvd({
                        order: a.order
                    });
                default:
                    throw new z(a);
                }
            }
              , Fvd = function(a) {
                if (a.image.ref?.media.type === "RESOLVED")
                    return `canva://${a.image.ref.media.id}/${a.image.ref.media.version}`;
                if (a.color === "transparent")
                    return "transparent";
                if (a.color) {
                    const b = Math.round((1 - a.ma) * 255).toString(16).padStart(2, "0");
                    return `${a.color}${b}`
                }
                if (a.Ha.ref) {
                    a: switch (a = a.Ha.ref,
                    a.type) {
                    case "linear":
                        a = `linear-gradient(${a.rotation}deg, ${a.Vc.map(Evd).join(", ")})`;
                        break a;
                    case "radial":
                        a = `radial-gradient(${a.Vc.map(Evd).join(", ")})`;
                        break a;
                    default:
                        throw new z(a);
                    }
                    return a
                }
                if (!a.color && !a.Ha.ref)
                    return "transparent"
            }
              , Evd = function(a) {
                return __c.iv(__c.cv(__c.Wu(a.color), 1 - a.ma))
            }
              , Hvd = function(a, b, c, d) {
                const e = new Map;
                return Gvd( () => {
                    const f = a.Fj(b.config).filter( ({key: g, snapshot: h}) => {
                        const k = e.get(g);
                        e.set(g, h);
                        return (new class extends __c.Aod {
                            xX(l, m) {
                                return m || l !== k?.textContent
                            }
                            tR(l, m) {
                                return m || l !== k?.background
                            }
                            uR(l, m) {
                                return m || l !== k?.color
                            }
                            uGb(l, m) {
                                return m || l !== k?.fontFamily
                            }
                            wGb(l, m) {
                                return m || l !== k?.fontWeight
                            }
                            vGb(l, m) {
                                return m || l !== k?.fontStyle
                            }
                            wca(l, m) {
                                return m || l !== k?.fontSize
                            }
                            vX(l, m) {
                                return m || l !== k?.letterSpacing
                            }
                            wX(l, m) {
                                return m || l !== k?.lineHeight
                            }
                            vR(l, m) {
                                return m || l !== k?.St
                            }
                            tX(l, m) {
                                return m || l !== k?.La
                            }
                            yca(l, m) {
                                return m || l !== k?.left
                            }
                            Aca(l, m) {
                                return m || l !== k?.top
                            }
                            Cca(l, m) {
                                return m || l !== k?.width
                            }
                            xca(l, m) {
                                return m || l !== k?.height
                            }
                            zca(l, m) {
                                return m || l !== k?.rotation
                            }
                            Bca(l, m) {
                                return m || l !== k?.visibility
                            }
                        }
                        ).map(h, !1)
                    }
                    );
                    return Promise.all(f.map(async ({key: g, snapshot: h}) => {
                        const k = b6()();
                        try {
                            const l = __c.zkd(g, b.config) ? 7 : 6;
                            return [g, k.r(await k.s(__c.Lkd(h, {
                                Fa: a.Fa,
                                Sr: a.Sr
                            }, l, {
                                W_b: c.Lb > 10 && c.On
                            })))]
                        } finally {
                            k.s()
                        }
                    }
                    ))
                }
                , async f => {
                    const g = b6()();
                    try {
                        try {
                            g.r(await g.s(d.UL(new __c.vtd({
                                config: new Map(g.r(await g.s(f)))
                            }))))
                        } catch (h) {
                            g.r(),
                            a.J.Db(h)
                        }
                    } finally {
                        g.s()
                    }
                }
                , {
                    fireImmediately: !0
                })
            }
              , Kvd = function(a, b, c) {
                return Gvd( () => b.oT && zvd(b).toArray().map(a.Ojc), async d => {
                    const e = b6()();
                    try {
                        try {
                            e.r(await e.s(c.cZa(new Ivd({
                                oT: d
                            }))))
                        } catch (f) {
                            e.r(),
                            a.J.Db(f)
                        }
                    } finally {
                        e.s()
                    }
                }
                , {
                    fireImmediately: !0,
                    equals: Jvd.shallow
                })
            }
              , Lvd = function() {
                return () => {}
            }
              , Mvd = function(a) {
                a.aNc(__c.vQc);
                return function() {
                    return c6(__c.Rd, {
                        position: "absolute",
                        start: "0",
                        end: "0",
                        className: "E2eetA",
                        children: c6(__c.xQc, {
                            E_b: "large",
                            description: __c.L("aH0X5Q")
                        })
                    })
                }
            }
              , Ovd = function(a) {
                const b = Nvd(a);
                d6( () => {
                    if (b.current === !0 && a === !1)
                        try {
                            document.dispatchEvent(new PointerEvent("pointerup",{
                                bubbles: !0,
                                cancelable: !0,
                                view: window,
                                pointerId: 1,
                                pointerType: "mouse"
                            })),
                            document.dispatchEvent(new MouseEvent("mouseup",{
                                bubbles: !0,
                                cancelable: !0,
                                view: window
                            }))
                        } catch (c) {
                            throw Error(`Failed to dispatch pointer release events for codelet iframe: ${c}`);
                        }
                    b.current = a
                }
                , [a])
            }
              , Avd = H( () => ({
                type: __c.F("A?", 4, "MEDIA_REPLACE"),
                vE: __c.Na(25, __c.O5)
            }))
              , Bvd = H( () => ({
                type: __c.F("A?", 7, "LINK"),
                href: __c.Y(28)
            }))
              , Cvd = H( () => ({
                type: __c.F("A?", 8, "REORDER"),
                order: __c.hK(29)
            }))
              , Pvd = __c.ab( () => ({
                type: [1, __c.Jsd, 2, __c.Msd, 3, __c.Osd, 4, Avd, 5, __c.Rsd, 6, __c.Tsd, 7, Bvd, 8, Cvd]
            }), () => ({}))
              , Qvd = H( () => ({
                type: __c.F("A?", 1, "ELEMENT_EDIT"),
                selector: __c.W(1),
                operation: __c.Na(2, Pvd)
            }))
              , Ivd = H( () => ({
                oT: __c.Oa(1, Qvd)
            }))
              , Rvd = H( () => ({}));
            __c.X4.prototype.cZa = __c.ca(55, function(a) {
                return this.FCa.sendMessage("Editing2SdkIframe.renderEdits", Ivd.serialize(a), this.config?.cZa).then(__c.v4.wrap(Rvd.S))
            });
            var b6 = __webpack_require__(929846)._;
            var e6 = __webpack_require__(1193)
              , Svd = e6.h5
              , Jvd = e6.m3
              , Gvd = e6.mJ
              , f6 = e6.sH
              , g6 = e6.XI
              , Tvd = e6.z7;
            var Uvd = __webpack_require__(221627).Aj;
            var Vvd = __webpack_require__(296713)
              , Wvd = Vvd.Fragment
              , c6 = Vvd.jsx
              , Xvd = Vvd.jsxs;
            var Yvd = __webpack_require__
              , Zvd = Yvd(208463)
              , $vd = Yvd.n_x(Zvd)();
            var awd = __webpack_require__(613814).PA;
            var h6 = __webpack_require__(978109)
              , bwd = h6.useCallback
              , d6 = h6.useEffect
              , cwd = h6.useMemo
              , Nvd = h6.useRef
              , dwd = h6.useState;
            var ewd = __webpack_require__(815703).F;
            var fwd = class {
                async $J(a) {
                    const b = b6()();
                    try {
                        return b.r(await b.s(this.LS.$J(a))).map(c => xvd(this, c))
                    } finally {
                        b.s()
                    }
                }
                hz(a) {
                    return (a = this.LS.hz(a)) && xvd(this, a)
                }
                rQ(a) {
                    return this.LS.rQ(a)
                }
                constructor(a, b) {
                    this.Ro = a;
                    this.LS = b
                }
            }
            ;
            var gwd = class {
                async NU(a) {
                    return this.Sr.NU(a)
                }
                TG(a, b) {
                    a = this.Sr.TG(a, b);
                    if (a != null)
                        return {
                            ...a,
                            url: yvd(this, a.url)
                        }
                }
                vwa(a) {
                    a = this.Sr.vwa(a);
                    if (a != null)
                        return a.map(b => ({
                            ...b,
                            src: yvd(this, b.src)
                        }))
                }
                constructor(a, b) {
                    this.Ro = a;
                    this.Sr = b
                }
            }
            ;
            var hwd = class {
                static G(a) {
                    __c.N(a, {
                        sOa: f6.ref,
                        wK: f6.shallow
                    })
                }
                constructor() {
                    this.sOa = (hwd.G(this),
                    void 0)
                }
            }
              , iwd = class {
                static G(a) {
                    __c.N(a, {
                        Bk: f6.ref,
                        I5a: f6.ref,
                        q6a: f6.ref
                    })
                }
                constructor() {
                    this.Bk = (iwd.G(this),
                    void 0)
                }
            }
            ;
            var jwd = class {
            }
              , kwd = class extends jwd {
                map(a, b) {
                    b = this.xX(a.textContent, b);
                    b = this.tR(a.background, b);
                    b = this.uR(a.color, b);
                    b = this.vca(a, b);
                    b = this.vX(a.letterSpacing, b);
                    b = this.wX(a.lineHeight, b);
                    b = this.vR(a.St, b);
                    return b = this.tX(a.La, b)
                }
            }
              , lwd = class extends kwd {
                vX(a, b) {
                    return {
                        ...b,
                        letterSpacing: a == null ? void 0 : a / 1E3
                    }
                }
                wX(a, b) {
                    return {
                        ...b,
                        lineHeight: a
                    }
                }
                xX(a, b) {
                    return {
                        ...b,
                        textContent: a
                    }
                }
                tR(a, b) {
                    return {
                        ...b,
                        background: a != null ? Fvd(a) : void 0
                    }
                }
                uR(a, b) {
                    return {
                        ...b,
                        color: a != null ? Fvd(a) : void 0
                    }
                }
                vca({fontFamily: a, fontWeight: b, fontStyle: c, fontSize: d}, e) {
                    b = {
                        ...e,
                        fontWeight: b != null ? __c.Hr(b)?.toString() : void 0,
                        fontStyle: c,
                        fontSize: d
                    };
                    switch (a.ref?.type) {
                    case void 0:
                        return b;
                    case 1:
                        return {
                            ...b,
                            fontFamily: a.ref.fontFamily
                        };
                    case 2:
                        return {
                            ...b,
                            fontFamily: __c.tp(a.ref.fontFamily)
                        };
                    default:
                        throw new z(a.ref);
                    }
                }
                vR(a, b) {
                    a: {
                        switch (a.ref?.type) {
                        case void 0:
                            break;
                        case 1:
                            a = a.ref.src;
                            break a;
                        case 2:
                            a = `canva://${a.ref.media.id}/${a.ref.media.version}`;
                            break a;
                        case 3:
                            a = __c.y(a.ref.fill.image.ref);
                            __c.x(a.media.type === "RESOLVED");
                            a = `canva://${a.media.id}/${a.media.version}`;
                            break a;
                        default:
                            throw new z(a.ref);
                        }
                        a = void 0
                    }
                    return {
                        ...b,
                        St: a
                    }
                }
                tX(a, b) {
                    return {
                        ...b,
                        La: a
                    }
                }
            }
            ;
            var mwd = class {
                subscribe(a) {
                    this.sm.add(a);
                    return () => {
                        this.sm.delete(a)
                    }
                }
                dispose() {
                    this.vj.forEach(a => a());
                    this.vj = []
                }
                Gib(a) {
                    return this.config.Bk?.Gib(a)
                }
                constructor(a, b, c, d, e) {
                    this.config = a;
                    this.Fa = b;
                    this.Sr = c;
                    this.Ro = d;
                    this.J = e;
                    this.sm = new Set;
                    this.vj = [];
                    this.ADa = (f, g, h) => {
                        this.dispose();
                        this.vj.push(Hvd(this, f, g, h));
                        g.Lb > 10 && g.On && this.vj.push(Tvd( () => this.config.Bk != null, () => {
                            this.config.Bk.Ybc(f, h, void 0)
                        }
                        ));
                        return {
                            jfb: {
                                qwb: async k => {
                                    this.config.Bk?.XKc(f, k);
                                    return new __c.Ljd
                                }
                                ,
                                ywb: async k => {
                                    if (g.Qf == null)
                                        return new __c.S4;
                                    this.config.Bk?.UKc(f, g.Qf, k);
                                    return new __c.S4
                                }
                                ,
                                Mjb: async k => {
                                    if (g.Qf == null)
                                        return new __c.T4;
                                    this.config.Bk?.TKc(f, g.Qf, k.rect);
                                    return new __c.T4
                                }
                                ,
                                JCb: async k => {
                                    this.config.Bk?.hLc(f, k.DT, k.textContent);
                                    return new __c.Pjd
                                }
                                ,
                                MCb: async k => {
                                    if (g.Qf == null)
                                        return new __c.U4;
                                    this.config.Bk?.iLc(f, g.Qf, k);
                                    return new __c.U4
                                }
                                ,
                                m1a: async k => {
                                    this.config.Bk?.m1a(k.DT);
                                    return new __c.Sjd
                                }
                                ,
                                dLa: async () => {
                                    this.config.Bk?.dLa(f);
                                    return new __c.Ujd
                                }
                            }
                        }
                    }
                    ;
                    this.W0a = (f, g, h) => {
                        this.dispose();
                        this.vj.push(Kvd(this, f, h));
                        g.Lb > 10 && g.On && this.vj.push(Tvd( () => this.config.Bk != null, () => {
                            this.config.Bk.Ybc(f, void 0, h)
                        }
                        ));
                        return {
                            ETb: {
                                o2: async k => {
                                    g.Qf != null && this.config.Bk?.o2(f, g.Qf, k);
                                    return new __c.yjd
                                }
                                ,
                                TG: async k => {
                                    const l = b6()();
                                    try {
                                        const m = k.vE
                                          , n = {
                                            id: m.id,
                                            version: m.version
                                        };
                                        l.r(await l.s(this.Sr.NU(n)));
                                        const p = this.Sr.TG(n, 6);
                                        return p == null ? new __c.Ajd({
                                            images: []
                                        }) : new __c.Ajd({
                                            images: [new __c.atd({
                                                url: p.url,
                                                width: p.width,
                                                height: p.height
                                            })]
                                        })
                                    } finally {
                                        l.s()
                                    }
                                }
                            }
                        }
                    }
                    ;
                    this.CDa = () => ({
                        ovb: {
                            nvb: this.Mwa
                        }
                    });
                    this.Mwa = async f => {
                        const g = {
                            height: f.body.scrollHeight,
                            width: f.body.scrollWidth
                        };
                        this.sm.forEach(h => h(g));
                        return new __c.ckd
                    }
                    ;
                    this.gba = f => {
                        const g = this.Ro && new __c.qtd({
                            Rfa: this.Ro.id,
                            qe: this.Ro.qe
                        });
                        return {
                            IMa: {
                                FRa: () => new __c.Q4({
                                    fj: f.page?.container?.id,
                                    Qf: f.Qf,
                                    Xk: f.page?.id,
                                    FGb: g,
                                    xua: f.page?.container.extension
                                }),
                                tia: () => new __c.R4
                            }
                        }
                    }
                    ;
                    this.hba = f => ({
                        s2a: {
                            GRa: () => new __c.V4({
                                fj: f.page?.container?.id,
                                Qf: f.Qf
                            }),
                            DRa: () => new __c.W4
                        }
                    });
                    this.XB = () => {
                        this.dispose()
                    }
                    ;
                    this.Lfc = (f, g) => g.Lb === 10 ? !0 : g.page.type === "controlled" ? !1 : ((f = f.Jy.ref) && this.config.Bk?.EPc(f)) ?? !1;
                    this.Fj = Uvd(f => [...f.entries()].map(this.Ejc));
                    this.Ejc = Uvd( ([f,g]) => ({
                        key: f,
                        snapshot: (new lwd).map(g, {
                            textContent: void 0,
                            backgroundColor: void 0,
                            background: void 0,
                            color: void 0,
                            fontFamily: void 0,
                            fontWeight: void 0,
                            fontStyle: void 0,
                            fontSize: void 0,
                            letterSpacing: void 0,
                            lineHeight: void 0,
                            St: void 0,
                            La: void 0,
                            left: void 0,
                            top: void 0,
                            width: void 0,
                            height: void 0,
                            rotation: void 0,
                            visibility: void 0
                        })
                    }));
                    this.Ojc = Uvd(f => new Qvd({
                        selector: f.selector,
                        operation: Dvd(f.operation)
                    }))
                }
            }
            ;
            var nwd = __c.va("386e6dfc", !1);
            var owd = awd( ({state: a, wAa: b}) => a.type === "hidden" ? null : c6("div", {
                className: $vd("qrsnvg", a.type !== "visible" && "_2_xJQA"),
                onTransitionEnd: c => {
                    c.target === c.currentTarget && a.type !== "visible" && b?.()
                }
                ,
                children: c6("img", {
                    className: "cpVyPA",
                    src: a.src,
                    alt: ""
                })
            }));
            var pwd = class {
                static G(a) {
                    __c.N(a, {
                        Brb: g6.bound,
                        XB: g6.bound,
                        wAa: g6.bound,
                        hide: g6.bound
                    })
                }
                Brb(a, b) {
                    const c = a.wK;
                    if (c == null || c.type === "visible")
                        a.wK = {
                            type: "visible",
                            src: b
                        }
                }
                XB(a) {
                    clearTimeout(this.cSa);
                    a.wK = void 0
                }
                wAa(a) {
                    a.wK?.type === "hiding" && (a.wK = {
                        type: "hidden"
                    })
                }
                dla(a) {
                    clearTimeout(this.cSa);
                    this.cSa = setTimeout(ewd.wrap( () => this.hide(a)), 1E3)
                }
                EWa(a) {
                    this.hide(a)
                }
                hide(a) {
                    const b = a.wK;
                    b == null ? a.wK = {
                        type: "hidden"
                    } : b.type === "visible" && (a.wK = {
                        ...b,
                        type: "hiding"
                    })
                }
                constructor() {
                    this.cSa = (pwd.G(this),
                    void 0)
                }
            }
            ;
            var qwd = awd( ({local: a, Jy: b, Ma: c, configuration: d, Ua: e, Nj: f, wF: g, Jd: h, lic: k}) => {
                const l = cwd( () => {
                    const q = nwd && b.oT != null;
                    return {
                        data: () => e.gba(c),
                        Bk: q ? void 0 : r => e.ADa(b, c, r),
                        DTb: q ? r => e.W0a(b, c, r) : void 0,
                        O1: () => e.CDa(),
                        telemetry: () => e.hba(c)
                    }
                }
                , [c, b, e])
                  , [m] = dwd( () => new pwd);
                d6( () => {
                    k && m.Brb(a, k)
                }
                , [k, a, m]);
                const n = bwd( () => {
                    e.XB();
                    m.XB(a)
                }
                , [a, e, m])
                  , p = e.Gib(b);
                return Xvd(Wvd, {
                    children: [c6(g, {
                        Owa: l,
                        url: b.nLa.id,
                        XB: n,
                        Nj: f || a.sOa != null,
                        S8b: () => m.dla(a),
                        j8b: () => m.EWa(a),
                        UC: h.UC
                    }), d.q6a && c6(d.q6a, {}), c6(h.JR, {
                        EBc: a.sOa?.qwc != null
                    }), a.wK && c6(owd, {
                        state: a.wK,
                        wAa: () => m.wAa(a)
                    }), p && c6("div", {
                        style: {
                            position: "absolute",
                            top: p.Aea.top,
                            left: p.Aea.left,
                            width: p.Aea.width,
                            height: p.Aea.height
                        },
                        children: c6(h.JM, {
                            lu: p.selector,
                            text: p.text
                        })
                    })]
                })
            }
            );
            var rwd;
            rwd = __c.ry()( ({Ly: a, ig: b}) => {
                const c = a.lb;
                let {J: d} = a;
                const e = b.wF;
                a = b.Fa;
                const f = b.jRa
                  , g = b.Bxa
                  , h = b.RC
                  , k = b.Ro
                  , l = new iwd;
                l.Sr = h ? new __c.fud(h) : void 0;
                l.LS = a;
                k != null && (l.Sr = l.Sr && new gwd(k,l.Sr),
                l.LS = l.LS && new fwd(k,l.LS));
                const m = f6.box(void 0, {
                    deep: !1
                });
                g != null && g().then(ewd.wrap(n => {
                    Svd( () => {
                        m.set(Mvd(n))
                    }
                    )
                }
                ));
                d = d.Wd("codelet2Widget");
                return {
                    ...__c.WU,
                    vab: Lvd(),
                    metadata: {
                        type: "codelet2",
                        name: __c.L("Iub/AA"),
                        cM: n => {
                            n = n.Jy?.nLa.id;
                            return n?.split("/").at(-1) ?? n ?? ""
                        }
                    },
                    BD: () => new hwd,
                    C: __c.qy(awd( ({data: {C: n, local: p}, Ma: q, DQ: r, Jd: t}) => {
                        const [w] = dwd( () => new mwd(l,__c.y(l.LS),__c.y(l.Sr),k,d));
                        d6( () => {
                            r?.(w)
                        }
                        , [w, r]);
                        d6( () => {
                            const C = [];
                            C.push(Tvd( () => l.Bk != null, () => {
                                q.Lb > 10 && q.On && C.push(l.Bk.RNc(n))
                            }
                            ));
                            return () => {
                                C.forEach(E => E())
                            }
                        }
                        , [n, q]);
                        const v = w.Lfc(n, q);
                        Ovd(v);
                        a: if (c == null)
                            var A = !1;
                        else
                            switch (c.status) {
                            case 1:
                                A = !1;
                                break a;
                            case 2:
                                A = !0;
                                break a;
                            default:
                                throw new z(c.status);
                            }
                        const B = m.get();
                        return A && B != null ? c6(B, {}) : n.Jy.ref != null ? c6(qwd, {
                            Ma: q,
                            C: n,
                            local: p,
                            Jy: n.Jy.ref,
                            configuration: l,
                            Ua: w,
                            Nj: v,
                            wF: e,
                            Jd: t,
                            lic: q.page.type === "controlled" ? f?.(q) : void 0
                        }) : l.I5a != null ? c6(l.I5a, {}) : null
                    }
                    )),
                    exports: {
                        configuration: l
                    }
                }
            }
            );
            __c.uld = {
                Xd: __c.Fod,
                Sk: rwd,
                Yd: __c.yod
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/650c81d8e815c5d9.js.map
