    (() => {
        var t = {
                "_kit_function1_": () => {
                    ! function() {
                        "use strict";
                        ! function() {
                            if (void 0 === window.Reflect || void 0 === window.customElements || window.customElements.polyfillWrapFlushCallback) return;
                            const t = HTMLElement;
                            window.HTMLElement = {
                                HTMLElement: function() {
                                    return Reflect.construct(t, [], this.constructor)
                                }
                            }.HTMLElement, HTMLElement.prototype = t.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, t)
                        }()
                    }()
                },
                "_kit_function2_": function(t, e, n) {
                    (function() {
                        "use strict";
                        var t;

                        function e(t) {
                            var e = 0;
                            return function() {
                                return e < t.length ? {
                                    done: !1,
                                    value: t[e++]
                                } : {
                                    done: !0
                                }
                            }
                        }
                        var i = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
                            return t == Array.prototype || t == Object.prototype || (t[e] = n.value), t
                        };
                        var r, o = function(t) {
                            t = ["object" == typeof globalThis && globalThis, t, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof n.g && n.g];
                            for (var e = 0; e < t.length; ++e) {
                                var i = t[e];
                                if (i && i.Math == Math) return i
                            }
                            throw Error("Cannot find global object")
                        }(this);

                        function a(t, e) {
                            if (e) t: {
                                var n = o;t = t.split(".");
                                for (var r = 0; r < t.length - 1; r++) {
                                    var a = t[r];
                                    if (!(a in n)) break t;
                                    n = n[a]
                                }(e = e(r = n[t = t[t.length - 1]])) != r && null != e && i(n, t, {
                                    configurable: !0,
                                    writable: !0,
                                    value: e
                                })
                            }
                        }

                        function s(t) {
                            return (t = {
                                next: t
                            })[Symbol.iterator] = function() {
                                return this
                            }, t
                        }

                        function l(t) {
                            var n = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
                            return n ? n.call(t) : {
                                next: e(t)
                            }
                        }

                        function u(t) {
                            if (!(t instanceof Array)) {
                                t = l(t);
                                for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
                                t = n
                            }
                            return t
                        }
                        if (a("Symbol", (function(t) {
                                function e(t, e) {
                                    this.g = t, i(this, "description", {
                                        configurable: !0,
                                        writable: !0,
                                        value: e
                                    })
                                }
                                if (t) return t;
                                e.prototype.toString = function() {
                                    return this.g
                                };
                                var n = 0;
                                return function t(i) {
                                    if (this instanceof t) throw new TypeError("Symbol is not a constructor");
                                    return new e("jscomp_symbol_" + (i || "") + "_" + n++, i)
                                }
                            })), a("Symbol.iterator", (function(t) {
                                if (t) return t;
                                t = Symbol("Symbol.iterator");
                                for (var n = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), r = 0; r < n.length; r++) {
                                    var a = o[n[r]];
                                    "function" == typeof a && "function" != typeof a.prototype[t] && i(a.prototype, t, {
                                        configurable: !0,
                                        writable: !0,
                                        value: function() {
                                            return s(e(this))
                                        }
                                    })
                                }
                                return t
                            })), "function" == typeof Object.setPrototypeOf) r = Object.setPrototypeOf;
                        else {
                            var c;
                            t: {
                                var d = {};
                                try {
                                    d.__proto__ = {
                                        a: !0
                                    }, c = d.a;
                                    break t
                                } catch (L) {
                                    console.error("CATCH 1", L);                                }
                                c = !1
                            }
                            r = c ? function(t, e) {
                                if (t.__proto__ = e, t.__proto__ !== e) throw new TypeError(t + " is not extensible");
                                return t
                            } : null
                        }
                        var h = r;

                        function f() {
                            this.u = !1, this.h = null, this.Ka = void 0, this.g = 1, this.da = 0, this.i = null
                        }

                        function p(t) {
                            if (t.u) throw new TypeError("Generator is already running");
                            t.u = !0
                        }

                        function m(t, e) {
                            t.i = {
                                Wa: e,
                                $a: !0
                            }, t.g = t.da
                        }

                        function v(t, e) {
                            return t.g = 3, {
                                value: e
                            }
                        }

                        function y(t) {
                            this.g = new f, this.h = t
                        }

                        function g(t, e, n, i) {
                            try {
                                var r = e.call(t.g.h, n);
                                if (!(r instanceof Object)) throw new TypeError("Iterator result " + r + " is not an object");
                                if (!r.done) return t.g.u = !1, r;
                                var o = r.value
                            } catch (e) {
                                console.error("CATCH 2", e);                                return t.g.h = null, m(t.g, e), _(t)
                            }
                            return t.g.h = null, i.call(t.g, o), _(t)
                        }

                        function _(t) {
                            for (; t.g.g;) try {
                                var e = t.h(t.g);
                                if (e) return t.g.u = !1, {
                                    value: e.value,
                                    done: !1
                                }
                            } catch (e) {
                                console.error("CATCH 3", e);                                t.g.Ka = void 0, m(t.g, e)
                            }
                            if (t.g.u = !1, t.g.i) {
                                if (e = t.g.i, t.g.i = null, e.$a) throw e.Wa;
                                return {
                                    value: e.return,
                                    done: !0
                                }
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        }

                        function b(t) {
                            this.next = function(e) {
                                return p(t.g), t.g.h ? e = g(t, t.g.h.next, e, t.g.O) : (t.g.O(e), e = _(t)), e
                            }, this.throw = function(e) {
                                return p(t.g), t.g.h ? e = g(t, t.g.h.throw, e, t.g.O) : (m(t.g, e), e = _(t)), e
                            }, this.return = function(e) {
                                return function(t, e) {
                                    p(t.g);
                                    var n = t.g.h;
                                    return n ? g(t, "return" in n ? n.return : function(t) {
                                        return {
                                            value: t,
                                            done: !0
                                        }
                                    }, e, t.g.return) : (t.g.return(e), _(t))
                                }(t, e)
                            }, this[Symbol.iterator] = function() {
                                return this
                            }
                        }

                        function E(t, e) {
                            return e = new b(new y(e)), h && t.prototype && h(e, t.prototype), e
                        }
                        f.prototype.O = function(t) {
                            this.Ka = t
                        }, f.prototype.return = function(t) {
                            this.i = {
                                return: t
                            }, this.g = this.da
                        }, Array.from || (Array.from = function(t) {
                            return [].slice.call(t)
                        }), Object.assign || (Object.assign = function(t) {
                            for (var e, n = [].slice.call(arguments, 1), i = 0; i < n.length; i++)
                                if (e = n[i])
                                    for (var r = t, o = Object.keys(e), a = 0; a < o.length; a++) {
                                        var s = o[a];
                                        r[s] = e[s]
                                    }
                            return t
                        });
                        var S = setTimeout;

                        function w() {}

                        function C(t) {
                            if (!(this instanceof C)) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof t) throw new TypeError("not a function");
                            this.N = 0, this.Ea = !1, this.I = void 0, this.ba = [], P(t, this)
                        }

                        function O(t, e) {
                            for (; 3 === t.N;) t = t.I;
                            0 === t.N ? t.ba.push(e) : (t.Ea = !0, B((function() {
                                var n = 1 === t.N ? e.bb : e.cb;
                                if (null === n)(1 === t.N ? T : A)(e.promise, t.I);
                                else {
                                    try {
                                        var i = n(t.I)
                                    } catch (t) {
                                        console.error("CATCH 4", t);                                        return void A(e.promise, t)
                                    }
                                    T(e.promise, i)
                                }
                            })))
                        }

                        function T(t, e) {
                            try {
                                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                                if (e && ("object" == typeof e || "function" == typeof e)) {
                                    var n = e.then;
                                    if (e instanceof C) return t.N = 3, t.I = e, void N(t);
                                    if ("function" == typeof n) return void P(function(t, e) {
                                        return function() {
                                            t.apply(e, arguments)
                                        }
                                    }(n, e), t)
                                }
                                t.N = 1, t.I = e, N(t)
                            } catch (e) {
                                console.error("CATCH 5", e);                                A(t, e)
                            }
                        }

                        function A(t, e) {
                            t.N = 2, t.I = e, N(t)
                        }

                        function N(t) {
                            2 === t.N && 0 === t.ba.length && B((function() {
                                t.Ea || "undefined" != typeof console && console
                            }));
                            for (var e = 0, n = t.ba.length; e < n; e++) O(t, t.ba[e]);
                            t.ba = null
                        }

                        function M(t, e, n) {
                            this.bb = "function" == typeof t ? t : null, this.cb = "function" == typeof e ? e : null, this.promise = n
                        }

                        function P(t, e) {
                            var n = !1;
                            try {
                                t((function(t) {
                                    n || (n = !0, T(e, t))
                                }), (function(t) {
                                    n || (n = !0, A(e, t))
                                }))
                            } catch (t) {
                                console.error("CATCH 6", t);                                n || (n = !0, A(e, t))
                            }
                        }

                        function D(t) {
                            return t && "object" == typeof t && t.constructor === C ? t : new C((function(e) {
                                e(t)
                            }))
                        }
                        C.prototype.catch = function(t) {
                            return this.then(null, t)
                        }, C.prototype.then = function(t, e) {
                            var n = new this.constructor(w);
                            return O(this, new M(t, e, n)), n
                        }, C.prototype.finally = function(t) {
                            var e = this.constructor;
                            return this.then((function(n) {
                                return e.resolve(t()).then((function() {
                                    return n
                                }))
                            }), (function(n) {
                                return e.resolve(t()).then((function() {
                                    return e.reject(n)
                                }))
                            }))
                        };
                        var L, I, x, k, j, R, B = "function" == typeof setImmediate && function(t) {
                            setImmediate(t)
                        } || function(t) {
                            S(t, 0)
                        };
                        if (!window.Promise) {
                            window.Promise = C, C.prototype.then = C.prototype.then, C.all = function(t) {
                                return new C((function(e, n) {
                                    function i(t, a) {
                                        try {
                                            if (a && ("object" == typeof a || "function" == typeof a)) {
                                                var s = a.then;
                                                if ("function" == typeof s) return void s.call(a, (function(e) {
                                                    i(t, e)
                                                }), n)
                                            }
                                            r[t] = a, 0 == --o && e(r)
                                        } catch (t) {
                                            console.error("CATCH 7", t);                                            n(t)
                                        }
                                    }
                                    if (!t || void 0 === t.length) return n(new TypeError("Promise.all accepts an array"));
                                    var r = Array.prototype.slice.call(t);
                                    if (0 === r.length) return e([]);
                                    for (var o = r.length, a = 0; a < r.length; a++) i(a, r[a])
                                }))
                            }, C.race = function(t) {
                                return new C((function(e, n) {
                                    if (!t || void 0 === t.length) return n(new TypeError("Promise.race accepts an array"));
                                    for (var i = 0, r = t.length; i < r; i++) D(t[i]).then(e, n)
                                }))
                            }, C.resolve = D, C.reject = function(t) {
                                return new C((function(e, n) {
                                    n(t)
                                }))
                            };
                            var U = document.createTextNode(""),
                                H = [];
                            new MutationObserver((function() {
                                for (var t = H.length, e = 0; e < t; e++) H[e]();
                                H.splice(0, t)
                            })).observe(U, {
                                characterData: !0
                            }), B = function(t) {
                                H.push(t), U.textContent = 0 < U.textContent.length ? "" : "a"
                            }
                        }! function(t, e) {
                            if (!(e in t)) {
                                var i = typeof n.g == typeof i ? window : n.g,
                                    r = 0,
                                    o = String(Math.random()),
                                    a = "__symbol@@" + o,
                                    s = t.getOwnPropertyNames,
                                    l = t.getOwnPropertyDescriptor,
                                    u = t.create,
                                    c = t.keys,
                                    d = t.freeze || t,
                                    h = t.defineProperty,
                                    f = t.defineProperties,
                                    p = l(t, "getOwnPropertyNames"),
                                    m = t.prototype,
                                    v = m.hasOwnProperty,
                                    y = m.propertyIsEnumerable,
                                    g = m.toString,
                                    _ = function(t, e, n) {
                                        v.call(t, a) || h(t, a, {
                                            enumerable: !1,
                                            configurable: !1,
                                            writable: !1,
                                            value: {}
                                        }), t[a]["@@" + e] = n
                                    },
                                    b = function(t, e) {
                                        var n = u(t);
                                        return s(e).forEach((function(t) {
                                            C.call(e, t) && P(n, t, e[t])
                                        })), n
                                    },
                                    E = function() {},
                                    S = function(t) {
                                        return t != a && !v.call(A, t)
                                    },
                                    w = function(t) {
                                        return t != a && v.call(A, t)
                                    },
                                    C = function(t) {
                                        var e = String(t);
                                        return w(e) ? v.call(this, e) && !!this[a] && this[a]["@@" + e] : y.call(this, t)
                                    },
                                    O = function(e) {
                                        return h(m, e, {
                                            enumerable: !1,
                                            configurable: !0,
                                            get: E,
                                            set: function(t) {
                                                L(this, e, {
                                                    enumerable: !1,
                                                    configurable: !0,
                                                    writable: !0,
                                                    value: t
                                                }), _(this, e, !0)
                                            }
                                        }), A[e] = h(t(e), "constructor", N), d(A[e])
                                    },
                                    T = function t(e) {
                                        if (this instanceof t) throw new TypeError("Symbol is not a constructor");
                                        return O("__symbol:".concat(e || "", o, ++r))
                                    },
                                    A = u(null),
                                    N = {
                                        value: T
                                    },
                                    M = function(t) {
                                        return A[t]
                                    },
                                    P = function(t, e, n) {
                                        var i = String(e);
                                        if (w(i)) {
                                            if (e = L, n.enumerable) {
                                                var r = u(n);
                                                r.enumerable = !1
                                            } else r = n;
                                            e(t, i, r), _(t, i, !!n.enumerable)
                                        } else h(t, e, n);
                                        return t
                                    },
                                    D = function(t) {
                                        return s(t).filter(w).map(M)
                                    };
                                p.value = P, h(t, "defineProperty", p), p.value = D, h(t, e, p), p.value = function(t) {
                                    return s(t).filter(S)
                                }, h(t, "getOwnPropertyNames", p), p.value = function(t, e) {
                                    var n = D(e);
                                    return n.length ? c(e).concat(n).forEach((function(n) {
                                        C.call(e, n) && P(t, n, e[n])
                                    })) : f(t, e), t
                                }, h(t, "defineProperties", p), p.value = C, h(m, "propertyIsEnumerable", p), p.value = T, h(i, "Symbol", p), p.value = function(t) {
                                    return (t = "__symbol:".concat("__symbol:", t, o)) in m ? A[t] : O(t)
                                }, h(T, "for", p), p.value = function(t) {
                                    if (S(t)) throw new TypeError(t + " is not a symbol");
                                    if (v.call(A, t) && ("__symbol:" === (t = t.slice(10)).slice(0, 10) && (t = t.slice(10)) !== o)) return 0 < (t = t.slice(0, t.length - o.length)).length ? t : void 0
                                }, h(T, "keyFor", p), p.value = function(t, e) {
                                    var n = l(t, e);
                                    return n && w(e) && (n.enumerable = C.call(t, e)), n
                                }, h(t, "getOwnPropertyDescriptor", p), p.value = function(t, e) {
                                    return 1 === arguments.length || void 0 === e ? u(t) : b(t, e)
                                }, h(t, "create", p), p.value = function() {
                                    var t = g.call(this);
                                    return "[object String]" === t && w(this) ? "[object Symbol]" : t
                                }, h(m, "toString", p);
                                try {
                                    if (!0 !== u(h({}, "__symbol:", {
                                            get: function() {
                                                return h(this, "__symbol:", {
                                                    value: !0
                                                })["__symbol:"]
                                            }
                                        }))["__symbol:"]) throw "IE11";
                                    var L = h
                                } catch (t) {
                                    console.error("CATCH 8", t);                                    L = function(t, e, n) {
                                        var i = l(m, e);
                                        delete m[e], h(t, e, n), h(m, e, i)
                                    }
                                }
                            }
                        }(Object, "getOwnPropertySymbols"), L = Object, I = Symbol, k = L.defineProperty, j = L.prototype, R = j.toString, "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach((function(t) {
                                t in I || (k(I, t, {
                                    value: I(t)
                                }), "toStringTag" === t && ((x = L.getOwnPropertyDescriptor(j, "toString")).value = function() {
                                    var t = R.call(this),
                                        e = null == this ? this : this[I.toStringTag];
                                    return null == e ? t : "[object " + e + "]"
                                }, k(j, "toString", x)))
                            })),
                            function(t, e, n) {
                                function i() {
                                    return this
                                }
                                e[t] || (e[t] = function() {
                                    var e = 0,
                                        n = this,
                                        r = {
                                            next: function() {
                                                var t = n.length <= e;
                                                return t ? {
                                                    done: t
                                                } : {
                                                    done: t,
                                                    value: n[e++]
                                                }
                                            }
                                        };
                                    return r[t] = i, r
                                }), n[t] || (n[t] = function() {
                                    var e = String.fromCodePoint,
                                        n = this,
                                        r = 0,
                                        o = n.length,
                                        a = {
                                            next: function() {
                                                var t = o <= r,
                                                    i = t ? "" : e(n.codePointAt(r));
                                                return r += i.length, t ? {
                                                    done: t
                                                } : {
                                                    done: t,
                                                    value: i
                                                }
                                            }
                                        };
                                    return a[t] = i, a
                                })
                            }(Symbol.iterator, Array.prototype, String.prototype);
                        var F = Object.prototype.toString;
                        Object.prototype.toString = function() {
                            return void 0 === this ? "[object Undefined]" : null === this ? "[object Null]" : F.call(this)
                        }, Object.keys = function(t) {
                            return Object.getOwnPropertyNames(t).filter((function(e) {
                                return (e = Object.getOwnPropertyDescriptor(t, e)) && e.enumerable
                            }))
                        }, String.prototype[Symbol.iterator] && String.prototype.codePointAt || (String.prototype[Symbol.iterator] = function t() {
                            var e, n = this;
                            return E(t, (function(t) {
                                if (1 == t.g && (e = 0), 3 != t.g) return e < n.length ? t = v(t, n[e]) : (t.g = 0, t = void 0), t;
                                e++, t.g = 2
                            }))
                        }), Set.prototype[Symbol.iterator] || (Set.prototype[Symbol.iterator] = function t() {
                            var e, n, i = this;
                            return E(t, (function(t) {
                                if (1 == t.g && (e = [], i.forEach((function(t) {
                                        e.push(t)
                                    })), n = 0), 3 != t.g) return n < e.length ? t = v(t, e[n]) : (t.g = 0, t = void 0), t;
                                n++, t.g = 2
                            }))
                        }), Map.prototype[Symbol.iterator] || (Map.prototype[Symbol.iterator] = function t() {
                            var e, n, i = this;
                            return E(t, (function(t) {
                                if (1 == t.g && (e = [], i.forEach((function(t, n) {
                                        e.push([n, t])
                                    })), n = 0), 3 != t.g) return n < e.length ? t = v(t, e[n]) : (t.g = 0, t = void 0), t;
                                n++, t.g = 2
                            }))
                        });
                        var V = document.createEvent("Event");
                        if (V.initEvent("foo", !0, !0), V.preventDefault(), !V.defaultPrevented) {
                            var G = Event.prototype.preventDefault;
                            Event.prototype.preventDefault = function() {
                                this.cancelable && (G.call(this), Object.defineProperty(this, "defaultPrevented", {
                                    get: function() {
                                        return !0
                                    },
                                    configurable: !0
                                }))
                            }
                        }
                        var q = /Trident/.test(navigator.userAgent);
                        if (!window.Event || q && "function" != typeof window.Event) {
                            var Y = window.Event;
                            if (window.Event = function(t, e) {
                                    e = e || {};
                                    var n = document.createEvent("Event");
                                    return n.initEvent(t, !!e.bubbles, !!e.cancelable), n
                                }, Y) {
                                for (var W in Y) window.Event[W] = Y[W];
                                window.Event.prototype = Y.prototype
                            }
                        }
                        if ((!window.CustomEvent || q && "function" != typeof window.CustomEvent) && (window.CustomEvent = function(t, e) {
                                e = e || {};
                                var n = document.createEvent("CustomEvent");
                                return n.initCustomEvent(t, !!e.bubbles, !!e.cancelable, e.detail), n
                            }, window.CustomEvent.prototype = window.Event.prototype), !window.MouseEvent || q && "function" != typeof window.MouseEvent) {
                            var z = window.MouseEvent;
                            if (window.MouseEvent = function(t, e) {
                                    e = e || {};
                                    var n = document.createEvent("MouseEvent");
                                    return n.initMouseEvent(t, !!e.bubbles, !!e.cancelable, e.view || window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget), n
                                }, z)
                                for (var K in z) window.MouseEvent[K] = z[K];
                            window.MouseEvent.prototype = z.prototype
                        }
                        Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", {
                            get: function() {
                                var t = (this.ownerDocument || this).querySelector("base[href]");
                                return t && t.href || window.location.href
                            },
                            configurable: !0,
                            enumerable: !0
                        });
                        var J, Z, X = Element.prototype,
                            $ = null !== (J = Object.getOwnPropertyDescriptor(X, "attributes")) && void 0 !== J ? J : Object.getOwnPropertyDescriptor(Node.prototype, "attributes"),
                            Q = null !== (Z = null == $ ? void 0 : $.get) && void 0 !== Z ? Z : function() {
                                return this.attributes
                            },
                            tt = Array.prototype.map;
                        X.hasOwnProperty("getAttributeNames") || (X.getAttributeNames = function() {
                            return tt.call(Q.call(this), (function(t) {
                                return t.name
                            }))
                        });
                        var et, nt = Element.prototype;
                        nt.hasOwnProperty("matches") || (nt.matches = null !== (et = nt.webkitMatchesSelector) && void 0 !== et ? et : nt.msMatchesSelector);
                        var it = Node.prototype.appendChild;

                        function rt(t) {
                            (t = t.prototype).hasOwnProperty("append") || Object.defineProperty(t, "append", {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                value: function(t) {
                                    for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                    for (n = (e = l(e)).next(); !n.done; n = e.next()) n = n.value, it.call(this, "string" == typeof n ? document.createTextNode(n) : n)
                                }
                            })
                        }
                        rt(Document), rt(DocumentFragment), rt(Element);
                        var ot, at, st = Node.prototype.insertBefore,
                            lt = null !== (at = null === (ot = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === ot ? void 0 : ot.get) && void 0 !== at ? at : function() {
                                return this.firstChild
                            };

                        function ut(t) {
                            (t = t.prototype).hasOwnProperty("prepend") || Object.defineProperty(t, "prepend", {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                value: function(t) {
                                    for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                    n = lt.call(this);
                                    for (var i = (e = l(e)).next(); !i.done; i = e.next()) i = i.value, st.call(this, "string" == typeof i ? document.createTextNode(i) : i, n)
                                }
                            })
                        }
                        ut(Document), ut(DocumentFragment), ut(Element);
                        var ct, dt, ht = Node.prototype.appendChild,
                            ft = Node.prototype.removeChild,
                            pt = null !== (dt = null === (ct = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild")) || void 0 === ct ? void 0 : ct.get) && void 0 !== dt ? dt : function() {
                                return this.firstChild
                            };

                        function mt(t) {
                            (t = t.prototype).hasOwnProperty("replaceChildren") || Object.defineProperty(t, "replaceChildren", {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                value: function(t) {
                                    for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                    for (; null !== (n = pt.call(this));) ft.call(this, n);
                                    for (n = (e = l(e)).next(); !n.done; n = e.next()) n = n.value, ht.call(this, "string" == typeof n ? document.createTextNode(n) : n)
                                }
                            })
                        }
                        mt(Document), mt(DocumentFragment), mt(Element);
                        var vt, yt, gt, _t, bt = Node.prototype.insertBefore,
                            Et = null !== (yt = null === (vt = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === vt ? void 0 : vt.get) && void 0 !== yt ? yt : function() {
                                return this.parentNode
                            },
                            St = null !== (_t = null === (gt = Object.getOwnPropertyDescriptor(Node.prototype, "nextSibling")) || void 0 === gt ? void 0 : gt.get) && void 0 !== _t ? _t : function() {
                                return this.nextSibling
                            };

                        function wt(t) {
                            (t = t.prototype).hasOwnProperty("after") || Object.defineProperty(t, "after", {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                value: function(t) {
                                    for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                    if (null !== (n = Et.call(this)))
                                        for (var i = St.call(this), r = (e = l(e)).next(); !r.done; r = e.next()) r = r.value, bt.call(n, "string" == typeof r ? document.createTextNode(r) : r, i)
                                }
                            })
                        }
                        wt(CharacterData), wt(Element);
                        var Ct, Ot, Tt = Node.prototype.insertBefore,
                            At = null !== (Ot = null === (Ct = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Ct ? void 0 : Ct.get) && void 0 !== Ot ? Ot : function() {
                                return this.parentNode
                            };

                        function Nt(t) {
                            (t = t.prototype).hasOwnProperty("before") || Object.defineProperty(t, "before", {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                value: function(t) {
                                    for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                    if (null !== (n = At.call(this)))
                                        for (var i = (e = l(e)).next(); !i.done; i = e.next()) i = i.value, Tt.call(n, "string" == typeof i ? document.createTextNode(i) : i, this)
                                }
                            })
                        }
                        Nt(CharacterData), Nt(Element);
                        var Mt, Pt, Dt = Node.prototype.removeChild,
                            Lt = null !== (Pt = null === (Mt = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === Mt ? void 0 : Mt.get) && void 0 !== Pt ? Pt : function() {
                                return this.parentNode
                            };

                        function It(t) {
                            (t = t.prototype).hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                value: function() {
                                    var t = Lt.call(this);
                                    t && Dt.call(t, this)
                                }
                            })
                        }
                        It(CharacterData), It(Element);
                        var xt, kt, jt = Node.prototype.insertBefore,
                            Rt = Node.prototype.removeChild,
                            Bt = null !== (kt = null === (xt = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode")) || void 0 === xt ? void 0 : xt.get) && void 0 !== kt ? kt : function() {
                                return this.parentNode
                            };

                        function Ut(t) {
                            (t = t.prototype).hasOwnProperty("replaceWith") || Object.defineProperty(t, "replaceWith", {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                value: function(t) {
                                    for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                    if (null !== (n = Bt.call(this))) {
                                        for (var i = (e = l(e)).next(); !i.done; i = e.next()) i = i.value, jt.call(n, "string" == typeof i ? document.createTextNode(i) : i, this);
                                        Rt.call(n, this)
                                    }
                                }
                            })
                        }
                        Ut(CharacterData), Ut(Element);
                        var Ht = window.Element.prototype,
                            Ft = window.HTMLElement.prototype,
                            Vt = window.SVGElement.prototype;
                        !Ft.hasOwnProperty("classList") || Ht.hasOwnProperty("classList") || Vt.hasOwnProperty("classList") || Object.defineProperty(Ht, "classList", Object.getOwnPropertyDescriptor(Ft, "classList"));
                        var Gt = document.createElement("style");
                        Gt.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
                        var qt = document.querySelector("head");
                        qt.insertBefore(Gt, qt.firstChild);
                        var Yt = window;
                        Yt.WebComponents = Yt.WebComponents || {
                            flags: {}
                        };
                        var Wt = document.querySelector('script[src*="webcomponents-bundle"]'),
                            zt = /wc-(.+)/,
                            Kt = {};
                        if (!Kt.noOpts) {
                            if (location.search.slice(1).split("&").forEach((function(t) {
                                    var e;
                                    (t = t.split("="))[0] && (e = t[0].match(zt)) && (Kt[e[1]] = t[1] || !0)
                                })), Wt)
                                for (var Jt = 0, Zt = void 0; Zt = Wt.attributes[Jt]; Jt++) "src" !== Zt.name && (Kt[Zt.name] = Zt.value || !0);
                            var Xt = {};
                            Kt.log && Kt.log.split && Kt.log.split(",").forEach((function(t) {
                                Xt[t] = !0
                            })), Kt.log = Xt
                        }
                        Yt.WebComponents.flags = Kt;
                        var $t = Kt.shadydom;
                        if ($t) {
                            Yt.ShadyDOM = Yt.ShadyDOM || {}, Yt.ShadyDOM.force = $t;
                            var Qt = Kt.noPatch;
                            Yt.ShadyDOM.noPatch = "true" === Qt || Qt
                        }
                        var te = Kt.register || Kt.ce;

                        function ee() {}

                        function ne(t) {
                            return t.__shady || (t.__shady = new ee), t.__shady
                        }

                        function ie(t) {
                            return t && t.__shady
                        }
                        te && window.customElements && (Yt.customElements.forcePolyfill = te),
                            function() {
                                function t() {}

                                function e(t, e) {
                                    if (!t.childNodes.length) return [];
                                    switch (t.nodeType) {
                                        case Node.DOCUMENT_NODE:
                                            return m.call(t, e);
                                        case Node.DOCUMENT_FRAGMENT_NODE:
                                            return v.call(t, e);
                                        default:
                                            return p.call(t, e)
                                    }
                                }
                                var n = "undefined" == typeof HTMLTemplateElement,
                                    i = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment),
                                    r = !1;
                                /Trident/.test(navigator.userAgent) && function() {
                                    function t(t, e) {
                                        if (t instanceof DocumentFragment)
                                            for (var i; i = t.firstChild;) n.call(this, i, e);
                                        else n.call(this, t, e);
                                        return t
                                    }
                                    r = !0;
                                    var e = Node.prototype.cloneNode;
                                    Node.prototype.cloneNode = function(t) {
                                        return t = e.call(this, t), this instanceof DocumentFragment && (t.__proto__ = DocumentFragment.prototype), t
                                    }, DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll, DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector, Object.defineProperties(DocumentFragment.prototype, {
                                        nodeType: {
                                            get: function() {
                                                return Node.DOCUMENT_FRAGMENT_NODE
                                            },
                                            configurable: !0
                                        },
                                        localName: {
                                            get: function() {},
                                            configurable: !0
                                        },
                                        nodeName: {
                                            get: function() {
                                                return "#document-fragment"
                                            },
                                            configurable: !0
                                        }
                                    });
                                    var n = Node.prototype.insertBefore;
                                    Node.prototype.insertBefore = t;
                                    var i = Node.prototype.appendChild;
                                    Node.prototype.appendChild = function(e) {
                                        return e instanceof DocumentFragment ? t.call(this, e, null) : i.call(this, e), e
                                    };
                                    var o = Node.prototype.removeChild,
                                        a = Node.prototype.replaceChild;
                                    Node.prototype.replaceChild = function(e, n) {
                                        return e instanceof DocumentFragment ? (t.call(this, e, n), o.call(this, n)) : a.call(this, e, n), n
                                    }, Document.prototype.createDocumentFragment = function() {
                                        var t = this.createElement("df");
                                        return t.__proto__ = DocumentFragment.prototype, t
                                    };
                                    var s = Document.prototype.importNode;
                                    Document.prototype.importNode = function(t, e) {
                                        return e = s.call(this, t, e || !1), t instanceof DocumentFragment && (e.__proto__ = DocumentFragment.prototype), e
                                    }
                                }();
                                var o = Node.prototype.cloneNode,
                                    a = Document.prototype.createElement,
                                    s = Document.prototype.importNode,
                                    l = Node.prototype.removeChild,
                                    u = Node.prototype.appendChild,
                                    c = Node.prototype.replaceChild,
                                    d = DOMParser.prototype.parseFromString,
                                    h = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || {
                                        get: function() {
                                            return this.innerHTML
                                        },
                                        set: function(t) {
                                            this.innerHTML = t
                                        }
                                    },
                                    f = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || {
                                        get: function() {
                                            return this.childNodes
                                        }
                                    },
                                    p = Element.prototype.querySelectorAll,
                                    m = Document.prototype.querySelectorAll,
                                    v = DocumentFragment.prototype.querySelectorAll,
                                    y = function() {
                                        if (!n) {
                                            var t = document.createElement("template"),
                                                e = document.createElement("template");
                                            return e.content.appendChild(document.createElement("div")), t.content.appendChild(e), 0 === (t = t.cloneNode(!0)).content.childNodes.length || 0 === t.content.firstChild.content.childNodes.length || i
                                        }
                                    }();
                                if (n) {
                                    var g = document.implementation.createHTMLDocument("template"),
                                        _ = !0,
                                        b = document.createElement("style");
                                    b.textContent = "template{display:none;}";
                                    var E = document.head;
                                    E.insertBefore(b, E.firstElementChild), t.prototype = Object.create(HTMLElement.prototype);
                                    var S = !document.createElement("div").hasOwnProperty("innerHTML");
                                    t.Z = function(e) {
                                        if (!e.content && e.namespaceURI === document.documentElement.namespaceURI) {
                                            e.content = g.createDocumentFragment();
                                            for (var n; n = e.firstChild;) u.call(e.content, n);
                                            if (S) e.__proto__ = t.prototype;
                                            else if (e.cloneNode = function(e) {
                                                    return t.sa(this, e)
                                                }, _) try {
                                                C(e), O(e)
                                            } catch (t) {
                                                console.error("CATCH 9", t);                                                _ = !1
                                            }
                                            t.bootstrap(e.content)
                                        }
                                    };
                                    var w = {
                                            option: ["select"],
                                            thead: ["table"],
                                            col: ["colgroup", "table"],
                                            tr: ["tbody", "table"],
                                            th: ["tr", "tbody", "table"],
                                            td: ["tr", "tbody", "table"]
                                        },
                                        C = function(e) {
                                            Object.defineProperty(e, "innerHTML", {
                                                get: function() {
                                                    return D(this)
                                                },
                                                set: function(e) {
                                                    var n = w[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(e) || ["", ""])[1].toLowerCase()];
                                                    if (n)
                                                        for (var i = 0; i < n.length; i++) e = "<" + n[i] + ">" + e + "</" + n[i] + ">";
                                                    for (g.body.innerHTML = e, t.bootstrap(g); this.content.firstChild;) l.call(this.content, this.content.firstChild);
                                                    if (e = g.body, n)
                                                        for (i = 0; i < n.length; i++) e = e.lastChild;
                                                    for (; e.firstChild;) u.call(this.content, e.firstChild)
                                                },
                                                configurable: !0
                                            })
                                        },
                                        O = function(t) {
                                            Object.defineProperty(t, "outerHTML", {
                                                get: function() {
                                                    return "<template>" + this.innerHTML + "</template>"
                                                },
                                                set: function(t) {
                                                    if (!this.parentNode) throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
                                                    for (g.body.innerHTML = t, t = this.ownerDocument.createDocumentFragment(); g.body.firstChild;) u.call(t, g.body.firstChild);
                                                    c.call(this.parentNode, t, this)
                                                },
                                                configurable: !0
                                            })
                                        };
                                    C(t.prototype), O(t.prototype), t.bootstrap = function(n) {
                                        for (var i, r = 0, o = (n = e(n, "template")).length; r < o && (i = n[r]); r++) t.Z(i)
                                    }, document.addEventListener("DOMContentLoaded", (function() {
                                        t.bootstrap(document)
                                    })), Document.prototype.createElement = function() {
                                        var e = a.apply(this, arguments);
                                        return "template" === e.localName && t.Z(e), e
                                    }, DOMParser.prototype.parseFromString = function() {
                                        var e = d.apply(this, arguments);
                                        return t.bootstrap(e), e
                                    }, Object.defineProperty(HTMLElement.prototype, "innerHTML", {
                                        get: function() {
                                            return D(this)
                                        },
                                        set: function(e) {
                                            h.set.call(this, e), t.bootstrap(this)
                                        },
                                        configurable: !0,
                                        enumerable: !0
                                    });
                                    var T = /[&\u00A0"]/g,
                                        A = /[&\u00A0<>]/g,
                                        N = function(t) {
                                            switch (t) {
                                                case "&":
                                                    return "&amp;";
                                                case "<":
                                                    return "&lt;";
                                                case ">":
                                                    return "&gt;";
                                                case '"':
                                                    return "&quot;";
                                                case "Ãƒâ€š ":
                                                    return "&nbsp;"
                                            }
                                        },
                                        M = (b = function(t) {
                                            for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = !0;
                                            return e
                                        })("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
                                        P = b("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
                                        D = function(t, e) {
                                            "template" === t.localName && (t = t.content);
                                            for (var n, i = "", r = e ? e(t) : f.get.call(t), o = 0, a = r.length; o < a && (n = r[o]); o++) {
                                                t: {
                                                    var s = n,
                                                        l = t,
                                                        u = e;
                                                    switch (s.nodeType) {
                                                        case Node.ELEMENT_NODE:
                                                            for (var c = s.localName, d = "<" + c, h = s.attributes, p = 0; l = h[p]; p++) d += " " + l.name + '="' + l.value.replace(T, N) + '"';
                                                            d += ">", s = M[c] ? d : d + D(s, u) + "</" + c + ">";
                                                            break t;
                                                        case Node.TEXT_NODE:
                                                            s = s.data, s = l && P[l.localName] ? s : s.replace(A, N);
                                                            break t;
                                                        case Node.COMMENT_NODE:
                                                            s = "\x3c!--" + s.data + "--\x3e";
                                                            break t;
                                                        default:
                                                            throw window.console.error(s), Error("not implemented")
                                                    }
                                                }
                                                i += s
                                            }
                                            return i
                                        }
                                }
                                if (n || y) {
                                    t.sa = function(t, e) {
                                        var n = o.call(t, !1);
                                        return this.Z && this.Z(n), e && (u.call(n.content, o.call(t.content, !0)), L(n.content, t.content)), n
                                    };
                                    var L = function(n, i) {
                                            if (i.querySelectorAll && 0 !== (i = e(i, "template")).length)
                                                for (var r, o, a = 0, s = (n = e(n, "template")).length; a < s; a++) o = i[a], r = n[a], t && t.Z && t.Z(o), c.call(r.parentNode, I.call(o, !0), r)
                                        },
                                        I = Node.prototype.cloneNode = function(e) {
                                            if (!r && i && this instanceof DocumentFragment) {
                                                if (!e) return this.ownerDocument.createDocumentFragment();
                                                var n = x.call(this.ownerDocument, this, !0)
                                            } else n = this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? t.sa(this, e) : o.call(this, e);
                                            return e && L(n, this), n
                                        },
                                        x = Document.prototype.importNode = function(n, i) {
                                            if (i = i || !1, "template" === n.localName) return t.sa(n, i);
                                            var r = s.call(this, n, i);
                                            if (i) {
                                                L(r, n), n = e(r, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
                                                for (var o, l = 0; l < n.length; l++) {
                                                    o = n[l], (i = a.call(document, "script")).textContent = o.textContent;
                                                    for (var u, d = o.attributes, h = 0; h < d.length; h++) u = d[h], i.setAttribute(u.name, u.value);
                                                    c.call(o.parentNode, i, o)
                                                }
                                            }
                                            return r
                                        }
                                }
                                n && (window.HTMLTemplateElement = t)
                            }(), ee.prototype.toJSON = function() {
                                return {}
                            };
                        var re = window.ShadyDOM || {};
                        re.Ya = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
                        var oe = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");

                        function ae() {
                            return Document.prototype.msElementsFromPoint ? "msElementsFromPoint" : "elementsFromPoint"
                        }

                        function se(t) {
                            return (t = ie(t)) && void 0 !== t.firstChild
                        }

                        function le(t) {
                            return t instanceof ShadowRoot
                        }

                        function ue(t) {
                            return (t = (t = ie(t)) && t.root) && Ji(t)
                        }
                        re.H = !!(oe && oe.configurable && oe.get), re.ya = re.force || !re.Ya, re.J = re.noPatch || !1, re.fa = re.preferPerformance, re.Aa = "on-demand" === re.J, re.Na = navigator.userAgent.match("Trident");
                        var ce = Element.prototype,
                            de = ce.matches || ce.matchesSelector || ce.mozMatchesSelector || ce.msMatchesSelector || ce.oMatchesSelector || ce.webkitMatchesSelector,
                            he = document.createTextNode(""),
                            fe = 0,
                            pe = [];

                        function me(t) {
                            pe.push(t), he.textContent = fe++
                        }
                        new MutationObserver((function() {
                            for (; pe.length;) try {
                                pe.shift()()
                            } catch (t) {
                                console.error("CATCH 10", t);                                throw he.textContent = fe++, t
                            }
                        })).observe(he, {
                            characterData: !0
                        });
                        var ve = document.contains ? function(t, e) {
                            return t.__shady_native_contains(e)
                        } : function(t, e) {
                            return t === e || t.documentElement && t.documentElement.__shady_native_contains(e)
                        };

                        function ye(t, e) {
                            for (; e;) {
                                if (e == t) return !0;
                                e = e.__shady_parentNode
                            }
                            return !1
                        }

                        function ge(t) {
                            for (var e = t.length - 1; 0 <= e; e--) {
                                var n = t[e],
                                    i = n.getAttribute("id") || n.getAttribute("name");
                                i && "length" !== i && isNaN(i) && (t[i] = n)
                            }
                            return t.item = function(e) {
                                return t[e]
                            }, t.namedItem = function(e) {
                                if ("length" !== e && isNaN(e) && t[e]) return t[e];
                                for (var n = l(t), i = n.next(); !i.done; i = n.next())
                                    if (((i = i.value).getAttribute("id") || i.getAttribute("name")) == e) return i;
                                return null
                            }, t
                        }

                        function _e(t) {
                            var e = [];
                            for (t = t.__shady_native_firstChild; t; t = t.__shady_native_nextSibling) e.push(t);
                            return e
                        }

                        function be(t) {
                            var e = [];
                            for (t = t.__shady_firstChild; t; t = t.__shady_nextSibling) e.push(t);
                            return e
                        }

                        function Ee(t, e, n) {
                            if (n.configurable = !0, n.value) t[e] = n.value;
                            else try {
                                Object.defineProperty(t, e, n)
                            } catch (t) {
                                console.error("CATCH 11", t);                            }
                        }

                        function Se(t, e, n, i) {
                            for (var r in n = void 0 === n ? "" : n, e) i && 0 <= i.indexOf(r) || Ee(t, n + r, e[r])
                        }

                        function we(t, e) {
                            for (var n in e) n in t && Ee(t, n, e[n])
                        }

                        function Ce(t) {
                            var e = {};
                            return Object.getOwnPropertyNames(t).forEach((function(n) {
                                e[n] = Object.getOwnPropertyDescriptor(t, n)
                            })), e
                        }

                        function Oe(t, e) {
                            for (var n, i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) t[n = i[r]] = e[n]
                        }

                        function Te(t) {
                            return t instanceof Node ? t : document.createTextNode("" + t)
                        }

                        function Ae(t) {
                            for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                            if (1 === e.length) return Te(e[0]);
                            n = document.createDocumentFragment();
                            for (var i = (e = l(e)).next(); !i.done; i = e.next()) n.appendChild(Te(i.value));
                            return n
                        }
                        var Ne, Me = [];

                        function Pe(t) {
                            Ne || (Ne = !0, me(De)), Me.push(t)
                        }

                        function De() {
                            Ne = !1;
                            for (var t = !!Me.length; Me.length;) Me.shift()();
                            return t
                        }

                        function Le() {
                            this.g = !1, this.addedNodes = [], this.removedNodes = [], this.oa = new Set
                        }
                        De.list = Me, Le.prototype.flush = function() {
                            if (this.g) {
                                this.g = !1;
                                var t = this.takeRecords();
                                t.length && this.oa.forEach((function(e) {
                                    e(t)
                                }))
                            }
                        }, Le.prototype.takeRecords = function() {
                            if (this.addedNodes.length || this.removedNodes.length) {
                                var t = [{
                                    addedNodes: this.addedNodes,
                                    removedNodes: this.removedNodes
                                }];
                                return this.addedNodes = [], this.removedNodes = [], t
                            }
                            return []
                        };
                        var Ie = /[&\u00A0"]/g,
                            xe = /[&\u00A0<>]/g;

                        function ke(t) {
                            switch (t) {
                                case "&":
                                    return "&amp;";
                                case "<":
                                    return "&lt;";
                                case ">":
                                    return "&gt;";
                                case '"':
                                    return "&quot;";
                                case "Ãƒâ€š ":
                                    return "&nbsp;"
                            }
                        }

                        function je(t) {
                            for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = !0;
                            return e
                        }
                        var Re = je("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
                            Be = je("style script xmp iframe noembed noframes plaintext noscript".split(" "));

                        function Ue(t, e) {
                            "template" === t.localName && (t = t.content);
                            for (var n = "", i = e ? e(t) : t.childNodes, r = 0, o = i.length, a = void 0; r < o && (a = i[r]); r++) {
                                t: {
                                    var s = a,
                                        l = t,
                                        u = e;
                                    switch (s.nodeType) {
                                        case Node.ELEMENT_NODE:
                                            for (var c, d = "<" + (l = s.localName), h = s.attributes, f = 0; c = h[f]; f++) d += " " + c.name + '="' + c.value.replace(Ie, ke) + '"';
                                            d += ">", s = Re[l] ? d : d + Ue(s, u) + "</" + l + ">";
                                            break t;
                                        case Node.TEXT_NODE:
                                            s = s.data, s = l && Be[l.localName] ? s : s.replace(xe, ke);
                                            break t;
                                        case Node.COMMENT_NODE:
                                            s = "\x3c!--" + s.data + "--\x3e";
                                            break t;
                                        default:
                                            throw window.console.error(s), Error("not implemented")
                                    }
                                }
                                n += s
                            }
                            return n
                        }
                        var He = re.H,
                            Fe = {
                                querySelector: function(t) {
                                    return this.__shady_native_querySelector(t)
                                },
                                querySelectorAll: function(t) {
                                    return this.__shady_native_querySelectorAll(t)
                                }
                            },
                            Ve = {};

                        function Ge(t) {
                            Ve[t] = function(e) {
                                return e["__shady_native_" + t]
                            }
                        }

                        function qe(t, e) {
                            for (var n in Se(t, e, "__shady_native_"), e) Ge(n)
                        }

                        function Ye(t, e) {
                            e = void 0 === e ? [] : e;
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n],
                                    r = Object.getOwnPropertyDescriptor(t, i);
                                r && (Object.defineProperty(t, "__shady_native_" + i, r), r.value ? Fe[i] || (Fe[i] = r.value) : Ge(i))
                            }
                        }
                        var We = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
                            ze = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
                            Ke = document.implementation.createHTMLDocument("inert");

                        function Je(t) {
                            for (var e; e = t.__shady_native_firstChild;) t.__shady_native_removeChild(e)
                        }
                        var Ze = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
                            Xe = ["querySelector", "querySelectorAll", "append", "prepend", "replaceChildren"];
                        var $e = Ce({
                                get childNodes() {
                                    return this.__shady_childNodes
                                },
                                get firstChild() {
                                    return this.__shady_firstChild
                                },
                                get lastChild() {
                                    return this.__shady_lastChild
                                },
                                get childElementCount() {
                                    return this.__shady_childElementCount
                                },
                                get children() {
                                    return this.__shady_children
                                },
                                get firstElementChild() {
                                    return this.__shady_firstElementChild
                                },
                                get lastElementChild() {
                                    return this.__shady_lastElementChild
                                },
                                get shadowRoot() {
                                    return this.__shady_shadowRoot
                                }
                            }),
                            Qe = Ce({
                                get textContent() {
                                    return this.__shady_textContent
                                },
                                set textContent(t) {
                                    this.__shady_textContent = t
                                },
                                get innerHTML() {
                                    return this.__shady_innerHTML
                                },
                                set innerHTML(t) {
                                    this.__shady_innerHTML = t
                                }
                            }),
                            tn = Ce({
                                get parentElement() {
                                    return this.__shady_parentElement
                                },
                                get parentNode() {
                                    return this.__shady_parentNode
                                },
                                get nextSibling() {
                                    return this.__shady_nextSibling
                                },
                                get previousSibling() {
                                    return this.__shady_previousSibling
                                },
                                get nextElementSibling() {
                                    return this.__shady_nextElementSibling
                                },
                                get previousElementSibling() {
                                    return this.__shady_previousElementSibling
                                },
                                get className() {
                                    return this.__shady_className
                                },
                                set className(t) {
                                    this.__shady_className = t
                                }
                            });

                        function en(t) {
                            for (var e in t) {
                                var n = t[e];
                                n && (n.enumerable = !1)
                            }
                        }
                        en($e), en(Qe), en(tn);
                        var nn = re.H || !0 === re.J,
                            rn = nn ? function() {} : function(t) {
                                var e = ne(t);
                                e.Pa || (e.Pa = !0, we(t, tn))
                            },
                            on = nn ? function() {} : function(t) {
                                var e = ne(t);
                                e.Oa || (e.Oa = !0, we(t, $e), window.customElements && window.customElements.polyfillWrapFlushCallback && !re.J || we(t, Qe))
                            },
                            an = "__eventWrappers" + Date.now(),
                            sn = function() {
                                var t = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
                                return t ? function(e) {
                                    return t.get.call(e)
                                } : null
                            }(),
                            ln = function() {
                                function t() {}
                                var e = !1,
                                    n = {
                                        get capture() {
                                            return e = !0, !1
                                        }
                                    };
                                return window.addEventListener("test", t, n), window.removeEventListener("test", t, n), e
                            }();

                        function un(t) {
                            if (t && "object" == typeof t) var e = !!t.capture,
                                n = !!t.once,
                                i = !!t.passive,
                                r = t.U;
                            else e = !!t, i = n = !1;
                            return {
                                La: r,
                                capture: e,
                                once: n,
                                passive: i,
                                Ja: ln ? t : e
                            }
                        }
                        var cn = {
                                blur: !0,
                                focus: !0,
                                focusin: !0,
                                focusout: !0,
                                click: !0,
                                dblclick: !0,
                                mousedown: !0,
                                mouseenter: !0,
                                mouseleave: !0,
                                mousemove: !0,
                                mouseout: !0,
                                mouseover: !0,
                                mouseup: !0,
                                wheel: !0,
                                beforeinput: !0,
                                input: !0,
                                keydown: !0,
                                keyup: !0,
                                compositionstart: !0,
                                compositionupdate: !0,
                                compositionend: !0,
                                touchstart: !0,
                                touchend: !0,
                                touchmove: !0,
                                touchcancel: !0,
                                pointerover: !0,
                                pointerenter: !0,
                                pointerdown: !0,
                                pointermove: !0,
                                pointerup: !0,
                                pointercancel: !0,
                                pointerout: !0,
                                pointerleave: !0,
                                gotpointercapture: !0,
                                lostpointercapture: !0,
                                dragstart: !0,
                                drag: !0,
                                dragenter: !0,
                                dragleave: !0,
                                dragover: !0,
                                drop: !0,
                                dragend: !0,
                                DOMActivate: !0,
                                DOMFocusIn: !0,
                                DOMFocusOut: !0,
                                keypress: !0
                            },
                            dn = {
                                DOMAttrModified: !0,
                                DOMAttributeNameChanged: !0,
                                DOMCharacterDataModified: !0,
                                DOMElementNameChanged: !0,
                                DOMNodeInserted: !0,
                                DOMNodeInsertedIntoDocument: !0,
                                DOMNodeRemoved: !0,
                                DOMNodeRemovedFromDocument: !0,
                                DOMSubtreeModified: !0
                            };

                        function hn(t) {
                            return t instanceof Node ? t.__shady_getRootNode() : t
                        }

                        function fn(t, e) {
                            var n = [],
                                i = t;
                            for (t = hn(t); i;) n.push(i), i = i.__shady_assignedSlot ? i.__shady_assignedSlot : i.nodeType === Node.DOCUMENT_FRAGMENT_NODE && i.host && (e || i !== t) ? i.host : i.__shady_parentNode;
                            return n[n.length - 1] === document && n.push(window), n
                        }

                        function pn(t, e) {
                            if (!le) return t;
                            t = fn(t, !0);
                            for (var n, i, r = 0, o = void 0, a = void 0; r < e.length; r++)
                                if ((i = hn(n = e[r])) !== o && (a = t.indexOf(i), o = i), !le(i) || -1 < a) return n
                        }

                        function mn(t) {
                            function e(e, n) {
                                return (e = new t(e, n)).__composed = n && !!n.composed, e
                            }
                            return e.__proto__ = t, e.prototype = t.prototype, e
                        }
                        var vn = {
                            focus: !0,
                            blur: !0
                        };

                        function yn(t) {
                            return t.__target !== t.target || t.__relatedTarget !== t.relatedTarget
                        }

                        function gn(t, e, n) {
                            if (n = e.__handlers && e.__handlers[t.type] && e.__handlers[t.type][n])
                                for (var i, r = 0;
                                    (i = n[r]) && (!yn(t) || t.target !== t.relatedTarget) && (i.call(e, t), !t.__immediatePropagationStopped); r++);
                        }

                        function _n(t) {
                            var e = t.composedPath(),
                                n = e.map((function(t) {
                                    return pn(t, e)
                                })),
                                i = t.bubbles;
                            Object.defineProperty(t, "currentTarget", {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return a
                                }
                            });
                            var r = Event.CAPTURING_PHASE;
                            Object.defineProperty(t, "eventPhase", {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return r
                                }
                            });
                            for (var o = e.length - 1; 0 <= o; o--) {
                                var a = e[o];
                                if (r = a === n[o] ? Event.AT_TARGET : Event.CAPTURING_PHASE, gn(t, a, "capture"), t.ra) return
                            }
                            for (o = 0; o < e.length; o++) {
                                var s = (a = e[o]) === n[o];
                                if ((s || i) && (r = s ? Event.AT_TARGET : Event.BUBBLING_PHASE, gn(t, a, "bubble"), t.ra)) return
                            }
                            r = 0, a = null
                        }

                        function bn(t, e, n, i, r, o) {
                            for (var a = 0; a < t.length; a++) {
                                var s = t[a],
                                    l = s.type,
                                    u = s.capture,
                                    c = s.once,
                                    d = s.passive;
                                if (e === s.node && n === l && i === u && r === c && o === d) return a
                            }
                            return -1
                        }

                        function En(t) {
                            return De(), !re.fa && this instanceof Node && !ve(document, this) ? (t.__target || On(t, this), _n(t)) : this.__shady_native_dispatchEvent(t)
                        }

                        function Sn(t, e, n) {
                            var i = un(n),
                                r = i.capture,
                                o = i.once,
                                a = i.passive,
                                s = i.La;
                            if (i = i.Ja, e) {
                                var l = typeof e;
                                if (("function" === l || "object" === l) && ("object" !== l || e.handleEvent && "function" == typeof e.handleEvent)) {
                                    if (dn[t]) return this.__shady_native_addEventListener(t, e, i);
                                    var u = s || this;
                                    if (s = e[an]) {
                                        if (-1 < bn(s, u, t, r, o, a)) return
                                    } else e[an] = [];
                                    s = function(i) {
                                        if (o && this.__shady_removeEventListener(t, e, n), i.__target || On(i), u !== this) {
                                            var a = Object.getOwnPropertyDescriptor(i, "currentTarget");
                                            Object.defineProperty(i, "currentTarget", {
                                                get: function() {
                                                    return u
                                                },
                                                configurable: !0
                                            });
                                            var s = Object.getOwnPropertyDescriptor(i, "eventPhase");
                                            Object.defineProperty(i, "eventPhase", {
                                                configurable: !0,
                                                enumerable: !0,
                                                get: function() {
                                                    return r ? Event.CAPTURING_PHASE : Event.BUBBLING_PHASE
                                                }
                                            })
                                        }
                                        if (i.__previousCurrentTarget = i.currentTarget, (!le(u) && "slot" !== u.localName || -1 != i.composedPath().indexOf(u)) && (i.composed || -1 < i.composedPath().indexOf(u)))
                                            if (yn(i) && i.target === i.relatedTarget) i.eventPhase === Event.BUBBLING_PHASE && i.stopImmediatePropagation();
                                            else if (i.eventPhase === Event.CAPTURING_PHASE || i.bubbles || i.target === u || u instanceof Window) {
                                            var c = "function" === l ? e.call(u, i) : e.handleEvent && e.handleEvent(i);
                                            return u !== this && (a ? (Object.defineProperty(i, "currentTarget", a), a = null) : delete i.currentTarget, s ? (Object.defineProperty(i, "eventPhase", s), s = null) : delete i.eventPhase), c
                                        }
                                    }, e[an].push({
                                        node: u,
                                        type: t,
                                        capture: r,
                                        once: o,
                                        passive: a,
                                        pb: s
                                    }), this.__handlers = this.__handlers || {}, this.__handlers[t] = this.__handlers[t] || {
                                        capture: [],
                                        bubble: []
                                    }, this.__handlers[t][r ? "capture" : "bubble"].push(s), vn[t] || this.__shady_native_addEventListener(t, s, i)
                                }
                            }
                        }

                        function wn(t, e, n) {
                            if (e) {
                                var i = un(n);
                                n = i.capture;
                                var r = i.once,
                                    o = i.passive,
                                    a = i.La;
                                if (i = i.Ja, dn[t]) return this.__shady_native_removeEventListener(t, e, i);
                                var s = a || this;
                                a = void 0;
                                var l = null;
                                try {
                                    l = e[an]
                                } catch (t) {
                                    console.error("CATCH 12", t);                                }
                                l && (-1 < (r = bn(l, s, t, n, r, o)) && (a = l.splice(r, 1)[0].pb, l.length || (e[an] = void 0))), this.__shady_native_removeEventListener(t, a || e, i), a && this.__handlers && this.__handlers[t] && (-1 < (e = (t = this.__handlers[t][n ? "capture" : "bubble"]).indexOf(a)) && t.splice(e, 1))
                            }
                        }
                        var Cn = Ce({
                            get composed() {
                                return void 0 === this.__composed && (sn ? this.__composed = "focusin" === this.type || "focusout" === this.type || sn(this) : !1 !== this.isTrusted && (this.__composed = cn[this.type])), this.__composed || !1
                            },
                            composedPath: function() {
                                return this.__composedPath || (this.__composedPath = fn(this.__target, this.composed)), this.__composedPath
                            },
                            get target() {
                                return pn(this.currentTarget || this.__previousCurrentTarget, this.composedPath())
                            },
                            get relatedTarget() {
                                return this.__relatedTarget ? (this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = fn(this.__relatedTarget, !0)), pn(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath)) : null
                            },
                            stopPropagation: function() {
                                Event.prototype.stopPropagation.call(this), this.ra = !0
                            },
                            stopImmediatePropagation: function() {
                                Event.prototype.stopImmediatePropagation.call(this), this.ra = this.__immediatePropagationStopped = !0
                            }
                        });

                        function On(t, e) {
                            if (e = void 0 === e ? t.target : e, t.__target = e, t.__relatedTarget = t.relatedTarget, re.H) {
                                if (!(e = Object.getPrototypeOf(t)).hasOwnProperty("__shady_patchedProto")) {
                                    var n = Object.create(e);
                                    n.__shady_sourceProto = e, Se(n, Cn), e.__shady_patchedProto = n
                                }
                                t.__proto__ = e.__shady_patchedProto
                            } else Se(t, Cn)
                        }
                        var Tn = mn(Event),
                            An = mn(CustomEvent),
                            Nn = mn(MouseEvent);
                        var Mn = Object.getOwnPropertyNames(Element.prototype).filter((function(t) {
                                return "on" === t.substring(0, 2)
                            })),
                            Pn = Object.getOwnPropertyNames(HTMLElement.prototype).filter((function(t) {
                                return "on" === t.substring(0, 2)
                            }));

                        function Dn(t) {
                            return {
                                set: function(e) {
                                    var n = ne(this),
                                        i = t.substring(2);
                                    n.T || (n.T = {}), n.T[t] && this.removeEventListener(i, n.T[t]), this.__shady_addEventListener(i, e), n.T[t] = e
                                },
                                get: function() {
                                    var e = ie(this);
                                    return e && e.T && e.T[t]
                                },
                                configurable: !0
                            }
                        }

                        function Ln(t, e) {
                            return {
                                index: t,
                                ga: [],
                                na: e
                            }
                        }

                        function In(t, e, n, i) {
                            var r = 0,
                                o = 0,
                                a = 0,
                                s = 0,
                                l = Math.min(e - r, i - o);
                            if (0 == r && 0 == o) t: {
                                for (a = 0; a < l; a++)
                                    if (t[a] !== n[a]) break t;a = l
                            }
                            if (e == t.length && i == n.length) {
                                s = t.length;
                                for (var u = n.length, c = 0; c < l - a && xn(t[--s], n[--u]);) c++;
                                s = c
                            }
                            if (o += a, i -= s, 0 == (e -= s) - (r += a) && 0 == i - o) return [];
                            if (r == e) {
                                for (e = Ln(r, 0); o < i;) e.ga.push(n[o++]);
                                return [e]
                            }
                            if (o == i) return [Ln(r, e - r)];
                            for (i = i - (a = o) + 1, s = e - (l = r) + 1, e = Array(i), u = 0; u < i; u++) e[u] = Array(s), e[u][0] = u;
                            for (u = 0; u < s; u++) e[0][u] = u;
                            for (u = 1; u < i; u++)
                                for (c = 1; c < s; c++)
                                    if (t[l + c - 1] === n[a + u - 1]) e[u][c] = e[u - 1][c - 1];
                                    else {
                                        var d = e[u - 1][c] + 1,
                                            h = e[u][c - 1] + 1;
                                        e[u][c] = d < h ? d : h
                                    } for (l = e.length - 1, a = e[0].length - 1, i = e[l][a], t = []; 0 < l || 0 < a;) 0 == l ? (t.push(2), a--) : 0 == a ? (t.push(3), l--) : (s = e[l - 1][a - 1], (d = (u = e[l - 1][a]) < (c = e[l][a - 1]) ? u < s ? u : s : c < s ? c : s) == s ? (s == i ? t.push(0) : (t.push(1), i = s), l--, a--) : d == u ? (t.push(3), l--, i = u) : (t.push(2), a--, i = c));
                            for (t.reverse(), e = void 0, l = [], a = 0; a < t.length; a++) switch (t[a]) {
                                case 0:
                                    e && (l.push(e), e = void 0), r++, o++;
                                    break;
                                case 1:
                                    e || (e = Ln(r, 0)), e.na++, r++, e.ga.push(n[o]), o++;
                                    break;
                                case 2:
                                    e || (e = Ln(r, 0)), e.na++, r++;
                                    break;
                                case 3:
                                    e || (e = Ln(r, 0)), e.ga.push(n[o]), o++
                            }
                            return e && l.push(e), l
                        }

                        function xn(t, e) {
                            return t === e
                        }
                        var kn = Ce({
                                dispatchEvent: En,
                                addEventListener: Sn,
                                removeEventListener: wn
                            }),
                            jn = null;

                        function Rn() {
                            return jn || (jn = window.ShadyCSS && window.ShadyCSS.ScopingShim), jn || null
                        }

                        function Bn(t, e, n) {
                            var i = Rn();
                            return !(!i || "class" !== e) && (i.setElementClass(t, n), !0)
                        }

                        function Un(t, e) {
                            var n = Rn();
                            n && n.unscopeNode(t, e)
                        }

                        function Hn(t, e) {
                            var n = Rn();
                            if (!n) return !0;
                            if (t.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                for (n = !0, t = t.__shady_firstChild; t; t = t.__shady_nextSibling) n = n && Hn(t, e);
                                return n
                            }
                            return t.nodeType !== Node.ELEMENT_NODE || n.currentScopeForNode(t) === e
                        }

                        function Fn(t) {
                            if (t.nodeType !== Node.ELEMENT_NODE) return "";
                            var e = Rn();
                            return e ? e.currentScopeForNode(t) : ""
                        }

                        function Vn(t, e) {
                            if (t)
                                for (t.nodeType === Node.ELEMENT_NODE && e(t), t = t.__shady_firstChild; t; t = t.__shady_nextSibling) t.nodeType === Node.ELEMENT_NODE && Vn(t, e)
                        }
                        var Gn = window.document,
                            qn = re.fa,
                            Yn = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
                            Wn = Yn && Yn.get;

                        function zn(t) {
                            for (var e; e = t.__shady_firstChild;) t.__shady_removeChild(e)
                        }

                        function Kn(t) {
                            var e = ie(t);
                            if (e && void 0 !== e.qa)
                                for (e = t.__shady_firstChild; e; e = e.__shady_nextSibling) Kn(e);
                            (t = ie(t)) && (t.qa = void 0)
                        }

                        function Jn(t) {
                            var e = t;
                            if (t && "slot" === t.localName) {
                                var n = ie(t);
                                (n = n && n.aa) && (e = n.length ? n[0] : Jn(t.__shady_nextSibling))
                            }
                            return e
                        }

                        function Zn(t, e, n) {
                            if (t = (t = ie(t)) && t.ea) {
                                if (e)
                                    if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                                        for (var i = 0, r = e.childNodes.length; i < r; i++) t.addedNodes.push(e.childNodes[i]);
                                    else t.addedNodes.push(e);
                                n && t.removedNodes.push(n),
                                    function(t) {
                                        t.g || (t.g = !0, me((function() {
                                            t.flush()
                                        })))
                                    }(t)
                            }
                        }
                        var Xn = Ce({
                                get parentNode() {
                                    var t = ie(this);
                                    return void 0 !== (t = t && t.parentNode) ? t : this.__shady_native_parentNode
                                },
                                get firstChild() {
                                    var t = ie(this);
                                    return void 0 !== (t = t && t.firstChild) ? t : this.__shady_native_firstChild
                                },
                                get lastChild() {
                                    var t = ie(this);
                                    return void 0 !== (t = t && t.lastChild) ? t : this.__shady_native_lastChild
                                },
                                get nextSibling() {
                                    var t = ie(this);
                                    return void 0 !== (t = t && t.nextSibling) ? t : this.__shady_native_nextSibling
                                },
                                get previousSibling() {
                                    var t = ie(this);
                                    return void 0 !== (t = t && t.previousSibling) ? t : this.__shady_native_previousSibling
                                },
                                get childNodes() {
                                    if (se(this)) {
                                        var t = ie(this);
                                        if (!t.childNodes) {
                                            t.childNodes = [];
                                            for (var e = this.__shady_firstChild; e; e = e.__shady_nextSibling) t.childNodes.push(e)
                                        }
                                        var n = t.childNodes
                                    } else n = this.__shady_native_childNodes;
                                    return n.item = function(t) {
                                        return n[t]
                                    }, n
                                },
                                get parentElement() {
                                    var t = ie(this);
                                    return (t = t && t.parentNode) && t.nodeType !== Node.ELEMENT_NODE && (t = null), void 0 !== t ? t : this.__shady_native_parentElement
                                },
                                get isConnected() {
                                    if (Wn && Wn.call(this)) return !0;
                                    if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
                                    var t = this.ownerDocument;
                                    if (null === t || ve(t, this)) return !0;
                                    for (t = this; t && !(t instanceof Document);) t = t.__shady_parentNode || (le(t) ? t.host : void 0);
                                    return !!(t && t instanceof Document)
                                },
                                get textContent() {
                                    if (se(this)) {
                                        for (var t = [], e = this.__shady_firstChild; e; e = e.__shady_nextSibling) e.nodeType !== Node.COMMENT_NODE && t.push(e.__shady_textContent);
                                        return t.join("")
                                    }
                                    return this.__shady_native_textContent
                                },
                                set textContent(t) {
                                    switch (null == t && (t = ""), this.nodeType) {
                                        case Node.ELEMENT_NODE:
                                        case Node.DOCUMENT_FRAGMENT_NODE:
                                            if (!se(this) && re.H) {
                                                var e = this.__shady_firstChild;
                                                (e != this.__shady_lastChild || e && e.nodeType != Node.TEXT_NODE) && zn(this), this.__shady_native_textContent = t
                                            } else zn(this), (0 < t.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(t));
                                            break;
                                        default:
                                            this.nodeValue = t
                                    }
                                },
                                insertBefore: function(t, e) {
                                    if (this.ownerDocument !== Gn && t.ownerDocument !== Gn) return this.__shady_native_insertBefore(t, e), t;
                                    if (t === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
                                    if (e) {
                                        var n = ie(e);
                                        if (void 0 !== (n = n && n.parentNode) && n !== this || void 0 === n && e.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.")
                                    }
                                    if (e === t) return t;
                                    Zn(this, t);
                                    var i = [],
                                        r = (n = Qi(this)) ? n.host.localName : Fn(this),
                                        o = t.__shady_parentNode;
                                    if (o) {
                                        var a = Fn(t),
                                            s = !!n || !Qi(t) || qn && void 0 !== this.__noInsertionPoint;
                                        o.__shady_removeChild(t, s)
                                    }
                                    o = !0;
                                    var l = (!qn || void 0 === t.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !Hn(t, r),
                                        c = n && !t.__noInsertionPoint && (!qn || t.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
                                    return (c || l) && (l && (a = a || Fn(t)), Vn(t, (function(t) {
                                        if (c && "slot" === t.localName && i.push(t), l) {
                                            var e = a;
                                            Rn() && (e && Un(t, e), (e = Rn()) && e.scopeNode(t, r))
                                        }
                                    }))), i.length && (Yi(n), n.i.push.apply(n.i, u(i)), Hi(n)), se(this) && (function(t, e, n) {
                                        Mi(e, 2);
                                        var i = ne(e);
                                        if (void 0 !== i.firstChild && (i.childNodes = null), t.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                                            for (t = t.__shady_native_firstChild; t; t = t.__shady_native_nextSibling) Pi(t, e, i, n);
                                        else Pi(t, e, i, n)
                                    }(t, this, e), (s = ie(this)).root ? (o = !1, ue(this) && Hi(s.root)) : n && "slot" === this.localName && (o = !1, Hi(n))), o ? (n = le(this) ? this.host : this, e ? (e = Jn(e), n.__shady_native_insertBefore(t, e)) : n.__shady_native_appendChild(t)) : t.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(t), t
                                },
                                appendChild: function(t) {
                                    if (this != t || !le(t)) return this.__shady_insertBefore(t)
                                },
                                removeChild: function(t, e) {
                                    if (e = void 0 !== e && e, this.ownerDocument !== Gn) return this.__shady_native_removeChild(t);
                                    if (t.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + t);
                                    Zn(this, null, t);
                                    var n = Qi(t),
                                        i = n && function(t, e) {
                                            if (t.g) {
                                                Wi(t);
                                                var n, i = t.h;
                                                for (n in i)
                                                    for (var r = i[n], o = 0; o < r.length; o++) {
                                                        var a = r[o];
                                                        if (ye(e, a)) {
                                                            r.splice(o, 1);
                                                            var s = t.g.indexOf(a);
                                                            if (0 <= s && (t.g.splice(s, 1), (s = ie(a.__shady_parentNode)) && s.ia && s.ia--), o--, s = (a = ie(a)).aa)
                                                                for (var l = 0; l < s.length; l++) {
                                                                    var u = s[l],
                                                                        c = u.__shady_native_parentNode;
                                                                    c && c.__shady_native_removeChild(u)
                                                                }
                                                            a.aa = [], a.assignedNodes = [], s = !0
                                                        }
                                                    }
                                                return s
                                            }
                                        }(n, t),
                                        r = ie(this);
                                    if (se(this) && (function(t, e) {
                                            var n = ne(t);
                                            e = ne(e), t === e.firstChild && (e.firstChild = n.nextSibling), t === e.lastChild && (e.lastChild = n.previousSibling), t = n.previousSibling;
                                            var i = n.nextSibling;
                                            t && (ne(t).nextSibling = i), i && (ne(i).previousSibling = t), n.parentNode = n.previousSibling = n.nextSibling = void 0, void 0 !== e.childNodes && (e.childNodes = null)
                                        }(t, this), ue(this))) {
                                        Hi(r.root);
                                        var o = !0
                                    }
                                    if (Rn() && !e && n && t.nodeType !== Node.TEXT_NODE) {
                                        var a = Fn(t);
                                        Vn(t, (function(t) {
                                            Un(t, a)
                                        }))
                                    }
                                    return Kn(t), n && ((e = "slot" === this.localName) && (o = !0), (i || e) && Hi(n)), o || (o = le(this) ? this.host : this, (!r.root && "slot" !== t.localName || o === t.__shady_native_parentNode) && o.__shady_native_removeChild(t)), t
                                },
                                replaceChild: function(t, e) {
                                    return this.__shady_insertBefore(t, e), this.__shady_removeChild(e), t
                                },
                                cloneNode: function(t) {
                                    if ("template" == this.localName) return this.__shady_native_cloneNode(t);
                                    var e = this.__shady_native_cloneNode(!1);
                                    if (t && e.nodeType !== Node.ATTRIBUTE_NODE) {
                                        t = this.__shady_firstChild;
                                        for (var n; t; t = t.__shady_nextSibling) n = t.__shady_cloneNode(!0), e.__shady_appendChild(n)
                                    }
                                    return e
                                },
                                getRootNode: function(t) {
                                    if (this && this.nodeType) {
                                        var e = ne(this),
                                            n = e.qa;
                                        return void 0 === n && (le(this) ? (n = this, e.qa = n) : (n = (n = this.__shady_parentNode) ? n.__shady_getRootNode(t) : this, document.documentElement.__shady_native_contains(this) && (e.qa = n))), n
                                    }
                                },
                                contains: function(t) {
                                    return ye(this, t)
                                }
                            }),
                            $n = Ce({
                                get assignedSlot() {
                                    var t = this.__shady_parentNode;
                                    return (t = t && t.__shady_shadowRoot) && Fi(t), (t = ie(this)) && t.assignedSlot || null
                                }
                            });

                        function Qn(t, e, n) {
                            var i = [];
                            return ti(t, e, n, i), i
                        }

                        function ti(t, e, n, i) {
                            for (t = t.__shady_firstChild; t; t = t.__shady_nextSibling) {
                                var r;
                                if (r = t.nodeType === Node.ELEMENT_NODE) {
                                    var o = e,
                                        a = n,
                                        s = i,
                                        l = o(r = t);
                                    l && s.push(r), a && a(l) ? r = l : (ti(r, o, a, s), r = void 0)
                                }
                                if (r) break
                            }
                        }
                        var ei = {
                                get firstElementChild() {
                                    var t = ie(this);
                                    if (t && void 0 !== t.firstChild) {
                                        for (t = this.__shady_firstChild; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_nextSibling;
                                        return t
                                    }
                                    return this.__shady_native_firstElementChild
                                },
                                get lastElementChild() {
                                    var t = ie(this);
                                    if (t && void 0 !== t.lastChild) {
                                        for (t = this.__shady_lastChild; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_previousSibling;
                                        return t
                                    }
                                    return this.__shady_native_lastElementChild
                                },
                                get children() {
                                    return se(this) ? ge(Array.prototype.filter.call(be(this), (function(t) {
                                        return t.nodeType === Node.ELEMENT_NODE
                                    }))) : this.__shady_native_children
                                },
                                get childElementCount() {
                                    var t = this.__shady_children;
                                    return t ? t.length : 0
                                }
                            },
                            ni = Ce((ei.append = function(t) {
                                for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                this.__shady_insertBefore(Ae.apply(null, u(e)), null)
                            }, ei.prepend = function(t) {
                                for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                this.__shady_insertBefore(Ae.apply(null, u(e)), this.__shady_firstChild)
                            }, ei.replaceChildren = function(t) {
                                for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                for (; null !== (n = this.__shady_firstChild);) this.__shady_removeChild(n);
                                this.__shady_insertBefore(Ae.apply(null, u(e)), null)
                            }, ei)),
                            ii = Ce({
                                querySelector: function(t) {
                                    return Qn(this, (function(e) {
                                        return de.call(e, t)
                                    }), (function(t) {
                                        return !!t
                                    }))[0] || null
                                },
                                querySelectorAll: function(t, e) {
                                    if (e) {
                                        e = Array.prototype.slice.call(this.__shady_native_querySelectorAll(t));
                                        var n = this.__shady_getRootNode();
                                        return ge(e.filter((function(t) {
                                            return t.__shady_getRootNode() == n
                                        })))
                                    }
                                    return ge(Qn(this, (function(e) {
                                        return de.call(e, t)
                                    })))
                                }
                            }),
                            ri = re.fa && !re.J ? Oe({}, ni) : ni;
                        Oe(ni, ii);
                        var oi = Ce({
                                after: function(t) {
                                    for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                    if (null !== (n = this.__shady_parentNode)) {
                                        var i = this.__shady_nextSibling;
                                        n.__shady_insertBefore(Ae.apply(null, u(e)), i)
                                    }
                                },
                                before: function(t) {
                                    for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                    null !== (n = this.__shady_parentNode) && n.__shady_insertBefore(Ae.apply(null, u(e)), this)
                                },
                                remove: function() {
                                    var t = this.__shady_parentNode;
                                    null !== t && t.__shady_removeChild(this)
                                },
                                replaceWith: function(t) {
                                    for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                                    if (null !== (n = this.__shady_parentNode)) {
                                        var i = this.__shady_nextSibling;
                                        n.__shady_removeChild(this), n.__shady_insertBefore(Ae.apply(null, u(e)), i)
                                    }
                                }
                            }),
                            ai = window.document;

                        function si(t, e) {
                            if ("slot" === e) ue(t = t.__shady_parentNode) && Hi(ie(t).root);
                            else if ("slot" === t.localName && "name" === e && (e = Qi(t))) {
                                if (e.g) {
                                    Wi(e);
                                    var n = t.Qa,
                                        i = zi(t);
                                    if (i !== n) {
                                        var r = (n = e.h[n]).indexOf(t);
                                        0 <= r && n.splice(r, 1), (n = e.h[i] || (e.h[i] = [])).push(t), 1 < n.length && (e.h[i] = Ki(n))
                                    }
                                }
                                Hi(e)
                            }
                        }
                        var li = Ce({
                            get previousElementSibling() {
                                var t = ie(this);
                                if (t && void 0 !== t.previousSibling) {
                                    for (t = this.__shady_previousSibling; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_previousSibling;
                                    return t
                                }
                                return this.__shady_native_previousElementSibling
                            },
                            get nextElementSibling() {
                                var t = ie(this);
                                if (t && void 0 !== t.nextSibling) {
                                    for (t = this.__shady_nextSibling; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_nextSibling;
                                    return t
                                }
                                return this.__shady_native_nextElementSibling
                            },
                            get slot() {
                                return this.getAttribute("slot")
                            },
                            set slot(t) {
                                this.__shady_setAttribute("slot", t)
                            },
                            get className() {
                                return this.getAttribute("class") || ""
                            },
                            set className(t) {
                                this.__shady_setAttribute("class", t)
                            },
                            setAttribute: function(t, e) {
                                this.ownerDocument !== ai ? this.__shady_native_setAttribute(t, e) : Bn(this, t, e) || (this.__shady_native_setAttribute(t, e), si(this, t))
                            },
                            removeAttribute: function(t) {
                                this.ownerDocument !== ai ? this.__shady_native_removeAttribute(t) : Bn(this, t, "") ? "" === this.getAttribute(t) && this.__shady_native_removeAttribute(t) : (this.__shady_native_removeAttribute(t), si(this, t))
                            }
                        });
                        re.fa || Mn.forEach((function(t) {
                            li[t] = Dn(t)
                        }));
                        var ui = Ce({
                            attachShadow: function(t) {
                                if (!this) throw Error("Must provide a host.");
                                if (!t) throw Error("Not enough arguments.");
                                if (t.shadyUpgradeFragment && !re.Na) {
                                    var e = t.shadyUpgradeFragment;
                                    if (e.__proto__ = ShadowRoot.prototype, Ui(e, this, t), Di(e, e), t = e.__noInsertionPoint ? null : e.querySelectorAll("slot"), e.__noInsertionPoint = void 0, t && t.length) {
                                        var n = e;
                                        Yi(n), n.i.push.apply(n.i, u(t)), Hi(e)
                                    }
                                    e.host.__shady_native_appendChild(e)
                                } else e = new Bi(ki, this, t);
                                return this.__CE_shadowRoot = e
                            },
                            get shadowRoot() {
                                var t = ie(this);
                                return t && t.gb || null
                            }
                        });
                        Oe(li, ui);
                        var ci = document.implementation.createHTMLDocument("inert"),
                            di = Ce({
                                get innerHTML() {
                                    return se(this) ? Ue("template" === this.localName ? this.content : this, be) : this.__shady_native_innerHTML
                                },
                                set innerHTML(t) {
                                    if ("template" === this.localName) this.__shady_native_innerHTML = t;
                                    else {
                                        zn(this);
                                        var e = this.localName || "div";
                                        for (e = this.namespaceURI && this.namespaceURI !== ci.namespaceURI ? ci.createElementNS(this.namespaceURI, e) : ci.createElement(e), re.H ? e.__shady_native_innerHTML = t : e.innerHTML = t; t = e.__shady_firstChild;) this.__shady_insertBefore(t)
                                    }
                                }
                            }),
                            hi = Ce({
                                blur: function() {
                                    var t = ie(this);
                                    (t = (t = t && t.root) && t.activeElement) ? t.__shady_blur(): this.__shady_native_blur()
                                }
                            });
                        re.fa || Pn.forEach((function(t) {
                            hi[t] = Dn(t)
                        }));
                        var fi = Ce({
                                assignedNodes: function(t) {
                                    if ("slot" === this.localName) {
                                        var e = this.__shady_getRootNode();
                                        return e && le(e) && Fi(e), (e = ie(this)) && (t && t.flatten ? e.aa : e.assignedNodes) || []
                                    }
                                },
                                addEventListener: function(t, e, n) {
                                    if ("slot" !== this.localName || "slotchange" === t) Sn.call(this, t, e, n);
                                    else {
                                        "object" != typeof n && (n = {
                                            capture: !!n
                                        });
                                        var i = this.__shady_parentNode;
                                        if (!i) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                                        n.U = this, i.__shady_addEventListener(t, e, n)
                                    }
                                },
                                removeEventListener: function(t, e, n) {
                                    if ("slot" !== this.localName || "slotchange" === t) wn.call(this, t, e, n);
                                    else {
                                        "object" != typeof n && (n = {
                                            capture: !!n
                                        });
                                        var i = this.__shady_parentNode;
                                        if (!i) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                                        n.U = this, i.__shady_removeEventListener(t, e, n)
                                    }
                                }
                            }),
                            pi = Ce({
                                getElementById: function(t) {
                                    return "" === t ? null : Qn(this, (function(e) {
                                        return e.id == t
                                    }), (function(t) {
                                        return !!t
                                    }))[0] || null
                                }
                            });

                        function mi(t, e) {
                            for (var n; e && !t.has(n = e.__shady_getRootNode());) e = n.host;
                            return e
                        }
                        var vi = "__shady_native_" + ae(),
                            yi = Ce({
                                get activeElement() {
                                    var t = re.H ? document.__shady_native_activeElement : document.activeElement;
                                    if (!t || !t.nodeType) return null;
                                    var e = !!le(this);
                                    if (!(this === document || e && this.host !== t && this.host.__shady_native_contains(t))) return null;
                                    for (e = Qi(t); e && e !== this;) e = Qi(t = e.host);
                                    return this === document ? e ? null : t : e === this ? t : null
                                },
                                elementsFromPoint: function(t, e) {
                                    t = [].slice.call(document[vi](t, e)), e = function(t) {
                                        var e = new Set;
                                        for (e.add(t); le(t) && t.host;) t = t.host.__shady_getRootNode(), e.add(t);
                                        return e
                                    }(this);
                                    for (var n = new Set, i = 0; i < t.length; i++) n.add(mi(e, t[i]));
                                    var r = [];
                                    return n.forEach((function(t) {
                                        return r.push(t)
                                    })), r
                                },
                                elementFromPoint: function(t, e) {
                                    return this.__shady_elementsFromPoint(t, e)[0] || null
                                }
                            }),
                            gi = window.document,
                            _i = Ce({
                                importNode: function(t, e) {
                                    if (t.ownerDocument !== gi || "template" === t.localName) return this.__shady_native_importNode(t, e);
                                    var n = this.__shady_native_importNode(t, !1);
                                    if (e)
                                        for (t = t.__shady_firstChild; t; t = t.__shady_nextSibling) e = this.__shady_importNode(t, !0), n.__shady_appendChild(e);
                                    return n
                                }
                            }),
                            bi = Ce({
                                dispatchEvent: En,
                                addEventListener: Sn.bind(window),
                                removeEventListener: wn.bind(window)
                            }),
                            Ei = {};
                        Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Ei.parentElement = Xn.parentElement), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Ei.contains = Xn.contains), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Ei.children = ni.children), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Ei.innerHTML = di.innerHTML), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Ei.className = li.className);
                        var Si = {
                                EventTarget: [kn],
                                Node: [Xn, window.EventTarget ? null : kn],
                                Text: [$n],
                                Comment: [$n],
                                CDATASection: [$n],
                                ProcessingInstruction: [$n],
                                Element: [li, ni, oi, $n, !re.H || "innerHTML" in Element.prototype ? di : null, window.HTMLSlotElement ? null : fi],
                                HTMLElement: [hi, Ei],
                                HTMLSlotElement: [fi],
                                DocumentFragment: [ri, pi],
                                Document: [_i, ri, pi, yi],
                                Window: [bi],
                                CharacterData: [oi]
                            },
                            wi = re.H ? null : ["innerHTML", "textContent"];

                        function Ci(t, e, n, i) {
                            e.forEach((function(e) {
                                return t && e && Se(t, e, n, i)
                            }))
                        }

                        function Oi(t) {
                            var e, n = t ? null : wi;
                            for (e in Si) Ci(window[e] && window[e].prototype, Si[e], t, n)
                        }

                        function Ti(t) {
                            return t.__shady_protoIsPatched = !0, Ci(t, Si.EventTarget), Ci(t, Si.Node), Ci(t, Si.Element), Ci(t, Si.HTMLElement), Ci(t, Si.HTMLSlotElement), t
                        } ["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach((function(t) {
                            var e = window[t],
                                n = Object.create(e.prototype);
                            n.__shady_protoIsPatched = !0, Ci(n, Si.EventTarget), Ci(n, Si.Node), Si[t] && Ci(n, Si[t]), e.prototype.__shady_patchedProto = n
                        }));
                        var Ai = re.Aa,
                            Ni = re.H;

                        function Mi(t, e) {
                            if (Ai && !t.__shady_protoIsPatched && !le(t)) {
                                var n = Object.getPrototypeOf(t),
                                    i = n.hasOwnProperty("__shady_patchedProto") && n.__shady_patchedProto;
                                i || (Ti(i = Object.create(n)), n.__shady_patchedProto = i), Object.setPrototypeOf(t, i)
                            }
                            Ni || (1 === e ? rn(t) : 2 === e && on(t))
                        }

                        function Pi(t, e, n, i) {
                            Mi(t, 1), i = i || null;
                            var r = ne(t),
                                o = i ? ne(i) : null;
                            r.previousSibling = i ? o.previousSibling : e.__shady_lastChild, (o = ie(r.previousSibling)) && (o.nextSibling = t), (o = ie(r.nextSibling = i)) && (o.previousSibling = t), r.parentNode = e, i ? i === n.firstChild && (n.firstChild = t) : (n.lastChild = t, n.firstChild || (n.firstChild = t)), n.childNodes = null
                        }

                        function Di(t, e) {
                            var n = ne(t);
                            if (e || void 0 === n.firstChild) {
                                n.childNodes = null;
                                var i = n.firstChild = t.__shady_native_firstChild;
                                for (n.lastChild = t.__shady_native_lastChild, Mi(t, 2), n = i, i = void 0; n; n = n.__shady_native_nextSibling) {
                                    var r = ne(n);
                                    r.parentNode = e || t, r.nextSibling = n.__shady_native_nextSibling, r.previousSibling = i || null, i = n, Mi(n, 1)
                                }
                            }
                        }
                        var Li = Ce({
                            addEventListener: function(t, e, n) {
                                "object" != typeof n && (n = {
                                    capture: !!n
                                }), n.U = n.U || this, this.host.__shady_addEventListener(t, e, n)
                            },
                            removeEventListener: function(t, e, n) {
                                "object" != typeof n && (n = {
                                    capture: !!n
                                }), n.U = n.U || this, this.host.__shady_removeEventListener(t, e, n)
                            }
                        });

                        function Ii(t, e) {
                            Se(t, Li, e), Se(t, yi, e), Se(t, di, e), Se(t, ni, e), re.J && !e ? (Se(t, Xn, e), Se(t, pi, e)) : re.H || (Se(t, tn), Se(t, $e), Se(t, Qe))
                        }
                        var xi, ki = {},
                            ji = re.deferConnectionCallbacks && "loading" === document.readyState;

                        function Ri(t) {
                            var e = [];
                            do {
                                e.unshift(t)
                            } while (t = t.__shady_parentNode);
                            return e
                        }

                        function Bi(t, e, n) {
                            if (t !== ki) throw new TypeError("Illegal constructor");
                            this.g = null, Ui(this, e, n)
                        }

                        function Ui(t, e, n) {
                            if (t.host = e, t.mode = n && n.mode, Di(t.host), (e = ne(t.host)).root = t, e.gb = "closed" !== t.mode ? t : null, (e = ne(t)).firstChild = e.lastChild = e.parentNode = e.nextSibling = e.previousSibling = null, re.preferPerformance)
                                for (; e = t.host.__shady_native_firstChild;) t.host.__shady_native_removeChild(e);
                            else Hi(t)
                        }

                        function Hi(t) {
                            t.Y || (t.Y = !0, Pe((function() {
                                return Fi(t)
                            })))
                        }

                        function Fi(t) {
                            var e;
                            if (e = t.Y) {
                                for (var n; t;) t.Y && (n = t), le(t = (e = t).host.__shady_getRootNode()) && (e = ie(e.host)) && 0 < e.ia || (t = void 0);
                                e = n
                            }(n = e) && n._renderSelf()
                        }

                        function Vi(t, e, n) {
                            var i = ne(e),
                                r = i.ua;
                            i.ua = null, n || (n = (t = t.h[e.__shady_slot || "__catchall"]) && t[0]), n ? (ne(n).assignedNodes.push(e), i.assignedSlot = n) : i.assignedSlot = void 0, r !== i.assignedSlot && i.assignedSlot && (ne(i.assignedSlot).xa = !0)
                        }

                        function Gi(t, e, n) {
                            for (var i = 0, r = void 0; i < n.length && (r = n[i]); i++)
                                if ("slot" == r.localName) {
                                    var o = ie(r).assignedNodes;
                                    o && o.length && Gi(t, e, o)
                                } else e.push(n[i])
                        }

                        function qi(t, e) {
                            e.__shady_native_dispatchEvent(new Event("slotchange")), (e = ie(e)).assignedSlot && qi(t, e.assignedSlot)
                        }

                        function Yi(t) {
                            t.i = t.i || [], t.g = t.g || [], t.h = t.h || {}
                        }

                        function Wi(t) {
                            if (t.i && t.i.length) {
                                for (var e, n = t.i, i = 0; i < n.length; i++) {
                                    var r = n[i];
                                    Di(r);
                                    var o = r.__shady_parentNode;
                                    Di(o), (o = ie(o)).ia = (o.ia || 0) + 1, o = zi(r), t.h[o] ? ((e = e || {})[o] = !0, t.h[o].push(r)) : t.h[o] = [r], t.g.push(r)
                                }
                                if (e)
                                    for (var a in e) t.h[a] = Ki(t.h[a]);
                                t.i = []
                            }
                        }

                        function zi(t) {
                            var e = t.name || t.getAttribute("name") || "__catchall";
                            return t.Qa = e
                        }

                        function Ki(t) {
                            return t.sort((function(t, e) {
                                t = Ri(t);
                                for (var n = Ri(e), i = 0; i < t.length; i++) {
                                    e = t[i];
                                    var r = n[i];
                                    if (e !== r) return (t = be(e.__shady_parentNode)).indexOf(e) - t.indexOf(r)
                                }
                            }))
                        }

                        function Ji(t) {
                            return Wi(t), !(!t.g || !t.g.length)
                        }
                        if (Bi.prototype._renderSelf = function() {
                                var t = ji;
                                if (ji = !0, this.Y = !1, this.g) {
                                    Wi(this);
                                    for (var e, n = 0; n < this.g.length; n++) {
                                        var i = ie(e = this.g[n]),
                                            r = i.assignedNodes;
                                        if (i.assignedNodes = [], i.aa = [], i.Ga = r)
                                            for (i = 0; i < r.length; i++) {
                                                var o = ie(r[i]);
                                                o.ua = o.assignedSlot, o.assignedSlot === e && (o.assignedSlot = null)
                                            }
                                    }
                                    for (n = this.host.__shady_firstChild; n; n = n.__shady_nextSibling) Vi(this, n);
                                    for (n = 0; n < this.g.length; n++) {
                                        if (!(r = ie(e = this.g[n])).assignedNodes.length)
                                            for (i = e.__shady_firstChild; i; i = i.__shady_nextSibling) Vi(this, i, e);
                                        if ((i = (i = ie(e.__shady_parentNode)) && i.root) && (Ji(i) || i.Y) && i._renderSelf(), Gi(this, r.aa, r.assignedNodes), i = r.Ga) {
                                            for (o = 0; o < i.length; o++) ie(i[o]).ua = null;
                                            r.Ga = null, i.length > r.assignedNodes.length && (r.xa = !0)
                                        }
                                        r.xa && (r.xa = !1, qi(this, e))
                                    }
                                    for (e = this.g, n = [], r = 0; r < e.length; r++)(o = ie(i = e[r].__shady_parentNode)) && o.root || !(0 > n.indexOf(i)) || n.push(i);
                                    for (e = 0; e < n.length; e++) {
                                        for (r = (o = n[e]) === this ? this.host : o, i = [], o = o.__shady_firstChild; o; o = o.__shady_nextSibling)
                                            if ("slot" == o.localName)
                                                for (var a = ie(o).aa, s = 0; s < a.length; s++) i.push(a[s]);
                                            else i.push(o);
                                        o = _e(r), a = In(i, i.length, o, o.length);
                                        for (var l = s = 0, u = void 0; s < a.length && (u = a[s]); s++) {
                                            for (var c = 0, d = void 0; c < u.ga.length && (d = u.ga[c]); c++) d.__shady_native_parentNode === r && r.__shady_native_removeChild(d), o.splice(u.index + l, 1);
                                            l -= u.na
                                        }
                                        for (l = 0, u = void 0; l < a.length && (u = a[l]); l++)
                                            for (s = o[u.index], c = u.index; c < u.index + u.na; c++) d = i[c], r.__shady_native_insertBefore(d, s), o.splice(c, 0, d)
                                    }
                                }
                                if (!re.preferPerformance && !this.Fa)
                                    for (n = this.host.__shady_firstChild; n; n = n.__shady_nextSibling) e = ie(n), n.__shady_native_parentNode !== this.host || "slot" !== n.localName && e.assignedSlot || this.host.__shady_native_removeChild(n);
                                this.Fa = !0, ji = t, xi && xi()
                            }, function(t) {
                                t.__proto__ = DocumentFragment.prototype, Ii(t, "__shady_"), Ii(t), Object.defineProperties(t, {
                                    nodeType: {
                                        value: Node.DOCUMENT_FRAGMENT_NODE,
                                        configurable: !0
                                    },
                                    nodeName: {
                                        value: "#document-fragment",
                                        configurable: !0
                                    },
                                    nodeValue: {
                                        value: null,
                                        configurable: !0
                                    }
                                }), ["localName", "namespaceURI", "prefix"].forEach((function(e) {
                                    Object.defineProperty(t, e, {
                                        value: void 0,
                                        configurable: !0
                                    })
                                })), ["ownerDocument", "baseURI", "isConnected"].forEach((function(e) {
                                    Object.defineProperty(t, e, {
                                        get: function() {
                                            return this.host[e]
                                        },
                                        configurable: !0
                                    })
                                }))
                            }(Bi.prototype), window.customElements && window.customElements.define && re.ya && !re.preferPerformance) {
                            var Zi = new Map;
                            xi = function() {
                                var t = [];
                                Zi.forEach((function(e, n) {
                                    t.push([n, e])
                                })), Zi.clear();
                                for (var e = 0; e < t.length; e++) {
                                    var n = t[e][0];
                                    t[e][1] ? n.__shadydom_connectedCallback() : n.__shadydom_disconnectedCallback()
                                }
                            }, ji && document.addEventListener("readystatechange", (function() {
                                ji = !1, xi()
                            }), {
                                once: !0
                            });
                            var Xi = window.customElements.define,
                                $i = function(t, e) {
                                    var n = e.prototype.connectedCallback,
                                        i = e.prototype.disconnectedCallback;
                                    Xi.call(window.customElements, t, function(t, e, n) {
                                        var i = 0,
                                            r = "__isConnected" + i++;
                                        return (e || n) && (t.prototype.connectedCallback = t.prototype.__shadydom_connectedCallback = function() {
                                            ji ? Zi.set(this, !0) : this[r] || (this[r] = !0, e && e.call(this))
                                        }, t.prototype.disconnectedCallback = t.prototype.__shadydom_disconnectedCallback = function() {
                                            ji ? this.isConnected || Zi.set(this, !1) : this[r] && (this[r] = !1, n && n.call(this))
                                        }), t
                                    }(e, n, i)), e.prototype.connectedCallback = n, e.prototype.disconnectedCallback = i
                                };
                            window.customElements.define = $i, Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
                                value: $i,
                                configurable: !0
                            })
                        }

                        function Qi(t) {
                            if (le(t = t.__shady_getRootNode())) return t
                        }

                        function tr(t) {
                            this.node = t
                        }

                        function er(t) {
                            Object.defineProperty(tr.prototype, t, {
                                get: function() {
                                    return this.node["__shady_" + t]
                                },
                                set: function(e) {
                                    this.node["__shady_" + t] = e
                                },
                                configurable: !0
                            })
                        }(t = tr.prototype).addEventListener = function(t, e, n) {
                            return this.node.__shady_addEventListener(t, e, n)
                        }, t.removeEventListener = function(t, e, n) {
                            return this.node.__shady_removeEventListener(t, e, n)
                        }, t.appendChild = function(t) {
                            return this.node.__shady_appendChild(t)
                        }, t.insertBefore = function(t, e) {
                            return this.node.__shady_insertBefore(t, e)
                        }, t.removeChild = function(t) {
                            return this.node.__shady_removeChild(t)
                        }, t.replaceChild = function(t, e) {
                            return this.node.__shady_replaceChild(t, e)
                        }, t.cloneNode = function(t) {
                            return this.node.__shady_cloneNode(t)
                        }, t.getRootNode = function(t) {
                            return this.node.__shady_getRootNode(t)
                        }, t.contains = function(t) {
                            return this.node.__shady_contains(t)
                        }, t.dispatchEvent = function(t) {
                            return this.node.__shady_dispatchEvent(t)
                        }, t.setAttribute = function(t, e) {
                            this.node.__shady_setAttribute(t, e)
                        }, t.getAttribute = function(t) {
                            return this.node.__shady_native_getAttribute(t)
                        }, t.hasAttribute = function(t) {
                            return this.node.__shady_native_hasAttribute(t)
                        }, t.removeAttribute = function(t) {
                            this.node.__shady_removeAttribute(t)
                        }, t.attachShadow = function(t) {
                            return this.node.__shady_attachShadow(t)
                        }, t.focus = function() {
                            this.node.__shady_native_focus()
                        }, t.blur = function() {
                            this.node.__shady_blur()
                        }, t.importNode = function(t, e) {
                            if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(t, e)
                        }, t.getElementById = function(t) {
                            if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(t)
                        }, t.elementsFromPoint = function(t, e) {
                            return this.node.__shady_elementsFromPoint(t, e)
                        }, t.elementFromPoint = function(t, e) {
                            return this.node.__shady_elementFromPoint(t, e)
                        }, t.querySelector = function(t) {
                            return this.node.__shady_querySelector(t)
                        }, t.querySelectorAll = function(t, e) {
                            return this.node.__shady_querySelectorAll(t, e)
                        }, t.assignedNodes = function(t) {
                            if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(t)
                        }, t.append = function(t) {
                            for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                            return this.node.__shady_append.apply(this.node, u(e))
                        }, t.prepend = function(t) {
                            for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                            return this.node.__shady_prepend.apply(this.node, u(e))
                        }, t.after = function(t) {
                            for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                            return this.node.__shady_after.apply(this.node, u(e))
                        }, t.before = function(t) {
                            for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                            return this.node.__shady_before.apply(this.node, u(e))
                        }, t.remove = function() {
                            return this.node.__shady_remove()
                        }, t.replaceWith = function(t) {
                            for (var e = [], n = 0; n < arguments.length; ++n) e[n] = arguments[n];
                            return this.node.__shady_replaceWith.apply(this.node, u(e))
                        }, o.Object.defineProperties(tr.prototype, {
                            activeElement: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    if (le(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement
                                }
                            },
                            _activeElement: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.activeElement
                                }
                            },
                            host: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    if (le(this.node)) return this.node.host
                                }
                            },
                            parentNode: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_parentNode
                                }
                            },
                            firstChild: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_firstChild
                                }
                            },
                            lastChild: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_lastChild
                                }
                            },
                            nextSibling: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_nextSibling
                                }
                            },
                            previousSibling: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_previousSibling
                                }
                            },
                            childNodes: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_childNodes
                                }
                            },
                            parentElement: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_parentElement
                                }
                            },
                            firstElementChild: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_firstElementChild
                                }
                            },
                            lastElementChild: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_lastElementChild
                                }
                            },
                            nextElementSibling: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_nextElementSibling
                                }
                            },
                            previousElementSibling: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_previousElementSibling
                                }
                            },
                            children: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_children
                                }
                            },
                            childElementCount: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_childElementCount
                                }
                            },
                            shadowRoot: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_shadowRoot
                                }
                            },
                            assignedSlot: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_assignedSlot
                                }
                            },
                            isConnected: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_isConnected
                                }
                            },
                            innerHTML: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_innerHTML
                                },
                                set: function(t) {
                                    this.node.__shady_innerHTML = t
                                }
                            },
                            textContent: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_textContent
                                },
                                set: function(t) {
                                    this.node.__shady_textContent = t
                                }
                            },
                            slot: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_slot
                                },
                                set: function(t) {
                                    this.node.__shady_slot = t
                                }
                            },
                            className: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return this.node.__shady_className
                                },
                                set: function(t) {
                                    this.node.__shady_className = t
                                }
                            }
                        }), Mn.forEach((function(t) {
                            return er(t)
                        })), Pn.forEach((function(t) {
                            return er(t)
                        }));
                        var nr = new WeakMap;

                        function ir(t) {
                            if (le(t) || t instanceof tr) return t;
                            var e = nr.get(t);
                            return e || (e = new tr(t), nr.set(t, e)), e
                        }
                        if (re.ya) {
                            var rr = re.H ? function(t) {
                                    return t
                                } : function(t) {
                                    return on(t), rn(t), t
                                },
                                or = {
                                    inUse: re.ya,
                                    patch: rr,
                                    isShadyRoot: le,
                                    enqueue: Pe,
                                    flush: De,
                                    flushInitial: function(t) {
                                        !t.Fa && t.Y && Fi(t)
                                    },
                                    settings: re,
                                    filterMutations: function(t, e) {
                                        var n = e.getRootNode();
                                        return t.map((function(t) {
                                            var e = n === t.target.getRootNode();
                                            if (e && t.addedNodes) {
                                                if ((e = [].slice.call(t.addedNodes).filter((function(t) {
                                                        return n === t.getRootNode()
                                                    }))).length) return t = Object.create(t), Object.defineProperty(t, "addedNodes", {
                                                    value: e,
                                                    configurable: !0
                                                }), t
                                            } else if (e) return t
                                        })).filter((function(t) {
                                            return t
                                        }))
                                    },
                                    observeChildren: function(t, e) {
                                        var n = ne(t);
                                        n.ea || (n.ea = new Le), n.ea.oa.add(e);
                                        var i = n.ea;
                                        return {
                                            Ra: e,
                                            X: i,
                                            Sa: t,
                                            takeRecords: function() {
                                                return i.takeRecords()
                                            }
                                        }
                                    },
                                    unobserveChildren: function(t) {
                                        var e = t && t.X;
                                        e && (e.oa.delete(t.Ra), e.oa.size || (ne(t.Sa).ea = null))
                                    },
                                    deferConnectionCallbacks: re.deferConnectionCallbacks,
                                    preferPerformance: re.preferPerformance,
                                    handlesDynamicScoping: !0,
                                    wrap: re.J ? ir : rr,
                                    wrapIfNeeded: !0 === re.J ? ir : function(t) {
                                        return t
                                    },
                                    Wrapper: tr,
                                    composedPath: function(t) {
                                        return t.__composedPath || (t.__composedPath = fn(t.target, !0)), t.__composedPath
                                    },
                                    noPatch: re.J,
                                    patchOnDemand: re.Aa,
                                    nativeMethods: Fe,
                                    nativeTree: Ve,
                                    patchElementProto: Ti
                                };
                            window.ShadyDOM = or,
                                function() {
                                    var t = ["dispatchEvent", "addEventListener", "removeEventListener"];
                                    window.EventTarget ? (Ye(window.EventTarget.prototype, t), void 0 === window.__shady_native_addEventListener && Ye(Window.prototype, t)) : (Ye(Node.prototype, t), Ye(Window.prototype, t)), He ? Ye(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : qe(Node.prototype, {
                                        parentNode: {
                                            get: function() {
                                                return We.currentNode = this, We.parentNode()
                                            }
                                        },
                                        firstChild: {
                                            get: function() {
                                                return We.currentNode = this, We.firstChild()
                                            }
                                        },
                                        lastChild: {
                                            get: function() {
                                                return We.currentNode = this, We.lastChild()
                                            }
                                        },
                                        previousSibling: {
                                            get: function() {
                                                return We.currentNode = this, We.previousSibling()
                                            }
                                        },
                                        nextSibling: {
                                            get: function() {
                                                return We.currentNode = this, We.nextSibling()
                                            }
                                        },
                                        childNodes: {
                                            get: function() {
                                                var t = [];
                                                We.currentNode = this;
                                                for (var e = We.firstChild(); e;) t.push(e), e = We.nextSibling();
                                                return t
                                            }
                                        },
                                        parentElement: {
                                            get: function() {
                                                return ze.currentNode = this, ze.parentNode()
                                            }
                                        },
                                        textContent: {
                                            get: function() {
                                                switch (this.nodeType) {
                                                    case Node.ELEMENT_NODE:
                                                    case Node.DOCUMENT_FRAGMENT_NODE:
                                                        for (var t, e = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), n = ""; t = e.nextNode();) n += t.nodeValue;
                                                        return n;
                                                    default:
                                                        return this.nodeValue
                                                }
                                            },
                                            set: function(t) {
                                                switch (null == t && (t = ""), this.nodeType) {
                                                    case Node.ELEMENT_NODE:
                                                    case Node.DOCUMENT_FRAGMENT_NODE:
                                                        Je(this), (0 < t.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(t), void 0);
                                                        break;
                                                    default:
                                                        this.nodeValue = t
                                                }
                                            }
                                        }
                                    }), Ye(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" ")), Ye(HTMLElement.prototype, ["parentElement", "contains"]), t = {
                                        firstElementChild: {
                                            get: function() {
                                                return ze.currentNode = this, ze.firstChild()
                                            }
                                        },
                                        lastElementChild: {
                                            get: function() {
                                                return ze.currentNode = this, ze.lastChild()
                                            }
                                        },
                                        children: {
                                            get: function() {
                                                var t = [];
                                                ze.currentNode = this;
                                                for (var e = ze.firstChild(); e;) t.push(e), e = ze.nextSibling();
                                                return ge(t)
                                            }
                                        },
                                        childElementCount: {
                                            get: function() {
                                                return this.children ? this.children.length : 0
                                            }
                                        }
                                    }, He ? (Ye(Element.prototype, Ze), Ye(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), Ye(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (qe(Element.prototype, t), qe(Element.prototype, {
                                        previousElementSibling: {
                                            get: function() {
                                                return ze.currentNode = this, ze.previousSibling()
                                            }
                                        },
                                        nextElementSibling: {
                                            get: function() {
                                                return ze.currentNode = this, ze.nextSibling()
                                            }
                                        },
                                        innerHTML: {
                                            get: function() {
                                                return Ue(this, _e)
                                            },
                                            set: function(t) {
                                                var e = "template" === this.localName ? this.content : this;
                                                Je(e);
                                                var n = this.localName || "div";
                                                for ((n = this.namespaceURI && this.namespaceURI !== Ke.namespaceURI ? Ke.createElementNS(this.namespaceURI, n) : Ke.createElement(n)).innerHTML = t, t = "template" === this.localName ? n.content : n; n = t.__shady_native_firstChild;) e.__shady_native_insertBefore(n, void 0)
                                            }
                                        },
                                        className: {
                                            get: function() {
                                                return this.getAttribute("class") || ""
                                            },
                                            set: function(t) {
                                                this.setAttribute("class", t)
                                            }
                                        }
                                    })), Ye(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" ")), Ye(Element.prototype, Xe), Ye(HTMLElement.prototype, ["focus", "blur"]), window.HTMLTemplateElement && Ye(window.HTMLTemplateElement.prototype, ["innerHTML"]), He ? Ye(DocumentFragment.prototype, Ze) : qe(DocumentFragment.prototype, t), Ye(DocumentFragment.prototype, Xe), He ? (Ye(Document.prototype, Ze), Ye(Document.prototype, ["activeElement"])) : qe(Document.prototype, t), Ye(Document.prototype, ["importNode", "getElementById", "elementFromPoint", ae()]), Ye(Document.prototype, Xe)
                                }(), Oi("__shady_"), Object.defineProperty(document, "_activeElement", yi.activeElement), Se(Window.prototype, bi, "__shady_"), re.J ? re.Aa && Se(Element.prototype, ui) : (Oi(), function() {
                                    if (!sn && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
                                        var t = function() {
                                            var t = new MouseEvent("click", {
                                                bubbles: !0,
                                                cancelable: !0,
                                                composed: !0
                                            });
                                            this.__shady_dispatchEvent(t)
                                        };
                                        Element.prototype.click ? Element.prototype.click = t : HTMLElement.prototype.click && (HTMLElement.prototype.click = t)
                                    }
                                }()),
                                function() {
                                    for (var t in vn) window.__shady_native_addEventListener(t, (function(t) {
                                        t.__target || (On(t), _n(t))
                                    }), !0)
                                }(), window.Event = Tn, window.CustomEvent = An, window.MouseEvent = Nn, window.ShadowRoot = Bi
                        }
                        var ar = window.Document.prototype.createElement,
                            sr = window.Document.prototype.createElementNS,
                            lr = window.Document.prototype.importNode,
                            ur = window.Document.prototype.prepend,
                            cr = window.Document.prototype.append,
                            dr = window.DocumentFragment.prototype.prepend,
                            hr = window.DocumentFragment.prototype.append,
                            fr = window.Node.prototype.cloneNode,
                            pr = window.Node.prototype.appendChild,
                            mr = window.Node.prototype.insertBefore,
                            vr = window.Node.prototype.removeChild,
                            yr = window.Node.prototype.replaceChild,
                            gr = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
                            _r = window.Element.prototype.attachShadow,
                            br = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
                            Er = window.Element.prototype.getAttribute,
                            Sr = window.Element.prototype.setAttribute,
                            wr = window.Element.prototype.removeAttribute,
                            Cr = window.Element.prototype.getAttributeNS,
                            Or = window.Element.prototype.setAttributeNS,
                            Tr = window.Element.prototype.removeAttributeNS,
                            Ar = window.Element.prototype.insertAdjacentElement,
                            Nr = window.Element.prototype.insertAdjacentHTML,
                            Mr = window.Element.prototype.prepend,
                            Pr = window.Element.prototype.append,
                            Dr = window.Element.prototype.before,
                            Lr = window.Element.prototype.after,
                            Ir = window.Element.prototype.replaceWith,
                            xr = window.Element.prototype.remove,
                            kr = window.HTMLElement,
                            jr = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
                            Rr = window.HTMLElement.prototype.insertAdjacentElement,
                            Br = window.HTMLElement.prototype.insertAdjacentHTML,
                            Ur = new Set;

                        function Hr(t) {
                            var e = Ur.has(t);
                            return t = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t), !e && t
                        }
                        "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach((function(t) {
                            return Ur.add(t)
                        }));
                        var Fr = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);

                        function Vr(t) {
                            var e = t.isConnected;
                            if (void 0 !== e) return e;
                            if (Fr(t)) return !0;
                            for (; t && !(t.__CE_isImportDocument || t instanceof Document);) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
                            return !(!t || !(t.__CE_isImportDocument || t instanceof Document))
                        }

                        function Gr(t) {
                            var e = t.children;
                            if (e) return Array.prototype.slice.call(e);
                            for (e = [], t = t.firstChild; t; t = t.nextSibling) t.nodeType === Node.ELEMENT_NODE && e.push(t);
                            return e
                        }

                        function qr(t, e) {
                            for (; e && e !== t && !e.nextSibling;) e = e.parentNode;
                            return e && e !== t ? e.nextSibling : null
                        }

                        function Yr(t, e, n) {
                            for (var i = t; i;) {
                                if (i.nodeType === Node.ELEMENT_NODE) {
                                    var r = i;
                                    e(r);
                                    var o = r.localName;
                                    if ("link" === o && "import" === r.getAttribute("rel")) {
                                        if (i = r.import, void 0 === n && (n = new Set), i instanceof Node && !n.has(i))
                                            for (n.add(i), i = i.firstChild; i; i = i.nextSibling) Yr(i, e, n);
                                        i = qr(t, r);
                                        continue
                                    }
                                    if ("template" === o) {
                                        i = qr(t, r);
                                        continue
                                    }
                                    if (r = r.__CE_shadowRoot)
                                        for (r = r.firstChild; r; r = r.nextSibling) Yr(r, e, n)
                                }
                                i = i.firstChild ? i.firstChild : qr(t, i)
                            }
                        }

                        function Wr() {
                            var t = !(null == po || !po.noDocumentConstructionObserver),
                                e = !(null == po || !po.shadyDomFastWalk);
                            this.ca = [], this.g = [], this.W = !1, this.shadyDomFastWalk = e, this.nb = !t
                        }

                        function zr(t, e, n, i) {
                            var r = window.ShadyDOM;
                            if (t.shadyDomFastWalk && r && r.inUse) {
                                if (e.nodeType === Node.ELEMENT_NODE && n(e), e.querySelectorAll)
                                    for (t = r.nativeMethods.querySelectorAll.call(e, "*"), e = 0; e < t.length; e++) n(t[e])
                            } else Yr(e, n, i)
                        }

                        function Kr(t, e) {
                            t.W && zr(t, e, (function(e) {
                                return Jr(t, e)
                            }))
                        }

                        function Jr(t, e) {
                            if (t.W && !e.__CE_patched) {
                                e.__CE_patched = !0;
                                for (var n = 0; n < t.ca.length; n++) t.ca[n](e);
                                for (n = 0; n < t.g.length; n++) t.g[n](e)
                            }
                        }

                        function Zr(t, e) {
                            var n = [];
                            for (zr(t, e, (function(t) {
                                    return n.push(t)
                                })), e = 0; e < n.length; e++) {
                                var i = n[e];
                                1 === i.__CE_state ? t.connectedCallback(i) : Qr(t, i)
                            }
                        }

                        function Xr(t, e) {
                            var n = [];
                            for (zr(t, e, (function(t) {
                                    return n.push(t)
                                })), e = 0; e < n.length; e++) {
                                var i = n[e];
                                1 === i.__CE_state && t.disconnectedCallback(i)
                            }
                        }

                        function $r(t, e, n) {
                            var i = (n = void 0 === n ? {} : n).ob,
                                r = n.upgrade || function(e) {
                                    return Qr(t, e)
                                },
                                o = [];
                            for (zr(t, e, (function(e) {
                                    if (t.W && Jr(t, e), "link" === e.localName && "import" === e.getAttribute("rel")) {
                                        var n = e.import;
                                        n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_registry = document.__CE_registry), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", (function() {
                                            var n = e.import;
                                            if (!n.__CE_documentLoadHandled) {
                                                n.__CE_documentLoadHandled = !0;
                                                var o = new Set;
                                                i && (i.forEach((function(t) {
                                                    return o.add(t)
                                                })), o.delete(n)), $r(t, n, {
                                                    ob: o,
                                                    upgrade: r
                                                })
                                            }
                                        }))
                                    } else o.push(e)
                                }), i), e = 0; e < o.length; e++) r(o[e])
                        }

                        function Qr(t, e) {
                            try {
                                var n = e.ownerDocument,
                                    i = n.__CE_registry,
                                    r = i && (n.defaultView || n.__CE_isImportDocument) ? uo(i, e.localName) : void 0;
                                if (r && void 0 === e.__CE_state) {
                                    r.constructionStack.push(e);
                                    try {
                                        try {
                                            if (new r.constructorFunction !== e) throw Error("The custom element constructor did not produce the element being upgraded.")
                                        } finally {
                                            r.constructionStack.pop()
                                        }
                                    } catch (t) {
                                        console.error("CATCH 13", t);                                        throw e.__CE_state = 2, t
                                    }
                                    if (e.__CE_state = 1, e.__CE_definition = r, r.attributeChangedCallback && e.hasAttributes()) {
                                        var o = r.observedAttributes;
                                        for (r = 0; r < o.length; r++) {
                                            var a = o[r],
                                                s = e.getAttribute(a);
                                            null !== s && t.attributeChangedCallback(e, a, null, s, null)
                                        }
                                    }
                                    Vr(e) && t.connectedCallback(e)
                                }
                            } catch (t) {
                                console.error("CATCH 14", t);                                eo(t)
                            }
                        }

                        function to(t, e, n, i) {
                            var r = e.__CE_registry;
                            if (r && (null === i || "http://www.w3.org/1999/xhtml" === i) && (r = uo(r, n))) try {
                                var o = new r.constructorFunction;
                                if (void 0 === o.__CE_state || void 0 === o.__CE_definition) throw Error("Failed to construct '" + n + "': The returned value was not constructed with the HTMLElement constructor.");
                                if ("http://www.w3.org/1999/xhtml" !== o.namespaceURI) throw Error("Failed to construct '" + n + "': The constructed element's namespace must be the HTML namespace.");
                                if (o.hasAttributes()) throw Error("Failed to construct '" + n + "': The constructed element must not have any attributes.");
                                if (null !== o.firstChild) throw Error("Failed to construct '" + n + "': The constructed element must not have any children.");
                                if (null !== o.parentNode) throw Error("Failed to construct '" + n + "': The constructed element must not have a parent node.");
                                if (o.ownerDocument !== e) throw Error("Failed to construct '" + n + "': The constructed element's owner document is incorrect.");
                                if (o.localName !== n) throw Error("Failed to construct '" + n + "': The constructed element's local name is incorrect.");
                                return o
                            } catch (r) {
                                console.error("CATCH 15", r);                                return eo(r), e = null === i ? ar.call(e, n) : sr.call(e, i, n), Object.setPrototypeOf(e, HTMLUnknownElement.prototype), e.__CE_state = 2, e.__CE_definition = void 0, Jr(t, e), e
                            }
                            return Jr(t, e = null === i ? ar.call(e, n) : sr.call(e, i, n)), e
                        }

                        function eo(t) {
                            var e = t.message,
                                n = t.sourceURL || t.fileName || "",
                                i = t.line || t.lineNumber || 0,
                                r = t.column || t.columnNumber || 0,
                                o = void 0;
                            void 0 === ErrorEvent.prototype.initErrorEvent ? o = new ErrorEvent("error", {
                                cancelable: !0,
                                message: e,
                                filename: n,
                                lineno: i,
                                colno: r,
                                error: t
                            }) : ((o = document.createEvent("ErrorEvent")).initErrorEvent("error", !1, !0, e, n, i), o.preventDefault = function() {
                                Object.defineProperty(this, "defaultPrevented", {
                                    configurable: !0,
                                    get: function() {
                                        return !0
                                    }
                                })
                            }), void 0 === o.error && Object.defineProperty(o, "error", {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return t
                                }
                            }), window.dispatchEvent(o), o.defaultPrevented
                        }

                        function no() {
                            var t = this;
                            this.I = void 0, this.Ha = new Promise((function(e) {
                                t.g = e
                            }))
                        }

                        function io(t) {
                            var e = document;
                            this.X = void 0, this.S = t, this.g = e, $r(this.S, this.g), "loading" === this.g.readyState && (this.X = new MutationObserver(this.h.bind(this)), this.X.observe(this.g, {
                                childList: !0,
                                subtree: !0
                            }))
                        }

                        function ro(t) {
                            t.X && t.X.disconnect()
                        }

                        function oo(t) {
                            this.ka = new Map, this.la = new Map, this.Ca = new Map, this.ta = !1, this.wa = new Map, this.ja = function(t) {
                                return t()
                            }, this.V = !1, this.ma = [], this.S = t, this.Da = t.nb ? new io(t) : void 0
                        }

                        function ao(t, e) {
                            if (!Hr(e)) throw new SyntaxError("The element name '" + e + "' is not valid.");
                            if (uo(t, e)) throw Error("A custom element with name '" + e + "' has already been defined.");
                            if (t.ta) throw Error("A custom element is already being defined.")
                        }

                        function so(t, e, n) {
                            var i;
                            t.ta = !0;
                            try {
                                var r = n.prototype;
                                if (!(r instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                                var o = function(t) {
                                        var e = r[t];
                                        if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
                                        return e
                                    },
                                    a = o("connectedCallback"),
                                    s = o("disconnectedCallback"),
                                    l = o("adoptedCallback"),
                                    u = (i = o("attributeChangedCallback")) && n.observedAttributes || []
                            } catch (t) {
                                console.error("CATCH 16", t);                                throw t
                            } finally {
                                t.ta = !1
                            }
                            return n = {
                                localName: e,
                                constructorFunction: n,
                                connectedCallback: a,
                                disconnectedCallback: s,
                                adoptedCallback: l,
                                attributeChangedCallback: i,
                                observedAttributes: u,
                                constructionStack: []
                            }, t.la.set(e, n), t.Ca.set(n.constructorFunction, n), n
                        }

                        function lo(t) {
                            if (!1 !== t.V) {
                                t.V = !1;
                                for (var e = [], n = t.ma, i = new Map, r = 0; r < n.length; r++) i.set(n[r], []);
                                for ($r(t.S, document, {
                                        upgrade: function(n) {
                                            if (void 0 === n.__CE_state) {
                                                var r = n.localName,
                                                    o = i.get(r);
                                                o ? o.push(n) : t.la.has(r) && e.push(n)
                                            }
                                        }
                                    }), r = 0; r < e.length; r++) Qr(t.S, e[r]);
                                for (r = 0; r < n.length; r++) {
                                    for (var o = n[r], a = i.get(o), s = 0; s < a.length; s++) Qr(t.S, a[s]);
                                    (o = t.wa.get(o)) && o.resolve(void 0)
                                }
                                n.length = 0
                            }
                        }

                        function uo(t, e) {
                            var n = t.la.get(e);
                            if (n) return n;
                            if (n = t.ka.get(e)) {
                                t.ka.delete(e);
                                try {
                                    return so(t, e, n())
                                } catch (t) {
                                    console.error("CATCH 17", t);                                    eo(t)
                                }
                            }
                        }

                        function co(t, e, n) {
                            function i(e) {
                                return function(n) {
                                    for (var i = [], r = 0; r < arguments.length; ++r) i[r] = arguments[r];
                                    r = [];
                                    for (var o = [], a = 0; a < i.length; a++) {
                                        var s = i[a];
                                        if (s instanceof Element && Vr(s) && o.push(s), s instanceof DocumentFragment)
                                            for (s = s.firstChild; s; s = s.nextSibling) r.push(s);
                                        else r.push(s)
                                    }
                                    for (e.apply(this, i), i = 0; i < o.length; i++) Xr(t, o[i]);
                                    if (Vr(this))
                                        for (i = 0; i < r.length; i++)(o = r[i]) instanceof Element && Zr(t, o)
                                }
                            }
                            void 0 !== n.prepend && (e.prepend = i(n.prepend)), void 0 !== n.append && (e.append = i(n.append))
                        }

                        function ho(t) {
                            function e(e, n) {
                                Object.defineProperty(e, "innerHTML", {
                                    enumerable: n.enumerable,
                                    configurable: !0,
                                    get: n.get,
                                    set: function(e) {
                                        var i = this,
                                            r = void 0;
                                        if (Vr(this) && (r = [], zr(t, this, (function(t) {
                                                t !== i && r.push(t)
                                            }))), n.set.call(this, e), r)
                                            for (var o = 0; o < r.length; o++) {
                                                var a = r[o];
                                                1 === a.__CE_state && t.disconnectedCallback(a)
                                            }
                                        return this.ownerDocument.__CE_registry ? $r(t, this) : Kr(t, this), e
                                    }
                                })
                            }

                            function n(e, n) {
                                e.insertAdjacentElement = function(e, i) {
                                    var r = Vr(i);
                                    return e = n.call(this, e, i), r && Xr(t, i), Vr(e) && Zr(t, i), e
                                }
                            }

                            function i(e, n) {
                                function i(e, n) {
                                    for (var i = []; e !== n; e = e.nextSibling) i.push(e);
                                    for (n = 0; n < i.length; n++) $r(t, i[n])
                                }
                                e.insertAdjacentHTML = function(t, e) {
                                    if ("beforebegin" === (t = t.toLowerCase())) {
                                        var r = this.previousSibling;
                                        n.call(this, t, e), i(r || this.parentNode.firstChild, this)
                                    } else if ("afterbegin" === t) r = this.firstChild, n.call(this, t, e), i(this.firstChild, r);
                                    else if ("beforeend" === t) r = this.lastChild, n.call(this, t, e), i(r || this.firstChild, null);
                                    else {
                                        if ("afterend" !== t) throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                                        r = this.nextSibling, n.call(this, t, e), i(this.nextSibling, r)
                                    }
                                }
                            }
                            _r && (Element.prototype.attachShadow = function(e) {
                                    if (e = _r.call(this, e), t.W && !e.__CE_patched) {
                                        e.__CE_patched = !0;
                                        for (var n = 0; n < t.ca.length; n++) t.ca[n](e)
                                    }
                                    return this.__CE_shadowRoot = e
                                }), br && br.get ? e(Element.prototype, br) : jr && jr.get ? e(HTMLElement.prototype, jr) : function(t, e) {
                                    t.W = !0, t.g.push(e)
                                }(t, (function(t) {
                                    e(t, {
                                        enumerable: !0,
                                        configurable: !0,
                                        get: function() {
                                            return fr.call(this, !0).innerHTML
                                        },
                                        set: function(t) {
                                            var e = "template" === this.localName,
                                                n = e ? this.content : this,
                                                i = sr.call(document, this.namespaceURI, this.localName);
                                            for (i.innerHTML = t; 0 < n.childNodes.length;) vr.call(n, n.childNodes[0]);
                                            for (t = e ? i.content : i; 0 < t.childNodes.length;) pr.call(n, t.childNodes[0])
                                        }
                                    })
                                })), Element.prototype.setAttribute = function(e, n) {
                                    if (1 !== this.__CE_state) return Sr.call(this, e, n);
                                    var i = Er.call(this, e);
                                    Sr.call(this, e, n), n = Er.call(this, e), t.attributeChangedCallback(this, e, i, n, null)
                                }, Element.prototype.setAttributeNS = function(e, n, i) {
                                    if (1 !== this.__CE_state) return Or.call(this, e, n, i);
                                    var r = Cr.call(this, e, n);
                                    Or.call(this, e, n, i), i = Cr.call(this, e, n), t.attributeChangedCallback(this, n, r, i, e)
                                }, Element.prototype.removeAttribute = function(e) {
                                    if (1 !== this.__CE_state) return wr.call(this, e);
                                    var n = Er.call(this, e);
                                    wr.call(this, e), null !== n && t.attributeChangedCallback(this, e, n, null, null)
                                }, Element.prototype.removeAttributeNS = function(e, n) {
                                    if (1 !== this.__CE_state) return Tr.call(this, e, n);
                                    var i = Cr.call(this, e, n);
                                    Tr.call(this, e, n);
                                    var r = Cr.call(this, e, n);
                                    i !== r && t.attributeChangedCallback(this, n, i, r, e)
                                }, Rr ? n(HTMLElement.prototype, Rr) : Ar && n(Element.prototype, Ar), Br ? i(HTMLElement.prototype, Br) : Nr && i(Element.prototype, Nr), co(t, Element.prototype, {
                                    prepend: Mr,
                                    append: Pr
                                }),
                                function(t) {
                                    function e(e) {
                                        return function(n) {
                                            for (var i = [], r = 0; r < arguments.length; ++r) i[r] = arguments[r];
                                            r = [];
                                            for (var o = [], a = 0; a < i.length; a++) {
                                                var s = i[a];
                                                if (s instanceof Element && Vr(s) && o.push(s), s instanceof DocumentFragment)
                                                    for (s = s.firstChild; s; s = s.nextSibling) r.push(s);
                                                else r.push(s)
                                            }
                                            for (e.apply(this, i), i = 0; i < o.length; i++) Xr(t, o[i]);
                                            if (Vr(this))
                                                for (i = 0; i < r.length; i++)(o = r[i]) instanceof Element && Zr(t, o)
                                        }
                                    }
                                    var n = Element.prototype;
                                    void 0 !== Dr && (n.before = e(Dr)), void 0 !== Lr && (n.after = e(Lr)), void 0 !== Ir && (n.replaceWith = function(e) {
                                        for (var n = [], i = 0; i < arguments.length; ++i) n[i] = arguments[i];
                                        i = [];
                                        for (var r = [], o = 0; o < n.length; o++) {
                                            var a = n[o];
                                            if (a instanceof Element && Vr(a) && r.push(a), a instanceof DocumentFragment)
                                                for (a = a.firstChild; a; a = a.nextSibling) i.push(a);
                                            else i.push(a)
                                        }
                                        for (o = Vr(this), Ir.apply(this, n), n = 0; n < r.length; n++) Xr(t, r[n]);
                                        if (o)
                                            for (Xr(t, this), n = 0; n < i.length; n++)(r = i[n]) instanceof Element && Zr(t, r)
                                    }), void 0 !== xr && (n.remove = function() {
                                        var e = Vr(this);
                                        xr.call(this), e && Xr(t, this)
                                    })
                                }(t)
                        }
                        Wr.prototype.connectedCallback = function(t) {
                            var e = t.__CE_definition;
                            if (e.connectedCallback) try {
                                e.connectedCallback.call(t)
                            } catch (t) {
                                console.error("CATCH 18", t);                                eo(t)
                            }
                        }, Wr.prototype.disconnectedCallback = function(t) {
                            var e = t.__CE_definition;
                            if (e.disconnectedCallback) try {
                                e.disconnectedCallback.call(t)
                            } catch (t) {
                                console.error("CATCH 19", t);                                eo(t)
                            }
                        }, Wr.prototype.attributeChangedCallback = function(t, e, n, i, r) {
                            var o = t.__CE_definition;
                            if (o.attributeChangedCallback && -1 < o.observedAttributes.indexOf(e)) try {
                                o.attributeChangedCallback.call(t, e, n, i, r)
                            } catch (t) {
                                console.error("CATCH 20", t);                                eo(t)
                            }
                        }, no.prototype.resolve = function(t) {
                            if (this.I) throw Error("Already resolved.");
                            this.I = t, this.g(t)
                        }, io.prototype.h = function(t) {
                            var e = this.g.readyState;
                            for ("interactive" !== e && "complete" !== e || ro(this), e = 0; e < t.length; e++)
                                for (var n = t[e].addedNodes, i = 0; i < n.length; i++) $r(this.S, n[i])
                        }, (t = oo.prototype).eb = function(t, e) {
                            var n = this;
                            if (!(e instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
                            ao(this, t), this.ka.set(t, e), this.ma.push(t), this.V || (this.V = !0, this.ja((function() {
                                return lo(n)
                            })))
                        }, t.define = function(t, e) {
                            var n = this;
                            if (!(e instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
                            ao(this, t), so(this, t, e), this.ma.push(t), this.V || (this.V = !0, this.ja((function() {
                                return lo(n)
                            })))
                        }, t.upgrade = function(t) {
                            $r(this.S, t)
                        }, t.get = function(t) {
                            if (t = uo(this, t)) return t.constructorFunction
                        }, t.whenDefined = function(t) {
                            if (!Hr(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
                            var e = this.wa.get(t);
                            if (e) return e.Ha;
                            e = new no, this.wa.set(t, e);
                            var n = this.la.has(t) || this.ka.has(t);
                            return t = -1 === this.ma.indexOf(t), n && t && e.resolve(void 0), e.Ha
                        }, t.polyfillWrapFlushCallback = function(t) {
                            this.Da && ro(this.Da);
                            var e = this.ja;
                            this.ja = function(n) {
                                return t((function() {
                                    return e(n)
                                }))
                            }
                        }, window.CustomElementRegistry = oo, oo.prototype.define = oo.prototype.define, oo.prototype.upgrade = oo.prototype.upgrade, oo.prototype.get = oo.prototype.get, oo.prototype.whenDefined = oo.prototype.whenDefined, oo.prototype.polyfillDefineLazy = oo.prototype.eb, oo.prototype.polyfillWrapFlushCallback = oo.prototype.polyfillWrapFlushCallback;
                        var fo = {};
                        var po = window.customElements;

                        function mo() {
                            var t = new Wr;
                            ! function(t) {
                                function e() {
                                    var e = this.constructor,
                                        n = document.__CE_registry.Ca.get(e);
                                    if (!n) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
                                    var i = n.constructionStack;
                                    if (0 === i.length) return i = ar.call(document, n.localName), Object.setPrototypeOf(i, e.prototype), i.__CE_state = 1, i.__CE_definition = n, Jr(t, i), i;
                                    var r = i.length - 1,
                                        o = i[r];
                                    if (o === fo) throw Error("Failed to construct '" + n.localName + "': This element was already constructed.");
                                    return i[r] = fo, Object.setPrototypeOf(o, e.prototype), Jr(t, o), o
                                }
                                e.prototype = kr.prototype, Object.defineProperty(HTMLElement.prototype, "constructor", {
                                    writable: !0,
                                    configurable: !0,
                                    enumerable: !1,
                                    value: e
                                }), window.HTMLElement = e
                            }(t),
                            function(t) {
                                Document.prototype.createElement = function(e) {
                                    return to(t, this, e, null)
                                }, Document.prototype.importNode = function(e, n) {
                                    return e = lr.call(this, e, !!n), this.__CE_registry ? $r(t, e) : Kr(t, e), e
                                }, Document.prototype.createElementNS = function(e, n) {
                                    return to(t, this, n, e)
                                }, co(t, Document.prototype, {
                                    prepend: ur,
                                    append: cr
                                })
                            }(t), co(t, DocumentFragment.prototype, {
                                    prepend: dr,
                                    append: hr
                                }),
                                function(t) {
                                    function e(e, n) {
                                        Object.defineProperty(e, "textContent", {
                                            enumerable: n.enumerable,
                                            configurable: !0,
                                            get: n.get,
                                            set: function(e) {
                                                if (this.nodeType === Node.TEXT_NODE) n.set.call(this, e);
                                                else {
                                                    var i = void 0;
                                                    if (this.firstChild) {
                                                        var r = this.childNodes,
                                                            o = r.length;
                                                        if (0 < o && Vr(this)) {
                                                            i = Array(o);
                                                            for (var a = 0; a < o; a++) i[a] = r[a]
                                                        }
                                                    }
                                                    if (n.set.call(this, e), i)
                                                        for (e = 0; e < i.length; e++) Xr(t, i[e])
                                                }
                                            }
                                        })
                                    }
                                    Node.prototype.insertBefore = function(e, n) {
                                        if (e instanceof DocumentFragment) {
                                            var i = Gr(e);
                                            if (e = mr.call(this, e, n), Vr(this))
                                                for (n = 0; n < i.length; n++) Zr(t, i[n]);
                                            return e
                                        }
                                        return i = e instanceof Element && Vr(e), n = mr.call(this, e, n), i && Xr(t, e), Vr(this) && Zr(t, e), n
                                    }, Node.prototype.appendChild = function(e) {
                                        if (e instanceof DocumentFragment) {
                                            var n = Gr(e);
                                            if (e = pr.call(this, e), Vr(this))
                                                for (var i = 0; i < n.length; i++) Zr(t, n[i]);
                                            return e
                                        }
                                        return n = e instanceof Element && Vr(e), i = pr.call(this, e), n && Xr(t, e), Vr(this) && Zr(t, e), i
                                    }, Node.prototype.cloneNode = function(e) {
                                        return e = fr.call(this, !!e), this.ownerDocument.__CE_registry ? $r(t, e) : Kr(t, e), e
                                    }, Node.prototype.removeChild = function(e) {
                                        var n = e instanceof Element && Vr(e),
                                            i = vr.call(this, e);
                                        return n && Xr(t, e), i
                                    }, Node.prototype.replaceChild = function(e, n) {
                                        if (e instanceof DocumentFragment) {
                                            var i = Gr(e);
                                            if (e = yr.call(this, e, n), Vr(this))
                                                for (Xr(t, n), n = 0; n < i.length; n++) Zr(t, i[n]);
                                            return e
                                        }
                                        i = e instanceof Element && Vr(e);
                                        var r = yr.call(this, e, n),
                                            o = Vr(this);
                                        return o && Xr(t, n), i && Xr(t, e), o && Zr(t, e), r
                                    }, gr && gr.get ? e(Node.prototype, gr) : function(t, e) {
                                        t.W = !0, t.ca.push(e)
                                    }(t, (function(t) {
                                        e(t, {
                                            enumerable: !0,
                                            configurable: !0,
                                            get: function() {
                                                for (var t = [], e = this.firstChild; e; e = e.nextSibling) e.nodeType !== Node.COMMENT_NODE && t.push(e.textContent);
                                                return t.join("")
                                            },
                                            set: function(t) {
                                                for (; this.firstChild;) vr.call(this, this.firstChild);
                                                null != t && "" !== t && pr.call(this, document.createTextNode(t))
                                            }
                                        })
                                    }))
                                }(t), ho(t), t = new oo(t), document.__CE_registry = t, Object.defineProperty(window, "customElements", {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: t
                                })
                        }

                        function vo() {
                            this.end = this.start = 0, this.rules = this.parent = this.previous = null, this.cssText = this.parsedCssText = "", this.atRule = !1, this.type = 0, this.parsedSelector = this.selector = this.keyframesName = ""
                        }

                        function yo(t) {
                            var e = t = t.replace(To, "").replace(Ao, ""),
                                n = new vo;
                            n.start = 0, n.end = e.length;
                            for (var i = n, r = 0, o = e.length; r < o; r++)
                                if ("{" === e[r]) {
                                    i.rules || (i.rules = []);
                                    var a = i,
                                        s = a.rules[a.rules.length - 1] || null;
                                    (i = new vo).start = r + 1, i.parent = a, i.previous = s, a.rules.push(i)
                                } else "}" === e[r] && (i.end = r + 1, i = i.parent || n);
                            return go(n, t)
                        }

                        function go(t, e) {
                            var n = e.substring(t.start, t.end - 1);
                            if (t.parsedCssText = t.cssText = n.trim(), t.parent && (n = (n = (n = function(t) {
                                    return t.replace(/\\([0-9a-f]{1,6})\s/gi, (function(t, e) {
                                        for (e = 6 - (t = e).length; e--;) t = "0" + t;
                                        return "\\" + t
                                    }))
                                }(n = e.substring(t.previous ? t.previous.end : t.parent.start, t.start - 1))).replace(Io, " ")).substring(n.lastIndexOf(";") + 1), n = t.parsedSelector = t.selector = n.trim(), t.atRule = 0 === n.indexOf("@"), t.atRule ? 0 === n.indexOf("@media") ? t.type = Co : n.match(Lo) && (t.type = wo, t.keyframesName = t.selector.split(Io).pop()) : t.type = 0 === n.indexOf("--") ? Oo : So), n = t.rules)
                                for (var i = 0, r = n.length, o = void 0; i < r && (o = n[i]); i++) go(o, e);
                            return t
                        }

                        function _o(t, e, n) {
                            n = void 0 === n ? "" : n;
                            var i = "";
                            if (t.cssText || t.rules) {
                                var r, o = t.rules;
                                if ((r = o) && (r = !((r = o[0]) && r.selector && 0 === r.selector.indexOf("--"))), r) {
                                    r = 0;
                                    for (var a = o.length, s = void 0; r < a && (s = o[r]); r++) i = _o(s, e, i)
                                } else e ? e = t.cssText : e = (e = (e = t.cssText).replace(No, "").replace(Mo, "")).replace(Po, "").replace(Do, ""), (i = e.trim()) && (i = "  " + i + "\n")
                            }
                            return i && (t.selector && (n += t.selector + " {\n"), n += i, t.selector && (n += "}\n\n")), n
                        }
                        po && !po.forcePolyfill && "function" == typeof po.define && "function" == typeof po.get || mo(), window.__CE_installPolyfill = mo;
                        var bo, Eo, So = 1,
                            wo = 7,
                            Co = 4,
                            Oo = 1e3,
                                                        //To = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
                            To = new RegExp("\\/\\*[^*]*\\*+([^/*][^*]*\\*+)*\\/", "gim"),
                                                        Ao = /@import[^;]*;/gim,
                            No = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
                            Mo = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
                            Po = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
                            Do = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
                            Lo = /^@[^\s]*keyframes/,
                            Io = /\s+/g,
                            xo = !(window.ShadyDOM && window.ShadyDOM.inUse);

                        function ko(t) {
                            bo = (!t || !t.shimcssproperties) && (xo || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)")))
                        }
                        window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (Eo = window.ShadyCSS.cssBuild);
                        var jo = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
                        window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? bo = window.ShadyCSS.nativeCss : window.ShadyCSS ? (ko(window.ShadyCSS), window.ShadyCSS = void 0) : ko(window.WebComponents && window.WebComponents.flags);
                        var Ro = bo,
                            Bo = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
                            Uo = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
                            Ho = /(--[\w-]+)\s*([:,;)]|$)/gi,
                            Fo = /(animation\s*:)|(animation-name\s*:)/,
                            Vo = /@media\s(.*)/,
                            Go = /\{[^}]*\}/g,
                            qo = new Set;

                        function Yo(t, e) {
                            return t ? ("string" == typeof t && (t = yo(t)), e && Ko(t, e), _o(t, Ro)) : ""
                        }

                        function Wo(t) {
                            return !t.__cssRules && t.textContent && (t.__cssRules = yo(t.textContent)), t.__cssRules || null
                        }

                        function zo(t) {
                            return !!t.parent && t.parent.type === wo
                        }

                        function Ko(t, e, n, i) {
                            if (t) {
                                var r = !1,
                                    o = t.type;
                                if (i && o === Co) {
                                    var a = t.selector.match(Vo);
                                    a && (window.matchMedia(a[1]).matches || (r = !0))
                                }
                                if (o === So ? e(t) : n && o === wo ? n(t) : o === Oo && (r = !0), (t = t.rules) && !r)
                                    for (r = 0, o = t.length, a = void 0; r < o && (a = t[r]); r++) Ko(a, e, n, i)
                            }
                        }

                        function Jo(t, e, n, i) {
                            var r = document.createElement("style");
                            return e && r.setAttribute("scope", e), r.textContent = t, $o(r, n, i), r
                        }
                        var Zo = null;

                        function Xo(t) {
                            t = document.createComment(" Shady DOM styles for " + t + " ");
                            var e = document.head;
                            return e.insertBefore(t, (Zo ? Zo.nextSibling : null) || e.firstChild), Zo = t
                        }

                        function $o(t, e, n) {
                            (e = e || document.head).insertBefore(t, n && n.nextSibling || e.firstChild), Zo ? t.compareDocumentPosition(Zo) === Node.DOCUMENT_POSITION_PRECEDING && (Zo = t) : Zo = t
                        }

                        function Qo(t, e) {
                            for (var n = 0, i = t.length; e < i; e++)
                                if ("(" === t[e]) n++;
                                else if (")" === t[e] && 0 == --n) return e;
                            return -1
                        }

                        function ta(t, e) {
                            var n = t.indexOf("var(");
                            if (-1 === n) return e(t, "", "", "");
                            var i = Qo(t, n + 3),
                                r = t.substring(n + 4, i);
                            return n = t.substring(0, n), t = ta(t.substring(i + 1), e), -1 === (i = r.indexOf(",")) ? e(n, r.trim(), "", t) : e(n, r.substring(0, i).trim(), r.substring(i + 1).trim(), t)
                        }

                        function ea(t, e) {
                            xo ? t.setAttribute("class", e) : window.ShadyDOM.nativeMethods.setAttribute.call(t, "class", e)
                        }
                        var na = window.ShadyDOM && window.ShadyDOM.wrap || function(t) {
                            return t
                        };

                        function ia(t) {
                            var e = t.localName,
                                n = "";
                            return e ? -1 < e.indexOf("-") || (n = e, e = t.getAttribute && t.getAttribute("is") || "") : (e = t.is, n = t.extends), {
                                is: e,
                                ha: n
                            }
                        }

                        function ra(t) {
                            for (var e = [], n = "", i = 0; 0 <= i && i < t.length; i++)
                                if ("(" === t[i]) {
                                    var r = Qo(t, i);
                                    n += t.slice(i, r + 1), i = r
                                } else "," === t[i] ? (e.push(n), n = "") : n += t[i];
                            return n && e.push(n), e
                        }

                        function oa(t) {
                            if (void 0 !== Eo) return Eo;
                            if (void 0 === t.__cssBuild) {
                                var e = t.getAttribute("css-build");
                                if (e) t.__cssBuild = e;
                                else {
                                    if ("" !== (e = (e = "template" === t.localName ? t.content.firstChild : t.firstChild) instanceof Comment && "css-build" === (e = e.textContent.trim().split(":"))[0] ? e[1] : "")) {
                                        var n = "template" === t.localName ? t.content.firstChild : t.firstChild;
                                        n.parentNode.removeChild(n)
                                    }
                                    t.__cssBuild = e
                                }
                            }
                            return t.__cssBuild || ""
                        }

                        function aa(t) {
                            return !("" === (t = void 0 === t ? "" : t) || !Ro) && (xo ? "shadow" === t : "shady" === t)
                        }

                        function sa() {}

                        function la(t, e, n) {
                            var i;
                            if (e.nodeType === Node.ELEMENT_NODE && n(e), i = "template" === e.localName ? (e.content || e._content || e).childNodes : e.children || e.childNodes)
                                for (e = 0; e < i.length; e++) la(t, i[e], n)
                        }

                        function ua(t, e, n) {
                            if (e)
                                if (t.classList) n ? (t.classList.remove("style-scope"), t.classList.remove(e)) : (t.classList.add("style-scope"), t.classList.add(e));
                                else if (t.getAttribute) {
                                var i = t.getAttribute("class");
                                n ? i && ea(t, e = i.replace("style-scope", "").replace(e, "")) : ea(t, (i ? i + " " : "") + "style-scope " + e)
                            }
                        }

                        function ca(t, e, n) {
                            la(Ta, t, (function(t) {
                                ua(t, e, !0), ua(t, n)
                            }))
                        }

                        function da(t, e) {
                            la(Ta, t, (function(t) {
                                ua(t, e || "", !0)
                            }))
                        }

                        function ha(t, e, n, i, r) {
                            var o = Ta;
                            return "" === (r = void 0 === r ? "" : r) && (xo || "shady" === (void 0 === i ? "" : i) ? r = Yo(e, n) : r = function(t, e, n, i, r) {
                                var o = fa(n, i);
                                return n = n ? "." + n : "", Yo(e, (function(e) {
                                    e.i || (e.selector = e.F = pa(t, e, t.h, n, o), e.i = !0), r && r(e, n, o)
                                }))
                            }(o, e, (t = ia(t)).is, t.ha, n) + "\n\n"), r.trim()
                        }

                        function fa(t, e) {
                            return e ? "[is=" + t + "]" : t
                        }

                        function pa(t, e, n, i, r) {
                            var o = ra(e.selector);
                            if (!zo(e)) {
                                e = 0;
                                for (var a = o.length, s = void 0; e < a && (s = o[e]); e++) o[e] = n.call(t, s, i, r)
                            }
                            return o.filter((function(t) {
                                return !!t
                            })).join(",")
                        }

                        function ma(t) {
                            return t.replace(ga, (function(t, e, n) {
                                return -1 < n.indexOf("+") ? n = n.replace(/\+/g, "___") : -1 < n.indexOf("___") && (n = n.replace(/___/g, "+")), ":" + e + "(" + n + ")"
                            }))
                        }

                        function va(t, e) {
                            t = t.split(/(\[.+?\])/);
                            for (var n = [], i = 0; i < t.length; i++)
                                if (1 == i % 2) n.push(t[i]);
                                else {
                                    var r = t[i];
                                    "" === r && i === t.length - 1 || ((r = r.split(":"))[0] += e, n.push(r.join(":")))
                                } return n.join("")
                        }

                        function ya(t) {
                            ":root" === t.selector && (t.selector = "html")
                        }
                        sa.prototype.h = function(t, e, n) {
                            var i = !1;
                            t = t.trim();
                            var r = ga.test(t);
                            r && (t = ma(t = t.replace(ga, (function(t, e, n) {
                                return ":" + e + "(" + n.replace(/\s/g, "") + ")"
                            }))));
                            var o = Oa.test(t);
                            if (o) {
                                var a = function(t) {
                                    for (var e, n = []; e = t.match(Oa);) {
                                        var i = e.index,
                                            r = Qo(t, i);
                                        if (-1 === r) throw Error(e.input + " selector missing ')'");
                                        e = t.slice(i, r + 1), t = t.replace(e, "ÃƒÂ®Ã¢â€šÂ¬Ã¢â€šÂ¬"), n.push(e)
                                    }
                                    return {
                                        Ba: t,
                                        matches: n
                                    }
                                }(t);
                                t = a.Ba, a = a.matches
                            }
                            return t = (t = t.replace(Ea, ":host $1")).replace(_a, (function(t, r, o) {
                                return i || (t = function(t, e, n, i) {
                                    var r = t.indexOf("::slotted");
                                    if (0 <= t.indexOf(":host") ? t = function(t, e) {
                                            var n = t.match(Sa);
                                            return (n = n && n[2].trim() || "") ? n[0].match(ba) ? t.replace(Sa, (function(t, n, i) {
                                                return e + i
                                            })) : n.split(ba)[0] === e ? n : "should_not_match" : t.replace(":host", e)
                                        }(t, i) : 0 !== r && (t = n ? va(t, n) : t), n = !1, 0 <= r && (e = "", n = !0), n) {
                                        var o = !0;
                                        n && (t = t.replace(wa, (function(t, e) {
                                            return " > " + e
                                        })))
                                    }
                                    return {
                                        value: t,
                                        Ua: e,
                                        stop: o
                                    }
                                }(o, r, e, n), i = i || t.stop, r = t.Ua, o = t.value), r + o
                            })), o && (t = function(t, e) {
                                var n = t.split("ÃƒÂ®Ã¢â€šÂ¬Ã¢â€šÂ¬");
                                return e.reduce((function(t, e, i) {
                                    return t + e + n[i + 1]
                                }), n[0])
                            }(t, a)), r && (t = ma(t)), t.replace(Ca, (function(t, e, n, i) {
                                return '[dir="' + n + '"] ' + e + i + ", " + e + '[dir="' + n + '"]' + i
                            }))
                        }, sa.prototype.i = function(t) {
                            return t.match(":host") ? "" : t.match("::slotted") ? this.h(t, ":not(.style-scope)") : va(t.trim(), ":not(.style-scope)")
                        }, o.Object.defineProperties(sa.prototype, {
                            g: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return "style-scope"
                                }
                            }
                        });
                        var ga = /:(nth[-\w]+)\(([^)]+)\)/,
                            _a = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
                            ba = /[[.:#*]/,
                            Ea = /^(::slotted)/,
                            Sa = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
                            wa = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
                            Ca = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
                            Oa = /:(?:matches|any|-(?:webkit|moz)-any)/,
                            Ta = new sa;

                        function Aa(t, e, n, i, r) {
                            this.M = t || null, this.h = e || null, this.za = n || [], this.K = null, this.cssBuild = r || "", this.ha = i || "", this.g = this.L = this.R = null
                        }

                        function Na(t) {
                            return t ? t.__styleInfo : null
                        }

                        function Ma(t, e) {
                            return t.__styleInfo = e
                        }

                        function Pa(t) {
                            var e = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
                            return e && e.call(this, t)
                        }
                        Aa.prototype.i = function() {
                            return this.M
                        }, Aa.prototype._getStyleRules = Aa.prototype.i;
                        var Da = /:host\s*>\s*/,
                            La = navigator.userAgent.match("Trident");

                        function Ia() {}

                        function xa(t) {
                            if (!t.D) {
                                var e = {},
                                    n = {};
                                ka(t, n) && (e.P = n, t.rules = null), e.cssText = t.parsedCssText.replace(Go, "").replace(Bo, ""), t.D = e
                            }
                        }

                        function ka(t, e) {
                            var n = t.D;
                            if (!n) {
                                n = t.parsedCssText;
                                for (var i; t = Bo.exec(n);) "inherit" === (i = (t[2] || t[3]).trim()) && "unset" === i || (e[t[1].trim()] = i), i = !0;
                                return i
                            }
                            if (n.P) return Object.assign(e, n.P), !0
                        }

                        function ja(t, e, n) {
                            return e && (e = 0 <= e.indexOf(";") ? Ra(t, e, n) : ta(e, (function(e, i, r, o) {
                                return i ? ((i = ja(t, n[i], n)) && "initial" !== i ? "apply-shim-inherit" === i && (i = "inherit") : i = ja(t, n[r] || r, n) || r, e + (i || "") + o) : e + o
                            }))), e && e.trim() || ""
                        }

                        function Ra(t, e, n) {
                            e = e.split(";");
                            for (var i, r, o = 0; o < e.length; o++)
                                if (i = e[o]) {
                                    if (Uo.lastIndex = 0, r = Uo.exec(i)) i = ja(t, n[r[1]], n);
                                    else if (-1 !== (r = i.indexOf(":"))) {
                                        var a = i.substring(r);
                                        a = ja(t, a = a.trim(), n) || a, i = i.substring(0, r) + a
                                    }
                                    e[o] = i && i.lastIndexOf(";") === i.length - 1 ? i.slice(0, -1) : i || ""
                                } return e.join(";")
                        }

                        function Ba(t, e, n) {
                            var i = {},
                                r = {};
                            return Ko(e, (function(e) {
                                ! function(t, e, n, i) {
                                    if (e.D || xa(e), e.D.P) {
                                        var r = ia(t);
                                        t = r.is, r = r.ha, r = t ? fa(t, r) : "html";
                                        var o = e.parsedSelector,
                                            a = !!o.match(Da) || "html" === r && -1 < o.indexOf("html"),
                                            s = 0 === o.indexOf(":host") && !a;
                                        "shady" === n && (s = !(a = o === r + " > *." + r || -1 !== o.indexOf("html")) && 0 === o.indexOf(r)), (a || s) && (n = r, s && (e.F || (e.F = pa(Ta, e, Ta.h, t ? "." + t : "", r)), n = e.F || r), a && "html" === r && (n = e.F || e.O), i({
                                            Ba: n,
                                            ab: s,
                                            qb: a
                                        }))
                                    }
                                }(t, e, n, (function(n) {
                                    Pa.call(t._element || t, n.Ba) && (n.ab ? ka(e, i) : ka(e, r))
                                }))
                            }), null, !0), {
                                hb: r,
                                Za: i
                            }
                        }

                        function Ua(t, e, n, i) {
                            var r = ia(e),
                                o = fa(r.is, r.ha),
                                a = new RegExp("(?:^|[^.#[:])" + (e.extends ? "\\" + o.slice(0, -1) + "\\]" : o) + "($|[.:[\\s>+~])"),
                                s = Na(e);
                            r = s.M, s = s.cssBuild;
                            var l = function(t, e) {
                                t = t.h;
                                var n = {};
                                if (!xo && t)
                                    for (var i = 0, r = t[i]; i < t.length; r = t[++i]) {
                                        var o = r,
                                            a = e;
                                        o.u = new RegExp("\\b" + o.keyframesName + "(?!\\B|-)", "g"), o.g = o.keyframesName + "-" + a, o.F = o.F || o.selector, o.selector = o.F.replace(o.keyframesName, o.g), n[r.keyframesName] = Ha(r)
                                    }
                                return n
                            }(r, i);
                            return ha(e, r, (function(e) {
                                var r = "";
                                if (e.D || xa(e), e.D.cssText && (r = Ra(t, e.D.cssText, n)), e.cssText = r, !xo && !zo(e) && e.cssText) {
                                    var s = r = e.cssText;
                                    if (null == e.Ia && (e.Ia = Fo.test(r)), e.Ia)
                                        if (null == e.pa)
                                            for (var u in e.pa = [], l) r !== (s = (s = l[u])(r)) && (r = s, e.pa.push(u));
                                        else {
                                            for (u = 0; u < e.pa.length; ++u) r = (s = l[e.pa[u]])(r);
                                            s = r
                                        } e.cssText = s, e.F = e.F || e.selector, r = "." + i, s = 0;
                                    for (var c = (u = ra(e.F)).length, d = void 0; s < c && (d = u[s]); s++) u[s] = d.match(a) ? d.replace(o, r) : r + " " + d;
                                    e.selector = u.join(",")
                                }
                            }), s)
                        }

                        function Ha(t) {
                            return function(e) {
                                return e.replace(t.u, t.g)
                            }
                        }

                        function Fa(t, e) {
                            var n = Va,
                                i = Wo(t);
                            t.textContent = Yo(i, (function(t) {
                                var i = t.cssText = t.parsedCssText;
                                t.D && t.D.cssText && (i = i.replace(No, "").replace(Mo, ""), t.cssText = Ra(n, i, e))
                            }))
                        }
                        o.Object.defineProperties(Ia.prototype, {
                            g: {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return "x-scope"
                                }
                            }
                        });
                        var Va = new Ia,
                            Ga = {},
                            qa = window.customElements;
                        if (qa && !xo && !jo) {
                            var Ya = qa.define;
                            qa.define = function(t, e, n) {
                                Ga[t] || (Ga[t] = Xo(t)), Ya.call(qa, t, e, n)
                            }
                        }

                        function Wa() {
                            this.cache = {}
                        }

                        function za() {}
                        Wa.prototype.store = function(t, e, n, i) {
                            var r = this.cache[t] || [];
                            r.push({
                                P: e,
                                styleElement: n,
                                L: i
                            }), 100 < r.length && r.shift(), this.cache[t] = r
                        };
                        var Ka = new RegExp(Ta.g + "\\s*([^\\s]*)");

                        function Ja(t) {
                            return (t = (t.classList && t.classList.value ? t.classList.value : t.getAttribute("class") || "").match(Ka)) ? t[1] : ""
                        }

                        function Za(t) {
                            var e = na(t).getRootNode();
                            return e === t || e === t.ownerDocument ? "" : (t = e.host) ? ia(t).is : ""
                        }

                        function Xa(t) {
                            for (var e = 0; e < t.length; e++) {
                                var n = t[e];
                                if (n.target !== document.documentElement && n.target !== document.head)
                                    for (var i = 0; i < n.addedNodes.length; i++) {
                                        var r = n.addedNodes[i];
                                        if (r.nodeType === Node.ELEMENT_NODE) {
                                            var o = r.getRootNode(),
                                                a = Ja(r);
                                            if (a && o === r.ownerDocument && ("style" !== r.localName && "template" !== r.localName || "" === oa(r))) da(r, a);
                                            else if (o instanceof ShadowRoot)
                                                for ((o = Za(r)) !== a && ca(r, a, o), r = window.ShadyDOM.nativeMethods.querySelectorAll.call(r, ":not(." + Ta.g + ")"), a = 0; a < r.length; a++) {
                                                    var s = Za(o = r[a]);
                                                    s && ua(o, s)
                                                }
                                        }
                                    }
                            }
                        }
                        if (!(xo || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
                            var $a = new MutationObserver(Xa),
                                Qa = function(t) {
                                    $a.observe(t, {
                                        childList: !0,
                                        subtree: !0
                                    })
                                };
                            if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Qa(document);
                            else {
                                var ts = function() {
                                    Qa(document.body)
                                };
                                window.HTMLImports ? window.HTMLImports.whenReady(ts) : requestAnimationFrame((function() {
                                    if ("loading" === document.readyState) {
                                        var t = function() {
                                            ts(), document.removeEventListener("readystatechange", t)
                                        };
                                        document.addEventListener("readystatechange", t)
                                    } else ts()
                                }))
                            }
                            za = function() {
                                Xa($a.takeRecords())
                            }
                        }
                        var es = {},
                            ns = Promise.resolve();

                        function is(t) {
                            (t = es[t]) && (t._applyShimCurrentVersion = t._applyShimCurrentVersion || 0, t._applyShimValidatingVersion = t._applyShimValidatingVersion || 0, t._applyShimNextVersion = (t._applyShimNextVersion || 0) + 1)
                        }

                        function rs(t) {
                            return t._applyShimCurrentVersion === t._applyShimNextVersion
                        }
                        var os = {},
                            as = new Wa;

                        function ss() {
                            this.da = {}, this.i = document.documentElement;
                            var t = new vo;
                            t.rules = [], this.u = Ma(this.i, new Aa(t)), this.O = !1, this.g = this.h = null
                        }

                        function ls(t) {
                            var e = ia(t),
                                n = e.is;
                            e = e.ha;
                            var i = Ga[n] || null,
                                r = es[n];
                            if (r) return Ma(t, e = new Aa(n = r._styleAst, i, r.g, e, r = oa(r))), e
                        }

                        function us(t) {
                            if (!t.h && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
                                t.h = window.ShadyCSS.ApplyShim, t.h.invalidCallback = is;
                                var e = !0
                            } else e = !1;
                            return function(t) {
                                !t.g && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (t.g = window.ShadyCSS.CustomStyleInterface, t.g.transformCallback = function(e) {
                                    t.Ma(e)
                                }, t.g.validateCallback = function() {
                                    requestAnimationFrame((function() {
                                        (t.g.enqueued || t.O) && t.flushCustomStyles()
                                    }))
                                })
                            }(t), e
                        }

                        function cs(t, e, n) {
                            var i = ia(e).is;
                            if (n.K) {
                                var r, o = n.K;
                                for (r in o) null === r ? e.style.removeProperty(r) : e.style.setProperty(r, o[r])
                            }!(o = es[i]) && e !== t.i || o && "" !== oa(o) || !o || !o._style || rs(o) || ((rs(o) || o._applyShimValidatingVersion !== o._applyShimNextVersion) && (us(t), t.h && t.h.transformRules(o._styleAst, i), o._style.textContent = ha(e, n.M), function(t) {
                                t._applyShimValidatingVersion = t._applyShimNextVersion, t._validating || (t._validating = !0, ns.then((function() {
                                    t._applyShimCurrentVersion = t._applyShimNextVersion, t._validating = !1
                                })))
                            }(o)), xo && (t = e.shadowRoot) && (t = t.querySelector("style")) && (t.textContent = ha(e, n.M)), n.M = o._styleAst)
                        }

                        function ds(t, e) {
                            return (e = na(e).getRootNode().host) ? Na(e) || ls(e) ? e : ds(t, e) : t.i
                        }

                        function hs(t, e, n) {
                            var i = ds(t, e),
                                r = Na(i),
                                o = r.R;
                            for (var a in i === t.i || o || (hs(t, i, r), o = r.R), t = Object.create(o || null), i = Ba(e, n.M, n.cssBuild), e = function(t, e) {
                                    var n = {},
                                        i = [];
                                    return Ko(t, (function(t) {
                                        t.D || xa(t);
                                        var r = t.F || t.parsedSelector;
                                        e && t.D.P && r && Pa.call(e, r) && (ka(t, n), t = t.index, r = parseInt(t / 32, 10), i[r] = (i[r] || 0) | 1 << t % 32)
                                    }), null, !0), {
                                        P: n,
                                        key: i
                                    }
                                }(r.M, e).P, Object.assign(t, i.Za, e, i.hb), e = n.K)((r = e[a]) || 0 === r) && (t[a] = r);
                            for (a = Va, e = Object.getOwnPropertyNames(t), r = 0; r < e.length; r++) t[i = e[r]] = ja(a, t[i], t);
                            n.R = t
                        }(t = ss.prototype).flush = function() {
                            za()
                        }, t.Xa = function(t) {
                            return Wo(t)
                        }, t.lb = function(t) {
                            return Yo(t)
                        }, t.prepareTemplate = function(t, e, n) {
                            this.prepareTemplateDom(t, e), this.prepareTemplateStyles(t, e, n)
                        }, t.prepareTemplateStyles = function(t, e, n) {
                            if (!t._prepared && !jo) {
                                xo || Ga[e] || (Ga[e] = Xo(e)), t._prepared = !0, t.name = e, t.extends = n, es[e] = t;
                                var i = oa(t),
                                    r = aa(i);
                                n = {
                                    is: e,
                                    extends: n
                                };
                                for (var o = [], a = t.content.querySelectorAll("style"), s = 0; s < a.length; s++) {
                                    var l = a[s];
                                    if (l.hasAttribute("shady-unscoped")) {
                                        if (!xo) {
                                            var u = l.textContent;
                                            if (!qo.has(u)) {
                                                qo.add(u);
                                                var c = document.createElement("style");
                                                c.setAttribute("shady-unscoped", ""), c.textContent = u, document.head.appendChild(c)
                                            }
                                            l.parentNode.removeChild(l)
                                        }
                                    } else o.push(l.textContent), l.parentNode.removeChild(l)
                                }
                                o = o.join("").trim() + (os[e] || ""), us(this), r || ((a = !i) && (a = Uo.test(o) || Bo.test(o), Uo.lastIndex = 0, Bo.lastIndex = 0), s = yo(o), a && Ro && this.h && this.h.transformRules(s, e), t._styleAst = s), a = [], Ro || (a = function(t) {
                                    var e = {},
                                        n = [],
                                        i = 0;
                                    for (var r in Ko(t, (function(t) {
                                            xa(t), t.index = i++, t = t.D.cssText;
                                            for (var n; n = Ho.exec(t);) {
                                                var r = n[1];
                                                ":" !== n[2] && (e[r] = !0)
                                            }
                                        }), (function(t) {
                                            n.push(t)
                                        })), t.h = n, t = [], e) t.push(r);
                                    return t
                                }(t._styleAst)), a.length && !Ro || (s = xo ? t.content : null, e = Ga[e] || null, i = (i = ha(n, t._styleAst, null, i, r ? o : "")).length ? Jo(i, n.is, s, e) : null, t._style = i), t.g = a
                            }
                        }, t.fb = function(t, e) {
                            os[e] = t.join(" ")
                        }, t.prepareTemplateDom = function(t, e) {
                            if (!jo) {
                                var n = oa(t);
                                xo || "shady" === n || t._domPrepared || (t._domPrepared = !0, function(t, e) {
                                    la(Ta, t, (function(t) {
                                        ua(t, e || "")
                                    }))
                                }(t.content, e))
                            }
                        }, t.flushCustomStyles = function() {
                            if (!jo) {
                                var t = us(this);
                                if (this.g) {
                                    var e = this.g.processStyles();
                                    if ((t || this.g.enqueued) && !aa(this.u.cssBuild)) {
                                        if (Ro) {
                                            if (!this.u.cssBuild)
                                                for (t = 0; t < e.length; t++) {
                                                    var n = this.g.getStyleForCustomStyle(e[t]);
                                                    if (n && Ro && this.h) {
                                                        var i = Wo(n);
                                                        us(this), this.h.transformRules(i), n.textContent = Yo(i)
                                                    }
                                                }
                                        } else {
                                            for (function(t, e) {
                                                    (e = e.map((function(e) {
                                                        return t.g.getStyleForCustomStyle(e)
                                                    })).filter((function(t) {
                                                        return !!t
                                                    }))).sort((function(t, e) {
                                                        return (t = e.compareDocumentPosition(t)) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : t & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0
                                                    })), t.u.M.rules = e.map((function(t) {
                                                        return Wo(t)
                                                    }))
                                                }(this, e), hs(this, this.i, this.u), t = 0; t < e.length; t++)(n = this.g.getStyleForCustomStyle(e[t])) && Fa(n, this.u.R);
                                            this.O && this.styleDocument()
                                        }
                                        this.g.enqueued = !1
                                    }
                                }
                            }
                        }, t.styleElement = function(t, e) {
                            if (jo) {
                                if (e) {
                                    Na(t) || Ma(t, new Aa(null));
                                    var n = Na(t);
                                    n.K = n.K || {}, Object.assign(n.K, e), cs(this, t, n)
                                }
                            } else if (n = Na(t) || ls(t))
                                if (t !== this.i && (this.O = !0), e && (n.K = n.K || {}, Object.assign(n.K, e)), Ro) cs(this, t, n);
                                else if (this.flush(), hs(this, t, n), n.za && n.za.length) {
                                var i;
                                e = ia(t).is;
                                t: {
                                    if (i = as.cache[e])
                                        for (var r = i.length - 1; 0 <= r; r--) {
                                            var o = i[r];
                                            e: {
                                                for (var a = n.za, s = 0; s < a.length; s++) {
                                                    var l = a[s];
                                                    if (o.P[l] !== n.R[l]) {
                                                        a = !1;
                                                        break e
                                                    }
                                                }
                                                a = !0
                                            }
                                            if (a) {
                                                i = o;
                                                break t
                                            }
                                        }
                                    i = void 0
                                }
                                a = i ? i.styleElement : null, r = n.L, (o = i && i.L) || (o = e + "-" + (o = this.da[e] = (this.da[e] || 0) + 1)), n.L = o, o = n.L, s = Va, s = a ? a.textContent || "" : Ua(s, t, n.R, o);
                                var u = (l = Na(t)).g;
                                u && !xo && u !== a && (u._useCount--, 0 >= u._useCount && u.parentNode && u.parentNode.removeChild(u)), xo ? l.g ? (l.g.textContent = s, a = l.g) : s && (a = Jo(s, o, t.shadowRoot, l.h)) : a ? a.parentNode || (La && -1 < s.indexOf("@media") && (a.textContent = s), $o(a, null, l.h)) : s && (a = Jo(s, o, null, l.h)), a && (a._useCount = a._useCount || 0, l.g != a && a._useCount++, l.g = a), o = a, xo || (a = n.L, l = s = t.getAttribute("class") || "", r && (l = s.replace(new RegExp("\\s*x-scope\\s*" + r + "\\s*", "g"), " ")), s !== (l += (l ? " " : "") + "x-scope " + a) && ea(t, l)), i || as.store(e, n.R, o, n.L)
                            }
                        }, t.styleDocument = function(t) {
                            this.styleSubtree(this.i, t)
                        }, t.styleSubtree = function(t, e) {
                            var n = na(t),
                                i = n.shadowRoot,
                                r = t === this.i;
                            if ((i || r) && this.styleElement(t, e), t = r ? n : i)
                                for (t = Array.from(t.querySelectorAll("*")).filter((function(t) {
                                        return na(t).shadowRoot
                                    })), e = 0; e < t.length; e++) this.styleSubtree(t[e])
                        }, t.Ma = function(t) {
                            var e = this,
                                n = oa(t);
                            if (n !== this.u.cssBuild && (this.u.cssBuild = n), !aa(n)) {
                                var i = Wo(t);
                                Ko(i, (function(t) {
                                    if (xo) ya(t);
                                    else {
                                        var i = Ta;
                                        t.selector = t.parsedSelector, ya(t), t.selector = t.F = pa(i, t, i.i, void 0, void 0)
                                    }
                                    Ro && "" === n && (us(e), e.h && e.h.transformRule(t))
                                })), Ro ? t.textContent = Yo(i) : this.u.M.rules.push(i)
                            }
                        }, t.getComputedStyleValue = function(t, e) {
                            var n;
                            return Ro || (n = (Na(t) || Na(ds(this, t))).R[e]), (n = n || window.getComputedStyle(t).getPropertyValue(e)) ? n.trim() : ""
                        }, t.kb = function(t, e) {
                            var n = na(t).getRootNode();
                            if (e = e ? ("string" == typeof e ? e : String(e)).split(/\s/) : [], !(n = n.host && n.host.localName)) {
                                var i = t.getAttribute("class");
                                if (i) {
                                    i = i.split(/\s/);
                                    for (var r = 0; r < i.length; r++)
                                        if (i[r] === Ta.g) {
                                            n = i[r + 1];
                                            break
                                        }
                                }
                            }
                            n && e.push(Ta.g, n), Ro || (n = Na(t)) && n.L && e.push(Va.g, n.L), ea(t, e.join(" "))
                        }, t.Ta = function(t) {
                            return Na(t)
                        }, t.jb = function(t, e) {
                            ua(t, e)
                        }, t.mb = function(t, e) {
                            ua(t, e, !0)
                        }, t.ib = function(t) {
                            return Za(t)
                        }, t.Va = function(t) {
                            return Ja(t)
                        }, ss.prototype.flush = ss.prototype.flush, ss.prototype.prepareTemplate = ss.prototype.prepareTemplate, ss.prototype.styleElement = ss.prototype.styleElement, ss.prototype.styleDocument = ss.prototype.styleDocument, ss.prototype.styleSubtree = ss.prototype.styleSubtree, ss.prototype.getComputedStyleValue = ss.prototype.getComputedStyleValue, ss.prototype.setElementClass = ss.prototype.kb, ss.prototype._styleInfoForNode = ss.prototype.Ta, ss.prototype.transformCustomStyleForDocument = ss.prototype.Ma, ss.prototype.getStyleAst = ss.prototype.Xa, ss.prototype.styleAstToString = ss.prototype.lb, ss.prototype.flushCustomStyles = ss.prototype.flushCustomStyles, ss.prototype.scopeNode = ss.prototype.jb, ss.prototype.unscopeNode = ss.prototype.mb, ss.prototype.scopeForNode = ss.prototype.ib, ss.prototype.currentScopeForNode = ss.prototype.Va, ss.prototype.prepareAdoptedCssText = ss.prototype.fb, Object.defineProperties(ss.prototype, {
                            nativeShadow: {
                                get: function() {
                                    return xo
                                }
                            },
                            nativeCss: {
                                get: function() {
                                    return Ro
                                }
                            }
                        });
                        var fs, ps, ms = new ss;
                        window.ShadyCSS && (fs = window.ShadyCSS.ApplyShim, ps = window.ShadyCSS.CustomStyleInterface), window.ShadyCSS = {
                                ScopingShim: ms,
                                prepareTemplate: function(t, e, n) {
                                    ms.flushCustomStyles(), ms.prepareTemplate(t, e, n)
                                },
                                prepareTemplateDom: function(t, e) {
                                    ms.prepareTemplateDom(t, e)
                                },
                                prepareTemplateStyles: function(t, e, n) {
                                    ms.flushCustomStyles(), ms.prepareTemplateStyles(t, e, n)
                                },
                                styleSubtree: function(t, e) {
                                    ms.flushCustomStyles(), ms.styleSubtree(t, e)
                                },
                                styleElement: function(t) {
                                    ms.flushCustomStyles(), ms.styleElement(t)
                                },
                                styleDocument: function(t) {
                                    ms.flushCustomStyles(), ms.styleDocument(t)
                                },
                                flushCustomStyles: function() {
                                    ms.flushCustomStyles()
                                },
                                getComputedStyleValue: function(t, e) {
                                    return ms.getComputedStyleValue(t, e)
                                },
                                nativeCss: Ro,
                                nativeShadow: xo,
                                cssBuild: Eo,
                                disableRuntime: jo
                            }, fs && (window.ShadyCSS.ApplyShim = fs), ps && (window.ShadyCSS.CustomStyleInterface = ps),
                            function(t) {
                                function e(t) {
                                    return "" == t && (o.call(this), this.m = !0), t.toLowerCase()
                                }

                                function n(t) {
                                    var e = t.charCodeAt(0);
                                    return 32 < e && 127 > e && -1 == [34, 35, 60, 62, 63, 96].indexOf(e) ? t : encodeURIComponent(t)
                                }

                                function i(t) {
                                    var e = t.charCodeAt(0);
                                    return 32 < e && 127 > e && -1 == [34, 35, 60, 62, 96].indexOf(e) ? t : encodeURIComponent(t)
                                }

                                function r(t, r, a) {
                                    function s(t) {
                                        y.push(t)
                                    }
                                    var l = r || "scheme start",
                                        f = 0,
                                        p = "",
                                        m = !1,
                                        v = !1,
                                        y = [];
                                    t: for (;
                                        (null != t[f - 1] || 0 == f) && !this.m;) {
                                        var g = t[f];
                                        switch (l) {
                                            case "scheme start":
                                                if (!g || !d.test(g)) {
                                                    if (r) {
                                                        s("Invalid scheme.");
                                                        break t
                                                    }
                                                    p = "", l = "no scheme";
                                                    continue
                                                }
                                                p += g.toLowerCase(), l = "scheme";
                                                break;
                                            case "scheme":
                                                if (g && h.test(g)) p += g.toLowerCase();
                                                else {
                                                    if (":" != g) {
                                                        if (r) {
                                                            null != g && s("Code point not allowed in scheme: " + g);
                                                            break t
                                                        }
                                                        p = "", f = 0, l = "no scheme";
                                                        continue
                                                    }
                                                    if (this.l = p, p = "", r) break t;
                                                    void 0 !== u[this.l] && (this.G = !0), l = "file" == this.l ? "relative" : this.G && a && a.l == this.l ? "relative or authority" : this.G ? "authority first slash" : "scheme data"
                                                }
                                                break;
                                            case "scheme data":
                                                "?" == g ? (this.A = "?", l = "query") : "#" == g ? (this.C = "#", l = "fragment") : null != g && "\t" != g && "\n" != g && "\r" != g && (this.va += n(g));
                                                break;
                                            case "no scheme":
                                                if (a && void 0 !== u[a.l]) {
                                                    l = "relative";
                                                    continue
                                                }
                                                s("Missing scheme."), o.call(this), this.m = !0;
                                                break;
                                            case "relative or authority":
                                                if ("/" != g || "/" != t[f + 1]) {
                                                    s("Expected /, got: " + g), l = "relative";
                                                    continue
                                                }
                                                l = "authority ignore slashes";
                                                break;
                                            case "relative":
                                                if (this.G = !0, "file" != this.l && (this.l = a.l), null == g) {
                                                    this.o = a.o, this.v = a.v, this.s = a.s.slice(), this.A = a.A, this.B = a.B, this.j = a.j;
                                                    break t
                                                }
                                                if ("/" == g || "\\" == g) "\\" == g && s("\\ is an invalid code point."), l = "relative slash";
                                                else if ("?" == g) this.o = a.o, this.v = a.v, this.s = a.s.slice(), this.A = "?", this.B = a.B, this.j = a.j, l = "query";
                                                else {
                                                    if ("#" != g) {
                                                        l = t[f + 1];
                                                        var _ = t[f + 2];
                                                        ("file" != this.l || !d.test(g) || ":" != l && "|" != l || null != _ && "/" != _ && "\\" != _ && "?" != _ && "#" != _) && (this.o = a.o, this.v = a.v, this.B = a.B, this.j = a.j, this.s = a.s.slice(), this.s.pop()), l = "relative path";
                                                        continue
                                                    }
                                                    this.o = a.o, this.v = a.v, this.s = a.s.slice(), this.A = a.A, this.C = "#", this.B = a.B, this.j = a.j, l = "fragment"
                                                }
                                                break;
                                            case "relative slash":
                                                if ("/" != g && "\\" != g) {
                                                    "file" != this.l && (this.o = a.o, this.v = a.v, this.B = a.B, this.j = a.j), l = "relative path";
                                                    continue
                                                }
                                                "\\" == g && s("\\ is an invalid code point."), l = "file" == this.l ? "file host" : "authority ignore slashes";
                                                break;
                                            case "authority first slash":
                                                if ("/" != g) {
                                                    s("Expected '/', got: " + g), l = "authority ignore slashes";
                                                    continue
                                                }
                                                l = "authority second slash";
                                                break;
                                            case "authority second slash":
                                                if (l = "authority ignore slashes", "/" != g) {
                                                    s("Expected '/', got: " + g);
                                                    continue
                                                }
                                                break;
                                            case "authority ignore slashes":
                                                if ("/" != g && "\\" != g) {
                                                    l = "authority";
                                                    continue
                                                }
                                                s("Expected authority, got: " + g);
                                                break;
                                            case "authority":
                                                if ("@" == g) {
                                                    for (m && (s("@ already seen."), p += "%40"), m = !0, g = 0; g < p.length; g++) "\t" == (_ = p[g]) || "\n" == _ || "\r" == _ ? s("Invalid whitespace in authority.") : ":" == _ && null === this.j ? this.j = "" : (_ = n(_), null !== this.j ? this.j += _ : this.B += _);
                                                    p = ""
                                                } else {
                                                    if (null == g || "/" == g || "\\" == g || "?" == g || "#" == g) {
                                                        f -= p.length, p = "", l = "host";
                                                        continue
                                                    }
                                                    p += g
                                                }
                                                break;
                                            case "file host":
                                                if (null == g || "/" == g || "\\" == g || "?" == g || "#" == g) {
                                                    2 != p.length || !d.test(p[0]) || ":" != p[1] && "|" != p[1] ? (0 != p.length && (this.o = e.call(this, p), p = ""), l = "relative path start") : l = "relative path";
                                                    continue
                                                }
                                                "\t" == g || "\n" == g || "\r" == g ? s("Invalid whitespace in file host.") : p += g;
                                                break;
                                            case "host":
                                            case "hostname":
                                                if (":" != g || v) {
                                                    if (null == g || "/" == g || "\\" == g || "?" == g || "#" == g) {
                                                        if (this.o = e.call(this, p), p = "", l = "relative path start", r) break t;
                                                        continue
                                                    }
                                                    "\t" != g && "\n" != g && "\r" != g ? ("[" == g ? v = !0 : "]" == g && (v = !1), p += g) : s("Invalid code point in host/hostname: " + g)
                                                } else if (this.o = e.call(this, p), p = "", l = "port", "hostname" == r) break t;
                                                break;
                                            case "port":
                                                if (/[0-9]/.test(g)) p += g;
                                                else {
                                                    if (null == g || "/" == g || "\\" == g || "?" == g || "#" == g || r) {
                                                        if ("" != p && ((p = parseInt(p, 10)) != u[this.l] && (this.v = p + ""), p = ""), r) break t;
                                                        l = "relative path start";
                                                        continue
                                                    }
                                                    "\t" == g || "\n" == g || "\r" == g ? s("Invalid code point in port: " + g) : (o.call(this), this.m = !0)
                                                }
                                                break;
                                            case "relative path start":
                                                if ("\\" == g && s("'\\' not allowed in path."), l = "relative path", "/" != g && "\\" != g) continue;
                                                break;
                                            case "relative path":
                                                null != g && "/" != g && "\\" != g && (r || "?" != g && "#" != g) ? "\t" != g && "\n" != g && "\r" != g && (p += n(g)) : ("\\" == g && s("\\ not allowed in relative path."), (_ = c[p.toLowerCase()]) && (p = _), ".." == p ? (this.s.pop(), "/" != g && "\\" != g && this.s.push("")) : "." == p && "/" != g && "\\" != g ? this.s.push("") : "." != p && ("file" == this.l && 0 == this.s.length && 2 == p.length && d.test(p[0]) && "|" == p[1] && (p = p[0] + ":"), this.s.push(p)), p = "", "?" == g ? (this.A = "?", l = "query") : "#" == g && (this.C = "#", l = "fragment"));
                                                break;
                                            case "query":
                                                r || "#" != g ? null != g && "\t" != g && "\n" != g && "\r" != g && (this.A += i(g)) : (this.C = "#", l = "fragment");
                                                break;
                                            case "fragment":
                                                null != g && "\t" != g && "\n" != g && "\r" != g && (this.C += g)
                                        }
                                        f++
                                    }
                                }

                                function o() {
                                    this.B = this.va = this.l = "", this.j = null, this.v = this.o = "", this.s = [], this.C = this.A = "", this.G = this.m = !1
                                }

                                function a(t, e) {
                                    void 0 === e || e instanceof a || (e = new a(String(e))), this.g = t, o.call(this), r.call(this, this.g.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), null, e)
                                }
                                var s = !1;
                                try {
                                    var l = new URL("b", "http://a");
                                    l.pathname = "c%20d", s = "http://a/c%20d" === l.href
                                } catch (t) {
                                    console.error("CATCH 21", t);                                }
                                if (!s) {
                                    var u = Object.create(null);
                                    u.ftp = 21, u.file = 0, u.gopher = 70, u.http = 80, u.https = 443, u.ws = 80, u.wss = 443;
                                    var c = Object.create(null);
                                    c["%2e"] = ".", c[".%2e"] = "..", c["%2e."] = "..", c["%2e%2e"] = "..";
                                    var d = /[a-zA-Z]/,
                                        h = /[a-zA-Z0-9+\-.]/;
                                    a.prototype = {
                                        toString: function() {
                                            return this.href
                                        },
                                        get href() {
                                            if (this.m) return this.g;
                                            var t = "";
                                            return "" == this.B && null == this.j || (t = this.B + (null != this.j ? ":" + this.j : "") + "@"), this.protocol + (this.G ? "//" + t + this.host : "") + this.pathname + this.A + this.C
                                        },
                                        set href(t) {
                                            o.call(this), r.call(this, t)
                                        },
                                        get protocol() {
                                            return this.l + ":"
                                        },
                                        set protocol(t) {
                                            this.m || r.call(this, t + ":", "scheme start")
                                        },
                                        get host() {
                                            return this.m ? "" : this.v ? this.o + ":" + this.v : this.o
                                        },
                                        set host(t) {
                                            !this.m && this.G && r.call(this, t, "host")
                                        },
                                        get hostname() {
                                            return this.o
                                        },
                                        set hostname(t) {
                                            !this.m && this.G && r.call(this, t, "hostname")
                                        },
                                        get port() {
                                            return this.v
                                        },
                                        set port(t) {
                                            !this.m && this.G && r.call(this, t, "port")
                                        },
                                        get pathname() {
                                            return this.m ? "" : this.G ? "/" + this.s.join("/") : this.va
                                        },
                                        set pathname(t) {
                                            !this.m && this.G && (this.s = [], r.call(this, t, "relative path start"))
                                        },
                                        get search() {
                                            return this.m || !this.A || "?" == this.A ? "" : this.A
                                        },
                                        set search(t) {
                                            !this.m && this.G && (this.A = "?", "?" == t[0] && (t = t.slice(1)), r.call(this, t, "query"))
                                        },
                                        get hash() {
                                            return this.m || !this.C || "#" == this.C ? "" : this.C
                                        },
                                        set hash(t) {
                                            this.m || (t ? (this.C = "#", "#" == t[0] && (t = t.slice(1)), r.call(this, t, "fragment")) : this.C = "")
                                        },
                                        get origin() {
                                            var t;
                                            if (this.m || !this.l) return "";
                                            switch (this.l) {
                                                case "data":
                                                case "file":
                                                case "javascript":
                                                case "mailto":
                                                    return "null"
                                            }
                                            return (t = this.host) ? this.l + "://" + t : ""
                                        }
                                    };
                                    var f = t.URL;
                                    f && (a.createObjectURL = function(t) {
                                        return f.createObjectURL.apply(f, arguments)
                                    }, a.revokeObjectURL = function(t) {
                                        f.revokeObjectURL(t)
                                    }), t.URL = a
                                }
                            }(window);
                        var vs = window.customElements,
                            ys = !1,
                            gs = null;

                        function _s() {
                            window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document), gs && gs(), ys = !0, window.WebComponents.ready = !0, document.dispatchEvent(new CustomEvent("WebComponentsReady", {
                                bubbles: !0
                            }))
                        }
                        vs.polyfillWrapFlushCallback && vs.polyfillWrapFlushCallback((function(t) {
                            gs = t, ys && t()
                        })), "complete" !== document.readyState ? (window.addEventListener("load", _s), window.addEventListener("DOMContentLoaded", (function() {
                            window.removeEventListener("load", _s), _s()
                        }))) : _s()
                    }).call(this)
                },
                "_kit_function3_": (t, e, n) => {
                    "use strict";
                    n.r(e), n.d(e, {
                        default: () => p
                    });
                    var i = n("_kit_function17_"),
                        r = n.n(i),
                        o = n("_kit_function182_"),
                        a = n.n(o),
                        s = n("_kit_function188_"),
                        l = n("_kit_function200_"),
                        u = n.n(l),
                        c = n("_kit_function208_"),
                        d = n.n(c),
                        h = n("_kit_function152_");

                    function f(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    const p = function() {
                        function t(e) {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), this.id = u().generate(), this.config = e, this.float = null, this.mode = "top", this.isKilled = !1
                        }
                        var e, n, i;
                        return e = t, (n = [{
                            key: "kill",
                            value: function() {
                                this.isKilled = !0, h.P ? clearInterval(this.fillerHeightCheck) : this.mutationObserver && (this.mutationObserver.disconnect(), this.mutationObserver = null), this.updateFloatPosition && window.removeEventListener("scroll", this.updateFloatPosition), this.filler && this.filler.remove(), this.float && this.float.remove()
                            }
                        }, {
                            key: "setup",
                            value: function() {
                                var t = this,
                                    e = this.config.params,
                                    n = e.float,
                                    i = e.stickyMargin,
                                    o = e.bottomLimiter,
                                    l = e.target,
                                    u = e.withinContainer,
                                    c = this.config.showBranding,
                                    f = l.frameSelector ? d().iframeContent(l.frameSelector) : null;
                                if (f && (l.bindTo = f.iframeDocument), this.target = l.node ? l.node : d().findSelector(l), this.target) {
                                    this.float = (0, s.createElement)(n.element), this.float.id = this.id, this.target.insertAdjacentElement(l.insertMethod || "afterbegin", this.float);
                                    var p = n.element.styles.width || "".concat(this.target.getBoundingClientRect().width, "px"),
                                        m = {
                                            productId: this.id,
                                            config: this.config.adSlots[0],
                                            element: this.float,
                                            productName: "Float",
                                            productContainer: this.float,
                                            additionalOptions: {
                                                targetWidth: p
                                            },
                                            localBranding: c
                                        };
                                    this.adSlot = new(r())(m), this.float.style.width = p, this.float.style.transition = "none", this.filler = (0, s.createElement)({
                                        name: "DIV",
                                        styles: {
                                            "width": p,
                                            "height": "1px",
                                            "display": "block",
                                            "opacity": "0"
                                        }
                                    }), this.float.insertAdjacentElement("beforebegin", this.filler), a()(this.target), a()(this.filler), this.bottomLimit = 1 / 0, o && (o.offset = o.offset || 0, this.bottomLimiter = o.node || d().findSelector({
                                        selector: o.selector,
                                        selectorEq: o.selectorEq
                                    }), this.bottomLimiter && (a()(this.bottomLimiter), this.bottomLimit = ("bottom" === o.stopAt ? this.bottomLimiter._absoluteBottom : this.bottomLimiter._absoluteTop) - o.offset)), this.updateFloatPosition = function() {
                                        var e = window.scrollY || window.pageYOffset;
                                        if (t.prevScrollY = e, t.filler.style.height = "1px", a()(t.filler), t.bottomLimiter && (a()(t.bottomLimiter), t.bottomLimit = ("bottom" === o.stopAt ? t.bottomLimiter._absoluteBottom : t.bottomLimiter._absoluteTop) - o.offset), u) e + i > t.bottomLimiter._absoluteTop && e + t.floatHeight + i < t.bottomLimiter._absoluteBottom ? (t.float.style.position = "fixed", t.float.style.top = "".concat(i, "px"), t.float.style.bottom = "") : e + t.floatHeight + i >= t.bottomLimiter._absoluteBottom ? (t.float.style.position = "absolute", t.float.style.bottom = "0", t.float.style.top = "") : (t.float.style.position = "absolute", t.float.style.top = "0", t.float.style.bottom = "");
                                        else {
                                            if (e + i > t.filler._absoluteTop && "bottom" !== t.mode) t.mode = "floating", t.float.style.position = "fixed", t.float.style.top = "".concat(i, "px"), t.filler.style.height = t.floatHeight;
                                            else if (e + i < t.filler._absoluteTop) {
                                                if ("top" === t.mode) return;
                                                t.mode = "top", t.float.style.position = "static", t.float.style.top = "", t.filler.style.height = "1px"
                                            }
                                            if (t.bottomLimit - t.floatHeight < e + i) {
                                                t.mode = "bottom";
                                                var n = t.bottomLimit - t.floatHeight - (e + i);
                                                t.adSlot.block(), t.float.style.transform = "translateY(".concat(n, "px)")
                                            } else {
                                                if ("floating" === t.mode || "top" === t.mode) return;
                                                t.mode = "floating", t.float.style.transform = "none", t.adSlot.unblock()
                                            }
                                        }
                                    }, window.addEventListener("scroll", this.updateFloatPosition);
                                    var v = function() {
                                        if (!t.isKilled) {
                                            var e = Math.floor(t.float.clientHeight);
                                            t.floatHeight = e, t.filler.style.height = "".concat(parseInt("".concat(t.floatHeight), 10), "px"), t.updateFloatPosition()
                                        }
                                    };
                                    h.P ? this.fillerHeightCheck = setInterval(v, 1e3) : (this.mutationObserver = new MutationObserver(v), this.mutationObserver.observe(this.float, {
                                        attributes: !0,
                                        childList: !0,
                                        subtree: !0
                                    }))
                                }
                            }
                        }]) && f(e.prototype, n), i && f(e, i), t
                    }()
                },
                "_kit_function4_": (t, e, n) => {
                    "use strict";
                    n.r(e), n.d(e, {
                        default: () => y
                    });
                    var i = n("_kit_function153_"),
                        r = n.n(i),
                        o = n("_kit_function182_"),
                        a = n.n(o),
                        s = n("_kit_function188_"),
                        l = n("_kit_function190_"),
                        u = n("_kit_function200_"),
                        c = n.n(u),
                        d = n("_kit_function208_"),
                        h = n.n(d),
                        f = n("_kit_function154_");

                    function p(t) {
                        return function(t) {
                            if (Array.isArray(t)) return m(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(t) || function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return m(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(t, e)
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function m(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                        return i
                    }

                    function v(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    const y = function() {
                        function t(e) {
                            var n, i, o, a = this;
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), o = function(t) {
                                var e = (0, l.deepClone)(a.config);
                                e.adSlots = [a.adSlots[0]], a.adSlots.length > 1 && a.adSlots.shift(), e.params.target.node = t, e.params.target = {
                                    node: t,
                                    insertMethod: "beforeend"
                                }, t.style.position = "relative", e.params.withinContainer = !0, e.params.bottomLimiter = {
                                    node: t,
                                    stopAt: "bottom",
                                    offset: 0
                                };
                                var n = new(r())(e);
                                a.floatInstances.push(n), n.setup()
                            }, (i = "onSlotFound") in (n = this) ? Object.defineProperty(n, i, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[i] = o, this.id = c().generate(), this.config = e, this.adSlots = p(e.adSlots), this.isKilled = !1, this.floatInstances = [], this.floatsCount = 0
                        }
                        var e, n, i;
                        return e = t, (n = [{
                            key: "kill",
                            value: function() {
                                this.isKilled = !0, clearInterval(this.spaceCheckInterval), this.floatInstances.forEach((function(t) {
                                    return t.kill()
                                })), this.column && this.column.remove()
                            }
                        }, {
                            key: "createFloatContainer",
                            value: function() {
                                var t = this.config.params,
                                    e = t.distance,
                                    n = t.floatContainer,
                                    i = (0, s.createElement)(n.element),
                                    r = {
                                        "box-sizing": "border-box",
                                        "width": "100%",
                                        "height": "".concat(e, "px")
                                    };
                                return Object.assign(i.style, r), i
                            }
                        }, {
                            key: "setup",
                            value: function() {
                                var t = this,
                                    e = {
                                        selector: "body",
                                        stopAt: "bottom",
                                        offset: 0
                                    },
                                    n = this.config.params,
                                    i = n.target,
                                    r = n.column,
                                    o = n.distance,
                                    l = n.maxSlotCount,
                                    u = this.config.params.bottomLimiter;
                                u = u || e;
                                var c = i.frameSelector ? h().iframeContent(i.frameSelector) : null;
                                if (c && (i.bindTo = c.iframeDocument, u.bindTo = c.iframeDocument), this.bottomLimiter = h().findSelector(u), this.target = h().findSelector(i), this.target) {
                                    this.column = (0, s.createElement)(r.element), this.target.insertAdjacentElement(i.insertMethod || "beforeend", this.column), this.bottomLimiter || (u = e, this.bottomLimiter = document.querySelector(u.selector));
                                    var d = function() {
                                        if (!t.isKilled)
                                            for (var e, n, i, r = (n = (e = u).stopAt, i = e.offset, a()(t.column), a()(t.bottomLimiter), ("top" === n ? t.bottomLimiter._absoluteTop : t.bottomLimiter._absoluteBottom) - i - t.column._absoluteTop), s = Math.floor((r - t.floatsCount * o) / o), c = 0; c < s; c++) {
                                                if (t.floatsCount >= l) return;
                                                var d = t.createFloatContainer();
                                                t.column.appendChild(d), t.onSlotFound(d), t.floatsCount++
                                            }
                                    };
                                    d(), this.spaceCheckInterval = setInterval(d, f.I)
                                }
                            }
                        }]) && v(e.prototype, n), i && v(e, i), t
                    }()
                },
                "_kit_function5_": () => {
                    ! function() {
                        "use strict";
                        if ("object" == typeof window)
                            if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                                get: function() {
                                    return this.intersectionRatio > 0
                                }
                            });
                            else {
                                var t = function(t) {
                                        for (var e = window.document, n = r(e); n;) n = r(e = n.ownerDocument);
                                        return e
                                    }(),
                                    e = [],
                                    n = null,
                                    i = null;
                                a.prototype.THROTTLE_TIMEOUT = 100, a.prototype.POLL_INTERVAL = null, a.prototype.USE_MUTATION_OBSERVER = !0, a._setupCrossOriginUpdater = function() {
                                    return n || (n = function(t, n) {
                                        i = t && n ? d(t, n) : {
                                            top: 0,
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            width: 0,
                                            height: 0
                                        }, e.forEach((function(t) {
                                            t._checkForIntersections()
                                        }))
                                    }), n
                                }, a._resetCrossOriginUpdater = function() {
                                    n = null, i = null
                                }, a.prototype.observe = function(t) {
                                    if (!this._observationTargets.some((function(e) {
                                            return e.element == t
                                        }))) {
                                        if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                                        this._registerInstance(), this._observationTargets.push({
                                            element: t,
                                            entry: null
                                        }), this._monitorIntersections(t.ownerDocument), this._checkForIntersections()
                                    }
                                }, a.prototype.unobserve = function(t) {
                                    this._observationTargets = this._observationTargets.filter((function(e) {
                                        return e.element != t
                                    })), this._unmonitorIntersections(t.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
                                }, a.prototype.disconnect = function() {
                                    this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
                                }, a.prototype.takeRecords = function() {
                                    var t = this._queuedEntries.slice();
                                    return this._queuedEntries = [], t
                                }, a.prototype._initThresholds = function(t) {
                                    var e = t || [0];
                                    return Array.isArray(e) || (e = [e]), e.sort().filter((function(t, e, n) {
                                        if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                        return t !== n[e - 1]
                                    }))
                                }, a.prototype._parseRootMargin = function(t) {
                                    var e = (t || "0px").split(/\s+/).map((function(t) {
                                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                                        if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                                        return {
                                            value: parseFloat(e[1]),
                                            unit: e[2]
                                        }
                                    }));
                                    return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                                }, a.prototype._monitorIntersections = function(e) {
                                    var n = e.defaultView;
                                    if (n && -1 == this._monitoringDocuments.indexOf(e)) {
                                        var i = this._checkForIntersections,
                                            o = null,
                                            a = null;
                                        if (this.POLL_INTERVAL ? o = n.setInterval(i, this.POLL_INTERVAL) : (s(n, "resize", i, !0), s(e, "scroll", i, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in n && (a = new n.MutationObserver(i)).observe(e, {
                                                attributes: !0,
                                                childList: !0,
                                                characterData: !0,
                                                subtree: !0
                                            })), this._monitoringDocuments.push(e), this._monitoringUnsubscribes.push((function() {
                                                var t = e.defaultView;
                                                t && (o && t.clearInterval(o), l(t, "resize", i, !0)), l(e, "scroll", i, !0), a && a.disconnect()
                                            })), e != (this.root && this.root.ownerDocument || t)) {
                                            var u = r(e);
                                            u && this._monitorIntersections(u.ownerDocument)
                                        }
                                    }
                                }, a.prototype._unmonitorIntersections = function(e) {
                                    var n = this._monitoringDocuments.indexOf(e);
                                    if (-1 != n) {
                                        var i = this.root && this.root.ownerDocument || t;
                                        if (!this._observationTargets.some((function(t) {
                                                var n = t.element.ownerDocument;
                                                if (n == e) return !0;
                                                for (; n && n != i;) {
                                                    var o = r(n);
                                                    if ((n = o && o.ownerDocument) == e) return !0
                                                }
                                                return !1
                                            }))) {
                                            var o = this._monitoringUnsubscribes[n];
                                            if (this._monitoringDocuments.splice(n, 1), this._monitoringUnsubscribes.splice(n, 1), o(), e != i) {
                                                var a = r(e);
                                                a && this._unmonitorIntersections(a.ownerDocument)
                                            }
                                        }
                                    }
                                }, a.prototype._unmonitorAllIntersections = function() {
                                    var t = this._monitoringUnsubscribes.slice(0);
                                    this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                                    for (var e = 0; e < t.length; e++) t[e]()
                                }, a.prototype._checkForIntersections = function() {
                                    if (this.root || !n || i) {
                                        var t = this._rootIsInDom(),
                                            e = t ? this._getRootRect() : {
                                                top: 0,
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                width: 0,
                                                height: 0
                                            };
                                        this._observationTargets.forEach((function(i) {
                                            var r = i.element,
                                                a = u(r),
                                                s = this._rootContainsTarget(r),
                                                l = i.entry,
                                                c = t && s && this._computeTargetAndRootIntersection(r, a, e),
                                                d = i.entry = new o({
                                                    time: window.performance && performance.now && performance.now(),
                                                    target: r,
                                                    boundingClientRect: a,
                                                    rootBounds: n && !this.root ? null : e,
                                                    intersectionRect: c
                                                });
                                            l ? t && s ? this._hasCrossedThreshold(l, d) && this._queuedEntries.push(d) : l && l.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
                                        }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                                    }
                                }, a.prototype._computeTargetAndRootIntersection = function(e, r, o) {
                                    if ("none" != window.getComputedStyle(e).display) {
                                        for (var a, s, l, c, h, p, m, v, y = r, g = f(e), _ = !1; !_ && g;) {
                                            var b = null,
                                                E = 1 == g.nodeType ? window.getComputedStyle(g) : {};
                                            if ("none" == E.display) return null;
                                            if (g == this.root || 9 == g.nodeType)
                                                if (_ = !0, g == this.root || g == t) n && !this.root ? !i || 0 == i.width && 0 == i.height ? (g = null, b = null, y = null) : b = i : b = o;
                                                else {
                                                    var S = f(g),
                                                        w = S && u(S),
                                                        C = S && this._computeTargetAndRootIntersection(S, w, o);
                                                    w && C ? (g = S, b = d(w, C)) : (g = null, y = null)
                                                }
                                            else {
                                                var O = g.ownerDocument;
                                                g != O.body && g != O.documentElement && "visible" != E.overflow && (b = u(g))
                                            }
                                            if (b && (a = b, s = y, l = void 0, c = void 0, h = void 0, p = void 0, m = void 0, v = void 0, l = Math.max(a.top, s.top), c = Math.min(a.bottom, s.bottom), h = Math.max(a.left, s.left), p = Math.min(a.right, s.right), v = c - l, y = (m = p - h) >= 0 && v >= 0 && {
                                                    top: l,
                                                    bottom: c,
                                                    left: h,
                                                    right: p,
                                                    width: m,
                                                    height: v
                                                } || null), !y) break;
                                            g = g && f(g)
                                        }
                                        return y
                                    }
                                }, a.prototype._getRootRect = function() {
                                    var e;
                                    if (this.root) e = u(this.root);
                                    else {
                                        var n = t.documentElement,
                                            i = t.body;
                                        e = {
                                            top: 0,
                                            left: 0,
                                            right: n.clientWidth || i.clientWidth,
                                            width: n.clientWidth || i.clientWidth,
                                            bottom: n.clientHeight || i.clientHeight,
                                            height: n.clientHeight || i.clientHeight
                                        }
                                    }
                                    return this._expandRectByRootMargin(e)
                                }, a.prototype._expandRectByRootMargin = function(t) {
                                    var e = this._rootMarginValues.map((function(e, n) {
                                            return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                                        })),
                                        n = {
                                            top: t.top - e[0],
                                            right: t.right + e[1],
                                            bottom: t.bottom + e[2],
                                            left: t.left - e[3]
                                        };
                                    return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                                }, a.prototype._hasCrossedThreshold = function(t, e) {
                                    var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                                        i = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                                    if (n !== i)
                                        for (var r = 0; r < this.thresholds.length; r++) {
                                            var o = this.thresholds[r];
                                            if (o == n || o == i || o < n != o < i) return !0
                                        }
                                }, a.prototype._rootIsInDom = function() {
                                    return !this.root || h(t, this.root)
                                }, a.prototype._rootContainsTarget = function(e) {
                                    return h(this.root || t, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
                                }, a.prototype._registerInstance = function() {
                                    e.indexOf(this) < 0 && e.push(this)
                                }, a.prototype._unregisterInstance = function() {
                                    var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
                                }, window.IntersectionObserver = a, window.IntersectionObserverEntry = o
                            }
                        function r(t) {
                            try {
                                return t.defaultView && t.defaultView.frameElement || null
                            } catch (t) {
                                console.error("CATCH 22", t);                                return null
                            }
                        }

                        function o(t) {
                            this.time = t.time, this.target = t.target, this.rootBounds = c(t.rootBounds), this.boundingClientRect = c(t.boundingClientRect), this.intersectionRect = c(t.intersectionRect || {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            }), this.isIntersecting = !!t.intersectionRect;
                            var e = this.boundingClientRect,
                                n = e.width * e.height,
                                i = this.intersectionRect,
                                r = i.width * i.height;
                            this.intersectionRatio = n ? Number((r / n).toFixed(4)) : this.isIntersecting ? 1 : 0
                        }

                        function a(t, e) {
                            var n, i, r, o = e || {};
                            if ("function" != typeof t) throw new Error("callback must be a function");
                            if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
                            this._checkForIntersections = (n = this._checkForIntersections.bind(this), i = this.THROTTLE_TIMEOUT, r = null, function() {
                                r || (r = setTimeout((function() {
                                    n(), r = null
                                }), i))
                            }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(t) {
                                return t.value + t.unit
                            })).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
                        }

                        function s(t, e, n, i) {
                            "function" == typeof t.addEventListener ? t.addEventListener(e, n, i || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
                        }

                        function l(t, e, n, i) {
                            "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, i || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
                        }

                        function u(t) {
                            var e;
                            try {
                                e = t.getBoundingClientRect()
                            } catch (t) {
                                console.error("CATCH 23", t);                            }
                            return e ? (e.width && e.height || (e = {
                                top: e.top,
                                right: e.right,
                                bottom: e.bottom,
                                left: e.left,
                                width: e.right - e.left,
                                height: e.bottom - e.top
                            }), e) : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            }
                        }

                        function c(t) {
                            return !t || "x" in t ? t : {
                                top: t.top,
                                y: t.top,
                                bottom: t.bottom,
                                left: t.left,
                                x: t.left,
                                right: t.right,
                                width: t.width,
                                height: t.height
                            }
                        }

                        function d(t, e) {
                            var n = e.top - t.top,
                                i = e.left - t.left;
                            return {
                                top: n,
                                left: i,
                                height: e.height,
                                width: e.width,
                                bottom: n + e.height,
                                right: i + e.width
                            }
                        }

                        function h(t, e) {
                            for (var n = e; n;) {
                                if (n == t) return !0;
                                n = f(n)
                            }
                            return !1
                        }

                        function f(e) {
                            var n = e.parentNode;
                            return 9 == e.nodeType && e != t ? r(e) : n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n
                        }
                    }()
                },
                "_kit_function6_": t => {
                    ! function(e) {
                        "use strict";
                        var n, i = Object.prototype,
                            r = i.hasOwnProperty,
                            o = "function" == typeof Symbol ? Symbol : {},
                            a = o.iterator || "@@iterator",
                            s = o.asyncIterator || "@@asyncIterator",
                            l = o.toStringTag || "@@toStringTag",
                            u = e.regeneratorRuntime;
                        if (u) t.exports = u;
                        else {
                            (u = e.regeneratorRuntime = t.exports).wrap = _;
                            var c = "suspendedStart",
                                d = "suspendedYield",
                                h = "executing",
                                f = "completed",
                                p = {},
                                m = {};
                            m[a] = function() {
                                return this
                            };
                            var v = Object.getPrototypeOf,
                                y = v && v(v(P([])));
                            y && y !== i && r.call(y, a) && (m = y);
                            var g = w.prototype = E.prototype = Object.create(m);
                            S.prototype = g.constructor = w, w.constructor = S, w[l] = S.displayName = "GeneratorFunction", u.isGeneratorFunction = function(t) {
                                var e = "function" == typeof t && t.constructor;
                                return !!e && (e === S || "GeneratorFunction" === (e.displayName || e.name))
                            }, u.mark = function(t) {
                                return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, l in t || (t[l] = "GeneratorFunction")), t.prototype = Object.create(g), t
                            }, u.awrap = function(t) {
                                return {
                                    __await: t
                                }
                            }, C(O.prototype), O.prototype[s] = function() {
                                return this
                            }, u.AsyncIterator = O, u.async = function(t, e, n, i) {
                                var r = new O(_(t, e, n, i));
                                return u.isGeneratorFunction(e) ? r : r.next().then((function(t) {
                                    return t.done ? t.value : r.next()
                                }))
                            }, C(g), g[l] = "Generator", g[a] = function() {
                                return this
                            }, g.toString = function() {
                                return "[object Generator]"
                            }, u.keys = function(t) {
                                var e = [];
                                for (var n in t) e.push(n);
                                return e.reverse(),
                                    function n() {
                                        for (; e.length;) {
                                            var i = e.pop();
                                            if (i in t) return n.value = i, n.done = !1, n
                                        }
                                        return n.done = !0, n
                                    }
                            }, u.values = P, M.prototype = {
                                constructor: M,
                                reset: function(t) {
                                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(N), !t)
                                        for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
                                },
                                stop: function() {
                                    this.done = !0;
                                    var t = this.tryEntries[0].completion;
                                    if ("throw" === t.type) throw t.arg;
                                    return this.rval
                                },
                                dispatchException: function(t) {
                                    if (this.done) throw t;
                                    var e = this;

                                    function i(i, r) {
                                        return s.type = "throw", s.arg = t, e.next = i, r && (e.method = "next", e.arg = n), !!r
                                    }
                                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                        var a = this.tryEntries[o],
                                            s = a.completion;
                                        if ("root" === a.tryLoc) return i("end");
                                        if (a.tryLoc <= this.prev) {
                                            var l = r.call(a, "catchLoc"),
                                                u = r.call(a, "finallyLoc");
                                            if (l && u) {
                                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                            } else if (l) {
                                                if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                            } else {
                                                if (!u) throw new Error("try statement without catch or finally");
                                                if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                            }
                                        }
                                    }
                                },
                                abrupt: function(t, e) {
                                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                        var i = this.tryEntries[n];
                                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                            var o = i;
                                            break
                                        }
                                    }
                                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                                    var a = o ? o.completion : {};
                                    return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
                                },
                                complete: function(t, e) {
                                    if ("throw" === t.type) throw t.arg;
                                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                                },
                                finish: function(t) {
                                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                        var n = this.tryEntries[e];
                                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), N(n), p
                                    }
                                },
                                catch: function(t) {
                                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                        var n = this.tryEntries[e];
                                        if (n.tryLoc === t) {
                                            var i = n.completion;
                                            if ("throw" === i.type) {
                                                var r = i.arg;
                                                N(n)
                                            }
                                            return r
                                        }
                                    }
                                    throw new Error("illegal catch attempt")
                                },
                                delegateYield: function(t, e, i) {
                                    return this.delegate = {
                                        iterator: P(t),
                                        resultName: e,
                                        nextLoc: i
                                    }, "next" === this.method && (this.arg = n), p
                                }
                            }
                        }

                        function _(t, e, n, i) {
                            var r = e && e.prototype instanceof E ? e : E,
                                o = Object.create(r.prototype),
                                a = new M(i || []);
                            return o._invoke = function(t, e, n) {
                                var i = c;
                                return function(r, o) {
                                    if (i === h) throw new Error("Generator is already running");
                                    if (i === f) {
                                        if ("throw" === r) throw o;
                                        return D()
                                    }
                                    for (n.method = r, n.arg = o;;) {
                                        var a = n.delegate;
                                        if (a) {
                                            var s = T(a, n);
                                            if (s) {
                                                if (s === p) continue;
                                                return s
                                            }
                                        }
                                        if ("next" === n.method) n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if (i === c) throw i = f, n.arg;
                                            n.dispatchException(n.arg)
                                        } else "return" === n.method && n.abrupt("return", n.arg);
                                        i = h;
                                        var l = b(t, e, n);
                                        if ("normal" === l.type) {
                                            if (i = n.done ? f : d, l.arg === p) continue;
                                            return {
                                                value: l.arg,
                                                done: n.done
                                            }
                                        }
                                        "throw" === l.type && (i = f, n.method = "throw", n.arg = l.arg)
                                    }
                                }
                            }(t, n, a), o
                        }

                        function b(t, e, n) {
                            try {
                                return {
                                    type: "normal",
                                    arg: t.call(e, n)
                                }
                            } catch (t) {
                                console.error("CATCH 24", t);                                return {
                                    type: "throw",
                                    arg: t
                                }
                            }
                        }

                        function E() {}

                        function S() {}

                        function w() {}

                        function C(t) {
                            ["next", "throw", "return"].forEach((function(e) {
                                t[e] = function(t) {
                                    return this._invoke(e, t)
                                }
                            }))
                        }

                        function O(t) {
                            function e(n, i, o, a) {
                                var s = b(t[n], t, i);
                                if ("throw" !== s.type) {
                                    var l = s.arg,
                                        u = l.value;
                                    return u && "object" == typeof u && r.call(u, "__await") ? Promise.resolve(u.__await).then((function(t) {
                                        e("next", t, o, a)
                                    }), (function(t) {
                                        e("throw", t, o, a)
                                    })) : Promise.resolve(u).then((function(t) {
                                        l.value = t, o(l)
                                    }), a)
                                }
                                a(s.arg)
                            }
                            var n;
                            this._invoke = function(t, i) {
                                function r() {
                                    return new Promise((function(n, r) {
                                        e(t, i, n, r)
                                    }))
                                }
                                return n = n ? n.then(r, r) : r()
                            }
                        }

                        function T(t, e) {
                            var i = t.iterator[e.method];
                            if (i === n) {
                                if (e.delegate = null, "throw" === e.method) {
                                    if (t.iterator.return && (e.method = "return", e.arg = n, T(t, e), "throw" === e.method)) return p;
                                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return p
                            }
                            var r = b(i, t.iterator, e.arg);
                            if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, p;
                            var o = r.arg;
                            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, p) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
                        }

                        function A(t) {
                            var e = {
                                tryLoc: t[0]
                            };
                            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                        }

                        function N(t) {
                            var e = t.completion || {};
                            e.type = "normal", delete e.arg, t.completion = e
                        }

                        function M(t) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], t.forEach(A, this), this.reset(!0)
                        }

                        function P(t) {
                            if (t) {
                                var e = t[a];
                                if (e) return e.call(t);
                                if ("function" == typeof t.next) return t;
                                if (!isNaN(t.length)) {
                                    var i = -1,
                                        o = function e() {
                                            for (; ++i < t.length;)
                                                if (r.call(t, i)) return e.value = t[i], e.done = !1, e;
                                            return e.value = n, e.done = !0, e
                                        };
                                    return o.next = o
                                }
                            }
                            return {
                                next: D
                            }
                        }

                        function D() {
                            return {
                                value: n,
                                done: !0
                            }
                        }
                    }(function() {
                        return this
                    }() || Function("return this")())
                },
                "_kit_function7_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.engineConfig = void 0, e.engineConfig = {
                        "active": true,
                        "loadOnce": true,
                        "hasCMP": {
                            "blocking": false                        },
                        "adultContent": {
                            "sensitivitySources": [],
                            "high": {
                                "conditions": []                            },
                            "low": {
                                "conditions": []                            }
                        },
                        "showBranding": true,
                        "conditions": [],
                        "definitions": [{
                            "active": true,
                            "device": [{
                                "width": {
                                    "min": 0,
                                    "max": "Infinity"
                                },
                                "height": {
                                    "min": 0,
                                    "max": "Infinity"
                                }
                            }],
                            "type": "sspBids",
                            "params": {
                                "bids": [{"bidder":"onetag","params":{"pubId":"7d6c77c8e7b0fd3","flooronetag":"0"}},{"bidder":"outbrain_widget","params":{"obInstallationKey":"ITNETA5IGNCJJ30D8CBLEKCQF","flooroutbrain":0}}]                            }
                        }],
                        "device": [],
                        "observer": {
                            "margin": {
                                "top": 0,
                                "bottom": 400
                            },
                            "threshold": 0
                        },
                        "ssp": ["pb","dfp","direct"],
                        "prebidConfig": {
                            "timeoutBuffer": 1000,
                            "bidderSequence": "random"
                        },
                                                "products": [
    {
        "name": "StaticInserter",
        "active": true,
        "placeholder": {
            "enable": false,
            "maxSize": false
        },
        "adSlots": [
            {
                "active": true,
                "ttr": [
                    [
                        15,
                        15
                    ]
                ],
                "tav": 20,
                "ttrCheck": false,
                "adUnits": [
                    [
                        {
                            "type": "pb",
                            "params": {
                                "timeout": 1000,
                                "ignore_viewport": true,
                                "adult_type": "NONE",
                                "mediaTypes": {
                                    "banner": {
                                        "sizes": [
                                            [
                                                300,
                                                250
                                            ],
                                            [
                                                200,
                                                200
                                            ],
                                            [
                                                250,
                                                250
                                            ],
                                            [
                                                300,
                                                50
                                            ]
                                        ]
                                    }
                                },
                                "bids": [
                                    {
                                        "bidder": "onetag",
                                        "params": {
                                            "pubId": "7d6c77c8e7b0fd3",
                                            "flooronetag": "0"
                                        }
                                    }
                                ],
                                "tracking": "https:\/\/px.netpub.media\/iab?l=[L]&k=[K]&v=1.6.0&zz=714ba8ebe8500b307cf9afb5aa8bac3e315ee70831170d501c2968ec4fe8d670&f=[F]&i=[I]&c=FR&b=string&p=[P]&w=ebece06f4a05c1b9cbec8cf755657506&yy=56d31c5bc7da6a6559f06e012e37170a&a=[A]&z=54a611c474489b0704eb5bbb27d35316&n=[N]&j=[J]&o=[O]&aa=88052d3025fc38659f2ec548d6115165c6f3ee6b383229e0f1e800482980d42b&u=[U]&q=[Q]&r=[R]&s=[S]&x=[X]&h=[H]&xx=3cabb12b0c04e7a8579784e14198c91c&t=[T]&d=[D]&y=[Y]&e=[E]&g=[G]&m=[M]",
                                "refresh": {
                                    "define": false,
                                    "times": [
                                        2,
                                        2
                                    ]
                                }
                            },
                            "DEV_name": "BSS Onetag"
                        }
                    ],
                    [
                        {
                            "type": "dfp",
                            "params": {
                                "code": "\/29636627,22367770595\/bsshotel.it_fluid_3",
                                "sizes": [
                                    [
                                        300,
                                        250
                                    ],
                                    [
                                        200,
                                        200
                                    ],
                                    [
                                        250,
                                        250
                                    ],
                                    [
                                        300,
                                        50
                                    ]
                                ],
                                "safeframe": false,
                                "extra": {
                                    "targeting": {
                                        "dynamic": [],
                                        "static": []
                                    },
                                    "set": [
                                        "page_url"
                                    ]
                                },
                                "ignore_viewport": true,
                                "adult_type": "NONE",
                                "prohibitedCampaigns": {
                                    "active": true,
                                    "tryWithWaterFall": false,
                                    "times": 2,
                                    "millisecondsToWait": [
                                        15,
                                        15
                                    ]
                                },
                                "tracking": "https:\/\/px.netpub.media\/iab?r=[R]&j=[J]&k=[K]&g=[G]&i=[I]&v=1.6.0&s=[S]&a=[A]&u=[U]&o=[O]&p=[P]&zz=08d5890cbe56f9ba5ab0c689640e157d913801c625f1360ae8e8db02949e8f46&x=[X]&d=[D]&xx=3cabb12b0c04e7a8579784e14198c91c&f=[F]&m=[M]&h=[H]&aa=30f84a7f4e469e69534fa7dca2e51e207a6a3cb09259a1de9cbcfec779f9e830&z=54a611c474489b0704eb5bbb27d35316&b=request&yy=016f00f441077d03098a0a711fea9f71&e=[E]&c=FR&l=[L]&q=[Q]&t=[T]&w=ebece06f4a05c1b9cbec8cf755657506&n=[N]&y=[Y]",
                                "refresh": {
                                    "define": false,
                                    "times": [
                                        2,
                                        2
                                    ]
                                }
                            },
                            "DEV_name": "\/29636627,22367770595\/bsshotel.it_fluid_3_1"
                        }
                    ],
                    [
                        {
                            "type": "direct",
                            "params": {
                                "html": "<b>TEST 2<\/b>",
                                "src": false,
                                "href": false,
                                "trackurl": "",
                                "ignore_viewport": true,
                                "adult_type": "NONE",
                                "tracking": "https:\/\/px.netpub.media\/iab?zz=6f6f90f521e50df1d62072b128117e26e1fd3ea3a14af1a640447f3f590ad0eb&c=FR&d=[D]&g=[G]&j=[J]&q=[Q]&v=1.6.0&f=[F]&t=[T]&z=54a611c474489b0704eb5bbb27d35316&x=[X]&h=[H]&b=fetch&i=[I]&m=[M]&e=[E]&a=[A]&u=[U]&k=[K]&n=[N]&s=[S]&y=[Y]&o=[O]&yy=a2a0483eab417b1ce25dc4d1fac415e7&l=[L]&xx=3cabb12b0c04e7a8579784e14198c91c&aa=b4d3e4be66cc1613dd70482ee83dcbff7754805df55eaee10f6086f16706a4c8&w=ebece06f4a05c1b9cbec8cf755657506&p=[P]&r=[R]",
                                "refresh": {
                                    "define": false,
                                    "times": [
                                        2,
                                        2
                                    ]
                                }
                            },
                            "DEV_name": "Direct Test 2"
                        }
                    ],
                    [
                        {
                            "type": "placeholder",
                            "params": {
                                "html": false,
                                "src": "https:\/\/fstatic.netpub.media\/placeholders\/300x250.png",
                                "href": "https:\/\/netpub.media\/?utm_medium=AdsInfo&utm_source=Placeholder&utm_campaign=300x250"
                            }
                        }
                    ]
                ],
                "order_num": 1,
                "id": "121"
            }
        ],
        "conditions": [],
        "params": {
            "dataSlots": [
                1
            ]
        },
        "device": [
            {
                "width": {
                    "min": 1025,
                    "max": "Infinity"
                },
                "height": {
                    "min": 0,
                    "max": "Infinity"
                }
            }
        ]
    },
    {
        "name": "StaticInserter",
        "active": true,
        "placeholder": {
            "enable": false,
            "maxSize": false
        },
        "adSlots": [
            {
                "active": true,
                "ttr": [
                    [
                        15,
                        15
                    ]
                ],
                "tav": 20,
                "ttrCheck": false,
                "adUnits": [
                    [
                        {
                            "type": "pb",
                            "params": {
                                "timeout": 1000,
                                "ignore_viewport": true,
                                "adult_type": "NONE",
                                "mediaTypes": {
                                    "banner": {
                                        "sizes": [
                                            [
                                                300,
                                                250
                                            ],
                                            [
                                                200,
                                                200
                                            ],
                                            [
                                                250,
                                                250
                                            ],
                                            [
                                                300,
                                                50
                                            ],
                                            [
                                                360,
                                                50
                                            ],
                                            [
                                                360,
                                                100
                                            ],
                                            [
                                                360,
                                                300
                                            ]
                                        ]
                                    }
                                },
                                "bids": [
                                    {
                                        "bidder": "onetag",
                                        "params": {
                                            "pubId": "7d6c77c8e7b0fd3",
                                            "flooronetag": "0"
                                        }
                                    }
                                ],
                                "tracking": "https:\/\/px.netpub.media\/iab?p=[P]&zz=8d2bce29ec57ad5a5e5353c79eac83e4e22b62a1a90571196ff3399d42814e0e&q=[Q]&l=[L]&r=[R]&aa=77827e0e9dd2ae56617bee714d9cd3557834dbb5298e14e66902631a764f4a5c&c=FR&yy=56d31c5bc7da6a6559f06e012e37170a&s=[S]&j=[J]&y=[Y]&o=[O]&k=[K]&a=[A]&w=ebece06f4a05c1b9cbec8cf755657506&f=[F]&z=54a611c474489b0704eb5bbb27d35316&n=[N]&x=[X]&u=[U]&e=[E]&t=[T]&d=[D]&h=[H]&i=[I]&g=[G]&b=string&m=[M]&xx=3cabb12b0c04e7a8579784e14198c91c&v=1.6.0",
                                "refresh": {
                                    "define": false,
                                    "times": [
                                        2,
                                        2
                                    ]
                                }
                            },
                            "DEV_name": "BSS Onetag"
                        }
                    ],
                    [
                        {
                            "type": "dfp",
                            "params": {
                                "code": "\/29636627,22367770595\/bsshotel.it_fluid_3",
                                "sizes": [
                                    [
                                        300,
                                        250
                                    ],
                                    [
                                        200,
                                        200
                                    ],
                                    [
                                        250,
                                        250
                                    ],
                                    [
                                        300,
                                        50
                                    ],
                                    [
                                        360,
                                        50
                                    ],
                                    [
                                        360,
                                        100
                                    ],
                                    [
                                        360,
                                        300
                                    ]
                                ],
                                "safeframe": false,
                                "extra": {
                                    "targeting": {
                                        "dynamic": [],
                                        "static": []
                                    },
                                    "set": [
                                        "page_url"
                                    ]
                                },
                                "ignore_viewport": true,
                                "adult_type": "NONE",
                                "prohibitedCampaigns": {
                                    "active": true,
                                    "tryWithWaterFall": false,
                                    "times": 2,
                                    "millisecondsToWait": [
                                        15,
                                        15
                                    ]
                                },
                                "tracking": "https:\/\/px.netpub.media\/iab?c=FR&x=[X]&xx=3cabb12b0c04e7a8579784e14198c91c&u=[U]&h=[H]&zz=cb2feca24a7229fbe99415b8b713c56d1893b5e31b862ed05bc375ce182f71d3&t=[T]&s=[S]&a=[A]&p=[P]&aa=11210a74575dcb341a6e233ee55fa7a1a9511585872566eb73d1ca7cd5cd016b&m=[M]&l=[L]&e=[E]&r=[R]&i=[I]&w=ebece06f4a05c1b9cbec8cf755657506&f=[F]&g=[G]&d=[D]&n=[N]&v=1.6.0&o=[O]&y=[Y]&j=[J]&z=54a611c474489b0704eb5bbb27d35316&yy=016f00f441077d03098a0a711fea9f71&b=request&q=[Q]&k=[K]",
                                "refresh": {
                                    "define": false,
                                    "times": [
                                        2,
                                        2
                                    ]
                                }
                            },
                            "DEV_name": "\/29636627,22367770595\/bsshotel.it_fluid_3_1"
                        }
                    ],
                    [
                        {
                            "type": "direct",
                            "params": {
                                "html": "<b>TEST 2<\/b>",
                                "src": false,
                                "href": false,
                                "trackurl": "",
                                "ignore_viewport": true,
                                "adult_type": "NONE",
                                "tracking": "https:\/\/px.netpub.media\/iab?d=[D]&m=[M]&s=[S]&a=[A]&u=[U]&xx=3cabb12b0c04e7a8579784e14198c91c&v=1.6.0&r=[R]&e=[E]&p=[P]&f=[F]&k=[K]&l=[L]&b=request&g=[G]&h=[H]&t=[T]&yy=a2a0483eab417b1ce25dc4d1fac415e7&q=[Q]&aa=d78e4f7fde1a0008e90ce0f619119644aa82af9eb562bf6fc642773c49d18f45&y=[Y]&n=[N]&c=FR&o=[O]&x=[X]&zz=0696c8e4c5e71751c45181edd0576f7b4c7ce8ba7896cad415934f495ea308bf&z=54a611c474489b0704eb5bbb27d35316&i=[I]&j=[J]&w=ebece06f4a05c1b9cbec8cf755657506",
                                "refresh": {
                                    "define": false,
                                    "times": [
                                        2,
                                        2
                                    ]
                                }
                            },
                            "DEV_name": "Direct Test 2"
                        }
                    ],
                    [
                        {
                            "type": "placeholder",
                            "params": {
                                "html": false,
                                "src": "https:\/\/fstatic.netpub.media\/placeholders\/300x250.png",
                                "href": "https:\/\/netpub.media\/?utm_medium=AdsInfo&utm_source=Placeholder&utm_campaign=300x250"
                            }
                        }
                    ]
                ],
                "order_num": 1,
                "id": "121"
            }
        ],
        "conditions": [],
        "params": {
            "dataSlots": [
                1
            ]
        },
        "device": [
            {
                "width": {
                    "min": 0,
                    "max": 1024
                },
                "height": {
                    "min": 0,
                    "max": "Infinity"
                }
            }
        ]
    }
],
                        "plugins": [
    {
        "name": "Analytics",
        "active": true,
        "conditions": [],
        "device": [
            {
                "width": {
                    "min": 0,
                    "max": "Infinity"
                },
                "height": {
                    "min": 0,
                    "max": "Infinity"
                }
            }
        ],
        "params": {
            "id": "UA-228391614-1"
        }
    },
    {
        "name": "InjectStyles",
        "active": true,
        "device": [],
        "conditions": [],
        "params": {
            "content": "ins.adv-ebece06f4a05c1b9cbec8cf755657506 { display: flex; align-content: center; justify-content: center; text-decoration: none!important; }"
        }
    }
],
                                                "schainConfig": {
                            "bidders": ["oftmedia", "adagio", "adaptmx", "adform", "admatic", "admixer", "adtrue", "apacdex", "appnexus", "betweenx", "businessclick", "connectad", "conversantmedia", "criteo", "districtm", "distroscale", "dynadmic", "fluct", "improvedigital", "ix", "adkernel", "luponmedia", "mgid", "mobuppsrtb", "moneytizer", "mox.tv", "mytarget", "nanointeractive", "onetag", "openx", "plista", "pubmatic", "rhythmone", "rtbhouse", "rubicon", "smartadserver", "sonobi", "sovrn", "stitchvideo", "taboola", "teads", "vi", "viads", "vidoomy", "waardex", "wmg", "yandex", "yoc", "opera", "blueroostermedia", "insticator"],
                            //"sid": "2259675"
                        }
                                            }
                },
                "_kit_function8_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.CONDITION_TYPES = void 0;
                    var i = n("_kit_function63_");
                    e.CONDITION_TYPES = [{
                        name: "DOMElementCount",
                        callback: i.DOMElementCount
                    }, {
                        name: "DOMElementExists",
                        callback: i.DOMElementExists
                    }, {
                        name: "DOMElementHeightDifferenceGreater",
                        callback: i.DOMElementHeightDifferenceGreater
                    }, {
                        name: "DOMElementHeightDifferenceLower",
                        callback: i.DOMElementHeightDifferenceLower
                    }, {
                        name: "DOMElementHeightGreater",
                        callback: i.DOMElementHeightGreater
                    }, {
                        name: "DOMElementHeightLower",
                        callback: i.DOMElementHeightLower
                    }, {
                        name: "DOMElementNotExists",
                        callback: i.DOMElementNotExists
                    }, {
                        name: "globalVariable",
                        callback: i.globalVariable
                    }, {
                        name: "hostContains",
                        callback: i.hostContains
                    }, {
                        name: "hostEquals",
                        callback: i.hostEquals
                    }, {
                        name: "hrefMatches",
                        callback: i.hrefMatches
                    }, {
                        name: "innerText",
                        callback: i.innerText
                    }, {
                        name: "urlContains",
                        callback: i.urlContains
                    }, {
                        name: "urlEndsWith",
                        callback: i.urlEndsWith
                    }, {
                        name: "urlEquals",
                        callback: i.urlEquals
                    }, {
                        name: "urlEquals--auto",
                        callback: i.urlEquals
                    }, {
                        name: "urlHomepage",
                        callback: i.urlHomepage
                    }, {
                        name: "urlStartsWith",
                        callback: i.urlStartsWith
                    }]
                },
                "_kit_function9_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.AWS_GEO_RESTRICTIONS = e.EUCONSENT_V2 = void 0, e.EUCONSENT_V2 = "euconsent-v2", e.AWS_GEO_RESTRICTIONS = "__oagr"
                },
                "_kit_function10_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DESKTOP = void 0, e.DESKTOP = {
                        width: {
                            min: 971,
                            max: 1 / 0
                        },
                        height: {
                            min: 0,
                            max: 1 / 0
                        }
                    }
                },
                "_kit_function11_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__exportStar || function(t, e) {
                            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), r(n("_kit_function9_"), e), r(n("_kit_function10_"), e), r(n("_kit_function12_"), e), r(n("_kit_function13_"), e)
                },
                "_kit_function12_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.OTHER_ADS_SELECTORS = void 0, e.OTHER_ADS_SELECTORS = [".adsbygoogle", "div[id^=google_ads]", "[id^=div-gpt-ad]", "[id^=sas_iframe]", "[id^=aswift]", "[id^=yandex_]"]
                },
                "_kit_function13_": (t, e, n) => {
                    "use strict";
                    var i, r;
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.TC_STRING = e.PREBID_LIB_VERSION = e.OUTBRAIN_IFRAME = e.PREBID_IFRAME = e.SCHAIN_CONFIG = e.PREBID_CONFIG = e.pbjsnetpub221021 = e.BID_PROV_MULT = e.ALIASES =  void 0;
                    var o = n("_kit_function7_"),
                        a = n("_kit_function9_"),
                        s = n("_kit_function186_");
                                        e.ALIASES = [
                        ["adform", "adformWPAR"],
                        ["appnexus", "blueroostermedia"],
                        ["vox", "hybrid"]
                    ], e.BID_PROV_MULT = {
                        oftmedia: .9
                    }, e.pbjsnetpub221021 = "pbjsnetpub221021";
                    e.PREBID_CONFIG = function(t, e, n) {
                        return {
                            currency: {
                                adServerCurrency: "EUR"
                            },
                            debug: false && !0,
                            timeoutBuffer: t,
                            bidderSequence: e,
                            floors: n,
                            consentManagement: {
                                gdpr: {
                                    cmpApi: "static",
                                    consentData: {
                                        getTCData: {
                                            gdprApplies: !1
                                        }
                                    }
                                }
                            },
                            userSync: {
                                syncEnabled: !0,
                                filterSettings: {
                                    iframe: {
                                        bidders: "*",
                                        filter: "include"
                                    }
                                },
                                userIds: [{
                                    name: "criteo"
                                }]
                            },
                            cache: {
                                url: "https://prebid.adnxs.com/pbc/v1/cache"
                            }
                        }
                    }, e.SCHAIN_CONFIG = {
                        bidders: null === (i = o.engineConfig.schainConfig) || void 0 === i ? void 0 : i.bidders,
                        config: {
                            schain: {
                                config: {
                                    ver: "1.0",
                                    complete: 1,
                                    nodes: [{
                                        asi: "netpub.media",
                                        sid: null === (r = o.engineConfig.schainConfig) || void 0 === r ? void 0 : r.sid,
                                        hp: 1
                                    }]
                                }
                            }
                        }
                    }, e.OUTBRAIN_IFRAME = e.PREBID_IFRAME = {
                        name: "iframe",
                        attributes: {
                            FRAMEBORDER: "0",
                            SCROLLING: "no",
                            MARGINHEIGHT: "0",
                            MARGINWIDTH: "0",
                            TOPMARGIN: "0",
                            LEFTMARGIN: "0",
                            ALLOWTRANSPARENCY: "true",
                            WIDTH: "0"
                        },
                        styles: {
                            "margin-left": "auto",
                            "margin-right": "auto",
                            "left": "0",
                            "right": "0"
                        }
                    }, e.PREBID_LIB_VERSION = "prebid_221021.js?4", e.TC_STRING = s.getCookieValue(a.EUCONSENT_V2)
                },
                                "_kit_function14_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        o = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
                            return r(e, t), e
                        },
                        a = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = n("_kit_function7_"),
                        l = n("_kit_function11_"),
                        u = a(n("_kit_function15_")),
                        c = a(n("_kit_function31_")),
                        d = o(n("_kit_function38_")),
                        h = n("_kit_function45_"),
                        f = a(n("_kit_function73_")),
                        p = a(n("_kit_function78_")),
                        m = n("_kit_function188_"),
                        v = a(n("_kit_function200_")),
                        y = a(n("_kit_function210_")),
                        g = n("_kit_function16_"),
                        _ = function() {
                            function t(t) {
                                var e = this;
                                this.params = t, this.id = v.default.generate(), this.blocked = !1, this.initiallyVisible = void 0, this.isVisible = !1, this.requestOnAppear = !0, this.seen = !1, this.tavPassed = !0, this.tavTimer = null, this.block = function() {
                                    e.blocked = !0
                                }, this.unblock = function() {
                                    e.blocked && (e.blocked = !1, e.checkIsRequestReady() && e.requestAdUnit())
                                }, this.checkIsRequestReady = function() {
                                    return (!e.config.tav || e.tavPassed) && e.isVisible && !e.blocked
                                }, this.onTAVTimeoutCallback = function() {
                                    e.tavPassed = !0, e.killTimer(), e.checkIsRequestReady() && e.requestAdUnit()
                                }, this.checkBranding = function() {
                                    void 0 === e.localBranding && (e.localBranding = s.engineConfig.showBranding)
                                }, this.subscribeCallback = function(t) {
                                    var n = e.isWindowInContent ? e.getWindowInContentSelector() : e.container;
                                    e.isWindowInContent && n && (n.dataset.brandingCreated = "true"), (null == t ? void 0 : t.brandingAllow) && (null == n || n.insertAdjacentElement("beforeend", e.branding))
                                }, this.getWindowInContentSelector = function() {
                                    return null                                }, this.stickyDesktopSubscribeCallback = function(t, n) {
                                    if (null == t ? void 0 : t.brandingAllow) {
                                        var i = n.parentNode.parentNode,
                                            r = null == i ? void 0 : i.querySelector("a.logo"),
                                            o = {
                                                brandingWidth: g.BRANDING_WIDTH + g.SF_MARGIN,
                                                stickyContainerWidth: i.clientWidth,
                                                adWidth: n.clientWidth
                                            };
                                        e.checkBrandingConditions(o, r) ? (i.insertAdjacentElement("beforeend", e.branding), e.branding.style.position = "absolute", e.branding.style.bottom = "0px", e.branding.style.left = "0px", e.branding.style.pointerEvents = "initial") : e.checkBrandingWidthIsLargerThanItShouldBe(o) && (null == r || r.remove())
                                    }
                                }, this.checkBrandingConditions = function(t, n) {
                                    return !e.checkBrandingWidthIsLargerThanItShouldBe(t) && e.branding.tagName.toLowerCase() === h.BRANDING_TAG_NAME && !n
                                }, this.checkBrandingWidthIsLargerThanItShouldBe = function(t) {
                                    return t.brandingWidth > (t.stickyContainerWidth - t.adWidth) / 2
                                }, this.setObservedElement = function() {
                                    var t, n, i;
                                    e.checkIsWindowInContent() ? e.observedElement = null === (i = null === (n = null === (t = e.container) || void 0 === t ? void 0 : t.parentElement) || void 0 === n ? void 0 : n.parentElement) || void 0 === i ? void 0 : i.parentElement : e.observedElement = e.container
                                }, this.onVisible = function() {
                                    var t;
                                                                        e.isVisible = !0, void 0 === e.initiallyVisible && (e.initiallyVisible = !0), e.setParentElementAlignCenter(), (null !== e.adUnitManager.ttr && e.sendRequestAdUnit()), null === (t = e.tavTimer) || void 0 === t || t.resume()
                                                                    }, this.requestAdUnit = function() {
                                    e.adUnitManager.bid()
                                }, this.onInvisible = function() {
                                                                        if (void 0 !== e && void 0 !== e.adUnitManager && void 0 !== e.adUnitManager.currentAdUnit && void 0 !== e.adUnitManager.currentAdUnit.params && e.adUnitManager.currentAdUnit.params.ignore_viewport) {
                                        this.onVisible();
                                    } else {
                                        var t;
                                        e.isVisible = !1, void 0 === e.initiallyVisible && (e.initiallyVisible = !1), null === (t = e.tavTimer) || void 0 === t || t.pause()
                                    }
                                                                    }, Object.assign(this, this.params, this.params.config), this.checkBranding(), this.container = this.createContainer(), this.element.insertAdjacentElement("beforeend", this.container), this.brandingRemoveHandler(), this.setAdUnitManager(), this.changeProductStyles(), this.setObservedElement(), this.setupObserver(), u.default.add(this)
                            }
                            return t.prototype.initTimer = function() {
                                null !== this.tav && (this.tavPassed = !1, this.tavTimer = new y.default(this.onTAVTimeoutCallback, this.tav), this.tavTimer.setup())
                            }, t.prototype.kill = function() {
                                var t, e;
                                u.default.remove(this), this.killTimer(), this.customObserver.unobserve(this.observedElement), this.adUnitManager.kill(), null === (e = null === (t = this.container) || void 0 === t ? void 0 : t.parentElement) || void 0 === e || e.remove()
                            }, t.prototype.killTimer = function() {
                                var t;
                                null === (t = this.tavTimer) || void 0 === t || t.kill()
                            }, t.prototype.createContainer = function() {
                                var t = m.createElement({
                                    name: "div",
                                    // ENRICO: Bug logo richiesta Google
                                    styles: {
                                        "position": "relative",
                                        "display": "inline-block"
                                    }
                                });
                                return this.isWindowInContent = this.checkIsWindowInContent(), this.localBranding ? (this.branding = h.createBranding(), this.setupContainerSubscription(t), t) : (this.isWindowInContent && this.setDataBrandingForWindowInContent(), t)
                            }, t.prototype.checkIsWindowInContent = function() {
                                return "WindowInContentDesktop" === this.productName || "WindowInContentMobile" === this.productName
                            }, t.prototype.setDataBrandingForWindowInContent = function() {
                                var e = this.getWindowInContentSelector();
                                e && (e.dataset.brandingCreated = "true")
                            }, t.prototype.setupContainerSubscription = function(t) {
                                var e = this,
                                    n = this.checkIsInterstitialFullscreenOrSticky(),
                                    i = this.checkIsStickyDesktop();
                                n || d.default.subscribeOnce(d.AD_SOLD + "_" + this.productId + "--" + this.id, (function(t, n) {
                                    return e.subscribeCallback(n)
                                }))                            }, t.prototype.checkIsInterstitialFullscreenOrSticky = function() {
                                return ["InterstitialFullscreen"].includes(this.productName)
                            }, t.prototype.checkIsStickyDesktop = function() {
                                return "Sticky" === this.productName && f.default.isScreenWithinRanges(l.DESKTOP)
                            }, t.prototype.brandingRemoveHandler = function() {
                                var t = this;
                                d.default.subscribe(d.REMOVE_BRANDING + "_" + this.productId + "--" + this.id, (function() {
                                    var e;
                                    null === (e = t.branding) || void 0 === e || e.remove()
                                }))
                            }, t.prototype.setAdUnitManager = function() {
                                var t = this.getOnNotSold();
                                this.adUnitManager = new c.default(this.config.adUnits, this, this.config.ttr, t)
                            }, t.prototype.getOnNotSold = function() {
                                var t, e = null !== (t = this.config.onNotSold) && void 0 !== t ? t : {},
                                    n = e.name,
                                    i = e.params;
                                return this.config.onNotSold && "emitEvent" === n && function() {
                                    return document.dispatchEvent(new CustomEvent(i.name))
                                }
                            }, t.prototype.changeProductStyles = function() {
                                var t;
                                !this.adUnitManager.currentAdUnit.params.ignore_sizes_check && this.productContainer && ("Float" === this.productName && (this.productContainer.style.width = null === (t = this.additionalOptions) || void 0 === t ? void 0 : t.targetWidth), this.adUnitManager.hideProductContainer())
                            }, t.prototype.setupObserver = function() {
                                this.customObserver = new p.default(this.config.observer), this.customObserver.observe(this.observedElement, this.onVisible, this.onInvisible)
                            }, t.prototype.setParentElementAlignCenter = function() {
                                var t;
                                (null === (t = this.productContainer) || void 0 === t ? void 0 : t.parentElement.hasAttribute("data-dest")) && (this.productContainer.parentElement.style.alignItems = "center")
                            }, t.prototype.sendRequestAdUnit = function() {
                                this.requestOnAppear ? (this.requestOnAppear = !1, this.seen || (this.seen = !0), this.requestAdUnit()) : this.checkIsRequestReady() && this.requestAdUnit()
                            }, t
                        }();
                    e.default = _
                },
                "_kit_function15_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function t() {
                            this.adSlots = [], window.AdSlotCollection = this
                        }
                        return t.prototype.add = function(t) {
                            this.adSlots.push(t)
                        }, t.prototype.remove = function(t) {
                            this.adSlots = this.adSlots.filter((function(e) {
                                return e !== t
                            }))
                        }, t.prototype.get = function(t) {
                            return this.adSlots.find((function(e) {
                                return e.productId === t
                            }))
                        }, t
                    }();
                    e.default = new n
                },
                "_kit_function16_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.BRANDING_WIDTH = e.SF_MARGIN = void 0, e.SF_MARGIN = 30, e.BRANDING_WIDTH = 105
                },
                "_kit_function17_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function14_"));
                    e.default = r.default
                },
                "_kit_function18_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function20_")),
                        o = i(n("_kit_function21_")),
                        a = i(n("_kit_function23_")),
                        s = i(n("_kit_function24_")),
                        l = i(n("_kit_function25_")),
                        u = i(n("_kit_function28_")),
                        c = i(n("_kit_function30_")),
                                                d = i(n("_kit_function215_")),
                        g = i(n("_kit_function216_"));
                                            e.default = {
                        getInstance: function(t, e, n) {
                            console.log("TIPO DI BANNER", t);                            switch (t) {
                                case "adx":
                                    return new r.default(t, e, n);
                                case "dfp":
                                case "dfp-oop":
                                    return new o.default(t, e, n);
                                case "direct":
                                case "placeholder":
                                    return new a.default(t, e, n);
                                case "hb":
                                    return new s.default(t, e, n);
                                case "mgid":
                                    return new l.default(t, e, n);
                                case "pb":
                                    return new u.default(t, e, n);
                                case "yan-rtb":
                                    return new c.default(t, e, n);
                                                                case "moneytizer":
                                    return new d.default(t, e, n);
                                case "outbrain":
                                    return new g.default(t, e, n);
                                                                default:
                                    throw new Error("Unknown AdUnit type")
                            }
                        }
                    }
                },
                "_kit_function19_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 25", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        r = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = r(n("_kit_function18_")),
                        a = function() {
                            function t(t, e, n, i) {
                                var r = this;
                                this.adUnitsArray = t, this.adSlot = e, this.ttr = n, this.onNotSold = i, this.killed = !1, this.adUnits = null, this.oneSold = !1, this.ttrPassed = !0, this.waitingForResponse = !1, this.hideProductContainer = function() {
                                    r.productContainerLoaded() && (r.adSlot.productName.match(/WindowInContent/) && (r.adSlot.productContainer.style.height = "0"), r.adSlot.productContainer.style.visibility = "hidden")
                                }, this.ttr = Array.isArray(n) && n.length ? n : null, this.setup(this.adUnitsArray)
                            }
                                                        return t.prototype.track = function(t, e, n, q, r) { // currentAdUnit, params, type, empty, prohibited
                        
                                if (!e || !e.tracking) return;
                                let adUnitContainer = (t.adUnitContainer ? t.adUnitContainer : document.body);
                                let ins = adUnitContainer.closest("ins");
                                let i = adUnitContainer.getBoundingClientRect();
                                let o = {
                                    "A": true, // "true"
                                    "D": document.location.href, // URL della pagina
                                    "E": (q ? "1" : "0"), // Banner non disponibile
                                    "F": t.type, // Slot type
                                    "G": n, // Type (0 = REQUEST, 1 = VIEW, 2 = CLICK)
                                    "H": (document.hidden ? "1" : "0"), // Hidden
                                    "I": history.length, // History
                                    "J": (r ? "1" : "0"), // Campagna proibita
                                    "K": (ins ? ins.dataset.slot : -1), // Slot ID
                                    "L": document.body.clientWidth, // Page Width
                                    "M": window.innerHeight, // Page Height
                                    "N": Math.round(window.devicePixelRatio * 100), // Page Zoom
                                    "O": (i && i.x ? i.x : 0), // Banner X
                                    "P": (i && i.y ? i.y : 0), // Banner Y
                                    "Q": (i && i.width ? i.width : 0), // Banner Width
                                    "R": (i && i.height ? i.height : 0), // Banner Height
                                    "S": document.readyState, // Status
                                    "T": new Date().getTime(), // Timestamp
                                    "U": navigator.userAgent, // User-agent
                                    "X": "netpub", // "netpub",
                                    "Y": e.code // Slot Name
                                }, b = e.tracking, g = new Image();
                                for (let j in o) {
                                    b = b.replace("["+j+"]", encodeURIComponent(o[j]));
                                }
                                g.setAttribute("src", b);
                            }, t.prototype.setup = function(t, e) {
                                e && this.currentAdUnit && this.currentAdUnit.adUnitContainer.remove();
                                this.extractAdUnits(t, e);
                                var n = i(this.adUnits, 1);
                                this.currentAdUnit = i(n[0], 1)[0];
                                console.log("setup con t", t, "e = ", e, "this.currentAdUnit = ", this.currentAdUnit);                                this.currentAdUnit.slotInitDefine = t;
                                if (!["dfp", "pb", "direct", "placeholder"].includes(this.currentAdUnit.type)) {
                                    this.track(this.currentAdUnit, this.currentAdUnit.params, 0);
                                }
                                e && this.bid(!1, !0);
                            },
                            t.prototype.removeCurrentAdUnit = function() {
                                this.currentAdUnit && this.currentAdUnit.adUnitContainer.remove();
                            },
                            t.prototype.retryLastAdUnit = function(t, e) {
                                e && this.removeCurrentAdUnit();
                                e && this.bid(!1, !0);
                            },
                            t.prototype.kill = function() {
                                this.killed = !0, this.pause()
                            },
                            t.prototype.pause = function() {
                                this.destroyGoogleSlots(), this.clearTTRTimeout()
                            },
                            t.prototype.bid = function(t, e) {
                                /*console.log("ONBID principale");*/                                var n = this.currentAdUnit,
                                    i = void 0 === n || null === n ? null : n.params.refresh;
                                void 0 === t && (t = !1);
                                var x = this.shouldWaterfallRun(t);
                                if(!(!e && x)){
                                    //console.log("ONBID principale: Continua (Tick "+(i ? i.tick : "NULL")+")");
                                    /*if (!i && this.oneSold) {
                                        console.log("ONESOLD: setTTRTimeout");
                                        //return this.clearTTRTimeout();
                                        var adslotrtrue = this.getTTRAdSlotRTrue();
                                        this.setTTRTimeout();
                                        return adslotrtrue;
                                    }*/
                                    if (i && i.times > 0 && (i.tick || 0) > i.times) {
                                        //console.log("CICLO REFRESH COMPLETATO: Passo al successivo");
                                                                                this.removeCurrentAdUnit();
                                        this.handleBidResponse(!1, this.adUnitContainer);
                                    } else if (!i || !i.define || !i.tick || (i.define && e)) {
                                        if (i) {
                                            this.currentAdUnit.params.refresh.tick = (i.tick || 0) + 1
                                        }
                                        //this.waitingForResponse = !0, null === n || void 0 === n || n.bid(), t || this.setTTRTimeout()
                                        this.waitingForResponse = true;
                                        if (!i || i.tick <= i.times) {
                                            // Se ho ancora visualizzazioni di questa adUnit la visualizzo
                                            if (n !== null && n !== undefined) {
                                                n.bid();
                                            }
                                            if (!t) {
                                                this.setTTRTimeout();
                                            }
                                        } else {
                                            // Se ho finito i refresh, non devo fare il bid ma passare subito alla successiva
                                            // In realtÃ  dovrei prima controllare se ho ancora delle slot da visualizzare
                                            // altrimenti riprova sempre tutte le slot che, essendo giÃ  finite, vengono
                                            // continuamente saltate in un loop infinito
                                            console.log("%cSLOT ESAURITA, VADO ALLA PROSSIMA", "color: #00AA66");
                                            this.handleBidResponse(!1, this.adUnitContainer);
                                        }
                                    }else{
                                        this.setup(this.currentAdUnit.slotInitDefine, !0);
                                    }
                                } else {
                                    //console.log("ONBID principale: Stop");
                                }
                            },
                                                        t.prototype.handleBidResponse = function(t, e, n) {
                                console.log("handleBidResponse", this.killed);                                void 0 === e && (e = null);
                                if (this.currentAdUnit.type == "dfp") {
                                    this.track(this.currentAdUnit, this.currentAdUnit.params, 0);
                                }
                                this.track(this.currentAdUnit, this.currentAdUnit.params, 1, !t, n);
                                if (this.killed) {
                                    this.hideProductContainer();
                                } else {
                                    this.waitingForResponse = !1;
                                    this.getAdUnitStatus(t, e, n);
                                    this.handleProductContainer();
                                }
                            },
                                                        t.prototype.extractAdUnits = function(t, e) {
                                var n = this;
                                this.adUnits = t.map((function(t, i) {
                                    return t.map((function(t, r) {
                                        // TODO 
                                        (void 0 !== t.params.refresh && !Number.isInteger(t.params.refresh.times)) && (t.params.refresh.times = t.params.refresh.times ? parseInt(Math.random() * (t.params.refresh.times[1] - t.params.refresh.times[0]) + t.params.refresh.times[0]) : 1);
                                        t.disableLoadEvents = e;
                                        t.params.disableLoadEvents = e;
                                        var l = o.default.getInstance(t.type.toLowerCase(), t.params, n);
                                        return l.hideAdUnitContainer && l.hideAdUnitContainer(), l.cursor = [i, r], l
                                    }))
                                }))
                            },
                                                        t.prototype.destroyGoogleSlots = function() {
                                this.adUnits.forEach((function(t) {
                                    return t.forEach((function(t) {
                                        var e, n = t.googleSlot;
                                        return n && (null === (e = window.googletag) || void 0 === e ? void 0 : e.destroySlots([n]))
                                    }))
                                }))
                            }, t.prototype.shouldWaterfallRun = function(t) {
                                var e = this.oneSold && !this.ttr,
                                    n = !this.ttrPassed && !t;
                                return e || n || this.waitingForResponse
                            },
                                                        t.prototype.setTTRTimeout = function() {
                                if (!this.ttr) return;
                                this.ttrPassed = !1;
                                this.ttrTimeout = this.setTTR();
                                this.ttr.length > 1 && this.ttr.shift();
                            }, t.prototype.getTTRAdSlotRTrue = function() {
                                return this.adSlotrtrue;
                            }, t.prototype.clearTTRTimeout = function() {
                                return clearInterval(this.ttrTimeout), this.ttr = null, this.adSlotrtrue;
                            }, t.prototype.setTTR = function() {
                                var t = this,
                                    e = this.ttr.length > 0 ? parseInt(Math.random() * (this.ttr[0][1] - this.ttr[0][0]) + this.ttr[0][0]) : 30;
                                return setTimeout((function() {
                                    t.ttrPassed = !0, (!t.ttrCheck || e < 20 || t.adSlot.checkIsRequestReady()) && t.bid()
                                }), 1e3 * e)
                                
                            },
                                                        t.prototype.getAdUnitStatus = function(t, e, i) {
                                console.log("getAdUnitStatus", "t:", t);
                                void 0 === e && (e = null);
                                //var n = this.getWaterfall(this.currentAdUnit);
                                                                var r = this.currentAdUnit.params.prohibitedCampaigns;
                                if (i) {
                                    this.removeCurrentAdUnit();
                                    if (r.active && !n) {
                                        if (!r.tryWithWaterFall || !n) {
                                            this.pause();
                                            if (r.times < 0 || (r.tick || 0) < r.times) {
                                                this.currentAdUnit.params.prohibitedCampaigns.tick = (r.tick || 0) + 1
                                                this.adUnitsArray = [[this.adUnitsArray[0][this.adUnitsArray[0].length-1]]];
                                                setTimeout(() => {
                                                    this.setup(this.adUnitsArray, !0);
                                                }, (r.millisecondsToWait.length > 0 ? parseInt(Math.random() * (r.millisecondsToWait[1] - r.millisecondsToWait[0]) + r.millisecondsToWait[0]) : 30)*1000)
                                            }
                                        }
                                        return;
                                    }
                                }
                                                                //console.log(!t && n ? "FAI WATERFALL" : "NON FARE WATERFALL", t, n);
                                //!t && n ? this.useWaterfall(n) : this.handleAdUnitStatus(t, e)
                                this.handleAdUnitStatus(t, e);
                            }, t.prototype.getWaterfall = function(t) {
                                var e = i(t.cursor, 2),
                                    n = e[0],
                                    r = e[1];
                                //return this.adUnits[n][r + 1] || null
                                return this.adUnits[n][r + 1] || this.adUnits[0][0]
                            }, t.prototype.useWaterfall = function(t) {
                                this.currentAdUnit = t, this.bid(!0)
                            }, t.prototype.handleAdUnitStatus = function(t, e) {
                                console.log("%chandleAdUnitStatus", "color: royalblue;font-weight: bold;", "t:", t);
                                if (this.toRemoveContainer) {
                                    this.toRemoveContainer.remove();
                                    this.toRemoveContainer = null;
                                }
                                if (void 0 === e) {
                                    e = null;
                                }
                                if (t) {
                                    this.handleSoldUnit(e);
                                } else if (this.onNotSold) {
                                    this.handleNotSoldUnit();
                                }
                                var nextAdUnit = this.getNextAdUnit(this.currentAdUnit);
                                var empty = !t && nextAdUnit;
                                if (empty || !this.currentAdUnit.refresh && this.oneSold || this.currentAdUnit.refresh && this.currentAdUnit.refresh.tick >= this.currentAdUnit.refresh.times) {
                                    console.trace("NEXT AD UNIT: NEXT", nextAdUnit);
                                    //this.currentAdUnit = this.getWaterfall(this.currentAdUnit);
                                    this.toRemoveContainer = this.currentAdUnit.adUnitContainer;
                                    this.currentAdUnit = nextAdUnit;
                                    /*if (this.currentAdUnit.type == "placeholder" || !nextAdUnit) {
                                        this.currentAdUnit = null;
                                    } else if (nextAdUnit.type != "placeholder" || empty) {
                                        this.currentAdUnit = nextAdUnit;
                                    }*/
                                    if (empty) {
                                        console.log("%cSLOT VUOTA", "color: #D80000;font-size: 20px;");
                                        this.bid(!0);
                                    }
                                } else {
                                    console.log("NEXT AD UNIT: RESTA", this.currentAdUnit);
                                    //this.currentAdUnit = null;
                                    //this.killed = true;
                                }
                            }, t.prototype.handleSoldUnit = function(t) {
                                this.oneSold = !0, t && this.hideUnsoldContainers(t), this.adSlot.initTimer(), this.manageAdContainerIframe()
                            }, t.prototype.hideUnsoldContainers = function(t) {
                                var e = [];
                                this.adUnits.forEach((function(n) {
                                    n.forEach((function(i) {
                                        t.id === i.adUnitContainer.id && (e = n)
                                    })), e.forEach((function(e) {
                                        var n;
                                        e.adUnitContainer.id !== t.id && (null === (n = e.hideAdUnitContainer) || void 0 === n || n.call(e))
                                    }))
                                }))
                            }, t.prototype.manageAdContainerIframe = function() {
                                var t;
                                this.adUnitIframe = this.currentAdUnit.adUnitContainer?.querySelector("iframe");
                                if (this.adUnitIframe) {
                                    this.setIframeSizes();
                                }
                            }, t.prototype.setIframeSizes = function() {
                                if (+this.adUnitIframe.width > 0 && +this.adUnitIframe.height > 0) {
                                    this.adUnitIframe.style.width = this.adUnitIframe.width + "px";
                                    this.adUnitIframe.style.height = this.adUnitIframe.height + "px";
                                    this.adUnitIframe.setAttribute("oaWidthSet", "true");
                                } else {
                                    this.adUnitIframe.style.width = "0px";
                                    this.adUnitIframe.style.height = null;
                                }
                            }, t.prototype.handleNotSoldUnit = function() {
                                var t, e;
                                this.kill();
                                var n = this.adSlot.element.parentNode;
                                null == n || n.remove(), null === (e = null === (t = this.adSlot) || void 0 === t ? void 0 : t.productContainer) || void 0 === e || e.remove(), this.onNotSold()
                            }, t.prototype.getNextAdUnit = function(t) {
                                var e = t.cursor[0];
                                /*if (!e) {
                                    return this.adUnits[0][0];
                                }
                                if (this.adUnits[e + 1]) {
                                    return this.adUnits[e + 1][0];
                                }
                                return null;*/
                                var e = t.cursor[0];
                                return this.adUnits[e + 1] ? this.adUnits[e + 1][0] : this.adUnits[0][0]
                            }, t.prototype.handleProductContainer = function() {
                                var t;
                                (null === (t = this.adSlot) || void 0 === t ? void 0 : t.productContainer) && this.slotHasSoldAd() ? this.showProductContainer() : this.hideProductContainer()
                            }, t.prototype.slotHasSoldAd = function() {
                                return this.adUnits.some((function(t) {
                                    return t.some((function(t) {
                                        var e;
                                        return "none" !== (null === (e = t.adUnitContainer) || void 0 === e ? void 0 : e.style.display)
                                    }))
                                }))
                            }, t.prototype.showProductContainer = function() {
                                this.adSlot.productName.match(/WindowInContent/) && (this.adSlot.productContainer.style.height = this.adSlot.additionalOptions.height), this.adSlot.productContainer.style.visibility = "visible"
                            }, t.prototype.productContainerLoaded = function() {
                                var t;
                                return null === (t = this.adSlot) || void 0 === t ? void 0 : t.productContainer
                            }, t
                        }();
                    e.default = a
                },
                "_kit_function20_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__read || function(t, e) {
                        var n = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var i, r, o = n.call(t),
                            a = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                        } catch (t) {
                            console.error("CATCH 26", t);                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (n = o.return) && n.call(o)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return a
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function188_"),
                        o = function() {
                            function t(t, e, n) {
                                void 0 === t && (t = "adx"), this.type = t, this.params = e, this.adUnitManager = n, this.adUnitContainer = r.createElement({
                                    name: "div"
                                }), this.rendered = !1, Object.assign(this, this.params), this.createAdUnitContainer()
                            }
                            return t.prototype.hideAdUnitContainer = function() {
                                this.adUnitContainer.style.display = "none"
                            }, t.prototype.bid = function() {
                                this.rendered || (this.rendered = !0, this.createAdUnitElement(), this.setAdUnitContainerStyle(), this.setElementStyle(), this.setElementAttributes(), this.adUnitContainer.insertAdjacentElement("afterbegin", this.element), (window.adsbygoogle = window.adsbygoogle || []).push({}), this.adUnitManager.handleBidResponse(!0, this.adUnitContainer), this.adUnitManager.kill())
                            }, t.prototype.createAdUnitContainer = function() {
                                this.adUnitManager.adSlot.container.insertAdjacentElement("beforeend", this.adUnitContainer)
                            }, t.prototype.createAdUnitElement = function() {
                                this.element = r.createElement({
                                    name: "ins",
                                    classes: ["adsbygoogle"],
                                    attributes: {
                                        "data-ad-client": this.client,
                                        "data-ad-slot": this.slot
                                    }
                                })
                            }, t.prototype.setAdUnitContainerStyle = function() {
                                var t = {
                                    "display": "flex",
                                    "justify-content": "center",
                                    "align-items": "center",
                                    "max-height": this.containerHeight + "px",
                                    "max-width": this.containerWidth + "px",
                                    "height": this.containerHeight + "px",
                                    "width": this.containerWidth + "px"
                                };
                                Object.assign(this.adUnitContainer.style, t)
                            }, t.prototype.setElementStyle = function() {
                                var t = i(this.width || this.height ? this.defineElementSizes() : ["100%", "100%"], 2),
                                    e = t[0],
                                    n = t[1];
                                Object.assign(this.element.style, {
                                    "display": "block",
                                    "width": "" + e,
                                    "height": "" + n
                                })
                            }, t.prototype.defineElementSizes = function() {
                                return [0 == ~~("" + this.width) ? this.width : this.width + "px", 0 == ~~("" + this.height) ? this.height : this.height + "px"]
                            }, t.prototype.setElementAttributes = function() {
                                this.adformat && this.element.setAttribute("data-ad-format", this.adformat), this.fullWidthResponsive && this.element.setAttribute("data-full-width-responsive", "true")
                            }, t
                        }();
                    e.default = o
                },
                "_kit_function21_": function(t, e, n) {
                    "use strict";
                    var i, r = this && this.__extends || (i = function(t, e) {
                            return (i = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                                })(t, e)
                        }, function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                            function n() {
                                this.constructor = t
                            }
                            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                        }),
                        o = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = function(t) {
                        function e() {
                            var e = null !== t && t.apply(this, arguments) || this;
                            return e.bidCallback = function() {
                                e.googletag.enableServices();
                                e.googletag.pubads();
                                if (e.isGoogleSlotDisplayed()) {
                                    e.googletag.pubads().refresh([e.googleSlot]);
                                } else {
                                    e.googletag.display(e.adUnitContainer.id);
                                }
                            }, e
                        }
                        return r(e, t), e.prototype.bid = function() {
                            console.log("dfp bid");                            window.__isGoogleAllowed ? this.googletag.cmd.push(this.bidCallback) : this.adUnitManager.handleBidResponse(!1, null)
                        }, e
                    }(o(n("_kit_function22_")).default);
                    e.default = a
                },
                "_kit_function22_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        o = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
                            return r(e, t), e
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = o(n("_kit_function38_")),
                        s = n("_kit_function188_"),
                        l = function() {
                            function t(t, e, n) {
                                var i, r = this;

                                this.type = t, this.params = e, this.adUnitManager = n, this.adUnitContainer = s.createElement({
                                    name: "div"
                                }), this.googleSlot = null, this.eventsRegistered = !1, this.isDisplayed = !1, this.isGoogleSlotDisplayed = function() {
                                    return r.googletag.pubads().isInitialLoadDisabled() || r.googletag.pubads().enableSingleRequest() || r.isDisplayed
                                }, this.slotRenderEndedCallback = function() {
                                    r.googletag.pubads().addEventListener("slotRenderEnded", (function(t) {
                                        r.googleSlot === t.slot && (r.onEventSoldRendered(t), r.onSlotRenderedPostMessage(t));
                                    }))
                                },
                                                                this.onSlotRenderedPostMessage = function(t) {
                                    setTimeout(function() {
                                        var e = r.adUnitContainer.getBoundingClientRect(),
                                            n = window,
                                            i = document,
                                            o = i.documentElement;
                                        parent.postMessage({
                                            "event": "slotRenderEnded",
                                            "slotId": t.slot.getAdUnitPath(),
                                            "isEmpty": t.isEmpty,
                                            "slot": [e.width, e.height, o.scrollTop+e.y, o.scrollLeft+e.x],
                                            "page": [((n.innerWidth) ? n.innerWidth : (i && o && o.clientWidth) ? o.clientWidth : (i && i.body && i.body.clientWidth) ? i.body.clientWidth : 0), ((n.innerHeight) ? n.innerHeight : (i && o && o.clientHeight) ? o.clientHeight : (i && i.body && i.body.clientHeight) ? i.body.clientHeight : 0)]
                                        }, "*");
                                    }, 4e3);
                                },	
                                                                Object.assign(this, this.params, this.adUnitManager), this.googletag = this.adSlot.iframeWindow ? this.adSlot.iframeWindow.googletag : window.googletag, this.response = {
                                    type: t,
                                    brandingAllow: !0
                                }, this.sizes = this.sizes || (null === (i = this.params.mediaTypes) || void 0 === i ? void 0 : i.banner.sizes), this.appendAdUnitContainer(), this.registerEvents(), this.defineSlot()
                            }
                            return t.prototype.hideAdUnitContainer = function() {
                                this.adUnitContainer.style.display = "none"
                            }, t.prototype.appendAdUnitContainer = function() {
                                var t;
                                this.adSlot.container.insertAdjacentElement("beforeend", this.adUnitContainer), "fluid" === (null === (t = this.sizes) || void 0 === t ? void 0 : t[0]) && this.setFluidStyles()
                            }, t.prototype.setFluidStyles = function() {
                                this.adUnitContainer.style.width = "100%", this.adSlot.container.style.width = "100%", this.adSlot.element.style.width = "100%", this.adSlot.element.parentElement.style.width = "100%"
                            }, t.prototype.registerEvents = function() {
                                this.eventsRegistered || (this.eventsRegistered = !0, this.googletag.cmd.push(this.slotRenderEndedCallback))
                            }, t.prototype.onEventSoldRendered = function(t) {
                                                                var e = [2714677104,2751011665].includes(t.campaignId);
                                                                    console.log("campagna corrente", t.slot ? t.slot.getName() : "NULL", "empty:", t.isEmpty);
                                    console.log("campagna", t.campaignId, e ? "bloccata" : "abilitata");
                                                                                                this.isDisplayed = !0, this.adUnitManager.handleBidResponse(!t.isEmpty  && !e, this.adUnitContainer, e), t.isEmpty || this.publishSoldAd()
                            }, t.prototype.publishSoldAd = function() {
                                a.default.publish(a.AD_SOLD + "_" + this.adSlot.productId, this.response), a.default.publish(a.AD_SOLD + "_" + this.adSlot.productId + "--" + this.adSlot.id, this.response)
                            },
                                                        t.prototype.extraParam = function(t) {
                                switch (t.name) {
                                    case "page_url":
                                        return "https://"+document.location.hostname+"/";
                                    case "env":
                                    case "protag_env":
                                        return "prod";
                                    case "site":
                                        return window.location.hostname;
                                    case "referrer":
                                        var e = window.document.referrer ? window.document.referrer.match(/:\/\/(.[^/]+)/) : null;
                                        return e ? e[1] : "-";
                                    case "protag_page-url":
                                        return window.location.href;
                                    case "protag_times":
                                        var e = new Date,
                                            n = e.getUTCHours(),
                                            i = e.getUTCMinutes();
                                        return {
                                            "protag_segment_20m": (3 * n + Math.floor(i / 20)).toString().padStart(2, "0"),
                                            "protag_minutes": i.toString().padStart(2, "0"),
                                            "protag_hours": n.toString().padStart(2, "0"),
                                            "protag_day": e.getUTCDay().toString()
                                        };
                                    case "protag_client":
                                        return "global_new_client";
                                    case "utm_fields":
                                        var e = {},
                                            n = {};
                                        return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (n, i, r) => e[i] = r), ["utm_campaign", "utm_source", "utm_medium", "utm_term", "utm_content"].forEach(i => n[i] = void 0 === e[i] ? "-" : e[i]), n;
                                    default:
                                        return {}
                                }
                            },
                                                        t.prototype.defineSlot = function() {
                                                                console.log("defineSlot dfp");                                var t = this,
                                    e = this.googletag,
                                    n = void 0 !== t.refresh && void 0 !== t.refresh.define && void 0 !== t.refresh.tick ? t.refresh.code : t.code;
                                e.cmd.push((function() {
                                    e.pubads().setForceSafeFrame(t.safeframe), t.googletag.enableServices(), "dfp-oop" === t.type ? t.slot = t.googletag.defineOutOfPageSlot(n, t.adUnitContainer.id) : t.slot = t.googletag.defineSlot(n, t.sizes, t.adUnitContainer.id), t.googleSlot = t.slot.addService(t.googletag.pubads()), t.extra && t.extra.set.forEach(i => {
                                        var r = t.extraParam(i);
                                        "object" == typeof r ? Object.entries(r).forEach(o => t.googleSlot.set(o[0], o[1])) : t.googleSlot.set(i, r);
                                    }), t.extra && t.extra.targeting && t.extra.targeting.static.forEach(i => {
                                        var r = t.extraParam(i);
                                        "object" == typeof r ? Object.entries(r).forEach(o => t.googleSlot.setTargeting(o[0], o[1])) : t.googleSlot.setTargeting(i, r);
                                    }), t.params && t.params.extra && t.params.extra.targeting && t.params.extra.targeting.dynamic && Object.entries(t.params.extra.targeting.dynamic).forEach(i => t.googleSlot.setTargeting(i[0], i[1])), e.enableServices()
                                }))
                                                            }, t
                        }();
                    e.default = l
                },
                "_kit_function23_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        o = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
                            return r(e, t), e
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = o(n("_kit_function38_")),
                        s = n("_kit_function188_"),
                        l = function() {
                            function t(t, e, n) {
                                void 0 === t && (t = "direct"), this.type = t, this.params = e, this.adUnitManager = n, this.adUnitContainer = s.createElement({
                                    name: "div"
                                }), Object.assign(this, this.params, this.adUnitManager), this.response = {
                                    type: t,
                                    brandingAllow: !0
                                }
                            }
                            return t.prototype.bid = function() {
                                console.log("Visualizzazione direct", this);
                                //this.config = this.params[Math.floor(Math.random() * this.params.length)];
                                if (this.element) {
                                    this.element.remove();
                                }
                                this.createSlot();
                                this.adUnitManager.handleBidResponse(true, this.adUnitContainer);
                                a.default.publish(a.AD_SOLD + "_" + this.adUnitManager.adSlot.productId, this.response);
                                a.default.publish(a.AD_SOLD + "_" + this.adUnitManager.adSlot.productId + "--" + this.adUnitManager.adSlot.id, this.response);

                            }, t.prototype.createSlot = function() {
                                this.adUnitManager.track(this.adUnitManager.currentAdUnit, this.params, 0);
                                if (this.params.html) {
                                    this.createDirectAdElementFirstParam();
                                } else {
                                    this.createDirectAdElementSecondParam();
                                }
                            }, t.prototype.createDirectAdElementFirstParam = function() {
                                this.element = s.createElement({});
                                                                this.element.appendChild(document.createRange().createContextualFragment(this.params.html));
                                this.adUnitContainer.insertAdjacentElement("beforeend", this.element);
                                this.adSlot.container.insertAdjacentElement("beforeend", this.adUnitContainer);
                                //this.adUnitManager.adSlot.container.insertAdjacentElement("beforeend", this.element);
                            }, t.prototype.createDirectAdElementSecondParam = function() {
                                var t = this.params,
                                    e = t.href,
                                    n = t.src,
                                    i = t.trackurl,
                                    r = {
                                        name: "a",
                                        attributes: {
                                            href: e,
                                            target: "blank"
                                        }
                                    },
                                    o = {
                                        name: "img",
                                        attributes: {
                                            src: n
                                        }
                                    },
                                    a = {
                                        name: "img",
                                        attributes: {
                                            src: i
                                        },
                                        styles: {
                                            "width": "1px",
                                            "height": "1px",
                                            "opacity": "0"
                                        }
                                    };
                                this.element = s.createElement(r);
                                this.element.appendChild(s.createElement(o));
                                if (i) {
                                    this.element.appendChild(s.createElement(a));
                                }
                                this.adUnitContainer.insertAdjacentElement("beforeend", this.element);
                                this.adSlot.container.insertAdjacentElement("beforeend", this.adUnitContainer);
                                //this.adUnitManager.adSlot.container.insertAdjacentElement("beforeend", this.element);
                            }, t
                        }();
                    e.default = l
                },
                "_kit_function24_": function(t, e, n) {
                    "use strict";
                    var i, r = this && this.__extends || (i = function(t, e) {
                            return (i = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                                })(t, e)
                        }, function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                            function n() {
                                this.constructor = t
                            }
                            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                        }),
                        o = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 27", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        a = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        s = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = n("_kit_function11_"),
                        u = s(n("_kit_function22_")),
                        c = s(n("_kit_function29_")),
                        d = s(n("_kit_function41_")),
                        h = function(t) {
                            function e(e, n, i) {
                                void 0 === e && (e = "hb");
                                var r = t.call(this, e, n, i) || this;
                                return r.type = e, r.params = n, r.priceGranularity = {
                                    /*buckets: [{
                                        precision: 2,
                                        max: 4,
                                        increment: .01
                                    }, {
                                        precision: 2,
                                        max: 10,
                                        increment: .1
                                    }, {
                                        precision: 2,
                                        max: 50,
                                        increment: .5
                                    }]*/
                                }, r.areGlobalBidsUsed = function() {
                                    return r.params.bids.some((function(t) {
                                        return "global" === t.bidder
                                    }))
                                }, r.request = function() {
                                    var t = r.params.timeout >= 800 ? r.params.timeout : 1e3;
                                    r.prebid.que.push((function() {
                                        window[l.pbjsnetpub221021].setConfig({
                                            priceGranularity: r.priceGranularity
                                        }), r.prebid.addAdUnits({
                                            bids: r.params.bids,
                                            code: r.adUnitContainer.id,
                                            mediaTypes: r.params.mediaTypes
                                                                                    }), r.prebid.requestBids({
                                            timeout: t,
                                            bidsBackHandler: r.callbackHB
                                        }), r.prebid.removeAdUnit(r.adUnitContainer.id)
                                    }))
                                }, r.callbackHB = function() {
                                    r.googletag.cmd.push((function() {
                                        r.prebid.que.push((function() {
                                            r.prebid.setTargetingForGPTAsync(r.adUnitContainer.id)
                                        })), r.isGoogleSlotDisplayed() ? r.googletag.pubads().refresh([r.googleSlot]) : r.googletag.display(r.adUnitContainer.id)
                                    }))
                                }, r.id = r.adSlot.productId + "-" + r.adSlot.index, r.prebid = r.iframeWindow ? r.iframeWindow[l.pbjsnetpub221021] : window[l.pbjsnetpub221021], r.areGlobalBidsUsed() && r.getGlobalBids(), r
                            }
                            return r(e, t), e.prototype.bid = function() {
                                c.default.sendRequest(this.request, this.prebid)
                            }, e.prototype.getGlobalBids = function() {
                                var t = d.default.state.prebidBids || [],
                                    e = this.params.bids.filter((function(t) {
                                        return "global" !== t.bidder
                                    }));
                                this.params.bids = a(a([], o(t)), o(e))
                            }, e
                        }(u.default);
                    e.default = h
                },
                "_kit_function25_": function(t, e, n) {
                    "use strict";
                    var i, r = this && this.__extends || (i = function(t, e) {
                        return (i = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            })(t, e)
                    }, function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function n() {
                            this.constructor = t
                        }
                        i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    });
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n("_kit_function26_"),
                        a = n("_kit_function188_"),
                        s = function(t) {
                            function e(e, n, i) {
                                void 0 === e && (e = "mgid");
                                var r = t.call(this, n) || this;
                                return r.type = e, r.params = n, r.adUnitManager = i, Object.assign(r, r.params, r.adUnitManager), r
                            }
                            return r(e, t), e.prototype.setup = function() {
                                this.createWrapper()
                            }, e.prototype.bid = function() {
                                this.adUnitManager.kill(), this.setup(), this.createIframe(), this.appendHeaderScript(), this.appendDivIntoIframe()
                            }, e.prototype.createWrapper = function() {
                                this.wrapper = a.createElement(this.container.element), this.wrapper.id = "M" + this.siteID + "ScriptRootC" + this.wigetID, this.adSlot.container.insertAdjacentElement("beforebegin", this.wrapper)
                            }, e
                        }(o.MgidBase);
                    e.default = s
                },
                "_kit_function26_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.MgidBase = void 0;
                    var r = n("_kit_function188_"),
                        o = i(n("_kit_function208_")),
                        a = n("_kit_function27_"),
                        s = function() {
                            function t(t) {
                                var e = this;
                                this.params = t, this.divInIframe = r.createElement({
                                    styles: {
                                        "display": "none"
                                    }
                                }), this.iframe = r.createElement({
                                    name: "iframe",
                                    styles: {
                                        "display": "none"
                                    }
                                }), this.preloadContainer = r.createElement({}), this.kill = function() {
                                    var t;
                                    null === (t = e.wrapper.parentNode) || void 0 === t || t.removeChild(e.wrapper)
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                this.createMainWrapper(), this.wrapper && (this.createIframe(), this.appendHeaderScript(), this.appendDivIntoIframe())
                            }, t.prototype.createIframe = function() {
                                this.wrapper.appendChild(this.iframe), this.iframeDocument = this.iframe.contentWindow.document, this.iframeDocument.open().writeln(a.IFRAME_STRUCTURE), this.iframeDocument.close(), this.iframeContainer = this.iframeDocument.body
                            }, t.prototype.appendHeaderScript = function() {
                                var t = this.getScriptLink(),
                                    e = r.createElement({
                                        name: "script",
                                        attributes: {
                                            src: t,
                                            async: "true"
                                        }
                                    });
                                this.iframeContainer.appendChild(e)
                            }, t.prototype.appendDivIntoIframe = function() {
                                this.divInIframe.id = "MG_ID", this.divInIframe.innerHTML = this.params.wigetID.toString(), this.iframeContainer.appendChild(this.divInIframe)
                            }, t.prototype.getScriptLink = function() {
                                return (0 === document.location.protocol.indexOf("http") ? document.location.protocol : "https:") + "//" + this.getSSPDomain() + "/" + this.domain.firstLetter + "/" + this.domain.secondLetter + "/" + this.domain.name + "." + this.wigetID + ".js?t=" + a.DATE_FINGERPRINT
                            }, t.prototype.getSSPDomain = function() {
                                if ("mgid" === this.type.toLowerCase()) return "jsc.mgid.com";
                                throw new Error("Unsupported type")
                            }, t.prototype.createMainWrapper = function() {
                                this.targetElement = o.default.findSelector(this.target), this.targetElement && (this.wrapper = r.createElement(this.container.element), this.wrapper.id = "M" + this.siteID + "ScriptRootC" + this.wigetID, this.preloadContainer.id = "M" + this.siteID + "PreloadC" + this.wigetID, this.wrapper.appendChild(this.preloadContainer), this.targetElement.insertAdjacentElement(this.target.insertMethod, this.wrapper))
                            }, t
                        }();
                    e.MgidBase = s
                },
                "_kit_function27_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.IFRAME_STRUCTURE = e.DATE_FINGERPRINT = void 0;
                    var n = new Date;
                    e.DATE_FINGERPRINT = +n.getUTCFullYear() + n.getUTCMonth() + n.getUTCDate() + n.getUTCHours(), e.IFRAME_STRUCTURE = "<html><body></body></html>"
                },
                "_kit_function28_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        o = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
                            return r(e, t), e
                        },
                        a = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 28", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        s = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        l = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var u = n("_kit_function11_"),
                        c = o(n("_kit_function38_")),
                        d = l(n("_kit_function41_")),
                        h = n("_kit_function188_"),
                        f = l(n("_kit_function29_")),
                        p = function() {
                            function t(t, e, n) {
                                var i = this;
                                void 0 === t && (t = "pb"), this.type = t, this.params = e, this.adUnitManager = n, this.prebid = window[u.pbjsnetpub221021], this.adUnitContainer = h.createElement({
                                    name: "div",
                                    styles: {
                                        "position": "absolute",
                                        "top": "0"
                                    }
                                }), this.prebidRequestCallback = function(t) {
                                    if (!(null == t ? void 0 : t.adserverTargeting.hb_adid)) return i.adUnitManager.handleBidResponse(!1, i.adUnitContainer);
                                    i.response.size = [t.width, t.height], i.createIframe(), i.showAdUnitContainer(t), i.handleSuccessfulBid(t)
                                }, this.createIframe = function() {
                                    var t;
                                    null === (t = i.iframe) || void 0 === t || t.remove(), i.adUnitContainer.innerHTML = "", i.iframe = h.createElement(u.PREBID_IFRAME), i.adUnitContainer.insertAdjacentElement("beforeend", i.iframe)
                                }, Object.assign(this, this.params, this.adUnitManager), this.id = this.adSlot.productId + "-" + this.adSlot.index, this.response = {
                                    type: t,
                                    brandingAllow: !0
                                }, this.appendAdUnitContainer()
                            }
                            return t.prototype.bid = function() {
                                console.log("pb bid");                                this.getGlobalBids(), this.timeout >= 800 || (this.timeout = 1e3), this.floor >= 0 || (this.floor = 0), this.params.code = this.id, this.params.bids = this.bids, t.sendRequest({
                                    id: this.id,
                                    params: this.params,
                                    cb: this.prebidRequestCallback,
                                    timeout: this.timeout,
                                    floor: this.floor
                                });
                                this.adUnitManager.track(this.adUnitManager.currentAdUnit, this.adUnitManager.currentAdUnit.params, 0);
                            }, t.sendRequest = function(e) {
                                var n = e.id,
                                    i = e.params,
                                    r = e.cb,
                                    o = e.timeout,
                                    a = e.floor,
                                    s = window[u.pbjsnetpub221021],
                                    l = t.getRequest({
                                        id: n,
                                        params: i,
                                        cb: r,
                                        timeout: o,
                                        floor: a
                                    });
                                f.default.sendRequest(l, s);
                            }, t.isBidAllowed = function(t) {
                                return !("rendered" === t.status || Date.now() > t.requestTimestamp + 1e3 * t.ttl)
                            }, t.findTheBestBids = function(t, e) {
                                void 0 === e && (e = 0);
                                var n = t.reduce((function(t, e) {
                                    return (u.BID_PROV_MULT[t.bidderCode] ? u.BID_PROV_MULT[t.bidderCode] * t.cpm : t.cpm) > (u.BID_PROV_MULT[e.bidderCode] ? u.BID_PROV_MULT[e.bidderCode] * e.cpm : e.cpm) ? t : e
                                }));
                                return (u.BID_PROV_MULT[n.bidderCode] ? u.BID_PROV_MULT[n.bidderCode] * n.cpm : n.cpm) >= e.toFixed(3) ? n : null
                            }, t.prototype.hideAdUnitContainer = function() {
                                console.log("DISPLAY NONE DI", this.adUnitContainer);
                                this.adUnitContainer.style.display = "none"
                            }, t.prototype.appendAdUnitContainer = function() {
                                this.adSlot.container.insertAdjacentElement("beforeend", this.adUnitContainer)
                            },
                                                        t.prototype.getGlobalBids = function() {
                                if (this.bids.some((function(t) {
                                        return "global" === t.bidder
                                    }))) {
                                    var t = d.default.state.prebidBids || [],
                                        e = this.bids.filter((function(t) {
                                            return "global" !== t.bidder
                                        }));
                                    this.bids = s(s([], a(e)), a(t))
                                }
                                return this.bids
                            }, t.prototype.showAdUnitContainer = function(t) {
                                this.adUnitContainer.style.display = "block", this.adUnitContainer.style.position = "",
                                                                this.adUnitContainer.style.width = t.width+"px",
                                this.adUnitContainer.style.height = t.height+"px";
                                                            }, t.prototype.handleSuccessfulBid = function(t) {
                                var e = this.iframe.contentWindow.document;
                                this.prebid.renderAd(e, t.adserverTargeting.hb_adid);
                                this.adUnitManager.handleBidResponse(!0, this.adUnitContainer);
                                c.default.publish(c.AD_SOLD + "_" + this.adSlot.productId, this.response);
                                c.default.publish(c.AD_SOLD + "_" + this.adSlot.productId + "--" + this.adSlot.id, this.response);
                            }, t.waitForConsent = !0, t.getRequest = function(e) {
                                var n = e.id,
                                    i = e.params,
                                    r = e.cb,
                                    o = e.timeout,
                                    a = e.floor;
                                return function() {
                                    var e = window[u.pbjsnetpub221021];
                                    e.que.push((function() {
                                        e.addAdUnits(i), e.requestBids({
                                            timeout: o,
                                            bidsBackHandler: function() {
                                                var i = e.getBidResponsesForAdUnitCode(n).bids.filter(t.isBidAllowed);
                                                if (i.length) {
                                                    var o = t.findTheBestBids(i, a);
                                                    r.call(t, o)
                                                } else r.call(t, null)
                                            }
                                        }), e.removeAdUnit(n)
                                    }))
                                }
                            }, t
                        }();
                    e.default = p
                },
                "_kit_function29_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function11_"),
                        r = function() {
                            function t() {}
                            return t.sendRequest = function(e, n) {
                                void 0 === n && (n = window[i.pbjsnetpub221021]), t.prebid = n, t.waitForConsent && window.frames.__tcfapiLocator ? t.checkTcfConsents(e) : (t.waitForConsent = !1, e())
                            }, t.checkTcfConsents = function(e) {
                                window.__tcfapi("getTCData", 2, (function(n) {
                                    void 0 === n.gdprApplies || n.gdprApplies ? window.__tcfapi("addEventListener", 2, (function(n, i) {
                                        return t.waitForConsentCallback(n, i, e)
                                    })) : t.initPrebid(n, e)
                                }))
                            }, t.initPrebid = function(e, n) {
                                t.prebid.que.push((function() {
                                    return t.initPrebidCallback(n)
                                })), window.__tcfapi("removeEventListener", 2, (function(e, i) {
                                    return t.waitForConsentCallback(e, i, n)
                                }), e.listenerId)
                            }, t.waitForConsent = !0, t.prebidConfig = {
                                consentManagement: {
                                    gdpr: {
                                        cmpApi: "iab",
                                        timeout: 500,
                                        defaultGdprScope: !0
                                    }
                                }
                            }, t.initPrebidCallback = function(e) {
                                t.prebid.setConfig(t.prebidConfig), e(), t.waitForConsent = !1
                            }, t.waitForConsentCallback = function(e, n, i) {
                                t.tcfAccepted(e, n) && t.initPrebid(e, i)
                            }, t.tcfAccepted = function(t, e) {
                                return e && "loaded" === t.cmpStatus && t.gdprApplies && ("tcloaded" === t.eventStatus || "useractioncomplete" === t.eventStatus)
                            }, t
                        }();
                    e.default = r
                },
                "_kit_function30_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        o = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
                            return r(e, t), e
                        },
                        a = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = o(n("_kit_function38_")),
                        l = a(n("_kit_function41_")),
                        u = n("_kit_function188_"),
                        c = a(n("_kit_function200_")),
                        d = function() {
                            function t(t, e, n) {
                                var i = this;
                                void 0 === t && (t = "yan-rtb"), this.type = t, this.params = e, this.adUnitManager = n, this.id = c.default.generate(), this.yandex = window.Ya, this.renderRTB = function() {
                                    i.adUnitManager.kill(), i.yandex.Context.AdvManager.render({
                                        blockId: i.blockId,
                                        renderTo: i.id,
                                        async: !0,
                                        pageNumber: i.yandexStatIdCounter,
                                        onRender: function() {
                                            return i.publishSoldInformation()
                                        }
                                    })
                                }, Object.assign(this, this.params, this.adUnitManager), this.createAdUnitContainer(), this.setYandexStatIdCounter(), this.response = {
                                    type: t,
                                    brandingAllow: !1
                                }
                            }
                            return t.prototype.bid = function() {
                                var t = this,
                                    e = setInterval((function() {
                                        var n, i;
                                        (null === (i = null === (n = t.yandex) || void 0 === n ? void 0 : n.Context) || void 0 === i ? void 0 : i.AdvManager) && (clearInterval(e), t.renderRTB())
                                    }), 5)
                            }, t.prototype.createAdUnitContainer = function() {
                                this.adUnitContainer = u.createElement({
                                    name: "div",
                                    attributes: {
                                        id: this.id
                                    }
                                }), this.adUnitManager.adSlot.container.insertAdjacentElement("beforeend", this.adUnitContainer)
                            }, t.prototype.setYandexStatIdCounter = function() {
                                this.yandexStatIdCounter = l.default.state.yandexStatIdCounter, l.default.setState({
                                    yandexStatIdCounter: this.yandexStatIdCounter + 1,
                                    prebidBids: []
                                })
                            }, t.prototype.publishSoldInformation = function() {
                                this.adUnitManager.adSlot.productContainer.style.visibility = "visible", s.default.publish(s.AD_SOLD + "_" + this.adSlot.productId, this.response), s.default.publish(s.AD_SOLD + "_" + this.adSlot.productId + "--" + this.adSlot.id, this.response)
                            }, t
                        }();
                    e.default = d
                },
                "_kit_function31_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function19_"));
                    e.default = r.default
                },
                "_kit_function32_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__rest || function(t, e) {
                            var n = {};
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
                            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
                            }
                            return n
                        },
                        r = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 29", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n("_kit_function11_"),
                        a = n("_kit_function188_"),
                        s = function() {
                            function t(e) {
                                var n = this;
                                this.appendAdsByPrebid = function(t) {
                                    var e = t.src,
                                        r = i(t, ["src"]);
                                    document.querySelector('script[src*="' + (null != e ? e : o.PREBID_LIB_VERSION) + '"]') || n.createPrebidScript(e), window[o.pbjsnetpub221021].que.push((function() {
                                        return n.setPrebidConfig(r)
                                    })), n.checkTcfApi(), o.TC_STRING && window[o.pbjsnetpub221021].que.push((function() {
                                        return n.setTCStringConfig()
                                    }))
                                }, this.setPrebidConfig = function(e) {
                                    var n, i = e.timeoutBuffer >= 800 ? e.timeoutBuffer : 1e3,
                                        r = e.bidderSequence ? e.bidderSequence : "random",
                                        a = null !== (n = e.floors) && void 0 !== n ? n : {
                                            enabled: !0
                                        };
                                    window[o.pbjsnetpub221021].setConfig(o.PREBID_CONFIG(i, r, a)), o.SCHAIN_CONFIG && window[o.pbjsnetpub221021].setBidderConfig(o.SCHAIN_CONFIG), t.aliasBidders()
                                }, this.setIabConfig = function() {
                                    window[o.pbjsnetpub221021].setConfig({
                                        consentManagement: {
                                            gdpr: {
                                                cmpApi: "iab",
                                                timeout: 500,
                                                defaultGdprScope: !0
                                            }
                                        }
                                    })
                                }, this.setTCStringConfig = function() {
                                    window[o.pbjsnetpub221021].setConfig({
                                        consentManagement: {
                                            gdpr: {
                                                cmpApi: "static",
                                                consentData: {
                                                    getTCData: {
                                                        tcString: o.TC_STRING,
                                                        gdprApplies: !0
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }, window[o.pbjsnetpub221021] = window[o.pbjsnetpub221021] || {}, window[o.pbjsnetpub221021].que = window[o.pbjsnetpub221021].que || [], this.appendAdsByPrebid(e)
                            }
                            return t.prototype.createPrebidScript = function(t) {
                                this.script = a.createElement({
                                    name: "script",
                                    attributes: {
                                        src: null != t ? t : "https://fstatic.netpub.media/renderer/" + o.PREBID_LIB_VERSION
                                    }
                                }), document.head.appendChild(this.script)
                            }, t.aliasBidders = function() {
                                o.ALIASES.forEach((function(t) {
                                    var e = r(t, 2),
                                        n = e[0],
                                        i = e[1];
                                    return window[o.pbjsnetpub221021].aliasBidder(n, i)
                                }))
                            }, t.prototype.checkTcfApi = function() {
                                var t = this,
                                    e = setInterval((function() {
                                        window.frames.__tcfapiLocator && (window[o.pbjsnetpub221021].que.push((function() {
                                            return t.setIabConfig()
                                        })), clearInterval(e))
                                    }), 200);
                                setTimeout((function() {
                                    clearInterval(e)
                                }), 7e3)
                            }, t
                        }();
                    e.default = s
                },
                "_kit_function33_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function7_"),
                        o = i(n("_kit_function32_")),
                        a = n("_kit_function188_"),
                        s = n("_kit_function34_"),
                        l = function() {
                            function t() {
                                var t = this;
                                this.appendAdsByGoogle = function(e, n) {
                                    if (void 0 === e && (e = window), void 0 === n && (n = document.head), e.googletag = e.googletag || {}, e.googletag.cmd = e.googletag.cmd || [], "HEAD" === n.tagName) t.manageGoogleScript(e, n);
                                    else var i = setInterval((function() {
                                        n && (clearInterval(i), t.manageGoogleScript(e, n))
                                    }), 500)
                                }, this.manageGoogleScript = function(e, n) {
                                    e.document.querySelector('script[src="' + s.GPT_SRC + '"]') || (t.scriptGoogle = a.createElement({
                                        name: "script",
                                        attributes: {
                                            src: s.GPT_SRC
                                        }
                                    }), n.appendChild(t.scriptGoogle))
                                }, this.ssp = r.engineConfig.ssp.map((function(t) {
                                    return t.toLowerCase()
                                })), this.chooseProperScript()
                            }
                            return t.prototype.chooseProperScript = function() {
                                this.ssp.includes("dfp") && this.appendAdsByGoogle();
                                this.ssp.includes("pb") && new o.default(r.engineConfig.prebidConfig);
                                this.ssp.includes("adx") && this.appendAdsByAdx();
                                this.ssp.includes("yan-rtb") && this.appendAdsByYandex()
                                this.ssp.includes("outbrain_TEMP") && this.appendOutbrainWidget()
                            }, t.prototype.appendAdsByAdx = function() {
                                document.querySelector('script[src="' + s.ADX_LIB + '"]') || (this.scriptAdx = a.createElement({
                                    name: "script",
                                    attributes: {
                                        src: s.ADX_LINK
                                    }
                                }), document.head.appendChild(this.scriptAdx))
                            }, t.prototype.appendAdsByYandex = function() {
                                window.Ya = window.Ya || {}, document.querySelector('script[src*="' + s.YANDEX_SRC + '"]') || (this.scriptYandex = a.createElement({
                                    name: "script",
                                    attributes: {
                                        src: s.YANDEX_SRC
                                    }
                                }), document.head.appendChild(this.scriptYandex))
                            }, t.prototype.appendOutbrainWidget = function() {
                                document.querySelector('script[src*="' + s.OBRW_SRC + '"]') || (this.scriptOutbrainWidget = a.createElement({
                                    name: "script",
                                    attributes: {
                                        src: s.OBRW_SRC
                                    }
                                }), document.head.appendChild(this.scriptOutbrainWidget))
                            }, t
                        }();
                    e.default = l
                },
                "_kit_function34_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.YANDEX_SRC = e.GPT_SRC = e.ADX_LINK = e.ADX_LIB = e.OBRW_SRC = void 0;
                    e.ADX_LIB = "adsbygoogle.js";
                    e.ADX_LINK = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
                    e.GPT_SRC = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
                    e.YANDEX_SRC = "//an.yandex.ru/system/context.js";
                    e.OBRW_SRC = "//widgets.outbrain.com/outbrain.js"
                },
                "_kit_function35_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function33_"));
                    e.default = r.default
                },
                "_kit_function36_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.PubSub = void 0;
                    var n = function() {
                        function t() {
                            var t = this;
                            this.lastUid = -1, this.subscriptions = {}, this.checkIfPropertyExist = function(t, e) {
                                return Object.prototype.hasOwnProperty.call(t, e)
                            }, this.getIsFoundValue = function(e) {
                                return t.checkIfPropertyExist(t.subscriptions, e) && t.checkHasKeys(t.subscriptions[e])
                            }, this.checkHasKeys = function(e) {
                                return Object.keys(e).some((function(n) {
                                    return t.checkIfPropertyExist(e, n)
                                }))
                            }, this.createDeliveryCallback = function(e, n) {
                                return function() {
                                    var i = e.lastIndexOf(".");
                                    for (t.deliverMessage(e, e, n); - 1 !== i;) {
                                        var r = e.substr(0, i);
                                        i = r.lastIndexOf("."), t.deliverMessage(e, r, n)
                                    }
                                }
                            }, this.throwException = function(t) {
                                return function() {
                                    throw t
                                }
                            }
                        }
                        return t.prototype.subscribeOnce = function(t, e) {
                            var n = this,
                                i = this.subscribe(t, (function(t, r) {
                                    n.unsubscribe(i), e(t, r)
                                }))
                        }, t.prototype.subscribe = function(t, e) {
                            if ("function" == typeof e) {
                                this.checkIfPropertyExist(this.subscriptions, t) || (this.subscriptions[t] = {});
                                var n = "uid_" + ++this.lastUid;
                                return this.subscriptions[t][n] = e, n
                            }
                        }, t.prototype.unsubscribe = function(t) {
                            this.checkIfPropertyExist(this.subscriptions, t) ? this.deleteSubscription(t) : this.deleteDescendantSubscription(t)
                        }, t.prototype.publish = function(t, e) {
                            if (this.checkIfSubscriptionExist(t)) {
                                var n = this.createDeliveryCallback(t, e);
                                setTimeout(n, 0)
                            }
                        }, t.prototype.deleteSubscription = function(t) {
                            var e = this;
                            Object.keys(this.subscriptions).forEach((function(n) {
                                n === t && delete e.subscriptions[n]
                            }))
                        }, t.prototype.deleteDescendantSubscription = function(t) {
                            var e = this;
                            Object.keys(this.subscriptions).forEach((function(n) {
                                var i = e.subscriptions[n];
                                Object.keys(i).forEach((function(e) {
                                    e === t && delete i[e]
                                }))
                            }))
                        }, t.prototype.checkIfSubscriptionExist = function(t) {
                            for (var e = t.lastIndexOf("."), n = this.getIsFoundValue(t); !n && -1 !== e;) {
                                var i = t.substr(0, e);
                                e = i.lastIndexOf("."), n = this.getIsFoundValue(i)
                            }
                            return n
                        }, t.prototype.deliverMessage = function(t, e, n) {
                            var i = this,
                                r = this.subscriptions[e];
                            this.checkIfPropertyExist(this.subscriptions, e) && Object.keys(r).forEach((function(e) {
                                var o = r[e];
                                i.callSubscription(o, t, n)
                            }))
                        }, t.prototype.callSubscription = function(t, e, n) {
                            try {
                                t(e, n)
                            } catch (t) {
                                console.error("CATCH 30", t);                                setTimeout(this.throwException(t), 0)
                            }
                        }, t
                    }();
                    e.PubSub = n, e.default = new n
                },
                "_kit_function37_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.REMOVE_BRANDING = e.AD_SOLD = void 0, e.AD_SOLD = "AD_SOLD", e.REMOVE_BRANDING = "REMOVE_BRANDING"
                },
                "_kit_function38_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__exportStar || function(t, e) {
                            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
                        },
                        o = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = o(n("_kit_function36_"));
                    e.default = a.default, r(n("_kit_function37_"), e)
                },
                "_kit_function39_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function190_"),
                        r = n("_kit_function40_"),
                        o = new(function() {
                            function t(t) {
                                this.internalState = i.deepClone(t)
                            }
                            return Object.defineProperty(t.prototype, "state", {
                                get: function() {
                                    return i.deepClone(this.internalState)
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.setState = function(t) {
                                var e = i.deepClone(this.internalState),
                                    n = Object.assign(i.deepClone(e), i.deepClone(t));
                                return this.internalState = n, n
                            }, t
                        }())(r.INITIAL_STATE);
                    e.default = o
                },
                "_kit_function40_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.INITIAL_STATE = void 0, e.INITIAL_STATE = {
                        prebidBids: [],
                        yandexStatIdCounter: 0
                    }
                },
                "_kit_function41_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function39_"));
                    e.default = r.default
                },
                "_kit_function42_": function(t, e, n) {
                    "use strict";
                    var i, r = this && this.__extends || (i = function(t, e) {
                        return (i = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            })(t, e)
                    }, function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function n() {
                            this.constructor = t
                        }
                        i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    });
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n("_kit_function43_"),
                        a = function(t) {
                            function e() {
                                var e = t.call(this) || this;
                                return e.attachShadow({
                                    mode: "open"
                                }), e.shadowRoot.innerHTML = "<style>" + o.BRANDING_STYLE_STRING + "</style>" + o.BRANDING_TEMPLATE, e
                            }
                            return r(e, t), e
                        }(HTMLElement);
                    e.default = a
                },
                "_kit_function43_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }),
                    e.BRANDING_TAG_NAME = "netpub-ad";
                    e.BRANDING_TEMPLATE = "\n<a class=\"logo\" href=\"https://netpub.media/?utm_medium=AdsInfo&utm_source=" + window.location.host + "\" target=\"_blank\" rel=\"noopener\">\n	<div class=\"logo\" onmouseenter=\"this.closest('a').classList.add('hover', 'hover_logo');\" onmouseleave=\"setTimeout(() => { this.closest('a').classList.remove('hover_logo'); if (!this.closest('a').classList.contains('hover_text')) { this.closest('a').classList.remove('hover'); }}, 10);\"></div>\n	<div class=\"text\" onmouseenter=\"this.closest('a').classList.add('hover_text');\" onmouseleave=\"setTimeout(() => { this.closest('a').classList.remove('hover_text'); if (!this.closest('a').classList.contains('hover_logo')) { this.closest('a').classList.remove('hover'); }}, 10);\">Ads by <b>Netpub</b></div>\n</a>\n";
                    e.BRANDING_STYLE_STRING = "a.logo div.logo {\n	position: absolute;\n	top: 0;\n	left: 0;\n	padding: 1px 0 0 1px;\n	z-index: 100;\n}\na.logo div.logo:after {\n	content: '';\n	display: block;\n	width: 21px;\n	height: 18px;\n	background-color: #fff;\n	background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMTMuMSAxNDAuNTYiPg0KCTxkZWZzPg0KCQk8bGluZWFyR3JhZGllbnQgaWQ9ImZpbGxMZWZ0IiB5MT0iMTA3LjYyIiB4Mj0iNjUuODYiIHkyPSIxMDcuNjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCgkJCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzVmZThmYyIgLz4NCgkJCTxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzEyYzBmNyIgLz4NCgkJPC9saW5lYXJHcmFkaWVudD4NCgkJPGxpbmVhckdyYWRpZW50IGlkPSJmaWxsTWFpbiIgeDE9IjM0LjQ5IiB5MT0iNzAuMjgiIHgyPSIxODEuMTEiIHkyPSI3MC4yOCIgeGxpbms6aHJlZj0iI2ZpbGxMZWZ0IiAvPg0KCQk8bGluZWFyR3JhZGllbnQgaWQ9ImZpbGxSaWdodCIgeDE9IjE0Ny4yMyIgeTE9IjMyLjk0IiB4Mj0iMjEzLjEiIHkyPSIzMi45NCIgeGxpbms6aHJlZj0iI2ZpbGxMZWZ0IiAvPg0KCTwvZGVmcz4NCgk8cGF0aCBkPSJNMzYuMDksNzQuODRhMzMsMzMsMCwxLDAsMjkuNjIsMzUuOTRBMzIuOTIsMzIuOTIsMCwwLDAsMzYuMDksNzQuODRaIiBzdHlsZT0iZmlsbDogdXJsKCNmaWxsTGVmdCk7IiAvPg0KCTxwYXRoIGQ9Ik0xNzAuNTIsODMuNDQsODkuNzYsOC43NGEzMi45NCwzMi45NCwwLDAsMC00Ni41NCwxLjg1LDMzLjMsMzMuMywwLDAsMC00LjkxLDYuOTIsMzMsMzMsMCwwLDAsNi43NiwzOS42MWw4MC43Nyw3NC43MUEzMywzMywwLDAsMCwxNzIuMzgsMTMwYTMyLjQ3LDMyLjQ3LDAsMCwwLDctMTEuNzZBMzIuOTEsMzIuOTEsMCwwLDAsMTcwLjUyLDgzLjQ0WiIgc3R5bGU9ImZpbGw6IHVybCgjZmlsbE1haW4pOyIgLz4NCgk8cGF0aCBkPSJNMTgzLjMyLjE1YTMyLjksMzIuOSwwLDAsMC0zNSwyNC4yOCwzMS4xOCwzMS4xOCwwLDAsMC0xLDUuMzVBMzIuOTMsMzIuOTMsMCwxLDAsMTgzLjMyLjE1WiIgc3R5bGU9ImZpbGw6IHVybCgjZmlsbFJpZ2h0KTsiIC8+DQo8L3N2Zz4=);\n	background-size: 15px auto;\n	background-position: center;\n	background-repeat: no-repeat;\n	border-radius: 0 0 5px 0;\n	user-select: none;\n	-webkit-user-select: none;\n	-khtml-user-select: none;\n	-moz-user-select: none;\n	-ms-user-select: none;\n	-webkit-touch-callout: none;\n}\na.logo div.text {\n	position: absolute;\n	top: 0;\n	left: 0;\n	height: 0;\n	overflow: hidden;\n	padding: 0 5px;\n	border-radius: 5px 5px 0 0;\n	background-color: #fff;\n	color: #607d8b;\n	box-shadow: 0 0 20px -5px #607d8b;\n	line-height: 21px;\n	font-size: 11px;\n	font-family: Verdana, sans-serif;\n	opacity: 0;\n	transition: all 0.5s ease-in-out;\n}\na.logo.hover div.text {\n	top: -21px;\n	height: 21px;\n	opacity: 1;\n}\n";
                },
                "_kit_function44_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.createBranding = void 0, n("_kit_function2_"), n("_kit_function1_");
                    var r = i(n("_kit_function42_")),
                        o = n("_kit_function188_"),
                        a = n("_kit_function43_");
                    e.createBranding = function() {
                        return function() {
                            if (!window.customElements || !window.customElements.get(a.BRANDING_TAG_NAME))
                                if (window.customElements) window.customElements.define(a.BRANDING_TAG_NAME, r.default);
                                else {
                                    var t = o.createElement({
                                        name: "style",
                                        innerHTML: a.BRANDING_STYLE_STRING
                                    });
                                    document.head.appendChild(t)
                                }
                        }(), window.customElements ? o.createElement({
                            name: a.BRANDING_TAG_NAME
                        }) : o.createElement({
                            name: "DIV",
                            innerHTML: a.BRANDING_TEMPLATE
                        })
                    }
                },
                "_kit_function45_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__exportStar || function(t, e) {
                            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), r(n("_kit_function43_"), e), r(n("_kit_function44_"), e)
                },
                "_kit_function46_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function47_"),
                        o = i(n("_kit_function48_")),
                        a = i(n("_kit_function49_")),
                        s = i(n("_kit_function50_"));
                    e.default = {
                        getInstance: function(t) {
                            switch (t.name) {
                                case r.DATE:
                                    return new o.default(t.params).isEntityRunnable();
                                case r.OCCURRENCE:
                                    return new a.default(t.params).isEntityRunnable();
                                case r.SESSION:
                                    return new s.default(r.SESSION, t.params).isEntityRunnable();
                                case r.ABSOLUTE:
                                    return new s.default(r.ABSOLUTE, t.params).isEntityRunnable();
                                case r.RELATIVE:
                                    return new s.default(r.RELATIVE, t.params).isEntityRunnable();
                                default:
                                    console.error("Error with capping name: "+t.name);                                    return !1
                            }
                        }
                    }
                },
                "_kit_function47_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.OCCURRENCE = e.DATE = e.SESSION = e.RELATIVE = e.ABSOLUTE = void 0, e.ABSOLUTE = "absolute", e.RELATIVE = "relative", e.SESSION = "session", e.DATE = "date", e.OCCURRENCE = "occurrence"
                },
                "_kit_function48_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function t(t) {
                            var e = this;
                            this.params = t, this.canRun = !0, this.now = (new Date).getTime(), this.isEntityRunnable = function() {
                                return e.canRun
                            }, this.fixDateForAllBrowsers = function(t) {
                                return t.replace(/-/g, "/")
                            }, Object.assign(this, this.params), this.canRun = this.checkDate()
                        }
                        return t.prototype.checkDate = function() {
                            return !(this.startDate && (this.getStartDate(), this.countFrom - this.now > 0)) && !(this.endDate && (this.getEndDate(), this.countTo - this.now < 0))
                        }, t.prototype.getStartDate = function() {
                            this.dateStringStart = this.startDate.date + " " + this.startDate.time + " " + this.startDate.timeZone, this.countFrom = new Date(this.fixDateForAllBrowsers(this.dateStringStart)).getTime()
                        }, t.prototype.getEndDate = function() {
                            this.dateStringEnd = this.endDate.date + " " + this.endDate.time + " " + this.endDate.timeZone, this.countTo = new Date(this.fixDateForAllBrowsers(this.dateStringEnd)).getTime()
                        }, t
                    }();
                    e.default = n
                },
                "_kit_function49_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function t(t) {
                            var e = this;
                            this.params = t, this.canRun = !0, this.isEntityRunnable = function() {
                                return e.canRun
                            }, this.getState = function() {
                                var t = (new Date).getTime(),
                                    n = {
                                        pageView: 0,
                                        lastSeen: 0,
                                        occurrence: 0,
                                        expireTime: t
                                    },
                                    i = JSON.parse(localStorage.getItem(e.id));
                                return null === i || t - i.expireTime > 1e3 * e.expires ? n : i
                            }, this.setState = function() {
                                localStorage.setItem(e.id, JSON.stringify(e.occurrenceState))
                            }, Object.assign(this, this.params), this.canRun = this.checkOccurrence()
                        }
                        return t.prototype.checkOccurrence = function() {
                            this.occurrenceState = this.getState(), this.occurrenceState.pageView++, this.setState();
                            var t = this.occurrenceState.pageView > this.visit,
                                e = this.occurrenceState.pageView === this.visit,
                                n = this.occurrenceState.occurrence < this.occurrence,
                                i = this.occurrenceState.lastSeen + this.time < Date.now() / 1e3;
                            return t && n && i ? (this.onLatestVisit(), !1) : !!(e && n && i) && (this.updateOccurrenceState(), !0)
                        }, t.prototype.onLatestVisit = function() {
                            if (1 === this.visit) return this.updateOccurrenceState(), !0;
                            this.occurrenceState.pageView = 1, this.setState()
                        }, t.prototype.updateOccurrenceState = function() {
                            this.occurrenceState.pageView = 0, this.occurrenceState.lastSeen = Date.now() / 1e3, this.occurrenceState.occurrence++, this.setState()
                        }, t
                    }();
                    e.default = n
                },
                "_kit_function50_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__read || function(t, e) {
                        var n = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var i, r, o = n.call(t),
                            a = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                        } catch (t) {
                            console.error("CATCH 31", t);                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (n = o.return) && n.call(o)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return a
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function47_"),
                        o = function() {
                            function t(t, e) {
                                var n, r = this;
                                this.name = t, this.params = e, this.canRun = !0, this.isEntityRunnable = function() {
                                    return r.canRun
                                }, this.cappingAbsolute = function() {
                                    return [function() {
                                        localStorage.setItem(r.id, JSON.stringify(r.interState))
                                    }, function() {
                                        var t = JSON.parse(localStorage.getItem(r.id));
                                        return null === t ? {
                                            pageView: 0,
                                            lastSeen: 0
                                        } : t
                                    }]
                                }, this.cappingRelative = function() {
                                    return [function() {
                                        r.setLocalState(), r.setSessionState()
                                    }, function() {
                                        var t = r.getLocalState(),
                                            e = r.getSessionState();
                                        return e || (!e && t ? {
                                            pageView: 0,
                                            lastSeen: t.lastSeen || 0
                                        } : {
                                            pageView: 0,
                                            lastSeen: 0
                                        })
                                    }]
                                }, this.cappingSession = function() {
                                    return [function() {
                                        r.setSessionState()
                                    }, function() {
                                        var t = r.getSessionState();
                                        return null === t ? {
                                            pageView: 0,
                                            lastSeen: 0
                                        } : t
                                    }]
                                }, this.setLocalState = function() {
                                    localStorage.setItem(r.id, JSON.stringify(r.interState))
                                }, this.setSessionState = function() {
                                    sessionStorage.setItem(r.id, JSON.stringify(r.interState))
                                }, this.getSessionState = function() {
                                    return JSON.parse(sessionStorage.getItem(r.id))
                                }, this.getLocalState = function() {
                                    return JSON.parse(localStorage.getItem(r.id))
                                }, Object.assign(this, this.params), n = i(this.useProperCapping(), 2), this.setState = n[0], this.getState = n[1], this.canRun = this.checkCappingState();
                            }
                            return t.prototype.useProperCapping = function() {
                                switch (this.name) {
                                    case r.ABSOLUTE:
                                        return this.cappingAbsolute();
                                    case r.RELATIVE:
                                        return this.cappingRelative();
                                    case r.SESSION:
                                        return this.cappingSession();
                                    default:
                                        throw new Error("Wrong capping name!")
                                }
                            }, t.prototype.checkCappingState = function() {
                                this.interState = this.getState(), this.interState.pageView++, this.setState();
                                var t = this.interState.pageView > this.visit,
                                    e = this.interState.pageView === this.visit,
                                    n = this.interState.lastSeen + this.time < Date.now() / 1e3;
                                return t && n ? (this.onNextCappingActivation(), !1) : e && n && (this.resetCapping(), !0)
                            }, t.prototype.onNextCappingActivation = function() {
                                1 === this.visit && this.resetCapping(), this.interState.pageView = 1, this.setState()
                            }, t.prototype.resetCapping = function() {
                                this.interState.lastSeen = Date.now() / 1e3, this.interState.pageView = 0, this.setState()
                            }, t
                        }();
                    e.default = o
                },
                "_kit_function51_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function46_"));
                    e.default = r.default
                },
                "_kit_function52_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function8_"),
                        r = function() {
                            function t(t) {
                                this.conditions = t
                            }
                            return t.prototype.checkConditions = function() {
                                return this.canRun = !0, this.disableConditionService(), this.enableConditionService(), this.canRun
                            }, t.prototype.disableConditionService = function() {
                                this.useSingleDisableConditions(), this.useDisableConditionGroup()
                            }, t.prototype.useSingleDisableConditions = function() {
                                var t = this;
                                this.disableConditions = this.getSingleConditions("disable"), this.disableConditions.forEach((function(e) {
                                    return t.getSingleDisableCallback(e)
                                }))
                            }, t.prototype.getSingleDisableCallback = function(t) {
                                var e = this;
                                i.CONDITION_TYPES.some((function(n) {
                                    if (n.name !== t.name) return !1;
                                    var i = n.callback(t.params);
                                    return i && (e.canRun = !1), i
                                }))
                            }, t.prototype.useDisableConditionGroup = function() {
                                var t = this;
                                this.disableConditionsGroup = this.getConditionGroup("disable"), this.disableConditionsGroup.length && this.disableConditionsGroup.some((function(e) {
                                    return t.isGroupActive = !0, t.getDisableGroupCallback(e), t.isGroupActive && (t.canRun = !1), t.isGroupActive
                                }))
                            }, t.prototype.getDisableGroupCallback = function(t) {
                                var e = this;
                                t.forEach((function(t) {
                                    i.CONDITION_TYPES.every((function(n) {
                                        if (n.name !== t.name) return !0;
                                        var i = n.callback(t.params);
                                        return i || (e.isGroupActive = !1), i
                                    }))
                                }))
                            }, t.prototype.enableConditionService = function() {
                                this.canRun && (this.useSingleEnableConditions(), this.useEnableConditionGroup(), this.isEnableTypeApplied())
                            }, t.prototype.useSingleEnableConditions = function() {
                                var t = this;
                                this.enableConditions = this.getSingleConditions("enable"), this.enableFound = !0, this.enableConditions.forEach((function(e) {
                                    return t.getSingleEnableCallback(e)
                                }))
                            }, t.prototype.getSingleEnableCallback = function(t) {
                                var e = this;
                                i.CONDITION_TYPES.forEach((function(n) {
                                    n.name === t.name && (n.callback(t.params) && (e.enableFound = !1))
                                }))
                            }, t.prototype.useEnableConditionGroup = function() {
                                var t = this;
                                this.enableConditionsGroup = this.getConditionGroup("enable"), this.enableConditionsGroup.length && this.enableConditionsGroup.some((function(e) {
                                    return t.isGroupActive = !0, t.getEnableGroupCallback(e), t.isGroupActive && (t.enableFound = !1), t.isGroupActive
                                }))
                            }, t.prototype.getEnableGroupCallback = function(t) {
                                var e = this;
                                t.every((function(t) {
                                    var n = i.CONDITION_TYPES.find((function(e) {
                                        return e.name === t.name
                                    })).callback(t.params);
                                    return n || (e.isGroupActive = !1), n
                                }))
                            }, t.prototype.isEnableTypeApplied = function() {
                                var t = this.enableConditions.length,
                                    e = this.enableConditionsGroup.length;
                                (t || e) && this.enableFound && (this.canRun = !1)
                            }, t.prototype.getSingleConditions = function(t) {
                                return this.conditions.filter((function(e) {
                                    return !Array.isArray(e) && e.type === t
                                }))
                            }, t.prototype.getConditionGroup = function(t) {
                                return this.conditions.filter((function(e) {
                                    return Array.isArray(e) && e[0].type === t
                                }))
                            }, t
                        }();
                    e.default = r
                },
                "_kit_function53_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DOMElementCount = void 0;
                    var r = i(n("_kit_function208_"));
                    e.DOMElementCount = function(t) {
                        var e = t.target,
                            n = t.count,
                            i = t.type,
                            o = t.childrenCount,
                            a = function(t) {
                                switch (i) {
                                    case "greater":
                                        return t > o;
                                    case "greaterOrEqual":
                                        return t >= o;
                                    case "lower":
                                        return t < o;
                                    case "lowerOrEqual":
                                        return t <= o;
                                    default:
                                        return !1
                                }
                            };
                        if ("each" === n) return !e.some((function(t) {
                            var e = r.default.findSelector(t);
                            if (e) {
                                var n = e.childElementCount;
                                return !a(n)
                            }
                            return !0
                        }));
                        if ("sum" === n) {
                            var s = 0;
                            e.map((function(t) {
                                var e = r.default.findSelector(t);
                                if (e) {
                                    var n = e.childElementCount;
                                    s += n
                                }
                                return a(s)
                            }))
                        }
                        return !0
                    }
                },
                "_kit_function54_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DOMElementExists = void 0;
                    e.DOMElementExists = function(t) {
                        return null !== document.querySelector(t.value)
                    }
                },
                "_kit_function55_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DOMElementHeightDifferenceLower = e.DOMElementHeightDifferenceGreater = void 0;
                    var r = i(n("_kit_function208_"));
                    e.DOMElementHeightDifferenceGreater = function(t) {
                        var e = r.default.findSelector(t.targetSubtrahend),
                            n = r.default.findSelector(t.targetMinuend);
                        return !(!e || !n) && n.getBoundingClientRect().height - e.getBoundingClientRect().height >= t.minHeight
                    };
                    e.DOMElementHeightDifferenceLower = function(t) {
                        var e = r.default.findSelector(t.targetSubtrahend),
                            n = r.default.findSelector(t.targetMinuend);
                        return !(!e || !n) && n.getBoundingClientRect().height - e.getBoundingClientRect().height <= t.minHeight
                    }
                },
                "_kit_function56_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DOMElementHeightGreater = void 0;
                    var r = i(n("_kit_function208_"));
                    e.DOMElementHeightGreater = function(t) {
                        var e = r.default.findSelector(t.target);
                        return !(!e || !e.getBoundingClientRect) && e.getBoundingClientRect().height >= t.minHeight
                    }
                },
                "_kit_function57_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DOMElementHeightLower = void 0;
                    var r = i(n("_kit_function208_"));
                    e.DOMElementHeightLower = function(t) {
                        var e = r.default.findSelector(t.target);
                        return !(!e || !e.getBoundingClientRect) && e.getBoundingClientRect().height <= t.minHeight
                    }
                },
                "_kit_function58_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DOMElementNotExists = void 0;
                    e.DOMElementNotExists = function(t) {
                        return null === document.querySelector(t.value)
                    }
                },
                "_kit_function59_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.globalVariable = void 0;
                    e.globalVariable = function(t) {
                        var e = function(t) {
                            return t ? function(t) {
                                return "string" == typeof t || t instanceof String
                            }(t) ? t : JSON.stringify(t) : null
                        }(window[t.varName]);
                        return !!e && t.key2Find.some((function(t) {
                            return e.includes(t)
                        }))
                    }
                },
                "_kit_function60_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.hostContains = void 0;
                    e.hostContains = function(t) {
                        var e = window.location.hostname;
                                                /*return t.value.some((function(t) {
                            return e.includes(t)
                        }))*/
                        return e.includes(t.value)
                                            }
                },
                "_kit_function61_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.hostEquals = void 0;
                    e.hostEquals = function(t) {
                        var e = window.location.hostname;
                                                /*return t.value.some((function(t) {
                            return e === t
                        }))*/
                        return e === t.value
                                            }
                },
                "_kit_function62_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.hrefMatches = void 0;
                    e.hrefMatches = function(t) {
                        var e = window.location.href,
                            n = new RegExp(t.pattern, "g");
                        return !!e.match(n)
                    }
                },
                "_kit_function63_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__exportStar || function(t, e) {
                            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), r(n("_kit_function53_"), e), r(n("_kit_function54_"), e), r(n("_kit_function55_"), e), r(n("_kit_function56_"), e), r(n("_kit_function57_"), e), r(n("_kit_function58_"), e), r(n("_kit_function59_"), e), r(n("_kit_function60_"), e), r(n("_kit_function61_"), e), r(n("_kit_function62_"), e), r(n("_kit_function64_"), e), r(n("_kit_function65_"), e), r(n("_kit_function66_"), e), r(n("_kit_function67_"), e), r(n("_kit_function68_"), e), r(n("_kit_function69_"), e)
                },
                "_kit_function64_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.innerText = void 0;
                    var r = i(n("_kit_function208_"));
                    e.innerText = function(t) {
                        return t.selector.some((function(e) {
                            return function(e) {
                                var n = r.default.findSelector({
                                    selector: e
                                });
                                return null == n ? void 0 : n.textContent.includes(t.value)
                            }(e)
                        }))
                    }
                },
                "_kit_function65_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.urlContains = void 0;
                    e.urlContains = function(t) {
                        var e = window.location.pathname + window.location.search;
                                                /*return t.value.some((function(t) {
                            return e.includes(t)
                        }))*/
                        return e.includes(t.value)
                                            }
                },
                "_kit_function66_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.urlEndsWith = void 0;
                    e.urlEndsWith = function(t) {
                        var e = window.location.pathname + window.location.search;
                                                /*return t.value.some((function(t) {
                            return e.substr(e.length - t.length, e.length) === t
                        }))*/
                        return e.endsWith(t.value)
                                            }
                },
                "_kit_function67_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.urlEquals = void 0;
                    e.urlEquals = function(t) {
                        var e = window.location.pathname + window.location.search;
                                                /*return t.value.some((function(t) {
                            return e === t || window.location.host + e === t
                        }))*/
                        return e === t.value || window.location.host + e === t.value
                                            }
                },
                "_kit_function68_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.urlHomepage = void 0;
                    e.urlHomepage = function() {
                        return window.location.pathname + window.location.search === "/"
                    }
                },
                "_kit_function69_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.urlStartsWith = void 0;
                    e.urlStartsWith = function(t) {
                        var e = window.location.pathname + window.location.search;
                                                /*return t.value.some((function(t) {
                            return 0 === e.indexOf(t)
                        }))*/
                        return e.startsWith(t.value)
                                            }
                },
                "_kit_function70_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function52_"));
                    e.default = r.default
                },
                "_kit_function71_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function7_"),
                        r = n("_kit_function72_"),
                        o = function() {
                            function t() {}
                            return t.isProperDevice = function(e) {
                                var n = this;
                                if (0 === e.length) return !0;
                                var r = t.getDeviceDefinitions(i.engineConfig.deviceDefinitions);
                                return e.some((function(t) {
                                    return n.isScreenWithinRanges(n.getAppropriateDeviceRange(t, r))
                                }))
                            }, t.isScreenWithinRanges = function(t) {
                                                                var e = t.width,
                                    n = void 0 === e ? {} : e,
                                    i = t.height,
                                    r = void 0 === i ? {} : i,
                                    o = window.innerWidth,
                                    a = window.innerHeight;
                                    //console.log("SCREEN BETWEEN RANGES?", this.isBetween(o, n) && this.isBetween(a, r));
                                return this.isBetween(o, n) && this.isBetween(a, r)
                            }, t.getAppropriateDeviceRange = function(t, e) {
                                switch (t) {
                                    case "desktop":
                                        return e.desktop;
                                    case "mobile":
                                        return e.mobile;
                                    case "desktopAndMobile":
                                        return r.DESKTOP_AND_MOBILE_RANGE;
                                    default:
                                        return t
                                }
                            }, t.getDeviceDefinitions = function(t) {
                                return null != t ? t : r.DEFAULT_DEVICE_DEFINITIONS
                            }, t.isBetween = function(t, e) {
                                var n = e.min,
                                    i = void 0 === n ? -1 / 0 : n,
                                    r = e.max;
                                return t >= i && t <= (void 0 === r ? 1 / 0 : r)
                            }, t
                        }();
                    e.default = o
                },
                "_kit_function72_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DEFAULT_DEVICE_DEFINITIONS = e.DESKTOP_AND_MOBILE_RANGE = e.MOBILE_RANGE = e.DESKTOP_RANGE = void 0, e.DESKTOP_RANGE = {
                        width: {
                            min: 971,
                            max: 1 / 0
                        },
                        height: {
                            min: 0,
                            max: 1 / 0
                        }
                    }, e.MOBILE_RANGE = {
                        width: {
                            min: 0,
                            max: 970
                        },
                        height: {
                            min: 0,
                            max: 1 / 0
                        }
                    }, e.DESKTOP_AND_MOBILE_RANGE = {
                        width: {
                            min: 0,
                            max: 1 / 0
                        },
                        height: {
                            min: 0,
                            max: 1 / 0
                        }
                    }, e.DEFAULT_DEVICE_DEFINITIONS = {
                        mobile: e.MOBILE_RANGE,
                        desktop: e.DESKTOP_RANGE
                    }
                },
                "_kit_function73_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function71_"));
                    e.default = r.default
                },
                "_kit_function74_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function t(t) {
                            this.script = t, this.setPathName = this.script, this.setInitialState()
                        }
                        return Object.defineProperty(t.prototype, "setPathName", {
                            set: function(t) {
                                try {
                                    this.pathName = new URL(t.src).pathname
                                } catch (t) {
                                    console.error("CATCH 32", t);                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.setInitialState = function() {
                            window.__oa360ScriptsState = window.__oa360ScriptsState || {}, Object.prototype.hasOwnProperty.call(window.__oa360ScriptsState, this.pathName) || (window.__oa360ScriptsState[this.pathName] = !1)
                        }, Object.defineProperty(t.prototype, "state", {
                            get: function() {
                                return !this.pathName && void 0 !== this.pathName || window.__oa360ScriptsState[this.pathName]
                            },
                            set: function(t) {
                                window.__oa360ScriptsState[this.pathName] = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "wasPreviouslyLoaded_ebece06f4a05c1b9cbec8cf755657506", {
                            get: function() {
                                return this.state
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t
                    }();
                    e.default = n
                },
                "_kit_function75_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function74_"));
                    e.default = r.default
                },
                "_kit_function76_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function7_"),
                        r = n("_kit_function77_"),
                        o = function() {
                            function t(t) {
                                var e = this;
                                void 0 === t && (t = i.engineConfig.observer || r.DEFAULT_OBSERVER), this.customConfig = t, this.rootMargin = "0px", this.callbacks = {}, this.previouslyVisibleTargets = null, this.visibleTargets = new Set, this.intersectionCallback = function(t) {
                                    t.forEach((function(t) {
                                        t.isIntersecting ? e.runOnVisible(t) : e.runOnInvisible(t)
                                    }))
                                }, this.eventOnVisibilityChange = function() {
                                    document.hidden && !e.previouslyVisibleTargets ? e.onDocumentHidden() : e.previouslyVisibleTargets && e.onPreviouslyVisibleTargets()
                                }, Object.assign(this, this.customConfig), this.margin && (this.rootMargin = this.margin.top + "px 0px " + this.margin.bottom + "px 0px"), this.observerOptions = {
                                    root: null,
                                    rootMargin: this.rootMargin,
                                    threshold: this.threshold
                                }, document.addEventListener("visibilitychange", this.eventOnVisibilityChange), this.createIntersectionObserver()
                            }
                            return t.prototype.observe = function(t, e, n) {
                                this.callbacks[t.id] = {
                                    onVisible: e,
                                    onInvisible: n
                                }, this.intersectionObserver.observe(t)
                            }, t.prototype.unobserve = function(t) {
                                this.intersectionObserver.unobserve(t), delete this.callbacks[t.id], this.deleteVisibleTargets(t), this.previouslyVisibleTargets && this.deletePreviouslyVisibleTargets(t)
                            }, t.prototype.createIntersectionObserver = function() {
                                this.intersectionObserver = new IntersectionObserver(this.intersectionCallback, this.observerOptions)
                            }, t.prototype.runOnVisible = function(t) {
                                this.callbacks[t.target.id].onVisible(), this.visibleTargets.add({
                                    id: t.target.id
                                })
                            }, t.prototype.runOnInvisible = function(t) {
                                this.callbacks[t.target.id].onInvisible(), this.visibleTargets.delete(t.target)
                            }, t.prototype.deleteVisibleTargets = function(t) {
                                var e = this;
                                this.visibleTargets.forEach((function(n) {
                                    n.id === t.id && e.visibleTargets.delete(n)
                                }))
                            }, t.prototype.deletePreviouslyVisibleTargets = function(t) {
                                var e = this;
                                this.previouslyVisibleTargets.forEach((function(n) {
                                    n.id === t.id && e.visibleTargets.delete(n)
                                }))
                            }, t.prototype.onDocumentHidden = function() {
                                var t = this;
                                this.previouslyVisibleTargets = this.visibleTargets, this.visibleTargets = new Set, this.previouslyVisibleTargets.forEach((function(e) {
                                    var n;
                                    null === (n = t.callbacks[e.id]) || void 0 === n || n.onInvisible()
                                }))
                            }, t.prototype.onPreviouslyVisibleTargets = function() {
                                var t = this;
                                this.previouslyVisibleTargets.forEach((function(e) {
                                    var n;
                                    null === (n = t.callbacks[e.id]) || void 0 === n || n.onVisible()
                                })), this.visibleTargets = this.previouslyVisibleTargets, this.previouslyVisibleTargets = null
                            }, t
                        }();
                    e.default = o
                },
                "_kit_function77_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DEFAULT_OBSERVER = void 0, e.DEFAULT_OBSERVER = {
                        margin: {
                            top: 0,
                            bottom: 400
                        },
                        threshold: 0
                    }
                },
                "_kit_function78_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function76_"));
                    e.default = r.default
                },
                "_kit_function79_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 33", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        o = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = n("_kit_function188_"),
                        s = o(n("_kit_function198_")),
                        l = o(n("_kit_function208_")),
                        u = n("_kit_function81_"),
                        c = o(n("_kit_function80_")),
                        d = function() {
                            function t(t, e) {
                                var n;
                                void 0 === e && (e = document), this.targetDocument = e, this.floatingUnit = !0, this.plugColor = "#aaaaaa80", this.plug = a.createElement({
                                    name: "div",
                                    classes: ["placeholderPlug"],
                                    innerHTML: "ad"
                                }), this.plugStyle = a.createElement({
                                    name: "style",
                                    classes: [u.PLUG_STYLE_NAME],
                                    innerHTML: u.PLUG_INTERIOR
                                }), Object.assign(this, t);
                                var i = r(null !== (n = t.containerSizes) && void 0 !== n ? n : s.default({
                                    adSlots: this.adSlots,
                                    maxSize: this.maxSize
                                }), 1)[0];
                                t.tilt && (this.tilt = new c.default(t.tilt)), this.minHeight = i
                            }
                            return t.addFloatStyles = function(t, e) {
                                Object.assign(t.style, {
                                    top: ("number" == typeof e ? e : 0) + "px",
                                    position: "sticky",
                                    alignSelf: "flex-start"
                                })
                            }, t.appendPlaceholders = function(e) {
                                e.forEach((function(e) {
                                    var n = t.getPlaceholderParams(e.placeholder, {
                                        maxSize: !1,
                                        enable: !1
                                    });
                                    if (n.enable) {
                                        var r = e.params.target,
                                            o = r.insertMethod,
                                            a = i(i({}, n), {
                                                adSlots: e.adSlots,
                                                insertMethod: o
                                            });
                                        if (r.frameSelector) {
                                            var s = l.default.iframeContent(r.frameSelector);
                                            !s || s instanceof Document || (r.bindTo = s.iframeDocument)
                                        }
                                        var u = l.default.findSelector(r),
                                            c = new t(a);
                                        u && (c.append({
                                            node: u
                                        }), r.placeholderId = "" + c.placeholderElement.id)
                                    }
                                }))
                            }, t.changePlaceholderHeight = function(t) {
                                var e = t,
                                    n = !1;
                                new MutationObserver((function(e) {
                                    e.forEach((function(e) {
                                        n || "childList" === e.type && (n = !0, setTimeout((function() {
                                            n = !1;
                                            var e = Math.max(t.offsetHeight, t.clientHeight, t.scrollHeight);
                                            parseInt(t.style.minHeight || "0", 10) < t.offsetHeight && (t.style.minHeight = e + "px")
                                        }), 500))
                                    }))
                                })).observe(e, {
                                    childList: !0,
                                    subtree: !0
                                })
                            }, t.prototype.append = function(e) {
                                var n, i = e.node,
                                    r = e.adContainer;
                                this.create(), null == i || i.insertAdjacentElement(this.insertMethod, this.placeholderElement), r && this.configurePlaceholder(r), null === (n = this.tilt) || void 0 === n || n.manageTilt(this.placeholderElement), this.appendPlug(this.placeholderElement), this.maxSize || t.changePlaceholderHeight(this.placeholderElement)
                            }, t.prototype.configurePlaceholder = function(e) {
                                this.floatingUnit && t.addFloatStyles(e, this.floatingUnit), this.placeholderElement.insertAdjacentElement("afterbegin", e)
                            }, t.prototype.appendPlug = function(t) {
                                var e, n = null !== (e = this.placeholderElement.ownerDocument) && void 0 !== e ? e : this.targetDocument;
                                (null == n ? void 0 : n.head.querySelector("." + u.PLUG_STYLE_NAME)) || null == n || n.head.appendChild(this.plugStyle), this.plug.style.cssText = "color: " + this.plugColor + " !important;" + u.PLUG_STYLES, t.insertAdjacentElement("beforeend", this.plug)
                            }, t.prototype.create = function() {
                                return this.placeholderElement = a.createElement({
                                    name: "div",
                                    styles: i({
                                        "min-height": this.minHeight + "px"
                                    }, u.PLACEHOLDER_STYLES),
                                    attributes: {
                                        "data-dest": "placeholder"
                                    },
                                    classes: this.classes
                                }), this.placeholderElement
                            }, t.getPlaceholderParams = function(t, e) {
                                return void 0 === e && (e = {
                                    maxSize: !0
                                }), "boolean" == typeof t ? i(i({
                                    floatingUnit: !0
                                }, e), {
                                    enable: t
                                }) : i(i({
                                    enable: !1,
                                    floatingUnit: !0
                                }, e), t)
                            }, t
                        }();
                    e.default = d
                },
                "_kit_function80_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function81_"),
                        r = function() {
                            function t(t) {
                                this.limit = [], this.tiltBaseline = [], this.tiltSpeed = .9, this.rotationValues = [0, 0], this.rotationStyle = {
                                    x: "",
                                    y: ""
                                }, this.tilt = !0 === t ? i.DEFAULT_TILT : t
                            }
                            return t.prototype.manageTilt = function(t) {
                                var e, n, i = this;
                                this.placeholderElement = t, "function" != typeof(null === (e = window.DeviceMotionEvent) || void 0 === e ? void 0 : e.requestPermission) ? this.addTiltListener() : this.tilt.requestOniOS && "function" == typeof(null === (n = window.DeviceMotionEvent) || void 0 === n ? void 0 : n.requestPermission) && document.addEventListener("touchend", (function() {
                                    return i.getIOSResponse()
                                }))
                            }, t.prototype.addTiltListener = function() {
                                var t = this;
                                window.addEventListener("deviceorientation", (function(e) {
                                    var n, r, o;
                                    return t.tiltContainer([e.beta * (null !== (n = t.tilt.speed) && void 0 !== n ? n : i.DEFAULT_TILT.speed), e.gamma * (null !== (r = t.tilt.speed) && void 0 !== r ? r : i.DEFAULT_TILT.speed), e.alpha * (null !== (o = t.tilt.speed) && void 0 !== o ? o : i.DEFAULT_TILT.speed)])
                                }), !0)
                            }, t.prototype.getIOSResponse = function() {
                                var t, e = this;
                                null === (t = window.DeviceMotionEvent) || void 0 === t || t.requestPermission().then((function(t) {
                                    "granted" === t && e.addTiltListener()
                                })).catch((function(t) {
                                    console.error("CATCH 34", t);                                }))
                            }, t.prototype.tiltContainer = function(t) {
                                var e, n, i, r, o, a, s, l, u, c, d, h = this;
                                this.limit[0] = null !== (n = null === (e = this.tilt.limit) || void 0 === e ? void 0 : e[0]) && void 0 !== n ? n : 10, this.limit[1] = null !== (r = null === (i = this.tilt.limit) || void 0 === i ? void 0 : i[1]) && void 0 !== r ? r : 20, this.rotationValues = t.map((function(t) {
                                    return t * h.tiltSpeed
                                })), this.tiltingElement = null !== (s = null === (a = null === (o = this.placeholderElement) || void 0 === o ? void 0 : o.firstElementChild) || void 0 === a ? void 0 : a.firstElementChild) && void 0 !== s ? s : null === (l = this.placeholderElement) || void 0 === l ? void 0 : l.firstElementChild, this.tiltingElement && (this.tiltingElement.style.position = "relative", this.rotationStyle.x = (null === (u = this.tilt.axis) || void 0 === u ? void 0 : u.x) ? "rotateX( " + this.tiltAxis(0) + "deg )" : "", this.rotationStyle.y = (null === (c = this.tilt.axis) || void 0 === c ? void 0 : c.y) ? "rotateY( " + this.tiltAxis(1) + "deg )" : "", this.tiltingElement.style.transform = "perspective(" + (null !== (d = this.tilt.perspective) && void 0 !== d ? d : 600) + "px) " + this.rotationStyle.x + " " + this.rotationStyle.y)
                            }, t.prototype.tiltAxis = function(t) {
                                void 0 === this.tiltBaseline[t] && (this.tiltBaseline[t] = this.rotationValues[t]);
                                var e = this.rotationValues[t] - this.tiltBaseline[t];
                                return e > this.limit[t] ? (this.tiltBaseline[t] += e - this.limit[t], e = this.limit[t]) : e < -this.limit[t] && (this.tiltBaseline[t] += e + this.limit[t], e = -this.limit[t]), e
                            }, t
                        }();
                    e.default = r
                },
                "_kit_function81_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DEFAULT_TILT = e.PLUG_STYLES = e.PLUG_STYLE_NAME = e.PLUG_INTERIOR = e.PLACEHOLDER_STYLES = void 0, e.PLACEHOLDER_STYLES = {
                        "background-image": "linear-gradient(transparent, transparent)",
                        "display": "flex",
                        "justify-content": "center",
                        "margin": "0 auto",
                        "width": "100%"
                    }, e.PLUG_INTERIOR = "[data-dest='placeholder'] > [style*='visibility: visible'] + div.placeholderPlug {display: none!important;}", e.PLUG_STYLE_NAME = "plugStyleName", e.PLUG_STYLES = "\n  padding: 0 10px !important;\n  border-radius: 10px !important;\n  border: 2px solid !important;\n  font-family: sans-serif !important;\n  font-weight: 400 !important;\n  letter-spacing: 3px !important;\n  font-size: 40px !important;\n  line-height: 60px !important;\n  position: absolute !important;", e.DEFAULT_TILT = {
                        enable: !0,
                        axis: {
                            x: !0,
                            y: !0
                        },
                        perspective: 800,
                        speed: .6,
                        limit: [6, 12],
                        requestOniOS: !1
                    }
                },
                "_kit_function82_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function79_"));
                    e.default = r.default
                },
                "_kit_function83_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function8_"),
                        r = function() {
                            function t() {}
                            return t.defineType = function(t, e) {
                                var n = this.getSensitivityType(t.conditions),
                                    i = this.getSensitivityType(e.conditions);
                                return n ? "high" : i ? "low" : null
                            }, t.getSensitivityType = function(t) {
                                var e = this;
                                return t.some((function(t) {
                                    return e.useConditionCallback(t.name, t.params)
                                }))
                            }, t.useConditionCallback = function(t, e) {
                                if (!t) throw new Error("Unknown condition");
                                var n = i.CONDITION_TYPES.find((function(e) {
                                    return e.name === t
                                })).callback;
                                if (!n) throw new Error("Unknown condition");
                                return n(e)
                            }, t
                        }();
                    e.default = r
                },
                "_kit_function84_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function83_"));
                    e.default = r.default
                },
                "_kit_function85_": function(t, e) {
                    "use strict";
                    var n = this && this.__read || function(t, e) {
                        var n = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var i, r, o = n.call(t),
                            a = [];
                        try {
                            for (;
                                (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                        } catch (t) {
                            console.error("CATCH 35", t);                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (n = o.return) && n.call(o)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return a
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = function() {
                        function t(t) {
                            var e = this;
                            this.config = t, this.oddsMapped = {}, this.randomNumber = Math.floor(100 * Math.random()), this.getOddsSum = function() {
                                return Object.values(e.odds).reduce((function(t, e) {
                                    var i = n(t, 2),
                                        r = i[0],
                                        o = i[1];
                                    return "auto" === e ? [r, o + 1] : [r + e, o]
                                }), [0, 0])
                            }, Object.assign(this, this.config), this.countOdds(), this.mapAutoOdds(), this.cumulativelyDistributeOdds()
                        }
                        return t.prototype.countOdds = function() {
                            var t = n(this.getOddsSum(), 2),
                                e = t[0],
                                i = t[1],
                                r = 0 === i || e >= 100;
                            this.autoOdd = r ? 0 : (100 - e) / i
                                                        
                        }, t.prototype.mapAutoOdds = function() {
                            var t = this;
                            Object.entries(this.odds).filter((function(e) {
                                return "auto" !== n(e, 2)[1] || 0 !== t.autoOdd
                            })).forEach((function(e) {
                                var i = n(e, 2),
                                    r = i[0],
                                    o = i[1];
                                t.oddsMapped[r] = "auto" === o ? t.autoOdd : o
                            }))
                        }, t.prototype.cumulativelyDistributeOdds = function() {
                            var t = this;
                            Object.entries(this.oddsMapped).reduce((function(e, i) {
                                var r = n(i, 2),
                                    o = r[0],
                                    a = r[1];
                                return t.oddsMapped[o] = a + e, t.oddsMapped[o]
                            }), 0)
                        }, t.prototype.draw = function() {
                            var t, e = this,
                                i = n(Object.entries(this.oddsMapped).filter((function(t) {
                                    return n(t, 2)[1] > e.randomNumber
                                })).sort((function(t, e) {
                                    return t[1] - e[1]
                                })), 1)[0];
                            return null !== (t = null == i ? void 0 : i[0]) && void 0 !== t ? t : ""
                        }, t
                    }();
                    e.default = i
                },
                "_kit_function86_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function85_"));
                    e.default = r.default
                },
                "_kit_function87_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function88_"),
                        o = n("_kit_function90_"),
                        a = i(n("_kit_function89_")),
                        s = n("_kit_function91_");
                                    
                    e.default = {
                        getInstance: function(t) {
                            switch (t.name) {
                                case "timeout":
                                    return s.timeout(t.params);
                                case "DOMElementAdded":
                                    return r.DOMElementAdded(t.params);
                                case "inAV":
                                    return o.isInViewport(t.params);
                                case "event":
                                case "scrolledLength":
                                case "click":
                                case "delay":
                                case "message":
                                    return new a.default(t.name, t.params).initTrigger();
                                default:
                                    return function() {
                                        return function(t) {
                                            return t()
                                        }
                                    }
                            }
                        }
                    }
                },
                "_kit_function88_": function(t, e) {
                    "use strict";
                    var n = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 36", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        i = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.DOMElementAdded = void 0;
                    var r = function(t, e, r) {
                        var o, a = e && document.querySelector(e),
                            s = e && null !== (o = null == a ? void 0 : a.contentWindow.document) && void 0 !== o ? o : document;
                        new MutationObserver((function(e, o) {
                            ! function(t, e, r, o) {
                                t.some((function(t) {
                                    if ("childList" === t.type) {
                                        var a = t.addedNodes;
                                        return function(t, e, n, i) {
                                            t.some((function(t) {
                                                return !(!t.matches(e) && !t.querySelector(e) || (n.disconnect(), i(), 0))
                                            }))
                                        }(i([], n(a)).filter((function(t) {
                                            return 1 === t.nodeType
                                        })), e, r, o), !0
                                    }
                                    return !1
                                }))
                            }(e, t, o, r)
                        })).observe(s, {
                            attributes: !1,
                            childList: !0,
                            subtree: !0
                        })
                    };
                    e.DOMElementAdded = function(t) {
                        return function(e) {
                            var n = t.selector,
                                i = t.timeout,
                                o = t.frameSelector;
                            r(n, o, i ? function() {
                                return setTimeout(e, i)
                            } : e)
                        }
                    }
                },
                "_kit_function89_": function(t, e) {
                    "use strict";
                    var n = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 37", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        i = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = function() {
                        function t(t, e) {
                            var r = this;
                            this.nameTrigger = t, this.params = e, this.initTrigger = function() {
                                return function(t) {
                                    r.params.selector && (r.elements = i([], n(document.querySelectorAll(r.params.selector)))), r.triggerCallback = r.params.timeout ? function() {
                                        return setTimeout(t, r.params.timeout)
                                    } : t, r.setNameEvent(), r.eventListenerHandler()
                                }
                            }, this.addListenerCallback = function(t) {
                                t.addEventListener(r.nameEvent, r.onEventCallback)
                            }, this.removeListenerCallback = function(t) {
                                t.removeEventListener(r.nameEvent, r.onEventCallback)
                            }, this.onEventCallback = function(t) {
                                (r.checkNameEvent() || r.checkScrollParameters() || r.checkMessageParameters(t) || r.checkReadyStateChangeParameters()) && (r.triggerCallback(), r.params.maxLoadTime && clearTimeout(r.maxTimeout), r.listenerAction(r.removeListenerCallback))
                            }, this.checkNameEvent = function() {
                                return "scroll" !== r.nameEvent && "message" !== r.nameEvent && "readystatechange" !== r.nameEvent
                            }, this.checkScrollParameters = function() {
                                return "scroll" === r.nameEvent && window.pageYOffset >= r.params.distance
                            }, this.checkMessageParameters = function(t) {
                                return "message" === r.nameEvent && t.data === r.params.textMessage && t.origin === r.params.domain
                            }, this.checkReadyStateChangeParameters = function() {
                                return "readystatechange" === r.nameEvent && document.readyState === r.params.readyState
                            }, Object.assign(this, this.params)
                        }
                        return t.prototype.setNameEvent = function() {
                            "scrolledLength" === this.nameTrigger ? this.nameEvent = "scroll" : "delay" === this.nameTrigger ? this.nameEvent = "readystatechange" : "event" === this.nameTrigger ? this.nameEvent = this.params.name : this.nameEvent = this.nameTrigger
                        }, t.prototype.eventListenerHandler = function() {
                            var t = this;
                            "readystatechange" === this.nameEvent && (document.readyState === this.params.readyState ? this.triggerCallback() : this.maxTimeout = setTimeout((function() {
                                t.triggerCallback(), t.listenerAction(t.removeListenerCallback)
                            }), this.params.maxLoadTime)), this.listenerAction(this.addListenerCallback)
                        }, t.prototype.listenerAction = function(t) {
                            this.params.selector ? this.elements.forEach((function(e) {
                                return t(e)
                            })) : this.params.textMessage ? t(window) : t(document)
                        }, t
                    }();
                    e.default = r
                },
                "_kit_function90_": function(t, e, n) {
                                    
                    "use strict";
                    var i = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 38", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        r = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        o = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.isInViewport = void 0;
                    var a = o(n("_kit_function208_")),
                        s = function(t, e) {
                            new MutationObserver((function(n, o) {
                                ! function(t, e, n, o) {
                                    t.some((function(t) {
                                        if ("childList" === t.type) {
                                            var a = t.addedNodes;
                                            return function(t, e, n, i) {
                                                t.some((function(t) {
                                                    return !(!t.matches(e) && !t.querySelector(e) || (n.disconnect(), i(), 0))
                                                }))
                                            }(r([], i(a)).filter((function(t) {
                                                return 1 === t.nodeType
                                            })), e, n, o), !0
                                        }
                                        return !1
                                    }))
                                }(n, t, o, e)
                            })).observe(document, {
                                attributes: !1,
                                childList: !0,
                                subtree: !0
                            })
                        };
                    e.isInViewport = function(t) {
                        return function(e) {
                            var n = t.selector,
                                i = t.timeout,
                                r = void 0 === i ? 100 : i,
                                o = a.default.findSelector(t),
                                l = {
                                    rootMargin: "0px"
                                },
                                u = function() {
                                    o || (o = a.default.findSelector(t)), new IntersectionObserver(function(t, e) {
                                        return function(n, i) {
                                            n[0].isIntersecting && (setTimeout((function() {
                                                e()
                                            }), t), i.disconnect())
                                        }
                                    }(r, e), l).observe(o)
                                };
                            if (o) return u();
                            s(n, u)
                        }
                    }
                },
                "_kit_function91_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.timeout = void 0;
                    e.timeout = function(t) {
                        return function(e) {
                            return setTimeout(e, t.value)
                        }
                    }
                },
                "_kit_function92_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function87_"));
                    e.default = r.default
                },
                "_kit_function93_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function8_"),
                        r = function() {
                            function t() {}
                            return t.defineType = function(t, e, n) {
                                var i = this.getViolationType(n.conditions),
                                    r = this.getViolationType(e.conditions),
                                    o = this.getViolationType(t.conditions),
                                    a = [];
                                return i && a.push("video"), r && a.push("display"), o && a.push("all"), a
                            }, t.getViolationType = function(t) {
                                var e = this;
                                return t.some((function(t) {
                                    return e.useConditionCallback(t.name, t.params)
                                }))
                            }, t.useConditionCallback = function(t, e) {
                                if (!t) throw new Error("Unknown condition");
                                var n = i.CONDITION_TYPES.find((function(e) {
                                    return e.name === t
                                })).callback;
                                if (!n) throw new Error("Unknown condition");
                                return n(e)
                            }, t
                        }();
                    e.default = r
                },
                "_kit_function94_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function93_"));
                    e.default = r.default
                },
                "_kit_function95_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = new(i(n("_kit_function180_")).default),
                        o = setInterval((function() {
                            document.body && (clearInterval(o), r.setup())
                        }), 100);
                    r.initializePlaceholders()
                },
                "_kit_function96_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        o = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
                            return r(e, t), e
                        },
                        a = this && this.__awaiter || function(t, e, n, i) {
                            return new(n || (n = Promise))((function(r, o) {
                                function a(t) {
                                    try {
                                        l(i.next(t))
                                    } catch (t) {
                                        console.error("CATCH 39", t);                                        o(t)
                                    }
                                }

                                function s(t) {
                                    try {
                                        l(i.throw(t))
                                    } catch (t) {
                                        console.error("CATCH 40", t);                                        o(t)
                                    }
                                }

                                function l(t) {
                                    var e;
                                    t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                        t(e)
                                    }))).then(a, s)
                                }
                                l((i = i.apply(t, e || [])).next())
                            }))
                        },
                        s = this && this.__generator || function(t, e) {
                            var n, i, r, o, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & r[0]) throw r[1];
                                    return r[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return o = {
                                next: s(0),
                                throw: s(1),
                                return: s(2)
                            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                return this
                            }), o;

                            function s(o) {
                                return function(s) {
                                    return function(o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                            switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    r = o;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: o[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, i = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                        a.label = o[1];
                                                        break
                                                    }
                                                    if (6 === o[0] && a.label < r[1]) {
                                                        a.label = r[1], r = o;
                                                        break
                                                    }
                                                    if (r && a.label < r[2]) {
                                                        a.label = r[2], a.ops.push(o);
                                                        break
                                                    }
                                                    r[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            o = e.call(t, a)
                                        } catch (t) {
                                            console.error("CATCH 41", t);                                            o = [6, t], i = 0
                                        } finally {
                                            n = r = 0
                                        }
                                        if (5 & o[0]) throw o[1];
                                        return {
                                            value: o[0] ? o[1] : void 0,
                                            done: !0
                                        }
                                    }([o, s])
                                }
                            }
                        },
                        l = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 42", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        u = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var c = n("_kit_function11_"),
                        d = u(n("_kit_function28_")),
                        h = u(n("_kit_function73_")),
                        f = n("_kit_function188_"),
                        p = n("_kit_function196_"),
                        m = u(n("_kit_function200_")),
                        v = o(n("_kit_function97_")),
                        y = function() {
                            function t(t) {
                                var e, n = this;
                                this.params = t, this.id = v.AD_PLAYER_ID, this.classes = v.AD_PLAYER_CLASSES, this.closeButtonBackgroundElement = f.createElement(v.CLOSE_BUTTON_BACKGROUND), this.closeButtonElement = f.createElement(v.CLOSE_BUTTON), this.closeButtonShieldElement = f.createElement(v.CLOSE_BUTTON_SHIELD), this.isSensitive = function() {
                                    return n.tag.some((function(t) {
                                        return "googima" === t.client
                                    }))
                                }, this.getPrebidBids = function(t) {
                                    return new Promise((function(e) {
                                        var n, i, r = m.default.generate(),
                                            o = t.bids,
                                            a = t.mediaTypes,
                                            s = t.minCpm,
                                            u = l(null !== (i = null === (n = null == a ? void 0 : a.video) || void 0 === n ? void 0 : n.playerSize) && void 0 !== i ? i : [], 1)[0];
                                        Array.isArray(u) && (a.video.playerSize = u);
                                        var c = s >= 0 ? s : 0;
                                        d.default.sendRequest({
                                            cb: function(t) {
                                                return e(t)
                                            },
                                            timeout: 1e3,
                                            floor: c,
                                            id: r,
                                            params: {
                                                mediaTypes: a,
                                                bids: o,
                                                code: r
                                            }
                                        })
                                    }))
                                }, this.areTagsMapped = function() {
                                    return n.tag.every((function(t) {
                                        return "object" != typeof(null == t ? void 0 : t.url)
                                    }))
                                }, this.onAdStartedCallback = function() {
                                    n.google && n.adjustToGoogle();
                                    var t = document.querySelector("#" + n.id + " > div");
                                    null == t || t.classList.add("pro-player-wrapper")
                                }, this.onCloseButtonCloseCallback = function() {
                                    var t = n.wrapper.querySelector(n.classes.playerFrame);
                                    if (window.AdPlayerPro(n.id).getAdRemainingTime() > 0) window.AdPlayerPro(n.id).stopAd();
                                    else {
                                        var e = t.querySelector("video[src^='" + n.file + "'");
                                        e.currentTime = e.duration
                                    }
                                }, this.getOnCloseButtonKeyDownCallback = function(t) {
                                    return function(e) {
                                        "Enter" === e.code && t.click()
                                    }
                                }, this.onAdLoadedCallback = function() {
                                    n.stretch && !h.default.isScreenWithinRanges(c.DESKTOP) && n.stretchVideo()
                                }, this.onAdErrorCallback = function() {
                                    var t = n.wrapper.querySelector(n.classes.playerFrame),
                                        e = null == t ? void 0 : t.querySelector("video[src^='" + n.file + "'");
                                    n.google && n.forceFile && e && n.adjustToGoogle()
                                }, this.onAdStoppedCallback = function() {
                                    var t = document.querySelector("#" + n.id);
                                    null == t || t.remove()
                                }, Object.assign(this, this.params, this.params.adSettings, this.params.adSettings.advertising), this.autoStart = null !== (e = this.autostart) && void 0 !== e ? e : this.autoStart, this.bidderSettings = {
                                    name: "adplayer",
                                    isSensitive: this.isSensitive()
                                }, window.AdPlayerPro = window.AdPlayerPro || null
                            }
                            return t.prototype.setup = function() {
                                this.appendContainer(), this.wrapper && (t.appendScript(), this.mapTags(), this.initAdPlayer())
                            }, t.prototype.kill = function() {
                                var t;
                                null === (t = this.wrapper) || void 0 === t || t.remove()
                            }, t.appendScript = function() {
                                var t = v.AD_PLAYER_SRC;
                                if (!document.querySelector('script[src*="' + t + '"]')) {
                                    var e = f.createElement({
                                        name: "script",
                                        attributes: {
                                            src: t,
                                            async: "true"
                                        }
                                    });
                                    document.body.appendChild(e)
                                }
                            }, t.formatTagUrlString = function(t) {
                                var e, n, i, r, o, a, s, l, u;
                                if ("string" == typeof t.url) {
                                    t.url = t.url.replace("{{WIDTH}}", null !== (n = null === (e = t.width) || void 0 === e ? void 0 : e.toString()) && void 0 !== n ? n : ""), t.url = t.url.replace("{{HEIGHT}}", null !== (r = null === (i = t.height) || void 0 === i ? void 0 : i.toString()) && void 0 !== r ? r : ""), t.url = t.url.replace("__player-width__", null !== (a = null === (o = t.width) || void 0 === o ? void 0 : o.toString()) && void 0 !== a ? a : ""), t.url = t.url.replace("__player-height__", null !== (l = null === (s = t.height) || void 0 === s ? void 0 : s.toString()) && void 0 !== l ? l : ""), t.url = t.url.replace("__page-url__", null !== (u = t.web_url) && void 0 !== u ? u : "");
                                    var c = encodeURIComponent(t.web_url);
                                    t.url = t.url.replace("ENCODED_URL", c);
                                    var d = m.default.generate();
                                    t.url = t.url.replace("CACHEBUSTER", d)
                                }
                            }, t.prototype.appendContainer = function() {
                                var t, e, n, i, r = this.target && p.getEligibleSelector(this.target);
                                if (r) {
                                    var o = null !== (n = null === (e = null === (t = this.target.mapper) || void 0 === t ? void 0 : t.enabledElements) || void 0 === e ? void 0 : e.insertMethod) && void 0 !== n ? n : null === (i = this.target) || void 0 === i ? void 0 : i.insertMethod,
                                        a = f.createElement(this.container.element);
                                    a.dataset.oawidthset = "true", a.id = this.id, r.insertAdjacentElement(o, a), this.wrapper = a
                                }
                            }, t.prototype.mapTags = function() {
                                var e = this;
                                this.tag.forEach((function(n, i) {
                                    "string" != typeof n.url ? e.bidForTag(n, i) : t.formatTagUrlString(n)
                                }))
                            }, t.prototype.bidForTag = function(t, e) {
                                var n, i;
                                return a(this, void 0, void 0, (function() {
                                    var r, o, a;
                                    return s(this, (function(s) {
                                        switch (s.label) {
                                            case 0:
                                                return "string" == typeof t.url ? [2] : [4, this.getPrebidBids(t.url)];
                                            case 1:
                                                return r = null !== (n = s.sent()) && void 0 !== n ? n : {}, o = r.vastXml, a = r.vastUrl, this.tag[e] = {
                                                    url: null !== (i = null != o ? o : a) && void 0 !== i ? i : "",
                                                    client: "vast",
                                                    type: "url",
                                                    rotation: !1,
                                                    height: 800,
                                                    width: 600,
                                                    web_url: ""
                                                }, [2]
                                        }
                                    }))
                                }))
                            }, t.prototype.initAdPlayer = function() {
                                var t = this;
                                this.adPlayerLoaded = setInterval((function() {
                                    "function" == typeof window.AdPlayerPro && t.areTagsMapped() && (t.createAdPlayer(), clearInterval(t.adPlayerLoaded))
                                }), 300)
                            }, t.prototype.createAdPlayer = function() {
                                var t, e = this;
                                null === (t = window.AdPlayerPro(this.id)) || void 0 === t || t.setup(this.adSettings).on("AdStarted", this.onAdStartedCallback).on("AdLoaded", this.onAdLoadedCallback).on("AdSkipped", (function() {
                                    return e.playerEvents("onSkip")
                                })).on("AdVideoComplete", (function() {
                                    return e.playerEvents("onComplete")
                                })).on("AdError", this.onAdErrorCallback).on("AdStopped", this.onAdStoppedCallback)
                            }, t.prototype.adjustToGoogle = function() {
                                this.closeButton && this.moveCloseButton(), "TC" === this.position && !h.default.isScreenWithinRanges(c.DESKTOP) && this.adjustPlayerPositionOnMobileTC()
                            }, t.prototype.moveCloseButton = function() {
                                this.removeOldButton(), this.configureCloseButton(), "TC" !== this.position || h.default.isScreenWithinRanges(c.DESKTOP) || (Object.assign(this.closeButtonElement.style, {
                                    top: "5px",
                                    right: "-22px"
                                }), Object.assign(this.closeButtonShieldElement.style, {
                                    top: "-25px",
                                    right: "-52px"
                                }), Object.assign(this.closeButtonBackgroundElement.style, {
                                    display: "none"
                                })), this.appendCloseButton()
                            }, t.prototype.removeOldButton = function() {
                                var t = this.wrapper.querySelector(this.classes.adPlayerCloseButton);
                                null == t || t.remove()
                            }, t.prototype.configureCloseButton = function() {
                                var t = this;
                                this.closeButtonElement.onmouseover = function() {
                                    t.closeButtonElement.style.opacity = "1"
                                }, this.closeButtonElement.onmouseout = function() {
                                    t.closeButtonElement.style.opacity = "0.5"
                                }, this.closeButtonElement.onclick = this.onCloseButtonCloseCallback, this.closeButtonElement.onkeydown = this.getOnCloseButtonKeyDownCallback(this.closeButtonElement), this.closeButtonElement.setAttribute("role", "button"), this.closeButtonElement.setAttribute("aria-label", "Close"), this.closeButtonElement.tabIndex = 0
                            }, t.prototype.appendCloseButton = function() {
                                var t = this,
                                    e = this.wrapper.querySelector(this.classes.lightPlayer);
                                setTimeout((function() {
                                    e.appendChild(t.closeButtonElement), e.appendChild(t.closeButtonShieldElement), e.appendChild(t.closeButtonBackgroundElement)
                                }), 1e3 * this.closeDelay)
                            }, t.prototype.adjustPlayerPositionOnMobileTC = function() {
                                document.querySelector("[data-player-orp-e]").innerHTML += "\n      .orp-player-ivm-TC {\n        transform: scale(0.85);\n        transform-origin: top;\n        z-index: 2147483647;\n        top: " + this.marginTop + 'px;\n        box-sizing: content-box;\n      }\n      .orp-player-ivm-TC:before {\n        content: "";\n        display: block;\n        width: 300vw;\n        height: inherit;\n        position: inherit;\n        left: -100vw;\n        background-color: ' + v.BACKGROUND_COLOR + ";\n        border-bottom: 1px solid " + v.BACKGROUND_COLOR + ";\n      }\n        "
                            }, t.prototype.stretchVideo = function() {
                                var t = this.wrapper.querySelector(this.classes.playerWrapper),
                                    e = -t.getBoundingClientRect().x;
                                Object.assign(t.style, {
                                    "width": "100vw",
                                    "margin-left": e + "px"
                                }), this.adjustStickyMargin()
                            }, t.prototype.adjustStickyMargin = function() {
                                ["BL", "BC", "BR"].includes(this.position) ? this.updateStickyMarginStyle("bottom") : ["TL", "TC", "TR"].includes(this.position) && this.updateStickyMarginStyle("top")
                            }, t.prototype.updateStickyMarginStyle = function(t) {
                                var e = document.querySelector("[data-player-orp-e]"),
                                    n = this.wrapper.querySelector(this.classes.lightPlayer);
                                this.stickyMargin && (e.innerHTML += "\n        .orp-player-ivm-" + this.position + " {\n          bottom: " + this.stickyMargin + "px;\n        }"), n.style[t] = this.stickyMargin ? e.innerHTML : "0"
                            }, t.prototype.playerEvents = function(t) {
                                document.dispatchEvent(new CustomEvent(this.eventName[t]))
                            }, t
                        }();
                    e.default = y
                },
                "_kit_function97_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.BACKGROUND_COLOR = e.AD_PLAYER_CLASSES = e.AD_PLAYER_SRC = e.AD_PLAYER_ID = e.CLOSE_BUTTON = e.CLOSE_BUTTON_SHIELD = e.CLOSE_BUTTON_BACKGROUND = void 0, e.CLOSE_BUTTON_BACKGROUND = {
                        name: "div",
                        classes: ["oa-360-closeButtonBackground"],
                        styles: {
                            "width": "30px",
                            "height": "25px",
                            "top": "-25px",
                            "right": "0px",
                            "border-radius": "20% 20% 0 0",
                            "position": "absolute",
                            "background": "black"
                        }
                    }, e.CLOSE_BUTTON_SHIELD = {
                        name: "div",
                        classes: ["oa-360-closeButtonShield"],
                        styles: {
                            "width": "80px",
                            "height": "80px",
                            "top": "-50px",
                            "right": "-25px",
                            "position": "absolute"
                        }
                    }, e.CLOSE_BUTTON = {
                        name: "div",
                        classes: ["orp-close", "oa-360-closeButton"],
                        styles: {
                            "width": "20px",
                            "height": "20px",
                            "top": "-20px",
                            "right": "5px",
                            "transition": "opacity 0.2s"
                        }
                    }, e.AD_PLAYER_ID = "", e.AD_PLAYER_SRC = "", e.AD_PLAYER_CLASSES = {
                        playerWrapper: ".orp-player-wrapper",
                        lightPlayer: ".orp-light-player-wrapper",
                        playerFrame: ".orp-player-iframe",
                        adPlayerCloseButton: ".orp-control.orp-close"
                    }, e.BACKGROUND_COLOR = "black"
                },
                "_kit_function98_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 43", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        o = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        a = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = n("_kit_function188_"),
                        l = a(n("_kit_function208_")),
                        u = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "adTrue",
                                    isSensitive: !0
                                }, this.script = s.createElement({
                                    name: "script",
                                    attributes: {
                                        src: "https://cdn.adtrue.com/rtb/async.js"
                                    }
                                }), Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                var t;
                                if (this.targetElement = l.default.findSelector({
                                        selector: this.target.selector
                                    }), this.targetElement) {
                                    document.body.appendChild(this.script), this.appendAdsContainer();
                                    var e = this.getTagsParams();
                                    window.adtrue_tags = window.adtrue_tags || [], (t = window.adtrue_tags).push.apply(t, o([], r(e)))
                                }
                            }, t.prototype.appendAdsContainer = function() {
                                var t = this.container.element,
                                    e = t.name,
                                    n = t.attributes,
                                    r = t.classes,
                                    o = t.innerHTML,
                                    a = t.styles,
                                    l = s.createElement({
                                        name: e,
                                        styles: i({
                                            "text-align": "center"
                                        }, a),
                                        attributes: i({
                                            id: "adtrue_tag_" + this.tagId
                                        }, n),
                                        classes: r,
                                        innerHTML: o
                                    });
                                this.targetElement.insertAdjacentElement(this.target.insertMethod, l)
                            }, t.prototype.getTagsParams = function() {
                                var t = this;
                                return this.sizes.map((function(e) {
                                    return {
                                        tag_id: t.tagId,
                                        width: e[0],
                                        height: e[1]
                                    }
                                }))
                            }, t
                        }();
                    e.default = u
                },
                "_kit_function99_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function98_"));
                    e.default = r.default
                },
                "_kit_function100_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), n("_kit_function6_");
                    var r = n("_kit_function101_"),
                        o = n("_kit_function188_"),
                        a = i(n("_kit_function208_")),
                        s = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "CarodaPlayer",
                                    isSensitive: !1
                                }, this.path = r.PATH, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                this.targetElement = a.default.findSelector(this.target), this.targetElement && this.appendScript()
                            }, t.prototype.kill = function() {
                                var t, e;
                                null === (e = null === (t = this.carodaVideoScript) || void 0 === t ? void 0 : t.parentElement) || void 0 === e || e.removeChild(this.carodaVideoScript)
                            }, t.prototype.appendScript = function() {
                                var t = this;
                                document.querySelector('script[src*="' + this.path + '"]') || (this.carodaVideoScript = o.createElement({
                                    name: "script",
                                    attributes: {
                                        src: this.path,
                                        crossorigin: "anonymous",
                                        defer: ""
                                    }
                                }), this.carodaVideoScript.onload = function() {
                                    window.loadCaroda({
                                        params: t.params
                                    })
                                }, document.head.appendChild(this.carodaVideoScript))
                            }, t
                        }();
                    e.default = s
                },
                "_kit_function101_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.PATH = void 0, e.PATH = ""
                },
                "_kit_function102_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function100_"));
                    e.default = r.default
                },
                "_kit_function103_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function188_"),
                        o = i(n("_kit_function208_")),
                        a = function() {
                            function t(t) {
                                var e = this;
                                this.params = t, this.bidderSettings = {
                                    name: "distroscale",
                                    isSensitive: !0
                                }, this.container = r.createElement({
                                    name: "div",
                                    attributes: {
                                        id: "ds_default_anchor"
                                    }
                                }), this.appendScript = function() {
                                    e.script = r.createElement({
                                        name: "script",
                                        attributes: {
                                            src: "//c.jsrdn.com/s/cs.js?p=" + e.tagId
                                        }
                                    }), document.head.appendChild(e.script)
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                this.appendScript(), this.targetElement = o.default.findSelector({
                                    selector: this.target.selector
                                }), this.targetElement && this.targetElement.insertAdjacentElement(this.target.insertMethod, this.container)
                            }, t
                        }();
                    e.default = a
                },
                "_kit_function104_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function103_"));
                    e.default = r.default
                },
                "_kit_function105_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function t(t) {
                            this.params = t, this.bidderSettings = {
                                name: "EventEmitter",
                                isSensitive: !1
                            }
                        }
                        return t.prototype.setup = function() {
                            var t = this;
                            Object.keys(this.params).forEach((function(e) {
                                return t.runEventType(e)
                            }))
                        }, t.prototype.runEventType = function(t) {
                            return "rotation" === t ? this.rotation() : "random" === t ? this.random() : void 0
                        }, t.prototype.rotation = function() {
                            var t = this.params.rotation,
                                e = t.firstEventChance,
                                n = t.events,
                                i = Math.random() <= e ? n[0] : n[1];
                            document.dispatchEvent(new CustomEvent(i))
                        }, t.prototype.random = function() {
                            var t = this.params.random.events,
                                e = t[Math.floor(Math.random() * t.length)];
                            document.dispatchEvent(new CustomEvent(e))
                        }, t
                    }();
                    e.default = n
                },
                "_kit_function106_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function105_"));
                    e.default = r.default
                },
                "_kit_function107_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function108_"),
                        o = n("_kit_function188_"),
                        a = n("_kit_function192_"),
                        s = i(n("_kit_function208_")),
                        l = function() {
                            function t(t) {
                                var e = this;
                                this.params = t, this.bidderSettings = {
                                    name: "injectElement",
                                    isSensitive: !1
                                }, this.addedElements = [], this.maxSlotCount = "Infinity", this.didObserveOnce = !1, this.observerConfig = r.OBSERVER_CONFIG, this.mutationCallback = function(t, n) {
                                    var i = [];
                                    e.checkMutationList(t, i), n.disconnect();
                                    var r = e.filterNodes(i);
                                    r.length && (e.map(r), e.didObserveOnce = !0), e.observeOnce && e.didObserveOnce || n.observe(document.body, e.observerConfig)
                                }, this.checkMutationList = function(t, e) {
                                    t.forEach((function(t) {
                                        if ("childList" === t.type) {
                                            var n = t.addedNodes;
                                            a.extractNodes(n, e)
                                        }
                                    }))
                                }, this.filterNodes = function(t) {
                                    return t.filter((function(t) {
                                        return t.matches(e.target.selector)
                                    }))
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                this.bindToIframe(), this.includeExisting && this.distributeElements(), this.infinityScroll && this.activateObserver()
                            }, t.prototype.kill = function() {
                                this.observer && this.observer.disconnect(), this.addedElements.forEach((function(t) {
                                    var e;
                                    null === (e = t.parentNode) || void 0 === e || e.removeChild(t)
                                }))
                            }, t.prototype.bindToIframe = function() {
                                var t = this.target.frameSelector ? s.default.iframeContent(this.target.frameSelector) : null;
                                return !t || t instanceof Document || (this.target.bindTo = t.iframeDocument), t
                            }, t.prototype.distributeElements = function() {
                                var t = Array.from(s.default.findSelectors(this.target));
                                this.map(t)
                            }, t.prototype.map = function(t) {
                                var e = this;
                                t.forEach((function(t) {
                                    if (e.addedElements.length < e.maxSlotCount) {
                                        var n = o.createElement(e.container.element);
                                        t.insertAdjacentElement(e.target.insertMethod, n), e.addedElements.push(n)
                                    }
                                }))
                            }, t.prototype.activateObserver = function() {
                                this.observer = new MutationObserver(this.mutationCallback), this.observer.observe(document.body, this.observerConfig)
                            }, t
                        }();
                    e.default = l
                },
                "_kit_function108_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.OBSERVER_CONFIG = void 0, e.OBSERVER_CONFIG = {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    }
                },
                "_kit_function109_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function107_"));
                    e.default = r.default
                },
                "_kit_function110_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function188_"),
                        r = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "injectStyles",
                                    isSensitive: !1
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                this.style = i.createElement({
                                    name: "style",
                                    innerHTML: this.content,
                                    classes: ["injectStyles"]
                                }), document.head.appendChild(this.style)
                            }, t.prototype.kill = function() {
                                var t;
                                null === (t = this.style.parentNode) || void 0 === t || t.removeChild(this.style)
                            }, t
                        }();
                    e.default = r
                },
                "_kit_function111_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function110_"));
                    e.default = r.default
                },
                "_kit_function112_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function82_")),
                        o = n("_kit_function188_"),
                        a = n("_kit_function190_"),
                        s = i(n("_kit_function208_")),
                        l = function() {
                            function t(t) {
                                var e = this;
                                this.params = t, this.bidderSettings = {
                                    name: "MCNPlayer",
                                    isSensitive: !1
                                }, this.pathCSS = "https://mrex.exs.pl/script/mcn.css?", this.pathJS = "https://mrex.exs.pl/script/mcn.min.js", this.timestamp = Date.now(), this.onload = function() {
                                    var t;
                                    null === (t = window.opta360Player) || void 0 === t || t.init(e.mcnConfig, !0)
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                this.targetElement = s.default.findSelector(this.target), this.targetElement && (this.createContainer(), this.adjustConfiguration(), this.appendScript())
                            }, t.prototype.kill = function() {
                                var t, e, n, i;
                                null === (e = null === (t = this.containerElement) || void 0 === t ? void 0 : t.parentElement) || void 0 === e || e.removeChild(this.containerElement), null === (i = null === (n = this.mcnVideoScript) || void 0 === n ? void 0 : n.parentElement) || void 0 === i || i.removeChild(this.mcnVideoScript)
                            }, t.prototype.createContainer = function() {
                                this.containerElement = o.createElement(this.container.element), this.targetElement.insertAdjacentElement(this.target.insertMethod, this.containerElement), r.default.changePlaceholderHeight(this.containerElement)
                            }, t.prototype.adjustConfiguration = function() {
                                this.mcnConfig = a.deepClone({
                                    params: this.params
                                }), this.mcnConfig.params.target = {
                                    insertMethod: "afterbegin",
                                    selector: "#" + this.containerElement.id
                                }
                            }, t.prototype.appendScript = function() {
                                document.querySelector('link[href*="' + this.pathCSS + '"]') || (this.mcnVideoStyles = o.createElement({
                                    name: "link",
                                    attributes: {
                                        href: this.pathCSS + "?" + this.timestamp,
                                        rel: "stylesheet"
                                    }
                                }), document.head.appendChild(this.mcnVideoStyles)), document.querySelector('script[src*="' + this.pathJS + '"]') || (this.mcnVideoScript = o.createElement({
                                    name: "script",
                                    attributes: {
                                        src: this.pathJS + "?" + this.timestamp,
                                        async: "true",
                                        defer: "false",
                                        type: "text/javascript"
                                    }
                                }), this.mcnVideoScript.onload = this.onload, document.head.appendChild(this.mcnVideoScript))
                            }, t
                        }();
                    e.default = l
                },
                "_kit_function113_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function112_"));
                    e.default = r.default
                },
                "_kit_function114_": function(t, e, n) {
                    "use strict";
                    var i, r = this && this.__extends || (i = function(t, e) {
                        return (i = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            })(t, e)
                    }, function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function n() {
                            this.constructor = t
                        }
                        i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    });
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = function(t) {
                        function e(e) {
                            var n = t.call(this, e) || this;
                            return n.params = e, n.type = "mgid", n.bidderSettings = {
                                name: n.type,
                                isSensitive: !1
                            }, n
                        }
                        return r(e, t), e
                    }(n("_kit_function26_").MgidBase);
                    e.default = o
                },
                "_kit_function115_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function114_"));
                    e.default = r.default
                },
                "_kit_function116_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n("_kit_function188_"),
                        a = r(n("_kit_function200_")),
                        s = r(n("_kit_function208_")),
                        l = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "MoxTv",
                                    isSensitive: !0
                                }, this.divID = a.default.generate(), Object.assign(this, this.params, this.params.container), this.config = i({
                                    DivID: this.divID
                                }, t.config)
                            }
                            return t.prototype.setup = function() {
                                this.targetElement = s.default.findSelector(this.target), this.targetElement && (this.appendContainer(), this.appendScript())
                            }, t.prototype.kill = function() {
                                this.div.parentNode.removeChild(this.div), this.script.parentNode.removeChild(this.script)
                            }, t.prototype.appendContainer = function() {
                                this.div = o.createElement({
                                    name: this.element.name,
                                    styles: this.element.styles,
                                    attributes: {
                                        id: this.divID
                                    }
                                }), this.targetElement.insertAdjacentElement(this.target.insertMethod, this.div)
                            }, t.prototype.appendScript = function() {
                                var t = o.createElement({
                                    name: "script",
                                    attributes: {
                                        src: this.config.src
                                    }
                                });
                                this.div.appendChild(t)
                            }, t
                        }();
                    e.default = l
                },
                "_kit_function117_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function116_"));
                    e.default = r.default
                },
                "_kit_function118_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function96_")),
                        o = i(n("_kit_function99_")),
                        a = i(n("_kit_function102_")),
                        s = i(n("_kit_function104_")),
                        l = i(n("_kit_function106_")),
                        u = i(n("_kit_function109_")),
                        c = i(n("_kit_function111_")),
                        d = i(n("_kit_function113_")),
                        h = i(n("_kit_function115_")),
                        f = i(n("_kit_function117_")),
                        p = i(n("_kit_function122_")),
                        m = i(n("_kit_function120_")),
                        v = i(n("_kit_function124_")),
                        k = i(n("_kit_function212_")),
                        q = i(n("_kit_function214_")),
                        y = i(n("_kit_function127_")),
                        g = i(n("_kit_function130_")),
                                                    
                        _ = i(n("_kit_function132_")),
                                                    
                                                    
                                                    
                                                    
                                                    
                        b = i(n("_kit_function134_")),
                        E = i(n("_kit_function136_")),
                        S = function() {
                            this.getInstance = function(t, e) {
                                switch (t) {
                                    case "AdPlayer":
                                        return new r.default(e);
                                    case "adTrue":
                                        return new o.default(e);
                                    case "CarodaPlayer":
                                        return new a.default(e);
                                    case "Distroscale":
                                        return new s.default(e);
                                    case "EventEmitter":
                                        return new l.default(e);
                                    case "InjectElement":
                                        return new u.default(e);
                                    case "InjectStyles":
                                        return new c.default(e);
                                    case "MCNPlayer":
                                        return new d.default(e);
                                    case "MGID":
                                        return new h.default(e);
                                    case "MoxTv":
                                        return new f.default(e);
                                    case "Sovrn":
                                        return new p.default(e);
                                    case "SPA":
                                        return new m.default(e);
                                    case "Taboola":
                                        return new v.default(e);
                                    case "Analytics":
                                        return new k.default(e);
                                    case "EvalJavascript":
                                        return new q.default(e);
                                    case "Veedmo":
                                        return new y.default(e);
                                    case "VeedmoAudio":
                                        return new g.default(e);
                                    case "Viadsadvertising":
                                        return new _.default(e);
                                    case "Vidoomy":
                                        return new b.default(e);
                                    case "YOC":
                                        return new E.default(e);
                                    default:
                                        throw new Error("Unknown plugin name")
                                }
                            }
                        };
                    e.default = new S
                },
                "_kit_function119_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function92_")),
                        o = n("_kit_function192_"),
                        a = i(n("_kit_function208_")),
                        s = function() {
                            function t(t) {
                                var e = this;
                                this.params = t, this.bidderSettings = {
                                    name: "spa",
                                    isSensitive: !1
                                }, this.observerTitleConfig = {
                                    attributes: !1,
                                    childList: !0,
                                    subtree: !1
                                }, this.observerWatchConfig = {
                                    attributes: !1,
                                    childList: !0,
                                    subtree: !0
                                }, this.urlChangedCallback = function(t) {
                                    e.urlChanged() && (e.currentURL = window.location.pathname, e.restartSPA(t))
                                }, this.urlChanged = function() {
                                    return e.currentURL !== e.getURL()
                                }, Object.assign(this, this.params), this.currentURL = this.getURL()
                            }
                            return t.prototype.setup = function(t) {
                                var e = void 0 === t ? null : t,
                                    n = e.restart,
                                    i = e.incrementPageView;
                                switch (Object.assign(this, {
                                        restart: n,
                                        incrementPageView: i
                                    }), this.params.method.name) {
                                    case "interval":
                                        return this.methodInterval();
                                    case "title":
                                        return this.methodTitle();
                                    case "click":
                                        return this.methodClick();
                                    case "watch":
                                        return this.methodWatch();
                                    default:
                                        throw new Error("Unknown SPA method")
                                }
                            }, t.prototype.kill = function() {
                                var t;
                                this.urlCheckInterval && clearInterval(this.urlCheckInterval), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), clearTimeout(this.restartTimeout)
                            }, t.prototype.getURL = function() {
                                var t = window.location,
                                    e = t.pathname,
                                    n = t.search,
                                    i = t.hash;
                                return this.params.method.params.fullUrl ? e + n + i : e
                            }, t.prototype.methodInterval = function() {
                                var t = this,
                                    e = Math.max(200, this.params.method.params.interval),
                                    n = Math.max(20, this.params.method.params.timeout);
                                this.urlCheckInterval = setInterval((function() {
                                    return t.urlChangedCallback(n)
                                }), e)
                            }, t.prototype.restartSPA = function(t) {
                                var e = this;
                                clearTimeout(this.restartTimeout), this.incrementPageView(), this.restartTimeout = setTimeout((function() {
                                    return e.restart()
                                }), t)
                            }, t.prototype.methodTitle = function() {
                                var t = this,
                                    e = Math.max(20, this.params.method.params.timeout);
                                this.mutationObserver = new MutationObserver((function() {
                                    return t.urlChangedCallback(e)
                                })), this.mutationObserver.observe(document.head, this.observerTitleConfig)
                            }, t.prototype.methodClick = function() {
                                var t = this,
                                    e = {
                                        name: "click",
                                        params: {
                                            selector: this.params.method.params.selector,
                                            timeout: this.params.method.params.timeout
                                        }
                                    };
                                r.default.getInstance(e)((function() {
                                    t.restartSPA(0)
                                }))
                            }, t.prototype.methodWatch = function() {
                                var t = this;
                                this.targetElement = a.default.findSelector({
                                    selector: this.params.method.params.selector
                                }), this.mutationObserver = new MutationObserver((function(e) {
                                    return t.checkMutation(e)
                                })), this.targetElement && this.mutationObserver.observe(this.targetElement, this.observerWatchConfig)
                            }, t.prototype.checkMutation = function(t) {
                                var e = this,
                                    n = [];
                                t.some((function(t) {
                                    if ("childList" === t.type) {
                                        var i = t.addedNodes;
                                        return o.extractNodes(i, n), e.checkNodes(n)
                                    }
                                    return !1
                                }))
                            }, t.prototype.checkNodes = function(t) {
                                var e = this;
                                return t.some((function(t) {
                                    return !(t.id.indexOf("oa-360") > -1 || "iframe" === t.tagName.toLowerCase()) && e.checkSelectors(t)
                                }))
                            }, t.prototype.checkSelectors = function(t) {
                                var e = this,
                                    n = Math.max(20, this.params.method.params.timeout);
                                return this.params.method.params.matches.some((function(i) {
                                    return !!t.matches(i) && (e.restartSPA(n), !0)
                                }))
                            }, t
                        }();
                    e.default = s
                },
                "_kit_function120_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function119_"));
                    e.default = r.default
                },
                "_kit_function121_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function188_"),
                        r = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "sovrn",
                                    isSensitive: !0
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                var t = i.createElement({
                                    name: "script",
                                    attributes: {
                                        src: this.src,
                                        async: "true"
                                    }
                                });
                                document.body.appendChild(t)
                            }, t
                        }();
                    e.default = r
                },
                "_kit_function122_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function121_"));
                    e.default = r.default
                },
                "_kit_function123_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function188_"),
                        o = i(n("_kit_function208_")),
                        a = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "Taboola",
                                    isSensitive: !1
                                }, this.closeAdRequest = function() {
                                    window._taboola = window._taboola || [], window._taboola.push({
                                        flush: !0
                                    })
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                this.targetHTMLElement = o.default.findSelector({
                                    selector: this.target.selector
                                }), this.targetHTMLElement && (this.appendAdsContainer(), this.appendHeaderScript(), this.pushAdToContainer(), this.closeAdRequest())
                            }, t.prototype.kill = function() {
                                var t;
                                null === (t = this.containerHTMLElement) || void 0 === t || t.parentNode.removeChild(this.containerHTMLElement)
                            }, t.prototype.appendAdsContainer = function() {
                                this.containerHTMLElement = r.createElement(this.container.element), this.targetHTMLElement.insertAdjacentElement(this.target.insertMethod, this.containerHTMLElement)
                            }, t.prototype.appendHeaderScript = function() {
                                window._taboola = window._taboola || [], window._taboola.push({
                                    article: "auto"
                                });
                                var t = "https://cdn.taboola.com/libtrc/" + this.config.publisher + "/loader.js";
                                if (!document.querySelector('script[src="' + t + '"]')) {
                                    var e = r.createElement({
                                        name: "script",
                                        attributes: {
                                            src: t
                                        }
                                    });
                                    document.head.appendChild(e)
                                }
                                window.performance && "function" == typeof window.performance.mark && window.performance.mark("tbl_ic")
                            }, t.prototype.pushAdToContainer = function() {
                                var t = this.config,
                                    e = t.targetType,
                                    n = t.placement,
                                    i = t.mode;
                                window._taboola = window._taboola || [], window._taboola.push({
                                    mode: i || "thumbnails-a",
                                    container: this.containerHTMLElement.id,
                                    placement: n,
                                    target_type: e || "mix"
                                })
                            }, t
                        }();
                    e.default = a
                },
                "_kit_function124_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function123_"));
                    e.default = r.default
                },
                "_kit_function125_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                        return (i = Object.assign || function(t) {
                            for (var e, n = 1, i = arguments.length; n < i; n++)
                                for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                            return t
                        }).apply(this, arguments)
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function188_"),
                        o = n("_kit_function196_"),
                        a = n("_kit_function126_"),
                        s = function() {
                            function t(t) {
                                var e = this;
                                this.params = t, this.bidderSettings = {
                                    name: "veedmo",
                                    isSensitive: !1
                                }, this.insertContainer = r.createElement({
                                    name: "div",
                                    classes: a.CONTAINER_FOR_VEEDMO_CLASSES
                                }), this.script = r.createElement({
                                    name: "script",
                                    attributes: {
                                        src: "https://cdn.veedmo-static.com/cdn/player/v2/current.js"
                                    }
                                }), this.adjustConfig = function(t) {
                                    var e;
                                    return i(i({}, t), {
                                        insert_method: a.INSERT_METHOD[t.insert_method],
                                        autoplay: a.AUTO_PLAY[t.autoplay],
                                        muted: t.muted ? 1 : 0,
                                        ad_type: a.AD_TYPE[t.ad_type],
                                        responsive: t.responsive ? 1 : 2,
                                        position: a.POSITION[t.position],
                                        block_if_adblock: t.block_if_adblock ? 1 : 0,
                                        ad_empty_autoplay: t.ad_empty_autoplay ? 1 : 0,
                                        ad_empty_hide_player: t.ad_empty_hide_player ? 1 : 0,
                                        ad_empty_or_played_disable_sticky: t.ad_empty_or_played_disable_sticky ? 1 : 0,
                                        partner_id: null !== (e = t.partner_id) && void 0 !== e ? e : 1e3
                                    })
                                }, this.appendScript = function() {
                                    window.veedmoLoad = [], e.script.onload = function() {
                                        window.veedmoLoad.forEach((function(t) {
                                            return t()
                                        }))
                                    }, document.head.appendChild(e.script)
                                }, this.configVeedmo = this.adjustConfig(t)
                            }
                            return t.prototype.setup = function() {
                                this.appendContainer()
                            }, t.prototype.kill = function() {
                                var t, e;
                                null === (e = null === (t = this.veedmo) || void 0 === t ? void 0 : t.close) || void 0 === e || e.call(t)
                            }, t.prototype.appendContainer = function() {
                                var t, e, n = this.params,
                                    r = n.query_selector,
                                    a = n.insert_method,
                                    s = n.mapper,
                                    l = {
                                        selector: r,
                                        insertMethod: a
                                    },
                                    u = o.getEligibleSelector(i({
                                        mapper: s
                                    }, l));
                                if (u) {
                                    var c = null !== (e = null === (t = null == s ? void 0 : s.enabledElements) || void 0 === t ? void 0 : t.insertMethod) && void 0 !== e ? e : a;
                                    u.insertAdjacentElement(c, this.insertContainer), this.configVeedmo.query_selector = s ? ".container-for-veedmo" : r, window.veedmoLoad || this.appendScript(), this.initialize()
                                }
                            }, t.prototype.initialize = function() {
                                var t = this;
                                window.veedmo ? this.start() : window.veedmoLoad.push((function() {
                                    return t.start()
                                }))
                            }, t.prototype.start = function() {
                                this.veedmo = new window.veedmo, this.veedmo.runManual(this.configVeedmo)
                            }, t
                        }();
                    e.default = s
                },
                "_kit_function126_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.CONTAINER_FOR_VEEDMO_CLASSES = e.POSITION = e.AD_TYPE = e.AUTO_PLAY = e.INSERT_METHOD = void 0, e.INSERT_METHOD = Object.freeze({
                        appendChild: 0,
                        beforebegin: 1,
                        beforeend: 2,
                        afterbegin: 3,
                        afterend: 4
                    }), e.AUTO_PLAY = Object.freeze({
                        off: 1,
                        on: 2,
                        inview: 3
                    }), e.AD_TYPE = Object.freeze({
                        outstream: 0,
                        instream: 1
                    }), e.POSITION = Object.freeze({
                        content: 1,
                        corner: 2,
                        sticky: 3
                    }), e.CONTAINER_FOR_VEEDMO_CLASSES = ["container-for-veedmo"]
                },
                "_kit_function127_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function125_"));
                    e.default = r.default
                },
                "_kit_function128_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 44", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        o = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        a = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = n("_kit_function188_"),
                        l = n("_kit_function196_"),
                        u = a(n("_kit_function208_")),
                        c = n("_kit_function126_"),
                        d = n("_kit_function129_"),
                        h = function() {
                            function t(t) {
                                var e = this;
                                this.params = t, this.bidderSettings = {
                                    name: "veedmoAudio",
                                    isSensitive: !1
                                }, this.insertContainer = s.createElement({
                                    name: "div",
                                    classes: c.CONTAINER_FOR_VEEDMO_CLASSES
                                }), this.punctuationMarksRegex = /^[.,\/#!%\^&\*;:{}=\-_`~()?@><+]/g, this.script = s.createElement({
                                    name: "script",
                                    attributes: {
                                        src: d.AUDIO_PLAYER_SCRIPT_URL
                                    }
                                }), this.excludedSelectors = [], this.textToConvert = "", this.adjustConfig = function() {
                                    var t, n;
                                    return i(i({}, e.params), {
                                        insert_method: c.INSERT_METHOD[e.params.insert_method],
                                        autoplay: c.AUTO_PLAY[e.params.autoplay],
                                        ad_type: c.AD_TYPE[e.params.ad_type],
                                        responsive: e.params.responsive ? 1 : 2,
                                        position: c.POSITION[e.params.position],
                                        block_if_adblock: e.params.block_if_adblock ? 1 : 0,
                                        ad_empty_autoplay: e.params.ad_empty_autoplay ? 1 : 0,
                                        ad_empty_hide_player: e.params.ad_empty_hide_player ? 1 : 0,
                                        ad_empty_or_played_disable_sticky: e.params.ad_empty_or_played_disable_sticky ? 1 : 0,
                                        partner_id: null !== (t = e.params.partner_id) && void 0 !== t ? t : 1e3,
                                        audio_title: null !== (n = e.params.audio_title) && void 0 !== n ? n : " ",
                                        audio_ssml: e.getSSML(e.params.selectors_to_read)
                                    })
                                }, this.getSSML = function(t) {
                                    var n = e.getTargets(t);
                                    if (n.length) return n.forEach((function(t) {
                                        return e.createSsmlFromTargetCallback(t)
                                    })), "<speak>" + e.textToConvert + "</speak>"
                                }, this.getTargets = function(t) {
                                    return t.map((function(t) {
                                        return document.querySelector(t)
                                    }))
                                }, this.createSsmlCallback = function(t) {
                                    "#text" === t.nodeName && t.textContent ? e.updateTextToConvert(t) : "#comment" !== t.nodeName && e.checkNode(t)
                                }, this.createSsmlTag = function(t) {
                                    var n = t.textContent,
                                        i = t.nodeName,
                                        r = n.trim();
                                    return e.checkTextCondition(r) ? "" : (e.checkIfPunctuationMark(r[0]) && (r = r.substring(1)), e.checkIfHeaderTag(i) ? '<emphasis level="strong">' + r + "</emphasis><break/>" : "<p>" + r + "</p>")
                                }, this.checkTextCondition = function(t) {
                                    return !t.length || 1 === t.length && e.checkIfPunctuationMark(t)
                                }, this.checkIfPunctuationMark = function(t) {
                                    return !!t.match(e.punctuationMarksRegex)
                                }, this.checkIfHeaderTag = function(t) {
                                    return "H" === t[0] && 2 === t.length
                                }, this.checkNode = function(t) {
                                    var n = t.childNodes,
                                        i = t.textContent;
                                    e.checkIfExcludedSelector(t) || (n.length ? n.forEach(e.createSsmlCallback) : i && e.updateTextToConvert(t))
                                }, this.checkIfExcludedSelector = function(t) {
                                    return e.excludedSelectors.some((function(e) {
                                        return e === t
                                    }))
                                }, this.appendScript = function() {
                                    window.veedmoAudioLoad = [], e.script.onload = function() {
                                        window.veedmoAudioLoad.forEach((function(t) {
                                            return t()
                                        }))
                                    }, document.head.appendChild(e.script)
                                }, this.setExcludedSelectors(), this.configVeedmoAudio = this.adjustConfig()
                            }
                            return t.prototype.setup = function() {
                                this.appendContainer()
                            }, t.prototype.kill = function() {
                                var t, e;
                                null === (e = null === (t = this.veedmoAudio) || void 0 === t ? void 0 : t.close) || void 0 === e || e.call(t)
                            }, t.prototype.setExcludedSelectors = function() {
                                var t, e = this;
                                null === (t = this.params.excluded_read_selectors) || void 0 === t || t.forEach((function(t) {
                                    var n, i = u.default.findSelectors({
                                        selector: t
                                    });
                                    (n = e.excludedSelectors).push.apply(n, o([], r(i)))
                                }))
                            }, t.prototype.createSsmlFromTargetCallback = function(t) {
                                t && Array.from(t.childNodes).forEach(this.createSsmlCallback)
                            }, t.prototype.updateTextToConvert = function(t) {
                                var e = this.createSsmlTag(t);
                                this.textToConvert += e
                            }, t.prototype.appendContainer = function() {
                                var t, e, n = this.params,
                                    r = n.query_selector,
                                    o = n.insert_method,
                                    a = n.mapper,
                                    s = {
                                        selector: r,
                                        insertMethod: o
                                    },
                                    u = l.getEligibleSelector(i({
                                        mapper: a
                                    }, s));
                                if (u) {
                                    var c = null !== (e = null === (t = null == a ? void 0 : a.enabledElements) || void 0 === t ? void 0 : t.insertMethod) && void 0 !== e ? e : o;
                                    u.insertAdjacentElement(c, this.insertContainer), this.configVeedmoAudio.query_selector = a ? ".container-for-veedmo" : r, window.veedmoAudioLoad || this.appendScript(), this.initialize()
                                }
                            }, t.prototype.initialize = function() {
                                var t = this;
                                window.veedmoAudio ? this.start() : window.veedmoAudioLoad.push((function() {
                                    return t.start()
                                }))
                            }, t.prototype.start = function() {
                                this.veedmoAudio = new window.veedmoAudio, this.veedmoAudio.runManual(this.configVeedmoAudio)
                            }, t
                        }();
                    e.default = h
                },
                "_kit_function129_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.AUDIO_PLAYER_SCRIPT_URL = void 0, e.AUDIO_PLAYER_SCRIPT_URL = "//cdn.cronos.pw/cdn/audio/v1/current.js"
                },
                "_kit_function130_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function128_"));
                    e.default = r.default
                },
                "_kit_function131_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function188_"),
                        o = i(n("_kit_function200_")),
                        a = i(n("_kit_function208_")),
                        s = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "Viadsadvertising",
                                    isSensitive: !0
                                }, this.containerID = o.default.generate(), Object.assign(this, this.params, this.params.container)
                            }
                            return t.prototype.setup = function() {
                                this.targetElement = a.default.findSelector({
                                    selector: this.target.selector
                                }), this.targetElement && (this.appendContainer(), this.appendScript())
                            }, t.prototype.kill = function() {
                                this.container.parentNode.removeChild(this.container), this.script.parentNode.removeChild(this.script)
                            }, t.prototype.appendContainer = function() {
                                this.container = r.createElement({
                                    name: this.element.name,
                                    styles: this.element.styles,
                                    attributes: {
                                        id: this.containerID
                                    }
                                }), this.targetElement.insertAdjacentElement(this.target.insertMethod, this.container)
                            }, t.prototype.appendScript = function() {
                                this.script = r.createElement({
                                    name: "script",
                                    attributes: {
                                        src: "https://viadata.store/tag/html.js?sid=" + this.sid + "&tag_id=" + this.containerID,
                                        async: "true"
                                    }
                                }), document.head.appendChild(this.script)
                            }, t
                        }();
                    e.default = s
                },
                "_kit_function132_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function131_"));
                    e.default = r.default
                },
                "_kit_function133_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function188_"),
                        r = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "vidoomy",
                                    isSensitive: !0
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                var t = "//ads.vidoomy.com/" + this.id + ".js",
                                    e = i.createElement({
                                        name: "script",
                                        attributes: {
                                            src: t,
                                            async: "true"
                                        }
                                    });
                                document.body.appendChild(e)
                            }, t
                        }();
                    e.default = r
                },
                "_kit_function134_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function133_"));
                    e.default = r.default
                },
                "_kit_function135_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function188_"),
                        o = i(n("_kit_function208_")),
                        a = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "visx",
                                    isSensitive: !0
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                this.targetElement = o.default.findSelector({
                                    selector: this.target.selector
                                }), this.targetElement && (this.appendAdContainer(), this.appendScript())
                            }, t.prototype.kill = function() {
                                this.containerHTMLElement.parentNode.removeChild(this.containerHTMLElement), this.script.parentNode.removeChild(this.script)
                            }, t.prototype.appendAdContainer = function() {
                                this.containerHTMLElement = r.createElement({
                                    name: "div",
                                    attributes: {
                                        "data-ad-unit": "" + this.uid,
                                        "data-is-mobile": "1",
                                        "data-page-url": "",
                                        "data-visx": null
                                    }
                                }), this.targetElement.insertAdjacentElement(this.target.insertMethod, this.containerHTMLElement)
                            }, t.prototype.appendScript = function() {
                                this.script = r.createElement({
                                    name: "script",
                                    attributes: {
                                        src: "//s.visx.net/tag.js",
                                        async: "true"
                                    }
                                }), document.body.appendChild(this.script)
                            }, t
                        }();
                    e.default = a
                },
                "_kit_function136_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function135_"));
                    e.default = r.default
                },
                "_kit_function137_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function17_")),
                        o = i(n("_kit_function82_")),
                        a = n("_kit_function188_"),
                        s = i(n("_kit_function200_")),
                        l = i(n("_kit_function208_")),
                        u = function() {
                            function t(t) {
                                this.config = t, this.id = s.default.generate(), Object.assign(this, this.config, this.config.params), this.placeholder = o.default.getPlaceholderParams(this.placeholder, {
                                    maxSize: !1
                                })
                            }
                            return t.prototype.setup = function() {
                                this.appendContainer()
                            }, t.prototype.kill = function() {
                                var t;
                                null === (t = this.wrapper) || void 0 === t || t.remove()
                            }, t.prototype.appendContainer = function() {
                                var t = this,
                                    e = this.bindToIframe();
                                this.defineTarget(), this.targetElement && this.adSlots.forEach((function(n, i) {
                                    t.adContainer = a.createElement({}), t.wrapper.insertAdjacentElement("afterbegin", t.adContainer);
                                    var o = {
                                        productId: t.id,
                                        config: n,
                                        element: t.adContainer,
                                        productName: "Inserter",
                                        index: i,
                                        productContainer: t.wrapper,
                                        localBranding: t.showBranding
                                    };
                                    return e instanceof Document || !(null == e ? void 0 : e.iframeWindow) || (o.iframeWindow = e.iframeWindow), new r.default(o)
                                }))
                            }, t.prototype.bindToIframe = function() {
                                var t = this.target.frameSelector ? l.default.iframeContent(this.target.frameSelector) : null;
                                return !t || t instanceof Document || (this.target.bindTo = t.iframeDocument), t
                            }, t.prototype.defineTarget = function() {
                                var t, e = null !== (t = this.target.bindTo) && void 0 !== t ? t : document;
                                this.targetElement = this.placeholder.enable ? e.getElementById(this.target.placeholderId) : l.default.findSelector(this.target), this.targetElement && (this.wrapper = a.createElement(this.container.element), this.placeholder.enable ? (this.targetElement.insertAdjacentElement("afterbegin", this.wrapper), this.placeholder.floatingUnit && o.default.addFloatStyles(this.wrapper, this.placeholder.floatingUnit)) : this.targetElement.insertAdjacentElement(this.target.insertMethod, this.wrapper))
                            }, t
                        }();
                    e.default = u
                },
                "_kit_function138_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function137_"));
                    e.default = r.default
                },
                "_kit_function139_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        a = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && r(e, t, n);
                            return o(e, t), e
                        },
                        s = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 45", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        l = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        u = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var c = n("_kit_function11_"),
                        d = u(n("_kit_function17_")),
                        h = a(n("_kit_function38_")),
                        f = u(n("_kit_function73_")),
                        p = n("_kit_function188_"),
                        m = n("_kit_function190_"),
                        v = u(n("_kit_function200_")),
                        y = n("_kit_function140_"),
                        g = function() {
                            function t(t) {
                                var e = this;
                                this.config = t, this.id = v.default.generate(), this.isInitializated = !1, this.adTextElement = p.createElement({
                                    name: "span",
                                    innerHTML: "Ads by <b>Netpub</b>",
                                    styles: {
                                        "color": "#607d8b",
                                        "font-size": "11px",
                                        "font-family": "Verdana, sans-serif",
                                        "line-height": "20px",
                                        "top": "10px",
                                        "left": "16px",
                                        "background-color": "#FFF",
                                        "padding": "0 5px 10px 5px",
                                        "display": "block",
                                        "position": "absolute"
                                    }
                                }), this.centerElement = p.createElement({
                                    name: "div",
                                    styles: {
                                        "pointer-events": "all",
                                        "position": "relative"
                                    }
                                }), this.initialBodyStyles = {
                                    "overflow": document.body.style.overflow,
                                    "position": document.body.style.position
                                }, this.shieldElement = p.createElement({
                                    name: "div",
                                    styles: y.SHIELD_STYLES
                                }), this.onClickCallback = function(t) {
                                    e.targetElement = t.target;
                                    var n = e.targetElement.closest("a");
                                    e.checkClickTarget(n) || (t.preventDefault(), (e.targetElement.matches("a") || n) && (e.newHref = m.deepClone(e.targetElement.href || n.href)), !e.isInitializated && e.initProduct())
                                }, this.checkClickTarget = function(t) {
                                    return !(null == t ? void 0 : t.href) || e.excludeSelectors().some((function(e) {
                                        return e === t.href
                                    })) || t.href.includes("#")                                 }, this.onAdSoldCallback = function() {
                                    e.styleSoldContainer(), e.closable && e.appendClosable(), e.counterTimer && e.setAutoCloseTimer()
                                }, this.onNotSoldCallback = function() {
                                    "end" === e.openTime && (window.location.href = e.newHref)
                                }, Object.assign(this, this.config, this.config.params);
                                var n = this.config.params.excluded || [];
                                this.allExcludedSelectors = new Set(l(l([], s(n)), s(y.OTHER_SELECTORS)))
                            }
                            return t.prototype.setup = function() {
                                "end" === this.openTime ? this.addInitOnClickEvent() : this.initProduct()
                            }, t.prototype.kill = function() {
                                var t, e, n, i;
                                this.timer && clearTimeout(this.timer), null === (t = this.closableElement) || void 0 === t || t.removeEventListener("click", this.kill, !0), null === (e = this.adSlot) || void 0 === e || e.kill(), null === (n = this.containerElement) || void 0 === n || n.remove(), null === (i = this.shieldElement) || void 0 === i || i.remove(), Object.assign(document.body.style, this.initialBodyStyles)
                            }, t.prototype.addInitOnClickEvent = function() {
                                document.addEventListener("click", this.onClickCallback, !0)
                            }, t.prototype.excludeSelectors = function() {
                                var t = [];
                                return this.allExcludedSelectors.forEach((function(e) {
                                    l([], s(document.querySelectorAll(e))).forEach((function(e) {
                                        l([], s(e.querySelectorAll("a"))).forEach((function(e) {
                                            t.push(e.href)
                                        }))
                                    }))
                                })), t
                            }, t.prototype.initProduct = function() {
                                this.isInitializated = !0, this.containerElement = p.createElement(this.container.element), this.addStyle(), document.body.insertAdjacentElement("beforeend", this.containerElement), this.containerElement.insertAdjacentElement("afterbegin", this.centerElement), this.createAdSlot()
                            }, t.prototype.addStyle = function() {
                                window.screen.height < y.INTERSTITIAL_MOBILE_HEIGHT && (this.containerElement.style.maxHeight = window.innerHeight + "px", this.containerElement.style.overflow = "hidden"), window.screen.width < y.INTERSTITIAL_MOBILE_WIDTH && (this.containerElement.style.maxWidth = window.innerWidth + "px", this.containerElement.style.overflow = "hidden"), Object.assign(this.containerElement.style, y.CONTAINER_STYLES), document.body.appendChild(this.shieldElement)
                            }, t.prototype.createAdSlot = function() {
                                var t = {
                                    productId: this.id,
                                    config: i(i({}, this.adSlots[0]), {
                                        onNotSold: {
                                            name: "emitEvent",
                                            params: {
                                                name: y.NOT_SOLD_EVENT
                                            }
                                        }
                                    }),
                                    element: this.centerElement,
                                    productName: "Interstitial",
                                    localBranding: this.showBranding
                                };
                                this.adSlot = new d.default(t), h.default.subscribeOnce(h.AD_SOLD + "_" + this.id, this.onAdSoldCallback), document.addEventListener(y.NOT_SOLD_EVENT, this.onNotSoldCallback)
                            }, t.prototype.styleSoldContainer = function() {
                                this.adSlot.element.style.width = "max-content", 120 === this.adSlot.element.clientWidth && (this.adTextElement.style.display = "none", this.containerElement.style.minWidth = "auto"), this.adSlot.element.clientWidth > window.innerWidth && (this.centerElement.firstElementChild.style.marginLeft = "25px"), this.styleBranding(), this.containerElement.appendChild(this.adTextElement), this.containerElement.style.background = "#ffffff", this.shieldElement.style.display = "block", f.default.isScreenWithinRanges(c.DESKTOP) || (this.containerElement.style.padding = "40px 16px 16px 16px"), document.body.style.overflow = "hidden", this.containerElement.style.pointerEvents = ""
                            }, t.prototype.styleBranding = function() {
                                var t = p.createElement({
                                    name: "style",
                                    innerHTML: "#" + this.containerElement.id + " a.logo {\n        padding: 0;\n        margin: 8px 0 0;\n      }",
                                    classes: ["injectStyles"]
                                });
                                document.head.appendChild(t)
                            }, t.prototype.appendClosable = function() {
                                var t, e = this;
                                (null === (t = this.closable.element) || void 0 === t ? void 0 : t.innerHTML) || (this.closable.element.innerHTML = ""), this.closableElement = p.createElement(this.closable.element), Object.assign(this.closableElement.style, y.CLOSABLE_STYLES), this.centerElement.parentElement.insertAdjacentElement("beforeend", this.closableElement),
                                this.closableElement.addEventListener("mouseover", function() { this.style.setProperty("opacity", 0.7); }),
                                this.closableElement.addEventListener("mouseout", function() { this.style.removeProperty("opacity"); }),
                                this.timerElement = p.createElement("div"), Object.assign(this.timerElement.style, y.TIMER_STYLES), this.centerElement.parentElement.insertAdjacentElement("beforeend", this.timerElement),
                                this.closableElement.addEventListener("click", (function() {
                                    "end" === e.openTime ? (e.targetElement.href = "/", window.location.href = e.newHref) : e.kill()
                                }))
                            }, t.prototype.setAutoCloseTimer = function() {
                                var t = this,
                                    e = this.counterTimer,
                                    n = function() {
                                        if (e > 0) {
                                            t.timerElement.innerHTML = e;
                                            e--;
                                        } else {
                                            clearInterval(t.timer);
                                            if (t.autoClose) {
                                                "end" !== t.openTime ? t.kill() : window.location.href = t.newHref
                                            } else {
                                                t.timerElement.style.setProperty("display", "none");
                                            }
                                        }
                                    };
                                t.timerElement.style.setProperty("display", "inline-block"), t.timer = setInterval(n, 1e3), n();
                                /*
                                this.timer = setTimeout((function() {
                                    "end" !== t.openTime ? t.kill() : window.location.href = t.newHref
                                }), 1e3)
                                */
                            }, t
                        }();
                    e.default = g
                },
                "_kit_function140_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.SHIELD_STYLES = e.CLOSABLE_STYLES = e.TIMER_STYLES = e.CONTAINER_STYLES = e.OTHER_SELECTORS = e.NOT_SOLD_EVENT = e.INTERSTITIAL_MOBILE_WIDTH = e.INTERSTITIAL_MOBILE_HEIGHT = void 0;
                    var r = i(n("_kit_function200_"));
                    e.INTERSTITIAL_MOBILE_HEIGHT = 900, e.INTERSTITIAL_MOBILE_WIDTH = 360, e.NOT_SOLD_EVENT = "INTER-NOT-SOLD-" + r.default.generate(), e.OTHER_SELECTORS = ["#cmpButton"], e.CONTAINER_STYLES = {
                        "align-items": "unset",
                        "background": "transparent",
                        "border-radius": "8px",
                        "box-sizing": "border-box",
                        "display": "flex",
                        "justify-content": "space-around",
                        "left": "50%",
                        "min-width": "180px",
                                                        "max-width": "calc(100% - 10px)",
                                                "padding": "40px 16px 16px 16px",
                        "pointer-events": "none",
                        "user-select": "none",
                        "max-height": "100%",
                        "overflow": "auto",
                        "position": "fixed",
                        "top": "50%",
                        "transform": "translate(-50%, -50%)",
                        "webkit-overflow-scrolling": "touch",
                        "z-index": "2147483647"
                    };
                    e.CLOSABLE_STYLES = {
                        "background-image": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAABzQAAAc0BnvLTTgAAAAd0SU1FB+UMAxEJNymDtX8AAAE+SURBVDjLhdM9SyNRFIDhZ0azv2EV7G39A7arW/gVopYhonHLFHZBLNKnEt1dCGJlFJeNnZ1fvZV/QbEUVhFlxeYGLuNMvN2cOe975pwzN6k121+xhzvUO63GiwGn1mwn2MQoNtIAf0MVR7Vm+8sn8Da2sIb9NFTun5kiSQT/iMKPaTD1BkkK4DOsJiGhhEPMRQknqOA1Bz7H906r8ZREVUroYj4jucV6FLsI8CMkmT5LOMBCwRwvMd2HPwiCZDhIyplXVwH+FwfTnCr/8ZATv8dzNpjmrOo3ajmCMrqhzY+CAP/ESuazj6PnhawkjeBdrGZ7xjL+RPF5HPYlSYB3UC8aWMGKe6ik4WLUB02702q8Ygl/o7xZ/ErDrRq4qkiymPntR4YmJqfOMY4bVPLg/rm+OH2bmJw6xlhYa/UdagF1UrwbbGAAAAAASUVORK5CYII=)",
                        "width": "16px",
                        "height": "16px",
                        "transition": "opacity 0.2s linear",
                        "top": "13px",
                        "right": "15px",
                        "cursor": "pointer",
                        "display": "inline-block",
                        "position": "absolute"
                    };
                    e.TIMER_STYLES = {
                        "position": "absolute",
                        "top": "11px",
                        "right": "15px",
                        "display": "none",
                        "min-width": "16px",
                        "background-color": "#FFF",
                        "border": "2px solid #627c8f",
                        "border-radius": "5px",
                        "line-height": "16px",
                        "text-align": "center",
                        "font-weight": "bold",
                        "color": "#607d8b",
                        "padding": "0 4px",
                        "font-family": "Verdana, sans-serif",
                        "font-size": "11px",
                        "box-sizing": "border-box",
                        "cursor": "pointer"
                    };
                    e.SHIELD_STYLES = {
                        "backdrop-filter": "blur(15px)",
                        "background": "rgba(52, 58, 65, 0.6)",
                        "display": "none",
                        "height": "300vh",
                        "left": "0",
                        "position": "fixed",
                        "top": "0",
                        "width": "300vw",
                        "z-index": "2147483647"
                    };
                },
                "_kit_function141_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function139_"));
                    e.default = r.default
                },
                "_kit_function142_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        a = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && r(e, t, n);
                            return o(e, t), e
                        },
                        s = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = s(n("_kit_function17_")),
                        u = a(n("_kit_function38_")),
                        c = n("_kit_function188_"),
                        d = s(n("_kit_function200_")),
                        h = function() {
                            function t(t) {
                                this.config = t, this.id = d.default.generate(), Object.assign(this, this.config, this.config.params)
                            }
                            return t.prototype.setup = function() {
                                var t, e, n;
                                this.containerElement = c.createElement(i(i({}, null === (t = this.container) || void 0 === t ? void 0 : t.element), {
                                    attributes: i(i({}, null === (n = null === (e = this.container) || void 0 === e ? void 0 : e.element) || void 0 === n ? void 0 : n.attributes), {
                                        id: this.id
                                    })
                                })), document.body.insertAdjacentElement("beforeend", this.containerElement), this.closable && this.createClosableElement(), this.createAdSlot()
                            }, t.prototype.kill = function() {
                                var t, e, n = this;
                                this.timer && clearTimeout(this.timer), null === (t = this.closableContainer) || void 0 === t || t.removeEventListener("click", (function() {
                                    return n.kill()
                                }), !0), null === (e = this.containerElement) || void 0 === e || e.remove()
                            }, t.prototype.createClosableElement = function() {
                                var t = this;
                                this.closableContainer = c.createElement(this.closable.element), this.containerElement.appendChild(this.closableContainer), this.closableContainer.addEventListener("click", (function() {
                                    return t.kill()
                                }))
                            }, t.prototype.createAdSlot = function() {
                                var t = {
                                        productId: this.id,
                                        config: this.config.adSlots[0],
                                        element: this.containerElement,
                                        productName: "InterstitialFullscreen"
                                    },
                                    e = new l.default(t);
                                this.onAdSold(e)
                            }, t.prototype.onAdSold = function(t) {
                                var e = this;
                                u.default.subscribeOnce(u.AD_SOLD + "_" + this.id, (function() {
                                    var n = t.element.querySelector("iframe");
                                    Object.assign(n.style, {
                                        "display": "block",
                                        "height": window.innerHeight + "px",
                                        "left": "0",
                                        "position": "fixed",
                                        "top": "0",
                                        "visibility": "visible",
                                        "width": window.innerWidth + "px"
                                    }), e.closableContainer && (e.closableContainer.style.display = "inline"), e.counterTimer && (e.timer = setTimeout((function() {
                                        return e.kill()
                                    }), 1e3 * e.counterTimer))
                                }))
                            }, t
                        }();
                    e.default = h
                },
                "_kit_function143_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function142_"));
                    e.default = r.default
                },
                "_kit_function144_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function t(t) {
                            this.config = t, this.googletag = window.googletag || {
                                cmd: []
                            }, Object.assign(this, this.config, this.params)
                        }
                        return t.prototype.setup = function() {
                            var t = this;
                            this.googletag.cmd.push((function() {
                                t.slot = t.googletag.defineOutOfPageSlot(t.params.code, t.googletag.enums.OutOfPageFormat.INTERSTITIAL), t.slot && t.slot.addService(window.googletag.pubads()), t.googletag.enableServices(), t.googletag.display(t.slot)
                            }))
                        }, t.prototype.kill = function() {
                            var t;
                            null === (t = window.googletag) || void 0 === t || t.destroySlots([this.slot])
                        }, t
                    }();
                    e.default = n
                },
                "_kit_function145_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function144_"));
                    e.default = r.default
                },
                "_kit_function146_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 46", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        o = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        a = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = n("_kit_function11_"),
                        l = a(n("_kit_function17_")),
                        u = a(n("_kit_function82_")),
                        c = n("_kit_function147_"),
                        d = a(n("_kit_function182_")),
                        h = n("_kit_function188_"),
                        f = n("_kit_function192_"),
                        p = a(n("_kit_function200_")),
                        m = a(n("_kit_function206_")),
                        v = a(n("_kit_function208_")),
                        y = function() {
                            function t(t) {
                                var e = this;
                                this.config = t, this.forbiddenSelectors = [], this.forbiddenTags = [], this.currentAdSlotIndex = 0, this.isKilled = !1, this.mappedAdSlots = [], this.maxSlotCount = "Infinity", this.id = p.default.generate(), this.observerConfig = c.OBSERVER_CONFIG, this.currentNode = void 0, this.slotCount = 0, this.getCurrentY = function() {
                                    var t, n;
                                    return null !== (n = null === (t = e.currentNode) || void 0 === t ? void 0 : t._absoluteTop) && void 0 !== n ? n : e.nodeMapper.currentY
                                }, this.mutationCallback = function(t, n) {
                                    if (!e.isKilled) {
                                        var i = [];
                                        e.checkMutationList(t, i), n.disconnect(), e.handleNodes(e.nodeMapper.map(i)), n.observe(e.targetElement, e.observerConfig)
                                    }
                                }, this.checkMutationList = function(t, e) {
                                    return t.forEach((function(t) {
                                        if ("childList" === t.type) {
                                            var n = t.addedNodes;
                                            f.extractNodes(n, e)
                                        }
                                    }))
                                }, Object.assign(this, this.config, this.config.params), this.placeholder = u.default.getPlaceholderParams(this.placeholder), this.adSlots = o([], r(t.adSlots)), this.insertMethod = this.enabledElements ? this.enabledElements.insertMethod : "beforebegin", this.deepSearchLevel = this.deepSearchLevel >= 0 ? this.deepSearchLevel : 1 / 0, this.forbiddenElements = new Set(o(o([], r(this.forbiddenSelectors)), r(this.forbiddenTags))), this.otherAdsSelectors = new Set(o(o([], r(this.otherAdsSelectors || [])), r(s.OTHER_ADS_SELECTORS)))
                            }
                            return t.prototype.setup = function() {
                                if (this.iframeServe = this.bindToIframe(), this.createNodeMapper(), this.targetElement = this.nodeMapper.target, this.targetElement) {
                                    var t = Array.from(this.targetElement.querySelectorAll("*"));
                                    this.handleNodes(this.nodeMapper.map(t)), this.infinityScroll && this.infinityScrollSetup()
                                }
                            }, t.prototype.kill = function() {
                                this.isKilled = !0, this.mutationObserver && (this.mutationObserver.disconnect(), this.mutationObserver = null), this.mappedAdSlots.forEach((function(t) {
                                    return t.kill()
                                }))
                            }, t.prototype.handleNodes = function(t) {
                                var e = this;
                                this.getNodesFound(t).forEach((function(t) {
                                    e.onSlotFound(t), d.default(t)
                                })), void 0 !== this.currentNode && d.default(this.currentNode), this.nodeMapper.currentY = this.getCurrentY()
                            }, t.prototype.onSlotFound = function(t) {
                                var e, n = this.appendAdContainer(t),
                                    i = {
                                        productId: this.id,
                                        config: this.adSlots[0],
                                        element: n,
                                        productName: "Mapper",
                                        index: this.currentAdSlotIndex,
                                        productContainer: n,
                                        localBranding: this.showBranding
                                    };
                                this.iframeServe instanceof Document || !(null === (e = this.iframeServe) || void 0 === e ? void 0 : e.iframeWindow) || (i.iframeWindow = this.iframeServe.iframeWindow), this.mappedAdSlots.push(new l.default(i)), this.adSlots.length > 1 && (this.currentAdSlotIndex++, this.adSlots.shift())
                            }, t.prototype.bindToIframe = function() {
                                var t = this.target.frameSelector ? v.default.iframeContent(this.target.frameSelector) : null;
                                return !t || t instanceof Document || (this.target.bindTo = null == t ? void 0 : t.iframeDocument), t
                            }, t.prototype.createNodeMapper = function() {
                                this.nodeMapper = new m.default({
                                    target: this.target,
                                    insertMethod: this.insertMethod,
                                    startElementSelector: this.startElementSelector,
                                    endElementSelector: this.endElementSelector,
                                    otherAdsSelectors: Array.from(this.otherAdsSelectors),
                                    otherAdsSelectorDistance: this.otherAdsSelectorDistance,
                                    distance: this.distance,
                                    forbiddenElements: Array.from(this.forbiddenElements),
                                    enabledElements: this.enabledElements,
                                    deepSearchLevel: Number(this.deepSearchLevel),
                                    endElementOffset: this.endElementOffset,
                                    topOffset: this.topOffset
                                })
                            }, t.prototype.getNodesFound = function(t) {
                                var e = this;
                                return t.filter((function(t) {
                                    return !(e.slotCount >= e.maxSlotCount) && (d.default(t), void 0 !== e.currentNode && d.default(e.currentNode), !!e.isNodeViable(t) && (e.pickNode(t), !0))
                                }))
                            }, t.prototype.isNodeViable = function(t) {
                                var e = this.getCurrentY(),
                                    n = t._absoluteTop - e >= this.nodeMapper.distance;
                                return !e || n
                            }, t.prototype.pickNode = function(t) {
                                this.currentNode = t, this.nodeMapper.currentY = this.getCurrentY(), this.slotCount++
                            }, t.prototype.appendAdContainer = function(t) {
                                var e = h.createElement(this.container.element);
                                this.placeholder.enable ? this.createPlaceholder().append({
                                    node: t,
                                    adContainer: e
                                }) : t.insertAdjacentElement(this.insertMethod, e);
                                return e
                            }, t.prototype.createPlaceholder = function() {
                                var t, e = i(i({}, this.placeholder), {
                                    adSlots: [this.adSlots[0]],
                                    insertMethod: this.insertMethod
                                });
                                return new u.default(e, this.iframeServe instanceof Document ? document : null === (t = this.iframeServe) || void 0 === t ? void 0 : t.iframeDocument)
                            }, t.prototype.infinityScrollSetup = function() {
                                this.mutationObserver = new MutationObserver(this.mutationCallback), this.mutationObserver.observe(this.targetElement, this.observerConfig)
                            }, t
                        }();
                    e.default = y
                },
                "_kit_function147_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.OBSERVER_CONFIG = void 0, e.OBSERVER_CONFIG = {
                        attributes: !1,
                        childList: !0,
                        subtree: !0
                    }
                },
                "_kit_function148_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function146_"));
                    e.default = r.default
                },
                "_kit_function149_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 47", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        o = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        a = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = a(n("_kit_function17_")),
                        l = a(n("_kit_function82_")),
                        u = n("_kit_function188_"),
                        c = n("_kit_function192_"),
                        d = a(n("_kit_function200_")),
                        h = n("_kit_function150_"),
                        f = function() {
                            function t(t) {
                                var e = this;
                                this.config = t, this.maxSlotCount = "Infinity", this.adSlots = o([], r(this.config.adSlots)), this.id = d.default.generate(), this.currentAdSlotIndex = 0, this.didObserveOnce = !1, this.isKilled = !1, this.slotCount = 0, this.mutationCallback = function(t, n) {
                                    if (!e.isKilled) {
                                        var i = [];
                                        e.checkMutationList(t, i), n.disconnect();
                                        var r = i.filter((function(t) {
                                            return "" !== e.target.selector && t.matches(e.target.selector)
                                        }));
                                        e.handleNodes(r), r.length && (e.didObserveOnce = !0), e.observeOnce && e.didObserveOnce || n.observe(document.body, h.OBSERVER_CONFIG)
                                    }
                                }, this.checkMutationList = function(t, e) {
                                    return t.forEach((function(t) {
                                        if ("childList" === t.type) {
                                            var n = t.addedNodes;
                                            c.extractNodes(n, e)
                                        }
                                    }))
                                }, Object.assign(this, this.config, this.config.params), this.placeholderObj = l.default.getPlaceholderParams(this.placeholder)
                            }
                            return t.prototype.setup = function() {
                                this.getAllNodes(), this.infinityScroll && this.setupObserve()
                            }, t.prototype.kill = function() {
                                this.isKilled = !0, this.mutationObserver && (this.mutationObserver.disconnect(), this.mutationObserver = null)
                            }, t.prototype.getAllNodes = function() {
                                if (this.includeExisting) {
                                    var t = Array.from(document.body.querySelectorAll(this.target.selector));
                                    this.handleNodes(t)
                                }
                            }, t.prototype.handleNodes = function(t) {
                                var e = this;
                                t.forEach((function(t) {
                                    e.slotCount < e.maxSlotCount && (e.onSlotFound(t), e.slotCount++)
                                }))
                            }, t.prototype.onSlotFound = function(t) {
                                var e = this.appendAdContainer(t),
                                    n = {
                                        config: this.adSlots[0],
                                        element: e,
                                        index: this.currentAdSlotIndex,
                                        localBranding: this.showBranding,
                                        productContainer: e,
                                        productId: this.id,
                                        productName: "MultiInserter"
                                    };
                                this.adSlot = new s.default(n), this.adSlots.length > 1 && (this.currentAdSlotIndex++, this.adSlots.shift())
                            }, t.prototype.appendAdContainer = function(t) {
                                var e = u.createElement(this.container.element);
                                this.placeholderObj.enable ? this.createPlaceholder().append({
                                    node: t,
                                    adContainer: e
                                }) : t.insertAdjacentElement(this.target.insertMethod, e);
                                return e
                            }, t.prototype.createPlaceholder = function() {
                                var t = i(i({}, this.placeholderObj), {
                                    adSlots: [this.adSlots[0]],
                                    insertMethod: this.target.insertMethod
                                });
                                return new l.default(t)
                            }, t.prototype.setupObserve = function() {
                                this.mutationObserver = new MutationObserver(this.mutationCallback), this.mutationObserver.observe(document.body, h.OBSERVER_CONFIG)
                            }, t
                        }();
                    e.default = f
                },
                "_kit_function150_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.OBSERVER_CONFIG = void 0, e.OBSERVER_CONFIG = {
                        attributes: !1,
                        childList: !0,
                        subtree: !0
                    }
                },
                "_kit_function151_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function149_"));
                    e.default = r.default
                },
                "_kit_function152_": (t, e) => {
                    "use strict";
                    e.P = void 0, e.P = window.navigator.userAgent.indexOf("Edge") > -1
                },
                "_kit_function153_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function3_"));
                    e.default = r.default
                },
                "_kit_function154_": (t, e) => {
                    "use strict";
                    e.I = void 0, e.I = 2e3
                },
                "_kit_function155_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function4_"));
                    e.default = r.default
                },
                "_kit_function156_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        a = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && r(e, t, n);
                            return o(e, t), e
                        },
                        s = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = s(n("_kit_function17_")),
                        u = a(n("_kit_function38_")),
                        c = n("_kit_function188_"),
                        d = s(n("_kit_function200_")),
                        h = s(n("_kit_function208_")),
                        f = n("_kit_function157_"),
                        p = function() {
                            function t(t, e) {
                                var n = this;
                                this.config = t, this.type = e, this.id = d.default.generate(), this.barHeight = 18, this.callbackAdSold = function() {
                                    n.bottomBarElement.style.display = "block", n.topBarElement.style.display = "block"
                                }, Object.assign(this, this.config, this.config.params)
                            }
                            return t.prototype.setup = function() {
                                this.targetElement = h.default.findSelector(this.target), this.targetElement && (this.containerElement = c.createElement(i({}, this.container)), this.targetElement.insertAdjacentElement(this.target.insertMethod, this.containerElement), this.styleContainer(this.container), this.createContainer(), this.createContent(), this.createBars(), this.createAdSlot(), u.default.subscribeOnce(u.AD_SOLD + "_" + this.id, this.callbackAdSold))
                            }, t.prototype.kill = function() {
                                var t, e;
                                null === (t = this.adSlot) || void 0 === t || t.kill(), null === (e = this.containerElement) || void 0 === e || e.remove()
                            }, t.prototype.styleContainer = function(t) {
                                var e, n, r, o, a, s, l, u, c, d, h, p, m, v, y, g, _, b, E, S, w, C, O, T = i(i({}, f.PRIMARY_CONTAINER_STYLES), {
                                        "background-color": null !== (n = null === (e = null == t ? void 0 : t.styles) || void 0 === e ? void 0 : e["background-color"]) && void 0 !== n ? n : "#fff",
                                        "width": null === (r = null == t ? void 0 : t.styles) || void 0 === r ? void 0 : r.width
                                    }),
                                    A = {
                                        "height": null !== (a = null === (o = null == t ? void 0 : t.styles) || void 0 === o ? void 0 : o.height) && void 0 !== a ? a : "75vh",
                                        "max-height": null !== (l = null === (s = null == t ? void 0 : t.styles) || void 0 === s ? void 0 : s.height) && void 0 !== l ? l : "75vh",
                                        "margin": null === (u = null == t ? void 0 : t.styles) || void 0 === u ? void 0 : u.margin,
                                        "margin-top": null === (c = null == t ? void 0 : t.styles) || void 0 === c ? void 0 : c["margin-top"],
                                        "margin-bottom": null === (d = null == t ? void 0 : t.styles) || void 0 === d ? void 0 : d["margin-bottom"],
                                        "margin-right": null === (h = null == t ? void 0 : t.styles) || void 0 === h ? void 0 : h["margin-right"],
                                        "margin-left": null === (p = null == t ? void 0 : t.styles) || void 0 === p ? void 0 : p["margin-left"]
                                    },
                                    N = {
                                        "height": null !== (v = null === (m = null == t ? void 0 : t.styles) || void 0 === m ? void 0 : m.height) && void 0 !== v ? v : "200px",
                                        "max-height": null !== (g = null === (y = null == t ? void 0 : t.styles) || void 0 === y ? void 0 : y.height) && void 0 !== g ? g : "200px",
                                        "margin": null === (_ = null == t ? void 0 : t.styles) || void 0 === _ ? void 0 : _.margin,
                                        "margin-top": null === (b = null == t ? void 0 : t.styles) || void 0 === b ? void 0 : b["margin-top"],
                                        "margin-bottom": null === (E = null == t ? void 0 : t.styles) || void 0 === E ? void 0 : E["margin-bottom"],
                                        "margin-right": null !== (w = null === (S = null == t ? void 0 : t.styles) || void 0 === S ? void 0 : S["margin-right"]) && void 0 !== w ? w : "auto",
                                        "margin-left": null !== (O = null === (C = null == t ? void 0 : t.styles) || void 0 === C ? void 0 : C["margin-left"]) && void 0 !== O ? O : "auto"
                                    },
                                    M = "mobile" === this.type ? A : N,
                                    P = i(i({}, T), M);
                                Object.assign(this.containerElement.style, P)
                            }, t.prototype.createContainer = function() {
                                this.contentWrapper = c.createElement({
                                    styles: i(i({}, f.DEFAULT_WRAPPER_STYLES), {
                                        "clip": "rect(" + this.barHeight + "px, auto, " + (this.containerElement.scrollHeight - this.barHeight) + "px, 0)"
                                    })
                                }), this.containerElement.appendChild(this.contentWrapper)
                            }, t.prototype.createContent = function() {
                                this.content = c.createElement({
                                    styles: i({}, f.DEFAULT_CONTENT_STYLES)
                                }), this.contentWrapper.appendChild(this.content)
                            }, t.prototype.createBars = function() {
                                this.createBottomBar(), this.createTopBar(), this.containerElement.insertAdjacentElement("beforeend", this.bottomBarElement), this.containerElement.insertAdjacentElement("afterbegin", this.topBarElement)
                            }, t.prototype.createBottomBar = function() {
                                var t, e, n, r = i(i({}, this.getBarStyles(null === (t = this.bottomBar) || void 0 === t ? void 0 : t.styles)), {
                                    "bottom": "0"
                                });
                                this.bottomBarElement = c.createElement({
                                    name: "span",
                                    classes: null === (e = this.bottomBar) || void 0 === e ? void 0 : e.classes,
                                    innerHTML: null === (n = this.bottomBar) || void 0 === n ? void 0 : n.innerHTML,
                                    styles: r
                                })
                            }, t.prototype.createTopBar = function() {
                                var t, e, n, r, o = i(i({}, this.getBarStyles(null === (t = this.topBar) || void 0 === t ? void 0 : t.styles)), {
                                    "top": "0"
                                });
                                this.topBarElement = c.createElement({
                                    name: "span",
                                    classes: null === (e = this.topBar) || void 0 === e ? void 0 : e.classes,
                                    innerHTML: null !== (r = null === (n = this.topBar) || void 0 === n ? void 0 : n.innerHTML) && void 0 !== r ? r : "Ad",
                                    styles: o
                                })
                            }, t.prototype.getBarStyles = function(t) {
                                var e, n, r, o, a, s, p, q;
                                return i(i({}, f.DEFAULT_BAR_STYLES), {
                                    "background-color": null !== (e = null == t ? void 0 : t["background-color"]) && void 0 !== e ? e : "#000",
                                    "border-radius": null !== (p = null == t ? void 0 : t["border-radius"]) && void 0 !== p ? p : "0",
                                    "margin": null !== (q = null == t ? void 0 : t["margin"]) && void 0 !== q ? q : "0",
                                    "color": null !== (n = null == t ? void 0 : t["color"]) && void 0 !== n ? n : "#f00",
                                    "font-family": null !== (r = null == t ? void 0 : t["font-family"]) && void 0 !== r ? r : "Verdana, sans-serif",
                                    "font-size": null !== (o = null == t ? void 0 : t["font-size"]) && void 0 !== o ? o : "11px",
                                    "height": this.barHeight + "px",
                                    "letter-spacing": null !== (a = null == t ? void 0 : t["letter-spacing"]) && void 0 !== a ? a : "0",
                                    "line-height": this.barHeight + "px",
                                    "z-index": null !== (s = null == t ? void 0 : t["z-index"]) && void 0 !== s ? s : "100"
                                })
                            }, t.prototype.createAdSlot = function() {
                                var t = {
                                    additionalOptions: {
                                        height: this.containerElement.style.height
                                    },
                                    config: this.adSlots[0],
                                    element: this.content,
                                    localBranding: this.showBranding,
                                    productContainer: this.containerElement,
                                    productId: this.id,
                                    productName: this.name
                                };
                                this.adSlot = new l.default(t)
                            }, t
                        }();
                    e.default = p
                },
                "_kit_function157_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.PRIMARY_CONTAINER_STYLES = e.DEFAULT_WRAPPER_STYLES = e.DEFAULT_CONTENT_STYLES = e.DEFAULT_BAR_STYLES = void 0, e.DEFAULT_BAR_STYLES = {
                        "display": "none",
                        "width": "100%",
                        "text-align": "center"
                    }, e.DEFAULT_CONTENT_STYLES = {
                        "display": "flex",
                        "width": "100vw",
                        "height": "100vh",
                        "position": "fixed",
                        "top": "0",
                        "justify-content": "center",
                        "align-items": "center",
                        "transform": "translate3d(0,0,0)"
                    }, e.DEFAULT_WRAPPER_STYLES = {
                        "display": "flex",
                        "height": "100%",
                        "width": "100%",
                        "position": "absolute",
                        "top": "0",
                        "left": "0",
                        "justify-content": "center",
                        "align-items": "center"
                    }, e.PRIMARY_CONTAINER_STYLES = {
                        "display": "flex",
                        "position": "relative",
                        "flex-direction": "column",
                        "justify-content": "space-between",
                        "overflow": "hidden"
                    }
                },
                "_kit_function158_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function156_"));
                    e.default = r.default
                },
                "_kit_function159_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function138_")),
                        o = i(n("_kit_function141_")),
                        a = i(n("_kit_function143_")),
                        s = i(n("_kit_function145_")),
                        l = i(n("_kit_function148_")),
                        u = i(n("_kit_function151_")),
                        c = i(n("_kit_function153_")),
                        d = i(n("_kit_function155_")),
                        h = i(n("_kit_function158_")),
                        f = i(n("_kit_function162_")),
                        p = i(n("_kit_function165_")),
                        m = i(n("_kit_function168_")),
                        v = i(n("_kit_function170_")),
                        y = i(n("_kit_function173_")),
                        g = function() {
                            this.getInstance = function(t, e) {
                                switch (t) {
                                    case "Sticky":
                                        return new p.default(e);
                                    case "Inserter":
                                        return new r.default(e);
                                    case "MultiInserter":
                                        return new u.default(e);
                                    case "Mapper":
                                        return new l.default(e);
                                    case "Zombie":
                                        return new y.default(e);
                                    case "WCV-Float":
                                        return new m.default(e);
                                    case "WCV-MultiFloat":
                                        return new v.default(e);
                                    case "Old-Float":
                                        return new c.default(e);
                                    case "Old-MultiFloat":
                                        return new d.default(e);
                                    case "StaticInserter":
                                        return new f.default(e);
                                    case "Interstitial":
                                        return new o.default(e);
                                    case "InterstitialFullscreen":
                                        return new a.default(e);
                                    case "InterstitialGoogle":
                                        return new s.default(e);
                                    case "WindowInContentDesktop":
                                        return new h.default(e, "desktop");
                                    case "WindowInContentMobile":
                                        return new h.default(e, "mobile");
                                    default:
                                        throw new Error("Unknown product name")
                                }
                            }
                        };
                    e.default = new g
                },
                "_kit_function160_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 48", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        o = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = o(n("_kit_function17_")),
                        s = o(n("_kit_function82_")),
                        l = n("_kit_function188_"),
                        u = n("_kit_function190_"),
                        c = n("_kit_function192_"),
                        d = o(n("_kit_function198_")),
                        h = o(n("_kit_function200_")),
                        f = n("_kit_function161_"),
                        p = function() {
                            function t(t) {
                                var e = this;
                                this.config = t, this.observerConfig = f.OBSERVER_CONFIG, this.isKilled = !1, this.getSizeAttributeType = function() {
                                    return window.screen.width < 971 ? "sizesMobile" : "sizesDesktop"
                                }, this.getCurrentSlots = function() {
                                    return Array.from(document.querySelectorAll("ins" + f.INS_CLASS + ":not(" + f.AD_CREATOR + ")")) || []
                                }, this.setSizes = function(t, e) {
                                    var n = u.deepClone(t).adUnits.map((function(t) {
                                        return t.map((function(t) {
                                            if (t.type === "dfp") {
                                                if (!t.params.sizes.length) {
                                                    t.params.sizes = e.sizes;
                                                }
                                            } else if (t.type === "pb") {
                                                if (!t.params.mediaTypes.banner.sizes.length) {
                                                    t.params.mediaTypes.banner.sizes = e.sizes;
                                                }
                                            }
                                            return t;
                                        }))
                                    }));
                                    return i(i({}, t), {
                                        adUnits: n
                                    })
                                }, this.mutationCallback = function(t) {
                                    if (!e.isKilled) {
                                        var n = [];
                                        e.sizeAttributeType = e.getSizeAttributeType(), e.extractNodesFromMutations(t, n), e.mutationObserver.disconnect();
                                        var i = n.filter((function(t) {
                                            return t.matches(f.INS_CLASS)
                                        }));
                                        i.length && e.checkSlots(i), e.mutationObserver.observe(document.body, e.observerConfig)
                                    }
                                }, this.extractNodesFromMutations = function(t, e) {
                                    t.filter((function(t) {
                                        return "childList" === t.type
                                    })).forEach((function(t) {
                                        var n = t.addedNodes;
                                        c.extractNodes(n, e)
                                    }))
                                }, this.getDeviceType = function() {
                                    return window.screen.width < 971 ? "mobile" : "desktop"
                                }, this.appendStyleToHTML = function(t) {
                                    var e = l.createElement({
                                        name: "style",
                                        innerHTML: t,
                                        classes: ["injectStyles"]
                                    });
                                    document.head.appendChild(e)
                                }, this.checkIfClassesAreValid = function(t) {
                                    var e = t.className;
                                    return t.classList && e && !e.includes(f.AD_CREATOR)
                                }, Object.assign(this, this.config, this.config.params), this.placeholderConfig = s.default.getPlaceholderParams(this.placeholder)
                            }
                            return t.prototype.setup = function() {
                                this.sizeAttributeType = this.getSizeAttributeType(), this.currentSlots = this.getCurrentSlots(), this.currentSlots.length && this.checkSlots(this.currentSlots), this.mutationObserver = new MutationObserver(this.mutationCallback), this.mutationObserver.observe(document.body, this.observerConfig)
                            }, t.prototype.kill = function() {
                                this.isKilled = !0, this.mutationObserver && (this.mutationObserver.disconnect(), this.mutationObserver = null)
                            }, t.prototype.stylePlaceholder = function() {
                                var t = this;
                                if (this.placeholderConfig.enable) {
                                    var e = [];
                                    if (this.checkIfHeightsShouldBeStyled(e)) {
                                        var n = this.getDeviceType();
                                        this.styleHeights(n)
                                    }
                                    e.forEach((function(e) {
                                        return t.appendStyleToHTML(e)
                                    }))
                                }
                            }, t.prototype.checkSlots = function(t) {
                                var e = this;
                                t.filter(this.checkIfClassesAreValid).forEach((function(t) {
                                    var n, i;
                                    t.classList.add(f.AD_CREATOR);
                                    var r = e.getElementData(t);
                                    if (!(null === (n = e.disableAdSlots) || void 0 === n ? void 0 : n.includes(r.slot))) {
                                        var o = null === (i = e.dataSlots) || void 0 === i ? void 0 : i.indexOf(r.slot),
                                            a = e.adSlots[o];
                                        a && e.adToAdSlot(e.setSizes(a, r), t, o)
                                    }
                                }))
                            }, t.prototype.getElementData = function(t) {
                                var e, n = {
                                    slot: Number(t.dataset.slot) || null
                                };
                                return t.dataset[this.sizeAttributeType] && n.slot && (n.sizes = null === (e = t.dataset[this.sizeAttributeType].split(",")) || void 0 === e ? void 0 : e.map((function(t) {
                                    return t.split("x")
                                })).map((function(t) {
                                    return t.map(Number)
                                })), !n.sizes) ? {} : n
                            }, t.prototype.adToAdSlot = function(t, e, n) {
                                var i = h.default.generate(),
                                    r = l.createElement({
                                        name: "DIV",
                                        styles: {
                                            "min-height": "1px",
                                            "min-width": "1px"
                                        }
                                    });
                                this.placeholderConfig.enable ? this.createPlaceholder(t).append({
                                    node: e,
                                    adContainer: r
                                }) : e.insertAdjacentElement("afterbegin", r);
                                var o = {
                                    productId: i,
                                    config: t,
                                    element: r,
                                    productName: "StaticInserter",
                                    index: n,
                                    productContainer: r,
                                    localBranding: this.showBranding
                                };
                                return new a.default(o)
                            }, t.prototype.checkIfHeightsShouldBeStyled = function(t) {
                                var e, n = this,
                                    i = !1;
                                return null === (e = this.adSlots) || void 0 === e || e.forEach((function(e, o) {
                                    var a, s = n.params.dataSlots[o];
                                    if (!(s < 1 || (null === (a = n.params.disableAdSlots) || void 0 === a ? void 0 : a.includes(s)))) {
                                        var l = n.placeholderConfig.maxSize,
                                            u = r(d.default({
                                                adSlots: [e],
                                                maxSize: l
                                            }), 1)[0];
                                        u < 0 ? i = !0 : t.push('ins.adv-ebece06f4a05c1b9cbec8cf755657506[data-slot="' + s + '"] {min-height: ' + u + "px; display: block}")
                                    }
                                })), i
                            }, t.prototype.styleHeights = function(t) {
                                var e = this;
                                f.HEIGHTS.forEach((function(n) {
                                    e.appendStyleToHTML("ins.adv-ebece06f4a05c1b9cbec8cf755657506[data-sizes-" + t + "*=x" + n + "] {min-height: " + (n + 30) + "px; display: block}")
                                }))
                            }, t.prototype.createPlaceholder = function(t) {
                                var e = i(i({}, this.placeholderConfig), {
                                    adSlots: [t],
                                    insertMethod: "afterbegin"
                                });
                                return new s.default(e)
                            }, t
                        }();
                    e.default = p
                },
                "_kit_function161_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.OBSERVER_CONFIG = e.HEIGHTS = e.AD_CREATOR = e.INS_CLASS = void 0, e.INS_CLASS = ".adv-ebece06f4a05c1b9cbec8cf755657506", e.AD_CREATOR = "adCreator", e.HEIGHTS = [50, 90, 100, 250, 300, 600], e.OBSERVER_CONFIG = {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    }
                },
                "_kit_function162_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function160_"));
                    e.default = r.default
                },
                "_kit_function163_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        o = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        a = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && r(e, t, n);
                            return o(e, t), e
                        },
                        s = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = s(n("_kit_function17_")),
                        u = a(n("_kit_function38_")),
                        d = n("_kit_function188_"),
                        h = s(n("_kit_function200_")),
                        f = s(n("_kit_function208_")),
                        m = function() {
                            function t(t) {
                                var e = this;
                                this.config = t, this.id = h.default.generate(), this.innerWrapper = d.createElement({
                                    styles: {
                                        "pointer-events": "all",
                                        "position": "relative",
                                        "display": "flex",
                                        "justify-content": "center",
                                        "background-color": "#fff"
                                    }
                                }), this.spacer = d.createElement({
                                    styles: {
                                        "height": "4px",
                                        "background": "inherit"
                                    }
                                }), this.lastHideLength = null, this.bottomLimiterCallback = function() {
                                    var t = e.bottomLimitElement.getBoundingClientRect()[e.bottomLimiter.stopAt] - window.innerHeight,
                                        n = Math.min(t - e.bottomLimiter.offset, 0);
                                    n !== e.translateValue ? (e.toggleHideOnScrollListener(!1), e.stickyContainerElement.style.transform = "translateY(" + n + "px)") : e.toggleHideOnScrollListener(!0), e.translateValue = n
                                }, this.hideOnScrollCallback = function() {
                                    if (e.stickyContainerElement.style.display = "block", e.isInit) e.isInit = !1;
                                    else {
                                        if (e.isScrollingDown = window.pageYOffset - e.prevPageYOffset >= 0, e.prevPageYOffset = window.pageYOffset, e.hideOnScrollLength && "up" === e.hideOnScroll && !e.isScrollingDown) {
                                            if (e.hideOnScrollDistance(), !e.isAllow) return;
                                            e.lastHideLength = null
                                        }
                                        e.useHideOnTop()
                                    }
                                }, Object.assign(this, t, this.config.params), this.closable && this.createClosableElement()
                            }
                            return t.prototype.setup = function() {
                                this.manageStickyContainer(), this.target ? this.defineTarget() : document.body.appendChild(this.stickyContainerElement);
                                var t = {
                                    productId: this.id,
                                    config: this.config.adSlots[0],
                                    element: this.innerWrapper,
                                    productName: this.config.name,
                                    productContainer: this.stickyContainerElement,
                                    localBranding: this.showBranding
                                };
                                this.adSlot = new l.default(t), this.adjustToConfig()
                            }, t.prototype.kill = function() {
                                var t, e;
                                null === (t = this.closableContainerElement) || void 0 === t || t.removeEventListener("click", this.kill, !0), this.toggleBottomLimiterListener(!1), this.toggleHideOnScrollListener(!1), this.adSlot.kill(), null === (e = this.stickyContainerElement) || void 0 === e || e.remove()
                            }, t.prototype.createClosableElement = function() {
                                var t = this;
                                u.default.subscribeOnce(u.AD_SOLD + "_" + this.id, (function() {
                                    return t.manageClosableContainer()
                                }))
                            }, t.prototype.manageClosableContainer = function() {
                                var t = this;
                                this.closableContainerElement = d.createElement(this.closable.element), this.closableContainerElement.classList.add("closableContainer"), this.innerWrapper.appendChild(this.closableContainerElement), this.closableContainerElement.innerHTML = "<div style=\"width: 9px; height: 9px; position: absolute; opacity: 0.99; top: 50%; left: 50%; transform: translate(-50%, -50%);\"><div style=\"content: ''; display: inline-block; position: absolute; top: 50%; left: 50%; width: calc(100% * 1.25); height: 20%; background-color: #607d8b; transform: translate(-50%, -50%) rotateZ(45deg);\"></div><div style=\"content: ''; display: inline-block; position: absolute; top: 50%; left: 50%; width: calc(100% * 1.25); height: 20%; background-color: #607d8b; transform: translate(-50%, -50%) rotateZ(-45deg);\"></div></div>", this.closableContainerElement.addEventListener("click", (function() {
                                    return t.kill()
                                }), !0)
                            }, t.prototype.manageStickyContainer = function() {
                                this.stickyContainerElement = d.createElement(this.container.element), this.stickyContainerElement.appendChild(this.spacer), this.stickyContainerElement.appendChild(this.innerWrapper)
                            }, t.prototype.defineTarget = function() {
                                var t = f.default.findSelector(this.target);
                                t && t.insertAdjacentElement(this.target.insertMethod, this.stickyContainerElement)
                            }, t.prototype.adjustToConfig = function() {
                                this.hideOnScroll && this.hideOnScrollAction(), this.hideOnTop && this.toggleHideOnScrollListener(!0), this.bottomLimiter && (this.bottomLimitElement = document.querySelector(this.bottomLimiter.selector), this.toggleBottomLimiterListener(!0)), window.scrollY < this.hideOnTop && (this.stickyContainerElement.style.display = "none")
                            }, t.prototype.hideOnScrollAction = function() {
                                this.isHidden = !1, this.prevPageYOffset = window.pageYOffset, this.isInit = !0, this.toggleHideOnScrollListener(!0)
                            }, t.prototype.toggleBottomLimiterListener = function(t) {
                                void 0 === t && (t = !0), this.bottomLimitElement && (t ? window.addEventListener("scroll", this.bottomLimiterCallback, !0) : window.removeEventListener("scroll", this.bottomLimiterCallback, !0))
                            }, t.prototype.toggleHideOnScrollListener = function(t) {
                                void 0 === t && (t = !0), (this.hideOnScroll || this.hideOnTop) && (t ? (window.addEventListener("scroll", this.hideOnScrollCallback, !0), this.stickyContainerElement.style.transition = "0.2s transform ease-out") : (window.removeEventListener("scroll", this.hideOnScrollCallback, !0), this.stickyContainerElement.style.transition = ""))
                            }, t.prototype.hideOnScrollDistance = function() {
                                this.isHidden || null != this.lastHideLength || (this.lastHideLength = window.pageYOffset), this.isAllow = !this.isHidden && window.pageYOffset <= this.hideOnScrollLength || null
                            }, t.prototype.useHideOnTop = function() {
                                switch (typeof this.hideOnTop) {
                                    case "boolean":
                                        this.caseBoolean(), this.checkIfHideOnTop(!0);
                                        break;
                                    case "number":
                                        this.caseNumber(), this.checkIfHideOnTop(this.hideOnTop);
                                        break;
                                    case "undefined":
                                        this.caseUndefined();
                                        break;
                                    default:
                                        throw new Error("Invalid type")
                                }
                            }, t.prototype.caseBoolean = function() {
                                switch (this.hideOnScroll) {
                                    case "down":
                                        return this.checkIfHideOnTop(!0), 0 !== window.pageYOffset ? this.checkScrollDown() : null;
                                    case "up":
                                        return this.checkIfHideOnTop(!0), 0 !== window.pageYOffset ? this.checkScrollUp() : null
                                }
                            }, t.prototype.caseNumber = function() {
                                switch (this.hideOnScroll) {
                                    case "down":
                                        return this.checkIfHideOnTop(this.hideOnTop), window.pageYOffset > this.hideOnTop ? this.checkScrollDown() : null;
                                    case "up":
                                        return this.checkIfHideOnTop(this.hideOnTop), window.pageYOffset > this.hideOnTop ? this.checkScrollUp() : null
                                }
                            }, t.prototype.caseUndefined = function() {
                                switch (this.hideOnScroll) {
                                    case "down":
                                        this.checkScrollDown();
                                        break;
                                    case "up":
                                        this.checkScrollUp()
                                }
                            }, t.prototype.checkScrollDown = function() {
                                if (!this.isHidden && this.isScrollingDown) return "top" === this.type ? this.defineVisibility() : this.defineVisibility("translateY(500%)");
                                this.isHidden && !this.isScrollingDown && this.defineVisibility("", !1)
                            }, t.prototype.checkScrollUp = function() {
                                if (!this.isHidden && !this.isScrollingDown) return "top" === this.type ? this.defineVisibility() : this.defineVisibility("translateY(500%)");
                                this.isHidden && this.isScrollingDown && this.defineVisibility("", !1)
                            }, t.prototype.checkIfHideOnTop = function(t) {
                                !0 === t ? 0 === window.pageYOffset ? this.defineVisibility("translateY(1000%)") : this.defineVisibility("", !1) : 0 != ~~t && (window.pageYOffset <= t ? this.defineVisibility() : this.defineVisibility("", !1))
                            }, t.prototype.defineVisibility = function(t, e) {
                                void 0 === t && (t = "translateY(-1000%)"), void 0 === e && (e = !0), this.stickyContainerElement.style.transform = t, this.stickyContainerElement.style.transition = ".7s", this.isHidden = e
                            }, t
                        }();
                    e.default = m
                },
                "_kit_function165_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function163_"));
                    e.default = r.default
                },
                "_kit_function167_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function17_")),
                        o = n("_kit_function188_"),
                        a = i(n("_kit_function200_")),
                        s = i(n("_kit_function208_")),
                        l = function() {
                            function t(t) {
                                this.config = t, this.id = a.default.generate(), this.placeholderElement = null, this.placeholderEndPoint = 0, this.placeholderStartPoint = 0, Object.assign(this, this.config, this.config.params)
                            }
                            return t.prototype.setup = function() {
                                if (this.targetElement = s.default.findSelector(this.target), this.targetElement) {
                                    this.getPlaceholderPosition(), this.createPlaceholder(), this.addFloatElement();
                                    var t = {
                                        productId: this.id,
                                        config: this.config.adSlots[0],
                                        element: this.floatElement,
                                        productName: "Float",
                                        productContainer: this.floatElement,
                                        localBranding: this.showBranding
                                    };
                                    this.adSlot = new r.default(t)
                                }
                            }, t.prototype.kill = function() {
                                var t;
                                null === (t = this.placeholderElement) || void 0 === t || t.remove(), this.adSlot.kill()
                            }, t.prototype.getPlaceholderPosition = function() {
                                this.bindToIframe(), this.placeholderLength || (this.getPlaceholderEndPosition(), this.getPlaceholderStartPosition())
                            }, t.prototype.bindToIframe = function() {
                                var t = this.target.frameSelector ? s.default.iframeContent(this.target.frameSelector) : null;
                                return t instanceof Document || (this.target.bindTo = null == t ? void 0 : t.iframeDocument), t
                            }, t.prototype.getPlaceholderEndPosition = function() {
                                var t, e, n, i, r, o, a, l;
                                this.bottomLimiterElement = s.default.findSelector({
                                    selector: null === (t = this.bottomLimiter) || void 0 === t ? void 0 : t.selector,
                                    selectorEq: null === (e = this.bottomLimiter) || void 0 === e ? void 0 : e.selectorEq
                                }), "top" === (null === (n = this.bottomLimiter) || void 0 === n ? void 0 : n.stopAt) ? this.placeholderEndPoint = (null === (i = this.bottomLimiterElement) || void 0 === i ? void 0 : i.getBoundingClientRect().top) + window.scrollY + (null !== (r = this.bottomLimiter.offset) && void 0 !== r ? r : 0) : "bottom" === (null === (o = this.bottomLimiter) || void 0 === o ? void 0 : o.stopAt) && (this.placeholderEndPoint = (null === (a = this.bottomLimiterElement) || void 0 === a ? void 0 : a.getBoundingClientRect().bottom) + window.scrollY + (null !== (l = this.bottomLimiter.offset) && void 0 !== l ? l : 0))
                            }, t.prototype.getPlaceholderStartPosition = function() {
                                switch (this.target.insertMethod) {
                                    case "beforebegin":
                                        this.placeholderStartPoint = this.targetElement.getBoundingClientRect().top + window.scrollY - ~~parseInt(this.targetElement.style.marginTop, 10);
                                        break;
                                    case "afterbegin":
                                        this.placeholderStartPoint = this.targetElement.getBoundingClientRect().top + window.scrollY + ~~parseInt(this.targetElement.style.top, 10);
                                        break;
                                    case "beforeend":
                                        if (null !== this.targetElement.lastElementChild) {
                                            var t = this.targetElement.lastElementChild;
                                            this.placeholderStartPoint = this.targetElement.lastElementChild.getBoundingClientRect().bottom + window.scrollY + ~~parseInt(t.style.marginBottom, 10)
                                        } else this.placeholderStartPoint = this.targetElement.getBoundingClientRect().top + window.scrollY;
                                        break;
                                    case "afterend":
                                        this.placeholderStartPoint = this.targetElement.getBoundingClientRect().bottom + window.scrollY + ~~parseInt(this.targetElement.style.marginBottom, 10);
                                        break;
                                    default:
                                        throw new Error("Unknown insertMethod")
                                }
                            }, t.prototype.createPlaceholder = function() {
                                var t;
                                this.placeholderElement = o.createElement({
                                    name: "div",
                                    classes: ["placeholder"],
                                    styles: {
                                        "height": (null !== (t = this.placeholderLength) && void 0 !== t ? t : this.placeholderEndPoint - this.placeholderStartPoint) + "px"
                                    }
                                }), this.targetElement.insertAdjacentElement(this.target.insertMethod, this.placeholderElement)
                            }, t.prototype.addFloatElement = function() {
                                this.floatElement = o.createElement(this.float.element), this.floatElement.id = this.id, this.floatElement.style.position = "sticky", this.floatElement.style.top = this.stickyMargin + "px", this.placeholderElement.appendChild(this.floatElement)
                            }, t
                        }();
                    e.default = l
                },
                "_kit_function168_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function167_"));
                    e.default = r.default
                },
                "_kit_function169_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 49", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        r = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        o = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = o(n("_kit_function168_")),
                        s = o(n("_kit_function182_")),
                        l = n("_kit_function188_"),
                        u = n("_kit_function190_"),
                        c = o(n("_kit_function208_")),
                        d = function() {
                            function t(t) {
                                this.config = t, this.maxSlotCount = "Infinity", this.adSlots = r([], i(this.config.adSlots)), this.floatInstances = [], this.floatsCount = 0, Object.assign(this, this.config, this.config.params)
                            }
                            return t.prototype.setup = function() {
                                this.bindToIframe(), this.targetElement = c.default.findSelector(this.target), this.targetElement && (this.addColumnElement(), this.distributeFloats())
                            }, t.prototype.kill = function() {
                                var t;
                                this.floatInstances.forEach((function(t) {
                                    return t.kill()
                                })), null === (t = this.columnElement) || void 0 === t || t.remove()
                            }, t.prototype.bindToIframe = function() {
                                var t = this.target.frameSelector ? c.default.iframeContent(this.target.frameSelector) : null;
                                return t instanceof Document || (this.target.bindTo = null == t ? void 0 : t.iframeDocument), t
                            }, t.prototype.addColumnElement = function() {
                                this.columnElement = l.createElement(this.column.element), this.targetElement.insertAdjacentElement(this.target.insertMethod, this.columnElement)
                            }, t.prototype.distributeFloats = function() {
                                var t = this.getVerticalSpace();
                                t < this.distance && (this.distance = t);
                                var e = Math.floor(t / this.distance);
                                for (this.floatsCount; this.floatsCount < e && this.floatsCount < this.maxSlotCount; this.floatsCount++) this.floatsCount === e - 1 && (this.distance = t - this.distance * this.floatsCount), this.addNewFloat()
                            }, t.prototype.getVerticalSpace = function() {
                                if (this.placeholderLength) return this.placeholderLength;
                                var t = this.bottomLimiter,
                                    e = t.stopAt,
                                    n = t.offset;
                                return this.bottomLimiterElement = c.default.findSelector(this.bottomLimiter), s.default(this.columnElement), s.default(this.bottomLimiterElement), ("top" === e ? this.bottomLimiterElement._absoluteTop : this.bottomLimiterElement._absoluteBottom) + (null != n ? n : 0) - this.columnElement._absoluteTop
                            }, t.prototype.addNewFloat = function() {
                                var t = this.createFloatContainer();
                                this.columnElement.appendChild(t), this.onSlotFound(t)
                            }, t.prototype.createFloatContainer = function() {
                                var t = l.createElement(this.floatContainer.element),
                                    e = {
                                        "box-sizing": "border-box",
                                        "width": "100%",
                                        "height": this.distance + "px"
                                    };
                                return Object.assign(t.style, e), t
                            }, t.prototype.onSlotFound = function(t) {
                                var e = u.deepClone(this.config);
                                e.adSlots = [this.adSlots[0]], this.adSlots.length > 1 && this.adSlots.shift(), e.params.target = {
                                    selector: "#" + t.id,
                                    insertMethod: "beforeend"
                                }, e.params.placeholderLength = void 0, e.params.bottomLimiter = {
                                    selector: "#" + t.id,
                                    stopAt: "bottom",
                                    offset: 0
                                }, t.style.position = "relative";
                                var n = new a.default(e);
                                this.floatInstances.push(n), n.setup()
                            }, t
                        }();
                    e.default = d
                },
                "_kit_function170_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function169_"));
                    e.default = r.default
                },
                "_kit_function171_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 50", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        o = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        a = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = n("_kit_function11_"),
                        l = a(n("_kit_function17_")),
                        u = a(n("_kit_function82_")),
                        c = n("_kit_function172_"),
                        d = a(n("_kit_function182_")),
                        h = n("_kit_function188_"),
                        f = n("_kit_function192_"),
                        p = a(n("_kit_function200_")),
                        m = a(n("_kit_function208_")),
                        v = function() {
                            function t(t) {
                                var e, n, i, a = this;
                                this.config = t, this.maxSlotCount = "Infinity", this.otherAdsSelectors = [], this.startElementOffset = 0, this.checkHeightOnly = !1, this.endElementOffset = 0, this.emptyIframes = c.EMPTY_IFRAMES, this.id = p.default.generate(), this.insertMethod = "beforebegin", this.observerConfig = c.OBSERVER_CONFIG, this.otherAds = [], this.zombies = c.DEFAULT_ZOMBIES, this.currentAdSlotIndex = 0, this.isKilled = !1, this.isStartObserve = !0, this.initialStyles = h.createElement({
                                    name: "style",
                                    innerHTML: "[data-other-ad]:empty{display: none !important;}"
                                }), this.killObserver = function(t) {
                                    if (t) return t.disconnect(), null
                                }, this.updateZombieCoordinates = function() {
                                    return a.zombies.forEach((function(t) {
                                        var e = t.element;
                                        return d.default(e)
                                    }))
                                }, this.checkIfIncludesOtherAds = function(t) {
                                    return a.otherAds.some((function(e) {
                                        return e.contains(t)
                                    }))
                                }, this.checkIfDistanceKept = function(t) {
                                    return d.default(t), a.checkIfWithinBoundary(t) && a.checkIfZombieDistanceKept(t)
                                }, this.checkIfNodeAboveElement = function(t, e, n) {
                                    return d.default(t), d.default(e), t._absoluteTop < e._absoluteBottom + n
                                }, this.checkIfZombieDistanceKept = function(t) {
                                    return Array.from(a.zombies).every((function(e) {
                                        var n = r(e, 2)[1].element;
                                        return d.default(n), t._absoluteBottom <= n._absoluteTop - a.distance || t._absoluteTop >= n._absoluteBottom + a.distance
                                    }))
                                }, this.checkHasSlotsLeft = function() {
                                    return a.zombies.size < a.maxSlotCount
                                }, this.getOtherAdCallback = function(t) {
                                    return function(e, n) {
                                        if (!a.checkIfKilledOrTimeStamped() && (null == n || n.disconnect(), a.checkIfOurAdAppears({
                                                mutationsList: e,
                                                observer: n,
                                                otherAd: t
                                            }))) {
                                            t.dataset.otherAd = "otherAd", a.hideEmptyIframes();
                                            var i = t.querySelector("iframe:not([id*='121764058'])");
                                            a.checkIfOtherAdSold(t, i) ? a.isStartObserve = a.hideOurAd({
                                                otherAd: t,
                                                frame: i
                                            }) : a.showOurAd({
                                                otherAd: t
                                            }), a.isStartObserve && (null == n || n.observe(t, a.observerConfig))
                                        }
                                    }
                                }, this.checkIfKilledOrTimeStamped = function() {
                                    return a.isKilled || !a.checkTimestamp()
                                }, this.checkIfOurAd = function(t) {
                                    return t.id.includes("121764058") || t.id.includes("oa-360")
                                }, this.hideEmptyIframes = function() {
                                    return a.emptyIframes.forEach((function(t) {
                                        var e = t.parentElement;
                                        e.style.display = "none !important", e.setAttribute("style", "display: none!important")
                                    }))
                                }, this.otherAdSold = function(t) {
                                    var e = t.frameHeight,
                                        n = t.otherAd,
                                        i = t.frame,
                                        r = t.height;
                                    return (a.checkHeightOnly || parseInt("" + e, 10) > 10 || a.areThereOtherContainers({
                                        otherAd: n,
                                        frame: i
                                    })) && r >= a.heightTreshold
                                }, this.areThereOtherContainers = function(t) {
                                    var e, n = t.otherAd,
                                        i = t.frame;
                                    return o([], r(n.children)).filter((function(t) {
                                        return "SCRIPT" !== t.tagName
                                    })).length > 1 || i && (null === (e = o([], r(null == i ? void 0 : i.parentNode.children))) || void 0 === e ? void 0 : e.some((function(t) {
                                        return t.childElementCount > 1
                                    })))
                                }, this.checkIfOtherAdFrameHidden = function(t) {
                                    var e = t.otherAd,
                                        n = t.frame;
                                    return !a.checkHeightOnly && n && !a.areThereOtherContainers({
                                        otherAd: e,
                                        frame: n
                                    }) && ("none" === n.style.display || "hidden" === n.style.visibility)
                                }, this.checkIfOnlyOneParent = function(t) {
                                    return t.element.parentNode && !t.element.parentNode.parentNode
                                }, this.infinityMutationCallback = function(t, e) {
                                    if (!a.isKilled) {
                                        e.disconnect();
                                        var n = a.getValidNodesFromMutation(t);
                                        n.length && a.subscribeValidZombies(n), a.checkHasSlotsLeft() && e.observe(a.targetElement, a.observerConfig)
                                    }
                                }, this.checkIfNewAd = function(t) {
                                    return 1 === t.nodeType && t.matches(a.otherAdsSelectors.join(", "))
                                }, Object.assign(this, this.config, this.config.params), this.insertMethod = null !== (i = null === (n = this.target) || void 0 === n ? void 0 : n.insertMethod) && void 0 !== i ? i : this.insertMethod, this.includeAllOtherAds && (e = this.otherAdsSelectors).push.apply(e, o([], r(s.OTHER_ADS_SELECTORS))), this.placeholder = u.default.getPlaceholderParams(this.placeholder, {
                                    maxSize: !0,
                                    enable: !0
                                }), this.appendInitialStyles()
                            }
                            return t.prototype.setup = function() {
                                if (this.targetElement = m.default.findSelector(this.target), this.targetElement) {
                                    var t = Array.from(this.targetElement.querySelectorAll(this.otherAdsSelectors.join(", ")));
                                    this.findBoundarySelectors(), this.subscribeValidZombies(t), this.infinityScroll && this.checkHasSlotsLeft() && this.initObserverForInfinity()
                                }
                            }, t.prototype.kill = function() {
                                var t = this;
                                this.isKilled = !0, this.mutationObserver = this.killObserver(this.mutationObserver), this.zombies.forEach((function(e) {
                                    var n;
                                    null === (n = e.element) || void 0 === n || n.remove(), e.mutationObserver = t.killObserver(e.mutationObserver)
                                }))
                            }, t.prototype.appendInitialStyles = function() {
                                document.body.appendChild(this.initialStyles)
                            }, t.prototype.findBoundarySelectors = function() {
                                this.startElement = this.startElementSelector ? document.querySelector(this.startElementSelector) : null, this.endElement = this.endElementSelector ? document.querySelector(this.endElementSelector) : null
                            }, t.prototype.subscribeValidZombies = function(t) {
                                var e = this;
                                this.updateZombieCoordinates(), t.filter((function(t) {
                                    return !e.checkIfOurAd(t)
                                })).forEach((function(t) {
                                    e.checkIfIncludesOtherAds(t) || e.checkIfDistanceKept(t) && e.subscribeZombie(t)
                                }))
                            }, t.prototype.checkIfWithinBoundary = function(t) {
                                return (!this.startElement || !this.checkIfNodeAboveElement(t, this.startElement, this.startElementOffset)) && !(this.endElement && this.checkIfNodeAboveElement(this.endElement, t, this.endElementOffset))
                            }, t.prototype.subscribeZombie = function(t) {
                                if (!this.otherAds.includes(t) && this.checkHasSlotsLeft()) {
                                    this.otherAds.push(t), this.placeholder.enable && this.addMinSizeToParent(t), this.adSlot = this.createAdSlot(t), this.zombies.set(t, this.adSlot);
                                    var e = this.getOtherAdCallback(t);
                                    e(null, null), this.mutationObserver = new MutationObserver(e), this.mutationObserver.observe(t, this.observerConfig)
                                }
                            }, t.prototype.addMinSizeToParent = function(t) {
                                if (["beforebegin", "afterend"].includes(this.insertMethod)) {
                                    if (t.parentElement.childElementCount > 1 || "1" === getComputedStyle(t).flex[0]) return;
                                    u.default.changePlaceholderHeight(t.parentElement), t.parentElement.style.minHeight = t.parentElement.offsetHeight + "px"
                                } else t.style.minHeight = t.offsetHeight + "px", u.default.changePlaceholderHeight(t)
                            }, t.prototype.createAdSlot = function(t) {
                                var e = this.appendAdContainer(t);
                                d.default(e);
                                var n = {
                                    productId: this.id,
                                    config: this.adSlots[0],
                                    element: e,
                                    productName: "Zombie",
                                    index: this.currentAdSlotIndex,
                                    productContainer: e,
                                    localBranding: this.showBranding
                                };
                                return this.adSlot = new l.default(n), this.adSlots.length > 1 && (this.currentAdSlotIndex++, this.adSlots.shift()), this.adSlot
                            }, t.prototype.appendAdContainer = function(t) {
                                var e = h.createElement(this.container.element);
                                return this.placeholder.enable ? this.enablePlaceholder(t, e) : t.insertAdjacentElement(this.insertMethod, e), e
                            }, t.prototype.enablePlaceholder = function(t, e) {
                                var n = this.createPlaceholder().create();
                                this.placeholder.floatingUnit && u.default.addFloatStyles(e, this.placeholder.floatingUnit), t.insertAdjacentElement(this.insertMethod, n), n.insertAdjacentElement("afterbegin", e)
                            }, t.prototype.createPlaceholder = function() {
                                var t = i(i({}, this.placeholder), {
                                    adSlots: [this.adSlots[0]],
                                    insertMethod: this.insertMethod
                                });
                                return new u.default(t)
                            }, t.prototype.checkIfOtherAdSold = function(t, e) {
                                var n, i = t.getBoundingClientRect().height,
                                    r = (null !== (n = e && getComputedStyle(e)) && void 0 !== n ? n : {}).height,
                                    o = void 0 === r ? 0 : r;
                                return this.otherAdSold({
                                    frameHeight: o,
                                    otherAd: t,
                                    frame: e,
                                    height: i
                                })
                            }, t.prototype.checkTimestamp = function() {
                                return !(Date.now() - this.timestamp < 250) && (this.timestamp = Date.now(), !0)
                            }, t.prototype.checkIfOurAdAppears = function(t) {
                                var e = this,
                                    n = t.mutationsList,
                                    i = t.observer,
                                    r = t.otherAd;
                                return !(null == n ? void 0 : n.some((function(t) {
                                    var n = t.target;
                                    return e.checkIfOurAd(n)
                                }))) || (null == i || i.observe(r, this.observerConfig), !1)
                            }, t.prototype.hideOurAd = function(t) {
                                var e, n, i = t.otherAd,
                                    r = t.frame;
                                if (this.adSlot = this.zombies.get(i), !this.adSlot) return !0;
                                var o = this.placeholder.enable ? this.adSlot.productContainer.parentElement : null;
                                return this.checkIfOtherAdFrameHidden({
                                    frame: r,
                                    otherAd: i
                                }) ? (this.adSlot.element.style.display = "", this.adSlot.element.style.visibility = "", this.adSlot.unblock(), !1) : (null === (e = this.adSlot) || void 0 === e || e.kill(), null === (n = this.adSlot) || void 0 === n || n.block(), null == o || o.remove(), this.zombies.delete(i), !0)
                            }, t.prototype.showOurAd = function(t) {
                                var e = t.otherAd;
                                this.adSlot = this.zombies.get(e), (!this.adSlot || !this.adSlot && this.checkIfOnlyOneParent(this.adSlot)) && (this.adSlot = this.createAdSlot(e), this.zombies.set(e, this.adSlot)), this.adSlot.element.style.display = "", this.adSlot.element.style.visibility = "", this.adSlot.unblock()
                            }, t.prototype.initObserverForInfinity = function() {
                                this.mutationObserver = new MutationObserver(this.infinityMutationCallback), this.mutationObserver.observe(this.targetElement, this.observerConfig)
                            }, t.prototype.getValidNodesFromMutation = function(t) {
                                var e = this,
                                    n = [];
                                return t.forEach((function(t) {
                                    "childList" === t.type ? f.extractNodes(t.addedNodes, n) : "attributes" === t.type && n.push(t.target)
                                })), o([], r(new Set(n))).filter(this.checkIfNewAd).filter((function(t) {
                                    return !e.checkIfOurAd(t)
                                }))
                            }, t
                        }();
                    e.default = v
                },
                "_kit_function172_": function(t, e) {
                    "use strict";
                    var n = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 51", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        i = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.EMPTY_IFRAMES = e.DEFAULT_ZOMBIES = e.OBSERVER_CONFIG = void 0, e.OBSERVER_CONFIG = {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    }, e.DEFAULT_ZOMBIES = new Map, e.EMPTY_IFRAMES = i(i([], n(document.querySelectorAll("iframe[id*='google_ads_iframe'][style*=\"display: none\"]"))), n(document.querySelectorAll("iframe[id*='google_ads_iframe'][style*=\"display:none\"]")))
                },
                "_kit_function173_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function171_"));
                    e.default = r.default
                },
                "_kit_function174_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function201_")),
                        o = n("_kit_function175_"),
                        a = function() {
                            function t(t, e, n) {
                                var i = this;
                                this.adultContent = t, this.sensitivityType = e, this.violationType = n, this.isCurrentPageView = function(t) {
                                    return i.pageView === t
                                }
                            }
                            return t.prototype.sensitivityValidation = function(t) {
                                return this.checkSensitivity(t, this.sensitivityType);                            }, t.prototype.violationValidation = function(t) {
                                return !this.violationType || !this.violationType.includes("all") && ((!this.violationType.includes("video") || !o.ENTITY_VIDEO.includes(t.name)) && !(this.violationType.includes("display") && !o.ENTITY_VIDEO.includes(t.name) && !o.ENTITY_WITHOUT_VIOLATION.includes(t.name)))
                            }, t.prototype.checkTrigger = function(t) {
                                t.trigger ? this.acceptTrigger(t) : r.default(t) && this.startEntity(t)
                            }, t
                        }();
                    e.default = a
                },
                "_kit_function175_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.ENTITY_WITHOUT_VIOLATION = e.ENTITY_VIDEO = void 0, e.ENTITY_VIDEO = ["AdPlayer", "CarodaPlayer", "Distroscale", "MCNPlayer", "MoxTv", "Veedmo", "Vidoomy", "VeedmoAudio"], e.ENTITY_WITHOUT_VIOLATION = ["EventEmitter", "InjectElement", "InjectStyles", "SPA"]
                },
                "_kit_function176_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 52", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        r = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        o = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.isEntityDrawn = e.registerTests = e.drawnTests = e.registerDefinitions = void 0;
                    var a = o(n("_kit_function41_")),
                        s = o(n("_kit_function86_")),
                        l = o(n("_kit_function184_")),
                        u = o(n("_kit_function201_")),
                        c = n("_kit_function7_"),
                        d = function(t, e, n, i) {
                            return "high" === i ? {
                                bids: []
                            } : i && "sspBids" === t ? function(t, e) {
                                return t.map(l.default).forEach((function(t) {
                                    return function(t, e) {
                                        return t.bids.forEach((function(n, i) {
                                            e.toLowerCase() === n.bidder.toLowerCase() && t.bids.splice(i, 1)
                                        }))
                                    }(e, t)
                                })), e
                            }(e, n) : n
                        };
                    e.registerDefinitions = function(t, e) {
                        var n = t.definitions,
                            i = void 0 === n ? [] : n,
                            r = t.adultContent.sensitivitySources;
                        i.forEach((function(t) {
                            if (u.default(t)) {
                                var n = d(t.type, r, t.params, e);
                                i = n.bids, a.default.setState({
                                    prebidBids: i,
                                    yandexStatIdCounter: 0
                                })
                            }
                            var i
                        }))
                    }, e.drawnTests = new Set;
                    e.registerTests = function(t) {
                        r([], i(t)).forEach((function(t) {
                            var n = new s.default(t);
                            e.drawnTests.add(n.draw())
                        }))
                    };
                    e.isEntityDrawn = function(t) {
                        return !(c.engineConfig.tests && t.test && !e.drawnTests.has(t.test))
                    }
                },
                "_kit_function177_": function(t, e, n) {
                    "use strict";
                    var i, r = this && this.__extends || (i = function(t, e) {
                            return (i = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                                })(t, e)
                        }, function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                            function n() {
                                this.constructor = t
                            }
                            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                        }),
                        o = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 53", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        a = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var s = a(n("_kit_function92_")),
                        l = a(n("_kit_function118_")),
                        u = a(n("_kit_function174_")),
                        c = a(n("_kit_function201_")),
                        d = n("_kit_function176_"),
                        h = function(t) {
                            function e(e, n, i, r, o, a, s) {
                                void 0 === n && (n = []);
                                var u = t.call(this, e, i, r) || this;
                                return u.adultContent = e, u.plugins = n, u.sensitivityType = i, u.violationType = r, u.restart = o, u.incrementPageView = a, u.getPageView = s, u.activePlugins = [], u.startEntity = function(t) {
                                    var e = u.createInstance(t.name, t.params);
                                    e && (e.setup(), u.activePlugins.push(e))
                                }, u.isSensitiveContentActive = function(t, e) {
                                    return 0 !== e.length && e.some((function(e) {
                                        return e.toLowerCase() === t.name.toLowerCase() && t.isSensitive
                                    }))
                                }, u.createInstance = function(t, e) {
                                    return l.default.getInstance(t, e)
                                }, u.pageView = s(), u
                            }
                            return r(e, t), e.prototype.registerPlugins = function() {
                                var t = this;
                                this.plugins.forEach((function(e) {
                                    t.violationValidation(e) && d.isEntityDrawn(e) && ("SPA" === e.name ? t.useSPA(e) : t.registerOnePlugin(e))
                                }))
                            }, e.prototype.checkSensitivity = function(t, r) {
                                var e = this.createInstance(t.name, t.params);
                                if (e) return [!this.isSensitiveContentActive(e.bidderSettings, this.adultContent.sensitivitySources)]
                            }, e.prototype.acceptTrigger = function(t) {
                                var e = this;
                                s.default.getInstance(t.trigger)((function() {
                                    return e.isCurrentPageView(e.getPageView()) && c.default(t) && e.startEntity(t)
                                }))
                            }, e.prototype.useSPA = function(t) {
                                var e = this,
                                    n = this.createInstance(t.name, t.params),
                                    i = function() {
                                        n.setup({
                                            restart: e.restart,
                                            incrementPageView: e.incrementPageView
                                        }), e.activePlugins.push(n)
                                    };
                                t.trigger ? s.default.getInstance(t.trigger)((function() {
                                    return c.default(t) && i()
                                })) : i();
                                return !1
                            }, e.prototype.registerOnePlugin = function(t) {
                                d.isEntityDrawn(t) && (o(this.sensitivityValidation(t), 1)[0] && this.checkTrigger(t))
                            }, e
                        }(u.default);
                    e.default = h
                },
                "_kit_function178_": function(t, e, n) {
                    "use strict";
                    var i, r = this && this.__extends || (i = function(t, e) {
                            return (i = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                                })(t, e)
                        }, function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                            function n() {
                                this.constructor = t
                            }
                            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                        }),
                        o = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 54", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        a = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        },
                        s = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var l = s(n("_kit_function92_")),
                        u = s(n("_kit_function159_")),
                        c = s(n("_kit_function174_")),
                        d = n("_kit_function194_"),
                        h = s(n("_kit_function201_")),
                        f = n("_kit_function176_"),
                        p = function(t) {
                            function e(e, n, i, r, o) {
                                void 0 === n && (n = []);
                                var a = t.call(this, e, i, r) || this;
                                return a.adultContent = e, a.products = n, a.sensitivityType = i, a.violationType = r, a.getPageView = o, a.activeProducts = [], a.startEntity = function(t) {
                                    var e = u.default.getInstance(t.name, t);
                                    e && (a.activeProducts.push(e), e.setup())
                                }, a.pageView = o(), a
                            }
                            return r(e, t), e.prototype.registerProducts = function() {
                                var t = this;
                                this.products.map((function(e) {
                                    return t.registerOneProduct(e)
                                }))
                            }, e.prototype.acceptTrigger = function(t) {
                                var e = this;
                                l.default.getInstance(t.trigger)((function() {
                                    return e.isCurrentPageView(e.getPageView()) && h.default(t) && e.startEntity(t)
                                }))
                            }, e.prototype.registerOneProduct = function(t) {
                                if (this.violationValidation(t) && f.isEntityDrawn(t)) {
                                    var e = o(this.sensitivityValidation(t), 2),
                                        n = e[0],
                                        i = e[1];
                                    n && (i && (t.adSlots = i), this.checkTrigger(t))
                                }
                            }, e.prototype.checkSensitivity = function(t, r) {
                                var e = d.filterAdSlots(a([], o(t.adSlots)), r);
                                if (e.length) return [!0, e]
                            }, e
                        }(c.default);
                    e.default = p
                },
                "_kit_function179_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function15_")),
                        o = i(n("_kit_function70_")),
                        a = i(n("_kit_function73_")),
                        s = i(n("_kit_function82_")),
                        l = i(n("_kit_function84_")),
                        u = i(n("_kit_function92_")),
                        c = i(n("_kit_function94_")),
                        d = n("_kit_function176_"),
                        h = i(n("_kit_function177_")),
                        f = i(n("_kit_function178_")),
                        p = i(n("_kit_function200_")),
                        m = i(n("_kit_function201_")),
                        v = function() {
                            function t(t) {
                                var e = this;
                                this.config = t, this.pageView = 1, this.plugins = [], this.products = [], this.violationType = [], this.kill = function() {
                                    e.killAdSlots(), e.killProducts(), e.killPlugins(), e.killContainers(), p.default.reset(), e.removeAdCreator()
                                }, this.isCurrentPageView = function(t) {
                                    return e.pageView === t
                                }, this.incrementPageView = function() {
                                    e.pageView += 1
                                }, this.getPageView = function() {
                                    return e.pageView
                                }, this.isAllowed = function() {
                                    return !(!a.default.isProperDevice(e.config.device) || !e.conditions.checkConditions())
                                }, this.filterPlaceholders = function() {
                                    return e.config.products.filter((function(t) {
                                        return "Inserter" === t.name && d.isEntityDrawn(t) && m.default(t) && !e.violationType.includes("display") && !e.violationType.includes("all")
                                    }))
                                }, this.killAdSlots = function() {
                                    return r.default.adSlots.forEach((function(t) {
                                        return t.kill()
                                    }))
                                }, this.killContainers = function() {
                                    var t = p.default.getAll();
                                    t.forEach((function(t) {
                                        var e, n = document.getElementById(t);
                                        null === (e = null == n ? void 0 : n.remove) || void 0 === e || e.call(n)
                                    })), t.length = 0
                                }, this.removeAdCreator = function() {
                                    document.querySelectorAll(".adCreator").forEach((function(t) {
                                        return t.classList && t.classList.remove("adCreator")
                                    }))
                                }, Object.assign(this, this.config), this.conditions = new o.default(this.config.conditions)
                            }
                            return t.prototype.init = function() {
                                this.prepareEnvironment(), this.config.trigger ? this.checkTrigger() : this.startEngine()
                            }, t.prototype.prepareEnvironment = function() {
                                var t = this;
                                window.addEventListener("unload", (function() {
                                    return t.kill()
                                }))
                            }, t.prototype.restart = function() {
                                this.kill(), this.init()
                            }, t.prototype.checkTrigger = function() {
                                var t = this;
                                u.default.getInstance(this.config.trigger)((function() {
                                    return t.isCurrentPageView(t.pageView) && t.startEngine()
                                }))
                            }, t.prototype.startEngine = function() {
                                var t = this;
                                if (this.isAllowed()) {
                                    this.config.tests && d.registerTests(this.config.tests), this.config.violation && this.checkViolationType();
                                    var e = this.filterPlaceholders();
                                    s.default.appendPlaceholders(e), this.config.adultContent && this.checkSensitivityType(), d.registerDefinitions(this.config, this.sensitivityType);
                                    var n = new f.default(this.config.adultContent, this.config.products, this.sensitivityType, this.violationType, (function() {
                                        return t.getPageView()
                                    }));
                                    n.registerProducts(), this.products = n.activeProducts;
                                    var i = new h.default(this.config.adultContent, this.config.plugins, this.sensitivityType, this.violationType, (function() {
                                        return t.restart()
                                    }), (function() {
                                        return t.incrementPageView()
                                    }), (function() {
                                        return t.getPageView()
                                    }));
                                    i.registerPlugins(), this.plugins = i.activePlugins
                                }
                            }, t.prototype.checkSensitivityType = function() {
                                var t, e;
                                this.sensitivityType = l.default.defineType(null === (t = this.config.adultContent) || void 0 === t ? void 0 : t.high, null === (e = this.config.adultContent) || void 0 === e ? void 0 : e.low) || "none"                            }, t.prototype.checkViolationType = function() {
                                var t, e, n;
                                this.violationType = c.default.defineType(null === (t = this.config.violation) || void 0 === t ? void 0 : t.all, null === (e = this.config.violation) || void 0 === e ? void 0 : e.display, null === (n = this.config.violation) || void 0 === n ? void 0 : n.video)
                            }, t.prototype.killProducts = function() {
                                this.products.forEach((function(t) {
                                    var e;
                                    return null === (e = null == t ? void 0 : t.kill) || void 0 === e ? void 0 : e.call(t)
                                })), this.products = []
                            }, t.prototype.killPlugins = function() {
                                this.plugins.forEach((function(t) {
                                    var e;
                                    return null === (e = null == t ? void 0 : t.kill) || void 0 === e ? void 0 : e.call(t)
                                })), this.plugins = []
                            }, t
                        }();
                    e.default = v
                },
                "_kit_function180_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function11_"),
                        o = i(n("_kit_function33_")),
                        a = i(n("_kit_function75_")),
                        s = i(n("_kit_function82_")),
                        l = i(n("_kit_function94_")),
                        u = i(n("_kit_function162_")),
                        c = i(n("_kit_function179_")),
                        d = n("_kit_function186_"),
                        h = n("_kit_function188_"),
                        f = i(n("_kit_function201_")),
                        p = i(n("_kit_function203_")),
                        m = n("_kit_function7_"),
                        v = document.currentScript,
                        y = function() {
                            function t() {
                                var t = this;
                                this.initializePlaceholders = function() {
                                    var e = m.engineConfig.products.find(t.filterStaticInserter);
                                    e && f.default(e) && new u.default(e).stylePlaceholder()
                                }, this.refreshOnBFCCallback = function(t) {
                                    t.persisted && window.location.reload()
                                }, this.shouldAbortScript = function() {
                                    return !m.engineConfig.active || t.shouldRunInIframe() || t.checkIfPreviouslyLoaded()
                                }, this.createCurrentScriptElement = function() {
                                    var t = v.src.replace("https:", "").replace("http:", "");
                                    return h.createElement({
                                        name: "script",
                                        attributes: {
                                            src: t,
                                            async: "true"
                                        }
                                    })
                                }, this.checkIfPreviouslyLoaded = function() {
                                    if (m.engineConfig.loadOnce) {
                                        var t = new a.default(v);
                                        if (t.wasPreviouslyLoaded_ebece06f4a05c1b9cbec8cf755657506) return !0;
                                        t.state = !0
                                    }
                                    return !1
                                }, this.isGoogleAllowed = function() {
                                    window.__isGoogleAllowed = !0, (new p.default).setUpdate()
                                }, this.setupEngine = function() {
                                    var e;
                                    (null === (e = m.engineConfig.hasCMP) || void 0 === e ? void 0 : e.blocking) && navigator.cookieEnabled ? t.createAppOnCookie() : t.createApp()
                                }, this.createApp = function() {
                                    new c.default(m.engineConfig).init()
                                }, this.filterStaticInserter = function(t) {
                                    var e, n, i, r = m.engineConfig.violation && l.default.defineType(null === (e = m.engineConfig.violation) || void 0 === e ? void 0 : e.all, null === (n = m.engineConfig.violation) || void 0 === n ? void 0 : n.display, null === (i = m.engineConfig.violation) || void 0 === i ? void 0 : i.video);
                                    return !("StaticInserter" !== t.name || m.engineConfig.violation && (r.includes("display") || r.includes("all"))) && (s.default.getPlaceholderParams(t.placeholder, {
                                        enable: !0,
                                        maxSize: !0
                                    }).enable && f.default(t))
                                }
                            }
                            return t.prototype.setup = function() {
                                this.refreshOnBFC(), this.shouldAbortScript() || (this.isGoogleAllowed(), new o.default, this.setupOnDocumentReady())
                            }, t.prototype.refreshOnBFC = function() {
                                navigator.userAgent.includes("iPhone") && window.addEventListener("pageshow", this.refreshOnBFCCallback)
                            }, t.prototype.shouldRunInIframe = function() {
                                var t = m.engineConfig.iframeEscape,
                                    e = void 0 === t || t;
                                if (!window.frameElement || !e) return !1;
                                var n = this.createCurrentScriptElement();
                                return window.top.document.head.appendChild(n), !0
                            }, t.prototype.setupOnDocumentReady = function() {
                                /*var e = this.setupEngine, r = function() {
                                    console.error("NETPUB", document.readyState);
                                    if (document.readyState == "interactive" || document.readyState == "complete") {
                                        document.removeEventListener("DOMContentLoaded", r);
                                        document.removeEventListener("readystatechange", r);
                                        e();
                                    }
                                }
                                document.addEventListener("DOMContentLoaded", r);
                                document.addEventListener("readystatechange", r);
                                */
                                //"loading" === document.readyState ? document.addEventListener("DOMContentLoaded", this.setupEngine) : this.setupEngine()
                                // Per far caricare subito i banner invece che aspettare il completamento del caricamento della pagina
                                this.setupEngine();
                            }, t.prototype.createAppOnCookie = function() {
                                var t = this,
                                    e = setInterval((function() {
                                        var n = d.getCookieValue(r.EUCONSENT_V2),
                                            i = d.getCookieValue(r.AWS_GEO_RESTRICTIONS);
                                        (n || i) && (clearInterval(e), t.createApp())
                                    }), 200)
                            }, t
                        }();
                    e.default = y
                },
                "_kit_function181_": (t, e, n) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var i = n("_kit_function188_"),
                        r = new Map,
                        o = function(t) {
                            var e = function(t) {
                                    var e = r.get(t);
                                    return e || (r.size <= 0 && setTimeout((function() {
                                        r.clear()
                                    }), 500), e = t.getBoundingClientRect(), r.set(t, e)), e
                                }(t),
                                n = function(t) {
                                    for (var e = 0, n = 0; t && !Number.isNaN(t.offsetLeft) && !Number.isNaN(t.offsetTop);) e += t.offsetLeft - t.scrollLeft, t === document.body ? n += t.offsetTop : n += t.offsetTop - t.scrollTop, t = t.offsetParent;
                                    return {
                                        top: n,
                                        left: e
                                    }
                                }(t),
                                i = n.top,
                                o = n.left;
                            return {
                                top: i,
                                left: o,
                                right: o + e.width,
                                bottom: i + e.height
                            }
                        },
                        a = function(t) {
                            var e = o(t),
                                n = e.top,
                                i = e.bottom;
                            t._absoluteTop = n, t._absoluteBottom = i
                        },
                        s = function(t) {
                            var e = i.createElement({
                                name: "div",
                                styles: {
                                    "height": "0px",
                                    "width": "100%",
                                    "padding": "0px",
                                    "margin": "0px",
                                    "border": "none"
                                }
                            });
                            t.insertAdjacentElement("afterend", e), a(e), t._absoluteBottom = e._absoluteBottom, t._absoluteTop = e._absoluteTop, e.remove()
                        };
                    e.default = function(t) {
                        t.matches("br") ? s(t) : (a(t), t._absoluteBottom && t._absoluteTop || s(t))
                    }
                },
                "_kit_function182_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function181_"));
                    e.default = r.default
                },
                "_kit_function183_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = function(t) {
                        switch (t.toLowerCase()) {
                            case "yandex":
                                return "yan-rtb";
                            case "152media":
                                return "oftmedia";
                            case "smart":
                                return "smartadserver";
                            case "indexexchange":
                                return "ix";
                            case "mobuppsrtb":
                                return "adkernel";
                            case "rtb":
                                return "rtbhouse";
                            default:
                                return t
                        }
                    }
                },
                "_kit_function184_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function183_"));
                    e.default = r.default
                },
                "_kit_function185_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.getCookieValue = void 0;
                    e.getCookieValue = function(t) {
                        var e = document.cookie.match(RegExp(t + "=.[^;]*"));
                        return !!(e && t.length > 0) && e[0].substring(e[0].indexOf("=") + 1)
                    }
                },
                "_kit_function186_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__exportStar || function(t, e) {
                            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), r(n("_kit_function185_"), e)
                },
                "_kit_function187_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    e.createElement = void 0;
                    var r = i(n("_kit_function200_"));
                    e.createElement = function(t) {
                        var e = t.name,
                            n = t.attributes,
                            i = t.dataset,
                            o = t.classes,
                            a = t.styles,
                            s = t.innerHTML,
                            l = document.createElement(e || "DIV");
                        l.setAttribute("id", r.default.generate());
                        if (n) {
                            Object.keys(n).forEach((function(t) {
                                return l.setAttribute(t, n[t])
                            }));
                        }
                        if (i) {
                            Object.keys(i).forEach((function(t) {
                                l.dataset[t] = i[t]
                            }));
                        }
                        if (o != null && o.length > 0) {
                            l.className = o.join(" ")
                        };
                        if (a) {
                            for (let p in a) {
                                if (typeof(a[p]) == "string" && a[p].includes("!important")) {
                                    l.style.setProperty(p, a[p].replace("!important", ""), "important");
                                } else {
                                    l.style.setProperty(p, a[p]);
                                }
                            }
                            // Rimosso perchÃ© altrimenti sovrascriveva le proprietÃ  caricate dal for qui sopra: Object.assign(l.style, a);
                        }
                        if (s) {
                            l.innerHTML = s;
                        }
                        if ("script" === e && "false" !== n.async) {
                            l.setAttribute("async", "true");
                        }
                        return l;
                    }
                },
                "_kit_function188_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__exportStar || function(t, e) {
                            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), r(n("_kit_function187_"), e)
                },
                "_kit_function189_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.deepClone = void 0;
                    e.deepClone = function(t) {
                        return JSON.parse(JSON.stringify(t))
                    }
                },
                "_kit_function190_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__exportStar || function(t, e) {
                            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), r(n("_kit_function189_"), e)
                },
                "_kit_function191_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.extractNodes = void 0;
                    e.extractNodes = function(t, n) {
                        0 !== t.length && Array.from(t).forEach((function(t) {
                            1 === t.nodeType && (n.push(t), e.extractNodes(t.children, n))
                        }))
                    }
                },
                "_kit_function192_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__exportStar || function(t, e) {
                            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), r(n("_kit_function191_"), e)
                },
                "_kit_function193_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.filterAdSlots = void 0;
                    var r = i(n("_kit_function184_"));
                                        e.filterAdSlots = function(t, r) {
                        return t.forEach((function(t) {
                            var e = [];
                            t.adUnits.forEach((function(t) {
                                var i = [];
                                t.forEach((function(t) {
                                    if (Array.isArray(t.params)) {
                                        var p = [];
                                        t.params.forEach((function(a) {
                                            (!a.adult_type || a.adult_type == "ALL" || a.adult_type.toLowerCase() == r || ("high" === r && a.adult_type == "LOW")) && p.push(a);
                                        })), t.params = p, t.params.length > 0 && i.push(t);
                                    } else {
                                        (!t.params.adult_type || t.params.adult_type == "ALL" || t.params.adult_type.toLowerCase() == r || ("high" === r && t.params.adult_type == "LOW")) && i.push(t)
                                    }
                                })), e.push(i)
                            })), t.adUnits = e
                        })), t.filter((function(t) {
                            return t.active && t.adUnits[0].length
                        }))
                    }
                                    },
                "_kit_function194_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__exportStar || function(t, e) {
                            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), r(n("_kit_function193_"), e)
                },
                "_kit_function195_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__assign || function() {
                            return (i = Object.assign || function(t) {
                                for (var e, n = 1, i = arguments.length; n < i; n++)
                                    for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t
                            }).apply(this, arguments)
                        },
                        r = this && this.__rest || function(t, e) {
                            var n = {};
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
                            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
                            }
                            return n
                        },
                        o = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.getEligibleSelector = void 0;
                    var a = o(n("_kit_function206_")),
                        s = o(n("_kit_function208_"));
                    e.getEligibleSelector = function(t) {
                        var e, n = t.mapper,
                            o = r(t, ["mapper"]);
                        if (!n) return s.default.findSelector(o);
                        var l = new a.default(i({
                            target: o
                        }, n));
                        if (l.target) {
                            var u = l.map(Array.from(null === (e = l.target) || void 0 === e ? void 0 : e.querySelectorAll("*")));
                            if (!(u.length <= 0)) {
                                var c = n.elementEq < 0 ? u.length + n.elementEq : n.elementEq;
                                return u[null != c ? c : 0]
                            }
                        }
                    }
                },
                "_kit_function196_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__exportStar || function(t, e) {
                            for (var n in t) "default" === n || Object.prototype.hasOwnProperty.call(e, n) || i(e, t, n)
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), r(n("_kit_function195_"), e)
                },
                "_kit_function197_": function(t, e) {
                    "use strict";
                    var n = this && this.__read || function(t, e) {
                            var n = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!n) return t;
                            var i, r, o = n.call(t),
                                a = [];
                            try {
                                for (;
                                    (void 0 === e || e-- > 0) && !(i = o.next()).done;) a.push(i.value)
                            } catch (t) {
                                console.error("CATCH 55", t);                                r = {
                                    error: t
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        i = this && this.__spreadArray || function(t, e) {
                            for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) t[r] = e[n];
                            return t
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    e.default = function(t) {
                        var e = t.adSlots,
                            r = t.maxSize,
                            o = [],
                            a = [];
                        e.forEach((function(t) {
                            t.adUnits.forEach((function(t) {
                                t.forEach((function(t) {
                                    switch (t.type) {
                                        case "dfp":
                                                                                case "moneytizer":
                                        case "outbrain":
                                                                                    o.push.apply(o, i([], n(t.params.sizes)));
                                            break;
                                        case "pb":
                                        case "hb":
                                            o.push.apply(o, i([], n(t.params.mediaTypes.banner.sizes)));
                                            break;
                                        case "adx":
                                            o.push([0, t.params.containerHeight]);
                                            break;
                                        default:
                                            o.push([0, 250])
                                    }
                                }))
                            }))
                        }));
                        var s = o.map((function(t) {
                            return n(t, 2)[1]
                        }));
                        return a.push(r ? Math.max.apply(Math, i([], n(s))) : Math.min.apply(Math, i([], n(s)))), r && (a[0] += 25), a
                    }
                },
                "_kit_function198_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function197_"));
                    e.default = r.default
                },
                "_kit_function199_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function t() {}
                        return t.generate = function() {
                            var e = "div-" + (new Date).getTime().toString() + "_" + Math.random().toString(36).substr(2, 9);
                            return -1 === t.uniqueIds.indexOf(e) ? (t.uniqueIds.push(e), e) : this.generate()
                        }, t.getAll = function() {
                            return t.uniqueIds
                        }, t.reset = function() {
                            t.uniqueIds = []
                        }, t.uniqueIds = [], t
                    }();
                    e.default = n
                },
                "_kit_function200_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function199_"));
                    e.default = r.default
                },
                "_kit_function201_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function202_"));
                    e.default = r.default
                },
                "_kit_function202_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function51_")),
                        o = i(n("_kit_function70_")),
                        a = i(n("_kit_function73_"));
                    e.default = function(t) {
                        if (!t.active || !a.default.isProperDevice(t.device)) return !1;
                        var e = new o.default(t.conditions);
                        if (t.conditions && !e.checkConditions()) return !1;
                        if (t.capping && !r.default.getInstance(t.capping)) return !1;
                        return !0
                    }
                },
                "_kit_function203_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function204_"));
                    e.default = r.default
                },
                "_kit_function204_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function t() {
                            var t = this;
                            this.checker = setInterval((function() {
                                window.frames.__tcfapiLocator && (clearInterval(t.checker), t.setIsGoogleAllowedUpdater(), t.tcfapiGetTCData())
                            }), 10), this.tcfapiGetTCData = function() {
                                window.__tcfapi("getTCData", 2, (function(e, n) {
                                    n && void 0 !== e.gdprApplies && e.gdprApplies && t.setIsGoogleAllowed(e)
                                }))
                            }, this.setIsGoogleAllowed = function(t) {
                                t.tcString && (window.__isGoogleAllowed = !!(t.vendor.consents[755] && t.vendor.legitimateInterests[755] && t.purpose.consents[1]))
                            }
                        }
                        return t.prototype.setUpdate = function() {
                            var t = this;
                            setTimeout((function() {
                                clearInterval(t.checker), t.setIsGoogleAllowedUpdater()
                            }), 1e3)
                        }, t.prototype.setIsGoogleAllowedUpdater = function() {
                            var t = this;
                            window.frames.__tcfapiLocator && window.__tcfapi("addEventListener", 2, (function(e, n) {
                                n && "useractioncomplete" === e.eventStatus && t.setIsGoogleAllowed(e)
                            }))
                        }, t
                    }();
                    e.default = n
                },
                "_kit_function205_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__rest || function(t, e) {
                            var n = {};
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
                            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                var r = 0;
                                for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
                            }
                            return n
                        },
                        r = this && this.__importDefault || function(t) {
                            return t && t.__esModule ? t : {
                                default: t
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = r(n("_kit_function182_")),
                        a = r(n("_kit_function208_")),
                        s = function() {
                            function t(t) {
                                var e, n, r, o = this,
                                    s = t.target,
                                    l = t.startElementSelector,
                                    u = t.endElementSelector,
                                    c = i(t, ["target", "startElementSelector", "endElementSelector"]);
                                this.forbiddenElements = [], this.otherAds = [], this.otherAdsSelectors = [], this.findSelectorOrNull = function(t) {
                                    return t ? a.default.findSelector({
                                        selector: t
                                    }) : null
                                }, this.filterNotEnabledNodes = function(t) {
                                    return !o.enabledElements || t.matches(o.enabledElements.selector)
                                }, this.filterTransgressingNodes = function(t) {
                                    return o.isDistanceKept(t, o.otherAds, o.otherAdsSelectorDistance, o.distance)
                                }, this.isNodeAfterCurrentY = function(t) {
                                    return null !== o.currentY && t._absoluteBottom < o.currentY
                                }, this.isDistanceKept = function(t, e, n, i) {
                                    return e.every((function(e) {
                                        if (n) {
                                            if (o.areNodesInDistance(t, e, n)) return !1
                                        } else if (o.areNodesInDistance(t, e, i)) return !1;
                                        return !0
                                    }))
                                }, Object.assign(this, c), this.insertMethod = null !== (r = null !== (n = null === (e = this.enabledElements) || void 0 === e ? void 0 : e.insertMethod) && void 0 !== n ? n : null == s ? void 0 : s.insertMethod) && void 0 !== r ? r : "beforebegin", this.target = a.default.findSelector(s), this.endElement = this.findSelectorOrNull(u), this.startElement = this.findSelectorOrNull(l), this.updateCoordinates()
                            }
                            return t.prototype.map = function(t) {
                                return t.length ? (this.updateCoordinates(), this.checkNodes(t).filter(this.filterNotEnabledNodes).filter(this.filterTransgressingNodes)) : []
                            }, t.prototype.updateCoordinates = function() {
                                this.target && (this.target._nestLevel = 0, o.default(this.target)), this.startElement && o.default(this.startElement), this.endElement && o.default(this.endElement)
                            }, t.prototype.checkNodes = function(t) {
                                var e = this,
                                    n = [];
                                return t.forEach((function(t) {
                                    t.parentElement && (t._nestLevel = t.parentElement._nestLevel + 1, o.default(t), e.isNodeAfterCurrentY(t) || e.isNodeOtherAd(t) || t._nestLevel > e.deepSearchLevel || e.isNodeOutsideBounds(t) || e.isNodeForbidden(t) || n.push(t))
                                })), n
                            }, t.prototype.isNodeOutsideBounds = function(t) {
                                return this.endElement && t._absoluteTop > this.endElement._absoluteTop - (this.endElementOffset || 0) || this.startElement && t._absoluteTop <= this.startElement._absoluteBottom || this.topOffset && t._absoluteTop <= this.target._absoluteTop + this.topOffset
                            }, t.prototype.areNodesInDistance = function(t, e, n) {
                                var i = "beforebegin" === this.insertMethod || "afterbegin" === this.insertMethod ? t._absoluteTop : t._absoluteBottom;
                                return i > e._absoluteTop ? i - e._absoluteBottom < n : e._absoluteTop - i < n
                            }, t.prototype.isNodeOtherAd = function(t) {
                                var e = this;
                                return Array.from(this.otherAdsSelectors).some((function(n) {
                                    return !("" === n || !t.closest(n)) && (t.matches(n) && e.otherAds.push(t), !0)
                                }))
                            }, t.prototype.isNodeForbidden = function(t) {
                                var e = ["afterbegin", "beforeend"].includes(this.insertMethod) ? t : t.parentElement;
                                return this.forbiddenElements.some((function(t) {
                                    return "" !== t && e.closest(t)
                                }))
                            }, t
                        }();
                    e.default = s
                },
                "_kit_function206_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function205_"));
                    e.default = r.default
                },
                "_kit_function207_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function35_")),
                        o = function() {
                            function t() {}
                            return t.iframeContent = function(t) {
                                var e = this.findSelector(t);
                                if (e && (e instanceof HTMLFrameElement || e instanceof HTMLIFrameElement)) {
                                    var n = e.contentDocument,
                                        i = e.contentWindow;
                                    return (new r.default).appendAdsByGoogle(i, n.body), {
                                        iframeDocument: n,
                                        iframeWindow: i
                                    }
                                }
                                return document
                            }, t.findSelector = function(t) {
                                var e = t.selector,
                                    n = t.selectorEq,
                                    i = void 0 === n ? 0 : n,
                                    r = t.bindTo,
                                    o = void 0 === r ? document : r;
                                if ("string" != typeof e) return e;
                                var a = document.querySelectorAll.bind(o)(e);
                                return i < 0 ? a[a.length + i] : a[i]
                            }, t.findSelectors = function(t) {
                                var e = t.selector,
                                    n = t.bindTo,
                                    i = void 0 === n ? document : n;
                                return document.querySelectorAll.bind(i)(e)
                            }, t
                        }();
                    e.default = o
                },
                "_kit_function208_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function207_"));
                    e.default = r.default
                },
                "_kit_function209_": (t, e) => {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var n = function() {
                        function t(t, e) {
                            var n = this;
                            this.onTAVTimeoutCallback = t, this.interval = null, this.timeoutTime = 200, this.intervalCallback = function() {
                                n.timeLeft -= n.timeoutTime, n.timeLeft <= 0 && (n.kill(), n.onTAVTimeoutCallback())
                            }, Object.assign(this, this.onTAVTimeoutCallback), this.timeLeft = 1e3 * e
                        }
                        return t.prototype.setup = function() {
                            this.timeLeft > 0 && (this.interval = window.setInterval(this.intervalCallback, this.timeoutTime), this.running = !0)
                        }, t.prototype.kill = function() {
                            window.clearInterval(this.interval), this.interval = null, this.running = !1
                        }, t.prototype.resume = function() {
                            this.running || this.setup()
                        }, t.prototype.pause = function() {
                            this.running && this.kill()
                        }, t
                    }();
                    e.default = n
                },
                "_kit_function210_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function209_"));
                    e.default = r.default
                }
                                , "_kit_function211_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function188_"),
                        o = i(n("_kit_function208_")),
                        m = n("_kit_function7_"),
                        a = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "Analytics",
                                    isSensitive: !1
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                                                var i = this;
                                if (null === (e = m.engineConfig.hasCMP) || void 0 === e ? void 0 : !e.blocking) {
                                    try {
                                        i.appendHeaderScript();
                                    } catch (x) {
                                        console.error("CATCH 56", x);                                    }
                                } else {
                                    window.frames.__tcfapiLocator && window.__tcfapi("addEventListener", 2, (function(e, n) {
                                        if (n && ["tcloaded", "useractioncomplete"].includes(e.eventStatus) && e.purpose.consents[1]) {
                                            try {
                                                i.appendHeaderScript();
                                            } catch (x) {
                                                console.error("CATCH 57", x);                                            }
                                        }
                                    }));
                                }
                                                            }, t.prototype.kill = function() {
                            }, t.prototype.appendHeaderScript = function() {
                                window.dataLayer = window.dataLayer || [];
                                function gtag() { dataLayer.push(arguments); }
                                gtag('js', new Date());
                                gtag('config', this.params.id);
                                var t = "https://www.googletagmanager.com/gtag/js?id=" + this.params.id;
                                if (!document.querySelector('script[src="' + t + '"]')) {
                                    var e = r.createElement({
                                        name: "script",
                                        attributes: {
                                            src: t
                                        }
                                    });
                                    document.head.appendChild(e)
                                }
                            }, t
                        }();
                    e.default = a
                },
                "_kit_function212_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function211_"));
                    e.default = r.default
                },
                "_kit_function213_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n("_kit_function188_"),
                        o = i(n("_kit_function208_")),
                        m = n("_kit_function7_"),
                        a = function() {
                            function t(t) {
                                this.params = t, this.bidderSettings = {
                                    name: "EvalJavascript",
                                    isSensitive: !1
                                }, Object.assign(this, this.params)
                            }
                            return t.prototype.setup = function() {
                                                                var i = this;
                                if (null === (e = m.engineConfig.hasCMP) || void 0 === e ? void 0 : !e.blocking) {
                                    try {
                                        eval(i.params.code);
                                    } catch (x) {
                                        console.error("CATCH 58", x);                                    }
                                } else {
                                    window.frames.__tcfapiLocator && window.__tcfapi("addEventListener", 2, (function(e, n) {
                                        if (n && ["tcloaded", "useractioncomplete"].includes(e.eventStatus) && e.vendor.consents[755] && e.vendor.legitimateInterests[755] && e.purpose.consents[1]) {
                                            try {
                                                eval(i.params.code);
                                            } catch (x) {
                                                console.error("CATCH 59", x);                                            }
                                        }
                                    }));
                                }
                                                            }, t.prototype.kill = function() {
                            }, t
                        }();
                    e.default = a
                },
                "_kit_function214_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = i(n("_kit_function213_"));
                    e.default = r.default
                },
                "_kit_function215_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        o = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
                            return r(e, t), e
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = o(n("_kit_function38_")),
                        s = n("_kit_function188_"),
                        p = n("_kit_function200_"),
                        l = function() {
                            function t(t, e, n) {
                                void 0 === t && (t = "moneytizer"), this.type = t, this.params = e, this.adUnitManager = n, this.adUnitContainer = s.createElement({
                                    name: "div"
                                }), Object.assign(this, this.params, this.adUnitManager), this.response = {
                                    type: t,
                                    brandingAllow: !0
                                }
                            }
                            return t.prototype.interceptMessage = function() {
                                return; // TODO
                                var t = this;
                                window.addEventListener("message", function(a, b, c) {
                                    console.log("RICEVUTO MESSAGGIO SUCA", t, a, b, c);
                                    // if (a.isnetpub && a.event == "moneytizerBidFailed" && a.siteId = this.params.siteId && a.formatId = this.params.formatId) {
                                    // 		t.adUnitManager.handleBidResponse(!1, t.adUnitContainer)
                                    // }
                                });
                                (function(siteId, formatId){
                                    window.top.postMessage({
                                        "isnetpub": true,
                                        "event": "moneytizerBidFailed",
                                        "siteId": siteId,
                                        "formatId": formatId
                                    }, "*");
                                })(SITE_ID, FORMAT_ID);
                            }, t.prototype.appendScript = function() {
                                var t = s.createElement({
                                    name: "script",
                                    attributes: {
                                        src: "//ads.themoneytizer.com/s/gen.js?type=" + this.params.formatId
                                    }
                                });
                                this.appendCode(t);
                            }, t.prototype.loadWorkingJS = function() {
                                var t = s.createElement({
                                    name: "script",
                                    attributes: {
                                        src: "//ads.themoneytizer.com/s/requestform.js?siteId=" + this.params.siteId + "&formatId=" + this.params.formatId
                                    }
                                });
                                this.appendCode(t);
                            }, t.prototype.runObserver = function(t, i) {
                                var e = function() {
                                    Object.assign(i.style, {
                                        width: "0",
                                        height: "0"
                                    });
                                    Object.assign(i.style, {
                                        width: t.scrollWidth+"px",
                                        height: t.scrollHeight+"px"
                                    });
                                }, r = new ResizeObserver(e);
                                r.observe(t);
                                e();
                            }, t.prototype.appendCode = function(a) {
                                t = this.params;
                                if (t.safeframe) {
                                    var r;
                                    if (t.iframeid) {
                                        r = document.getElementById(t.iframeid);
                                    } else {
                                        t.iframeid = p.default.generate();
                                        r = s.createElement({
                                            name: "iframe",
                                            styles: {
                                                "border": "0",
                                                "width": "0",
                                                "height": "0",
                                                "min-width": "initial!important",
                                                "min-height": "initial!important",
                                                "max-width": "initial!important",
                                                "max-height": "initial!important"
                                            },
                                            attributes: {
                                                "id": t.iframeid,
                                                "src": "about:blank",
                                                "data-is-safeframe": "true",
                                                "sandbox": "allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation",
                                                "role": "region",
                                                "aria-label": "Advertisement"
                                            }
                                        });
                                        this.adUnitManager.adSlot.container.insertAdjacentElement("beforeend", r);
                                        r.contentWindow.document.body.style.setProperty("margin", "0");
                                    }
                                    r.contentWindow.document.body.appendChild(a);
                                    if (a.tagName == "SCRIPT") {
                                        setTimeout((function() {
                                            r.contentWindow.document.body.removeChild(a);
                                        }), 2000);
                                    } else {
                                        this.runObserver(a, r);
                                    }
                                } else {
                                    this.adUnitManager.adSlot.container.insertAdjacentElement("beforeend", a);
                                }
                            }, t.prototype.bid = function() {
                                this.element && this.element.remove(), this.adUnitManager.pause(), this.element = s.createElement({
                                    name: "div",
                                    attributes: {
                                        id: this.params.siteId + "-" + this.params.formatId
                                    }
                                }), this.appendCode(this.element), this.loadWorkingJS(), this.appendScript(), this.interceptMessage(), this.adUnitManager.handleBidResponse(!0, this.adUnitContainer), a.default.publish(a.AD_SOLD + "_" + this.adUnitManager.adSlot.productId, this.response), a.default.publish(a.AD_SOLD + "_" + this.adUnitManager.adSlot.productId + "--" + this.adUnitManager.adSlot.id, this.response)
                            }, t
                        }();
                    e.default = l
                },
                /*
                "_kit_function216_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                            void 0 === i && (i = n), Object.defineProperty(t, i, {
                                enumerable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        } : function(t, e, n, i) {
                            void 0 === i && (i = n), t[i] = e[n]
                        }),
                        r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            })
                        } : function(t, e) {
                            t.default = e
                        }),
                        o = this && this.__importStar || function(t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t)
                                for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && i(e, t, n);
                            return r(e, t), e
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var a = o(n("_kit_function38_")),
                        s = n("_kit_function188_"),
                        p = n("_kit_function200_"),
                        l = function() {
                            function t(t, e, n) {
                                void 0 === t && (t = "outbrain"), this.type = t, this.params = e, this.adUnitManager = n, this.adUnitContainer = s.createElement({
                                    name: "div"
                                }), Object.assign(this, this.params, this.adUnitManager), this.response = {
                                    type: t,
                                    brandingAllow: !0
                                }
                            }
                            return t.prototype.appendCode = function(a) {
                                this.adUnitManager.adSlot.container.insertAdjacentElement("beforeend", a);
                            }, t.prototype.bid = function() {
                                this.element && this.element.remove(), this.adUnitManager.pause(), this.element = s.createElement({
                                    name: "div",
                                    classes: ["OUTBRAIN"],
                                    dataset: {
                                        obContenturl: document.location.href,
                                        widgetId: this.params.widgetId,
                                        obInstallationKey: this.params.obInstallationKey
                                    }
                                }), this.appendCode(this.element)/*, this.interceptMessage(), this.adUnitManager.handleBidResponse(!0, this.adUnitContainer), a.default.publish(a.AD_SOLD + "_" + this.adUnitManager.adSlot.productId, this.response), a.default.publish(a.AD_SOLD + "_" + this.adUnitManager.adSlot.productId + "--" + this.adUnitManager.adSlot.id, this.response)* /
                            }, t
                        }();
                    e.default = l
                }*/
                "_kit_function216_": function(t, e, n) {
                    "use strict";
                    var i = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
                        void 0 === i && (i = n);
                        Object.defineProperty(t, i, {
                            enumerable: !0,
                            get: function() {
                                return e[n];
                            }
                        });
                    } : function(t, e, n, i) {
                        void 0 === i && (i = n);
                        t[i] = e[n];
                    });

                    var r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                        Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        });
                    } : function(t, e) {
                        t.default = e;
                    });

                    var o = this && this.__importStar || function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t) {
                            for (var n in t) {
                                if ("default" !== n && Object.prototype.hasOwnProperty.call(t, n)) {
                                    i(e, t, n);
                                }
                            }
                        }
                        r(e, t);
                        return e;
                    };

                    var a = this && this.__read || function(t, e) {
                        var n = "function" == typeof Symbol && t[Symbol.iterator];
                        if (!n) return t;
                        var i, r, o = n.call(t),
                            a = [];
                        try {
                            for (; (void 0 === e || e-- > 0) && !(i = o.next()).done;) {
                                a.push(i.value);
                            }
                        } catch (t) {
                            console.error("CATCH 60", t);                            r = {
                                error: t
                            };
                        } finally {
                            try {
                                i && !i.done && (n = o.return) && n.call(o);
                            } finally {
                                if (r) throw r.error;
                            }
                        }
                        return a;
                    };

                    var s = this && this.__spreadArray || function(t, e) {
                        for (var n = 0, i = e.length, r = t.length; n < i; n++, r++) {
                            t[r] = e[n];
                        }
                        return t;
                    };

                    var l = this && this.__importDefault || function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        };
                    };

                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });

                    var u = n("_kit_function11_");
                    var c = o(n("_kit_function38_"));
                    var d = l(n("_kit_function41_"));
                    var h = n("_kit_function188_");
                    var f = l(n("_kit_function29_"));

                    var p = function() {
                        function t(t, e, n) {
                            var i = this;
                            void 0 === t && (t = "outbrain");

                            this.type = t;
                            this.params = e;
                            this.adUnitManager = n;
                            this.currentBidId = Math.random();

                            this.adUnitContainer = h.createElement({
                                name: "div",
                                styles: {
                                    "position": "absolute",
                                    "top": "0"
                                }
                            });

                            /*this.prebidRequestCallback = function() {
                                console.log(i);
                                i.createIframe();
                                i.showAdUnitContainer(t);
                                i.handleSuccessfulBid(t);
                            };*/

                            this.createIframe = function() {
                                var t;
                                if (t = i.iframe) {
                                    t.remove();
                                }
                                i.adUnitContainer.innerHTML = "";
                                i.iframe = h.createElement(u.OUTBRAIN_IFRAME);
                                i.adUnitContainer.insertAdjacentElement("beforeend", i.iframe);
                                let body = i.iframe.contentWindow.document.body;
                                body.innerHTML = "<div></div>";
                                let targetdiv = body.querySelector("div");
                                var e = function() {
                                    Object.assign(i.iframe.style, {
                                        width: "0",
                                        height: "0"
                                    });
                                    let width = targetdiv.scrollWidth;
                                    let height = targetdiv.scrollHeight;
                                    Object.assign(i.iframe.style, {
                                        width: width+"px",
                                        height: height+"px"
                                    });
                                }, r = new ResizeObserver(e);
                                r.observe(targetdiv);
                                targetdiv.innerHTML = "<iframe src=\"https://bsshotel.it/jjj.php?random=1\"></iframe>";
                            };

                            Object.assign(this, this.params, this.adUnitManager);
                            this.id = this.adSlot.productId + "-" + this.adSlot.index;
                            this.response = {
                                type: t,
                                brandingAllow: !0
                            };
                            this.appendAdUnitContainer();
                        }
                        
                        t.prototype.bid = function() {
                            console.log("outbrain bid", this.currentBidId);                            console.log("PASSO 0");
                            this.createIframe();
                            console.log("PASSO 1");
                            this.showAdUnitContainer({size:{width: 301, height: 251}});
                            console.log("PASSO 2");
                            this.handleSuccessfulBid({size:{width: 301, height: 251}});
                            console.log("PASSO 3");
                            //this.prebidRequestCallback();
                            /*
                            t.sendRequest({
                                id: this.id,
                                params: this.params,
                                cb: this.prebidRequestCallback,
                                timeout: this.timeout,
                                floor: this.floor
                            });
                            */
                            //this.adUnitManager.track(this.adUnitManager.currentAdUnit, this.adUnitManager.currentAdUnit.params, 0);
                        };
                        t.sendRequest = function(e) {
                            var n = e.id,
                                i = e.params,
                                r = e.cb,
                                o = e.timeout,
                                a = e.floor,
                                s = window[u.pbjsnetpub221021],
                                l = t.getRequest({
                                    id: n,
                                    params: i,
                                    cb: r,
                                    timeout: o,
                                    floor: a
                                });
                            f.default.sendRequest(l, s);
                        };










                        
                        t.isBidAllowed = function(t) {
                            return !("rendered" === t.status || Date.now() > t.requestTimestamp + 1e3 * t.ttl);
                        };

                        t.prototype.hideAdUnitContainer = function() {
                            this.adUnitContainer.style.display = "none";
                        };

                        t.prototype.appendAdUnitContainer = function() {
                            this.adSlot.container.insertAdjacentElement("beforeend", this.adUnitContainer);
                        };

                        t.prototype.showAdUnitContainer = function(t) {
                            this.adUnitContainer.style.display = "block";
                            this.adUnitContainer.style.position = "";
                                                        this.adUnitContainer.style.width = t.width + "px";
                            this.adUnitContainer.style.height = t.height + "px";
                                                    };

                        t.prototype.handleSuccessfulBid = function(t) {
                            //var e = this.iframe.contentWindow.document;
                            // Success bid
                            // this.prebid.renderAd(e, t.adserverTargeting.hb_adid)
                            this.adUnitManager.handleBidResponse(!0, this.adUnitContainer);
                            c.default.publish(c.AD_SOLD + "_" + this.adSlot.productId, this.response);
                            c.default.publish(c.AD_SOLD + "_" + this.adSlot.productId + "--" + this.adSlot.id, this.response);
                        };

                        t.waitForConsent = !0;
                        return t;
                    }();

                    e.default = p;
                }
                            },
            e = {};

        function n(i) {
            var r = e[i];
            if (void 0 !== r) return r.exports;
            var o = e[i] = {
                exports: {}
            };
            return t[i].call(o.exports, o, o.exports, n), o.exports
        }
        n.n = t => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return n.d(e, {
                a: e
            }), e
        }, n.d = (t, e) => {
            for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: e[i]
            })
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                console.error("CATCH 61", t);                if ("object" == typeof window) return window
            }
        }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n("_kit_function5_");
        n("_kit_function95_")
    })();
