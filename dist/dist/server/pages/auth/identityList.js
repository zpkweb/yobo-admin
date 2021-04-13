exports.ids = [8];
exports.modules = {

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/identityList.vue?vue&type=template&id=386c7265&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"identityList"},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.identityList}},[_c('el-table-column',{attrs:{"prop":"zh-cn","label":_vm.$t('lang.zh'),"width":"120"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"en-us","label":_vm.$t('lang.en'),"width":"120"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"ja-jp","label":_vm.$t('lang.ja'),"width":"120"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"es-es","label":_vm.$t('lang.es'),"width":"120"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"index","label":_vm.$t('content.identityCode')}})],1),_vm._ssrNode(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":5}},[(_vm.isCreate)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.createIdentityList}},[_vm._v("\n        "+_vm._s(_vm.$t('content.create'))+"\n      ")]):_vm._e()],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/auth/identityList.vue?vue&type=template&id=386c7265&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/identityList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var identityListvue_type_script_lang_js_ = ({
  data() {
    return {
      isCreate: false,
      identityList: []
    };
  },

  async fetch() {
    const identityList = await this.$axios.$get('/api/admin/identityList');
    console.log("identityList", identityList.data);

    if (identityList.success) {
      this.identityList = identityList.data;
    } else {
      this.isCreate = true;
      this.identityList = this.$store.state.identityList;
    }
  },

  methods: {
    createIdentityList() {
      console.log("createIdentityList");
    }

  }
});
// CONCATENATED MODULE: ./pages/auth/identityList.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_identityListvue_type_script_lang_js_ = (identityListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/auth/identityList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_identityListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5af07d9e"
  
)

/* harmony default export */ var identityList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=identityList.js.map