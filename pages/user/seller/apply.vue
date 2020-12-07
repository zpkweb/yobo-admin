<template>
  <div class="user-create">
    <el-form
      :model="userCreate"
      :rules="rules"
      ref="userCreate"
      label-width="100px"
      class="user-create-form"
    >
      <h3>用户申请成为艺术家</h3>

      <el-form-item label="姓氏" prop="firstname">
        <el-input
          v-model="userCreate.firstname"
          placeholder="请输入姓氏"
        ></el-input>
      </el-form-item>
      <el-form-item label="名字" prop="lastname">
        <el-input
          v-model="userCreate.lastname"
          placeholder="请输入名字"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="userCreate.email"
          placeholder="请输入邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input
          v-model="userCreate.phone"
          placeholder="请输入电话"
        ></el-input>
      </el-form-item>

      <el-form-item prop="country">
        <el-input
          v-model="userCreate.country"
          placeholder="请输入国家"
        ></el-input>
      </el-form-item>
      <el-form-item prop="language">
        <el-input
          v-model="userCreate.language"
          placeholder="请输入语言"
        ></el-input>
      </el-form-item>

      <el-form-item prop="findUs">
        <el-input
          type="textarea"
          v-model="userCreate.findUs"
          placeholder="您是如何发现我们的"
        ></el-input>
      </el-form-item>

      <el-form-item prop="isFullTime">
        <el-input
          type="textarea"
          v-model="userCreate.isFullTime"
          placeholder="您是一个全职的专业艺术家么？"
        ></el-input>
      </el-form-item>

      <el-form-item prop="onlineSell">
        <el-input
          type="textarea"
          v-model="userCreate.onlineSell"
          placeholder="售出的作品中，网上售出的比例占多少？"
        ></el-input>
      </el-form-item>

      <el-form-item prop="sold">
        <el-input
          type="textarea"
          v-model="userCreate.sold"
          placeholder="您在过去一年里售出多少件自己的作品？"
        ></el-input>
      </el-form-item>

      <el-form-item prop="channel">
        <el-input
          type="textarea"
          v-model="userCreate.channel"
          placeholder="如果您在网上售出过作品，是通过什么渠道呢？"
        ></el-input>
      </el-form-item>

      <el-form-item prop="gallery">
        <el-input
          type="textarea"
          v-model="userCreate.gallery"
          placeholder="如有其他画廊已合作，是哪一家（方便我们更全面了解您）"
        ></el-input>
      </el-form-item>

      <el-form-item prop="medium">
        <el-input
          type="textarea"
          v-model="userCreate.medium"
          placeholder="主要媒介"
        ></el-input>
      </el-form-item>

      <el-form-item prop="galleryInfo">
        <el-input
          type="textarea"
          v-model="userCreate.galleryInfo"
          placeholder="您是画廊代表人吗？请告知您的画廊名称，城市，国家"
        ></el-input>
      </el-form-item>

      <el-form-item prop="recommend">
        <el-input
          type="textarea"
          v-model="userCreate.recommend"
          placeholder="最值得一看的展览/画廊/机构名称，城市，国家"
        ></el-input>
      </el-form-item>

      <el-form-item prop="prize">
        <el-input
          type="textarea"
          v-model="userCreate.prize"
          placeholder="最引人注目的奖项/奖项名称，获得年份"
        ></el-input>
      </el-form-item>

      <el-form-item prop="website">
        <el-input
          type="textarea"
          v-model="userCreate.website"
          placeholder="连接到网站"
        ></el-input>
      </el-form-item>

      <el-form-item prop="profile">
        <el-input
          type="textarea"
          v-model="userCreate.profile"
          placeholder="用户简介"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          v-if="isCreate"
          type="primary"
          @click="submitForm('userCreate')"
          icon="el-icon-circle-plus-outline"
        >
          申请
        </el-button>

        <el-button v-else type="primary" @click="submitForm('userCreate')" icon="el-icon-check">
          更新
        </el-button>
        <el-button @click="resetForm('userCreate')" icon="el-icon-circle-close">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  watchQuery: ['sellerId'],
  data() {
    var validateEmail = (rule, value, callback) => {
      if (!value && !this.userCreate.phone) {
        callback(new Error('邮箱和电话必须输入一项'))
      } else {
        if (!this.userCreate.phone) {
          this.$refs.userCreate.clearValidate('phone')
        }
        callback()
      }
    }
    var validatePhone = (rule, value, callback) => {
      if (!this.userCreate.email && !value) {
        callback(new Error('邮箱和电话必须输入一项'))
      } else {
        if (!this.userCreate.email) {
          this.$refs.userCreate.clearValidate('email')
        }
        callback()
      }
    }
    return {
      type: 'create', // create edit
      typeText: '申请',
      isCreate: true,
      sellerId: '',
      userCreate: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        country: '',
        language: '',
        findUs: '',
        isFullTime: '',
        onlineSell: '',
        sold: '',
        channel: '',
        gallery: '',
        medium: '',
        galleryInfo: '',
        recommend: '',
        prize: '',
        website: '',
        profile: '',
      },
      rules: {
        firstname: [{ required: true, message: '请输入姓氏', trigger: 'blur' }],
        lastname: [{ required: true, message: '请输入名字', trigger: 'blur' }],
        email: [{ required: true, validator: validateEmail, trigger: 'blur' }],
        phone: [{ validator: validatePhone, trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  async fetch() {
    // console.log('fetch this.$refs.userCreate', this.$refs.userCreate)
    // this.$refs.userCreate.resetFields()

    if (this.$route.query && this.$route.query.sellerId) {
      console.log('create', this.$route.query)
      this.sellerId = this.$route.query.sellerId

      const user = await this.$axios.$get('/api/admin/user/seller', {
        params: {
          sellerId: this.sellerId,
        },
      })
      console.log('find user', user)
      if (user.success) {
        this.userCreate = Object.assign(this.userCreate, {
          ...user.data,
          ...user.data.seller,
          ...user.data.sellerMetadata,
        })

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
            // 用户申请成为艺术家 /api/user/seller/apply
            data = await this.$axios.$post(
              '/api/user/seller/apply',
              this.userCreate
            )

            // 管理员创建艺术家 /api/admin/user/register
            // data = await this.$axios.$post('/api/admin/user/register', this.userCreate)

            // data = await this.$axios.$post('/api/user/seller/apply', {
            //   identity: this.$route.params.identity,
            //   name: this.userCreate.name,
            //   email: this.userCreate.email,
            //   phone: this.userCreate.phone,
            //   password: this.userCreate.password,
            // })
          } else {
            data = await this.$axios.$post(
              '/api/admin/user/seller/update',
              this.userCreate
            )
          }

          if (data.success) {
            this.$message({
              showClose: true,
              message: `${this.userCreate.firstname}${this.userCreate.lastname}，${this.typeText}成功`,
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

