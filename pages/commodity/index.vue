<template>
  <div>
    <el-form
      :inline="true"
      :model="commoditySearch"
      ref="commoditySearch"
      class="commodity-search"
      label-width="80px"
    >
      <el-form-item label="名称" prop="name">
        <el-input
          v-model="commoditySearch.name"
          placeholder="请输入名称"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input
          v-model="commoditySearch.desc"
          placeholder="请输入描述"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input
          v-model="commoditySearch.price"
          placeholder="请输入价格"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="艺术家" prop="seller">
        <el-input
          v-model="commoditySearch.seller"
          placeholder="请输入艺术家"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item label="形状" prop="shapeId">
        <el-select
          v-model="commoditySearch.shapeId"
          placeholder="请选择形状"
          clearable
        >
          <el-option
            v-for="item in options.shapes"
            :key="item.id"
            :label="item['zh-cn']"
            :value="item.id"
          >
            <span>{{ item['zh-cn'] }}</span>
            <span>{{ item['en-us'] }}</span>
            <span>{{ item['ja-jp'] }}</span>
            <span>{{ item['fr-fr'] }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="主题" prop="themeId">
        <el-select
          v-model="commoditySearch.themeId"
          placeholder="请选择主题"
          clearable
        >
          <el-option
            v-for="item in options.themes"
            :key="item.id"
            :label="item['zh-cn']"
            :value="item.id"
          >
            <span>{{ item['zh-cn'] }}</span>
            <span>{{ item['en-us'] }}</span>
            <span>{{ item['ja-jp'] }}</span>
            <span>{{ item['fr-fr'] }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="类别" prop="categoryId">
        <el-select
          v-model="commoditySearch.categoryId"
          placeholder="请选择类别"
          clearable
        >
          <el-option
            v-for="item in options.categorys"
            :key="item.id"
            :label="item['zh-cn']"
            :value="item.id"
          >
            <span>{{ item['zh-cn'] }}</span>
            <span>{{ item['en-us'] }}</span>
            <span>{{ item['ja-jp'] }}</span>
            <span>{{ item['fr-fr'] }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="手法" prop="techniqueId">
        <el-select
          v-model="commoditySearch.techniqueId"
          placeholder="请选择手法"
          clearable
        >
          <el-option
            v-for="item in options.techniques"
            :key="item.id"
            :label="item['zh-cn']"
            :value="item.id"
          >
            <span>{{ item['zh-cn'] }}</span>
            <span>{{ item['en-us'] }}</span>
            <span>{{ item['ja-jp'] }}</span>
            <span>{{ item['fr-fr'] }}</span>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="状态" prop="state">
        <el-select
          v-model="commoditySearch.state"
          placeholder="请选择状态"
          clearable
        >
          <el-option
            v-for="item in options.state"
            :key="item.index"
            :label="item.name"
            :value="item.index"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="最热" prop="hots">
        <el-switch v-model="commoditySearch.hots"> </el-switch>
      </el-form-item>

      <el-form-item label="最新" prop="news">
        <el-switch v-model="commoditySearch.news"> </el-switch>
      </el-form-item>
      <el-row :gutter="20" type="flex" justify="center">
        <el-col :span="4">
          <el-form-item>
            <el-button
              type="primary"
              @click="onCommoditySearch"
              icon="el-icon-search"
              >查询</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button @click="onCommoditySearchReset" icon="el-icon-close"
              >清空</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-table :data="commodity" border>
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="desc" label="描述" width="280"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="shapes[0].name" label="形状"> </el-table-column>
      <el-table-column prop="themes[0].name" label="主题"> </el-table-column>
      <el-table-column prop="categorys[0].name" label="类别"> </el-table-column>
      <el-table-column prop="techniques[0].name" label="手法">
      </el-table-column>
      <el-table-column prop="photo" label="图片"> </el-table-column>
      <el-table-column prop="size" label="尺寸" width="120">
        <template slot-scope="scope">
          {{ scope.row.size[0] }} X {{ scope.row.size[1] }}
        </template>
      </el-table-column>
      <el-table-column prop="colors" label="颜色" width="100">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>颜色从: {{ scope.row.colors[0] }}</p>
            <p>到颜色: {{ scope.row.colors[1] }}</p>
            <div
              slot="reference"
              :style="`width:80px;height:100px;background: -webkit-linear-gradient(${scope.row.colors[0]},${scope.row.colors[1]});`"
            ></div>
          </el-popover>
          <!-- <el-tag
              type="primary"
              v-for="item in scope.row.colors"
              :key="item"
              disable-transitions
              style="margin-left: 10px"
              :color="item"
              :background: linear-gradient(right,red,blue);
            >
              {{ item }}
            </el-tag> -->
        </template>
      </el-table-column>
      <el-table-column prop="state" label="状态"> </el-table-column>
      <el-table-column prop="seller" label="艺术家"> </el-table-column>
      <el-table-column
        prop="createdDate"
        :formatter="formatterDate"
        label="创建日期"
        width="160"
      >
      </el-table-column>

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
      commoditySearch: {
        name: '',
        desc: '水',
        price: '',
        seller: '',
        shapeId: '',
        themeId: '',
        categoryId: '',
        techniqueId: '',
        state: '',
        hots: false,
        news: false,
      },
      options: {
        shapes: [],
        themes: [],
        categorys: [],
        techniques: [],
        // 0:已添加，1:售卖中，2:已售卖，3:已下架
        state: [
          {
            index: 0,
            name: '已添加',
          },
          {
            index: 1,
            name: '售卖中',
          },
          {
            index: 2,
            name: '已售卖',
          },
          {
            index: 3,
            name: '已下架',
          },
        ],
      },
    }
  },
  async fetch() {
    // 形状
    const optionsShape = await this.$axios.$get(`/api/commodity/options/shape`)
    if (optionsShape.data && optionsShape.data.length) {
      this.options.shapes = optionsShape.data
    }
    // 主题
    const optionsTheme = await this.$axios.$get(`/api/commodity/options/theme`)
    if (optionsTheme.data && optionsTheme.data.length) {
      this.options.themes = optionsTheme.data
    }
    // 类别
    const optionsCategory = await this.$axios.$get(
      `/api/commodity/options/category`
    )
    if (optionsCategory.data && optionsCategory.data.length) {
      this.options.categorys = optionsCategory.data
    }
    // 手法
    const optionsTechnique = await this.$axios.$get(
      `/api/commodity/options/technique`
    )
    if (optionsTechnique.data && optionsTechnique.data.length) {
      this.options.techniques = optionsTechnique.data
    }

    const data = await this.$axios.$get('/api/admin/commodity/all')
    let commodityData = data.data.map((item) => {
      item.visible = false
      return item
    })
    this.commodity = commodityData
  },
  methods: {
    // 搜索
    async onCommoditySearch() {
      console.log(JSON.stringify(this.commoditySearch))
      let isSearch = false
      for (let [key, value] of Object.entries(this.commoditySearch)) {
        if (value) {
          isSearch = true
          break;
        }
      }
      let commodityData;
      if (isSearch) {
        const searchData = await this.$axios.$get('/api/admin/commodity/search', {
          params: this.commoditySearch,
        })
        console.log("searchData", searchData)
        commodityData = searchData.data.map((item) => {
          item.visible = false
          return item
        })

      } else {
        const searchData = await this.$axios.$get('/api/admin/commodity/all')
        commodityData = searchData.data.map((item) => {
          item.visible = false
          return item
        })
      }
      console.log("commodityData", commodityData)
      this.commodity = commodityData;
    },
    onCommoditySearchReset() {
      this.$refs['commoditySearch'].resetFields()
    },
    // 删除
    async commodityDelete(index, row) {
      console.log('commodityDelete', index, row)
      const commodity = await this.$axios.$post('/api/admin/commodity/delete', {
        commodityId: row.commodityId,
      })
      console.log('commodity', commodity)
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
