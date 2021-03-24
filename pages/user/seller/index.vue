<template>
  <div>
    <el-form :inline="true" :model="userSearch" class="user-search">
      <el-form-item :label="$t('user.firstName')">
        <el-input
          v-model="userSearch.firstname"
          :placeholder="$t('form.placeholder', { msg: $t('user.firstName') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.lastName')">
        <el-input
          v-model="userSearch.lastname"
          :placeholder="$t('form.placeholder', { msg: $t('user.lastName') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.label')">
        <el-input
          v-model="userSearch.label"
          :placeholder="$t('form.placeholder', { msg: $t('user.label') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.gender')">
        <el-input
          v-model="userSearch.gender"
          :placeholder="$t('form.placeholder', { msg: $t('user.gender') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.country')">
        <el-input
          v-model="userSearch.country"
          :placeholder="$t('form.placeholder', { msg: $t('user.country') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.state')">
        <el-input
          v-model="userSearch.state"
          :placeholder="$t('form.placeholder', { msg: $t('user.state') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.seller.id')">
        <el-input
          v-model="userSearch.sellerId"
          :placeholder="$t('form.placeholder', { msg: $t('user.seller.id') })"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">{{$t('content.search')}}</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="user" border>
      <el-table-column prop="sellerId" :label="$t('user.seller.id')" width="200">
      </el-table-column>
      <el-table-column prop="user.avatar" :label="$t('user.avatar') " width="200">
        <template slot-scope="scope">
            <img :src="scope.row.user.avatar" class="image" />
        </template>
      </el-table-column>
      <el-table-column prop="firstname" :label="$t('user.firstName')" width="200">
      </el-table-column>
      <el-table-column prop="lastname" :label="$t('user.lastName')" width="200">
      </el-table-column>
      <el-table-column prop="user.email" :label="$t('user.email')" width="200">
      </el-table-column>
      <el-table-column prop="user.phone" :label="$t('user.phone')" width="200">
      </el-table-column>

      <el-table-column :formatter="formatterDate" prop="createdDate" :label="$t('content.createdDate')" width="200">
      </el-table-column>
      <el-table-column prop="state" :label="$t('user.state')" width="200"> </el-table-column>
      <el-table-column :label="$t('content.operation')">
        <template slot-scope="scope">
          <el-button size="mini" @click="editUser(scope.$index, scope.row)" icon="el-icon-edit"
            >{{$t('content.edit')}}</el-button
          >
          <el-popover placement="top" v-model="scope.row.visible">
            <p>{{$t('content.deleteText')}}</p>
            <div style="text-align: right; margin: 0">
              <el-button
                size="mini"
                type="text"
                @click="scope.row.visible = false"
                >{{$t('content.cancel')}}</el-button
              >
              <el-button
                type="primary"
                size="mini"
                @click="deleteSeller(scope.$index, scope.row)"
                >{{$t('content.define')}}</el-button
              >
            </div>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              slot="reference"
              >{{$t('content.delete')}}</el-button
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
      @current-change="changeCurrentPage"
      style="margin-top:20px;text-align: center;"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: [],
      userSearch: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        label: '',
        gender: '',
        country: '',
        state: '',
      },
      currentPage: 1,
      pageSize: 8,
      total: 0,
    }
  },
  async fetch() {
    const searchData = await this.$axios.$get('/api/admin/user/seller/search', {
      params: {
        ...this.userSearch,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
    })

    // this.user = userSearch.data
    let userData = searchData.data.list.map((item) => {
      item.visible = false
      // item.isEdit = false
      // item.identitys = item.identitys.map((item) => {
      //   item.identityVisible = false
      //   return item
      // })
      return item
    })
    console.log("searchData", searchData)
    this.total = searchData.data.total
    this.user = searchData.data.list
  },
  methods: {
    // 查找用户
    async onSubmit() {
      const searchData = await this.$axios.$get('/api/admin/user/seller/search', {
        params: {
          ...this.userSearch,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }
      })
      this.total = searchData.data.total
      this.user = searchData.data.list
    },
    // 删除用户
    async deleteSeller(index, row) {
      console.log('deleteSeller', row)
      const user = await this.$axios.$get('/api/admin/user/seller/delete', {
        params: {
          sellerId: row.sellerId,
        }
      })
      if (user.success) {
        this.user.splice(index, 1)

        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t('content.success')}`,
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
      console.log(index, row)
      this.$router.push(this.localePath(`${this.$route.path}/create?sellerId=${row.sellerId}`))
    },
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
<style scoped>
</style>
