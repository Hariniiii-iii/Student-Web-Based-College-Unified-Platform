(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[98101], {

    /***/
    496290: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var Bfd = __webpack_require__(296713)
              , x3 = Bfd.jsx
              , Cfd = Bfd.jsxs;
            var Dfd = __webpack_require__(613814).PA;
            __webpack_require__(978109);
            var Efd = class {
                name(a) {
                    return a.La?.text
                }
                role() {
                    return "table"
                }
                constructor() {
                    this.createNode = (a, b) => ({
                        ...a,
                        type: 11,
                        name: this.name(b.C),
                        role: this.role()
                    })
                }
            }
            ;
            var Ifd = Dfd( ({element: a, Mi: b, S_: c, Kj: d}) => {
                const e = b.id
                  , f = b.name
                  , g = b.role;
                var h = b.description;
                const k = b.hidden;
                b = __c.cA(Object.values(b.state), Object.values(h));
                b = __c.bA(b);
                const l = a.C
                  , m = l.layout.rows.toArray();
                a = l.layout.direction === 2 ? "rtl" : "ltr";
                h = __c.Tq(l);
                const n = __c.Sq(l)
                  , p = __c.Uq(l);
                return Cfd("table", {
                    id: e,
                    role: g,
                    dir: a,
                    className: "_pFsfA",
                    "aria-hidden": k || void 0,
                    ...b,
                    children: [f && x3("caption", {
                        children: f
                    }), x3(Ffd, {}), x3("tbody", {
                        children: h.map( (q, r) => x3("tr", {
                            children: q.map( (t, w) => x3(Gfd, {
                                table: l,
                                Wg: t?.Wg,
                                cOb: n,
                                XKb: c,
                                rowIndex: r,
                                fPb: w,
                                children: (v, A, B) => x3(Hfd, {
                                    element: v,
                                    rowSpan: A.rows.length,
                                    colSpan: A.columns.length,
                                    Mi: B,
                                    Kj: d
                                })
                            }, p(r, w)))
                        }, l.layout.rows.rs(m[r])))
                    })]
                })
            }
            )
              , Gfd = ({table: a, Wg: b, cOb: c, XKb: d, rowIndex: e, fPb: f, children: g}) => {
                c = (a = b != null && a.cells.get(b)) && c.get(a);
                b = b && d.get(b);
                e = c && c.rows[0] === e && c.columns[0] === f;
                return b && e ? g(a, c, b) : null
            }
              , Hfd = Dfd( ({element: a, rowSpan: b, colSpan: c, Mi: d, Kj: e}) => {
                a = a.content.text;
                const f = a.stream.isEmpty
                  , g = d.id;
                d = __c.bA(d.description.color);
                return x3("td", {
                    id: g,
                    rowSpan: b,
                    colSpan: c,
                    ...d,
                    children: f ? __c.L("ecweuA") : x3(e, {
                        text: a
                    })
                })
            }
            )
              , Ffd = () => x3("thead", {});
            var Jfd = class {
                description(a) {
                    a = (a = a.fill.color ?? a.fill.Ha.ref) ? __c.mv(this.ot, a) : void 0;
                    return {
                        color: a ? __c.dc("MGxQjQ", [a]) : void 0
                    }
                }
                constructor(a) {
                    this.ot = a;
                    this.createNode = (b, c) => {
                        c = c.C;
                        return {
                            ...b,
                            type: 12,
                            role: "cell",
                            name: __c.mtc(c.content.text) || void 0,
                            description: this.description(c)
                        }
                    }
                }
            }
            ;
            __c.xVa = {
                S0b: ({fe: a, Kj: b}) => {
                    const c = a.Qq
                      , d = a.wy;
                    a = a.ot;
                    c.Ir.tta = (new Efd).createNode;
                    c.Ir.sta = (new Jfd(a)).createNode;
                    d.Id.QR = e => x3(Ifd, {
                        ...e,
                        Kj: b
                    })
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/7592e9fb55e46747.js.map
