export default [
  {
    path: '/china',
    name: 'china',
    component: () => import(/* webpackChunkName: "article" */ 'views/colors/china.vue'),
    meta: {
      auth: true,
      title: '中国色',
      keepAlive: true
    }
  }
]
