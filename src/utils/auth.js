import Cookies from 'js-cookie'
// import { store } from '@/store/index'
const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
  // const token = store.getters['user/token']
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
