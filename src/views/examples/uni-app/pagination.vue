<template>
  <page :title="this.$route.query.name">
    <uni-section title="默认样式" type="line"></uni-section>
    <div class="example-body">
      <uni-pagination :total="50" title="标题文字"/>
    </div>
    <uni-section title="修改按钮文字" type="line"></uni-section>
    <div class="example-body">
      <uni-pagination :total="50" title="标题文字" prev-text="前一页" next-text="后一页"/>
    </div>
    <uni-section title="图标样式" type="line"></uni-section>
    <div class="example-body">
      <uni-pagination :show-icon="true" :total="50" title="标题文字"/>
    </div>
    <uni-section title="修改数据长度" type="line"></uni-section>
    <div class="example-body">
      <uni-pagination :current="current" :total="total" title="标题文字" :show-icon="true" @change="change"/>
    </div>
    <div class="btn-div">
      <div>
        <p class="example-info">当前页：{{ current }}，数据总量：{{ total }}条，每页数据：{{ pageSize }}</p>
      </div>
      <van-button class="button word-btn" hover-class="word-btn--hover" :hover-start-time="20" :hover-stay-time="70"
           @click="add">
        <p class="word-btn-white">增加10条数据</p>
      </van-button>
      <van-button class="button" type="default" @click="reset">重置数据</van-button>
    </div>
  </page>
</template>

<script>
export default {
  data () {
    return {
      current: 1,
      total: 0,
      pageSize: 10
    }
  },
  methods: {
    add () {
      this.total += 10
    },
    reset () {
      this.total = 0
      this.current = 1
    },
    change (e) {
      console.log(e)
      this.current = e.current
    }
  }
}
</script>

<style>
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
    font-size: 14px;
    background-color: #ffffff;
  }

  /* #endif */
  .example {
    padding: 0 15px;
  }

  .example-info {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
    padding: 15px;
    color: #3b4144;
    background-color: #ffffff;
    font-size: 30px;
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
    margin: 7px;
    background-color: #007AFF;
  }

  .word-btn--hover {
    background-color: #4ca2ff;
  }

  .btn-div {
    /* #ifndef APP-PLUS-NVUE */
    display: flex;
    flex-direction: column;
    /* #endif */
    padding: 15px;
    text-align: center;
    background-color: #fff;
    justify-content: center;
    align-items: center;
  }

  .button {
    width: 350px;
  }
</style>
