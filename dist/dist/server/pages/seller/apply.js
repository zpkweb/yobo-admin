exports.ids = [20];
exports.modules = {

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/apply.vue?vue&type=template&id=e270c52e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-table',{attrs:{"data":_vm.seller,"border":""}},[_c('el-table-column',{attrs:{"prop":"firstname","label":_vm.$t('user.seller.firstName')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"lastname","label":_vm.$t('user.seller.lastName')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user.name","label":_vm.$t('user.name')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user.email","label":_vm.$t('user.email')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user.phone","label":_vm.$t('user.phone')}}),_vm._v(" "),_c('el-table-column',{attrs:{"formatter":_vm.formatterDate,"prop":"user.createdDate","label":_vm.$t('content.createdDate')}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('content.operation'),"width":"182"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","type":"success","icon":"el-icon-check"},on:{"click":function($event){return _vm.agree(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.agree')))]),_vm._v(" "),_c('el-button',{attrs:{"size":"mini","type":"danger","icon":"el-icon-close"},on:{"click":function($event){return _vm.reject(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.reject')))])]}}])})],1),_vm._ssrNode(" "),_c('el-pagination',{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"background":"","layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.currentPage,"total":_vm.total},on:{"current-change":_vm.changeCurrentPage}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/seller/apply.vue?vue&type=template&id=e270c52e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/apply.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var applyvue_type_script_lang_js_ = ({
  data() {
    return {
      seller: [],
      search: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        label: '',
        gender: '',
        country: '',
        state: '0'
      },
      currentPage: 1,
      pageSize: 10,
      total: 0
    };
  },

  async fetch() {
    const searchData = await this.$axios.$get('/api/admin/seller/search', {
      params: { ...this.search,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
    });
    this.total = searchData.data.total;
    this.seller = searchData.data.list;
  },

  methods: {
    async onSubmit(currentPage) {
      const searchData = await this.$axios.$get('/api/admin/seller/search', {
        params: { ...this.search,
          currentPage: currentPage,
          pageSize: this.pageSize
        }
      });
      this.total = searchData.data.total;
      this.seller = searchData.data.list;
    },

    edit(index, row) {
      // console.log(index, row)
      this.$router.push(this.localePath(`/user/seller/create?sellerId=${row.sellerId}`));
    },

    async agree(index, row) {
      // console.log(index, row)
      // setState
      const seller = await this.$axios.$post('/api/admin/seller/setState', {
        sellerId: row.sellerId,
        state: 1
      }); // console.log('seller', seller)

      this.seller.splice(index, 1);
    },

    async reject(index, row) {
      // console.log(index, row)
      // setState
      const seller = await this.$axios.$post('/api/admin/seller/setState', {
        sellerId: row.sellerId,
        state: 2
      }); // console.log('seller', seller)

      this.seller.splice(index, 1);
    },

    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss');
    },

    changeCurrentPage(currentPage) {
      this.onSubmit(currentPage);
    }

  }
});
// CONCATENATED MODULE: ./pages/seller/apply.vue?vue&type=script&lang=js&
 /* harmony default export */ var seller_applyvue_type_script_lang_js_ = (applyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seller/apply.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  seller_applyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e270c52e",
  "20178193"
  
)

/* harmony default export */ var apply = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=apply.js.map