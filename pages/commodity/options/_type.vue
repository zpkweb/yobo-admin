<template>
  <el-form
    :model="form"
    ref="form"
    label-width="100px"
    class="form"
  >
    <el-form-item
      v-for="(item, index) in form.options"
      :label="`${optionType[$route.params.type]}${index+1}`"
      :key="item.key"
      :prop="'options.' + index + '.value'"
      :rules="{
        required: true,
        message: `${optionType[$route.params.type]}不能为空`,
        trigger: 'blur',
      }"
    >
      <el-row :gutter="20">
        <el-col :span="5">
          <el-input v-model="item.value" placeholder="请输入汉语"></el-input>
        </el-col>
        <el-col :span="5">
          <el-input v-model="item.value" placeholder="请输入英语"></el-input>
        </el-col>
        <el-col :span="5">
          <el-input v-model="item.value" placeholder="请输入日语"></el-input>
        </el-col>
        <el-col :span="5">
          <el-input v-model="item.value" placeholder="请输入法语"></el-input>
        </el-col>

        <el-col  :span="2">
          <el-button @click.prevent="removeOption(item)">删除</el-button>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')"
        >提交</el-button
      >
      <el-button @click="addOption">{{`新增${optionType[$route.params.type]}`}}</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  watch: {
    '$route.query': '$fetch',
  },
  data() {
    return {
      optionType: {
        'shape': '形状',
        'theme': '主题',
        'category': '类别',
        'technique': '手法'
      },
      form: {
        options: [
          {
            'zh-cn': '',
            'en-us': '',
            'ja-jp': '',
            'fr-fr': ''
          },
        ]
      }
    }
  },
  fetch() {

  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    removeOption(item) {
      var index = this.form.options.indexOf(item)
      if (index !== -1) {
        this.form.options.splice(index, 1)
      }
    },
    addOption() {
      this.form.options.push({
        'zh-cn': '',
        'en-us': '',
        'ja-jp': '',
        'fr-fr': '',
        key: Date.now(),
      })
    },
  },
}
</script>
