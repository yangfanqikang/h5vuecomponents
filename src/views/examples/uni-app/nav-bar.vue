<template>
  <page :title="this.$route.query.name">
    <uni-nav-bar color="#ffffff" background-color="#007AFF" :status-bar="true" left-icon="arrowleft" left-text="返回"
                 title="标题" @clickLeft="back"/>
    <p class="example-info">
      本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考https://ask.dcloud.net.cn/article/34921</p>
    <uni-section title="基本用法" type="line"></uni-section>
    <div class="example-body">
      <uni-nav-bar left-icon="arrowleft" title="标题" @clickLeft="back"/>
    </div>

    <uni-section title="左右显示文字" type="line"></uni-section>
    <div class="example-body">
      <uni-nav-bar left-icon="arrowleft" right-text="菜单" left-text="返回" title="标题" @clickLeft="back"/>
    </div>
    <uni-section title="插入slot" type="line"></uni-section>
    <div class="example-body">
      <uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-icon="scan" @clickLeft="showCity"
                   @clickRight="scan">
        <div slot="left">
          <div class="city">
            <div>
              <text class="uni-nav-bar-text">{{ city }}</text>
            </div>
            <uni-icons type="arrowdown" color="#333333" size="44"/>
          </div>
        </div>
        <div class="input-div">
          <uni-icons class="input-uni-icon" type="search" size="44" color="#666666"/>
          <input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词" @confirm="confirm">
        </div>
      </uni-nav-bar>
    </div>
  </page>
</template>

<script>
// console.log(uni.getSystemInfoSync());

export default {
  data () {
    return {
      city: '北京'
    }
  },
  methods: {
    back () {
    },
    showMenu () {
    },
    clickLeft () {
      alert('asdlfj')
    },
    search () {
      alert('asdlfj')
    },
    showCity () {
      alert('asdlfj')
    },
    scan () {
      alert('asdlfj')
    },
    confirm () {
      alert('asdlfj')
    }
  },
  onPullDownRefresh () {
    console.log('onPullDownRefresh')
    // setTimeout(function () {
    //   uni.stopPullDownRefresh()
    //   console.log('stopPullDownRefresh')
    // }, 1000)
  }
}
</script>

<style scoped>
  /* 头条小程序组件内不能引入字体 */
  /* #ifdef MP-TOUTIAO */
  @font-face {
    font-family: uniicons;
    font-weight: normal;
    font-style: normal;
    src: url('../../../assets/font/uni/uni.ttf') format('truetype');
  }

  /* #endif */

  /* #ifndef APP-NVUE */
  page {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #efeff4;
    min-height: 100%;
    height: auto;
  }

  div {
    font-size: 14px;
    line-height: inherit;
  }

  .example {
    padding: 0 15px 15px;
  }

  p.example-info {
    padding: 15px;
    color: #3b4144;
    font-size: 14px;
    background: #ffffff;
  }

  .example-body {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    font-size: 8px;
    background-color: #ffffff;
  }

  .example {
    padding: 0 30px;
  }

  .example-info {
    display: block;
    padding: 15px;
    color: #3b4144;
    background-color: #ffffff;
    font-size: 15px;
  }

  .example-info-text {
    font-size: 14px;
    line-height: 18px;
  }

  .example-body {
    flex-direction: column;
    padding: 15px;
    background-color: #ffffff;
  }

  .word-btn-white {
    font-size: 18px;
    color: #FFFFFF;
  }

  .word-btn {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    height: 24px;
    margin: 7px;
    background-color: #007AFF;
  }

  .word-btn--hover {
    background-color: #4ca2ff;
  }

  .uni-nav-bar-text {
    font-size: 14px;
  }

  .city {
    /* #ifndef APP-PLUS-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* width: 160px;
 */
    margin-left: 2px;
  }

  .input-div {
    /* #ifndef APP-PLUS-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    /* width: 500px;
 */
    flex: 1;
    background-color: #f8f8f8;
    height: 30px;
    border-radius: 15px;
    padding: 0 7px;
    flex-wrap: nowrap;
    margin: 3px 0;
    line-height: 30px;
  }

  .input-uni-icon {
    line-height: 15px;
  }

  .nav-bar-input {
    height: 30px;
    line-height: 30px;
    /* #ifdef APP-PLUS-NVUE */
    width: 185px;
    /* #endif */
    padding: 0 2px;
    font-size: 14px;
    background-color: #f8f8f8;
    border:none;
  }

  .example-body {
    padding: 0;
  }
</style>
