exports.ids = [10];
exports.modules = {

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/commodity/all.vue?vue&type=template&id=506a05cd&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-table',{attrs:{"data":_vm.commodity,"border":""}},[_c('el-table-column',{attrs:{"type":"expand","label":_vm.$t('commodity.show')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-form',{staticClass:"demo-table-expand",attrs:{"label-position":"left","inline":""}},[_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.name')})}},[_c('span',[_vm._v(_vm._s(scope.row.name['zh-cn']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.name')})}},[_c('span',[_vm._v(_vm._s(scope.row.name['en-us']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.name')})}},[_c('span',[_vm._v(_vm._s(scope.row.name['ja-jp']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.name')})}},[_c('span',[_vm._v(_vm._s(scope.row.name['es-es']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.desc')})}},[_c('span',[_vm._v(_vm._s(scope.row.desc['zh-cn']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.desc')})}},[_c('span',[_vm._v(_vm._s(scope.row.desc['en-us']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.desc')})}},[_c('span',[_vm._v(_vm._s(scope.row.desc['ja-jp']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.desc')})}},[_c('span',[_vm._v(_vm._s(scope.row.desc['es-es']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.price.title')})}},[_c('span',[_vm._v(_vm._s(scope.row.price['zh-cn']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.price.title')})}},[_c('span',[_vm._v(_vm._s(scope.row.price['en-us']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.price.title')})}},[_c('span',[_vm._v(_vm._s(scope.row.price['ja-jp']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.price.title')})}},[_c('span',[_vm._v(_vm._s(scope.row.price['es-es']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.shape')})}},[_c('span',[_vm._v(_vm._s(scope.row.shapes[0]['zh-cn']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.shape')})}},[_c('span',[_vm._v(_vm._s(scope.row.shapes[0]['en-us']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.shape')})}},[_c('span',[_vm._v(_vm._s(scope.row.shapes[0]['ja-jp']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.shape')})}},[_c('span',[_vm._v(_vm._s(scope.row.shapes[0]['es-es']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.theme')})}},[_c('span',[_vm._v(_vm._s(scope.row.themes[0]['zh-cn']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.theme')})}},[_c('span',[_vm._v(_vm._s(scope.row.themes[0]['en-us']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.theme')})}},[_c('span',[_vm._v(_vm._s(scope.row.themes[0]['ja-jp']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.theme')})}},[_c('span',[_vm._v(_vm._s(scope.row.themes[0]['es-es']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.category')})}},[_c('span',[_vm._v(_vm._s(scope.row.categorys[0]['zh-cn']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.category')})}},[_c('span',[_vm._v(_vm._s(scope.row.categorys[0]['en-us']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.category')})}},[_c('span',[_vm._v(_vm._s(scope.row.categorys[0]['ja-jp']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.category')})}},[_c('span',[_vm._v(_vm._s(scope.row.categorys[0]['es-es']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.zh'), name: _vm.$t('commodity.technique')})}},[_c('span',[_vm._v(_vm._s(scope.row.techniques[0]['zh-cn']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.en'), name: _vm.$t('commodity.technique')})}},[_c('span',[_vm._v(_vm._s(scope.row.techniques[0]['en-us']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.ja'), name: _vm.$t('commodity.technique')})}},[_c('span',[_vm._v(_vm._s(scope.row.techniques[0]['ja-jp']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('langname', { lang: _vm.$t('lang.es'), name: _vm.$t('commodity.technique')})}},[_c('span',[_vm._v(_vm._s(scope.row.techniques[0]['es-es']))])])],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name['zh-cn']","label":_vm.$t('commodity.name')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top"}},[_c('p',[_vm._v(_vm._s(_vm.$t('lang.zh'))+": "+_vm._s(scope.row.name['zh-cn']))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('lang.en'))+": "+_vm._s(scope.row.name['en-us']))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('lang.ja'))+": "+_vm._s(scope.row.name['ja-jp']))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('lang.es'))+": "+_vm._s(scope.row.name['es-es']))]),_vm._v(" "),_c('div',{attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(scope.row.name[_vm.$i18n.locale])+"\n          ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"state","label":_vm.$t('commodity.state.title')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(_vm.options.state[scope.row.state].name)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('commodity.seller')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top"}},[_c('p',[_vm._v("姓名 : "+_vm._s(scope.row.seller ? ((scope.row.seller.firstname) + " " + (scope.row.seller.lastname)) : ''))]),_vm._v(" "),_c('p',[_vm._v("Id: "+_vm._s(scope.row.seller ? scope.row.seller.sellerId : ''))]),_vm._v(" "),_c('p',[_vm._v("国家: "+_vm._s(scope.row.seller ? scope.row.seller.country : ''))]),_vm._v(" "),_c('p',[_vm._v("类型: "+_vm._s(scope.row.seller ? scope.row.seller.typeName : ''))]),_vm._v(" "),_c('div',{attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(scope.row.seller ? ((scope.row.seller.firstname) + " " + (scope.row.seller.lastname)) : '')+"\n          ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"price['zh-cn']","label":_vm.$t('commodity.price.title')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top"}},[_c('p',[_vm._v(_vm._s(_vm.$t('lang.zh'))+": "+_vm._s(scope.row.price['zh-cn']))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('lang.en'))+": "+_vm._s(scope.row.price['en-us']))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('lang.ja'))+": "+_vm._s(scope.row.price['ja-jp']))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('lang.es'))+": "+_vm._s(scope.row.price['es-es']))]),_vm._v(" "),_c('div',{attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n            "+_vm._s(scope.row.price[_vm.$i18n.locale])+"\n          ")])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"photo","label":_vm.$t('commodity.photo'),"width":"123"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row.photos && scope.row.photos.length)?_c('div',{staticClass:"demo-image__preview"},[_c('el-image',{staticStyle:{"width":"100px","height":"100px"},attrs:{"src":scope.row.photos[0].src,"preview-src-list":scope.row.photos.map(function (item){return item.src})}})],1):_vm._e()]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"width","label":_vm.$t('commodity.width.title')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.width)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"height","label":_vm.$t('commodity.height.title')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n        "+_vm._s(scope.row.height)+"\n      ")]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"colors","label":_vm.$t('commodity.color.title'),"width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return _vm._l((scope.row.colors),function(item,index){return _c('el-tag',{key:index,staticStyle:{"margin-left":"10px"},attrs:{"disable-transitions":"","color":item.name,"effect":"dark"}},[_vm._v("\n          "+_vm._s(item.name)+"\n        ")])})}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"desc['zh-cn']","label":_vm.$t('commodity.desc'),"width":"200"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-popover',{attrs:{"trigger":"hover","placement":"top"}},[_c('p',[_vm._v(_vm._s(_vm.$t('lang.zh'))+": "+_vm._s(scope.row.desc['zh-cn']))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('lang.en'))+": "+_vm._s(scope.row.desc['en-us']))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('lang.ja'))+": "+_vm._s(scope.row.desc['ja-jp']))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('lang.es'))+": "+_vm._s(scope.row.desc['es-es']))]),_vm._v(" "),_c('div',{attrs:{"slot":"reference"},slot:"reference"},[_c('span',{staticClass:"ellipsis",staticStyle:{"display":"inline-block","width":"179px"}},[_vm._v(_vm._s(scope.row.desc[_vm.$i18n.locale]))])])])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createdDate","formatter":_vm.formatterDate,"label":_vm.$t('content.createdDate'),"width":"160"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('content.operation'),"width":"180"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","icon":"el-icon-edit"},on:{"click":function($event){return _vm.commodityEdit(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.edit')))]),_vm._v(" "),_c('el-popover',{attrs:{"placement":"top"},model:{value:(scope.row.visible),callback:function ($$v) {_vm.$set(scope.row, "visible", $$v)},expression:"scope.row.visible"}},[_c('p',[_vm._v(_vm._s(_vm.$t('content.deleteText')))]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"right","margin":"0"}},[_c('el-button',{attrs:{"size":"mini","type":"text"},on:{"click":function($event){scope.row.visible = false}}},[_vm._v(_vm._s(_vm.$t('content.cancel')))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.commodityDelete(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.define')))])],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","size":"mini","type":"danger","icon":"el-icon-delete"},slot:"reference"},[_vm._v(_vm._s(_vm.$t('content.delete')))])],1)]}}])})],1),_vm._ssrNode(" "),_c('el-pagination',{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"background":"","layout":"prev, pager, next","page-size":_vm.pageSize,"current-page":_vm.currentPage,"total":_vm.total},on:{"current-change":_vm.changeCurrentPage}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/commodity/all.vue?vue&type=template&id=506a05cd&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/commodity/all.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var allvue_type_script_lang_js_ = ({
  data() {
    return {
      currentPage: 1,
      pageSize: 8,
      total: 0,
      commodity: [],
      options: {
        category: [],
        classification: [],
        material: [],
        model: [],
        place: [],
        ruiwu: [],
        shape: [],
        specification: [],
        style: [],
        technique: [],
        theme: [],
        type: [],
        use: [],
        // 0:已添加，1:售卖中，2:已售卖，3:已下架
        state: [{
          index: 0,
          name: this.$t('commodity.state.added')
        }, {
          index: 1,
          name: this.$t('commodity.state.onsale')
        }, {
          index: 2,
          name: this.$t('commodity.state.sold')
        }, {
          index: 3,
          name: this.$t('commodity.state.offline')
        }]
      }
    };
  },

  async fetch() {
    await this.onCommoditySearch();
  },

  methods: {
    async onCommoditySearch() {
      // let isSearch = false
      // for (let [key, value] of Object.entries(this.commoditySearch)) {
      //   if (value) {
      //     isSearch = true
      //     break
      //   }
      // }
      let commodityData; // if (isSearch) {

      const searchData = await this.$axios.$get('/api/admin/commodity/all');
      console.log("searchData", searchData);
      this.total = searchData.data.total;
      commodityData = searchData.data.list.map(item => {
        item.visible = false;
        return item;
      });
      this.commodity = commodityData;
    },

    // 删除
    async commodityDelete(index, row) {
      // console.log('commodityDelete', index, row)
      const commodity = await this.$axios.$post('/api/admin/commodity/delete', {
        commodityId: row.commodityId
      }); // console.log('commodity', commodity)

      if (commodity.success) {
        this.commodity.splice(index, 1);
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

    commodityEdit(index, row) {
      this.$router.push(this.localePath(`/commodity/create?commodityId=${row.commodityId}`));
    },

    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss');
    },

    changeCurrentPage(val) {
      this.currentPage = val;
      this.onCommoditySearch();
    }

  }
});
// CONCATENATED MODULE: ./pages/commodity/all.vue?vue&type=script&lang=js&
 /* harmony default export */ var commodity_allvue_type_script_lang_js_ = (allvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/commodity/all.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  commodity_allvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "506a05cd",
  "23c2bd5a"
  
)

/* harmony default export */ var commodity_all = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=all.js.map