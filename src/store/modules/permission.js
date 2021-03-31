import { constantRouterMap } from '@/router'

/**
 * 通过菜单ID来判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(asyncRouters, route) {
  if (route.ID !== null || route.ID !== undefined) {
    // return asyncRouters.some(role => route.ID === role.ID)
    let items = []
    expandChldren(asyncRouters[0].children, items)
    return items.some(role => route.ID === role.ID)
  } else {
    return true
  }
}

/**
 * 展开所有的子菜单，获取平铺的菜单数据
 * @param {*} children 
 * @param {*} arr 
 */


function expandChldren (children, arr) {
  
  children.forEach(item => {
    arr.push(item)
    if (item.children && item.children.length) {
      expandChldren(item.children, arr)
    }
  })
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限菜单的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, asyncRouters) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(asyncRouters, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, asyncRouters)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
      // console.log('state.routers', state.routers)
    }
  },
  actions: {
  }
}

export default permission
