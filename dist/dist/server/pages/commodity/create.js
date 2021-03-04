exports.ids = [10];
exports.modules = {

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/commodity/create.vue?vue&type=template&id=6d893a70&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{ref:"form",attrs:{"model":_vm.form,"label-width":"108px"}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.name') }),"prop":'name.zh-cn',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.zh')) + (_vm.$t('commodity.name')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.zh') })},model:{value:(_vm.form.name['zh-cn']),callback:function ($$v) {_vm.$set(_vm.form.name, 'zh-cn', $$v)},expression:"form.name['zh-cn']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.name') }),"prop":'name.en-us',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.en')) + (_vm.$t('commodity.name')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.en') })},model:{value:(_vm.form.name['en-us']),callback:function ($$v) {_vm.$set(_vm.form.name, 'en-us', $$v)},expression:"form.name['en-us']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.name') }),"prop":'name.ja-jp',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.ja')) + (_vm.$t('commodity.name')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.ja') })},model:{value:(_vm.form.name['ja-jp']),callback:function ($$v) {_vm.$set(_vm.form.name, 'ja-jp', $$v)},expression:"form.name['ja-jp']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.name') }),"prop":'name.es-es',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.es')) + (_vm.$t('commodity.name')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.es') })},model:{value:(_vm.form.name['es-es']),callback:function ($$v) {_vm.$set(_vm.form.name, 'es-es', $$v)},expression:"form.name['es-es']"}})],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.desc') }),"prop":'desc.zh-cn',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.zh')) + (_vm.$t('commodity.desc')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.zh') })},model:{value:(_vm.form.desc['zh-cn']),callback:function ($$v) {_vm.$set(_vm.form.desc, 'zh-cn', $$v)},expression:"form.desc['zh-cn']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.desc') }),"prop":'desc.en-us',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.en')) + (_vm.$t('commodity.desc')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.en') })},model:{value:(_vm.form.desc['en-us']),callback:function ($$v) {_vm.$set(_vm.form.desc, 'en-us', $$v)},expression:"form.desc['en-us']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.desc') }),"prop":'desc.ja-jp',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.ja')) + (_vm.$t('commodity.desc')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.ja') })},model:{value:(_vm.form.desc['ja-jp']),callback:function ($$v) {_vm.$set(_vm.form.desc, 'ja-jp', $$v)},expression:"form.desc['ja-jp']"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.desc') }),"prop":'desc.es-es',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.es')) + (_vm.$t('commodity.desc')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"textarea","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.es') })},model:{value:(_vm.form.desc['es-es']),callback:function ($$v) {_vm.$set(_vm.form.desc, 'es-es', $$v)},expression:"form.desc['es-es']"}})],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', {
            lang: _vm.$t('lang.price.zh'),
            name: _vm.$t('commodity.price.title'),
          }),"prop":'price.zh-cn',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.price.zh')) + (_vm.$t('commodity.price.title')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.price.zh') })},model:{value:(_vm.form.price['zh-cn']),callback:function ($$v) {_vm.$set(_vm.form.price, 'zh-cn', $$v)},expression:"form.price['zh-cn']"}},[_c('template',{slot:"append"},[_vm._v("¥")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', {
            lang: _vm.$t('lang.price.en'),
            name: _vm.$t('commodity.price.title'),
          }),"prop":'price.en-us',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.price.en')) + (_vm.$t('commodity.price.title')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.price.en') })},model:{value:(_vm.form.price['en-us']),callback:function ($$v) {_vm.$set(_vm.form.price, 'en-us', $$v)},expression:"form.price['en-us']"}},[_c('template',{slot:"append"},[_vm._v("$")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', {
            lang: _vm.$t('lang.price.ja'),
            name: _vm.$t('commodity.price.title'),
          }),"prop":'price.ja-jp',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.price.ja')) + (_vm.$t('commodity.price.title')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.price.ja') })},model:{value:(_vm.form.price['ja-jp']),callback:function ($$v) {_vm.$set(_vm.form.price, 'ja-jp', $$v)},expression:"form.price['ja-jp']"}},[_c('template',{slot:"append"},[_vm._v("￥")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', {
            lang: _vm.$t('lang.price.es'),
            name: _vm.$t('commodity.price.title'),
          }),"prop":'price.es-es',"rules":{
          required: true,
          message: ("" + (_vm.$t('lang.price.es')) + (_vm.$t('commodity.price.title')) + (_vm.$t(
            'form.noEmpty'
          ))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('lang.price.es') })},model:{value:(_vm.form.price['es-es']),callback:function ($$v) {_vm.$set(_vm.form.price, 'es-es', $$v)},expression:"form.price['es-es']"}},[_c('template',{slot:"append"},[_vm._v("€")])],2)],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":10}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.width.title'),"prop":'width',"rules":{
          required: true,
          message: ("" + (_vm.$t('commodity.width.title')) + (_vm.$t('form.noEmpty'))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"input","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('commodity.width.title') })},model:{value:(_vm.form.width),callback:function ($$v) {_vm.$set(_vm.form, "width", $$v)},expression:"form.width"}},[_c('template',{slot:"append"},[_vm._v("cm")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":10}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.height.title'),"prop":'height',"rules":{
          required: true,
          message: ("" + (_vm.$t('commodity.height.title')) + (_vm.$t('form.noEmpty'))),
          trigger: 'blur',
        }}},[_c('el-input',{attrs:{"type":"input","placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('commodity.height.title') })},model:{value:(_vm.form.height),callback:function ($$v) {_vm.$set(_vm.form, "height", $$v)},expression:"form.height"}},[_c('template',{slot:"append"},[_vm._v("cm")])],2)],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.shape'),"prop":'shapes[0].id',"rules":{
          required: false,
          message: ("" + (_vm.$t('commodity.shape')) + (_vm.$t('form.noEmpty'))),
          trigger: 'change',
        }}},[_c('el-select',{attrs:{"placeholder":_vm.$t('form.selectPlaceholder', { msg: _vm.$t('commodity.shape') }),"clearable":""},model:{value:(_vm.form.shapes[0].id),callback:function ($$v) {_vm.$set(_vm.form.shapes[0], "id", $$v)},expression:"form.shapes[0].id"}},_vm._l((_vm.shapes),function(item,index){return _c('el-option',{key:index,attrs:{"label":item['zh-cn'],"value":item.id}},[_c('span',[_vm._v(_vm._s(_vm.$t('lang.zh'))+"："+_vm._s(item['zh-cn'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.en'))+"："+_vm._s(item['en-us'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.ja'))+"："+_vm._s(item['ja-jp'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.es'))+"："+_vm._s(item['es-es']))])])}),1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.theme'),"prop":'themes[0].id',"rules":{
          required: false,
          message: ("" + (_vm.$t('commodity.theme')) + (_vm.$t('form.noEmpty'))),
          trigger: 'change',
        }}},[_c('el-select',{attrs:{"placeholder":_vm.$t('form.selectPlaceholder', { msg: _vm.$t('commodity.theme') }),"clearable":""},model:{value:(_vm.form.themes[0].id),callback:function ($$v) {_vm.$set(_vm.form.themes[0], "id", $$v)},expression:"form.themes[0].id"}},_vm._l((_vm.themes),function(item,index){return _c('el-option',{key:index,attrs:{"label":item['zh-cn'],"value":item.id}},[_c('span',[_vm._v(_vm._s(_vm.$t('lang.zh'))+"："+_vm._s(item['zh-cn'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.en'))+"："+_vm._s(item['en-us'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.ja'))+"："+_vm._s(item['ja-jp'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.es'))+"："+_vm._s(item['es-es']))])])}),1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.category'),"prop":'categorys[0].id',"rules":{
          required: false,
          message: ("" + (_vm.$t('commodity.category')) + (_vm.$t('form.noEmpty'))),
          trigger: 'change',
        }}},[_c('el-select',{attrs:{"placeholder":_vm.$t('form.selectPlaceholder', { msg: _vm.$t('commodity.category') }),"clearable":""},model:{value:(_vm.form.categorys[0].id),callback:function ($$v) {_vm.$set(_vm.form.categorys[0], "id", $$v)},expression:"form.categorys[0].id"}},_vm._l((_vm.categorys),function(item,index){return _c('el-option',{key:index,attrs:{"label":item['zh-cn'],"value":item.id}},[_c('span',[_vm._v(_vm._s(_vm.$t('lang.zh'))+"："+_vm._s(item['zh-cn'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.en'))+"："+_vm._s(item['en-us'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.ja'))+"："+_vm._s(item['ja-jp'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.es'))+"："+_vm._s(item['es-es']))])])}),1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.technique'),"prop":'techniques[0].id',"rules":{
          required: false,
          message: ("" + (_vm.$t('commodity.technique')) + (_vm.$t('form.noEmpty'))),
          trigger: 'change',
        }}},[_c('el-select',{attrs:{"placeholder":_vm.$t('form.selectPlaceholder', { msg: _vm.$t('commodity.technique') }),"clearable":""},model:{value:(_vm.form.techniques[0].id),callback:function ($$v) {_vm.$set(_vm.form.techniques[0], "id", $$v)},expression:"form.techniques[0].id"}},_vm._l((_vm.techniques),function(item,index){return _c('el-option',{key:index,attrs:{"label":item['zh-cn'],"value":item.id}},[_c('span',[_vm._v(_vm._s(_vm.$t('lang.zh'))+"："+_vm._s(item['zh-cn'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.en'))+"："+_vm._s(item['en-us'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.ja'))+"："+_vm._s(item['ja-jp'])+"，")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('lang.es'))+"："+_vm._s(item['es-es']))])])}),1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.color.title')}},[_c('el-row',{attrs:{"gutter":10}},[_vm._l((_vm.form.colors),function(item,index){return _c('el-col',{key:index,attrs:{"span":2}},[_c('el-form-item',{attrs:{"prop":'colors.' + index + '.name',"rules":{
            required: false,
            message: ("" + (_vm.$t('commodity.color.title')) + (_vm.$t('form.noEmpty'))),
            trigger: 'blur',
          }}},[_c('el-color-picker',{model:{value:(_vm.form.colors[index].name),callback:function ($$v) {_vm.$set(_vm.form.colors[index], "name", $$v)},expression:"form.colors[index].name"}})],1)],1)}),_vm._v(" "),_c('el-col',{attrs:{"span":2,"offset":1}},[_c('el-button',{attrs:{"icon":"el-icon-circle-plus-outline"},on:{"click":_vm.addColors}})],1)],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.photo')}},[_c('el-upload',{attrs:{"file-list":_vm.form.photos,"action":"/api/upload/images","data":{ type: 'commodity' },"list-type":"picture-card","on-preview":_vm.uploadPreview,"on-remove":_vm.uploadRemove,"on-success":_vm.uploadSuccess}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.dialogVisible},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl,"alt":""}})])],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.$t('commodity.state.title'),"prop":'state'}},[_c('el-radio-group',{model:{value:(_vm.form.state),callback:function ($$v) {_vm.$set(_vm.form, "state", $$v)},expression:"form.state"}},[_c('el-radio',{attrs:{"label":0}},[_vm._v(_vm._s(_vm.$t('commodity.state.added')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":1}},[_vm._v(_vm._s(_vm.$t('commodity.state.onsale')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":2}},[_vm._v(_vm._s(_vm.$t('commodity.state.sold')))]),_vm._v(" "),_c('el-radio',{attrs:{"label":3}},[_vm._v(_vm._s(_vm.$t('commodity.state.offline')))])],1)],1)],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('commodity.seller')}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":8}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('user.seller.id') })},model:{value:(_vm.form.sellerId),callback:function ($$v) {_vm.$set(_vm.form, "sellerId", $$v)},expression:"form.sellerId"}})],1)],1)],1),_vm._v(" "),_c('el-form-item',[(_vm.isCreate)?_c('el-button',{attrs:{"type":"primary","icon":"el-icon-circle-plus-outline"},on:{"click":function($event){return _vm.onSubmit('form')}}},[_vm._v("\n      "+_vm._s(_vm.$t('content.create'))+"\n    ")]):_c('el-button',{attrs:{"type":"primary","icon":"el-icon-check"},on:{"click":function($event){return _vm.onSubmit('form')}}},[_vm._v("\n      "+_vm._s(_vm.$t('content.update'))+"\n    ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-check"},on:{"click":_vm.onMock}},[_vm._v("\n      "+_vm._s(_vm.$t('content.fill'))+"\n    ")]),_vm._v(" "),_c('el-button',{attrs:{"icon":"el-icon-circle-close"},on:{"click":function($event){return _vm.resetForm('form')}}},[_vm._v(_vm._s(_vm.$t('content.clear')))])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/commodity/create.vue?vue&type=template&id=6d893a70&scoped=true&

// EXTERNAL MODULE: external "mockjs"
var external_mockjs_ = __webpack_require__(116);
var external_mockjs_default = /*#__PURE__*/__webpack_require__.n(external_mockjs_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/commodity/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.isCreate = true;
    this.reset(); // 形状

    const optionsShape = await this.$axios.$get(`/api/admin/commodity/options/shape`);

    if (optionsShape.data && optionsShape.data.length) {
      // this.options.shapes = optionsShape.data
      this.$store.commit('addCommodityOpitons', {
        type: 'shapes',
        data: optionsShape.data
      });
    } // 主题


    const optionsTheme = await this.$axios.$get(`/api/admin/commodity/options/theme`);

    if (optionsTheme.data && optionsTheme.data.length) {
      // this.options.themes = optionsTheme.data
      this.$store.commit('addCommodityOpitons', {
        type: 'themes',
        data: optionsTheme.data
      });
    } // 类别


    const optionsCategory = await this.$axios.$get(`/api/admin/commodity/options/category`);

    if (optionsCategory.data && optionsCategory.data.length) {
      // this.options.categorys = optionsCategory.data
      this.$store.commit('addCommodityOpitons', {
        type: 'categorys',
        data: optionsCategory.data
      });
    } // 手法


    const optionsTechnique = await this.$axios.$get(`/api/admin/commodity/options/technique`);

    if (optionsTechnique.data && optionsTechnique.data.length) {
      // this.options.techniques = optionsTechnique.data
      this.$store.commit('addCommodityOpitons', {
        type: 'techniques',
        data: optionsTechnique.data
      });
    } // console.log('this.$route.query', this.$route.query)


    if (this.$route.query && this.$route.query.commodityId) {
      this.form.commodityId = this.$route.query.commodityId;
      const commodity = await this.$axios.$get('/api/admin/commodity/edit', {
        params: {
          commodityId: this.form.commodityId
        }
      });

      if (commodity.success) {
        const commodityForm = Object.assign({}, this.form, commodity.data); // this.form = Object.assign(this.form, commodity.data)
        // this.form.name = commodity.data.name;
        // this.form.desc = commodity.data.desc;
        // this.form.price = commodity.data.price;
        // this.form.photos = commodity.data.photos;
        // console.log('commodityForm', commodityForm)

        this.form.state = commodityForm.state;
        this.form.width = commodityForm.width;
        this.form.height = commodityForm.height;
        this.form.colors = commodityForm.colors;

        if (commodityForm.name) {
          this.form.name = commodityForm.name;
        }

        if (commodityForm.desc) {
          this.form.desc = commodityForm.desc;
        }

        if (commodityForm.price) {
          this.form.price = commodityForm.price;
        }

        if (commodityForm.photos) {
          // console.log("commodityForm.photos", commodityForm.photos)
          const photos = commodityForm.photos.map(item => {
            item.url = item.src;
            return item;
          });
          this.form.photos = photos;
        }

        if (commodityForm.shapes) {
          this.form.shapes = commodityForm.shapes;
        }

        if (commodityForm.themes) {
          this.form.themes = commodityForm.themes;
        }

        if (commodityForm.categorys) {
          this.form.categorys = commodityForm.categorys;
        }

        if (commodityForm.techniques) {
          this.form.techniques = commodityForm.techniques;
        }

        if (commodityForm.seller) {
          this.form.sellerId = commodityForm.seller.sellerId;
        } // console.log('this.form', this.form)
        // this.form = commodityForm;


        this.type = 'edit';
        this.typeText = this.$t('content.update');
        this.isCreate = false;
      }
    }
  },

  data() {
    return {
      type: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      form: {},
      dialogImageUrl: '',
      dialogVisible: false,
      loading: false
    };
  },

  computed: {
    shapes() {
      return this.$store.state.commodity.options.shapes;
    },

    themes() {
      return this.$store.state.commodity.options.themes;
    },

    categorys() {
      return this.$store.state.commodity.options.categorys;
    },

    techniques() {
      return this.$store.state.commodity.options.techniques;
    }

  },
  watch: {
    '$route.query': '$fetch'
  },
  watchQuery: ['commodityId'],

  mounted() {// this.list = this.states.map((item) => {
    //   return { value: `value:${item}`, label: `label:${item}` }
    // })
  },

  methods: {
    onSubmit(formName) {
      // console.log('submit!', this.form)
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let data;

          if (this.isCreate) {
            data = await this.$axios.$post('/api/admin/commodity/create', this.form).catch(error => {
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}! ${error.response.data.message}`,
                type: 'error'
              });
            });
          } else {
            data = await this.$axios.$post('/api/admin/commodity/update', this.form).catch(error => {
              this.$message({
                showClose: true,
                message: `${this.typeText}${this.$t('content.fail')}! ${error.response.data.message}`,
                type: 'error'
              });
            });
          } // console.log('data', data)


          if (data.status === 200) {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.success')}`,
              type: 'success'
            });

            if (this.isCreate) {
              // this.$refs[formName].resetFields()
              this.resetForm('form');
            }
          } else {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}!${data.message}`,
              type: 'error'
            });
          }
        }
      });
    },

    onMock() {
      if (!this.shapes.length || !this.themes.length || !this.categorys.length || !this.techniques.length) {
        this.$message({
          showClose: true,
          message: '请先添加艺术品选项',
          type: 'error'
        });
        return;
      }

      const createCommodityMock = {
        commodityId: this.form.commodityId,
        name: {
          'zh-cn': external_mockjs_default.a.mock('@ctitle(2, 8)'),
          'en-us': external_mockjs_default.a.mock('@title(2)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          // 'fr-fr': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix'
        },
        desc: {
          'zh-cn': external_mockjs_default.a.mock('@cparagraph(1,3)'),
          'en-us': external_mockjs_default.a.mock('@paragraph(1,3)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          // 'fr-fr': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix'
        },
        price: {
          'zh-cn': external_mockjs_default.a.mock('@integer(60, 100)'),
          'en-us': external_mockjs_default.a.mock('@integer(60, 100)'),
          'ja-jp': external_mockjs_default.a.mock('@integer(60, 100)'),
          // 'fr-fr': Mock.mock('@integer(60, 100)'),
          'es-es': external_mockjs_default.a.mock('@integer(60, 100)')
        },
        shapes: [this.shapes[external_mockjs_default.a.mock(`@integer(0,${this.shapes.length - 1})`)]],
        themes: [this.themes[external_mockjs_default.a.mock(`@integer(0,${this.themes.length - 1})`)]],
        categorys: [this.categorys[external_mockjs_default.a.mock(`@integer(0,${this.categorys.length - 1})`)]],
        techniques: [this.techniques[external_mockjs_default.a.mock(`@integer(0,${this.techniques.length - 1})`)]],
        photos: [],
        colors: [{
          name: external_mockjs_default.a.mock('@color')
        }],
        width: external_mockjs_default.a.mock('@natural(100, 300)'),
        height: external_mockjs_default.a.mock('@natural(100, 300)'),
        state: external_mockjs_default.a.mock('@integer(0, 3)'),
        sellerId: ''
      }; // console.log('createCommodityMock', createCommodityMock)

      this.form = createCommodityMock;
      this.type = 'create';
      this.typeText = this.$t('content.create');
      this.isCreate = true;
    },

    resetForm(formName) {
      this.reset();
      this.type = 'create';
      this.typeText = this.$t('content.create');
      this.isCreate = true;
      this.$refs[formName].clearValidate(); // console.log(this.form)
    },

    addColors() {
      this.form.colors.push({
        name: '#fff'
      });
    },

    reset() {
      this.form = {
        commodityId: '',
        name: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        },
        desc: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        },
        price: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        },
        shapes: [{
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        }],
        themes: [{
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        }],
        categorys: [{
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        }],
        techniques: [{
          id: '',
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': ''
        }],
        photos: [],
        colors: [{
          name: '#fff'
        }],
        width: '',
        height: '',
        state: 0,
        sellerId: ''
      };
    },

    uploadSuccess(res, file) {
      // console.log(res, file)
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.form.photos.push({
        src: res.data.src,
        url: res.data.src,
        name: file.name
      }); // console.log(this.form)
    },

    uploadRemove(file, fileList) {
      // console.log(file, fileList)
      for (const [index, item] of Object.entries(this.form.photos)) {
        if (item.name === file.name) {
          this.form.photos.splice(index, 1);
        }
      }
    },

    uploadPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }

  }
});
// CONCATENATED MODULE: ./pages/commodity/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var commodity_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/commodity/create.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commodity_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d893a70",
  "d8dc875a"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map