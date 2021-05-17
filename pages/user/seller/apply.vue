<template>
  <div class="user-create">
    <el-form
      :model="userCreate"
      :rules="rules"
      ref="userCreate"
      label-width="100px"
      class="user-create-form"
    >
      <el-form-item>
        <el-button
          v-if="isCreate"
          type="primary"
          @click="submitForm('userCreate')"
          icon="el-icon-circle-plus-outline"
        >
          {{ $t('content.apply') }}
        </el-button>

        <el-button
          v-else
          type="primary"
          @click="submitForm('userCreate')"
          icon="el-icon-check"
        >
          {{ $t('content.update') }}
        </el-button>
        <el-button @click="onMock" icon="el-icon-check">
          {{ $t('content.fill') }}
        </el-button>
        <el-button
          @click="resetForm('userCreate')"
          icon="el-icon-circle-close"
          >{{ $t('content.clear') }}</el-button
        >
      </el-form-item>

      <el-form-item :label="$t('user.firstName')" prop="firstname">
        <el-input
          v-model="userCreate.firstname"
          :placeholder="$t('form.placeholder', { msg: $t('user.firstName') })"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.lastName')" prop="lastname">
        <el-input
          v-model="userCreate.lastname"
          :placeholder="$t('form.placeholder', { msg: $t('user.lastName') })"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.email')" prop="email">
        <el-input
          v-model="userCreate.email"
          :placeholder="$t('form.placeholder', { msg: $t('user.email') })"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.phone')" prop="phone">
        <el-input
          v-model="userCreate.phone"
          :placeholder="$t('form.placeholder', { msg: $t('user.phone') })"
        ></el-input>
      </el-form-item>

      <el-form-item :label="$t('user.password')" prop="password">
        <el-input
          v-model="userCreate.password"
          :placeholder="$t('form.placeholder', { msg: $t('user.password') })"
        ></el-input>
      </el-form-item>

      <el-form-item :label="$t('user.gender')" prop="gender">
        <el-input
          v-model="userCreate.gender"
          :placeholder="$t('form.placeholder', { msg: $t('user.gender') })"
        ></el-input>
      </el-form-item>

      <el-form-item :label="$t('user.country')" prop="country">
        <el-input
          v-model="userCreate.country"
          :placeholder="$t('form.placeholder', { msg: $t('user.country') })"
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.language')" prop="language">
        <el-input
          v-model="userCreate.language"
          :placeholder="$t('form.placeholder', { msg: $t('user.language') })"
        ></el-input>
      </el-form-item>

      <el-form-item prop="profile">
        <el-input
          type="textarea"
          v-model="userCreate.profile"
          :placeholder="$t('form.placeholder', { msg: $t('user.profile') })"
        ></el-input>
      </el-form-item>
      <el-form-item prop="isFullTime">
        <el-input
          type="textarea"
          v-model="userCreate.isFullTime"
          :placeholder="$t('user.seller.isFullTime')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="onlineSell">
        <el-input
          type="textarea"
          v-model="userCreate.onlineSell"
          :placeholder="$t('user.seller.onlineSell')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="sold">
        <el-input
          type="textarea"
          v-model="userCreate.sold"
          :placeholder="$t('user.seller.sold')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="channel">
        <el-input
          type="textarea"
          v-model="userCreate.channel"
          :placeholder="$t('user.seller.channel')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="gallery">
        <el-input
          type="textarea"
          v-model="userCreate.gallery"
          :placeholder="$t('user.seller.gallery')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="medium">
        <el-input
          type="textarea"
          v-model="userCreate.medium"
          :placeholder="$t('user.seller.medium')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="galleryInfo">
        <el-input
          type="textarea"
          v-model="userCreate.galleryInfo"
          :placeholder="$t('user.seller.galleryInfo')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="recommend">
        <el-input
          type="textarea"
          v-model="userCreate.recommend"
          :placeholder="$t('user.seller.recommend')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="prize">
        <el-input
          type="textarea"
          v-model="userCreate.prize"
          :placeholder="$t('user.seller.prize')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="website">
        <el-input
          type="textarea"
          v-model="userCreate.website"
          :placeholder="$t('user.seller.website')"
        ></el-input>
      </el-form-item>

      <el-form-item prop="findUs">
        <el-input
          type="textarea"
          v-model="userCreate.findUs"
          :placeholder="$t('user.seller.findUs')"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Mock from 'mockjs'
export default {
  watchQuery: ['sellerId'],
  data() {
    // var validateEmail = (rule, value, callback) => {
    //   if (!value && !this.userCreate.phone) {
    //     callback(new Error('邮箱和电话必须输入一项'))
    //   } else {
    //     if (!this.userCreate.phone) {
    //       this.$refs.userCreate.clearValidate('phone')
    //     }
    //     callback()
    //   }
    // }
    // var validatePhone = (rule, value, callback) => {
    //   if (!this.userCreate.email && !value) {
    //     callback(new Error('邮箱和电话必须输入一项'))
    //   } else {
    //     if (!this.userCreate.email) {
    //       this.$refs.userCreate.clearValidate('email')
    //     }
    //     callback()
    //   }
    // }
    return {
      type: 'create', // create edit
      typeText: this.$t('content.apply'),
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
        firstname: [
          {
            required: true,
            message: this.$t('form.placeholder', {
              msg: this.$t('user.firstName'),
            }),
            trigger: 'blur',
          },
        ],
        lastname: [
          {
            required: true,
            message: this.$t('form.placeholder', {
              msg: this.$t('user.lastName'),
            }),
            trigger: 'blur',
          },
        ],
        email: [
          {
            required: true,
            message: this.$t('form.placeholder', {
              msg: this.$t('user.email'),
            }),
            trigger: 'blur',
          },
        ],
        // phone: [{ validator: validatePhone, trigger: 'blur' }],
        password: [
          {
            required: true,
            message: this.$t('form.placeholder', {
              msg: this.$t('user.password'),
            }),
            trigger: 'blur',
          },
        ],
      },
    }
  },
  async fetch() {
    // console.log('fetch this.$refs.userCreate', this.$refs.userCreate)
    // this.$refs.userCreate.resetFields()

    if (this.$route.query && this.$route.query.sellerId) {
      console.log('create', this.$route.query)
      this.sellerId = this.$route.query.sellerId

      const user = await this.$axios.$get('/api/admin/seller', {
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
        this.typeText = this.$t('content.update')
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
              '/api/admin/seller/update',
              this.userCreate
            )
          }

          if (data.success) {
            this.$message({
              showClose: true,
              message: `${this.userCreate.firstname}${
                this.userCreate.lastname
              }，${this.typeText}${this.$t('content.success')}`,
              type: 'success',
            })
            if (this.isCreate) {
              this.$refs[userCreate].resetFields()
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
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(userCreate) {
      this.$refs[userCreate].resetFields()
    },
    onMock() {
      this.userCreate = {
        firstname: Mock.mock('@cfirst'),
        lastname: Mock.mock('@clast'),
        email: Mock.mock('@email'),
        phone: '',
        password: '123',
        country: Mock.mock('@county(true)'),
        language: this.$i18n.locales.filter(
          (i) => i.code == this.$i18n.locale
        )[0].name,
        profile: Mock.mock('@cparagraph'),
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

        findUs: '',
      }
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

