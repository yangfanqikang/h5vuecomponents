import Rate from './nut-rate.vue';
import './rate.scss';

Rate.install = function(Vue) {
  Vue.component(Rate.name, Rate);
};

export default Rate;
