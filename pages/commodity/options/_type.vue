<template>
  <el-form :model="form" ref="form" label-width="100px" class="form">
    <el-form-item
      v-for="item in form.optionsExamples"
      :label="`添加${optionType[$route.params.type]}示例`"
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
            新增
          </el-button>
        </el-col>
        <el-col :span="2">
           <el-button @click="resetForm('form')">重置</el-button>
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
              message: `汉语${optionType[$route.params.type]}不能为空`,
              trigger: 'blur',
            }"
          >
            <el-input v-model="item['zh-cn']" placeholder="请输入汉语">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item
            :prop="'options.' + index + '.en-us'"
            :rules="{
              required: true,
              message: `英语${optionType[$route.params.type]}不能为空`,
              trigger: 'blur',
            }"
          >
            <el-input
              v-model="item['en-us']"
              placeholder="请输入英语"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item
            :prop="'options.' + index + '.ja-jp'"
            :rules="{
              required: true,
              message: `日语${optionType[$route.params.type]}不能为空`,
              trigger: 'blur',
            }"
          >
            <el-input
              v-model="item['ja-jp']"
              placeholder="请输入日语"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item
            :prop="'options.' + index + '.fr-fr'"
            :rules="{
              required: true,
              message: `法语${optionType[$route.params.type]}不能为空`,
              trigger: 'blur',
            }"
          >
            <el-input
              v-model="item['fr-fr']"
              placeholder="请输入法语"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-button @click.prevent="updateOption(item)" v-if="item.id"
            >更新</el-button
          >
          <el-button @click.prevent="createOption(item, index)" v-else
            >添加</el-button
          >
        </el-col>
        <el-col :span="2">
          <el-button @click.prevent="removeOption(item, index)">删除</el-button>
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
export default {
  watch: {
    '$route.query': '$fetch',
  },
  data() {
    return {
      lang: ['zh-cn', 'en-us', 'ja-jp', 'fr-fr'],
      optionType: {
        shape: '形状',
        theme: '主题',
        category: '类别',
        technique: '手法',
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
    const options = await this.$axios.$get(`/api/commodity/options/${this.$route.params.type}`)
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
    console.log(this.form)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          console.log('submitForm', this.form.options)
          const options = await this.$axios
            .$post(`/api/admin/commodity/options/${this.$route.params.type}/create`, this.form.options)
            .catch((error) => {
              this.$message({
                showClose: true,
                message: `${
                  this.optionType[this.$route.params.type]
                }，创建失败!`,
                type: 'error',
              })
            })
          if (options.success) {
            this.$message({
              showClose: true,
              message: `${this.optionType[this.$route.params.type]}，创建成功`,
              type: 'success',
            })
          } else {
            this.$message({
              showClose: true,
              message: `${this.optionType[this.$route.params.type]}，创建失败!`,
              type: 'error',
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      console.log('formName', formName)
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
      console.log('isValidate', isValidate)
      if (isValidate) {
        const options = await this.$axios
          .$post(`/api/admin/commodity/options/${this.$route.params.type}/create`, [item])
          .catch((error) => {
            this.$message({
              showClose: true,
              message: `${this.typeText}失败! ${error.response.data.message}`,
              type: 'error',
            })
          })
        if (options.success) {
          this.form.options.splice(index, 1, options.data[0])

          this.message('success', '添加成功!')
        } else {
          this.message('error', `添加失败!${options.message}`)
        }
      }
    },
    async updateOption(item) {
      console.log('updateOption', item)
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
        this.message('success', '更新成功!')
      } else {
        this.message('error', '更新失败!')
      }
    },
    async removeOption(item, index) {
      console.log('removeOption', item)
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
        this.message('success', '，删除成功!')
      } else {
        this.message('error', '删除失败!')
      }
    },
    message(type, msg) {
      this.$message({
        showClose: true,
        message: `${msg}`,
        type,
      })
    },
  },
}
</script>
