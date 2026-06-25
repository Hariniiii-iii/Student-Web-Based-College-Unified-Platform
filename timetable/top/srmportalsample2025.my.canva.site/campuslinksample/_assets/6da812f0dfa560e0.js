(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[74934], {

    /***/
    900505: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(922196);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var Fbd = __webpack_require__(296713)
              , Gbd = Fbd.Fragment
              , H2 = Fbd.jsx
              , Hbd = Fbd.jsxs;
            var Ibd = __webpack_require__(613814).PA;
            var Jbd = __webpack_require__(978109).useId;
            var Kbd = Ibd( ({element: a, wy: b, SC: c}) => {
                var d = {
                    width: a.C.width,
                    height: a.C.height,
                    units: 4
                };
                d = __c.MLc(a.C.Na.toArray(), d, __c.Fe.direction);
                return H2(Gbd, {
                    children: d.map(e => {
                        e = a.bg(e);
                        return H2(c, {
                            element: e,
                            config: b
                        }, e.C.id)
                    }
                    )
                })
            }
            );
            Ibd(a => {
                var b = a.Mi;
                const c = b.id
                  , d = b.role
                  , e = b.kn
                  , f = b.state
                  , g = b.description
                  , h = b.name;
                b = b.hidden;
                const k = Jbd();
                return Hbd("div", {
                    id: c,
                    role: d,
                    className: "_pFsfA",
                    "aria-roledescription": e,
                    "aria-label": h,
                    "aria-describedby": k,
                    "aria-hidden": b || void 0,
                    children: [H2("div", {
                        id: k,
                        children: __c.cA(Object.values({
                            ...f,
                            ...g
                        }))
                    }), H2(Kbd, {
                        ...a
                    })]
                })
            }
            );
            var Lbd = class {
                description(a, b) {
                    b = b.Na.count();
                    return {
                        ...a.description,
                        elements: __c.dc("yNO6Ww", [b]),
                        oBc: __c.L("ZpUBgQ")
                    }
                }
                constructor() {
                    this.createNode = (a, b) => {
                        b = b.C;
                        return {
                            ...a,
                            type: 5,
                            name: __c.L("xc+QRw"),
                            role: "group",
                            description: this.description(a, b)
                        }
                    }
                }
            }
            ;
            __c.ROa = {
                H0b: function({fe: a, Rf: b}) {
                    const c = b.SC
                      , d = a.wy.Id;
                    a.Qq.Ir.lta = (new Lbd).createNode;
                    d.LR = e => H2(Kbd, {
                        ...e,
                        wy: d,
                        SC: c
                    })
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/6da812f0dfa560e0.js.map
