<template>
  <el-container>
    <!-- <Aside v-if="$store.state.userMenu.length" :menu="$store.state.userMenu[0]" /> -->
    <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
      <Menu
        v-if="$store.state.userMenu.seller"
        :menu="$store.state.userMenu.seller"
      />
    </el-aside>
    <el-main>
      <Nuxt />
    </el-main>
  </el-container>
</template>
<script>
export default {
  fetch() {
    // console.log('user', this.$route.path)
  },
}
</script>


