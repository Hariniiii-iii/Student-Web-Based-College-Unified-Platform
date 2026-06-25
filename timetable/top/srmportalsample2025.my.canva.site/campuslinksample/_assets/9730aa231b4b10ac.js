(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[20814], {

    /***/
    953489: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(148454);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var W = __c.W;
            var H = __c.H;
            var Nud = function(a, b) {
                if (!a.ok)
                    throw Error(`Encountered an error while sending ${b} request: ${a.error}`);
                if (a.value == null)
                    throw Error(`${b}: Result cannot be empty`);
                return a.value
            }
              , Qud = async function(a, b) {
                const c = (0,
                __c.N4)()();
                try {
                    const d = c.r(await c.s(a.zLa.request("RENDER_ELEMENT", Oud.serialize(b))))
                      , e = Nud(d, "RENDER_ELEMENT");
                    return Pud.S(e)
                } finally {
                    c.s()
                }
            }
              , Tud = async function(a, b) {
                const c = (0,
                __c.N4)()();
                try {
                    const d = c.r(await c.s(a.zLa.request("SET_CAPABILITY", Rud.serialize(b))))
                      , e = Nud(d, "SET_CAPABILITY");
                    return Sud.S(e)
                } finally {
                    c.s()
                }
            }
              , Wud = async function(a, b) {
                const c = (0,
                __c.N4)()();
                try {
                    const d = c.r(await c.s(a.zLa.request("SET_EDIT_PANEL_VALUE", Uud.serialize(b))))
                      , e = Nud(d, "SET_EDIT_PANEL_VALUE");
                    return Vud.S(e)
                } finally {
                    c.s()
                }
            }
              , Z5 = async function(a, b) {
                const c = Y5()();
                try {
                    const [d] = c.r(await c.s(a.$J([b])));
                    return new __c.Q5({
                        id: b.id,
                        url: d.fonts[0].files[0].url
                    })
                } finally {
                    c.s()
                }
            }
              , Xud = async function(a, b, c) {
                const d = Y5()();
                try {
                    const e = d.r(await d.s(Z5(a, c)));
                    return Tud(b, e)
                } finally {
                    d.s()
                }
            }
              , $ud = async function(a, b, c, d, e, f, g) {
                const h = Y5()();
                try {
                    try {
                        Yud >= 0 && setTimeout(Zud.wrap( () => a.uDa()), Yud);
                        const k = b.Rva.ref?.first()
                          , l = a.Fa
                          , m = h.r(await h.s(Qud(c, {
                            config: b.config,
                            a_: l != null && k != null ? h.r(await h.s(Z5(l, k))) : void 0
                        })));
                        a.config.Bk?.LFa({
                            ...m,
                            tO: m.tO?.size
                        }, b, d, e, f, g)
                    } catch (k) {
                        h.r(),
                        a.J.my(k)
                    } finally {
                        a.uDa()
                    }
                } finally {
                    h.s()
                }
            }
              , Oud = H( () => ({
                config: __c.Y("config", 1),
                a_: __c.G("fontEditable", 2, __c.Q5)
            }), {
                xe: 0
            })
              , Pud = H( () => ({
                config: W("config", 1),
                kaa: __c.Oa("recolorables", 4, __c.R5),
                gNb: __c.Oa("borderables", 5, __c.aud),
                CTb: __c.Oa("editPanelValues", 6, __c.bud),
                tO: __c.G("fontSizeable", 7, __c.S5),
                a_: __c.G("fontEditable", 8, __c.Q5)
            }), {
                xe: 0
            })
              , Rud = __c.ab( () => ({
                type: [1, __c.R5, 2, __c.aud, 3, __c.Q5, 5, __c.S5]
            }), () => ({}), {
                xe: 0
            })
              , Sud = H( () => ({
                config: W("config", 1)
            }), {
                xe: 0
            })
              , Uud = H( () => ({
                id: W(1),
                value: W(2)
            }))
              , Vud = H( () => ({
                config: W(1)
            }))
              , $5 = __webpack_require__(1193)
              , avd = $5.h5
              , bvd = $5.mJ
              , cvd = $5.sH
              , dvd = $5.XI;
            var Zud = __webpack_require__(815703).F;
            var Y5 = __webpack_require__(929846)._;
            var evd = __webpack_require__(296713)
              , a6 = evd.jsx
              , fvd = evd.jsxs;
            var gvd = __webpack_require__(613814).PA;
            var hvd = __webpack_require__(978109)
              , ivd = hvd.useEffect
              , jvd = hvd.useMemo
              , kvd = hvd.useState;
            var lvd = class {
                static G(a) {
                    __c.N(a, {
                        Qf: cvd.ref
                    })
                }
                constructor(a) {
                    lvd.G(this);
                    this.Qf = a
                }
            }
            ;
            var mvd = class {
            }
            ;
            var Yud = __c.va("629bde84", 3E3)
              , nvd = class {
                static G(a) {
                    __c.N(a, {
                        R_: cvd.ref,
                        uDa: dvd
                    })
                }
                subscribe(a) {
                    this.sm.add(a);
                    return () => {
                        this.sm.delete(a)
                    }
                }
                async Kwa(a, b, c, d, e, f) {
                    const g = Y5()();
                    try {
                        const h = a.Rva.ref?.first()
                          , k = this.Fa
                          , l = a.config != null && a.config !== "" ? a.config : b.config;
                        this.config.Bk?.LFa({
                            config: l
                        }, a, c, d, e, f);
                        let m;
                        try {
                            m = k != null && h != null ? g.r(await g.s(Z5(k, h))) : void 0
                        } catch (n) {
                            g.r(),
                            this.J.Db(n)
                        }
                        return new __c.Xjd({
                            config: a.config != null && a.config !== "" ? a.config : void 0,
                            a_: m
                        })
                    } finally {
                        g.s()
                    }
                }
                constructor(a, b, c, d) {
                    this.config = a;
                    this.Fa = b;
                    this.J = c;
                    this.Ro = d;
                    this.sm = (nvd.G(this),
                    new Set);
                    this.R_ = !1;
                    this.notifyListeners = e => {
                        this.sm.forEach(f => f(e))
                    }
                    ;
                    this.BDa = (e, f) => {
                        this.gp?.();
                        this.gp = void 0;
                        const g = r => Tud(f, new __c.R5(r))
                          , h = this.Fa
                          , k = h ? r => Xud(h, f, r) : void 0
                          , l = r => Wud(f, new Uud(r))
                          , m = r => Tud(f, new __c.S5({
                            size: r
                        }))
                          , n = {
                            Kwa: async r => this.Kwa(e, r, g, k, m, l),
                            Nwa: r => {
                                this.config.Bk?.LFa({
                                    ...r,
                                    tO: r.tO?.size
                                }, e, g, k, m, l);
                                return new __c.Zjd
                            }
                            ,
                            Mwa: this.BZb
                        }
                          , p = bvd( () => e.config, async r => {
                            const t = Y5()();
                            try {
                                const w = t.r(await t.s(Qud(f, {
                                    config: r,
                                    a_: void 0
                                })));
                                w.config && w.config !== r && this.config.Bk?.LFa({
                                    ...w,
                                    tO: w.tO?.size
                                }, e, g, k, m, l)
                            } finally {
                                t.s()
                            }
                        }
                        )
                          , q = bvd( () => e.Rva.ref?.first(), async r => {
                            const t = Y5()();
                            try {
                                const w = e.config
                                  , v = this.Fa
                                  , A = t.r(await t.s(Qud(f, {
                                    config: w,
                                    a_: v != null && r != null ? t.r(await t.s(Z5(v, r))) : void 0
                                })));
                                A.config && A.config !== w && this.config.Bk?.LFa({
                                    ...A,
                                    tO: A.tO?.size
                                }, e, g, k, m, l)
                            } finally {
                                t.s()
                            }
                        }
                        );
                        this.gp = () => {
                            p();
                            q()
                        }
                        ;
                        $ud(this, e, f, g, k, m, l);
                        return {
                            nfb: n
                        }
                    }
                    ;
                    this.gba = e => {
                        const f = this.Ro && new __c.qtd({
                            Rfa: this.Ro.id,
                            qe: this.Ro.qe
                        });
                        return {
                            IMa: {
                                FRa: () => new __c.Q4({
                                    fj: e.page?.container?.id,
                                    Qf: e.Qf,
                                    FGb: f,
                                    xua: e.page?.container?.extension
                                }),
                                tia: () => new __c.R4
                            }
                        }
                    }
                    ;
                    this.hba = e => ({
                        s2a: {
                            GRa: () => new __c.V4({
                                fj: e.page?.container?.id,
                                Qf: e.Qf
                            }),
                            DRa: () => new __c.W4
                        }
                    });
                    this.uDa = () => {
                        this.R_ = !0
                    }
                    ;
                    this.XB = () => {
                        this.gp?.()
                    }
                    ;
                    this.BZb = e => {
                        this.notifyListeners({
                            height: e.body.scrollHeight,
                            width: e.body.scrollWidth
                        })
                    }
                }
            }
            ;
            var ovd = __c.N3, pvd = ovd.of, qvd = __c.b4(1, "EmbedRef"), rvd = __c.O3(35), svd = __c.X3(29), tvd;
            tvd = __c.L3(6, __c.N3.tH(__c.a4("FontRef")));
            var uvd = __c.g4({
                C: pvd.call(ovd, {
                    mLa: qvd,
                    H$a: rvd,
                    config: svd,
                    Rva: tvd
                })
            });
            __c.Zkd = {
                Xd: () => ({
                    wuc(a, b) {
                        return {
                            data: {
                                C: {
                                    mLa: {
                                        type: "embed",
                                        id: a,
                                        version: 0
                                    },
                                    H$a: b,
                                    config: void 0,
                                    Rva: void 0
                                },
                                document: {}
                            },
                            M: {
                                width: 1366,
                                height: 768
                            }
                        }
                    }
                }),
                Sk: __c.ry()( ({ig: a, Ly: b}) => {
                    const c = a.wF
                      , d = a.Fa
                      , e = a.Ro
                      , f = b.J
                      , g = new mvd;
                    return {
                        ...__c.WU,
                        metadata: {
                            type: "codelet",
                            name: __c.L("4kcGvw"),
                            cM: h => h.H$a
                        },
                        BD: () => new lvd(void 0),
                        C: __c.qy(gvd( ({data: {C: h, local: k}, Jd: {SGa: l, fHa: m, UC: n}, Ma: p, DQ: q}) => {
                            avd( () => {
                                k.Qf = p.Qf
                            }
                            );
                            const [r] = kvd( () => new nvd(g,d,f,e));
                            ivd( () => {
                                q?.(r)
                            }
                            , [r, q]);
                            const t = jvd( () => ({
                                data: () => r.gba(p),
                                element: w => r.BDa(h, w),
                                telemetry: () => r.hba(p)
                            }), [p, h, r]);
                            return fvd("div", {
                                className: "guWTXA",
                                children: [a6(l, {
                                    url: h.mLa.id,
                                    children: ({Nj: w}) => a6(c, {
                                        url: h.mLa.id,
                                        Nj: w,
                                        Owa: t,
                                        XB: r.XB,
                                        PKc: r.uDa,
                                        UC: n
                                    })
                                }), p.Lb > 10 && h.config != null && !r.R_ && a6("div", {
                                    className: "djA3nQ",
                                    children: a6(m, {})
                                })]
                            })
                        }
                        )),
                        exports: {
                            config: g
                        }
                    }
                }
                ),
                Yd: uvd
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/9730aa231b4b10ac.js.map
