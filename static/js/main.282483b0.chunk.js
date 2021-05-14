(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{15:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(17),l=c.n(r),a=(c(15),c(6)),i=c(0),o=function(){return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)("h1",{children:"The Blog"}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)(a.b,{to:"/",children:"Home"}),Object(i.jsx)(a.b,{to:"/create",children:"New Blog"})]})]})},j=function(e){var t=e.blogs,c=e.title;e.handleDelete;return Object(i.jsxs)("div",{className:"blog-list",children:[Object(i.jsx)("h2",{children:c}),t.map((function(e){return Object(i.jsx)("div",{className:"blog-preview",children:Object(i.jsxs)(a.b,{to:"/blogs/".concat(e.id),children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("p",{children:["Written by : ",e.author]})]})},e.id)}))]})},b=c(8),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),s=c[0],r=c[1],l=Object(n.useState)(!0),a=Object(b.a)(l,2),i=a[0],o=a[1],j=Object(n.useState)(null),d=Object(b.a)(j,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch data for the resource");return e.json()})).then((function(e){r(e),o(!1),u(null)})).catch((function(e){"AbortError"===e.name?console.log("Fetch Abort"):(u(e.message),o(!1))}))})),function(){return t.abort()}}),[e]),{data:s,isPending:i,error:h}},h=function(){var e=d("http://localhost:8000/blogs"),t=e.data,c=e.isPending,n=e.error;return Object(i.jsxs)("div",{className:"home",children:[n&&Object(i.jsx)("div",{children:n}),c&&Object(i.jsx)("div",{children:"Loading..."}),t&&Object(i.jsx)(j,{blogs:t,title:"All Blogs"})]})},u=c(2),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),l=Object(b.a)(r,2),a=l[0],o=l[1],j=Object(n.useState)("saumya"),d=Object(b.a)(j,2),h=d[0],O=d[1],x=Object(n.useState)(!1),g=Object(b.a)(x,2),f=g[0],v=g[1],p=Object(u.f)();return Object(i.jsxs)("div",{className:"create",children:[Object(i.jsx)("h2",{children:"Add a new Blog"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:a,author:h};v(!0),fetch("http://localhost:8000/blogs",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(){console.log("New blog added"),v(!1),p.push("/")}))},children:[Object(i.jsx)("label",{children:"Blog title:"}),Object(i.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("label",{children:"Blog body:"}),Object(i.jsx)("textarea",{required:!0,value:a,onChange:function(e){return o(e.target.value)}}),Object(i.jsx)("label",{children:"Blog author:"}),Object(i.jsxs)("select",{value:h,onChange:function(e){return O(e.target.value)},children:[Object(i.jsx)("option",{value:"saumya",children:"Saumya"}),Object(i.jsx)("option",{value:"vatsal",children:"Vatsal"}),Object(i.jsx)("option",{value:"satya",children:"Satya"})]}),!f&&Object(i.jsx)("button",{children:"Add Blog"}),f&&Object(i.jsx)("button",{disabled:!0,children:"Adding Blog..."})]})]})},x=function(){var e=Object(u.g)().id,t=d("http://localhost:8000/blogs/"+e),c=t.data,n=t.error,s=t.isPending,r=Object(u.f)();return Object(i.jsxs)("div",{className:"blog-details",children:[s&&Object(i.jsx)("div",{children:"Loading..."}),n&&Object(i.jsx)("div",{children:n}),c&&Object(i.jsxs)("article",{children:[Object(i.jsx)("h2",{children:c.title}),Object(i.jsxs)("p",{children:["Written by ",c.author]}),Object(i.jsx)("div",{children:c.body}),Object(i.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+c.id,{method:"DELETE"}).then((function(){r.push("/")}))},children:"Delete"})]})]})},g=function(){return Object(i.jsxs)("div",{className:"not-found",children:[Object(i.jsx)("h2",{children:"Sorry"}),Object(i.jsx)("p",{children:"That page cannot be found"}),Object(i.jsx)(a.b,{to:"/",children:"Back to the homepage..."})]})};var f=function(){return Object(i.jsx)(a.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/",children:Object(i.jsx)(h,{})}),Object(i.jsx)(u.a,{path:"/create",children:Object(i.jsx)(O,{})}),Object(i.jsx)(u.a,{path:"/blogs/:id",children:Object(i.jsx)(x,{})}),Object(i.jsx)(u.a,{path:"*",children:Object(i.jsx)(g,{})})]})})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),r(e),l(e)}))};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),v()}},[[29,1,2]]]);
//# sourceMappingURL=main.282483b0.chunk.js.map