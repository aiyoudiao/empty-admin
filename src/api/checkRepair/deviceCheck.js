import request from '@/utils/request'

export function querySearch(query) {
    const data = { params: query }
    return request({
        url: '/bps/menus/nias_templatecheck_devicecheck_menu',
        method: 'get',
        params: data
    })
}