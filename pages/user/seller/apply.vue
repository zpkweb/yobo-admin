<template>
  <div>
    <h3>艺术家申请</h3>
    <el-form :inline="true" :model="userSearch" class="user-search">
      <el-form-item label="姓名">
        <el-input
          v-model="userSearch.user"
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

    <TableSeller :data="user.data" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: [],
      userSearch: {
        user: '',
        email: '',
        phone: '',
      }
    }
  },
  async fetch() {
    const routePath = this.$route.path;
      console.log("user _indentity idnex", routePath)
    this.user = await this.$axios.$get('/api/admin/user')
  },
  methods: {
    async onSubmit() {
      this.user = await this.$axios.$get('/api/admin/user')
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
