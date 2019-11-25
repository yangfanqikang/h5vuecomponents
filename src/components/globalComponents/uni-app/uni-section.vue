<template>
  <div class="uni-section">
    <div v-if="type" class="uni-section__head">
      <div :class="type" class="uni-section__head-tag"/>
    </div>
    <div class="uni-section__content">
      <p :class="{'distraction':!subTitle}" class="uni-section__content-title">{{ title }}</p>
      <p v-if="subTitle" class="uni-section__content-sub">{{ subTitle }}</p>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'uni-section',
  props: {
    type: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  watch: {
    title (newVal) {
      return newVal
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
<style scoped>
  .uni-section {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    margin-top: 5px;
    flex-direction: row;
    align-items: center;
    padding: 0 5px;
    height: 50px;
    background-color: #f8f8f8;
    border-bottom-color: #e5e5e5;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    font-weight: normal;
  }

  .uni-section__head {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }

  .line {
    height: 14px;
    background-color: #c0c0c0;
    border-radius: 3px;
    width: 4px;
  }

  .circle {
    width: 4px;
    height: 4px;
    border-radius: 25px;
    background-color: #c0c0c0;
  }

  .uni-section__content {
    flex: 1;
    color: #333;
  }

  .uni-section__content-title {
    font-size: 14px;
    color: #333;
    line-height: 1.5em;
  }

  .distraction {
    flex-direction: row;
    align-items: center;
  }

  .uni-section__content-sub {
    font-size: 12px;
    color: #999;
  }
</style>
