(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(0),c=n.n(r),l=n(9),o=n.n(l),u=n(172),i=n(50),s=n.n(i),m=n(166),f=n(171),d=n(170),p=n(185),E=n(74),v=n.n(E),h=n(75),b=n.n(h),g=(n(115),n(11)),w=n.n(g),O=n(26),j=n(56),k=function(){var e=Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)("Contacts",1,{upgrade:function(e){e.createObjectStore("contacts",{keyPath:"id",autoIncrement:!0}).createIndex("date","date")}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(O.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k().then((function(e){e.add("contacts",t),e.close()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k().then((function(e){var t=e.getAllFromIndex("contacts","date");return e.close(),t})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(O.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)("User",1,{upgrade:function(e){e.createObjectStore("user",{keyPath:"id",autoIncrement:!0}).createIndex("lastName","lastName")}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return S().then(function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAll("user");case 2:return n=e.sent,t.close(),e.abrupt("return",n.shift());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};function C(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),n=t[0],l=t[1],o=Object(r.useState)(null),i=Object(a.a)(o,2),E=i[0],h=i[1],g=Object(r.useState)(!1),w=Object(a.a)(g,2),O=w[0],j=w[1];Object(r.useEffect)((function(){x().then((function(e){h(JSON.stringify(e))}))}),[]);return c.a.createElement("main",null,c.a.createElement(m.a,{className:"card"},c.a.createElement(d.a,{className:"card-content"},O&&c.a.createElement(b.a,{onScan:function(e){e&&(l(JSON.parse(e)),j(!1),N({user:JSON.parse(e),date:new Date}))},style:{width:"250px"}}),E&&!O&&c.a.createElement(v.a,{value:E,size:250})),c.a.createElement("div",{className:"card-text"},"Dein pers\xf6nlicher QR-Code"),c.a.createElement(f.a,null,c.a.createElement(u.a,{onClick:function(){return j(!O)},variant:"contained",color:"primary",fullWidth:!0,endIcon:c.a.createElement(s.a,null)},O?"Scannen abbrechen":"QR-Code Scannen"))),n&&c.a.createElement(p.a,{onClick:function(){return l(null)},elevation:6,variant:"filled",severity:"success"},"Scanned: ".concat(null===n||void 0===n?void 0:n.firstName," ").concat(null===n||void 0===n?void 0:n.lastName)))}var W=n(18),I=n(27),A=n(81),D=n.n(A),R=n(184),J=n(174);n(119);function P(){var e=Object(r.useState)({id:"",firstName:"",lastName:"",street:"",postal:"",city:"",phone:""}),t=Object(a.a)(e,2),n=t[0],l=t[1];Object(r.useEffect)((function(){x().then((function(e){e&&l(e)}))}),[]);var o=function(e,t){l(Object(I.a)(Object(I.a)({},n),{},Object(W.a)({},e,[t])))},i=function(){n.id?function(e){S().then((function(t){t.add("user",e),t.close()}))}(n):function(e){S().then((function(t){t.put("user",e),t.close()}))}(n)};return c.a.createElement("main",null,c.a.createElement(m.a,{className:"personal-card"},c.a.createElement("form",{className:"personal-form"},c.a.createElement(J.a,{container:!0,spacing:2},c.a.createElement(J.a,{item:!0,xs:6},c.a.createElement(R.a,{value:n.firstName,onInput:function(e){return o("firstName",e.target.value)},label:"Vorname",fullWidth:!0})),c.a.createElement(J.a,{item:!0,xs:6},c.a.createElement(R.a,{value:n.lastName,onInput:function(e){return o("lastName",e.target.value)},label:"Nachname",fullWidth:!0})),c.a.createElement(J.a,{item:!0,xs:12},c.a.createElement(R.a,{value:n.street,onInput:function(e){return o("street",e.target.value)},label:"Stra\xdfe",fullWidth:!0})),c.a.createElement(J.a,{item:!0,xs:4},c.a.createElement(R.a,{value:n.postal,onInput:function(e){return o("postal",e.target.value)},label:"Plz"})),c.a.createElement(J.a,{item:!0,xs:8},c.a.createElement(R.a,{value:n.city,onInput:function(e){return o("city",e.target.value)},label:"Stadt",fullWidth:!0})),c.a.createElement(J.a,{item:!0,xs:12},c.a.createElement(R.a,{value:n.phone,onInput:function(e){return o("phone",e.target.value)},label:"Telefonnummer",fullWidth:!0}))),c.a.createElement("br",null),c.a.createElement(f.a,null,c.a.createElement(u.a,{onClick:function(){return i()},variant:"contained",color:"primary",fullWidth:!0,endIcon:c.a.createElement(D.a,null)},"Speichern")))))}var B=n(182),L=n(183),U=n(180),Y=n(181),M=n(57),Q=n(54),T=n.n(Q),z=n(37),F=n.n(z),G=n(83),K=n.n(G),V=n(84),$=n.n(V),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var X=n(10),Z=n(85),_=(n(120),n(175)),ee=n(176),te=n(177),ne=n(178),ae=n(179),re=(n(121),n(82)),ce=n.n(re);function le(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),n=t[0],l=t[1];return Object(r.useEffect)((function(){y().then((function(e){l(e)}))}),[]),c.a.createElement("main",null,c.a.createElement(m.a,{className:"contact-card"},n?c.a.createElement(_.a,null,(n||[]).map((function(e,t){var n,a;return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement(ee.a,null,c.a.createElement(te.a,null,c.a.createElement(F.a,null)),c.a.createElement(ne.a,{primary:"".concat(null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.firstName," ").concat(null===e||void 0===e||null===(a=e.user)||void 0===a?void 0:a.lastName)}),c.a.createElement(ne.a,{className:"list-item-prepend",primary:"".concat(ce()(null===e||void 0===e?void 0:e.date).format("DD.MM.YYYY"))})),c.a.createElement(ae.a,null))}))):c.a.createElement("div",{className:"contact-placeholder"},"Bisher wurden keine Kontakte gescanned.")))}var oe=n(187);n(122);function ue(e){var t=e.drawerOpen,n=e.setDrawerOpen;return c.a.createElement(oe.a,{anchor:"left",open:t,onClose:function(){return n(!1)}},c.a.createElement("div",{className:"sidenav-container"},c.a.createElement(_.a,null,c.a.createElement(ee.a,{button:!0},c.a.createElement(te.a,null,c.a.createElement(F.a,null)),c.a.createElement(ne.a,null,"Login")),c.a.createElement(ae.a,null),c.a.createElement(ee.a,{button:!0},c.a.createElement(te.a,null,c.a.createElement(T.a,null)),c.a.createElement(ne.a,null,"G\xe4ste")))))}var ie=n(173);function se(){var e=Object(X.g)(),t=Object(r.useState)(0),n=Object(a.a)(t,2),l=n[0],o=n[1],u=Object(r.useState)(!1),i=Object(a.a)(u,2),m=i[0],f=i[1];return c.a.createElement("div",{className:"content-container"},c.a.createElement(U.a,{position:"static"},c.a.createElement(Y.a,null,c.a.createElement(ie.a,{edge:"start",color:"inherit",onClick:function(){return f(!m)}},c.a.createElement(K.a,null)),c.a.createElement(M.a,{variant:"h6"},c.a.createElement("b",null,"QRona"),c.a.createElement($.a,null)))),c.a.createElement(ue,{drawerOpen:m,setDrawerOpen:f}),c.a.createElement(X.d,null,c.a.createElement(X.b,{exact:!0,path:"/home"},c.a.createElement(C,null)),c.a.createElement(X.b,{exact:!0,path:"/personal"},c.a.createElement(P,null)),c.a.createElement(X.b,{exact:!0,path:"/contacts"},c.a.createElement(le,null)),c.a.createElement(X.a,{to:"/home"})),c.a.createElement(B.a,{value:l,onChange:function(e,t){return o(t)},showLabels:!0},c.a.createElement(L.a,{label:"Scannen",onClick:function(){return e.push("/home")},icon:c.a.createElement(s.a,null)}),c.a.createElement(L.a,{label:"Daten",onClick:function(){return e.push("/personal")},icon:c.a.createElement(F.a,null)}),c.a.createElement(L.a,{label:"Begegnungen",onClick:function(){return e.push("/contacts")},icon:c.a.createElement(T.a,null)})))}o.a.render(c.a.createElement(Z.a,{basename:"/"},c.a.createElement(c.a.StrictMode,null,c.a.createElement(se,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}()},99:function(e,t,n){e.exports=n(126)}},[[99,1,2]]]);
//# sourceMappingURL=main.899b91bc.chunk.js.map