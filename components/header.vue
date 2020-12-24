<template>
  <div id="header" class="header">
    <div class="header-logo">
      <nuxt-link class="logo" :to="localePath('/')">
        <img class="logo-img" src="~/assets/img/logo.png" />
      </nuxt-link>
    </div>

    <el-menu
      :default-active="activeIndex"
      class="header-menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <template v-for="item in $store.state.userMenu">
        <el-submenu
          :key="item.name"
          :index="item.path"
          v-if="$store.state.isRoot || item.checked"
        >
          <template slot="title">
            <!-- <nuxt-link class="nuxt-link" :to="localePath(item.path)"> -->
            <i class="item.icon"></i>{{ $t(item.name) }}
            <!-- </nuxt-link> -->
          </template>
          <template v-if="item.subMenu && item.subMenu.length">
            <template v-for="asideitem in item.subMenu">
            <el-menu-item
              :index="asideitem.path"
              :key="asideitem.name"
              v-if="$store.state.isRoot || asideitem.checked"
            >
            <nuxt-link class="nuxt-link" :to="localePath(asideitem.path)">
              {{ $t(asideitem.name) }}
            </nuxt-link>
            </el-menu-item>
            </template>
          </template>
        </el-submenu>
      </template>
    </el-menu>


    <el-dropdown>


      <span class="el-dropdown-link">
        {{locale[0].name}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)">
          <el-dropdown-item>{{ locale.name }}</el-dropdown-item>

        </nuxt-link>

        <!-- <el-dropdown-item><nuxt-link :to="switchLocalePath('zh')">汉语</nuxt-link></el-dropdown-item>

        <el-dropdown-item><nuxt-link :to="switchLocalePath('en')">英语</nuxt-link></el-dropdown-item>

        <el-dropdown-item>日语</el-dropdown-item>
        <el-dropdown-item>法语</el-dropdown-item> -->
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown v-if="!isLogin">
      <span class="el-dropdown-link header-avatar">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided>
          <nuxt-link class="logo" :to="localePath('/login')"> 登出 </nuxt-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  watch: {
    '$route.query': '$fetch',
  },
  data() {
    return {
      activeIndex: null,
    }
  },
  computed: {
    locale() {
      return this.$i18n.locales.filter(i => i.code == this.$i18n.locale)
    },
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    isLogin() {
      const routePath = this.$route.path.split('/');
      let islogin = false;
      for(let item of routePath){
        console.log("item", item)
        if(item == 'login'){
          islogin = true;
        }
      }
      return islogin;
    }
  },
  fetch() {
    console.log("this.$i18n", this.$i18n, this.$i18n.locales, this.$i18n.locale)
    console.log("this.$route", this.$route)
    const routePath = this.$route.path
    // console.log('this.$store.state.userMenu', this.$store.state.userMenu)
    // if(routePath.includes('user')){
    //   console.log("route user")
    //   this.activeIndex = '1-1';
    // }else if(routePath.includes('commodity')){
    //   console.log("route commodity")
    //   this.activeIndex = '2-1';
    // }else{
    //   console.log("route /")
    //   this.activeIndex = null;
    // }
  },
  methods: {
    handleSelect(key, keyPath) {
      // this.$store.commit('userMenuActive', key)
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  height: 60px;
}
.header-logo {
  width: 200px;
  text-align: center;
}
.logo {
  display: inline-block;
  width: 100px;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
}
.logo-img {
  width: 100%;
  height: 100%;
}
.header-menu {
  flex: 1;
}

.el-dropdown-link {
  float: left;
  cursor: pointer;
  color: #409eff;
  line-height: 60px;
  margin-right: 20px;
}
.el-avatar {
  float: left;
}
.el-icon-arrow-down {
  font-size: 12px;
  /* vertical-align: -10px; */
}

.el-dropdown-menu__item {
  text-align: center;
}
.header-avatar {
  margin: 10px 20px 0 0px;
}

.version {
  display: inline-block;
  line-height: 60px;
  margin-right: 15px;
  font-size: 12px;
}
.nuxt-link{
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
