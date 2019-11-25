<template>
  <page :title="this.$route.query.name">
    <div class="example-info">加载更多组件用于页面加载更多数据时，页面底部显示内容等场景。</div>
    <div class="example-title">基本用法</div>
    <div class="example-body">
      <uni-load-more :status="status"/>
    </div>
    <div class="example-title">修改默认颜色及文字</div>
    <div class="example-body">
      <uni-load-more :status="status" :content-text="contentText" color="#007aff"/>
    </div>
    <div class="example-title">指定加载图标样式</div>
    <div class="example-body">
      <uni-load-more iconType="circle" :status="status"/>
      <uni-load-more iconType="auto" :status="status"/>
      <uni-load-more iconType="spinner" :status="status"/>
    </div>

    <div class="example-title">改变组件状态</div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="加载前" clickable @click="clickRadio('1', 'more')">
          <van-radio slot="right-icon" name="1" />
        </van-cell>
        <van-cell title="加载中" clickable @click="clickRadio('2', 'loading')">
          <van-radio slot="right-icon" name="2" />
        </van-cell>
        <van-cell title="没有更多" clickable @click="clickRadio('3', 'noMore')">
          <van-radio slot="right-icon" name="3" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
<!--    <radio-group class="uni-list" @change="onChange">-->
<!--      <label v-for="(item, index) in statusTypes" :key="index" class="uni-list-item">-->
<!--        <div class="uni-list-item__container">-->
<!--          <div class="uni-list-item__content">-->
<!--            <div class="uni-list-item__content-title">{{ item.text }}</div>-->
<!--          </div>-->
<!--          <div class="uni-list-item__extra">-->
<!--            <radio :value="item.value" :checked="item.checked"/>-->
<!--          </div>-->
<!--        </div>-->
<!--      </label>-->
<!--    </radio-group>-->
  </page>
</template>
<script>

export default {
  data () {
    return {
      radio: '1',
      status: 'more',
      statusTypes: [{
        value: 'more',
        text: '加载前',
        checked: true
      }, {
        value: 'loading',
        text: '加载中',
        checked: false
      }, {
        value: 'noMore',
        text: '没有更多',
        checked: false
      }],
      contentText: {
        contentdown: '查看更多',
        contentrefresh: '加载中',
        contentnomore: '没有更多'
      }
    }
  },
  methods: {
    clickRadio (num, value) {
      this.radio = num
      this.status = value
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

  uni-radio-group uni-label {
    padding: 0;
  }

  .uni-list {
    background: #fff;
  }

  .example-body {
    padding: 5px 15px;
  }

  .uni-list-item__container {
    padding: 12px 15px;
    width: 100%;
    box-sizing: border-box;
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .uni-list-item__container:after {
    position: absolute;
    z-index: 3;
    right: 0;
    bottom: 0;
    left: 15px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
  }
</style>
