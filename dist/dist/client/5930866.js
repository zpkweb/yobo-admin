(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{439:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),l={data:function(){return{isCreate:!1,identityList:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/api/admin/identityList");case 2:n=e.sent,console.log("identityList",n.data),n.success?t.identityList=n.data:(t.isCreate=!0,t.identityList=t.$store.state.identityList);case 5:case"end":return e.stop()}}),e)})))()},methods:{createIdentityList:function(){console.log("createIdentityList")}}},o=n(14),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"identityList"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.identityList}},[n("el-table-column",{attrs:{prop:"zh-cn",label:t.$t("lang.zh"),width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"en-us",label:t.$t("lang.en"),width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"ja-jp",label:t.$t("lang.ja"),width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"es-es",label:t.$t("lang.es"),width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"index",label:t.$t("content.identityCode")}})],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:5}},[t.isCreate?n("el-button",{attrs:{type:"primary"},on:{click:t.createIdentityList}},[t._v("\n        "+t._s(t.$t("content.create"))+"\n      ")]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);