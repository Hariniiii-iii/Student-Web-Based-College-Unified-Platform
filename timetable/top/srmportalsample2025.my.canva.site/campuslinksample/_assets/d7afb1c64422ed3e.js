(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[91791], {

    /***/
    28788: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(245961);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var L = __c.L;
            var G2 = __webpack_require__(296713).jsx;
            var Abd = __webpack_require__(613814).PA;
            __webpack_require__(978109);
            var Bbd = class {
                fill(a, b) {
                    b = b.fz(b.C.fill);
                    if (a = this.Ir.Afa?.(a, b))
                        return {
                            ...a,
                            kn: L("n70Rlw")
                        }
                }
                constructor(a) {
                    this.Ir = a;
                    this.createNode = (b, c) => ({
                        ...b,
                        type: 14,
                        fill: this.fill(b, c),
                        description: void 0,
                        kn: L("n70Rlw")
                    })
                }
            }
            ;
            var Dbd = Abd( ({Mi: a, S_: b}) => {
                const c = a.id
                  , d = a.role
                  , e = a.kn;
                var f = a.state;
                const g = a.description
                  , h = a.name;
                a = a.hidden;
                b = Array.from(b.entries());
                f = __c.bA(__c.cA(Object.values({
                    ...f,
                    ...g
                }).filter(k => !!k)));
                return G2("div", {
                    id: c,
                    role: d,
                    className: "_pFsfA",
                    "aria-roledescription": e,
                    "aria-label": h,
                    "aria-hidden": a || void 0,
                    ...f,
                    children: b.map( ([k,l]) => G2(Cbd, {
                        Lea: l
                    }, k))
                })
            }
            )
              , Cbd = Abd( ({Lea: a}) => {
                const b = a.id
                  , c = a.role
                  , d = a.kn
                  , e = a.name;
                return (a = a.fill) ? G2(__c.wUc, {
                    Kgb: {
                        ...a,
                        id: b
                    }
                }) : G2("div", {
                    id: b,
                    role: c,
                    className: "_pFsfA",
                    "aria-roledescription": d,
                    "aria-label": e
                })
            }
            );
            var Ebd = class {
                name(a) {
                    const b = this.lma(a);
                    return b ? b : __c.cA([L("Ev02og"), ...Object.values(this.kma(a))])
                }
                lma(a) {
                    if (a = a.La)
                        return a.text
                }
                kma(a) {
                    return {
                        cells: __c.dc("o+uW+w", [a.cells.size]),
                        spacing: this.spacing(a)
                    }
                }
                description(a, b) {
                    b = this.lma(b) ? this.kma(b) : {
                        cells: void 0,
                        spacing: void 0
                    };
                    return {
                        ...a.description,
                        ...b
                    }
                }
                spacing(a) {
                    const b = a.layout.mw;
                    a = a.layout.Gx;
                    return b > 12 || a > 12 ? L("A6f9oQ") : b > 0 || a > 0 ? L("exwHVg") : L("Sc4vUA")
                }
                constructor() {
                    this.createNode = (a, b) => {
                        b = b.C;
                        return {
                            ...a,
                            type: 13,
                            name: this.name(b),
                            role: "group",
                            description: this.description(a, b)
                        }
                    }
                }
            }
            ;
            __c.OOa = {
                G0b: function(a) {
                    const b = a.wy;
                    a = a.Qq.Ir;
                    a.kta = (new Ebd).createNode;
                    a.jta = (new Bbd(a)).createNode;
                    b.Id.wA = c => G2(Dbd, {
                        ...c
                    })
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/d7afb1c64422ed3e.js.map
