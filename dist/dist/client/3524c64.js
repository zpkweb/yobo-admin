(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{428:function(e,t,r){var content=r(459);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("4d07db08",content,!0,{sourceMap:!1})},458:function(e,t,r){"use strict";r(428)},459:function(e,t,r){(t=r(15)(!1)).push([e.i,".user-create[data-v-01775f04]{width:100%;display:flex;align-items:center;justify-content:center}.user-create-form[data-v-01775f04]{width:90%}",""]),e.exports=t},488:function(e,t,r){"use strict";r.r(t);r(46),r(21),r(17);var n=r(3),o=r(414),c=r.n(o);function l(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var d={fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.query||!e.$route.query.userId){t.next=6;break}return e.userId=e.$route.query.userId,t.next=4,e.$axios.$get("/api/admin/user",{params:{userId:e.userId}}).catch((function(e){}));case 4:(r=t.sent).success?(e.userCreate=Object.assign(e.userCreate,r.data),e.identityListCheck=r.data.identityList,e.type="edit",e.typeText=e.$t("content.update"),e.isCreate=!1,e.rules.password[0].required=!1):e.$message({showClose:!0,message:"".concat(r.message),type:"error"});case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{type:"create",typeText:this.$t("content.create"),isCreate:!0,userId:"",userCreate:{avatar:"",name:"",email:"",phone:"",password:"",identity:[]},rules:{email:[{required:!0,message:this.$t("form.placeholder",{msg:this.$t("user.email")}),trigger:"blur"}],password:[{required:!0,message:this.$t("form.placeholder",{msg:this.$t("user.password")}),trigger:"blur"}]},identityLists:[{label:"管理员",value:2},{label:"客服",value:3}],identityListCheck:[]}},watch:{"$route.query":"$fetch"},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=Object(n.a)(regeneratorRuntime.mark((function r(n){var data,o,c,m,d,f,h,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n){r.next=14;break}if(t.identityListCheck&&t.identityListCheck.length){o=l(t.identityLists);try{for(o.s();!(c=o.n()).done;){m=c.value,d=!1,f=l(t.identityListCheck);try{for(f.s();!(h=f.n()).done;)v=h.value,m.value==v&&(d=!0)}catch(e){f.e(e)}finally{f.f()}m.check=d}}catch(e){o.e(e)}finally{o.f()}}if(!t.isCreate){r.next=8;break}return r.next=5,t.$axios.$post("/api/admin/user/register",{identity:t.$route.params.identity,avatar:t.userCreate.avatar,name:t.userCreate.name,email:t.userCreate.email,phone:t.userCreate.phone,password:t.userCreate.password,identityList:t.identityLists}).catch((function(e){t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"! ").concat(e.response.data.message),type:"error"})}));case 5:data=r.sent,r.next=11;break;case 8:return r.next=10,t.$axios.$post("/api/admin/user/update",{userId:t.userId,avatar:t.userCreate.avatar,name:t.userCreate.name,email:t.userCreate.email,phone:t.userCreate.phone,password:t.userCreate.password,identityList:t.identityLists});case 10:data=r.sent;case 11:200===data.status?(t.$message({showClose:!0,message:"".concat(t.userCreate.name,"，").concat(t.typeText).concat(t.$t("content.success")),type:"success"}),t.isCreate&&t.$refs[e].resetFields()):t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"!").concat(data.message),type:"error"}),r.next=15;break;case 14:return r.abrupt("return",!1);case 15:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},onMock:function(){this.userCreate={avatar:"",name:c.a.mock("@cname"),email:c.a.mock("@email"),password:"123"}},handleSuccess:function(e,t){this.userCreate.avatar=e.data.src},beforeUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传的图片大小不能超过 2MB!"),t}}},f=(r(458),r(14)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-create"},[r("el-form",{ref:"userCreate",staticClass:"user-create-form",attrs:{model:e.userCreate,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:e.$t("user.avatar"),prop:"avatar"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$config.origin+"/api/upload/images",data:{type:"avatar"},"show-file-list":!1,"on-success":e.handleSuccess,"before-upload":e.beforeUpload},model:{value:e.userCreate.avatar,callback:function(t){e.$set(e.userCreate,"avatar",t)},expression:"userCreate.avatar"}},[e.userCreate.avatar?r("img",{staticClass:"avatar",attrs:{src:e.userCreate.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n          用户头像，请上传 正方形 比例的图片，且不超过2M\n        ")])])],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.name"),prop:"name"}},[r("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.name")})},model:{value:e.userCreate.name,callback:function(t){e.$set(e.userCreate,"name",t)},expression:"userCreate.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.email"),prop:"email"}},[r("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.email")})},model:{value:e.userCreate.email,callback:function(t){e.$set(e.userCreate,"email",t)},expression:"userCreate.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.phone"),prop:"phone"}},[r("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.phone")})},model:{value:e.userCreate.phone,callback:function(t){e.$set(e.userCreate,"phone",t)},expression:"userCreate.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.password"),prop:"password"}},[r("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.password")})},model:{value:e.userCreate.password,callback:function(t){e.$set(e.userCreate,"password",t)},expression:"userCreate.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.identity"),prop:"identityList"}},[r("el-checkbox-group",{model:{value:e.identityListCheck,callback:function(t){e.identityListCheck=t},expression:"identityListCheck"}},e._l(e.identityLists,(function(t){return r("el-checkbox",{key:t,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1),e._v(" "),r("el-form-item",[e.isCreate?r("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){return e.submitForm("userCreate")}}},[e._v("\n        "+e._s(e.$t("content.create"))+"\n      ")]):r("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:function(t){return e.submitForm("userCreate")}}},[e._v("\n        "+e._s(e.$t("content.update"))+"\n      ")]),e._v(" "),r("el-button",{attrs:{icon:"el-icon-check"},on:{click:e.onMock}},[e._v("\n        "+e._s(e.$t("content.fill"))+"\n      ")]),e._v(" "),r("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(t){return e.resetForm("userCreate")}}},[e._v(e._s(e.$t("content.clear")))])],1)],1)],1)}),[],!1,null,"01775f04",null);t.default=component.exports}}]);