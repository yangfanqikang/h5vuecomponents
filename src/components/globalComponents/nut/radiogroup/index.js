import RadioGroup from './nut-radiogroup.vue';
import './radiogroup.scss';

RadioGroup.install = function(Vue) {
  Vue.component(RadioGroup.name, RadioGroup);
};

export default RadioGroup;
