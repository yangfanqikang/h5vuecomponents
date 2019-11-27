import ShortPassword from './nut-shortpassword.vue';
import './shortpassword.scss';
ShortPassword.install = function(Vue){
    Vue.component(ShortPassword.name,ShortPassword);
}
export default ShortPassword;
