(function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({admin:"admin",cart:"cart",login:"login",menber:"menber",notice:"notice",orders:"orders",productpage:"productpage",products:"products",register:"register"}[t]||t)+"."+{admin:"c9d57c71",cart:"00edb56c",login:"5edfbbda",menber:"5877efce",notice:"635ac8f7",orders:"ade8eb87",productpage:"4aabd3b9",products:"12b67ff0",register:"5edae789"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={admin:1,cart:1,login:1,menber:1,notice:1,productpage:1,products:1,register:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({admin:"admin",cart:"cart",login:"login",menber:"menber",notice:"notice",orders:"orders",productpage:"productpage",products:"products",register:"register"}[t]||t)+"."+{admin:"a41d11ac",cart:"ffbb3a70",login:"6c001c33",menber:"69626e14",notice:"624fdb56",orders:"31d6cfe0",productpage:"29300333",products:"6fa19733",register:"320c7c8f"}[t]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],m.parentNode.removeChild(m),n(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"06bc":function(t,e,n){t.exports=n.p+"img/aboutpic3.62c4f747.jpg"},"089f":function(t,e,n){t.exports=n.p+"img/cake1.b9fd9e55.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-navbar",{staticClass:"d-flex justify-content-center",attrs:{variant:"light",type:"light"}},[r("b-navbar-brand",{staticClass:"text-center",attrs:{to:"/"}},[r("img",{staticStyle:{width:"15%"},attrs:{src:n("fb50")}})])],1),r("b-navbar",{staticClass:"text-secondary",attrs:{toggleable:"lg",variant:"light"}},[r("b-container",{staticClass:"d-flex justify-content-center"},[r("b-navbar-toggle",{staticClass:"ml-auto",attrs:{target:"nav-collapse"}}),r("b-collapse",{staticClass:"flewxgrow",attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{staticClass:"mr-5",attrs:{to:"/"}},[t._v("關於我們")]),r("b-nav-item",{staticClass:"mr-5",attrs:{to:"/products"}},[t._v("蛋糕品項")]),r("b-nav-item",{staticClass:"mr-5",attrs:{to:"/notice"}},[t._v("購物須知")]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link mr-5",attrs:{href:"#contact"}},[t._v("聯絡我們")])]),t.user.islogin?r("b-nav-item",{staticClass:"mr-5",attrs:{to:"/cart"}},[t._v("購物車")]):t._e(),t.user.islogin?r("b-nav-item",{staticClass:"mr-5",attrs:{to:"/orders"}},[t._v("訂單")]):t._e(),r("b-nav-item-dropdown",{attrs:{text:"會員"},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("font-awesome-icon",{attrs:{icon:["fas","user"]}})]},proxy:!0}])},[t.user.islogin?t._e():r("b-dropdown-item",{attrs:{to:"/register"}},[t._v("註冊")]),t.user.islogin?t._e():r("b-dropdown-item",{attrs:{to:"/login"}},[t._v("登入")]),t.user.islogin?r("b-dropdown-item",{attrs:{to:"/member"}},[t._v("會員資料")]):t._e(),t.user.islogin&&t.user.isAdmin?r("b-dropdown-item",{attrs:{to:"/admin"}},[t._v("管理員管理")]):t._e(),t.user.islogin?r("b-dropdown-item",{on:{click:t.logout}},[t._v("登出")]):t._e()],1)],1)],1)],1)],1),r("router-view"),r("footer",{staticClass:"bg-light",attrs:{id:"contact"}},[r("b-container",{staticStyle:{color:"#A0522D"}},[r("b-row",{staticClass:"d-flex flex-column flex-lg-row ml-5"},[r("b-col",{staticClass:"mt-4 col-3"},[r("img",{staticClass:"imgsize",staticStyle:{width:"100%"},attrs:{src:n("fb50")}})]),r("b-col",{staticClass:"mt-2 col-9"},[r("b-row",[r("b-col",{staticClass:"mt-3 col-12 col-lg-6"},[r("h5",{staticClass:"border-bottom pb-1 ml-5"},[t._v("聯絡我們 Contact us")]),r("ul",{staticClass:"ulsize lineHeight"},[r("li",[r("font-awesome-icon",{staticClass:"mr-1 ml-2",attrs:{icon:["fas","phone-alt"]}}),r("span",[t._v("06-258258")])],1),r("li",[r("font-awesome-icon",{staticClass:"mr-1 ml-2",attrs:{icon:["fas","envelope"]}}),r("span",[t._v("dessert96589@gmail.com")])],1),r("li",[r("font-awesome-icon",{staticClass:"mr-1 ml-2",attrs:{icon:["fas","map-marker-alt"]}}),r("span",[t._v("台南市中西區文文路一段12號")])],1),r("li",[r("font-awesome-icon",{staticClass:"mr-1 ml-2",attrs:{icon:["fas","clock"]}}),r("span",[t._v("9:00am-16:00pm")])],1)])]),r("b-col",{staticClass:"mt-3 ml-5 lineHeight"},[r("h5",{staticClass:"border-bottom pb-1"},[t._v("社群 Community")]),r("a",{attrs:{href:"#"}},[r("font-awesome-icon",{staticClass:"ml-2",staticStyle:{"font-size":"24px",color:"rgb(24,119,242)"},attrs:{icon:["fab","facebook-square"],href:"#"}})],1),r("a",{attrs:{href:"#"}},[r("font-awesome-icon",{staticClass:"ml-2",staticStyle:{"font-size":"24px",color:"rgb(0,185,0)"},attrs:{icon:["fab","line"]}})],1),r("a",{attrs:{href:"#"}},[r("font-awesome-icon",{staticClass:"ml-2",staticStyle:{"font-size":"24px",color:"rgb(193,53,132)"},attrs:{icon:["fab","instagram-square"]}})],1)])],1)],1),r("b-col",{staticClass:"text-center mt-5"},[r("span",{staticStyle:{"font-size":"16px"}},[t._v("微甜蛋糕圖片皆來自網路，僅供學習使用")]),r("h6",[t._v("Copyright © 微甜蛋糕")])])],1)],1)],1)],1)},s=[],i=n("1da1"),c=(n("96cf"),{name:"App",methods:{logout:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.delete("/users/logout",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 3:t.$store.commit("logout"),"/"!==t.$route.path&&t.$router.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$swal({icon:"error",title:"錯誤",text:"發生錯誤"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.$store.state.jwt.token.length){e.next=2;break}return e.abrupt("return");case 2:if(n=Date.now()-t.$store.state.jwt.received,e.prev=3,!(n>5184e5)){e.next=10;break}return e.next=7,t.axios.post("/users/extend",{},{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 7:r=e.sent,a=r.data,t.$store.commit("extend",a.result);case 10:return e.next=12,t.axios.get("/users/",{headers:{authorization:"Bearer "+t.$store.state.jwt.token}});case 12:o=e.sent,s=o.data,t.$store.commit("getinfo",s.result),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](3),t.$store.commit("logout");case 20:case"end":return e.stop()}}),e,null,[[3,17]])})))()}}),l=c,u=(n("034f"),n("2877")),d=Object(u["a"])(l,o,s,!1,null,null,null),m=d.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("b-carousel-slide",{attrs:{"img-src":n("089f")}}),r("b-carousel-slide",{attrs:{"img-src":n("cf48")}}),r("b-carousel-slide",{attrs:{"img-src":n("acc9")}})],1),r("div",{staticClass:"mt-5 mb-5 ",attrs:{id:"abouts"}},[r("div",{staticClass:"container mt-5"},[r("h3",{staticClass:"pb-3 text-left mb-5 ml-3",staticStyle:{color:"rgba(111,77,34)"}},[r("font-awesome-icon",{attrs:{icon:"home"}}),t._v("關於微甜")],1),t._m(0)]),t._m(1)])],1)},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center"},[r("img",{staticClass:"rounded i-shadow",attrs:{src:n("9264")}})]),r("div",{staticClass:"col-sm-12 col-md-12 col-lg-6  d-flex flex-column justify-content-center"},[r("div",{staticClass:"container aboutTxt mt-lg-2 mt-5 p-width lineHeight"},[r("p",[t._v("對於甜點，你是否也一樣喜歡吃，但卻害怕攝取過多的醣分?"),r("br"),t._v("微甜採用少油、少甜的方式製作甜點，在想吃甜點時，也能無負擔的享用!")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-5"},[r("div",{staticClass:"d-flex flex-column-reverse flex-lg-row"},[r("div",{staticClass:"col-sm-12 col-md-12 col-lg-6  d-flex flex-column justify-content-center"},[r("div",{staticClass:"container aboutTxt mt-lg-2 mt-5 p-width "},[r("p",{staticClass:"lineHeight"},[t._v("每一項甜點，我們都堅持，用最健康的食材下去製作，我們除了蛋糕，也開發了許多各式各樣美味的甜點，希望每一位吃到的客人，都能感受到微甜的用心! ")])])]),r("div",{staticClass:"col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center"},[r("img",{staticClass:"rounded i-shadow",attrs:{src:n("06bc")}})])])])}],b={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},h=b,v=(n("cccb"),Object(u["a"])(h,p,g,!1,null,null,null)),w=v.exports,x=n("5530"),C=n("2f62"),_=n("0e44");r["default"].use(C["a"]);var y=new C["a"].Store({state:{jwt:{token:"",received:0},user:{account:"",role:0,email:""}},mutations:{login:function(t,e){t.jwt.token=e.token,t.jwt.received=(new Date).getTime(),t.user.account=e.account,t.user.role=e.role,t.user.email=e.email},logout:function(t){t.jwt={token:"",received:0},t.user={account:"",role:0,email:""}},extend:function(t,e){t.jwt.token=e,t.jwt.received=(new Date).getTime()},getinfo:function(t,e){t.user.account=e.account,t.user.role=e.role,t.user.email=e.email}},actions:{},modules:{},getters:{user:function(t){return Object(x["a"])({islogin:t.user.account.length>0,isAdmin:1===t.user.role},t.user)}},plugins:[Object(_["a"])()]});r["default"].use(f["a"]);var j=[{path:"/",name:"Home",component:w,meta:{title:"微甜蛋糕"}},{path:"/notice",name:"Notice",component:function(){return n.e("notice").then(n.bind(null,"c9d4"))},meta:{title:"購物須知 | 微甜蛋糕"}},{path:"/register",name:"Register",component:function(){return n.e("register").then(n.bind(null,"73cf"))},meta:{title:"註冊 | 微甜蛋糕"}},{path:"/products",name:"Products",component:function(){return n.e("products").then(n.bind(null,"e6dc"))},meta:{title:"全部品項 | 微甜蛋糕"}},{path:"/productpage/:id",name:"ProductPage",component:function(){return n.e("productpage").then(n.bind(null,"2923"))},meta:{title:"商品頁面 | 微甜蛋糕"}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},meta:{title:"登入 | 微甜蛋糕"}},{path:"/cart",name:"Cart",component:function(){return n.e("cart").then(n.bind(null,"b789"))},meta:{title:"購物車 | 微甜蛋糕",login:!0}},{path:"/member",name:"Member",component:function(){return n.e("menber").then(n.bind(null,"80d2"))},meta:{title:"會員資料 | 微甜蛋糕",login:!0}},{path:"/orders",name:"Orders",component:function(){return n.e("orders").then(n.bind(null,"159d"))},meta:{title:"訂單 | 微甜蛋糕",login:!0}},{path:"/admin",name:"Admin",component:function(){return n.e("admin").then(n.bind(null,"3530"))},children:[{path:"",name:"AdminHome",component:function(){return n.e("admin").then(n.bind(null,"c732"))},meta:{login:!0,admin:!0,title:"管理"}},{path:"products",name:"AdminProducts",component:function(){return n.e("admin").then(n.bind(null,"aa93"))},meta:{login:!0,admin:!0,title:"商品管理"}},{path:"orders",name:"AdminOrders",component:function(){return n.e("admin").then(n.bind(null,"ec5c"))},meta:{login:!0,admin:!0,title:"訂單管理"}}]}],k=new f["a"]({routes:j});k.beforeEach((function(t,e,n){t.meta.login&&0===y.state.jwt.token.length?n("/login"):t.meta.admin&&1!==y.state.user.role?n("/"):n()})),k.afterEach((function(t,e){document.title=t.meta.title}));var S=k,O=n("ecee"),$=n("ad3d"),E=n("c074"),A=n("f2d1"),P=n("bc3a"),T=n.n(P),z=n("2106"),H=n.n(z),B=n("f9d5"),L=n.n(B),D=(n("4413"),n("657c")),M=(n("2bd9"),{computed:{user:function(){return this.$store.getters.user}}}),N=n("a584");r["default"].use(N["a"],{config:{id:"G-WTBZM9633H"}}),T.a.defaults.baseURL="https://littlesweet.herokuapp.com",r["default"].use(H.a,T.a),r["default"].use(L.a),r["default"].component("ImgInputer",D["a"]),r["default"].component("font-awesome-icon",$["a"]),O["c"].add(E["g"],E["c"],E["f"],A["a"],A["c"],A["b"],E["e"],E["b"],E["d"],E["a"]),r["default"].mixin(M),r["default"].config.productionTip=!1,new r["default"]({router:S,store:y,render:function(t){return t(m)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},9264:function(t,e,n){t.exports=n.p+"img/aboutpic1.5a24d56e.jpg"},acc9:function(t,e,n){t.exports=n.p+"img/cake2.c0a24651.jpg"},cccb:function(t,e,n){"use strict";n("5ced")},cf48:function(t,e,n){t.exports=n.p+"img/tart.f8c45527.jpg"},fb50:function(t,e,n){t.exports=n.p+"img/logo2.6220a9b9.png"}});
//# sourceMappingURL=app.9cbeed9b.js.map