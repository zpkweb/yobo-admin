<template>
  <div>
    <el-form :inline="true" :model="sellerSearch" class="user-search">
      <el-form-item :label="$t('user.seller.firstName')">
        <el-input
          v-model="sellerSearch.firstname"
          :placeholder="$t('form.placeholder', { msg: $t('user.seller.firstName') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.seller.lastName')">
        <el-input
          v-model="sellerSearch.lastname"
          :placeholder="$t('form.placeholder', { msg: $t('user.seller.lastName') })"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item :label="$t('user.seller.country')">
        <el-input
          v-model="sellerSearch.country"
          :placeholder="$t('form.placeholder', { msg: $t('user.seller.country') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.seller.gender')">
        <el-input
          v-model="sellerSearch.gender"
          :placeholder="$t('form.placeholder', { msg: $t('user.seller.gender') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.seller.label')">
        <el-input
          v-model="sellerSearch.label"
          :placeholder="$t('form.placeholder', { msg: $t('user.seller.label') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.seller.type')">
        <!-- <el-input
          v-model="sellerSearch.type"
          :placeholder="$t('form.placeholder', { msg: $t('user.type') })"
          clearable
        ></el-input> -->
        <el-select
          v-model="sellerSearch.type"
          clearable
          :placeholder="
            $t('form.selectPlaceholder', { msg: $t('user.seller.type') })
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
      <el-form-item :label="$t('user.seller.state')">
        <!-- <el-input
          v-model="sellerSearch.state"
          :placeholder="$t('form.placeholder', { msg: $t('user.state') })"
          clearable
        ></el-input> -->
        <el-select
          v-model="sellerSearch.state"
          clearable
          :placeholder="
            $t('form.selectPlaceholder', { msg: $t('user.seller.state') })
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
      <el-form-item :label="$t('user.seller.choice')">
        <!-- <el-input
          v-model="sellerSearch.choice"
          :placeholder="$t('form.placeholder', { msg: $t('user.choice') })"
          clearable
        ></el-input> -->
        <el-select
          v-model="sellerSearch.choice"
          clearable
          :placeholder="
            $t('form.selectPlaceholder', { msg: $t('user.seller.choice') })
          "
        >
          <el-option
            v-for="item in choiceOptions"
            :key="item.value"
            :label="`${item.value} ${item.label}`"
            :value="item.value"
          >
          </el-option>
        </el-select>

      </el-form-item>
      <el-form-item :label="$t('user.seller.id')">
        <el-input
          v-model="sellerSearch.sellerId"
          :placeholder="$t('form.placeholder', { msg: $t('user.seller.id') })"
          clearable
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit(currentPage)" icon="el-icon-search">{{
          $t('content.search')
        }}</el-button>
      </el-form-item>
    </el-form>
    <el-table  :data="seller" border>
      <el-table-column prop="sellerId" :label="$t('user.seller.id')" width="180">
      </el-table-column>
      <el-table-column prop="banner" :label="$t('user.seller.banner')" width="200">
        <template slot-scope="scope">
          <div style="width: 180px; height: 100px; overflow-x: auto;">
            <img v-if="scope.row.banner" :src="scope.row.banner" class="image" height="100px" />
          </div>

        </template>
      </el-table-column>
      <el-table-column prop="firstname" :label="$t('user.seller.firstName')" width="120">
      </el-table-column>
      <el-table-column prop="lastname" :label="$t('user.seller.lastName')" width="120">
      </el-table-column>

      <el-table-column prop="country" :label="$t('user.seller.country')" width="120"></el-table-column>
      <el-table-column prop="gender" :label="$t('user.seller.gender')" width="120"></el-table-column>

      <el-table-column prop="tags" :label="$t('user.seller.tags')" width="120"></el-table-column>
      <el-table-column prop="type" :label="$t('user.seller.type')" width="120">
        <template slot-scope="scope">
          {{ typeOptions[scope.row.type].label }}
        </template>
      </el-table-column>
      <el-table-column prop="state" :label="$t('user.seller.state')" width="120">
        <template slot-scope="scope">
          {{ stateOptions[scope.row.state].label }}
        </template>
      </el-table-column>

      <el-table-column prop="choice" :label="$t('user.seller.choice')" width="120">
        <template slot-scope="scope">
          {{scope.row.choice ? '是' : '否'}}
        </template>
      </el-table-column>

      <el-table-column
        :formatter="formatterDate"
        prop="createdDate"
        :label="$t('content.createdDate')"
        width="180"
      >
      </el-table-column>


      <el-table-column :label="$t('content.operation')" width="172" fixed="right">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="editUser(scope.$index, scope.row)"
            icon="el-icon-edit"
            >{{ $t('content.edit') }}</el-button
          >
          <el-popover placement="top" v-model="scope.row.visible">
            <p>{{ $t('content.deleteText') }}</p>
            <div style="text-align: right; margin: 0">
              <el-button
                size="mini"
                type="text"
                @click="scope.row.visible = false"
                >{{ $t('content.cancel') }}</el-button
              >
              <el-button
                type="primary"
                size="mini"
                @click="deleteSeller(scope.$index, scope.row)"
                >{{ $t('content.define') }}</el-button
              >
            </div>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              slot="reference"
              >{{ $t('content.delete') }}</el-button
            >
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="pageSize"
      :current-page="currentPage"
      :total="total"
      @current-change="changeCurrentPage"
      style="margin-top: 20px; text-align: center"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seller: [],
      sellerSearch: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        label: '',
        gender: '',
        country: '',
        type: '',
        state: '',
        choice: ''
      },
      currentPage: 1,
      pageSize: 10,
      total: 0,
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
    choiceOptions: [
        {
          value: true,
          label: this.$t('user.seller.choiceOptions.true'),
        },
        {
          value: false,
          label: this.$t('user.seller.choiceOptions.false'),
        },
      ],

    }

  },
  async fetch() {
    let searchData = await this.$axios.$get('/api/admin/user/seller/search', {
      params: {
        ...this.sellerSearch,
        currentPage: this.currentPage,
        pageSize: this.pageSize,
      },
    })
    console.log("searchData", searchData)
    let sellerData = []
    searchData.data.list.forEach((item) => {
      item.visible = false
      if (!item.user) {
        item.user = {
          avatar: '',
          createdDate: '',
          name: '',
          email: '',
          phone: '',
          userId: '',
        }
      }
      sellerData.push(item)
    })
    console.log("searchData", sellerData)
    this.total = searchData.data.total
    this.seller = sellerData
  },
  methods: {
    // 查找用户
    async onSubmit(currentPage) {
      const searchData = await this.$axios.$get(
        '/api/admin/user/seller/search',
        {
          params: {
            ...this.sellerSearch,
            currentPage: currentPage,
            pageSize: this.pageSize,
          },
        }
      )

      let sellerDataFormat = []
      searchData.data.list.forEach((item) => {
        item.visible = false
        if (!item.user) {
          item.user = {
            avatar: '',
            createdDate: '',
            name: '',
            email: '',
            phone: '',
            userId: '',
          }
        }
        sellerDataFormat.push(item)
      })

      this.total = searchData.data.total
      this.seller = sellerDataFormat
    },
    // 删除用户
    async deleteSeller(index, row) {
      console.log('deleteSeller', row)
      const user = await this.$axios.$get('/api/admin/user/seller/delete', {
        params: {
          sellerId: row.sellerId,
        },
      })
      if (user.success) {
        this.seller.splice(index, 1)

        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t('content.success')}`,
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: `${this.$t('content.delete')}${this.$t('content.fail')}!`,
          type: 'error',
        })
      }
    },
    editUser(index, row) {
      console.log(index, row)
      this.$router.push(
        this.localePath(`/seller/create?sellerId=${row.sellerId}`)
      )
    },
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
    changeCurrentPage(currentPage) {
      this.onSubmit(currentPage)
    },
  },
}
</script>
<style scoped>
</style>
