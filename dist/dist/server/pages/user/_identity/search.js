exports.ids = [22];
exports.modules = {

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_identity/search.vue?vue&type=template&id=76de823b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form',{key:_vm.$route.path,staticClass:"user-search",attrs:{"inline":true,"model":_vm.userSearch}},[_c('el-form-item',{attrs:{"label":_vm.$t('user.name')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.name') }),"clearable":""},model:{value:(_vm.userSearch.name),callback:function ($$v) {_vm.$set(_vm.userSearch, "name", $$v)},expression:"userSearch.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.email')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.email') }),"clearable":""},model:{value:(_vm.userSearch.email),callback:function ($$v) {_vm.$set(_vm.userSearch, "email", $$v)},expression:"userSearch.email"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.phone')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.phone') }),"clearable":""},model:{value:(_vm.userSearch.phone),callback:function ($$v) {_vm.$set(_vm.userSearch, "phone", $$v)},expression:"userSearch.phone"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":function($event){return _vm.onSubmit(_vm.currentPage)}}},[_vm._v(_vm._s(_vm.$t('content.search')))])],1)],1),_vm._ssrNode(" "),_c('el-table',{attrs:{"data":_vm.user,"border":""}},[_c('el-table-column',{attrs:{"prop":"name","label":_vm.$t('user.name')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"email","label":_vm.$t('user.email')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"phone","label":_vm.$t('user.phone')}}),_vm._v(" "),_c('el-table-column',{attrs:{"formatter":_vm.formatterDate,"prop":"createdDate","label":_vm.$t('content.createdDate')}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('content.operation'),"width":"172"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","icon":"el-icon-edit"},on:{"click":function($event){return _vm.editUser(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.edit')))]),_vm._v(" "),_c('el-popover',{attrs:{"placement":"top"},model:{value:(scope.row.visible),callback:function ($$v) {_vm.$set(scope.row, "visible", $$v)},expression:"scope.row.visible"}},[_c('p',[_vm._v(_vm._s(_vm.$t('content.deleteText')))]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"right","margin":"0"}},[_c('el-button',{attrs:{"size":"mini","type":"text"},on:{"click":function($event){scope.row.visible = false}}},[_vm._v(_vm._s(_vm.$t('content.cancel')))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.removeUser(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.define')))])],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","size":"mini","type":"danger","icon":"el-icon-delete"},slot:"reference"},[_vm._v(_vm._s(_vm.$t('content.delete')))])],1)]}}])})],1),_vm._ssrNode(" "),_c('el-pagination',{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"background":"","layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.currentPage,"total":_vm.total},on:{"current-change":_vm.changeCurrentPage}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_identity/search.vue?vue&type=template&id=76de823b&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_identity/search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  async fetch() {
    const userSearch = await this.$axios.$get('/api/admin/user/search', {
      params: {
        identity: this.$route.params.identity,
        name: this.userSearch.name,
        email: this.userSearch.email,
        phone: this.userSearch.phone
      }
    });
    this.total = userSearch.data.total;
    const userData = userSearch.data.list.map(item => {
      item.visible = false; // item.isEdit = false
      // item.identitys = item.identitys.map((item) => {
      //   item.identityVisible = false
      //   return item
      // })

      return item;
    });
    this.user = userData; // this.user = userSearch.data
  },

  data() {
    return {
      user: [],
      userSearch: {
        name: '',
        email: '',
        phone: ''
      },
      currentPage: 1,
      pageSize: 10,
      total: 0
    };
  },

  watch: {
    '$route.query': '$fetch'
  },
  methods: {
    // 查找用户
    async onSubmit(currentPage) {
      const userSearch = await this.$axios.$get('/api/admin/user/search', {
        params: {
          identity: this.$route.params.identity,
          name: this.userSearch.name,
          email: this.userSearch.email,
          phone: this.userSearch.phone,
          currentPage: currentPage,
          pageSize: this.pageSize
        }
      });
      this.total = userSearch.data.total;
      this.user = userSearch.data.list;
    },

    // 删除用户
    async removeUser(index, row) {
      const user = await this.$axios.$get('/api/admin/user/remove', {
        params: {
          userId: row.userId
        }
      });

      if (user.success) {
        this.user.splice(index, 1);
        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t('content.success')}！`,
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
      // eslint-disable-next-line no-console
      console.log(index, row);
      this.$router.push(this.localePath(`${this.$route.path}/create?userId=${row.userId}`));
    },

    handleDelete(index, row) {
      // eslint-disable-next-line no-console
      console.log(index, row);
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss');
    },

    changeCurrentPage(currentPage) {
      this.onSubmit(currentPage);
    }

  }
});
// CONCATENATED MODULE: ./pages/user/_identity/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var _identity_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/_identity/search.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _identity_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "76de823b",
  "5a721a8e"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=search.js.map