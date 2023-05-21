var currScript = document.currentScript;
var initTime = (new Date).getTime();
class Utils {
    static setHighestZIndex(t = window, e, i = "*") {
        let n = t.document.querySelectorAll(i);
        for (let i = 0; i < n.length; i++)
            if (e.indexOf(n[i]) === -1) {
				try {
					if ((t.getComputedStyle(n[i], null).zIndex || n[i].currentStyle.zIndex) >= 2147483647) {
						n[i].style.zIndex = "2147483646";
					}
				} catch (t) {}
			}
    }
    static getStickyRivals(t = window, e, i = "*") {
        let n = t.document.querySelectorAll(i);
        for (let i = 0; i < n.length; i++) {
            let o = false;
            for (let t = 0; t < e.length; t++) {
				if (e[t] === n[i]) {
					o = true;
					break;
				}
			}
            if (!o) {
				try {
					let e = t.getComputedStyle(n[i], null).position;
					if (e === "fixed" || e === "sticky") {
						if (n[i].querySelectorAll("video").length) {
							n[i].style.setProperty("position", "relative", "important");
						}
					}
				} catch (t) {}
			}
        }
    }
    static isMobile(t = "Any") {
        if (this.isMobileObj || (this.isMobileObj = {}), this.isMobileObj[t] !== undefined) {
			return this.isMobileObj[t];
		}
        let i = false;
        switch (t) {
            case "Android":
                i = navigator.userAgent.match(/Android/i) || false;
                break;
            case "BlackBerry":
                i = navigator.userAgent.match(/BlackBerry/i) || false;
                break;
            case "IOS":
                i = navigator.userAgent.match(/iPhone|iPad|iPod/i) || false;
                break;
            case "Opera":
                i = navigator.userAgent.match(/Opera Mini/i) || false;
                break;
            case "Windows":
                i = navigator.userAgent.match(/IEMobile/i) || false;
                break;
            case "Any":
                i = Utils.isMobile("Android") || Utils.isMobile("BlackBerry") || Utils.isMobile("IOS") || Utils.isMobile("Opera") || Utils.isMobile("Windows") || false
        }
		this.isMobileObj[t] = i;
        return i;
    }
    static deleteObj(t) {
        if (t.clListeners)
            for (let i = 0; i < t.clListeners.length; i++) {
				t.cl.removeListener(t.clListeners[i]);
			}
        for (let e in t) {
			try {
				delete t[e]
			} catch (i) {
				t[e] = null
			}
		}
    }
    static passiveEvent() {
		if (this.hasPassive === undefined) {
			this.hasPassive = 0, (() => {
				try {
					const e = {};
					e.get = () => {
						this.hasPassive = 1
					};
					let i = Object.defineProperty({}, "passive", e);
					window.addEventListener("testPassive", null, i);
					window.removeEventListener("testPassive", null, i);
				} catch (t) {}
			})();
		}
        const e = {};
		e.passive = true;
        return (!!this.hasPassive && e);
    }
    /*
	static genUUID() {
        return ([1e7] + -1000 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e => (e ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)))
    }
    static genSUID() {
        return Math.random().toString(16).substr(2) + Math.random().toString(16).substr(13)
    }
    static genKeyCode(t) {
        return (t => {
            let i, s = 0;
            if (0 === t.length) return s;
            for (let n = 0; n < t.length; n++) i = t.charCodeAt(n), s = (s << 5) - s + i, s &= s;
            return s
        })(t + "" + (new Date).getTime())
    }
	*/
    static suspend(t, e = 1) {
        let i = 0;
        ! function s() {
            i++, i > e ? t() : document.visibilityState === "visible" ? window.top.requestAnimationFrame(s) : window.top.setTimeout(s)
        }()
    }
    static firePixel(t = "", e = "", i = "", s = "") {
        if (!config.firePixels) return;
        if (-1 === config.pixelsList.indexOf(e.split("::")[0])) return;
        let o = new Image(1, 1),
            x = ((new Date).getTime() - config.initTime) / 1000;
        o.src = "https:\/\/bnwcb.com\/t?p1=" + config.pixelsId + "::" + config.devVersion + "&p2=" + t + "&p3=" + e + "&p4=" + i + "&p5=" + (s ? s + "::" : "") + x + "sec", document.body.appendChild(o), o.addEventListener("load", (function() {
            this.parentNode.removeChild(this)
        }))
    }
    static pixelReport(t, e, i, s, n) {
        return;
        /*let x = cl.claim("getElement", "playerDiv").offsetWidth,
            c = Math.round(1e4 * Math.random()),
            r = "video",
            a = x <= 320 ? "small" : x >= 640 ? "large" : "medium",
            _ = "https:\/\/track.360playvid.info\/?cb=" + c + "&event=" + t + ("&placement=") + r + "&publisher=" + config.publisher + "&size=" + a + ("&playerVersion=") + config.devVersion;
        _ += e ? "&demandType=" + (e === "instream" ? 2 : 3) : "", _ += i ? "&demandSource=" + i : "", _ += s ? "&advertiser=" + s : "", _ += n ? "&cpm=" + n : "";
        let l = new Image(1, 1);
        l.src = _, document.body.appendChild(l), l.addEventListener("load", (function() {
            this.parentNode.removeChild(this)
        }))*/
    }
}
class ViewObserver {
    constructor(t, e) {
        let s = {},
            n = {},
            o = t.claim("getElement", e);
        const x = o.ownerDocument.defaultView;
        const c = x => {
                n = this.getViewParams(o);
				if (!x && n.activeView !== s.activeView || n.viewPct !== s.viewPct || n.isHidden !== s.isHidden) {
					t.report(e + (".onViewChange"), n);
				}
				s = n
            };
        x.addEventListener("scroll", (() => {
            c()
        }), Utils.passiveEvent());
		x.addEventListener("resize", (() => {
            c()
        }));
		t.listen(e + ".onRepose", (() => {
            c()
        }));
		x.addEventListener("visibilitychange", (() => {
            c()
        }));
		t.serve(e + (".currViewState"), (() => (c(true), n))), t.serve(e + (".isViewable"), (() => {
            return c(true), n.activeView && !isNaN(n.viewPct) && !n.isHidden && n.viewPct > config.stickyPCT
        }));
		t.listen("destructAll", (() => {
            x.removeEventListener("scroll", c);
			x.removeEventListener("resize", c);
			x.removeEventListener("visibilitychange", c);
			Utils.deleteObj(this)
        }));
		Utils.suspend((() => {
            c()
        }));
    }
	getViewParams(t) {
        let i = this.look4HiddenStyles(t),
            s = document.visibilityState === "visible",
            n = this.getViewPct(t);
        return {
            isHidden: i,
            activeView: s,
            viewPct: Math.round(n.h * n.w * 20) / 20
        }
    }
	look4HiddenStyles(t) {
        let i = false,
            s = t.ownerDocument.defaultView;
        while (t) {
            if (t.hidden) return true;
            if (t.style) {
                let n = s.getComputedStyle(t);
                if (n) {
                    if ("0" == n.opacity) return true;
                    if (n.display == "none") return true;
                    if (!i && n.visibility && (i = true, n.visibility == "hidden")) return true;
                }
            }
            t = t.parentNode;
        }
        return false
    }
	getViewPct(t) {
        let i = t.ownerDocument.defaultView;
        try {
            let s = t.getBoundingClientRect(),
                n = s.height || s.bottom - s.top,
                o = s.width || s.right - s.left,
                x = this.getViewportSize(i),
                c = x.h - s.bottom,
                r = x.w - s.right,
                a = n + Math.min(0, s.top) + Math.min(0, c),
                _ = Math.max(0, a / n),
                l = o + Math.min(0, s.left) + Math.min(0, r),
                d = Math.max(0, l / o);
            const h = {};
            return h.w = d, h.h = _, h
        } catch (t) {
            const e = {
                w: 0,
                h: 0
            };
            return e
        }
    }
	getViewportSize(t) {
        var i = {};
        if (i.w = screen.width || t.innerWidth, i.h = screen.height || t.innerHeight, Utils.isMobile()) return i;
        if (null != t.innerWidth) return {
            w: t.innerWidth,
            h: t.innerHeight
        };
        let s = t.document;
        if (document.compatMode == "CSS1Compat") {
            const t = {};
            return t.w = s.documentElement.clientWidth, t.h = s.documentElement.clientHeight, t
        }
        const n = {};
        return n.w = s.body.clientWidth, n.h = s.body.clientWidth, n
    }
}
class SizeObserver {
    constructor(t, e) {
        let s, n = {},
            o = t.claim("getElement", e);
        if (window.ResizeObserver) {
			s = new ResizeObserver((s => {
				n.width = s[0].contentRect.width, n.height = s[0].contentRect.height, t.report(e + ".onResize", n)
			}));
			s.observe(o);
		}
		t.listen("destructAll", (() => {
            s.unobserve(o);
			s.disconnect();
			Utils.deleteObj(this)
        }))
    }
}
class PosObserver {
    constructor(t, e) {
        let s, n = {},
            o = t.claim("getElement", e);
        const x = () => {
            try {
                let i = o.getBoundingClientRect(),
                    s = i.bottom + top.scrollY,
                    x = i.right + top.scrollX;
                if (s !== n.bottom || x !== n.right) {
                    t.report(e + ".onRepose", n);
                    const i = {};
                    i.bottom = s, i.right = x, n = i
                }
            } catch (t) {}
            s = document.visibilityState === "visible" ? window.top.requestAnimationFrame(x) : window.top.setTimeout(x)
        };
        x();
		t.listen("destructAll", (() => {
            const t = i;
            cancelAnimationFrame(s);
			clearTimeout(s);
			Utils.deleteObj(this);
        }))
    }
}
class ImpViewObserver {
    constructor(t, e) {
        this.cl = t;
		this.params = e;
		this.clListeners = [];
		this.timeToCount = 2e3;
		this.destructed = false;
		this.timeStamp = (new Date).getTime();
		this.isViewable = t.claim("playerDiv.isViewable");
		this.clListeners.push(t.listen("playerDiv.onRepose", (e => {
            let n = t.claim("playerDiv.isViewable");
            n !== this.isViewable && this.countTime(n), this.isViewable = n
        })));
		this.clListeners.push(t.listen("playerDiv.onViewChange", (t => {
            let s = t.activeView && !isNaN(t.viewPct) && !t.isHidden && t.viewPct > config.stickyPCT;
            s !== this.isViewable && this.countTime(s), this.isViewable = s
        })));
		this.clListeners.push(t.listen("adManager.adsStopped", (t => {
            this.destruct()
        })));
		this.clListeners.push(t.listen("adManager.adsCompleted", (t => {
            this.destruct()
        })));
		this.clListeners.push(t.listen("adManager.adComplete", (t => {
            this.destruct()
        })));
		this.countTime(this.isViewable);
    }
	countTime(t) {
        if (!t) return this.timeStamp = 0, void clearTimeout(this.timeout);
        let i = (new Date).getTime();
        this.timeStamp || (this.timeStamp = i), i - this.timeStamp >= this.timeToCount ? this.reportImp() : (this.timeToCount -= i - this.timeStamp, this.timeStamp = i, this.timeout = setTimeout((() => {
            this.countTime(true)
        }), this.timeToCount))
    }
	reportImp() {
        if (!this.destructed) {
			Utils.pixelReport("viewableImpression", this.params.demandType, this.params.demandSource, this.params.currAdvertiser);
		}
		this.destruct();
    }
	destruct() {
        this.destructed = true;
		clearTimeout(this.timeout);
		Utils.deleteObj(this);
    }
}
class Service {
    constructor() {
        this.intervalSetter();
		this.animateArray = [];
    }
	intervalSetter() {
        this.intervalCapsulesArray = [];
		this.intervalCapsule = function(e, i) {
            let n = (new Date).getTime();
            this.ping = function() {
                let o = (new Date).getTime();
                if (o - n > i) {
					n = o;
					e();
				}
            }
        };
        const e = () => {
            document.visibilityState === "visible" ? window.top.requestAnimationFrame(e) : window.top.setTimeout(e);
            for (let t = 0; t < this.intervalCapsulesArray.length; t++) {
				this.intervalCapsulesArray[t].ping();
			}
        };
        e()
    }
	setInterval(t, e) {
        let s = new(this.intervalCapsule)(t, e);
		this.intervalCapsulesArray.push(s);
        return s;
    }
	clearInterval(t) {
        let i = this.intervalCapsulesArray.indexOf(t);
        if (i > -1) {
			this.intervalCapsulesArray.splice(i, 1);
		}
    }
	animateTo(t, e, i, s, n, o, x) {
        this.stopAnimateUnit(t, e);
		this.animateUnit(t, e, i, s, n, o, x);
    }
	stopAnimateUnit(t, e) {
        let s = this.animateArray.find((s => {
            return s.element === t && s.unit === e
        }));
        if (s) {
			s.blocked = true;
			s.cancelAnimation();
		}
    }
	getBezierAnim(t, e) {
        var s = {};
        s.easeIn = [1, 0, 0, 0];
		s.easeOut = [1, 1, 1, 0];
		s.easeInOut = [1, 1, 0, 0];
		s.linear = [1, .6666, .3333, 0];
		n = e;
        return (o = s[t])[0] * ((a = n) * a * a) + o[1] * (3 * (r = n) * r * (1 - r)) + o[2] * (3 * (c = n) * (1 - c) * (1 - c)) + o[3] * ((1 - (x = n)) * (1 - x) * (1 - x));
        //var n, o, x, c, r, a
    }
	animateUnit(t, e, i, s, n, o, x) {
        let r = this;
        this.animateArray.push(new function(t, e, i, s, n, o, x) {
            let a = 0,
                _ = (new Date).getTime(),
                l = window.top;
            this.blocked = false;
			this.element = t;
			this.unit = e;
			this.animTimeOut = null;
            let d, h = parseFloat(/[+-]?([0-9]*[.])?[0-9]+/ .exec(t[e])[0]);
            const u = () => {
                    this.cancelAnimation();
					if (o && !this.blocked) {
						o();
					}
                },
                p = () => {
                    let f = (new Date).getTime();
                    a = Math.min(1.1, (f - _) / 1000 / s);
                    let m = Math.min(1, r.getBezierAnim(n, a)),
                        v = e === "height" || e === "width" || e === "opacity" ? 0 : -1 / 0,
                        g = i;
                    typeof i == "function" && (g = i());
                    let y = Number(/[+-]?([0-9]*[.])?[0-9]+/ .exec(g)[0]),
                        w = Math.max(Math.round(1000 * (m * (y - h) + h)) / 1000, v);
                    t[e] = g.replace(y, w);
					if (x && !this.blocked) {
						x();
					}
					if (a > 1 || this.blocked) {
						u();
					} else {
						d = l.requestAnimationFrame(p);
					}
                };
			this.cancelAnimation = () => {
                l.cancelAnimationFrame(d);
                let e = r.animateArray.indexOf(this);
                r.animateArray.splice(e, 1)
            };
            if (s) {
				p()
			} else {
				t[e] = i;
				if (x && !this.blocked) {
					x()
				}
				u();
			}
			return this;
        }(t, e, i, s, n, o, x))
    }
	resetAllAnimations() {
        for (let e = 0; e < this.animateArray.length; e++) {
			this.animateArray[e].blocked = true;
		}
        this.animateArray = []
    }
}
class CL {
    constructor() {
        this.listenArray = [];
		this.serveAsyncArray = [];
		this.serve = this.listen;
		this.claim = this.report;
		this.listen("destructAll", (() => {
            this.destruct()
        }))
    }
	claimAsync(t, e, i) {
        let n = this.serveAsyncArray.find((e => e.id === t));
        if (!n) return void i(undefined);
        const o = {};
        o.val = e;
		o.callback = i;
		n.callback(o);
    }
	serveAsync(t, e) {
        if (this.serveAsyncArray.find((e => e.id === t))) throw new Error("this listener allready exists: " + t); {
            const s = {};
            s.id = t;
			s.callback = e;
            let n = s;
			this.serveAsyncArray.push(n);
            return n;
        }
    }
	report(t, e) {
        if (!this.listenArray) return;
        let s;
		let n = this.listenArray.filter((e => e.id === t));
        for (let t of n) {
			s = t.callback(e);
		}
        return s;
    }
	listen(t, e) {
        if (this.listenArray.find((s => {
                return s.id === t && s.callback === e
            }))) throw new Error("this listener already exists: " + t); {
            const s = {};
            s.id = t;
			s.callback = e;
            let n = s;
			this.listenArray.push(n);
            return n;
        }
    }
	removeListener(t) {
		let i = this.listenArray.indexOf(t);
		if (i > -1) {
			this.listenArray.splice(i, 1);
		}
		i = this.serveAsyncArray.indexOf(t);
		if (i > -1) {
			this.serveAsyncArray.splice(i, 1);
		}
    }
	destruct() {
        Utils.suspend((() => {
            Utils.deleteObj(this)
        }))
    }
}
class Display {
    constructor(t) {
        this.config = t.claim("data", "config");
        const i = window.frameElement;
        let s = window;
		if (i) {
			i.style.height = "1px";
			i.style.border = "0";
			i.scrolling = "no";
			i.margin = "0";
			i.frameborder = "0";
			s = window.parent;
		}
        const n = s.document,
            o = n.body;
        this.topBody = o;
        const x = n.createElement("div");
        if (this.config.debugMode && (x.id = "containerDiv"), i) {
			i.parentNode.parentNode.insertBefore(x, i.parentNode);
		} else {
            let t = this.config.currScript;
            t.parentNode.insertBefore(x, t)
        }
		if (this.config.stickyMode == 3) {
			x.style.width = "0";
		} else if (this.config.autoResize) {
			x.style.width = "100%";
		} else {
			x.style.width = i.offsetWidth + "px";
		}
		if (this.config.maxWidth) {
			x.style.maxWidth = this.config.maxWidth + "px";
			x.style.marginRight = "auto";
			x.style.marginLeft = "auto";
		}
		x.style.height = 9 * x.offsetWidth / 16 + "px";
		x.style.position = "relative";
		this.containerDiv = x;
        const c = n.createElement("div");
        this[this.config.stickyMode ? this.config.playerParentDiv : "containerDiv"].appendChild(c), this.config.debugMode && (c.id = "playerDiv"), c.style = "position:relative; width:100%;height:100%;background-color:white;";
        const r = n.createElement("div");
        c.appendChild(r);
		if (this.config.debugMode) {
			r.id = "adsDiv";
		}
		r.style = "position:relative;";
		this.parentWindow = s;
		this.playerDiv = c;
		this.adsDiv = r;
		t.listen("createElement", (t => this.createElement(t)));
		t.serve("getElement", (t => this.getElement(t)));
		t.listen("removeElement", (t => {
            this.removeElement(t)
        }));
		t.listen("containerDiv.onRepose", (() => {
            x.style.height = 9 * x.offsetWidth / 16 + "px"
        }));
		t.listen("destructAll", (() => {
            this.destruct()
        }));
    }
	createElement(t) {
        if (this[t.id]) throw new Error("this element id already exists: " + t.id);
        const i = (typeof t.parent == "string" ? this[t.parent] : t.parent);
        if (!i) return;
        const s = i.ownerDocument.createElement(t.elementType),
            n = t.appendCommand || "appendChild";
        if (n == "appendChild" ? i[n](s) : n == "insertBefore" && i.parentNode[n](s, i), this.config.debugMode && (s.id = t.id), this[t.id] = s, t.elementType == "iframe") {
            s.scrolling = "no", s.margin = "0", s.frameborder = "0", s.allowtransparency = "true", s.hspace = "0", s.vspace = "0";
            const t = s.contentWindow.document;
            t.open();
			t.close();
			t.body.style.margin = "0px";
        }
        return s;
    }
	removeElement(t) {
        let i = this[t];
        if (i && i.parentNode) {
			i.parentNode.removeChild(i);
		}
    }
	getElement(t) {
        return this[t];
    }
	destruct() {
        try {
            this.playerDiv.parentNode.removeChild(this.playerDiv);
        } catch (t) {}
        try {
            this.containerDiv.parentNode.removeChild(this.containerDiv);
        } catch (t) {}
        try {
            this.config.currScript.parentNode.removeChild(this.config.currScript);
        } catch (t) {}
        Utils.deleteObj(this)
    }
}
class IOSVidPlay {
	constructor(t) {
		t.setAttribute("playsinline", "");
		t.setAttribute("webkit-playsinline", "");
		t.setAttribute("muted", true);
		t.addEventListener("suspend", () => {});
		t.vidPlay = t.play;
		t.play = () => {
			if (!this.iosWrapper && t.vidPlay) {
				t.vidPlay().then(() => {}).catch((e) => {
					if (e.toString().indexOf("NotAllowedError") !== -1) {
						this.iosWrapper = new this.Wrapper(t);
						t.play();
					}
				});
			}
		};
		if (t.autoplay) {
			t.play();
		}
	}
	destruct() {
		if (this.iosWrapper) {
			this.iosWrapper.destruct();
		}
		Utils.deleteObj(this);
	}
	Wrapper = class {
		constructor(t) {
			const i = e;
			const s = t.ownerDocument;
			const n = s ? s.defaultView || s.parentWindow : window;
			let o, x;
			const c = Date.now();
			let r = false;
			const a = t.autoplay;
			const _ = !t.autoplay;
			let l = t.src;
			let d = false;
			let h = 0;
			let u = 0;
			let p = false;
			const f = new Audio();
			t.autoplay = false;
			t.muted = true;
			t.playsInline = true;
			t.controls = false;
			const m = {};
			m.get = () => _;
			m.set = () => {};
			Object.defineProperty(t, "paused", m);
			Object.defineProperty(t, "muted", {
				get: () => !r,
				set: (e) => {
					const s = i;
					if (t && t.audioTracks && t.audioTracks.length > 0) {
						if (e) {
							try {
								f.pause();
								r = false;
								let event = new Event("volumechange");
								t.dispatchEvent(event);
							} catch (err) {}
						} else if (!_) {
							if (f.src && f.src == l) {
								f.src = l;
							}
							try {
								f.play();
							} catch (err) {}
						}
					}
				}
			});
			Object.defineProperty(t, "volume", {
				get: () => {
					if (t && t.audioTracks && t.audioTracks.length > 0) {
						return f.volume;
					}
					return 0;
				},
				set: (e) => {
					if (t && t.audioTracks && t.audioTracks.length > 0) {
						let i = parseInt(10 * e) / 10;
						f.volume = i;
						let event = new Event("volumechange");
						t.dispatchEvent(event);
					}
				}
			});
			const v = {};
			v.get = () => false;
			v.set = () => {};
			Object.defineProperty(t, "controls", v);
			const g = {};
			g.get = () => d;
			g.set = () => {};
			Object.defineProperty(t, "ended", g);
			const y = {};
			y.get = () => a;
			y.set = () => {};
			Object.defineProperty(t, "autoplay", y);
			this.eHandler = (event) => {
				switch (event.type) {
					case "seeking":
					case "seeked":
					case "ended":
						if (!event.innerEvent) {
							event.stopImmediatePropagation();
						}
						break;
				}
			};
			t.addEventListener("seeked", this.eHandler, false);
			t.addEventListener("seeking", this.eHandler, false);
			t.addEventListener("ended", this.eHandler, false);
			t.addEventListener("canplay", () => {
				if (!p) {
					p = true;
					c = Date.now();
					n.cancelAnimationFrame(o);
					o = n.requestAnimationFrame(() => {
						try {
							k();
						} catch (err) {}
					});
					setTimeout(() => {
						let eventPlay = new Event("play");
						t.dispatchEvent(eventPlay);
						let eventPlaying = new Event("playing");
						t.dispatchEvent(eventPlaying);
					}, 1);
				}
			});
			let w = false;
			f.addEventListener("playing", () => {
				f.currentTime = t.currentTime + 0.3;
				setTimeout(() => {
					if (!w) {
						r = true;
						let event = new Event("volumechange");
						t.dispatchEvent(event);
					}
				}, 100);
			});
			f.addEventListener("seeking", () => {
				w = true;
			});
			f.addEventListener("seeked", () => {
				if (_) {
					try {
						f.pause();
					} catch (err) {}
				} else if (w) {
					r = true;
					let event = new Event("volumechange");
					t.dispatchEvent(event);
				}
				w = false;
			});
			const b = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					t.load();
					l = mutation.target.src;
					try {
						f.src = l;
					} catch (err) {}
					if (r) {
						try {
							f.play();
						} catch (err) {}
					}
					if (a) {
						n.cancelAnimationFrame(o);
						o = n.requestAnimationFrame(() => {
							try {
								k();
							} catch (err) {}
						});
					}
				});
			});
			const A = {};
			A.attributes = true;
			A.attributeOldValue = true;
			A.attributeFilter = ["src"];
			const T = A;
			b.observe(t, T);
			t.pause = (e) => {
				const s = i;
				if (_ = true, r) {
					try {
						w = false;
						f.pause();
					} catch (err) {}
				}
				let eventPause = new Event("pause");
				t.dispatchEvent(eventPause);
			};
			t.play = () => {
				const e = i;
				if (n.cancelAnimationFrame(o)) {
					o = n.requestAnimationFrame(() => {
						try {
							k();
						} catch (err) {}
					});
				}
				d = false;
				if (t.duration === t.currentTime) {
					t.currentTime = 0;
				}
				c = Date.now() - 1000 * t.currentTime;
				_ = false;
				r = true;
				try {
					f.play();
				} catch (err) {}
				let eventPlay = new Event("play");
				t.dispatchEvent(eventPlay);
				eventPlay = new Event("playing");
				t.dispatchEvent(eventPlay);
			};
			const k = () => {
				if (o && n.cancelAnimationFrame(o)) {
					o = n.requestAnimationFrame(() => {
						try {
							k();
						} catch (err) {}
					});
				}
				if (n.clearTimeout(x)) {
					x = n.setTimeout(() => {
						k();
					}, 60);
				}
				if (!_ && p) {
					if (r) {
						u = f.currentTime + 0.2;
					} else {
						u = Math.abs((Date.now() - c) / 1000);
						if (
							u - h > 2 ||
							(t.buffered.end(0) < u + 1 && u < t.duration - 2)
						) {
							c = Date.now() - 1000 * t.currentTime;
							u = Math.abs((Date.now() - c) / 1000);
						}
					}
					if (Math.abs(u - t.currentTime) < 3) {
						t.currentTime = u;
					} else {
						c = Date.now() - 1000 * t.currentTime;
						if (r) {
							f.currentTime = t.currentTime;
						}
					}
					h = u;
					if (u >= t.duration) {
						if (t.loop) {
							let eventSeeking = new Event("seeking");
							eventSeeking.innerEvent = true;
							t.dispatchEvent(eventSeeking);
							eventSeeked = new Event("seeked");
							eventSeeked.innerEvent = true;
							t.dispatchEvent(eventSeeked);
						} else {
							_ = true;
							d = true;
							let eventPause = new Event("pause");
							t.dispatchEvent(eventPause);
							n.cancelAnimationFrame(o);
							n.clearTimeout(x);
							n.requestAnimationFrame(() => {
								try {
									U();
								} catch (err) {}
							});
						}
						c = Date.now();
						u = 0;
					}
				}
			};
			const U = () => {
				let eventPause = new Event("pause");
				t.dispatchEvent(eventPause);
				eventEnded = new Event("ended");
				eventEnded.innerEvent = true;
				t.dispatchEvent(eventEnded);
			};
			this.destruct = () => {
				if (r) {
					try {
						f.pause();
					} catch (err) {}
				}
				n.cancelAnimationFrame(o);
				n.clearTimeout(x);
				const deleteProperties = (obj) => {
					if (!obj) return;
					let attrName, attrValue;
					if (obj.attributes) {
						for (attrValue = obj.attributes.length, attrName = 0; attrName < attrValue; attrName += 1) {
							attrValue = obj.attributes[attrName].name;
							if (typeof obj[attrValue] === "function") {
								obj[attrValue] = null;
							}
						}
					}
					if (obj.childNodes) {
						for (attrValue = obj.childNodes.length, attrName = 0; attrName < attrValue; attrName += 1) {
							deleteProperties(obj.childNodes[attrName]);
							if (obj.childNodes[attrName]) {
								obj.removeChild(obj.childNodes[attrName]);
							}
						}
					}
				};
				deleteProperties(this);
			};
			t.load();
		};
	};
}
class Video {
    constructor(t) {
        const i = {};
        i.elementType = "video";
        i.parent = "adsDiv";
        i.id = "video";
        i.appendCommand = "insertBefore";

        const s = t.report("createElement", i);
        s.autoplay = false;
        s.loop = true;
        s.muted = true;
        s.controls = false;
        s.playsinline = true;
        s.preload = true;
        s.style = "width:100%; position:absolute; top:0px; left:0px;";
        s.setAttribute("playsinline", "");
        s.setAttribute("webkit-playsinline", "");
        s.setAttribute("muted", true);

        s.addEventListener("playing", () => {
            t.report("video.playing");
        });
        s.addEventListener("pause", () => {
            t.report("video.pause");
        });
        s.addEventListener("ended", () => {
            t.report("video.ended");
        });
        s.addEventListener("volumechange", () => {
            const n = {};
            n.volume = s.volume;
            n.muted = s.muted;
            t.report("video.volume", n);
        });
        this.video = s;
        this.isIOS = Utils.isMobile("IOS");

        if (this.isIOS) {
            this.iosVidPlay = new IOSVidPlay(this.video);
        }
        t.listen("videoCommand", (t) => {
            s[t.command](t.value);
        });
        t.listen("adManager.adsStarted", () => {
            s.pause();
        });
        t.listen("adManager.adsCompleted", () => {
            s.play();
        });
        t.listen("adUnit.stickToPlayer", (i) => {
            i || t.claim("AdsManager.adIsActive") ? s.pause() : s.play();
        });
        t.listen("skin.play", () => {
            s.play();
        });
        t.listen("skin.pause", () => {
            s.pause();
        });
        t.listen("skin.mute", () => {
            s.muted = true;
        });
        t.listen("skin.unmute", () => {
            s.muted = false;
        });
        t.listen("destructAll", () => {
            this.destruct();
        });
    }
    set(t, e) {
        this.video[t] = e;
    }
    get(t) {
        return this.video[t];
    }
    destruct() {
        clearTimeout(this.stm);
        if (this.iosVidPlay) {
            this.iosVidPlay.destruct();
        }
        try {
            this.video.parentNode.removeChild(this.video);
        } catch (err) {}
        Utils.deleteObj(this);
    }
}
class Skin {
    constructor(t) {
        this.cl = t;
        const i = {};
        i.elementType = "div";
		i.parent = "playerDiv";
		i.id = "skin";
        const s = t.report("createElement", i);
        s.style = "position: absolute; left: 0px; z-index: -1;", Utils.isMobile(), s.style.top = "0px", this.skin = s;
        const n = {};
        n.elementType = "div";
		n.parent = "playerDiv";
		n.id = "skin1";
        t.report("createElement", n).style = "position: absolute; bottom: 0px; left: 0px; z-index: 99;";
		this.buildControls();
		this.addStyle();
		this.addActivity();
		t.listen("destructAll", (() => {
            this.destruct();
        }))
    }
	buildControls() {
		var e = {};
        e.elementType = "div";
		e.parent = "skin";
		e.id = "closeBtn";
        const i = this.cl.report("createElement", e);
        i.innerHTML = "<svg style=\"transform: translate(-50%, -50%)scale(0.5);z-index:1;left: 50%;pointer-events: none;position: relative;top: 50%; vertical-align: baseline;\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"><g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"Close\"><rect id=\"Rectangle\" x=\"0\" y=\"0\" width=\"24\" height=\"24\"><\/rect><g id=\"Group-7\" transform=\"translate(4.000000, 4.000000)\" stroke=\"#ffffff\" stroke-width=\"3.5\"><line x1=\"0\" y1=\"0\" x2=\"16\" y2=\"16\" id=\"Path-2\"><\/line><line x1=\"0\" y1=\"0\" x2=\"16\" y2=\"16\" id=\"Path-2\" transform=\"translate(8.000000, 8.000000) scale(-1, 1) translate(-8.000000, -8.000000) \"><\/line><\/g><\/g><\/g><\/svg>";
		i.style = "display:none; width: 63px;height: 63px;position: absolute;left: -20px;z-index: -1;cursor: initial;visibility: visible;text-align: initial;border-radius: 63px";
		//Utils.isMobile();
		i.style.top = "-50px";
        const s = {};
        s.elementType = "div";
		s.parent = "closeBtn";
		s.id = "closeBtnHit";
        const n = this.cl.report("createElement", s);
        n.style = "display: block;width: 23px;height: 23px;background-color: #999;position: absolute;top: 50%;left: 50%;z-index: 0;cursor: pointer;border-radius: 45px;transform: translate(-50%, -50%);";
        const o = {};
        o.elementType = "div";
		o.parent = "playerDiv";
		o.id = "logo";
        const x = this.cl.report("createElement", o);
        x.innerHTML = "<svg  width=\"100%\" height=\"100%\" viewBox=\"0 0 35 35\">  <path fill=\"#ffffff\" stroke=\"none\" d=\"M 31 31.05 Q 32.25 31.05 33.15 30.15 34.05 29.3 34.1 28 34.05 26.7 33.15 25.85 32.25 24.95 31 24.95 29.75 24.95 28.85 25.85 27.95 26.75 27.95 28 27.95 29.3 28.85 30.15 29.75 31.05 31 31.05 M 21.25 18.3 L 21.2 18.35 17.35 26.8 17.35 26.85 Q 17.1 27.45 17.1 28 17.1 29.25 18 30.15 18.9 31.05 20.2 31.05 21.25 31.05 22.05 30.45 22.85 29.85 23.1 28.9 L 26.65 21.15 Q 27 20.6 27 19.75 27 18.45 26.1 17.55 25.2 16.65 23.95 16.65 22.25 16.65 21.35 18.15 L 21.35 18.1 21.25 18.3 M 21.15 8.4 Q 21.5 7.85 21.5 6.95 21.5 5.7 20.6 4.8 19.7 3.9 18.45 3.9 16.65 3.9 15.8 5.45 L 15.75 5.45 15.7 5.65 8.7 20.75 6.8 16.6 6.75 16.6 Q 6.4 15.85 5.7 15.35 4.9 14.85 4 14.85 2.75 14.85 1.85 15.75 0.95 16.65 0.95 17.95 0.95 18.75 1.35 19.45 L 5.95 29.35 Q 6.8 31.05 8.7 31.05 10.6 31.05 11.4 29.4 L 11.45 29.45 21.15 8.4 Z\"\/> <\/svg>", x.style = "width: 24px;height: 24px; position: absolute;top: 2px;left: 4px;cursor: pointer;visibility: visible;text-align: initial;z-index:99;";
        const c = {};
        c.elementType = "div";
		c.parent = "skin1";
		c.id = "skinBottomBar";
        const r = this.cl.report("createElement", c);
        r.style = "display: flex;position: absolute;bottom: 0px;left: 0px;visibility:visible";
        const a = {};
        a.elementType = "div";
		a.parent = "skinBottomBar";
		a.id = "playBtn";
        const _ = this.cl.report("createElement", a);
        const l = {};
        l.elementType = "div";
		l.parent = "skinBottomBar";
		l.id = "pauseBtn";
        const d = this.cl.report("createElement", l),
            h = {};
        h.elementType = "div";
		h.parent = "skinBottomBar";
		h.id = "muteBtn";
        const u = this.cl.report("createElement", h),
            p = {};
        p.elementType = "div";
		p.parent = "skinBottomBar";
		p.id = "unmuteBtn";
        const f = this.cl.report("createElement", p);
        _.innerHTML = "<svg class=\"skinSvgCss\" viewBox=\"0 0 448 512\"><path d=\"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z\"><\/path><\/svg>";
		d.innerHTML = "<svg class=\"skinSvgCss\" viewBox=\"0 0 448 512\"><path d=\"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z\"><\/path><\/svg>";
		u.innerHTML = "<svg class=\"skinSvgCss\" viewBox=\"0 0 352 512\"><path d=\"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z\"><\/path><\/svg>";
		f.innerHTML = "<svg class=\"skinSvgCss\" style=\"width:16px;\" viewBox=\"0 0 640 512\"><path d=\"M633.82 458.1l-157.8-121.96C488.61 312.13 496 285.01 496 256v-48c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v48c0 17.92-3.96 34.8-10.72 50.2l-26.55-20.52c3.1-9.4 5.28-19.22 5.28-29.67V96c0-53.02-42.98-96-96-96s-96 42.98-96 96v45.36L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM400 464h-56v-33.77c11.66-1.6 22.85-4.54 33.67-8.31l-50.11-38.73c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85L144 241.31v6.85c0 89.64 63.97 169.55 152 181.69V464h-56c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16z\"><\/path><\/svg>";
		_.className = "skinBtnCss";
		d.className = "skinBtnCss";
		u.className = "skinBtnCss";
		f.className = "skinBtnCss";
		this.skinBottomBar = r;
		this.closeBtn = i;
		this.closeBtnHit = n;
		this.logo = x;
		this.playBtn = _;
		this.pauseBtn = d;
		this.muteBtn = u;
		this.unmuteBtn = f
    }
	addStyle() {
        var e = (t, e, i) => {
                const n = {};
                n.elementType = "style";
				n.parent = i;
				n.id = e;
                let o = this.cl.report("createElement", n);
                o.type = "text\/css";
				o.textContent = "." + e + " {" + t + "}";
            };
        e("width: 30px; height: 30px; border-radius: 4px; background-color: #fff; border: 1px solid #dbdbdb; border-width: 1px; color: #363636; cursor: pointer; position: relative; margin: 2px;", "skinBtnCss", "skin");
        e("width: 9px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);", "skinSvgCss", "skin")
    }
	addActivity() {
        let e = this.cl.claim("stickyController.status");
        this.closeBtn.style.display = e ? "block" : "none";
		this.muteBtn.style.display = "none";
		this.togglePlay(false);
		this.cl.listen("adManager.adsStarted", (() => {
            this.skinBottomBar.style.display = "none", this.logo.style.display = "none"
        }));
		this.cl.listen("adManager.adsCompleted", (() => {
            this.skinBottomBar.style.display = "flex", this.logo.style.display = "block"
        }));
		this.cl.listen("adUnit.stickToPlayer", (e => {
            this.skinBottomBar.style.display = e || this.cl.claim("AdsManager.adIsActive") ? "none" : "flex"
        }));
		this.cl.listen("stickyController.onChange", (e => {
			if (e) {
				this.closeBtn.style.display = "block";
				this.closeBtn.style.opacity = "0";
				this.opacityTimeout = setTimeout((() => {
					service.animateTo(this.closeBtn.style, "opacity", "1", .3, "linear")
				}), 3000);
			} else {
				this.closeBtn.style.display = "none";
				clearTimeout(this.opacityTimeout)
			}
        }));
		this.cl.listen("video.playing", (() => {
            this.togglePlay(true);
        }));
		this.cl.listen("video.pause", (() => {
            this.togglePlay(false);
        }));
		this.cl.listen("video.volume", (e => {
            this.muteBtn.style.display = e.muted ? "none" : "block";
			this.unmuteBtn.style.display = e.muted ? "block" : "none"
        }));
		this.closeBtnHit.addEventListener("click", (() => {
			if (config.stickyMode === 3) {
				this.cl.report("destructAll")
			} else {
				this.cl.report("skin.onCloseBtn")
			}
        }));
		this.playBtn.addEventListener("click", (() => {
            this.cl.report("skin.play");
        }));
		this.pauseBtn.addEventListener("click", (() => {
            this.cl.report("skin.pause");
        }));
		this.muteBtn.addEventListener("click", (() => {
            this.cl.report("skin.mute");
        }));
		this.unmuteBtn.addEventListener("click", (() => {
            this.cl.report("skin.unmute");
        }));
		this.logo.addEventListener("click", (() => {
            window.open("https:\/\/360playvid.com", "_blank")
        }))
    }
	togglePlay(t) {
		if (this.playBtn) {
			this.playBtn.style.display = t ? "none" : "block";
			this.pauseBtn.style.display = t ? "block" : "none";
		}
    }
	destruct() {
        try {
            this.skin.parentNode.removeChild(this.skin);
        } catch (t) {}
        Utils.deleteObj(this);
    }
}
class StickyController {
    constructor(t) {
        this.cl = t;
		this.config = t.claim("data", "config");
		this.stickyStatus = false;
		this.closeBtnLock = false;
		this.firstAdLock = (this.config.stickyMode === 2);
		this.allAdLock = (this.config.stickyMode === 4);
		this.playerDiv = t.claim("getElement", "playerDiv");
		this.adsDiv = t.claim("getElement", "adsDiv");
		this.containerDiv = t.claim("getElement", "containerDiv");
		this.parentWindow = t.claim("getElement", "parentWindow");
		t.serve("stickyController.status", (() => this.stickyStatus));
		t.listen("destructAll", (() => {
            this.destruct();
        }));
		if (this.config.stickyMode === 3) {
			this.goSticky();
		} else {
			t.listen("containerDiv.onViewChange", (t => {
				if (t.viewPct > config.stickyPCT) {
					this.closeBtnLock = false;
					this.firstAdLock = false;
				}
				this.deside(t);
			}));
			t.listen("skin.onCloseBtn", (() => {
				this.closeBtnLock = true;
				this.goUnSticky()
			}));
			t.listen("containerDiv.onRepose", (() => {
				if (!this.stickyStatus) {
					this.goUnSticky();
				}
			}));
			t.listen("adManager.adsImpression", (() => {
				this.closeBtnLock = false;
				this.firstAdLock = false;
				this.allAdLock = false;
				this.deside()
			}))
			if (this.config.stickyMode === 4) {
				t.listen("adManager.adsStopped", (() => {
					this.allAdLock = true;
					this.deside()
				}));
			}
			this.goUnSticky();
			Utils.suspend((() => {
				this.deside()
			}))
		}
    }
	deside(t) {
        let i = t || this.cl.claim("containerDiv.currViewState");
		if (
			!this.allAdLock &&
			!this.firstAdLock &&
			!this.closeBtnLock &&
			i.activeView &&
			(!i.isHidden && i.viewPct < this.config.stickyPCT || isNaN(i.viewPct)) &&
			!this.stickyStatus
		) {
			this.goSticky();
		} else if (
			this.stickyStatus &&
			(i.viewPct > this.config.stickyPCT || this.allAdLock)
		) {
			this.goUnSticky();
		}
    }
	goSticky() {
        if (this.config.stickyRivals) {
			service.clearInterval(this.stickyInterval);
			this.stickyInterval = service.setInterval(() => {
				let i = this.cl.claim("data", "ignoredStickyRivals");
				if (this.config.stickyRivals === 1) {
					Utils.setHighestZIndex(this.parentWindow, [this.playerDiv, ...i]);
				} else if (this.config.stickyRivals === 2) {
					Utils.getStickyRivals(this.parentWindow, [this.playerDiv, this.adsDiv, ...i]);
				}
			}, 100);
		}
		this.stickyStatus = true;
		Utils.setHighestZIndex(this.parentWindow, [this.playerDiv]);
		let e = this.config.stickyHzt.split(":");
		let i = -this.config.stickyWidth + "px";
		this.playerDiv.style = "position:fixed;" +
			this.config.stickyVrt +
			";width:" + this.config.stickyWidth + "px;" +
			"height:" + this.config.stickyHeight + "px;" +
			"filter: drop-shadow(2px 2px 5px black);" +
			"z-index:2147483647;" +
			"background-color:white;";
		this.cl.report("stickyController.onChange", true);
		if (this.config.stickyMode === 4) {
			this.playerDiv.style[e[0]] = i;
			service.animateTo(this.playerDiv.style, e[0], e[1], 0.6, "easeOut");
		} else {
			this.playerDiv.style[e[0]] = e[1];
		}
    }
	goUnSticky() {
        let e = this.stickyStatus;
        service.clearInterval(this.stickyInterval);
		this.stickyStatus = false;
		this.cl.report("stickyController.onChange", false);
        const i = () => {
            this.playerDiv.style = "background-color:white;";
			this.playerDiv.style.width = this.containerDiv.offsetWidth + "px";
			this.playerDiv.style.height = this.containerDiv.offsetHeight + "px";
			this.playerDiv.style.position = "relative";
			this.playerDiv.style.top = "0px";
			this.playerDiv.style.left = "-1000px";
            let i = this.containerDiv.getBoundingClientRect().y - this.playerDiv.getBoundingClientRect().y;
			let s = this.containerDiv.getBoundingClientRect().x - this.playerDiv.getBoundingClientRect().x - 1000;
            this.playerDiv.style.top = i + "px";
			this.playerDiv.style.left = s + "px"
        };
        if (this.config.stickyMode === 4 && e) {
            let e = this.config.stickyHzt.split(":");
            service.animateTo(this.playerDiv.style, e[0], -this.config.stickyWidth + "px", .6, "easeIn", i)
        } else {
			i();
		}
    }
	destruct() {
        service.clearInterval(this.stickyInterval), Utils.deleteObj(this)
    }
}
class Data {
    constructor(t) {
        this.ignoredStickyRivals = [];
        t.listen("data.addParam", (t) => {
            for (let e in t) {
                this[e] = t[e];
            }
        });
        t.serve("data", (t) => this[t]);
        t.listen("destructAll", () => {
            Utils.deleteObj(this);
        });
    }
}
var pixelsId = "1stkissmanga.me-18a",
    devVersion = "t18a_mix-03_E5-closeBtn1_Preroll_Midroll_fixedIOS_mixedWF_stickyTop",
    firePixels = false,
    publisher = "1stkissmanga.me",
    demandType = 1,
    demandSource = "ima",
    maxWidth = 500,
    stickyMode = 4;
const _0x2fc887 = {};
_0x2fc887.advertiser = "360pv";
_0x2fc887.tagsArr = [800/*, 650, 600, 500, 400, 300, 250, 200, 170, 150, 130*/];
_0x2fc887.vastUrl = "https:\/\/pubads.g.doubleclick.net\/gampad\/ads?iu=\/22065771467,22648692953\/360P_%REPLACEME%&description_url=1stkissmanga.me&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear&pod=1&pmad=2&pmnd=0&pmxd=120000&vpos=preroll&npa=0";
_0x2fc887.vastUrl = "https:\/\/pubads.g.doubleclick.net\/gampad\/ads?iu=\/21775744923\/external\/single_ad_samples&description_url=video.wavetechnological.com&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=&vad_type=linear&pod=1&pmad=2&pmnd=0&pmxd=120000&vpos=preroll&npa=0&cust_params=sample_ct%3Dlinear";
_0x2fc887.vastUrl = "https:\/\/video.wavetechnological.com\/vastxmltest.php";
const _0x23978c = {};
_0x23978c.advertiser = "Zippor";
_0x23978c.tagsArr = [/*775, 625, 575, 475, 375, 275, 225, 175, 145, 125, 105*/], _0x23978c.vastUrl = "https:\/\/pubads.g.doubleclick.net\/gampad\/ads?iu=\/21871694306,22648692953\/360P_%REPLACEME%&description_url=1stkissmanga.me&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=";
const _0x34c460 = {};
_0x34c460.advertiser = "Dor";
_0x34c460.tagsArr = [/*800, 650, 600, 500, 400, 300, 250, 200, 170, 150, 130*/], _0x34c460.vastUrl = "https:\/\/pubads.g.doubleclick.net\/gampad\/ads?iu=\/21725819945,22796253936\/360P_%REPLACEME%&description_url=1stkissmanga.me&tfcd=0&npa=0&sz=1x1%7C400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=";
var imaUnits = [_0x2fc887, _0x23978c, _0x34c460];
let replacer = "%REPLACEME%";
let reportReplicator = .01;
var videoUrls = ["https:\/\/secureservercdn.net\/160.153.137.40\/m8w.db3.myftpupload.com\/wp-content\/uploads\/2021\/04\/3.mp4?v=0", "https:\/\/secureservercdn.net\/160.153.137.40\/m8w.db3.myftpupload.com\/wp-content\/uploads\/2021\/04\/3.mp4?v=1"];
var vastsArray = [];
var isABtest = 0;
class ABtest {
    constructor(t, e) {
        this.abTestGap = e, this.abTestTypesNum = t, this.abStatus = -1, this.calcAB()
    }
	calcAB() {
        const e = (new Date).getTime(),
            i = Math.floor(e / 1000);
        let s = Math.floor(i % (this.abTestGap * this.abTestTypesNum) / this.abTestGap);
        s !== this.abStatus && (this.abStatus = s)
    }
}
/*if (2 === isABtest) {
    let t = new ABtest(2, 10 * imaUnits.length);
    if (console.log("mainABT", t.abStatus), devVersion += "-ABT" + t.abStatus, t.abStatus) {
        let t = new ABtest(imaUnits.length, 10);
        console.log("abt", t.abStatus), devVersion += "-abt" + t.abStatus, vastUrl = imaUnits[t.abStatus].vastUrl, advertiser = imaUnits[t.abStatus].advertiser, tagsArr = imaUnits[t.abStatus].tagsArr;
        for (let t = 0; t < tagsArr.length; t++) {
            let e = vastUrl.replace(replacer, tagsArr[t]);
            const i = {};
            i.vast = e, i.tag = tagsArr[t], i.advertiser = advertiser, vastsArray.push(i)
        }
    } else {
        for (let t of imaUnits)
            for (let e = 0; e < t.tagsArr.length; e++) {
                let i = t.vastUrl.replace(replacer, t.tagsArr[e]);
                const s = {};
                s.vast = i, s.tag = t.tagsArr[e], s.advertiser = t.advertiser, vastsArray.push(s)
            }
        vastsArray.sort((function(t, e) {
            return e.tag - t.tag
        }))
    }
} else if (1 === isABtest) {
    let t = new ABtest(imaUnits.length, 10);
    console.log("abt", t.abStatus), devVersion += "-abt" + t.abStatus, vastUrl = imaUnits[t.abStatus].vastUrl, advertiser = imaUnits[t.abStatus].advertiser, tagsArr = imaUnits[t.abStatus].tagsArr;
    for (let t = 0; t < tagsArr.length; t++) {
        let e = vastUrl.replace(replacer, tagsArr[t]);
        const i = {};
        i.vast = e, i.tag = tagsArr[t], i.advertiser = advertiser, vastsArray.push(i)
    }
} else {*/
    for (let t of imaUnits)
        for (let e = 0; e < t.tagsArr.length; e++) {
            let i = t.vastUrl.replace(replacer, t.tagsArr[e]);
            const s = {};
            s.vast = i, s.tag = t.tagsArr[e], s.advertiser = t.advertiser, vastsArray.push(s)
        }
    vastsArray.sort((function(t, e) {
        return e.tag - t.tag
    }))
//}
console.log(vastsArray);
const _0x26fb24 = {};
_0x26fb24.iu = "/21775744923/external/single_ad_samples", _0x26fb24.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0x35d41d = {};
_0x35d41d.unitId = "ima360P_800_a", _0x35d41d.advertiser = "360pv", _0x35d41d.vastParams = _0x26fb24, _0x35d41d.bidFloor = 8;
const _0x59aae6 = {};
_0x59aae6.iu = "\/22065771467,22648692953\/360P_650", _0x59aae6.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0xb822c9 = {};
_0xb822c9.unitId = "ima360P_650", _0xb822c9.advertiser = "360pv", _0xb822c9.vastParams = _0x59aae6, _0xb822c9.bidFloor = 6.5;
const _0x4da271 = {};
_0x4da271.iu = "\/22065771467,22648692953\/360P_600", _0x4da271.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0x43e7db = {};
_0x43e7db.unitId = "ima360P_600", _0x43e7db.advertiser = "360pv", _0x43e7db.vastParams = _0x4da271, _0x43e7db.bidFloor = 6;
const _0x746f73 = {};
_0x746f73.iu = "\/22065771467,22648692953\/360P_500", _0x746f73.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0x16bb8c = {};
_0x16bb8c.unitId = "ima360P_500", _0x16bb8c.advertiser = "360pv", _0x16bb8c.vastParams = _0x746f73, _0x16bb8c.bidFloor = 5;
const _0x158f02 = {};
_0x158f02.iu = "\/22065771467,22648692953\/360P_400", _0x158f02.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0x4d2a99 = {};
_0x4d2a99.unitId = "ima360P_400", _0x4d2a99.advertiser = "360pv", _0x4d2a99.vastParams = _0x158f02, _0x4d2a99.bidFloor = 4;
const _0x29f6dc = {};
_0x29f6dc.iu = "\/22065771467,22648692953\/360P_300", _0x29f6dc.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0xe625a2 = {};
_0xe625a2.unitId = "ima360P_300", _0xe625a2.advertiser = "360pv", _0xe625a2.vastParams = _0x29f6dc, _0xe625a2.bidFloor = 3;
const _0x2dd096 = {};
_0x2dd096.iu = "\/22065771467,22648692953\/360P_250", _0x2dd096.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0x34bed5 = {};
_0x34bed5.unitId = "ima360P_250", _0x34bed5.advertiser = "360pv", _0x34bed5.vastParams = _0x2dd096, _0x34bed5.bidFloor = 2.5;
const _0x2b692a = {};
_0x2b692a.iu = "\/22065771467,22648692953\/360P_200", _0x2b692a.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0x6505bc = {};
_0x6505bc.unitId = "ima360P_200", _0x6505bc.advertiser = "360pv", _0x6505bc.vastParams = _0x2b692a, _0x6505bc.bidFloor = 2;
const _0x1314ed = {};
_0x1314ed.iu = "\/22065771467,22648692953\/360P_170", _0x1314ed.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0x36d73a = {};
_0x36d73a.unitId = "ima360P_170", _0x36d73a.advertiser = "360pv", _0x36d73a.vastParams = _0x1314ed, _0x36d73a.bidFloor = 1.7;
const _0x58995d = {};
_0x58995d.iu = "\/22065771467,22648692953\/360P_150", _0x58995d.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0xd0a422 = {};
_0xd0a422.unitId = "ima360P_150", _0xd0a422.advertiser = "360pv", _0xd0a422.vastParams = _0x58995d, _0xd0a422.bidFloor = 1.5;
const _0x5eafab = {};
_0x5eafab.iu = "\/22065771467,22648692953\/360P_130", _0x5eafab.descriptionUrl = "http%3A%2F%2Fskydemonorder.com";
const _0x2f2925 = {};
_0x2f2925.unitId = "ima360P_130", _0x2f2925.advertiser = "360pv", _0x2f2925.vastParams = _0x5eafab, _0x2f2925.bidFloor = 1.3;
const _0x43533c = {};
_0x43533c.unitType = "imaWF", _0x43533c.inViewOnly = false, _0x43533c.frequency = [9, 9], _0x43533c.cpm = 6, _0x43533c.waterfall = [_0x35d41d, _0xb822c9, _0x43e7db, _0x16bb8c, _0x4d2a99, _0xe625a2, _0x34bed5, _0x6505bc, _0x36d73a, _0xd0a422, _0x2f2925];
const _0x27b9db = {};
_0x27b9db.pixelsId = pixelsId, _0x27b9db.pixelsList = ["Impression", "Inv", "viewableImpression"], _0x27b9db.imaPixelsList = '', _0x27b9db.firePixels = firePixels, _0x27b9db.publisher = publisher, _0x27b9db.stickyMode = stickyMode, _0x27b9db.sellerId = "75da8e5f", _0x27b9db.adFormationMaxTime = 20, _0x27b9db.adDurationMaxTime = 60, _0x27b9db.adCycleFrequency = .1, _0x27b9db.imaUnits = [_0x43533c], _0x27b9db.bidUnits = [], _0x27b9db.videoUrls = videoUrls;
console.log(_0x27b9db);
const settings = _0x27b9db,
    config = {
        debugMode: true,
        debugBidder: false,
        bidsInterval: 1000,
        abTestGap: 10,
        abTestTypesNum: 2,
        devVersion,
        autoResize: 1,
        maxWidth,
        playerParentDiv: "containerDiv",
        stickyWidth: 320,
        stickyHeight: 180,
        stickyHzt: "right:0px",
        stickyVrt: Utils.isMobile() ? "bottom:10px" : "bottom:220px",
        stickyPCT: .51,
        stickyRivals: 1,
        footerId: "<footer>",
        imaParentDiv: "adsDiv",
        imaOverflow: "iframe",
        fixedDuration: 15,
        maxAdsStack: 600,
        adSkipDelay: 10,
        prebidUrl: "https:\/\/m8w.db3.myftpupload.com\/wp-content\/uploads\/2022\/10\/prebid6.13.0.apsriyfbouacp-cso-pf-uid_cu2.js",
        steerBaseHref: "",
        isMobile: Utils.isMobile(),
        currScript,
        initTime,
        inventoryID: "p" + Math.round(1e6 * Math.random())
    };
for (let t in settings) config[t] = settings[t];
const cl = new CL,
    service = new Service;
new Data(cl);
const _0x2783df = {};
_0x2783df.config = config, cl.report("data.addParam", _0x2783df), new Display(cl);
const player = new Video(cl);
player.set("src", videoUrls[0]), new Skin(cl), new PosObserver(cl, "containerDiv"), new PosObserver(cl, "playerDiv"), new ViewObserver(cl, "containerDiv"), new ViewObserver(cl, "playerDiv"), new SizeObserver(cl, "containerDiv"), new SizeObserver(cl, "playerDiv"), config.stickyMode && new StickyController(cl);
let imaStoppedTimeout, videoEl, imaDiv, adUnit, iosVideoEl, isAdPlaying = false;
function imaAdUnit() {
    var e = this;
    this.playerDiv = cl.claim("getElement", "playerDiv"), this.adsDiv = cl.claim("getElement", "adsDiv");
    var i, s, n = null,
        o = null,
        x = false,
        c = iosVideoEl || videoEl,
        r = (c.muted || c.volume, false),
        a = false,
        _ = false;
    function l() {
        isAdPlaying = true, e.resizeAd(), !r && (r = true, a && (o.setVolume(0), 0))
    }
    var d = false;
    function h() {
        !d && (d = true, clearTimeout(imaStoppedTimeout), imaDiv.style.display = "block")
    }
    var u = false;
    function p() {
        !u && (u = true, clearTimeout(s), clearTimeout(imaStoppedTimeout), o && o.destroy(), _ && (imaDiv.style.display = "none"), runWaterfall(r ? "complete" : "error"), isAdPlaying = false, cl.report("adManager.adsStopped"))
    }
    this.initialize = function() {
        try {
			if (typeof google !== "undefined" && google.ima !== undefined) {
				i = new google.ima.AdDisplayContainer(imaDiv, c);
				n = new google.ima.AdsLoader(i);
				i.initialize();
				n.getSettings().setDisableCustomPlaybackForIOS10Plus(true);
				n.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (i) => {
					_ = false;
					var a = new google.ima.AdsRenderingSettings();
					a.loadVideoTimeout = 15000;
					a.restoreCustomPlaybackStateOnAdBreakComplete = false;
					var d = ["video/mp4"];
					if (c.canPlayType("video/webm")) {
						d.push("video/webm");
					}
					a.mimeTypes = d;
					o = i.getAdsManager(c, a);
					c.muted ? o.setVolume(0) : o.setVolume(c.volume);
					o.addEventListener(google.ima.AdEvent.Type.CLICK, () => {
						if (!x) {
							x = true;
							imaDiv.style.bottom = "0";
						} else {
							x = false;
							o.resume();
						}
					});
					o.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (t) => {
						p();
					});
					o.addEventListener(google.ima.AdEvent.Type.LOADED, () => {
						h();
					});
					o.addEventListener(google.ima.AdEvent.Type.PAUSED, () => {});
					o.addEventListener(google.ima.AdEvent.Type.RESUMED, () => {});
					o.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, () => {
						h();
						cl.report("adManager.adsStarted");
						if (iosVideoEl) {
							iosVideoEl.style.zIndex = 0;
						}
						_ = true;
						var e = imaDiv;
						if (e) {
							e.style.display = "block";
						}
						var i = e.getElementsByTagName("iframe");
						if (i.length) {
							i[0].style.display = "block";
						}
					});
					o.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, () => {
						imaDiv.style.display = "none";
						cl.report("adManager.adsCompleted");
						if (iosVideoEl) {
							iosVideoEl.style.zIndex = -1;
						}
						p();
					});
					o.addEventListener(google.ima.AdEvent.Type.STARTED, () => {
						l();
					});
					o.addEventListener(google.ima.AdEvent.Type.IMPRESSION, () => {
						l();
						cl.report("adManager.adsImpression");
						reportAdImpression();
					});
					o.addEventListener(google.ima.AdEvent.Type.COMPLETE, () => {
						cl.report("adManager.adComplete");
					});
					o.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, () => {
						s = setTimeout(() => {
							if (!u) {
								imaDiv.style.display = "none";
								p();
							}
						}, 4000);
					});
					o.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, () => {});
					o.addEventListener(google.ima.AdEvent.Type.MIDPOINT, () => {});
					o.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, () => {});
					o.addEventListener(google.ima.AdEvent.Type.SKIPPED, () => {});
					o.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED, () => {
						o.getVolume();
					});
					o.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, () => {});
					let f = e.playerDiv.offsetWidth;
					let m = e.playerDiv.offsetHeight;
					e.adsDiv.style.width = f + "px";
					e.adsDiv.style.height = m + "px";
					o.init(f, m, google.ima.ViewMode.NORMAL);
					o.start();
				}, false);
				n.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (t) => {
					p();
				}, false);
			}
		} catch (t) {}
    };
	this.loadAd = function(i, s) {
		u = false;
		if (typeof google !== "undefined" && google.ima !== undefined) {
			google.ima.settings.setPlayerType("Splendid");
			google.ima.settings.setPlayerVersion("1.0.0");
			let t = e.playerDiv.offsetWidth;
			let i = e.playerDiv.offsetHeight;
			e.adsDiv.style.width = t + "px";
			e.adsDiv.style.height = i + "px";
			if (n) {
				x = r = false;
				n.requestAds(function() {
					var n = new google.ima.AdsRequest();
					n.adTagUrl = s;
					n.linearAdSlotWidth = t;
					n.linearAdSlotHeight = i;
					n.nonLinearAdSlotWidth = t;
					n.nonLinearAdSlotHeight = Math.round(0.375 * i);
					n.forceNonLinearFullSlot = false;
					n.vastLoadTimeout = 8000;
					n.setAdWillAutoPlay(true);
					a = false;
					if (c.muted || c.volume == 0) {
						a = true;
					} else {
						n.setAdWillPlayMuted(false);
					}
					return n;
				}());
			} else {
				setTimeout(function() {
					u = true;
				}, 100);
			}
		} else {
			p();
		}
	};
	this.resizeAd = function() {
		if (!o) {
			return;
		}
		const s = e.playerDiv.offsetWidth;
		const n = e.playerDiv.offsetHeight;
		e.adsDiv.style.width = s + "px";
		e.adsDiv.style.height = n + "px";
		o.resize(s, n, "normal");
	};
	cl.listen("playerDiv.onResize", (() => {
        this.resizeAd();
    }));
}
const constructHtml = () => {
    imaDiv = cl.claim("getElement", "adsDiv");
    videoEl = cl.claim("getElement", "video");
    if (Utils.isMobile("IOS")) {
        const e = {};
        e.elementType = "video";
        e.parent = "adsDiv";
        e.id = "iosVideo";
        e.appendCommand = "insertBefore";
        const i = cl.report("createElement", e);
        i.autoplay = true;
        i.preload = "none";
        i.loop = false;
        i.muted = true;
        i.controls = false;
        i.playsinline = true;
        i.style = "width:100%; position:absolute; top:0px; left:0px; z-index:-1;";
        i.setAttribute("playsinline", "");
        i.setAttribute("webkit-playsinline", "");
        i.setAttribute("muted", true);
        new IOSVidPlay(i);
        iosVideoEl = i;
    }
    var e = document.createElement("script");
    e.type = "text/javascript";
    e.src = "//imasdk.googleapis.com/js/sdkloader/ima3.js";
    e.onload = () => {
        adUnit = new imaAdUnit;
        console.log(adUnit);
        adUnit.initialize();
        runWaterfall("start");
        manageVideoEl();
    };
    document.head.appendChild(e);
};
let currTag, currAdvertiser, midTimeout, watrfallIndex = 0;
const runWaterfall = t => {
    clearTimeout(midTimeout);
	if (watrfallIndex >= vastsArray.length) {
		watrfallIndex = 0;
		cl.report("adManager.adsCompleted");
		return void(midTimeout = setTimeout((() => {
			runWaterfall("mid")
		}), 10000));
	}
    let i;
    switch (t) {
        case "start":
            if (watrfallIndex > 0) return;
            watrfallIndex = 0;
			currTag = vastsArray[watrfallIndex].tag;
			currAdvertiser = vastsArray[watrfallIndex].advertiser;
			i = vastsArray[watrfallIndex++].vast;
			adUnit.loadAd(null, i);
            break;
        case "mid":
            if (watrfallIndex > 0) return;
            currTag = vastsArray[watrfallIndex].tag;
			currAdvertiser = vastsArray[watrfallIndex].advertiser;
			i = vastsArray[watrfallIndex++].vast;
			adUnit.loadAd(null, i);
            break;
        case "error":
            currTag = vastsArray[watrfallIndex].tag;
			currAdvertiser = vastsArray[watrfallIndex].advertiser;
			i = vastsArray[watrfallIndex++].vast;
			adUnit.loadAd(null, i);
            break;
        case "complete":
            watrfallIndex = 0;
			cl.report("adManager.adsCompleted");
			midTimeout = setTimeout((() => {
                runWaterfall("mid")
            }), 10000);
    }
};
let currVidId = 0;
const manageVideoEl = () => {
    videoEl.addEventListener("timeupdate", (() => {
		// Pubblicità successiva ogni 25 secondi del video placeholder
        if (videoEl.currentTime % 25 === 0) {
			videoEl.src = videoUrls[++currVidId % videoUrls.length];
			runWaterfall("start");
		}
    }))
};
constructHtml();
const reportAdImpression = () => {
    Utils.firePixel(config.inventoryID, "Impression::" + currTag);
    Utils.pixelReport("impression", demandType, demandSource, currAdvertiser, currTag * reportReplicator);
    const e = {
		demandType: demandType,
		demandSource: demandSource,
		currAdvertiser: currAdvertiser
	};
    new ImpViewObserver(cl, e);
    setTimeout(() => {
        let i = cl.claim("playerDiv.isViewable");
        let s = cl.claim("playerDiv.currViewState");
        Utils.firePixel(
            config.inventoryID,
            "viewableImpression::" + currTag,
            "isViewable:" + i + "::activeView:" + s.activeView + "::isHidden:" + s.isHidden + "::viewPct:" + s.viewPct
        );
    }, 3000);
};
Utils.firePixel(config.inventoryID, "Inv");
Utils.pixelReport("inventory");
let jsTag = currScript;
//console.log("jsTag.parentNode", jsTag.parentNode);
let els = document.getElementsByName("adPlayer");
//console.log("els", els), els && els[0] && els[0].parentNode === jsTag.parentNode && (jsTag.parentNode.removeChild(els[0]), jsTag.parentNode.style.width = "auto");
