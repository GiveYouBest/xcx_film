(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mime/index"],{"0f36":function(e,t,n){},6153:function(e,t,n){"use strict";(function(e){n("ab5e");o(n("66fd"));var t=o(n("f659"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"8c24":function(e,t,n){"use strict";var o,s=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return o}))},"96c0":function(e,t,n){"use strict";n.r(t);var o=n("fa24"),s=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=s.a},"9b5a":function(e,t,n){"use strict";var o=n("0f36"),s=n.n(o);s.a},f659:function(e,t,n){"use strict";n.r(t);var o=n("8c24"),s=n("96c0");for(var u in s)"default"!==u&&function(e){n.d(t,e,(function(){return s[e]}))}(u);n("9b5a");var a,i=n("f0c5"),c=Object(i["a"])(s["default"],o["b"],o["c"],!1,null,"0ad6c022",null,!1,o["a"],a);t["default"]=c.exports},fa24:function(e,t,n){"use strict";(function(e){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{userInfo:[],url:"https://www.yulonglin.xyz:5000/xcx/isTrue",Judegeurl:"https://www.yulonglin.xyz:5000/xcx/getJudgeStatus",uniUrl:"https://www.yulonglin.xyz:5000/xcx/wxLogin",saveUrl:"https://www.yulonglin.xyz:5000/xcx/saveData",isTrue:"",openid:""}},onShow:function(){this.checkLoginStatus()},methods:{getLogin:function(t){var n=this;this.AxiosPost(this.uniUrl,{js_code:t}).then((function(t){n.openid=t.data.body.split('"openid":')[1].replace("}",""),e.setStorageSync("tooken",t.data.tooken)}))},checkLoginStatus:function(){var t=this;0==getApp().globalData.isTrue?t.getUserMessage():e.getSetting({success:function(n){n.authSetting["scope.userInfo"]&&e.getUserInfo({scope:"scope.userInfo",success:function(n){t.userInfo=n.userInfo,getApp().globalData.isTrue=!0,e.setStorageSync("isTrue",!0)}})},fail:function(){t.getUserMessage()}})},saveData:function(e){this.AxiosPost(this.saveUrl,e).then((function(e){}))},getUserMessage:function(){var t=this,o=getApp().globalData.isTrue;if(1==o)e.showToast({title:"已经授权成功!",icon:"success"});else{t=this;var s="";e.login({success:function(o){o.code?(t.AxiosPost(t.uniUrl,{js_code:o.code}).then((function(t){s=t.data.body.split('"openid":')[1].replace("}",""),e.setStorageSync("tooken",t.data.tooken)})),e.getUserInfo({success:function(e){t.userInfo=e.userInfo;var u=e.userInfo,a=n({openid:s,code:o.code,nickName:u.nickName,avatarUrl:u.avatarUrl,gender:u.gender,province:u.province,city:u.city,country:u.country,language:u.language},"gender",u.gender);t.saveData(a),t.isTrue="true",t.AxiosPost(t.url,{judge:!0})}})):e.showToast({title:"登录失败",icon:"none"})}})}}}};t.default=o}).call(this,n("543d")["default"])}},[["6153","common/runtime","common/vendor"]]]);