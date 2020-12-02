<template>
  <!-- unique-opened -->
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <template v-for="item in $store.state.menu[0].subMenu">
      <template v-if="item.subMenu && item.subMenu.length">
      <el-submenu :key="item.name" :index="item.path">
        <template slot="title">
        <i class="el-icon-menu"></i><span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item  v-for="subitem in item.subMenu" :index=subitem.path :key="subitem.name">
          <!-- {{subitem.path}} -->
          <i :class="subitem.icon"></i>{{subitem.name}}
        </el-menu-item>
      </el-submenu>
      </template>
      <el-menu-item v-else :key="item.name" :index=item.path>
          <i :class="item.icon"></i>{{item.name}}
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
export default {

  fetch(){
    // console.log("menu user", this.$store.state.userMenu)
    console.log("fetch",this.active)
  },
  methods: {
    change(){
      console.log("change route", this.$route.path)
      this.active = this.$route.path
    },
    handleSelect(key, keyPath) {
      console.log('handleSelect', key, keyPath)
    },
    handleOpen(key, keyPath) {
      console.log('handleOpen', key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log('handleClose', key, keyPath)
    },
  },
}
</script>
