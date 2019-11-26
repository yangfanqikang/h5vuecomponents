<template>
  <div class="page">
    <header-nav :title="title"/>
    <slot></slot>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav'
export default {
  name: 'page',
  props: ['title'],
  components: { HeaderNav }
}
</script>

<style scoped>
.page{
  background-color: #f6f6f6;
}
</style>
