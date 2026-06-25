(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[96846], {

    /***/
    116113: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var Kfd = __webpack_require__(296713).jsx;
            var Lfd = __webpack_require__(613814).PA;
            __webpack_require__(978109);
            var Mfd = class {
                role() {
                    return "group"
                }
                constructor() {
                    this.createNode = a => ({
                        ...a,
                        type: 10,
                        role: this.role(),
                        kn: void 0
                    })
                }
            }
            ;
            var Nfd = Lfd( ({element: a, Mi: b, Kj: c}) => {
                const d = b.id
                  , e = b.role
                  , f = b.name
                  , g = b.kn
                  , h = b.hidden;
                b = __c.bA(__c.cA(Object.values({
                    ...b.state,
                    ...b.description
                })));
                return Kfd("div", {
                    id: d,
                    role: e,
                    "aria-label": f,
                    "aria-roledescription": g,
                    "aria-hidden": h || void 0,
                    className: "_pFsfA",
                    ...b,
                    children: Kfd(c, {
                        text: a.C.text
                    })
                })
            }
            );
            __c.CWa = {
                T0b: ({fe: a, Kj: b}) => {
                    const c = a.wy;
                    a.Qq.Ir.uta = (new Mfd).createNode;
                    c.Id.Fu = d => Kfd(Nfd, {
                        ...d,
                        Kj: b
                    })
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/d93909256397690c.js.map
