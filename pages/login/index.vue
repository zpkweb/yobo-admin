<template>
  <el-form
    :model="userForm"
    status-icon
    :rules="rules"
    ref="userForm"
    label-width="80px"
    class="login"
  >
    <h3 class="login-title">yobo 后台管理</h3>

    <el-form-item class="login-item" label="账号" prop="name">
      <el-input v-model="userForm.name" placeholder="请输入用户名/邮箱/手机"></el-input>
    </el-form-item>
    <el-form-item class="login-item" label="密码" prop="pass">
      <el-input
        type="password"
        v-model="userForm.pass"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-button class="login-btn" @click="submitForm('userForm')"
      >登录</el-button
    >
  </el-form>
</template>
<script>
export default {
  layout: 'login',
  data() {
    return {
      userForm: {
        name: '',
        pass: '',
      },
      rules: {
        name: [{ required: true, message: '请输入用户名/邮箱/手机', trigger: 'blur' }],
        pass: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  mounted(){
    this.$localForage.removeItem('user')
    window.addEventListener('keydown',this.keyDown)
  },
  destroyed(){
    window.removeEventListener('keydown',this.keyDown,false);
  },
  methods: {
    async submitForm(formName) {
      const valid = await this.$refs[formName].validate()
      if (valid) {
        const login = await this.$axios.$post('/api/admin/user/login', {
          name: this.userForm.name,
          password: this.userForm.pass,
        })
        if (login.success) {
          // 用户登录 缓存
          console.log("login", login.data)
          await this.$localForage.setItem('user', login.data)
          this.$notify({
            title: `欢迎您，${login.data.name}`,
            // message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'),
            duration: 1500,
            offset: 70
          })
          this.$router.push('/')
        } else {
          this.$message({
            showClose: true,
            message: `${login.message}`,
            type: 'error',
          })
        }
      } else {
        console.log('error submit!!')
        return false
      }
    },
    keyDown(e){
        //如果是回车则执行登录方法
      if(e.keyCode == 13){
        this.submitForm('userForm');
      }
    }
  },
}
</script>

<style scoped>
.login {
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translate(0, -50%);
  width: 330px;
  padding: 50px;
  color: #fff;
}
.login::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}
.login-title {
  margin-bottom: 30px;
}

.login-btn {
  margin-top: 30px;
}
</style>
