<template>
  <div>

    <!-- <el-form
      :inline="true"
      :model="commoditySearch"
      ref="commoditySearch"
      class="commodity-search"
      label-width="80px"
    >
      <el-row :gutter="0">


        <el-col :span="6">
          <el-form-item :label="$t('commodity.commodityId')" prop="commodityId">

            <el-input
              v-model="commoditySearch.commodityId"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.commodityId') })"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>


      </el-row>

    </el-form> -->


    <el-table :data="commodity" border>
      <el-table-column type="expand" :label="$t('commodity.show')">
        <template slot-scope="scope">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item :label="$t('langname', { lang: $t('lang.zh'), name: $t('commodity.name')})">
              <span>{{ scope.row.name['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.en'), name: $t('commodity.name')})">
              <span>{{ scope.row.name['en-us'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.ja'), name: $t('commodity.name')})">
              <span>{{ scope.row.name['ja-jp'] }}</span>
            </el-form-item>
            <!-- <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.name')})">
              <span>{{ scope.row.name['fr-fr'] }}</span>
            </el-form-item> -->
            <el-form-item :label="$t('langname', { lang: $t('lang.es'), name: $t('commodity.name')})">
              <span>{{ scope.row.name['es-es'] }}</span>
            </el-form-item>

            <el-form-item :label="$t('langname', { lang: $t('lang.zh'), name: $t('commodity.desc')})">
              <span>{{ scope.row.desc['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.en'), name: $t('commodity.desc')})">
              <span>{{ scope.row.desc['en-us'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.ja'), name: $t('commodity.desc')})">
              <span>{{ scope.row.desc['ja-jp'] }}</span>
            </el-form-item>
            <!-- <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.desc')})">
              <span>{{ scope.row.desc['fr-fr'] }}</span>
            </el-form-item> -->
            <el-form-item :label="$t('langname', { lang: $t('lang.es'), name: $t('commodity.desc')})">
              <span>{{ scope.row.desc['es-es'] }}</span>
            </el-form-item>

            <el-form-item :label="$t('langname', { lang: $t('lang.zh'), name: $t('commodity.price.title')})">
              <span>{{ scope.row.price['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.en'), name: $t('commodity.price.title')})">
              <span>{{ scope.row.price['en-us'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.ja'), name: $t('commodity.price.title')})">
              <span>{{ scope.row.price['ja-jp'] }}</span>
            </el-form-item>
            <!-- <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.price.title')})">
              <span>{{ scope.row.price['fr-fr'] }}</span>
            </el-form-item> -->
            <el-form-item :label="$t('langname', { lang: $t('lang.es'), name: $t('commodity.price.title')})">
              <span>{{ scope.row.price['es-es'] }}</span>
            </el-form-item>

            <el-form-item :label="$t('langname', { lang: $t('lang.zh'), name: $t('commodity.shape')})">
              <span>{{ scope.row.shapes[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.en'), name: $t('commodity.shape')})">
              <span>{{ scope.row.shapes[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.ja'), name: $t('commodity.shape')})">
              <span>{{ scope.row.shapes[0]['ja-jp'] }}</span>
            </el-form-item>
            <!-- <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.shape')})">
              <span>{{ scope.row.shapes[0]['fr-fr'] }}</span>
            </el-form-item> -->
            <el-form-item :label="$t('langname', { lang: $t('lang.es'), name: $t('commodity.shape')})">
              <span>{{ scope.row.shapes[0]['es-es'] }}</span>
            </el-form-item>

            <el-form-item :label="$t('langname', { lang: $t('lang.zh'), name: $t('commodity.theme')})">
              <span>{{ scope.row.themes[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.en'), name: $t('commodity.theme')})">
              <span>{{ scope.row.themes[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.ja'), name: $t('commodity.theme')})">
              <span>{{ scope.row.themes[0]['ja-jp'] }}</span>
            </el-form-item>
            <!-- <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.theme')})">
              <span>{{ scope.row.themes[0]['fr-fr'] }}</span>
            </el-form-item> -->
            <el-form-item :label="$t('langname', { lang: $t('lang.es'), name: $t('commodity.theme')})">
              <span>{{ scope.row.themes[0]['es-es'] }}</span>
            </el-form-item>

            <el-form-item :label="$t('langname', { lang: $t('lang.zh'), name: $t('commodity.category')})">
              <span>{{ scope.row.categorys[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.en'), name: $t('commodity.category')})">
              <span>{{ scope.row.categorys[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.ja'), name: $t('commodity.category')})">
              <span>{{ scope.row.categorys[0]['ja-jp'] }}</span>
            </el-form-item>
            <!-- <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.category')})">
              <span>{{ scope.row.categorys[0]['fr-fr'] }}</span>
            </el-form-item> -->
            <el-form-item :label="$t('langname', { lang: $t('lang.es'), name: $t('commodity.category')})">
              <span>{{ scope.row.categorys[0]['es-es'] }}</span>
            </el-form-item>

            <el-form-item :label="$t('langname', { lang: $t('lang.zh'), name: $t('commodity.technique')})">
              <span>{{ scope.row.techniques[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.en'), name: $t('commodity.technique')})">
              <span>{{ scope.row.techniques[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item :label="$t('langname', { lang: $t('lang.ja'), name: $t('commodity.technique')})">
              <span>{{ scope.row.techniques[0]['ja-jp'] }}</span>
            </el-form-item>
            <!-- <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.technique')})">
              <span>{{ scope.row.techniques[0]['fr-fr'] }}</span>
            </el-form-item> -->
            <el-form-item :label="$t('langname', { lang: $t('lang.es'), name: $t('commodity.technique')})">
              <span>{{ scope.row.techniques[0]['es-es'] }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="name['zh-cn']" :label="$t('commodity.name')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{$t('lang.zh')}}: {{ scope.row.name['zh-cn'] }}</p>
            <p>{{$t('lang.en')}}: {{ scope.row.name['en-us'] }}</p>
            <p>{{$t('lang.ja')}}: {{ scope.row.name['ja-jp'] }}</p>
            <!-- <p>{{$t('lang.fr')}}: {{ scope.row.name['fr-fr'] }}</p> -->
            <p>{{$t('lang.es')}}: {{ scope.row.name['es-es'] }}</p>
            <div slot="reference">
              {{ scope.row.name[$i18n.locale] }}
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column prop="state" :label="$t('commodity.state.title')">
        <template slot-scope="scope">
          {{ options.state[scope.row.state].name }}
        </template>
      </el-table-column>

      <el-table-column :label="$t('commodity.seller')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名 : {{ scope.row.seller ? `${scope.row.seller.firstname} ${scope.row.seller.lastname}` : '' }}</p>
            <p>Id: {{ scope.row.seller ? scope.row.seller.sellerId : '' }}</p>
            <p>国家: {{ scope.row.seller ? scope.row.seller.country : '' }}</p>
            <p>类型: {{ scope.row.seller ? scope.row.seller.typeName : '' }}</p>
            <div slot="reference">
              {{ scope.row.seller ? `${scope.row.seller.firstname} ${scope.row.seller.lastname}` : '' }}
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column prop="price['zh-cn']" :label="$t('commodity.price.title')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{$t('lang.zh')}}: {{ scope.row.price['zh-cn'] }}</p>
            <p>{{$t('lang.en')}}: {{ scope.row.price['en-us'] }}</p>
            <p>{{$t('lang.ja')}}: {{ scope.row.price['ja-jp'] }}</p>
            <!-- <p>{{$t('lang.fr')}}: {{ scope.row.price['fr-fr'] }}</p> -->
            <p>{{$t('lang.es')}}: {{ scope.row.price['es-es'] }}</p>
            <div slot="reference">
              {{ scope.row.price[$i18n.locale] }}
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <!-- <el-table-column prop="shapes[0]['zh-cn']" :label="$t('commodity.shape')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{$t('lang.zh')}}: {{ scope.row.shapes.length ? scope.row.shapes[0]['zh-cn'] : '' }}</p>
            <p>{{$t('lang.en')}}: {{ scope.row.shapes.length ? scope.row.shapes[0]['en-us'] : '' }}</p>
            <p>{{$t('lang.ja')}}: {{ scope.row.shapes.length ? scope.row.shapes[0]['ja-jp'] : '' }}</p>
            <p>{{$t('lang.es')}}: {{ scope.row.shapes.length ? scope.row.shapes[0]['es-es'] : '' }}</p>
            <div slot="reference">
              {{ scope.row.shapes.length ? scope.row.shapes[0][$i18n.locale] : $t('commodity.nothing') }}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="themes[0]['zh-cn']" :label="$t('commodity.theme')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{$t('lang.zh')}}: {{ scope.row.themes.length ? scope.row.themes[0]['zh-cn'] : '' }}</p>
            <p>{{$t('lang.en')}}: {{ scope.row.themes.length ? scope.row.themes[0]['en-us'] : '' }}</p>
            <p>{{$t('lang.ja')}}: {{ scope.row.themes.length ? scope.row.themes[0]['ja-jp'] : '' }}</p>
            <p>{{$t('lang.es')}}: {{ scope.row.themes.length ? scope.row.themes[0]['es-es'] : '' }}</p>
            <div slot="reference">
              {{ scope.row.themes.length ? scope.row.themes[0][$i18n.locale] : $t('commodity.nothing') }}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="categorys[0]['zh-cn']" :label="$t('commodity.category')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{$t('lang.zh')}}: {{ scope.row.categorys.length ? scope.row.categorys[0]['zh-cn'] : '' }}</p>
            <p>{{$t('lang.en')}}: {{ scope.row.categorys.length ? scope.row.categorys[0]['en-us'] : '' }}</p>
            <p>{{$t('lang.ja')}}: {{ scope.row.categorys.length ? scope.row.categorys[0]['ja-jp'] : '' }}</p>
            <p>{{$t('lang.es')}}: {{ scope.row.categorys.length ? scope.row.categorys[0]['es-es'] : '' }}</p>
            <div slot="reference">
              {{ scope.row.categorys.length ? scope.row.categorys[0][$i18n.locale] : $t('commodity.nothing') }}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="techniques[0]['zh-cn']" :label="$t('commodity.technique')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{$t('lang.zh')}}: {{ scope.row.techniques.length ? scope.row.techniques[0]['zh-cn'] : '' }}</p>
            <p>{{$t('lang.en')}}: {{ scope.row.techniques.length ? scope.row.techniques[0]['en-us'] : '' }}</p>
            <p>{{$t('lang.ja')}}: {{ scope.row.techniques.length ? scope.row.techniques[0]['ja-jp'] : '' }}</p>
            <p>{{$t('lang.es')}}: {{ scope.row.techniques.length ? scope.row.techniques[0]['es-es'] : '' }}</p>
            <div slot="reference">
              {{ scope.row.techniques.length ? scope.row.techniques[0][$i18n.locale] : $t('commodity.nothing') }}
            </div>
          </el-popover>
        </template>
      </el-table-column> -->
      <el-table-column prop="photo" :label="$t('commodity.photo')" width="123">
        <template slot-scope="scope">

          <div class="demo-image__preview" v-if="scope.row.photos && scope.row.photos.length">
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.photos[0].src"
              :preview-src-list="scope.row.photos.map((item)=>{return item.src})">
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
      <el-table-column prop="colors" :label="$t('commodity.color.title')" width="100">
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
            v-for="(item, index) in scope.row.colors"
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
      <el-table-column prop="desc['zh-cn']" :label="$t('commodity.desc')" width="200">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{$t('lang.zh')}}: {{ scope.row.desc['zh-cn'] }}</p>
            <p>{{$t('lang.en')}}: {{ scope.row.desc['en-us'] }}</p>
            <p>{{$t('lang.ja')}}: {{ scope.row.desc['ja-jp'] }}</p>
            <!-- <p>{{$t('lang.fr')}}: {{ scope.row.desc['fr-fr'] }}</p> -->
            <p>{{$t('lang.es')}}: {{ scope.row.desc['es-es'] }}</p>
            <div slot="reference">
              <span class="ellipsis" style="display:inline-block; width: 179px">{{ scope.row.desc[$i18n.locale] }}</span>
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

      <el-table-column :label="$t('content.operation')" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-edit"
            @click="commodityEdit(scope.$index, scope.row)"
            >{{$t('content.edit')}}</el-button
          >

          <el-popover placement="top" v-model="scope.row.visible">
            <p>{{$t('content.deleteText')}}</p>
            <div style="text-align: right; margin: 0">
              <el-button
                size="mini"
                type="text"
                @click="scope.row.visible = false"
                >{{$t('content.cancel')}}</el-button
              >
              <el-button
                type="primary"
                size="mini"
                @click="commodityDelete(scope.$index, scope.row)"
                >{{$t('content.define')}}</el-button
              >
            </div>

            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              slot="reference"
              >{{$t('content.delete')}}</el-button
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
      style="margin-top:20px;text-align: center;"
    >
    </el-pagination>

  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 8,
      total: 0,
      commodity: [],
      options: {
        category: [],
        classification: [],
        material: [],
        model: [],
        place: [],
        ruiwu: [],
        shape: [],
        specification: [],
        style: [],
        technique: [],
        theme: [],
        type: [],
        use: [],
        // 0:已添加，1:售卖中，2:已售卖，3:已下架
        state: [
          {
            index: 0,
            name: this.$t('commodity.state.added')
          },
          {
            index: 1,
            name: this.$t('commodity.state.onsale')
          },
          {
            index: 2,
            name: this.$t('commodity.state.sold')
          },
          {
            index: 3,
            name: this.$t('commodity.state.offline')
          },
        ],
      },
    }
  },
  async fetch() {
    await this.onCommoditySearch()
  },

  methods: {
    async onCommoditySearch() {
      // let isSearch = false
      // for (let [key, value] of Object.entries(this.commoditySearch)) {
      //   if (value) {
      //     isSearch = true
      //     break
      //   }
      // }
      let commodityData
      // if (isSearch) {

      const searchData = await this.$axios.$get('/api/admin/commodity/all')
      console.log("searchData", searchData)
      this.total = searchData.data.total
      commodityData = searchData.data.list.map((item) => {
        item.visible = false
        return item
      })


      this.commodity = commodityData
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
          message: `${this.$t('content.delete')}${this.$t('content.success')}！`,
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
      this.$router.push(this.localePath(`/commodity/create?commodityId=${row.commodityId}`))
    },
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
    changeCurrentPage(val) {
      this.currentPage = val
      this.onCommoditySearch()
    },
  }
}
</script>
<style scoped>

</style>
