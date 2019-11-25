export default [
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "article" */ 'views/examples/uni-app/calendar.vue'),
    meta: {
      auth: true,
      title: '详情',
      keepAlive: true
    }
  },
  {
    path: '/badge',
    name: 'badge',
    component: () => import(/* webpackChunkName: "article" */ 'views/examples/uni-app/badge.vue'),
    meta: {
      auth: true,
      title: '详情',
      keepAlive: true
    }
  }
]
