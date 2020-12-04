<template>
  <div class="user-create">
    <el-form
      :model="userCreate"
      :rules="rules"
      ref="userCreate"
      label-width="100px"
      class="user-create-form"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="userCreate.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="userCreate.email"
          placeholder="请输入邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input
          v-model="userCreate.phone"
          placeholder="请输入手机"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="userCreate.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          v-if="isCreate"
          type="primary"
          @click="submitForm('userCreate')"
        >
          创建
        </el-button>

        <el-button v-else type="primary" @click="submitForm('userCreate')">
          更新
        </el-button>
        <el-button @click="resetForm('userCreate')">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  // watchQuery: ['userId','sellerId'],
  watch: {
    '$route.query': '$fetch',
  },
  data() {
    var validateEmail = (rule, value, callback) => {
      if (!value && !this.userCreate.phone) {
        callback(new Error('邮箱和手机必须输入一项'))
      } else {
        if (!this.userCreate.phone) {
          this.$refs.userCreate.clearValidate('phone')
        }
        callback()
      }
    }
    var validatePhone = (rule, value, callback) => {
      if (!this.userCreate.email && !value) {
        callback(new Error('邮箱和手机必须输入一项'))
      } else {
        if (!this.userCreate.email) {
          this.$refs.userCreate.clearValidate('email')
        }
        callback()
      }
    }
    return {
      type: 'create', // create edit
      typeText: '创建',
      isCreate: true,
      userId: '',
      userCreate: {
        name: '',
        email: '',
        phone: '',
        password: '',
        identity: [],
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        email: [{ required: true, validator: validateEmail, trigger: 'blur' }],
        phone: [{ validator: validatePhone, trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],

        // identity: [
        //   {
        //     type: 'array',
        //     required: true,
        //     message: '请至少选择一个身份',
        //     trigger: 'change',
        //   },
        // ],
      },
    }
  },
  async fetch() {
    // console.log('fetch this.$refs.userCreate', this.$refs.userCreate)
    // this.$refs.userCreate.resetFields()

    if (this.$route.query && this.$route.query.userId) {
      console.log('create', this.$route.query)
      this.userId = this.$route.query.userId

      const user = await this.$axios.$get('/api/admin/user', {
        params: {
          userId: this.userId,
        },
      })
      console.log('find user', user)
      if (user.success) {
        this.userCreate = Object.assign(this.userCreate, user.data)
        this.type = 'edit'
        this.typeText = '更新'
        this.isCreate = false
        this.rules.password[0].required = false
      }
    }
  },
  methods: {
    submitForm(userCreate) {
      this.$refs[userCreate].validate(async (valid) => {
        if (valid) {
          let data
          if (this.isCreate) {
            data = await this.$axios.$post('/api/admin/user/register', {
              identity: this.$route.params.identity,
              name: this.userCreate.name,
              email: this.userCreate.email,
              phone: this.userCreate.phone,
              password: this.userCreate.password,
            })
          } else {
            data = await this.$axios.$post('/api/admin/user/update', {
              userId: this.userId,
              name: this.userCreate.name,
              email: this.userCreate.email,
              phone: this.userCreate.phone,
              password: this.userCreate.password,
            })
          }

          if (data.success) {
            this.$message({
              showClose: true,
              message: `${this.userCreate.name}，${this.typeText}成功`,
              type: 'success',
            })
            if (this.isCreate) {
              this.$refs[userCreate].resetFields()
            }
          } else {
            this.$message({
              showClose: true,
              message: `${this.typeText}失败!${data.message}`,
              type: 'error',
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(userCreate) {
      this.$refs[userCreate].resetFields()
    },
  },
}
</script>
<style scoped>
.user-create {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-create-form {
  width: 90%;
}
</style>
