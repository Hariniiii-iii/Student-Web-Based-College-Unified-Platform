(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[97857], {

    /***/
    796440: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(427414);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var Sfd = function(a, b) {
                b = a.Nf.get(__c.vu(b));
                return b != null ? a.G5.get(__c.vu(b.ref)) : void 0
            }
              , Tfd = __webpack_require__(815703).F;
            var Ufd = __webpack_require__(1193)
              , Vfd = Ufd.fm
              , Wfd = Ufd.h5
              , Xfd = Ufd.XI;
            var Yfd = ({expr: a, resource: b, OF: c, bf: d, nMa: e, J: f}) => {
                let g;
                const h = Vfd( () => {
                    const k = __c.CBa(c, b.ref.ref);
                    k !== g && (g = k,
                    k.catch(Tfd.wrap(l => {
                        f.Db(l, {
                            Zd: "Failed to render brand blueprint",
                            extra: new Map([["blueprintId", b.ref.ref.id], ["blueprintVersion", String(b.ref.ref.version)]])
                        })
                    }
                    )))
                }
                );
                return {
                    Na: a.list( () => {
                        const k = Sfd(c, b.ref.ref);
                        if (!k)
                            return [];
                        __c.x(k.type === "group", "Expected group element");
                        const l = k.Tq
                          , m = d.ref;
                        return m && l != null ? k.Na.filter(__c.qa).map(n => e.create(n, m, l.qF)) : k.Na.filter(__c.qa).map(n => __c.YF.create({
                            ...n,
                            locked: !0,
                            fg: !0
                        }))
                    }
                    ),
                    dk: h
                }
            }
            ;
            __c.Zfd = {
                Sk: __c.ry()( ({Ly: {expr: a, J: b}, ig: {OF: c, ...d}}) => {
                    const e = new __c.dVc(a,d.Tb);
                    return {
                        ...__c.WU,
                        metadata: {
                            type: "blueprint",
                            cM: f => f.ko.resource.ref.id,
                            name: __c.L("IqoIzw")
                        },
                        C: {
                            type: 0,
                            It: ({C: f}) => {
                                const g = __c.y(d.Tb)
                                  , {dk: h, Na: k} = Yfd({
                                    expr: a,
                                    resource: f.ko.resource,
                                    OF: c,
                                    bf: f.ko.bf,
                                    nMa: e,
                                    J: b
                                })
                                  , l = Wfd( () => __c.Ip(g, k));
                                return {
                                    Na: k,
                                    dk: Xfd( () => {
                                        l();
                                        h()
                                    }
                                    )
                                }
                            }
                        }
                    }
                }
                )
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/ca9b5f32b34b9c11.js.map
