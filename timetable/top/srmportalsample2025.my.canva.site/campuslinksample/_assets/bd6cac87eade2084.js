(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[61869], {

    /***/
    484788: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(427414);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var $fd = __webpack_require__(1193)
              , agd = $fd.h5
              , bgd = $fd.XI;
            var cgd = ({data: a, xt: b, expr: c, nMa: d}) => {
                const e = b.Ogb(a.ko.ref.id);
                if (!e)
                    throw Error(`Blueprint ${a.ko.ref.id} not found in the document`);
                return c.list( () => e.element.Na.filter(__c.qa).map(f => d.create(f, a.ko.Yb.bf, e.element.Tq?.qF)))
            }
            ;
            __c.dgd = {
                Sk: __c.ry()( ({Ly: {expr: a}, ig: {xt: b, ...c}}) => {
                    const d = new __c.dVc(a,c.Tb);
                    return {
                        ...__c.WU,
                        metadata: {
                            type: "document-blueprint",
                            cM: e => e.ko.ref.id,
                            name: __c.L("IqoIzw")
                        },
                        C: {
                            type: 0,
                            It: ({C: e}) => {
                                const f = __c.y(c.Tb, "Connection graph is required")
                                  , g = cgd({
                                    data: e,
                                    xt: b,
                                    expr: a,
                                    nMa: d
                                })
                                  , h = agd( () => __c.Ip(f, g));
                                return {
                                    Na: g,
                                    dk: bgd( () => h())
                                }
                            }
                        },
                        oVb: __c.L("ZogrPA")
                    }
                }
                )
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/bd6cac87eade2084.js.map
