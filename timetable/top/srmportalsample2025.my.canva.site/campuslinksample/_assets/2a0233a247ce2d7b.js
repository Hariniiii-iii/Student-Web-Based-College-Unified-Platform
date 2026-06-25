(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[42735], {

    /***/
    345748: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(245961);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var Vcd = function(a, b) {
                b = __c.pO.snapshot(b);
                const c = __c.qp(b)?.text;
                if (c)
                    return c;
                if (a = a.sVa(b))
                    return a?.text;
                a = __c.RC(b);
                return a.type !== "empty" ? a.name : __c.L("Ogs9bQ")
            }
              , Wcd = function(a) {
                return a.Ra.map(b => b.fill).filter(b => b.Mg).length > 1 && !__c.OC(__c.NC(a)) ? __c.L("j/L59A") : void 0
            }
              , Xcd = __webpack_require__(296713)
              , Ycd = Xcd.Fragment
              , Q2 = Xcd.jsx
              , Zcd = Xcd.jsxs;
            var $cd = __webpack_require__(613814).PA;
            var add = __webpack_require__(978109).useId;
            var ddd = $cd( ({element: a, Mi: b, S_: c, Kj: d}) => Q2(b.role === "img" ? bdd : cdd, {
                element: a,
                Mi: b,
                S_: c,
                Kj: d
            }))
              , bdd = $cd( ({Mi: a, S_: b}) => {
                const c = a.id
                  , d = a.role
                  , e = a.kn
                  , f = a.name
                  , g = a.hidden;
                a = __c.bA(Object.values(a.description).filter(h => !!h).join(", "));
                return Zcd(Ycd, {
                    children: [Q2("div", {
                        id: c,
                        role: d,
                        className: "_pFsfA",
                        "aria-roledescription": e,
                        "aria-label": f,
                        "aria-hidden": g || void 0,
                        ...a
                    }), Array.from(b.values()).map(h => Q2(__c.wUc, {
                        Kgb: h
                    }, h.id))]
                })
            }
            )
              , cdd = $cd( ({element: a, Mi: b, Kj: c}) => {
                const d = add()
                  , e = b.id
                  , f = b.name
                  , g = b.role
                  , h = b.kn
                  , k = b.state
                  , l = b.description;
                b = b.hidden;
                a = a.C.xb.first()?.text;
                return Q2("div", {
                    id: e,
                    role: g,
                    className: "_pFsfA",
                    "aria-roledescription": h,
                    "aria-label": f,
                    "aria-describedby": d,
                    "aria-hidden": b || void 0,
                    children: Zcd("div", {
                        role: "caption",
                        children: [a && Q2(c, {
                            text: a
                        }), Q2("div", {
                            id: d,
                            children: Object.values({
                                ...k,
                                ...l
                            }).filter(m => !!m).join(", ")
                        })]
                    })
                })
            }
            );
            var edd = class {
                role(a) {
                    return this.innerText(a) ? "group" : "img"
                }
                innerText(a) {
                    a = a.xb.first()?.text;
                    return a?.stream.isEmpty ? void 0 : a
                }
                name(a) {
                    const b = this.lma(a);
                    if (b)
                        return b;
                    a = __c.cA(Object.values(this.kma(a)));
                    return a.length > 0 ? a : __c.L("uChMHQ")
                }
                lma(a) {
                    var b = __c.fJ.snapshot(a);
                    if (b = __c.pp(b)?.text)
                        return b;
                    a = a.Ra.map(c => c.fill).filter(c => c.Mg);
                    if (a.length === 1) {
                        if (a = Vcd(this, a[0]))
                            return a
                    } else if (a.length > 1)
                        return __c.L("W+HWVw")
                }
                kma(a) {
                    var b = __c.fJ.snapshot(a);
                    b = __c.gUa(this.Dp, b, {
                        HUb: !0
                    });
                    b = b.type === "shape" || b.type === "frame" ? b.description : void 0;
                    {
                        const c = a.Ra;
                        c.count() === 1 || __c.OC(__c.NC(a)) ? (a = (__c.OC(__c.NC(a)) ? c.last() : c.first())?.fill,
                        a = (a = a?.color ?? a?.Ha.ref) ? __c.mv(this.ot, a) : void 0) : a = void 0
                    }
                    return {
                        color: a,
                        kind: b
                    }
                }
                description(a, b) {
                    const c = this.lma(b) ? this.kma(b) : {
                        color: void 0,
                        kind: void 0
                    };
                    var d = __c.PC(b) ? (d = (d = b.xb.last()?.text) ? __c.mtc(d) : void 0) ? __c.dc("NmV2Uw", [d]) : void 0 : void 0;
                    b = Wcd(b);
                    return {
                        ...a.description,
                        ...c,
                        kra: d,
                        BAc: b
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
                    this.Dp = b;
                    this.Mk = c;
                    this.ec = d;
                    this.Mb = e;
                    this.createNode = (f, g) => {
                        g = g.C;
                        return {
                            ...f,
                            type: 9,
                            role: this.role(g),
                            name: this.name(g),
                            description: this.description(f, g)
                        }
                    }
                }
            }
            ;
            __c.CUa = {
                Q0b: ({fe: a, Dp: b, Ic: c, Kj: d}) => {
                    const e = a.wy;
                    a.Qq.Ir.rta = (new edd(a.ot,b,c.Mk,c.ec,c.Mb)).createNode;
                    e.Id.zA = f => Q2(ddd, {
                        ...f,
                        Kj: d
                    })
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/2a0233a247ce2d7b.js.map
