export default [
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/user/login',
    name: 'userLogin',
    meta: {
      title: '用户 - 登录'
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/login.vue')
  },
  {
    path: '/home/index',
    name: 'homeIndex',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/home/index.vue')
  }
]
