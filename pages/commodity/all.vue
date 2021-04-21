<template>
  <div>
    <el-table :data="commodity" border>
      <el-table-column type="expand" :label="$t('commodity.show')">
        <template slot-scope="scope">
          <el-form label-position="left" inline class="demo-table-expand">
            <template v-if="scope.row.name">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.zh'),
                    name: $t('commodity.name'),
                  })
                "
              >
                <span>{{ scope.row.name['zh-cn'] }}</span>
              </el-form-item>
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.en'),
                    name: $t('commodity.name'),
                  })
                "
              >
                <span>{{ scope.row.name['en-us'] }}</span>
              </el-form-item>
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.ja'),
                    name: $t('commodity.name'),
                  })
                "
              >
                <span>{{ scope.row.name['ja-jp'] }}</span>
              </el-form-item>

              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.es'),
                    name: $t('commodity.name'),
                  })
                "
              >
                <span>{{ scope.row.name['es-es'] }}</span>
              </el-form-item>
            </template>

            <template v-if="scope.row.desc">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.zh'),
                    name: $t('commodity.desc'),
                  })
                "
              >
                <span>{{ scope.row.desc['zh-cn'] }}</span>
              </el-form-item>
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.en'),
                    name: $t('commodity.desc'),
                  })
                "
              >
                <span>{{ scope.row.desc['en-us'] }}</span>
              </el-form-item>
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.ja'),
                    name: $t('commodity.desc'),
                  })
                "
              >
                <span>{{ scope.row.desc['ja-jp'] }}</span>
              </el-form-item>
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.es'),
                    name: $t('commodity.desc'),
                  })
                "
              >
                <span>{{ scope.row.desc['es-es'] }}</span>
              </el-form-item>
            </template>

            <template v-if="scope.row.price">
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.zh'),
                    name: $t('commodity.price.title'),
                  })
                "
              >
                <span>{{ scope.row.price['zh-cn'] }}</span>
              </el-form-item>
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.en'),
                    name: $t('commodity.price.title'),
                  })
                "
              >
                <span>{{ scope.row.price['en-us'] }}</span>
              </el-form-item>
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.ja'),
                    name: $t('commodity.price.title'),
                  })
                "
              >
                <span>{{ scope.row.price['ja-jp'] }}</span>
              </el-form-item>
              <el-form-item
                :label="
                  $t('langname', {
                    lang: $t('lang.es'),
                    name: $t('commodity.price.title'),
                  })
                "
              >
                <span>{{ scope.row.price['es-es'] }}</span>
              </el-form-item>
            </template>

            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.es'),
                  name: $t('commodity.technique'),
                })
              "
            >
              <span>{{ scope.row.techniques[0]['es-es'] }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="name['zh-cn']" :label="$t('commodity.name')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" v-if="scope.row.name">
            <p>{{ $t('lang.zh') }}: {{ scope.row.name['zh-cn'] }}</p>
            <p>{{ $t('lang.en') }}: {{ scope.row.name['en-us'] }}</p>
            <p>{{ $t('lang.ja') }}: {{ scope.row.name['ja-jp'] }}</p>
            <p>{{ $t('lang.es') }}: {{ scope.row.name['es-es'] }}</p>
            <div slot="reference">
              {{ scope.row.name[$i18n.locale] }}
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column prop="state" :label="$t('commodity.state.title')">
        <template slot-scope="scope">
          {{ states[scope.row.state].name }}
        </template>
      </el-table-column>

      <el-table-column :label="$t('commodity.seller')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>
              姓名 :
              {{
                scope.row.seller
                  ? `${scope.row.seller.firstname} ${scope.row.seller.lastname}`
                  : ''
              }}
            </p>
            <p>Id: {{ scope.row.seller ? scope.row.seller.sellerId : '' }}</p>
            <p>国家: {{ scope.row.seller ? scope.row.seller.country : '' }}</p>
            <p>类型: {{ scope.row.seller ? scope.row.seller.typeName : '' }}</p>
            <div slot="reference">
              {{
                scope.row.seller
                  ? `${scope.row.seller.firstname} ${scope.row.seller.lastname}`
                  : ''
              }}
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column
        prop="price['zh-cn']"
        :label="$t('commodity.price.title')"
      >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top" v-if="scope.row.price">
            <p>{{ $t('lang.zh') }}: {{ scope.row.price['zh-cn'] }}</p>
            <p>{{ $t('lang.en') }}: {{ scope.row.price['en-us'] }}</p>
            <p>{{ $t('lang.ja') }}: {{ scope.row.price['ja-jp'] }}</p>
            <p>{{ $t('lang.es') }}: {{ scope.row.price['es-es'] }}</p>
            <div slot="reference">
              {{ scope.row.price[$i18n.locale] }}
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column prop="photo" :label="$t('commodity.photo')" width="123">
        <template slot-scope="scope">
          <div
            class="demo-image__preview"
            v-if="scope.row.photos && scope.row.photos.length"
          >
            <el-image
              style="width: 100px"
              :src="scope.row.photos[0].src"
              :preview-src-list="
                scope.row.photos.map((item) => {
                  return item.src
                })
              "
            >
            </el-image>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="width" :label="$t('commodity.width.title')">
        <template slot-scope="scope">
          {{ scope.row.width }}
        </template>
      </el-table-column>
      <el-table-column prop="height" :label="$t('commodity.height.title')">
        <template slot-scope="scope">
          {{ scope.row.height }}
        </template>
      </el-table-column>
      <el-table-column
        prop="colors"
        :label="$t('commodity.color.title')"
        width="200"
      >
        <template slot-scope="scope">
          <template v-for="(item, index) in scope.row.colors">
            <el-tag
              :key="item.startColorValue"
              disable-transitions
              style="margin-left: 10px"
              :color="item.startColor"
              effect="dark"
            >
              {{ item.startColor }}
            </el-tag>
            <el-tag
              :key="item.endColorValue"
              disable-transitions
              style="margin-left: 10px"
              :color="item.endColor"
              effect="dark"
            >
              {{ item.endColor }}
            </el-tag>
          </template>
        </template>
      </el-table-column>
      <el-table-column
        prop="desc['zh-cn']"
        :label="$t('commodity.desc')"
        width="200"
      >
        <template slot-scope="scope">
          <el-popover
            trigger="hover"
            placement="top"
            width="400"
            v-if="scope.row.desc"
          >
            <p>{{ $t('lang.zh') }}: {{ scope.row.desc['zh-cn'] }}</p>
            <p>{{ $t('lang.en') }}: {{ scope.row.desc['en-us'] }}</p>
            <p>{{ $t('lang.ja') }}: {{ scope.row.desc['ja-jp'] }}</p>
            <p>{{ $t('lang.es') }}: {{ scope.row.desc['es-es'] }}</p>
            <div slot="reference">
              <span
                class="ellipsis"
                style="display: inline-block; width: 179px"
                >{{ scope.row.desc[$i18n.locale] }}</span
              >
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column
        prop="createdDate"
        :formatter="formatterDate"
        :label="$t('content.createdDate')"
        width="160"
      >
      </el-table-column>

      <el-table-column :label="$t('content.operation')" width="172">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-edit"
            @click="commodityEdit(scope.$index, scope.row)"
            >{{ $t('content.edit') }}</el-button
          >

          <el-popover placement="top" v-model="scope.row.visible">
            <p>{{ $t('content.deleteText') }}</p>
            <div style="text-align: right; margin: 0">
              <el-button
                size="mini"
                type="text"
                @click="scope.row.visible = false"
                >{{ $t('content.cancel') }}</el-button
              >
              <el-button
                type="primary"
                size="mini"
                @click="commodityDelete(scope.$index, scope.row)"
                >{{ $t('content.define') }}</el-button
              >
            </div>

            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              slot="reference"
              >{{ $t('content.delete') }}</el-button
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
      style="margin-top: 20px; text-align: center"
    >
    </el-pagination>
    <!-- <button @click="$fetch">Refresh</button> -->
  </div>
</template>

<script>
export default {
  name: 'Commodity',
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 0,
      commodity: [],
      commoditySearch: {
        id: '',
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
        // shapes: [],
        // themes: [],
        // categorys: [],
        // techniques: [],

        categorys: [],
        classifications: [],
        materials: [],
        models: [],
        places: [],
        ruiwus: [],
        shapes: [],
        specifications: [],
        styles: [],
        techniques: [],
        themes: [],
        types: [],
        uses: [],

        state: '',
        hots: false,
        news: false,
        colors: '#fff',
      },
      options: {},
      // 0:已添加，1:售卖中，2:已售卖，3:已下架
      states: [
        {
          index: 0,
          name: this.$t('commodity.state.added'),
        },
        {
          index: 1,
          name: this.$t('commodity.state.onsale'),
        },
        {
          index: 2,
          name: this.$t('commodity.state.sold'),
        },
        {
          index: 3,
          name: this.$t('commodity.state.offline'),
        },
      ],
    }
  },
  // async fetch() {
  //   await this.onCommoditySearch()
  // },
  async created() {
    await this.onCommoditySearch(this.currentPage)
  },
  methods: {
    // 搜索
    async onCommoditySearch(currentPage) {
      console.log('onCommoditySearch', JSON.stringify(this.commoditySearch))
      // let isSearch = false
      // for (let [key, value] of Object.entries(this.commoditySearch)) {
      //   if (value) {
      //     isSearch = true
      //     break
      //   }
      // }
      let commodityData
      // if (isSearch) {
      const {
        categorys,
        classifications,
        materials,
        models,
        places,
        ruiwus,
        shapes,
        specifications,
        styles,
        techniques,
        themes,
        types,
        uses,
        ...search
      } = this.commoditySearch
      const searchData = await this.$axios.$get('/api/admin/commodity/all', {
        params: {
          ...search,
          // categorys: this.commoditySearch.categorys.length ? JSON.stringify(this.commoditySearch.categorys) : this.commoditySearch.categorys,
          categorys: JSON.stringify(categorys),
          classifications: JSON.stringify(classifications),
          materials: JSON.stringify(materials),
          models: JSON.stringify(models),
          places: JSON.stringify(places),
          ruiwus: JSON.stringify(ruiwus),
          shapes: JSON.stringify(shapes),
          specifications: JSON.stringify(specifications),
          styles: JSON.stringify(styles),
          techniques: JSON.stringify(techniques),
          themes: JSON.stringify(themes),
          types: JSON.stringify(types),
          uses: JSON.stringify(uses),

          pageSize: this.pageSize,
          currentPage: currentPage,
        },
      })
      // console.log('searchData', searchData)
      this.total = searchData.data.total
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
      // console.log('commodityData', commodityData)
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
          message: `${this.$t('content.delete')}${this.$t(
            'content.success'
          )}！`,
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t('content.fail')}!`,
          type: 'error',
        })
      }
    },
    commodityEdit(index, row) {
      this.$router.push(
        this.localePath(`/commodity/create?commodityId=${row.commodityId}`)
      )
    },
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
    changeCurrentPage(currentPage) {
      this.onCommoditySearch(currentPage)
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
  content: '';
}

.clearfix:after {
  clear: both;
}

.ellipsis {
  width: 100%; /*根据自己项目进行定义宽度*/
  overflow: hidden; /*设置超出的部分进行影藏*/
  text-overflow: ellipsis; /*设置超出部分使用省略号*/
  white-space: nowrap;
}
</style>
