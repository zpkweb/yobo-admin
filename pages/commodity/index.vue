<template>
  <div>
    <el-form
      :inline="true"
      :model="commoditySearch"
      ref="commoditySearch"
      class="commodity-search"
      label-width="80px"
    >
      <el-row :gutter="0">
        <el-col :span="6">
          <el-form-item label="名称" prop="name">
            <el-input
              v-model="commoditySearch.name"
              placeholder="请输入名称"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="描述" prop="desc">
            <el-input
              v-model="commoditySearch.desc"
              placeholder="请输入描述"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="艺术家" prop="sellerId">
            <el-input
              v-model="commoditySearch.sellerId"
              placeholder="请输入艺术家"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
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
        </el-col>
      </el-row>

      <el-row :gutter="0">
        <el-col :span="6">
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
        </el-col>
        <el-col :span="6">
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
        </el-col>
        <el-col :span="6">
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
        </el-col>
        <el-col :span="6">
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
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="8">
          <el-form-item label="价格" prop="price.min">
            <el-input
              v-model="commoditySearch.price.min"
              placeholder="请输入最低价格"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="price.max">
            <el-input
              v-model="commoditySearch.price.max"
              placeholder="请输入最高价格"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="宽度" prop="width.min">
            <el-input
              v-model="commoditySearch.width.min"
              placeholder="请输入最小宽度"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="width.max">
            <el-input
              v-model="commoditySearch.width.max"
              placeholder="请输入最大高度"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="高度" prop="height.min">
            <el-input
              v-model="commoditySearch.height.min"
              placeholder="请输入最小宽度"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="height.max">
            <el-input
              v-model="commoditySearch.height.max"
              placeholder="请输入最大高度"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="0">
        <el-col :span="3">
          <el-form-item label="最热" prop="hots">
            <el-switch v-model="commoditySearch.hots"> </el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="最新" prop="news">
            <el-switch v-model="commoditySearch.news"> </el-switch>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item label="开始颜色" prop="colors.start">
            <el-color-picker v-model="commoditySearch.colors.start"></el-color-picker>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="结束颜色" prop="colors.end">
            <el-color-picker v-model="commoditySearch.colors.end"></el-color-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :span="6">
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
      <el-table-column type="expand" label="展开">
        <template slot-scope="scope">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="中文名称">
              <span>{{ scope.row.name['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item label="英语名称">
              <span>{{ scope.row.name['en-us'] }}</span>
            </el-form-item>
            <el-form-item label="日语名称">
              <span>{{ scope.row.name['ja-jp'] }}</span>
            </el-form-item>
            <el-form-item label="法语名称">
              <span>{{ scope.row.name['fr-fr'] }}</span>
            </el-form-item>

            <el-form-item label="中文描述">
              <span>{{ scope.row.desc['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item label="英语描述">
              <span>{{ scope.row.desc['en-us'] }}</span>
            </el-form-item>
            <el-form-item label="日语描述">
              <span>{{ scope.row.desc['ja-jp'] }}</span>
            </el-form-item>
            <el-form-item label="法语描述">
              <span>{{ scope.row.desc['fr-fr'] }}</span>
            </el-form-item>

            <el-form-item label="中文价格">
              <span>{{ scope.row.price['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item label="英语价格">
              <span>{{ scope.row.price['en-us'] }}</span>
            </el-form-item>
            <el-form-item label="日语价格">
              <span>{{ scope.row.price['ja-jp'] }}</span>
            </el-form-item>
            <el-form-item label="法语价格">
              <span>{{ scope.row.price['fr-fr'] }}</span>
            </el-form-item>

            <el-form-item label="中文形状">
              <span>{{ scope.row.shapes[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item label="英语形状">
              <span>{{ scope.row.shapes[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item label="日语形状">
              <span>{{ scope.row.shapes[0]['ja-jp'] }}</span>
            </el-form-item>
            <el-form-item label="法语形状">
              <span>{{ scope.row.shapes[0]['fr-fr'] }}</span>
            </el-form-item>


            <el-form-item label="中文主题">
              <span>{{ scope.row.shapes[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item label="英语主题">
              <span>{{ scope.row.shapes[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item label="日语主题">
              <span>{{ scope.row.shapes[0]['ja-jp'] }}</span>
            </el-form-item>
            <el-form-item label="法语主题">
              <span>{{ scope.row.shapes[0]['fr-fr'] }}</span>
            </el-form-item>


            <el-form-item label="中文类别">
              <span>{{ scope.row.categorys[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item label="英语类别">
              <span>{{ scope.row.categorys[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item label="日语类别">
              <span>{{ scope.row.categorys[0]['ja-jp'] }}</span>
            </el-form-item>
            <el-form-item label="法语类别">
              <span>{{ scope.row.categorys[0]['fr-fr'] }}</span>
            </el-form-item>


            <el-form-item label="中文手法">
              <span>{{ scope.row.techniques[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item label="英语手法">
              <span>{{ scope.row.techniques[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item label="日语手法">
              <span>{{ scope.row.techniques[0]['ja-jp'] }}</span>
            </el-form-item>
            <el-form-item label="法语手法">
              <span>{{ scope.row.techniques[0]['fr-fr'] }}</span>
            </el-form-item>

          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="name['zh-cn']" label="名称" width="150">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>中文: {{ scope.row.name['zh-cn'] }}</p>
            <p>英文: {{ scope.row.name['en-us'] }}</p>
            <p>日文: {{ scope.row.name['ja-jp'] }}</p>
            <p>法文: {{ scope.row.name['fr-fr'] }}</p>
            <div slot="reference">
              <el-tag>{{ scope.row.name['zh-cn'] }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="desc['zh-cn']" label="描述" width="280">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>中文: {{ scope.row.desc['zh-cn'] }}</p>
            <p>英文: {{ scope.row.desc['en-us'] }}</p>
            <p>日文: {{ scope.row.desc['ja-jp'] }}</p>
            <p>法文: {{ scope.row.desc['fr-fr'] }}</p>
            <div slot="reference">
              <span>{{ scope.row.desc['zh-cn'] }}</span>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="price['zh-cn']" label="价格">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>中文: {{ scope.row.price['zh-cn'] }}</p>
            <p>英文: {{ scope.row.price['en-us'] }}</p>
            <p>日文: {{ scope.row.price['ja-jp'] }}</p>
            <p>法文: {{ scope.row.price['fr-fr'] }}</p>
            <div slot="reference">
              <el-tag>{{ scope.row.price['zh-cn'] }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="shapes[0]['zh-cn']" label="形状">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>中文: {{ scope.row.shapes[0]['zh-cn'] }}</p>
            <p>英文: {{ scope.row.shapes[0]['en-us'] }}</p>
            <p>日文: {{ scope.row.shapes[0]['ja-jp'] }}</p>
            <p>法文: {{ scope.row.shapes[0]['fr-fr'] }}</p>
            <div slot="reference">
              <el-tag>{{ scope.row.shapes[0]['zh-cn'] }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="themes[0]['zh-cn']" label="主题">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>中文: {{ scope.row.themes[0]['zh-cn'] }}</p>
            <p>英文: {{ scope.row.themes[0]['en-us'] }}</p>
            <p>日文: {{ scope.row.themes[0]['ja-jp'] }}</p>
            <p>法文: {{ scope.row.themes[0]['fr-fr'] }}</p>
            <div slot="reference">
              <el-tag>{{ scope.row.themes[0]['zh-cn'] }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="categorys[0]['zh-cn']" label="类别">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>中文: {{ scope.row.categorys[0]['zh-cn'] }}</p>
            <p>英文: {{ scope.row.categorys[0]['en-us'] }}</p>
            <p>日文: {{ scope.row.categorys[0]['ja-jp'] }}</p>
            <p>法文: {{ scope.row.categorys[0]['fr-fr'] }}</p>
            <div slot="reference">
              <el-tag>{{ scope.row.categorys[0]['zh-cn'] }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="techniques[0]['zh-cn']" label="手法">
        <template slot-scope="scope">
          <el-popover trigger="click" placement="top">
            <p>中文: {{ scope.row.techniques[0]['zh-cn'] }}</p>
            <p>英文: {{ scope.row.techniques[0]['en-us'] }}</p>
            <p>日文: {{ scope.row.techniques[0]['ja-jp'] }}</p>
            <p>法文: {{ scope.row.techniques[0]['fr-fr'] }}</p>
            <div slot="reference">
              <el-tag>{{ scope.row.techniques[0]['zh-cn'] }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="photo" label="图片" width="180">
        <template slot-scope="scope">
          <el-card :body-style="{ padding: '0px' }" v-for="(item, index) of scope.row.photos" :key="index" style="margin:10px;">
          <img :src="item.src" class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span>
            <!-- <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div> -->
          </div>
        </el-card>
        </template>
      </el-table-column>

      <el-table-column prop="width" label="宽度" >
        <template slot-scope="scope">
          {{ scope.row.width }}
        </template>
      </el-table-column>
      <el-table-column prop="width" label="高度">
        <template slot-scope="scope">
          {{ scope.row.height }}
        </template>
      </el-table-column>
      <el-table-column prop="colors" label="颜色" width="100">
        <template slot-scope="scope">
          <!-- <el-popover trigger="hover" placement="top">
            <p>颜色从: {{ scope.row.colors[0] }}</p>
            <p>到颜色: {{ scope.row.colors[1] }}</p>
            <div
              slot="reference"
              :style="`width:80px;height:100px;background: -webkit-linear-gradient(${scope.row.colors[0]},${scope.row.colors[1]});`"
            ></div>
          </el-popover> -->
          <el-tag
            v-for="(item,index) in scope.row.colors"
            :key="index"
            disable-transitions
            style="margin-left: 10px"
            :color="item.name"
            effect="dark"

          >
            {{ item.name }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="状态"> </el-table-column>
      <el-table-column prop="sellerId" label="艺术家"> </el-table-column>
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
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :current-page="currentPage"
      :total="total"
      @current-change="changeCurrentPage"
      >
    </el-pagination>
    <!-- <button @click="$fetch">Refresh</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      total: 0,
      commodity: [],
      commoditySearch: {
        name: '',
        desc: '',
        price: {
          min: '',
          max: '',
        },
          width: {
          min: '',
          max: '',
        },
          height: {
          min: '',
          max: '',
        },
        sellerId: '',
        shapeId: '',
        themeId: '',
        categoryId: '',
        techniqueId: '',
        state: '',
        hots: false,
        news: false,
        colors: {
          start: '#ffffff',
          end: '#000000'
        }
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
    const optionsCategory = await this.$axios.$get(`/api/commodity/options/category`)
    if (optionsCategory.data && optionsCategory.data.length) {
      this.options.categorys = optionsCategory.data
    }
    // 手法
    const optionsTechnique = await this.$axios.$get(`/api/commodity/options/technique`)
    if (optionsTechnique.data && optionsTechnique.data.length) {
      this.options.techniques = optionsTechnique.data
    }

    // const alldata = await this.$axios.$get('/api/admin/commodity/all', {
    //   params: {
    //     pageSize: this.pageSize,
    //     currentPage: this.currentPage
    //   }
    // })
    // this.total = alldata.data.total;
    // let commodityData = alldata.data.list.map((item) => {
    //   item.visible = false
    //   return item
    // })
    // this.commodity = commodityData
    await this.onCommoditySearch();
  },
  methods: {
    // 搜索
    async onCommoditySearch() {
      console.log("onCommoditySearch", JSON.stringify(this.commoditySearch))
      // let isSearch = false
      // for (let [key, value] of Object.entries(this.commoditySearch)) {
      //   if (value) {
      //     isSearch = true
      //     break
      //   }
      // }
      let commodityData;
      // if (isSearch) {
        const searchData = await this.$axios.$get('/api/admin/commodity/search', {
            params: {
              ...this.commoditySearch,
              pageSize: this.pageSize,
              currentPage: this.currentPage
            }
          }
        )
        console.log('searchData', searchData)
        this.total = searchData.data.total;
        commodityData = searchData.data.list.map((item) => {
          item.visible = false
          return item
        })

      // } else {
      //   const alldata = await this.$axios.$get('/api/admin/commodity/all', {
      //     params: {
      //       pageSize: this.pageSize,
      //       currentPage: this.currentPage
      //     }
      //   })
      //   this.total = alldata.data.total;
      //   commodityData = alldata.data.list.map((item) => {
      //     item.visible = false
      //     return item
      //   })
      // }
      console.log('commodityData', commodityData)
      this.commodity = commodityData
    },
    onCommoditySearchReset() {
      this.$refs['commoditySearch'].resetFields()
    },
    // 删除
    async commodityDelete(index, row) {
      // console.log('commodityDelete', index, row)
      const commodity = await this.$axios.$post('/api/admin/commodity/delete', {
        commodityId: row.commodityId,
      })
      // console.log('commodity', commodity)
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
    changeCurrentPage(val) {
      this.currentPage = val;
      this.onCommoditySearch()
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

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 25%;
}


.time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

</style>
