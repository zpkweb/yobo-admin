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
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="user" border>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="phone" label="手机"> </el-table-column>

      <el-table-column :formatter="formatterDate" prop="createdDate" label="创建日期"> </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="editUser(scope.$index, scope.row)" icon="el-icon-edit"
            >编辑</el-button
          >

          <el-popover placement="top" v-model="scope.row.visible">
            <p>您确定要删除当前用户的数据吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button
                size="mini"
                type="text"
                @click="scope.row.visible = false"
                >取消</el-button
              >
              <el-button
                type="primary"
                size="mini"
                @click="removeUser(scope.$index, scope.row)"
                >确定</el-button
              >
            </div>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              slot="reference"
              >删除</el-button
            >
          </el-popover>

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
    let userData = userSearch.data.map((item) => {
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
      const user = await this.$axios.$get('/api/admin/user/remove', {
        params: {
          userId: row.userId,
        }
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
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
  },
}
</script>
<style scoped>
</style>
