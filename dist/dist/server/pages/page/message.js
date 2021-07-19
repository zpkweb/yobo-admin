exports.ids = [24];
exports.modules = {

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/page/message.vue?vue&type=template&id=79008c2c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"message"},[_c('el-form',{staticClass:"user-search",attrs:{"inline":true,"model":_vm.messageSearch}},[_c('el-form-item',{attrs:{"label":_vm.$t('message.email')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('message.email') }),"clearable":""},model:{value:(_vm.messageSearch.title),callback:function ($$v) {_vm.$set(_vm.messageSearch, "title", $$v)},expression:"messageSearch.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.$t('message.content')}},[_c('el-input',{attrs:{"placeholder":_vm.$t('form.placeholder', { msg: _vm.$t('message.content') }),"clearable":""},model:{value:(_vm.messageSearch.content),callback:function ($$v) {_vm.$set(_vm.messageSearch, "content", $$v)},expression:"messageSearch.content"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"news","label":_vm.$t('content.news')}},[_c('el-switch',{model:{value:(_vm.messageSearch.news),callback:function ($$v) {_vm.$set(_vm.messageSearch, "news", $$v)},expression:"messageSearch.news"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":function($event){return _vm.onMessageSearch(1)}}},[_vm._v(_vm._s(_vm.$t('content.search')))])],1)],1),_vm._ssrNode(" "),_c('el-table',{attrs:{"data":_vm.message,"border":""}},[_c('el-table-column',{attrs:{"prop":"title","label":_vm.$t('message.email')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"content","label":_vm.$t('message.content')}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"href","label":_vm.$t('message.href')},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-link',{on:{"click":function($event){return _vm.openHref(scope.row.href)}}},[_vm._v(_vm._s(scope.row.href))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"createdDate","label":_vm.$t('message.createdDate'),"formatter":_vm.formatterDate}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":_vm.$t('content.operation'),"width":"172"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"mini","icon":"el-icon-reply"},on:{"click":function($event){return _vm.replyMessage(scope.$index, scope.row)}}},[_vm._v("\n            "+_vm._s(_vm.$t('message.reply'))+"\n            ")]),_vm._v(" "),_c('el-popover',{attrs:{"placement":"top"},model:{value:(scope.row.visible),callback:function ($$v) {_vm.$set(scope.row, "visible", $$v)},expression:"scope.row.visible"}},[_c('p',[_vm._v(_vm._s(_vm.$t('content.deleteText')))]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"right","margin":"0"}},[_c('el-button',{attrs:{"size":"mini","type":"text"},on:{"click":function($event){scope.row.visible = false}}},[_vm._v(_vm._s(_vm.$t('content.cancel')))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.deleteMessage(scope.$index, scope.row)}}},[_vm._v(_vm._s(_vm.$t('content.define')))])],1),_vm._v(" "),_c('el-button',{attrs:{"slot":"reference","size":"mini","type":"danger","icon":"el-icon-delete"},slot:"reference"},[_vm._v(_vm._s(_vm.$t('content.delete')))])],1)]}}])})],1),_vm._ssrNode(" "),_c('el-pagination',{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"background":"","layout":"prev, pager, next","page-size":_vm.pagination.pageSize,"current-page":_vm.pagination.currentPage,"total":_vm.pagination.total},on:{"current-change":_vm.changeCurrentPage}}),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"title":("" + (_vm.$t('message.reply')) + (_vm.$t('message.message'))),"visible":_vm.dialogMessageVisible,"width":"50%"},on:{"update:visible":function($event){_vm.dialogMessageVisible=$event}}},[_c('el-form',{attrs:{"model":_vm.dialogMessage,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":("" + (_vm.$t('message.reply')) + (_vm.$t('message.email')))}},[_c('el-input',{attrs:{"disabled":"","clearable":""},model:{value:(_vm.dialogMessage.title),callback:function ($$v) {_vm.$set(_vm.dialogMessage, "title", $$v)},expression:"dialogMessage.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":("" + (_vm.$t('message.reply')) + (_vm.$t('message.question')))}},[_c('el-input',{attrs:{"type":"textarea","disabled":"","clearable":""},model:{value:(_vm.dialogMessage.content),callback:function ($$v) {_vm.$set(_vm.dialogMessage, "content", $$v)},expression:"dialogMessage.content"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":("" + (_vm.$t('message.reply')) + (_vm.$t('message.content')))}},[_c('div',{directives:[{name:"quill",rawName:"v-quill:myQuillEditor",value:(_vm.editorOption),expression:"editorOption",arg:"myQuillEditor"}],staticClass:"quill-editor",attrs:{"content":_vm.dialogMessage.replyContent},on:{"change":function($event){return _vm.onEditorChange($event)}}})])],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogMessageVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","disabled":_vm.replyContent ? false: true,"loading":_vm.sendEmailLoading ? true:false},on:{"click":_vm.onSendEmail}},[_vm._v("发 送")])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/page/message.vue?vue&type=template&id=79008c2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/page/message.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var messagevue_type_script_lang_js_ = ({
  data() {
    return {
      messageSearch: {
        title: '',
        content: '',
        news: true
      },
      message: [],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      dialogMessageVisible: false,
      dialogMessage: {},
      editorOption: {
        placeholder: this.$t('form.placeholder', {
          msg: `${this.$t('message.reply')}${this.$t('message.content')}`
        }),
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block']]
        }
      },
      replyContent: false,
      sendEmailLoading: false
    };
  },

  async fetch() {
    let messageData = await this.$axios.$get('/api/admin/message', {
      params: {
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize
      }
    });

    if (messageData.success) {
      this.pagination.total = messageData.data.total;
      this.message = messageData.data.list;
    }
  },

  computed: {},
  methods: {
    async onMessageSearch(currentPage) {
      this.pagination.currentPage = currentPage;
      let messageSearchData = await this.$axios.$get('/api/admin/message/search', {
        params: { ...this.messageSearch,
          currentPage: currentPage,
          pageSize: this.pagination.pageSize
        }
      });

      if (messageSearchData.success) {
        this.pagination.total = messageSearchData.data.total;
        this.message = messageSearchData.data.list;
      }
    },

    async deleteMessage(index, row) {
      let messageDeleteData = await this.$axios.$post('/api/admin/message/delete', {
        messageId: row.messageId
      });

      if (messageDeleteData.success) {
        this.message.splice(index, 1);
      }
    },

    async onSendEmail() {
      if (!this.dialogMessage.replyContent) {
        return;
      }

      this.sendEmailLoading = true;
      let sendEmailData = await this.$axios.$post('/api/admin/email/send', {
        email: this.dialogMessage.title,
        msg: this.dialogMessage.replyContent
      });
      this.sendEmailLoading = false;

      if (sendEmailData.success) {
        this.dialogMessage = {};
        this.dialogMessageVisible = false;
      } else {
        this.$message({
          showClose: true,
          message: `${this.sendEmailData.message}${this.$t('content.fail')}`,
          type: 'error'
        });
      }
    },

    changeCurrentPage(currentPage) {
      this.onMessageSearch(currentPage);
    },

    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss');
    },

    replyMessage(index, row) {
      // this.$router.push(`/user/create?userId=${row.userId}`)
      console.log(index, row);
      this.dialogMessage = Object.assign({}, row);
      this.dialogMessageVisible = true;
    },

    onEditorChange({
      editor,
      html,
      text
    }) {
      console.log(editor, html, text);
      this.replyContent = html ? true : false;
      this.dialogMessage.replyContent = html;
    },

    openHref(href) {
      window.open(href, '_blank');
    }

  }
});
// CONCATENATED MODULE: ./pages/page/message.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_messagevue_type_script_lang_js_ = (messagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/page/message.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_messagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "79008c2c",
  "b4292e88"
  
)

/* harmony default export */ var message = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=message.js.map