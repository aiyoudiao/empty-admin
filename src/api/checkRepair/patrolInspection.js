import request from '@/utils/request'

/**
 * 命令下发集接口-Token认证
 * @param {*} username 
 * @param {*} password 
 */
export function rquestValidityLogin(username, password) {
  const data = {
    username, password
  }
  return request({
    url: '/common-usermgmt/auth/token',
    method: 'post',
    data: data 
  })
}

/**
 * 获取设备及IP地址
 * @param {*} requestId 
 * @param {*} token 
 */
export function getDeviceAndIp(requestId, token ) {
  const data = {
    requestId, token 
  }
  return request({
    url: '/getDeviceAndIpList',
    method: 'post',
    data: data 
  })
}

/**
 * 获取执行同步命令集接口后的列表数据
 * @param {*} processor 
 * @param {*} platCode 
 * @param {*} bzCode 
 * @param {*} devList 
 */
export function getExecuteSyncCmdList(processor, platCode, bzCode, devList) {
  const data = {
    token: processor, platCode, bzCode, devList
  }
  return request({
    url: '/custom-bankcom-southservice/cmdset/execute/readonly/sync',
    method: 'post',
    data: data 
  })
}

/**
 * 获取执行实时命令集接口后的列表数据
 * @param {*} processor 
 * @param {*} desc 
 * @param {*} devList 
 */
export function getExecuteRealtimeCmdList(processor, desc, devList) {
  const data = {
    token: processor, desc, devList
  }
  return request({
    url: '/custom-bankcom-southservice/execute/readonly/realtime',
    method: 'post',
    data: data 
  })
}

