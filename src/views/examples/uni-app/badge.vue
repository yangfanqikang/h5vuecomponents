<template>
  <page :title="this.$route.query.name">
    <p class="example-info">数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等</p>
    <uni-section title="有底色" type="line"></uni-section>
    <div class="example-body">
      <uni-badge class="uni-badge-left-margin" text="1"/>
      <uni-badge class="uni-badge-left-margin" text="2" type="primary"/>
      <uni-badge class="uni-badge-left-margin" text="34" type="success"/>
      <uni-badge class="uni-badge-left-margin" text="45" type="warning"/>
      <uni-badge class="uni-badge-left-margin" text="123" type="error"/>
    </div>
    <uni-section title="无底色" type="line"></uni-section>
    <div class="example-body">
      <uni-badge class="uni-badge-left-margin" :inverted="true" text="1"/>
      <uni-badge class="uni-badge-left-margin" :inverted="true" text="2" type="primary"/>
      <uni-badge class="uni-badge-left-margin" :inverted="true" text="34" type="success"/>
      <uni-badge class="uni-badge-left-margin" :inverted="true" text="45" type="warning"/>
      <uni-badge class="uni-badge-left-margin" :inverted="true" text="123" type="error"/>
    </div>
    <uni-section title="迷你" type="line"></uni-section>
    <div class="example-body">
      <uni-badge class="uni-badge-left-margin" text="1" size="small"/>
      <uni-badge class="uni-badge-left-margin" text="2" type="primary" size="small"/>
      <uni-badge class="uni-badge-left-margin" text="34" type="success" size="small"/>
      <uni-badge class="uni-badge-left-margin" text="45" type="warning" size="small"/>
      <uni-badge class="uni-badge-left-margin" text="123" type="error" size="small"/>
    </div>
  </page>
</template>

<script>
export default {
  data () {
    return {}
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

  div {
    font-size: 14px;
    line-height: inherit;
  }

  .example {
    padding: 0 15px 15px;
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
    font-size: 7px;
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
    font-size: 9px;
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

  /* #ifdef MP-ALIPAY */
  .uni-badge {
    margin-left: 10px;
  }

  /* #endif */
  .example-body {
    flex-direction: row;
    justify-content: flex-start;
  }

  .uni-badge-left-margin {
    margin-left: 10px;
  }
</style>
