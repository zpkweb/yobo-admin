exports.ids = [14];
exports.modules = {

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("bded61d0", content, true, context)
};

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_306727e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_306727e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_306727e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_306727e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_306727e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".login[data-v-306727e6]{position:absolute;top:50%;right:15%;transform:translateY(-50%);width:330px;padding:50px;color:#fff}.login[data-v-306727e6]:before{content:\"\";position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;background-color:rgba(0,0,0,.8);box-sizing:border-box;box-shadow:0 15px 25px rgba(0,0,0,.5);border-radius:10px}.login-title[data-v-306727e6]{margin-bottom:30px}.login-btn[data-v-306727e6]{margin-top:30px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=306727e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{ref:"userForm",staticClass:"login",attrs:{"model":_vm.userForm,"status-icon":"","rules":_vm.rules,"label-width":"80px"}},[_c('h3',{staticClass:"login-title"},[_vm._v("yobo "+_vm._s(_vm.$t('login.title'))+" ?")]),_vm._v(" "),_c('el-form-item',{staticClass:"login-item",attrs:{"label":_vm.$t('login.name'),"prop":"name"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: ((_vm.$t('user.name')) + "/" + (_vm.$t('user.email'))) })},model:{value:(_vm.userForm.name),callback:function ($$v) {_vm.$set(_vm.userForm, "name", $$v)},expression:"userForm.name"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"login-item",attrs:{"label":_vm.$t('login.pass'),"prop":"pass"}},[_c('el-input',{attrs:{"type":"password","autocomplete":"off"},model:{value:(_vm.userForm.pass),callback:function ($$v) {_vm.$set(_vm.userForm, "pass", $$v)},expression:"userForm.pass"}})],1),_vm._v(" "),_c('el-button',{staticClass:"login-btn",on:{"click":function($event){return _vm.submitForm('userForm')}}},[_vm._v(_vm._s(_vm.$t('login.login')))])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=306727e6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  layout: 'login',

  data() {
    return {
      userForm: {
        name: 'root',
        pass: '123456'
      },
      rules: {
        name: [{
          required: true,
          message: '请输入用户名/邮箱/手机',
          trigger: 'blur'
        }],
        pass: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    };
  },

  fetch() {
    this.$store.commit("setUserMenu", []);
  },

  mounted() {
    this.$localForage.removeItem('user');
    window.addEventListener('keydown', this.keyDown);
  },

  destroyed() {
    window.removeEventListener('keydown', this.keyDown, false);
  },

  methods: {
    async submitForm(formName) {
      const valid = await this.$refs[formName].validate();

      if (valid) {
        const login = await this.$axios.$post('/api/admin/user/login', {
          name: this.userForm.name,
          password: this.userForm.pass
        });

        if (login.success) {
          // 用户登录 缓存
          console.log("login", login.data);
          await this.$localForage.setItem('user', login.data);
          this.$store.commit('setUser', login.data);
          this.$notify({
            title: `欢迎您，${login.data.name}`,
            // message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'),
            duration: 1500,
            offset: 70
          });
          this.$router.push(this.localePath('/'));
        } else {
          this.$message({
            showClose: true,
            message: `${login.message}`,
            type: 'error'
          });
        }
      } else {
        console.log('error submit!!');
        return false;
      }
    },

    keyDown(e) {
      //如果是回车则执行登录方法
      if (e.keyCode == 13) {
        this.submitForm('userForm');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(142)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "306727e6",
  "0b3c9e87"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map