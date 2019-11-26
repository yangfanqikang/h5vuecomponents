import CheckBoxGroup from './nut-checkboxgroup.vue';
import './checkboxgroup.scss';

CheckBoxGroup.install = function(Vue) {
  Vue.component(CheckBoxGroup.name, CheckBoxGroup);
};

export default CheckBoxGroup
