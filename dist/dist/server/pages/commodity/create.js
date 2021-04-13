exports.ids = [10];
exports.modules = {

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/commodity/create.vue?vue&type=template&id=53787014&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{ref:"form",attrs:{"model":_vm.form,"label-width":"108px"}},[_c('el-form-item',[(_vm.isCreate)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":function($event){return _vm.onSubmit('form')}}},[_vm._v("\n      "+_vm._s(_vm.$t('content.create'))+"\n    ")]):_c('el-button',{attrs:{"type":"primary","icon":"el-icon-check"},on:{"click":function($event){return _vm.onSubmit('form')}}},[_vm._v("\n      "+_vm._s(_vm.$t('content.update'))+"\n    ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-check"},on:{"click":_vm.onMock}},[_vm._v("\n      "+_vm._s(_vm.$t('content.fill'))+"\n    ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-circle-close"},on:{"click":function($event){return _vm.resetForm('form')}}},[_vm._v(_vm._s(_vm.$t('content.clear')))])],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.name') }),"prop":'name.zh-cn',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.zh')) + (_vm.$t('commodity.name')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.zh') })},model:{value:(_vm.form.name['zh-cn']),callback:function ($$v) {_vm.$set(_vm.form.name, 'zh-cn', $$v)},expression:"form.name['zh-cn']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.name') }),"prop":'name.en-us',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.en')) + (_vm.$t('commodity.name')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.en') })},model:{value:(_vm.form.name['en-us']),callback:function ($$v) {_vm.$set(_vm.form.name, 'en-us', $$v)},expression:"form.name['en-us']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.name') }),"prop":'name.ja-jp',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.ja')) + (_vm.$t('commodity.name')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.ja') })},model:{value:(_vm.form.name['ja-jp']),callback:function ($$v) {_vm.$set(_vm.form.name, 'ja-jp', $$v)},expression:"form.name['ja-jp']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.name') }),"prop":'name.es-es',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.es')) + (_vm.$t('commodity.name')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.es') })},model:{value:(_vm.form.name['es-es']),callback:function ($$v) {_vm.$set(_vm.form.name, 'es-es', $$v)},expression:"form.name['es-es']"}})],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.desc') }),"prop":'desc.zh-cn',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.zh')) + (_vm.$t('commodity.desc')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.zh') })},model:{value:(_vm.form.desc['zh-cn']),callback:function ($$v) {_vm.$set(_vm.form.desc, 'zh-cn', $$v)},expression:"form.desc['zh-cn']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.desc') }),"prop":'desc.en-us',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.en')) + (_vm.$t('commodity.desc')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.en') })},model:{value:(_vm.form.desc['en-us']),callback:function ($$v) {_vm.$set(_vm.form.desc, 'en-us', $$v)},expression:"form.desc['en-us']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.desc') }),"prop":'desc.ja-jp',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.ja')) + (_vm.$t('commodity.desc')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.ja') })},model:{value:(_vm.form.desc['ja-jp']),callback:function ($$v) {_vm.$set(_vm.form.desc, 'ja-jp', $$v)},expression:"form.desc['ja-jp']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.desc') }),"prop":'desc.es-es',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.es')) + (_vm.$t('commodity.desc')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.es') })},model:{value:(_vm.form.desc['es-es']),callback:function ($$v) {_vm.$set(_vm.form.desc, 'es-es', $$v)},expression:"form.desc['es-es']"}})],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', {
            lang: _vm.$t('lang.price.zh'),
            name: _vm.$t('commodity.price.title'),
          }),"prop":'price.zh-cn',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.price.zh')) + (_vm.$t('commodity.price.title')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.price.zh') })},model:{value:(_vm.form.price['zh-cn']),callback:function ($$v) {_vm.$set(_vm.form.price, 'zh-cn', $$v)},expression:"form.price['zh-cn']"}},[_c('template',{slot:"append"},[_vm._v("¥")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', {
            lang: _vm.$t('lang.price.en'),
            name: _vm.$t('commodity.price.title'),
          }),"prop":'price.en-us',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.price.en')) + (_vm.$t('commodity.price.title')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.price.en') })},model:{value:(_vm.form.price['en-us']),callback:function ($$v) {_vm.$set(_vm.form.price, 'en-us', $$v)},expression:"form.price['en-us']"}},[_c('template',{slot:"append"},[_vm._v("$")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', {
            lang: _vm.$t('lang.price.ja'),
            name: _vm.$t('commodity.price.title'),
          }),"prop":'price.ja-jp',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.price.ja')) + (_vm.$t('commodity.price.title')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.price.ja') })},model:{value:(_vm.form.price['ja-jp']),callback:function ($$v) {_vm.$set(_vm.form.price, 'ja-jp', $$v)},expression:"form.price['ja-jp']"}},[_c('template',{slot:"append"},[_vm._v("￥")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', {
            lang: _vm.$t('lang.price.es'),
            name: _vm.$t('commodity.price.title'),
          }),"prop":'price.es-es',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.price.es')) + (_vm.$t('commodity.price.title')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.price.es') })},model:{value:(_vm.form.price['es-es']),callback:function ($$v) {_vm.$set(_vm.form.price, 'es-es', $$v)},expression:"form.price['es-es']"}},[_c('template',{slot:"append"},[_vm._v("€")])],2)],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.width.title'),"prop":'width',"rules":{
          required: true,
          message: ("" + (_vm.$t('commodity.width.title')) + (_vm.$t('form.noEmpty'))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"input","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('commodity.width.title') })},model:{value:(_vm.form.width),callback:function ($$v) {_vm.$set(_vm.form, "width", $$v)},expression:"form.width"}},[_c('template',{slot:"append"},[_vm._v("cm")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.height.title'),"prop":'height',"rules":{
          required: true,
          message: ("" + (_vm.$t('commodity.height.title')) + (_vm.$t('form.noEmpty'))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"input","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('commodity.height.title') })},model:{value:(_vm.form.height),callback:function ($$v) {_vm.$set(_vm.form, "height", $$v)},expression:"form.height"}},[_c('template',{slot:"append"},[_vm._v("cm")])],2)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.category'),"prop":'category',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.category')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.categorys),callback:function ($$v) {_vm.$set(_vm.form, "categorys", $$v)},expression:"form.categorys"}},_vm._l((_vm.categorys),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n      "+_vm._s(item['zh-cn'])+"\n    ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.classification'),"prop":'classifications',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.classification')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.classifications),callback:function ($$v) {_vm.$set(_vm.form, "classifications", $$v)},expression:"form.classifications"}},_vm._l((_vm.classifications),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.material'),"prop":'materials',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.material')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.materials),callback:function ($$v) {_vm.$set(_vm.form, "materials", $$v)},expression:"form.materials"}},_vm._l((_vm.materials),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.model'),"prop":'models',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.model')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.models),callback:function ($$v) {_vm.$set(_vm.form, "models", $$v)},expression:"form.models"}},_vm._l((_vm.models),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.place'),"prop":'places',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.place')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.places),callback:function ($$v) {_vm.$set(_vm.form, "places", $$v)},expression:"form.places"}},_vm._l((_vm.places),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.ruiwu'),"prop":'ruiwus',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.ruiwu')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.ruiwus),callback:function ($$v) {_vm.$set(_vm.form, "ruiwus", $$v)},expression:"form.ruiwus"}},_vm._l((_vm.ruiwus),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.shape'),"prop":'shapes',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.shape')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.shapes),callback:function ($$v) {_vm.$set(_vm.form, "shapes", $$v)},expression:"form.shapes"}},_vm._l((_vm.shapes),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.specification'),"prop":'specifications',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.specification')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.specifications),callback:function ($$v) {_vm.$set(_vm.form, "specifications", $$v)},expression:"form.specifications"}},_vm._l((_vm.specifications),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.style'),"prop":'styles',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.style')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.styles),callback:function ($$v) {_vm.$set(_vm.form, "styles", $$v)},expression:"form.styles"}},_vm._l((_vm.styles),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.technique'),"prop":'techniques',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.technique')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.techniques),callback:function ($$v) {_vm.$set(_vm.form, "techniques", $$v)},expression:"form.techniques"}},_vm._l((_vm.techniques),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.theme'),"prop":'themes',"rules":{
          required: false,
          message: ("" + (_vm.$t('commodity.theme')) + (_vm.$t('form.noEmpty'))),
          trigger: 'change',
        }}},[_c('el-checkbox-group',{model:{value:(_vm.form.themes),callback:function ($$v) {_vm.$set(_vm.form, "themes", $$v)},expression:"form.themes"}},_vm._l((_vm.themes),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n            "+_vm._s(item['zh-cn'])+"\n          ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.type'),"prop":'types',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.type')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.types),callback:function ($$v) {_vm.$set(_vm.form, "types", $$v)},expression:"form.types"}},_vm._l((_vm.types),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.use'),"prop":'uses',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.use')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.uses),callback:function ($$v) {_vm.$set(_vm.form, "uses", $$v)},expression:"form.uses"}},_vm._l((_vm.uses),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item,"value":item['zh-cn']}},[_vm._v("\n        "+_vm._s(item['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.color.title')}},[_c('el-row',{attrs:{"gutter":10}},[_vm._l((_vm.form.colors),function(item,index){return _c('el-col',{key:index,attrs:{"span":2}},[_c('el-form-item',{attrs:{"prop":'colors.' + index + '.name',"rules":{
            required: false,
            message: ("" + (_vm.$t('commodity.color.title')) + (_vm.$t('form.noEmpty'))),
            trigger: 'blur',
          }}},[_c('el-color-picker',{model:{value:(_vm.form.colors[index].name),callback:function ($$v) {_vm.$set(_vm.form.colors[index], "name", $$v)},expression:"form.colors[index].name"}})],1)],1)}),_vm._v(" "),_c('el-col',{attrs:{"span":2,"offset":1}},[_c('el-button',{attrs:{"icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addColors}})],1)],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.photo')}},[_c('el-upload',{attrs:{"file-list":_vm.form.photos,"action":((_vm.$config.origin) + "/api/upload/images"),"data":{ type: 'commodity' },"list-type":"picture-card","on-preview":_vm.uploadPreview,"on-remove":_vm.uploadRemove,"on-success":_vm.uploadSuccess}},[_c('i',{staticClass:"el-icon-plus"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("艺术品图片，请上传 768X400 的图片")])]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.state.title'),"prop":'state'}},[_c('el-radio-group',{model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v)},expression:"form.state"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v(_vm._s(_vm.$t('commodity.state.added')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v(_vm._s(_vm.$t('commodity.state.onsale')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v(_vm._s(_vm.$t('commodity.state.sold')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":3}},[_vm._v(_vm._s(_vm.$t('commodity.state.offline')))])],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.seller')}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":8}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.id') })},model:{value:(_vm.form.sellerId),callback:function ($$v) {_vm.$set(_vm.form, "sellerId", $$v)},expression:"form.sellerId"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/commodity/create.vue?vue&type=template&id=53787014&scoped=true&

// EXTERNAL MODULE: external "mockjs"
var external_mockjs_ = __webpack_require__(116);
var external_mockjs_default = /*#__PURE__*/__webpack_require__.n(external_mockjs_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/commodity/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var createvue_type_script_lang_js_ = ({
  async fetch() {
    this.isCreate = true;
    this.reset(); // "category": "类别",

    const optionsCategory = await this.$axios.$get(`/api/admin/commodity/retrieve/category`);

    if (optionsCategory.data && optionsCategory.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'categorys',
        data: optionsCategory.data
      });
    } // "classification": "分类",


    const optionsClassification = await this.$axios.$get(`/api/admin/commodity/retrieve/classification`);

    if (optionsClassification.data && optionsClassification.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'classifications',
        data: optionsClassification.data
      });
    } // "material": "材质",


    const optionsMaterial = await this.$axios.$get(`/api/admin/commodity/retrieve/material`);

    if (optionsMaterial.data && optionsMaterial.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'materials',
        data: optionsMaterial.data
      });
    } // "model": "款式",


    const optionsModel = await this.$axios.$get(`/api/admin/commodity/retrieve/model`);

    if (optionsModel.data && optionsModel.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'models',
        data: optionsModel.data
      });
    } // "place": "摆放",


    const optionsPlace = await this.$axios.$get(`/api/admin/commodity/retrieve/place`);

    if (optionsPlace.data && optionsPlace.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'places',
        data: optionsPlace.data
      });
    } // "ruiwu": "瑞物",


    const optionsRuiwu = await this.$axios.$get(`/api/admin/commodity/retrieve/ruiwu`);

    if (optionsRuiwu.data && optionsRuiwu.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'ruiwus',
        data: optionsRuiwu.data
      });
    } // "shape": "形状",


    const optionsShape = await this.$axios.$get(`/api/admin/commodity/retrieve/shape`);

    if (optionsShape.data && optionsShape.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'shapes',
        data: optionsShape.data
      });
    } // "specification": "规格",


    const optionsSpecification = await this.$axios.$get(`/api/admin/commodity/retrieve/specification`);

    if (optionsSpecification.data && optionsSpecification.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'specifications',
        data: optionsSpecification.data
      });
    } // "style": "风格",


    const optionsStyle = await this.$axios.$get(`/api/admin/commodity/retrieve/style`);

    if (optionsStyle.data && optionsStyle.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'styles',
        data: optionsStyle.data
      });
    } // "technique": "手法",


    const optionsTechnique = await this.$axios.$get(`/api/admin/commodity/retrieve/technique`);

    if (optionsTechnique.data && optionsTechnique.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'techniques',
        data: optionsTechnique.data
      });
    } // "theme": "主题",


    const optionsTheme = await this.$axios.$get(`/api/admin/commodity/retrieve/theme`);

    if (optionsTheme.data && optionsTheme.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'themes',
        data: optionsTheme.data
      });
    } // "type": "类型",


    const optionsType = await this.$axios.$get(`/api/admin/commodity/retrieve/type`);

    if (optionsType.data && optionsType.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'types',
        data: optionsType.data
      });
    } // "use": "用途",


    const optionsUse = await this.$axios.$get(`/api/admin/commodity/retrieve/use`);

    if (optionsUse.data && optionsUse.data.length) {
      this.$store.commit('addCommodityOpitons', {
        type: 'uses',
        data: optionsUse.data
      });
    } // console.log('this.$route.query', this.$route.query)


    if (this.$route.query && this.$route.query.commodityId) {
      this.form.commodityId = this.$route.query.commodityId;
      const commodity = await this.$axios.$get('/api/admin/commodity/edit', {
        params: {
          commodityId: this.form.commodityId
        }
      });

      if (commodity.success) {
        const commodityForm = Object.assign({}, this.form, commodity.data);
        console.log("commodityForm", commodityForm);
        this.form.state = commodityForm.state;
        this.form.width = commodityForm.width;
        this.form.height = commodityForm.height;
        this.form.colors = commodityForm.colors;

        if (commodityForm.name) {
          this.form.name = commodityForm.name;
        }

        if (commodityForm.desc) {
          this.form.desc = commodityForm.desc;
        }

        if (commodityForm.price) {
          this.form.price = commodityForm.price;
        }

        if (commodityForm.photos) {
          const photos = commodityForm.photos.map(item => {
            item.url = item.src;
            return item;
          });
          this.form.photos = photos;
        } // "category": "类别",


        this.form.categorys = commodityForm.categorys && commodityForm.categorys.length ? commodityForm.categorys : []; // "classification": "分类",

        this.form.classifications = commodityForm.classifications && commodityForm.classifications.length ? commodityForm.classifications[0].id : ''; // "material": "材质",

        this.form.materials = commodityForm.materials && commodityForm.materials.length ? commodityForm.materials[0].id : ''; // "model": "款式",

        this.form.models = commodityForm.models && commodityForm.models.length ? commodityForm.models[0].id : ''; // "place": "摆放",

        this.form.places = commodityForm.places && commodityForm.places.length ? commodityForm.places[0].id : ''; // "ruiwu": "瑞物",

        this.form.ruiwus = commodityForm.ruiwus && commodityForm.ruiwus.length ? commodityForm.ruiwus[0].id : ''; // "shape": "形状",

        this.form.shapes = commodityForm.shapes && commodityForm.shapes.length ? commodityForm.shapes[0].id : ''; // "specification": "规格",

        this.form.specifications = commodityForm.specifications && commodityForm.specifications.length ? commodityForm.specifications[0].id : ''; // "style": "风格",

        this.form.styles = commodityForm.styles && commodityForm.styles.length ? commodityForm.styles[0].id : ''; // "technique": "手法",

        this.form.techniques = commodityForm.techniques && commodityForm.techniques.length ? commodityForm.techniques[0].id : ''; // "theme": "主题",

        this.form.themes = commodityForm.themes && commodityForm.themes.length ? commodityForm.themes[0].id : ''; // "type": "类型",

        this.form.types = commodityForm.types && commodityForm.types.length ? commodityForm.types[0].id : ''; // "use": "用途",

        this.form.uses = commodityForm.uses && commodityForm.uses.length ? commodityForm.uses[0].id : '';

        if (commodityForm.seller) {
          this.form.sellerId = commodityForm.seller.sellerId;
        } // this.form = commodityForm;


        this.type = 'edit';
        this.typeText = this.$t('content.update');
        this.isCreate = false;
      }
    }

    console.log('this.form', this.form);
  },

  data() {
    return {
      type: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      form: {},
      dialogImageUrl: '',
      dialogVisible: false,
      loading: false
    };
  },

  computed: {
    // "category": "类别",
    categorys() {
      return this.$store.state.commodity.options.categorys;
    },

    // "classification": "分类",
    classifications() {
      return this.$store.state.commodity.options.classifications;
    },

    // "material": "材质",
    materials() {
      return this.$store.state.commodity.options.materials;
    },

    // "model": "款式",
    models() {
      return this.$store.state.commodity.options.models;
    },

    // "place": "摆放",
    places() {
      return this.$store.state.commodity.options.places;
    },

    // "ruiwu": "瑞物",
    ruiwus() {
      return this.$store.state.commodity.options.ruiwus;
    },

    // "shape": "形状",
    shapes() {
      return this.$store.state.commodity.options.shapes;
    },

    // "specification": "规格",
    specifications() {
      return this.$store.state.commodity.options.specifications;
    },

    // "style": "风格",
    styles() {
      return this.$store.state.commodity.options.styles;
    },

    // "technique": "手法",
    techniques() {
      return this.$store.state.commodity.options.techniques;
    },

    // "theme": "主题",
    themes() {
      return this.$store.state.commodity.options.themes;
    },

    // "type": "类型",
    types() {
      return this.$store.state.commodity.options.types;
    },

    // "use": "用途",
    uses() {
      return this.$store.state.commodity.options.uses;
    }

  },
  watch: {
    '$route.query': '$fetch'
  },
  watchQuery: ['commodityId'],

  mounted() {// this.list = this.states.map((item) => {
    //   return { value: `value:${item}`, label: `label:${item}` }
    // })
  },

  methods: {
    onSubmit(formName) {
      console.log('submit!', this.form);
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let data;

          if (this.isCreate) {
            data = await this.$axios.$post('/api/admin/commodity/create', this.form).catch(error => {
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}! ${error.response.data.message}`,
                type: 'error'
              });
            });
          } else {
            data = await this.$axios.$post('/api/admin/commodity/update', this.form).catch(error => {
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}! ${error.response.data.message}`,
                type: 'error'
              });
            });
          } // console.log('data', data)


          if (data.status === 200) {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.success')}`,
              type: 'success'
            });

            if (this.isCreate) {
              // this.$refs[formName].resetFields()
              this.resetForm('form');
            }
          } else {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}!${data.message}`,
              type: 'error'
            });
          }
        }
      });
    },

    onMock() {
      if (!this.categorys.length || !this.classifications.length || !this.materials.length || !this.models.length || !this.places.length || !this.ruiwus.length || !this.shapes.length || !this.specifications.length || !this.styles.length || !this.techniques.length || !this.themes.length || !this.types.length || !this.uses.length) {
        this.$message({
          showClose: true,
          message: '请先添加艺术品选项',
          type: 'error'
        });
        return;
      }

      const createCommodityMock = {
        commodityId: this.form.commodityId,
        name: {
          'zh-cn': external_mockjs_default.a.mock('@ctitle(2, 8)'),
          'en-us': external_mockjs_default.a.mock('@title(2)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          // 'fr-fr': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix'
        },
        desc: {
          'zh-cn': external_mockjs_default.a.mock('@cparagraph(1,3)'),
          'en-us': external_mockjs_default.a.mock('@paragraph(1,3)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          // 'fr-fr': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix'
        },
        price: {
          'zh-cn': external_mockjs_default.a.mock('@integer(60, 100)'),
          'en-us': external_mockjs_default.a.mock('@integer(60, 100)'),
          'ja-jp': external_mockjs_default.a.mock('@integer(60, 100)'),
          // 'fr-fr': Mock.mock('@integer(60, 100)'),
          'es-es': external_mockjs_default.a.mock('@integer(60, 100)')
        },
        // "category": "类别",
        categorys: [this.categorys[external_mockjs_default.a.mock(`@integer(0,${this.categorys.length - 1})`)]],
        // "classification": "分类",
        classifications: [this.classifications[external_mockjs_default.a.mock(`@integer(0,${this.classifications.length - 1})`)]],
        // "material": "材质",
        materials: [this.materials[external_mockjs_default.a.mock(`@integer(0,${this.materials.length - 1})`)]],
        // "model": "款式",
        models: [this.models[external_mockjs_default.a.mock(`@integer(0,${this.models.length - 1})`)]],
        // "place": "摆放",
        places: [this.places[external_mockjs_default.a.mock(`@integer(0,${this.places.length - 1})`)]],
        // "ruiwu": "瑞物",
        ruiwus: [this.ruiwus[external_mockjs_default.a.mock(`@integer(0,${this.ruiwus.length - 1})`)]],
        // "shape": "形状",
        shapes: [this.shapes[external_mockjs_default.a.mock(`@integer(0,${this.shapes.length - 1})`)]],
        // "specification": "规格",
        specifications: [this.specifications[external_mockjs_default.a.mock(`@integer(0,${this.specifications.length - 1})`)]],
        // "style": "风格",
        styles: [this.styles[external_mockjs_default.a.mock(`@integer(0,${this.styles.length - 1})`)]],
        // "technique": "手法",
        techniques: [this.techniques[external_mockjs_default.a.mock(`@integer(0,${this.techniques.length - 1})`)]],
        // "theme": "主题",
        themes: [this.themes[external_mockjs_default.a.mock(`@integer(0,${this.themes.length - 1})`)]],
        // "type": "类型",
        types: [this.types[external_mockjs_default.a.mock(`@integer(0,${this.types.length - 1})`)]],
        // "use": "用途",
        uses: [this.uses[external_mockjs_default.a.mock(`@integer(0,${this.uses.length - 1})`)]],
        photos: [],
        colors: [{
          name: external_mockjs_default.a.mock('@color')
        }],
        width: external_mockjs_default.a.mock('@natural(100, 300)'),
        height: external_mockjs_default.a.mock('@natural(100, 300)'),
        state: external_mockjs_default.a.mock('@integer(0, 3)'),
        sellerId: ''
      };
      console.log('createCommodityMock', createCommodityMock);
      this.form = createCommodityMock;
      this.type = 'create';
      this.typeText = this.$t('content.create');
      this.isCreate = true;
    },

    resetForm(formName) {
      this.reset();
      this.type = 'create';
      this.typeText = this.$t('content.create');
      this.isCreate = true;
      this.$refs[formName].clearValidate(); // console.log(this.form)
    },

    addColors() {
      this.form.colors.push({
        name: '#fff'
      });
    },

    reset() {
      this.form = {
        commodityId: '',
        name: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        },
        desc: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        },
        price: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        },
        categorys: [],
        classifications: [],
        materials: [],
        models: [],
        places: [],
        ruiwus: [],
        shapes: [],
        specifications: [],
        styles: [],
        techniques: [],
        themes: [],
        types: [],
        uses: [],
        photos: [],
        colors: [{
          name: '#fff'
        }],
        width: '',
        height: '',
        state: 0,
        sellerId: ''
      };
    },

    uploadSuccess(res, file) {
      console.log(res, file); // this.imageUrl = URL.createObjectURL(file.raw);

      this.form.photos.push({
        src: res.data.src,
        url: res.data.src,
        name: file.name,
        uid: file.uid
      }); // console.log(this.form)
    },

    uploadRemove(file, fileList) {
      // console.log(file, fileList)
      for (const [index, item] of Object.entries(this.form.photos)) {
        if (item.uid === file.uid) {
          this.form.photos.splice(index, 1);
        }
      }
    },

    uploadPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }

  }
});
// CONCATENATED MODULE: ./pages/commodity/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var commodity_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/commodity/create.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commodity_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "53787014",
  "d8dc875a"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map