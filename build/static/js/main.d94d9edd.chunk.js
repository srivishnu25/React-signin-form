(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),i=n(14),o=n.n(i),s=(n(19),n(3)),r=(n.p,n(20),n(5)),u=n.n(r),d=n(0),l=function(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(null),o=Object(s.a)(i,2),r=o[0],l=o[1],j=Object(c.useState)([]),b=Object(s.a)(j,2),h=b[0],f=b[1],O=Object(c.useState)(""),p=Object(s.a)(O,2),g=p[0],m=p[1],v=Object(c.useState)([]),x=Object(s.a)(v,2),C=x[0],S=x[1];Object(c.useEffect)((function(){console.log("component did mount"),u.a.get("https://api.edyoda.com/v1/blog/postcategories/").then((function(t){a(t.data)})),u.a.get("https://api.edyoda.com/v1/blog/").then((function(t){S(t.data),f(t.data)}))}),[]);Object(c.useEffect)((function(){console.log("component did update")}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"search",placeholder:"search..",id:"search-box",onBlur:function(t){return t.target.value=""},onChange:function(t){return m(t.target.value)}}),Object(d.jsx)("button",{onClick:function(){var t=C.filter((function(t){return t.authorname.toLowerCase().includes(g.toLowerCase())||t.slug.toLowerCase().includes(g.toLowerCase())}));f(t)},children:"search"}),Object(d.jsx)("div",{children:n.map((function(t){return Object(d.jsx)("div",{className:r===t.id?"buttons active":"buttons",onClick:function(){!function(t){l(t);var e=C.filter((function(e){return e.id==t}));f(e)}(t.id)},children:t.title},t.id)}))}),Object(d.jsx)("div",{className:"cardWrap",children:h.map((function(t){var e=t.authorname,n=t.description,c=(t.id,t.slug,t.small_image),a=t.title;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:c}),Object(d.jsx)("h5",{children:a}),Object(d.jsx)("p",{children:e}),Object(d.jsx)("p",{children:n})]})}))})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),j()}},[[40,1,2]]]);
//# sourceMappingURL=main.d94d9edd.chunk.js.map