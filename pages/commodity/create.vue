<template>
  <el-form ref="form" :model="form" label-width="88px">
    <el-form-item label="商品名称">
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-input v-model="form.name['zh-cn']" placeholder="请输入汉语"></el-input
        ></el-col>
        <el-col :span="5"
          ><el-input v-model="form.name['en-us']" placeholder="请输入英语"></el-input
        ></el-col>
        <el-col :span="5"
          ><el-input v-model="form.name['ja-jp']" placeholder="请输入日语"></el-input
        ></el-col>
        <el-col :span="5"
          ><el-input v-model="form.name['fr-fr']" placeholder="请输入法语"></el-input
        ></el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="商品描述">
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-input
            type="textarea"
            v-model="form.desc['zh-cn']"
            placeholder="请输入汉语"
          ></el-input
        ></el-col>
        <el-col :span="5"
          ><el-input
            type="textarea"
            v-model="form.desc['en-us']"
            placeholder="请输入英语"
          ></el-input
        ></el-col>
        <el-col :span="5"
          ><el-input
            type="textarea"
            v-model="form.desc['ja-jp']"
            placeholder="请输入日语"
          ></el-input
        ></el-col>
        <el-col :span="5"
          ><el-input
            type="textarea"
            v-model="form.desc['fr-fr']"
            placeholder="请输入法语"
          ></el-input
        ></el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="商品价格">
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-input v-model="form.price['zh-cn']" placeholder="请输入汉语"></el-input
        ></el-col>
        <el-col :span="5"
          ><el-input v-model="form.price['en-us']" placeholder="请输入英语"></el-input
        ></el-col>
        <el-col :span="5"
          ><el-input v-model="form.price['ja-jp']" placeholder="请输入日语"></el-input
        ></el-col>
        <el-col :span="5"
          ><el-input v-model="form.price['fr-fr']" placeholder="请输入法语"></el-input
        ></el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="商品形状">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-select
            v-model="form.shape"
            filterable
            remote
            reserve-keyword
            placeholder="请选择商品形状"
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
    <el-form-item label="商品主题">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-select
            v-model="form.theme"
            filterable
            remote
            reserve-keyword
            placeholder="请选择商品主题"
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
    <el-form-item label="商品类别">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-select
            v-model="form.category"
            filterable
            remote
            reserve-keyword
            placeholder="请选择商品类别"
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
    <el-form-item label="商品手法">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-select
            v-model="form.technique"
            filterable
            remote
            reserve-keyword
            placeholder="请选择商品手法"
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
    <el-form-item label="商品图片">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-upload
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
    <el-form-item label="商品尺寸">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-input type="input" placeholder="请输入商品尺寸" v-model="form.size">
            <template slot="append">cm</template>
          </el-input>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="商品颜色">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-color-picker v-model="form.color"></el-color-picker>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="关联艺术家">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-select
            v-model="form.value"
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
    <el-form-item label="商品状态">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-radio-group v-model="form.resource">
            <el-radio label="在售中"></el-radio>
            <el-radio label="已售卖"></el-radio>
            <el-radio label="已下架"></el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: {
          'zh-cn': '名称',
          'en-us': 'name',
          'ja-jp': '名前',
          'fr-fr': 'Nom'
        },
        desc: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'fr-fr': ''
        },
        price: {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'fr-fr': ''
        },
        shape: '',
        color: '',
        theme: '',
        category: '',
        technique: '',
        size: '',

      },
      dialogImageUrl: '',
      dialogVisible: false,
      options: [],
      value: [],
      list: [],
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
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` }
    })
  },
  methods: {
    onSubmit() {
      console.log('submit!')
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
  },
}
</script>
<style scoped>
</style>
