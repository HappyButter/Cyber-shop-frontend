(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[10],{330:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return m}));var r=e(1),o=e(9),c=e(18),i=e(12),b=e(0),s=e(112),a=e(14);function d(){var t=Object(c.a)(["\n    background-color: rgba(255,255,255,0.2);\n\n    &:before {\n\t\tborder-bottom: 70px solid rgb(32, 32, 32);\n\t\tborder-right: 70px solid rgba(255,255,255,0.2);\n    }\n\n    &:after {\n\t\tborder-right: 70px solid rgb(32, 32, 32);\n\t\tborder-bottom: 70px solid rgba(255,255,255,0.2);\n    }\n"]);return d=function(){return t},t}function u(){var t=Object(c.a)(["\n    background-color: red;\n\n    &:before {\n\t\tborder-bottom: 70px solid rgb(32, 32, 32);\n\t\tborder-right: 70px solid red;\n    }\n\n    &:after {\n\t\tborder-right: 70px solid rgb(32, 32, 32);\n\t\tborder-bottom: 70px solid red;\n    }\n"]);return u=function(){return t},t}function j(){var t=Object(c.a)(["\n    background-color: green;\n\n    &:before {\n\t\tborder-bottom: 70px solid rgb(32, 32, 32);\n\t\tborder-right: 70px solid green;\n    }\n\n    &:after {\n\t\tborder-right: 70px solid rgb(32, 32, 32);\n\t\tborder-bottom: 70px solid green;\n    }\n"]);return j=function(){return t},t}function l(){var t=Object(c.a)(["\n    padding: 1em;\n    position: relative;\n\n    &:before {\n    \tcontent: '';\n\t\tposition: absolute;\n\t\tbottom: 0; left: 0;\n\t\twidth: 0;\n    }\n\n    &:after {\n    \tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 0; right: 0;\n\t\twidth: 0;\n    }\n"]);return l=function(){return t},t}function h(){var t=Object(c.a)(["\n    font-size: 3em;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n"]);return h=function(){return t},t}var f=a.c.p(h()),p=a.c.div(l()),x=Object(a.c)(p)(j()),g=Object(a.c)(p)(u()),O=Object(a.c)(p)(d()),m=function(){var t=Object(b.useState)({}),n=Object(o.a)(t,2),e=n[0],c=n[1];return Object(b.useEffect)((function(){i.a.get("/orders/shop/balance").then((function(t){c(t.data)})).catch((function(t){console.log(t)}))}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)(f,{children:"saldo sklepu"}),Object(r.jsx)("hr",{}),Object(r.jsxs)(x,{children:[Object(r.jsxs)("h1",{children:["Przychody: ",e.income," z\u0142"]}),Object(r.jsxs)("h1",{children:["Liczba transakcji: ",e.incomeCount]})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)(g,{children:[Object(r.jsxs)("h1",{children:["Wydatki: ",e.outcome," z\u0142"]}),Object(r.jsxs)("h1",{children:["Liczba transakcji: ",e.outcomeCount]})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)(O,{children:[Object(r.jsxs)("h1",{children:["Saldo: ",(parseFloat(e.income)+parseFloat(e.outcome)).toFixed(2)," z\u0142"]}),Object(r.jsxs)("h1",{children:["Wszystkich transakcji: ",parseInt(e.incomeCount)+parseInt(e.outcomeCount)]})]})]})})}}}]);
//# sourceMappingURL=10.cb64be5b.chunk.js.map