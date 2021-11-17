import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import { setToken, getToken, setTitle } from '@/utils/common'

const baseRoute = process.env.VUE_APP_BASE_URL
Vue.use(Router)

const router = new Router({
  routes,
  base: baseRoute,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'userLogin'
const WHITE_LIST = ['userLogin', 'homeIndex']

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (WHITE_LIST.includes(to.name)) {
    next()
  } else {
    if (!token) {
      next({ name: LOGIN_PAGE_NAME })
    } else {
      if (store.state.user.hasGetInfo) {
        next()
      } else {
        store.dispatch('getUserInfo').then(res => {
          next()
        }).catch(() => {
          setToken('')
          next({
            name: LOGIN_PAGE_NAME
          })
        })
      }
    }
  }
})

router.afterEach(to => {
  setTitle(to)
  window.scrollTo(0, 0)
})
export default router
