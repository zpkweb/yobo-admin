<template>
  <div>
    <el-form
      :inline="true"
      :model="userSearch"
      class="user-search"
      :key="$route.path"
    >
      <el-form-item label="姓名">
        <el-input
          v-model="userSearch.name"
          placeholder="请输入姓名"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
          v-model="userSearch.email"
          placeholder="请输入邮箱"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input
          v-model="userSearch.phone"
          placeholder="请输入手机"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="user" border>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="phone" label="手机"> </el-table-column>

      <el-table-column prop="createdDate" label="创建日期"> </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="editUser(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="removeUser(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  watch: {
    '$route.query': '$fetch',
  },
  data() {
    return {
      user: [],
      userSearch: {
        name: '',
        email: '',
        phone: '',
      },
    }
  },
  async fetch() {
    const userSearch = await this.$axios.$get('/api/admin/user/search', {
      params: {
        identity: this.$route.params.identity,
        name: this.userSearch.name,
        email: this.userSearch.email,
        phone: this.userSearch.phone,
      },
    })
    this.user = userSearch.data
  },
  methods: {
    // 查找用户
    async onSubmit() {
      const user = await this.$axios.$get('/api/admin/user/search', {
        params: {
          identity: this.$route.params.identity,
          name: this.userSearch.name,
          email: this.userSearch.email,
          phone: this.userSearch.phone,
        },
      })
      this.user = user.data
    },
    // 删除用户
    async removeUser(index, row) {
      const user = await this.$axios.$post('/api/admin/user/remove', {
        userId: row.userId,
      })
      if (user.success) {
        this.user.splice(index, 1)

        this.$message({
          showClose: true,
          message: `删除成功！`,
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: `删除失败!`,
          type: 'error',
        })
      }
    },
    editUser(index, row) {
      console.log(index, row)
      this.$router.push(`${this.$route.path}/create?userId=${row.userId}`)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
  },
}
</script>
<style scoped>
</style>
