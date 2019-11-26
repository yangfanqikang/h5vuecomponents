<template>
  <page class="content" :title="this.$route.query.name">
    <uni-swiper-dot :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles" field="content">
      <swiper class="swiper-box" @change="change" :options="swiperOption">
        <swiper-slide v-for="(item, index) in info" :key="index">
          <div :class="item.colorClass" class="swiper-item">
            <img :src="item.url"/>
          </div>
        </swiper-slide>
      </swiper>
    </uni-swiper-dot>
    <div class="example-title">模式选择</div>
    <div class="example-body">
      <div :class="{ active: modeIndex === 0 }" class="example-body-item" @click="selectMode('default', 0)">default
      </div>
      <div :class="{ active: modeIndex === 1 }" class="example-body-item" @click="selectMode('dot', 1)">dot</div>
      <div :class="{ active: modeIndex === 2 }" class="example-body-item" @click="selectMode('round', 2)">round</div>
      <div :class="{ active: modeIndex === 3 }" class="example-body-item" @click="selectMode('nav', 3)">nav</div>
      <div :class="{ active: modeIndex === 4 }" class="example-body-item" @click="selectMode('indexes', 4)">indexes
      </div>
    </div>
    <div class="example-title">颜色样式选择</div>
    <div class="example-body">
      <template v-if="mode !== 'nav'">
        <div v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
             class="example-body-item" @click="selectStyle(index)">
          <div :style="{ 'background-color': item.selectedBackgroundColor, border: item.selectedBorder }"
               class="example-body-dots"/>
          <div :style="{ 'background-color': item.backgroundColor, border: item.border }" class="example-body-dots"/>
          <div :style="{ 'background-color': item.backgroundColor, border: item.border }" class="example-body-dots"/>
        </div>
      </template>
      <template v-if="mode === 'nav'">
        <div v-for="(item, index) in dotStyle" :class="{ active: styleIndex === index }" :key="index"
             :style="{ 'background-color': item.selectedBackgroundColor }" class="example-body-item"
             @click="selectStyle(index)">
          <text :style="{ color: item.color }">内容</text>
        </div>
      </template>
    </div>
  </page>
</template>

<script>
import Page from '../../../components/globalComponents/page'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: { Page, swiper, swiperSlide },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        speed: 600 // config参数同swiper4,与官网一致
      },
      info: [{
        colorClass: 'uni-bg-red',
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
        content: '内容 A'
      },
      {
        colorClass: 'uni-bg-green',
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
        content: '内容 B'
      },
      {
        colorClass: 'uni-bg-blue',
        url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
        content: '内容 C'
      }
      ],
      dotStyle: [{
        backgroundColor: 'rgba(0, 0, 0, .3)',
        border: '1px rgba(0, 0, 0, .3) solid',
        color: '#fff',
        selectedBackgroundColor: 'rgba(0, 0, 0, .9)',
        selectedBorder: '1px rgba(0, 0, 0, .9) solid'
      },
      {
        backgroundColor: 'rgba(255, 90, 95,0.3)',
        border: '1px rgba(255, 90, 95,0.3) solid',
        color: '#fff',
        selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
        selectedBorder: '1px rgba(255, 90, 95,0.9) solid'
      },
      {
        backgroundColor: 'rgba(83, 200, 249,0.3)',
        border: '1px rgba(83, 200, 249,0.3) solid',
        color: '#fff',
        selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
        selectedBorder: '1px rgba(83, 200, 249,0.9) solid'
      }
      ],
      modeIndex: -1,
      styleIndex: -1,
      current: 0,
      mode: 'default',
      dotsStyles: {}
    }
  },
  mounted () {
  },
  methods: {
    change (e) {
      this.current = e.detail.current
    },
    selectStyle (index) {
      this.dotsStyles = this.dotStyle[index]
      this.styleIndex = index
    },
    selectMode (mode, index) {
      this.mode = mode
      this.modeIndex = index
      this.styleIndex = -1
      this.dotsStyles = this.dotStyle[0]
    }
  }
}
</script>

<style>
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #efeff4
  }

  div {
    font-size: 28px;
    line-height: inherit
  }

  .example {
    padding: 0 30px 30px
  }

  .example-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    color: #464e52;
    padding: 30px 30px 30px 50px;
    margin-top: 20px;
    position: relative;
    background-color: #fdfdfd;
    border-bottom: 1px #f5f5f5 solid
  }

  .example-title__after {
    position: relative;
    color: #031e3c
  }

  .example-title:after {
    content: '';
    position: absolute;
    left: 30px;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 6px;
    height: 32px;
    background-color: #ccc
  }

  .example .example-title {
    margin: 40px 0
  }

  .example-body {
    padding: 30px;
    background: #fff
  }

  .example-info {
    padding: 30px;
    color: #3b4144;
    background: #fff
  }

  .swiper-box {
    height: 400px;
  }

  .swiper-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: #eee;
    color: #fff;
    overflow: hidden;
  }

  .swiper-item img {
    width: 100%;
    /*height: 100%;*/
  }

  .uni-bg-red {
    background: #ff5a5f;
  }

  .uni-bg-green {
    background: #09bb07;
  }

  .uni-bg-blue {
    background: #007aff;
  }

  .example-body {
    display: flex;
    padding: 20px;
  }

  .example-body-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    height: 60px;
    width: 100%;
    font-size: 28px;
    color: #333;
    border: 1px #eee solid;
    border-radius: 10px;
  }

  .example-body-dots {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #333333;
    margin-left: 10px;
    box-sizing: border-box;
  }

  .example-body-dots:first-child {
    margin: 0;
  }

  .active {
    border: 1px #000 solid;
  }
</style>
