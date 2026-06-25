(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[74145], {

    /***/
    777496: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var Mo = __c.Mo;
            var Yn = __c.Yn;
            var L = __c.L;
            var ip = __c.ip;
            var Aa = __c.Aa;
            var ep = __c.ep;
            var ya = __c.ya;
            var Fo = __c.Fo;
            var So = __c.So;
            var gp = __c.gp;
            var jp = __c.jp;
            var Eo = __c.Eo;
            var Do = __c.Do;
            var hp = __c.hp;
            var z = __c.z;
            var n_ = function(a) {
                if (a.type === 3)
                    throw Error("Unexpected error token");
            }
              , FVc = function(a, b) {
                if (a.type !== b.type)
                    throw Error("Token types do not match");
            }
              , GVc = function(a, b) {
                let c = 0
                  , d = 0
                  , e = !1;
                for (const f of b)
                    c += f.arity.min,
                    d += f.arity.max,
                    e ||= f.arity.rya;
                return a < c || a > d ? !1 : a !== c && a !== d && e ? (a - c) % 2 === 0 : !0
            }
              , o_ = function(a, b, c) {
                var d = !1;
                let e = !1
                  , f = !1;
                for (const h of c)
                    switch (h.type) {
                    case 0:
                        __c.u(!e && !d && !f);
                        break;
                    case 1:
                        __c.u(!d && !f);
                        e = !0;
                        break;
                    case 3:
                        __c.u(!e && !d && !f);
                        d = !0;
                        break;
                    case 2:
                        __c.u(!e && !d && !f);
                        f = !0;
                        break;
                    default:
                        throw new z(h.type);
                    }
                if (!GVc(b.length, c))
                    return a.fail(7);
                b = b.slice();
                d = [];
                for (var g of c) {
                    if (!g.DY(b))
                        return a.fail(7);
                    c = g.consume(b);
                    if (!c.success)
                        return g = c.value,
                        g.type === 7 ? a.fail(7) : g.type === 3 ? a.fail(g.value) : a.fail(3);
                    d.push(c.value)
                }
                return {
                    success: !0,
                    value: d
                }
            }
              , p_ = function(a, b) {
                return a.map( (c, d) => c.type === 7 ? b(d) : c)
            }
              , q_ = function(a) {
                return a.valueType === 2 && (a.Et === "=" || a.Et === "<>") && a?.If !== void 0
            }
              , r_ = function(a, b) {
                return a.Et === "=" && a.If.test(b) || a.Et === "<>" && !a.If.test(b)
            }
              , HVc = function(a, b, c) {
                const d = b.value;
                if (d.type === 16 || c.type === 16)
                    return q_(b) ? !1 : d.type === 3 || c.type === 3 ? b.Et === "<>" : hp(a.operators, b.Et, c, d).value;
                if (b.valueType === 15) {
                    if (b.value.type === 0 && c.type === 2)
                        return c = a.Lf.Ig(c, 0),
                        c.type === 0 && HVc(a, b, c);
                    if (b.value.type === 15 && c.type === 15)
                        return b.Et === "=";
                    if (b.value.type === 2)
                        return c.type === 2 && c.value === "" || c.type === 15
                }
                if (c.type !== d.type)
                    return b.Et === "<>";
                if (c.type === 0)
                    return FVc(d, c),
                    hp(a.operators, b.Et, c, d).value;
                if (c.type === 3)
                    return FVc(d, c),
                    Do(__c.ap(c.value, d.value, b.Et)).value;
                n_(d);
                return c.type === 2 && q_(b) && r_(b, c.value) ? !0 : hp(a.operators, b.Et, c, d).value
            }
              , IVc = function(a, b, c, d, e=c[0][0]) {
                const f = new Map;
                for (const [h,k] of c) {
                    if (e.size == null || h.size == null || e.size.rows !== h.size.rows || e.size.cols !== h.size.cols)
                        return {
                            type: 3,
                            value: 3
                        };
                    a: switch (k.type) {
                    case 2:
                        var g = b(k.value);
                        break a;
                    case 0:
                    case 1:
                    case 3:
                    case 16:
                        g = {
                            Et: "=",
                            valueType: k.type,
                            value: k
                        };
                        break a;
                    case 15:
                        g = {
                            Et: "=",
                            valueType: 15,
                            value: Eo(0)
                        };
                        break a;
                    default:
                        throw new z(k);
                    }
                    const l = g;
                    h.value.flat().forEach( (m, n) => {
                        HVc(a.p6, l, m) && f.set(n, (f.get(n) ?? 0) + 1)
                    }
                    )
                }
                return e.value.flat().filter( (h, k) => f.get(k) === c.length).reduce(d.fn, d.initialValue)
            }
              , JVc = function(a, b, c) {
                a = IVc(a, c, b, {
                    fn: d => ++d,
                    initialValue: 0
                });
                return typeof a === "number" ? jp(a) : a
            }
              , KVc = function(a, b, c, d) {
                return IVc(a, d, b, {
                    fn: (e, f) => f.type === 2 ? e : gp(a.operators, "+", e, f),
                    initialValue: Eo(0)
                }, c)
            }
              , LVc = function(a, b, c, d, e=b) {
                return KVc(a, [[b, c]], e, d)
            }
              , MVc = function(a, b, c, d) {
                b = IVc(a, d, b, {
                    fn: (g, h) => {
                        if (h.type === 2)
                            return g;
                        const [k,l] = g;
                        g = gp(a.operators, "+", k, Eo(1));
                        h = gp(a.operators, "+", l, h);
                        return [g, h]
                    }
                    ,
                    initialValue: [Eo(0), Eo(0)]
                }, c);
                if (!Array.isArray(b))
                    return {
                        type: 3,
                        value: 2
                    };
                const [e,f] = b;
                return gp(a.operators, "/", f, e)
            }
              , NVc = function(a, b, c, d, e=b) {
                return MVc(a, [[b, c]], e, d)
            }
              , s_ = function(a) {
                return a.type === 0 || a.type === 3
            }
              , t_ = function(a, b) {
                b = b();
                if (!s_(b))
                    throw Error("Expected number or error token");
                a.value = b;
                return a
            }
              , u_ = function(a, b) {
                if (a.value.type !== 0)
                    return a;
                b = b(a.value.value);
                a.value = jp(b);
                return a
            }
              , v_ = function(a, b) {
                return t_(a, () => So(a.operators, "*", a.value, b))
            }
              , w_ = function(a, b) {
                return t_(a, () => So(a.operators, "/", a.value, b))
            }
              , x_ = function(a, b) {
                a.value.type === 0 && (a.value = Eo(Fo(a.value.value), b));
                return a
            }
              , y_ = function(a, b) {
                return new OVc(a.Bd,b)
            }
              , PVc = function(a, b) {
                return GVc(b.length, a.args) && b.some(z_) && a.ng(b)
            }
              , QVc = function(a, b) {
                const c = (0,
                __c.ob)(!0)();
                return function*() {
                    c.r();
                    try {
                        const {DG: d= () => !0} = b;
                        for (const e of a)
                            if (e.type !== 4)
                                c.r(yield c.s(e));
                            else if (e.size)
                                for (const f of e.value)
                                    for (const g of f)
                                        d(g) && c.r(yield c.s(g));
                            else
                                c.r(yield c.s({
                                    type: 3,
                                    value: 3
                                }))
                    } finally {
                        c.s()
                    }
                }()
            }
              , A_ = function(a, b, c, d={}) {
                a = QVc(a, d);
                let e = c;
                c = !0;
                for (const f of a) {
                    a = b(e, f);
                    if (!a.ok)
                        return a;
                    c = !1;
                    e = a.value
                }
                return c && d.WFb ? ya(d.WFb) : ya(e)
            }
              , RVc = function(a, b) {
                if (a.value < __c.pec || a.value > __c.oec)
                    return {
                        type: 3,
                        value: 6
                    };
                a = __c.Mn(a.value);
                if (a == null)
                    return {
                        type: 3,
                        value: 3
                    };
                switch (b) {
                case 0:
                    b = a.getUTCFullYear();
                    break;
                case 1:
                    b = a.getUTCMonth() + 1;
                    break;
                case 2:
                    b = a.getUTCDate();
                    break;
                default:
                    throw new z(b);
                }
                return Eo(Fo(b))
            }
              , SVc = function(a, b) {
                a = a.Lf.Ig(b, 0);
                return a.type === 3 ? a : a.value < __c.pec || a.value > __c.oec ? {
                    type: 3,
                    value: 6
                } : a
            }
              , TVc = function(a) {
                return (b, c) => {
                    if (b == null)
                        return c;
                    switch (a) {
                    case "AND":
                        return Do(b.value && c.value);
                    case "OR":
                        return Do(b.value || c.value);
                    default:
                        throw new z(a);
                    }
                }
            }
              , UVc = function(a, b, c, d, e, f) {
                d = d.value;
                if (b.type === 15)
                    return {
                        type: 3,
                        value: 7
                    };
                if (c.size == null || d > c.size.cols)
                    return {
                        type: 3,
                        value: 4
                    };
                let g;
                for (let k = 0; k !== c.value.length; k++) {
                    const l = c.value[k];
                    var h = l[0];
                    if (h.type !== 15 && h.type !== 3 && h.type === b.type)
                        if (e ? e.value : 1)
                            if (h = gp(a, "<=", h, b),
                            h.type === 1 && h.value)
                                g = l[d - 1];
                            else {
                                if (g)
                                    break
                            }
                        else {
                            if (b.type === 2 && h.type === 2) {
                                const m = f(`=${b.value}`);
                                if (q_(m) && r_(m, h.value))
                                    return l[d - 1]
                            }
                            h = gp(a, "=", h, b);
                            if (h.type === 1 && h.value)
                                return l[d - 1]
                        }
                }
                return g !== void 0 ? g : {
                    type: 3,
                    value: 7
                }
            }
              , B_ = function(a) {
                return Math.floor(a?.value ?? 0) - 1
            }
              , VVc = function(a) {
                return a.type === 4 ? a : ep([[a]], {
                    rows: 1,
                    cols: 1
                })
            }
              , WVc = function(a, b) {
                return q_(a) && a.Et === "=" ? b.findIndex(c => c.type === 2 && r_(a, c.value)) : -1
            }
              , XVc = function(a, b, c, d, e) {
                let f = -1, g;
                for (let h = 0; h < c.length; h++) {
                    const k = c[h];
                    k.type === b.type && hp(a, d, k, b).value && (g == null || hp(a, e, g, k).value) && (g = k,
                    f = h)
                }
                return f
            }
              , YVc = function(a, b, c, d, e, f, g) {
                b = g === -1 ? [...b.value].reverse() : b.value;
                c = g === -1 ? [...c.value].reverse() : c.value;
                let h;
                for (g = 0; g < b.length; g++) {
                    var k = b[g][0];
                    if (k.type === 15 || k.type === 3)
                        continue;
                    var l = C_(k);
                    if (l.type !== 3)
                        switch (f) {
                        case 0:
                            k = gp(a.Bd, "=", k, d);
                            if (k.type === 3)
                                return k;
                            if (k.value)
                                return c[g][0];
                            break;
                        case 2:
                            var m = a.Lf.Ig(d, 2);
                            if (m.type === 3)
                                return m;
                            m = a.ki.QH(m.value);
                            if (q_(m)) {
                                k = a.Lf.Ig(l, 2);
                                if (k.type === 3)
                                    return k;
                                k = r_(m, k.value)
                            } else
                                k = hp(a.Bd, "=", k, d).value;
                            if (k)
                                return c[g][0];
                            break;
                        case -1:
                        case 1:
                            l = gp(a.Bd, f === -1 ? "<" : ">", k, d);
                            if (l.type === 3)
                                return l;
                            l.value && (l = f === -1 ? ">" : "<",
                            h === void 0 || gp(a.Bd, l, k, b[h][0]).value) && (h = g);
                            break;
                        default:
                            throw new z(f);
                        }
                }
                return h !== void 0 ? c[h][0] : e
            }
              , ZVc = function(a) {
                const b = a[0].size;
                return b == null ? !1 : a.every(c => c.size?.cols === b.cols && c.size?.rows === b.rows)
            }
              , aWc = function(a, b) {
                var c = $Vc(a, b);
                if (!c.ok)
                    return c.error;
                b = c.value.sum;
                c = jp(c.value.count);
                if (c.type === 3)
                    return c;
                a = gp(a, "/", b, c);
                return a.type === 3 ? a : a.type !== 0 ? {
                    type: 3,
                    value: 6
                } : a
            }
              , $Vc = function(a, b) {
                return A_(b, (c, d) => {
                    const e = gp(a, "+", c.sum, d);
                    return e.type === 3 ? Aa(e) : e.type !== 0 ? Aa({
                        type: 3,
                        value: 6
                    }) : ya({
                        sum: e,
                        count: c.count + (d.type !== 15 ? 1 : 0)
                    })
                }
                , {
                    sum: Eo(0),
                    count: 0
                }, {
                    DG: s_
                })
            }
              , fWc = function(a) {
                const [b,c] = a;
                if (b === void 0 || c === void 0)
                    return Aa({
                        type: 3,
                        value: 7
                    });
                a = bWc(b);
                var d = b.type !== 4 ? !0 : b.value.flat().length === 1;
                if (a && d && (c.type === 3 || c.type === 4 && (a = c.value.flat(),
                a.length === 1 && a[0].type === 3)))
                    return Aa({
                        type: 3,
                        value: 3
                    });
                a = cWc(b);
                if (!a.ok)
                    return Aa(a.error);
                d = cWc(c);
                if (!d.ok)
                    return Aa(d.error);
                a = a.value;
                var e = d.value;
                d = a.every(h => h.type === 15);
                const f = e.every(h => h.type === 15);
                if (a.length !== e.length)
                    return d && a.length === 1 && e.length > 1 || f && e.length === 1 && a.length > 1 ? Aa({
                        type: 3,
                        value: 3
                    }) : Aa({
                        type: 3,
                        value: 7
                    });
                var g = dWc(a, e);
                if (!g.ok)
                    return Aa(g.error);
                g = eWc(a, e);
                return g.left.length === 0 ? (e = f && e.length === 1,
                d && a.length === 1 || e ? Aa({
                    type: 3,
                    value: 3
                }) : Aa({
                    type: 3,
                    value: 2
                })) : g.left.length < 2 ? Aa({
                    type: 3,
                    value: 2
                }) : ya(g)
            }
              , gWc = function(a, b, c, d, e) {
                var f = Eo(0)
                  , g = Eo(0);
                for (let l = 0; l < b.length; l++) {
                    var h = gp(a.Bd, "-", b[l], d);
                    if (h.type === 3)
                        return h;
                    var k = gp(a.Bd, "-", c[l], e);
                    if (k.type === 3)
                        return k;
                    h = gp(a.Bd, "*", h, h);
                    if (h.type === 3)
                        return h;
                    k = gp(a.Bd, "*", k, k);
                    if (k.type === 3)
                        return k;
                    f = ip(a.Bd, "+", f, h);
                    if (f.type === 3)
                        return f;
                    g = ip(a.Bd, "+", g, k);
                    if (g.type === 3)
                        return g
                }
                b = gp(a.Bd, "*", f, g);
                return b.type === 3 ? b : ip(a.Bd, "^", b, Eo(Fo(.5)))
            }
              , bWc = function(a) {
                return a.type === 7 || a.type === 15 ? !0 : a.type === 4 ? (a = a.value.flat(),
                a.length > 0 && a.every(b => b.type === 15)) : !1
            }
              , cWc = function(a) {
                if (a.type === 3)
                    return Aa(a);
                if (a.type === 7)
                    return Aa({
                        type: 3,
                        value: 3
                    });
                a = (a.type === 4 ? a : ep([[a]], {
                    rows: 1,
                    cols: 1
                })).value.flat();
                return a.length === 1 && a[0].type === 3 ? Aa(a[0]) : a.length === 0 ? Aa({
                    type: 3,
                    value: 3
                }) : ya(a)
            }
              , dWc = function(a, b) {
                for (let c = 0; c < a.length; c++) {
                    const d = a[c]
                      , e = b[c];
                    if (d.type === 3)
                        return c === 0 && d.value === 1 ? Aa({
                            type: 3,
                            value: 6
                        }) : Aa(d);
                    if (e.type === 3)
                        return c === 0 && e.value === 1 ? Aa({
                            type: 3,
                            value: 6
                        }) : Aa(e)
                }
                return ya(void 0)
            }
              , eWc = function(a, b) {
                const c = []
                  , d = [];
                for (let e = 0; e < a.length; e++) {
                    const f = a[e]
                      , g = b[e];
                    f.type === 0 && g.type === 0 && (c.push(f),
                    d.push(g))
                }
                return {
                    left: c,
                    right: d
                }
            }
              , hWc = function(a) {
                for (const b of a) {
                    if (b.type === 3)
                        return b;
                    if (b.type === 4 && b.size?.rows === 1 && b.size?.cols === 1) {
                        a = b.value[0][0];
                        if (a.type === 3)
                            return a;
                        if (a.type === 15)
                            return {
                                type: 3,
                                value: 3
                            }
                    }
                }
            }
              , iWc = function(a) {
                if (a.length !== 0) {
                    var b = new Map
                      , c = 0;
                    for (const e of a)
                        if (a = (b.get(e) || 0) + 1,
                        b.set(e, a),
                        a > c) {
                            c = a;
                            var d = e
                        }
                    if (c !== 1)
                        return d
                }
            }
              , jWc = a => a.type === 0
              , kWc = a => a.type === 4
              , lWc = class {
                constructor(a) {
                    this.value = a
                }
            }
              , OVc = class extends lWc {
                negate() {
                    return t_(this, () => __c.To(this.operators, "-", this.value))
                }
                Zsb() {
                    return t_(this, () => __c.To(this.operators, "%", this.value))
                }
                add(a) {
                    return t_(this, () => So(this.operators, "+", this.value, a))
                }
                subtract(a) {
                    return t_(this, () => So(this.operators, "-", this.value, a))
                }
                qL(a) {
                    return t_(this, () => So(this.operators, "^", this.value, a))
                }
                ln() {
                    return u_(this, a => Math.log(a))
                }
                exp() {
                    return u_(this, a => Math.exp(a))
                }
                abs() {
                    return u_(this, a => Math.abs(a))
                }
                log10() {
                    return u_(this, a => Math.log10(a))
                }
                result() {
                    return this.value
                }
                constructor(a, b) {
                    super(b ?? Eo(0));
                    this.operators = a
                }
            }
              , D_ = class {
                constructor(a, b, c, d, e, f, g) {
                    this.ki = a;
                    this.Lf = b;
                    this.Bd = c;
                    this.cJ = d;
                    this.p6 = e;
                    this.fb = f;
                    this.Vo = g
                }
            }
              , z_ = a => a.type === 4 && a.size != null && (a.size.rows > 1 || a.size.cols > 1)
              , E_ = class extends D_ {
                vpb(a) {
                    return a
                }
                bAa(a) {
                    return this.gg(a)
                }
                execute(a) {
                    let b;
                    if (this.Tj)
                        b = p_(a, this.Tj);
                    else {
                        if (a.some(c => c.type === 7))
                            return {
                                type: 3,
                                value: 7
                            };
                        b = a
                    }
                    b = this.vpb(b);
                    if (PVc(this, b)) {
                        const c = {
                            rows: 0,
                            cols: 0
                        };
                        for (a = 0; a < b.length; a++) {
                            if (this.je(a))
                                continue;
                            const d = b[a];
                            d.type === 4 && d.size != null && (c.rows = Math.max(c.rows, d.size.rows),
                            c.cols = Math.max(c.cols, d.size.cols))
                        }
                        a = Array.from({
                            length: c.rows
                        }, (d, e) => Array.from({
                            length: c.cols
                        }, (f, g) => {
                            f = b.map( (h, k) => h.type !== 4 || this.je(k) ? h : (h = h.value[h.value.length === 1 ? 0 : e]) && h[h.length === 1 ? 0 : g] || {
                                type: 3,
                                value: 7
                            });
                            f = o_(this.Vo, f, this.args);
                            return f.success ? this.gg(f.value) : f.value
                        }
                        ));
                        return ep(a, c)
                    }
                    a = o_(this.Vo, b, this.args);
                    return a.success ? this.bAa(a.value) : a.value
                }
            }
              , C_ = a => a.type === 4 ? a.value[0][0] : a
              , mWc = () => L("U5lElw")
              , nWc = () => L("t3r0dg")
              , oWc = () => L("P2CRhA")
              , pWc = () => L("Vam+FA")
              , qWc = () => L("zPqQHw");
            var rWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    const [b,c,d] = a;
                    var e = Math.floor(b.value);
                    const f = Math.floor(c.value);
                    a = Math.floor(d.value);
                    e <= 1899 && (e += 1900);
                    e = (__c.rpa({
                        year: e,
                        month: f,
                        day: a
                    }).getTime() + __c.Ln) / 864E5;
                    if (isNaN(e))
                        return {
                            type: 3,
                            value: 6
                        };
                    a === 0 && --e;
                    return e < __c.pec || e > __c.oec ? {
                        type: 3,
                        value: 6
                    } : Eo(Fo(e), __c.NP.create({
                        ...__c.t5b,
                        Nd: {
                            ...__c.t5b.Nd,
                            format: this.ki.TT.dateFormat
                        }
                    }))
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.Jg, this.fb.Jg];
                    this.metadata = {
                        category: 3,
                        description: mWc,
                        ld: [{
                            type: "YEAR",
                            optional: !1
                        }, {
                            type: "MONTH",
                            optional: !1
                        }, {
                            type: "DAY",
                            optional: !1
                        }],
                        jd: ["=DATE(1969, 7, 20)", "=DATE(A2, B2, C2)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            rWc.functionName = "DATE";
            var sWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    [a] = a;
                    return RVc(a, 2)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg];
                    this.metadata = {
                        category: 3,
                        description: nWc,
                        ld: [{
                            type: "DATE",
                            optional: !1
                        }],
                        jd: ["=DAY(A1)", "=DAY(DATE(2024, 6, 1))", "=DAY(45444)", '=DAY("2024-06-01")']
                    }
                }
            }
            ;
            sWc.functionName = "DAY";
            var tWc = class extends E_ {
                ng(a) {
                    return a.some(z_)
                }
                je() {
                    return !1
                }
                gg(a) {
                    var b = SVc(this, a[0]);
                    if (b.type === 3)
                        return b;
                    a = SVc(this, a[1]);
                    if (a.type === 3)
                        return a;
                    b = __c.Mn(b.value);
                    const c = __c.Mn(a.value);
                    if (!b || !c)
                        return {
                            type: 3,
                            value: 3
                        };
                    a = b.getTime() >= c.getTime() ? 1 : -1;
                    b = Math.abs(b.getTime() - c.getTime()) / 864E5;
                    b = Math.floor(b) * a;
                    return Eo(Fo(b === 0 ? 0 : b))
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.xN, this.fb.xN];
                    this.metadata = {
                        category: 3,
                        description: oWc,
                        ld: [{
                            type: "DATE",
                            optional: !0
                        }, {
                            type: "DATE",
                            optional: !0
                        }],
                        jd: ["=DAYS(A1, A2)", "=DAYS(DATE(2023, 1, 1), DATE(2022, 1, 1))", '=DAYS("2023-01-01", "2022-01-01")']
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            tWc.functionName = "DAYS";
            var uWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    [a] = a;
                    return RVc(a, 1)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg];
                    this.metadata = {
                        category: 3,
                        description: pWc,
                        ld: [{
                            type: "DATE",
                            optional: !1
                        }],
                        jd: ["=MONTH(A1)", "=MONTH(DATE(2024, 6, 1))", "=MONTH(45444)", '=MONTH("2024-06-01")']
                    }
                }
            }
            ;
            uWc.functionName = "MONTH";
            var vWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    [a] = a;
                    return RVc(a, 0)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg];
                    this.metadata = {
                        category: 3,
                        description: qWc,
                        ld: [{
                            type: "DATE",
                            optional: !1
                        }],
                        jd: ["=YEAR(A1)", "=YEAR(DATE(2024, 6, 1))", "=YEAR(45444)", '=YEAR("2024-06-01")']
                    }
                }
            }
            ;
            vWc.functionName = "YEAR";
            var wWc = () => L("/5m7DQ")
              , xWc = () => L("SRTiNw")
              , yWc = () => L("m81pAQ")
              , zWc = () => L("UjumIw")
              , AWc = () => L("yqyQhA");
            var BWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    const [b,c,d,e=Eo(0),f=Eo(0)] = a;
                    var g = f.value === 0 ? 0 : 1;
                    if (b.value === 0)
                        return x_(v_(y_(this, d).negate(), c).subtract(e), this.ki.qP).result();
                    a = v_(y_(this, e).negate(), y_(this, Eo(1)).add(b).qL(c).result()).result();
                    g = w_(v_(v_(y_(this, d).negate(), y_(this, Eo(1)).add(v_(y_(this, b), Eo(g)).result()).result()), y_(this, Eo(1)).add(b).qL(c).subtract(Eo(1)).result()), b).result();
                    return x_(y_(this, a).add(g), this.ki.qP).result()
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.Jg, this.fb.Jg, this.fb.qv, this.fb.qv];
                    this.metadata = {
                        category: 6,
                        description: wWc,
                        ld: [{
                            type: "RATE",
                            optional: !1
                        }, {
                            type: "PERIODS",
                            optional: !1
                        }, {
                            type: "PAYMENT",
                            optional: !1
                        }, {
                            type: "PRESENT_VALUE",
                            optional: !0
                        }, {
                            type: "PAYMENT_TYPE",
                            optional: !0
                        }],
                        jd: ["=FV(0.1, 12, -100)", "=FV(0.1, 12, -100, -1000)", "=FV(0.1, 12, -100, -1000, 1)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            BWc.functionName = "FV";
            var CWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    const [b,c,d,e=Eo(0),f=Eo(0)] = a;
                    a = Eo(f.value === 0 ? 0 : 1);
                    if (b.value === 0) {
                        if (c.value === 0)
                            return {
                                type: 3,
                                value: 2
                            };
                        a = y_(this, d).add(e).result();
                        a = y_(this, a).negate().result();
                        return w_(y_(this, a), c).result()
                    }
                    var g = v_(v_(y_(this, c), b), a).result();
                    a = y_(this, Eo(1)).add(b).result();
                    var h = v_(y_(this, e).negate(), b).result();
                    const k = v_(y_(this, d), b).result();
                    h = y_(this, h).add(g).add(c).result();
                    g = y_(this, k).add(g).add(c).result();
                    g = w_(y_(this, h), g).result();
                    g = y_(this, g).ln().result();
                    a = y_(this, a).ln().result();
                    a = w_(y_(this, g), a).result();
                    return a.type === 3 ? {
                        type: 3,
                        value: 6
                    } : a
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.Jg, this.fb.Jg, this.fb.qv, this.fb.qv];
                    this.metadata = {
                        category: 6,
                        description: yWc,
                        ld: [{
                            type: "RATE",
                            optional: !1
                        }, {
                            type: "PAYMENT",
                            optional: !1
                        }, {
                            type: "PRESENT_VALUE",
                            optional: !1
                        }, {
                            type: "FUTURE_VALUE",
                            optional: !0
                        }, {
                            type: "PAYMENT_TYPE",
                            optional: !0
                        }],
                        jd: ["=NPER(0.1, -100, 1000)", "=NPER(0.1, -100, 1000, 0)", "=NPER(0.1, -100, 1000, 0, 1)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            CWc.functionName = "NPER";
            var DWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    const [b,c,d,e=Eo(0),f=Eo(0)] = a;
                    a = f.value === 0 ? 0 : 1;
                    if (b.value <= -1 || c.value === 0)
                        return {
                            type: 3,
                            value: 6
                        };
                    if (b.value === 0)
                        return x_(w_(y_(this, d).add(e).negate(), c), this.ki.qP).result();
                    const g = y_(this, Eo(1)).add(b).qL(c).result();
                    if (g.type === 3)
                        return d.value !== 0 ? x_(v_(y_(this, d).negate(), b), this.ki.qP).result() : Eo(0, this.ki.qP);
                    var h = v_(y_(this, d), g).add(e).result();
                    h = v_(y_(this, h), b).negate().result();
                    return x_(w_(w_(y_(this, h), y_(this, g).subtract(Eo(1)).result()), y_(this, Eo(1)).add(v_(y_(this, b), Eo(a)).result()).result()), this.ki.qP).result()
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.Jg, this.fb.Jg, this.fb.qv, this.fb.qv];
                    this.metadata = {
                        category: 6,
                        description: xWc,
                        ld: [{
                            type: "RATE",
                            optional: !1
                        }, {
                            type: "PERIODS",
                            optional: !1
                        }, {
                            type: "PRESENT_VALUE",
                            optional: !1
                        }, {
                            type: "FUTURE_VALUE",
                            optional: !0
                        }, {
                            type: "PAYMENT_TYPE",
                            optional: !0
                        }],
                        jd: ["=PMT(0.1, 12, 1000)", "=PMT(0.1, 12, 1000, 0)", "=PMT(0.1, 12, 1000, 0, 1)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            DWc.functionName = "PMT";
            var EWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    const [b,c,d,e=Eo(0),f=Eo(0)] = a;
                    a = f.value === 0 ? 0 : 1;
                    if (b.value === 0)
                        return x_(v_(y_(this, d), c).negate().subtract(e), this.ki.qP).result();
                    a = v_(w_(y_(this, Eo(1)).add(b).qL(c).subtract(Eo(1)), b), v_(y_(this, Eo(1)).add(v_(y_(this, b), Eo(a)).result()), d).result()).result();
                    return x_(w_(y_(this, a).negate().subtract(e), y_(this, Eo(1)).add(b).qL(c).result()), this.ki.qP).result()
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.Jg, this.fb.Jg, this.fb.qv, this.fb.qv];
                    this.metadata = {
                        category: 6,
                        description: zWc,
                        ld: [{
                            type: "RATE",
                            optional: !1
                        }, {
                            type: "PERIODS",
                            optional: !1
                        }, {
                            type: "PAYMENT",
                            optional: !1
                        }, {
                            type: "FUTURE_VALUE",
                            optional: !0
                        }, {
                            type: "PAYMENT_TYPE",
                            optional: !0
                        }],
                        jd: ["=PV(0.1, 12, -100)", "=PV(0.1, 12, -100, 1000)", "=PV(0.1, 12, -100, 1000, 1)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            EWc.functionName = "PV";
            var FWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    const [b,c,d,e=Eo(0),f=Eo(0),g=Eo(Fo(.1))] = a;
                    if (b.value <= 0 || c.value === 0)
                        return {
                            type: 3,
                            value: 6
                        };
                    a = f.value === 0 ? 0 : 1;
                    var h = g;
                    if (g.value === .1) {
                        var k = v_(y_(this, c), b).result()
                          , l = y_(this, k).subtract(d).result();
                        l = w_(y_(this, l), d).result();
                        l = w_(y_(this, l), b).result();
                        l.type === 0 && l.value > 0 && l.value < 1 ? h = l : (k = w_(y_(this, k), d).result(),
                        k.type === 0 && k.value > 2 && (h = Eo(Fo(.5))))
                    }
                    k = Eo(Fo(1E-14));
                    var m = y_(this, Eo(1)).add(h).result()
                      , n = y_(this, m).ln().result()
                      , p = v_(y_(this, b), n).result();
                    p = y_(this, p).exp().result();
                    var q = a === 1 ? m : Eo(1);
                    m = y_(this, p).subtract(Eo(1)).result();
                    m = w_(y_(this, m), h).result();
                    p = v_(y_(this, d), p).result();
                    q = v_(y_(this, c), q).result();
                    var r = v_(y_(this, q), m).result();
                    p = y_(this, p).add(r).result();
                    p = y_(this, e).add(p).result();
                    if (p.type !== 0 || !isFinite(p.value))
                        return {
                            type: 3,
                            value: 6
                        };
                    l = 100;
                    if (p.type === 0) {
                        var t = y_(this, p).abs().log10().result();
                        t.type === 0 && t.value > 10 && (l = Math.min(1E3, Math.ceil(t.value * 10)))
                    }
                    for (t = 0; t < l; t++) {
                        r = y_(this, b).subtract(Eo(1)).result();
                        n = v_(y_(this, r), n).result();
                        var w = y_(this, n).exp().result();
                        n = v_(y_(this, b), d).result();
                        n = v_(y_(this, n), w).result();
                        r = v_(y_(this, c), Eo(a)).result();
                        r = v_(y_(this, r), m).result();
                        w = v_(y_(this, b), w).result();
                        w = w_(y_(this, w), h).result();
                        m = w_(y_(this, m), h).result();
                        m = y_(this, w).subtract(m).result();
                        m = v_(y_(this, q), m).result();
                        m = y_(this, n).add(r).add(m).result();
                        q = y_(this, m).abs().result();
                        if (q.type === 0 && q.value < k.value)
                            break;
                        m = w_(y_(this, p), m).result();
                        m = y_(this, h).subtract(m).result();
                        q = y_(this, h).subtract(m).abs().result();
                        p = y_(this, p).abs().result();
                        h = q.type === 0 && h.type === 0 && h.value !== 0 ? w_(y_(this, q), y_(this, h).abs().result()).result() : Eo(Fo(Number.MAX_VALUE));
                        if (p.type === 0 && (p.value < k.value || q.type === 0 && (q.value < k.value || h.value < k.value)))
                            return Eo(Fo(m.value), __c.NP.create(__c.s5b));
                        if (m.type !== 0 || m.value <= -1 || m.value > 1E3 || !isFinite(m.value))
                            break;
                        h = m;
                        m = y_(this, Eo(1)).add(h).result();
                        n = y_(this, m).ln().result();
                        p = v_(y_(this, b), n).result();
                        p = y_(this, p).exp().result();
                        q = a === 1 ? m : Eo(1);
                        m = y_(this, p).subtract(Eo(1)).result();
                        m = w_(y_(this, m), h).result();
                        p = v_(y_(this, d), p).result();
                        q = v_(y_(this, c), q).result();
                        r = v_(y_(this, q), m).result();
                        p = y_(this, p).add(r).result();
                        p = y_(this, e).add(p).result()
                    }
                    return {
                        type: 3,
                        value: 6
                    }
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.Jg, this.fb.Jg, this.fb.qv, this.fb.qv, this.fb.qv];
                    this.metadata = {
                        category: 6,
                        description: AWc,
                        ld: [{
                            type: "PERIODS",
                            optional: !1
                        }, {
                            type: "PAYMENT",
                            optional: !1
                        }, {
                            type: "PRESENT_VALUE",
                            optional: !1
                        }, {
                            type: "FUTURE_VALUE",
                            optional: !0
                        }, {
                            type: "PAYMENT_TYPE",
                            optional: !0
                        }, {
                            type: "RATE_GUESS",
                            optional: !0
                        }],
                        jd: ["=RATE(12, -100, 1000)", "=RATE(12, -100, 1000, 0)", "=RATE(12, -100, 1000, 0, 1)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            FWc.functionName = "RATE";
            var GWc = () => L("at5mtg")
              , HWc = () => L("mcEQ9A");
            var IWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    return Do(a[0].type === 15)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Bt];
                    this.metadata = {
                        category: 7,
                        description: GWc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=ISBLANK(A1)"]
                    }
                }
            }
            ;
            IWc.functionName = "ISBLANK";
            var JWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    return Do(a[0].type === 3)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Bt];
                    this.metadata = {
                        category: 7,
                        description: HWc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=ISERROR(#N/A)", "=ISERROR(1/0)"]
                    }
                }
            }
            ;
            JWc.functionName = "ISERROR";
            var KWc = () => L("AytKEQ")
              , LWc = () => L("F7KAQw")
              , MWc = () => L("JZNFRA")
              , NWc = () => L("z6237A")
              , OWc = () => L("moRadA")
              , PWc = () => L("YAYu0Q");
            var F_ = class extends D_ {
                execute(a) {
                    a = p_(a, () => Do(!1));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = [a.value[0], ...a.value[1]];
                    return this.process(F_.functionName, a)
                }
                process(a, b) {
                    const c = TVc(a);
                    a = A_(b, (d, e) => {
                        if (e.type === 3)
                            return Aa(e);
                        if (e.type === 15)
                            return ya(d);
                        e = this.Lf.Ig(e, 1);
                        return e.type === 3 ? ya(d) : ya(c(d, e))
                    }
                    , void 0, {
                        DG: d => d.type !== 2
                    });
                    return a.ok ? a.value == null ? {
                        type: 3,
                        value: 3
                    } : a.value : a.error
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.iqb;
                    this.metadata = {
                        category: 8,
                        description: KWc,
                        ld: [{
                            type: "CONDITION",
                            optional: !1
                        }, {
                            type: "CONDITIONS",
                            optional: !0
                        }],
                        jd: ["=AND(A1>0, B1<5)", "=AND(3>0, 2<5)", "=AND(TRUE, 1=1)"]
                    }
                }
            }
            ;
            F_.functionName = "AND";
            var QWc = class extends E_ {
                ng(a) {
                    const [b,c,d] = a;
                    if (b.type === 4) {
                        if (z_(b) || b.asa == null && b.size != null && b.size.cols === 1 && b.size.rows === 1)
                            return !0;
                        b.size == null ? a = {
                            type: 3,
                            value: 3
                        } : (Yn(b.size.rows === 1 && b.size.cols === 1),
                        a = b.value[0][0])
                    } else
                        a = b;
                    if (a.type === 3)
                        return !1;
                    a = this.Lf.Ig(a, 1);
                    return a.type === 3 ? !1 : z_(a.value ? c : d)
                }
                je() {
                    return !1
                }
                gg(a) {
                    const [b,c,d=Do(!1)] = a;
                    return b.value ? c : d
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.ysa, this.fb.Bt, this.fb.$9b];
                    this.metadata = {
                        category: 8,
                        description: LWc,
                        ld: [{
                            type: "CONDITION",
                            optional: !1
                        }, {
                            type: "VALUE_IF_TRUE",
                            optional: !1
                        }, {
                            type: "VALUE_IF_FALSE",
                            optional: !0
                        }],
                        jd: ['=IF(A1>10, "Over 10", "10 or less")', '=IF(A1="", "Empty", "Not empty")', '=IF(A1>5, "Greater than 5", "5 or less")', '=IF(3>2, "True", "False")', '=IF(TRUE, "This is true", "This is false")']
                    };
                    this.Tj = b => b === 0 ? Do(!1) : Eo(0)
                }
            }
            ;
            QWc.functionName = "IF";
            var RWc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    const [b,c] = a;
                    return b.type !== 3 ? z_(b) : z_(c)
                }
                gg(a) {
                    const [b,c] = a;
                    a = b.type === 3 ? c : b;
                    return a.type === 15 ? Eo(0) : a
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Bt, this.fb.Bt];
                    this.metadata = {
                        category: 8,
                        description: MWc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUE_IF_ERROR",
                            optional: !1
                        }],
                        jd: ['=IFERROR(A1/B1, "Error in calculation")', '=IFERROR(VLOOKUP("Apple", A1:B10, 2, FALSE), "Not Found")', '=IFERROR(TEXT(A1, "0.00"), "Invalid number")', '=IFERROR(10/0, "Division by zero")']
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            RWc.functionName = "IFERROR";
            var SWc = class extends E_ {
                vpb(a) {
                    let b = 0;
                    for (let d = 0; d < a.length; d += 2) {
                        var c = a[d];
                        if (c.type === 4 && (c.asa == null || c.size?.cols !== 1 || c.size?.rows !== 1))
                            break;
                        c = C_(c);
                        if (c.type === 3)
                            break;
                        c = this.Lf.Ig(c, 1);
                        if (c.type === 3)
                            break;
                        if (c.value)
                            break;
                        b = d + 2
                    }
                    return a.slice(b)
                }
                ng(a) {
                    let b = !1;
                    for (let d = 0; d < a.length; d += 2) {
                        var c = a[d];
                        if (c.type === 4) {
                            if (z_(c)) {
                                b = !0;
                                break
                            }
                            if (c.asa == null && c.size?.cols === 1 && c.size?.rows === 1) {
                                b = !0;
                                break
                            }
                        }
                        c = C_(c);
                        if (c.type === 3)
                            break;
                        c = this.Lf.Ig(c, 1);
                        if (c.type === 3) {
                            if (a[d + 1].type === 4)
                                return !0;
                            break
                        }
                        if (c.value)
                            break
                    }
                    return b
                }
                je() {
                    return !1
                }
                gg(a) {
                    return C_(this.bAa(a))
                }
                bAa(a) {
                    a = [[a[0], a[1]], ...a[2]];
                    for (const [b,c] of a) {
                        a = C_(b);
                        if (a.type === 3)
                            return a;
                        a = this.Lf.Ig(a, 1);
                        if (a.type === 3)
                            return a;
                        if (a.value)
                            return c
                    }
                    return {
                        type: 3,
                        value: 7
                    }
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.ysa, this.fb.lY, this.fb.Xcc];
                    this.metadata = {
                        category: 8,
                        description: NWc,
                        ld: [{
                            type: "CONDITIONS",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !1
                        }],
                        jd: ['=IFS(A1=1, "One", A1=2, "Two", A1=3, "Three")', '=IFS(B1>10, "Above 10", B1>5, "Above 5", TRUE, "5 or less")', '=IFS(C1="Apple", "Fruit", C1="Carrot", "Vegetable", TRUE, "Other")']
                    };
                    this.Tj = b => b % 2 === 0 ? Do(!1) : Eo(0)
                }
            }
            ;
            SWc.functionName = "IFS";
            var TWc = class extends E_ {
                ng(a) {
                    return a.some(kWc)
                }
                je() {
                    return !1
                }
                gg(a) {
                    [a] = a;
                    if (a.type === 3)
                        return a;
                    a = this.Lf.Ig(a, 1);
                    return a.type === 3 ? a : Do(!a.value)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.ysa];
                    this.metadata = {
                        category: 8,
                        description: OWc,
                        ld: [{
                            type: "CONDITION",
                            optional: !1
                        }],
                        jd: ["=NOT(A1>10)", "=NOT(3>5)", "=NOT(FALSE)"]
                    }
                }
            }
            ;
            TWc.functionName = "NOT";
            var UWc = class extends F_ {
                execute(a) {
                    a = p_(a, () => Do(!1));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = [a.value[0], ...a.value[1]];
                    return this.process(UWc.functionName, a)
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.iqb;
                    this.metadata = {
                        category: 8,
                        description: PWc,
                        ld: [{
                            type: "CONDITION",
                            optional: !1
                        }, {
                            type: "CONDITIONS",
                            optional: !0
                        }],
                        jd: ["=OR(A1>0, B1<5)", "=OR(3>0, 5<2)", "=OR(FALSE, 1=1)"]
                    }
                }
            }
            ;
            UWc.functionName = "OR";
            var VWc = () => L("SRLplQ")
              , WWc = () => L("H0sxOw")
              , XWc = () => L("9Gg1Mg")
              , YWc = () => L("vpH+/g")
              , ZWc = () => L("XILGzw");
            var $Wc = class extends E_ {
                je(a) {
                    return a === 1
                }
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                gg(a) {
                    const [b,c,d,e] = a;
                    return UVc(this.Bd, b, c, d, e, this.ki.QH)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.xN, this.fb.qt, this.fb.J$a, this.fb.Mrb];
                    this.metadata = {
                        category: 9,
                        description: ZWc,
                        ld: [{
                            type: "LOOKUP_VALUE",
                            optional: !1
                        }, {
                            type: "ARRAYS",
                            optional: !1
                        }, {
                            type: "COL_INDEX_NUM",
                            optional: !1
                        }, {
                            type: "RANGE_LOOKUP",
                            optional: !0
                        }],
                        jd: ['=VLOOKUP("Apple", A1:B10, 2, FALSE)', "=VLOOKUP(A1, B1:C10, 2, TRUE)", "=VLOOKUP(5, A1:B10, 2, FALSE)"]
                    };
                    this.Tj = () => ({
                        type: 3,
                        value: 7
                    })
                }
            }
            ;
            $Wc.functionName = "VLOOKUP";
            var aXc = class extends E_ {
                je(a) {
                    return a === 1
                }
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                gg(a) {
                    const [b,c,d,e] = a;
                    a = this.Bd;
                    var f = this.ki.QH;
                    {
                        const l = c.value;
                        var g = c.size;
                        if (g) {
                            var h = g.rows;
                            g = g.cols;
                            var k = [];
                            for (let m = 0; m < g; m++) {
                                const n = [];
                                for (let p = 0; p < h; p++)
                                    n.push(l[p][m]);
                                k.push(n)
                            }
                            h = {
                                type: 4,
                                value: k,
                                size: {
                                    rows: g,
                                    cols: h
                                }
                            }
                        } else
                            h = {
                                type: 4,
                                value: [],
                                size: void 0
                            }
                    }
                    return UVc(a, b, h, d, e, f)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.xN, this.fb.qt, this.fb.J$a, this.fb.Mrb];
                    this.metadata = {
                        category: 9,
                        description: VWc,
                        ld: [{
                            type: "LOOKUP_VALUE",
                            optional: !1
                        }, {
                            type: "ARRAYS",
                            optional: !1
                        }, {
                            type: "ROW_INDEX_NUM",
                            optional: !1
                        }, {
                            type: "RANGE_LOOKUP",
                            optional: !0
                        }],
                        jd: ['=HLOOKUP("Apple", A1:F10, 2, FALSE)', "=HLOOKUP(A1, B1:H10, 3, TRUE)", "=HLOOKUP(5, A1:E4, 2, FALSE)"]
                    };
                    this.Tj = () => ({
                        type: 3,
                        value: 7
                    })
                }
            }
            ;
            aXc.functionName = "HLOOKUP";
            var bXc = class extends E_ {
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && b.type === 4 && b.asa == null)
                }
                je(a) {
                    return a === 0
                }
                bAa(a) {
                    const [b,c,d] = a;
                    a = B_(c);
                    const e = B_(d);
                    if (b.type === 3)
                        return b;
                    var f = VVc(b);
                    if (a < -1 || d && e < -1 || f.size == null)
                        return {
                            type: 3,
                            value: 3
                        };
                    if (d == null && (f.size.rows === 1 || f.size.cols === 1)) {
                        if (a === -1)
                            return b;
                        f = f.value.flat(1);
                        if (a >= f.length)
                            return {
                                type: 3,
                                value: 4
                            };
                        a = f[a];
                        return a.type === 15 ? Eo(0) : a
                    }
                    if (a >= f.size.rows || e >= f.size.cols)
                        return {
                            type: 3,
                            value: 4
                        };
                    if (e === -1 && a === -1)
                        return b;
                    if (a === -1)
                        return a = f.value.map(g => [g[e]]),
                        ep(a, {
                            rows: a.length,
                            cols: 1
                        });
                    if (e === -1)
                        return a = f.value[a],
                        ep([a], {
                            rows: 1,
                            cols: a.length
                        });
                    a = f.value[a][e];
                    return a.type === 15 ? Eo(0) : a
                }
                gg(a) {
                    const [b,c,d] = a;
                    a = B_(c);
                    var e = B_(d);
                    if (b.type === 3)
                        return b;
                    const f = VVc(b);
                    if (a < -1 || d && e < -1)
                        return {
                            type: 3,
                            value: 3
                        };
                    a = Math.max(0, a);
                    e = Math.max(0, e);
                    if (f.size == null)
                        return {
                            type: 3,
                            value: 3
                        };
                    if (d == null && (f.size.rows === 1 || f.size.cols === 1)) {
                        e = f.value.flat(1);
                        if (a >= e.length)
                            return {
                                type: 3,
                                value: 4
                            };
                        a = e[a];
                        return a.type === 15 ? Eo(0) : a
                    }
                    if (a >= f.size.rows || e >= f.size.cols)
                        return {
                            type: 3,
                            value: 4
                        };
                    a = f.value[a][e];
                    return a.type === 15 ? Eo(0) : a
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.lY, this.fb.Jg, this.fb.qv];
                    this.metadata = {
                        category: 9,
                        description: WWc,
                        ld: [{
                            type: "ARRAY",
                            optional: !1
                        }, {
                            type: "ROW_INDEX_NUM",
                            optional: !1
                        }, {
                            type: "COL_INDEX_NUM",
                            optional: !0
                        }],
                        jd: ["=INDEX(A1:A4, 1)", "=INDEX({1, 2; 3, 4}, 1, 1)"]
                    };
                    this.Tj = b => b === 0 ? {
                        type: 3,
                        value: 3
                    } : Eo(0)
                }
            }
            ;
            bXc.functionName = "INDEX";
            var cXc = class extends E_ {
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                je(a) {
                    return a === 1
                }
                gg(a) {
                    const [b,c,d] = a;
                    a = b.type === 15 ? Eo(0) : b;
                    var e = d?.value;
                    var f = e == null || e > 0 ? 1 : e < 0 ? -1 : 0;
                    if (c.size == null || Math.min(c.size.cols, c.size.rows) !== 1)
                        return {
                            type: 3,
                            value: 7
                        };
                    e = c.value.flat(1);
                    switch (f) {
                    case 0:
                        if (a.type === 2 && (f = this.ki.QH,
                        f = f(`=${a.value}`),
                        f = WVc(f, e),
                        f !== -1))
                            return Eo(Fo(f + 1));
                        a: {
                            f = this.Bd;
                            for (let g = 0; g < e.length; g++) {
                                const h = e[g];
                                if (h.type === a.type && hp(f, "=", a, h).value) {
                                    a = g;
                                    break a
                                }
                            }
                            a = -1
                        }
                        if (a !== -1)
                            return Eo(Fo(a + 1));
                        break;
                    case 1:
                        a = XVc(this.Bd, a, e, "<=", "<=");
                        if (a !== -1)
                            return Eo(Fo(a + 1));
                        break;
                    case -1:
                        a = XVc(this.Bd, a, e, ">=", ">");
                        if (a !== -1)
                            return Eo(Fo(a + 1));
                        break;
                    default:
                        throw new z(f);
                    }
                    return {
                        type: 3,
                        value: 7
                    }
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.xN, this.fb.qt, this.fb.qv];
                    this.metadata = {
                        category: 9,
                        description: XWc,
                        ld: [{
                            type: "LOOKUP_VALUE",
                            optional: !1
                        }, {
                            type: "SEARCH_RANGE",
                            optional: !1
                        }, {
                            type: "MATCH_TYPE",
                            optional: !0
                        }],
                        jd: ["=MATCH(4, {2,4,6})", '=MATCH("Apple", A1:B10, 0)']
                    }
                }
            }
            ;
            cXc.functionName = "MATCH";
            var dXc = [1, -1, 2, -2]
              , eXc = [0, -1, 1, 2]
              , fXc = [2, -2]
              , gXc = class extends E_ {
                je(a) {
                    return a === 1 || a === 2
                }
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                gg(a) {
                    const [b,c,d,e={
                        type: 3,
                        value: 7
                    },f=Eo(0),g=Eo(1)] = a;
                    a = C_(b);
                    if (a.type === 3)
                        return a;
                    const h = c.type === 4 ? c : ep([[c]], {
                        rows: 1,
                        cols: 1
                    })
                      , k = d.type === 4 ? d : ep([[d]], {
                        rows: 1,
                        cols: 1
                    });
                    var l = h.size?.rows
                      , m = h.size?.cols;
                    const n = k.size?.rows
                      , p = k.size?.cols;
                    if (!(l === 1 && m === p || m === 1 && l === n))
                        return {
                            type: 3,
                            value: 3
                        };
                    l = f.value;
                    m = g.value;
                    return dXc.includes(m) && eXc.includes(l) ? fXc.includes(m) && l === 2 ? {
                        type: 3,
                        value: 7
                    } : this.search(a, h, k, l, m, e) : {
                        type: 3,
                        value: 3
                    }
                }
                search(a, b, c, d, e, f) {
                    if (fXc.includes(e))
                        a: {
                            d = e === 2;
                            b = b.value;
                            c = c.value;
                            var g = 0;
                            for (e = b.length - 1; g <= e; ) {
                                const h = Math.floor((g + e) / 2)
                                  , k = b[h][0];
                                if (k.type === 15 || k.type === 3) {
                                    a = {
                                        type: 3,
                                        value: 7
                                    };
                                    break a
                                }
                                const l = gp(this.Bd, d ? "<=" : ">=", k, a);
                                if (l.type === 3) {
                                    a = l;
                                    break a
                                }
                                if (l.value) {
                                    g = gp(this.Bd, "=", k, a);
                                    if (g.type === 3) {
                                        a = g;
                                        break a
                                    }
                                    if (g.value) {
                                        a = c[h][0];
                                        break a
                                    }
                                    g = h + 1
                                } else
                                    e = h - 1
                            }
                            a = f
                        }
                    else
                        a = YVc(this, b, c, a, f, d, e);
                    return a
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.k$, this.fb.k$, this.fb.k$, this.fb.a$b, this.fb.qv, this.fb.qv];
                    this.metadata = {
                        category: 9,
                        description: YWc,
                        ld: [{
                            type: "LOOKUP_VALUE",
                            optional: !1
                        }, {
                            type: "ARRAYS",
                            optional: !1
                        }, {
                            type: "ARRAYS",
                            optional: !1
                        }, {
                            type: "VALUE_IF_NOT_FOUND",
                            optional: !0
                        }, {
                            type: "MATCH_MODE",
                            optional: !0
                        }, {
                            type: "SEARCH_MODE",
                            optional: !0
                        }],
                        jd: ['=XLOOKUP("Needle", A1:A10, B1:B10)', '=XLOOKUP("Needle", A1:A10, B1:B10, "Missing")', '=XLOOKUP("N?edle", A1:A10, B1:B10,, 2)', "=XLOOKUP(100, A1:A10, B1:B10,, 0, -1)"]
                    };
                    this.Tj = () => Mo()
                }
            }
            ;
            gXc.functionName = "XLOOKUP";
            var hXc = () => L("yTCqEQ")
              , iXc = () => L("zzuA3Q")
              , jXc = () => L("zLndUw")
              , kXc = () => L("G5txlA")
              , lXc = () => L("JxfUTg")
              , mXc = () => L("qW7ibw")
              , nXc = () => L("bbUwgg")
              , oXc = () => L("SUASIw")
              , pXc = () => L("VdIrCw")
              , qXc = () => L("kUEOwQ")
              , rXc = () => L("h3Jymg")
              , sXc = () => L("VVgnDA")
              , tXc = () => L("qpF0/Q")
              , uXc = () => L("toEMSQ")
              , vXc = () => L("FpeQjw")
              , wXc = () => L("SLojAw");
            var xXc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    [a] = a;
                    return jp(Math.abs(a.value))
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg];
                    this.metadata = {
                        category: 10,
                        description: hXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=ABS(-123.456)", "=ABS(A1)"]
                    }
                }
            }
            ;
            xXc.functionName = "ABS";
            var yXc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    [a] = a;
                    return jp(Math.exp(a.value))
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg];
                    this.metadata = {
                        category: 10,
                        description: iXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=EXP(1)", "=EXP(2)", "=EXP(A1)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            yXc.functionName = "EXP";
            var zXc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    [a] = a;
                    return a.value <= 0 ? {
                        type: 3,
                        value: 6
                    } : jp(Math.log(a.value))
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg];
                    this.metadata = {
                        category: 10,
                        description: jXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=LN(2.718)", "=LN(A1)"]
                    }
                }
            }
            ;
            zXc.functionName = "LN";
            var AXc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    const [b,c=Eo(Fo(10))] = a;
                    return b.value <= 0 || c.value <= 0 ? {
                        type: 3,
                        value: 6
                    } : c.value === 1 ? {
                        type: 3,
                        value: 2
                    } : jp(Math.log(b.value) / Math.log(c.value))
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.qv];
                    this.metadata = {
                        category: 10,
                        description: kXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUE",
                            optional: !0
                        }],
                        jd: ["=LOG(100, 10)", "=LOG(A1, 2)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            AXc.functionName = "LOG";
            var BXc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    [a] = a;
                    return a.value <= 0 ? {
                        type: 3,
                        value: 6
                    } : jp(Math.log(a.value) / Math.log(10))
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg];
                    this.metadata = {
                        category: 10,
                        description: lXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=LOG10(100)", "=LOG10(A1)"]
                    }
                }
            }
            ;
            BXc.functionName = "LOG10";
            var CXc = class extends D_ {
                execute(a) {
                    a = o_(this.Vo, a, this.args);
                    return a.success ? Eo(Fo(Math.PI)) : a.value
                }
                constructor(...a) {
                    super(...a);
                    this.args = [];
                    this.metadata = {
                        category: 10,
                        description: mXc,
                        ld: [],
                        jd: ["=PI()", "=PI()*2*5"]
                    }
                }
            }
            ;
            CXc.functionName = "PI";
            var DXc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    const [b,c] = a;
                    return gp(this.Bd, "^", b, c)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.Jg];
                    this.metadata = {
                        category: 10,
                        description: nXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=POWER(5, 2)", "=POWER(A1, 0.5)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            DXc.functionName = "POWER";
            var EXc = class extends D_ {
                execute(a) {
                    if (a.length === 0)
                        return {
                            type: 3,
                            value: 7
                        };
                    a = a.filter(b => b.type !== 7);
                    if (a.length === 0)
                        return Eo(0);
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = a.value;
                    a = [a[0], ...a[1]];
                    a = A_(a, (b, c) => {
                        b = gp(this.Bd, "*", b, c);
                        return b.type !== 3 ? ya(b) : Aa(b)
                    }
                    , Eo(1), {
                        DG: s_,
                        WFb: Eo(0)
                    });
                    return a.ok ? a.value : a.error
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.cS;
                    this.metadata = {
                        category: 10,
                        description: oXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=PRODUCT(A1:A3)", "=PRODUCT(2, 3, 4)", "=PRODUCT(A1, 5, 10)"]
                    }
                }
            }
            ;
            EXc.functionName = "PRODUCT";
            var G_ = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    const [b,c] = a;
                    return this.process(b, c, this.constructor.functionName)
                }
                process(a, b, c) {
                    const d = a.value < 0;
                    a = Math.abs(a.value);
                    var e = Math.floor(Math.abs(b.value));
                    b = b.value < 0 ? e * -1 : e;
                    if (c === "ROUND" && b >= 2147483647)
                        return Eo(0);
                    b = Math.min(b, 15);
                    e = Math.max(b, 0);
                    e = Math.min(a.toFixed(0).length + e, 15);
                    if (b >= 0)
                        switch (b = Math.pow(10, b),
                        a = Number((a * b).toPrecision(15)),
                        c) {
                        case "ROUNDDOWN":
                            c = Number((Math.floor(a) / b).toPrecision(e));
                            break;
                        case "ROUNDUP":
                            c = Number((Math.ceil(a) / b).toPrecision(e));
                            break;
                        case "ROUND":
                            c = Number((Math.round(a) / b).toPrecision(e));
                            break;
                        default:
                            throw new z(c);
                        }
                    else if (a === 0)
                        c = 0;
                    else if (b = Math.pow(10, -b),
                    isFinite(b)) {
                        switch (c) {
                        case "ROUNDDOWN":
                            c = Math.floor(a / b);
                            break;
                        case "ROUNDUP":
                            c = Math.ceil(a / b);
                            break;
                        case "ROUND":
                            c = Math.round(a / b);
                            break;
                        default:
                            throw new z(c);
                        }
                        c *= b
                    } else
                        c = c === "ROUNDUP" ? Infinity : 0;
                    return isFinite(c) ? Eo(Fo(d ? c * -1 : c)) : {
                        type: 3,
                        value: 6
                    }
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.Jg];
                    this.metadata = {
                        category: 10,
                        description: pXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=ROUND(123.456, 2)", "=ROUND(A1, 0)", "=ROUND(15.7, -1)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            G_.functionName = "ROUND";
            var FXc = class extends G_ {
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.Jg];
                    this.metadata = {
                        category: 10,
                        description: qXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=ROUNDDOWN(123.456, 2)", "=ROUNDDOWN(A1, 0)", "=ROUNDDOWN(15.7, -1)"]
                    }
                }
            }
            ;
            FXc.functionName = "ROUNDDOWN";
            var GXc = class extends G_ {
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg, this.fb.Jg];
                    this.metadata = {
                        category: 10,
                        description: rXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=ROUNDDUP(123.456, 2)", "=ROUNDDUP(A1, 0)", "=ROUNDDUP(15.7, -1)"]
                    }
                }
            }
            ;
            GXc.functionName = "ROUNDUP";
            var HXc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    [a] = a;
                    return a.value < 0 ? {
                        type: 3,
                        value: 6
                    } : ip(this.Bd, "^", a, Eo(Fo(.5)))
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.Jg];
                    this.metadata = {
                        category: 10,
                        description: sXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=SQRT(50)", "=SQRT(A1)"]
                    }
                }
            }
            ;
            HXc.functionName = "SQRT";
            var IXc = class extends D_ {
                execute(a) {
                    a = p_(a, () => Eo(0));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = a.value;
                    a = [a[0], ...a[1]];
                    a = A_(a, (b, c) => {
                        b = gp(this.Bd, "+", b, c);
                        return b.type !== 3 ? ya(b) : Aa(b)
                    }
                    , Eo(0), {
                        DG: s_
                    });
                    return a.ok ? a.value : a.error
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.cS;
                    this.metadata = {
                        category: 10,
                        description: tXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=SUM(A1:A10)", "=SUM(1, 2, 3)", "=SUM(A1, 5, 10)"]
                    }
                }
            }
            ;
            IXc.functionName = "SUM";
            var JXc = class extends E_ {
                je(a) {
                    return a === 0 || a === 2
                }
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                gg(a) {
                    const [b,c,d=b] = a;
                    return LVc(this.cJ, b, c, this.ki.QH, d)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.qt, this.fb.Bt, this.fb.Lrb];
                    this.metadata = {
                        category: 10,
                        description: uXc,
                        ld: [{
                            type: "ARRAY",
                            optional: !1
                        }, {
                            type: "CONDITION",
                            optional: !1
                        }, {
                            type: "ARRAY",
                            optional: !0
                        }],
                        jd: ['=SUMIF(A1:A10, ">5")', '=SUMIF(B1:B10, "Apple", C1:C10)', '=SUMIF(D1:D10, "<=10", E1:E10)']
                    };
                    this.Tj = b => b === 1 ? Eo(0) : {
                        type: 3,
                        value: 7
                    }
                }
            }
            ;
            JXc.functionName = "SUMIF";
            var KXc = class extends E_ {
                je(a) {
                    return a === 0 || a === 1 || a % 2 === 1
                }
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                gg(a) {
                    const [b,...c] = a;
                    a = [[c[0], c[1]], ...c[2]];
                    return KVc(this.cJ, a, b, this.ki.QH)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.qt, this.fb.qt, this.fb.Bt, this.fb.BZa];
                    this.metadata = {
                        category: 10,
                        description: vXc,
                        ld: [{
                            type: "ARRAY",
                            optional: !1
                        }, {
                            type: "ARRAY",
                            optional: !1
                        }, {
                            type: "CONDITION",
                            optional: !1
                        }, {
                            type: "ARRAY",
                            optional: !0
                        }, {
                            type: "CONDITION",
                            optional: !0
                        }],
                        jd: ['=SUMIFS(A1:A10, B1:B10, ">5")', '=SUMIFS(C1:C10, D1:D10, "Red", E1:E10, "<10")', '=SUMIFS(F1:F15, G1:G15, ">=20", H1:H15, "Completed")']
                    };
                    this.Tj = b => b <= 1 ? {
                        type: 3,
                        value: 7
                    } : b % 2 === 0 ? Eo(0) : {
                        type: 3,
                        value: 7
                    }
                }
            }
            ;
            KXc.functionName = "SUMIFS";
            var LXc = class extends D_ {
                execute(a) {
                    a = p_(a, () => ep([[{
                        type: 3,
                        value: 3
                    }]], {
                        rows: 1,
                        cols: 1
                    }));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = [a.value[0], ...a.value[1]];
                    const b = [];
                    let c;
                    const d = (e, f) => {
                        const g = b[f] || Eo(1);
                        switch (e.type) {
                        case 3:
                            c = c || e;
                            break;
                        case 0:
                            e = ip(this.Bd, "*", g, e);
                            n_(e);
                            b[f] = e;
                            break;
                        case 1:
                        case 2:
                        case 15:
                        case 16:
                            b[f] = Eo(0);
                            break;
                        default:
                            throw new z(e);
                        }
                    }
                    ;
                    if (!ZVc(a))
                        return {
                            type: 3,
                            value: 3
                        };
                    a.forEach(e => e.value.flat().forEach(d));
                    return c ? c : b.reduce( (e, f) => {
                        e = ip(this.Bd, "+", e, f);
                        n_(e);
                        return e
                    }
                    , Eo(0))
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.SOb;
                    this.metadata = {
                        category: 10,
                        description: wXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=SUMPRODUCT(A1:A3, B1:B3)"]
                    }
                }
            }
            ;
            LXc.functionName = "SUMPRODUCT";
            var MXc = () => L("ov07pg")
              , NXc = () => L("0OZlXw")
              , OXc = () => L("UNcBHQ")
              , PXc = () => L("o+jEsg")
              , QXc = () => L("oIv25Q")
              , RXc = () => L("8MC7NQ")
              , SXc = () => L("hMw7aQ")
              , TXc = () => L("GhP5GA")
              , UXc = () => L("kgOhOg")
              , VXc = () => L("rOG4RQ")
              , WXc = () => L("MvkKiw")
              , XXc = () => L("HSWMvg")
              , YXc = () => L("2/8ILQ")
              , ZXc = () => L("HMeuTg")
              , $Xc = () => L("cNhTsA")
              , aYc = () => L("M0/1dw")
              , bYc = () => L("q9Ok2g");
            var cYc = class extends D_ {
                execute(a) {
                    a = p_(a, () => Eo(0));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = a.value;
                    a = [a[0], ...a[1]];
                    return aWc(this.Bd, a)
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.cS;
                    this.metadata = {
                        category: 11,
                        description: MXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=AVERAGE(A1:A10)", "=AVERAGE(1, 2, 3)", "=AVERAGE(A1, 5, 10)"]
                    }
                }
            }
            ;
            cYc.functionName = "AVERAGE";
            var dYc = class extends E_ {
                je(a) {
                    return a === 0 || a === 2
                }
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                gg(a) {
                    const [b,c,d=b] = a;
                    return NVc(this.cJ, b, c, this.ki.QH, d)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.qt, this.fb.Bt, this.fb.Lrb];
                    this.metadata = {
                        category: 11,
                        description: NXc,
                        ld: [{
                            type: "ARRAY",
                            optional: !1
                        }, {
                            type: "CONDITION",
                            optional: !1
                        }, {
                            type: "ARRAY",
                            optional: !0
                        }],
                        jd: ['=AVERAGEIF(A1:A10, ">5")', '=AVERAGEIF(B1:B10, "Apple", C1:C10)', '=AVERAGEIF(D1:D10, "<100", E1:E10)']
                    };
                    this.Tj = b => b === 1 ? Eo(0) : {
                        type: 3,
                        value: 7
                    }
                }
            }
            ;
            dYc.functionName = "AVERAGEIF";
            var eYc = class extends E_ {
                je(a) {
                    return a === 0 || a === 1 || a % 2 === 1
                }
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                gg(a) {
                    const [b,...c] = a;
                    a = [[c[0], c[1]], ...c[2]];
                    return MVc(this.cJ, a, b, this.ki.QH)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.qt, this.fb.qt, this.fb.Bt, this.fb.BZa];
                    this.metadata = {
                        category: 11,
                        description: OXc,
                        ld: [{
                            type: "ARRAY",
                            optional: !1
                        }, {
                            type: "ARRAY",
                            optional: !1
                        }, {
                            type: "CONDITION",
                            optional: !1
                        }, {
                            type: "ARRAY",
                            optional: !0
                        }, {
                            type: "CONDITION",
                            optional: !0
                        }],
                        jd: ['=AVERAGEIFS(C1:C15, A1:A15, ">=100", B1:B15, ">=50")', '=AVERAGEIFS(D1:D15, C1:C15, "Blue", B1:B15, ">=10")', '=AVERAGEIFS(E1:E10, A1:A10, ">=20", B1:B1, "<30")']
                    };
                    this.Tj = b => b <= 1 ? {
                        type: 3,
                        value: 7
                    } : b % 2 === 0 ? Eo(0) : {
                        type: 3,
                        value: 7
                    }
                }
            }
            ;
            eYc.functionName = "AVERAGEIFS";
            var fYc = class extends D_ {
                execute(a) {
                    var b = fWc(a);
                    if (!b.ok)
                        return b.error;
                    a = b.value.left;
                    b = b.value.right;
                    const c = aWc(this.Bd, a);
                    if (c.type === 3)
                        return c;
                    const d = aWc(this.Bd, b);
                    if (d.type === 3)
                        return d;
                    var e;
                    a: {
                        var f = Eo(0);
                        for (e = 0; e < a.length; e++) {
                            var g = b[e]
                              , h = gp(this.Bd, "-", a[e], c);
                            if (h.type === 3) {
                                e = h;
                                break a
                            }
                            g = gp(this.Bd, "-", g, d);
                            if (g.type === 3) {
                                e = g;
                                break a
                            }
                            h = gp(this.Bd, "*", h, g);
                            if (h.type === 3) {
                                e = h;
                                break a
                            }
                            f = ip(this.Bd, "+", f, h);
                            if (f.type === 3) {
                                e = f;
                                break a
                            }
                        }
                        e = f
                    }
                    if (e.type === 3)
                        return {
                            type: 3,
                            value: 3
                        };
                    a = gWc(this, a, b, c, d);
                    return a.type === 3 ? {
                        type: 3,
                        value: 3
                    } : ip(this.Bd, "/", e, a)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.qt, this.fb.qt];
                    this.metadata = {
                        category: 11,
                        description: PXc,
                        ld: [{
                            type: "ARRAY",
                            optional: !1
                        }, {
                            type: "ARRAY",
                            optional: !1
                        }],
                        jd: ["=CORREL(A2:A10, B2:B10)", "=CORREL({1,2,3}, {4,5,6})", "=CORREL(C10:C50, A10:A50)"]
                    }
                }
            }
            ;
            fYc.functionName = "CORREL";
            var gYc = class extends D_ {
                execute(a) {
                    a = p_(a, () => Eo(0));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = [a.value[0], ...a.value[1]];
                    a = A_(a, (b, c) => c.type === 3 || this.Lf.Ig(c, 0).type !== 0 ? ya(b) : ya(b + 1), 0, {
                        DG: jWc
                    });
                    Yn(a.ok);
                    return jp(a.value)
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.n5;
                    this.metadata = {
                        category: 11,
                        description: QXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=COUNT(A1:A10)", '=COUNT(1, 2, "text", 3)', "=COUNT(A1, B1, C1)"]
                    }
                }
            }
            ;
            gYc.functionName = "COUNT";
            var hYc = class extends D_ {
                execute(a) {
                    a = p_(a, () => Eo(0));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = [a.value[0], ...a.value[1]];
                    a = A_(a, (b, c) => ya(b + (c.type === 15 ? 0 : 1)), 0);
                    Yn(a.ok);
                    return jp(a.value)
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.n5;
                    this.metadata = {
                        category: 11,
                        description: RXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=COUNTA(A1:A10)", '=COUNTA(1, 2, "text", 3)', "=COUNTA(A1, B1, C1)"]
                    }
                }
            }
            ;
            hYc.functionName = "COUNTA";
            var iYc = class extends D_ {
                execute(a) {
                    a = p_(a, () => Mo());
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = [a.value[0], ...a.value[1]];
                    a = A_(a, (b, c) => ya(b + (c.type === 15 || c.type === 2 && c.value === "" ? 1 : 0)), 0);
                    Yn(a.ok);
                    return jp(a.value)
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.n5;
                    this.metadata = {
                        category: 11,
                        description: SXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=COUNTBLANK(A1:A10)", "=COUNTBLANK(B1:B5)"]
                    }
                }
            }
            ;
            iYc.functionName = "COUNTBLANK";
            var jYc = class extends E_ {
                je(a) {
                    return a === 0
                }
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                gg(a) {
                    const [b,c] = a;
                    return JVc(this.cJ, [[b, c]], this.ki.QH)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.qt, this.fb.Bt];
                    this.metadata = {
                        category: 11,
                        description: TXc,
                        ld: [{
                            type: "ARRAY",
                            optional: !1
                        }, {
                            type: "CONDITION",
                            optional: !1
                        }],
                        jd: ['=COUNTIF(A1:A10, ">5")', '=COUNTIF(B1:B10, "Apple")', '=COUNTIF(C1:C10, "<=10")']
                    };
                    this.Tj = b => b === 1 ? Eo(0) : {
                        type: 3,
                        value: 7
                    }
                }
            }
            ;
            jYc.functionName = "COUNTIF";
            var kYc = class extends E_ {
                je(a) {
                    return a % 2 === 0
                }
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                gg(a) {
                    a = [[a[0], a[1]], ...a[2]];
                    return JVc(this.cJ, a, this.ki.QH)
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.qt, this.fb.Bt, this.fb.BZa];
                    this.metadata = {
                        category: 11,
                        description: UXc,
                        ld: [{
                            type: "ARRAY",
                            optional: !1
                        }, {
                            type: "CONDITION",
                            optional: !1
                        }, {
                            type: "ARRAY",
                            optional: !0
                        }, {
                            type: "CONDITION",
                            optional: !0
                        }],
                        jd: ['=COUNTIFS(A1:A10, ">5", B1:B10, "<10")', '=COUNTIFS(A1:A5, "A", B1:B5, "B")', '=COUNTIFS(A1:A10, ">=20", B1:B10, "<=30")']
                    };
                    this.Tj = b => b % 2 === 0 ? {
                        type: 3,
                        value: 7
                    } : Eo(0)
                }
            }
            ;
            kYc.functionName = "COUNTIFS";
            var lYc = class extends D_ {
                execute(a) {
                    a = p_(a, () => Mo());
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = [a.value[0], ...a.value[1]];
                    const b = new Set;
                    a = A_(a, (c, d) => {
                        if (d.type === 15 || d.type === 2 && d.value === "" || b.has(d.value))
                            return ya(c);
                        b.add(d.value);
                        return ya(c + 1)
                    }
                    , 0, {
                        DG: c => c.type !== 15
                    });
                    Yn(a.ok);
                    return jp(a.value)
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.n5;
                    this.metadata = {
                        category: 11,
                        description: VXc,
                        ld: [{
                            type: "ARRAY",
                            optional: !1
                        }],
                        jd: ["=COUNTUNIQUE(A1:A10)", '=COUNTUNIQUE(B1:B5, "Apple", "Banana")', "=COUNTUNIQUE(C1, C2, C3, C4)"]
                    }
                }
            }
            ;
            lYc.functionName = "COUNTUNIQUE";
            var mYc = class extends D_ {
                execute(a) {
                    a = p_(a, () => Eo(0));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = a.value;
                    a = [a[0], ...a[1]];
                    return this.process("<", a)
                }
                process(a, b) {
                    b = A_(b, (c, d) => {
                        if (d.type === 3)
                            return Aa(d);
                        d = this.Lf.Ig(d, 0);
                        if (d.type === 3)
                            return Aa(d);
                        if (c == null)
                            return ya(d);
                        const e = hp(this.Bd, a, c, d);
                        return ya(e.value ? c : d)
                    }
                    , void 0, {
                        DG: s_
                    });
                    return b.ok ? b.value == null ? Eo(0) : b.value : b.error
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.cS;
                    this.metadata = {
                        category: 11,
                        description: YXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=MIN(A1:A10)", "=MIN(1, 2, 3)", "=MIN(A1, 5, 10)"]
                    }
                }
            }
            ;
            mYc.functionName = "MIN";
            var nYc = class extends mYc {
                execute(a) {
                    a = p_(a, () => Eo(0));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = a.value;
                    a = [a[0], ...a[1]];
                    return this.process(">", a)
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.cS;
                    this.metadata = {
                        category: 11,
                        description: WXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=MAX(A1:A10)", "=MAX(1, 2, 3)", "=MAX(A1, 5, 10)"]
                    }
                }
            }
            ;
            nYc.functionName = "MAX";
            var oYc = class extends D_ {
                execute(a) {
                    a = p_(a, () => Eo(0));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = a.value;
                    a = [a[0], ...a[1]].map(c => {
                        switch (c.type) {
                        case 2:
                        case 1:
                            return this.Lf.Ig(c, 0);
                        case 3:
                        case 0:
                        case 15:
                        case 16:
                        case 4:
                            return c;
                        default:
                            throw new z(c);
                        }
                    }
                    );
                    a = A_(a, (c, d) => {
                        switch (d.type) {
                        case 3:
                            return Aa(d);
                        case 0:
                            c.push(d.value);
                            break;
                        case 2:
                        case 1:
                        case 15:
                        case 16:
                            break;
                        default:
                            throw new z(d);
                        }
                        return ya(c)
                    }
                    , [], {
                        DG: s_
                    });
                    if (!a.ok)
                        return a.error;
                    if (a.value.length === 0)
                        return {
                            type: 3,
                            value: 6
                        };
                    a = a.value.sort( (c, d) => c - d);
                    const b = Math.floor(a.length / 2);
                    return Eo(Fo(a.length % 2 === 0 ? (a[b - 1] + a[b]) / 2 : a[b]))
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.cS;
                    this.metadata = {
                        category: 11,
                        description: XXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=MEDIAN(A1:A10)", "=MEDIAN(1, 2, 3, 4, 5)", "=MEDIAN(A1, 5, 10)"]
                    }
                }
            }
            ;
            oYc.functionName = "MEDIAN";
            var pYc = class extends D_ {
                execute(a) {
                    a = p_(a, () => ({
                        type: 3,
                        value: 3
                    }));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = a.value;
                    a = [a[0], ...a[1]];
                    const b = hWc(a);
                    if (b != null)
                        return b;
                    a = A_(a, (c, d) => {
                        switch (d.type) {
                        case 15:
                            return Aa({
                                type: 3,
                                value: 3
                            });
                        case 3:
                            return Aa(d);
                        case 0:
                            c.push(d.value);
                            break;
                        case 2:
                        case 1:
                        case 16:
                            break;
                        default:
                            throw new z(d);
                        }
                        return ya(c)
                    }
                    , [], {
                        DG: s_
                    });
                    if (!a.ok)
                        return a.error;
                    a = iWc(a.value);
                    return a == null ? {
                        type: 3,
                        value: 7
                    } : Eo(Fo(a))
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.n5;
                    this.metadata = {
                        category: 11,
                        description: ZXc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUES",
                            optional: !0
                        }],
                        jd: ["=MODE(A1:A10)", "=MODE(1, 1, 4, 6, 2, 4, 4)"]
                    }
                }
            }
            ;
            pYc.functionName = "MODE";
            var qYc = class extends E_ {
                ng(a) {
                    return a.some( (b, c) => !this.je(c) && z_(b))
                }
                je(a) {
                    return a === 0
                }
                gg(a) {
                    const [b,c] = a;
                    if (c.type === 3)
                        return c;
                    a = this.Lf.Ig(c, 0);
                    if (a.type === 3)
                        return a;
                    if (a.type === 2)
                        return {
                            type: 3,
                            value: 3
                        };
                    var d = [b].map(g => {
                        switch (g.type) {
                        case 2:
                            return g = this.Lf.Ig(g, 0),
                            g.type === 3 ? {
                                type: 3,
                                value: 6
                            } : g;
                        case 1:
                            return this.Lf.Ig(g, 0);
                        case 3:
                        case 0:
                        case 15:
                        case 16:
                        case 4:
                            return g;
                        default:
                            throw new z(g);
                        }
                    }
                    );
                    d = A_(d, (g, h) => {
                        switch (h.type) {
                        case 3:
                            return Aa(h);
                        case 0:
                            g.push(h.value);
                            break;
                        case 2:
                        case 1:
                        case 15:
                        case 16:
                            break;
                        default:
                            throw new z(h);
                        }
                        return ya(g)
                    }
                    , [], {
                        DG: s_
                    });
                    if (!d.ok)
                        return d.error;
                    if (d.value.length === 0)
                        return {
                            type: 3,
                            value: 6
                        };
                    var e = a.value;
                    if (e < 0 || e > 1)
                        return {
                            type: 3,
                            value: 6
                        };
                    a = d.value.sort( (g, h) => g - h);
                    d = (a.length - 1) * e;
                    e = Math.floor(d);
                    const f = Math.ceil(d);
                    return Eo(Fo(e === f ? a[e] : a[e] + (d - e) * (a[f] - a[e])))
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.gJa, this.fb.Bt];
                    this.metadata = {
                        category: 11,
                        description: $Xc,
                        ld: [{
                            type: "VALUES",
                            optional: !1
                        }, {
                            type: "VALUE",
                            optional: !1
                        }],
                        jd: ["=PERCENTILE(A1:A10, 0.5)", "=PERCENTILE(A1:A5, 0.25)", "=PERCENTILE(B1:B10, 0.75)"]
                    };
                    this.Tj = () => Eo(0)
                }
            }
            ;
            qYc.functionName = "PERCENTILE";
            var rYc = class extends D_ {
                execute(a) {
                    a = p_(a, () => Eo(0));
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = a.value;
                    var b = [a[0], ...a[1]];
                    a = $Vc(this.Bd, b);
                    if (!a.ok)
                        return a.error;
                    var c = a.value.sum;
                    a = a.value.count;
                    const d = jp(a);
                    if (d.type === 3)
                        return d;
                    const e = gp(this.Bd, "/", c, d);
                    b = A_(b, (f, g) => {
                        g = gp(this.Bd, "-", g, e);
                        if (g.type === 3)
                            return Aa(g);
                        g = gp(this.Bd, "*", g, g);
                        if (g.type === 3)
                            return Aa(g);
                        f = gp(this.Bd, "+", f, g);
                        return f.type === 3 ? Aa(f) : ya(f)
                    }
                    , Eo(0), {
                        DG: s_
                    });
                    if (!b.ok)
                        return b.error;
                    c = d;
                    a >= 1 && (a = ip(this.Bd, "-", d, Eo(1)),
                    n_(a),
                    c = a);
                    return ip(this.Bd, "/", b.value, c)
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.cS;
                    this.metadata = {
                        category: 11,
                        description: bYc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUE",
                            optional: !0
                        }],
                        jd: ["=VAR(A2:A10)", "=VAR(1, 2, 3)", "=VAR(A1, 5, 10)"]
                    }
                }
            }
            ;
            rYc.functionName = "VAR";
            var sYc = class extends rYc {
                execute(a) {
                    a = super.execute(a);
                    return a.type === 3 ? a : ip(this.Bd, "^", a, Eo(Fo(.5)))
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.cS;
                    this.metadata = {
                        category: 11,
                        description: aYc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUE",
                            optional: !0
                        }],
                        jd: ["=STDEV(A2:A10)", "=STDEV(1, 2, 3)", "=STDEV(A1, 5, 10)"]
                    }
                }
            }
            ;
            sYc.functionName = "STDEV";
            var tYc = () => L("KyOXKw")
              , uYc = () => L("enjsIQ")
              , vYc = () => L("iBKmhA")
              , wYc = () => L("1gyKsg")
              , xYc = () => L("MqIlFw")
              , yYc = () => L("lJfBtg")
              , zYc = () => L("qU+9oQ");
            var AYc = class extends D_ {
                execute(a) {
                    a = p_(a, () => Mo());
                    a = o_(this.Vo, a, this.args);
                    if (!a.success)
                        return a.value;
                    a = [a.value[0], ...a.value[1]];
                    for (var b of a)
                        if (b.type === 3)
                            return b;
                    b = A_(a, (c, d) => {
                        c = gp(this.Bd, "&", c, d);
                        return c.type !== 3 ? ya(c) : Aa(c)
                    }
                    , __c.Go(""));
                    return b.ok ? b.value : b.error
                }
                constructor(...a) {
                    super(...a);
                    this.args = this.fb.n5;
                    this.metadata = {
                        category: 12,
                        description: tYc,
                        ld: [{
                            type: "TEXT",
                            optional: !1
                        }, {
                            type: "TEXTS",
                            optional: !0
                        }],
                        jd: ['=CONCAT(A1, " ", B1)', '=CONCAT("Hello", " ", "World")', "=CONCAT(A1, B1, C1)"]
                    }
                }
            }
            ;
            AYc.functionName = "CONCAT";
            var BYc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    const [b,c] = a;
                    a = this.slice(b.value, c?.value ?? 1);
                    return __c.Go(a)
                }
                slice(a, b) {
                    return __c.js(a).slice(0, b).join("")
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.zsa, this.fb.b$b];
                    this.metadata = {
                        category: 12,
                        description: wYc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUE",
                            optional: !0
                        }],
                        jd: ['=LEFT("hello world", 5)', "=LEFT(A1, 3)", '=LEFT("hello")', '=LEFT("test", 10)']
                    };
                    this.Tj = () => Mo()
                }
            }
            ;
            BYc.functionName = "LEFT";
            var CYc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    a = __c.js(a[0].value).length;
                    return Eo(Fo(a))
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.zsa];
                    this.metadata = {
                        category: 12,
                        description: uYc,
                        ld: [{
                            type: "TEXT",
                            optional: !1
                        }],
                        jd: ['=LEN("hello world")', "=LEN(A1)", "=LEN(1.2345)"]
                    }
                }
            }
            ;
            CYc.functionName = "LEN";
            var DYc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    return __c.Go(a[0].value.toLowerCase())
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.zsa];
                    this.metadata = {
                        category: 12,
                        description: vYc,
                        ld: [{
                            type: "TEXT",
                            optional: !1
                        }],
                        jd: ["=LOWER(A1)"]
                    };
                    this.Tj = () => Mo()
                }
            }
            ;
            DYc.functionName = "LOWER";
            var EYc = class extends BYc {
                slice(a, b) {
                    return b === 0 ? "" : __c.js(a).slice(-b).join("")
                }
                constructor(...a) {
                    super(...a);
                    this.metadata = {
                        category: 12,
                        description: xYc,
                        ld: [{
                            type: "VALUE",
                            optional: !1
                        }, {
                            type: "VALUE",
                            optional: !0
                        }],
                        jd: ['=RIGHT("hello world", 5)', "=RIGHT(A1, 3)", '=RIGHT("hello")']
                    }
                }
            }
            ;
            EYc.functionName = "RIGHT";
            var FYc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    return __c.Go(a[0].value.toUpperCase())
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.zsa];
                    this.metadata = {
                        category: 12,
                        description: zYc,
                        ld: [{
                            type: "TEXT",
                            optional: !1
                        }],
                        jd: ["=UPPER(A1)"]
                    };
                    this.Tj = () => Mo()
                }
            }
            ;
            FYc.functionName = "UPPER";
            var GYc = class extends E_ {
                je() {
                    return !1
                }
                ng(a) {
                    return a.some(z_)
                }
                gg(a) {
                    if (a[0].type === 15)
                        return Eo(0);
                    a = this.Lf.Ig(a[0], 2);
                    if (a.type === 3)
                        return a;
                    a = this.Lf.Ig(a, 0);
                    a.type === 0 && (a.Ka = void 0);
                    return a
                }
                constructor(...a) {
                    super(...a);
                    this.args = [this.fb.xN];
                    this.metadata = {
                        category: 12,
                        description: yYc,
                        ld: [{
                            type: "TEXT",
                            optional: !1
                        }],
                        jd: ['=VALUE("$1,234")', '=VALUE("5.05%")', '=VALUE("-10")']
                    }
                }
            }
            ;
            GYc.functionName = "VALUE";
            __c.kra = {
                JQa: Object.freeze(Object.fromEntries(Object.values({
                    Qnc: xXc,
                    Rnc: F_,
                    Unc: cYc,
                    Vnc: dYc,
                    Wnc: eYc,
                    joc: AYc,
                    loc: fYc,
                    moc: gYc,
                    noc: hYc,
                    ooc: iYc,
                    poc: jYc,
                    qoc: kYc,
                    roc: lYc,
                    Date: rWc,
                    Day: sWc,
                    voc: tWc,
                    Roc: yXc,
                    gpc: aXc,
                    $oc: BWc,
                    kpc: QWc,
                    lpc: RWc,
                    mpc: SWc,
                    npc: bXc,
                    opc: IWc,
                    ppc: JWc,
                    tpc: BYc,
                    upc: CYc,
                    xpc: zXc,
                    zpc: AXc,
                    Apc: BXc,
                    Cpc: DYc,
                    Jpc: cXc,
                    Kpc: nYc,
                    Npc: oYc,
                    Ppc: mYc,
                    Qpc: pYc,
                    Rpc: uWc,
                    Wpc: CWc,
                    Vpc: TWc,
                    Zpc: UWc,
                    bqc: qYc,
                    cqc: CXc,
                    dqc: DWc,
                    fqc: DXc,
                    gqc: EXc,
                    hqc: EWc,
                    tqc: FWc,
                    yqc: EYc,
                    zqc: G_,
                    Aqc: FXc,
                    Bqc: GXc,
                    Sqc: IXc,
                    Tqc: JXc,
                    Uqc: KXc,
                    Vqc: LXc,
                    Oqc: HXc,
                    Pqc: sYc,
                    drc: FYc,
                    erc: GYc,
                    frc: rYc,
                    irc: $Wc,
                    lrc: gXc,
                    mrc: vWc
                }).map(a => [a.functionName, a]))),
                HAc: __c.dp,
                QCc: a => __c.dp[a] != null,
                jDc: a => __c.Zec.has(a.toUpperCase())
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/5706e8172fa8db9c.js.map
