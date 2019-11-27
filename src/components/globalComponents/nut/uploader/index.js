import Uploader from './nut-uploader.vue';
import './uploader.scss';

Uploader.install = function(Vue) {
  Vue.component(Uploader.name, Uploader);
};

export default Uploader
