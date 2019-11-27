import Gridcol from './nut-grid-col.vue';
import './gridcol.scss';

Gridcol.install = function(Vue) {
  Vue.component(Gridcol.name, Gridcol);
};

export default Gridcol
