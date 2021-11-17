import http from '../utils/http'

// 登录
export function onLogin (data) {
  return http.request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

// 注销
export function Logout () {
  return http.request({
    url: '/api/user/logout',
    method: 'post'
  })
}

// 获取用户信息
export function getUserInfo () {
  return http.request({
    url: '/api/user/current',
    method: 'get'
  })
}
