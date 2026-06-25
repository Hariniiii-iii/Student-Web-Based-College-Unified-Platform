(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[6712], {

    /***/
    148454: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(792308);
        const __d = (i, n) => __web_req__.me(i).then(n);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var qK = __c.qK;
            var G = __c.G;
            var Y = __c.Y;
            var Oa = __c.Oa;
            var kK = __c.kK;
            var iK = __c.iK;
            var bb = __c.bb;
            var hK = __c.hK;
            var Na = __c.Na;
            var W = __c.W;
            var F = __c.F;
            var H = __c.H;
            var N = __c.N;
            var g4;
            var O3;
            var b4;
            var ca = __c.ca;
            var L = __c.L;
            var ya = __c.ya;
            var Hr = __c.Hr;
            var N4;
            var x = __c.x;
            var y = __c.y;
            var Of = __c.Of;
            var v4;
            var sa = __c.sa;
            var q4;
            var $u = __c.$u;
            var vj = __c.vj;
            var jD = __c.jD;
            var Yh = __c.Yh;
            var X3;
            var QE = __c.QE;
            var L3;
            var a4;
            var N3;
            var OE = __c.OE;
            var u = __c.u;
            var pf = __c.pf;
            var z = __c.z;
            var egd, fgd, ggd, hgd, y3, jgd, A3, lgd, mgd, ngd, pgd, ogd, rgd, D3, Igd, H3, I3, J3, K3, M3, P3, Jgd, Q3, R3, S3, T3, U3, V3, W3, Y3, Z3, $3, c4, d4, e4, f4, Kgd, Lgd, Mgd, Ngd, h4, Qgd, Pgd, i4, Sgd, Tgd, Ugd, j4, Vgd, Wgd, Xgd, Zgd, k4, m4, n4, o4, p4, $gd, r4, ihd, fhd, ghd, ehd, Lhd, Shd, Thd, Uhd, Vhd, Whd, x4, y4, Yhd, Zhd, $hd, z4, cid, aid, A4, gid, eid, fid, B4, iid, kid, lid, nid, E4, oid, Bid, Cid, Did, Eid, I4, pid, rid, vid, yid, Aid, G4, xid, Fid, mid, Hid, Iid, Jid, Gid, Mid, Nid, Oid, K4, ejd, bjd, Zid, ajd, Qid, Sid, Rid, $id, Pid, fjd, Yid, Wid, Vid, L4, Tid, Uid, M4, ljd, jjd, Mhd, njd, khd, mjd, sjd, ujd, tjd, wjd, xjd, Cjd, Ejd, Gjd, Fjd, P4, Jjd, Vjd, akd, dkd, gkd, hkd, ikd, kkd, lkd, mkd, qkd, jkd, skd, tkd, wkd, ykd, Bkd, Akd, Dkd, Fkd, Hkd, Ikd, Mkd, Qkd, Ukd, Vkd, Wkd, Xkd, Ykd, $kd, ald, Cld, Ild, Eld, Dld, Hld, Fld, Kld, Lld, Mld, Nld, Old, e5, Pld, Qld, Rld, Sld, Tld, Uld, Xld, Wld, cld, amd, i5, bmd, cmd, dmd, emd, fmd, kmd, lmd, mmd, nmd, omd, pmd, imd, tmd, k5, l5, m5, n5, o5, j5, rmd, qmd, zmd, Bmd, Amd, Fmd, Cmd, Dmd, Gmd, Hmd, Mmd, Nmd, Pmd, v5, Qmd, Rmd, Vmd, Wmd, Xmd, Ymd, Zmd, $md, and, bnd, cnd, dnd, fnd;
            egd = function(a, b) {
                const c = a.A3a
                  , d = a.VU;
                if (d && b.type === "RESOLVED")
                    return __c.Ts(a, b, () => d.qp(b));
                if (c && b.type === "UNRESOLVED")
                    return __c.Ts(a, b, () => c.qp(b));
                __c.Rs(a, b);
                return Promise.reject(Error())
            }
            ;
            fgd = async function(a, b) {
                const c = (0,
                __c.ob)()();
                try {
                    const d = b.map(__c.Ls).filter(e => !a.contains(e)).map(async e => {
                        const f = (0,
                        __c.ob)()();
                        try {
                            const g = f.r(await f.s(egd(a.dm, e)));
                            g && f.r(await f.s(__c.Xs(a, e, g)))
                        } finally {
                            f.s()
                        }
                    }
                    );
                    c.r(await c.s(Promise.all(d)))
                } finally {
                    c.s()
                }
            }
            ;
            ggd = function(a, b) {
                const c = b.Um || b.media
                  , d = __c.Rxa(a, c, !1);
                if (!d)
                    return new Map;
                const e = c === b.media && __c.Uxa(a, b, !!b.filter)
                  , f = d.Hs.filter(h => {
                    if (e && !__c.txa(h.pg ? 1 : __c.Fs(h) ? 2 : 0))
                        return !1;
                    if (d.Hs[0].pk) {
                        if (!h.pk && h.quality && h.quality >= 5)
                            return !1
                    } else if (h.pk)
                        return !1;
                    switch (a.xP) {
                    case "screen1x":
                        if (h.quality && h.quality > 6)
                            return !1;
                        break;
                    case "best":
                    case "all":
                        break;
                    default:
                        throw new z(a.xP);
                    }
                    return !0
                }
                );
                e ? (b = __c.Ps(d, b.mc)) && f.push(b) : b.filter && (b = __c.Vs({
                    ...b.filter,
                    ky: 0
                }),
                (b = d.aQa.get(b)) && f.push(b));
                const g = __c.or(c);
                return new Map(f.map(h => {
                    let k = g;
                    h.mimeType && (k += `:${h.mimeType}`);
                    k += `:${h.width}x${h.height}`;
                    k += `:${h.pk ? "W" : ""}${h.pg ? "S" : ""}`;
                    h.nO && (k += `:${h.nO}`);
                    h.mc && (k += `:${__c.Os(h.mc)}`);
                    return [k, h.pg ? {
                        type: "spritesheet",
                        file: h,
                        metadata: d.metadata
                    } : {
                        type: "simple",
                        file: h,
                        x8: void 0
                    }]
                }
                ))
            }
            ;
            hgd = function(a, b) {
                if (a.Kib != null)
                    throw Error();
                a.Kib = b
            }
            ;
            y3 = function({axa: a, serviceName: b, methodName: c, spanName: d, Va: e, iDa: f, Xta: g}) {
                if (c != null)
                    return async (h, {parentSpan: k}={}) => {
                        const l = (0,
                        __c.nVc)()();
                        try {
                            if (e == null || d == null || k == null)
                                return g(l.r(await l.s(a.exec(b, c, f(h)))));
                            const n = e.startSpan(d, k);
                            const p = n.spanContext();
                            var m = `00-${p.traceId}-${p.spanId}-${n.mH() ? "01" : "00"}`;
                            try {
                                const q = g(l.r(await l.s(a.exec(b, c, f(h), {
                                    Y2a: m
                                }))));
                                n.end("ok");
                                return q
                            } catch (q) {
                                throw l.r(),
                                n.end("error"),
                                q;
                            }
                        } finally {
                            l.s()
                        }
                    }
            }
            ;
            jgd = function(a) {
                return new igd(typeof a === "function" ? z3(a) : a)
            }
            ;
            A3 = function(a) {
                return typeof a === "function"
            }
            ;
            lgd = function(a) {
                return {
                    get: () => a,
                    set: kgd
                }
            }
            ;
            mgd = function(...a) {
                const b = new Set
                  , c = new Set;
                for (const d of a)
                    for (const e in d)
                        b.has(e) ? c.add(e) : b.add(e);
                if (c.size)
                    throw Error(`keys not disjoint: ${[...c].map(d => `'${d}'`).join(", ")}`);
            }
            ;
            ngd = function(a, b) {
                return () => b(pf(a, c => c()))
            }
            ;
            pgd = function(a) {
                u(a.length === 1);
                let b;
                return c => {
                    if (b != null && ogd(b[0], c))
                        return b[1];
                    const d = a(c);
                    b = [c, d];
                    return d
                }
            }
            ;
            ogd = function(a, b) {
                if (a === b)
                    return !0;
                if (a == null || b == null)
                    return !1;
                const c = Object.keys(a)
                  , d = Object.keys(b);
                if (c.length !== d.length)
                    return !1;
                for (const e of c)
                    if (a[e] !== b[e])
                        return !1;
                return !0
            }
            ;
            rgd = function(a) {
                var b = qgd;
                return {
                    LX: b({
                        Qj: a.LX,
                        args: {},
                        bf: {
                            O: {
                                image: void 0,
                                video: void 0,
                                Ha: void 0
                            },
                            attributes: {
                                Mg: void 0,
                                color: void 0,
                                ma: void 0,
                                locked: void 0,
                                fg: void 0,
                                Pj: void 0,
                                Eb: void 0,
                                flipX: void 0,
                                flipY: void 0
                            }
                        }
                    }),
                    $Ga: b({
                        Qj: a.$Ga,
                        args: {
                            media: void 0
                        },
                        bf: {
                            O: {
                                filter: void 0
                            },
                            attributes: {
                                Um: void 0,
                                eb: void 0,
                                ma: void 0,
                                mc: void 0,
                                La: void 0
                            }
                        }
                    }),
                    BHa: b({
                        Qj: a.BHa,
                        args: {
                            video: void 0
                        },
                        bf: {
                            O: {
                                IA: void 0,
                                filter: void 0,
                                Hd: void 0,
                                Ah: void 0
                            },
                            attributes: {
                                eb: void 0,
                                ma: void 0,
                                mc: void 0,
                                La: void 0,
                                trim: void 0,
                                tv: void 0,
                                autoplay: void 0,
                                playbackRate: void 0,
                                volume: void 0
                            }
                        }
                    }),
                    lqa: b({
                        Qj: a.lqa,
                        args: {},
                        bf: {
                            O: {
                                fill: void 0
                            },
                            attributes: {
                                weight: void 0,
                                color: void 0,
                                Wc: void 0,
                                df: void 0
                            }
                        }
                    }),
                    NR: b({
                        Qj: a.NR,
                        args: {
                            d: void 0
                        },
                        bf: {
                            O: {
                                fill: void 0,
                                stroke: void 0
                            },
                            attributes: {
                                X: void 0
                            }
                        }
                    }),
                    E4: b({
                        Qj: a.E4,
                        args: {},
                        bf: {
                            O: {
                                ...B3,
                                fill: void 0,
                                stroke: void 0
                            },
                            attributes: {
                                ...C3,
                                X: void 0
                            }
                        }
                    }),
                    F4: b({
                        Qj: a.F4,
                        args: {},
                        bf: {
                            O: {
                                ...B3,
                                xb: void 0,
                                resizeMode: void 0,
                                slice: void 0,
                                Ra: void 0
                            },
                            attributes: {
                                ...C3,
                                Pi: void 0,
                                viewBox: void 0
                            }
                        }
                    }),
                    pHa: b({
                        Qj: a.pHa,
                        args: {},
                        bf: {
                            O: {
                                text: void 0
                            },
                            attributes: {
                                box: void 0,
                                Yc: void 0,
                                zn: void 0,
                                Eb: void 0
                            }
                        }
                    }),
                    qHa: b({
                        Qj: a.qHa,
                        args: {},
                        bf: {
                            O: {},
                            attributes: {
                                minBlockSize: void 0
                            }
                        }
                    }),
                    lHa: b({
                        Qj: a.lHa,
                        args: {
                            Fb: void 0,
                            vertical: void 0
                        },
                        bf: {
                            O: {
                                Qa: void 0
                            },
                            attributes: {
                                source: void 0,
                                Wf: void 0,
                                Vf: void 0
                            }
                        }
                    }),
                    G4: b({
                        Qj: a.G4,
                        args: {},
                        bf: {
                            O: {
                                ...B3,
                                text: void 0,
                                Je: void 0
                            },
                            attributes: {
                                ...C3,
                                im: void 0,
                                wh: void 0,
                                K: void 0,
                                P: void 0,
                                Ff: void 0,
                                writingMode: void 0,
                                placeholder: void 0
                            }
                        }
                    }),
                    RGa: b({
                        Qj: a.RGa,
                        args: {
                            url: void 0,
                            K: void 0,
                            P: void 0
                        },
                        bf: {
                            O: B3,
                            attributes: C3
                        }
                    }),
                    $pa: b({
                        Qj: a.$pa,
                        args: {},
                        bf: {
                            O: {
                                ...B3,
                                cells: void 0
                            },
                            attributes: {
                                ...C3,
                                layout: void 0
                            }
                        }
                    }),
                    XGa: b({
                        Qj: a.XGa,
                        args: {},
                        bf: {
                            O: {
                                fill: void 0,
                                stroke: void 0
                            },
                            attributes: {
                                X: void 0
                            }
                        }
                    }),
                    aqa: b({
                        Qj: a.aqa,
                        args: {},
                        bf: {
                            O: {
                                ...B3,
                                start: void 0,
                                end: void 0,
                                fill: void 0,
                                geometry: void 0,
                                xb: void 0
                            },
                            attributes: {
                                ...C3,
                                weight: void 0,
                                color: void 0,
                                Wc: void 0,
                                df: void 0
                            }
                        }
                    }),
                    bqa: b({
                        Qj: a.bqa,
                        args: {},
                        bf: {
                            O: {},
                            attributes: {
                                marker: void 0,
                                anchor: void 0,
                                position: void 0
                            }
                        }
                    }),
                    dHa: b({
                        Qj: a.dHa,
                        args: {},
                        bf: {
                            O: {
                                text: void 0
                            },
                            attributes: {
                                width: void 0,
                                height: void 0,
                                position: void 0,
                                orientation: void 0,
                                Ff: void 0,
                                wh: void 0,
                                Eb: void 0
                            }
                        }
                    }),
                    G5a: b({
                        Qj: a.G5a,
                        args: {},
                        bf: {
                            O: {
                                zg: void 0
                            },
                            attributes: {
                                X: void 0
                            }
                        }
                    }),
                    v5a: b({
                        Qj: a.v5a,
                        args: {},
                        bf: {
                            O: {},
                            attributes: {
                                depth: void 0,
                                ou: void 0
                            }
                        }
                    })
                }
            }
            ;
            D3 = function(a, b) {
                return c => b({
                    ...a,
                    ...c
                })
            }
            ;
            Igd = function() {
                return rgd({
                    LX: D3(E3, a => __c.pO.zk(a)),
                    $Ga: D3(sgd, a => __c.qA.zk(a)),
                    BHa: D3(tgd, a => __c.sA.zk({
                        ...a,
                        id: __c.xsc.generate()
                    })),
                    lqa: D3(ugd, a => __c.qO.zk(a)),
                    NR: D3(vgd, a => __c.aS.zk(a)),
                    E4: D3(F3, a => __c.NE.zk({
                        ...a,
                        id: OE.generate()
                    })),
                    F4: D3(G3, a => __c.fJ.zk({
                        ...a,
                        Ra: [],
                        viewBox: {
                            top: 0,
                            left: 0,
                            width: 1,
                            height: 1
                        },
                        id: OE.generate()
                    })),
                    pHa: D3(wgd, a => __c.pS.zk(a)),
                    qHa: D3(xgd, a => __c.qS.zk(a)),
                    lHa: D3(ygd, a => __c.bS.zk(a)),
                    G4: D3(zgd, a => __c.sS.zk({
                        ...a,
                        id: OE.generate()
                    })),
                    RGa: D3(Agd, a => __c.tS.zk({
                        ...a,
                        id: OE.generate()
                    })),
                    bqa: D3(Bgd, a => __c.uS.zk(a)),
                    aqa: D3(Cgd, a => __c.xS.zk({
                        ...a,
                        id: OE.generate()
                    })),
                    dHa: D3(Dgd, a => __c.wS.zk(a)),
                    G5a: D3(Egd, a => __c.vS.zk(a)),
                    v5a: D3(Fgd, a => __c.vS.zk(a)),
                    $pa: D3(Ggd, a => __c.yS.zk({
                        ...a,
                        id: OE.generate()
                    })),
                    XGa: D3(Hgd, a => __c.eJ.zk(a))
                })
            }
            ;
            H3 = function(a, b) {
                return {
                    key: a,
                    EQ: 1,
                    Ks: 0,
                    type: b
                }
            }
            ;
            I3 = function(a, b) {
                return {
                    key: a,
                    EQ: 1,
                    Ks: 1,
                    type: b
                }
            }
            ;
            J3 = function(a, b) {
                return {
                    key: a,
                    EQ: 0,
                    Ks: 1,
                    type: b
                }
            }
            ;
            K3 = function(a, b) {
                return {
                    key: a,
                    EQ: 1,
                    Ks: 0,
                    type: b
                }
            }
            ;
            L3 = __c.L3 = function(a, b) {
                return {
                    key: a,
                    EQ: 1,
                    Ks: 1,
                    type: b
                }
            }
            ;
            M3 = function(a) {
                return {
                    kind: 0,
                    If: a
                }
            }
            ;
            O3 = __c.O3 = function(a, b) {
                return N3.val(a, M3(b))
            }
            ;
            P3 = function(a, b) {
                return N3.val(a, {
                    kind: 2,
                    range: b
                })
            }
            ;
            Jgd = function(...a) {
                return {
                    kind: 4,
                    values: new Set(a)
                }
            }
            ;
            Q3 = function(a, ...b) {
                return N3.val(a, Jgd(...b))
            }
            ;
            R3 = function(a) {
                return H3(a, M3())
            }
            ;
            S3 = function() {
                return {
                    kind: 1
                }
            }
            ;
            T3 = function(a, b) {
                return H3(a, {
                    kind: 2,
                    range: b
                })
            }
            ;
            U3 = function(a, ...b) {
                return H3(a, Jgd(...b))
            }
            ;
            V3 = function(a, b) {
                return H3(a, {
                    kind: 3,
                    range: b
                })
            }
            ;
            W3 = function(a) {
                return {
                    kind: 5,
                    itemType: a
                }
            }
            ;
            X3 = __c.X3 = function(a, b) {
                return I3(a, M3(b))
            }
            ;
            Y3 = function(a, b) {
                return I3(a, {
                    kind: 2,
                    range: b
                })
            }
            ;
            Z3 = function(a, b) {
                return I3(a, {
                    kind: 3,
                    range: b
                })
            }
            ;
            $3 = function(a, ...b) {
                return I3(a, Jgd(...b))
            }
            ;
            a4 = __c.a4 = function(a) {
                return {
                    kind: 7,
                    name: a
                }
            }
            ;
            b4 = __c.b4 = function(a, b) {
                return N3.ref(a, a4(b))
            }
            ;
            c4 = function(a) {
                return {
                    kind: 9,
                    itemType: a
                }
            }
            ;
            d4 = function(a) {
                return {
                    kind: 10,
                    fields: a
                }
            }
            ;
            e4 = function(a, b) {
                return N3.ref(a, d4(b))
            }
            ;
            f4 = function(a, ...b) {
                return {
                    kind: 11,
                    iga: a,
                    di: b
                }
            }
            ;
            Kgd = function(a, b, ...c) {
                return N3.ref(a, f4(b, ...c))
            }
            ;
            Lgd = function(a, b, ...c) {
                return K3(a, f4(b, ...c))
            }
            ;
            Mgd = function(a, b, ...c) {
                return L3(a, f4(b, ...c))
            }
            ;
            Ngd = function(a) {
                switch (a.kind) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    return !1;
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    return !0;
                default:
                    throw new z(a);
                }
            }
            ;
            g4 = __c.g4 = function(a) {
                return () => ({
                    ...Ogd,
                    ...a
                })
            }
            ;
            h4 = function(a, b) {
                return b.map(c => ({
                    type: a,
                    id: c.id,
                    version: c.version
                }))
            }
            ;
            Qgd = function(a) {
                return {
                    selector: a.selector,
                    operation: Pgd(a.operation)
                }
            }
            ;
            Pgd = function(a) {
                switch (a.type) {
                case "BACKGROUND_COLOR":
                    return {
                        type: 1,
                        color: a.color
                    };
                case "TRANSLATION":
                    return {
                        type: 2,
                        Ia: a.Ia,
                        Oa: a.Oa
                    };
                case "ROTATION":
                    return {
                        type: 4,
                        rotation: a.rotation
                    };
                case "SCALE":
                    return {
                        type: 5,
                        scale: a.scale
                    };
                case "MEDIA_REPLACE":
                    return {
                        type: 3,
                        vE: {
                            type: "media",
                            id: a.vE.id,
                            version: a.vE.version
                        }
                    };
                case "RICHTEXT":
                    return {
                        type: 6,
                        html: __c.km.Rb.S(a.html)
                    };
                case "LINK":
                    return {
                        type: 7,
                        href: a.href
                    };
                case "REORDER":
                    return {
                        type: 8,
                        order: a.order
                    };
                default:
                    throw new z(a);
                }
            }
            ;
            i4 = function(a) {
                if (a in Rgd)
                    return {
                        color: Rgd[a],
                        ma: 0
                    };
                if (a === "transparent")
                    return {
                        color: "#000000",
                        ma: 1
                    };
                var [,b] = a.match(/^#?([a-fA-F0-9]{3,8})$/) ?? ["", ""];
                switch (b.length) {
                case 3:
                    return {
                        color: `#${b.charAt(0).repeat(2)}${b.charAt(1).repeat(2)}${b.charAt(2).repeat(2)}`.toLowerCase(),
                        ma: 0
                    };
                case 6:
                    return {
                        color: `#${b}`.toLowerCase(),
                        ma: 0
                    };
                case 8:
                    return a = parseInt(b.substring(6, 8), 16),
                    {
                        color: `#${b.substring(0, 6)}`.toLowerCase(),
                        ma: 1 - a / 255
                    }
                }
                const [,c,d,e,f] = a.match(/^rgba?\(\s*(\d{1,3}%?)\s*,\s*(\d{1,3}%?)\s*,\s*(\d{1,3}%?)\s*(?:,\s*([\d.]+)?%?\s*)?\)$/) ?? ["", "", "", ""];
                b = parseInt(c, 10);
                a = parseInt(d, 10);
                const g = parseInt(e, 10);
                var h = parseFloat(f);
                h = f === void 0 || f === "" || Number.isNaN(h) ? 1 : h;
                if (b >= 0 && b <= 255 && a >= 0 && a <= 255 && g >= 0 && g <= 255)
                    return {
                        color: `#${b.toString(16).padStart(2, "0")}${a.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}`,
                        ma: 1 - h
                    }
            }
            ;
            Sgd = function(a) {
                switch (a) {
                case "to right":
                    return 0;
                case "to bottom right":
                case "to right bottom":
                    return 45;
                case "to bottom":
                    return 90;
                case "to bottom left":
                case "to left bottom":
                    return 135;
                case "to left":
                    return 180;
                case "to top left":
                case "to left top":
                    return 225;
                case "to top":
                    return 270;
                case "to top right":
                case "to right top":
                    return 315
                }
                a = a.match(/^([-+]?[\d.]+)(deg|rad|grad|turn)?$/);
                if (!a)
                    return 0;
                const [,b,c="deg"] = a;
                a = parseFloat(b);
                if (isNaN(a))
                    return 0;
                switch (c) {
                case "deg":
                    return a;
                case "rad":
                    return a * 180 / Math.PI;
                case "grad":
                    return a * .9;
                case "turn":
                    return a * 360;
                default:
                    return 0
                }
            }
            ;
            Tgd = function(a) {
                a = (a % 360 + 360) % 360;
                return a > 180 ? a - 360 : a
            }
            ;
            Ugd = function(a) {
                const b = [];
                let c = ""
                  , d = 0;
                for (const e of a)
                    if (e === "(")
                        d++,
                        c += e;
                    else if (e === ")") {
                        d--;
                        if (d < 0)
                            throw Error("Malformed gradient string: unmatched closing parenthesis");
                        c += e
                    } else
                        e === "," && d === 0 ? (b.push(c),
                        c = "") : c += e;
                c && b.push(c);
                return b
            }
            ;
            j4 = function(a) {
                return a.replace(/\s+[\d.]+%?\s*$/, "").trim()
            }
            ;
            Vgd = function(a) {
                var [,b] = a.match(/^linear-gradient\((.*)\)$/) ?? ["", ""];
                if (b) {
                    b = Ugd(b);
                    if (b.length === 0)
                        return;
                    const d = b.length > 0 && !i4(j4(b[0]));
                    a = d ? Tgd(Sgd(b[0])) : 0;
                    b = (d ? b.slice(1) : b).map(f => i4(j4(f.trim()))).filter(f => f !== void 0);
                    const e = b.length;
                    return e < 2 ? void 0 : {
                        type: "linear",
                        Vc: b.map( ({color: f, ma: g}, h) => ({
                            color: f,
                            ma: g,
                            position: e > 1 ? h / (e - 1) : 0
                        })),
                        rotation: a
                    }
                }
                [,a] = a.match(/^radial-gradient\((.*)\)$/) ?? ["", ""];
                if (a && (a = Ugd(a),
                a.length !== 0)) {
                    a = (a.length > 0 && !i4(j4(a[0])) ? a.slice(1) : a).map(d => i4(j4(d.trim()))).filter(d => d !== void 0);
                    var c = a.length;
                    return c < 2 ? void 0 : {
                        type: "radial",
                        Vc: a.map( ({color: d, ma: e}, f) => ({
                            color: d,
                            ma: e,
                            position: c > 1 ? f / (c - 1) : 0
                        })),
                        center: {
                            top: .5,
                            left: .5
                        }
                    }
                }
            }
            ;
            Wgd = function(a) {
                if (a === "transparent")
                    return {
                        ...QE,
                        color: void 0
                    };
                var b = i4(a);
                if (b)
                    return {
                        ...QE,
                        color: b.color,
                        ma: b.ma
                    };
                if (b = Vgd(a))
                    return {
                        ...QE,
                        Ha: b
                    };
                throw Error(`Unrecognized color: ${a}`);
            }
            ;
            Xgd = function(a) {
                try {
                    var b = new URL(a)
                } catch (c) {
                    throw Error(`Failed to construct URL: ${a}`, {
                        cause: c
                    });
                }
                if (b.protocol === "canva:") {
                    const c = b.hostname
                      , d = parseInt(b.pathname.substring(1), 10);
                    if (c.startsWith("M") && !isNaN(d))
                        return {
                            type: 1,
                            media: {
                                id: c,
                                version: d
                            }
                        }
                }
                return b.protocol === "codelet:" ? {
                    type: 2,
                    media: a.slice(10)
                } : {
                    type: 2,
                    media: a
                }
            }
            ;
            Zgd = function(a) {
                return (new Ygd).map(a, {
                    textContent: void 0,
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
            }
            ;
            k4 = function() {
                return {
                    Pd: V3(1, {
                        min: 0
                    }),
                    vea: I3(2, W3({
                        kind: 3,
                        range: void 0
                    })),
                    X: V3(3, {
                        min: 0,
                        max: 100
                    })
                }
            }
            ;
            m4 = function(a) {
                return {
                    borderColor: H3(a, l4)
                }
            }
            ;
            n4 = function(a) {
                return {
                    Kv: e4(a, {
                        ed: $3(1, "none", "underline"),
                        direction: $3(2, "ltr", "rtl"),
                        fontFamily: X3(3),
                        fontStyle: $3(4, "normal", "italic"),
                        fontWeight: $3(5, "normal", "thin", "extralight", "light", "medium", "semibold", "bold", "ultrabold", "heavy"),
                        letterSpacing: Y3(6, {
                            min: -200,
                            max: 800
                        }),
                        lineHeight: Y3(7, {
                            min: 500,
                            max: 2500
                        }),
                        dg: $3(8, "none", "bulleted", "numbered", "checked", "unchecked"),
                        size: Y3(9, {
                            min: 0
                        }),
                        Hh: $3(10, "none", "strikethrough"),
                        textAlign: $3(11, "start", "center", "end", "justify"),
                        textTransform: $3(12, "none", "uppercase", "lowercase", "capitalize")
                    })
                }
            }
            ;
            o4 = function(a={}) {
                return {
                    ed: Yh.vc.decoration,
                    direction: Yh.vc.direction,
                    fontFamily: Yh.vc["font-family"],
                    fontStyle: Yh.vc["font-style"],
                    fontWeight: Yh.vc["font-weight"],
                    letterSpacing: Yh.vc.tracking,
                    lineHeight: Yh.vc.leading,
                    dg: "none",
                    size: Yh.vc["font-size"],
                    Hh: Yh.vc.strikethrough,
                    textAlign: Yh.vc["text-align"],
                    textTransform: Yh.vc["text-transform"],
                    ...a
                }
            }
            ;
            p4 = function(a, b) {
                return {
                    ...jD,
                    stream: vj.rb().attrs(b).ib(a).build()
                }
            }
            ;
            $gd = function(a, b) {
                return {
                    ...jD,
                    stream: __c.Ri(vj.rb().attrs(b).ib(a)).build()
                }
            }
            ;
            q4 = __c.q4 = function(a, b) {
                return __c.iv(__c.cv(__c.Xu(a), b))
            }
            ;
            r4 = function(a, b) {
                u(b.length > 0, "zero contrast candidates received");
                const c = new Map;
                return __c.Er(b, d => {
                    const e = c.get(d) ?? __c.AC(d, a);
                    c.set(d, e);
                    return e
                }
                )
            }
            ;
            __c.t4 = function(a, b, c) {
                u(!0);
                u(!0);
                u(!0);
                const {Ja: d, a: e, b: f} = __c.Su(a)
                  , {Ja: g, a: h, b: k} = __c.Su(b)
                  , l = (d + g) / 2;
                var m = (Math.hypot(e, f) + Math.hypot(h, k)) / 2;
                m = .5 * (1 - Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7)));
                var n = e * (1 + m)
                  , p = h * (1 + m)
                  , q = Math.hypot(n, f)
                  , r = Math.hypot(p, k);
                m = (q + r) / 2;
                var t = __c.fv(Math.atan2(f, n) * 180 / Math.PI);
                const w = __c.fv(Math.atan2(k, p) * 180 / Math.PI);
                n = Math.abs(t - w) > 180 ? (t + w + 360) / 2 : (t + w) / 2;
                p = r - q;
                q = 2 * Math.sqrt(q * r) * Math.sin((Math.abs(w - t) <= 180 ? w - t : w <= t ? w - t + 360 : w - t - 360) / 2 * Math.PI / 180);
                r = 1 + .045 * m;
                t = 1 + .015 * m * (1 - .17 * Math.cos((n - 30) * Math.PI / 180) + .24 * Math.cos(2 * n * Math.PI / 180) + .32 * Math.cos((3 * n + 6) * Math.PI / 180) - .2 * Math.cos((4 * n - 63) * Math.PI / 180));
                return Math.sqrt(((g - d) / (1 + .015 * (l - 50) ** 2 / Math.sqrt(20 + (l - 50) ** 2))) ** 2 + (p / (1 * r)) ** 2 + (q / (1 * t)) ** 2 + p / (1 * r) * (q / (1 * t)) * (-(2 * Math.sqrt(m ** 7 / (m ** 7 + 25 ** 7))) * Math.sin(30 * Math.exp(-1 * ((n - 275) / 25) ** 2) * 2 * Math.PI / 180))) >= (c ?? 20) ? a : r4(b, s4)
            }
            ;
            __c.bhd = function(a, b, c, d) {
                const e = a !== b
                  , f = e ? a : r4(a, s4)
                  , {h: g, s: h, Ja: k} = __c.Zu(f);
                var l = new __c.Ru(g,h,k < 10 ? k + 6 : k - 6);
                l = $u(l);
                var m = new __c.Ru(g,h,k < 10 ? k + 10 : k - 10);
                m = $u(m);
                return {
                    backgroundColor: b,
                    accentColor: f,
                    UKb: q4(f, e ? .5 : .12),
                    TKb: l,
                    SKb: m,
                    VKb: q4(f, .4),
                    errorColor: __c.t4("#db142c", b),
                    ...function() {
                        const n = r4(f, s4);
                        return c ? {
                            xjb: c,
                            xda: c === f ? n : c,
                            o7a: c === f ? n : c,
                            PF: c,
                            zra: c,
                            p9a: $u(__c.yC(__c.cv(__c.Xu(c), .8), __c.Xu(b)))
                        } : {
                            xjb: d?.ma === 1 ? r4(b, s4) : r4(a, s4),
                            xda: n,
                            o7a: e ? r4(a, s4) : a,
                            PF: r4(b, s4),
                            zra: r4(b, ahd),
                            p9a: r4(b, s4)
                        }
                    }(),
                    Zsa: f,
                    ...function() {
                        if (c)
                            return {
                                rfa: q4(c, .12),
                                sfa: q4(c, .3),
                                Ysa: q4(c, .5),
                                j6: q4(c, .1)
                            };
                        const n = __c.t4("#000000", b);
                        return {
                            rfa: q4(n, .08),
                            sfa: q4(n, .12),
                            Ysa: q4(n, .5),
                            j6: q4(n, .1)
                        }
                    }(),
                    ...function() {
                        if (c)
                            return {
                                QLa: q4(c, .6),
                                SLa: q4(c, .5),
                                RLa: q4(c, .5)
                            };
                        const n = __c.t4("#000000", b, 50)
                          , {h: p, s: q, Ja: r} = __c.Zu(n);
                        var t = new __c.Ru(p,q,r < 10 ? r + 6 : r - 6);
                        t = $u(t);
                        var w = new __c.Ru(p,q,r < 10 ? r + 10 : r - 10);
                        w = $u(w);
                        return {
                            QLa: q4(n, .6),
                            SLa: q4(t, .5),
                            RLa: q4(w, .5)
                        }
                    }()
                }
            }
            ;
            ihd = function(a) {
                const b = a.title
                  , c = a.fields
                  , d = a.Bl
                  , e = a.Nta
                  , f = a.ima
                  , g = a.cna
                  , h = a.borderColor
                  , k = a.Pd
                  , l = a.X
                  , m = a.sAc
                  , [n,p] = [f, g].map(t => typeof t === "string" ? t : t.Vc[0].color || "#ffffff")
                  , q = c.length === 1 && !b
                  , r = {
                    Ga: __c.bhd(n, p, d, chd),
                    fontFamily: e,
                    ICb: d ? "u" : "c",
                    oB: {
                        base: 18,
                        wjb: 1.953,
                        Ggb: 1,
                        Z9b: 1,
                        ZKb: __c.dhd
                    },
                    Fgb: q
                };
                return {
                    minHeight: 500,
                    minWidth: 368,
                    id: sa(),
                    Gv: sa(),
                    mu: void 0,
                    type: "quiz",
                    Ok: 18,
                    $l: 18,
                    direction: a.direction ?? "l",
                    Nta: e,
                    ima: typeof f === "string" ? {
                        ...QE,
                        color: f
                    } : {
                        ...QE,
                        Ha: f
                    },
                    cna: typeof g === "string" ? {
                        ...QE,
                        color: g
                    } : {
                        ...QE,
                        Ha: g
                    },
                    border: {
                        ...__c.C4b,
                        color: h ?? n,
                        weight: k ?? 8
                    },
                    X: l ?? 8,
                    Sbb: {},
                    dSa: void 0,
                    title: b ? {
                        label: __c.u4(b, ehd(r)),
                        mP: r.ICb
                    } : void 0,
                    header: {
                        Fla: 1.953,
                        eu: 1.953,
                        fu: 1.953,
                        yx: .64,
                        background: chd
                    },
                    z8: !1,
                    ZDa: q,
                    fields: c.map(t => {
                        a: switch (t.type) {
                        case "select":
                            var w = fhd(t, r);
                            break a;
                        case "text":
                            w = {
                                ...ghd(t, r)
                            };
                            var v = t.placeholder;
                            b: {
                                var A = t.variant;
                                switch (A.type) {
                                case 1:
                                    A = {
                                        type: "e"
                                    };
                                    break b;
                                case 2:
                                    A = {
                                        type: "f",
                                        jV: A.fDc ? 1 : 3
                                    };
                                    break b;
                                default:
                                    throw new z(A);
                                }
                            }
                            w = {
                                ...w,
                                type: "text",
                                placeholder: v,
                                variant: A
                            };
                            break a;
                        case "number":
                            w = {
                                ...ghd(t, r)
                            };
                            v = {
                                type: hhd[t.variant.type]
                            };
                            b: {
                                var B = t.min;
                                A = t.max;
                                t = t.variant;
                                switch (t.type) {
                                case 1:
                                    A = A && B && A < B ? {
                                        min: A,
                                        max: B
                                    } : {
                                        min: B,
                                        max: A
                                    };
                                    break b;
                                case 2:
                                    t = Math.max(1, B ?? 1);
                                    A = Math.min(5, A ?? 5);
                                    A = {
                                        min: Math.min(t, A),
                                        max: Math.max(t, A)
                                    };
                                    break b;
                                case 3:
                                    A = {
                                        min: 1,
                                        max: Math.max(1, Math.min(10, A ?? 10))
                                    };
                                    break b;
                                case 4:
                                    t = Math.max(1, B ?? 1);
                                    A = Math.min(10, A ?? 10);
                                    A = {
                                        min: Math.min(t, A),
                                        max: Math.max(t, A)
                                    };
                                    break b;
                                default:
                                    throw new z(t);
                                }
                            }
                            w = {
                                ...w,
                                type: "number",
                                variant: v,
                                ...A
                            };
                            break a;
                        default:
                            throw new z(t);
                        }
                        return w
                    }
                    ).slice(0, 10),
                    XZ: {
                        fu: 1.953,
                        eu: 1.953,
                        yx: .64
                    },
                    footer: {
                        label: {
                            type: "text2",
                            text: __c.u4(m.slice(0, 250), {
                                color: r.Ga.o7a,
                                "font-size": r.oB.base * r.oB.ZKb,
                                "font-family": r.fontFamily,
                                "font-weight": "bold",
                                "text-align": "center",
                                "font-kerning": "normal",
                                "font-feature-liga": "on",
                                "font-feature-clig": "on",
                                "font-feature-calt": "on"
                            })
                        },
                        mP: d ? "u" : void 0,
                        yx: 1.953,
                        eu: 1.953,
                        fu: 1.953,
                        Gla: .512
                    }
                }
            }
            ;
            fhd = function(a, b) {
                const c = []
                  , d = a.options.map( (e, f) => {
                    e = {
                        id: sa(),
                        label: {
                            type: "text2",
                            text: __c.u4(e.slice(0, 250), {
                                color: b.Ga.PF,
                                "font-size": b.oB.base * b.oB.Z9b,
                                "font-family": b.fontFamily,
                                "font-kerning": "normal",
                                "font-feature-liga": "on",
                                "font-feature-clig": "on",
                                "font-feature-calt": "on"
                            })
                        }
                    };
                    a.variant.type === 2 && a.variant.puc.includes(f) && e.id && c.push(e.id);
                    return e
                }
                );
                return {
                    ...ghd(a, b),
                    type: "select",
                    variant: {
                        type: jhd[a.variant.type]
                    },
                    U9: a.NJc ? 0 : 1,
                    WLa: c,
                    options: d.slice(0, 10)
                }
            }
            ;
            ghd = function(a, b) {
                var c = b.oB;
                c = b.Fgb ? c.wjb : c.Ggb;
                return {
                    id: sa(),
                    label: {
                        type: "text2",
                        text: __c.u4(a.label.slice(0, 250), b.Fgb ? ehd(b) : {
                            color: b.Ga.PF,
                            "font-size": b.oB.base * b.oB.Ggb,
                            "font-family": b.fontFamily,
                            "font-weight": "semibold",
                            "font-kerning": "normal",
                            "font-feature-liga": "on",
                            "font-feature-clig": "on",
                            "font-feature-calt": "on"
                        })
                    },
                    YTa: c,
                    mP: b.ICb,
                    X: 8,
                    required: a.required
                }
            }
            ;
            ehd = function(a) {
                return {
                    color: a.Ga.xjb,
                    "font-size": a.oB.base * a.oB.wjb,
                    "font-family": a.fontFamily,
                    "font-weight": "bold",
                    "text-align": "start",
                    leading: 1200,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on"
                }
            }
            ;
            Lhd = function(a) {
                function b(d, e) {
                    e = khd(c, d, e());
                    return {
                        id: d,
                        schema: e
                    }
                }
                const c = a.zX;
                return {
                    Kg: a.Lga ? Promise.all([__d(775964, () => lhd), __d(827837, () => mhd), __d(854886, () => nhd), __d(358463, () => ohd), __d(477168, () => phd), __d(406977, () => qhd), __d(299098, () => rhd), __d(300099, () => shd), __d(915460, () => thd), __d(940438, () => uhd), __d(420077, () => vhd), __d(859148, () => whd), __d(982475, () => xhd), __d(240010, () => yhd), __d(999217, () => zhd), __d(151328, () => Ahd), __d(493231, () => Bhd)]).then(v4.wrap( ([d,e,f,g,h,k,l,m,n,p,q,r,t,w,v,A,B]) => ({
                        D6: b("w:cm9wgGptP", d.Yd),
                        M6: b("w:yLMS4dWnl", e.Yd),
                        N6: b("w:2flp30CGQ", f.Yd),
                        O6: b("w:1Nv6K6Dtv", g.Yd),
                        P6: b("w:5Nv6K6Dtv", h.Yd),
                        Q6: b("w:6Nv6K6Dtv", k.Yd),
                        R6: b("w:7Nv6K6Dtv", l.Yd),
                        S6: b("w:8Nv6K6Dtv", m.Yd),
                        T6: b("w:9Nv6K6Dtv", n.Yd),
                        E6: b("w:sSrc7m4Q3", p.Yd),
                        F6: b("w:ANv6K6Dtv", q.Yd),
                        G6: b("w:7kN2mP9qT", r.Yd),
                        H6: b("w:13v6K6Dtv", t.Yd),
                        I6: b("w:Sm7xP3nKf", w.Yd),
                        J6: b("w:15cpDmWkz", v.Yd),
                        K6: b("w:15v6K6Dtv", A.Yd),
                        L6: b("w:YCsZAR6zB", B.Yd)
                    }))) : void 0,
                    ko: __d(148454, () => Chd).then(v4.wrap(d => b("w:wnJF5T87v", d.Yd))),
                    f7: __d(992198, () => Dhd).then(v4.wrap(d => b("w:xB9fK2LmQ", d.Yd))),
                    button: __d(9659, () => Ehd).then(v4.wrap(d => b("w:PQccHDsCJ", d.Yd))),
                    V5: __d(397039, () => Fhd).then(v4.wrap(d => b("w:KS5H9iEEh", d.Yd))),
                    bV: a.NZ ? __d(56931, () => Ghd).then(v4.wrap(d => b("w:K7mQ9xR3p", d.Yd))) : void 0,
                    f$: __d(857698, () => Hhd).then(v4.wrap(d => b("w:mdzFq18Fm", d.Yd))),
                    scene: __d(576853, () => Ihd).then(v4.wrap(d => b("w:2pbXJMtm1", d.Yd))),
                    form: __d(892350, () => Jhd).then(v4.wrap(d => b("widget:form", d.Yd))),
                    n7: __d(61552, () => Khd).then(v4.wrap(d => b("w:RQddIEfDk", d.Yd)))
                }
            }
            ;
            Shd = function(a) {
                function b({id: g, schema: h}, k, l) {
                    return Mhd(e, g, h, k(l))
                }
                const c = new Nhd
                  , d = a.W3
                  , e = a.yX
                  , f = a.faa;
                return {
                    gTc: c,
                    Kg: d.Kg ? Promise.all([d.Kg, __d(775964, () => lhd), __d(827837, () => mhd), __d(854886, () => nhd), __d(358463, () => ohd), __d(477168, () => phd), __d(406977, () => qhd), __d(299098, () => rhd), __d(300099, () => shd), __d(915460, () => thd), __d(940438, () => uhd), __d(420077, () => vhd), __d(859148, () => whd), __d(982475, () => xhd), __d(240010, () => yhd), __d(999217, () => zhd), __d(151328, () => Ahd), __d(493231, () => Bhd)]).then(v4.wrap( ([g,h,k,l,m,n,p,q,r,t,w,v,A,B,C,E,I,J]) => ({
                        D6: b(g.D6, h.Xd, void 0),
                        M6: b(g.M6, k.Xd, void 0),
                        N6: b(g.N6, l.Xd, void 0),
                        O6: b(g.O6, m.Xd, void 0),
                        P6: b(g.P6, n.Xd, void 0),
                        Q6: b(g.Q6, p.Xd, void 0),
                        R6: b(g.R6, q.Xd, void 0),
                        S6: b(g.S6, r.Xd, void 0),
                        T6: b(g.T6, t.Xd, void 0),
                        E6: b(g.E6, w.Xd, void 0),
                        F6: b(g.F6, v.Xd, void 0),
                        G6: b(g.G6, A.Xd, void 0),
                        H6: b(g.H6, B.Xd, void 0),
                        I6: b(g.I6, C.Xd, void 0),
                        J6: b(g.J6, E.Xd, void 0),
                        K6: b(g.K6, I.Xd, void 0),
                        L6: b(g.L6, J.Xd, void 0)
                    }))) : void 0,
                    ko: Promise.all([d.ko, __d(148454, () => Chd)]).then(v4.wrap( ([g,h]) => b(g, h.Xd, void 0))),
                    f7: Promise.all([d.f7, __d(992198, () => Dhd)]).then(v4.wrap( ([g,h]) => b(g, h.Xd, {
                        xt: a.xt
                    }))),
                    button: Promise.all([d.button, __d(9659, () => Ehd)]).then(v4.wrap( ([g,h]) => b(g, h.Xd, {
                        Qua: c.Qua
                    }))),
                    V5: Promise.all([d.V5, __d(457684, () => Ohd)]).then(v4.wrap( ([g,h]) => b(g, h.Xd, void 0))),
                    bV: d.bV ? Promise.all([d.bV, __d(56931, () => Ghd)]).then(v4.wrap( ([g,h]) => b(g, h.Xd, void 0))) : void 0,
                    f$: Promise.all([d.f$, __d(582897, () => Phd)]).then(v4.wrap( ([g,h]) => b(g, h.Xd, void 0))),
                    scene: Promise.all([d.scene, __d(976176, () => Qhd)]).then(v4.wrap( ([g,h]) => b(g, h.Xd, void 0))),
                    form: Promise.all([d.form, __d(892350, () => Jhd)]).then(v4.wrap( ([g,h]) => b(g, h.Xd, void 0))),
                    n7: Promise.all([d.n7, __d(242691, () => Rhd)]).then(v4.wrap( ([g,h]) => b(g, h.Xd, {
                        faa: f
                    })))
                }
            }
            ;
            Thd = function(a) {
                var b = {
                    document: void 0,
                    C: void 0
                };
                const c = new Map;
                for (const d in b)
                    a[d].TY.forEach( (e, f) => c.set(f, e));
                return {
                    TY: c,
                    Lr: d => {
                        const e = new Map
                          , f = {};
                        for (const g in d) {
                            const h = a[g].Lr(d[g]);
                            h.OZa.forEach( (k, l) => e.set(l, k));
                            f[g] = h.data
                        }
                        return {
                            OZa: e,
                            data: f
                        }
                    }
                }
            }
            ;
            Uhd = function(a) {
                return () => a
            }
            ;
            Vhd = function(a) {
                return a()
            }
            ;
            Whd = function(a, b, c) {
                return new w4([a],b,c)
            }
            ;
            x4 = function(a, b, c, d) {
                return new w4([a, b],c,d)
            }
            ;
            y4 = function(a, b, c, d) {
                return new Xhd(a,b,c,d)
            }
            ;
            Yhd = function(a, b) {
                return b(a)
            }
            ;
            Zhd = function(a) {
                return (b, c) => ({
                    kind: 2,
                    name: a,
                    args: [b, c]
                })
            }
            ;
            $hd = function(a) {
                return b => ({
                    kind: 3,
                    name: a,
                    args: b
                })
            }
            ;
            z4 = function(a, b) {
                return a === b || b.map(c => a.eTa(aid(c)))
            }
            ;
            cid = function(a, b) {
                return a.GVa(b).map(c => new bid(c,d => d.props[b]))
            }
            ;
            aid = function(a) {
                u(a instanceof did);
                return a
            }
            ;
            A4 = function(a) {
                const b = new WeakMap;
                return function(c) {
                    let d = b.get(c);
                    d == null && (d = a.call(this, c),
                    b.set(c, d));
                    return d
                }
            }
            ;
            gid = function(a, b) {
                if (a === b)
                    return !0;
                switch (typeof a) {
                case "string":
                case "number":
                case "boolean":
                case "undefined":
                    return !1;
                case "object":
                    if (typeof b !== "object" || a.kind !== b.kind)
                        return !1;
                    switch (a.kind) {
                    case "array":
                        return b.kind === "array" && eid(a.items, b.items);
                    case "set":
                        var c;
                        if (c = b.kind === "set")
                            a = a.items,
                            b = b.items,
                            c = a === b ? !0 : a.size !== b.size ? !1 : eid([...a], [...b]);
                        return c;
                    case "map":
                        if (c = b.kind === "map")
                            a = a.items,
                            b = b.items,
                            c = a === b ? !0 : a.size !== b.size ? !1 : eid([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                        return c;
                    case "record":
                        return b.kind === "record" && fid(a.fields, b.fields);
                    case "instance":
                        return b.kind === "instance" && a.instance === b.instance;
                    default:
                        throw new z(a);
                    }
                default:
                    throw new z(a);
                }
            }
            ;
            eid = function(a, b) {
                if (a === b)
                    return !0;
                if (a.length !== b.length)
                    return !1;
                for (let c = 0; c < a.length; c++)
                    if (!gid(a[c], b[c]))
                        return !1;
                return !0
            }
            ;
            fid = function(a, b) {
                if (a === b)
                    return !0;
                const c = Object.keys(a)
                  , d = Object.keys(b)
                  , e = new Set([...c, ...d]);
                if (c.length !== e.size || d.length !== e.size)
                    return !1;
                for (const f of e)
                    if (!gid(a[f], b[f]))
                        return !1;
                return !0
            }
            ;
            B4 = function(a) {
                return typeof a === "string" ? JSON.stringify(a) : String(a)
            }
            ;
            iid = function(a, b) {
                return a.map(c => b.map(d => hid[0](c, d)))
            }
            ;
            kid = function(a, b, c) {
                return b.map(d => jid[a](d, c))
            }
            ;
            lid = function(a, b) {
                return new C4(new D4(new Map(b),a.vars),a.Iha)
            }
            ;
            nid = function(a, b, c) {
                for (const [e,f] of c.Iha) {
                    var d = f.params.map( ([g,h]) => [g, a.types.evaluate(h)]);
                    d = mid(b, d, g => E4(a, g, f.body));
                    b = new C4(b.vars,b.Iha.define(e, d))
                }
                return E4(a, b, c.body)
            }
            ;
            E4 = function(a, b, c) {
                switch (c.kind) {
                case 1:
                    return oid(c.value);
                case 2:
                    const f = c.args.map(q => E4(a, b, q));
                    c = c.name;
                    return typeof c === "string" ? b.Iha.resolve(c).map(q => pid(q, f)) : qid[c].map(q => rid(q, f));
                case 3:
                    const g = c.args.map(q => {
                        q.kind !== 13 ? (q = E4(a, b, q),
                        q = new sid(q)) : (q = E4(a, b, q.lDc),
                        q = new tid(q));
                        return q
                    }
                    );
                    c = c.name;
                    switch (c) {
                    case 0:
                    case 1:
                        var d = g.map(q => q.hQa(r => r.type, r => r.type.j0()));
                        return F4.union(...d).map(uid[c]).map(q => vid(q, g));
                    default:
                        return wid[c].map(q => vid(q, g))
                    }
                case 4:
                    d = c.name;
                    var e = c.param;
                    const h = c.body
                      , k = E4(a, b, c.Z5);
                    c = k.type.j0();
                    const l = mid(b, [[e, c]], q => E4(a, q, h));
                    return kid(d, c, l.resultType).map(q => xid(q, k, l));
                case 5:
                    const m = c.entries.map( ([q,r]) => [E4(a, b, q), E4(a, b, r)]);
                    c = F4.union(...m.map( ([q]) => q.type));
                    d = F4.union(...m.map( ([,q]) => q.type));
                    if (!z4(c, F4.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                    return iid(c, d).map(q => yid(q, m));
                case 6:
                    const n = pf(c.fields, q => E4(a, b, q));
                    c = pf(n, q => q.type);
                    return (0,
                    zid[0])(c).map(q => Aid(q, n));
                case 7:
                    d = a.types.resolve(c.name);
                    if (!d)
                        throw Error(`cannot instantiate unknown type: ${c.name}`);
                    const p = E4(a, b, {
                        kind: 6,
                        fields: c.args
                    });
                    return d.m7b.map(q => rid(q, [p], {
                        Do: !0
                    }));
                case 8:
                    return d = E4(a, b, c.base),
                    Bid(d, c.wNc);
                case 9:
                    return Cid(b, c.name);
                case 10:
                    return d = Of(c.defs, q => E4(a, b, q)),
                    Did(a, b, d, c.body);
                case 11:
                    return d = E4(a, b, c.test).as(F4.boolean),
                    e = E4(a, b, c.euc),
                    c = E4(a, b, c.alternate),
                    Eid(d, e, c);
                case 12:
                    return E4(a, b, c.body).computed();
                default:
                    throw new z(c);
                }
            }
            ;
            oid = function(a) {
                switch (typeof a) {
                case "string":
                    return G4(F4.string, a);
                case "number":
                    return G4(F4.number, a);
                case "boolean":
                    return G4(F4.boolean, a);
                case "undefined":
                    return G4(F4.undefined, a);
                default:
                    throw new z(a);
                }
            }
            ;
            Bid = function(a, b) {
                return a.map(c => cid(c, b).map( ({type: d, get: e}) => rid(new w4([c],d,e), [a])))
            }
            ;
            Cid = function(a, b) {
                return a.vars.resolve(b).map(c => H4.of(c, d => d.resolve(b)))
            }
            ;
            Did = function(a, b, c, d) {
                const e = Of(c, g => g.type)
                  , f = Of(c, g => g.evaluate);
                return Fid(E4(a, lid(b, e), d), g => {
                    const h = Of(f, k => k(g));
                    return new D4(new Map(h),g)
                }
                )
            }
            ;
            Eid = function(a, b, c) {
                return b.map( (d, e) => c.map( (f, g) => {
                    f = F4.union(d, f);
                    return H4.of(f, h => {
                        const k = a(h)
                          , l = e(h)
                          , m = g(h);
                        return () => k() ? l() : m()
                    }
                    )
                }
                ))
            }
            ;
            I4 = function(a) {
                return b => b(a)
            }
            ;
            pid = function({nBa: a, resultType: b, evaluate: c}, d) {
                if (d.length !== a.length)
                    throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                const e = Gid(a, (f, g) => d[g].as(f));
                return H4.of(b, f => {
                    const g = e.map(I4(f));
                    return c(f)(...g)
                }
                )
            }
            ;
            rid = function({nBa: a, resultType: b, apply: c}, d, e) {
                if (d.length !== a.length)
                    throw Error(`expected ${a.length} arguments, but got ${d.length}`);
                const f = Gid(a, (g, h) => d[h].as(g));
                return H4.of(b, g => {
                    g = f.map(I4(g));
                    return Hid(e?.Do ? Iid(c) : c, g)
                }
                )
            }
            ;
            vid = function({$$b: a, resultType: b, apply: c}, d) {
                let e;
                const f = d.map(g => g.OJa(h => h.as(a), h => h.as(e ??= F4.Z5(a))));
                return new H4(b,g => {
                    const h = I4(g)
                      , k = f.map(l => l.OJa(h, h));
                    return () => {
                        const l = [];
                        k.forEach(m => {
                            m.hQa(n => l.push(n()), n => l.push(...n()))
                        }
                        );
                        return c(l)
                    }
                }
                )
            }
            ;
            yid = function({keyType: a, valueType: b, resultType: c, apply: d}, e) {
                const f = e.map( ([g,h]) => [g.as(a), h.as(b)]);
                return new H4(c,g => {
                    const h = f.map( ([k,l]) => [k(g), l(g)]);
                    return () => d(h.map( ([k,l]) => [k(), l()]))
                }
                )
            }
            ;
            Aid = function({PLb: a, resultType: b, apply: c}, d) {
                const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                if (e.length)
                    throw Error(`too few arguments (missing ${e})`);
                const f = Jid(a, (g, h) => d[h].as(g));
                return new H4(b,g => {
                    const h = pf(f, I4(g));
                    return () => {
                        var k = pf(h, Vhd);
                        return c(k)
                    }
                }
                )
            }
            ;
            G4 = function(a, b) {
                const c = Uhd(b);
                return new H4(a, () => c)
            }
            ;
            xid = function({itemType: a, pMb: b, resultType: c, reduce: d}, e, f) {
                const g = f.as([a], b)
                  , h = e.as(F4.Z5(a));
                return new H4(c,k => {
                    const l = h(k)
                      , m = g(k)
                      , n = Iid(p => {
                        p = p.map(Uhd);
                        return [p, p.map(m)]
                    }
                    );
                    return () => {
                        const [p,q] = n(l());
                        return d(p, q)
                    }
                }
                )
            }
            ;
            Fid = function(a, b) {
                const c = a.evaluate;
                return new H4(a.type,d => c(b(d)))
            }
            ;
            mid = function(a, b, c) {
                const d = b.map(f => f[0])
                  , e = b.map(f => f[1]);
                return Yhd(e, f => c(lid(a, new Map(b))).map( (g, h) => new Kid(f,g,k => (...l) => {
                    const m = new Map(d.map( (n, p) => [n, l[p]]));
                    return h(new D4(new Map(m),k))
                }
                )))
            }
            ;
            Hid = function(a, b) {
                switch (b.length) {
                case 0:
                    return a;
                case 1:
                    const [c] = b;
                    return () => a(c());
                case 2:
                    const [d,e] = b;
                    return () => a(d(), e());
                default:
                    return () => {
                        var f = b.map(Vhd);
                        return a(...f)
                    }
                }
            }
            ;
            Iid = function(a) {
                let b;
                return (...c) => {
                    if (b && b.qM.length === c.length && b.qM.every( (e, f) => J4.ci(e, c[f])))
                        return b.v;
                    const d = a(...c);
                    b = {
                        qM: c,
                        v: d
                    };
                    return d
                }
            }
            ;
            Jid = function(a, b) {
                return pf(a, b)
            }
            ;
            Gid = function(a, b) {
                return a.map(b)
            }
            ;
            Mid = function(a, b, c) {
                return new Lid(a,b,c)
            }
            ;
            Nid = function(a, b) {
                return [...a].map(b)[Symbol.iterator]()
            }
            ;
            Oid = function(a) {
                const b = new WeakMap;
                return c => {
                    let d = b.get(c);
                    d || (d = a(c),
                    b.set(c, d));
                    return d
                }
            }
            ;
            K4 = function(a, b, c, d) {
                if (d == null)
                    throw a.error(b.dK(c), "not found");
                return d
            }
            ;
            ejd = function(a) {
                function b(v) {
                    return q[v.kind](v)
                }
                const c = a.hk
                  , d = a.Jpa
                  , e = a.J
                  , f = c.types
                  , g = c.values;
                class h {
                    static of(v, A, B, C, E, I, J) {
                        const M = Pid(A);
                        return new h(v,B,C,Qid(E, Pid(A)),Rid(I, M),Qid(J, M))
                    }
                    map(v) {
                        return v(this)
                    }
                    validate(v) {
                        return v ? new h(this.dataType,this.lpa,this.Hoa,Sid(this.Lr, v),Qid(this.encode, v),Sid(this.decode, v)) : this
                    }
                    constructor(v, A, B, C, E, I) {
                        this.dataType = v;
                        this.lpa = A;
                        this.Hoa = B;
                        this.Lr = C;
                        this.encode = E;
                        this.decode = I
                    }
                }
                const k = h.of({
                    kind: 0
                }, "string", f.string, v => v, (v, A, B) => B.value, (v, A, B) => ({
                    type: "string",
                    value: B
                }), (v, A, B) => B.value)
                  , l = h.of({
                    kind: 1
                }, "boolean", f.boolean, v => v, (v, A, B) => B.value, (v, A, B) => ({
                    type: "boolean",
                    value: B
                }), (v, A, B) => B.value)
                  , m = h.of({
                    kind: 2
                }, "double", f.number, v => v, (v, A, B) => B.value, (v, A, B) => ({
                    type: "double",
                    value: B
                }), (v, A, B) => B.value).validate( (v, A, B) => {
                    if (!Number.isFinite(B))
                        throw v.error(A, `number is not finite: ${B}`);
                }
                )
                  , n = h.of({
                    kind: 3
                }, "int32", f.number, v => v, (v, A, B) => B.value, (v, A, B) => ({
                    type: "int32",
                    value: B
                }), (v, A, B) => B.value).validate( (v, A, B) => {
                    if (!Number.isInteger(B) || B < -2147483648 || B > 2147483647)
                        throw v.error(A, `number is not an int32: ${B}`);
                }
                )
                  , p = {
                    FontRef: h.of({
                        kind: 7,
                        name: "FontRef"
                    }, "ref", f.instance("FontRef"), v => g.instance("FontRef", v), L4("font"), (v, A, B) => ({
                        type: "ref",
                        value: B
                    }), L4("font")),
                    MediaRef: h.of({
                        kind: 7,
                        name: "MediaRef"
                    }, "ref", f.instance("MediaRef"), v => g.instance("MediaRef", v), L4("media"), (v, A, B) => ({
                        type: "ref",
                        value: B
                    }), L4("media")),
                    VideoRef: h.of({
                        kind: 7,
                        name: "VideoRef"
                    }, "ref", f.instance("VideoRef"), v => g.instance("VideoRef", v), L4("video"), (v, A, B) => ({
                        type: "ref",
                        value: B
                    }), L4("video")),
                    AudioRef: h.of({
                        kind: 7,
                        name: "AudioRef"
                    }, "ref", f.instance("AudioRef"), v => g.instance("AudioRef", v), L4("audio"), (v, A, B) => ({
                        type: "ref",
                        value: B
                    }), L4("audio")),
                    EmbedRef: h.of({
                        kind: 7,
                        name: "EmbedRef"
                    }, "ref", f.instance("EmbedRef"), v => g.instance("EmbedRef", v), L4("embed"), (v, A, B) => ({
                        type: "ref",
                        value: B
                    }), L4("embed")),
                    SceneRef: h.of({
                        kind: 7,
                        name: "SceneRef"
                    }, "ref", f.instance("SceneRef"), v => g.instance("SceneRef", v), L4("scene"), (v, A, B) => ({
                        type: "ref",
                        value: B
                    }), L4("scene")),
                    MotionGraphicRef: h.of({
                        kind: 7,
                        name: "MotionGraphicRef"
                    }, "ref", f.instance("MotionGraphicRef"), v => g.instance("MotionGraphicRef", v), L4("motion-graphic"), (v, A, B) => ({
                        type: "ref",
                        value: B
                    }), L4("motion-graphic")),
                    BlueprintRef: h.of({
                        kind: 7,
                        name: "BlueprintRef"
                    }, "ref", f.instance("BlueprintRef"), v => g.instance("BlueprintRef", v), L4("blueprint"), (v, A, B) => ({
                        type: "ref",
                        value: B
                    }), L4("blueprint")),
                    BlueprintEntityRef: h.of({
                        kind: 7,
                        name: "BlueprintEntityRef"
                    }, "entity-ref", f.instance("BlueprintEntityRef"), v => g.instance("BlueprintEntityRef", v), M4("document-blueprint"), (v, A, B) => ({
                        type: "entity-ref",
                        value: B
                    }), M4("document-blueprint")),
                    PageEntityRef: h.of({
                        kind: 7,
                        name: "PageEntityRef"
                    }, "entity-ref", f.instance("PageEntityRef"), v => g.instance("PageEntityRef", v), M4("page"), (v, A, B) => ({
                        type: "entity-ref",
                        value: B
                    }), M4("page")),
                    Fill: h.of({
                        kind: 7,
                        name: "Fill"
                    }, "fill", f.instance("Fill"), v => g.instance("Fill", v), (v, A, B) => B.value, (v, A, B) => ({
                        type: "fill",
                        value: B
                    }), (v, A, B) => B.value),
                    Stroke: h.of({
                        kind: 7,
                        name: "Stroke"
                    }, "stroke", f.instance("Stroke"), v => g.instance("Stroke", v), (v, A, B) => B.value, (v, A, B) => ({
                        type: "stroke",
                        value: B
                    }), (v, A, B) => B.value),
                    Richtext2: h.of({
                        kind: 7,
                        name: "Richtext2"
                    }, "text2", f.instance("Richtext2"), v => g.instance("Richtext2", v), (v, A, B) => B.value, (v, A, B) => ({
                        type: "text2",
                        value: B
                    }), (v, A, B) => B.value),
                    TextAttributes: h.of({
                        kind: 7,
                        name: "TextAttributes"
                    }, "text-attributes", f.instance("TextAttributes"), v => g.instance("TextAttributes", v), (v, A, B) => B.value, (v, A, B) => ({
                        type: "text-attributes",
                        value: B
                    }), (v, A, B) => B.value),
                    TextElement: h.of({
                        kind: 7,
                        name: "TextElement"
                    }, "element", f.instance("TextElement"), v => g.instance("TextElement", v), Tid("text"), (v, A, B) => ({
                        type: "element",
                        value: B
                    }), Uid("text")),
                    RectElement: h.of({
                        kind: 7,
                        name: "RectElement"
                    }, "element", f.instance("RectElement"), v => g.instance("RectElement", v), Tid("rect"), (v, A, B) => ({
                        type: "element",
                        value: B
                    }), Uid("rect")),
                    ShapeElement: h.of({
                        kind: 7,
                        name: "ShapeElement"
                    }, "element", f.instance("ShapeElement"), v => g.instance("ShapeElement", v), Tid("shape"), (v, A, B) => ({
                        type: "element",
                        value: B
                    }), Uid("shape"))
                }
                  , q = {
                    [0]: v => k.validate(Vid(v.If)),
                    [1]: () => l,
                    [2]: v => m.validate(Wid(v.range)),
                    [3]: v => n.validate(Wid(v.range)),
                    [4]: v => h.of({
                        kind: 4,
                        values: v.values
                    }, Xid, f.primitive, A => A, (A, B, C) => C.value, (A, B, C) => {
                        a: switch (typeof C) {
                        case "string":
                            A = {
                                type: "string",
                                value: C
                            };
                            break a;
                        case "boolean":
                            A = {
                                type: "boolean",
                                value: C
                            };
                            break a;
                        case "number":
                            A = {
                                type: "int32",
                                value: C
                            };
                            break a;
                        default:
                            throw new z(C);
                        }
                        return A
                    }
                    , (A, B, C) => C.value).validate(Yid(v.values)),
                    [5]: v => {
                        const {dataType: A, lpa: B, Hoa: C, Lr: E, encode: I, decode: J} = b(v.itemType);
                        return h.of({
                            kind: 5,
                            itemType: A
                        }, "list", f.array(B), M => g.array(M.map(C)), (M, O, R) => R.value.toArray().map( (S, Q) => E(M, O.wO(Q), S)), (M, O, R) => ({
                            type: "list",
                            value: R.map( (S, Q) => I(M, O.wO(Q), S))
                        }), (M, O, R) => __c.gh(R.value).map( (S, Q) => J(M, O.wO(Q), S)))
                    }
                    ,
                    [6]: v => {
                        const {dataType: A, lpa: B, Hoa: C, Lr: E, encode: I, decode: J} = b(v.itemType);
                        return h.of({
                            kind: 6,
                            itemType: A
                        }, "dict", f.map(f.string, B), M => g.map(Of(M, C)), (M, O, R) => Of(R.value.pj(), (S, Q) => E(M, O.d_(Q), S)), (M, O, R) => ({
                            type: "dict",
                            value: Of(R, (S, Q) => I(M, O.d_(Q), S))
                        }), (M, O, R) => Of(R.value, (S, Q) => J(M, O.d_(Q), S)))
                    }
                    ,
                    [7]: v => p[v.name],
                    [8]: v => {
                        const {dataType: A, Lr: B, encode: C, decode: E} = b(v.itemType);
                        return h.of({
                            kind: 8,
                            itemType: A
                        }, "list", f.undefined, () => {}
                        , (I, J, M) => M.value.transform(O => C(I, J.wO("*"), O), Zid(B, I, J.wO("*"))), (I, J, M) => ({
                            type: "list",
                            value: M.map( (O, R) => C(I, J.wO(R), O))
                        }), (I, J, M) => M.value.map( (O, R) => E(I, J.wO(R), O)))
                    }
                    ,
                    [9]: v => {
                        const {dataType: A, Lr: B, encode: C, decode: E} = b(v.itemType);
                        return h.of({
                            kind: 9,
                            itemType: A
                        }, "dict", f.undefined, () => {}
                        , (I, J, M) => Mid(M.value, O => C(I, J.d_("*"), O), Zid(B, I, J.wO("*"))), (I, J, M) => ({
                            type: "dict",
                            value: Of(M, (O, R) => C(I, J.d_(R), O))
                        }), (I, J, M) => Of(M.value, (O, R) => E(I, J.d_(R), O)))
                    }
                    ,
                    [10]: v => {
                        const {Lr: A, encode: B, decode: C} = t.vnb(v.fields);
                        return h.of({
                            kind: 10,
                            fields: v.fields
                        }, "dict", f.undefined, () => {}
                        , A, B, C)
                    }
                    ,
                    [11]: v => {
                        function A(Q, U, X, aa) {
                            X = X.get(aa);
                            if (X == null)
                                throw Q.error(U, `unknown case for discriminator value: ${aa}`);
                            return X
                        }
                        const B = v.iga;
                        v = v.di;
                        var C = Object.keys(B);
                        u(C.length >= 1, "missing discriminator props");
                        u(C.length <= 1, "too many discriminator props: {}", C);
                        const E = C[0];
                        u(v.length >= 1, "discriminated union has no cases");
                        C = new Map;
                        for (const Q of v) {
                            const U = Q.fields[E].type.values
                              , X = b(Q);
                            for (const aa of U)
                                u(!C.has(aa), "discriminator values are not unique across cases: {}", aa),
                                C.set(aa, X)
                        }
                        const {Lr: I, encode: J, decode: M} = b({
                            kind: 4,
                            values: new Set(C.keys())
                        })
                          , O = Of(C, Q => Q.Lr)
                          , R = Of(C, Q => Q.encode)
                          , S = Of(C, Q => Q.decode);
                        return h.of({
                            kind: 11,
                            iga: B,
                            di: v
                        }, "dict", f.undefined, () => {}
                        , (Q, U, X) => {
                            var aa = K4(Q, U, "k", X.value.get("k"));
                            X = K4(Q, U, "v", X.value.get("v"));
                            $id(Q, U, "dict", X);
                            aa = I(Q, U, aa);
                            return A(Q, U, O, aa)(Q, U, X)
                        }
                        , (Q, U, X) => {
                            const aa = X[E]
                              , ha = A(Q, U, R, aa);
                            return {
                                type: "dict",
                                value: new Map([["k", J(Q, U, aa)], ["v", ha(Q, U, X)]])
                            }
                        }
                        , (Q, U, X) => {
                            var aa = K4(Q, U, "k", X.value.get("k"));
                            X = K4(Q, U, "v", X.value.get("v"));
                            $id(Q, U, "dict", X);
                            aa = M(Q, U, aa);
                            return A(Q, U, S, aa)(Q, U, X)
                        }
                        )
                    }
                }
                  , r = Symbol("$impl");
                class t {
                    static vnb(v) {
                        const A = pf(v, E => w.of(E))
                          , B = pf(A, E => E.Fic())
                          , C = Object.entries(A);
                        return {
                            TY: new Map(C.map( ([,E]) => E.Aic())),
                            Gic: E => {
                                const I = E[r];
                                return new Map(C.map( ([,J]) => J.Hic(I)))
                            }
                            ,
                            Lr: (E, I, J) => {
                                const M = Object.create(null, B);
                                Object.defineProperty(M, r, {
                                    enumerable: !1,
                                    writable: !1,
                                    value: new t(E,I,J.value)
                                });
                                return M
                            }
                            ,
                            encode: (E, I, J) => {
                                const M = C.map( ([O,R]) => R.encode(E, I, J[O]));
                                return {
                                    type: "dict",
                                    value: new Map(M.filter(__c.qa))
                                }
                            }
                            ,
                            decode: (E, I, J) => {
                                const M = J.value;
                                return pf(A, O => O.decode(E, I, M.get(O.key)))
                            }
                        }
                    }
                    kRa(v, A) {
                        const B = K4(this.e, this.p, A, this.data.get(A));
                        return ajd(this.Egb, v.Lr, this.e, this.p.dK(A), B)
                    }
                    hRa(v, A) {
                        const B = this.data.get(A);
                        if (B != null)
                            return ajd(this.Egb, v.Lr, this.e, this.p.dK(A), B)
                    }
                    iAb(v, A, B) {
                        const C = this.p.dK(A);
                        this.eHb(C) && this.data.set(A, v.encode(this.e, C, B))
                    }
                    dAb(v, A, B) {
                        const C = this.p.dK(A);
                        this.eHb(C) && (B != null ? this.data.set(A, v.encode(this.e, C, B)) : this.data.delete(A))
                    }
                    eHb(v) {
                        return d() ? !0 : (e.error(this.e.error(v, "Attempt to write when writes are disabled.")),
                        !1)
                    }
                    constructor(v, A, B) {
                        this.e = v;
                        this.p = A;
                        this.data = B;
                        this.Egb = new WeakMap;
                        this.v9a = new Map;
                        this.RYb = bjd(this.v9a, (C, E) => {
                            const I = this;
                            return {
                                get ref() {
                                    return I.kRa(E, C)
                                },
                                set(J) {
                                    I.iAb(E, C, J)
                                }
                            }
                        }
                        );
                        this.CYb = bjd(this.v9a, (C, E) => {
                            const I = this;
                            return {
                                get ref() {
                                    return I.hRa(E, C)
                                },
                                set(J) {
                                    I.dAb(E, C, J)
                                }
                            }
                        }
                        )
                    }
                }
                class w {
                    static of(v) {
                        return new w(v,b(v.type))
                    }
                    Aic() {
                        const v = this.key
                          , A = this.Yb
                          , B = this.type;
                        switch (A.Ks) {
                        case 0:
                            return [v, B.lpa];
                        case 1:
                            return [v, f.optional(B.lpa)];
                        default:
                            throw new z(A.Ks);
                        }
                    }
                    Hic(v) {
                        const A = this.key
                          , B = this.Yb
                          , C = this.type;
                        switch (B.Ks) {
                        case 0:
                            return [A, () => C.Hoa(v.kRa(C, A))];
                        case 1:
                            return [A, () => {
                                const E = v.hRa(C, A);
                                return E != null ? C.Hoa(E) : void 0
                            }
                            ];
                        default:
                            throw new z(B.Ks);
                        }
                    }
                    Fic() {
                        const v = this.key;
                        var A = this.Yb;
                        const B = this.type;
                        if (Ngd(B.dataType) && A.EQ === 1) {
                            switch (A.Ks) {
                            case 0:
                                A = function() {
                                    return this[r].RYb(v, B)
                                }
                                ;
                                break;
                            case 1:
                                A = function() {
                                    return this[r].CYb(v, B)
                                }
                                ;
                                break;
                            default:
                                throw new z(A.Ks);
                            }
                            return {
                                enumerable: !0,
                                get: A
                            }
                        }
                        let C;
                        switch (A.Ks) {
                        case 0:
                            C = {
                                enumerable: !0,
                                get() {
                                    return this[r].kRa(B, v)
                                },
                                set(E) {
                                    this[r].iAb(B, v, E)
                                }
                            };
                            break;
                        case 1:
                            C = {
                                enumerable: !0,
                                get() {
                                    return this[r].hRa(B, v)
                                },
                                set(E) {
                                    this[r].dAb(B, v, E)
                                }
                            };
                            break;
                        default:
                            throw new z(A.Ks);
                        }
                        switch (A.EQ) {
                        case 0:
                            C.set = void 0;
                            break;
                        case 1:
                            break;
                        default:
                            throw new z(A.EQ);
                        }
                        return C
                    }
                    encode(v, A, B) {
                        const C = this.key
                          , E = this.Yb
                          , I = this.type;
                        switch (E.Ks) {
                        case 0:
                            return [C, I.encode(v, A.dK(C), K4(v, A, C, B))];
                        case 1:
                            return B != null ? [C, I.encode(v, A.dK(C), B)] : void 0;
                        default:
                            throw new z(E.Ks);
                        }
                    }
                    decode(v, A, B) {
                        const C = this.key
                          , E = this.Yb
                          , I = this.type;
                        switch (E.Ks) {
                        case 0:
                            return I.decode(v, A.dK(C), K4(v, A, C, B));
                        case 1:
                            return B != null ? I.decode(v, A.dK(C), B) : void 0;
                        default:
                            throw new z(E.Ks);
                        }
                    }
                    constructor(v, A) {
                        this.Yb = v;
                        this.type = A;
                        v = v.key;
                        u(v > 0 && Number.isInteger(v));
                        if (v <= 52)
                            v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[v - 1];
                        else {
                            for (A = ""; v > 0; )
                                v--,
                                A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[v % 52] + A,
                                v = Math.floor(v / 52);
                            v = A
                        }
                        this.key = v
                    }
                }
                return (v, A) => {
                    const B = new cjd(v)
                      , C = new djd
                      , {TY: E, Gic: I, Lr: J, encode: M, decode: O} = t.vnb(A);
                    return {
                        TY: E,
                        Lr: Oid(R => {
                            R = J(B, C, {
                                type: "dict",
                                value: R
                            });
                            return {
                                OZa: I(R),
                                data: R
                            }
                        }
                        ),
                        encode: R => M(B, C, R).value,
                        decode: R => O(B, C, {
                            type: "dict",
                            value: R
                        })
                    }
                }
            }
            ;
            bjd = function(a, b) {
                return (c, ...d) => {
                    a.has(c) || a.set(c, b(c, ...d));
                    return a.get(c)
                }
            }
            ;
            Zid = function(a, b, c) {
                const d = new WeakMap;
                return e => ajd(d, a, b, c, e)
            }
            ;
            ajd = function(a, b, c, d, e) {
                let f = a.get(e);
                f == null && (f = b(c, d, e),
                a.set(e, f));
                return f
            }
            ;
            Qid = function(a, b) {
                return (c, d, e) => {
                    b(c, d, e);
                    return a(c, d, e)
                }
            }
            ;
            Sid = function(a, b) {
                return (c, d, e) => {
                    e = a(c, d, e);
                    b(c, d, e);
                    return e
                }
            }
            ;
            Rid = function(a, b) {
                var c = fjd();
                return (d, e, f) => {
                    f = a(d, e, f);
                    b(d, e, f);
                    c(d, e, f);
                    return f
                }
            }
            ;
            $id = function(a, b, c, d) {
                if (d.type !== c)
                    throw a.error(b, `type error: expected ${c}, was ${d.type}`);
            }
            ;
            Pid = function(a) {
                return typeof a === "string" ? (b, c, d) => $id(b, c, a, d) : (b, c, d) => {
                    if (!a.has(d.type))
                        throw b.error(c, `type error: expected one of ${[...a].join(" or ")}, was ${d.type}`);
                }
            }
            ;
            fjd = function() {
                return (a, b, c) => {
                    if (typeof c.value !== gjd[c.type])
                        throw a.error(b, `type error: expected ${c.type}, was ${typeof c.value}`);
                }
            }
            ;
            Yid = function(a) {
                return (b, c, d) => {
                    if (!a.has(d))
                        throw b.error(c, `expected one of ${[...a].join(" or ")}, was ${d}`);
                }
            }
            ;
            Wid = function(a) {
                if (a) {
                    var b = a.min
                      , c = a.max;
                    u(b == null || c == null || b <= c);
                    return (d, e, f) => {
                        if (b != null && f < b)
                            throw d.error(e, `value below min ${b}: ${f}`);
                        if (c != null && f > c)
                            throw d.error(e, `value above max ${b}: ${f}`);
                    }
                }
            }
            ;
            Vid = function(a) {
                if (a)
                    return (b, c, d) => {
                        if (!a.test(d))
                            throw b.error(c, `value does not match regex ${a}: '${d}'`);
                    }
            }
            ;
            L4 = function(a) {
                return (b, c, d) => {
                    if (d.value.type !== a)
                        throw b.error(c, `expected ${hjd[a]} resource type, got ${hjd[d.value.type]}`);
                    return {
                        ...d.value,
                        type: a
                    }
                }
            }
            ;
            Tid = function(a) {
                return (b, c, d) => {
                    d = d.value;
                    if (d.type !== a)
                        throw b.error(c, `expected ${a} element type, got ${d.type}`);
                    return d
                }
            }
            ;
            Uid = function(a) {
                return (b, c, d) => {
                    const e = d.value;
                    if (e.type !== a)
                        throw b.error(c, `expected ${a} element type, got ${e.type}`);
                    return {
                        ...d.value,
                        type: a
                    }
                }
            }
            ;
            M4 = function(a) {
                return (b, c, d) => {
                    if (d.value.type !== a)
                        throw b.error(c, `expected ${a} entity ref type, got ${d.value.type}`);
                    return {
                        ...d.value,
                        type: a
                    }
                }
            }
            ;
            ljd = function() {
                return (new ijd({})).add( (a, b) => ({
                    FontRef: new a("FontRef",{
                        id: b.string,
                        version: b.number
                    },c => ({
                        type: "font",
                        id: c.id,
                        version: c.version
                    }))
                })).add( (a, b) => ({
                    MediaRef: new a("MediaRef",{
                        id: b.string,
                        version: b.number
                    },c => ({
                        type: "media",
                        id: c.id,
                        version: c.version
                    }))
                })).add( (a, b) => ({
                    VideoRef: new a("VideoRef",{
                        id: b.string
                    },c => ({
                        type: "video",
                        id: c.id,
                        version: 0
                    }))
                })).add( (a, b) => ({
                    AudioRef: new a("AudioRef",{
                        id: b.string
                    },c => ({
                        type: "audio",
                        id: c.id,
                        version: 0
                    }))
                })).add( (a, b) => ({
                    EmbedRef: new a("EmbedRef",{
                        id: b.string
                    },c => ({
                        type: "embed",
                        id: c.id,
                        version: 0
                    }))
                })).add( (a, b) => ({
                    SceneRef: new a("SceneRef",{
                        id: b.string
                    },c => ({
                        type: "scene",
                        id: c.id,
                        version: 0
                    }))
                })).add( (a, b) => ({
                    MotionGraphicRef: new a("MotionGraphicRef",{
                        id: b.string
                    },c => ({
                        type: "motion-graphic",
                        id: c.id,
                        version: 0
                    }))
                })).add( (a, b) => ({
                    BlueprintRef: new a("BlueprintRef",{
                        id: b.string,
                        version: b.number
                    },c => ({
                        type: "blueprint",
                        id: c.id,
                        version: c.version
                    }))
                })).add( (a, b) => ({
                    BlueprintEntityRef: new a("BlueprintEntityRef",{
                        id: b.string
                    },c => ({
                        type: "document-blueprint",
                        id: c.id
                    }))
                })).add( (a, b) => ({
                    PageEntityRef: new a("PageEntityRef",{
                        id: b.string
                    },c => ({
                        type: "page",
                        id: c.id
                    }))
                })).add( (a, b) => ({
                    Fill: new a("Fill",{
                        color: b.string
                    },c => __c.pO.create({
                        ...E3,
                        color: c.color
                    }))
                })).add( (a, b) => ({
                    Stroke: new a("Stroke",{
                        color: b.string,
                        weight: b.number,
                        Wc: b.array(b.number),
                        df: b.boolean
                    },c => __c.qO.create({
                        ...ugd,
                        color: c.color,
                        weight: c.weight,
                        Wc: c.Wc.items,
                        df: c.df
                    }))
                })).add( (a, b) => ({
                    Richtext2: new a("Richtext2",{
                        AXb: b.array(b.N({
                            ib: b.string,
                            attrs: b.map(b.string, b.string)
                        }))
                    },c => {
                        c = c.AXb;
                        const d = vj.rb();
                        c.items.forEach(e => {
                            const f = e.fields.ib;
                            d.attrs(__c.dia(e.fields.attrs.items));
                            d.ib(f)
                        }
                        );
                        return __c.km.create({
                            ...jD,
                            stream: d.build()
                        })
                    }
                    )
                })).add( (a, b) => ({
                    Path: new a("Path",{
                        d: b.string,
                        fill: b.instance("Fill"),
                        stroke: b.union(b.instance("Stroke"), b.undefined)
                    },c => {
                        const d = c.stroke
                          , e = c.fill;
                        c = __c.aS.create({
                            ...vgd,
                            d: c.d,
                            fill: E3
                        });
                        Object.defineProperties(c, {
                            fill: {
                                value: e.instance
                            },
                            stroke: {
                                value: jjd(d)
                            }
                        });
                        return c
                    }
                    )
                })).add( (a, b) => ({
                    TextElement: new a("TextElement",{
                        top: b.number,
                        left: b.number,
                        width: b.number,
                        height: b.number,
                        text: b.instance("Richtext2")
                    },c => {
                        const d = c.text;
                        c = __c.sS.create({
                            ...__c.Ldb,
                            id: OE.generate(),
                            top: c.top,
                            left: c.left,
                            width: c.width,
                            height: c.height,
                            text: __c.km.snapshot(d.instance),
                            Ff: 1
                        });
                        Object.defineProperties(c, {
                            text: {
                                value: d.instance
                            }
                        });
                        return c
                    }
                    )
                })).add( (a, b) => ({
                    RectElement: new a("RectElement",{
                        top: b.number,
                        left: b.number,
                        width: b.number,
                        height: b.number,
                        rotation: b.union(b.number, b.undefined),
                        fill: b.instance("Fill"),
                        X: b.union(b.array(b.number), b.undefined),
                        stroke: b.union(b.instance("Stroke"), b.undefined)
                    },c => {
                        const d = c.stroke
                          , e = __c.NE.create({
                            ...F3,
                            id: OE.generate(),
                            top: c.top,
                            left: c.left,
                            width: c.width,
                            height: c.height,
                            rotation: c.rotation ?? F3.rotation,
                            fill: E3,
                            X: c.X?.items ?? F3.X
                        });
                        Object.defineProperties(e, {
                            fill: {
                                value: c.fill.instance
                            },
                            stroke: {
                                value: jjd(d)
                            }
                        });
                        return e
                    }
                    )
                })).add( (a, b) => ({
                    ShapeElement: new a("ShapeElement",{
                        top: b.number,
                        left: b.number,
                        width: b.number,
                        height: b.number,
                        rotation: b.union(b.number, b.undefined),
                        ma: b.union(b.number, b.undefined),
                        viewBox: b.N({
                            top: b.number,
                            left: b.number,
                            width: b.number,
                            height: b.number
                        }),
                        Ra: b.array(b.instance("Path"))
                    },c => {
                        const d = __c.fJ.create({
                            ...G3,
                            id: OE.generate(),
                            top: c.top,
                            left: c.left,
                            width: c.width,
                            height: c.height,
                            rotation: c.rotation ?? G3.rotation,
                            ma: c.ma ?? G3.ma,
                            Ra: [],
                            viewBox: c.viewBox.fields
                        });
                        Object.defineProperties(d, {
                            Ra: {
                                value: __c.rD(c.Ra.items.map(e => z3( () => e.instance)))
                            }
                        });
                        return d
                    }
                    )
                })).add( (a, b) => ({
                    TextAttributes: new a("TextAttributes",{
                        fontFamily: b.optional(b.string),
                        fontWeight: b.optional(b.string),
                        fontStyle: b.optional(b.string),
                        fontSize: b.optional(b.number)
                    },c => __c.uO.create({
                        ...kjd,
                        "font-weight": __c.Qh(__c.tO["font-weight"], c.fontWeight),
                        "font-style": __c.Qh(__c.tO["font-style"], c.fontStyle),
                        "font-family": __c.Qh(__c.tO["font-family"], c.fontFamily),
                        "font-size": c.fontSize
                    }))
                }))
            }
            ;
            jjd = function(a) {
                return a && {
                    ref: a.instance,
                    set() {
                        throw Error("Replacing of stroke on a model unit is not yet supported");
                    }
                }
            }
            ;
            Mhd = function(a, b, c, d) {
                mjd(a.KCa, b, c);
                u(!a.abb.has(b));
                c = njd(b, d, c);
                a.abb.set(b, c);
                return c
            }
            ;
            njd = function(a, b, c) {
                return pf(b, d => (...e) => {
                    const {data: f, M: {width: g, height: h}} = d(...e);
                    e = c.C.encode(f.C);
                    const k = c.document.TY.size > 0 ? c.document.encode(f.document) : void 0;
                    return {
                        Nc: {
                            ...__c.U4b,
                            app: {
                                id: a,
                                version: 1
                            }
                        },
                        AZ: k,
                        pd: e,
                        Ze: {
                            width: g,
                            height: h
                        }
                    }
                }
                )
            }
            ;
            khd = function(a, b, c) {
                u(!a.LCa.has(b));
                c = {
                    document: a.Xab(b, c.document),
                    C: a.Xab(b, c.C)
                };
                a.LCa.set(b, c);
                return c
            }
            ;
            mjd = function(a, b, c) {
                a = y(a.LCa.get(b));
                u(a.C === c.C)
            }
            ;
            sjd = function(a) {
                var b = a.J;
                var c = a.Jpa;
                const {hk: d, dMa: e} = {
                    hk: ljd(),
                    dMa: ojd
                };
                c = ejd({
                    hk: d,
                    Jpa: c,
                    J: b
                });
                c = new pjd(c);
                const {zX: f, Eca: g, Bfa: h, bX: k} = {
                    zX: c,
                    Eca: c,
                    Bfa: e,
                    bX: d
                };
                c = new qjd(g);
                const {yX: l, mGa: m} = {
                    yX: c,
                    mGa: c
                };
                b = new rjd(g,b);
                const {PGb: n, QGb: p} = {
                    PGb: b,
                    QGb: b
                };
                b = {
                    zX: f,
                    Eca: g,
                    yX: l,
                    mGa: m,
                    Bfa: h,
                    bX: k,
                    PGb: n,
                    QGb: p
                };
                c = Lhd({
                    zX: b.zX,
                    Lga: a.Lga,
                    NZ: a.NZ
                });
                a = Shd({
                    W3: c,
                    yX: b.yX,
                    xt: a.xt,
                    faa: a.faa
                });
                return {
                    ...b,
                    W3: c,
                    MGb: a
                }
            }
            ;
            ujd = function(a, b) {
                b = tjd(b);
                return a.origin !== b.f4a ? {
                    valid: !1,
                    error: {
                        message: "Message origin does not match iframe src origin",
                        extra: new Map([["msg.origin", a.origin], ["iframe.origin", b.f4a]])
                    }
                } : {
                    valid: !0,
                    dna: b.dna
                }
            }
            ;
            tjd = function({src: a, srcdoc: b, sandbox: c}) {
                if (b.length !== 0 || !c.contains("allow-same-origin"))
                    return vjd;
                a = (new URL(a)).origin;
                return a === "null" ? vjd : {
                    f4a: a,
                    dna: a
                }
            }
            ;
            wjd = function(a, b) {
                x(!a.disposed, "IFrameHostConnector disposed");
                x(!a.gfa.has(b), "Callback already registered");
                a.gfa.add(b)
            }
            ;
            xjd = function(a, b, c) {
                a.Zvb.handle(b, async d => {
                    if (d == null)
                        throw Error(`${b}: Request cannot be undefined`);
                    return c(d)
                }
                )
            }
            ;
            Cjd = function(...a) {
                const b = a[0]
                  , c = a[1];
                xjd(b, "Editing2Sdk.setSelection", async d => {
                    const e = N4()();
                    try {
                        return __c.yjd.serialize(e.r(await e.s(c.o2(zjd.S(d)))))
                    } finally {
                        e.s()
                    }
                }
                );
                xjd(b, "Editing2Sdk.getMedia", async d => {
                    const e = N4()();
                    try {
                        return __c.Ajd.serialize(e.r(await e.s(c.TG(Bjd.S(d)))))
                    } finally {
                        e.s()
                    }
                }
                )
            }
            ;
            Ejd = function(a) {
                a.We = setTimeout(v4.wrap( () => {
                    a.Oub(new Djd)
                }
                ), 500)
            }
            ;
            Gjd = async function(a, b) {
                const c = N4()();
                try {
                    const f = b.requestId
                      , g = b.path
                      , h = b.payload
                      , k = a.M1.get(g);
                    if (k) {
                        a.Lka.Cea.send({
                            type: "ack",
                            requestId: f
                        });
                        var d = setInterval(v4.wrap( () => a.Lka.Cea.send({
                            type: "ack",
                            requestId: f
                        })), 9E3);
                        try {
                            const l = c.r(await c.s(k(h)));
                            clearInterval(d);
                            a.Lka.Cea.send({
                                type: "response",
                                requestId: f,
                                payload: l
                            })
                        } catch (l) {
                            c.r();
                            clearInterval(d);
                            b = "internal_error";
                            d = "Something went wrong on our end, if this issue persists please contact us.";
                            if (l instanceof O4) {
                                var e = l;
                                l.code === "internal_error" ? a.J.Db(l, {
                                    Zd: "Internal error in comms handler",
                                    tags: new Map([["type", "request"], ["path", g]])
                                }) : (b = l.code,
                                d = l.Ebc)
                            } else
                                a.Dcc ? a.J.Db(l, {
                                    Zd: "Unexpected error type thrown from comms handler",
                                    tags: new Map([["type", "request"], ["path", g]])
                                }) : a.mSb.error(l);
                            const m = Fjd(a.Lka, f, b, d);
                            m.ok || a.J.cT(m.error, {
                                Zd: "unable to send error response",
                                tags: new Map([["type", "request"], ["path", g]])
                            })
                        }
                        if (e != null)
                            for (const l of a.qVb)
                                try {
                                    l(e)
                                } catch (m) {
                                    a.J.my(m, {
                                        Zd: "Error executing errorObserver"
                                    })
                                }
                    } else {
                        const l = Fjd(a.Lka, f, "internal_error", `No request handler configured for path: "${g}".`);
                        l.ok || a.J.cT(l.error, {
                            Zd: "unable to send error response",
                            tags: new Map([["type", "request"], ["path", g]])
                        })
                    }
                } finally {
                    c.s()
                }
            }
            ;
            Fjd = function(a, b, c, d) {
                return a.Cea.send({
                    type: "error",
                    requestId: b,
                    code: c,
                    message: d
                })
            }
            ;
            P4 = function(a, b, c, d, e) {
                a.handle(b, async f => {
                    const g = N4()();
                    try {
                        if (f === void 0)
                            throw new O4({
                                code: "internal_error",
                                message: `${b}: request cannot be undefined.`
                            });
                        var h = c.S(f);
                        const k = g.r(await g.s(d(h)));
                        if (e)
                            return e.serialize(k)
                    } finally {
                        g.s()
                    }
                }
                )
            }
            ;
            Jjd = function(a, b) {
                P4(a, "INIT_DATA", Hjd, c => b.FRa(c), __c.Q4);
                P4(a, "DATA_RENDER_READY", Ijd, c => b.tia(c), __c.R4)
            }
            ;
            Vjd = function(a, b) {
                P4(a, "LAYOUT_SHIFT_EVENT", Kjd, c => b.qwb(c), __c.Ljd);
                P4(a, "SELECTION_CHANGE", Mjd, c => b.ywb(c), __c.S4);
                P4(a, "HOVER_ELEMENT_CHANGED", Njd, c => b.Mjb(c), __c.T4);
                P4(a, "TEXT_CONTENT_CHANGED", Ojd, c => b.JCb(c), __c.Pjd);
                P4(a, "TEXT_FOCUS_CHANGED", Qjd, c => b.MCb(c), __c.U4);
                P4(a, "SHOW_CONTEXT_MENU", Rjd, c => b.m1a?.(c), __c.Sjd);
                P4(a, "CLEAR_EDIT_MODE", Tjd, c => b.dLa?.(c), __c.Ujd)
            }
            ;
            akd = function(a, b) {
                P4(a, "INIT_ELEMENT", Wjd, c => b.Kwa(c), __c.Xjd);
                P4(a, "SET_CONFIG", Yjd, c => b.Nwa(c), __c.Zjd);
                P4(a, "RESIZE_EVENT", $jd, c => b.Mwa(c))
            }
            ;
            dkd = function(a, b) {
                P4(a, "RESIZE_EVENT", bkd, c => b.nvb(c), __c.ckd)
            }
            ;
            gkd = function(a, b) {
                P4(a, "INIT_TELEMETRY", ekd, c => b.GRa(c), __c.V4);
                P4(a, "ERROR_OCCURRED", fkd, c => b.DRa(c), __c.W4)
            }
            ;
            hkd = function(a) {
                const b = Promise.withResolvers()
                  , c = setTimeout(v4.wrap( () => b.reject(new DOMException("Operation timed out","TimeoutError"))), 500);
                a.then(v4.wrap(b.resolve), v4.wrap(b.reject)).finally(v4.wrap( () => clearTimeout(c)));
                return b.promise
            }
            ;
            ikd = function(a, b) {
                const c = a.WY.get(b);
                if (c) {
                    for (const f of c.keys()) {
                        var d = c.get(f);
                        if (d?.dU) {
                            var e = a.ixa;
                            d = d.dU;
                            x(!e.disposed, "IFrameHostConnector disposed");
                            e.gfa.delete(d)
                        }
                    }
                    a.WY.delete(b)
                }
            }
            ;
            kkd = async function(a, b, c, d, e, f) {
                const g = N4()();
                try {
                    const {promise: h, resolve: k} = Promise.withResolvers()
                      , {promise: l, resolve: m} = Promise.withResolvers();
                    wjd(a.ixa, jkd(a, b, {
                        clientId: c,
                        eab: n => {
                            k();
                            f();
                            d(n, m)
                        }
                    }));
                    g.r(await g.s(e));
                    try {
                        g.r(await g.s(hkd(h)))
                    } catch (n) {
                        g.r();
                        if (n instanceof DOMException && n.name === "TimeoutError")
                            return;
                        throw n;
                    }
                    g.r(await g.s(l))
                } finally {
                    g.s()
                }
            }
            ;
            lkd = function(a, b, c) {
                const d = async ({gab: e}) => c === e.clientId && b === e.Qtb ? {
                    type: "dangerously_ignore"
                } : {
                    type: "connection_request_not_matched"
                };
                y(a.WY.get(b)).set(c, {
                    connected: !1,
                    dU: d
                });
                wjd(a.ixa, d)
            }
            ;
            mkd = function(a, b, c, d) {
                wjd(a.ixa, jkd(a, b, {
                    clientId: c,
                    eab: d
                }))
            }
            ;
            qkd = function(a, b, c, {gba: d, BDa: e, ADa: f, W0a: g, CDa: h, hba: k}) {
                x(!(f != null && g != null), "editing and editing2 sdk are mutually exclusive");
                if (a.WY.has(b))
                    return Promise.resolve();
                a.WY.set(b, new Map);
                const {promise: l, resolve: m} = Promise.withResolvers()
                  , n = Promise.withResolvers();
                let p = !1, q;
                l.then(v4.wrap( () => {
                    p = !0;
                    self.clearTimeout(q)
                }
                ));
                c.then(v4.wrap( () => {
                    p || (q = window.setTimeout(v4.wrap( () => {
                        n.resolve()
                    }
                    ), 500))
                }
                ), v4.wrap(r => n.reject(r)));
                c = [];
                c.push(kkd(a, b, "canva-code-data-sdk", (r, t) => {
                    const {IMa: w} = d()
                      , v = w.tia;
                    w.tia = A => {
                        t();
                        return v.call(w, A)
                    }
                    ;
                    Jjd(r, w)
                }
                , l, m));
                e && c.push(kkd(a, b, "canva-code-element-sdk", (r, t) => {
                    const {nfb: w} = e(new nkd(r))
                      , v = w.Nwa;
                    w.Nwa = A => {
                        t();
                        return v.call(w, A)
                    }
                    ;
                    akd(r, w)
                }
                , l, m));
                f && (c.push(kkd(a, b, "canva-code-editing-sdk", (r, t) => {
                    ({jfb: t} = f(new okd(r,t)));
                    Vjd(r, t)
                }
                , l, m)),
                lkd(a, b, "canva-code-editing2-sdk"));
                g && (mkd(a, b, "canva-code-editing2-sdk", r => {
                    r = new pkd(r);
                    m();
                    var t = [r];
                    ({ETb: t} = g(t.length === 1 ? new __c.X4(t[0]) : new __c.X4(t[0],t[1])));
                    Cjd(r, t)
                }
                ),
                lkd(a, b, "canva-code-editing-sdk"));
                h && mkd(a, b, "canva-code-resizing-sdk", r => {
                    m();
                    const {ovb: t} = h();
                    dkd(r, t)
                }
                );
                k && mkd(a, b, "canva-code-telemetry-sdk", r => {
                    m();
                    const {s2a: t} = k();
                    gkd(r, t)
                }
                );
                return Promise.race([Promise.all(c).then(v4.wrap( () => {}
                )), n.promise])
            }
            ;
            jkd = function(a, b, c) {
                const d = ({gab: e}) => {
                    var f = e.clientId;
                    e = e.Qtb;
                    if (f !== c.clientId || e !== b)
                        return Promise.resolve({
                            type: "connection_request_not_matched"
                        });
                    e = y(a.WY.get(b));
                    f = y(e.get(f));
                    if (f.connected)
                        return Promise.resolve({
                            type: "already_connected"
                        });
                    const {port1: g, port2: h} = new MessageChannel;
                    e = new rkd(g,a.J);
                    c.eab(e);
                    f.connected = !0;
                    return Promise.resolve({
                        type: "connection_request_matched",
                        port: h
                    })
                }
                ;
                y(a.WY.get(b)).set(c.clientId, {
                    dU: d,
                    connected: !1
                });
                return d
            }
            ;
            skd = function({Abb: a, IGb: b, title: c, ...d}) {
                return Y4("iframe", {
                    ...d,
                    title: c,
                    "data-process-id": a
                })
            }
            ;
            tkd = function(a) {
                a = (new DOMParser).parseFromString(a, "text/html");
                a = y(a.querySelector("iframe"));
                return {
                    id: a.id,
                    src: y(a.getAttribute("src")),
                    sandbox: a.sandbox.toString(),
                    allow: a.allow,
                    allowFullscreen: a.allowFullscreen
                }
            }
            ;
            wkd = function() {
                const [a,b] = Z4(1);
                return Y4(ukd, {
                    client: !0,
                    onResize: c => {
                        c.client != null && b(Math.max(c.client.width / 300, c.client.height / 200))
                    }
                    ,
                    children: ({measureRef: c}) => Y4("div", {
                        className: "rJEmjw",
                        ref: c,
                        children: Y4("div", {
                            className: "bvDT_w",
                            style: {
                                transform: `scale(${a})`
                            },
                            children: Y4(vkd, {})
                        })
                    })
                })
            }
            ;
            ykd = function({Ms: a, NY: b, J: c, Lb: d, Xp: e, Ur: f, lb: g}) {
                const h = (k, l) => c.error(k, {
                    Zd: "codelet: ",
                    extra: new Map(Object.entries(l))
                });
                return k => Y4(xkd, {
                    ...k,
                    Ms: a,
                    NY: b,
                    ND: h,
                    Lb: d,
                    Xp: e,
                    Ur: f,
                    lb: g
                })
            }
            ;
            __c.zkd = function(a, b) {
                return a === "__page-root" ? !0 : a === "background" ? !b.has("__page-root") : !1
            }
            ;
            Bkd = async function(a, b, c) {
                const d = N4()();
                try {
                    const f = d.r(await d.s(a.RC.NU(c)));
                    if (f == null)
                        a.cache.set(b, void 0);
                    else {
                        var e = d.r(await d.s(Akd(f)));
                        a.cache.set(b, e)
                    }
                } finally {
                    d.s()
                }
            }
            ;
            Akd = async function(a) {
                const b = N4()();
                try {
                    return a.type === "blob" ? {
                        type: "url",
                        url: b.r(await b.s(new Promise( (c, d) => {
                            const e = new FileReader;
                            e.onload = () => {
                                typeof e.result === "string" ? c(e.result) : d(Error("FileReader did not produce a string result"))
                            }
                            ;
                            e.onerror = d;
                            e.readAsDataURL(a.data)
                        }
                        ))),
                        M: a.M,
                        La: a.La
                    } : {
                        ...a,
                        Jia: [...a.images].sort( (c, d) => c.width - d.width).map(c => ({
                            src: (new URL(c.url,self.location.href)).href,
                            width: c.width
                        }))
                    }
                } finally {
                    b.s()
                }
            }
            ;
            Dkd = function(a, b) {
                const {lower: c, Zwa: d} = a.reduce( (e, f) => {
                    const g = Math.max(f.width, f.height) - Ckd[b];
                    return {
                        lower: g < 0 ? [...e.lower, {
                            ...f,
                            delta: g
                        }] : e.lower,
                        Zwa: g >= 0 ? [...e.Zwa, {
                            ...f,
                            delta: g
                        }] : e.Zwa
                    }
                }
                , {
                    lower: [],
                    Zwa: []
                });
                return [...d].sort( (e, f) => e.delta - f.delta)[0] ?? [...c].sort( (e, f) => f.delta - e.delta)[0]
            }
            ;
            Fkd = async function(a, b, c) {
                const d = N4()();
                try {
                    const e = []
                      , f = new class extends Ekd {
                        G4a(g) {
                            switch (g.type) {
                            case "font":
                                e.push(b.$J([g]));
                                break;
                            case "media":
                                e.push(c.NU({
                                    id: g.id,
                                    version: g.version
                                }));
                                break;
                            default:
                                throw new z(g);
                            }
                        }
                    }
                    ;
                    $4( () => f.sR(a));
                    d.r(await d.s(Promise.all(e)))
                } finally {
                    d.s()
                }
            }
            ;
            __c.Lkd = async function(a, b, c, d) {
                const e = N4()();
                try {
                    const f = Zgd(a);
                    e.r(await e.s(Fkd(f, b.Fa, b.Sr)));
                    return (new class extends Gkd {
                        xX(g, h) {
                            return {
                                ...h,
                                textContent: g
                            }
                        }
                        tR(g, h) {
                            return g == null ? h : g.image != null ? (g = Hkd(g.image, b.Sr),
                            g != null ? {
                                ...h,
                                background: g.url,
                                yMb: {
                                    width: g.width,
                                    height: g.height
                                },
                                CMb: g.Jia ?? []
                            } : h) : {
                                ...h,
                                background: Ikd(g)
                            }
                        }
                        uR(g, h) {
                            return {
                                ...h,
                                color: g && Ikd(g)
                            }
                        }
                        vca({fontFamily: g, fontWeight: h, fontStyle: k}, l) {
                            if (g == null && h == null && k == null)
                                return l;
                            var m = __c.Kr(h ?? "normal", (k ?? "normal") === "italic");
                            h = Hr(__c.Ir(m))?.toString() ?? "400";
                            k = __c.Jr(m) ? "italic" : "normal";
                            switch (g?.type) {
                            case void 0:
                            case 2:
                                return {
                                    ...l,
                                    font: {
                                        id: void 0,
                                        src: void 0,
                                        fbb: void 0,
                                        weight: h,
                                        style: k,
                                        variants: []
                                    }
                                };
                            case 1:
                                const q = b.Fa.hz(g.fontFamily)
                                  , r = (m = q && __c.Sr(q.fonts, m)) && (new URL(m.files[0].url,self.location.href)).href;
                                var n = m != null ? Hr(__c.Ir(m.style))?.toString() ?? "400" : h
                                  , p = m != null ? __c.Jr(m.style) ? "italic" : "normal" : k;
                                const t = []
                                  , w = new Set;
                                r && (t.push({
                                    src: r,
                                    weight: n,
                                    style: p,
                                    gnb: 1
                                }),
                                w.add(r));
                                if (d?.W_b && q)
                                    for (const {weight: v, Mja: A} of Jkd) {
                                        n = __c.Kr(v, A);
                                        n = __c.Sr(q.fonts, n);
                                        if (n == null)
                                            continue;
                                        p = (new URL(n.files[0].url,self.location.href)).href;
                                        w.has(p) || (w.add(p),
                                        t.push({
                                            src: p,
                                            weight: Hr(__c.Ir(n.style))?.toString() ?? "400",
                                            style: __c.Jr(n.style) ? "italic" : "normal",
                                            gnb: 2
                                        }))
                                    }
                                return {
                                    ...l,
                                    font: {
                                        id: __c.zp(g.fontFamily),
                                        src: r,
                                        fbb: b.Fa.rQ(g.fontFamily),
                                        ...(m != null ? {
                                            weight: Hr(__c.Ir(m.style))?.toString() ?? "400",
                                            style: __c.Jr(m.style) ? "italic" : "normal"
                                        } : {
                                            weight: h,
                                            style: k
                                        }),
                                        variants: t
                                    }
                                };
                            default:
                                throw new z(g);
                            }
                        }
                        wca(g, h) {
                            return {
                                ...h,
                                fontSize: g
                            }
                        }
                        vX(g, h) {
                            return {
                                ...h,
                                letterSpacing: g
                            }
                        }
                        wX(g, h) {
                            return {
                                ...h,
                                lineHeight: g
                            }
                        }
                        vR(g, h) {
                            switch (g?.type) {
                            case void 0:
                                return h;
                            case 2:
                                return {
                                    ...h,
                                    St: g.media
                                };
                            case 1:
                                const k = b.Sr.TG({
                                    id: g.media.id,
                                    version: g.media.version
                                }, c);
                                return {
                                    ...h,
                                    St: k?.url ?? "",
                                    Jia: b.Sr.vwa({
                                        id: g.media.id,
                                        version: g.media.version
                                    })?.map(l => new a5(l)) ?? []
                                };
                            default:
                                throw new z(g);
                            }
                        }
                        tX(g, h) {
                            return {
                                ...h,
                                La: g
                            }
                        }
                        yca(g, h) {
                            return h
                        }
                        Aca(g, h) {
                            return h
                        }
                        Cca(g, h) {
                            return h
                        }
                        xca(g, h) {
                            return h
                        }
                        zca(g, h) {
                            return h
                        }
                        Bca(g, h) {
                            return h
                        }
                    }
                    ).map(f, new Kkd({}))
                } finally {
                    e.s()
                }
            }
            ;
            Hkd = function(a, b) {
                x(a.media.type === "RESOLVED", "unexpected media");
                const c = b.TG({
                    id: a.media.id,
                    version: a.media.version
                }, 7);
                if (c != null)
                    return {
                        url: `url(${c.url})`,
                        width: c.width,
                        height: c.height,
                        Jia: b.vwa({
                            id: a.media.id,
                            version: a.media.version
                        })?.map(d => new a5(d))
                    }
            }
            ;
            Ikd = function(a) {
                x(a.image == null, "image fill not supported");
                if (a.color) {
                    const b = Math.round((1 - a.ma) * 255).toString(16).padStart(2, "0");
                    return `${a.color}${b}`
                }
                if (a.Ha) {
                    a: switch (a = a.Ha,
                    a.type) {
                    case "linear":
                        a = `linear-gradient(${a.rotation}deg, ${a.Vc.map(Mkd).join(", ")})`;
                        break a;
                    case "radial":
                        a = `radial-gradient(${a.Vc.map(Mkd).join(", ")})`;
                        break a;
                    default:
                        throw new z(a);
                    }
                    return a
                }
                if (!a.color && !a.Ha)
                    return "transparent"
            }
            ;
            Mkd = function(a) {
                return __c.iv(__c.cv(__c.Wu(a.color), 1 - a.ma))
            }
            ;
            Qkd = function({Ms: a, WXa: b, NY: c, J: d, sO: e, H0: f}) {
                const g = () => ({
                    nfb: {
                        Kwa: () => Promise.resolve(new __c.Xjd({})),
                        Nwa: () => new __c.Zjd,
                        Mwa: () => {}
                    }
                })
                  , h = () => ({
                    IMa: {
                        FRa: () => new __c.Q4({
                            fj: void 0,
                            Qf: void 0,
                            up: !b
                        }),
                        tia: () => new __c.R4
                    }
                })
                  , k = () => ({
                    ovb: {
                        nvb: () => Promise.resolve(new __c.ckd)
                    }
                })
                  , l = () => ({
                    s2a: {
                        GRa: () => new __c.V4({}),
                        DRa: () => new __c.W4
                    }
                });
                f = __c.pya(f);
                e = __c.Cva({
                    sO: e
                });
                const m = new Nkd(f)
                  , n = new Okd(e);
                return p => Y4(Pkd, {
                    ...p,
                    Ms: a,
                    NY: c,
                    Owa: {
                        data: h,
                        element: g,
                        O1: k,
                        telemetry: l
                    },
                    ec: m,
                    Fa: n,
                    J: d,
                    UC: skd
                })
            }
            ;
            Ukd = function(a) {
                var b = a.J
                  , c = a.e4a;
                const d = a.WXa
                  , e = `codelet-${Rkd++}`;
                b = b.Wd(e);
                c = new Skd({
                    Ms: e
                },b,c);
                c = new Tkd(c,b);
                return a.Ur != null ? {
                    wF: ykd({
                        Ms: e,
                        NY: c,
                        J: b,
                        Lb: a.Lb,
                        Xp: a.Xp,
                        Ur: a.Ur,
                        lb: a.lb
                    })
                } : {
                    wF: Qkd({
                        Ms: e,
                        WXa: d,
                        NY: c,
                        J: b,
                        sO: a.sO,
                        H0: a.H0,
                        Fec: a.Fec
                    })
                }
            }
            ;
            __c.b5 = function(a) {
                return a && typeof a.size === "function" ? Array.from({
                    length: a.size()
                }, (b, c) => a.get(c)) : []
            }
            ;
            Vkd = function(a) {
                a.wva(a.BGb).catch(v4.wrap(b => {
                    a.J.my(b)
                }
                ));
                a.wva(a.AGb).catch(v4.wrap(b => {
                    a.J.my(b)
                }
                ))
            }
            ;
            Wkd = function(a, b, c) {
                const d = a.$0a;
                d != null && (b = Math.max(a.Bna, b),
                c = Math.max(a.Ana, c),
                b !== a.Bna || c !== a.Ana) && (d.width = b,
                d.height = c,
                a.Bna = b,
                a.Ana = c)
            }
            ;
            Xkd = async function(a, b, c) {
                const d = N4()();
                try {
                    const e = d.r(await d.s(a.loadModule()));
                    if (!a.$0a || !a.a1a) {
                        const f = a.WQb(Math.max(b, 1), Math.max(c, 1))
                          , g = y(f.getContext("webgl2", {
                            alpha: !0,
                            premultipliedAlpha: !0,
                            antialias: !1,
                            depth: !0,
                            stencil: !0,
                            preserveDrawingBuffer: !0
                        }), "Cavalry: failed to create shared WebGL2 context");
                        f.addEventListener("webglcontextlost", h => {
                            h.preventDefault();
                            a.J.Db(Error("Cavalry shared WebGL2 context lost"));
                            a.$0a = void 0;
                            a.a1a = void 0;
                            a.EDa = !1;
                            a.Bna = 0;
                            a.Ana = 0
                        }
                        );
                        a.$0a = f;
                        a.a1a = g;
                        a.Bna = f.width;
                        a.Ana = f.height;
                        e.shared = e.shared ?? {};
                        e.shared.onPresentFallback = h => {
                            a.J.my(Error(`Cavalry present fallback (${h.reason})`));
                            Wkd(a, h.requested.w, h.requested.h)
                        }
                    }
                    if (!a.EDa) {
                        const f = y(a.a1a)
                          , g = e.CavalryRenderer.SetSharedContext(f, {
                            usePresentToCanvas: !0
                        });
                        if (!g.ok)
                            throw Error(`Cavalry SetSharedContext failed: ${g.error}`);
                        a.EDa = !0
                    }
                    Wkd(a, b, c)
                } finally {
                    d.s()
                }
            }
            ;
            Ykd = function(a) {
                a = new Uint8Array(a);
                const b = a.length;
                let c = 2166136261 ^ b;
                const d = Math.max(1, b >> 10);
                for (let e = 0; e < b; e += d)
                    c ^= a[e],
                    c = Math.imul(c, 16777619);
                return (c >>> 0).toString(36)
            }
            ;
            $kd = function(a) {
                const b = a.zX;
                return {
                    Jy: __d(953489, () => __c.Zkd).then(v4.wrap(c => ({
                        id: "w:JR4G8hDDg",
                        schema: khd(b, "w:JR4G8hDDg", (0,
                        c.Yd)())
                    })))
                }
            }
            ;
            ald = function(a) {
                function b({id: d, schema: e}, f, g) {
                    return Mhd(c, d, e, f(g))
                }
                const c = a.yX;
                return {
                    Jy: Promise.all([a.W3.Jy, __d(953489, () => __c.Zkd)]).then(v4.wrap( ([d,e]) => b(d, e.Xd, void 0)))
                }
            }
            ;
            Cld = function(a) {
                const b = a.W3
                  , c = a.Hpa
                  , d = a.AR
                  , e = a.Yf
                  , f = a.Ly;
                a = a.ig;
                class g extends bld {
                    async load() {
                        const fa = N4()();
                        try {
                            const [la,xa,za] = fa.r(await fa.s(Promise.all([this.jk, this.ck(), Promise.resolve(this.ig)])))
                              , ja = la.id
                              , ma = la.schema
                              , Ha = xa.Sk({
                                Ly: {
                                    ...f,
                                    Va: e.av(`widgets.rendering.clients.${this.qj}`)
                                },
                                ig: za
                            })
                              , Ca = cld(c, ja, ma, Ha);
                            d?.eKc(ja);
                            return {
                                id: ja,
                                schema: ma,
                                jC: Ca,
                                qj: this.qj
                            }
                        } finally {
                            fa.s()
                        }
                    }
                    constructor(fa) {
                        super(fa.id, fa.ck);
                        this.jk = fa.jk;
                        this.ig = fa.ig;
                        this.qj = fa.qj ?? "default"
                    }
                }
                var h = new g({
                    id: "w:wnJF5T87v",
                    jk: Promise.resolve(b.ko),
                    ck: () => __d(796440, () => __c.Zfd),
                    ig: {
                        xt: a.xt,
                        OF: a.OF,
                        Tb: a.Tb
                    },
                    qj: "blueprint"
                })
                  , k = new g({
                    id: "w:xB9fK2LmQ",
                    jk: Promise.resolve(b.f7),
                    ck: () => __d(484788, () => __c.dgd),
                    ig: {
                        xt: a.xt,
                        Tb: a.Tb
                    },
                    qj: "documentBlueprint"
                })
                  , l = b.Kg ? new g({
                    id: "w:cm9wgGptP",
                    jk: b.Kg.then(v4.wrap(fa => fa.D6)),
                    ck: () => __d(744650, () => __c.dld),
                    ig: void 0,
                    qj: "demo1"
                }) : null
                  , m = b.Kg ? new g({
                    id: "w:yLMS4dWnl",
                    jk: b.Kg.then(v4.wrap(fa => fa.M6)),
                    ck: () => __d(421167, () => __c.eld),
                    ig: void 0,
                    qj: "demo2"
                }) : null
                  , n = b.Kg ? new g({
                    id: "w:2flp30CGQ",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.N6))),
                    ck: () => __d(244312, () => __c.fld),
                    ig: void 0,
                    qj: "demo3"
                }) : null
                  , p = b.Kg ? new g({
                    id: "w:1Nv6K6Dtv",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.O6))),
                    ck: () => __d(924717, () => __c.gld),
                    ig: void 0,
                    qj: "demo4"
                }) : null
                  , q = b.Kg ? new g({
                    id: "w:5Nv6K6Dtv",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.P6))),
                    ck: () => __d(540666, () => __c.hld),
                    ig: void 0,
                    qj: "demo5"
                }) : null
                  , r = b.Kg ? new g({
                    id: "w:6Nv6K6Dtv",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.Q6))),
                    ck: () => __d(340281, () => __c.ild),
                    ig: void 0,
                    qj: "demo6"
                }) : null
                  , t = b.Kg ? new g({
                    id: "w:7Nv6K6Dtv",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.R6))),
                    ck: () => __d(664956, () => __c.jld),
                    ig: void 0,
                    qj: "demo7"
                }) : null
                  , w = b.Kg ? new g({
                    id: "w:8Nv6K6Dtv",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.S6))),
                    ck: () => __d(435161, () => __c.kld),
                    ig: void 0,
                    qj: "demo8"
                }) : null
                  , v = b.Kg ? new g({
                    id: "w:9Nv6K6Dtv",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.T6))),
                    ck: () => __d(636142, () => __c.lld),
                    ig: void 0,
                    qj: "demo9"
                }) : null
                  , A = b.Kg ? new g({
                    id: "w:sSrc7m4Q3",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.E6))),
                    ck: () => __d(989816, () => __c.mld),
                    ig: void 0,
                    qj: "demo10"
                }) : null
                  , B = b.Kg ? new g({
                    id: "w:ANv6K6Dtv",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.F6))),
                    ck: () => __d(57167, () => __c.nld),
                    ig: void 0,
                    qj: "demo11"
                }) : null
                  , C = b.Kg ? new g({
                    id: "w:7kN2mP9qT",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.G6))),
                    ck: () => __d(982982, () => __c.old),
                    ig: void 0,
                    qj: "demo12"
                }) : null
                  , E = b.Kg ? new g({
                    id: "w:13v6K6Dtv",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.H6))),
                    ck: () => __d(217451, () => __c.pld),
                    ig: void 0,
                    qj: "demo13"
                }) : null
                  , I = b.Kg ? new g({
                    id: "w:Sm7xP3nKf",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.I6))),
                    ck: () => __d(851884, () => __c.qld),
                    ig: void 0,
                    qj: "demo14"
                }) : null
                  , J = b.Kg ? new g({
                    id: "w:15cpDmWkz",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.J6))),
                    ck: () => __d(602137, () => __c.rld),
                    ig: void 0,
                    qj: "demo15"
                }) : null
                  , M = b.Kg ? new g({
                    id: "w:15v6K6Dtv",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.K6))),
                    ck: () => __d(594074, () => __c.sld),
                    ig: void 0,
                    qj: "demo16"
                }) : null
                  , O = b.Kg ? new g({
                    id: "w:YCsZAR6zB",
                    jk: Promise.resolve(b.Kg.then(v4.wrap(fa => fa.L6))),
                    ck: () => __d(308895, () => __c.tld),
                    ig: void 0,
                    qj: "demo17"
                }) : null
                  , R = new g({
                    id: "w:JR4G8hDDg",
                    jk: Promise.resolve(b.Jy),
                    ck: () => __d(953489, () => __c.Zkd),
                    ig: {
                        wF: a.wF,
                        Fa: a.Fa,
                        Ro: a.Ro
                    },
                    qj: "codelet"
                })
                  , S = new g({
                    id: "w:KS5H9iEEh",
                    jk: Promise.resolve(b.V5),
                    ck: () => __d(566675, () => __c.uld),
                    ig: {
                        wF: a.wF,
                        Fa: a.Fa,
                        jRa: a.jRa,
                        Bxa: a.Bxa,
                        RC: a.RC,
                        Ro: a.Ro
                    },
                    qj: "codelet2"
                })
                  , Q = new g({
                    id: "widget:form",
                    jk: b.form,
                    ck: () => __d(76997, () => __c.vld),
                    ig: {
                        M8: a.M8,
                        so: a.so,
                        Rz: a.Ema.Rz
                    },
                    qj: "form"
                })
                  , U = b.bV ? new g({
                    id: "w:K7mQ9xR3p",
                    jk: b.bV,
                    ck: () => __d(540811, () => __c.wld),
                    ig: {
                        ec: a.ec
                    },
                    qj: "navigationMenu"
                }) : null
                  , X = b.f$;
                xld == null && (xld = new yld(f.J.Wd("motion_graphic")));
                const aa = {
                    ko: h,
                    f7: k,
                    D6: l,
                    M6: m,
                    N6: n,
                    O6: p,
                    P6: q,
                    Q6: r,
                    R6: t,
                    S6: w,
                    T6: v,
                    E6: A,
                    F6: B,
                    G6: C,
                    H6: E,
                    I6: I,
                    J6: J,
                    K6: M,
                    L6: O,
                    Jy: R,
                    V5: S,
                    form: Q,
                    bV: U,
                    f$: new g({
                        id: "w:mdzFq18Fm",
                        jk: X,
                        ck: () => __d(246540, () => __c.zld),
                        ig: {
                            HKa: xld,
                            uz: a.uz
                        },
                        qj: "motionGraphic"
                    }),
                    scene: new g({
                        id: "w:2pbXJMtm1",
                        jk: b.scene,
                        ck: () => __d(387105, () => __c.c5),
                        ig: {
                            Am: a.Am
                        },
                        qj: "scene"
                    }),
                    button: new g({
                        id: "w:PQccHDsCJ",
                        jk: b.button,
                        ck: () => __d(927797, () => __c.Ald),
                        ig: {
                            Ci: a.Ci ?? []
                        },
                        qj: "button"
                    }),
                    n7: new g({
                        id: "w:RQddIEfDk",
                        jk: b.n7,
                        ck: () => __d(826074, () => __c.Bld),
                        ig: {
                            RC: a.RC
                        },
                        qj: "dynamicQrCode"
                    })
                };
                a = new Set(["widget:form", "w:JR4G8hDDg", "w:wnJF5T87v", "w:2pbXJMtm1", "w:PQccHDsCJ"]);
                h = [];
                for (var ha of Object.values(aa))
                    ha && a.has(ha.id) && h.push(ha.bk(Promise.resolve()));
                ha = Promise.allSettled(h).then(v4.wrap( () => {}
                ));
                return {
                    L1: {
                        ko: aa.ko.bk(ha),
                        f7: aa.f7.bk(ha),
                        Kg: b.Kg && {
                            D6: aa.D6.bk(ha),
                            M6: aa.M6.bk(ha),
                            N6: aa.N6.bk(ha),
                            O6: aa.O6.bk(ha),
                            P6: aa.P6.bk(ha),
                            Q6: aa.Q6.bk(ha),
                            R6: aa.R6.bk(ha),
                            S6: aa.S6.bk(ha),
                            T6: aa.T6.bk(ha),
                            E6: aa.E6.bk(ha),
                            F6: aa.F6.bk(ha),
                            G6: aa.G6.bk(ha),
                            H6: aa.H6.bk(ha),
                            I6: aa.I6.bk(ha),
                            J6: aa.J6.bk(ha),
                            K6: aa.K6.bk(ha),
                            L6: aa.L6.bk(ha)
                        },
                        Jy: aa.Jy.bk(ha),
                        V5: aa.V5.bk(ha),
                        form: aa.form.bk(ha),
                        bV: aa.bV?.bk(ha) ?? void 0,
                        f$: aa.f$.bk(ha),
                        scene: aa.scene.bk(ha),
                        button: aa.button.bk(ha),
                        n7: aa.n7.bk(ha)
                    },
                    thb: () => {
                        const fa = [];
                        for (const la of Object.values(aa))
                            la && fa.push(la.bk(Promise.resolve()));
                        return Promise.allSettled(fa)
                    }
                }
            }
            ;
            Ild = function(a, b, c) {
                const {root: d, mdc: e} = Dld();
                let f;
                const g = n => {
                    f = n
                }
                ;
                let h = null;
                const k = Eld(a)
                  , l = Y4("div", {
                    style: {
                        width: k.width,
                        height: k.height
                    }
                })
                  , m = Fld(a, e, n => {
                    h = n
                }
                );
                try {
                    Gld( () => {
                        d.render(Y4(__c.Av, {
                            fallback: l,
                            children: Y4(m, {
                                children: Y4(b.Component, {
                                    model: a,
                                    Lb: c,
                                    Ew: void 0,
                                    DQ: g,
                                    Xt: void 0,
                                    GD: void 0,
                                    jl: void 0
                                })
                            })
                        }))
                    }
                    );
                    const {oCa: n} = a.type === "controlled-item" ? __c.vz(h ?? e, a, f, !1, Hld(a, h ?? e)) : __c.vz(h ?? e, a, f, !1);
                    return n.VT()
                } finally {
                    d.unmount(),
                    e.remove()
                }
            }
            ;
            Eld = function(a) {
                switch (a.type) {
                case "controlled-element":
                    return {
                        width: a.C.width,
                        height: a.C.height
                    };
                case "controlled-item":
                    return (a = a.C.Ze) ? a : {
                        width: 0,
                        height: 0
                    };
                case "controlled-page":
                    return a.container.M;
                default:
                    throw new z(a);
                }
            }
            ;
            Dld = function() {
                const a = document.createElement("div");
                a.style.position = "absolute";
                a.style.top = "-10000px";
                a.style.left = "-10000px";
                a.style.width = "0";
                a.style.height = "0";
                a.style.pointerEvents = "none";
                a.style.visibility = "hidden";
                a.style.overflow = "hidden";
                document.body.appendChild(a);
                return {
                    root: Jld(a),
                    mdc: a
                }
            }
            ;
            Hld = function(a, b) {
                b = b.getBoundingClientRect().width;
                a = a.C.Ze?.width ?? 0;
                return {
                    width: b || a,
                    left: 0
                }
            }
            ;
            Fld = function(a, b, c) {
                switch (a.type) {
                case "controlled-element":
                    const d = __c.yz({
                        model: a,
                        ga: void 0
                    })
                      , e = d5("uzRrVg CQVqQQ", "fj0bOQ");
                    return ({children: f}) => Y4("div", {
                        className: e,
                        ref: c,
                        style: d,
                        children: f
                    });
                case "controlled-item":
                    return ({children: f}) => {
                        var g = Hld(a, b);
                        g = __c.VKa({
                            model: a,
                            ae: g,
                            zoom: 1
                        });
                        return Y4("div", {
                            className: "A7G0ZA",
                            style: g.TLa,
                            children: Y4("div", {
                                className: "YVVVuQ",
                                style: g.zoom,
                                children: Y4("div", {
                                    className: "VQmDAg CQVqQQ",
                                    style: g.V3,
                                    ref: c,
                                    children: f
                                })
                            })
                        })
                    }
                    ;
                case "controlled-page":
                    return ({children: f}) => {
                        var g = a.container.M;
                        g = __c.YKa({
                            Nb: g.width,
                            cc: g.height,
                            fit: "cover"
                        });
                        return Y4("div", {
                            className: "psh1sw",
                            children: Y4("div", {
                                className: "bCINwQ CQVqQQ",
                                style: g,
                                ref: c,
                                children: f
                            })
                        })
                    }
                    ;
                default:
                    throw new z(a);
                }
            }
            ;
            Kld = function(a) {
                return {
                    M: a.M,
                    La: a.La
                }
            }
            ;
            Lld = function(a) {
                return a && a.size !== 0 ? [...a.entries()].sort( ([b], [c]) => b.localeCompare(c)).map( ([b,c]) => `${b}=${c}`).join("&") : "default"
            }
            ;
            Mld = async function(a, b, c, d) {
                const e = N4()();
                try {
                    try {
                        const f = e.r(await e.s(a.yCa(b, c)));
                        $4( () => {
                            a.entries.set(d, {
                                status: "resolved",
                                result: f
                            })
                        }
                        );
                        return f
                    } catch (f) {
                        throw e.r(),
                        $4( () => {
                            a.entries.delete(d)
                        }
                        ),
                        f;
                    }
                } finally {
                    e.s()
                }
            }
            ;
            Nld = async function(a, b, c) {
                const d = N4()();
                try {
                    const e = d.r(await d.s(a.wI.b8(b, c.file, c.metadata)))
                      , f = d.r(await d.s(fetch(e)));
                    if (!f.ok)
                        throw Error(`Failed to fetch spritesheet: ${f.statusText}`);
                    return f.blob()
                } finally {
                    d.s()
                }
            }
            ;
            Old = async function(a, b, c, d) {
                const e = N4()();
                try {
                    if (a.AC) {
                        var f = c.find(k => k.type === "simple" && __c.Fs(k.file));
                        if (f) {
                            var g = e.r(await e.s(__c.vA(a.AC, b, f.file.url, d)))
                              , h = e.r(await e.s(fetch(g)));
                            if (!h.ok)
                                throw Error(`Failed to fetch SVG: ${h.statusText}`);
                            return h.blob()
                        }
                    }
                } finally {
                    e.s()
                }
            }
            ;
            e5 = function() {
                throw Error("ref not found");
            }
            ;
            Pld = function(a, b) {
                if (a.type === "controlled-element") {
                    b = __c.nq(a.C);
                    const c = a.C.K;
                    a = a.C.width;
                    return c === 0 || a === 0 ? __c.$p : __c.cq(a / c).then(v4.wrap(__c.yq(b)))
                }
                return a.type === "controlled-item" ? (a = a.C.Ze,
                a ? (b = b?.qib()) && a.width !== 0 ? __c.cq(b.width / a.width).then(v4.wrap(__c.yq(b))) : __c.$p : __c.$p) : __c.$p
            }
            ;
            Qld = function({BFa: a}) {
                const {hM: b, tabIndex: c, ...d} = a ?? {};
                return Y4("div", {
                    ...d,
                    "aria-labelledby": b,
                    className: "s1No5g",
                    role: "img",
                    children: Y4(__c.oJ, {
                        size: "medium"
                    })
                })
            }
            ;
            Rld = function(a) {
                return function() {
                    return a ? Y4(__c.ye, {
                        label: a,
                        placement: "bottom",
                        tva: !0,
                        children: b => Y4(Qld, {
                            BFa: b
                        })
                    }) : Y4(Qld, {})
                }
            }
            ;
            Sld = function(a, b, c) {
                const d = f => a.Db(f)
                  , e = Rld(c);
                return function(f) {
                    return Y4(__c.Av, {
                        onError: d,
                        fallback: Y4(e, {}),
                        children: Y4(b, {
                            ...f
                        })
                    })
                }
            }
            ;
            Tld = function(a, b, c) {
                return (d, e, f) => {
                    try {
                        const g = b(d, e, f);
                        return ya({
                            ...g,
                            dk: g.dk && ( () => {
                                try {
                                    g.dk()
                                } catch (h) {
                                    a.Db(h)
                                }
                            }
                            )
                        })
                    } catch (g) {
                        return a.Db(g),
                        (0,
                        __c.Aa)({
                            WGa: Rld(c)
                        })
                    }
                }
            }
            ;
            Uld = function(a) {
                const b = f5(a);
                b.current = a;
                return f5(c => b.current?.(c)).current
            }
            ;
            Xld = function(a, b) {
                var c = f5(null);
                c.current == null && (c.current = g5({
                    ...b
                }, {
                    Xt: g5.ref,
                    GD: g5.ref,
                    Ew: g5.ref,
                    model: g5.ref,
                    Cma: g5.ref
                }));
                const d = c.current;
                Vld( () => {
                    $4( () => {
                        d.Xt = b.Xt;
                        d.Lb = b.Lb;
                        d.GD = b.GD;
                        d.Ew = b.Ew;
                        d.model = b.model;
                        d.Cma = b.Cma
                    }
                    )
                }
                );
                c = f5(null);
                c.current == null && (c.current = Wld(a, d));
                return c.current
            }
            ;
            Wld = function(a, b) {
                const c = () => b.Ew ? {
                    Ew: b.Ew,
                    model: b.model,
                    Lb: b.Lb
                } : null
                  , d = h5(f => {
                    const g = Uld(b.Xt && (f.vXb || b.Xt.enabled) ? b.Xt.gb : void 0);
                    return Y4(a.wi, {
                        text: f.text,
                        gb: g
                    })
                }
                )
                  , e = h5(f => Y4(a.wn, {
                    ...f,
                    Lb: b.Lb,
                    model: b.model
                }));
                return {
                    fHa: a.fHa,
                    z4: a.z4,
                    eda: a.eda,
                    ih: a.ih,
                    wi: d,
                    UC: h5(f => {
                        const g = Yld(h => {
                            b.Cma?.set(b.model.C, h)
                        }
                        , []);
                        return Y4(a.UC, {
                            ...f,
                            Nj: b.GD?.Nj ?? !1,
                            M9b: g
                        })
                    }
                    ),
                    SGa: h5(f => Y4(a.SGa, {
                        ...f,
                        BNb: !!b.GD && b.Lb > 10
                    })),
                    RX: h5(f => Y4(a.RX, {
                        ...f,
                        wn: a.wn,
                        model: b.model,
                        Lb: b.Lb
                    })),
                    NX: h5(f => Y4(a.NX, {
                        ...f,
                        IB: b.Xt?.enabled ? b.Xt.gb : void 0
                    })),
                    wn: e,
                    JM: h5(f => b.GD ? Y4(a.JM, {
                        ...f,
                        wi: d,
                        wn: e
                    }) : Y4(d, {
                        text: f.text
                    })),
                    JR: h5(f => Y4(a.JR, {
                        ...f,
                        model: b.model
                    })),
                    Wca: h5(f => {
                        const g = c();
                        return g ? Y4(a.Wca, {
                            ...f,
                            ...g
                        }) : null
                    }
                    ),
                    uy: h5(f => {
                        const g = c();
                        return g ? Y4(a.uy, {
                            ...f,
                            ...g
                        }) : null
                    }
                    ),
                    zA: h5(f => {
                        const g = c();
                        return g ? Y4(a.zA, {
                            ...f,
                            ...g
                        }) : null
                    }
                    ),
                    Fu: h5(f => {
                        const g = c();
                        return g ? Y4(a.Fu, {
                            ...f,
                            ...g
                        }) : null
                    }
                    ),
                    KR: h5(f => {
                        const g = c();
                        return g ? Y4(a.KR, {
                            ...f,
                            ...g
                        }) : null
                    }
                    ),
                    wA: h5(f => {
                        const g = c();
                        return g ? Y4(a.wA, {
                            ...f,
                            ...g
                        }) : null
                    }
                    ),
                    yA: h5(f => {
                        const g = c();
                        return g ? Y4(a.yA, {
                            ...f,
                            ...g
                        }) : null
                    }
                    )
                }
            }
            ;
            cld = function(a, b, c, d) {
                mjd(a.KCa, b, c);
                u(!a.L1.has(b));
                Zld.has(b) || (__c.B_b.set(b, $ld),
                Zld.add(b));
                const e = amd(d.BD)
                  , {Rda: f, schema: g} = i5(a, c)
                  , h = p => e.Ib(p.C);
                var k = p => bmd(a, p.C, c, e);
                const l = cmd(a, c, k, h, d)
                  , m = dmd(a, c, k, h, d);
                k = emd(a, c, k, h, d);
                const n = d.Vj;
                d = {
                    C: l,
                    email: m,
                    hd: k,
                    exports: d.exports,
                    q6b: fmd(a, c, d.metadata),
                    Xuc: p => bmd(a, p, c, e),
                    R3b: e,
                    KJ: new Set(d.KJ),
                    vab: d.vab,
                    NAc: n ? (p, q) => {
                        if (bmd(a, p.C, c, e))
                            try {
                                return n(j5(g, h, f, p), q)
                            } catch (r) {
                                a.J.Db(r)
                            }
                    }
                    : void 0
                };
                a.L1.set(b, d);
                return d
            }
            ;
            amd = function(a) {
                return a === __c.WU.BD ? gmd : new hmd(a)
            }
            ;
            i5 = function(a, b) {
                return {
                    Rda: c => ({
                        document: imd(a, c.C),
                        C: c.C.pd
                    }),
                    q6: (c, d, e, f) => a.lGa.q6(c, d, e, f),
                    schema: Thd(b),
                    lZa: new jmd
                }
            }
            ;
            bmd = function(a, b, c, d) {
                var e = a.dgb.get(b);
                if (e != null)
                    return e;
                e = c.document.TY.size > 0;
                let f;
                try {
                    c.C.decode(__c.CS.snapshot(b.pd)),
                    e && c.document.decode(__c.CS.snapshot(imd(a, b))),
                    d.Ib(b),
                    f = !0
                } catch (g) {
                    a.J.Db(g),
                    f = !1
                }
                a.dgb.set(b, f);
                return f
            }
            ;
            cmd = function(a, b, c, d, e) {
                const f = e.C
                  , g = e.oVb;
                e = e.Vj;
                switch (f.type) {
                case 0:
                    a = kmd(a, lmd(a, f, b, c, d, e, g));
                    break;
                case 1:
                    a = mmd(a, f, b, c, d, e, g);
                    break;
                default:
                    throw new z(f);
                }
                return a
            }
            ;
            dmd = function(a, b, c, d, e) {
                e = e.email;
                if (e != null) {
                    var f = e.type;
                    switch (f) {
                    case 2:
                        return nmd(a, e, b, c, d);
                    default:
                        throw new z(f);
                    }
                }
            }
            ;
            emd = function(a, b, c, d, e) {
                e = e.hd;
                if (e != null) {
                    var f = e.type;
                    switch (f) {
                    case 3:
                        return omd(a, e, b, c, d);
                    default:
                        throw new z(f);
                    }
                }
            }
            ;
            fmd = function(a, b, c) {
                return d => {
                    if (c)
                        try {
                            let e;
                            return {
                                type: c.type,
                                cM: typeof c.cM === "function" ? c.cM(e ??= b.C.decode(d.pd)) : c.cM,
                                name: typeof c.name === "function" ? c.name(e ?? b.C.decode(d.pd)) : c.name
                            }
                        } catch (e) {
                            a.J.Db(e)
                        }
                }
            }
            ;
            kmd = function(a, b) {
                const c = b.It;
                return {
                    ...b,
                    It: (d, e, f) => {
                        e = c(d, e, f);
                        if (d.type !== "controlled-element" || !e.ok)
                            return e;
                        const g = e.value.Na
                          , h = e.value.dk;
                        a.LGb.add(d.C, g);
                        return ya({
                            ...e.value,
                            dk: () => {
                                h?.();
                                const k = d.rGa(g);
                                g.every(l => !k.OO(l)) && a.LGb.remove(d.C, g)
                            }
                        })
                    }
                }
            }
            ;
            lmd = function(a, b, c, d, e, f, g) {
                const h = b.It
                  , {Rda: k, q6: l, schema: m, lZa: n} = i5(a, c);
                if (typeof h === "object")
                    return g = a.bX.types,
                    g = g.Z5(g.union(g.instance("RectElement"), g.instance("ShapeElement"))),
                    pmd(a, k, m, g, h, p => __c.Hp( () => p().map(q => q.instance)), n);
                b = qmd(rmd(m, d, e, k, l, f, a.GL, a.Lb, a.J), k5(n), p => a.Q4a.wP(p, a.Lb));
                return {
                    type: 0,
                    It: Tld(a.J, (p, q, r) => {
                        if (!d(p))
                            throw Error("Widget app data does not satisfy schema validation.");
                        q = l(p, q, r, void 0);
                        p = j5(m, e, k, p);
                        return h(p, q)
                    }
                    , g ?? L("f8qj2A")),
                    wP: b,
                    TU: l5(n),
                    nK: m5(n),
                    getAnimations: n5(n),
                    XV: o5(n),
                    HTa: () => Promise.resolve()
                }
            }
            ;
            mmd = function(a, b, c, d, e, f, g) {
                function h(w) {
                    let v = t.get(w.C);
                    v == null && (v = Promise.withResolvers(),
                    t.set(w.C, v));
                    return v
                }
                const k = b.Component
                  , l = b.TQa
                  , {Rda: m, q6: n, schema: p, lZa: q} = i5(a, c);
                b = qmd(rmd(p, d, e, m, n, f, a.GL, a.Lb, a.J), k5(q), w => a.Q4a.wP(w, a.Lb));
                const r = new WeakMap
                  , t = new WeakMap;
                return {
                    type: 1,
                    wP: b,
                    TU: l5(q),
                    nK: m5(q),
                    getAnimations: n5(q),
                    XV: o5(q),
                    HTa: async w => {
                        const v = N4()();
                        try {
                            return v.r(await v.s(h(w).promise)),
                            r.get(w.C) ?? Promise.resolve()
                        } finally {
                            v.s()
                        }
                    }
                    ,
                    Component: Sld(a.J, p5( ({model: w, Lb: v, Ew: A, DQ: B, Xt: C, GD: E, jl: I}) => {
                        q5( () => {
                            if (!d(w))
                                throw Error("Widget app data does not satisfy schema validation.");
                        }
                        , []);
                        r5( () => {
                            h(w).resolve()
                        }
                        , [w]);
                        const J = q5( () => {
                            const {document: O, C: R} = p.Lr(m(w)).data;
                            return {
                                document: O,
                                C: R,
                                local: e(w)
                            }
                        }
                        , [w])
                          , M = q5( () => l == null || w.type !== "controlled-element" && w.type !== "controlled-page" ? w : w.rGa(l(J)), [w, J]);
                        A = Xld(a.Jd, {
                            Xt: C,
                            Lb: v,
                            GD: E,
                            Ew: A,
                            model: M,
                            Cma: r
                        });
                        C = q5( () => n(M, v, !!E, I), [M, v, !!E, I]);
                        return Y4(k, {
                            data: J,
                            Jd: A,
                            Ma: C,
                            DQ: B
                        })
                    }
                    ), g ?? L("f8qj2A"))
                }
            }
            ;
            nmd = function(a, b, c, d, e) {
                const f = b.Component
                  , {Rda: g, q6: h, schema: k, lZa: l} = i5(a, c);
                return {
                    type: 2,
                    wP: qmd(rmd(k, d, e, g, h, void 0, a.GL, a.Lb, a.J), k5(l), m => a.Q4a.wP(m, a.Lb)),
                    TU: l5(l),
                    nK: m5(l),
                    getAnimations: n5(l),
                    XV: o5(l),
                    HTa: () => Promise.resolve(),
                    Component: Sld(a.J, p5( ({model: m, Lb: n, scale: p, On: q}) => {
                        q5( () => {
                            if (!d(m))
                                throw Error("Widget app data does not satisfy schema validation.");
                        }
                        , []);
                        const r = smd(a.UTb, p)
                          , t = q5( () => j5(k, e, g, m), [m]);
                        n = h(m, n, q, void 0);
                        return Y4(f, {
                            data: t,
                            Jd: r,
                            scale: p,
                            Ma: n
                        })
                    }
                    ))
                }
            }
            ;
            omd = function(a, b, c, d, e) {
                const f = b.Component
                  , {Rda: g, q6: h, schema: k} = i5(a, c);
                return {
                    type: 3,
                    Component: Sld(a.J, p5( ({model: l, M: m}) => {
                        q5( () => {
                            if (!d(l))
                                throw Error("Widget app data does not satisfy schema validation.");
                        }
                        , []);
                        const n = q5( () => j5(k, e, g, l), [l])
                          , p = Xld(a.Jd, {
                            Xt: void 0,
                            Lb: 10,
                            GD: void 0,
                            Ew: void 0,
                            model: l,
                            Cma: void 0
                        })
                          , q = h(l, 10, !1, void 0);
                        return Y4(f, {
                            data: n,
                            Jd: p,
                            Ma: q,
                            M: m
                        })
                    }
                    ))
                }
            }
            ;
            pmd = function(a, b, c, d, e, f, g) {
                const h = a.dMa(a.bX, c, d).compile(e);
                return {
                    type: 0,
                    It: k => ya({
                        Na: f(h(b(k)))
                    }),
                    TU: l5(g),
                    wP: k5(g),
                    nK: m5(g),
                    getAnimations: n5(g),
                    XV: o5(g),
                    HTa: () => Promise.resolve()
                }
            }
            ;
            imd = function(a, b) {
                return a.Aa.sj.first(c => c.app.id === b.Nc.app.id && c.app.version === b.Nc.app.version)?.data ?? __c.CS.create(new Map)
            }
            ;
            tmd = function(a, b) {
                return a.L1.get(b.Nc.app.id)?.q6b(b)
            }
            ;
            k5 = function(a) {
                return s5(function(b) {
                    if ((b = a.get(b.C)) && b.size !== 0)
                        return b = Array.from(b, c => c.VT()),
                        __c.tq(0, b)
                })
            }
            ;
            l5 = function(a) {
                return s5( (b, c) => {
                    b = a.get(b);
                    if (!b || b.size === 0)
                        return c;
                    for (const d of b)
                        if (d.TU)
                            return d.TU(c);
                    return c
                }
                )
            }
            ;
            m5 = function(a) {
                return s5(b => (b = a.get(b.C)) && b.size !== 0 ? Array.from(b).flatMap(c => c.nK()) : [])
            }
            ;
            n5 = function(a) {
                return (b, c) => (b = a.get(b)) && b.size !== 0 ? Array.from(b).flatMap(d => d.getAnimations(c)) : []
            }
            ;
            o5 = function(a) {
                return (b, c) => {
                    a.add(b.C, c);
                    return () => a.remove(b.C, c)
                }
            }
            ;
            j5 = function(a, b, c, d) {
                a = a.Lr(c(d)).data;
                return b ? {
                    ...a,
                    local: b(d)
                } : {
                    ...a,
                    local: void 0
                }
            }
            ;
            rmd = function(a, b, c, d, e, f, g, h, k) {
                return s5(l => {
                    if (f && b(l))
                        try {
                            const n = j5(a, c, d, l)
                              , p = e(l, h, !1, void 0)
                              , q = f(n, p.M);
                            if (q) {
                                var m = Pld(l, g);
                                return q.transform(m)
                            }
                        } catch (n) {
                            k.Db(n)
                        }
                }
                )
            }
            ;
            qmd = function(...a) {
                return s5(b => {
                    for (const c of a) {
                        const d = c(b);
                        if (d != null)
                            return d
                    }
                    throw Error("All functions failed");
                }
                )
            }
            ;
            zmd = function(a) {
                var b = a.Eca;
                const c = a.R4a
                  , d = a.hnc
                  , e = a.Bfa
                  , f = a.bX
                  , g = a.J
                  , h = a.Aa;
                var k = a.ec;
                const l = a.wI
                  , m = a.AC
                  , n = a.GL
                  , p = a.l_a
                  , q = a.Jub
                  , r = a.Mub
                  , t = a.Lb;
                a = new umd(a.Fn,h);
                const w = new vmd(h,n,b,f,e,g,a,c,d,new wmd(v => w.FG(v),g),t);
                b = new xmd;
                k = k && l ? new ymd(k,l,m) : void 0;
                p && hgd(p, v => tmd(w, v));
                q && q(v => tmd(w, v));
                r && r(v => tmd(w, v));
                return {
                    Hpa: w,
                    qA: w,
                    OGb: w,
                    KGb: w,
                    lGa: a,
                    NGb: b,
                    RC: k
                }
            }
            ;
            Bmd = function(a, b) {
                if (!a)
                    return "Arial, Helvetica, sans-serif";
                const c = __c.xp(a);
                a = b.find(d => d.id === c.id && d.version === c.version);
                switch (a?.name) {
                case "Arimo":
                case "Arial":
                    return "Arial, Helvetica, sans-serif";
                case "Helvetica":
                case "Helvetica Now":
                    return "Helvetica, Arial, sans-serif";
                case "Times New Roman MT":
                case "Times New Roman":
                    return '"Times New Roman", Times, serif';
                case "Tahoma":
                    return "Tahoma, Geneva, sans-serif";
                case "Trebuchet MS":
                    return '"Trebuchet MS", Helvetica, sans-serif';
                case "Lucida Console":
                    return '"Lucida Console", Monaco, monospace';
                case "Comic Sans":
                    return '"Comic Sans MS", "Comic Sans", "Chalkboard SE", Chalkboard, "Marker Felt", Arial, sans-serif';
                case "Courier New OS":
                case "Courier New":
                    return '"Courier New", monospace';
                case "Georgia Pro":
                case "Georgia":
                    return "Georgia, serif";
                case "Verdana Pro":
                case "Verdana":
                    return "Verdana, Geneva, sans-serif";
                default:
                    return a?.name ? `${Amd(a.name)}, ${"Arial, Helvetica, sans-serif"}` : "Arial, Helvetica, sans-serif"
                }
            }
            ;
            Amd = function(a) {
                a = a.replace(/["']/g, "");
                return /[\s,]/.test(a) ? `"${a}"` : a
            }
            ;
            __c.Emd = function({text: a, scale: b, Ci: c}) {
                return Cmd({
                    IV: a.stream.da.replace(/\n$/, ""),
                    attributes: Dmd(a),
                    scale: b,
                    Ci: c
                })
            }
            ;
            Fmd = function(a, b) {
                if (a !== "rtl")
                    return b;
                switch (b) {
                case "start":
                    return "end";
                case "end":
                    return "start";
                default:
                    return b
                }
            }
            ;
            __c.t5 = function(a) {
                a = Math.round(a * 10) / 10;
                return Number.isInteger(a) ? `${a}px` : `${a.toFixed(1)}px`
            }
            ;
            Cmd = function({IV: a, attributes: b, scale: c, Ci: d}) {
                return {
                    IV: a,
                    Em: Gmd({
                        attributes: b,
                        scale: c,
                        Ci: d
                    })
                }
            }
            ;
            Dmd = function(a) {
                const b = c => [...a.stream.gz(c)[c]].values().next().value ?? Yh.vc[c];
                return {
                    color: b("color"),
                    fontFamily: b("font-family"),
                    fontSize: b("font-size"),
                    fontWeight: b("font-weight"),
                    fontStyle: b("font-style"),
                    ed: b("decoration"),
                    Hh: b("strikethrough"),
                    direction: b("direction"),
                    textAlign: b("text-align"),
                    lineHeight: Hmd(b("leading")),
                    letterSpacing: Hmd(b("tracking"))
                }
            }
            ;
            Gmd = function({attributes: a, scale: b, Ci: c}) {
                var d = a.fontSize * b;
                b = a.color;
                var e = __c.t5(d)
                  , f = {
                    ...Imd[a.fontWeight]
                };
                c = Bmd(a.fontFamily, c);
                var g = {
                    ...Jmd[a.fontStyle]
                };
                var h = a.Hh;
                var k = [];
                a.ed === "underline" && k.push("underline");
                h === "strikethrough" && k.push("line-through");
                h = k.length > 0 ? k.join(" ") : "none";
                k = {
                    ...Kmd[a.direction]
                };
                var l = Lmd[Fmd(a.direction, a.textAlign)]?.textAlign;
                {
                    var m = a.lineHeight;
                    d = __c.t5(d);
                    const p = parseFloat(d);
                    if (isNaN(p))
                        m = {
                            lineHeight: m
                        };
                    else {
                        d = Math.max(p, 0) * m;
                        var n = Math.max(d, p);
                        m = {
                            lineHeight: p < 0 ? __c.t5(d) : m,
                            msoLineHeightAlt: __c.t5(n)
                        }
                    }
                }
                return {
                    color: b,
                    fontSize: e,
                    ...f,
                    fontFamily: c,
                    ...g,
                    textDecoration: h,
                    ...k,
                    textAlign: l,
                    ...m,
                    letterSpacing: `${a.letterSpacing}em`
                }
            }
            ;
            Hmd = function(a) {
                if (!Number.isFinite(a))
                    throw Error("Invalid milliEms value");
                return a / 1E3
            }
            ;
            Mmd = function() {
                ({Ci: a} = {
                    Ci: []
                });
                var a;
                return ({text: b, scale: c}) => {
                    ({Em: c} = __c.Emd({
                        text: b,
                        scale: c,
                        Ci: a
                    }));
                    return Y4("table", {
                        cellPadding: 0,
                        cellSpacing: 0,
                        style: {
                            width: "100%",
                            height: "100%",
                            borderSpacing: 0,
                            borderCollapse: "collapse"
                        },
                        children: Y4("tbody", {
                            children: Y4("tr", {
                                children: Y4("td", {
                                    style: {
                                        ...c,
                                        verticalAlign: "middle",
                                        boxSizing: "border-box"
                                    },
                                    children: Y4("span", {
                                        style: {
                                            color: c.color,
                                            "mso-style-textfill-type": "solid",
                                            "mso-style-textfill-fill-color": c.color
                                        },
                                        children: b.stream.da
                                    })
                                })
                            })
                        })
                    })
                }
            }
            ;
            Nmd = function(a) {
                return h5(function(b) {
                    const {model: c, Lb: d, Uaa: e, ...f} = b;
                    return a.nHa ? Y4(a.nHa, {
                        ...f,
                        model: c,
                        Lb: d,
                        Uaa: e
                    }) : Y4(__c.HA, {
                        ...f
                    })
                })
            }
            ;
            Pmd = function(a, b) {
                return h5(function(c) {
                    const {Ew: {vma: d, ...e}, model: f, Lb: g, Uaa: h, element: k} = c
                      , l = a.read(k)
                      , m = (c = (f.type === "controlled-element" || f.type === "controlled-page") && l.id != null) && g >= 20;
                    r5( () => {
                        if (m) {
                            const n = d(l);
                            return u5(n)
                        }
                    }
                    , [m, l, f.C, d]);
                    return c ? Omd(b, {
                        ...e,
                        key: l.id,
                        model: f,
                        Lb: g,
                        Uaa: h,
                        ga: void 0,
                        element: f.bg(l)
                    }) : null
                })
            }
            ;
            v5 = function(a, b, c) {
                return h5(function(d) {
                    const e = d.Ew
                      , f = d.model
                      , g = d.Lb
                      , h = d.Uaa
                      , k = d.args
                      , l = d.O
                      , m = d.attributes;
                    d = q5( () => c(a.classes, k, {
                        ...(l && {
                            O: l
                        }),
                        ...(m && {
                            attributes: m
                        })
                    }), []);
                    return Y4(b, {
                        Ew: e,
                        model: f,
                        Lb: g,
                        Uaa: h,
                        element: d
                    })
                })
            }
            ;
            Qmd = function({expr: a, nGa: b}) {
                b = Nmd(b);
                b = Pmd(a, b);
                return {
                    Wca: b,
                    uy: v5(a, b, (c, d, e) => c.E4.create(d, e)),
                    Fu: v5(a, b, (c, d, e) => c.G4.create(d, e)),
                    zA: v5(a, b, (c, d, e) => c.F4.create(d, e)),
                    KR: v5(a, b, (c, d, e) => c.RGa.create(d, e)),
                    wA: v5(a, b, (c, d, e) => c.$pa.create(d, e)),
                    yA: v5(a, b, (c, d, e) => c.aqa.create(d, e))
                }
            }
            ;
            Rmd = function(a) {
                a.UX && (a.UX(),
                a.UX = null);
                const b = a.props.TSb;
                b.forEach(c => {
                    window.addEventListener(c, a.W6a)
                }
                );
                a.UX = () => {
                    b.forEach(c => {
                        window.removeEventListener(c, a.W6a)
                    }
                    )
                }
            }
            ;
            Vmd = function(a) {
                const b = h5(function(c) {
                    const [{store: d, Ua: e}] = Z4( () => {
                        const f = new Smd
                          , g = new Tmd(f);
                        return {
                            store: f,
                            Ua: g
                        }
                    }
                    );
                    return Y4(Umd, {
                        sV: e.reset,
                        children: Y4(__c.Htc, {
                            Y0b: e,
                            Z0b: d,
                            Vlb: a.Xp.contains(c.url),
                            children: ({Nj: f}) => c.children({
                                Nj: f
                            })
                        })
                    })
                });
                return h5(c => c.BNb && a.lb?.status !== 2 ? Y4(b, {
                    ...c
                }) : c.children({
                    Nj: !1
                }))
            }
            ;
            Wmd = function(a) {
                return p5(function(b) {
                    return Y4("div", {
                        className: "gcYy_A PYuKbg",
                        children: Y4(__c.Ly, {
                            Yga: "both",
                            children: ({width: c, height: d}) => Y4(a.Xl, {
                                fill: b.fill,
                                Nb: c,
                                cc: d,
                                kf: void 0,
                                animation: void 0,
                                sI: !1,
                                ga: void 0,
                                ja: void 0
                            })
                        })
                    })
                })
            }
            ;
            Xmd = function() {
                return p5(function({IGb: a, M9b: b, title: c, Abb: d, Nj: e, className: f, ...g}) {
                    r5( () => {
                        b?.(a)
                    }
                    , [a, b]);
                    return Y4("iframe", {
                        title: c,
                        className: d5(f, {
                            _6ydmWA: e
                        }),
                        ...(d ? {
                            "data-process-id": d
                        } : {}),
                        ...g
                    })
                })
            }
            ;
            Ymd = function(a) {
                const b = a.Fa
                  , c = a.l_
                  , d = e => {
                    e = __c.xp(e);
                    b.ZJ([e], {
                        yo: !0
                    });
                    return b.rQ(e)
                }
                ;
                return p5(function(e) {
                    var f = e.oQa;
                    const g = e.fontWeight
                      , h = e.SJa
                      , k = e.Qc
                      , l = e.SLb
                      , m = e.ariaInvalid
                      , n = e.disabled
                      , p = e.dir
                      , q = e.id
                      , r = e.name
                      , t = e.inputMode
                      , w = e.onBlur
                      , v = e.onFocus
                      , A = e.onChange
                      , B = e.padding
                      , C = e.placeholder
                      , E = e.gtb
                      , I = e.readOnly
                      , J = e.outline
                      , M = e.paddingInlineEnd
                      , O = e.type
                      , R = e.value
                      , S = e.width;
                    e = {
                        boxSizing: e.boxSizing,
                        color: e.Bl,
                        fontSize: e.fontSize,
                        backgroundColor: e.backgroundColor,
                        borderStyle: e.borderStyle,
                        borderRadius: e.borderRadius,
                        borderWidth: e.borderWidth,
                        fontFamily: f && d(f),
                        fontWeight: g && Hr(g),
                        padding: B,
                        paddingInlineEnd: M,
                        outline: J,
                        width: S
                    };
                    [f] = Z4( () => c?.fZb());
                    return Y4("div", {
                        ref: f?.Cm,
                        className: "BHOPhg PYuKbg",
                        children: Y4("input", {
                            "aria-describedby": k,
                            "aria-errormessage": l,
                            "aria-invalid": m,
                            className: d5(["_6Yde8g", E && "sR0SUA"]),
                            disabled: n,
                            dir: p,
                            id: q,
                            name: r,
                            inputMode: t,
                            onBlur: w,
                            onFocus: v,
                            onChange: A,
                            placeholder: C,
                            readOnly: I,
                            type: O,
                            value: R,
                            style: {
                                ...e,
                                "--srRiKA": E,
                                "--oiOG3Q": h?.default,
                                "--oGOcXA": h?.Ei,
                                "--UBd2ow": h?.focus
                            },
                            "data-1p-ignore": !0,
                            "data-bwignore": !0,
                            "data-lpignore": !0,
                            "data-protonpass-ignore": !0,
                            "data-form-type": "other"
                        })
                    })
                })
            }
            ;
            Zmd = function(a, b) {
                if (a || b)
                    return c => {
                        a?.(c);
                        b?.(c)
                    }
            }
            ;
            $md = function() {
                return p5(function({link: a, IB: b, children: c, HFa: d=!0, onClick: e}) {
                    a = a != null && b != null ? b(a) : void 0;
                    return a == null ? c : Y4("a", {
                        ...a,
                        href: a.href,
                        onClick: Zmd(a.onClick, e),
                        style: {
                            textDecoration: d ? "underline" : "none"
                        },
                        children: c
                    })
                })
            }
            ;
            and = function() {
                return () => Y4(__c.BV, {
                    mediaType: "embed",
                    failed: !1
                })
            }
            ;
            bnd = function(a) {
                return p5(function(b) {
                    return Y4("div", {
                        className: "oUJNhQ PYuKbg",
                        children: Y4(a.jh, {
                            text: b.text,
                            animation: void 0,
                            Yc: "middle",
                            oa: void 0,
                            gb: b.gb,
                            Ug: [],
                            writingMode: 1
                        })
                    })
                })
            }
            ;
            cnd = function() {
                return p5(function(a) {
                    return Y4("div", {
                        className: a.className,
                        style: a.style,
                        children: a.children
                    })
                })
            }
            ;
            dnd = function(a) {
                const b = a.Fa
                  , c = a.l_
                  , d = e => {
                    e = __c.xp(e);
                    b.ZJ([e], {
                        yo: !0
                    });
                    return b.rQ(e)
                }
                ;
                return p5(function(e) {
                    var f = e.oQa;
                    const g = e.fontSize
                      , h = e.fontWeight
                      , k = e.SJa
                      , l = e.Qc
                      , m = e.SLb
                      , n = e.ariaInvalid
                      , p = e.disabled
                      , q = e.dir
                      , r = e.id
                      , t = e.name
                      , w = e.onBlur
                      , v = e.onFocus
                      , A = e.onChange
                      , B = e.padding
                      , C = e.paddingInlineEnd
                      , E = e.placeholder
                      , I = e.gtb
                      , J = e.readOnly
                      , M = e.resize
                      , O = e.outline
                      , R = e.rows
                      , S = e.value
                      , Q = e.width
                      , U = e.whiteSpace
                      , X = e.wordBreak;
                    e = {
                        backgroundColor: e.backgroundColor,
                        borderRadius: e.borderRadius,
                        borderStyle: e.borderStyle,
                        borderWidth: e.borderWidth,
                        boxSizing: e.boxSizing,
                        color: e.Bl,
                        fontFamily: f && d(f),
                        fontSize: g,
                        fontWeight: h && Hr(h),
                        outline: O,
                        padding: B,
                        paddingInlineEnd: C,
                        resize: M,
                        whiteSpace: U,
                        width: Q,
                        wordBreak: X
                    };
                    [f] = Z4( () => c?.fZb());
                    return Y4("div", {
                        ref: f?.Cm,
                        className: "BHOPhg PYuKbg",
                        children: Y4("textarea", {
                            "aria-describedby": l,
                            "aria-errormessage": m,
                            "aria-invalid": n,
                            className: d5(["_6Yde8g", I && "sR0SUA"]),
                            disabled: p,
                            dir: q,
                            id: r,
                            name: t,
                            onBlur: w,
                            onFocus: v,
                            onChange: A,
                            placeholder: E,
                            rows: R,
                            readOnly: J,
                            style: {
                                ...e,
                                "--srRiKA": I,
                                "--oiOG3Q": k?.default,
                                "--oGOcXA": k?.Ei,
                                "--UBd2ow": k?.focus
                            },
                            value: S
                        })
                    })
                })
            }
            ;
            fnd = function(a) {
                const b = new end
                  , c = cnd()
                  , d = h5(I => b.wn ? Y4(b.wn, {
                    ...I
                }) : Y4(c, {
                    ...I
                }))
                  , e = h5(I => b.JR ? Y4(b.JR, {
                    ...I
                }) : void 0)
                  , f = Vmd({
                    Xp: a.Xp,
                    lb: a.lb
                })
                  , g = and()
                  , h = $md()
                  , k = bnd({
                    jh: a.jh
                })
                  , l = h5(I => b.JM ? Y4(b.JM, {
                    ...I
                }) : Y4(I.wi, {
                    text: I.text
                }))
                  , m = Wmd({
                    Xl: a.kh
                })
                  , n = h5(I => b.RX ? Y4(b.RX, {
                    ...I
                }) : Y4(m, {
                    ...I
                }))
                  , p = Ymd({
                    Fa: a.Fa,
                    l_: a.l_
                })
                  , q = dnd({
                    Fa: a.Fa,
                    l_: a.l_
                })
                  , r = Xmd()
                  , {Wca: t, uy: w, Fu: v, zA: A, KR: B, wA: C, yA: E} = Qmd({
                    expr: a.expr,
                    nGa: b
                });
                return {
                    R4a: {
                        SGa: f,
                        fHa: g,
                        NX: h,
                        wn: d,
                        JR: e,
                        wi: k,
                        JM: l,
                        ih: m,
                        RX: n,
                        z4: p,
                        eda: q,
                        Wca: t,
                        uy: w,
                        Fu: v,
                        zA: A,
                        KR: B,
                        wA: C,
                        yA: E,
                        UC: r
                    },
                    nGa: b
                }
            }
            ;
            __c.zu.prototype.yCa = ca(38, async function(a) {
                const b = (0,
                __c.ob)()();
                try {
                    return b.r(await b.s(Promise.all(a.map(async c => {
                        const d = (0,
                        __c.ob)()();
                        try {
                            if (c.resource) {
                                var e = d.r(await d.s(this.ec.vva(c.resource)))?.images[0];
                                if (e) {
                                    var f = d.r(await d.s(this.fetchData(e.url)));
                                    return {
                                        assetId: c.bMb,
                                        filename: c.aMb,
                                        data: f
                                    }
                                }
                            }
                        } finally {
                            d.s()
                        }
                    }
                    )))).filter(__c.qa)
                } finally {
                    b.s()
                }
            });
            __c.ufc.prototype.qib = ca(33, function() {});
            __c.GL.prototype.o2 = ca(32, function(a, b) {
                const c = this.Qb.get().pb.get(a);
                b = b?.resolve(this.cells.get());
                a = this.domain.Za().Hma(a, c, b && [b.start, b.end]).build();
                this.sg(a)
            });
            __c.AYb.prototype.o2 = ca(31, function(a, b) {
                this.stream.o2(a, b)
            });
            __c.hob.prototype.Hma = ca(9, function(a, b, c) {
                this.Qb.AL(a, b, c);
                return this
            });
            __c.Opb.prototype.Hma = ca(8, function(a, b, c) {
                this.Za.Hma(a, b, c);
                return this
            });
            __c.gb.prototype.cT = ca(2, function(a, b) {
                this.console.error(...__c.ra(this, "fatal", a, b))
            });
            __c.hb.prototype.cT = ca(1, function(a, b) {
                __c.fb(this, "fatal", a, b)
            });
            __c.SJ.prototype.cT = ca(0, function(a, b) {
                this.Ny.cT(a, b);
                __c.QJ(this, a, "critical", b)
            });
            var gmd = {
                Ib: () => {}
            }
              , w5 = __webpack_require__(1193)
              , z3 = w5.EW
              , $4 = w5.h5
              , x5 = w5.m3
              , g5 = w5.sH
              , u5 = w5.XI;
            v4 = __c.v4 = __webpack_require__(815703).F;
            N4 = __c.N4 = __webpack_require__(929846)._;
            var gnd = __webpack_require__(296713)
              , Y4 = gnd.jsx
              , hnd = gnd.jsxs;
            var y5 = __webpack_require__(978109)
              , ind = y5.Component
              , Omd = y5.createElement
              , p5 = y5.memo
              , Yld = y5.useCallback
              , r5 = y5.useEffect
              , Vld = y5.useLayoutEffect
              , q5 = y5.useMemo
              , f5 = y5.useRef
              , Z4 = y5.useState;
            var ukd = __webpack_require__(601944).A;
            var h5 = __webpack_require__(613814).PA;
            var jnd = __webpack_require__(599515).A;
            var knd = __webpack_require__(321591).A;
            var lnd = __webpack_require__(986728).A;
            var s5 = __webpack_require__(221627).iB;
            var mnd = __webpack_require__
              , nnd = mnd(208463)
              , d5 = mnd.n_x(nnd)();
            var Gld = __webpack_require__(894447).flushSync;
            var Jld = __webpack_require__(35640).createRoot;
            var ond = class {
                constructor(a) {
                    this.ref = a
                }
            }
            ;
            var pnd = class {
                get ref() {
                    return this.box.ref
                }
                set() {
                    throw Error("cannot set unmodifiable box");
                }
                constructor(a) {
                    this.box = a
                }
            }
            ;
            var qnd = class {
                get ref() {
                    return this.box.get()
                }
                constructor(a) {
                    this.box = a
                }
            }
            ;
            var rnd = Symbol.iterator
              , snd = class {
                get size() {
                    return this.cells.size
                }
                get(a) {
                    return this.cells.get(a)?.get()
                }
                has(a) {
                    return this.cells.has(a)
                }
                forEach(a) {
                    for (const [b,c] of this.cells.entries())
                        a(c.get(), b)
                }
                map(a) {
                    const b = [];
                    for (const [c,d] of this.cells.entries())
                        b.push(a(d.get(), c));
                    return b
                }
                every(a) {
                    for (const [b,c] of this.cells.entries())
                        if (!a(c.get(), b))
                            return !1;
                    return !0
                }
                entries() {
                    return this.pj().entries()
                }
                keys() {
                    return this.cells.keys()
                }
                *values() {
                    for (const a of this.cells.values())
                        yield a.get()
                }
                pj() {
                    const a = new Map;
                    for (const [b,c] of this.cells.entries())
                        a.set(b, c.get());
                    return a
                }
                [rnd]() {
                    return this.pj()[Symbol.iterator]()
                }
                constructor(a) {
                    this.cells = new Map(a)
                }
            }
            ;
            var tnd = Symbol.iterator
              , igd = class {
                get ie() {
                    return this.ugc.get()
                }
                get size() {
                    return this.ie.size
                }
                get(a) {
                    return this.ie.get(a)
                }
                has(a) {
                    return this.ie.has(a)
                }
                forEach(a) {
                    this.ie.forEach(a)
                }
                map(a) {
                    return this.ie.map(a)
                }
                every(a) {
                    return this.ie.every(a)
                }
                entries() {
                    return this.ie.entries()
                }
                keys() {
                    return this.ie.keys()
                }
                values() {
                    return this.ie.values()
                }
                pj() {
                    return this.ie.pj()
                }
                [tnd]() {
                    return this.ie[Symbol.iterator]()
                }
                set(a, b) {
                    return this.ie.set(a, b)
                }
                delete(a) {
                    return this.ie.delete(a)
                }
                constructor(a) {
                    this.ugc = a
                }
            }
            ;
            var und = Symbol.iterator
              , vnd = class {
                get size() {
                    return this.ie.size
                }
                get(a) {
                    return this.ie.get(a)
                }
                has(a) {
                    return this.ie.has(a)
                }
                forEach(a) {
                    this.ie.forEach(a)
                }
                map(a) {
                    return this.ie.map(a)
                }
                every(a) {
                    return this.ie.every(a)
                }
                entries() {
                    return this.ie.entries()
                }
                keys() {
                    return this.ie.keys()
                }
                values() {
                    return this.ie.values()
                }
                pj() {
                    return this.ie.pj()
                }
                [und]() {
                    return this.ie[Symbol.iterator]()
                }
                set() {
                    return this.MC()
                }
                delete() {
                    return this.MC()
                }
                MC() {
                    throw Error("dict not modifiable");
                }
                constructor(a) {
                    this.ie = a
                }
            }
            ;
            var wnd, qgd, kgd, xnd, ynd;
            __c.z5 = class {
                map(a, b) {
                    const c = this.get
                      , d = this.set;
                    return new __c.z5( () => a(c()),e => d(b(e)))
                }
                project({get: a, set: b}) {
                    const c = this.get
                      , d = this.set;
                    return new __c.z5( () => a(c()),e => d(b(c(), e)))
                }
                constructor(a, b) {
                    this.get = a;
                    this.set = b
                }
            }
            ;
            wnd = class {
                read(a) {
                    return A3(a) ? a() : a
                }
                computed(a) {
                    const b = z3(a);
                    return () => b.get()
                }
                map(a, b) {
                    return A3(a) ? () => b(a()) : b(a)
                }
                GP(a) {
                    return new __c.z5( () => a.get(),b => a.set(b))
                }
                box(a) {
                    A3(a) ? (a = z3(a),
                    a = new qnd(a)) : a = new ond(a);
                    return new pnd(a)
                }
                list(a) {
                    const b = this.map(a, c => __c.fk(__c.rD(c.map(d => A3(d) ? z3(d) : lgd(d)))));
                    return A3(b) ? __c.rj( () => b()) : b
                }
                ie(a) {
                    const b = this.map(a, c => {
                        c = new Map(Object.entries(c).map( ([d,e]) => {
                            e = A3(e) ? z3(e) : lgd(e);
                            return [d, e]
                        }
                        ));
                        return new vnd(new snd(c))
                    }
                    );
                    return A3(b) ? jgd( () => b()) : b
                }
                constructor() {
                    this.classes = Igd()
                }
            }
            ;
            qgd = a => {
                const b = a.Qj
                  , c = a.bf
                  , d = c.O
                  , e = c.attributes;
                mgd(a.args, d, e);
                return {
                    create: function(f, g) {
                        const h = {};
                        const k = g?.O;
                        g = g?.attributes;
                        if (k)
                            for (const [m,n] of Object.entries(k))
                                u(m in d, "unknown override: '{}'", m),
                                A3(n) ? (l ||= {})[m] = n : h[m] = xnd(n);
                        if (g)
                            for (const [m,n] of Object.entries(g))
                                u(m in e, "unknown override: '{}'", m),
                                h[m] = n instanceof __c.z5 ? n : A3(n) ? {
                                    enumerable: !0,
                                    get: n,
                                    set: kgd
                                } : ynd(n);
                        if (l)
                            return ngd(l, pgd(m => {
                                const n = b(f);
                                Object.defineProperties(n, {
                                    ...h,
                                    ...pf(m, xnd)
                                });
                                return n
                            }
                            ));
                        var l = b(f);
                        Object.defineProperties(l, h);
                        return l
                    }
                }
            }
            ;
            kgd = () => {}
            ;
            xnd = a => ({
                enumerable: !0,
                writable: !1,
                value: a
            });
            ynd = a => ({
                enumerable: !0,
                get: () => a,
                set: kgd
            });
            var B3 = {
                oa: void 0,
                Hd: void 0,
                $c: void 0
            }
              , C3 = {
                top: void 0,
                left: void 0,
                width: void 0,
                height: void 0,
                rotation: void 0,
                ma: void 0,
                Xh: void 0,
                aa: void 0,
                L: void 0,
                link: void 0,
                locked: void 0,
                Od: void 0,
                fg: void 0,
                Pj: void 0,
                La: void 0,
                anchor: void 0,
                animation: void 0
            };
            var A5 = new Map
              , B5 = []
              , E3 = Object.freeze({
                Mg: void 0,
                image: void 0,
                video: void 0,
                Ha: void 0,
                color: void 0,
                ma: 0,
                locked: !0,
                fg: !0,
                Pj: void 0,
                Eb: void 0,
                L: void 0,
                transition: void 0,
                flipX: !1,
                flipY: !1,
                Qa: __c.pT
            })
              , sgd = Object.freeze({
                filter: void 0,
                Um: void 0,
                eb: void 0,
                ma: 0,
                mc: A5,
                La: void 0
            })
              , tgd = Object.freeze({
                Um: void 0,
                mc: A5,
                filter: void 0,
                ma: 0,
                La: void 0,
                eb: Object.freeze({
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                    rotation: 0
                }),
                IA: Object.freeze({
                    zl: void 0,
                    Al: void 0
                }),
                Hd: B5,
                Ah: B5,
                tv: 1,
                trim: void 0,
                autoplay: !0,
                playbackRate: void 0,
                volume: 1
            })
              , vgd = Object.freeze({
                fill: E3,
                stroke: void 0,
                X: 0
            })
              , ugd = Object.freeze({
                weight: 0,
                color: "#000000",
                fill: E3,
                Wc: B5,
                df: !1
            })
              , kjd = Object.freeze({
                "font-weight": void 0,
                "font-style": void 0,
                "font-kerning": void 0,
                "font-feature-liga": void 0,
                "font-feature-clig": void 0,
                "font-feature-calt": void 0,
                "font-size-modifier": void 0,
                "vertical-align": void 0,
                color: void 0,
                "fill-id": void 0,
                decoration: void 0,
                strikethrough: void 0,
                kerning: void 0,
                link: void 0,
                "start-us": void 0,
                "font-family": void 0,
                "font-size": void 0,
                leading: void 0,
                spacing: void 0,
                direction: void 0,
                tracking: void 0,
                "text-transform": void 0,
                "text-align": void 0,
                "head-indent": void 0,
                "list-marker": void 0,
                "list-level": void 0,
                "list-number-set": void 0,
                style: void 0,
                semantics: void 0
            })
              , C5 = Object.freeze({
                top: 0,
                left: 0,
                width: 0,
                height: 0,
                rotation: 0,
                ma: 0,
                Xh: void 0,
                aa: void 0,
                L: void 0,
                transition: void 0,
                oa: B5,
                Hd: B5,
                animation: void 0,
                $c: void 0,
                link: void 0,
                locked: !0,
                Od: void 0,
                fg: !0,
                Pj: void 0,
                La: void 0,
                yda: void 0,
                Ec: B5,
                Nz: A5,
                Zz: A5,
                anchor: void 0,
                De: A5
            })
              , F3 = Object.freeze({
                ...C5,
                type: "rect",
                fill: E3,
                stroke: void 0,
                X: B5,
                Qa: __c.W4b
            })
              , G3 = Object.freeze({
                ...C5,
                type: "shape",
                slice: void 0,
                Pi: void 0,
                xb: B5,
                resizeMode: void 0,
                Qa: __c.$4b
            })
              , wgd = Object.freeze({
                text: Object.freeze({
                    ...jD,
                    stream: vj.rw("\n")
                }),
                Yc: 2,
                zn: [],
                box: Object.freeze({
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                }),
                Eb: void 0,
                Qa: __c.d5b
            })
              , xgd = Object.freeze({
                type: "block",
                minBlockSize: 0
            })
              , ygd = Object.freeze({
                Fb: void 0,
                vertical: void 0,
                Qa: __c.a5b,
                source: Object.freeze({
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                    rotation: 0
                }),
                Wf: void 0,
                Vf: void 0
            })
              , zgd = Object.freeze({
                ...C5,
                type: "text",
                text: Object.freeze({
                    ...jD,
                    stream: vj.rw("\n")
                }),
                Je: void 0,
                placeholder: void 0,
                Ff: 1,
                writingMode: void 0,
                K: void 0,
                P: void 0,
                qs: !1,
                im: void 0,
                wh: void 0,
                Eb: void 0,
                Qa: __c.Z4b
            })
              , Agd = Object.freeze({
                ...C5,
                type: "embed"
            })
              , Ggd = Object.freeze({
                ...C5,
                type: "grid",
                cells: A5,
                layout: Object.freeze({
                    template: B5,
                    fG: B5,
                    Ml: B5,
                    mw: 0,
                    Gx: 0
                }),
                Qa: __c.Y4b
            })
              , Hgd = Object.freeze({
                fill: E3,
                stroke: void 0,
                X: B5
            })
              , Egd = Object.freeze({
                type: "elbowed",
                zg: B5,
                X: 0
            })
              , Fgd = Object.freeze({
                type: "curved",
                depth: 0,
                ou: 0
            })
              , Bgd = Object.freeze({
                marker: void 0,
                anchor: void 0,
                position: void 0,
                Qa: __c.b5b
            })
              , Dgd = Object.freeze({
                text: Object.freeze({
                    ...jD,
                    stream: vj.rw("\n")
                }),
                width: 0,
                height: 0,
                position: .5,
                orientation: 1,
                Ff: 2,
                wh: void 0,
                Eb: void 0,
                Qa: __c.c5b
            })
              , Cgd = Object.freeze({
                ...C5,
                type: "line",
                weight: 2,
                start: Bgd,
                end: Bgd,
                fill: E3,
                geometry: void 0,
                xb: B5,
                color: "#000000",
                Wc: B5,
                df: !1
            });
            N3 = __c.N3 = class {
                static val(a, b) {
                    return {
                        key: a,
                        EQ: 0,
                        Ks: 0,
                        type: b
                    }
                }
                static ref(a, b) {
                    return {
                        key: a,
                        EQ: 0,
                        Ks: 0,
                        type: b
                    }
                }
                static listRef(a, b) {
                    return N3.ref(a, N3.tH(b))
                }
                static tH(a) {
                    return {
                        kind: 8,
                        itemType: a
                    }
                }
                static of(a, b=[]) {
                    const c = new Set;
                    for (const d of Object.values(a))
                        u(!c.has(d.key), "duplicate key: {}", d.key),
                        c.add(d.key);
                    for (const d of b)
                        u(!c.has(d), "reserved key is in use: {}", d),
                        c.add(d);
                    return a
                }
            }
            ;
            N3.of({});
            var Ogd = Object.freeze({
                document: Object.freeze({}),
                C: Object.freeze({})
            });
            var znd = {
                type: Q3(1, "boolean"),
                value: I3(2, S3())
            }
              , And = d4(znd)
              , Bnd = {
                type: Q3(1, "non-negative-double"),
                value: Y3(2, {
                    min: 0
                })
            }
              , Cnd = d4(Bnd)
              , Dnd = {
                type: Q3(1, "double"),
                value: Y3(2)
            }
              , End = d4(Dnd)
              , Fnd = {
                type: Q3(1, "string"),
                value: X3(2)
            }
              , Gnd = d4(Fnd)
              , Hnd = {
                version: Q3(1, 1),
                text: b4(2, "Richtext2")
            }
              , Ind = f4({
                version: void 0
            }, d4(Hnd))
              , Jnd = {
                type: Q3(1, "richtext2"),
                value: N3.ref(2, Ind)
            }
              , Knd = d4(Jnd)
              , Lnd = {
                type: Q3(1, "image_or_video"),
                value: b4(2, "Fill")
            }
              , Mnd = d4(Lnd)
              , Nnd = d4({
                top: P3(1),
                left: P3(2)
            })
              , Ond = {
                type: Q3(1, "point"),
                value: N3.ref(2, Nnd)
            }
              , Pnd = d4(Ond)
              , Qnd = {
                type: Q3(1, "color_or_gradient"),
                value: b4(2, "Fill")
            }
              , Rnd = f4({
                type: void 0
            }, And, Cnd, End, Gnd, Knd, Mnd, Pnd, d4(Qnd));
            var Snd = N3.tH(a4("FontRef"))
              , Tnd = N3.tH(a4("MediaRef"))
              , Und = N3.tH(a4("VideoRef"))
              , Vnd = N3.tH(a4("EmbedRef"))
              , Wnd = {
                fonts: N3.ref(1, Snd),
                media: N3.ref(2, Tnd),
                xd: N3.ref(3, Und),
                embeds: N3.ref(5, Vnd)
            }
              , Xnd = d4(Wnd)
              , Ynd = {
                ref: b4(2, "BlueprintRef"),
                resources: J3(3, Xnd)
            }
              , Znd = d4(Ynd)
              , $nd = Q3(1, "resource")
              , aod = d4({
                domain: $nd,
                resource: K3(2, Znd),
                bf: L3(3, c4(Rnd))
            })
              , bod = {
                n9a: O3(1),
                ko: N3.ref(2, aod)
            }
              , cod = {
                C: N3.of(bod)
            };
            var dod = a => {
                const b = new Map;
                a.Na.forEach(c => {
                    switch (c.type) {
                    case "text":
                        c.Qa.text && b.set(c.Qa.text, {
                            type: "richtext2",
                            value: {
                                version: 1,
                                text: c.text
                            }
                        });
                        c.Qa.K && b.set(c.Qa.K, {
                            type: "non-negative-double",
                            value: c.K
                        });
                        c.Qa.P && b.set(c.Qa.P, {
                            type: "non-negative-double",
                            value: c.P
                        });
                        break;
                    case "shape":
                    case "line":
                        c.xb.forEach(d => {
                            d.Qa.text && b.set(d.Qa.text, {
                                type: "richtext2",
                                value: {
                                    version: 1,
                                    text: d.text
                                }
                            })
                        }
                        );
                        break;
                    case "rect":
                    case "chart":
                    case "grid":
                        break;
                    default:
                        throw Error(`Element type: ${c.type} should not be blueprintable`);
                    }
                }
                );
                return b
            }
            ;
            var Chd = {
                Xd: () => ({
                    suc({n9a: a, wt: b, version: c, source: d, ia: e}, f, g) {
                        g = g && {
                            fonts: h4("font", g.fonts),
                            media: h4("media", g.media),
                            xd: h4("video", g.xd),
                            embeds: h4("embed", g.embeds)
                        };
                        var h = [...d.variables.keys()];
                        const k = dod(d);
                        if (d.variables.size > 0)
                            if (e?.bf) {
                                d = e.bf;
                                e = new Map;
                                for (l of h)
                                    (h = d.get(l) ?? k.get(l)) && e.set(l, h);
                                var l = e
                            } else
                                l = k;
                        else
                            l = void 0;
                        return {
                            data: {
                                C: {
                                    n9a: a,
                                    ko: {
                                        domain: "resource",
                                        resource: {
                                            ref: {
                                                type: "blueprint",
                                                id: b,
                                                version: c
                                            },
                                            resources: g
                                        },
                                        bf: l
                                    }
                                },
                                document: {}
                            },
                            M: f
                        }
                    }
                }),
                Yd: g4(cod)
            };
            var eod = c4(Rnd)
              , fod = {
                type: Q3(1, "instance"),
                bf: N3.ref(2, eod)
            }
              , god = f4({
                type: void 0
            }, d4(fod))
              , hod = {
                ref: b4(1, "BlueprintEntityRef"),
                Yb: N3.ref(2, god)
            }
              , iod = {
                ko: N3.ref(1, d4(hod))
            }
              , jod = {
                C: N3.of(iod)
            };
            var Dhd = {
                Xd: ({xt: a}) => ({
                    xuc({wt: b}) {
                        const c = y(a?.Ogb(b), `No blueprint found in the document for blueprintId: ${b}`);
                        return {
                            data: {
                                C: {
                                    ko: {
                                        ref: {
                                            type: "document-blueprint",
                                            id: b
                                        },
                                        Yb: {
                                            type: "instance",
                                            bf: dod(c.element)
                                        }
                                    }
                                },
                                document: {}
                            },
                            M: {
                                width: c.element.K,
                                height: c.element.P
                            }
                        }
                    }
                }),
                Yd: g4(jod)
            };
            var kod = new RegExp(/^mailto:(?!$|\/\/$)\S+$|^(https?|ftp|tel|sms|shortcuts):(\/\/|[^/])[^ ]+(\/|$)|^[^: ]+(\/|$)|^[\w.]+:\d+(\/|$)/i)
              , lod = {
                label: b4(1, "Richtext2"),
                link: X3(2, kod),
                background: b4(3, "Fill"),
                X: V3(4, {
                    min: 0,
                    max: 100
                }),
                border: L3(5, a4("Stroke"))
            }
              , mod = {
                C: N3.of(lod)
            };
            var Ehd = {
                Xd: a => ({
                    createDefault(b) {
                        var c = a.Qua?.fvc ?? Yh.vc["font-family"];
                        c = {
                            ...(b?.attrs ?? {}),
                            "font-family": b?.attrs?.["font-family"] ?? c,
                            "font-size": b?.attrs?.["font-size"] ?? 20,
                            color: b?.attrs?.color ?? "#ffffff",
                            "text-align": b?.attrs?.["text-align"] ?? "center"
                        };
                        return {
                            data: {
                                C: {
                                    label: {
                                        ...jD,
                                        stream: vj.rb().attrs(c).ib(b?.label ?? L("4sGMlw")).ib("\n").build()
                                    },
                                    link: b?.link,
                                    background: b?.background ?? {
                                        ...QE,
                                        color: "#0ba84a"
                                    },
                                    X: b?.X ?? 25,
                                    border: b?.border
                                },
                                document: {}
                            },
                            M: b?.M ?? {
                                width: 300,
                                height: 50
                            }
                        }
                    }
                }),
                Yd: g4(mod)
            };
            var nod = "normal thin extralight light medium semibold bold ultrabold heavy".split(" "), ood = N3, pod = ood.of, qod = N3, rod = qod.of, sod = b4(1, "EmbedRef"), tod, uod = d4({
                textContent: X3(1),
                background: J3(5, a4("Fill")),
                color: J3(6, a4("Fill")),
                fontFamily: Mgd(4, {
                    type: void 0
                }, d4({
                    type: Q3(1, 1),
                    fontFamily: R3(2)
                }), d4({
                    type: Q3(1, 2),
                    fontFamily: b4(2, "FontRef")
                })),
                fontWeight: $3(7, ...nod),
                fontStyle: $3(8, "normal", "italic"),
                fontSize: Y3(11),
                letterSpacing: Y3(12),
                lineHeight: Y3(13),
                St: Mgd(9, {
                    type: void 0
                }, d4({
                    type: Q3(1, 1),
                    src: R3(2)
                }), d4({
                    type: Q3(1, 2),
                    media: b4(2, "MediaRef")
                }), d4({
                    type: Q3(1, 3),
                    fill: b4(2, "Fill")
                })),
                La: X3(10)
            }), xod, Fhd;
            tod = N3.ref(2, c4(uod));
            var vod, wod = d4({
                selector: R3(1),
                operation: Kgd(2, {
                    type: void 0
                }, d4({
                    type: Q3(1, 1),
                    color: R3(2)
                }), d4({
                    type: Q3(1, 2),
                    Ia: T3(2),
                    Oa: T3(3)
                }), d4({
                    type: Q3(1, 3),
                    vE: b4(2, "MediaRef")
                }), d4({
                    type: Q3(1, 4),
                    rotation: T3(2)
                }), d4({
                    type: Q3(1, 5),
                    scale: T3(2)
                }), d4({
                    type: Q3(1, 6),
                    html: b4(2, "Richtext2")
                }), d4({
                    type: Q3(1, 7),
                    href: X3(2)
                }), d4({
                    type: Q3(1, 8),
                    order: T3(2)
                }))
            });
            vod = J3(6, N3.tH(wod));
            xod = rod.call(qod, {
                nLa: sod,
                config: tod,
                oT: vod
            });
            __c.yod = g4({
                C: pod.call(ood, {
                    Jy: L3(1, d4(xod))
                })
            });
            Fhd = {
                Doc: {
                    Ync: 1,
                    Zqc: 2,
                    Gpc: 3,
                    nqc: 4,
                    Dqc: 5,
                    mqc: 6,
                    spc: 7,
                    lqc: 8
                },
                Xoc: {
                    MJb: 1,
                    Toc: 2
                },
                Mpc: {
                    MJb: 1,
                    Fpc: 2,
                    FILL: 3
                },
                Hqc: nod,
                Yd: __c.yod
            };
            var zod;
            zod = class {
            }
            ;
            __c.Aod = class extends zod {
                map(a, b) {
                    b = this.xX(a.textContent, b);
                    b = this.tR(a.background, b);
                    b = this.uR(a.color, b);
                    b = this.uGb(a.fontFamily, b);
                    b = this.wGb(a.fontWeight, b);
                    b = this.vGb(a.fontStyle, b);
                    b = this.wca(a.fontSize, b);
                    b = this.vX(a.letterSpacing, b);
                    b = this.wX(a.lineHeight, b);
                    b = this.vR(a.St, b);
                    b = this.tX(a.La, b);
                    b = this.yca(a.left, b);
                    b = this.Aca(a.top, b);
                    b = this.Cca(a.width, b);
                    b = this.xca(a.height, b);
                    b = this.zca(a.rotation, b);
                    return b = this.Bca(a.visibility, b)
                }
            }
            ;
            var Rgd = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            };
            var Bod = class {
            }
              , Cod = class extends Bod {
                sR(a) {
                    this.tR(a.background);
                    this.uR(a.color);
                    this.vca(a);
                    this.vR(a.St)
                }
            }
              , Gkd = class extends Bod {
                map(a, b) {
                    b = this.xX(a.textContent, b);
                    b = this.tR(a.background, b);
                    b = this.uR(a.color, b);
                    b = this.vca(a, b);
                    b = this.wca(a.fontSize, b);
                    b = this.vX(a.letterSpacing, b);
                    b = this.wX(a.lineHeight, b);
                    b = this.vR(a.St, b);
                    b = this.tX(a.La, b);
                    b = this.yca(a.left, b);
                    b = this.Aca(a.top, b);
                    b = this.Cca(a.width, b);
                    b = this.xca(a.height, b);
                    b = this.zca(a.rotation, b);
                    return b = this.Bca(a.visibility, b)
                }
            }
              , Dod = {
                100: "thin",
                200: "extralight",
                300: "light",
                400: "normal",
                500: "medium",
                600: "semibold",
                700: "bold",
                800: "ultrabold",
                900: "heavy",
                normal: "normal",
                bold: "bold"
            }
              , Ygd = class extends __c.Aod {
                xX(a, b) {
                    return {
                        ...b,
                        textContent: a
                    }
                }
                tR(a, b) {
                    a ? a.startsWith("canva://") ? (a = Xgd(a),
                    x(a.type === 1),
                    a = {
                        ...QE,
                        image: {
                            ...__c.aG,
                            eb: void 0,
                            media: {
                                type: "RESOLVED",
                                ...a.media
                            }
                        }
                    }) : a = Wgd(a) : a = void 0;
                    return {
                        ...b,
                        background: a
                    }
                }
                uR(a, b) {
                    return {
                        ...b,
                        color: a ? Wgd(a) : void 0
                    }
                }
                uGb(a, b) {
                    a != null ? /^Y[A-Za-z0-9_-]{10},\d+$/i.test(a) ? (a = __c.xp(a),
                    a = {
                        type: 1,
                        fontFamily: {
                            id: a.id,
                            version: a.version
                        }
                    }) : a = {
                        type: 2,
                        fontFamily: a
                    } : a = void 0;
                    return {
                        ...b,
                        fontFamily: a
                    }
                }
                wGb(a, b) {
                    if (a) {
                        {
                            const c = Dod[a];
                            if (c != null)
                                a = c;
                            else
                                throw Error(`Unsupported fontWeight: ${a}`);
                        }
                    } else
                        a = void 0;
                    return {
                        ...b,
                        fontWeight: a
                    }
                }
                vGb(a, b) {
                    if (a) {
                        if (a !== "normal" && a !== "italic")
                            throw Error(`Unsupported fontStyle: ${a}`);
                    } else
                        a = void 0;
                    return {
                        ...b,
                        fontStyle: a
                    }
                }
                wca(a, b) {
                    return {
                        ...b,
                        fontSize: a
                    }
                }
                vX(a, b) {
                    return {
                        ...b,
                        letterSpacing: a == null ? void 0 : Math.min(.8, Math.max(-.2, a))
                    }
                }
                wX(a, b) {
                    return {
                        ...b,
                        lineHeight: a == null ? void 0 : Math.min(2.5, Math.max(.5, a))
                    }
                }
                vR(a, b) {
                    return {
                        ...b,
                        St: a != null ? Xgd(a) : void 0
                    }
                }
                tX(a, b) {
                    return {
                        ...b,
                        La: a
                    }
                }
                yca(a, b) {
                    return {
                        ...b,
                        left: a
                    }
                }
                Aca(a, b) {
                    return {
                        ...b,
                        top: a
                    }
                }
                Cca(a, b) {
                    return {
                        ...b,
                        width: a
                    }
                }
                xca(a, b) {
                    return {
                        ...b,
                        height: a
                    }
                }
                zca(a, b) {
                    return {
                        ...b,
                        rotation: a == null ? void 0 : Tgd(a)
                    }
                }
                Bca(a, b) {
                    return a === "hidden" ? {
                        ...b,
                        visibility: "hidden"
                    } : {
                        ...b,
                        visibility: void 0
                    }
                }
            }
            ;
            var Eod = class extends Gkd {
                xX(a, b) {
                    return {
                        ...b,
                        textContent: a
                    }
                }
                tR(a, b) {
                    return {
                        ...b,
                        background: a
                    }
                }
                uR(a, b) {
                    return {
                        ...b,
                        color: a
                    }
                }
                vca({fontFamily: a, fontWeight: b, fontStyle: c, fontSize: d}, e) {
                    if (a != null)
                        a: switch (a.type) {
                        case 1:
                            a = {
                                type: 2,
                                fontFamily: {
                                    type: "font",
                                    id: a.fontFamily.id,
                                    version: a.fontFamily.version
                                }
                            };
                            break a;
                        case 2:
                            a = {
                                type: 1,
                                fontFamily: a.fontFamily
                            };
                            break a;
                        default:
                            throw new z(a);
                        }
                    else
                        a = void 0;
                    return {
                        ...e,
                        fontFamily: a,
                        fontWeight: b,
                        fontStyle: c,
                        fontSize: d
                    }
                }
                wca(a, b) {
                    return {
                        ...b,
                        fontSize: a
                    }
                }
                vX(a, b) {
                    return {
                        ...b,
                        letterSpacing: a == null ? void 0 : a * 1E3
                    }
                }
                wX(a, b) {
                    return {
                        ...b,
                        lineHeight: a
                    }
                }
                vR(a, b) {
                    if (a)
                        a: switch (a.type) {
                        case 1:
                            a = {
                                type: 3,
                                fill: {
                                    ...QE,
                                    image: {
                                        ...__c.aG,
                                        eb: void 0,
                                        media: {
                                            type: "RESOLVED",
                                            id: a.media.id,
                                            version: a.media.version
                                        }
                                    }
                                }
                            };
                            break a;
                        case 2:
                            a = {
                                type: 1,
                                src: a.media
                            };
                            break a;
                        default:
                            throw new z(a);
                        }
                    else
                        a = void 0;
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
                yca(a, b) {
                    return b
                }
                Aca(a, b) {
                    return b
                }
                Cca(a, b) {
                    return b
                }
                xca(a, b) {
                    return b
                }
                zca(a, b) {
                    return b
                }
                Bca(a, b) {
                    return b
                }
            }
            ;
            var Ohd;
            __c.Fod = () => ({
                vuc(a) {
                    var b;
                    if (b = a) {
                        b = {
                            type: "embed",
                            id: a.Ltc,
                            version: 0
                        };
                        if (a.config) {
                            var c = a.config;
                            const d = new Map
                              , e = new Eod;
                            for (const [f,g] of c.entries())
                                d.set(f, e.map(Zgd(g), {
                                    textContent: void 0,
                                    background: void 0,
                                    color: void 0,
                                    fontFamily: void 0,
                                    fontWeight: void 0,
                                    fontStyle: void 0,
                                    fontSize: void 0,
                                    letterSpacing: void 0,
                                    lineHeight: void 0,
                                    St: void 0,
                                    La: void 0
                                }));
                            c = d
                        } else
                            c = new Map;
                        b = {
                            nLa: b,
                            config: c,
                            oT: a.oT ? a.oT.map(Qgd) : void 0
                        }
                    }
                    return {
                        data: {
                            C: {
                                Jy: b
                            },
                            document: {}
                        },
                        M: {
                            width: 1366,
                            height: 768
                        }
                    }
                }
            });
            Ohd = {
                Xd: __c.Fod
            };
            var l4 = M3(/^#[0-9a-f]{6}$/);
            var God = {
                ...k4(),
                Ga: H3(4, W3(l4)),
                height: V3(7, {
                    min: 1
                }),
                width: V3(8, {
                    min: 1
                }),
                ...m4(5),
                ne: H3(9, l4),
                ...n4(10),
                label: b4(6, "Richtext2")
            }
              , Hod = {
                C: N3.of(God)
            }
              , Iod = g4(Hod)
              , Jod = () => ({
                createDefault() {
                    const a = {
                        ...jD,
                        stream: vj.rb().attrs({
                            color: "#ffffff",
                            "font-size": 8
                        }).ib("This text came from appData\n").build()
                    };
                    return {
                        data: {
                            C: {
                                borderColor: "#396baa",
                                Ga: "#00c4cc #17a0d8 #2d7be3 #4457ef #5a32fa #6330f6 #6c2ef1 #742ced #7d2ae8".split(" "),
                                ne: "#ffffff",
                                Kv: o4({
                                    size: 4
                                }),
                                label: a,
                                Pd: 0,
                                vea: [],
                                X: 0,
                                width: 100,
                                height: 100
                            },
                            document: {}
                        },
                        M: {
                            width: 100,
                            height: 100
                        }
                    }
                }
            })
              , lhd = {
                Xd: Jod,
                Yd: Iod
            };
            var Kod = {
                ne: H3(1, l4),
                ...n4(2),
                mkb: H3(3, S3())
            }
              , Lod = {
                ne: I3(1, l4)
            }
              , Mod = {
                document: N3.of(Kod),
                C: Lod
            }
              , uhd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                document: {
                                    mkb: !1,
                                    ne: "#000000",
                                    Kv: o4({
                                        lineHeight: 1250,
                                        size: 12,
                                        textAlign: "center"
                                    })
                                },
                                C: {
                                    ne: void 0
                                }
                            },
                            M: {
                                width: 12,
                                height: 15
                            }
                        }
                    }
                }),
                Yd: g4(Mod)
            };
            var Nod = {
                AAb: b4(1, "Richtext2"),
                bnb: b4(2, "Richtext2"),
                Y9a: b4(3, "Richtext2"),
                $9a: b4(4, "Richtext2")
            }
              , Ood = {
                C: N3.of(Nod),
                document: N3.of({})
            }
              , vhd = {
                Xd: () => ({
                    createDefault() {
                        const a = p4("hi shape\n", {
                            color: "#713af1",
                            "font-size": 8,
                            "text-align": "center"
                        })
                          , b = p4("ok ?\n", {
                            color: "#281caf",
                            "font-size": 3
                        })
                          , c = p4("cell A\n", {
                            color: "#ff5555",
                            "font-size": 12
                        })
                          , d = p4("cell B\n", {
                            color: "#f32cf3",
                            "font-size": 12
                        });
                        return {
                            data: {
                                C: {
                                    AAb: a,
                                    bnb: b,
                                    Y9a: c,
                                    $9a: d
                                },
                                document: {}
                            },
                            M: {
                                width: 100,
                                height: 100
                            }
                        }
                    }
                }),
                Yd: g4(Ood)
            };
            var whd = {
                Xd: Jod,
                Yd: Iod
            };
            var Pod = {
                C: {
                    ffb: b4(1, "Fill"),
                    TBb: b4(2, "Fill")
                }
            }
              , xhd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {
                                    ffb: {
                                        ...QE,
                                        color: "#4660d9",
                                        Mg: !0
                                    },
                                    TBb: {
                                        ...QE,
                                        color: "#ff0000"
                                    }
                                },
                                document: {}
                            },
                            M: {
                                width: 200,
                                height: 100
                            }
                        }
                    }
                }),
                Yd: g4(Pod)
            };
            var Qod = {
                C: N3.of({})
            }
              , yhd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {},
                                document: {}
                            },
                            M: {
                                width: 100,
                                height: 100
                            }
                        }
                    }
                }),
                Yd: g4(Qod)
            };
            var Rod = d4({
                text: R3(1),
                x: T3(2),
                y: T3(3),
                width: T3(4),
                height: T3(5),
                color: R3(6)
            })
              , Sod = {
                type: Q3(1, 1),
                element: b4(2, "TextElement")
            }
              , Tod = d4(Sod)
              , Uod = {
                type: Q3(1, 2),
                element: b4(2, "RectElement")
            }
              , Vod = d4(Uod)
              , Wod = {
                type: Q3(1, 3),
                element: b4(2, "ShapeElement")
            }
              , Xod = f4({
                type: void 0
            }, Tod, Vod, d4(Wod))
              , Yod = {
                Dy: N3.listRef(1, Rod),
                elements: N3.listRef(2, Xod)
            }
              , Zod = {
                C: N3.of(Yod)
            }
              , zhd = {
                eoc: 1080,
                foc: 1920,
                Poc: {
                    TEXT: 1,
                    jqc: 2,
                    SHAPE: 3
                },
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {
                                    Dy: [{
                                        text: "rect",
                                        x: 160,
                                        y: 140,
                                        width: 480,
                                        height: 320,
                                        color: "#4A90D9"
                                    }, {
                                        text: "text",
                                        x: 720,
                                        y: 280,
                                        width: 380,
                                        height: 240,
                                        color: "#F5A623"
                                    }, {
                                        text: "shape",
                                        x: 1220,
                                        y: 180,
                                        width: 420,
                                        height: 280,
                                        color: "#7ED321"
                                    }],
                                    elements: []
                                },
                                document: {}
                            },
                            M: {
                                width: 1920,
                                height: 1080
                            }
                        }
                    }
                }),
                Yd: g4(Zod)
            };
            var $od = {
                rects: N3.listRef(1, d4({
                    color: R3(3),
                    left: T3(4),
                    top: T3(5),
                    width: T3(6),
                    height: T3(7),
                    rotation: T3(8),
                    link: X3(9)
                }))
            }
              , apd = {
                C: N3.of($od)
            }
              , Ahd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {
                                    rects: [{
                                        color: "#e74c3c",
                                        left: 5,
                                        top: 5,
                                        width: 30,
                                        height: 30,
                                        rotation: 0,
                                        link: void 0
                                    }, {
                                        color: "#3498db",
                                        left: 60,
                                        top: 5,
                                        width: 30,
                                        height: 30,
                                        rotation: 0,
                                        link: void 0
                                    }, {
                                        color: "#2ecc71",
                                        left: 5,
                                        top: 60,
                                        width: 30,
                                        height: 30,
                                        rotation: 0,
                                        link: void 0
                                    }, {
                                        color: "#f39c12",
                                        left: 60,
                                        top: 60,
                                        width: 30,
                                        height: 30,
                                        rotation: 0,
                                        link: void 0
                                    }]
                                },
                                document: {}
                            },
                            M: {
                                width: 100,
                                height: 100
                            }
                        }
                    }
                }),
                Yd: g4(apd)
            };
            var bpd = {
                label: b4(1, "Richtext2"),
                Nib: b4(2, "Richtext2"),
                UBb: b4(3, "TextAttributes"),
                LXa: V3(4, {
                    min: 0,
                    max: 100
                }),
                K9: R3(5)
            }
              , cpd = {
                C: N3.of(bpd)
            }
              , Bhd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {
                                    label: $gd("Goal tracker", {
                                        color: "#1800ad",
                                        "font-size": 13,
                                        "font-weight": "bold"
                                    }),
                                    Nib: $gd("Build one of the most valuable companies in the world", {
                                        color: "#1800ad",
                                        "font-size": 20,
                                        "font-weight": "bold"
                                    }),
                                    UBb: {
                                        ...Yh.vc,
                                        color: "#1800ad",
                                        "font-size": 18,
                                        "font-weight": "bold"
                                    },
                                    LXa: 1,
                                    K9: "#1800ad"
                                },
                                document: {}
                            },
                            M: {
                                width: 420,
                                height: 260
                            }
                        }
                    }
                }),
                Yd: g4(cpd)
            };
            var dpd = {
                C: N3.of({
                    color: H3(1, l4),
                    ...m4(2),
                    width: V3(3, {
                        min: 0
                    }),
                    height: V3(4, {
                        min: 0
                    }),
                    h7b: R3(5)
                })
            }
              , mhd = {
                Xd: () => ({
                    aRb(a, b) {
                        return {
                            data: {
                                C: {
                                    color: a,
                                    borderColor: b,
                                    width: 100,
                                    height: 100,
                                    h7b: "Diamond Heart"
                                },
                                document: {}
                            },
                            M: {
                                width: 100,
                                height: 100
                            }
                        }
                    }
                }),
                Yd: g4(dpd)
            };
            var epd = {
                color: H3(1, l4),
                ...m4(2),
                tkb: e4(3, k4()),
                Kab: e4(4, k4()),
                Zpb: e4(5, k4()),
                c9a: e4(6, k4()),
                S8a: e4(7, k4())
            }
              , fpd = {
                C: N3.of(epd)
            }
              , D5 = () => ({
                vea: [],
                Pd: 1,
                X: 0
            })
              , nhd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {
                                    color: "#ffa500",
                                    borderColor: "#396baa",
                                    tkb: D5(),
                                    Kab: D5(),
                                    Zpb: D5(),
                                    c9a: D5(),
                                    S8a: D5()
                                },
                                document: {}
                            },
                            M: {
                                width: 400,
                                height: 300
                            }
                        }
                    }
                }),
                Yd: g4(fpd)
            };
            var gpd = {
                C: N3.of({})
            }
              , ohd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {},
                                document: {}
                            },
                            M: {
                                width: 100,
                                height: 100
                            }
                        }
                    }
                }),
                Yd: g4(gpd)
            };
            var hpd = {
                C: N3.of({
                    Lz: H3(1, l4),
                    accentColor: H3(2, l4),
                    JTa: H3(3, S3())
                })
            }
              , phd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {
                                    Lz: "#2563eb",
                                    accentColor: "#7faa00",
                                    JTa: !0
                                },
                                document: {}
                            },
                            M: {
                                width: 300,
                                height: 600
                            }
                        }
                    },
                    aRb(a, b) {
                        return {
                            data: {
                                C: {
                                    Lz: a,
                                    accentColor: b,
                                    JTa: !0
                                },
                                document: {}
                            },
                            M: {
                                width: 300,
                                height: 600
                            }
                        }
                    }
                }),
                Yd: g4(hpd)
            };
            var ipd = {
                C: N3.of({
                    title: R3(1),
                    O2: H3(2, l4),
                    J0: H3(3, l4),
                    SZ: H3(4, l4),
                    OBb: R3(5),
                    Jpb: R3(6),
                    Zfb: R3(7)
                }, [8, 9, 10])
            }
              , qhd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {
                                    title: "Mood Check",
                                    O2: "#ff5252",
                                    J0: "#ffda79",
                                    SZ: "#78e08f",
                                    OBb: "\ud83d\ude14",
                                    Jpb: "\ud83d\ude10",
                                    Zfb: "\ud83d\ude04"
                                },
                                document: {}
                            },
                            M: {
                                width: 400,
                                height: 200
                            }
                        }
                    }
                }),
                Yd: g4(ipd)
            };
            var jpd = {
                ...k4(),
                ...m4(4),
                title: R3(5),
                y9a: b4(6, "Fill"),
                A9a: b4(7, "Fill"),
                C9a: b4(8, "Fill"),
                D9a: H3(9, l4)
            }
              , kpd = {
                C: N3.of(jpd)
            }
              , rhd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {
                                    title: "Subscribe",
                                    D9a: "#ffffff",
                                    y9a: {
                                        ...QE,
                                        color: "#5271ff"
                                    },
                                    A9a: {
                                        ...QE,
                                        color: "#4e6bf2"
                                    },
                                    C9a: {
                                        ...QE,
                                        color: "#4660d9"
                                    },
                                    Pd: 0,
                                    vea: [],
                                    borderColor: "#396baa",
                                    X: 30
                                },
                                document: {}
                            },
                            M: {
                                width: 400,
                                height: 200
                            }
                        }
                    }
                }),
                Yd: g4(kpd)
            };
            var lpd = {
                text: R3(1),
                kra: R3(2),
                color: H3(3, l4),
                ne: H3(4, l4),
                ...n4(5)
            }
              , mpd = {
                C: N3.of(lpd)
            }
              , shd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {
                                    text: "[Add Text]",
                                    kra: "[Your name]",
                                    color: "#fdf9b4",
                                    ne: "#000000",
                                    Kv: o4({
                                        size: 8
                                    })
                                },
                                document: {}
                            },
                            M: {
                                width: 100,
                                height: 100
                            }
                        }
                    }
                }),
                Yd: g4(mpd)
            };
            var npd = {
                Khb: R3(1),
                Q8a: R3(2),
                Jhb: b4(3, "Fill"),
                P8a: b4(4, "Fill"),
                X: V3(5),
                ...n4(6)
            }
              , opd = {
                C: N3.of(npd)
            }
              , thd = {
                Xd: () => ({
                    createDefault() {
                        return {
                            data: {
                                C: {
                                    Khb: "When do kookaburras 'laugh' the most?",
                                    Q8a: "Dawn and dusk",
                                    Jhb: {
                                        ...QE,
                                        color: "#ffbd59"
                                    },
                                    P8a: {
                                        ...QE,
                                        color: "#7ed957"
                                    },
                                    X: 20,
                                    Kv: o4({
                                        fontWeight: "bold",
                                        size: 16,
                                        textAlign: "center"
                                    })
                                },
                                document: {}
                            },
                            M: {
                                width: 400,
                                height: 200
                            }
                        }
                    }
                }),
                Yd: g4(opd)
            };
            var ppd = [1, 2, 3, 4, 5, 6]
              , qpd = [1, 2, 3, 4, 5, 6, 7, 8, 9]
              , rpd = [1, 2, 3, 4]
              , spd = {
                type: Q3(1, "uninitialized"),
                FJ: U3(2, ...ppd),
                YZ: U3(3, ...qpd),
                ox: L3(4, a4("MediaRef")),
                margin: Z3(5, {
                    min: 0,
                    max: 10
                }),
                Wga: $3(6, ...rpd),
                gka: Z3(7, {
                    min: 1,
                    max: 100
                })
            }
              , tpd = d4(spd)
              , upd = {
                type: Q3(1, "initialized"),
                yYa: O3(2),
                Rfb: O3(3, /^https:\/\/www\.canvaqr(-(dev|staging))?\.(com|cn)\/R[\w-]{9}$/),
                vQa: b4(4, "Fill"),
                eea: b4(5, "Fill"),
                YZ: U3(6, ...qpd),
                FJ: U3(7, ...ppd),
                ox: L3(8, a4("MediaRef")),
                margin: Z3(9, {
                    min: 0,
                    max: 10
                }),
                Wga: $3(10, ...rpd),
                gka: Z3(11, {
                    min: 1,
                    max: 100
                })
            }
              , vpd = {
                xYa: Lgd(1, {
                    type: void 0
                }, tpd, d4(upd))
            }
              , wpd = {
                C: N3.of(vpd)
            }
              , Khd = {
                uoc: {
                    LJb: 1,
                    FJb: 2,
                    RHb: 3,
                    coc: 4,
                    STAR: 5,
                    cpc: 6
                },
                Qoc: {
                    qpc: 1,
                    Dpc: 2,
                    Q: 3,
                    bpc: 4
                },
                Uoc: {
                    LJb: 1,
                    FJb: 2,
                    RHb: 3,
                    rqc: 4,
                    pqc: 5,
                    qqc: 6,
                    oqc: 7,
                    Eqc: 8,
                    Ypc: 9
                },
                iqc: {
                    brc: "uninitialized",
                    ipc: "initialized"
                },
                Yd: g4(wpd)
            };
            var Rhd = {
                Xd: a => ({
                    Kuc(b) {
                        return {
                            data: {
                                C: {
                                    xYa: {
                                        type: "uninitialized",
                                        YZ: b.YZ,
                                        FJ: b.FJ,
                                        ox: b.ox,
                                        margin: void 0,
                                        Wga: void 0,
                                        gka: void 0
                                    }
                                },
                                document: {}
                            },
                            M: {
                                width: 200,
                                height: 200
                            }
                        }
                    },
                    Cuc(b) {
                        const c = y(a.faa, "qrCodeDomain is required to create an initialized QR code widget");
                        return {
                            data: {
                                C: {
                                    xYa: {
                                        type: "initialized",
                                        yYa: b.yYa,
                                        Rfb: `${c}/${b.yYa}`,
                                        vQa: b.vQa ?? {
                                            ...QE,
                                            color: "#000000"
                                        },
                                        eea: b.eea ?? {
                                            ...QE,
                                            color: "#ffffff"
                                        },
                                        YZ: b.YZ,
                                        FJ: b.FJ,
                                        ox: b.ox,
                                        margin: void 0,
                                        Wga: void 0,
                                        gka: void 0
                                    }
                                },
                                document: {}
                            },
                            M: {
                                width: 200,
                                height: 200
                            }
                        }
                    }
                })
            };
            var xpd = {
                type: Q3(46, "text2"),
                text: b4(2423, "Richtext2")
            }
              , ypd = f4({
                type: void 0
            }, d4(xpd))
              , zpd = {
                id: X3(35),
                YTa: Y3(37),
                label: N3.ref(38, ypd),
                mP: $3(2430, "c", "u"),
                X: Y3(29),
                required: I3(2331, S3())
            }
              , Apd = {
                id: X3(35),
                label: N3.ref(38, ypd)
            }
              , Bpd = d4(Apd)
              , Cpd = {
                type: Q3(46, "r")
            }
              , Dpd = d4(Cpd)
              , Epd = {
                type: Q3(46, "p")
            }
              , Fpd = d4(Epd)
              , Gpd = {
                type: Q3(46, "q")
            }
              , Hpd = f4({
                type: void 0
            }, Dpd, Fpd, d4(Gpd))
              , Ipd = {
                ...zpd,
                type: Q3(46, "select"),
                variant: J3(48, Hpd),
                options: N3.listRef(41, Bpd),
                U9: Z3(39, {
                    min: 0
                }),
                WLa: H3(1549, W3(M3()))
            }
              , Jpd = d4(Ipd)
              , Kpd = {
                type: Q3(46, "e")
            }
              , Lpd = d4(Kpd)
              , Mpd = {
                type: Q3(46, "f"),
                jV: V3(40, {
                    min: 1
                })
            }
              , Npd = f4({
                type: void 0
            }, Lpd, d4(Mpd))
              , Opd = {
                ...zpd,
                type: Q3(46, "text"),
                variant: N3.ref(48, Npd),
                placeholder: X3(42)
            }
              , Ppd = d4(Opd)
              , Qpd = {
                type: Q3(46, "a")
            }
              , Rpd = d4(Qpd)
              , Spd = {
                type: Q3(46, "b")
            }
              , Tpd = d4(Spd)
              , Upd = {
                type: Q3(46, "c")
            }
              , Vpd = d4(Upd)
              , Wpd = {
                type: Q3(46, "d")
            }
              , Xpd = f4({
                type: void 0
            }, Rpd, Tpd, Vpd, d4(Wpd))
              , Ypd = {
                ...zpd,
                type: Q3(46, "number"),
                variant: N3.ref(48, Xpd),
                min: Y3(1),
                max: Y3(2)
            }
              , Zpd = f4({
                type: void 0
            }, Ppd, Jpd, d4(Ypd))
              , $pd = d4({
                eu: Y3(1),
                fu: Y3(2),
                yx: Y3(3)
            })
              , aqd = {
                label: N3.ref(38, ypd),
                mP: $3(2, "c", "u"),
                yx: Y3(3),
                eu: Y3(4),
                fu: Y3(5),
                Gla: Y3(6)
            }
              , bqd = d4(aqd)
              , cqd = d4({
                Fla: Y3(1),
                yx: Y3(2),
                fu: Y3(3),
                eu: Y3(4),
                background: L3(5, a4("Fill"))
            })
              , dqd = {
                label: b4(1, "Richtext2"),
                mP: U3(2430, "c", "u")
            }
              , eqd = {
                Ok: Y3(4),
                $l: Y3(5),
                minHeight: Y3(2062),
                minWidth: Y3(2077),
                type: Q3(46, "poll", "quiz"),
                id: R3(35),
                Gv: R3(45),
                mu: X3(27),
                direction: $3(44, "l", "r"),
                Nta: X3(30),
                ima: b4(2216, "Fill"),
                cna: b4(2372, "Fill"),
                border: b4(28, "Stroke"),
                X: Y3(29),
                z8: I3(1802, S3()),
                dSa: I3(9, S3()),
                ZDa: I3(52, S3()),
                Sbb: J3(34, d4({})),
                title: L3(36, d4(dqd)),
                header: L3(1, d4(cqd.fields)),
                fields: N3.listRef(32, Zpd),
                XZ: L3(6, d4($pd.fields)),
                footer: L3(1705, d4(bqd.fields))
            }
              , fqd = d4(eqd)
              , gqd = {
                type: Q3(37, "poll", "quiz"),
                value: N3.ref(48, fqd)
            }
              , hqd = {
                C: N3.of(gqd)
            }
              , iqd = g4(hqd);
            var chd;
            __c.dhd = 14 * __c.Xmc / 16;
            chd = {
                ...QE,
                ma: 1
            };
            L("GkIGaQ");
            L("5yQScA");
            L("EcbFFg");
            L("zM4EiQ");
            L("EBjOvw");
            L("aVyIDw");
            L("Gq117g");
            L("0ICFJA");
            L("UfSTAw");
            L("lbgHWw");
            L("GM4zjw");
            L("vATrmA");
            L("a2SYrQ");
            L("0ICFJA");
            L("X9QjTA");
            L("RkAUEw");
            L("C5627w");
            L("UKYBZg");
            L("0ICFJA");
            var s4 = ["#000000", "#ffffff"];
            var ahd = ["#cccccc", "#333333"];
            __c.u4 = (a, b) => ({
                ...jD,
                stream: __c.Ri(vj.rb().attrs({
                    ...b,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on"
                }).ib(a)).build()
            });
            var jhd = {
                [1]: "p",
                [2]: "q",
                [3]: "r"
            }
              , hhd = {
                [1]: "a",
                [2]: "b",
                [3]: "c",
                [4]: "d"
            };
            var Jhd = {
                Xd: () => ({
                    createForm(a) {
                        return {
                            data: {
                                C: {
                                    type: "quiz",
                                    value: ihd(a)
                                },
                                document: {}
                            },
                            M: {
                                width: a.width,
                                height: a.height
                            }
                        }
                    }
                }),
                Yd: iqd
            };
            var E5 = {
                min: 0,
                max: 255
            }
              , jqd = d4({
                hardMin: Y3(1),
                hardMax: Y3(2),
                softMin: Y3(3),
                softMax: Y3(4),
                step: Y3(5)
            })
              , kqd = d4({
                type: Q3(46, "bool"),
                value: H3(1, S3()),
                prefix: R3(3),
                placeholder: R3(4)
            })
              , lqd = d4({
                type: Q3(46, "int"),
                value: V3(1),
                hfa: K3(2, d4(jqd.fields)),
                prefix: R3(3),
                placeholder: R3(4)
            })
              , mqd = {
                x: e4(1, lqd.fields),
                y: e4(2, lqd.fields)
            }
              , nqd = d4(mqd)
              , oqd = d4({
                type: Q3(46, "int2"),
                value: K3(1, d4(nqd.fields)),
                prefix: R3(3),
                placeholder: R3(4)
            })
              , F5 = d4({
                type: Q3(46, "double"),
                value: T3(1),
                hfa: K3(2, d4(jqd.fields)),
                prefix: R3(3),
                placeholder: R3(4)
            })
              , pqd = d4({
                value: V3(1),
                name: R3(2)
            })
              , qqd = d4({
                type: Q3(46, "enum"),
                value: V3(1),
                enumValues: N3.listRef(2, pqd),
                prefix: R3(3),
                placeholder: R3(4)
            })
              , rqd = {
                x: e4(1, F5.fields),
                y: e4(2, F5.fields)
            }
              , sqd = d4(rqd)
              , tqd = d4({
                type: Q3(46, "double2"),
                value: K3(1, d4(sqd.fields)),
                prefix: R3(3),
                placeholder: R3(4)
            })
              , uqd = {
                x: e4(1, F5.fields),
                y: e4(2, F5.fields),
                z: e4(3, F5.fields)
            }
              , vqd = d4(uqd)
              , wqd = d4({
                type: Q3(46, "double3"),
                value: K3(1, d4(vqd.fields)),
                prefix: R3(3),
                placeholder: R3(4)
            })
              , xqd = {
                x: e4(1, F5.fields),
                y: e4(2, F5.fields),
                z: e4(3, F5.fields),
                w: e4(4, F5.fields)
            }
              , yqd = d4(xqd)
              , zqd = d4({
                type: Q3(46, "double4"),
                value: K3(1, d4(yqd.fields)),
                prefix: R3(3),
                placeholder: R3(4)
            })
              , Aqd = d4({
                type: Q3(46, "string"),
                value: R3(1),
                multiline: H3(2, S3()),
                prefix: R3(3),
                placeholder: R3(4)
            })
              , Bqd = d4({
                type: Q3(46, "richtext"),
                value: R3(1),
                multiline: H3(2, S3()),
                prefix: R3(3),
                placeholder: R3(4)
            })
              , Cqd = d4({
                type: Q3(46, "font"),
                fontFamily: X3(1),
                fontStyle: $3(2, "normal", "italic"),
                fontWeight: $3(3, "normal", "thin", "extralight", "light", "medium", "semibold", "bold", "ultrabold", "heavy")
            })
              , Dqd = d4({
                r: V3(1, E5),
                g: V3(2, E5),
                b: V3(3, E5),
                a: V3(4, E5)
            })
              , Eqd = d4({
                color: K3(1, d4(Dqd.fields)),
                position: T3(2)
            })
              , Fqd = d4({
                type: Q3(1, "linear"),
                Vc: N3.listRef(2, Eqd),
                rotation: T3(3)
            })
              , Gqd = d4({
                x: T3(1),
                y: T3(2)
            })
              , Hqd = d4({
                type: Q3(1, "radial"),
                Vc: N3.listRef(2, Eqd),
                center: K3(3, d4(Gqd.fields))
            })
              , Iqd = f4({
                type: void 0
            }, Fqd, Hqd)
              , Jqd = d4({
                type: Q3(1, "solid"),
                value: K3(2, d4(Dqd.fields))
            })
              , Kqd = d4({
                type: Q3(1, "gradient"),
                Ha: N3.ref(2, Iqd)
            })
              , Lqd = d4({
                type: Q3(46, "color"),
                value: Lgd(1, {
                    type: void 0
                }, Jqd, Kqd)
            })
              , Mqd = f4({
                type: void 0
            }, kqd, lqd, oqd, F5, tqd, wqd, zqd, Aqd, Bqd, Cqd, Lqd, qqd)
              , G5 = a => ({
                ...a,
                hfa: {
                    ...a.hfa.ref
                }
            })
              , Nqd = a => ({
                ...a,
                hfa: {
                    ...a.hfa.ref
                }
            })
              , Oqd = a => ({
                r: a.r,
                g: a.g,
                b: a.b,
                a: a.a
            })
              , Pqd = a => ({
                color: Oqd(a.color.ref),
                position: a.position
            })
              , Qqd = a => {
                switch (a.type) {
                case "solid":
                    return {
                        ...a,
                        value: Oqd(a.value.ref)
                    };
                case "gradient":
                    a: {
                        var b = a.Ha;
                        switch (b.type) {
                        case "linear":
                            b = {
                                ...b,
                                Vc: b.Vc.map(Pqd)
                            };
                            break a;
                        case "radial":
                            const c = b.center.ref;
                            b = {
                                ...b,
                                Vc: b.Vc.map(Pqd),
                                center: {
                                    x: c.x,
                                    y: c.y
                                }
                            };
                            break a;
                        default:
                            throw new z(b);
                        }
                    }
                    return {
                        ...a,
                        Ha: b
                    };
                default:
                    throw new z(a);
                }
            }
              , Rqd = a => {
                switch (a.type) {
                case "bool":
                    return {
                        ...a
                    };
                case "int":
                    return Nqd(a);
                case "int2":
                    var b = a.value.ref;
                    return {
                        ...a,
                        value: {
                            x: Nqd(b.x),
                            y: Nqd(b.y)
                        }
                    };
                case "double":
                    return G5(a);
                case "double2":
                    return b = a.value.ref,
                    {
                        ...a,
                        value: {
                            x: G5(b.x),
                            y: G5(b.y)
                        }
                    };
                case "double3":
                    return b = a.value.ref,
                    {
                        ...a,
                        value: {
                            x: G5(b.x),
                            y: G5(b.y),
                            z: G5(b.z)
                        }
                    };
                case "double4":
                    return b = a.value.ref,
                    {
                        ...a,
                        value: {
                            x: G5(b.x),
                            y: G5(b.y),
                            z: G5(b.z),
                            w: G5(b.w)
                        }
                    };
                case "string":
                    return {
                        ...a
                    };
                case "richtext":
                    return {
                        ...a
                    };
                case "font":
                    return {
                        ...a
                    };
                case "color":
                    return {
                        ...a,
                        value: Qqd(a.value.ref)
                    };
                case "enum":
                    return {
                        ...a,
                        enumValues: a.enumValues.filter( () => !0)
                    };
                default:
                    throw new z(a);
                }
            }
              , Sqd = d4({
                id: R3(1),
                refs: N3.listRef(2, d4({
                    attrId: R3(2),
                    layerId: R3(3),
                    name: R3(4),
                    index: V3(5)
                })),
                definition: Lgd(5, Mqd.iga, ...Mqd.di)
            })
              , Tqd = a => ({
                attrId: a.attrId,
                layerId: a.layerId,
                name: a.name,
                index: a.index
            })
              , Uqd = a => ({
                id: a.id,
                refs: a.refs.map(Tqd),
                definition: Rqd(a.definition.ref)
            })
              , Vqd = {
                bMb: O3(1),
                aMb: O3(2)
            }
              , Wqd = d4({
                ...Vqd,
                resource: J3(44, a4("MediaRef"))
            })
              , Xqd = d4({
                ...Vqd,
                resource: J3(44, a4("VideoRef"))
            })
              , Yqd = {
                fonts: N3.ref(32, c4(d4({
                    ...Vqd,
                    resource: J3(44, a4("FontRef"))
                }))),
                media: N3.ref(39, c4(Wqd)),
                xd: N3.ref(48, c4(Xqd))
            }
              , Zqd = d4(Yqd)
              , $qd = a => {
                const b = new Map
                  , c = new Map
                  , d = new Map;
                a.fonts.forEach( (e, f) => b.set(f, {
                    ...e
                }));
                a.media.forEach( (e, f) => c.set(f, {
                    ...e
                }));
                a.xd.forEach( (e, f) => d.set(f, {
                    ...e
                }));
                return {
                    fonts: b,
                    media: c,
                    xd: d
                }
            }
            ;
            var ard, brd, crd, drd, erd, frd, grd, hrd, ird, jrd, krd, mrd, nrd, Hhd;
            ard = {
                type: Q3(46, "inline"),
                xQ: O3(2),
                data: O3(3)
            };
            brd = f4({
                type: void 0
            }, d4(ard));
            crd = {
                layerId: O3(1),
                gqb: R3(2)
            };
            drd = d4(crd);
            erd = {
                type: Q3(46, "cavalry"),
                attributes: N3.listRef(1, Sqd),
                oJa: e4(44, Zqd.fields),
                layers: N3.ref(37, c4(drd)),
                resource: Kgd(5, brd.iga, ...brd.di)
            };
            frd = d4(erd);
            grd = {
                autoplay: H3(1, S3()),
                tv: U3(2, 1, 2),
                playbackRate: T3(3, {
                    min: .25,
                    max: 2
                })
            };
            hrd = d4(grd);
            ird = f4({
                type: void 0
            }, frd);
            jrd = {
                Af: Mgd(1, ird.iga, ...ird.di),
                uf: e4(5, hrd.fields),
                width: V3(3),
                height: V3(4)
            };
            krd = {
                C: N3.of(jrd)
            };
            __c.lrd = g4(krd);
            mrd = a => {
                switch (a.type) {
                case "inline":
                    return {
                        type: a.type,
                        xQ: a.xQ,
                        data: a.data
                    };
                default:
                    throw new z(a.type);
                }
            }
            ;
            nrd = a => ({
                layerId: a.layerId,
                gqb: a.gqb
            });
            Hhd = {
                Bpc: {
                    NONE: 1,
                    REPEAT: 2
                },
                Epc: 2,
                Hpc: .25,
                Spc: {
                    jpc: "inline"
                },
                Jqc: {
                    $nc: "cavalry"
                },
                Yd: __c.lrd,
                bQc: a => {
                    switch (a.type) {
                    case "cavalry":
                        return {
                            type: a.type,
                            attributes: a.attributes.map(Uqd),
                            oJa: $qd(a.oJa),
                            layers: Of(a.layers.pj(), nrd),
                            resource: mrd(a.resource)
                        };
                    default:
                        throw new z(a.type);
                    }
                }
                ,
                cQc: nrd,
                dQc: mrd
            };
            var ord, Phd;
            ord = {
                autoplay: !0,
                tv: 1,
                playbackRate: 1
            };
            __c.prd = () => ({
                Euc() {
                    return {
                        data: {
                            document: {},
                            C: {
                                Af: void 0,
                                uf: {
                                    ...ord
                                },
                                width: 800,
                                height: 800
                            }
                        },
                        M: {
                            width: 800,
                            height: 800
                        }
                    }
                },
                Auc(a, b) {
                    return {
                        data: {
                            document: {},
                            C: {
                                Af: void 0,
                                uf: {
                                    ...ord
                                },
                                width: a,
                                height: b
                            }
                        },
                        M: {
                            width: a,
                            height: b
                        }
                    }
                }
            });
            Phd = {
                Xd: __c.prd,
                OMc: ord
            };
            var qrd = {
                type: Q3(1, "url"),
                url: R3(2),
                label: R3(3)
            }
              , rrd = d4(qrd)
              , srd = {
                type: Q3(1, "page"),
                Ax: b4(2, "PageEntityRef"),
                label: R3(3)
            }
              , trd = f4({
                type: void 0
            }, rrd, d4(srd))
              , urd = b4(1, "Fill")
              , vrd = b4(2, "TextAttributes")
              , wrd = J3(3, N3.tH(a4("PageEntityRef")))
              , xrd = J3(4, N3.tH(trd))
              , yrd = {
                background: urd,
                Sb: vrd,
                zjb: wrd,
                links: xrd,
                ox: L3(5, a4("Fill")),
                padding: I3(6, W3({
                    kind: 2,
                    range: {
                        min: 0
                    }
                })),
                mmb: Y3(7, {
                    min: 0
                }),
                Vw: $3(8, 1, 2, 3)
            }
              , zrd = {
                document: N3.of(yrd)
            };
            var Ghd = {
                Xd: () => ({
                    createDefault(a) {
                        return {
                            data: {
                                C: {},
                                document: {
                                    background: a?.background ?? {
                                        ...__c.B4b,
                                        color: "#ffffff"
                                    },
                                    Sb: {
                                        "font-weight": a?.Sb?.["font-weight"] ?? Yh.vc["font-weight"],
                                        "font-style": a?.Sb?.["font-style"],
                                        "font-kerning": void 0,
                                        "font-feature-liga": void 0,
                                        "font-feature-clig": void 0,
                                        "font-feature-calt": void 0,
                                        "font-size-modifier": void 0,
                                        "vertical-align": void 0,
                                        color: a?.Sb?.color ?? "#000000",
                                        "fill-id": void 0,
                                        decoration: void 0,
                                        strikethrough: a?.Sb?.strikethrough,
                                        kerning: void 0,
                                        link: void 0,
                                        "start-us": void 0,
                                        "font-family": a?.Sb?.["font-family"] ?? Yh.vc["font-family"],
                                        "font-size": a?.Sb?.["font-size"] ?? 24,
                                        leading: void 0,
                                        spacing: void 0,
                                        direction: void 0,
                                        tracking: a?.Sb?.tracking,
                                        "text-transform": void 0,
                                        "text-align": void 0,
                                        "head-indent": void 0,
                                        "list-marker": void 0,
                                        "list-level": void 0,
                                        "list-number-set": void 0,
                                        style: void 0,
                                        semantics: void 0
                                    },
                                    zjb: [],
                                    links: [],
                                    ox: {
                                        ...QE
                                    },
                                    padding: [10, 0, 10, 0],
                                    mmb: void 0,
                                    Vw: 3
                                }
                            },
                            M: {
                                width: 1366,
                                height: 0
                            }
                        }
                    }
                }),
                Yd: g4(zrd)
            };
            var Qhd;
            __c.Ard = () => ({
                Guc(a, b, c) {
                    return {
                        data: {
                            C: {
                                scene: {
                                    type: "scene",
                                    id: a,
                                    version: 0
                                },
                                config: {
                                    snapshot: void 0,
                                    rotationPhi: 6.02138592,
                                    rotationTheta: .08726646,
                                    mc: void 0
                                }
                            },
                            document: {}
                        },
                        M: {
                            width: b,
                            height: c
                        }
                    }
                },
                Huc(a, b, c, d) {
                    return {
                        data: {
                            C: {
                                scene: {
                                    type: "scene",
                                    id: a,
                                    version: 0
                                },
                                config: {
                                    snapshot: b,
                                    rotationPhi: 6.02138592,
                                    rotationTheta: .08726646,
                                    mc: void 0
                                }
                            },
                            document: {}
                        },
                        M: {
                            width: c,
                            height: d
                        }
                    }
                }
            });
            Qhd = {
                Xd: __c.Ard
            };
            var Brd, Crd, Drd, Erd, Frd, Grd, Ihd;
            Brd = J3(1, a4("MediaRef"));
            Crd = P3(2, {
                min: 0,
                max: 6.284
            });
            Drd = P3(3, {
                min: -1.571,
                max: 1.571
            });
            Erd = {
                snapshot: Brd,
                rotationPhi: Crd,
                rotationTheta: Drd,
                mc: J3(4, c4(a4("Fill")))
            };
            Frd = {
                scene: b4(1, "SceneRef"),
                config: K3(2, d4(Erd))
            };
            Grd = {
                C: N3.of(Frd)
            };
            __c.Hrd = g4(Grd);
            Ihd = {
                Yd: __c.Hrd
            };
            var Nhd = class {
                static G(a) {
                    N(a, {
                        Qua: g5.ref
                    })
                }
                constructor() {
                    this.Qua = (Nhd.G(this),
                    void 0)
                }
            }
            ;
            var w4 = class {
                static of(a, b, c) {
                    return new w4(a,b,c)
                }
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    this.nBa = a;
                    this.resultType = b;
                    this.apply = c
                }
            }
              , Jrd = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b) {
                    var c = Ird;
                    this.PLb = a;
                    this.resultType = b;
                    this.apply = c
                }
            }
              , H5 = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    this.$$b = a;
                    this.resultType = b;
                    this.apply = c
                }
            }
              , Lrd = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    var d = Krd;
                    this.keyType = a;
                    this.valueType = b;
                    this.resultType = c;
                    this.apply = d
                }
            }
              , Xhd = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b, c, d) {
                    this.itemType = a;
                    this.pMb = b;
                    this.resultType = c;
                    this.reduce = d
                }
            }
            ;
            var bid = class {
                map(a) {
                    return a(this)
                }
                constructor(a, b) {
                    this.type = a;
                    this.get = b
                }
            }
            ;
            __c.Mrd = Zhd(4);
            __c.Nrd = Zhd(6);
            __c.Ord = $hd(5);
            __c.I5 = $hd(0);
            var Prd = class {
            }
              , sid = class extends Prd {
                OJa(a) {
                    return new sid(a(this.value))
                }
                hQa(a) {
                    return a(this.value)
                }
                constructor(a) {
                    super();
                    this.value = this.value = a
                }
            }
              , tid = class extends Prd {
                OJa(a, b) {
                    return new tid(b(this.value))
                }
                hQa(a, b) {
                    return b(this.value)
                }
                constructor(a) {
                    super();
                    this.value = this.value = a
                }
            }
            ;
            var did = class {
                map(a) {
                    return a(this)
                }
            }
              , J5 = class extends did {
                eTa(a) {
                    return this === a || a.u1a(b => this.gja(b))
                }
                j0() {
                    throw Error(`${this} is not iterable`);
                }
                GVa(a) {
                    const b = this.propTypes ?? (this.propTypes = this.kza());
                    if (!b)
                        throw Error(`${this} is not navigable"`);
                    if (!b.hasOwnProperty(a))
                        throw Error(`${this} has no navigable property "${a}"`);
                    return b[a]
                }
                kza() {
                    throw Error(`${this} is not navigable`);
                }
                qQa(a) {
                    a(this)
                }
                u1a(a) {
                    return a(this)
                }
                constructor() {
                    super();
                    this.kind = "simple";
                    this.propTypes = void 0
                }
            }
              , K5 = class extends J5 {
                gja(a) {
                    return a instanceof K5 && this.name === a.name
                }
                toString() {
                    return this.name
                }
                constructor(a) {
                    super();
                    this.name = a
                }
            }
              , Qrd = class extends J5 {
                gja(a) {
                    return a instanceof Qrd && this.Qj === a.Qj
                }
                toString() {
                    return this.Qj.name
                }
                constructor(a) {
                    super();
                    this.Qj = a
                }
            }
              , Rrd = class extends J5 {
                gja(a) {
                    return a instanceof Rrd && this.Qj === a.Qj && z4(this.arg, a.arg)
                }
                toString() {
                    return `${this.Qj}<${this.arg}>`
                }
                constructor(a, b) {
                    super();
                    this.Qj = a;
                    this.arg = b
                }
            }
              , Srd = class extends Rrd {
                j0() {
                    return this.arg
                }
                kza() {
                    const a = this.arg;
                    return {
                        size: F4.number,
                        empty: F4.boolean,
                        get first() {
                            return F4.optional(a)
                        }
                    }
                }
                constructor(a) {
                    super("array", a)
                }
            }
              , Trd = class extends Rrd {
                j0() {
                    return this.arg
                }
                kza() {
                    const a = this.arg;
                    return {
                        size: F4.number,
                        empty: F4.boolean,
                        get first() {
                            return F4.optional(a)
                        }
                    }
                }
                constructor(a) {
                    super("set", a)
                }
            }
              , Urd = class extends J5 {
                gja(a) {
                    return a instanceof Urd && z4(this.key, a.key) && z4(this.value, a.value)
                }
                toString() {
                    return `map<${this.key}, ${this.value}>`
                }
                constructor(a, b) {
                    super();
                    this.key = a;
                    this.value = b
                }
            }
              , Vrd = class extends J5 {
                gja(a) {
                    return a instanceof Vrd ? Object.entries(a.fields).every( ([b,c]) => this.fields.hasOwnProperty(b) && z4(this.fields[b], c)) : !1
                }
                kza() {
                    return this.fields
                }
                toString() {
                    const a = Object.entries(this.fields);
                    return a.length ? `{ ${a.map( ([b,c]) => `${b}: ${c}`).join(", ")} }` : "{}"
                }
                constructor(a) {
                    super();
                    this.fields = a
                }
            }
              , L5 = class extends did {
                eTa(a) {
                    return this === a || this.di.every(b => b.eTa(a))
                }
                j0() {
                    return F4.union(...this.di.map(a => a.j0()))
                }
                GVa(a) {
                    return F4.union(...this.di.map(b => b.GVa(a)))
                }
                qQa(a) {
                    this.di.forEach(b => b.qQa(a))
                }
                u1a(a) {
                    return this.di.some(b => b.u1a(a))
                }
                toString() {
                    return this.di.length ? this.di.map(a => a.toString()).join(" | ") : "never"
                }
                constructor(a) {
                    super();
                    this.di = a;
                    this.kind = "disjunction";
                    u(a.length !== 1)
                }
            }
              , Wrd = new L5([])
              , Xrd = new K5("string")
              , Yrd = new K5("number")
              , Zrd = new K5("boolean")
              , $rd = new K5("undefined")
              , asd = new L5([Xrd, Yrd, Zrd])
              , bsd = class {
                get never() {
                    return Wrd
                }
                get string() {
                    return Xrd
                }
                get number() {
                    return Yrd
                }
                get boolean() {
                    return Zrd
                }
                get undefined() {
                    return $rd
                }
                get primitive() {
                    return asd
                }
                optional(a) {
                    return F4.union(a, F4.undefined)
                }
                array(a) {
                    return new Srd(a)
                }
                set(a) {
                    return new Trd(a)
                }
                Z5(a) {
                    return new L5([new Srd(a), new Trd(a)])
                }
                map(a, b) {
                    return new Urd(a,b)
                }
                N(a) {
                    return new Vrd({
                        ...a
                    })
                }
                union(...a) {
                    if (a.length === 0)
                        return Wrd;
                    if (a.length === 1)
                        return a[0];
                    const b = new Set;
                    for (const d of a)
                        aid(d).qQa(e => b.add(e));
                    a = [...b];
                    if (a.length === 0)
                        return Wrd;
                    if (a.length === 1)
                        return a[0];
                    if (a.length === 2) {
                        const [d,e] = a;
                        return z4(d, e) ? e : z4(e, d) ? d : new L5(a)
                    }
                    const c = new Set;
                    for (const d of a)
                        [...c].some(e => z4(d, e)) || (c.forEach(e => z4(e, d) && c.delete(e)),
                        c.add(d));
                    return c.size === 1 ? [...c][0] : new L5([...c])
                }
                constructor() {
                    this.optional = A4(this.optional);
                    this.array = A4(this.array);
                    this.set = A4(this.set);
                    this.Z5 = A4(this.Z5)
                }
            }
              , csd = class extends bsd {
                instance(a) {
                    return new Qrd(a)
                }
            }
              , F4 = new csd
              , dsd = class extends bsd {
                instance(a) {
                    return new Qrd(y(this.classes[a]))
                }
                constructor(a) {
                    super();
                    this.classes = a
                }
            }
            ;
            var M5 = Symbol("value")
              , esd = class {
                get props() {
                    return this.MKb ?? (this.MKb = this.iJa())
                }
            }
              , fsd = class {
                get size() {
                    return this[M5].length
                }
                get empty() {
                    return this[M5].length === 0
                }
                get first() {
                    return this[M5][0]
                }
                constructor(a) {
                    this[M5] = a
                }
            }
              , gsd = Symbol.iterator
              , hsd = class extends esd {
                iJa() {
                    return new fsd(this.items)
                }
                map(a) {
                    return this.items.map(a)
                }
                [gsd]() {
                    return this.items[Symbol.iterator]()
                }
                toString() {
                    return this.items.length ? `[${Array.from(this.items, B4).join(", ")}]` : "[]"
                }
                constructor(a) {
                    super();
                    this.kind = "array";
                    this.items = [...a]
                }
            }
              , isd = class {
                get size() {
                    return this[M5].size
                }
                get empty() {
                    return this[M5].size === 0
                }
                get first() {
                    return this[M5][Symbol.iterator]().next().value
                }
                constructor(a) {
                    this[M5] = a
                }
            }
              , jsd = Symbol.iterator
              , ksd = class extends esd {
                iJa() {
                    return new isd(this.items)
                }
                map(a) {
                    return Array.from(this.items, a)
                }
                [jsd]() {
                    return this.items[Symbol.iterator]()
                }
                toString() {
                    return this.items.size ? `Set [${Array.from(this.items, B4).join(", ")}]` : "Set []"
                }
                constructor(a) {
                    super();
                    this.kind = "set";
                    this.items = new Set(a)
                }
            }
              , lsd = class {
                toString() {
                    return this.items.size ? `Map {${Array.from(this.items, ([a,b]) => `[${B4(a)}]: ${B4(b)}`).join(", ")}}` : "Map {}"
                }
                constructor(a) {
                    this.items = a;
                    this.kind = "map"
                }
            }
              , msd = class extends esd {
                iJa() {
                    return this.fields
                }
                toString() {
                    const a = Object.entries(this.fields);
                    return a.length ? `{ ${[...a].map( ([b,c]) => `${b}: ${B4(c)}`).join(", ")} }` : "{}"
                }
                constructor(a) {
                    super();
                    this.fields = a;
                    this.kind = "record"
                }
            }
              , nsd = class {
                toString() {
                    return `[instance ${this.Qj.name}]`
                }
                constructor(a, b) {
                    this.Qj = a;
                    this.instance = b;
                    this.kind = "instance"
                }
            }
              , osd = class {
                array(a) {
                    return new hsd(a)
                }
                set(a) {
                    return new ksd(a)
                }
                map(a) {
                    return new lsd(new Map(a))
                }
                N(a) {
                    return new msd({
                        ...a
                    })
                }
            }
              , psd = class extends osd {
                instance(a, b) {
                    return new nsd(a,b)
                }
                stringify(a) {
                    return B4(a)
                }
                constructor() {
                    super();
                    this.ci = gid
                }
            }
              , J4 = new psd
              , qsd = class extends osd {
                instance(a, b) {
                    a = y(this.classes[a]);
                    return new nsd(a,b)
                }
                constructor(a) {
                    super();
                    this.classes = a
                }
            }
            ;
            var qid = {
                [0]: Whd(F4.number, F4.number, a => -a),
                [1]: Whd(F4.string, F4.number, a => a.length),
                [2]: Whd(F4.boolean, F4.boolean, a => !a),
                [3]: x4(F4.number, F4.number, F4.number, (a, b) => a + b),
                [4]: x4(F4.number, F4.number, F4.number, (a, b) => a - b),
                [5]: x4(F4.number, F4.number, F4.number, (a, b) => a * b),
                [6]: x4(F4.number, F4.number, F4.number, (a, b) => a / b),
                [7]: x4(F4.number, F4.number, F4.number, (a, b) => a % b),
                [8]: x4(F4.string, F4.string, F4.string, (a, b) => a + b),
                [9]: x4(F4.number, F4.number, F4.boolean, (a, b) => a === b),
                [10]: x4(F4.number, F4.number, F4.boolean, (a, b) => a !== b),
                [11]: x4(F4.number, F4.number, F4.boolean, (a, b) => a < b),
                [12]: x4(F4.number, F4.number, F4.boolean, (a, b) => a <= b),
                [13]: x4(F4.number, F4.number, F4.boolean, (a, b) => a > b),
                [14]: x4(F4.number, F4.number, F4.boolean, (a, b) => a >= b),
                [15]: x4(F4.boolean, F4.boolean, F4.boolean, (a, b) => a && b),
                [16]: x4(F4.boolean, F4.boolean, F4.boolean, (a, b) => a || b)
            }
              , wid = {
                [2]: new H5(F4.number,F4.number,a => a.reduce( (b, c) => b + c, 0)),
                [3]: new H5(F4.number,F4.number,a => a.reduce( (b, c) => b * c, 1)),
                [4]: new H5(F4.number,F4.number,a => Math.max(...a)),
                [5]: new H5(F4.number,F4.number,a => Math.min(...a)),
                [6]: new H5(F4.string,F4.string,a => a.join(""))
            }
              , rsd = a => J4.array(a)
              , ssd = a => J4.set(a)
              , uid = {
                [0]: a => new H5(a,F4.array(a),rsd),
                [1]: a => new H5(a,F4.set(a),ssd)
            }
              , Krd = a => J4.map(a)
              , hid = {
                [0]: (a, b) => new Lrd(a,b,F4.map(a, b))
            }
              , Ird = a => J4.N(a)
              , zid = {
                [0]: a => new Jrd(a,F4.N(a))
            }
              , tsd = (a, b) => J4.array(b.map(c => c()))
              , usd = (a, b) => J4.array(b.flatMap(c => c().items))
              , vsd = (a, b) => J4.array(a.filter( (c, d) => b[d]()).map(c => c()))
              , wsd = (a, b) => b.some(c => c())
              , xsd = (a, b) => b.every(c => c())
              , ysd = (a, b) => a.find( (c, d) => b[d]())?.()
              , jid = {
                [0]: (a, b) => b.map(c => y4(a, c, F4.array(c), tsd)),
                [1]: (a, b) => b.j0().map(c => y4(a, F4.array(c), F4.array(c), usd)),
                [2]: a => y4(a, F4.boolean, F4.array(a), vsd),
                [3]: a => y4(a, F4.boolean, F4.boolean, wsd),
                [4]: a => y4(a, F4.boolean, F4.boolean, xsd),
                [5]: a => y4(a, F4.boolean, F4.optional(a), ysd)
            };
            var D4 = class {
                define(a, b) {
                    return new D4(new Map([[a, b]]),this)
                }
                resolve(a) {
                    const b = this.defs.get(a);
                    if (b)
                        return b;
                    if (this.parent)
                        return this.parent.resolve(a);
                    throw Error(`undefined symbol: "${a}"`);
                }
                constructor(a, b) {
                    this.defs = a;
                    this.parent = b
                }
            }
            ;
            var ojd = (a, b, c) => {
                const d = C4.create(b.TY)
                  , e = new zsd(a);
                return {
                    compile: f => {
                        const g = nid(e, d, f).as(c);
                        return h => {
                            h = b.Lr(h).OZa;
                            return g(new D4(new Map(h)))
                        }
                    }
                }
            }
              , C4 = class {
                static create(a) {
                    return new C4(new D4(new Map(a)),new D4(new Map))
                }
                constructor(a=new D4(new Map), b=new D4(new Map)) {
                    this.vars = a;
                    this.Iha = b
                }
            }
              , zsd = class {
                constructor(a) {
                    this.types = a
                }
            }
              , H4 = class {
                static of(a, b) {
                    return new H4(a,b)
                }
                as(a) {
                    if (!z4(this.type, a))
                        throw Error(`type ${this.type} does not match expected type: ${a}`);
                    return this.evaluate
                }
                computed() {
                    const a = this.evaluate;
                    return new H4(this.type,b => {
                        const c = z3(a(b), {
                            equals: J4.ci
                        });
                        return () => c.get()
                    }
                    )
                }
                map(a) {
                    return a(this.type, this.evaluate)
                }
                constructor(a, b) {
                    this.type = a;
                    this.evaluate = b
                }
            }
              , Kid = class {
                as(a, b) {
                    const c = this.nBa
                      , d = this.resultType;
                    if (a.length < c.length)
                        throw Error(`Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`);
                    for (let e = 0; e < c.length; e++)
                        if (!z4(a[e], c[e]))
                            throw Error(`Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`);
                    if (!z4(d, b))
                        throw Error(`return type ${d} is not assignable to expected type: ${b}`);
                    return this.evaluate
                }
                map(a) {
                    return a(this)
                }
                constructor(a, b, c) {
                    this.nBa = a;
                    this.resultType = b;
                    this.evaluate = c
                }
            }
            ;
            var ijd = class {
                add(a) {
                    a = a(Asd, this.types);
                    return new ijd({
                        ...this.classes,
                        ...a
                    })
                }
                resolve(a) {
                    return this.classes[a]
                }
                evaluate(a) {
                    const b = this.types;
                    switch (a.kind) {
                    case 0:
                        switch (a.name) {
                        case "string":
                            return b.string;
                        case "number":
                            return b.number;
                        case "boolean":
                            return b.boolean;
                        case "undefined":
                            return b.undefined;
                        default:
                            throw new z(a);
                        }
                    case 1:
                        return b.instance(a.name);
                    case 4:
                        switch (a.name) {
                        case "array":
                            return b.array(this.evaluate(a.s8a));
                        case "set":
                            return b.set(this.evaluate(a.s8a));
                        default:
                            throw new z(a);
                        }
                    case 5:
                        switch (a.name) {
                        case "map":
                            const c = this.evaluate(a.s8a);
                            a = this.evaluate(a.gsc);
                            if (!z4(c, b.primitive))
                                throw Error(`key type is not a primitive: ${c}`);
                            return b.map(c, a);
                        default:
                            throw new z(a);
                        }
                    case 3:
                        return b.union(...a.args.map(c => this.evaluate(c)));
                    case 2:
                        return b.N(pf(a.args, c => this.evaluate(c)));
                    default:
                        throw new z(a);
                    }
                }
                constructor(a) {
                    this.classes = a;
                    this.types = new dsd(this.classes);
                    this.values = new qsd(this.classes)
                }
            }
              , Asd = class {
                constructor(a, b, c) {
                    this.name = a;
                    this.create = c;
                    this.m7b = new w4([F4.N(b)],F4.instance(this),d => J4.instance(this, c(d.fields)))
                }
            }
            ;
            var Bsd = Symbol.iterator
              , Lid = class {
                static G(a) {
                    N(a, {
                        J9: z3
                    })
                }
                get J9() {
                    const a = new Map;
                    this.base.forEach(b => a.set(this.mi(b), b));
                    return a
                }
                KB(a) {
                    return y(this.J9.get(a))
                }
                Y9(a) {
                    return a != null ? this.mi(a) : void 0
                }
                get size() {
                    return this.base.size
                }
                get(a) {
                    a = this.base.get(a);
                    return this.Y9(a)
                }
                has(a) {
                    return this.base.has(a)
                }
                forEach(a) {
                    this.base.forEach( (b, c) => a(this.mi(b), c))
                }
                map(a) {
                    return this.base.map( (b, c) => a(this.mi(b), c))
                }
                set(a, b) {
                    return this.mi(this.base.set(a, this.sP(b)))
                }
                every(a) {
                    return this.base.every( (b, c) => a(this.mi(b), c))
                }
                delete(a) {
                    this.base.delete(a)
                }
                entries() {
                    return Nid(this.base.entries(), ([a,b]) => [a, this.mi(b)])
                }
                keys() {
                    return this.base.keys()
                }
                values() {
                    return Nid(this.base.values(), this.mi)
                }
                [Bsd]() {
                    return this.pj()[Symbol.iterator]()
                }
                pj() {
                    return Of(this.base.pj(), this.mi)
                }
                constructor(a, b, c) {
                    this.base = a;
                    this.sP = b;
                    this.mi = c;
                    Lid.G(this)
                }
            }
            ;
            var N5 = class {
                dK(a) {
                    return new Csd(this,a)
                }
                d_(a) {
                    return new Dsd(this,a)
                }
                wO(a) {
                    return new Esd(this,a)
                }
                toString() {
                    return this.s ?? (this.s = this.lka())
                }
            }
              , djd = class extends N5 {
                dK(a) {
                    return new Fsd(a)
                }
                d_() {
                    throw Error();
                }
                wO() {
                    throw Error();
                }
                lka() {
                    return "(global)"
                }
            }
              , Fsd = class extends N5 {
                lka() {
                    return this.name
                }
                constructor(a) {
                    super();
                    this.name = a
                }
            }
              , Csd = class extends N5 {
                lka() {
                    return `${this.parent}.${this.name}`
                }
                constructor(a, b) {
                    super();
                    this.parent = a;
                    this.name = b
                }
            }
              , Dsd = class extends N5 {
                lka() {
                    return `${this.parent}["${this.key}"]`
                }
                constructor(a, b) {
                    super();
                    this.parent = a;
                    this.key = b
                }
            }
              , Esd = class extends N5 {
                lka() {
                    return `${this.parent}[${this.index}]`
                }
                constructor(a, b) {
                    super();
                    this.parent = a;
                    this.index = b
                }
            }
              , cjd = class {
                error(a, b) {
                    return Error(`widget '${this.inc}': schema error on key '${a}': ${b}`)
                }
                constructor(a) {
                    this.inc = a
                }
            }
              , gjd = {
                string: "string",
                boolean: "boolean",
                double: "number",
                int32: "number",
                list: "object",
                dict: "object",
                ref: "object",
                "entity-ref": "object",
                fill: "object",
                stroke: "object",
                text2: "object",
                "text-attributes": "object",
                element: "object"
            }
              , Xid = new Set(["string", "boolean", "int32"])
              , hjd = {
                font: "font",
                media: "media",
                video: "video",
                audio: "audio",
                embed: "embed",
                scene: "scene",
                "motion-graphic": "motion_graphic",
                blueprint: "blueprint"
            };
            var qjd = class {
                constructor(a) {
                    this.KCa = a;
                    this.abb = new Map
                }
            }
            ;
            var pjd = class {
                static G(a) {
                    N(a, {
                        LCa: g5.shallow
                    })
                }
                constructor(a) {
                    this.Xab = a;
                    this.LCa = (pjd.G(this),
                    new Map)
                }
            }
            ;
            var rjd = class {
                constructor(a, b) {
                    this.KCa = a;
                    this.J = b;
                    this.TK = new Map
                }
            }
            ;
            var vjd = {
                f4a: "null",
                dna: "*"
            };
            var Gsd = () => [...document.getElementsByTagName("iframe")]
              , Skd = class {
                dispose() {
                    this.disposed || (this.disposed = !0,
                    this.Kjb.removeEventListener("message", this.u$),
                    Hsd.delete(this.Ms),
                    this.gfa.clear())
                }
                constructor(a, b, c=ujd) {
                    var d = window;
                    this.options = a;
                    this.J = b;
                    this.Kjb = d;
                    this.e4a = c;
                    this.sYb = Gsd;
                    this.disposed = !1;
                    this.u$ = async e => {
                        const f = N4()();
                        try {
                            const p = e.source;
                            var g = e.data;
                            if (p) {
                                var h = g?.clientId;
                                g = g?.sandboxCommsSource;
                                if (g === "iframe") {
                                    var k = this.sYb().find(q => q.contentWindow === p);
                                    if (k) {
                                        var l = k.getAttribute("data-process-id");
                                        if (l && l.startsWith(this.Ms)) {
                                            var m = y(k.contentWindow)
                                              , n = this.e4a(e, k);
                                            if (n.valid) {
                                                e = {
                                                    type: "connection_request_not_matched"
                                                };
                                                for (const q of this.gfa)
                                                    if (e = f.r(await f.s(q({
                                                        gab: {
                                                            Qtb: l,
                                                            clientId: h
                                                        },
                                                        iframe: k
                                                    }))),
                                                    e.type !== "connection_request_not_matched")
                                                        break;
                                                switch (e.type) {
                                                case "connection_request_matched":
                                                    m.postMessage({
                                                        sandboxCommsSource: "parent",
                                                        clientId: h
                                                    }, n.dna, [e.port]);
                                                    break;
                                                case "connection_request_not_matched":
                                                    this.J.QC("received an init message which no listener accepted", {
                                                        extra: new Map([["processId", l], ["data.sandboxCommsSource", g], ["data.clientId", h]])
                                                    });
                                                    this.options.Jsc && k.remove();
                                                    break;
                                                case "already_connected":
                                                    this.J.QC("received an init message for a processId & clientId that is already connected", {
                                                        extra: new Map([["processId", l], ["data.sandboxCommsSource", g], ["data.clientId", h]])
                                                    });
                                                    break;
                                                case "dangerously_ignore":
                                                    break;
                                                default:
                                                    throw new z(e);
                                                }
                                                return e
                                            }
                                            n.error && this.J.info(n.error.message, {
                                                extra: n.error.extra
                                            })
                                        }
                                    }
                                }
                            }
                        } finally {
                            f.s()
                        }
                    }
                    ;
                    this.Ms = this.options.Ms ?? `iframe_host_${Isd++}`;
                    this.gfa = new Set;
                    x(!Hsd.has(this.Ms), `A IFrameHostConnector has already been created with the prefix ${this.options.Ms}`);
                    Hsd.add(this.Ms);
                    this.Kjb.addEventListener("message", this.u$)
                }
            }
              , Isd = 0
              , Hsd = new Set;
            var pkd = class {
                async sendMessage(a, b) {
                    const c = N4()();
                    try {
                        const d = c.r(await c.s(this.Zvb.request(a, b)));
                        if (!d.ok)
                            throw d.error;
                        if (d.value === void 0)
                            throw Error(`${a}: Response cannot be empty`);
                        return d.value
                    } finally {
                        c.s()
                    }
                }
                constructor(a) {
                    this.Zvb = a
                }
            }
            ;
            __c.yjd = H( () => ({}));
            __c.Jsd = H( () => ({
                type: F("A?", 1, "BACKGROUND_COLOR"),
                color: W(21)
            }));
            var Ksd = H( () => ({
                type: F("A?", 1, "BACKGROUND_COLOR"),
                current: Na(21, __c.Jsd)
            }));
            var Lsd = H( () => ({
                a: hK(1),
                b: hK(2),
                c: hK(3),
                d: hK(4),
                e: hK(5),
                f: hK(6)
            }));
            __c.Msd = H( () => ({
                type: F("A?", 2, "TRANSLATION"),
                Ia: hK(22),
                Oa: hK(23)
            }));
            var Nsd = H( () => ({
                type: F("A?", 2, "TRANSLATION"),
                matrix: Na(22, Lsd),
                current: Na(23, __c.Msd)
            }));
            __c.Osd = H( () => ({
                type: F("A?", 3, "ROTATION"),
                rotation: hK(24)
            }));
            var Psd = H( () => ({
                type: F("A?", 3, "ROTATION"),
                matrix: Na(24, Lsd),
                current: Na(25, __c.Osd)
            }));
            var Qsd = H( () => ({
                type: F("A?", 4, "MEDIA_REPLACE")
            }));
            __c.Rsd = H( () => ({
                type: F("A?", 5, "SCALE"),
                scale: hK(26)
            }));
            var Ssd = H( () => ({
                type: F("A?", 5, "SCALE"),
                matrix: Na(26, Lsd),
                current: Na(27, __c.Rsd)
            }));
            __c.Tsd = H( () => ({
                type: F("A?", 6, "RICHTEXT"),
                html: Na(27, __c.lm)
            }));
            var Usd = H( () => ({
                type: F("A?", 6, "RICHTEXT"),
                current: Na(28, __c.Tsd)
            }));
            var Vsd = bb( () => [1, 2, 3, 4]);
            var Wsd = H( () => ({
                type: F("A?", 8, "REORDER"),
                direction: __c.Pa(29, Vsd),
                order: iK(30),
                $Lc: (0,
                __c.sK)(31)
            }));
            var Xsd = __c.ab( () => ({
                type: [1, Ksd, 2, Nsd, 3, Psd, 4, Qsd, 5, Ssd, 6, Usd, 8, Wsd]
            }), () => ({}));
            var Ysd = H( () => ({
                selector: W(1),
                hJ: Na(2, Xsd)
            }));
            var Zsd = H( () => ({
                top: hK(1),
                left: hK(2),
                width: hK(3),
                height: hK(4),
                rotation: kK(5)
            }));
            var $sd = H( () => ({
                Bwc: Oa(1, Ysd),
                Aea: Na(2, Zsd)
            }));
            var zjd = H( () => ({
                selection: Na(1, $sd)
            }));
            __c.atd = H( () => ({
                url: W(1),
                width: iK(2),
                height: iK(3)
            }));
            __c.Ajd = H( () => ({
                images: Oa(1, __c.atd)
            }));
            __c.O5 = H( () => ({
                id: W(1),
                version: iK(2)
            }));
            var Bjd = H( () => ({
                vE: Na(1, __c.O5)
            }));
            var btd = bb( () => [1, 2]);
            var ctd = H( () => ({
                $0b: __c.Qa(1, btd)
            }));
            var dtd = H( () => ({}));
            var etd = H( () => ({
                wnc: kK(1),
                Gnc: kK(2),
                wq: Y(3),
                vE: G(4, __c.O5)
            }));
            var ftd = H( () => ({
                type: F("A?", 1, "MEDIA_REPLACE")
            }));
            var gtd = __c.ab( () => ({
                type: [1, ftd]
            }), () => ({}));
            var htd = H( () => ({
                selector: W(1),
                hJ: Na(2, gtd)
            }));
            var itd = H( () => ({
                nodes: Oa(1, htd)
            }));
            var jtd = H( () => ({
                tTb: qK(1)
            }));
            var ktd = H( () => ({}));
            __c.X4 = class {
                wDa(a) {
                    return this.FCa.sendMessage("Editing2SdkIframe.setInteractionMode", ctd.serialize(a), this.config?.wDa).then(v4.wrap(dtd.S))
                }
                sAa(a) {
                    return this.FCa.sendMessage("Editing2SdkIframe.onDragDropHover", etd.serialize(a), this.config?.sAa).then(v4.wrap(itd.S))
                }
                rAa(a) {
                    return this.FCa.sendMessage("Editing2SdkIframe.onDragDropEnd", jtd.serialize(a), this.config?.rAa).then(v4.wrap(ktd.S))
                }
                constructor(a, b) {
                    this.FCa = a;
                    this.config = b
                }
            }
            ;
            __c.X4.prototype.cZa = __c.ba(55);
            var O4 = class extends Error {
                constructor(a) {
                    a.code = a.code;
                    const b = a.message.endsWith(".") ? "" : ".";
                    super(`[${a.code}]:  ${a.message}${b}`.trim());
                    this.code = a.code;
                    this.name = "CanvaError";
                    this.Ebc = a.message;
                    Object.setPrototypeOf(this, O4.prototype)
                }
            }
            ;
            var ltd = class {
                constructor(a, b, c) {
                    this.dU = a;
                    this.port = b;
                    this.J = c;
                    this.send = d => {
                        try {
                            return this.port.postMessage(d),
                            ya()
                        } catch (e) {
                            return this.J.Db(e),
                            (0,
                            __c.Aa)(e)
                        }
                    }
                    ;
                    this.$8b = d => {
                        this.J.Db(d)
                    }
                    ;
                    this.u$ = ({data: d}) => {
                        if (d)
                            try {
                                this.dU.Jbc(d)
                            } catch (e) {
                                this.J.Db(e)
                            }
                        else
                            this.J.error(new O4({
                                code: "internal_error",
                                message: "missing data in 'MessageEvent'"
                            }))
                    }
                    ;
                    this.port.onmessage = this.u$;
                    this.port.onmessageerror = this.$8b
                }
            }
            ;
            var Djd = class extends Error {
                constructor() {
                    super("[internal_error] Comms promise timed out.")
                }
            }
              , mtd = class {
                reset(a) {
                    a && (this.timeoutMs = a);
                    this.setTimeout()
                }
                resolve(a) {
                    clearTimeout(this.We);
                    this.Vcc(a)
                }
                reject(a) {
                    clearTimeout(this.We);
                    this.Oub(a)
                }
                promise() {
                    return this.p
                }
                setTimeout() {
                    clearTimeout(this.We);
                    this.We = setTimeout(v4.wrap( () => {
                        Ejd(this)
                    }
                    ), Math.max(this.timeoutMs - 500, 500))
                }
                constructor() {
                    this.timeoutMs = 2E4;
                    this.p = new Promise( (a, b) => {
                        this.Vcc = a;
                        this.Oub = b
                    }
                    );
                    this.setTimeout()
                }
            }
            ;
            var ntd = class {
                request(a, b) {
                    const c = this.Vsb
                      , d = this.nub
                      , e = new mtd
                      , f = this.Fcc()
                      , g = async function() {
                        const h = N4()();
                        try {
                            c.set(f, {
                                path: a,
                                Hcc: e
                            });
                            try {
                                const k = h.r(await h.s(e.promise()));
                                return ya(k)
                            } catch (k) {
                                return h.r(),
                                k instanceof Djd ? (d.set(f, [a, Date.now()]),
                                d.size > 32 && d.delete(d.keys().next().value),
                                (0,
                                __c.Aa)(new O4({
                                    code: "internal_error",
                                    message: `Comms promise timed out (${a}).`
                                }))) : (0,
                                __c.Aa)(k)
                            } finally {
                                c.delete(f)
                            }
                        } finally {
                            h.s()
                        }
                    }();
                    b = this.send(f, a, b);
                    b.ok || (this.J.Db(b.error, {
                        Zd: "unable to send request",
                        tags: new Map([["type", "request"], ["path", a]])
                    }),
                    e.reject(b.error));
                    return g
                }
                constructor(a, b) {
                    this.send = a;
                    this.J = b;
                    this.Fcc = __c.sa;
                    this.Vsb = new Map;
                    this.nub = new Map
                }
            }
            ;
            var otd = class {
                handle(a, b) {
                    if (this.M1.has(a))
                        throw new O4({
                            code: "internal_error",
                            message: `Handler for '${a}' is already defined.`
                        });
                    this.M1.set(a, b);
                    return () => this.M1.delete(a)
                }
                constructor(a, b) {
                    var c = console;
                    this.Lka = a;
                    this.J = b;
                    this.Dcc = !0;
                    this.mSb = c;
                    this.M1 = new Map;
                    this.qVb = new Set
                }
            }
            ;
            var rkd = class {
                constructor(a, b) {
                    this.request = (c, d) => this.client.request(c, d);
                    this.handle = (c, d) => this.M1.handle(c, d);
                    a = new ptd(c => {
                        switch (c.type) {
                        case "ack":
                        case "error":
                        case "response":
                            var d = this.client;
                            const e = c.requestId
                              , f = c.type
                              , {path: g, Hcc: h} = d.Vsb.get(e) || {};
                            if (h)
                                switch (f) {
                                case "response":
                                    h.resolve(c.payload);
                                    break;
                                case "ack":
                                    h.reset(3E4);
                                    break;
                                case "error":
                                    d.J.Ada({
                                        level: "info",
                                        category: "sandbox_comms",
                                        message: "Error response received",
                                        data: {
                                            path: g ?? "unknown"
                                        }
                                    });
                                    h.reject(new O4({
                                        code: c.code,
                                        message: c.message
                                    }));
                                    break;
                                default:
                                    throw new z(c);
                                }
                            else if (f !== "ack") {
                                const [k,l] = d.nub.get(e) ?? ["not_recently_timed_out", void 0];
                                c = l !== void 0 ? new Map([["time_since_timeout", Date.now() - l]]) : void 0;
                                d.J.error("request has already been handled and resolved or was not sent from this client", {
                                    tags: new Map([["type", f], ["path", k]]),
                                    extra: c
                                })
                            }
                            break;
                        case "request":
                            Gjd(this.M1, c);
                            break;
                        default:
                            throw new z(c);
                        }
                    }
                    ,a,b.Wd("bus"));
                    this.client = new ntd(a.SL,b.Wd("client"));
                    this.M1 = new otd(a,b.Wd("requestHandler"))
                }
            }
              , ptd = class {
                constructor(a, b, c) {
                    this.Lwa = a;
                    this.SL = (d, e, f) => this.Cea.send({
                        type: "request",
                        requestId: d,
                        path: e,
                        payload: f
                    });
                    this.i9b = d => {
                        switch (d.type) {
                        case "ack":
                            this.Lwa({
                                type: "ack",
                                requestId: d.requestId
                            });
                            break;
                        case "error":
                            this.Lwa({
                                type: "error",
                                requestId: d.requestId,
                                code: d.code,
                                message: d.message
                            });
                            break;
                        case "response":
                            this.Lwa({
                                type: "response",
                                requestId: d.requestId,
                                payload: d.payload
                            });
                            break;
                        case "request":
                            this.Lwa({
                                type: "request",
                                requestId: d.requestId,
                                path: d.path,
                                payload: d.payload
                            });
                            break;
                        default:
                            throw new z(d);
                        }
                    }
                    ;
                    this.Cea = new ltd({
                        Jbc: this.i9b
                    },b,c)
                }
            }
            ;
            var Hjd = H( () => ({}));
            __c.qtd = H( () => ({
                Rfa: W(1),
                qe: W(2)
            }));
            __c.Q4 = H( () => ({
                fj: Y("documentId", 1),
                Qf: Y("elementId", 2),
                Xk: Y("pageId", 6),
                FGb: G("websiteContext", 3, __c.qtd),
                xua: Y("documentExtension", 5),
                up: __c.rK("isPreview", 4)
            }), {
                xe: 0
            });
            var Ijd = H( () => ({}));
            __c.R4 = H( () => ({}));
            var rtd = H( () => ({
                width: iK(1),
                height: iK(2)
            }));
            var a5 = H( () => ({
                src: W(1),
                width: iK(2)
            }));
            var std = bb( () => [0, 1]);
            var ttd = H( () => ({
                src: W("src", 1),
                weight: W("weight", 2),
                style: W("style", 3),
                gnb: __c.Pa("loadMode", 4, std)
            }), {
                xe: 0
            });
            var utd = H( () => ({
                fbb: Y("cssFontFamily", 1),
                id: Y("id", 2),
                src: Y("src", 3),
                weight: W("weight", 4),
                style: W("style", 5),
                variants: Oa("variants", 6, ttd)
            }), {
                xe: 0
            });
            var Kkd = H( () => ({
                textContent: Y("textContent", 1),
                background: Y("background", 2),
                yMb: G("backgroundDimensions", 7, rtd),
                CMb: Oa("backgroundImageSrcs", 12, a5),
                color: Y("color", 3),
                font: G("font", 4, utd),
                fontSize: __c.lK("fontSize", 8),
                letterSpacing: kK("letterSpacing", 9),
                lineHeight: kK("lineHeight", 10),
                St: Y("imageSrc", 5),
                Jia: Oa("imageSrcs", 11, a5),
                La: Y("altText", 6)
            }), {
                xe: 0
            });
            __c.vtd = H( () => ({
                config: (0,
                __c.vK)("config", 1, Kkd)
            }), {
                xe: 0
            });
            var wtd = H( () => ({}));
            var xtd = H( () => ({
                DT: W("entityId", 1)
            }), {
                xe: 0
            });
            var ytd = H( () => ({
                success: qK("success", 1)
            }), {
                xe: 0
            });
            var ztd = H( () => ({
                jHb: hK("xPosPct", 1),
                pHb: hK("yPosPct", 2)
            }), {
                xe: 0
            });
            var Atd = H( () => ({
                success: qK("success", 1)
            }), {
                xe: 0
            });
            var Btd = H( () => ({
                jHb: hK("xPosPct", 1),
                pHb: hK("yPosPct", 2)
            }), {
                xe: 0
            });
            var Ctd = H( () => ({}), {
                xe: 0
            });
            var Dtd = H( () => ({
                wnc: hK(1),
                Gnc: hK(2),
                wq: W(3),
                jNc: Na(4, rtd)
            }));
            var Etd = H( () => ({
                DT: Y(1)
            }));
            var Ftd = H( () => ({
                tTb: qK(1)
            }));
            var Gtd = H( () => ({}));
            var Htd = H( () => ({
                mxc: __c.rK("enableCodeletSelectionFrame", 1),
                kxc: qK("enableClampingToPreventWordBreaks", 2),
                yxc: __c.rK("enableEditingOverlays", 3),
                xxc: qK("enableEditingContextMenu", 4),
                lxc: qK("enableCodelet2LineHeight", 5)
            }), {
                xe: 0
            });
            var Itd = H( () => ({}));
            var Jtd = bb( () => [1, 2]);
            var Ktd = H( () => ({
                $0b: __c.Qa("interactionMode", 1, Jtd)
            }), {
                xe: 0
            });
            var Ltd = H( () => ({}), {
                xe: 0
            });
            var Mtd = H( () => ({
                DT: W("entityId", 1)
            }), {
                xe: 0
            });
            var Ntd = H( () => ({
                success: qK("success", 1)
            }), {
                xe: 0
            });
            var Otd = H( () => ({
                jHb: hK("xPosPct", 1),
                pHb: hK("yPosPct", 2)
            }), {
                xe: 0
            });
            var Ptd = H( () => ({}), {
                xe: 0
            });
            var Qtd = H( () => ({}), {
                xe: 0
            });
            var Rtd = H( () => ({
                success: qK("success", 1)
            }), {
                xe: 0
            });
            var Std = H( () => ({}), {
                xe: 0
            });
            var Ttd = H( () => ({
                success: qK("success", 1)
            }), {
                xe: 0
            });
            var Utd = H( () => ({}));
            var P5 = H( () => ({
                top: iK("top", 1),
                left: iK("left", 2),
                width: iK("width", 3),
                height: iK("height", 4)
            }), {
                xe: 0
            });
            var Vtd = H( () => ({
                ywc: Oa(2, P5)
            }));
            var Xtd = class {
                UL(a) {
                    return this.yB.exec(this.wl.serviceName, this.wl.UL, __c.vtd.serialize(a)).then(v4.wrap(wtd.S))
                }
                hvb(a) {
                    return this.yB.exec(this.wl.serviceName, this.wl.hvb, xtd.serialize(a)).then(v4.wrap(ytd.S))
                }
                w$(a) {
                    return this.yB.exec(this.wl.serviceName, this.wl.w$, ztd.serialize(a)).then(v4.wrap(Atd.S))
                }
                urb(a) {
                    return this.yB.exec(this.wl.serviceName, this.wl.urb, Btd.serialize(a)).then(v4.wrap(Ctd.S))
                }
                sAa(a) {
                    return this.yB.exec(this.wl.serviceName, this.wl.sAa, Dtd.serialize(a)).then(v4.wrap(Etd.S))
                }
                rAa(a) {
                    return this.yB.exec(this.wl.serviceName, this.wl.rAa, Ftd.serialize(a)).then(v4.wrap(Gtd.S))
                }
                Pzb(a) {
                    return this.yB.exec(this.wl.serviceName, this.wl.Pzb, Htd.serialize(a)).then(v4.wrap(Itd.S))
                }
                wDa(a) {
                    return this.yB.exec(this.wl.serviceName, this.wl.wDa, Ktd.serialize(a)).then(v4.wrap(Ltd.S))
                }
                fhb(a) {
                    return this.yB.exec(this.wl.serviceName, this.wl.fhb, Mtd.serialize(a)).then(v4.wrap(Ntd.S))
                }
                constructor(a) {
                    var b = Wtd;
                    this.yB = a;
                    this.wl = b;
                    this.Uqb = y3({
                        axa: this.yB,
                        serviceName: this.wl.serviceName,
                        methodName: this.wl.Uqb,
                        iDa: Otd.serialize,
                        Xta: Ptd.S
                    });
                    this.uwb = y3({
                        axa: this.yB,
                        serviceName: this.wl.serviceName,
                        methodName: this.wl.uwb,
                        iDa: Qtd.serialize,
                        Xta: Rtd.S
                    });
                    this.Ljb = y3({
                        axa: this.yB,
                        serviceName: this.wl.serviceName,
                        methodName: this.wl.Ljb,
                        iDa: Std.serialize,
                        Xta: Ttd.S
                    });
                    this.eib = y3({
                        axa: this.yB,
                        serviceName: this.wl.serviceName,
                        methodName: this.wl.eib,
                        iDa: Utd.serialize,
                        Xta: Vtd.S
                    })
                }
            }
            ;
            var Ytd = bb( () => [1, 2]);
            var Kjd = H( () => ({
                status: __c.Pa("status", 1, Ytd)
            }), {
                xe: 0
            });
            __c.Ljd = H( () => ({}), {
                xe: 0
            });
            var Ztd = H( () => ({
                DT: W("entityId", 1),
                Aea: Na("boundingRect", 2, P5),
                Jwc: Y("elementLabel", 3),
                GMc: qK("permitPointerEvents", 4),
                TQc: Oa("templatedElements", 5, P5),
                Qf: Y("elementId", 6)
            }), {
                xe: 0
            });
            var Mjd = H( () => ({
                selection: G("selection", 1, Ztd)
            }), {
                xe: 0
            });
            __c.S4 = H( () => ({}));
            var Njd = H( () => ({
                rect: G("rect", 1, P5)
            }), {
                xe: 0
            });
            __c.T4 = H( () => ({}));
            var Ojd = H( () => ({
                DT: W("entityId", 1),
                textContent: W("textContent", 2)
            }), {
                xe: 0
            });
            __c.Pjd = H( () => ({}));
            var Qjd = H( () => ({
                DT: W("entityId", 1),
                focused: qK("focused", 2),
                ZQc: G("textDimensions", 3, P5)
            }), {
                xe: 0
            });
            __c.U4 = H( () => ({}));
            var Rjd = H( () => ({
                DT: W(1)
            }));
            __c.Sjd = H( () => ({}));
            var Tjd = H( () => ({}));
            __c.Ujd = H( () => ({}));
            var Wtd = {
                serviceName: "canva-code-editing-sdk",
                UL: "SET_EDITING_CONFIG",
                hvb: "REQUEST_SELECTION",
                w$: "SELECTION",
                urb: "SELECTION_HOVER",
                sAa: "DRAG_DROP_HOVER_EVENT",
                rAa: "DRAG_DROP_END_EVENT",
                Pzb: "SET_FEATURE_FLAGS",
                wDa: "SET_INTERACTION_MODE",
                Uqb: "INTERACTION_CLICK",
                uwb: "SELECT_BACKGROUND",
                Ljb: "HOVER_BACKGROUND",
                eib: "GET_EDITABLE_REGIONS_REQUEST",
                fhb: "FOCUS_TEXT"
            };
            var okd = class extends Xtd {
                async UL(a) {
                    const b = N4()();
                    try {
                        const c = b.r(await b.s(super.UL(a)));
                        !this.kub && this.ola && (this.kub = !0,
                        this.ola());
                        return c
                    } finally {
                        b.s()
                    }
                }
                constructor(a, b) {
                    super({
                        exec: async (c, d, e) => {
                            const f = N4()();
                            try {
                                x(c === Wtd.serviceName);
                                const g = f.r(await f.s(a.request(d, e)));
                                if (!g.ok)
                                    throw Error(`Encountered an error while sending ${d} request: ${g.error}`);
                                if (g.value == null)
                                    throw Error(`${d}: Result cannot be empty`);
                                return g.value
                            } finally {
                                f.s()
                            }
                        }
                    });
                    this.ola = b;
                    this.kub = !1
                }
            }
            ;
            __c.Q5 = H( () => ({
                type: F("type", "FONT_EDITABLE", 3, "FONT_EDITABLE"),
                id: W("id", 1),
                url: W("url", 4)
            }), {
                xe: 0
            });
            __c.R5 = H( () => ({
                type: F("type", "RECOLORABLE", 1, "RECOLORABLE"),
                id: W("id", 1),
                value: W("value", 2)
            }), {
                xe: 0
            });
            var $td = H( () => ({
                borderRadius: iK("borderRadius", 1),
                borderWidth: iK("borderWidth", 2)
            }), {
                xe: 0
            });
            __c.aud = H( () => ({
                type: F("type", "BORDERABLE", 2, "BORDERABLE"),
                id: W("id", 1),
                value: Na("value", 2, $td)
            }), {
                xe: 0
            });
            __c.bud = H( () => ({
                id: W("id", 1),
                value: W("value", 2)
            }), {
                xe: 0
            });
            __c.S5 = H( () => ({
                type: F("type", "FONT_SIZEABLE", 5, "FONT_SIZEABLE"),
                size: iK("size", 21)
            }), {
                xe: 0
            });
            var Wjd = H( () => ({
                config: W("config", 1)
            }), {
                xe: 0
            });
            __c.Xjd = H( () => ({
                config: Y("config", 1),
                a_: G("fontEditable", 2, __c.Q5)
            }), {
                xe: 0
            });
            var Yjd = H( () => ({
                config: W("config", 1),
                kaa: Oa("recolorables", 4, __c.R5),
                gNb: Oa("borderables", 5, __c.aud),
                a_: G("fontEditable", 6, __c.Q5),
                CTb: Oa("editPanelValues", 7, __c.bud),
                tO: G("fontSizeable", 8, __c.S5)
            }), {
                xe: 0
            });
            __c.Zjd = H( () => ({}));
            var cud = H( () => ({
                scrollWidth: iK("scrollWidth", 1),
                scrollHeight: iK("scrollHeight", 2),
                offsetWidth: iK("offsetWidth", 3),
                offsetHeight: iK("offsetHeight", 4)
            }), {
                xe: 0
            });
            var $jd = H( () => ({
                body: Na("body", 1, cud)
            }), {
                xe: 0
            });
            var nkd = class {
                constructor(a) {
                    this.zLa = a
                }
            }
            ;
            var dud = H( () => ({
                scrollWidth: iK("scrollWidth", 1),
                scrollHeight: iK("scrollHeight", 2),
                offsetWidth: iK("offsetWidth", 3),
                offsetHeight: iK("offsetHeight", 4)
            }), {
                xe: 0
            });
            var bkd = H( () => ({
                body: Na("body", 1, dud)
            }), {
                xe: 0
            });
            __c.ckd = H( () => ({}));
            var ekd = H( () => ({}));
            __c.V4 = H( () => ({
                fj: Y("documentId", 1),
                Qf: Y("elementId", 2)
            }), {
                xe: 0
            });
            var fkd = H( () => ({
                izc: __c.jK(1),
                BG: W(2),
                message: W(3)
            }));
            __c.W4 = H( () => ({}));
            var Tkd = class {
                constructor(a, b) {
                    this.ixa = a;
                    this.J = b;
                    this.WY = new Map
                }
            }
            ;
            var eud = p5(function({Ms: a, className: b, url: c, embed: d, t0a: e, qaa: f, dca: g, dla: h, EWa: k, zMc: l=tkd, UC: m}) {
                const n = f5(new Map)
                  , [p] = Z4(Promise.withResolvers())
                  , q = f5(k);
                q.current = k;
                const r = q5( () => `${a}-${c}-${sa()}`, [c, a])
                  , {id: t, src: w, sandbox: v, allow: A, allowFullscreen: B} = l(y(d.html));
                r5( () => {
                    let C = n.current.get(r)?.promise;
                    if (C == null) {
                        const E = Promise.withResolvers();
                        C = E.promise;
                        n.current.set(r, E)
                    }
                    f(r, C).then(v4.wrap( () => {
                        p.resolve();
                        q.current?.()
                    }
                    ), v4.wrap(E => p.reject(E)));
                    return () => {
                        g(r)
                    }
                }
                , [f, g, r, p]);
                return Y4("div", {
                    className: b,
                    children: Y4("div", {
                        ref: C => {
                            C && e?.(C)
                        }
                        ,
                        className: "wI2uWQ",
                        children: Y4(m, {
                            id: t,
                            className: "x3xE7g",
                            Abb: r,
                            IGb: p.promise,
                            src: w,
                            title: d.title || L("gs+cqw"),
                            sandbox: v,
                            allow: A,
                            allowFullScreen: B,
                            onLoad: () => {
                                h?.();
                                const C = n.current.get(r);
                                C && C.resolve()
                            }
                            ,
                            onError: () => {
                                h?.();
                                const C = n.current.get(r);
                                C && C.reject(Error("Iframe failed to load"))
                            }
                        })
                    })
                })
            });
            var vkd = p5(function(a) {
                const {index: b=0, children: c} = a;
                a = b * 20 * 1E3 / 100;
                const d = b * 15 * 5E3 / 100
                  , e = __c.yx();
                return hnd("div", {
                    style: {
                        animationDuration: "1000ms",
                        animationDelay: `-${a}ms`,
                        animationPlayState: e ? "paused" : "running"
                    },
                    className: "R_LFMQ",
                    children: [Y4("div", {
                        className: "zlURpw",
                        style: {
                            animationDuration: "5000ms",
                            animationDelay: `-${d}ms`,
                            animationPlayState: "running"
                        }
                    }), Y4("div", {
                        className: "Lx7A3Q",
                        style: {
                            animationPlayState: e ? "paused" : "running"
                        }
                    }), c]
                })
            });
            var xkd = h5(function({url: a, Owa: b, Nj: c, XB: d, S8b: e, j8b: f, Ms: g, NY: h, ND: k, Lb: l, Xp: m, Ur: n, lb: p, UC: q}) {
                const {qaa: r, dca: t} = q5( () => ({
                    qaa: (w, v) => qkd(h, w, v, {
                        gba: b.data,
                        BDa: b.element,
                        ADa: b.Bk,
                        W0a: b.DTb,
                        CDa: b.O1,
                        hba: b.telemetry
                    }),
                    dca: w => ikd(h, w)
                }), [b, h]);
                return Y4(__c.iA, {
                    url: a,
                    store: m,
                    hk: n,
                    ND: k,
                    lb: p,
                    Ama: l > 10,
                    Uu: "content",
                    Nj: c || !1,
                    fJb: wkd,
                    XB: d,
                    ncc: (w, v, A) => Y4(eud, {
                        className: w,
                        Ms: g,
                        url: a,
                        embed: v,
                        t0a: A,
                        qaa: r,
                        dca: t,
                        dla: e,
                        EWa: f,
                        UC: q
                    })
                })
            });
            var Ckd;
            __c.fud = class {
                async NU(a) {
                    const b = N4()();
                    try {
                        const d = this.$n(a)
                          , e = this.yUa.get(d);
                        if (e != null)
                            return e;
                        if (!this.cache.has(d)) {
                            var c = Bkd(this, d, a).finally(v4.wrap( () => {
                                this.yUa.delete(d)
                            }
                            ));
                            this.yUa.set(d, c);
                            b.r(await b.s(c))
                        }
                    } finally {
                        b.s()
                    }
                }
                TG(a, b) {
                    a = this.$n(a);
                    a = this.cache.get(a);
                    if (a != null) {
                        if (a.type === "url")
                            return {
                                url: a.url,
                                width: a.M.width,
                                height: a.M.height,
                                La: a.La
                            };
                        b = Dkd(a.images, b);
                        if (b != null)
                            return {
                                url: (new URL(b.url,self.location.href)).href,
                                width: b.width,
                                height: b.height,
                                La: a.La
                            }
                    }
                }
                vwa(a) {
                    a = this.$n(a);
                    a = this.cache.get(a);
                    if (a != null && a.type !== "url")
                        return a.Jia
                }
                $n(a) {
                    return `${a.id}:${a.version}`
                }
                constructor(a) {
                    this.RC = a;
                    this.yUa = new Map;
                    this.cache = new Map
                }
            }
            ;
            Ckd = Object.freeze({
                [1]: 50,
                [2]: 75,
                [3]: 150,
                [4]: 200,
                [5]: 550,
                [6]: 800,
                [7]: 1600,
                [8]: 2400,
                [9]: Number.MAX_SAFE_INTEGER,
                [10]: Number.MAX_SAFE_INTEGER
            });
            var Jkd = [{
                weight: "normal",
                Mja: !1
            }, {
                weight: "bold",
                Mja: !1
            }, {
                weight: "normal",
                Mja: !0
            }, {
                weight: "bold",
                Mja: !0
            }]
              , Ekd = class extends Cod {
                xX() {}
                tR(a) {
                    a && this.Zi(a)
                }
                uR(a) {
                    a && this.Zi(a)
                }
                vca({fontFamily: a}) {
                    switch (a?.type) {
                    case 2:
                    case void 0:
                        break;
                    case 1:
                        this.G4a({
                            type: "font",
                            ...a.fontFamily
                        });
                        break;
                    default:
                        throw new z(a);
                    }
                }
                wca() {}
                vX() {}
                wX() {}
                vR(a) {
                    switch (a?.type) {
                    case 2:
                    case void 0:
                        break;
                    case 1:
                        this.G4a({
                            type: "media",
                            ...a.media
                        });
                        break;
                    default:
                        throw new z(a);
                    }
                }
                tX() {}
                yca() {}
                Aca() {}
                Cca() {}
                xca() {}
                zca() {}
                Bca() {}
                Zi(a) {
                    a.image && this.hGa(a.image)
                }
                hGa(a) {
                    switch (a.media.type) {
                    case "RESOLVED":
                        this.G4a({
                            type: "media",
                            id: a.media.id,
                            version: a.media.version
                        });
                        break;
                    case "UNRESOLVED":
                        break;
                    default:
                        throw new z(a.media);
                    }
                }
            }
            ;
            var Pkd = p5(function({className: a, url: b, embed: c, config: d, ec: e, Fa: f, dla: g, Ms: h, NY: k, Owa: l, J: m, UC: n}) {
                const [p,q] = Z4(null);
                r5( () => {
                    q(null)
                }
                , [c.html]);
                const r = Yld(v => {
                    q(v);
                    return {
                        jfb: {
                            qwb: async () => new __c.Ljd,
                            ywb: async () => new __c.S4,
                            Mjb: async () => new __c.T4,
                            JCb: async () => new __c.Pjd,
                            MCb: async () => new __c.U4,
                            m1a: async () => new __c.Sjd,
                            dLa: async () => new __c.Ujd
                        }
                    }
                }
                , []);
                r5( () => {
                    (async () => {
                        const v = N4()();
                        try {
                            try {
                                if (d && p) {
                                    var A = new __c.fud(e)
                                      , B = E => __c.zkd(E, d) ? 7 : 6
                                      , C = v.r(await v.s(Promise.all([...d.entries()].map(async ([E,I]) => {
                                        const J = N4()();
                                        try {
                                            return [E, J.r(await J.s(__c.Lkd(I, {
                                                Sr: A,
                                                Fa: f
                                            }, B(E))))]
                                        } finally {
                                            J.s()
                                        }
                                    }
                                    ))));
                                    v.r(await v.s(p.UL(new __c.vtd({
                                        config: new Map(C)
                                    }))))
                                }
                            } catch (E) {
                                v.r(),
                                m.Db(E)
                            }
                        } finally {
                            v.s()
                        }
                    }
                    )()
                }
                , [d, p, e, f, m]);
                const {qaa: t, dca: w} = q5( () => ({
                    qaa: (v, A) => qkd(k, v, A, {
                        gba: l.data,
                        BDa: l.element,
                        ADa: r,
                        CDa: l.O1,
                        hba: l.telemetry
                    }),
                    dca: v => ikd(k, v)
                }), [l, k, r]);
                return Y4(eud, {
                    className: a,
                    Ms: h,
                    url: b,
                    embed: c,
                    qaa: t,
                    dca: w,
                    dla: g,
                    UC: n
                })
            });
            var Okd = class {
                $n(a) {
                    return `${a.id},${a.version}`
                }
                async $J(a) {
                    const b = N4()();
                    try {
                        const c = a.map(e => {
                            const f = this.$n(e);
                            return [e, this.dW.has(f) ? Promise.resolve(this.dW.get(f)) : this.S7.qp(e)]
                        }
                        ).map(async ([e,f]) => {
                            const g = N4()();
                            try {
                                return [e, g.r(await g.s(f))]
                            } finally {
                                g.s()
                            }
                        }
                        )
                          , d = b.r(await b.s(Promise.all(c)));
                        d.forEach( ([e,f]) => this.dW.set(this.$n(e), f));
                        return d.map( ([,e]) => e)
                    } finally {
                        b.s()
                    }
                }
                hz(a) {
                    return this.dW.get(this.$n(a))
                }
                rQ(a) {
                    return __c.zp(a)
                }
                constructor(a) {
                    this.S7 = a;
                    this.dW = new __c.OT(256)
                }
            }
            ;
            var Nkd = class {
                $n(a) {
                    return `${a.id},${a.version}`
                }
                async NU(a) {
                    const b = N4()();
                    try {
                        const c = this.$n(a);
                        this.yZa.has(c) || this.yZa.set(c, b.r(await b.s(this.VU.qp({
                            type: "RESOLVED",
                            id: a.id,
                            version: a.version
                        }))));
                        return this.TG(a, void 0)
                    } finally {
                        b.s()
                    }
                }
                TG(a) {
                    a = this.yZa.get(this.$n(a))?.files;
                    if (a != null && a.length !== 0)
                        return {
                            type: "image_ref",
                            images: a,
                            M: {
                                width: a[0].width,
                                height: a[0].height
                            },
                            La: void 0
                        }
                }
                constructor(a) {
                    this.VU = a;
                    this.yZa = new __c.OT(256)
                }
            }
            ;
            var Rkd = 0;
            var gud = class {
                getAssets() {
                    return __c.b5(this.yf.getAssets())
                }
                getSceneResolution() {
                    return this.yf.getSceneResolution()
                }
                getStartFrame() {
                    return this.yf.getStartFrame()
                }
                getEndFrame() {
                    return this.yf.getEndFrame()
                }
                getFPS() {
                    return this.yf.getFPS()
                }
                getActiveComp() {
                    return this.yf.getActiveComp()
                }
                serialiseToString() {
                    return this.yf.serialiseToString()
                }
                writeFile(a, b) {
                    this.module.FS.writeFile(a, b)
                }
                replaceImageAsset(a, b) {
                    this.yf.replaceImageAsset(a, b)
                }
                loadFont(a, b) {
                    return this.module.loadFont(b, a)
                }
                getFontStyles(a) {
                    return __c.b5(this.yf.getFontStyles(a))
                }
                queryFonts() {
                    return __c.b5(this.yf.queryFonts())
                }
                getLayerType(a) {
                    return this.yf.getLayerType(a)
                }
                getAttrLayerType(a, b) {
                    return this.yf.getAttrLayerType(a, b)
                }
                getAttrEditableChildren(a, b) {
                    return __c.b5(this.yf.getAttrEditableChildren(a, b))
                }
                constructor(a, b, c) {
                    this.module = a;
                    this.yf = b;
                    this.A7 = c
                }
            }
            ;
            var yld = class {
                async initialize() {
                    const a = N4()();
                    try {
                        a.r(await a.s(this.loadModule()))
                    } finally {
                        a.s()
                    }
                }
                async loadScene(a, b) {
                    const c = N4()();
                    try {
                        const d = c.r(await c.s(this.loadModule()))
                          , e = `${a}:${Ykd(b)}`;
                        this.jnb.has(e) || (d.FS.writeFile(e, new Uint8Array(b)),
                        this.jnb.add(e));
                        const f = d.CavalryEngine.createScene(e);
                        return new gud(d,f, (g, h) => this.A7(g, h))
                    } finally {
                        c.s()
                    }
                }
                A7(a, b) {
                    return this.EDa ? (Wkd(this, a, b),
                    Promise.resolve()) : Xkd(this, a, b)
                }
                loadModule() {
                    this.vkb || (Vkd(this),
                    this.vgb || (this.vgb = this.z3b()),
                    this.vkb = this.vgb.then(v4.wrap(a => a({
                        locateFile: b => {
                            switch (b) {
                            case "CavalryWasm.wasm":
                                return this.BGb;
                            case "CavalryWasm.data":
                                return this.AGb;
                            case "enumStrings.data":
                                return this.Ymc;
                            default:
                                return b
                            }
                        }
                    }))).then(v4.wrap(a => {
                        a.CavalryEngine.Init();
                        return a
                    }
                    )));
                    return this.vkb
                }
                constructor(a, b=knd, c=jnd, d=lnd, e= () => __webpack_require__.me(312224).then(v4.wrap( ({default: h}) => h)), f= (...h) => fetch(...h), g= (h, k) => new (y(OffscreenCanvas))(h,k)) {
                    this.J = a;
                    this.BGb = b;
                    this.AGb = c;
                    this.Ymc = d;
                    this.z3b = e;
                    this.wva = f;
                    this.WQb = g;
                    this.jnb = new Set;
                    this.EDa = !1;
                    this.Ana = this.Bna = 0
                }
            }
            ;
            var xld;
            var bld = class {
                bk(a) {
                    this.loading || (this.loading = (a ?? Promise.resolve()).then(v4.wrap( () => this.load())));
                    return this.loading
                }
                constructor(a, b) {
                    this.id = a;
                    this.ck = b
                }
            }
            ;
            var umd = class {
                q6(a, b, c, d) {
                    b = {
                        Lb: b,
                        On: c,
                        jl: d
                    };
                    if (this.Zgb !== void 0) {
                        a: switch (c = this.Zgb,
                        d = a.oc,
                        x(d.type !== "body", "Unexpected body context in fixed document."),
                        d.type) {
                        case "fixed-page":
                            a = {
                                page: c.kib(d),
                                M: new T5(a),
                                Qf: a.C.id,
                                ...b
                            };
                            break a;
                        case "concatenated-fixed-page":
                            a = {
                                page: c.Uhb(d),
                                M: new T5(a),
                                Qf: a.C.id,
                                ...b
                            };
                            break a;
                        case "controlled-page":
                            a = {
                                page: c.Xhb(d),
                                M: new T5(a),
                                Qf: a.C.id,
                                ...b
                            };
                            break a;
                        case "video-page":
                            throw new __c.Ax;
                        case "responsive-page":
                            a = {
                                page: c.Fib(d),
                                M: new T5(a),
                                Qf: a.C.id,
                                ...b
                            };
                            break a;
                        default:
                            throw new z(d);
                        }
                        return a
                    }
                    x(this.wvb !== void 0, "Expected responsive document context.");
                    c = this.wvb;
                    d = a.oc;
                    x(d.type === "body", "Expected body context in responsive document.");
                    return {
                        page: c.Thb(d),
                        M: new T5(a),
                        Qf: a.C.id,
                        ...b
                    }
                }
                constructor(a, b) {
                    const c = b.Sg;
                    switch (c) {
                    case "fixed":
                        this.Zgb = new hud(a,__c.el(b));
                        break;
                    case "responsive":
                        this.wvb = new iud(a,new __c.os(b));
                        break;
                    default:
                        throw new z(c);
                    }
                }
            }
              , T5 = class {
                get top() {
                    switch (this.container.type) {
                    case "controlled-item":
                        return 0;
                    case "controlled-page":
                        return 0;
                    case "controlled-element":
                        return this.container.C.top;
                    default:
                        throw new z(this.container);
                    }
                }
                get left() {
                    switch (this.container.type) {
                    case "controlled-item":
                        return 0;
                    case "controlled-page":
                        return 0;
                    case "controlled-element":
                        return this.container.C.left;
                    default:
                        throw new z(this.container);
                    }
                }
                get K() {
                    switch (this.container.type) {
                    case "controlled-item":
                        return this.container.C.Ze?.width ?? 0;
                    case "controlled-page":
                        return 0;
                    case "controlled-element":
                        return this.container.C.K;
                    default:
                        throw new z(this.container);
                    }
                }
                get P() {
                    switch (this.container.type) {
                    case "controlled-item":
                        return this.container.C.Ze?.height ?? 0;
                    case "controlled-page":
                        return 0;
                    case "controlled-element":
                        return this.container.C.P;
                    default:
                        throw new z(this.container);
                    }
                }
                get width() {
                    switch (this.container.type) {
                    case "controlled-item":
                        return this.container.C.Ze?.width ?? 0;
                    case "controlled-page":
                        return 0;
                    case "controlled-element":
                        return this.container.C.width;
                    default:
                        throw new z(this.container);
                    }
                }
                get height() {
                    switch (this.container.type) {
                    case "controlled-item":
                        return this.container.C.Ze?.height ?? 0;
                    case "controlled-page":
                        return 0;
                    case "controlled-element":
                        return this.container.C.height;
                    default:
                        throw new z(this.container);
                    }
                }
                get rotation() {
                    switch (this.container.type) {
                    case "controlled-item":
                        return 0;
                    case "controlled-page":
                        return 0;
                    case "controlled-element":
                        return this.container.C.rotation;
                    default:
                        throw new z(this.container);
                    }
                }
                constructor(a) {
                    this.container = a
                }
            }
              , U5 = class {
                iK() {
                    return this.rB(this.page)
                }
                get id() {
                    return this.page.C.id
                }
                get title() {
                    return this.page.C.title
                }
                get anchor() {
                    return this.page.C.anchor
                }
                get Sxa() {
                    return this.page.C.oh
                }
                get amb() {
                    switch (this.page.type) {
                    case "concatenated-fixed-page":
                        return this.page.page.V.some(a => a.template != null);
                    case "fixed-page":
                    case "responsive-page":
                    case "controlled-page":
                    case "video-page":
                        return this.page.C.template != null;
                    default:
                        throw new z(this.page);
                    }
                }
                constructor(a, b) {
                    this.page = a;
                    this.rB = b
                }
            }
              , jud = class extends U5 {
                constructor(a, b, c) {
                    super(a, b);
                    this.page = a;
                    this.container = c;
                    this.type = "fixed"
                }
            }
              , kud = class extends U5 {
                constructor(a, b, c) {
                    super(a, b);
                    this.page = a;
                    this.container = c;
                    this.type = "concatenated-fixed"
                }
            }
              , lud = class extends U5 {
                constructor(a, b, c) {
                    super(a, b);
                    this.page = a;
                    this.container = c;
                    this.type = "controlled"
                }
            }
              , mud = class extends U5 {
                constructor(a, b, c) {
                    super(a, b);
                    this.page = a;
                    this.container = c;
                    this.type = "responsive"
                }
            }
              , nud = class {
                get id() {
                    return this.Jvb?.id
                }
                get extension() {
                    return this.Jvb?.extension
                }
                get title() {
                    return this.Aa.C.title
                }
                get language() {
                    return this.Aa.C.language
                }
                constructor(a, b) {
                    this.Jvb = a;
                    this.Aa = b
                }
            }
              , hud = class extends nud {
                static G(a) {
                    N(a, {
                        V: z3({
                            equals: x5.shallow
                        }),
                        Qpb: z3({
                            equals: x5.shallow
                        })
                    })
                }
                get V() {
                    return this.Aa.C.V.map(a => this.HYb(this.Aa.ge(a)))
                }
                get Qpb() {
                    return this.Aa.C.V.toArray()
                }
                constructor(a, b) {
                    super(a, b);
                    this.Fn = a;
                    this.Aa = b;
                    this.type = (hud.G(this),
                    "fixed");
                    this.kib = s5(c => new jud(c,this.rB,this));
                    this.Uhb = s5(c => new kud(c,this.rB,this));
                    this.Xhb = s5(c => new lud(c,this.rB,this));
                    this.Fib = s5(c => new mud(c,this.rB,this));
                    this.HYb = s5(c => {
                        switch (c.type) {
                        case "fixed-page":
                            return this.kib(c);
                        case "concatenated-fixed-page":
                            return this.Uhb(c);
                        case "controlled-page":
                            return this.Xhb(c);
                        case "video-page":
                            throw new __c.Ax;
                        case "responsive-page":
                            return this.Fib(c);
                        default:
                            throw new z(c);
                        }
                    }
                    );
                    this.rB = s5(c => {
                        c = this.Aa.C.V.has(c.C) ? c.C : void 0;
                        return c != null ? this.Qpb.indexOf(c) : -1
                    }
                    )
                }
            }
              , iud = class extends nud {
                static G(a) {
                    N(a, {
                        vk: z3({
                            equals: x5.shallow
                        }),
                        Ppb: z3({
                            equals: x5.shallow
                        })
                    })
                }
                get vk() {
                    return this.Aa.C.vk.map(a => this.Thb(__c.Wk(this.Aa, a)))
                }
                get Ppb() {
                    return this.Aa.C.vk.toArray()
                }
                constructor(a, b) {
                    super(a, b);
                    this.Fn = a;
                    this.Aa = b;
                    this.type = (iud.G(this),
                    "responsive");
                    this.Thb = s5(c => new oud(c,this.PQa,this));
                    this.PQa = s5(c => this.Ppb.findIndex(d => c.C === d))
                }
            }
              , oud = class {
                iK() {
                    return this.PQa(this.body)
                }
                get id() {}
                get title() {}
                get anchor() {}
                get Sxa() {
                    return !1
                }
                get amb() {
                    return this.body.C.template != null
                }
                constructor(a, b, c) {
                    this.body = a;
                    this.PQa = b;
                    this.container = c;
                    this.type = "body"
                }
            }
            ;
            Object.freeze({
                reduce() {}
            });
            Object.freeze({
                reduce(...a) {
                    return a.some(Boolean)
                }
            });
            Object.freeze({
                reduce(...a) {
                    return a.every(Boolean)
                }
            });
            Object.freeze({
                reduce(...a) {
                    return a.reduce( (b, c) => b + c, 0)
                }
            });
            Object.freeze({
                reduce(...a) {
                    return a.reduce( (b, c) => b * c, 1)
                }
            });
            Object.freeze({
                reduce(...a) {
                    return a.length === 0 ? [] : a.length === 1 ? a[0] : a.flat()
                }
            });
            Object.freeze({
                reduce(...a) {
                    a = a.filter(__c.qa);
                    return a.length === 1 ? a[0] : void 0
                }
            });
            Object.freeze({
                reduce(...a) {
                    return a.reduce( (b, c) => b.union(c), new Set)
                }
            });
            Object.freeze({
                reduce(...a) {
                    return a.reduce( (b, c) => b.intersection(c), new Set)
                }
            });
            var xmd = class {
            }
              , pud = class extends __c.FT {
                ha(...a) {
                    return a.length === 0 ? this.empty : a.flat()
                }
                z4b(a) {
                    return [a]
                }
                B4b(a) {
                    return [a]
                }
                D4b(a) {
                    return [a]
                }
                P4b(a) {
                    return __c.Bk(a) ? [a] : this.empty
                }
                constructor() {
                    super();
                    this.ia = {};
                    this.empty = []
                }
            }
              , qud = class extends __c.FT {
                ha(...a) {
                    return a.length === 0 ? this.empty : a.flat()
                }
                y4b(a) {
                    return [{
                        type: "controlled-element",
                        C: a
                    }]
                }
                A4b(a) {
                    return [{
                        type: "controlled-item",
                        C: a
                    }]
                }
                C4b(a) {
                    return [{
                        type: "controlled-page",
                        C: a
                    }]
                }
                bob(a) {
                    return __c.zk(a) ? [{
                        type: "controlled-element",
                        C: a
                    }] : this.empty
                }
                constructor() {
                    super();
                    this.ia = {};
                    this.empty = []
                }
            }
            ;
            new pud;
            new qud;
            var wmd = class {
                wP(a, b) {
                    var c = this.FG(a.C.Nc.app.id);
                    if (!c)
                        throw Error("Unable to find rendering for the given widget model.");
                    if (c.type === 0)
                        if (c = c.It(a, b, !0),
                        c.ok) {
                            b = c.value.Na;
                            c = c.value.dk;
                            try {
                                var d = __c.RKa(a, b).VT()
                            } catch (e) {
                                this.J.Db(e);
                                const f = Eld(a);
                                d = __c.nq({
                                    top: 0,
                                    left: 0,
                                    width: f.width,
                                    height: f.height
                                })
                            } finally {
                                c?.()
                            }
                        } else
                            a = Eld(a),
                            d = __c.nq({
                                top: 0,
                                left: 0,
                                width: a.width,
                                height: a.height
                            });
                    else
                        d = Ild(a, c, b);
                    return d
                }
                constructor(a, b) {
                    this.FG = a;
                    this.J = b
                }
            }
            ;
            var rud = new Map
              , ymd = class {
                NU(a, b) {
                    const c = `${`${a.id}:${a.version}`}::${Lld(b)}`
                      , d = this.entries.get(c);
                    if (d?.status === "pending")
                        return d.promise;
                    if (d?.status === "resolved")
                        return Promise.resolve(d.result);
                    const e = Mld(this, a, b, c);
                    $4( () => {
                        this.entries.set(c, {
                            status: "pending",
                            promise: e
                        })
                    }
                    );
                    return e
                }
                TG(a, b) {
                    const c = `${`${a.id}:${a.version}`}::${Lld(b)}`;
                    this.entries.has(c) || this.NU(a, b);
                    a = this.entries.get(c);
                    return a?.status === "resolved" ? a.result : void 0
                }
                async yCa(a, b) {
                    const c = N4()();
                    try {
                        const g = {
                            type: "RESOLVED",
                            id: a.id,
                            version: a.version
                        }
                          , h = __c.qA.create({
                            ...__c.aG,
                            media: g,
                            eb: void 0,
                            mc: b ?? rud
                        });
                        c.r(await c.s(fgd(this.ec, [g])));
                        const k = this.ec.k8(g);
                        if (k != null) {
                            var d = [...ggd(this.ec, __c.qA.snapshot(h)).values()];
                            if (d.length !== 0) {
                                var e = d.find(l => l.type === "spritesheet");
                                if (e != null) {
                                    const l = c.r(await c.s(Nld(this, h, e)));
                                    if (l != null)
                                        return {
                                            type: "blob",
                                            data: l,
                                            ...Kld(k)
                                        }
                                }
                                var f = c.r(await c.s(Old(this, h, d, k.M)));
                                return f != null ? {
                                    type: "blob",
                                    data: f,
                                    ...Kld(k)
                                } : {
                                    type: "image_ref",
                                    images: d.map(l => l.file),
                                    ...Kld(k)
                                }
                            }
                        }
                    } finally {
                        c.s()
                    }
                }
                constructor(a, b, c) {
                    this.ec = a;
                    this.wI = b;
                    this.AC = c;
                    this.entries = g5.map(new Map, {
                        deep: !1
                    })
                }
            }
            ;
            var sud = Object.freeze({
                empty: !0,
                count() {
                    return 0
                },
                toArray() {
                    return []
                },
                pj() {
                    return new Map
                },
                first() {},
                last() {},
                next() {
                    e5()
                },
                previous() {
                    e5()
                },
                qf() {
                    e5()
                },
                rs() {
                    e5()
                },
                has() {
                    return !1
                },
                $r() {
                    return this
                },
                project() {
                    return this
                },
                map() {
                    return []
                },
                flatMap() {
                    return []
                },
                filter() {
                    return []
                },
                forEach() {},
                reduce(a, b) {
                    return b
                },
                some() {
                    return !1
                },
                every() {
                    return !0
                },
                [Symbol.iterator]() {
                    return [][Symbol.iterator]()
                }
            });
            var hmd = class {
                Ib(a) {
                    let b = this.store.get(a);
                    if (b == null) {
                        if (this.store.has(a))
                            return b;
                        b = this.create();
                        this.store.set(a, b)
                    }
                    return b
                }
                constructor(a) {
                    this.create = a;
                    this.store = new WeakMap
                }
            }
            ;
            var jmd = class {
                add(a, b) {
                    let c = this.store.get(a);
                    c || (c = g5.set(void 0, {
                        deep: !1
                    }),
                    this.store.set(a, c));
                    c.add(b)
                }
                get(a) {
                    return this.store.get(a)
                }
                remove(a, b) {
                    const c = this.store.get(a);
                    c && (c.delete(b),
                    c.size === 0 && this.store.delete(a))
                }
                constructor() {
                    this.store = new __c.vC
                }
            }
            ;
            var Zld = new Set
              , $ld = {
                It: () => ({
                    Na: sud
                })
            }
              , vmd = class {
                static G(a) {
                    N(a, {
                        L1: g5.shallow
                    })
                }
                FG(a) {
                    return this.L1.get(a)?.C
                }
                constructor(a, b, c, d, e, f, g, h, k, l, m) {
                    this.Aa = a;
                    this.GL = b;
                    this.KCa = c;
                    this.bX = d;
                    this.dMa = e;
                    this.J = f;
                    this.lGa = g;
                    this.Jd = h;
                    this.UTb = k;
                    this.Q4a = l;
                    this.Lb = m;
                    this.L1 = (vmd.G(this),
                    new Map);
                    this.LGb = new jmd;
                    this.dgb = new WeakMap
                }
            }
              , smd = (a, b) => ({
                ...a,
                wi: c => Y4(a.wi, {
                    ...c,
                    scale: b || 1
                })
            });
            var Imd = {
                normal: void 0,
                thin: {
                    fontWeight: 100
                },
                extralight: {
                    fontWeight: 200
                },
                light: {
                    fontWeight: 300
                },
                medium: {
                    fontWeight: 500
                },
                semibold: {
                    fontWeight: 600
                },
                bold: {
                    fontWeight: 700
                },
                ultrabold: {
                    fontWeight: 800
                },
                heavy: {
                    fontWeight: 900
                }
            }
              , Jmd = {
                normal: void 0,
                italic: {
                    fontStyle: "italic"
                }
            }
              , Kmd = {
                ltr: void 0,
                rtl: {
                    direction: "rtl"
                }
            }
              , Lmd = {
                start: {
                    textAlign: "left"
                },
                center: {
                    textAlign: "center"
                },
                end: {
                    textAlign: "right"
                },
                justify: {
                    textAlign: "justify"
                }
            };
            var end = class {
                static G(a) {
                    N(a, {
                        wn: g5.ref,
                        nHa: g5.ref,
                        JM: g5.ref,
                        JR: g5.ref,
                        RX: g5.ref
                    })
                }
                constructor() {
                    this.wn = (end.G(this),
                    void 0);
                    this.RX = this.JR = this.JM = this.nHa = void 0
                }
            }
            ;
            var tud = class extends ind {
                render() {
                    const {children: a, component: b="div", Fbc: c, vAa: d} = this.props;
                    let e = {};
                    d && (e = c.reduce( (f, g) => {
                        f[g] = this.BKb;
                        return f
                    }
                    , {}));
                    return Y4(b, {
                        className: "_kI3Pw",
                        ...e,
                        children: a
                    })
                }
                componentDidMount() {
                    this.props.vAa && Rmd(this)
                }
                componentDidUpdate() {
                    this.props.vAa && Rmd(this)
                }
                componentWillUnmount() {
                    this.UX && (this.UX(),
                    this.UX = null)
                }
                constructor(...a) {
                    super(...a);
                    this.hIa = this.UX = null;
                    this.BKb = b => {
                        this.hIa = b.nativeEvent
                    }
                    ;
                    this.W6a = b => {
                        const c = this.props.vAa
                          , d = this.hIa === b;
                        c && !d && c(b);
                        this.hIa = null
                    }
                }
            }
            ;
            var Umd = a => Y4(tud, {
                Fbc: ["onMouseDown", "onTouchStart"],
                TSb: ["mousedown", "touchstart"],
                vAa: a.sV,
                children: a.children
            });
            var Smd = class {
                static G(a) {
                    N(a, {
                        Nj: g5.ref
                    })
                }
                constructor() {
                    this.Nj = (Smd.G(this),
                    !0)
                }
            }
              , Tmd = class {
                static G(a) {
                    N(a, {
                        onDoubleClick: u5.bound,
                        onTouchEnd: u5.bound,
                        reset: u5.bound
                    })
                }
                onDoubleClick() {
                    this.unblock("double_click")
                }
                onTouchEnd(a) {
                    a.touches.length > 0 || (this.X2 ? (window.clearTimeout(this.X2),
                    this.X2 = void 0,
                    this.unblock("double_tap")) : this.X2 = window.setTimeout(v4.wrap( () => this.X2 = void 0), 300))
                }
                reset() {
                    this.store.Nj = !0
                }
                S5() {
                    this.X2 && window.clearTimeout(this.X2)
                }
                unblock(a) {
                    this.store.Nj && (this.store.Nj = !1,
                    this.G9b?.(a))
                }
                constructor(a, b) {
                    this.store = a;
                    this.G9b = b;
                    this.X2 = (Tmd.G(this),
                    void 0)
                }
            }
            ;
            __c.g4a = {
                V0b: function({document: a, hp: b, Ro: c, AR: d, Am: e, OF: f, uz: g, xt: h, Dc: k, GL: l, Sua: m, kic: n, Fa: p, ec: q, qWb: r, ye: t, Bg: w, jh: v, Lb: A, knc: B, Ema: C, Tb: E, l_a: I, Jub: J, Mub: M, l_: O, d4a: R, Jpa: S, s1: Q}) {
                    const U = k.M8
                      , X = k.so;
                    var aa = k.J;
                    const ha = k.Yf
                      , fa = k.qa
                      , la = k.Afb
                      , xa = k.lb
                      , za = m.Xp
                      , {Lga: ja=!1, NZ: ma=!1, faa: Ha} = B ?? {};
                    var Ca = sjd({
                        Jpa: S,
                        J: aa,
                        xt: h,
                        Lga: ja,
                        NZ: ma,
                        faa: Ha
                    });
                    B = Ca.Eca;
                    var Ga = Ca.yX;
                    S = Ca.mGa;
                    var Ma = Ca.W3
                      , ta = Ca.MGb;
                    const Ua = Ca.Bfa
                      , qb = Ca.bX;
                    Ca = $kd({
                        zX: Ca.zX
                    });
                    Ga = ald({
                        W3: Ca,
                        yX: Ga
                    });
                    Ma = {
                        ...Ma,
                        ...Ca
                    };
                    ta = {
                        ...ta,
                        ...Ga
                    };
                    aa = aa.Wd("widget");
                    ({expr: Ga} = {
                        expr: new wnd
                    });
                    Ca = n ? Ta => {
                        a: {
                            Ta = Ta.page.iK();
                            if (n.mIa != null && (Ta = n.V[Ta])) {
                                Ta = n.b3.get(Ta)?.url ?? n.woa.get(Ta);
                                break a
                            }
                            Ta = void 0
                        }
                        return Ta
                    }
                    : void 0;
                    const {R4a: Bb, nGa: jb} = fnd({
                        Xp: za,
                        Fa: p,
                        ye: t,
                        jh: v,
                        kh: r.kh,
                        lb: xa,
                        expr: Ga,
                        l_: O
                    })
                      , {Hpa: $b, qA: vb, OGb: Kb, KGb: hc, lGa: kd, NGb: qd, RC: Ab} = zmd({
                        J: aa,
                        Eca: B,
                        R4a: Bb,
                        hnc: {
                            wi: Mmd()
                        },
                        Bfa: Ua,
                        bX: qb,
                        Fn: b,
                        Aa: a,
                        ec: q,
                        wI: r.wI,
                        AC: r.AC,
                        GL: l,
                        l_a: I,
                        Jub: J,
                        Mub: M,
                        Lb: A
                    });
                    ({wF: a} = Ukd({
                        J: k.J,
                        e4a: R,
                        WXa: !0,
                        Lb: A,
                        Xp: m.Xp,
                        Ur: m.Ur,
                        lb: k.lb
                    }));
                    const {L1: ec, thb: ib} = Cld({
                        W3: Ma,
                        Hpa: $b,
                        AR: d,
                        Yf: ha,
                        Ly: {
                            J: aa,
                            qa: fa,
                            Bg: A === 30 ? w : void 0,
                            lb: xa,
                            s1: Q,
                            expr: Ga
                        },
                        ig: {
                            Am: e,
                            xt: h,
                            OF: f,
                            uz: g,
                            Afb: la,
                            Fa: p,
                            ec: q,
                            Bxa: k.Bxa,
                            Ci: [],
                            RC: Ab,
                            Ro: c,
                            wF: a,
                            M8: U,
                            so: X,
                            Ema: C,
                            jRa: Ca,
                            Tb: E
                        }
                    });
                    return {
                        Eca: B,
                        qA: vb,
                        OGb: Kb,
                        KGb: hc,
                        iTc: ec,
                        MGb: ta,
                        mGa: S,
                        lGa: kd,
                        nGa: jb,
                        NGb: qd,
                        RC: Ab,
                        AR: d,
                        thb: ib
                    }
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    },

    /***/
    992198: (_, __, r) => r(148454),

    /***/
    9659: (_, __, r) => r(148454),

    /***/
    457684: (_, __, r) => r(148454),

    /***/
    397039: (_, __, r) => r(148454),

    /***/
    775964: (_, __, r) => r(148454),

    /***/
    940438: (_, __, r) => r(148454),

    /***/
    420077: (_, __, r) => r(148454),

    /***/
    859148: (_, __, r) => r(148454),

    /***/
    982475: (_, __, r) => r(148454),

    /***/
    240010: (_, __, r) => r(148454),

    /***/
    999217: (_, __, r) => r(148454),

    /***/
    151328: (_, __, r) => r(148454),

    /***/
    493231: (_, __, r) => r(148454),

    /***/
    827837: (_, __, r) => r(148454),

    /***/
    854886: (_, __, r) => r(148454),

    /***/
    358463: (_, __, r) => r(148454),

    /***/
    477168: (_, __, r) => r(148454),

    /***/
    406977: (_, __, r) => r(148454),

    /***/
    299098: (_, __, r) => r(148454),

    /***/
    300099: (_, __, r) => r(148454),

    /***/
    915460: (_, __, r) => r(148454),

    /***/
    242691: (_, __, r) => r(148454),

    /***/
    61552: (_, __, r) => r(148454),

    /***/
    892350: (_, __, r) => r(148454),

    /***/
    582897: (_, __, r) => r(148454),

    /***/
    857698: (_, __, r) => r(148454),

    /***/
    56931: (_, __, r) => r(148454),

    /***/
    976176: (_, __, r) => r(148454),

    /***/
    576853: (_, __, r) => r(148454),

    /***/
    674977: (_, __, r) => r(148454)

}])
//# sourceMappingURL=sourcemaps/555d4d468c70ea61.js.map
