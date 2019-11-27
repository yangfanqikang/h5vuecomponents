import Menu from './nut-menu.vue';
import './menu.scss';

Menu.install = function(Vue) {
  Vue.component(Menu.name, Menu);
};

export default Menu
