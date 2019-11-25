<template>
  <div>
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

</style>
