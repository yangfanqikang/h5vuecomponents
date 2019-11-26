import BackTop from './nut-backtop.vue';
import './backtop.scss';

BackTop.install = function(Vue) {
  Vue.component(BackTop.name, BackTop);
};

export default BackTop
