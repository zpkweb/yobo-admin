<template>
  <div id="header" class="header">
    <div class="header-logo">
      <NuxtLink class="logo" to="/">
        <img class="logo-img" src="~/assets/img/logo.png" />
      </NuxtLink>
    </div>

    <el-menu
      :default-active="activeIndex"
      class="header-menu"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-submenu
        v-for="item in $store.state.menu"
        :key="item.name"
        :index="item.path"
      >
        <template slot="title">
          <!-- <NuxtLink class="logo" :to="item.path"> -->
            <i class="item.icon"></i>{{ item.name }}
          <!-- </NuxtLink> -->
        </template>
        <el-menu-item
          v-for="asideitem in item.subMenu"
          :index="asideitem.path"
          :key="asideitem.name"
        >
          {{ asideitem.name }}
        </el-menu-item>
      </el-submenu>

    </el-menu>

    <el-dropdown>
      <span class="el-dropdown-link">
        语言
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>汉语</el-dropdown-item>
        <el-dropdown-item>英语</el-dropdown-item>
        <el-dropdown-item>日语</el-dropdown-item>
        <el-dropdown-item>法语</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown>
      <span class="el-dropdown-link header-avatar">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided>
          <NuxtLink class="logo" to="/login">
            登出
          </NuxtLink>
          </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  watch: {
    '$route.query': '$fetch',
  },
  data() {
    return {
      activeIndex: null,
    }
  },
  fetch() {
    const routePath = this.$route.path
    console.log(routePath)
    // if(routePath.includes('user')){
    //   console.log("route user")
    //   this.activeIndex = '1-1';
    // }else if(routePath.includes('commodity')){
    //   console.log("route commodity")
    //   this.activeIndex = '2-1';
    // }else{
    //   console.log("route /")
    //   this.activeIndex = null;
    // }
  },
  methods: {
    handleSelect(key, keyPath) {
      // this.$store.commit('userMenuActive', key)
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  height: 60px;
}
.header-logo {
  width: 200px;
  text-align: center;
}
.logo {
  display: inline-block;
  width: 100px;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
}
.logo-img {
  width: 100%;
  height: 100%;
}
.header-menu {
  flex: 1;
}

.el-dropdown-link {
  float: left;
  cursor: pointer;
  color: #409eff;
  line-height: 60px;
}
.el-avatar {
  float: left;
}
.el-icon-arrow-down {
  font-size: 12px;
  /* vertical-align: -10px; */
}

.el-dropdown-menu__item {
  text-align: center;
}
.header-avatar {
  margin: 10px 20px 0 20px;
}
</style>
