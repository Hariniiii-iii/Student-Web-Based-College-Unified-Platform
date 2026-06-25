(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[94260], {

    /***/
    589661: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(778307);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var A2 = function(a, b) {
                var c = a.sDb.get(b);
                if (c != null)
                    return c;
                c = {
                    value: a.schema.ey(b)
                };
                a.sDb.set(b, c);
                a.lDb.set(c, b);
                return c
            }
              , B2 = function(a, b) {
                a = a.lDb.get(b);
                if (a == null)
                    throw new Pad("ref does not exists");
                return a
            }
              , Qad = function() {
                const a = b => {
                    if (b?.type !== "text2")
                        throw new C2("text2",b);
                    return b.value
                }
                ;
                return {
                    Oo: b => ({
                        type: "text2",
                        value: b
                    }),
                    gy: b => {
                        if (b?.type !== "text2")
                            throw new D2("text2",b);
                        return b.value
                    }
                    ,
                    ey: a,
                    IC: a
                }
            }
              , Rad = __webpack_require__(1193).EW;
            var Sad = class {
                static G(a) {
                    __c.N(a, {
                        Aeb: Rad
                    })
                }
                get Aeb() {
                    const a = [];
                    for (const b of this.list.value) {
                        const c = A2(this, b);
                        if (c === void 0)
                            throw new Pad("undefined value found when deserializing list.");
                        a.push(c)
                    }
                    return a
                }
                count() {
                    return this.list.value.count()
                }
                toArray() {
                    return this.Aeb.map( ({value: a}) => a)
                }
                first(a) {
                    const b = this.list.value.first(a ? c => a(A2(this, c)) : void 0);
                    if (b != null)
                        return A2(this, b)
                }
                last(a) {
                    const b = this.list.value.last(a ? c => a(A2(this, c)) : void 0);
                    if (b != null)
                        return A2(this, b)
                }
                next(a, b) {
                    var c = b ? d => b(A2(this, d)) : void 0;
                    a = B2(this, a);
                    c = this.list.value.next(a, c);
                    if (c != null)
                        return A2(this, c)
                }
                previous(a, b) {
                    var c = b ? d => b(A2(this, d)) : void 0;
                    a = B2(this, a);
                    c = this.list.value.previous(a, c);
                    if (c != null)
                        return A2(this, c)
                }
                map(a) {
                    return this.list.value.map( (b, c) => a(A2(this, b), c))
                }
                filter(a) {
                    return this.list.value.filter( (b, c) => a(A2(this, b), c)).map(b => A2(this, b))
                }
                forEach(a) {
                    return this.list.value.forEach( (b, c) => a(A2(this, b), c))
                }
                some(a) {
                    return this.list.value.some(b => a(A2(this, b)))
                }
                constructor(a, b) {
                    this.schema = b;
                    this.sDb = (Sad.G(this),
                    new WeakMap);
                    this.lDb = new WeakMap;
                    __c.x(a.type === "list");
                    this.list = a
                }
            }
              , Tad = class extends Sad {
                replace(a, b) {
                    a = B2(this, a);
                    b = this.list.value.replace(a, this.schema.Oo(b));
                    return A2(this, b)
                }
                qU(a, b) {
                    a = a != null ? B2(this, a) : void 0;
                    b = this.list.value.qU(a, this.schema.Oo(b));
                    return A2(this, b)
                }
                XO(a, b) {
                    a = a != null ? B2(this, a) : void 0;
                    return this.list.value.XO(a, b.map(c => this.schema.Oo(c))).map(c => A2(this, c))
                }
                insertBefore(a, b) {
                    a = a != null ? B2(this, a) : void 0;
                    b = this.list.value.insertBefore(a, this.schema.Oo(b));
                    return A2(this, b)
                }
                append(a) {
                    a = this.list.value.append(this.schema.Oo(a));
                    return A2(this, a)
                }
                prepend(a) {
                    a = this.list.value.prepend(this.schema.Oo(a));
                    return A2(this, a)
                }
                delete(a) {
                    a = B2(this, a);
                    this.list.value.delete(a)
                }
                Sy(a) {
                    this.list.value.Sy(a ? b => a(A2(this, b)) : void 0)
                }
                moveBefore(a, b) {
                    a = a == null ? void 0 : B2(this, a);
                    b = B2(this, b);
                    this.list.value.moveBefore(a, b)
                }
            }
            ;
            var F2 = class {
                static string(a) {
                    const b = (c, d) => {
                        if (c == null && a != null)
                            return a;
                        if (c?.type !== "string")
                            throw d === "toWidgetData" ? new C2("string",c) : new D2("string",c);
                        return c.value
                    }
                    ;
                    return {
                        Oo: c => ({
                            type: "string",
                            value: c
                        }),
                        gy: c => b(c, "toWidgetState"),
                        ey: c => b(c, "toWidgetData"),
                        IC: c => b(c, "toWidgetData")
                    }
                }
                static literal(a, b) {
                    if (a.length === 0)
                        throw new E2("At least one value must be provided for literal types.");
                    const c = new Set(a)
                      , d = (e, f) => {
                        if (e == null && b != null)
                            return b;
                        if (e?.type !== "string" || !c.has(e.value))
                            throw f === "toWidgetData" ? new C2("literal",e) : new D2("literal",e);
                        return e.value
                    }
                    ;
                    return {
                        Oo: e => ({
                            type: "string",
                            value: e
                        }),
                        gy: e => d(e, "toWidgetState"),
                        ey: e => d(e, "toWidgetData"),
                        IC: e => d(e, "toWidgetData")
                    }
                }
                static integer(a) {
                    const b = (c, d) => {
                        if (c == null && a != null)
                            return a;
                        if (c?.type !== "int32" || !Number.isFinite(c.value) || !Number.isInteger(c.value))
                            throw d === "toWidgetData" ? new C2("integer",c) : new D2("integer",c);
                        return c.value
                    }
                    ;
                    return {
                        Oo: c => {
                            if (!Number.isFinite(c) || !Number.isInteger(c))
                                throw new Uad("integer",c);
                            return {
                                type: "int32",
                                value: c
                            }
                        }
                        ,
                        gy: c => b(c, "toWidgetState"),
                        ey: c => b(c, "toWidgetData"),
                        IC: c => b(c, "toWidgetData")
                    }
                }
                static double(a) {
                    const b = (c, d) => {
                        if (c == null && a != null)
                            return a;
                        if (c?.type !== "double" || !Number.isFinite(c.value))
                            throw d === "toWidgetData" ? new C2("double",c) : new D2("double",c);
                        return c.value
                    }
                    ;
                    return {
                        Oo: c => {
                            if (!Number.isFinite(c))
                                throw new Uad("double",c);
                            return {
                                type: "double",
                                value: c
                            }
                        }
                        ,
                        gy: c => b(c, "toWidgetState"),
                        ey: c => b(c, "toWidgetData"),
                        IC: c => b(c, "toWidgetData")
                    }
                }
                static boolean(a) {
                    const b = (c, d) => {
                        if (c == null && a != null)
                            return a;
                        if (c?.type !== "boolean")
                            throw d === "toWidgetData" ? new C2("boolean",c) : new D2("boolean",c);
                        return c.value
                    }
                    ;
                    return {
                        Oo: c => ({
                            type: "boolean",
                            value: c
                        }),
                        gy: c => b(c, "toWidgetState"),
                        ey: c => b(c, "toWidgetData"),
                        IC: c => b(c, "toWidgetData")
                    }
                }
                static fill() {
                    const a = b => {
                        if (b?.type !== "fill")
                            throw new C2("fill",b);
                        return b.value
                    }
                    ;
                    return {
                        Oo: b => ({
                            type: "fill",
                            value: b
                        }),
                        gy: b => {
                            if (b?.type !== "fill")
                                throw new D2("fill",b);
                            return b.value
                        }
                        ,
                        ey: a,
                        IC: a
                    }
                }
                static stroke() {
                    const a = b => {
                        if (b?.type !== "stroke")
                            throw new C2("stroke",b);
                        return b.value
                    }
                    ;
                    return {
                        Oo: b => ({
                            type: "stroke",
                            value: b
                        }),
                        gy: b => {
                            if (b?.type !== "stroke")
                                throw new D2("stroke",b);
                            return b.value
                        }
                        ,
                        ey: a,
                        IC: a
                    }
                }
                static N(a) {
                    const b = new Set;
                    for (const d of Object.keys(a)) {
                        const [e] = a[d];
                        if (b.has(e))
                            throw new E2(`Duplicate serialized keys "${e}" found in record schema.`);
                        b.add(e)
                    }
                    const c = (d, e) => {
                        if (e?.type !== "dict")
                            throw new C2("record",e);
                        const f = {};
                        for (const g of Object.keys(a)) {
                            const [h,k] = a[g]
                              , l = Rad( () => {
                                const m = e.value.get(h);
                                return k.ey(m)
                            }
                            , {
                                keepAlive: !0
                            });
                            Object.defineProperty(f, g, {
                                get() {
                                    return l.get()
                                },
                                set(m) {
                                    d !== "readonly" && (m = k.Oo(m),
                                    m == null ? e.value.delete(h) : e.value.set(h, m))
                                },
                                enumerable: !0
                            })
                        }
                        return f
                    }
                    ;
                    return {
                        Oo: d => {
                            const e = {};
                            for (const f of Object.keys(a)) {
                                const [g,h] = a[f]
                                  , k = h.Oo(d[f]);
                                k != null && (e[g] = k)
                            }
                            return {
                                type: "dict",
                                value: new Map(Object.entries(e))
                            }
                        }
                        ,
                        gy: d => {
                            if (d?.type !== "dict")
                                throw new D2("record",d);
                            const e = {};
                            for (const f of Object.keys(a)) {
                                const [g,h] = a[f]
                                  , k = h.gy(d.value.get(g));
                                k != null && (e[f] = k)
                            }
                            return e
                        }
                        ,
                        ey: d => c("editable", d),
                        IC: d => c("readonly", d),
                        Xb: d => F2.N({
                            ...a,
                            ...d
                        })
                    }
                }
                static list(a) {
                    return {
                        Oo: b => ({
                            type: "list",
                            value: b.map(c => a.Oo(c))
                        }),
                        gy: b => {
                            if (b?.type !== "list")
                                throw new D2("list",b);
                            return b.value.filter(__c.qa).map(c => a.gy(c))
                        }
                        ,
                        ey: b => {
                            if (b?.type !== "list")
                                throw new C2("list",b);
                            return new Tad(b,a)
                        }
                        ,
                        IC: b => {
                            if (b?.type !== "list")
                                throw new C2("list",b);
                            return new Sad(b,a)
                        }
                    }
                }
                static optional(a) {
                    return {
                        Oo: b => {
                            if (b != null)
                                return a.Oo(b)
                        }
                        ,
                        gy: b => {
                            if (b != null)
                                return a.gy(b)
                        }
                        ,
                        ey: b => {
                            if (b != null)
                                return a.ey(b)
                        }
                        ,
                        IC: b => {
                            if (b != null)
                                return a.IC(b)
                        }
                    }
                }
                static union(a, b) {
                    const c = new Set(Object.keys(a))
                      , d = e => {
                        if (e?.type !== "dict")
                            throw new C2("union",e);
                        const f = e.value.get("k")?.value
                          , g = e.value.get("v");
                        if (f == null || g == null || typeof f !== "string" || !c.has(f))
                            throw new C2("union",e);
                        return {
                            Zra: a[f],
                            $ra: g
                        }
                    }
                    ;
                    return {
                        Oo: e => {
                            const f = b(e);
                            return {
                                type: "dict",
                                value: new Map([["k", {
                                    type: "string",
                                    value: f
                                }], ["v", a[f].Oo(e)]])
                            }
                        }
                        ,
                        gy: e => {
                            if (e?.type !== "dict")
                                throw new D2("union",e);
                            const f = e.value.get("k")?.value
                              , g = e.value.get("v");
                            if (f == null || g == null || typeof f !== "string" || !c.has(f))
                                throw new D2("union",e);
                            const {Zra: h, $ra: k} = {
                                Zra: a[f],
                                $ra: g
                            };
                            return h.gy(k)
                        }
                        ,
                        ey: e => {
                            const {Zra: f, $ra: g} = d(e);
                            return f.ey(g)
                        }
                        ,
                        IC: e => {
                            const {Zra: f, $ra: g} = d(e);
                            return f.IC(g)
                        }
                    }
                }
            }
              , E2 = class extends Error {
                constructor(a) {
                    super(a);
                    this.name = "SchemaError"
                }
            }
              , Pad = class extends E2 {
                constructor(a) {
                    super(`ListError: ${a}`)
                }
            }
              , C2 = class extends E2 {
                constructor(a, b) {
                    super(`Error transforming ${b} into type ${a} of widget data`)
                }
            }
              , D2 = class extends E2 {
                constructor(a, b) {
                    super(`Error transforming ${b} into type ${a} of widget state`)
                }
            }
              , Uad = class extends E2 {
                constructor(a, b) {
                    super(`Error transforming ${b} into type ${a} of document state`)
                }
            }
            ;
            var Vad = {
                settings: {
                    status: 2
                },
                zQc: new Map,
                AQc: 0,
                QBc: void 0,
                Arc: void 0,
                QRa: !1,
                uCc: "unchecked",
                d0: !1,
                hq: !1
            };
            var Wad = F2.N({
                type: ["t", F2.literal(["text2"], "text2"), "readonly"],
                text: ["te", Qad()]
            })
              , Xad = F2.union({
                text2: Wad
            }, a => a.type)
              , Yad = F2.N({
                id: ["i", F2.string("")],
                label: ["l", Xad]
            })
              , Zad = F2.list(Yad)
              , $ad = F2.list(F2.string(""))
              , abd = F2.N({
                id: ["i", F2.string("")],
                label: ["l", Xad],
                mP: ["tl", F2.literal(["c", "u"], "c")],
                YTa: ["k", F2.optional(F2.double(1))],
                required: ["rq", F2.boolean(!1)],
                X: ["c", F2.double(0)]
            })
              , bbd = F2.N({
                type: ["t", F2.literal(["r"], "r"), "readonly"]
            })
              , cbd = F2.N({
                type: ["t", F2.literal(["p"], "p"), "readonly"]
            })
              , dbd = F2.N({
                type: ["t", F2.literal(["q"], "q"), "readonly"]
            })
              , ebd = F2.union({
                r: bbd,
                p: cbd,
                q: dbd
            }, a => a.type)
              , fbd = abd.Xb({
                type: ["t", F2.literal(["select"], "select"), "readonly"],
                variant: ["v", F2.optional(ebd)],
                options: ["o", Zad],
                U9: ["m", F2.optional(F2.integer(1))],
                WLa: ["co", $ad]
            })
              , gbd = F2.N({
                type: ["t", F2.literal(["e"], "e"), "readonly"]
            })
              , hbd = F2.N({
                type: ["t", F2.literal(["f"], "f"), "readonly"],
                jV: ["n", F2.integer(1)]
            })
              , ibd = F2.union({
                e: gbd,
                f: hbd
            }, a => a.type)
              , jbd = abd.Xb({
                type: ["t", F2.literal(["text"], "text"), "readonly"],
                placeholder: ["p", F2.string("")],
                variant: ["v", ibd]
            })
              , kbd = F2.N({
                type: ["t", F2.literal(["a"], "a"), "readonly"]
            })
              , lbd = F2.N({
                type: ["t", F2.literal(["b"], "b"), "readonly"]
            })
              , mbd = F2.N({
                type: ["t", F2.literal(["c"], "c"), "readonly"]
            })
              , nbd = F2.N({
                type: ["t", F2.literal(["d"], "d"), "readonly"]
            })
              , obd = F2.union({
                a: kbd,
                b: lbd,
                c: mbd,
                d: nbd
            }, a => a.type)
              , pbd = abd.Xb({
                type: ["t", F2.literal(["number"], "number"), "readonly"],
                variant: ["v", obd],
                min: ["a", F2.optional(F2.double())],
                max: ["b", F2.optional(F2.double())]
            })
              , qbd = F2.union({
                select: fbd,
                text: jbd,
                number: pbd
            }, a => a.type)
              , rbd = F2.list(qbd)
              , sbd = F2.N({
                eu: ["A", F2.optional(F2.double(1))],
                fu: ["B", F2.optional(F2.double(1))],
                yx: ["C", F2.optional(F2.double(1))]
            })
              , tbd = F2.N({
                label: ["l", Xad],
                mP: ["B", F2.optional(F2.literal(["c", "u"]))],
                yx: ["C", F2.optional(F2.double(1))],
                fu: ["E", F2.optional(F2.double(1))],
                eu: ["D", F2.optional(F2.double(1))],
                Gla: ["F", F2.optional(F2.double(1))]
            })
              , ubd = F2.N({})
              , vbd = F2.N({
                Fla: ["A", F2.double(1.25)],
                yx: ["B", F2.double(1)],
                fu: ["C", F2.double(1.25)],
                eu: ["D", F2.double(1.25)],
                background: ["E", F2.optional(F2.fill())]
            })
              , wbd = F2.N({
                label: ["A", Qad()],
                mP: ["tl", F2.literal(["c", "u"])]
            })
              , xbd = F2.literal(["l", "r"], "l")
              , ybd = F2.N({
                minHeight: ["mh", F2.double(1)],
                minWidth: ["mw", F2.double(1)],
                type: ["t", F2.literal(["poll", "quiz"], "poll"), "readonly"],
                id: ["i", F2.string()],
                Gv: ["s", F2.string()],
                mu: ["a", F2.optional(F2.string())],
                direction: ["r", xbd],
                Nta: ["d", F2.string("")],
                ima: ["pf", F2.fill()],
                cna: ["sf", F2.fill()],
                border: ["b", F2.stroke()],
                X: ["c", F2.double(0)],
                Ok: ["D", F2.optional(F2.double(16))],
                $l: ["E", F2.optional(F2.double(16))],
                XZ: ["F", F2.optional(sbd)],
                z8: ["hh", F2.boolean(!1)],
                dSa: ["I", F2.optional(F2.boolean(!1))],
                ZDa: ["z", F2.boolean(!0)],
                Sbb: ["h", F2.optional(ubd)],
                title: ["j", F2.optional(wbd)],
                header: ["A", F2.optional(vbd)],
                fields: ["f", rbd],
                footer: ["fo", F2.optional(tbd)]
            })
              , zbd = F2.union({
                poll: ybd,
                quiz: ybd
            }, a => a.type);
            __c.FOa = {
                FQb: function() {
                    return {
                        tCc: Vad,
                        schema: zbd
                    }
                }
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/c45bf32444b16bd7.js.map
