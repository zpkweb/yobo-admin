exports.ids = [15];
exports.modules = {

/***/ 129:
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"zh-cn":{"chart":{"user":"用户","commodity":"艺术品","statistics":"统计","data":"数据","number":"数量","module2":"{msg1}{msg2}","module3":"{msg1}{msg2}{msg3}"}},"en-us":{"chart":{"user":"User","commodity":"artwork","statistics":"Statistics","data":"Data","number":"Number","module2":"{msg1}{msg2}","module3":"{msg1}{msg2}{msg3}"}},"ja-jp":{"chart":{"user":"ユーザー","commodity":"アートワーク","statistics":"統計","data":"データ","number":"量","module2":"{msg1}{msg2}","module3":"{msg1}{msg2}{msg3}"}},"es-es":{"chart":{"user":"usuario","commodity":"obra de arte","statistics":"Estadísticas","data":"datos","number":"Cantidad","module2":"{msg1}{msg2}","module3":"{msg1}{msg2}{msg3}"}}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_intlify_vue_i18n_loader_lib_index_js_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chart.vue?vue&type=template&id=a4583bac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('highchart',{attrs:{"options":_vm.userChartOptions}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/chart.vue?vue&type=template&id=a4583bac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/chart.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var chartvue_type_script_lang_js_ = ({
  // layout: 'index',
  // fetchOnServer: false,
  props: {
    caption: String,
    title: String,
    subtitle: String,
    seriesName: String,
    yAxis: String,
    points: Array
  },

  data() {
    return {
      // caption: '统计',
      // title: '数据统计',
      // subtitle: '用户统计',
      // seriesName: '用户数量',
      // yAxis: '人数',
      // points: [10, 0, 8, 2, 6, 4, 5, 5],
      seriesColor: '',
      animationDuration: 1000,
      chartType: '',
      colorInputIsSupported: null,
      chartTypes: [],
      durations: [0, 500, 1000, 2000],
      watchers: undefined,
      colors: ['Red', 'Green', 'Blue', 'Pink', 'Orange', 'Brown', 'Black', 'Purple'],
      lastPointClicked: {
        timestamp: '',
        x: '',
        y: ''
      },
      sexy: false
    };
  },

  computed: {
    invertedColor() {
      return (offset = 0) => '#' + ((parseInt(`0x${this.seriesColor.split('#')[1]}`) ^ 0xffffff) + offset).toString(16);
    },

    userChartOptions() {
      const ctx = this;
      return {
        caption: {
          text: this.caption,
          style: {
            color: this.sexy ? this.invertedColor(0) : '#black'
          }
        },
        chart: {
          backgroundColor: this.sexy ? {
            linearGradient: {
              x1: 0,
              x2: 0,
              y1: 0,
              y2: 1
            },
            stops: [[0, this.seriesColor], [0.5, '#ffffff'], [1, this.seriesColor]]
          } : '#ffffff',
          className: 'my-chart',
          type: this.chartType.toLowerCase()
        },
        plotOptions: {
          series: {
            cursor: 'pointer',
            point: {
              events: {
                click() {
                  ctx.$emit('pointClicked', this);
                }

              }
            }
          }
        },
        yAxis: [{
          title: {
            text: this.yAxis,
            style: {
              color: '#000000'
            }
          }
        }],
        title: {
          style: {
            color: this.sexy ? this.invertedColor(0) : '#black'
          },
          text: `${this.title} ` + (this.lastPointClicked.timestamp !== '' ? `(Point clicked: ${this.lastPointClicked.timestamp})` : '')
        },
        subtitle: {
          style: {
            color: this.sexy ? this.invertedColor(0) : '#black'
          },
          text: `${this.subtitle}`
        },
        legend: {
          itemStyle: {
            color: this.sexy ? this.invertedColor(0) : '#black'
          }
        },
        series: [{
          name: this.seriesName,
          data: this.points,
          color: this.seriesColor
        }]
      };
    }

  }
});
// CONCATENATED MODULE: ./components/chart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_chartvue_type_script_lang_js_ = (chartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/chart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_chartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "356fdb22"
  
)

/* harmony default export */ var chart = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=4fd94782&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-main',[_c('Chart',{attrs:{"caption":_vm.$t('chart.module2', {
        msg1: _vm.$t('chart.user'),
        msg2: _vm.$t('chart.statistics'),
      }),"title":_vm.$t('chart.module3', {
        msg1: _vm.$t('chart.user'),
        msg2: _vm.$t('chart.data'),
        msg3: _vm.$t('chart.statistics'),
      }),"subtitle":_vm.$t('chart.module2', { msg1: _vm.$t('chart.user'), msg2: _vm.$t('chart.data') }),"seriesName":_vm.$t('chart.module2', {
        msg1: _vm.$t('chart.user'),
        msg2: _vm.$t('chart.number'),
      }),"yAxis":_vm.$t('chart.user'),"points":[10, 8, 6, 4, 2, 0, 6, 10]}}),_vm._v(" "),_c('Chart',{attrs:{"caption":_vm.$t('chart.module2', {
        msg1: _vm.$t('chart.commodity'),
        msg2: _vm.$t('chart.statistics'),
      }),"title":_vm.$t('chart.module3', {
        msg1: _vm.$t('chart.commodity'),
        msg2: _vm.$t('chart.data'),
        msg3: _vm.$t('chart.statistics'),
      }),"subtitle":_vm.$t('chart.module2', {
        msg1: _vm.$t('chart.commodity'),
        msg2: _vm.$t('chart.data'),
      }),"seriesName":_vm.$t('chart.module2', {
        msg1: _vm.$t('chart.commodity'),
        msg2: _vm.$t('chart.number'),
      }),"yAxis":_vm.$t('chart.commodity'),"points":[10, 0, 8, 2, 6, 4, 5, 5]}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=4fd94782&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "fr-fr": {
//   "chart": {
//     "user": "utilisateur",
//     "commodity": "ouvrages d'art",
//     "statistics": "statistiques",
//     "data": "Les données",
//     "number": "Quantité",
//     "module2": "{msg1}{msg2}",
//     "module3": "{msg1}{msg2}{msg3}"
//   }
// }
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// EXTERNAL MODULE: ./pages/index.vue?vue&type=custom&index=0&blockType=i18n
var pagesvue_type_custom_index_0_blockType_i18n = __webpack_require__(170);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "29abc7ed"
  
)

/* custom blocks */

if (typeof pagesvue_type_custom_index_0_blockType_i18n["default"] === 'function') Object(pagesvue_type_custom_index_0_blockType_i18n["default"])(component)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Chart: __webpack_require__(193).default})


/***/ })

};;
//# sourceMappingURL=index.js.map