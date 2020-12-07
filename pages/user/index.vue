<template>
  <div>
    <el-form :inline="true" :model="userSearch" class="user-search">
      <el-form-item label="姓名">
        <el-input
          v-model="userSearch.name"
          placeholder="请输入姓名"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
          v-model="userSearch.email"
          placeholder="请输入邮箱"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input
          v-model="userSearch.phone"
          placeholder="请输入手机"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="用户身份">
        <el-select v-model="userSearch.identity" placeholder="请选择">
        <el-option
          v-for="item in identityOptions"
          :key="item.ename"
          :label="item.name"
          :value="item.ename">
        </el-option>
      </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="user" border>
      <el-table-column prop="name" label="姓名">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.name"
            placeholder="请输入姓名"
            clearable
            v-if="scope.row.isEdit"
          ></el-input>
          <span v-else>
            {{ scope.row.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.email"
            placeholder="请输入邮箱"
            clearable
            v-if="scope.row.isEdit"
          ></el-input>
          <span class="table-column-span" v-else>
            {{ scope.row.email }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.phone"
            placeholder="请输入手机"
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
        label="创建日期"
        :formatter="formatterDate"
      >
      </el-table-column>

      <el-table-column prop="identitys" label="身份" >


        <template slot-scope="scope">
          <template v-if="scope.row.isEdit">
            <el-popover placement="top"

            v-for="(item, index) in scope.row.identitys"
              :key="item.id"
            v-model="item.identityVisible"
              >
              <p>您确定要删除当前用户的{{item.name}}身份吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="item.identityVisible = false" >取消</el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="deleteUserIdentity(scope.$index, scope.row, index, item)"

                  >确定</el-button
                >
              </div>
              <!-- <el-button size="mini" type="danger" slot="reference" style="margin-left: 10px"
                >{{ item.name }}</el-button
              > -->
              <el-button size="mini" type="danger" slot="reference" icon="el-icon-delete" style="margin-left: 10px;">{{ item.name }}</el-button>
            </el-popover>

          </template>
          <template v-else>
            <el-tag
              type="primary"
              v-for="item in scope.row.identitys"
              :key="item.id"
              disable-transitions
              style="margin-left: 10px;"
            >

              {{ item.name }}


            </el-tag>
          </template>
        </template>

      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <div v-if="scope.row.isEdit">
            <el-button
              size="mini"
              @click="cancelEditUser(scope.$index, scope.row)"
              icon="el-icon-close"
              >取消</el-button
            >
            <span>
              <el-button size="mini" type="success" icon="el-icon-check" @click="updateUser(scope.$index, scope.row)">更新</el-button>
            </span>

          </div>
          <div v-else>
            <!-- <el-button size="mini" @click="editUser(scope.$index, scope.row)"
            style="margin-left: 10px"
              >编辑</el-button
            > -->
            <el-button size="mini" type="primary" icon="el-icon-edit" @click="editUser(scope.$index, scope.row)">编辑</el-button>

            <el-popover placement="top" v-model="scope.row.visible">
              <p>您确定要删除当前用户的数据吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="scope.row.visible = false">取消</el-button>
                <el-button
                  type="primary"
                  size="mini"
                  @click="removeUser(scope.$index, scope.row)"
                  >确定</el-button
                >
              </div>
              <!-- <el-button size="mini" type="danger"
              style="margin-left: 10px"
              slot="reference"
                >删除</el-button
              > -->
              <el-button size="mini" type="danger" icon="el-icon-delete" slot="reference">删除</el-button>
            </el-popover>
          </div>

          <!-- <el-button
            size="mini"
            type="danger"
            @click="removeUser(scope.$index, scope.row)"
          >
            删除
          </el-button> -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: [],
      userSearch: {
        name: '',
        email: '',
        phone: '',
        identity: '',
      },
      identitys: [],
      identityOptions: [{
        "name": "所有",
        "ename": "",
        "index": 0
      },{
        "name": "管理员",
        "ename": "admin",
        "index": 2
      },{
        "name": "客服",
        "ename": "customerService",
        "index": 3
      },{
        "name": "艺术家",
        "ename": "seller",
        "index": 5
      },{
        "name": "用户",
        "ename": "ordinary",
        "index": 80
      }]
    }
  },
  async fetch() {
    const identitysData = await this.$axios.$get('/api/admin/identityList')
    if (identitysData.success) {
      this.identitys = identitysData.data
    }

    const userSearch = await this.$axios.$get('/api/admin/user/search', {
      params: {
        identity: this.userSearch.identity,
        name: this.userSearch.name,
        email: this.userSearch.email,
        phone: this.userSearch.phone,
      },
    })
    let userData = userSearch.data.map((item) => {
      item.isEdit = false;
      item.visible = false;
      item.identitys = item.identitys.map((item) => {
        item.identityVisible = false;
        return item;
      })
      return item
    })
    this.user = userData
  },
  methods: {
    // 查找用户
    async onSubmit() {
      const userSearch = await this.$axios.$get('/api/admin/user/search', {
        params: {
          identity: this.userSearch.identity,
          name: this.userSearch.name,
          email: this.userSearch.email,
          phone: this.userSearch.phone,
        },
      })
      let userData = userSearch.data.map((item) => {
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
          message: `删除成功！`,
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: `删除失败!`,
          type: 'error',
        })
      }
    },
    // 删除用户身份
    async deleteUserIdentity(index, row, itemIndex, item) {
      console.log("deleteUserIdentity", index, row, itemIndex, item)
      const user = await this.$axios.$get('/api/admin/user/identity/delete', {
        params: {
          identity: item.ename,
          userId: row.userId
        },
      })
      if (user.success) {
        this.user[index].identitys.splice(itemIndex, 1)

        this.$message({
          showClose: true,
          message: `删除成功！`,
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: `删除失败!`,
          type: 'error',
        })
      }
    },
    editUser(index, row) {
      console.log(index, row)
      // const identity = row.identitys[0].ename;
      // this.$router.push(`/user/${identity}/create?userId=${row.userId}`)
      this.user[index].isEdit = true;
    },
    cancelEditUser(index, row) {
      this.user[index].isEdit = false;
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
          message: `${row.name}，更新成功`,
          type: 'success',
        })
        this.user[index].isEdit = false
      } else {
        this.$message({
          showClose: true,
          message: `更新失败!${data.message}`,
          type: 'error',
        })
      }
    },
    formatterDate(row, column, cellValue, index) {
      return this.$moment(cellValue).format('YYYY-MM-DD HH:mm:ss')
    },
  },
}
</script>
<style scoped>
.table-column-span{
  display: inline-block;
  height: 40px;
  line-height: 40px;
}
</style>
