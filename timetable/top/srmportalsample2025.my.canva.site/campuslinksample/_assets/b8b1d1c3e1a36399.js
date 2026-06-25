(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[5936], {

    /***/
    485323: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var ww = __c.ww;
            var XC = __c.XC;
            var Zc = __c.Zc;
            var wm = __c.wm;
            var iq = __c.iq;
            var N = __c.N;
            var gu = __c.gu;
            var z = __c.z;
            var L = __c.L;
            var Pp = __c.Pp;
            var y = __c.y;
            var R2 = function(a, b, c) {
                const d = [a];
                for (; a != null && a !== b; )
                    (a = c.next(a)) && d.push(a);
                return d
            }
              , fdd = function(a) {
                const b = [];
                a = a.filter(c => c.weight !== 0 && c.color != null);
                a = __c.Eq(a, c => c.weight);
                a = Array.from(a.entries()).sort( ([c], [d]) => c - d);
                for (const [c,d] of a) {
                    a = __c.Eq(d, e => `${e.jm}_${e.km}`);
                    for (const [,e] of a) {
                        const {km: f, jm: g} = e[0];
                        a = __c.Eq(e, h => h.color);
                        for (const [h,k] of a)
                            b.push({
                                weight: c,
                                color: h,
                                lines: k,
                                jm: g,
                                km: f
                            })
                    }
                }
                return b
            }
              , gdd = function(a, b, c, d, e, f) {
                const g = new Map;
                if (e.length === 0 || f.length === 0)
                    return g;
                const h = a.EAb.nQb(d, b.last(), c.last());
                a = (r, t) => {
                    const w = h.get(r) || 0
                      , v = h.get(t) || 0;
                    return w <= v ? r : t
                }
                ;
                var k = []
                  , l = c.previous(f[0].column);
                l && k.push({
                    column: l,
                    boundary: "start"
                });
                k.push(...f);
                (f = c.next(f[f.length - 1].column)) && k.push({
                    column: f,
                    boundary: "start"
                });
                f = [];
                (l = b.previous(e[0].ta)) && f.push({
                    ta: l,
                    boundary: "start"
                });
                f.push(...e);
                (e = b.next(e[e.length - 1].ta)) && f.push({
                    ta: e,
                    boundary: "start"
                });
                for (const r of k) {
                    k = (e = r.boundary === "start" ? r.column : void 0) ? c.previous(e) : c.last();
                    for (const t of f) {
                        var m = t.boundary === "start" ? t.ta : void 0;
                        l = m ? b.previous(m) : b.last();
                        var n = e && m && d.get(`${e.id}:${m.id}`)
                          , p = e && l && d.get(`${e.id}:${l.id}`);
                        m = k && m && d.get(`${k.id}:${m.id}`);
                        var q = k && l && d.get(`${k.id}:${l.id}`);
                        l = r.boundary === "end" ? m?.ab : n?.Ca;
                        n = t.boundary === "end" ? p?.Ea : n?.va;
                        p = r.boundary === "end" ? q?.ab : p?.Ca;
                        m = t.boundary === "end" ? q?.Ea : m?.va;
                        q = __c.wsa({
                            va: p,
                            Ea: l,
                            Ca: m,
                            ab: n
                        }, a);
                        let w;
                        switch (q) {
                        case "blockStart":
                            w = p;
                            break;
                        case "blockEnd":
                            w = l;
                            break;
                        case "inlineStart":
                            w = m;
                            break;
                        case "inlineEnd":
                            w = n;
                            break;
                        default:
                            w = void 0
                        }
                        const {height: v, width: A} = w?.ve === 1 ? {
                            height: w.weight,
                            width: w.weight
                        } : {
                            height: Math.max(m?.weight || 0, n?.weight || 0),
                            width: Math.max(p?.weight || 0, l?.weight || 0)
                        };
                        g.set(S2(r, t), __c.Fq(q, v / 2, A / 2))
                    }
                }
                return g
            }
              , hdd = function(a, b, c, d, e, f, g, h) {
                var k = __c.Pnc
                  , l = f.get()
                  , m = g.get();
                f = d.last();
                var n = e.last();
                g = [];
                for (var p = 0; p < l.length; p++) {
                    var q = l[p];
                    g.push({
                        ta: q,
                        boundary: "start"
                    });
                    q === f && g.push({
                        ta: q,
                        boundary: "end"
                    })
                }
                f = [];
                for (p = 0; p < m.length; p++)
                    q = m[p],
                    f.push({
                        column: q,
                        boundary: "start"
                    }),
                    q === n && f.push({
                        column: q,
                        boundary: "end"
                    });
                n = new Map;
                for (p = 0; p < l.length; p++) {
                    q = l[p];
                    for (let A = 0; A < m.length; A++) {
                        const B = m[A]
                          , C = k.EAb.Ucc(a, b, c, B, q);
                        C && n.set(`${B.id}:${q.id}`, C)
                    }
                }
                if (g.length === 0 || f.length === 0)
                    var r = [];
                else {
                    b = [];
                    for (r of g)
                        for (var t of f) {
                            c = r.ta;
                            m = t.column;
                            if ((l = a.layout.cells.get(c, m)) && (r.boundary === "start" ? l.span.tc !== c : l.span.Ad !== c))
                                continue;
                            c = n.get(`${m.id}:${c.id}`);
                            c = r.boundary === "start" ? c?.va : c?.Ea;
                            if (!c)
                                continue;
                            l = b[b.length - 1];
                            m = (m = e.next(m)) ? {
                                column: m,
                                boundary: "start"
                            } : {
                                column: y(e.last()),
                                boundary: "end"
                            };
                            if (p = l)
                                p = l.gPa,
                                p = p.column === t.column && p.boundary === t.boundary;
                            p && (p = l.Pvb,
                            p = p.ta === r.ta && p.boundary === r.boundary);
                            p && l.color === c.color && l.weight === c.weight && l.ve === c.ve && l.ve === 0 ? l.gPa = m : b.push({
                                Pvb: r,
                                Egc: t,
                                gPa: m,
                                color: c.color,
                                weight: c.weight,
                                ve: c.ve
                            })
                        }
                    r = b;
                    t = [];
                    for (v of f)
                        for (var w of g) {
                            l = w.ta;
                            c = v.column;
                            if ((b = a.layout.cells.get(l, c)) && (v.boundary === "start" ? b.span.Tc !== c : b.span.Ie !== c))
                                continue;
                            b = n.get(`${c.id}:${l.id}`);
                            b = v.boundary === "start" ? b?.Ca : b?.ab;
                            if (!b)
                                continue;
                            if (v.boundary === "start" && h(l, c) === 1)
                                continue;
                            c = t[t.length - 1];
                            l = (l = d.next(l)) ? {
                                ta: l,
                                boundary: "start"
                            } : {
                                ta: y(d.last()),
                                boundary: "end"
                            };
                            if (m = c)
                                m = c.K$a,
                                m = m.column === v.column && m.boundary === v.boundary;
                            m && (m = c.mPa,
                            m = m.ta === w.ta && m.boundary === w.boundary);
                            m && c.color === b.color && c.weight === b.weight && c.ve === b.ve && c.ve === 0 ? c.mPa = l : t.push({
                                K$a: v,
                                Wgc: w,
                                mPa: l,
                                color: b.color,
                                weight: b.weight,
                                ve: b.ve
                            })
                        }
                    var v = t;
                    h = gdd(k, d, e, n, g, f);
                    d = k.TYb(d);
                    e = k.aYb(a, e);
                    a = a.direction === "rtl" ? -1 : 1;
                    k = [];
                    for (w = 0; w < v.length; w++) {
                        n = v[w];
                        l = n.K$a;
                        m = n.Wgc;
                        c = n.mPa;
                        g = n.color;
                        f = n.weight;
                        n = n.ve;
                        t = h.get(S2(l, m))?.Ea;
                        b = h.get(S2(l, c))?.va;
                        if (t == null || b == null)
                            continue;
                        p = y(e.get(l.column));
                        q = y(d.get(m.ta));
                        m = y(d.get(c.ta));
                        l = l.boundary === "start" ? p.start : p.end;
                        p = q.start;
                        c = c.boundary === "start" ? m.start : m.end;
                        m = __c.Kq(c - p, n * f, t);
                        k.push({
                            color: g,
                            weight: f,
                            ve: n,
                            p1: new Pp(l,p + t),
                            p2: new Pp(l,c + b),
                            jm: m.jm,
                            km: m.km
                        })
                    }
                    for (v = 0; v < r.length; v++) {
                        f = r[v];
                        l = f.Egc;
                        b = f.gPa;
                        c = f.Pvb;
                        w = f.color;
                        g = f.weight;
                        f = f.ve;
                        n = h.get(S2(l, c))?.ab;
                        t = h.get(S2(b, c))?.Ca;
                        if (n == null || t == null)
                            continue;
                        m = y(d.get(c.ta));
                        p = y(e.get(l.column));
                        l = y(e.get(b.column));
                        c = c.boundary === "start" ? m.start : m.end;
                        m = p.start;
                        b = b.boundary === "start" ? l.start : l.end;
                        l = __c.Kq((b - m) * a, f * g, n);
                        k.push({
                            color: w,
                            weight: g,
                            ve: f,
                            p1: new Pp(m + n * a,c),
                            p2: new Pp(b + t * a,c),
                            jm: l.jm,
                            km: l.km
                        })
                    }
                    r = k
                }
                return fdd(r)
            }
              , idd = function(a) {
                switch (a) {
                case 2:
                    return L("ibdecg");
                case 7:
                    return L("446quA");
                case 5:
                    return L("j1fbqg");
                case 1:
                    return L("O5i4AQ");
                case 6:
                    return L("C0VHsg");
                case 4:
                    return L("9ND0kg");
                case -1:
                    return L("RWqnLA");
                case 9:
                    return L("nQR/7w");
                case -2:
                    return L("P23rtA");
                case 3:
                    return L("+IXmVg");
                default:
                    throw new z(a);
                }
            }
              , T2 = function(a) {
                return b => ({
                    type: "react",
                    node: (0,
                    __c.K)(a, {
                        ...b
                    })
                })
            }
              , kdd = async function(a, b) {
                const c = jdd()();
                try {
                    const h = a.IFb.get(b);
                    if (h != null)
                        return Promise.resolve({
                            url: h.SCb,
                            width: h.TCb || h.width,
                            height: h.RCb || h.height
                        });
                    const k = c.r(await c.s(__c.fA(b, a.Ut)));
                    var d = c.r
                      , e = c.s
                      , f = a.wg;
                    const l = __c.iTa((new URL(k)).pathname);
                    var g = l ? f ? f.iYb(new __c.kTa(l)) : Promise.reject(Error("DocumentService not provided")) : Promise.reject(Error("Invalid document path"));
                    const m = d.call(c, await e.call(c, g)).document.oh.ekb.Kba.images.at(0);
                    return m && m.page !== 0 ? {
                        url: m.url,
                        width: m.width,
                        height: m.height
                    } : Promise.reject(Error("No thumbnail found"))
                } finally {
                    c.s()
                }
            }
              , ldd = function(a) {
                var b = a.pI;
                const c = a.content
                  , d = a.context
                  , e = a.pv;
                __c.x(c?.mh?.type === "formula");
                const f = c.yl;
                a = {
                    type: "dom",
                    render: g => g.innerText = ""
                };
                switch (f.type) {
                case 9:
                    b = a;
                    break;
                case 6:
                    b = b.FHa?.({
                        content: __c.JP.zk({
                            ...__c.l5b,
                            value: f.value
                        }),
                        context: d
                    });
                    break;
                case 8:
                    if (c.mp && c.mp.type === "embed")
                        switch (c.mp.Jt) {
                        case "PILL":
                            b = b.IHa?.({
                                context: d,
                                pv: e
                            });
                            break;
                        case "THUMBNAIL":
                            b = b.OHa?.({
                                content: __c.LP.zk({
                                    ...__c.m5b,
                                    value: f.value
                                }),
                                context: d
                            });
                            break;
                        default:
                            throw new z(c.mp.Jt);
                        }
                    else
                        b = b.qqa?.({
                            context: d,
                            value: c.Ju,
                            valueType: c.yl.type
                        });
                    break;
                case 1:
                case 3:
                case 4:
                case 2:
                case 7:
                    b = b.qqa?.({
                        context: d,
                        value: c.Ju,
                        valueType: c.yl.type
                    });
                    break;
                case 0:
                    b = {
                        type: "react",
                        node: U2(__c.ye, {
                            label: idd(f.error),
                            children: U2(__c.Rd, {
                                className: "qErWHQ",
                                children: U2(__c.NJc, {
                                    tone: "critical"
                                })
                            })
                        })
                    };
                    break;
                default:
                    throw new z(f);
                }
                return b ?? a
            }
              , sdd = function(a) {
                const b = a.wg
                  , c = a.embeds
                  , d = a.pI
                  , e = a.zb
                  , f = a.kh
                  , g = a.Zhc
                  , h = a.Ut
                  , k = a.gb;
                d.qqa = l => __c.UUa({
                    ...l,
                    gb: k
                });
                d.J6a = l => ldd({
                    ...l,
                    pI: d
                });
                d.I6a = l => mdd({
                    ...l
                });
                d.FHa = T2(ndd({
                    kh: f,
                    x4: void 0,
                    zb: e
                }));
                a = new odd(b,h,c);
                d.OHa = T2(pdd({
                    voa: a,
                    zb: e
                }));
                d.K6a = qdd(g, k);
                d.L6a = T2(l => U2(rdd, {
                    ...l,
                    gb: k
                }))
            }
              , vdd = function({label: a, yb: b, fd: c, E8: d, tb: e, width: f, height: g, scale: h, Q$a: k}) {
                return U2("div", {
                    style: {
                        width: f,
                        height: g,
                        transform: `scale(${h})`
                    },
                    className: "bx74uQ",
                    children: U2(tdd, {
                        tb: e,
                        children: V2(__c.te, {
                            className: W2("ivlMMQ", udd(k), {
                                gMAkdw: d === "pointer"
                            }),
                            size: "small",
                            alignment: "center",
                            children: [b && U2(b, {
                                size: c ?? "small"
                            }), a]
                        })
                    })
                })
            }
              , tdd = function({children: a, tb: b}) {
                return b ? U2(__c.jlb, {
                    state: new __c.hlb({
                        open: !0
                    }),
                    label: b,
                    children: a
                }) : a
            }
              , udd = function(a) {
                return {
                    _2BX0vg: a === "primary-default",
                    JfW_Cg: a === "primary-low",
                    isMgNg: a === "primary-active",
                    xwWDeQ: a === "secondary-default",
                    w0EyUQ: a === "secondary-low",
                    _8p5AIA: a === "secondary-active"
                }
            }
              , wdd = function(a) {
                return {
                    o_1rMw: a === "primary-top",
                    pNOpkg: a === "primary-inline-start"
                }
            }
              , ydd = function({Rh: a, Ejb: b, scale: c, Xu: d, onMouseDown: e, onTouchStart: f, Yu: g, aHb: h, vbb: k}) {
                const l = X2( () => {
                    const q = d?.get();
                    if (q != null && q.length !== 0)
                        return new __c.az(q)
                }
                , [d])
                  , m = g(1)
                  , n = g(c)
                  , p = {
                    ssE9Tg: !a,
                    OkifGQ: a
                };
                return U2(__c.ve, {
                    Hy: "light",
                    light: "light",
                    mD: "light",
                    dark: "light",
                    children: q => U2("div", {
                        className: W2("ze9QCQ", p, q.className),
                        style: {
                            width: n,
                            height: n
                        },
                        children: U2("div", {
                            style: {
                                width: m,
                                height: m,
                                transform: `scale(${c})`
                            },
                            className: W2("N7J3UA", p),
                            onMouseDown: e,
                            onTouchStart: f,
                            ref: l?.Cm,
                            children: U2(__c.wv, {
                                className: W2("m8CFdg", p, {
                                    G6wL4w: h,
                                    W_E0wA: b,
                                    _52RFdg: k === "move"
                                }),
                                ariaLabel: L("ruWN9A"),
                                children: U2(xdd, {
                                    size: "tiny"
                                })
                            })
                        })
                    })
                })
            }
              , Add = function({zb: a}) {
                const b = new zdd
                  , c = new __c.tu
                  , d = Y2(g => {
                    const {scale: h=1, vjb: k, size: l="small", aHb: m=!0} = g
                      , n = Z2(p => b.Yu({
                        scale: p,
                        size: l,
                        zp: k
                    }), [l, k]);
                    return U2(ydd, {
                        ...g,
                        scale: k ? Math.max(h, k) : h,
                        Rh: g.sheet.direction === "rtl",
                        Ejb: g.selection != null && b.m2b(g.sheet, a, g.selection),
                        Yu: n,
                        aHb: m,
                        vbb: g.vbb,
                        onMouseDown: g.onMouseDown,
                        onTouchStart: g.onTouchStart
                    })
                }
                )
                  , e = Y2(g => {
                    const {scale: h=1, vjb: k, size: l="small", sheet: m, selection: n, Rdc: p, Ndc: q} = g
                      , r = Z2(C => b.Yu({
                        scale: C,
                        size: l,
                        zp: k
                    }), [l, k])
                      , t = k ? Math.max(h, k) : h
                      , w = Z2(C => n != null && b.f_a(n).has(C), [n])
                      , v = Z2(C => n != null && b.j_b(m, a, n).has(C), [m, n])
                      , A = Z2(C => {
                        var E = a.layout.Ik.ej(m);
                        E = p != null && E.qf(C, p.Tc) >= 0 && E.qf(C, p.Ie) <= 0;
                        return w(C) ? E ? "secondary-active" : "primary-active" : v(C) ? E ? "secondary-low" : "primary-low" : E ? "secondary-default" : "primary-default"
                    }
                    , [m, p, v, w])
                      , B = Z2(C => {
                        if (!q || w(C))
                            return "none";
                        const E = a.layout.Ik.ej(m);
                        return q.some(I => E.qf(C, I.Tc) >= 0 && E.qf(C, I.Ie) <= 0) ? "primary-top" : "none"
                    }
                    , [m, q, w]);
                    return U2($2, {
                        ...g,
                        Fd: h,
                        ee: t,
                        Yu: r,
                        EO: A,
                        BO: B,
                        cL: c,
                        zb: a
                    })
                }
                )
                  , f = Y2(g => {
                    const {scale: h=1, vjb: k, size: l="small", sheet: m, selection: n, Rdc: p, Ndc: q} = g
                      , r = Z2(C => b.Yu({
                        scale: C,
                        size: l,
                        zp: k
                    }), [l, k])
                      , t = k ? Math.max(h, k) : h
                      , w = Z2(C => n != null && b.i_a(n).has(C), [n])
                      , v = Z2(C => n != null && b.k_b(m, a, n).has(C), [m, n])
                      , A = Z2(C => {
                        var E = a.layout.Ik.Vi(m);
                        E = p != null && E.qf(C, p.tc) >= 0 && E.qf(C, p.Ad) <= 0;
                        return w(C) ? E ? "secondary-active" : "primary-active" : v(C) ? E ? "secondary-low" : "primary-low" : E ? "secondary-default" : "primary-default"
                    }
                    , [m, p, v, w])
                      , B = Z2(C => {
                        if (!q || w(C))
                            return "none";
                        const E = a.layout.Ik.Vi(m);
                        return q.some(I => E.qf(C, I.tc) >= 0 && E.qf(C, I.Ad) <= 0) ? "primary-inline-start" : "none"
                    }
                    , [m, q, w]);
                    return U2(a3, {
                        ...g,
                        Fd: t,
                        ee: h,
                        Yu: r,
                        EO: A,
                        BO: B,
                        cL: c,
                        zb: a
                    })
                }
                );
                return {
                    JHb: d,
                    IHb: e,
                    KHb: f
                }
            }
              , Bdd = function(a) {
                const b = a.Wv
                  , c = () => null;
                return __c.Px(d => U2(b3, {
                    ...d,
                    Wv: b,
                    rl: c
                }))
            }
              , Cdd = function({sheet: a, zb: b, mj: c, ga: d, range: e, ue: f}) {
                c3( () => d3( () => {
                    if (f.current != null) {
                        var g = d?.get() ?? 1
                          , h = c.get()
                          , k = e ? gu(b.ub, a, {
                            ta: e.tc,
                            column: e.Tc
                        }, {
                            ta: e.Ad,
                            column: e.Ie
                        })?.wb() : void 0
                          , l = a.direction === "rtl";
                        f.current.style.transform = `translate(${k ? k.left * g * (l ? 1 : -1) : 0}px, ${k ? -k.top * g : 0}px)`;
                        f.current.style.width = `${h.width * g}px`;
                        f.current.style.height = `${h.height * g}px`
                    }
                }
                ), [a, c, b.layout.$h, b.ub, e, f, d])
            }
              , Fdd = function({onScroll: a}) {
                const b = new Ddd(a);
                return {
                    ML: b,
                    mHa: Y2(c => U2(Edd, {
                        sheet: c.sheet,
                        ML: b,
                        children: c.children
                    }))
                }
            }
              , Gdd = function(a, b, c) {
                if (a = a.OL.get(b))
                    c === "horizontal" ? a.style.overflowX = "scroll" : a.style.overflowY = "scroll"
            }
              , Hdd = function(a, b, c) {
                if (a = a.OL.get(b))
                    c === "horizontal" ? a.style.overflowX = "hidden" : a.style.overflowY = "hidden"
            }
              , Kdd = function(a) {
                const b = a.Wv
                  , c = a.jh
                  , d = a.GAb
                  , e = a.zb
                  , f = ({children: m}) => m
                  , g = ({children: m}) => U2("div", {
                    className: "Vc5nkQ",
                    children: m
                })
                  , {ML: h, mHa: k} = Fdd({
                    onScroll: a.onScroll
                });
                class l extends Idd {
                    get OX() {
                        const m = this.props.ja.Uy
                          , n = this.props.Ub;
                        switch (m) {
                        case "screen":
                            return k;
                        case "print":
                            return n.cj != null ? g : f;
                        default:
                            throw new z(m);
                        }
                    }
                    componentDidMount() {
                        d.kAb(this.props.item, {
                            Ub: this.props.Ub,
                            ja: this.props.ja
                        })
                    }
                    componentWillUnmount() {
                        d.GOb(this.props.item, {
                            Ub: this.props.Ub,
                            ja: this.props.ja
                        })
                    }
                    render() {
                        d.kAb(this.props.item, {
                            Ub: this.props.Ub,
                            ja: this.props.ja
                        });
                        return U2(Jdd, {
                            ...this.props,
                            ga: this.ga,
                            Wv: b,
                            OX: this.OX,
                            rl: this.rl,
                            GAb: d,
                            zb: e,
                            ML: h
                        })
                    }
                    constructor(...m) {
                        super(...m);
                        this.ga = e3( () => {
                            const n = this.props.item;
                            var p = this.props.ja
                              , q = p.Uy;
                            p = p.zm;
                            const r = this.props.Ub;
                            switch (q) {
                            case "screen":
                                return p;
                            case "print":
                                if (r.cj != null)
                                    return 1;
                                q = d.$Yb(n);
                                if (!q)
                                    return 1;
                                ({width: q} = new __c.Dv(n,q.Ub,{
                                    zm: p
                                }));
                                return q / n.config.width;
                            default:
                                throw new z(q);
                            }
                        }
                        );
                        this.rl = Y2(n => U2("div", {
                            className: "IlUdwg",
                            children: U2(__c.bVa, {
                                ...this.props,
                                ...n,
                                jh: c
                            })
                        }))
                    }
                }
                return {
                    WJb: l,
                    ML: h
                }
            }
              , Mdd = function(a) {
                const b = a.Wv
                  , c = a.zb
                  , d = () => null;
                return e => U2(Ldd, {
                    ...e,
                    Wv: b,
                    rl: d,
                    zb: c
                })
            }
              , Odd = function() {
                var a = Ndd;
                try {
                    __c.OJ.isEnabled && __c.PJ.mark(a)
                } catch (b) {
                    __c.OJ.J?.Db(b, {
                        Zd: "Error calling mark:"
                    })
                }
            }
              , Sdd = function(a) {
                const b = {
                    transform: "translate(-1000px, -1000px) scale(0)"
                }
                  , c = {
                    a$a: b,
                    sN: b,
                    jb: {},
                    ZF: {}
                }
                  , d = f3( () => a.dF.style || c, h => {
                    Object.assign(a.bsa.style, h.a$a);
                    Object.assign(a.FY.style, h.sN);
                    Object.assign(a.DS.style, h.jb);
                    Object.assign(a.CN.style, h.ZF);
                    h = h?.jb?.textDecoration;
                    a.DS.classList.toggle("OQx3PQ", h === "underline");
                    a.DS.classList.toggle("_99ezUA", h === "line-through");
                    a.DS.classList.toggle("kppAqQ", h === "underline line-through")
                }
                , {
                    fireImmediately: !0,
                    equals: Pdd
                })
                  , e = f3( () => a.LTa, h => {
                    a.DS.classList.toggle("_84KvRA", !h);
                    a.bsa.classList.toggle("_84KvRA", !h);
                    a.FY.classList.toggle("TL_RLA", !h)
                }
                , {
                    fireImmediately: !0
                })
                  , f = f3( () => ({
                    renderer: a.renderer,
                    content: Qdd(a.SA?.content.ref)
                }), ({renderer: h}) => {
                    a.Usa && h?.type !== "react" ? (a.Usa = void 0,
                    a.Xla.remove()) : a.CN.innerHTML = "";
                    switch (h?.type) {
                    case "react":
                        a.Usa = Rdd(h.node, a.Xla);
                        a.CN.appendChild(a.Xla);
                        break;
                    case "dom":
                        h.render(a.CN);
                        break;
                    case void 0:
                        break;
                    default:
                        throw new z(h);
                    }
                    a.oWa()
                }
                , {
                    fireImmediately: !0,
                    equals: g3.shallow
                })
                  , g = f3( () => a.$rb, h => {
                    a.eOa?.();
                    a.eOa = void 0;
                    h != null && (a.eOa = a.Dz.bcc(a.ta, a.col, h))
                }
                , {
                    fireImmediately: !0
                });
                return () => {
                    d();
                    e();
                    f();
                    g();
                    a.eOa?.()
                }
            }
              , Qdd = function(a) {
                switch (a?.type) {
                case void 0:
                    break;
                case "formula":
                    return __c.gLb.snapshot(a);
                case "boolean":
                    return __c.hLb.snapshot(a);
                case "number":
                    return __c.jLb.snapshot(a);
                case "plaintext":
                    return __c.kLb.snapshot(a);
                case "media":
                    return __c.JP.snapshot(a);
                case "mention":
                    return __c.KP.snapshot(a);
                case "embed":
                    return __c.LP.snapshot(a);
                case "text2":
                    return __c.MP.snapshot(a);
                case "text3":
                    return __c.d2b.snapshot(a);
                default:
                    throw new z(a);
                }
            }
              , Udd = function(a) {
                var b = Tdd( () => a.renderer);
                if (b && (b = b.type === "react" ? a.Xla : a.CN,
                b.childNodes.length !== 0 && (b = b.childNodes[0],
                b instanceof HTMLElement)))
                    return {
                        width: b.clientWidth,
                        height: b.clientHeight
                    }
            }
              , Pdd = function(a, b) {
                return JSON.stringify(a) === JSON.stringify(b)
            }
              , Vdd = function(a) {
                a.SKa.reportObserved();
                const b = [];
                a.Dla.forEach( ([c,d], e) => {
                    e = e.get();
                    e != null && b.push({
                        ta: c,
                        col: d,
                        K: e
                    })
                }
                );
                return b
            }
              , Xdd = function(a) {
                a.isDisposed || Wdd( () => {
                    a.hua.forEach(b => {
                        b.Hzb(Udd(b))
                    }
                    );
                    a.hua.clear()
                }
                )
            }
              , Zdd = function(a) {
                const b = a.dA
                  , c = a.zb
                  , d = a.Tg
                  , e = a.HM
                  , f = a.SFb
                  , g = a.Yha
                  , h = a.n8
                  , k = new Ydd(d,c);
                return l => U2(h3, {
                    ...l,
                    HM: e,
                    zb: c,
                    Tg: d,
                    dA: b,
                    $Sa: k,
                    SFb: f,
                    Yha: g,
                    n8: h
                })
            }
              , S2 = (a, b) => `${a.column.id}-${a.boundary}:${b.ta.id}-${b.boundary}`
              , ndd = ({kh: a, x4: b, zb: c}) => d => (0,
            __c.K)(__c.gpc, {
                ...d,
                kh: a,
                x4: b,
                zb: c
            })
              , $dd = a => (0,
            __c.K)(__c.YV, {
                orientation: "bidirectional",
                ...a
            })
              , aed = class {
                get size() {
                    return this.$Da
                }
                get([a,b]) {
                    return (a = this.lP.get(a)) ? a.get(b) : void 0
                }
                has([a,b]) {
                    a = this.lP.get(a);
                    return a == null ? !1 : a.has(b)
                }
                set([a,b], c) {
                    let d = this.lP.get(a);
                    d == null && (d = new Map,
                    this.lP.set(a, d));
                    d.set(b, c);
                    this.$Da++;
                    return this
                }
                clear() {
                    this.lP.clear();
                    this.$Da = 0
                }
                delete([a,b]) {
                    const c = this.lP.get(a);
                    if (c == null || !c.delete(b))
                        return !1;
                    this.$Da--;
                    c.size === 0 && this.lP.delete(a);
                    return !0
                }
                forEach(a) {
                    for (const [b,c] of this.lP)
                        for (const [d,e] of c)
                            a([b, d], e)
                }
                *[__c.iIc]() {
                    for (const [a,b] of this.lP)
                        for (const [c,d] of b)
                            yield[[a, c], d]
                }
                constructor() {
                    this.$Da = 0;
                    this.lP = new Map
                }
            }
              , bed = __webpack_require__(296713)
              , ced = bed.Fragment
              , U2 = bed.jsx
              , V2 = bed.jsxs;
            var ded = __webpack_require__
              , eed = ded(208463)
              , W2 = ded.n_x(eed)();
            var Y2 = __webpack_require__(613814).PA;
            var i3 = __webpack_require__(978109)
              , j3 = i3.Component
              , Idd = i3.PureComponent
              , Z2 = i3.useCallback
              , c3 = i3.useEffect
              , fed = i3.useLayoutEffect
              , X2 = i3.useMemo
              , k3 = i3.useRef
              , ged = i3.useState;
            var l3 = __webpack_require__(1193)
              , hed = l3.Es
              , e3 = l3.EW
              , d3 = l3.fm
              , Wdd = l3.h5
              , g3 = l3.m3
              , f3 = l3.mJ
              , ied = l3.MN
              , Tdd = l3.O8
              , m3 = l3.sH
              , n3 = l3.XI;
            var o3 = __webpack_require__(815703).F;
            var jdd = __webpack_require__(929846)._;
            var jed = __webpack_require__(221627)
              , ked = jed.Aj
              , p3 = jed.iB
              , q3 = jed.uP;
            var r3 = __webpack_require__(797090)._;
            var s3 = __webpack_require__(181615)._;
            var Rdd = __webpack_require__(894447).createPortal;
            var led = class {
                static G(a) {
                    N(a, {
                        viewBox: m3.ref
                    })
                }
                constructor() {
                    this.viewBox = (led.G(this),
                    __c.nq({
                        top: 0,
                        left: 0,
                        height: 0,
                        width: 0
                    }));
                    this.ifc = a => {
                        this.viewBox.equals(a) || (this.viewBox = a)
                    }
                }
            }
              , med = Y2(a => {
                var b = a.sheet.direction === "rtl";
                b = {
                    H2wykw: !b,
                    UweldA: b
                };
                const c = k3(new led)
                  , d = n3( () => {
                    if (a.dGa) {
                        var g = a.dGa.current;
                        g && c.current.ifc(__c.nq({
                            top: g.scrollTop,
                            left: g.scrollLeft,
                            height: g.clientHeight,
                            width: g.clientWidth
                        }))
                    }
                }
                );
                c3( () => {
                    d();
                    a.dGa.current?.addEventListener("scroll", d);
                    window?.addEventListener("resize", d);
                    return () => {
                        a.dGa.current?.removeEventListener("scroll", d);
                        window?.removeEventListener("resize", d)
                    }
                }
                , [a.dGa, d]);
                const e = X2( () => ({
                    get: () => c.current.viewBox
                }), [])
                  , f = X2( () => e3( () => iq(0, 0, a.sheet.width, a.sheet.height)), [a.sheet]);
                return V2("div", {
                    className: W2("nMvVqA", b),
                    children: [V2("div", {
                        ref: a.ue,
                        className: "_0YOFPg",
                        children: [U2(a.Wv, {
                            ...a,
                            viewport: e,
                            mj: f
                        }), U2("div", {
                            className: W2("Gdl7fQ", b),
                            children: a.Y5a?.get()?.map( (g, h) => U2(g, {}, h))
                        })]
                    }), a.xBc === "visible" && V2(ced, {
                        children: [U2("div", {
                            className: W2("_32sKQw", b),
                            children: U2(a.TJb, {
                                ...a
                            })
                        }), U2("div", {
                            className: W2("xdIsTQ", b),
                            children: U2(a.XJb, {
                                ...a
                            })
                        }), U2("div", {
                            className: W2("rsTRSA", b),
                            children: U2(a.VJb, {
                                ...a
                            })
                        })]
                    })]
                })
            }
            )
              , ned = Y2(a => {
                a = a.content;
                __c.u(a.type === "text2" || a.type === "text3");
                switch (a.type) {
                case "text2":
                    return a.value.stream.da;
                case "text3":
                    return __c.Uz.snapshot(a.value).cells.da();
                default:
                    throw new z(a);
                }
            }
            );
            var oed = class {
                static G(a) {
                    N(a, {
                        set: n3.bound
                    })
                }
                get(a) {
                    return this.store.get(a)
                }
                set(a, b) {
                    this.store.set(a, b)
                }
                fetch(a) {
                    var b = this.store.get(a);
                    if (b)
                        return Promise.resolve(b);
                    if (b = this.rZa.get(a))
                        return b;
                    b = kdd(this, a).then(o3.wrap(c => {
                        this.store.set(a, c);
                        return c
                    }
                    )).finally(o3.wrap( () => this.rZa.delete(a)));
                    this.rZa.set(a, b);
                    return b
                }
                constructor() {
                    this.store = (oed.G(this),
                    new hed);
                    this.rZa = new Map
                }
            }
              , odd = class extends oed {
                constructor(a, b, c=[]) {
                    super();
                    this.wg = a;
                    this.Ut = b;
                    this.IFb = new Map;
                    c.forEach(d => {
                        this.IFb.set(d.pfa, d)
                    }
                    )
                }
            }
            ;
            var ped = 1 / 13.334
              , mdd = T2(Y2(a => {
                var b = a.context;
                const c = a.value
                  , d = a.onChange
                  , e = b.attrs;
                b = b.container.column;
                __c.x(a.valueType === 3);
                const f = Z2(m => {
                    d?.(c, m.target.checked)
                }
                , [d, c])
                  , g = e.fontSize ?? wm.vc.fontSize
                  , h = b.width;
                a = X2( () => {
                    const m = 20 * g * ped;
                    return `${Math.round(m * Math.min(1, (h - __c.YU * 2) / m))}px`
                }
                , [g, h]);
                b = X2( () => {
                    var m = e.color ?? wm.vc.color
                      , n = e.hw ?? wm.vc.hw;
                    const {h: p, s: q, Ja: r} = __c.Zu(m)
                      , t = __c.Xu(new __c.Ru(p,q * .59,r * .69)).Gr()
                      , w = __c.Xu(new __c.Ru(p,q * .68,r * .84)).Gr()
                      , v = __c.iv(__c.cv(__c.Xu(m), .5));
                    return {
                        t$a: m,
                        rOb: t,
                        u$a: w,
                        tOb: n !== "transparent" ? n : "#ffffff",
                        uOb: v
                    }
                }
                , [e]);
                const k = __c.Fd()
                  , l = Z2(m => {
                    m.nativeEvent.cancelable && m.preventDefault();
                    m.stopPropagation();
                    n3( () => {
                        d && d(c, !c)
                    }
                    )()
                }
                , [d, c]);
                return U2("label", {
                    className: W2("s5Xvtg", {
                        _0YWo_Q: k,
                        agLBbw: d == null
                    }),
                    onTouchEnd: l,
                    children: V2("div", {
                        className: "nOL94A",
                        style: {
                            "--V8rdkw": a,
                            "--6kHV0A": b.t$a,
                            "--dhlyXQ": b.rOb,
                            "--pMrTCg": b.u$a,
                            "--EyYwbg": b.t$a,
                            "--3ZWdlg": b.u$a,
                            "--81jhOQ": b.tOb,
                            "--Cs3XTw": b.uOb
                        },
                        children: [U2("input", {
                            type: "checkbox",
                            checked: c,
                            onChange: n3(m => f(m)),
                            className: "p8DDOg",
                            hidden: !0
                        }), U2("span", {
                            "aria-hidden": !0,
                            className: W2("l_S_Ng", {
                                iGjddQ: c
                            }),
                            children: U2(qed, {})
                        })]
                    })
                })
            }
            ))
              , qed = () => U2("svg", {
                className: "_8CNofA",
                viewBox: "0 0 10 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: U2("path", {
                    d: "M0.750977 4.5L3.25098 7L9.25098 1",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                })
            });
            var qdd = (a, b) => __c.EUa( (c, d) => {
                const e = c.content;
                c = c.context;
                if (e.value.stream.isEmpty)
                    for (; d.lastChild; )
                        d.lastChild.remove();
                else
                    ({Nh: c} = __c.$h(wm, c.attrs)),
                    d.classList.add("IlUdwg"),
                    c === "wrap" && (d = d.appendChild(document.createElement("div")),
                    d.classList.add("dt4Dlg")),
                    a.render({
                        container: d,
                        text: e.value,
                        oa: void 0,
                        writingMode: 1,
                        Yc: "start",
                        Ug: red(e, c),
                        gb: b
                    })
            }
            )
              , red = p3( (a, b) => {
                if (b === "wrap")
                    return [];
                a = a.value.stream.da.split("\n").map(c => c.length + 1);
                a.pop();
                return a
            }
            , {
                equals: g3.structural
            });
            var sed, ted, ued, rdd, ved = class extends r3 {
                constructor() {
                    super(rdd);
                    ted()
                }
            }
            ;
            new (sed = ( () => {
                const a = ued = j3
                  , b = class extends a {
                    static G(c) {
                        N(c, {
                            Nh: e3
                        })
                    }
                    get Nh() {
                        return __c.$h(wm, this.props.context.attrs).Nh
                    }
                    render() {
                        var c = this.props.content;
                        const d = this.props.context;
                        if (c.value.isEmpty)
                            return null;
                        c = U2(this.props.rl, {
                            content: c,
                            ta: d.container.ta,
                            col: d.container.column,
                            Nh: this.Nh
                        });
                        return this.Nh === "wrap" ? U2("div", {
                            className: "dt4Dlg",
                            children: c
                        }) : c
                    }
                    constructor(...c) {
                        super(...c);
                        b.G(this)
                    }
                }
                ;
                return b
            }
            )(),
            {c: [rdd,ted]} = s3(sed, [], [Zc], ued),
            ved);
            var wed = __c.YU / 2
              , pdd = ({voa: a, zb: b}) => c => U2(xed, {
                ...c,
                voa: a,
                zb: b
            })
              , xed = Y2(a => {
                const b = a.content
                  , c = a.context
                  , d = a.voa
                  , e = a.zb
                  , f = c.container.container.config
                  , g = {
                    ta: c.container.ta,
                    column: c.container.column
                }
                  , [h,k] = ged( () => new Map(b.value.map(n => [n, {
                    width: 1,
                    height: 1
                }])))
                  , l = Z2( (n, p) => {
                    const q = h.get(n);
                    q != null && q.width === p.width && q.height === p.height || k(r => (new Map(r)).set(n, p))
                }
                , [h])
                  , m = Z2( (n, p) => __c.fpc([...h.values()], p, wed, n, f, e), [h, f, e]);
                return U2("div", {
                    className: "MAifoA",
                    children: b.value.map( (n, p) => U2(yed, {
                        jb: g,
                        url: n.embed.url,
                        u8b: q => l(n, q),
                        Bwa: m,
                        marginInlineStart: n === b.value.first() ? 0 : wed,
                        marginInlineEnd: n === b.value.last() ? 0 : wed,
                        voa: d
                    }, p))
                })
            }
            )
              , yed = Y2(a => {
                const b = a.url
                  , c = a.jb
                  , d = a.u8b
                  , e = a.Bwa
                  , f = a.marginInlineStart
                  , g = a.marginInlineEnd
                  , h = a.voa
                  , [k,l] = ged( () => {
                    const q = h.get(b);
                    return q ? {
                        status: "resolved",
                        url: q.url,
                        width: q.width,
                        height: q.height
                    } : {
                        status: "ready"
                    }
                }
                );
                c3( () => {
                    switch (k.status) {
                    case "resolved":
                        d({
                            width: k.width ?? 1,
                            height: k.height ?? 1
                        });
                        break;
                    case "ready":
                        h.fetch(b).then(o3.wrap(q => {
                            l({
                                status: "resolved",
                                url: q.url,
                                width: q.width,
                                height: q.height
                            });
                            d({
                                width: q.width ?? 1,
                                height: q.height ?? 1
                            })
                        }
                        )).catch(o3.wrap( () => {
                            l({
                                status: "failed"
                            })
                        }
                        ));
                        break;
                    case "failed":
                        break;
                    default:
                        throw new z(k);
                    }
                }
                , [h, b, k, d]);
                const m = X2( () => k.status === "resolved" && k.width != null && k.height != null ? {
                    width: k.width,
                    height: k.height
                } : {
                    width: 1,
                    height: 1
                }, [k]);
                var n = X2( () => e3( () => e(c, m)), [c, m, e]);
                a = m.width * n.get();
                n = m.height * n.get();
                let p;
                switch (k.status) {
                case "resolved":
                    p = k?.url ? U2("img", {
                        src: k.url,
                        width: a,
                        height: n
                    }) : null;
                    break;
                case "ready":
                    p = U2(__c.BV, {
                        mediaType: "embed",
                        failed: !1
                    });
                    break;
                case "failed":
                    p = U2(__c.BV, {
                        mediaType: "embed",
                        failed: !0
                    });
                    break;
                default:
                    throw new z(k);
                }
                return U2("div", {
                    className: "_2NGN_A",
                    style: {
                        marginInlineStart: f,
                        marginInlineEnd: g,
                        width: a,
                        height: n
                    },
                    children: p
                })
            }
            );
            var zdd = class {
                Yu({size: a, scale: b, zp: c}) {
                    b = c ? Math.max(c, b) : b;
                    return a === "large" ? __c.oW * b : __c.FIc * b
                }
                constructor() {
                    this.m2b = p3( (a, b, c) => {
                        c = c.get();
                        const d = b.layout.Ik.Vi(a);
                        a = b.layout.Ik.ej(a);
                        return c != null && d.count() === (c.rows?.size || 0) && a.count() === (c.columns?.size || 0)
                    }
                    );
                    this.f_a = ked(a => new Set(a.get()?.columns || []), {
                        equals: __c.Dp
                    });
                    this.i_a = ked(a => new Set(a.get()?.rows || []), {
                        equals: __c.Dp
                    });
                    this.j_b = p3( (a, b, c) => {
                        var {cells: d} = c.get() || {};
                        if (!d)
                            return new Set;
                        var e = this.i_a(c);
                        b = b.layout.Ik.ej(a);
                        if (e.size > 0)
                            return new Set(b);
                        c = this.f_a(c);
                        e = new Set;
                        for (const f of d) {
                            d = a.layout.cells.get(f.ta, f.column);
                            for (const g of R2(d ? d.span.Tc : f.column, d ? d.span.Ie : f.column, b))
                                (c.size === 0 || c.has(g)) && e.add(g)
                        }
                        return e
                    }
                    , {
                        equals: __c.Dp
                    });
                    this.k_b = p3( (a, b, c) => {
                        var {cells: d} = c.get() || {};
                        if (!d)
                            return new Set;
                        var e = this.f_a(c);
                        b = b.layout.Ik.Vi(a);
                        if (e.size > 0)
                            return new Set(b);
                        c = this.i_a(c);
                        e = new Set;
                        for (const f of d) {
                            d = a.layout.cells.get(f.ta, f.column);
                            for (const g of R2(d ? d.span.tc : f.ta, d ? d.span.Ad : f.ta, b))
                                (c.size === 0 || c.has(g)) && e.add(g)
                        }
                        return e
                    }
                    , {
                        equals: __c.Dp
                    })
                }
            }
            ;
            var zed, Aed, Bed, Ced, Ded, Eed, Fed = parseInt("4px", 10) || 4, Ged = parseInt("0.5px", 10) || .5, Hed = parseInt("1px", 10) || 1, Ied = parseInt("0.5px", 10) || .5, Jed = parseInt("0.5px", 10) || .5, Ked = parseInt("1px", 10) || 1, Led = parseInt("0.5px", 10) || .5, $2, Med = class extends r3 {
                constructor() {
                    super($2);
                    Bed()
                }
            }
            ;
            new (zed = ( () => {
                const a = Ced = j3;
                return class extends a {
                    static G(b) {
                        N(b, {
                            Rh: e3,
                            Pt: e3,
                            $na: e3
                        })
                    }
                    get Rh() {
                        return this.props.sheet.direction === "rtl"
                    }
                    get Pt() {
                        const b = this.props.Xu?.get();
                        if (b != null && b.length !== 0)
                            return new __c.az(b)
                    }
                    get $na() {
                        return this.props.ZQa?.()?.get()
                    }
                    render() {
                        return U2(__c.ve, {
                            Hy: "light",
                            light: "light",
                            mD: "light",
                            dark: "light",
                            children: this.hPb
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        this.onMouseMove = ($2.G(this),
                        n3(c => {
                            const {onMouseMove: d, sheet: e, Fd: f=1} = this.props;
                            d?.(c, e, "column", f)
                        }
                        ));
                        this.onMouseLeave = n3(c => {
                            this.props.onMouseLeave?.(c)
                        }
                        );
                        this.onMouseDown = n3(c => {
                            this.props.onMouseDown?.(c)
                        }
                        );
                        this.onTouchStart = n3(c => {
                            this.props.onTouchStart?.(c)
                        }
                        );
                        this.Vub = (c, d, e) => {
                            const {sheet: f, zb: g, Yu: h, EO: k, BO: l, u_b: m, Fd: n=1, ee: p=1} = this.props
                              , q = {
                                jNbTIg: !this.Rh,
                                gtA7Dw: this.Rh
                            };
                            var r = e?.sticky ? this.Rh ? {
                                right: 0
                            } : {
                                left: 0
                            } : void 0;
                            r = e?.sticky ? this.$na ?? r : void 0;
                            let t = 0;
                            const w = g.layout.$h.ej(f)
                              , v = w.map(B => {
                                if (!(c && w.has(c) && w.qf(B, c) < 0 || d && w.has(d) && w.qf(B, d) > 0)) {
                                    var C = g.ub.Ca(f, B);
                                    if (C != null) {
                                        var E = m?.get()?.get(B);
                                        t += B.width;
                                        return U2(Ned, {
                                            col: B,
                                            label: E?.variant === "icon-only" ? void 0 : __c.Oo(f.Ky(B)),
                                            yb: E?.icon,
                                            fd: E?.fd,
                                            E8: E?.cursor,
                                            tb: E?.tb,
                                            Yu: h,
                                            EO: k,
                                            BO: l,
                                            Fd: n,
                                            ee: p,
                                            start: C
                                        }, B.id)
                                    }
                                }
                            }
                            )
                              , A = this.Rh ? {
                                right: t * n
                            } : {
                                left: t * n
                            };
                            return V2("div", {
                                style: {
                                    height: h(p),
                                    width: t * n,
                                    ...r
                                },
                                className: W2("Vt2_4w", q, {
                                    Tn3nUw: e?.sticky
                                }),
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                children: [v, e?.sticky && U2("div", {
                                    style: {
                                        width: Fed * n,
                                        ...A
                                    },
                                    className: W2("HBvlug", "ru3tFQ", q)
                                })]
                            })
                        }
                        ;
                        this.hPb = c => {
                            var d = this.props.sheet;
                            const e = this.props.zb
                              , f = e.layout.$h.Cha(d)
                              , g = {
                                jNbTIg: !this.Rh,
                                gtA7Dw: this.Rh
                            };
                            d = e.layout.$h.ej(d);
                            return V2("div", {
                                ref: this.Pt?.Cm,
                                onMouseDown: this.onMouseDown,
                                onTouchStart: this.onTouchStart,
                                className: W2("xhBZaw", g, c.className),
                                children: [f && this.Vub(void 0, f, {
                                    sticky: !0
                                }), this.Vub(f && d.has(f) ? d.next(f) : void 0)]
                            })
                        }
                    }
                }
            }
            )(),
            {c: [$2,Bed]} = s3(zed, [], [Zc], Ced),
            Med);
            var a3, Oed = class extends r3 {
                constructor() {
                    super(a3);
                    Ded()
                }
            }
            ;
            new (Aed = ( () => {
                const a = Eed = j3;
                return class extends a {
                    static G(b) {
                        N(b, {
                            Rh: e3,
                            Pt: e3,
                            $na: e3
                        })
                    }
                    get Rh() {
                        return this.props.sheet.direction === "rtl"
                    }
                    get Pt() {
                        const b = this.props.Xu?.get();
                        if (b != null && b.length !== 0)
                            return new __c.az(b)
                    }
                    get $na() {
                        return this.props.ZQa?.()?.get()
                    }
                    render() {
                        return U2(__c.ve, {
                            Hy: "light",
                            light: "light",
                            mD: "light",
                            dark: "light",
                            children: this.qdc
                        })
                    }
                    constructor(...b) {
                        super(...b);
                        this.onMouseMove = (a3.G(this),
                        n3(c => {
                            const {onMouseMove: d, sheet: e, ee: f=1} = this.props;
                            d?.(c, e, "row", f)
                        }
                        ));
                        this.onMouseLeave = n3(c => {
                            this.props.onMouseLeave?.(c)
                        }
                        );
                        this.onMouseDown = n3(c => {
                            this.props.onMouseDown?.(c)
                        }
                        );
                        this.onTouchStart = n3(c => {
                            this.props.onTouchStart?.(c)
                        }
                        );
                        this.avb = (c, d, e) => {
                            const {sheet: f, zb: g, Yu: h, EO: k, BO: l, u_b: m, Fd: n=1, ee: p=1} = this.props
                              , q = {
                                jNbTIg: !this.Rh,
                                gtA7Dw: this.Rh
                            };
                            var r = e?.sticky ? {
                                top: 0
                            } : void 0;
                            r = e?.sticky ? this.$na ?? r : void 0;
                            let t = 0;
                            const w = g.layout.$h.Vi(f)
                              , v = w.map(A => {
                                if (!(c && w.has(c) && w.qf(A, c) < 0 || d && w.has(d) && w.qf(A, d) > 0)) {
                                    var B = g.ub.va(f, A);
                                    if (B != null) {
                                        var C = m?.get()?.get(A);
                                        t += A.height;
                                        var E = C?.variant === "icon-only" ? void 0 : `${f.Tz(A) + 1}`;
                                        return U2(Ped, {
                                            ta: A,
                                            label: E,
                                            yb: C?.icon,
                                            fd: C?.fd,
                                            E8: C?.cursor,
                                            tb: C?.tb,
                                            EO: k,
                                            BO: l,
                                            Yu: h,
                                            Fd: n,
                                            ee: p,
                                            start: B
                                        }, A.id)
                                    }
                                }
                            }
                            );
                            return V2("div", {
                                style: {
                                    height: t * p,
                                    width: h(n),
                                    ...r
                                },
                                className: W2("_93roJg", q, {
                                    Tn3nUw: e?.sticky
                                }),
                                onMouseMove: this.onMouseMove,
                                onMouseLeave: this.onMouseLeave,
                                children: [v, e?.sticky && U2("div", {
                                    style: {
                                        height: Fed * p
                                    },
                                    className: W2("HBvlug", "koz2Hg")
                                })]
                            })
                        }
                        ;
                        this.qdc = c => {
                            var d = this.props.sheet;
                            const e = this.props.zb
                              , f = e.layout.$h.Dha(d)
                              , g = {
                                jNbTIg: !this.Rh,
                                gtA7Dw: this.Rh
                            };
                            d = e.layout.$h.Vi(d);
                            return V2("div", {
                                ref: this.Pt?.Cm,
                                onMouseDown: this.onMouseDown,
                                onTouchStart: this.onTouchStart,
                                className: W2("An9VeA", g, c.className),
                                children: [f && this.avb(void 0, f, {
                                    sticky: !0
                                }), this.avb(f && d.has(f) ? d.next(f) : void 0)]
                            })
                        }
                    }
                }
            }
            )(),
            {c: [a3,Ded]} = s3(Aed, [], [Zc], Eed),
            Oed);
            var Ned = Y2(a => {
                const b = a.label
                  , c = a.yb
                  , d = a.fd
                  , e = a.E8
                  , f = a.tb
                  , g = a.col
                  , h = a.EO
                  , k = a.BO
                  , l = a.Yu
                  , m = a.Fd
                  , n = a.ee
                  , p = l(n)
                  , q = q3( () => h(g))
                  , r = q3( () => k(g));
                return U2("div", {
                    className: W2("_83Rssw", "d2uLIA", udd(q), wdd(r)),
                    style: {
                        width: g.width * m,
                        height: p,
                        borderInlineWidth: `${Ged * m}px`,
                        borderBlockStartWidth: r === "none" ? `${Hed * m}px` : void 0,
                        borderBlockEndWidth: `${Ied * m}px`,
                        transform: `translateX(${a.start * m}px)`
                    },
                    children: U2(vdd, {
                        label: b,
                        yb: c,
                        fd: d,
                        E8: e,
                        tb: f,
                        width: g.width,
                        height: l(1),
                        scale: n,
                        Q$a: q
                    })
                })
            }
            )
              , Ped = Y2(a => {
                const b = a.label
                  , c = a.yb
                  , d = a.fd
                  , e = a.E8
                  , f = a.tb
                  , g = a.ta
                  , h = a.Yu
                  , k = a.EO
                  , l = a.BO
                  , m = a.Fd
                  , n = a.ee
                  , p = h(m)
                  , q = q3( () => k(g))
                  , r = q3( () => l(g));
                return U2("div", {
                    className: W2("_83Rssw", "JhBzyw", udd(q), wdd(r)),
                    style: {
                        width: p,
                        height: g.height * n,
                        borderBlockWidth: `${Jed * n}px`,
                        borderInlineStartWidth: r === "none" ? `${Ked * n}px` : void 0,
                        borderInlineEndWidth: `${Led * n}px`,
                        transform: `translateY(${a.start * n}px)`
                    },
                    children: U2(vdd, {
                        label: b,
                        yb: c,
                        fd: d,
                        E8: e,
                        tb: f,
                        width: h(1),
                        height: g.height,
                        scale: m,
                        Q$a: q
                    })
                })
            }
            );
            var Qed = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
            var Red = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
            var xdd = __c.qv({
                Iq: Qed,
                medium: Red
            });
            var Sed, Ted, Ued, b3, Ved = class extends r3 {
                constructor() {
                    super(b3);
                    Ted()
                }
            }
            ;
            new (Sed = ( () => {
                const a = Ued = j3;
                return class extends a {
                    static G(b) {
                        N(b, {
                            Kh: e3.struct
                        })
                    }
                    render() {
                        const b = this.props.element;
                        return U2(this.props.Wv, {
                            sheet: b.C.config,
                            container: b,
                            mj: this.mj,
                            Era: "visible",
                            Xu: this.props.Xu,
                            aA: this.props.aA,
                            qB: this.props.qB,
                            uB: this.props.uB,
                            ga: this.props.ga,
                            Kh: this.Kh,
                            rl: this.props.rl,
                            PR: void 0
                        })
                    }
                    get Kh() {
                        return __c.np(this.props.element.C.La, this.props.hg)
                    }
                    constructor(...b) {
                        super(...b);
                        this.mj = (b3.G(this),
                        e3( () => {
                            const c = this.props.element.C.config;
                            return iq(0, 0, c.width, c.height)
                        }
                        ))
                    }
                }
            }
            )(),
            {c: [b3,Ted]} = s3(Sed, [], [Zc], Ued),
            Ved);
            var Wed = class {
                constructor() {
                    this.GDa = new WeakMap;
                    this.$Yb = a => this.GDa.get(a);
                    this.kAb = (a, b) => {
                        this.GDa.set(a, b)
                    }
                    ;
                    this.GOb = (a, b) => {
                        const c = this.GDa.get(a);
                        c && c.ja === b.ja && c.Ub === b.Ub && this.GDa.delete(a)
                    }
                }
            }
            ;
            var Xed = parseInt("4px", 10) || 4
              , Yed = Y2( ({sheet: a, zb: b, mj: c, ga: d, range: e, TD: f, UD: g}) => {
                if (e != null && (f || g)) {
                    d = d?.get() ?? 1;
                    c = c.get();
                    var h = a.direction === "rtl"
                      , k = {
                        ZJ0G6w: !h,
                        dOI_jA: h
                    };
                    a = gu(b.ub, a, {
                        ta: e.tc,
                        column: e.Tc
                    }, {
                        ta: e.Ad,
                        column: e.Ie
                    })?.wb();
                    if (a != null) {
                        if (f && g)
                            return U2("div", {
                                style: {
                                    top: (a.top + a.height) * d,
                                    width: a.width * d,
                                    height: Xed * d
                                },
                                className: W2("aX8dhQ", "VGcLng")
                            });
                        if (f)
                            return f = a.left + a.width,
                            U2("div", {
                                style: {
                                    width: Xed * d,
                                    height: c.height * d,
                                    ...(h ? {
                                        right: f * d
                                    } : {
                                        left: f * d
                                    })
                                },
                                className: W2("aX8dhQ", "gl1RPg", k)
                            });
                        if (g)
                            return U2("div", {
                                style: {
                                    top: (a.top + a.height) * d,
                                    width: c.width * d,
                                    height: Xed * d
                                },
                                className: W2("aX8dhQ", "VGcLng")
                            })
                    }
                }
            }
            );
            var t3 = ({sheet: a, zb: b, range: c, mj: d, ga: e, children: f}) => {
                const g = __c.xw();
                Cdd({
                    sheet: a,
                    zb: b,
                    mj: d,
                    ga: e,
                    range: c,
                    ue: g
                });
                return U2("div", {
                    ref: g,
                    className: W2("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                    children: f
                })
            }
              , Zed = ({sheet: a, zb: b, range: c, mj: d, ga: e, children: f}) => {
                const g = __c.xw();
                Cdd({
                    sheet: a,
                    zb: b,
                    mj: d,
                    ga: e,
                    range: c,
                    ue: g
                });
                a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                return U2("div", {
                    className: W2("nstn2A", a, "_9sodyg"),
                    children: U2("div", {
                        ref: g,
                        className: W2("nstn2A", a),
                        children: f
                    })
                })
            }
            ;
            var Edd = Y2( ({sheet: a, children: b, ML: c}) => {
                const d = Z2(f => {
                    c.K0a(a, f)
                }
                , [c, a])
                  , e = Z2(f => {
                    f != null ? c.OL.set(a, f) : (c.OL.delete(a),
                    c.X1.delete(a))
                }
                , [c, a]);
                return U2($dd, {
                    direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                    onScroll: d,
                    yv: e,
                    children: b
                })
            }
            )
              , Ddd = class {
                K0a(a, b) {
                    this.onScroll && this.onScroll(a);
                    this.X1.set(a, b)
                }
                constructor(a) {
                    this.onScroll = a;
                    this.OL = new WeakMap;
                    this.X1 = m3.map(new Map, {
                        deep: !1
                    });
                    this.scrollTo = n3( (b, c) => {
                        if (b = this.OL.get(b)) {
                            const d = {};
                            c.left != null && (d.left = Math.floor(c.left));
                            c.top != null && (d.top = Math.floor(c.top));
                            b.scrollTo(d)
                        }
                    }
                    )
                }
            }
            ;
            var Jdd = Y2(a => {
                const b = a.item
                  , c = a.Xu
                  , d = a.aA
                  , e = a.Tf
                  , f = a.measureRef
                  , g = a.ga
                  , h = a.clb
                  , k = a.Ub
                  , l = a.qB
                  , m = a.uB
                  , n = a.Wv
                  , p = a.OX
                  , q = a.rl
                  , r = a.hg
                  , t = a.zb
                  , w = a.ML;
                a = X2( () => __c.np(b.La, r), [b, r]);
                const v = X2( () => e3( () => {
                    const O = b.config;
                    return iq(0, 0, O.width, O.height)
                }
                ), [b])
                  , A = Z2( () => {
                    const O = __c.gx(b.config)
                      , R = g.get();
                    return {
                        width: Math.min(O.width * R, k.width),
                        height: k.cj ? Math.min(O.height * R, k.cj) : O.height * R
                    }
                }
                , [b, g, k])
                  , B = X2( () => Y2( ({sheet: O, range: R, TD: S, UD: Q}) => U2(t3, {
                    sheet: O,
                    zb: t,
                    range: R,
                    mj: v,
                    ga: g,
                    children: U2(Yed, {
                        sheet: O,
                        zb: t,
                        mj: v,
                        ga: g,
                        range: R,
                        TD: S,
                        UD: Q
                    })
                })), [g, v, t])
                  , C = X2( () => e3( () => {
                    const O = g.get()
                      , {width: R, height: S} = A();
                    var Q = w.X1.get(b);
                    if (Q?.Aq) {
                        const U = Q.scroll;
                        Q = Q.offset;
                        return iq(U.left / O, U.top / O, (U.left + Q.width) / O, (U.top + Q.height) / O)
                    }
                    return iq(0, 0, R / O, S / O)
                }
                ), [b, w, g, A]);
                c3( () => d3( () => {
                    const O = b.config.view.freeze.yN ? b.config.layout.Ee.get(b.config.view.freeze.yN) : void 0;
                    if (O != null) {
                        var {width: R} = A();
                        b.config.Ca(O) + O.width > R ? Hdd(w, b, "horizontal") : Gdd(w, b, "horizontal")
                    }
                }
                ), [b, w, A]);
                c3( () => d3( () => {
                    const O = b.config.view.freeze.vQ ? b.config.layout.Le.get(b.config.view.freeze.vQ) : void 0;
                    if (O != null) {
                        var {height: R} = A();
                        b.config.va(O) + O.height > R ? Hdd(w, b, "vertical") : Gdd(w, b, "vertical")
                    }
                }
                ), [b, w, A]);
                const {width: E, height: I} = A()
                  , J = __c.gx(b.config)
                  , M = g.get();
                return U2("div", {
                    ref: f,
                    className: "E8r86A",
                    style: {
                        width: E,
                        height: I
                    },
                    children: U2(p, {
                        sheet: b,
                        children: U2("div", {
                            ref: h,
                            className: "cXTiJA",
                            style: {
                                width: J.width * M,
                                height: J.height * M
                            },
                            children: U2("div", {
                                className: "W1ir5A",
                                children: U2(n, {
                                    container: e.Cl(b),
                                    sheet: b.config,
                                    mj: v,
                                    Era: "visible",
                                    Xu: c,
                                    aA: d,
                                    ga: g,
                                    viewport: C,
                                    qB: l,
                                    uB: m,
                                    Kh: a,
                                    rl: q,
                                    PR: B
                                })
                            })
                        })
                    })
                })
            }
            );
            var $ed = Y2( ({page: a, zb: b, range: c, wL: d}) => {
                var e = c != null && c.Tc != null && c.tc != null && c.Ie != null && c.Ad != null ? gu(b.ub, a.sheet, {
                    ta: c.tc,
                    column: c.Tc
                }, {
                    ta: c.Ad,
                    column: c.Ie
                }) : void 0;
                return U2("div", {
                    className: "Gi9pfA",
                    children: a.elements.map( (f, g) => e == null ? d(f, g) : __c.lq(__c.nq(f)).fv(e) && d(f, g))
                })
            }
            );
            var afd = new __c.tu
              , bfd = a => __c.oW * a
              , cfd = () => "primary-default"
              , dfd = () => "none"
              , Ldd = Y2( ({container: a, Xu: b, aA: c, qB: d, uB: e, bia: f, ga: g, viewport: h, zb: k, $fc: l, Wv: m, rl: n, wL: p, sCa: q, crc: r, Zoc: t, Yoc: w}) => {
                const v = a.page
                  , A = X2( () => e3( () => {
                    {
                        var C = k.ub;
                        var E = v.sheet
                          , I = C.nf.Ik.Vi(E)
                          , J = C.nf.Ik.ej(E);
                        const M = I.first()
                          , O = J.first();
                        I = I.last();
                        J = J.last();
                        C = M && O && I && J ? gu(C, E, {
                            ta: M,
                            column: O
                        }, {
                            ta: I,
                            column: J
                        }) : void 0
                    }
                    return C ?? iq(0, 0, 0, 0)
                }
                ), [v, k])
                  , B = X2( () => Y2( ({sheet: C, range: E, TD: I, UD: J}) => V2(ced, {
                    children: [U2(t3, {
                        sheet: v.sheet,
                        zb: k,
                        range: E,
                        mj: A,
                        ga: g,
                        children: U2(Yed, {
                            sheet: C,
                            zb: k,
                            mj: A,
                            ga: g,
                            range: E,
                            TD: I,
                            UD: J
                        })
                    }), V2(Zed, {
                        sheet: v.sheet,
                        zb: k,
                        range: E,
                        mj: A,
                        ga: g,
                        children: [r && U2(r, {}), p && U2($ed, {
                            page: v,
                            zb: k,
                            wL: p,
                            range: E
                        }), w && U2(w, {}), q && q()]
                    }), t && E && U2(t3, {
                        sheet: v.sheet,
                        zb: k,
                        range: E,
                        mj: A,
                        ga: g,
                        children: U2(t, {
                            range: E
                        })
                    })]
                })), [v, k, A, g, r, p, w, q, t]);
                return l ? U2(efd, {
                    container: a,
                    mj: A,
                    viewport: h,
                    ga: g,
                    Xu: b,
                    aA: c,
                    qB: d,
                    uB: e,
                    Wv: m,
                    rl: n,
                    PR: B,
                    zb: k
                }) : U2(m, {
                    sheet: v.sheet,
                    container: a,
                    mj: A,
                    Era: "hidden",
                    Xu: b,
                    aA: c,
                    qB: d,
                    uB: e,
                    bia: f,
                    ga: g,
                    viewport: h,
                    rl: n,
                    PR: B
                })
            }
            )
              , efd = Y2(a => {
                const b = a.container
                  , c = a.mj
                  , d = a.ga
                  , e = a.viewport
                  , f = a.Xu
                  , g = a.aA
                  , h = a.qB
                  , k = a.uB
                  , l = a.Wv
                  , m = a.rl
                  , n = a.PR;
                a = a.zb;
                const p = b.page
                  , q = p.sheet.direction === "rtl"
                  , r = k3(null)
                  , t = k3(null)
                  , w = k3(null);
                c3( () => {
                    const E = u3({
                        sheet: p.sheet,
                        sEa: !0,
                        tEa: !0,
                        ga: d,
                        viewport: e
                    });
                    return f3( () => E?.get(), I => {
                        const J = r.current;
                        if (I && J) {
                            var M = p.sheet.direction === "rtl";
                            J.style.position = I.position ?? "sticky";
                            J.style.top = I.top ?? "0px";
                            M ? J.style.right = I.right ?? "0px" : J.style.left = I.left ?? "0px";
                            J.style.transform = I.transform ?? ""
                        }
                    }
                    )
                }
                , [p.sheet, d, e]);
                c3( () => {
                    const E = u3({
                        sheet: p.sheet,
                        sEa: !1,
                        tEa: !0,
                        ga: d,
                        viewport: e
                    });
                    return f3( () => E?.get(), I => {
                        const J = w.current;
                        I && J && (J.style.position = I.position ?? "sticky",
                        J.style.top = I.top ?? "0px",
                        J.style.transform = I.transform ?? "")
                    }
                    )
                }
                , [p.sheet, d, e]);
                c3( () => {
                    const E = u3({
                        sheet: p.sheet,
                        sEa: !0,
                        tEa: !1,
                        ga: d,
                        viewport: e
                    });
                    return f3( () => E?.get(), I => {
                        const J = t.current;
                        if (I && J) {
                            var M = p.sheet.direction === "rtl";
                            J.style.position = I.position ?? "sticky";
                            M ? J.style.right = I.right ?? "0px" : J.style.left = I.left ?? "0px";
                            J.style.transform = I.transform ?? ""
                        }
                    }
                    )
                }
                , [p.sheet, d, e]);
                const v = Z2( (E, I, J) => u3({
                    sheet: E,
                    sEa: I,
                    tEa: J,
                    ga: d,
                    viewport: e
                }), [d, e])
                  , A = X2( () => v ? () => v(p.sheet, !0, !1) : void 0, [v, p.sheet])
                  , B = X2( () => v ? () => v(p.sheet, !1, !0) : void 0, [v, p.sheet])
                  , C = d?.get() ?? 1;
                return V2("div", {
                    className: W2("OsKKIQ", "cbOp6Q"),
                    children: [U2("div", {
                        className: "VDFv_A",
                        children: U2(l, {
                            sheet: p.sheet,
                            container: b,
                            mj: c,
                            Era: "hidden",
                            Xu: f,
                            aA: g,
                            qB: h,
                            uB: k,
                            bia: v,
                            ga: d,
                            viewport: e,
                            rl: m,
                            PR: n
                        })
                    }), U2("div", {
                        ref: r,
                        className: "_688KWg",
                        children: U2(ydd, {
                            Rh: q,
                            Ejb: !1,
                            Yu: bfd,
                            scale: C
                        })
                    }), U2("div", {
                        ref: w,
                        className: "m0cT1w",
                        children: U2($2, {
                            sheet: p.sheet,
                            Fd: C,
                            ee: C,
                            Yu: bfd,
                            EO: cfd,
                            BO: dfd,
                            cL: afd,
                            ZQa: A,
                            zb: a
                        })
                    }), U2("div", {
                        ref: t,
                        className: "zm537g",
                        children: U2(a3, {
                            sheet: p.sheet,
                            Fd: C,
                            ee: C,
                            Yu: bfd,
                            EO: cfd,
                            BO: dfd,
                            cL: afd,
                            ZQa: B,
                            zb: a
                        })
                    })]
                })
            }
            )
              , u3 = ({sheet: a, sEa: b, tEa: c, ga: d, viewport: e}) => e3( () => {
                var f = e?.get().wb();
                const g = d?.get() ?? 1;
                if (!f)
                    return {};
                const h = {};
                f = new Pp(f.left,f.top);
                const k = a.direction === "rtl";
                h.position = "relative";
                c && (h.top = "0px");
                b && (k ? h.right = "0px" : h.left = "0px");
                h.transform = `translate(${b ? f.x * g : 0}px, ${c ? f.y * g : 0}px)`;
                return h
            }
            );
            var Ydd = class {
                constructor(a, b) {
                    this.Tg = a;
                    this.zb = b;
                    this.aOb = __c.YU;
                    this.tYb = p3( (c, d, e, f) => {
                        e = e.get();
                        const g = new WeakMap;
                        for (let p = 0; p < e.length; p++) {
                            var h = e[p]
                              , k = this.jYb(c, d, h);
                            if (!k)
                                continue;
                            switch (k) {
                            case "start":
                            case "justify":
                                var l = e[p + 1];
                                if (l == null || !XC(c, this.zb, d, l))
                                    continue;
                                break;
                            case "center":
                                l = e[p + 1];
                                if (l == null || !XC(c, this.zb, d, l))
                                    continue;
                                l = e[p - 1];
                                if (l == null || !XC(c, this.zb, d, l))
                                    continue;
                                break;
                            case "end":
                                l = e[p - 1];
                                if (l == null || !XC(c, this.zb, d, l))
                                    continue;
                                break;
                            default:
                                throw new z(k);
                            }
                            l = f(d, h);
                            if (!l)
                                continue;
                            var m = l.width + (k === "center" ? 0 : this.aOb);
                            if (h.width > m)
                                continue;
                            switch (k) {
                            case "start":
                            case "justify":
                                k = this.zb.ub.Ca(c, h);
                                if (k == null)
                                    continue;
                                l = k + m;
                                break;
                            case "center":
                                k = this.zb.ub.Ca(c, h);
                                if (k == null)
                                    continue;
                                l = k + h.width / 2;
                                k = l - m / 2;
                                l += m / 2;
                                break;
                            case "end":
                                k = this.zb.ub.Ca(c, h);
                                if (k == null)
                                    continue;
                                l = k + h.width;
                                k = l - m;
                                break;
                            default:
                                throw new z(k);
                            }
                            for (m = e.indexOf(h); m >= 0; m--) {
                                var n = e[m];
                                const q = this.zb.ub.Ca(c, n)
                                  , r = m - 1 < 0 || XC(c, this.zb, d, e[m - 1]);
                                if ((n === h || XC(c, this.zb, d, n)) && q != null && k < q && q < l && r)
                                    g.set(n, 1);
                                else
                                    break
                            }
                            for (h = e.indexOf(h) + 1; h < e.length; h++)
                                if (m = e[h],
                                n = this.zb.ub.Ca(c, m),
                                XC(c, this.zb, d, m) && n != null && k < n && n < l)
                                    g.set(m, 1);
                                else
                                    break
                        }
                        return g
                    }
                    );
                    this.jYb = (c, d, e) => {
                        const f = c.layout.cells.get(d, e);
                        if (f && (f.ref.content.ref || f.ref.Ka.ref) && f.span.tc === f.span.Ad && f.span.Tc === f.span.Ie) {
                            var g = this.Tg.om(c, d, e);
                            c = this.Tg.Sha(c, d, e, ffd);
                            var {Nh: h, textAlign: k} = __c.$h(wm, c);
                            if (h === "overflow")
                                return __c.HUa(k, f.ref.content.ref?.type, f.ref.Ka.ref?.type, g ? () => g.yl.type : void 0)
                        }
                    }
                }
            }
              , ffd = __c.Lh({
                Nh: void 0,
                textAlign: void 0
            });
            var gfd = Y2(function(a) {
                const b = a.sheet;
                var c = a.zb
                  , d = a.O3;
                const e = a.Rmc
                  , f = a.ga
                  , g = a.$Sa
                  , h = a.ZXb
                  , k = a.overflow
                  , l = a.mj
                  , m = __c.xw();
                fed( () => d3( () => {
                    const v = y(m.current)
                      , A = f?.get() ?? 1
                      , {width: B, height: C} = l.get();
                    v.style.width = `${B * A}px`;
                    v.style.height = `${C * A}px`
                }
                ), [m, f, l]);
                const n = Z2(v => g.tYb(b, v, e, h), [g, b, e, h]);
                a = Z2( (v, A) => n(v)?.get(A) ?? 0, [n]);
                const p = c.layout.Ik.Vi(b)
                  , q = c.layout.Ik.ej(b)
                  , r = c.layout.$h.Vi(b);
                c = c.layout.$h.ej(b);
                d = hdd(b, p, q, r, c, d, e, a);
                const {width: t, height: w} = l.get();
                c = b.direction === "rtl";
                return U2("svg", {
                    ref: m,
                    role: "presentation",
                    className: W2("c6a1eQ", {
                        H_CtIQ: !c,
                        _8_56PQ: c,
                        _3NnFzw: k === "visible",
                        JMH1ng: k === "hidden"
                    }),
                    viewBox: `0 0 ${t} ${w}`,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    children: d.map( ({lines: v, color: A, weight: B, jm: C, km: E}) => U2("path", {
                        stroke: A,
                        strokeDasharray: C,
                        strokeDashoffset: E,
                        strokeWidth: B,
                        d: v.map( ({p1: I, p2: J}) => `M ${I.x} ${I.y} L ${J.x} ${J.y}`).join(" ")
                    }, `${A}-${B}-${C}-${E}`))
                })
            });
            var Ndd = Symbol("sheets.layout_rendered");
            var hfd, ifd, jfd, kfd, lfd, mfd, nfd, ofd, qfd = class extends j3 {
                render() {
                    const {fwa: a, Yha: b, ...c} = this.props
                      , d = this.props.sheet;
                    return V2("div", {
                        ref: this.JAb,
                        className: W2("ZTz_iA", d.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                        children: [a?.Z8a && U2(v3, {
                            ...c,
                            sheet: d,
                            range: a.Z8a.range,
                            TD: !0,
                            UD: !0,
                            className: "_0C8M3w",
                            Dz: this.Dz
                        }), a?.cGb && U2(v3, {
                            ...c,
                            sheet: d,
                            range: a.cGb.range,
                            TD: !1,
                            UD: !0,
                            className: "_7n44yg",
                            Dz: this.Dz
                        }), a?.Hjb && U2(v3, {
                            ...c,
                            sheet: d,
                            range: a.Hjb.range,
                            TD: !0,
                            UD: !1,
                            className: "fF5r6w",
                            Dz: this.Dz
                        }), a?.JEb && U2(v3, {
                            ...c,
                            sheet: d,
                            range: a.JEb.range,
                            TD: !1,
                            UD: !1,
                            className: "llILYw",
                            Dz: this.Dz
                        }), U2(this.vJb, {})]
                    })
                }
                componentDidMount() {
                    const a = d3( () => {
                        var b = this.props
                          , c = b.ga;
                        b = b.mj;
                        const d = this.JAb.current;
                        if (d) {
                            c = c ? c.get() : 1;
                            const {width: e, height: f} = b.get();
                            d.style.width = `${e * c}px`;
                            d.style.height = `${f * c}px`
                        }
                    }
                    );
                    __c.Qc(this, [a])
                }
                constructor(...a) {
                    super(...a);
                    this.JAb = ww();
                    this.Dz = new pfd;
                    this.vJb = Y2( () => {
                        const b = this.props.Yha;
                        var c = this.props.n8
                          , d = this.props.dA;
                        const e = this.props.container
                          , f = this.props.sheet;
                        var g = this.props.zb
                          , h = this.props.ga;
                        const k = f.layout.rows.first()
                          , l = f.layout.cols.first();
                        var m = X2( () => k && l && b?.(e, f, k, l), [b, e, f, k, l]);
                        if (!b || !k || !l)
                            return null;
                        m = m?.get();
                        if (!m)
                            return null;
                        h = h.get();
                        const n = g.ub.va(f, k);
                        g = g.ub.Ca(f, l);
                        if (n == null || g == null)
                            return null;
                        const p = c?.();
                        c = p?.fontSize ? p.fontSize * h : void 0;
                        d = p?.fontFamily ? d?.yaa(p.fontFamily) : void 0;
                        return U2("div", {
                            className: "_6eq__A",
                            style: {
                                top: n * h + h,
                                left: g * h + h,
                                height: k.height * h - h * 2,
                                paddingLeft: `${__c.YU * h}px`,
                                fontSize: c,
                                fontFamily: d
                            },
                            children: m
                        })
                    }
                    )
                }
            }
            ;
            ({c: [ofd,jfd]} = s3(qfd, [], [Zc], j3));
            jfd();
            var v3, rfd = class extends r3 {
                constructor() {
                    super(v3);
                    kfd()
                }
            }
            ;
            new (hfd = ( () => {
                const a = lfd = j3;
                return class extends a {
                    static G(b) {
                        N(b, {
                            d1a: e3,
                            bounds: e3
                        })
                    }
                    get d1a() {
                        const b = this.props.viewport
                          , c = this.props.TD
                          , d = this.props.UD;
                        return b == null || !c && !d ? b : e3( () => {
                            const e = b.get().wb();
                            return __c.nq({
                                top: d ? 0 : e.top,
                                left: c ? 0 : e.left,
                                width: e.width,
                                height: e.height
                            })
                        }
                        )
                    }
                    render() {
                        const b = this.props.sheet
                          , c = this.props.mj
                          , d = this.props.container
                          , e = this.props.range
                          , f = this.props.PR
                          , g = this.props.TD
                          , h = this.props.UD;
                        return V2("div", {
                            ref: this.vXa,
                            className: W2("i0YQww", this.props.className),
                            children: [U2("div", {
                                ref: this.Gsb,
                                className: "vUKoKg",
                                children: U2("div", {
                                    ref: this.Hsb,
                                    children: U2(w3, {
                                        sheet: b,
                                        container: d,
                                        mj: c,
                                        bounds: e,
                                        Xu: this.props.Xu,
                                        aA: this.props.aA,
                                        HM: this.props.HM,
                                        rl: this.props.rl,
                                        xfa: this.props.xfa,
                                        zb: this.props.zb,
                                        ga: this.props.ga,
                                        O3: this.O3,
                                        Dpa: this.Dpa,
                                        i6: this.i6,
                                        n8: this.props.n8,
                                        Dz: this.props.Dz
                                    })
                                })
                            }), U2(this.rHa, {}), f && U2(f, {
                                sheet: b,
                                range: e,
                                TD: g,
                                UD: h
                            })]
                        })
                    }
                    componentDidMount() {
                        const b = d3( () => {
                            var h = this.props
                              , k = h.ga
                              , l = h.sheet
                              , m = h.mj
                              , n = h.zb
                              , p = this.vXa.current;
                            const q = this.Gsb.current;
                            h = this.Hsb.current;
                            var r = this.bounds
                              , t = r.Tc;
                            const w = r.Ie
                              , v = r.tc;
                            r = r.Ad;
                            k = k ? k.get() : 1;
                            const {width: A, height: B} = m.get();
                            n = (m = v && t && r && w ? gu(n.ub, l, {
                                ta: v,
                                column: t
                            }, {
                                ta: r,
                                column: w
                            })?.wb() : void 0) ? m.width : A;
                            t = m ? m.height : B;
                            p && (p.style.width = `${n * k}px`,
                            p.style.height = `${t * k}px`);
                            q && (q.style.width = `${n * k}px`,
                            q.style.height = `${t * k}px`);
                            l = l.direction === "rtl";
                            l = m ? m.left * k * (l ? 1 : -1) : 0;
                            p = m ? -m.top * k : 0;
                            h && (h.style.transform = `translate(${l}px, ${p}px)`)
                        }
                        )
                          , c = this.props.sheet;
                        var d = this.props.bia;
                        const e = this.props.TD
                          , f = this.props.UD
                          , g = e || f ? d?.(c, e, f) : void 0;
                        d = d3( () => {
                            const h = this.vXa.current;
                            if (h != null) {
                                var k = e || f ? "sticky" : "relative"
                                  , l = f ? "0px" : "unset"
                                  , m = e ? "0px" : "unset"
                                  , n = e ? "0px" : "unset"
                                  , p = c.direction === "rtl";
                                if (g == null)
                                    h.style.position = k,
                                    h.style.top = l,
                                    h.style.left = p ? "unset" : m,
                                    h.style.right = p ? n : "unset";
                                else {
                                    const q = g.get();
                                    h.style.position = q.position ?? k;
                                    h.style.top = q.top ?? l;
                                    h.style.left = p ? "unset" : q.left ?? m;
                                    h.style.right = p ? q.right ?? n : "unset";
                                    h.style.transform = q.transform ?? "unset"
                                }
                            }
                        }
                        );
                        __c.Qc(this, [b, d])
                    }
                    get bounds() {
                        var b = this.props.sheet
                          , c = this.props.zb
                          , d = this.props.range;
                        const e = c.layout.Ik.Vi(b);
                        b = c.layout.Ik.ej(b);
                        if (b.empty || e.empty)
                            return {
                                Tc: void 0,
                                Ie: void 0,
                                tc: void 0,
                                Ad: void 0
                            };
                        c = d.Tc;
                        const f = d.Ie
                          , g = d.tc;
                        d = d.Ad;
                        const h = b.first()
                          , k = e.first()
                          , l = b.last()
                          , m = e.last();
                        return {
                            Tc: c ? b.has(c) ? c : void 0 : h,
                            Ie: f ? b.has(f) ? f : void 0 : l,
                            tc: g ? e.has(g) ? g : void 0 : k,
                            Ad: d ? e.has(d) ? d : void 0 : m
                        }
                    }
                    constructor(...b) {
                        super(...b);
                        this.vXa = (v3.G(this),
                        ww());
                        this.Gsb = ww();
                        this.Hsb = ww();
                        this.i6 = new sfd;
                        this.Smc = e3( () => [...this.O3.get().keys()].sort( (c, d) => this.props.zb.layout.$h.Vi(this.props.sheet).qf(c, d)), {
                            equals: __c.Ep()
                        });
                        this.Qmc = e3( () => [...this.Dpa.get().keys()].sort( (c, d) => this.props.zb.layout.$h.ej(this.props.sheet).qf(c, d)), {
                            equals: __c.Ep()
                        });
                        this.rHa = Y2( () => U2(this.props.SJb, {
                            O3: this.Smc,
                            Rmc: this.Qmc,
                            ZXb: this.i6.VT,
                            range: this.props.range
                        }));
                        this.O3 = e3( () => {
                            const c = this.props.sheet;
                            var d = this.props.ga;
                            const e = this.props.zb;
                            var f = this.d1a?.get();
                            if (f && (f.height <= 0 || f.width <= 0))
                                return new Map;
                            const g = this.bounds;
                            d = d.get();
                            var h = 50 * d
                              , k = !f && g.tc && g.Tc && g.Ad && g.Ie ? gu(e.ub, c, {
                                ta: g.tc,
                                column: g.Tc
                            }, {
                                ta: g.Ad,
                                column: g.Ie
                            })?.wb() : void 0;
                            const l = f ? f.za.y - h : k?.top ?? 0;
                            f = f ? f.br.y + h : (k?.top ?? 0) + (k?.height ?? 0);
                            h = new Map;
                            k = e.layout.Ik.Vi(c);
                            for (let m = g.tc; m != null && g.Ad != null && k.qf(m, g.Ad) <= 0; m = k.next(m)) {
                                const n = e.ub.va(c, m);
                                if (n != null && !(n + m.height < l)) {
                                    if (n > f)
                                        break;
                                    h.set(m, n * d)
                                }
                            }
                            return h
                        }
                        , {
                            equals: g3.shallow
                        });
                        this.Dpa = e3( () => {
                            const c = this.props.sheet;
                            var d = this.props.ga;
                            const e = this.props.zb;
                            var f = this.d1a?.get();
                            if (f && (f.height <= 0 || f.width <= 0))
                                return new Map;
                            const g = this.bounds;
                            d = d.get();
                            var h = 50 * d
                              , k = !f && g.tc && g.Tc && g.Ad && g.Ie ? gu(e.ub, c, {
                                ta: g.tc,
                                column: g.Tc
                            }, {
                                ta: g.Ad,
                                column: g.Ie
                            })?.wb() : void 0;
                            const l = f ? f.za.x - h : k?.left ?? 0;
                            f = f ? f.br.x + h : (k?.left ?? 0) + (k?.width ?? 0);
                            h = new Map;
                            k = e.layout.Ik.ej(c);
                            for (let m = g.Tc; m != null && g.Ie != null && k.qf(m, g.Ie) <= 0; m = k.next(m)) {
                                const n = e.ub.Ca(c, m);
                                if (n != null && !(n + m.width < l)) {
                                    if (n > f)
                                        break;
                                    h.set(m, n * d)
                                }
                            }
                            return h
                        }
                        , {
                            equals: g3.shallow
                        })
                    }
                }
            }
            )(),
            {c: [v3,kfd]} = s3(hfd, [], [Zc], lfd),
            rfd);
            var sfd = class {
                constructor() {
                    this.cells = new aed;
                    this.VYa = (a, b, c) => {
                        let d = this.cells.get([a, b]);
                        d == null && (d = m3.box(void 0, {
                            deep: !1
                        }),
                        this.cells.set([a, b], d));
                        d.set(c);
                        return () => {
                            const e = this.cells.get([a, b]);
                            e === d && (e.set(void 0),
                            this.cells.delete([a, b]))
                        }
                    }
                    ;
                    this.VT = (a, b) => {
                        let c = this.cells.get([a, b]);
                        c == null && (c = m3.box(void 0, {
                            deep: !1
                        }),
                        this.cells.set([a, b], c));
                        return c.get()?.Vsa
                    }
                }
            }
            , w3, tfd = class extends r3 {
                constructor() {
                    super(w3);
                    mfd()
                }
            }
            ;
            new (ifd = ( () => {
                const a = nfd = j3;
                return class extends a {
                    static G(b) {
                        N(b, {
                            qX: m3.shallow,
                            Pt: e3,
                            v8a: n3,
                            xta: n3.bound,
                            k$a: e3
                        })
                    }
                    get Pt() {
                        const b = this.props.Xu?.get();
                        if (b != null && b.length !== 0)
                            return new __c.az(b)
                    }
                    render() {
                        return V2("div", {
                            onMouseDown: this.props.aA?.onMouseDown,
                            onTouchStart: this.props.aA?.onTouchStart,
                            ref: __c.ce(this.ue, this.Pt?.Cm),
                            children: [U2("div", {
                                ref: this.IKa,
                                className: "_5YlOqQ"
                            }), U2("div", {
                                ref: this.MKa,
                                className: "_XCmKw"
                            }), this.qX.map(b => b.Aac)]
                        })
                    }
                    componentDidMount() {
                        const b = f3( () => [this.props.sheet, this.props.Dpa.get(), this.props.O3.get(), this.k$a], ([e,f,g,h], k) => {
                            [k] = k || [];
                            e !== k && this.HOb();
                            this.v8a(f, g, h)
                        }
                        , {
                            fireImmediately: !0
                        })
                          , c = d3( () => {
                            var e = this.props
                              , f = e.ga;
                            e = e.mj;
                            const g = this.ue.current;
                            if (g) {
                                f = f ? f.get() : 1;
                                const {width: h, height: k} = e.get();
                                g.style.width = `${h * f}px`;
                                g.style.height = `${k * f}px`
                            }
                        }
                        )
                          , d = this.qX.map(e => Sdd(e));
                        __c.Qc(this, [c, b, ...d, () => this.Jza.dispose()])
                    }
                    HOb() {
                        const b = y(this.IKa.current)
                          , c = y(this.MKa.current);
                        b.innerHTML = "";
                        c.innerHTML = "";
                        this.u4a.length = 0;
                        this.qX.length = 0
                    }
                    v8a(b, c, d) {
                        const e = y(this.IKa.current)
                          , f = y(this.MKa.current)
                          , g = new Map(c)
                          , h = new Map;
                        d.forEach( ([n,p], {Ca: q, va: r}) => {
                            g.has(n) || g.set(n, r);
                            r = h.get(n);
                            r || (r = new Map,
                            h.set(n, r));
                            r.set(p, q)
                        }
                        );
                        d = [];
                        const k = new Map;
                        for (var l of this.u4a)
                            g.has(l.ta) ? k.set(l.ta, l) : d.push(l);
                        for (const [n,p] of g) {
                            l = k.get(n) || d.pop();
                            l || (l = new ufd(this.xta,n),
                            e.appendChild(l.csa),
                            f.appendChild(l.esa),
                            this.u4a.push(l));
                            var m = void 0;
                            if (c.has(n))
                                if ((m = h.get(n)) && m.size > 0) {
                                    const q = new Map(b);
                                    for (const [r,t] of m)
                                        q.has(r) || q.set(r, t);
                                    m = q
                                } else
                                    m = b;
                            else
                                m = h.get(n) ?? new Map;
                            l.update(p, n, m)
                        }
                        for (const n of d)
                            n.hide();
                        Odd()
                    }
                    xta(b, c) {
                        const d = this.props.xfa
                          , e = this.props.zb
                          , f = this.props.sheet
                          , g = this.props.container
                          , h = this.props.i6
                          , k = this.props.Dz;
                        b = new vfd(this.props.HM,this.props.rl,d(b, c),e,f,b,c,g,h.VYa,this.Ewa,this.Dwa,k,this.Jza);
                        __c.Qc(this, Sdd(b));
                        this.qX.push(b);
                        return b
                    }
                    get k$a() {
                        const b = this.props.sheet
                          , c = this.props.zb;
                        var d = this.props.bounds
                          , e = this.props.Dz
                          , f = d.Tc
                          , g = d.Ie
                          , h = d.tc
                          , k = d.Ad;
                        d = new aed;
                        if (!(f && g && h && k))
                            return d;
                        g = gu(c.ub, b, {
                            ta: h,
                            column: f
                        }, {
                            ta: k,
                            column: g
                        });
                        if (!g)
                            return d;
                        f = g.za.x;
                        g = g.br.x;
                        e = Vdd(e);
                        for (const {ta: m, col: n, K: p} of e) {
                            var l = __c.hu(c.ub, b, n, m);
                            if (!l)
                                continue;
                            e = l.za.x;
                            h = l.br.x;
                            k = l.za.y;
                            l = this.qPb({
                                sheet: b,
                                ta: m,
                                col: n,
                                $Nb: e,
                                ZNb: h,
                                dOb: l.width,
                                K: p
                            });
                            l = l.start < g && l.end > f;
                            (h <= f || e >= g) && l && d.set([m, n], {
                                Ca: e,
                                va: k
                            })
                        }
                        return d
                    }
                    qPb({sheet: b, ta: c, col: d, $Nb: e, ZNb: f, dOb: g, K: h}) {
                        b = b.layout.attrs.get(__c.Lh({
                            textAlign: void 0
                        }), c, d)?.textAlign;
                        switch (b) {
                        case "end":
                            return {
                                start: f - h,
                                end: f
                            };
                        case "center":
                            return e += g / 2,
                            {
                                start: e - h / 2,
                                end: e + h / 2
                            };
                        case void 0:
                        case "auto":
                        case "justify":
                        case "start":
                            return {
                                start: e,
                                end: e + h
                            };
                        default:
                            throw new z(b);
                        }
                    }
                    constructor(...b) {
                        super(...b);
                        this.ue = (w3.G(this),
                        ww());
                        this.IKa = ww();
                        this.MKa = ww();
                        this.u4a = [];
                        this.Jza = new wfd;
                        this.qX = [];
                        this.Ewa = p3(c => {
                            const d = this.props.O3.get();
                            return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                        }
                        );
                        this.Dwa = p3(c => {
                            const d = this.props.Dpa.get();
                            return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                        }
                        )
                    }
                }
            }
            )(),
            {c: [w3,mfd]} = s3(ifd, [], [Zc], nfd),
            tfd);
            var ufd = class {
                static G(a) {
                    N(a, {
                        update: n3
                    })
                }
                update(a, b, c) {
                    [this.csa, this.esa].forEach(d => {
                        d.style.transform = `translateY(${a}px)`;
                        d.classList.add("FPpqvg")
                    }
                    );
                    this.ta = b;
                    for (const [d] of c)
                        c = this.qX.get(d),
                        c || (c = this.xta(d, b),
                        this.qX.set(d, c),
                        this.csa.appendChild(c.bsa),
                        this.esa.appendChild(c.FY)),
                        c.update(b)
                }
                hide() {
                    [this.csa, this.esa].forEach(a => {
                        a.style.transform = "translate(-1000px, -1000px) scale(0)"
                    }
                    )
                }
                constructor(a, b) {
                    this.xta = a;
                    this.ta = b;
                    this.csa = (ufd.G(this),
                    document.createElement("div"));
                    this.esa = document.createElement("div");
                    this.qX = new Map
                }
            }
              , vfd = class {
                static G(a) {
                    N(a, {
                        Usa: m3.ref,
                        ta: m3.ref,
                        update: n3,
                        SA: e3,
                        attrs: e3.struct,
                        LTa: e3,
                        sN: e3,
                        renderer: e3,
                        Vsa: m3.struct,
                        Hzb: n3,
                        $rb: e3
                    })
                }
                update(a) {
                    a !== this.ta && (this.ta = a,
                    this.dF.ta = a,
                    this.gOa && this.gOa(),
                    this.gOa = this.VYa(this.ta, this.col, this))
                }
                get Aac() {
                    return this.Usa
                }
                get SA() {
                    const a = this.sheet.layout.cells.get(this.ta, this.col);
                    return a ? a.ref : void 0
                }
                get attrs() {
                    const a = this.dF.attrs;
                    return {
                        Nh: a?.Nh,
                        textAlign: a?.textAlign,
                        direction: a?.direction,
                        link: a?.link,
                        fontSize: a?.fontSize,
                        color: a?.color,
                        hw: a?.hw
                    }
                }
                get LTa() {
                    var a = this.dF.span;
                    if (!a)
                        return !1;
                    if (a.tc === a.Ad && a.Tc === a.Ie)
                        return !0;
                    const b = this.Ewa("first")
                      , c = this.Ewa("last")
                      , d = this.Dwa("first")
                      , e = this.Dwa("last");
                    if (!(b && c && d && e))
                        return !1;
                    const f = this.zb.layout.Ik.Vi(this.sheet)
                      , g = this.zb.layout.Ik.ej(this.sheet)
                      , h = this.zb.layout.$h.Vi(this.sheet)
                      , k = this.zb.layout.$h.ej(this.sheet)
                      , l = R2(a.tc, a.Ad, f);
                    a = R2(a.Tc, a.Ie, g);
                    let m;
                    for (const p of l)
                        if (h.has(p) && f.qf(p, b) >= 0 && f.qf(p, c) <= 0) {
                            m = p;
                            break
                        }
                    let n;
                    for (const p of a)
                        if (k.has(p) && g.qf(p, d) >= 0 && g.qf(p, e) <= 0) {
                            n = p;
                            break
                        }
                    return m === this.ta && n === this.col
                }
                get sN() {
                    const a = this.sheet
                      , b = this.ta
                      , c = this.col;
                    if (!this.container)
                        return {
                            type: void 0,
                            container: {
                                config: a
                            },
                            ta: b,
                            column: c
                        };
                    switch (this.container.type) {
                    case "fixed-page":
                        return this.container.f_(c, b);
                    case "sheet-item":
                        return this.container.f_(c, b);
                    case "sheet-element":
                        return this.container.f_(c, b);
                    default:
                        throw new z(this.container);
                    }
                }
                get renderer() {
                    const a = this.SA;
                    if (a && this.LTa && (a.content.ref || a.Ka.ref))
                        return this.HM({
                            context: {
                                container: this.sN,
                                attrs: this.attrs
                            },
                            pv: this.oWa,
                            rl: this.rl
                        })
                }
                Hzb(a) {
                    this.Vsa = a
                }
                get $rb() {
                    var a = this.Vsa;
                    if (a && this.dF.attrs?.Nh === "overflow" && (a = a.width,
                    !(a <= this.col.width)))
                        return a
                }
                constructor(a, b, c, d, e, f, g, h, k, l, m, n, p) {
                    this.HM = a;
                    this.dF = c;
                    this.zb = d;
                    this.sheet = e;
                    this.col = f;
                    this.container = h;
                    this.VYa = k;
                    this.Ewa = l;
                    this.Dwa = m;
                    this.Dz = n;
                    this.Jza = p;
                    this.bsa = (vfd.G(this),
                    document.createElement("div"));
                    this.FY = document.createElement("div");
                    this.DS = document.createElement("div");
                    this.CN = document.createElement("div");
                    this.Xla = document.createElement("div");
                    this.oWa = () => {
                        this.Jza.queue(this)
                    }
                    ;
                    this.Vsa = void 0;
                    this.ta = g;
                    this.bsa.className = "_2JFriw";
                    this.FY.className = "imy9ug";
                    this.DS.className = W2("KDr0Vw", {
                        _0yZ6Qg: this.SA?.content.ref?.type !== "text3",
                        qhF5uA: this.SA?.content.ref?.type !== "text3" && this.SA?.content.ref?.type !== "text2"
                    });
                    this.CN.className = "_30B9pw";
                    this.DS.appendChild(this.CN);
                    this.FY.appendChild(this.DS);
                    this.Xla.className = "G7zH2w";
                    this.gOa = k(this.ta, this.col, this);
                    this.rl = q => U2(b, {
                        ...q,
                        pv: this.oWa
                    })
                }
            }
              , pfd = class {
                constructor() {
                    this.Dla = new aed;
                    this.SKa = ied("overflowing-cells-registry");
                    this.bcc = n3( (a, b, c) => {
                        let d = this.Dla.get([a, b]);
                        d == null && (d = m3.box(void 0, {
                            deep: !1
                        }),
                        this.Dla.set([a, b], d));
                        d.set(c);
                        this.SKa.reportChanged();
                        const e = d;
                        return n3( () => {
                            const f = this.Dla.get([a, b]);
                            f === e && (f.set(void 0),
                            this.Dla.delete([a, b]),
                            this.SKa.reportChanged())
                        }
                        )
                    }
                    )
                }
            }
              , wfd = class {
                queue(a) {
                    this.hua.add(a);
                    this.Ipb == null && (this.Ipb = (async () => {
                        const b = jdd()();
                        try {
                            b.r(await b.s(void 0)),
                            Xdd(this),
                            this.Ipb = void 0
                        } finally {
                            b.s()
                        }
                    }
                    )())
                }
                dispose() {
                    this.isDisposed = !0;
                    this.hua.clear()
                }
                constructor() {
                    this.hua = new Set;
                    this.isDisposed = !1
                }
            }
            ;
            var xfd, yfd, zfd, h3, Afd = class extends r3 {
                constructor() {
                    super(h3);
                    yfd()
                }
            }
            ;
            new (xfd = ( () => {
                const a = zfd = j3;
                return class extends a {
                    static G(b) {
                        N(b, {
                            fwa: e3
                        })
                    }
                    render() {
                        const b = this.props.sheet
                          , c = this.props.container
                          , d = this.props.mj
                          , e = this.props.zb
                          , f = this.props.Xu
                          , g = this.props.aA
                          , h = this.props.bia
                          , k = this.props.HM
                          , l = this.props.Kh
                          , m = this.props.rl
                          , n = this.props.viewport
                          , p = this.props.PR;
                        var q = this.props.SFb;
                        const r = this.props.Yha
                          , t = this.props.dA
                          , w = this.props.n8
                          , v = b.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                          , A = e.layout.$h.Vi(b);
                        if (!e.layout.$h.ej(b).empty && !A.empty)
                            return q = q?.get(),
                            U2("div", {
                                className: W2("SNkrHw", v, {
                                    sEBkig: q,
                                    Nby46g: !q
                                }),
                                ...l,
                                children: U2(ofd, {
                                    HM: k,
                                    rl: m,
                                    SJb: this.rHa,
                                    xfa: this.xfa,
                                    zb: e,
                                    sheet: b,
                                    container: c,
                                    mj: d,
                                    Xu: f,
                                    aA: g,
                                    bia: h,
                                    ga: this.ga,
                                    viewport: n,
                                    PR: p,
                                    fwa: this.fwa,
                                    Yha: r,
                                    dA: t,
                                    n8: w
                                })
                            })
                    }
                    get fwa() {
                        var b = this.props.sheet
                          , c = this.props.zb;
                        const d = {}
                          , e = c.layout.Ik.Dha(b)
                          , f = c.layout.Ik.Cha(b);
                        var g = c.layout.Ik.Vi(b)
                          , h = c.layout.Ik.ej(b);
                        b = g.first();
                        c = g.last();
                        const k = h.first()
                          , l = h.last();
                        if (b != null && c != null && k != null && l != null)
                            return h = f ? h.next(f) : k,
                            g = e ? g.next(e) : b,
                            e && f && (d.Z8a = {
                                range: {
                                    Tc: k,
                                    tc: b,
                                    Ie: f,
                                    Ad: e
                                }
                            }),
                            e && h && (d.cGb = {
                                range: {
                                    Tc: h,
                                    tc: b,
                                    Ie: l,
                                    Ad: e
                                }
                            }),
                            f && g && (d.Hjb = {
                                range: {
                                    Tc: k,
                                    tc: g,
                                    Ie: f,
                                    Ad: c
                                }
                            }),
                            g && h && (d.JEb = {
                                range: {
                                    Tc: h,
                                    tc: g,
                                    Ie: l,
                                    Ad: c
                                }
                            }),
                            d
                    }
                    get ga() {
                        return this.props.ga ? this.props.ga : e3( () => 1)
                    }
                    constructor(...b) {
                        super(...b);
                        this.rHa = (h3.G(this),
                        Y2(c => {
                            const {sheet: d, mj: e, zb: f, $Sa: g, ga: h, Era: k="hidden"} = this.props;
                            return U2(t3, {
                                sheet: d,
                                zb: f,
                                range: c.range,
                                mj: e,
                                ga: h,
                                children: U2(gfd, {
                                    ...c,
                                    sheet: d,
                                    zb: f,
                                    ga: this.ga,
                                    $Sa: g,
                                    overflow: k,
                                    mj: e
                                })
                            })
                        }
                        ));
                        this.xfa = (c, d) => new __c.$Ua(this.props.Tg,this.props.zb,this.props.dA,this.props.sheet,c,d,this.ga,this.qB,this.uB);
                        this.qB = (c, d) => this.props.qB?.(this.props.sheet, c, d);
                        this.uB = (c, d) => this.props.uB?.(this.props.sheet, c, d)
                    }
                }
            }
            )(),
            {c: [h3,yfd]} = s3(xfd, [], [Zc], zfd),
            Afd);
            __c.gVa = {
                R0b: function(a) {
                    const b = a.az
                      , c = a.xG
                      , d = a.gd
                      , e = a.zq
                      , f = a.Tg
                      , g = a.zb
                      , h = a.dA
                      , k = a.cda;
                    sdd({
                        wg: a.wg,
                        embeds: a.embeds,
                        pI: a.pI,
                        zb: g,
                        kh: a.kh,
                        Zhc: a.P1,
                        Ut: a.Ut,
                        gb: a.gb
                    });
                    const l = Zdd({
                        HM: k,
                        zb: g,
                        Tg: f,
                        dA: h
                    });
                    b.MHa = Mdd({
                        Wv: l,
                        zb: g
                    });
                    c.sHa = Bdd({
                        Wv: l
                    });
                    ({WJb: a} = Kdd({
                        Wv: l,
                        jh: e(),
                        GAb: new Wed,
                        zb: g
                    }));
                    d.Pr.LHa = a;
                    const {JHb: m, KHb: n, IHb: p} = Add({
                        zb: g
                    });
                    return {
                        t6a: Y2(q => U2(med, {
                            ...q,
                            container: void 0,
                            Wv: l,
                            VJb: m,
                            XJb: n,
                            TJb: p,
                            rl: ned
                        }))
                    }
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/b8b1d1c3e1a36399.js.map
