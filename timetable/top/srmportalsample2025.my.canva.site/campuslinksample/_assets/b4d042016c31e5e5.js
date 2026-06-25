(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[70386], {

    /***/
    76997: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(148454);
        __web_req__(778307);
        const __d = (i, n) => __web_req__.me(i).then(n);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var Aa = __c.Aa;
            var N = __c.N;
            var dc = __c.dc;
            var x = __c.x;
            var L = __c.L;
            var Zh = __c.Zh;
            var km = __c.km;
            var SZ = __c.SZ;
            var z = __c.z;
            var Sk = __c.Sk;
            var Rk = __c.Rk;
            var oyd = function() {
                var a = __c.vj;
                return a.domain.rb(a.fa)
            }
              , pyd = function(a, b) {
                return c => {
                    c = a(c);
                    if (typeof c === "boolean")
                        return c ? Rk() : Sk(b);
                    switch (c.state) {
                    case "valid":
                        return c;
                    case "invalid":
                        return Sk(b);
                    default:
                        throw new z(c);
                    }
                }
            }
              , qyd = function(a) {
                return b => {
                    for (const e of a) {
                        var c = e
                          , d = b;
                        c = (Array.isArray(c) ? pyd(...c) : c)(d);
                        c = typeof c === "boolean" ? c ? Rk() : Sk() : c.state === "invalid" && c.error == null ? Sk() : c;
                        if (c.state === "invalid")
                            return c
                    }
                    return Rk()
                }
            }
              , ryd = function(a, b) {
                switch (a.status) {
                case 1:
                    return b.RE ? {
                        status: 1,
                        data: b.RE(a.data)
                    } : a;
                case 2:
                    return a;
                case 3:
                    return b.error ? SZ(b.error(a.error)) : a;
                default:
                    throw new z(a);
                }
            }
              , C6 = function(a, b) {
                const c = b.RE
                  , d = b.loading
                  , e = b.error;
                switch (a.status) {
                case 1:
                    return c ? c(a.data) : b.default?.();
                case 2:
                    return d ? d() : b.default?.();
                case 3:
                    return e ? e(a.error) : b.default?.();
                default:
                    throw new z(a);
                }
            }
              , syd = function(a) {
                if (a.status === 1)
                    return a.data
            }
              , D6 = function(a) {
                const b = a.color;
                a = a.Ha;
                return b ? b : a.ref ? a.ref.Vc[0].color : "#ffffff"
            }
              , E6 = function(a, b, c) {
                if (b)
                    switch (b.BG) {
                    case "required":
                        return a.xPa();
                    case "unknown_option_id":
                        return a.EPa();
                    case "invalid_format":
                        return c.type === 5 ? a.sPa() : a.rPa();
                    case "invalid_email":
                        return a.qPa();
                    case "out_of_bounds":
                        switch (c?.type) {
                        case 4:
                            return b.params.exact != null ? a.BPa(b.params.exact) : b.params.q5 != null ? a.DPa(b.params.q5) : a.CPa(b.params.lJa);
                        case 1:
                        case 2:
                        case 3:
                            return b.params.exact != null ? a.yPa(b.params.exact) : b.params.q5 != null ? a.APa(b.params.q5) : a.zPa(b.params.lJa);
                        case 5:
                            return b.params.exact != null ? a.uPa(b.params.exact) : b.params.q5 != null ? a.wPa(b.params.q5) : a.vPa(b.params.lJa);
                        default:
                            throw new z(c);
                        }
                    default:
                        throw new z(b);
                    }
            }
              , tyd = function(a) {
                a = {
                    ...__c.jD,
                    stream: __c.vj.rb().attrs(a.stream.Dk(0)).ib(a.stream.da.trim() + "*\n").build()
                };
                return km.create(a)
            }
              , zyd = function(a) {
                const b = a.TTa
                  , c = a.gridGap
                  , [d,e] = uyd(0)
                  , f = vyd.count(a.children)
                  , g = b * f + c * (f - 1)
                  , h = wyd(null);
                xyd( () => {
                    h.current && e(h.current.offsetWidth)
                }
                , []);
                return F6(yyd, {
                    onResize: k => e(k.entry?.width ?? 0),
                    children: ({measureRef: k}) => F6("div", {
                        ref: __c.ce(k, h),
                        className: "lLyTrw",
                        style: {
                            "--7BjzEw": `${b}px`,
                            "--W5t64A": g > d ? 1 : f,
                            "--CEwLjw": `${c}px`
                        },
                        children: a.children
                    })
                })
            }
              , Ayd = function({size: a}) {
                return F6("svg", {
                    "aria-hidden": "true",
                    width: a,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: F6("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M20.6592 18.1181L13.7952 4.14664C13.6002 3.74964 13.279 3.42849 12.882 3.23346C11.8907 2.7464 10.6921 3.15525 10.2051 4.14664L3.34116 18.1181C3.20634 18.3925 3.13623 18.6942 3.13623 19C3.13623 20.1045 4.03166 21 5.13623 21H18.8641C19.1698 21 19.4715 20.9298 19.746 20.795C20.7374 20.308 21.1462 19.1095 20.6592 18.1181ZM12.2206 4.57976C12.3199 4.62852 12.4002 4.7088 12.4489 4.80805L19.3129 18.7795C19.4346 19.0273 19.3324 19.327 19.0846 19.4487C19.0159 19.4824 18.9405 19.5 18.8641 19.5H5.13623C4.86009 19.5 4.63623 19.2761 4.63623 19C4.63623 18.9235 4.65376 18.8481 4.68746 18.7795L11.5514 4.80805C11.6732 4.56021 11.9728 4.45799 12.2206 4.57976ZM12.0001 18.25C12.6905 18.25 13.2501 17.6903 13.2501 17C13.2501 16.3096 12.6905 15.75 12.0001 15.75C11.3098 15.75 10.7501 16.3096 10.7501 17C10.7501 17.6903 11.3098 18.25 12.0001 18.25ZM13.0001 9.99995C13.0001 9.44767 12.5524 8.99995 12.0001 8.99995C11.4479 8.99995 11.0001 9.44767 11.0001 9.99995V13.5C11.0001 14.0522 11.4479 14.5 12.0001 14.5C12.5524 14.5 13.0001 14.0522 13.0001 13.5V9.99995Z",
                        fill: "#db142c"
                    })
                })
            }
              , Cyd = function({checked: a, color: b, v$a: c, size: d, aLa: e=10, $Ka: f=8, className: g}) {
                return F6("div", {
                    className: G6("GJ0_8Q", a && "GvR5sw", g),
                    style: {
                        "--5Yj7mg": b,
                        "--3ukD3Q": a ? Byd(c, e, f) : "none",
                        "--_3Dojw": `${d}px`
                    }
                })
            }
              , Byd = function(a, b=10, c=8) {
                a = encodeURIComponent(a);
                return `url("data:image/svg+xml,%3Csvg width='${b}' height='${c}' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.75 4.5L3.25 7L9.25 1' stroke='${a}' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`
            }
              , Gyd = function(a) {
                const b = a.tVb
                  , c = a.CE
                  , d = a.KH
                  , e = a.Hk
                  , f = a.gr
                  , [g,h,k] = H6( () => {
                    switch (b) {
                    case 4:
                    case 2:
                        return ["#e3fff0", "#00873d", Dyd];
                    case 3:
                        return ["#ffd9df", "#c8001e", Eyd];
                    case 1:
                        return [c.Cp, d.Cp];
                    case 0:
                        return e ? [c.selected, d.selected] : f === 3 || f === 2 ? [c.Cp, d.Cp] : [c.default];
                    default:
                        throw new z(b);
                    }
                }
                , [b, c.Cp, c.selected, c.default, d.Cp, d.selected, e, f])
                  , l = b === 0 || b === 1;
                return F6(Fyd, {
                    ...a,
                    yb: k,
                    D8: a.ZCa === "s" ? void 0 : e ? d.selected : d.default,
                    XTa: h,
                    backgroundColor: {
                        default: g,
                        Ei: l ? c.Ei : g,
                        active: l ? c.active : g,
                        selected: l ? c.selected : g
                    },
                    e_b: !!k
                })
            }
              , Fyd = function(a) {
                const b = a.eWb
                  , c = a.backgroundColor
                  , d = a.XTa
                  , e = a.X
                  , f = a.Hk
                  , g = a.label
                  , h = a.KJb
                  , k = a.onChange;
                var l = a.ZCa;
                const m = a.gr
                  , n = a.Zsb
                  , p = a.Zfc
                  , q = a.yb
                  , r = a.D8
                  , t = a.e_b
                  , w = a.WJ
                  , v = a.Y9b
                  , A = a.$Ka
                  , B = a.aLa
                  , C = a.ZKa;
                a = a.fd;
                const E = I6()
                  , I = I6()
                  , J = I6()
                  , M = wyd(null)
                  , O = wyd(null)
                  , R = l === "s" ? "radio" : "checkbox";
                l = H6( () => {
                    var Q = g.stream.Zu(0);
                    const U = Zh(Q, "font-size") * Hyd
                      , X = J6("100%", {
                        ...Q,
                        "font-weight": "bold",
                        "font-size": U
                    });
                    Q = n !== void 0 ? J6(`${n.value}%`, {
                        ...Q,
                        "font-weight": "bold",
                        color: n.ne,
                        "font-size": U
                    }) : void 0;
                    return {
                        wgc: X,
                        x7a: Q
                    }
                }
                , [n, g]);
                const S = m === 0;
                return K6("div", {
                    className: G6("VTAQRg", !(f || n) && "zt5zlQ", S && "A_ugOA", (m === 2 || m === 3) && "zMViSA", f && "Buj71Q"),
                    style: {
                        "--_v6jRQ": c.default,
                        "--CGAV4g": c.selected,
                        "--6wmixw": c.Ei,
                        "--LX33kQ": c.active,
                        "--T5edVA": `${e}px`,
                        "--XYYx_A": `${a / 2}px`,
                        padding: `${v}px`,
                        gap: p ? `${v / 2}px` : "0"
                    },
                    onClick: S ? Q => {
                        O.current?.contains(Q.target) || M.current?.contains(Q.target) || M.current?.click()
                    }
                    : void 0,
                    children: [F6("input", {
                        "aria-invalid": !!w,
                        "aria-checked": f,
                        "aria-labelledby": q ? I : void 0,
                        "aria-describedby": n || w ? `${n ? J : ""} ${w || ""}`.trim() : void 0,
                        id: E,
                        name: b,
                        readOnly: m === 2,
                        disabled: m === 3,
                        type: R,
                        value: g.stream.da,
                        className: "EP8SeA",
                        onChange: S ? k : void 0,
                        onClick: S ? Q => {
                            R === "radio" && f && (Q.preventDefault(),
                            k())
                        }
                        : void 0,
                        checked: f,
                        ref: M
                    }), !!p && n !== void 0 && F6("div", {
                        className: "GpAzFg",
                        role: "meter",
                        "aria-valuenow": n.value,
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "data-percent": n.value,
                        style: {
                            width: `${n.value}%`,
                            "--60vMXA": n.GMb
                        }
                    }), K6("label", {
                        className: G6("rSeRzQ", q && "zSZK5w", R === "checkbox" && "bHM4Bw"),
                        htmlFor: E,
                        ref: O,
                        children: [!t && R === "checkbox" && F6("div", {
                            className: "n4ooaw",
                            style: {
                                "--KBfK1Q": `${C}px`
                            },
                            children: F6(Cyd, {
                                checked: f,
                                color: r ?? "inherit",
                                v$a: c.selected,
                                size: C,
                                aLa: B,
                                $Ka: A
                            })
                        }), F6(h, {
                            text: d ? Iyd(g, d) : g
                        })]
                    }), !!p && K6("div", {
                        className: "kdZGyA",
                        children: [F6("div", {
                            className: "jptFCw",
                            "aria-hidden": "true",
                            children: F6(h, {
                                text: l.wgc
                            })
                        }), l.x7a && F6("div", {
                            id: J,
                            className: "wTQg_g",
                            children: F6(h, {
                                text: l.x7a
                            })
                        })]
                    }), q && F6(q, {
                        id: I,
                        size: a
                    })]
                })
            }
              , Jyd = function(a) {
                return F6("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: a.size,
                    height: a.size,
                    "data-testid": L6.sWb,
                    children: F6("path", {
                        d: "M10.5086 3.2223C11.0966 1.95168 12.9027 1.95168 13.4906 3.2223L15.3964 7.34106C15.5158 7.5992 15.7603 7.77718 16.0427 7.81153L20.546 8.35932C21.9319 8.52791 22.4892 10.2389 21.4683 11.1914L18.1397 14.297C17.9325 14.4903 17.8396 14.7768 17.8939 15.055L18.7667 19.5241C19.0347 20.8967 17.5744 21.9552 16.3533 21.2734L12.4001 19.0659C12.1512 18.9269 11.8481 18.9269 11.5992 19.0659L7.64594 21.2734C6.42485 21.9552 4.96453 20.8967 5.23259 19.5241L6.10534 15.055C6.15967 14.7768 6.06675 14.4903 5.85952 14.297L2.53093 11.1914C1.5101 10.2389 2.06735 8.52791 3.45329 8.35932L7.95656 7.81153C8.23892 7.77718 8.48342 7.5992 8.60286 7.34106L10.5086 3.2223Z",
                        fill: a.color
                    })
                })
            }
              , Kyd = function(a) {
                return F6("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: a.size,
                    height: a.size,
                    "data-testid": L6.j$b,
                    children: F6("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M14.0351 7.97096L12.1293 3.8522C12.1091 3.80853 12.0904 3.79555 12.08 3.78921C12.0636 3.77925 12.0359 3.76933 11.9996 3.76933C11.9634 3.76933 11.9357 3.77925 11.9193 3.78921C11.9089 3.79555 11.8902 3.80853 11.87 3.8522L9.9642 7.97095C9.62663 8.7005 8.93567 9.20348 8.13769 9.30055L3.63442 9.84834C3.58694 9.85412 3.5688 9.86784 3.55948 9.87586C3.54493 9.88838 3.527 9.91162 3.51583 9.94591C3.50467 9.98021 3.50547 10.0095 3.50986 10.0282C3.51267 10.0402 3.51924 10.062 3.55421 10.0946L6.8828 13.2002C7.46846 13.7466 7.73106 14.5564 7.57754 15.3425L6.70478 19.8116C6.69558 19.8587 6.70308 19.8802 6.70782 19.8915C6.71525 19.9092 6.73186 19.9334 6.76115 19.9546C6.79044 19.9759 6.81867 19.9841 6.83778 19.9857C6.84998 19.9867 6.87273 19.9871 6.91464 19.9637L10.8678 17.7563C11.5713 17.3635 12.428 17.3635 13.1314 17.7563L17.0846 19.9637C17.1265 19.9871 17.1493 19.9867 17.1615 19.9857C17.1806 19.9841 17.2088 19.9759 17.2381 19.9546C17.2674 19.9334 17.284 19.9092 17.2914 19.8915C17.2962 19.8802 17.3037 19.8587 17.2945 19.8116L16.4217 15.3425C16.2682 14.5564 16.5308 13.7466 17.1165 13.2002L20.445 10.0946C20.48 10.062 20.4866 10.0402 20.4894 10.0282C20.4938 10.0095 20.4946 9.98021 20.4834 9.94591C20.4723 9.91162 20.4543 9.88838 20.4398 9.87586C20.4305 9.86784 20.4123 9.85412 20.3648 9.84834L15.8616 9.30055C15.0636 9.20348 14.3726 8.7005 14.0351 7.97096ZM13.4906 3.2223C12.9027 1.95168 11.0966 1.95168 10.5086 3.2223L8.60286 7.34105C8.48342 7.5992 8.23892 7.77718 7.95656 7.81153L3.45329 8.35932C2.06735 8.52791 1.5101 10.2389 2.53093 11.1914L5.85952 14.297C6.06675 14.4903 6.15967 14.7768 6.10534 15.055L5.23259 19.5241C4.96453 20.8967 6.42486 21.9552 7.64595 21.2734L11.5992 19.0659C11.8481 18.9269 12.1512 18.9269 12.4001 19.0659L16.3533 21.2734C17.5744 21.9552 19.0347 20.8967 18.7667 19.5241L17.8939 15.055C17.8396 14.7768 17.9325 14.4903 18.1397 14.297L21.4683 11.1914C22.4892 10.2389 21.9319 8.52791 20.546 8.35932L16.0427 7.81153C15.7603 7.77718 15.5158 7.5992 15.3964 7.34106L13.4906 3.2223Z",
                        fill: a.color
                    })
                })
            }
              , Lyd = function(a, b, c) {
                b ??= 0;
                if (c != null && (c > b && a > b && a <= c || c < b && a > c && a <= b))
                    return "hover";
                if (a <= b)
                    return "selected"
            }
              , Myd = function(a) {
                switch (a) {
                case 1:
                    return "email";
                case 2:
                    return "text";
                default:
                    throw new z(a);
                }
            }
              , M6 = function(a) {
                var b = a.oj;
                a = a.footer.ne;
                var c = b.fontFamily;
                a: switch (b = b.direction,
                b) {
                case "l":
                    b = "ltr";
                    break a;
                case "r":
                    b = "rtl";
                    break a;
                default:
                    throw new z(b);
                }
                return {
                    color: a,
                    "font-family": c,
                    "text-align": "center",
                    direction: b
                }
            }
              , N6 = function(a, b, c, d=!1) {
                switch (a) {
                case 0:
                case 1:
                    switch (b) {
                    case 0:
                        return d ? c.AKa() : c.e5a();
                    case 1:
                        return d ? c.BKa() : c.d5a();
                    case 2:
                        return c.loading();
                    default:
                        throw new z(b);
                    }
                case 2:
                    return c.offline();
                case 3:
                    return c.loading();
                case 4:
                    return c.tPa();
                case 5:
                    return c.g2a();
                case 6:
                    return c.BCa();
                default:
                    throw new z(a);
                }
            }
              , Oyd = function(a) {
                const b = Nyd(a, a.document.language ?? "en")
                  , c = O6(d => {
                    a.w3 = d
                }
                );
                b instanceof Promise ? b.then(P6.wrap(c), P6.wrap( () => c({}))) : c(b)
            }
              , Q6 = function(a, b, c, d) {
                b = a.w3?.[b];
                d?.length ? b ? (a = a.document.language,
                d = (new __c.fc(b,a ? __c.dca(a) : void 0,__c.eca,{
                    ignoreTag: !0
                })).format(Object.fromEntries(Object.entries(d)))) : d = c(...d) : d = b || c();
                return d
            }
              , Nyd = async function(a, b) {
                const c = R6()();
                try {
                    try {
                        const {w3: d} = c.r(await c.s(a.tlc ?? (a.tlc = __d(306726, () => __c.Pyd))));
                        return JSON.parse(d)[b] ?? {}
                    } catch {
                        return c.r(),
                        {}
                    }
                } finally {
                    c.s()
                }
            }
              , Qyd = function(a, b) {
                return a.length === b.length && a.every(c => b.includes(c))
            }
              , Tyd = function(a, b) {
                switch (a.type) {
                case 0:
                    var c = Ryd(a.options, a.g_a);
                    if (!c.length)
                        return {
                            d7: "",
                            W_: []
                        };
                    a = Ryd(b, a.g_a);
                    return {
                        d7: c.map( ({label: d}) => d).join(", "),
                        W_: a.map( ({id: d}) => d)
                    };
                case 2:
                case 1:
                    return c = Syd(b, a.value),
                    {
                        d7: a.value,
                        W_: c ? [c.id] : []
                    };
                default:
                    throw new z(a);
                }
            }
              , Uyd = function(a) {
                switch (a.type) {
                case 0:
                    return a = Ryd(a.options, a.g_a).map( ({label: b}) => b).join(", "),
                    {
                        d7: a,
                        W_: a
                    };
                case 2:
                case 1:
                    return {
                        d7: a.value,
                        W_: a.value
                    };
                default:
                    throw new z(a);
                }
            }
              , Ryd = function(a, b) {
                const c = [];
                for (const d of a)
                    b.includes(d.id) && c.push(d);
                return c
            }
              , Syd = function(a, b) {
                for (const c of a)
                    if (c.label.trimEnd() === b)
                        return c
            }
              , Wyd = function(a) {
                const {min: b=0, max: c=Infinity} = a;
                if (b !== 0 || c !== Infinity) {
                    var d = Vyd({
                        min: b,
                        max: c
                    });
                    if (d)
                        return ({length: e}) => d(e)
                }
            }
              , Vyd = function(a) {
                const {min: b=-Infinity, max: c=Infinity} = a;
                if (b !== -Infinity || c !== Infinity)
                    return d => {
                        if (b === c) {
                            if (d !== b)
                                return Sk({
                                    BG: "out_of_bounds",
                                    params: {
                                        exact: b
                                    }
                                })
                        } else {
                            if (d < b)
                                return Sk({
                                    BG: "out_of_bounds",
                                    params: {
                                        q5: b
                                    }
                                });
                            if (d > c)
                                return Sk({
                                    BG: "out_of_bounds",
                                    params: {
                                        lJa: c
                                    }
                                })
                        }
                        return Rk()
                    }
            }
              , Xyd = function(a) {
                return a === void 0 ? 1 : a === 0 ? Infinity : a
            }
              , azd = function(a, b, c) {
                switch (a.type) {
                case "select":
                    return new Yyd(a,b,c);
                case "text":
                    return new Zyd(a,b,c);
                case "number":
                    return new $yd(a,b,c);
                default:
                    throw new z(a);
                }
            }
              , T6 = function(a, b, c) {
                let d = a.TPa.get(b);
                const e = a.form.fields.first( ({id: f}) => f === b);
                if (!e)
                    throw Error(`Field ${b} is not found`);
                if (c != null && e.type !== c)
                    throw Error(`Field ${b} is not the expected type (${c})`);
                d && d.Md === e || (c = S6( () => a.wQa.get()?.getContext(a.form.id)?.Pzc?.get(b) ?? a.SPa.get(b)),
                d = azd(e, a.context, c),
                a.TPa.set(b, d));
                return d
            }
              , bzd = function(a) {
                if (a.WL)
                    return a.D9.get()?.fields.get(a.form.fields.first().id ?? "")?.total ?? 0
            }
              , dzd = function(a) {
                if (!czd(a, "q"))
                    return 0;
                const b = a.form.fields.first().id ?? ""
                  , c = T6(a, b, "select");
                a = a.SPa.get(b);
                return a?.HN == null ? 0 : Qyd(c.sM, a.HN) ? 2 : 1
            }
              , gzd = function(a) {
                let b;
                ezd(a.D9, () => {
                    b = a.yO?.TDc({
                        bBc: () => a.form.Gv
                    }).subscribe(c => {
                        U6( () => {
                            a.D9.set(c.results)
                        }
                        )
                    }
                    )
                }
                );
                fzd(a.D9, () => {
                    b?.unsubscribe()
                }
                )
            }
              , czd = function(a, b) {
                if (a.form.fields.count() !== 1)
                    return !1;
                const c = a.form.fields.first();
                return c.type === "select" && (c.variant?.type === b || c.variant?.type === void 0 && a.form.type === (b === "q" ? "quiz" : "poll"))
            }
              , izd = function(a, {BG: b, Bvb: c}) {
                const d = a.Bg;
                if (d) {
                    switch (b) {
                    case 5:
                        b = L("STZx7Q");
                        break;
                    default:
                        b = L("izckBA")
                    }
                    c = c ? {
                        AS: L("mQhziQ"),
                        onClick: O6( () => void a.submit())
                    } : void 0;
                    d.CA({
                        MB: b,
                        group: hzd,
                        AA: c
                    })
                }
            }
              , jzd = function(a) {
                U6( () => {
                    for (const b of a.TPa.values())
                        b.reset()
                }
                )
            }
              , kzd = function(a) {
                return a.map(b => b.result)
            }
              , lzd = function(a, b) {
                const c = V6(b);
                b = a.Q_.get(c);
                if (a = a.doa.get(c))
                    return {
                        status: 1,
                        data: a
                    };
                switch (b) {
                case void 0:
                case "uninitialized":
                    return SZ();
                case "initializing":
                    return {
                        status: 2
                    };
                case "initialized":
                    return {
                        status: 1,
                        data: a
                    };
                default:
                    throw new z(b);
                }
            }
              , nzd = function(a) {
                return W6( () => {
                    const b = a.formData.mu
                      , c = a.Xm.getSettings(b);
                    return [a.formData.Gv, b, c]
                }
                , async ([b,c,d]) => {
                    const e = R6()();
                    try {
                        if (d.status === 1) {
                            var f = V6({
                                Gv: b,
                                submitter: d.data.f2a
                            })
                              , g = a.Q_.get(f);
                            if (g !== "initialized" && g !== "initializing") {
                                a.Q_.set(f, "initializing");
                                var h = e.r(await e.s(a.yO.$zc({
                                    Gv: b,
                                    mu: c
                                })));
                                U6( () => {
                                    a.Q_.get(f) !== "initialized" && (a.Q_.set(f, "initialized"),
                                    h.ok && h.value && a.doa.set(f, h.value))
                                }
                                )
                            }
                        }
                    } finally {
                        e.s()
                    }
                }
                , {
                    equals: mzd.structural
                })
            }
              , V6 = function(a) {
                return [a.Gv, JSON.stringify(a.submitter)].join(":")
            }
              , ozd = function(a) {
                switch (a) {
                case "l":
                    return "ltr";
                case "r":
                    return "rtl";
                default:
                    throw new z(a);
                }
            }
              , pzd = function(a) {
                return a.some(b => {
                    switch (b.type) {
                    case 4:
                        return !0;
                    case 5:
                        return b.variant === 1;
                    case 1:
                    case 2:
                    case 3:
                        return !1;
                    default:
                        throw new z(b);
                    }
                }
                )
            }
              , rzd = function(a) {
                return new qzd(a.data.C.value,a.Xm)
            }
              , J6 = (a, b) => km.create(__c.u4(a, b))
              , szd = __webpack_require__(296713)
              , tzd = szd.Fragment
              , F6 = szd.jsx
              , K6 = szd.jsxs;
            var X6 = __webpack_require__(613814).PA;
            var Y6 = __webpack_require__(978109)
              , vyd = Y6.Children
              , uzd = Y6.createElement
              , vzd = Y6.memo
              , wzd = Y6.useEffect
              , I6 = Y6.useId
              , xyd = Y6.useLayoutEffect
              , H6 = Y6.useMemo
              , wyd = Y6.useRef
              , uyd = Y6.useState;
            var yyd = __webpack_require__(601944).A;
            var xzd = __webpack_require__
              , yzd = xzd(208463)
              , G6 = xzd.n_x(yzd)();
            var Z6 = __webpack_require__(1193)
              , S6 = Z6.EW
              , U6 = Z6.h5
              , zzd = Z6.L3
              , mzd = Z6.m3
              , W6 = Z6.mJ
              , fzd = Z6.q$
              , $6 = Z6.sH
              , ezd = Z6.tC
              , O6 = Z6.XI;
            var Azd = __webpack_require__(221627)
              , Bzd = Azd.iB
              , a7 = Azd.uP;
            var P6 = __webpack_require__(815703).F;
            var R6 = __webpack_require__(929846)._;
            var Czd = __c.H( () => ({
                JT: __c.W(1),
                quc: __c.pK(2)
            }));
            var Dzd = __c.H( () => ({
                xAc: __c.mK(1),
                tpa: __c.mK(2),
                CLb: __c.qK(4),
                HN: __c.Oa(3, Czd)
            }));
            var b7 = __c.va("3ef8e263", !1)
              , Ezd = __c.va("f241b36", !1);
            var Fzd = {
                thin: "thin",
                extralight: "thin",
                light: "thin",
                normal: "extralight",
                medium: "normal",
                semibold: "normal",
                bold: "normal",
                ultrabold: "normal",
                heavy: "normal"
            };
            var L6 = __c.FU ? {
                fCb: "3ndmh4u",
                statusText: "1t7jg8u",
                sWb: "36iimsp",
                j$b: "1a1nvnm",
                label: "32aek6n",
                wwc: "2tk7d5",
                tPc: "2n1bnv6",
                rAc: "2na0kmu",
                zBc: "3qf811p",
                yBc: "246bpa8",
                uOc: "3p3qlie",
                xwc: "3tchg28"
            } : {};
            var c7 = X6(a => {
                const {Md: b, Jd: c, Yw: d, errorMessage: e, WJ: f, iia: g=!0} = a
                  , h = c.wi
                  , k = b.label.stream.gz("font-family")["font-family"];
                var l = b.label.stream.gz("direction").direction;
                const m = g ? "fieldset" : "div"
                  , n = g ? "legend" : "label";
                l = l.values().next().value ?? "ltr";
                return K6(m, {
                    className: "_4ILOcQ",
                    onTouchEnd: p => {
                        b7 || p.stopPropagation()
                    }
                    ,
                    dir: l,
                    children: [b.cBb && F6(n, {
                        htmlFor: g ? void 0 : a.JT,
                        "data-testid": L6.label,
                        style: {
                            paddingBlockEnd: `${b.padding.T2b}px`
                        },
                        children: F6(h, {
                            text: d.required ? tyd(b.label) : b.label
                        })
                    }), a.children, e && F6("div", {
                        id: f,
                        className: "o_7gvw",
                        style: {
                            "--wfznTw": b.$l,
                            "--qMNgbA": b.Ok * 1.5
                        },
                        role: "alert",
                        children: F6(h, {
                            text: J6(e ?? "", {
                                "font-family": k.values().next().value,
                                direction: l,
                                "font-size": b.pVb,
                                color: b.errorColor,
                                "text-align": "end"
                            })
                        })
                    })]
                })
            }
            );
            var Gzd = vzd( ({QZa: a, Hk: b, A0b: c, JT: d, Md: e, Jd: f, gr: g, errorMessage: h, WJ: k, onUpdate: l}) => {
                const m = Zh(e.label.stream.Dk(0), "font-family")
                  , n = b ? e.ne.selected : e.ne.default
                  , p = e.sizes.lfa
                  , q = H6( () => J6(String(a), {
                    "font-family": m,
                    color: n,
                    "text-align": "center",
                    "font-size": p
                }), [a, m, n, p]);
                return K6("label", {
                    htmlFor: c,
                    className: G6("dAwWRA", g === 0 && !b && "oKt_Cg", (g === 2 || g === 3) && "HLJxlw", b && "kpt6Eg"),
                    style: {
                        borderRadius: e.X,
                        padding: `${e.padding.Na}px`,
                        "--dayejg": e.backgroundColor.default,
                        "--1PG0Mg": e.backgroundColor.Ei,
                        "--9P_0YQ": e.backgroundColor.active,
                        "--1y49lg": e.backgroundColor.selected,
                        "---3Rdqg": e.backgroundColor.Cp,
                        "--Cjk51Q": e.accentColor
                    },
                    onClick: l,
                    children: [F6("input", {
                        "aria-invalid": !!h,
                        "aria-describedby": h ? k : void 0,
                        checked: b,
                        type: "radio",
                        id: c,
                        name: d,
                        value: a,
                        className: "Mh7mQg",
                        onChange: l,
                        disabled: g === 3,
                        readOnly: g === 2
                    }), F6("div", {
                        className: "_1TTelg",
                        children: F6(f.wi, {
                            text: q
                        })
                    })]
                })
            }
            )
              , Hzd = X6(a => {
                const b = a.Md
                  , c = a.Jd
                  , d = a.Yw
                  , e = a.c$
                  , f = a.gr
                  , g = d.sM
                  , h = I6()
                  , k = __c.y(d.min);
                a = __c.y(d.max);
                x(k >= 1);
                x(a <= 10);
                a = Array.from({
                    length: a - k + 1
                }, (n, p) => ({
                    QZa: p + k
                }));
                const l = E6(e, d.oR, b)
                  , m = I6();
                return F6(c7, {
                    Md: b,
                    Jd: c,
                    Yw: d,
                    errorMessage: l,
                    WJ: m,
                    iia: !0,
                    children: F6(zyd, {
                        TTa: b.sizes.lKa,
                        gridGap: b.gridGap,
                        children: a.map( ({QZa: n}) => {
                            const p = Number(g)
                              , q = `${h}-${n}`
                              , r = f !== 0 ? void 0 : O6( () => {
                                d.Bw = String(n);
                                d.jM()
                            }
                            );
                            return F6(Gzd, {
                                QZa: n,
                                Hk: p === n,
                                A0b: q,
                                JT: h,
                                Md: b,
                                Jd: c,
                                gr: f,
                                errorMessage: l,
                                WJ: m,
                                onUpdate: r
                            }, n)
                        }
                        )
                    })
                })
            }
            );
            var Izd = [{
                Pka: 1,
                yb: ({size: a, color: b}) => K6("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    width: a,
                    height: a,
                    children: [F6("path", {
                        fill: b,
                        d: "M12 13.25c2.492 0 3.806 1.625 4.545 3.144l.14.301.028.072a.75.75 0 0 1-1.363.606l-.035-.068-.12-.26C14.571 15.762 13.65 14.75 12 14.75c-1.76 0-2.69 1.151-3.314 2.555a.75.75 0 0 1-1.372-.61C8.024 15.1 9.342 13.25 12 13.25ZM9.402 9.548a.749.749 0 1 1 1.196.904c-.449.593-1.655 1.473-3.389 1.269l-.354-.056-.074-.018a.75.75 0 0 1 .287-1.465l.31.047c1.14.135 1.848-.448 2.024-.681Zm4.146-.146a.75.75 0 0 1 1.05.146c.176.233.885.816 2.024.681l.31-.047a.75.75 0 0 1 .287 1.464l-.075.019-.353.056c-1.734.204-2.94-.676-3.389-1.269a.75.75 0 0 1 .146-1.05Z"
                    }), F6("path", {
                        fill: b,
                        "fill-rule": "evenodd",
                        d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                        "clip-rule": "evenodd"
                    })]
                }),
                label: L("3Spodw")
            }, {
                Pka: 2,
                yb: ({size: a, color: b}) => K6("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: a,
                    height: a,
                    children: [F6("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M12.001 21.802c-5.405 0-9.801-4.397-9.801-9.801S6.596 2.2 12 2.2s9.801 4.396 9.801 9.801-4.397 9.801-9.801 9.801ZM16.188 9.97a1.011 1.011 0 1 1-2.022 0 1.011 1.011 0 0 1 2.022 0Zm-7.363 1.011a1.011 1.011 0 1 0 0-2.022 1.011 1.011 0 0 0 0 2.022ZM3.7 12.001C3.7 7.424 7.424 3.7 12 3.7s8.301 3.724 8.301 8.301-3.724 8.301-8.301 8.301S3.7 16.578 3.7 12.001Z",
                        fill: b
                    }), F6("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M12.009 14.458c-1.554 0-2.97.817-3.9 2.15a.875.875 0 0 1-1.436-1c1.213-1.74 3.137-2.9 5.336-2.9 2.2 0 4.123 1.16 5.336 2.9a.875.875 0 0 1-1.435 1c-.93-1.333-2.347-2.15-3.901-2.15Z",
                        fill: b
                    })]
                }),
                label: L("bqTQmw")
            }, {
                Pka: 3,
                yb: ({size: a, color: b}) => K6("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    width: a,
                    height: a,
                    children: [F6("path", {
                        fill: b,
                        d: "M16 14.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h8ZM8.825 8.959a1.012 1.012 0 1 1 0 2.024 1.012 1.012 0 0 1 0-2.024Zm6.352 0a1.012 1.012 0 1 1 0 2.023 1.012 1.012 0 0 1 0-2.023Z"
                    }), F6("path", {
                        fill: b,
                        "fill-rule": "evenodd",
                        d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                        "clip-rule": "evenodd"
                    })]
                }),
                label: L("k/uS7g")
            }, {
                Pka: 4,
                yb: ({size: a, color: b}) => F6("svg", {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: a,
                    height: a,
                    children: F6("path", {
                        "fill-rule": "evenodd",
                        fill: b,
                        d: "M12.001 21.802C6.59595 21.802 2.19995 17.405 2.19995 12.001C2.19995 6.59695 6.59595 2.19995 12.001 2.19995C17.406 2.19995 21.802 6.59595 21.802 12.001C21.802 17.406 17.405 21.802 12.001 21.802ZM16.188 9.96995C16.188 10.5283 15.7353 10.981 15.177 10.981C14.6186 10.981 14.166 10.5283 14.166 9.96995C14.166 9.41159 14.6186 8.95895 15.177 8.95895C15.7353 8.95895 16.188 9.41159 16.188 9.96995ZM8.82495 10.981C9.38331 10.981 9.83595 10.5283 9.83595 9.96998C9.83595 9.41162 9.38331 8.95898 8.82495 8.95898C8.26659 8.95898 7.81395 9.41162 7.81395 9.96998C7.81395 10.5283 8.26659 10.981 8.82495 10.981ZM16.235 13.164C14.498 16.944 9.57695 17.018 7.76595 13.259C7.27595 12.242 5.76695 13.13 6.25495 14.142C8.60795 19.026 15.478 18.984 17.747 14.047C18.215 13.029 16.706 12.139 16.235 13.164ZM3.69995 12.001C3.69995 7.42395 7.42395 3.69995 12.001 3.69995C16.578 3.69995 20.302 7.42395 20.302 12.001C20.302 16.578 16.578 20.302 12.001 20.302C7.42395 20.302 3.69995 16.578 3.69995 12.001Z"
                    })
                }),
                label: L("ssYkyg")
            }, {
                Pka: 5,
                yb: ({size: a, color: b}) => K6("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    width: a,
                    height: a,
                    children: [F6("path", {
                        fill: b,
                        "fill-rule": "evenodd",
                        d: "M17.799 12.277a.752.752 0 0 1 .951.723c0 3.298-3.156 5.75-6.75 5.75S5.25 16.298 5.25 13a.75.75 0 0 1 .951-.723l.005.002.023.006.094.025c.084.021.208.053.366.09.318.076.775.178 1.323.28 1.1.204 2.551.403 3.988.403 1.437 0 2.887-.2 3.988-.403a26.84 26.84 0 0 0 1.689-.37l.093-.025.024-.006.005-.002Zm-1.537 1.877c-1.15.213-2.699.429-4.262.429-1.563 0-3.113-.216-4.262-.429-.31-.057-.594-.116-.842-.17.54 1.804 2.527 3.266 5.104 3.266s4.563-1.462 5.102-3.266c-.247.054-.53.113-.84.17Z",
                        "clip-rule": "evenodd"
                    }), F6("path", {
                        fill: b,
                        d: "M8.55 8.25c.625 0 1.125.166 1.531.444.291.2.51.443.679.664l.154.212.041.065a.75.75 0 0 1-1.223.855l-.046-.06-.119-.161a1.51 1.51 0 0 0-.336-.338c-.14-.097-.34-.181-.681-.181s-.542.084-.682.18c-.157.109-.29.266-.454.5a.75.75 0 0 1-1.228-.86c.186-.266.444-.609.833-.876.405-.278.906-.444 1.53-.444Zm6.9 0c.625 0 1.126.166 1.531.444.291.2.51.443.68.664l.153.212.041.065a.75.75 0 0 1-1.222.855l-.047-.06-.118-.161a1.512 1.512 0 0 0-.336-.338c-.14-.097-.34-.18-.682-.181-.34 0-.541.084-.681.18-.158.109-.29.266-.454.5a.75.75 0 0 1-1.23-.86c.187-.266.446-.609.834-.876.406-.278.906-.444 1.531-.444Z"
                    }), F6("path", {
                        fill: b,
                        "fill-rule": "evenodd",
                        d: "M12.001 2.2c5.405 0 9.8 4.396 9.8 9.801s-4.396 9.8-9.8 9.8c-5.405 0-9.8-4.396-9.8-9.8 0-5.404 4.395-9.8 9.8-9.8Zm0 1.5c-4.577 0-8.3 3.724-8.3 8.301s3.723 8.3 8.3 8.3c4.577 0 8.3-3.723 8.3-8.3 0-4.577-3.723-8.3-8.3-8.3Z",
                        "clip-rule": "evenodd"
                    })]
                }),
                label: L("WKDtIg")
            }]
              , Jzd = X6(a => {
                const b = a.Md
                  , c = a.Jd
                  , d = a.Yw
                  , e = a.c$
                  , f = a.gr
                  , g = d.sM;
                x(d.min != null && d.min >= 1);
                x(d.max != null && d.max <= 5);
                a = Izd.slice(d.min - 1, d.max);
                const h = E6(e, d.oR, b)
                  , k = I6()
                  , l = I6();
                return F6(c7, {
                    Md: b,
                    Jd: c,
                    Yw: d,
                    errorMessage: h,
                    WJ: k,
                    iia: !0,
                    children: F6(zyd, {
                        TTa: b.sizes.lKa,
                        gridGap: b.gridGap,
                        children: a.map( ({Pka: m, yb: n, label: p}) => {
                            const q = Number(g)
                              , r = g === String(m)
                              , t = `${l}-${m}`
                              , w = f === 2 || f === 3 ? void 0 : O6( () => {
                                d.Bw = String(m)
                            }
                            );
                            return K6("label", {
                                htmlFor: t,
                                className: G6("r4VAMw", r && "jc6y_A", (f === 2 || f === 3) && "UpIThA", f === 0 && !r && "SMPq5g"),
                                style: {
                                    "--hMlWEg": b.backgroundColor.default,
                                    "---127VA": b.backgroundColor.Ei,
                                    "--9x4z1A": b.backgroundColor.active,
                                    "--W5Lfog": b.backgroundColor.selected,
                                    "--GtGNYg": b.backgroundColor.Cp,
                                    "--r8_7Tw": b.accentColor,
                                    borderRadius: b.X,
                                    padding: `${b.padding.Na}px`
                                },
                                onClick: w,
                                children: [F6("span", {
                                    className: "Mh7mQg",
                                    children: p
                                }), F6("input", {
                                    "aria-invalid": !!h,
                                    "aria-describedby": h ? k : void 0,
                                    checked: q === m,
                                    type: "radio",
                                    id: t,
                                    name: l,
                                    value: m,
                                    className: "Mh7mQg",
                                    onChange: w,
                                    disabled: f === 3,
                                    readOnly: f === 2
                                }), F6("div", {
                                    className: "aOiRWQ",
                                    style: {
                                        width: b.sizes.fd,
                                        height: b.sizes.fd
                                    },
                                    children: F6(n, {
                                        size: b.sizes.fd,
                                        color: r ? b.D8.selected : b.D8.default
                                    })
                                })]
                            }, m)
                        }
                        )
                    })
                })
            }
            );
            var Kzd = X6(a => {
                const b = a.Md
                  , c = a.Jd
                  , d = a.Yw
                  , e = a.gr;
                var f = a.c$;
                a = d.sM;
                const g = c.z4
                  , h = !!d.oR
                  , k = I6()
                  , l = H6( () => h ? {
                    default: b.borderColor.error,
                    Ei: b.borderColor.error,
                    focus: b.borderColor.error
                } : e === 0 || e === 1 ? {
                    default: b.borderColor.default,
                    Ei: b.borderColor.Ei,
                    focus: b.borderColor.focus
                } : {
                    default: b.borderColor.default,
                    Ei: b.borderColor.default,
                    focus: b.borderColor.default
                }, [b.borderColor.default, b.borderColor.error, b.borderColor.focus, b.borderColor.Ei, e, h])
                  , m = b.label.stream.Dk(0)
                  , n = Fzd[Zh(m, "font-weight")]
                  , p = Zh(m, "direction") ?? "ltr";
                f = E6(f, d.oR, b);
                const q = I6();
                return F6(c7, {
                    Md: b,
                    Jd: c,
                    Yw: d,
                    errorMessage: f,
                    WJ: k,
                    iia: !1,
                    JT: q,
                    children: K6("div", {
                        className: "ybpBnQ",
                        children: [F6(g, {
                            boxSizing: "border-box",
                            dir: p,
                            id: q,
                            type: "text",
                            inputMode: "numeric",
                            oQa: Zh(m, "font-family"),
                            fontSize: `${b.sizes.lfa}px`,
                            Bl: b.ne,
                            fontWeight: n,
                            value: a ?? "",
                            name: b.id,
                            backgroundColor: "transparent",
                            borderStyle: "solid",
                            outline: "none",
                            borderWidth: b.sizes.TJa,
                            SJa: l,
                            borderRadius: b.X,
                            ariaInvalid: h,
                            paddingInlineEnd: h ? b.sizes.fd * 1.5 : void 0,
                            Qc: h ? k : void 0,
                            onChange: O6(r => {
                                d.Bw = r.target.value
                            }
                            ),
                            onBlur: O6( () => void d.jM()),
                            padding: b.padding.Na,
                            readOnly: e === 2,
                            disabled: e === 3,
                            width: "100%"
                        }), h && F6("div", {
                            className: "_3v99oA",
                            style: {
                                "--3tgqzg": `${b.sizes.fd * .4}px`
                            },
                            children: F6(Ayd, {
                                size: b.sizes.fd
                            })
                        })]
                    })
                })
            }
            );
            var Lzd = a => dc("JWYKDQ", [a])
              , Mzd = () => L("jh7u2w")
              , Nzd = a => dc("Jj1O+A", [a])
              , Ozd = a => dc("sUWUOA", [a])
              , Pzd = a => dc("Q5Pg4w", [a])
              , Qzd = a => dc("4EBAAA", [a])
              , Rzd = () => L("orPgUw")
              , Szd = () => L("BtJs5g")
              , Tzd = () => L("pgYrWw")
              , Uzd = () => L("As1GTA")
              , Vzd = () => L("xSH8Og")
              , Wzd = () => L("wutQEA")
              , Xzd = a => dc("Qso6Xw", [a])
              , Yzd = () => L("z/bN8g")
              , Zzd = a => dc("Aa3fvQ", [a])
              , $zd = () => L("2Q9Q+A")
              , aAd = a => dc("6QpLYA", [a])
              , bAd = a => dc("SWeX4Q", [a])
              , cAd = () => L("nFbxIQ")
              , dAd = () => L("ktnWSg")
              , eAd = a => dc("U28wGg", [a])
              , fAd = () => L("VGvKlQ")
              , gAd = a => dc("kbfbNQ", [a])
              , hAd = () => L("fNQh9A")
              , iAd = () => L("i3mNPA")
              , jAd = () => L("zt/K0Q")
              , kAd = () => L("z/APcw")
              , lAd = () => L("/Y/V2Q")
              , mAd = () => L("Ahvd0w")
              , nAd = () => L("dVBIgQ")
              , oAd = () => L("c5VJ7g")
              , pAd = () => L("T6pZfw");
            var Hyd = 10 / 14
              , qAd = X6(a => {
                const b = a.Md
                  , c = a.Jd
                  , d = a.Yw
                  , e = a.gr
                  , f = a.LRa;
                a = a.c$;
                const g = b.options
                  , {sM: h=[], feedback: k} = d
                  , l = I6()
                  , m = I6()
                  , n = S6( () => k.get()?.HN)
                  , p = S6( () => k.get()?.vac)
                  , q = E6(a, d.oR, b)
                  , r = e === 0 || e === 1;
                return F6(c7, {
                    Md: b,
                    Jd: c,
                    Yw: d,
                    errorMessage: q,
                    WJ: l,
                    children: F6("div", {
                        className: "iaCeXQ",
                        style: {
                            gridGap: `${b.rowGap}px`
                        },
                        children: g.map(t => {
                            var w = h.includes(t.id);
                            const v = {
                                ZCa: b.ZCa,
                                eWb: `select-${m}`,
                                X: b.X,
                                label: t.label,
                                background: b.CE,
                                Hk: w,
                                KJb: c.wi,
                                WJ: q ? l : void 0,
                                Y9b: b.padding.Na,
                                $Ka: b.sizes.mOb,
                                aLa: b.sizes.oOb,
                                ZKa: b.sizes.ZKa,
                                fd: b.sizes.fd,
                                gr: e
                            };
                            switch (b.type) {
                            case 1:
                                var A = p.get();
                                A = A ? Math.round(100 * (A.ZLc.get(t.id) ?? 0) / (A.total || 1)) : void 0;
                                return uzd(Fyd, {
                                    ...v,
                                    key: t.id,
                                    backgroundColor: {
                                        default: A != null ? b.R3a.track : b.CE.default,
                                        Ei: b.CE.Ei,
                                        active: b.CE.active,
                                        selected: A != null ? b.O4a.track : b.CE.selected
                                    },
                                    XTa: w ? b.KH.selected : r ? void 0 : b.KH.Cp,
                                    D8: w ? b.KH.selected : b.KH.default,
                                    Zsb: A != null ? {
                                        value: A,
                                        GMb: w ? b.O4a.iS : b.R3a.iS,
                                        ne: w ? b.O4a.text : b.R3a.text
                                    } : void 0,
                                    Zfc: !0,
                                    onChange: O6( () => {
                                        d.M2a(t.id);
                                        d.jM();
                                        f?.()
                                    }
                                    )
                                });
                            case 2:
                                return w = n.get(),
                                w = w == null ? 0 : w.includes(t.id) ? v.Hk ? 4 : 2 : v.Hk ? 3 : 1,
                                uzd(Gyd, {
                                    ...v,
                                    key: t.id,
                                    CE: b.CE,
                                    KH: b.KH,
                                    tVb: w,
                                    onChange: O6( () => {
                                        d.M2a(t.id);
                                        d.jM()
                                    }
                                    )
                                });
                            case 3:
                                return uzd(Fyd, {
                                    ...v,
                                    key: t.id,
                                    onChange: O6( () => {
                                        d.M2a(t.id);
                                        d.jM()
                                    }
                                    ),
                                    D8: w ? b.KH.selected : b.KH.default,
                                    XTa: w ? b.KH.selected : r ? void 0 : b.KH.Cp,
                                    backgroundColor: {
                                        default: b.CE.default,
                                        selected: b.CE.selected,
                                        Ei: b.CE.Ei,
                                        active: b.CE.active
                                    }
                                });
                            default:
                                throw new z(b);
                            }
                        }
                        )
                    })
                })
            }
            )
              , Dyd = a => F6("div", {
                id: a.id,
                className: "_5MHe6g",
                "aria-label": L("i3mNPA"),
                children: K6("svg", {
                    width: a.size,
                    height: a.size,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "gBYSAw",
                    children: [F6("rect", {
                        width: "16",
                        height: "16",
                        rx: "8",
                        fill: "white"
                    }), F6("rect", {
                        width: "16",
                        height: "16",
                        rx: "8",
                        fill: "#00873D"
                    }), F6("path", {
                        d: "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z",
                        fill: "white"
                    })]
                })
            })
              , Eyd = a => F6("div", {
                id: a.id,
                className: "_5MHe6g",
                "aria-label": L("As1GTA"),
                children: K6("svg", {
                    width: a.size,
                    height: a.size,
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "gBYSAw",
                    children: [F6("rect", {
                        width: "16",
                        height: "16",
                        rx: "8",
                        fill: "white"
                    }), F6("rect", {
                        width: "16",
                        height: "16",
                        rx: "8",
                        fill: "#C8001E"
                    }), F6("path", {
                        d: "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                        fill: "white"
                    })]
                })
            });
            var sAd = X6(a => {
                const b = a.Md
                  , c = a.Jd
                  , d = a.Yw
                  , e = a.c$
                  , f = a.gr
                  , g = d.jca.ok ? d.jca.value : void 0
                  , h = I6()
                  , k = I6()
                  , l = I6()
                  , [m,n] = uyd(null);
                x(d.min != null && d.min >= 1);
                x(d.max != null && d.max <= 10);
                const p = E6(e, d.oR, b)
                  , q = f === 0
                  , r = f === 0 || f === 1;
                return F6(c7, {
                    Md: b,
                    Jd: c,
                    Yw: d,
                    errorMessage: p,
                    WJ: k,
                    iia: !0,
                    children: F6(zyd, {
                        TTa: b.fd,
                        gridGap: 0,
                        children: Array.from({
                            length: d.max
                        }, (t, w) => {
                            const v = w + 1;
                            t = `${l}-${v}`;
                            w = Lyd(v, g, m);
                            const A = q ? O6( () => {
                                d.Bw = v === g ? "" : String(v);
                                d.jM()
                            }
                            ) : void 0;
                            return K6("label", {
                                htmlFor: t,
                                className: G6("Rw_cTw", !r && "g0Fw6w"),
                                style: {
                                    "--4yIcLg": b.accentColor
                                },
                                onMouseEnter: q ? () => n(v) : void 0,
                                onMouseLeave: q ? () => n(null) : void 0,
                                children: [F6("input", {
                                    "aria-invalid": !!p,
                                    "aria-describedby": p ? k : void 0,
                                    checked: g === v,
                                    type: "radio",
                                    id: t,
                                    name: h,
                                    value: v,
                                    "aria-label": dc("1aqRWg", [v]),
                                    className: "Mh7mQg",
                                    onClick: A,
                                    onChange: rAd,
                                    disabled: f === 3,
                                    readOnly: f === 2
                                }), w != null ? F6(Jyd, {
                                    size: b.fd,
                                    color: r ? w === "hover" ? b.fillColor.Ei : b.fillColor.selected : b.fillColor.Cp
                                }) : F6(Kyd, {
                                    size: b.fd,
                                    color: r ? b.borderColor.default : b.borderColor.Cp
                                })]
                            }, v)
                        }
                        )
                    })
                })
            }
            )
              , rAd = () => {}
            ;
            var tAd = X6(a => {
                const b = a.Md
                  , c = a.Jd
                  , d = a.Yw
                  , e = a.gr;
                var f = a.c$;
                a = d.sM;
                const g = c.z4
                  , h = c.eda
                  , k = !!d.oR
                  , l = I6()
                  , m = e === 0 || e === 1;
                var n = H6( () => k ? {
                    default: b.borderColor.error,
                    Ei: b.borderColor.error,
                    focus: b.borderColor.error
                } : m ? {
                    default: b.borderColor.default,
                    Ei: b.borderColor.Ei,
                    focus: b.borderColor.focus
                } : {
                    default: b.borderColor.default,
                    Ei: b.borderColor.default,
                    focus: b.borderColor.default
                }, [b.borderColor.default, b.borderColor.error, b.borderColor.focus, b.borderColor.Ei, m, k]);
                const p = b.label.stream.Dk(0)
                  , q = Fzd[Zh(p, "font-weight")]
                  , r = Zh(p, "direction") ?? "ltr"
                  , t = I6();
                n = {
                    boxSizing: "border-box",
                    oQa: Zh(p, "font-family"),
                    fontSize: `${b.sizes.lfa}px`,
                    Bl: m ? b.ne.default : b.ne.Cp,
                    fontWeight: q,
                    padding: b.padding.Na,
                    paddingInlineEnd: k ? b.sizes.fd * 1.5 : void 0,
                    gtb: b.placeholder.color,
                    width: "100%",
                    SJa: n,
                    backgroundColor: "transparent",
                    borderStyle: "solid",
                    outline: "none",
                    borderRadius: b.X,
                    borderWidth: b.sizes.TJa,
                    ariaInvalid: k,
                    Qc: k ? l : void 0
                };
                f = E6(f, d.oR, b);
                return F6(c7, {
                    Md: b,
                    Jd: c,
                    Yw: d,
                    errorMessage: f,
                    WJ: l,
                    iia: !1,
                    JT: t,
                    children: K6("div", {
                        className: "DsSAig",
                        children: [b.jV > 1 ? F6(h, {
                            ...n,
                            rows: b.jV,
                            dir: r,
                            id: t,
                            name: b.id,
                            placeholder: b.placeholder.text,
                            disabled: e === 3,
                            readOnly: e === 2,
                            onBlur: O6( () => {
                                d.jM()
                            }
                            ),
                            onChange: O6(w => {
                                d.Bw = w.target.value
                            }
                            ),
                            resize: "none",
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-word",
                            value: a ?? ""
                        }) : F6(g, {
                            ...n,
                            type: Myd(b.variant),
                            dir: r,
                            id: t,
                            name: b.id,
                            disabled: e === 3,
                            readOnly: e === 2,
                            onChange: O6(w => {
                                d.Bw = w.target.value
                            }
                            ),
                            onBlur: O6( () => {
                                d.jM()
                            }
                            ),
                            value: a ?? "",
                            placeholder: b.placeholder.text
                        }), k && F6("div", {
                            className: G6("Xz8a5Q", b.jV > 1 && "XsCoFw"),
                            style: {
                                "--ozZJmw": `${b.sizes.fd * .4}px`
                            },
                            children: F6(Ayd, {
                                size: b.sizes.fd
                            })
                        })]
                    })
                })
            }
            );
            var vAd = a => {
                var b = a.Md;
                return F6("div", {
                    className: G6("vhG7mw", "wYAs1w", !!(b.type === 4 || b.type === 5 && b.variant === 3 || b.type === 5 && b.variant === 1) && "_1MkJMA"),
                    children: F6(uAd, {
                        ...a
                    })
                })
            }
              , uAd = X6( ({Md: a, Ot: b, ...c}) => {
                switch (a.type) {
                case 4:
                    var d = a7( () => T6(b, a.id, "text"));
                    return F6(tAd, {
                        ...c,
                        Md: a,
                        Yw: d,
                        gr: b.gr
                    });
                case 5:
                    return d = a7( () => T6(b, a.id, "number")),
                    F6(wAd, {
                        ...c,
                        Md: a,
                        Yw: d,
                        gr: b.gr
                    });
                case 1:
                case 2:
                case 3:
                    d = a7( () => T6(b, a.id, "select"));
                    const e = a7( () => b.WL ? () => b.LRa(a.id) : void 0);
                    return F6(qAd, {
                        ...c,
                        Md: a,
                        Yw: d,
                        gr: b.gr,
                        LRa: e
                    });
                default:
                    throw new z(a);
                }
            }
            )
              , wAd = ({Md: a, ...b}) => {
                switch (a.variant) {
                case 1:
                    return F6(Kzd, {
                        Md: a,
                        ...b
                    });
                case 2:
                    return F6(Jzd, {
                        Md: a,
                        ...b
                    });
                case 4:
                    return F6(Hzd, {
                        Md: a,
                        ...b
                    });
                case 3:
                    return F6(sAd, {
                        Md: a,
                        ...b
                    });
                default:
                    throw new z(a);
                }
            }
            ;
            var xAd = X6(a => {
                var b = a.AA;
                const c = a.Ot;
                a = a.So.wi;
                const d = c.gr
                  , e = b.backgroundColor
                  , f = b.label;
                b = b.padding;
                return F6("button", {
                    className: G6("oA1OOg", d === 0 && "MkpYkA", (d === 2 || d === 3) && "RUKPJg"),
                    style: {
                        "--fS0DFQ": e.default,
                        "--MD0Pqg": e.Ei,
                        "--DFILqA": e.active,
                        "--Fr9rFw": e.Cp,
                        paddingInlineStart: b.Ca,
                        paddingInlineEnd: b.ab,
                        paddingBlockStart: b.va,
                        paddingBlockEnd: b.Ea
                    },
                    disabled: d !== 0,
                    onClick: O6( () => c.submit()),
                    onTouchEnd: g => {
                        b7 || g.stopPropagation()
                    }
                    ,
                    children: F6(a, {
                        text: f
                    })
                })
            }
            );
            var yAd = X6(function(a) {
                var b = a.ds;
                const c = a.href
                  , d = a.KJa
                  , e = a.checked
                  , f = a.kWa
                  , g = a.YKa;
                a = a.So.wi;
                const h = I6();
                b = km.create({
                    ...__c.jD,
                    stream: oyd().attrs({
                        ...d,
                        "text-align": "start",
                        link: void 0,
                        decoration: void 0
                    }).ib(b.KLa()).ib(" ").attrs({
                        link: c,
                        decoration: "underline"
                    }).ib(`${b.JLa()}\n`).build()
                });
                return K6("label", {
                    htmlFor: h,
                    className: "qZnQvg",
                    onTouchEnd: k => {
                        b7 || k.stopPropagation()
                    }
                    ,
                    style: {
                        direction: d.direction,
                        lineHeight: "14px",
                        "--F6r2Xg": "14px"
                    },
                    children: [F6("input", {
                        id: h,
                        type: "checkbox",
                        checked: e,
                        onChange: () => f(!e),
                        className: "vH_uMg"
                    }), F6(Cyd, {
                        checked: e,
                        color: d.color ?? "#666666",
                        v$a: __c.t4(g, d.color ?? "#666666"),
                        size: 14
                    }), F6(a, {
                        text: b,
                        vXb: !0
                    })]
                })
            });
            var zAd = () => window.location.origin + "/form-data-processing"
              , EAd = X6( ({form: a, So: b, ds: c, WN: d, Rz: e=!1, Ot: f}) => {
                if (f.WL)
                    return F6(AAd, {
                        Ot: f,
                        form: a,
                        So: b,
                        ds: c,
                        WN: d,
                        Rz: e
                    });
                if (czd(f, "q"))
                    return F6(BAd, {
                        Ot: f,
                        form: a,
                        So: b,
                        ds: c,
                        WN: d,
                        Rz: e
                    });
                const g = a.footer
                  , h = a.QT
                  , k = a.AA
                  , l = b.wi
                  , m = f.RIa
                  , n = f.iT
                  , p = f.CEa
                  , q = M6(a);
                return K6("footer", {
                    className: "GuCAHg",
                    style: {
                        paddingInlineStart: `${h.Ca}px`,
                        paddingInlineEnd: `${h.ab}px`,
                        paddingBlockEnd: `${h.Ea}px`
                    },
                    children: [k != null && (n === 6 ? F6("div", {
                        style: {
                            paddingBlockStart: `${h.d2a}px`,
                            paddingBlockEnd: `${h.c2a}px`
                        },
                        "data-testid": L6.fCb,
                        children: F6(l, {
                            text: J6(c.BCa(), {
                                ...q,
                                "font-size": g.YRa,
                                "font-weight": "bold"
                            })
                        })
                    }) : F6(xAd, {
                        AA: k,
                        So: b,
                        Ot: f
                    })), K6("div", {
                        style: {
                            paddingBlockStart: `${a.QT.Nza}px`
                        },
                        children: [n !== 6 && !(e && (n === 0 || n === 1)) && F6("div", {
                            "data-testid": L6.statusText,
                            children: F6(l, {
                                text: J6(N6(n, p, c, g.Yfc), {
                                    ...q,
                                    "font-size": g.EN
                                })
                            })
                        }), m && n === 6 && F6("div", {
                            className: "J8N9SA",
                            children: F6(CAd, {
                                ds: c,
                                So: b,
                                form: a,
                                Ot: f
                            })
                        }), g.URa && n !== 2 && !e && F6("div", {
                            className: "Wql4tQ",
                            children: F6(DAd, {
                                ds: c,
                                So: b,
                                form: a,
                                WN: d
                            })
                        }), e && n !== 2 && n !== 6 && F6("div", {
                            className: "Wql4tQ",
                            children: F6(yAd, {
                                ds: c,
                                href: zAd(),
                                So: b,
                                KJa: {
                                    ...q,
                                    "font-size": g.EN
                                },
                                checked: f.AN,
                                kWa: r => f.tDa(r),
                                YKa: D6(a.oj.background)
                            })
                        })]
                    })]
                })
            }
            )
              , CAd = X6( ({ds: a, So: b, form: c, Ot: d}) => {
                b = b.wi;
                const e = c.footer;
                c = M6(c);
                return F6("a", {
                    role: "button",
                    href: "#",
                    className: "_0UCMkA",
                    onClick: O6(f => {
                        f.preventDefault();
                        d.UMb()
                    }
                    ),
                    onTouchEnd: f => {
                        b7 || f.stopPropagation()
                    }
                    ,
                    children: F6(b, {
                        text: J6(a.e2a(), {
                            ...c,
                            "font-size": e.EN,
                            decoration: "underline"
                        })
                    })
                })
            }
            )
              , DAd = X6( ({ds: a, So: b, form: c, WN: d}) => {
                b = b.wi;
                const e = c.footer;
                c = M6(c);
                return F6("a", {
                    href: d.href,
                    target: "_blank",
                    onClick: f => {
                        d.onClick && (d.onClick(),
                        f.preventDefault())
                    }
                    ,
                    onTouchEnd: f => {
                        b7 || f.stopPropagation()
                    }
                    ,
                    children: F6(b, {
                        text: J6(a.OXa(), {
                            ...c,
                            "font-size": e.EN,
                            decoration: "underline"
                        })
                    })
                })
            }
            )
              , AAd = X6( ({Ot: a, form: b, So: c, ds: d, WN: e, Rz: f=!1}) => {
                const g = b.QT
                  , h = b.footer
                  , k = c.wi
                  , l = a.iT;
                var m = a.CEa;
                const n = M6(b);
                m = N6(l, m, d);
                const p = bzd(a);
                m = p != null ? `${m} | ${d.YVa(p)}` : m;
                return K6("footer", {
                    className: "GuCAHg",
                    style: {
                        paddingInlineStart: `${g.Ca}px`,
                        paddingInlineEnd: `${g.ab}px`,
                        paddingBlockEnd: `${g.Ea}px`
                    },
                    children: [!(f && (l === 0 || l === 1)) && F6("div", {
                        "data-testid": L6.statusText,
                        style: {
                            paddingBlockStart: `${g.Nza}px`
                        },
                        children: F6(k, {
                            text: J6(m, {
                                ...n,
                                "font-size": h.EN
                            })
                        })
                    }), h.URa && l !== 2 && !f && F6("div", {
                        className: "Wql4tQ",
                        children: F6(DAd, {
                            ds: d,
                            So: c,
                            form: b,
                            WN: e
                        })
                    }), f && l !== 2 && F6("div", {
                        className: "Wql4tQ",
                        children: F6(yAd, {
                            ds: d,
                            href: zAd(),
                            So: c,
                            KJa: {
                                ...n,
                                "font-size": h.EN
                            },
                            checked: a.AN,
                            kWa: q => a.tDa(q),
                            YKa: D6(b.oj.background)
                        })
                    })]
                })
            }
            )
              , BAd = X6( ({Ot: a, form: b, So: c, ds: d, WN: e, Rz: f=!1}) => {
                const g = b.QT;
                var h = b.AA;
                const k = b.footer
                  , l = dzd(a)
                  , m = c.wi
                  , n = M6(b)
                  , p = a.iT
                  , q = a.RIa
                  , r = a.CEa;
                h = p !== 6 ? K6(tzd, {
                    children: [h && F6(xAd, {
                        AA: h,
                        So: c,
                        Ot: a
                    }), !(f && (p === 0 || p === 1)) && F6("div", {
                        "data-testid": L6.statusText,
                        style: {
                            paddingBlockStart: `${g.Nza}px`
                        },
                        children: F6(m, {
                            text: J6(N6(p, r, d), {
                                ...n,
                                "font-size": k.EN
                            })
                        })
                    })]
                }) : l === 0 ? F6("div", {
                    style: {
                        paddingBlockStart: `${b.QT.d2a}px`,
                        paddingBlockEnd: `${b.QT.c2a}px`
                    },
                    children: F6(m, {
                        text: J6(N6(p, r, d), {
                            ...n,
                            "font-size": k.YRa,
                            "font-weight": "bold"
                        })
                    })
                }) : K6(tzd, {
                    children: [F6("div", {
                        "data-testid": L6.fCb,
                        style: {
                            paddingBlockStart: `${b.QT.d2a}px`,
                            paddingBlockEnd: `${b.QT.c2a}px`
                        },
                        children: F6(m, {
                            text: J6(l === 2 ? d.VLa() : d.sSa(), {
                                ...n,
                                "font-size": k.YRa,
                                "font-weight": "bold"
                            })
                        })
                    }), F6("div", {
                        "data-testid": L6.statusText,
                        style: {
                            paddingBlockStart: `${g.Nza}px`
                        },
                        children: F6(m, {
                            text: J6(N6(p, r, d), {
                                ...n,
                                "font-size": k.EN
                            })
                        })
                    })]
                });
                return K6("footer", {
                    className: "GuCAHg",
                    style: {
                        paddingInlineStart: `${g.Ca}px`,
                        paddingInlineEnd: `${g.ab}px`,
                        paddingBlockEnd: `${g.Ea}px`
                    },
                    children: [h, q && p === 6 && F6("div", {
                        className: "J8N9SA",
                        children: F6(CAd, {
                            ds: d,
                            So: c,
                            form: b,
                            Ot: a
                        })
                    }), k.URa && p !== 2 && !f && F6("div", {
                        className: "Wql4tQ",
                        children: F6(DAd, {
                            ds: d,
                            So: c,
                            form: b,
                            WN: e
                        })
                    }), f && p !== 2 && p !== 6 && F6("div", {
                        className: "Wql4tQ",
                        children: F6(yAd, {
                            ds: d,
                            href: zAd(),
                            So: c,
                            KJa: {
                                ...n,
                                "font-size": k.EN
                            },
                            checked: a.AN,
                            kWa: t => a.tDa(t),
                            YKa: D6(b.oj.background)
                        })
                    })]
                })
            }
            );
            var FAd = X6(a => {
                const b = a.header
                  , c = a.Jd;
                return K6("div", {
                    className: "FnpX4Q",
                    style: {
                        paddingInlineStart: `${b.padding.Ca}px`,
                        paddingInlineEnd: `${b.padding.ab}px`,
                        paddingBlockStart: `${b.padding.va}px`,
                        paddingBlockEnd: `${b.padding.Ea}px`
                    },
                    id: a.ZZb,
                    children: [b.background && F6("div", {
                        className: "n9ICbQ",
                        children: F6(c.ih, {
                            fill: b.background
                        })
                    }), F6("div", {
                        role: "heading",
                        "aria-level": 1,
                        children: F6(c.wi, {
                            text: b.label
                        })
                    })]
                })
            }
            );
            var GAd = X6(function(a) {
                const {state: b, ds: c, Ot: d, So: e, dXb: f, Rz: g=!1, hv: h=!1} = a;
                var k = b.oj;
                a = b.header;
                const l = b.fields
                  , m = k.background
                  , n = k.X;
                k = k.border;
                const p = e.ih
                  , q = I6();
                return K6("div", {
                    "aria-labelledby": q,
                    role: "form",
                    className: G6("_9sCIzQ", h && "nr22_Q"),
                    style: {
                        borderRadius: n,
                        border: `${k.weight}px solid ${k.color}`
                    },
                    children: [F6("div", {
                        className: "wNGpBA",
                        children: F6(p, {
                            fill: m
                        })
                    }), K6("div", {
                        className: "_6i3kwQ",
                        children: [a && F6(FAd, {
                            header: a,
                            ZZb: q,
                            Jd: e
                        }), F6("div", {
                            className: "xIuERA",
                            role: "group",
                            style: {
                                rowGap: b.fha.rowGap,
                                paddingBlockStart: `${b.fha.va}px`,
                                paddingInlineStart: `${b.fha.Ca}px`,
                                paddingBlockEnd: `${b.fha.Ea}px`,
                                paddingInlineEnd: `${b.fha.ab}px`
                            },
                            children: l.map(r => F6(vAd, {
                                Md: r,
                                Ot: d,
                                Jd: e,
                                c$: c
                            }, r.id))
                        }), F6(EAd, {
                            form: b,
                            ds: c,
                            So: e,
                            WN: f,
                            Ot: d,
                            Rz: g
                        })]
                    })]
                })
            })
              , Iyd = (a, b) => {
                const c = a.stream.Zu(0);
                a = {
                    ...__c.jD,
                    stream: __c.vj.rb().attrs({
                        ...c,
                        color: b
                    }).ib(a.stream.da).build()
                };
                return km.create(a)
            }
            ;
            var d7 = {
                wPa: "02edb336e920d9071fff118f7a3d31ac763db2b9",
                rPa: "036bd5d408d3c100e10350228579f8e04d43b4f6",
                yPa: "0ebcca2c2c63485718c301743978d450ce88c663",
                yvb: "1e9c8f51c1737724218d4dcd996b1769a2d77f6b",
                DPa: "24360a2a8c9bb009be8be9623fd954b422471bb0",
                vPa: "244ba73abbc811129578159fbbe4c59512476498",
                tPa: "353ad5dc9bf64d9efb277c149daaac36875563b6",
                d5a: "527c562ec6482bdca02aca1f364e313b6ae11002",
                BKa: "2d254a7c9642381d43840950bb7e0480fbb530e7",
                sSa: "42a556d97b24604fe74079d18c6b127b9c784999",
                BCa: "4b3e2f9a17cc080780b94f558797a427feb09699",
                g2a: "4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a",
                BPa: "618e3ce11c1c70714a0ef4a9029a2ef48e2e3e93",
                qPa: "6438553c67c65ba6ac45f8b01017670b72f483f4",
                uPa: "683f99844956de2e44a17b5efad4fc58b942acb2",
                loading: "74e5d2b11c030e63392e0de665716d07b60f5b26",
                YVa: "79c77400a892353e0e83dd51f3846d806258dcaf",
                CPa: "8664faa732b9b19522f91489845c251347614a18",
                offline: "8c8ea51f90ca1e4348014807e7819d178adcb284",
                xPa: "a1eddc53e5797066282e2d2a5aae8a7815919d04",
                APa: "a762ea307e416217d4d59b2e0440d515ed815c23",
                OXa: "e4f4e479f595203a29109cc6e1ebdcd0f30955e9",
                zPa: "c8b104f138528db5f370da8acafb1af527eb2e11",
                sPa: "d024becf2dcf9fb6dff2b1f20f3b33d5eeb04921",
                VLa: "db3f1ba4b8b94e6cea45a1edc61f66113e207622",
                EPa: "e48fff60a20efc134ae7eac44a6222a9e1f86aef",
                e5a: "b6b663ddd0aa3f5d3486243ae6864d1fe8bdd702",
                AKa: "4723359eb0705bcf16fbd72c99502dbada0cb32b",
                e2a: "14b60835a6c39b1ba2a99a9b9d61178cc1e555a6",
                KLa: "1f642ebf163d26a035138e132851cd9159646ca6",
                JLa: "05a76b822a48247f26f5e906b385d0b25e35c16a",
                iab: "ae4f942d86e03c61aa14dd82fed3923914f5634e"
            };
            var HAd = class {
                static G(a) {
                    N(a, {
                        w3: $6.shallow
                    })
                }
                zPa(...a) {
                    return Q6(this, d7.zPa, gAd, a)
                }
                tPa() {
                    return Q6(this, d7.tPa, Rzd)
                }
                VLa() {
                    return Q6(this, d7.VLa, iAd)
                }
                sSa() {
                    return Q6(this, d7.sSa, Uzd)
                }
                BCa() {
                    return Q6(this, d7.BCa, Vzd)
                }
                YVa(...a) {
                    return Q6(this, d7.YVa, aAd, a)
                }
                yvb(...a) {
                    return Q6(this, d7.yvb, Ozd, a)
                }
                offline() {
                    return Q6(this, d7.offline, cAd)
                }
                loading() {
                    return Q6(this, d7.loading, $zd)
                }
                g2a() {
                    return Q6(this, d7.g2a, Wzd)
                }
                e5a() {
                    return Q6(this, d7.e5a, kAd)
                }
                d5a() {
                    return Q6(this, d7.d5a, Szd)
                }
                AKa() {
                    return Q6(this, d7.AKa, lAd)
                }
                BKa() {
                    return Q6(this, d7.BKa, Tzd)
                }
                OXa() {
                    return Q6(this, d7.OXa, fAd)
                }
                xPa() {
                    return Q6(this, d7.xPa, dAd)
                }
                EPa() {
                    return Q6(this, d7.EPa, jAd)
                }
                sPa() {
                    return Q6(this, d7.sPa, hAd)
                }
                rPa() {
                    return Q6(this, d7.rPa, Mzd)
                }
                BPa(...a) {
                    return Q6(this, d7.BPa, Xzd, a)
                }
                DPa(...a) {
                    return Q6(this, d7.DPa, Pzd, a)
                }
                CPa(...a) {
                    return Q6(this, d7.CPa, bAd, a)
                }
                uPa(...a) {
                    return Q6(this, d7.uPa, Zzd, a)
                }
                wPa(...a) {
                    return Q6(this, d7.wPa, Lzd, a)
                }
                vPa(...a) {
                    return Q6(this, d7.vPa, Qzd, a)
                }
                yPa(...a) {
                    return Q6(this, d7.yPa, Nzd, a)
                }
                APa(...a) {
                    return Q6(this, d7.APa, eAd, a)
                }
                qPa() {
                    return Q6(this, d7.qPa, Yzd)
                }
                e2a() {
                    return Q6(this, d7.e2a, mAd)
                }
                KLa() {
                    return Q6(this, d7.KLa, nAd)
                }
                JLa() {
                    return Q6(this, d7.JLa, oAd)
                }
                iab() {
                    return Q6(this, d7.iab, pAd)
                }
                constructor(a) {
                    this.document = a;
                    this.w3 = (HAd.G(this),
                    void 0);
                    W6( () => a.language, () => Oyd(this), {
                        fireImmediately: !0
                    })
                }
            }
            ;
            var IAd = class extends HAd {
            }
            ;
            var e7 = {
                rf: "form_widget_interacted",
                Eg(a) {
                    return __c.Wr({
                        form_id: a.xO,
                        form_type: a.Zva,
                        action_group: a.yda,
                        action: a.action,
                        location: a.location,
                        linked_design_id: a.SDc,
                        toggle_value: a.WQ,
                        editing_context: a.He == null ? void 0 : __c.Xr(a.He),
                        performance_context: a.Ue == null ? void 0 : __c.Yr(a.Ue),
                        question_type: a.GNc
                    })
                }
            };
            var f7 = class {
                static G(a) {
                    N(a, {
                        kca: S6,
                        wia: $6.ref,
                        jca: S6,
                        S7a: S6,
                        serializedValue: S6,
                        oR: S6
                    })
                }
                reset() {
                    this.wia = !1;
                    this.Bw = this.empty
                }
                get kca() {}
                get sM() {
                    return this.context.mode === "edit" ? this.empty : this.Bw
                }
                get jca() {
                    if (this.isEmpty())
                        return this.required ? Aa({
                            BG: "required"
                        }) : (0,
                        __c.ya)();
                    const a = this.PZa(this.sM);
                    if (a.ok) {
                        const b = this.S7a(a.value);
                        if (b.state === "invalid")
                            return Aa(b.error)
                    }
                    return a
                }
                get S7a() {
                    const a = this.kca?.filter(b => !!b);
                    return a?.length ? qyd(a) : Rk
                }
                get serializedValue() {
                    return this.jca.map( () => this.isEmpty() ? void 0 : this.serialize(this.sM))
                }
                jM() {
                    this.wia = !0
                }
                get oR() {
                    return this.wia && !this.jca.ok && this.context.mode === "interact" ? this.jca.error : void 0
                }
                get required() {
                    return !!this.Md.required
                }
                isEmpty() {
                    const a = this.sM;
                    return a.length === 0 ? !0 : typeof a === "string" ? (a != null && a.trim().length > 0 ? Rk() : Sk()).state === "invalid" : !1
                }
                constructor(a, b, c) {
                    this.Md = a;
                    this.context = b;
                    this.feedback = c;
                    this.wia = (f7.G(this),
                    !1);
                    W6( () => syd(this.context.Tya), d => {
                        d && (this.Bw = (d = d.DLb.get(this.Md.id ?? "")) ? this.S(d) : this.empty,
                        this.wia = !1)
                    }
                    )
                }
            }
            ;
            var JAd = /^\s*-?(?:\d+[, ])*(?:\d*\.)?\d*\s*$/
              , KAd = /[\s,]+/g
              , $yd = class extends f7 {
                static G(a) {
                    N(a, {
                        Bw: $6.ref
                    })
                }
                get min() {
                    return this.Md.min
                }
                get max() {
                    return this.Md.max
                }
                get kca() {
                    return [Vyd({
                        min: this.Md.min,
                        max: this.Md.max
                    })]
                }
                PZa(a) {
                    return a.length <= 50 && JAd.test(a) && (a = a.replace(KAd, ""),
                    a = Number(a),
                    !isNaN(a) && isFinite(a)) ? (0,
                    __c.ya)(a) : Aa({
                        BG: "invalid_format"
                    })
                }
                serialize(a) {
                    return {
                        type: 2,
                        JT: this.Md.id ?? "",
                        aK: this.Md.label.text.stream.da,
                        value: a
                    }
                }
                S(a) {
                    return Uyd(a).W_
                }
                constructor(...a) {
                    super(...a);
                    this.type = ($yd.G(this),
                    "number");
                    this.Bw = this.empty = ""
                }
            }
            ;
            var Yyd = class extends f7 {
                static G(a) {
                    N(a, {
                        Bw: $6.ref,
                        Jrb: S6({
                            equals: mzd.shallow
                        }),
                        kca: S6,
                        aXa: S6
                    })
                }
                get Jrb() {
                    return new Set(this.Md.options.map( ({id: a}) => a ?? ""))
                }
                get kca() {
                    return [Wyd({
                        max: Xyd(this.Md.U9)
                    })]
                }
                PZa(a) {
                    return a.every(b => this.Jrb.has(b)) ? (0,
                    __c.ya)(a.slice()) : Aa({
                        BG: "unknown_option_id"
                    })
                }
                serialize(a) {
                    return {
                        type: 0,
                        JT: this.Md.id ?? "",
                        aK: this.Md.label.text.stream.da,
                        g_a: a,
                        options: this.aXa
                    }
                }
                S(a) {
                    return Tyd(a, this.aXa).W_
                }
                get aXa() {
                    return this.Md.options.map(a => ({
                        id: a.id ?? "",
                        label: a.label.text.stream.da
                    }))
                }
                constructor(...a) {
                    super(...a);
                    this.type = (Yyd.G(this),
                    "select");
                    this.empty = [];
                    this.Bw = [];
                    this.M2a = b => {
                        const c = this.sM;
                        this.Bw = c?.includes(b) ? c.filter(d => d !== b) : Xyd(this.Md.U9) > 1 && c?.length ? [...c, b] : [b]
                    }
                }
            }
            ;
            var Zyd = class extends f7 {
                static G(a) {
                    N(a, {
                        Bw: $6.ref
                    })
                }
                get kca() {
                    const a = __c.va("b9892c2d", 500);
                    return [a != null ? Wyd({
                        min: 0,
                        max: a
                    }) : void 0, this.Md.variant.type === "e" ? pyd(__c.$2b, {
                        BG: "invalid_email"
                    }) : void 0]
                }
                PZa(a) {
                    return (0,
                    __c.ya)(a.trim())
                }
                serialize(a) {
                    return {
                        type: 1,
                        JT: this.Md.id ?? "",
                        aK: this.Md.label.text.stream.da,
                        value: a
                    }
                }
                S(a) {
                    return Uyd(a).W_
                }
                constructor(...a) {
                    super(...a);
                    this.type = (Zyd.G(this),
                    "text");
                    this.Bw = this.empty = ""
                }
            }
            ;
            var LAd = class {
                static G(a) {
                    N(a, {
                        Tya: S6,
                        lZ: S6
                    })
                }
                get Tya() {
                    if (!this.eK || !this.Xm)
                        return {
                            status: 1,
                            data: void 0
                        };
                    const a = this.Xm.getSettings(this.formData.mu);
                    switch (a.status) {
                    case 2:
                    case 3:
                        return a;
                    case 1:
                        return lzd(this.eK, {
                            Gv: this.formData.Gv,
                            submitter: a.data.f2a
                        });
                    default:
                        throw new z(a);
                    }
                }
                get lZ() {
                    if (!this.Xm)
                        return SZ();
                    const a = this.Xm.getSettings(this.formData.mu);
                    return ryd(a, {
                        RE: b => ({
                            Gv: this.formData.Gv,
                            submitter: b.f2a
                        })
                    })
                }
                get mode() {
                    return this.wQa.get()?.getContext(this.formData.id) ? "edit" : "interact"
                }
                constructor(a, b, c, d) {
                    this.formData = a;
                    this.Xm = b;
                    this.eK = c;
                    this.wQa = d;
                    LAd.G(this)
                }
            }
            ;
            var hzd = Symbol()
              , MAd = class {
                static G(a) {
                    N(a, {
                        d0: $6.ref,
                        AN: $6.ref,
                        gCb: S6,
                        nP: $6.ref,
                        HN: S6,
                        SPa: S6({
                            equals: mzd.structural
                        }),
                        S2: S6,
                        CEa: S6,
                        iT: S6,
                        gr: S6,
                        T7a: S6,
                        RIa: S6,
                        WL: S6,
                        tDa: O6
                    })
                }
                get gCb() {
                    if (!this.Xm)
                        return "upsert";
                    const a = this.Xm.getSettings(this.form.mu);
                    return C6(a, {
                        RE: ({tpa: b}) => {
                            switch (b) {
                            case "single":
                                return "upsert";
                            case "multiple":
                                return "create";
                            default:
                                throw new z(b);
                            }
                        }
                        ,
                        loading: () => "upsert",
                        error: () => "upsert"
                    })
                }
                get HN() {
                    const a = this.Xm?.getSettings(this.form.mu);
                    return a?.status === 1 ? a.data.HN : void 0
                }
                get SPa() {
                    var a = syd(this.context.Tya);
                    if (a) {
                        {
                            var b = this.nP;
                            a = a != null ? this.D9.get() : void 0;
                            var c = this.HN;
                            b = b?.ok ? b.value.fWb : b?.error.fWb;
                            const g = new Map;
                            if (b?.size || a?.fields?.size || c?.size) {
                                var d = new Set([...(b?.keys() || []), ...(a?.fields.keys() || []), ...(c?.keys() || [])]);
                                for (f of d) {
                                    d = b?.get(f)?.feedback;
                                    var e = a?.fields.get(f);
                                    e = e ? {
                                        vac: e
                                    } : void 0;
                                    const h = c?.get(f);
                                    d = {
                                        ...d,
                                        ...e,
                                        ...(h ? {
                                            HN: h
                                        } : void 0)
                                    };
                                    Object.keys(d).length > 0 && g.set(f, d)
                                }
                            }
                            var f = g
                        }
                    } else
                        f = new Map;
                    return f
                }
                get S2() {
                    return this.d0 ? 2 : C6(this.context.Tya, {
                        RE: a => a == null ? 1 : 3,
                        loading: () => 4,
                        error: () => 1
                    })
                }
                get CEa() {
                    return this.Xm ? C6(this.Xm.getSettings(this.form.mu), {
                        RE: ({Qtc: a}) => {
                            switch (a) {
                            case "anon":
                                return 0;
                            case "public":
                                return 1;
                            default:
                                throw new z(a);
                            }
                        }
                        ,
                        loading: () => 2,
                        error: () => 0
                    }) : 0
                }
                get iT() {
                    if (this.lb?.status === 2)
                        return 2;
                    if (!this.yO || !this.Xm || !this.eK || this.context.mode === "edit")
                        return 1;
                    switch (this.S2) {
                    case 2:
                        return 5;
                    case 3:
                        return 6;
                    case 4:
                        return 3;
                    case 1:
                        return C6(this.Xm.getSettings(this.form.mu), {
                            RE: () => 0,
                            loading: () => 3,
                            error: () => 4
                        });
                    default:
                        throw new z(this.S2);
                    }
                }
                get gr() {
                    return this.iT === 5 || this.iT === 6 && !this.WL ? 2 : this.iT === 1 ? 1 : this.T7a ? 0 : 3
                }
                get T7a() {
                    if (!this.yO || this.context.mode !== "interact")
                        return !1;
                    switch (this.iT) {
                    case 0:
                        return !0;
                    case 6:
                        return this.WL;
                    default:
                        return !1
                    }
                }
                get RIa() {
                    if (this.WL)
                        return !1;
                    const a = this.Xm?.getSettings(this.form.mu);
                    return a?.status === 1 ? a.data.tpa === "multiple" : !1
                }
                get WL() {
                    return czd(this, "p") && this.Xm != null ? C6(this.Xm.getSettings(this.form.mu), {
                        RE: ({tpa: a}) => a === "single",
                        loading: () => !1,
                        error: () => !1
                    }) : !1
                }
                tDa(a) {
                    this.AN = a
                }
                constructor(a, b, c, d, e, f, g, h, k) {
                    this.form = a;
                    this.yO = b;
                    this.Xm = c;
                    this.eK = d;
                    this.wQa = e;
                    this.lb = f;
                    this.qa = g;
                    this.Bg = h;
                    this.Rz = k;
                    this.TPa = (MAd.G(this),
                    new Map);
                    this.AN = this.d0 = !1;
                    this.D9 = $6.box();
                    this.submit = zzd(function() {
                        const l = this
                          , m = R6(!0)();
                        return function*() {
                            m.r();
                            try {
                                if (l.Rz && !l.AN)
                                    l.Bg?.CA({
                                        MB: L("Ci3xnA")
                                    });
                                else {
                                    var n = l.yO
                                      , p = l.eK
                                      , q = l.context
                                      , r = l.qa
                                      , t = l.form.fields
                                      , w = l.form.mu
                                      , v = l.form.Gv
                                      , A = l.form.id
                                      , B = l.form.type
                                      , C = (l.S2 === 1 || l.WL && l.S2 === 3) && l.context.mode === "interact";
                                    if (n && C && p && q.lZ.status === 1) {
                                        C = !0;
                                        var E = q.lZ.data;
                                        q = [];
                                        for (const J of t) {
                                            const M = T6(l, J.id ?? "");
                                            M.jM();
                                            const O = M.serializedValue;
                                            O.ok ? C && O.value != null && q.push(O.value) : C = !1
                                        }
                                        if (C)
                                            if (q.length === 0)
                                                l.nP = Aa({
                                                    BG: 5,
                                                    Bvb: !1
                                                });
                                            else {
                                                l.d0 = !0;
                                                try {
                                                    const J = m.r(yield m.s(n.nEc({
                                                        mu: w,
                                                        Gv: v,
                                                        DLb: q,
                                                        mode: l.gCb
                                                    })));
                                                    l.nP = kzd(J);
                                                    if (J.ok) {
                                                        var I = J.value.yQc;
                                                        const M = V6(E);
                                                        p.doa.set(M, I);
                                                        p.Q_.set(M, "initialized");
                                                        r?.track(e7, {
                                                            xO: A,
                                                            Zva: B,
                                                            yda: "interacted",
                                                            action: "form_submitted",
                                                            location: "in_form"
                                                        })
                                                    }
                                                } finally {
                                                    m.r(),
                                                    l.d0 = !1
                                                }
                                            }
                                        else
                                            l.nP = Aa({
                                                BG: 6,
                                                Bvb: !1
                                            });
                                        l.nP.ok || izd(l, l.nP.error)
                                    }
                                }
                            } finally {
                                m.s()
                            }
                        }()
                    });
                    this.UMb = () => {
                        this.eK && this.context.lZ.status === 1 && (this.nP = void 0,
                        this.AN = !1,
                        this.eK.taa(this.context.lZ.data),
                        jzd(this),
                        this.qa?.track(e7, {
                            xO: this.form.id,
                            Zva: this.form.type,
                            yda: "interacted",
                            action: "resubmission_started",
                            location: "in_form"
                        }))
                    }
                    ;
                    this.taa = zzd(function() {
                        const l = this
                          , m = R6(!0)();
                        return function*() {
                            m.r();
                            try {
                                const n = l.yO
                                  , p = l.eK
                                  , q = l.context
                                  , r = l.form.Gv
                                  , t = (l.S2 === 1 || l.WL && l.S2 === 3) && l.context.mode === "interact";
                                if (n && t && p && q.lZ.status === 1) {
                                    l.d0 = !0;
                                    try {
                                        m.r(yield m.s(n.taa({
                                            Gv: r
                                        }))).ok ? (l.qa?.track(e7, {
                                            xO: l.form.id,
                                            Zva: "poll",
                                            yda: "interacted",
                                            action: "response_unsubmitted",
                                            location: "in_form"
                                        }),
                                        p.taa(q.lZ.data),
                                        l.nP = void 0) : l.Bg?.CA({
                                            MB: L("kgHTHw"),
                                            group: hzd,
                                            AA: {
                                                AS: L("mQhziQ"),
                                                onClick: O6( () => l.taa())
                                            }
                                        })
                                    } finally {
                                        m.r(),
                                        l.d0 = !1
                                    }
                                }
                            } finally {
                                m.s()
                            }
                        }()
                    });
                    this.LRa = zzd(function(l) {
                        const m = this
                          , n = R6(!0)();
                        return function*() {
                            n.r();
                            try {
                                const p = T6(m, l, "select");
                                p.isEmpty() ? (m.qa?.track(e7, {
                                    xO: m.form.id,
                                    Zva: "poll",
                                    yda: "interacted",
                                    action: "response_unsubmitted",
                                    location: "in_form"
                                }),
                                n.r(yield n.s(m.taa()))) : m.Rz && !m.AN ? (m.Bg?.CA({
                                    MB: L("Ci3xnA")
                                }),
                                p.reset()) : n.r(yield n.s(m.submit()))
                            } finally {
                                n.s()
                            }
                        }()
                    });
                    W6( () => a.Gv, () => {
                        this.nP = void 0;
                        this.AN = !1;
                        this.D9.set(void 0);
                        this.WL && jzd(this)
                    }
                    );
                    this.context = new LAd(a,c,d,e);
                    gzd(this)
                }
            }
            ;
            var NAd = class {
                static G(a) {
                    N(a, {
                        doa: $6.shallow,
                        Q_: $6.shallow
                    })
                }
                taa(a) {
                    a = V6(a);
                    this.doa.delete(a)
                }
                constructor(a, b, c) {
                    this.yO = a;
                    this.Xm = b;
                    this.formData = c;
                    this.doa = (NAd.G(this),
                    new Map);
                    this.Q_ = new Map
                }
            }
            ;
            var g7 = Object.freeze({
                Ok: 16,
                $l: 16,
                Qzc: 1.5625,
                XZ: {
                    fu: 1.25,
                    eu: 1.25,
                    yx: 1
                },
                footer: {
                    z$b: .625,
                    A$b: 1.25,
                    fu: 1.25,
                    eu: 1.25,
                    Gla: .5,
                    kMc: .5,
                    jMc: 1.25
                },
                header: {
                    Fla: 1.25,
                    yx: 1,
                    fu: 1.25,
                    eu: 1.25
                }
            });
            var OAd = __c.va("4073adf", !1)
              , qzd = class {
                get header() {
                    if (!this.ob.z8)
                        return new PAd(this.formData,this.ob)
                }
                get fields() {
                    const a = this.formData.type;
                    return this.formData.fields.map(b => {
                        switch (b.type) {
                        case "select":
                            switch (b.variant?.type) {
                            case "p":
                                return new QAd(b,this.ob);
                            case "q":
                                return new RAd(b,this.ob);
                            case void 0:
                                switch (a) {
                                case "quiz":
                                    return new RAd(b,this.ob);
                                case "poll":
                                    return new QAd(b,this.ob);
                                default:
                                    throw new z(a);
                                }
                            case "r":
                                return new SAd(b,this.ob);
                            default:
                                throw new z(b.variant);
                            }
                        case "text":
                            switch (b.variant.type) {
                            case "f":
                                return new TAd(b,this.ob);
                            case "e":
                                return new UAd(b,this.ob);
                            default:
                                throw new z(b.variant);
                            }
                        case "number":
                            switch (b.variant.type) {
                            case "a":
                                return new VAd(b,this.ob);
                            case "b":
                                return new WAd(b,this.ob);
                            case "c":
                                return new XAd(b,this.ob);
                            case "d":
                                return new YAd(b,this.ob);
                            default:
                                throw new z(b.variant);
                            }
                        default:
                            throw new z(b);
                        }
                    }
                    )
                }
                get AA() {
                    if (this.formData.footer.ref && (this.fields.length !== 1 || this.fields[0].type !== 1 || !C6(this.ob.settings, {
                        RE: a => a.tpa === "single",
                        default: () => !0
                    })))
                        return {
                            backgroundColor: {
                                default: this.ob.Ga.accentColor,
                                Ei: this.ob.Ga.TKb,
                                active: this.ob.Ga.SKb,
                                Cp: this.ob.Ga.VKb
                            },
                            label: this.formData.footer.ref?.label.text,
                            padding: {
                                va: this.ob.$l * .64,
                                Ea: this.ob.$l * .64,
                                Ca: this.ob.$l * .64,
                                ab: this.ob.$l * .64
                            }
                        }
                }
                get settings() {
                    return ryd(this.ob.settings, {
                        RE: a => ({
                            submitter: a.f2a
                        })
                    })
                }
                get footer() {
                    const a = OAd && C6(this.ob.settings, {
                        RE: c => !!c.mOc,
                        default: () => !1
                    })
                      , b = this.ob.Ok;
                    return {
                        YRa: b * __c.dhd,
                        EN: b * .625,
                        URa: a,
                        Yfc: pzd(this.fields),
                        ne: this.ob.Ga.p9a
                    }
                }
                get fha() {
                    const a = this.ob.$l
                      , b = this.formData.XZ?.ref;
                    return {
                        va: a * 1,
                        Ca: a * (b?.fu ?? g7.XZ.fu),
                        ab: a * (b?.eu ?? g7.XZ.eu),
                        Ea: a * (b?.yx ?? g7.XZ.yx),
                        rowGap: a * 2
                    }
                }
                get QT() {
                    const a = !!this.AA
                      , b = this.ob.$l;
                    return {
                        Ea: b * (this.formData.footer.ref?.yx ?? (a ? g7.footer.z$b : g7.footer.A$b)),
                        Ca: b * (this.formData.footer.ref?.fu ?? g7.footer.fu),
                        ab: b * (this.formData.footer.ref?.eu ?? g7.footer.eu),
                        Nza: b * (this.formData.footer.ref?.Gla ?? (a ? g7.footer.Gla : 0)),
                        d2a: b * .64,
                        c2a: b * .64
                    }
                }
                constructor(a, b) {
                    this.formData = a;
                    this.ob = new ZAd(a,b);
                    this.oj = new $Ad(a,this.ob)
                }
            }
              , ZAd = class {
                static G(a) {
                    N(a, {
                        Ga: S6
                    })
                }
                get Ga() {
                    return __c.bhd(this.Lz, this.QL, this.pmc, this.formData.header.ref?.background?.ref)
                }
                get Lz() {
                    return D6(this.formData.ima)
                }
                get QL() {
                    return D6(this.formData.cna)
                }
                get direction() {
                    return this.formData.direction === "r" ? "r" : "l"
                }
                get settings() {
                    return this.Xm ? this.Xm.getSettings(this.formData.mu) : {
                        status: 2
                    }
                }
                get G7b() {
                    return this.formData.fields.count()
                }
                get z8() {
                    return this.formData.z8 ? !0 : (this.formData.dSa || this.formData.title.ref?.label == null) && this.formData.ZDa === !1
                }
                get dQa() {
                    return this.G7b === 1 && (this.formData.ZDa ?? !0)
                }
                get Ok() {
                    if (this.formData.Ok)
                        return this.formData.Ok;
                    const a = Zh(this.Iva.label.text.stream.Dk(0), "font-size");
                    return this.dQa ? a / (this.Iva.YTa ?? 1.5625) : a
                }
                get $l() {
                    return this.formData.$l ?? 16
                }
                get pmc() {
                    return this.Iva.mP === "u" ? Zh(this.Iva.label.text.stream.Dk(0), "color") : void 0
                }
                get Iva() {
                    return __c.y(this.formData.fields.first(), "Malformed form data")
                }
                constructor(a, b) {
                    this.formData = a;
                    this.Xm = b;
                    ZAd.G(this)
                }
            }
              , $Ad = class {
                get background() {
                    return this.formData.cna
                }
                get border() {
                    return this.formData.border
                }
                get X() {
                    return this.formData.X ?? 0
                }
                get fontFamily() {
                    return this.formData.Nta
                }
                get direction() {
                    return this.formData.direction === "r" ? "r" : "l"
                }
                constructor(a, b) {
                    this.formData = a;
                    this.ob = b
                }
            }
              , PAd = class {
                get background() {
                    return this.formData.header?.ref?.background.ref ?? this.formData.ima
                }
                get label() {
                    var a = this.formData.fields.first();
                    return (a = this.ob.dQa ? a.label.text : this.formData.title?.ref?.label) ? aBd(a, this.ob.direction) : J6("", {
                        "font-size": this.ob.Ok * 1.953,
                        direction: ozd(this.ob.direction)
                    })
                }
                get padding() {
                    const a = this.formData.header.ref;
                    return {
                        va: this.ob.$l * (a?.Fla ?? g7.header.Fla),
                        Ea: this.ob.$l * (a?.yx ?? g7.header.yx),
                        Ca: this.ob.$l * (a?.fu ?? g7.header.fu),
                        ab: this.ob.$l * (a?.eu ?? g7.header.eu)
                    }
                }
                constructor(a, b) {
                    this.formData = a;
                    this.ob = b
                }
            }
              , bBd = class {
                get id() {
                    return this.Md.id || ""
                }
                get label() {
                    return aBd(this.Md.label.text, this.ob.direction)
                }
                get cBb() {
                    return !this.ob.dQa
                }
                get accentColor() {
                    return this.ob.Ga.accentColor
                }
                get errorColor() {
                    return this.ob.Ga.errorColor
                }
                get pVb() {
                    return this.ob.Ok * .8
                }
                get Ok() {
                    return this.ob.Ok
                }
                get $l() {
                    return this.ob.$l
                }
                get padding() {
                    return {
                        T2b: this.ob.$l * .512,
                        Na: this.ob.$l * .64
                    }
                }
                constructor(a, b) {
                    this.Md = a;
                    this.ob = b
                }
            }
              , cBd = class extends bBd {
                get placeholder() {
                    return {
                        color: __c.q4(this.ob.Ga.PF, .5),
                        text: this.Md.placeholder || ""
                    }
                }
                get X() {
                    return this.Md.X ?? 8
                }
                get borderColor() {
                    return {
                        default: this.ob.Ga.QLa,
                        Ei: this.ob.Ga.SLa,
                        focus: this.ob.Ga.RLa,
                        error: this.ob.Ga.errorColor
                    }
                }
                get ne() {
                    return {
                        default: this.ob.Ga.PF,
                        Cp: this.ob.Ga.zra
                    }
                }
                get sizes() {
                    return {
                        lfa: this.ob.Ok * 1,
                        fd: this.ob.Ok * 1.5,
                        TJa: this.ob.Ok * .0625
                    }
                }
                constructor(...a) {
                    super(...a);
                    this.type = 4
                }
            }
              , TAd = class extends cBd {
                get jV() {
                    return this.Md.variant.jV
                }
                constructor(...a) {
                    super(...a);
                    this.variant = 2
                }
            }
              , UAd = class extends cBd {
                constructor(...a) {
                    super(...a);
                    this.jV = this.variant = 1
                }
            }
              , h7 = class extends bBd {
                get X() {
                    return this.Md.X ?? 8
                }
                constructor(...a) {
                    super(...a);
                    this.type = 5
                }
            }
              , VAd = class extends h7 {
                get borderColor() {
                    return {
                        default: this.ob.Ga.QLa,
                        Ei: this.ob.Ga.SLa,
                        focus: this.ob.Ga.RLa,
                        error: this.ob.Ga.errorColor
                    }
                }
                get ne() {
                    return this.ob.Ga.PF
                }
                get sizes() {
                    return {
                        lfa: this.ob.Ok * 1,
                        fd: this.ob.Ok * 1.5,
                        TJa: this.ob.Ok * .0625
                    }
                }
                get gridGap() {
                    return this.ob.$l * .41
                }
                constructor(...a) {
                    super(...a);
                    this.variant = 1
                }
            }
              , WAd = class extends h7 {
                get backgroundColor() {
                    return {
                        default: this.ob.Ga.rfa,
                        Ei: this.ob.Ga.sfa,
                        active: this.ob.Ga.Ysa,
                        selected: this.ob.Ga.Zsa,
                        error: this.ob.Ga.errorColor,
                        Cp: this.ob.Ga.j6
                    }
                }
                get D8() {
                    return {
                        default: this.ob.Ga.PF,
                        selected: this.ob.Ga.xda
                    }
                }
                get sizes() {
                    return {
                        lKa: this.ob.Ok * 2.5,
                        fd: this.ob.Ok * 1.953
                    }
                }
                get gridGap() {
                    return this.ob.$l * .41
                }
                constructor(...a) {
                    super(...a);
                    this.variant = 2
                }
            }
              , XAd = class extends h7 {
                get borderColor() {
                    return {
                        default: this.ob.Ga.PF,
                        Cp: this.ob.Ga.zra
                    }
                }
                get fillColor() {
                    return {
                        Ei: this.ob.Ga.sfa,
                        selected: this.ob.Ga.Zsa,
                        Cp: this.ob.Ga.j6
                    }
                }
                get fd() {
                    return this.ob.Ok * 2.2
                }
                get gridGap() {
                    return this.ob.$l * .41
                }
                constructor(...a) {
                    super(...a);
                    this.variant = 3
                }
            }
              , YAd = class extends h7 {
                get backgroundColor() {
                    return {
                        default: this.ob.Ga.rfa,
                        Ei: this.ob.Ga.sfa,
                        active: this.ob.Ga.Ysa,
                        selected: this.ob.Ga.Zsa,
                        error: this.ob.Ga.errorColor,
                        Cp: this.ob.Ga.j6
                    }
                }
                get ne() {
                    return {
                        default: this.ob.Ga.PF,
                        selected: this.ob.Ga.xda
                    }
                }
                get sizes() {
                    return {
                        lKa: this.ob.Ok * 2.5,
                        lfa: this.ob.Ok * 1
                    }
                }
                get gridGap() {
                    return this.ob.$l * .41
                }
                constructor(...a) {
                    super(...a);
                    this.variant = 4
                }
            }
              , eBd = class extends bBd {
                get options() {
                    return this.Md.options.map(a => new dBd(a,this.ob))
                }
                get CE() {
                    return {
                        default: this.ob.Ga.rfa,
                        Ei: this.ob.Ga.sfa,
                        active: this.ob.Ga.Ysa,
                        selected: this.ob.Ga.Zsa,
                        error: this.ob.Ga.errorColor,
                        Cp: this.ob.Ga.j6
                    }
                }
                get KH() {
                    return {
                        default: this.ob.Ga.PF,
                        selected: this.ob.Ga.xda,
                        Cp: this.ob.Ga.zra
                    }
                }
                get ZCa() {
                    return this.Md.U9 !== void 0 && this.Md.U9 !== 1 ? "m" : "s"
                }
                get X() {
                    return this.Md.X ?? 8
                }
                get rowGap() {
                    return .512 * this.ob.$l
                }
                get sizes() {
                    return {
                        fd: this.ob.Ok * 1,
                        ZKa: this.ob.Ok * 1,
                        mOb: this.ob.Ok * .5,
                        oOb: this.ob.Ok * .625
                    }
                }
            }
              , RAd = class extends eBd {
                static G(a) {
                    N(a, {
                        settings: S6
                    })
                }
                get settings() {
                    return C6(this.ob.settings, {
                        RE: a => (a = a.HN.get(this.id) ?? []) ? {
                            status: 1,
                            data: {
                                WLa: a
                            }
                        } : SZ(),
                        loading: () => ({
                            status: 2
                        }),
                        error: () => SZ()
                    })
                }
                constructor(...a) {
                    super(...a);
                    this.type = (RAd.G(this),
                    2)
                }
            }
              , QAd = class extends eBd {
                get O4a() {
                    return {
                        text: this.ob.Ga.xda,
                        track: this.ob.Ga.UKb,
                        iS: this.ob.Ga.accentColor
                    }
                }
                get R3a() {
                    return {
                        text: this.ob.Ga.PF,
                        track: this.ob.Ga.j6,
                        iS: this.ob.Ga.rfa
                    }
                }
                constructor(...a) {
                    super(...a);
                    this.type = 1
                }
            }
              , SAd = class extends eBd {
                constructor(...a) {
                    super(...a);
                    this.type = 3
                }
            }
              , dBd = class {
                get id() {
                    return this.option.id || ""
                }
                get label() {
                    return aBd(this.option.label.text, this.ob.direction)
                }
                constructor(a, b) {
                    this.option = a;
                    this.ob = b
                }
            }
              , aBd = Bzd( (a, b) => {
                const c = ozd(b);
                a = a.tn();
                b = a.stream.u0(d => d === "direction", () => [c, __c.Yh.encode("direction", c)]);
                return km.create({
                    ...a,
                    stream: b
                })
            }
            );
            var fBd = class {
                static G(a) {
                    N(a, {
                        K5: $6.shallow
                    })
                }
                getSettings(a) {
                    const b = a || ""
                      , c = this.K5.get(b);
                    if (c)
                        return c;
                    U6( () => this.K5.set(b, {
                        status: 2
                    }));
                    this.yO.$Ac(a).then(P6.wrap(d => {
                        U6( () => {
                            this.K5.set(b, d.ok ? {
                                status: 1,
                                data: d.value
                            } : SZ())
                        }
                        )
                    }
                    ), P6.wrap( () => {
                        U6( () => {
                            this.K5.set(b, SZ())
                        }
                        )
                    }
                    ));
                    return __c.y(this.K5.get(b))
                }
                constructor(a) {
                    this.yO = a;
                    this.K5 = (fBd.G(this),
                    new Map)
                }
            }
            ;
            var gBd;
            gBd = new Dzd({
                CLb: !1,
                tpa: 1
            });
            __c.vld = {
                Sk: __c.ry()( ({Ly: {qa: a, Bg: b, lb: c}, ig: {M8: d, so: e, Rz: f}}) => {
                    function g({xO: n, Lg: p}) {
                        __c.u(!0);
                        n = __c.GC(__c.GC(new __c.gTa("/form-data-processing"), "formUrl", window.location.href), "formId", n);
                        p && __c.GC(n, "designId", p);
                        const q = window.location.origin + __c.HC(n);
                        return {
                            href: encodeURIComponent(q),
                            onClick: e ? () => {
                                e.Tka ? e.Tka(new __c.uab({
                                    uri: q
                                })) : e.Yza(new __c.aA({
                                    uri: q,
                                    target: 2
                                }))
                            }
                            : void 0
                        }
                    }
                    const h = Ezd && f
                      , k = $6.box()
                      , l = d?.()
                      , m = new WeakMap;
                    return {
                        ...__c.WU,
                        metadata: {
                            type: "form",
                            cM: n => n.value.id,
                            name: L("w/Qzlg")
                        },
                        C: __c.qy(X6( ({data: n, Jd: p, Ma: q}) => {
                            const r = q.page.container
                              , t = n.C.value
                              , w = t.id
                              , v = r.id
                              , A = H6( () => new IAd(r), [r])
                              , [B,C] = uyd();
                            wzd( () => {
                                l && l.then(P6.wrap(O => C(O)))
                            }
                            , []);
                            var E = H6( () => {
                                var O = m.get(t);
                                if (O && O.xO === w && O.Lg === v)
                                    return O;
                                let R, S, Q;
                                B && v && (R = B.wAc.Ib({
                                    xO: w,
                                    Lg: v,
                                    zzc: r.extension,
                                    mu: t.mu ?? void 0,
                                    sPc: gBd
                                }),
                                S = new fBd(R),
                                Q = new NAd(R,S,t));
                                O = new MAd(t,R,S,Q,k,c,a,b,h);
                                O = {
                                    xO: w,
                                    Lg: v,
                                    Xm: S,
                                    eK: Q,
                                    Ot: O
                                };
                                R && S && Q && m.set(t, O);
                                return O
                            }
                            , [B, w, v, t, r.extension]);
                            const I = E.Xm
                              , J = E.Ot
                              , M = E.eK;
                            wzd( () => {
                                if (M)
                                    return nzd(M)
                            }
                            , [M]);
                            n = rzd({
                                data: n,
                                Xm: I
                            });
                            E = g({
                                xO: w,
                                Lg: v
                            });
                            return F6(GAd, {
                                Ot: J,
                                So: {
                                    wi: p.wi,
                                    ih: p.ih,
                                    z4: p.z4,
                                    eda: p.eda
                                },
                                state: n,
                                ds: A,
                                dXb: E,
                                hv: q.On,
                                Rz: h
                            })
                        }
                        )),
                        KJ: ["email", "controlled"],
                        exports: {
                            BTb: k
                        }
                    }
                }
                )
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/b4d042016c31e5e5.js.map
