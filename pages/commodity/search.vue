<template>
  <div>
    <el-form
      :inline="true"
      :model="commoditySearch"
      ref="commoditySearch"
      class="commodity-search"
      label-width="80px"
      label-position="left"
    >
      <el-row :gutter="0">
        <el-col :span="6">
          <el-form-item :label="$t('commodity.id')" prop="id">
            <el-input
              v-model="commoditySearch.id"
              :placeholder="$t('form.placeholder', { msg: $t('commodity.id') })"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item :label="$t('commodity.commodityId')" prop="commodityId">
            <el-input
              v-model="commoditySearch.commodityId"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.commodityId') })
              "
              clearable
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item :label="$t('commodity.sellerId')" prop="sellerId">
            <el-input
              v-model="commoditySearch.sellerId"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.sellerId') })
              "
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="0">
        <el-col :span="6">
          <el-form-item :label="$t('commodity.name')" prop="name">
            <el-input
              v-model="commoditySearch.name"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.name') })
              "
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('commodity.desc')" prop="desc">
            <el-input
              v-model="commoditySearch.desc"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.desc') })
              "
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item :label="$t('commodity.state.title')" prop="state">
            <el-select
              v-model="commoditySearch.state"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.state.title') })
              "
              clearable
            >
              <el-option
                v-for="item in states"
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
        <el-col :span="5">
          <el-form-item :label="$t('commodity.price.title')" prop="price.min">
            <el-input
              v-model="commoditySearch.price.min"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.price.min') })
              "
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item prop="price.max">
            <el-input
              v-model="commoditySearch.price.max"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.price.max') })
              "
              clearable
            ></el-input>
          </el-form-item>
        </el-col>

        <!-- <el-col :span="5">
          <el-form-item :label="$t('commodity.width.title')" prop="width.min">
            <el-input
              v-model="commoditySearch.width.min"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.width.min') })
              "
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item prop="width.max">
            <el-input
              v-model="commoditySearch.width.max"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.width.max') })
              "
              clearable
            ></el-input>
          </el-form-item>
        </el-col> -->

        <!-- <el-col :span="5">
          <el-form-item :label="$t('commodity.height.title')" prop="height.min">
            <el-input
              v-model="commoditySearch.height.min"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.height.min') })
              "
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item prop="height.max">
            <el-input
              v-model="commoditySearch.height.max"
              :placeholder="
                $t('form.placeholder', { msg: $t('commodity.height.max') })
              "
              clearable
            ></el-input>
          </el-form-item>
        </el-col> -->
      </el-row>


        <!-- <el-form-item :label="$t('commodity.category')" > -->
        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.category')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group style="float: left;" v-model="commoditySearch.categorys">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.categorys"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.classification')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.classifications">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.classifications"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.material')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.materials">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.materials"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.model')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.models">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.models"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.place')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.places">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.places"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.ruiwu')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.ruiwus">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.ruiwus"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.shape')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.shapes">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.shapes"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.specification')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.specifications">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.specifications"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.style')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.styles">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.styles"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.technique')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.techniques">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.techniques"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.theme')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.themes">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.themes"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.type')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.types">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.types"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


        <el-form-item class="form-commodity-item">
          <el-row>
          <el-col class="form-commodity-item-label">
            <sapn>{{$t('commodity.use')}}</sapn>
          </el-col>
          <el-col :span="22">
          <el-checkbox-group v-model="commoditySearch.uses">
            <el-checkbox
              name="type"
              v-for="(item, index) in options.uses"
              :key="index"
              :label="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </el-checkbox>
          </el-checkbox-group>
          </el-col>
          </el-row>
        </el-form-item>


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
          <el-form-item label="颜色" prop="colors">
            <el-color-picker v-model="commoditySearch.colors"></el-color-picker>
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
            <el-button @click="onCommoditySearchReset" icon="el-icon-close">{{
              $t('content.clear')
            }}</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-table :data="commodity" border>
      <!-- <el-table-column type="expand" :label="$t('commodity.show')">
        <template slot-scope="scope">
          <el-form label-position="left" inline class="demo-table-expand">
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

            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.zh'),
                  name: $t('commodity.shape'),
                })
              "
            >
              <span>{{ scope.row.shapes[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.en'),
                  name: $t('commodity.shape'),
                })
              "
            >
              <span>{{ scope.row.shapes[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.ja'),
                  name: $t('commodity.shape'),
                })
              "
            >
              <span>{{ scope.row.shapes[0]['ja-jp'] }}</span>
            </el-form-item>

            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.es'),
                  name: $t('commodity.shape'),
                })
              "
            >
              <span>{{ scope.row.shapes[0]['es-es'] }}</span>
            </el-form-item>

            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.zh'),
                  name: $t('commodity.theme'),
                })
              "
            >
              <span>{{ scope.row.themes[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.en'),
                  name: $t('commodity.theme'),
                })
              "
            >
              <span>{{ scope.row.themes[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.ja'),
                  name: $t('commodity.theme'),
                })
              "
            >
              <span>{{ scope.row.themes[0]['ja-jp'] }}</span>
            </el-form-item>

            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.es'),
                  name: $t('commodity.theme'),
                })
              "
            >
              <span>{{ scope.row.themes[0]['es-es'] }}</span>
            </el-form-item>

            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.zh'),
                  name: $t('commodity.category'),
                })
              "
            >
              <span>{{ scope.row.categorys[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.en'),
                  name: $t('commodity.category'),
                })
              "
            >
              <span>{{ scope.row.categorys[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.ja'),
                  name: $t('commodity.category'),
                })
              "
            >
              <span>{{ scope.row.categorys[0]['ja-jp'] }}</span>
            </el-form-item>

            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.es'),
                  name: $t('commodity.category'),
                })
              "
            >
              <span>{{ scope.row.categorys[0]['es-es'] }}</span>
            </el-form-item>

            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.zh'),
                  name: $t('commodity.technique'),
                })
              "
            >
              <span>{{ scope.row.techniques[0]['zh-cn'] }}</span>
            </el-form-item>
            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.en'),
                  name: $t('commodity.technique'),
                })
              "
            >
              <span>{{ scope.row.techniques[0]['en-us'] }}</span>
            </el-form-item>
            <el-form-item
              :label="
                $t('langname', {
                  lang: $t('lang.ja'),
                  name: $t('commodity.technique'),
                })
              "
            >
              <span>{{ scope.row.techniques[0]['ja-jp'] }}</span>
            </el-form-item>

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
      </el-table-column> -->


      <el-table-column prop="name['zh-cn']" :label="$t('commodity.name')">
        <template slot-scope="scope">
          <!-- <el-popover trigger="hover" placement="top">
            <p>{{ $t('lang.zh') }}: {{ scope.row.name['zh-cn'] }}</p>
            <p>{{ $t('lang.en') }}: {{ scope.row.name['en-us'] }}</p>
            <p>{{ $t('lang.ja') }}: {{ scope.row.name['ja-jp'] }}</p>
            <p>{{ $t('lang.es') }}: {{ scope.row.name['es-es'] }}</p>
            <div slot="reference">
              {{ scope.row.name[$i18n.locale] }}
            </div>
          </el-popover> -->
          {{ scope.row.name }}
        </template>
      </el-table-column>

      <el-table-column prop="state" :label="$t('commodity.state.title')">
        <template slot-scope="scope">
          {{ states[scope.row.state].name }}
        </template>
      </el-table-column>

      <!-- <el-table-column :label="$t('commodity.seller')">
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
      </el-table-column> -->

      <el-table-column
        prop="price['zh-cn']"
        :label="$t('commodity.price.title')"
      >
        <template slot-scope="scope">
          <!-- <el-popover trigger="hover" placement="top">
            <p>{{ $t('lang.zh') }}: {{ scope.row.price['zh-cn'] }}</p>
            <p>{{ $t('lang.en') }}: {{ scope.row.price['en-us'] }}</p>
            <p>{{ $t('lang.ja') }}: {{ scope.row.price['ja-jp'] }}</p>
            <p>{{ $t('lang.es') }}: {{ scope.row.price['es-es'] }}</p>
            <div slot="reference">
              {{ scope.row.price[$i18n.locale] }}
            </div>
          </el-popover> -->
          {{ scope.row.price }}
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
              :src="scope.row.photos[0]"
              :preview-src-list="scope.row.photos"
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
          <!-- <el-popover trigger="hover" placement="top" width="400">
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
          </el-popover> -->
          {{ scope.row.desc }}
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
        colors: '',
      },
      options: {
        // 0:已添加，1:售卖中，2:已售卖，3:已下架
      },
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
  async fetch() {
    this.options = {}
  },
  async created() {
    const options = await this.$axios.$get(`/api/admin/commodity/options`)
    if (options.success) {
      this.options = options.data
    }

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
      // const {
      //   categorys,
      //   classifications,
      //   materials,
      //   models,
      //   places,
      //   ruiwus,
      //   shapes,
      //   specifications,
      //   styles,
      //   techniques,
      //   themes,
      //   types,
      //   uses,

      // } = this.commoditySearch
      let price = '';
      if(this.commoditySearch.price.min && this.commoditySearch.price.max){
        price = `${this.commoditySearch.price.min},${this.commoditySearch.price.max}`
      }else if(this.commoditySearch.price.min){
        price = `0,${this.commoditySearch.price.min}`
      }else if(this.commoditySearch.price.max){
        price = `0,${this.commoditySearch.price.max}`
      }

      const searchData = await this.$axios.$get('/api/admin/commodity/searchs', {
        params: {
          // ...search,
          id: this.commoditySearch.id,
          commodityId: this.commoditySearch.commodityId,
          sellerId: this.commoditySearch.sellerId,
          name: this.commoditySearch.name,
          desc: this.commoditySearch.desc,
          state: this.commoditySearch.state,
          price: price,
          colors: this.commoditySearch.colors,
          // categorys: this.commoditySearch.categorys.length ? JSON.stringify(this.commoditySearch.categorys) : this.commoditySearch.categorys,
          // categorys: JSON.stringify(categorys),
          // classifications: JSON.stringify(classifications),
          // materials: JSON.stringify(materials),
          // models: JSON.stringify(models),
          // places: JSON.stringify(places),
          // ruiwus: JSON.stringify(ruiwus),
          // shapes: JSON.stringify(shapes),
          // specifications: JSON.stringify(specifications),
          // styles: JSON.stringify(styles),
          // techniques: JSON.stringify(techniques),
          // themes: JSON.stringify(themes),
          // types: JSON.stringify(types),
          // uses: JSON.stringify(uses),

          categorys: this.commoditySearch.categorys.toString(),
          classifications: this.commoditySearch.classifications.toString(),
          materials: this.commoditySearch.materials.toString(),
          models: this.commoditySearch.models.toString(),
          places: this.commoditySearch.places.toString(),
          ruiwus: this.commoditySearch.ruiwus.toString(),
          shapes: this.commoditySearch.shapes.toString(),
          specifications: this.commoditySearch.specifications.toString(),
          styles: this.commoditySearch.styles.toString(),
          techniques: this.commoditySearch.techniques.toString(),
          themes: this.commoditySearch.themes.toString(),
          types: this.commoditySearch.types.toString(),
          uses: this.commoditySearch.uses.toString(),

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

<style  scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}


.form-commodity-item{
  width: 100%;

}
.form-commodity-item-label{
  width: 80px;
  padding: 0 12px 0 0;
  text-align: left;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
.el-form-item__content{
    width: 100%;
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

.el-form--inline .form-commodity-item .el-form-item__content{
  width: 100%;
}

</style>
