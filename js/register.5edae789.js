(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"2cfd":function(t,e,r){"use strict";r("e314")},"73cf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"mt-5",attrs:{id:"register"}},[r("b-col",{staticClass:"border-l"},[r("h5",[t._v("帳號註冊")])]),r("b-container",{staticClass:"rounded border mb-5"},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{staticClass:"mt-5",attrs:{cols:"10 col-lg-10"}},[r("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[r("b-form-group",{attrs:{label:"帳號","label-for":"input-account",state:t.state.account,"invalid-feedback":"帳號長度限制為 4 到 20 個字"}},[r("b-form-input",{attrs:{id:"input-account",type:"text",required:"",placeholder:"請輸入帳號",state:t.state.account},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),r("b-form-group",{attrs:{label:"密碼","label-for":"input-password",state:t.state.password,"invalid-feedback":"密碼長度限制為 4 到 20 個字"}},[r("b-form-input",{attrs:{id:"input-password",type:"password",required:"",placeholder:"請輸入密碼",state:t.state.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-form-group",{attrs:{label:"信箱","label-for":"input-email",state:t.state.email,"invalid-feedback":"請輸入有效的信箱"}},[r("b-form-input",{attrs:{id:"input-email",type:"text",required:"",placeholder:"請輸入信箱",state:t.state.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("b-form-group",{attrs:{label:"電話","label-for":"input-phonenumber",state:t.state.phonenumber,"invalid-feedback":"請輸入有效的電話"}},[r("b-form-input",{attrs:{id:"input-phonenumber",type:"text",required:"",placeholder:"請輸入電話",state:t.state.phonenumber},model:{value:t.form.phonenumber,callback:function(e){t.$set(t.form,"phonenumber",e)},expression:"form.phonenumber"}})],1),r("div",{staticClass:"text-sm-right text-center mt-5"},[r("b-btn",{staticClass:"mb-3 mr-2 regbg",attrs:{variant:"success",type:"submit"}},[t._v("註冊")]),r("b-btn",{staticClass:"mb-3",attrs:{variant:"secondary",type:"reset"}},[t._v("重設")])],1)],1)],1)],1)],1)],1)},a=[],o=r("1da1"),c=(r("96cf"),r("edd5")),i={data:function(){return{form:{account:"",password:"",email:"",phonenumber:""}}},computed:{state:function(){var t=this.form.account,e=this.form.password,r=this.form.email,n=this.form.phonenumber;return{account:0===t.length?null:t.length>=4&&t.length<=20,password:0===e.length?null:e.length>=4&&e.length<=20,email:0===r.length?null:Object(c["a"])(r),phonenumber:0===n.length?null:n.length>=9&&n.length<=20}}},methods:{reset:function(){this.form.account="",this.form.password="",this.form.email="",this.form.phonenumber=""},submit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.axios.post("/users",t.form);case 3:t.$swal({icon:"success",title:"成功",text:"註冊成功"}),t.$router.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.$swal({icon:"error",title:"失敗成功",text:"註冊失敗"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},l=i,u=(r("2cfd"),r("2877")),s=Object(u["a"])(l,n,a,!1,null,null,null);e["default"]=s.exports},e314:function(t,e,r){},edd5:function(t,e,r){"use strict";function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function a(t){var e="string"===typeof t||t instanceof String;if(!e){var r=n(t);throw null===t?r="null":"object"===r&&(r=t.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var r in e)"undefined"===typeof t[r]&&(t[r]=e[r]);return t}function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function i(t,e){var r,n;a(t),"object"===c(e)?(r=e.min||0,n=e.max):(r=arguments[1],n=arguments[2]);var o=encodeURI(t).split(/%..|./).length-1;return o>=r&&("undefined"===typeof n||o<=n)}r.d(e,"a",(function(){return k}));var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};function u(t,e){a(t),e=o(e,l),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var r=t.split("."),n=r[r.length-1];if(e.require_tld){if(r.length<2)return!1;if(!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(n))return!1}return!(!e.allow_numeric_tld&&/^\d+$/.test(n))&&r.every((function(t){return!(t.length>63)&&(!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(t)&&(!/[\uff01-\uff5e]/.test(t)&&(!/^-|-$/.test(t)&&!(!e.allow_underscores&&/_/.test(t)))))}))}var s="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",f="(".concat(s,"[.]){3}").concat(s),p=new RegExp("^".concat(f,"$")),m="(?:[0-9a-fA-F]{1,4})",d=new RegExp("^("+"(?:".concat(m,":){7}(?:").concat(m,"|:)|")+"(?:".concat(m,":){6}(?:").concat(f,"|:").concat(m,"|:)|")+"(?:".concat(m,":){5}(?::").concat(f,"|(:").concat(m,"){1,2}|:)|")+"(?:".concat(m,":){4}(?:(:").concat(m,"){0,1}:").concat(f,"|(:").concat(m,"){1,3}|:)|")+"(?:".concat(m,":){3}(?:(:").concat(m,"){0,2}:").concat(f,"|(:").concat(m,"){1,4}|:)|")+"(?:".concat(m,":){2}(?:(:").concat(m,"){0,3}:").concat(f,"|(:").concat(m,"){1,5}|:)|")+"(?:".concat(m,":){1}(?:(:").concat(m,"){0,4}:").concat(f,"|(:").concat(m,"){1,6}|:)|")+"(?::((?::".concat(m,"){0,5}:").concat(f,"|(?::").concat(m,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(a(t),e=String(e),!e)return b(t,4)||b(t,6);if("4"===e){if(!p.test(t))return!1;var r=t.split(".").sort((function(t,e){return t-e}));return r[3]<=255}return"6"===e&&!!d.test(t)}var h={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1},x=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,g=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,_=/^[a-z\d]+$/,v=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,y=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,w=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,F=254;function $(t){var e=t.replace(/^"(.+)"$/,"$1");if(!e.trim())return!1;var r=/[\.";<>]/.test(e);if(r){if(e===t)return!1;var n=e.split('"').length===e.split('\\"').length;if(!n)return!1}return!0}function k(t,e){if(a(t),e=o(e,h),e.require_display_name||e.allow_display_name){var r=t.match(x);if(r){var n=r[1];if(t=t.replace(n,"").replace(/(^<|>$)/g,""),n.endsWith(" ")&&(n=n.substr(0,n.length-1)),!$(n))return!1}else if(e.require_display_name)return!1}if(!e.ignore_max_length&&t.length>F)return!1;var c=t.split("@"),l=c.pop(),s=c.join("@"),f=l.toLowerCase();if(e.domain_specific_validation&&("gmail.com"===f||"googlemail.com"===f)){s=s.toLowerCase();var p=s.split("+")[0];if(!i(p.replace(".",""),{min:6,max:30}))return!1;for(var m=p.split("."),d=0;d<m.length;d++)if(!_.test(m[d]))return!1}if(!1===e.ignore_max_length&&(!i(s,{max:64})||!i(l,{max:254})))return!1;if(!u(l,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!b(l)){if(!l.startsWith("[")||!l.endsWith("]"))return!1;var k=l.substr(1,l.length-2);if(0===k.length||!b(k))return!1}}if('"'===s[0])return s=s.slice(1,s.length-1),e.allow_utf8_local_part?w.test(s):v.test(s);for(var C=e.allow_utf8_local_part?y:g,D=s.split("."),q=0;q<D.length;q++)if(!C.test(D[q]))return!1;return!e.blacklisted_chars||-1===s.search(new RegExp("[".concat(e.blacklisted_chars,"]+"),"g"))}}}]);
//# sourceMappingURL=register.5edae789.js.map