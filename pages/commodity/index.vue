<template>
  <div>

      <el-table :data="commodity" style="width: 100%"
    >
        <el-table-column prop="name" label="名称">
        </el-table-column>
        <el-table-column prop="desc" label="描述">
        </el-table-column>
        <el-table-column prop="price" label="价格">
        </el-table-column>
        <el-table-column prop="shape[0].name" label="形状"> </el-table-column>
        <el-table-column prop="theme[0].name" label="主题"> </el-table-column>
        <el-table-column prop="category[0].name" label="类别"> </el-table-column>
        <el-table-column prop="technique[0].name" label="手法"> </el-table-column>
        <el-table-column prop="photo" label="图片"> </el-table-column>
        <el-table-column prop="size" label="尺寸"> </el-table-column>
        <el-table-column prop="colors" label="颜色"> </el-table-column>
        <el-table-column prop="state" label="状态"> </el-table-column>
        <el-table-column prop="seller" label="艺术家"> </el-table-column>
        <el-table-column prop="createdDate" :formatter="formatterDate" label="创建日期"> </el-table-column>

        <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
              size="mini"
              icon="el-icon-edit"
              @click="commodityEdit(scope.$index, scope.row)"
              >编辑</el-button
            >

            <el-popover placement="top" v-model="scope.row.visible">
              <p>您确定要删除当前商品吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button
                  size="mini"
                  type="text"
                  @click="scope.row.visible = false"
                  >取消</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  @click="commodityDelete(scope.$index, scope.row)"
                  >确定</el-button
                >
              </div>

              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                slot="reference"
                >删除</el-button
              >
            </el-popover>
        </template>
      </el-table-column>

      </el-table>
      <!-- <button @click="$fetch">Refresh</button> -->
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
    let commodityData = data.data.map((item) => {
      item.visible = false;
      return item
    })
    this.commodity = commodityData

  },
  methods: {
    // 删除
    async commodityDelete(index, row) {
      console.log("commodityDelete", index, row)
      const commodity = await this.$axios.$post('/api/admin/commodity/delete', {
        commodityId: row.commodityId,
      })
      console.log("commodity", commodity)
      if (commodity.success) {
        this.commodity.splice(index, 1)

        this.$message({
          showClose: true,
          message: `删除成功！`,
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: `删除失败!`,
          type: 'error',
        })
      }
    },
    commodityEdit(index, row) {
      console.log(index, row)
      this.$router.push(`/commodity/create?commodityId=${row.commodityId}`)
    },
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
  }
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
