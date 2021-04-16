<template>
  <el-container>
    <!-- <Aside v-if="$store.state.userMenu.length" :menu="$store.state.userMenu[1]" /> -->
    <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
      <Menu
        v-if="$store.state.userMenu.length"
        :menu="$store.state.userMenu[1]"
      />
    </el-aside>
    <el-main>
      <Nuxt />
    </el-main>
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
    // this.users = await this.$axios.$get('/api/admin/user')
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
