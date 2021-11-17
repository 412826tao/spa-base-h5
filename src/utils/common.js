import Cookies from 'js-cookie'
import config from '../config/index'
export const TOKEN_KEY = 'CLIENT_TOKEN'
const { title } = config
// 用cookie 还是 localStorage 根据情况来定
// 设置token
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token)
}

// 获取token
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  // const token = localStorage.getItem(TOKEN_KEY)
  if (token && token !== 'null') {
    return token
  } else {
    return false
  }
}

// 根据当前跳转的路由设置显示在浏览器标签的title
export const setTitle = (routeItem, vm) => {
  const pageTitle = (routeItem.meta && routeItem.meta.title) || ''
  const resTitle = pageTitle ? `${pageTitle}` : title
  window.document.title = resTitle
}

// 生成guid
export function getUUID () {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  var uuid = s.join('')
  return uuid
}
