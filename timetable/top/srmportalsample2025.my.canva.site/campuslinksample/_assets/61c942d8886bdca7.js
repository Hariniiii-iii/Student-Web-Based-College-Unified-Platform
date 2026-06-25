(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[2203], {

    /***/
    939306: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var Kad = class {
                name(a) {
                    var b = __c.qp(a)?.text;
                    return b ? b : (b = this.sVa(a)) ? b?.text : __c.RC(a).name
                }
                description(a) {
                    a = a.color ?? a.Ha;
                    return {
                        color: a ? __c.mv(this.ot, a) : void 0
                    }
                }
                kn(a) {
                    switch (a.container.type) {
                    case "shape-path":
                        return __c.L("fPHOGQ");
                    case "grid-element-cell":
                        return __c.L("IL2K6g");
                    default:
                        return a = __c.pO.snapshot(a.C),
                        __c.RC(a).name
                    }
                }
                sVa(a) {
                    if (a.image)
                        return __c.Ys(this.ec, a.image);
                    if (a.video)
                        return __c.rt(this.Mb, a.video)
                }
                constructor(a, b, c, d, e) {
                    this.ot = a;
                    this.Mk = b;
                    this.ec = c;
                    this.Mb = d;
                    this.Dp = e;
                    this.createNode = (f, g) => {
                        const h = __c.pO.snapshot(g.C);
                        return {
                            ...f,
                            type: 15,
                            role: "img",
                            name: this.name(h),
                            description: this.description(h),
                            kn: this.kn(g)
                        }
                    }
                }
            }
            ;
            __c.sOa = {
                E0b: function(a) {
                    const b = a.fe
                      , c = a.Ic;
                    b.Qq.Ir.Afa = (new Kad(b.ot,c.Mk,c.ec,c.Mb,a.Dp)).createNode
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/61c942d8886bdca7.js.map
