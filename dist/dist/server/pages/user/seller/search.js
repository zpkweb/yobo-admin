exports.ids = [28];
exports.modules = {

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/seller/search.vue?vue&type=template&id=8c822678&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form',{staticClass:"user-search",attrs:{"inline":true,"model":_vm.sellerSearch}},[_c('el-form-item',{attrs:{"label":_vm.$t('user.firstName')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.firstName') }),"clearable":""},model:{value:(_vm.sellerSearch.firstname),callback:function ($$v) {_vm.$set(_vm.sellerSearch, "firstname", $$v)},expression:"sellerSearch.firstname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.lastName')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.lastName') }),"clearable":""},model:{value:(_vm.sellerSearch.lastname),callback:function ($$v) {_vm.$set(_vm.sellerSearch, "lastname", $$v)},expression:"sellerSearch.lastname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.label')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.label') }),"clearable":""},model:{value:(_vm.sellerSearch.label),callback:function ($$v) {_vm.$set(_vm.sellerSearch, "label", $$v)},expression:"sellerSearch.label"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.gender')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.gender') }),"clearable":""},model:{value:(_vm.sellerSearch.gender),callback:function ($$v) {_vm.$set(_vm.sellerSearch, "gender", $$v)},expression:"sellerSearch.gender"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.country')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.country') }),"clearable":""},model:{value:(_vm.sellerSearch.country),callback:function ($$v) {_vm.$set(_vm.sellerSearch, "country", $$v)},expression:"sellerSearch.country"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.state')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.state') }),"clearable":""},model:{value:(_vm.sellerSearch.state),callback:function ($$v) {_vm.$set(_vm.sellerSearch, "state", $$v)},expression:"sellerSearch.state"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.id')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.id') }),"clearable":""},model:{value:(_vm.sellerSearch.sellerId),callback:function ($$v) {_vm.$set(_vm.sellerSearch, "sellerId", $$v)},expression:"sellerSearch.sellerId"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":function($event){return _vm.onSubmit(_vm.currentPage)}}},[_vm._v(_vm._s(_vm.$t('content.search')))])],1)],1),_vm._ssrNode(" "),_c('el-table',{attrs:{"data":_vm.seller,"border":""}},[_c('el-table-column',{attrs:{"prop":"sellerId","label":_vm.$t('user.seller.id')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user.avatar","label":_vm.$t('user.avatar')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{staticClass:"image",attrs:{"src":scope.row.user.avatar,"width":"100px"}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"firstname","label":_vm.$t('user.firstName')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"lastname","label":_vm.$t('user.lastName')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user.email","label":_vm.$t('user.email')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user.phone","label":_vm.$t('user.phone')}}),_vm._v(" "),_c('el-table-column',{attrs:{"formatter":_vm.formatterDate,"prop":"user.createdDate","label":_vm.$t('content.createdDate')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"state","label":_vm.$t('user.state')}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('content.operation'),"width":"172"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","icon":"el-icon-edit"},on:{"click":function($event){return _vm.editUser(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.edit')))]),_vm._v(" "),_c('el-popover',{attrs:{"placement":"top"},model:{value:(scope.row.visible),callback:function ($$v) {_vm.$set(scope.row, "visible", $$v)},expression:"scope.row.visible"}},[_c('p',[_vm._v(_vm._s(_vm.$t('content.deleteText')))]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"right","margin":"0"}},[_c('el-button',{attrs:{"size":"mini","type":"text"},on:{"click":function($event){scope.row.visible = false}}},[_vm._v(_vm._s(_vm.$t('content.cancel')))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.deleteSeller(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.define')))])],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","size":"mini","type":"danger","icon":"el-icon-delete"},slot:"reference"},[_vm._v(_vm._s(_vm.$t('content.delete')))])],1)]}}])})],1),_vm._ssrNode(" "),_c('el-pagination',{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"background":"","layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.currentPage,"total":_vm.total},on:{"current-change":_vm.changeCurrentPage}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/seller/search.vue?vue&type=template&id=8c822678&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/seller/search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  data() {
    return {
      seller: [],
      sellerSearch: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        label: '',
        gender: '',
        country: '',
        state: ''
      },
      currentPage: 1,
      pageSize: 10,
      total: 0
    };
  },

  async fetch() {
    let searchData = await this.$axios.$get('/api/admin/user/seller/search', {
      params: { ...this.sellerSearch,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
    });
    console.log("searchData", searchData);
    let sellerData = [];
    searchData.data.list.forEach(item => {
      item.visible = false;

      if (!item.user) {
        item.user = {
          avatar: '',
          createdDate: '',
          name: '',
          email: '',
          phone: '',
          userId: ''
        };
      }

      sellerData.push(item);
    });
    console.log("searchData", sellerData);
    this.total = searchData.data.total;
    this.seller = sellerData;
  },

  methods: {
    // 查找用户
    async onSubmit(currentPage) {
      const searchData = await this.$axios.$get('/api/admin/user/seller/search', {
        params: { ...this.sellerSearch,
          currentPage: currentPage,
          pageSize: this.pageSize
        }
      });
      let sellerDataFormat = [];
      searchData.data.list.forEach(item => {
        item.visible = false;

        if (!item.user) {
          item.user = {
            avatar: '',
            createdDate: '',
            name: '',
            email: '',
            phone: '',
            userId: ''
          };
        }

        sellerDataFormat.push(item);
      });
      this.total = searchData.data.total;
      this.seller = sellerDataFormat;
    },

    // 删除用户
    async deleteSeller(index, row) {
      console.log('deleteSeller', row);
      const user = await this.$axios.$get('/api/admin/user/seller/delete', {
        params: {
          sellerId: row.sellerId
        }
      });

      if (user.success) {
        this.seller.splice(index, 1);
        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t('content.success')}`,
          type: 'success'
        });
      } else {
        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t('content.fail')}!`,
          type: 'error'
        });
      }
    },

    editUser(index, row) {
      console.log(index, row);
      this.$router.push(this.localePath(`/user/seller/create?sellerId=${row.sellerId}`));
    },

    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss');
    },

    changeCurrentPage(currentPage) {
      this.onSubmit(currentPage);
    }

  }
});
// CONCATENATED MODULE: ./pages/user/seller/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var seller_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/seller/search.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  seller_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8c822678",
  "0df1ea2e"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search.js.map