import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a83835d8 = () => interopDefault(import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */))
const _10929447 = () => interopDefault(import('../pages/auth/identityList.vue' /* webpackChunkName: "pages/auth/identityList" */))
const _2ba4705e = () => interopDefault(import('../pages/auth/_type.vue' /* webpackChunkName: "pages/auth/_type" */))
const _ddf1321e = () => interopDefault(import('../pages/commodity.vue' /* webpackChunkName: "pages/commodity" */))
const _0bed34b4 = () => interopDefault(import('../pages/commodity/index.vue' /* webpackChunkName: "pages/commodity/index" */))
const _cd24a6ec = () => interopDefault(import('../pages/commodity/create.vue' /* webpackChunkName: "pages/commodity/create" */))
const _1ef38c4a = () => interopDefault(import('../pages/commodity/options/_type.vue' /* webpackChunkName: "pages/commodity/options/_type" */))
const _4c03d416 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4f3b27f0 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _ec80c30a = () => interopDefault(import('../pages/page.vue' /* webpackChunkName: "pages/page" */))
const _9abde820 = () => interopDefault(import('../pages/page/banner.vue' /* webpackChunkName: "pages/page/banner" */))
const _46a329b7 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _44414afa = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _a0438d6c = () => interopDefault(import('../pages/user/seller/index.vue' /* webpackChunkName: "pages/user/seller/index" */))
const _6447e5e6 = () => interopDefault(import('../pages/user/seller/apply.vue' /* webpackChunkName: "pages/user/seller/apply" */))
const _0aa924a4 = () => interopDefault(import('../pages/user/seller/applyList.vue' /* webpackChunkName: "pages/user/seller/applyList" */))
const _739d3ab4 = () => interopDefault(import('../pages/user/seller/create.vue' /* webpackChunkName: "pages/user/seller/create" */))
const _9d3a04f0 = () => interopDefault(import('../pages/user/_identity/index.vue' /* webpackChunkName: "pages/user/_identity/index" */))
const _ba9e0394 = () => interopDefault(import('../pages/user/_identity/create.vue' /* webpackChunkName: "pages/user/_identity/create" */))
const _0d461fcf = () => interopDefault(import('../pages/yobo.vue' /* webpackChunkName: "pages/yobo" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth",
    component: _a83835d8,
    name: "auth___zh-cn",
    children: [{
      path: "identityList",
      component: _10929447,
      name: "auth-identityList___zh-cn"
    }, {
      path: ":type?",
      component: _2ba4705e,
      name: "auth-type___zh-cn"
    }]
  }, {
    path: "/commodity",
    component: _ddf1321e,
    children: [{
      path: "",
      component: _0bed34b4,
      name: "commodity___zh-cn"
    }, {
      path: "create",
      component: _cd24a6ec,
      name: "commodity-create___zh-cn"
    }, {
      path: "options/:type?",
      component: _1ef38c4a,
      name: "commodity-options-type___zh-cn"
    }]
  }, {
    path: "/en-us",
    component: _4c03d416,
    name: "index___en-us"
  }, {
    path: "/es-es",
    component: _4c03d416,
    name: "index___es-es"
  }, {
    path: "/ja-jp",
    component: _4c03d416,
    name: "index___ja-jp"
  }, {
    path: "/login",
    component: _4f3b27f0,
    name: "login___zh-cn"
  }, {
    path: "/page",
    component: _ec80c30a,
    name: "page___zh-cn",
    children: [{
      path: "banner",
      component: _9abde820,
      name: "page-banner___zh-cn"
    }]
  }, {
    path: "/user",
    component: _46a329b7,
    children: [{
      path: "",
      component: _44414afa,
      name: "user___zh-cn"
    }, {
      path: "seller",
      component: _a0438d6c,
      name: "user-seller___zh-cn"
    }, {
      path: "seller/apply",
      component: _6447e5e6,
      name: "user-seller-apply___zh-cn"
    }, {
      path: "seller/applyList",
      component: _0aa924a4,
      name: "user-seller-applyList___zh-cn"
    }, {
      path: "seller/create",
      component: _739d3ab4,
      name: "user-seller-create___zh-cn"
    }, {
      path: ":identity",
      component: _9d3a04f0,
      name: "user-identity___zh-cn"
    }, {
      path: ":identity/create",
      component: _ba9e0394,
      name: "user-identity-create___zh-cn"
    }]
  }, {
    path: "/yobo",
    component: _0d461fcf,
    name: "yobo___zh-cn"
  }, {
    path: "/en-us/auth",
    component: _a83835d8,
    name: "auth___en-us",
    children: [{
      path: "identityList",
      component: _10929447,
      name: "auth-identityList___en-us"
    }, {
      path: ":type?",
      component: _2ba4705e,
      name: "auth-type___en-us"
    }]
  }, {
    path: "/en-us/commodity",
    component: _ddf1321e,
    children: [{
      path: "",
      component: _0bed34b4,
      name: "commodity___en-us"
    }, {
      path: "create",
      component: _cd24a6ec,
      name: "commodity-create___en-us"
    }, {
      path: "options/:type?",
      component: _1ef38c4a,
      name: "commodity-options-type___en-us"
    }]
  }, {
    path: "/en-us/login",
    component: _4f3b27f0,
    name: "login___en-us"
  }, {
    path: "/en-us/page",
    component: _ec80c30a,
    name: "page___en-us",
    children: [{
      path: "banner",
      component: _9abde820,
      name: "page-banner___en-us"
    }]
  }, {
    path: "/en-us/user",
    component: _46a329b7,
    children: [{
      path: "",
      component: _44414afa,
      name: "user___en-us"
    }, {
      path: "seller",
      component: _a0438d6c,
      name: "user-seller___en-us"
    }, {
      path: "seller/apply",
      component: _6447e5e6,
      name: "user-seller-apply___en-us"
    }, {
      path: "seller/applyList",
      component: _0aa924a4,
      name: "user-seller-applyList___en-us"
    }, {
      path: "seller/create",
      component: _739d3ab4,
      name: "user-seller-create___en-us"
    }, {
      path: ":identity",
      component: _9d3a04f0,
      name: "user-identity___en-us"
    }, {
      path: ":identity/create",
      component: _ba9e0394,
      name: "user-identity-create___en-us"
    }]
  }, {
    path: "/en-us/yobo",
    component: _0d461fcf,
    name: "yobo___en-us"
  }, {
    path: "/es-es/auth",
    component: _a83835d8,
    name: "auth___es-es",
    children: [{
      path: "identityList",
      component: _10929447,
      name: "auth-identityList___es-es"
    }, {
      path: ":type?",
      component: _2ba4705e,
      name: "auth-type___es-es"
    }]
  }, {
    path: "/es-es/commodity",
    component: _ddf1321e,
    children: [{
      path: "",
      component: _0bed34b4,
      name: "commodity___es-es"
    }, {
      path: "create",
      component: _cd24a6ec,
      name: "commodity-create___es-es"
    }, {
      path: "options/:type?",
      component: _1ef38c4a,
      name: "commodity-options-type___es-es"
    }]
  }, {
    path: "/es-es/login",
    component: _4f3b27f0,
    name: "login___es-es"
  }, {
    path: "/es-es/page",
    component: _ec80c30a,
    name: "page___es-es",
    children: [{
      path: "banner",
      component: _9abde820,
      name: "page-banner___es-es"
    }]
  }, {
    path: "/es-es/user",
    component: _46a329b7,
    children: [{
      path: "",
      component: _44414afa,
      name: "user___es-es"
    }, {
      path: "seller",
      component: _a0438d6c,
      name: "user-seller___es-es"
    }, {
      path: "seller/apply",
      component: _6447e5e6,
      name: "user-seller-apply___es-es"
    }, {
      path: "seller/applyList",
      component: _0aa924a4,
      name: "user-seller-applyList___es-es"
    }, {
      path: "seller/create",
      component: _739d3ab4,
      name: "user-seller-create___es-es"
    }, {
      path: ":identity",
      component: _9d3a04f0,
      name: "user-identity___es-es"
    }, {
      path: ":identity/create",
      component: _ba9e0394,
      name: "user-identity-create___es-es"
    }]
  }, {
    path: "/es-es/yobo",
    component: _0d461fcf,
    name: "yobo___es-es"
  }, {
    path: "/ja-jp/auth",
    component: _a83835d8,
    name: "auth___ja-jp",
    children: [{
      path: "identityList",
      component: _10929447,
      name: "auth-identityList___ja-jp"
    }, {
      path: ":type?",
      component: _2ba4705e,
      name: "auth-type___ja-jp"
    }]
  }, {
    path: "/ja-jp/commodity",
    component: _ddf1321e,
    children: [{
      path: "",
      component: _0bed34b4,
      name: "commodity___ja-jp"
    }, {
      path: "create",
      component: _cd24a6ec,
      name: "commodity-create___ja-jp"
    }, {
      path: "options/:type?",
      component: _1ef38c4a,
      name: "commodity-options-type___ja-jp"
    }]
  }, {
    path: "/ja-jp/login",
    component: _4f3b27f0,
    name: "login___ja-jp"
  }, {
    path: "/ja-jp/page",
    component: _ec80c30a,
    name: "page___ja-jp",
    children: [{
      path: "banner",
      component: _9abde820,
      name: "page-banner___ja-jp"
    }]
  }, {
    path: "/ja-jp/user",
    component: _46a329b7,
    children: [{
      path: "",
      component: _44414afa,
      name: "user___ja-jp"
    }, {
      path: "seller",
      component: _a0438d6c,
      name: "user-seller___ja-jp"
    }, {
      path: "seller/apply",
      component: _6447e5e6,
      name: "user-seller-apply___ja-jp"
    }, {
      path: "seller/applyList",
      component: _0aa924a4,
      name: "user-seller-applyList___ja-jp"
    }, {
      path: "seller/create",
      component: _739d3ab4,
      name: "user-seller-create___ja-jp"
    }, {
      path: ":identity",
      component: _9d3a04f0,
      name: "user-identity___ja-jp"
    }, {
      path: ":identity/create",
      component: _ba9e0394,
      name: "user-identity-create___ja-jp"
    }]
  }, {
    path: "/ja-jp/yobo",
    component: _0d461fcf,
    name: "yobo___ja-jp"
  }, {
    path: "/",
    component: _4c03d416,
    name: "index___zh-cn"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
