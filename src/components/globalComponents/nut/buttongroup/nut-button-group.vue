<template>
    <div :class="cls">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'nut-button-group',
  props: {
    shape: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''

    }
  },
  data () {
    return {
      cls: ''
    }
  },
  mounted () {
    this.initStyle()
  },
  methods: {
    initStyle () {
      this.cls = `nut-buttongroup ${this.shape} ${this.type}`
    }
  }
}
</script>
<style lang="scss">
  @import "./buttongroup";
</style>
