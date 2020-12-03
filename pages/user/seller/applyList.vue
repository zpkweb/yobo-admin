<template>
  <div>
    <el-form :inline="true" :model="search" class="user-search">
      <el-form-item label="姓氏">
        <el-input
          v-model="search.firstname"
          placeholder="请输入姓氏"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="名字">
        <el-input
          v-model="search.lastname"
          placeholder="请输入名字"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
          v-model="search.email"
          placeholder="请输入邮箱"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input
          v-model="search.phone"
          placeholder="请输入手机"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="标签">
        <el-input
          v-model="search.label"
          placeholder="请输入标签"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input
          v-model="search.gender"
          placeholder="请输入性别"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="国家">
        <el-input
          v-model="search.country"
          placeholder="请输入国家"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="seller" border>
      <el-table-column prop="firstname" label="姓氏" width="200">
      </el-table-column>
      <el-table-column prop="lastname" label="名字" width="200">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"> </el-table-column>
      <el-table-column prop="phone" label="手机" width="200"> </el-table-column>

      <el-table-column prop="createdDate" label="创建日期" width="200">
      </el-table-column>

      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="success"
            @click="agree(scope.$index, scope.row)"
            >同意</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="refuse(scope.$index, scope.row)"
            >拒绝</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seller: [],
      search: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        label: '',
        gender: '',
        country: '',
        state: '0',
      },
    }
  },
  async fetch() {
    const searchData = await this.$axios.$get('/api/admin/user/seller/search', {
      params: this.search,
    })
    this.seller = searchData.data
  },
  methods: {
    async onSubmit() {
      const searchData = await this.$axios.$get(
        '/api/admin/user/seller/search',
        {
          params: this.search,
        }
      )
      this.seller = searchData.data
    },
    edit(index, row) {
      console.log(index, row)
      this.$router.push(`/user/seller/create?userId=${row.user.userId}`)
    },
    async agree(index, row) {
      console.log(index, row)
      // setState
      const seller = await this.$axios.$post(
        '/api/admin/user/seller/setState',
        {
          sellerId: row.sellerId,
          state: 1,
        }
      )
      console.log('seller', seller)
      this.seller.splice(index, 1)
    },
    async refuse(index, row) {
      console.log(index, row)
      // setState
      const seller = await this.$axios.$post(
        '/api/admin/user/seller/setState',
        {
          sellerId: row.sellerId,
          state: 2,
        }
      )
      console.log('seller', seller)
      this.seller.splice(index, 1)
    },
  },
}
</script>
<style scoped>
</style>
