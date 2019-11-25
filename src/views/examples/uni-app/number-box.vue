<template>
  <page class="page" :title="this.$route.query.name">
    <p class="example-info">数字输入框组件多用于购物车加减商品等场景</p>
    <uni-section title="基本用法" type="line"></uni-section>
    <div class="example-body">
      <uni-number-box/>
    </div>
    <uni-section title="设置最小值和最大值" type="line"></uni-section>
    <div class="example-body">
      <uni-number-box :min="2" :max="9" :value="5"/>
    </div>
    <uni-section title="设置步长（步长0.1)" type="line"></uni-section>
    <div class="example-body">
      <uni-number-box :step="0.1"/>
    </div>
    <uni-section title="禁用状态" type="line"></uni-section>
    <div class="example-body">
      <uni-number-box :disabled="true"/>
    </div>
    <uni-section :title="'获取输入的值 : '+numberValue" type="line"></uni-section>
    <div class="example-body">
      <uni-number-box :value="numberValue" @change="change"/>
    </div>
    <!-- <div style="height: 30px;"></div> -->
  </page>
</template>
<script>
export default {
  data () {
    return {
      numberValue: 0
    }
  },
  methods: {
    change (value) {
      this.numberValue = value
    }
  }
}
</script>
<style>
  /* 头条小程序组件内不能引入字体 */
  /* #ifdef MP-TOUTIAO */
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
    padding: 0 30px 30px;
  }

  .example-info {
    padding: 15px;
    color: #3b4144;
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

  /* #endif */
  .example {
    padding: 0 30px;
  }

  .example-info {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
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
    border-radius: 6px;
    height: 48px;
    margin: 15px;
    background-color: #007AFF;
  }

  .word-btn--hover {
    background-color: #4ca2ff;
  }
</style>
