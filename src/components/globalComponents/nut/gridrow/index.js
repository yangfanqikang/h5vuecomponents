import Gridrow from './nut-grid-row.vue';
import './gridrow.scss';

Gridrow.install = function(Vue) {
  Vue.component(Gridrow.name, Gridrow);
};

export default Gridrow
