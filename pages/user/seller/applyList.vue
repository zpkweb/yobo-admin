<template>
  <div>
    <el-form :inline="true" :model="search" class="user-search">
      <el-form-item :label="$t('user.firstName')">
        <el-input
          v-model="search.firstname"
          :placeholder="$t('form.placeholder', { msg: $t('user.firstName') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.lastName')">
        <el-input
          v-model="search.lastname"
          :placeholder="$t('form.placeholder', { msg: $t('user.lastName') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.email')">
        <el-input
          v-model="search.email"
          :placeholder="$t('form.placeholder', { msg: $t('user.email') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.phone')">
        <el-input
          v-model="search.phone"
          :placeholder="$t('form.placeholder', { msg: $t('user.phone') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.label')">
        <el-input
          v-model="search.label"
          :placeholder="$t('form.placeholder', { msg: $t('user.label') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.gender')">
        <el-input
          v-model="search.gender"
          :placeholder="$t('form.placeholder', { msg: $t('user.gender') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.country')">
        <el-input
          v-model="search.country"
          :placeholder="$t('form.placeholder', { msg: $t('user.country') })"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">{{$t('content.search')}}</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="seller" border>
      <el-table-column prop="firstname" :label="$t('user.firstName')" width="200">
      </el-table-column>
      <el-table-column prop="lastname" :label="$t('user.lastName')" width="200">
      </el-table-column>
      <el-table-column prop="email" :label="$t('user.email')" width="200"> </el-table-column>
      <el-table-column prop="phone" :label="$t('user.phone')" width="200"> </el-table-column>

      <el-table-column :formatter="formatterDate" prop="createdDate" :label="$t('content.createdDate')" width="200">
      </el-table-column>

      <el-table-column :label="$t('content.operation')" >
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.$index, scope.row)" icon="el-icon-edit"
            >{{$t('content.edit')}}</el-button
          >
          <el-button
            size="mini"
            type="success"
            @click="agree(scope.$index, scope.row)"
            icon="el-icon-check"
            >{{$t('content.agree')}}</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="reject(scope.$index, scope.row)"
            icon="el-icon-close"
            >{{$t('content.reject')}}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seller: [],
      search: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        label: '',
        gender: '',
        country: '',
        state: '0',
      },
    }
  },
  async fetch() {
    const searchData = await this.$axios.$get('/api/admin/user/seller/search', {
      params: this.search,
    })
    this.seller = searchData.data
  },
  methods: {
    async onSubmit() {
      const searchData = await this.$axios.$get(
        '/api/admin/user/seller/search',
        {
          params: this.search,
        }
      )
      this.seller = searchData.data
    },
    edit(index, row) {
      console.log(index, row)
      this.$router.push(`/user/seller/create?sellerId=${row.sellerId}`)
    },
    async agree(index, row) {
      console.log(index, row)
      // setState
      const seller = await this.$axios.$post(
        '/api/admin/user/seller/setState',
        {
          sellerId: row.sellerId,
          state: 1,
        }
      )
      console.log('seller', seller)
      this.seller.splice(index, 1)
    },
    async reject(index, row) {
      console.log(index, row)
      // setState
      const seller = await this.$axios.$post(
        '/api/admin/user/seller/setState',
        {
          sellerId: row.sellerId,
          state: 2,
        }
      )
      console.log('seller', seller)
      this.seller.splice(index, 1)
    },
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
  },
}
</script>
<style scoped>
</style>
