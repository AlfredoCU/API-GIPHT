(this.webpackJsonpgifs=this.webpackJsonpgifs||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),o=function(){return r.a.createElement("div",{className:"header-conteiner"},r.a.createElement("div",{className:"header-top"}),r.a.createElement("h1",null,"Buscar GIFS"))},l=a(8),s=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))},className:"form-category"},r.a.createElement("input",{type:"text",placeholder:"Buscar GIFS de...",value:i,onChange:function(e){o(e.target.value)},className:"form-category__imput"}))},m=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"gif-grid__card animate__animated animate__fadeIn"},r.a.createElement("img",{alt:t,src:a}),r.a.createElement("p",null,t||"it has no name"))},f=a(4),d=a.n(f),g=a(7),p=function(){var e=Object(g.a)(d.a.mark((function e(t){var a,n,r,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"sKIGQtB5GrgbESMLr9L5Drz3BoWTaRM9",a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=").concat("sKIGQtB5GrgbESMLr9L5Drz3BoWTaRM9"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,i?r.a.createElement("h1",{className:"category"},"Cargando..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"category"},t),r.a.createElement("div",{className:"gif-grid"},c&&c.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))})))))},v=function(){var e=Object(n.useState)(["Mr.Robot"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(s,{setCategories:c}),a.map((function(e,t){return r.a.createElement(E,{key:"".concat(t,"-Category"),category:e})})))};a(15),a(16);i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.93d7acf4.chunk.js.map