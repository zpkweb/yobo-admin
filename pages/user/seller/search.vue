<template>
  <div>
    <el-form :inline="true" :model="sellerSearch" class="user-search">
      <el-form-item :label="$t('user.firstName')">
        <el-input
          v-model="sellerSearch.firstname"
          :placeholder="$t('form.placeholder', { msg: $t('user.firstName') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.lastName')">
        <el-input
          v-model="sellerSearch.lastname"
          :placeholder="$t('form.placeholder', { msg: $t('user.lastName') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.label')">
        <el-input
          v-model="sellerSearch.label"
          :placeholder="$t('form.placeholder', { msg: $t('user.label') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.gender')">
        <el-input
          v-model="sellerSearch.gender"
          :placeholder="$t('form.placeholder', { msg: $t('user.gender') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.country')">
        <el-input
          v-model="sellerSearch.country"
          :placeholder="$t('form.placeholder', { msg: $t('user.country') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.state')">
        <el-input
          v-model="sellerSearch.state"
          :placeholder="$t('form.placeholder', { msg: $t('user.state') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.seller.id')">
        <el-input
          v-model="sellerSearch.sellerId"
          :placeholder="$t('form.placeholder', { msg: $t('user.seller.id') })"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit(currentPage)" icon="el-icon-search">{{
          $t('content.search')
        }}</el-button>
      </el-form-item>
    </el-form>
    <el-table  :data="seller" border>
      <el-table-column prop="sellerId" :label="$t('user.seller.id')">
      </el-table-column>
      <el-table-column prop="user.avatar" :label="$t('user.avatar')">
        <template slot-scope="scope">
          <img :src="scope.row.user.avatar" class="image" width="100px" />
        </template>
      </el-table-column>
      <el-table-column prop="firstname" :label="$t('user.firstName')">
      </el-table-column>
      <el-table-column prop="lastname" :label="$t('user.lastName')">
      </el-table-column>
      <el-table-column prop="user.email" :label="$t('user.email')">
      </el-table-column>
      <el-table-column prop="user.phone" :label="$t('user.phone')">
      </el-table-column>

      <el-table-column
        :formatter="formatterDate"
        prop="user.createdDate"
        :label="$t('content.createdDate')"
      >
      </el-table-column>
      <el-table-column prop="state" :label="$t('user.state')">
      </el-table-column>
      <el-table-column :label="$t('content.operation')" width="172">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="editUser(scope.$index, scope.row)"
            icon="el-icon-edit"
            >{{ $t('content.edit') }}</el-button
          >
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
                @click="deleteSeller(scope.$index, scope.row)"
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
      :page-size="pageSize"
      :current-page="currentPage"
      :total="total"
      @current-change="changeCurrentPage"
      style="margin-top: 20px; text-align: center"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seller: [],
      sellerSearch: {
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
      pageSize: 10,
      total: 0,
    }
  },
  async fetch() {
    let searchData = await this.$axios.$get('/api/admin/user/seller/search', {
      params: {
        ...this.sellerSearch,
        currentPage: this.currentPage,
        pageSize: this.pageSize,
      },
    })
    console.log("searchData", searchData)
    let sellerData = []
    searchData.data.list.forEach((item) => {
      item.visible = false
      if (!item.user) {
        item.user = {
          avatar: '',
          createdDate: '',
          name: '',
          email: '',
          phone: '',
          userId: '',
        }
      }
      sellerData.push(item)
    })
    console.log("searchData", sellerData)
    this.total = searchData.data.total
    this.seller = sellerData
  },
  methods: {
    // 查找用户
    async onSubmit(currentPage) {
      const searchData = await this.$axios.$get(
        '/api/admin/user/seller/search',
        {
          params: {
            ...this.sellerSearch,
            currentPage: currentPage,
            pageSize: this.pageSize,
          },
        }
      )

      let sellerDataFormat = []
      searchData.data.list.forEach((item) => {
        item.visible = false
        if (!item.user) {
          item.user = {
            avatar: '',
            createdDate: '',
            name: '',
            email: '',
            phone: '',
            userId: '',
          }
        }
        sellerDataFormat.push(item)
      })

      this.total = searchData.data.total
      this.seller = sellerDataFormat
    },
    // 删除用户
    async deleteSeller(index, row) {
      console.log('deleteSeller', row)
      const user = await this.$axios.$get('/api/admin/user/seller/delete', {
        params: {
          sellerId: row.sellerId,
        },
      })
      if (user.success) {
        this.seller.splice(index, 1)

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
      this.$router.push(
        this.localePath(`/user/seller/create?sellerId=${row.sellerId}`)
      )
    },
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
    changeCurrentPage(currentPage) {
      this.onSubmit(currentPage)
    },
  },
}
</script>
<style scoped>
</style>
