import Scroller from './nut-scroller.vue';
import './scroller.scss';

Scroller.install = function(Vue) {
  Vue.component(Scroller.name, Scroller);
};

export default Scroller
