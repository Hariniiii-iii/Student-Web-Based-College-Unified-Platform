(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[4200], {

    /***/
    161873: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var bcd = __webpack_require__(296713).jsx;
            var ccd = __webpack_require__(613814).PA;
            __webpack_require__(978109);
            var dcd = ccd( ({Mi: a}) => {
                const b = a.id
                  , c = a.role
                  , d = a.kn
                  , e = a.name
                  , f = a.hidden;
                a = __c.bA(__c.cA(Object.values({
                    ...a.state,
                    ...a.description
                })));
                return bcd("div", {
                    className: "_pFsfA",
                    id: b,
                    role: c,
                    "aria-roledescription": d,
                    "aria-label": e,
                    "aria-hidden": f || void 0,
                    ...a
                })
            }
            );
            var ecd = class {
                role(a) {
                    return a.fill.video.ref ? "figure" : "img"
                }
                name(a, b) {
                    let c;
                    var d;
                    (d = this.LOa(b)) != null ? b = d : (d = __c.pO.snapshot(b.fill),
                    b = (d = __c.qp(d)) ? d : b.fill.image.ref ? __c.Ys(this.ec, b.fill.image.ref) : b.fill.video.ref ? __c.rt(this.Mb, b.fill.video.ref) : void 0);
                    return (b = (c = b) == null ? void 0 : c.text) ? b : a.name
                }
                LOa(a) {
                    a = __c.YF.snapshot(a);
                    return __c.pp(a)
                }
                state(a, b) {
                    return {
                        ...a.state,
                        autoplay: b.fill.video.ref?.autoplay ? __c.L("jFg4Bw") : void 0
                    }
                }
                constructor(a, b, c) {
                    this.Mk = a;
                    this.ec = b;
                    this.Mb = c;
                    this.createNode = (d, e) => {
                        e = e.C;
                        return {
                            ...d,
                            type: 8,
                            role: this.role(e),
                            name: this.name(d, e),
                            state: this.state(d, e)
                        }
                    }
                }
            }
            ;
            __c.wTa = {
                O0b: ({fe: a, Ic: b}) => {
                    const c = a.wy;
                    a.Qq.Ir.pta = (new ecd(b.Mk,b.ec,b.Mb)).createNode;
                    c.Id.uy = dcd
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/e1318125071fff46.js.map
