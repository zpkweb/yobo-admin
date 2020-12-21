<template>
  <div>
    <h3>修改{{ type[$route.params.type] }}权限</h3>
    <el-tree
      ref="menuTree"
      :data="menuTree"
      show-checkbox
      node-key="level"
      check-on-click-node
      default-expand-all
      highlight-current
      :props="defaultProps"
      @check-change="changeNodeCheck"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span><i :class="data.icon"></i>{{ node.label }}</span>
      </span>
    </el-tree>
    <el-button type="primary" @click="onSubmit"> 修改 </el-button>
  </div>
</template>
<script>
export default {
  watch: {
    '$route.query': '$fetch',
  },
  data() {
    return {
      type: {
        customerService: '客服',
        admin: '管理员',
        superAdmin: '超级管理员',
      },
      // data: this.$store.state.menu,
      defaultProps: {
        children: 'subMenu',
        label: 'name',
      },
      checkedKeys: []
    }
  },
  computed: {
    menuTree() {
      return this.$store.state.identityMenu;
    }
  },
  async fetch() {
    // console.log("this.$route", this.$route)
    const identity = await this.$axios.$get('/api/admin/identityList', {
      params: {
        ename: this.$route.params.type
      }
    })
    console.log("identity", identity.data.menu)

    if(identity.success){
      if(identity.data.menu && identity.data.menu != " "){
        await this.$store.commit("setIdentityMenu", JSON.parse(identity.data.menu))
      }else{
        // this.$store.getters.addRootMenu(this.$store.state.identityMenu)
        await this.$store.commit("setIdentityMenu", this.$store.state.defaultMenu)
      }
      this.getCheckedNodes(this.$store.state.identityMenu)
      this.$refs.menuTree ? this.$refs.menuTree.setCheckedKeys(this.checkedKeys) : ''
    }
  },
  // 加载完成
  mounted() {
    this.$refs.menuTree.setCheckedKeys(this.checkedKeys)
  },
  methods: {
    async onSubmit() {
      console.log("JSON.stringify(this.menuTree)", JSON.stringify(this.menuTree))
      const identityListUpdate = await this.$axios
        .$post('/api/admin/identityList/update', {
          ename: this.$route.params.type,
          menu: JSON.stringify(this.menuTree),
        })
        .catch((error) => {
          this.$message({
            showClose: true,
            message: `更新失败! ${error.response.data.message}`,
            type: 'error',
          })
        })
      console.log(identityListUpdate)
      if (identityListUpdate.success) {
        this.$message({
          showClose: true,
          message: `更新成功`,
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: `更新失败!${identityListUpdate.message}`,
          type: 'error',
        })
      }
    },
    changeNodeCheck(data, check, children) {
      // console.log('changeNodeCheck', data, check, children)
      let checked = 0;
      if(check && !children) { // true false
        checked = 1
      }else if(!check && children){ // false true
        checked = 2;
      }
      this.$store.commit('changeMenuChedked', {
        level: data.level,
        checked
      })

      console.log(this.menuTree)

    },
    getCheckedNodes(data){
      // console.log("getCheckedNodes", data)
      for(let item of data){
        if(item.subMenu){
          this.getCheckedNodes(item.subMenu)
        }
        if(item.checked === 1){
          // console.log("item.level", item.level)
          this.checkedKeys.push(item.level);
        }
      }

    }
  },
}
</script>
<style scoped>
</style>
