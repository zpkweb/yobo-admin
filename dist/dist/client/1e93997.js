(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{409:function(e,t,n){"use strict";var r=n(4),o=n(163),l=n(64),c=n(18),m=n(34),d=n(164),f=n(108),h=n(81),v=n(26),$=h("splice"),y=v("splice",{ACCESSORS:!0,0:0,1:2}),w=Math.max,_=Math.min;r({target:"Array",proto:!0,forced:!$||!y},{splice:function(e,t){var n,r,h,v,$,y,x=m(this),M=c(x.length),S=o(e,M),k=arguments.length;if(0===k?n=r=0:1===k?(n=0,r=M-S):(n=k-2,r=_(w(l(t),0),M-S)),M+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=d(x,r),v=0;v<r;v++)($=S+v)in x&&f(h,v,x[$]);if(h.length=r,n<r){for(v=S;v<M-r;v++)y=v+n,($=v+r)in x?x[y]=x[$]:delete x[y];for(v=M;v>M-r+n;v--)delete x[v-1]}else if(n>r)for(v=M-r;v>S;v--)y=v+n-1,($=v+r-1)in x?x[y]=x[$]:delete x[y];for(v=0;v<n;v++)x[v+S]=arguments[v+2];return x.length=M-r+n,h}})},482:function(e,t,n){"use strict";n.r(t);n(46),n(409);var r=n(12),o=(n(17),n(3));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={data:function(){return{messageSearch:{title:"",content:"",news:!1},message:[],pagination:{currentPage:1,pageSize:10,total:0},dialogMessageVisible:!1,dialogMessage:{},editorOption:{placeholder:this.$t("form.placeholder",{msg:"".concat(this.$t("message.reply")).concat(this.$t("message.content"))}),modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"]]}},replyContent:!1,sendEmailLoading:!1}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/admin/message",{params:{currentPage:e.pagination.currentPage,pageSize:e.pagination.pageSize}});case 2:(n=t.sent).success&&(e.pagination.total=n.data.total,e.message=n.data.list);case 4:case"end":return t.stop()}}),t)})))()},computed:{},methods:{onMessageSearch:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.pagination.currentPage=e,n.next=3,t.$axios.$get("/api/admin/message/search",{params:c(c({},t.messageSearch),{},{currentPage:e,pageSize:t.pagination.pageSize})});case 3:(r=n.sent).success&&(t.pagination.total=r.data.total,t.message=r.data.list);case 5:case"end":return n.stop()}}),n)})))()},deleteMessage:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.$axios.$post("/api/admin/message/delete",{messageId:t.messageId});case 2:r.sent.success&&n.message.splice(e,1);case 4:case"end":return r.stop()}}),r)})))()},onSendEmail:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.dialogMessage.replyContent){t.next=2;break}return t.abrupt("return");case 2:return e.sendEmailLoading=!0,t.next=5,e.$axios.$post("/api/admin/email/send",{email:e.dialogMessage.title,msg:e.dialogMessage.replyContent});case 5:n=t.sent,e.sendEmailLoading=!1,n.success?(e.dialogMessage={},e.dialogMessageVisible=!1):e.$message({showClose:!0,message:"".concat(e.sendEmailData.message).concat(e.$t("content.fail")),type:"error"});case 8:case"end":return t.stop()}}),t)})))()},changeCurrentPage:function(e){this.onMessageSearch(e)},formatterDate:function(e,t,n,r){return this.$moment(n).format("YYYY-MM-DD HH:mm:ss")},replyMessage:function(e,t){console.log(e,t),this.dialogMessage=Object.assign({},t),this.dialogMessageVisible=!0},onEditorChange:function(e){var t=e.editor,html=e.html,text=e.text;console.log(t,html,text),this.replyContent=!!html,this.dialogMessage.replyContent=html}}},d=n(14),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message"},[n("el-form",{staticClass:"user-search",attrs:{inline:!0,model:e.messageSearch}},[n("el-form-item",{attrs:{label:e.$t("message.email")}},[n("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("message.email")}),clearable:""},model:{value:e.messageSearch.title,callback:function(t){e.$set(e.messageSearch,"title",t)},expression:"messageSearch.title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("message.content")}},[n("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("message.content")}),clearable:""},model:{value:e.messageSearch.content,callback:function(t){e.$set(e.messageSearch,"content",t)},expression:"messageSearch.content"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"news",label:e.$t("commodity.news")}},[n("el-switch",{model:{value:e.messageSearch.news,callback:function(t){e.$set(e.messageSearch,"news",t)},expression:"messageSearch.news"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.onMessageSearch(1)}}},[e._v(e._s(e.$t("content.search")))])],1)],1),e._v(" "),n("el-table",{attrs:{data:e.message,border:""}},[n("el-table-column",{attrs:{prop:"title",label:e.$t("message.email")}}),e._v(" "),n("el-table-column",{attrs:{prop:"content",label:e.$t("message.content")}}),e._v(" "),n("el-table-column",{attrs:{prop:"href",label:e.$t("message.href")},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-link",{attrs:{href:e.href,target:"_blank"}},[e._v(e._s(t.row.href))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"createdDate",label:e.$t("message.createdDate"),formatter:e.formatterDate}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("content.operation"),width:"172"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",icon:"el-icon-reply"},on:{click:function(n){return e.replyMessage(t.$index,t.row)}}},[e._v("\n            "+e._s(e.$t("message.reply"))+"\n            ")]),e._v(" "),n("el-popover",{attrs:{placement:"top"},model:{value:t.row.visible,callback:function(n){e.$set(t.row,"visible",n)},expression:"scope.row.visible"}},[n("p",[e._v(e._s(e.$t("content.deleteText")))]),e._v(" "),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.row.visible=!1}}},[e._v(e._s(e.$t("content.cancel")))]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return e.deleteMessage(t.$index,t.row)}}},[e._v(e._s(e.$t("content.define")))])],1),e._v(" "),n("el-button",{attrs:{slot:"reference",size:"mini",type:"danger",icon:"el-icon-delete"},slot:"reference"},[e._v(e._s(e.$t("content.delete")))])],1)]}}])})],1),e._v(" "),n("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{background:"",layout:"prev, pager, next","page-size":e.pagination.pageSize,"current-page":e.pagination.currentPage,total:e.pagination.total},on:{"current-change":e.changeCurrentPage}}),e._v(" "),n("el-dialog",{attrs:{title:""+e.$t("message.reply")+e.$t("message.message"),visible:e.dialogMessageVisible,width:"50%"},on:{"update:visible":function(t){e.dialogMessageVisible=t}}},[n("el-form",{attrs:{model:e.dialogMessage,"label-width":"80px"}},[n("el-form-item",{attrs:{label:""+e.$t("message.reply")+e.$t("message.email")}},[n("el-input",{attrs:{disabled:"",clearable:""},model:{value:e.dialogMessage.title,callback:function(t){e.$set(e.dialogMessage,"title",t)},expression:"dialogMessage.title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:""+e.$t("message.reply")+e.$t("message.question")}},[n("el-input",{attrs:{type:"textarea",disabled:"",clearable:""},model:{value:e.dialogMessage.content,callback:function(t){e.$set(e.dialogMessage,"content",t)},expression:"dialogMessage.content"}})],1),e._v(" "),n("el-form-item",{attrs:{label:""+e.$t("message.reply")+e.$t("message.content")}},[n("div",{directives:[{name:"quill",rawName:"v-quill:myQuillEditor",value:e.editorOption,expression:"editorOption",arg:"myQuillEditor"}],staticClass:"quill-editor",attrs:{content:e.dialogMessage.replyContent},on:{change:function(t){return e.onEditorChange(t)}}})])],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogMessageVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary",disabled:!e.replyContent,loading:!!e.sendEmailLoading},on:{click:e.onSendEmail}},[e._v("发 送")])],1)],1)],1)}),[],!1,null,"216b16d1",null);t.default=component.exports}}]);