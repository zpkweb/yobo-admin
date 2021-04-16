<template>
  <div>
    <el-form
      :key="$route.path"
      :inline="true"
      :model="userSearch"
      class="user-search"
    >
      <el-form-item :label="$t('user.name')">
        <el-input
          v-model="userSearch.name"
          :placeholder="$t('form.placeholder', { msg: $t('user.name') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.email')">
        <el-input
          v-model="userSearch.email"
          :placeholder="$t('form.placeholder', { msg: $t('user.email') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.phone')">
        <el-input
          v-model="userSearch.phone"
          :placeholder="$t('form.placeholder', { msg: $t('user.phone') })"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="onSubmit">{{
          $t('content.search')
        }}</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="user" border>
      <el-table-column prop="name" :label="$t('user.name')"> </el-table-column>
      <el-table-column prop="email" :label="$t('user.email')">
      </el-table-column>
      <el-table-column prop="phone" :label="$t('user.phone')">
      </el-table-column>

      <el-table-column
        :formatter="formatterDate"
        prop="createdDate"
        :label="$t('content.createdDate')"
      >
      </el-table-column>

      <el-table-column :label="$t('content.operation')" width="172">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-edit"
            @click="editUser(scope.$index, scope.row)"
            >{{ $t('content.edit') }}</el-button
          >

          <el-popover v-model="scope.row.visible" placement="top">
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
                @click="removeUser(scope.$index, scope.row)"
                >{{ $t('content.define') }}</el-button
              >
            </div>
            <el-button
              slot="reference"
              size="mini"
              type="danger"
              icon="el-icon-delete"
              >{{ $t('content.delete') }}</el-button
            >
          </el-popover>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :current-page="currentPage"
      :total="total"
      style="margin-top: 20px; text-align: center"
      @current-change="changeCurrentPage"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  async fetch() {
    const userSearch = await this.$axios.$get('/api/admin/user/search', {
      params: {
        identity: this.$route.params.identity,
        name: this.userSearch.name,
        email: this.userSearch.email,
        phone: this.userSearch.phone,
      },
    })
    this.total = userSearch.data.total
    const userData = userSearch.data.list.map((item) => {
      item.visible = false
      // item.isEdit = false
      // item.identitys = item.identitys.map((item) => {
      //   item.identityVisible = false
      //   return item
      // })
      return item
    })
    this.user = userData

    // this.user = userSearch.data
  },
  data() {
    return {
      user: [],
      userSearch: {
        name: '',
        email: '',
        phone: '',
      },
      currentPage: 1,
      pageSize: 8,
      total: 0,
    }
  },
  watch: {
    '$route.query': '$fetch',
  },
  methods: {
    // 查找用户
    async onSubmit() {
      const userSearch = await this.$axios.$get('/api/admin/user/search', {
        params: {
          identity: this.$route.params.identity,
          name: this.userSearch.name,
          email: this.userSearch.email,
          phone: this.userSearch.phone,
          currentPage: this.currentPage,
          pageSize: this.pageSize,
        },
      })
      this.total = userSearch.data.total
      this.user = userSearch.data.list
    },
    // 删除用户
    async removeUser(index, row) {
      const user = await this.$axios.$get('/api/admin/user/remove', {
        params: {
          userId: row.userId,
        },
      })
      if (user.success) {
        this.user.splice(index, 1)

        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t(
            'content.success'
          )}！`,
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t('content.fail')}!`,
          type: 'error',
        })
      }
    },
    editUser(index, row) {
      // eslint-disable-next-line no-console
      console.log(index, row)
      this.$router.push(
        this.localePath(`${this.$route.path}/create?userId=${row.userId}`)
      )
    },
    handleDelete(index, row) {
      // eslint-disable-next-line no-console
      console.log(index, row)
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
    changeCurrentPage(val) {
      this.currentPage = val
      this.onSubmit()
    },
  },
}
</script>
<style scoped></style>
