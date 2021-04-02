import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权
import {
  setTitle,
  getPageTitle
} from '@/utils/util' // 设置浏览器头部标题

let asyncRouterFlag = 0

// 验证权限的函数
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (getToken()) {
    // 设置浏览器头部标题
    const browserHeaderTitle = getPageTitle(to.name)
    store.commit('user/SET_BROWSERHEADERTITLE', {
      browserHeaderTitle: browserHeaderTitle
    })
    /* has token*/
    if (store.getters.isLock && to.path !== '/lock') {
      next({
        path: '/lock'
      })
      NProgress.done()
    } else if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {

      if (store.getters.roles.length === 0) {
         // 添加flag防止多次获取动态路由和栈溢出
         if (!asyncRouterFlag) {
          asyncRouterFlag++
          next({...to, replace: true })
          } else {
              next()
          }

      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/error/404', replace: true, query: { noGoBack: true } })
        }
      }
    }
  } else {
    // 设置浏览器头部标题
    const browserHeaderTitle = getPageTitle(to.name)
    store.commit('user/SET_BROWSERHEADERTITLE', {
      browserHeaderTitle: browserHeaderTitle
    })
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

/**
 * 在路由跳转结束，设置文档的title
 */

router.afterEach(() => {
  NProgress.done() // 结束Progress
  setTimeout(() => {
    const browserHeaderTitle = store.getters.browserHeaderTitle
    console.log('browserHeaderTitle', browserHeaderTitle)
    setTitle(browserHeaderTitle)
  }, 0)
})
