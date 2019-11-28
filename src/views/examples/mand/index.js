const pagesContext = require.context('./', true, /index.vue$/)

let pages = []
// console.dir(pagesContext)
pagesContext.keys().forEach(page => {
  let obj = {
    path: '',
    name: '',
    url: '',
    component: {}
  }
  // 如果是根目录的 index.js 、不处理
  if (page.startsWith('./index.js')) {
    return
  }
  console.log(page)
  // 路径
  obj.path = page.slice(page.indexOf('/'), page.lastIndexOf('/index'))
  obj.name = page.slice(page.indexOf('/') + 1, page.lastIndexOf('/index'))
  obj.url = page.slice(page.indexOf('/') + 1, page.lastIndexOf('/index'))
  obj.component = pagesContext(page).default || pagesContext(page)
  console.log(JSON.stringify(obj))
  // const pagesModule = pagesContext(page)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  pages.push(obj)
})
export default pages
