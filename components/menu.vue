<template>
  <el-menu
    :default-active="$route.path"
    class="$route.path"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="item in menu.subMenu">
      <template v-if="$store.state.isRoot || item.checked">
        <template v-if="item.subMenu && item.subMenu.length">
          <el-submenu  :key="item.name" :index="item.path" >
            <template slot="title">
              <i class="el-icon-menu"></i
              ><span slot="title">{{ $t(item.name) }}</span>
            </template>
            <template v-for="subitem in item.subMenu">
              <el-menu-item
                :index="subitem.path"
                :key="subitem.name"
                v-if="$store.state.isRoot || subitem.checked"
              >
                <nuxt-link class="nuxt-link" :to="localePath(subitem.path)">
                  <i :class="subitem.icon"></i>{{ $t(subitem.name) }}
                </nuxt-link>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <el-menu-item v-else :key="item.name" :index="item.path">
          <nuxt-link class="nuxt-link" :to="localePath(item.path)">
            <i :class="item.icon"></i>{{ $t(item.name) }}
          </nuxt-link>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>
<script>
export default {
  props: ['menu'],
  fetch() {
    // console.log("menu user", this.$store.state.userMenu)
  },
  methods: {
    change() {
      // console.log('change route', this.$route.path)
      this.active = this.$route.path;

    },
    handleSelect(key, keyPath) {
      // console.log('handleSelect', key, keyPath)
    },
    handleOpen(key, keyPath) {
      // console.log('handleOpen', key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log('handleClose', key, keyPath)
    },
  },
}
</script>
<style scoped>
.nuxt-link{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.nuxt-link-active{
  color: #f00;
}
</style>
