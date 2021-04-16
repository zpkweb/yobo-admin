<template>
  <div>
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
        <span><i :class="data.icon"></i>{{ $t(node.label) }}</span>
      </span>
    </el-tree>
    <el-button type="primary" @click="onSubmit">
      {{ $t('content.update') }}
    </el-button>
  </div>
</template>
<script>
export default {
  watch: {
    '$route.query': '$fetch',
  },
  data() {
    return {
      // data: this.$store.state.menu,
      defaultProps: {
        children: 'subMenu',
        label: 'name',
      },
      checkedKeys: [],
    }
  },
  computed: {
    menuTree() {
      return this.$store.state.identityMenu
    },
  },
  async fetch() {
    // console.log("this.$route", this.$route)
    const identity = await this.$axios.$get('/api/admin/identityList', {
      params: {
        'en-us': this.$route.params.type,
      },
    })
    // console.log("identity", identity.data.menu)

    if (identity.success) {
      if (identity.data.menu && identity.data.menu != ' ') {
        // console.log("Object.assign(this.$store.state.defaultMenu, JSON.parse(identity.data.menu)))", deepClone(this.$store.state.defaultMenu, JSON.parse(identity.data.menu)))
        // console.log("JSON.parse(identity.data.menu)", JSON.parse(identity.data.menu))
        // console.log("extendIdentityMenu")
        await this.$store.commit('setIdentityMenu')
        await this.$store.commit('extendIdentityMenu', {
          identityMenu: this.$store.state.identityMenu,
          menu: JSON.parse(identity.data.menu),
        })
      } else {
        // console.log("setIdentityMenu")
        // this.$store.getters.addRootMenu(this.$store.state.identityMenu)
        await this.$store.commit('setIdentityMenu')
      }
      this.getCheckedNodes(this.$store.state.identityMenu)
      this.$refs.menuTree
        ? this.$refs.menuTree.setCheckedKeys(this.checkedKeys)
        : ''
    }
  },
  // 加载完成
  mounted() {
    this.$refs.menuTree.setCheckedKeys(this.checkedKeys)
  },
  methods: {
    async onSubmit() {
      console.log(
        'JSON.stringify(this.menuTree)',
        JSON.stringify(this.menuTree)
      )
      const identityListUpdate = await this.$axios
        .$post('/api/admin/identityList/update', {
          'en-us': this.$route.params.type,
          menu: JSON.stringify(this.menuTree),
        })
        .catch((error) => {
          this.$message({
            showClose: true,
            message: `${this.$t('content.update')}${this.$t('content.fail')}! ${
              error.response.data.message
            }`,
            type: 'error',
          })
        })
      console.log(identityListUpdate)
      if (identityListUpdate.success) {
        this.$message({
          showClose: true,
          message: `${this.$t('content.update')}${this.$t('content.success')}`,
          type: 'success',
        })
      } else {
        this.$message({
          showClose: true,
          message: `${this.$t('content.update')}${this.$t('content.fail')}!${
            identityListUpdate.message
          }`,
          type: 'error',
        })
      }
    },
    changeNodeCheck(data, check, children) {
      // console.log('changeNodeCheck', data, check, children)
      let checked = 0
      if (check && !children) {
        // true false
        checked = 1
      } else if (!check && children) {
        // false true
        checked = 2
      }
      this.$store.commit('changeMenuChedked', {
        level: data.level,
        checked,
      })

      // console.log(this.menuTree)
    },
    getCheckedNodes(data) {
      // console.log("getCheckedNodes", data)
      for (let item of data) {
        if (item.subMenu) {
          this.getCheckedNodes(item.subMenu)
        }
        if (item.checked === 1) {
          // console.log("item.level", item.level)
          this.checkedKeys.push(item.level)
        }
      }
    },
  },
}
</script>
<style scoped>
</style>
