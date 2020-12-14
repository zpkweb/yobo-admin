<template>
  <el-form ref="form" :model="form" label-width="94px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item
            label="汉语名称"
            :prop="'name.zh-cn'"
            :rules="{
              required: true,
              message: `汉语名称不能为空`,
              trigger: 'blur',
            }"
          >
            <el-input
              v-model="form.name['zh-cn']"
              placeholder="请输入汉语"
            ></el-input
          ></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item
          label="英语名称"
            :prop="'name.en-us'"
            :rules="{
              required: true,
              message: `英语名称不能为空`,
              trigger: 'blur',
            }"
            ><el-input
              v-model="form.name['en-us']"
              placeholder="请输入英语"
            ></el-input></el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item
          label="日语名称"
            :prop="'name.ja-jp'"
            :rules="{
              required: true,
              message: `日语名称不能为空`,
              trigger: 'blur',
            }"
            ><el-input
              v-model="form.name['ja-jp']"
              placeholder="请输入日语"
            ></el-input></el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item
          label="法语名称"
            :prop="'name.fr-fr'"
            :rules="{
              required: true,
              message: `法语名称不能为空`,
              trigger: 'blur',
            }"
            ><el-input
              v-model="form.name['fr-fr']"
              placeholder="请输入法语"
            ></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item
            label="汉语描述"
            :prop="'desc.zh-cn'"
            :rules="{
              required: true,
              message: `汉语描述不能为空`,
              trigger: 'blur',
            }"
          >
          <el-input
            type="textarea"
            v-model="form.desc['zh-cn']"
            placeholder="请输入汉语描述"
          ></el-input
        ></el-form-item></el-col>
        <el-col :span="6"
          ><el-form-item
          label="汉语描述"
            :prop="'desc.en-us'"
            :rules="{
              required: true,
              message: `英语描述不能为空`,
              trigger: 'blur',
            }"
          ><el-input
            type="textarea"
            v-model="form.desc['en-us']"
            placeholder="请输入英语描述"
          ></el-input
        ></el-form-item></el-col>
        <el-col :span="6"
          ><el-form-item
          label="日语描述"
            :prop="'desc.ja-jp'"
            :rules="{
              required: true,
              message: `日语描述不能为空`,
              trigger: 'blur',
            }"
          ><el-input
            type="textarea"
            v-model="form.desc['ja-jp']"
            placeholder="请输入日语描述"
          ></el-input
        ></el-form-item></el-col>
        <el-col :span="6"
          ><el-form-item
          label="法语描述"
            :prop="'desc.fr-fr'"
            :rules="{
              required: true,
              message: `法语描述不能为空`,
              trigger: 'blur',
            }"
          ><el-input
            type="textarea"
            v-model="form.desc['fr-fr']"
            placeholder="请输入法语描述"
          ></el-input></el-form-item></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item
            label="人民币价格"
            :prop="'price.zh-cn'"
            :rules="{
              required: true,
              message: `人民币价格不能为空`,
              trigger: 'blur',
            }"
          >
            <el-input
              v-model="form.price['zh-cn']"
              placeholder="请输入人民币价格"
            >
              <template slot="append">¥</template>
            </el-input>
          </el-form-item></el-col
        >
        <el-col :span="6">
          <el-form-item
            label="美元价格"
            :prop="'price.en-us'"
            :rules="{
              required: true,
              message: `美元价格不能为空`,
              trigger: 'blur',
            }"
            ><el-input
              v-model="form.price['en-us']"
              placeholder="请输入美元价格"
              ><template slot="append">$</template></el-input
            ></el-form-item
          ></el-col
        >
        <el-col :span="6">
          <el-form-item
          label="日元价格"
            :prop="'price.ja-jp'"
            :rules="{
              required: true,
              message: `日元价格不能为空`,
              trigger: 'blur',
            }"
            ><el-input
              v-model="form.price['ja-jp']"
              placeholder="请输入日元价格"
              ><template slot="append">￥</template></el-input
            ></el-form-item
          ></el-col
        >

        <el-col :span="6">
          <el-form-item
          label="欧元价格"
            :prop="'price.fr-fr'"
            :rules="{
              required: true,
              message: `欧元价格不能为空`,
              trigger: 'blur',
            }"
            ><el-input
              v-model="form.price['fr-fr']"
              placeholder="请输入欧元价格"
              ><template slot="append">€</template></el-input
            ></el-form-item
          ></el-col
        >
        <!-- <el-col :span="6"
          ><el-input v-model="form.price['fr-fr']" placeholder="请输入法郎价格"><template slot="append">₣</template></el-input
        ></el-col> -->
      </el-row>

      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item
          label="商品尺寸"
            :prop="'size[0]'"
            :rules="{
              required: true,
              message: `商品长度不能为空`,
              trigger: 'blur',
            }"
          >
            <el-input
              type="input"
              placeholder="请输入商品长度"
              v-model="form.size[0]"
            >
              <template slot="prepend">长</template>
              <template slot="append">cm</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item
          label="商品尺寸"
            :prop="'size[1]'"
            :rules="{
              required: true,
              message: `商品高度不能为空`,
              trigger: 'blur',
            }"
          >
            <el-input
              type="input"
              placeholder="请输入商品高度"
              v-model="form.size[1]"
            >
              <template slot="prepend">高</template>
              <template slot="append">cm</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
          <el-form-item
          label="商品形状"
            :prop="'shape[0]'"
            :rules="{
              required: true,
              message: `商品形状不能为空`,
              trigger: 'change',
            }"
          >
            <el-select v-model="form.shape[0]" placeholder="请选择商品形状" clearable>
              <el-option
                v-for="item in options.shape"
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
      <el-col :span="12">
          <el-form-item
          label="商品主题"
            :prop="'theme[0]'"
            :rules="{
              required: true,
              message: `商品主题不能为空`,
              trigger: 'change',
            }"
          >
            <el-select v-model="form.theme[0]" placeholder="请选择商品主题" clearable>
              <el-option
                v-for="item in options.theme"
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
    <el-row :gutter="20">
      <el-col :span="12">
          <el-form-item
          label="商品类别"
            :prop="'category[0]'"
            :rules="{
              required: true,
              message: `商品类别不能为空`,
              trigger: 'change',
            }"
          >
            <el-select v-model="form.category[0]" placeholder="请选择商品类别" clearable>
              <el-option
                v-for="item in options.category"
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
      <el-col :span="12">
          <el-form-item
          label="商品手法"
            :prop="'technique[0]'"
            :rules="{
              required: true,
              message: `商品手法不能为空`,
              trigger: 'change',
            }"
          >
            <el-select v-model="form.technique[0]" placeholder="请选择商品手法" clearable>
              <el-option
                v-for="item in options.technique"
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

      <el-row :gutter="20">
        <el-col :span="6">

          <el-form-item
          label="商品颜色-开始"
          label-width="120px"
            :prop="'colors[0]'"
            :rules="{
              required: true,
              message: `商品长度不能为空`,
              trigger: 'blur',
            }"
          ><el-color-picker v-model="form.colors[0]"></el-color-picker></el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item
          label="商品颜色-结束"
          label-width="120px"
            :prop="'colors[1]'"
            :rules="{
              required: true,
              message: `商品长度不能为空`,
              trigger: 'blur',
            }"
          ><el-color-picker v-model="form.colors[1]"></el-color-picker></el-form-item>

        </el-col>
      </el-row>

    <el-form-item label="商品图片">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-upload
            v-model="form.photo"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-col>
      </el-row>
    </el-form-item>

      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="商品状态" :prop="'state'">
          <el-radio-group v-model="form.state">
            <el-radio :label="0">无</el-radio>
            <el-radio :label="1">在售中</el-radio>
            <el-radio :label="2">已售卖</el-radio>
            <el-radio :label="3">已下架</el-radio>
          </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>

    <el-form-item label="关联艺术家">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-select
            v-model="form.seller"
            filterable
            remote
            reserve-keyword
            placeholder="请输入艺术家邮箱"
            :remote-method="remoteMethod"
            :loading="loading"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item>

      <el-button
        v-if="isCreate"
        type="primary"
        @click="onSubmit('form')"
        icon="el-icon-circle-plus-outline"
      >
        创建
      </el-button>

      <el-button
        v-else
        type="primary"
        @click="onSubmit('form')"
        icon="el-icon-check"
      >
        更新
      </el-button>
      <el-button @click="onMock" icon="el-icon-check">
        填充
      </el-button>
      <el-button @click="resetForm('form')" icon="el-icon-circle-close"
          >清空</el-button
        >
    </el-form-item>
  </el-form>
</template>
<script>
import Mock from 'mockjs';

export default {
  watch: {
    '$route.query': '$fetch',
  },
  watchQuery: ['commodityId'],
  data() {
    return {
      type: '',
      typeText: '创建',
      isCreate: true,
      form: {
        commodityId: '',
        name: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'fr-fr': '',
        },
        desc: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'fr-fr': '',
        },
        price: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'fr-fr': '',
        },
        shape: [],
        theme: [],
        category: [],
        technique: [],
        photos: [
          {
            src: '',
            name: '',
          },
        ],

        colors: ['#fff', '#000'],
        size: [],
        state: 0,
        seller: '547790132@qq.com',
      },
      options: {
        shape: [],
        theme: [],
        category: [],
        technique: [],
      },
      dialogImageUrl: '',
      dialogVisible: false,
      loading: false,
      states: [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ],
    }
  },
  async fetch() {
    // 形状
    const optionsShape = await this.$axios.$get(`/api/commodity/options/shape`)
    if (optionsShape.data && optionsShape.data.length) {
      this.options.shape = optionsShape.data
    }
    // 主题
    const optionsTheme = await this.$axios.$get(`/api/commodity/options/theme`)
    if (optionsTheme.data && optionsTheme.data.length) {
      this.options.theme = optionsTheme.data
    }
    // 类别
    const optionsCategory = await this.$axios.$get(
      `/api/commodity/options/category`
    )
    if (optionsCategory.data && optionsCategory.data.length) {
      this.options.category = optionsCategory.data
    }
    // 手法
    const optionsTechnique = await this.$axios.$get(
      `/api/commodity/options/technique`
    )
    if (optionsTechnique.data && optionsTechnique.data.length) {
      this.options.technique = optionsTechnique.data
    }
    console.log('this.$route.query', this.$route.query)

    if (this.$route.query && this.$route.query.commodityId) {
      this.form.commodityId = this.$route.query.commodityId

      const commodity = await this.$axios.$get('/api/admin/commodity/edit', {
        params: {
          commodityId: this.form.commodityId,
        },
      })

      if (commodity.success) {
        let commodityForm = Object.assign({}, this.form, commodity.data)
        // this.form = Object.assign(this.form, commodity.data)
        // this.form.name = commodity.data.name;
        // this.form.desc = commodity.data.desc;
        // this.form.price = commodity.data.price;
        // this.form.photos = commodity.data.photos;
        console.log('commodityForm', commodityForm)

        this.form.state = commodityForm.state
        this.form.size = commodityForm.size
        this.form.colors = commodityForm.colors
        this.form.seller = commodityForm.seller

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
          this.form.photos = commodityForm.photos
        }

        if (commodityForm.shape) {
          this.form.shape = commodityForm.shape
        }

        if (commodityForm.theme) {
          this.form.theme = commodityForm.theme
        }

        if (commodityForm.category) {
          this.form.category = commodityForm.category
        }

        if (commodityForm.technique) {
          this.form.technique = commodityForm.technique
        }

        console.log('this.form', this.form)
        // this.form = commodityForm;

        this.type = 'edit'
        this.typeText = '更新'
        this.isCreate = false
      }
    } else {
      this.isCreate = true
      this.form = {
        commodityId: '',
        name: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'fr-fr': '',
        },
        desc: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'fr-fr': '',
        },
        price: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'fr-fr': '',
        },
        shape: [],
        theme: [],
        category: [],
        technique: [],
        photos: [
          {
            src: '',
            name: '',
          },
        ],

        colors: ['#fff', '#000'],
        size: [],
        state: 0,
        seller: '547790132@qq.com',
      }
    }
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` }
    })
  },
  methods: {
    onSubmit(formName) {
      console.log('submit!', this.form)
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let data
          if (this.isCreate) {
            data = await this.$axios
              .$post('/api/admin/commodity/create', this.form)
              .catch((error) => {
                this.$message({
                  showClose: true,
                  message: `${this.typeText}失败! ${error.response.data.message}`,
                  type: 'error',
                })
              })
          } else {
            data = await this.$axios
              .$post('/api/admin/commodity/update', this.form)
              .catch((error) => {
                this.$message({
                  showClose: true,
                  message: `${this.typeText}失败! ${error.response.data.message}`,
                  type: 'error',
                })
              })
          }

          console.log('data', data)
          if (data.status === 200) {
            this.$message({
              showClose: true,
              message: `${this.typeText}成功`,
              type: 'success',
            })
            if (this.isCreate) {
              this.$refs[formName].resetFields()
            }
          } else {
            this.$message({
              showClose: true,
              message: `${this.typeText}失败!${data.message}`,
              type: 'error',
            })
          }
        }
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    onMock() {
      const createCommodityMock = {
        commodityId: this.form.commodityId,
        name: {
          'zh-cn': Mock.mock('@ctitle(2, 8)'),
          'en-us': Mock.mock('@ctitle(2, 8)'),
          'ja-jp': Mock.mock('@ctitle(2, 8)'),
          'fr-fr': Mock.mock('@ctitle(2, 8)'),
        },
        desc: {
          'zh-cn': Mock.mock('@cparagraph'),
          'en-us': Mock.mock('@cparagraph'),
          'ja-jp': Mock.mock('@cparagraph'),
          'fr-fr': Mock.mock('@cparagraph'),
        },
        price: {
          'zh-cn': Mock.mock('@integer(60, 100)'),
          'en-us': Mock.mock('@integer(60, 100)'),
          'ja-jp': Mock.mock('@integer(60, 100)'),
          'fr-fr': Mock.mock('@integer(60, 100)'),
        },
        shape: [
          this.options.shape[Mock.mock('@integer(0,2)')]['id']
        ],
        theme: [
          this.options.theme[Mock.mock('@integer(0,2)')]['id']
        ],
        category: [
          this.options.category[Mock.mock('@integer(0,2)')]['id']
        ],
        technique: [
          this.options.technique[Mock.mock('@integer(0,2)')]['id']
        ],
        photos: [
          {
            src: '',
            name: '',
          },
        ],
        colors: [Mock.mock('@color'), Mock.mock('@color')],
        size: [Mock.mock('@natural(100, 300)'), Mock.mock('@natural(100, 300)')],
        state: Mock.mock('@integer(0, 3)'),
        seller: '547790132@qq.com',
      }
      console.log("createCommodityMock", createCommodityMock)
      this.form = createCommodityMock;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  },
}
</script>
<style scoped></style>
