(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{396:function(e,t,o){"use strict";var r=o(4),n=o(163),l=o(64),c=o(16),m=o(34),f=o(164),d=o(108),h=o(81),y=o(23),$=h("splice"),v=y("splice",{ACCESSORS:!0,0:0,1:2}),k=Math.max,x=Math.min;r({target:"Array",proto:!0,forced:!$||!v},{splice:function(e,t){var o,r,h,y,$,v,_=m(this),w=c(_.length),j=n(e,w),E=arguments.length;if(0===E?o=r=0:1===E?(o=0,r=w-j):(o=E-2,r=x(k(l(t),0),w-j)),w+o-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=f(_,r),y=0;y<r;y++)($=j+y)in _&&d(h,y,_[$]);if(h.length=r,o<r){for(y=j;y<w-r;y++)v=y+o,($=y+r)in _?_[v]=_[$]:delete _[v];for(y=w;y>w-r+o;y--)delete _[y-1]}else if(o>r)for(y=w-r;y>j;y--)v=y+o-1,($=y+r-1)in _?_[v]=_[$]:delete _[v];for(y=0;y<o;y++)_[y+j]=arguments[y+2];return _.length=w-r+o,h}})},406:function(e,t,o){var content=o(424);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("59e60ae6",content,!0,{sourceMap:!1})},423:function(e,t,o){"use strict";o(406)},424:function(e,t,o){(t=o(28)(!1)).push([e.i,".el-upload--picture-card,.el-upload-list--picture-card .el-upload-list__item{width:192px;height:100px;line-height:100px;text-align:center}.photo{width:192px;height:100px}",""]),e.exports=t},452:function(e,t,o){"use strict";o.r(t);o(46),o(30),o(396),o(19),o(165);var r=o(8),n=(o(15),o(3)),l=o(401),c=o.n(l),m={data:function(){return{type:"",typeText:this.$t("content.create"),isCreate:!0,form:{},dialogImageUrl:"",dialogVisible:!1,loading:!1,options:{},states:[{index:0,name:this.$t("commodity.state.added")},{index:1,name:this.$t("commodity.state.onsale")},{index:2,name:this.$t("commodity.state.sold")},{index:3,name:this.$t("commodity.state.offline")}],categorys:[],classifications:[],materials:[],models:[],places:[],ruiwus:[],shapes:[],specifications:[],styles:[],techniques:[],themes:[],types:[],uses:[],isSubmit:!1}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.options={};case 1:case"end":return t.stop()}}),t)})))()},computed:{},watch:{"$route.query":"$fetch"},watchQuery:["commodityId"],created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,r,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isCreate=!0,e.reset(),t.next=4,e.$axios.$get("/api/admin/commodity/options");case 4:if((o=t.sent).success&&(e.options=o.data,e.categorys=o.data.categorys.map((function(e){return e.id})),e.classifications=o.data.classifications.map((function(e){return e.id})),e.materials=o.data.materials.map((function(e){return e.id})),e.models=o.data.models.map((function(e){return e.id})),e.places=o.data.places.map((function(e){return e.id})),e.ruiwus=o.data.ruiwus.map((function(e){return e.id})),e.shapes=o.data.shapes.map((function(e){return e.id})),e.specifications=o.data.specifications.map((function(e){return e.id})),e.styles=o.data.styles.map((function(e){return e.id})),e.techniques=o.data.techniques.map((function(e){return e.id})),e.themes=o.data.themes.map((function(e){return e.id})),e.types=o.data.types.map((function(e){return e.id})),e.uses=o.data.uses.map((function(e){return e.id}))),!e.$route.query||!e.$route.query.commodityId){t.next=11;break}return t.next=9,e.$axios.$get("/api/admin/commodity/edit",{params:{commodityId:e.$route.query.commodityId}});case 9:(r=t.sent).success&&(n=r.data,console.log("commodityForm",n),e.form.commodityId=e.$route.query.commodityId,e.form.state=n.state,e.form.width=n.width,e.form.height=n.height,e.form.colors=n.colors,n.name&&(e.form.name=n.name),n.desc&&(e.form.desc=n.desc),n.price&&(e.form.price=n.price),n.photos&&(l=n.photos.map((function(e){return e.url=e.src,e})),e.form.photos=l),e.form.categorys=n.categorys.map((function(e){return e.optionId})),e.form.classifications=n.classifications.map((function(e){return e.optionId})),e.form.materials=n.materials.map((function(e){return e.optionId})),e.form.models=n.models.map((function(e){return e.optionId})),e.form.places=n.places.map((function(e){return e.optionId})),e.form.ruiwus=n.ruiwus.map((function(e){return e.optionId})),e.form.shapes=n.shapes.map((function(e){return e.optionId})),e.form.specifications=n.specifications.map((function(e){return e.optionId})),e.form.styles=n.styles.map((function(e){return e.optionId})),e.form.techniques=n.techniques.map((function(e){return e.optionId})),e.form.themes=n.themes.map((function(e){return e.optionId})),e.form.types=n.types.map((function(e){return e.optionId})),e.form.uses=n.uses.map((function(e){return e.optionId})),n.seller&&(e.form.sellerId=n.seller.sellerId),e.type="edit",e.typeText=e.$t("content.update"),e.isCreate=!1);case 11:console.log("this.form",e.form);case 12:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{onSubmit:function(e){var t=this;console.log("submit!",this.form),this.$refs[e].validate(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(o){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=14;break}if(t.isSubmit=!0,!t.isCreate){e.next=8;break}return e.next=5,t.$axios.$post("/api/admin/commodity/create",t.form).catch((function(e){t.isSubmit=!1,t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"! ").concat(e.response.data.message),type:"error"})}));case 5:data=e.sent,e.next=12;break;case 8:return console.log("this.form",t.form),e.next=11,t.$axios.$post("/api/admin/commodity/update",t.form).catch((function(e){t.isSubmit=!1,t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"! ").concat(e.response.data.message),type:"error"})}));case 11:data=e.sent;case 12:t.isSubmit=!1,200===data.status?(t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.success")),type:"success"}),t.isCreate&&t.resetForm("form")):t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"!").concat(data.message),type:"error"});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onMock:function(){if(this.categorys.length&&this.classifications.length&&this.materials.length&&this.models.length&&this.places.length&&this.ruiwus.length&&this.shapes.length&&this.specifications.length&&this.styles.length&&this.techniques.length&&this.themes.length&&this.types.length&&this.uses.length){var e={commodityId:this.form.commodityId,name:{"zh-cn":c.a.mock("@ctitle(2, 8)"),"en-us":c.a.mock("@title(2)"),"ja-jp":"ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう","es-es":"zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix"},desc:{"zh-cn":c.a.mock("@cparagraph(1,3)"),"en-us":c.a.mock("@paragraph(1,3)"),"ja-jp":"ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう","es-es":"zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix"},price:{"zh-cn":c.a.mock("@integer(60, 100)"),"en-us":c.a.mock("@integer(60, 100)"),"ja-jp":c.a.mock("@integer(60, 100)"),"es-es":c.a.mock("@integer(60, 100)")},categorys:[this.categorys[c.a.mock("@integer(0,".concat(this.categorys.length-1,")"))]],classifications:[this.classifications[c.a.mock("@integer(0,".concat(this.classifications.length-1,")"))]],materials:[this.materials[c.a.mock("@integer(0,".concat(this.materials.length-1,")"))]],models:[this.models[c.a.mock("@integer(0,".concat(this.models.length-1,")"))]],places:[this.places[c.a.mock("@integer(0,".concat(this.places.length-1,")"))]],ruiwus:[this.ruiwus[c.a.mock("@integer(0,".concat(this.ruiwus.length-1,")"))]],shapes:[this.shapes[c.a.mock("@integer(0,".concat(this.shapes.length-1,")"))]],specifications:[this.specifications[c.a.mock("@integer(0,".concat(this.specifications.length-1,")"))]],styles:[this.styles[c.a.mock("@integer(0,".concat(this.styles.length-1,")"))]],techniques:[this.techniques[c.a.mock("@integer(0,".concat(this.techniques.length-1,")"))]],themes:[this.themes[c.a.mock("@integer(0,".concat(this.themes.length-1,")"))]],types:[this.types[c.a.mock("@integer(0,".concat(this.types.length-1,")"))]],uses:[this.uses[c.a.mock("@integer(0,".concat(this.uses.length-1,")"))]],photos:[],colors:[{startColor:"#ffffff",endColor:"#000000"}],width:c.a.mock("@natural(100, 300)"),height:c.a.mock("@natural(100, 300)"),state:c.a.mock("@integer(0, 3)"),sellerId:""};console.log("createCommodityMock",e),this.form=e,this.type="create",this.typeText=this.$t("content.create"),this.isCreate=!0}else this.$message({showClose:!0,message:"请先添加艺术品选项",type:"error"})},resetForm:function(e){this.reset(),this.type="create",this.typeText=this.$t("content.create"),this.isCreate=!0,this.$refs[e].clearValidate()},reset:function(){this.form={name:{"zh-cn":"","en-us":"","ja-jp":"","es-es":""},desc:{"zh-cn":"","en-us":"","ja-jp":"","es-es":""},price:{"zh-cn":"","en-us":"","ja-jp":"","es-es":""},categorys:[],classifications:[],materials:[],models:[],places:[],ruiwus:[],shapes:[],specifications:[],styles:[],techniques:[],themes:[],types:[],uses:[],photos:[],colors:[{startColor:"#ffffff",endColor:"#000000"}],width:"",height:"",state:0,sellerId:""}},uploadSuccess:function(e,t){console.log(e,t),this.form.photos.push({src:e.data.src,url:e.data.src,name:t.name,uid:t.uid})},uploadRemove:function(e,t){for(var o=0,n=Object.entries(this.form.photos);o<n.length;o++){var l=Object(r.a)(n[o],2),c=l[0];l[1].uid===e.uid&&this.form.photos.splice(c,1)}},uploadPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},beforeUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传的图片大小不能超过 2MB!"),t}}},f=(o(423),o(14)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"108px"}},[o("el-form-item",[e.isCreate?o("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline",loading:e.isSubmit},on:{click:function(t){return e.onSubmit("form")}}},[e._v("\n      "+e._s(e.$t("content.create"))+"\n    ")]):o("el-button",{attrs:{type:"primary",icon:"el-icon-check",loading:e.isSubmit},on:{click:function(t){return e.onSubmit("form")}}},[e._v("\n      "+e._s(e.$t("content.update"))+"\n    ")]),e._v(" "),o("el-button",{attrs:{icon:"el-icon-check"},on:{click:e.onMock}},[e._v("\n      "+e._s(e.$t("content.fill"))+"\n    ")]),e._v(" "),o("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(t){return e.resetForm("form")}}},[e._v(e._s(e.$t("content.clear")))])],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.name")}),prop:"name.zh-cn",rules:{required:!0,message:""+e.$t("lang.zh")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.zh")})},model:{value:e.form.name["zh-cn"],callback:function(t){e.$set(e.form.name,"zh-cn",t)},expression:"form.name['zh-cn']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.name")}),prop:"name.en-us",rules:{required:!0,message:""+e.$t("lang.en")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.en")})},model:{value:e.form.name["en-us"],callback:function(t){e.$set(e.form.name,"en-us",t)},expression:"form.name['en-us']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.name")}),prop:"name.ja-jp",rules:{required:!0,message:""+e.$t("lang.ja")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.ja")})},model:{value:e.form.name["ja-jp"],callback:function(t){e.$set(e.form.name,"ja-jp",t)},expression:"form.name['ja-jp']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.name")}),prop:"name.es-es",rules:{required:!0,message:""+e.$t("lang.es")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.es")})},model:{value:e.form.name["es-es"],callback:function(t){e.$set(e.form.name,"es-es",t)},expression:"form.name['es-es']"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.desc")}),prop:"desc.zh-cn",rules:{required:!0,message:""+e.$t("lang.zh")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.zh")})},model:{value:e.form.desc["zh-cn"],callback:function(t){e.$set(e.form.desc,"zh-cn",t)},expression:"form.desc['zh-cn']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.desc")}),prop:"desc.en-us",rules:{required:!0,message:""+e.$t("lang.en")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.en")})},model:{value:e.form.desc["en-us"],callback:function(t){e.$set(e.form.desc,"en-us",t)},expression:"form.desc['en-us']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.desc")}),prop:"desc.ja-jp",rules:{required:!0,message:""+e.$t("lang.ja")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.ja")})},model:{value:e.form.desc["ja-jp"],callback:function(t){e.$set(e.form.desc,"ja-jp",t)},expression:"form.desc['ja-jp']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.desc")}),prop:"desc.es-es",rules:{required:!0,message:""+e.$t("lang.es")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.es")})},model:{value:e.form.desc["es-es"],callback:function(t){e.$set(e.form.desc,"es-es",t)},expression:"form.desc['es-es']"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.zh"),name:e.$t("commodity.price.title")}),prop:"price.zh-cn",rules:{required:!0,message:""+e.$t("lang.price.zh")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.zh")})},model:{value:e.form.price["zh-cn"],callback:function(t){e.$set(e.form.price,"zh-cn",t)},expression:"form.price['zh-cn']"}},[o("template",{slot:"append"},[e._v("¥")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.en"),name:e.$t("commodity.price.title")}),prop:"price.en-us",rules:{required:!0,message:""+e.$t("lang.price.en")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.en")})},model:{value:e.form.price["en-us"],callback:function(t){e.$set(e.form.price,"en-us",t)},expression:"form.price['en-us']"}},[o("template",{slot:"append"},[e._v("$")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.ja"),name:e.$t("commodity.price.title")}),prop:"price.ja-jp",rules:{required:!0,message:""+e.$t("lang.price.ja")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.ja")})},model:{value:e.form.price["ja-jp"],callback:function(t){e.$set(e.form.price,"ja-jp",t)},expression:"form.price['ja-jp']"}},[o("template",{slot:"append"},[e._v("￥")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.es"),name:e.$t("commodity.price.title")}),prop:"price.es-es",rules:{required:!0,message:""+e.$t("lang.price.es")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.es")})},model:{value:e.form.price["es-es"],callback:function(t){e.$set(e.form.price,"es-es",t)},expression:"form.price['es-es']"}},[o("template",{slot:"append"},[e._v("€")])],2)],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("commodity.width.title"),prop:"width",rules:{required:!0,message:""+e.$t("commodity.width.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"input",placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.width.title")})},model:{value:e.form.width,callback:function(t){e.$set(e.form,"width",t)},expression:"form.width"}},[o("template",{slot:"append"},[e._v("cm")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("commodity.height.title"),prop:"height",rules:{required:!0,message:""+e.$t("commodity.height.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"input",placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.height.title")})},model:{value:e.form.height,callback:function(t){e.$set(e.form,"height",t)},expression:"form.height"}},[o("template",{slot:"append"},[e._v("cm")])],2)],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.category"),prop:"category",rules:{required:!1,message:""+e.$t("commodity.category")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.categorys,callback:function(t){e.$set(e.form,"categorys",t)},expression:"form.categorys"}},e._l(e.categorys,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.categorys[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.classification"),prop:"classifications",rules:{required:!1,message:""+e.$t("commodity.classification")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.classifications,callback:function(t){e.$set(e.form,"classifications",t)},expression:"form.classifications"}},e._l(e.classifications,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.classifications[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.material"),prop:"materials",rules:{required:!1,message:""+e.$t("commodity.material")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.materials,callback:function(t){e.$set(e.form,"materials",t)},expression:"form.materials"}},e._l(e.materials,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.materials[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.model"),prop:"models",rules:{required:!1,message:""+e.$t("commodity.model")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.models,callback:function(t){e.$set(e.form,"models",t)},expression:"form.models"}},e._l(e.models,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.models[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.place"),prop:"places",rules:{required:!1,message:""+e.$t("commodity.place")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.places,callback:function(t){e.$set(e.form,"places",t)},expression:"form.places"}},e._l(e.places,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.places[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.ruiwu"),prop:"ruiwus",rules:{required:!1,message:""+e.$t("commodity.ruiwu")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.ruiwus,callback:function(t){e.$set(e.form,"ruiwus",t)},expression:"form.ruiwus"}},e._l(e.ruiwus,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.ruiwus[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.shape"),prop:"shapes",rules:{required:!1,message:""+e.$t("commodity.shape")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.shapes,callback:function(t){e.$set(e.form,"shapes",t)},expression:"form.shapes"}},e._l(e.shapes,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.shapes[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.specification"),prop:"specifications",rules:{required:!1,message:""+e.$t("commodity.specification")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.specifications,callback:function(t){e.$set(e.form,"specifications",t)},expression:"form.specifications"}},e._l(e.specifications,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.specifications[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.style"),prop:"styles",rules:{required:!1,message:""+e.$t("commodity.style")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.styles,callback:function(t){e.$set(e.form,"styles",t)},expression:"form.styles"}},e._l(e.styles,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.styles[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.technique"),prop:"techniques",rules:{required:!1,message:""+e.$t("commodity.technique")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.techniques,callback:function(t){e.$set(e.form,"techniques",t)},expression:"form.techniques"}},e._l(e.techniques,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.techniques[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.theme"),prop:"themes",rules:{required:!1,message:""+e.$t("commodity.theme")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.themes,callback:function(t){e.$set(e.form,"themes",t)},expression:"form.themes"}},e._l(e.themes,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.themes[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.type"),prop:"types",rules:{required:!1,message:""+e.$t("commodity.type")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.types,callback:function(t){e.$set(e.form,"types",t)},expression:"form.types"}},e._l(e.types,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.types[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.use"),prop:"uses",rules:{required:!1,message:""+e.$t("commodity.use")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.uses,callback:function(t){e.$set(e.form,"uses",t)},expression:"form.uses"}},e._l(e.uses,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.options.uses[r].name)+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.color.title")}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{prop:"colors[0].startColor",label:"开始颜色",rules:{required:!1,message:""+e.$t("commodity.color.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-color-picker",{model:{value:e.form.colors[0].startColor,callback:function(t){e.$set(e.form.colors[0],"startColor",t)},expression:"form.colors[0].startColor"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{prop:"colors[0].endColor",label:"结束颜色",rules:{required:!1,message:""+e.$t("commodity.color.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-color-picker",{model:{value:e.form.colors[0].endColor,callback:function(t){e.$set(e.form.colors[0],"endColor",t)},expression:"form.colors[0].endColor"}})],1)],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.photo")}},[o("el-upload",{staticClass:"commodity-photo",attrs:{"file-list":e.form.photos,action:e.$config.origin+"/api/upload/images",data:{type:"commodity"},"list-type":"picture-card","on-preview":e.uploadPreview,"on-remove":e.uploadRemove,"on-success":e.uploadSuccess,"before-upload":e.beforeUpload}},[o("i",{staticClass:"el-icon-plus"}),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n        艺术品图片，请上传 768X400 比例的图片，且不超过2M\n      ")])]),e._v(" "),o("el-dialog",{attrs:{visible:e.dialogVisible,center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("img",{attrs:{width:"768px",height:"400px",src:e.dialogImageUrl,alt:""}}),e._v(" "),o("p",[e._v("图片尺寸：768X400")])])],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:e.$t("commodity.state.title"),prop:"state"}},[o("el-radio-group",{model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},[o("el-radio",{attrs:{label:0}},[e._v(e._s(e.$t("commodity.state.added")))]),e._v(" "),o("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("commodity.state.onsale")))]),e._v(" "),o("el-radio",{attrs:{label:2}},[e._v(e._s(e.$t("commodity.state.sold")))]),e._v(" "),o("el-radio",{attrs:{label:3}},[e._v(e._s(e.$t("commodity.state.offline")))])],1)],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.seller")}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:8}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.id")})},model:{value:e.form.sellerId,callback:function(t){e.$set(e.form,"sellerId",t)},expression:"form.sellerId"}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);