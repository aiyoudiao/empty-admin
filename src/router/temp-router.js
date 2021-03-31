/**
 * 模板 相关的view
 */

export default [
    {
        path: 'temp1',
        name: 'temp1',
        hidden: false,
        component: () => import('@/views/TempPage/Temp1/Temp1.vue'),
        meta: { title: '模板页一', icon: 'list' }
    },
    {
        path: 'temp2',
        name: 'temp2',
        hidden: false,
        component: () => import('@/views/TempPage/Temp2/Temp2.vue'),
        meta: { title: '模板页2', icon: 'chart' }
    },
]