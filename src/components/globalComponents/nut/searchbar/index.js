import SearchBar from './nut-searchbar.vue';
import './searchbar.scss';

SearchBar.install = function(Vue) {
  Vue.component(SearchBar.name, SearchBar);
};

export default SearchBar
