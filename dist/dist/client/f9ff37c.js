(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{396:function(e,t,o){"use strict";var c=o(4),r=o(163),l=o(64),m=o(16),n=o(34),d=o(164),y=o(108),h=o(81),f=o(23),v=h("splice"),_=f("splice",{ACCESSORS:!0,0:0,1:2}),S=Math.max,x=Math.min;c({target:"Array",proto:!0,forced:!v||!_},{splice:function(e,t){var o,c,h,f,v,_,$=n(this),k=m($.length),w=r(e,k),C=arguments.length;if(0===C?o=c=0:1===C?(o=0,c=k-w):(o=C-2,c=x(S(l(t),0),k-w)),k+o-c>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=d($,c),f=0;f<c;f++)(v=w+f)in $&&y(h,f,$[v]);if(h.length=c,o<c){for(f=w;f<k-c;f++)_=f+o,(v=f+c)in $?$[_]=$[v]:delete $[_];for(f=k;f>k-c+o;f--)delete $[f-1]}else if(o>c)for(f=k-c;f>w;f--)_=f+o-1,(v=f+c-1)in $?$[_]=$[v]:delete $[_];for(f=0;f<o;f++)$[f+w]=arguments[f+2];return $.length=k-c+o,h}})},408:function(e,t,o){var content=o(430);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("72d6446c",content,!0,{sourceMap:!1})},409:function(e,t,o){var content=o(432);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("6c322644",content,!0,{sourceMap:!1})},429:function(e,t,o){"use strict";o(408)},430:function(e,t,o){(t=o(28)(!1)).push([e.i,".el-header[data-v-030d7d06]{background-color:#b3c0d1;color:#333;line-height:60px}.el-aside[data-v-030d7d06]{color:#333}.form-commodity-item[data-v-030d7d06]{width:100%}.form-commodity-item-label[data-v-030d7d06]{width:80px;text-align:left;vertical-align:middle;float:left;font-size:14px;color:#606266;line-height:40px;padding:0 12px 0 0;box-sizing:border-box}.el-form-item__content[data-v-030d7d06]{width:100%}",""]),e.exports=t},431:function(e,t,o){"use strict";o(409)},432:function(e,t,o){(t=o(28)(!1)).push([e.i,'.demo-table-expand{font-size:0}.demo-table-expand label{width:90px;color:#99a9bf}.demo-table-expand .el-form-item{margin-right:0;margin-bottom:0;width:25%}.time{font-size:13px;color:#999}.bottom{margin-top:13px;line-height:12px}.button{padding:0;float:right}.image{width:100%;display:block}.clearfix:after,.clearfix:before{display:table;content:""}.clearfix:after{clear:both}.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.el-form--inline .form-commodity-item .el-form-item__content,.ellipsis{width:100%}',""]),e.exports=t},460:function(e,t,o){"use strict";o.r(t);o(46),o(30),o(396),o(19),o(9),o(35),o(15);var c=o(3),r={name:"Commodity",data:function(){return{currentPage:1,pageSize:10,total:0,commodity:[],commoditySearch:{id:"",name:"",desc:"",price:{min:"",max:""},width:{min:"",max:""},height:{min:"",max:""},sellerId:"",categorys:[],classifications:[],materials:[],models:[],places:[],ruiwus:[],shapes:[],specifications:[],styles:[],techniques:[],themes:[],types:[],uses:[],state:"",hots:!1,news:!1,colors:""},options:{},states:[{index:0,name:this.$t("commodity.state.added")},{index:1,name:this.$t("commodity.state.onsale")},{index:2,name:this.$t("commodity.state.sold")},{index:3,name:this.$t("commodity.state.offline")}]}},fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.options={};case 1:case"end":return t.stop()}}),t)})))()},created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/admin/commodity/options");case 2:return(o=t.sent).success&&(e.options=o.data),t.next=6,e.onCommoditySearch(e.currentPage);case 6:case"end":return t.stop()}}),t)})))()},methods:{onCommoditySearch:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function o(){var c,r,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r="",t.commoditySearch.price.min&&t.commoditySearch.price.max?r="".concat(t.commoditySearch.price.min,",").concat(t.commoditySearch.price.max):t.commoditySearch.price.min?r="0,".concat(t.commoditySearch.price.min):t.commoditySearch.price.max&&(r="0,".concat(t.commoditySearch.price.max)),o.next=4,t.$axios.$get("/api/admin/commodity/searchs",{params:{id:t.commoditySearch.id,commodityId:t.commoditySearch.commodityId,sellerId:t.commoditySearch.sellerId,name:t.commoditySearch.name,desc:t.commoditySearch.desc,state:t.commoditySearch.state,price:r,colors:t.commoditySearch.colors,categorys:t.commoditySearch.categorys.toString(),classifications:t.commoditySearch.classifications.toString(),materials:t.commoditySearch.materials.toString(),models:t.commoditySearch.models.toString(),places:t.commoditySearch.places.toString(),ruiwus:t.commoditySearch.ruiwus.toString(),shapes:t.commoditySearch.shapes.toString(),specifications:t.commoditySearch.specifications.toString(),styles:t.commoditySearch.styles.toString(),techniques:t.commoditySearch.techniques.toString(),themes:t.commoditySearch.themes.toString(),types:t.commoditySearch.types.toString(),uses:t.commoditySearch.uses.toString(),pageSize:t.pageSize,currentPage:e}});case 4:l=o.sent,t.total=l.data.total,c=l.data.list.map((function(e){return e.visible=!1,e})),t.commodity=c;case 8:case"end":return o.stop()}}),o)})))()},onCommoditySearchReset:function(){this.$refs.commoditySearch.resetFields()},commodityDelete:function(e,t){var o=this;return Object(c.a)(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,o.$axios.$post("/api/admin/commodity/delete",{commodityId:t.commodityId});case 2:c.sent.success?(o.commodity.splice(e,1),o.$message({showClose:!0,message:"".concat(o.$t("content.delete")).concat(o.$t("content.success"),"！"),type:"success"})):o.$message({showClose:!0,message:"".concat(o.$t("content.delete")).concat(o.$t("content.fail"),"!"),type:"error"});case 4:case"end":return c.stop()}}),c)})))()},commodityEdit:function(e,t){this.$router.push(this.localePath("/commodity/create?commodityId=".concat(t.commodityId)))},formatterDate:function(e,t,o,c){return this.$moment(o).format("YYYY-MM-DD HH:mm:ss")},changeCurrentPage:function(e){this.onCommoditySearch(e)}}},l=(o(429),o(431),o(14)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-form",{ref:"commoditySearch",staticClass:"commodity-search",attrs:{inline:!0,model:e.commoditySearch,"label-width":"80px","label-position":"left"}},[o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("commodity.id"),prop:"id"}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.id")}),clearable:""},model:{value:e.commoditySearch.id,callback:function(t){e.$set(e.commoditySearch,"id",t)},expression:"commoditySearch.id"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("commodity.commodityId"),prop:"commodityId"}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.commodityId")}),clearable:""},model:{value:e.commoditySearch.commodityId,callback:function(t){e.$set(e.commoditySearch,"commodityId",t)},expression:"commoditySearch.commodityId"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("commodity.sellerId"),prop:"sellerId"}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.sellerId")}),clearable:""},model:{value:e.commoditySearch.sellerId,callback:function(t){e.$set(e.commoditySearch,"sellerId",t)},expression:"commoditySearch.sellerId"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("commodity.name"),prop:"name"}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.name")}),clearable:""},model:{value:e.commoditySearch.name,callback:function(t){e.$set(e.commoditySearch,"name",t)},expression:"commoditySearch.name"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("commodity.desc"),prop:"desc"}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.desc")}),clearable:""},model:{value:e.commoditySearch.desc,callback:function(t){e.$set(e.commoditySearch,"desc",t)},expression:"commoditySearch.desc"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("commodity.state.title"),prop:"state"}},[o("el-select",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.state.title")}),clearable:""},model:{value:e.commoditySearch.state,callback:function(t){e.$set(e.commoditySearch,"state",t)},expression:"commoditySearch.state"}},e._l(e.states,(function(e){return o("el-option",{key:e.index,attrs:{label:e.name,value:e.index}})})),1)],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{span:5}},[o("el-form-item",{attrs:{label:e.$t("commodity.price.title"),prop:"price.min"}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.price.min")}),clearable:""},model:{value:e.commoditySearch.price.min,callback:function(t){e.$set(e.commoditySearch.price,"min",t)},expression:"commoditySearch.price.min"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{prop:"price.max"}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.price.max")}),clearable:""},model:{value:e.commoditySearch.price.max,callback:function(t){e.$set(e.commoditySearch.price,"max",t)},expression:"commoditySearch.price.max"}})],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.category")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.categorys,callback:function(t){e.$set(e.commoditySearch,"categorys",t)},expression:"commoditySearch.categorys"}},e._l(e.options.categorys,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.classification")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.classifications,callback:function(t){e.$set(e.commoditySearch,"classifications",t)},expression:"commoditySearch.classifications"}},e._l(e.options.classifications,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.material")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.materials,callback:function(t){e.$set(e.commoditySearch,"materials",t)},expression:"commoditySearch.materials"}},e._l(e.options.materials,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.model")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.models,callback:function(t){e.$set(e.commoditySearch,"models",t)},expression:"commoditySearch.models"}},e._l(e.options.models,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.place")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.places,callback:function(t){e.$set(e.commoditySearch,"places",t)},expression:"commoditySearch.places"}},e._l(e.options.places,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.ruiwu")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.ruiwus,callback:function(t){e.$set(e.commoditySearch,"ruiwus",t)},expression:"commoditySearch.ruiwus"}},e._l(e.options.ruiwus,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.shape")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.shapes,callback:function(t){e.$set(e.commoditySearch,"shapes",t)},expression:"commoditySearch.shapes"}},e._l(e.options.shapes,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.specification")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.specifications,callback:function(t){e.$set(e.commoditySearch,"specifications",t)},expression:"commoditySearch.specifications"}},e._l(e.options.specifications,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.style")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.styles,callback:function(t){e.$set(e.commoditySearch,"styles",t)},expression:"commoditySearch.styles"}},e._l(e.options.styles,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.technique")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.techniques,callback:function(t){e.$set(e.commoditySearch,"techniques",t)},expression:"commoditySearch.techniques"}},e._l(e.options.techniques,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.theme")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.themes,callback:function(t){e.$set(e.commoditySearch,"themes",t)},expression:"commoditySearch.themes"}},e._l(e.options.themes,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.type")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.types,callback:function(t){e.$set(e.commoditySearch,"types",t)},expression:"commoditySearch.types"}},e._l(e.options.types,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-form-item",{staticClass:"form-commodity-item"},[o("el-row",[o("el-col",{staticClass:"form-commodity-item-label"},[o("span",[e._v(e._s(e.$t("commodity.use")))])]),e._v(" "),o("el-col",{attrs:{span:22}},[o("el-checkbox-group",{model:{value:e.commoditySearch.uses,callback:function(t){e.$set(e.commoditySearch,"uses",t)},expression:"commoditySearch.uses"}},e._l(e.options.uses,(function(t,c){return o("el-checkbox",{key:c,attrs:{name:"type",label:t.id,value:t.name}},[e._v("\n            "+e._s(t.name)+"\n          ")])})),1)],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:0}},[o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{label:e.$t("commodity.hots"),prop:"hots"}},[o("el-switch",{model:{value:e.commoditySearch.hots,callback:function(t){e.$set(e.commoditySearch,"hots",t)},expression:"commoditySearch.hots"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{label:e.$t("commodity.news"),prop:"news"}},[o("el-switch",{model:{value:e.commoditySearch.news,callback:function(t){e.$set(e.commoditySearch,"news",t)},expression:"commoditySearch.news"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{label:"颜色",prop:"colors"}},[o("el-color-picker",{model:{value:e.commoditySearch.colors,callback:function(t){e.$set(e.commoditySearch,"colors",t)},expression:"commoditySearch.colors"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:0,type:"flex",justify:"center"}},[o("el-col",{attrs:{span:6}},[o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.onCommoditySearch(e.currentPage)}}},[e._v(e._s(e.$t("content.search")))])],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{icon:"el-icon-close"},on:{click:e.onCommoditySearchReset}},[e._v(e._s(e.$t("content.clear")))])],1)],1)],1)],1),e._v(" "),o("el-table",{attrs:{data:e.commodity,border:""}},[o("el-table-column",{attrs:{prop:"name['zh-cn']",label:e.$t("commodity.name")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"state",label:e.$t("commodity.state.title")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.states[t.row.state].name)+"\n      ")]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"price['zh-cn']",label:e.$t("commodity.price.title")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.price)+"\n      ")]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"photo",label:e.$t("commodity.photo"),width:"123"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.photos&&t.row.photos.length?o("div",{staticClass:"demo-image__preview"},[o("el-image",{staticStyle:{width:"100px"},attrs:{src:t.row.photos[0],"preview-src-list":t.row.photos}})],1):e._e()]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"width",label:e.$t("commodity.width.title")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.width)+"\n      ")]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"height",label:e.$t("commodity.height.title")},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.height)+"\n      ")]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"colors",label:e.$t("commodity.color.title"),width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row.colors,(function(t,c){return[o("el-tag",{key:t.startColorValue,staticStyle:{"margin-left":"10px"},attrs:{"disable-transitions":"",color:t.startColor,effect:"dark"}},[e._v("\n            "+e._s(t.startColor)+"\n          ")]),e._v(" "),o("el-tag",{key:t.endColorValue,staticStyle:{"margin-left":"10px"},attrs:{"disable-transitions":"",color:t.endColor,effect:"dark"}},[e._v("\n            "+e._s(t.endColor)+"\n          ")])]}))]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"desc['zh-cn']",label:e.$t("commodity.desc"),width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.desc)+"\n      ")]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"createdDate",formatter:e.formatterDate,label:e.$t("content.createdDate"),width:"160"}}),e._v(" "),o("el-table-column",{attrs:{label:e.$t("content.operation"),width:"172"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"mini",icon:"el-icon-edit"},on:{click:function(o){return e.commodityEdit(t.$index,t.row)}}},[e._v(e._s(e.$t("content.edit")))]),e._v(" "),o("el-popover",{attrs:{placement:"top"},model:{value:t.row.visible,callback:function(o){e.$set(t.row,"visible",o)},expression:"scope.row.visible"}},[o("p",[e._v(e._s(e.$t("content.deleteText")))]),e._v(" "),o("div",{staticStyle:{"text-align":"right",margin:"0"}},[o("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.row.visible=!1}}},[e._v(e._s(e.$t("content.cancel")))]),e._v(" "),o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(o){return e.commodityDelete(t.$index,t.row)}}},[e._v(e._s(e.$t("content.define")))])],1),e._v(" "),o("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",icon:"el-icon-delete"},slot:"reference"},[e._v(e._s(e.$t("content.delete")))])],1)]}}])})],1),e._v(" "),o("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{background:"",layout:"prev, pager, next","page-size":e.pageSize,"current-page":e.currentPage,total:e.total},on:{"current-change":e.changeCurrentPage}})],1)}),[],!1,null,"030d7d06",null);t.default=component.exports}}]);