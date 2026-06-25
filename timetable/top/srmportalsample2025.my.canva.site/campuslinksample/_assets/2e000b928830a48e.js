(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[67408], {

    /***/
    540811: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(148454);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var nCd = function(a) {
                switch (a) {
                case 1:
                    return "start";
                case 3:
                    return "end";
                case 2:
                    return "end";
                default:
                    throw new __c.z(a);
                }
            }
              , oCd = function(a) {
                switch (a ?? 3) {
                case 1:
                    return "DWQUAA";
                case 2:
                    return "PgY8Eg"
                }
            }
              , pCd = __webpack_require__(296713)
              , qCd = pCd.Fragment
              , r7 = pCd.jsx
              , s7 = pCd.jsxs;
            var rCd = __webpack_require__
              , sCd = rCd(208463)
              , t7 = rCd.n_x(sCd)();
            var u7 = __webpack_require__(613814).PA;
            var v7 = __webpack_require__(978109)
              , tCd = v7.useCallback
              , uCd = v7.useEffect
              , vCd = v7.useMemo
              , wCd = v7.useState;
            var xCd = __webpack_require__(601944).A;
            var yCd = __webpack_require__(1193).sH;
            var zCd = __webpack_require__.p + "images/87e22a62965f141aa08e93699b0b3527.jpg";
            var ACd = ({size: a, color: b}) => r7("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                width: a,
                height: a,
                children: r7("path", {
                    fill: b,
                    d: "M4 6a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6Zm0 6a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 12Zm.75 5.25a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H4.75Z"
                })
            });
            var BCd = ({size: a, color: b}) => r7("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: a,
                height: a,
                children: r7("path", {
                    d: "M6,6 L18,18 M6,18 L18,6",
                    stroke: b,
                    strokeLinecap: "round",
                    strokeWidth: "1.5"
                })
            });
            var CCd = class {
                static G(a) {
                    __c.N(a, {
                        bfb: yCd.ref
                    })
                }
                constructor() {
                    this.bfb = (CCd.G(this),
                    void 0)
                }
            }
              , DCd = u7(function({V: a, AZ: b, Jd: c, xWa: d, Ifa: e}) {
                const f = b.zjb
                  , g = b.links
                  , h = b.Sb;
                return s7(qCd, {
                    children: [a.filter(k => !k.Sxa && !f?.some(l => l.id === k.id)).map( (k, l) => {
                        var m = t7("Bs7tyA", {
                            oiIpEw: k.id != null && k.id === e
                        }), n = c.NX, p = `#page-${k.id}`, q = c.wi, r = __c.km.create, t = __c.vj.rb().attrs(h), w = t.ib, v;
                        (v = k.title) || (k = k.iK() + 1,
                        v = __c.dc("F7NnQw", [k]));
                        return r7("div", {
                            className: m,
                            children: r7(n, {
                                link: p,
                                HFa: !1,
                                onClick: d,
                                children: r7(q, {
                                    text: r.call(__c.km, {
                                        ...__c.jD,
                                        stream: __c.Ri(w.call(t, v)).build()
                                    })
                                })
                            })
                        }, l)
                    }
                    ), g?.toArray().map( (k, l) => r7("div", {
                        className: t7("Bs7tyA", {
                            oiIpEw: k.type === "page" && k.Ax.id != null && k.Ax.id === e
                        }),
                        children: r7(c.NX, {
                            link: k.type === "url" ? k.url : `#page-${k.Ax.id}`,
                            HFa: !1,
                            onClick: d,
                            children: r7(c.wi, {
                                text: __c.km.create({
                                    ...__c.jD,
                                    stream: __c.Ri(__c.vj.rb().attrs(h).ib(k.label || __c.dc("JrpeNQ", [l + 1]))).build()
                                })
                            })
                        })
                    }, l))]
                })
            })
              , ECd = u7(function({ox: a, ec: b, Jd: c, height: d, local: e, l_b: f, f_b: g}) {
                if (!a.ref)
                    return null;
                const h = a.ref.image?.ref != null;
                if (!h && g)
                    return null;
                g = a.ref.image?.ref?.media;
                b = (b = (g ? b?.k8(g) : void 0)?.M) && b.height > 0 ? b.width / b.height : 1;
                e = e.bfb;
                f = f ? `#page-${f}` : void 0;
                a = e ? r7("img", {
                    className: "JwCj3Q",
                    src: e,
                    alt: "",
                    style: {
                        height: `${d}px`
                    }
                }) : h ? r7("div", {
                    className: "QQpUvg",
                    style: {
                        height: `${d}px`,
                        width: `${d * b}px`
                    },
                    children: r7(c.ih, {
                        fill: a.ref
                    })
                }) : r7("img", {
                    className: "vZdKmQ",
                    src: zCd,
                    alt: "",
                    style: {
                        height: `${d}px`,
                        width: `${d}px`
                    }
                });
                return s7("div", {
                    className: "NNsrcw",
                    children: [r7(c.NX, {
                        link: f,
                        HFa: !1,
                        children: a
                    }), r7(c.JR, {
                        children: r7("div", {
                            className: "ODkVNA"
                        })
                    })]
                })
            })
              , FCd = u7(function({AZ: a, V: b, Ifa: c, Jd: d, onClose: e, Vw: f}) {
                var g = a.Sb;
                const h = g.color ?? "#000000";
                g = Math.max(30, (g["font-size"] ?? 16) * 1.5);
                return s7("div", {
                    className: "Ptmqpw",
                    children: [r7("div", {
                        className: "zDdLvA",
                        children: r7(d.ih, {
                            fill: a.background
                        })
                    }), r7("div", {
                        className: t7("n1tVzA", oCd(f)),
                        children: r7("button", {
                            type: "button",
                            onClick: e,
                            className: "E99E4w",
                            "aria-label": __c.L("oJhC7Q"),
                            children: r7(BCd, {
                                size: g,
                                color: h
                            })
                        })
                    }), r7(DCd, {
                        V: b,
                        AZ: a,
                        Jd: d,
                        xWa: e,
                        Ifa: c
                    })]
                })
            })
              , GCd = u7(function({AZ: a, local: b, page: c, Lb: d, On: e, jl: f, Jd: g, ec: h, Bg: k}) {
                const l = f?.eTb
                  , m = d > 10
                  , n = c.container.type === "fixed" ? c.container.V : void 0
                  , p = c.id
                  , q = a.background;
                c = a.Sb;
                const r = a.ox
                  , t = a.Vw;
                d = a.mmb;
                const [w,v,A,B] = a.padding ?? [10, 0, 10, 0]
                  , [C,E] = wCd(void 0)
                  , [I,J] = wCd(void 0)
                  , [M,O] = wCd(void 0);
                f = t === 2 ? Math.max(M ?? 0, I ?? 0) : (M ?? 0) + (I ?? 0);
                const R = C != null && I != null && C < f;
                uCd( () => {
                    R || l?.kLa()
                }
                , [R, l]);
                const S = c.color ?? "#000000"
                  , Q = Math.max(30, (c["font-size"] ?? 16) * 1.5)
                  , U = {
                    gap: `${d ?? 24}px`,
                    minHeight: `${Q}px`
                }
                  , X = vCd( () => ({
                    V: n ?? [],
                    AZ: a,
                    Jd: g
                }), [n, a, g])
                  , aa = la => {
                    J(la.client?.width)
                }
                  , ha = la => {
                    O(la.client?.width)
                }
                  , fa = tCd( () => {
                    e ? k?.CA({
                        MB: __c.L("QQfsZg")
                    }) : l && l.R9b(r7(FCd, {
                        AZ: a,
                        V: n ?? [],
                        Ifa: p,
                        Jd: g,
                        onClose: () => l.kLa(),
                        Vw: t ?? 3
                    }), {
                        direction: nCd(t ?? 3)
                    })
                }
                , [l, a, n, p, g, e, k, t]);
                return r7(xCd, {
                    client: !0,
                    onResize: la => {
                        E(la.client?.width)
                    }
                    ,
                    children: ({measureRef: la}) => s7("div", {
                        ref: la,
                        className: "lF7uXA",
                        children: [r7("div", {
                            className: "zDdLvA",
                            children: r7(g.ih, {
                                fill: q
                            })
                        }), s7("div", {
                            className: t7("feq0Iw", oCd(t)),
                            style: {
                                paddingTop: `${w}px`,
                                paddingRight: `${v}px`,
                                paddingBottom: `${A}px`,
                                paddingLeft: `${B}px`
                            },
                            children: [r7(xCd, {
                                client: !0,
                                onResize: ha,
                                children: ({measureRef: xa}) => r7("div", {
                                    ref: xa,
                                    className: "jVyCGg",
                                    children: r7(ECd, {
                                        ox: r,
                                        ec: h,
                                        Jd: g,
                                        height: Q,
                                        local: b,
                                        l_b: n?.find(za => !za.Sxa)?.id,
                                        f_b: !e
                                    })
                                })
                            }), r7("div", {
                                className: "ZEXSXQ",
                                "aria-hidden": !0,
                                inert: !0,
                                children: r7(xCd, {
                                    client: !0,
                                    onResize: aa,
                                    children: ({measureRef: xa}) => r7("div", {
                                        ref: xa,
                                        className: "k5SgIw",
                                        style: U,
                                        children: r7(DCd, {
                                            ...X,
                                            Ifa: p
                                        })
                                    })
                                })
                            }), !R && r7("div", {
                                className: "k5SgIw",
                                style: U,
                                children: r7(DCd, {
                                    ...X,
                                    Ifa: p
                                })
                            }), R && (e || !m || l != null) && r7("button", {
                                type: "button",
                                onClick: fa,
                                className: "E99E4w",
                                "aria-label": __c.L("PU3RVw"),
                                children: r7(ACd, {
                                    size: Q,
                                    color: S
                                })
                            })]
                        })]
                    })
                })
            });
            var HCd;
            HCd = __c.ry()( ({Ly: a, ig: b}) => ({
                ...__c.WU,
                BD: () => new CCd,
                metadata: {
                    type: "navigation_menu",
                    name: __c.L("PU3RVw")
                },
                C: __c.qy(u7( ({data: {document: c, local: d}, Ma: {page: e, Lb: f, On: g, jl: h}, Jd: k}) => r7(GCd, {
                    AZ: c,
                    local: d,
                    page: e,
                    Lb: f,
                    On: g,
                    jl: h,
                    Jd: k,
                    ec: b.ec,
                    Bg: a.Bg
                }))),
                KJ: ["responsive", "email", "controlled", "fixed"]
            }));
            __c.wld = {};
            __c.wld.jrc = CCd;
            __c.wld.Sk = HCd;
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/2e000b928830a48e.js.map
