(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{396:function(e,t,n){"use strict";var o=n(4),l=n(163),r=n(64),m=n(16),c=n(34),_=n(164),d=n(108),v=n(81),$=n(23),f=v("splice"),h=$("splice",{ACCESSORS:!0,0:0,1:2}),y=Math.max,w=Math.min;o({target:"Array",proto:!0,forced:!f||!h},{splice:function(e,t){var n,o,v,$,f,h,j=c(this),x=m(j.length),z=l(e,x),k=arguments.length;if(0===k?n=o=0:1===k?(n=0,o=x-z):(n=k-2,o=w(y(r(t),0),x-z)),x+n-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(v=_(j,o),$=0;$<o;$++)(f=z+$)in j&&d(v,$,j[f]);if(v.length=o,n<o){for($=z;$<x-o;$++)h=$+n,(f=$+o)in j?j[h]=j[f]:delete j[h];for($=x;$>x-o+n;$--)delete j[$-1]}else if(n>o)for($=x-o;$>z;$--)h=$+n-1,(f=$+o-1)in j?j[h]=j[f]:delete j[h];for($=0;$<n;$++)j[$+z]=arguments[$+2];return j.length=x-o+n,v}})},439:function(e,t,n){"use strict";n.r(t);n(46),n(30),n(396),n(15);var o=n(3),l={data:function(){return{currentPage:1,pageSize:8,total:0,commodity:[],options:{category:[],classification:[],material:[],model:[],place:[],ruiwu:[],shape:[],specification:[],style:[],technique:[],theme:[],type:[],use:[],state:[{index:0,name:this.$t("commodity.state.added")},{index:1,name:this.$t("commodity.state.onsale")},{index:2,name:this.$t("commodity.state.sold")},{index:3,name:this.$t("commodity.state.offline")}]}}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onCommoditySearch();case 2:case"end":return t.stop()}}),t)})))()},methods:{onCommoditySearch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/admin/commodity/all");case 2:o=t.sent,console.log("searchData",o),e.total=o.data.total,n=o.data.list.map((function(e){return e.visible=!1,e})),e.commodity=n;case 7:case"end":return t.stop()}}),t)})))()},commodityDelete:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.$axios.$post("/api/admin/commodity/delete",{commodityId:t.commodityId});case 2:o.sent.success?(n.commodity.splice(e,1),n.$message({showClose:!0,message:"".concat(n.$t("content.delete")).concat(n.$t("content.success"),"！"),type:"success"})):n.$message({showClose:!0,message:"".concat(n.$t("content.delete")).concat(n.$t("content.fail"),"!"),type:"error"});case 4:case"end":return o.stop()}}),o)})))()},commodityEdit:function(e,t){this.$router.push(this.localePath("/commodity/create?commodityId=".concat(t.commodityId)))},formatterDate:function(e,t,n,o){return this.$moment(n).format("YYYY-MM-DD HH:mm:ss")},changeCurrentPage:function(e){this.currentPage=e,this.onCommoditySearch()}}},r=n(14),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{attrs:{data:e.commodity,border:""}},[n("el-table-column",{attrs:{type:"expand",label:e.$t("commodity.show")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.name")})}},[n("span",[e._v(e._s(t.row.name["zh-cn"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.name")})}},[n("span",[e._v(e._s(t.row.name["en-us"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.name")})}},[n("span",[e._v(e._s(t.row.name["ja-jp"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.name")})}},[n("span",[e._v(e._s(t.row.name["es-es"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.desc")})}},[n("span",[e._v(e._s(t.row.desc["zh-cn"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.desc")})}},[n("span",[e._v(e._s(t.row.desc["en-us"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.desc")})}},[n("span",[e._v(e._s(t.row.desc["ja-jp"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.desc")})}},[n("span",[e._v(e._s(t.row.desc["es-es"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.price.title")})}},[n("span",[e._v(e._s(t.row.price["zh-cn"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.price.title")})}},[n("span",[e._v(e._s(t.row.price["en-us"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.price.title")})}},[n("span",[e._v(e._s(t.row.price["ja-jp"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.price.title")})}},[n("span",[e._v(e._s(t.row.price["es-es"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.shape")})}},[n("span",[e._v(e._s(t.row.shapes[0]["zh-cn"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.shape")})}},[n("span",[e._v(e._s(t.row.shapes[0]["en-us"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.shape")})}},[n("span",[e._v(e._s(t.row.shapes[0]["ja-jp"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.shape")})}},[n("span",[e._v(e._s(t.row.shapes[0]["es-es"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.theme")})}},[n("span",[e._v(e._s(t.row.themes[0]["zh-cn"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.theme")})}},[n("span",[e._v(e._s(t.row.themes[0]["en-us"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.theme")})}},[n("span",[e._v(e._s(t.row.themes[0]["ja-jp"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.theme")})}},[n("span",[e._v(e._s(t.row.themes[0]["es-es"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.category")})}},[n("span",[e._v(e._s(t.row.categorys[0]["zh-cn"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.category")})}},[n("span",[e._v(e._s(t.row.categorys[0]["en-us"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.category")})}},[n("span",[e._v(e._s(t.row.categorys[0]["ja-jp"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.category")})}},[n("span",[e._v(e._s(t.row.categorys[0]["es-es"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.technique")})}},[n("span",[e._v(e._s(t.row.techniques[0]["zh-cn"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.technique")})}},[n("span",[e._v(e._s(t.row.techniques[0]["en-us"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.technique")})}},[n("span",[e._v(e._s(t.row.techniques[0]["ja-jp"]))])]),e._v(" "),n("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.technique")})}},[n("span",[e._v(e._s(t.row.techniques[0]["es-es"]))])])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"name['zh-cn']",label:e.$t("commodity.name")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v(e._s(e.$t("lang.zh"))+": "+e._s(t.row.name["zh-cn"]))]),e._v(" "),n("p",[e._v(e._s(e.$t("lang.en"))+": "+e._s(t.row.name["en-us"]))]),e._v(" "),n("p",[e._v(e._s(e.$t("lang.ja"))+": "+e._s(t.row.name["ja-jp"]))]),e._v(" "),n("p",[e._v(e._s(e.$t("lang.es"))+": "+e._s(t.row.name["es-es"]))]),e._v(" "),n("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n            "+e._s(t.row.name[e.$i18n.locale])+"\n          ")])])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"state",label:e.$t("commodity.state.title")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.options.state[t.row.state].name)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("commodity.seller")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v("姓名 : "+e._s(t.row.seller?t.row.seller.firstname+" "+t.row.seller.lastname:""))]),e._v(" "),n("p",[e._v("Id: "+e._s(t.row.seller?t.row.seller.sellerId:""))]),e._v(" "),n("p",[e._v("国家: "+e._s(t.row.seller?t.row.seller.country:""))]),e._v(" "),n("p",[e._v("类型: "+e._s(t.row.seller?t.row.seller.typeName:""))]),e._v(" "),n("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n            "+e._s(t.row.seller?t.row.seller.firstname+" "+t.row.seller.lastname:"")+"\n          ")])])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"price['zh-cn']",label:e.$t("commodity.price.title")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v(e._s(e.$t("lang.zh"))+": "+e._s(t.row.price["zh-cn"]))]),e._v(" "),n("p",[e._v(e._s(e.$t("lang.en"))+": "+e._s(t.row.price["en-us"]))]),e._v(" "),n("p",[e._v(e._s(e.$t("lang.ja"))+": "+e._s(t.row.price["ja-jp"]))]),e._v(" "),n("p",[e._v(e._s(e.$t("lang.es"))+": "+e._s(t.row.price["es-es"]))]),e._v(" "),n("div",{attrs:{slot:"reference"},slot:"reference"},[e._v("\n            "+e._s(t.row.price[e.$i18n.locale])+"\n          ")])])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"photo",label:e.$t("commodity.photo"),width:"123"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.photos&&t.row.photos.length?n("div",{staticClass:"demo-image__preview"},[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.photos[0].src,"preview-src-list":t.row.photos.map((function(e){return e.src}))}})],1):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"width",label:e.$t("commodity.width.title")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.width)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"height",label:e.$t("commodity.height.title")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.height)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"colors",label:e.$t("commodity.color.title"),width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.colors,(function(t,o){return n("el-tag",{key:o,staticStyle:{"margin-left":"10px"},attrs:{"disable-transitions":"",color:t.name,effect:"dark"}},[e._v("\n          "+e._s(t.name)+"\n        ")])}))}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"desc['zh-cn']",label:e.$t("commodity.desc"),width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v(e._s(e.$t("lang.zh"))+": "+e._s(t.row.desc["zh-cn"]))]),e._v(" "),n("p",[e._v(e._s(e.$t("lang.en"))+": "+e._s(t.row.desc["en-us"]))]),e._v(" "),n("p",[e._v(e._s(e.$t("lang.ja"))+": "+e._s(t.row.desc["ja-jp"]))]),e._v(" "),n("p",[e._v(e._s(e.$t("lang.es"))+": "+e._s(t.row.desc["es-es"]))]),e._v(" "),n("div",{attrs:{slot:"reference"},slot:"reference"},[n("span",{staticClass:"ellipsis",staticStyle:{display:"inline-block",width:"179px"}},[e._v(e._s(t.row.desc[e.$i18n.locale]))])])])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"createdDate",formatter:e.formatterDate,label:e.$t("content.createdDate"),width:"160"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("content.operation"),width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",icon:"el-icon-edit"},on:{click:function(n){return e.commodityEdit(t.$index,t.row)}}},[e._v(e._s(e.$t("content.edit")))]),e._v(" "),n("el-popover",{attrs:{placement:"top"},model:{value:t.row.visible,callback:function(n){e.$set(t.row,"visible",n)},expression:"scope.row.visible"}},[n("p",[e._v(e._s(e.$t("content.deleteText")))]),e._v(" "),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.row.visible=!1}}},[e._v(e._s(e.$t("content.cancel")))]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return e.commodityDelete(t.$index,t.row)}}},[e._v(e._s(e.$t("content.define")))])],1),e._v(" "),n("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",icon:"el-icon-delete"},slot:"reference"},[e._v(e._s(e.$t("content.delete")))])],1)]}}])})],1),e._v(" "),n("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{background:"",layout:"prev, pager, next","page-size":e.pageSize,"current-page":e.currentPage,total:e.total},on:{"current-change":e.changeCurrentPage}})],1)}),[],!1,null,"506a05cd",null);t.default=component.exports}}]);