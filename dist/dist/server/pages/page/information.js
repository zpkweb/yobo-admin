exports.ids = [19];
exports.modules = {

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/page/information.vue?vue&type=template&id=b5284d84&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"information"},[_c('el-form',{staticClass:"user-search",attrs:{"inline":true,"model":_vm.informationSearch}},[_c('el-form-item',{attrs:{"label":_vm.$t('information.title')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('information.title') }),"clearable":""},model:{value:(_vm.informationSearch.title),callback:function ($$v) {_vm.$set(_vm.informationSearch, "title", $$v)},expression:"informationSearch.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"isTop","label":_vm.$t('information.isTop')}},[_c('el-switch',{model:{value:(_vm.informationSearch.isTop),callback:function ($$v) {_vm.$set(_vm.informationSearch, "isTop", $$v)},expression:"informationSearch.isTop"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":function($event){return _vm.onInformationSearch(1)}}},[_vm._v(_vm._s(_vm.$t('content.search')))])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/page/information.vue?vue&type=template&id=b5284d84&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/page/information.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var informationvue_type_script_lang_js_ = ({
  data() {
    return {
      informationSearch: {
        title: '',
        isTop: false
      }
    };
  },

  methods: {
    onInformationSearch() {}

  }
});
// CONCATENATED MODULE: ./pages/page/information.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_informationvue_type_script_lang_js_ = (informationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/page/information.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_informationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b5284d84",
  "775ca63e"
  
)

/* harmony default export */ var information = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=information.js.map