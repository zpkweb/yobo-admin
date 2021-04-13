exports.ids = [7];
exports.modules = {

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/_type.vue?vue&type=template&id=5ffe10c2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-tree',{ref:"menuTree",attrs:{"data":_vm.menuTree,"show-checkbox":"","node-key":"level","check-on-click-node":"","default-expand-all":"","highlight-current":"","props":_vm.defaultProps},on:{"check-change":_vm.changeNodeCheck},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var node = ref.node;
var data = ref.data;
return _c('span',{staticClass:"custom-tree-node"},[_c('span',[_c('i',{class:data.icon}),_vm._v(_vm._s(_vm.$t(node.label)))])])}}])}),_vm._ssrNode(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.onSubmit}},[_vm._v(" "+_vm._s(_vm.$t('content.update'))+" ")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/auth/_type.vue?vue&type=template&id=5ffe10c2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/_type.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
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
  watch: {
    '$route.query': '$fetch'
  },

  data() {
    return {
      // data: this.$store.state.menu,
      defaultProps: {
        children: 'subMenu',
        label: 'name'
      },
      checkedKeys: []
    };
  },

  computed: {
    menuTree() {
      return this.$store.state.identityMenu;
    }

  },

  async fetch() {
    // console.log("this.$route", this.$route)
    const identity = await this.$axios.$get('/api/admin/identityList', {
      params: {
        'en-us': this.$route.params.type
      }
    }); // console.log("identity", identity.data.menu)

    if (identity.success) {
      if (identity.data.menu && identity.data.menu != " ") {
        // console.log("Object.assign(this.$store.state.defaultMenu, JSON.parse(identity.data.menu)))", deepClone(this.$store.state.defaultMenu, JSON.parse(identity.data.menu)))
        // console.log("JSON.parse(identity.data.menu)", JSON.parse(identity.data.menu))
        // console.log("extendIdentityMenu")
        await this.$store.commit("setIdentityMenu");
        await this.$store.commit("extendIdentityMenu", {
          identityMenu: this.$store.state.identityMenu,
          menu: JSON.parse(identity.data.menu)
        });
      } else {
        // console.log("setIdentityMenu")
        // this.$store.getters.addRootMenu(this.$store.state.identityMenu)
        await this.$store.commit("setIdentityMenu");
      }

      this.getCheckedNodes(this.$store.state.identityMenu);
      this.$refs.menuTree ? this.$refs.menuTree.setCheckedKeys(this.checkedKeys) : '';
    }
  },

  // 加载完成
  mounted() {
    this.$refs.menuTree.setCheckedKeys(this.checkedKeys);
  },

  methods: {
    async onSubmit() {
      console.log("JSON.stringify(this.menuTree)", JSON.stringify(this.menuTree));
      const identityListUpdate = await this.$axios.$post('/api/admin/identityList/update', {
        'en-us': this.$route.params.type,
        menu: JSON.stringify(this.menuTree)
      }).catch(error => {
        this.$message({
          showClose: true,
          message: `${this.$t('content.update')}${this.$t('content.fail')}! ${error.response.data.message}`,
          type: 'error'
        });
      });
      console.log(identityListUpdate);

      if (identityListUpdate.success) {
        this.$message({
          showClose: true,
          message: `${this.$t('content.update')}${this.$t('content.success')}`,
          type: 'success'
        });
      } else {
        this.$message({
          showClose: true,
          message: `${this.$t('content.update')}${this.$t('content.fail')}!${identityListUpdate.message}`,
          type: 'error'
        });
      }
    },

    changeNodeCheck(data, check, children) {
      // console.log('changeNodeCheck', data, check, children)
      let checked = 0;

      if (check && !children) {
        // true false
        checked = 1;
      } else if (!check && children) {
        // false true
        checked = 2;
      }

      this.$store.commit('changeMenuChedked', {
        level: data.level,
        checked
      }); // console.log(this.menuTree)
    },

    getCheckedNodes(data) {
      // console.log("getCheckedNodes", data)
      for (let item of data) {
        if (item.subMenu) {
          this.getCheckedNodes(item.subMenu);
        }

        if (item.checked === 1) {
          // console.log("item.level", item.level)
          this.checkedKeys.push(item.level);
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/auth/_type.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_typevue_type_script_lang_js_ = (_typevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/auth/_type.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_typevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ffe10c2",
  "52436a32"
  
)

/* harmony default export */ var _type = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_type.js.map