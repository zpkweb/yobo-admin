(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{396:function(e,t,o){"use strict";var r=o(4),n=o(163),l=o(64),c=o(16),m=o(34),d=o(164),h=o(108),f=o(81),$=o(23),y=f("splice"),_=$("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,j=Math.min;r({target:"Array",proto:!0,forced:!y||!_},{splice:function(e,t){var o,r,f,$,y,_,x=m(this),k=c(x.length),z=n(e,k),w=arguments.length;if(0===w?o=r=0:1===w?(o=0,r=k-z):(o=w-2,r=j(v(l(t),0),k-z)),k+o-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(f=d(x,r),$=0;$<r;$++)(y=z+$)in x&&h(f,$,x[y]);if(f.length=r,o<r){for($=z;$<k-r;$++)_=$+o,(y=$+r)in x?x[_]=x[y]:delete x[_];for($=k;$>k-r+o;$--)delete x[$-1]}else if(o>r)for($=k-r;$>z;$--)_=$+o-1,(y=$+r-1)in x?x[_]=x[y]:delete x[_];for($=0;$<o;$++)x[$+z]=arguments[$+2];return x.length=k-r+o,f}})},443:function(e,t,o){"use strict";o.r(t);o(46),o(30),o(396),o(19),o(165);var r=o(8),n=(o(15),o(3)),l=o(401),c=o.n(l),m={fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,r,n,l,c,m,d,h,f,$,y,_,v,j,x,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isCreate=!0,e.reset(),t.next=4,e.$axios.$get("/api/admin/commodity/retrieve/category");case 4:return(o=t.sent).data&&o.data.length&&e.$store.commit("addCommodityOpitons",{type:"categorys",data:o.data}),t.next=8,e.$axios.$get("/api/admin/commodity/retrieve/classification");case 8:return(r=t.sent).data&&r.data.length&&e.$store.commit("addCommodityOpitons",{type:"classifications",data:r.data}),t.next=12,e.$axios.$get("/api/admin/commodity/retrieve/material");case 12:return(n=t.sent).data&&n.data.length&&e.$store.commit("addCommodityOpitons",{type:"materials",data:n.data}),t.next=16,e.$axios.$get("/api/admin/commodity/retrieve/model");case 16:return(l=t.sent).data&&l.data.length&&e.$store.commit("addCommodityOpitons",{type:"models",data:l.data}),t.next=20,e.$axios.$get("/api/admin/commodity/retrieve/place");case 20:return(c=t.sent).data&&c.data.length&&e.$store.commit("addCommodityOpitons",{type:"places",data:c.data}),t.next=24,e.$axios.$get("/api/admin/commodity/retrieve/ruiwu");case 24:return(m=t.sent).data&&m.data.length&&e.$store.commit("addCommodityOpitons",{type:"ruiwus",data:m.data}),t.next=28,e.$axios.$get("/api/admin/commodity/retrieve/shape");case 28:return(d=t.sent).data&&d.data.length&&e.$store.commit("addCommodityOpitons",{type:"shapes",data:d.data}),t.next=32,e.$axios.$get("/api/admin/commodity/retrieve/specification");case 32:return(h=t.sent).data&&h.data.length&&e.$store.commit("addCommodityOpitons",{type:"specifications",data:h.data}),t.next=36,e.$axios.$get("/api/admin/commodity/retrieve/style");case 36:return(f=t.sent).data&&f.data.length&&e.$store.commit("addCommodityOpitons",{type:"styles",data:f.data}),t.next=40,e.$axios.$get("/api/admin/commodity/retrieve/technique");case 40:return($=t.sent).data&&$.data.length&&e.$store.commit("addCommodityOpitons",{type:"techniques",data:$.data}),t.next=44,e.$axios.$get("/api/admin/commodity/retrieve/theme");case 44:return(y=t.sent).data&&y.data.length&&e.$store.commit("addCommodityOpitons",{type:"themes",data:y.data}),t.next=48,e.$axios.$get("/api/admin/commodity/retrieve/type");case 48:return(_=t.sent).data&&_.data.length&&e.$store.commit("addCommodityOpitons",{type:"types",data:_.data}),t.next=52,e.$axios.$get("/api/admin/commodity/retrieve/use");case 52:if((v=t.sent).data&&v.data.length&&e.$store.commit("addCommodityOpitons",{type:"uses",data:v.data}),!e.$route.query||!e.$route.query.commodityId){t.next=60;break}return e.form.commodityId=e.$route.query.commodityId,t.next=58,e.$axios.$get("/api/admin/commodity/edit",{params:{commodityId:e.form.commodityId}});case 58:(j=t.sent).success&&(x=Object.assign({},e.form,j.data),console.log("commodityForm",x),e.form.state=x.state,e.form.width=x.width,e.form.height=x.height,e.form.colors=x.colors,x.name&&(e.form.name=x.name),x.desc&&(e.form.desc=x.desc),x.price&&(e.form.price=x.price),x.photos&&(k=x.photos.map((function(e){return e.url=e.src,e})),e.form.photos=k),x.categorys&&x.categorys.length&&(e.form.categorys=x.categorys),x.classifications&&x.classifications.length&&(e.form.classifications=x.classifications),x.materials&&x.materials.length&&(e.form.materials=x.materials),x.models&&x.models.length&&(e.form.models=x.models),x.places&&x.places.length&&(e.form.places=x.places),x.ruiwus&&x.ruiwus.length&&(e.form.ruiwus=x.ruiwus),x.shapes&&x.shapes.length&&(e.form.shapes=x.shapes),x.specifications&&x.specifications.length&&(e.form.specifications=x.specifications),x.styles&&x.styles.length&&(e.form.styles=x.styles),x.techniques&&x.techniques.length&&(e.form.techniques=x.techniques),x.themes&&x.themes.length&&(e.form.themes=x.themes),x.types&&x.types.length&&(e.form.types=x.types),x.uses&&x.uses.length&&(e.form.uses=x.uses),x.seller&&(e.form.sellerId=x.seller.sellerId),console.log("this.form",e.form),e.type="edit",e.typeText=e.$t("content.update"),e.isCreate=!1);case 60:case"end":return t.stop()}}),t)})))()},data:function(){return{type:"",typeText:this.$t("content.create"),isCreate:!0,form:{},dialogImageUrl:"",dialogVisible:!1,loading:!1}},computed:{categorys:function(){return this.$store.state.commodity.options.categorys},classifications:function(){return this.$store.state.commodity.options.classifications},materials:function(){return this.$store.state.commodity.options.materials},models:function(){return this.$store.state.commodity.options.models},places:function(){return this.$store.state.commodity.options.places},ruiwus:function(){return this.$store.state.commodity.options.ruiwus},shapes:function(){return this.$store.state.commodity.options.shapes},specifications:function(){return this.$store.state.commodity.options.specifications},styles:function(){return this.$store.state.commodity.options.styles},techniques:function(){return this.$store.state.commodity.options.techniques},themes:function(){return this.$store.state.commodity.options.themes},types:function(){return this.$store.state.commodity.options.types},uses:function(){return this.$store.state.commodity.options.uses}},watch:{"$route.query":"$fetch"},watchQuery:["commodityId"],mounted:function(){},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(o){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=11;break}if(!t.isCreate){e.next=7;break}return e.next=4,t.$axios.$post("/api/admin/commodity/create",t.form).catch((function(e){t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"! ").concat(e.response.data.message),type:"error"})}));case 4:data=e.sent,e.next=10;break;case 7:return e.next=9,t.$axios.$post("/api/admin/commodity/update",t.form).catch((function(e){t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"! ").concat(e.response.data.message),type:"error"})}));case 9:data=e.sent;case 10:200===data.status?(t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.success")),type:"success"}),t.isCreate&&t.resetForm("form")):t.$message({showClose:!0,message:"".concat(t.typeText).concat(t.$t("content.fail"),"!").concat(data.message),type:"error"});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onMock:function(){if(this.categorys.length&&this.classifications.length&&this.materials.length&&this.models.length&&this.places.length&&this.ruiwus.length&&this.shapes.length&&this.specifications.length&&this.styles.length&&this.techniques.length&&this.themes.length&&this.types.length&&this.uses.length){var e={commodityId:this.form.commodityId,name:{"zh-cn":c.a.mock("@ctitle(2, 8)"),"en-us":c.a.mock("@title(2)"),"ja-jp":"ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう","es-es":"zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix"},desc:{"zh-cn":c.a.mock("@cparagraph(1,3)"),"en-us":c.a.mock("@paragraph(1,3)"),"ja-jp":"ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう","es-es":"zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix"},price:{"zh-cn":c.a.mock("@integer(60, 100)"),"en-us":c.a.mock("@integer(60, 100)"),"ja-jp":c.a.mock("@integer(60, 100)"),"es-es":c.a.mock("@integer(60, 100)")},categorys:[this.categorys[c.a.mock("@integer(0,".concat(this.categorys.length-1,")"))]],classifications:[this.classifications[c.a.mock("@integer(0,".concat(this.classifications.length-1,")"))]],materials:[this.materials[c.a.mock("@integer(0,".concat(this.materials.length-1,")"))]],models:[this.models[c.a.mock("@integer(0,".concat(this.models.length-1,")"))]],places:[this.places[c.a.mock("@integer(0,".concat(this.places.length-1,")"))]],ruiwus:[this.ruiwus[c.a.mock("@integer(0,".concat(this.ruiwus.length-1,")"))]],shapes:[this.shapes[c.a.mock("@integer(0,".concat(this.shapes.length-1,")"))]],specifications:[this.specifications[c.a.mock("@integer(0,".concat(this.specifications.length-1,")"))]],styles:[this.styles[c.a.mock("@integer(0,".concat(this.styles.length-1,")"))]],techniques:[this.techniques[c.a.mock("@integer(0,".concat(this.techniques.length-1,")"))]],themes:[this.themes[c.a.mock("@integer(0,".concat(this.themes.length-1,")"))]],types:[this.types[c.a.mock("@integer(0,".concat(this.types.length-1,")"))]],uses:[this.uses[c.a.mock("@integer(0,".concat(this.uses.length-1,")"))]],photos:[],colors:[{name:c.a.mock("@color")}],width:c.a.mock("@natural(100, 300)"),height:c.a.mock("@natural(100, 300)"),state:c.a.mock("@integer(0, 3)"),sellerId:""};this.form=e,this.type="create",this.typeText=this.$t("content.create"),this.isCreate=!0}else this.$message({showClose:!0,message:"请先添加艺术品选项",type:"error"})},resetForm:function(e){this.reset(),this.type="create",this.typeText=this.$t("content.create"),this.isCreate=!0,this.$refs[e].clearValidate()},addColors:function(){this.form.colors.push({name:"#fff"})},reset:function(){this.form={commodityId:"",name:{"zh-cn":"","en-us":"","ja-jp":"","es-es":""},desc:{"zh-cn":"","en-us":"","ja-jp":"","es-es":""},price:{"zh-cn":"","en-us":"","ja-jp":"","es-es":""},categorys:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],classifications:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],materials:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],models:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],places:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],ruiwus:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],shapes:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],specifications:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],styles:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],techniques:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],themes:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],types:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],uses:[{id:"","zh-cn":"","en-us":"","ja-jp":"","es-es":""}],photos:[],colors:[{name:"#fff"}],width:"",height:"",state:0,sellerId:""}},uploadSuccess:function(e,t){this.form.photos.push({src:e.data.src,url:e.data.src,name:t.name})},uploadRemove:function(e,t){for(var o=0,n=Object.entries(this.form.photos);o<n.length;o++){var l=Object(r.a)(n[o],2),c=l[0];l[1].name===e.name&&this.form.photos.splice(c,1)}},uploadPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},d=o(14),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"108px"}},[o("el-form-item",[e.isCreate?o("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("\n      "+e._s(e.$t("content.create"))+"\n    ")]):o("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("\n      "+e._s(e.$t("content.update"))+"\n    ")]),e._v(" "),o("el-button",{attrs:{icon:"el-icon-check"},on:{click:e.onMock}},[e._v("\n      "+e._s(e.$t("content.fill"))+"\n    ")]),e._v(" "),o("el-button",{attrs:{icon:"el-icon-circle-close"},on:{click:function(t){return e.resetForm("form")}}},[e._v(e._s(e.$t("content.clear")))])],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.name")}),prop:"name.zh-cn",rules:{required:!0,message:""+e.$t("lang.zh")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.zh")})},model:{value:e.form.name["zh-cn"],callback:function(t){e.$set(e.form.name,"zh-cn",t)},expression:"form.name['zh-cn']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.name")}),prop:"name.en-us",rules:{required:!0,message:""+e.$t("lang.en")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.en")})},model:{value:e.form.name["en-us"],callback:function(t){e.$set(e.form.name,"en-us",t)},expression:"form.name['en-us']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.name")}),prop:"name.ja-jp",rules:{required:!0,message:""+e.$t("lang.ja")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.ja")})},model:{value:e.form.name["ja-jp"],callback:function(t){e.$set(e.form.name,"ja-jp",t)},expression:"form.name['ja-jp']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.name")}),prop:"name.es-es",rules:{required:!0,message:""+e.$t("lang.es")+e.$t("commodity.name")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.es")})},model:{value:e.form.name["es-es"],callback:function(t){e.$set(e.form.name,"es-es",t)},expression:"form.name['es-es']"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.zh"),name:e.$t("commodity.desc")}),prop:"desc.zh-cn",rules:{required:!0,message:""+e.$t("lang.zh")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.zh")})},model:{value:e.form.desc["zh-cn"],callback:function(t){e.$set(e.form.desc,"zh-cn",t)},expression:"form.desc['zh-cn']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.en"),name:e.$t("commodity.desc")}),prop:"desc.en-us",rules:{required:!0,message:""+e.$t("lang.en")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.en")})},model:{value:e.form.desc["en-us"],callback:function(t){e.$set(e.form.desc,"en-us",t)},expression:"form.desc['en-us']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.ja"),name:e.$t("commodity.desc")}),prop:"desc.ja-jp",rules:{required:!0,message:""+e.$t("lang.ja")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.ja")})},model:{value:e.form.desc["ja-jp"],callback:function(t){e.$set(e.form.desc,"ja-jp",t)},expression:"form.desc['ja-jp']"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.es"),name:e.$t("commodity.desc")}),prop:"desc.es-es",rules:{required:!0,message:""+e.$t("lang.es")+e.$t("commodity.desc")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"textarea",placeholder:e.$t("form.placeholder",{msg:e.$t("lang.es")})},model:{value:e.form.desc["es-es"],callback:function(t){e.$set(e.form.desc,"es-es",t)},expression:"form.desc['es-es']"}})],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.zh"),name:e.$t("commodity.price.title")}),prop:"price.zh-cn",rules:{required:!0,message:""+e.$t("lang.price.zh")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.zh")})},model:{value:e.form.price["zh-cn"],callback:function(t){e.$set(e.form.price,"zh-cn",t)},expression:"form.price['zh-cn']"}},[o("template",{slot:"append"},[e._v("¥")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.en"),name:e.$t("commodity.price.title")}),prop:"price.en-us",rules:{required:!0,message:""+e.$t("lang.price.en")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.en")})},model:{value:e.form.price["en-us"],callback:function(t){e.$set(e.form.price,"en-us",t)},expression:"form.price['en-us']"}},[o("template",{slot:"append"},[e._v("$")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.ja"),name:e.$t("commodity.price.title")}),prop:"price.ja-jp",rules:{required:!0,message:""+e.$t("lang.price.ja")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.ja")})},model:{value:e.form.price["ja-jp"],callback:function(t){e.$set(e.form.price,"ja-jp",t)},expression:"form.price['ja-jp']"}},[o("template",{slot:"append"},[e._v("￥")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:e.$t("langname",{lang:e.$t("lang.price.es"),name:e.$t("commodity.price.title")}),prop:"price.es-es",rules:{required:!0,message:""+e.$t("lang.price.es")+e.$t("commodity.price.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("lang.price.es")})},model:{value:e.form.price["es-es"],callback:function(t){e.$set(e.form.price,"es-es",t)},expression:"form.price['es-es']"}},[o("template",{slot:"append"},[e._v("€")])],2)],1)],1)],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:e.$t("commodity.width.title"),prop:"width",rules:{required:!0,message:""+e.$t("commodity.width.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"input",placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.width.title")})},model:{value:e.form.width,callback:function(t){e.$set(e.form,"width",t)},expression:"form.width"}},[o("template",{slot:"append"},[e._v("cm")])],2)],1)],1),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:e.$t("commodity.height.title"),prop:"height",rules:{required:!0,message:""+e.$t("commodity.height.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-input",{attrs:{type:"input",placeholder:e.$t("form.placeholder",{msg:e.$t("commodity.height.title")})},model:{value:e.form.height,callback:function(t){e.$set(e.form,"height",t)},expression:"form.height"}},[o("template",{slot:"append"},[e._v("cm")])],2)],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.category"),prop:"categorys[0].id",rules:{required:!1,message:""+e.$t("commodity.category")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.category")}),clearable:""},model:{value:e.form.categorys[0].id,callback:function(t){e.$set(e.form.categorys[0],"id",t)},expression:"form.categorys[0].id"}},e._l(e.categorys,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.classification"),prop:"classifications[0].id",rules:{required:!1,message:""+e.$t("commodity.classification")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.classification")}),clearable:""},model:{value:e.form.classifications[0].id,callback:function(t){e.$set(e.form.classifications[0],"id",t)},expression:"form.classifications[0].id"}},e._l(e.classifications,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.material"),prop:"materials[0].id",rules:{required:!1,message:""+e.$t("commodity.material")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.material")}),clearable:""},model:{value:e.form.materials[0].id,callback:function(t){e.$set(e.form.materials[0],"id",t)},expression:"form.materials[0].id"}},e._l(e.materials,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.model"),prop:"models[0].id",rules:{required:!1,message:""+e.$t("commodity.model")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.model")}),clearable:""},model:{value:e.form.models[0].id,callback:function(t){e.$set(e.form.models[0],"id",t)},expression:"form.models[0].id"}},e._l(e.models,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.place"),prop:"places[0].id",rules:{required:!1,message:""+e.$t("commodity.place")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.place")}),clearable:""},model:{value:e.form.places[0].id,callback:function(t){e.$set(e.form.places[0],"id",t)},expression:"form.places[0].id"}},e._l(e.places,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.ruiwu"),prop:"ruiwus[0].id",rules:{required:!1,message:""+e.$t("commodity.ruiwu")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.ruiwu")}),clearable:""},model:{value:e.form.ruiwus[0].id,callback:function(t){e.$set(e.form.ruiwus[0],"id",t)},expression:"form.ruiwus[0].id"}},e._l(e.ruiwus,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.shape"),prop:"shapes[0].id",rules:{required:!1,message:""+e.$t("commodity.shape")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.shape")}),clearable:""},model:{value:e.form.shapes[0].id,callback:function(t){e.$set(e.form.shapes[0],"id",t)},expression:"form.shapes[0].id"}},e._l(e.shapes,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.specification"),prop:"specifications[0].id",rules:{required:!1,message:""+e.$t("commodity.specification")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.specification")}),clearable:""},model:{value:e.form.specifications[0].id,callback:function(t){e.$set(e.form.specifications[0],"id",t)},expression:"form.specifications[0].id"}},e._l(e.specifications,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.style"),prop:"styles[0].id",rules:{required:!1,message:""+e.$t("commodity.style")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.style")}),clearable:""},model:{value:e.form.styles[0].id,callback:function(t){e.$set(e.form.styles[0],"id",t)},expression:"form.styles[0].id"}},e._l(e.styles,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.technique"),prop:"techniques[0].id",rules:{required:!1,message:""+e.$t("commodity.technique")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.technique")}),clearable:""},model:{value:e.form.techniques[0].id,callback:function(t){e.$set(e.form.techniques[0],"id",t)},expression:"form.techniques[0].id"}},e._l(e.techniques,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.theme"),prop:"themes[0].id",rules:{required:!1,message:""+e.$t("commodity.theme")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.theme")}),clearable:""},model:{value:e.form.themes[0].id,callback:function(t){e.$set(e.form.themes[0],"id",t)},expression:"form.themes[0].id"}},e._l(e.themes,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.type"),prop:"types[0].id",rules:{required:!1,message:""+e.$t("commodity.type")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.type")}),clearable:""},model:{value:e.form.types[0].id,callback:function(t){e.$set(e.form.types[0],"id",t)},expression:"form.types[0].id"}},e._l(e.types,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.use"),prop:"uses[0].id",rules:{required:!1,message:""+e.$t("commodity.use")+e.$t("form.noEmpty"),trigger:"change"}}},[o("el-select",{attrs:{placeholder:e.$t("form.selectPlaceholder",{msg:e.$t("commodity.use")}),clearable:""},model:{value:e.form.uses[0].id,callback:function(t){e.$set(e.form.uses[0],"id",t)},expression:"form.uses[0].id"}},e._l(e.uses,(function(t,r){return o("el-option",{key:r,attrs:{label:t["zh-cn"],value:t.id}},[o("span",[e._v(e._s(e.$t("lang.zh"))+"："+e._s(t["zh-cn"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.en"))+"："+e._s(t["en-us"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.ja"))+"："+e._s(t["ja-jp"])+"，")]),e._v(" "),o("span",[e._v(e._s(e.$t("lang.es"))+"："+e._s(t["es-es"]))])])})),1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.color.title")}},[o("el-row",{attrs:{gutter:10}},[e._l(e.form.colors,(function(t,r){return o("el-col",{key:r,attrs:{span:2}},[o("el-form-item",{attrs:{prop:"colors."+r+".name",rules:{required:!1,message:""+e.$t("commodity.color.title")+e.$t("form.noEmpty"),trigger:"blur"}}},[o("el-color-picker",{model:{value:e.form.colors[r].name,callback:function(t){e.$set(e.form.colors[r],"name",t)},expression:"form.colors[index].name"}})],1)],1)})),e._v(" "),o("el-col",{attrs:{span:2,offset:1}},[o("el-button",{attrs:{icon:"el-icon-circle-plus-outline"},on:{click:e.addColors}})],1)],2)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.photo")}},[o("el-upload",{attrs:{"file-list":e.form.photos,action:e.$config.origin+"/api/upload/images",data:{type:"commodity"},"list-type":"picture-card","on-preview":e.uploadPreview,"on-remove":e.uploadRemove,"on-success":e.uploadSuccess}},[o("i",{staticClass:"el-icon-plus"})]),e._v(" "),o("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:e.$t("commodity.state.title"),prop:"state"}},[o("el-radio-group",{model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},[o("el-radio",{attrs:{label:0}},[e._v(e._s(e.$t("commodity.state.added")))]),e._v(" "),o("el-radio",{attrs:{label:1}},[e._v(e._s(e.$t("commodity.state.onsale")))]),e._v(" "),o("el-radio",{attrs:{label:2}},[e._v(e._s(e.$t("commodity.state.sold")))]),e._v(" "),o("el-radio",{attrs:{label:3}},[e._v(e._s(e.$t("commodity.state.offline")))])],1)],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:e.$t("commodity.seller")}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:8}},[o("el-input",{attrs:{placeholder:e.$t("form.placeholder",{msg:e.$t("user.seller.id")})},model:{value:e.form.sellerId,callback:function(t){e.$set(e.form,"sellerId",t)},expression:"form.sellerId"}})],1)],1)],1)],1)}),[],!1,null,"407e633b",null);t.default=component.exports}}]);