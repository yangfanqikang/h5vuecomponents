<template>
  <div :class="{sticky:sticky}" :style="{top:stickyTop+'px'}" class="uni-title">
    <div v-if="type" class="uni-title__head">
      <div :class="type" class="uni-title__head-tag"/>
    </div>
    <div class="uni-title__content">
      <div :class="{'distraction':!subTitle}" class="uni-title__content-title">{{ title }}</div>
      <div class="uni-title__content-sub">{{ subTitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniTitle',
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
    },
    sticky: {
      type: Boolean,
      default: false
    },
    stickyTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {}
  },
  watch: {
    title (newVal) {
      // if (uni.report && newVal !== '') {
      //   uni.report('title', newVal)
      // }
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
  @charset "UTF-8";

  .uni-title {
    margin-top: 10px;
    z-index: 100;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    width: 100%;
    height: 50px;
    background-color: #fdfdfd;
    border-bottom: 1px #f5f5f5 solid;
    box-sizing: border-box
  }

  .uni-title.sticky {
    position: sticky
  }

  .uni-title__head {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px
  }

  .uni-title__head-tag.line {
    height: 15px;
    background: #ccc;
    border-radius: 5px;
    width: 3px
  }

  .uni-title__head-tag.circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #ccc
  }

  .uni-title__content {
    color: #464e52
  }

  .uni-title__content-title {
    font-size: 16px
  }

  .uni-title__content-title.distraction {
    display: flex;
    align-items: center
  }

  .uni-title__content-sub {
    font-size: 12px;
    color: #999
  }
</style>
