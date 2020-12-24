<template>
  <el-form :model="form" ref="form" label-width="100px" class="form">
    <el-form-item
      v-for="item in form.optionsExamples"
      :label="`${ $t('content.create') }${optionType[$route.params.type]}${ $t('content.example') }`"
      :key="item['zh-cn']"
    >
      <el-row :gutter="20">
        <el-col :span="4">
          <el-input v-model="item['zh-cn']" :disabled="true"></el-input>
        </el-col>
        <el-col :span="4">
          <el-input v-model="item['en-us']" :disabled="true"></el-input>
        </el-col>
        <el-col :span="4">
          <el-input v-model="item['ja-jp']" :disabled="true"></el-input>
        </el-col>
        <el-col :span="4">
          <el-input v-model="item['fr-fr']" :disabled="true"></el-input>
        </el-col>

        <el-col :span="2">
          <el-button type="primary" @click="addOption">
            {{ $t('content.create') }}
          </el-button>
        </el-col>

        <el-col :span="2" :offset="2">
           <el-button @click="resetForm('form')">{{ $t('content.clear') }}</el-button>
        </el-col>

        <!-- <el-button type="primary" @click="submitForm('form')">创建</el-button>
        <el-button type="primary" @click="addOption">{{
          `新增${optionType[$route.params.type]}`
        }}</el-button>
        <el-button @click="resetForm('form')">重置</el-button> -->

      </el-row>
    </el-form-item>

    <el-form-item
      v-for="(item, index) in form.options"
      :label="`${optionType[$route.params.type]}${index + 1}`"
      :key="item['zh-cn']"
    >
      <el-row :gutter="20">
        <el-col :span="4">
          <el-form-item
            :prop="'options.' + index + '.zh-cn'"
            :rules="{
              required: true,
              message: `${ $t('lang.zh') }${optionType[$route.params.type]}${ $t('form.noEmpty') }`,
              trigger: 'blur',
            }"
          >
            <el-input v-model="item['zh-cn']" :placeholder="$t('form.placeholder', { msg: $t('lang.zh') })">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item
            :prop="'options.' + index + '.en-us'"
            :rules="{
              required: true,
              message: `${ $t('lang.en') }${optionType[$route.params.type]}${ $t('form.noEmpty') }`,
              trigger: 'blur',
            }"
          >
            <el-input
              v-model="item['en-us']"
              :placeholder="$t('form.placeholder', { msg: $t('lang.en') })"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item
            :prop="'options.' + index + '.ja-jp'"
            :rules="{
              required: true,
              message: `${ $t('lang.ja') }${optionType[$route.params.type]}${ $t('form.noEmpty') }`,
              trigger: 'blur',
            }"
          >
            <el-input
              v-model="item['ja-jp']"
              :placeholder="$t('form.placeholder', { msg: $t('lang.ja') })"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item
            :prop="'options.' + index + '.fr-fr'"
            :rules="{
              required: true,
              message: `${ $t('lang.fr') }${optionType[$route.params.type]}${ $t('form.noEmpty') }`,
              trigger: 'blur',
            }"
          >
            <el-input
              v-model="item['fr-fr']"
              :placeholder="$t('form.placeholder', { msg: $t('lang.fr') })"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-button @click.prevent="updateOption(item)" v-if="item.id"
            >{{$t('content.update')}}</el-button
          >
          <el-button @click.prevent="createOption(item, index)" v-else
            >{{$t('content.create')}}</el-button
          >
        </el-col>
        <el-col :span="2">
          <el-button @click="onMock(item,index)">
            {{$t('content.fill')}}
          </el-button>
        </el-col>
        <el-col :span="2">
          <el-button @click.prevent="removeOption(item, index)">{{$t('content.delete')}}</el-button>
        </el-col>
      </el-row>
    </el-form-item>



    <!-- <el-form-item>
      <el-button type="primary" @click="submitForm('form')">创建</el-button>
      <el-button @click="addOption">{{
        `新增${optionType[$route.params.type]}`
      }}</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item> -->
  </el-form>
</template>

<script>
import Mock from 'mockjs'
export default {
  watch: {
    '$route.query': '$fetch',
  },
  data() {
    return {
      lang: ['zh-cn', 'en-us', 'ja-jp', 'fr-fr'],
      optionType: {
        shape: this.$t('commodity.shape'),
        theme: this.$t('commodity.theme'),
        category: this.$t('commodity.category'),
        technique: this.$t('commodity.technique')
      },
      form: {
        options: [
          {
            'zh-cn': '',
            'en-us': '',
            'ja-jp': '',
            'fr-fr': '',
          },
        ],
        optionsExamples: [
          {
            'zh-cn': '其他',
            'en-us': 'other',
            'ja-jp': 'その他',
            'fr-fr': 'Autres',
          },
        ],
      },
    }
  },
  async fetch() {
    const options = await this.$axios.$get(`/api/admin/commodity/options/${this.$route.params.type}`)
    if (options.data && options.data.length) {
      this.form.options = [
        ...options.data,
        {
          'zh-cn': '',
          'en-us': '',
          'ja-jp': '',
          'fr-fr': '',
        },
      ]
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // console.log('submitForm', this.form.options)
          const options = await this.$axios
            .$post(`/api/admin/commodity/options/${this.$route.params.type}/create`, this.form.options)
            .catch((error) => {
              this.$message({
                showClose: true,
                message: `${
                  this.optionType[this.$route.params.type]
                }，${ this.$t('content.create') }${ this.$t('content.fail') }!`,
                type: 'error',
              })
            })
          if (options.success) {
            this.$message({
              showClose: true,
              message: `${this.optionType[this.$route.params.type]}，${ this.$t('content.create') }${ this.$t('content.success') }`,
              type: 'success',
            })
          } else {
            this.$message({
              showClose: true,
              message: `${this.optionType[this.$route.params.type]}，${ this.$t('content.create') }${ this.$t('content.fail') }!`,
              type: 'error',
            })
          }
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      // console.log('formName', formName)
      this.$refs[formName].resetFields()
      this.$fetch()
    },

    addOption() {
      this.form.options.push({
        'zh-cn': '',
        'en-us': '',
        'ja-jp': '',
        'fr-fr': '',
      })
    },
    async createOption(item, index) {
      let isValidate = true
      this.$refs['form'].validateField(
        [
          'options.' + index + '.zh-cn',
          'options.' + index + '.en-us',
          'options.' + index + '.ja-jp',
          'options.' + index + '.fr-fr',
        ],
        (valid) => {
          if (valid) {
            isValidate = false
          }
        }
      )
      // console.log('isValidate', isValidate)
      if (isValidate) {
        const options = await this.$axios
          .$post(`/api/admin/commodity/options/${this.$route.params.type}/create`, [item])
          .catch((error) => {
            this.$message({
              showClose: true,
              message: `${this.typeText}${ this.$t('content.fail') }! ${error.response.data.message}`,
              type: 'error',
            })
          })
        if (options.success) {
          this.form.options.splice(index, 1, options.data[0])

          this.message('success', `${ this.$t('content.create') }${ this.$t('content.success') }!`)
        } else {
          this.message('error', `${ this.$t('content.create') }${ this.$t('content.fail') }!${options.message}`)
        }
      }
    },
    async updateOption(item) {
      // console.log('updateOption', item)
      if (!item.id) {
        this.form.options.splice(index, 1)
        return
      }
      const options = await this.$axios
        .$post(`/api/admin/commodity/options/${this.$route.params.type}/update`, item)
        .catch((error) => {
          this.message('error', `${error.response.data.message}`)
        })
      if (options.success) {
        this.message('success', `${ this.$t('content.update') }${ this.$t('content.success') }!`)
      } else {
        this.message('error', `${ this.$t('content.update') }${ this.$t('content.fail') }!`)
      }
    },
    async removeOption(item, index) {
      // console.log('removeOption', item)
      if (!item.id) {
        this.form.options.splice(index, 1)
        return
      }
      const options = await this.$axios
        .$post(`/api/admin/commodity/options/${this.$route.params.type}/delete`, item)
        .catch((error) => {
          this.message('error', `${error.response.data.message}`)
        })
      if (options.success) {
        this.form.options.splice(index, 1)
        this.message('success', `${ this.$t('content.delete') }${ this.$t('content.success') }!`)
      } else {
        this.message('error', `${ this.$t('content.delete') }${ this.$t('content.fail') }!`)
      }
    },
    message(type, msg) {
      this.$message({
        showClose: true,
        message: `${msg}`,
        type,
      })
    },
    onMock(item, index) {
      const zncn = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
      const enus = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
      const jajp = ["ゼロ", "いち", "に", "さん", "し", "ご", "ろく", "しち", "はち", "きゅう", "じゅう"];
      const frfr = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];
      const mock = {
          "zh-cn": `${zncn[Mock.mock('@integer(0, 9)')]} ${zncn[Mock.mock('@integer(0, 9)')]} ${zncn[Mock.mock('@integer(0, 9)')]}`,
          "en-us": `${enus[Mock.mock('@integer(0, 9)')]} ${enus[Mock.mock('@integer(0, 9)')]} ${enus[Mock.mock('@integer(0, 9)')]}`,
          "ja-jp": `${jajp[Mock.mock('@integer(0, 9)')]} ${jajp[Mock.mock('@integer(0, 9)')]} ${jajp[Mock.mock('@integer(0, 9)')]}`,
          "fr-fr": `${frfr[Mock.mock('@integer(0, 9)')]} ${frfr[Mock.mock('@integer(0, 9)')]} ${frfr[Mock.mock('@integer(0, 9)')]}`
        }
      this.form.options.splice(index, 1, mock)
    }
  },
}
</script>
