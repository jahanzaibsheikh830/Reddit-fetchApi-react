(this.webpackJsonpstates=this.webpackJsonpstates||[]).push([[0],{10:function(e,c,t){},57:function(e,c,t){"use strict";t.r(c);var s=t(0),n=t(1),j=t(25),r=t.n(j),i=(t(10),t.p+"static/media/reddit-logo.f218ec0a.svg");var a=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)("div",{className:"logo",children:Object(s.jsx)("img",{src:i,alt:"logo",width:"120"})}),Object(s.jsx)("div",{className:"search",children:Object(s.jsx)("input",{type:"text",placeholder:"Search"})}),Object(s.jsxs)("div",{className:"btn",children:[Object(s.jsx)("button",{className:"btn1",children:"Log In"}),Object(s.jsx)("button",{className:"btn2",children:"Sign Up"})]})]})})}),Object(s.jsx)("section",{className:"header2"})]})};var l=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"form-data",children:[Object(s.jsx)("h2",{style:{textAlign:"center",marginBottom:"10px"},children:"Login"}),Object(s.jsxs)("form",{action:"",children:[Object(s.jsx)("input",{type:"text",placeholder:"Enter email",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"text",placeholder:"Enter password",required:!0}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{children:"Login"})]})]})})},d=t(28),b=t(26),h=t.n(b);var x=function(){var e=Object(n.useState)([]),c=Object(d.a)(e,2),t=c[0],j=c[1];return Object(n.useEffect)((function(){h.a.get("https://www.reddit.com/r/reactjs.json").then((function(e){var c=e.data.data.children.map((function(e){return e.data}));console.log(c),j(c)}))}),[]),Object(s.jsx)("div",{children:t.map((function(e){return Object(s.jsx)("div",{className:"container main-card",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("a",{href:e.url,target:"blank",children:Object(s.jsx)("h3",{children:e.title})}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:e.author}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:e.selftext}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"score",children:[Object(s.jsxs)("i",{children:["Score ",e.score]}),Object(s.jsxs)("i",{children:["Submmiting Users ",[e.ups]]})]})]})},e.id)}))})},O=t(11),o=t(2);var u=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(a,{}),Object(s.jsx)("div",{children:Object(s.jsx)("nav",{className:"nav",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("span",{children:"/r/ReactJS - The Front Page of React"}),Object(s.jsx)(O.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("ul",{className:"ul",children:[Object(s.jsx)("li",{children:Object(s.jsx)(O.b,{to:"/",className:"link",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(O.b,{to:"/login",className:"link",children:"Login"})})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/",children:Object(s.jsx)(x,{})}),Object(s.jsx)(o.a,{path:"/login",children:Object(s.jsx)(l,{})})]})]})})]})})})]})};r.a.render(Object(s.jsx)("div",{children:Object(s.jsx)(u,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.46eaacbc.chunk.js.map