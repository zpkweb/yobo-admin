(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{396:function(e,t,l){"use strict";var r=l(4),n=l(163),o=l(64),c=l(16),d=l(34),m=l(164),f=l(108),h=l(81),v=l(23),$=h("splice"),D=v("splice",{ACCESSORS:!0,0:0,1:2}),_=Math.max,y=Math.min;r({target:"Array",proto:!0,forced:!$||!D},{splice:function(e,t){var l,r,h,v,$,D,x=d(this),k=c(x.length),w=n(e,k),S=arguments.length;if(0===S?l=r=0:1===S?(l=0,r=k-w):(l=S-2,r=y(_(o(t),0),k-w)),k+l-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=m(x,r),v=0;v<r;v++)($=w+v)in x&&f(h,v,x[$]);if(h.length=r,l<r){for(v=w;v<k-r;v++)D=v+l,($=v+r)in x?x[D]=x[$]:delete x[D];for(v=k;v>k-r+l;v--)delete x[v-1]}else if(l>r)for(v=k-r;v>w;v--)D=v+l-1,($=v+r-1)in x?x[D]=x[$]:delete x[D];for(v=0;v<l;v++)x[v+w]=arguments[v+2];return x.length=k-r+l,h}})},413:function(e,t,l){var content=l(441);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(29).default)("d39ca57c",content,!0,{sourceMap:!1})},440:function(e,t,l){"use strict";l(413)},441:function(e,t,l){(t=l(28)(!1)).push([e.i,".button-new-tag[data-v-9e7c68f0],.el-tag+.el-tag[data-v-9e7c68f0]{margin-left:10px}.button-new-tag[data-v-9e7c68f0]{height:32px;line-height:30px;padding-top:0;padding-bottom:0}.input-new-tag[data-v-9e7c68f0]{width:90px;margin-left:10px;vertical-align:bottom}.seller-banner-uploader-icon[data-v-9e7c68f0]{font-size:28px;color:#8c939d;width:239px;height:100px;line-height:100px;text-align:center}.seller-banner[data-v-9e7c68f0]{width:239px;height:100px;display:block}",""]),e.exports=t},467:function(e,t,l){"use strict";l.r(t);l(46),l(244),l(396),l(19);var r=l(12),n=(l(15),l(3)),o=l(401),c=l.n(o);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={watchQuery:["sellerId"],data:function(){return{dialogVisible:!1,userSearch:{name:"",email:"",phone:"",identity:""},userPagination:{currentPage:1,pageSize:5,total:0},user:[],isSubmit:!1,type:"create",inputVisible:!1,inputValue:"",typeText:this.$t("content.create"),isCreate:!0,sellerId:"",stateOptions:[{value:0,label:this.$t("content.audit")},{value:1,label:this.$t("content.agree")},{value:2,label:this.$t("content.reject")},{value:3,label:this.$t("content.disable")},{value:4,label:this.$t("content.logoff")}],typeOptions:[{value:0,label:this.$t("user.seller.typeOptions.painter")},{value:1,label:this.$t("user.seller.typeOptions.sculptor")}],sellerData:{user:{userId:"",avatar:"",name:"",email:"",phone:""},seller:{state:1,type:0,choice:!1,banner:"",tags:[],firstname:"",lastname:"",gender:"",country:""},metadata:{language:"",findUs:"",isFullTime:"",onlineSell:"",sold:"",channel:"",gallery:"",medium:"",galleryInfo:"",recommend:"",prize:"",website:"",profile:""},studio:{banner:"",name:"",introduce:"",video:"",photo:""},resume:{prize:[],individua:[],organizing:[],publish:[]}},defaultResume:{prize:{year:"",resume:""},individua:{year:"",resume:""},organizing:{year:"",resume:""},publish:{year:"",resume:""}},activeCollapses:["0","1","2","3","4"],tabsResume:[{name:"prize",label:"奖项"},{name:"individua",label:"个展"},{name:"organizing",label:"组展"},{name:"publish",label:"发表"}],tabsActive:"prize"}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.query||!e.$route.query.sellerId){t.next=6;break}return e.sellerId=e.$route.query.sellerId,t.next=4,e.$axios.$get("/api/admin/seller/edit",{params:{sellerId:e.sellerId}});case 4:(l=t.sent).success&&(e.sellerData=Object.assign(e.sellerData,l.data),e.type="edit",e.typeText=e.$t("content.update"),e.isCreate=!1);case 6:case"end":return t.stop()}}),t)})))()},created:function(){},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(l){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=21;break}if(t.isSubmit=!0,e.prev=2,!t.isCreate){e.next=9;break}return e.next=6,t.$axios.$post("/api/admin/seller/create",m({},t.sellerData)).catch((function(e){t.isSubmit=!1}));case 6:data=e.sent,e.next=12;break;case 9:return e.next=11,t.$axios.$post("/api/admin/seller/update",m({},t.sellerData)).catch((function(e){t.isSubmit=!1}));case 11:data=e.sent;case 12:t.isSubmit=!1,data.success?(t.$message({showClose:!0,message:"".concat(t.sellerData.seller.firstname).concat(t.sellerData.seller.lastname,"，").concat(t.typeText).concat(t.$t("content.success")),type:"success"}),t.isCreate&&(t.isCreate=!1,t.$router.push({query:{sellerId:data.data.sellerId}}))):t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),", ").concat(data.message),type:"error"}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail")),type:"error"});case 19:e.next=22;break;case 21:return e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t){return e.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},selectUserBtn:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.userPagination.currentPage=1,t.next=3,e.userSearchSubmit(1);case 3:e.dialogVisible=!0;case 4:case"end":return t.stop()}}),t)})))()},userSearchSubmit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function l(){var r;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,t.$axios.$get("/api/admin/user/search",{params:{identity:t.userSearch.identity,name:t.userSearch.name,email:t.userSearch.email,phone:t.userSearch.phone,pageSize:t.userPagination.pageSize,currentPage:e}});case 2:r=l.sent,t.userPagination.total=r.data.total,t.user=r.data.list;case 5:case"end":return l.stop()}}),l)})))()},changeUserCurrentPage:function(e){this.userSearchSubmit(e)},formatterDate:function(e,t,l,r){return this.$moment(l).format("YYYY-MM-DD HH:mm:ss")},onMock:function(){var e=c.a.mock("@cfirst"),t=c.a.mock("@cfirst");this.sellerData={user:{userId:"",avatar:"",name:"",email:"",phone:"",password:""},seller:{state:1,type:0,choice:!1,banner:"",tags:[],firstname:e,lastname:t,gender:"",country:c.a.mock("@province")},metadata:{language:"",findUs:"",isFullTime:"",onlineSell:"",sold:"",channel:"",gallery:"",medium:"",galleryInfo:"",recommend:"",prize:"",website:"",profile:""},studio:{banner:"",name:"",introduce:"",video:"",photo:""},resume:{prize:[],individua:[],organizing:[],publish:[]}}},handleUserAvatarSuccess:function(e,t){this.sellerData.user.avatar=e.data.src},handleSellerBannerSuccess:function(e,t){this.sellerData.seller.banner=e.data.src},handleStudioBannerSuccess:function(e,t){this.sellerData.studio.banner=e.data.src},handleStudioPhotoSuccess:function(e,t){this.sellerData.studio.photo=e.data.src},handleStudioVideoPhotoSuccess:function(e,t){this.sellerData.studio.videoPhoto=e.data.src},beforeUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传的图片大小不能超过 2MB!"),t},handleClose:function(e){this.sellerData.tags.splice(this.sellerData.tags.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var e=this.inputValue;e&&this.sellerData.seller.tags.push(e),this.inputVisible=!1,this.inputValue=""},handleClick:function(e,t){},resumeCreate:function(e,t){var l=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l.sellerData.resume[e].push({year:l.defaultResume[e].year,resume:l.defaultResume[e].resume}),l.defaultResume[e]={year:"",resume:""},t.abrupt("return");case 3:case"end":return t.stop()}}),t)})))()},resumeDelete:function(e,t){var l=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l.sellerData.resume[e].splice(t,1),r.abrupt("return");case 2:case"end":return r.stop()}}),r)})))()}}},h=(l(440),l(14)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"user-create"},[l("el-form",{ref:"sellerData",staticClass:"user-create-form",attrs:{model:e.sellerData,"label-width":"90px"}},[l("el-container",[l("el-header",[e.isCreate?l("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline",loading:e.isSubmit},on:{click:function(t){return e.submitForm("sellerData")}}},[e._v("\n            "+e._s(e.$t("content.create"))+"\n          ")]):l("el-button",{attrs:{type:"primary",icon:"el-icon-check",loading:e.isSubmit},on:{click:function(t){return e.submitForm("sellerData")}}},[e._v("\n            "+e._s(e.$t("content.update"))+"\n          ")]),e._v(" "),l("el-button",{attrs:{icon:"el-icon-check"},on:{click:e.onMock}},[e._v("\n            "+e._s(e.$t("content.fill"))+"\n          ")]),e._v(" "),l("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(t){return e.resetForm("sellerData")}}},[e._v(e._s(e.$t("content.clear")))])],1)],1),e._v(" "),l("el-collapse",{model:{value:e.activeCollapses,callback:function(t){e.activeCollapses=t},expression:"activeCollapses"}},[l("el-collapse-item",{attrs:{title:"关联用户",name:"0"}},[l("el-form-item",{attrs:{prop:"userId"}},[l("el-button",{attrs:{type:"primary"},on:{click:e.selectUserBtn}},[e._v("选择用户")])],1),e._v(" "),e.sellerData.user.name||e.sellerData.user.email?[l("el-form-item",{attrs:{label:e.$t("user.avatar"),prop:"avatar"}},[e.sellerData.user.avatar?l("img",{staticClass:"avatar",attrs:{src:e.sellerData.user.avatar}}):e._e()]),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.name"),prop:"name"}},[l("el-input",{attrs:{disabled:""},model:{value:e.sellerData.user.name,callback:function(t){e.$set(e.sellerData.user,"name",t)},expression:"sellerData.user.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.email"),prop:"email"}},[l("el-input",{attrs:{disabled:""},model:{value:e.sellerData.user.email,callback:function(t){e.$set(e.sellerData.user,"email",t)},expression:"sellerData.user.email"}})],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.phone"),prop:"phone"}},[l("el-input",{attrs:{disabled:""},model:{value:e.sellerData.user.phone,callback:function(t){e.$set(e.sellerData.user,"phone",t)},expression:"sellerData.user.phone"}})],1)]:e._e()],2),e._v(" "),l("el-collapse-item",{attrs:{title:"艺术家信息",name:"1"}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:e.$t("user.seller.state"),prop:"identity"}},[l("el-radio-group",{model:{value:e.sellerData.seller.state,callback:function(t){e.$set(e.sellerData.seller,"state",t)},expression:"sellerData.seller.state"}},e._l(e.stateOptions,(function(t){return l("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:e.$t("user.seller.type"),prop:"identity"}},[l("el-radio-group",{model:{value:e.sellerData.seller.type,callback:function(t){e.$set(e.sellerData.seller,"type",t)},expression:"sellerData.seller.type"}},e._l(e.typeOptions,(function(t){return l("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{attrs:{label:e.$t("user.seller.choice"),prop:"choice"}},[l("el-switch",{model:{value:e.sellerData.seller.choice,callback:function(t){e.$set(e.sellerData.seller,"choice",t)},expression:"sellerData.seller.choice"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.banner"),prop:"avatar"}},[l("el-upload",{staticClass:"banner-uploader",attrs:{action:e.$config.origin+"/api/upload/images",data:{type:"sellerBanner"},"show-file-list":!1,"on-success":e.handleSellerBannerSuccess,"before-upload":e.beforeUpload},model:{value:e.sellerData.seller.banner,callback:function(t){e.$set(e.sellerData.seller,"banner",t)},expression:"sellerData.seller.banner"}},[e.sellerData.seller.banner?l("img",{staticClass:"seller-banner",attrs:{src:e.sellerData.seller.banner}}):l("i",{staticClass:"el-icon-plus seller-banner-uploader-icon"}),e._v(" "),l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n                艺术家背景图片，请上传 (大于1220)X510 比例的图片，且不超过2M\n              ")])])],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.label"),prop:"tags"}},[e._l(e.sellerData.seller.tags,(function(t){return l("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(l){return e.handleClose(t)}}},[e._v("\n              "+e._s(t)+"\n            ")])})),e._v(" "),e.inputVisible?l("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):l("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ New Tag")])],2),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.firstName"),prop:"firstname"}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.firstName")})},model:{value:e.sellerData.seller.firstname,callback:function(t){e.$set(e.sellerData.seller,"firstname",t)},expression:"sellerData.seller.firstname"}})],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.lastName"),prop:"lastname"}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.lastName")})},model:{value:e.sellerData.seller.lastname,callback:function(t){e.$set(e.sellerData.seller,"lastname",t)},expression:"sellerData.seller.lastname"}})],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.gender"),prop:"gender"}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.gender")})},model:{value:e.sellerData.seller.gender,callback:function(t){e.$set(e.sellerData.seller,"gender",t)},expression:"sellerData.seller.gender"}})],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.country"),prop:"country"}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.country")})},model:{value:e.sellerData.seller.country,callback:function(t){e.$set(e.sellerData.seller,"country",t)},expression:"sellerData.seller.country"}})],1)],1),e._v(" "),l("el-collapse-item",{attrs:{title:"艺术家其他信息",name:"2"}},[l("el-form-item",{attrs:{prop:"language"}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.metadata.language")})},model:{value:e.sellerData.metadata.language,callback:function(t){e.$set(e.sellerData.metadata,"language",t)},expression:"sellerData.metadata.language"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"profile"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.metadata.profile")})},model:{value:e.sellerData.metadata.profile,callback:function(t){e.$set(e.sellerData.metadata,"profile",t)},expression:"sellerData.metadata.profile"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"isFullTime"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.isFullTime")},model:{value:e.sellerData.metadata.isFullTime,callback:function(t){e.$set(e.sellerData.metadata,"isFullTime",t)},expression:"sellerData.metadata.isFullTime"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"onlineSell"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.onlineSell")},model:{value:e.sellerData.metadata.onlineSell,callback:function(t){e.$set(e.sellerData.metadata,"onlineSell",t)},expression:"sellerData.metadata.onlineSell"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"sold"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.sold")},model:{value:e.sellerData.metadata.sold,callback:function(t){e.$set(e.sellerData.metadata,"sold",t)},expression:"sellerData.metadata.sold"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"channel"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.channel")},model:{value:e.sellerData.metadata.channel,callback:function(t){e.$set(e.sellerData.metadata,"channel",t)},expression:"sellerData.metadata.channel"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"gallery"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.gallery")},model:{value:e.sellerData.metadata.gallery,callback:function(t){e.$set(e.sellerData.metadata,"gallery",t)},expression:"sellerData.metadata.gallery"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"medium"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.medium")},model:{value:e.sellerData.metadata.medium,callback:function(t){e.$set(e.sellerData.metadata,"medium",t)},expression:"sellerData.metadata.medium"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"galleryInfo"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.galleryInfo")},model:{value:e.sellerData.metadata.galleryInfo,callback:function(t){e.$set(e.sellerData.metadata,"galleryInfo",t)},expression:"sellerData.metadata.galleryInfo"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"recommend"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.recommend")},model:{value:e.sellerData.metadata.recommend,callback:function(t){e.$set(e.sellerData.metadata,"recommend",t)},expression:"sellerData.metadata.recommend"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"prize"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.prize")},model:{value:e.sellerData.metadata.prize,callback:function(t){e.$set(e.sellerData.metadata,"prize",t)},expression:"sellerData.metadata.prize"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"website"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.website")},model:{value:e.sellerData.metadata.website,callback:function(t){e.$set(e.sellerData.metadata,"website",t)},expression:"sellerData.metadata.website"}})],1),e._v(" "),l("el-form-item",{attrs:{prop:"findUs"}},[l("el-input",{attrs:{type:"textarea",placeholder:e.$t("user.seller.metadata.findUs")},model:{value:e.sellerData.metadata.findUs,callback:function(t){e.$set(e.sellerData.metadata,"findUs",t)},expression:"sellerData.metadata.findUs"}})],1)],1),e._v(" "),l("el-collapse-item",{attrs:{title:"艺术家工作室",name:"3"}},[l("el-form-item",{attrs:{label:e.$t("user.seller.studio.banner"),prop:"avatar"}},[l("el-upload",{staticClass:"banner-uploader",attrs:{action:e.$config.origin+"/api/upload/images",data:{type:"sellerStudioBanner"},"show-file-list":!1,"on-success":e.handleStudioBannerSuccess,"before-upload":e.beforeUpload},model:{value:e.sellerData.studio.banner,callback:function(t){e.$set(e.sellerData.studio,"banner",t)},expression:"sellerData.studio.banner"}},[e.sellerData.studio&&e.sellerData.studio.banner?l("img",{staticClass:"seller-banner",attrs:{src:e.sellerData.studio.banner}}):l("i",{staticClass:"el-icon-plus seller-banner-uploader-icon"}),e._v(" "),l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n                工作室背景图片，请上传 (大于1220)X510 比例的图片，且不超过2M\n              ")])])],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.studio.name"),prop:"studio.name"}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.studio.name")})},model:{value:e.sellerData.studio.name,callback:function(t){e.$set(e.sellerData.studio,"name",t)},expression:"sellerData.studio.name"}})],1),e._v(" "),l("p",{staticStyle:{color:"red"}},[e._v("以下内容显示规则：ccId + siteId + 封面图 > 视频链接 > 图片 > 文字 ")]),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.studio.ccId"),prop:"studio.ccId"}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.studio.ccId")})},model:{value:e.sellerData.studio.ccId,callback:function(t){e.$set(e.sellerData.studio,"ccId",t)},expression:"sellerData.studio.ccId"}}),e._v(" "),l("div",{staticClass:"el-upload__tip"},[e._v("\n              ccId  示例：61AA76B5334118229C33DC5901307461\n            ")])],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.studio.siteId"),prop:"studio.siteId"}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.studio.siteId")})},model:{value:e.sellerData.studio.siteId,callback:function(t){e.$set(e.sellerData.studio,"siteId",t)},expression:"sellerData.studio.siteId"}}),e._v(" "),l("div",{staticClass:"el-upload__tip"},[e._v("\n              siteId  E5DD260925A6084B\n            ")])],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.studio.videoPhoto"),prop:"studio.videoPhoto"}},[l("el-upload",{staticClass:"banner-uploader",attrs:{action:e.$config.origin+"/api/upload/images",data:{type:"sellerStudioVideoImg"},"show-file-list":!1,"on-success":e.handleStudioVideoPhotoSuccess,"before-upload":e.beforeUpload},model:{value:e.sellerData.studio.videoPhoto,callback:function(t){e.$set(e.sellerData.studio,"videoPhoto",t)},expression:"sellerData.studio.videoPhoto"}},[e.sellerData.studio&&e.sellerData.studio.videoPhoto?l("img",{staticClass:"seller-banner",attrs:{src:e.sellerData.studio.videoPhoto}}):l("i",{staticClass:"el-icon-plus seller-banner-uploader-icon"}),e._v(" "),l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n                视频封面图片，请上传 600X250 比例的图片，且不超过2M\n              ")])])],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.studio.video"),prop:"studio.video"}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.studio.video")})},model:{value:e.sellerData.studio.video,callback:function(t){e.$set(e.sellerData.studio,"video",t)},expression:"sellerData.studio.video"}}),e._v(" "),l("div",{staticClass:"el-upload__tip"},[e._v("\n              工作室视频，暂时支持http格式的视频。例如：http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4\n            ")])],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.studio.photo"),prop:"studio.photo"}},[l("el-upload",{staticClass:"banner-uploader",attrs:{action:e.$config.origin+"/api/upload/images",data:{type:"sellerStudioPhoto"},"show-file-list":!1,"on-success":e.handleStudioPhotoSuccess,"before-upload":e.beforeUpload},model:{value:e.sellerData.studio.photo,callback:function(t){e.$set(e.sellerData.studio,"photo",t)},expression:"sellerData.studio.photo"}},[e.sellerData.studio&&e.sellerData.studio.photo?l("img",{staticClass:"seller-banner",attrs:{src:e.sellerData.studio.photo}}):l("i",{staticClass:"el-icon-plus seller-banner-uploader-icon"}),e._v(" "),l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n                工作室图片，请上传 600X250 比例的图片，且不超过2M\n              ")])])],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.seller.studio.introduce"),prop:"studio.introduce"}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.studio.introduce")})},model:{value:e.sellerData.studio.introduce,callback:function(t){e.$set(e.sellerData.studio,"introduce",t)},expression:"sellerData.studio.introduce"}})],1)],1),e._v(" "),l("el-collapse-item",{attrs:{title:"艺术家履历",name:"4"}},[l("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tabsActive,callback:function(t){e.tabsActive=t},expression:"tabsActive"}},e._l(e.tabsResume,(function(t){return l("el-tab-pane",{key:t.name,attrs:{label:t.label,name:t.name}},[e._l(e.sellerData.resume[t.name],(function(r,n){return l("el-row",{key:n,attrs:{gutter:20}},[l("el-col",{attrs:{span:4}},[l("el-button",{on:{click:function(l){return e.resumeDelete(t.name,r)}}},[e._v(e._s(e.$t("content.delete"))+e._s(t.label))])],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-input",{attrs:{placeholder:"请输入"+t.label+"年份"},model:{value:r.year,callback:function(t){e.$set(r,"year",t)},expression:"item.year"}})],1),e._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{type:"textarea",placeholder:"请输入"+t.label+"事件"},model:{value:r.resume,callback:function(t){e.$set(r,"resume",t)},expression:"item.resume"}})],1)],1)})),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:4}},[l("el-button",{on:{click:function(l){return e.resumeCreate(t.name)}}},[e._v(e._s(e.$t("content.create"))+e._s(t.label))])],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-input",{attrs:{placeholder:"请输入"+t.label+"年份"},model:{value:e.defaultResume[t.name].year,callback:function(l){e.$set(e.defaultResume[t.name],"year",l)},expression:"defaultResume[tabItem.name].year"}})],1),e._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{type:"textarea",placeholder:"请输入"+t.label+"事件"},model:{value:e.defaultResume[t.name].resume,callback:function(l){e.$set(e.defaultResume[t.name],"resume",l)},expression:"defaultResume[tabItem.name].resume"}})],1)],1)],2)})),1)],1)],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"选择用户",visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("el-form",{staticClass:"user-search",attrs:{inline:!0,model:e.userSearch}},[l("el-form-item",{attrs:{label:e.$t("user.name")}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.name")}),clearable:""},model:{value:e.userSearch.name,callback:function(t){e.$set(e.userSearch,"name",t)},expression:"userSearch.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.email")}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.email")}),clearable:""},model:{value:e.userSearch.email,callback:function(t){e.$set(e.userSearch,"email",t)},expression:"userSearch.email"}})],1),e._v(" "),l("el-form-item",{attrs:{label:e.$t("user.phone")}},[l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.phone")}),clearable:""},model:{value:e.userSearch.phone,callback:function(t){e.$set(e.userSearch,"phone",t)},expression:"userSearch.phone"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.userSearchSubmit(e.userPagination.currentPage)}}},[e._v(e._s(e.$t("content.search")))])],1)],1),e._v(" "),l("el-table",{attrs:{data:e.user,border:""}},[l("el-table-column",{attrs:{prop:"userId",label:e.$t("user.userId")},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isEdit?l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.userId")}),clearable:""},model:{value:t.row.userId,callback:function(l){e.$set(t.row,"userId",l)},expression:"scope.row.userId"}}):l("span",[e._v("\n            "+e._s(t.row.userId)+"\n          ")])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"avatar",label:e.$t("user.avatar"),width:"122"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.avatar?l("img",{staticClass:"image",attrs:{src:t.row.avatar,width:"100px",height:"100px"}}):e._e()]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:e.$t("user.name")},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isEdit?l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.name")}),clearable:""},model:{value:t.row.name,callback:function(l){e.$set(t.row,"name",l)},expression:"scope.row.name"}}):l("span",[e._v("\n            "+e._s(t.row.name)+"\n          ")])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"email",label:e.$t("user.email")},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isEdit?l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.email")}),clearable:""},model:{value:t.row.email,callback:function(l){e.$set(t.row,"email",l)},expression:"scope.row.email"}}):l("span",{staticClass:"table-column-span"},[e._v("\n            "+e._s(t.row.email)+"\n          ")])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"phone",label:e.$t("user.phone")},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isEdit?l("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.phone")}),clearable:""},model:{value:t.row.phone,callback:function(l){e.$set(t.row,"phone",l)},expression:"scope.row.phone"}}):l("span",{staticClass:"table-column-span"},[e._v("\n            "+e._s(t.row.phone)+"\n          ")])]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"createdDate",label:e.$t("content.createdDate"),formatter:e.formatterDate}}),e._v(" "),l("el-table-column",{attrs:{label:e.$t("content.operation"),width:"172"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.seller?[e._v("\n            用户已关联艺术家 "+e._s(t.row.seller.firstname)+e._s(t.row.seller.lastname)+"\n          ")]:[e.sellerData.user&&e.sellerData.user.userId==t.row.userId?l("el-button",{attrs:{type:"danger"},on:{click:function(t){e.sellerData.user="",e.dialogVisible=!1}}},[e._v("\n              取消\n            ")]):l("el-button",{attrs:{type:"primary"},on:{click:function(l){e.sellerData.user=t.row,e.dialogVisible=!1}}},[e._v("\n              选择\n            ")])]]}}])})],1),e._v(" "),l("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{background:"",layout:"prev, pager, next","page-size":e.userPagination.pageSize,"current-page":e.userPagination.currentPage,total:e.userPagination.total},on:{"current-change":e.changeUserCurrentPage}})],1)],1)}),[],!1,null,"9e7c68f0",null);t.default=component.exports}}]);