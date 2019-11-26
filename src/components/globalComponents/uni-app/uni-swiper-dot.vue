<template>
  <div class="uni-swiper__warp">
    <slot/>
    <div v-if="mode === 'default'" :style="{'bottom':dots.bottom + 'px'}" class="uni-swiper__dots-box">
      <div v-for="(item,index) in info" :style="{
        'width': (index === current? dots.width*2:dots.width ) + 'px','height':dots.width/3 +'px' ,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor,'border-radius':'0px'}"
           :key="index" class="uni-swiper__dots-item uni-swiper__dots-bar"/>
    </div>
    <div v-if="mode === 'dot'" :style="{'bottom':dots.bottom + 'px'}" class="uni-swiper__dots-box">
      <div v-for="(item,index) in info" :style="{
        'width': dots.width + 'px','height':dots.height +'px' ,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor,'border':index !==current ? dots.border:dots.selectedBorder}"
           :key="index" class="uni-swiper__dots-item"/>
    </div>
    <div v-if="mode === 'round'" :style="{'bottom':dots.bottom + 'px'}" class="uni-swiper__dots-box">
      <div v-for="(item,index) in info" :class="[index === current&&'uni-swiper__dots-long']" :style="{'width':(index === current? dots.width*3:dots.width ) + 'px','height':dots.height +'px' ,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor,'border':index !==current ? dots.border:dots.selectedBorder}"
           :key="index" class="uni-swiper__dots-item "/>
    </div>
    <div v-if="mode === 'nav'" :style="{'background-color':dotsStyles.backgroundColor}"
         class="uni-swiper__dots-box uni-swiper__dots-nav">
      <div :style="{'color':dotsStyles.color}" class="uni-swiper__dots-nav-item">{{ (current+1)+'/'+info.length }}
        {{ info[current][field] }}
      </div>
    </div>
    <div v-if="mode === 'indexes'" :style="{'bottom':dots.bottom + 'px'}" class="uni-swiper__dots-box">
      <div v-for="(item,index) in info" :style="{
        'width':dots.width + 'px','height':dots.height +'px' ,'color':index === current?dots.selectedColor:dots.color,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor,'border':index !==current ? dots.border:dots.selectedBorder}"
           :key="index" class="uni-swiper__dots-item uni-swiper__dots-indexes">{{ index+1 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniSwiperDot',
  props: {
    info: {
      type: Array,
      default () {
        return []
      }
    },
    current: {
      type: Number,
      default: 0
    },
    dotsStyles: {
      type: Object,
      default () {
        return {}
      }
    },
    // 类型 ：default(默认) indexes long nav
    mode: {
      type: String,
      default: 'default'
    },
    // 只在 nav 模式下生效，变量名称
    field: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dots: {
        width: 8,
        height: 8,
        bottom: 10,
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        border: '1px rgba(0, 0, 0, .3) solid',
        selectedBackgroundColor: '#333',
        selectedBorder: '1px rgba(0, 0, 0, .9) solid'
      }
    }
  },
  watch: {
    dotsStyles (newVal) {
      this.dots = Object.assign(this.dots, this.dotsStyles)
    },
    mode (newVal) {
      if (newVal === 'indexes') {
        this.dots.width = 20
        this.dots.height = 20
      } else {
        this.dots.width = 8
        this.dots.height = 8
      }
    }

  },
  created () {
    if (this.mode === 'indexes') {
      this.dots.width = 20
      this.dots.height = 20
    }
    this.dots = Object.assign(this.dots, this.dotsStyles)
  }
}
</script>

<style>
  .uni-swiper__warp {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .uni-swiper__dots-box {
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
  }

  .uni-swiper__dots-item {
    flex-shrink: 0;
    width: 16px;
    border-radius: 50%;
    margin-left: 12px;
    background: rgba(0, 0, 0, .3);
    transition: all 0.2s linear;
  }

  .uni-swiper__dots-item:first-child {
    margin: 0;
  }

  .uni-swiper__dots-default {
    border-radius: 50%;
  }

  .uni-swiper__dots-long {
    border-radius: 100px;
  }

  .uni-swiper__dots-bar {
    border-radius: 100px;
  }

  .uni-swiper__dots-nav {
    bottom: 0;
    height: 80px;
    justify-content: flex-start;
    background: rgba(0, 0, 0, 0.2);
    box-sizing: box-sizing;
    overflow: hidden;
  }

  .uni-swiper__dots-nav-item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 28px;
    color: #fff;
    box-sizing: box-sizing;
    margin: 0 30px;
  }

  .uni-swiper__dots-indexes {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
  }
</style>
