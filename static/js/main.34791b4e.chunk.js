(this["webpackJsonpcrud-app"]=this["webpackJsonpcrud-app"]||[]).push([[0],{63:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(24),i=n.n(r),s=(n(63),n(8)),o=n.n(s),u=n(15),j=n(27),d=n(106),l=n(108),p=n(109),b=n(110),h=n(111),x=n(112),O=n(116),f=n(34),m=n.n(f),v="https://sonish-crud-app.herokuapp.com/users",g=function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=e||"",t.next=3,m.a.get("".concat(v,"/").concat(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("".concat(v,"/add"),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.delete("".concat(v,"/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=Object(u.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.put("".concat(v,"/").concat(e),n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=n(18),C=n(2),N=Object(d.a)({table:{width:"90%",margin:"50px 0 0 50px"},thead:{"& > *":{fontSize:20,background:"#000000",color:"#FFFFFF"}},row:{"& > *":{fontSize:18}}}),D=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1],r=N();Object(c.useEffect)((function(){s()}),[]);var i=function(){var t=Object(u.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:s();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:e=t.sent,a(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.jsxs)(l.a,{className:r.table,children:[Object(C.jsx)(p.a,{children:Object(C.jsxs)(b.a,{className:r.thead,children:[Object(C.jsx)(h.a,{children:"Id"}),Object(C.jsx)(h.a,{children:"Title"}),Object(C.jsx)(h.a,{children:"Description"}),Object(C.jsx)(h.a,{children:"Date"}),Object(C.jsx)(h.a,{})]})}),Object(C.jsx)(x.a,{children:n.map((function(t){return Object(C.jsxs)(b.a,{className:r.row,children:[Object(C.jsx)(h.a,{children:t._id})," ",Object(C.jsx)(h.a,{children:t.title}),Object(C.jsx)(h.a,{children:t.description}),Object(C.jsx)(h.a,{children:t.date}),Object(C.jsxs)(h.a,{children:[Object(C.jsx)(O.a,{color:"primary",variant:"contained",style:{marginRight:10},component:k.b,to:"/edit/".concat(t._id),children:"Edit"})," ",Object(C.jsx)(O.a,{color:"secondary",variant:"contained",onClick:function(){return i(t._id)},children:"Delete"})," "]})]},t.id)}))})]})},S=n(25),P=n(29),T=n(113),E=n(114),A=n(119),I=n(118),z=n(117),R=n(9),_={title:"",description:"",date:new Date},B=Object(d.a)({container:{width:"50%",margin:"5% 0 0 25%","& > *":{marginTop:20}}}),J=function(){var t=Object(c.useState)(_),e=Object(j.a)(t,2),n=e[0],a=e[1],r=n.title,i=n.description,s=(n.date,B()),d=Object(R.f)(),l=function(t){console.log(t.target.value),a(Object(P.a)(Object(P.a)({},n),{},Object(S.a)({},t.target.name,t.target.value)))},p=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(n);case 2:d.push("./all");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.jsxs)(T.a,{className:s.container,children:[Object(C.jsx)(E.a,{variant:"h4",children:"Add Post"}),Object(C.jsxs)(A.a,{children:[Object(C.jsx)(I.a,{htmlFor:"my-input",children:"Title"}),Object(C.jsx)(z.a,{onChange:function(t){return l(t)},name:"title",value:r,id:"my-input"})]}),Object(C.jsxs)(A.a,{children:[Object(C.jsx)(I.a,{htmlFor:"my-input",children:"Description"}),Object(C.jsx)(z.a,{onChange:function(t){return l(t)},name:"description",value:i,id:"my-input"})]}),Object(C.jsx)(A.a,{children:Object(C.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){p()},children:"Add Post"})})]})},L={title:"",description:""},M=Object(d.a)({container:{width:"50%",margin:"5% 0 0 25%","& > *":{marginTop:20}}}),U=function(){var t=Object(c.useState)(L),e=Object(j.a)(t,2),n=e[0],a=e[1],r=n.title,i=n.description,s=Object(R.g)().id,d=M(),l=Object(R.f)();Object(c.useEffect)((function(){p()}),[]);var p=function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(s);case 2:e=t.sent,a(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(s,n);case 2:t.sent,l.push("/all");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(t){console.log(t.target.value),a(Object(P.a)(Object(P.a)({},n),{},Object(S.a)({},t.target.name,t.target.value)))};return Object(C.jsxs)(T.a,{className:d.container,children:[Object(C.jsx)(E.a,{variant:"h4",children:"Edit Information"}),Object(C.jsxs)(A.a,{children:[Object(C.jsx)(I.a,{htmlFor:"my-input",children:"Title"}),Object(C.jsx)(z.a,{onChange:function(t){return h(t)},name:"title",value:r,id:"my-input","aria-describedby":"my-helper-text"})]}),Object(C.jsxs)(A.a,{children:[Object(C.jsx)(I.a,{htmlFor:"my-input",children:"Description"}),Object(C.jsx)(z.a,{onChange:function(t){return h(t)},name:"description",value:i,id:"my-input","aria-describedby":"my-helper-text"})]}),Object(C.jsx)(A.a,{children:Object(C.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){return b()},children:"Edit Post"})})]})},q=n(120),G=n(115),H=Object(d.a)({header:{background:"#111111"},tabs:{color:"#FFFFFF",marginRight:20,textDecoration:"none",fontSize:20}}),K=function(){var t=H();return Object(C.jsx)(q.a,{position:"static",className:t.header,children:Object(C.jsxs)(G.a,{children:[Object(C.jsx)(k.c,{className:t.tabs,to:"./",exact:!0,children:"CRUD App"}),Object(C.jsx)(k.c,{className:t.tabs,to:"all",exact:!0,children:"All Posts"}),Object(C.jsx)(k.c,{className:t.tabs,to:"./",exact:!0,children:"Add Post"})]})})},Q=n.p+"static/media/NotFound.b684e5be.jpg",V=function(){return Object(C.jsx)("img",{src:Q,style:{width:"30%",margin:"80px 0 0 35%"}})};var W=function(){return Object(C.jsxs)(k.a,{children:[Object(C.jsx)(K,{}),Object(C.jsxs)(R.c,{children:[Object(C.jsx)(R.a,{exact:!0,path:"/",component:J}),Object(C.jsx)(R.a,{exact:!0,path:"/all",component:D}),Object(C.jsx)(R.a,{exact:!0,path:"/edit/:id",component:U}),Object(C.jsx)(R.a,{component:V})]})]})},X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,122)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(W,{})}),document.getElementById("root")),X()}},[[89,1,2]]]);
//# sourceMappingURL=main.34791b4e.chunk.js.map