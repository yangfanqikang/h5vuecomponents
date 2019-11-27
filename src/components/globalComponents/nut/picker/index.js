import Picker from './nut-picker.vue';
import './picker.scss';

Picker.install = function(Vue) {
  Vue.component(Picker.name, Picker);
};

export default Picker
