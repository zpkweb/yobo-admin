<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu default-active="1"  active-text-color="#f00">

      <el-menu-item index="1"><i class="el-icon-menu"></i>搜索</el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>商品</template>
        <el-menu-item index="2-1">查找商品</el-menu-item>
        <el-menu-item index="2-2">添加商品</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>客服</template>
        <el-menu-item index="3-1">查找客服</el-menu-item>
        <el-menu-item index="3-2">添加客服</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-menu"></i>管理员</template>
        <el-menu-item index="4-1">查找管理员</el-menu-item>
        <el-menu-item index="4-2">添加管理员</el-menu-item>
      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
