import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a83835d8 = () => interopDefault(import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */))
const _10929447 = () => interopDefault(import('../pages/auth/identityList.vue' /* webpackChunkName: "pages/auth/identityList" */))
const _2ba4705e = () => interopDefault(import('../pages/auth/_type.vue' /* webpackChunkName: "pages/auth/_type" */))
const _ddf1321e = () => interopDefault(import('../pages/commodity.vue' /* webpackChunkName: "pages/commodity" */))
const _62449083 = () => interopDefault(import('../pages/commodity/all.vue' /* webpackChunkName: "pages/commodity/all" */))
const _cd24a6ec = () => interopDefault(import('../pages/commodity/create.vue' /* webpackChunkName: "pages/commodity/create" */))
const _bffd3c00 = () => interopDefault(import('../pages/commodity/options.vue' /* webpackChunkName: "pages/commodity/options" */))
const _1ef38c4a = () => interopDefault(import('../pages/commodity/options/_type.vue' /* webpackChunkName: "pages/commodity/options/_type" */))
const _1d783b36 = () => interopDefault(import('../pages/commodity/search.vue' /* webpackChunkName: "pages/commodity/search" */))
const _4c03d416 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _02f47270 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _6ef8f7aa = () => interopDefault(import('../pages/information/create.vue' /* webpackChunkName: "pages/information/create" */))
const _4c8e12d7 = () => interopDefault(import('../pages/information/search.vue' /* webpackChunkName: "pages/information/search" */))
const _4f3b27f0 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _ec80c30a = () => interopDefault(import('../pages/page.vue' /* webpackChunkName: "pages/page" */))
const _9abde820 = () => interopDefault(import('../pages/page/banner.vue' /* webpackChunkName: "pages/page/banner" */))
const _3c83e71a = () => interopDefault(import('../pages/page/message.vue' /* webpackChunkName: "pages/page/message" */))
const _1d73ae6b = () => interopDefault(import('../pages/seller.vue' /* webpackChunkName: "pages/seller" */))
const _5bea254a = () => interopDefault(import('../pages/seller/apply.vue' /* webpackChunkName: "pages/seller/apply" */))
const _7042e7d0 = () => interopDefault(import('../pages/seller/create.vue' /* webpackChunkName: "pages/seller/create" */))
const _17651308 = () => interopDefault(import('../pages/seller/search.vue' /* webpackChunkName: "pages/seller/search" */))
const _46a329b7 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _6b9c5f04 = () => interopDefault(import('../pages/user/create.vue' /* webpackChunkName: "pages/user/create" */))
const _bfab086e = () => interopDefault(import('../pages/user/identity/index.vue' /* webpackChunkName: "pages/user/identity/index" */))
const _20b224a0 = () => interopDefault(import('../pages/user/search.vue' /* webpackChunkName: "pages/user/search" */))
const _2ce51407 = () => interopDefault(import('../pages/user/seller.vue' /* webpackChunkName: "pages/user/seller" */))
const _6447e5e6 = () => interopDefault(import('../pages/user/seller/apply.vue' /* webpackChunkName: "pages/user/seller/apply" */))
const _0aa924a4 = () => interopDefault(import('../pages/user/seller/applyList.vue' /* webpackChunkName: "pages/user/seller/applyList" */))
const _739d3ab4 = () => interopDefault(import('../pages/user/seller/create.vue' /* webpackChunkName: "pages/user/seller/create" */))
const _10b06d40 = () => interopDefault(import('../pages/user/seller/search.vue' /* webpackChunkName: "pages/user/seller/search" */))
const _e64d6fd6 = () => interopDefault(import('../pages/user/identity/create.vue' /* webpackChunkName: "pages/user/identity/create" */))
const _10e3d6c1 = () => interopDefault(import('../pages/user/identity/search.vue' /* webpackChunkName: "pages/user/identity/search" */))
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
    name: "commodity___zh-cn",
    children: [{
      path: "all",
      component: _62449083,
      name: "commodity-all___zh-cn"
    }, {
      path: "create",
      component: _cd24a6ec,
      name: "commodity-create___zh-cn"
    }, {
      path: "options",
      component: _bffd3c00,
      name: "commodity-options___zh-cn",
      children: [{
        path: ":type?",
        component: _1ef38c4a,
        name: "commodity-options-type___zh-cn"
      }]
    }, {
      path: "search",
      component: _1d783b36,
      name: "commodity-search___zh-cn"
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
    path: "/information",
    component: _02f47270,
    name: "information___zh-cn",
    children: [{
      path: "create",
      component: _6ef8f7aa,
      name: "information-create___zh-cn"
    }, {
      path: "search",
      component: _4c8e12d7,
      name: "information-search___zh-cn"
    }]
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
    }, {
      path: "message",
      component: _3c83e71a,
      name: "page-message___zh-cn"
    }]
  }, {
    path: "/seller",
    component: _1d73ae6b,
    name: "seller___zh-cn",
    children: [{
      path: "apply",
      component: _5bea254a,
      name: "seller-apply___zh-cn"
    }, {
      path: "create",
      component: _7042e7d0,
      name: "seller-create___zh-cn"
    }, {
      path: "search",
      component: _17651308,
      name: "seller-search___zh-cn"
    }]
  }, {
    path: "/user",
    component: _46a329b7,
    name: "user___zh-cn",
    children: [{
      path: "create",
      component: _6b9c5f04,
      name: "user-create___zh-cn"
    }, {
      path: "identity",
      component: _bfab086e,
      name: "user-identity___zh-cn"
    }, {
      path: "search",
      component: _20b224a0,
      name: "user-search___zh-cn"
    }, {
      path: "seller",
      component: _2ce51407,
      name: "user-seller___zh-cn",
      children: [{
        path: "apply",
        component: _6447e5e6,
        name: "user-seller-apply___zh-cn"
      }, {
        path: "applyList",
        component: _0aa924a4,
        name: "user-seller-applyList___zh-cn"
      }, {
        path: "create",
        component: _739d3ab4,
        name: "user-seller-create___zh-cn"
      }, {
        path: "search",
        component: _10b06d40,
        name: "user-seller-search___zh-cn"
      }]
    }, {
      path: "identity/create",
      component: _e64d6fd6,
      name: "user-identity-create___zh-cn"
    }, {
      path: "identity/search",
      component: _10e3d6c1,
      name: "user-identity-search___zh-cn"
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
    name: "commodity___en-us",
    children: [{
      path: "all",
      component: _62449083,
      name: "commodity-all___en-us"
    }, {
      path: "create",
      component: _cd24a6ec,
      name: "commodity-create___en-us"
    }, {
      path: "options",
      component: _bffd3c00,
      name: "commodity-options___en-us",
      children: [{
        path: ":type?",
        component: _1ef38c4a,
        name: "commodity-options-type___en-us"
      }]
    }, {
      path: "search",
      component: _1d783b36,
      name: "commodity-search___en-us"
    }]
  }, {
    path: "/en-us/information",
    component: _02f47270,
    name: "information___en-us",
    children: [{
      path: "create",
      component: _6ef8f7aa,
      name: "information-create___en-us"
    }, {
      path: "search",
      component: _4c8e12d7,
      name: "information-search___en-us"
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
    }, {
      path: "message",
      component: _3c83e71a,
      name: "page-message___en-us"
    }]
  }, {
    path: "/en-us/seller",
    component: _1d73ae6b,
    name: "seller___en-us",
    children: [{
      path: "apply",
      component: _5bea254a,
      name: "seller-apply___en-us"
    }, {
      path: "create",
      component: _7042e7d0,
      name: "seller-create___en-us"
    }, {
      path: "search",
      component: _17651308,
      name: "seller-search___en-us"
    }]
  }, {
    path: "/en-us/user",
    component: _46a329b7,
    name: "user___en-us",
    children: [{
      path: "create",
      component: _6b9c5f04,
      name: "user-create___en-us"
    }, {
      path: "identity",
      component: _bfab086e,
      name: "user-identity___en-us"
    }, {
      path: "search",
      component: _20b224a0,
      name: "user-search___en-us"
    }, {
      path: "seller",
      component: _2ce51407,
      name: "user-seller___en-us",
      children: [{
        path: "apply",
        component: _6447e5e6,
        name: "user-seller-apply___en-us"
      }, {
        path: "applyList",
        component: _0aa924a4,
        name: "user-seller-applyList___en-us"
      }, {
        path: "create",
        component: _739d3ab4,
        name: "user-seller-create___en-us"
      }, {
        path: "search",
        component: _10b06d40,
        name: "user-seller-search___en-us"
      }]
    }, {
      path: "identity/create",
      component: _e64d6fd6,
      name: "user-identity-create___en-us"
    }, {
      path: "identity/search",
      component: _10e3d6c1,
      name: "user-identity-search___en-us"
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
    name: "commodity___es-es",
    children: [{
      path: "all",
      component: _62449083,
      name: "commodity-all___es-es"
    }, {
      path: "create",
      component: _cd24a6ec,
      name: "commodity-create___es-es"
    }, {
      path: "options",
      component: _bffd3c00,
      name: "commodity-options___es-es",
      children: [{
        path: ":type?",
        component: _1ef38c4a,
        name: "commodity-options-type___es-es"
      }]
    }, {
      path: "search",
      component: _1d783b36,
      name: "commodity-search___es-es"
    }]
  }, {
    path: "/es-es/information",
    component: _02f47270,
    name: "information___es-es",
    children: [{
      path: "create",
      component: _6ef8f7aa,
      name: "information-create___es-es"
    }, {
      path: "search",
      component: _4c8e12d7,
      name: "information-search___es-es"
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
    }, {
      path: "message",
      component: _3c83e71a,
      name: "page-message___es-es"
    }]
  }, {
    path: "/es-es/seller",
    component: _1d73ae6b,
    name: "seller___es-es",
    children: [{
      path: "apply",
      component: _5bea254a,
      name: "seller-apply___es-es"
    }, {
      path: "create",
      component: _7042e7d0,
      name: "seller-create___es-es"
    }, {
      path: "search",
      component: _17651308,
      name: "seller-search___es-es"
    }]
  }, {
    path: "/es-es/user",
    component: _46a329b7,
    name: "user___es-es",
    children: [{
      path: "create",
      component: _6b9c5f04,
      name: "user-create___es-es"
    }, {
      path: "identity",
      component: _bfab086e,
      name: "user-identity___es-es"
    }, {
      path: "search",
      component: _20b224a0,
      name: "user-search___es-es"
    }, {
      path: "seller",
      component: _2ce51407,
      name: "user-seller___es-es",
      children: [{
        path: "apply",
        component: _6447e5e6,
        name: "user-seller-apply___es-es"
      }, {
        path: "applyList",
        component: _0aa924a4,
        name: "user-seller-applyList___es-es"
      }, {
        path: "create",
        component: _739d3ab4,
        name: "user-seller-create___es-es"
      }, {
        path: "search",
        component: _10b06d40,
        name: "user-seller-search___es-es"
      }]
    }, {
      path: "identity/create",
      component: _e64d6fd6,
      name: "user-identity-create___es-es"
    }, {
      path: "identity/search",
      component: _10e3d6c1,
      name: "user-identity-search___es-es"
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
    name: "commodity___ja-jp",
    children: [{
      path: "all",
      component: _62449083,
      name: "commodity-all___ja-jp"
    }, {
      path: "create",
      component: _cd24a6ec,
      name: "commodity-create___ja-jp"
    }, {
      path: "options",
      component: _bffd3c00,
      name: "commodity-options___ja-jp",
      children: [{
        path: ":type?",
        component: _1ef38c4a,
        name: "commodity-options-type___ja-jp"
      }]
    }, {
      path: "search",
      component: _1d783b36,
      name: "commodity-search___ja-jp"
    }]
  }, {
    path: "/ja-jp/information",
    component: _02f47270,
    name: "information___ja-jp",
    children: [{
      path: "create",
      component: _6ef8f7aa,
      name: "information-create___ja-jp"
    }, {
      path: "search",
      component: _4c8e12d7,
      name: "information-search___ja-jp"
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
    }, {
      path: "message",
      component: _3c83e71a,
      name: "page-message___ja-jp"
    }]
  }, {
    path: "/ja-jp/seller",
    component: _1d73ae6b,
    name: "seller___ja-jp",
    children: [{
      path: "apply",
      component: _5bea254a,
      name: "seller-apply___ja-jp"
    }, {
      path: "create",
      component: _7042e7d0,
      name: "seller-create___ja-jp"
    }, {
      path: "search",
      component: _17651308,
      name: "seller-search___ja-jp"
    }]
  }, {
    path: "/ja-jp/user",
    component: _46a329b7,
    name: "user___ja-jp",
    children: [{
      path: "create",
      component: _6b9c5f04,
      name: "user-create___ja-jp"
    }, {
      path: "identity",
      component: _bfab086e,
      name: "user-identity___ja-jp"
    }, {
      path: "search",
      component: _20b224a0,
      name: "user-search___ja-jp"
    }, {
      path: "seller",
      component: _2ce51407,
      name: "user-seller___ja-jp",
      children: [{
        path: "apply",
        component: _6447e5e6,
        name: "user-seller-apply___ja-jp"
      }, {
        path: "applyList",
        component: _0aa924a4,
        name: "user-seller-applyList___ja-jp"
      }, {
        path: "create",
        component: _739d3ab4,
        name: "user-seller-create___ja-jp"
      }, {
        path: "search",
        component: _10b06d40,
        name: "user-seller-search___ja-jp"
      }]
    }, {
      path: "identity/create",
      component: _e64d6fd6,
      name: "user-identity-create___ja-jp"
    }, {
      path: "identity/search",
      component: _10e3d6c1,
      name: "user-identity-search___ja-jp"
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
