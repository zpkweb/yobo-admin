(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{396:function(e,t,o){"use strict";var n=o(4),r=o(163),c=o(64),l=o(16),m=o(34),f=o(164),d=o(108),h=o(81),$=o(23),y=h("splice"),v=$("splice",{ACCESSORS:!0,0:0,1:2}),x=Math.max,k=Math.min;n({target:"Array",proto:!0,forced:!y||!v},{splice:function(e,t){var o,n,h,$,y,v,j=m(this),_=l(j.length),w=r(e,_),z=arguments.length;if(0===z?o=n=0:1===z?(o=0,n=_-w):(o=z-2,n=k(x(c(t),0),_-w)),_+o-n>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=f(j,n),$=0;$<n;$++)(y=w+$)in j&&d(h,$,j[y]);if(h.length=n,o<n){for($=w;$<_-n;$++)v=$+o,(y=$+n)in j?j[v]=j[y]:delete j[v];for($=_;$>_-n+o;$--)delete j[$-1]}else if(o>n)for($=_-n;$>w;$--)v=$+o-1,(y=$+n-1)in j?j[v]=j[y]:delete j[v];for($=0;$<o;$++)j[$+w]=arguments[$+2];return j.length=_-n+o,h}})},407:function(e,t,o){var content=o(426);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("37a0b8ba",content,!0,{sourceMap:!1})},425:function(e,t,o){"use strict";o(407)},426:function(e,t,o){(t=o(28)(!1)).push([e.i,".avatar-uploader-icon[data-v-84fb80fa]{font-size:28px;color:#8c939d;width:113px;height:100px;line-height:100px;text-align:center}.avatar[data-v-84fb80fa]{width:113px;height:100px;display:block}",""]),e.exports=t},453:function(e,t,o){"use strict";o.r(t);o(46),o(396);var n=o(235),r=(o(15),o(3)),c=o(401),l=o.n(c),m={name:"CommodityOption",watch:{"$route.query":"$fetch"},data:function(){return{lang:["zh-cn","en-us","ja-jp","es-es"],optionType:{category:this.$t("commodity.category"),classification:this.$t("commodity.classification"),material:this.$t("commodity.material"),model:this.$t("commodity.model"),place:this.$t("commodity.place"),ruiwu:this.$t("commodity.ruiwu"),shape:this.$t("commodity.shape"),specification:this.$t("commodity.specification"),style:this.$t("commodity.style"),technique:this.$t("commodity.technique"),theme:this.$t("commodity.theme"),type:this.$t("commodity.type"),use:this.$t("commodity.use")},form:{options:[{img:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],optionsExamples:[{img:"","zh-cn":"其他","en-us":"other","ja-jp":"その他","es-es":"Español"}]}}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/admin/commodity/retrieve/".concat(e.$route.params.type));case 2:o=t.sent,r=[{img:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],o.data&&o.data.length&&r.unshift.apply(r,Object(n.a)(o.data)),e.form.options=r;case 6:case"end":return t.stop()}}),t)})))()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=7;break}return e.next=3,t.$axios.$post("/api/admin/commodity/create/".concat(t.$route.params.type),t.form.options).catch((function(e){t.$message({showClose:!0,message:"".concat(t.optionType[t.$route.params.type],"，").concat(t.$t("content.create")).concat(t.$t("content.fail"),"!"),type:"error"})}));case 3:e.sent.success?t.$message({showClose:!0,message:"".concat(t.optionType[t.$route.params.type],"，").concat(t.$t("content.create")).concat(t.$t("content.success")),type:"success"}):t.$message({showClose:!0,message:"".concat(t.optionType[t.$route.params.type],"，").concat(t.$t("content.create")).concat(t.$t("content.fail"),"!"),type:"error"}),e.next=8;break;case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields(),this.$fetch()},addOption:function(){this.form.options.push({img:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""})},createOption:function(e,t){var o=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("createOptions",e),r=!0,o.$refs.form.validateField(["options."+t+".zh-cn","options."+t+".en-us","options."+t+".ja-jp","options."+t+".es-es"],(function(e){e&&(r=!1)})),!r){n.next=8;break}return n.next=6,o.$axios.$post("/api/admin/commodity/create/".concat(o.$route.params.type),[e]).catch((function(e){o.$message({showClose:!0,message:"".concat(o.typeText).concat(o.$t("content.fail"),"! ").concat(e.response.data.message),type:"error"})}));case 6:(c=n.sent).success?(o.form.options.splice(t,1,c.data[0]),o.message("success","".concat(o.$t("content.create")).concat(o.$t("content.success"),"!"))):o.message("error","".concat(o.$t("content.create")).concat(o.$t("content.fail"),"!").concat(c.message));case 8:case"end":return n.stop()}}),n)})))()},updateOption:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(console.log("updateOption",e),e.id){o.next=4;break}return t.form.options.splice(index,1),o.abrupt("return");case 4:return o.next=6,t.$axios.$post("/api/admin/commodity/update/".concat(t.$route.params.type),e).catch((function(e){t.message("error","".concat(e.response.data.message))}));case 6:o.sent.success?t.message("success","".concat(t.$t("content.update")).concat(t.$t("content.success"),"!")):t.message("error","".concat(t.$t("content.update")).concat(t.$t("content.fail"),"!"));case 8:case"end":return o.stop()}}),o)})))()},removeOption:function(e,t){var o=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.id){n.next=3;break}return o.form.options.splice(t,1),n.abrupt("return");case 3:return n.next=5,o.$axios.$post("/api/admin/commodity/delete/".concat(o.$route.params.type),e).catch((function(e){o.message("error","".concat(e.response.data.message))}));case 5:n.sent.success?(o.form.options.splice(t,1),o.message("success","".concat(o.$t("content.delete")).concat(o.$t("content.success"),"!"))):o.message("error","".concat(o.$t("content.delete")).concat(o.$t("content.fail"),"!"));case 7:case"end":return n.stop()}}),n)})))()},message:function(e,t){this.$message({showClose:!0,message:"".concat(t),type:e})},onMock:function(e,t){var o=["零","一","二","三","四","五","六","七","八","九","十"],n=["zero","one","two","three","four","five","six","seven","eight","nine","ten"],r=["ゼロ","いち","に","さん","し","ご","ろく","しち","はち","きゅう","じゅう"],c=["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix"],m={img:"","zh-cn":"".concat(o[l.a.mock("@integer(0, 9)")]," ").concat(o[l.a.mock("@integer(0, 9)")]," ").concat(o[l.a.mock("@integer(0, 9)")]),"en-us":"".concat(n[l.a.mock("@integer(0, 9)")]," ").concat(n[l.a.mock("@integer(0, 9)")]," ").concat(n[l.a.mock("@integer(0, 9)")]),"ja-jp":"".concat(r[l.a.mock("@integer(0, 9)")]," ").concat(r[l.a.mock("@integer(0, 9)")]," ").concat(r[l.a.mock("@integer(0, 9)")]),"es-es":"".concat(c[l.a.mock("@integer(0, 9)")]," ").concat(c[l.a.mock("@integer(0, 9)")]," ").concat(c[l.a.mock("@integer(0, 9)")])};this.form.options.splice(t,1,m)},handleSuccess:function(e,t,o){console.log("handleAvatarSuccess",e,t,o),this.form.options[e.data.index].img=e.data.src,console.log(this.form)},beforeUpload:function(e,t){console.log("beforeAvatarUpload",e,t);var o=e.size/1024/1024<2;return o||this.$message.error("上传的图片大小不能超过 2MB!"),o}}},f=(o(425),o(14)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"100px"}},[e._l(e.form.optionsExamples,(function(t,n){return o("el-form-item",{key:n,attrs:{label:""+e.$t("content.create")+e.optionType[e.$route.params.type]+e.$t("content.example")}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:4}},[o("el-input",{attrs:{disabled:!0},model:{value:t["zh-cn"],callback:function(o){e.$set(t,"zh-cn",o)},expression:"item['zh-cn']"}})],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-input",{attrs:{disabled:!0},model:{value:t["en-us"],callback:function(o){e.$set(t,"en-us",o)},expression:"item['en-us']"}})],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-input",{attrs:{disabled:!0},model:{value:t["ja-jp"],callback:function(o){e.$set(t,"ja-jp",o)},expression:"item['ja-jp']"}})],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-input",{attrs:{disabled:!0},model:{value:t["es-es"],callback:function(o){e.$set(t,"es-es",o)},expression:"item['es-es']"}})],1),e._v(" "),o("el-col",{attrs:{span:2}},[o("el-button",{attrs:{type:"primary"},on:{click:e.addOption}},[e._v("\n          "+e._s(e.$t("content.add"))+"\n        ")])],1),e._v(" "),o("el-col",{attrs:{span:2,offset:2}},[o("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v(e._s(e.$t("content.clear")))])],1)],1)],1)})),e._v(" "),e._l(e.form.options,(function(t,n){return o("el-form-item",{key:n},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{prop:"options."+n+".img"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$config.origin+"/api/upload/images",data:{type:e.optionType[e.$route.params.type],index:n},"show-file-list":!1,"on-success":e.handleSuccess,"before-upload":e.beforeUpload},model:{value:t.img,callback:function(o){e.$set(t,"img",o)},expression:"item.img"}},[t.img?o("img",{staticClass:"avatar",attrs:{src:t.img}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n              \b艺术品"+e._s(e.optionType[e.$route.params.type])+"图片，请上传 210X185\n              比例的图片，且不超过2M\n            ")])])],1)],1),e._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{prop:"options."+n+".zh-cn",rules:{required:!0,message:""+e.$t("lang.zh")+e.optionType[e.$route.params.type]+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.zh")})},model:{value:t["zh-cn"],callback:function(o){e.$set(t,"zh-cn",o)},expression:"item['zh-cn']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{prop:"options."+n+".en-us",rules:{required:!0,message:""+e.$t("lang.en")+e.optionType[e.$route.params.type]+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.en")})},model:{value:t["en-us"],callback:function(o){e.$set(t,"en-us",o)},expression:"item['en-us']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{prop:"options."+n+".ja-jp",rules:{required:!0,message:""+e.$t("lang.ja")+e.optionType[e.$route.params.type]+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.ja")})},model:{value:t["ja-jp"],callback:function(o){e.$set(t,"ja-jp",o)},expression:"item['ja-jp']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{prop:"options."+n+".es-es",rules:{required:!0,message:""+e.$t("lang.es")+e.optionType[e.$route.params.type]+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.es")})},model:{value:t["es-es"],callback:function(o){e.$set(t,"es-es",o)},expression:"item['es-es']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:5}},[t.id?o("el-button",{on:{click:function(o){return o.preventDefault(),e.updateOption(t,n)}}},[e._v(e._s(e.$t("content.update")))]):o("el-button",{on:{click:function(o){return o.preventDefault(),e.createOption(t,n)}}},[e._v(e._s(e.$t("content.create")))]),e._v(" "),o("el-button",{on:{click:function(o){return e.onMock(t,n)}}},[e._v("\n          "+e._s(e.$t("content.fill"))+"\n        ")]),e._v(" "),o("el-button",{on:{click:function(o){return o.preventDefault(),e.removeOption(t,n)}}},[e._v(e._s(e.$t("content.delete")))])],1)],1)],1)}))],2)}),[],!1,null,"84fb80fa",null);t.default=component.exports}}]);