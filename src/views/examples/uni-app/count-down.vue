<template>
  <page :title="this.$route.query.name">
    <div class="example-info">倒计时组件主要用于促销商品剩余时间，发送短信验证等待时间等场景</div>
    <div class="example-title">一般用法</div>
    <div class="example-body">
      <uni-count-down :day="1" :hour="1" :minute="12" :second="40"/>
    </div>
    <div class="example-title">不显示天数</div>
    <div class="example-body">
      <uni-count-down :show-day="false" :hour="12" :minute="12" :second="12"/>
    </div>
    <div class="example-title">文字分隔符</div>
    <div class="example-body">
      <uni-count-down :minute="30" :second="0" :show-colon="false"/>
    </div>
    <div class="example-title">修改颜色</div>
    <div class="example-body">
      <uni-count-down :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#00B26A"
                      border-color="#00B26A"/>
    </div>
    <div class="example-title">倒计时回调事件</div>
    <div class="example-body">
      <uni-count-down :show-day="false" :second="10" @timeup="timeup"/>
    </div>
  </page>
</template>
<script>

export default {
  data () {
    return {}
  },
  methods: {
    timeup () {
      this.$toast('时间到')
    }
  }
}
</script>

<style scoped>
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
    padding: 0 15px 15px
  }

  .example-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #464e52;
    padding: 15px 15px 15px 25px;
    margin-top: 10px;
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
    left: 15px;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 3px;
    height: 16px;
    background-color: #ccc
  }

  .example .example-title {
    margin: 20px 0
  }

  .example-body {
    padding: 15px;
    background: #fff
  }

  .example-info {
    padding: 15px;
    color: #3b4144;
    background: #fff
  }

  .title {
    margin: 40px 0 10px 0;
  }
</style>
