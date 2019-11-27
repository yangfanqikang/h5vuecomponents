import Row from '../gridrow/nut-grid-row.vue';
import Col from '../gridcol/nut-grid-col.vue';
import './grid.scss';

Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};
Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

export {Row, Col};
