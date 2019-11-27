import CountDown from './nut-countdown.vue';
import './countdown.scss';

CountDown.install = function(Vue) {
  Vue.component(CountDown.name, CountDown);
};

export default CountDown;
