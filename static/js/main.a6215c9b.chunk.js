(this["webpackJsonpsome-app"]=this["webpackJsonpsome-app"]||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){},43:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n(1),a=n.n(c),i=n(22),s=n.n(i),r=(n(37),n(29)),l=n(4),u=n(23),d=n.n(u),g=n(54),f=n(55),j=n.p+"static/media/hippo-footprints.9342d27d.png",b=(n(38),function(t){var e=t.id,n=t.task,a=t.index,i=t.moveTaskHandler,s=t.deleteTodo,r=Object(c.useRef)(null),u=Object(g.a)({accept:"task",hover:function(t,e){var n;if(r.current){var o=t.index,c=a;if(o!==c){var s=null===(n=r.current)||void 0===n?void 0:n.getBoundingClientRect(),l=(s.bottom-s.top)/2,u=e.getClientOffset().y-s.top;o<c&&u<l||o>c&&u>l||(i(o,c),t.index=c)}}}}),d=Object(l.a)(u,2)[1],b=Object(f.a)({item:{index:a,id:e,task:n,type:"task"},collect:function(t){return{isDragging:t.isDragging()}}}),m=Object(l.a)(b,2);m[0].isDragging;(0,m[1])(d(r));return Object(o.jsxs)("li",{className:"todo__task",ref:r,style:{opacity:1},children:[Object(o.jsx)("p",{className:"todo__task-text",children:n}),Object(o.jsx)("img",{className:"todo__deleteIcon",src:j,alt:"deleteIcon",onClick:function(){s(a)}})]})}),m=n(25),p=n.n(m),O=n(26),h=n(53),S=n(27),v=n(28),x=(n(43),n(10)),_=n.n(x),k=n.p+"static/media/mic.8562e22a.svg",N=(n(50),function(t){var e=t.setValue,n=t.handleSubmit,a=Object(c.useState)("eng"),i=Object(l.a)(a,2),s=i[0],r=i[1],u=_.a.getRecognition(),d=Object(x.useSpeechRecognition)(),g=d.transcript,f=d.resetTranscript;if(Object(c.useEffect)((function(){e(g)}),[e,g]),Object(c.useEffect)((function(){var t=navigator.language;r(t)}),[r,s]),!_.a.browserSupportsSpeechRecognition())return null;return u.onspeechend=function(t){n(t),f()},Object(o.jsx)("img",{className:"mic",src:k,alt:"Microphone icon",onClick:function(){_.a.startListening({language:s})}})}),I=function(){var t=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[],e=Object(c.useState)(""),n=Object(l.a)(e,2),a=n[0],i=n[1],s=Object(c.useState)(t),u=Object(l.a)(s,2),g=u[0],f=u[1],j=function(t){t.preventDefault(),m(a),i("")},m=function(t){null!==g?localStorage.setItem("todos",JSON.stringify([].concat(Object(r.a)(g),[t]))):localStorage.setItem("todos",JSON.stringify([])),f(null!==g?JSON.parse(localStorage.getItem("todos")):[])},x=function(t){var e=g.filter((function(e,n){return n!==t}));localStorage.setItem("todos",JSON.stringify(e)),f(JSON.parse(localStorage.getItem("todos")))},_=Object(c.useCallback)((function(t,e){var n=g[t];localStorage.setItem("todos",JSON.stringify(p()(g,{$splice:[[t,1],[e,0,n]]}))),f(JSON.parse(localStorage.getItem("todos")))}),[g]),k=function(){var t=0;return function(){return t++}}(),I=null!==g?g.map((function(t,e){return Object(o.jsx)(b,{task:t,deleteTodo:x,index:e,id:k(),moveTaskHandler:_},k())})):[],y={todo__clear_hidden:!g.length},C=window.innerWidth<600;return Object(o.jsx)("section",{className:"todo",children:Object(o.jsxs)("div",{className:"todo__content",children:[Object(o.jsx)("h1",{className:"todo__title",children:"Baka ToDos"}),Object(o.jsxs)("form",{className:"todo__form",onSubmit:j,children:[Object(o.jsx)(O.DebounceInput,{className:"todo__input",type:"text",autoFocus:!0,value:a,placeholder:"What's my task?",debounceTimeout:500,onChange:function(t){i(t.target.value)},required:!0}),Object(o.jsx)(N,{setValue:i,handleSubmit:j})]}),Object(o.jsx)("ul",{className:"todo__tasks",children:Object(o.jsx)(h.a,{backend:C?v.a:S.a,children:I})}),Object(o.jsx)("button",{className:d()("todo__clear",y),type:"button",onClick:function(){localStorage.clear(),f([]),i("")},children:"Clear all"})]})})},y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root")),y()}},[[51,1,2]]]);
//# sourceMappingURL=main.a6215c9b.chunk.js.map