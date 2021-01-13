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
          <el-form-item :label="$t('commodity.name')" prop="name">
            <el-input
              v-model="commoditySearch.name"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.name') })"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('commodity.desc')" prop="desc">
            <el-input
              v-model="commoditySearch.desc"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.desc') })"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('commodity.seller')" prop="sellerId">
            <el-input
              v-model="commoditySearch.sellerId"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.seller') })"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('commodity.state.title')" prop="state">
            <el-select
              v-model="commoditySearch.state"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.state.title') })"
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
          <el-form-item :label="$t('commodity.shape')" prop="shapeId">
            <el-select
              v-model="commoditySearch.shapeId"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.shape') })"
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
          <el-form-item :label="$t('commodity.theme')" prop="themeId">
            <el-select
              v-model="commoditySearch.themeId"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.theme') })"
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
          <el-form-item :label="$t('commodity.category')" prop="categoryId">
            <el-select
              v-model="commoditySearch.categoryId"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.category') })"
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
          <el-form-item :label="$t('commodity.technique')" prop="techniqueId">
            <el-select
              v-model="commoditySearch.techniqueId"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.technique') })"
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
          <el-form-item :label="$t('commodity.price.title')" prop="price.min">
            <el-input
              v-model="commoditySearch.price.min"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.price.min') })"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="price.max">
            <el-input
              v-model="commoditySearch.price.max"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.price.max') })"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item :label="$t('commodity.width.title')" prop="width.min">
            <el-input
              v-model="commoditySearch.width.min"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.width.min') })"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="width.max">
            <el-input
              v-model="commoditySearch.width.max"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.width.max') })"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item :label="$t('commodity.height.title')" prop="height.min">
            <el-input
              v-model="commoditySearch.height.min"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.height.min') })"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="height.max">
            <el-input
              v-model="commoditySearch.height.max"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.height.max') })"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="0">
        <el-col :span="3">
          <el-form-item :label="$t('commodity.hots')" prop="hots">
            <el-switch v-model="commoditySearch.hots"> </el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item :label="$t('commodity.news')" prop="news">
            <el-switch v-model="commoditySearch.news"> </el-switch>
          </el-form-item>
        </el-col>

        <el-col :span="3">
          <el-form-item :label="$t('commodity.color.start')" prop="colors.start">
            <el-color-picker
              v-model="commoditySearch.colors.start"
            ></el-color-picker>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item :label="$t('commodity.color.end')" prop="colors.end">
            <el-color-picker
              v-model="commoditySearch.colors.end"
            ></el-color-picker>
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
              >{{ $t('content.search') }}</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button @click="onCommoditySearchReset" icon="el-icon-close"
              >{{ $t('content.clear') }}</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

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
            <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.name')})">
              <span>{{ scope.row.name['fr-fr'] }}</span>
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
            <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.desc')})">
              <span>{{ scope.row.desc['fr-fr'] }}</span>
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
            <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.price.title')})">
              <span>{{ scope.row.price['fr-fr'] }}</span>
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
            <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.shape')})">
              <span>{{ scope.row.shapes[0]['fr-fr'] }}</span>
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
            <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.theme')})">
              <span>{{ scope.row.themes[0]['fr-fr'] }}</span>
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
            <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.category')})">
              <span>{{ scope.row.categorys[0]['fr-fr'] }}</span>
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
            <el-form-item :label="$t('langname', { lang: $t('lang.fr'), name: $t('commodity.technique')})">
              <span>{{ scope.row.techniques[0]['fr-fr'] }}</span>
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
            <p>{{$t('lang.fr')}}: {{ scope.row.name['fr-fr'] }}</p>
            <div slot="reference">
              {{ scope.row.name[$i18n.locale] }}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="desc['zh-cn']" :label="$t('commodity.desc')" width="300">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{$t('lang.zh')}}: {{ scope.row.desc['zh-cn'] }}</p>
            <p>{{$t('lang.en')}}: {{ scope.row.desc['en-us'] }}</p>
            <p>{{$t('lang.ja')}}: {{ scope.row.desc['ja-jp'] }}</p>
            <p>{{$t('lang.fr')}}: {{ scope.row.desc['fr-fr'] }}</p>
            <div slot="reference">
              <span>{{ scope.row.desc[$i18n.locale] }}</span>
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
            <p>{{$t('lang.fr')}}: {{ scope.row.price['fr-fr'] }}</p>
            <div slot="reference">
              {{ scope.row.price[$i18n.locale] }}
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column prop="shapes[0]['zh-cn']" :label="$t('commodity.shape')">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{$t('lang.zh')}}: {{ scope.row.shapes.length ? scope.row.shapes[0]['zh-cn'] : '' }}</p>
            <p>{{$t('lang.en')}}: {{ scope.row.shapes.length ? scope.row.shapes[0]['en-us'] : '' }}</p>
            <p>{{$t('lang.ja')}}: {{ scope.row.shapes.length ? scope.row.shapes[0]['ja-jp'] : '' }}</p>
            <p>{{$t('lang.fr')}}: {{ scope.row.shapes.length ? scope.row.shapes[0]['fr-fr'] : '' }}</p>
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
            <p>{{$t('lang.fr')}}: {{ scope.row.themes.length ? scope.row.themes[0]['fr-fr'] : '' }}</p>
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
            <p>{{$t('lang.fr')}}: {{ scope.row.categorys.length ? scope.row.categorys[0]['fr-fr'] : '' }}</p>
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
            <p>{{$t('lang.fr')}}: {{ scope.row.techniques.length ? scope.row.techniques[0]['fr-fr'] : '' }}</p>
            <div slot="reference">
              {{ scope.row.techniques.length ? scope.row.techniques[0][$i18n.locale] : $t('commodity.nothing') }}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="photo" :label="$t('commodity.photo')" width="180">
        <template slot-scope="scope">
          <el-card
            :body-style="{ padding: '0px' }"
            v-for="(item, index) of scope.row.photos"
            :key="index"
            style="margin: 10px"
          >
            <img :src="item.src" class="image" />
            <div style="padding: 14px">
              <span>{{ item.name }}</span>
              <!-- <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div> -->
            </div>
          </el-card>
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
      <el-table-column prop="state" :label="$t('commodity.state.title')"> </el-table-column>
      <el-table-column prop="sellerId" :label="$t('commodity.seller')"> </el-table-column>
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
    <!-- <button @click="$fetch">Refresh</button> -->
  </div>
</template>

<script>
export default {
  name: 'Commodity',
  data() {
    return {
      currentPage: 1,
      pageSize: 8,
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
          end: '#000000',
        },
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
    // 形状
    const optionsShape = await this.$axios.$get(`/api/admin/commodity/options/shape`)
    if (optionsShape.data && optionsShape.data.length) {
      this.options.shapes = optionsShape.data
    }
    // 主题
    const optionsTheme = await this.$axios.$get(`/api/admin/commodity/options/theme`)
    if (optionsTheme.data && optionsTheme.data.length) {
      this.options.themes = optionsTheme.data
    }
    // 类别
    const optionsCategory = await this.$axios.$get(
      `/api/admin/commodity/options/category`
    )
    if (optionsCategory.data && optionsCategory.data.length) {
      this.options.categorys = optionsCategory.data
    }
    // 手法
    const optionsTechnique = await this.$axios.$get(
      `/api/admin/commodity/options/technique`
    )
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
    await this.onCommoditySearch()
  },
  methods: {
    // 搜索
    async onCommoditySearch() {
      // console.log('onCommoditySearch', JSON.stringify(this.commoditySearch))
      // let isSearch = false
      // for (let [key, value] of Object.entries(this.commoditySearch)) {
      //   if (value) {
      //     isSearch = true
      //     break
      //   }
      // }
      let commodityData
      // if (isSearch) {
      const searchData = await this.$axios.$get('/api/admin/commodity/search', {
        params: {
          ...this.commoditySearch,
          pageSize: this.pageSize,
          currentPage: this.currentPage,
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
</style>
