<template>
  <el-main>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <el-table :data="users.data">
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="140">
        </el-table-column>
        <el-table-column prop="phone" label="手机" width="140">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
      <button @click="$fetch">Refresh</button>
    </div>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    }
  },
  async fetch() {
    this.users = await this.$axios.$get('/api/admin/user')
  },
}
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
