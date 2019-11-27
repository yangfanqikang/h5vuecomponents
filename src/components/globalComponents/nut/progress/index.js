import Progress from './nut-progress.vue';
import './progress.scss';

Progress.install = function(Vue) {
  Vue.component(Progress.name, Progress);
};

export default Progress
