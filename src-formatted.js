"use strict";
(() => {
        var j = Object.defineProperty,
            z = Object.defineProperties;
        var Q = Object.getOwnPropertyDescriptors;
        var A = Object.getOwnPropertySymbols;
        var J = Object.prototype.hasOwnProperty,
            Z = Object.prototype.propertyIsEnumerable;
        var G = (o, s, t) => s in o ? j(o, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
            }) : o[s] = t,
            R = (o, s) => {
                for (var t in s || (s = {})) J.call(s, t) && G(o, t, s[t]);
                if (A)
                    for (var t of A(s)) Z.call(s, t) && G(o, t, s[t]);
                return o
            },
            N = (o, s) => z(o, Q(s));
        var I = (o, s, t) => new Promise((u, d) => {
            var E = i => {
                    try {
                        r(t.next(i))
                    } catch (m) {
                        d(m)
                    }
                },
                n = i => {
                    try {
                        r(t.throw(i))
                    } catch (m) {
                        d(m)
                    }
                },
                r = i => i.done ? u(i.value) : Promise.resolve(i.value).then(E, n);
            r((t = t.apply(o, s)).next())
        });
        var F = () => {
            let o = () => {
                let s = document.location.href,
                    t = document.querySelector("body"),
                    u = new MutationObserver(() => {
                        s !== document.location.href && (s = document.location.href, window.top && (window.top.postMessage({
                            type: "URL_CHANGED",
                            url: document.location.href
                        }, "https://lovable.dev"), window.top.postMessage({
                            type: "URL_CHANGED",
                            url: document.location.href
                        }, "http://localhost:3000")))
                    });
                t && u.observe(t, {
                    childList: !0,
                    subtree: !0
                })
            };
            window.addEventListener("load", o)
        };
        var T = o => {
            var s, t, u;
            (s = window.top) == null || s.postMessage(o, "https://lovable.dev"), (t = window.top) == null || t.postMessage(o, "https://gptengineer.app"), (u = window.top) == null || u.postMessage(o, "http://localhost:3000")
        };
        var V = o => {
                let s = window.fetch;
                window.fetch = function(...t) {
                    return I(this, null, function*() {
                        var u, d, E;
                        try {
                            let n = yield s(...t);
                            if (!n.ok) {
                                let r = n != null && n.text ? yield n.text(): void 0;
                                o("non_200_response", N(R({}, n), {
                                    status: n.status,
                                    url: (t == null ? void 0 : t[0]) || n.url,
                                    body: r,
                                    method: ((u = t == null ? void 0 : t[1]) == null ? void 0 : u.method) || "GET",
                                    origin: window.location.origin
                                }))
                            }
                            return n
                        } catch (n) {
                            if (n instanceof TypeError) o("fetch_error", {
                                message: n == null ? void 0 : n.message,
                                stack: n == null ? void 0 : n.stack,
                                url: t == null ? void 0 : t[0],
                                method: ((d = t == null ? void 0 : t[1]) == null ? void 0 : d.method) || "GET",
                                origin: window.location.origin
                            });
                            else {
                                let r = {
                                    url: t == null ? void 0 : t[0],
                                    method: ((E = t == null ? void 0 : t[1]) == null ? void 0 : E.method) || "GET",
                                    origin: window.location.origin,
                                    message: "Unknown fetch error",
                                    stack: "Not available"
                                };
                                typeof n == "object" && n !== null && "message" in n && typeof n.message == "string" && (r.message = n.message), typeof n == "object" && n !== null && "stack" in n && typeof n.stack == "string" && (r.stack = n.stack), o("fetch_error", r)
                            }
                            throw n
                        }
                    })
                }
            },
            x = (() => {
                let o = !1,
                    s = ({
                        message: t,
                        lineno: u,
                        colno: d,
                        filename: E,
                        error: n
                    }) => ({
                        message: t,
                        lineno: u,
                        colno: d,
                        filename: E,
                        stack: n == null ? void 0 : n.stack
                    });
                return () => {
                    if (o) return;
                    let t = new Set,
                        u = r => {
                            let {
                                lineno: i,
                                colno: m,
                                filename: L,
                                message: h
                            } = r;
                            return `${h}|${L}|${i}|${m}`
                        };
                    V((r, i) => I(void 0, null, function*() {
                        r === "non_200_response" ? T({
                            type: "FETCH_ERROR",
                            error: {
                                message: `failed to call url ${i.url} with status ${i.status} and statusText ${i.statusText}`,
                                status: i.status,
                                statusText: i.statusText,
                                url: i.url,
                                body: i.body
                            }
                        }) : r === "fetch_error" && T({
                            type: "FETCH_ERROR",
                            error: i
                        })
                    }));
                    let E = r => t.has(r) ? !0 : (t.add(r), setTimeout(() => t.delete(r), 5e3), !1),
                        n = r => {
                            let i = u(r);
                            if (E(i)) return;
                            let m = s(r);
                            T({
                                type: "RUNTIME_ERROR",
                                error: m
                            })
                        };
                    window.addEventListener("error", n), window.addEventListener("unhandledrejection", r => {
                        var L, h, O, g, v;
                        if (!((L = r.reason) != null && L.stack)) return;
                        let i = ((h = r.reason) == null ? void 0 : h.stack) || ((O = r.reason) == null ? void 0 : O.message) || String(r.reason);
                        if (E(i)) return;
                        let m = {
                            message: ((g = r.reason) == null ? void 0 : g.message) || "Unhandled promise rejection",
                            stack: ((v = r.reason) == null ? void 0 : v.stack) || String(r.reason)
                        };
                        T({
                            type: "UNHANDLED_PROMISE_REJECTION",
                            error: m
                        })
                    }), o = !0
                }
            })();
        var tt = {
                log: console.log,
                warn: console.warn,
                error: console.error
            },
            et = {
                log: "info",
                warn: "warning",
                error: "error"
            },
            D = (() => {
                let o = !1;
                return () => {
                    if (o) return;
                    let s = t => {
                        console[t] = (...u) => {
                            tt[t].apply(console, u), T({
                                type: "CONSOLE_OUTPUT",
                                level: et[t],
                                message: u.map(d => typeof d == "object" ? JSON.stringify(d) : String(d)).join(", "),
                                logged_at: new Date().toISOString()
                            })
                        }
                    };
                    s("log"), s("warn"), s("error"), o = !0
                }
            })();
        var k = (() => {
                    let o = {
                        HIGHLIGHT_COLOR: "#4282C1",
                        HIGHLIGHT_BG: "#4285f41a",
                        ALLOWED_ORIGINS: ["https://gptengineer.app", "http://localhost:3000", "https://lovable.dev"],
                        DEBOUNCE_DELAY: 10,
                        Z_INDEX: 1e4,
                        TOOLTIP_OFFSET: 25,
                        MAX_TOOLTIP_WIDTH: 200,
                        SCROLL_DEBOUNCE: 420,
                        FULL_WIDTH_TOOLTIP_OFFSET: "12px",
                        HIGHLIGHT_STYLE: {
                            FULL_WIDTH: {
                                OFFSET: "-10px",
                                STYLE: "solid"
                            },
                            NORMAL: {
                                OFFSET: "0",
                                STYLE: "solid"
                            }
                        }
                    };
                    class s {
                        constructor() {
                            this.hoveredElement = null, this.isActive = !1, this.tooltip = null, this.scrollTimeout = null, this.mouseX = 0, this.mouseY = 0, this.styleElement = null
                        }
                        reset() {
                            this.hoveredElement = null, this.scrollTimeout = null
                        }
                    }
                    let t = new s,
                        u = (e, l) => {
                            let a;
                            return (...p) => {
                                clearTimeout(a), a = setTimeout(() => e(...p), l)
                            }
                        },
                        d = e => {
                            o.ALLOWED_ORIGINS.forEach(l => {
                                try {
                                    if (!window.parent) return;
                                    if (!e || typeof e != "object") {
                                        console.error("Invalid message format");
                                        return
                                    }
                                    window.parent.postMessage(e, l)
                                } catch (a) {
                                    console.error(`Failed to send message to ${l}:`, a)
                                }
                            })
                        },
                        E = () => {
                            t.tooltip = document.createElement("div"), t.tooltip.className = "gpt-selector-tooltip", t.tooltip.setAttribute("role", "tooltip"), document.body.appendChild(t.tooltip);
                            let e = document.createElement("style");
                            e.textContent = ` .gpt-selector-tooltip { position: fixed; z-index: ${o.Z_INDEX}; pointer-events: none; background-color: ${o.HIGHLIGHT_COLOR}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px; font-weight: bold; line-height: 1; white-space: nowrap; display: none; box-shadow: 0 2px 4px rgba(0,0,0,0.2); transition: opacity 0.2s ease-in-out; margin: 0; } `, document.head.appendChild(e)
                        },
                        n = e => {
                            if (!(!t.tooltip || !e)) try {
                                    let l = e.getBoundingClientRect(),
                                        a = e.tagName.toLowerCase(),
                                        p = Math.abs(l.width - window.innerWidth) {
                                            let a = Math.abs(e.getBoundingClientRect().width - window.innerWidth) {
                                                    e.style.outline = "", e.style.outlineOffset = "", e.style.backgroundColor = "", e.style.cursor = ""
                                                },
                                                m = e => {
                                                    let l = e.tagName.toLowerCase() === "svg",
                                                        a = e.closest("svg") !== null;
                                                    return !l && a
                                                },
                                                L = e => e.hasAttribute("data-component-path") && e.hasAttribute("data-component-file") && e.hasAttribute("data-component-line"),
                                                h = u(e => {
                                                    if (!t.isActive || !L(e.target) || e.target.tagName.toLowerCase() === "html" || m(e.target)) return;
                                                    if (t.hoveredElement) {
                                                        let p = `[data-component-path="${t.hoveredElement.getAttribute("data-component-path")}"][data-component-file="${t.hoveredElement.getAttribute("data-component-file")}"][data-component-line="${t.hoveredElement.getAttribute("data-component-line")}"]`;
                                                        document.querySelectorAll(p).forEach(c => {
                                                            c.classList.contains("gpt-selected-element") || i(c)
                                                        })
                                                    }
                                                    t.hoveredElement = e.target;
                                                    let l = `[data-component-path="${e.target.getAttribute("data-component-path")}"][data-component-file="${e.target.getAttribute("data-component-file")}"][data-component-line="${e.target.getAttribute("data-component-line")}"]`;
                                                    document.querySelectorAll(l).forEach(p => {
                                                        p.classList.contains("gpt-selected-element") || r(p)
                                                    }), n(t.hoveredElement), t.tooltip.style.display = "block", t.tooltip.style.opacity = "1"
                                                }, o.DEBOUNCE_DELAY),
                                                O = e => {
                                                    let l = e.getAttribute("data-component-path") || null,
                                                        a = e.getAttribute("data-component-file") || null,
                                                        p = e.tagName.toLowerCase(),
                                                        _ = parseInt(e.getAttribute("data-component-line") || "0", 10),
                                                        c = e.getAttribute("data-component-content") || null;
                                                    return {
                                                        filePath: l,
                                                        fileName: a,
                                                        elementType: p,
                                                        lineNumber: _,
                                                        content: c
                                                    }
                                                },
                                                g = e => {
                                                    if (t.isActive && !(!L(e.target) || e.target.tagName.toLowerCase() === "html" || m(e.target)) && (e.preventDefault(), e.stopPropagation(), t.hoveredElement)) {
                                                        let l = O(t.hoveredElement);
                                                        t.hoveredElement.classList.add("gpt-selected-element");
                                                        let a = Math.abs(t.hoveredElement.getBoundingClientRect().width - window.innerWidth) {
                                                                if (t.isActive) {
                                                                    if (t.hoveredElement) {
                                                                        let e = `[data-component-path="${t.hoveredElement.getAttribute("data-component-path")}"][data-component-file="${t.hoveredElement.getAttribute("data-component-file")}"][data-component-line="${t.hoveredElement.getAttribute("data-component-line")}"]`;
                                                                        document.querySelectorAll(e).forEach(a => {
                                                                            a.classList.contains("gpt-selected-element") || i(a)
                                                                        }), t.hoveredElement = null
                                                                    }
                                                                    S()
                                                                }
                                                            },
                                                            o.DEBOUNCE_DELAY), S = () => {
                                                            t.tooltip.style.opacity = "0", t.tooltip.style.display = "none"
                                                        }, C = () => {
                                                            t.scrollTimeout && clearTimeout(t.scrollTimeout), S(), t.hoveredElement && !t.hoveredElement.classList.contains("gpt-selected-element") && i(t.hoveredElement), t.scrollTimeout = setTimeout(() => {
                                                                t.scrollTimeout = null;
                                                                let e = document.elementFromPoint(t.mouseX, t.mouseY);
                                                                e && t.isActive && h({
                                                                    target: e
                                                                })
                                                            }, o.SCROLL_DEBOUNCE)
                                                        }, b = e => {
                                                            t.isActive && (e.target.tagName.toLowerCase() === "input" || e.target.tagName.toLowerCase() === "textarea" || e.target.tagName.toLowerCase() === "select") && e.preventDefault()
                                                        }, f = e => {
                                                            if (t.isActive) return e.preventDefault(), e.stopPropagation(), !1
                                                        }, U = () => {
                                                            document.addEventListener("mouseover", h), document.addEventListener("mouseout", v), document.addEventListener("click", g, !0), window.addEventListener("scroll", C, {
                                                                passive: !0
                                                            }), document.addEventListener("mousedown", b, !0);
                                                            let e = document.createElement("style");
                                                            e.textContent = ` * { transition: none !important; animation: none !important; translate: none !important; scroll-behavior: auto !important; cursor: crosshair !important; } `, document.head.appendChild(e), t.styleElement = e, document.addEventListener("click", f, !0), document.addEventListener("submit", f, !0), document.addEventListener("touchstart", f, !0), document.addEventListener("touchend", f, !0)
                                                        }, H = () => {
                                                            document.removeEventListener("mouseover", h), document.removeEventListener("mouseout", v), document.removeEventListener("click", g), window.removeEventListener("scroll", C), document.removeEventListener("mousedown", b, !0), document.removeEventListener("click", f, !0), document.removeEventListener("submit", f, !0), document.removeEventListener("touchstart", f, !0), document.removeEventListener("touchend", f, !0), t.styleElement && (t.styleElement.remove(), t.styleElement = null), document.body.style.cursor = "", document.body.style.userSelect = "", document.body.style.msUserSelect = "", document.body.style.mozUserSelect = "", t.hoveredElement && (t.hoveredElement.classList.contains("gpt-selected-element") || i(t.hoveredElement), t.hoveredElement = null), S()
                                                        }, $ = e => {
                                                            if (e.key === "Escape" && t.isActive) {
                                                                e.preventDefault(), e.stopPropagation(), d({
                                                                    type: "TOGGLE_PICK_AND_EDIT_REQUESTED",
                                                                    payload: !1
                                                                });
                                                                return
                                                            }(e.altKey && e.key.toLowerCase() === "s" || e.key === "\xDF") && (e.preventDefault(), e.stopPropagation(), d({
                                                                type: "TOGGLE_PICK_AND_EDIT_REQUESTED",
                                                                payload: null
                                                            }))
                                                        }, P = (e, l) => document.elementFromPoint(e, l), W = e => {
                                                            var l;
                                                            try {
                                                                if (!(e != null && e.origin) || !((l = e == null ? void 0 : e.data) != null && l.type) || !o.ALLOWED_ORIGINS.includes(e.origin)) return;
                                                                switch (e.data.type) {
                                                                    case "TOGGLE_SELECTOR":
                                                                        let a = !!e.data.payload;
                                                                        if (t.isActive !== a)
                                                                            if (t.isActive = a, t.isActive) {
                                                                                let c = P(t.mouseX, t.mouseY);
                                                                                c && h({
                                                                                    target: c
                                                                                }), U()
                                                                            } else H(), document.querySelectorAll('[style*="outline"], [style*="background-color"]').forEach(w => {
                                                                                w.classList.contains("gpt-selected-element") || (i(w), w.style.cursor = "")
                                                                            }), t.reset();
                                                                        break;
                                                                    case "UPDATE_SELECTED_ELEMENTS":
                                                                        if (!Array.isArray(e.data.payload)) {
                                                                            console.error("Invalid payload for UPDATE_SELECTED_ELEMENTS");
                                                                            return
                                                                        }
                                                                        let p = e.data.payload;
                                                                        document.querySelectorAll(".gpt-selected-element").forEach(c => {
                                                                            c.classList.remove("gpt-selected-element"), c !== t.hoveredElement && i(c)
                                                                        }), p.forEach(c => {
                                                                            if (!(c != null && c.filePath) || !(c != null && c.fileName) || !(c != null && c.lineNumber)) {
                                                                                console.error("Invalid element data:", c);
                                                                                return
                                                                            }
                                                                            let {
                                                                                filePath: w,
                                                                                fileName: K,
                                                                                lineNumber: q
                                                                            } = c, X = `[data-component-path="${w}"][data-component-file="${K}"][data-component-line="${q}"]`;
                                                                            document.querySelectorAll(X).forEach(y => {
                                                                                y.classList.add("gpt-selected-element"), Math.abs(y.getBoundingClientRect().width - window.innerWidth) {
                                                                                    t.mouseX = e.clientX, t.mouseY = e.clientY
                                                                                }, B = () => {
                                                                                    d({
                                                                                        type: "REQUEST_PICKER_STATE"
                                                                                    }), d({
                                                                                        type: "REQUEST_SELECTED_ELEMENTS"
                                                                                    })
                                                                                };
                                                                                (() => {
                                                                                    try {
                                                                                        E(), window.addEventListener("message", W), document.addEventListener("keydown", $), document.addEventListener("mousemove", Y), d({
                                                                                            type: "SELECTOR_SCRIPT_LOADED"
                                                                                        }), B()
                                                                                    } catch (e) {
                                                                                        console.error("Failed to initialize selector script:", e)
                                                                                    }
                                                                                })()
                                                                            })();
                                                                            var M = () => {
                                                                                let o = document.createElement("script");
                                                                                o.textContent = ` ${k} `, document.head.appendChild(o)
                                                                            };
                                                                            var ot = () => {
                                                                                window.top !== window.self && (F(), x(), D(), M())
                                                                            };
                                                                            ot();
                                                                        })();