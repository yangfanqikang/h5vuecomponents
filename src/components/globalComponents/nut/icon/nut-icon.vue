<template>
  <i :class="['nut-icon','nut-icon-'+type]" :style="{'height':size,'width':size,'color':color||'', 'background': 'url(' + icon +') no-repeat'}">
  </i>
</template>
<script>
const types = ['top', 'action', 'cross', 'down', 'right', 'more', 'plus', 'search', 'trolley', 'tick', 'minus', 'circle-cross']

export default {
  name: 'nut-icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#2e2d2d'
    }
  },
  data () {
    return {
      icon: null
    }
  },
  created () {
    if (types.indexOf(this.type) === -1) {
      console.error('nut-icon组件type值(' + this.type + ')有误，无此icon!')
    } else {
      // this.icon = require('../../../../assets/svg/' + this.type + '.svg')
      this.icon = require('@/assets/svg/' + this.type + '.svg')
      // this.icon = require('../../../../assets/svg/search.svg')
    }
  },
  methods: {}
}
</script>
<style lang="scss">
  @import "./icon.scss";
</style>
