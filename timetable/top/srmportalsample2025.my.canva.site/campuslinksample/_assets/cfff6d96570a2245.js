(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[43432], {

    /***/
    387105: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(148454);
        __web_req__(580894);
        __web_req__(188400);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var N = __c.N;
            var y = __c.y;
            var w7 = async function(a, b) {
                return a.qGa(b, async () => {
                    const c = (0,
                    __c.ob)()();
                    try {
                        if (a.Zeb == null)
                            throw Error("Scene document resources are not supported");
                        const d = c.r(await c.s(a.Zeb.qp({
                            id: b,
                            version: 1
                        }, void 0)))
                          , e = {
                            id: d.id,
                            files: {
                                eia: d.content.url,
                                wq: d.hd?.url
                            },
                            uL: d.uL
                        };
                        (0,
                        __c.Lc)( () => {
                            a.scenes.set(e.id, e)
                        }
                        );
                        return e
                    } finally {
                        c.s()
                    }
                }
                )
            }
              , LCd = async function(a) {
                if (!a.fgb || a.anc !== a.gh.EGb) {
                    const b = y(a.gh.EGb);
                    a.fgb = (async () => {
                        const c = x7()();
                        try {
                            const [d,e] = c.r(await c.s(Promise.all([c.r(await c.s(ICd(JCd))), c.r(await c.s(ICd(KCd)))])));
                            return {
                                Mdc: d,
                                gain: e
                            }
                        } finally {
                            c.s()
                        }
                    }
                    )();
                    a.anc = b
                }
                return a.fgb
            }
              , NCd = async function(a) {
                const b = x7()();
                try {
                    const c = y(a.gh.bnc)
                      , {Mdc: d, gain: e} = b.r(await b.s(LCd(a)))
                      , f = new MCd(c);
                    return {
                        ET: b.r(await b.s(f.loadEnvTextures(d, e))),
                        Xz: f
                    }
                } finally {
                    b.s()
                }
            }
              , ICd = async function(a) {
                const b = x7()();
                try {
                    const c = b.r(await b.s(fetch(a)));
                    if (!c.ok)
                        throw Error(`status: ${c.status} for url: ${a}`);
                    return new Uint8Array(b.r(await b.s(c.arrayBuffer())))
                } finally {
                    b.s()
                }
            }
              , OCd = function(a, b, c) {
                let d = b - 1
                  , e = 0
                  , f = c - 1
                  , g = 0;
                for (let h = 0; h < c; h++)
                    for (let k = 0; k < b; k++)
                        a[3 + (h * b + k) * 4] !== 0 && (d = Math.min(d, k),
                        e = Math.max(e, k),
                        f = Math.min(f, h),
                        g = Math.max(g, h));
                a = g - f + 1;
                return {
                    left: d,
                    top: c - (f + a),
                    width: e - d + 1,
                    height: a
                }
            }
              , PCd = async function(a, b) {
                const c = x7()();
                try {
                    c.r(await c.s(a.gh.DGb));
                    const d = c.r(await c.s(a.WG.dha(b)))
                      , {Xz: e, ET: f} = c.r(await c.s(NCd(a.WG)));
                    a.store.gia = e;
                    a.store.ET = f;
                    a.store.q8 = c.r(await c.s(a.WG.createScene(e, d)));
                    return !0
                } finally {
                    c.s()
                }
            }
              , QCd = function(a, b, c, d) {
                a.store.gia = b;
                a.store.ET = c;
                a.store.q8 = d;
                y7( () => {
                    a.store.isInitialized = !0;
                    a.store.ke = !1
                }
                )
            }
              , SCd = function(a) {
                if (a.store.Uf) {
                    const b = requestAnimationFrame(RCd.wrap( () => SCd(a)));
                    a.store.GA = b;
                    a.render({
                        qI: a.store.qI
                    })
                }
            }
              , VCd = function({WG: a, gh: b}) {
                const c = new TCd;
                return new UCd(c,a,b)
            }
              , z7 = function(a, b, c) {
                a.canvas.width = b;
                a.canvas.height = c
            }
              , WCd = function(a) {
                return {
                    width: a.canvas.width,
                    height: a.canvas.height
                }
            }
              , ZCd = async function(a) {
                const b = x7()();
                try {
                    a._canvas || (a._canvas = XCd(a));
                    try {
                        const [{default: c, WebGlRenderer: d},{default: e}] = b.r(await b.s(Promise.all([__webpack_require__.me(655513), __webpack_require__.me(722504)])));
                        b.r(await b.s(c({
                            path: e
                        })));
                        a.R5a = d
                    } catch (c) {
                        throw b.r(),
                        a.Iqa = void 0,
                        Error("Failed to initialize renderer", {
                            cause: c
                        });
                    }
                    try {
                        a.b5 = YCd(a)
                    } catch (c) {
                        a.J.info(`Unable to initialize WebGL context error: ${c}`),
                        y7( () => {
                            a.fIa = !0
                        }
                        )
                    }
                } finally {
                    b.s()
                }
            }
              , $Cd = function(a, b) {
                a.wub.push(b)
            }
              , XCd = function(a) {
                const b = document.createElement("canvas");
                b.width = 1E3;
                b.height = 1E3;
                b.style.width = "100%";
                b.style.visibility = "visible";
                a.kG || b.addEventListener("webglcontextlost", () => aDd(a));
                return b
            }
              , bDd = function(a, b) {
                a.store.container = b;
                b.contains(a.canvas) || b.appendChild(a.canvas)
            }
              , YCd = function(a) {
                if (a.C8a > 5)
                    throw Error("Unable to recreate context");
                const b = cDd(a);
                a.j7a = b;
                a.b5 = new (y(a.R5a))(b);
                return a.b5
            }
              , cDd = function(a) {
                if (a.kG)
                    return a.ZHa = a.kG.iOc({
                        contextType: "webgl",
                        juc: 20,
                        canvas: a.canvas,
                        onContextLost: () => aDd(a)
                    }),
                    a.ZHa.context;
                const b = a.canvas;
                let c;
                const d = f => {
                    c = f.statusMessage ?? "Unknown"
                }
                ;
                b.addEventListener("webglcontextcreationerror", d);
                const e = b.getContext("webgl");
                b.removeEventListener("webglcontextcreationerror", d);
                if (e != null)
                    return e;
                throw Error(c);
            }
              , aDd = function(a) {
                a.J.info("WebGL context lost for scene widget");
                a.b5 = void 0;
                a.j7a = void 0;
                a.Iqa = void 0;
                a.ZHa = void 0;
                a.C8a++;
                a.oVa = () => {
                    const b = a.canvas;
                    a._canvas = XCd(a);
                    a.R5a && YCd(a);
                    const c = a.store.container;
                    c && (c.contains(b) && c.removeChild(b),
                    bDd(a, c));
                    a.wub.forEach(d => d(b));
                    a.oVa = void 0
                }
            }
              , fDd = function({J: a, kG: b}) {
                return new dDd(new eDd,a,b)
            }
              , gDd = function({local: a}, b) {
                const c = a.jBb;
                a = a.VAa;
                if (c && a) {
                    var {x: d, y: e} = {
                        x: b.left + b.width / a.width * (c.left - a.left),
                        y: b.top + b.height / a.height * (c.top - a.top)
                    };
                    a = b.width / a.width;
                    var {width: f, height: g} = {
                        width: c.width * a,
                        height: c.height * a
                    };
                    return __c.nq({
                        top: e,
                        left: d,
                        width: f,
                        height: g
                    }).translate(-b.left, -b.top).scale(b.K / b.width)
                }
            }
              , jDd = function({Xz: a}) {
                const b = new hDd;
                return new iDd(b,a)
            }
              , A7 = async function(a) {
                const b = x7()();
                try {
                    return b.r(await b.s(a.gh.DGb)),
                    !a.gh.emb
                } finally {
                    b.s()
                }
            }
              , lDd = async function(a, b) {
                const c = x7()();
                try {
                    const d = c.r(await c.s(w7(a.Am, b.C.scene.id)))
                      , e = d?.files.eia;
                    y7( () => {
                        b.local.uL = d.uL
                    }
                    );
                    if (!e)
                        throw Error("Resolved scene missing glbUrl");
                    a.store.fia.set(b, e);
                    if (!c.r(await c.s(A7(a))))
                        throw Error("Unable to initialize webgl renderer");
                    const f = a.WG.dha(e);
                    a.store.resources.set(e, f);
                    c.r(await c.s(f));
                    const g = {
                        rotation: {
                            Yk: b.C.config.ref.rotationPhi,
                            hl: b.C.config.ref.rotationTheta
                        }
                    }
                      , h = kDd(b.C.config.ref.mc);
                    b.local.ah.VL(g);
                    b.local.ah.setRecolorings(h)
                } finally {
                    c.s()
                }
            }
              , mDd = function(a, b) {
                a.store.VM.delete(b);
                a.store.fia.delete(b);
                a.store.L8.delete(b)
            }
              , nDd = async function(a, b) {
                const c = x7()();
                try {
                    const d = a.store.L8.get(b);
                    if (d)
                        return d;
                    try {
                        const e = lDd(a, b);
                        a.store.L8.set(b, e);
                        return c.r(await c.s(e))
                    } catch (e) {
                        throw c.r(),
                        mDd(a, b),
                        Error("Unable to initialize scene");
                    }
                } finally {
                    c.s()
                }
            }
              , oDd = async function(a, b) {
                const c = x7()();
                try {
                    c.r(await c.s(nDd(a, b)));
                    var d = c.r
                      , e = c.s;
                    const k = a.store.fia.get(b);
                    var f = k ? a.store.resources.get(k) : void 0;
                    const l = d.call(c, await e.call(c, y(f, "Resource is missing")));
                    if (a.store.VM.has(b)) {
                        var {Xz: g, ET: h} = c.r(await c.s(NCd(a.WG)));
                        try {
                            const m = c.r(await c.s(a.WG.createScene(g, l)));
                            a.store.VM.has(b) ? b.local.ah.aY(g, h, m) : (m.free(),
                            g.free())
                        } catch (m) {
                            throw c.r(),
                            g.free(),
                            m;
                        }
                    }
                } finally {
                    c.s()
                }
            }
              , pDd = function(a) {
                a.store.L8.forEach( (b, c) => {
                    a.fT(c)
                }
                )
            }
              , qDd = function(a) {
                const b = new Set;
                a.store.L8.forEach( (c, d) => {
                    d.local.ah.YO && b.add(d)
                }
                );
                a.store.VM.forEach( (c, d) => {
                    b.add(d)
                }
                );
                b.forEach(c => {
                    a.fT(c);
                    a.aY(c)
                }
                )
            }
              , kDd = function(a) {
                return Array.from(a ?? [], ([b,c]) => ({
                    type: "solid",
                    id: b,
                    override: c.color
                }))
            }
              , tDd = function({Am: a, WG: b, gh: c}) {
                return new rDd(new sDd,a,b,c)
            }
              , uDd = function(a, b) {
                if (a.k_)
                    return a.Va.startSpan(b, a.k_)
            }
              , vDd = function(a) {
                a.k_ && (a.k_.end(),
                a.k_ = null)
            }
              , wDd = function(a) {
                const b = a.ih;
                a = __c.pO.create({
                    ...__c.QE,
                    image: {
                        ...__c.aG,
                        media: {
                            ...__c.V4b,
                            id: a.AH,
                            version: 1
                        },
                        eb: void 0
                    }
                });
                return B7(b, {
                    fill: a
                })
            }
              , zDd = function({xF: a, Zca: b, hHa: c, Qy: d, CSa: e, ih: f, pu: g}) {
                switch (d) {
                case 1:
                    return B7(c, {});
                case 3:
                    return B7(xDd, {
                        dH: e || ""
                    });
                case 0:
                    return B7(b, {});
                case 2:
                    return B7(wDd, {
                        ih: f,
                        AH: g || ""
                    });
                case 4:
                    return B7(a, {});
                case 5:
                    return B7(yDd, {});
                default:
                    throw new __c.z(d);
                }
            }
              , EDd = function({Mf: a, ih: b, Am: c, gh: d, Ol: e, Qaa: f, exports: g, lb: h, M: k, Ts: l, Zca: m, xF: n}) {
                const p = new ADd
                  , q = new BDd(p,a,c,d,e,f,h,l,g.K7a)
                  , r = CDd({
                    local: a.local,
                    gh: d,
                    M: k
                });
                return C7( () => {
                    D7( () => {
                        q.initialize();
                        return () => {
                            q.destroy()
                        }
                    }
                    , []);
                    return B7(DDd, {
                        ke: q.ke,
                        children: B7(zDd, {
                            Qy: q.Qy,
                            CSa: q.dH,
                            selected: q.Hk,
                            pu: q.pu,
                            ih: b,
                            hHa: r,
                            Zca: m,
                            xF: n
                        })
                    })
                }
                )
            }
              , IDd = function({Mf: a, M: b, Jz: c, Ol: d, zL: e, Ts: f}) {
                const g = new FDd;
                a = new GDd(g,a,b,c,d,e,f);
                const h = new __c.sAc({
                    onDragStart: a.$ib,
                    fL: a.Zib,
                    onDragEnd: a.Yib
                });
                return ({children: k}) => B7(HDd, {
                    onMouseDown: h.onMouseDown,
                    onTouchStart: h.onTouchStart,
                    children: k
                })
            }
              , JDd = function({ih: a, xF: b, hHa: c, Zca: d, Qy: e, CSa: f, pu: g}) {
                switch (e) {
                case 0:
                    return B7(d, {});
                case 1:
                    return B7(c, {});
                case 3:
                    return B7(xDd, {
                        dH: f || ""
                    });
                case 2:
                    return B7(wDd, {
                        ih: a,
                        AH: g || ""
                    });
                case 4:
                    return B7(b, {});
                case 5:
                    return B7(yDd, {});
                default:
                    throw new __c.z(e);
                }
            }
              , NDd = function({Mf: a, Am: b, gh: c, M: d, zL: e, Ol: f, Ts: g, ih: h, xF: k}) {
                const l = new KDd
                  , m = new LDd(l,a,b,f,g)
                  , n = IDd({
                    Mf: a,
                    M: d,
                    Jz: l,
                    Ol: f,
                    zL: e,
                    Ts: g
                })
                  , p = MDd({
                    Jz: l,
                    M: d
                })
                  , q = CDd({
                    local: a.local,
                    gh: c,
                    M: d,
                    Vj: () => l.Bp
                });
                return C7( () => {
                    D7( () => {
                        m.initialize();
                        return () => {
                            m.destroy()
                        }
                    }
                    , []);
                    return B7(n, {
                        children: B7(DDd, {
                            ke: m.ke,
                            t1a: !0,
                            children: B7(JDd, {
                                Qy: m.Qy,
                                CSa: m.dH,
                                pu: m.pu,
                                ih: h,
                                hHa: q,
                                Zca: p,
                                xF: k
                            })
                        })
                    })
                }
                )
            }
              , ODd = function(a) {
                try {
                    const b = document.createElement("canvas");
                    a.ah.cta(2E3, b);
                    return b
                } catch (b) {
                    throw Error("Unable to generate snapshot");
                }
            }
              , PDd = function({Qy: a, wq: b, ih: c, zIb: d, xF: e, pu: f}) {
                switch (a) {
                case 1:
                    return B7(xDd, {
                        dH: b || ""
                    });
                case 0:
                    return B7(wDd, {
                        ih: c,
                        AH: f || ""
                    });
                case 2:
                    return B7(d, {});
                case 4:
                    return B7(yDd, {});
                case 3:
                    return B7(e, {});
                default:
                    throw new __c.z(a);
                }
            }
              , TDd = function({Mf: a, Am: b, ih: c, Ol: d, Ts: e, xF: f}) {
                const g = new QDd
                  , h = new RDd(g,a,b,d,e)
                  , k = SDd({
                    local: a.local
                });
                return C7( () => {
                    D7( () => {
                        h.initialize()
                    }
                    , []);
                    return B7(PDd, {
                        ih: c,
                        Qy: h.Qy,
                        wq: h.wq,
                        pu: h.pu,
                        xF: f,
                        zIb: k
                    })
                }
                )
            }
              , XDd = function({Mf: a, Lb: b, M: c, ih: d, Am: e, gh: f, Ol: g, Qaa: h, Ts: k, exports: l, lb: m, On: n, Wva: p=!1, qa: q, Va: r, Lg: t}) {
                q = UDd({
                    qa: q,
                    Va: r,
                    Lg: t
                });
                const w = new VDd(b,n,p);
                b = WDd({
                    local: a.local,
                    M: c
                });
                n = () => B7("div", {
                    children: "Error"
                });
                const v = EDd({
                    Mf: a,
                    ih: d,
                    Am: e,
                    gh: f,
                    Ol: g,
                    Qaa: h,
                    exports: l,
                    lb: m,
                    M: c,
                    Ts: k,
                    Zca: b,
                    xF: n
                })
                  , A = TDd({
                    Mf: a,
                    ih: d,
                    Am: e,
                    Ol: g,
                    Ts: k,
                    xF: n
                })
                  , B = NDd({
                    Mf: a,
                    Am: e,
                    gh: f,
                    Ol: g,
                    M: c,
                    zL: q,
                    Ts: k,
                    ih: d,
                    xF: n
                });
                return C7( () => {
                    switch (w.wMa) {
                    case 0:
                        return B7(v, {});
                    case 1:
                        return B7(B, {});
                    case 2:
                        return B7(A, {});
                    default:
                        throw new __c.z(w.wMa);
                    }
                }
                )
            }
              , aEd = function(a) {
                return YDd( ({data: b, Jd: {ih: c}, Ma: {Lb: d, M: e, On: f, page: g}}) => {
                    const h = ZDd(__c.LZ) !== window
                      , k = $Dd( () => XDd({
                        Mf: b,
                        Lb: d,
                        On: f,
                        M: e,
                        ih: c,
                        Wva: h,
                        Lg: g.container.id,
                        ...a
                    }), [b, d, c, e, f, h, g.container.id]);
                    return B7("div", {
                        className: "N73IPQ",
                        children: B7(k, {})
                    })
                }
                )
            }
              , cEd = function(a, b, c) {
                a = a.startSpan("load_resource", c);
                return bEd(a, b)
            }
              , bEd = function(a, b) {
                return (typeof b === "function" ? b() : b).catch(RCd.wrap(c => {
                    a.setStatus("error");
                    throw c;
                }
                )).finally(RCd.wrap( () => {
                    a.end()
                }
                ))
            };
            __c.yu.prototype.qGa = __c.ca(37, function(a, b) {
                const c = this.Nf.get(__c.vu(a));
                if (c != null && c.rvb != null) {
                    const e = this.G5.get(__c.vu(c.ref));
                    if (e != null)
                        return Promise.resolve({
                            ...c,
                            element: e
                        })
                }
                const d = __c.vu(a);
                if (a = this.pending.get(d))
                    return a;
                c != null && c.rvb != null && (b = async () => {
                    const e = (0,
                    __c.ob)()();
                    try {
                        const f = e.r(await e.s(__c.xu(this, c)));
                        return {
                            ...c,
                            element: f
                        }
                    } finally {
                        e.s()
                    }
                }
                );
                b = b().finally(__c.D.wrap( () => this.pending.delete(d)));
                this.pending.set(d, b);
                return b
            });
            __c.Au.prototype.qGa = __c.ca(36, function(a, b) {
                var c = __c.GBa(this, a);
                if (c)
                    return Promise.resolve(c);
                if (c = this.pending.get(a))
                    return c;
                b = b().finally(__c.D.wrap( () => this.pending.delete(a)));
                this.pending.set(a, b);
                return b
            });
            var x7 = __webpack_require__(929846)._;
            var dEd = __webpack_require__(655513)
              , eEd = dEd.Model
              , MCd = dEd.SceneRenderer;
            var RCd = __webpack_require__(815703).F;
            var E7 = __webpack_require__(1193)
              , F7 = E7.EW
              , y7 = E7.h5
              , G7 = E7.mJ
              , H7 = E7.sH
              , I7 = E7.XI;
            var fEd = __webpack_require__(296713)
              , B7 = fEd.jsx
              , gEd = fEd.jsxs;
            var hEd = __webpack_require__
              , iEd = hEd(208463)
              , jEd = hEd.n_x(iEd)();
            var J7 = __webpack_require__(978109)
              , YDd = J7.memo
              , ZDd = J7.useContext
              , D7 = J7.useEffect
              , $Dd = J7.useMemo
              , K7 = J7.useRef
              , kEd = J7.useState;
            var C7 = __webpack_require__(613814).PA;
            var KCd = __webpack_require__.p + "images/2c85eef4a2aebfa503e4c75ec38b39d7.png";
            var JCd = __webpack_require__.p + "images/5231af3dca25f08da672bcfd989db529.png";
            var lEd = class {
                async createScene(a, b) {
                    return a.loadScene(b)
                }
                async dha(a) {
                    const b = x7()();
                    try {
                        const c = ICd(a)
                          , d = LCd(this)
                          , [e] = b.r(await b.s(Promise.all([c, d])));
                        return eEd.fromBytes(e)
                    } finally {
                        b.s()
                    }
                }
                constructor(a) {
                    this.gh = a
                }
            }
            ;
            var L7 = Math.PI / 4
              , M7 = Math.PI / 2
              , mEd = Math.PI
              , nEd = 2 * Math.PI - L7
              , oEd = {
                default: {
                    rotation: {
                        Yk: 6.02138592,
                        hl: .08726646
                    }
                },
                front: {
                    rotation: {
                        Yk: 0,
                        hl: 0
                    }
                },
                left: {
                    rotation: {
                        Yk: M7,
                        hl: 0
                    }
                },
                right: {
                    rotation: {
                        Yk: M7 + mEd,
                        hl: 0
                    }
                },
                back: {
                    rotation: {
                        Yk: mEd,
                        hl: 0
                    }
                },
                top: {
                    rotation: {
                        Yk: 0,
                        hl: M7
                    }
                },
                bottom: {
                    rotation: {
                        Yk: 0,
                        hl: -M7
                    }
                },
                "top-left": {
                    rotation: {
                        Yk: L7,
                        hl: L7
                    }
                },
                "top-front": {
                    rotation: {
                        Yk: 0,
                        hl: L7
                    }
                },
                "top-right": {
                    rotation: {
                        Yk: nEd,
                        hl: L7
                    }
                },
                "bottom-left": {
                    rotation: {
                        Yk: L7,
                        hl: -L7
                    }
                },
                "bottom-front": {
                    rotation: {
                        Yk: 0,
                        hl: -L7
                    }
                },
                "bottom-right": {
                    rotation: {
                        Yk: nEd,
                        hl: -L7
                    }
                }
            };
            Object.entries(oEd).map( ([a,b]) => ({
                name: a,
                ...b
            })).map(a => [`${a.rotation.Yk},${a.rotation.hl}`, a.name]);
            var UCd = class {
                static G(a) {
                    N(a, {
                        initialize: I7,
                        $ec: I7,
                        sva: I7,
                        cfc: I7,
                        vba: I7,
                        VL: I7,
                        dispose: I7,
                        m_: I7,
                        FBb: I7
                    })
                }
                async initialize({eia: a, C1: b=oEd["default"], gCa: c=[]}) {
                    const d = x7()();
                    try {
                        this.store.isInitialized || this.store.ke || (this.store.ke = !0,
                        d.r(await d.s(PCd(this, a))) && (this.VL(b),
                        this.render({
                            qI: !1
                        }),
                        c.length > 0 && this.setRecolorings(c),
                        y7( () => {
                            this.store.isInitialized = !0;
                            this.store.ke = !1
                        }
                        )))
                    } finally {
                        d.s()
                    }
                }
                $ec(a) {
                    z7(this.gh, a, a)
                }
                sva({qI: a}={
                    qI: !0
                }) {
                    this.store.VZ = this.m_();
                    this.store.qI = a;
                    this.FBb()
                }
                get VZ() {
                    return this.store.VZ
                }
                cfc(a) {
                    this.store.qI = a
                }
                vba() {
                    this.store.Uf = !1;
                    this.store.GA != null && (cancelAnimationFrame(this.store.GA),
                    this.store.GA = void 0)
                }
                VL(a) {
                    this.store.iZ = a
                }
                Dib() {
                    return this.store.iZ
                }
                async dispose() {
                    this.vba();
                    this.store.ET?.free();
                    this.store.q8?.free();
                    this.store.gia?.free();
                    y7( () => {
                        this.store.ke = !1;
                        this.store.isInitialized = !1;
                        this.store.gia = void 0;
                        this.store.q8 = void 0;
                        this.store.ET = void 0
                    }
                    )
                }
                m_() {
                    if (this.store.Gra && this.store.iZ === this.store.Gra?.C1)
                        return this.store.Gra.xa;
                    var a = WCd(this.gh);
                    z7(this.gh, 2E3, 2E3);
                    this.render({
                        qI: !1
                    });
                    const b = this.gh.getImageData();
                    z7(this.gh, a.width, a.height);
                    a = this.UXb(b.data, b.width, b.height);
                    this.store.Gra = {
                        C1: this.store.iZ,
                        xa: a
                    };
                    return a
                }
                get isInitialized() {
                    return this.store.isInitialized
                }
                get ke() {
                    return this.store.ke
                }
                get Uf() {
                    return this.store.Uf
                }
                setRecolorings(a) {
                    this.store.q8?.setRecolorings(a)
                }
                cta(a, b) {
                    const c = b.getContext("2d");
                    if (!c)
                        throw Error("Unable to create 2d context");
                    const d = a / 2E3
                      , e = this.m_();
                    b.width = d * e.width;
                    b.height = d * e.height;
                    b = WCd(this.gh);
                    z7(this.gh, a, a);
                    this.render({
                        qI: !1
                    });
                    c.drawImage(this.gh.canvas, e.left * d, e.top * d, e.width * d, e.height * d, 0, 0, e.width * d, e.height * d);
                    z7(this.gh, b.width, b.height)
                }
                FBb() {
                    this.vba();
                    this.store.Uf = !0;
                    SCd(this)
                }
                render({qI: a}) {
                    this.store.gia && this.store.q8 && this.store.ET && this.store.gia.render(this.store.q8, this.store.ET, {
                        width: this.gh.canvas.width,
                        height: this.gh.canvas.height,
                        rotationPhi: this.store.iZ.rotation.Yk,
                        rotationTheta: this.store.iZ.rotation.hl,
                        enableGrid: a
                    })
                }
                constructor(a, b, c, d=OCd) {
                    this.store = a;
                    this.WG = b;
                    this.gh = c;
                    this.UXb = d;
                    UCd.G(this)
                }
            }
            ;
            var TCd = class {
                static G(a) {
                    N(a, {
                        Uf: H7.ref,
                        iZ: H7.ref,
                        GA: H7.ref,
                        Gra: H7.ref,
                        isInitialized: H7.ref,
                        ke: H7.ref,
                        VZ: H7.ref
                    })
                }
                constructor() {
                    this.Uf = (TCd.G(this),
                    !1);
                    this.qI = !1;
                    this.iZ = {
                        rotation: {
                            Yk: 0,
                            hl: 0
                        }
                    };
                    this.ke = this.isInitialized = !1;
                    this.VZ = {
                        left: 0,
                        top: 0,
                        width: 1,
                        height: 1
                    }
                }
            }
            ;
            var dDd = class {
                static G(a) {
                    N(a, {
                        fIa: H7.ref
                    })
                }
                get emb() {
                    return this.fIa
                }
                get DGb() {
                    this.ZHa?.jM();
                    this.oVa && this.oVa();
                    this.Iqa || (this.Iqa = ZCd(this));
                    return this.Iqa
                }
                get bnc() {
                    return this.j7a
                }
                get canvas() {
                    this._canvas || (this._canvas = XCd(this));
                    return this._canvas
                }
                get EGb() {
                    return this.b5
                }
                getImageData() {
                    __c.x(this.b5 != null, "WebGlRenderer is not initialized");
                    return this.b5.readPixels()
                }
                constructor(a, b, c) {
                    this.store = a;
                    this.J = b;
                    this._canvas = (dDd.G(this),
                    void 0);
                    this.wub = [];
                    this.fIa = !1;
                    this.C8a = 0;
                    this.kG = c
                }
            }
            ;
            var eDd = class {
            }
            ;
            var pEd = class {
                static G(a) {
                    N(a, {
                        selected: H7.ref,
                        Gxa: H7.ref,
                        e2b: H7.ref,
                        uL: H7.shallow,
                        GFb: H7.ref,
                        VAa: H7.ref,
                        jBb: H7.ref,
                        Pya: H7.ref,
                        a2b: H7.ref,
                        b2b: H7.ref
                    })
                }
                constructor(a) {
                    this.ah = a;
                    this.selected = (pEd.G(this),
                    !1);
                    this.Gxa = 0;
                    this.GFb = this.e2b = !1;
                    this.Pya = this.jBb = this.VAa = void 0;
                    this.b2b = this.a2b = !1
                }
            }
            ;
            var iDd = class {
                static G(a) {
                    N(a, {
                        aY: I7,
                        fT: I7,
                        VL: I7,
                        setRecolorings: I7,
                        YO: F7
                    })
                }
                aY(a, b, c) {
                    QCd(this.Xz, a, b, c);
                    this.Xz.VL(this.store.C1);
                    this.Xz.setRecolorings(this.store.gCa);
                    this.store.d5 = !0
                }
                fT() {
                    this.Xz.dispose();
                    this.store.d5 = !1
                }
                VL(a) {
                    this.store.C1 = a;
                    this.store.d5 && this.Xz.VL(a)
                }
                Dib() {
                    return this.store.C1
                }
                setRecolorings(a) {
                    this.store.gCa = a;
                    this.store.d5 && this.Xz.setRecolorings(a)
                }
                get Uf() {
                    return this.YO && this.Xz.Uf
                }
                vba() {
                    this.Xz.vba()
                }
                sva(a) {
                    this.Lqa.sva(a)
                }
                get VZ() {
                    return this.Lqa.VZ
                }
                m_() {
                    return this.Lqa.m_()
                }
                cta(a, b) {
                    this.Lqa.cta(a, b)
                }
                get YO() {
                    return this.store.d5
                }
                get Lqa() {
                    __c.x(this.YO, "Scene renderer is not active in GPU");
                    return this.Xz
                }
                constructor(a, b) {
                    this.store = a;
                    this.Xz = b;
                    iDd.G(this)
                }
            }
            ;
            var hDd = class {
                static G(a) {
                    N(a, {
                        C1: H7.ref,
                        gCa: H7.ref,
                        d5: H7.ref
                    })
                }
                constructor() {
                    this.C1 = (hDd.G(this),
                    {
                        rotation: {
                            Yk: 0,
                            hl: 0
                        }
                    });
                    this.gCa = [];
                    this.d5 = !1
                }
            }
            ;
            var rDd = class {
                static G(a) {
                    N(a, {
                        fT: I7,
                        kga: I7,
                        HSb: I7
                    })
                }
                async aY(a) {
                    const b = x7()();
                    try {
                        if (this.store.VM.has(a))
                            return this.store.VM.get(a);
                        try {
                            const c = oDd(this, a);
                            this.store.VM.set(a, c);
                            return b.r(await b.s(c))
                        } catch (c) {
                            throw b.r(),
                            this.store.VM.delete(a),
                            Error("Unable to activate rendering");
                        }
                    } finally {
                        b.s()
                    }
                }
                fT(a) {
                    a.local.ah.fT();
                    this.store.VM.delete(a)
                }
                kga(a) {
                    this.fT(a);
                    const b = this.store.fia.get(a);
                    mDd(this, a);
                    if (b) {
                        var c = !1;
                        this.store.fia.forEach(d => {
                            d === b && (c = !0)
                        }
                        );
                        c || this.store.resources.delete(b)
                    }
                }
                HSb() {
                    this.store.L8.forEach( (a, b) => {
                        this.kga(b)
                    }
                    )
                }
                constructor(a, b, c, d) {
                    this.store = a;
                    this.Am = b;
                    this.WG = c;
                    this.gh = d;
                    rDd.G(this);
                    $Cd(d, () => qDd(this))
                }
            }
            ;
            var sDd = class {
                constructor() {
                    this.L8 = new Map;
                    this.VM = new Map;
                    this.fia = new Map;
                    this.resources = new Map
                }
            }
            ;
            var qEd = {
                rf: "fullscreen_element_orbit_rotated",
                Eg(a) {
                    return __c.Wr({
                        resource_id: a.resourceId,
                        action: a.action,
                        selected_element_type: a.$dc,
                        document_id: a.fj,
                        performance_context: a.Ue == null ? void 0 : __c.Yr(a.Ue),
                        design_id: a.Lg
                    })
                }
            };
            var rEd = class {
                constructor(a, b, c) {
                    this.qa = a;
                    this.Va = b;
                    this.Lg = c;
                    this.k_ = null
                }
            }
            ;
            var UDd = ({qa: a, Va: b, Lg: c}) => new rEd(a,b,c);
            var sEd = ({I1b: a, t1a: b}) => gEd("div", {
                className: "Wfem7A",
                children: [B7("div", {
                    className: jEd("CSoSRg", {
                        PGQGgw: b
                    })
                }), B7("div", {
                    className: "__J59g",
                    style: {
                        width: a ? "100%" : "init",
                        height: a ? "init" : "100%",
                        aspectRatio: "1"
                    },
                    children: B7("div", {
                        className: jEd("tEhdig", {
                            PGQGgw: b
                        })
                    })
                })]
            })
              , DDd = ({children: a, ke: b, t1a: c}) => {
                const d = K7(null)
                  , [e,f] = kEd(!1);
                D7( () => {
                    d.current && f(d.current.clientWidth >= d.current.clientHeight)
                }
                , [d]);
                return b ? B7("div", {
                    ref: d,
                    className: "uDEnGQ",
                    children: gEd("div", {
                        className: "E8BDLQ",
                        children: [B7("div", {
                            className: "II7r4Q",
                            children: a
                        }), B7(sEd, {
                            I1b: e,
                            t1a: c
                        })]
                    })
                }) : a
            }
            ;
            var tEd = ({m8b: a, l8b: b}) => {
                const c = K7(null);
                D7( () => {
                    const d = c.current;
                    c.current && a(c.current);
                    return () => {
                        d && b()
                    }
                }
                , [c, a, b]);
                return B7("div", {
                    ref: c,
                    style: {
                        display: "block",
                        position: "absolute"
                    }
                })
            }
            ;
            var uEd = class {
                get xa() {
                    return this.Vj?.() ?? this.ah.VZ
                }
                get ah() {
                    return this.local.ah
                }
                constructor(a, b, c, d) {
                    this.local = a;
                    this.gh = b;
                    this.M = c;
                    this.Vj = d;
                    this.DZb = e => {
                        const f = this.xa;
                        var g = Math.round(Math.min(this.M.width * 2E3 / f.width, 2E3));
                        z7(this.gh, g, g);
                        g = this.M.K / f.width;
                        e.style.width = 2E3 * g + "px";
                        e.style.height = 2E3 * g + "px";
                        e.style.left = `-${f.left * g}px`;
                        e.style.top = `-${f.top * g}px`;
                        bDd(this.gh, e)
                    }
                    ;
                    this.CZb = () => {
                        var e = this.gh;
                        e.store.container?.removeChild(e.canvas);
                        e.store.container = void 0
                    }
                }
            }
            ;
            var CDd = ({local: a, gh: b, M: c, Vj: d}) => {
                const e = new uEd(a,b,c,d);
                return () => B7(tEd, {
                    m8b: e.DZb,
                    l8b: e.CZb
                })
            }
            ;
            var yDd = () => B7("div", {
                className: "_7SJjPA"
            });
            var xDd = ({dH: a}) => B7("img", {
                src: a,
                style: {
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto"
                }
            });
            var BDd = class {
                static G(a) {
                    N(a, {
                        initialize: I7,
                        destroy: I7,
                        Qy: F7,
                        dH: F7,
                        ke: F7,
                        isError: F7,
                        PTa: F7,
                        f9: F7,
                        hjb: I7
                    })
                }
                async initialize() {
                    const a = x7()();
                    try {
                        this.Mf.local.Gxa++;
                        this.store.LSb = G7( () => ({
                            selected: this.Hk,
                            scene: this.store.scene
                        }), ({selected: c, scene: d}) => this.hjb(c, d), {
                            fireImmediately: !0
                        });
                        this.store.Qeb = G7( () => [this.Mf.C.config.ref.rotationPhi, this.Mf.C.config.ref.rotationTheta], this.fjb, {
                            fireImmediately: !0
                        });
                        this.store.KSb = G7( () => [this.Mf.C.config.ref.mc], this.ejb, {
                            fireImmediately: !0
                        });
                        const b = a.r(await a.s(w7(this.Am, this.Mf.C.scene.id)));
                        y7( () => {
                            this.store.scene = b
                        }
                        );
                        if (a.r(await a.s(A7(this.Ol))))
                            try {
                                a.r(await a.s(nDd(this.Ol, this.Mf)))
                            } catch (c) {
                                a.r(),
                                this.Ts.info(`Unable to initialize scene ${c}`)
                            }
                    } finally {
                        a.s()
                    }
                }
                destroy() {
                    this.Mf.local.Gxa--;
                    this.Mf.local.Gxa === 0 && this.Ol.kga(this.Mf);
                    this.store.dwc?.();
                    this.store.LSb?.();
                    this.store.Qeb?.();
                    this.store.KSb?.()
                }
                get Qy() {
                    return this.f9 && this.PTa && !this.ah.Uf || this.f9 && this.PTa && !this.Hk ? 0 : this.f9 && this.Hk && this.ah.YO && this.ah.Uf ? 1 : this.pu ? 2 : this.dH ? 3 : this.isError ? 4 : 5
                }
                get dH() {
                    return this.store.scene?.files.wq
                }
                get pu() {
                    return this.Mf.C.config.ref.snapshot?.id
                }
                get ke() {
                    return this.f9 && this.Hk && !this.ah.YO
                }
                get Hk() {
                    return this.Mf.local.selected
                }
                get isError() {
                    return !!this.store.scene && !this.store.scene.files.wq
                }
                get PTa() {
                    return !!this.Mf.local.GFb
                }
                get f9() {
                    return this.lb?.status !== 2 && !this.gh.emb
                }
                get ah() {
                    return this.Mf.local.ah
                }
                constructor(a, b, c, d, e, f, g, h, k) {
                    this.store = a;
                    this.Mf = b;
                    this.Am = c;
                    this.gh = d;
                    this.Ol = e;
                    this.Qaa = f;
                    this.lb = g;
                    this.Ts = h;
                    this.K7a = k;
                    this.hjb = (BDd.G(this),
                    async (l, m) => {
                        const n = x7()();
                        try {
                            if (m != null)
                                if (!l)
                                    this.Ol.fT(this.Mf);
                                else if (!n.r(await n.s(A7(this.Ol))))
                                    this.K7a?.();
                                else if (this.f9) {
                                    var p = this.Qaa.startSpan("select");
                                    n.r(await n.s(cEd(this.Qaa, async () => {
                                        const q = x7()();
                                        try {
                                            try {
                                                q.r(await q.s(this.Ol.aY(this.Mf))),
                                                this.fjb(),
                                                this.ejb()
                                            } catch (r) {
                                                q.r(),
                                                this.Ts.info(`Unable to activate scene ${r}`)
                                            }
                                        } finally {
                                            q.s()
                                        }
                                    }
                                    , p)));
                                    p.end()
                                }
                        } finally {
                            n.s()
                        }
                    }
                    );
                    this.fjb = () => {
                        this.ah.Uf || this.ah.VL({
                            rotation: {
                                Yk: this.Mf.C.config.ref.rotationPhi,
                                hl: this.Mf.C.config.ref.rotationTheta
                            }
                        })
                    }
                    ;
                    this.ejb = () => {
                        const l = [];
                        this.Mf.C.config.ref.mc?.forEach( (m, n) => {
                            m.color && l.push({
                                type: "solid",
                                id: n,
                                override: m.color
                            })
                        }
                        );
                        this.ah.setRecolorings(l)
                    }
                }
            }
            ;
            var ADd = class {
                static G(a) {
                    N(a, {
                        scene: H7.ref
                    })
                }
                constructor() {
                    this.Qeb = (ADd.G(this),
                    void 0)
                }
            }
            ;
            var vEd = ({Ww: a, ila: b, onDispose: c}) => {
                const d = K7(null);
                D7( () => {
                    d.current && b(d.current);
                    return () => c()
                }
                , [d, b, c]);
                D7( () => {
                    d.current && a && (a.style.width = "100%",
                    a.style.height = "100%",
                    d.current.firstChild && d.current.removeChild(d.current.firstChild),
                    d.current.appendChild(a))
                }
                , [d, a]);
                return B7("div", {
                    ref: d,
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                })
            }
            ;
            var wEd = class {
                static G(a) {
                    N(a, {
                        initialize: I7.bound,
                        dispose: I7.bound,
                        Peb: I7
                    })
                }
                initialize(a) {
                    this.store.container = a;
                    this.store.Oeb = G7( () => this.local.Pya, () => {
                        var b = y(this.store.container, "Missing container");
                        if (this.local.VAa && this.local.Pya) {
                            var c = this.local.VAa
                              , d = this.M.K / c.width;
                            b.style.width = 2E3 * d + "px";
                            b.style.height = 2E3 * d + "px";
                            b.style.left = `-${c.left * d}px`;
                            b.style.top = `-${c.top * d}px`;
                            b.style.position = "absolute";
                            b = new Image;
                            b.src = this.local.Pya;
                            this.store.Ww = b
                        }
                    }
                    , {
                        fireImmediately: !0
                    })
                }
                dispose() {
                    this.Peb();
                    this.store.Oeb?.();
                    this.store.Oeb = void 0
                }
                get Ww() {
                    return this.store.Ww
                }
                Peb() {
                    this.store.Ww = void 0
                }
                constructor(a, b, c) {
                    this.store = a;
                    this.local = b;
                    this.M = c;
                    wEd.G(this)
                }
            }
            ;
            var xEd = class {
                static G(a) {
                    N(a, {
                        Ww: H7.ref
                    })
                }
                constructor() {
                    this.container = (xEd.G(this),
                    void 0)
                }
            }
            ;
            var WDd = ({local: a, M: b}) => {
                const c = new xEd
                  , d = new wEd(c,a,b);
                return C7( () => B7(vEd, {
                    ila: d.initialize,
                    onDispose: d.dispose,
                    Ww: d.Ww
                }))
            }
            ;
            var HDd = ({children: a, onMouseDown: b, onTouchStart: c}) => {
                const d = K7(null)
                  , e = K7(c);
                e.current = c;
                D7( () => {
                    const f = d.current;
                    if (f) {
                        var g = h => {
                            h.stopPropagation();
                            e.current(h)
                        }
                        ;
                        f.addEventListener("touchstart", g);
                        return () => f.removeEventListener("touchstart", g)
                    }
                }
                , []);
                return B7("div", {
                    ref: d,
                    role: "none",
                    className: "EBsZEg",
                    onMouseDown: b,
                    children: B7("div", {
                        className: "wwL4Zg",
                        children: a
                    })
                })
            }
            ;
            var yEd = Math.PI / 2 - .001
              , zEd = -Math.PI / 2 + .001;
            var GDd = class {
                static G(a) {
                    N(a, {
                        $ib: I7.bound,
                        JBb: I7.bound,
                        Zib: I7.bound,
                        Yib: I7.bound
                    })
                }
                async $ib() {
                    const a = x7()();
                    try {
                        this.store.$_ = !0;
                        this.Jz.Lja = !0;
                        var b = this.zL
                          , c = {
                            action: "drag",
                            $dc: "scene",
                            resourceId: this.Mf.C.scene.id
                        };
                        if (b.qa) {
                            var d = b.qa;
                            b.k_ = b.Va.ri("fullscreen_element_orbit_rotated", {
                                Vs: {
                                    name: "rendering.scene.fullscreen_element_orbit_rotated",
                                    performance: {
                                        Qoa: !0,
                                        eL: !0
                                    }
                                }
                            });
                            __c.RY({
                                pe: b.k_.pe(),
                                qa: d,
                                event: qEd,
                                props: {
                                    ...c,
                                    Lg: b.Lg
                                }
                            })
                        }
                        const e = uDd(this.zL, "drag_start");
                        try {
                            this.ah.YO || pDd(this.Ol),
                            a.r(await a.s(this.Ol.aY(this.Mf))),
                            this.store.$_ && this.ah.YO && this.JBb()
                        } catch (f) {
                            a.r(),
                            this.Jz.Lja = !1,
                            this.Ts.info(`Unable to activate scene ${f}`)
                        } finally {
                            e?.end()
                        }
                    } finally {
                        a.s()
                    }
                }
                JBb() {
                    try {
                        this.Jz.Bp || (this.Jz.Bp = this.ah.m_());
                        if (!this.store.rotation) {
                            const a = this.ah.Dib();
                            this.store.rotation = {
                                Yk: a.rotation.Yk,
                                hl: a.rotation.hl
                            }
                        }
                        this.store.wkb = this.store.rotation;
                        this.ah.VL({
                            rotation: {
                                Yk: this.store.rotation?.Yk,
                                hl: this.store.rotation?.hl
                            }
                        });
                        this.ah.sva({
                            qI: !1
                        });
                        this.store.Eua = !0
                    } catch (a) {
                        throw vDd(this.zL),
                        a;
                    }
                }
                Zib(a) {
                    if (this.store.Eua) {
                        var b = a.clientX;
                        a = a.clientY;
                        if (this.store.N_) {
                            b -= this.store.N_.x;
                            a -= this.store.N_.y;
                            var c = -((this.M.rotation ?? 0) * Math.PI / 180)
                              , [d,e] = [b * Math.cos(c) - a * Math.sin(c), b * Math.sin(c) + a * Math.cos(c)];
                            a = this.store.wkb;
                            b = (a.Yk + d * .01) % (2 * Math.PI);
                            a = a.hl + e * .01;
                            this.store.rotation = {
                                Yk: b < 0 ? b + 2 * Math.PI : b,
                                hl: a > yEd ? yEd : a < zEd ? zEd : a
                            };
                            this.ah.VL({
                                rotation: {
                                    Yk: this.store.rotation?.Yk,
                                    hl: this.store.rotation?.hl
                                }
                            })
                        } else
                            this.store.N_ = {
                                x: b,
                                y: a
                            }
                    }
                }
                Yib() {
                    this.store.$_ = !1;
                    if (this.store.Eua) {
                        var a = uDd(this.zL, "drag_end");
                        this.Jz.uMa = this.ah.m_();
                        var b = document.createElement("canvas");
                        this.ah.cta(2E3, b);
                        this.Jz.Zjb = b;
                        this.ah.vba();
                        a?.end();
                        vDd(this.zL);
                        this.store.N_ = void 0;
                        this.store.$_ = !1;
                        this.store.Eua = !1
                    } else
                        this.store.N_ = void 0,
                        vDd(this.zL)
                }
                get ah() {
                    return this.Mf.local.ah
                }
                constructor(a, b, c, d, e, f, g) {
                    this.store = a;
                    this.Mf = b;
                    this.M = c;
                    this.Jz = d;
                    this.Ol = e;
                    this.zL = f;
                    this.Ts = g;
                    GDd.G(this)
                }
            }
            ;
            var FDd = class {
                static G(a) {
                    N(a, {
                        N_: H7.ref,
                        rotation: H7.ref,
                        $_: H7.ref
                    })
                }
                constructor() {
                    this.N_ = (FDd.G(this),
                    void 0);
                    this.$_ = !1;
                    this.wkb = {
                        Yk: 0,
                        hl: 0
                    };
                    this.Eua = !1
                }
            }
            ;
            var AEd = ({canvas: a, ila: b}) => {
                const c = K7(null);
                D7( () => {
                    c.current && b(c.current)
                }
                , [c, b]);
                D7( () => {
                    c.current && a && (a.style.width = "100%",
                    a.style.height = "100%",
                    c.current.firstChild && c.current.removeChild(c.current.firstChild),
                    c.current.appendChild(a))
                }
                , [c, a]);
                return B7("div", {
                    ref: c,
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                })
            }
            ;
            var BEd = class {
                static G(a) {
                    N(a, {
                        initialize: I7.bound,
                        canvas: F7
                    })
                }
                initialize(a) {
                    this.store.container = a;
                    a = this.Jz.Bp;
                    var b = this.Jz.uMa
                      , c = this.Jz.Zjb;
                    const d = y(this.store.container, "Missing container");
                    if (a && b && c) {
                        const k = this.M.K / a.width;
                        var {left: e, top: f, width: g, height: h} = {
                            left: ((a.width - b.width) / 2 + (b.left + b.width / 2 - (a.left + a.width / 2))) * k,
                            top: ((a.height - b.height) / 2 + (b.top + b.height / 2 - (a.top + a.height / 2))) * k,
                            width: b.width * k,
                            height: b.height * k
                        };
                        d.style.width = `${g}px`;
                        d.style.height = `${h}px`;
                        d.style.left = `${e}px`;
                        d.style.top = `${f}px`;
                        d.style.position = "absolute";
                        this.store.canvas = c
                    }
                }
                get canvas() {
                    return this.store.canvas
                }
                constructor(a, b, c) {
                    this.store = a;
                    this.Jz = b;
                    this.M = c;
                    BEd.G(this)
                }
            }
            ;
            var CEd = class {
                static G(a) {
                    N(a, {
                        canvas: H7.ref
                    })
                }
                constructor() {
                    this.container = (CEd.G(this),
                    void 0)
                }
            }
            ;
            var MDd = ({Jz: a, M: b}) => {
                const c = new CEd
                  , d = new BEd(c,a,b);
                return C7( () => B7(AEd, {
                    ila: d.initialize,
                    canvas: d.canvas
                }))
            }
            ;
            var LDd = class {
                static G(a) {
                    N(a, {
                        initialize: I7,
                        destroy: I7,
                        Qy: F7,
                        Flb: F7,
                        ke: F7,
                        pu: F7,
                        dH: F7,
                        isError: F7
                    })
                }
                async initialize() {
                    const a = x7()();
                    try {
                        const b = a.r(await a.s(w7(this.Am, this.Mf.C.scene.id)));
                        y7( () => {
                            this.store.scene = b
                        }
                        );
                        if (a.r(await a.s(A7(this.Ol))))
                            try {
                                a.r(await a.s(nDd(this.Ol, this.Mf))),
                                y7( () => {
                                    this.store.isLoaded = !0
                                }
                                )
                            } catch (c) {
                                a.r(),
                                this.Ts.info(`Unable to initialize or activate scene ${c}`)
                            }
                    } finally {
                        a.s()
                    }
                }
                destroy() {
                    this.Ol.kga(this.Mf);
                    this.store.q0b = void 0;
                    this.store.Lja = !1
                }
                get Qy() {
                    return this.Flb ? 1 : this.store.uMa ? 0 : this.pu ? 2 : this.dH ? 3 : this.isError ? 4 : 5
                }
                get Flb() {
                    return this.ah.Uf
                }
                get ke() {
                    return this.store.Lja && !this.store.isLoaded
                }
                get pu() {
                    return this.Mf.C.config.ref.snapshot?.id
                }
                get dH() {
                    return this.store.scene?.files.wq
                }
                get isError() {
                    return !!this.store.scene && !this.store.scene.files.wq
                }
                get ah() {
                    return this.Mf.local.ah
                }
                constructor(a, b, c, d, e) {
                    this.store = a;
                    this.Mf = b;
                    this.Am = c;
                    this.Ol = d;
                    this.Ts = e;
                    LDd.G(this)
                }
            }
            ;
            var KDd = class {
                static G(a) {
                    N(a, {
                        scene: H7.ref,
                        Bp: H7.ref,
                        uMa: H7.ref,
                        isLoaded: H7.ref,
                        Zjb: H7.ref,
                        q0b: H7.ref,
                        Lja: H7.ref
                    })
                }
                constructor() {
                    this.scene = (KDd.G(this),
                    void 0);
                    this.Lja = this.isLoaded = !1
                }
            }
            ;
            var VDd = class {
                static G(a) {
                    N(a, {
                        wMa: F7,
                        uja: F7,
                        hmb: F7,
                        ylb: F7
                    })
                }
                get wMa() {
                    return this.hmb ? 1 : this.ylb ? 0 : 2
                }
                get uja() {
                    return this.Lb === 30
                }
                get hmb() {
                    return this.uja && !this.On && !this.Wva
                }
                get ylb() {
                    return this.uja && !this.Wva
                }
                constructor(a, b, c=!1) {
                    this.Lb = a;
                    this.On = b;
                    this.Wva = c;
                    VDd.G(this)
                }
            }
            ;
            var DEd = ({ila: a, onDispose: b, Ww: c}) => {
                const d = K7(null);
                D7( () => {
                    d.current && a(d.current);
                    return () => b()
                }
                , [d, a, b]);
                D7( () => {
                    d.current && c && (c.style.width = "100%",
                    c.style.height = "100%",
                    c.style.objectFit = "contain",
                    d.current.firstChild && d.current.removeChild(d.current.firstChild),
                    d.current.appendChild(c))
                }
                , [d, c]);
                return B7("div", {
                    ref: d,
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                })
            }
            ;
            var EEd = class {
                static G(a) {
                    N(a, {
                        initialize: I7.bound,
                        dispose: I7.bound
                    })
                }
                initialize(a) {
                    this.store.container = a;
                    const b = ODd(this);
                    y7( () => {
                        this.store.Ww = b
                    }
                    )
                }
                dispose() {
                    this.store.Ww = void 0;
                    this.store.container = void 0
                }
                get Ww() {
                    return this.store.Ww
                }
                get ah() {
                    return this.local.ah
                }
                constructor(a, b) {
                    this.store = a;
                    this.local = b;
                    EEd.G(this)
                }
            }
            ;
            var FEd = class {
                static G(a) {
                    N(a, {
                        Ww: H7.ref
                    })
                }
                constructor() {
                    this.container = (FEd.G(this),
                    void 0)
                }
            }
            ;
            var SDd = ({local: a}) => {
                const b = new FEd
                  , c = new EEd(b,a);
                return C7( () => B7(DEd, {
                    ila: c.initialize,
                    onDispose: c.dispose,
                    Ww: c.Ww
                }))
            }
            ;
            var RDd = class {
                static G(a) {
                    N(a, {
                        Qy: F7,
                        pu: F7,
                        wq: F7,
                        isError: F7
                    })
                }
                async initialize() {
                    const a = x7()();
                    try {
                        try {
                            const b = a.r(await a.s(w7(this.Am, this.Mf.C.scene.id)))
                              , c = !b.files.wq && !this.pu;
                            y7( () => {
                                this.store.wq = b.files.wq;
                                this.store.Uxa = c
                            }
                            );
                            c && b.files.eia && this.Ol.aY(this.Mf)
                        } catch (b) {
                            a.r(),
                            this.Ts.info(`Unable to fetch scene: ${b}`),
                            y7( () => {
                                this.store.isError = !0
                            }
                            )
                        }
                    } finally {
                        a.s()
                    }
                }
                dispose() {
                    this.store.Uxa && this.Ol.kga(this.Mf)
                }
                get Qy() {
                    return this.pu ? 0 : this.store.wq ? 1 : this.store.isError ? 3 : this.ah.YO && this.store.Uxa ? 2 : 4
                }
                get pu() {
                    return this.Mf.C.config.ref.snapshot?.id
                }
                get wq() {
                    return this.store.wq
                }
                get isError() {
                    return this.store.isError
                }
                get ah() {
                    return this.Mf.local.ah
                }
                constructor(a, b, c, d, e) {
                    this.store = a;
                    this.Mf = b;
                    this.Am = c;
                    this.Ol = d;
                    this.Ts = e;
                    RDd.G(this)
                }
            }
            ;
            var QDd = class {
                static G(a) {
                    N(a, {
                        wq: H7.ref,
                        isError: H7.ref,
                        Uxa: H7.ref
                    })
                }
                constructor() {
                    this.wq = (QDd.G(this),
                    void 0);
                    this.Uxa = this.isError = !1
                }
            }
            ;
            var GEd = class {
                startSpan(a, b) {
                    a = `scene.${a}`;
                    return b ? this.Va.startSpan(a, b) : this.Va.ri(a, {
                        Vs: {
                            name: `editor.${a}`,
                            performance: {
                                eL: !0
                            }
                        }
                    })
                }
                constructor(a) {
                    this.Va = a
                }
            }
            ;
            var HEd;
            HEd = __c.ry()( ({ig: a, Ly: b}) => {
                const c = b.Va
                  , d = b.lb
                  , e = b.qa;
                var f = a.ZSc;
                b = b.J.Wd("scene_widget_rendering");
                const g = new GEd(c)
                  , h = fDd({
                    J: b,
                    kG: f
                })
                  , k = new lEd(h);
                f = {};
                const l = tDd({
                    Am: a.Am,
                    WG: k,
                    gh: h
                });
                a = aEd({
                    Am: a.Am,
                    gh: h,
                    Ol: l,
                    Qaa: g,
                    Ts: b,
                    exports: f,
                    lb: d,
                    qa: e,
                    Va: c
                });
                return {
                    ...__c.WU,
                    metadata: {
                        type: "scene",
                        name: __c.L("6XoKOg"),
                        cM: m => m.scene.id
                    },
                    BD: () => {
                        const m = VCd({
                            WG: k,
                            gh: h
                        });
                        return new pEd(jDd({
                            Xz: m
                        }))
                    }
                    ,
                    C: __c.qy(a),
                    exports: f,
                    Vj: gDd
                }
            }
            );
            __c.c5 = {};
            __c.c5.Iqc = pEd;
            __c.c5.Xd = __c.Ard;
            __c.c5.Sk = HEd;
            __c.c5.Yd = __c.Hrd;
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/cfff6d96570a2245.js.map
