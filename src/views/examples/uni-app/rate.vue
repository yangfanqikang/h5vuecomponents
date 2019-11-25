<template>
  <page :title="this.$route.query.name">
    <text class="example-info">评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。</text>
    <uni-section title="基本用法" type="line"></uni-section>
    <div class="example-body">
      <uni-rate :value="4" @change="onChange"/>
    </div>
    <uni-section title="设置尺寸大小" type="line"></uni-section>
    <div class="example-body">
      <uni-rate :size="36" :value="10"/>
    </div>
    <uni-section title="设置评分数" type="line"></uni-section>
    <div class="example-body">
      <uni-rate :max="10" :value="10"/>
    </div>
    <uni-section title="设置星星间隔" type="line"></uni-section>
    <div class="example-body">
      <uni-rate :value="4" :margin="5"/>
    </div>
    <uni-section title="设置颜色" type="line"></uni-section>
    <div class="example-body">
      <uni-rate :value="3" color="#bbb" active-color="red"/>
    </div>
    <uni-section title="不可点击状态" type="line"></uni-section>
    <div class="example-body">
      <uni-rate :disabled="true" :value="3.5"/>
    </div>
    <uni-section title="未选中的星星为镂空状态" type="line"></uni-section>
    <div class="example-body">
      <uni-rate :value="3" :is-fill="false"/>
    </div>

  </page>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    onChange (e) {
      // console.log('rate发生改变:' + JSON.stringify(e))
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
    font-size: 28px;
    line-height: inherit;
  }

  .example {
    padding: 0 30px 30px;
  }

  .example-info {
    padding: 30px;
    color: #3b4144;
    background: #ffffff;
  }

  .example-body {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    font-size: 14px;
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
    padding: 30px;
    color: #3b4144;
    background-color: #ffffff;
    font-size: 30px;
  }

  .example-info-text {
    font-size: 28px;
    line-height: 36px;
  }

  .example-body {
    flex-direction: column;
    padding: 30px;
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
