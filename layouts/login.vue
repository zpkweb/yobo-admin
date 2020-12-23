<template>
  <!-- <div class="container-login">
    <el-header class="layout-header" >
      <Header />
    </el-header>
    <nuxt />
  </div> -->
  <el-container class="layout-container">
    <el-header class="layout-header login-header" >
      <Header />
    </el-header>
    <div class="container-login">
      <Nuxt />
    </div>

    <!-- <el-footer class="layout-footer">
      <Footer />
    </el-footer> -->
  </el-container>
</template>

<style>
.login-header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
}
.container-login {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: url('~assets/img/login-bg.jpeg') no-repeat center 0px;
  background-size: cover;

  background-position: center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
