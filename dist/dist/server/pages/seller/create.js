exports.ids = [22];
exports.modules = {

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1275f9ed", content, true, context)
};

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_666d1420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_666d1420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_666d1420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_666d1420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_666d1420_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".button-new-tag[data-v-666d1420],.el-tag+.el-tag[data-v-666d1420]{margin-left:10px}.button-new-tag[data-v-666d1420]{height:32px;line-height:30px;padding-top:0;padding-bottom:0}.input-new-tag[data-v-666d1420]{width:90px;margin-left:10px;vertical-align:bottom}.seller-banner-uploader-icon[data-v-666d1420]{font-size:28px;color:#8c939d;width:239px;height:100px;line-height:100px;text-align:center}.seller-banner[data-v-666d1420]{width:239px;height:100px;display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/create.vue?vue&type=template&id=666d1420&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"user-create"},[_c('el-form',{ref:"sellerData",staticClass:"user-create-form",attrs:{"model":_vm.sellerData,"label-width":"90px"}},[_c('el-container',[_c('el-header',[(_vm.isCreate)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-circle-plus-outline","loading":_vm.isSubmit},on:{"click":function($event){return _vm.submitForm('sellerData')}}},[_vm._v("\n            "+_vm._s(_vm.$t('content.create'))+"\n          ")]):_c('el-button',{attrs:{"type":"primary","icon":"el-icon-check","loading":_vm.isSubmit},on:{"click":function($event){return _vm.submitForm('sellerData')}}},[_vm._v("\n            "+_vm._s(_vm.$t('content.update'))+"\n          ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-check"},on:{"click":_vm.onMock}},[_vm._v("\n            "+_vm._s(_vm.$t('content.fill'))+"\n          ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-circle-close"},on:{"click":function($event){return _vm.resetForm('sellerData')}}},[_vm._v(_vm._s(_vm.$t('content.clear')))])],1)],1),_vm._v(" "),_c('el-collapse',{model:{value:(_vm.activeCollapses),callback:function ($$v) {_vm.activeCollapses=$$v},expression:"activeCollapses"}},[_c('el-collapse-item',{attrs:{"title":"关联用户","name":"0"}},[_c('el-form-item',{attrs:{"prop":"userId"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.selectUserBtn}},[_vm._v("选择用户")])],1),_vm._v(" "),(_vm.sellerData.user.name || _vm.sellerData.user.email)?[_c('el-form-item',{attrs:{"label":_vm.$t('user.avatar'),"prop":"avatar"}},[(_vm.sellerData.user.avatar)?_c('img',{staticClass:"avatar",attrs:{"src":_vm.sellerData.user.avatar}}):_vm._e()]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.name'),"prop":"name"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.sellerData.user.name),callback:function ($$v) {_vm.$set(_vm.sellerData.user, "name", $$v)},expression:"sellerData.user.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.email'),"prop":"email"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.sellerData.user.email),callback:function ($$v) {_vm.$set(_vm.sellerData.user, "email", $$v)},expression:"sellerData.user.email"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.phone'),"prop":"phone"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.sellerData.user.phone),callback:function ($$v) {_vm.$set(_vm.sellerData.user, "phone", $$v)},expression:"sellerData.user.phone"}})],1)]:_vm._e()],2),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"艺术家信息","name":"1"}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.state'),"prop":"identity"}},[_c('el-radio-group',{model:{value:(_vm.sellerData.seller.state),callback:function ($$v) {_vm.$set(_vm.sellerData.seller, "state", $$v)},expression:"sellerData.seller.state"}},_vm._l((_vm.stateOptions),function(item){return _c('el-radio',{key:item.value,attrs:{"label":item.value}},[_vm._v(_vm._s(item.label))])}),1)],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.type'),"prop":"identity"}},[_c('el-radio-group',{model:{value:(_vm.sellerData.seller.type),callback:function ($$v) {_vm.$set(_vm.sellerData.seller, "type", $$v)},expression:"sellerData.seller.type"}},_vm._l((_vm.typeOptions),function(item){return _c('el-radio',{key:item.value,attrs:{"label":item.value}},[_vm._v(_vm._s(item.label))])}),1)],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.choice'),"prop":"choice"}},[_c('el-switch',{model:{value:(_vm.sellerData.seller.choice),callback:function ($$v) {_vm.$set(_vm.sellerData.seller, "choice", $$v)},expression:"sellerData.seller.choice"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.banner'),"prop":"avatar"}},[_c('el-upload',{staticClass:"banner-uploader",attrs:{"action":((_vm.$config.origin) + "/api/upload/images"),"data":{ type: 'sellerBanner' },"show-file-list":false,"on-success":_vm.handleSellerBannerSuccess,"before-upload":_vm.beforeUpload},model:{value:(_vm.sellerData.seller.banner),callback:function ($$v) {_vm.$set(_vm.sellerData.seller, "banner", $$v)},expression:"sellerData.seller.banner"}},[(_vm.sellerData.seller.banner)?_c('img',{staticClass:"seller-banner",attrs:{"src":_vm.sellerData.seller.banner}}):_c('i',{staticClass:"el-icon-plus seller-banner-uploader-icon"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("\n                艺术家背景图片，请上传 (大于1220)X510 比例的图片，且不超过2M\n              ")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.label'),"prop":"tags"}},[_vm._l((_vm.sellerData.seller.tags),function(tag){return _c('el-tag',{key:tag,attrs:{"closable":"","disable-transitions":false},on:{"close":function($event){return _vm.handleClose(tag)}}},[_vm._v("\n              "+_vm._s(tag)+"\n            ")])}),_vm._v(" "),(_vm.inputVisible)?_c('el-input',{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{"size":"small"},on:{"blur":_vm.handleInputConfirm},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleInputConfirm($event)}},model:{value:(_vm.inputValue),callback:function ($$v) {_vm.inputValue=$$v},expression:"inputValue"}}):_c('el-button',{staticClass:"button-new-tag",attrs:{"size":"small"},on:{"click":_vm.showInput}},[_vm._v("+ New Tag")])],2),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.firstName'),"prop":"firstname"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.firstName') })},model:{value:(_vm.sellerData.seller.firstname),callback:function ($$v) {_vm.$set(_vm.sellerData.seller, "firstname", $$v)},expression:"sellerData.seller.firstname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.lastName'),"prop":"lastname"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.lastName') })},model:{value:(_vm.sellerData.seller.lastname),callback:function ($$v) {_vm.$set(_vm.sellerData.seller, "lastname", $$v)},expression:"sellerData.seller.lastname"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.gender'),"prop":"gender"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.gender') })},model:{value:(_vm.sellerData.seller.gender),callback:function ($$v) {_vm.$set(_vm.sellerData.seller, "gender", $$v)},expression:"sellerData.seller.gender"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.country'),"prop":"country"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.country') })},model:{value:(_vm.sellerData.seller.country),callback:function ($$v) {_vm.$set(_vm.sellerData.seller, "country", $$v)},expression:"sellerData.seller.country"}})],1)],1),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"艺术家其他信息","name":"2"}},[_c('el-form-item',{attrs:{"prop":"language"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', {
                  msg: _vm.$t('user.seller.metadata.language'),
                })},model:{value:(_vm.sellerData.metadata.language),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "language", $$v)},expression:"sellerData.metadata.language"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('div',{directives:[{name:"quill",rawName:"v-quill:myQuillEditorZhcn",value:(_vm.editorOptionZhcn),expression:"editorOptionZhcn",arg:"myQuillEditorZhcn"}],staticClass:"quill-editor",attrs:{"content":_vm.sellerData.metadata.profileZhcn},on:{"change":function($event){return _vm.onEditorChangeZhcn($event, 'zhcn')}}})]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('div',{directives:[{name:"quill",rawName:"v-quill:myQuillEditorEnus",value:(_vm.editorOptionEnus),expression:"editorOptionEnus",arg:"myQuillEditorEnus"}],staticClass:"quill-editor",attrs:{"content":_vm.sellerData.metadata.profileEnus},on:{"change":function($event){return _vm.onEditorChangeEnus($event, 'enus')}}})]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('div',{directives:[{name:"quill",rawName:"v-quill:myQuillEditorJajp",value:(_vm.editorOptionJajp),expression:"editorOptionJajp",arg:"myQuillEditorJajp"}],staticClass:"quill-editor",attrs:{"content":_vm.sellerData.metadata.profileJajp},on:{"change":function($event){return _vm.onEditorChangeJajp($event, 'jajp')}}})]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('div',{directives:[{name:"quill",rawName:"v-quill:myQuillEditorEses",value:(_vm.editorOptionEses),expression:"editorOptionEses",arg:"myQuillEditorEses"}],staticClass:"quill-editor",attrs:{"content":_vm.sellerData.metadata.profileEses},on:{"change":function($event){return _vm.onEditorChangeEses($event, 'eses')}}})])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"isFullTime"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.isFullTime')},model:{value:(_vm.sellerData.metadata.isFullTime),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "isFullTime", $$v)},expression:"sellerData.metadata.isFullTime"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"onlineSell"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.onlineSell')},model:{value:(_vm.sellerData.metadata.onlineSell),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "onlineSell", $$v)},expression:"sellerData.metadata.onlineSell"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"sold"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.sold')},model:{value:(_vm.sellerData.metadata.sold),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "sold", $$v)},expression:"sellerData.metadata.sold"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"channel"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.channel')},model:{value:(_vm.sellerData.metadata.channel),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "channel", $$v)},expression:"sellerData.metadata.channel"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"gallery"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.gallery')},model:{value:(_vm.sellerData.metadata.gallery),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "gallery", $$v)},expression:"sellerData.metadata.gallery"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"medium"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.medium')},model:{value:(_vm.sellerData.metadata.medium),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "medium", $$v)},expression:"sellerData.metadata.medium"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"galleryInfo"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.galleryInfo')},model:{value:(_vm.sellerData.metadata.galleryInfo),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "galleryInfo", $$v)},expression:"sellerData.metadata.galleryInfo"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"recommend"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.recommend')},model:{value:(_vm.sellerData.metadata.recommend),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "recommend", $$v)},expression:"sellerData.metadata.recommend"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"prize"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.prize')},model:{value:(_vm.sellerData.metadata.prize),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "prize", $$v)},expression:"sellerData.metadata.prize"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"website"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.website')},model:{value:(_vm.sellerData.metadata.website),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "website", $$v)},expression:"sellerData.metadata.website"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"findUs"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('user.seller.metadata.findUs')},model:{value:(_vm.sellerData.metadata.findUs),callback:function ($$v) {_vm.$set(_vm.sellerData.metadata, "findUs", $$v)},expression:"sellerData.metadata.findUs"}})],1)],1),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"艺术家工作室","name":"3"}},[_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.studio.banner'),"prop":"avatar"}},[_c('el-upload',{staticClass:"banner-uploader",attrs:{"action":((_vm.$config.origin) + "/api/upload/images"),"data":{ type: 'sellerStudioBanner' },"show-file-list":false,"on-success":_vm.handleStudioBannerSuccess,"before-upload":_vm.beforeUpload},model:{value:(_vm.sellerData.studio.banner),callback:function ($$v) {_vm.$set(_vm.sellerData.studio, "banner", $$v)},expression:"sellerData.studio.banner"}},[(_vm.sellerData.studio && _vm.sellerData.studio.banner)?_c('img',{staticClass:"seller-banner",attrs:{"src":_vm.sellerData.studio.banner}}):_c('i',{staticClass:"el-icon-plus seller-banner-uploader-icon"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("\n                工作室背景图片，请上传 (大于1220)X510 比例的图片，且不超过2M\n              ")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.studio.name'),"prop":"studio.name"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.studio.name') })},model:{value:(_vm.sellerData.studio.name),callback:function ($$v) {_vm.$set(_vm.sellerData.studio, "name", $$v)},expression:"sellerData.studio.name"}})],1),_vm._v(" "),_c('p',{staticStyle:{"color":"red"}},[_vm._v("以下内容显示规则：ccId + siteId + 封面图 > 视频链接 > 图片 > 文字 ")]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.studio.ccId'),"prop":"studio.ccId"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.studio.ccId') })},model:{value:(_vm.sellerData.studio.ccId),callback:function ($$v) {_vm.$set(_vm.sellerData.studio, "ccId", $$v)},expression:"sellerData.studio.ccId"}}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip"},[_vm._v("\n              ccId  示例：61AA76B5334118229C33DC5901307461\n            ")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.studio.siteId'),"prop":"studio.siteId"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.studio.siteId') })},model:{value:(_vm.sellerData.studio.siteId),callback:function ($$v) {_vm.$set(_vm.sellerData.studio, "siteId", $$v)},expression:"sellerData.studio.siteId"}}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip"},[_vm._v("\n              siteId  E5DD260925A6084B\n            ")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.studio.videoPhoto'),"prop":"studio.videoPhoto"}},[_c('el-upload',{staticClass:"banner-uploader",attrs:{"action":((_vm.$config.origin) + "/api/upload/images"),"data":{ type: 'sellerStudioVideoImg' },"show-file-list":false,"on-success":_vm.handleStudioVideoPhotoSuccess,"before-upload":_vm.beforeUpload},model:{value:(_vm.sellerData.studio.videoPhoto),callback:function ($$v) {_vm.$set(_vm.sellerData.studio, "videoPhoto", $$v)},expression:"sellerData.studio.videoPhoto"}},[(_vm.sellerData.studio && _vm.sellerData.studio.videoPhoto)?_c('img',{staticClass:"seller-banner",attrs:{"src":_vm.sellerData.studio.videoPhoto}}):_c('i',{staticClass:"el-icon-plus seller-banner-uploader-icon"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("\n                视频封面图片，请上传 600X250 比例的图片，且不超过2M\n              ")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.studio.video'),"prop":"studio.video"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.studio.video') })},model:{value:(_vm.sellerData.studio.video),callback:function ($$v) {_vm.$set(_vm.sellerData.studio, "video", $$v)},expression:"sellerData.studio.video"}}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip"},[_vm._v("\n              工作室视频，暂时支持http格式的视频。例如：http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4\n            ")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.studio.photo'),"prop":"studio.photo"}},[_c('el-upload',{staticClass:"banner-uploader",attrs:{"action":((_vm.$config.origin) + "/api/upload/images"),"data":{ type: 'sellerStudioPhoto' },"show-file-list":false,"on-success":_vm.handleStudioPhotoSuccess,"before-upload":_vm.beforeUpload},model:{value:(_vm.sellerData.studio.photo),callback:function ($$v) {_vm.$set(_vm.sellerData.studio, "photo", $$v)},expression:"sellerData.studio.photo"}},[(_vm.sellerData.studio && _vm.sellerData.studio.photo)?_c('img',{staticClass:"seller-banner",attrs:{"src":_vm.sellerData.studio.photo}}):_c('i',{staticClass:"el-icon-plus seller-banner-uploader-icon"}),_vm._v(" "),_c('div',{staticClass:"el-upload__tip",attrs:{"slot":"tip"},slot:"tip"},[_vm._v("\n                工作室图片，请上传 600X250 比例的图片，且不超过2M\n              ")])])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.seller.studio.introduce'),"prop":"studio.introduce"}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', {
                  msg: _vm.$t('user.seller.studio.introduce'),
                })},model:{value:(_vm.sellerData.studio.introduce),callback:function ($$v) {_vm.$set(_vm.sellerData.studio, "introduce", $$v)},expression:"sellerData.studio.introduce"}})],1)],1),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"艺术家履历","name":"4"}},[_c('el-tabs',{on:{"tab-click":_vm.handleClick},model:{value:(_vm.tabsActive),callback:function ($$v) {_vm.tabsActive=$$v},expression:"tabsActive"}},_vm._l((_vm.tabsResume),function(tabItem){return _c('el-tab-pane',{key:tabItem.name,attrs:{"label":tabItem.label,"name":tabItem.name}},[_vm._l((_vm.sellerData.resume[tabItem.name]),function(item,index){return _c('el-row',{key:index,staticStyle:{"margin-bottom":"20px"},attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":4}},[_c('el-button',{on:{"click":function($event){return _vm.resumeDelete(tabItem.name, item)}}},[_vm._v(_vm._s(_vm.$t('content.delete'))+_vm._s(tabItem.label))])],1),_vm._v(" "),(item.zhcn)?_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.zh')) + (tabItem.label) + "年份") })},model:{value:(item.zhcn.year),callback:function ($$v) {_vm.$set(item.zhcn, "year", $$v)},expression:"item.zhcn.year"}}),_vm._v(" "),_c('el-input',{staticStyle:{"margin-top":"10px"},attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.zh')) + (tabItem.label) + "事件") })},model:{value:(item.zhcn.resume),callback:function ($$v) {_vm.$set(item.zhcn, "resume", $$v)},expression:"item.zhcn.resume"}})],1):_vm._e(),_vm._v(" "),(item.enus)?_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.en')) + (tabItem.label) + "年份") })},model:{value:(item.enus.year),callback:function ($$v) {_vm.$set(item.enus, "year", $$v)},expression:"item.enus.year"}}),_vm._v(" "),_c('el-input',{staticStyle:{"margin-top":"10px"},attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.en')) + (tabItem.label) + "事件") })},model:{value:(item.enus.resume),callback:function ($$v) {_vm.$set(item.enus, "resume", $$v)},expression:"item.enus.resume"}})],1):_vm._e(),_vm._v(" "),(item.jajp)?_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.ja')) + (tabItem.label) + "年份") })},model:{value:(item.jajp.year),callback:function ($$v) {_vm.$set(item.jajp, "year", $$v)},expression:"item.jajp.year"}}),_vm._v(" "),_c('el-input',{staticStyle:{"margin-top":"10px"},attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.ja')) + (tabItem.label) + "事件") })},model:{value:(item.jajp.resume),callback:function ($$v) {_vm.$set(item.jajp, "resume", $$v)},expression:"item.jajp.resume"}})],1):_vm._e(),_vm._v(" "),(item.eses)?_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.es')) + (tabItem.label) + "年份") })},model:{value:(item.eses.year),callback:function ($$v) {_vm.$set(item.eses, "year", $$v)},expression:"item.eses.year"}}),_vm._v(" "),_c('el-input',{staticStyle:{"margin-top":"10px"},attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.es')) + (tabItem.label) + "事件") })},model:{value:(item.eses.resume),callback:function ($$v) {_vm.$set(item.eses, "resume", $$v)},expression:"item.eses.resume"}})],1):_vm._e()],1)}),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":4}},[_c('el-button',{on:{"click":function($event){return _vm.resumeCreate(tabItem.name)}}},[_vm._v(_vm._s(_vm.$t('content.create'))+_vm._s(tabItem.label))])],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.zh')) + (tabItem.label) + "年份") })},model:{value:(_vm.defaultResume[tabItem.name].zhcn.year),callback:function ($$v) {_vm.$set(_vm.defaultResume[tabItem.name].zhcn, "year", $$v)},expression:"defaultResume[tabItem.name].zhcn.year"}}),_vm._v(" "),_c('el-input',{staticStyle:{"margin-top":"10px"},attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.zh')) + (tabItem.label) + "事件") })},model:{value:(_vm.defaultResume[tabItem.name].zhcn.resume),callback:function ($$v) {_vm.$set(_vm.defaultResume[tabItem.name].zhcn, "resume", $$v)},expression:"defaultResume[tabItem.name].zhcn.resume"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.en')) + (tabItem.label) + "年份") })},model:{value:(_vm.defaultResume[tabItem.name].enus.year),callback:function ($$v) {_vm.$set(_vm.defaultResume[tabItem.name].enus, "year", $$v)},expression:"defaultResume[tabItem.name].enus.year"}}),_vm._v(" "),_c('el-input',{staticStyle:{"margin-top":"10px"},attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.en')) + (tabItem.label) + "事件") })},model:{value:(_vm.defaultResume[tabItem.name].enus.resume),callback:function ($$v) {_vm.$set(_vm.defaultResume[tabItem.name].enus, "resume", $$v)},expression:"defaultResume[tabItem.name].enus.resume"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.ja')) + (tabItem.label) + "年份") })},model:{value:(_vm.defaultResume[tabItem.name].jajp.year),callback:function ($$v) {_vm.$set(_vm.defaultResume[tabItem.name].jajp, "year", $$v)},expression:"defaultResume[tabItem.name].jajp.year"}}),_vm._v(" "),_c('el-input',{staticStyle:{"margin-top":"10px"},attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.ja')) + (tabItem.label) + "事件") })},model:{value:(_vm.defaultResume[tabItem.name].jajp.resume),callback:function ($$v) {_vm.$set(_vm.defaultResume[tabItem.name].jajp, "resume", $$v)},expression:"defaultResume[tabItem.name].jajp.resume"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.es')) + (tabItem.label) + "年份") })},model:{value:(_vm.defaultResume[tabItem.name].eses.year),callback:function ($$v) {_vm.$set(_vm.defaultResume[tabItem.name].eses, "year", $$v)},expression:"defaultResume[tabItem.name].eses.year"}}),_vm._v(" "),_c('el-input',{staticStyle:{"margin-top":"10px"},attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: ("" + (_vm.$t('lang.es')) + (tabItem.label) + "事件") })},model:{value:(_vm.defaultResume[tabItem.name].eses.resume),callback:function ($$v) {_vm.$set(_vm.defaultResume[tabItem.name].eses, "resume", $$v)},expression:"defaultResume[tabItem.name].eses.resume"}})],1)],1)],2)}),1)],1)],1)],1),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"title":"选择用户","visible":_vm.dialogVisible,"width":"80%"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('el-form',{staticClass:"user-search",attrs:{"inline":true,"model":_vm.userSearch}},[_c('el-form-item',{attrs:{"label":_vm.$t('user.name')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.name') }),"clearable":""},model:{value:(_vm.userSearch.name),callback:function ($$v) {_vm.$set(_vm.userSearch, "name", $$v)},expression:"userSearch.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.email')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.email') }),"clearable":""},model:{value:(_vm.userSearch.email),callback:function ($$v) {_vm.$set(_vm.userSearch, "email", $$v)},expression:"userSearch.email"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('user.phone')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.phone') }),"clearable":""},model:{value:(_vm.userSearch.phone),callback:function ($$v) {_vm.$set(_vm.userSearch, "phone", $$v)},expression:"userSearch.phone"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":function($event){return _vm.userSearchSubmit(_vm.userPagination.currentPage)}}},[_vm._v(_vm._s(_vm.$t('content.search')))])],1)],1),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.user,"border":""}},[_c('el-table-column',{attrs:{"prop":"userId","label":_vm.$t('user.userId')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.isEdit)?_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.userId') }),"clearable":""},model:{value:(scope.row.userId),callback:function ($$v) {_vm.$set(scope.row, "userId", $$v)},expression:"scope.row.userId"}}):_c('span',[_vm._v("\n            "+_vm._s(scope.row.userId)+"\n          ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"avatar","label":_vm.$t('user.avatar'),"width":"122"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.avatar)?_c('img',{staticClass:"image",attrs:{"src":scope.row.avatar,"width":"100px","height":"100px"}}):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":_vm.$t('user.name')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.isEdit)?_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.name') }),"clearable":""},model:{value:(scope.row.name),callback:function ($$v) {_vm.$set(scope.row, "name", $$v)},expression:"scope.row.name"}}):_c('span',[_vm._v("\n            "+_vm._s(scope.row.name)+"\n          ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"email","label":_vm.$t('user.email')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.isEdit)?_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.email') }),"clearable":""},model:{value:(scope.row.email),callback:function ($$v) {_vm.$set(scope.row, "email", $$v)},expression:"scope.row.email"}}):_c('span',{staticClass:"table-column-span"},[_vm._v("\n            "+_vm._s(scope.row.email)+"\n          ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"phone","label":_vm.$t('user.phone')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.isEdit)?_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.phone') }),"clearable":""},model:{value:(scope.row.phone),callback:function ($$v) {_vm.$set(scope.row, "phone", $$v)},expression:"scope.row.phone"}}):_c('span',{staticClass:"table-column-span"},[_vm._v("\n            "+_vm._s(scope.row.phone)+"\n          ")])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createdDate","label":_vm.$t('content.createdDate'),"formatter":_vm.formatterDate}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('content.operation'),"width":"172"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.seller)?[_vm._v("\n            用户已关联艺术家 "+_vm._s(scope.row.seller.firstname)+_vm._s(scope.row.seller.lastname)+"\n          ")]:[(_vm.sellerData.user && _vm.sellerData.user.userId == scope.row.userId)?_c('el-button',{attrs:{"type":"danger"},on:{"click":function($event){_vm.sellerData.user = '';_vm.dialogVisible = false}}},[_vm._v("\n              取消\n            ")]):_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.sellerData.user = scope.row;_vm.dialogVisible = false}}},[_vm._v("\n              选择\n            ")])]]}}])})],1),_vm._v(" "),_c('el-pagination',{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"background":"","layout":"prev, pager, next","page-size":_vm.userPagination.pageSize,"current-page":_vm.userPagination.currentPage,"total":_vm.userPagination.total},on:{"current-change":_vm.changeUserCurrentPage}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/seller/create.vue?vue&type=template&id=666d1420&scoped=true&

// EXTERNAL MODULE: external "mockjs"
var external_mockjs_ = __webpack_require__(122);
var external_mockjs_default = /*#__PURE__*/__webpack_require__.n(external_mockjs_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/seller/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      if (!value && !this.sellerData.phone) {
        callback(new Error('邮箱和电话必须输入一项'));
      } else {
        if (!this.sellerData.phone) {
          this.$refs.sellerData.clearValidate('phone');
        }

        callback();
      }
    };

    var validatePhone = (rule, value, callback) => {
      if (!this.sellerData.email && !value) {
        callback(new Error('邮箱和电话必须输入一项'));
      } else {
        if (!this.sellerData.email) {
          this.$refs.sellerData.clearValidate('email');
        }

        callback();
      }
    };

    return {
      editorOptionZhcn: {
        placeholder: this.$t('form.placeholder', {
          msg: `${this.$t('lang.zh')}${this.$t('user.seller.metadata.profile')}`
        }),
        // some quill options
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block']]
        }
      },
      editorOptionEnus: {
        placeholder: this.$t('form.placeholder', {
          msg: `${this.$t('lang.en')}${this.$t('user.seller.metadata.profile')}`
        }),
        // some quill options
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block']]
        }
      },
      editorOptionJajp: {
        placeholder: this.$t('form.placeholder', {
          msg: `${this.$t('lang.ja')}${this.$t('user.seller.metadata.profile')}`
        }),
        // some quill options
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block']]
        }
      },
      editorOptionEses: {
        placeholder: this.$t('form.placeholder', {
          msg: `${this.$t('lang.zh')}${this.$t('user.seller.metadata.profile')}`
        }),
        // some quill options
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block']]
        }
      },
      dialogVisible: false,
      userSearch: {
        name: '',
        email: '',
        phone: '',
        identity: ''
      },
      userPagination: {
        currentPage: 1,
        pageSize: 5,
        total: 0
      },
      user: [],
      isSubmit: false,
      type: 'create',
      // create edit
      inputVisible: false,
      inputValue: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      sellerId: '',
      // 状态：0: 审核, 1: 通过, 2: 拒绝, 3: 禁用, 4: 注销
      stateOptions: [{
        value: 0,
        label: this.$t('content.audit')
      }, {
        value: 1,
        label: this.$t('content.agree')
      }, {
        value: 2,
        label: this.$t('content.reject')
      }, {
        value: 3,
        label: this.$t('content.disable')
      }, {
        value: 4,
        label: this.$t('content.logoff')
      }],
      typeOptions: [{
        value: 0,
        label: this.$t('user.seller.typeOptions.painter')
      }, {
        value: 1,
        label: this.$t('user.seller.typeOptions.sculptor')
      }],
      sellerData: {
        user: {
          userId: '',
          avatar: '',
          name: '',
          email: '',
          phone: ''
        },
        seller: {
          state: 1,
          type: 0,
          choice: false,
          banner: '',
          tags: [],
          firstname: '',
          lastname: '',
          gender: '',
          country: ''
        },
        metadata: {
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
          profileZhcn: '',
          profileEnus: '',
          profileJajp: '',
          profileEses: ''
        },
        studio: {
          banner: '',
          name: '',
          introduce: '',
          video: '',
          photo: '',
          ccId: '',
          siteId: '',
          videoPhoto: ''
        },
        resume: {
          prize: [// {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          individua: [// {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          organizing: [// {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          publish: [// {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ]
        }
      },
      defaultResume: {
        prize: {
          zhcn: {
            year: '',
            resume: ''
          },
          enus: {
            year: '',
            resume: ''
          },
          jajp: {
            year: '',
            resume: ''
          },
          eses: {
            year: '',
            resume: ''
          }
        },
        individua: {
          zhcn: {
            year: '',
            resume: ''
          },
          enus: {
            year: '',
            resume: ''
          },
          jajp: {
            year: '',
            resume: ''
          },
          eses: {
            year: '',
            resume: ''
          }
        },
        organizing: {
          zhcn: {
            year: '',
            resume: ''
          },
          enus: {
            year: '',
            resume: ''
          },
          jajp: {
            year: '',
            resume: ''
          },
          eses: {
            year: '',
            resume: ''
          }
        },
        publish: {
          zhcn: {
            year: '',
            resume: ''
          },
          enus: {
            year: '',
            resume: ''
          },
          jajp: {
            year: '',
            resume: ''
          },
          eses: {
            year: '',
            resume: ''
          }
        }
      },
      activeCollapses: ['0', '1', '2', '3', '4'],
      tabsResume: [{
        name: 'prize',
        label: '奖项'
      }, {
        name: 'individua',
        label: '个展'
      }, {
        name: 'organizing',
        label: '组展'
      }, {
        name: 'publish',
        label: '发表'
      }],
      tabsActive: 'prize'
    };
  },

  async fetch() {
    // console.log('fetch this.$refs.sellerData', this.$refs.sellerData)
    // this.$refs.sellerData.resetFields()
    if (this.$route.query && this.$route.query.sellerId) {
      this.sellerId = this.$route.query.sellerId;
      const sellerResult = await this.$axios.$get('/api/admin/seller/edit', {
        params: {
          sellerId: this.sellerId
        }
      }); // console.log("user", sellerResult)

      if (sellerResult.success) {
        this.sellerData = Object.assign(this.sellerData, sellerResult.data); // console.log(this.sellerData)

        this.type = 'edit';
        this.typeText = this.$t('content.update');
        this.isCreate = false; // this.rules.user.password[0].required = false
      }
    }
  },

  created() {// console.log(JSON.stringify(this.sellerData.resume))
  },

  methods: {
    submitForm(sellerData) {
      if (!this.sellerData.seller.firstname) {
        this.$message({
          showClose: true,
          message: "请输入姓氏",
          type: 'error'
        });
        return;
      }

      if (!this.sellerData.seller.lastname) {
        this.$message({
          showClose: true,
          message: "请输入名字",
          type: 'error'
        });
        return;
      }

      this.$refs[sellerData].validate(async valid => {
        if (valid) {
          let data;
          this.isSubmit = true;
          console.log(this.sellerData); // console.log(this.typeOptions[this.sellerData.seller.type])
          // return;

          try {
            if (this.isCreate) {
              // 用户申请成为艺术家 /api/user/seller/apply
              // data = await this.$axios.$post('/api/user/seller/apply', this.sellerData)
              // 管理员创建艺术家 /api/admin/user/register
              // const { resume } = this.sellerData;
              data = await this.$axios.$post('/api/admin/seller/create', { // identity: 'seller',
                // typeName: this.sellerData.seller.type ? this.typeOptions[this.sellerData.seller.type].label : '',
                ...this.sellerData
              }).catch(err => {
                this.isSubmit = false;
              }); // data = await this.$axios.$post('/api/user/seller/apply', {
              //   identity: this.$route.params.identity,
              //   name: this.sellerData.name,
              //   email: this.sellerData.email,
              //   phone: this.sellerData.phone,
              //   password: this.sellerData.password,
              // })
            } else {
              data = await this.$axios.$post('/api/admin/seller/update', { // typeName: this.typeOptions[this.sellerData.type].label,
                ...this.sellerData
              }).catch(err => {
                this.isSubmit = false;
              });
            }

            this.isSubmit = false;

            if (data.success) {
              this.$message({
                showClose: true,
                message: `${this.sellerData.seller.firstname}${this.sellerData.seller.lastname}，${this.typeText}${this.$t('content.success')}`,
                type: 'success'
              });

              if (this.isCreate) {
                // this.$refs[sellerData].resetFields()
                this.isCreate = false;
                this.$router.push({
                  query: {
                    sellerId: data.data.sellerId
                  }
                });
              }
            } else {
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}, ${data.message}`,
                type: 'error'
              });
            }
          } catch (error) {
            // console.log('error', error)
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}`,
              type: 'error'
            });
          } // if (data.success) {
          //   this.$message({
          //     showClose: true,
          //     message: `${this.sellerData.firstname}${this.sellerData.lastname}，${this.typeText}成功`,
          //     type: 'success',
          //   })
          //   if (this.isCreate) {
          //     this.$refs[sellerData].resetFields()
          //   }
          // } else {
          //   this.$message({
          //     showClose: true,
          //     message: `${this.typeText}失败!${data.message}`,
          //     type: 'error',
          //   })
          // }

        } else {
          // console.log('error submit!!')
          return false;
        }
      });
    },

    resetForm(sellerData) {
      this.$refs[sellerData].resetFields();
    },

    async selectUserBtn() {
      // if(this.user && !this.user.length) {
      this.userPagination.currentPage = 1;
      await this.userSearchSubmit(1); // }

      this.dialogVisible = true;
    },

    // 查找用户
    async userSearchSubmit(currentPage) {
      const userSearch = await this.$axios.$get('/api/admin/user/search', {
        params: {
          identity: this.userSearch.identity,
          name: this.userSearch.name,
          email: this.userSearch.email,
          phone: this.userSearch.phone,
          pageSize: this.userPagination.pageSize,
          currentPage: currentPage
        }
      });
      this.userPagination.total = userSearch.data.total;
      this.user = userSearch.data.list;
    },

    changeUserCurrentPage(currentPage) {
      this.userSearchSubmit(currentPage);
    },

    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss');
    },

    onMock() {
      const firstname = external_mockjs_default.a.mock('@cfirst');
      const lastname = external_mockjs_default.a.mock('@cfirst');
      this.sellerData = {
        user: {
          userId: '',
          avatar: '',
          name: '',
          email: '',
          phone: '',
          password: ''
        },
        seller: {
          state: 1,
          type: 0,
          choice: false,
          banner: '',
          tags: [],
          firstname: firstname,
          lastname: lastname,
          gender: '',
          country: external_mockjs_default.a.mock('@province')
        },
        metadata: {
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
          profileZhcn: '',
          profileEnus: '',
          profileJajp: '',
          profileEses: ''
        },
        studio: {
          banner: '',
          name: '',
          introduce: '',
          video: '',
          photo: ''
        },
        resume: {
          prize: [// {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          individua: [// {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          organizing: [// {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ],
          publish: [// {
            //   zhcn: '',
            //   enus: '',
            //   jajp: '',
            //   eses: ''
            // }
          ]
        }
      };
    },

    handleUserAvatarSuccess(res, file) {
      // this.sellerData.avatar = URL.createObjectURL(file.raw);
      this.sellerData.user.avatar = res.data.src;
    },

    handleSellerBannerSuccess(res, file) {
      this.sellerData.seller.banner = res.data.src;
    },

    handleStudioBannerSuccess(res, file) {
      this.sellerData.studio.banner = res.data.src;
    },

    handleStudioPhotoSuccess(res, file) {
      this.sellerData.studio.photo = res.data.src;
    },

    handleStudioVideoPhotoSuccess(res, file) {
      this.sellerData.studio.videoPhoto = res.data.src;
    },

    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error('上传的图片大小不能超过 2MB!');
      }

      return isLt2M;
    },

    handleClose(tag) {
      this.sellerData.tags.splice(this.sellerData.tags.indexOf(tag), 1);
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
        this.sellerData.seller.tags.push(inputValue);
      }

      this.inputVisible = false;
      this.inputValue = '';
    },

    handleClick(tab, event) {// console.log(tab, event)
    },

    async resumeCreate(type, item) {
      // console.log(this.sellerData.resume[type], type, item)
      this.sellerData.resume[type].push(this.defaultResume[type]);
      this.defaultResume[type] = {
        zhcn: {
          year: '',
          resume: ''
        },
        enus: {
          year: '',
          resume: ''
        },
        jajp: {
          year: '',
          resume: ''
        },
        eses: {
          year: '',
          resume: ''
        }
      };
      return;
    },

    async resumeDelete(type, index) {
      this.sellerData.resume[type].splice(index, 1);
      return;
    },

    onEditorChangeZhcn({
      editor,
      html,
      text
    }, type) {
      console.log('editor change!', editor, html, text, type); // this.content = html

      this.sellerData.metadata.profileZhcn = html;
    },

    onEditorChangeEnus({
      editor,
      html,
      text
    }, type) {
      console.log('editor change!', editor, html, text, type); // this.content = html

      this.sellerData.metadata.profileEnus = html;
    },

    onEditorChangeJajp({
      editor,
      html,
      text
    }, type) {
      console.log('editor change!', editor, html, text, type); // this.content = html

      this.sellerData.metadata.profileJajp = html;
    },

    onEditorChangeEses({
      editor,
      html,
      text
    }, type) {
      console.log('editor change!', editor, html, text, type); // this.content = html

      this.sellerData.metadata.profileEses = html;
    }

  }
});
// CONCATENATED MODULE: ./pages/seller/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var seller_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/seller/create.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  seller_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "666d1420",
  "31c114a7"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map