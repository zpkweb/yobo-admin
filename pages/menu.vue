<template>
<el-container>
    <!-- <Aside v-if="$store.state.userMenu.length" :menu="$store.state.userMenu[2]" /> -->

    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <Menu v-if="$store.state.userMenu.length" :menu="$store.state.userMenu[2]" />
    </el-aside>


    <el-main>
      <Nuxt />
    </el-main>
  </el-container>

</template>
<script>
export default {

}
</script>
<style scoped>

</style>
