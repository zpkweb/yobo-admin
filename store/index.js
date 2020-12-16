export const state = () => ({
  counter: 0,
  userMenuActive: null,
  menu: [{
    icon: 'el-icon-menu',
    name: '用户管理',
    path: '/user',
    subMenu: [{
      icon: 'el-icon-search',
      name: '搜索',
      path: '/user',
    },{
      icon: 'el-icon-menu',
      name: '普通用户',
      path: '/user/ordinary',
      subMenu: [{
        icon: 'el-icon-search',
        name: '查找',
        path: '/user/ordinary'
      },{
        icon: 'el-icon-circle-plus-outline',
        name: '添加',
        path: '/user/ordinary/create'
      }]
    },{
      icon: 'el-icon-menu',
      name: '艺术家',
      path: '/user/seller',
      subMenu: [{
        icon: 'el-icon-search',
        name: '申请列表',
        path: '/user/seller/applyList'
      },{
        icon: 'el-icon-search',
        name: '查找',
        path: '/user/seller'
      },{
        icon: 'el-icon-circle-plus-outline',
        name: '用户申请',
        path: '/user/seller/apply'
      },{
        icon: 'el-icon-circle-plus-outline',
        name: '添加',
        path: '/user/seller/create'
      }]
    },{
      icon: 'el-icon-menu',
      name: '客服',
      path: '/user/customerService',
      subMenu: [{
        icon: 'el-icon-search',
        name: '查找',
        path: '/user/customerService'
      },{
        icon: 'el-icon-circle-plus-outline',
        name: '添加',
        path: '/user/customerService/create'
      }]
    },{
      icon: 'el-icon-menu',
      name: '管理员',
      path: '/user/admin',
      subMenu: [{
        icon: 'el-icon-search',
        name: '查找',
        path: '/user/admin'
      },{
        icon: 'el-icon-circle-plus-outline',
        name: '添加',
        path: '/user/admin/create'
      }]
    }]
  },{
    icon: 'el-icon-menu',
    name: '商品管理',
    path: '/commodity',
    subMenu: [{
      icon: 'el-icon-search',
      name: '搜索',
      path: '/commodity',
    },{
      icon: 'el-icon-circle-plus-outline',
      name: '添加',
      path: '/commodity/create',
    },{
      icon: 'el-icon-menu',
      name: '商品选项',
      path: '/commodity/options',
      subMenu: [{
        icon: 'el-icon-circle-plus-outline',
        name: '形状',
        path: '/commodity/options/shape'
      },{
        icon: 'el-icon-circle-plus-outline',
        name: '主题',
        path: '/commodity/options/theme'
      },{
        icon: 'el-icon-circle-plus-outline',
        name: '类别',
        path: '/commodity/options/category'
      },{
        icon: 'el-icon-circle-plus-outline',
        name: '手法',
        path: '/commodity/options/technique'
      }]
    }]
  }],
  commodity: {
    options: {
      shapes: [],
      themes: [],
      categorys: [],
      techniques: [],
    },
  }
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  userMenuActive(state, active) {
    state.userMenuActive = active;
  },
  addCommodityOpitons(state, payload) {
    state.commodity.options[payload.type] = payload.data;
  }
}


