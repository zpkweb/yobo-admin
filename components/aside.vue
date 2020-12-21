<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <Menu :menu="menu" />
  </el-aside>
</template>
<script>
export default {
  props: ["menu"],
  fetch() {
  }
}
</script>
