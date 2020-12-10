<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <el-table :data="commodity">
        <el-table-column prop="name" label="名称">
        </el-table-column>
        <el-table-column prop="desc" label="描述">
        </el-table-column>
        <el-table-column prop="price" label="价格">
        </el-table-column>
        <el-table-column prop="shape" label="形状"> </el-table-column>
        <el-table-column prop="theme" label="主题"> </el-table-column>
        <el-table-column prop="category" label="类别"> </el-table-column>
        <el-table-column prop="technique" label="手法"> </el-table-column>
        <el-table-column prop="photo" label="图片"> </el-table-column>
        <el-table-column prop="size" label="尺寸"> </el-table-column>
        <el-table-column prop="color" label="颜色"> </el-table-column>
        <el-table-column prop="state" label="状态"> </el-table-column>
        <el-table-column prop="seller" label="艺术家"> </el-table-column>
      </el-table>
      <button @click="$fetch">Refresh</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commodity: [],
    }
  },
  async fetch() {
    const data = await this.$axios.$get('/api/admin/commodity/all')
    if(data.success){
      this.commodity = data.data;
    }
  },
}
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
