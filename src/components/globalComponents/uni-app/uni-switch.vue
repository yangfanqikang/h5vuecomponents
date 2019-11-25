<template>
  <div class="switch clearfix"
       @click="toggle"
       v-bind:style="{ background: activeState ? activeColor : inActiveColor }">
    <div v-show="activeState" class="switch-text switch-on"
         transition="switchOn">{{activeText}}
    </div>
    <div class="switch-icon"></div>
    <div v-show="!activeState" class="switch-text switch-off">{{inActiveText}}</div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      Type: Boolean,
      default: false
    },
    activeText: {
      Type: String,
      default: 'on'
    },
    activeColor: {
      Type: String,
      default: 'green'
    },
    inActiveText: {
      Type: String,
      default: 'off'
    },
    inActiveColor: {
      Type: String,
      default: '#ddd'
    }
  },
  data () {
    return {
      activeState: this.active
    }
  },
  methods: {
    toggle () {
      this.activeState = !this.activeState
    }
  }
}
</script>

<style lang="scss" scoped>
  .switch {
    display: inline-block;
    border-radius: 15px;
    box-sizing: border-box;
    overflow: hidden;

    & > div {
      float: left;
    }

    .switch-text {
      height: 28px;
      line-height: 28px;
      color: #ffffff;
      font-size: 14px;
      padding: 0 8px;
    }

    .switch-icon {
      width: 26px;
      height: 26px;
      border-radius: 13px;
      background-color: #ffffff;
      border: 1px solid #dcdcdc;
      margin: 1px;
    }
  }
</style>
