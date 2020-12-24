<template>
  <div class="identityList">
    <el-table
      :data="identityList"
      style="width: 100%">
      <el-table-column
        prop="name"
        :label="$t('content.identityName')"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ename"
        :label="$t('content.identitySign')"
        width="180">
      </el-table-column>
      <el-table-column
        prop="index"
        :label="$t('content.identityCode')">
      </el-table-column>
    </el-table>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-button type="primary" @click="createIdentityList" v-if="isCreate">
          创建
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCreate: false,
      identityList: []
    }
  },
  async fetch() {
    const identityList = await this.$axios.$get('/api/admin/identityList')
    console.log("identityList", identityList.data)
    if(identityList.success) {
      this.identityList = identityList.data;
    }else{
      this.isCreate = true;
      this.identityList = this.$store.state.identityList;
    }
  },
  methods: {
    createIdentityList() {
      console.log("createIdentityList")
    }
  }
}
</script>
