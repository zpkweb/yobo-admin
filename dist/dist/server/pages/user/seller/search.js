exports.ids = [28];
exports.modules = {

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/seller/search.vue?vue&type=template&id=1c7e5412&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form',{staticClass:"user-search",attrs:{"inline":true,"model":_vm.userSearch}},[_c('el-form-item',{attrs:{"label":_vm.$t('user.firstName')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.firstName') }),"clearable":""},model:{value:(_vm.userSearch.firstname),callback:function ($$v) {_vm.$set(_vm.userSearch, "firstname", $$v)},expression:"userSearch.firstname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.lastName')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.lastName') }),"clearable":""},model:{value:(_vm.userSearch.lastname),callback:function ($$v) {_vm.$set(_vm.userSearch, "lastname", $$v)},expression:"userSearch.lastname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.label')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.label') }),"clearable":""},model:{value:(_vm.userSearch.label),callback:function ($$v) {_vm.$set(_vm.userSearch, "label", $$v)},expression:"userSearch.label"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.gender')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.gender') }),"clearable":""},model:{value:(_vm.userSearch.gender),callback:function ($$v) {_vm.$set(_vm.userSearch, "gender", $$v)},expression:"userSearch.gender"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.country')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.country') }),"clearable":""},model:{value:(_vm.userSearch.country),callback:function ($$v) {_vm.$set(_vm.userSearch, "country", $$v)},expression:"userSearch.country"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.state')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.state') }),"clearable":""},model:{value:(_vm.userSearch.state),callback:function ($$v) {_vm.$set(_vm.userSearch, "state", $$v)},expression:"userSearch.state"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.id')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.id') }),"clearable":""},model:{value:(_vm.userSearch.sellerId),callback:function ($$v) {_vm.$set(_vm.userSearch, "sellerId", $$v)},expression:"userSearch.sellerId"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":_vm.onSubmit}},[_vm._v(_vm._s(_vm.$t('content.search')))])],1)],1),_vm._ssrNode(" "),_c('el-table',{attrs:{"data":_vm.user,"border":""}},[_c('el-table-column',{attrs:{"prop":"sellerId","label":_vm.$t('user.seller.id')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user.avatar","label":_vm.$t('user.avatar')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('img',{staticClass:"image",attrs:{"src":scope.row.user.avatar,"width":"100px"}})]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"firstname","label":_vm.$t('user.firstName')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"lastname","label":_vm.$t('user.lastName')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user.email","label":_vm.$t('user.email')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"user.phone","label":_vm.$t('user.phone')}}),_vm._v(" "),_c('el-table-column',{attrs:{"formatter":_vm.formatterDate,"prop":"user.createdDate","label":_vm.$t('content.createdDate')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"state","label":_vm.$t('user.state')}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('content.operation'),"width":"172"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","icon":"el-icon-edit"},on:{"click":function($event){return _vm.editUser(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.edit')))]),_vm._v(" "),_c('el-popover',{attrs:{"placement":"top"},model:{value:(scope.row.visible),callback:function ($$v) {_vm.$set(scope.row, "visible", $$v)},expression:"scope.row.visible"}},[_c('p',[_vm._v(_vm._s(_vm.$t('content.deleteText')))]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"right","margin":"0"}},[_c('el-button',{attrs:{"size":"mini","type":"text"},on:{"click":function($event){scope.row.visible = false}}},[_vm._v(_vm._s(_vm.$t('content.cancel')))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.deleteSeller(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.define')))])],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","size":"mini","type":"danger","icon":"el-icon-delete"},slot:"reference"},[_vm._v(_vm._s(_vm.$t('content.delete')))])],1)]}}])})],1),_vm._ssrNode(" "),_c('el-pagination',{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"background":"","layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.currentPage,"total":_vm.total},on:{"current-change":_vm.changeCurrentPage}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/seller/search.vue?vue&type=template&id=1c7e5412&scoped=true&

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
//
/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  data() {
    return {
      user: [],
      userSearch: {
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
      pageSize: 8,
      total: 0
    };
  },

  async fetch() {
    let searchData = await this.$axios.$get('/api/admin/user/seller/search', {
      params: { ...this.userSearch,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
    }); // this.user = userSearch.data

    let userData = [];
    searchData.data.list.forEach(item => {
      item.visible = false; // item.isEdit = false
      // item.identitys = item.identitys.map((item) => {
      //   item.identityVisible = false
      //   return item
      // })

      if (item.user) {
        userData.push(item);
      }
    }); // console.log("searchData", userData)

    this.total = searchData.data.total;
    this.user = userData;
  },

  methods: {
    // 查找用户
    async onSubmit() {
      const searchData = await this.$axios.$get('/api/admin/user/seller/search', {
        params: { ...this.userSearch,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }
      });
      this.total = searchData.data.total;
      this.user = searchData.data.list;
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
        this.user.splice(index, 1);
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
      this.$router.push(this.localePath(`${this.$route.path}/create?sellerId=${row.sellerId}`));
    },

    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss');
    },

    changeCurrentPage(val) {
      this.currentPage = val;
      this.onSubmit();
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
  "1c7e5412",
  "0df1ea2e"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search.js.map