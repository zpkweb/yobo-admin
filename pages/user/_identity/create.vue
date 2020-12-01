<template>
  <div class="user-create">
    <el-form
      :model="userCreate"
      :rules="rules"
      ref="userCreate"
      label-width="100px"
      class="user-create-form"
    >
      <!-- <el-form-item label="用户身份" prop="identity">
        <el-checkbox-group v-model="userCreate.identity">
          <el-checkbox label="用户" name="identity"></el-checkbox>
          <el-checkbox label="艺术家" name="identity"></el-checkbox>
          <el-checkbox label="客服" name="identity"></el-checkbox>
          <el-checkbox label="管理员" name="identity"></el-checkbox>
        </el-checkbox-group>
      </el-form-item> -->

      <el-form-item label="姓氏" placeholder="请输入姓氏" prop="firstName">
        <el-input v-model="userCreate.firstName"></el-input>
      </el-form-item>
      <el-form-item label="姓名" placeholder="请输入姓名" prop="lastName">
        <el-input v-model="userCreate.lastName"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" placeholder="请输入邮箱" prop="email">
        <el-input v-model="userCreate.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" placeholder="请输入电话" prop="phone">
        <el-input v-model="userCreate.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" placeholder="请输入密码" prop="password">
        <el-input v-model="userCreate.password"></el-input>
      </el-form-item>

      <!-- <el-form-item label="活动区域" prop="region">
    <el-select v-model="userCreate.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item> -->

      <el-form-item>
        <el-button type="primary" @click="submitForm('userCreate')"
          >创建</el-button
        >
        <el-button @click="resetForm('userCreate')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userCreate: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        identity: [],
      },
      rules: {
        firstName: [{ required: true, message: '请输入姓氏', trigger: 'blur' }],
        lastName: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入电话', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],

        identity: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change',
          },
        ],
      },
    }
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
</style>
