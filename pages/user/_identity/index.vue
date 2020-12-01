<template>
  <div>
    <el-form :inline="true" :model="formSearch" class="form-search">
      <el-form-item label="姓名">
        <el-input
          v-model="formSearch.user"
          placeholder="请输入姓名"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
          v-model="formSearch.email"
          placeholder="请输入邮箱"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input
          v-model="formSearch.phone"
          placeholder="请输入手机"
          clearable
        ></el-input>
      </el-form-item>
      <!-- <el-form-item label="身份">
        <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择身份"
        >
          <el-option
            v-for="item in identity"
            :key="item.name"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <el-table :data="users.data" border height="250" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="100">
        </el-table-column>
        <el-table-column prop="phone" label="手机" width="100">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="100">
        </el-table-column>
        <el-table-column prop="address" label="国籍" width="100">
        </el-table-column>
        <el-table-column prop="address" label="简介" width="100">
        </el-table-column>

        <el-table-column prop="createdDate" label="创建日期" width="100">
        </el-table-column>
        <el-table-column prop="createdDate" label="工作室"> </el-table-column>
        <el-table-column prop="createdDate" label="履历"> </el-table-column>

        <el-table-column label="操作" fixed="right" width="220">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="success"
              @click="handleEdit(scope.$index, scope.row)"
              >同意</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >拒绝</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- <button @click="$fetch">Refresh</button> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      formSearch: {
        user: '',
        email: '',
        phone: '',
      }
    }
  },
  async fetch() {
    const routePath = this.$route.path;
      console.log("user _indentity idnex", routePath)
    this.users = await this.$axios.$get('/api/admin/user')
  },
  methods: {
    async onSubmit() {
      this.users = await this.$axios.$get('/api/admin/user')
    },
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
  },
}
</script>
<style scoped>
</style>
