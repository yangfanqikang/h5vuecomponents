import Tab from './nut-tab.vue';
import './tab.scss';

Tab.install = function(Vue) {
  Vue.component(Tab.name, Tab);
};

export default Tab;
