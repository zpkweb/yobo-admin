exports.ids = [11];
exports.modules = {

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/commodity/create.vue?vue&type=template&id=0895a3db&scoped=true&
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
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.categorys),callback:function ($$v) {_vm.$set(_vm.form, "categorys", $$v)},expression:"form.categorys"}},_vm._l((_vm.options.categorys),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n      "+_vm._s(_vm.categorys[index]['zh-cn'])+"\n    ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.classification'),"prop":'classifications',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.classification')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.classifications),callback:function ($$v) {_vm.$set(_vm.form, "classifications", $$v)},expression:"form.classifications"}},_vm._l((_vm.options.classifications),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.classifications[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.material'),"prop":'materials',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.material')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.materials),callback:function ($$v) {_vm.$set(_vm.form, "materials", $$v)},expression:"form.materials"}},_vm._l((_vm.options.materials),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.materials[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.model'),"prop":'models',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.model')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.models),callback:function ($$v) {_vm.$set(_vm.form, "models", $$v)},expression:"form.models"}},_vm._l((_vm.options.models),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.models[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.place'),"prop":'places',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.place')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.places),callback:function ($$v) {_vm.$set(_vm.form, "places", $$v)},expression:"form.places"}},_vm._l((_vm.options.places),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.places[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.ruiwu'),"prop":'ruiwus',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.ruiwu')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.ruiwus),callback:function ($$v) {_vm.$set(_vm.form, "ruiwus", $$v)},expression:"form.ruiwus"}},_vm._l((_vm.options.ruiwus),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.ruiwus[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.shape'),"prop":'shapes',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.shape')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.shapes),callback:function ($$v) {_vm.$set(_vm.form, "shapes", $$v)},expression:"form.shapes"}},_vm._l((_vm.options.shapes),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.shapes[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.specification'),"prop":'specifications',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.specification')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.specifications),callback:function ($$v) {_vm.$set(_vm.form, "specifications", $$v)},expression:"form.specifications"}},_vm._l((_vm.options.specifications),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.specifications[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.style'),"prop":'styles',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.style')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.styles),callback:function ($$v) {_vm.$set(_vm.form, "styles", $$v)},expression:"form.styles"}},_vm._l((_vm.options.styles),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.styles[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.technique'),"prop":'techniques',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.technique')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.techniques),callback:function ($$v) {_vm.$set(_vm.form, "techniques", $$v)},expression:"form.techniques"}},_vm._l((_vm.options.techniques),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.techniques[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.theme'),"prop":'themes',"rules":{
          required: false,
          message: ("" + (_vm.$t('commodity.theme')) + (_vm.$t('form.noEmpty'))),
          trigger: 'change',
        }}},[_c('el-checkbox-group',{model:{value:(_vm.form.themes),callback:function ($$v) {_vm.$set(_vm.form, "themes", $$v)},expression:"form.themes"}},_vm._l((_vm.options.themes),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n            "+_vm._s(_vm.themes[index]['zh-cn'])+"\n          ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.type'),"prop":'types',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.type')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.types),callback:function ($$v) {_vm.$set(_vm.form, "types", $$v)},expression:"form.types"}},_vm._l((_vm.options.types),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.types[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.use'),"prop":'uses',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.use')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.uses),callback:function ($$v) {_vm.$set(_vm.form, "uses", $$v)},expression:"form.uses"}},_vm._l((_vm.options.uses),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.uses[index]['zh-cn'])+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.color.title')}},[_c('el-row',{attrs:{"gutter":10}},[_c('el-col',{attrs:{"span":4}},[_c('el-form-item',{attrs:{"prop":'colors[0].startColor',"label":"开始颜色","rules":{
            required: false,
            message: ("" + (_vm.$t('commodity.color.title')) + (_vm.$t('form.noEmpty'))),
            trigger: 'blur',
          }}},[_c('el-color-picker',{model:{value:(_vm.form.colors[0].startColor),callback:function ($$v) {_vm.$set(_vm.form.colors[0], "startColor", $$v)},expression:"form.colors[0].startColor"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-form-item',{attrs:{"prop":'colors[0].endColor',"label":"结束颜色","rules":{
            required: false,
            message: ("" + (_vm.$t('commodity.color.title')) + (_vm.$t('form.noEmpty'))),
            trigger: 'blur',
          }}},[_c('el-color-picker',{model:{value:(_vm.form.colors[0].endColor),callback:function ($$v) {_vm.$set(_vm.form.colors[0], "endColor", $$v)},expression:"form.colors[0].endColor"}})],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.photo')}},[_c('el-upload',{attrs:{"file-list":_vm.form.photos,"action":((_vm.$config.origin) + "/api/upload/images"),"data":{ type: 'commodity' },"list-type":"picture-card","on-preview":_vm.uploadPreview,"on-remove":_vm.uploadRemove,"on-success":_vm.uploadSuccess}},[_c('i',{staticClass:"el-icon-plus"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("艺术品图片，请上传 768X400 比例的图片")])]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.state.title'),"prop":'state'}},[_c('el-radio-group',{model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v)},expression:"form.state"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v(_vm._s(_vm.$t('commodity.state.added')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v(_vm._s(_vm.$t('commodity.state.onsale')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v(_vm._s(_vm.$t('commodity.state.sold')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":3}},[_vm._v(_vm._s(_vm.$t('commodity.state.offline')))])],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.seller')}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":8}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.id') })},model:{value:(_vm.form.sellerId),callback:function ($$v) {_vm.$set(_vm.form, "sellerId", $$v)},expression:"form.sellerId"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/commodity/create.vue?vue&type=template&id=0895a3db&scoped=true&

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
//
//
//
//
//
//
//
//
//
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
  data() {
    return {
      type: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      form: {},
      dialogImageUrl: '',
      dialogVisible: false,
      loading: false,
      options: {
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
        // 0:已添加，1:售卖中，2:已售卖，3:已下架
        state: [{
          index: 0,
          name: this.$t('commodity.state.added')
        }, {
          index: 1,
          name: this.$t('commodity.state.onsale')
        }, {
          index: 2,
          name: this.$t('commodity.state.sold')
        }, {
          index: 3,
          name: this.$t('commodity.state.offline')
        }]
      },
      // "category": "类别",
      categorys: [],
      // "classification": "分类",
      classifications: [],
      // "material": "材质",
      materials: [],
      // "model": "款式",
      models: [],
      // "place": "摆放",
      places: [],
      // "ruiwu": "瑞物",
      ruiwus: [],
      // "shape": "形状",
      shapes: [],
      // "specification": "规格",
      specifications: [],
      // "style": "风格",
      styles: [],
      // "technique": "手法",
      techniques: [],
      // "theme": "主题",
      themes: [],
      // "type": "类型",
      types: [],
      // "use": "用途",
      uses: []
    };
  },

  async fetch() {
    // this.isCreate = true
    // this.reset()
    // 类别
    // const category = await this.$axios.$get(`/api/admin/commodity/retrieve/category`)
    // if (category.data && category.data.length) {
    //   // this.options.category = category.data
    //   this.categorys = category.data;
    //   this.options.categorys = [];
    //   category.data.forEach((item) => {
    //     this.options.categorys.push(item.id)
    //   })
    // }
    // const classification = await this.$axios.$get(`/api/admin/commodity/retrieve/classification`)
    // if (classification.data && classification.data.length) {
    //   // this.options.classification = classification.data
    //   this.classifications = classification.data;
    //   this.options.classifications = [];
    //   classification.data.forEach((item) => {
    //     this.options.classifications.push(item.id)
    //   })
    // }
    // const material = await this.$axios.$get(`/api/admin/commodity/retrieve/material`)
    // if (material.data && material.data.length) {
    //   this.options.material = material.data
    // }
    // const model = await this.$axios.$get(`/api/admin/commodity/retrieve/model`)
    // if (model.data && model.data.length) {
    //   this.options.model = model.data
    // }
    // const place = await this.$axios.$get(`/api/admin/commodity/retrieve/place`)
    // if (place.data && place.data.length) {
    //   this.options.place = place.data
    // }
    // const ruiwu = await this.$axios.$get(`/api/admin/commodity/retrieve/ruiwu`)
    // if (ruiwu.data && ruiwu.data.length) {
    //   this.options.ruiwu = ruiwu.data
    // }
    // const shape = await this.$axios.$get(`/api/admin/commodity/retrieve/shape`)
    // if (shape.data && shape.data.length) {
    //   this.options.shape = shape.data
    // }
    // const specification = await this.$axios.$get(`/api/admin/commodity/retrieve/specification`)
    // if (specification.data && specification.data.length) {
    //   this.options.specification = specification.data
    // }
    // const style = await this.$axios.$get(`/api/admin/commodity/retrieve/style`)
    // if (style.data && style.data.length) {
    //   this.options.style = style.data
    // }
    // const technique = await this.$axios.$get(`/api/admin/commodity/retrieve/technique`)
    // if (technique.data && technique.data.length) {
    //   this.options.technique = technique.data
    // }
    // const theme = await this.$axios.$get(`/api/admin/commodity/retrieve/theme`)
    // if (theme.data && theme.data.length) {
    //   this.options.theme = theme.data
    // }
    // const type = await this.$axios.$get(`/api/admin/commodity/retrieve/type`)
    // if (type.data && type.data.length) {
    //   this.options.type = type.data
    // }
    // const use = await this.$axios.$get(`/api/admin/commodity/retrieve/use`)
    // if (use.data && use.data.length) {
    //   this.options.use = use.data
    // }
    const categorys = await this.$axios.$get(`/api/admin/commodity/retrieve/category`);

    if (categorys.data && categorys.data.length) {
      this.categorys = categorys.data;
      this.options.categorys = [];
      categorys.data.forEach(item => {
        this.options.categorys.push(item.id);
      });
    }

    const classifications = await this.$axios.$get(`/api/admin/commodity/retrieve/classification`);

    if (classifications.data && classifications.data.length) {
      this.classifications = classifications.data;
      this.options.classifications = [];
      classifications.data.forEach(item => {
        this.options.classifications.push(item.id);
      });
    }

    const materials = await this.$axios.$get(`/api/admin/commodity/retrieve/material`);

    if (materials.data && materials.data.length) {
      this.materials = materials.data;
      this.options.materials = [];
      materials.data.forEach(item => {
        this.options.materials.push(item.id);
      });
    }

    const models = await this.$axios.$get(`/api/admin/commodity/retrieve/model`);

    if (models.data && models.data.length) {
      this.models = models.data;
      this.options.models = [];
      models.data.forEach(item => {
        this.options.models.push(item.id);
      });
    }

    const places = await this.$axios.$get(`/api/admin/commodity/retrieve/place`);

    if (places.data && places.data.length) {
      this.places = places.data;
      this.options.places = [];
      places.data.forEach(item => {
        this.options.places.push(item.id);
      });
    }

    const ruiwus = await this.$axios.$get(`/api/admin/commodity/retrieve/ruiwu`);

    if (ruiwus.data && ruiwus.data.length) {
      this.ruiwus = ruiwus.data;
      this.options.ruiwus = [];
      ruiwus.data.forEach(item => {
        this.options.ruiwus.push(item.id);
      });
    }

    const shapes = await this.$axios.$get(`/api/admin/commodity/retrieve/shape`);

    if (shapes.data && shapes.data.length) {
      this.shapes = shapes.data;
      this.options.shapes = [];
      shapes.data.forEach(item => {
        this.options.shapes.push(item.id);
      });
    }

    const specifications = await this.$axios.$get(`/api/admin/commodity/retrieve/specification`);

    if (specifications.data && specifications.data.length) {
      this.specifications = specifications.data;
      this.options.specifications = [];
      specifications.data.forEach(item => {
        this.options.specifications.push(item.id);
      });
    }

    const styles = await this.$axios.$get(`/api/admin/commodity/retrieve/style`);

    if (styles.data && styles.data.length) {
      this.styles = styles.data;
      this.options.styles = [];
      styles.data.forEach(item => {
        this.options.styles.push(item.id);
      });
    }

    const techniques = await this.$axios.$get(`/api/admin/commodity/retrieve/technique`);

    if (techniques.data && techniques.data.length) {
      this.techniques = techniques.data;
      this.options.techniques = [];
      techniques.data.forEach(item => {
        this.options.techniques.push(item.id);
      });
    }

    const themes = await this.$axios.$get(`/api/admin/commodity/retrieve/theme`);

    if (themes.data && themes.data.length) {
      this.themes = themes.data;
      this.options.themes = [];
      themes.data.forEach(item => {
        this.options.themes.push(item.id);
      });
    }

    const types = await this.$axios.$get(`/api/admin/commodity/retrieve/type`);

    if (types.data && types.data.length) {
      this.types = types.data;
      this.options.types = [];
      types.data.forEach(item => {
        this.options.types.push(item.id);
      });
    }

    const uses = await this.$axios.$get(`/api/admin/commodity/retrieve/use`);

    if (uses.data && uses.data.length) {
      this.uses = uses.data;
      this.options.uses = [];
      uses.data.forEach(item => {
        this.options.uses.push(item.id);
      });
    }

    console.log('this.options', this.options);
  },

  computed: {// // "category": "类别",
    // categorys() {
    //   return this.$store.state.commodity.options.categorys
    // },
    // // "classification": "分类",
    // classifications() {
    //   return this.$store.state.commodity.options.classifications
    // },
    // // "material": "材质",
    // materials() {
    //   return this.$store.state.commodity.options.materials
    // },
    // // "model": "款式",
    // models() {
    //   return this.$store.state.commodity.options.models
    // },
    // // "place": "摆放",
    // places() {
    //   return this.$store.state.commodity.options.places
    // },
    // // "ruiwu": "瑞物",
    // ruiwus() {
    //   return this.$store.state.commodity.options.ruiwus
    // },
    // // "shape": "形状",
    // shapes() {
    //   return this.$store.state.commodity.options.shapes
    // },
    // // "specification": "规格",
    // specifications() {
    //   return this.$store.state.commodity.options.specifications
    // },
    // // "style": "风格",
    // styles() {
    //   return this.$store.state.commodity.options.styles
    // },
    // // "technique": "手法",
    // techniques() {
    //   return this.$store.state.commodity.options.techniques
    // },
    // // "theme": "主题",
    // themes() {
    //   return this.$store.state.commodity.options.themes
    // },
    // // "type": "类型",
    // types() {
    //   return this.$store.state.commodity.options.types
    // },
    // // "use": "用途",
    // uses() {
    //   return this.$store.state.commodity.options.uses
    // },
  },
  watch: {
    '$route.query': '$fetch'
  },
  watchQuery: ['commodityId'],

  async created() {
    this.isCreate = true;
    this.reset();

    if (this.$route.query && this.$route.query.commodityId) {
      const commodity = await this.$axios.$get('/api/admin/commodity/edit', {
        params: {
          commodityId: this.$route.query.commodityId
        }
      });

      if (commodity.success) {
        const commodityForm = commodity.data;
        console.log("commodityForm", commodityForm);
        this.form.commodityId = this.$route.query.commodityId;
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
        // this.form.categorys = commodityForm.categorys && commodityForm.categorys.length ? commodityForm.categorys[0].id : '';


        this.form.categorys = [];

        if (this.categorys && this.categorys.length) {
          if (commodityForm.categorys && commodityForm.categorys.length) {
            commodityForm.categorys.forEach(item1 => {
              this.categorys.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  this.form.categorys.push(item1.optionId);
                }
              });
            });
          }
        }

        console.log(this.form.categorys); // "classification": "分类",
        // this.form.classifications = commodityForm.classifications && commodityForm.classifications.length ? commodityForm.classifications[0].id : '';

        this.form.classifications = [];
        console.log("this.classifications", this.classifications);
        console.log("commodityForm.classifications", commodityForm.classifications);

        if (this.classifications && this.classifications.length) {
          if (commodityForm.classifications && commodityForm.classifications.length) {
            commodityForm.classifications.forEach(item1 => {
              this.classifications.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  console.log("item1", item1);
                  this.form.classifications.push(item1.optionId);
                }
              });
            }); // this.form.classifications = commodityForm.classifications
          }
        }

        console.log("this.form.classifications", this.form.classifications); // "material": "材质",
        // this.form.materials = commodityForm.materials && commodityForm.materials.length ? commodityForm.materials[0].id : '';

        this.form.materials = [];

        if (this.materials && this.materials.length) {
          if (commodityForm.materials && commodityForm.materials.length) {
            commodityForm.materials.forEach(item1 => {
              this.materials.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.materials.push(item1.optionId);
                }
              });
            }); // this.form.materials = commodityForm.materials
          }
        } // "model": "款式",
        // this.form.models = commodityForm.models && commodityForm.models.length ? commodityForm.models[0].id : '';


        this.form.models = [];

        if (this.models && this.models.length) {
          if (commodityForm.models && commodityForm.models.length) {
            commodityForm.models.forEach(item1 => {
              this.models.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.models.push(item1.optionId);
                }
              });
            }); // this.form.models = commodityForm.models
          }
        } // "place": "摆放",
        // this.form.places = commodityForm.places && commodityForm.places.length ? commodityForm.places[0].id : '';


        this.form.places = [];

        if (this.places && this.places.length) {
          if (commodityForm.places && commodityForm.places.length) {
            commodityForm.places.forEach(item1 => {
              this.places.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.places.push(item1.optionId);
                }
              });
            }); // this.form.places = commodityForm.places
          }
        } // "ruiwu": "瑞物",
        // this.form.ruiwus = commodityForm.ruiwus && commodityForm.ruiwus.length ? commodityForm.ruiwus[0].id : '';


        this.form.ruiwus = [];

        if (this.ruiwus && this.ruiwus.length) {
          if (commodityForm.ruiwus && commodityForm.ruiwus.length) {
            commodityForm.ruiwus.forEach(item1 => {
              this.ruiwus.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.ruiwus.push(item1.optionId);
                }
              });
            }); // this.form.ruiwus = commodityForm.ruiwus
          }
        } // "shape": "形状",
        // this.form.shapes = commodityForm.shapes && commodityForm.shapes.length ? commodityForm.shapes[0].id : '';


        this.form.shapes = [];

        if (this.shapes && this.shapes.length) {
          if (commodityForm.shapes && commodityForm.shapes.length) {
            commodityForm.shapes.forEach(item1 => {
              this.shapes.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.shapes.push(item1.optionId);
                }
              });
            }); // this.form.shapes = commodityForm.shapes
          }
        } // "specification": "规格",
        // this.form.specifications = commodityForm.specifications && commodityForm.specifications.length ? commodityForm.specifications[0].id : '';


        this.form.specifications = [];

        if (this.specifications && this.specifications.length) {
          if (commodityForm.specifications && commodityForm.specifications.length) {
            commodityForm.specifications.forEach(item1 => {
              this.specifications.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.specifications.push(item1.optionId);
                }
              });
            }); // this.form.specifications = commodityForm.specifications
          }
        } // "style": "风格",
        // this.form.styles = commodityForm.styles && commodityForm.styles.length ? commodityForm.styles[0].id : '';


        this.form.styles = [];

        if (this.styles && this.styles.length) {
          if (commodityForm.styles && commodityForm.styles.length) {
            commodityForm.styles.forEach(item1 => {
              this.styles.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.styles.push(item1.optionId);
                }
              });
            }); // this.form.styles = commodityForm.styles
          }
        } // "technique": "手法",
        // this.form.techniques = commodityForm.techniques && commodityForm.techniques.length ? commodityForm.techniques[0].id : '';


        this.form.techniques = [];

        if (this.techniques && this.techniques.length) {
          if (commodityForm.techniques && commodityForm.techniques.length) {
            commodityForm.techniques.forEach(item1 => {
              this.techniques.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.techniques.push(item1.optionId);
                }
              });
            }); // this.form.techniques = commodityForm.techniques
          }
        } // "theme": "主题",
        // this.form.themes = commodityForm.themes && commodityForm.themes.length ? commodityForm.themes[0].id : '';


        this.form.themes = [];

        if (this.themes && this.themes.length) {
          if (commodityForm.themes && commodityForm.themes.length) {
            commodityForm.themes.forEach(item1 => {
              this.themes.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.themes.push(item1.optionId);
                }
              });
            }); // this.form.themes = commodityForm.themes
          }
        } // "type": "类型",
        // this.form.types = commodityForm.types && commodityForm.types.length ? commodityForm.types[0].id : '';


        this.form.types = [];

        if (this.types && this.types.length) {
          if (commodityForm.types && commodityForm.types.length) {
            commodityForm.types.forEach(item1 => {
              this.types.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.types.push(item1.optionId);
                }
              });
            }); // this.form.types = commodityForm.types
          }
        } // "use": "用途",
        // this.form.uses = commodityForm.uses && commodityForm.uses.length ? commodityForm.uses[0].id : '';


        this.form.uses = [];

        if (this.uses && this.uses.length) {
          if (commodityForm.uses && commodityForm.uses.length) {
            commodityForm.uses.forEach(item1 => {
              this.uses.forEach(item2 => {
                if (item1.optionId == item2.id) {
                  // item2.optionId = item1.id;
                  this.form.uses.push(item1.optionId);
                }
              });
            }); // this.form.uses = commodityForm.uses
          }
        }

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
            console.log("this.form", this.form);
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
        categorys: [this.options.categorys[external_mockjs_default.a.mock(`@integer(0,${this.options.categorys.length - 1})`)]],
        // "classification": "分类",
        classifications: [this.options.classifications[external_mockjs_default.a.mock(`@integer(0,${this.options.classifications.length - 1})`)]],
        // "material": "材质",
        materials: [this.options.materials[external_mockjs_default.a.mock(`@integer(0,${this.options.materials.length - 1})`)]],
        // "model": "款式",
        models: [this.options.models[external_mockjs_default.a.mock(`@integer(0,${this.options.models.length - 1})`)]],
        // "place": "摆放",
        places: [this.options.places[external_mockjs_default.a.mock(`@integer(0,${this.options.places.length - 1})`)]],
        // "ruiwu": "瑞物",
        ruiwus: [this.options.ruiwus[external_mockjs_default.a.mock(`@integer(0,${this.options.ruiwus.length - 1})`)]],
        // "shape": "形状",
        shapes: [this.options.shapes[external_mockjs_default.a.mock(`@integer(0,${this.options.shapes.length - 1})`)]],
        // "specification": "规格",
        specifications: [this.options.specifications[external_mockjs_default.a.mock(`@integer(0,${this.options.specifications.length - 1})`)]],
        // "style": "风格",
        styles: [this.options.styles[external_mockjs_default.a.mock(`@integer(0,${this.options.styles.length - 1})`)]],
        // "technique": "手法",
        techniques: [this.options.techniques[external_mockjs_default.a.mock(`@integer(0,${this.options.techniques.length - 1})`)]],
        // "theme": "主题",
        themes: [this.options.themes[external_mockjs_default.a.mock(`@integer(0,${this.options.themes.length - 1})`)]],
        // "type": "类型",
        types: [this.options.types[external_mockjs_default.a.mock(`@integer(0,${this.options.types.length - 1})`)]],
        // "use": "用途",
        uses: [this.options.uses[external_mockjs_default.a.mock(`@integer(0,${this.options.uses.length - 1})`)]],
        photos: [],
        colors: [{
          startColor: "#fff",
          endColor: "#000"
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

    // addColors() {
    //   this.form.colors.push({
    //     name: '#fff',
    //   })
    // },
    reset() {
      this.form = {
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
          startColor: "#fff",
          endColor: "#000"
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
  "0895a3db",
  "d8dc875a"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map