export default [
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "article" */ 'views/examples/Detail.vue'),
    meta: {
      auth: true,
      title: '详情',
      keepAlive: true
    }
  },
  {
    path: '/pageIndex',
    name: 'pageIndex',
    component: () => import(/* webpackChunkName: "article" */ 'views/examples/index.vue'),
    meta: {
      auth: true,
      title: '详情',
      keepAlive: true
    }
  }
]
