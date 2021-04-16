<template>
  <div class="identityList">
    <el-table :data="identityList" style="width: 100%">
      <el-table-column prop="zh-cn" :label="$t('lang.zh')" width="120">
      </el-table-column>
      <el-table-column prop="en-us" :label="$t('lang.en')" width="120">
      </el-table-column>
      <el-table-column prop="ja-jp" :label="$t('lang.ja')" width="120">
      </el-table-column>
      <!-- <el-table-column
        prop="fr-fr"
        :label="$t('lang.fr')"
        width="120">
      </el-table-column> -->
      <el-table-column prop="es-es" :label="$t('lang.es')" width="120">
      </el-table-column>
      <el-table-column prop="index" :label="$t('content.identityCode')">
      </el-table-column>
    </el-table>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-button type="primary" @click="createIdentityList" v-if="isCreate">
          {{ $t('content.create') }}
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
      identityList: [],
    }
  },
  async fetch() {
    const identityList = await this.$axios.$get('/api/admin/identityList')
    console.log('identityList', identityList.data)
    if (identityList.success) {
      this.identityList = identityList.data
    } else {
      this.isCreate = true
      this.identityList = this.$store.state.identityList
    }
  },
  methods: {
    createIdentityList() {
      console.log('createIdentityList')
    },
  },
}
</script>
