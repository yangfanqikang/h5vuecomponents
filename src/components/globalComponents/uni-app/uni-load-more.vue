<template>
  <div class="uni-load-more">
    <div v-if="iconType==='circle' || iconType==='auto' && platform === 'android'"
         v-show="status === 'loading' && showIcon" class="uni-load-more__img">
      <div :style="{borderColor : color}" class="loader-android"/>
    </div>
    <div v-else v-show="status === 'loading' && showIcon" class="uni-load-more__img">
      <div class="load1 load">
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
      </div>
      <div class="load2 load">
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
      </div>
      <div class="load3 load">
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
        <div :style="{ background: color }" class="uni-load-div_wrapper"/>
      </div>
    </div>
    <p :style="{ color: color }" class="uni-load-more__text">
      {{ status === 'more' ? contentText.contentdown : status === 'loading' ? contentText.contentrefresh :
      contentText.contentnomore }}
    </p>
  </div>
</template>

<script>
// const platform = uni.getSystemInfoSync().platform
export default {
  name: 'UniLoadMore',
  props: {
    status: {
      // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
      type: String,
      default: 'more'
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    iconType: {
      type: String,
      default: 'auto'
    },
    color: {
      type: String,
      default: '#777777'
    },
    contentText: {
      type: Object,
      default () {
        return {
          contentdown: '上拉显示更多',
          contentrefresh: '正在加载...',
          contentnomore: '没有更多数据了'
        }
      }
    }
  },
  data () {
    return {
      platform: 'android'
    }
  }
}
</script>

<style scoped>
  @charset "UTF-8";

  .uni-load-more {
    display: flex;
    flex-direction: row;
    height: 40px;
    align-items: center;
    justify-content: center
  }

  .uni-load-more__text {
    font-size: 14px;
    color: #999
  }

  .uni-load-more__img {
    position: relative;
    height: 12px;
    width: 12px;
    margin-right: 5px
  }

  .uni-load-more__img > .load {
    position: absolute
  }

  .uni-load-more__img > .load .uni-load-div_wrapper {
    width: 3px;
    height: 1px;
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
    background: #999;
    position: absolute;
    opacity: .2;
    transform-origin: 50%;
    animation: load .96s ease infinite
  }

  .uni-load-more__img > .load .uni-load-div_wrapper:nth-child(1) {
    transform: rotate(90deg);
    top: 1px;
    left: 4px
  }

  .uni-load-more__img > .load .uni-load-div_wrapper:nth-child(2) {
    transform: rotate(180deg);
    top: 5px;
    right: 0
  }

  .uni-load-more__img > .load .uni-load-div_wrapper:nth-child(3) {
    transform: rotate(270deg);
    bottom: 1px;
    left: 4px
  }

  .uni-load-more__img > .load .uni-load-div_wrapper:nth-child(4) {
    top: 5px;
    left: 0
  }

  .uni-load-more__img > .loader-android {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    border: solid 1px #777;
    border-radius: 50%;
    border-bottom-color: transparent !important;
    animation: loader-android 1s 0s linear infinite
  }

  .load1,
  .load2,
  .load3 {
    height: 12px;
    width: 12px
  }

  .load2 {
    transform: rotate(30deg)
  }

  .load3 {
    transform: rotate(60deg)
  }

  .load1 .uni-load-div_wrapper:nth-child(1) {
    animation-delay: 0s
  }

  .load2 .uni-load-div_wrapper:nth-child(1) {
    animation-delay: 80ms
  }

  .load3 .uni-load-div_wrapper:nth-child(1) {
    animation-delay: .16s
  }

  .load1 .uni-load-div_wrapper:nth-child(2) {
    animation-delay: .24s
  }

  .load2 .uni-load-div_wrapper:nth-child(2) {
    animation-delay: .32s
  }

  .load3 .uni-load-div_wrapper:nth-child(2) {
    animation-delay: .4s
  }

  .load1 .uni-load-div_wrapper:nth-child(3) {
    animation-delay: .48s
  }

  .load2 .uni-load-div_wrapper:nth-child(3) {
    animation-delay: .56s
  }

  .load3 .uni-load-div_wrapper:nth-child(3) {
    animation-delay: .64s
  }

  .load1 .uni-load-div_wrapper:nth-child(4) {
    animation-delay: .72s
  }

  .load2 .uni-load-div_wrapper:nth-child(4) {
    animation-delay: .8s
  }

  .load3 .uni-load-div_wrapper:nth-child(4) {
    animation-delay: .88s
  }

  @-webkit-keyframes load {
    0% {
      opacity: 1
    }

    100% {
      opacity: .2
    }
  }

  @-webkit-keyframes loader-android {
    0% {
      transform: rotate(0)
    }

    100% {
      transform: rotate(360deg)
    }
  }
</style>
