<template>
  <div>
    <el-form :inline="true" :model="userSearch" class="user-search">
      <el-form-item :label="$t('user.name')">
        <el-input
          v-model="userSearch.name"
          :placeholder="$t('form.placeholder', { msg: $t('user.name') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.email')">
        <el-input
          v-model="userSearch.email"
          :placeholder="$t('form.placeholder', { msg: $t('user.email') })"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item :label="$t('user.phone')">
        <el-input
          v-model="userSearch.phone"
          :placeholder="$t('form.placeholder', { msg: $t('user.phone') })"
          clearable
        ></el-input>
      </el-form-item>
      <!-- <el-form-item :label="$t('user.identity')">
        <el-select
          v-model="userSearch.identity"
          :placeholder="
            $t('form.selectPlaceholder', { msg: $t('user.identity') })
          "
        >
          <el-option
            v-for="item in identityOptions"
            :key="item.ename"
            :label="$t(item.name)"
            :value="item.ename"
          >
          </el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="onSubmit(currentPage)" icon="el-icon-search">{{
          $t('content.search')
        }}</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="user" border>
      <el-table-column prop="userId" :label="$t('user.userId')">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.userId"
            :placeholder="$t('form.placeholder', { msg: $t('user.userId') })"
            clearable
            v-if="scope.row.isEdit"
          ></el-input>
          <span v-else>
            {{ scope.row.userId }}
          </span>
        </template>
      </el-table-column>

      <el-table-column prop="avatar" :label="$t('user.avatar')" width="122">
        <template slot-scope="scope">
            <img v-if="scope.row.avatar" :src="scope.row.avatar" class="image" width="100px" height="100px" />

        </template>
      </el-table-column>

      <el-table-column prop="name" :label="$t('user.name')">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.name"
            :placeholder="$t('form.placeholder', { msg: $t('user.name') })"
            clearable
            v-if="scope.row.isEdit"
          ></el-input>
          <span v-else>
            {{ scope.row.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="email" :label="$t('user.email')">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.email"
            :placeholder="$t('form.placeholder', { msg: $t('user.email') })"
            clearable
            v-if="scope.row.isEdit"
          ></el-input>
          <span class="table-column-span" v-else>
            {{ scope.row.email }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" :label="$t('user.phone')">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.phone"
            :placeholder="$t('form.placeholder', { msg: $t('user.phone') })"
            clearable
            v-if="scope.row.isEdit"
          ></el-input>
          <span class="table-column-span" v-else>
            {{ scope.row.phone }}
          </span>
        </template>
      </el-table-column>

      <el-table-column
        prop="createdDate"
        :label="$t('content.createdDate')"
        :formatter="formatterDate"
      >
      </el-table-column>

      <!-- <el-table-column prop="identitys" :label="$t('user.identity')">
        <template slot-scope="scope">
          <template v-if="scope.row.isEdit">
            <el-popover
              placement="top"
              v-for="(item, index) in scope.row.identitys"
              :key="item.id"
              v-model="item.identityVisible"
            >
              <p>{{$t('content.deleteText')}}</p>
              <div style="text-align: right; margin: 0">
                <el-button
                  size="mini"
                  type="text"
                  @click="item.identityVisible = false"
                  >{{$t('content.cancel')}}</el-button
                >
                <el-button
                  type="primary"
                  size="mini"
                  @click="
                    deleteUserIdentity(scope.$index, scope.row, index, item)
                  "
                  >{{$t('content.define')}}</el-button
                >
              </div>

              <el-button
                size="mini"
                type="danger"
                slot="reference"
                icon="el-icon-delete"
                style="margin-left: 10px"
                >{{ item[$i18n.locale] }}</el-button
              >
            </el-popover>
          </template>
          <template v-else>
            <el-tag
              type="primary"
              v-for="item in scope.row.identitys"
              :key="item.id"
              disable-transitions
              style="margin-left: 10px"
            >
              {{ item[$i18n.locale] }}
            </el-tag>
          </template>
        </template>
      </el-table-column> -->

      <el-table-column :label="$t('content.operation')" width="172">
        <template slot-scope="scope">
          <el-button
              size="mini"
              icon="el-icon-edit"
              @click="editUser(scope.$index, scope.row)"
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
                  @click="removeUser(scope.$index, scope.row)"
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
          <!-- <div v-if="scope.row.isEdit">
            <el-button
              size="mini"
              @click="cancelEditUser(scope.$index, scope.row)"
              icon="el-icon-close"
              >{{ $t('content.cancel') }}</el-button
            >
            <span>
              <el-button
                size="mini"
                type="success"
                icon="el-icon-check"
                @click="updateUser(scope.$index, scope.row)"
                >{{ $t('content.update') }}</el-button
              >
            </span>
          </div>
          <div v-else>
            <el-button
              size="mini"
              icon="el-icon-edit"
              @click="editUser(scope.$index, scope.row)"
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
                  @click="removeUser(scope.$index, scope.row)"
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
          </div> -->
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
      currentPage: 1,
      pageSize: 10,
      total: 0,
      user: [],
      userSearch: {
        name: '',
        email: '',
        phone: '',
        identity: '',
      },
      identitys: [],
      identityOptions: [
        {
          name: 'all',
          ename: '',
          index: 0,
        },
        {
          name: 'menu.user.admin.title',
          ename: 'admin',
          index: 2,
        },
        {
          name: 'menu.user.customerService.title',
          ename: 'customerService',
          index: 3,
        },
        {
          name: 'menu.user.seller.title',
          ename: 'seller',
          index: 5,
        },
        {
          name: 'menu.user.ordinary.title',
          ename: 'ordinary',
          index: 80,
        },
      ],
    }
  },
  async fetch() {
    // const identitysData = await this.$axios.$get('/api/admin/identityList')
    // if (identitysData.success) {
    //   this.identitys = identitysData.data
    // }

    const userSearch = await this.$axios.$get('/api/admin/user/search', {
      params: {
        identity: this.userSearch.identity,
        name: this.userSearch.name,
        email: this.userSearch.email,
        phone: this.userSearch.phone,
        pageSize: this.pageSize,
        currentPage: this.currentPage,
      },
    })
    console.log('userSearch', userSearch)
    this.total = userSearch.data.total
    let userData = userSearch.data.list.map((item) => {
      item.isEdit = false
      item.visible = false
      // item.identitys = item.identitys.map((item) => {
      //   item.identityVisible = false
      //   return item
      // })
      return item
    })
    this.user = userData
  },
  methods: {
    // 查找用户
    async onSubmit(currentPage) {
      const userSearch = await this.$axios.$get('/api/admin/user/search', {
        params: {
          identity: this.userSearch.identity,
          name: this.userSearch.name,
          email: this.userSearch.email,
          phone: this.userSearch.phone,
          pageSize: this.pageSize,
          currentPage: currentPage,
        },
      })
      this.total = userSearch.data.total
      let userData = userSearch.data.list.map((item) => {
        item.isEdit = false
        return item
      })
      this.user = userData
    },
    // 删除用户
    async removeUser(index, row) {
      console.log('removeUser', row)
      const user = await this.$axios.$get('/api/admin/user/remove', {
        params: {
          userId: row.userId,
        },
      })
      if (user.success) {
        this.user.splice(index, 1)

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
    // 删除用户身份
    async deleteUserIdentity(index, row, itemIndex, item) {
      console.log('deleteUserIdentity', index, row, itemIndex, item)
      const user = await this.$axios.$get('/api/admin/user/identity/delete', {
        params: {
          identity: item.ename,
          userId: row.userId,
        },
      })
      if (user.success) {
        this.user[index].identitys.splice(itemIndex, 1)

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
      // const identity = row.identitys[0].ename;
      this.$router.push(`/user/create?userId=${row.userId}`)
      // this.user[index].isEdit = true

    },
    cancelEditUser(index, row) {
      this.user[index].isEdit = false
    },
    async updateUser(index, row) {
      console.log('updateUser', index, row)
      const data = await this.$axios.$post('/api/admin/user/update', {
        userId: row.userId,
        name: row.name,
        email: row.email,
        phone: row.phone,
      })
      console.log('data', data)
      if (data.success) {
        this.$message({
          showClose: true,
          message: `${row.name}，${this.$t('content.update')}${this.$t(
            'content.success'
          )}`,
          type: 'success',
        })
        this.user[index].isEdit = false
      } else {
        this.$message({
          showClose: true,
          message: `${this.$t('content.update')}${this.$t('content.fail')}!${
            data.message
          }`,
          type: 'error',
        })
      }
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
.table-column-span {
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
</style>
