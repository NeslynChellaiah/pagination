(this.webpackJsonppagination=this.webpackJsonppagination||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(17),s=n.n(r),a=(n(25),n(7)),i=n.n(a),o=n(18),l=n(3),u=(n(27),n(28),n(0)),d=function(e){var t=e.login,n=e.img,c=e.html_url;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"avatar-container",children:Object(u.jsx)("img",{alt:t+" avatar",src:n,className:"avatar"})}),Object(u.jsxs)("div",{className:"login",children:["id: ",Object(u.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:t})]})]})},j=(n(30),n(8)),m=n(19),g=function(e){var t=e.getData,n=Object(m.useState)(1),r=Object(l.a)(n,2),s=r[0],a=r[1],i=function(e){e!==s&&(document.getElementById("page"+s).classList.remove("cur-page"),t(20*(e+2)),document.getElementById("page"+e).classList.add("cur-page"),a(e))};return Object(c.useEffect)((function(){1===s?(document.getElementById("prev").style.color="grey",document.getElementById("prev").style.cursor="default",document.getElementById("next").style.color="#396EB0",document.getElementById("next").style.cursor="pointer"):5===s?(document.getElementById("next").style.color="grey",document.getElementById("next").style.cursor="default",document.getElementById("prev").style.color="#396EB0",document.getElementById("prev").style.cursor="pointer"):(document.getElementById("prev").style.color="#396EB0",document.getElementById("next").style.color="#396EB0",document.getElementById("prev").style.cursor="pointer",document.getElementById("next").style.cursor="pointer")}),[s]),Object(u.jsxs)("div",{className:"controls",children:[Object(u.jsx)(j.a,{className:"icon",id:"prev",onClick:function(){s>1&&(i(s-1),a(s-1))}}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{id:"page1",onClick:function(){return i(1)},className:"cur-page",children:"1"}),Object(u.jsx)("li",{id:"page2",onClick:function(){return i(2)},children:"2"}),Object(u.jsx)("li",{id:"page3",onClick:function(){return i(3)},children:"3"}),Object(u.jsx)("li",{id:"page4",onClick:function(){return i(4)},children:"4"}),Object(u.jsx)("li",{id:"page5",onClick:function(){return i(5)},children:"5"})]}),Object(u.jsx)(j.b,{className:"icon",id:"next",onClick:function(){s<5&&(i(s+1),a(s+1))}})]})},b=(n(31),function(){return Object(u.jsx)("section",{className:"loader",children:Object(u.jsxs)("div",{className:"preloader",children:[Object(u.jsx)("div",{className:"dot1 dot"}),Object(u.jsx)("div",{className:"dot2 dot"}),Object(u.jsx)("div",{className:"dot3 dot"})]})})}),O=(n(32),function(e){var t=e.getData,n=e.users;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h1",{children:"pagination"})}),Object(u.jsxs)("section",{className:"main-area",children:[Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)("section",{className:"cards",children:[0===n.length&&Object(u.jsx)(b,{}),n.map((function(e){return Object(u.jsx)(d,{login:e.login,img:e.avatar_url,html_url:e.html_url},e.id)}))]})}),Object(u.jsx)(g,{getData:t})]})]})}),p=n(20),x=n.n(p);var f=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),a=Object(l.a)(s,2),d=a[0],j=a[1],m=Object(c.useState)([]),g=Object(l.a)(m,2),p=g[0],f=g[1];Object(c.useEffect)((function(){r(!0),j(!1),h(60)}),[]);var h=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f([]),e.next=3,x()("https://api.github.com/users?since=".concat(t,"&per_page=12")).then((function(e){f(e.data)})).catch((function(e){console.log(e),j(!0)})).finally((function(){r(!1)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n?Object(u.jsx)(b,{}):d?"something went wrong":Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(O,{getData:h,users:p})})};s.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.0c1911e8.chunk.js.map