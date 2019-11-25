<template>
  <page :title="this.$route.query.name">
    <uni-section title="基本用法" type="line"></uni-section>
    <div class="example-body">
      <uni-search-bar @confirm="search" @input="input" @cancel="cancel"/>
      <div class="search-result">
        <p class="search-result-text">当前输入为：{{ searchVal }}</p>
      </div>
    </div>
    <uni-section title="自定义样式" type="line"></uni-section>
    <div class="example-body">
      <uni-search-bar placeholder="自定义placeholder" @confirm="search"/>
      <uni-search-bar radius="100" placeholder="自定义圆角" @confirm="search"/>
    </div>
    <uni-section title="控制清除按钮" type="line"></uni-section>
    <div class="example-body">
      <uni-search-bar radius="2" clearButton="always" @confirm="search"/>
      <uni-search-bar radius="2" clearButton="auto" @confirm="search"/>
      <uni-search-bar radius="100" clearButton="no" @confirm="search"/>
    </div>
  </page>
</template>

<script>
export default {
  data () {
    return {
      searchVal: ''
    }
  },
  methods: {
    search (res) {
    },
    input (res) {
      this.searchVal = res.value
    },
    cancel (res) {
    }
  },
  onBackPress () {
    // #ifdef APP-PLUS
    // plus.key.hideSoftKeybord()
    // #endif
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

  .search-result {
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
  }

  .search-result-text {
    text-align: center;
    font-size: 14px;
  }

  .example-body {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
  }
</style>
