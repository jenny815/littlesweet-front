(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orders"],{"159d":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"orders"}},[r("b-container",{staticClass:"mb-5"},[r("b-table",{staticClass:"mt-5",attrs:{items:e.orders,fields:e.fields},scopedSlots:e._u([{key:"cell(products)",fn:function(t){return[r("ul",e._l(t.item.products,(function(t){return r("li",[e._v(e._s(t.product.name)+" * "+e._s(t.amount))])})),0)]}},{key:"cell(price)",fn:function(t){return[r("ul",e._l(t.item.products,(function(t){return r("li",[e._v(e._s(t.product.price*t.amount))])})),0)]}},{key:"cell(state)",fn:function(t){return[r("h6",[e._v("等待出貨")])]}}])})],1)],1)},a=[],s=r("1da1"),o=(r("96cf"),r("d81d"),{name:"Orders",data:function(){return{orders:[],fields:[{key:"_id",label:"訂單編號"},{key:"date",label:"日期"},{key:"products",label:"商品"},{key:"price",label:"金額"},{key:"state",label:"訂單狀態"}]}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("/users/orders",{headers:{authorization:"Bearer "+e.$store.state.jwt.token}});case 3:r=t.sent,n=r.data,e.orders=n.result.map((function(e){return e.date=new Date(e.date).toLocaleString(),e})),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),e.$swal({icon:"error",title:"錯誤",text:"取得訂單失敗"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),u=o,c=r("2877"),i=Object(c["a"])(u,n,a,!1,null,null,null);t["default"]=i.exports},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),o=s("map");n({target:"Array",proto:!0,forced:!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=orders.ade8eb87.js.map