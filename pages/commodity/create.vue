<template>
  <el-form ref="form" :model="form" label-width="108px">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-form-item
          :label="
            $t('langname', { lang: $t('lang.zh'), name: $t('commodity.name') })
          "
          :prop="'name.zh-cn'"
          :rules="{
            required: true,
            message: `${$t('lang.zh')}${$t('commodity.name')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="form.name['zh-cn']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.zh') })"
          ></el-input
        ></el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item
          :label="
            $t('langname', { lang: $t('lang.en'), name: $t('commodity.name') })
          "
          :prop="'name.en-us'"
          :rules="{
            required: true,
            message: `${$t('lang.en')}${$t('commodity.name')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          ><el-input
            v-model="form.name['en-us']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.en') })"
          ></el-input></el-form-item
      ></el-col>
      <el-col :span="6"
        ><el-form-item
          :label="
            $t('langname', { lang: $t('lang.ja'), name: $t('commodity.name') })
          "
          :prop="'name.ja-jp'"
          :rules="{
            required: true,
            message: `${$t('lang.ja')}${$t('commodity.name')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          ><el-input
            v-model="form.name['ja-jp']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.ja') })"
          ></el-input></el-form-item
      ></el-col>
      <el-col :span="6"
        >
        <!-- <el-form-item
          :label="
            $t('langname', { lang: $t('lang.fr'), name: $t('commodity.name') })
          "
          :prop="'name.fr-fr'"
          :rules="{
            required: true,
            message: `${$t('lang.fr')}${$t('commodity.name')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          >
          <el-input
            v-model="form.name['fr-fr']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.fr') })"
          ></el-input> -->
          <el-form-item
          :label="
            $t('langname', { lang: $t('lang.es'), name: $t('commodity.name') })
          "
          :prop="'name.es-es'"
          :rules="{
            required: true,
            message: `${$t('lang.es')}${$t('commodity.name')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          >
          <el-input
            v-model="form.name['es-es']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.es') })"
          ></el-input>
          </el-form-item
      ></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-form-item
          :label="
            $t('langname', { lang: $t('lang.zh'), name: $t('commodity.desc') })
          "
          :prop="'desc.zh-cn'"
          :rules="{
            required: true,
            message: `${$t('lang.zh')}${$t('commodity.desc')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="form.desc['zh-cn']"
            type="textarea"
            :placeholder="$t('form.placeholder', { msg: $t('lang.zh') })"
          ></el-input></el-form-item
      ></el-col>
      <el-col :span="6"
        ><el-form-item
          :label="
            $t('langname', { lang: $t('lang.en'), name: $t('commodity.desc') })
          "
          :prop="'desc.en-us'"
          :rules="{
            required: true,
            message: `${$t('lang.en')}${$t('commodity.desc')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          ><el-input
            v-model="form.desc['en-us']"
            type="textarea"
            :placeholder="$t('form.placeholder', { msg: $t('lang.en') })"
          ></el-input></el-form-item
      ></el-col>
      <el-col :span="6"
        ><el-form-item
          :label="
            $t('langname', { lang: $t('lang.ja'), name: $t('commodity.desc') })
          "
          :prop="'desc.ja-jp'"
          :rules="{
            required: true,
            message: `${$t('lang.ja')}${$t('commodity.desc')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          ><el-input
            v-model="form.desc['ja-jp']"
            type="textarea"
            :placeholder="$t('form.placeholder', { msg: $t('lang.ja') })"
          ></el-input></el-form-item
      ></el-col>
      <el-col :span="6"
        >
        <!-- <el-form-item
          :label="
            $t('langname', { lang: $t('lang.fr'), name: $t('commodity.desc') })
          "
          :prop="'desc.fr-fr'"
          :rules="{
            required: true,
            message: `${$t('lang.fr')}${$t('commodity.desc')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          >
          <el-input
            v-model="form.desc['fr-fr']"
            type="textarea"
            :placeholder="$t('form.placeholder', { msg: $t('lang.fr') })"
          ></el-input> -->
          <el-form-item
          :label="
            $t('langname', { lang: $t('lang.es'), name: $t('commodity.desc') })
          "
          :prop="'desc.es-es'"
          :rules="{
            required: true,
            message: `${$t('lang.es')}${$t('commodity.desc')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          >
          <el-input
            v-model="form.desc['es-es']"
            type="textarea"
            :placeholder="$t('form.placeholder', { msg: $t('lang.es') })"
          ></el-input>
          </el-form-item
      ></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-form-item
          :label="
            $t('langname', {
              lang: $t('lang.price.zh'),
              name: $t('commodity.price.title'),
            })
          "
          :prop="'price.zh-cn'"
          :rules="{
            required: true,
            message: `${$t('lang.price.zh')}${$t('commodity.price.title')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="form.price['zh-cn']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.price.zh') })"
          >
            <template slot="append">¥</template>
          </el-input>
        </el-form-item></el-col
      >
      <el-col :span="6">
        <el-form-item
          :label="
            $t('langname', {
              lang: $t('lang.price.en'),
              name: $t('commodity.price.title'),
            })
          "
          :prop="'price.en-us'"
          :rules="{
            required: true,
            message: `${$t('lang.price.en')}${$t('commodity.price.title')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="form.price['en-us']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.price.en') })"
            ><template slot="append">$</template></el-input
          ></el-form-item
        ></el-col
      >
      <el-col :span="6">
        <el-form-item
          :label="
            $t('langname', {
              lang: $t('lang.price.ja'),
              name: $t('commodity.price.title'),
            })
          "
          :prop="'price.ja-jp'"
          :rules="{
            required: true,
            message: `${$t('lang.price.ja')}${$t('commodity.price.title')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          ><el-input
            v-model="form.price['ja-jp']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.price.ja') })"
            ><template slot="append">￥</template></el-input
          ></el-form-item
        ></el-col
      >

      <el-col :span="6">
        <!-- <el-form-item
          :label="
            $t('langname', {
              lang: $t('lang.price.fr'),
              name: $t('commodity.price.title'),
            })
          "
          :prop="'price.fr-fr'"
          :rules="{
            required: true,
            message: `${$t('lang.price.fr')}${$t('commodity.price.title')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          ><el-input
            v-model="form.price['fr-fr']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.price.fr') })"
            ><template slot="append">€</template></el-input
          > -->

          <el-form-item
          :label="
            $t('langname', {
              lang: $t('lang.price.es'),
              name: $t('commodity.price.title'),
            })
          "
          :prop="'price.es-es'"
          :rules="{
            required: true,
            message: `${$t('lang.price.es')}${$t('commodity.price.title')}${$t(
              'form.noEmpty'
            )}`,
            trigger: 'blur',
          }"
          ><el-input
            v-model="form.price['es-es']"
            :placeholder="$t('form.placeholder', { msg: $t('lang.price.es') })"
            ><template slot="append">€</template></el-input
          >
          </el-form-item
        ></el-col
      >
      <!-- <el-col :span="6"
          ><el-input v-model="form.price['fr-fr']" placeholder="请输入法郎价格"><template slot="append">₣</template></el-input
        ></el-col> -->
    </el-row>

    <el-row :gutter="20">
      <el-col :span="10">
        <el-form-item
          :label="$t('commodity.width.title')"
          :prop="'width'"
          :rules="{
            required: true,
            message: `${$t('commodity.width.title')}${$t('form.noEmpty')}`,
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="form.width"
            type="input"
            :placeholder="
              $t('form.placeholder', { msg: $t('commodity.width.title') })
            "
          >
            <template slot="append">cm</template>
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item
          :label="$t('commodity.height.title')"
          :prop="'height'"
          :rules="{
            required: true,
            message: `${$t('commodity.height.title')}${$t('form.noEmpty')}`,
            trigger: 'blur',
          }"
        >
          <el-input
            v-model="form.height"
            type="input"
            :placeholder="
              $t('form.placeholder', { msg: $t('commodity.height.title') })
            "
          >
            <template slot="append">cm</template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-form-item
          :label="$t('commodity.shape')"
          :prop="'shapes[0].id'"
          :rules="{
            required: false,
            message: `${$t('commodity.shape')}${$t('form.noEmpty')}`,
            trigger: 'change',
          }"
        >
          <el-select
            v-model="form.shapes[0].id"
            :placeholder="
              $t('form.selectPlaceholder', { msg: $t('commodity.shape') })
            "
            clearable
          >
            <el-option
              v-for="(item, index) in shapes"
              :key="index"
              :label="item['zh-cn']"
              :value="item.id"
            >
              <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
              <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
              <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
              <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
              <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item
          :label="$t('commodity.theme')"
          :prop="'themes[0].id'"
          :rules="{
            required: false,
            message: `${$t('commodity.theme')}${$t('form.noEmpty')}`,
            trigger: 'change',
          }"
        >
          <el-select
            v-model="form.themes[0].id"
            :placeholder="
              $t('form.selectPlaceholder', { msg: $t('commodity.theme') })
            "
            clearable
          >
            <el-option
              v-for="(item, index) in themes"
              :key="index"
              :label="item['zh-cn']"
              :value="item.id"
            >
              <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
              <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
              <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
              <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
              <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>

      <el-col :span="6">
        <el-form-item
          :label="$t('commodity.category')"
          :prop="'categorys[0].id'"
          :rules="{
            required: false,
            message: `${$t('commodity.category')}${$t('form.noEmpty')}`,
            trigger: 'change',
          }"
        >
          <el-select
            v-model="form.categorys[0].id"
            :placeholder="
              $t('form.selectPlaceholder', { msg: $t('commodity.category') })
            "
            clearable
          >
            <el-option
              v-for="(item, index) in categorys"
              :key="index"
              :label="item['zh-cn']"
              :value="item.id"
            >
              <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
              <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
              <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
              <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
              <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item
          :label="$t('commodity.technique')"
          :prop="'techniques[0].id'"
          :rules="{
            required: false,
            message: `${$t('commodity.technique')}${$t('form.noEmpty')}`,
            trigger: 'change',
          }"
        >
          <el-select
            v-model="form.techniques[0].id"
            :placeholder="
              $t('form.selectPlaceholder', { msg: $t('commodity.technique') })
            "
            clearable
          >
            <el-option
              v-for="(item, index) in techniques"
              :key="index"
              :label="item['zh-cn']"
              :value="item.id"
            >
              <span>{{ $t('lang.zh') }}：{{ item['zh-cn'] }}，</span>
              <span>{{ $t('lang.en') }}：{{ item['en-us'] }}，</span>
              <span>{{ $t('lang.ja') }}：{{ item['ja-jp'] }}，</span>
              <!-- <span>{{ $t('lang.fr') }}：{{ item['fr-fr'] }}</span> -->
              <span>{{ $t('lang.es') }}：{{ item['es-es'] }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item :label="$t('commodity.color.title')">
      <el-row :gutter="10">
        <el-col v-for="(item, index) in form.colors" :key="index" :span="2">
          <el-form-item
            :prop="'colors.' + index + '.name'"
            :rules="{
              required: false,
              message: `${$t('commodity.color.title')}${$t('form.noEmpty')}`,
              trigger: 'blur',
            }"
          >
            <el-color-picker
              v-model="form.colors[index].name"
            ></el-color-picker>
          </el-form-item>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-button icon="el-icon-circle-plus-outline" @click="addColors">
          </el-button>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item :label="$t('commodity.photo')">
      <el-upload
        :file-list="form.photos"
        action="/api/upload/images"
        :data="{ type: 'commodity' }"
        list-type="picture-card"
        :on-preview="uploadPreview"
        :on-remove="uploadRemove"
        :on-success="uploadSuccess"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </el-form-item>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item :label="$t('commodity.state.title')" :prop="'state'">
          <el-radio-group v-model="form.state">
            <el-radio :label="0">{{ $t('commodity.state.added') }}</el-radio>
            <el-radio :label="1">{{ $t('commodity.state.onsale') }}</el-radio>
            <el-radio :label="2">{{ $t('commodity.state.sold') }}</el-radio>
            <el-radio :label="3">{{ $t('commodity.state.offline') }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item :label="$t('commodity.seller')">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input v-model="form.seller.sellerId" type="text"></el-input>
          <!-- <el-select
            v-model="form.sellerId"
            filterable
            remote
            reserve-keyword
            :placeholder="
              $t('form.placeholder', { msg: $t('commodity.sellerId') })
            "
          > -->
          <!-- <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option> -->
          <!-- </el-select> -->
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item>
      <el-button
        v-if="isCreate"
        type="primary"
        icon="el-icon-circle-plus-outline"
        @click="onSubmit('form')"
      >
        {{ $t('content.create') }}
      </el-button>

      <el-button
        v-else
        type="primary"
        icon="el-icon-check"
        @click="onSubmit('form')"
      >
        {{ $t('content.update') }}
      </el-button>
      <el-button icon="el-icon-check" @click="onMock">
        {{ $t('content.fill') }}
      </el-button>
      <el-button icon="el-icon-circle-close" @click="resetForm('form')">{{
        $t('content.clear')
      }}</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import Mock from 'mockjs'

export default {
  async fetch() {
    this.isCreate = true
    this.reset()

    // 形状
    const optionsShape = await this.$axios.$get(
      `/api/admin/commodity/options/shape`
    )
    if (optionsShape.data && optionsShape.data.length) {
      // this.options.shapes = optionsShape.data
      this.$store.commit('addCommodityOpitons', {
        type: 'shapes',
        data: optionsShape.data,
      })
    }
    // 主题
    const optionsTheme = await this.$axios.$get(
      `/api/admin/commodity/options/theme`
    )
    if (optionsTheme.data && optionsTheme.data.length) {
      // this.options.themes = optionsTheme.data
      this.$store.commit('addCommodityOpitons', {
        type: 'themes',
        data: optionsTheme.data,
      })
    }
    // 类别
    const optionsCategory = await this.$axios.$get(
      `/api/admin/commodity/options/category`
    )
    if (optionsCategory.data && optionsCategory.data.length) {
      // this.options.categorys = optionsCategory.data
      this.$store.commit('addCommodityOpitons', {
        type: 'categorys',
        data: optionsCategory.data,
      })
    }
    // 手法
    const optionsTechnique = await this.$axios.$get(
      `/api/admin/commodity/options/technique`
    )
    if (optionsTechnique.data && optionsTechnique.data.length) {
      // this.options.techniques = optionsTechnique.data
      this.$store.commit('addCommodityOpitons', {
        type: 'techniques',
        data: optionsTechnique.data,
      })
    }
    // console.log('this.$route.query', this.$route.query)

    if (this.$route.query && this.$route.query.commodityId) {
      this.form.commodityId = this.$route.query.commodityId

      const commodity = await this.$axios.$get('/api/admin/commodity/edit', {
        params: {
          commodityId: this.form.commodityId,
        },
      })

      if (commodity.success) {
        const commodityForm = Object.assign({}, this.form, commodity.data)
        // this.form = Object.assign(this.form, commodity.data)
        // this.form.name = commodity.data.name;
        // this.form.desc = commodity.data.desc;
        // this.form.price = commodity.data.price;
        // this.form.photos = commodity.data.photos;
        // console.log('commodityForm', commodityForm)

        this.form.state = commodityForm.state
        this.form.width = commodityForm.width
        this.form.height = commodityForm.height
        this.form.colors = commodityForm.colors

        if (commodityForm.name) {
          this.form.name = commodityForm.name
        }
        if (commodityForm.desc) {
          this.form.desc = commodityForm.desc
        }
        if (commodityForm.price) {
          this.form.price = commodityForm.price
        }

        if (commodityForm.photos) {
          // console.log("commodityForm.photos", commodityForm.photos)
          const photos = commodityForm.photos.map((item) => {
            item.url = item.src
            return item
          })
          this.form.photos = photos
        }

        if (commodityForm.shapes) {
          this.form.shapes = commodityForm.shapes
        }

        if (commodityForm.themes) {
          this.form.themes = commodityForm.themes
        }

        if (commodityForm.categorys) {
          this.form.categorys = commodityForm.categorys
        }

        if (commodityForm.techniques) {
          this.form.techniques = commodityForm.techniques
        }
        if (commodityForm.seller) {
          this.form.seller = commodityForm.seller
        }
        // console.log('this.form', this.form)
        // this.form = commodityForm;

        this.type = 'edit'
        this.typeText = this.$t('content.update')
        this.isCreate = false
      }
    }
  },
  data() {
    return {
      type: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      form: {},

      dialogImageUrl: '',
      dialogVisible: false,
      loading: false,
    }
  },
  computed: {
    shapes() {
      return this.$store.state.commodity.options.shapes
    },
    themes() {
      return this.$store.state.commodity.options.themes
    },
    categorys() {
      return this.$store.state.commodity.options.categorys
    },
    techniques() {
      return this.$store.state.commodity.options.techniques
    },
  },
  watch: {
    '$route.query': '$fetch',
  },
  watchQuery: ['commodityId'],
  mounted() {
    // this.list = this.states.map((item) => {
    //   return { value: `value:${item}`, label: `label:${item}` }
    // })
  },
  methods: {
    onSubmit(formName) {
      // console.log('submit!', this.form)
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let data
          if (this.isCreate) {
            data = await this.$axios
              .$post('/api/admin/commodity/create', this.form)
              .catch((error) => {
                this.$message({
                  showClose: true,
                  message: `${this.typeText}${this.$t('content.fail')}! ${
                    error.response.data.message
                  }`,
                  type: 'error',
                })
              })
          } else {
            data = await this.$axios
              .$post('/api/admin/commodity/update', this.form)
              .catch((error) => {
                this.$message({
                  showClose: true,
                  message: `${this.typeText}${this.$t('content.fail')}! ${
                    error.response.data.message
                  }`,
                  type: 'error',
                })
              })
          }

          // console.log('data', data)
          if (data.status === 200) {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.success')}`,
              type: 'success',
            })
            if (this.isCreate) {
              // this.$refs[formName].resetFields()
              this.resetForm('form')
            }
          } else {
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}!${
                data.message
              }`,
              type: 'error',
            })
          }
        }
      })
    },

    onMock() {
      if (
        !this.shapes.length ||
        !this.themes.length ||
        !this.categorys.length ||
        !this.techniques.length
      ) {
        this.$message({
          showClose: true,
          message: '请先添加艺术品选项',
          type: 'error',
        })
        return
      }
      const createCommodityMock = {
        commodityId: this.form.commodityId,
        name: {
          'zh-cn': Mock.mock('@ctitle(2, 8)'),
          'en-us': Mock.mock('@title(2)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          // 'fr-fr': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
        },
        desc: {
          'zh-cn': Mock.mock('@cparagraph(1,3)'),
          'en-us': Mock.mock('@paragraph(1,3)'),
          'ja-jp': 'ゼロ,いち,に,さん,し,ご,ろく,しち,はち,きゅう,じゅう',
          // 'fr-fr': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
          'es-es': 'zéro,un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix',
        },
        price: {
          'zh-cn': Mock.mock('@integer(60, 100)'),
          'en-us': Mock.mock('@integer(60, 100)'),
          'ja-jp': Mock.mock('@integer(60, 100)'),
          // 'fr-fr': Mock.mock('@integer(60, 100)'),
          'es-es': Mock.mock('@integer(60, 100)'),
        },
        shapes: [
          this.shapes[Mock.mock(`@integer(0,${this.shapes.length - 1})`)],
        ],
        themes: [
          this.themes[Mock.mock(`@integer(0,${this.themes.length - 1})`)],
        ],
        categorys: [
          this.categorys[Mock.mock(`@integer(0,${this.categorys.length - 1})`)],
        ],
        techniques: [
          this.techniques[
            Mock.mock(`@integer(0,${this.techniques.length - 1})`)
          ],
        ],
        photos: [],
        colors: [
          {
            name: Mock.mock('@color'),
          },
        ],
        width: Mock.mock('@natural(100, 300)'),
        height: Mock.mock('@natural(100, 300)'),
        state: Mock.mock('@integer(0, 3)'),
        seller: '',
      }
      // console.log('createCommodityMock', createCommodityMock)
      this.form = createCommodityMock

      this.type = 'create'
      this.typeText = this.$t('content.create')
      this.isCreate = true
    },
    resetForm(formName) {
      this.reset()
      this.type = 'create'
      this.typeText = this.$t('content.create')
      this.isCreate = true
      this.$refs[formName].clearValidate()
      // console.log(this.form)
    },
    addColors() {
      this.form.colors.push({
        name: '#fff',
      })
    },
    reset() {
      this.form = {
        commodityId: '',
        name: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        desc: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        price: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          // 'fr-fr': '',
          'es-es': '',
        },
        shapes: [
          {
            id: '',
            'zh-cn': '',
            'en-us': '',
            'ja-jp': '',
            // 'fr-fr': '',
            'es-es': '',
          },
        ],
        themes: [
          {
            id: '',
            'zh-cn': '',
            'en-us': '',
            'ja-jp': '',
            // 'fr-fr': '',
            'es-es': '',
          },
        ],
        categorys: [
          {
            id: '',
            'zh-cn': '',
            'en-us': '',
            'ja-jp': '',
            // 'fr-fr': '',
            'es-es': '',
          },
        ],
        techniques: [
          {
            id: '',
            'zh-cn': '',
            'en-us': '',
            'ja-jp': '',
            // 'fr-fr': '',
            'es-es': '',
          },
        ],
        photos: [],
        colors: [
          {
            name: '#fff',
          },
        ],
        width: '',
        height: '',
        state: 0,
        seller: '',
      }
    },
    uploadSuccess(res, file) {
      // console.log(res, file)
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.form.photos.push({
        src: res.data.src,
        url: res.data.src,
        name: file.name,
      })
      // console.log(this.form)
    },
    uploadRemove(file, fileList) {
      // console.log(file, fileList)
      for (const [index, item] of Object.entries(this.form.photos)) {
        if (item.name === file.name) {
          this.form.photos.splice(index, 1)
        }
      }
    },
    uploadPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
  },
}
</script>
<style scoped></style>
