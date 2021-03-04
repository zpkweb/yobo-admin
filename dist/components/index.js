export { default as User } from '../../components/User.vue'
export { default as Aside } from '../../components/aside.vue'
export { default as Chart } from '../../components/chart.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as Header } from '../../components/header.vue'
export { default as Menu } from '../../components/menu.vue'

export const LazyUser = import('../../components/User.vue' /* webpackChunkName: "components/User" */).then(c => c.default || c)
export const LazyAside = import('../../components/aside.vue' /* webpackChunkName: "components/aside" */).then(c => c.default || c)
export const LazyChart = import('../../components/chart.vue' /* webpackChunkName: "components/chart" */).then(c => c.default || c)
export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyMenu = import('../../components/menu.vue' /* webpackChunkName: "components/menu" */).then(c => c.default || c)
