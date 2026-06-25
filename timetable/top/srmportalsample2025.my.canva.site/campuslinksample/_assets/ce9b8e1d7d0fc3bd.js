(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[58205], {

    /***/
    427414: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var TZ = function(a, b) {
                var c = a.top
                  , d = a.left
                  , e = a.width
                  , f = a.height
                  , g = a.rotation
                  , h = a.ma
                  , k = a.Xh
                  , l = a.link
                  , m = a.fg
                  , n = a.Pj
                  , p = a.La
                  , q = a.anchor
                  , r = a.animation;
                a: switch (a.type) {
                case "rect":
                case "shape":
                case "text":
                case "grid":
                case "line":
                    a = !0;
                    break a;
                case "chart":
                    a = !1;
                    break a;
                default:
                    throw new __c.z(a);
                }
                return {
                    top: c,
                    left: d,
                    width: e,
                    height: f,
                    rotation: g,
                    ma: h,
                    Xh: k,
                    aa: void 0,
                    L: void 0,
                    link: l,
                    fg: m,
                    Pj: n,
                    La: p,
                    anchor: q,
                    animation: r,
                    Od: a ? b : __c.yT,
                    locked: !0
                }
            }
              , IUc = function(a, b, c) {
                return {
                    Ra: FUc(a, b.Ra, d => a.createPath(d, c)),
                    xb: FUc(a, b.xb, d => a.e.classes.pHa.create({}, {
                        O: {
                            ...GUc(a, d, c)
                        },
                        attributes: {
                            box: d.box,
                            zn: d.zn,
                            Yc: d.Yc,
                            Eb: d.Eb
                        }
                    })),
                    slice: b.slice && HUc(a, b.slice, c)
                }
            }
              , GUc = function(a, b, c) {
                return {
                    text: UZ(a, () => JUc(c, b.text, b.Qa.text))
                }
            }
              , MUc = function(a, b, c) {
                return {
                    xb: FUc(a, b.xb, d => a.e.classes.dHa.create({}, {
                        O: {
                            ...KUc(a, d, c)
                        },
                        attributes: {
                            Ff: d.Ff,
                            position: d.position,
                            wh: d.wh,
                            orientation: d.orientation,
                            width: VZ(a, WZ(c, d.width, d.Qa.width)),
                            height: VZ(a, WZ(c, d.height, d.Qa.height))
                        }
                    })),
                    start: a.e.classes.bqa.create({}, {
                        attributes: LUc(a, b.start, c)
                    }),
                    end: a.e.classes.bqa.create({}, {
                        attributes: LUc(a, b.end, c)
                    })
                }
            }
              , NUc = function(a, b, c) {
                return {
                    ...MUc(a, b, c),
                    fill: b.fill,
                    geometry: b.geometry
                }
            }
              , OUc = function(a, b) {
                return {
                    ...TZ(a, b),
                    weight: a.weight,
                    color: a.color,
                    Wc: a.Wc,
                    df: a.df
                }
            }
              , LUc = function(a, b, c) {
                return {
                    marker: b.marker,
                    anchor: b.anchor,
                    position: VZ(a, PUc(c, b.position, b.Qa.position))
                }
            }
              , KUc = function(a, b, c) {
                return {
                    text: UZ(a, () => JUc(c, b.text, b.Qa.text))
                }
            }
              , QUc = function(a, b, c) {
                return {
                    text: UZ(a, () => JUc(c, b.text, b.Qa.text))
                }
            }
              , SUc = function(a, b, c) {
                return {
                    cells: RUc(a, b.cells, d => {
                        var e = {
                            fill: XZ(a, d.fill, c),
                            stroke: d.stroke
                        };
                        const {stroke: f, ...g} = e;
                        return a.e.classes.XGa.create({}, {
                            O: {
                                ...g,
                                stroke: YZ(f ? __c.qO.create(f) : void 0)
                            },
                            attributes: {
                                X: d.X
                            }
                        })
                    }
                    )
                }
            }
              , TUc = function(a, b, c, d) {
                return {
                    Mg: b.Mg,
                    color: b.color,
                    ma: b.ma,
                    locked: b.locked,
                    fg: b.fg,
                    Pj: b.Pj,
                    Eb: b.Eb,
                    flipX: VZ(a, {
                        get: () => d()?.flipX ?? b.flipX,
                        set: e => c({
                            flipX: e
                        })
                    }),
                    flipY: VZ(a, {
                        get: () => d()?.flipY ?? b.flipY,
                        set: e => c({
                            flipY: e
                        })
                    })
                }
            }
              , a_ = function(a, b, c) {
                return {
                    get: () => {
                        if (!c)
                            return b;
                        var d = a.bf.get(c);
                        d = d && ZZ(d, "double");
                        return d != null ? d : b
                    }
                    ,
                    set: d => $Z(a, {
                        type: "double",
                        value: d
                    }, c, b)
                }
            }
              , WZ = function(a, b, c, d) {
                return {
                    get: () => {
                        if (!c)
                            return b;
                        var e = a.bf.get(c);
                        e = e && ZZ(e, "non-negative-double");
                        return e != null || d ? e : b
                    }
                    ,
                    set: e => $Z(a, {
                        type: "non-negative-double",
                        value: e
                    }, c, d ? void 0 : b)
                }
            }
              , JUc = function(a, b, c) {
                if (!c)
                    return __c.km.create(b);
                a = __c.y(a.bf.get(c), "Text overrides must always have an associated value");
                return ZZ(a, "richtext2")?.text
            }
              , PUc = function(a, b, c) {
                return {
                    get: () => {
                        if (!c)
                            return b;
                        var d = a.bf.get(c);
                        d = d && ZZ(d, "point");
                        return d != null ? d : b
                    }
                    ,
                    set: d => $Z(a, {
                        type: "point",
                        value: d
                    }, c, b)
                }
            }
              , UUc = function(a, b, c) {
                return {
                    get: () => {
                        if (!c)
                            return b;
                        var d = a.bf.get(c);
                        d = d && ZZ(d, "boolean");
                        return d != null ? d : b
                    }
                    ,
                    set: d => $Z(a, {
                        type: "boolean",
                        value: d
                    }, c, b)
                }
            }
              , WUc = function(a, b, c, d, e) {
                var f = VUc(a, c);
                let g, h;
                f?.image.ref ? (g = f.image.ref,
                h = void 0) : f?.video.ref ? (h = f.video.ref,
                g = void 0) : (g = b.image ? __c.qA.create(b.image) : void 0,
                h = b.video ? __c.sA.create(b.video) : void 0);
                const k = l => {
                    var m = (m = VUc(a, c)) ? {
                        ...__c.QE,
                        ...__c.pO.snapshot(m)
                    } : __c.QE;
                    var n = c ? a.bf.get(c) : void 0;
                    n = n && n.type === "image_or_video" ? n.value : void 0;
                    $Z(a, n != null && l.image == null && l.video == null ? {
                        type: "image_or_video",
                        value: {
                            ...m,
                            ...__c.pO.snapshot(n),
                            ...l
                        }
                    } : {
                        type: "image_or_video",
                        value: {
                            ...m,
                            ...l
                        }
                    }, c, b)
                }
                ;
                d = g ? d(g, l => k({
                    image: {
                        ...__c.qA.snapshot(g),
                        ...l
                    }
                })) : void 0;
                f = h ? e(h, l => k({
                    video: {
                        ...__c.sA.snapshot(e(h, m => m)),
                        ...l
                    }
                })) : void 0;
                return {
                    image: {
                        ref: d,
                        set: l => k({
                            image: l
                        })
                    },
                    video: {
                        ref: f,
                        set: l => k({
                            video: l
                        })
                    },
                    k0a: k,
                    VQa: () => VUc(a, c)
                }
            }
              , XUc = function(a, b, c) {
                if (!c)
                    return {
                        color: {
                            get: () => b.color,
                            set: () => {}
                        },
                        Ha: () => ({
                            ref: b.Ha ? __c.nO.create(b.Ha) : void 0,
                            set: () => {}
                        })
                    };
                const d = () => {
                    const f = a.bf.get(c);
                    return f ? ZZ(f, "color_or_gradient") : void 0
                }
                  , e = f => {
                    const g = d()
                      , h = "color"in f
                      , k = h ? f.color : f.Ha;
                    f = {
                        ...(g ? __c.pO.snapshot(g) : b),
                        ...(k != null && (h ? {
                            Ha: void 0
                        } : {
                            color: void 0
                        })),
                        ...f,
                        Qa: __c.pT
                    };
                    $Z(a, {
                        type: "color_or_gradient",
                        value: f
                    }, c, b)
                }
                ;
                return {
                    color: {
                        get: () => {
                            const f = d();
                            return f ? f.color : b.color
                        }
                        ,
                        set: f => e({
                            color: f
                        })
                    },
                    Ha: () => {
                        const f = d();
                        let g;
                        f ? g = f.Ha.ref : b.Ha && (g = __c.nO.create(b.Ha));
                        return {
                            ref: g,
                            set: h => e({
                                Ha: h
                            })
                        }
                    }
                }
            }
              , ZZ = function(a, b) {
                if (a.type !== b)
                    throw Error(`Expected override type ${b} but got ${a.type}`);
                return a.value
            }
              , $Z = function(a, b, c, d) {
                if (!c)
                    throw Error("No override key is available, but this is being set on an instance. This is likely an error with the locking logic.");
                YUc(b, d) ? a.bf.delete(c) : a.bf.set(c, b)
            }
              , VUc = function(a, b) {
                if (b)
                    return (a = a.bf.get(b)) && ZZ(a, "image_or_video")
            }
              , YUc = function(a, b) {
                if (a.value == null || b == null)
                    return a.value === b;
                switch (a.type) {
                case "non-negative-double":
                case "double":
                    return Math.abs(a.value - b) < 1E-10;
                case "image_or_video":
                    return a.value.video && b.video ? __c.sA.domain.Uc(b_(a.value.video), b_(b.video)) : a.value.image && b.image ? __c.qA.domain.Uc(b_(a.value.image), b_(b.image)) : !1;
                case "richtext2":
                    return !1;
                case "boolean":
                case "string":
                    return a.value === b;
                case "point":
                    return Math.abs(a.value.left - b.left) < 1E-10 && Math.abs(a.value.top - b.top) < 1E-10;
                case "color_or_gradient":
                    return __c.pO.domain.Uc(a.value, b);
                default:
                    throw new __c.z(a);
                }
            }
              , b_ = function(a) {
                return {
                    ...a,
                    eb: a.eb ? {
                        width: Math.round(a.eb.width / 1E-10) * 1E-10,
                        height: Math.round(a.eb.height / 1E-10) * 1E-10,
                        top: Math.round(a.eb.top / 1E-10) * 1E-10,
                        left: Math.round(a.eb.left / 1E-10) * 1E-10,
                        rotation: Math.round(a.eb.rotation / 1E-10) * 1E-10
                    } : void 0
                }
            }
              , XZ = function(a, b, c) {
                const d = WUc(c, b, b.Qa.aH, a.OQb, a.PQb)
                  , {color: e, Ha: f} = XUc(c, b, b.Qa.gG);
                c = {
                    ...d,
                    color: VZ(a, e),
                    Ha: UZ(a, f)
                };
                const {k0a: g, VQa: h, ...k} = c
                  , {color: l, k0a: m, VQa: n, ...p} = {
                    ...k,
                    k0a: g,
                    VQa: h
                };
                return a.e.classes.LX.create({}, {
                    O: p,
                    attributes: {
                        ...TUc(a, b, m, n),
                        color: l
                    }
                })
            }
              , VZ = function(a, b) {
                return a.e.GP(b)
            }
              , FUc = function(a, b, c) {
                return a.e.list(b.filter(d => d != null).map(d => c(d)))
            }
              , HUc = function(a, b, c) {
                const {Fb: d, vertical: e, ...f} = {
                    Fb: b.Fb,
                    vertical: b.vertical,
                    source: b.source,
                    Wf: VZ(a, WZ(c, b.Wf, b.Qa.Wf)),
                    Vf: VZ(a, WZ(c, b.Vf, b.Qa.Vf))
                };
                return a.e.classes.lHa.create({
                    Fb: d,
                    vertical: e
                }, {
                    attributes: f
                })
            }
              , UZ = function(a, b) {
                return a.e.computed(b)
            }
              , RUc = function(a, b, c) {
                return a.e.ie(Object.fromEntries([...b.entries()].map( ([d,e]) => [d, c(e)])))
            }
              , c_ = function(a) {
                return {
                    oa: __c.SYb.create(a.oa),
                    Hd: __c.XN.create(a.Hd),
                    $c: YZ(a.$c ? __c.XF.create(a.$c) : void 0)
                }
            }
              , YZ = function(a) {
                return {
                    ref: a,
                    set: () => {}
                }
            }
              , ZUc = function(a, b, c, d, e, f, g) {
                return a.e.computed( () => __c.$B(__c.y(a.Tb), c, d, e, f, g, () => b).ID)
            }
              , $Uc = function(a, b, c, d) {
                const {fill: e, geometry: f, xb: g, start: h, end: k, ...l} = NUc(a, b, c)
                  , m = YZ(f ? __c.vS.create(f) : void 0)
                  , n = ZUc(a, b, a.e.read(h), a.e.read(k), b.weight, m.ref, g);
                return a.e.classes.aqa.create({}, {
                    O: {
                        ...l,
                        ...c_(b),
                        fill: XZ(a, e, c),
                        geometry: m,
                        start: h,
                        end: k,
                        xb: g
                    },
                    attributes: {
                        ...TZ(b, d),
                        ...OUc(b, d),
                        top: () => n().top,
                        left: () => n().left,
                        width: () => n().width,
                        height: () => n().height,
                        rotation: () => n().rotation
                    }
                })
            }
              , aVc = __webpack_require__(221627).iB;
            var bVc = class {
            }
            ;
            var cVc = class {
                constructor(a) {
                    this.bf = a
                }
            }
            ;
            __c.dVc = class extends bVc {
                createPath(a, b) {
                    b = {
                        fill: XZ(this, a.fill, b),
                        stroke: a.stroke
                    };
                    const {stroke: c, ...d} = b;
                    return this.e.classes.NR.create({
                        d: a.d
                    }, {
                        O: {
                            ...d,
                            stroke: YZ(c ? __c.qO.create(c) : void 0)
                        },
                        attributes: {
                            X: a.X
                        }
                    })
                }
                constructor(a, b) {
                    super();
                    this.e = a;
                    this.Tb = b;
                    this.create = aVc( (c, d, e) => {
                        d = new cVc(d);
                        switch (c.type) {
                        case "rect":
                            var f = {
                                fill: XZ(this, c.fill, d),
                                stroke: c.stroke
                            };
                            const {stroke: l, ...m} = f;
                            f = this.e.classes.E4;
                            var g = f.create
                              , h = {
                                ...m,
                                ...c_(c),
                                stroke: YZ(l ? __c.qO.create(l) : void 0)
                            };
                            c = {
                                ...TZ(c, e),
                                top: VZ(this, a_(d, c.top, c.Qa.top)),
                                left: VZ(this, a_(d, c.left, c.Qa.left)),
                                X: c.X
                            };
                            return g.call(f, {}, {
                                O: h,
                                attributes: c
                            });
                        case "shape":
                            f = this.e.classes.F4;
                            g = f.create;
                            h = {
                                ...c_(c)
                            };
                            var k = {
                                ...IUc(this, c, d),
                                resizeMode: c.resizeMode && this.e.classes.qHa.create({}, {
                                    attributes: {
                                        minBlockSize: c.resizeMode.minBlockSize
                                    }
                                })
                            };
                            h = {
                                ...h,
                                ...k
                            };
                            c = {
                                ...TZ(c, e),
                                top: VZ(this, a_(d, c.top, c.Qa.top)),
                                left: VZ(this, a_(d, c.left, c.Qa.left)),
                                width: VZ(this, WZ(d, c.width, c.Qa.width)),
                                height: VZ(this, WZ(d, c.height, c.Qa.height)),
                                Pi: c.Pi,
                                viewBox: c.viewBox
                            };
                            return g.call(f, {}, {
                                O: h,
                                attributes: c
                            });
                        case "text":
                            f = {
                                ...QUc(this, c, d),
                                Je: c.Je
                            };
                            const {Je: n, ...p} = f;
                            f = this.e.classes.G4;
                            g = f.create;
                            h = {
                                ...p,
                                ...c_(c),
                                Je: YZ(n ? __c.iD.create(n) : void 0)
                            };
                            k = {
                                ...TZ(c, e)
                            };
                            c = {
                                ...TZ(c, e),
                                top: VZ(this, a_(d, c.top, c.Qa.top)),
                                left: VZ(this, a_(d, c.left, c.Qa.left)),
                                wh: c.wh,
                                Ff: c.Ff,
                                writingMode: c.writingMode,
                                placeholder: c.placeholder,
                                width: VZ(this, WZ(d, c.width, c.Qa.width)),
                                height: VZ(this, WZ(d, c.height, c.Qa.height)),
                                K: VZ(this, WZ(d, c.K, c.Qa.K, !0)),
                                P: VZ(this, WZ(d, c.P, c.Qa.P, !0)),
                                im: VZ(this, UUc(d, c.im, c.Qa.im))
                            };
                            return g.call(f, {}, {
                                O: h,
                                attributes: {
                                    ...k,
                                    ...c
                                }
                            });
                        case "grid":
                            return f = this.e.classes.$pa,
                            g = f.create,
                            h = {
                                ...c_(c),
                                ...SUc(this, c, d)
                            },
                            c = {
                                ...TZ(c, e),
                                top: VZ(this, a_(d, c.top, c.Qa.top)),
                                left: VZ(this, a_(d, c.left, c.Qa.left)),
                                layout: c.layout
                            },
                            g.call(f, {}, {
                                O: h,
                                attributes: c
                            });
                        case "line":
                            return $Uc(this, c, d, e);
                        case "chart":
                            return __c.HI.create({
                                ...c,
                                locked: !0,
                                fg: !0,
                                Od: void 0
                            });
                        default:
                            throw Error(`Unexpected element type: ${c.type}`);
                        }
                    }
                    );
                    this.OQb = (c, d) => this.e.classes.$Ga.create({
                        media: c.media
                    }, {
                        O: {
                            filter: c.filter
                        },
                        attributes: {
                            Um: this.e.GP({
                                get: () => c.Um,
                                set: e => d({
                                    Um: e
                                })
                            }),
                            eb: this.e.GP({
                                get: () => c.eb,
                                set: e => d({
                                    eb: e
                                })
                            }),
                            La: this.e.GP({
                                get: () => c.La,
                                set: e => d({
                                    La: e
                                })
                            }),
                            ma: c.ma,
                            mc: c.mc
                        }
                    });
                    this.PQb = (c, d) => this.e.classes.BHa.create({
                        video: c.video
                    }, {
                        O: {
                            IA: c.IA,
                            filter: c.filter,
                            Hd: c.Hd,
                            Ah: c.Ah
                        },
                        attributes: {
                            eb: this.e.GP({
                                get: () => c.eb,
                                set: e => d({
                                    eb: e
                                })
                            }),
                            ma: this.e.GP({
                                get: () => c.ma,
                                set: e => d({
                                    ma: e
                                })
                            }),
                            La: this.e.GP({
                                get: () => c.La,
                                set: e => d({
                                    La: e
                                })
                            }),
                            autoplay: this.e.GP({
                                get: () => c.autoplay,
                                set: e => d({
                                    autoplay: e
                                })
                            }),
                            playbackRate: this.e.GP({
                                get: () => c.playbackRate,
                                set: e => d({
                                    playbackRate: e
                                })
                            }),
                            trim: c.trim,
                            tv: c.tv,
                            mc: c.mc
                        }
                    })
                }
            }
            ;
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/ce9b8e1d7d0fc3bd.js.map
