import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import 'utils/permission'
import mixin from './mixins/mixin'
import SvgIcon from 'components/SvgIcon'
import createDemoModule from '@/utils/mand/create-demo-module'
import '@/icons' // icon
import '@/style/common.scss'
import '@/assets/font/font1/iconfont.css'
import '@/style/mand/mand-mobile-example.css'
import { Lazyload, NavBar, Icon, Button, RadioGroup, Radio, Cell, CellGroup, Toast, PullRefresh, List, Popup, Picker } from 'vant'
import defaultSettings from '@/settings'
// import GlobalComponents from './components/index'
import './components/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

// options 为可选参数，无则不传
Vue.use(Lazyload).use(NavBar).use(Icon).use(Button).use(RadioGroup).use(Radio).use(Cell).use(CellGroup).use(Toast).use(PullRefresh).use(List).use(Popup).use(Picker)
Vue.use(VueAwesomeSwiper)
// Vue.use(GlobalComponents)
Vue.component('svg-icon', SvgIcon)
Vue.prototype.createDemoModule = createDemoModule
Vue.mixin(mixin)
if (process.env.NODE_ENV === 'development' && defaultSettings.vconsole) {
  const VConsole = require('vconsole')
  // eslint-disable-next-line
  const my_console = new VConsole()
}
// var vConsole = new VConsole(option)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
