(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[20716], {

    /***/
    927797: function(_, __, __webpack_require__) {
        __webpack_require__.n_x = __webpack_require__.n;
        const __web_req__ = __webpack_require__;
        __web_req__(944221);
        __web_req__(148454);
        globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};
        (function(__c) {
            var uud = function(a, b) {
                return typeof a === "number" || typeof a === "string" && (a = parseFloat(a),
                Number.isFinite(a)) ? a : b
            }
              , vud = function(a, b, c=1) {
                b = Math.min(a.weight, b);
                if (b !== 0) {
                    a: {
                        var d = a.Wc;
                        if (d.length > 0) {
                            if (d[0] === 1) {
                                d = "dotted";
                                break a
                            }
                            if (d[0] > 1) {
                                d = "dashed";
                                break a
                            }
                        }
                        d = "solid"
                    }
                    return {
                        borderWidth: `${b * c}px`,
                        borderStyle: d,
                        borderColor: a.color ?? a.fill.color ?? a.fill.Ha.ref?.Vc[0]?.color ?? "transparent"
                    }
                }
            }
              , wud = function(a) {
                if (a.color)
                    return {
                        backgroundColor: a.color
                    };
                if (a.Ha.ref && a.Ha.ref.type === "linear")
                    return {
                        backgroundColor: a.Ha.ref?.Vc[0]?.color,
                        background: `linear-gradient(${a.Ha.ref.rotation}deg, ${a.Ha.ref?.Vc.map(b => `${b.color}`).join(",")})`
                    };
                if (a.Ha.ref && a.Ha.ref.type === "radial") {
                    const b = a.Ha.ref.center.left
                      , c = a.Ha.ref.center.top
                      , d = a.Ha.ref?.Vc.map(e => `${e.color}`).join(",");
                    return {
                        backgroundColor: a.Ha.ref?.Vc[0]?.color,
                        background: `radial-gradient(circle at ${`${Math.round(b * 100)}%`} ${`${Math.round(c * 100)}%`}, ${d})`
                    }
                }
                return {}
            }
              , zud = function({Ci: a}) {
                return xud( ({data: {C: b}, Ma: {M: c}, scale: d}) => {
                    const e = Math.max(Math.round(c.K * d), 1);
                    c = Math.max(Math.round(c.P * d), 1);
                    const f = b.border.ref ? vud(b.border.ref, e / 2, d) : void 0
                      , g = f ? uud(f.borderWidth, 0) : 0
                      , h = b.X ? b.X * d : 0
                      , {IV: k, Em: l} = __c.Emd({
                        text: b.label,
                        scale: d,
                        Ci: a
                    });
                    d = wud(b.background);
                    return V5(yud, {
                        href: b.link ?? "#",
                        width: e,
                        height: c,
                        Dra: g,
                        borderColor: f?.borderColor ? `${f.borderColor}` : void 0,
                        borderStyle: f?.borderStyle ? `${f.borderStyle}` : void 0,
                        u9a: h,
                        backgroundColor: d.backgroundColor,
                        background: d.background,
                        IV: k,
                        Em: l
                    })
                }
                )
            }
              , yud = function(a) {
                a: switch (a.Em.textAlign) {
                case "center":
                    var b = "center";
                    break a;
                case "right":
                case "end":
                    b = "right";
                    break a;
                default:
                    b = "left"
                }
                const c = uud(a.Em.fontSize, 16);
                var d = uud(a.Em.lineHeight, 1)
                  , e = c * d;
                d = __c.t5(e);
                a: switch (b) {
                case "left":
                    var f = {
                        left: 8,
                        right: 16
                    };
                    break a;
                case "right":
                    f = {
                        left: 16,
                        right: 8
                    };
                    break a;
                default:
                    f = {
                        left: 8,
                        right: 8
                    }
                }
                const g = Math.max(Math.round((a.height - e - 2 * a.Dra) / 2), 0);
                var h = a.Dra <= 0 || !a.borderColor ? "0px solid transparent" : `${Math.max(Math.round(a.Dra), 0)}px ${a.borderStyle ?? "solid"} ${a.borderColor}`;
                e = Aud({
                    ...a,
                    textAlign: b,
                    aXb: c,
                    $wa: f
                });
                const k = a.IV.split("\n").map(m => W5(m) || "&#160;").join("<br>");
                h = {
                    backgroundColor: a.backgroundColor,
                    background: a.background,
                    borderBottom: h,
                    borderLeft: h,
                    borderRadius: `${Math.max(Math.round(a.u9a), 0)}px`,
                    borderRight: h,
                    borderTop: h,
                    msoBorderAlt: "none"
                };
                const l = {
                    wordBreak: "break-word",
                    lineHeight: d,
                    color: a.Em.color,
                    msoStyleTextfillType: "solid",
                    msoStyleTextfillFillColor: a.Em.color
                };
                b = {
                    color: a.Em.color,
                    textDecoration: Bud(a.Em) ?? "none",
                    display: "block",
                    paddingTop: `${g}px`,
                    paddingBottom: `${g}px`,
                    paddingLeft: `${f.left}px`,
                    paddingRight: `${f.right}px`,
                    textAlign: b,
                    fontFamily: a.Em.fontFamily,
                    fontSize: __c.t5(c),
                    fontStyle: a.Em.fontStyle,
                    fontWeight: a.Em.fontWeight,
                    letterSpacing: a.Em.letterSpacing,
                    lineHeight: d,
                    boxSizing: "border-box",
                    msoLineHeightRule: "exactly"
                };
                return X5(Cud, {
                    children: [V5(Dud, {
                        children: V5(Eud, {
                            html: `${e}${k}${"</center></v:textbox></v:roundrect>"}`
                        })
                    }), V5(Fud, {
                        children: V5("table", {
                            role: "presentation",
                            cellPadding: 0,
                            cellSpacing: 0,
                            border: 0,
                            width: "100%",
                            style: {
                                width: "100%",
                                maxWidth: "100%",
                                borderCollapse: "separate",
                                borderSpacing: 0
                            },
                            children: V5("tbody", {
                                children: V5("tr", {
                                    children: V5("td", {
                                        ...(a.backgroundColor ? {
                                            bgcolor: a.backgroundColor
                                        } : {}),
                                        style: h,
                                        children: V5("a", {
                                            href: a.href,
                                            target: "_blank",
                                            rel: "noopener",
                                            ...Gud,
                                            style: b,
                                            children: V5(Hud, {
                                                IV: a.IV,
                                                style: l
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })]
                })
            }
              , Hud = function({IV: a, style: b}) {
                a = a.split("\n");
                return V5(Cud, {
                    children: a.map( (c, d) => X5(Iud, {
                        children: [d > 0 && V5("br", {}), V5("span", {
                            style: b,
                            children: c || "\u00a0"
                        })]
                    }, d))
                })
            }
              , Aud = function(a) {
                const b = a.backgroundColor ?? "transparent"
                  , c = a.borderColor ?? b;
                var d = a.$wa;
                d = a.textAlign === "right" ? Math.max(d.left - d.right, 0) : 0;
                var e = a.$wa;
                e = a.textAlign === "left" ? Math.max(e.right - e.left, 0) : 0;
                var f = a.Em.color;
                var g = (g = a.Em.fontFamily) ? `${g}`.includes(",") ? "sans-serif" : `${g}` : "sans-serif";
                f = Jud({
                    color: f,
                    "font-family": g,
                    "font-size": __c.t5(a.aXb),
                    "font-style": a.Em.fontStyle,
                    "font-weight": a.Em.fontWeight
                });
                return ['<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"', ` href="${W5(`${a.href ?? ""}`)}"`, ` style="height:${a.height}px;width:${a.width}px;v-text-anchor:middle;"`, ` arcsize="${`${Math.min(Math.max(Math.round(a.u9a / Math.max(Math.min(a.width, a.height), 1) * 100), 0), 100)}%`}"`, ` fillcolor="${W5(`${b ?? ""}`)}">`, `<v:stroke dashstyle="Solid" weight="${Math.max(Math.round(a.Dra), 0)}px" color="${W5(`${c ?? ""}`)}"/>`, "<w:anchorlock/>", `<v:textbox inset="${d}px,0px,${e}px,0px">`, `<center dir="${a.Em.direction === "rtl" ? "rtl" : "false"}" style="${f}">`].join("")
            }
              , Eud = function({html: a}) {
                return V5("template", {
                    "data-remove-tag-for-email": "true",
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })
            }
              , W5 = function(a) {
                return a.replace(Kud, b => Lud[b] ?? b)
            }
              , Jud = function(a) {
                return Object.entries(a).filter( ([,b]) => b != null && b !== "").map( ([b,c]) => `${b}:${W5(`${c ?? ""}`)}`).join(";")
            }
              , Bud = function(a) {
                return a.textDecoration === "none" ? void 0 : a.textDecoration
            }
              , Mud = __webpack_require__(296713)
              , Cud = Mud.Fragment
              , V5 = Mud.jsx
              , X5 = Mud.jsxs;
            __webpack_require__(1193);
            var xud = __webpack_require__(613814).PA;
            var Iud = __webpack_require__(978109).Fragment;
            var Dud = ({children: a, not: b}) => X5(Cud, {
                children: [V5("template", {
                    "data-remove-tag-for-email": "true",
                    dangerouslySetInnerHTML: {
                        __html: b ? "\x3c!--[if !mso]>\x3c!--\x3e" : "\x3c!--[if mso]>"
                    }
                }), a, V5("template", {
                    "data-remove-tag-for-email": "true",
                    dangerouslySetInnerHTML: {
                        __html: b ? "\x3c!--<![endif]--\x3e" : "<![endif]--\x3e"
                    }
                })]
            })
              , Fud = ({children: a}) => V5(Dud, {
                not: !0,
                children: a
            });
            var Gud = {
                "ses:no-track": ""
            }
              , Kud = /[&<>"']/g
              , Lud = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            };
            __c.Ald = {
                Sk: __c.ry()( ({ig: a}) => ({
                    ...__c.WU,
                    metadata: {
                        type: "button",
                        name: __c.L("xdElgQ")
                    },
                    C: __c.qy(xud( ({data: {C: b}, Ma: {M: c}, Jd: d}) => V5(d.NX, {
                        link: b.link,
                        HFa: !1,
                        children: X5("div", {
                            className: "_2Z_Fmg",
                            children: [V5("div", {
                                className: "_0mvZOQ",
                                style: {
                                    borderRadius: `${b.X}px`,
                                    border: b.border.ref ? `solid ${b.border.ref.weight}px  ${b.border.ref.color}` : void 0
                                },
                                children: V5(d.ih, {
                                    fill: b.background
                                })
                            }), V5("div", {
                                className: "ZcsBDg",
                                children: V5("div", {
                                    className: "vyKiIw",
                                    style: {
                                        transform: `translateY(min(calc(${c.P / 2}px - 50%), 0px))`
                                    },
                                    children: V5(d.wi, {
                                        text: b.label
                                    })
                                })
                            })]
                        })
                    }))),
                    email: {
                        type: 2,
                        Component: zud(a)
                    },
                    KJ: ["controlled"]
                }))
            };
        }
        ).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);
    }

}])
//# sourceMappingURL=sourcemaps/2019d2f1f2fd5005.js.map
