
/**
 * 存放不同理由配置的demo
 */


 export default [
    {
      path: 'clipboard',
      name: 'clipboard',
      component: () => import('@/component-views/clipboard/index'),
      meta: { title: 'clipboard', icon: 'clipboard' }
    },

    /**
     * 2020-12-23 整合的路由
     */

    // 图表
    {
      path: '/charts',
      component: { render: (r) => r("router-view") },
      redirect: '/charts/DiscountFigure',
      name: 'charts',
      meta: { title: 'charts', icon: 'chart' },
      children: [
        {
          path: 'DiscountFigure',
          name: 'DiscountFigure',
          component: () => import('@/component-views/charts/DiscountFigure'),
          meta: { title: 'DiscountFigure', icon: 'discounting' }
        },
        
      ]
    },
    // 第三方官网
    {
      path: '/myiframe',
      component: { render: (r) => r("router-view") },
      redirect: '/myiframe',
      children: [{
        path: ':routerPath',
        name: 'myiframe',
        component: () => import('@/components/nx-iframe'),
        meta: { title: 'thirdPartyWebsite', icon: 'people' }
      }]

    },
    // pdf说明
    {
      path: '/pdfTest',
      component: { render: (r) => r("router-view") },
      redirect: '/pdfTest/pdf',
      children: [{
        path: 'pdf',
        name: 'pdf',
        component: () => import('@/component-views/pdfTest/index'),
        meta: { title: 'PDF', icon: 'pdf' }
      }]

    },
    // 图标组件
    {
      path: '/icons',
      component: { render: (r) => r("router-view") },
      redirect: '/icons/iconIndex',
      name: 'icons',
      meta: {
        title: 'Icons',
        icon: 'icon'
      },
      children: [
        {
          path: 'iconIndex',
          name: 'iconIndex',
          component: () => import('@/component-views/icons/svg-icons/iconIndex'),
          meta: { title: 'svgicons', icon: 'icon' }
        }
      ]
    }
  ]