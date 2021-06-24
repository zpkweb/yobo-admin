<template>
  <div class="message">
    <el-form :inline="true" :model="messageSearch" class="user-search">
      <el-form-item :label="$t('message.email')">
        <el-input
          v-model="messageSearch.title"
          :placeholder="$t('form.placeholder', { msg: $t('message.email') })"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item :label="$t('message.content')">
        <el-input
          v-model="messageSearch.content"
          :placeholder="$t('form.placeholder', { msg: $t('message.content') })"
          clearable
        ></el-input>
      </el-form-item>


      <el-form-item prop="news" :label="$t('commodity.news')">
        <el-switch v-model="messageSearch.news"> </el-switch>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onMessageSearch(1)" icon="el-icon-search">{{
          $t('content.search')
        }}</el-button>
      </el-form-item>
    </el-form>


    <el-table  :data="message" border>


      <el-table-column prop="title" :label="$t('message.email')">
      </el-table-column>
      <el-table-column prop="content" :label="$t('message.content')">
      </el-table-column>

      <el-table-column prop="href" :label="$t('message.href')">

          <template slot-scope="scope">
            <el-link :href="href" target="_blank">{{ scope.row.href }}</el-link>
          </template>

      </el-table-column>
      <el-table-column prop="createdDate" :label="$t('message.createdDate')" :formatter="formatterDate"></el-table-column>

      <el-table-column :label="$t('content.operation')" width="172">
        <template slot-scope="scope">
          <el-button
              size="mini"
              icon="el-icon-reply"
              @click="replyMessage(scope.$index, scope.row)"
              >
              {{ $t('message.reply') }}
              </el-button>


            <el-popover placement="top" v-model="scope.row.visible">
              <p>{{ $t('content.deleteText') }}</p>
              <div style="text-align: right; margin: 0">
                <el-button
                  size="mini"
                  type="text"
                  @click="scope.row.visible = false"
                  >{{ $t('content.cancel') }}</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  @click="deleteMessage(scope.$index, scope.row)"
                  >{{ $t('content.define') }}</el-button
                >
              </div>

              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                slot="reference"
                >{{ $t('content.delete') }}</el-button
              >
            </el-popover>

        </template>
      </el-table-column>

    </el-table>


    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pagination.pageSize"
      :current-page="pagination.currentPage"
      :total="pagination.total"
      @current-change="changeCurrentPage"
      style="margin-top: 20px; text-align: center"
    >
    </el-pagination>

    <el-dialog
      :title="`${$t('message.reply')}${$t('message.message')}`"
      :visible.sync="dialogMessageVisible"
      width="50%"
      >

    <el-form :model="dialogMessage" label-width="80px" >
      <el-form-item :label="`${$t('message.reply')}${$t('message.email')}`">
          <el-input
            v-model="dialogMessage.title"
            disabled
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item :label="`${$t('message.reply')}${$t('message.question')}`">
          <el-input
            v-model="dialogMessage.content"
            type="textarea"
            disabled
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item :label="`${$t('message.reply')}${$t('message.content')}`">
          <div class="quill-editor"
                  :content="dialogMessage.replyContent"
                  @change="onEditorChange($event)"
                  v-quill:myQuillEditor="editorOption">
                </div>
        </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogMessageVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSendEmail" :disabled="replyContent ? false: true" :loading="sendEmailLoading ? true:false">发 送</el-button>
      </span>


    </el-dialog>

  </div>
</template>
<script>
export default {
  data() {
    return {
      messageSearch: {
        title: '',
        content: '',
        news: false
      },
      message: [],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
      },
      dialogMessageVisible: false,
      dialogMessage: {},
      editorOption: {
          placeholder: this.$t('form.placeholder', {
                  msg: `${this.$t('message.reply')}${this.$t('message.content')}`,
                }),
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block']
            ]
          },
        },
      replyContent: false,
      sendEmailLoading: false




    }
  },
  async fetch() {
    let messageData = await this.$axios.$get('/api/admin/message', {
      params: {
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize,
      }
    })

    if(messageData.success) {
      this.pagination.total = messageData.data.total
      this.message = messageData.data.list;
    }
  },
  computed: {

  },
  methods: {
    async onMessageSearch(currentPage) {
      this.pagination.currentPage = currentPage;
      let messageSearchData = await this.$axios.$get('/api/admin/message/search', {
        params: {
          ...this.messageSearch,
          currentPage: currentPage,
          pageSize: this.pagination.pageSize,
        }
      })
      if(messageSearchData.success) {
        this.pagination.total = messageSearchData.data.total
        this.message = messageSearchData.data.list;
      }
    },
    async deleteMessage(index, row) {
      let messageDeleteData = await this.$axios.$post('/api/admin/message/delete', {
        messageId: row.messageId,
      })
      if(messageDeleteData.success) {
        this.message.splice(index, 1)
      }
    },
    async onSendEmail() {
      if(!this.dialogMessage.replyContent) {
        return;
      }
      this.sendEmailLoading = true;
      let sendEmailData = await this.$axios.$post('/api/admin/email/send', {
        email: this.dialogMessage.title,
        msg: this.dialogMessage.replyContent
      })
      this.sendEmailLoading = false;
      if(sendEmailData.success) {
        this.dialogMessage = {};
        this.dialogMessageVisible = false;
      }else{
        this.$message({
          showClose: true,
          message: `${this.sendEmailData.message}${this.$t('content.fail')}`,
          type: 'error',
        })
      }
    },
    changeCurrentPage(currentPage) {
      this.onMessageSearch(currentPage)
    },
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
    replyMessage(index, row) {
      // this.$router.push(`/user/create?userId=${row.userId}`)
      console.log(index, row)
      this.dialogMessage = Object.assign({}, row);
      this.dialogMessageVisible = true;
    },


    onEditorChange({ editor, html, text }) {
      console.log(editor, html, text)
        this.replyContent = html ? true : false;
        this.dialogMessage.replyContent = html;
      },
  },
}
</script>
<style scoped>

</style>
