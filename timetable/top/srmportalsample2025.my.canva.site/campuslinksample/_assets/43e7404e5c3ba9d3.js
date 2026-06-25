(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[47469], {

    /***/
    923162: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var L = __c.L;
            var Mbd = function(a) {
                if (!a)
                    return "";
                a = a.filter(b => !!b);
                return a.length > 0 ? a.join(" ") : ""
            }
              , I2 = function(a, b) {
                if (b) {
                    switch (b) {
                    case 1:
                        b = L("bn3I1g");
                        break;
                    case 2:
                        b = L("qOQouQ");
                        break;
                    case 3:
                        b = L("soFr1g");
                        break;
                    case 4:
                        b = L("Ixn8Uw");
                        break;
                    case 5:
                        b = L("5VkcJQ");
                        break;
                    case 6:
                        b = L("Rz7hcw");
                        break;
                    case 7:
                        b = L("TX/OSQ");
                        break;
                    case 8:
                        b = L("2CYO9g");
                        break;
                    case 9:
                        b = L("OonDog");
                        break;
                    default:
                        throw new __c.z(b);
                    }
                    return a === "start" ? __c.dc("Zqw16A", [b]) : __c.dc("8DkxDA", [b])
                }
            }
              , Nbd = __webpack_require__(296713)
              , J2 = Nbd.jsx
              , Obd = Nbd.jsxs;
            var K2 = __webpack_require__(613814).PA;
            var L2 = __webpack_require__(978109).useId;
            var Rbd = K2( ({element: a, Mi: b, Kj: c}) => J2(b.role === "img" ? Pbd : Qbd, {
                element: a,
                Mi: b,
                Kj: c
            }));
            K2( ({element: a, Mi: b, Kj: c}) => J2(b.role === "img" ? Pbd : Sbd, {
                element: a,
                Mi: b,
                Kj: c
            }));
            var Pbd = K2( ({Mi: a}) => {
                const b = a.id
                  , c = a.role
                  , d = a.kn
                  , e = a.name
                  , f = a.hidden;
                a = __c.bA(__c.cA(Object.values({
                    ...a.state,
                    ...a.description
                })));
                return J2("div", {
                    id: b,
                    role: c,
                    className: "_pFsfA",
                    "aria-roledescription": d,
                    "aria-label": e,
                    "aria-hidden": f || void 0,
                    ...a
                })
            }
            )
              , Sbd = K2( ({element: a, Mi: b, Kj: c}) => {
                const d = L2()
                  , e = L2()
                  , f = L2()
                  , g = L2()
                  , h = b.id
                  , k = b.role
                  , l = b.kn;
                var m = b.description;
                const n = b.state;
                b = b.hidden;
                a = a.C.xb.first()?.text;
                const p = m.bF
                  , q = m.MD
                  , r = Mbd([p ? d : void 0, g, q ? e : void 0]);
                m = {
                    color: m.color,
                    Gta: m.Gta,
                    weight: m.weight
                };
                return J2("div", {
                    id: h,
                    role: k,
                    className: "_pFsfA",
                    "aria-roledescription": l,
                    "aria-describedby": r,
                    "aria-labelledby": f,
                    "aria-hidden": b || void 0,
                    children: Obd("div", {
                        role: "caption",
                        children: [p && J2("span", {
                            id: d,
                            children: p
                        }), a && J2("div", {
                            id: f,
                            children: J2(c, {
                                text: a
                            })
                        }), q && J2("span", {
                            id: e,
                            children: q
                        }), J2("div", {
                            id: g,
                            children: J2("p", {
                                children: __c.cA(Object.values({
                                    ...n,
                                    ...m
                                }))
                            })
                        })]
                    })
                })
            }
            )
              , Qbd = K2( ({element: a, Mi: b, Kj: c}) => {
                const d = L2()
                  , e = b.id
                  , f = b.name
                  , g = b.role
                  , h = b.kn;
                var k = b.description;
                const l = b.state;
                b = b.hidden;
                const m = k.bF
                  , n = k.MD;
                k = {
                    color: k.color,
                    Gta: k.Gta,
                    weight: k.weight
                };
                a = a.C.xb.first()?.text;
                return J2("div", {
                    id: e,
                    role: g,
                    className: "_pFsfA",
                    "aria-label": f,
                    "aria-roledescription": h,
                    "aria-describedby": d,
                    "aria-hidden": b || void 0,
                    children: Obd("div", {
                        role: "caption",
                        children: [m && J2("span", {
                            children: m
                        }), a && J2(c, {
                            text: a
                        }), n && J2("span", {
                            children: n
                        }), J2("div", {
                            id: d,
                            children: J2("p", {
                                children: __c.cA(Object.values({
                                    ...l,
                                    ...k
                                }))
                            })
                        })]
                    })
                })
            }
            );
            var Tbd = class {
                name(a) {
                    var b = a.La;
                    if (b && b.text)
                        return b.text;
                    if (!this.innerText(a)) {
                        b = I2("start", a.start.marker);
                        const c = I2("end", a.end.marker);
                        a = a.weight >= 12 ? L("BAPKdQ") : L("07M6Aw");
                        return __c.cA([b, c, a])
                    }
                }
                innerText(a) {
                    a = a.xb.first()?.text;
                    return a?.stream.isEmpty ? void 0 : a
                }
                role(a) {
                    return (a = this.innerText(a)) && a.stream.charLength > 0 ? "group" : "img"
                }
                description(a, b) {
                    var c = b.color ?? b.fill.Ha.ref;
                    c = c ? __c.mv(this.ot, c) : void 0;
                    const d = b.Wc && b.Wc.length > 0 ? L("NpJKaw") : void 0
                      , e = b.weight >= 12 ? L("BAPKdQ") : L("07M6Aw");
                    b = this.innerText(b) ? {
                        bF: I2("start", b.start.marker),
                        MD: I2("end", b.end.marker),
                        weight: e
                    } : {
                        bF: void 0,
                        MD: void 0,
                        weight: void 0
                    };
                    return {
                        ...a.description,
                        ...b,
                        color: c,
                        Gta: d
                    }
                }
                state(a) {
                    return a.state
                }
                constructor(a) {
                    this.ot = a;
                    this.createNode = (b, c) => {
                        c = c.C;
                        return {
                            ...b,
                            type: 7,
                            description: this.description(b, c),
                            role: this.role(c),
                            name: this.name(c),
                            state: this.state(b)
                        }
                    }
                }
            }
            ;
            __c.DRa = {
                J0b: ({fe: a, Kj: b}) => {
                    const c = a.wy;
                    a.Qq.Ir.ota = (new Tbd(a.ot)).createNode;
                    c.Id.yA = d => J2(Rbd, {
                        ...d,
                        Kj: b
                    })
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/43e7404e5c3ba9d3.js.map
