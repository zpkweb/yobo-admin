(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{409:function(e,t,n){"use strict";var r=n(4),c=n(163),o=n(64),l=n(18),d=n(34),f=n(164),m=n(108),h=n(81),v=n(26),$=h("splice"),x=v("splice",{ACCESSORS:!0,0:0,1:2}),w=Math.max,_=Math.min;r({target:"Array",proto:!0,forced:!$||!x},{splice:function(e,t){var n,r,h,v,$,x,y=d(this),C=l(y.length),k=c(e,C),O=arguments.length;if(0===O?n=r=0:1===O?(n=0,r=C-k):(n=O-2,r=_(w(o(t),0),C-k)),C+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=f(y,r),v=0;v<r;v++)($=k+v)in y&&m(h,v,y[$]);if(h.length=r,n<r){for(v=k;v<C-r;v++)x=v+n,($=v+r)in y?y[x]=y[$]:delete y[x];for(v=C;v>C-r+n;v--)delete y[v-1]}else if(n>r)for(v=C-r;v>k;v--)x=v+n-1,($=v+r-1)in y?y[x]=y[$]:delete y[x];for(v=0;v<n;v++)y[v+k]=arguments[v+2];return y.length=C-r+n,h}})},429:function(e,t,n){var content=n(465);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("4a008cce",content,!0,{sourceMap:!1})},430:function(e,t,n){var content=n(467);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("62e1844c",content,!0,{sourceMap:!1})},464:function(e,t,n){"use strict";n(429)},465:function(e,t,n){(t=n(15)(!1)).push([e.i,".el-upload-list--picture-card .el-upload-list__item[data-v-a51910d4]{width:100%}",""]),e.exports=t},466:function(e,t,n){"use strict";n(430)},467:function(e,t,n){(t=n(15)(!1)).push([e.i,".avatar-uploader-icon[data-v-a51910d4]{font-size:28px;color:#8c939d;width:239px;height:100px;line-height:100px;text-align:center}.avatar[data-v-a51910d4]{width:239px;height:100px;display:block}",""]),e.exports=t},497:function(e,t,n){"use strict";n.r(t);n(46),n(30),n(409),n(21),n(165);var r=n(8),c=(n(17),n(3)),o={data:function(){return{imageUrl:"",dialogImageUrl:"",dialogVisible:!1,defaultBanner:{state:0,src:"",title:"",subTitle:"",desc:""},form:{banners:[]}}},fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/admin/page/banner");case 2:(n=t.sent).success&&(e.form.banners=n.data.map((function(e){return e.state=1,e})),e.form.banners.push(e.defaultBanner));case 4:case"end":return t.stop()}}),t)})))()},methods:{bannerCreate:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$post("/api/admin/page/banner",{src:e.src,title:e.title,subTitle:e.subTitle,desc:e.desc});case 2:(r=n.sent).success?(e.state=1,e.bannerId=r.data.generatedMaps[0].bannerId,t.form.banners.push(t.defaultBanner),t.$message({showClose:!0,message:"".concat(t.$t("content.create")).concat(t.$t("content.success")),type:"success"})):t.$message({showClose:!0,message:"".concat(t.$t("content.create")).concat(t.$t("content.fail")),type:"error"});case 4:case"end":return n.stop()}}),n)})))()},bannerUpdate:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$post("/api/admin/page/banner/update",e);case 2:n.sent.success?(e.state=1,t.$message({showClose:!0,message:"".concat(t.$t("content.update")).concat(t.$t("content.success")),type:"success"})):t.$message({showClose:!0,message:"".concat(t.$t("content.update")).concat(t.$t("content.fail")),type:"error"});case 4:case"end":return n.stop()}}),n)})))()},bannerDelete:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c,o,l,d,element;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.$post("/api/admin/page/banner/delete",{bannerId:e.bannerId});case 2:if(n.sent.success){for(c=0,o=Object.entries(t.form.banners);c<o.length;c++)l=Object(r.a)(o[c],2),d=l[0],element=l[1],e.bannerId===element.bannerId&&t.form.banners.splice(d,1);t.$message({showClose:!0,message:"".concat(t.$t("content.delete")).concat(t.$t("content.success")),type:"success"})}else t.$message({showClose:!0,message:"".concat(t.$t("content.delete")).concat(t.$t("content.fail")),type:"error"});case 4:case"end":return n.stop()}}),n)})))()},uploadSuccess:function(e,t){this.banners.push({src:e.data.src,url:e.data.src,name:t.name})},uploadRemove:function(e,t){for(var n=0,c=Object.entries(this.banners);n<c.length;n++){var o=Object(r.a)(c[n],2),l=o[0];o[1].name===e.name&&this.banners.splice(l,1)}},uploadPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleSuccess:function(e,t,n){this.form.banners[e.data.index].src=e.data.src},beforeUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传的图片大小不能超过 2MB!"),t}}},l=(n(464),n(466),n(14)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner"},[n("el-form",{ref:"form",attrs:{model:e.form}},e._l(e.form.banners,(function(t,r){return n("el-form-item",{key:r},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:3}},[t.state?[n("el-button",{on:{click:function(n){return e.bannerUpdate(t)}}},[e._v(e._s(e.$t("content.update")))]),e._v(" "),n("el-button",{on:{click:function(n){return e.bannerDelete(t)}}},[e._v(e._s(e.$t("content.delete")))])]:[n("el-button",{on:{click:function(n){return e.bannerCreate(t)}}},[e._v(e._s(e.$t("content.create")))])]],2),e._v(" "),n("el-col",{attrs:{span:5}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$config.origin+"/api/upload/images",data:{type:"banner",index:r},"show-file-list":!1,"on-success":e.handleSuccess,"before-upload":e.beforeUpload}},[t.src?n("img",{staticClass:"avatar",attrs:{src:t.src}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),e._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n              首页banner图片，请上传 (大于1220)X510 比例的图片，且不超过2M\n            ")])])],1),e._v(" "),n("el-col",{attrs:{span:4}},[n("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("content.title")})},model:{value:t.title,callback:function(n){e.$set(t,"title",n)},expression:"item.title"}})],1),e._v(" "),n("el-col",{attrs:{span:4}},[n("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("content.subTitle")})},model:{value:t.subTitle,callback:function(n){e.$set(t,"subTitle",n)},expression:"item.subTitle"}})],1),e._v(" "),n("el-col",{attrs:{span:4}},[n("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("content.desc")})},model:{value:t.desc,callback:function(n){e.$set(t,"desc",n)},expression:"item.desc"}})],1)],1)],1)})),1)],1)}),[],!1,null,"a51910d4",null);t.default=component.exports}}]);