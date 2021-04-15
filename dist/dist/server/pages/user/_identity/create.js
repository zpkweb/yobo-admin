exports.ids = [20];
exports.modules = {

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4408be03", content, true, context)
};

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_5508a19a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_5508a19a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_5508a19a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_5508a19a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_5508a19a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".user-create[data-v-5508a19a]{width:100%;display:flex;align-items:center;justify-content:center}.user-create-form[data-v-5508a19a]{width:90%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_identity/create.vue?vue&type=template&id=5508a19a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-create"},[_c('el-form',{ref:"userCreate",staticClass:"user-create-form",attrs:{"model":_vm.userCreate,"rules":_vm.rules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.$t('user.avatar'),"prop":"avatar"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":((_vm.$config.origin) + "/api/upload/images"),"data":{ type: 'avatar' },"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload},model:{value:(_vm.userCreate.avatar),callback:function ($$v) {_vm.$set(_vm.userCreate, "avatar", $$v)},expression:"userCreate.avatar"}},[(_vm.userCreate.avatar)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.userCreate.avatar}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("用户头像，请上传 正方形 比例的图片")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.name'),"prop":"name"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.name') })},model:{value:(_vm.userCreate.name),callback:function ($$v) {_vm.$set(_vm.userCreate, "name", $$v)},expression:"userCreate.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.email'),"prop":"email"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.email') })},model:{value:(_vm.userCreate.email),callback:function ($$v) {_vm.$set(_vm.userCreate, "email", $$v)},expression:"userCreate.email"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.phone'),"prop":"phone"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.phone') })},model:{value:(_vm.userCreate.phone),callback:function ($$v) {_vm.$set(_vm.userCreate, "phone", $$v)},expression:"userCreate.phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.password'),"prop":"password"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.password') })},model:{value:(_vm.userCreate.password),callback:function ($$v) {_vm.$set(_vm.userCreate, "password", $$v)},expression:"userCreate.password"}})],1),_vm._v(" "),_c('el-form-item',[(_vm.isCreate)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":function($event){return _vm.submitForm('userCreate')}}},[_vm._v("\n        "+_vm._s(_vm.$t('content.create'))+"\n      ")]):_c('el-button',{attrs:{"type":"primary","icon":"el-icon-check"},on:{"click":function($event){return _vm.submitForm('userCreate')}}},[_vm._v("\n        "+_vm._s(_vm.$t('content.update'))+"\n      ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-check"},on:{"click":_vm.onMock}},[_vm._v(" "+_vm._s(_vm.$t('content.fill'))+" ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-circle-close"},on:{"click":function($event){return _vm.resetForm('userCreate')}}},[_vm._v(_vm._s(_vm.$t('content.clear')))])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_identity/create.vue?vue&type=template&id=5508a19a&scoped=true&

// EXTERNAL MODULE: external "mockjs"
var external_mockjs_ = __webpack_require__(116);
var external_mockjs_default = /*#__PURE__*/__webpack_require__.n(external_mockjs_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_identity/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // console.log('fetch this.$refs.userCreate', this.$refs.userCreate)
    // this.$refs.userCreate.resetFields()
    if (this.$route.query && this.$route.query.userId) {
      this.userId = this.$route.query.userId;
      const user = await this.$axios.$get('/api/admin/user', {
        params: {
          userId: this.userId
        }
      });

      if (user.success) {
        this.userCreate = Object.assign(this.userCreate, user.data);
        this.type = 'edit';
        this.typeText = this.$t('content.update');
        this.isCreate = false;
        this.rules.password[0].required = false;
      }
    }
  },

  data() {
    // var validateEmail = (rule, value, callback) => {
    //   if (!value && !this.userCreate.phone) {
    //     callback(new Error('邮箱和手机必须输入一项'))
    //   } else {
    //     if (!this.userCreate.phone) {
    //       this.$refs.userCreate.clearValidate('phone')
    //     }
    //     callback()
    //   }
    // }
    // var validatePhone = (rule, value, callback) => {
    //   if (!this.userCreate.email && !value) {
    //     callback(new Error('邮箱和手机必须输入一项'))
    //   } else {
    //     if (!this.userCreate.email) {
    //       this.$refs.userCreate.clearValidate('email')
    //     }
    //     callback()
    //   }
    // }
    return {
      type: 'create',
      // create edit
      typeText: this.$t('content.create'),
      isCreate: true,
      userId: '',
      userCreate: {
        avatar: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        identity: []
      },
      rules: {
        // name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        email: [{
          required: true,
          message: this.$t('form.placeholder', {
            msg: this.$t('user.email')
          }),
          trigger: 'blur'
        }],
        // phone: [{ validator: validatePhone, trigger: 'blur' }],
        password: [{
          required: true,
          message: this.$t('form.placeholder', {
            msg: this.$t('user.password')
          }),
          trigger: 'blur'
        }] // identity: [
        //   {
        //     type: 'array',
        //     required: true,
        //     message: '请至少选择一个身份',
        //     trigger: 'change',
        //   },
        // ],

      }
    };
  },

  // watchQuery: ['userId','sellerId'],
  watch: {
    '$route.query': '$fetch'
  },
  methods: {
    submitForm(userCreate) {
      this.$refs[userCreate].validate(async valid => {
        if (valid) {
          let data;

          if (this.isCreate) {
            data = await this.$axios.$post('/api/admin/user/register', {
              identity: this.$route.params.identity,
              avatar: this.userCreate.avatar,
              name: this.userCreate.name,
              email: this.userCreate.email,
              phone: this.userCreate.phone,
              password: this.userCreate.password
            }).catch(error => {
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}! ${error.response.data.message}`,
                type: 'error'
              });
            });
          } else {
            data = await this.$axios.$post('/api/admin/user/update', {
              userId: this.userId,
              avatar: this.userCreate.avatar,
              name: this.userCreate.name,
              email: this.userCreate.email,
              phone: this.userCreate.phone,
              password: this.userCreate.password
            });
          }

          if (data.status === 200) {
            this.$message({
              showClose: true,
              message: `${this.userCreate.name}，${this.typeText}${this.$t('content.success')}`,
              type: 'success'
            });

            if (this.isCreate) {
              this.$refs[userCreate].resetFields();
            }
          } else {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}!${data.message}`,
              type: 'error'
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    resetForm(userCreate) {
      this.$refs[userCreate].resetFields();
    },

    onMock() {
      this.userCreate = {
        avatar: '',
        name: external_mockjs_default.a.mock('@cname'),
        email: external_mockjs_default.a.mock('@email'),
        password: '123'
      };
    },

    handleAvatarSuccess(res, file) {
      // this.userCreate.avatar = URL.createObjectURL(file.raw);
      this.userCreate.avatar = res.data.src;
    },

    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2; // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }

      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      } // return isJPG && isLt2M;
      // return isLt2M

    }

  }
});
// CONCATENATED MODULE: ./pages/user/_identity/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var _identity_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/_identity/create.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(151)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _identity_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5508a19a",
  "4ebc640d"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map