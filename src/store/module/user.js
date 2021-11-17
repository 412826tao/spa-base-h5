import {
  onLogin,
  Logout,
  getUserInfo
} from '@/api/login'
import { setToken, getToken } from '../../utils/common'

export default {
  state: {
    token: getToken(),
    accountId: '',
    accountName: '',
    hasGetInfo: false
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.accountId = userInfo.id
      state.accountName = userInfo.userName
    },
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) {
      state.hasGetInfo = status
    }
  },
  getters: {

  },
  actions: {
    // 登录
    handleLogin ({ commit }, formData) {
      return new Promise((resolve, reject) => {
        onLogin(formData).then(res => {
          const data = res.data
          if (res.code === 0 && data.token !== null) {
            commit('setToken', data.token)
          }
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        Logout().then(res => {
          if (res.code === 0) {
            commit('setToken', '')
            resolve(res)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo(state.token).then(res => {
            const data = res.data
            if (res.code === 0) {
              commit('setUserInfo', data)
              commit('setHasGetInfo', true)
              resolve(res)
            } else {
              reject(res)
            }
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
