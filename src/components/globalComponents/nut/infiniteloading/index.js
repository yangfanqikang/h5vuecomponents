import InfiniteLoading from './nut-infiniteloading.vue';
import './infiniteloading.scss';

InfiniteLoading.install = function(Vue) {
  Vue.component(InfiniteLoading.name, InfiniteLoading);
};

export default InfiniteLoading
