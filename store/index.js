export const state = () => ({
  counter: 0,
  isRoot: false,
  userMenuActive: null,
  defaultMenu: {
    user: {
      level: '0',
      icon: 'el-icon-menu',
      // name: '用户管理',
      name: 'menu.user.title',
      subMenu: [
        {
          icon: 'el-icon-search',
          // name: '搜索',
          name: 'menu.user.search',
          path: '/user/search',
          level: '0-0',
        },
        {
          icon: 'el-icon-circle-plus-outline',
          // name: '搜索',
          name: 'menu.user.create',
          path: '/user/create',
          level: '0-1',
        },

        // {
        //   icon: 'el-icon-menu',
        //   // name: '普通用户',
        //   name: 'menu.user.ordinary.title',
        //   path: '/user/ordinary',
        //   subMenu: [
        //     {
        //       icon: 'el-icon-search',
        //       // name: '查找普通用户',
        //       name: 'menu.user.ordinary.search',
        //       path: '/user/ordinary/search',
        //       level: '0-1-0',
        //     },
        //     {
        //       icon: 'el-icon-circle-plus-outline',
        //       // name: '添加普通用户',
        //       name: 'menu.user.ordinary.create',
        //       path: '/user/ordinary/create',
        //       level: '0-1-1',
        //     },
        //   ],
        //   level: '0-1',
        // },
        // {
        //   icon: 'el-icon-menu',
        //   // name: '艺术家',
        //   name: 'menu.user.seller.title',
        //   path: '/user/seller',
        //   subMenu: [

        //     {
        //       icon: 'el-icon-search',
        //       // name: '查找艺术家',
        //       name: 'menu.user.seller.search',
        //       path: '/user/seller/search',
        //       level: '0-2-1',
        //     },
        //     {
        //       icon: 'el-icon-search',
        //       // name: '申请列表',
        //       name: 'menu.user.seller.applyList',
        //       path: '/user/seller/applyList',
        //       level: '0-2-0',
        //     },
        //     // {
        //     //   icon: 'el-icon-circle-plus-outline',
        //     //   // name: '用户申请',
        //     //   name: 'menu.user.seller.apply',
        //     //   path: '/user/seller/apply',
        //     //   level: '0-2-2',
        //     // },
        //     {
        //       icon: 'el-icon-circle-plus-outline',
        //       // name: '添加艺术家',
        //       name: 'menu.user.seller.create',
        //       path: '/user/seller/create',
        //       level: '0-2-3',
        //     },
        //   ],
        //   level: '0-2',
        // },
        // {
        //   icon: 'el-icon-menu',
        //   // name: '客服',
        //   name: 'menu.user.customerService.title',
        //   path: '/user/customerService',
        //   subMenu: [
        //     {
        //       icon: 'el-icon-search',
        //       // name: '查找客服',
        //       name: 'menu.user.customerService.search',
        //       path: '/user/customerService/search',
        //       level: '0-3-0',
        //     },
        //     {
        //       icon: 'el-icon-circle-plus-outline',
        //       // name: '添加客服',
        //       name: 'menu.user.customerService.create',
        //       path: '/user/customerService/create',
        //       level: '0-3-1',
        //     },
        //   ],
        //   level: '0-3',
        // },
        // {
        //   icon: 'el-icon-menu',
        //   // name: '管理员',
        //   name: 'menu.user.admin.title',
        //   path: '/user/admin',
        //   subMenu: [
        //     {
        //       icon: 'el-icon-search',
        //       // name: '查找管理员',
        //       name: 'menu.user.admin.search',
        //       path: '/user/admin/search',
        //       level: '0-4-0',
        //     },
        //     {
        //       icon: 'el-icon-circle-plus-outline',
        //       // name: '添加管理员',
        //       name: 'menu.user.admin.create',
        //       path: '/user/admin/create',
        //       level: '0-4-1',
        //     },
        //   ],
        //   level: '0-4',
        // },
        // {
        //   icon: 'el-icon-menu',
        //   // name: '超级管理员',
        //   name: 'menu.user.superAdmin.title',
        //   path: '/user/superAdmin',
        //   subMenu: [
        //     {
        //       icon: 'el-icon-search',
        //       // name: '查找超级管理员',
        //       name: 'menu.user.superAdmin.search',
        //       path: '/user/superAdmin/search',
        //       level: '0-5-0',
        //     },
        //     {
        //       icon: 'el-icon-circle-plus-outline',
        //       // name: '添加超级管理员',
        //       name: 'menu.user.superAdmin.create',
        //       path: '/user/superAdmin/create',
        //       level: '0-5-1',
        //     },
        //   ],
        //   level: '0-5',
        // },
      ],

    },
    seller: {
      level: '4',
      icon: 'el-icon-menu',
      name: 'menu.seller.title',
      subMenu: [
        {
          icon: 'el-icon-search',
          name: 'menu.seller.search',
          path: '/seller/search',
          level: '4-0',
        },
        {
          icon: 'el-icon-circle-plus-outline',
          name: 'menu.seller.create',
          path: '/seller/create',
          level: '4-1',
        },
        {
          icon: 'el-icon-circle-plus-outline',
          name: 'menu.seller.apply',
          path: '/seller/apply',
          level: '4-2',
        },
      ]
    },
    commodity: {
      level: '1',
      icon: 'el-icon-menu',
      // name: '艺术品管理',
      name: 'menu.commodity.title',
      subMenu: [
        {
          icon: 'el-icon-search',
          // name: '搜索艺术品',
          name: 'menu.commodity.search',
          path: '/commodity/search',
          level: '1-0',
        },
        {
          icon: 'el-icon-circle-plus-outline',
          // name: '添加艺术品',
          name: 'menu.commodity.create',
          path: '/commodity/create',
          level: '1-1',
        },
        {
          icon: 'el-icon-menu',
          // name: '艺术品选项',
          name: 'menu.commodity.options.title',
          path: '/commodity/options',
          subMenu: [


            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品类别',
              name: 'menu.commodity.options.category',
              path: '/commodity/options/category',
              level: '1-2-0',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品分类',
              name: 'menu.commodity.options.classification',
              path: '/commodity/options/classification',
              level: '1-2-1',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品材质',
              name: 'menu.commodity.options.material',
              path: '/commodity/options/material',
              level: '1-2-2',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品款式',
              name: 'menu.commodity.options.model',
              path: '/commodity/options/model',
              level: '1-2-3',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品摆放',
              name: 'menu.commodity.options.place',
              path: '/commodity/options/place',
              level: '1-2-4',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品瑞物',
              name: 'menu.commodity.options.ruiwu',
              path: '/commodity/options/ruiwu',
              level: '1-2-5',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品形状',
              name: 'menu.commodity.options.shape',
              path: '/commodity/options/shape',
              level: '1-2-6',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品规格',
              name: 'menu.commodity.options.specification',
              path: '/commodity/options/specification',
              level: '1-2-7',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品风格',
              name: 'menu.commodity.options.style',
              path: '/commodity/options/style',
              level: '1-2-8',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品手法',
              name: 'menu.commodity.options.technique',
              path: '/commodity/options/technique',
              level: '1-2-9',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品主题',
              name: 'menu.commodity.options.theme',
              path: '/commodity/options/theme',
              level: '1-2-10',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品类型',
              name: 'menu.commodity.options.type',
              path: '/commodity/options/type',
              level: '1-2-11',
            },
            {
              icon: 'el-icon-circle-plus-outline',
              // name: '艺术品用途',
              name: 'menu.commodity.options.use',
              path: '/commodity/options/use',
              level: '1-2-12',
            },
          ],
          level: '1-2',
        },
      ],

    },
    auth: {
      level: '2',
      icon: 'el-icon-menu',
      // name: '权限管理',
      name: 'menu.auth.title',
      subMenu: [
        {
          icon: 'el-icon-menu',
          // name: '客服权限',
          name: 'menu.auth.customerService',
          path: '/auth/customerService',
          level: '2-0',
        },
        {
          icon: 'el-icon-menu',
          // name: '管理员权限',
          name: 'menu.auth.admin',
          path: '/auth/admin',
          level: '2-1',
        },
        {
          icon: 'el-icon-menu',
          // name: '超级管理员权限',
          name: 'menu.auth.superAdmin',
          path: '/auth/superAdmin',
          level: '2-2',
        },
        {
          icon: 'el-icon-menu',
          // name: '用户身份列表',
          name: 'menu.auth.identityList',
          path: '/auth/identityList',
          level: '2-3',
        },
      ],

    },
    page: {
      level: '3',
      icon: 'el-icon-menu',
      // name: '界面管理',
      name: 'menu.page.title',
      subMenu: [
        {
          icon: 'el-icon-menu',
          name: 'menu.page.banner',
          path: '/page/banner',
          level: '3-0',
        },
        {
          icon: 'el-icon-menu',
          name: 'menu.page.message',
          path: '/page/message',
          level: '3-1',
        },
      ],

    },
    information: {
      level: '5',
      icon: 'el-icon-menu',
      // name: '资讯管理',
      name: 'menu.information.title',
      subMenu: [
        {
          icon: 'el-icon-search',
          name: 'menu.information.search',
          path: '/information/search',
          level: '5-0',
        },
        {
          icon: 'el-icon-circle-plus-outline',
          name: 'menu.information.create',
          path: '/information/create',
          level: '5-1',
        }
      ]
    }

  },

  userMenu: [],
  identityMenu: [],
  commodity: {
    options: {
      categorys: [],
      classifications: [],
      materials: [],
      models: [],
      places: [],
      ruiwus: [],
      shapes: [],
      specifications: [],
      styles: [],
      techniques: [],
      themes: [],
      types: [],
      uses: [],
    },
  },
  identityList: [
    {
      name: '超级管理员',
      ename: 'superAdmin',
      index: 1,
    },
    {
      name: '管理员',
      ename: 'admin',
      index: 2,
    },
    {
      name: '客服',
      ename: 'customerService',
      index: 3,
    },
    {
      name: '艺术家',
      ename: 'seller',
      index: 5,
    },
    {
      name: '会员',
      ename: 'member',
      index: 70,
    },
    {
      name: '用户',
      ename: 'ordinary',
      index: 80,
    },
    {
      name: '第三方用户',
      ename: 'thirdParty',
      index: 90,
    },
  ],

  user: null
})
export const getters = {
  addRootMenu: (state, getters) => (data, index) => {
    // state.menu.map((item, itemIndex)=>{
    //   item.checked = 1;
    //   console.log("item", item)
    //   if(item.subMenu){
    //     return getters.addRootMenu(item.subMenu, item.level)
    //   }
    // })
    // return state.menu;
  },
}
export const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  increment(state) {
    state.counter++
  },
  setRoot(state, payload) {
    state.isRoot = payload
  },
  setMenu(state, payload) {
    state.menu = payload
  },
  setIdentityMenu(state) {
    state.identityMenu = state.defaultMenu
  },
  extendIdentityMenu(state, payload) {
    for (var i = 0; i < payload.identityMenu.length; i++) {
      if (payload.menu[i]) {
        payload.identityMenu[i].checked = payload.menu[i].checked
      }
      if (payload.identityMenu[i] && payload.identityMenu[i].subMenu) {
        mutations.extendIdentityMenu(state, {
          identityMenu: payload.identityMenu[i].subMenu,
          menu: payload.menu[i] ? payload.menu[i].subMenu : [],
        })
      }
    }
  },
  setUserMenu(state, payload) {
    state.userMenu = payload
  },
  setRootMenu(state, payload) {
    // console.log('state', state)
    payload.data.map((item, itemIndex) => {
      item.checked = 1
      item.level =
        payload.index || payload.index > -1
          ? `${payload.index}-${itemIndex}`
          : itemIndex.toString()
      if (item.subMenu) {
        return mutations.setRootMenu({
          data: item.subMenu,
          index: item.level,
        })
      }
      return item
    })
  },

  userMenuActive(state, active) {
    state.userMenuActive = active
  },

  addCommodityOpitons(state, payload) {
    state.commodity.options[payload.type] = payload.data
  },

  changeMenuChedked(state, payload) {
    // console.log("changeMenuChedked", state, payload)
    const level = payload.level.split('-')
    let checkData = state.identityMenu
    for (let i = 0; i < level.length; i++) {
      if (i) {
        checkData = checkData.subMenu[level[i]]
      } else {
        checkData = checkData[level[i]]
      }
    }
    checkData.checked = payload.checked
    // console.log(checkData)
  },
}
