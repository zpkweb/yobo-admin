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
      <el-submenu v-for="item in $store.state.menu" :key="item.name" :index="item.path">
        <template slot="title">
            <i class="item.icon"></i>{{item.name}}
        </template>
        <el-menu-item v-for="asideitem in item.subMenu" :index="asideitem.path" :key="asideitem.name">
            {{asideitem.name}}
        </el-menu-item>
      </el-submenu>


      <!-- <el-submenu index="1">

        <template slot="title">
            <i class="el-icon-menu"></i>用户管理
        </template>

        <el-menu-item index="/user">
            搜索用户
        </el-menu-item>

        <el-menu-item index="/user/ordinary">
            普通用户管理
        </el-menu-item>
        <el-menu-item index="/user/seller">
            艺术家管理
        </el-menu-item>
        <el-menu-item index="/user/customerService">
            客服管理
        </el-menu-item>
        <el-menu-item index="/user/admin">
            管理员管理
        </el-menu-item>

      </el-submenu>


      <el-submenu index="2">
        <template slot="title">
          <NuxtLink to="/commodity">
            商品管理
          </NuxtLink>
        </template>
        <el-menu-item index="2-1">
          <NuxtLink to="/commodity">
            查找商品
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="2-2">
          <NuxtLink to="/commodity/create">
            添加商品
          </NuxtLink>
        </el-menu-item>

      </el-submenu> -->
      <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
      <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
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
        <!-- <el-dropdown-item disabled>双皮奶</el-dropdown-item> -->
        <el-dropdown-item divided>登出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        activeIndex: null
      };
    },
    fetch(){

      const routePath = this.$route.path;
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
      }
    }
  }
</script>

<style scoped>
.header{
  display: flex;
  height: 60px;
}
.header-logo{
  width: 200px;
  text-align: center;
}
.logo{
  display: inline-block;
  width: 100px;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
}
.logo-img{
  width: 100%;
  height: 100%;
}
.header-menu{
  flex: 1;
}

.el-dropdown-link {
  float: left;
    cursor: pointer;
    color: #409EFF;
    line-height: 60px;
  }
.el-avatar{
  float: left;
}
  .el-icon-arrow-down {
    font-size: 12px;
    /* vertical-align: -10px; */
  }

  .el-dropdown-menu__item{
    text-align: center;
  }
  .header-avatar{
    margin: 10px 20px 0 20px;
  }
</style>
