<template>
  <div class="user-create">
    <el-form
      ref="userCreate"
      :model="userCreate"
      :rules="rules"
      label-width="100px"
      class="user-create-form"
    >
      <el-form-item :label="$t('user.avatar')" prop="avatar">
        <el-upload
          v-model="userCreate.avatar"
          class="avatar-uploader"
          :action="`${$config.origin}/api/upload/images`"
          :data="{ type: 'avatar' }"
          :show-file-list="false"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
        >
          <img
            v-if="userCreate.avatar"
            :src="userCreate.avatar"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <div slot="tip" class="el-upload__tip">
            用户头像，请上传 正方形 比例的图片，且不超过2M
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item :label="$t('user.name')" prop="name">
        <el-input
          v-model="userCreate.name"
          :placeholder="$t('form.placeholder', { msg: $t('user.name') })"
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

      <el-form-item :label="$t('user.identity')" prop="identityList">
        <el-checkbox-group v-model="identityListCheck">
          <el-checkbox :label="item.value" v-for="item in identityLists" :key="item">{{item.label}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>


      <el-form-item>
        <el-button
          v-if="isCreate"
          type="primary"
          @click="submitForm('userCreate')"
          icon="el-icon-circle-plus-outline"
        >
          {{ $t('content.create') }}
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
    </el-form>
  </div>
</template>
<script>
import Mock from 'mockjs'

export default {
  async fetch() {
    // console.log('fetch this.$refs.userCreate', this.$refs.userCreate)
    // this.$refs.userCreate.resetFields()

    if (this.$route.query && this.$route.query.userId) {
      this.userId = this.$route.query.userId

      const user = await this.$axios.$get('/api/admin/user', {
        params: {
          userId: this.userId,
        },
      }).catch((err) => {
        // console.log(err)
      })

      if (user.success) {
        this.userCreate = Object.assign(this.userCreate, user.data)
        this.identityListCheck = user.data.identityList;
        this.type = 'edit'
        this.typeText = this.$t('content.update')
        this.isCreate = false;
        this.rules.password[0].required = false
      }else{

        this.$message({
          showClose: true,
          message: `${
            user.message
          }`,
          type: 'error',
        })
      }
    }
  },
  data() {
    // var validateEmail = (rule, value, callback) => {
    //   if (!value && !this.userCreate.phone) {
    //     callback(new Error('邮箱和手机必须输入一项'))
    //   } else {
    //     if (!this.userCreate.phone) {
    //       this.$refs.userCreate.clearValidate('phone')
    //     }
    //     callback()
    //   }
    // }
    // var validatePhone = (rule, value, callback) => {
    //   if (!this.userCreate.email && !value) {
    //     callback(new Error('邮箱和手机必须输入一项'))
    //   } else {
    //     if (!this.userCreate.email) {
    //       this.$refs.userCreate.clearValidate('email')
    //     }
    //     callback()
    //   }
    // }
    return {
      type: 'create', // create edit
      typeText: this.$t('content.create'),
      isCreate: true,
      userId: '',
      userCreate: {
        avatar: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        identity: [],
      },
      rules: {
        // name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
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

        // identity: [
        //   {
        //     type: 'array',
        //     required: true,
        //     message: '请至少选择一个身份',
        //     trigger: 'change',
        //   },
        // ],

      },
      identityLists: [{
        label: '管理员',
        value: 2
      }, {
        label: '客服',
        value: 3
      }],
      identityListCheck: []
    }
  },
  // watchQuery: ['userId','sellerId'],
  watch: {
    '$route.query': '$fetch',
  },
  methods: {
    submitForm(userCreate) {
      this.$refs[userCreate].validate(async (valid) => {
        if (valid) {
          let data;
          if(this.identityListCheck && this.identityListCheck.length) {
            for(let item of this.identityLists) {
              let check = false;
              for(let checkItem of this.identityListCheck) {
                if(item.value == checkItem) {
                  check = true;
                }
              }
              item.check = check;
            }
          }
          if (this.isCreate) {
            data = await this.$axios
              .$post('/api/admin/user/register', {
                identity: this.$route.params.identity,
                avatar: this.userCreate.avatar,
                name: this.userCreate.name,
                email: this.userCreate.email,
                phone: this.userCreate.phone,
                password: this.userCreate.password,
                identityList: this.identityLists,
              })
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
            data = await this.$axios.$post('/api/admin/user/update', {
              userId: this.userId,
              avatar: this.userCreate.avatar,
              name: this.userCreate.name,
              email: this.userCreate.email,
              phone: this.userCreate.phone,
              password: this.userCreate.password,
              identityList: this.identityLists,

            })
          }
          if (data.status === 200) {
            this.$message({
              showClose: true,
              message: `${this.userCreate.name}，${this.typeText}${this.$t(
                'content.success'
              )}`,
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
          // console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(userCreate) {
      this.$refs[userCreate].resetFields()
    },
    onMock() {
      this.userCreate = {
        avatar: '',
        name: Mock.mock('@cname'),
        email: Mock.mock('@email'),
        password: '123',
      }
    },
    handleSuccess(res, file) {
      // this.userCreate.avatar = URL.createObjectURL(file.raw);
      this.userCreate.avatar = res.data.src
    },
    beforeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('上传的图片大小不能超过 2MB!')
      }
      return isLt2M
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
