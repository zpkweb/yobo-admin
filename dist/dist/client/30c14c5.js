(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{413:function(e,t,r){var content=r(436);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(29).default)("f715b1ea",content,!0,{sourceMap:!1})},435:function(e,t,r){"use strict";r(413)},436:function(e,t,r){(t=r(28)(!1)).push([e.i,".user-create[data-v-371de5bc]{width:100%;display:flex;align-items:center;justify-content:center}.user-create-form[data-v-371de5bc]{width:90%}.avatar-uploader .el-upload[data-v-371de5bc]{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload[data-v-371de5bc]:hover{border-color:#409eff}.avatar-uploader-icon[data-v-371de5bc]{font-size:28px;color:#8c939d;width:88px;height:88px;line-height:88px;text-align:center}.avatar[data-v-371de5bc]{width:88px;height:88px;display:block}",""]),e.exports=t},456:function(e,t,r){"use strict";r.r(t);r(46),r(19),r(15);var o=r(3),n=r(401),c=r.n(n),l={fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$route.query||!e.$route.query.userId){t.next=6;break}return e.userId=e.$route.query.userId,t.next=4,e.$axios.$get("/api/admin/user",{params:{userId:e.userId}});case 4:(r=t.sent).success&&(e.userCreate=Object.assign(e.userCreate,r.data),e.type="edit",e.typeText=e.$t("content.update"),e.isCreate=!1,e.rules.password[0].required=!1);case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{type:"create",typeText:this.$t("content.create"),isCreate:!0,userId:"",userCreate:{avatar:"",name:"",email:"",phone:"",password:"",identity:[]},rules:{email:[{required:!0,message:this.$t("form.placeholder",{msg:this.$t("user.email")}),trigger:"blur"}],password:[{required:!0,message:this.$t("form.placeholder",{msg:this.$t("user.password")}),trigger:"blur"}]}}},watch:{"$route.query":"$fetch"},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=Object(o.a)(regeneratorRuntime.mark((function r(o){var data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!o){r.next=13;break}if(!t.isCreate){r.next=7;break}return r.next=4,t.$axios.$post("/api/admin/user/register",{identity:t.$route.params.identity,avatar:t.userCreate.avatar,name:t.userCreate.name,email:t.userCreate.email,phone:t.userCreate.phone,password:t.userCreate.password}).catch((function(e){t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"! ").concat(e.response.data.message),type:"error"})}));case 4:data=r.sent,r.next=10;break;case 7:return r.next=9,t.$axios.$post("/api/admin/user/update",{userId:t.userId,avatar:t.userCreate.avatar,name:t.userCreate.name,email:t.userCreate.email,phone:t.userCreate.phone,password:t.userCreate.password});case 9:data=r.sent;case 10:200===data.status?(t.$message({showClose:!0,message:"".concat(t.userCreate.name,"，").concat(t.typeText).concat(t.$t("content.success")),type:"success"}),t.isCreate&&t.$refs[e].resetFields()):t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"!").concat(data.message),type:"error"}),r.next=15;break;case 13:return console.log("error submit!!"),r.abrupt("return",!1);case 15:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},onMock:function(){this.userCreate={avatar:"",name:c.a.mock("@cname"),email:c.a.mock("@email"),password:"123"}},handleAvatarSuccess:function(e,t){this.userCreate.avatar=e.data.src},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t}}},d=(r(435),r(14)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user-create"},[r("el-form",{ref:"userCreate",staticClass:"user-create-form",attrs:{model:e.userCreate,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:e.$t("user.avatar"),prop:"avatar"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/upload/images",data:{type:"avatar"},"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload},model:{value:e.userCreate.avatar,callback:function(t){e.$set(e.userCreate,"avatar",t)},expression:"userCreate.avatar"}},[e.userCreate.avatar?r("img",{staticClass:"avatar",attrs:{src:e.userCreate.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.name"),prop:"name"}},[r("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.name")})},model:{value:e.userCreate.name,callback:function(t){e.$set(e.userCreate,"name",t)},expression:"userCreate.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.email"),prop:"email"}},[r("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.email")})},model:{value:e.userCreate.email,callback:function(t){e.$set(e.userCreate,"email",t)},expression:"userCreate.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.phone"),prop:"phone"}},[r("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.phone")})},model:{value:e.userCreate.phone,callback:function(t){e.$set(e.userCreate,"phone",t)},expression:"userCreate.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$t("user.password"),prop:"password"}},[r("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.password")})},model:{value:e.userCreate.password,callback:function(t){e.$set(e.userCreate,"password",t)},expression:"userCreate.password"}})],1),e._v(" "),r("el-form-item",[e.isCreate?r("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){return e.submitForm("userCreate")}}},[e._v("\n        "+e._s(e.$t("content.create"))+"\n      ")]):r("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:function(t){return e.submitForm("userCreate")}}},[e._v("\n        "+e._s(e.$t("content.update"))+"\n      ")]),e._v(" "),r("el-button",{attrs:{icon:"el-icon-check"},on:{click:e.onMock}},[e._v(" "+e._s(e.$t("content.fill"))+" ")]),e._v(" "),r("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(t){return e.resetForm("userCreate")}}},[e._v(e._s(e.$t("content.clear")))])],1)],1)],1)}),[],!1,null,"371de5bc",null);t.default=component.exports}}]);