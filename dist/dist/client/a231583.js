(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{396:function(e,t,o){"use strict";var r=o(4),n=o(163),c=o(64),l=o(16),m=o(34),f=o(164),d=o(108),h=o(81),y=o(23),$=h("splice"),v=y("splice",{ACCESSORS:!0,0:0,1:2}),x=Math.max,k=Math.min;r({target:"Array",proto:!0,forced:!$||!v},{splice:function(e,t){var o,r,h,y,$,v,_=m(this),w=l(_.length),E=n(e,w),j=arguments.length;if(0===j?o=r=0:1===j?(o=0,r=w-E):(o=j-2,r=k(x(c(t),0),w-E)),w+o-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=f(_,r),y=0;y<r;y++)($=E+y)in _&&d(h,y,_[$]);if(h.length=r,o<r){for(y=E;y<w-r;y++)v=y+o,($=y+r)in _?_[v]=_[$]:delete _[v];for(y=w;y>w-r+o;y--)delete _[y-1]}else if(o>r)for(y=w-r;y>E;y--)v=y+o-1,($=y+r-1)in _?_[v]=_[$]:delete _[v];for(y=0;y<o;y++)_[y+E]=arguments[y+2];return _.length=w-r+o,h}})},440:function(e,t,o){"use strict";o.r(t);o(46),o(47),o(30),o(396),o(19),o(165),o(48);var r=o(8),n=(o(15),o(3)),c=o(401),l=o.n(c),m={data:function(){return{type:"",typeText:this.$t("content.create"),isCreate:!0,form:{},dialogImageUrl:"",dialogVisible:!1,loading:!1,options:{categorys:[],classifications:[],materials:[],models:[],places:[],ruiwus:[],shapes:[],specifications:[],styles:[],techniques:[],themes:[],types:[],uses:[],state:[{index:0,name:this.$t("commodity.state.added")},{index:1,name:this.$t("commodity.state.onsale")},{index:2,name:this.$t("commodity.state.sold")},{index:3,name:this.$t("commodity.state.offline")}]},categorys:[],classifications:[],materials:[],models:[],places:[],ruiwus:[],shapes:[],specifications:[],styles:[],techniques:[],themes:[],types:[],uses:[]}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,r,n,c,l,m,f,d,h,y,$,v,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/admin/commodity/retrieve/category");case 2:return(o=t.sent).data&&o.data.length&&(e.categorys=o.data,e.options.categorys=[],o.data.forEach((function(t){e.options.categorys.push(t.id)}))),t.next=6,e.$axios.$get("/api/admin/commodity/retrieve/classification");case 6:return(r=t.sent).data&&r.data.length&&(e.classifications=r.data,e.options.classifications=[],r.data.forEach((function(t){e.options.classifications.push(t.id)}))),t.next=10,e.$axios.$get("/api/admin/commodity/retrieve/material");case 10:return(n=t.sent).data&&n.data.length&&(e.materials=n.data,e.options.materials=[],n.data.forEach((function(t){e.options.materials.push(t.id)}))),t.next=14,e.$axios.$get("/api/admin/commodity/retrieve/model");case 14:return(c=t.sent).data&&c.data.length&&(e.models=c.data,e.options.models=[],c.data.forEach((function(t){e.options.models.push(t.id)}))),t.next=18,e.$axios.$get("/api/admin/commodity/retrieve/place");case 18:return(l=t.sent).data&&l.data.length&&(e.places=l.data,e.options.places=[],l.data.forEach((function(t){e.options.places.push(t.id)}))),t.next=22,e.$axios.$get("/api/admin/commodity/retrieve/ruiwu");case 22:return(m=t.sent).data&&m.data.length&&(e.ruiwus=m.data,e.options.ruiwus=[],m.data.forEach((function(t){e.options.ruiwus.push(t.id)}))),t.next=26,e.$axios.$get("/api/admin/commodity/retrieve/shape");case 26:return(f=t.sent).data&&f.data.length&&(e.shapes=f.data,e.options.shapes=[],f.data.forEach((function(t){e.options.shapes.push(t.id)}))),t.next=30,e.$axios.$get("/api/admin/commodity/retrieve/specification");case 30:return(d=t.sent).data&&d.data.length&&(e.specifications=d.data,e.options.specifications=[],d.data.forEach((function(t){e.options.specifications.push(t.id)}))),t.next=34,e.$axios.$get("/api/admin/commodity/retrieve/style");case 34:return(h=t.sent).data&&h.data.length&&(e.styles=h.data,e.options.styles=[],h.data.forEach((function(t){e.options.styles.push(t.id)}))),t.next=38,e.$axios.$get("/api/admin/commodity/retrieve/technique");case 38:return(y=t.sent).data&&y.data.length&&(e.techniques=y.data,e.options.techniques=[],y.data.forEach((function(t){e.options.techniques.push(t.id)}))),t.next=42,e.$axios.$get("/api/admin/commodity/retrieve/theme");case 42:return($=t.sent).data&&$.data.length&&(e.themes=$.data,e.options.themes=[],$.data.forEach((function(t){e.options.themes.push(t.id)}))),t.next=46,e.$axios.$get("/api/admin/commodity/retrieve/type");case 46:return(v=t.sent).data&&v.data.length&&(e.types=v.data,e.options.types=[],v.data.forEach((function(t){e.options.types.push(t.id)}))),t.next=50,e.$axios.$get("/api/admin/commodity/retrieve/use");case 50:(x=t.sent).data&&x.data.length&&(e.uses=x.data,e.options.uses=[],x.data.forEach((function(t){e.options.uses.push(t.id)}))),console.log("this.options",e.options);case 53:case"end":return t.stop()}}),t)})))()},computed:{},watch:{"$route.query":"$fetch"},watchQuery:["commodityId"],created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isCreate=!0,e.reset(),!e.$route.query||!e.$route.query.commodityId){t.next=7;break}return t.next=5,e.$axios.$get("/api/admin/commodity/edit",{params:{commodityId:e.$route.query.commodityId}});case 5:(o=t.sent).success&&(r=o.data,console.log("commodityForm",r),e.form.commodityId=e.$route.query.commodityId,e.form.state=r.state,e.form.width=r.width,e.form.height=r.height,e.form.colors=r.colors,r.name&&(e.form.name=r.name),r.desc&&(e.form.desc=r.desc),r.price&&(e.form.price=r.price),r.photos&&(n=r.photos.map((function(e){return e.url=e.src,e})),e.form.photos=n),e.form.categorys=[],e.categorys&&e.categorys.length&&r.categorys&&r.categorys.length&&r.categorys.forEach((function(t){e.categorys.forEach((function(o){t.optionId==o.id&&e.form.categorys.push(t.optionId)}))})),console.log(e.form.categorys),e.form.classifications=[],console.log("this.classifications",e.classifications),console.log("commodityForm.classifications",r.classifications),e.classifications&&e.classifications.length&&r.classifications&&r.classifications.length&&r.classifications.forEach((function(t){e.classifications.forEach((function(o){t.optionId==o.id&&(console.log("item1",t),e.form.classifications.push(t.optionId))}))})),console.log("this.form.classifications",e.form.classifications),e.form.materials=[],e.materials&&e.materials.length&&r.materials&&r.materials.length&&r.materials.forEach((function(t){e.materials.forEach((function(o){t.optionId==o.id&&e.form.materials.push(t.optionId)}))})),e.form.models=[],e.models&&e.models.length&&r.models&&r.models.length&&r.models.forEach((function(t){e.models.forEach((function(o){t.optionId==o.id&&e.form.models.push(t.optionId)}))})),e.form.places=[],e.places&&e.places.length&&r.places&&r.places.length&&r.places.forEach((function(t){e.places.forEach((function(o){t.optionId==o.id&&e.form.places.push(t.optionId)}))})),e.form.ruiwus=[],e.ruiwus&&e.ruiwus.length&&r.ruiwus&&r.ruiwus.length&&r.ruiwus.forEach((function(t){e.ruiwus.forEach((function(o){t.optionId==o.id&&e.form.ruiwus.push(t.optionId)}))})),e.form.shapes=[],e.shapes&&e.shapes.length&&r.shapes&&r.shapes.length&&r.shapes.forEach((function(t){e.shapes.forEach((function(o){t.optionId==o.id&&e.form.shapes.push(t.optionId)}))})),e.form.specifications=[],e.specifications&&e.specifications.length&&r.specifications&&r.specifications.length&&r.specifications.forEach((function(t){e.specifications.forEach((function(o){t.optionId==o.id&&e.form.specifications.push(t.optionId)}))})),e.form.styles=[],e.styles&&e.styles.length&&r.styles&&r.styles.length&&r.styles.forEach((function(t){e.styles.forEach((function(o){t.optionId==o.id&&e.form.styles.push(t.optionId)}))})),e.form.techniques=[],e.techniques&&e.techniques.length&&r.techniques&&r.techniques.length&&r.techniques.forEach((function(t){e.techniques.forEach((function(o){t.optionId==o.id&&e.form.techniques.push(t.optionId)}))})),e.form.themes=[],e.themes&&e.themes.length&&r.themes&&r.themes.length&&r.themes.forEach((function(t){e.themes.forEach((function(o){t.optionId==o.id&&e.form.themes.push(t.optionId)}))})),e.form.types=[],e.types&&e.types.length&&r.types&&r.types.length&&r.types.forEach((function(t){e.types.forEach((function(o){t.optionId==o.id&&e.form.types.push(t.optionId)}))})),e.form.uses=[],e.uses&&e.uses.length&&r.uses&&r.uses.length&&r.uses.forEach((function(t){e.uses.forEach((function(o){t.optionId==o.id&&e.form.uses.push(t.optionId)}))})),r.seller&&(e.form.sellerId=r.seller.sellerId),e.type="edit",e.typeText=e.$t("content.update"),e.isCreate=!1);case 7:console.log("this.form",e.form);case 8:case"end":return t.stop()}}),t)})))()},mounted:function(){},methods:{onSubmit:function(e){var t=this;console.log("submit!",this.form),this.$refs[e].validate(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(o){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=12;break}if(!t.isCreate){e.next=7;break}return e.next=4,t.$axios.$post("/api/admin/commodity/create",t.form).catch((function(e){t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"! ").concat(e.response.data.message),type:"error"})}));case 4:data=e.sent,e.next=11;break;case 7:return console.log("this.form",t.form),e.next=10,t.$axios.$post("/api/admin/commodity/update",t.form).catch((function(e){t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"! ").concat(e.response.data.message),type:"error"})}));case 10:data=e.sent;case 11:200===data.status?(t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.success")),type:"success"}),t.isCreate&&t.resetForm("form")):t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"!").concat(data.message),type:"error"});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onMock:function(){if(this.categorys.length&&this.classifications.length&&this.materials.length&&this.models.length&&this.places.length&&this.ruiwus.length&&this.shapes.length&&this.specifications.length&&this.styles.length&&this.techniques.length&&this.themes.length&&this.types.length&&this.uses.length){var e={commodityId:this.form.commodityId,name:{"zh-cn":l.a.mock("@ctitle(2, 8)"),"en-us":l.a.mock("@title(2)"),"ja-jp":"ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう","es-es":"zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix"},desc:{"zh-cn":l.a.mock("@cparagraph(1,3)"),"en-us":l.a.mock("@paragraph(1,3)"),"ja-jp":"ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう","es-es":"zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix"},price:{"zh-cn":l.a.mock("@integer(60, 100)"),"en-us":l.a.mock("@integer(60, 100)"),"ja-jp":l.a.mock("@integer(60, 100)"),"es-es":l.a.mock("@integer(60, 100)")},categorys:[this.options.categorys[l.a.mock("@integer(0,".concat(this.options.categorys.length-1,")"))]],classifications:[this.options.classifications[l.a.mock("@integer(0,".concat(this.options.classifications.length-1,")"))]],materials:[this.options.materials[l.a.mock("@integer(0,".concat(this.options.materials.length-1,")"))]],models:[this.options.models[l.a.mock("@integer(0,".concat(this.options.models.length-1,")"))]],places:[this.options.places[l.a.mock("@integer(0,".concat(this.options.places.length-1,")"))]],ruiwus:[this.options.ruiwus[l.a.mock("@integer(0,".concat(this.options.ruiwus.length-1,")"))]],shapes:[this.options.shapes[l.a.mock("@integer(0,".concat(this.options.shapes.length-1,")"))]],specifications:[this.options.specifications[l.a.mock("@integer(0,".concat(this.options.specifications.length-1,")"))]],styles:[this.options.styles[l.a.mock("@integer(0,".concat(this.options.styles.length-1,")"))]],techniques:[this.options.techniques[l.a.mock("@integer(0,".concat(this.options.techniques.length-1,")"))]],themes:[this.options.themes[l.a.mock("@integer(0,".concat(this.options.themes.length-1,")"))]],types:[this.options.types[l.a.mock("@integer(0,".concat(this.options.types.length-1,")"))]],uses:[this.options.uses[l.a.mock("@integer(0,".concat(this.options.uses.length-1,")"))]],photos:[],colors:[{startColor:"#fff",endColor:"#000"}],width:l.a.mock("@natural(100, 300)"),height:l.a.mock("@natural(100, 300)"),state:l.a.mock("@integer(0, 3)"),sellerId:""};console.log("createCommodityMock",e),this.form=e,this.type="create",this.typeText=this.$t("content.create"),this.isCreate=!0}else this.$message({showClose:!0,message:"请先添加艺术品选项",type:"error"})},resetForm:function(e){this.reset(),this.type="create",this.typeText=this.$t("content.create"),this.isCreate=!0,this.$refs[e].clearValidate()},reset:function(){this.form={name:{"zh-cn":"","en-us":"","ja-jp":"","es-es":""},desc:{"zh-cn":"","en-us":"","ja-jp":"","es-es":""},price:{"zh-cn":"","en-us":"","ja-jp":"","es-es":""},categorys:[],classifications:[],materials:[],models:[],places:[],ruiwus:[],shapes:[],specifications:[],styles:[],techniques:[],themes:[],types:[],uses:[],photos:[],colors:[{startColor:"#fff",endColor:"#000"}],width:"",height:"",state:0,sellerId:""}},uploadSuccess:function(e,t){console.log(e,t),this.form.photos.push({src:e.data.src,url:e.data.src,name:t.name,uid:t.uid})},uploadRemove:function(e,t){for(var o=0,n=Object.entries(this.form.photos);o<n.length;o++){var c=Object(r.a)(n[o],2),l=c[0];c[1].uid===e.uid&&this.form.photos.splice(l,1)}},uploadPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},f=o(14),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"108px"}},[o("el-form-item",[e.isCreate?o("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("\n      "+e._s(e.$t("content.create"))+"\n    ")]):o("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("\n      "+e._s(e.$t("content.update"))+"\n    ")]),e._v(" "),o("el-button",{attrs:{icon:"el-icon-check"},on:{click:e.onMock}},[e._v("\n      "+e._s(e.$t("content.fill"))+"\n    ")]),e._v(" "),o("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(t){return e.resetForm("form")}}},[e._v(e._s(e.$t("content.clear")))])],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.name")}),prop:"name.zh-cn",rules:{required:!0,message:""+e.$t("lang.zh")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.zh")})},model:{value:e.form.name["zh-cn"],callback:function(t){e.$set(e.form.name,"zh-cn",t)},expression:"form.name['zh-cn']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.name")}),prop:"name.en-us",rules:{required:!0,message:""+e.$t("lang.en")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.en")})},model:{value:e.form.name["en-us"],callback:function(t){e.$set(e.form.name,"en-us",t)},expression:"form.name['en-us']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.name")}),prop:"name.ja-jp",rules:{required:!0,message:""+e.$t("lang.ja")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.ja")})},model:{value:e.form.name["ja-jp"],callback:function(t){e.$set(e.form.name,"ja-jp",t)},expression:"form.name['ja-jp']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.name")}),prop:"name.es-es",rules:{required:!0,message:""+e.$t("lang.es")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.es")})},model:{value:e.form.name["es-es"],callback:function(t){e.$set(e.form.name,"es-es",t)},expression:"form.name['es-es']"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.desc")}),prop:"desc.zh-cn",rules:{required:!0,message:""+e.$t("lang.zh")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.zh")})},model:{value:e.form.desc["zh-cn"],callback:function(t){e.$set(e.form.desc,"zh-cn",t)},expression:"form.desc['zh-cn']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.desc")}),prop:"desc.en-us",rules:{required:!0,message:""+e.$t("lang.en")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.en")})},model:{value:e.form.desc["en-us"],callback:function(t){e.$set(e.form.desc,"en-us",t)},expression:"form.desc['en-us']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.desc")}),prop:"desc.ja-jp",rules:{required:!0,message:""+e.$t("lang.ja")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.ja")})},model:{value:e.form.desc["ja-jp"],callback:function(t){e.$set(e.form.desc,"ja-jp",t)},expression:"form.desc['ja-jp']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.desc")}),prop:"desc.es-es",rules:{required:!0,message:""+e.$t("lang.es")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.es")})},model:{value:e.form.desc["es-es"],callback:function(t){e.$set(e.form.desc,"es-es",t)},expression:"form.desc['es-es']"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.zh"),name:e.$t("commodity.price.title")}),prop:"price.zh-cn",rules:{required:!0,message:""+e.$t("lang.price.zh")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.zh")})},model:{value:e.form.price["zh-cn"],callback:function(t){e.$set(e.form.price,"zh-cn",t)},expression:"form.price['zh-cn']"}},[o("template",{slot:"append"},[e._v("¥")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.en"),name:e.$t("commodity.price.title")}),prop:"price.en-us",rules:{required:!0,message:""+e.$t("lang.price.en")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.en")})},model:{value:e.form.price["en-us"],callback:function(t){e.$set(e.form.price,"en-us",t)},expression:"form.price['en-us']"}},[o("template",{slot:"append"},[e._v("$")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.ja"),name:e.$t("commodity.price.title")}),prop:"price.ja-jp",rules:{required:!0,message:""+e.$t("lang.price.ja")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.ja")})},model:{value:e.form.price["ja-jp"],callback:function(t){e.$set(e.form.price,"ja-jp",t)},expression:"form.price['ja-jp']"}},[o("template",{slot:"append"},[e._v("￥")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.es"),name:e.$t("commodity.price.title")}),prop:"price.es-es",rules:{required:!0,message:""+e.$t("lang.price.es")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.es")})},model:{value:e.form.price["es-es"],callback:function(t){e.$set(e.form.price,"es-es",t)},expression:"form.price['es-es']"}},[o("template",{slot:"append"},[e._v("€")])],2)],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("commodity.width.title"),prop:"width",rules:{required:!0,message:""+e.$t("commodity.width.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"input",placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.width.title")})},model:{value:e.form.width,callback:function(t){e.$set(e.form,"width",t)},expression:"form.width"}},[o("template",{slot:"append"},[e._v("cm")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("commodity.height.title"),prop:"height",rules:{required:!0,message:""+e.$t("commodity.height.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"input",placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.height.title")})},model:{value:e.form.height,callback:function(t){e.$set(e.form,"height",t)},expression:"form.height"}},[o("template",{slot:"append"},[e._v("cm")])],2)],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.category"),prop:"category",rules:{required:!1,message:""+e.$t("commodity.category")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.categorys,callback:function(t){e.$set(e.form,"categorys",t)},expression:"form.categorys"}},e._l(e.options.categorys,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n      "+e._s(e.categorys[r]["zh-cn"])+"\n    ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.classification"),prop:"classifications",rules:{required:!1,message:""+e.$t("commodity.classification")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.classifications,callback:function(t){e.$set(e.form,"classifications",t)},expression:"form.classifications"}},e._l(e.options.classifications,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.classifications[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.material"),prop:"materials",rules:{required:!1,message:""+e.$t("commodity.material")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.materials,callback:function(t){e.$set(e.form,"materials",t)},expression:"form.materials"}},e._l(e.options.materials,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.materials[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.model"),prop:"models",rules:{required:!1,message:""+e.$t("commodity.model")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.models,callback:function(t){e.$set(e.form,"models",t)},expression:"form.models"}},e._l(e.options.models,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.models[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.place"),prop:"places",rules:{required:!1,message:""+e.$t("commodity.place")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.places,callback:function(t){e.$set(e.form,"places",t)},expression:"form.places"}},e._l(e.options.places,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.places[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.ruiwu"),prop:"ruiwus",rules:{required:!1,message:""+e.$t("commodity.ruiwu")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.ruiwus,callback:function(t){e.$set(e.form,"ruiwus",t)},expression:"form.ruiwus"}},e._l(e.options.ruiwus,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.ruiwus[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.shape"),prop:"shapes",rules:{required:!1,message:""+e.$t("commodity.shape")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.shapes,callback:function(t){e.$set(e.form,"shapes",t)},expression:"form.shapes"}},e._l(e.options.shapes,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.shapes[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.specification"),prop:"specifications",rules:{required:!1,message:""+e.$t("commodity.specification")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.specifications,callback:function(t){e.$set(e.form,"specifications",t)},expression:"form.specifications"}},e._l(e.options.specifications,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.specifications[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.style"),prop:"styles",rules:{required:!1,message:""+e.$t("commodity.style")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.styles,callback:function(t){e.$set(e.form,"styles",t)},expression:"form.styles"}},e._l(e.options.styles,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.styles[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.technique"),prop:"techniques",rules:{required:!1,message:""+e.$t("commodity.technique")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.techniques,callback:function(t){e.$set(e.form,"techniques",t)},expression:"form.techniques"}},e._l(e.options.techniques,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.techniques[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.theme"),prop:"themes",rules:{required:!1,message:""+e.$t("commodity.theme")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.themes,callback:function(t){e.$set(e.form,"themes",t)},expression:"form.themes"}},e._l(e.options.themes,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n            "+e._s(e.themes[r]["zh-cn"])+"\n          ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.type"),prop:"types",rules:{required:!1,message:""+e.$t("commodity.type")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.types,callback:function(t){e.$set(e.form,"types",t)},expression:"form.types"}},e._l(e.options.types,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.types[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.use"),prop:"uses",rules:{required:!1,message:""+e.$t("commodity.use")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-checkbox-group",{model:{value:e.form.uses,callback:function(t){e.$set(e.form,"uses",t)},expression:"form.uses"}},e._l(e.options.uses,(function(t,r){return o("el-checkbox",{key:r,attrs:{name:"type",label:t}},[e._v("\n        "+e._s(e.uses[r]["zh-cn"])+"\n      ")])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.color.title")}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{prop:"colors[0].startColor",label:"开始颜色",rules:{required:!1,message:""+e.$t("commodity.color.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-color-picker",{model:{value:e.form.colors[0].startColor,callback:function(t){e.$set(e.form.colors[0],"startColor",t)},expression:"form.colors[0].startColor"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{prop:"colors[0].endColor",label:"结束颜色",rules:{required:!1,message:""+e.$t("commodity.color.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-color-picker",{model:{value:e.form.colors[0].endColor,callback:function(t){e.$set(e.form.colors[0],"endColor",t)},expression:"form.colors[0].endColor"}})],1)],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.photo")}},[o("el-upload",{attrs:{"file-list":e.form.photos,action:e.$config.origin+"/api/upload/images",data:{type:"commodity"},"list-type":"picture-card","on-preview":e.uploadPreview,"on-remove":e.uploadRemove,"on-success":e.uploadSuccess}},[o("i",{staticClass:"el-icon-plus"}),e._v(" "),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("艺术品图片，请上传 768X400 比例的图片")])]),e._v(" "),o("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:e.$t("commodity.state.title"),prop:"state"}},[o("el-radio-group",{model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},[o("el-radio",{attrs:{label:0}},[e._v(e._s(e.$t("commodity.state.added")))]),e._v(" "),o("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("commodity.state.onsale")))]),e._v(" "),o("el-radio",{attrs:{label:2}},[e._v(e._s(e.$t("commodity.state.sold")))]),e._v(" "),o("el-radio",{attrs:{label:3}},[e._v(e._s(e.$t("commodity.state.offline")))])],1)],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.seller")}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:8}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.id")})},model:{value:e.form.sellerId,callback:function(t){e.$set(e.form,"sellerId",t)},expression:"form.sellerId"}})],1)],1)],1)],1)}),[],!1,null,"0895a3db",null);t.default=component.exports}}]);