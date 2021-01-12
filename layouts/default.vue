<template>
  <el-container class="layout-container">
    <el-header class="layout-header" >
      <Header />
    </el-header>
    <Nuxt />
    <el-footer class="layout-footer">
      <Footer />
    </el-footer>
  </el-container>
</template>
<script>
export default {

  async mounted() {
    let user = await this.$localForage.getItem('user')

    if(user){
    this.$store.commit('setUser', user)
    if(user.name == 'root') {
        // console.log(this.$store.getters.addRootMenu())
        // this.$store.commit("setUserMenu", this.$store.getters.addRootMenu())
        await this.$store.commit("setRoot", true)
        await this.$store.commit("setUserMenu", this.$store.state.defaultMenu)
      }else{
        // console.log(JSON.parse(user.menu))
        await this.$store.commit("setRoot", false)
        await this.$store.commit("setUserMenu", JSON.parse(user.menu))
      }
    }else{
      this.$router.push(this.localePath('/login'))
    }

  }

}
</script>
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
