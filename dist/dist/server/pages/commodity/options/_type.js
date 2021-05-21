exports.ids = [13];
exports.modules = {

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("68b545f2", content, true, context)
};

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_type_vue_vue_type_style_index_0_id_62c2d300_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_type_vue_vue_type_style_index_0_id_62c2d300_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_type_vue_vue_type_style_index_0_id_62c2d300_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_type_vue_vue_type_style_index_0_id_62c2d300_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_type_vue_vue_type_style_index_0_id_62c2d300_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".avatar-uploader-icon[data-v-62c2d300]{font-size:28px;color:#8c939d;width:113px;height:100px;line-height:100px;text-align:center}.avatar[data-v-62c2d300]{width:113px;height:100px;display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/commodity/options/_type.vue?vue&type=template&id=62c2d300&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{ref:"form",staticClass:"form",attrs:{"model":_vm.form,"label-width":"100px"}},[_vm._l((_vm.form.optionsExamples),function(item,index){return _c('el-form-item',{key:index,attrs:{"label":("" + (_vm.$t('content.create')) + (_vm.optionType[_vm.$route.params.type]) + (_vm.$t(
      'content.example'
    )))}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"disabled":true},model:{value:(item['zh-cn']),callback:function ($$v) {_vm.$set(item, 'zh-cn', $$v)},expression:"item['zh-cn']"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"disabled":true},model:{value:(item['en-us']),callback:function ($$v) {_vm.$set(item, 'en-us', $$v)},expression:"item['en-us']"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"disabled":true},model:{value:(item['ja-jp']),callback:function ($$v) {_vm.$set(item, 'ja-jp', $$v)},expression:"item['ja-jp']"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"disabled":true},model:{value:(item['es-es']),callback:function ($$v) {_vm.$set(item, 'es-es', $$v)},expression:"item['es-es']"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":2}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addOption}},[_vm._v("\n          "+_vm._s(_vm.$t('content.add'))+"\n        ")])],1),_vm._v(" "),_c('el-col',{attrs:{"span":2,"offset":2}},[_c('el-button',{on:{"click":function($event){return _vm.resetForm('form')}}},[_vm._v(_vm._s(_vm.$t('content.clear')))])],1)],1)],1)}),_vm._v(" "),_vm._l((_vm.form.options),function(item,index){return _c('el-form-item',{key:index},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":4}},[_c('el-form-item',{attrs:{"prop":'options.' + index + '.img'}},[_c('el-upload',{staticClass:"avatar-uploader",attrs:{"action":((_vm.$config.origin) + "/api/upload/images"),"data":{ type: ("commodity-option-" + (_vm.$route.params.type)), index: index },"show-file-list":false,"on-success":_vm.handleSuccess,"before-upload":_vm.beforeUpload},model:{value:(item.img),callback:function ($$v) {_vm.$set(item, "img", $$v)},expression:"item.img"}},[(item.img)?_c('img',{staticClass:"avatar",attrs:{"src":item.img}}):_c('i',{staticClass:"el-icon-plus avatar-uploader-icon"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("\n              \b艺术品"+_vm._s(_vm.optionType[_vm.$route.params.type])+"图片，请上传 210X185\n              比例的图片，且不超过2M\n            ")])])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"prop":'options.' + index + '.zh-cn',"rules":{
            required: true,
            message: ("" + (_vm.$t('lang.zh')) + (_vm.optionType[_vm.$route.params.type]) + (_vm.$t(
              'form.noEmpty'
            ))),
            trigger: 'blur',
          }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.zh') })},model:{value:(item['zh-cn']),callback:function ($$v) {_vm.$set(item, 'zh-cn', $$v)},expression:"item['zh-cn']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"prop":'options.' + index + '.en-us',"rules":{
            required: true,
            message: ("" + (_vm.$t('lang.en')) + (_vm.optionType[_vm.$route.params.type]) + (_vm.$t(
              'form.noEmpty'
            ))),
            trigger: 'blur',
          }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.en') })},model:{value:(item['en-us']),callback:function ($$v) {_vm.$set(item, 'en-us', $$v)},expression:"item['en-us']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"prop":'options.' + index + '.ja-jp',"rules":{
            required: true,
            message: ("" + (_vm.$t('lang.ja')) + (_vm.optionType[_vm.$route.params.type]) + (_vm.$t(
              'form.noEmpty'
            ))),
            trigger: 'blur',
          }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.ja') })},model:{value:(item['ja-jp']),callback:function ($$v) {_vm.$set(item, 'ja-jp', $$v)},expression:"item['ja-jp']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-form-item',{attrs:{"prop":'options.' + index + '.es-es',"rules":{
            required: true,
            message: ("" + (_vm.$t('lang.es')) + (_vm.optionType[_vm.$route.params.type]) + (_vm.$t(
              'form.noEmpty'
            ))),
            trigger: 'blur',
          }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.es') })},model:{value:(item['es-es']),callback:function ($$v) {_vm.$set(item, 'es-es', $$v)},expression:"item['es-es']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":5}},[(item.id)?_c('el-button',{on:{"click":function($event){$event.preventDefault();return _vm.updateOption(item, index)}}},[_vm._v(_vm._s(_vm.$t('content.update')))]):_c('el-button',{on:{"click":function($event){$event.preventDefault();return _vm.createOption(item, index)}}},[_vm._v(_vm._s(_vm.$t('content.create')))]),_vm._v(" "),_c('el-button',{on:{"click":function($event){return _vm.onMock(item, index)}}},[_vm._v("\n          "+_vm._s(_vm.$t('content.fill'))+"\n        ")]),_vm._v(" "),_c('el-button',{on:{"click":function($event){$event.preventDefault();return _vm.removeOption(item, index)}}},[_vm._v(_vm._s(_vm.$t('content.delete')))])],1)],1)],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/commodity/options/_type.vue?vue&type=template&id=62c2d300&scoped=true&

// EXTERNAL MODULE: external "mockjs"
var external_mockjs_ = __webpack_require__(116);
var external_mockjs_default = /*#__PURE__*/__webpack_require__.n(external_mockjs_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/commodity/options/_type.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _typevue_type_script_lang_js_ = ({
  name: 'CommodityOption',
  watch: {
    '$route.query': '$fetch'
  },

  data() {
    return {
      // lang: ['zh-cn', 'en-us', 'ja-jp', 'fr-fr'],
      lang: ['zh-cn', 'en-us', 'ja-jp', 'es-es'],
      optionType: {
        category: this.$t('commodity.category'),
        classification: this.$t('commodity.classification'),
        material: this.$t('commodity.material'),
        model: this.$t('commodity.model'),
        place: this.$t('commodity.place'),
        ruiwu: this.$t('commodity.ruiwu'),
        shape: this.$t('commodity.shape'),
        specification: this.$t('commodity.specification'),
        style: this.$t('commodity.style'),
        technique: this.$t('commodity.technique'),
        theme: this.$t('commodity.theme'),
        type: this.$t('commodity.type'),
        use: this.$t('commodity.use')
      },
      form: {
        options: [{
          img: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        }],
        optionsExamples: [{
          img: '',
          'zh-cn': '其他',
          'en-us': 'other',
          'ja-jp': 'その他',
          // 'fr-fr': 'Autres',
          'es-es': 'Español'
        }]
      }
    };
  },

  async fetch() {
    const options = await this.$axios.$get(`/api/admin/commodity/retrieve/${this.$route.params.type}`);
    let retrieveData = [{
      img: '',
      'zh-cn': '',
      'en-us': '',
      'ja-jp': '',
      // 'fr-fr': '',
      'es-es': ''
    }];

    if (options.data && options.data.length) {
      retrieveData.unshift(...options.data);
    }

    this.form.options = retrieveData;
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // console.log('submitForm', this.form.options)
          const options = await this.$axios.$post(`/api/admin/commodity/create/${this.$route.params.type}`, this.form.options).catch(error => {
            this.$message({
              showClose: true,
              message: `${this.optionType[this.$route.params.type]}，${this.$t('content.create')}${this.$t('content.fail')}!`,
              type: 'error'
            });
          });

          if (options.success) {
            this.$message({
              showClose: true,
              message: `${this.optionType[this.$route.params.type]}，${this.$t('content.create')}${this.$t('content.success')}`,
              type: 'success'
            });
          } else {
            this.$message({
              showClose: true,
              message: `${this.optionType[this.$route.params.type]}，${this.$t('content.create')}${this.$t('content.fail')}!`,
              type: 'error'
            });
          }
        } else {
          // console.log('error submit!!')
          return false;
        }
      });
    },

    resetForm(formName) {
      // console.log('formName', formName)
      this.$refs[formName].resetFields();
      this.$fetch();
    },

    addOption() {
      this.form.options.push({
        img: '',
        'zh-cn': '',
        'en-us': '',
        'ja-jp': '',
        // 'fr-fr': '',
        'es-es': ''
      });
    },

    async createOption(item, index) {
      // console.log('createOptions', item)
      let isValidate = true;
      this.$refs['form'].validateField(['options.' + index + '.zh-cn', 'options.' + index + '.en-us', 'options.' + index + '.ja-jp', // 'options.' + index + '.fr-fr',
      'options.' + index + '.es-es'], valid => {
        if (valid) {
          isValidate = false;
        }
      }); // console.log('isValidate', isValidate)

      if (isValidate) {
        const options = await this.$axios.$post(`/api/admin/commodity/create/${this.$route.params.type}`, [item]).catch(error => {
          this.$message({
            showClose: true,
            message: `${this.typeText}${this.$t('content.fail')}! ${error.response.data.message}`,
            type: 'error'
          });
        });

        if (options.success) {
          this.form.options.splice(index, 1, options.data[0]);
          this.message('success', `${this.$t('content.create')}${this.$t('content.success')}!`);
        } else {
          this.message('error', `${this.$t('content.create')}${this.$t('content.fail')}!${options.message}`);
        }
      }
    },

    async updateOption(item) {
      // console.log('updateOption', item)
      if (!item.id) {
        this.form.options.splice(index, 1);
        return;
      }

      const options = await this.$axios.$post(`/api/admin/commodity/update/${this.$route.params.type}`, item).catch(error => {
        this.message('error', `${error.response.data.message}`);
      });

      if (options.success) {
        this.message('success', `${this.$t('content.update')}${this.$t('content.success')}!`);
      } else {
        this.message('error', `${this.$t('content.update')}${this.$t('content.fail')}!`);
      }
    },

    async removeOption(item, index) {
      // console.log('removeOption', item)
      if (!item.id) {
        this.form.options.splice(index, 1);
        return;
      }

      const options = await this.$axios.$post(`/api/admin/commodity/delete/${this.$route.params.type}`, item).catch(error => {
        this.message('error', `${error.response.data.message}`);
      });

      if (options.success) {
        this.form.options.splice(index, 1);
        this.message('success', `${this.$t('content.delete')}${this.$t('content.success')}!`);
      } else {
        this.message('error', `${this.$t('content.delete')}${this.$t('content.fail')}!`);
      }
    },

    message(type, msg) {
      this.$message({
        showClose: true,
        message: `${msg}`,
        type
      });
    },

    onMock(item, index) {
      const zncn = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
      const enus = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
      const jajp = ['ゼロ', 'いち', 'に', 'さん', 'し', 'ご', 'ろく', 'しち', 'はち', 'きゅう', 'じゅう']; // const frfr = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];

      const eses = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix'];
      const mock = {
        img: '',
        'zh-cn': `${zncn[external_mockjs_default.a.mock('@integer(0, 9)')]} ${zncn[external_mockjs_default.a.mock('@integer(0, 9)')]} ${zncn[external_mockjs_default.a.mock('@integer(0, 9)')]}`,
        'en-us': `${enus[external_mockjs_default.a.mock('@integer(0, 9)')]} ${enus[external_mockjs_default.a.mock('@integer(0, 9)')]} ${enus[external_mockjs_default.a.mock('@integer(0, 9)')]}`,
        'ja-jp': `${jajp[external_mockjs_default.a.mock('@integer(0, 9)')]} ${jajp[external_mockjs_default.a.mock('@integer(0, 9)')]} ${jajp[external_mockjs_default.a.mock('@integer(0, 9)')]}`,
        // "fr-fr": `${frfr[Mock.mock('@integer(0, 9)')]} ${frfr[Mock.mock('@integer(0, 9)')]} ${frfr[Mock.mock('@integer(0, 9)')]}`
        'es-es': `${eses[external_mockjs_default.a.mock('@integer(0, 9)')]} ${eses[external_mockjs_default.a.mock('@integer(0, 9)')]} ${eses[external_mockjs_default.a.mock('@integer(0, 9)')]}`
      };
      this.form.options.splice(index, 1, mock);
    },

    handleSuccess(res, file, fileList) {
      // console.log('handleAvatarSuccess', res, file, fileList)
      // this.userCreate.avatar = URL.createObjectURL(file.raw);
      // this.form.options.avatar = res.data.src
      this.form.options[res.data.index].img = res.data.src; // console.log(this.form)
    },

    beforeUpload(file, index) {
      // console.log('beforeAvatarUpload', file, index)
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error('上传的图片大小不能超过 2MB!');
      }

      return isLt2M;
    }

  }
});
// CONCATENATED MODULE: ./pages/commodity/options/_type.vue?vue&type=script&lang=js&
 /* harmony default export */ var options_typevue_type_script_lang_js_ = (_typevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/commodity/options/_type.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  options_typevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "62c2d300",
  "14864f3e"
  
)

/* harmony default export */ var _type = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_type.js.map