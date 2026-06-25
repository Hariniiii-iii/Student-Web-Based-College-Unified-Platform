(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[70930], {

    /***/
    30565: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(922538);
        __web_req__(922196);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var Lad = __webpack_require__(296713).jsx;
            var Mad = __webpack_require__(613814).PA;
            __webpack_require__(978109);
            var Nad = class extends __c.HLc {
                Rhb({C: a, type: b}) {
                    if (b !== "concatenated-fixed-page" && (b = this.Sc.FO(a),
                    !__c.Dk(a) && !__c.yl(b)))
                        return a = a.xc.first(),
                        (a = a?.color ?? a?.Ha?.ref) ? __c.mv(this.ot, a) : void 0
                }
                Cib(a) {
                    if (a.container.type === "fixed-document") {
                        var b = this.rB(a.container, a.C);
                        return b ? __c.dc("zrHaBw", [b]) : void 0
                    }
                    if (a.container.type === "concatenated-fixed-page" && (b = a.container,
                    a = this.rB(b, a.C),
                    (b = this.rB(b.container, b.C)) && a))
                        return __c.dc("gbXX9g", [b, a])
                }
                rB(a, b) {
                    a = a.C.V.toArray().indexOf(b);
                    return a === -1 ? void 0 : a + 1
                }
                constructor(...a) {
                    super(...a);
                    this.type = 3
                }
            }
            ;
            var Oad = Mad( ({page: a, Mi: b, Sc: c, m7a: d, SC: e}) => {
                const f = b.id
                  , g = b.role
                  , h = b.kn
                  , k = b.name;
                b = __c.bA(__c.cA(Object.values(b.description)));
                const l = a.C.elements.toArray();
                c = c.FO(a.C);
                c = __c.MLc(l, c, __c.Fe.direction);
                return Lad("div", {
                    id: f,
                    role: g,
                    "aria-roledescription": h,
                    "aria-label": k,
                    ...b,
                    className: "_pFsfA",
                    children: c.map(m => {
                        const n = m.id ?? a.C.elements.rs(m);
                        m = a.bg(m);
                        return Lad(e, {
                            element: m,
                            config: d
                        }, n)
                    }
                    )
                })
            }
            );
            __c.DOa = {
                F0b: ({fe: a, Sc: b, SC: c}) => {
                    const d = a.Qq
                      , e = a.wy;
                    a = new Nad(a.ot,b);
                    d.Ir.ita = a.createNode;
                    e.eBa.Kd = f => Lad(Oad, {
                        ...f,
                        Sc: b,
                        SC: c
                    })
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/71c8fcc2bc785625.js.map
