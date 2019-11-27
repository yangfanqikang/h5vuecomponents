import TabBar from './nut-tabbar.vue';
import './tabbar.scss';

TabBar.install = function(Vue) {
  Vue.component(TabBar.name, TabBar);
};

export default TabBar;
