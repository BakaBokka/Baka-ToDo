(this["webpackJsonpsome-app"]=this["webpackJsonpsome-app"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(0),c=o(1),a=o.n(c),s=o(6),i=o.n(s),r=(o(13),o(7)),l=o(5),d=o.p+"static/media/hippo-footprints.9342d27d.png",u=(o(14),function(t){return Object(n.jsxs)("li",{className:"todo__task",children:[t.task,Object(n.jsx)("img",{className:"todo__deleteIcon",src:d,alt:"deleteIcon",onClick:function(){t.delete(t.index)}})]})}),j=(o(15),function(){var t=JSON.parse(localStorage.getItem("todos")),e=Object(c.useState)(""),o=Object(l.a)(e,2),a=o[0],s=o[1],i=Object(c.useState)(t),d=Object(l.a)(i,2),j=d[0],m=d[1],f=function(t){localStorage.setItem("todos",JSON.stringify([].concat(Object(r.a)(j),[t]))),m(JSON.parse(localStorage.getItem("todos")))},p=function(t){var e=j.filter((function(e,o){return o!==t}));localStorage.setItem("todos",JSON.stringify(e)),m(JSON.parse(localStorage.getItem("todos")))},O=j.map((function(t,e){return Object(n.jsx)(u,{task:t,delete:p,index:e},e)}));return Object(n.jsx)("section",{className:"todo",children:Object(n.jsxs)("div",{className:"todo__content",children:[Object(n.jsx)("h1",{className:"todo__title",children:"Baka ToDos"}),Object(n.jsx)("form",{className:"todo__form",onSubmit:function(t){t.preventDefault(),f(a),s("")},children:Object(n.jsx)("input",{className:"todo__input",type:"text",autoFocus:!0,value:a,placeholder:"What's my task?",onChange:function(t){var e=t.target;s(e.value)}})}),Object(n.jsx)("ul",{className:"todo__tasks",children:O})]})})}),m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;o(t),n(t),c(t),a(t),s(t)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(j,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.8841cdd0.chunk.js.map