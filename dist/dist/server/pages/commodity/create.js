exports.ids = [11];
exports.modules = {

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("59e60ae6", content, true, context)
};

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".el-upload--picture-card,.el-upload-list--picture-card .el-upload-list__item{width:192px;height:100px;line-height:100px;text-align:center}.photo{width:192px;height:100px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/commodity/create.vue?vue&type=template&id=9d95325c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{ref:"form",attrs:{"model":_vm.form,"label-width":"108px"}},[_c('el-form-item',[(_vm.isCreate)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-circle-plus-outline","loading":_vm.isSubmit},on:{"click":function($event){return _vm.onSubmit('form')}}},[_vm._v("\n      "+_vm._s(_vm.$t('content.create'))+"\n    ")]):_c('el-button',{attrs:{"type":"primary","icon":"el-icon-check","loading":_vm.isSubmit},on:{"click":function($event){return _vm.onSubmit('form')}}},[_vm._v("\n      "+_vm._s(_vm.$t('content.update'))+"\n    ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-check"},on:{"click":_vm.onMock}},[_vm._v("\n      "+_vm._s(_vm.$t('content.fill'))+"\n    ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-circle-close"},on:{"click":function($event){return _vm.resetForm('form')}}},[_vm._v(_vm._s(_vm.$t('content.clear')))])],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.name') }),"prop":'name.zh-cn',"rules":{
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
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.categorys),callback:function ($$v) {_vm.$set(_vm.form, "categorys", $$v)},expression:"form.categorys"}},_vm._l((_vm.categorys),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.categorys[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.classification'),"prop":'classifications',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.classification')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.classifications),callback:function ($$v) {_vm.$set(_vm.form, "classifications", $$v)},expression:"form.classifications"}},_vm._l((_vm.classifications),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.classifications[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.material'),"prop":'materials',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.material')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.materials),callback:function ($$v) {_vm.$set(_vm.form, "materials", $$v)},expression:"form.materials"}},_vm._l((_vm.materials),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.materials[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.model'),"prop":'models',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.model')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.models),callback:function ($$v) {_vm.$set(_vm.form, "models", $$v)},expression:"form.models"}},_vm._l((_vm.models),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.models[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.place'),"prop":'places',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.place')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.places),callback:function ($$v) {_vm.$set(_vm.form, "places", $$v)},expression:"form.places"}},_vm._l((_vm.places),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.places[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.ruiwu'),"prop":'ruiwus',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.ruiwu')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.ruiwus),callback:function ($$v) {_vm.$set(_vm.form, "ruiwus", $$v)},expression:"form.ruiwus"}},_vm._l((_vm.ruiwus),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.ruiwus[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.shape'),"prop":'shapes',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.shape')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.shapes),callback:function ($$v) {_vm.$set(_vm.form, "shapes", $$v)},expression:"form.shapes"}},_vm._l((_vm.shapes),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.shapes[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.specification'),"prop":'specifications',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.specification')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.specifications),callback:function ($$v) {_vm.$set(_vm.form, "specifications", $$v)},expression:"form.specifications"}},_vm._l((_vm.specifications),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.specifications[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.style'),"prop":'styles',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.style')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.styles),callback:function ($$v) {_vm.$set(_vm.form, "styles", $$v)},expression:"form.styles"}},_vm._l((_vm.styles),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.styles[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.technique'),"prop":'techniques',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.technique')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.techniques),callback:function ($$v) {_vm.$set(_vm.form, "techniques", $$v)},expression:"form.techniques"}},_vm._l((_vm.techniques),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.techniques[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.theme'),"prop":'themes',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.theme')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.themes),callback:function ($$v) {_vm.$set(_vm.form, "themes", $$v)},expression:"form.themes"}},_vm._l((_vm.themes),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.themes[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.type'),"prop":'types',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.type')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.types),callback:function ($$v) {_vm.$set(_vm.form, "types", $$v)},expression:"form.types"}},_vm._l((_vm.types),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.types[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.use'),"prop":'uses',"rules":{
      required: false,
      message: ("" + (_vm.$t('commodity.use')) + (_vm.$t('form.noEmpty'))),
      trigger: 'change',
    }}},[_c('el-checkbox-group',{model:{value:(_vm.form.uses),callback:function ($$v) {_vm.$set(_vm.form, "uses", $$v)},expression:"form.uses"}},_vm._l((_vm.uses),function(item,index){return _c('el-checkbox',{key:index,attrs:{"name":"type","label":item}},[_vm._v("\n        "+_vm._s(_vm.options.uses[index].name)+"\n      ")])}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.color.title')}},[_c('el-row',{attrs:{"gutter":10}},[_c('el-col',{attrs:{"span":4}},[_c('el-form-item',{attrs:{"prop":'colors[0].startColor',"label":"开始颜色","rules":{
            required: false,
            message: ("" + (_vm.$t('commodity.color.title')) + (_vm.$t('form.noEmpty'))),
            trigger: 'blur',
          }}},[_c('el-color-picker',{model:{value:(_vm.form.colors[0].startColor),callback:function ($$v) {_vm.$set(_vm.form.colors[0], "startColor", $$v)},expression:"form.colors[0].startColor"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-form-item',{attrs:{"prop":'colors[0].endColor',"label":"结束颜色","rules":{
            required: false,
            message: ("" + (_vm.$t('commodity.color.title')) + (_vm.$t('form.noEmpty'))),
            trigger: 'blur',
          }}},[_c('el-color-picker',{model:{value:(_vm.form.colors[0].endColor),callback:function ($$v) {_vm.$set(_vm.form.colors[0], "endColor", $$v)},expression:"form.colors[0].endColor"}})],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.photo')}},[_c('el-upload',{staticClass:"commodity-photo",attrs:{"file-list":_vm.form.photos,"action":((_vm.$config.origin) + "/api/upload/images"),"data":{ type: 'commodity' },"list-type":"picture-card","on-preview":_vm.uploadPreview,"on-remove":_vm.uploadRemove,"on-success":_vm.uploadSuccess,"before-upload":_vm.beforeUpload}},[_c('i',{staticClass:"el-icon-plus"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("\n        艺术品图片，请上传 768X400 比例的图片，且不超过2M\n      ")])]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible,"center":""},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"768px","height":"400px","src":_vm.dialogImageUrl,"alt":""}}),_vm._v(" "),_c('p',[_vm._v("图片尺寸：768X400")])])],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.state.title'),"prop":'state'}},[_c('el-radio-group',{model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v)},expression:"form.state"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v(_vm._s(_vm.$t('commodity.state.added')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v(_vm._s(_vm.$t('commodity.state.onsale')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v(_vm._s(_vm.$t('commodity.state.sold')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":3}},[_vm._v(_vm._s(_vm.$t('commodity.state.offline')))])],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.seller')}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":8}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.id') })},model:{value:(_vm.form.sellerId),callback:function ($$v) {_vm.$set(_vm.form, "sellerId", $$v)},expression:"form.sellerId"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/commodity/create.vue?vue&type=template&id=9d95325c&

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
      options: {},
      // 0:已添加，1:售卖中，2:已售卖，3:已下架
      states: [{
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
      }],
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
      uses: [],
      isSubmit: false
    };
  },

  async fetch() {
    this.options = {};
  },

  computed: {},
  watch: {
    '$route.query': '$fetch'
  },
  watchQuery: ['commodityId'],

  async created() {
    this.isCreate = true;
    this.reset();
    const options = await this.$axios.$get(`/api/admin/commodity/options`);

    if (options.success) {
      this.options = options.data; // "category": "类别",

      this.categorys = options.data.categorys.map(item => item.id); // "classification": "分类",

      this.classifications = options.data.classifications.map(item => item.id); // "material": "材质",

      this.materials = options.data.materials.map(item => item.id); // "model": "款式",

      this.models = options.data.models.map(item => item.id); // "place": "摆放",

      this.places = options.data.places.map(item => item.id); // "ruiwu": "瑞物",

      this.ruiwus = options.data.ruiwus.map(item => item.id); // "shape": "形状",

      this.shapes = options.data.shapes.map(item => item.id); // "specification": "规格",

      this.specifications = options.data.specifications.map(item => item.id); // "style": "风格",

      this.styles = options.data.styles.map(item => item.id); // "technique": "手法",

      this.techniques = options.data.techniques.map(item => item.id); // "theme": "主题",

      this.themes = options.data.themes.map(item => item.id); // "type": "类型",

      this.types = options.data.types.map(item => item.id); // "use": "用途",

      this.uses = options.data.uses.map(item => item.id);
    } // await this.onCommoditySearch()


    if (this.$route.query && this.$route.query.commodityId) {
      const commodity = await this.$axios.$get('/api/admin/commodity/edit', {
        params: {
          commodityId: this.$route.query.commodityId
        }
      });

      if (commodity.success) {
        const commodityForm = commodity.data;
        console.log('commodityForm', commodityForm);
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


        this.form.categorys = commodityForm.categorys.map(item => item.optionId); // "classification": "分类",

        this.form.classifications = commodityForm.classifications.map(item => item.optionId); // "material": "材质",

        this.form.materials = commodityForm.materials.map(item => item.optionId); // "model": "款式",

        this.form.models = commodityForm.models.map(item => item.optionId); // "place": "摆放",

        this.form.places = commodityForm.places.map(item => item.optionId); // "ruiwu": "瑞物",

        this.form.ruiwus = commodityForm.ruiwus.map(item => item.optionId); // "shape": "形状",

        this.form.shapes = commodityForm.shapes.map(item => item.optionId); // "specification": "规格",

        this.form.specifications = commodityForm.specifications.map(item => item.optionId); // "style": "风格",

        this.form.styles = commodityForm.styles.map(item => item.optionId); // "technique": "手法",

        this.form.techniques = commodityForm.techniques.map(item => item.optionId); // "theme": "主题",

        this.form.themes = commodityForm.themes.map(item => item.optionId); // "type": "类型",

        this.form.types = commodityForm.types.map(item => item.optionId); // "use": "用途",

        this.form.uses = commodityForm.uses.map(item => item.optionId);

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
          this.isSubmit = true;

          if (this.isCreate) {
            data = await this.$axios.$post('/api/admin/commodity/create', this.form).catch(error => {
              this.isSubmit = false;
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}! ${error.response.data.message}`,
                type: 'error'
              });
            });
          } else {
            console.log('this.form', this.form);
            data = await this.$axios.$post('/api/admin/commodity/update', this.form).catch(error => {
              this.isSubmit = false;
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}! ${error.response.data.message}`,
                type: 'error'
              });
            });
          }

          this.isSubmit = false; // console.log('data', data)

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
          startColor: '#ffffff',
          endColor: '#000000'
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
          startColor: '#ffffff',
          endColor: '#000000'
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
    },

    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error('上传的图片大小不能超过 2MB!');
      }

      return isLt2M;
    }

  }
});
// CONCATENATED MODULE: ./pages/commodity/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var commodity_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/commodity/create.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commodity_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d8dc875a"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map