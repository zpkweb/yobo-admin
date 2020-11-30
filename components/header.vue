<template>
  <div id="header" class="header">

    <NuxtLink class="logo" to="/">
      <img class="logo-img" src="~/assets/img/logo.png" />
    </NuxtLink>

    <el-menu
      :default-active=null
      class="menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-menu-item index="1">
        <NuxtLink to="/user">
          用户管理
        </NuxtLink>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <NuxtLink to="/commodity">
            商品管理
          </NuxtLink>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
      <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
    </el-menu>

    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
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
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.header{
  display: flex;
  height: 60px;
  background-color: #545c64;
  padding: 0 15px;
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
.menu{
  flex: 1;
  margin-left: 20px;
  border-right: 0;
  border-bottom: 0;
}

.el-dropdown-link {
  float: left;
    cursor: pointer;
    color: #409EFF;
    margin-top: 12px;
  }
.el-avatar{
  float: left;
}
  .el-icon-arrow-down {
    font-size: 12px;
    vertical-align: -10px;
  }

  .el-dropdown-menu__item{
    text-align: center;
  }
</style>
