(this.webpackJsonpbooster=this.webpackJsonpbooster||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(6),a=n.n(c),o=n(3),s=n(8),i=n(7),l=n.n(i),u=function(e){var t=e.current,n=null===t||void 0===t?void 0:t.querySelector(".card-layer");if(t&&n){for(;t.firstChild;)t.removeChild(t.firstChild);var r=document.createElement("div"),c=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div");r.className="card-container",c.className="card-shine",a.className="card-shadow";var s=document.createElement("div"),i=n.getAttribute("data-img");s.className="card-rendered-layer",s.style.backgroundImage="url(".concat(i,")"),o.appendChild(s),t.appendChild(r),[a,o,c].forEach((function(e){return r.appendChild(e)})),t.style.transform="perspective(".concat(3*t.clientWidth,"px)");var l={mouseMove:function(e){return function(e,t,n){var r=e.pageX,c=e.pageY,a=t.getBoundingClientRect(),o=t.clientWidth,s=t.clientHeight,i=250/o,l=.52-(r-a.left-window.scrollX)/o,u=.52-(c-a.top-window.scrollY)/s,d=c-a.top-window.scrollY-s/2,m=r-a.left-window.scrollX-o/2,f=.07*i*(l-m),v=["rotateX(".concat(.1*i*(d-u),"deg) rotateY(").concat(f,"deg)")],h=180*Math.atan2(d,m)/Math.PI-90;h<0&&(h+=360),t.firstChild instanceof HTMLElement&&t.firstChild.className.includes(" over")&&v.push("scale3d(1.07, 1.07, 1.07)"),t.firstChild instanceof HTMLElement&&(t.firstChild.style.transform=v.join(" "));var p=(c-a.top-window.scrollY)/s*.4;n.style.background="linear-gradient(".concat(h,"deg, rgba(255, 255, 255, ").concat(p,") 0%, rgba(255, 255, 255, 0) 80%)"),n.style.transform="translateX(".concat(l-.1,"px) translateY(").concat(u-.1,"px)")}(e,t,c)},mouseEnter:function(){var e;(e=t).firstChild instanceof HTMLElement&&e.firstChild.classList.add("over")},mouseLeave:function(){return function(e,t,n){var r=e.firstChild;r instanceof HTMLElement&&(r.classList.remove("over"),r.style.transform=""),n.style.cssText="",t.style.transform=""}(t,s,c)}};return t.addEventListener("mousemove",l.mouseMove),t.addEventListener("mouseenter",l.mouseEnter),t.addEventListener("mouseleave",l.mouseLeave),l}},d=(n(14),n(0)),m=function(e){var t=e.src,n=e.onClick,c=Object(r.useRef)(null),a=Object(r.useState)(void 0),s=Object(o.a)(a,2),i=s[0],l=s[1],m=Object(r.useState)(!1),f=Object(o.a)(m,2),v=f[0],h=f[1],p=function(){!function(e,t){var n=e.current;n&&t&&(n.removeEventListener("mousemove",t.mouseMove),n.removeEventListener("mouseenter",t.mouseEnter),n.removeEventListener("mouseleave",t.mouseLeave))}(c,i),h(!0)};Object(r.useEffect)((function(){return l(u(c)),function(){return p()}}),[]);return v?null:Object(d.jsx)("div",{ref:c,onClick:function(){return null===n||void 0===n?void 0:n((function(){return p()}))},className:"cover card",children:Object(d.jsx)("div",{className:"card-layer","data-img":t})})};m.defaultProps={onClick:void 0};var f,v=m,h=(n(16),function(e,t,n){return Array.from(new Set(Object(s.a)(Array(e)).map((function(){return function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}(t,n)})))).map((function(e){return{id:"".concat(e),key:l()()}}))}),p=function(){var e=function(){return h(8,1,113)},t=Object(r.useState)(e()),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("header",{className:"app-header"}),Object(d.jsx)("main",{className:"app-content",children:c.map((function(t){return Object(d.jsx)(v,{onClick:function(n){return function(t,n){n(),c.splice(c.findIndex((function(e){return e.key===t})),1),a(c.length?c:e())}(t.key,n)},src:"".concat("https://assets.pokemon.com/assets/cms2/img/cards/web/XY12/XY12_EN_").concat(t.id,".png")},t.key)}))})]})};n(17);a.a.render(Object(d.jsx)(r.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),f&&f instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var t=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(f),n(f),r(f),c(f),a(f)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0e3e2157.chunk.js.map