(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/filmData/index"],{1695:function(t,e,a){"use strict";var n={uTabs:function(){return Promise.all([a.e("common/vendor"),a.e("node-modules/uview-ui/components/u-tabs/u-tabs")]).then(a.bind(null,"7244"))},uLoading:function(){return a.e("node-modules/uview-ui/components/u-loading/u-loading").then(a.bind(null,"3908"))},uRate:function(){return a.e("node-modules/uview-ui/components/u-rate/u-rate").then(a.bind(null,"2f81"))}},i=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.filmList,(function(e,a){var n=Number(e.rate),i=e.film_Actors_One.slice(0,12),o=e.film_Place.split("/"),u=e.film_Place.split("/"),s=e.film_Length.slice(0,10),l=e.film_Place.split("/");return{$orig:t.__get_orig(e),m0:n,g0:i,g1:o,g2:u,g3:s,g4:l}})));t.$mp.data=Object.assign({},{$root:{l0:a}})},o=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}))},"1af3":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{tagList:[],filmList:[],current:"0",url:"https://www.yulonglin.xyz:5000/xcx/getfilmTypeDetail",Judegeurl:"https://www.yulonglin.xyz:5000/xcx/getJudgeStatus",filmCount:0,triggered:!0,loadingType:"more",nowPage:0,totalPage:1,isTrue:getApp().globalData.isTrue}},onLoad:function(){this.getTagList();var t=this.url;this.current,this.tagList.current;this.getFilmData(t,"热门",0),this.getFilmTypeCount("热门"),this.isTrue=getApp().globalData.isTrue},methods:{checkLoginStatus:function(){var e=this;t.getSetting({success:function(a){a.authSetting["scope.userInfo"]?t.getUserInfo({scope:"scope.userInfo",success:function(t){getApp().globalData.isTrue=!0,e.getTagList()}}):(getApp().globalData.isTrue=!1,t.switchTab({url:"../mime/index"}),t.showToast({title:"请先授权!",icon:"none"}))}})},getTagList:function(){var t=this;this.AxiosGet("https://www.yulonglin.xyz:5000/xcx/getFilmTag",{}).then((function(e){if(200==e.data.status){t.show=!t.show;for(var a=0;a<=e.data.data.length-1;a++)t.tagList.push({name:e.data.data[a].tagName})}}))},getFilmData:function(t,e,a){this.filmList=[];var n=this;this.AxiosPost(t,{tagName:e,start:a}).then((function(t){200==t.data.status&&(n.filmList=t.data.data)}))},seeTheFilm:function(e){1==getApp().globalData.isTrue?t.navigateTo({url:"/pages/details/index?jsonStr="+e}):(t.switchTab({url:"../mime/index"}),t.showToast({title:"请先授权!",icon:"none"}))},change:function(t){var e=this,a=e.url;e.current=t;var n=e.tagList[t].name;switch(t){case 0:e.getFilmTypeCount(n),e.nowPage=1,e.getFilmData(a,n,1);break;case 1:e.getFilmTypeCount(n),e.nowPage=1,e.getFilmData(a,n,1);break;case 2:e.getFilmTypeCount(n),e.nowPage=1,e.getFilmData(a,n,1);break;case 3:e.getFilmTypeCount(n),e.nowPage=1,e.getFilmData(a,n,1);break;case 4:e.getFilmTypeCount(n),e.nowPage=1,e.getFilmData(a,n,1);break;case 5:e.getFilmTypeCount(n),e.nowPage=1,e.getFilmData(a,n,1);break;case 6:e.getFilmTypeCount(n),e.nowPage=1,e.getFilmData(a,n,1);break;case 7:e.getFilmTypeCount(n),e.nowPage=1,e.getFilmData(a,n,1);break}},getFilmTypeCount:function(t){var e=this,a="https://www.yulonglin.xyz:5000/xcx/getTypeFilmCount";this.AxiosPost(a,{typeName:t}).then((function(t){if(200==t.data.status){var a=t.data.data[0].filmCount;e.totalPage=Math.ceil(Number(a)/10)}}))},onReachBottom:function(){var t=this,e=this.tagList[this.current].name;t.getFilmTypeCount(e);var a=t.url,n=t.nowPage,i=t.totalPage;n>=i||(t.nowPage=n+1,n===i?t.getFilmData(a,e,t.totalPage):t.getFilmData(a,e,n+1))}}};e.default=a}).call(this,a("543d")["default"])},6830:function(t,e,a){},a49c:function(t,e,a){"use strict";var n=a("6830"),i=a.n(n);i.a},d9b2:function(t,e,a){"use strict";(function(t){a("ab5e");n(a("66fd"));var e=n(a("fc0f"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},d9cc:function(t,e,a){"use strict";a.r(e);var n=a("1af3"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},fc0f:function(t,e,a){"use strict";a.r(e);var n=a("1695"),i=a("d9cc");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("a49c");var u,s=a("f0c5"),l=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"026a6a73",null,!1,n["a"],u);e["default"]=l.exports}},[["d9b2","common/runtime","common/vendor"]]]);