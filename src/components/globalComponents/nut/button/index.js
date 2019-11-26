import Button from './nut-button.vue';
import './button.scss';

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
