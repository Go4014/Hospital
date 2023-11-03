import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d409924 = () => interopDefault(import('..\\pages\\order\\index.vue' /* webpackChunkName: "pages/order/index" */))
const _0b04cad7 = () => interopDefault(import('..\\pages\\patient\\index.vue' /* webpackChunkName: "pages/patient/index" */))
const _142dd36d = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _4a68e17b = () => interopDefault(import('..\\pages\\hosp\\booking.vue' /* webpackChunkName: "pages/hosp/booking" */))
const _4d02f036 = () => interopDefault(import('..\\pages\\hosp\\schedule.vue' /* webpackChunkName: "pages/hosp/schedule" */))
const _165bf4de = () => interopDefault(import('..\\pages\\order\\show.vue' /* webpackChunkName: "pages/order/show" */))
const _2f69d266 = () => interopDefault(import('..\\pages\\patient\\add.vue' /* webpackChunkName: "pages/patient/add" */))
const _143045f0 = () => interopDefault(import('..\\pages\\patient\\show.vue' /* webpackChunkName: "pages/patient/show" */))
const _33e93a51 = () => interopDefault(import('..\\pages\\weixin\\callback.vue' /* webpackChunkName: "pages/weixin/callback" */))
const _8294dbd0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _71a8dad9 = () => interopDefault(import('..\\pages\\hosp\\detail\\_hoscode.vue' /* webpackChunkName: "pages/hosp/detail/_hoscode" */))
const _4d86e120 = () => interopDefault(import('..\\pages\\hosp\\notice\\_hoscode.vue' /* webpackChunkName: "pages/hosp/notice/_hoscode" */))
const _3ee7eec8 = () => interopDefault(import('..\\pages\\hosp\\_hoscode.vue' /* webpackChunkName: "pages/hosp/_hoscode" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/order",
    component: _2d409924,
    name: "order"
  }, {
    path: "/patient",
    component: _0b04cad7,
    name: "patient"
  }, {
    path: "/user",
    component: _142dd36d,
    name: "user"
  }, {
    path: "/hosp/booking",
    component: _4a68e17b,
    name: "hosp-booking"
  }, {
    path: "/hosp/schedule",
    component: _4d02f036,
    name: "hosp-schedule"
  }, {
    path: "/order/show",
    component: _165bf4de,
    name: "order-show"
  }, {
    path: "/patient/add",
    component: _2f69d266,
    name: "patient-add"
  }, {
    path: "/patient/show",
    component: _143045f0,
    name: "patient-show"
  }, {
    path: "/weixin/callback",
    component: _33e93a51,
    name: "weixin-callback"
  }, {
    path: "/",
    component: _8294dbd0,
    name: "index"
  }, {
    path: "/hosp/detail/:hoscode?",
    component: _71a8dad9,
    name: "hosp-detail-hoscode"
  }, {
    path: "/hosp/notice/:hoscode?",
    component: _4d86e120,
    name: "hosp-notice-hoscode"
  }, {
    path: "/hosp/:hoscode?",
    component: _3ee7eec8,
    name: "hosp-hoscode"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
