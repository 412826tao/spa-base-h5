import axios from 'axios'
import config from '../config/index'
import { getToken, setToken } from '@/utils/common'
const { WEB_API } = config
export const TOKEN_KEY = 'CLIENT_TOKEN'
const baseUrl = WEB_API || ''
// 创建一个独立的axios实例
const service = axios.create({
  baseURL: baseUrl,
  // 定义统一的请求头部
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  // 配置请求超时时间
  timeout: 60000
})

service.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers['exchange-token'] = token
  }
  config.headers.Accept = 'application/json'
  config.headers['Content-Type'] = 'application/json; charset=utf-8'
  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data.code === 0) {
      return data
    } else {
      return Promise.reject(data)
    }
  }, (error) => {
    if (error.response && error.response.status === 401) {
      setToken('')
    }
    return Promise.reject(error.response)
  }
)

export default service
