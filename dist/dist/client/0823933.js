(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{416:function(e,r,t){var content=t(447);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(29).default)("10ab26c0",content,!0,{sourceMap:!1})},446:function(e,r,t){"use strict";t(416)},447:function(e,r,t){(r=t(28)(!1)).push([e.i,".user-create[data-v-0124f7c0]{width:100%;display:flex;align-items:center;justify-content:center}.user-create-form[data-v-0124f7c0]{width:90%}",""]),e.exports=r},472:function(e,r,t){"use strict";t.r(r);t(46),t(65),t(19);var l=t(12),n=(t(15),t(3)),o=t(401),c=t.n(o);function m(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(r){Object(l.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var d={watchQuery:["sellerId"],data:function(){return{type:"create",typeText:this.$t("content.apply"),isCreate:!0,sellerId:"",userCreate:{firstname:"",lastname:"",email:"",phone:"",password:"",country:"",language:"",findUs:"",isFullTime:"",onlineSell:"",sold:"",channel:"",gallery:"",medium:"",galleryInfo:"",recommend:"",prize:"",website:"",profile:""},rules:{firstname:[{required:!0,message:this.$t("form.placeholder",{msg:this.$t("user.firstName")}),trigger:"blur"}],lastname:[{required:!0,message:this.$t("form.placeholder",{msg:this.$t("user.lastName")}),trigger:"blur"}],email:[{required:!0,message:this.$t("form.placeholder",{msg:this.$t("user.email")}),trigger:"blur"}],password:[{required:!0,message:this.$t("form.placeholder",{msg:this.$t("user.password")}),trigger:"blur"}]}}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.$route.query||!e.$route.query.sellerId){r.next=6;break}return e.sellerId=e.$route.query.sellerId,r.next=4,e.$axios.$get("/api/admin/seller",{params:{sellerId:e.sellerId}});case 4:(t=r.sent).success&&(e.userCreate=Object.assign(e.userCreate,f(f(f({},t.data),t.data.seller),t.data.sellerMetadata)),e.type="edit",e.typeText=e.$t("content.update"),e.isCreate=!1,e.rules.password[0].required=!1);case 6:case"end":return r.stop()}}),r)})))()},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(l){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l){t.next=13;break}if(!r.isCreate){t.next=7;break}return t.next=4,r.$axios.$post("/api/user/seller/apply",r.userCreate);case 4:data=t.sent,t.next=10;break;case 7:return t.next=9,r.$axios.$post("/api/admin/seller/update",r.userCreate);case 9:data=t.sent;case 10:data.success?(r.$message({showClose:!0,message:"".concat(r.userCreate.firstname).concat(r.userCreate.lastname,"，").concat(r.typeText).concat(r.$t("content.success")),type:"success"}),r.isCreate&&r.$refs[e].resetFields()):r.$message({showClose:!0,message:"".concat(r.typeText).concat(r.$t("content.fail"),"!").concat(data.message),type:"error"}),t.next=14;break;case 13:return t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},onMock:function(){var e=this;this.userCreate={firstname:c.a.mock("@cfirst"),lastname:c.a.mock("@clast"),email:c.a.mock("@email"),phone:"",password:"123",country:c.a.mock("@county(true)"),language:this.$i18n.locales.filter((function(i){return i.code==e.$i18n.locale}))[0].name,profile:c.a.mock("@cparagraph"),isFullTime:"",onlineSell:"",sold:"",channel:"",gallery:"",medium:"",galleryInfo:"",recommend:"",prize:"",website:"",findUs:""}}}},$=(t(446),t(14)),component=Object($.a)(d,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"user-create"},[t("el-form",{ref:"userCreate",staticClass:"user-create-form",attrs:{model:e.userCreate,rules:e.rules,"label-width":"100px"}},[t("el-form-item",[e.isCreate?t("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(r){return e.submitForm("userCreate")}}},[e._v("\n        "+e._s(e.$t("content.apply"))+"\n      ")]):t("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:function(r){return e.submitForm("userCreate")}}},[e._v("\n        "+e._s(e.$t("content.update"))+"\n      ")]),e._v(" "),t("el-button",{attrs:{icon:"el-icon-check"},on:{click:e.onMock}},[e._v("\n        "+e._s(e.$t("content.fill"))+"\n      ")]),e._v(" "),t("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(r){return e.resetForm("userCreate")}}},[e._v(e._s(e.$t("content.clear")))])],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("user.firstName"),prop:"firstname"}},[t("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.firstName")})},model:{value:e.userCreate.firstname,callback:function(r){e.$set(e.userCreate,"firstname",r)},expression:"userCreate.firstname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("user.lastName"),prop:"lastname"}},[t("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.lastName")})},model:{value:e.userCreate.lastname,callback:function(r){e.$set(e.userCreate,"lastname",r)},expression:"userCreate.lastname"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("user.email"),prop:"email"}},[t("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.email")})},model:{value:e.userCreate.email,callback:function(r){e.$set(e.userCreate,"email",r)},expression:"userCreate.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("user.phone"),prop:"phone"}},[t("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.phone")})},model:{value:e.userCreate.phone,callback:function(r){e.$set(e.userCreate,"phone",r)},expression:"userCreate.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("user.password"),prop:"password"}},[t("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.password")})},model:{value:e.userCreate.password,callback:function(r){e.$set(e.userCreate,"password",r)},expression:"userCreate.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("user.gender"),prop:"gender"}},[t("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.gender")})},model:{value:e.userCreate.gender,callback:function(r){e.$set(e.userCreate,"gender",r)},expression:"userCreate.gender"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("user.country"),prop:"country"}},[t("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.country")})},model:{value:e.userCreate.country,callback:function(r){e.$set(e.userCreate,"country",r)},expression:"userCreate.country"}})],1),e._v(" "),t("el-form-item",{attrs:{label:e.$t("user.language"),prop:"language"}},[t("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.language")})},model:{value:e.userCreate.language,callback:function(r){e.$set(e.userCreate,"language",r)},expression:"userCreate.language"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"profile"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("user.profile")})},model:{value:e.userCreate.profile,callback:function(r){e.$set(e.userCreate,"profile",r)},expression:"userCreate.profile"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"isFullTime"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.isFullTime")},model:{value:e.userCreate.isFullTime,callback:function(r){e.$set(e.userCreate,"isFullTime",r)},expression:"userCreate.isFullTime"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"onlineSell"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.onlineSell")},model:{value:e.userCreate.onlineSell,callback:function(r){e.$set(e.userCreate,"onlineSell",r)},expression:"userCreate.onlineSell"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"sold"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.sold")},model:{value:e.userCreate.sold,callback:function(r){e.$set(e.userCreate,"sold",r)},expression:"userCreate.sold"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"channel"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.channel")},model:{value:e.userCreate.channel,callback:function(r){e.$set(e.userCreate,"channel",r)},expression:"userCreate.channel"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"gallery"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.gallery")},model:{value:e.userCreate.gallery,callback:function(r){e.$set(e.userCreate,"gallery",r)},expression:"userCreate.gallery"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"medium"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.medium")},model:{value:e.userCreate.medium,callback:function(r){e.$set(e.userCreate,"medium",r)},expression:"userCreate.medium"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"galleryInfo"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.galleryInfo")},model:{value:e.userCreate.galleryInfo,callback:function(r){e.$set(e.userCreate,"galleryInfo",r)},expression:"userCreate.galleryInfo"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"recommend"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.recommend")},model:{value:e.userCreate.recommend,callback:function(r){e.$set(e.userCreate,"recommend",r)},expression:"userCreate.recommend"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"prize"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.prize")},model:{value:e.userCreate.prize,callback:function(r){e.$set(e.userCreate,"prize",r)},expression:"userCreate.prize"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"website"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.website")},model:{value:e.userCreate.website,callback:function(r){e.$set(e.userCreate,"website",r)},expression:"userCreate.website"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"findUs"}},[t("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.findUs")},model:{value:e.userCreate.findUs,callback:function(r){e.$set(e.userCreate,"findUs",r)},expression:"userCreate.findUs"}})],1)],1)],1)}),[],!1,null,"0124f7c0",null);r.default=component.exports}}]);