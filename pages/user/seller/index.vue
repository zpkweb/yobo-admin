<template>
  <div>
    <el-form :inline="true" :model="userSearch" class="user-search">
      <el-form-item label="姓氏">
        <el-input
          v-model="userSearch.firstname"
          placeholder="请输入姓氏"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="名字">
        <el-input
          v-model="userSearch.lastname"
          placeholder="请输入名字"
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
      <!-- label 标签 -->
      <el-form-item label="标签">
        <el-input
          v-model="userSearch.label"
          placeholder="请输入标签"
          clearable
        ></el-input>
      </el-form-item>
      <!-- gender 性别 -->
      <el-form-item label="性别">
        <el-input
          v-model="userSearch.gender"
          placeholder="请输入性别"
          clearable
        ></el-input>
      </el-form-item>
      <!-- country 国家 -->
      <el-form-item label="国家">
        <el-input
          v-model="userSearch.country"
          placeholder="请输入国家"
          clearable
        ></el-input>
      </el-form-item>
      <!-- state 状态：0: 审核, 1: 通过, 2: 拒绝, 3: 禁用, 4: 注销 -->
      <el-form-item label="状态">
        <el-input
          v-model="userSearch.state"
          placeholder="请输入状态"
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


    <el-table :data="user" border >
    <el-table-column prop="firstname" label="姓氏" width="200">
    </el-table-column>
    <el-table-column prop="lastname" label="名字" width="200">
    </el-table-column>
    <el-table-column prop="user.email" label="邮箱" width="200">
    </el-table-column>
    <el-table-column prop="user.phone" label="手机" width="200">
    </el-table-column>

    <el-table-column prop="createdDate" label="创建日期" width="200">
    </el-table-column>
    <el-table-column prop="state" label="状态" width="200">
    </el-table-column>
    <el-table-column label="操作" width="150">
      <template slot-scope="scope">
        <el-button size="mini" @click="editUser(scope.$index, scope.row)"
          >编辑</el-button
        >

        <el-button
          size="mini"
          type="danger"
          @click="deleteUser(scope.$index, scope.row)"
          >删除</el-button
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
      user: [],
      userSearch: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        label: '',
        gender: '',
        country: '',
        state: ''
      }
    }
  },
  async fetch() {
    const userSearch = await this.$axios.$get('/api/admin/user/seller/search',{
        params: this.userSearch
      });
    this.user = userSearch.data;
  },
  methods: {
    // 查找用户
    async onSubmit() {
      const user = await this.$axios.$get('/api/admin/user/seller/search',{
        params: this.userSearch
      })
      this.user = user.data;
    },
    // 删除用户
    async removeUser(index, userId) {
      console.log("removeUser", userId)
      const user = await this.$axios.$post('/api/admin/user/remove', {
        userId
      })
      if(user.success){
        this.user.splice(index, 1);

        this.$message({
          showClose: true,
          message: `删除成功！`,
          type: 'success',
        })

      }else{
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

  },
}
</script>
<style scoped>
</style>
