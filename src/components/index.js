// import StatusBar from './StatusBar'
// import UniCard from './uni-app/uni-card'
// import UniSection from './uni-app/uni-section'
// import UniBadge from './uni-app/uni-badge'
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
let uniComponents = require.context('./globalComponents', true, /\.vue$/)
uniComponents.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = uniComponents(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  // const componentName = componentConfig.default.name || componentConfig.name
  console.log(componentName)
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})
// const funcGC = () => {
//   uniComponents.keys().forEach(key => {
//     if (key.startsWith('./index')) {
//       return
//     }
//     uni = uni.concat(uniComponents.default || uniComponents)
//     return console.log(uniComponents(key))
//   })
// }
// const fun2 = (Vue) => {
//   // 注册组件
//   // 使用Vue.component()注册组件时，全局id自动作为组件的名称
//   // 也就是说，此时第一参数为组件的名称
//   Vue.component(StatusBar.name, StatusBar)
//   Vue.component(UniCard.name, UniCard)
//   Vue.component(UniSection.name, UniSection)
//   Vue.component(UniBadge.name, UniBadge)
// }
// export {
//   funcGC,
//   fun2
// }

// export default (Vue) => {
//   // 注册组件
//   // 使用Vue.component()注册组件时，全局id自动作为组件的名称
//   // 也就是说，此时第一参数为组件的名称
//   Vue.component(StatusBar.name, StatusBar)
//   Vue.component(UniCard.name, UniCard)
//   Vue.component(UniSection.name, UniSection)
//   Vue.component(UniBadge.name, UniBadge)
// }
