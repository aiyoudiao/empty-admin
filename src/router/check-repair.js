import subView from '@/views/CheckRepair/Components/SubView/SubView.vue'

export function getCheckRepair(Layout) {
  const checkRepair = {
    path: '/check',
    component: Layout,
    name: 'Check',
    id: '108',
    alwaysShow: true,
    meta: { title: '排查抢修', icon: 'repair' },
    children: [
      // {
      //   path: 'application-system',
      //   name: 'ApplicationSystemCheck',
      //   id: '108103',
      //   // component:()=>import('@/views/check-repair/application-system-check/index'),
      //   component: () => import('@/views/check-repair/self-check/model-check/index'),
      //   meta: { title: '应用系统自检', icon: 'search' }
      // },
      // {
      //   path: 'region',
      //   name: 'RegionCheck',
      //   id: '108102',
      //   component: () => import('@/views/check-repair/region-check/index'),
      //   meta: { title: '区域自检', icon: 'search' }
      // },
      {
        path: 'obj-check',
        name: 'ObjCheck',
        id: '108101',
        component: subView,
        alwaysShow: true,
        meta: { title: '运维对象自检', icon: 'search' },
        children: [
          {
            path: 'device',
            name: 'DeviceCheck',
            id: '108101101',
            component: () => import('@/views/CheckRepair/ObjectCheck/DeviceCheck/DeviceCheck2'),
            meta: { title: '设备自检', icon: 'search' }
          },
          // {
          //   path: 'operate',
          //   hidden: true,
          //   id: '108101666',
          //   name: 'patrol-inspection-operate',
          //   component: () => import('@/views/LocalDemo/PatrolInspection/PatrolOperate.vue'),
          //   meta: { title: '巡检命令集', icon: 'search' }
          // },
          // {
          //   path: 'port',
          //   name: 'PortCheck',
          //   id: '108101102',
          //   component: () => import('@/views/check-repair/obj-check/port-check/index'),
          //   meta: { title: '端口自检', icon: 'search' }
          // },
          // {
          //   path: 'line',
          //   name: 'LineCheck',
          //   id: '108101103',
          //   component: () => import('@/views/check-repair/obj-check/line-check/index'),
          //   meta: { title: '线路自检', icon: 'search' }
          // },
          // {
          //   path: 'vs',
          //   name: 'VSCheck',
          //   id: '108101104',
          //   component: () => import('@/views/check-repair/obj-check/vs-check/index'),
          //   meta: { title: 'VS自检', icon: 'search' }
          // },
          // {
          //   path: 'domain-name',
          //   name: 'DomainNameCheck',
          //   id: '108101105',
          //   component: () => import('@/views/check-repair/obj-check/domain-name-check/index'),
          //   meta: { title: '域名自检', icon: 'search' }
          // },
          // {
          //   path: 'application-node',
          //   name: 'ApplicationNodeCheck',
          //   id: '108101106',
          //   component: () => import('@/views/check-repair/obj-check/application-node-check/index'),
          //   meta: { title: '应用节点自检', icon: 'search' }
          // }
        ]
      },
      // {
      //   path: 'self-check',
      //   name: 'SelfCheck',
      //   id: '108104',
      //   component: () => import('@/views/check-repair/self-check/index'),
      //   meta: { title: '自定义自检', icon: 'search' },
      //   children: [
      //     {
      //       path: 'model',
      //       name: 'ModelCheck',
      //       id: '108104101',
      //       component: () => import('@/views/check-repair/self-check/model-check/index'),
      //       meta: { title: '模板自检', icon: 'search' }
      //     },
      //     {
      //       path: 'communication',
      //       name: 'CommunicationCheck',
      //       id: '108104102',
      //       component: () => import('@/views/check-repair/self-check/communication-check/index'),
      //       meta: { title: '通讯对自检', icon: 'search' }
      //     }
      //   ]
      // }
    ]
  }

  return checkRepair
}
