import NavBar from './nut-navbar.vue';
import './navbar.scss';

NavBar.install = function(Vue) {
  Vue.component(NavBar.name, NavBar);
};

export default NavBar
