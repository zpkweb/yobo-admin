exports.ids = [26];
exports.modules = {

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("ae936c18", content, true, context)
};

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_6a019f93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_6a019f93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_6a019f93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_6a019f93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_6a019f93_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".user-create[data-v-6a019f93]{width:100%;display:flex;align-items:center;justify-content:center}.user-create-form[data-v-6a019f93]{width:90%}.avatar-uploader .el-upload[data-v-6a019f93]{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload[data-v-6a019f93]:hover{border-color:#409eff}.avatar-uploader-icon[data-v-6a019f93]{font-size:28px;color:#8c939d;width:88px;height:88px;line-height:88px;text-align:center}.avatar[data-v-6a019f93]{display:block;width:180px;height:180px;border-radius:50%}.button-new-tag[data-v-6a019f93],.el-tag+.el-tag[data-v-6a019f93]{margin-left:10px}.button-new-tag[data-v-6a019f93]{height:32px;line-height:30px;padding-top:0;padding-bottom:0}.input-new-tag[data-v-6a019f93]{width:90px;margin-left:10px;vertical-align:bottom}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/seller/create.vue?vue&type=template&id=6a019f93&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-create"},[_c('el-form',{ref:"userCreate",staticClass:"user-create-form",attrs:{"model":_vm.userCreate,"rules":_vm.rules,"label-width":"100px"}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":_vm.$t('user.state'),"prop":"identity"}},[_c('el-select',{attrs:{"placeholder":_vm.$t('form.selectPlaceholder', { msg: _vm.$t('user.state') })},model:{value:(_vm.userCreate.state),callback:function ($$v) {_vm.$set(_vm.userCreate, "state", $$v)},expression:"userCreate.state"}},_vm._l((_vm.stateOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":((item.value) + " " + (item.label)),"value":item.value}})}),1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('el-form-item',{attrs:{"label":_vm.$t('user.type'),"prop":"identity"}},[_c('el-select',{attrs:{"placeholder":_vm.$t('form.selectPlaceholder', { msg: _vm.$t('user.type') })},model:{value:(_vm.userCreate.type),callback:function ($$v) {_vm.$set(_vm.userCreate, "type", $$v)},expression:"userCreate.type"}},_vm._l((_vm.typeOptions),function(item){return _c('el-option',{key:item.value,attrs:{"label":((item.value) + " " + (item.label)),"value":item.value}})}),1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[(_vm.isCreate)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":function($event){return _vm.submitForm('userCreate')}}},[_vm._v("\n          "+_vm._s(_vm.$t('content.create'))+"\n        ")]):_c('el-button',{attrs:{"type":"primary","icon":"el-icon-check"},on:{"click":function($event){return _vm.submitForm('userCreate')}}},[_vm._v("\n          "+_vm._s(_vm.$t('content.update'))+"\n        ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-check"},on:{"click":_vm.onMock}},[_vm._v("\n          "+_vm._s(_vm.$t('content.fill'))+"\n        ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-circle-close"},on:{"click":function($event){return _vm.resetForm('userCreate')}}},[_vm._v(_vm._s(_vm.$t('content.clear')))])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.avatar'),"prop":"avatar"}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":((_vm.$config.origin) + "/api/upload/images"),"data":{ type: 'avatar' },"show-file-list":false,"on-success":_vm.handleAvatarSuccess,"before-upload":_vm.beforeAvatarUpload},model:{value:(_vm.userCreate.avatar),callback:function ($$v) {_vm.$set(_vm.userCreate, "avatar", $$v)},expression:"userCreate.avatar"}},[(_vm.userCreate.avatar)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.userCreate.avatar}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("艺术家头像，请上传正方形的图片")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.label'),"prop":"tags"}},[_vm._l((_vm.userCreate.tags),function(tag){return _c('el-tag',{key:tag,attrs:{"closable":"","disable-transitions":false},on:{"close":function($event){return _vm.handleClose(tag)}}},[_vm._v("\n        "+_vm._s(tag)+"\n      ")])}),_vm._v(" "),(_vm.inputVisible)?_c('el-input',{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{"size":"small"},on:{"blur":_vm.handleInputConfirm},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleInputConfirm($event)}},model:{value:(_vm.inputValue),callback:function ($$v) {_vm.inputValue=$$v},expression:"inputValue"}}):_c('el-button',{staticClass:"button-new-tag",attrs:{"size":"small"},on:{"click":_vm.showInput}},[_vm._v("+ New Tag")])],2),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.firstName'),"prop":"firstname"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.firstName') })},model:{value:(_vm.userCreate.firstname),callback:function ($$v) {_vm.$set(_vm.userCreate, "firstname", $$v)},expression:"userCreate.firstname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.lastName'),"prop":"lastname"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.lastName') })},model:{value:(_vm.userCreate.lastname),callback:function ($$v) {_vm.$set(_vm.userCreate, "lastname", $$v)},expression:"userCreate.lastname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.email'),"prop":"email"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.email') })},model:{value:(_vm.userCreate.email),callback:function ($$v) {_vm.$set(_vm.userCreate, "email", $$v)},expression:"userCreate.email"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.phone'),"prop":"phone"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.phone') })},model:{value:(_vm.userCreate.phone),callback:function ($$v) {_vm.$set(_vm.userCreate, "phone", $$v)},expression:"userCreate.phone"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.password'),"prop":"password"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.password') })},model:{value:(_vm.userCreate.password),callback:function ($$v) {_vm.$set(_vm.userCreate, "password", $$v)},expression:"userCreate.password"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.gender'),"prop":"gender"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.gender') })},model:{value:(_vm.userCreate.gender),callback:function ($$v) {_vm.$set(_vm.userCreate, "gender", $$v)},expression:"userCreate.gender"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.country'),"prop":"country"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.country') })},model:{value:(_vm.userCreate.country),callback:function ($$v) {_vm.$set(_vm.userCreate, "country", $$v)},expression:"userCreate.country"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.language'),"prop":"language"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.language') })},model:{value:(_vm.userCreate.language),callback:function ($$v) {_vm.$set(_vm.userCreate, "language", $$v)},expression:"userCreate.language"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"profile"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.profile') })},model:{value:(_vm.userCreate.profile),callback:function ($$v) {_vm.$set(_vm.userCreate, "profile", $$v)},expression:"userCreate.profile"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"isFullTime"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.isFullTime')},model:{value:(_vm.userCreate.isFullTime),callback:function ($$v) {_vm.$set(_vm.userCreate, "isFullTime", $$v)},expression:"userCreate.isFullTime"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"onlineSell"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.onlineSell')},model:{value:(_vm.userCreate.onlineSell),callback:function ($$v) {_vm.$set(_vm.userCreate, "onlineSell", $$v)},expression:"userCreate.onlineSell"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"sold"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.sold')},model:{value:(_vm.userCreate.sold),callback:function ($$v) {_vm.$set(_vm.userCreate, "sold", $$v)},expression:"userCreate.sold"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"channel"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.channel')},model:{value:(_vm.userCreate.channel),callback:function ($$v) {_vm.$set(_vm.userCreate, "channel", $$v)},expression:"userCreate.channel"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"gallery"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.gallery')},model:{value:(_vm.userCreate.gallery),callback:function ($$v) {_vm.$set(_vm.userCreate, "gallery", $$v)},expression:"userCreate.gallery"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"medium"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.medium')},model:{value:(_vm.userCreate.medium),callback:function ($$v) {_vm.$set(_vm.userCreate, "medium", $$v)},expression:"userCreate.medium"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"galleryInfo"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.galleryInfo')},model:{value:(_vm.userCreate.galleryInfo),callback:function ($$v) {_vm.$set(_vm.userCreate, "galleryInfo", $$v)},expression:"userCreate.galleryInfo"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"recommend"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.recommend')},model:{value:(_vm.userCreate.recommend),callback:function ($$v) {_vm.$set(_vm.userCreate, "recommend", $$v)},expression:"userCreate.recommend"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"prize"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.prize')},model:{value:(_vm.userCreate.prize),callback:function ($$v) {_vm.$set(_vm.userCreate, "prize", $$v)},expression:"userCreate.prize"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"website"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.website')},model:{value:(_vm.userCreate.website),callback:function ($$v) {_vm.$set(_vm.userCreate, "website", $$v)},expression:"userCreate.website"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"findUs"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.findUs')},model:{value:(_vm.userCreate.findUs),callback:function ($$v) {_vm.$set(_vm.userCreate, "findUs", $$v)},expression:"userCreate.findUs"}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/seller/create.vue?vue&type=template&id=6a019f93&scoped=true&

// EXTERNAL MODULE: external "mockjs"
var external_mockjs_ = __webpack_require__(116);
var external_mockjs_default = /*#__PURE__*/__webpack_require__.n(external_mockjs_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/seller/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  watchQuery: ['sellerId'],

  data() {
    var validateEmail = (rule, value, callback) => {
      if (!value && !this.userCreate.phone) {
        callback(new Error('邮箱和电话必须输入一项'));
      } else {
        if (!this.userCreate.phone) {
          this.$refs.userCreate.clearValidate('phone');
        }

        callback();
      }
    };

    var validatePhone = (rule, value, callback) => {
      if (!this.userCreate.email && !value) {
        callback(new Error('邮箱和电话必须输入一项'));
      } else {
        if (!this.userCreate.email) {
          this.$refs.userCreate.clearValidate('email');
        }

        callback();
      }
    };

    return {
      type: 'create',
      // create edit
      inputVisible: false,
      inputValue: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      sellerId: '',
      // 状态：0: 审核, 1: 通过, 2: 拒绝, 3: 禁用, 4: 注销
      stateOptions: [{
        value: '0',
        label: this.$t('content.audit')
      }, {
        value: '1',
        label: this.$t('content.agree')
      }, {
        value: '2',
        label: this.$t('content.reject')
      }, {
        value: '3',
        label: this.$t('content.disable')
      }, {
        value: '4',
        label: this.$t('content.logoff')
      }],
      typeOptions: [{
        value: '0',
        label: this.$t('user.seller.typeOptions.painter')
      }, {
        value: '1',
        label: this.$t('user.seller.typeOptions.sculptor')
      }],
      userCreate: {
        state: 1,
        type: 0,
        avatar: '',
        tags: [],
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        country: '',
        language: '',
        findUs: '',
        isFullTime: '',
        onlineSell: '',
        sold: '',
        channel: '',
        gallery: '',
        medium: '',
        galleryInfo: '',
        recommend: '',
        prize: '',
        website: '',
        profile: ''
      },
      rules: {
        // firstname: [{ required: true, message: '请输入姓氏', trigger: 'blur' }],
        // lastname: [{ required: true, message: '请输入名字', trigger: 'blur' }],
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
        }]
      }
    };
  },

  async fetch() {
    // console.log('fetch this.$refs.userCreate', this.$refs.userCreate)
    // this.$refs.userCreate.resetFields()
    if (this.$route.query && this.$route.query.sellerId) {
      this.sellerId = this.$route.query.sellerId;
      const user = await this.$axios.$get('/api/admin/user/seller', {
        params: {
          sellerId: this.sellerId
        }
      });

      if (user.success) {
        this.userCreate = Object.assign(this.userCreate, { ...user.data,
          ...user.data.user,
          ...user.data.metadata
        });
        this.type = 'edit';
        this.typeText = this.$t('content.update');
        this.isCreate = false;
        this.rules.password[0].required = false;
      }
    }
  },

  methods: {
    submitForm(userCreate) {
      this.$refs[userCreate].validate(async valid => {
        if (valid) {
          let data;

          try {
            if (this.isCreate) {
              // 用户申请成为艺术家 /api/user/seller/apply
              // data = await this.$axios.$post('/api/user/seller/apply', this.userCreate)
              // 管理员创建艺术家 /api/admin/user/register
              data = await this.$axios.$post('/api/admin/user/register', {
                identity: 'seller',
                typeName: this.typeOptions[this.userCreate.type].label,
                ...this.userCreate
              }); // data = await this.$axios.$post('/api/user/seller/apply', {
              //   identity: this.$route.params.identity,
              //   name: this.userCreate.name,
              //   email: this.userCreate.email,
              //   phone: this.userCreate.phone,
              //   password: this.userCreate.password,
              // })
            } else {
              data = await this.$axios.$post('/api/admin/user/seller/update', {
                typeName: this.typeOptions[this.userCreate.type].label,
                ...this.userCreate
              });
            }

            if (data.success) {
              this.$message({
                showClose: true,
                message: `${this.userCreate.firstname}${this.userCreate.lastname}，${this.typeText}${this.$t('content.success')}`,
                type: 'success'
              });

              if (this.isCreate) {
                this.$refs[userCreate].resetFields();
              }
            } else {
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}`,
                type: 'error'
              });
            }
          } catch (error) {
            console.log("error", error);
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}`,
              type: 'error'
            });
          } // if (data.success) {
          //   this.$message({
          //     showClose: true,
          //     message: `${this.userCreate.firstname}${this.userCreate.lastname}，${this.typeText}成功`,
          //     type: 'success',
          //   })
          //   if (this.isCreate) {
          //     this.$refs[userCreate].resetFields()
          //   }
          // } else {
          //   this.$message({
          //     showClose: true,
          //     message: `${this.typeText}失败!${data.message}`,
          //     type: 'error',
          //   })
          // }

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
        state: 1,
        type: 0,
        tags: [],
        firstname: external_mockjs_default.a.mock('@cfirst'),
        lastname: external_mockjs_default.a.mock('@clast'),
        email: external_mockjs_default.a.mock('@email'),
        phone: '',
        password: '123',
        country: external_mockjs_default.a.mock('@province'),
        language: this.$i18n.locales.filter(i => i.code == this.$i18n.locale)[0].name,
        profile: external_mockjs_default.a.mock('@cparagraph'),
        isFullTime: '',
        onlineSell: '',
        sold: '',
        channel: '',
        gallery: '',
        medium: '',
        galleryInfo: '',
        recommend: '',
        prize: '',
        website: '',
        findUs: ''
      };
    },

    handleAvatarSuccess(res, file) {
      console.log("handleAvatarSuccess", res, file); // this.userCreate.avatar = URL.createObjectURL(file.raw);

      this.userCreate.avatar = res.data.src;
    },

    beforeAvatarUpload(file) {
      console.log("beforeAvatarUpload", file); // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M;
      // return isLt2M
    },

    handleClose(tag) {
      this.userCreate.tags.splice(this.userCreate.tags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;

      if (inputValue) {
        this.userCreate.tags.push(inputValue);
      }

      this.inputVisible = false;
      this.inputValue = '';
    }

  }
});
// CONCATENATED MODULE: ./pages/user/seller/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var seller_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/user/seller/create.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(152)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  seller_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6a019f93",
  "74fc7c3d"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map