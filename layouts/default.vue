<template>
  <el-container class="layout-container">
    <el-header class="layout-header">
      <Header />
    </el-header>
    <Nuxt />
    <el-footer class="layout-footer">
      <Footer />
    </el-footer>
  </el-container>
</template>

<style>
.layout-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.layout-header {
  padding: 0;
  border-bottom: solid 1px #e6e6e6;
}
.layout-footer {
  line-height: 60px;
  border-top: solid 1px #e6e6e6;
}
</style>
