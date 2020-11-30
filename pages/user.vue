<template>
  <el-container>
    <Aside />
    <Nuxt />
  </el-container>
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
