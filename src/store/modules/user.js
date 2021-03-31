import { login, logout, getInfo } from '@/api/login'
import { login as login2 } from '@/api/api2/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { jsonInBlacklist } from '@/api/api2/jwt'
import router from '@/router/index'
import {
  setStore,
  getStore,
  removeStore
} from '@/utils/store'
const user = {
  namespaced: true,
  state: {
    token: getToken(),
    name: '',
    avatar: '',

    userInfo: {
      uuid: "",
      nickName: "",
      headerImg: "",
      authority: "",
    },

    roles: [],
    isLock: getStore({
      name: 'isLock'
    }) || false,
    lockPasswd: getStore({
      name: 'lockPasswd'
    }) || '',
    browserHeaderTitle: getStore({
      name: 'browserHeaderTitle'
    }) || 'NxAdmin'
  },

  mutations: {
    ResetUserInfo(state, userInfo = {}) {
      state.userInfo = {
        ...state.userInfo,
        ...userInfo
      }
    },
    LoginOut(state) {
      state.userInfo = {}
      state.token = ""
      router.push({ name: 'login', replace: true })
      sessionStorage.clear()
      window.location.reload() 
    },
    setUserInfo(state, userInfo) {
      // 这里的 `state` 对象是模块的局部状态
      state.userInfo = userInfo
    },
    setToken(state, token) {
      // 这里的 `state` 对象是模块的局部状态
      state.token = token
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_LOCK_PASSWD: (state, lockPasswd) => {
      state.lockPasswd = lockPasswd
      setStore({
        name: 'lockPasswd',
        content: state.lockPasswd,
        type: 'session'
      })
    },
    SET_LOCK: (state, action) => {
      state.isLock = true
      setStore({
        name: 'isLock',
        content: state.isLock,
        type: 'session'
      })
    },
    CLEAR_LOCK: (state, action) => {
      state.isLock = false
      state.lockPasswd = ''
      removeStore({
        name: 'lockPasswd'
      })
      removeStore({
        name: 'isLock'
      })
    },
    SET_BROWSERHEADERTITLE: (state, action) => {
      state.browserHeaderTitle = action.browserHeaderTitle
    }

  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    async LoginIn({ commit }, loginInfo) {
      const res = await login2(loginInfo)
      if (res.code == 0) {
        commit('setUserInfo', res.data.user)
        commit('setToken', res.data.token)
        setToken(res.data.token)
        const redirect = router.history.current.query.redirect
        if (redirect) {
          router.push({ path: redirect })
        } else {
          router.push({ path: '/dashboard/dashboard' })
        }
        return true
      }
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          console.log('response', response)
          const data = response
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // // 登出
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       commit('CLEAR_LOCK')
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    async LoginOut({ commit }) {
      const res = await jsonInBlacklist()
      if (res.code == 0) {
        debugger
        commit("LoginOut")
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('CLEAR_LOCK')
        removeToken()
      }
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getInfo(role).then(response => {
          const data = response
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve()
        })
      })
    }
  }
}

export default user
