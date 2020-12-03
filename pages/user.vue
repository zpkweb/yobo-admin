<template>
  <el-container>
    <AsideUser />
    <el-main>
      <Nuxt />
    </el-main>
  </el-container>
</template>
<script>
export default {
  fetch() {
    console.log('user', this.$route.path)
  },
}
</script>


