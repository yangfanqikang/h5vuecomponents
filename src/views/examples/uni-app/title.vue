<template>
  <page class="uni-wrap" :title="this.$route.name">
    <div class="scroll" scroll-y>
      <div class="example-info">
        uni-title 组件主要用于文章、列表详情的等标题展示
      </div>
      <uni-title class="uni-title" title="基础用法" sub-title="离开页面修改导航栏标题"></uni-title>
      <div class="example-body">
        <uni-list>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
        </uni-list>
      </div>
      <uni-title title="竖线装饰" sub-title="副标题" type="line"></uni-title>
      <div class="example-body">
        <uni-list>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
        </uni-list>
      </div>
      <uni-title title="圆形装饰" sub-title="副标题" type="circle"></uni-title>
      <div class="example-body">
        <uni-list>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
          <uni-list-item title="item"/>
        </uni-list>
      </div>
    </div>
  </page>
</template>

<script>
let observer = null

export default {
  data () {
    return {
      appear: false
    }
  },
  created () {
    // const systeminfo = uni.getSystemInfoSync()
    // observer = uni.createIntersectionObserver(this)
    // observer.relativeTo('.scroll', {
    //   top: -systeminfo.windowTop
    // }).observe('.uni-title', (res) => {
    //   if (res.intersectionRatio > 0 && !this.appear) {
    //     uni.setNavigationBarTitle({
    //       title: 'Title 标题栏'
    //     })
    //   } else {
    //     uni.setNavigationBarTitle({
    //       title: '修改后的标题'
    //     })
    //   }
    // })
  },
  destroyed () {
    if (observer) {
      observer.disconnect()
    }
  },
  methods: {}
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
    font-size: 14px;
    line-height: inherit
  }

  .example {
    padding: 0 30px 30px
  }

  .example-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
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
    padding: 15px;
    font-size: 14px;
    color: #3b4144;
    background: #fff
  }

  .uni-wrap {
    /* #ifdef H5 */
    height: calc(100vh - 44px);
    /* #endif */
    /* #ifndef H5 */
    height: 100vh;
    /* #endif */
  }

  .scroll {
    height: 100%;
  }

  .example-body {
    padding: 0;
  }

  .seat {
    height: 500px;
    border: 1px red solid;
  }

  .div {
    height: 400px;
    background: #fff;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .scroll-area {
    height: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .notice {
    margin-top: 150px;
    margin: 150px 0 400px 0;
  }

  .ball {
    width: 200px;
    height: 200px;
    background: #4cd964;
    border-radius: 50%;
  }
</style>
