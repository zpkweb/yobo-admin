export const state = () => ({
  counter: 0,
  userMenuActive: null,
  menu: [{
    icon: 'el-icon-menu',
    name: '用户管理',
    path: '/user/ordinary',
    subMenu: [{
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
        name: '查找',
        path: '/user/seller'
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
    path: '/user/ordinary',

  }],

})

export const mutations = {
  increment(state) {
    state.counter++
  },
  userMenuActive(state, active) {
    console.log("userMenuActive", active)
    state.userMenuActive = active;
  }

}


