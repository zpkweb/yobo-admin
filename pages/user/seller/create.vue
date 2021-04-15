<template>
  <div class="user-create">
    <el-form
      ref="userCreate"
      :model="userCreate"
      :rules="rules"
      label-width="100px"
      class="user-create-form"
    >
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item :label="$t('user.state')" prop="identity">
            <el-select
              v-model="userCreate.state"
              :placeholder="
                $t('form.selectPlaceholder', { msg: $t('user.state') })
              "
            >
              <el-option
                v-for="item in stateOptions"
                :key="item.value"
                :label="`${item.value} ${item.label}`"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item :label="$t('user.type')" prop="identity">
            <el-select
              v-model="userCreate.type"
              :placeholder="
                $t('form.selectPlaceholder', { msg: $t('user.type') })
              "
            >
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="`${item.value} ${item.label}`"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-button
            v-if="isCreate"
            type="primary"
            icon="el-icon-circle-plus-outline"
            @click="submitForm('userCreate')"
          >
            {{ $t('content.create') }}
          </el-button>

          <el-button
            v-else
            type="primary"
            icon="el-icon-check"
            @click="submitForm('userCreate')"
          >
            {{ $t('content.update') }}
          </el-button>
          <el-button icon="el-icon-check" @click="onMock">
            {{ $t('content.fill') }}
          </el-button>
          <el-button
            icon="el-icon-circle-close"
            @click="resetForm('userCreate')"
            >{{ $t('content.clear') }}</el-button
          >
        </el-col>
      </el-row>

      <el-form-item :label="$t('user.avatar')" prop="avatar">
        <el-upload
          v-model="userCreate.avatar"
          class="avatar-uploader"
          :action="`${$config.origin}/api/upload/images`"
          :data="{ type: 'avatar' }"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img
            v-if="userCreate.avatar"
            :src="userCreate.avatar"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <div slot="tip" class="el-upload__tip">艺术家头像，请上传 正方形 的图片</div>
        </el-upload>
      </el-form-item>


      <el-form-item :label="$t('user.label')" prop="tags">
        <el-tag
          :key="tag"
          v-for="tag in userCreate.tags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
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
      inputVisible: false,
      inputValue: '',
      typeText: this.$t('content.create'),
      isCreate: true,
      sellerId: '',
      // 状态：0: 审核, 1: 通过, 2: 拒绝, 3: 禁用, 4: 注销
      stateOptions: [
        {
          value: '0',
          label: this.$t('content.audit'),
        },
        {
          value: '1',
          label: this.$t('content.agree'),
        },
        {
          value: '2',
          label: this.$t('content.reject'),
        },
        {
          value: '3',
          label: this.$t('content.disable'),
        },
        {
          value: '4',
          label: this.$t('content.logoff'),
        },
      ],
      typeOptions: [
        {
          value: '0',
          label: this.$t('user.seller.typeOptions.painter'),
        },
        {
          value: '1',
          label: this.$t('user.seller.typeOptions.sculptor'),
        },
      ],
      userCreate: {
        state: 1,
        type: 0,
        avatar: '',
        tags: [],
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
        // firstname: [{ required: true, message: '请输入姓氏', trigger: 'blur' }],
        // lastname: [{ required: true, message: '请输入名字', trigger: 'blur' }],
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
      this.sellerId = this.$route.query.sellerId
      const user = await this.$axios.$get('/api/admin/user/seller', {
        params: {
          sellerId: this.sellerId,
        },
      })
      if (user.success) {
        this.userCreate = Object.assign(this.userCreate, {
          ...user.data,
          ...user.data.user,
          ...user.data.metadata,
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
          try {
            if (this.isCreate) {
              // 用户申请成为艺术家 /api/user/seller/apply
              // data = await this.$axios.$post('/api/user/seller/apply', this.userCreate)

              // 管理员创建艺术家 /api/admin/user/register

              data = await this.$axios
                .$post('/api/admin/user/register', {
                  identity: 'seller',
                  typeName: this.typeOptions[this.userCreate.type].label,
                  ...this.userCreate,
                })

              // data = await this.$axios.$post('/api/user/seller/apply', {
              //   identity: this.$route.params.identity,
              //   name: this.userCreate.name,
              //   email: this.userCreate.email,
              //   phone: this.userCreate.phone,
              //   password: this.userCreate.password,
              // })
            } else {
              data = await this.$axios.$post('/api/admin/user/seller/update', {
                typeName: this.typeOptions[this.userCreate.type].label,
                ...this.userCreate,
              })
            }
            if(data.success) {
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
            }else{
              this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}`,
              type: 'error',
            })
            }

          } catch (error) {
            console.log("error", error)
            this.$message({
              showClose: true,
              message: `${this.typeText}${this.$t('content.fail')}`,
              type: 'error',
            })
          }
          // if (data.success) {
          //   this.$message({
          //     showClose: true,
          //     message: `${this.userCreate.firstname}${this.userCreate.lastname}，${this.typeText}成功`,
          //     type: 'success',
          //   })
          //   if (this.isCreate) {
          //     this.$refs[userCreate].resetFields()
          //   }
          // } else {
          //   this.$message({
          //     showClose: true,
          //     message: `${this.typeText}失败!${data.message}`,
          //     type: 'error',
          //   })
          // }
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
        avatar: '',
        state: 1,
        type: 0,
        tags: [],
        firstname: Mock.mock('@cfirst'),
        lastname: Mock.mock('@clast'),
        email: Mock.mock('@email'),
        phone: '',
        password: '123',
        country: Mock.mock('@province'),
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
    handleAvatarSuccess(res, file) {
      console.log("handleAvatarSuccess", res, file)
      // this.userCreate.avatar = URL.createObjectURL(file.raw);
      this.userCreate.avatar = res.data.src
    },
    beforeAvatarUpload(file) {
      console.log("beforeAvatarUpload", file)
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M;
      // return isLt2M
    },
    handleClose(tag) {
        this.userCreate.tags.splice(this.userCreate.tags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.userCreate.tags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
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

.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

