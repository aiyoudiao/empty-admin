
/**
 * 组件视图-路由列表
 * 存放所有组件功能展示页面
 */


export default [
    {
      path: 'dragKanban',
      name: 'dragKanban',
      component: () => import('@/component-views/components/dragKanban'),
      meta: { title: 'dragKanban' }
    },
    {
      path: 'markdown',
      name: 'markdown',
      component: () => import('@/component-views/components/markdown'),
      meta: { title: 'markdown' }
    },
    {
      path: 'backToTop',
      name: 'backToTop',
      component: () => import('@/component-views/components/backToTop'),
      meta: { title: 'backToTop' }
    },
    {
      path: 'clipboard',
      name: 'clipboard',
      component: () => import('@/component-views/clipboard/index'),
      meta: { title: 'clipboard', icon: 'clipboard' }
    },
    {
      path: 'mixin',
      name: 'componentMixin',
      component: () => import('@/component-views/components-demo/mixin'),
      meta: { title: 'componentMixin' }
    },
    {
      path: 'index',
      name: 'index',
      component: () => import('@/component-views/components/index'),
      meta: { title: 'HightLightinViewer' }
    },
    {
      path: 'countup',
      name: 'countup',
      component: () => import('@/component-views/components/countup/'),
      meta: { title: 'Digitalanimation' }
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
        {
          path: 'columnar',
          name: 'columnar',
          component: () => import('@/component-views/charts/columnar'),
          meta: { title: 'columnar', icon: 'columnar' }
        },
        {
          path: 'barGraph',
          name: 'barGraph',
          component: () => import('@/component-views/charts/barGraph'),
          meta: { title: 'barGraph', icon: 'barGraph' }
        },
        {
          path: 'pieChart',
          name: 'pieChart',
          component: () => import('@/component-views/charts/pieChart'),
          meta: { title: 'pieChart', icon: 'pieChart' }
        },
        {
          path: 'ringChart',
          name: 'ringChart',
          component: () => import('@/component-views/charts/ringChart'),
          meta: { title: 'ringChart', icon: 'ringChart' }
        },
        {
          path: 'waterfallCharts',
          name: 'waterfallCharts',
          component: () => import('@/component-views/charts/waterfallCharts'),
          meta: { title: 'waterfallCharts', icon: 'waterfallCharts' }
        },
        {
          path: 'funnelCharts',
          name: 'funnelCharts',
          component: () => import('@/component-views/charts/funnelCharts'),
          meta: { title: 'funnelCharts', icon: 'funnelCharts' }
        },
        {
          path: 'radarCharts',
          name: 'radarCharts',
          component: () => import('@/component-views/charts/radarCharts'),
          meta: { title: 'radarCharts', icon: 'radarCharts' }
        },
        {
          path: 'sankeyChart',
          name: 'sankeyChart',
          component: () => import('@/component-views/charts/sankeyChart'),
          meta: { title: 'sankeyChart', icon: 'sankeyChart' }
        },
        {
          path: 'heatmapChart',
          name: 'heatmapChart',
          component: () => import('@/component-views/charts/heatmapChart'),
          meta: { title: 'heatmapChart', icon: 'heatmapChart' }
        },
        {
          path: 'scatterChart',
          name: 'scatterChart',
          component: () => import('@/component-views/charts/scatterChart'),
          meta: { title: 'scatterChart', icon: 'scatterChart' }
        },
        {
          path: 'candleChart',
          name: 'candleChart',
          component: () => import('@/component-views/charts/candleChart'),
          meta: { title: 'candleChart', icon: 'candleChart' }
        },
        {
          path: 'gaugeChart',
          name: 'gaugeChart',
          component: () => import('@/component-views/charts/gaugeChart'),
          meta: { title: 'gaugeChart', icon: 'gaugeChart' }
        },
        {
          path: 'treeChart',
          name: 'treeChart',
          component: () => import('@/component-views/charts/treeChart'),
          meta: { title: 'treeChart', icon: 'treeChart' }
        }
      ]
    },
    // 地图
    {
      path: '/map',
      component: { render: (r) => r("router-view") },
      redirect: '/map/pointAccumulationMap',
      name: 'baidumap',
      meta: {
        title: 'baidumap',
        icon: 'baidumap'
      },
      children: [
        {
          path: 'pointMap',
          name: 'pointMap',
          component: () => import('@/component-views/map/pointMap'),
          meta: { title: 'pointMap', icon: 'pointMap' }
        },
        {
          path: 'cityLlistMap',
          name: 'cityLlistMap',
          component: () => import('@/component-views/map/cityLlistMap'),
          meta: { title: 'cityLlistMap', icon: 'cityLlistMap' }
        },
        {
          path: 'roadBookMap',
          name: 'roadBookMap',
          component: () => import('@/component-views/map/roadBookMap'),
          meta: { title: 'roadBookMap', icon: 'roadBookMap' }
        },
        {
          path: 'gpsMap',
          name: 'gpsMap',
          component: () => import('@/component-views/map/gpsMap'),
          meta: { title: 'gpsMap', icon: 'gpsMap' }
        }
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

    {
      path: '/wel',
      component: { render: (r) => r("router-view") },
      meta: { title: 'wel', icon: 'wel' },
      children: [
        {
          path: 'wel',
          name: 'wel',
          component: () => import('@/component-views/page/wel'),
          meta: { title: 'wel', icon: 'wel' }
        }

      ]
    },

    // 表情包
    // {
    //   path: '/emoji',
    //   component:  { render: (r) => r("router-view") },
    //   meta: { title: 'emoji', icon: 'emoji' },
    //   children: [
    //     {
    //       path: 'emoji',
    //       name: 'emoji',
    //       component: () => import('@/component-views/githubemoji'),
    //       meta: { title: 'emoji', icon: 'emoji' }
    //     }

    //   ]
    // },
    // 树形组件
    {
      path: '/treeMen',
      component: { render: (r) => r("router-view") },
      redirect: 'noredirect',
      meta: {
        title: 'treeMen',
        icon: 'TreeMean'
      },
      children: [
        {
          path: 'treeMen',
          name: 'treeMen-demo',
          component: () => import('@/component-views/tree/treeMen'),
          meta: { title: 'treeMen', icon: 'TreeMean' }
        }
      ]
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
        },
        {
          path: 'font-awesome',
          name: 'font-awesome',
          component: () => import('@/component-views/icons/font-awesome/'),
          meta: { title: 'fontawesome', icon: 'font-awesome' }
        },
        {
          path: 'AliIcons',
          name: 'AliIcons',
          component: () => import('@/component-views/icons/AliIcons/'),
          meta: { title: 'AliIcons', icon: 'AliIcons' }
        }
      ]
    },
    // 实战
    {
      path: '/vueActual',
      component: { render: (r) => r("router-view") },
      redirect: '/vueActual/Pos',
      name: 'vueActual',
      meta: {
        title: 'vueActual',
        icon: 'shizhan'
      },
      children: [
        {
          path: 'Pos',
          name: 'Pos',
          component: () => import('@/component-views/vueActual/Pos'),
          meta: { title: 'vueActual', icon: 'shizhan' }
        }
      ]
    },

    // 表格
    {
      path: '/Tabs',
      component: { render: (r) => r("router-view") },
      redirect: 'Tabs',
      meta: { title: 'Tabs', icon: 'tab' },
      children: [
        {
          path: 'Tabs',
          name: 'Tabs',
          component: () => import('@/component-views/table/Tabs'),
          meta: { title: 'Tabs', icon: 'tab' }
        }
      ]
    },

    // 滚动定位
    {
      path: '/better-scroll',
      component: { render: (r) => r("router-view") },
      redirect: 'better-scroll/to',
      meta: { title: 'better-scroll', icon: 'better-scroll' },
      children: [
        {
          path: 'to',
          name: 'to',
          component: () => import('@/component-views/better-scroll/to'),
          meta: { title: 'Rollingpositioning', icon: 'Rollingpositioning' }
        }
      ]
    },
    // 表单
    {
      path: '/form',
      component: { render: (r) => r("router-view") },
      redirect: '/form/BaseForm',
      name: 'form',
      meta: {
        title: 'form',
        icon: 'form'
      },
      children: [
        {
          path: 'BaseForm',
          name: 'BaseForm',
          component: () => import('@/component-views/form/BaseForm'),
          meta: { title: 'BaseForm' }
        },
        {
          path: 'VueEditor',
          name: 'VueEditor',
          component: () => import('@/component-views/form/VueEditor'),
          meta: { title: 'VueEditor' }
        },
        {
          path: 'Upload',
          name: 'Upload',
          component: () => import('@/component-views/form/Upload'),
          meta: { title: 'Upload' }
        }
      ]
    },
    // 右菜单
    {
      path: '/contextmenu',
      component: { render: (r) => r("router-view") },
      redirect: '/contextmenu/simple',
      name: 'contextmenu',
      meta: {
        title: 'contextmenu',
        icon: 'right-mean'
      },
      children: [
        {
          path: 'simple',
          name: 'simple',
          component: () => import('@/component-views/contextmenu/simple'),
          meta: { title: 'simple' }
        },
        {
          path: 'divier',
          name: 'divier',
          component: () => import('@/component-views/contextmenu/divier'),
          meta: { title: 'divier' }
        },
        {
          path: 'group',
          name: 'group',
          component: () => import('@/component-views/contextmenu/group'),
          meta: { title: 'group' }
        },
        {
          path: 'submenu',
          name: 'submenu',
          component: () => import('@/component-views/contextmenu/submenu'),
          meta: { title: 'submenu' }
        },
        {
          path: 'disabled',
          name: 'disabled',
          component: () => import('@/component-views/contextmenu/disabled'),
          meta: { title: 'disabled' }
        },
        {
          path: 'custom-trigger',
          name: 'customtrigger',
          component: () => import('@/component-views/contextmenu/custom-trigger'),
          meta: { title: 'customtrigger' }
        }
      ]
    },
    // 表格
    {
      path: '/table',
      component: { render: (r) => r("router-view") },
      redirect: '/table/complex-table',
      name: 'table',
      meta: {
        title: 'Table',
        icon: 'table'
      },
      children: [
        {
          path: 'complex-table',
          name: 'complex-table',
          component: () => import('@/component-views/table/complex-table'),
          meta: { title: 'complexTable' }
        },
        {
          path: 'TreeTable',
          name: 'TreeTable',
          component: () => import('@/component-views/table/tree-table/index'),
          meta: { title: 'treeTable' }
        }

      ]
    },
    //
    {
      path: '/excel',
      component: { render: (r) => r("router-view") },
      redirect: '/excel/exportExcel',
      name: 'excel',
      meta: {
        title: 'excel',
        icon: 'excel'
      },
      children: [
        {
          path: 'exportExcel',
          name: 'exportExcel',
          component: () => import('@/component-views/excel/exportExcel'),
          meta: { title: 'exportExcel' }
        },
        {
          path: 'selectExcel',
          name: 'selectExcel',
          component: () => import('@/component-views/excel/selectExcel'),
          meta: { title: 'selectExcel' }
        },
        {
          path: 'uploadExcel',
          name: 'uploadExcel',
          component: () => import('@/component-views/excel/uploadExcel'),
          meta: { title: 'uploadExcel' }
        }
      ]
    },
    {
      path: '/zip',
      component: { render: (r) => r("router-view") },
      redirect: 'zip',
      children: [
        {
          path: 'zip-index',
          name: 'zip-index',
          component: () => import('@/component-views/zip/index'),
          meta: { title: 'zip', icon: 'zip' }
        }
      ]
    },
    {
      path: '/i18n-demo',
      component: { render: (r) => r("router-view") },
      redirect: 'i18n-demo',
      children: [
        {
          path: 'indexLang',
          name: 'indexLang',
          component: () => import('@/component-views/i18n-demo/indexLang'),
          meta: { title: 'i18n', icon: 'international' }
        }
      ]
    }
  ]