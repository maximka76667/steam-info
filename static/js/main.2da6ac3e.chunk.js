(this["webpackJsonpsteam-info"]=this["webpackJsonpsteam-info"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(3),o=n.n(s),i=(n(9),n(4)),r=n(0);var l=function(){var e=a.a.useState(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{className:"App-logo",alt:"logo"}),Object(r.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),fetch("http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/&steamid=76561197960434622&format=json").then((function(e){return console.log(e),e})).catch((function(e){return console.log(e)}))},children:[Object(r.jsx)("input",{type:"text",onChange:function(e){c(e.target.value)},value:n}),Object(r.jsx)("button",{className:"submit-button",type:"submit",children:"Find"})]})]}),Object(r.jsx)("main",{className:"content"})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.2da6ac3e.chunk.js.map